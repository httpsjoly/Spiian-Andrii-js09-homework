arrA = new Array(+prompt('Could you tell me about lenght of the Array?', 5));

arrB = [];

metka:
for(i = 0; i < arrA.length; i++) {
  arrA[i] = Math.floor(Math.random()*10);

  for(j = 2; j < arrA[i]; j++) {
    if(arrA[i] % j == 0) {
      continue metka;
    }
  }
  arrB[i] = arrA[i];
}
console.log(arrA);
arrB = arrB.filter(Boolean); 
console.log(arrB);


minVal = maxVal = arrB[0];

for(i = 0; i < arrB.length; i++) {
  if(arrB[i] < minVal) {
    minVal = arrB[i];
  }
  else if (arrB[i] > maxVal) {
    maxVal = arrB[i];
  }
}

console.log(`Min value is ${minVal}`);
console.log(`Max value is ${maxVal}`);