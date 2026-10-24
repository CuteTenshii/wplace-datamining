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
  V as l,
  W as u,
  X as d,
  Xt as f,
  Z as p,
  Zt as m,
  a as h,
  bt as g,
  dn as _,
  ht as v,
  jt as y,
  kt as b,
  lt as x,
  r as S,
  rn as C,
  wt as w,
  x as T,
  yt as E
} from "../chunks/DTpxYwnW.js";
import {
  n as D
} from "../chunks/BlsHhckk.js";
import {
  n as O
} from "../chunks/BJSqxBh3.js";
import {
  i as k,
  n as A,
  o as j,
  t as M
} from "../chunks/oGethI4j.js";
import {
  t as N
} from "../chunks/CvUdb-jm.js";
import "../chunks/B8UK1oE5.js";
import "../chunks/CpAMJfco.js";
import {
  t as P
} from "../chunks/CQsVMR6d.js";
import {
  t as F
} from "../chunks/CBKeiyYJ.js";
import {
  t as I
} from "../chunks/BUyxRjvp.js";
import {
  r as L,
  t as R
} from "../chunks/BEIwN2q5.js";
import {
  t as z
} from "../chunks/CRT_OsN_.js";
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
var U = c(`<link rel="canonical"/>`),
  W = c(`<link rel="alternate"/>`),
  G = c(`<meta property="og:image:width" content="1200"/> <meta property="og:image:height" content="630"/>`, 1),
  K = c(`<meta name="description"/> <meta itemprop="description"/> <!> <!> <meta property="og:site_name" content="Wplace"/> <meta property="og:title"/> <meta property="og:description"/> <meta property="og:url"/> <meta property="og:type"/> <meta property="og:image"/> <!> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"/> <meta name="twitter:description"/> <meta name="twitter:image"/> <!>`, 1),
  q = c(`<meta name="robots"/> <!>`, 1);

function J(e, o) {
  m(o, !0);
  let c = h(o, `robots`, 3, R),
    u = i(() => o.metadata ? A(o.metadata.canonicalPath) : null);
  a(`ojxe63`, e => {
    var i = q(),
      a = t(i),
      f = s(a, 2),
      m = e => {
        var i = K(),
          a = t(i),
          c = s(a, 2),
          f = s(c, 2),
          m = e => {
            var t = U();
            E(() => T(t, `href`, x(u))), d(e, t)
          };
        n(f, e => {
          o.metadata.noindex || e(m)
        });
        var h = s(f, 2);
        r(h, 17, () => o.metadata.alternates ?? [], e => e.language, (e, t) => {
          var n = W();
          E(e => {
            T(n, `hreflang`, x(t).language), T(n, `href`, e)
          }, [() => A(x(t).path)]), d(e, n)
        });
        var g = s(h, 4),
          _ = s(g, 2),
          y = s(_, 2),
          b = s(y, 2),
          S = s(b, 2),
          D = s(S, 2),
          O = e => {
            var t = G();
            C(2), d(e, t)
          };
        n(D, e => {
          o.metadata.image || e(O)
        });
        var j = s(D, 4),
          N = s(j, 2),
          P = s(N, 2),
          F = s(P, 2),
          I = e => {
            var n = p(),
              r = t(n);
            l(r, () => k(o.metadata.description)), d(e, n)
          };
        n(F, e => {
          o.metadata.canonicalPath === `/` && !o.metadata.noindex && e(I)
        }), E(() => {
          T(a, `content`, o.metadata.description), T(c, `content`, o.metadata.description), T(g, `content`, o.metadata.title), T(_, `content`, o.metadata.description), T(y, `content`, x(u)), T(b, `content`, o.metadata.type ?? `website`), T(S, `content`, o.metadata.image ?? M), T(j, `content`, o.metadata.title), T(N, `content`, o.metadata.description), T(P, `content`, o.metadata.image ?? M)
        }), v(() => {
          w.title = o.metadata.title ?? ``
        }), d(e, i)
      };
    n(f, e => {
      o.metadata && e(m)
    }), E(() => T(a, `content`, o.metadata && !o.metadata.noindex ? c() : R)), d(e, i)
  }), f()
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
var X = c(`<meta name="viewport"/>`);

function Z(e, t) {
  m(t, !0);
  let n = i(() => L(P.url, !0, P.status)),
    r = i(() => Y(P.url.pathname)),
    o = i(() => P.error ? null : P.data.seo ?? (x(r) ? {
      ...x(r),
      canonicalPath: P.url.pathname
    } : null));
  a(`7t0jhl`, e => {
    var t = X();
    E(e => T(t, `content`, e), [() => {
      var e;
      return (e = P.route.id) != null && e.startsWith(`/(public)`) ? `width=device-width, initial-scale=1, viewport-fit=cover` : `width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, interactive-widget=resizes-content, viewport-fit=cover`
    }]), d(e, t)
  }), J(e, {
    get metadata() {
      return x(o)
    },
    get robots() {
      return x(n)
    }
  }), f()
}
var Q = c(`<!> <!>`, 1);

function $(r, a) {
  m(a, !0);
  let c = o(b(`en`));
  g(() => (document.documentElement.style.setProperty(`--pixel-font-density`, String(I.current || 1)), () => document.documentElement.style.removeProperty(`--pixel-font-density`))), S(() => {
    y(c, O(), !0)
  }), g(() => {
    var e;
    document.documentElement.lang = ((e = P.data.seo) == null ? void 0 : e.language) ?? N(O())
  }), g(() => {
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
  var l = Q(),
    h = t(l);
  u(h, () => x(c), e => {
    Z(e, {})
  });
  var _ = s(h, 2),
    v = n => {
      var r = p(),
        i = t(r);
      u(i, () => x(c), n => {
        var r = p(),
          i = t(r);
        e(i, () => a.children), d(n, r)
      }), d(n, r)
    },
    C = i(() => {
      var e;
      return (e = P.route.id) == null ? void 0 : e.startsWith(`/(public)`)
    }),
    w = n => {
      var r = p(),
        i = t(r);
      e(i, () => a.children), d(n, r)
    };
  n(_, e => {
    x(C) ? e(v) : e(w, -1)
  }), d(r, l), f()
}
export {
  $ as component, B as universal
};