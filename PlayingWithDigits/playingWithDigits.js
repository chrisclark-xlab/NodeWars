function digPow(n, p) {
  const total = n
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, val, i) => {
      return acc + Math.pow(val, p + i);
    }, 0);
  if (total % n == 0) {
    return total / n;
  }
  return -1;
}

module.exports = digPow;
