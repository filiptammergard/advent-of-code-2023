export function partOne(input: string) {
  return input
    .trim()
    .split("\n")
    .map((row) => row.split("").filter(Number))
    .reduce((prev, curr) => [...prev, curr[0] + curr.at(-1)], [])
    .reduce((prev, curr) => prev + Number(curr), 0);
}

export function partTwo(input: string) {
  return input
    .trim()
    .split("\n")
    .map((row) =>
      [
        ...row.matchAll(
          /\d|on(?=e)|tw(?=o)|thre(?=e)|four|fiv(?=e)|six|seve(?=n)|eigh(?=t)|nin(?=e)/g
        ),
      ].map((row) => row[0])
    )
    .reduce((prev, curr) => [...prev, curr[0] + curr.at(-1)], [])
    .map((row) =>
      row
        .replaceAll("on", "1")
        .replaceAll("tw", "2")
        .replaceAll("thre", "3")
        .replaceAll("four", "4")
        .replaceAll("fiv", "5")
        .replaceAll("six", "6")
        .replaceAll("seve", "7")
        .replaceAll("eigh", "8")
        .replaceAll("nin", "9")
    )
    .reduce((prev, curr) => prev + Number(curr), 0);
}
