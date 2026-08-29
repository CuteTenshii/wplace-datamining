import {
  B as e,
  D as t,
  Dt as n,
  Et as r,
  G as i,
  H as a,
  Jt as o,
  Nt as s,
  O as c,
  Pt as l,
  Q as u,
  Tt as d,
  U as f,
  W as p,
  X as m,
  Y as h,
  Yt as g,
  Z as _,
  a as v,
  an as y,
  ct as b,
  et as x,
  f as S,
  jt as C,
  k as w,
  kt as T,
  n as E,
  nn as D,
  nt as O,
  on as k,
  q as A,
  r as j,
  tn as M,
  tt as N,
  vt as P,
  wt as F,
  x as I,
  yt as L
} from "./D6uuD926.js";
import {
  b as R
} from "./3pGDfLLI.js";
import {
  r as ee
} from "./ihYCYi_A.js";
import "./B8UK1oE5.js";
import {
  h as z,
  l as te
} from "./CMCDTH43.js";
import {
  f as B,
  i as V,
  m as H,
  n as U,
  q as W
} from "./BHDig7Ul.js";
import {
  t as G
} from "./ciZYZuIg.js";
import {
  i as ne,
  n as re
} from "./D4MF_dxU.js";
import {
  o as K,
  s as q
} from "./D50FBjsE.js";
import {
  t as J
} from "./Dtz7tqQe.js";
import {
  t as Y
} from "./BuhIbPWZ.js";
import {
  t as ie
} from "./D66yz1J3.js";
import {
  t as ae
} from "./MNhWTZAH.js";
import {
  t as X
} from "./CcR7ERXV.js";
import {
  t as Z
} from "./CuJc5nlM.js";
import {
  t as Q
} from "./BkkeS61c.js";
import {
  n as oe
} from "./BoG0A1IZ.js";
import {
  t as se
} from "./Cb-Emyig.js";
import {
  t as ce
} from "./Br9gBkmy.js";
import {
  t as $
} from "./DiBHd75r.js";
import {
  t as le
} from "./CbKMj6ol.js";
var ue = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAAXNSR0IArs4c6QAAACpJREFUeNpj+AsEZ86ASIa/DAwMZ84ACRDzDBigMs/AARITq1oUwxBWAADaREUdDMswKwAAAABJRU5ErkJggg==`,
  de = _(`<span class="btn btn-xs btn-circle btn-primary ml-0.5 size-5"><!></span>`),
  fe = _(`<span class="flex items-center gap-1"><!> <span class="text-primary text-base font-semibold"> <span class="text-xs max-lg:hidden">Droplets</span></span> <!></span>`),
  pe = _(`<button class="badge badge-lg border-base-content/10 right-tooltip cursor-pointer border-2 pr-1 pl-1"><!></button>`),
  me = _(`<span class="badge badge-lg border-base-content/10 right-tooltip border-2 pr-2 pl-1"><!></span>`);

function he(e, t) {
  g(t, !0);
  let n = e => {
      var n = fe(),
        o = F(n);
      $(o, {
        class: `text-primary size-4.5`
      });
      var s = r(o, 2),
        c = F(s);
      M(), D(s);
      var l = r(s, 2),
        u = e => {
          var t = de(),
            n = F(t);
          se(n, {
            class: `size-4`
          }), D(t), h(e, t)
        };
      i(l, e => {
        a() && e(u)
      }), D(n), P(e => A(c, `${e??``} `), [() => t.value.toLocaleString(navigator.language)]), h(e, n)
    },
    a = v(t, `button`, 3, !0);
  var s = m(),
    c = d(s),
    l = e => {
      var t = pe(),
        r = F(t);
      n(r), D(t), O(`click`, t, () => {
        W.dropletsDialogOpen = !0
      }), h(e, t)
    },
    u = e => {
      var t = me(),
        r = F(t);
      n(r), D(t), h(e, t)
    };
  i(c, e => {
    a() ? e(l) : e(u, -1)
  }), h(e, s), o()
}
N([`click`]);
var ge = e => {
    var t = Ye();
    h(e, t)
  },
  _e = e => {
    var t = Xe();
    h(e, t)
  },
  ve = e => {
    var t = Ze();
    h(e, t)
  },
  ye = {
    success: {
      accent: `#22c55e`,
      accentDark: `#16a34a`,
      accentShadow: `rgba(34,197,94,0.45)`,
      titleColor: `#16a34a`
    },
    error: {
      accent: `#ef4444`,
      accentDark: `#b91c1c`,
      accentShadow: `rgba(239,68,68,0.45)`,
      titleColor: `#b91c1c`
    },
    warning: {
      accent: `#f59e0b`,
      accentDark: `#b45309`,
      accentShadow: `rgba(245,158,11,0.45)`,
      titleColor: `#b45309`
    },
    info: {
      accent: `#3b6fe8`,
      accentDark: `#1f4fc8`,
      accentShadow: `rgba(59,111,232,0.45)`,
      titleColor: `#1f4fc8`
    },
    reward: {
      accent: `#a855f7`,
      accentDark: `#7e22ce`,
      accentShadow: `rgba(168,85,247,0.5)`,
      titleColor: `#7e22ce`
    },
    question: {
      accent: `#3b6fe8`,
      accentDark: `#1f4fc8`,
      accentShadow: `rgba(59,111,232,0.45)`,
      titleColor: `#0f1b4c`
    },
    confirmation: {
      accent: `#3b6fe8`,
      accentDark: `#1f4fc8`,
      accentShadow: `rgba(59,111,232,0.45)`,
      titleColor: `#0f1b4c`
    },
    loading: {
      accent: `#3b6fe8`,
      accentDark: `#1f4fc8`,
      accentShadow: `rgba(59,111,232,0.45)`,
      titleColor: `#0f1b4c`
    },
    empty: {
      accent: `#64748b`,
      accentDark: `#334155`,
      accentShadow: `rgba(100,116,139,0.4)`,
      titleColor: `#334155`
    }
  },
  be = 38,
  xe = 32,
  Se = (e, t) => {
    let n = (Math.sin(e * 12.9898 + t * 78.233) * 43758.5453 % 1 + 1) % 1,
      r = (r, i, a) => Math.sqrt((e - r) ** 2 + (t - i) ** 2) < a + (n - .5) * 2;
    return r(6, 8, 5) || r(14, 14, 6) || r(26, 10, 7) || r(28, 22, 5) || r(18, 24, 3)
  },
  Ce = [];
for (let e = 0; e < xe; e++)
  for (let t = 0; t < be; t++) Se(t, e) && Ce.push({
    x: t,
    y: e
  });
var we = _(`<span class="wp-dots svelte-ifq4hh" aria-hidden="true"><span class="svelte-ifq4hh"></span><span class="svelte-ifq4hh"></span><span class="svelte-ifq4hh"></span></span>`),
  Te = _(`<div class="wp-amount-label svelte-ifq4hh"> </div>`),
  Ee = _(`<div class="svelte-ifq4hh"><div class="wp-amount tabular-nums svelte-ifq4hh"> </div> <!></div>`),
  De = _(`<p class="wp-body svelte-ifq4hh"><!></p>`),
  Oe = _(`<li class="svelte-ifq4hh"><span class="wp-bullet-row svelte-ifq4hh"><span class="wp-bullet-label svelte-ifq4hh"> </span> <span class="wp-bullet-value tabular-nums svelte-ifq4hh"><!> </span></span></li>`),
  ke = _(`<ul class="wp-bullets svelte-ifq4hh"></ul>`),
  Ae = _(`<div class="wp-receipt-row svelte-ifq4hh"><span class="svelte-ifq4hh"> </span> <strong class="svelte-ifq4hh"> </strong></div>`),
  je = _(`<div class="wp-receipt-divider svelte-ifq4hh"></div> <div class="wp-receipt-row wp-receipt-total svelte-ifq4hh"><span class="svelte-ifq4hh"> </span> <span class="v svelte-ifq4hh"> </span></div>`, 1),
  Me = _(`<div class="wp-receipt svelte-ifq4hh"><!> <!></div>`),
  Ne = _(`<div class="wp-progress svelte-ifq4hh" aria-hidden="true"></div>`),
  Pe = _(`<div class="wp-meta svelte-ifq4hh"><!></div>`),
  Fe = _(`<div class="wp-btn-row svelte-ifq4hh"><button class="wp-cta wp-cta-ghost focus:outline-none svelte-ifq4hh" type="button"> </button> <button class="wp-cta focus:outline-none svelte-ifq4hh" type="button"> </button></div>`),
  Ie = _(`<button class="wp-cta focus:outline-none svelte-ifq4hh" type="button"><span class="svelte-ifq4hh"> </span> <!></button>`),
  Le = _(`<button class="wp-cta wp-cta-ghost svelte-ifq4hh" type="button"> </button>`),
  Re = _(`<a class="wp-ghost-link svelte-ifq4hh"> </a>`),
  ze = _(`<div class="wp-card-wrap svelte-ifq4hh"><div><!></div> <div class="wp-card svelte-ifq4hh" role="status" aria-live="polite"><h2 class="wp-title svelte-ifq4hh"> <!></h2> <!> <!> <!> <!> <!> <!> <!> <!> <!></div></div>`),
  Be = u(`<svg viewBox="0 0 32 32" fill="none" aria-hidden="true" class="svelte-ifq4hh"><path d="M6 16 L13 23 L26 9" stroke="#fff" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter" class="svelte-ifq4hh"></path></svg>`),
  Ve = u(`<svg viewBox="0 0 32 32" fill="none" aria-hidden="true" class="svelte-ifq4hh"><path d="M9 9 L23 23 M23 9 L9 23" stroke="#fff" stroke-width="4" stroke-linecap="square" class="svelte-ifq4hh"></path></svg>`),
  He = u(`<svg viewBox="0 0 32 32" fill="none" aria-hidden="true" class="svelte-ifq4hh"><rect x="14" y="7" width="4" height="13" fill="#fff" class="svelte-ifq4hh"></rect><rect x="14" y="22" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect></svg>`),
  Ue = u(`<svg viewBox="0 0 32 32" fill="none" aria-hidden="true" class="svelte-ifq4hh"><rect x="14" y="13" width="4" height="13" fill="#fff" class="svelte-ifq4hh"></rect><rect x="14" y="6" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect></svg>`),
  We = u(`<svg viewBox="0 0 32 32" fill="none" shape-rendering="crispEdges" aria-hidden="true" class="svelte-ifq4hh"><path d="M16 5 L19 13 L27 13 L21 18 L23 26 L16 22 L9 26 L11 18 L5 13 L13 13 Z" fill="#fff" class="svelte-ifq4hh"></path></svg>`),
  Ge = u(`<svg viewBox="0 0 32 32" fill="none" aria-hidden="true" class="svelte-ifq4hh"><path d="M11 12 Q11 8 16 8 Q21 8 21 12 Q21 15 16 16 L16 19" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="square" class="svelte-ifq4hh"></path><rect x="14" y="22" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect></svg>`),
  Ke = u(`<svg viewBox="0 0 32 32" fill="none" shape-rendering="crispEdges" aria-hidden="true" class="svelte-ifq4hh"><rect x="6" y="10" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect><rect x="14" y="10" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect><rect x="22" y="10" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect><rect x="6" y="18" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect><rect x="14" y="18" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect><rect x="22" y="18" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect></svg>`),
  qe = u(`<svg viewBox="0 0 32 32" fill="none" shape-rendering="crispEdges" aria-hidden="true" class="svelte-ifq4hh"><rect x="14" y="4" width="4" height="6" fill="#fff" class="svelte-ifq4hh"></rect><rect x="14" y="22" width="4" height="6" fill="rgba(255,255,255,0.25)" class="svelte-ifq4hh"></rect><rect x="4" y="14" width="6" height="4" fill="rgba(255,255,255,0.5)" class="svelte-ifq4hh"></rect><rect x="22" y="14" width="6" height="4" fill="rgba(255,255,255,0.75)" class="svelte-ifq4hh"></rect><rect x="7.5" y="7.5" width="4" height="4" fill="rgba(255,255,255,0.85)" class="svelte-ifq4hh"></rect><rect x="20.5" y="20.5" width="4" height="4" fill="rgba(255,255,255,0.4)" class="svelte-ifq4hh"></rect><rect x="20.5" y="7.5" width="4" height="4" fill="rgba(255,255,255,0.6)" class="svelte-ifq4hh"></rect><rect x="7.5" y="20.5" width="4" height="4" fill="rgba(255,255,255,0.2)" class="svelte-ifq4hh"></rect></svg>`),
  Je = u(`<svg viewBox="0 0 32 32" fill="none" shape-rendering="crispEdges" aria-hidden="true" class="svelte-ifq4hh"><rect x="7" y="9" width="18" height="4" fill="#fff" class="svelte-ifq4hh"></rect><rect x="7" y="9" width="4" height="16" fill="#fff" class="svelte-ifq4hh"></rect><rect x="21" y="9" width="4" height="16" fill="#fff" class="svelte-ifq4hh"></rect><rect x="7" y="21" width="18" height="4" fill="#fff" class="svelte-ifq4hh"></rect></svg>`),
  Ye = u(`<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true" class="svelte-ifq4hh"><rect x="7" y="1" width="2" height="1" fill="currentColor" class="svelte-ifq4hh"></rect><rect x="6" y="2" width="4" height="1" fill="currentColor" class="svelte-ifq4hh"></rect><rect x="5" y="3" width="6" height="2" fill="currentColor" class="svelte-ifq4hh"></rect><rect x="4" y="5" width="8" height="1" fill="currentColor" class="svelte-ifq4hh"></rect><rect x="3" y="6" width="10" height="2" fill="currentColor" class="svelte-ifq4hh"></rect><rect x="2" y="8" width="12" height="3" fill="currentColor" class="svelte-ifq4hh"></rect><rect x="3" y="11" width="10" height="2" fill="currentColor" class="svelte-ifq4hh"></rect><rect x="4" y="13" width="8" height="1" fill="currentColor" class="svelte-ifq4hh"></rect><rect x="6" y="14" width="4" height="1" fill="currentColor" class="svelte-ifq4hh"></rect></svg>`),
  Xe = u(`<svg viewBox="0 0 16 16" width="14" height="14" shape-rendering="crispEdges" aria-hidden="true" class="svelte-ifq4hh"><path d="M3 8 L7 12 L13 5" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="square" class="svelte-ifq4hh"></path></svg>`),
  Ze = u(`<svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true" class="svelte-ifq4hh"><path d="M3 8h9 M9 5l4 3-4 3" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter" class="svelte-ifq4hh"></path></svg>`),
  Qe = _(`<div class="wp-embed svelte-ifq4hh"><!></div>`),
  $e = u(`<rect width="1" height="1" fill="#2D6378" class="svelte-ifq4hh"></rect>`),
  et = _(`<div class="wp-stage svelte-ifq4hh" aria-hidden="false"><svg class="wp-map svelte-ifq4hh" preserveAspectRatio="xMidYMid slice" shape-rendering="crispEdges" aria-hidden="true"></svg> <div class="wp-droplets svelte-ifq4hh" aria-hidden="true"><div class="wp-d wp-d1 svelte-ifq4hh"><!></div> <div class="wp-d wp-d2 svelte-ifq4hh"><!></div> <div class="wp-d wp-d3 svelte-ifq4hh"><!></div> <div class="wp-d wp-d4 svelte-ifq4hh"><!></div></div> <div class="wp-shell svelte-ifq4hh"><header class="wp-topbar svelte-ifq4hh"><a class="wp-brand svelte-ifq4hh" aria-label="WPlace home"><img class="pixelated h-auto w-6 shrink-0 svelte-ifq4hh" alt="Wplace logo"/> <span class="wp-brand-name svelte-ifq4hh">wplace</span></a> <button class="wp-close svelte-ifq4hh" type="button" aria-label="Close"><svg viewBox="0 0 16 16" fill="none" width="14" height="14" aria-hidden="true" class="svelte-ifq4hh"><path d="M3 3 L13 13 M13 3 L3 13" stroke="currentColor" stroke-width="2" stroke-linecap="square" class="svelte-ifq4hh"></path></svg></button></header> <main class="wp-main svelte-ifq4hh"><!></main></div></div>`);

function tt(n, s) {
  g(s, !0);
  let u = n => {
      var o = ze(),
        u = F(o);
      let g, v;
      var y = F(u);
      p(y), D(u);
      var T = r(u, 2),
        E = F(T);
      let k;
      var j = F(E),
        M = r(j),
        N = e => {
          var t = we();
          h(e, t)
        };
      i(M, e => {
        _() === `loading` && e(N)
      }), D(E);
      var L = r(E, 2),
        ee = e => {
          var t = Ee(),
            n = F(t),
            a = F(n, !0);
          D(n);
          var o = r(n, 2),
            c = e => {
              var t = Te(),
                n = F(t, !0);
              D(t), P(() => A(n, s.amountLabel)), h(e, t)
            };
          i(o, e => {
            s.amountLabel && e(c)
          }), D(t), P(() => A(a, s.amount)), h(e, t)
        };
      i(L, e => {
        s.amount && e(ee)
      });
      var z = r(L, 2),
        te = t => {
          var n = De(),
            r = F(n),
            a = t => {
              var n = m(),
                r = d(n);
              e(r, () => s.body), h(t, n)
            },
            o = l(() => w(s.body)),
            c = e => {
              var t = x();
              P(() => A(t, s.body)), h(e, t)
            };
          i(r, e => {
            b(o) ? e(a) : e(c, -1)
          }), D(n), h(t, n)
        };
      i(z, e => {
        s.body && e(te)
      });
      var B = r(z, 2),
        V = e => {
          var n = ke();
          a(n, 21, () => s.bullets, f, (e, n) => {
            var a = Oe(),
              o = F(a),
              s = F(o),
              c = F(s, !0);
            D(s);
            var l = r(s, 2);
            let u;
            var d = F(l),
              f = e => {
                _e(e)
              };
            i(d, e => {
              b(n).valueIcon && e(f)
            });
            var p = r(d);
            D(l), D(o), D(a), P(() => {
              A(c, b(n).label), u = t(l, ``, u, {
                color: b(n).valueColor ?? b(C).accent
              }), A(p, ` ${b(n).value??``??``}`)
            }), h(e, a)
          }), D(n), h(e, n)
        };
      i(B, e => {
        s.bullets && e(V)
      });
      var H = r(B, 2),
        U = e => {
          var n = Me(),
            o = F(n);
          a(o, 17, () => s.receipt.rows, f, (e, n) => {
            var i = Ae(),
              a = F(i),
              o = F(a, !0);
            D(a);
            var s = r(a, 2);
            let c;
            var l = F(s, !0);
            D(s), D(i), P(() => {
              A(o, b(n).label), c = t(s, ``, c, {
                color: b(n).color
              }), A(l, b(n).value)
            }), h(e, i)
          });
          var c = r(o, 2),
            l = e => {
              var t = je(),
                n = r(d(t), 2),
                i = F(n),
                a = F(i, !0);
              D(i);
              var o = r(i, 2),
                c = F(o, !0);
              D(o), D(n), P(() => {
                A(a, s.receipt.total.label), A(c, s.receipt.total.value)
              }), h(e, t)
            };
          i(c, e => {
            s.receipt.total && e(l)
          }), D(n), h(e, n)
        };
      i(H, e => {
        s.receipt && e(U)
      });
      var W = r(H, 2),
        G = e => {
          var t = Ne();
          h(e, t)
        };
      i(W, e => {
        S() && e(G)
      });
      var ne = r(W, 2),
        re = t => {
          var n = Pe(),
            r = F(n),
            a = t => {
              var n = m(),
                r = d(n);
              e(r, () => s.meta), h(t, n)
            },
            o = l(() => w(s.meta)),
            c = e => {
              var t = x();
              P(() => A(t, s.meta)), h(e, t)
            };
          i(r, e => {
            b(o) ? e(a) : e(c, -1)
          }), D(n), h(t, n)
        };
      i(ne, e => {
        s.meta && e(re)
      });
      var K = r(ne, 2),
        q = e => {
          var n = Fe(),
            i = F(n),
            a = F(i, !0);
          D(i);
          var o = r(i, 2);
          let c;
          var l = F(o, !0);
          D(o), D(n), P(() => {
            A(a, s.buttonRow.secondary.label), c = t(o, ``, c, {
              "--cta-bg": s.buttonRow.primary.color,
              "--cta-dark": s.buttonRow.primary.colorDark
            }), A(l, s.buttonRow.primary.label)
          }), O(`click`, i, function(...e) {
            var t;
            (t = s.buttonRow.secondary.onClick) == null || t.apply(this, e)
          }), O(`click`, o, function(...e) {
            var t;
            (t = s.buttonRow.primary.onClick) == null || t.apply(this, e)
          }), h(e, n)
        },
        J = e => {
          var n = Ie();
          let a;
          var o = F(n),
            c = F(o, !0);
          D(o);
          var l = r(o, 2),
            u = e => {
              ve(e)
            };
          i(l, e => {
            s.primary.arrow !== !1 && e(u)
          }), D(n), P(() => {
            a = t(n, ``, a, {
              "--cta-bg": s.primary.color,
              "--cta-dark": s.primary.colorDark
            }), A(c, s.primary.label)
          }), O(`click`, n, function(...e) {
            var t;
            (t = s.primary.onClick) == null || t.apply(this, e)
          }), h(e, n)
        };
      i(K, e => {
        s.buttonRow ? e(q) : s.primary && e(J, 1)
      });
      var Y = r(K, 2),
        ie = e => {
          var t = Le(),
            n = F(t, !0);
          D(t), P(() => A(n, s.secondary.label)), O(`click`, t, function(...e) {
            var t;
            (t = s.secondary.onClick) == null || t.apply(this, e)
          }), h(e, t)
        };
      i(Y, e => {
        s.secondary && !s.buttonRow && e(ie)
      });
      var ae = r(Y, 2),
        X = e => {
          var t = Re(),
            n = F(t, !0);
          D(t), P(e => {
            I(t, `href`, e), A(n, s.ghost)
          }, [() => R(`/`)]), h(e, t)
        };
      i(ae, e => {
        s.ghost && e(X)
      }), D(T), D(o), P(() => {
        g = c(u, 1, `wp-badge svelte-ifq4hh`, null, g, {
          "wp-badge-spin": _() === `loading`
        }), v = t(u, ``, v, {
          background: b(C).accent,
          "--bd": b(C).accentDark,
          "--bg-glow": b(C).accentShadow
        }), k = t(E, ``, k, {
          color: b(C).titleColor
        }), A(j, `${s.title??``} `)
      }), h(n, o)
    },
    p = e => {
      var t = m(),
        n = d(t),
        r = e => {
          var t = Be();
          h(e, t)
        },
        a = e => {
          var t = Ve();
          h(e, t)
        },
        o = e => {
          var t = He();
          h(e, t)
        },
        s = e => {
          var t = Ue();
          h(e, t)
        },
        c = e => {
          var t = We();
          h(e, t)
        },
        l = e => {
          var t = Ge();
          h(e, t)
        },
        u = e => {
          var t = Ke();
          h(e, t)
        },
        f = e => {
          var t = qe();
          h(e, t)
        },
        p = e => {
          var t = Je();
          h(e, t)
        };
      i(n, e => {
        _() === `success` ? e(r) : _() === `error` ? e(a, 1) : _() === `warning` ? e(o, 2) : _() === `info` ? e(s, 3) : _() === `reward` ? e(c, 4) : _() === `question` ? e(l, 5) : _() === `confirmation` ? e(u, 6) : _() === `loading` ? e(f, 7) : e(p, -1)
      }), h(e, t)
    },
    _ = v(s, `variant`, 3, `success`),
    y = v(s, `embedded`, 3, !1),
    S = v(s, `progress`, 3, !1),
    C = l(() => ye[_()]),
    w = e => typeof e == `function`;
  var T = m(),
    E = d(T),
    k = e => {
      var t = Qe(),
        n = F(t);
      u(n), D(t), h(e, t)
    },
    j = e => {
      var t = et(),
        n = F(t);
      I(n, `viewBox`, `0 0 ${be} ${xe}`), a(n, 21, () => Ce, e => e.x + `-` + e.y, (e, t) => {
        var n = $e();
        P(() => {
          I(n, `x`, b(t).x), I(n, `y`, b(t).y)
        }), h(e, n)
      }), D(n);
      var i = r(n, 2),
        o = F(i);
      ge(F(o)), D(o);
      var c = r(o, 2);
      ge(F(c)), D(c);
      var l = r(c, 2);
      ge(F(l)), D(l);
      var d = r(l, 2);
      ge(F(d)), D(d), D(i);
      var f = r(i, 2),
        p = F(f),
        m = F(p),
        g = F(m);
      M(2), D(m);
      var _ = r(m, 2);
      D(p);
      var v = r(p, 2),
        y = F(v);
      u(y), D(v), D(f), D(t), P(e => {
        I(m, `href`, e), I(g, `src`, J)
      }, [() => R(`/`)]), O(`click`, _, function(...e) {
        var t;
        (t = s.onclose) == null || t.apply(this, e)
      }), h(e, t)
    };
  i(E, e => {
    y() ? e(k) : e(j, -1)
  }), h(n, T), o()
}
N([`click`]);

function nt(e, t) {
  g(t, !0);
  let n = v(t, `open`, 15);
  L(() => {
    n() && re()
  }), Q(e, {
    isDynamicHeight: !0,
    hasCloseButton: !1,
    hasHeaderBorder: !1,
    dialogClass: `!bg-black/60`,
    modalBoxClass: `max-w-sm !bg-transparent !shadow-none`,
    contentAreaClass: `!p-0 justify-center`,
    get open() {
      return n()
    },
    set open(e) {
      n(e)
    },
    children: (e, r) => {
      {
        let r = l(() => G.payment_declined_title()),
          i = l(() => G.payment_declined_description()),
          a = l(() => ({
            label: G.payment_declined_retry(),
            arrow: !1,
            onClick: t.onRetry
          })),
          o = l(() => ({
            label: G.close(),
            onClick: () => n(!1)
          }));
        tt(e, {
          embedded: !0,
          variant: `error`,
          get title() {
            return b(r)
          },
          get body() {
            return b(i)
          },
          get primary() {
            return b(a)
          },
          get secondary() {
            return b(o)
          }
        })
      }
    },
    $$slots: {
      default: !0
    }
  }), o()
}

function rt(e, t) {
  let n;
  return ((...r) => {
    clearTimeout(n), n = setTimeout(() => e(...r), t)
  })
}
var it = (e, t = k, n) => {
    let a = s(() => y(n == null ? void 0 : n(), `row`)),
      o = l(() => t().currency === `prism`);
    var u = ct(),
      f = F(u),
      p = e => {
        var t = m(),
          n = d(t),
          r = e => {
            le(e, {
              class: `size-3.5`
            })
          },
          a = e => {
            $(e, {
              class: `text-primary size-3.5`
            })
          };
        i(n, e => {
          b(o) ? e(r) : e(a, -1)
        }), h(e, t)
      };
    i(f, e => {
      b(a) === `compact` && e(p)
    });
    var g = r(f, 2),
      _ = F(g, !0);
    D(g);
    var v = r(g, 2),
      x = e => {
        var t = st(),
          n = F(t, !0);
        D(t), P(e => A(n, e), [() => b(o) ? G.prism() : G.droplets()]), h(e, t)
      };
    i(v, e => {
      b(a) === `row` && e(x)
    }), D(u), P(e => {
      c(u, 1, `inline-flex items-center gap-1 ${b(a)===`compact`?`text-sm`:`text-base`}`), c(g, 1, `font-extrabold tracking-tight tabular-nums ${b(o)?`prism-sheen-text`:`text-base-content`}`), A(_, e)
    }, [() => t().amount.toLocaleString(navigator.language)]), h(e, u)
  },
  at = _(`<li class="bg-base-100 border-base-content/10 grid items-center gap-3 rounded-2xl border px-3.5 py-3" style="grid-template-columns: 36px 1fr auto;"><div><!></div> <div class="flex min-w-0 flex-col gap-0.5"><!></div> <div class="text-base-content/60 flex flex-col items-end gap-0.5 text-[11px] font-semibold whitespace-nowrap tabular-nums"><span> </span></div></li>`),
  ot = _(`<ul class="flex flex-col gap-1.5"></ul>`),
  st = _(`<span class="text-base-content/70 text-[12.5px] font-semibold"> </span>`),
  ct = _(`<span><!> <span> </span> <!></span>`),
  lt = _(`<div class="flex flex-col gap-0.5"><span class="text-base-content/60 text-[11px] font-semibold tracking-[0.08em] uppercase"> </span> <h3 class="text-[22px] leading-tight font-extrabold tracking-tight"> </h3></div>`),
  ut = _(`<span class="loading loading-spinner size-4"></span>`),
  dt = _(`<span> </span>`),
  ft = _(`<span class="bg-primary absolute right-2 -bottom-px left-2 h-0.5 rounded-t"></span>`),
  pt = _(`<button role="tab" type="button"><span> </span> <!> <!></button>`),
  mt = _(`<div class="flex h-32 items-center justify-center"><span class="loading loading-spinner loading-lg"></span></div>`),
  ht = _(`<p class="text-warning/90 px-3.5 pb-3 pl-9 text-[12.5px] leading-snug"> </p>`),
  gt = _(`<div class="bg-warning/10 border-warning/30 overflow-hidden rounded-2xl border"><button type="button" class="flex w-full items-center gap-2.5 px-3.5 py-3 text-left"><!> <span class="text-warning flex-1 text-[13px] font-bold"> </span> <!></button> <!></div> <!> <div class="flex items-center justify-between gap-3 px-1 pt-2"><span class="text-base-content/70 text-xs font-semibold"> </span> <div class="flex flex-wrap justify-end gap-x-3 gap-y-1"></div></div>`, 1),
  _t = _(`<!> <div class="flex items-center justify-between gap-3 px-1 pt-2"><span class="text-base-content/70 text-xs font-semibold"> </span> <div class="flex flex-wrap justify-end gap-x-3 gap-y-1"></div></div>`, 1),
  vt = _(`<div class="bg-base-100 ring-primary/15 text-primary absolute -right-1 -bottom-1 grid size-9 place-items-center rounded-full shadow-md ring-2"><!></div>`),
  yt = _(`<div class="bg-error ring-base-100 absolute -top-1 -right-1 grid size-8 place-items-center rounded-full text-white shadow-md ring-2"><!></div>`),
  bt = _(`<span class="loading loading-spinner size-3"></span>`),
  xt = _(`<div class="flex flex-col items-center px-7 py-8 text-center"><div class="relative mb-4"><div class="bg-primary/5 grid size-28 place-items-center rounded-full"><div class="bg-primary/10 grid size-20 place-items-center rounded-full"><!></div></div> <!></div> <div class="mb-1.5 text-base font-extrabold tracking-tight"> </div> <div class="text-base-content/60 mb-4 max-w-[240px] text-[13px] leading-snug"> </div> <button type="button" class="bg-primary/10 text-primary hover:bg-primary/20 inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[12.5px] font-bold transition-colors disabled:opacity-60"><!> </button></div>`),
  St = _(`<div class="-mx-4 -mb-4 flex flex-col gap-3 sm:-mx-6"><div class="px-4 sm:px-6"><div class="from-primary text-primary-content shadow-primary/30 flex items-center gap-3 rounded-2xl bg-gradient-to-br to-blue-500 p-3 shadow-lg"><div class="flex min-w-0 flex-1 flex-col gap-2"><span class="text-[11px] font-semibold tracking-[0.06em] text-white/75 uppercase"> </span> <div class="grid min-w-0 gap-2 sm:grid-cols-2 sm:gap-3"><div class="flex min-w-0 items-center gap-2"><div class="grid size-8 shrink-0 place-items-center rounded-lg bg-white/15 backdrop-blur"><!></div> <div class="flex min-w-0 items-baseline gap-1.5"><span class="truncate text-lg font-extrabold tracking-tight tabular-nums"> </span> <span class="shrink-0 text-xs font-semibold text-white/75"> </span></div></div> <div class="flex min-w-0 items-center gap-2"><div class="grid size-8 shrink-0 place-items-center rounded-lg bg-white/15 backdrop-blur"><!></div> <div class="flex min-w-0 items-baseline gap-1.5"><span class="truncate text-lg font-extrabold tracking-tight tabular-nums"> </span> <span class="shrink-0 text-xs font-semibold text-white/75"> </span></div></div></div></div> <button type="button" class="grid size-9 place-items-center rounded-xl bg-white/15 transition-all hover:bg-white/25 active:rotate-180 disabled:opacity-60"><!></button></div></div> <div role="tablist" class="border-base-content/10 -mb-px flex scrollbar-none gap-1 overflow-x-auto overflow-y-hidden border-b px-2 sm:px-4"></div> <div class="flex flex-col gap-3 px-4 pt-1 pb-5 sm:px-6"><!></div></div>`);

function Ct(e, t) {
  g(t, !0);
  let s = (e, t = k) => {
      var n = ot();
      a(n, 21, t, e => e.createdAt + e.updatedAt + e.grant.currency + e.grant.amount, (e, t) => {
        let n = l(() => b(t).status === `refunded` ? b(t).updatedAt : b(t).createdAt),
          a = l(() => b(t).grant.currency === `prism`);
        var o = at(),
          s = F(o),
          u = F(s),
          d = e => {
            le(e, {
              class: `size-5`
            })
          },
          f = e => {
            $(e, {
              class: `text-primary size-5`
            })
          };
        i(u, e => {
          b(a) ? e(d) : e(f, -1)
        }), D(s);
        var p = r(s, 2);
        it(F(p), () => b(t).grant), D(p);
        var m = r(p, 2),
          g = F(m),
          _ = F(g, !0);
        D(g), D(m), D(o), P(e => {
          c(s, 1, `grid size-9 place-items-center rounded-[10px] ${b(a)?`bg-purple-500/10`:`bg-primary/10`}`), A(_, e)
        }, [() => ee(new Date, new Date(b(n)))]), h(e, o)
      }), D(n), h(e, n)
    },
    u = v(t, `open`, 15),
    f = C(!1),
    p = C(n([])),
    m = C(!1),
    _ = C(`pending`),
    y = C(!0),
    x = l(() => b(p).reduce((e, t) => (e[t.status].push(t), e), {
      pending: [],
      paid: [],
      refunded: [],
      rejected: []
    })),
    S = l(() => b(x)[b(_)]),
    w = l(() => H(b(S).map(e => e.grant)));
  async function E() {
    T(m, !0);
    try {
      let {
        purchases: e
      } = await B.listPlayPurchaseHistory();
      T(p, e, !0)
    } catch {
      T(p, [], !0)
    } finally {
      T(m, !1), K.markViewed()
    }
  }
  L(() => {
    u() && (T(_, `pending`), T(y, !0), E())
  });
  async function j() {
    return q.autoRecoverPendingPurchases()
  }
  let M = rt(async function() {
    try {
      if (T(f, !0), b(x).pending.length > 0) {
        let e = await B.verifyPendingPlayPurchases().then(({
          grants: e
        }) => H(e)).catch(() => []);
        if (e.length > 0) {
          await q.refresh(), await K.openCheckoutDialog(e);
          return
        }
      }
      await j(), await E()
    } finally {
      T(f, !1)
    }
  }, 100);

  function N(e) {
    return String(e).padStart(2, `0`)
  }

  function R(e, t) {
    return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
  }

  function ee(e, t) {
    let n = Math.floor((e.getTime() - t.getTime()) / 6e4),
      r = navigator.language;
    if (n < 1) return new Intl.RelativeTimeFormat(r, {
      numeric: `auto`
    }).format(0, `minute`);
    if (n < 60) return new Intl.RelativeTimeFormat(r, {
      numeric: `auto`
    }).format(-n, `minute`);
    if (R(e, t)) return `${G.payment_history_today()}, ${N(t.getHours())}:${N(t.getMinutes())}`;
    let i = new Date(e);
    return i.setDate(i.getDate() - 1), R(i, t) ? `${G.payment_history_yesterday()}, ${N(t.getHours())}:${N(t.getMinutes())}` : t.toLocaleDateString(r, {
      day: `2-digit`,
      month: `2-digit`
    }) + ` ${N(t.getHours())}:${N(t.getMinutes())}`
  }

  function z(e, t) {
    return e === `pending` ? t ? `bg-warning text-warning-content` : `bg-warning/15 text-warning` : t ? `bg-primary text-primary-content` : `bg-primary/10 text-base-content/70`
  }

  function te(e) {
    return e === `pending` ? {
      title: G.payment_history_empty_pending(),
      body: G.payment_history_empty_pending_body()
    } : e === `paid` ? {
      title: G.payment_history_empty_paid(),
      body: G.payment_history_empty_paid_body()
    } : e === `rejected` ? {
      title: G.payment_history_empty_rejected(),
      body: G.payment_history_empty_rejected_body()
    } : {
      title: G.payment_history_empty_refunded(),
      body: G.payment_history_empty_refunded_body()
    }
  }
  Q(e, {
    dialogClass: `!bg-black/80`,
    modalBoxClass: `max-w-md`,
    isDynamicHeight: !0,
    get open() {
      return u()
    },
    set open(e) {
      u(e)
    },
    header: e => {
      var t = lt(),
        n = F(t),
        i = F(n, !0);
      D(n);
      var a = r(n, 2),
        o = F(a, !0);
      D(a), D(t), P((e, t) => {
        A(i, e), A(o, t)
      }, [() => G.payment_history_eyebrow(), () => G.payment_history_title()]), h(e, t)
    },
    children: (e, t) => {
      var n = St(),
        o = F(n),
        u = F(o),
        g = F(u),
        v = F(g),
        C = F(v, !0);
      D(v);
      var E = r(v, 2),
        k = F(E),
        j = F(k),
        N = F(j);
      $(N, {
        class: `size-4.5 text-white`,
        inverted: !0
      }), D(j);
      var L = r(j, 2),
        R = F(L),
        ee = F(R, !0);
      D(R);
      var B = r(R, 2),
        V = F(B, !0);
      D(B), D(L), D(k);
      var H = r(k, 2),
        W = F(H),
        ne = F(W);
      le(ne, {
        class: `size-5`
      }), D(W);
      var re = r(W, 2),
        K = F(re),
        q = F(K, !0);
      D(K);
      var J = r(K, 2),
        ie = F(J, !0);
      D(J), D(re), D(H), D(E), D(g);
      var Q = r(g, 2),
        oe = F(Q),
        se = e => {
          var t = ut();
          h(e, t)
        },
        ue = e => {
          Y(e, {
            class: `size-4`
          })
        };
      i(oe, e => {
        b(f) ? e(se) : e(ue, -1)
      }), D(Q), D(u), D(o);
      var de = r(o, 2);
      a(de, 21, () => [{
        key: `pending`,
        label: G.payment_history_filter_pending(),
        count: b(x).pending.length
      }, {
        key: `paid`,
        label: G.payment_history_filter_paid(),
        count: b(x).paid.length
      }, {
        key: `refunded`,
        label: G.payment_history_filter_refunded(),
        count: b(x).refunded.length
      }, {
        key: `rejected`,
        label: G.payment_history_filter_rejected(),
        count: b(x).rejected.length
      }], e => e.key, (e, t) => {
        let n = l(() => b(_) === b(t).key);
        var a = pt(),
          o = F(a),
          s = F(o, !0);
        D(o);
        var u = r(o, 2),
          d = e => {
            var r = dt(),
              i = F(r, !0);
            D(r), P(e => {
              c(r, 1, `inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1.5 text-[10px] font-bold ${e??``}`), A(i, b(t).count)
            }, [() => z(b(t).key, b(n))]), h(e, r)
          };
        i(u, e => {
          b(t).count > 0 && e(d)
        });
        var f = r(u, 2),
          p = e => {
            var t = ft();
            h(e, t)
          };
        i(f, e => {
          b(n) && e(p)
        }), D(a), P(() => {
          c(a, 1, `relative flex flex-1 items-center justify-center gap-1.5 px-1.5 py-3.5 text-[13px] font-semibold transition-colors ${b(n)?`text-base-content`:`text-base-content/60 hover:text-base-content/80`}`), A(s, b(t).label)
        }), O(`click`, a, () => T(_, b(t).key, !0)), h(e, a)
      }), D(de);
      var fe = r(de, 2),
        pe = F(fe),
        me = e => {
          var t = mt();
          h(e, t)
        },
        he = e => {
          var t = gt(),
            n = d(t),
            o = F(n),
            c = F(o);
          ce(c, {
            class: `text-warning size-4 shrink-0`
          });
          var l = r(c, 2),
            u = F(l, !0);
          D(l);
          var f = r(l, 2),
            p = e => {
              ae(e, {
                class: `text-warning size-4`
              })
            },
            m = e => {
              X(e, {
                class: `text-warning size-4`
              })
            };
          i(f, e => {
            b(y) ? e(p) : e(m, -1)
          }), D(o);
          var g = r(o, 2),
            _ = e => {
              var t = ht(),
                n = F(t, !0);
              D(t), P(e => A(n, e), [() => G.payment_pending_subdescription()]), h(e, t)
            };
          i(g, e => {
            b(y) && e(_)
          }), D(n);
          var v = r(n, 2);
          s(v, () => b(S));
          var x = r(v, 2),
            C = F(x),
            E = F(C, !0);
          D(C);
          var k = r(C, 2);
          a(k, 21, () => b(w), e => e.currency, (e, t) => {
            it(e, () => b(t), () => `compact`)
          }), D(k), D(x), P((e, t) => {
            A(u, e), A(E, t)
          }, [() => G.payment_history_banner_title(), () => G.payment_history_total_pending()]), O(`click`, o, () => T(y, !b(y))), h(e, t)
        },
        ge = e => {
          var t = _t(),
            n = d(t);
          s(n, () => b(S));
          var i = r(n, 2),
            o = F(i),
            c = F(o, !0);
          D(o);
          var l = r(o, 2);
          a(l, 21, () => b(w), e => e.currency, (e, t) => {
            it(e, () => b(t), () => `compact`)
          }), D(l), D(i), P(e => A(c, e), [() => G.total()]), h(e, t)
        },
        _e = e => {
          let t = l(() => te(b(_)));
          var n = xt(),
            a = F(n),
            o = F(a),
            s = F(o),
            c = F(s);
          $(c, {
            class: `text-primary size-10`
          }), D(s), D(o);
          var u = r(o, 2),
            d = e => {
              var t = vt(),
                n = F(t);
              Y(n, {
                class: `size-5`
              }), D(t), h(e, t)
            },
            p = e => {
              var t = yt(),
                n = F(t);
              Z(n, {
                class: `size-4`
              }), D(t), h(e, t)
            };
          i(u, e => {
            b(_) === `refunded` ? e(d) : b(_) === `rejected` && e(p, 1)
          }), D(a);
          var m = r(a, 2),
            g = F(m, !0);
          D(m);
          var v = r(m, 2),
            y = F(v, !0);
          D(v);
          var x = r(v, 2),
            S = F(x),
            C = e => {
              var t = bt();
              h(e, t)
            },
            w = e => {
              Y(e, {
                class: `size-3.5`
              })
            };
          i(S, e => {
            b(f) ? e(C) : e(w, -1)
          });
          var T = r(S);
          D(x), D(n), P(e => {
            A(g, b(t).title), A(y, b(t).body), x.disabled = b(f), A(T, ` ${e??``}`)
          }, [() => G.payment_history_verify_again()]), O(`click`, x, M), h(e, n)
        };
      i(pe, e => {
        b(m) && b(p).length === 0 ? e(me) : b(_) === `pending` && b(S).length > 0 ? e(he, 1) : b(S).length > 0 ? e(ge, 2) : e(_e, -1)
      }), D(fe), D(n), P((e, t, n, r, i, a) => {
        A(C, e), A(ee, t), A(V, n), A(q, r), A(ie, i), I(Q, `aria-label`, a), Q.disabled = b(f)
      }, [() => G.payment_history_balance(), () => {
        var e;
        return (((e = U.data) == null ? void 0 : e.droplets) ?? 0).toLocaleString(navigator.language)
      }, () => G.droplets(), () => {
        var e;
        return (((e = U.data) == null ? void 0 : e.prism) ?? 0).toLocaleString(navigator.language)
      }, () => G.prism(), () => G.payment_history_verify_again()]), O(`click`, Q, M), h(e, n)
    },
    $$slots: {
      header: !0,
      default: !0
    }
  }), o()
}
N([`click`]);

function wt(e, t) {
  g(t, !0);
  let n = v(t, `open`, 15);
  Q(e, {
    isDynamicHeight: !0,
    hasCloseButton: !1,
    hasHeaderBorder: !1,
    dialogClass: `!bg-black/60`,
    modalBoxClass: `max-w-sm !bg-transparent !shadow-none`,
    contentAreaClass: `!p-0 justify-center`,
    get open() {
      return n()
    },
    set open(e) {
      n(e)
    },
    children: (e, r) => {
      {
        let r = l(() => G.payment_pending_title()),
          i = l(() => G.payment_pending_description()),
          a = l(() => ({
            label: G.payment_history_view(),
            arrow: !1,
            onClick: t.onViewHistory
          })),
          o = l(() => ({
            label: G.close(),
            onClick: () => n(!1)
          }));
        tt(e, {
          embedded: !0,
          variant: `warning`,
          get title() {
            return b(r)
          },
          get body() {
            return b(i)
          },
          get primary() {
            return b(a)
          },
          get secondary() {
            return b(o)
          }
        })
      }
    },
    $$slots: {
      default: !0
    }
  }), o()
}
var Tt = _(`<div class="my-auto w-full"><!></div>`);

function Et(e, t) {
  g(t, !0);
  let n = v(t, `open`, 15);
  Q(e, {
    isDynamicHeight: !0,
    hasCloseButton: !1,
    hasHeaderBorder: !1,
    dialogClass: `!bg-black/60`,
    modalBoxClass: `max-w-sm !bg-transparent !shadow-none`,
    contentAreaClass: `!p-0`,
    get open() {
      return n()
    },
    set open(e) {
      n(e)
    },
    children: (e, t) => {
      var n = Tt(),
        r = F(n);
      {
        let e = l(() => G.payment_processing_title()),
          t = l(() => G.payment_processing_description());
        tt(r, {
          embedded: !0,
          variant: `loading`,
          get title() {
            return b(e)
          },
          get body() {
            return b(t)
          },
          progress: !0
        })
      }
      D(n), h(e, n)
    },
    $$slots: {
      default: !0
    }
  }), o()
}
var Dt = _(`<div class="my-auto w-full"><!></div>`);

function Ot(e, t) {
  g(t, !0);
  let n = v(t, `open`, 15),
    r = v(t, `purchasedDroplets`, 3, null),
    i = v(t, `currency`, 3, `droplets`),
    a = typeof navigator < `u` ? navigator.language : `en-US`,
    s = e => e.toLocaleString(a),
    c = l(() => {
      var e, t;
      return i() === `prism` ? (e = U.data) == null ? void 0 : e.prism : (t = U.data) == null ? void 0 : t.droplets
    }),
    u = l(() => i() === `prism` ? G.prism() : G.droplets()),
    d = l(() => b(c) === void 0 ? void 0 : {
      rows: r() ? [{
        label: G.purchased(),
        value: `+${s(r())}`,
        color: `#22c55e`
      }] : [],
      total: {
        label: G.balance(),
        value: s(b(c))
      }
    });

  function f() {
    var e;
    n(!1), (e = t.onbacktostore) == null || e.call(t)
  }
  Q(e, {
    isDynamicHeight: !0,
    hasCloseButton: !1,
    hasHeaderBorder: !1,
    dialogClass: `!bg-black/60`,
    modalBoxClass: `max-w-sm !bg-transparent !shadow-none`,
    contentAreaClass: `!p-0`,
    get open() {
      return n()
    },
    set open(e) {
      n(e)
    },
    children: (e, t) => {
      var n = Dt(),
        i = F(n);
      {
        let e = l(() => G.payment_succeded()),
          t = l(() => r() ? `+${s(r())}` : void 0),
          n = l(() => r() ? b(u) : void 0),
          a = l(() => G.thank_you_for_your_support()),
          o = l(() => ({
            label: G.go_to_store(),
            color: `#3b6fe8`,
            colorDark: `#1f4fc8`,
            onClick: f
          }));
        tt(i, {
          embedded: !0,
          variant: `success`,
          get title() {
            return b(e)
          },
          get amount() {
            return b(t)
          },
          get amountLabel() {
            return b(n)
          },
          get body() {
            return b(a)
          },
          get receipt() {
            return b(d)
          },
          get primary() {
            return b(o)
          }
        })
      }
      D(n), h(e, n)
    },
    $$slots: {
      default: !0
    }
  }), o()
}
var kt = _(`<div class="my-auto w-full"><!></div>`);

function At(e, t) {
  g(t, !0);
  let n = v(t, `open`, 15);
  Q(e, {
    isDynamicHeight: !0,
    hasCloseButton: !1,
    hasHeaderBorder: !1,
    dialogClass: `!bg-black/60`,
    modalBoxClass: `max-w-sm !bg-transparent !shadow-none`,
    contentAreaClass: `!p-0`,
    get open() {
      return n()
    },
    set open(e) {
      n(e)
    },
    children: (e, r) => {
      var i = kt(),
        a = F(i);
      {
        let e = l(() => G.payment_incomplete()),
          r = l(() => G.payment_incomplete_description()),
          i = l(() => ({
            label: G.go_to_store(),
            color: `#3b6fe8`,
            colorDark: `#1f4fc8`,
            onClick: () => {
              var e;
              n(!1), (e = t.onbacktostore) == null || e.call(t)
            }
          }));
        tt(a, {
          embedded: !0,
          variant: `warning`,
          get title() {
            return b(e)
          },
          get body() {
            return b(r)
          },
          get primary() {
            return b(i)
          }
        })
      }
      D(i), h(e, i)
    },
    $$slots: {
      default: !0
    }
  }), o()
}

function jt(e, t) {
  g(t, !0);
  let n = v(t, `message`, 19, () => G.payment_play_unavailable_description()),
    r = v(t, `open`, 15);
  Q(e, {
    isDynamicHeight: !0,
    hasCloseButton: !1,
    hasHeaderBorder: !1,
    dialogClass: `!bg-black/60`,
    modalBoxClass: `max-w-sm !bg-transparent !shadow-none`,
    contentAreaClass: `!p-0 justify-center`,
    get open() {
      return r()
    },
    set open(e) {
      r(e)
    },
    children: (e, t) => {
      {
        let t = l(() => G.payment_play_unavailable_title()),
          i = l(() => ({
            label: G.close(),
            arrow: !1,
            onClick: () => r(!1)
          }));
        tt(e, {
          embedded: !0,
          variant: `error`,
          get title() {
            return b(t)
          },
          get body() {
            return n()
          },
          get primary() {
            return b(i)
          }
        })
      }
    },
    $$slots: {
      default: !0
    }
  }), o()
}
var Mt = _(`<div class="mt-32 flex justify-center"><div class="loading loading-spinner"></div></div>`),
  Nt = _(`<!> <div id="fsc-embedded-checkout-container"></div>`, 1);

function Pt(e, t) {
  g(t, !0);
  let n = C(!1);
  j(() => {
    var e;
    let r = window,
      i = !1,
      a, o, s = () => {
        var e;
        b(n) || (clearTimeout(o), T(n, !0), (e = t.oncomplete) == null || e.call(t, a))
      },
      c = () => {
        b(n) || o || (o = setTimeout(s, 5e3))
      },
      l = e => {
        let t = e == null ? void 0 : e.id;
        !a && typeof t == `string` && (a = t)
      };
    r.FSCEventCallback = e => {
      e === `FSC-purchaseComplete` && c()
    }, r.__fsp_wh__ = e => {
      l(e), (e == null ? void 0 : e.completed) !== !1 && a && s()
    }, r.__fsp_closed__ = e => {
      l(e), a && s()
    };
    let u = e => {
      var t, n, r;
      if (!e.data || typeof e.data != `object`) return;
      let i = (t = e.data) == null ? void 0 : t.fscPopupMessage;
      i && ((i == null ? void 0 : i.action) === `event` && (i == null || (n = i.eventData) == null ? void 0 : n.event) === `FSC-checkoutStep5` && localStorage.setItem(`fscBackFromCheckout`, `1`), i.action === `event` && ((r = i.eventData) == null ? void 0 : r.event) === `FSC-purchaseComplete` && c())
    };
    return window.addEventListener(`message`, u), (e = document.getElementById(`fsc-api`)) == null || e.remove(), delete r.fastspring, B.createFastspringSession(t.lookupKey).then(({
      sessionId: e,
      securePayload: t
    }) => {
      if (i) return;
      let n = document.createElement(`script`);
      n.id = `fsc-api`, n.src = `https://sbl.onfastspring.com/sbl/1.0.7/fastspring-builder.min.js`, n.setAttribute(`data-storefront`, `wplace.onfastspring.com/embedded-stacked`), n.setAttribute(`data-popup-webhook-received`, `__fsp_wh__`), n.setAttribute(`data-popup-closed`, `__fsp_closed__`), r.__fsp_err__ = (...e) => console.error(`FastSpring SBL error:`, ...e), n.setAttribute(`data-error-callback`, `__fsp_err__`), n.setAttribute(`data-access-key`, te), n.onload = () => {
        t ? r.fastspring.builder.secure(t, ``) : r.fastspring.builder.checkout(e)
      }, document.head.appendChild(n)
    }).catch(e => console.error(`FastSpring: could not create session`, e)), () => {
      var e;
      i = !0, clearTimeout(o), window.removeEventListener(`message`, u), delete r.FSCEventCallback, delete r.__fsp_wh__, delete r.__fsp_closed__, delete r.__fsp_err__, (e = document.getElementById(`fsc-api`)) == null || e.remove(), delete r.fastspring
    }
  });
  var a = Nt(),
    s = d(a),
    l = e => {
      var t = Mt();
      h(e, t)
    };
  i(s, e => {
    b(n) && e(l)
  });
  var u = r(s, 2);
  let f;
  P(() => f = c(u, 1, `relative`, null, f, {
    hidden: b(n)
  })), h(e, a), o()
}

function Ft(e) {
  "@babel/helpers - typeof";
  return Ft = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e) {
    return typeof e
  } : function(e) {
    return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e
  }, Ft(e)
}
var It = `clover`,
  Lt = function(e) {
    return e === 3 ? `v3` : e
  },
  Rt = `https://js.stripe.com`,
  zt = `${Rt}/${It}/stripe.js`,
  Bt = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
  Vt = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,
  Ht = `loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used`,
  Ut = function(e) {
    return Bt.test(e) || Vt.test(e)
  },
  Wt = function() {
    for (var e = document.querySelectorAll(`script[src^="${Rt}"]`), t = 0; t < e.length; t++) {
      var n = e[t];
      if (Ut(n.src)) return n
    }
    return null
  },
  Gt = function(e) {
    var t = e && !e.advancedFraudSignals ? `?advancedFraudSignals=false` : ``,
      n = document.createElement(`script`);
    n.src = `${zt}${t}`;
    var r = document.head || document.body;
    if (!r) throw Error(`Expected document.body not to be null. Stripe.js requires a <body> element.`);
    return r.appendChild(n), n
  },
  Kt = function(e, t) {
    !e || !e._registerWrapper || e._registerWrapper({
      name: `stripe-js`,
      version: `8.11.0`,
      startTime: t
    })
  },
  qt = null,
  Jt = null,
  Yt = null,
  Xt = function(e) {
    return function(t) {
      e(Error(`Failed to load Stripe.js`, {
        cause: t
      }))
    }
  },
  Zt = function(e, t) {
    return function() {
      window.Stripe ? e(window.Stripe) : t(Error(`Stripe.js not available`))
    }
  },
  Qt = function(e) {
    return qt === null ? (qt = new Promise(function(t, n) {
      if (typeof window > `u` || typeof document > `u`) {
        t(null);
        return
      }
      if (window.Stripe && e && console.warn(Ht), window.Stripe) {
        t(window.Stripe);
        return
      }
      try {
        var r = Wt();
        if (r && e) console.warn(Ht);
        else if (!r) r = Gt(e);
        else if (r && Yt !== null && Jt !== null) {
          var i;
          r.removeEventListener(`load`, Yt), r.removeEventListener(`error`, Jt), (i = r.parentNode) == null || i.removeChild(r), r = Gt(e)
        }
        Yt = Zt(t, n), Jt = Xt(n), r.addEventListener(`load`, Yt), r.addEventListener(`error`, Jt)
      } catch (e) {
        n(e);
        return
      }
    }), qt.catch(function(e) {
      return qt = null, Promise.reject(e)
    })) : qt
  },
  $t = function(e, t, n) {
    if (e === null) return null;
    var r = t[0];
    if (typeof r != `string`) throw Error(`Expected publishable key to be of type string, got type ${Ft(r)} instead.`);
    var i = r.match(/^pk_test/),
      a = Lt(e.version),
      o = It;
    i && a !== o && console.warn(`Stripe.js@${a} was loaded on the page, but @stripe/stripe-js@8.11.0 expected Stripe.js@${o}. This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning`);
    var s = e.apply(void 0, t);
    return Kt(s, n), s
  },
  en, tn = !1,
  nn = function() {
    return en || (en = Qt(null).catch(function(e) {
      return en = null, Promise.reject(e)
    }), en)
  };
Promise.resolve().then(function() {
  return nn()
}).catch(function(e) {
  tn || console.warn(e)
});
var rn = function() {
    var e = [...arguments];
    tn = !0;
    var t = Date.now();
    return nn().then(function(n) {
      return $t(n, e, t)
    })
  },
  an = _(`<div class="mt-32 flex justify-center"><div class="loading loading-spinner"></div></div>`),
  on = _(`<!> <div class="w-full"></div>`, 1);

function sn(e, t) {
  g(t, !0);
  let n, a, s = C(!1);
  j(async () => {
    let e;
    try {
      e = await Promise.race([rn(z), new Promise((e, t) => setTimeout(() => t(Error(`stripe-load-timeout`)), 8e3))])
    } catch {
      var r;
      (r = t.onUnavailable) == null || r.call(t);
      return
    }
    if (!e) {
      var i;
      (i = t.onUnavailable) == null || i.call(t);
      return
    }
    try {
      a = await e.initEmbeddedCheckout({
        fetchClientSecret: async () => t.clientSecret,
        onComplete: async () => {
          var e;
          a == null || a.destroy(), a = void 0, T(s, !0), (e = t.onComplete) == null || e.call(t)
        }
      }), a.mount(n)
    } catch {
      var o;
      (o = t.onUnavailable) == null || o.call(t)
    }
  }), E(() => {
    a == null || a.destroy(), a = void 0
  });
  var c = on(),
    l = d(c),
    u = e => {
      var t = an();
      h(e, t)
    };
  i(l, e => {
    b(s) && e(u)
  });
  var f = r(l, 2);
  S(f, e => n = e, () => n), h(e, c), o()
}
var cn = _(`<!> <h3 class="text-xl font-bold"> </h3> <div class="mr-2 ml-auto"><!></div>`, 1),
  ln = _(`<button class="btn btn-ghost btn-sm btn-circle"><!></button> <h3 class="text-xl font-bold"> </h3>`, 1),
  un = _(`<span class="loading loading-spinner loading-sm absolute"></span>`),
  dn = _(`<div class="bg-base-300 flex flex-col items-center justify-center rounded-xl p-6"><p class="text-primary text-3xl font-bold"><!> <span> <span class="text-lg font-normal"> </span></span></p> <p class="text-base-content/80 mt-0.5 text-center text-xs"><!> <span class="text-primary/80 font-medium"> </span></p> <button class="btn btn-lg btn-primary relative mt-3 h-10"><!> <span><!></span></button></div>`),
  fn = _(`<div class="mt-2 text-center"><button class="link text-sm font-medium"> </button></div>`),
  pn = _(`<p class="text-base-content/80 mb-4 text-sm"> </p> <div class="grid gap-3 sm:grid-cols-2"><!> <!> <!> <!> <!> <!></div> <p class="text-base-content/60 mt-4 text-center text-sm"> <a class="font-medium" target="_blank"> </a></p> <!>`, 1),
  mn = _(`<div class="flex flex-col gap-4 px-6 pt-6 pb-2"><div class="bg-base-200 flex rounded-2xl p-1"><button><svg viewBox="0 0 750 471" xmlns="http://www.w3.org/2000/svg" aria-label="Visa"><rect width="750" height="471" rx="40" fill="#1a1f71"></rect><path d="M278 334L311 138h51L329 334h-51zM524 142c-10-4-26-8-46-8-51 0-87 27-87 65-1 28 25 44 45 53 20 10 27 16 27 25-1 13-16 19-31 19-21 0-32-3-49-10l-7-3-7 44c12 5 33 10 56 10 54 0 89-27 89-68 0-22-14-39-44-53-18-9-30-15-30-24 0-8 10-17 31-17 17 0 30 4 40 8l5 2 7-43zM614 138h-40c-12 0-21 4-27 16l-77 180h54l11-30h66l6 30h48l-41-196zm-63 127l20-54 10-30 5 27 18 57h-53zM230 138l-50 133-5-27c-10-32-40-66-74-83l46 173h55l82-196h-54z" fill="#fff"></path><path d="M131 138H48l-1 4c65 17 108 56 126 103l-18-91c-3-12-12-16-24-16z" fill="#f9a533"></path></svg> <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" aria-label="Mastercard"><rect width="38" height="24" rx="4" fill="#252525"></rect><circle cx="15" cy="12" r="7" fill="#eb001b"></circle><circle cx="23" cy="12" r="7" fill="#f79e1b"></circle><path d="M19 6.8a7 7 0 0 1 0 10.4A7 7 0 0 1 19 6.8z" fill="#ff5f00"></path></svg> </button> <button> </button></div></div>`),
  hn = _(`<div class="flex h-40 items-center justify-center"><span class="loading loading-spinner loading-lg"></span></div>`),
  gn = _(`<div><!></div>`),
  _n = _(`<!> <div class="mt-4"><!> <!></div>`, 1),
  vn = _(`<div><!></div> <!> <!> <!> <!> <!> <!> <!>`, 1);

function yn(e, t) {
  g(t, !0);
  let n = v(t, `open`, 15),
    a = C(`products`),
    s = C(!1),
    u = C(0),
    f = C(`droplets`),
    _ = C(!1),
    y = C(!1),
    S = C(!1),
    E = C(null),
    k = C(null),
    M = C(null),
    N = l(() => {
      var e;
      return ((e = U.data) == null || (e = e.country) == null ? void 0 : e.toUpperCase()) === `MX`
    }),
    R = l(() => {
      var e;
      return ((e = U.data) == null || (e = e.country) == null ? void 0 : e.toUpperCase()) === `BR`
    }),
    z = C(!1),
    te = C(!1),
    H = C(!1);

  function re() {
    T(z, q.isTWA(), !0), T(te, q.isTWALoaded(), !0), T(H, q.playBillingBlocked, !0)
  }
  let J = C(!1),
    Y = C(!1),
    ae = C(``);
  j(async () => {
    try {
      await q.loadMapSKUs()
    } finally {
      re()
    }
  });
  let X = C(`stripe`),
    Z = C(!1);
  L(() => {
    b(X) === `other` && T(Z, !0)
  });
  let oe = C(!1);

  function se() {
    T(oe, !0), T(Z, !0), T(X, `other`)
  }
  let ce = l(() => U.data ? U.data.id % 2 == 0 : !1),
    le = l(() => b(oe) || b(ce));
  j(() => {
    if (localStorage.getItem(`fscBackFromCheckout`)) {
      localStorage.removeItem(`fscBackFromCheckout`);
      let e = localStorage.getItem(`wplace_fs_currency`) === `prism` ? `prism` : `droplets`,
        t = Number(localStorage.getItem(e === `prism` ? `wplace_fs_prism` : `wplace_fs_droplets`)) || 0;
      history.replaceState({}, ``, window.location.pathname), T(f, e, !0), T(S, !0), de(t)
    }
  });
  let ue = null;
  async function de(e) {
    let t = {
      cancelled: !1
    };
    ue = t, T(S, !0);
    for (let n = 0; n < 2; n++) {
      if (n !== 0 && await new Promise(e => setTimeout(e, 2e3)), t.cancelled) {
        T(S, !1);
        return
      }
      try {
        let n = await B.getLastFastspringOrder();
        if (!n) continue;
        if (!n.read) {
          if (t.cancelled) {
            T(S, !1);
            return
          }
          T(S, !1), T(y, !1), T(u, e, !0), T(_, !0), await U.refresh(), await B.markFastspringOrderAsRead(n.id);
          return
        }
      } catch {}
    }
    T(S, !1), t.cancelled || T(y, !0)
  }
  async function fe(e) {
    if (ue && (ue.cancelled = !0), T(E, e, !0), T(f, `droplets`), localStorage.setItem(`wplace_fs_currency`, `droplets`), localStorage.setItem(`wplace_fs_droplets`, String(e.droplets + e.bonus)), b(le)) {
      T(X, `other`), T(Z, !0), T(a, `checkout`);
      return
    }
    T(X, `stripe`), T(s, !0);
    try {
      await (async e => {
        T(k, e.clientSecret, !0), T(M, e.sessionId, !0)
      })(await B.createEmbeddedCheckout(e.stripeLookupkey)), T(a, `checkout`)
    } catch (e) {
      V.error(e.message ?? `Unexpected error`)
    } finally {
      T(s, !1)
    }
  }

  function pe() {
    T(a, `products`), T(E, null), T(k, null), T(M, null), localStorage.removeItem(`wplace_fs_droplets`), localStorage.removeItem(`wplace_fs_currency`)
  }

  function me() {
    pe(), n(!1), T(J, !0)
  }
  async function ge() {
    let e = b(E).droplets + b(E).bonus,
      t = b(M),
      r = !1;
    if (t) {
      try {
        ({
          credited: r
        } = await B.refreshStripeSession(t))
      } catch {
        r = !1
      }
      await U.refresh()
    }
    if (!r) {
      me();
      return
    }
    pe(), n(!1), T(u, e), T(_, !0)
  }
  async function _e(e) {
    if (b(s)) return;
    T(s, !0), ne();
    let t = !1,
      n = ``;
    try {
      var r;
      let i = await q.createPayment(e);
      t = !0, n = i == null || (r = i.out) == null ? void 0 : r.details.purchaseToken, await i.verify()
    } catch (r) {
      if (t) {
        T(S, !0);
        let t = await ye(n, t => q.verifyBySKU({
          sku: e,
          token: t
        }));
        switch (T(S, !1), t.status) {
          case `accepted`:
            K.openCheckoutDialog({
              currency: `droplets`,
              amount: t.amount
            });
            break;
          case `declined`:
            T(ae, e, !0), T(Y, !0);
            break;
          default:
            T(J, !0)
        }
      } else {
        let e = (r == null ? void 0 : r.message) ?? ``;
        /abort|cancel/i.test(e) || V.error(e || G.unexpected_server_error())
      }
    } finally {
      T(s, !1)
    }
  }
  let ve = e => new Promise(t => setTimeout(t, e));
  async function ye(e, t) {
    if (!e) return {
      status: `declined`,
      amount: 0
    };
    let n = Date.now();
    for (;;) {
      let r = null;
      try {
        r = await B.getPlayClaimStatus(e)
      } catch {}
      if ((r == null ? void 0 : r.status) === `processed`) return await U.refresh(), {
        status: `accepted`,
        amount: r.grant.amount
      };
      if ((r == null ? void 0 : r.status) === `rejected`) return {
        status: `declined`,
        amount: 0
      };
      if ((r == null ? void 0 : r.status) === `unknown`) try {
        let {
          grant: n
        } = await t(e);
        return await U.refresh(), {
          status: `accepted`,
          amount: n.amount
        }
      } catch {}
      if ((Date.now() - n) / 1e3 > q.POOLING_TIME) return {
        status: `pending`,
        amount: 0
      };
      await ve(1500)
    }
  }
  var be = vn(),
    xe = d(be),
    Se = F(xe);
  {
    let e = e => {
        var t = m(),
          n = d(t),
          o = e => {
            var t = cn(),
              n = d(t);
            $(n, {
              class: `text-primary size-5`
            });
            var i = r(n, 2),
              a = F(i, !0);
            D(i);
            var o = r(i, 2),
              s = F(o);
            {
              let e = l(() => U.data.droplets ?? 0);
              he(s, {
                get value() {
                  return b(e)
                },
                button: !1
              })
            }
            D(o), P(e => A(a, e), [() => G.droplets()]), h(e, t)
          },
          s = e => {
            var t = ln(),
              n = d(t),
              i = F(n);
            ie(i, {
              class: `size-5`
            }), D(n);
            var a = r(n, 2),
              o = F(a, !0);
            D(a), P(e => A(o, e), [() => G.payment()]), O(`click`, n, pe), h(e, t)
          };
        i(n, e => {
          b(a) === `products` && U.data ? e(o) : b(a) === `checkout` && b(E) && e(s, 1)
        }), h(e, t)
      },
      t = l(() => b(a) === `products` ? `max-w-2xl` : `max-w-5xl max-h-[min(91.6vh,57rem)]`),
      o = l(() => b(a) === `checkout` ? `px-0 sm:px-0 pt-0 pb-4` : ``),
      f = l(() => b(a) === `products`),
      g = l(() => b(a) !== `checkout`),
      v = l(() => b(a) === `checkout`),
      y = l(() => b(a) === `products`);
    Q(Se, {
      dialogClass: `bg-black/90!`,
      get modalBoxClass() {
        return b(t)
      },
      get contentAreaClass() {
        return b(o)
      },
      get isDynamicHeight() {
        return b(f)
      },
      hasCloseButton: !0,
      get hasHeaderBorder() {
        return b(g)
      },
      get disableCloseAnimation() {
        return b(v)
      },
      get hasBackdrop() {
        return b(y)
      },
      onclose: () => {
        setTimeout(() => {
          T(a, `products`), T(E, null), T(k, null), T(M, null), T(X, `stripe`), T(Z, !1)
        }, 100)
      },
      get open() {
        return n()
      },
      set open(e) {
        n(e)
      },
      header: e,
      children: (e, t) => {
        var o = m(),
          l = d(o),
          f = e => {
            var t = m(),
              o = d(t),
              l = e => {
                let t = (e, t) => {
                  let n = () => t == null ? void 0 : t().droplets,
                    a = () => t == null ? void 0 : t().bonus,
                    o = () => t == null ? void 0 : t().price,
                    l = () => t == null ? void 0 : t().stripeLookupkey,
                    u = () => t == null ? void 0 : t().productId;
                  var f = dn(),
                    g = F(f),
                    _ = F(g);
                  $(_, {
                    class: `mb-1 inline size-7`
                  });
                  var v = r(_, 2),
                    y = F(v),
                    S = r(y),
                    C = F(S, !0);
                  D(S), D(v), D(g);
                  var w = r(g, 2),
                    T = F(w),
                    k = e => {
                      var t = x();
                      P((e, n) => A(t, `${e??``} ${n??``}`), [() => n().toLocaleString(navigator.language), () => G.droplets()]), h(e, t)
                    };
                  i(T, e => {
                    a() && e(k)
                  });
                  var j = r(T, 2),
                    M = F(j);
                  D(j), D(w);
                  var I = r(w, 2),
                    L = F(I),
                    ee = e => {
                      var t = un();
                      h(e, t)
                    };
                  i(L, e => {
                    var t;
                    b(s) && (b(z) || ((t = b(E)) == null ? void 0 : t.stripeLookupkey) === l()) && e(ee)
                  });
                  var B = r(L, 2);
                  let V;
                  var U = F(B),
                    W = e => {
                      var t = m(),
                        n = d(t);
                      p(n, () => b(te), e => {
                        var t = x();
                        P(e => A(t, e), [() => q.printPriceBySKU(l())]), h(e, t)
                      }), h(e, t)
                    },
                    ne = e => {
                      var t = x();
                      P(e => A(t, `MX$${e??``}`), [() => (o() * 18).toFixed(2)]), h(e, t)
                    },
                    K = e => {
                      var t = x();
                      P(e => A(t, `R$${e??``}`), [() => (o() * 4).toFixed(2).replace(`.`, `,`)]), h(e, t)
                    },
                    J = e => {
                      var t = x();
                      P(e => A(t, `$${e??``}`), [() => o().toFixed(2)]), h(e, t)
                    };
                  i(U, e => {
                    b(z) ? e(W) : b(N) ? e(ne, 1) : b(R) ? e(K, 2) : e(J, -1)
                  }), D(B), D(I), D(f), P((e, t, n, r) => {
                    var i;
                    A(y, `${e??``} `), A(C, t), A(M, `+${n??``}
								${r??``}`), I.disabled = b(s) || b(H), V = c(B, 1, ``, null, V, {
                      "opacity-0": b(s) && (b(z) || ((i = b(E)) == null ? void 0 : i.stripeLookupkey) === l())
                    })
                  }, [() => (n() + a()).toLocaleString(navigator.language), () => G.droplets(), () => a().toLocaleString(navigator.language), () => G.bonus()]), O(`click`, I, async () => {
                    b(z) && await _e(l()), (!b(z) || q.forceTWA.current === !1) && fe({
                      price: o(),
                      droplets: n(),
                      bonus: a(),
                      stripeLookupkey: l(),
                      productId: u()
                    }), re()
                  }), h(e, f)
                };
                var n = pn(),
                  a = d(n),
                  o = F(a, !0);
                D(a);
                var l = r(a, 2),
                  u = F(l);
                t(u, () => ({
                  price: 5,
                  droplets: 25e3,
                  bonus: 0,
                  stripeLookupkey: `droplets_5`,
                  productId: 10,
                  dropdownClass: `dropdown-center`
                }));
                var f = r(u, 2);
                t(f, () => ({
                  price: 15,
                  droplets: 75e3,
                  bonus: 3750,
                  stripeLookupkey: `droplets_15`,
                  productId: 20,
                  dropdownClass: `dropdown-center`
                }));
                var g = r(f, 2);
                t(g, () => ({
                  price: 30,
                  droplets: 15e4,
                  bonus: 15e3,
                  stripeLookupkey: `droplets_30`,
                  productId: 30,
                  dropdownClass: `dropdown-center`
                }));
                var _ = r(g, 2);
                t(_, () => ({
                  price: 50,
                  droplets: 25e4,
                  bonus: 37500,
                  stripeLookupkey: `droplets_50`,
                  productId: 40,
                  dropdownClass: `dropdown-center`
                }));
                var v = r(_, 2);
                t(v, () => ({
                  price: 75,
                  droplets: 375e3,
                  bonus: 75e3,
                  stripeLookupkey: `droplets_75`,
                  productId: 50,
                  dropdownClass: `dropdown-center`
                })), t(r(v, 2), () => ({
                  price: 100,
                  droplets: 5e5,
                  bonus: 125e3,
                  stripeLookupkey: `droplets_100`,
                  productId: 60,
                  dropdownClass: `max-sm:dropdown-top dropdown-center`
                })), D(l);
                var y = r(l, 2),
                  S = F(y),
                  C = r(S),
                  w = F(C, !0);
                D(C), D(y);
                var T = r(y, 2),
                  k = e => {
                    var t = fn(),
                      n = F(t),
                      r = F(n, !0);
                    D(n), D(t), P(e => A(r, e), [() => G.payment_history_view()]), O(`click`, n, () => W.pendingHistoryDialogOpen = !0), h(e, t)
                  };
                i(T, e => {
                  b(z) && e(k)
                }), P((e, t, n, r) => {
                  A(o, e), A(S, `${t??``} `), I(C, `href`, n), A(w, r)
                }, [() => G.you_gain_droplet_per_pixel_painted(), () => G.refund_request_footnote(), () => ee(), () => G.refund_policy()]), h(e, n)
              },
              f = e => {
                var t = _n(),
                  a = d(t),
                  o = e => {
                    var t = mn(),
                      n = F(t),
                      i = F(n),
                      a = F(i),
                      o = r(a, 2),
                      s = r(o);
                    D(i);
                    var l = r(i, 2),
                      u = F(l, !0);
                    D(l), D(n), D(t), P((e, t) => {
                      c(i, 1, `group flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all ${b(X)===`stripe`?`dark:bg-base-100 bg-white text-[#635bff] shadow-sm`:`text-base-content/50 hover:text-base-content/80`}`), c(a, 0, `hidden w-auto transition-all sm:block sm:h-4 ${b(X)===`stripe`?``:`grayscale group-hover:grayscale-0`}`), c(o, 0, `hidden w-auto transition-all sm:block sm:h-4 ${b(X)===`stripe`?``:`grayscale group-hover:grayscale-0`}`), A(s, ` ${e??``}`), c(l, 1, `flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all ${b(X)===`other`?`dark:bg-base-100 bg-white text-[#30313d] shadow-sm`:`text-base-content/50 hover:text-base-content/80`}`), A(u, t)
                    }, [() => G.card(), () => G.other_methods()]), O(`click`, i, () => T(X, `stripe`)), O(`click`, l, () => T(X, `other`)), h(e, t)
                  };
                i(a, e => {
                  b(le) || e(o)
                });
                var s = r(a, 2),
                  l = F(s),
                  f = e => {
                    var t = gn(),
                      n = F(t),
                      r = e => {
                        sn(e, {
                          get clientSecret() {
                            return b(k)
                          },
                          onComplete: ge,
                          onUnavailable: se
                        })
                      },
                      a = e => {
                        var t = hn();
                        h(e, t)
                      };
                    i(n, e => {
                      b(k) ? e(r) : e(a, -1)
                    }), D(t), P(() => c(t, 1, w(b(X) === `stripe` ? `` : `h-0 overflow-hidden`))), h(e, t)
                  };
                i(l, e => {
                  b(le) || e(f)
                });
                var p = r(l, 2),
                  m = e => {
                    var t = gn();
                    Pt(F(t), {
                      get lookupKey() {
                        return b(E).stripeLookupkey
                      },
                      oncomplete: async e => {
                        if (!e) {
                          me();
                          return
                        }
                        try {
                          let t = b(E).droplets + b(E).bonus,
                            {
                              credited: r,
                              orderId: i,
                              grant: a
                            } = await B.refreshFastspringOrder(e);
                          if (!r) {
                            me();
                            return
                          }(a == null ? void 0 : a.currency) === `droplets` && (t = a.amount), await U.refresh(), i && await B.markFastspringOrderAsRead(i), localStorage.removeItem(`fscBackFromCheckout`), pe(), n(!1), T(u, t, !0), T(_, !0)
                        } catch {
                          V.warning(G.payment_refresh_error())
                        }
                      }
                    }), D(t), P(() => c(t, 1, w(b(X) === `other` ? `` : `h-0 overflow-hidden`))), h(e, t)
                  };
                i(p, e => {
                  b(Z) && e(m)
                }), D(s), h(e, t)
              };
            i(o, e => {
              b(a) === `products` ? e(l) : b(a) === `checkout` && b(E) && e(f, 1)
            }), h(e, t)
          };
        i(l, e => {
          U.data && e(f)
        }), h(e, o)
      },
      $$slots: {
        header: !0,
        default: !0
      }
    })
  }
  D(xe);
  var Ce = r(xe, 2);
  Ot(Ce, {
    get purchasedDroplets() {
      return b(u)
    },
    get currency() {
      return b(f)
    },
    onbacktostore: () => n(!1),
    get open() {
      return b(_)
    },
    set open(e) {
      T(_, e, !0)
    }
  });
  var we = r(Ce, 2);
  At(we, {
    onbacktostore: () => n(!0),
    get open() {
      return b(y)
    },
    set open(e) {
      T(y, e, !0)
    }
  });
  var Te = r(we, 2);
  Et(Te, {
    get open() {
      return b(S)
    },
    set open(e) {
      T(S, e, !0)
    }
  });
  var Ee = r(Te, 2);
  wt(Ee, {
    onViewHistory: () => {
      T(J, !1), W.pendingHistoryDialogOpen = !0
    },
    get open() {
      return b(J)
    },
    set open(e) {
      T(J, e, !0)
    }
  });
  var De = r(Ee, 2);
  nt(De, {
    onRetry: () => {
      T(Y, !1), _e(b(ae))
    },
    get open() {
      return b(Y)
    },
    set open(e) {
      T(Y, e, !0)
    }
  });
  var Oe = r(De, 2);
  Ct(Oe, {
    get open() {
      return W.pendingHistoryDialogOpen
    },
    set open(e) {
      W.pendingHistoryDialogOpen = e
    }
  });
  var ke = r(Oe, 2);
  p(ke, () => b(H), e => {
    {
      let t = l(() => {
        var e;
        return (e = q.playBillingBlockedError) == null ? void 0 : e.printError
      });
      jt(e, {
        get message() {
          return b(t)
        },
        get open() {
          return b(H)
        },
        set open(e) {
          T(H, e, !0)
        }
      })
    }
  }), P(() => I(xe, `data-theme`, b(a) === `checkout` ? `custom-winter` : void 0)), h(e, be), o()
}
N([`click`]);

function bn([e, t], [n, r]) {
  e = Math.floor(e), t = Math.floor(t), n = Math.floor(n), r = Math.floor(r);
  let i = [],
    a = Math.abs(n - e),
    o = Math.abs(r - t),
    s = e < n ? 1 : -1,
    c = t < r ? 1 : -1,
    l = a - o,
    u = e,
    d = t;
  for (; i.push([u, d]), u !== n || d !== r;) {
    let e = 2 * l;
    e > -o && (l -= o, u += s), e < a && (l += a, d += c)
  }
  return i
}
var xn = _(`<img class="pixelated bg-base-200" alt="User profile"/>`),
  Sn = _(`<img alt="Profile frame" class="pixelated center-absolute pointer-events-none absolute z-10 aspect-square max-w-none"/>`),
  Cn = _(`<div class="relative isolate w-max"><div class="bg-base-content/20 size-12 rounded-full"></div> <div class="level-fill center-absolute absolute size-12 rotate-[215deg] rounded-full svelte-12f880g"></div> <div class="avatar center-absolute absolute"><div class="size-10 rounded-full"><!></div></div> <!> <div> </div></div>`);

function wn(e, n) {
  let a = l(() => n.level % 1 * 360);
  var o = Cn(),
    s = r(F(o), 2),
    u = r(s, 2),
    d = F(u),
    f = F(d),
    p = e => {
      oe(e, {
        get userId() {
          return n.userId
        },
        get seed() {
          return n.avatarSeed
        }
      })
    },
    m = e => {
      var t = xn();
      P(() => I(t, `src`, n.pictureUrl)), h(e, t)
    };
  i(f, e => {
    n.pictureUrl ? e(m, -1) : e(p)
  }), D(d), D(u);
  var g = r(u, 2),
    _ = e => {
      var r = Sn();
      t(r, `width: 67.87878787878788px;`), P(() => I(r, `src`, n.frameUrl)), h(e, r)
    };
  i(g, e => {
    n.frameUrl && e(_)
  });
  var v = r(g, 2);
  let y;
  var x = F(v, !0);
  D(v), D(o), P(e => {
    t(s, `--angle: ${b(a)??``}deg; --color: var(--color-secondary)`), y = c(v, 1, `text-primary-content bg-secondary absolute bottom-0 z-20 flex items-center justify-center rounded-full px-[5px] py-0 text-xs font-bold`, null, y, {
      "left-0": n.level > 99,
      "-left-1": n.level > 99
    }), A(x, e)
  }, [() => Math.floor(n.level)]), h(e, o)
}
export {
  Pt as a, Et as c, nt as d, he as f, sn as i, wt as l, bn as n, jt as o, ue as p, yn as r, Ot as s, wn as t, rt as u
};