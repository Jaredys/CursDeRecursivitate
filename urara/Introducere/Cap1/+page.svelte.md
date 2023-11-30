---
title: 'Recursivitatea in informatica'
image: '/Introducere/recursion-meme.jpg'
alt: 'Recursivitate'
created: 2023-11-30
updated: 2023-11-30
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
