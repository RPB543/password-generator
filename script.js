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

// Generate password
function generatePassword ()  {

  // Ask for length of passwrod
passwordLength = prompt("How long would you like your password? Please choose between 8 and 128 characters.");
    console.log("Password length is " + passwordLength + ".");

if (passwordLength < 8 || passwordLength > 128) {
passwordLength = prompt("Password must be between 8 and 128. Please choose again.");
  console.log("Password length " + passwordLength);
  alert("Your password will have " + passwordLength + " characters.");

} else if (passwordLength >= 8 && passwordLength <= 128) {
  console.log("Password length " + passwordLength);
  alert("Your password will have " + passwordLength + " characters.");

}else {console.log("Password length " + passwordLength);
}

//Confirm characters in password
  confirmLower = prompt("Please enter a lower case letter, if you would like to include one.");
    console.log("Lower case letter is " + confirmLower);
  
  confirmUpper = prompt("Please enter a upper case letter, if you would like to include one.");
    console.log("Upper case letter is " + confirmUpper);

  confirmNumber = prompt("Please enter a number, if you would like to include one.");
    console.log("Number is " + confirmNumber);

  confirmSymbol = prompt("Would you like to include a symbol?");
    console.log("Symbol is " + confirmSymbol);
};

var userChars = "confirmNumber, confirmLower, confirmSymbol, confirmUpper"
var randomPassword = ""

for(var i = 0; i < passwordLength; i++) {
  randomPassword = userChars + [Math.floor(Math.random() * (password.Length - userChars))];
  console.log(randomPassword);
}

generatePassword ();

  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);