
// 1. Always Hungry
function alwaysHungry(arr) {
    var count = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i] == "food"){
            console.log("yummy")
            count++;
        }
    }
    if (count == 0){
        console.log("I'm Hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// 2. Better than average
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// 3. Better than average
function betterThanAverage(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    var avg = sum / arr.length;
    var count = 0
    for (i = 0; i < arr.length; i++){
        if (arr[i] > avg){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// 4. Array Reverse
function reverse(arr) {
    var a = 0;
    var b = arr.length - 1;
    while (a < b){
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp
        a++;
        b--;
    }
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// 5. Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (i = 2; i < n; i++){
        fibArr.push(fibArr[i-2]+fibArr[i-1]);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
