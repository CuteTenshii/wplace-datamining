import "./DjfBUik4.js";
import "./2ZDEX8JK.js";
import {
  p as n,
  a as p,
  b as l,
  c,
  r as b,
  i as r,
  A as m
} from "./DjeFwfzX.js";
import {
  e as u
} from "./P8sdbvxX.js";
import {
  i as g
} from "./wgxePXVR.js";
import {
  p as h,
  V as v,
  P as y
} from "./D9M5ALKO.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "209576268ed2d55d78b1f313fb4db5f4a92290b5"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "846e8cfa-3714-4e65-871c-6d17b7ed2975", e._sentryDebugIdIdentifier = "sentry-dbid-846e8cfa-3714-4e65-871c-6d17b7ed2975")
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