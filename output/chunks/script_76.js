import "./B6L2Wv0c.js";
import "./K5ek0kLy.js";
import {
  p as c,
  a as f,
  b as p,
  c as l,
  r as b,
  i as r,
  K as m
} from "./CqOPxJme.js";
import {
  e as u
} from "./DdRvhxTW.js";
import {
  i as g
} from "./mdp-4RvX.js";
import {
  p as h,
  V as v,
  P as y
} from "./BKZOnaEh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "405d9b08e89656e997bc9e3c862de93d5b969d8c"
    };
    var s = new e.Error().stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d", e._sentryDebugIdIdentifier = "sentry-dbid-d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d")
  } catch {}
})();
var _ = l('<div class="flex flex-col gap-6"></div>');

function x(e, s) {
  c(s, !1);
  const o = [...h].reverse().map(t => ({
    version: t.version,
    title: t.title,
    html: v(t.markdown)
  }));
  g();
  var a = _();
  u(a, 7, () => o, t => t.version, (t, d, i) => {
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
  }), b(a), f(e, a), p()
}
export {
  x as P
};