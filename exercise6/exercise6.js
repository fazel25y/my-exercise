//--callback--
function wash() {
  setTimeout(() => {
    console.log("washing clothes");
  }, 3000);
}
function dry(dryingTime) {
  setTimeout(() => {
    console.log("drying clothes");
    dryingTime();
  }, 5000);
}
function ready() {
  setTimeout(() => {
    console.log("your clothes is ready");
  }, 1000);
}
wash();
dry(ready);
//--promise & async await --
const error = false;
function washing() {
  setTimeout(() => {
    console.log("washing clothes");
  }, 8000);
}
function drying() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!error) {
        resolve("drying clothes");
      } else {
        reject("your clothes is not ready");
      }
    }, 9000);
  });
}
async function isReady() {
  return await drying(
    setTimeout(() => {
      console.log("your clothes is ready");
    }, 10000)
  );
}
washing();
drying().then((dryClothes) => {
  console.log(dryClothes);
});
isReady();
