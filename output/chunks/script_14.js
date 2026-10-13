import {
  At as e,
  Bt as t,
  It as n,
  Rt as r,
  at as i,
  jt as a,
  lt as o,
  zt as s
} from "./R3px7NU1.js";
import {
  t as c
} from "./CUtBdivQ.js";
var l, u;
new c(() => window.scrollX, e => i(window, `scroll`, e)), new c(() => window.scrollY, e => i(window, `scroll`, e));
var d = new c(() => window.innerWidth, e => i(window, `resize`, e));
new c(() => window.innerHeight, e => i(window, `resize`, e)), new c(() => window.outerWidth, e => i(window, `resize`, e)), new c(() => window.outerHeight, e => i(window, `resize`, e)), new c(() => window.screenLeft, e => {
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
  let t = i(window, `online`, e),
    n = i(window, `offline`, e);
  return () => {
    t(), n()
  }
});
var f = new(l = new WeakMap, u = new WeakSet, class {
  constructor() {
    t(this, u), s(this, l, a(window.devicePixelRatio)), r(u, this, p).call(this)
  }
  get current() {
    return o(n(l, this)), window.devicePixelRatio
  }
});

function p() {
  let t = i(window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`), `change`, () => {
    e(n(l, this), window.devicePixelRatio), t(), r(u, this, p).call(this)
  })
}
export {
  d as n, f as t
};