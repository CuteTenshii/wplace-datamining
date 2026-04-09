import "./Bw2t7C85.js";
import "./BV9B4E7T.js";
import {
  p as n,
  a as p,
  b as l,
  c as b,
  r as c,
  i as d,
  K as m
} from "./Cu0FD5l7.js";
import {
  e as u
} from "./Bi3kWf99.js";
import {
  i as g
} from "./Cod6-w0f.js";
import {
  p as h,
  V as v,
  P as y
} from "./B8QXp_Ht.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d", e._sentryDebugIdIdentifier = "sentry-dbid-d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d")
  } catch {}
})();
var _ = b('<div class="flex flex-col gap-6"></div>');

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
  }), c(s), p(e, s), l()
}
export {
  x as P
};