import "./Bzak7iHL.js";
import {
  k as K,
  p as L,
  b as M,
  t as h,
  i as j,
  m as N,
  h as H,
  a as l,
  d as r,
  s as m,
  c as v,
  e as O,
  r as s,
  l as Q,
  f as R
} from "./D5GL_E7i.js";
import {
  s as d
} from "./BATewRf7.js";
import {
  s as S
} from "./BMTVjKyu.js";
import {
  i as g
} from "./unjGrhDm.js";
import {
  a as U
} from "./Ce1mtF2R.js";
import {
  p as _
} from "./LT-XNHCk.js";
import {
  D as V
} from "./DeqNqtry.js";
import {
  m as P
} from "./XL5Wf48w.js";
var W = v('<h3 class="text-xl font-bold"> </h3>'),
  X = v('<p class="text-base-content/80 mt-1 text-sm whitespace-pre-line"> </p>'),
  Y = v('<span class="loading loading-spinner center-absolute absolute"></span>'),
  Z = v('<div><p class="text-lg"> </p> <!> <!> <div class="mt-6 flex justify-end gap-3 pb-2"><form method="dialog"><button class="btn btn-ghost hover:bg-base-content/10"> </button></form> <button> <!></button></div></div>');

function mt(q, a) {
  L(a, !0);
  let u = _(a, "open", 15),
    y = _(a, "type", 3, "confirmation"),
    z = _(a, "buttonText", 19, () => P.confirm()),
    c = O(!1);
  V(q, {
    dialogClass: "!bg-black/80",
    modalBoxClass: "max-w-md max-sm:!w-11/12 max-sm:!h-auto max-sm:!max-w-md max-sm:!max-h-[85vh] max-sm:!rounded-xl",
    hasCloseButton: !1,
    isDynamicHeight: !0,
    get open() {
      return u()
    },
    set open(o) {
      u(o)
    },
    header: o => {
      var f = W(),
        n = r(f, !0);
      s(f), h(() => d(n, a.title)), l(o, f)
    },
    children: (o, f) => {
      var n = Z(),
        b = r(n),
        A = r(b, !0);
      s(b);
      var w = m(b, 2);
      {
        var E = t => {
          var e = X(),
            x = r(e, !0);
          s(e), h(() => d(x, a.subDescription)), l(t, e)
        };
        g(w, t => {
          a.subDescription && t(E)
        })
      }
      var C = m(w, 2);
      {
        var F = t => {
          var e = Q(),
            x = R(e);
          S(x, () => a.children), l(t, e)
        };
        g(C, t => {
          a.children && t(F)
        })
      }
      var D = m(C, 2),
        p = r(D),
        k = r(p),
        G = r(k, !0);
      s(k), s(p);
      var i = m(p, 2);
      let B;
      var T = r(i),
        I = m(T);
      {
        var J = t => {
          var e = Y();
          l(t, e)
        };
        g(I, t => {
          j(c) && t(J)
        })
      }
      s(i), s(D), s(n), h(t => {
        d(A, a.description), d(G, t), B = U(i, 1, "btn min-w-32 px-6", null, B, {
          "btn-error": y() === "warning",
          "btn-primary": y() === "confirmation"
        }), i.disabled = j(c), d(T, `${z()??""} `)
      }, [() => P.cancel()]), N("click", i, async () => {
        try {
          H(c, !0), u(await a.onConfirm())
        } finally {
          H(c, !1)
        }
      }), l(o, n)
    },
    $$slots: {
      header: !0,
      default: !0
    }
  }), M()
}
K(["click"]);
export {
  mt as C
};