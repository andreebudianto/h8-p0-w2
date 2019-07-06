var nama = 'Rahwana'
var peran = 'Pendekar'

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
} else if (peran === 'Penyihir') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama + '.');
  console.log('Halo ' + peran + " " + nama + ", kamu akan membantu para Pendekar melawan Patih yang jahat.");
} else {
  console.log('Mohon mengisi pesan dan nama');
}
