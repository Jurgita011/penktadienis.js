function konvertavimas (valandos){
    sekundes = valandos *60 *60;
    return sekundes;
}
const val= 3;
const x= konvertavimas ( val);
console.log(x);

const val1= 2;
const x1= konvertavimas ( val1);
console.log(x1);

const val2= 10;
const x2= konvertavimas ( val2);
console.log(x2);

const val3= 24;
const x3= konvertavimas ( val3);
console.log(x3);