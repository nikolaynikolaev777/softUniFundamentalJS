function ages(params) {
    if (0 <= params && params <= 2) {
        console.log('baby');
    } else if (params > 2 && params <= 13) {
        console.log('child');
    } else if (params > 13 && params <= 19) {
        console.log('teenager');
    } else if (params > 19 && params <= 65) {
        console.log('adult');
    } else if (params > 65) {
        console.log('elder');
    } else {
        console.log('out of bounds');
    }
}
ages(-12);