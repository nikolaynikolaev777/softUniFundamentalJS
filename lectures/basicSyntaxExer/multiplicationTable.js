function multiplicationTable(params) {
    let i = 1;
    let sum = 0;
    while (i <= 10) {
        sum = params * i;
        console.log(`${params} X ${i} = ${sum}`);
        i++;
    }
}
multiplicationTable(5);