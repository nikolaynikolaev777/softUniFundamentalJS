function centuriesToMinutes(params) {
    let year = params * 100;
    let day = Math.trunc(year * 365.2422);
    let hour = day * 24;
    let min = hour * 60;



    console.log(`${params} centuries = ${year} years = ${day} days = ${hour} hours = ${min} minutes`);
}
centuriesToMinutes(1);