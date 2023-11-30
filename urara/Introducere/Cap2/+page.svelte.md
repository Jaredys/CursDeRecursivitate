---
title: '3. Recursivitatea in informatica - Fibonacci'
image: '/Introducere/Cap2/fibonacci.jpg'
alt: 'Recursivitate'
created: 2023-12-03
updated: 2023-12-03
tags:
  - 'Introducere'
  - 'Incepatori'
---

---

## Cine a fost dl. Fibonacci? 🤔

[Leonardo Pisano Bogollo](https://ro.wikipedia.org/wiki/Fibonacci), (`c. 1170 – c. 1250`) cunoscut și sub numele de Leonardo din Pisa, Leonardo Pisano, Leonardo Bonacci, Leonardo Fibonacci, sau pur și simplu Fibonacci, a fost un matematician italian considerat de unii drept “**cel mai talentat matematician din Occidentul Evului Mediu**”.

Fibonacci este cel mai bine cunoscut lumii moderne pentru:

1. Răspândirea sistemului de numărare hindu-arab în Europa, prin publicarea în primul rând la începutul secolului al 13-lea a cărții sale denumită Cartea de calcul , sau Liber Abaci.
2. Un șir de numere, care i-a purtat ulterior numele, și anume șirul lui Fibonacci, pe care el nu l-a descoperit, dar pe care l-a folosit ca un exemplu în cartea sa, Liber Abaci.

---

## Șirul lui Fibonacci

Numerele Fibonacci sunt numere naturale care fac parte din următorul șir, în care fiecare număr este egal cu **suma celor două de dinainte**:

`1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …`

### Uneori, șirul este extins cu încă un termen, la început:

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …`

### Termenul Fn este calculat prin următoarea relație de recurență:

F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub>

cu valorile inițiale F<sub>1</sub>=1, F<sub>2</sub>=1 sau F<sub>0</sub>=0 și F<sub>1</sub>=1.

---

## Cum determinăm primii N termeni din șirul lui Fibonacci?

Vom folosi trei variabile simple a b c. Două dintre ele vor reprezenta termenii anteriori Fn-1 și Fn-2, iar a treia va reprezenta termenul curent Fn:

```cpp
a ← 1
b ← 1
scrie a, b
pentru i ← 3,n execută
    c ← a + b
    scrie c
    a ← b
    b ← c
sfarsit_pentru

```
