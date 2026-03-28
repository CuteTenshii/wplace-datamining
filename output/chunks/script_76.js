import "./B3yE5ox1.js";
import "./DIyLUWHp.js";
import {
  p as f,
  a as c,
  b as p,
  c as l,
  r as b,
  i as r,
  K as m
} from "./DAkfeAd4.js";
import {
  e as u
} from "./B--LSHRm.js";
import {
  i as g
} from "./cc13aB2r.js";
import {
  p as h,
  V as v,
  P as y
} from "./BcAdh6vz.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5b6c982e9643479451e4387b2e009c10939a1316"
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
  }), b(s), c(e, s), p()
}
export {
  x as P
};