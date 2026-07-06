import "./Bzak7iHL.js";
import {
  o as U
} from "./Kz-50a97.js";
import {
  p as V,
  h as W,
  q as X,
  f as Y,
  i as Z,
  a as c,
  b as p,
  e as $,
  t as x,
  r as ee,
  c as C
} from "./Dkgr_Dbt.js";
import {
  i as te
} from "./rBVNqKOk.js";
import {
  e as ae,
  i as ne
} from "./C5VgB5sf.js";
import {
  b as _,
  a as oe
} from "./CfjQLVhL.js";
import {
  p as t
} from "./DOQuOeXT.js";
var ie = C('<div class="confetti svelte-9l4h7e"></div>'),
  re = C("<div></div>");

function he(M, e) {
  V(e, !0);
  const b = t(e, "size", 3, 10),
    f = t(e, "x", 19, () => [-.5, .5]),
    m = t(e, "y", 19, () => [.25, 1]),
    i = t(e, "duration", 3, 2e3),
    r = t(e, "infinite", 3, !1),
    l = t(e, "delay", 19, () => [0, 50]),
    u = t(e, "colorRange", 19, () => [0, 360]),
    s = t(e, "colorArray", 19, () => []),
    z = t(e, "amount", 3, 50),
    d = t(e, "iterationCount", 3, 1),
    R = t(e, "fallDistance", 3, "100px"),
    k = t(e, "rounded", 3, !1),
    w = t(e, "cone", 3, !1),
    A = t(e, "noGravity", 3, !1),
    D = t(e, "xSpread", 3, .15),
    F = t(e, "destroyOnComplete", 3, !0),
    G = t(e, "disableForReducedMotion", 3, !1);
  let v = $(!1);
  U(() => {
    !F() || r() || typeof d() == "string" || setTimeout(() => W(v, !0), (i() + l()[1]) * d())
  });

  function a(o, n) {
    return Math.random() * (n - o) + o
  }

  function O() {
    return s().length ? s()[Math.round(Math.random() * (s().length - 1))] : `hsl(${Math.round(a(u()[0],u()[1]))}, 75%, 50%)`
  }
  var h = X(),
    S = Y(h);
  {
    var q = o => {
      var n = re();
      let y;
      ae(n, 21, () => ({
        length: z()
      }), ne, (B, le) => {
        var g = ie();
        x((T, j, E, H, I, J, K, L, N, P, Q) => _(g, `
        --color: ${T??""};
        --skew: ${j??""}deg,${E??""}deg;
        --rotation-xyz: ${H??""}, ${I??""}, ${J??""};
        --rotation-deg: ${K??""}deg;
        --translate-y-multiplier: ${L??""};
        --translate-x-multiplier: ${N??""};
        --scale: ${P??""};
        --transition-delay: ${Q??""}ms;
        --transition-duration: ${r()?`calc(${i()}ms * var(--scale))`:`${i()}ms`};`), [() => O(), () => a(-45, 45), () => a(-45, 45), () => a(-10, 10), () => a(-10, 10), () => a(-10, 10), () => a(0, 360), () => a(m()[0], m()[1]), () => a(f()[0], f()[1]), () => .1 * a(2, 10), () => a(l()[0], l()[1])]), c(B, g)
      }), ee(n), x(() => {
        y = oe(n, 1, "confetti-holder svelte-9l4h7e", null, y, {
          rounded: k(),
          cone: w(),
          "no-gravity": A(),
          "reduced-motion": G()
        }), _(n, `
    --fall-distance: ${R()??""};
    --size: ${b()??""}px;
    --x-spread: ${1-D()};
    --transition-iteration-count: ${(r()?"infinite":d())??""};`)
      }), c(o, n)
    };
    te(S, o => {
      Z(v) || o(q)
    })
  }
  c(M, h), p()
}
export {
  he as C
};