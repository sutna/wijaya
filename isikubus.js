var masukankeyboard = require("readline-sync");

var sisi = parseInt(masukankeyboard.question("masukan sisi : "));

var volume = sisi*sisi*sisi;

console.log("volume kubus : " +volume);