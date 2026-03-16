import "./BlzsQxXy.js";
import "./BqIaHz4E.js";
import {
  p as n,
  a as p,
  b as l,
  c,
  r as b,
  i as r,
  K as m
} from "./BpkiS5AT.js";
import {
  e as u
} from "./BwyZDYd-.js";
import {
  i as g
} from "./BY3tCGmI.js";
import {
  p as h,
  V as v,
  P as y
} from "./DVQPH_Hq.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8b4ab28972d63cbdad1764e9fac2da360f24ece0"
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
  u(s, 7, () => o, t => t.version, (t, i, d) => {
    {
      let f = m(() => r(d) === 0);
      y(t, {
        get patchNote() {
          return r(i)
        },
        get latest() {
          return r(f)
        }
      })
    }
  }), b(s), p(e, s), l()
}
export {
  x as P
};