// Your task is to make a function that can take any non-negative integer as 
// an argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
    //...
  let output = [],
      sNumber = n.toString();
  
  for (var i = 0, len = sNumber.length; i < len; i += 1) {
      output.push(+sNumber.charAt(i));
  }
    
    output.sort().reverse();
    
    let num = +output.join("")
  
  return num;
  }