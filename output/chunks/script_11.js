import {
  i as k,
  h as u,
  e as D,
  E as A,
  a2 as N,
  a3 as R,
  a4 as S,
  _ as x,
  a5 as v,
  j as F,
  k as m,
  l as L,
  U as q,
  m as C,
  af as U,
  q as Y,
  o as j
} from "./CgVbUwWD.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5699240c8856da05e48f188a8f5094ebed5a4fea"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      l = new e.Error().stack;
    l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "dd69eb21-7734-4234-9ce7-bf8816382b66", e._sentryDebugIdIdentifier = "sentry-dbid-dd69eb21-7734-4234-9ce7-bf8816382b66")
  })()
} catch {}

function O(e, l, E = !1) {
  u && D();
  var t = e,
    f = null,
    s = null,
    a = q,
    T = E ? A : 0,
    i = !1;
  const I = (d, n = !0) => {
    i = !0, b(n, d)
  };
  var r = null;

  function _() {
    r !== null && (r.lastChild.remove(), t.before(r), r = null);
    var d = a ? f : s,
      n = a ? s : f;
    d && U(d), n && Y(n, () => {
      a ? s = null : f = null
    })
  }
  const b = (d, n) => {
    if (a === (a = d)) return;
    let h = !1;
    if (u) {
      const w = N(t) === R;
      !!a === w && (t = S(), x(t), v(!1), h = !0)
    }
    var y = C(),
      o = t;
    if (y && (r = document.createDocumentFragment(), r.append(o = F())), a ? f ?? (f = n && m(() => n(o))) : s ?? (s = n && m(() => n(o))), y) {
      var c = L,
        p = a ? f : s,
        g = a ? s : f;
      p && c.skipped_effects.delete(p), g && c.skipped_effects.add(g), c.add_callback(_)
    } else _();
    h && v(!0)
  };
  k(() => {
    i = !1, l(I), i || b(null, null)
  }, T), u && (t = j)
}
export {
  O as i
};