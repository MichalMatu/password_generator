// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// create variable for user choiched password options
var passOptions= [];
// merge together array with password types
var userLists = [];
// password itself need to br created here to avoid undefined at front of password
var pass = "";

// Function to prompt user for password options
function getPasswordOptions() {


// ask user for password length and store it in variable
  var length = prompt("How long password do you want (from 10 to 64) ?");
  passOptions[0] = length;

// if password is right length and type, confirm windows start to pop up to get more information
// about password type user want, then storage answers in var passOptions
  if (length > 9 && length < 65) {
    
    passOptions[1] = confirm("You like to have lower case letter ?");
    passOptions[2] = confirm("You like to have UPPER case too ?");
    passOptions[3] = confirm("You like to have numbers (01234...) ?");
    passOptions[4] = confirm("You like to have special character (@#$%^) ?");

  }
  // if user type wrong password length alert will pop up
  else {
    alert("Password length only from 10 to 64, refresh page!");
  }

  console.log(passOptions);

// return variable with user choiches
  return passOptions;

}


// Function for getting a random element from an array
// just random number generator where I can pass generated number length value
function getRandom(arr) {
  var random = Math.floor(Math.random() * arr);
  return random;
}


// Function to generate password with user input
function generatePassword() {
  // need this to reset previous password
  pass = ""
  // created password variable only with user choichec charakters
  var passList = [];
  if (passOptions[1]) {
    passList.push(lowerCasedCharacters);
  }
  if (passOptions[2]) {
    passList.push(upperCasedCharacters);
  }
  if (passOptions[3]) {
    passList.push(numericCharacters);
  }
  if (passOptions[4]) {
    passList.push(specialCharacters);
  }

// merge arrays with user choiched charakters in to one array
  for (var el in passList) {
    for (var ele in passList[el]) {
      userLists += passList[el][ele];
    }
  }

// pulling out password length in loop for then inside do random pick from userLists variable
  for (var i = 0; i < passOptions[0]; i++) {

    pass += userLists[getRandom(userLists.length)]

  }

  return pass;

}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  


  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;



}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);