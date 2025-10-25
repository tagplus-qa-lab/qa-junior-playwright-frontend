export function getRandomIndexes(total: number, amount: number): number[] {
  const indexes = Array.from({ length: total }, (_, i) => i);
  const randomIndexes: number[] = [];

  while (randomIndexes.length < amount && indexes.length > 0) {
    const random = Math.floor(Math.random() * indexes.length);
    randomIndexes.push(indexes[random]);
    indexes.splice(random, 1);
  }

  return randomIndexes;
}
