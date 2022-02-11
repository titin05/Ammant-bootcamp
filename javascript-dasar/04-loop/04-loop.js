/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE

function angkaPrima( n ) {
    var max = Math.sqrt(n);
    for( var i = 2;  i <= max;  i++ ) {
        if( n % i == 0 )
            return false;
    }
    return true;
}

for( var n = 2;  n < 100;  n++ ) {
        if( angkaPrima(n) ) {
  console.log(n);
 }
}



/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 

let primeCounter = 0;
let fiftiethPrime = 0;
let i = 1;

while (primeCounter < 50) {
    i++;
    var eliminasi = false;
    for (let n = 2; n <= i; n++) {
        if (i%n==0 && i!==n) {
            eliminasi = true;
        }
    }
    
    if (eliminasi == false) {
                primeCounter++;  // 2 3 5 7 .. 
                fiftiethPrime = i;
    }
}
// console.log(primeCounter);

/// EDIT HERE
console.log(fiftiethPrime)



/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop


let oddCounter = 0;
let fiftiethOdd;
let z = 0;

do {
  z++;
  if(z%2==1){
    oddCounter++;
    if(oddCounter==50){
      fiftiethOdd = z;
      console.log(fiftiethOdd);
    }
  }
} 
while (oddCounter<50)
/// EDIT HERE
// do { .... } while (....)