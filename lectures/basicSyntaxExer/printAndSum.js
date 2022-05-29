function printAndSum(n1, n2) {
    let x = '';
    let sum = 0;
    while (n1 <= n2) {
        x += n1 + ' ';
        sum += n1;
        n1++;
    }
    console.log(x);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);