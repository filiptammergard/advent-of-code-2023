export function partOne(input: string) {
  return input
    .trim()
    .split("\n")
    .map((row) => ({
      id: row.split(": ")[0].split(" ")[1],
      pairs: row
        .split(": ")[1]
        .split(/; |, /)
        .map((value) => ({
          color: value.split(" ")[1],
          amount: Number(value.split(" ")[0]),
        })),
    }))
    .filter((game) =>
      game.pairs.every(
        (pair) =>
          (pair.color === "red" && pair.amount <= 12) ||
          (pair.color === "green" && pair.amount <= 13) ||
          (pair.color === "blue" && pair.amount <= 14)
      )
    )
    .reduce((prev, curr) => prev + Number(curr.id), 0);
}

export function partTwo(input: string) {
  return input
    .trim()
    .split("\n")
    .map((row) => ({
      id: row.split(": ")[0].split(" ")[1],
      pairs: row
        .split(": ")[1]
        .split(/; |, /)
        .map((value) => ({
          color: value.split(" ")[1],
          amount: Number(value.split(" ")[0]),
        })),
    }))
    .map((games) =>
      games.pairs
        .reduce((prev: Array<{ color: string; amount: number }>, curr) => {
          const exists = prev.find((val) => val.color === curr.color);
          if (!exists) {
            return [...prev, curr];
          }
          if (exists.amount < curr.amount) {
            return [...prev.filter((val) => val.color !== curr.color), curr];
          }
          return prev;
        }, [])
        .map((val) => val.amount)
        .reduce((prev, curr) => prev * curr, 1)
    )
    .reduce((prev, curr) => prev + curr, 0);
}
