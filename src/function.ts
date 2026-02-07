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

console.log(multiply(10,20));