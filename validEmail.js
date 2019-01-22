var readline = require("readline");
var rl = readline.createInterface(process.stdin,process.stdout);
rl.question("Enter the String: ",function(str){
function valid_email(str)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(mailformat.test(str))
{  
console.log("Valid email address!");  
}  
else  
{  
console.log("You have entered an invalid email address!");  
}
}
valid_email(str);
rl.close();
});