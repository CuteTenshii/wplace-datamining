import {
  I as p,
  L as t
} from "./CxLQz1V2.js";
import {
  B as c
} from "./D0tlb5oK.js";

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