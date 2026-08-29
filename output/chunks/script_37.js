import {
  At as e,
  D as t,
  Dt as n,
  Et as r,
  Ft as i,
  G as a,
  J as o,
  Mt as s,
  Q as c,
  Tt as l,
  X as u,
  Xt as d,
  Yt as f,
  a as p,
  bt as m,
  f as h,
  lt as g,
  o as _,
  rn as v,
  y,
  yt as b
} from "./CX37corp.js";
import "./B8UK1oE5.js";
import {
  C as x,
  g as S,
  h as C,
  n as w,
  q as T
} from "./DCvMiq9p.js";
import {
  t as E
} from "./CrLCY2lS.js";
import {
  t as D
} from "./8VoTuwjs.js";
import {
  t as O
} from "./BQpxdm-P.js";
import {
  r as k
} from "./Dl3RR1lN.js";
var A = new Set([`$$slots`, `$$events`, `$$legacy`, `value`, `fontSize`, `color`, `weight`, `mono`, `width`]),
  j = c(`<canvas></canvas>`);

function M(t, n) {
  d(n, !0);
  let r = p(n, `width`, 15, 0),
    a = _(n, A),
    o = i(() => Math.ceil(n.fontSize)),
    c = s(null),
    l = window.devicePixelRatio ?? 1;
  m(() => {
    let t = g(c).getContext(`2d`);
    t.textBaseline = `top`, t.font = `${n.weight??`normal`} ${n.fontSize}px ${n.mono?`"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`:`"Geist", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`}`, t.fillStyle = n.color ?? `#394e6a`, t.setTransform(l, 0, 0, l, 0, 0), t.clearRect(0, 0, r(), g(o)), t.fillText(n.value, 0, 0);
    let i = t.measureText(n.value);
    r(Math.ceil(i.actualBoundingBoxRight)), e(o, i.actualBoundingBoxDescent)
  });
  var v = j();
  y(v, () => ({
    width: r() * l,
    height: g(o) * l,
    style: `width: ${r()??``}px; height: ${g(o)??``}px`,
    ...a
  })), h(v, t => e(c, t), () => g(c)), u(t, v), f()
}
var N = new Set([`$$slots`, `$$events`, `$$legacy`, `loading`, `charges`, `chargeMax`, `cooldownMs`, `showCooldown`, `maxWidth`]),
  P = c(`<span class="text-sm font-semibold tabular-nums opacity-90 sm:mt-px"> </span>`),
  F = c(`<!> <div class="flex items-center gap-2 whitespace-nowrap"> <!></div>`, 1),
  I = c(`<span class="text-xl leading-none font-semibold" aria-hidden="true">&infin;</span>`),
  L = c(`<span><!></span>`),
  R = c(`<span class="w-7 text-xs"> </span>`),
  z = c(`<span class="flex items-center gap-1 sm:mt-px"><!> <!></span>`),
  B = c(`<span class="loading loading-spinner center-absolute absolute"></span>`),
  V = c(`<button><div class="flex items-center gap-1.5"><!></div> <!></button>`);

function H(c, m) {
  d(m, !0);
  let A = p(m, `showCooldown`, 3, !0),
    j = _(m, N),
    H = s(0),
    U = s(void 0),
    W = s(void 0),
    G = i(() => m.cooldownMs ?? w.cooldown),
    K = i(() => T.theme === `dark` ? `rgba(255, 255, 255, 0.3)` : `#394e6a33`),
    q = i(() => {
      let e = w.timeoutUntil;
      if (!e || e.getTime() <= T.now) return;
      let t = S(e, T.now);
      return {
        isBan: t,
        countdown: t ? null : C(e, T.now)
      }
    });

  function J({
    days: e,
    hours: t,
    minutes: n
  }) {
    return e > 0 ? `${e}d ${t}h` : t > 0 ? `${t}h ${n}m` : `${n}m`
  }
  k(() => [m.loading, m.maxWidth], () => {
    e(W, void 0), requestAnimationFrame(() => {
      if (!g(U)) return;
      let t = g(U).offsetWidth;
      !m.loading && m.maxWidth !== void 0 && t + 20 > m.maxWidth ? e(W, 16 * (m.maxWidth / t) * .8) : e(W, void 0)
    })
  });
  var Y = V();
  y(Y, () => ({
    ...j,
    class: `btn btn-lg sm:btn-xl relative ${g(q)?g(q).isBan?`btn-error`:`btn-warning`:`btn-primary`} ${m.class??``}`,
    style: `max-width: ${m.maxWidth?`${m.maxWidth}px`:`none`}
	${g(W)?`;font-size: ${g(W)}px`:``}`
  }));
  var X = l(Y),
    Z = l(X),
    Q = e => {
      var t = F(),
        i = r(t);
      O(i, {
        class: `size-6`
      });
      var s = n(i, 2),
        c = l(s),
        d = n(c),
        f = e => {
          var t = P(),
            n = l(t, !0);
          v(t), b(e => o(n, e), [() => J(g(q).countdown)]), u(e, t)
        };
      a(d, e => {
        g(q).countdown && e(f)
      }), v(s), b(e => o(c, `${e??``} `), [() => g(q).isBan ? E.banned() : E.timeout()]), u(e, t)
    },
    $ = s => {
      var c = F(),
        d = r(c);
      D(d, {
        class: `size-6`
      });
      var f = n(d, 2),
        p = l(f),
        h = n(p),
        _ = r => {
          let s = i(() => m.chargeMax ?? w.data.charges.max),
            c = i(() => m.chargeMax === void 0 && w.data.charges.infinite);
          var d = z(),
            f = l(d),
            p = e => {
              var t = I();
              u(e, t)
            },
            h = n => {
              var r = L(),
                a = l(r);
              {
                let t = i(() => g(W) ?? 16),
                  n = i(() => `${Math.floor(m.charges)}/${g(s)}`),
                  r = i(() => m.disabled ? g(K) : `#ffffff`);
                M(a, {
                  weight: 600,
                  get fontSize() {
                    return g(t)
                  },
                  get value() {
                    return g(n)
                  },
                  get color() {
                    return g(r)
                  },
                  get width() {
                    return g(H)
                  },
                  set width(t) {
                    e(H, t, !0)
                  }
                })
              }
              v(r), b(e => t(r, `width: ${e??``}px`), [() => (Math.floor(g(H) / 5) + 1) * 5]), u(n, r)
            };
          a(f, e => {
            g(c) ? e(p) : e(h, -1)
          });
          var _ = n(f, 2),
            y = e => {
              var t = R(),
                n = l(t);
              v(t), b(e => o(n, `(${e??``})`), [() => x(g(G))]), u(e, t)
            };
          a(_, e => {
            !g(c) && A() && m.charges < g(s) && g(G) !== void 0 && e(y)
          }), v(d), u(r, d)
        };
      a(h, e => {
        m.charges !== void 0 && w.data && e(_)
      }), v(f), b(e => o(p, `${e??``} `), [() => E.paint()]), u(s, c)
    };
  a(Z, e => {
    g(q) ? e(Q) : e($, -1)
  }), v(X), h(X, t => e(U, t), () => g(U));
  var ee = n(X, 2),
    te = e => {
      var t = B();
      u(e, t)
    };
  a(ee, e => {
    m.loading && e(te)
  }), v(Y), u(c, Y), f()
}
export {
  M as n, H as t
};