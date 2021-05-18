function addToTotal(n) { // O(n)
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

function addToTotalO1(n) {// O(1)
    return n * (n + 1) / 2;
}

function addToTotal(n) { // O(n^2)
    let total = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            total += j;
        }
    }
    return total;
}





let time1 = performance.now();
addToTotal(10000000);
let time2 = performance.now();
console.log((time2 - time1) / 1000);// time in seconds

let time3 = performance.now();
addToTotalO1(10000000);
let time4 = performance.now();
console.log((time4 - time3) / 1000);// time in seconds

// space complexty 

function Add5ToAllArrayItems(arr) {
    var newArr = [];
    var newArr2 = [];
    for (let i = 0; i < arr.length; i++) {// 500
        for (let j = 0; j < arr.length; j++) {// 500
            newArr.push(arr[i] + 5);// 500 * 500 = 500^2
            newArr2.push(arr[i] + 5);
        }
    }
    return newArr;
}
