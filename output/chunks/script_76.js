import "./zYeLZfCd.js";
import "./6nYWMrIj.js";
import {
  p as f,
  a as b,
  b as c,
  c as p,
  r as l,
  i as r,
  K as m
} from "./06720L-J.js";
import {
  e as u
} from "./ZQAPyTVG.js";
import {
  i as g
} from "./BpE8ASbD.js";
import {
  p as h,
  V as v,
  P as y
} from "./Dyv4YGMy.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1bbcc3358655daa550788b301977152f07a3b6b2"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d", e._sentryDebugIdIdentifier = "sentry-dbid-d7cf74b9-ecdb-4a29-b58d-3b8e4de02c2d")
  } catch {}
})();
var _ = p('<div class="flex flex-col gap-6"></div>');

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
  }), l(s), b(e, s), c()
}
export {
  x as P
};