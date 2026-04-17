import "./0aBKUdfq.js";
import {
  p as j,
  i as s,
  h as b,
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
} from "./DK4l5t5k.js";
import {
  s as h
} from "./5qstMYc3.js";
import {
  i as D
} from "./PP1qTMI4.js";
import {
  d as G,
  C as H
} from "./D6rJUPqv.js";
import {
  b as J
} from "./Cplxiiwg.js";
import {
  b as K
} from "./3VN4y3LC.js";
import {
  p as u,
  r as M
} from "./MJZQA7cB.js";
import "./BZGVaLJf.js";
import {
  r as O,
  m as P,
  a as Q
} from "./F-dt8hgI.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "e0127cf3e7a9cd170d72434c8831b6836f9b0e1e"
    };
    var e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "5214ca78-fab8-4542-9a30-40a59a316234", t._sentryDebugIdIdentifier = "sentry-dbid-5214ca78-fab8-4542-9a30-40a59a316234")
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
    return e.min !== void 0 && s(m) < e.min ? (b(d, e.min === 1 ? O() : P({
      min: e.min
    }), !0), !1) : e.max !== void 0 && s(m) > e.max ? (b(d, Q({
      max: e.max
    }), !0), !1) : (b(d, ""), !0)
  }
  N(() => {
    var a;
    e.max !== void 0 && s(m) > e.max && i((a = i()) == null ? void 0 : a.substring(0, e.max))
  });
  var c = W(),
    I = n(c);
  {
    var k = a => {
      var r = U(),
        v = n(r, !0);
      f(r), _(() => h(v, e.label)), g(a, r)
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
    o = n(E),
    q = n(o, !0);
  f(o);
  var C = x(o, 2);
  {
    var R = a => {
      var r = V(),
        v = n(r, !0);
      f(r), _(() => h(v, e.max - s(m))), g(a, r)
    };
    D(C, a => {
      e.max !== void 0 && a(R)
    })
  }
  f(E), f(c), _(() => h(q, s(d))), J(l, i), g(t, c), z()
}
export {
  de as L
};