var readline = require("readline");
var rl = readline.createInterface(process.stdin,process.stdout);
rl.question("Enter your string : ",function(str){
    rl.question("Enter the char : ",function(ch){
    console.log("Occurence of char in string is: "+(str.match(new RegExp(ch, "g")) || []).length);
    rl.close();
    });
});