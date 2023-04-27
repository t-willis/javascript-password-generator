//alerts confirms and prompts - work ahead

// Assignment Code
var generateBtn = document.querySelector("#generate");

// JUST TRYING THINGS BELOW THIS -----------------------------------


// var characters = {
//     lowerCharacters: "abcdefghijklmnopqrstuvwxyz",
//     upperCharacters: "ABCDEFGHIJKLMNOPQRSTUVWZYZ",
//     numericCharacters: "1234567890",
//     specialCharacters: "!#$%&'()*+,-./:;<=>?@][\^_`{|}~",
// }

// var rLowerCharacter = characters.lowerCharacters[Math.floor(Math.random() * characters.lowerCharacters.length)]
// var rUpperCharacter = characters.upperCharacters[Math.floor(Math.random() * characters.upperCharacters.length)]

// function testGen() {
//  console.log(rLowerCharacter + rUpperCharacter);
// }

// testGen();










// prompt for password length
var passLength = prompt("Enter length of password, no less than 8 characters no more than 128");
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    window.alert("Please use a number between 8 and 128!");
    passLength = prompt("Enter length of password, no less than 8 characters no more than 128");
  }

var lowerConfirm = confirm("Would you like to use lowercase letters? Confirm: Yes, Cancel: No");
var upperConfirm = confirm("Would you like to use UPPERCASE letters? Confirm: Yes, Cancel: No");
var numberConfirm = confirm("Would you like to use numbers?  Confirm: Yes, Cancel: No");
var specialConfirm = confirm("Would you like to use special characters?  Confirm: Yes, Cancel: No");



function testLengthPrint() {
  console.log(passLength);
  console.log(lowerConfirm);
  console.log(upperConfirm);
  console.log(numberConfirm);
  console.log(specialConfirm);
}

testLengthPrint();






// JUST TRYING THINGS ABOVE THIS -------------------------------------

// code this function
function generatePassword() {

}











// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
