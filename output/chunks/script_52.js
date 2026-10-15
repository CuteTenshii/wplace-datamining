import {
  At as e,
  D as t,
  Dt as n,
  Et as r,
  Ft as i,
  G as a,
  J as o,
  Mt as s,
  O as c,
  Q as l,
  Tt as u,
  X as d,
  Xt as f,
  Yt as p,
  _ as m,
  a as h,
  bt as g,
  f as _,
  j as v,
  k as y,
  lt as b,
  o as x,
  rn as S,
  y as C,
  yt as w
} from "./R3px7NU1.js";
import "./B8UK1oE5.js";
import {
  t as ee
} from "./B4sOMMyz.js";
import {
  t as T
} from "./CVrzdkX_.js";
import {
  t as E
} from "./DHsyxZSC.js";
import {
  S as te,
  ft as D,
  k as ne,
  n as O,
  x as k
} from "./CZpmVqO8.js";
import {
  n as A
} from "./B_dHrE5W.js";
import {
  t as j
} from "./DLS-5L1S.js";
import {
  t as re
} from "./BVn-mg-g.js";
import {
  r as ie
} from "./Bsxtn1Lf.js";
import {
  t as ae
} from "./DPq9H1d9.js";
var M = new Set([`$$slots`, `$$events`, `$$legacy`, `value`, `fontSize`, `color`, `weight`, `mono`, `width`]),
  N = l(`<canvas></canvas>`);

function P(t, n) {
  f(n, !0);
  let r = h(n, `width`, 15, 0),
    i = x(n, M),
    a = s(0),
    o = s(null);
  g(() => {
    if (!b(o)) return;
    let t = b(o),
      i = t.getContext(`2d`);
    if (!i) return;
    let s = n.value,
      c = n.color ?? `#394e6a`,
      l = getComputedStyle(t).getPropertyValue(n.mono ? `--font-geist-mono` : `--font-sans`),
      u = T.current || 1,
      d = `${n.weight??`normal`} ${n.fontSize}px ${l}`,
      f = !0;

    function p() {
      if (!f || !i) return;
      i.font = d, i.textBaseline = `alphabetic`;
      let n = i.measureText(s),
        o = Math.ceil(Math.max(0, n.actualBoundingBoxLeft) * u) / u,
        l = Math.ceil(Math.max(0, n.actualBoundingBoxAscent) * u) / u,
        p = Math.ceil((o + Math.max(n.width, n.actualBoundingBoxRight)) * u) / u,
        m = Math.ceil((l + Math.max(0, n.actualBoundingBoxDescent)) * u) / u;
      t.width = Math.max(1, Math.round(p * u)), t.height = Math.max(1, Math.round(m * u)), i.setTransform(u, 0, 0, u, 0, 0), i.font = d, i.textBaseline = `alphabetic`, i.fillStyle = c, i.fillText(s, o, l), r(p), e(a, m)
    }
    return p(), document.fonts.load(d, s).then(p, () => {}), document.fonts.addEventListener(`loadingdone`, p), () => {
      f = !1, document.fonts.removeEventListener(`loadingdone`, p)
    }
  });
  var c = N();
  C(c, () => ({
    style: `width: ${r()??``}px; height: ${b(a)??``}px`,
    ...i
  })), _(c, t => e(o, t), () => b(o)), d(t, c), p()
}
var oe = new Set([`$$slots`, `$$events`, `$$legacy`, `loading`, `charges`, `chargeMax`, `cooldownMs`, `showCooldown`, `maxWidth`, `compact`, `minimized`, `onclick`]),
  F = l(`<span class="text-sm font-semibold tabular-nums opacity-90 sm:mt-px"> </span>`),
  I = l(`<!> <div class="flex items-center gap-2 whitespace-nowrap"> <!></div>`, 1),
  L = l(`<span class="paint-button-balance text-xl leading-none font-semibold svelte-naszew" aria-hidden="true">&infin;</span>`),
  R = l(`<span><!></span>`),
  z = l(`<span> </span>`),
  B = l(`<span><!> <!></span>`),
  V = l(`<!> <div><span> </span> <!></div>`, 1),
  H = l(`<span class="loading loading-spinner center-absolute absolute"></span>`),
  U = l(`<button><div><!></div> <!></button>`);

function W(l, g) {
  f(g, !0);
  let T = h(g, `showCooldown`, 3, !0),
    M = h(g, `compact`, 3, !1),
    N = h(g, `minimized`, 3, !1),
    W = x(g, oe),
    G = s(0),
    K = s(void 0),
    q = s(void 0),
    J = i(() => g.cooldownMs ?? O.cooldown),
    se = i(() => D.theme === `dark` ? `rgba(255, 255, 255, 0.3)` : `#394e6a33`),
    Y = i(() => {
      let e = O.timeoutUntil;
      if (!e || e.getTime() <= D.now) return;
      let t = te(e, D.now);
      return {
        isBan: t,
        countdown: t ? null : k(e, D.now)
      }
    });

  function ce({
    days: e,
    hours: t,
    minutes: n
  }) {
    return e > 0 ? `${e}d ${t}h` : t > 0 ? `${t}h ${n}m` : `${n}m`
  }
  ie(() => [g.loading, g.maxWidth, M()], () => {
    e(q, void 0), requestAnimationFrame(() => {
      if (!b(K)) return;
      let t = b(K).offsetWidth;
      !M() && !g.loading && g.maxWidth !== void 0 && t + 20 > g.maxWidth ? e(q, 16 * (g.maxWidth / t) * .8) : e(q, void 0)
    })
  });
  var X = U(),
    Z = e => {
      var t;
      A(`heavy`), (t = g.onclick) == null || t.call(g, e)
    };
  C(X, () => ({
    ...W,
    onclick: Z,
    class: `btn btn-lg sm:btn-xl relative ${b(Y)?b(Y).isBan?`btn-error`:`btn-warning`:`btn-primary`} ${g.class??``}`,
    style: `max-width: ${g.maxWidth?`${g.maxWidth}px`:`none`}
	${b(q)?`;--paint-font-size: ${b(q)}px`:``}`,
    [m]: {
      compact: M(),
      minimized: N(),
      "pixel-ui": !ee.standard,
      "w-max": M(),
      scaled: b(q) !== void 0
    }
  }), void 0, void 0, void 0, `svelte-naszew`);
  var Q = u(X);
  let $;
  var le = u(Q),
    ue = e => {
      var t = I(),
        i = r(t);
      re(i, {
        class: `size-6`
      });
      var s = n(i, 2),
        c = u(s),
        l = n(c),
        f = e => {
          var t = F(),
            n = u(t, !0);
          S(t), w(e => o(n, e), [() => ce(b(Y).countdown)]), d(e, t)
        };
      a(l, e => {
        b(Y).countdown && e(f)
      }), S(s), w(e => o(c, `${e??``} `), [() => b(Y).isBan ? E.banned() : E.timeout()]), d(e, t)
    },
    de = s => {
      var l = V(),
        f = r(l);
      {
        let e = i(() => M() ? `paint-button-brush size-6 shrink-0 max-sm:hidden` : `size-6`);
        j(f, {
          get class() {
            return b(e)
          }
        })
      }
      var p = n(f, 2),
        m = u(p),
        h = u(m, !0);
      S(m), v(m, () => ae(M() ? E.paint() : void 0));
      var _ = n(m, 2),
        x = r => {
          let s = i(() => g.chargeMax ?? O.data.charges.max),
            l = i(() => g.chargeMax === void 0 && O.data.charges.infinite);
          var f = B();
          let p;
          var m = u(f),
            h = e => {
              var t = L();
              d(e, t)
            },
            _ = n => {
              var r = R();
              let a;
              var o = u(r);
              {
                let t = i(() => M() ? `max-w-full object-contain` : void 0),
                  n = i(() => b(q) ?? 16),
                  r = i(() => `${Math.floor(g.charges)}/${b(s)}`),
                  a = i(() => g.disabled ? b(se) : `#ffffff`);
                P(o, {
                  get class() {
                    return b(t)
                  },
                  weight: 600,
                  get fontSize() {
                    return b(n)
                  },
                  get value() {
                    return b(r)
                  },
                  get color() {
                    return b(a)
                  },
                  get width() {
                    return b(G)
                  },
                  set width(t) {
                    e(G, t, !0)
                  }
                })
              }
              S(r), w(e => {
                a = c(r, 1, `paint-button-balance svelte-naszew`, null, a, {
                  "min-w-0": M()
                }), t(r, `width: ${e??``}px`)
              }, [() => (Math.floor(b(G) / 5) + 1) * 5]), d(n, r)
            };
          a(m, e => {
            b(l) ? e(h) : e(_, -1)
          });
          var v = n(m, 2),
            y = e => {
              var t = z();
              let n;
              var r = u(t);
              S(t), w(e => {
                n = c(t, 1, `paint-button-cooldown min-w-7 text-xs svelte-naszew`, null, n, {
                  "shrink-0": M()
                }), o(r, `(${e??``})`)
              }, [() => ne(b(J))]), d(e, t)
            };
          a(v, e => {
            !b(l) && T() && g.charges < b(s) && b(J) !== void 0 && e(y)
          }), S(f), w(() => p = c(f, 1, `paint-button-charges flex items-center gap-1 sm:mt-px svelte-naszew`, null, p, {
            "min-w-0": M(),
            "max-w-full": M()
          })), d(r, f)
        };
      a(_, e => {
        g.charges !== void 0 && O.data && e(x)
      }), S(p), w(e => {
        c(p, 1, y(M() ? `paint-button-label flex min-w-0 items-center gap-2 whitespace-nowrap max-sm:flex-col max-sm:gap-0` : `flex items-center gap-2 whitespace-nowrap`), `svelte-naszew`), c(m, 1, y(M() ? `max-w-full truncate` : void 0), `svelte-naszew`), o(h, e)
      }, [() => E.paint()]), d(s, l)
    };
  a(le, e => {
    b(Y) ? e(ue) : e(de, -1)
  }), S(Q), _(Q, t => e(K, t), () => b(K));
  var fe = n(Q, 2),
    pe = e => {
      var t = H();
      d(e, t)
    };
  a(fe, e => {
    g.loading && e(pe)
  }), S(X), w(() => $ = c(Q, 1, `paint-button-content flex items-center gap-1.5 svelte-naszew`, null, $, {
    "min-w-0": M(),
    "max-w-full": M()
  })), d(l, X), p()
}

function G(e, t, n) {
  return e < t ? t : e > n ? n : e
}

function K(e, t) {
  let n = 10 ** t;
  return Math.round(e * n) / n
}

function q(e) {
  if (e < 1e3) return String(e);
  let t = [`K`, `M`, `B`, `T`, `Q`],
    n = 0,
    r = e / 1e3;
  for (; Math.round(r) >= 1e3 && n < t.length - 1;) r /= 1e3, n++;
  return `${K(r,+(r<10))}${t[n]}`
}
export {
  P as a, W as i, q as n, K as r, G as t
};