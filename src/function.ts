function multiply(a: number, b: number){
    return a * b;
}

function multiply2(a:number, b?:number):number{
    if(b){ //if b doesn't have value so it's only return a
        return a * b;
    }else{
        return a;
    }
}
function multiply3(a: number,b:number = 2) : number{
    return a * b;
}

console.log(multiply(10,20));