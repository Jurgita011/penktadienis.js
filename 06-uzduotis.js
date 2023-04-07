



function palyginti (sk1,sk2){
    if(sk1>sk2){
        return sk1+" skaičius   didesnis uz "+ sk2;
    }else if (sk1===sk2){
        return  sk1+ ' lygu '+ sk2;
}else{
    return  sk2+ " skaičius didesnis uz" + sk1 ;
}
}
const sk1= 10;
const sk2= 20;
console.log(palyginti(sk1,sk2));


const sk3= 2;
const sk4= -1;
console.log(palyginti(sk3,sk4));


const sk5= 10;
const sk6= 10;
console.log(palyginti(sk5,sk6));