import {
  B as e,
  Et as t,
  G as n,
  Jt as r,
  O as i,
  Tt as a,
  X as o,
  Y as s,
  Yt as c,
  Z as l,
  a as u,
  ct as d,
  jt as f,
  kt as p,
  nn as m,
  nt as h,
  q as g,
  tt as _,
  vt as v,
  wt as y
} from "./D6uuD926.js";
import "./B8UK1oE5.js";
import {
  t as b
} from "./ciZYZuIg.js";
import {
  t as x
} from "./BkkeS61c.js";
var S = l(`<h3 class="text-xl font-bold"> </h3>`),
  C = l(`<p class="text-base-content/80 mt-1 text-sm whitespace-pre-line"> </p>`),
  w = l(`<span class="loading loading-spinner center-absolute absolute"></span>`),
  T = l(`<div><p class="text-lg"> </p> <!> <!> <div class="mt-6 flex justify-end gap-3 pb-2"><form method="dialog"><button class="btn btn-ghost hover:bg-base-content/10"> </button></form> <button> <!></button></div></div>`);

function E(l, _) {
  c(_, !0);
  let E = u(_, `open`, 15),
    D = u(_, `type`, 3, `confirmation`),
    O = u(_, `buttonText`, 19, () => b.confirm()),
    k = f(!1);
  x(l, {
    dialogClass: `!bg-black/80`,
    modalBoxClass: `max-w-md max-sm:!w-11/12 max-sm:!h-auto max-sm:!max-w-md max-sm:!max-h-[85vh] max-sm:!rounded-xl`,
    hasCloseButton: !1,
    isDynamicHeight: !0,
    get open() {
      return E()
    },
    set open(e) {
      E(e)
    },
    header: e => {
      var t = S(),
        n = y(t, !0);
      m(t), v(() => g(n, _.title)), s(e, t)
    },
    children: (r, c) => {
      var l = T(),
        u = y(l),
        f = y(u, !0);
      m(u);
      var x = t(u, 2),
        S = e => {
          var t = C(),
            n = y(t, !0);
          m(t), v(() => g(n, _.subDescription)), s(e, t)
        };
      n(x, e => {
        _.subDescription && e(S)
      });
      var A = t(x, 2),
        j = t => {
          var n = o(),
            r = a(n);
          e(r, () => _.children), s(t, n)
        };
      n(A, e => {
        _.children && e(j)
      });
      var M = t(A, 2),
        N = y(M),
        P = y(N),
        F = y(P, !0);
      m(P), m(N);
      var I = t(N, 2);
      let L;
      var R = y(I),
        z = t(R),
        B = e => {
          var t = w();
          s(e, t)
        };
      n(z, e => {
        d(k) && e(B)
      }), m(I), m(M), m(l), v(e => {
        g(f, _.description), g(F, e), L = i(I, 1, `btn min-w-32 px-6`, null, L, {
          "btn-error": D() === `warning`,
          "btn-primary": D() === `confirmation`
        }), I.disabled = d(k), g(R, `${O()??``} `)
      }, [() => b.cancel()]), h(`click`, I, async () => {
        try {
          p(k, !0), E(await _.onConfirm())
        } finally {
          p(k, !1)
        }
      }), s(r, l)
    },
    $$slots: {
      header: !0,
      default: !0
    }
  }), r()
}
_([`click`]);
export {
  E as t
};