console.clear();

//                                Kintamųjų inicijavimas

// 1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
//    Po kiekvieno jų inicijavimo, išvesti į console

const a = 3;
const b = 2;
const c = 5;
console.log(a, b, c);


// 2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
//    Po kiekvieno jų inicijavimo, išvesti į console

const diena = 'pirmadienis';
const diena1 = 'antrdienis';
const diena2 = 'treciadienis';
console.log(diena, diena1, diena2);

// 3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
//    Po kiekvieno jų inicijavimo, išvesti į console

const speed = [100, 120, 240, 300, 20];
const way = [1, 2, 3, 4, 5];
const time = [10, 15, 5, 3, 4];
console.log(speed, way, time);

// 4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
//    Po kiekvieno jų inicijavimo, išvesti į console


const doctors = ['Jonas', 'Marius', 'Reda', 'Benas', 'Tadas'];
const drivers = ['Sigis', 'Rytis', 'Inga', 'Eva', 'Ana'];
const butchers = ['Gedas', 'Erika', 'Albinas', 'Kostas', 'Ugne'];

console.log(doctors);
console.log(drivers);
console.log(butchers);

                             // Veiksmai su kintamaisiais

// 1. Susumuoti visus skaičiaus tipo kintamuosius
//    Rezultatą išvesti į console

const suma = a + b +c;
console.log(suma);

// 2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
//    Rezultatą išvesti į console

const dienos = 'pirmadienis '+'antradienis '+'treciadienis';
console.log(dienos);

console.clear();


// 3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
//    1-2+3-4+5
//    Rezultatą išvesti į console

const songs = [100, 120, 240, 300, 20];

const verte = songs[0] - songs[1] + songs[2] - songs[3] + songs[4];
console.log(verte);

// 4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, 
//    jog tarp jų būtų kablelis ir tarpas

const ezeras= 'Didziulio ezeras yra Alytaus rajone.';
const sala = 'Mums patinka ten leisti laika';
const veiksmas = 'plaukiojant,';
const veiksmas1 = 'zvejojant';

const poilsis = ezeras + ' ' + sala + ' ' + veiksmas + ' ' + veiksmas1 + '.';
console.log(poilsis);

                        // Kintamųjų palyginimas 


// Priklausomai nuo sąlygos, susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
// Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau), tai į console išvesti
//  žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

//  1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:

const kaina = 10;
const kaina2 = 7;

// a. kuris didesnis

if (kaina > kaina2) {
    console.log('Pomidoras');
    
} else {
    
console.log('Bandykite kita karta.');

};

    

// b. kuris mažesnis

    if (kaina < kaina2) {
        console.log('Pomidoras');
    } else {
        console.log('Bandykite kita karta.');
    };


// c. ar jie lygūs

if (kaina === kaina2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
};
//  d. ar jie nelygūs

if (kaina !== kaina2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
};
//  e. kuris didesnis arba lygus

if (kaina >= kaina2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
};
//  f. kuris mažesnis arba lygus
if (kaina <= kaina2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
};
    
//   2. Išvesti teksto tipo kintamųjų ilgius



const longest = 'nebeprisikiskiakopusteliaudavome';

console.log(longest.length);

// 3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:

const darzove = 'agurkas';
const uoga = 'arbuzas';

const dIlgis = darzove.length;
console.log(dIlgis);

const uIlgis = uoga.length;
console.log(uIlgis);



// a. kuris didesnis

if (dIlgis > uIlgis) {
    console.log('Pomidoras');
    
} else {
    
console.log('Bandykite kita karta.');

};

    

// b. kuris mažesnis

    if (dIlgis < uIlgis) {
        console.log('Pomidoras');
    } else {
        console.log('Bandykite kita karta.');
    };


// c. ar jie lygūs

if (dIlgis === uIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
};
//  d. ar jie nelygūs

if (dIlgis !== uIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
};
//  e. kuris didesnis arba lygus

if (dIlgis >= uIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
};
//  f. kuris mažesnis arba lygus
if (dIlgis <= uIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
};

//   4. Išvesti sąrašo tipo kintamųjų ilgius

const svoris = [10, 5, 7, 9, 8];
console.log(svoris.length);















 


