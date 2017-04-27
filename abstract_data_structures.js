//src = https://en.wikipedia.org/wiki/Associative_array
// 1. Describe
/*
Associative array, atau dalam JS disebut dengan Object, dan memiliki Class sebagai template dalam create object baru. Merupakan kumpulan dari pasangan "key:value" yang mendukung fungsi CRUD.
*/
// ------------
// 2. Implement
// Create Object
let libraryLoan = new Object();
libraryLoan["Bumi Manusia"] = "Zulfikar";
libraryLoan["Kumpulan Puisi Angkatan 66"] = "Bambang";
libraryLoan["Arok Dedes"] = "Bambang";
libraryLoan["Di Bawah Bendera Revolusi"] = "Joko"
console.log(libraryLoan)
console.log("------------------------------");
console.log("Search Value by Key");
console.log(libraryLoan["Bumi Manusia"]);
console.log(libraryLoan["Arok Dedes"]);
console.log("-------------------------------");
console.log("Search Key by Value, Not Found");
console.log("Data size");
console.log(Object.keys(libraryLoan).length);
console.log("-------------------------------");
console.log("Update Data");
libraryLoan["Arok Dedes"] = "Mulyadi";
console.log(libraryLoan);
console.log("-------------------------------");
console.log("Delete");
delete libraryLoan["Arok Dedes"];
console.log(libraryLoan);
// ------------
// 3. Get real
/*
Menurut referensi, model data di atas digunakan untuk menyimpan hash table yang digunakan untuk memberikan index ke suatu property dengan pengelompokan "bucket"
*/
