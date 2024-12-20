function isEvenLengthString(str) {
    const len = str?.length;
    if(len %2 === 0) {
        return true;
    }
    return false;
}

module.exports= is-string-len-even;