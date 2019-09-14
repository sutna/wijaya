var masukankeyboard = require("readline-sync");

var jarijari = parseInt(masukankeyboard.question("masukan jari jari : "));
var phi = parseInt(masukankeyboard.question("masukan phi : "));

var kelilinglingkaran = jarijari*phi*2;
console.log("keliling lingkaran="+kelilinglingkaran);