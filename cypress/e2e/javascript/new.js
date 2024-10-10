function isPrime(number){
    let i;
    for(i=2;i<number;i++){
        if(number%i==0){
            return false;
        }
        return true
    }   
}
console.log(isPrime(11))