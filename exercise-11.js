function balikKata(kata) {  
  var d = (kata.length)-1;
  var c = '';
  for(a=0;a<kata.length;a++) {
    c = c+kata[d];
    d = d-1;
  } return c
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS