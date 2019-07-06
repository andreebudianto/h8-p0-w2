function konversiMenit(menit) {
  var depan = String(Math.floor(menit/60));
  var detik = String(menit%60);
  if((detik.length)===1) {
    detik = '0'+detik;
  } else {
    detik = detik;
  }
  var tampil = depan +':'+ detik;
  return tampil;
} 

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00