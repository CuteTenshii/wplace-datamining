import {
  C as p,
  E as t
} from "./C21-Odj5.js";
import {
  B as c
} from "./B2QOLSFY.js";

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