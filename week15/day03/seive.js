function seive(n){
    let primes = new Array(n+1)
    primes.fill()

    primes = primes.map((item , index) => index).filter(item => item != 0 && item != 1)
    for(let i = 2; i <= Math.sqrt(n); i++){
        primes = primes.filter(item => (item % 1) != 0 || item <=i)
    }
    return primes
}
console.log(seive(5));