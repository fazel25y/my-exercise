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
  let sum = 0;
  for (let i = start; i < end; i++) {
    if (i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}
Multiple5(1, 30);
//.....Answer4....
//................
let star = "*";
console.log(star);
star = "**";
console.log(star);
star = "***";
console.log(star);
star = "****";
console.log(star);
//.................
function Light(lamp) {
  if (lamp === "red") {
    console.log("stop");
  } else if (lamp === "yellow") {
    console.log("warning");
  } else if (lamp === "green") {
    console.log("go");
  } else {
    console.log("error");
  }
}
Light("red");
//.............................................
//1----------------
function power(num1, num2) {
  return num1 ** num2;
}

console.log(power(2, 3));

//2 ---------------

function findInputType(input) {
  return typeof input;
}

console.log(findInputType("hello"));
//3 ----------------

function findMaxInput(num1, num2, num3) {
  if (
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    typeof num3 === "number"
  )
    if (num1 >= num2 && num1 >= num3) {
      return num1;
    } else if (num2 >= num1 && num2 >= num3) {
      return num2;
    } else {
      return num3;
    }
}
console.log(findMaxInput(22, 4, 1));

//4 ----------------

function sumOfNumbers() {
  let sum = 0;
  for (let i = 1; i < 31; i++) {
    if (i % 5 === 0) {
      sum += i;
    }
  }

  console.log(sum);
}

sumOfNumbers();

// *****optional practices*****
//5 ------

function stars() {
  for (let line = 1; line < 6; line++) {
    let output = "";
    for (let star = 1; star <= line; star++) {
      output += "*";
    }
    console.log(output);
  }
}
stars();

//6------

function trafficLight(light) {
  let lightToLowerCase = light.toLowerCase();
  switch (lightToLowerCase) {
    case "green":
      return "go";
    case "red":
      return "stop";
    case "yellow":
      return "warnning";
    default:
      return "please enter green or red or yellow !";
  }
}

console.log(trafficLight("GREEN"));
console.log(trafficLight("yellow"));

//---------------------------------------------------------------
