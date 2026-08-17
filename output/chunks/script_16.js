import {
  J as p,
  M as t
} from "./m4hpPlb8.js";
import {
  B as c
} from "./CLY1CtP7.js";

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