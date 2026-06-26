import "./Bzak7iHL.js";
import {
  p as se,
  t as E,
  v as ie,
  a as s,
  b as le,
  i as q,
  c as l,
  u as F,
  d as o,
  s as m,
  aI as k,
  r as t,
  y as de,
  f as G
} from "./DmPVOt2G.js";
import {
  s as ne
} from "./DhqkUb9U.js";
import {
  s as u
} from "./BAb2Drqf.js";
import {
  i as v
} from "./CPZ_RRGr.js";
import {
  e as me,
  c as J,
  a as B
} from "./C9hRcinp.js";
import {
  b as ve
} from "./CqzYBvze.js";
import {
  p as i
} from "./D4ILXblz.js";
import "./BhCkpOlh.js";
import {
  c as fe
} from "./BKBS1EOp.js";
import {
  t as K
} from "./Ct12j0u0.js";
var O = l('<form method="dialog"><button class="btn btn-sm btn-circle">✕</button></form>'),
  ce = l('<div class="flex items-center"></div> <div class="flex items-center justify-center overflow-hidden text-center"><!></div> <div class="flex items-start justify-end pt-1"><!></div>', 1),
  _e = l('<div class="ml-2 flex flex-col items-end gap-2 self-start pt-1 sm:translate-x-2"><!> <!></div>'),
  xe = l('<div class="flex flex-1 items-center gap-3 overflow-hidden"><!></div> <!>', 1),
  he = l("<header><!></header>"),
  be = l('<footer class="shrink-0 px-4 py-4 sm:px-6"><!></footer>'),
  ue = l('<form method="dialog" class="modal-backdrop"><button> </button></form>'),
  ge = l('<dialog closedby="any"><div><!> <div><!></div> <!></div> <!></dialog>');

function Le(P, e) {
  se(e, !0);
  let L = i(e, "open", 15),
    Q = i(e, "hasBackdrop", 3, !0),
    g = i(e, "hasCloseButton", 3, !0),
    R = i(e, "hasHeaderBorder", 3, !0),
    z = i(e, "centerHeader", 3, !1),
    S = i(e, "isDynamicHeight", 3, !1),
    T = i(e, "useModalLayer", 3, !0),
    I = i(e, "contentEl", 15),
    U = i(e, "disableCloseAnimation", 3, !1);
  const V = "modal-box p-0 flex flex-col w-11/12 max-h-11/12 rounded-xl",
    W = F(() => e.mobileClasses ?? "max-sm:!w-full max-sm:!h-full max-sm:!max-w-none max-sm:!max-h-none max-sm:!rounded-none"),
    X = F(() => K(V, !S() && "h-11/12", q(W), e.modalBoxClass));
  var f = ge(),
    y = o(f),
    N = o(y);
  {
    var Y = a => {
      var r = he(),
        c = o(r);
      {
        var H = _ => {
            var h = ce(),
              d = m(G(h), 2),
              D = o(d);
            u(D, () => e.header ?? k), t(d);
            var C = m(d, 2),
              M = o(C);
            {
              var b = n => {
                var w = O();
                s(n, w)
              };
              v(M, n => {
                g() && n(b)
              })
            }
            t(C), s(_, h)
          },
          A = _ => {
            var h = xe(),
              d = G(h),
              D = o(d);
            u(D, () => e.header ?? k), t(d);
            var C = m(d, 2);
            {
              var M = b => {
                var n = _e(),
                  w = o(n);
                {
                  var re = j => {
                    var te = O();
                    s(j, te)
                  };
                  v(w, j => {
                    g() && j(re)
                  })
                }
                var oe = m(w, 2);
                u(oe, () => e.headerAction ?? k), t(n), s(b, n)
              };
              v(C, b => {
                (g() || e.headerAction) && b(M)
              })
            }
            s(_, h)
          };
        v(c, _ => {
          z() ? _(H) : _(A, -1)
        })
      }
      t(r), E(() => B(r, 1, `bg-base-100/70 sticky top-0 z-40 flex shrink-0 items-center justify-between px-4 py-4 backdrop-blur sm:px-6 ${R()?"border-base-content/10 border-b":""} ${z()?"grid grid-cols-[2.5rem_1fr_2.5rem] px-4":""} ${(e.headerClassName||"")??""}`)), s(a, r)
    };
    v(N, a => {
      (e.header || g()) && a(Y)
    })
  }
  var x = m(N, 2),
    Z = o(x);
  u(Z, () => e.children ?? k), t(x), ve(x, a => I(a), () => I());
  var p = m(x, 2);
  {
    var $ = a => {
      var r = be(),
        c = o(r);
      u(c, () => e.footer), t(r), s(a, r)
    };
    v(p, a => {
      e.footer && a($)
    })
  }
  t(y);
  var ee = m(y, 2);
  {
    var ae = a => {
      var r = ue(),
        c = o(r),
        H = o(c, !0);
      t(c), t(r), E(A => ne(H, A), [() => fe()]), s(a, r)
    };
    v(ee, a => {
      Q() && a(ae)
    })
  }
  t(f), me(f, () => a => {
    de(() => {
      L() && !a.open ? T() ? a.showModal() : a.show() : a.open && a.close()
    })
  }), E(a => {
    B(f, 1, `modal ${U()?"no-close-animation":""} ${e.dialogClass??""}`, "svelte-r6rf84"), B(y, 1, J(q(X))), B(x, 1, a)
  }, [() => J(K("flex flex-1 flex-col overflow-x-hidden overflow-y-auto px-4 py-4 sm:px-6", e.contentAreaClass))]), ie("close", f, () => {
    var a;
    L(!1), (a = e.onclose) == null || a.call(e)
  }), s(P, f), le()
}
export {
  Le as D
};