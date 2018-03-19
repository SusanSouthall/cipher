var sentence = prompt("Please enter a sentence.");
console.log(sentence);

var first = sentence.slice(0,1);
console.log(first);

var last = sentence.slice(-1);
console.log(last);

// var print = function(whatToSay) {
//   alert(whatToSay);
// };

var newString = function (first,last) {
  return (first + last).toUpperCase();
};

console.log(newString(first,last));

var newStringReverse = function(newString) {
  return sentence + newString.charAt(1) + newString.charAt(0);
};

var finalString = newStringReverse(newString(first,last));

console.log(finalString);

console.log(finalString.length);

var output = function () {
return finalString.charAt(Math.floor(finalString.length/2)) + finalString;
}


console.log(output());
