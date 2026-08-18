import "./Bzak7iHL.js";
import {
  p as y,
  w as S,
  f as A,
  a as l,
  b as I,
  d as w,
  r,
  t as m,
  i,
  s as k,
  c as h,
  u as f,
  k as B
} from "./m4hpPlb8.js";
import {
  i as C
} from "./DqioGq2r.js";
import {
  h as g
} from "./BWhLXPku.js";
import {
  a as u,
  s as L,
  b as Z
} from "./BbR4hYuM.js";
import {
  p as j,
  r as z
} from "./RFHi9kKd.js";
import {
  a as E
} from "./DqWfG9eW.js";
import {
  m as M
} from "./D58CECtz.js";
var O = h('<div><img alt="" class="size-full object-cover" style="image-rendering: pixelated" draggable="false"/></div>'),
  Q = h('<div aria-hidden="true"><div class="absolute -top-1/2 -right-4 aspect-square h-[200%] rotate-12 opacity-25 select-none"></div> <div class="absolute -bottom-1/3 left-6 aspect-square h-[110%] -rotate-6 opacity-15 select-none"></div></div>'),
  D = h("<div></div>");

function W(n, e) {
  y(e, !0);
  let o = j(e, "variant", 3, "picture");
  const v = f(() => e.seed && e.seed.length > 0 ? e.seed : `alliance-${e.allianceId}`),
    d = f(() => M(i(v), 95, 45)),
    b = f(() => E(e.allianceId));
  var _ = S(),
    p = A(_);
  {
    var q = t => {
        var a = O();
        let s;
        var c = w(a);
        r(a), m(() => {
          s = u(a, 1, `overflow-hidden ${e.class??""??""}`, null, s, {
            "bg-white": o() === "banner"
          }), L(c, "src", e.imageSrc)
        }), l(t, a)
      },
      T = t => {
        var a = Q(),
          s = w(a);
        g(s, () => i(d), !0), r(s);
        var c = k(s, 2);
        g(c, () => i(d), !0), r(c), r(a), m(() => u(a, 1, `relative overflow-hidden ${i(b)??""} ${e.class??""??""}`)), l(t, a)
      },
      x = t => {
        var a = D();
        g(a, () => i(d), !0), r(a), m(() => u(a, 1, `overflow-hidden ${i(b)??""} ${e.class??""??""}`)), l(t, a)
      };
    C(p, t => {
      e.imageSrc ? t(q) : o() === "banner" ? t(T, 1) : t(x, -1)
    })
  }
  l(n, _), I()
}
var F = new Set(["$$slots", "$$events", "$$legacy"]),
  G = B('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function X(n, e) {
  let o = z(e, F);
  var v = G();
  Z(v, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...o
  })), l(n, v)
}
export {
  W as A, X as L
};