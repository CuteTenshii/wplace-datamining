import "./D-b60vN2.js";
import "./Bc8dmEh1.js";
import {
  p as n,
  a as p,
  b as l,
  c,
  r as m,
  i as r,
  A as b
} from "./BZHD_3xD.js";
import {
  e as u
} from "./DlFAAkCw.js";
import {
  i as g
} from "./BRqUm45q.js";
import {
  p as h,
  V as v,
  P as y
} from "./Ch3P3sXh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "804fae10c9a96a4658fed8df64d864b17b400aa1"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "846e8cfa-3714-4e65-871c-6d17b7ed2975", e._sentryDebugIdIdentifier = "sentry-dbid-846e8cfa-3714-4e65-871c-6d17b7ed2975")
  } catch {}
})();
var _ = c('<div class="flex flex-col gap-6"></div>');

function x(e, a) {
  n(a, !1);
  const o = [...h].reverse().map(t => ({
    version: t.version,
    title: t.title,
    html: v(t.markdown)
  }));
  g();
  var s = _();
  u(s, 7, () => o, t => t.version, (t, i, d) => {
    {
      let f = b(() => r(d) === 0);
      y(t, {
        get patchNote() {
          return r(i)
        },
        get latest() {
          return r(f)
        }
      })
    }
  }), m(s), p(e, s), l()
}
export {
  x as P
};