import {
  At as e,
  B as t,
  Ct as n,
  Dt as r,
  Et as i,
  Ft as a,
  G as o,
  H as s,
  Mt as c,
  N as l,
  Ot as u,
  Q as d,
  V as f,
  W as p,
  X as m,
  Xt as h,
  Yt as g,
  Z as _,
  a as v,
  bt as y,
  ht as b,
  lt as x,
  nn as S,
  r as C,
  un as w,
  x as T,
  yt as E
} from "../chunks/R3px7NU1.js";
import {
  n as D
} from "../chunks/BoulVKof.js";
import {
  n as O
} from "../chunks/Y0PNYP8l.js";
import {
  i as k,
  n as A,
  o as j,
  t as M
} from "../chunks/dmqWde2v.js";
import {
  t as N
} from "../chunks/BWKmJI5R.js";
import "../chunks/B8UK1oE5.js";
import "../chunks/BFF7Rac2.js";
import {
  t as P
} from "../chunks/DwR5WZeh.js";
import {
  t as F
} from "../chunks/6vx7SfJF.js";
import {
  t as I
} from "../chunks/CVrzdkX_.js";
import {
  r as L,
  t as R
} from "../chunks/DXgTc45C.js";
import {
  t as z
} from "../chunks/CPflrIHb.js";
var B = w({
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
var U = d(`<link rel="canonical"/>`),
  W = d(`<link rel="alternate"/>`),
  G = d(`<meta property="og:image:width" content="1200"/> <meta property="og:image:height" content="630"/>`, 1),
  K = d(`<meta name="description"/> <meta itemprop="description"/> <!> <!> <meta property="og:site_name" content="Wplace"/> <meta property="og:title"/> <meta property="og:description"/> <meta property="og:url"/> <meta property="og:type"/> <meta property="og:image"/> <!> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"/> <meta name="twitter:description"/> <meta name="twitter:image"/> <!>`, 1),
  q = d(`<meta name="robots"/> <!>`, 1);

function J(e, t) {
  h(t, !0);
  let c = v(t, `robots`, 3, R),
    u = a(() => t.metadata ? A(t.metadata.canonicalPath) : null);
  l(`ojxe63`, e => {
    var a = q(),
      l = i(a),
      d = r(l, 2),
      p = e => {
        var a = K(),
          c = i(a),
          l = r(c, 2),
          d = r(l, 2),
          p = e => {
            var t = U();
            E(() => T(t, `href`, x(u))), m(e, t)
          };
        o(d, e => {
          t.metadata.noindex || e(p)
        });
        var h = r(d, 2);
        s(h, 17, () => t.metadata.alternates ?? [], e => e.language, (e, t) => {
          var n = W();
          E(e => {
            T(n, `hreflang`, x(t).language), T(n, `href`, e)
          }, [() => A(x(t).path)]), m(e, n)
        });
        var g = r(h, 4),
          v = r(g, 2),
          y = r(v, 2),
          C = r(y, 2),
          w = r(C, 2),
          D = r(w, 2),
          O = e => {
            var t = G();
            S(2), m(e, t)
          };
        o(D, e => {
          t.metadata.image || e(O)
        });
        var j = r(D, 4),
          N = r(j, 2),
          P = r(N, 2),
          F = r(P, 2),
          I = e => {
            var n = _(),
              r = i(n);
            f(r, () => k(t.metadata.description)), m(e, n)
          };
        o(F, e => {
          t.metadata.canonicalPath === `/` && !t.metadata.noindex && e(I)
        }), E(() => {
          T(c, `content`, t.metadata.description), T(l, `content`, t.metadata.description), T(g, `content`, t.metadata.title), T(v, `content`, t.metadata.description), T(y, `content`, x(u)), T(C, `content`, t.metadata.type ?? `website`), T(w, `content`, t.metadata.image ?? M), T(j, `content`, t.metadata.title), T(N, `content`, t.metadata.description), T(P, `content`, t.metadata.image ?? M)
        }), b(() => {
          n.title = t.metadata.title ?? ``
        }), m(e, a)
      };
    o(d, e => {
      t.metadata && e(p)
    }), E(() => T(l, `content`, t.metadata && !t.metadata.noindex ? c() : R)), m(e, a)
  }), g()
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
var X = d(`<meta name="viewport"/>`);

function Z(e, t) {
  h(t, !0);
  let n = a(() => L(P.url, !0, P.status)),
    r = a(() => Y(P.url.pathname)),
    i = a(() => P.error ? null : P.data.seo ?? (x(r) ? {
      ...x(r),
      canonicalPath: P.url.pathname
    } : null));
  l(`7t0jhl`, e => {
    var t = X();
    E(e => T(t, `content`, e), [() => {
      var e;
      return (e = P.route.id) != null && e.startsWith(`/(public)`) ? `width=device-width, initial-scale=1, viewport-fit=cover` : `width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, interactive-widget=resizes-content, viewport-fit=cover`
    }]), m(e, t)
  }), J(e, {
    get metadata() {
      return x(i)
    },
    get robots() {
      return x(n)
    }
  }), g()
}
var Q = d(`<!> <!>`, 1);

function $(n, s) {
  h(s, !0);
  let l = c(u(`en`));
  y(() => (document.documentElement.style.setProperty(`--pixel-font-density`, String(I.current || 1)), () => document.documentElement.style.removeProperty(`--pixel-font-density`))), C(() => {
    e(l, O(), !0)
  }), y(() => {
    var e;
    document.documentElement.lang = ((e = P.data.seo) == null ? void 0 : e.language) ?? N(O())
  }), y(() => {
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
  var d = Q(),
    f = i(d);
  p(f, () => x(l), e => {
    Z(e, {})
  });
  var v = r(f, 2),
    b = e => {
      var n = _(),
        r = i(n);
      p(r, () => x(l), e => {
        var n = _(),
          r = i(n);
        t(r, () => s.children), m(e, n)
      }), m(e, n)
    },
    S = a(() => {
      var e;
      return (e = P.route.id) == null ? void 0 : e.startsWith(`/(public)`)
    }),
    w = e => {
      var n = _(),
        r = i(n);
      t(r, () => s.children), m(e, n)
    };
  o(v, e => {
    x(S) ? e(b) : e(w, -1)
  }), m(n, d), g()
}
export {
  $ as component, B as universal
};