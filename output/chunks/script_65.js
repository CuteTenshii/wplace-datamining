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
  j as _,
  jt as v,
  nt as y,
  o as b,
  pt as x,
  tn as S,
  wt as C,
  x as ee
} from "./DXDHrD2o.js";
import "./B8UK1oE5.js";
import {
  r as te
} from "./CgTrkbHX.js";
import {
  t as w
} from "./BH5PwBe6.js";
import {
  t as T
} from "./BwlJHClZ.js";
import {
  It as E,
  f as ne,
  gt as D,
  mt as re,
  p as ie
} from "./Bx5qbGTA.js";
import {
  r as ae
} from "./DCEagYC0.js";
import {
  n as O
} from "./BWFgi1eB.js";
import {
  t as k
} from "./Fm9p5yT2.js";
import {
  t as A
} from "./CnJj9ScH.js";
import {
  t as j
} from "./BJSZ8Ikf.js";
var M = new Set([`$$slots`, `$$events`, `$$legacy`, `value`, `fontSize`, `color`, `weight`, `mono`, `width`]),
  N = y(`<canvas></canvas>`);

function P(e, t) {
  S(t, !0);
  let r = f(t, `width`, 15, 0),
    i = b(t, M),
    s = o(0),
    c = o(null);
  C(() => {
    if (!x(c)) return;
    let e = x(c),
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
  var l = N();
  n(l, () => ({
    style: `width: ${r()??``}px; height: ${x(s)??``}px`,
    ...i
  })), g(l, e => a(c, e), () => x(c)), h(e, l), m()
}
var oe = new Set([`$$slots`, `$$events`, `$$legacy`, `loading`, `charges`, `chargeMax`, `cooldownMs`, `showCooldown`, `maxWidth`, `compact`, `minimized`, `onclick`]),
  F = y(`<span class="text-sm font-semibold tabular-nums opacity-90 sm:mt-px"> </span>`),
  I = y(`<!> <div class="flex items-center gap-2 whitespace-nowrap"> <!></div>`, 1),
  L = y(`<span class="paint-button-balance text-xl leading-none font-semibold svelte-naszew" aria-hidden="true">&infin;</span>`),
  R = y(`<span><!></span>`),
  z = y(`<span> </span>`),
  B = y(`<span><!> <!></span>`),
  V = y(`<!> <div><span> </span> <!></div>`, 1),
  H = y(`<span class="loading loading-spinner center-absolute absolute"></span>`),
  U = y(`<button><div><!></div> <!></button>`);

function W(y, C) {
  S(C, !0);
  let w = te(),
    M = f(C, `showCooldown`, 3, !0),
    N = f(C, `compact`, 3, !1),
    W = f(C, `minimized`, 3, !1),
    G = b(C, oe),
    K = o(0),
    q = o(void 0),
    J = o(void 0),
    Y = t(() => C.cooldownMs ?? D.cooldown),
    se = t(() => E.theme === `dark` ? `rgba(255, 255, 255, 0.3)` : `#394e6a33`),
    X = t(() => {
      let e = D.timeoutUntil;
      if (!e || e.getTime() <= E.now) return;
      let t = ie(e, E.now);
      return {
        isBan: t,
        countdown: t ? null : ne(e, E.now)
      }
    });

  function ce({
    days: e,
    hours: t,
    minutes: n
  }) {
    return e > 0 ? `${e}d ${t}h` : t > 0 ? `${t}h ${n}m` : `${n}m`
  }
  ae(() => [C.loading, C.maxWidth, N()], () => {
    a(J, void 0), requestAnimationFrame(() => {
      if (!x(q)) return;
      let e = x(q).offsetWidth;
      !N() && !C.loading && C.maxWidth !== void 0 && e + 20 > C.maxWidth ? a(J, 16 * (C.maxWidth / e) * .8) : a(J, void 0)
    })
  });
  var Z = U(),
    le = e => {
      var t;
      O(`heavy`), (t = C.onclick) == null || t.call(C, e)
    };
  n(Z, () => ({
    ...G,
    onclick: le,
    class: `btn btn-lg sm:btn-xl relative ${x(X)?x(X).isBan?`btn-error`:`btn-warning`:`btn-primary`} ${C.class??``}`,
    style: `max-width: ${C.maxWidth?`${C.maxWidth}px`:`none`}
	${x(J)?`;--paint-font-size: ${x(J)}px`:``}`,
    [ee]: {
      compact: N(),
      minimized: W(),
      "pixel-ui": !w.standard,
      "w-max": N(),
      scaled: x(J) !== void 0
    }
  }), void 0, void 0, void 0, `svelte-naszew`);
  var Q = e(Z);
  let $;
  var ue = e(Q),
    de = t => {
      var n = I(),
        i = v(n);
      A(i, {
        class: `size-6`
      });
      var a = c(i, 2),
        o = e(a),
        s = c(o),
        l = t => {
          var n = F(),
            i = e(n, !0);
          p(n), r(e => u(i, e), [() => ce(x(X).countdown)]), h(t, n)
        };
      d(s, e => {
        x(X).countdown && e(l)
      }), p(a), r(e => u(o, `${e??``} `), [() => x(X).isBan ? T.banned() : T.timeout()]), h(t, n)
    },
    fe = n => {
      var o = V(),
        f = v(o);
      {
        let e = t(() => N() ? `paint-button-brush size-6 shrink-0 max-sm:hidden` : `size-6`);
        k(f, {
          get class() {
            return x(e)
          }
        })
      }
      var m = c(f, 2),
        g = e(m),
        y = e(g, !0);
      p(g), i(g, () => j(N() ? T.paint() : void 0));
      var b = c(g, 2),
        S = n => {
          let i = t(() => C.chargeMax ?? D.data.charges.max),
            o = t(() => C.chargeMax === void 0 && D.data.charges.infinite);
          var l = B();
          let f;
          var m = e(l),
            g = e => {
              var t = L();
              h(e, t)
            },
            v = n => {
              var o = R();
              let c;
              var l = e(o);
              {
                let e = t(() => N() ? `max-w-full object-contain` : void 0),
                  n = t(() => x(J) ?? 16),
                  r = t(() => `${Math.floor(C.charges)}/${x(i)}`),
                  o = t(() => C.disabled ? x(se) : `#ffffff`);
                P(l, {
                  get class() {
                    return x(e)
                  },
                  weight: 600,
                  get fontSize() {
                    return x(n)
                  },
                  get value() {
                    return x(r)
                  },
                  get color() {
                    return x(o)
                  },
                  get width() {
                    return x(K)
                  },
                  set width(e) {
                    a(K, e, !0)
                  }
                })
              }
              p(o), r(e => {
                c = s(o, 1, `paint-button-balance svelte-naszew`, null, c, {
                  "min-w-0": N()
                }), _(o, `width: ${e??``}px`)
              }, [() => (Math.floor(x(K) / 5) + 1) * 5]), h(n, o)
            };
          d(m, e => {
            x(o) ? e(g) : e(v, -1)
          });
          var y = c(m, 2),
            b = t => {
              var n = z();
              let i;
              var a = e(n);
              p(n), r(e => {
                i = s(n, 1, `paint-button-cooldown min-w-7 text-xs svelte-naszew`, null, i, {
                  "shrink-0": N()
                }), u(a, `(${e??``})`)
              }, [() => re(x(Y))]), h(t, n)
            };
          d(y, e => {
            !x(o) && M() && C.charges < x(i) && x(Y) !== void 0 && e(b)
          }), p(l), r(() => f = s(l, 1, `paint-button-charges flex items-center gap-1 sm:mt-px svelte-naszew`, null, f, {
            "min-w-0": N(),
            "max-w-full": N()
          })), h(n, l)
        };
      d(b, e => {
        C.charges !== void 0 && D.data && e(S)
      }), p(m), r(e => {
        s(m, 1, l(N() ? `paint-button-label flex min-w-0 items-center gap-2 whitespace-nowrap max-sm:flex-col max-sm:gap-0` : `flex items-center gap-2 whitespace-nowrap`), `svelte-naszew`), s(g, 1, l(N() ? `max-w-full truncate` : void 0), `svelte-naszew`), u(y, e)
      }, [() => T.paint()]), h(n, o)
    };
  d(ue, e => {
    x(X) ? e(de) : e(fe, -1)
  }), p(Q), g(Q, e => a(q, e), () => x(q));
  var pe = c(Q, 2),
    me = e => {
      var t = H();
      h(e, t)
    };
  d(pe, e => {
    C.loading && e(me)
  }), p(Z), r(() => $ = s(Q, 1, `paint-button-content flex items-center gap-1.5 svelte-naszew`, null, $, {
    "min-w-0": N(),
    "max-w-full": N()
  })), h(y, Z), m()
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