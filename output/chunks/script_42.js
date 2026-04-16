import "./CZEV_Nk5.js";
import {
  p as j,
  i as s,
  h as v,
  q as N,
  d as n,
  s as x,
  y as Y,
  r as f,
  t as _,
  a as g,
  b as z,
  e as B,
  u as F,
  c as y
} from "./aONqeBJ4.js";
import {
  s as h
} from "./8rFs_PRB.js";
import {
  i as D
} from "./JvdSK6CF.js";
import {
  d as G,
  C as H
} from "./C1PbnoAX.js";
import {
  b as J
} from "./BPAqOGYr.js";
import {
  b as K
} from "./CyRJSxvZ.js";
import {
  p as u,
  r as M
} from "./DDg30zps.js";
import "./BHEqZqXQ.js";
import {
  r as O,
  m as P,
  a as Q
} from "./DGWlhTNW.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "c82b8b5d8deacdc21b4154b9417a43b8fc75f478"
    };
    var e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "01ed3a4a-af68-4429-9867-2a15020a984e", t._sentryDebugIdIdentifier = "sentry-dbid-01ed3a4a-af68-4429-9867-2a15020a984e")
  } catch {}
})();
var U = y('<legend class="fieldset-legend"> </legend>'),
  V = y('<span class="text-base-content/80"> </span>'),
  W = y('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function de(t, e) {
  j(e, !0);
  let i = u(e, "value", 15),
    L = u(e, "validate", 15),
    S = u(e, "disabled", 3, !1),
    w = u(e, "ref", 15),
    T = M(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled", "ref"]),
    d = B("");
  const m = F(() => {
    var a;
    return ((a = i()) == null ? void 0 : a.length) ?? 0
  });
  L(A);

  function A() {
    return e.min !== void 0 && s(m) < e.min ? (v(d, e.min === 1 ? O() : P({
      min: e.min
    }), !0), !1) : e.max !== void 0 && s(m) > e.max ? (v(d, Q({
      max: e.max
    }), !0), !1) : (v(d, ""), !0)
  }
  N(() => {
    var a;
    e.max !== void 0 && s(m) > e.max && i((a = i()) == null ? void 0 : a.substring(0, e.max))
  });
  var o = W(),
    I = n(o);
  {
    var k = a => {
      var r = U(),
        b = n(r, !0);
      f(r), _(() => h(b, e.label)), g(a, r)
    };
    D(I, a => {
      e.label && a(k)
    })
  }
  var l = x(I, 2);
  Y(l), G(l, () => ({
    ...T,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    disabled: S(),
    [H]: {
      "textarea-error": !!s(d)
    }
  })), K(l, a => w(a), () => w());
  var E = x(l, 2),
    c = n(E),
    q = n(c, !0);
  f(c);
  var C = x(c, 2);
  {
    var R = a => {
      var r = V(),
        b = n(r, !0);
      f(r), _(() => h(b, e.max - s(m))), g(a, r)
    };
    D(C, a => {
      e.max !== void 0 && a(R)
    })
  }
  f(E), f(o), _(() => h(q, s(d))), J(l, i), g(t, o), z()
}
export {
  de as L
};