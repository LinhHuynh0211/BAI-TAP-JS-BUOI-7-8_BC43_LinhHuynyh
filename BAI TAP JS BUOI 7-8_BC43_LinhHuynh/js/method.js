function soDuong(n){
    var outPut = false;
    if(n>0){
        outPut = true;
    }
    return outPut;
    
}
function isPrime(num) {
    let flag = true;
    let isPrime = true;
    if (num === 0 || num === 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (flag) {
        if(num % i === 0) {
          isPrime = false;
          flag = false;
        }
      }
    }
    return isPrime;
  }