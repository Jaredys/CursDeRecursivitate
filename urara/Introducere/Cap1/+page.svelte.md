---
title: '2. Recursivitatea in informatica - Factorialul'
image: '/Introducere/recursion-meme.jpg'
alt: 'Recursivitate'
created: 2023-12-01
updated: 2023-12-01
tags:
  - 'Introducere'
  - 'Incepatori'
---

---

## Cum am defini un subprogram recursiv? 🤔

Sa luam ca exemplu factorialul unui numar.
Observam ca:

`3! = 3 * 2!    2! = 2 * 1!   1! = 1 * 0!   0! = 0 * (-1)!`

De aici am putea deduce că **0!=0** și înlocuind în relațiile de mai sus obținem că **n!=0**, pentru orice număr natural n.
Bineînțeles, nu este corect. De fapt, formula recursivă pentru n! se aplică numai pentru `n>0`, iar prin definiție `0!=1`.

Astfel, identificăm următoarea definiție pentru **n!**, acum completă:

- n! = 1, daca n = 0
- n\*(n-1)! daca n > 0

---

## Astfel, subprogramul ar arata cam asa:

```cpp
  int fact(int n){
        if(n == 0)
            return 1;
        else
            return n * fact(n-1);
  }

```

### Iterativ...

```cpp
int fact(int n){
    int p = 1;
    for(int i = 1 ; i <= n ; i ++)
        p = p * i;
    return p;
}
```

---

# Dar cum funcționează recursivitatea?

Ne amintim că toate variabilele locale din definiția unei funcții precum și valorile parametrilor formali se memorează la apel în memoria de tip **STIVĂ (STACK)**.

- Pentru fiecare apel al unei funcții se adaugă pe stivă o **zonă de memorie** în care se memorează variabilele locale și parametrii pentru apelul curent. Această zonă a stivei va exista până la finalul apelului, după care se va elibera.

- Dacă din apelul curent se face un alt apel, se adaugă pe stivă **o nouă zonă de memorie**, iar conținutul zonei anterioare este inaccesibil până la finalul acelui apel. Aceste operații se fac la fel și dacă al doilea apel este un autoapel al unei funcții recursive.

Haide sa calculam 4!:
![Recursivitate](/Introducere/Cap1/stackcall.gif)

Să urmărim pas cu pas execuția acestui program:

```cpp
  int fact(int n){
        if(n == 0)
            return 1;
        else
            return n * fact(n-1);
  }

```

| Nr. Apel | Parametru n | Return                   |
| -------- | ----------- | ------------------------ |
| 1        | 4           | -                        |
| 2        | 3           | 4 _ fact(3) = 4 _ 6 = 24 |
| 3        | 2           | 3 _ fact(2) = 3 _ 2 = 6  |
| 4        | 1           | 2 _ fact(1) = 2 _ 1 = 2  |
| 5        | 0           | 1                        |

---

## Observații

- este obligatoriu ca în definiția unei funcții recursive să apară **cazul particular** (în care să nu aibă loc autoapelul). În caz contrar autoapelurile vor avea loc “**la nesfârșit**”. De fapt, în urma prea multor autoapeluri, stiva se va ocupa în totalitate și execuția programului se va întrerupe.

- este obligatoriu ca, pentru <u>cazurile neelementare</u>, valorile la autoapel a parametrilor <u>să se apropie de valorile din cazul elementar</u>. Altfel se va întâmpla situația descrisă mai sus: stiva se va ocupa în totalitate și programul se va opri, fără a determina/afișa rezultatele dorite 😅.

![Infinit](/Introducere/Cap1/infinit.jpg)

---

### Cum facem autoapelul?

- Autoapelul se face în conformitate cu antetul funcției recursive. Astfel:

  - dacă funcția recursivă este de tip `non-void`, autoapelul se va face într-o expresie; [1](/Introducere/Cap1/#func%C8%9Bie-de-tip-non-void)

  - dacă funcția recursivă este de tip `void`, autoapelul se va face într-o instrucțiune de sine stătătoare; dacă funcția întoarce valori, se vor folosi parametri de ieșire. [2](/Introducere/Cap1/#func%C8%9Bie-de-tip-void)

### Funcție de tip non-void

```cpp
  int fact(int n){
    int r;
    if(n == 0)
        r = 1;
    else
        r = n * fact(n - 1);
    return r;
}
int main(){
    int a;
    a = fact(4);
    cout << a;
    return 0;
}

```

Funcția `fact` este o funcție recursivă în limbajul C++. Această funcție calculează factorialul unui număr dat `n`. În interiorul funcției, verificăm mai întâi dacă `n` este egal cu 0. Dacă este adevărat, înseamnă că factorialul pentru 0 este 1, așa că se atribuie valoarea 1 variabilei `r`.

În caz contrar, dacă `n` nu este 0, funcția calculează factorialul prin înmulțirea lui `n` cu rezultatul funcției `fact` aplicată asupra lui `n - 1`. Aceasta este abordarea recursivă, unde funcția `fact` se autoapelează cu un argument redus până când atinge cazul de bază, când `n` devine 0.

La final, funcția returnează rezultatul `r`, care conține valoarea factorialului calculat. Recursivitatea este utilizată aici pentru a rezolva problema calculării factorialului printr-o metodă care se bazează pe apeluri repetitive ale funcției până când se atinge condiția de oprire.

### Funcție de tip void

```cpp
void fact(int n, int &r){
    if(n == 0)
        r = 1;
    else{
        fact(n - 1 , r);
        r = r * n;
    }
}
int main(){
    int a;
    fact(4, a);
    cout << a;
    return 0;
}
```

---

## Tipuri de recusivitate

- recursivitate **directă**: în definiția funcției F apare apelul funcției F;
- recursivitate **indirectă**: în definiția funcției F apare apelul funcției G, iar în definiția funcției G apare apelul lui F.

---

[Urmatorul: Sirului lui Fibonacci](/Introducere/Cap2/)
