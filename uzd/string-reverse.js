function stringReverse(str) {
    if (typeof str !== 'string') {
        return 'ERROR: reikia duoti string tipo reiksme';
    }
    if (str === '') {
        return 'ERROR: duota reiksme negali buti tuscias stringas';
    }

    let reversedString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }

    // for (let i = 0; i < str.length; i++) {
    //     reversedString = str[i] + reversedString;
    // }

    return reversedString;
}

console.log(stringReverse(1));
console.log(stringReverse(true));
console.log(stringReverse(null));
console.log(stringReverse([]));
console.log(stringReverse({}));
console.log(stringReverse(undefined));
console.log(stringReverse());
console.log(stringReverse(stringReverse));

console.log(stringReverse(''));

console.log(stringReverse('labas'), '-->', 'sabal');
console.log(stringReverse('sedek'), '-->', 'kedes');
console.log(stringReverse('sedek uzu kedes'), '-->', 'sedek uzu kedes');
console.log(stringReverse('sula'), '-->', 'alus');
console.log(stringReverse('taco cat'), '-->', 'tac ocat');
console.log(stringReverse('sigis'), '-->', 'sigis');