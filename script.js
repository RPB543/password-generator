// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = "";
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSymbol;
var userChoices;

//Arrays
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];

// Generate password
function generatePassword ()  {

  // Ask for length of passwrod
passwordLength = (prompt("How long would you like your password? Please choose between 8 and 128 characters."));

if (passwordLength < 8 || passwordLength > 128) {
passwordLength = (prompt("Password must be between 8 and 128. Please choose again."));
  console.log("Password length " + passwordLength);
  alert("Your password will have " + passwordLength + " characters.");

} else if (passwordLength >= 8 && passwordLength <= 128) {
  console.log("Password length " + passwordLength);
  alert("Your password will have " + passwordLength + " characters.");

}else {console.log("Password length " + passwordLength);
  alert("Your password will have " + passwordLength + " characters.");
}

//Confirm characters in password
confirmLower = confirm("Would you like to include a lower case letter?");
console.log("Lower case letter is " + confirmLower);

confirmUpper = confirm("Would you like to include an upper case letter?");
console.log("Upper case letter is " + confirmUpper);

confirmNumber = confirm("Would you like to include a number?");
console.log("Number is " + confirmNumber);

confirmSymbol = confirm("Would you like to include a symbol?");
console.log("Symbol is " + confirmSymbol);


//loop if not parameters are selected
if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSymbol) {
  alert("You must choose at least one parameter!");
} 
// 4 options selected
else if (confirmLower && confirmUpper && confirmNumber && confirmSymbol) {
  userChoices = lowerCase.concat(upperCase, numbers, symbols);
  console.log(userChoices);
}
// 3 options selected
else if (confirmLower && confirmUpper && confirmNumber) {
  userChoices = lowerCase.concat(upperCase, numbers);
  console.log(userChoices);
}else if (confirmLower && confirmNumber && confirmSymbol) {
  userChoices = lowerCase.concat(numbers, symbols);
  console.log(userChoices);
}else if (confirmLower && confirmUpper && confirmSymbol) {
  userChoices = lowerCase.concat(upperCase, symbols);
  console.log(userChoices);
}else if (confirmUpper && confirmNumber && confirmSymbol) {
  userChoices = upperCase.concat(numbers, symbols);
  console.log(userChoices);
}
// 2 options selected
else if (confirmLower && confirmUpper) {
  userChoices = lowerCase.concat(upperCase);
  console.log(userChoices);
}else if (confirmLower && confirmNumber) {
  userChoices = lowerCase.concat(numbers);
  console.log(userChoices);
}else if (confirmLower && confirmSymbol) {
  userChoices = lowerCase.concat(symbols);
  console.log(userChoices);
}else if (confirmUpper && confirmNumber) {
  userChoices = upperCase.concat(numbers);
  console.log(userChoices);
}else if (confirmUpper && confirmSymbol) {
  userChoices = upperCase.concat(symbols);
  console.log(userChoices);
}else if (confirmNumber && confirmSymbol) {
  userChoices = numbers.concat(symbols);
  console.log(userChoices);
}
// 1 option selected
else if (confirmLower){
  userChoices = lowerCase;
  console.log(userChoices);
} else if (confirmUpper) {
  userChoices = upperCase;
  console.log(userChoices);
}else if (confirmNumber) {
  userChoices = numbers;
  console.log(userChoices);
}else if (confirmSymbol) {
  userChoices = symbols;
  console.log(userChoices);
}
// Empty variable for the password length
var passwordBlank = [];
  
// Loop for random selection
for (var i = 0; i < passwordLength; i++) {
  var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordBlank.push(allChoices);
  console.log(allChoices);
}

// Join and return the password 
var password = passwordBlank.join("");
console.log("Your Password is: " + password);
return password;
}
  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
