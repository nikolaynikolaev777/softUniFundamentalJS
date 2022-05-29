function sumOfOddToNumbers(params) {
    let x = 0;
    let i = 0;
    let z = 0;
    while (i < params) {

        if (x % 2 === 1) {
            console.log(x);
            i++;
            z += x;
        }
        x++;
    }
    console.log(`Sum: ${z}`);
}
sumOfOddToNumbers(5);