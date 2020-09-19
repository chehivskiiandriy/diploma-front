export const idX = x => x;

export const include = (set = [], item) => (
  set.includes(item) || (item == null) ? set : [...set, item]
);

export const pipe = (value, ...funcs) => funcs.reduce(
  (a, f) => f(a), value,
);
