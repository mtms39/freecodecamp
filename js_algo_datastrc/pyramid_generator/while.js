/* equality operator "==" if two variables are equal => "0" == 0 => true
 * strict equality operator "===" if two are equal and has the same type => "0" === 0 => false*/
let count = 8;
let continueLoop = true;
let done = 0;

console.log("done variable before while loop: " + done + "\n");

while (continueLoop) {
  done++;
  if (done === count) {
    continueLoop = false;
  }
}

console.log("done varaible after while loop: " + done + "\n");
