import {
  C as p,
  E as t
} from "./B66BVdRM.js";
import {
  B as c
} from "./BMlge2Gf.js";

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