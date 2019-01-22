var readline = require("readline");
var rl = readline.createInterface(process.stdin,process.stdout);
//rl.question("Enter the json string : ",function(obj){
    var obj='{"mike":"Book","jason":"sweater","chels":"iPad"}';
    var res=JSON.parse(obj);
    console.log(res);
    rl.close();
//});