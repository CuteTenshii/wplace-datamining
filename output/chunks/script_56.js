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
  wt as S,
  x as te
} from "./DXDHrD2o.js";
import "./B8UK1oE5.js";
import {
  t as ne
} from "./BPzKxQPM.js";
import {
  t as C
} from "./BH5PwBe6.js";
import {
  t as w
} from "./BLUc1uLr.js";
import {
  D as T,
  E,
  P as re,
  n as D,
  vt as O
} from "./BiTo61FT.js";
import {
  n as ie
} from "./DZdCTbMb.js";
import {
  t as k
} from "./CIoja5KM.js";
import {
  t as A
} from "./CoZdtvw3.js";
import {
  r as j
} from "./NwTlnbFM.js";
import {
  t as ae
} from "./CcUhPTWI.js";
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
var F = new Set([`$$slots`, `$$events`, `$$legacy`, `loading`, `charges`, `chargeMax`, `cooldownMs`, `showCooldown`, `maxWidth`, `compact`, `minimized`, `onclick`]),
  I = v(`<span class="text-sm font-semibold tabular-nums opacity-90 sm:mt-px"> </span>`),
  L = v(`<!> <div class="flex items-center gap-2 whitespace-nowrap"> <!></div>`, 1),
  R = v(`<span class="paint-button-balance text-xl leading-none font-semibold svelte-naszew" aria-hidden="true">&infin;</span>`),
  z = v(`<span><!></span>`),
  B = v(`<span> </span>`),
  V = v(`<span><!> <!></span>`),
  H = v(`<!> <div><span> </span> <!></div>`, 1),
  U = v(`<span class="loading loading-spinner center-absolute absolute"></span>`),
  W = v(`<button><div><!></div> <!></button>`);

function G(v, S) {
  x(S, !0);
  let C = f(S, `showCooldown`, 3, !0),
    M = f(S, `compact`, 3, !1),
    N = f(S, `minimized`, 3, !1),
    G = y(S, F),
    K = o(0),
    q = o(void 0),
    J = o(void 0),
    Y = t(() => S.cooldownMs ?? D.cooldown),
    oe = t(() => O.theme === `dark` ? `rgba(255, 255, 255, 0.3)` : `#394e6a33`),
    X = t(() => {
      let e = D.timeoutUntil;
      if (!e || e.getTime() <= O.now) return;
      let t = T(e, O.now);
      return {
        isBan: t,
        countdown: t ? null : E(e, O.now)
      }
    });

  function se({
    days: e,
    hours: t,
    minutes: n
  }) {
    return e > 0 ? `${e}d ${t}h` : t > 0 ? `${t}h ${n}m` : `${n}m`
  }
  j(() => [S.loading, S.maxWidth, M()], () => {
    a(J, void 0), requestAnimationFrame(() => {
      if (!b(q)) return;
      let e = b(q).offsetWidth;
      !M() && !S.loading && S.maxWidth !== void 0 && e + 20 > S.maxWidth ? a(J, 16 * (S.maxWidth / e) * .8) : a(J, void 0)
    })
  });
  var Z = W(),
    ce = e => {
      var t;
      ie(`heavy`), (t = S.onclick) == null || t.call(S, e)
    };
  n(Z, () => ({
    ...G,
    onclick: ce,
    class: `btn btn-lg sm:btn-xl relative ${b(X)?b(X).isBan?`btn-error`:`btn-warning`:`btn-primary`} ${S.class??``}`,
    style: `max-width: ${S.maxWidth?`${S.maxWidth}px`:`none`}
	${b(J)?`;--paint-font-size: ${b(J)}px`:``}`,
    [te]: {
      compact: M(),
      minimized: N(),
      "pixel-ui": !ne.standard,
      "w-max": M(),
      scaled: b(J) !== void 0
    }
  }), void 0, void 0, void 0, `svelte-naszew`);
  var Q = e(Z);
  let $;
  var le = e(Q),
    ue = t => {
      var n = L(),
        i = _(n);
      A(i, {
        class: `size-6`
      });
      var a = c(i, 2),
        o = e(a),
        s = c(o),
        l = t => {
          var n = I(),
            i = e(n, !0);
          p(n), r(e => u(i, e), [() => se(b(X).countdown)]), h(t, n)
        };
      d(s, e => {
        b(X).countdown && e(l)
      }), p(a), r(e => u(o, `${e??``} `), [() => b(X).isBan ? w.banned() : w.timeout()]), h(t, n)
    },
    de = n => {
      var o = H(),
        f = _(o);
      {
        let e = t(() => M() ? `paint-button-brush size-6 shrink-0 max-sm:hidden` : `size-6`);
        k(f, {
          get class() {
            return b(e)
          }
        })
      }
      var m = c(f, 2),
        g = e(m),
        v = e(g, !0);
      p(g), i(g, () => ae(M() ? w.paint() : void 0));
      var y = c(g, 2),
        x = n => {
          let i = t(() => S.chargeMax ?? D.data.charges.max),
            o = t(() => S.chargeMax === void 0 && D.data.charges.infinite);
          var l = V();
          let f;
          var m = e(l),
            g = e => {
              var t = R();
              h(e, t)
            },
            _ = n => {
              var o = z();
              let c;
              var l = e(o);
              {
                let e = t(() => M() ? `max-w-full object-contain` : void 0),
                  n = t(() => b(J) ?? 16),
                  r = t(() => `${Math.floor(S.charges)}/${b(i)}`),
                  o = t(() => S.disabled ? b(oe) : `#ffffff`);
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
                    return b(K)
                  },
                  set width(e) {
                    a(K, e, !0)
                  }
                })
              }
              p(o), r(e => {
                c = s(o, 1, `paint-button-balance svelte-naszew`, null, c, {
                  "min-w-0": M()
                }), ee(o, `width: ${e??``}px`)
              }, [() => (Math.floor(b(K) / 5) + 1) * 5]), h(n, o)
            };
          d(m, e => {
            b(o) ? e(g) : e(_, -1)
          });
          var v = c(m, 2),
            y = t => {
              var n = B();
              let i;
              var a = e(n);
              p(n), r(e => {
                i = s(n, 1, `paint-button-cooldown min-w-7 text-xs svelte-naszew`, null, i, {
                  "shrink-0": M()
                }), u(a, `(${e??``})`)
              }, [() => re(b(Y))]), h(t, n)
            };
          d(v, e => {
            !b(o) && C() && S.charges < b(i) && b(Y) !== void 0 && e(y)
          }), p(l), r(() => f = s(l, 1, `paint-button-charges flex items-center gap-1 sm:mt-px svelte-naszew`, null, f, {
            "min-w-0": M(),
            "max-w-full": M()
          })), h(n, l)
        };
      d(y, e => {
        S.charges !== void 0 && D.data && e(x)
      }), p(m), r(e => {
        s(m, 1, l(M() ? `paint-button-label flex min-w-0 items-center gap-2 whitespace-nowrap max-sm:flex-col max-sm:gap-0` : `flex items-center gap-2 whitespace-nowrap`), `svelte-naszew`), s(g, 1, l(M() ? `max-w-full truncate` : void 0), `svelte-naszew`), u(v, e)
      }, [() => w.paint()]), h(n, o)
    };
  d(le, e => {
    b(X) ? e(ue) : e(de, -1)
  }), p(Q), g(Q, e => a(q, e), () => b(q));
  var fe = c(Q, 2),
    pe = e => {
      var t = U();
      h(e, t)
    };
  d(fe, e => {
    S.loading && e(pe)
  }), p(Z), r(() => $ = s(Q, 1, `paint-button-content flex items-center gap-1.5 svelte-naszew`, null, $, {
    "min-w-0": M(),
    "max-w-full": M()
  })), h(v, Z), m()
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