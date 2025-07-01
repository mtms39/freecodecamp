const count = 10;
const rows = [];
const character = "ô";
let inverted = true;

// TODO: change rowNumber to rowIndex and rowCount to rowQuantity
function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

/* upside down pyramid
 * i-- === i -= 1
 * for (let i = count; i > 0; i -= 1) {
  rows.push(padRow(i, count));
}*/

/*while (done !== count) {
  rows.push(padRow(done, count));
}*/

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
