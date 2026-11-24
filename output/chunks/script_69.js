import {
  At as e,
  Bt as t,
  C as n,
  Ct as r,
  F as i,
  Ft as a,
  Lt as o,
  M as s,
  Mt as c,
  N as l,
  Q as u,
  Y as d,
  a as f,
  cn as p,
  en as m,
  et as h,
  f as g,
  j as ee,
  jt as _,
  nt as v,
  o as y,
  pt as b,
  tn as x,
  tt as te,
  wt as S,
  x as ne
} from "./DXDHrD2o.js";
import "./B8UK1oE5.js";
import {
  r as re
} from "./Ao3tJVYU.js";
import {
  t as C
} from "./BH5PwBe6.js";
import {
  t as w
} from "./BjfSTdKe.js";
import {
  It as T,
  f as ie,
  gt as E,
  mt as ae,
  p as D
} from "./BGd5Vphg.js";
import {
  r as O
} from "./DCEagYC0.js";
import {
  t as k
} from "./dV_hY48k.js";
import {
  n as oe
} from "./BW2ndcqw.js";
import {
  t as A
} from "./BCmKQY7_.js";
import {
  t as j
} from "./BPawterg.js";
var M = new Set([`$$slots`, `$$events`, `$$legacy`, `value`, `fontSize`, `color`, `weight`, `mono`, `width`]),
  N = v(`<canvas></canvas>`);

function P(e, t) {
  x(t, !0);
  let r = f(t, `width`, 15, 0),
    i = y(t, M),
    s = o(0),
    c = o(null);
  S(() => {
    if (!b(c)) return;
    let e = b(c),
      n = e.getContext(`2d`);
    if (!n) return;
    let i = t.value,
      o = t.color ?? `#394e6a`,
      l = getComputedStyle(e).getPropertyValue(t.mono ? `--font-geist-mono` : `--font-sans`),
      u = C.current || 1,
      d = `${t.weight??`normal`} ${t.fontSize}px ${l}`,
      f = !0;

    function p() {
      if (!f || !n) return;
      n.font = d, n.textBaseline = `alphabetic`;
      let t = n.measureText(i),
        c = Math.ceil(Math.max(0, t.actualBoundingBoxLeft) * u) / u,
        l = Math.ceil(Math.max(0, t.actualBoundingBoxAscent) * u) / u,
        p = Math.ceil((c + Math.max(t.width, t.actualBoundingBoxRight)) * u) / u,
        m = Math.ceil((l + Math.max(0, t.actualBoundingBoxDescent)) * u) / u;
      e.width = Math.max(1, Math.round(p * u)), e.height = Math.max(1, Math.round(m * u)), n.setTransform(u, 0, 0, u, 0, 0), n.font = d, n.textBaseline = `alphabetic`, n.fillStyle = o, n.fillText(i, c, l), r(p), a(s, m)
    }
    return p(), document.fonts.load(d, i).then(p, () => {}), document.fonts.addEventListener(`loadingdone`, p), () => {
      f = !1, document.fonts.removeEventListener(`loadingdone`, p)
    }
  });
  var l = N();
  n(l, () => ({
    style: `width: ${r()??``}px; height: ${b(s)??``}px`,
    ...i
  })), g(l, e => a(c, e), () => b(c)), h(e, l), m()
}
var se = new Set([`$$slots`, `$$events`, `$$legacy`, `loading`, `charges`, `chargeMax`, `cooldownMs`, `showCooldown`, `maxWidth`, `compact`, `minimized`, `iconOnly`, `onclick`]),
  ce = v(`<span class="text-sm font-semibold tabular-nums opacity-90 sm:mt-px"> </span>`),
  le = v(`<!> <div class="flex items-center gap-2 whitespace-nowrap"> <!></div>`, 1),
  ue = v(`<span class="paint-button-balance text-xl leading-none font-semibold svelte-naszew" aria-hidden="true">&infin;</span>`),
  F = v(`<span><!></span>`),
  I = v(`<span> </span>`),
  L = v(`<span><!> <!></span>`),
  R = v(`<!> <div><span> </span> <!></div>`, 1),
  z = v(`<span class="loading loading-spinner center-absolute absolute"></span>`),
  B = v(`<button><div><!></div> <!></button>`);

function V(v, S) {
  x(S, !0);
  let C = re(),
    M = f(S, `showCooldown`, 3, !0),
    N = f(S, `compact`, 3, !1),
    V = f(S, `minimized`, 3, !1),
    H = f(S, `iconOnly`, 3, !1),
    U = y(S, se),
    W = o(0),
    G = o(void 0),
    K = o(void 0),
    q = t(() => S.cooldownMs ?? E.cooldown),
    de = t(() => T.theme === `dark` ? `rgba(255, 255, 255, 0.3)` : `#394e6a33`),
    J = t(() => {
      let e = E.timeoutUntil;
      if (!e || e.getTime() <= T.now) return;
      let t = D(e, T.now);
      return {
        isBan: t,
        countdown: t ? null : ie(e, T.now)
      }
    });

  function fe({
    days: e,
    hours: t,
    minutes: n
  }) {
    return e > 0 ? `${e}d ${t}h` : t > 0 ? `${t}h ${n}m` : `${n}m`
  }
  let Y = t(() => H() ? b(J) ? b(J).isBan ? w.banned() : w.timeout() : w.paint() : void 0);
  O(() => [S.loading, S.maxWidth, N()], () => {
    a(K, void 0), requestAnimationFrame(() => {
      if (!b(G)) return;
      let e = b(G).offsetWidth;
      !N() && !S.loading && S.maxWidth !== void 0 && e + 20 > S.maxWidth ? a(K, 16 * (S.maxWidth / e) * .8) : a(K, void 0)
    })
  });
  var X = B(),
    pe = e => {
      var t;
      oe(`heavy`), (t = S.onclick) == null || t.call(S, e)
    };
  n(X, () => ({
    ...U,
    "aria-label": b(Y) ?? U[`aria-label`],
    onclick: pe,
    class: `btn btn-lg sm:btn-xl relative ${b(J)?b(J).isBan?`btn-error`:`btn-warning`:`btn-primary`} ${S.class??``}`,
    style: `max-width: ${S.maxWidth?`${S.maxWidth}px`:`none`}
	${b(K)?`;--paint-font-size: ${b(K)}px`:``}`,
    [ne]: {
      compact: N(),
      minimized: V(),
      "icon-only": H(),
      "pixel-ui": !C.standard,
      "w-max": N(),
      scaled: b(K) !== void 0
    }
  }), void 0, void 0, void 0, `svelte-naszew`);
  var Z = e(X);
  let Q;
  var me = e(Z),
    he = e => {
      var t = te(),
        n = _(t),
        r = e => {
          j(e, {
            class: `size-4.5`
          })
        },
        i = e => {
          A(e, {
            class: `size-4.5`
          })
        };
      d(n, e => {
        b(J) ? e(r) : e(i, -1)
      }), h(e, t)
    },
    ge = t => {
      var n = le(),
        i = _(n);
      j(i, {
        class: `size-6`
      });
      var a = c(i, 2),
        o = e(a),
        s = c(o),
        l = t => {
          var n = ce(),
            i = e(n, !0);
          p(n), r(e => u(i, e), [() => fe(b(J).countdown)]), h(t, n)
        };
      d(s, e => {
        b(J).countdown && e(l)
      }), p(a), r(e => u(o, `${e??``} `), [() => b(J).isBan ? w.banned() : w.timeout()]), h(t, n)
    },
    $ = n => {
      var o = R(),
        f = _(o);
      {
        let e = t(() => N() ? `paint-button-brush size-6 shrink-0 max-sm:hidden` : `size-6`);
        A(f, {
          get class() {
            return b(e)
          }
        })
      }
      var m = c(f, 2),
        g = e(m),
        v = e(g, !0);
      p(g), i(g, () => k(N() ? w.paint() : void 0));
      var y = c(g, 2),
        x = n => {
          let i = t(() => S.chargeMax ?? E.data.charges.max),
            o = t(() => S.chargeMax === void 0 && E.data.charges.infinite);
          var l = L();
          let f;
          var m = e(l),
            g = e => {
              var t = ue();
              h(e, t)
            },
            _ = n => {
              var o = F();
              let c;
              var l = e(o);
              {
                let e = t(() => N() ? `max-w-full object-contain` : void 0),
                  n = t(() => b(K) ?? 16),
                  r = t(() => `${Math.floor(S.charges)}/${b(i)}`),
                  o = t(() => S.disabled ? b(de) : `#ffffff`);
                P(l, {
                  get class() {
                    return b(e)
                  },
                  weight: 600,
                  get fontSize() {
                    return b(n)
                  },
                  get value() {
                    return b(r)
                  },
                  get color() {
                    return b(o)
                  },
                  get width() {
                    return b(W)
                  },
                  set width(e) {
                    a(W, e, !0)
                  }
                })
              }
              p(o), r(e => {
                c = s(o, 1, `paint-button-balance svelte-naszew`, null, c, {
                  "min-w-0": N()
                }), ee(o, `width: ${e??``}px`)
              }, [() => (Math.floor(b(W) / 5) + 1) * 5]), h(n, o)
            };
          d(m, e => {
            b(o) ? e(g) : e(_, -1)
          });
          var v = c(m, 2),
            y = t => {
              var n = I();
              let i;
              var a = e(n);
              p(n), r(e => {
                i = s(n, 1, `paint-button-cooldown min-w-7 text-xs svelte-naszew`, null, i, {
                  "shrink-0": N()
                }), u(a, `(${e??``})`)
              }, [() => ae(b(q))]), h(t, n)
            };
          d(v, e => {
            !b(o) && M() && S.charges < b(i) && b(q) !== void 0 && e(y)
          }), p(l), r(() => f = s(l, 1, `paint-button-charges flex items-center gap-1 sm:mt-px svelte-naszew`, null, f, {
            "min-w-0": N(),
            "max-w-full": N()
          })), h(n, l)
        };
      d(y, e => {
        S.charges !== void 0 && E.data && e(x)
      }), p(m), r(e => {
        s(m, 1, l(N() ? `paint-button-label flex min-w-0 items-center gap-2 whitespace-nowrap max-sm:flex-col max-sm:gap-0` : `flex items-center gap-2 whitespace-nowrap`), `svelte-naszew`), s(g, 1, l(N() ? `max-w-full truncate` : void 0), `svelte-naszew`), u(v, e)
      }, [() => w.paint()]), h(n, o)
    };
  d(me, e => {
    H() ? e(he) : b(J) ? e(ge, 1) : e($, -1)
  }), p(Z), g(Z, e => a(G, e), () => b(G));
  var _e = c(Z, 2),
    ve = e => {
      var t = z();
      h(e, t)
    };
  d(_e, e => {
    S.loading && e(ve)
  }), p(X), i(X, () => k(b(Y))), r(() => Q = s(Z, 1, `paint-button-content flex items-center gap-1.5 svelte-naszew`, null, Q, {
    "min-w-0": N(),
    "max-w-full": N()
  })), h(v, X), m()
}

function H(e, t, n) {
  return e < t ? t : e > n ? n : e
}

function U(e, t) {
  let n = 10 ** t;
  return Math.round(e * n) / n
}

function W(e) {
  if (e < 1e3) return String(e);
  let t = [`K`, `M`, `B`, `T`, `Q`],
    n = 0,
    r = e / 1e3;
  for (; Math.round(r) >= 1e3 && n < t.length - 1;) r /= 1e3, n++;
  return `${U(r,+(r<10))}${t[n]}`
}
export {
  P as a, V as i, W as n, U as r, H as t
};