import {
  Bt as e,
  Ct as t,
  Ft as n,
  G as r,
  J as i,
  K as a,
  L as o,
  Lt as s,
  Mt as c,
  Nt as l,
  Ot as u,
  T as d,
  W as f,
  Y as p,
  a as m,
  en as h,
  et as g,
  hn as _,
  jt as v,
  nt as y,
  pt as b,
  r as x,
  sn as S,
  tn as C,
  tt as w,
  wt as T,
  yt as E
} from "../chunks/DXDHrD2o.js";
import {
  n as D
} from "../chunks/C0zwTQsw.js";
import {
  n as O
} from "../chunks/D6rWhY4a.js";
import {
  i as k,
  n as A,
  o as j,
  t as M
} from "../chunks/Cqe7l6lA.js";
import {
  t as N
} from "../chunks/C-QaCN9v.js";
import "../chunks/B8UK1oE5.js";
import "../chunks/NrE1x-Kk.js";
import {
  t as P
} from "../chunks/BPgnlkMP.js";
import {
  t as F
} from "../chunks/BPzKxQPM.js";
import {
  t as I
} from "../chunks/BH5PwBe6.js";
import {
  r as L,
  t as R
} from "../chunks/B1lQcRiR.js";
import {
  t as z
} from "../chunks/BLUc1uLr.js";
var B = _({
    load: () => V,
    prerender: () => !0
  }),
  V = async ({
    route: e
  }) => ({
    seo: await j(e.id)
  });

function H(e, t) {
  if (!e || !t) return !1;
  let n = e => e === `/(game)` || e.startsWith(`/(game)/`);
  return n(e) !== n(t)
}
var U = y(`<link rel="canonical"/>`),
  W = y(`<link rel="alternate"/>`),
  G = y(`<meta property="og:image:width" content="1200"/> <meta property="og:image:height" content="630"/>`, 1),
  K = y(`<meta name="description"/> <meta itemprop="description"/> <!> <!> <meta property="og:site_name" content="Wplace"/> <meta property="og:title"/> <meta property="og:description"/> <meta property="og:url"/> <meta property="og:type"/> <meta property="og:image"/> <!> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"/> <meta name="twitter:description"/> <meta name="twitter:image"/> <!>`, 1),
  q = y(`<meta name="robots"/> <!>`, 1);

function J(n, i) {
  C(i, !0);
  let s = m(i, `robots`, 3, R),
    l = e(() => i.metadata ? A(i.metadata.canonicalPath) : null);
  o(`ojxe63`, e => {
    var n = q(),
      o = v(n),
      f = c(o, 2),
      m = e => {
        var n = K(),
          o = v(n),
          s = c(o, 2),
          f = c(s, 2),
          m = e => {
            var n = U();
            t(() => d(n, `href`, b(l))), g(e, n)
          };
        p(f, e => {
          i.metadata.noindex || e(m)
        });
        var h = c(f, 2);
        a(h, 17, () => i.metadata.alternates ?? [], e => e.language, (e, n) => {
          var r = W();
          t(e => {
            d(r, `hreflang`, b(n).language), d(r, `href`, e)
          }, [() => A(b(n).path)]), g(e, r)
        });
        var _ = c(h, 4),
          y = c(_, 2),
          x = c(y, 2),
          C = c(x, 2),
          T = c(C, 2),
          D = c(T, 2),
          O = e => {
            var t = G();
            S(2), g(e, t)
          };
        p(D, e => {
          i.metadata.image || e(O)
        });
        var j = c(D, 4),
          N = c(j, 2),
          P = c(N, 2),
          F = c(P, 2),
          I = e => {
            var t = w(),
              n = v(t);
            r(n, () => k(i.metadata.description)), g(e, t)
          };
        p(F, e => {
          i.metadata.canonicalPath === `/` && !i.metadata.noindex && e(I)
        }), t(() => {
          d(o, `content`, i.metadata.description), d(s, `content`, i.metadata.description), d(_, `content`, i.metadata.title), d(y, `content`, i.metadata.description), d(x, `content`, b(l)), d(C, `content`, i.metadata.type ?? `website`), d(T, `content`, i.metadata.image ?? M), d(j, `content`, i.metadata.title), d(N, `content`, i.metadata.description), d(P, `content`, i.metadata.image ?? M)
        }), E(() => {
          u.title = i.metadata.title ?? ``
        }), g(e, n)
      };
    p(f, e => {
      i.metadata && e(m)
    }), t(() => d(o, `content`, i.metadata && !i.metadata.noindex ? s() : R)), g(e, n)
  }), h()
}

function Y(e) {
  if (e === `/patch-notes`) return {
    title: `${z.patch_notes()} | Wplace`,
    description: z.public_updates_intro()
  };
  if (/^\/patch-notes\/\d+\.\d+\.\d+$/.test(e)) {
    let t = e.split(`/`).at(-1);
    return {
      title: `${z.patch_notes()} ${t} | Wplace`,
      description: z.public_release_intro({
        version: t
      })
    }
  }
  if (e === `/`) return {
    title: `Wplace - ${z.paint_the_world()}`,
    description: z.info_intro() + ` ` + z.info_invitation()
  }
}
var X = y(`<meta name="viewport"/>`);

function Z(n, r) {
  C(r, !0);
  let i = e(() => L(P.url, !0, P.status)),
    a = e(() => Y(P.url.pathname)),
    s = e(() => P.error ? null : P.data.seo ?? (b(a) ? {
      ...b(a),
      canonicalPath: P.url.pathname
    } : null));
  o(`7t0jhl`, e => {
    var n = X();
    t(e => d(n, `content`, e), [() => {
      var e;
      return (e = P.route.id) != null && e.startsWith(`/(public)`) ? `width=device-width, initial-scale=1, viewport-fit=cover` : `width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, interactive-widget=resizes-content, viewport-fit=cover`
    }]), g(e, n)
  }), J(n, {
    get metadata() {
      return b(s)
    },
    get robots() {
      return b(i)
    }
  }), h()
}
var Q = y(`<!> <!>`, 1);

function $(t, r) {
  C(r, !0);
  let a = s(l(`en`));
  T(() => (document.documentElement.style.setProperty(`--pixel-font-density`, String(I.current || 1)), () => document.documentElement.style.removeProperty(`--pixel-font-density`))), x(() => {
    n(a, O(), !0)
  }), T(() => {
    var e;
    document.documentElement.lang = ((e = P.data.seo) == null ? void 0 : e.language) ?? N(O())
  }), T(() => {
    var e;
    return document.documentElement.toggleAttribute(`data-standard-ui`, F.standard), document.documentElement.toggleAttribute(`data-game-ui`, ((e = P.route.id) == null ? void 0 : e.startsWith(`/(game)`)) === !0), () => {
      document.documentElement.removeAttribute(`data-standard-ui`), document.documentElement.removeAttribute(`data-game-ui`)
    }
  }), D(({
    from: e,
    to: t,
    type: n,
    willUnload: r,
    cancel: i
  }) => {
    r || !t || !H(e == null ? void 0 : e.route.id, t.route.id) || (n === `popstate` ? window.location.replace(t.url.href) : (i(), window.location.assign(t.url.href)))
  });
  var o = Q(),
    u = v(o);
  i(u, () => b(a), e => {
    Z(e, {})
  });
  var d = c(u, 2),
    m = e => {
      var t = w(),
        n = v(t);
      i(n, () => b(a), e => {
        var t = w(),
          n = v(t);
        f(n, () => r.children), g(e, t)
      }), g(e, t)
    },
    _ = e(() => {
      var e;
      return (e = P.route.id) == null ? void 0 : e.startsWith(`/(public)`)
    }),
    y = e => {
      var t = w(),
        n = v(t);
      f(n, () => r.children), g(e, t)
    };
  p(d, e => {
    b(_) ? e(m) : e(y, -1)
  }), g(t, o), h()
}
export {
  $ as component, B as universal
};