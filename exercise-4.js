var tanggal = 20; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2000; // 

if (tanggal > 0 && tanggal < 32 && tahun > 1899 && tahun < 2201) {
    switch (bulan) {
        case 1:
            console.log(tanggal + ' Januari ' + tahun); break;
        case 2:
            console.log(tanggal + ' Februari ' + tahun); break;
        case 3:
            console.log(tanggal + ' Maret ' + tahun); break;
        case 4:
            console.log(tanggal + ' April ' + tahun); break;
        case 5:
            console.log(tanggal + ' Mei ' + tahun); break;
        case 6:
            console.log(tanggal + ' Juni ' + tahun); break;
        case 7:
            console.log(tanggal + ' Juli ' + tahun); break;
        case 8:
            console.log(tanggal + ' Agustus ' + tahun); break;
        case 9:
            console.log(tanggal + ' September ' + tahun); break;
        case 10:
            console.log(tanggal + ' Oktober ' + tahun); break;
        case 11:
            console.log(tanggal + ' November ' + tahun); break;
        case 12:
            console.log(tanggal + ' Desember ' + tahun); break;
        default:
            console.log('Mohon mengisi bulan antara 1 - 12'); break;
     } }
else {
    console.log('Mohon mengisi tanggal antara 1 - 31, dan tahun antara 1900 - 2200')
} 
