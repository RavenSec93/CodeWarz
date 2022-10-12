// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

function fizzbuzz(n)
{
  let arrt = []
  for (let i = 0; i < n.length; ++i) {
    if (n[i]%3 == 0) {
      arrt.push("Fizz")
    } else if (n[i]%5 == 0) {
      arrt.push("Buzz")
    } else if (n[i]%3 == 0 && n[i]%5 == 0) {
      arrt.push("FizzBuzz")
    } else {
      arrt.push(n[i])
    }
}
return arrt
}
