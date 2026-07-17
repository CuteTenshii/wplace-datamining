import {
  I as p,
  L as t
} from "./BKnGt6Ki.js";
import {
  B as c
} from "./CwB9anUf.js";

function f(r, s, ...a) {
  var e = new c(r);
  p(() => {
    const n = s() ?? null;
    e.ensure(n, n && (o => n(o, ...a)))
  }, t)
}
export {
  f as s
};