var sum = 0;
var multi;

for (i = 1; i < 21; i++){
    if (i % 2 != 0){
        console.log(i)
    }
}
for (i = 100; i >= 0; i--){
    if (i % 3 == 0){
        console.log(i);
    }
}
for (i = 4; i > -4; i -= 1.5){
    console.log(i);
}
for (i = 1; i < 101; i++){
    sum = sum + i; 
}
console.log(sum);
for (i = 1; i < 13; i++){
    if (i != 1){
        multi = multi * i;
    }else{
        multi = 1;
    }
}
console.log(multi);
