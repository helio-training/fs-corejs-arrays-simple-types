# Assignment - Simple Arrays

> Working with Arrays

[![Build Status](https://travis-ci.org/helio-training/fs-corejs-arrays-simple-types.svg?branch=solutions)](https://travis-ci.org/helio-training/fs-corejs-arrays-simple-types)

## Introduction

An array is a indexed collection of multiple types/values that are usually related.  Javascript has many special methods built into the engine, to manipulate arrays so that the developer can select specific values, or ranges quickly.  The developer must remain cautious to preserve the original data, as some methods are "destructive" of the original array data.

**Array Literal Syntax**

The syntax to create an empty array is simply `const myArray = [];` 

**Accessing Items by their index**

Accessing the items/elements in an array is done via the index accessor. `const first = fruits[0];`

The index is zero-based. `[].length` contains the number of items/elements in the array.

`.filter(fn)` is a great example of a function that restricts the original array to a selected subset.

.map() and .reduce(), along with .filter(), are extremely common methods - often used in combination - on javascript arrays.

`(needs reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter`)

### Looping over an Array

Traditional mechanisms can be used to loop over an array (for, forEach, while, etc).  There is nothing wrong with using these paradigms to loop.  The array has a few functions to help filter down the items before you loop thus making the subset of items smaller. 
 

### Combining Arrays

Arrays have a `.concat(array)` function to merge arrays together. 

### Rest parameters

The rest syntax also is used to combine arrays.  `[...oneArray, ...anotherArray]`.  This syntax can be confusing at first, but the ellipses pull all the values out of the array and places it inside of the new array.

### Destructuring?


## Assignment

1. Create an object literal named `cards` and expose it using `expose const cards = ...`.
    1. Create a `rarity` and a `playerClass` property within the cards object literal.
    2. Within the `rarity` object create a property for each rarity type of card `rarity: { legendary: [], epic: [] ... }`
    3. Within the `playerClass` object create a property for each type of class `playerClass: { druid: [], neutral: [] ... }`
2. Use the `Db.Cards` (which has all cards) to assign only the cards that match their property.  For example, the legendary property would contain only the legendary cards.  Do this for each property within `rarity` and `playerClass`.
3. Create a getter for total which sums up all of the cards by `rarity` (There will be a discrepancy between the Db.Cards and your total, it seems that not all of the cards have a rarity property).  _**Hint**: Use the properties to create a new array to get the length_



### Resources

* [Array Defintion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Array Fundamentals](https://app.pluralsight.com/player?course=rapid-javascript-training&author=mark-zamoyta&name=rapid-javascript-training-m5&clip=3&mode=live)
* [Array Reference Types](https://app.pluralsight.com/player?course=rapid-javascript-training&author=mark-zamoyta&name=rapid-javascript-training-m5&clip=0&mode=live)

