import "./Bzak7iHL.js";
import {
  o as kt,
  a as ma
} from "./D68Ns86n.js";
import {
  k as Ct,
  p as Re,
  l as Ke,
  f as ve,
  a as i,
  b as je,
  d as r,
  r as a,
  m as Le,
  c as p,
  s as n,
  n as Zt,
  t as I,
  i as t,
  w as Be,
  u as D,
  o as it,
  y as zt,
  e as $,
  g as ba,
  h as c,
  z as $t,
  ai as ya,
  bP as xa
} from "./D5GL_E7i.js";
import {
  s as x
} from "./BATewRf7.js";
import {
  i as P
} from "./unjGrhDm.js";
import {
  k as Gt
} from "./BSqwrFfw.js";
import {
  s as Oe,
  a as Ae,
  b as tt,
  c as Kt
} from "./Ce1mtF2R.js";
import {
  p as Pe
} from "./LT-XNHCk.js";
import {
  g as _t,
  u as ye,
  a as Ge,
  m as Vt,
  t as Dt
} from "./CT6bOf-I.js";
import {
  a as wa,
  u as ka
} from "./CwG1zf2_.js";
import {
  a as ze,
  T as Et
} from "./B49yUQkc.js";
import {
  r as Ca
} from "./VBpCGu7-.js";
import {
  D as at
} from "./DeqNqtry.js";
import {
  A as Sa
} from "./DbWKmSLt.js";
import {
  D as lt
} from "./XfM3qyVN.js";
import {
  r as Nt
} from "./Doxze0Iw.js";
import {
  l as qa
} from "./B_Oz03f8.js";
import {
  s as Jt
} from "./BMTVjKyu.js";
import {
  e as ot,
  i as Xt
} from "./Clrj6tX0.js";
import {
  m as f
} from "./XL5Wf48w.js";
import {
  C as Aa
} from "./lC2jQGp7.js";
import {
  I as La
} from "./DUdOWnGA.js";
import {
  P as Mt
} from "./CJr-euBW.js";
import {
  R as Bt
} from "./C1nh0WCK.js";
import {
  U as Pa
} from "./BjJ3k5vh.js";
import {
  U as Da
} from "./DIU-rKtX.js";
import {
  c as Ba,
  d as Ia
} from "./D5blgKZB.js";
import {
  b as Ea
} from "./59dp7Pbq.js";
import {
  A as Ma
} from "./D4Cpnjo6.js";
import {
  a as za
} from "./DVUNSmMz.js";
const sn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAAXNSR0IArs4c6QAAACpJREFUeNpj+AsEZ86ASIa/DAwMZ84ACRDzDBigMs/AARITq1oUwxBWAADaREUdDMswKwAAAABJRU5ErkJggg==";
var Ra = p('<span class="btn btn-xs btn-circle btn-primary ml-0.5 size-5"><!></span>'),
  ja = p('<span class="flex items-center gap-1"><!> <span class="text-primary text-base font-semibold"> <span class="text-xs max-lg:hidden">Droplets</span></span> <!></span>'),
  Ta = p('<button class="badge badge-lg border-base-content/10 right-tooltip cursor-pointer border-2 pr-1 pl-1"><!></button>'),
  Ua = p('<span class="badge badge-lg border-base-content/10 right-tooltip border-2 pr-2 pl-1"><!></span>');

function Fa(v, e) {
  Re(e, !0);
  const o = k => {
    var u = ja(),
      m = r(u);
    lt(m, {
      class: "text-primary size-4.5"
    });
    var B = n(m, 2),
      z = r(B);
    Zt(), a(B);
    var R = n(B, 2);
    {
      var H = h => {
        var K = Ra(),
          X = r(K);
        Sa(X, {
          class: "size-4"
        }), a(K), i(h, K)
      };
      P(R, h => {
        s() && h(H)
      })
    }
    a(u), I(h => x(z, `${h??""} `), [() => e.value.toLocaleString(navigator.language)]), i(k, u)
  };
  let s = Pe(e, "button", 3, !0);
  var l = Ke(),
    _ = ve(l);
  {
    var L = k => {
        var u = Ta(),
          m = r(u);
        o(m), a(u), Le("click", u, () => {
          _t.dropletsDialogOpen = !0
        }), i(k, u)
      },
      w = k => {
        var u = Ua(),
          m = r(u);
        o(m), a(u), i(k, u)
      };
    P(_, k => {
      s() ? k(L) : k(w, -1)
    })
  }
  i(v, l), je()
}
Ct(["click"]);
const bt = v => {
    var e = gr();
    i(v, e)
  },
  Ha = v => {
    var e = _r();
    i(v, e)
  },
  Oa = v => {
    var e = mr();
    i(v, e)
  },
  Wa = {
    success: {
      accent: "#22c55e",
      accentDark: "#16a34a",
      accentShadow: "rgba(34,197,94,0.45)",
      titleColor: "#16a34a"
    },
    error: {
      accent: "#ef4444",
      accentDark: "#b91c1c",
      accentShadow: "rgba(239,68,68,0.45)",
      titleColor: "#b91c1c"
    },
    warning: {
      accent: "#f59e0b",
      accentDark: "#b45309",
      accentShadow: "rgba(245,158,11,0.45)",
      titleColor: "#b45309"
    },
    info: {
      accent: "#3b6fe8",
      accentDark: "#1f4fc8",
      accentShadow: "rgba(59,111,232,0.45)",
      titleColor: "#1f4fc8"
    },
    reward: {
      accent: "#a855f7",
      accentDark: "#7e22ce",
      accentShadow: "rgba(168,85,247,0.5)",
      titleColor: "#7e22ce"
    },
    question: {
      accent: "#3b6fe8",
      accentDark: "#1f4fc8",
      accentShadow: "rgba(59,111,232,0.45)",
      titleColor: "#0f1b4c"
    },
    confirmation: {
      accent: "#3b6fe8",
      accentDark: "#1f4fc8",
      accentShadow: "rgba(59,111,232,0.45)",
      titleColor: "#0f1b4c"
    },
    loading: {
      accent: "#3b6fe8",
      accentDark: "#1f4fc8",
      accentShadow: "rgba(59,111,232,0.45)",
      titleColor: "#0f1b4c"
    },
    empty: {
      accent: "#64748b",
      accentDark: "#334155",
      accentShadow: "rgba(100,116,139,0.4)",
      titleColor: "#334155"
    }
  },
  ea = 38,
  ta = 32,
  Ga = (v, e) => {
    const o = (Math.sin(v * 12.9898 + e * 78.233) * 43758.5453 % 1 + 1) % 1,
      s = (l, _, L) => Math.sqrt((v - l) ** 2 + (e - _) ** 2) < L + (o - .5) * 2;
    return s(6, 8, 5) || s(14, 14, 6) || s(26, 10, 7) || s(28, 22, 5) || s(18, 24, 3)
  },
  aa = [];
for (let v = 0; v < ta; v++)
  for (let e = 0; e < ea; e++) Ga(e, v) && aa.push({
    x: e,
    y: v
  });
var Ka = p('<span class="wp-dots svelte-ifq4hh" aria-hidden="true"><span class="svelte-ifq4hh"></span><span class="svelte-ifq4hh"></span><span class="svelte-ifq4hh"></span></span>'),
  Va = p('<div class="wp-amount-label svelte-ifq4hh"> </div>'),
  Na = p('<div class="svelte-ifq4hh"><div class="wp-amount tabular-nums svelte-ifq4hh"> </div> <!></div>'),
  Ja = p('<p class="wp-body svelte-ifq4hh"><!></p>'),
  Xa = p('<li class="svelte-ifq4hh"><span class="wp-bullet-row svelte-ifq4hh"><span class="wp-bullet-label svelte-ifq4hh"> </span> <span class="wp-bullet-value tabular-nums svelte-ifq4hh"><!> </span></span></li>'),
  Ya = p('<ul class="wp-bullets svelte-ifq4hh"></ul>'),
  Qa = p('<div class="wp-receipt-row svelte-ifq4hh"><span class="svelte-ifq4hh"> </span> <strong class="svelte-ifq4hh"> </strong></div>'),
  Za = p('<div class="wp-receipt-divider svelte-ifq4hh"></div> <div class="wp-receipt-row wp-receipt-total svelte-ifq4hh"><span class="svelte-ifq4hh"> </span> <span class="v svelte-ifq4hh"> </span></div>', 1),
  $a = p('<div class="wp-receipt svelte-ifq4hh"><!> <!></div>'),
  er = p('<div class="wp-progress svelte-ifq4hh" aria-hidden="true"></div>'),
  tr = p('<div class="wp-meta svelte-ifq4hh"><!></div>'),
  ar = p('<div class="wp-btn-row svelte-ifq4hh"><button class="wp-cta wp-cta-ghost focus:outline-none svelte-ifq4hh" type="button"> </button> <button class="wp-cta focus:outline-none svelte-ifq4hh" type="button"> </button></div>'),
  rr = p('<button class="wp-cta focus:outline-none svelte-ifq4hh" type="button"><span class="svelte-ifq4hh"> </span> <!></button>'),
  sr = p('<button class="wp-cta wp-cta-ghost svelte-ifq4hh" type="button"> </button>'),
  nr = p('<a class="wp-ghost-link svelte-ifq4hh"> </a>'),
  ir = p('<div class="wp-card-wrap svelte-ifq4hh"><div><!></div> <div class="wp-card svelte-ifq4hh" role="status" aria-live="polite"><h2 class="wp-title svelte-ifq4hh"> <!></h2> <!> <!> <!> <!> <!> <!> <!> <!> <!></div></div>'),
  or = Be('<svg viewBox="0 0 32 32" fill="none" aria-hidden="true" class="svelte-ifq4hh"><path d="M6 16 L13 23 L26 9" stroke="#fff" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter" class="svelte-ifq4hh"></path></svg>'),
  lr = Be('<svg viewBox="0 0 32 32" fill="none" aria-hidden="true" class="svelte-ifq4hh"><path d="M9 9 L23 23 M23 9 L9 23" stroke="#fff" stroke-width="4" stroke-linecap="square" class="svelte-ifq4hh"></path></svg>'),
  cr = Be('<svg viewBox="0 0 32 32" fill="none" aria-hidden="true" class="svelte-ifq4hh"><rect x="14" y="7" width="4" height="13" fill="#fff" class="svelte-ifq4hh"></rect><rect x="14" y="22" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect></svg>'),
  dr = Be('<svg viewBox="0 0 32 32" fill="none" aria-hidden="true" class="svelte-ifq4hh"><rect x="14" y="13" width="4" height="13" fill="#fff" class="svelte-ifq4hh"></rect><rect x="14" y="6" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect></svg>'),
  vr = Be('<svg viewBox="0 0 32 32" fill="none" shape-rendering="crispEdges" aria-hidden="true" class="svelte-ifq4hh"><path d="M16 5 L19 13 L27 13 L21 18 L23 26 L16 22 L9 26 L11 18 L5 13 L13 13 Z" fill="#fff" class="svelte-ifq4hh"></path></svg>'),
  ur = Be('<svg viewBox="0 0 32 32" fill="none" aria-hidden="true" class="svelte-ifq4hh"><path d="M11 12 Q11 8 16 8 Q21 8 21 12 Q21 15 16 16 L16 19" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="square" class="svelte-ifq4hh"></path><rect x="14" y="22" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect></svg>'),
  fr = Be('<svg viewBox="0 0 32 32" fill="none" shape-rendering="crispEdges" aria-hidden="true" class="svelte-ifq4hh"><rect x="6" y="10" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect><rect x="14" y="10" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect><rect x="22" y="10" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect><rect x="6" y="18" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect><rect x="14" y="18" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect><rect x="22" y="18" width="4" height="4" fill="#fff" class="svelte-ifq4hh"></rect></svg>'),
  pr = Be('<svg viewBox="0 0 32 32" fill="none" shape-rendering="crispEdges" aria-hidden="true" class="svelte-ifq4hh"><rect x="14" y="4" width="4" height="6" fill="#fff" class="svelte-ifq4hh"></rect><rect x="14" y="22" width="4" height="6" fill="rgba(255,255,255,0.25)" class="svelte-ifq4hh"></rect><rect x="4" y="14" width="6" height="4" fill="rgba(255,255,255,0.5)" class="svelte-ifq4hh"></rect><rect x="22" y="14" width="6" height="4" fill="rgba(255,255,255,0.75)" class="svelte-ifq4hh"></rect><rect x="7.5" y="7.5" width="4" height="4" fill="rgba(255,255,255,0.85)" class="svelte-ifq4hh"></rect><rect x="20.5" y="20.5" width="4" height="4" fill="rgba(255,255,255,0.4)" class="svelte-ifq4hh"></rect><rect x="20.5" y="7.5" width="4" height="4" fill="rgba(255,255,255,0.6)" class="svelte-ifq4hh"></rect><rect x="7.5" y="20.5" width="4" height="4" fill="rgba(255,255,255,0.2)" class="svelte-ifq4hh"></rect></svg>'),
  hr = Be('<svg viewBox="0 0 32 32" fill="none" shape-rendering="crispEdges" aria-hidden="true" class="svelte-ifq4hh"><rect x="7" y="9" width="18" height="4" fill="#fff" class="svelte-ifq4hh"></rect><rect x="7" y="9" width="4" height="16" fill="#fff" class="svelte-ifq4hh"></rect><rect x="21" y="9" width="4" height="16" fill="#fff" class="svelte-ifq4hh"></rect><rect x="7" y="21" width="18" height="4" fill="#fff" class="svelte-ifq4hh"></rect></svg>'),
  gr = Be('<svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true" class="svelte-ifq4hh"><rect x="7" y="1" width="2" height="1" fill="currentColor" class="svelte-ifq4hh"></rect><rect x="6" y="2" width="4" height="1" fill="currentColor" class="svelte-ifq4hh"></rect><rect x="5" y="3" width="6" height="2" fill="currentColor" class="svelte-ifq4hh"></rect><rect x="4" y="5" width="8" height="1" fill="currentColor" class="svelte-ifq4hh"></rect><rect x="3" y="6" width="10" height="2" fill="currentColor" class="svelte-ifq4hh"></rect><rect x="2" y="8" width="12" height="3" fill="currentColor" class="svelte-ifq4hh"></rect><rect x="3" y="11" width="10" height="2" fill="currentColor" class="svelte-ifq4hh"></rect><rect x="4" y="13" width="8" height="1" fill="currentColor" class="svelte-ifq4hh"></rect><rect x="6" y="14" width="4" height="1" fill="currentColor" class="svelte-ifq4hh"></rect></svg>'),
  _r = Be('<svg viewBox="0 0 16 16" width="14" height="14" shape-rendering="crispEdges" aria-hidden="true" class="svelte-ifq4hh"><path d="M3 8 L7 12 L13 5" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="square" class="svelte-ifq4hh"></path></svg>'),
  mr = Be('<svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true" class="svelte-ifq4hh"><path d="M3 8h9 M9 5l4 3-4 3" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter" class="svelte-ifq4hh"></path></svg>'),
  br = p('<div class="wp-embed svelte-ifq4hh"><!></div>'),
  yr = Be('<rect width="1" height="1" fill="#2D6378" class="svelte-ifq4hh"></rect>'),
  xr = p('<div class="wp-stage svelte-ifq4hh" aria-hidden="false"><svg class="wp-map svelte-ifq4hh" preserveAspectRatio="xMidYMid slice" shape-rendering="crispEdges" aria-hidden="true"></svg> <div class="wp-droplets svelte-ifq4hh" aria-hidden="true"><div class="wp-d wp-d1 svelte-ifq4hh"><!></div> <div class="wp-d wp-d2 svelte-ifq4hh"><!></div> <div class="wp-d wp-d3 svelte-ifq4hh"><!></div> <div class="wp-d wp-d4 svelte-ifq4hh"><!></div></div> <div class="wp-shell svelte-ifq4hh"><header class="wp-topbar svelte-ifq4hh"><a class="wp-brand svelte-ifq4hh" aria-label="WPlace home"><img class="pixelated h-auto w-6 shrink-0 svelte-ifq4hh" alt="Wplace logo"/> <span class="wp-brand-name svelte-ifq4hh">wplace</span></a> <button class="wp-close svelte-ifq4hh" type="button" aria-label="Close"><svg viewBox="0 0 16 16" fill="none" width="14" height="14" aria-hidden="true" class="svelte-ifq4hh"><path d="M3 3 L13 13 M13 3 L3 13" stroke="currentColor" stroke-width="2" stroke-linecap="square" class="svelte-ifq4hh"></path></svg></button></header> <main class="wp-main svelte-ifq4hh"><!></main></div></div>');

function vt(v, e) {
  Re(e, !0);
  const o = R => {
      var H = ir(),
        h = r(H);
      let K, X;
      var j = r(h);
      s(j), a(h);
      var W = n(h, 2),
        y = r(W);
      let S;
      var U = r(y),
        J = n(U);
      {
        var te = q => {
          var A = Ka();
          i(q, A)
        };
        P(J, q => {
          l() === "loading" && q(te)
        })
      }
      a(y);
      var E = n(y, 2);
      {
        var G = q => {
          var A = Na(),
            V = r(A),
            d = r(V, !0);
          a(V);
          var b = n(V, 2);
          {
            var M = g => {
              var C = Va(),
                F = r(C, !0);
              a(C), I(() => x(F, e.amountLabel)), i(g, C)
            };
            P(b, g => {
              e.amountLabel && g(M)
            })
          }
          a(A), I(() => x(d, e.amount)), i(q, A)
        };
        P(E, q => {
          e.amount && q(G)
        })
      }
      var ie = n(E, 2);
      {
        var _e = q => {
          var A = Ja(),
            V = r(A);
          {
            var d = g => {
                var C = Ke(),
                  F = ve(C);
                Jt(F, () => e.body), i(g, C)
              },
              b = D(() => k(e.body)),
              M = g => {
                var C = it();
                I(() => x(C, e.body)), i(g, C)
              };
            P(V, g => {
              t(b) ? g(d) : g(M, -1)
            })
          }
          a(A), i(q, A)
        };
        P(ie, q => {
          e.body && q(_e)
        })
      }
      var Te = n(ie, 2);
      {
        var Ie = q => {
          var A = Ya();
          ot(A, 21, () => e.bullets, Xt, (V, d) => {
            var b = Xa(),
              M = r(b),
              g = r(M),
              C = r(g, !0);
            a(g);
            var F = n(g, 2);
            let Ee;
            var ge = r(F);
            {
              var Me = T => {
                Ha(T)
              };
              P(ge, T => {
                t(d).valueIcon && T(Me)
              })
            }
            var We = n(ge);
            a(F), a(M), a(b), I(() => {
              x(C, t(d).label), Ee = tt(F, "", Ee, {
                color: t(d).valueColor ?? t(w).accent
              }), x(We, ` ${t(d).value??""??""}`)
            }), i(V, b)
          }), a(A), i(q, A)
        };
        P(Te, q => {
          e.bullets && q(Ie)
        })
      }
      var xe = n(Te, 2);
      {
        var ce = q => {
          var A = $a(),
            V = r(A);
          ot(V, 17, () => e.receipt.rows, Xt, (M, g) => {
            var C = Qa(),
              F = r(C),
              Ee = r(F, !0);
            a(F);
            var ge = n(F, 2);
            let Me;
            var We = r(ge, !0);
            a(ge), a(C), I(() => {
              x(Ee, t(g).label), Me = tt(ge, "", Me, {
                color: t(g).color
              }), x(We, t(g).value)
            }), i(M, C)
          });
          var d = n(V, 2);
          {
            var b = M => {
              var g = Za(),
                C = n(ve(g), 2),
                F = r(C),
                Ee = r(F, !0);
              a(F);
              var ge = n(F, 2),
                Me = r(ge, !0);
              a(ge), a(C), I(() => {
                x(Ee, e.receipt.total.label), x(Me, e.receipt.total.value)
              }), i(M, g)
            };
            P(d, M => {
              e.receipt.total && M(b)
            })
          }
          a(A), i(q, A)
        };
        P(xe, q => {
          e.receipt && q(ce)
        })
      }
      var we = n(xe, 2);
      {
        var ke = q => {
          var A = er();
          i(q, A)
        };
        P(we, q => {
          L() && q(ke)
        })
      }
      var Ve = n(we, 2);
      {
        var Qe = q => {
          var A = tr(),
            V = r(A);
          {
            var d = g => {
                var C = Ke(),
                  F = ve(C);
                Jt(F, () => e.meta), i(g, C)
              },
              b = D(() => k(e.meta)),
              M = g => {
                var C = it();
                I(() => x(C, e.meta)), i(g, C)
              };
            P(V, g => {
              t(b) ? g(d) : g(M, -1)
            })
          }
          a(A), i(q, A)
        };
        P(Ve, q => {
          e.meta && q(Qe)
        })
      }
      var me = n(Ve, 2);
      {
        var Ne = q => {
            var A = ar(),
              V = r(A),
              d = r(V, !0);
            a(V);
            var b = n(V, 2);
            let M;
            var g = r(b, !0);
            a(b), a(A), I(() => {
              x(d, e.buttonRow.secondary.label), M = tt(b, "", M, {
                "--cta-bg": e.buttonRow.primary.color,
                "--cta-dark": e.buttonRow.primary.colorDark
              }), x(g, e.buttonRow.primary.label)
            }), Le("click", V, function(...C) {
              var F;
              (F = e.buttonRow.secondary.onClick) == null || F.apply(this, C)
            }), Le("click", b, function(...C) {
              var F;
              (F = e.buttonRow.primary.onClick) == null || F.apply(this, C)
            }), i(q, A)
          },
          rt = q => {
            var A = rr();
            let V;
            var d = r(A),
              b = r(d, !0);
            a(d);
            var M = n(d, 2);
            {
              var g = C => {
                Oa(C)
              };
              P(M, C => {
                e.primary.arrow !== !1 && C(g)
              })
            }
            a(A), I(() => {
              V = tt(A, "", V, {
                "--cta-bg": e.primary.color,
                "--cta-dark": e.primary.colorDark
              }), x(b, e.primary.label)
            }), Le("click", A, function(...C) {
              var F;
              (F = e.primary.onClick) == null || F.apply(this, C)
            }), i(q, A)
          };
        P(me, q => {
          e.buttonRow ? q(Ne) : e.primary && q(rt, 1)
        })
      }
      var st = n(me, 2);
      {
        var nt = q => {
          var A = sr(),
            V = r(A, !0);
          a(A), I(() => x(V, e.secondary.label)), Le("click", A, function(...d) {
            var b;
            (b = e.secondary.onClick) == null || b.apply(this, d)
          }), i(q, A)
        };
        P(st, q => {
          e.secondary && !e.buttonRow && q(nt)
        })
      }
      var Ze = n(st, 2);
      {
        var ct = q => {
          var A = nr(),
            V = r(A, !0);
          a(A), I(d => {
            Oe(A, "href", d), x(V, e.ghost)
          }, [() => Nt("/")]), i(q, A)
        };
        P(Ze, q => {
          e.ghost && q(ct)
        })
      }
      a(W), a(H), I(() => {
        K = Ae(h, 1, "wp-badge svelte-ifq4hh", null, K, {
          "wp-badge-spin": l() === "loading"
        }), X = tt(h, "", X, {
          background: t(w).accent,
          "--bd": t(w).accentDark,
          "--bg-glow": t(w).accentShadow
        }), S = tt(y, "", S, {
          color: t(w).titleColor
        }), x(U, `${e.title??""} `)
      }), i(R, H)
    },
    s = R => {
      var H = Ke(),
        h = ve(H);
      {
        var K = E => {
            var G = or();
            i(E, G)
          },
          X = E => {
            var G = lr();
            i(E, G)
          },
          j = E => {
            var G = cr();
            i(E, G)
          },
          W = E => {
            var G = dr();
            i(E, G)
          },
          y = E => {
            var G = vr();
            i(E, G)
          },
          S = E => {
            var G = ur();
            i(E, G)
          },
          U = E => {
            var G = fr();
            i(E, G)
          },
          J = E => {
            var G = pr();
            i(E, G)
          },
          te = E => {
            var G = hr();
            i(E, G)
          };
        P(h, E => {
          l() === "success" ? E(K) : l() === "error" ? E(X, 1) : l() === "warning" ? E(j, 2) : l() === "info" ? E(W, 3) : l() === "reward" ? E(y, 4) : l() === "question" ? E(S, 5) : l() === "confirmation" ? E(U, 6) : l() === "loading" ? E(J, 7) : E(te, -1)
        })
      }
      i(R, H)
    };
  let l = Pe(e, "variant", 3, "success"),
    _ = Pe(e, "embedded", 3, !1),
    L = Pe(e, "progress", 3, !1);
  const w = D(() => Wa[l()]),
    k = R => typeof R == "function";
  var u = Ke(),
    m = ve(u);
  {
    var B = R => {
        var H = br(),
          h = r(H);
        o(h), a(H), i(R, H)
      },
      z = R => {
        var H = xr(),
          h = r(H);
        Oe(h, "viewBox", `0 0 ${ea} ${ta}`), ot(h, 21, () => aa, ce => ce.x + "-" + ce.y, (ce, we) => {
          var ke = yr();
          I(() => {
            Oe(ke, "x", t(we).x), Oe(ke, "y", t(we).y)
          }), i(ce, ke)
        }), a(h);
        var K = n(h, 2),
          X = r(K),
          j = r(X);
        bt(j), a(X);
        var W = n(X, 2),
          y = r(W);
        bt(y), a(W);
        var S = n(W, 2),
          U = r(S);
        bt(U), a(S);
        var J = n(S, 2),
          te = r(J);
        bt(te), a(J), a(K);
        var E = n(K, 2),
          G = r(E),
          ie = r(G),
          _e = r(ie);
        Zt(2), a(ie);
        var Te = n(ie, 2);
        a(G);
        var Ie = n(G, 2),
          xe = r(Ie);
        o(xe), a(Ie), a(E), a(H), I(ce => {
          Oe(ie, "href", ce), Oe(_e, "src", qa)
        }, [() => Nt("/")]), Le("click", Te, function(...ce) {
          var we;
          (we = e.onclose) == null || we.apply(this, ce)
        }), i(R, H)
      };
    P(m, R => {
      _() ? R(B) : R(z, -1)
    })
  }
  i(v, u), je()
}
Ct(["click"]);

function wr(v, e) {
  Re(e, !0);
  let o = Pe(e, "open", 15);
  zt(() => {
    o() && wa()
  }), at(v, {
    isDynamicHeight: !0,
    hasCloseButton: !1,
    hasHeaderBorder: !1,
    dialogClass: "!bg-black/60",
    modalBoxClass: "max-w-sm !bg-transparent !shadow-none",
    contentAreaClass: "!p-0 justify-center",
    get open() {
      return o()
    },
    set open(s) {
      o(s)
    },
    children: (s, l) => {
      {
        let _ = D(() => f.payment_declined_title()),
          L = D(() => f.payment_declined_description()),
          w = D(() => ({
            label: f.payment_declined_retry(),
            arrow: !1,
            onClick: e.onRetry
          })),
          k = D(() => ({
            label: f.close(),
            onClick: () => o(!1)
          }));
        vt(s, {
          embedded: !0,
          variant: "error",
          get title() {
            return t(_)
          },
          get body() {
            return t(L)
          },
          get primary() {
            return t(w)
          },
          get secondary() {
            return t(k)
          }
        })
      }
    },
    $$slots: {
      default: !0
    }
  }), je()
}

function kr(v, e) {
  let o;
  return ((...s) => {
    clearTimeout(o), o = setTimeout(() => v(...s), e)
  })
}
const It = (v, e = $t, o) => {
  let s = ya(() => xa(o == null ? void 0 : o(), "row"));
  const l = D(() => e().currency === "prism");
  var _ = Ar(),
    L = r(_);
  {
    var w = z => {
      var R = Ke(),
        H = ve(R);
      {
        var h = X => {
            Mt(X, {
              class: "size-3.5"
            })
          },
          K = X => {
            lt(X, {
              class: "text-primary size-3.5"
            })
          };
        P(H, X => {
          t(l) ? X(h) : X(K, -1)
        })
      }
      i(z, R)
    };
    P(L, z => {
      t(s) === "compact" && z(w)
    })
  }
  var k = n(L, 2),
    u = r(k, !0);
  a(k);
  var m = n(k, 2);
  {
    var B = z => {
      var R = qr(),
        H = r(R, !0);
      a(R), I(h => x(H, h), [() => t(l) ? f.prism() : f.droplets()]), i(z, R)
    };
    P(m, z => {
      t(s) === "row" && z(B)
    })
  }
  a(_), I(z => {
    Ae(_, 1, `inline-flex items-center gap-1 ${t(s)==="compact"?"text-sm":"text-base"}`), Ae(k, 1, `font-extrabold tracking-tight tabular-nums ${t(l)?"prism-sheen-text":"text-base-content"}`), x(u, z)
  }, [() => e().amount.toLocaleString(navigator.language)]), i(v, _)
};
var Cr = p('<li class="bg-base-100 border-base-content/10 grid items-center gap-3 rounded-2xl border px-3.5 py-3" style="grid-template-columns: 36px 1fr auto;"><div><!></div> <div class="flex min-w-0 flex-col gap-0.5"><!></div> <div class="text-base-content/60 flex flex-col items-end gap-0.5 text-[11px] font-semibold whitespace-nowrap tabular-nums"><span> </span></div></li>'),
  Sr = p('<ul class="flex flex-col gap-1.5"></ul>'),
  qr = p('<span class="text-base-content/70 text-[12.5px] font-semibold"> </span>'),
  Ar = p("<span><!> <span> </span> <!></span>"),
  Lr = p('<div class="flex flex-col gap-0.5"><span class="text-base-content/60 text-[11px] font-semibold tracking-[0.08em] uppercase"> </span> <h3 class="text-[22px] leading-tight font-extrabold tracking-tight"> </h3></div>'),
  Pr = p('<span class="loading loading-spinner size-4"></span>'),
  Dr = p("<span> </span>"),
  Br = p('<span class="bg-primary absolute right-2 -bottom-px left-2 h-0.5 rounded-t"></span>'),
  Ir = p('<button role="tab" type="button"><span> </span> <!> <!></button>'),
  Er = p('<div class="flex h-32 items-center justify-center"><span class="loading loading-spinner loading-lg"></span></div>'),
  Mr = p('<p class="text-warning/90 px-3.5 pb-3 pl-9 text-[12.5px] leading-snug"> </p>'),
  zr = p('<div class="bg-warning/10 border-warning/30 overflow-hidden rounded-2xl border"><button type="button" class="flex w-full items-center gap-2.5 px-3.5 py-3 text-left"><!> <span class="text-warning flex-1 text-[13px] font-bold"> </span> <!></button> <!></div> <!> <div class="flex items-center justify-between gap-3 px-1 pt-2"><span class="text-base-content/70 text-xs font-semibold"> </span> <div class="flex flex-wrap justify-end gap-x-3 gap-y-1"></div></div>', 1),
  Rr = p('<!> <div class="flex items-center justify-between gap-3 px-1 pt-2"><span class="text-base-content/70 text-xs font-semibold"> </span> <div class="flex flex-wrap justify-end gap-x-3 gap-y-1"></div></div>', 1),
  jr = p('<div class="bg-base-100 ring-primary/15 text-primary absolute -right-1 -bottom-1 grid size-9 place-items-center rounded-full shadow-md ring-2"><!></div>'),
  Tr = p('<div class="bg-error ring-base-100 absolute -top-1 -right-1 grid size-8 place-items-center rounded-full text-white shadow-md ring-2"><!></div>'),
  Ur = p('<span class="loading loading-spinner size-3"></span>'),
  Fr = p('<div class="flex flex-col items-center px-7 py-8 text-center"><div class="relative mb-4"><div class="bg-primary/5 grid size-28 place-items-center rounded-full"><div class="bg-primary/10 grid size-20 place-items-center rounded-full"><!></div></div> <!></div> <div class="mb-1.5 text-base font-extrabold tracking-tight"> </div> <div class="text-base-content/60 mb-4 max-w-[240px] text-[13px] leading-snug"> </div> <button type="button" class="bg-primary/10 text-primary hover:bg-primary/20 inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[12.5px] font-bold transition-colors disabled:opacity-60"><!> </button></div>'),
  Hr = p('<div class="-mx-4 -mb-4 flex flex-col gap-3 sm:-mx-6"><div class="px-4 sm:px-6"><div class="from-primary text-primary-content shadow-primary/30 flex items-center gap-3 rounded-2xl bg-gradient-to-br to-blue-500 p-3 shadow-lg"><div class="flex min-w-0 flex-1 flex-col gap-2"><span class="text-[11px] font-semibold tracking-[0.06em] text-white/75 uppercase"> </span> <div class="grid min-w-0 gap-2 sm:grid-cols-2 sm:gap-3"><div class="flex min-w-0 items-center gap-2"><div class="grid size-8 shrink-0 place-items-center rounded-lg bg-white/15 backdrop-blur"><!></div> <div class="flex min-w-0 items-baseline gap-1.5"><span class="truncate text-lg font-extrabold tracking-tight tabular-nums"> </span> <span class="shrink-0 text-xs font-semibold text-white/75"> </span></div></div> <div class="flex min-w-0 items-center gap-2"><div class="grid size-8 shrink-0 place-items-center rounded-lg bg-white/15 backdrop-blur"><!></div> <div class="flex min-w-0 items-baseline gap-1.5"><span class="truncate text-lg font-extrabold tracking-tight tabular-nums"> </span> <span class="shrink-0 text-xs font-semibold text-white/75"> </span></div></div></div></div> <button type="button" class="grid size-9 place-items-center rounded-xl bg-white/15 transition-all hover:bg-white/25 active:rotate-180 disabled:opacity-60"><!></button></div></div> <div role="tablist" class="border-base-content/10 -mb-px flex scrollbar-none gap-1 overflow-x-auto overflow-y-hidden border-b px-2 sm:px-4"></div> <div class="flex flex-col gap-3 px-4 pt-1 pb-5 sm:px-6"><!></div></div>');

function Or(v, e) {
  Re(e, !0);
  const o = (y, S = $t) => {
    var U = Sr();
    ot(U, 21, S, J => J.createdAt + J.updatedAt + J.grant.currency + J.grant.amount, (J, te) => {
      const E = D(() => t(te).status === "refunded" ? t(te).updatedAt : t(te).createdAt),
        G = D(() => t(te).grant.currency === "prism");
      var ie = Cr(),
        _e = r(ie),
        Te = r(_e);
      {
        var Ie = me => {
            Mt(me, {
              class: "size-5"
            })
          },
          xe = me => {
            lt(me, {
              class: "text-primary size-5"
            })
          };
        P(Te, me => {
          t(G) ? me(Ie) : me(xe, -1)
        })
      }
      a(_e);
      var ce = n(_e, 2),
        we = r(ce);
      It(we, () => t(te).grant), a(ce);
      var ke = n(ce, 2),
        Ve = r(ke),
        Qe = r(Ve, !0);
      a(Ve), a(ke), a(ie), I(me => {
        Ae(_e, 1, `grid size-9 place-items-center rounded-[10px] ${t(G)?"bg-purple-500/10":"bg-primary/10"}`), x(Qe, me)
      }, [() => X(new Date, new Date(t(E)))]), i(J, ie)
    }), a(U), i(y, U)
  };
  let s = Pe(e, "open", 15),
    l = $(!1),
    _ = $(ba([])),
    L = $(!1),
    w = $("pending"),
    k = $(!0);
  const u = D(() => t(_).reduce((y, S) => (y[S.status].push(S), y), {
      pending: [],
      paid: [],
      refunded: [],
      rejected: []
    })),
    m = D(() => t(u)[t(w)]),
    B = D(() => Vt(t(m).map(y => y.grant)));
  async function z() {
    c(L, !0);
    try {
      const {
        purchases: y
      } = await Ge.listPlayPurchaseHistory();
      c(_, y, !0)
    } catch {
      c(_, [], !0)
    } finally {
      c(L, !1), Et.markViewed()
    }
  }
  zt(() => {
    s() && (c(w, "pending"), c(k, !0), z())
  });
  async function R() {
    return ze.autoRecoverPendingPurchases()
  }
  let H = kr(async function() {
    try {
      if (c(l, !0), t(u).pending.length > 0) {
        const S = await Ge.verifyPendingPlayPurchases().then(({
          grants: U
        }) => Vt(U)).catch(() => []);
        if (S.length > 0) {
          await ze.refresh(), await Et.openCheckoutDialog(S);
          return
        }
      }
      await R(), await z()
    } finally {
      c(l, !1)
    }
  }, 100);

  function h(y) {
    return String(y).padStart(2, "0")
  }

  function K(y, S) {
    return y.getFullYear() === S.getFullYear() && y.getMonth() === S.getMonth() && y.getDate() === S.getDate()
  }

  function X(y, S) {
    const U = Math.floor((y.getTime() - S.getTime()) / 6e4),
      J = navigator.language;
    if (U < 1) return new Intl.RelativeTimeFormat(J, {
      numeric: "auto"
    }).format(0, "minute");
    if (U < 60) return new Intl.RelativeTimeFormat(J, {
      numeric: "auto"
    }).format(-U, "minute");
    if (K(y, S)) return `${f.payment_history_today()}, ${h(S.getHours())}:${h(S.getMinutes())}`;
    const te = new Date(y);
    return te.setDate(te.getDate() - 1), K(te, S) ? `${f.payment_history_yesterday()}, ${h(S.getHours())}:${h(S.getMinutes())}` : S.toLocaleDateString(J, {
      day: "2-digit",
      month: "2-digit"
    }) + ` ${h(S.getHours())}:${h(S.getMinutes())}`
  }

  function j(y, S) {
    return y === "pending" ? S ? "bg-warning text-warning-content" : "bg-warning/15 text-warning" : S ? "bg-primary text-primary-content" : "bg-primary/10 text-base-content/70"
  }

  function W(y) {
    return y === "pending" ? {
      title: f.payment_history_empty_pending(),
      body: f.payment_history_empty_pending_body()
    } : y === "paid" ? {
      title: f.payment_history_empty_paid(),
      body: f.payment_history_empty_paid_body()
    } : y === "rejected" ? {
      title: f.payment_history_empty_rejected(),
      body: f.payment_history_empty_rejected_body()
    } : {
      title: f.payment_history_empty_refunded(),
      body: f.payment_history_empty_refunded_body()
    }
  }
  at(v, {
    dialogClass: "!bg-black/80",
    modalBoxClass: "max-w-md",
    isDynamicHeight: !0,
    get open() {
      return s()
    },
    set open(S) {
      s(S)
    },
    header: S => {
      var U = Lr(),
        J = r(U),
        te = r(J, !0);
      a(J);
      var E = n(J, 2),
        G = r(E, !0);
      a(E), a(U), I((ie, _e) => {
        x(te, ie), x(G, _e)
      }, [() => f.payment_history_eyebrow(), () => f.payment_history_title()]), i(S, U)
    },
    children: (S, U) => {
      var J = Hr(),
        te = r(J),
        E = r(te),
        G = r(E),
        ie = r(G),
        _e = r(ie, !0);
      a(ie);
      var Te = n(ie, 2),
        Ie = r(Te),
        xe = r(Ie),
        ce = r(xe);
      lt(ce, {
        class: "size-4.5 text-white",
        inverted: !0
      }), a(xe);
      var we = n(xe, 2),
        ke = r(we),
        Ve = r(ke, !0);
      a(ke);
      var Qe = n(ke, 2),
        me = r(Qe, !0);
      a(Qe), a(we), a(Ie);
      var Ne = n(Ie, 2),
        rt = r(Ne),
        st = r(rt);
      Mt(st, {
        class: "size-5"
      }), a(rt);
      var nt = n(rt, 2),
        Ze = r(nt),
        ct = r(Ze, !0);
      a(Ze);
      var q = n(Ze, 2),
        A = r(q, !0);
      a(q), a(nt), a(Ne), a(Te), a(G);
      var V = n(G, 2),
        d = r(V);
      {
        var b = T => {
            var ee = Pr();
            i(T, ee)
          },
          M = T => {
            Bt(T, {
              class: "size-4"
            })
          };
        P(d, T => {
          t(l) ? T(b) : T(M, -1)
        })
      }
      a(V), a(E), a(te);
      var g = n(te, 2);
      ot(g, 21, () => [{
        key: "pending",
        label: f.payment_history_filter_pending(),
        count: t(u).pending.length
      }, {
        key: "paid",
        label: f.payment_history_filter_paid(),
        count: t(u).paid.length
      }, {
        key: "refunded",
        label: f.payment_history_filter_refunded(),
        count: t(u).refunded.length
      }, {
        key: "rejected",
        label: f.payment_history_filter_rejected(),
        count: t(u).rejected.length
      }], T => T.key, (T, ee) => {
        const Q = D(() => t(w) === t(ee).key);
        var Y = Ir(),
          Z = r(Y),
          de = r(Z, !0);
        a(Z);
        var be = n(Z, 2);
        {
          var ae = ue => {
            var Se = Dr(),
              qe = r(Se, !0);
            a(Se), I(Ue => {
              Ae(Se, 1, `inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1.5 text-[10px] font-bold ${Ue??""}`), x(qe, t(ee).count)
            }, [() => j(t(ee).key, t(Q))]), i(ue, Se)
          };
          P(be, ue => {
            t(ee).count > 0 && ue(ae)
          })
        }
        var oe = n(be, 2);
        {
          var Ce = ue => {
            var Se = Br();
            i(ue, Se)
          };
          P(oe, ue => {
            t(Q) && ue(Ce)
          })
        }
        a(Y), I(() => {
          Ae(Y, 1, `relative flex flex-1 items-center justify-center gap-1.5 px-1.5 py-3.5 text-[13px] font-semibold transition-colors ${t(Q)?"text-base-content":"text-base-content/60 hover:text-base-content/80"}`), x(de, t(ee).label)
        }), Le("click", Y, () => c(w, t(ee).key, !0)), i(T, Y)
      }), a(g);
      var C = n(g, 2),
        F = r(C);
      {
        var Ee = T => {
            var ee = Er();
            i(T, ee)
          },
          ge = T => {
            var ee = zr(),
              Q = ve(ee),
              Y = r(Q),
              Z = r(Y);
            La(Z, {
              class: "text-warning size-4 shrink-0"
            });
            var de = n(Z, 2),
              be = r(de, !0);
            a(de);
            var ae = n(de, 2);
            {
              var oe = O => {
                  Pa(O, {
                    class: "text-warning size-4"
                  })
                },
                Ce = O => {
                  Da(O, {
                    class: "text-warning size-4"
                  })
                };
              P(ae, O => {
                t(k) ? O(oe) : O(Ce, -1)
              })
            }
            a(Y);
            var ue = n(Y, 2);
            {
              var Se = O => {
                var he = Mr(),
                  N = r(he, !0);
                a(he), I(re => x(N, re), [() => f.payment_pending_subdescription()]), i(O, he)
              };
              P(ue, O => {
                t(k) && O(Se)
              })
            }
            a(Q);
            var qe = n(Q, 2);
            o(qe, () => t(m));
            var Ue = n(qe, 2),
              De = r(Ue),
              Je = r(De, !0);
            a(De);
            var fe = n(De, 2);
            ot(fe, 21, () => t(B), O => O.currency, (O, he) => {
              It(O, () => t(he), () => "compact")
            }), a(fe), a(Ue), I((O, he) => {
              x(be, O), x(Je, he)
            }, [() => f.payment_history_banner_title(), () => f.payment_history_total_pending()]), Le("click", Y, () => c(k, !t(k))), i(T, ee)
          },
          Me = T => {
            var ee = Rr(),
              Q = ve(ee);
            o(Q, () => t(m));
            var Y = n(Q, 2),
              Z = r(Y),
              de = r(Z, !0);
            a(Z);
            var be = n(Z, 2);
            ot(be, 21, () => t(B), ae => ae.currency, (ae, oe) => {
              It(ae, () => t(oe), () => "compact")
            }), a(be), a(Y), I(ae => x(de, ae), [() => f.total()]), i(T, ee)
          },
          We = T => {
            const ee = D(() => W(t(w)));
            var Q = Fr(),
              Y = r(Q),
              Z = r(Y),
              de = r(Z),
              be = r(de);
            lt(be, {
              class: "text-primary size-10"
            }), a(de), a(Z);
            var ae = n(Z, 2);
            {
              var oe = N => {
                  var re = jr(),
                    pe = r(re);
                  Bt(pe, {
                    class: "size-5"
                  }), a(re), i(N, re)
                },
                Ce = N => {
                  var re = Tr(),
                    pe = r(re);
                  Aa(pe, {
                    class: "size-4"
                  }), a(re), i(N, re)
                };
              P(ae, N => {
                t(w) === "refunded" ? N(oe) : t(w) === "rejected" && N(Ce, 1)
              })
            }
            a(Y);
            var ue = n(Y, 2),
              Se = r(ue, !0);
            a(ue);
            var qe = n(ue, 2),
              Ue = r(qe, !0);
            a(qe);
            var De = n(qe, 2),
              Je = r(De);
            {
              var fe = N => {
                  var re = Ur();
                  i(N, re)
                },
                O = N => {
                  Bt(N, {
                    class: "size-3.5"
                  })
                };
              P(Je, N => {
                t(l) ? N(fe) : N(O, -1)
              })
            }
            var he = n(Je);
            a(De), a(Q), I(N => {
              x(Se, t(ee).title), x(Ue, t(ee).body), De.disabled = t(l), x(he, ` ${N??""}`)
            }, [() => f.payment_history_verify_again()]), Le("click", De, H), i(T, Q)
          };
        P(F, T => {
          t(L) && t(_).length === 0 ? T(Ee) : t(w) === "pending" && t(m).length > 0 ? T(ge, 1) : t(m).length > 0 ? T(Me, 2) : T(We, -1)
        })
      }
      a(C), a(J), I((T, ee, Q, Y, Z, de) => {
        x(_e, T), x(Ve, ee), x(me, Q), x(ct, Y), x(A, Z), Oe(V, "aria-label", de), V.disabled = t(l)
      }, [() => f.payment_history_balance(), () => {
        var T;
        return (((T = ye.data) == null ? void 0 : T.droplets) ?? 0).toLocaleString(navigator.language)
      }, () => f.droplets(), () => {
        var T;
        return (((T = ye.data) == null ? void 0 : T.prism) ?? 0).toLocaleString(navigator.language)
      }, () => f.prism(), () => f.payment_history_verify_again()]), Le("click", V, H), i(S, J)
    },
    $$slots: {
      header: !0,
      default: !0
    }
  }), je()
}
Ct(["click"]);

function Wr(v, e) {
  Re(e, !0);
  let o = Pe(e, "open", 15);
  at(v, {
    isDynamicHeight: !0,
    hasCloseButton: !1,
    hasHeaderBorder: !1,
    dialogClass: "!bg-black/60",
    modalBoxClass: "max-w-sm !bg-transparent !shadow-none",
    contentAreaClass: "!p-0 justify-center",
    get open() {
      return o()
    },
    set open(s) {
      o(s)
    },
    children: (s, l) => {
      {
        let _ = D(() => f.payment_pending_title()),
          L = D(() => f.payment_pending_description()),
          w = D(() => ({
            label: f.payment_history_view(),
            arrow: !1,
            onClick: e.onViewHistory
          })),
          k = D(() => ({
            label: f.close(),
            onClick: () => o(!1)
          }));
        vt(s, {
          embedded: !0,
          variant: "warning",
          get title() {
            return t(_)
          },
          get body() {
            return t(L)
          },
          get primary() {
            return t(w)
          },
          get secondary() {
            return t(k)
          }
        })
      }
    },
    $$slots: {
      default: !0
    }
  }), je()
}
var Gr = p('<div class="my-auto w-full"><!></div>');

function Kr(v, e) {
  Re(e, !0);
  let o = Pe(e, "open", 15);
  at(v, {
    isDynamicHeight: !0,
    hasCloseButton: !1,
    hasHeaderBorder: !1,
    dialogClass: "!bg-black/60",
    modalBoxClass: "max-w-sm !bg-transparent !shadow-none",
    contentAreaClass: "!p-0",
    get open() {
      return o()
    },
    set open(s) {
      o(s)
    },
    children: (s, l) => {
      var _ = Gr(),
        L = r(_);
      {
        let w = D(() => f.payment_processing_title()),
          k = D(() => f.payment_processing_description());
        vt(L, {
          embedded: !0,
          variant: "loading",
          get title() {
            return t(w)
          },
          get body() {
            return t(k)
          },
          progress: !0
        })
      }
      a(_), i(s, _)
    },
    $$slots: {
      default: !0
    }
  }), je()
}
var Vr = p('<div class="my-auto w-full"><!></div>');

function Nr(v, e) {
  Re(e, !0);
  let o = Pe(e, "open", 15),
    s = Pe(e, "purchasedDroplets", 3, null),
    l = Pe(e, "currency", 3, "droplets");
  const _ = typeof navigator < "u" ? navigator.language : "en-US",
    L = B => B.toLocaleString(_),
    w = D(() => {
      var B, z;
      return l() === "prism" ? (B = ye.data) == null ? void 0 : B.prism : (z = ye.data) == null ? void 0 : z.droplets
    }),
    k = D(() => l() === "prism" ? f.prism() : f.droplets()),
    u = D(() => t(w) !== void 0 ? {
      rows: s() ? [{
        label: f.purchased(),
        value: `+${L(s())}`,
        color: "#22c55e"
      }] : [],
      total: {
        label: f.balance(),
        value: L(t(w))
      }
    } : void 0);

  function m() {
    var B;
    o(!1), (B = e.onbacktostore) == null || B.call(e)
  }
  at(v, {
    isDynamicHeight: !0,
    hasCloseButton: !1,
    hasHeaderBorder: !1,
    dialogClass: "!bg-black/60",
    modalBoxClass: "max-w-sm !bg-transparent !shadow-none",
    contentAreaClass: "!p-0",
    get open() {
      return o()
    },
    set open(B) {
      o(B)
    },
    children: (B, z) => {
      var R = Vr(),
        H = r(R);
      {
        let h = D(() => f.payment_succeded()),
          K = D(() => s() ? `+${L(s())}` : void 0),
          X = D(() => s() ? t(k) : void 0),
          j = D(() => f.thank_you_for_your_support()),
          W = D(() => ({
            label: f.go_to_store(),
            color: "#3b6fe8",
            colorDark: "#1f4fc8",
            onClick: m
          }));
        vt(H, {
          embedded: !0,
          variant: "success",
          get title() {
            return t(h)
          },
          get amount() {
            return t(K)
          },
          get amountLabel() {
            return t(X)
          },
          get body() {
            return t(j)
          },
          get receipt() {
            return t(u)
          },
          get primary() {
            return t(W)
          }
        })
      }
      a(R), i(B, R)
    },
    $$slots: {
      default: !0
    }
  }), je()
}
var Jr = p('<div class="my-auto w-full"><!></div>');

function Xr(v, e) {
  Re(e, !0);
  let o = Pe(e, "open", 15);
  at(v, {
    isDynamicHeight: !0,
    hasCloseButton: !1,
    hasHeaderBorder: !1,
    dialogClass: "!bg-black/60",
    modalBoxClass: "max-w-sm !bg-transparent !shadow-none",
    contentAreaClass: "!p-0",
    get open() {
      return o()
    },
    set open(s) {
      o(s)
    },
    children: (s, l) => {
      var _ = Jr(),
        L = r(_);
      {
        let w = D(() => f.payment_incomplete()),
          k = D(() => f.payment_incomplete_description()),
          u = D(() => ({
            label: f.go_to_store(),
            color: "#3b6fe8",
            colorDark: "#1f4fc8",
            onClick: () => {
              var m;
              o(!1), (m = e.onbacktostore) == null || m.call(e)
            }
          }));
        vt(L, {
          embedded: !0,
          variant: "warning",
          get title() {
            return t(w)
          },
          get body() {
            return t(k)
          },
          get primary() {
            return t(u)
          }
        })
      }
      a(_), i(s, _)
    },
    $$slots: {
      default: !0
    }
  }), je()
}

function Yr(v, e) {
  Re(e, !0);
  let o = Pe(e, "message", 19, () => f.payment_play_unavailable_description()),
    s = Pe(e, "open", 15);
  at(v, {
    isDynamicHeight: !0,
    hasCloseButton: !1,
    hasHeaderBorder: !1,
    dialogClass: "!bg-black/60",
    modalBoxClass: "max-w-sm !bg-transparent !shadow-none",
    contentAreaClass: "!p-0 justify-center",
    get open() {
      return s()
    },
    set open(l) {
      s(l)
    },
    children: (l, _) => {
      {
        let L = D(() => f.payment_play_unavailable_title()),
          w = D(() => ({
            label: f.close(),
            arrow: !1,
            onClick: () => s(!1)
          }));
        vt(l, {
          embedded: !0,
          variant: "error",
          get title() {
            return t(L)
          },
          get body() {
            return o()
          },
          get primary() {
            return t(w)
          }
        })
      }
    },
    $$slots: {
      default: !0
    }
  }), je()
}
var Qr = p('<div class="mt-32 flex justify-center"><div class="loading loading-spinner"></div></div>'),
  Zr = p('<!> <div id="fsc-embedded-checkout-container"></div>', 1);

function $r(v, e) {
  Re(e, !0);
  const o = "wplace.onfastspring.com/embedded-stacked";
  let s = $(!1);
  kt(() => {
    var X;
    const u = window;
    let m = !1,
      B, z;
    const R = () => {
        var j;
        t(s) || (clearTimeout(z), c(s, !0), (j = e.oncomplete) == null || j.call(e, B))
      },
      H = () => {
        t(s) || z || (z = setTimeout(R, 5e3))
      },
      h = j => {
        const W = j == null ? void 0 : j.id;
        !B && typeof W == "string" && (B = W)
      };
    u.FSCEventCallback = j => {
      j === "FSC-purchaseComplete" && H()
    }, u.__fsp_wh__ = j => {
      h(j), (j == null ? void 0 : j.completed) !== !1 && B && R()
    }, u.__fsp_closed__ = j => {
      h(j), B && R()
    };
    const K = j => {
      var y, S, U;
      if (!j.data || typeof j.data != "object") return;
      const W = (y = j.data) == null ? void 0 : y.fscPopupMessage;
      W && ((W == null ? void 0 : W.action) === "event" && ((S = W == null ? void 0 : W.eventData) == null ? void 0 : S.event) === "FSC-checkoutStep5" && localStorage.setItem("fscBackFromCheckout", "1"), W.action === "event" && ((U = W.eventData) == null ? void 0 : U.event) === "FSC-purchaseComplete" && H())
    };
    return window.addEventListener("message", K), (X = document.getElementById("fsc-api")) == null || X.remove(), delete u.fastspring, Ge.createFastspringSession(e.lookupKey).then(({
      sessionId: j,
      securePayload: W
    }) => {
      if (m) return;
      const y = document.createElement("script");
      y.id = "fsc-api", y.src = "https://sbl.onfastspring.com/sbl/1.0.7/fastspring-builder.min.js", y.setAttribute("data-storefront", o), y.setAttribute("data-popup-webhook-received", "__fsp_wh__"), y.setAttribute("data-popup-closed", "__fsp_closed__"), u.__fsp_err__ = (...S) => console.error("FastSpring SBL error:", ...S), y.setAttribute("data-error-callback", "__fsp_err__"), y.setAttribute("data-access-key", Ba), y.onload = () => {
        W ? u.fastspring.builder.secure(W, "") : u.fastspring.builder.checkout(j)
      }, document.head.appendChild(y)
    }).catch(j => console.error("FastSpring: could not create session", j)), () => {
      var j;
      m = !0, clearTimeout(z), window.removeEventListener("message", K), delete u.FSCEventCallback, delete u.__fsp_wh__, delete u.__fsp_closed__, delete u.__fsp_err__, (j = document.getElementById("fsc-api")) == null || j.remove(), delete u.fastspring
    }
  });
  var l = Zr(),
    _ = ve(l);
  {
    var L = u => {
      var m = Qr();
      i(u, m)
    };
    P(_, u => {
      t(s) && u(L)
    })
  }
  var w = n(_, 2);
  let k;
  I(() => k = Ae(w, 1, "relative", null, k, {
    hidden: t(s)
  })), i(v, l), je()
}

function wt(v) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? wt = function(e) {
    return typeof e
  } : wt = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }, wt(v)
}
var ra = "clover",
  es = function(e) {
    return e === 3 ? "v3" : e
  },
  sa = "https://js.stripe.com",
  ts = "".concat(sa, "/").concat(ra, "/stripe.js"),
  as = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
  rs = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/;
var ss = function(e) {
    return as.test(e) || rs.test(e)
  },
  ns = function() {
    for (var e = document.querySelectorAll('script[src^="'.concat(sa, '"]')), o = 0; o < e.length; o++) {
      var s = e[o];
      if (ss(s.src)) return s
    }
    return null
  },
  Yt = function(e) {
    var o = "",
      s = document.createElement("script");
    s.src = "".concat(ts).concat(o);
    var l = document.head || document.body;
    if (!l) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
    return l.appendChild(s), s
  },
  is = function(e, o) {
    !e || !e._registerWrapper || e._registerWrapper({
      name: "stripe-js",
      version: "8.11.0",
      startTime: o
    })
  },
  ht = null,
  yt = null,
  xt = null,
  os = function(e) {
    return function(o) {
      e(new Error("Failed to load Stripe.js", {
        cause: o
      }))
    }
  },
  ls = function(e, o) {
    return function() {
      window.Stripe ? e(window.Stripe) : o(new Error("Stripe.js not available"))
    }
  },
  cs = function(e) {
    return ht !== null ? ht : (ht = new Promise(function(o, s) {
      if (typeof window > "u" || typeof document > "u") {
        o(null);
        return
      }
      if (window.Stripe) {
        o(window.Stripe);
        return
      }
      try {
        var l = ns();
        if (!(l && e)) {
          if (!l) l = Yt(e);
          else if (l && xt !== null && yt !== null) {
            var _;
            l.removeEventListener("load", xt), l.removeEventListener("error", yt), (_ = l.parentNode) === null || _ === void 0 || _.removeChild(l), l = Yt(e)
          }
        }
        xt = ls(o, s), yt = os(s), l.addEventListener("load", xt), l.addEventListener("error", yt)
      } catch (L) {
        s(L);
        return
      }
    }), ht.catch(function(o) {
      return ht = null, Promise.reject(o)
    }))
  },
  ds = function(e, o, s) {
    if (e === null) return null;
    var l = o[0];
    if (typeof l != "string") throw new Error("Expected publishable key to be of type string, got type ".concat(wt(l), " instead."));
    var _ = l.match(/^pk_test/),
      L = es(e.version),
      w = ra;
    _ && L !== w && console.warn("Stripe.js@".concat(L, " was loaded on the page, but @stripe/stripe-js@").concat("8.11.0", " expected Stripe.js@").concat(w, ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));
    var k = e.apply(void 0, o);
    return is(k, s), k
  },
  gt, na = !1,
  ia = function() {
    return gt || (gt = cs(null).catch(function(e) {
      return gt = null, Promise.reject(e)
    }), gt)
  };
Promise.resolve().then(function() {
  return ia()
}).catch(function(v) {
  na || console.warn(v)
});
var vs = function() {
    for (var e = arguments.length, o = new Array(e), s = 0; s < e; s++) o[s] = arguments[s];
    na = !0;
    var l = Date.now();
    return ia().then(function(_) {
      return ds(_, o, l)
    })
  },
  us = p('<div class="mt-32 flex justify-center"><div class="loading loading-spinner"></div></div>'),
  fs = p('<!> <div class="w-full"></div>', 1);

function ps(v, e) {
  Re(e, !0);
  let o, s, l = $(!1);
  const _ = 8e3;
  kt(async () => {
    var B, z, R;
    let m;
    try {
      m = await Promise.race([vs(Ia), new Promise((H, h) => setTimeout(() => h(new Error("stripe-load-timeout")), _))])
    } catch {
      (B = e.onUnavailable) == null || B.call(e);
      return
    }
    if (!m) {
      (z = e.onUnavailable) == null || z.call(e);
      return
    }
    try {
      s = await m.initEmbeddedCheckout({
        fetchClientSecret: async () => e.clientSecret,
        onComplete: async () => {
          var H;
          s == null || s.destroy(), s = void 0, c(l, !0), (H = e.onComplete) == null || H.call(e)
        }
      }), s.mount(o)
    } catch {
      (R = e.onUnavailable) == null || R.call(e)
    }
  }), ma(() => {
    s == null || s.destroy(), s = void 0
  });
  var L = fs(),
    w = ve(L);
  {
    var k = m => {
      var B = us();
      i(m, B)
    };
    P(w, m => {
      t(l) && m(k)
    })
  }
  var u = n(w, 2);
  Ea(u, m => o = m, () => o), i(v, L), je()
}
var hs = p('<!> <h3 class="text-xl font-bold"> </h3> <div class="mr-2 ml-auto"><!></div>', 1),
  gs = p('<button class="btn btn-ghost btn-sm btn-circle"><!></button> <h3 class="text-xl font-bold"> </h3>', 1),
  _s = p('<span class="loading loading-spinner loading-sm absolute"></span>'),
  ms = p('<div class="bg-base-300 flex flex-col items-center justify-center rounded-xl p-6"><p class="text-primary text-3xl font-bold"><!> <span> <span class="text-lg font-normal"> </span></span></p> <p class="text-base-content/80 mt-0.5 text-center text-xs"><!> <span class="text-primary/80 font-medium"> </span></p> <button class="btn btn-lg btn-primary relative mt-3 h-10"><!> <span><!></span></button></div>'),
  bs = p('<div class="mt-2 text-center"><button class="link text-sm font-medium"> </button></div>'),
  ys = p('<p class="text-base-content/80 mb-4 text-sm"> </p> <div class="grid gap-3 sm:grid-cols-2"><!> <!> <!> <!> <!> <!></div> <p class="text-base-content/60 mt-4 text-center text-sm"> <a class="font-medium" target="_blank"> </a></p> <!>', 1),
  xs = p('<div class="flex flex-col gap-4 px-6 pt-6 pb-2"><div class="bg-base-200 flex rounded-2xl p-1"><button><svg viewBox="0 0 750 471" xmlns="http://www.w3.org/2000/svg" aria-label="Visa"><rect width="750" height="471" rx="40" fill="#1a1f71"></rect><path d="M278 334L311 138h51L329 334h-51zM524 142c-10-4-26-8-46-8-51 0-87 27-87 65-1 28 25 44 45 53 20 10 27 16 27 25-1 13-16 19-31 19-21 0-32-3-49-10l-7-3-7 44c12 5 33 10 56 10 54 0 89-27 89-68 0-22-14-39-44-53-18-9-30-15-30-24 0-8 10-17 31-17 17 0 30 4 40 8l5 2 7-43zM614 138h-40c-12 0-21 4-27 16l-77 180h54l11-30h66l6 30h48l-41-196zm-63 127l20-54 10-30 5 27 18 57h-53zM230 138l-50 133-5-27c-10-32-40-66-74-83l46 173h55l82-196h-54z" fill="#fff"></path><path d="M131 138H48l-1 4c65 17 108 56 126 103l-18-91c-3-12-12-16-24-16z" fill="#f9a533"></path></svg> <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" aria-label="Mastercard"><rect width="38" height="24" rx="4" fill="#252525"></rect><circle cx="15" cy="12" r="7" fill="#eb001b"></circle><circle cx="23" cy="12" r="7" fill="#f79e1b"></circle><path d="M19 6.8a7 7 0 0 1 0 10.4A7 7 0 0 1 19 6.8z" fill="#ff5f00"></path></svg> </button> <button> </button></div></div>'),
  ws = p('<div class="flex h-40 items-center justify-center"><span class="loading loading-spinner loading-lg"></span></div>'),
  Qt = p("<div><!></div>"),
  ks = p('<!> <div class="mt-4"><!> <!></div>', 1),
  Cs = p("<div><!></div> <!> <!> <!> <!> <!> <!> <!>", 1);

function nn(v, e) {
  Re(e, !0);
  let o = Pe(e, "open", 15),
    s = $("products"),
    l = $(!1),
    _ = $(0),
    L = $("droplets"),
    w = $(!1),
    k = $(!1),
    u = $(!1),
    m = $(null),
    B = $(null),
    z = $(null);
  const R = D(() => {
      var d, b;
      return ((b = (d = ye.data) == null ? void 0 : d.country) == null ? void 0 : b.toUpperCase()) === "MX"
    }),
    H = D(() => {
      var d, b;
      return ((b = (d = ye.data) == null ? void 0 : d.country) == null ? void 0 : b.toUpperCase()) === "BR"
    });
  let h = $(!1),
    K = $(!1),
    X = $(!1);

  function j() {
    c(h, ze.isTWA(), !0), c(K, ze.isTWALoaded(), !0), c(X, ze.playBillingBlocked, !0)
  }
  let W = $(!1),
    y = $(!1),
    S = $("");
  kt(async () => {
    try {
      await ze.loadMapSKUs()
    } finally {
      j()
    }
  });
  let U = $("stripe"),
    J = $(!1);
  zt(() => {
    t(U) === "other" && c(J, !0)
  });
  let te = $(!1);

  function E() {
    c(te, !0), c(J, !0), c(U, "other")
  }
  const G = D(() => ye.data ? ye.data.id % 2 === 0 : !1),
    ie = D(() => t(te) || t(G));
  kt(() => {
    if (!!localStorage.getItem("fscBackFromCheckout")) {
      localStorage.removeItem("fscBackFromCheckout");
      const b = localStorage.getItem("wplace_fs_currency") === "prism" ? "prism" : "droplets",
        M = Number(localStorage.getItem(b === "prism" ? "wplace_fs_prism" : "wplace_fs_droplets")) || 0;
      history.replaceState({}, "", window.location.pathname), c(L, b, !0), c(u, !0), Te(M)
    }
  });
  let _e = null;
  async function Te(d) {
    const b = {
      cancelled: !1
    };
    _e = b, c(u, !0);
    for (let M = 0; M < 2; M++) {
      if (M !== 0 && await new Promise(g => setTimeout(g, 2e3)), b.cancelled) {
        c(u, !1);
        return
      }
      try {
        const g = await Ge.getLastFastspringOrder();
        if (!g) continue;
        if (!g.read) {
          if (b.cancelled) {
            c(u, !1);
            return
          }
          c(u, !1), c(k, !1), c(_, d, !0), c(w, !0), await ye.refresh(), await Ge.markFastspringOrderAsRead(g.id);
          return
        }
      } catch {}
    }
    c(u, !1), b.cancelled || c(k, !0)
  }
  async function Ie(d) {
    if (_e && (_e.cancelled = !0), c(m, d, !0), c(L, "droplets"), localStorage.setItem("wplace_fs_currency", "droplets"), localStorage.setItem("wplace_fs_droplets", String(d.droplets + d.bonus)), t(ie)) {
      c(U, "other"), c(J, !0), c(s, "checkout");
      return
    }
    c(U, "stripe"), c(l, !0);
    try {
      await (async b => {
        c(B, b.clientSecret, !0), c(z, b.sessionId, !0)
      })(await Ge.createEmbeddedCheckout(d.stripeLookupkey)), c(s, "checkout")
    } catch (b) {
      Dt.error(b.message ?? "Unexpected error")
    } finally {
      c(l, !1)
    }
  }

  function xe() {
    c(s, "products"), c(m, null), c(B, null), c(z, null), localStorage.removeItem("wplace_fs_droplets"), localStorage.removeItem("wplace_fs_currency")
  }

  function ce() {
    xe(), o(!1), c(W, !0)
  }
  async function we() {
    const d = t(m).droplets + t(m).bonus,
      b = t(z);
    let M = !1;
    if (b) {
      try {
        ({
          credited: M
        } = await Ge.refreshStripeSession(b))
      } catch {
        M = !1
      }
      await ye.refresh()
    }
    if (!M) {
      ce();
      return
    }
    xe(), o(!1), c(_, d), c(w, !0)
  }
  async function ke(d) {
    var g;
    if (t(l)) return;
    c(l, !0), ka();
    let b = !1,
      M = "";
    try {
      const C = await ze.createPayment(d);
      b = !0, M = (g = C == null ? void 0 : C.out) == null ? void 0 : g.details.purchaseToken, await C.verify()
    } catch (C) {
      if (b) {
        c(u, !0);
        const F = await Qe(M, Ee => ze.verifyBySKU({
          sku: d,
          token: Ee
        }));
        switch (c(u, !1), F.status) {
          case "accepted": {
            Et.openCheckoutDialog({
              currency: "droplets",
              amount: F.amount
            });
            break
          }
          case "declined": {
            c(S, d, !0), c(y, !0);
            break
          }
          default: {
            c(W, !0);
            break
          }
        }
      } else {
        const F = (C == null ? void 0 : C.message) ?? "";
        /abort|cancel/i.test(F) || Dt.error(F || f.unexpected_server_error())
      }
    } finally {
      c(l, !1)
    }
  }
  const Ve = d => new Promise(b => setTimeout(b, d));
  async function Qe(d, b) {
    if (!d) return {
      status: "declined",
      amount: 0
    };
    const M = Date.now();
    for (;;) {
      let g = null;
      try {
        g = await Ge.getPlayClaimStatus(d)
      } catch {}
      if ((g == null ? void 0 : g.status) === "processed") return await ye.refresh(), {
        status: "accepted",
        amount: g.grant.amount
      };
      if ((g == null ? void 0 : g.status) === "rejected") return {
        status: "declined",
        amount: 0
      };
      if ((g == null ? void 0 : g.status) === "unknown") try {
        const {
          grant: F
        } = await b(d);
        return await ye.refresh(), {
          status: "accepted",
          amount: F.amount
        }
      } catch {}
      if ((Date.now() - M) / 1e3 > ze.POOLING_TIME) return {
        status: "pending",
        amount: 0
      };
      await Ve(1500)
    }
  }
  var me = Cs(),
    Ne = ve(me),
    rt = r(Ne);
  {
    const d = ge => {
      var Me = Ke(),
        We = ve(Me);
      {
        var T = Q => {
            var Y = hs(),
              Z = ve(Y);
            lt(Z, {
              class: "text-primary size-5"
            });
            var de = n(Z, 2),
              be = r(de, !0);
            a(de);
            var ae = n(de, 2),
              oe = r(ae);
            {
              let Ce = D(() => ye.data.droplets ?? 0);
              Fa(oe, {
                get value() {
                  return t(Ce)
                },
                button: !1
              })
            }
            a(ae), I(Ce => x(be, Ce), [() => f.droplets()]), i(Q, Y)
          },
          ee = Q => {
            var Y = gs(),
              Z = ve(Y),
              de = r(Z);
            Ma(de, {
              class: "size-5"
            }), a(Z);
            var be = n(Z, 2),
              ae = r(be, !0);
            a(be), I(oe => x(ae, oe), [() => f.payment()]), Le("click", Z, xe), i(Q, Y)
          };
        P(We, Q => {
          t(s) === "products" && ye.data ? Q(T) : t(s) === "checkout" && t(m) && Q(ee, 1)
        })
      }
      i(ge, Me)
    };
    let b = D(() => t(s) === "products" ? "max-w-2xl" : "max-w-5xl max-h-[min(91.6vh,57rem)]"),
      M = D(() => t(s) === "checkout" ? "px-0 sm:px-0 pt-0 pb-4" : ""),
      g = D(() => t(s) === "products"),
      C = D(() => t(s) !== "checkout"),
      F = D(() => t(s) === "checkout"),
      Ee = D(() => t(s) === "products");
    at(rt, {
      dialogClass: "bg-black/90!",
      get modalBoxClass() {
        return t(b)
      },
      get contentAreaClass() {
        return t(M)
      },
      get isDynamicHeight() {
        return t(g)
      },
      hasCloseButton: !0,
      get hasHeaderBorder() {
        return t(C)
      },
      get disableCloseAnimation() {
        return t(F)
      },
      get hasBackdrop() {
        return t(Ee)
      },
      onclose: () => {
        setTimeout(() => {
          c(s, "products"), c(m, null), c(B, null), c(z, null), c(U, "stripe"), c(J, !1)
        }, 100)
      },
      get open() {
        return o()
      },
      set open(ge) {
        o(ge)
      },
      header: d,
      children: (ge, Me) => {
        var We = Ke(),
          T = ve(We);
        {
          var ee = Q => {
            var Y = Ke(),
              Z = ve(Y);
            {
              var de = ae => {
                  const oe = (Xe, se) => {
                    let Ye = () => se == null ? void 0 : se().droplets,
                      et = () => se == null ? void 0 : se().bonus,
                      dt = () => se == null ? void 0 : se().price,
                      ut = () => se == null ? void 0 : se().stripeLookupkey,
                      oa = () => se == null ? void 0 : se().productId;
                    var qt = ms(),
                      At = r(qt),
                      Rt = r(At);
                    lt(Rt, {
                      class: "mb-1 inline size-7"
                    });
                    var jt = n(Rt, 2),
                      Tt = r(jt),
                      Ut = n(Tt),
                      la = r(Ut, !0);
                    a(Ut), a(jt), a(At);
                    var Lt = n(At, 2),
                      Ft = r(Lt);
                    {
                      var ca = ne => {
                        var le = it();
                        I((He, ft) => x(le, `${He??""} ${ft??""}`), [() => Ye().toLocaleString(navigator.language), () => f.droplets()]), i(ne, le)
                      };
                      P(Ft, ne => {
                        et() && ne(ca)
                      })
                    }
                    var Ht = n(Ft, 2),
                      da = r(Ht);
                    a(Ht), a(Lt);
                    var mt = n(Lt, 2),
                      Ot = r(mt);
                    {
                      var va = ne => {
                        var le = _s();
                        i(ne, le)
                      };
                      P(Ot, ne => {
                        var le;
                        t(l) && (t(h) || ((le = t(m)) == null ? void 0 : le.stripeLookupkey) === ut()) && ne(va)
                      })
                    }
                    var Pt = n(Ot, 2);
                    let Wt;
                    var ua = r(Pt);
                    {
                      var fa = ne => {
                          var le = Ke(),
                            He = ve(le);
                          Gt(He, () => t(K), ft => {
                            var pt = it();
                            I(_a => x(pt, _a), [() => ze.printPriceBySKU(ut())]), i(ft, pt)
                          }), i(ne, le)
                        },
                        pa = ne => {
                          var le = it();
                          I(He => x(le, `MX$${He??""}`), [() => (dt() * 18).toFixed(2)]), i(ne, le)
                        },
                        ha = ne => {
                          var le = it();
                          I(He => x(le, `R$${He??""}`), [() => (dt() * 4).toFixed(2).replace(".", ",")]), i(ne, le)
                        },
                        ga = ne => {
                          var le = it();
                          I(He => x(le, `$${He??""}`), [() => dt().toFixed(2)]), i(ne, le)
                        };
                      P(ua, ne => {
                        t(h) ? ne(fa) : t(R) ? ne(pa, 1) : t(H) ? ne(ha, 2) : ne(ga, -1)
                      })
                    }
                    a(Pt), a(mt), a(qt), I((ne, le, He, ft) => {
                      var pt;
                      x(Tt, `${ne??""} `), x(la, le), x(da, `+${He??""}
								${ft??""}`), mt.disabled = t(l) || t(X), Wt = Ae(Pt, 1, "", null, Wt, {
                        "opacity-0": t(l) && (t(h) || ((pt = t(m)) == null ? void 0 : pt.stripeLookupkey) === ut())
                      })
                    }, [() => (Ye() + et()).toLocaleString(navigator.language), () => f.droplets(), () => et().toLocaleString(navigator.language), () => f.bonus()]), Le("click", mt, async () => {
                      t(h) && await ke(ut()), (!t(h) || ze.forceTWA.current === !1) && Ie({
                        price: dt(),
                        droplets: Ye(),
                        bonus: et(),
                        stripeLookupkey: ut(),
                        productId: oa()
                      }), j()
                    }), i(Xe, qt)
                  };
                  var Ce = ys(),
                    ue = ve(Ce),
                    Se = r(ue, !0);
                  a(ue);
                  var qe = n(ue, 2),
                    Ue = r(qe);
                  oe(Ue, () => ({
                    price: 5,
                    droplets: 25e3,
                    bonus: 0,
                    stripeLookupkey: "droplets_5",
                    productId: 10,
                    dropdownClass: "dropdown-center"
                  }));
                  var De = n(Ue, 2);
                  oe(De, () => ({
                    price: 15,
                    droplets: 75e3,
                    bonus: 3750,
                    stripeLookupkey: "droplets_15",
                    productId: 20,
                    dropdownClass: "dropdown-center"
                  }));
                  var Je = n(De, 2);
                  oe(Je, () => ({
                    price: 30,
                    droplets: 15e4,
                    bonus: 15e3,
                    stripeLookupkey: "droplets_30",
                    productId: 30,
                    dropdownClass: "dropdown-center"
                  }));
                  var fe = n(Je, 2);
                  oe(fe, () => ({
                    price: 50,
                    droplets: 25e4,
                    bonus: 37500,
                    stripeLookupkey: "droplets_50",
                    productId: 40,
                    dropdownClass: "dropdown-center"
                  }));
                  var O = n(fe, 2);
                  oe(O, () => ({
                    price: 75,
                    droplets: 375e3,
                    bonus: 75e3,
                    stripeLookupkey: "droplets_75",
                    productId: 50,
                    dropdownClass: "dropdown-center"
                  }));
                  var he = n(O, 2);
                  oe(he, () => ({
                    price: 100,
                    droplets: 5e5,
                    bonus: 125e3,
                    stripeLookupkey: "droplets_100",
                    productId: 60,
                    dropdownClass: "max-sm:dropdown-top dropdown-center"
                  })), a(qe);
                  var N = n(qe, 2),
                    re = r(N),
                    pe = n(re),
                    $e = r(pe, !0);
                  a(pe), a(N);
                  var Fe = n(N, 2);
                  {
                    var St = Xe => {
                      var se = bs(),
                        Ye = r(se),
                        et = r(Ye, !0);
                      a(Ye), a(se), I(dt => x(et, dt), [() => f.payment_history_view()]), Le("click", Ye, () => _t.pendingHistoryDialogOpen = !0), i(Xe, se)
                    };
                    P(Fe, Xe => {
                      t(h) && Xe(St)
                    })
                  }
                  I((Xe, se, Ye, et) => {
                    x(Se, Xe), x(re, `${se??""} `), Oe(pe, "href", Ye), x($e, et)
                  }, [() => f.you_gain_droplet_per_pixel_painted(), () => f.refund_request_footnote(), () => Ca(), () => f.refund_policy()]), i(ae, Ce)
                },
                be = ae => {
                  var oe = ks(),
                    Ce = ve(oe);
                  {
                    var ue = fe => {
                      var O = xs(),
                        he = r(O),
                        N = r(he),
                        re = r(N),
                        pe = n(re, 2),
                        $e = n(pe);
                      a(N);
                      var Fe = n(N, 2),
                        St = r(Fe, !0);
                      a(Fe), a(he), a(O), I((Xe, se) => {
                        Ae(N, 1, `group flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all ${t(U)==="stripe"?"dark:bg-base-100 bg-white text-[#635bff] shadow-sm":"text-base-content/50 hover:text-base-content/80"}`), Ae(re, 0, `hidden w-auto transition-all sm:block sm:h-4 ${t(U)==="stripe"?"":"grayscale group-hover:grayscale-0"}`), Ae(pe, 0, `hidden w-auto transition-all sm:block sm:h-4 ${t(U)==="stripe"?"":"grayscale group-hover:grayscale-0"}`), x($e, ` ${Xe??""}`), Ae(Fe, 1, `flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all ${t(U)==="other"?"dark:bg-base-100 bg-white text-[#30313d] shadow-sm":"text-base-content/50 hover:text-base-content/80"}`), x(St, se)
                      }, [() => f.card(), () => f.other_methods()]), Le("click", N, () => c(U, "stripe")), Le("click", Fe, () => c(U, "other")), i(fe, O)
                    };
                    P(Ce, fe => {
                      t(ie) || fe(ue)
                    })
                  }
                  var Se = n(Ce, 2),
                    qe = r(Se);
                  {
                    var Ue = fe => {
                      var O = Qt(),
                        he = r(O);
                      {
                        var N = pe => {
                            ps(pe, {
                              get clientSecret() {
                                return t(B)
                              },
                              onComplete: we,
                              onUnavailable: E
                            })
                          },
                          re = pe => {
                            var $e = ws();
                            i(pe, $e)
                          };
                        P(he, pe => {
                          t(B) ? pe(N) : pe(re, -1)
                        })
                      }
                      a(O), I(() => Ae(O, 1, Kt(t(U) !== "stripe" ? "h-0 overflow-hidden" : ""))), i(fe, O)
                    };
                    P(qe, fe => {
                      t(ie) || fe(Ue)
                    })
                  }
                  var De = n(qe, 2);
                  {
                    var Je = fe => {
                      var O = Qt(),
                        he = r(O);
                      $r(he, {
                        get lookupKey() {
                          return t(m).stripeLookupkey
                        },
                        oncomplete: async N => {
                          if (!N) {
                            ce();
                            return
                          }
                          try {
                            let re = t(m).droplets + t(m).bonus;
                            const {
                              credited: pe,
                              orderId: $e,
                              grant: Fe
                            } = await Ge.refreshFastspringOrder(N);
                            if (!pe) {
                              ce();
                              return
                            }(Fe == null ? void 0 : Fe.currency) === "droplets" && (re = Fe.amount), await ye.refresh(), $e && await Ge.markFastspringOrderAsRead($e), localStorage.removeItem("fscBackFromCheckout"), xe(), o(!1), c(_, re, !0), c(w, !0)
                          } catch {
                            Dt.warning(f.payment_refresh_error())
                          }
                        }
                      }), a(O), I(() => Ae(O, 1, Kt(t(U) !== "other" ? "h-0 overflow-hidden" : ""))), i(fe, O)
                    };
                    P(De, fe => {
                      t(J) && fe(Je)
                    })
                  }
                  a(Se), i(ae, oe)
                };
              P(Z, ae => {
                t(s) === "products" ? ae(de) : t(s) === "checkout" && t(m) && ae(be, 1)
              })
            }
            i(Q, Y)
          };
          P(T, Q => {
            ye.data && Q(ee)
          })
        }
        i(ge, We)
      },
      $$slots: {
        header: !0,
        default: !0
      }
    })
  }
  a(Ne);
  var st = n(Ne, 2);
  Nr(st, {
    get purchasedDroplets() {
      return t(_)
    },
    get currency() {
      return t(L)
    },
    onbacktostore: () => o(!1),
    get open() {
      return t(w)
    },
    set open(d) {
      c(w, d, !0)
    }
  });
  var nt = n(st, 2);
  Xr(nt, {
    onbacktostore: () => o(!0),
    get open() {
      return t(k)
    },
    set open(d) {
      c(k, d, !0)
    }
  });
  var Ze = n(nt, 2);
  Kr(Ze, {
    get open() {
      return t(u)
    },
    set open(d) {
      c(u, d, !0)
    }
  });
  var ct = n(Ze, 2);
  Wr(ct, {
    onViewHistory: () => {
      c(W, !1), _t.pendingHistoryDialogOpen = !0
    },
    get open() {
      return t(W)
    },
    set open(d) {
      c(W, d, !0)
    }
  });
  var q = n(ct, 2);
  wr(q, {
    onRetry: () => {
      c(y, !1), ke(t(S))
    },
    get open() {
      return t(y)
    },
    set open(d) {
      c(y, d, !0)
    }
  });
  var A = n(q, 2);
  Or(A, {
    get open() {
      return _t.pendingHistoryDialogOpen
    },
    set open(d) {
      _t.pendingHistoryDialogOpen = d
    }
  });
  var V = n(A, 2);
  Gt(V, () => t(X), d => {
    {
      let b = D(() => {
        var M;
        return (M = ze.playBillingBlockedError) == null ? void 0 : M.printError
      });
      Yr(d, {
        get message() {
          return t(b)
        },
        get open() {
          return t(X)
        },
        set open(M) {
          c(X, M, !0)
        }
      })
    }
  }), I(() => Oe(Ne, "data-theme", t(s) === "checkout" ? "custom-winter" : void 0)), i(v, me), je()
}
Ct(["click"]);

function on([v, e], [o, s]) {
  v = Math.floor(v), e = Math.floor(e), o = Math.floor(o), s = Math.floor(s);
  const l = [],
    _ = Math.abs(o - v),
    L = Math.abs(s - e),
    w = v < o ? 1 : -1,
    k = e < s ? 1 : -1;
  let u = _ - L,
    m = v,
    B = e;
  for (; l.push([m, B]), !(m === o && B === s);) {
    const z = 2 * u;
    z > -L && (u -= L, m += w), z < _ && (u += _, B += k)
  }
  return l
}
var Ss = p('<img class="pixelated bg-base-200" alt="User profile"/>'),
  qs = p('<img alt="Profile frame" class="pixelated center-absolute pointer-events-none absolute z-10 aspect-square max-w-none"/>'),
  As = p('<div class="relative isolate w-max"><div class="bg-base-content/20 size-12 rounded-full"></div> <div class="level-fill center-absolute absolute size-12 rotate-[215deg] rounded-full svelte-12f880g"></div> <div class="avatar center-absolute absolute"><div class="size-10 rounded-full"><!></div></div> <!> <div> </div></div>');

function ln(v, e) {
  const o = D(() => e.level % 1 * 360);
  var s = As(),
    l = n(r(s), 2),
    _ = n(l, 2),
    L = r(_),
    w = r(L);
  {
    var k = h => {
        za(h, {
          get userId() {
            return e.userId
          },
          get seed() {
            return e.avatarSeed
          }
        })
      },
      u = h => {
        var K = Ss();
        I(() => Oe(K, "src", e.pictureUrl)), i(h, K)
      };
    P(w, h => {
      e.pictureUrl ? h(u, -1) : h(k)
    })
  }
  a(L), a(_);
  var m = n(_, 2);
  {
    var B = h => {
      var K = qs();
      tt(K, "width: 67.87878787878788px;"), I(() => Oe(K, "src", e.frameUrl)), i(h, K)
    };
    P(m, h => {
      e.frameUrl && h(B)
    })
  }
  var z = n(m, 2);
  let R;
  var H = r(z, !0);
  a(z), a(s), I(h => {
    tt(l, `--angle: ${t(o)??""}deg; --color: var(--color-secondary)`), R = Ae(z, 1, "text-primary-content bg-secondary absolute bottom-0 z-20 flex items-center justify-center rounded-full px-[5px] py-0 text-xs font-bold", null, R, {
      "left-0": e.level > 99,
      "-left-1": e.level > 99
    }), x(H, h)
  }, [() => Math.floor(e.level)]), i(v, s)
}
export {
  Fa as D, $r as F, ln as P, ps as S, nn as a, Nr as b, sn as c, kr as d, Kr as e, Wr as f, wr as g, Yr as h, on as r
};