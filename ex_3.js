/*saeedanwar*/
var personName = "saeed anwar";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
var firstLetter = personName.charAt(0).toUpperCase();
var firstLetter = personName.slice(1).toLowerCase();
var titleCase = firstLetter + personName + restLetters;
console.log(titleCase);
