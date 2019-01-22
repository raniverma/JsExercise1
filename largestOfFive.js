var a=2,b=3,c=4,d=5,e=6,largest=Number.MIN_SAFE_INTEGER;
if(a>b&&a>c&&a>d&&a>e){
    largest=a;
}
else if(b>a&&b>c&&b>d&&b>e){
    largest=b;
}
else if(c>a&&c>b&&c>d&&c>e){
    largest=c;
}
else if(d>a&&d>b&&d>c&&d>e){
    largest=d;
}
else
largest=e;
console.log("largest element is-->");
console.log(largest);
