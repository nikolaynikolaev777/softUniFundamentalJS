function triplesOfLatinLetters(params) {
    let i1 = 0;
    let i2 = 0;
    let i3 = 0;

    let sum1 = '';
    let sum2 = '';
    let sum3 = '';

    let letter = String.fromCharCode(97);

    while (i1 < params) {
        letter = String.fromCharCode(97 + i1);
        sum1 = letter;

        while (i2 < params) {
            letter = String.fromCharCode(97 + i2);
            sum2 = letter;

            while (i3 < params) {
                letter = String.fromCharCode(97 + i3);
                sum3 = letter;
                sum3 = sum1 + sum2 + letter;
                console.log(sum3);
                i3++;
            }

            i3 = 0;
            i2++;

        }

        i2 = 0;
        i1++;
    }

}
triplesOfLatinLetters(2);