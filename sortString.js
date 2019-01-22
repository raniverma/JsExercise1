var readline = require("readline");
var rl = readline.createInterface(process.stdin,process.stdout);
rl.question("Enter your string : ",function(str){
    var split=str.split('');
    split.sort();
    var sortedstr="";
    for(var i=0;i<split.length;i++){
        sortedstr+=split[i];
    }
    console.log(sortedstr);
    rl.close();
});