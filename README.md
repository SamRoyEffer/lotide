# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Sam Roy-Effer as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @samroyeffer/lotide`

**Require it:**

`const _ = require('@samroyeffer/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  *`head()`: retrives the beginning of an array

  *`tail()`: retrives the tail of an array

  *`middle()`: gives the middle of an array

  *`assertArraysEqual()`:acts as a check for arrays

  *`assertEqual()`: a check for any function

  *`assertObjectsEqual()`: check for object functions

  *`countLetters()`: count the number of each letters in a string

  *`countOnly()`: count the looked for item in an object and how many times it appears

  *`eqArrays()`:checks for equality in an array

  *`eqObjects()`: checks for equality in an object

  *`findKey()`:find a specific key in an object

  *`findKeyByValue()`: find a specific key by its value

  *`letterPositions()`: checks for the position of each letter and displays an output of thier 
  location in the string

  *`map()`: finds a value in an array

  *`takeUntil()`: outputs an array until a stop condition is met
  
  *`without()`:outputs an arry without a defined perameter