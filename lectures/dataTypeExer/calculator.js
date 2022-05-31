function calculator(par1, par2, par3) {
    let sum = 0;

    if (par2 === '+') {
        sum = par1 + par3;
    } else if (par2 === '-') {
        sum = par1 - par3;
    } else if (par2 === '*') {
        sum = par1 * par3;
    } else if (par2 === "/") {
        sum = par1 / par3;
    }

    console.log(sum.toFixed(2));
}
calculator(5,
    '+',
    10);