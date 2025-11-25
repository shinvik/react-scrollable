export function createRange(start: number, end: number, step: number = 1) {
  const length = Math.floor((end - start) / step) + 1;
  return Array.from({ length }, (_, index) => start + index * step);
}

export const loadRange = (start: number, end: number, step: number = 1) => new Promise<number[]>((resolve) => {
  setTimeout(() => {
    resolve(createRange(start, end, step))
  }, 1000);
});