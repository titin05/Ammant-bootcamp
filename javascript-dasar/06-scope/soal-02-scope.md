/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"))

// Hasil Analisa
Yang akan tampil pada console adalah Mariah. Hal ini karena ketika kode di console.log yang akan ditampilkan hanya index 
ke-0 saja yakni mariah. variabel name juga bersifat global scope dan dapat diakses dimana saja.
Meskipun variabel yang digunakan adalah const, nilainya dapat diubah karena kita menggunakan split yang akan 
mengembalikan nilai array. Sehingga sebenarnya kita menyimpan referensi ke array. Ketika kita menggabungkan sesuatu
kedalam array, kita tidak dapat mengubah nilai konstantanya, melainkan array yang ditunjuk.