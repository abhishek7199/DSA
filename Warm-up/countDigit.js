function countDigit(n) {
    let count = 0;

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }

    return count;
}

let n = 152325;
let result = countDigit(n);
console.log(result);