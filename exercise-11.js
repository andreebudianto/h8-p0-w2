function balikKata(kata) {  
  var titik_awal_pembalikan = (kata.length)-1;
  var pembalikan = '';
  for(ujung = 0; ujung < kata.length; ujung++) {
    pembalikan = pembalikan + kata[titik_awal_pembalikan];
    titik_awal_pembalikan = titik_awal_pembalikan -1;
  } return pembalikan;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
