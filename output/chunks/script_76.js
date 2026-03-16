import "./Bd9SjhhN.js";
import "./DjFZH-nD.js";
import {
  p as n,
  a as p,
  b as l,
  c,
  r as m,
  i as r,
  K as b
} from "./CEUoH-Z0.js";
import {
  e as u
} from "./CvVeqXVt.js";
import {
  i as g
} from "./ByfGy_IH.js";
import {
  p as h,
  V as v,
  P as y
} from "./Bg1_EpbD.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2092d20e-7ef0-40a4-af0e-5070b3c82862", e._sentryDebugIdIdentifier = "sentry-dbid-2092d20e-7ef0-40a4-af0e-5070b3c82862")
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
  u(s, 7, () => o, t => t.version, (t, i, f) => {
    {
      let d = b(() => r(f) === 0);
      y(t, {
        get patchNote() {
          return r(i)
        },
        get latest() {
          return r(d)
        }
      })
    }
  }), m(s), p(e, s), l()
}
export {
  x as P
};