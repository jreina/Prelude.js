export function pipe<T, U, V>(f: (x: T) => U, g: (x: U) => V) {
  return function(x: T): V {
    return g(f(x));
  };
}
