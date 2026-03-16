import "./iF_u2ama.js";
import "./DsFLWjyo.js";
import {
  p as n,
  a as c,
  b as p,
  c as l,
  r as b,
  i as r,
  K as m
} from "./G_TaGb8Z.js";
import {
  e as u
} from "./DtbQlhBQ.js";
import {
  i as g
} from "./BpTBJwyu.js";
import {
  p as h,
  V as v,
  P as y
} from "./CsdZ_txh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a1c3c518b70a92c25ec2b85baf48e9981ce90ce8"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2092d20e-7ef0-40a4-af0e-5070b3c82862", e._sentryDebugIdIdentifier = "sentry-dbid-2092d20e-7ef0-40a4-af0e-5070b3c82862")
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
  }), b(s), c(e, s), p()
}
export {
  x as P
};