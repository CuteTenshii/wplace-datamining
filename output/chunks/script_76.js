import "./B09UZB6b.js";
import "./Cy_rJVW5.js";
import {
  p as n,
  a as c,
  b as p,
  c as b,
  r as l,
  i as r,
  K as m
} from "./D28CkLTn.js";
import {
  e as u
} from "./6hMu5fzO.js";
import {
  i as g
} from "./PXM7jBCO.js";
import {
  p as h,
  V as v,
  P as y
} from "./BBn3p5xz.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ceaf71126b6ebfffce341bb7a3def1f2574f660c"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d", e._sentryDebugIdIdentifier = "sentry-dbid-d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d")
  } catch {}
})();
var _ = b('<div class="flex flex-col gap-6"></div>');

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
  }), l(s), c(e, s), p()
}
export {
  x as P
};