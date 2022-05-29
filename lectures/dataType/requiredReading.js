function requiredReading(bookPage, readPageForHour, day) {
    let sumHour = bookPage / readPageForHour;
    day = sumHour / day;

    console.log(day);
}
requiredReading(432,
    15,
    4);