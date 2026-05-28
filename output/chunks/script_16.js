import {
  w as p,
  E as t
} from "./5zj5-rPA.js";
import {
  B as c
} from "./B1t6g3m9.js";

function E(r, s, ...a) {
  var e = new c(r);
  p(() => {
    const n = s() ?? null;
    e.ensure(n, n && (o => n(o, ...a)))
  }, t)
}
export {
  E as s
};