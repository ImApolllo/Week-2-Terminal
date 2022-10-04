var output = ""

for (i = 1; i <= 100; i++){
    output = "";
    if (i % 3 == 0){
        output = output + "Fizz"
    }
    if (i % 5 == 0){
        output = output + "Buzz"
    }
    if (i % 3 != 0 && i % 5 != 0){
        output = output + i;
    }
    console.log(output);
}