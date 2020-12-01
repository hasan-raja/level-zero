var readlineSync = require('readline-sync');

var username = readlineSync.question("May i know your name? ");

var welcomeMessage="Welocme "+ username;
console.log(welcomeMessage);

