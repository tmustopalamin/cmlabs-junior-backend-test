// //task 1 solution
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " FizzBuzz");
  } else if (i % 3 == 0) {
    console.log(i + " Fizz");
  } else if (i % 5 == 0) {
    console.log(i + " Buzz");
  } else {
    console.log(i + " ");
  }
}

//task 1 alternative solution 1
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " FizzBuzz");
    continue;
  }

  if (i % 3 == 0) {
    console.log(i + " Fizz");
    continue;
  }

  if (i % 5 == 0) {
    console.log(i + " Buzz");
    continue;
  }

  console.log(i + " ");
}
