import {
  Bt as e,
  Lt as t,
  Mt as n,
  Vt as r,
  jt as i,
  ot as a,
  ut as o,
  zt as s
} from "./D2z8HFb7.js";
import {
  t as c
} from "./BrtrtlEe.js";
var l, u;
new c(() => window.scrollX, e => a(window, `scroll`, e)), new c(() => window.scrollY, e => a(window, `scroll`, e)), new c(() => window.innerWidth, e => a(window, `resize`, e)), new c(() => window.innerHeight, e => a(window, `resize`, e)), new c(() => window.outerWidth, e => a(window, `resize`, e)), new c(() => window.outerHeight, e => a(window, `resize`, e)), new c(() => window.screenLeft, e => {
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
  let t = a(window, `online`, e),
    n = a(window, `offline`, e);
  return () => {
    t(), n()
  }
});
var d = new(l = new WeakMap, u = new WeakSet, class {
  constructor() {
    r(this, u), e(this, l, n(window.devicePixelRatio)), s(u, this, f).call(this)
  }
  get current() {
    return o(t(l, this)), window.devicePixelRatio
  }
});

function f() {
  let e = a(window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`), `change`, () => {
    i(t(l, this), window.devicePixelRatio), e(), s(u, this, f).call(this)
  })
}
export {
  d as t
};