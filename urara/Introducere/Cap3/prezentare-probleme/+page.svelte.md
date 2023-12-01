---
title: '3.1 Divide et Impera - Probleme'
image: '/Introducere/Cap3/divide.jpg'
alt: 'Recursivitate'
created: 2023-12-03
updated: 2023-12-03
tags:
  - 'Introducere'
  - 'Incepatori'
---

---

# 1️⃣ Problema Nr. 1

`Q`: Ce credeti ca face acest program?

||Acest program realizează suma elementelor dintr-un tablou unidimensional||

```cpp
#include <iostream>

using namespace std;
int v[1001], i, n;
int suma(int st, int dr) {
   if (st == dr) {
      return v[st];
   } else {
      int mid = (st + dr) / 2;
      int sumaStanga = suma(st, mid);
      int sumaDreapta = suma(mid + 1, dr);
      return sumaStanga + sumaDreapta;
   }
}
int main() {
   cin >> n;
   for (i = 1; i <= n; i++)
      cin >> v[i];
   cout << suma(1, n);
}

```

Funcția recursivă este una operand, primește ca parametri doi indici și are ca efect returnarea sumei elementelor aflate între cei doi indici inclusiv. Observăm că pentru a obține suma elementelor din tot șirul declanșăm în main un apel `suma(1, n)`.

### Principiul de funcționare a subprogramului:

- **Dacă secvența este suficient de scurtă**, în acest caz dintr-un singur element (`st == dr`), rezultatul se obține direct, return `v[st]`.
- **Dacă secvența are cel puțin două elemente**, o descompunem în două (de lungimi cât mai apropiate), iar după ce obținem rezultatele din cele două părți le adunăm și pe baza lor găsim suma din secvența dată.

Fie n=10, și elementele memorate pe poziții de la 1 la 10 în vectorul v: `3, 1, 4, 5, 2, 8, 9, 1, 2, 6`.
![Exemplu](/Introducere/Cap3/prezentare-probleme/recurs2.png)

Pentru o bună înțelegere a modului de funcționare pentru funcția recursivă de mai sus trebuie analizat atent și cu răbdare arborele de desfășurare a apelurilor recursive de mai sus.

### Observații asupra arborelui de apeluri recursive:

- Elementele simbolizate cu **roșu** reprezintă evenimente de la coborârea în recursivitate, iar cele **verzi** de la întoarcere.
- Tabelele **roșii** conțin pe prima linie valorile lui `st` și `dr`, iar pe a doua linie valorile din vector dintre pozițiile `st` și `dr`.
- Căsuțele **verzi** conțin valorile cu care se revine din autoapeluri și operația care se face între ele în scopul obținerii rezultatului apelului curent. Observăm că din punct de vedere cronologic, calculele se fac la întoarcere și de jos în sus.

### Algoritm "Divide et Impera":

Un algoritm "divide et impera" se aplică la problemele care pot fi descompuse în altele mai simple de același tip, cele mai simple să se poată descompune la fel, până când se ajunge la probleme suficient de simple care să poată fi rezolvate direct. Apoi, pe baza soluțiilor subproblemelor, să se poată obține soluția problemei descompuse.

### Pseudocod pentru schema de rezolvare a unei probleme prin "divide et impera":

```plaintext
rezolvă(problema)
- dacă problema este simplă, o rezolvăm direct
- dacă nu
    descompunem problema în subprobleme, de același fel (de regulă două)
    rezolvăm subproblemele (de regulă recursiv)
    combinăm rezultatele subproblemelor în scopul obținerii rezultatului
    problemei inițiale
```

```cpp
#include <iostream>

using namespace std;
int v[1001], i, n;
int suma(int st, int dr) {
    if (st == dr) { /// subproblema este simplă
        /// (intervalul este de lungime 1)
        /// o rezolv direct, fără descompunere
        /// (suma pe un astfel de interval este chiar
        /// valoarea din vector de pe acea poziție)
        return v[st];
    } else {
        /// descompun intervalul în cele două jumătăți ale sale
        /// după modul de scriere a formulei, dacă numărul de elemente
        /// dintre st și dr este impar, în partea din stânga
        /// va fi cu un element mai mult decât în cea din dreapta
        int mid = (st + dr) / 2;
        /// rezolv cele două subprobleme prin autoapeluri recursive
        /// în cele două subintervale în care am realizat descompunerea
        int sumaStanga = suma(st, mid);
        int sumaDreapta = suma(mid + 1, dr);
        /// combin rezultatele subproblemelor, adică suma pe
        /// intervalul de rezolvat o obțin prin adunarea rezultatelor
        /// subproblemelor (întoarse de autoapeluri)

        return sumaStanga + sumaDreapta;
    }
}
int main() {
    cin >> n;
    for (i = 1; i <= n; i++)
        cin >> v[i];
    cout << suma(1, n);
}

```

Așa cum am descris mai sus, de foarte multe ori descompunerea se face în două subprobleme, iar dacă natura problemei este de a procesa un interval de indici, pentru calculul locului unde se face împărțirea se calculează media aritmetică a indicilor.

Trebuie avută grijă la cazul în care suma valorilor `st` și `dr` produce overflow pe tipul de date pe care se lucrează, în acest caz folosindu-se scrierea: `st + (dr - st) / 2`.

Observăm că prin modul de scriere a formulei, și prin modul de stabilire a capetelor intervalelor de la autoapel, se ajunge mereu la intervale de lungime 1 (chiar la toate cele `n` intervale formate din câte un element), acestea fiind frunzele arborelui de autoapeluri.

Timpul de executare al unui apel pe un interval de lungime `n` se calculează astfel:

- La nivelul frunzelor se fac `n/2` adunări.
- Un nivel mai sus se fac `n/4` adunări.
- ...
  `n/2 + n/4 + ...` este valoarea maximă egală cu `n`. Așadar, timpul de calcul este de ordinul lungimii intervalului.

---

# 2️⃣ Problema Nr. 2

Folosind un procedeu divide et impera, să se decidă dacă un vector de numere naturale conține cel
puțin o valoare impară (pbinfo.ro, [ExistaImpareDivImp #1148](https://www.pbinfo.ro/probleme/1148/existaimparedivimp)).

### Soluție

- Definim problema de rezolvat astfel: `verificare(st, dr)` = funcție operand care realizează testul pentru elementele din intervalul de indici `st`, `dr`, inclusiv și care returnează 1 dacă se găsește un element impar acolo și 0 în caz contrar.

- Problema este simplă când `st == dr`, și acolo returnăm 1 dacă `v[st]` este impar și 0 în caz contrar.

- În etapa de combinare a soluțiilor, returnăm 1 dacă cel puțin o subproblemă returnează 1 (pentru un cod mai compact putem folosi operatorul `||` între rezultatele celor două autoapeluri).

```cpp
#include <iostream>

using namespace std;
int n;
int v[1001];
int exista(int st, int dr) {
    if (st == dr)
        if (v[st] % 2 == 0)
            return 0;
        else
            return 1;
    else {
        int mid = (st + dr) / 2;
        return exista(st, mid) || exista(mid + 1, dr);
    }
}
int main() {
    cin >> n;
    for (int i = 1; i <= n; i++)
        cin >> v[i];
    cout << (exista(1, n) == 1 ? "DA" : "NU");
}
```

---

# 3️⃣ Problema Nr. 3

2. Să se verifice dacă elementele unui tablou unidimensional sunt ordonate crescător (pbinfo.ro, [VerificareOrdonatDivImp #1152](https://www.pbinfo.ro/probleme/1152/verificareordonatdivimp)).

### Solutie

- Definim problema de rezolvat astfel: `f(st, dr)` = funcție operand care realizează testul pentru elementele din intervalul de indici `st`, `dr`, inclusiv și care returnează 1 dacă ele sunt în ordine crescătoare și 0 în caz contrar.

- Problema este simplă când `st == dr`, și acolo returnăm 1 (considerăm că o secvență formată dintr-un singur element este ordonată crescător).

- În etapa de combinare a soluțiilor, prima idee este de a returna 1 dacă ambele subprobleme dau 1 (cele două secvențe sunt ordonate crescător). Nu este suficient întrucât pot să apară situații de forma: `1, 2, 4, 2, 3, 5` (ambele jumătăți sunt ordonate, dar totuși nu este tot șirul ordonat). Mai este necesar și ca ultimul element din secvența stângă să fie mai mic sau egal decât primul din secvența dreaptă.

```cpp
#include <iostream>

using namespace std;
int v[10010];
int n, i, suma;
int f(int st, int dr) {
    if (st == dr) {
        return 1;
    } else {
        int mid = (st + dr) / 2;
        return f(st, mid) && f(mid + 1, dr) && v[mid] <= v[mid + 1];
    }
}
int main() {
    cin >> n;
    for (i = 1; i <= n; i++)
        cin >> v[i];
    if (f(1, n) == 1)
        cout << "DA";
    else
        cout << "NU";
    return 0;
}

```

---

Mai departe vom explora niste algoritmi bine cunoscuti care isi merita propria sectiune!

[Cautarea Binara](https://www.pbinfo.ro/articole/3633/cautarea-binara)

[Algoritmul MergeSort](https://www.pbinfo.ro/articole/7667/sortarea-prin-interclasare)

[Algoritmul QuickSort](https://www.pbinfo.ro/articole/7667/sortarea-prin-interclasare)
