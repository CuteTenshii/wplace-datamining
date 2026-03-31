import "./BpFtEuzJ.js";
import "./CvDLSnv9.js";
import {
  p as f,
  a as p,
  b as c,
  c as l,
  r as b,
  i as r,
  K as m
} from "./Dwt3-WzD.js";
import {
  e as u
} from "./DBd3GwS4.js";
import {
  i as g
} from "./Cmglnjc6.js";
import {
  p as h,
  V as v,
  P as y
} from "./BrQxPGTA.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "474a06d87b269a074076fdcef11eba6226920584"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d", e._sentryDebugIdIdentifier = "sentry-dbid-d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d")
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
  u(s, 7, () => o, t => t.version, (t, d, i) => {
    {
      let n = m(() => r(i) === 0);
      y(t, {
        get patchNote() {
          return r(d)
        },
        get latest() {
          return r(n)
        }
      })
    }
  }), b(s), p(e, s), c()
}
export {
  x as P
};