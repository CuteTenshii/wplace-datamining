import "./gt6MPWUX.js";
import "./CN-Ukaat.js";
import {
  p as f,
  a as c,
  b as p,
  c as l,
  r as m,
  i as r,
  A as b
} from "./CaCjFaGC.js";
import {
  e as u
} from "./cP_Funj0.js";
import {
  i as g
} from "./Bc9fxeGs.js";
import {
  p as h,
  V as v,
  P as y
} from "./DG01DBN4.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cfa0387f7130e8b16c3d20b0694a74c32ca6dc49"
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