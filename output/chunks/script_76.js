import "./DTln4VLu.js";
import "./DFwR-uPe.js";
import {
  p as f,
  a as p,
  b as l,
  c,
  r as m,
  i as r,
  K as b
} from "./DBVFc_3b.js";
import {
  e as u
} from "./znAeO1OR.js";
import {
  i as g
} from "./C_ZPfOrB.js";
import {
  p as h,
  V as v,
  P as y
} from "./CbBJdX82.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d07d8848ea889a09465db794dc92b79d5c096c7e"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2092d20e-7ef0-40a4-af0e-5070b3c82862", e._sentryDebugIdIdentifier = "sentry-dbid-2092d20e-7ef0-40a4-af0e-5070b3c82862")
  } catch {}
})();
var _ = c('<div class="flex flex-col gap-6"></div>');

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
  }), m(s), p(e, s), l()
}
export {
  x as P
};