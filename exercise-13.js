var x = 0; 
var o = 0;
function findx(teks) {
    for(a=0; a<(teks.length); a++) {
        if(teks[a] == 'x') {
            x = x + 1;
        } else {
            o = o + 1;
        } 
    } console.log(x==o); 
}

findx('xoxo')