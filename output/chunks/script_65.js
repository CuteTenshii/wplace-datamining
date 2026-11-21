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
  tt as S,
  wt as C,
  x as te
} from "./DXDHrD2o.js";
import "./B8UK1oE5.js";
import {
  r as ne
} from "./DLZHKRQt.js";
import {
  t as w
} from "./BH5PwBe6.js";
import {
  t as T
} from "./Hth4yPu_.js";
import {
  It as E,
  f as re,
  gt as D,
  mt as ie,
  p as ae
} from "./BVLD6FI9.js";
import {
  r as oe
} from "./DCEagYC0.js";
import {
  n as se
} from "./iKJoyZfV.js";
import {
  t as O
} from "./D4SU47yX.js";
import {
  t as k
} from "./BFm32qXE.js";
import {
  t as A
} from "./BJSZ8Ikf.js";
var j = new Set([`$$slots`, `$$events`, `$$legacy`, `value`, `fontSize`, `color`, `weight`, `mono`, `width`]),
  M = v(`<canvas></canvas>`);

function N(e, t) {
  x(t, !0);
  let r = f(t, `width`, 15, 0),
    i = y(t, j),
    s = o(0),
    c = o(null);
  C(() => {
    if (!b(c)) return;
    let e = b(c),
      n = e.getContext(`2d`);
    if (!n) return;
    let i = t.value,
      o = t.color ?? `#394e6a`,
      l = getComputedStyle(e).getPropertyValue(t.mono ? `--font-geist-mono` : `--font-sans`),
      u = w.current || 1,
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
  var l = M();
  n(l, () => ({
    style: `width: ${r()??``}px; height: ${b(s)??``}px`,
    ...i
  })), g(l, e => a(c, e), () => b(c)), h(e, l), m()
}
var P = new Set([`$$slots`, `$$events`, `$$legacy`, `loading`, `charges`, `chargeMax`, `cooldownMs`, `showCooldown`, `maxWidth`, `compact`, `minimized`, `iconOnly`, `onclick`]),
  ce = v(`<span class="text-sm font-semibold tabular-nums opacity-90 sm:mt-px"> </span>`),
  le = v(`<!> <div class="flex items-center gap-2 whitespace-nowrap"> <!></div>`, 1),
  ue = v(`<span class="paint-button-balance text-xl leading-none font-semibold svelte-naszew" aria-hidden="true">&infin;</span>`),
  F = v(`<span><!></span>`),
  I = v(`<span> </span>`),
  L = v(`<span><!> <!></span>`),
  R = v(`<!> <div><span> </span> <!></div>`, 1),
  z = v(`<span class="loading loading-spinner center-absolute absolute"></span>`),
  B = v(`<button><div><!></div> <!></button>`);

function V(v, C) {
  x(C, !0);
  let w = ne(),
    j = f(C, `showCooldown`, 3, !0),
    M = f(C, `compact`, 3, !1),
    V = f(C, `minimized`, 3, !1),
    H = f(C, `iconOnly`, 3, !1),
    U = y(C, P),
    W = o(0),
    G = o(void 0),
    K = o(void 0),
    q = t(() => C.cooldownMs ?? D.cooldown),
    de = t(() => E.theme === `dark` ? `rgba(255, 255, 255, 0.3)` : `#394e6a33`),
    J = t(() => {
      let e = D.timeoutUntil;
      if (!e || e.getTime() <= E.now) return;
      let t = ae(e, E.now);
      return {
        isBan: t,
        countdown: t ? null : re(e, E.now)
      }
    });

  function fe({
    days: e,
    hours: t,
    minutes: n
  }) {
    return e > 0 ? `${e}d ${t}h` : t > 0 ? `${t}h ${n}m` : `${n}m`
  }
  let Y = t(() => H() ? b(J) ? b(J).isBan ? T.banned() : T.timeout() : T.paint() : void 0);
  oe(() => [C.loading, C.maxWidth, M()], () => {
    a(K, void 0), requestAnimationFrame(() => {
      if (!b(G)) return;
      let e = b(G).offsetWidth;
      !M() && !C.loading && C.maxWidth !== void 0 && e + 20 > C.maxWidth ? a(K, 16 * (C.maxWidth / e) * .8) : a(K, void 0)
    })
  });
  var X = B(),
    Z = e => {
      var t;
      se(`heavy`), (t = C.onclick) == null || t.call(C, e)
    };
  n(X, () => ({
    ...U,
    "aria-label": b(Y) ?? U[`aria-label`],
    onclick: Z,
    class: `btn btn-lg sm:btn-xl relative ${b(J)?b(J).isBan?`btn-error`:`btn-warning`:`btn-primary`} ${C.class??``}`,
    style: `max-width: ${C.maxWidth?`${C.maxWidth}px`:`none`}
	${b(K)?`;--paint-font-size: ${b(K)}px`:``}`,
    [te]: {
      compact: M(),
      minimized: V(),
      "icon-only": H(),
      "pixel-ui": !w.standard,
      "w-max": M(),
      scaled: b(K) !== void 0
    }
  }), void 0, void 0, void 0, `svelte-naszew`);
  var Q = e(X);
  let $;
  var pe = e(Q),
    me = e => {
      var t = S(),
        n = _(t),
        r = e => {
          k(e, {
            class: `size-4.5`
          })
        },
        i = e => {
          O(e, {
            class: `size-4.5`
          })
        };
      d(n, e => {
        b(J) ? e(r) : e(i, -1)
      }), h(e, t)
    },
    he = t => {
      var n = le(),
        i = _(n);
      k(i, {
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
      }), p(a), r(e => u(o, `${e??``} `), [() => b(J).isBan ? T.banned() : T.timeout()]), h(t, n)
    },
    ge = n => {
      var o = R(),
        f = _(o);
      {
        let e = t(() => M() ? `paint-button-brush size-6 shrink-0 max-sm:hidden` : `size-6`);
        O(f, {
          get class() {
            return b(e)
          }
        })
      }
      var m = c(f, 2),
        g = e(m),
        v = e(g, !0);
      p(g), i(g, () => A(M() ? T.paint() : void 0));
      var y = c(g, 2),
        x = n => {
          let i = t(() => C.chargeMax ?? D.data.charges.max),
            o = t(() => C.chargeMax === void 0 && D.data.charges.infinite);
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
                let e = t(() => M() ? `max-w-full object-contain` : void 0),
                  n = t(() => b(K) ?? 16),
                  r = t(() => `${Math.floor(C.charges)}/${b(i)}`),
                  o = t(() => C.disabled ? b(de) : `#ffffff`);
                N(l, {
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
                  "min-w-0": M()
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
                  "shrink-0": M()
                }), u(a, `(${e??``})`)
              }, [() => ie(b(q))]), h(t, n)
            };
          d(v, e => {
            !b(o) && j() && C.charges < b(i) && b(q) !== void 0 && e(y)
          }), p(l), r(() => f = s(l, 1, `paint-button-charges flex items-center gap-1 sm:mt-px svelte-naszew`, null, f, {
            "min-w-0": M(),
            "max-w-full": M()
          })), h(n, l)
        };
      d(y, e => {
        C.charges !== void 0 && D.data && e(x)
      }), p(m), r(e => {
        s(m, 1, l(M() ? `paint-button-label flex min-w-0 items-center gap-2 whitespace-nowrap max-sm:flex-col max-sm:gap-0` : `flex items-center gap-2 whitespace-nowrap`), `svelte-naszew`), s(g, 1, l(M() ? `max-w-full truncate` : void 0), `svelte-naszew`), u(v, e)
      }, [() => T.paint()]), h(n, o)
    };
  d(pe, e => {
    H() ? e(me) : b(J) ? e(he, 1) : e(ge, -1)
  }), p(Q), g(Q, e => a(G, e), () => b(G));
  var _e = c(Q, 2),
    ve = e => {
      var t = z();
      h(e, t)
    };
  d(_e, e => {
    C.loading && e(ve)
  }), p(X), i(X, () => A(b(Y))), r(() => $ = s(Q, 1, `paint-button-content flex items-center gap-1.5 svelte-naszew`, null, $, {
    "min-w-0": M(),
    "max-w-full": M()
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
  N as a, V as i, W as n, U as r, H as t
};