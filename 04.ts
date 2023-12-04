export function partOne(input: string) {
  return input
    .trim()
    .split("\n")
    .map((row) => {
      const winning = row.split(" | ")[0].split(": ")[1].split(/\s+/);
      const your = row.split(" | ")[1].split(/\s+/);
      const yourWinners = your
        .filter((num) => winning.includes(num))
        .map(Number);
      return yourWinners;
    })
    .map((arr) => arr.length)
    .filter((val) => val !== 0)
    .map((val) => 2 ** (val - 1))
    .reduce((prev, curr) => prev + curr, 0);
}

export function partTwo(input: string) {
  const rows = input.trim().split("\n");
  const map = new Array(rows.length).fill(1);
  rows.forEach((row, index) => {
    const winning = row.split(" | ")[0].split(": ")[1].split(/\s+/);
    const your = row.split(" | ")[1].split(/\s+/);
    const winners = your.filter((num) => winning.includes(num)).length;
    for (let i = index + 1; i < index + 1 + winners; i++) {
      map[i] += map[index];
    }
    return winners;
  });
  return map.reduce((prev, curr) => prev + curr, 0);
}
