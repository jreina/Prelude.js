export function capture<T, U>(f: (memo: U, val: T) => U, arr: Array<U>) {
  return function(memo, val) {
      const result = f(memo, val);
      arr.push(result);
      return result;
  };
}