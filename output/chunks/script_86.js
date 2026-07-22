import "./Bzak7iHL.js";
import {
  l as J,
  p as K,
  b as L,
  t as h,
  i as j,
  o as M,
  h as H,
  a as l,
  d as r,
  s as m,
  c as v,
  e as N,
  r as o,
  w as O,
  f as Q
} from "./BKnGt6Ki.js";
import {
  s as c
} from "./DbGfTWgr.js";
import {
  s as R
} from "./BLpt-Kcc.js";
import {
  i as g
} from "./C31cMBCe.js";
import {
  a as S
} from "./Czze0tKx.js";
import {
  p as _
} from "./Bu-IUIdW.js";
import {
  D as U
} from "./CAZ79jFA.js";
import "./BhCkpOlh.js";
import {
  c as V
} from "./D6_ahSxh.js";
import {
  c as W
} from "./BZcJYfQJ.js";
var X = v('<h3 class="text-xl font-bold"> </h3>'),
  Y = v('<p class="text-base-content/80 mt-1 text-sm whitespace-pre-line"> </p>'),
  Z = v('<span class="loading loading-spinner center-absolute absolute"></span>'),
  $ = v('<div><p class="text-lg"> </p> <!> <!> <div class="mt-6 flex justify-end gap-3 pb-2"><form method="dialog"><button class="btn btn-ghost hover:bg-base-content/10"> </button></form> <button> <!></button></div></div>');

function ft(P, a) {
  K(a, !0);
  let p = _(a, "open", 15),
    w = _(a, "type", 3, "confirmation"),
    q = _(a, "buttonText", 19, () => W()),
    d = N(!1);
  U(P, {
    dialogClass: "!bg-black/80",
    modalBoxClass: "max-w-md max-sm:!w-11/12 max-sm:!h-auto max-sm:!max-w-md max-sm:!max-h-[85vh] max-sm:!rounded-xl",
    hasCloseButton: !1,
    isDynamicHeight: !0,
    get open() {
      return p()
    },
    set open(s) {
      p(s)
    },
    header: s => {
      var f = X(),
        n = r(f, !0);
      o(f), h(() => c(n, a.title)), l(s, f)
    },
    children: (s, f) => {
      var n = $(),
        u = r(n),
        z = r(u, !0);
      o(u);
      var y = m(u, 2);
      {
        var A = t => {
          var e = Y(),
            x = r(e, !0);
          o(e), h(() => c(x, a.subDescription)), l(t, e)
        };
        g(y, t => {
          a.subDescription && t(A)
        })
      }
      var C = m(y, 2);
      {
        var E = t => {
          var e = O(),
            x = Q(e);
          R(x, () => a.children), l(t, e)
        };
        g(C, t => {
          a.children && t(E)
        })
      }
      var D = m(C, 2),
        b = r(D),
        k = r(b),
        F = r(k, !0);
      o(k), o(b);
      var i = m(b, 2);
      let B;
      var T = r(i),
        G = m(T);
      {
        var I = t => {
          var e = Z();
          l(t, e)
        };
        g(G, t => {
          j(d) && t(I)
        })
      }
      o(i), o(D), o(n), h(t => {
        c(z, a.description), c(F, t), B = S(i, 1, "btn min-w-32 px-6", null, B, {
          "btn-error": w() === "warning",
          "btn-primary": w() === "confirmation"
        }), i.disabled = j(d), c(T, `${q()??""} `)
      }, [() => V()]), M("click", i, async () => {
        try {
          H(d, !0), p(await a.onConfirm())
        } finally {
          H(d, !1)
        }
      }), l(s, n)
    },
    $$slots: {
      header: !0,
      default: !0
    }
  }), L()
}
J(["click"]);
export {
  ft as C
};