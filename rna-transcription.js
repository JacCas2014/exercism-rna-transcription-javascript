function DnaTranscriber() {

}

DnaTranscriber.prototype.toRna = function(dna) {
 if(dna === 'C') {
     return 'G';
 } else if (dna === 'G') {
     return 'C';
 } else if (dna === 'A') {
     return 'U';
 } else if (dna === 'T') {
     return 'A';
 }
};

module.exports = DnaTranscriber;
