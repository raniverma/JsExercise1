var readline = require("readline");
var rl = readline.createInterface(process.stdin,process.stdout);
rl.question("Enter your string : ",function(str){
var arr=str.split(" ");
console.log("array in acending order->"+arr.sort());
console.log("array in reverse order->"+arr.sort().reverse());
//rl.close();
});
