function sumDigit(params) {
    let sum = 0;
    params = params.toString();
    for (let i = 0; i < params.length; i++) {
        let paramL = params[i];
        sum += Number(paramL);
    }
    console.log(sum);
}
sumDigit(245678);