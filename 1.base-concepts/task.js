"use strict";

function solveEquation(a, b, c) {
	let arr = [];
  let d = Math.pow(b, 2) - (4*a*c);
  if(d < 0){
    arr = [];
  }else if(d === 0){
    arr[0] = (-b)/(2*a);
    ;
  }else if(d>0){
   arr[0] = (-b + Math.sqrt(d))/(2*a);
    arr[1] = (-b - Math.sqrt(d))/(2*a);
    
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyRate = percent / 100;
	let loanBody = amount - contribution;
	let fraction = monthlyRate * (1 / 12);
	let monthlyPayment = loanBody * (fraction + (fraction / (Math.pow((1 + fraction), countMonths) - 1)));
	let totalAmount = Number((monthlyPayment * countMonths).toFixed(2));
	return totalAmount;
}