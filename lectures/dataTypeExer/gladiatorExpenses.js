function gladiatorExpenses(lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let shieldCount = 0;
    let sum = 0;

    for (let i = 1; i <= lostFight; i++) {
        if (i % 2 === 0) {
            sum += helmetPrice;
        }

        if (i % 3 === 0) {
            sum += swordPrice;
        }

        if (i % 6 === 0) {
            sum += shieldPrice;
            shieldCount++;
            if (shieldCount % 2 === 0) {
                sum += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200);