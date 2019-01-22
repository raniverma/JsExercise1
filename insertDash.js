var readline = require("readline");
var rl = readline.createInterface(process.stdin,process.stdout);
rl.question("Enter your string : ",function(num){
    var arr=num.split('');
var str="";
for(var i=0;i<arr.length-1;i++){
    if(arr[i]%2==0&&arr[i+1]%2==0){
    str+=arr[i];
    str+='-';
    }
    else
    str+=arr[i];
}
str+=arr[arr.length-1];
console.log(str);
rl.close();
});
