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
  x as S,
  xt as C,
  y as w
} from "./D2z8HFb7.js";
import "./B8UK1oE5.js";
import {
  t as T
} from "./BVH6iMxT.js";
import {
  t as E
} from "./CR6fx3Cr.js";
import {
  t as D
} from "./Cwzi4Meo.js";
import {
  S as ee,
  ft as O,
  k as te,
  n as k,
  x as ne
} from "./BrWCIlim.js";
import {
  n as A
} from "./Dn1kBWph.js";
import {
  t as j
} from "./BxLiuJkq.js";
import {
  t as M
} from "./CpA43KHi.js";
import {
  r as re
} from "./DbaxEh4p.js";
var N = new Set([`$$slots`, `$$events`, `$$legacy`, `value`, `fontSize`, `color`, `weight`, `mono`, `width`]),
  P = l(`<canvas></canvas>`);

function F(e, t) {
  f(t, !0);
  let n = m(t, `width`, 15, 0),
    r = b(t, N),
    i = o(0),
    a = o(null);
  C(() => {
    if (!x(a)) return;
    let e = x(a),
      r = e.getContext(`2d`);
    if (!r) return;
    let o = t.value,
      s = t.color ?? `#394e6a`,
      c = getComputedStyle(e).getPropertyValue(t.mono ? `--font-geist-mono` : `--font-sans`),
      l = E.current || 1,
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
  var s = P();
  w(s, () => ({
    style: `width: ${n()??``}px; height: ${x(i)??``}px`,
    ...r
  })), g(s, e => v(a, e), () => x(a)), u(e, s), d()
}
var ie = new Set([`$$slots`, `$$events`, `$$legacy`, `loading`, `charges`, `chargeMax`, `cooldownMs`, `showCooldown`, `maxWidth`, `compact`, `minimized`, `onclick`]),
  I = l(`<span class="text-sm font-semibold tabular-nums opacity-90 sm:mt-px"> </span>`),
  L = l(`<!> <div class="flex items-center gap-2 whitespace-nowrap"> <!></div>`, 1),
  R = l(`<span class="paint-button-balance text-xl leading-none font-semibold svelte-naszew" aria-hidden="true">&infin;</span>`),
  z = l(`<span><!></span>`),
  B = l(`<span> </span>`),
  V = l(`<span><!> <!></span>`),
  H = l(`<!> <div><span> </span> <!></div>`, 1),
  U = l(`<span class="loading loading-spinner center-absolute absolute"></span>`),
  W = l(`<button><div><!></div> <!></button>`);

function G(l, C) {
  f(C, !0);
  let E = m(C, `showCooldown`, 3, !0),
    N = m(C, `compact`, 3, !1),
    P = m(C, `minimized`, 3, !1),
    G = b(C, ie),
    K = o(0),
    q = o(void 0),
    J = o(void 0),
    Y = i(() => C.cooldownMs ?? k.cooldown),
    ae = i(() => O.theme === `dark` ? `rgba(255, 255, 255, 0.3)` : `#394e6a33`),
    X = i(() => {
      let e = k.timeoutUntil;
      if (!e || e.getTime() <= O.now) return;
      let t = ee(e, O.now);
      return {
        isBan: t,
        countdown: t ? null : ne(e, O.now)
      }
    });

  function oe({
    days: e,
    hours: t,
    minutes: n
  }) {
    return e > 0 ? `${e}d ${t}h` : t > 0 ? `${t}h ${n}m` : `${n}m`
  }
  re(() => [C.loading, C.maxWidth, N()], () => {
    v(J, void 0), requestAnimationFrame(() => {
      if (!x(q)) return;
      let e = x(q).offsetWidth;
      !N() && !C.loading && C.maxWidth !== void 0 && e + 20 > C.maxWidth ? v(J, 16 * (C.maxWidth / e) * .8) : v(J, void 0)
    })
  });
  var Z = W(),
    se = e => {
      var t;
      A(`heavy`), (t = C.onclick) == null || t.call(C, e)
    };
  w(Z, () => ({
    ...G,
    onclick: se,
    class: `btn btn-lg sm:btn-xl relative ${x(X)?x(X).isBan?`btn-error`:`btn-warning`:`btn-primary`} ${C.class??``}`,
    style: `max-width: ${C.maxWidth?`${C.maxWidth}px`:`none`}
	${x(J)?`;--paint-font-size: ${x(J)}px`:``}`,
    [p]: {
      compact: N(),
      minimized: P(),
      "pixel-ui": !T.standard,
      "w-max": N(),
      scaled: x(J) !== void 0
    }
  }), void 0, void 0, void 0, `svelte-naszew`);
  var Q = n(Z);
  let $;
  var ce = n(Q),
    le = e => {
      var i = L(),
        o = t(i);
      M(o, {
        class: `size-6`
      });
      var s = c(o, 2),
        l = n(s),
        d = c(l),
        f = e => {
          var t = I(),
            r = n(t, !0);
          _(t), h(e => a(r, e), [() => oe(x(X).countdown)]), u(e, t)
        };
      r(d, e => {
        x(X).countdown && e(f)
      }), _(s), h(e => a(l, `${e??``} `), [() => x(X).isBan ? D.banned() : D.timeout()]), u(e, i)
    },
    ue = o => {
      var l = H(),
        d = t(l);
      {
        let e = i(() => N() ? `paint-button-brush size-6 shrink-0 max-sm:hidden` : `size-6`);
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
          let o = i(() => C.chargeMax ?? k.data.charges.max),
            l = i(() => C.chargeMax === void 0 && k.data.charges.infinite);
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
                let e = i(() => N() ? `max-w-full object-contain` : void 0),
                  t = i(() => x(J) ?? 16),
                  n = i(() => `${Math.floor(C.charges)}/${x(o)}`),
                  r = i(() => C.disabled ? x(ae) : `#ffffff`);
                F(c, {
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
                    v(K, e, !0)
                  }
                })
              }
              _(r), h(t => {
                a = s(r, 1, `paint-button-balance svelte-naszew`, null, a, {
                  "min-w-0": N()
                }), e(r, `width: ${t??``}px`)
              }, [() => (Math.floor(x(K) / 5) + 1) * 5]), u(t, r)
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
                  "shrink-0": N()
                }), a(i, `(${e??``})`)
              }, [() => te(x(Y))]), u(e, t)
            };
          r(y, e => {
            !x(l) && E() && C.charges < x(o) && x(Y) !== void 0 && e(b)
          }), _(d), h(() => f = s(d, 1, `paint-button-charges flex items-center gap-1 sm:mt-px svelte-naszew`, null, f, {
            "min-w-0": N(),
            "max-w-full": N()
          })), u(t, d)
        };
      r(g, e => {
        C.charges !== void 0 && k.data && e(b)
      }), _(f), h((e, t) => {
        s(f, 1, y(N() ? `paint-button-label flex min-w-0 items-center gap-2 whitespace-nowrap max-sm:flex-col max-sm:gap-0` : `flex items-center gap-2 whitespace-nowrap`), `svelte-naszew`), s(p, 1, y(N() ? `max-w-full truncate` : void 0), `svelte-naszew`), S(p, `title`, e), a(m, t)
      }, [() => N() ? D.paint() : void 0, () => D.paint()]), u(o, l)
    };
  r(ce, e => {
    x(X) ? e(le) : e(ue, -1)
  }), _(Q), g(Q, e => v(q, e), () => x(q));
  var de = c(Q, 2),
    fe = e => {
      var t = U();
      u(e, t)
    };
  r(de, e => {
    C.loading && e(fe)
  }), _(Z), h(() => $ = s(Q, 1, `paint-button-content flex items-center gap-1.5 svelte-naszew`, null, $, {
    "min-w-0": N(),
    "max-w-full": N()
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
  F as a, G as i, J as n, q as r, K as t
};