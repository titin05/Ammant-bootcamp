1. type error
   kesalahan ketika operasi tidak dapat dilakukan, biasanya (tetapi tidak secara eksklusif) ketika nilai bukan dari tipe yang diharapkan.
   TypeError dapat dilempar ketika:
   operan atau argumen yang diteruskan ke suatu fungsi tidak sesuai dengan tipe yang diharapkan oleh operator atau fungsi tersebut; atau
   ketika mencoba mengubah nilai yang tidak dapat diubah; atau
   ketika mencoba menggunakan nilai dengan cara yang tidak pantas.

2. reference error
   kesalahan ketika variabel yang tidak ada direferensikan.

3. Range Error
   suatu nilai tidak dalam set atau rentang nilai yang diizinkan

4. Syntax Error
   kesalahan saat mencoba menafsirkan kode yang tidak valid secara sintaksis.
   Itu dilempar ketika mesin JavaScript menemukan token atau urutan token yang
   tidak sesuai dengan sintaks bahasa saat parsing
   
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

ReferenceError pada baris console.log(salaryWithConst) ini di karenakan mengakses variable yang belum di inisialisasi.
tidak error pada console.log(salaryWithVar) karena perlakuan javascript kepada var yang membuat dapat di akses sebelum inisialisasinya namun tetap harus ada inisialisasinya
