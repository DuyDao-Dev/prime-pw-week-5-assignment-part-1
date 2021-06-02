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
  firstName: [],
  lastName: [],
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
let fullName = {
  firstName: 'Duy',
  lastName: 'Dao'
};
  console.log(fullName);



/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
console.log(me.favThreeFoods[0]);
console.log(me.favThreeFoods[2]);//Trying to figure out a way to find out how I can
//pull the very last string in this array. I tried using
//console.log(me.favThreeFoods.length-1); with a result of 2 instead of output eggs.


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/
console.log(me.shoeCount +1);//Console shows the number to be 6 which is correct but
//when I type shoeCount in console I get an error message that says shoeCount is not defined.

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
console.log(me.favoriteColor: []);
