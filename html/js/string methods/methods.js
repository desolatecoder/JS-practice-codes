let text = "tanjiro kamado";
let newText = text.replace("tanjiro", "nezuko");
console.log(newText); //replace() is case sensitive that is TANJIRO != tanjiro if we want to use case insenstive then use use i tag as shown below

// let text = "tanjiro kamado";
// let newText = text.replace("tanjiro/i", "nezuko");
// console.log(newText);

// let text = "tanjiro kamado and tanjiro!";
// let newText = text.replace(/tanjiro/g, "nezuko"); // replaces texts with symbols also
// console.log(newText);



//replaceall() replace all method will replace all the words in the string as shown in below
// let text = "tanjiro kamado";
// let newText = text.replaceall("tanjiro", "nezuko");
// console.log(newText);

// let text = "tanjiro kamado and tanjiro!";
// let newText = text.replaceall(/tanjiro/g, "nezuko"); // replaces texts with symbols also
// console.log(newText);

// padstart()
// let text = "5";
// let padded = text.padStart(4,"x"); //result is xxxxx4

// padEnd()
// let text = "5";
// let padded = text.padEnd(4,"x");

// The padEnd() method is a string method.
// To pad a number, convert the number to a string first.

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]


// let text = "HELLO WORLD";
// let char = text.charAt(0); //prints elements at index

// The charCodeAt() method returns the unicode of the character at a given position in a string
// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);

// If you want to work with a string as an array, you can convert it to an array.
// text.split(",")    // Split on commas
// text.split(" ")    // Split on spaces
// text.split("|")    // Split on pipe