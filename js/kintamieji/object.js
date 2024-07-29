/*
OBJECT - objektas
key-value porų sąrašas

*/

// riestiniai skliaustai
const empty = {};

const student1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

const student2 = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
    phone: 8612426,
};

const student3 = {
    name: 'Petras',
    age: 77,
    isMarried: false,
    address: 'Gatve, Miestas',
};

const student4 = {
    name: 'Ona',
    age: 66,
    isMarried: true,
    address: 'Gatve, Miestas',
    phone: 8612426,
};

// standartine sintakse
console.log(student1['name']);
console.log(student1['age']);
console.log(student1['isMarried']);

// supaprastinta sintakse
console.log(student4.name);
console.log(student4.address);
console.log(student4.age);
console.log(student4.phone);
console.log(student4.isMarried);

const cars = [
    {
        brand: 'Audi',
        model: '80',
        color: 'red',
        price: 300,
    },
    {
        brand: 'Volvo',
        model: 'S40',
        color: 'black',
        price: 1000,
    },
    {
        brand: 'Zapas',
        model: '1',
        color: 'pilkas',
        price: 777,
    },
    {
        brand: 'Ford',
        model: 'Model T',
        color: 'black',
        price: 199999,
    },
];

// Automobilis BRAND MODEL, kurio spalva yra COLOR parduodamas uz PRICE Eur.

const car1 = cars[0];
const car1Sale = 'Automobilis ' + car1.brand + ' ' + car1.model + ', kurio spalva yra ' + car1.color + ' parduodamas uz ' + car1.price + ' Eur.';
console.log(car1Sale);


const car2 = cars[1];
const car2Sale = 'Automobilis ' + car2.brand + ' ' + car2.model + ', kurio spalva yra ' + car2.color + ' parduodamas uz ' + car2.price + ' Eur.';
console.log(car2Sale);

const car3Sale = 'Automobilis ' + cars[2].brand + ' ' + cars[2].model + ', kurio spalva yra ' + cars[2].color + ' parduodamas uz ' + cars[2].price + ' Eur.';
console.log(car3Sale);

const car4Sale = 'Automobilis ' + cars[3].brand + ' ' + cars[3].model + ', kurio spalva yra ' + cars[3].color + ' parduodamas uz ' + cars[3].price + ' Eur.';
console.log(car4Sale);

/*
N.D.

Reikalingas sarasas prekiu.
Kiekviena preke yra aprasoma pavadinimu, kaina uz vieneta ir norimu pirkti kiekiu.

Reikia isspausdinti:

A) SABLONAS:
Prekiu krepselyje yra COUNT prekiu.

B) SABLONAS:
Prekiu krepselis
----------------
1) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS
2) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS
...
N) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS

C) SABLONAS:
Prekiu krepselio verte yra TOTAL KAINA Eur.
*/


console.clear();


    const irankis1 = {
        name: 'Suktukas',
        price: 300,
        qty: 1,
    };
    const irankis2 = {
        name: 'Slifuoklis',
        price: 50,
        qty: 5,
    };
    const irankis3 = {
        name: 'Oblius',
        price: 150,
        qty: 1,
    };
    const irankis4 = {
        name: 'Lituoklis',
        price: 40,
        qty: 3,
    };
    const irankis5 = {
        name: 'Kempas',
        price: 1300,
        qty: 1,
    };
    const irankis6 = {
        name: 'Kaltas',
        price: 10,
        qty: 20,
    };
    const irankis7 = {
        name: 'Siurblys',
        price: 400,
        qty: 2,
    };
    const irankis8 = {
        name: 'Pjuklas',
        price: 20,
        qty: 3,
    };


console.log('A sablonas'); 
// Prekiu krepselyje yra COUNT prekiu.

const irankiaiA =irankis1 [0];
const irankiukiekis ='Prekiu krepselyje yra '+  (irankis1.qty + irankis2.qty + irankis3.qty + irankis4.qty + irankis5.qty + irankis6.qty 
+ irankis7.qty + irankis8.qty) + ' prekes';
console.log(irankiukiekis);

console.log('-----------');

console.log('B sablonas');
/* Prekiu krepselis
----------------
1) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS
2) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS
...
N) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS
*/

console.log(irankis1.name +' ' + irankis1.price+' eur' + ' ' + '-' +' '+ irankis1.qty+'vnt');
console.log(irankis2.name +' ' + irankis2.price+' eur' + ' ' + '-' +' '+ irankis2.qty+'vnt');
console.log(irankis3.name +' ' + irankis3.price+' eur' + ' ' + '-' +' '+ irankis3.qty+'vnt');
console.log(irankis4.name +' ' + irankis4.price+' eur' + ' ' + '-' +' '+ irankis4.qty+'vnt');
console.log(irankis5.name +' ' + irankis5.price+' eur' + ' ' + '-' +' '+ irankis5.qty+'vnt');
console.log(irankis6.name +' ' + irankis6.price+' eur' + ' ' + '-' +' '+ irankis6.qty+'vnt');
console.log(irankis7.name +' ' + irankis7.price+' eur' + ' ' + '-' +' '+ irankis7.qty+'vnt');
console.log(irankis8.name +' ' + irankis8.price+' eur' + ' ' + '-' +' '+ irankis8.qty+'vnt');

console.log('-----------');

console.log('B sablonas');

// Prekiu krepselio verte yra TOTAL KAINA Eur.

const irankiai = irankis1[0];
const totalkaina = 'Prekiu krepselio verte yra ' + (irankis1.qty * irankis1.price + irankis2.qty * irankis2.price + irankis3.qty * irankis3.price
 + irankis4.qty * irankis4.price + irankis5.qty * irankis5.price +
irankis6.qty * irankis6.price + irankis7.qty * irankis7.price + irankis8.qty * irankis8.price) + ' eur'; 
console.log(totalkaina);








