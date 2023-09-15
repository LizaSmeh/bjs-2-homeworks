function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];
   min = Math.min(...arr);
   max = Math.max(...arr);
   sum = arr.reduce(function (x, y) {
   return x + y;
}, 0);
   let avg = Number((sum / arr.length).toFixed(2));
   return { min: min, max: max, avg: avg };
 }

function summElementsWorker(...arr) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== undefined){
           let sum = arr.reduce(function (x, y) {
      return x + y;
  }, 0);
  return sum;}else{
return 0;
  }
}
}

function differenceMaxMinWorker(...arr) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== undefined){
 let difference = Math.max(...arr) - Math.min(...arr);
 return difference;
}else{
  return 0;

}};
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
let sumOddElement = 0;

for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== undefined){
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
      }else{
          return 0;
      }

              };

return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
let sumEvenElement = 0;
let countEvenElement = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== undefined) {
  if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
  } }else{
      return 0;
  }
};
return (sumEvenElement / countEvenElement);
}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
let array = [];
let maxOfTheMax = [];
for(let i; i< arrOfArr.length; i++){
    array.push(arrOfArr[i]);
  maxOfTheMax.push(func(...maxWorkerResult));

};

const max = maxOfTheMax.reduce((a, b) => Math.max(a, b), -Infinity);
return (max);

}
