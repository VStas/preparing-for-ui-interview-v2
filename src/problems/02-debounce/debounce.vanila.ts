// bun test src/problems/02-debounce/test/debounce.test.ts

export function debounce<R, T extends (...args: any[]) => R>(fn: T, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null
  return function (this: any, ...args: Parameters<T>[]) {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

// --- Examples ---
// Uncomment to test your implementation:

// const log = debounce((msg: string) => console.log(msg), 300)
// log('a')  // cancelled by next call
// log('b')  // cancelled by next call
// log('c')  // only this one fires after 300ms → "c"
