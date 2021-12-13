function fibonacci(number: number): number{
    if(number==1 || number==2){
        return 1;
    }
    return fibonacci(number-1)+fibonacci(number-2);
}
let sum=0;
for(let i=1;i<=20;i++){
    let fi_x=fibonacci(i);
    console.log(fi_x+" ");
    sum+=fi_x;
}
console.log("Sum: "+sum);
