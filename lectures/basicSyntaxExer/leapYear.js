function leapYear(params) {
    if ((params % 4 === 0 && params % 100 != 0) || params % 400 === 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
leapYear(1984);