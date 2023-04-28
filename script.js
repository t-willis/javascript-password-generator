// Assignment Code
var generateBtn = document.querySelector("#generate");

// code this function
function generatePassword() {
  // object for charsets
  var characters = {
    lowerCharacters: "abcdefghijklmnopqrstuvwxyz",
    upperCharacters: "ABCDEFGHIJKLMNOPQRSTUVWZYZ",
    numericCharacters: "1234567890",
    specialCharacters: "!#$%&'()*+,-.:;<=>?@[]^_`{|}~",
  };

  // prompt for password length
  var passLength = prompt(
    "Enter length of password, no less than 8 characters no more than 128"
  );
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    window.alert("Please use a number between 8 and 128!");
    passLength = prompt(
      "Enter length of password, no less than 8 characters no more than 128"
    );
  }

  // confirm boxes for used character styles
  var lowerConfirm = confirm(
    "Would you like to use lowercase letters? Confirm: Yes, Cancel: No"
  );
  var upperConfirm = confirm(
    "Would you like to use UPPERCASE letters? Confirm: Yes, Cancel: No"
  );
  var numberConfirm = confirm(
    "Would you like to use numbers?  Confirm: Yes, Cancel: No"
  );
  var specialConfirm = confirm(
    "Would you like to use special characters?  Confirm: Yes, Cancel: No"
  );

  // empty variable to add strings to
  var charSet = "";

  // concating strings to charSet string based on boolean value
  if (lowerConfirm === true) {
    charSet += characters.lowerCharacters;
  }
  if (upperConfirm === true) {
    charSet += characters.upperCharacters;
  }
  if (numberConfirm === true) {
    charSet += characters.numericCharacters;
  }
  if (specialConfirm === true) {
    charSet += characters.specialCharacters;
  }

  console.log(charSet);




  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
