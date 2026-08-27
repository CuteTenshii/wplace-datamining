import "./Bzak7iHL.js";
import {
  p as ie,
  t as z,
  v as le,
  a as i,
  b as de,
  i as F,
  c as l,
  s as f,
  u as G,
  d as t,
  z as B,
  r as o,
  y as ne,
  f as I
} from "./D5GL_E7i.js";
import {
  s as me
} from "./BATewRf7.js";
import {
  s as u
} from "./BMTVjKyu.js";
import {
  i as v
} from "./unjGrhDm.js";
import {
  f as fe,
  c as J,
  a as k,
  s as ve
} from "./Ce1mtF2R.js";
import {
  b as ce
} from "./59dp7Pbq.js";
import {
  p as s
} from "./LT-XNHCk.js";
import {
  m as _e
} from "./XL5Wf48w.js";
import {
  t as K
} from "./Ct12j0u0.js";
var O = l('<form method="dialog"><button class="btn btn-sm btn-circle">✕</button></form>'),
  xe = l('<div class="flex items-center"></div> <div class="flex items-center justify-center overflow-hidden text-center"><!></div> <div class="flex items-start justify-end pt-1"><!></div>', 1),
  he = l('<div class="ml-2 flex flex-col items-end gap-2 self-start pt-1 sm:translate-x-2"><!> <!></div>'),
  be = l('<div class="flex flex-1 items-center gap-3 overflow-hidden"><!></div> <!>', 1),
  ue = l("<header><!></header>"),
  ye = l('<footer class="shrink-0 px-4 py-4 sm:px-6"><!></footer>'),
  ge = l('<form method="dialog" class="modal-backdrop"><button> </button></form>'),
  Ce = l("<dialog><div><!> <div><!></div> <!></div> <!></dialog>");

function Le(P, e) {
  ie(e, !0);
  let E = s(e, "open", 15),
    Q = s(e, "hasBackdrop", 3, !0),
    y = s(e, "hasCloseButton", 3, !0),
    R = s(e, "hasHeaderBorder", 3, !0),
    L = s(e, "centerHeader", 3, !1),
    S = s(e, "isDynamicHeight", 3, !1),
    T = s(e, "useModalLayer", 3, !0),
    U = s(e, "closedBy", 3, "any"),
    N = s(e, "contentEl", 15),
    V = s(e, "disableCloseAnimation", 3, !1);
  const W = "modal-box p-0 flex flex-col w-11/12 max-h-11/12 rounded-xl",
    X = G(() => e.mobileClasses ?? "max-sm:!w-full max-sm:!h-full max-sm:!max-w-none max-sm:!max-h-none max-sm:!rounded-none"),
    Y = G(() => K(W, !S() && "h-11/12", F(X), e.modalBoxClass));
  var d = Ce(),
    g = t(d),
    q = t(g);
  {
    var Z = a => {
      var r = ue(),
        c = t(r);
      {
        var H = _ => {
            var h = xe(),
              n = f(I(h), 2),
              D = t(n);
            u(D, () => e.header ?? B), o(n);
            var C = f(n, 2),
              M = t(C);
            {
              var b = m => {
                var w = O();
                i(m, w)
              };
              v(M, m => {
                y() && m(b)
              })
            }
            o(C), i(_, h)
          },
          A = _ => {
            var h = be(),
              n = I(h),
              D = t(n);
            u(D, () => e.header ?? B), o(n);
            var C = f(n, 2);
            {
              var M = b => {
                var m = he(),
                  w = t(m);
                {
                  var te = j => {
                    var se = O();
                    i(j, se)
                  };
                  v(w, j => {
                    y() && j(te)
                  })
                }
                var oe = f(w, 2);
                u(oe, () => e.headerAction ?? B), o(m), i(b, m)
              };
              v(C, b => {
                (y() || e.headerAction) && b(M)
              })
            }
            i(_, h)
          };
        v(c, _ => {
          L() ? _(H) : _(A, -1)
        })
      }
      o(r), z(() => k(r, 1, `bg-base-100/70 sticky top-0 z-40 flex shrink-0 items-center justify-between px-4 py-4 backdrop-blur sm:px-6 ${R()?"border-base-content/10 border-b":""} ${L()?"grid grid-cols-[2.5rem_1fr_2.5rem] px-4":""} ${(e.headerClassName||"")??""}`)), i(a, r)
    };
    v(q, a => {
      (e.header || y()) && a(Z)
    })
  }
  var x = f(q, 2),
    p = t(x);
  u(p, () => e.children ?? B), o(x), ce(x, a => N(a), () => N());
  var $ = f(x, 2);
  {
    var ee = a => {
      var r = ye(),
        c = t(r);
      u(c, () => e.footer), o(r), i(a, r)
    };
    v($, a => {
      e.footer && a(ee)
    })
  }
  o(g);
  var ae = f(g, 2);
  {
    var re = a => {
      var r = ge(),
        c = t(r),
        H = t(c, !0);
      o(c), o(r), z(A => me(H, A), [() => _e.close()]), i(a, r)
    };
    v(ae, a => {
      Q() && a(re)
    })
  }
  o(d), fe(d, () => a => {
    ne(() => {
      E() && !a.open ? T() ? a.showModal() : a.show() : a.open && a.close()
    })
  }), z(a => {
    k(d, 1, `modal ${V()?"no-close-animation":""} ${e.dialogClass??""}`, "svelte-r6rf84"), ve(d, "closedby", U()), k(g, 1, J(F(Y))), k(x, 1, a)
  }, [() => J(K("flex flex-1 flex-col overflow-x-hidden overflow-y-auto px-4 py-4 sm:px-6", e.contentAreaClass))]), le("close", d, () => {
    var a;
    E(!1), (a = e.onclose) == null || a.call(e)
  }), i(P, d), de()
}
export {
  Le as D
};