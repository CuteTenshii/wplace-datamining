import "./Bzak7iHL.js";
import {
  o as U
} from "./CqGGwggA.js";
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
} from "./CV6xI6o5.js";
import {
  i as te
} from "./iywslKou.js";
import {
  e as ae,
  i as ne
} from "./C7N0act3.js";
import {
  b as _,
  a as oe
} from "./rONmwD0j.js";
import {
  p as t
} from "./BQ880tYw.js";
var ie = C('<div class="confetti svelte-1jr4tp1"></div>'),
  re = C("<div></div>");

function ye(M, e) {
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
    j = t(e, "rounded", 3, !1),
    k = t(e, "cone", 3, !1),
    w = t(e, "noGravity", 3, !1),
    A = t(e, "xSpread", 3, .15),
    D = t(e, "destroyOnComplete", 3, !0),
    F = t(e, "disableForReducedMotion", 3, !1);
  let v = $(!1);
  U(() => {
    !D() || r() || typeof d() == "string" || setTimeout(() => W(v, !0), (i() + l()[1]) * d())
  });

  function a(o, n) {
    return Math.random() * (n - o) + o
  }

  function G() {
    return s().length ? s()[Math.round(Math.random() * (s().length - 1))] : `hsl(${Math.round(a(u()[0],u()[1]))}, 75%, 50%)`
  }
  var y = X(),
    O = Y(y);
  {
    var S = o => {
      var n = re();
      let g;
      ae(n, 21, () => ({
        length: z()
      }), ne, (q, le) => {
        var h = ie();
        x((B, T, E, H, I, J, K, L, N, P, Q) => _(h, `
        --color: ${B??""};
        --skew: ${T??""}deg,${E??""}deg;
        --rotation-xyz: ${H??""}, ${I??""}, ${J??""};
        --rotation-deg: ${K??""}deg;
        --translate-y-multiplier: ${L??""};
        --translate-x-multiplier: ${N??""};
        --scale: ${P??""};
        --transition-delay: ${Q??""}ms;
        --transition-duration: ${r()?`calc(${i()}ms * var(--scale))`:`${i()}ms`};`), [() => G(), () => a(-45, 45), () => a(-45, 45), () => a(-10, 10), () => a(-10, 10), () => a(-10, 10), () => a(0, 360), () => a(m()[0], m()[1]), () => a(f()[0], f()[1]), () => .1 * a(2, 10), () => a(l()[0], l()[1])]), c(q, h)
      }), ee(n), x(() => {
        g = oe(n, 1, "confetti-holder svelte-1jr4tp1", null, g, {
          rounded: j(),
          cone: k(),
          "no-gravity": w(),
          "reduced-motion": F()
        }), _(n, `
    --fall-distance: ${R()??""};
    --size: ${b()??""}px;
    --x-spread: ${1-A()};
    --transition-iteration-count: ${(r()?"infinite":d())??""};`)
      }), c(o, n)
    };
    te(O, o => {
      Z(v) || o(S)
    })
  }
  c(M, y), p()
}
export {
  ye as C
};