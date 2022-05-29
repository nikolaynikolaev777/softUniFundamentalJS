function triangleOfNumber(params) {
    let i = 0;

    for (let i = 1; i <= params; i++) {
        let lane = '';
        for (let x = 1; x <= i; x++) {
            lane += i + ' ';
        }
        console.log(lane);
    }
}
triangleOfNumber(3);