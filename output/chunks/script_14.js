import {
  I as p,
  L as t
} from "./DmPVOt2G.js";
import {
  B as c
} from "./BFKaR20o.js";

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