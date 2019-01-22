var readline = require("readline");
var rl = readline.createInterface(process.stdin,process.stdout);
rl.question("Enter your string : ",function(num){
    var arr=num.split(" ");
    var set1=new Set();
    for(var i=0;i<arr.length;i++){
        set1.add(arr[i]);
    }
    console.log(set1);
    rl.close();
});