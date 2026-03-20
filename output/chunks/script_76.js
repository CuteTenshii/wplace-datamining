import "./CvrwJurA.js";
import "./DxF_xxrX.js";
import {
  p as f,
  a as c,
  b as p,
  c as b,
  r as l,
  i as r,
  K as m
} from "./D5ICCrBp.js";
import {
  e as u
} from "./Cy2P91IP.js";
import {
  i as g
} from "./DvY3RCKb.js";
import {
  p as h,
  V as v,
  P as y
} from "./Ds1nt-Dq.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "712356e502b473ac28f78925f6e5ee7bbba0c9dd"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d", e._sentryDebugIdIdentifier = "sentry-dbid-d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d")
  } catch {}
})();
var _ = b('<div class="flex flex-col gap-6"></div>');

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
  }), l(s), c(e, s), p()
}
export {
  x as P
};