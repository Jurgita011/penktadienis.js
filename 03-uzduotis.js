//3. Parašyti f-ją, kuri skaičiuotų krepšinio taškus, pirmas perduodamas parametras baudų skaičius, 
//antras perduodamas parametras dvitaškių skaičius, trečias perduodamas tritaškių. 
//Apskaičiuoti ir gražinti bendrą surinkta komandos taškų skaičių. 
//TEST:
//basketballPoints(5, 25, 10) ➞ 85
//basketballPoints(1, 1, 1) ➞ 6
//basketballPoints(10, 20, 5) ➞ 6


console.clear();
function taskai (baudos, dvitaskiai, tritaskiai){
    let suma = 0;
    suma = baudos +(dvitaskiai*2)+ (tritaskiai*3);
    return suma;
}
const a=5;     //baudos
const b = 25 ; // dvitaskiai
const c = 10 ; // tritaskiai
console.log(`rezultatas : ${taskai(a,b,c)}`);


const d=1;     //baudos
const e = 1 ; // dvitaskiai
const f = 1 ; // tritaskiai
console.log(`rezultatas : ${taskai(d,e,f)}`);




const g = 10;   //baudos
const h = 20 ; // dvitaskiai
const i = 5 ; // tritaskiai
console.log(`rezultatas : ${taskai(g,h,i)}`);