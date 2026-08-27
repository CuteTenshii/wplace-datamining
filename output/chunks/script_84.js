import "./Bzak7iHL.js";
import {
  p as y,
  l as S,
  f as A,
  a as l,
  b as I,
  d as w,
  r,
  t as m,
  i,
  s as B,
  c as h,
  u as f,
  w as C
} from "./D5GL_E7i.js";
import {
  i as L
} from "./unjGrhDm.js";
import {
  h as g
} from "./B4t60IST.js";
import {
  a as u,
  s as Z,
  e as j
} from "./Ce1mtF2R.js";
import {
  p as k,
  r as z
} from "./LT-XNHCk.js";
import {
  a as E
} from "./V2xpa7IR.js";
import {
  m as M
} from "./DVUNSmMz.js";
var O = h('<div><img alt="" class="size-full object-cover" style="image-rendering: pixelated" draggable="false"/></div>'),
  Q = h('<div aria-hidden="true"><div class="absolute -top-1/2 -right-4 aspect-square h-[200%] rotate-12 opacity-25 select-none"></div> <div class="absolute -bottom-1/3 left-6 aspect-square h-[110%] -rotate-6 opacity-15 select-none"></div></div>'),
  D = h("<div></div>");

function W(n, e) {
  y(e, !0);
  let o = k(e, "variant", 3, "picture");
  const v = f(() => e.seed && e.seed.length > 0 ? e.seed : `alliance-${e.allianceId}`),
    d = f(() => M(i(v), 95, 45)),
    _ = f(() => E(e.allianceId));
  var b = S(),
    p = A(b);
  {
    var q = t => {
        var a = O();
        let s;
        var c = w(a);
        r(a), m(() => {
          s = u(a, 1, `overflow-hidden ${e.class??""??""}`, null, s, {
            "bg-white": o() === "banner"
          }), Z(c, "src", e.imageSrc)
        }), l(t, a)
      },
      T = t => {
        var a = Q(),
          s = w(a);
        g(s, () => i(d), !0), r(s);
        var c = B(s, 2);
        g(c, () => i(d), !0), r(c), r(a), m(() => u(a, 1, `relative overflow-hidden ${i(_)??""} ${e.class??""??""}`)), l(t, a)
      },
      x = t => {
        var a = D();
        g(a, () => i(d), !0), r(a), m(() => u(a, 1, `overflow-hidden ${i(_)??""} ${e.class??""??""}`)), l(t, a)
      };
    L(p, t => {
      e.imageSrc ? t(q) : o() === "banner" ? t(T, 1) : t(x, -1)
    })
  }
  l(n, b), I()
}
var F = new Set(["$$slots", "$$events", "$$legacy"]),
  G = C('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function X(n, e) {
  let o = z(e, F);
  var v = G();
  j(v, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...o
  })), l(n, v)
}
export {
  W as A, X as L
};