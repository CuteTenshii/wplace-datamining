import "./Bzak7iHL.js";
import {
  p as se,
  t as E,
  v as ie,
  a as s,
  b as le,
  i as F,
  c as l,
  u as G,
  d as o,
  s as m,
  x as k,
  r as t,
  A as de,
  f as I
} from "./Dkgr_Dbt.js";
import {
  s as ne
} from "./DbffVGnc.js";
import {
  s as u
} from "./BPhfHpSd.js";
import {
  i as f
} from "./rBVNqKOk.js";
import {
  f as me,
  c as J,
  a as B
} from "./CfjQLVhL.js";
import {
  b as fe
} from "./CqpZKCt-.js";
import {
  p as i
} from "./DOQuOeXT.js";
import "./BhCkpOlh.js";
import {
  c as ve
} from "./BKBS1EOp.js";
import {
  t as K
} from "./Ct12j0u0.js";
var O = l('<form method="dialog"><button class="btn btn-sm btn-circle">✕</button></form>'),
  ce = l('<div class="flex items-center"></div> <div class="flex items-center justify-center overflow-hidden text-center"><!></div> <div class="flex items-start justify-end pt-1"><!></div>', 1),
  xe = l('<div class="ml-2 flex flex-col items-end gap-2 self-start pt-1 sm:translate-x-2"><!> <!></div>'),
  _e = l('<div class="flex flex-1 items-center gap-3 overflow-hidden"><!></div> <!>', 1),
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
    N = i(e, "contentEl", 15),
    U = i(e, "disableCloseAnimation", 3, !1);
  const V = "modal-box p-0 flex flex-col w-11/12 max-h-11/12 rounded-xl",
    W = G(() => e.mobileClasses ?? "max-sm:!w-full max-sm:!h-full max-sm:!max-w-none max-sm:!max-h-none max-sm:!rounded-none"),
    X = G(() => K(V, !S() && "h-11/12", F(W), e.modalBoxClass));
  var v = ge(),
    y = o(v),
    q = o(y);
  {
    var Y = a => {
      var r = he(),
        c = o(r);
      {
        var A = x => {
            var h = ce(),
              d = m(I(h), 2),
              D = o(d);
            u(D, () => e.header ?? k), t(d);
            var C = m(d, 2),
              M = o(C);
            {
              var b = n => {
                var w = O();
                s(n, w)
              };
              f(M, n => {
                g() && n(b)
              })
            }
            t(C), s(x, h)
          },
          H = x => {
            var h = _e(),
              d = I(h),
              D = o(d);
            u(D, () => e.header ?? k), t(d);
            var C = m(d, 2);
            {
              var M = b => {
                var n = xe(),
                  w = o(n);
                {
                  var re = j => {
                    var te = O();
                    s(j, te)
                  };
                  f(w, j => {
                    g() && j(re)
                  })
                }
                var oe = m(w, 2);
                u(oe, () => e.headerAction ?? k), t(n), s(b, n)
              };
              f(C, b => {
                (g() || e.headerAction) && b(M)
              })
            }
            s(x, h)
          };
        f(c, x => {
          z() ? x(A) : x(H, -1)
        })
      }
      t(r), E(() => B(r, 1, `bg-base-100/70 sticky top-0 z-40 flex shrink-0 items-center justify-between px-4 py-4 backdrop-blur sm:px-6 ${R()?"border-base-content/10 border-b":""} ${z()?"grid grid-cols-[2.5rem_1fr_2.5rem] px-4":""} ${(e.headerClassName||"")??""}`)), s(a, r)
    };
    f(q, a => {
      (e.header || g()) && a(Y)
    })
  }
  var _ = m(q, 2),
    Z = o(_);
  u(Z, () => e.children ?? k), t(_), fe(_, a => N(a), () => N());
  var p = m(_, 2);
  {
    var $ = a => {
      var r = be(),
        c = o(r);
      u(c, () => e.footer), t(r), s(a, r)
    };
    f(p, a => {
      e.footer && a($)
    })
  }
  t(y);
  var ee = m(y, 2);
  {
    var ae = a => {
      var r = ue(),
        c = o(r),
        A = o(c, !0);
      t(c), t(r), E(H => ne(A, H), [() => ve()]), s(a, r)
    };
    f(ee, a => {
      Q() && a(ae)
    })
  }
  t(v), me(v, () => a => {
    de(() => {
      L() && !a.open ? T() ? a.showModal() : a.show() : a.open && a.close()
    })
  }), E(a => {
    B(v, 1, `modal ${U()?"no-close-animation":""} ${e.dialogClass??""}`, "svelte-r6rf84"), B(y, 1, J(F(X))), B(_, 1, a)
  }, [() => J(K("flex flex-1 flex-col overflow-x-hidden overflow-y-auto px-4 py-4 sm:px-6", e.contentAreaClass))]), ie("close", v, () => {
    var a;
    L(!1), (a = e.onclose) == null || a.call(e)
  }), s(P, v), le()
}
export {
  Le as D
};