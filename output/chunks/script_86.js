import "./C7uUiZnA.js";
import "./YjzQDSAK.js";
import {
  p as n,
  a as p,
  b as l,
  c,
  r as m,
  i as r,
  A as u
} from "./B8NcJmf7.js";
import {
  e as b
} from "./CKb39HVu.js";
import {
  i as g
} from "./3hv2Zjq_.js";
import {
  p as h,
  V as v,
  P as y
} from "./rM-SHNqe.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
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
  b(s, 7, () => o, t => t.version, (t, i, d) => {
    {
      let f = u(() => r(d) === 0);
      y(t, {
        get patchNote() {
          return r(i)
        },
        get latest() {
          return r(f)
        }
      })
    }
  }), m(s), p(e, s), l()
}
export {
  x as P
};