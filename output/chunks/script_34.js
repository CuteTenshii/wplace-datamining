import {
  B as e,
  Et as t,
  G as n,
  Jt as r,
  O as i,
  Pt as a,
  Tt as o,
  Y as s,
  Yt as c,
  Z as l,
  a as u,
  ct as d,
  f,
  j as p,
  k as m,
  nn as h,
  on as g,
  q as _,
  rt as v,
  vt as y,
  wt as b,
  x,
  yt as S
} from "./D6uuD926.js";
import "./B8UK1oE5.js";
import {
  t as C
} from "./ciZYZuIg.js";
import {
  t as w
} from "./DxdGK6Xj.js";
var T = l(`<form method="dialog"><button class="btn btn-sm btn-circle">✕</button></form>`),
  E = l(`<div class="flex items-center"></div> <div class="flex items-center justify-center overflow-hidden text-center"><!></div> <div class="flex items-start justify-end pt-1"><!></div>`, 1),
  D = l(`<div class="ml-2 flex flex-col items-end gap-2 self-start pt-1 sm:translate-x-2"><!> <!></div>`),
  O = l(`<div class="flex flex-1 items-center gap-3 overflow-hidden"><!></div> <!>`, 1),
  k = l(`<header><!></header>`),
  A = l(`<footer class="shrink-0 px-4 py-4 sm:px-6"><!></footer>`),
  j = l(`<form method="dialog" class="modal-backdrop"><button> </button></form>`),
  M = l(`<dialog><div><!> <div><!></div> <!></div> <!></dialog>`);

function N(l, N) {
  c(N, !0);
  let P = u(N, `open`, 15),
    F = u(N, `hasBackdrop`, 3, !0),
    I = u(N, `hasCloseButton`, 3, !0),
    L = u(N, `hasHeaderBorder`, 3, !0),
    R = u(N, `centerHeader`, 3, !1),
    z = u(N, `isDynamicHeight`, 3, !1),
    B = u(N, `useModalLayer`, 3, !0),
    V = u(N, `closedBy`, 3, `any`),
    H = u(N, `contentEl`, 15),
    U = u(N, `disableCloseAnimation`, 3, !1),
    W = a(() => N.mobileClasses ?? `max-sm:!w-full max-sm:!h-full max-sm:!max-w-none max-sm:!max-h-none max-sm:!rounded-none`),
    G = a(() => w(`modal-box p-0 flex flex-col w-11/12 max-h-11/12 rounded-xl`, !z() && `h-11/12`, d(W), N.modalBoxClass));
  var K = M(),
    q = b(K),
    J = b(q),
    Y = r => {
      var a = k(),
        c = b(a),
        l = r => {
          var i = E(),
            a = t(o(i), 2),
            c = b(a);
          e(c, () => N.header ?? g), h(a);
          var l = t(a, 2),
            u = b(l),
            d = e => {
              var t = T();
              s(e, t)
            };
          n(u, e => {
            I() && e(d)
          }), h(l), s(r, i)
        },
        u = r => {
          var i = O(),
            a = o(i),
            c = b(a);
          e(c, () => N.header ?? g), h(a);
          var l = t(a, 2),
            u = r => {
              var i = D(),
                a = b(i),
                o = e => {
                  var t = T();
                  s(e, t)
                };
              n(a, e => {
                I() && e(o)
              });
              var c = t(a, 2);
              e(c, () => N.headerAction ?? g), h(i), s(r, i)
            };
          n(l, e => {
            (I() || N.headerAction) && e(u)
          }), s(r, i)
        };
      n(c, e => {
        R() ? e(l) : e(u, -1)
      }), h(a), y(() => i(a, 1, `bg-base-100/70 sticky top-0 z-40 flex shrink-0 items-center justify-between px-4 py-4 backdrop-blur sm:px-6 ${L()?`border-base-content/10 border-b`:``} ${R()?`grid grid-cols-[2.5rem_1fr_2.5rem] px-4`:``} ${(N.headerClassName||``)??``}`)), s(r, a)
    };
  n(J, e => {
    (N.header || I()) && e(Y)
  });
  var X = t(J, 2),
    Z = b(X);
  e(Z, () => N.children ?? g), h(X), f(X, e => H(e), () => H());
  var Q = t(X, 2),
    $ = t => {
      var n = A(),
        r = b(n);
      e(r, () => N.footer), h(n), s(t, n)
    };
  n(Q, e => {
    N.footer && e($)
  }), h(q);
  var ee = t(q, 2),
    te = e => {
      var t = j(),
        n = b(t),
        r = b(n, !0);
      h(n), h(t), y(e => _(r, e), [() => C.close()]), s(e, t)
    };
  n(ee, e => {
    F() && e(te)
  }), h(K), p(K, () => e => {
    S(() => {
      P() && !e.open ? B() ? e.showModal() : e.show() : e.open && e.close()
    })
  }), y(e => {
    i(K, 1, `modal ${U()?`no-close-animation`:``} ${N.dialogClass??``}`, `svelte-r6rf84`), x(K, `closedby`, V()), i(q, 1, m(d(G))), i(X, 1, e)
  }, [() => m(w(`flex flex-1 flex-col overflow-x-hidden overflow-y-auto px-4 py-4 sm:px-6`, N.contentAreaClass))]), v(`close`, K, () => {
    var e;
    P(!1), (e = N.onclose) == null || e.call(N)
  }), s(l, K), r()
}
export {
  N as t
};