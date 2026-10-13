import {
  It as e,
  Lt as t,
  Vt as n,
  zt as r
} from "./R3px7NU1.js";
var i = new WeakMap,
  a = new WeakMap,
  o = class {
    constructor(e, o) {
      r(this, i, void 0), r(this, a, void 0), t(i, this, e), t(a, this, n(o))
    }
    get current() {
      return e(a, this).call(this), e(i, this).call(this)
    }
  };
export {
  o as t
};