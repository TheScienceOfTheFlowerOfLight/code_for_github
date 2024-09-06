let arr = [1,2,3];
arr.push(4);
arr = [...arr,5,6,7,8];
sum_arr = arr.reduce((total,currentValue)=> total + currentValue,0);