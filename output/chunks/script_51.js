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
} from "./Ur3lDrik.js";
import {
  t as T
} from "./CVrzdkX_.js";
import {
  t as E
} from "./DW_c_uAH.js";
import {
  D,
  E as O,
  P as te,
  _t as k,
  n as A
} from "./D2tGtYvL.js";
import {
  n as ne
} from "./D7Cg4hOV.js";
import {
  n as j
} from "./D3EdGCh_.js";
import {
  t as M
} from "./fyiPRClm.js";
import {
  r as re
} from "./Bsxtn1Lf.js";
import {
  t as N
} from "./DPq9H1d9.js";
var P = new Set([`$$slots`, `$$events`, `$$legacy`, `value`, `fontSize`, `color`, `weight`, `mono`, `width`]),
  F = l(`<canvas></canvas>`);

function I(t, n) {
  f(n, !0);
  let r = h(n, `width`, 15, 0),
    i = x(n, P),
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
  var c = F();
  C(c, () => ({
    style: `width: ${r()??``}px; height: ${b(a)??``}px`,
    ...i
  })), _(c, t => e(o, t), () => b(o)), d(t, c), p()
}
var ie = new Set([`$$slots`, `$$events`, `$$legacy`, `loading`, `charges`, `chargeMax`, `cooldownMs`, `showCooldown`, `maxWidth`, `compact`, `minimized`, `onclick`]),
  ae = l(`<span class="text-sm font-semibold tabular-nums opacity-90 sm:mt-px"> </span>`),
  L = l(`<!> <div class="flex items-center gap-2 whitespace-nowrap"> <!></div>`, 1),
  R = l(`<span class="paint-button-balance text-xl leading-none font-semibold svelte-naszew" aria-hidden="true">&infin;</span>`),
  z = l(`<span><!></span>`),
  B = l(`<span> </span>`),
  V = l(`<span><!> <!></span>`),
  H = l(`<!> <div><span> </span> <!></div>`, 1),
  U = l(`<span class="loading loading-spinner center-absolute absolute"></span>`),
  W = l(`<button><div><!></div> <!></button>`);

function G(l, g) {
  f(g, !0);
  let T = h(g, `showCooldown`, 3, !0),
    P = h(g, `compact`, 3, !1),
    F = h(g, `minimized`, 3, !1),
    G = x(g, ie),
    K = s(0),
    q = s(void 0),
    J = s(void 0),
    Y = i(() => g.cooldownMs ?? A.cooldown),
    oe = i(() => k.theme === `dark` ? `rgba(255, 255, 255, 0.3)` : `#394e6a33`),
    X = i(() => {
      let e = A.timeoutUntil;
      if (!e || e.getTime() <= k.now) return;
      let t = D(e, k.now);
      return {
        isBan: t,
        countdown: t ? null : O(e, k.now)
      }
    });

  function se({
    days: e,
    hours: t,
    minutes: n
  }) {
    return e > 0 ? `${e}d ${t}h` : t > 0 ? `${t}h ${n}m` : `${n}m`
  }
  re(() => [g.loading, g.maxWidth, P()], () => {
    e(J, void 0), requestAnimationFrame(() => {
      if (!b(q)) return;
      let t = b(q).offsetWidth;
      !P() && !g.loading && g.maxWidth !== void 0 && t + 20 > g.maxWidth ? e(J, 16 * (g.maxWidth / t) * .8) : e(J, void 0)
    })
  });
  var Z = W(),
    ce = e => {
      var t;
      ne(`heavy`), (t = g.onclick) == null || t.call(g, e)
    };
  C(Z, () => ({
    ...G,
    onclick: ce,
    class: `btn btn-lg sm:btn-xl relative ${b(X)?b(X).isBan?`btn-error`:`btn-warning`:`btn-primary`} ${g.class??``}`,
    style: `max-width: ${g.maxWidth?`${g.maxWidth}px`:`none`}
	${b(J)?`;--paint-font-size: ${b(J)}px`:``}`,
    [m]: {
      compact: P(),
      minimized: F(),
      "pixel-ui": !ee.standard,
      "w-max": P(),
      scaled: b(J) !== void 0
    }
  }), void 0, void 0, void 0, `svelte-naszew`);
  var Q = u(Z);
  let $;
  var le = u(Q),
    ue = e => {
      var t = L(),
        i = r(t);
      M(i, {
        class: `size-6`
      });
      var s = n(i, 2),
        c = u(s),
        l = n(c),
        f = e => {
          var t = ae(),
            n = u(t, !0);
          S(t), w(e => o(n, e), [() => se(b(X).countdown)]), d(e, t)
        };
      a(l, e => {
        b(X).countdown && e(f)
      }), S(s), w(e => o(c, `${e??``} `), [() => b(X).isBan ? E.banned() : E.timeout()]), d(e, t)
    },
    de = s => {
      var l = H(),
        f = r(l);
      {
        let e = i(() => P() ? `paint-button-brush size-6 shrink-0 max-sm:hidden` : `size-6`);
        j(f, {
          get class() {
            return b(e)
          }
        })
      }
      var p = n(f, 2),
        m = u(p),
        h = u(m, !0);
      S(m), v(m, () => N(P() ? E.paint() : void 0));
      var _ = n(m, 2),
        x = r => {
          let s = i(() => g.chargeMax ?? A.data.charges.max),
            l = i(() => g.chargeMax === void 0 && A.data.charges.infinite);
          var f = V();
          let p;
          var m = u(f),
            h = e => {
              var t = R();
              d(e, t)
            },
            _ = n => {
              var r = z();
              let a;
              var o = u(r);
              {
                let t = i(() => P() ? `max-w-full object-contain` : void 0),
                  n = i(() => b(J) ?? 16),
                  r = i(() => `${Math.floor(g.charges)}/${b(s)}`),
                  a = i(() => g.disabled ? b(oe) : `#ffffff`);
                I(o, {
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
                    return b(K)
                  },
                  set width(t) {
                    e(K, t, !0)
                  }
                })
              }
              S(r), w(e => {
                a = c(r, 1, `paint-button-balance svelte-naszew`, null, a, {
                  "min-w-0": P()
                }), t(r, `width: ${e??``}px`)
              }, [() => (Math.floor(b(K) / 5) + 1) * 5]), d(n, r)
            };
          a(m, e => {
            b(l) ? e(h) : e(_, -1)
          });
          var v = n(m, 2),
            y = e => {
              var t = B();
              let n;
              var r = u(t);
              S(t), w(e => {
                n = c(t, 1, `paint-button-cooldown min-w-7 text-xs svelte-naszew`, null, n, {
                  "shrink-0": P()
                }), o(r, `(${e??``})`)
              }, [() => te(b(Y))]), d(e, t)
            };
          a(v, e => {
            !b(l) && T() && g.charges < b(s) && b(Y) !== void 0 && e(y)
          }), S(f), w(() => p = c(f, 1, `paint-button-charges flex items-center gap-1 sm:mt-px svelte-naszew`, null, p, {
            "min-w-0": P(),
            "max-w-full": P()
          })), d(r, f)
        };
      a(_, e => {
        g.charges !== void 0 && A.data && e(x)
      }), S(p), w(e => {
        c(p, 1, y(P() ? `paint-button-label flex min-w-0 items-center gap-2 whitespace-nowrap max-sm:flex-col max-sm:gap-0` : `flex items-center gap-2 whitespace-nowrap`), `svelte-naszew`), c(m, 1, y(P() ? `max-w-full truncate` : void 0), `svelte-naszew`), o(h, e)
      }, [() => E.paint()]), d(s, l)
    };
  a(le, e => {
    b(X) ? e(ue) : e(de, -1)
  }), S(Q), _(Q, t => e(q, t), () => b(q));
  var fe = n(Q, 2),
    pe = e => {
      var t = U();
      d(e, t)
    };
  a(fe, e => {
    g.loading && e(pe)
  }), S(Z), w(() => $ = c(Q, 1, `paint-button-content flex items-center gap-1.5 svelte-naszew`, null, $, {
    "min-w-0": P(),
    "max-w-full": P()
  })), d(l, Z), p()
}

function K(e, t, n) {
  return e < t ? t : e > n ? n : e
}

function q(e, t) {
  let n = 10 ** t;
  return Math.round(e * n) / n
}

function J(e) {
  if (e < 1e3) return String(e);
  let t = [`K`, `M`, `B`, `T`, `Q`],
    n = 0,
    r = e / 1e3;
  for (; Math.round(r) >= 1e3 && n < t.length - 1;) r /= 1e3, n++;
  return `${q(r,+(r<10))}${t[n]}`
}
export {
  I as a, G as i, J as n, q as r, K as t
};