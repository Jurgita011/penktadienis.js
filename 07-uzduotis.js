function daugyba (x){
    let rez='';
    for (let i=1; i<=10 ; i=i+1){
        rez=rez+i+'*'+ x + '=' +(i*x)+' \n \r';
       
    }
    return rez;
}
const a=3;
console.log(daugyba(a));