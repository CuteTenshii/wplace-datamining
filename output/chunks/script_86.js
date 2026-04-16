import "./CZ-bKVcZ.js";
import "./4lNQOYMf.js";
import {
  p as f,
  a as c,
  b as p,
  c as l,
  r as m,
  i as r,
  A as b
} from "./CsHGdBfZ.js";
import {
  e as u
} from "./-JY6oEeV.js";
import {
  i as g
} from "./CDcnFeFF.js";
import {
  p as h,
  V as v,
  P as y
} from "./AB-IXKqP.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c68723346dc53cede4c33166e0b3070fd4fa2ccb"
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
      let n = b(() => r(d) === 0);
      y(t, {
        get patchNote() {
          return r(i)
        },
        get latest() {
          return r(n)
        }
      })
    }
  }), m(s), c(e, s), p()
}
export {
  x as P
};