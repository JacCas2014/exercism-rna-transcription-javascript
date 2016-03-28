function DnaTranscriber() {}

function translate(nucleotide) {
    if(nucleotide === 'C') {
        return 'G';
    } else if (nucleotide === 'G') {
        return 'C';
    } else if (nucleotide === 'A') {
        return 'U';
    } else if (nucleotide === 'T') {
        return 'A';
    }
}
DnaTranscriber.prototype.toRna = function(dna) {
    var rna = '';
    for(var i=0; i < dna.length; i++) {
        rna += translate(dna[i]);
    }
    return rna;
};

module.exports = DnaTranscriber;
