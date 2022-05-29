function vacantion(peopleCount, typeGroup, day) {
    totalPrice = 0;

    if (typeGroup === "Students") {
        switch (day) {
            case "Friday": totalPrice = peopleCount * 8.45; break;
            case "Saturday": totalPrice = peopleCount * 9.80; break;
            case "Sunday": totalPrice = peopleCount * 10.46; break;
        }
        if (peopleCount >= 30) {
            totalPrice *= 0.85;
        }
    } else if (typeGroup === "Business") {
        if (peopleCount >= 100) {
            switch (day) {
                case "Friday": totalPrice = (peopleCount - 10) * 10.90; break;
                case "Saturday": totalPrice = (peopleCount - 10) * 15.60; break;
                case "Sunday": totalPrice = (peopleCount - 10) * 16; break;
            }
        } else {

            switch (day) {
                case "Friday": totalPrice = peopleCount * 10.90; break;
                case "Saturday": totalPrice = peopleCount * 15.60; break;
                case "Sunday": totalPrice = peopleCount * 16; break;
            }
        }

    } else if (typeGroup === "Regular") {
        switch (day) {
            case "Friday": totalPrice = peopleCount * 15; break;
            case "Saturday": totalPrice = peopleCount * 20; break;
            case "Sunday": totalPrice = peopleCount * 22.50; break;
        }
        if (peopleCount >= 10 && peopleCount <= 20) {
            totalPrice *= 0.95;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacantion(30,
    "Students",
    "Sunday");