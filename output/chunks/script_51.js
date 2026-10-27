import {
  D as e,
  Dt as t,
  Et as n,
  G as r,
  It as i,
  J as a,
  Nt as o,
  O as s,
  Ot as c,
  Q as l,
  X as u,
  Xt as d,
  Zt as f,
  _ as p,
  a as m,
  bt as h,
  f as g,
  in as _,
  j as v,
  jt as y,
  k as b,
  lt as x,
  o as S,
  y as C,
  yt as w
} from "./DTpxYwnW.js";
import "./B8UK1oE5.js";
import {
  t as ee
} from "./BRG30FOD.js";
import {
  t as T
} from "./BUyxRjvp.js";
import {
  t as E
} from "./D1DrqaMj.js";
import {
  D,
  E as O,
  P as te,
  n as k,
  vt as A
} from "./Ds81Tj2i.js";
import {
  n as ne
} from "./BJHb8RnO.js";
import {
  n as j
} from "./BTSuCB_q.js";
import {
  t as M
} from "./DaIyWrVm.js";
import {
  r as re
} from "./MwomqS1_.js";
import {
  t as N
} from "./M0DRtVjM.js";
var P = new Set([`$$slots`, `$$events`, `$$legacy`, `value`, `fontSize`, `color`, `weight`, `mono`, `width`]),
  F = l(`<canvas></canvas>`);

function I(e, t) {
  f(t, !0);
  let n = m(t, `width`, 15, 0),
    r = S(t, P),
    i = o(0),
    a = o(null);
  h(() => {
    if (!x(a)) return;
    let e = x(a),
      r = e.getContext(`2d`);
    if (!r) return;
    let o = t.value,
      s = t.color ?? `#394e6a`,
      c = getComputedStyle(e).getPropertyValue(t.mono ? `--font-geist-mono` : `--font-sans`),
      l = T.current || 1,
      u = `${t.weight??`normal`} ${t.fontSize}px ${c}`,
      d = !0;

    function f() {
      if (!d || !r) return;
      r.font = u, r.textBaseline = `alphabetic`;
      let t = r.measureText(o),
        a = Math.ceil(Math.max(0, t.actualBoundingBoxLeft) * l) / l,
        c = Math.ceil(Math.max(0, t.actualBoundingBoxAscent) * l) / l,
        f = Math.ceil((a + Math.max(t.width, t.actualBoundingBoxRight)) * l) / l,
        p = Math.ceil((c + Math.max(0, t.actualBoundingBoxDescent)) * l) / l;
      e.width = Math.max(1, Math.round(f * l)), e.height = Math.max(1, Math.round(p * l)), r.setTransform(l, 0, 0, l, 0, 0), r.font = u, r.textBaseline = `alphabetic`, r.fillStyle = s, r.fillText(o, a, c), n(f), y(i, p)
    }
    return f(), document.fonts.load(u, o).then(f, () => {}), document.fonts.addEventListener(`loadingdone`, f), () => {
      d = !1, document.fonts.removeEventListener(`loadingdone`, f)
    }
  });
  var s = F();
  C(s, () => ({
    style: `width: ${n()??``}px; height: ${x(i)??``}px`,
    ...r
  })), g(s, e => y(a, e), () => x(a)), u(e, s), d()
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

function G(l, h) {
  f(h, !0);
  let T = m(h, `showCooldown`, 3, !0),
    P = m(h, `compact`, 3, !1),
    F = m(h, `minimized`, 3, !1),
    G = S(h, ie),
    K = o(0),
    q = o(void 0),
    J = o(void 0),
    Y = i(() => h.cooldownMs ?? k.cooldown),
    oe = i(() => A.theme === `dark` ? `rgba(255, 255, 255, 0.3)` : `#394e6a33`),
    X = i(() => {
      let e = k.timeoutUntil;
      if (!e || e.getTime() <= A.now) return;
      let t = D(e, A.now);
      return {
        isBan: t,
        countdown: t ? null : O(e, A.now)
      }
    });

  function se({
    days: e,
    hours: t,
    minutes: n
  }) {
    return e > 0 ? `${e}d ${t}h` : t > 0 ? `${t}h ${n}m` : `${n}m`
  }
  re(() => [h.loading, h.maxWidth, P()], () => {
    y(J, void 0), requestAnimationFrame(() => {
      if (!x(q)) return;
      let e = x(q).offsetWidth;
      !P() && !h.loading && h.maxWidth !== void 0 && e + 20 > h.maxWidth ? y(J, 16 * (h.maxWidth / e) * .8) : y(J, void 0)
    })
  });
  var Z = W(),
    ce = e => {
      var t;
      ne(`heavy`), (t = h.onclick) == null || t.call(h, e)
    };
  C(Z, () => ({
    ...G,
    onclick: ce,
    class: `btn btn-lg sm:btn-xl relative ${x(X)?x(X).isBan?`btn-error`:`btn-warning`:`btn-primary`} ${h.class??``}`,
    style: `max-width: ${h.maxWidth?`${h.maxWidth}px`:`none`}
	${x(J)?`;--paint-font-size: ${x(J)}px`:``}`,
    [p]: {
      compact: P(),
      minimized: F(),
      "pixel-ui": !ee.standard,
      "w-max": P(),
      scaled: x(J) !== void 0
    }
  }), void 0, void 0, void 0, `svelte-naszew`);
  var Q = n(Z);
  let $;
  var le = n(Q),
    ue = e => {
      var i = L(),
        o = t(i);
      M(o, {
        class: `size-6`
      });
      var s = c(o, 2),
        l = n(s),
        d = c(l),
        f = e => {
          var t = ae(),
            r = n(t, !0);
          _(t), w(e => a(r, e), [() => se(x(X).countdown)]), u(e, t)
        };
      r(d, e => {
        x(X).countdown && e(f)
      }), _(s), w(e => a(l, `${e??``} `), [() => x(X).isBan ? E.banned() : E.timeout()]), u(e, i)
    },
    de = o => {
      var l = H(),
        d = t(l);
      {
        let e = i(() => P() ? `paint-button-brush size-6 shrink-0 max-sm:hidden` : `size-6`);
        j(d, {
          get class() {
            return x(e)
          }
        })
      }
      var f = c(d, 2),
        p = n(f),
        m = n(p, !0);
      _(p), v(p, () => N(P() ? E.paint() : void 0));
      var g = c(p, 2),
        S = t => {
          let o = i(() => h.chargeMax ?? k.data.charges.max),
            l = i(() => h.chargeMax === void 0 && k.data.charges.infinite);
          var d = V();
          let f;
          var p = n(d),
            m = e => {
              var t = R();
              u(e, t)
            },
            g = t => {
              var r = z();
              let a;
              var c = n(r);
              {
                let e = i(() => P() ? `max-w-full object-contain` : void 0),
                  t = i(() => x(J) ?? 16),
                  n = i(() => `${Math.floor(h.charges)}/${x(o)}`),
                  r = i(() => h.disabled ? x(oe) : `#ffffff`);
                I(c, {
                  get class() {
                    return x(e)
                  },
                  weight: 600,
                  get fontSize() {
                    return x(t)
                  },
                  get value() {
                    return x(n)
                  },
                  get color() {
                    return x(r)
                  },
                  get width() {
                    return x(K)
                  },
                  set width(e) {
                    y(K, e, !0)
                  }
                })
              }
              _(r), w(t => {
                a = s(r, 1, `paint-button-balance svelte-naszew`, null, a, {
                  "min-w-0": P()
                }), e(r, `width: ${t??``}px`)
              }, [() => (Math.floor(x(K) / 5) + 1) * 5]), u(t, r)
            };
          r(p, e => {
            x(l) ? e(m) : e(g, -1)
          });
          var v = c(p, 2),
            b = e => {
              var t = B();
              let r;
              var i = n(t);
              _(t), w(e => {
                r = s(t, 1, `paint-button-cooldown min-w-7 text-xs svelte-naszew`, null, r, {
                  "shrink-0": P()
                }), a(i, `(${e??``})`)
              }, [() => te(x(Y))]), u(e, t)
            };
          r(v, e => {
            !x(l) && T() && h.charges < x(o) && x(Y) !== void 0 && e(b)
          }), _(d), w(() => f = s(d, 1, `paint-button-charges flex items-center gap-1 sm:mt-px svelte-naszew`, null, f, {
            "min-w-0": P(),
            "max-w-full": P()
          })), u(t, d)
        };
      r(g, e => {
        h.charges !== void 0 && k.data && e(S)
      }), _(f), w(e => {
        s(f, 1, b(P() ? `paint-button-label flex min-w-0 items-center gap-2 whitespace-nowrap max-sm:flex-col max-sm:gap-0` : `flex items-center gap-2 whitespace-nowrap`), `svelte-naszew`), s(p, 1, b(P() ? `max-w-full truncate` : void 0), `svelte-naszew`), a(m, e)
      }, [() => E.paint()]), u(o, l)
    };
  r(le, e => {
    x(X) ? e(ue) : e(de, -1)
  }), _(Q), g(Q, e => y(q, e), () => x(q));
  var fe = c(Q, 2),
    pe = e => {
      var t = U();
      u(e, t)
    };
  r(fe, e => {
    h.loading && e(pe)
  }), _(Z), w(() => $ = s(Q, 1, `paint-button-content flex items-center gap-1.5 svelte-naszew`, null, $, {
    "min-w-0": P(),
    "max-w-full": P()
  })), u(l, Z), d()
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