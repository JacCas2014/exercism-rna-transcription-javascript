function DnaTranscriber() {

}

DnaTranscriber.prototype.toRna = function(dna) {
 if(dna === 'C') {
     return 'G';
 }
};

module.exports = DnaTranscriber;
