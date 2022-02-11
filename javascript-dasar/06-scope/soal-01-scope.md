/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

1. Ada 2 variable scope pada javascript yakni Global Scope dan Lokal Scope:
   scope merupakan konsep dalam flow data variable yang dapat menentukan suatu variable dapat diakses pada 
   scope tertentu atau tidak. Hal ini dapat dilihat dari penempatan blocks (curly bracket)
    - Global scope
        Global scope dapat diakses dimanapun dalam suatu file baik di dalam maupun di luar dari suatu 
        fungsi atau blok (grup) kode. agar dapat menjadi global scope variable harus di deklarasikan diluar 
        blocks.

    - Lokal scope
        Sebaliknya, lingkup lokal adalah ketika sebuah variabel hanya bisa diakses di dalam sebuah 
        fungsi atau blok kode. Semua variabel yang dideklarasikan di dalam sebuah fungsi/blok hanya 
        bisa di dalam fungsi/blok tersebut saja. tidak dapat diakses diluar blok.

2. Contoh implementasi Global Scope dan Local scope 
    - Global Scope

        const olahraga = 'basketball';

        function namaAtlet() {
        let atlet = 'Lionel Messi';
        const noMessi = 10;
        console.log(olahraga); // Output: basketball
        if (olahraga === 'basketball') {
            atlet = 'Kobe Bryant';
            const noKobe = 24;
            console.log(olahraga); // Output: basketball
        }
        return atlet;
        }

        console.log(namaAtlet()); // Output: Kobe Bryant
        console.log(olahraga); // Output: basketball

    - Local scope

        const olahraga = 'basketball';

        function namaAtlet() {
        let atlet = 'Lionel Messi'; // lingkup fungsi
        const noMessi = 10; // lingkup fungsi
        if (olahraga === 'basketball') { 
            atlet = 'Kobe Bryant';
            const noKobe = 24; // lingkup blok
            console.log(noMessi); // Output: 10  
        }
        console.log(noKobe); // Output: Uncaught ReferenceError: noKobe is not defined
        return atlet;
        }

        namaAtlet();
