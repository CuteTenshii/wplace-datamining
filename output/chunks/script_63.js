import {
  Dt as e,
  Et as t,
  G as n,
  H as r,
  It as i,
  J as a,
  O as o,
  Ot as s,
  Q as c,
  U as l,
  X as u,
  Xt as d,
  Z as f,
  Zt as p,
  a as m,
  bt as h,
  in as g,
  it as _,
  rn as v,
  rt as y,
  ut as b,
  x
} from "./D2z8HFb7.js";
import "./B8UK1oE5.js";
import {
  t as S
} from "./Bpg9SJXw.js";
var C = c(`<button><div class="tooltip-content z-50"> </div> <img class="size-full object-contain"/></button>`),
  w = c(`<button><div class="tooltip-content z-50"> </div> <span class="text-sm font-light">+</span></button>`);

function T(c, y) {
  p(y, !0);
  let T = {
      sm: `size-5`,
      md: `size-7`
    },
    E = m(y, `size`, 3, `sm`),
    D = i(() => T[E()]),
    O = i(() => !!y.onslotclick);
  var k = f(),
    A = e(k);
  r(A, 16, () => [0, 1, 2], l, (r, c) => {
    let l = i(() => {
      var e;
      return (e = y.badges) == null ? void 0 : e[c]
    });
    var d = f(),
      p = e(d),
      m = e => {
        var n = C();
        let r;
        var i = t(n),
          d = t(i, !0);
        g(i);
        var f = s(i, 2);
        g(n), h(() => {
          r = o(n, 1, `tooltip rounded-full border border-transparent ${b(D)??``} transition-colors duration-150 ${b(O)?`hover:bg-base-200/80`:``}`, null, r, {
            "cursor-auto": !b(O)
          }), a(d, b(l).name), x(f, `src`, b(l).imageUrl), x(f, `alt`, b(l).name)
        }), _(`click`, n, function(...e) {
          var t;
          (t = b(O) ? () => {
            var e;
            return (e = y.onslotclick) == null ? void 0 : e.call(y, c)
          } : void 0) == null || t.apply(this, e)
        }), u(e, n)
      },
      T = e => {
        var n = w(),
          r = t(n),
          i = t(r, !0);
        g(r), v(2), g(n), h(e => {
          o(n, 1, `border-base-content/30 bg-base-200/80 text-base-content/60 hover:bg-base-300/50 hover:border-primary/40 pixelated tooltip grid ${b(D)??``} place-items-center rounded-full transition-colors duration-150`), a(i, e)
        }, [() => S.equip_badge()]), _(`click`, n, () => {
          var e;
          return (e = y.onslotclick) == null ? void 0 : e.call(y, c)
        }), u(e, n)
      };
    n(p, e => {
      b(l) ? e(m) : b(O) && e(T, 1)
    }), u(r, d)
  }), u(c, k), d()
}
y([`click`]);
export {
  T as t
};