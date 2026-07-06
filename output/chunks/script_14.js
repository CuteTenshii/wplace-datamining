import {
  K as p,
  N as t
} from "./Dkgr_Dbt.js";
import {
  B as c
} from "./6BB2hkhT.js";

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