import {
  E as p,
  F as t
} from "./BC180BoF.js";
import {
  B as c
} from "./D3P5suXH.js";

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