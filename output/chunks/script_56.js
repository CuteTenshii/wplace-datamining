import {
  B as e,
  Dt as t,
  Et as n,
  G as r,
  It as i,
  J as a,
  O as o,
  Ot as s,
  Q as c,
  X as l,
  Xt as u,
  Zt as d,
  a as f,
  at as p,
  bt as m,
  cn as h,
  f as g,
  in as _,
  j as v,
  k as y,
  ut as b,
  x,
  xt as S
} from "./D2z8HFb7.js";
import "./B8UK1oE5.js";
import {
  t as C
} from "./Bpg9SJXw.js";
import {
  t as w
} from "./DFPL5Wdr.js";
import {
  t as T
} from "./DxdGK6Xj.js";
var E = c(`<form method="dialog"><button class="btn btn-sm btn-circle"><!></button></form>`),
  D = c(`<div class="flex items-center"></div> <div class="flex items-center justify-center overflow-hidden text-center"><!></div> <div class="flex shrink-0 items-center justify-end"><!></div>`, 1),
  O = c(`<div class="ml-2 flex shrink-0 flex-col items-end gap-2"><!> <!></div>`),
  k = c(`<div class="flex min-w-0 flex-1 items-center gap-3 overflow-hidden"><!></div> <!>`, 1),
  A = c(`<header><!></header>`),
  j = c(`<footer class="shrink-0 px-4 py-4 sm:px-6"><!></footer>`),
  M = c(`<form method="dialog" class="modal-backdrop"><button> </button></form>`),
  N = c(`<dialog><div><!> <div><!></div> <!></div> <!></dialog>`);

function P(c, P) {
  d(P, !0);
  let F = f(P, `open`, 15),
    I = f(P, `hasBackdrop`, 3, !0),
    L = f(P, `hasCloseButton`, 3, !0),
    R = f(P, `hasHeaderBorder`, 3, !0),
    z = f(P, `centerHeader`, 3, !1),
    B = f(P, `isDynamicHeight`, 3, !1),
    V = f(P, `useModalLayer`, 3, !0),
    H = f(P, `closedBy`, 3, `any`),
    U = f(P, `contentEl`, 15),
    W = f(P, `disableCloseAnimation`, 3, !1),
    G = i(() => P.mobileClasses ?? `max-sm:!w-full max-sm:!h-full max-sm:!max-w-none max-sm:!max-h-none max-sm:!rounded-none max-sm:pt-safe max-sm:pb-safe`),
    K = i(() => T(`modal-box p-0 flex flex-col w-11/12 max-h-11/12 rounded-xl`, !B() && `h-11/12`, b(G), P.modalBoxClass));
  var q = N(),
    J = n(q),
    Y = n(J),
    X = i => {
      var a = A(),
        c = n(a),
        u = i => {
          var a = D(),
            o = s(t(a), 2),
            c = n(o);
          e(c, () => P.header ?? h), _(o);
          var u = s(o, 2),
            d = n(u),
            f = e => {
              var t = E(),
                r = n(t),
                i = n(r);
              w(i, {
                fill: `currentColor`,
                "aria-hidden": `true`,
                class: `size-4`
              }), _(r), _(t), m(e => x(r, `aria-label`, e), [() => C.close()]), l(e, t)
            };
          r(d, e => {
            L() && e(f)
          }), _(u), l(i, a)
        },
        d = i => {
          var a = k(),
            o = t(a),
            c = n(o);
          e(c, () => P.header ?? h), _(o);
          var u = s(o, 2),
            d = t => {
              var i = O(),
                a = n(i),
                o = e => {
                  var t = E(),
                    r = n(t),
                    i = n(r);
                  w(i, {
                    fill: `currentColor`,
                    "aria-hidden": `true`,
                    class: `size-4`
                  }), _(r), _(t), m(e => x(r, `aria-label`, e), [() => C.close()]), l(e, t)
                };
              r(a, e => {
                L() && e(o)
              });
              var c = s(a, 2);
              e(c, () => P.headerAction ?? h), _(i), l(t, i)
            };
          r(u, e => {
            (L() || P.headerAction) && e(d)
          }), l(i, a)
        };
      r(c, e => {
        z() ? e(u) : e(d, -1)
      }), _(a), m(() => o(a, 1, `bg-base-100/70 sticky top-0 z-40 flex shrink-0 items-center justify-between px-4 py-4 backdrop-blur sm:px-6 ${R()?`border-base-content/10 border-b`:``} ${z()?`grid grid-cols-[2.5rem_1fr_2.5rem] px-4`:``} ${(P.headerClassName||``)??``}`)), l(i, a)
    };
  r(Y, e => {
    (P.header || L()) && e(X)
  });
  var Z = s(Y, 2),
    Q = n(Z);
  e(Q, () => P.children ?? h), _(Z), g(Z, e => U(e), () => U());
  var $ = s(Z, 2),
    ee = t => {
      var r = j(),
        i = n(r);
      e(i, () => P.footer), _(r), l(t, r)
    };
  r($, e => {
    P.footer && e(ee)
  }), _(J);
  var te = s(J, 2),
    ne = e => {
      var t = M(),
        r = n(t),
        i = n(r, !0);
      _(r), _(t), m(e => a(i, e), [() => C.close()]), l(e, t)
    };
  r(te, e => {
    I() && e(ne)
  }), _(q), v(q, () => e => {
    S(() => {
      F() && !e.open ? V() ? e.showModal() : e.show() : e.open && e.close()
    })
  }), m(e => {
    o(q, 1, `modal ${W()?`no-close-animation`:``} ${P.dialogClass??``}`, `svelte-r6rf84`), x(q, `closedby`, H()), o(J, 1, y(b(K))), o(Z, 1, e)
  }, [() => y(T(`flex flex-1 flex-col overflow-x-hidden overflow-y-auto px-4 py-4 sm:px-6`, P.contentAreaClass))]), p(`close`, q, () => {
    var e;
    F(!1), (e = P.onclose) == null || e.call(P)
  }), l(c, q), u()
}
export {
  P as t
};