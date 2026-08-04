import "./Bzak7iHL.js";
import {
  p as y,
  w as S,
  f as A,
  a as o,
  b as I,
  d as w,
  r,
  t as n,
  i as s,
  s as k,
  c as u,
  u as m,
  k as B
} from "./DUZ_qUVk.js";
import {
  i as C
} from "./BLc2SwOK.js";
import {
  h as f
} from "./Dk_Sh0M8.js";
import {
  a as g,
  s as L,
  b as Z
} from "./M4i-R8Gk.js";
import {
  p as j,
  r as z
} from "./DXFW01RN.js";
import {
  a as E
} from "./fozwPYzb.js";
import {
  m as M
} from "./Dcjf6cED.js";
var O = u('<div><img alt="" class="size-full object-cover" style="image-rendering: pixelated" draggable="false"/></div>'),
  Q = u('<div aria-hidden="true"><div class="absolute -top-1/2 -right-4 aspect-square h-[200%] rotate-12 opacity-25 select-none"></div> <div class="absolute -bottom-1/3 left-6 aspect-square h-[110%] -rotate-6 opacity-15 select-none"></div></div>'),
  D = u("<div></div>");

function W(v, e) {
  y(e, !0);
  let c = j(e, "variant", 3, "picture");
  const l = m(() => e.seed && e.seed.length > 0 ? e.seed : `alliance-${e.allianceId}`),
    d = m(() => M(s(l), 95, 45)),
    h = m(() => E(e.allianceId));
  var _ = S(),
    p = A(_);
  {
    var q = t => {
        var a = O(),
          i = w(a);
        r(a), n(() => {
          g(a, 1, `overflow-hidden bg-white ${e.class??""??""}`), L(i, "src", e.imageSrc)
        }), o(t, a)
      },
      T = t => {
        var a = Q(),
          i = w(a);
        f(i, () => s(d), !0), r(i);
        var b = k(i, 2);
        f(b, () => s(d), !0), r(b), r(a), n(() => g(a, 1, `relative overflow-hidden ${s(h)??""} ${e.class??""??""}`)), o(t, a)
      },
      x = t => {
        var a = D();
        f(a, () => s(d), !0), r(a), n(() => g(a, 1, `overflow-hidden ${s(h)??""} ${e.class??""??""}`)), o(t, a)
      };
    C(p, t => {
      e.imageSrc ? t(q) : c() === "banner" ? t(T, 1) : t(x, -1)
    })
  }
  o(v, _), I()
}
var F = new Set(["$$slots", "$$events", "$$legacy"]),
  G = B('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function X(v, e) {
  let c = z(e, F);
  var l = G();
  Z(l, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...c
  })), o(v, l)
}
export {
  W as A, X as L
};