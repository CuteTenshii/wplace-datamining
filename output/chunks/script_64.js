import {
  At as e,
  Bt as t,
  Ct as n,
  Ft as r,
  G as i,
  Gt as a,
  Ht as o,
  Lt as s,
  M as c,
  Mt as l,
  N as u,
  T as d,
  Ut as f,
  Vt as p,
  Wt as m,
  Y as h,
  a as g,
  cn as _,
  en as v,
  et as y,
  f as b,
  j as x,
  nt as S,
  o as C,
  pt as w,
  tn as T,
  un as E,
  wt as D
} from "./DXDHrD2o.js";
import "./B8UK1oE5.js";
import {
  t as O
} from "./DxdGK6Xj.js";
var k = S(`<canvas></canvas>`);

function A(e, t) {
  T(t, !0);
  let i = g(t, `alt`, 3, ``),
    a = g(t, `class`, 3, ``),
    o = s(void 0),
    l = s(void 0),
    u = s({
      width: 0,
      height: 0
    });
  D(() => {
    let e = new Image,
      n = !1;
    return e.src = t.src, e.decode().then(() => {
      var i;
      n || (r(l, e), (i = t.onload) == null || i.call(t))
    }, () => {
      var e;
      n || (r(l, void 0), (e = t.onerror) == null || e.call(t))
    }), () => {
      n = !0
    }
  }), D(() => {
    let e = w(o);
    if (!e) return;
    let t = () => {
        let t = window.devicePixelRatio || 1;
        r(u, {
          width: Math.round(e.clientWidth * t),
          height: Math.round(e.clientHeight * t)
        })
      },
      n = new ResizeObserver(([e]) => {
        var n;
        let i = (n = e.devicePixelContentBoxSize) == null ? void 0 : n[0];
        i ? r(u, {
          width: i.inlineSize,
          height: i.blockSize
        }) : t()
      });
    try {
      return n.observe(e, {
        box: `device-pixel-content-box`
      }), () => n.disconnect()
    } catch {
      return n.observe(e), window.addEventListener(`resize`, t), () => {
        n.disconnect(), window.removeEventListener(`resize`, t)
      }
    }
  });

  function f(e, t) {
    let {
      width: n,
      height: r
    } = w(u);
    if (e.width !== n && (e.width = n), e.height !== r && (e.height = r), !n || !r) return;
    let i = e.getContext(`2d`);
    if (!i || (i.clearRect(0, 0, n, r), !t)) return;
    let a = Math.max(n / t.naturalWidth, r / t.naturalHeight),
      o = t.naturalWidth * a,
      s = t.naturalHeight * a;
    i.imageSmoothingEnabled = !1, i.drawImage(t, (n - o) / 2, (r - s) / 2, o, s)
  }
  D(() => {
    let e = w(o);
    if (!e) return;
    let t = w(l);
    f(e, t);
    let n = () => f(e, t);
    return e.addEventListener(`contextrestored`, n), () => e.removeEventListener(`contextrestored`, n)
  });
  var p = k();
  b(p, e => r(o, e), () => w(o)), n(() => {
    c(p, 1, `block ${a()??``}`), d(p, `role`, i() ? `img` : void 0), d(p, `aria-label`, i() || void 0), d(p, `aria-hidden`, !i() || void 0)
  }), y(e, p), v()
}
var j, M, N, P, F, I, L = 9,
  R = 95,
  z = 45,
  B = 5;

function V(e) {
  return e.split(``).reduce((e, t) => (e ^ t.charCodeAt(0)) * -5, B) >>> 2
}

function H(e = ``, t = R, n = z, r = V) {
  let i = r(e),
    a = i % L * (360 / L);
  return [...Array(e ? 25 : 0)].reduce((e, t, n) => i & 1 << n % 15 ? e + `<rect x="${n>14?7-~~(n/5):~~(n/5)}" y="${n%5}" width="1" height="1"/>` : e, `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${a} ${t}% ${n}%)" shape-rendering="crispEdges">`) + `</svg>`
}(j = globalThis.customElements) != null && j.get(`minidenticon-svg`) || (M = globalThis.customElements) == null || M.define(`minidenticon-svg`, (F = new WeakMap, I = new WeakSet, N = class extends HTMLElement {
  constructor(...e) {
    super(...e), a(this, I), m(this, F, !1)
  }
  connectedCallback() {
    f(I, this, U).call(this), o(F, this, !0)
  }
  attributeChangedCallback() {
    p(F, this) && f(I, this, U).call(this)
  }
}, E(N, `observedAttributes`, [`username`, `saturation`, `lightness`]), P = {
  _: {}
}, N));

function U() {
  var e;
  let t = N.observedAttributes.map(e => this.getAttribute(e) || void 0),
    n = t.join(`,`);
  this.innerHTML = (e = f(N, N, P)._)[n] ?? (e[n] = H(...t))
}
var W = new Set([`$$slots`, `$$events`, `$$legacy`, `userId`, `seed`]),
  G = S(`<div></div>`);

function K(e, r) {
  T(r, !0), C(r, W);
  let a = t(() => r.seed && r.seed.length > 0 ? r.seed : r.userId.toString());
  var o = G();
  i(o, () => H(w(a), 95, 45), !0), _(o), n(() => c(o, 1, `bg-base-200 minidenticon size-full ${r.class??``??``}`, `svelte-15zr69j`)), y(e, o), v()
}
var q = S(`<img alt="Profile frame" class="pixelated center-absolute pointer-events-none absolute z-10 aspect-square w-full"/>`),
  J = S(`<div><div><!></div> <!></div>`);

function Y(t, r) {
  T(r, !0);
  var i = J(),
    a = e(i);
  x(a, `width: 67.76785714285714%`);
  var o = e(a),
    s = e => {
      K(e, {
        get userId() {
          return r.userId
        },
        get seed() {
          return r.avatarSeed
        }
      })
    },
    f = e => {
      A(e, {
        class: `bg-base-200 size-full`,
        get src() {
          return r.pictureUrl
        },
        alt: `User profile`
      })
    };
  h(o, e => {
    r.pictureUrl ? e(f, -1) : e(s)
  }), _(a);
  var p = l(a, 2),
    m = e => {
      var t = q();
      x(t, `scale: 114.99999999999999%;`), n(() => d(t, `src`, r.frameUrl)), y(e, t)
    };
  h(p, e => {
    r.frameUrl && e(m)
  }), _(i), n((e, t) => {
    c(i, 1, e), c(a, 1, t)
  }, [() => u(O(`relative isolate inline-grid size-10 place-items-center`, r.class)), () => u(O(`avatar border-base-300 aspect-square overflow-hidden rounded-full border`, r.avatarClass))]), y(t, i), v()
}
export {
  A as i, K as n, H as r, Y as t
};