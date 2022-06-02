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

// task 1 alternative solution 2
function fizzBuzz(start, end) {
  if (start <= end) {
    if (start % 3 == 0 && start % 5 == 0) {
      console.log(start + " FizzBuzz");
      start++;
      fizzBuzz(start, end);
    } else if (start % 3 == 0) {
      console.log(start + " Fizz");
      start++;
      fizzBuzz(start, end);
    } else if (start % 5 == 0) {
      console.log(start + " Buzz");
      start++;
      fizzBuzz(start, end);
    } else {
      console.log(start + " ");
      start++;
      fizzBuzz(start, end);
    }
  }
}
fizzBuzz(100, 200);

// using class
class FizzBuzz {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  fizzBuzz = () => {
    if (this.start <= this.end) {
      if (this.start % 3 == 0 && this.start % 5 == 0) {
        console.log(this.start + " FizzBuzz");
        this.start++;
        this.fizzBuzz(this.start, this.end);
      } else if (this.start % 3 == 0) {
        console.log(this.start + " Fizz");
        this.start++;
        this.fizzBuzz(this.start, this.end);
      } else if (this.start % 5 == 0) {
        console.log(this.start + " Buzz");
        this.start++;
        this.fizzBuzz(this.start, this.end);
      } else {
        console.log(this.start + " ");
        this.start++;
        this.fizzBuzz(this.start, this.end);
      }
    }
  };
}
const fb = new FizzBuzz(1, 100);
fb.fizzBuzz();
