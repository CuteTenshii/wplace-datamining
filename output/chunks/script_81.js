import {
  D as e,
  G as t,
  H as n,
  Jt as r,
  O as i,
  Tt as a,
  U as o,
  X as s,
  Y as c,
  Yt as l,
  Z as u,
  a as d,
  ct as f,
  jt as p,
  kt as m,
  nn as h,
  r as g,
  vt as _
} from "./D6uuD926.js";
import "./B8UK1oE5.js";
var v = u(`<div class="confetti svelte-9l4h7e"></div>`),
  y = u(`<div></div>`);

function b(u, b) {
  l(b, !0);
  let x = d(b, `size`, 3, 10),
    S = d(b, `x`, 19, () => [-.5, .5]),
    C = d(b, `y`, 19, () => [.25, 1]),
    w = d(b, `duration`, 3, 2e3),
    T = d(b, `infinite`, 3, !1),
    E = d(b, `delay`, 19, () => [0, 50]),
    D = d(b, `colorRange`, 19, () => [0, 360]),
    O = d(b, `colorArray`, 19, () => []),
    k = d(b, `amount`, 3, 50),
    A = d(b, `iterationCount`, 3, 1),
    j = d(b, `fallDistance`, 3, `100px`),
    M = d(b, `rounded`, 3, !1),
    N = d(b, `cone`, 3, !1),
    P = d(b, `noGravity`, 3, !1),
    F = d(b, `xSpread`, 3, .15),
    I = d(b, `destroyOnComplete`, 3, !0),
    L = d(b, `disableForReducedMotion`, 3, !1),
    R = p(!1);
  g(() => {
    !I() || T() || typeof A() == `string` || setTimeout(() => m(R, !0), (w() + E()[1]) * A())
  });

  function z(e, t) {
    return Math.random() * (t - e) + e
  }

  function B() {
    return O().length ? O()[Math.round(Math.random() * (O().length - 1))] : `hsl(${Math.round(z(D()[0],D()[1]))}, 75%, 50%)`
  }
  var V = s(),
    H = a(V),
    U = t => {
      var r = y();
      let a;
      n(r, 21, () => ({
        length: k()
      }), o, (t, n) => {
        var r = v();
        _((t, n, i, a, o, s, c, l, u, d, f) => e(r, `
        --color: ${t??``};
        --skew: ${n??``}deg,${i??``}deg;
        --rotation-xyz: ${a??``}, ${o??``}, ${s??``};
        --rotation-deg: ${c??``}deg;
        --translate-y-multiplier: ${l??``};
        --translate-x-multiplier: ${u??``};
        --scale: ${d??``};
        --transition-delay: ${f??``}ms;
        --transition-duration: ${T()?`calc(${w()}ms * var(--scale))`:`${w()}ms`};`), [() => B(), () => z(-45, 45), () => z(-45, 45), () => z(-10, 10), () => z(-10, 10), () => z(-10, 10), () => z(0, 360), () => z(C()[0], C()[1]), () => z(S()[0], S()[1]), () => .1 * z(2, 10), () => z(E()[0], E()[1])]), c(t, r)
      }), h(r), _(() => {
        a = i(r, 1, `confetti-holder svelte-9l4h7e`, null, a, {
          rounded: M(),
          cone: N(),
          "no-gravity": P(),
          "reduced-motion": L()
        }), e(r, `
    --fall-distance: ${j()??``};
    --size: ${x()??``}px;
    --x-spread: ${1-F()};
    --transition-iteration-count: ${(T()?`infinite`:A())??``};`)
      }), c(t, r)
    };
  t(H, e => {
    f(R) || e(U)
  }), c(u, V), r()
}
var x = b;
export {
  b as n, x as t
};