import "./Bzak7iHL.js";
import {
  p as oe,
  t as E,
  v as te,
  a as s,
  b as se,
  i as ie,
  c as l,
  u as le,
  d as o,
  s as m,
  aI as k,
  r as t,
  I as de,
  f as F
} from "./CV6xI6o5.js";
import {
  s as ne
} from "./hBdZmm-r.js";
import {
  s as u
} from "./DWZhoQU0.js";
import {
  i as v
} from "./iywslKou.js";
import {
  e as me,
  c as G,
  a as B
} from "./g3dAVNmx.js";
import {
  b as ve
} from "./BV5xAkCC.js";
import {
  p as i
} from "./BQ880tYw.js";
import "./BhCkpOlh.js";
import {
  c as fe
} from "./BKBS1EOp.js";
import {
  t as J
} from "./Ct12j0u0.js";
var K = l('<form method="dialog"><button class="btn btn-sm btn-circle">✕</button></form>'),
  ce = l('<div class="flex items-center"></div> <div class="flex items-center justify-center overflow-hidden text-center"><!></div> <div class="flex items-start justify-end pt-1"><!></div>', 1),
  _e = l('<div class="ml-2 flex flex-col items-end gap-2 self-start pt-1 sm:translate-x-2"><!> <!></div>'),
  xe = l('<div class="flex flex-1 items-center gap-3 overflow-hidden"><!></div> <!>', 1),
  he = l("<header><!></header>"),
  be = l('<footer class="shrink-0 px-4 py-4 sm:px-6"><!></footer>'),
  ue = l('<form method="dialog" class="modal-backdrop"><button> </button></form>'),
  ge = l('<dialog closedby="any"><div><!> <div><!></div> <!></div> <!></dialog>');

function Ie(N, e) {
  oe(e, !0);
  let I = i(e, "open", 15),
    O = i(e, "hasBackdrop", 3, !0),
    g = i(e, "hasCloseButton", 3, !0),
    P = i(e, "hasHeaderBorder", 3, !0),
    L = i(e, "centerHeader", 3, !1),
    Q = i(e, "isDynamicHeight", 3, !1),
    R = i(e, "useModalLayer", 3, !0),
    z = i(e, "contentEl", 15),
    S = i(e, "disableCloseAnimation", 3, !1);
  const T = "modal-box p-0 flex flex-col w-11/12 max-h-11/12 rounded-xl",
    U = "max-sm:!w-full max-sm:!h-full max-sm:!max-w-none max-sm:!max-h-none max-sm:!rounded-none",
    V = le(() => J(T, !Q() && "h-11/12", U, e.modalBoxClass));
  var f = ge(),
    y = o(f),
    q = o(y);
  {
    var W = a => {
      var r = he(),
        c = o(r);
      {
        var H = _ => {
            var h = ce(),
              d = m(F(h), 2),
              D = o(d);
            u(D, () => e.header ?? k), t(d);
            var w = m(d, 2),
              M = o(w);
            {
              var b = n => {
                var C = K();
                s(n, C)
              };
              v(M, n => {
                g() && n(b)
              })
            }
            t(w), s(_, h)
          },
          A = _ => {
            var h = xe(),
              d = F(h),
              D = o(d);
            u(D, () => e.header ?? k), t(d);
            var w = m(d, 2);
            {
              var M = b => {
                var n = _e(),
                  C = o(n);
                {
                  var ee = j => {
                    var re = K();
                    s(j, re)
                  };
                  v(C, j => {
                    g() && j(ee)
                  })
                }
                var ae = m(C, 2);
                u(ae, () => e.headerAction ?? k), t(n), s(b, n)
              };
              v(w, b => {
                (g() || e.headerAction) && b(M)
              })
            }
            s(_, h)
          };
        v(c, _ => {
          L() ? _(H) : _(A, -1)
        })
      }
      t(r), E(() => B(r, 1, `bg-base-100/70 sticky top-0 z-40 flex shrink-0 items-center justify-between px-4 py-4 backdrop-blur sm:px-6 ${P()?"border-base-content/10 border-b":""} ${L()?"grid grid-cols-[2.5rem_1fr_2.5rem] px-4":""}`)), s(a, r)
    };
    v(q, a => {
      (e.header || g()) && a(W)
    })
  }
  var x = m(q, 2),
    X = o(x);
  u(X, () => e.children ?? k), t(x), ve(x, a => z(a), () => z());
  var Y = m(x, 2);
  {
    var Z = a => {
      var r = be(),
        c = o(r);
      u(c, () => e.footer), t(r), s(a, r)
    };
    v(Y, a => {
      e.footer && a(Z)
    })
  }
  t(y);
  var p = m(y, 2);
  {
    var $ = a => {
      var r = ue(),
        c = o(r),
        H = o(c, !0);
      t(c), t(r), E(A => ne(H, A), [() => fe()]), s(a, r)
    };
    v(p, a => {
      O() && a($)
    })
  }
  t(f), me(f, () => a => {
    de(() => {
      I() && !a.open ? R() ? a.showModal() : a.show() : a.open && a.close()
    })
  }), E(a => {
    B(f, 1, `modal ${S()?"no-close-animation":""} ${e.dialogClass??""}`, "svelte-r6rf84"), B(y, 1, G(ie(V))), B(x, 1, a)
  }, [() => G(J("flex flex-1 flex-col overflow-y-auto px-4 py-4 sm:px-6", e.contentAreaClass))]), te("close", f, () => {
    var a;
    I(!1), (a = e.onclose) == null || a.call(e)
  }), s(N, f), se()
}
export {
  Ie as D
};