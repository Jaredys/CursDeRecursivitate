---
title: '1. Ce o fi recursivitatea? 🤔'
image: '/Introducere/recursion-meme.jpg'
alt: 'Recursivitate'
created: 2023-12-01
updated: 2023-12-01
tags:
  - 'Introducere'
  - 'Incepatori'
---

---

## Definitie

Recursivitatea reprezintă proprietatea unor noțiuni de a se defini prin ele însele.

> Cum ar arata acest lucru?

Pentru asta trebuie sa ne reamintim un concept in matematica numit **siruri recurente**!

Un sir a<sub>1</sub>,a<sub>2</sub>,...a<sub>n</sub> este o succesiune de valori numite **<u>elementele sirului</u>**,aranjate intr-o ordine bine definita.Fiecare element ocupa in cadrul sirului o pozitie fixata,care se numeste rangul elementului.

Unele siruri pot fi definite cu ajutorul unor **formule** care exprima orice termen al sirului,incepand cu un anumit **rang**,in functie de termenul precedent sau in functie de termenii precendenti. O astfel de formula se numeste <u>relatie de recurenta</u>.

Astfel, pentru a putea defini recurent un sir,mai trebuie sa indicam primul termen sau primii termeni!
Vom parcurge cateva exemple de recurente in matematica.

---

## Progresia Aritmetica

Un şir de numere reale (a<sub>n</sub>)<sub>n≥1</sub> pentru care fiecare termen, începând cu al doilea, se obţine din termenul precedent prin adunarea unui număr **r**, se numeşte <u>progresie aritmetică<u>.

Notăm: a<sub>1</sub> - primul termen
r - raţia
a<sub>n</sub> - termenul general

- **rația progresiei** aritmetice (r) = diferența dintre oricare doi termeni consecutivi:
  - [x] r = a<sub>2</sub>-a<sub>1</sub>=a<sub>3</sub>-a<sub>2</sub>..=a<sub>n</sub>-a<sub>n-1</sub>
- termenul general are formula
  - [x] a<sub>n</sub>=a<sub>1</sub>+(n-1)r
- suma primilor n termeni are formula
  - [x] S<sub>n</sub>=(a<sub>1</sub>+a<sub>n</sub>)\* 1/2

---

## Progresia Geometrică

Un șir de numere reale (b<sub>n</sub>)<sub>n≥1</sub> pentru care fiecare termen, începând cu al doilea, se obține din termenul precedent înmulțindu-l cu un număr constant nenul q, se numește <u>progresie geometrică</u>.

Notăm:

b<sub>1</sub> - primul termen

q - rația de multiplicare

b<sub>n</sub> - termenul general

rația progresiei geometrice (q) = raportul dintre oricare doi termeni consecutivi:

r = a<sub>2</sub> / a<sub>1</sub> = a<sub>3</sub> / a<sub>2</sub> = ... = a<sub>n</sub> / a<sub>n-1</sub>
termenul general are formula:

b<sub>n</sub> = b<sub>1</sub> \* q<sup>(n-1)</sup>

## Dar cum vom reprezenta asta in informatica? 🤔

[Urmatorul: Recursivitatea in Informatica](/Introducere/Cap1/)
