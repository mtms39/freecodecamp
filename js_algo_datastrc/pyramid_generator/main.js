//for ("iterator"; "condition"; "iteration") {}

/*for (const value of iterable) {

}
*/
// functions should not return a hard-coded value, i.e., strings that only exists inside the function

const count = 8;
const rows = [];
const character = "#";

function padRow(rowNumber, rowCount) {
  // Picking row by rowNumber
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

let continueLoop = false;
let done = 0;

while (continueLoop) {
  done++;
  rows.push(padRow(done, count));
  if (done === count) {
    continueLoop = false;
  }
}

let result = "";

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
	rows.push(padRow(i, count));
}*/
// false, 0, "", null, undefined, and NaN are all falsy values for JavaScript
// console.log(rows); => the array doesn't looks good as bricks

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
