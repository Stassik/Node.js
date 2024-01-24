

function discriminantSearch(a, b, c) {
    let disc;
    if (b % 2 === 0) {
        disc = Math.pow((b / 2), 2) - (a * c);
        return disc;
    } else {
        disc = Math.pow(b, 2) - 4 * a * c;
        return disc;
    }

}

module.exports = discriminantSearch;