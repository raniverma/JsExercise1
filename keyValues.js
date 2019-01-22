var readline = require("readline");
var rl = readline.createInterface(process.stdin,process.stdout);
//rl.question("Enter the Object: ",function(obj){
    var obj={name:"pratima",rollno:4};  
    console.log(Reflect.ownKeys(obj));
    rl.close();
//});