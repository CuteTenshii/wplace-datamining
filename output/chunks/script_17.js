import {
  Ht as e,
  Kt as t,
  Vt as n,
  Wt as r
} from "./DXDHrD2o.js";
var i = new WeakMap,
  a = new WeakMap,
  o = class {
    constructor(n, o) {
      r(this, i, void 0), r(this, a, void 0), e(i, this, n), e(a, this, t(o))
    }
    get current() {
      return n(a, this).call(this), n(i, this).call(this)
    }
  };
export {
  o as t
};