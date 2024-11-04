const range = function (start, end, step) {
  let array = [];
  if (step == undefined) {
    step = 1;
  }

  for (let i = start; i <= end; i += step) {
    array.push(i);
  }
  if (step < 0) {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }

  return array;
};
module.exports = { range };
