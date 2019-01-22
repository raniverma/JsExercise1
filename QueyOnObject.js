var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
var result=[];
for(var i=0;i<myObj.length;i++){
    var innerArr=myObj[i];
    for(var j in innerArr){
        if(innerArr[j]=="Programmer"){
        result.push(innerArr);
        break;
        }
    }
}
console.log("people having Programmer as their Occupation are: ");
console.log(result);
function sort_by_age(a,b){
    if(a.age<b.age)
    return 1;
    else if(a.age>b.age)
    return -1;
    else
    return 0;
}
console.log("Sorted Values according to age in decending order are: ");
console.log(myObj.sort(sort_by_age));

var newObj=
{
    TeamLead:[{
        name:'Kalyani', 
        age: 25
    }],
    Programmer:[{
        name:'Damodaran',
        age: 27
    }],
    Manager:[{
        name:'Krishnakath',
        age: 22
    }]
};
console.log("new Object of Object is ");
console.log(newObj);

/*var res=[];
for(var i=0;i<myObj.length;i++){
    var innerArr=myObj[i];
    for(var j in innerArr){
        if(j=='name'){
        res.push(innerArr[j]);
        break;
        }
    }
}
console.log("Array of Names");
console.log(res);*/
console.log("using map method =>");
var newObj= myObj.map(function(myObj) {
    return myObj.name;
});
console.log(newObj);
