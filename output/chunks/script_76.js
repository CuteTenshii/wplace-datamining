import "./ycITui8m.js";
import "./C4fGV1or.js";
import {
  p as n,
  a as c,
  b as p,
  c as l,
  r as b,
  i as r,
  K as m
} from "./CA_jRce9.js";
import {
  e as u
} from "./Bq2ZuIQa.js";
import {
  i as g
} from "./5ben3ZbD.js";
import {
  p as h,
  V as v,
  P as y
} from "./Tm96myJV.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8982ef6b1b489154c6458cf227ee17f00e1038fe"
    };
    var s = new e.Error().stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d", e._sentryDebugIdIdentifier = "sentry-dbid-d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d")
  } catch {}
})();
var _ = l('<div class="flex flex-col gap-6"></div>');

function x(e, s) {
  n(s, !1);
  const o = [...h].reverse().map(t => ({
    version: t.version,
    title: t.title,
    html: v(t.markdown)
  }));
  g();
  var a = _();
  u(a, 7, () => o, t => t.version, (t, d, i) => {
    {
      let f = m(() => r(i) === 0);
      y(t, {
        get patchNote() {
          return r(d)
        },
        get latest() {
          return r(f)
        }
      })
    }
  }), b(a), c(e, a), p()
}
export {
  x as P
};