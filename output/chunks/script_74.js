import "./Bzak7iHL.js";
import {
  k as G,
  p as I,
  b as J,
  t as g,
  i as w,
  l as K,
  h as T,
  a as f,
  d as e,
  s as d,
  c as p,
  e as L,
  r
} from "./Dbe4PVAU.js";
import {
  s as l
} from "./C_mo-lyU.js";
import {
  i as j
} from "./Icl9dwnj.js";
import {
  a as M
} from "./B7_gUtXa.js";
import {
  p as _
} from "./K9AHFDoV.js";
import {
  D as N
} from "./MHTwTb88.js";
import "./BhCkpOlh.js";
import {
  c as O
} from "./D6_ahSxh.js";
import {
  c as Q
} from "./BZcJYfQJ.js";
var R = p('<h3 class="text-xl font-bold"> </h3>'),
  S = p('<p class="text-base-content/80 mt-1 text-sm"> </p>'),
  U = p('<span class="loading loading-spinner center-absolute absolute"></span>'),
  V = p('<div><p class="text-lg"> </p> <!> <div class="mt-6 flex justify-end gap-3 pb-2"><form method="dialog"><button class="btn btn-ghost hover:bg-base-content/10"> </button></form> <button> <!></button></div></div>');

function nt(B, t) {
  I(t, !0);
  let v = _(t, "open", 15),
    h = _(t, "type", 3, "confirmation"),
    H = _(t, "buttonText", 19, () => Q()),
    m = L(!1);
  N(B, {
    dialogClass: "!bg-black/80",
    hasCloseButton: !1,
    isDynamicHeight: !0,
    get open() {
      return v()
    },
    set open(o) {
      v(o)
    },
    header: o => {
      var c = R(),
        s = e(c, !0);
      r(c), g(() => l(s, t.title)), f(o, c)
    },
    children: (o, c) => {
      var s = V(),
        b = e(s),
        P = e(b, !0);
      r(b);
      var x = d(b, 2);
      {
        var q = a => {
          var i = S(),
            F = e(i, !0);
          r(i), g(() => l(F, t.subDescription)), f(a, i)
        };
        j(x, a => {
          t.subDescription && a(q)
        })
      }
      var y = d(x, 2),
        u = e(y),
        D = e(u),
        z = e(D, !0);
      r(D), r(u);
      var n = d(u, 2);
      let k;
      var C = e(n),
        A = d(C);
      {
        var E = a => {
          var i = U();
          f(a, i)
        };
        j(A, a => {
          w(m) && a(E)
        })
      }
      r(n), r(y), r(s), g(a => {
        l(P, t.description), l(z, a), k = M(n, 1, "btn min-w-32 px-6", null, k, {
          "btn-error": h() === "warning",
          "btn-primary": h() === "confirmation"
        }), n.disabled = w(m), l(C, `${H()??""} `)
      }, [() => O()]), K("click", n, async () => {
        try {
          T(m, !0), v(await t.onConfirm())
        } finally {
          T(m, !1)
        }
      }), f(o, s)
    },
    $$slots: {
      header: !0,
      default: !0
    }
  }), J()
}
G(["click"]);
export {
  nt as C
};