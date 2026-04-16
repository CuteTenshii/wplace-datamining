import "./D4N6Bqe8.js";
import "./v5Il9go0.js";
import {
  p as n,
  a as p,
  b as c,
  c as l,
  r as b,
  i as r,
  A as m
} from "./CP18E9YK.js";
import {
  e as u
} from "./ByP2y1mT.js";
import {
  i as g
} from "./BIL8uTvF.js";
import {
  p as h,
  V as v,
  P as y
} from "./DimsLzRB.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6f22cff8187de3395cfbf72b619a597cbd559223"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "846e8cfa-3714-4e65-871c-6d17b7ed2975", e._sentryDebugIdIdentifier = "sentry-dbid-846e8cfa-3714-4e65-871c-6d17b7ed2975")
  } catch {}
})();
var _ = l('<div class="flex flex-col gap-6"></div>');

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
      let f = m(() => r(d) === 0);
      y(t, {
        get patchNote() {
          return r(i)
        },
        get latest() {
          return r(f)
        }
      })
    }
  }), b(s), p(e, s), c()
}
export {
  x as P
};