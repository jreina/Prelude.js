export function last<T>(xs: Array<T>): T{
  if(xs.length === 0) throw new Error('No items in array!');
  return xs[xs.length - 1];
}