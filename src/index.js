module.exports = function reverse (n) {
  let h = String(n);
  let result = '';
  if (n < 0) {
    h = String(-n);
  }
    for (let i = 0; i < h.length; i++) {
        result = `${h[i]}${result}`
    }
    return Number(result);
}
