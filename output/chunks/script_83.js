import {
  D as e,
  Et as t,
  G as n,
  H as r,
  Jt as i,
  Nt as a,
  Y as o,
  Yt as s,
  Z as c,
  ct as l,
  nn as u,
  u as d,
  vt as f,
  wt as p
} from "./D6uuD926.js";
import "./B8UK1oE5.js";
import "./CTZDAN7C.js";
import {
  i as m,
  n as h,
  t as g
} from "./BL1ZSkR9.js";
var _ = c(`<div class="bg-primary shadow-primary/15 z-10 size-2.5 rounded-full shadow-[0_0_0_3px]"></div>`),
  v = c(`<div class="border-base-300 bg-base-100 z-10 size-2 rounded-full border-2"></div>`),
  y = c(`<div class="bg-base-300/50 mt-1 w-px flex-1"></div>`),
  b = c(`<div class="relative flex gap-3.5"><div class="flex shrink-0 flex-col items-center pt-2.25"><!> <!></div> <div class="min-w-0 flex-1 pb-9"><!></div></div>`),
  x = c(`<div class="flex flex-col"></div>`);

function S(c, S) {
  s(S, !1);
  let C = [...h].reverse().map(e => ({
    version: e.version,
    title: e.title,
    html: m(e.markdown)
  }));
  d();
  var w = x();
  r(w, 7, () => C, e => e.version, (r, i, s) => {
    var c = b(),
      d = p(c),
      m = p(d),
      h = e => {
        var t = _();
        o(e, t)
      },
      x = e => {
        var t = v();
        o(e, t)
      };
    n(m, e => {
      l(s) === 0 ? e(h) : e(x, -1)
    });
    var S = t(m, 2),
      w = e => {
        var t = y();
        o(e, t)
      };
    n(S, e => {
      l(s) < C.length - 1 && e(w)
    }), u(d);
    var T = t(d, 2),
      E = p(T);
    {
      let e = a(() => l(s) === 0);
      g(E, {
        get patchNote() {
          return l(i)
        },
        get latest() {
          return l(e)
        }
      })
    }
    u(T), u(c), f(() => e(c, `animation: patchSlideIn 0.3s ease-out ${l(s)*50}ms both`)), o(r, c)
  }), u(w), o(c, w), i()
}
export {
  S as t
};