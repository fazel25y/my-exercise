function data(Number1, Number2) {
  console.log(Number2 ** Number1);
}

data(4, 2);

//....Answer1....
function Kind(input) {
  console.log(typeof input);
}
Kind("For example");
//....Answer2....
function handleSort(sum1, sum2, sum3) {
  return sum2 + "," + sum1 + "," + sum3;
}
console.log(handleSort(110, 99, 112));
//....Answer3....
function Multiple5(start, end) {
  let sum = 5;
  for (let i = end; i >= start; i++) {
    if (i % 5 === 0) {
      sum *= i;
    }
  }
  console.log(sum);
}
Multiple5(1, 30);
