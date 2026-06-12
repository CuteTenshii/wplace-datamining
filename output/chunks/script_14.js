import {
  z as p,
  E as t
} from "./CV6xI6o5.js";
import {
  B as c
} from "./Cj3y7IFy.js";

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