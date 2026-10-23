import {
  Bt as e,
  Lt as t,
  Mt as n,
  Vt as r,
  at as i,
  jt as a,
  lt as o,
  zt as s
} from "./DTpxYwnW.js";
import {
  t as c
} from "./DMvd0cI6.js";
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
    r(this, u), e(this, l, n(window.devicePixelRatio)), s(u, this, p).call(this)
  }
  get current() {
    return o(t(l, this)), window.devicePixelRatio
  }
});

function p() {
  let e = i(window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`), `change`, () => {
    a(t(l, this), window.devicePixelRatio), e(), s(u, this, p).call(this)
  })
}
export {
  d as n, f as t
};