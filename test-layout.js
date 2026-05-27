const logos = Array.from({length: 78}, (_, i) => i + 1);

function buildLayout(MAX_ROWS) {
  let idx = 0;
  const cols = MAX_ROWS * 2;
  const grid = Array.from({ length: MAX_ROWS }, () => Array(cols).fill("."));

  for (let row = 0; row < MAX_ROWS; row++) {
    const amount = row + 1;
    for (let col = 0; col < amount && idx < logos.length; col++) {
      grid[row][col] = "X";
      idx++;
    }
    for (let col = cols - amount; col < cols && idx < logos.length; col++) {
      grid[row][col] = "X";
      idx++;
    }
  }

  for (let row = MAX_ROWS - 1; row >= 0 && idx < logos.length; row--) {
    for (let col = 0; col < cols && idx < logos.length; col++) {
      if (grid[row][col] === ".") {
        grid[row][col] = "O";
        idx++;
      }
    }
  }
  return grid;
}

console.log("MAX_ROWS = 10:");
console.log(buildLayout(10).map(row => row.join("")).join("\n"));

console.log("\nMAX_ROWS = 5:");
console.log(buildLayout(5).map(row => row.join("")).join("\n"));

console.log("\nMAX_ROWS = 6:");
console.log(buildLayout(6).map(row => row.join("")).join("\n"));
