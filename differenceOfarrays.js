var readline = require("readline");
var rl = readline.createInterface(process.stdin,process.stdout);

rl.question("Enter first array : ",function(a1){
    rl.question("Enter secong array:",function(a2){
    function array_diff(a1,a2){
        var diff=new Array();
        var i=0,j=0;
        while(i<a1.length&&j<a2.length){
         diff.push(a1[i]-a2[j]);
         i++;
         j++;
        }
       // console.log(diff.length);
       console.log("difference of arrays is=>");
        for(var k=0;k<diff.length;k++){
            console.log(diff[k]);
        }
    }
    array_diff(a1,a2);
    rl.close();
});
});
