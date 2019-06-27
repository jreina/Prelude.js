import { last } from './last';

/**
 * Scanl that has no starting value argument.
 */
export function scanl<T, U>(f: (memo: U, x: T) => U, seed: U, xs: Array<T>): Array<U> {
  if(f === undefined || f === null) throw new Error('Must supply a function');
  if(seed === undefined || f === null) throw new Error('Must supply a seed value');
  if(xs === undefined || f === null) throw new Error('Must supply an array to scan');
  if(xs.length === 0) return [];
  return xs.reduce(
    (memo, val) => memo.concat(f(last(memo), val)),
    [seed]
  );
}
