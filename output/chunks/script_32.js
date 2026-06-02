import "./Bzak7iHL.js";
import {
  p as Z,
  t as M,
  v as $,
  a as l,
  b as ee,
  i as ae,
  c as i,
  u as te,
  d as o,
  s as v,
  aJ as j,
  r,
  I as oe,
  f as z
} from "./Dbe4PVAU.js";
import {
  s as re
} from "./C_mo-lyU.js";
import {
  s as y
} from "./2Od2egA-.js";
import {
  i as c
} from "./Icl9dwnj.js";
import {
  e as se,
  c as I,
  a as w
} from "./B7_gUtXa.js";
import {
  b as le
} from "./BVz9wMiQ.js";
import {
  p as s
} from "./K9AHFDoV.js";
import "./BhCkpOlh.js";
import {
  c as ie
} from "./BKBS1EOp.js";
import {
  t as J
} from "./CPcsbTWB.js";
var ne = i('<form method="dialog"><button class="btn btn-sm btn-circle">✕</button></form>'),
  de = i('<div class="flex items-center"></div> <div class="flex items-center justify-center overflow-hidden text-center"><!></div> <div class="flex items-start justify-end pt-1"><!></div>', 1),
  me = i('<form method="dialog" class="ml-2 self-start pt-1 sm:translate-x-2"><button class="btn btn-sm btn-circle">✕</button></form>'),
  fe = i('<div class="flex flex-1 items-center gap-3 overflow-hidden"><!></div> <!>', 1),
  ve = i("<header><!></header>"),
  ce = i('<footer class="shrink-0 px-4 py-4 sm:px-6"><!></footer>'),
  _e = i('<form method="dialog" class="modal-backdrop"><button> </button></form>'),
  xe = i('<dialog closedby="any"><div><!> <div><!></div> <!></div> <!></dialog>');

function Me(q, a) {
  Z(a, !0);
  let A = s(a, "open", 15),
    F = s(a, "hasBackdrop", 3, !0),
    C = s(a, "hasCloseButton", 3, !0),
    G = s(a, "hasHeaderBorder", 3, !0),
    p = s(a, "centerHeader", 3, !1),
    K = s(a, "isDynamicHeight", 3, !1),
    N = s(a, "useModalLayer", 3, !0),
    E = s(a, "contentEl", 15),
    O = s(a, "disableCloseAnimation", 3, !1);
  const P = "modal-box p-0 flex flex-col w-11/12 max-h-11/12 rounded-xl",
    Q = "max-sm:!w-full max-sm:!h-full max-sm:!max-w-none max-sm:!max-h-none max-sm:!rounded-none",
    R = te(() => J(P, !K() && "h-11/12", Q, a.modalBoxClass));
  var d = xe(),
    u = o(d),
    L = o(u);
  {
    var S = e => {
      var t = ve(),
        m = o(t);
      {
        var k = f => {
            var x = de(),
              n = v(z(x), 2),
              H = o(n);
            y(H, () => a.header ?? j), r(n);
            var g = v(n, 2),
              D = o(g);
            {
              var b = h => {
                var Y = ne();
                l(h, Y)
              };
              c(D, h => {
                C() && h(b)
              })
            }
            r(g), l(f, x)
          },
          B = f => {
            var x = fe(),
              n = z(x),
              H = o(n);
            y(H, () => a.header ?? j), r(n);
            var g = v(n, 2);
            {
              var D = b => {
                var h = me();
                l(b, h)
              };
              c(g, b => {
                C() && b(D)
              })
            }
            l(f, x)
          };
        c(m, f => {
          p() ? f(k) : f(B, !1)
        })
      }
      r(t), M(() => w(t, 1, `bg-base-100/70 sticky top-0 z-40 flex shrink-0 items-center justify-between px-4 py-4 backdrop-blur sm:px-6 ${G()?"border-base-content/10 border-b":""} ${p()?"grid grid-cols-[2.5rem_1fr_2.5rem] px-4":""}`)), l(e, t)
    };
    c(L, e => {
      (a.header || C()) && e(S)
    })
  }
  var _ = v(L, 2),
    T = o(_);
  y(T, () => a.children ?? j), r(_), le(_, e => E(e), () => E());
  var U = v(_, 2);
  {
    var V = e => {
      var t = ce(),
        m = o(t);
      y(m, () => a.footer), r(t), l(e, t)
    };
    c(U, e => {
      a.footer && e(V)
    })
  }
  r(u);
  var W = v(u, 2);
  {
    var X = e => {
      var t = _e(),
        m = o(t),
        k = o(m, !0);
      r(m), r(t), M(B => re(k, B), [() => ie()]), l(e, t)
    };
    c(W, e => {
      F() && e(X)
    })
  }
  r(d), se(d, () => e => {
    oe(() => {
      A() && !e.open ? N() ? e.showModal() : e.show() : e.open && e.close()
    })
  }), M(e => {
    w(d, 1, `modal ${O()?"no-close-animation":""} ${a.dialogClass??""}`, "svelte-r6rf84"), w(u, 1, I(ae(R))), w(_, 1, e)
  }, [() => I(J("flex flex-1 flex-col overflow-y-auto px-4 py-4 sm:px-6", a.contentAreaClass))]), $("close", d, () => {
    var e;
    A(!1), (e = a.onclose) == null || e.call(a)
  }), l(q, d), ee()
}
export {
  Me as D
};