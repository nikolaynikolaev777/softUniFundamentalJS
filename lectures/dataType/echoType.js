function echoType(params) {
    if (params === null) {
        console.log(typeof params);
        console.log(`Parameter is not suitable for printing`);
    } else {
        console.log(typeof params);
        console.log(params);
    }
}
echoType(null);