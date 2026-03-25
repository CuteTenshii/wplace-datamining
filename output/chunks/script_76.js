import "./B7t8Ns_D.js";
import "./CMGfvYhR.js";
import {
  p as n,
  a as c,
  b as p,
  c as l,
  r as b,
  i as r,
  K as m
} from "./cgON64Hl.js";
import {
  e as u
} from "./Dwyyx3yt.js";
import {
  i as g
} from "./kBtfF7B4.js";
import {
  p as h,
  V as v,
  P as y
} from "./D95wp6bj.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e30448959e42fd3ea2fc5cd1f2671639056880b6"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d", e._sentryDebugIdIdentifier = "sentry-dbid-d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d")
  } catch {}
})();
var _ = l('<div class="flex flex-col gap-6"></div>');

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
  }), b(s), c(e, s), p()
}
export {
  x as P
};