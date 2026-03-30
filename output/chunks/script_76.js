import "./Dnk7a4UH.js";
import "./YoS9PVT_.js";
import {
  p as n,
  a as p,
  b,
  c,
  r as l,
  i as r,
  K as m
} from "./DySbC8v5.js";
import {
  e as u
} from "./CFTbOefe.js";
import {
  i as g
} from "./C-YF4lZn.js";
import {
  p as h,
  V as v,
  P as y
} from "./BJ_KQA4G.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b137ab40316e1e3f22728d8060cbbff276df86f5"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d", e._sentryDebugIdIdentifier = "sentry-dbid-d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d")
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
  u(s, 7, () => o, t => t.version, (t, d, i) => {
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
  }), l(s), p(e, s), b()
}
export {
  x as P
};