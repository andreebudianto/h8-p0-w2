var nama = 'Rahwana'
var peran = 'Patih'

if (nama === '') {
  console.log('Mohon mengisi nama');
} else if (peran === '') {
  console.log('Halo, ' + nama + '. Mohon mengisi peranmu.');
} else if (peran === 'Pendekar') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama + '.');
  console.log('Halo ' + peran + " " + nama + ", kamu adalah harapan rakyat Demak untuk mengalahkan Singaraja.");
} else if (peran === 'Patih') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama + '.');
  console.log('Halo ' + peran + " " + nama + ", kamu akan mengajarkan rakyat Singaraja apa artinya kehilangan dan bagaimana harusnya mereka bersyukur.");
} else {
  console.log('Mohon mengisi pesan dan nama')
}
