import "./Bv8XpWJa.js";
import "./PDhc420p.js";
import {
  p as f,
  a as p,
  b as c,
  c as l,
  r as b,
  i as r,
  K as m
} from "./EAWgJkB6.js";
import {
  e as u
} from "./sChf_YHv.js";
import {
  i as g
} from "./Dd43zIRT.js";
import {
  p as h,
  V as v,
  P as y
} from "./D5lrpXvv.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "066116d2a0b0fea465998abdea5fdee468dc0d44"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d", e._sentryDebugIdIdentifier = "sentry-dbid-d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d")
  } catch {}
})();
var _ = l('<div class="flex flex-col gap-6"></div>');

function x(e, a) {
  f(a, !1);
  const d = [...h].reverse().map(t => ({
    version: t.version,
    title: t.title,
    html: v(t.markdown)
  }));
  g();
  var s = _();
  u(s, 7, () => d, t => t.version, (t, o, i) => {
    {
      let n = m(() => r(i) === 0);
      y(t, {
        get patchNote() {
          return r(o)
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