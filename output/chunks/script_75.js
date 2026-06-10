import "./Bzak7iHL.js";
import {
  k as G,
  p as I,
  b as J,
  t as x,
  i as k,
  l as K,
  h as B,
  a as d,
  d as e,
  s as f,
  c as u,
  e as L,
  r as o
} from "./Dbe4PVAU.js";
import {
  s as l
} from "./C_mo-lyU.js";
import {
  i as T
} from "./Icl9dwnj.js";
import {
  a as M
} from "./B7_gUtXa.js";
import {
  p as g
} from "./K9AHFDoV.js";
import {
  D as N
} from "./C1Jr-MXI.js";
import "./BhCkpOlh.js";
import {
  c as O
} from "./D6_ahSxh.js";
import {
  c as Q
} from "./BZcJYfQJ.js";
var R = u('<h3 class="text-xl font-bold"> </h3>'),
  S = u('<p class="text-base-content/80 mt-1 text-sm"> </p>'),
  U = u('<span class="loading loading-spinner center-absolute absolute"></span>'),
  V = u('<div><p class="text-lg"> </p> <!> <div class="mt-6 flex justify-end gap-3 pb-2"><form method="dialog"><button class="btn btn-ghost hover:bg-base-content/10"> </button></form> <button> <!></button></div></div>');

function nt(j, t) {
  I(t, !0);
  let v = g(t, "open", 15),
    h = g(t, "type", 3, "confirmation"),
    H = g(t, "buttonText", 19, () => Q()),
    m = L(!1);
  N(j, {
    dialogClass: "!bg-black/80",
    modalBoxClass: "max-w-md max-sm:!w-11/12 max-sm:!h-auto max-sm:!max-w-md max-sm:!max-h-[85vh] max-sm:!rounded-xl",
    hasCloseButton: !1,
    isDynamicHeight: !0,
    get open() {
      return v()
    },
    set open(r) {
      v(r)
    },
    header: r => {
      var c = R(),
        s = e(c, !0);
      o(c), x(() => l(s, t.title)), d(r, c)
    },
    children: (r, c) => {
      var s = V(),
        p = e(s),
        P = e(p, !0);
      o(p);
      var _ = f(p, 2);
      {
        var q = a => {
          var i = S(),
            F = e(i, !0);
          o(i), x(() => l(F, t.subDescription)), d(a, i)
        };
        T(_, a => {
          t.subDescription && a(q)
        })
      }
      var y = f(_, 2),
        b = e(y),
        w = e(b),
        z = e(w, !0);
      o(w), o(b);
      var n = f(b, 2);
      let C;
      var D = e(n),
        A = f(D);
      {
        var E = a => {
          var i = U();
          d(a, i)
        };
        T(A, a => {
          k(m) && a(E)
        })
      }
      o(n), o(y), o(s), x(a => {
        l(P, t.description), l(z, a), C = M(n, 1, "btn min-w-32 px-6", null, C, {
          "btn-error": h() === "warning",
          "btn-primary": h() === "confirmation"
        }), n.disabled = k(m), l(D, `${H()??""} `)
      }, [() => O()]), K("click", n, async () => {
        try {
          B(m, !0), v(await t.onConfirm())
        } finally {
          B(m, !1)
        }
      }), d(r, s)
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