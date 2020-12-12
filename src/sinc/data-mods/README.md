---
prev: false
next: ./software/elements
---

# Introduction

Data mods can add, change or remove software types, AI company types, name generators and employee personalities. This is all done with TyD files, however, software types can have scripts attached using SIPL.

::: tip INFO
This guide is for Alpha 11 Modding.
:::
::: danger
This tutorial is incomplete!
:::

## Software Types

**Software Types** are the core of Software Inc, modding allows you to add **Software Types** using **TyD**. An example of this can be seen in the screenshot below:

## Name Generators

The random name generator uses a tree-like structure to generate random strings of words. If your name a name generator the same thing as one of the built-in name generators, they will merge their nodes and words, you can use this to expand the words of a built-in name generator.

## Company Types

Company types define the competitors that the game will simulate. If you don't specify that a company can make a software type the only people who will be able to make that software type is the player's company.

## Personalities

Personalities control employee traits and relationships with other employees. The employees are given two personality traits. All personalities that you add will be merged with the pre-existing personalities in the game.

## SIPL

SIPL or 'Software Inc Programming Language' was written to resemble C\# as much as possible, while still remaining a simple scripting language. SIPL is an interpreted language and relies heavily on the .NET reflection library to interact with C\# types, which makes it somewhat slow. Since scripts aren’t executed very often, it won’t be much of a problem, just keep the complexity of your scripts in mind.