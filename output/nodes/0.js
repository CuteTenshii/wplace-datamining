import {
  B as e,
  Dt as t,
  G as n,
  H as r,
  It as i,
  N as a,
  Nt as o,
  Ot as s,
  Q as c,
  W as l,
  X as u,
  Xt as d,
  Z as f,
  Zt as p,
  a as m,
  bt as h,
  dn as g,
  gt as _,
  jt as v,
  kt as y,
  nt as b,
  r as x,
  rn as S,
  ut as C,
  wt as w,
  x as T,
  xt as E
} from "../chunks/D2z8HFb7.js";
import {
  n as D
} from "../chunks/Bf8EzLXE.js";
import {
  n as O
} from "../chunks/DP7ilGQK.js";
import {
  a as k,
  n as A,
  t as j
} from "../chunks/BkfpYI5i.js";
import {
  t as M
} from "../chunks/CP-orNnm.js";
import "../chunks/B8UK1oE5.js";
import "../chunks/dVBnFLtr.js";
import {
  t as N
} from "../chunks/CIt1tZ1i.js";
import {
  t as P
} from "../chunks/njokBD2q.js";
import {
  t as F
} from "../chunks/BMA24uln.js";
import {
  r as I,
  t as L
} from "../chunks/BULEWwBi.js";
import {
  t as R
} from "../chunks/Bpg9SJXw.js";
import {
  n as z,
  t as B
} from "../chunks/bAna-VH3.js";
var V = g({
    load: () => H,
    prerender: () => !0
  }),
  H = async ({
    route: e
  }) => ({
    seo: await k(e.id)
  });

function U(e, t) {
  if (!e || !t) return !1;
  let n = e => e === `/(game)` || e.startsWith(`/(game)/`);
  return n(e) !== n(t)
}
var W = c(`<link rel="canonical"/>`),
  G = c(`<link rel="alternate"/>`),
  K = c(`<meta property="og:image:width" content="1200"/> <meta property="og:image:height" content="630"/>`, 1),
  q = b(c(`<script type="application/ld+json">
				{
					"@context": "https://schema.org",
					"@type": "WebApplication",
					"name": "Wplace",
					"url": "https://wplace.live/"
				}
			<\/script><!>`, 1)),
  J = c(`<meta name="description"/> <meta itemprop="description"/> <!> <!> <meta property="og:site_name" content="Wplace"/> <meta property="og:title"/> <meta property="og:description"/> <meta property="og:url"/> <meta property="og:type"/> <meta property="og:image"/> <!> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"/> <meta name="twitter:description"/> <meta name="twitter:image"/> <!>`, 1),
  Y = c(`<meta name="robots"/> <!>`, 1);

function X(e, o) {
  p(o, !0);
  let c = m(o, `robots`, 3, L),
    l = i(() => o.metadata ? A(o.metadata.canonicalPath) : null);
  a(`ojxe63`, e => {
    var i = Y(),
      a = t(i),
      d = s(a, 2),
      f = e => {
        var i = J(),
          a = t(i),
          c = s(a, 2),
          d = s(c, 2),
          f = e => {
            var t = W();
            h(() => T(t, `href`, C(l))), u(e, t)
          };
        n(d, e => {
          o.metadata.noindex || e(f)
        });
        var p = s(d, 2);
        r(p, 17, () => o.metadata.alternates ?? [], e => e.language, (e, t) => {
          var n = G();
          h(e => {
            T(n, `hreflang`, C(t).language), T(n, `href`, e)
          }, [() => A(C(t).path)]), u(e, n)
        });
        var m = s(p, 4),
          g = s(m, 2),
          v = s(g, 2),
          y = s(v, 2),
          b = s(y, 2),
          x = s(b, 2),
          E = e => {
            var t = K();
            S(2), u(e, t)
          };
        n(x, e => {
          o.metadata.image || e(E)
        });
        var D = s(x, 4),
          O = s(D, 2),
          k = s(O, 2),
          M = s(k, 2),
          N = e => {
            var n = q();
            s(t(n)), u(e, n)
          };
        n(M, e => {
          o.metadata.canonicalPath === `/` && !o.metadata.noindex && e(N)
        }), h(() => {
          T(a, `content`, o.metadata.description), T(c, `content`, o.metadata.description), T(m, `content`, o.metadata.title), T(g, `content`, o.metadata.description), T(v, `content`, C(l)), T(y, `content`, o.metadata.type ?? `website`), T(b, `content`, o.metadata.image ?? j), T(D, `content`, o.metadata.title), T(O, `content`, o.metadata.description), T(k, `content`, o.metadata.image ?? j)
        }), _(() => {
          w.title = o.metadata.title ?? ``
        }), u(e, i)
      };
    n(d, e => {
      o.metadata && e(f)
    }), h(() => T(a, `content`, o.metadata && !o.metadata.noindex ? c() : L)), u(e, i)
  }), d()
}

function Z(e) {
  if (z.includes(e)) {
    let t = B(e);
    return {
      title: `${t.title} | Wplace`,
      description: t.intro,
      image: t.image
    }
  }
  if (e === `/patch-notes`) return {
    title: `${R.patch_notes()} | Wplace`,
    description: R.public_updates_intro()
  };
  if (/^\/patch-notes\/\d+\.\d+\.\d+$/.test(e)) {
    let t = e.split(`/`).at(-1);
    return {
      title: `${R.patch_notes()} ${t} | Wplace`,
      description: R.public_release_intro({
        version: t
      })
    }
  }
  if (e === `/`) return {
    title: `Wplace - ${R.paint_the_world()}`,
    description: R.info_intro() + ` ` + R.info_invitation()
  }
}
var Q = c(`<meta name="viewport"/>`);

function $(e, t) {
  p(t, !0);
  let n = i(() => I(N.url, !0, N.status)),
    r = i(() => Z(N.url.pathname)),
    o = i(() => N.error ? null : N.data.seo ?? (C(r) ? {
      ...C(r),
      canonicalPath: N.url.pathname,
      image: C(r).image ? `https://wplace.live` + C(r).image : void 0
    } : null));
  a(`7t0jhl`, e => {
    var t = Q();
    h(e => T(t, `content`, e), [() => {
      var e;
      return (e = N.route.id) != null && e.startsWith(`/(public)`) ? `width=device-width, initial-scale=1, viewport-fit=cover` : `width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, interactive-widget=resizes-content, viewport-fit=cover`
    }]), u(e, t)
  }), X(e, {
    get metadata() {
      return C(o)
    },
    get robots() {
      return C(n)
    }
  }), d()
}
var ee = c(`<!> <!>`, 1);

function te(r, a) {
  p(a, !0);
  let c = o(y(`en`));
  E(() => (document.documentElement.style.setProperty(`--pixel-font-density`, String(F.current || 1)), () => document.documentElement.style.removeProperty(`--pixel-font-density`))), x(() => {
    v(c, O(), !0)
  }), E(() => {
    var e;
    document.documentElement.lang = ((e = N.data.seo) == null ? void 0 : e.language) ?? M(O())
  }), E(() => {
    var e;
    return document.documentElement.toggleAttribute(`data-standard-ui`, P.standard), document.documentElement.toggleAttribute(`data-game-ui`, ((e = N.route.id) == null ? void 0 : e.startsWith(`/(game)`)) === !0), () => {
      document.documentElement.removeAttribute(`data-standard-ui`), document.documentElement.removeAttribute(`data-game-ui`)
    }
  }), D(({
    from: e,
    to: t,
    type: n,
    willUnload: r,
    cancel: i
  }) => {
    r || !t || !U(e == null ? void 0 : e.route.id, t.route.id) || (n === `popstate` ? window.location.replace(t.url.href) : (i(), window.location.assign(t.url.href)))
  });
  var m = ee(),
    h = t(m);
  l(h, () => C(c), e => {
    $(e, {})
  });
  var g = s(h, 2),
    _ = n => {
      var r = f(),
        i = t(r);
      l(i, () => C(c), n => {
        var r = f(),
          i = t(r);
        e(i, () => a.children), u(n, r)
      }), u(n, r)
    },
    b = i(() => {
      var e;
      return (e = N.route.id) == null ? void 0 : e.startsWith(`/(public)`)
    }),
    S = n => {
      var r = f(),
        i = t(r);
      e(i, () => a.children), u(n, r)
    };
  n(g, e => {
    C(b) ? e(_) : e(S, -1)
  }), u(r, m), d()
}
export {
  te as component, V as universal
};