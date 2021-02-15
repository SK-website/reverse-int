module.exports = function reverse(n) {
    if (n < 0) {
        n = n * -1;
    }
    a = String(n).split("").reverse().join("");
    return +a;
};
