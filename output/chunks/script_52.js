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
  jt as v,
  k as y,
  o as b,
  ut as x,
  x as ee,
  xt as S,
  y as C
} from "./D2z8HFb7.js";
import "./B8UK1oE5.js";
import {
  t as w
} from "./BcyB10Wx.js";
import {
  t as T
} from "./BMA24uln.js";
import {
  t as E
} from "./DaBL0jL9.js";
import {
  S as te,
  ft as D,
  k as ne,
  n as O,
  x as k
} from "./DZ6z_bHT.js";
import {
  n as A
} from "./mUt5fcgE.js";
import {
  t as j
} from "./D8MUJ6eZ.js";
import {
  t as re
} from "./B5FnJO4q.js";
import {
  r as ie
} from "./DbaxEh4p.js";
var M = new Set([`$$slots`, `$$events`, `$$legacy`, `value`, `fontSize`, `color`, `weight`, `mono`, `width`]),
  N = l(`<canvas></canvas>`);

function P(e, t) {
  f(t, !0);
  let n = m(t, `width`, 15, 0),
    r = b(t, M),
    i = o(0),
    a = o(null);
  S(() => {
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
      e.width = Math.max(1, Math.round(f * l)), e.height = Math.max(1, Math.round(p * l)), r.setTransform(l, 0, 0, l, 0, 0), r.font = u, r.textBaseline = `alphabetic`, r.fillStyle = s, r.fillText(o, a, c), n(f), v(i, p)
    }
    return f(), document.fonts.load(u, o).then(f, () => {}), document.fonts.addEventListener(`loadingdone`, f), () => {
      d = !1, document.fonts.removeEventListener(`loadingdone`, f)
    }
  });
  var s = N();
  C(s, () => ({
    style: `width: ${n()??``}px; height: ${x(i)??``}px`,
    ...r
  })), g(s, e => v(a, e), () => x(a)), u(e, s), d()
}
var F = new Set([`$$slots`, `$$events`, `$$legacy`, `loading`, `charges`, `chargeMax`, `cooldownMs`, `showCooldown`, `maxWidth`, `compact`, `onclick`]),
  I = l(`<span class="text-sm font-semibold tabular-nums opacity-90 sm:mt-px"> </span>`),
  L = l(`<!> <div class="flex items-center gap-2 whitespace-nowrap"> <!></div>`, 1),
  R = l(`<span class="paint-button-balance text-xl leading-none font-semibold svelte-naszew" aria-hidden="true">&infin;</span>`),
  z = l(`<span><!></span>`),
  B = l(`<span> </span>`),
  V = l(`<span><!> <!></span>`),
  H = l(`<!> <div><span> </span> <!></div>`, 1),
  U = l(`<span class="loading loading-spinner center-absolute absolute"></span>`),
  W = l(`<button><div><!></div> <!></button>`);

function G(l, S) {
  f(S, !0);
  let T = m(S, `showCooldown`, 3, !0),
    M = m(S, `compact`, 3, !1),
    N = b(S, F),
    G = o(0),
    K = o(void 0),
    q = o(void 0),
    J = i(() => S.cooldownMs ?? O.cooldown),
    ae = i(() => D.theme === `dark` ? `rgba(255, 255, 255, 0.3)` : `#394e6a33`),
    Y = i(() => {
      let e = O.timeoutUntil;
      if (!e || e.getTime() <= D.now) return;
      let t = te(e, D.now);
      return {
        isBan: t,
        countdown: t ? null : k(e, D.now)
      }
    });

  function oe({
    days: e,
    hours: t,
    minutes: n
  }) {
    return e > 0 ? `${e}d ${t}h` : t > 0 ? `${t}h ${n}m` : `${n}m`
  }
  ie(() => [S.loading, S.maxWidth, M()], () => {
    v(q, void 0), requestAnimationFrame(() => {
      if (!x(K)) return;
      let e = x(K).offsetWidth;
      !M() && !S.loading && S.maxWidth !== void 0 && e + 20 > S.maxWidth ? v(q, 16 * (S.maxWidth / e) * .8) : v(q, void 0)
    })
  });
  var X = W(),
    se = e => {
      var t;
      A(`heavy`), (t = S.onclick) == null || t.call(S, e)
    };
  C(X, () => ({
    ...N,
    onclick: se,
    class: `btn btn-lg sm:btn-xl relative ${x(Y)?x(Y).isBan?`btn-error`:`btn-warning`:`btn-primary`} ${S.class??``}`,
    style: `max-width: ${S.maxWidth?`${S.maxWidth}px`:`none`}
	${x(q)?`;--paint-font-size: ${x(q)}px`:``}`,
    [p]: {
      compact: M(),
      "pixel-ui": !w.standard,
      "w-max": M(),
      scaled: x(q) !== void 0
    }
  }), void 0, void 0, void 0, `svelte-naszew`);
  var Z = n(X);
  let Q;
  var ce = n(Z),
    le = e => {
      var i = L(),
        o = t(i);
      re(o, {
        class: `size-6`
      });
      var s = c(o, 2),
        l = n(s),
        d = c(l),
        f = e => {
          var t = I(),
            r = n(t, !0);
          _(t), h(e => a(r, e), [() => oe(x(Y).countdown)]), u(e, t)
        };
      r(d, e => {
        x(Y).countdown && e(f)
      }), _(s), h(e => a(l, `${e??``} `), [() => x(Y).isBan ? E.banned() : E.timeout()]), u(e, i)
    },
    $ = o => {
      var l = H(),
        d = t(l);
      {
        let e = i(() => M() ? `paint-button-brush size-6 shrink-0 max-sm:hidden` : `size-6`);
        j(d, {
          get class() {
            return x(e)
          }
        })
      }
      var f = c(d, 2),
        p = n(f),
        m = n(p, !0);
      _(p);
      var g = c(p, 2),
        b = t => {
          let o = i(() => S.chargeMax ?? O.data.charges.max),
            l = i(() => S.chargeMax === void 0 && O.data.charges.infinite);
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
                let e = i(() => M() ? `max-w-full object-contain` : void 0),
                  t = i(() => x(q) ?? 16),
                  n = i(() => `${Math.floor(S.charges)}/${x(o)}`),
                  r = i(() => S.disabled ? x(ae) : `#ffffff`);
                P(c, {
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
                    return x(G)
                  },
                  set width(e) {
                    v(G, e, !0)
                  }
                })
              }
              _(r), h(t => {
                a = s(r, 1, `paint-button-balance svelte-naszew`, null, a, {
                  "min-w-0": M()
                }), e(r, `width: ${t??``}px`)
              }, [() => (Math.floor(x(G) / 5) + 1) * 5]), u(t, r)
            };
          r(p, e => {
            x(l) ? e(m) : e(g, -1)
          });
          var y = c(p, 2),
            b = e => {
              var t = B();
              let r;
              var i = n(t);
              _(t), h(e => {
                r = s(t, 1, `paint-button-cooldown min-w-7 text-xs svelte-naszew`, null, r, {
                  "shrink-0": M()
                }), a(i, `(${e??``})`)
              }, [() => ne(x(J))]), u(e, t)
            };
          r(y, e => {
            !x(l) && T() && S.charges < x(o) && x(J) !== void 0 && e(b)
          }), _(d), h(() => f = s(d, 1, `paint-button-charges flex items-center gap-1 sm:mt-px svelte-naszew`, null, f, {
            "min-w-0": M(),
            "max-w-full": M()
          })), u(t, d)
        };
      r(g, e => {
        S.charges !== void 0 && O.data && e(b)
      }), _(f), h((e, t) => {
        s(f, 1, y(M() ? `paint-button-label flex min-w-0 items-center gap-2 whitespace-nowrap max-sm:flex-col max-sm:gap-0` : `flex items-center gap-2 whitespace-nowrap`), `svelte-naszew`), s(p, 1, y(M() ? `max-w-full truncate` : void 0), `svelte-naszew`), ee(p, `title`, e), a(m, t)
      }, [() => M() ? E.paint() : void 0, () => E.paint()]), u(o, l)
    };
  r(ce, e => {
    x(Y) ? e(le) : e($, -1)
  }), _(Z), g(Z, e => v(K, e), () => x(K));
  var ue = c(Z, 2),
    de = e => {
      var t = U();
      u(e, t)
    };
  r(ue, e => {
    S.loading && e(de)
  }), _(X), h(() => Q = s(Z, 1, `paint-button-content flex items-center gap-1.5 svelte-naszew`, null, Q, {
    "min-w-0": M(),
    "max-w-full": M()
  })), u(l, X), d()
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
  P as a, G as i, J as n, q as r, K as t
};