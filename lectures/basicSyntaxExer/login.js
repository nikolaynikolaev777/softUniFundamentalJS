function login(input) {
    let username = input[0];
    let inputL = input.length;
    let password = '';
    let wrongPass = 0;


    for (let i = 0; i < 1; i++) {
        let thisI = input[i];

        for (let x = thisI.length - 1; x >= 0; x--) {
            password = password + thisI[x];
        }

        for (let c = 1; c <= inputL; c++) {
            let thisC = input[c];

            if (password === thisC) {
                console.log(`User ${username} logged in.`);
                break;
            } else {
                wrongPass++;

                if (wrongPass > 3) {
                    console.log(`User ${username} blocked!`);
                    break;
                }

                console.log(`Incorrect password. Try again.`);
            }
        }

    }

}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);