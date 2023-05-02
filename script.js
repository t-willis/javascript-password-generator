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

  // prompt for password length, close prompt if cancel
  var passLength = prompt(
    "Enter length of password, no less than 8 characters no more than 128"
  );
  if (passLength === null) {
    return;
  }
  // checking password length for correct values, re-prompting if necessary, close prompt if cancel
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    window.alert("Please use a number between 8 and 128!");
    passLength = prompt(
      "Enter length of password, no less than 8 characters no more than 128"
    );
    if (passLength === null) {
      return;
    }
  }

  // confirm boxes for chosen character styles
  var lowerConfirm = confirm(
    "Would you like to use lowercase letters? Ok: Yes, Cancel: No"
  );
  var upperConfirm = confirm(
    "Would you like to use UPPERCASE letters? Ok: Yes, Cancel: No"
  );
  var numberConfirm = confirm(
    "Would you like to use numbers?  Confirm: Ok: Cancel: No"
  );
  var specialConfirm = confirm(
    "Would you like to use special characters?  Ok: Yes, Cancel: No"
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
  if (
    lowerConfirm === false &&
    upperConfirm === false &&
    numberConfirm === false &&
    specialConfirm === false
  ) {
    alert("You must choose at least one data type!");
    generatePassword();
  }

  // var passwordGend for loop to generate the random password
  var passwordGend = "";
  for (var i = 0; i < passLength; i++) {
    var randomGen = charSet.charAt(Math.floor(Math.random() * charSet.length));
    passwordGend += randomGen;
  }

  // return for generated password
  return passwordGend;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
