//Description :
//Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.


//best answer:
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }
//my answer:
//   function getCount(str) {
//     let vowelsCount = 0;
  
//     //turn the input into a string
//     let string = str.toString();
  
//     //loop through the string
//     for (var i = 0; i <= string.length - 1; i++) {
  
//     //if a vowel, add to vowel count
//       if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
//         vowelsCount += 1;
//       }
//     }
//     return vowelsCount;
//   }