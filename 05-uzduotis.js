console.clear();

function palyginimas(x,y){
    if(x===y){
        return true;
    }else{
        return false
    }
}

const  a= 22;
const b= 45;
console.log(`ar ${a} yra lygus ${b} :${palyginimas(a,b)}`);