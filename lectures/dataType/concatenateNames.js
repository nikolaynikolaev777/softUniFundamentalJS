function concatenateNames(firstName, lastName, par) {
    firstName += par + lastName;
    console.log(firstName);

}
concatenateNames('John',
    'Smith',
    '->');