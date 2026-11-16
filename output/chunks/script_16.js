import {
  Ft as e,
  Gt as t,
  It as n,
  Ut as r,
  Vt as i,
  Wt as a,
  lt as o,
  pt as s
} from "./DXDHrD2o.js";
import {
  t as c
} from "./BrohplP5.js";
var l, u;
new c(() => window.scrollX, e => o(window, `scroll`, e)), new c(() => window.scrollY, e => o(window, `scroll`, e));
var d = new c(() => window.innerWidth, e => o(window, `resize`, e));
new c(() => window.innerHeight, e => o(window, `resize`, e)), new c(() => window.outerWidth, e => o(window, `resize`, e)), new c(() => window.outerHeight, e => o(window, `resize`, e)), new c(() => window.screenLeft, e => {
  let t = window.screenLeft,
    n = requestAnimationFrame(function r() {
      n = requestAnimationFrame(r), t !== (t = window.screenLeft) && e()
    });
  return () => {
    cancelAnimationFrame(n)
  }
}), new c(() => window.screenTop, e => {
  let t = window.screenTop,
    n = requestAnimationFrame(function r() {
      n = requestAnimationFrame(r), t !== (t = window.screenTop) && e()
    });
  return () => {
    cancelAnimationFrame(n)
  }
}), new c(() => navigator.onLine, e => {
  let t = o(window, `online`, e),
    n = o(window, `offline`, e);
  return () => {
    t(), n()
  }
});
var f = new(l = new WeakMap, u = new WeakSet, class {
  constructor() {
    t(this, u), a(this, l, n(window.devicePixelRatio)), r(u, this, p).call(this)
  }
  get current() {
    return s(i(l, this)), window.devicePixelRatio
  }
});

function p() {
  let t = o(window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`), `change`, () => {
    e(i(l, this), window.devicePixelRatio), t(), r(u, this, p).call(this)
  })
}
export {
  d as n, f as t
};