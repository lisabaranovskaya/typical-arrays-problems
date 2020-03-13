
exports.min = function min(array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  }
  return Math.min.apply(Math, array);
}

exports.max = function max(array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  }
  return Math.max.apply(Math, array);
}

exports.avg = function avg(array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  }
  let sum = array.reduce((a, b) => a + b, 0);
  return sum / array.length;
}
