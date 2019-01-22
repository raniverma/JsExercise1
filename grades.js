var student={ram:100,mohan:90,rahul:98};
var sum=0,count=0;
for(var stu in student){
sum+=student[stu];
count++;
}
var avg=0;
if(count!=0){
    avg=sum/count;
console.log("avg marks are =>"+avg);
}
if(avg<60)
console.log("F");
else if(avg<70)
console.log("D");
else if(avg<80)
console.log("B");
else if(avg<100)
console.log("A");
