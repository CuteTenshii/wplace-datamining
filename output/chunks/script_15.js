import {
  z as p,
  E as t
} from "./Dbe4PVAU.js";
import {
  B as c
} from "./D4oMlC_L.js";

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