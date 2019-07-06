// Tugas nomor 1
console.log('Looping Pertama'.toUpperCase())
var loop = 2;
while(loop <= 20) { 
  console.log(loop + ' - I love coding ' ); 
  loop = loop + 2; 
}

console.log('Looping Kedua'.toUpperCase())
var loop1 = 20;
while(loop1 > 1) { 
  console.log(loop1 + ' - I will become full stack developer ' ); 
  loop1 = loop1 - 2; 
}

// Tugas nomor 2
console.log('Looping Pertama'.toUpperCase())
for(var loop3 = 1; loop3 <=20; loop3++) {
    console.log(loop3 + ' - I love coding');
}

console.log('Looping Kedua'.toUpperCase())
for(var loop4 = 20; loop4 > 0; loop4--) {
    console.log(loop4 + ' - I will become fullstack developer');
}

//Tugas nomor 3
var counter = 1
while(counter < 101) {
    if ((counter%2) == 0) {
        console.log(counter +' adalah Genap');
    } else {
        console.log(counter + ' adalah Ganjil');
    } counter++;
}

for(var counter1 = 1; counter1 < 101; counter1 = counter1+2) {
    if (counter1%3 == 0) {
        console.log(counter1 + ' kelipatan ' + counter1);
    } else {
        console.log('')
    }
}

for(var counter2 = 1; counter2 < 101; counter2 = counter2+5) {
    if (counter2%6 == 0) {
        console.log(counter2 + ' kelipatan ' + counter2);
    } else {
        console.log('')
    }
} 

for(var counter3 = 1; counter3 < 101; counter3 = counter3+9) {
    if (counter3%10 == 0) {
        console.log(counter3 + ' kelipatan ' + counter3);
    } else {
        console.log('')
    }
} 