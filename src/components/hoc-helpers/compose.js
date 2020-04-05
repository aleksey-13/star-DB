export const compose = (...funcs) => Wrapper => {
  return funcs.reduceRight((prev, f) => f(prev), Wrapper);
};
