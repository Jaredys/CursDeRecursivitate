---
title: '3.1 Fibonacci - Probleme Rezolvate'
image: '/Introducere/Cap2/fibonacci.jpg'
alt: 'Recursivitate'
created: 2023-11-22
updated: 2023-11-22
tags:
  - 'Introducere'
  - 'Incepatori'
  - 'Probleme Rezolvate'
---

---

## Problema #256 [FiboVerif](https://www.pbinfo.ro/probleme/256/fiboverif)

Se consideră șirul **Fibonacci**, definit astfel: f1=1, f2=1, fn=fn-1+fn-2, dacă n>2.

### Cerința

Se dau n numere naturale. Să se verifice despre fiecare dacă este termen al șirului lui Fibonacci.

### Date de intrare

Programul citește de la tastatură numărul n și apoi n numere naturale.

| Date de intrare      |
| -------------------- |
| 8                    |
| 13 1 8 24 21 55 47 8 |

### Date de ieșire

Programul afișează pe câte o linie a ecranului, pentru fiecare număr, mesajul **DA**, dacă acel număr este termen al șirului lui Fibonacci, respectiv **NU** în caz contrar.

| Date de ieșire |
| -------------- |
| DA             |
| DA             |
| DA             |
| NU             |
| DA             |
| DA             |
| NU             |
| DA             |

### Restricții și precizări

- 1 ≤ n ≤ 10
- numerele care se verifică au cel mult 9 cifre

## ⚠ Rezolvare

|| Acest cod C++ verifică dacă un număr dat sau o listă de numere sunt numere Fibonacci sau nu.||

### Funcția `fibonacci()`

Funcția primește un număr întreg lung `x` și returnează `true` dacă `x` este un număr Fibonacci și `false` altfel. Un șir Fibonacci începe cu 1 și 1, iar fiecare număr ulterior este suma celor două numere anterioare (`1, 1, 2, 3, 5, 8, 13`, etc.).

### În funcția `main()`

- Se citește în variabila `n` numărul de elemente pe care dorești să le verifici.
- Se citește o serie de `n` numere și sunt stocate în vectorul `v[]`.
- Apoi, pentru fiecare număr din vector, se verifică dacă este un număr Fibonacci sau nu folosind funcția `fibonacci()`.
- Dacă numărul este Fibonacci, se afișează "DA", altfel se afișează "NU".

### Funcția `fibonacci()`

Funcționează astfel:

- Inițializează două variabile, `nr1` și `nr2`, cu valorile primelor două numere din șirul Fibonacci: 1 și 1.
- Într-un ciclu `while`, se calculează următorul număr Fibonacci adăugând `nr1` la `nr2`, iar apoi se actualizează variabilele pentru a reține ultimele două numere calculate (`nr1` devine `nr2` și `nr2` devine suma dintre ele).
- Dacă numărul calculat (`nr1`) este egal cu numărul dat (`x`), funcția returnează `true`.
- Dacă depășește numărul dat (`x`), funcția returnează `false`.

În final, în funcția `main()`, această funcție este apelată pentru fiecare număr din vectorul `v[]`, iar rezultatul este afișat pe ecran, indicând dacă numărul respectiv este sau nu un număr Fibonacci.

---

### Mai jos ai solutia acestei probleme! ⬇

   <details>
     <summary>👀 Afiseaza solutia</summary>

```cpp {2-15}
 #include <iostream>
 using namespace std;

 bool fibonacci(long int x)
 {
 long int nr1=1, nr2=1, aux;
 while(nr1<=x)
 {
     aux = nr1;
     nr1 = nr2;
     nr2 += aux;
     if(nr1==x)
         return true;
 }
 return false;
 }

 int main()
 {
 long int n, nr, v[10];
 cin>>n;
 for(int i=0; i<n; i++)
     cin>>v[i];
 for(int i=0; i<n; i++)
     if(fibonacci(v[i])==true)
         cout<<"DA"<<endl;
     else
         cout<<"NU"<<endl;
 }
```

   </details>

---

## Problema #257 [FiboSum](https://www.pbinfo.ro/probleme/257/fibosum)

Se consideră șirul **Fibonacci**, definit astfel: f1=1, f2=1, fn=fn-1+fn-2, dacă n>2.

### Cerința

Se dă un număr natural n. Să se descompună în sumă cu număr minim de termeni ai șirului lui Fibonacci.

### Date de intrare

Programul citește de la tastatură numărul n.

| Date de intrare |
| --------------- |
| 30              |

### Date de ieșire

Programul afișează pe ecran, separați prin câte un spațiu, termenii descompunerii, în ordine descrescătoare.

| Date de ieșire |
| -------------- |
| 21 8 1         |

### Restricții și precizări

- 1 ≤ n ≤ 1.000.000.000

## ⚠ Rezolvare

Acest cod este un program C++ care calculează și afișează numerele din șirul Fibonacci care sunt mai mici sau egale cu un număr dat `n`, în ordine inversă.

### Explicație pas cu pas a codului:

1. Se include biblioteca `<iostream>`.
2. Se utilizează spațiul de nume `std` pentru a accesa elementele bibliotecilor standard.
3. Se definește funcția `fib(int n)` care primește un număr `n` și returnează ultimul număr Fibonacci care este mai mic sau egal cu `n`.
   - Variabilele `f1`, `f2`, și `f3` stochează valorile pentru calculul numerelor din șirul Fibonacci.
   - O buclă `while` este folosită pentru a găsi ultimul număr Fibonacci mai mic sau egal cu `n`. Se actualizează `f1`, `f2`, și `f3` pentru a itera prin șirul Fibonacci până când suma dintre `f1` și `f2` depășește sau este egală cu `n`.
   - La final, funcția returnează valoarea lui `f2`, care este ultimul număr din șirul Fibonacci mai mic sau egal cu `n`.

### Funcția `main()`:

1. Se declară variabila `n` pentru a stoca inputul utilizatorului.
2. Se citește valoarea lui `n` de la intrare.
3. În timp ce `n` nu este zero:
   - Se afișează ultimul număr Fibonacci mai mic sau egal cu `n`.
   - Se actualizează valoarea lui `n` scăzând ultimul număr Fibonacci găsit, astfel încât să se treacă la numărul Fibonacci precedent din șir.
4. La final, programul se încheie întorcând valoarea 0.

Acest program efectuează calculul numerelor din șirul Fibonacci până la valoarea introdusă de utilizator și le afișează în ordine inversă.

---

### Mai jos ai solutia acestei probleme! ⬇

   <details>
     <summary>👀 Afiseaza solutia</summary>

```cpp
#include <iostream>

using namespace std;

    int fib(int n) {
        int f1 = 1, f2 = 1, f3;
        while (f1 + f2 <= n) {
            f3 = f1 + f2;
            f1 = f2;
            f2 = f3;
    }
    return f2;
    }

    int main() {
        int n;
        cin >> n;
        while (n != 0) {
            cout << fib(n) << " ";
            n = n - fib(n);
        }
    return 0;
    }
```

   </details>

---

## Problema #257 [fibo0](https://www.pbinfo.ro/probleme/3176/fibo0)

Se consideră șirul **Fibonacci**, definit astfel: f<sub>1</sub>=1, f<sub>2</sub>=1, f<sub>n</sub>=f<sub>n-1</sub>+f<sub>n-2</sub>, dacă n>2.

### Cerința

Se dau perechi de numere a și b cu a ≤ b. Să se calculeze pentru câte perechi f<sub>b</sub> este multiplu de f<sub>a</sub>.

### Date de intrare

Fișierul de intrare **fibo0.in** conține pe fiecare linie câte două numere a și b cu semnificația din enunț.

| Numărul n | Numerele naturale    |
| --------- | -------------------- |
| 8         | 13 1 8 24 21 55 47 8 |

### Date de ieșire

Fișierul de ieșire **fibo0.out** va conține pe prima linie numărul N, reprezentând numărul de perechi ce respectă condiția impusă.

| Rezultat |
| -------- |
| DA       |
| DA       |
| DA       |
| NU       |
| DA       |
| DA       |
| NU       |
| DA       |

#### Explicație

- f<sub>4</sub>=3, iar f<sub>9</sub>=34, care NU este multiplu de 3.
- f<sub>4</sub>=3, iar f<sub>8</sub>=21, care este multiplu de 3.
- f<sub>10</sub>=55, iar f<sub>12</sub>=144, care NU este multiplu de 55.
- f<sub>7</sub>=13, iar f<sub>21</sub>=10946, care este multiplu de 13.

### Restricții și precizări

- Se vor citi până la 1.000.000 de perechi.
- Numerele citite vor fi numere naturale strict mai mari decât 2 și mai mici decât 2.000.000.002.

## ⚠ Rezolvare

Acest cod citește perechi de numere `a` și `b` din fișierul "fibo0.in", reprezentând limitele `a` și `b` ale intervalului în care se caută perechi pentru care `fb` este multiplu de `fa`. Apoi, determină câte perechi satisfac această condiție și scrie rezultatul în fișierul "fibo0.out".

### Explicație pas cu pas a codului:

1. Se include biblioteca `<bits/stdc++.h>` care include toate celelalte biblioteci standard din C++.
2. `ifstream cin("fibo0.in");` și `ofstream cout("fibo0.out");` sunt utilizate pentru citirea datelor din fișierul "fibo0.in" și scrierea rezultatelor în fișierul "fibo0.out", respectiv.

### Funcția `main()`:

1. Se declară variabilele `x`, `y` și `cnt`. Variabila `cnt` va fi utilizată pentru a număra câte perechi îndeplinesc condiția dată.
2. Într-o buclă `while`, programul încearcă să citească două numere `x` și `y` din fișierul de intrare "fibo0.in" și execută următoarele:
   - Verifică dacă `y` este multiplu de `x` (adică dacă `y` împărțit la `x` dă restul 0).
   - Dacă condiția este îndeplinită, adică dacă `y` este multiplu de `x`, se incrementează `cnt` (numărul de perechi care respectă condiția).
3. La final, se scrie în fișierul de ieșire "fibo0.out" valoarea lui `cnt`, reprezentând numărul de perechi pentru care `fb` este multiplu de `fa`.

Acest cod este simplu și eficient, citind perechile de numere și verificând condiția dată pentru fiecare pereche, numărând câte dintre ele satisfac cerința, și scriind rezultatul în fișierul de ieșire.

### Mai jos ai solutia acestei probleme! ⬇

   <details>
     <summary>👀 Afiseaza solutia</summary>

```cpp
#include <bits/stdc++.h>
using namespace std;

ifstream cin("fibo0.in");
ofstream cout("fibo0.out");

int main()
{
    int x, y, cnt = 0;
    while(cin >> x >> y)
        if(y % x == 0)
            cnt++;
    cout << cnt;
    return 0;
}
```

   </details>

---

Acestea au fost probleme prezentate la sirul lui Fibonacci, multumesc pentru atentie!
[Urmatorul: Divide et Impera](/Introducere/Cap3/)
