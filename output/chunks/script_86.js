import "./DemjF_EU.js";
import "./syWzG2Vh.js";
import {
  p as n,
  a as c,
  b as p,
  c as l,
  r as m,
  i as r,
  A as u
} from "./jMNCXwTX.js";
import {
  e as b
} from "./BU1llCN8.js";
import {
  i as g
} from "./BJiy37aj.js";
import {
  p as h,
  V as v,
  P as y
} from "./4UdUMjgU.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d92995df349756f69cfad78cc6651ba9aa7c7814"
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
  b(s, 7, () => o, t => t.version, (t, i, d) => {
    {
      let f = u(() => r(d) === 0);
      y(t, {
        get patchNote() {
          return r(i)
        },
        get latest() {
          return r(f)
        }
      })
    }
  }), m(s), c(e, s), p()
}
export {
  x as P
};