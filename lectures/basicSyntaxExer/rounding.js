function rounding(num1, num2) {
    if (num2 > 15) {
        num2 = 15;
    }
    num1 = num1.toFixed(num2);
    num1 = parseFloat(num1);

    console.log(num1);
}
rounding(3.1415926535897932384626433832795, 3)