function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];
   min = Math.min(...arr);
   max = Math.max(...arr);
   sum = arr.reduce((acc, item) => acc + item, 0);
   let avg = Number((sum / arr.length).toFixed(2));
   return { min: min, max: max, avg: avg };
 }

function summElementsWorker(...arr) {
  if(arr.length === 0) return 0;
  for (let i = 0; i < arr.length; i++) {
    return arr.reduce((acc, item) => acc + item, 0);
        }
    }

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) return 0;
  return Math.max(...arr) - Math.min(...arr);
  }

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
let sumOddElement = 0;
if(arr.length === 0) return 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
             }

return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
let sumEvenElement = 0;
let countEvenElement = 0;
if(arr.length === 0) return 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
  } 
};
return (sumEvenElement / countEvenElement);
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  if(arrOfArr.length === 0) return 0;
  for(let i = 0; i< arrOfArr.length; i++){
    const result = func(...arrOfArr[i]);
    if(result > maxWorkerResult) maxWorkerResult = result;
};
  return maxWorkerResult;
}




