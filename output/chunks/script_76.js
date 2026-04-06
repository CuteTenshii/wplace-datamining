import "./EO-j69i3.js";
import "./C_70uKOE.js";
import {
  p as n,
  a as p,
  b as c,
  c as l,
  r as b,
  i as d,
  K as m
} from "./BwyorQE6.js";
import {
  e as u
} from "./i9mYWoif.js";
import {
  i as g
} from "./nJ9kt6go.js";
import {
  p as h,
  V as v,
  P as y
} from "./D6F-pw_I.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1df086015dcad95f71ef916d3761e849d40d98a2"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d", e._sentryDebugIdIdentifier = "sentry-dbid-d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d")
  } catch {}
})();
var _ = l('<div class="flex flex-col gap-6"></div>');

function x(e, a) {
  n(a, !1);
  const r = [...h].reverse().map(t => ({
    version: t.version,
    title: t.title,
    html: v(t.markdown)
  }));
  g();
  var s = _();
  u(s, 7, () => r, t => t.version, (t, o, i) => {
    {
      let f = m(() => d(i) === 0);
      y(t, {
        get patchNote() {
          return d(o)
        },
        get latest() {
          return d(f)
        }
      })
    }
  }), b(s), p(e, s), c()
}
export {
  x as P
};