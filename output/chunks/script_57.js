import {
  Et as e,
  G as t,
  It as n,
  J as r,
  Ot as i,
  Q as a,
  X as o,
  Xt as s,
  Zt as c,
  a as l,
  bt as u,
  in as d,
  it as f,
  rt as p,
  ut as m,
  x as h
} from "./D2z8HFb7.js";
import "./B8UK1oE5.js";
import {
  t as g
} from "./Bpg9SJXw.js";
import {
  i as _
} from "./CZtdCIYn.js";
import {
  o as v
} from "./TIZN7tTy.js";
var y = a(`<span class="text-success">(Verified)</span>`),
  b = a(`<a target="_blank" rel="noreferer" aria-label="Discord"><!></a>`),
  x = a(`<button><!></button>`),
  S = a(`<span class="tooltip h-4"><div class="tooltip-content"><span> </span> <!></div> <!></span>`);

function C(a, p) {
  c(p, !0);
  let C = l(p, `size`, 3, `md`),
    w = n(() => !!p.id),
    T = {
      md: `size-5`,
      sm: `size-4`
    },
    E = n(() => `-translate-y-0.5 opacity-70 ${T[C()]}`);
  var D = S(),
    O = e(D),
    k = e(O),
    A = e(k);
  d(k);
  var j = i(k, 2),
    M = e => {
      var t = y();
      o(e, t)
    };
  t(j, e => {
    m(w) && e(M)
  }), d(O);
  var N = i(O, 2),
    P = t => {
      var n = b(),
        r = e(n);
      v(r, {
        get class() {
          return m(E)
        }
      }), d(n), u(e => h(n, `href`, e), [() => `https://discord.com/users/${encodeURIComponent(p.id)}`]), o(t, n)
    },
    F = t => {
      var n = x(),
        r = e(n);
      v(r, {
        get class() {
          return m(E)
        }
      }), d(n), f(`click`, n, async () => {
        await navigator.clipboard.writeText(p.username), _.info(g.username_copied())
      }), o(t, n)
    };
  t(N, e => {
    m(w) ? e(P) : e(F, -1)
  }), d(D), u(() => r(A, `Discord: ${p.username??``}`)), o(a, D), s()
}
p([`click`]);
export {
  C as t
};