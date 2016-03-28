function DnaTranscriber() {

}

DnaTranscriber.prototype.toRna = function(dna) {
 if(dna === 'C') {
     return 'G';
 } else if (dna === 'G') {
     return 'C';
 }
};

module.exports = DnaTranscriber;
