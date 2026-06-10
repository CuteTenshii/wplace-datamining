import "./Bzak7iHL.js";
import {
  p as re,
  t as E,
  v as te,
  a as s,
  b as oe,
  i as se,
  c as l,
  u as ie,
  d as t,
  s as m,
  aJ as k,
  r as o,
  I as le,
  f as q
} from "./Dbe4PVAU.js";
import {
  s as ne
} from "./C_mo-lyU.js";
import {
  s as u
} from "./2Od2egA-.js";
import {
  i as f
} from "./Icl9dwnj.js";
import {
  e as de,
  c as F,
  a as B
} from "./B7_gUtXa.js";
import {
  b as me
} from "./BVz9wMiQ.js";
import {
  p as i
} from "./K9AHFDoV.js";
import "./BhCkpOlh.js";
import {
  c as fe
} from "./BKBS1EOp.js";
import {
  t as G
} from "./CPcsbTWB.js";
var ve = l('<form method="dialog"><button class="btn btn-sm btn-circle">✕</button></form>'),
  ce = l('<div class="flex items-center"></div> <div class="flex items-center justify-center overflow-hidden text-center"><!></div> <div class="flex items-start justify-end pt-1"><!></div>', 1),
  _e = l('<form method="dialog"><button class="btn btn-sm btn-circle">✕</button></form>'),
  xe = l('<div class="ml-2 flex flex-col items-end gap-2 self-start pt-1 sm:translate-x-2"><!> <!></div>'),
  he = l('<div class="flex flex-1 items-center gap-3 overflow-hidden"><!></div> <!>', 1),
  be = l("<header><!></header>"),
  ue = l('<footer class="shrink-0 px-4 py-4 sm:px-6"><!></footer>'),
  ge = l('<form method="dialog" class="modal-backdrop"><button> </button></form>'),
  ye = l('<dialog closedby="any"><div><!> <div><!></div> <!></div> <!></dialog>');

function ze(K, e) {
  re(e, !0);
  let L = i(e, "open", 15),
    N = i(e, "hasBackdrop", 3, !0),
    g = i(e, "hasCloseButton", 3, !0),
    O = i(e, "hasHeaderBorder", 3, !0),
    z = i(e, "centerHeader", 3, !1),
    P = i(e, "isDynamicHeight", 3, !1),
    Q = i(e, "useModalLayer", 3, !0),
    I = i(e, "contentEl", 15),
    R = i(e, "disableCloseAnimation", 3, !1);
  const S = "modal-box p-0 flex flex-col w-11/12 max-h-11/12 rounded-xl",
    T = "max-sm:!w-full max-sm:!h-full max-sm:!max-w-none max-sm:!max-h-none max-sm:!rounded-none",
    U = ie(() => G(S, !P() && "h-11/12", T, e.modalBoxClass));
  var v = ye(),
    y = t(v),
    J = t(y);
  {
    var V = a => {
      var r = be(),
        c = t(r);
      {
        var H = _ => {
            var h = ce(),
              n = m(q(h), 2),
              D = t(n);
            u(D, () => e.header ?? k), o(n);
            var w = m(n, 2),
              M = t(w);
            {
              var b = d => {
                var C = ve();
                s(d, C)
              };
              f(M, d => {
                g() && d(b)
              })
            }
            o(w), s(_, h)
          },
          A = _ => {
            var h = he(),
              n = q(h),
              D = t(n);
            u(D, () => e.header ?? k), o(n);
            var w = m(n, 2);
            {
              var M = b => {
                var d = xe(),
                  C = t(d);
                {
                  var $ = j => {
                    var ae = _e();
                    s(j, ae)
                  };
                  f(C, j => {
                    g() && j($)
                  })
                }
                var ee = m(C, 2);
                u(ee, () => e.headerAction ?? k), o(d), s(b, d)
              };
              f(w, b => {
                (g() || e.headerAction) && b(M)
              })
            }
            s(_, h)
          };
        f(c, _ => {
          z() ? _(H) : _(A, !1)
        })
      }
      o(r), E(() => B(r, 1, `bg-base-100/70 sticky top-0 z-40 flex shrink-0 items-center justify-between px-4 py-4 backdrop-blur sm:px-6 ${O()?"border-base-content/10 border-b":""} ${z()?"grid grid-cols-[2.5rem_1fr_2.5rem] px-4":""}`)), s(a, r)
    };
    f(J, a => {
      (e.header || g()) && a(V)
    })
  }
  var x = m(J, 2),
    W = t(x);
  u(W, () => e.children ?? k), o(x), me(x, a => I(a), () => I());
  var X = m(x, 2);
  {
    var Y = a => {
      var r = ue(),
        c = t(r);
      u(c, () => e.footer), o(r), s(a, r)
    };
    f(X, a => {
      e.footer && a(Y)
    })
  }
  o(y);
  var Z = m(y, 2);
  {
    var p = a => {
      var r = ge(),
        c = t(r),
        H = t(c, !0);
      o(c), o(r), E(A => ne(H, A), [() => fe()]), s(a, r)
    };
    f(Z, a => {
      N() && a(p)
    })
  }
  o(v), de(v, () => a => {
    le(() => {
      L() && !a.open ? Q() ? a.showModal() : a.show() : a.open && a.close()
    })
  }), E(a => {
    B(v, 1, `modal ${R()?"no-close-animation":""} ${e.dialogClass??""}`, "svelte-r6rf84"), B(y, 1, F(se(U))), B(x, 1, a)
  }, [() => F(G("flex flex-1 flex-col overflow-y-auto px-4 py-4 sm:px-6", e.contentAreaClass))]), te("close", v, () => {
    var a;
    L(!1), (a = e.onclose) == null || a.call(e)
  }), s(K, v), oe()
}
export {
  ze as D
};