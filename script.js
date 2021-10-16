// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSymbol;

//Arrays
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];


//Start function
// Generate password
function generatePassword ()  {
  // Ask for user input
passwordLength = prompt("How long would you like your password? Please choose between 8 and 128 characters.");
console.log("Password length is " + passwordLength + ".");

if(passwordLength === "") {
  window.alert("Input required.  Please choose a password length between 8 and 128.");
}

 else if (passwordLength < 8 && passwordLength > 128);{
passwordLength = prompt("Password must be between 8 and 128. Please choose again.");
  console.log("Password length " + passwordLength);
}
  {
  confirmLower = confirm("Would you like to include a lower case letter?");
  console.log("Lower case letter is " + confirmLower);
  confirmUpper = confirm("Would you like to include an upper case letter?");
  console.log("Upper case letter is " + confirmUpper);
  confirmNumber = confirm("Would you like to include a number?");
  console.log("Number is " + confirmNumber);
  confirmSymbol = confirm("Would you like to include a symbol?");
  console.log("Symbol is " + confirmSymbol);
};
}

//for(var 1 = 0; i < passwordLength, i++) {
  //console.log(password)

  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);