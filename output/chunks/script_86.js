import "./CZEV_Nk5.js";
import "./kCmYhX2d.js";
import {
  p as f,
  a as c,
  b as p,
  c as l,
  r as b,
  i as r,
  A as m
} from "./aONqeBJ4.js";
import {
  e as u
} from "./1qcYieU1.js";
import {
  i as g
} from "./DIgUjA4K.js";
import {
  p as h,
  V as v,
  P as y
} from "./CuAuf-Wy.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c82b8b5d8deacdc21b4154b9417a43b8fc75f478"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "846e8cfa-3714-4e65-871c-6d17b7ed2975", e._sentryDebugIdIdentifier = "sentry-dbid-846e8cfa-3714-4e65-871c-6d17b7ed2975")
  } catch {}
})();
var _ = l('<div class="flex flex-col gap-6"></div>');

function x(e, a) {
  f(a, !1);
  const o = [...h].reverse().map(t => ({
    version: t.version,
    title: t.title,
    html: v(t.markdown)
  }));
  g();
  var s = _();
  u(s, 7, () => o, t => t.version, (t, i, d) => {
    {
      let n = m(() => r(d) === 0);
      y(t, {
        get patchNote() {
          return r(i)
        },
        get latest() {
          return r(n)
        }
      })
    }
  }), b(s), c(e, s), p()
}
export {
  x as P
};