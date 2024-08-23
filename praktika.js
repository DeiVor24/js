/*
1. Skaičiaus lygumas
Parašyk funkciją, kuri priima skaičių ir grąžina "Even", jei skaičius yra 
lyginis, ir "Odd", jei skaičius yra nelyginis.
 */

function lyginis(skaicius) {
    // if (skaicius % 2 === 0) {
    //   return "lyginis";
    // } else {
    //   return "nelyginis";
    // }
    return skaicius % 2 === 0 ? "lyginis" : "nelyginis";
  }
  console.log(lyginis(40));
  console.log("-----------------------------------------------------");
  /*
  2. Pasukant tekstą atvirkščiai
  Parašyk funkciją, kuri priima eilutę (tekstą) ir grąžina tą eilutę atvirkštine tvarka.
   */
  function reverse(tekstas) {
    return tekstas.split("").reverse().join("");
  }
  console.log(reverse("Laba diena BIT"));
  // .reverse().join("");
  console.log("-----------------------------------------------------");
  /*
  3. Skaičių kvadratai
  Parašyk funkciją, kuri priima masyvą skaičių ir grąžina naują masyvą, kurio kiekvienas elementas yra
  atitinkamo pradinio masyvo elemento kvadratas.
  */
  
  function kvadratu(array) {
    return array.map((a) => a * a);
  }
  console.log(kvadratu([10, 2, 6, 4, 8, 8, 10, 16]));
  console.log("-----------------------------------------------------");
  /*
  4. Skaičių suma
  Parašyk funkciją, kuri priima du skaičius ir grąžina jų sumą.
  */
  function suma(a, b) {
    return a + b;
  }
  console.log(suma(2, 3));
  
  console.log("-----------------------------------------------------");
  /*
  5. Kelių skaičių suma
  Parašyk funkciją, kuri priima masyvą skaičių ir grąžina jų sumą.
  */
  
  function reduce(skaiciai) {
    return skaiciai.reduce((a, b) => a + b);
  }
  console.log(reduce([10, 2, 6, 4, 8, 8, 10, 16]));
  console.log("-----------------------------------------------------");
  /*
  6. Teksto simbolių skaičiavimas
  Parašyk funkciją, kuri priima eilutę ir grąžina objektą, kuriame yra skirtingų simbolių skaičius.
  */
  
  function diff(text) {
    const characterCount = {};
    for (let char of text) {
      if (characterCount[char]) {
        characterCount[char]++;
      } else {
        characterCount[char] = 1;
      }
    }
    return characterCount;
  }
  console.log(diff("Laba diena su vistiena"));
  
  console.log("-----------------------------------------------------");
  /*
  7. Didžiausias skaičius
  Parašyk funkciją, kuri priima masyvą skaičių ir grąžina didžiausią skaičių iš masyvo.
  */
  
  function didziausias(skaiciai) {
    return skaiciai.reduce((a, b) => (a > b ? a : b));
  }
  console.log(didziausias([10, 2, 6, 4, 8, 8, 10, 16]));
  console.log("-----------------------------------------------------");
  /*
  8. Mažiausias skaičius
  Parašyk funkciją, kuri priima masyvą skaičių ir grąžina mažiausią skaičių iš masyvo.
  */
  function maziausias(skaiciai) {
    return skaiciai.reduce((a, b) => (a < b ? a : b));
  }
  console.log(maziausias([10, 2, 6, 4, 8, 8, 10, 16]));
  console.log("-----------------------------------------------------");
  /*
  9. Daugkartiniai žodžiai
  Parašyk funkciją, kuri priima žodį ir skaičių, ir grąžina tą žodį, kartotą tiek kartų, kiek nurodytas skaičius.
  */
  function pakartotasZodis(zodis, skaicius) {
    return zodis.repeat(skaicius);
  }
  console.log(pakartotasZodis("Mokomes ", 5));
  console.log("-----------------------------------------------------");
  /*
  10. Fibonacci seka
  Parašyk funkciją, kuri grąžina pirmuosius n Fibonacci sekos skaičius.
  */
  function fibonacciGenerator(n) {
    let output = [];
    if (n === 1) {
      output = [0];
    } else if (n === 2) {
      output = [0, 1];
    } else {
      output = [0, 1];
      for (let i = 2; i < n; i++) {
        output.push(output[output.length - 2] + output[output.length - 1]);
      }
    }
    return output;
  }
  console.log(fibonacciGenerator(10));
  console.log("-----------------------------------------------------");
  /*
  11. Masyvo elementų skaičiavimas
  Parašyk funkciją, kuri priima masyvą ir grąžina jo ilgį (elementų skaičių).
  */
  function arrayLength(array) {
    return array.length;
  }
  console.log(arrayLength([10, 2, 6, 4, "Pavadinimas", "zodis"]));
  console.log("-----------------------------------------------------");
  /*
  12. Filtravimas pagal sąlygas
  Parašyk funkciją, kuri priima masyvą skaičių ir grąžina naują masyvą, kuriame yra tik teigiami skaičiai.
  */
  function teigiami(skaiciai) {
    return skaiciai.filter((skc) => skc > 0);
  }
  console.log(teigiami([10, -2, 6, -4, 8, 8, -10, 16]));
  console.log("-----------------------------------------------------");
  /*
  13. Rask eilutės ilgį
  Parašyk funkciją, kuri priima eilutę ir grąžina tos eilutės ilgį.
  */
  function ilgis(eilute) {
    return eilute.length;
  }
  console.log(ilgis("labadiena su vistiena"));
  console.log("-----------------------------------------------------");
  /*
  14. Patikrink, ar masyve yra skaičius
  Parašyk funkciją, kuri priima masyvą ir skaičių, ir grąžina true, jei masyve yra tas skaičius, ir false, jei nėra.
  */
  function arYraSkaicius(masyvas, skaicius) {
    if (masyvas.includes(skaicius)) {
      return true;
    }
    return false;
  }
  console.log(arYraSkaicius([10, -2, 6, -4, 8, 8, -10, 16], 6));
  console.log("-----------------------------------------------------");
  /*
  15. Apskaičiuok skaičiaus faktorialą
  Parašyk funkciją, kuri priima skaičių ir grąžina jo faktorialą (pvz., 5! = 5 × 4 × 3 × 2 × 1).
  */
  function faktorialas(skaicius) {
    for (let i = skaicius; i > 1; i--) {
      skaicius *= i - 1;
    }
    return skaicius;
  }
  console.log(faktorialas(10));
  
  console.log("-----------------------------------------------------");
  /*
  16. Masyvo rūšiavimas
  Parašyk funkciją, kuri priima masyvą skaičių ir grąžina jį surūšiuotą nuo mažiausio iki didžiausio.
  */
  function rusiuoti(masyvas) {
    return masyvas.sort((a, b) => a - b);
  }
  console.log(rusiuoti([10, -2, 6, -4, 8, 8, -10, 16, 100000000, -10000000]));
  console.log("-----------------------------------------------------");
  /*
  17. Pašalink dublikatus iš masyvo
  Parašyk funkciją, kuri priima masyvą ir grąžina naują masyvą be pasikartojančių elementų.
  */
  
  function dublikatai(masyvas) {
    const matyti = {};
    return masyvas.filter((elementas) => {
      if (!matyti[elementas]) {
        matyti[elementas] = true;
        return true;
      }
      return false;
    });
  }
  console.log(dublikatai([1, 2, 2, 3, 4, 4, 5, 5, 6, 10, 10]));
  
  console.log("-----------------------------------------------------");
  /*
  18. Teksto simbolių dažnio skaičiavimas
  Parašyk funkciją, kuri priima eilutę ir grąžina objektą, kurio raktai yra simboliai, o reikšmės yra tų simbolių dažnis eilutėje.
  */
  function daznis(text) {
    const characterCount = {};
    for (let char of text) {
      if (characterCount[char]) {
        characterCount[char]++;
      } else {
        characterCount[char] = 1;
      }
    }
    return characterCount;
  }
  console.log(daznis("BIT studentai mokosi programuoti"));
  console.log("-----------------------------------------------------");
  /*
  19. Didžiųjų raidžių keitimas į mažąsias ir atvirkščiai
  Parašyk funkciją, kuri priima eilutę ir grąžina tą pačią eilutę, bet su pakeistomis didžiosiomis raidėmis į mažąsias ir atvirkščiai.
  */
  function raidesInvert(text) {
    return text
      .split("")
      .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
      .join("");
  }
  console.log(raidesInvert("BIT studeNtai MOKosi progrAMUOti"));
  console.log("-----------------------------------------------------");
  /*
  20. Patikrink, ar skaičius yra pirminis
  Parašyk funkciją, kuri priima skaičių ir grąžina true, jei jis yra pirminis, ir false, jei nėra.
  */
  function pirminis(skaicius) {
    let isPrime = true;
    if (skaicius > 1) {
      for (let i = 2; i < skaicius; i++) {
        if (skaicius % i === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        return true;
      } else {
        return false;
      }
    }
  }
  console.log(pirminis(29));