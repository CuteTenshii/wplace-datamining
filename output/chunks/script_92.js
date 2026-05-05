import "./Bzak7iHL.js";
import "./DTeDASMt.js";
import {
  p as P,
  a as t,
  b as k,
  c as i,
  r as d,
  d as m,
  i as r,
  s as _,
  t as V,
  ad as q
} from "./wFsvFKKp.js";
import {
  i as h
} from "./BVciu6sd.js";
import {
  e as H
} from "./DSz1_7V5.js";
import {
  d as I
} from "./BGMKwhhq.js";
import {
  i as S
} from "./T5YzyBoQ.js";
import {
  p as $,
  V as j,
  P as A
} from "./HQHwHXsf.js";
var B = i('<div class="z-10 size-2.5 rounded-full bg-primary shadow-[0_0_0_3px] shadow-primary/15"></div>'),
  C = i('<div class="z-10 size-2 rounded-full border-2 border-base-300 bg-base-100"></div>'),
  D = i('<div class="mt-1 w-px flex-1 bg-base-300/50"></div>'),
  E = i('<div class="relative flex gap-3.5"><div class="flex shrink-0 flex-col items-center pt-2.25"><!> <!></div> <div class="min-w-0 flex-1 pb-9"><!></div></div>'),
  F = i('<div class="flex flex-col"></div>');

function T(b, u) {
  P(u, !1);
  const f = [...$].reverse().map(e => ({
    version: e.version,
    title: e.title,
    html: j(e.markdown)
  }));
  S();
  var l = F();
  H(l, 7, () => f, e => e.version, (e, x, o) => {
    var v = E(),
      p = m(v),
      c = m(p);
    {
      var g = a => {
          var s = B();
          t(a, s)
        },
        w = a => {
          var s = C();
          t(a, s)
        };
      h(c, a => {
        r(o) === 0 ? a(g) : a(w, !1)
      })
    }
    var N = _(c, 2);
    {
      var y = a => {
        var s = D();
        t(a, s)
      };
      h(N, a => {
        r(o) < f.length - 1 && a(y)
      })
    }
    d(p);
    var n = _(p, 2),
      z = m(n);
    {
      let a = q(() => r(o) === 0);
      A(z, {
        get patchNote() {
          return r(x)
        },
        get latest() {
          return r(a)
        }
      })
    }
    d(n), d(v), V(() => I(v, `animation: patchSlideIn 0.3s ease-out ${r(o)*50}ms both`)), t(e, v)
  }), d(l), t(b, l), k()
}
export {
  T as P
};