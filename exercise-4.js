var tanggal = 1; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2000; // 

switch (bulan) {
    case 1:
        console.log(tanggal + ' Januari ' + tahun);
    case 2:
        console.log(tanggal + ' Februari ' + tahun);
    case 3:
        console.log(tanggal + ' Maret ' + tahun);
    case 4:
        console.log(tanggal + ' April ' + tahun);
    case 5:
        console.log(tanggal + ' Mei ' + tahun);
    case 6:
        console.log(tanggal + ' Juni ' + tahun);
    case 7:
        console.log(tanggal + ' Juli ' + tahun);
    case 8:
        console.log(tanggal + ' Agustus ' + tahun);
    case 9:
        console.log(tanggal + ' September ' + tahun);
    case 10:
        console.log(tanggal + ' Oktober ' + tahun);
    case 11:
        console.log(tanggal + ' November ' + tahun);
    case 12:
        console.log(tanggal + ' Desember ' + tahun);
    default:
        console.log('Mohon mengisi bulan antara 1 - 12');
}