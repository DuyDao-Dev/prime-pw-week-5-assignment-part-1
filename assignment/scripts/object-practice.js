console.log('***** Object Practice *****');

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Duy',
  lastName: 'Dao',
  hasSiblings: true,
  shoeCount: 5,
  favThreeFoods: ['pho', 'ramen', 'eggs']
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/
let fullName = me.firstName + " " + me.lastName;
  console.log(fullName);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
console.log(me.favThreeFoods[0]);
console.log(me.favThreeFoods[me.favThreeFoods.length - 1]);//Trying to figure out a way to find out how I can
//pull the very last string in this array. I tried using
//console.log(me.favThreeFoods.length-1); with a result of 2 instead of output eggs.
// console.log('Last thing in favorite food list is: ${me.favThreeFoods -1} '); Testing
//Figured it out. Instead of accessing 2 in the index I changed it to access the me const first,
//then ojbect of favThreeFoods and then minus 1 from the length of favThreeFoods.

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/

// console.log(me.shoeCount +1);//Console shows the number to be 6 which is correct but
// //when I type shoeCount in console I get an error message that says shoeCount is not defined.
// console.log('I own', me.shoeCount, 'pairs of shoes!');//1st attempt
console.log(`I own ${me.shoeCount} pairs of shoes!`);
me.shoeCount += 1;//I honestly don't remember what I did to make this work. 
// console.log('Now I own', me.shoeCount, 'pairs of shoes.');
console.log(`Now I own ${me.shoeCount} pairs of shoes.`);

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
// console.log(me.favoriteColor: []);
me.favoriteColor = 'purple';
console.log(`My favorite color is ${me.favoriteColor}`);
console.log(me);
