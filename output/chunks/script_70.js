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
  U as d,
  Y as f,
  a as p,
  cn as m,
  en as h,
  et as g,
  f as _,
  j as ee,
  jt as v,
  nt as y,
  o as b,
  pt as x,
  tn as S,
  tt as C,
  wt as w,
  x as te
} from "./DXDHrD2o.js";
import "./B8UK1oE5.js";
import {
  r as T
} from "./DduSK_CN.js";
import {
  t as E
} from "./BH5PwBe6.js";
import {
  t as D
} from "./Oa2KIPWU.js";
import {
  St as ne,
  b as re,
  qt as O,
  wt as k,
  y as ie
} from "./oPC4dsku.js";
import {
  r as ae
} from "./DCEagYC0.js";
import {
  t as A
} from "./dV_hY48k.js";
import {
  n as oe
} from "./npkdwFxW.js";
import {
  t as se
} from "./DkJstW-Z.js";
import {
  t as j
} from "./D_uxbVQv.js";
var M = new Set([`$$slots`, `$$events`, `$$legacy`, `value`, `fontSize`, `color`, `weight`, `mono`, `width`]),
  N = y(`<canvas></canvas>`);

function P(e, t) {
  S(t, !0);
  let r = p(t, `width`, 15, 0),
    i = b(t, M),
    s = o(0),
    c = o(null);
  w(() => {
    if (!x(c)) return;
    let e = x(c),
      n = e.getContext(`2d`);
    if (!n) return;
    let i = t.value,
      o = t.color ?? `#394e6a`,
      l = getComputedStyle(e).getPropertyValue(t.mono ? `--font-geist-mono` : `--font-sans`),
      u = E.current || 1,
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
  })), _(l, e => a(c, e), () => x(c)), g(e, l), h()
}
var F = new Set([`$$slots`, `$$events`, `$$legacy`, `loading`, `charges`, `chargeMax`, `cooldownMs`, `showCooldown`, `maxWidth`, `compact`, `minimized`, `label`, `icon`, `iconOnly`, `onclick`]),
  ce = y(`<span class="text-sm font-semibold tabular-nums opacity-90 sm:mt-px"> </span>`),
  le = y(`<!> <div class="flex items-center gap-2 whitespace-nowrap"> <!></div>`, 1),
  ue = y(`<span class="paint-button-balance text-xl leading-none font-semibold svelte-naszew" aria-hidden="true">&infin;</span>`),
  de = y(`<span><!></span>`),
  fe = y(`<span> </span>`),
  I = y(`<span><!> <!></span>`),
  L = y(`<!> <div><span> </span> <!></div>`, 1),
  R = y(`<span class="loading loading-spinner center-absolute absolute"></span>`),
  z = y(`<button><div><!></div> <!></button>`);

function B(y, w) {
  S(w, !0);
  let E = T(),
    M = p(w, `showCooldown`, 3, !0),
    N = p(w, `compact`, 3, !1),
    B = p(w, `minimized`, 3, !1),
    V = p(w, `label`, 19, () => D.paint()),
    H = p(w, `icon`, 3, se),
    U = p(w, `iconOnly`, 3, !1),
    W = b(w, F),
    G = o(0),
    K = o(void 0),
    q = o(void 0),
    J = t(() => w.cooldownMs ?? k.cooldown),
    pe = t(() => O.theme === `dark` ? `rgba(255, 255, 255, 0.3)` : `#394e6a33`),
    Y = t(() => {
      let e = k.timeoutUntil;
      if (!e || e.getTime() <= O.now) return;
      let t = re(e, O.now);
      return {
        isBan: t,
        countdown: t ? null : ie(e, O.now)
      }
    });

  function me({
    days: e,
    hours: t,
    minutes: n
  }) {
    return e > 0 ? `${e}d ${t}h` : t > 0 ? `${t}h ${n}m` : `${n}m`
  }
  let X = t(() => U() ? x(Y) ? x(Y).isBan ? D.banned() : D.timeout() : V() : void 0);
  ae(() => [w.loading, w.maxWidth, N()], () => {
    a(q, void 0), requestAnimationFrame(() => {
      if (!x(K)) return;
      let e = x(K).offsetWidth;
      !N() && !w.loading && w.maxWidth !== void 0 && e + 20 > w.maxWidth ? a(q, 16 * (w.maxWidth / e) * .8) : a(q, void 0)
    })
  });
  var Z = z(),
    he = e => {
      var t;
      oe(`heavy`), (t = w.onclick) == null || t.call(w, e)
    };
  n(Z, () => ({
    ...W,
    "aria-label": x(X) ?? W[`aria-label`],
    onclick: he,
    class: `btn btn-lg sm:btn-xl relative ${x(Y)?x(Y).isBan?`btn-error`:`btn-warning`:`btn-primary`} ${w.class??``}`,
    style: `max-width: ${w.maxWidth?`${w.maxWidth}px`:`none`}
	${x(q)?`;--paint-font-size: ${x(q)}px`:``}`,
    [te]: {
      compact: N(),
      minimized: B(),
      "icon-only": U(),
      "pixel-ui": !E.standard,
      "w-max": N(),
      scaled: x(q) !== void 0
    }
  }), void 0, void 0, void 0, `svelte-naszew`);
  var Q = e(Z);
  let $;
  var ge = e(Q),
    _e = e => {
      var t = C(),
        n = v(t),
        r = e => {
          j(e, {
            class: `size-4.5`
          })
        },
        i = e => {
          var t = C(),
            n = v(t);
          d(n, H, (e, t) => {
            t(e, {
              class: `size-4.5`
            })
          }), g(e, t)
        };
      f(n, e => {
        x(Y) ? e(r) : e(i, -1)
      }), g(e, t)
    },
    ve = t => {
      var n = le(),
        i = v(n);
      j(i, {
        class: `size-6`
      });
      var a = c(i, 2),
        o = e(a),
        s = c(o),
        l = t => {
          var n = ce(),
            i = e(n, !0);
          m(n), r(e => u(i, e), [() => me(x(Y).countdown)]), g(t, n)
        };
      f(s, e => {
        x(Y).countdown && e(l)
      }), m(a), r(e => u(o, `${e??``} `), [() => x(Y).isBan ? D.banned() : D.timeout()]), g(t, n)
    },
    ye = n => {
      var o = L(),
        p = v(o);
      {
        let e = t(() => N() ? `paint-button-brush size-6 shrink-0 max-sm:hidden` : `size-6`);
        d(p, H, (t, n) => {
          n(t, {
            get class() {
              return x(e)
            }
          })
        })
      }
      var h = c(p, 2),
        _ = e(h),
        y = e(_, !0);
      m(_), i(_, () => A(N() ? V() : void 0));
      var b = c(_, 2),
        S = n => {
          let i = t(() => w.chargeMax ?? k.data.charges.max),
            o = t(() => w.chargeMax === void 0 && k.data.charges.infinite);
          var l = I();
          let d;
          var p = e(l),
            h = e => {
              var t = ue();
              g(e, t)
            },
            _ = n => {
              var o = de();
              let c;
              var l = e(o);
              {
                let e = t(() => N() ? `max-w-full object-contain` : void 0),
                  n = t(() => x(q) ?? 16),
                  r = t(() => `${Math.floor(w.charges)}/${x(i)}`),
                  o = t(() => w.disabled ? x(pe) : `#ffffff`);
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
                    return x(G)
                  },
                  set width(e) {
                    a(G, e, !0)
                  }
                })
              }
              m(o), r(e => {
                c = s(o, 1, `paint-button-balance svelte-naszew`, null, c, {
                  "min-w-0": N()
                }), ee(o, `width: ${e??``}px`)
              }, [() => (Math.floor(x(G) / 5) + 1) * 5]), g(n, o)
            };
          f(p, e => {
            x(o) ? e(h) : e(_, -1)
          });
          var v = c(p, 2),
            y = t => {
              var n = fe();
              let i;
              var a = e(n);
              m(n), r(e => {
                i = s(n, 1, `paint-button-cooldown min-w-7 text-xs svelte-naszew`, null, i, {
                  "shrink-0": N()
                }), u(a, `(${e??``})`)
              }, [() => ne(x(J))]), g(t, n)
            };
          f(v, e => {
            !x(o) && M() && w.charges < x(i) && x(J) !== void 0 && e(y)
          }), m(l), r(() => d = s(l, 1, `paint-button-charges flex items-center gap-1 sm:mt-px svelte-naszew`, null, d, {
            "min-w-0": N(),
            "max-w-full": N()
          })), g(n, l)
        };
      f(b, e => {
        w.charges !== void 0 && k.data && e(S)
      }), m(h), r(() => {
        s(h, 1, l(N() ? `paint-button-label flex min-w-0 items-center gap-2 whitespace-nowrap max-sm:flex-col max-sm:gap-0` : `flex items-center gap-2 whitespace-nowrap`), `svelte-naszew`), s(_, 1, l(N() ? `max-w-full truncate` : void 0), `svelte-naszew`), u(y, V())
      }), g(n, o)
    };
  f(ge, e => {
    U() ? e(_e) : x(Y) ? e(ve, 1) : e(ye, -1)
  }), m(Q), _(Q, e => a(K, e), () => x(K));
  var be = c(Q, 2),
    xe = e => {
      var t = R();
      g(e, t)
    };
  f(be, e => {
    w.loading && e(xe)
  }), m(Z), i(Z, () => A(x(X))), r(() => $ = s(Q, 1, `paint-button-content flex items-center gap-1.5 svelte-naszew`, null, $, {
    "min-w-0": N(),
    "max-w-full": N()
  })), g(y, Z), h()
}

function V(e, t, n) {
  return e < t ? t : e > n ? n : e
}

function H(e, t) {
  let n = 10 ** t;
  return Math.round(e * n) / n
}

function U(e) {
  if (e < 1e3) return String(e);
  let t = [`K`, `M`, `B`, `T`, `Q`],
    n = 0,
    r = e / 1e3;
  for (; Math.round(r) >= 1e3 && n < t.length - 1;) r /= 1e3, n++;
  return `${H(r,+(r<10))}${t[n]}`
}
export {
  P as a, B as i, U as n, H as r, V as t
};