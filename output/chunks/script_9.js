import {
  i as L,
  h as P,
  e as N,
  E as U,
  R as Y,
  T as j,
  U as B,
  O as M,
  V as D,
  j as q,
  k as O,
  l as C,
  aL as F,
  m as K,
  a4 as z,
  q as Q,
  o as V,
  aM as m,
  aN as Z,
  aO as $,
  g as T,
  D as G,
  Q as H,
  au as W,
  aw as J,
  aP as X,
  ad as k,
  aQ as ee,
  aR as re,
  z as ne,
  aD as ae,
  aS as te,
  aT as se,
  aU as ie,
  S as A,
  aV as x,
  aW as y
} from "./CU1IDgoR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "db50de114564c1615b532cc812ac881318d7283e"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "303b2b1a-9a52-428b-a449-4b72e7a8e728", e._sentryDebugIdIdentifier = "sentry-dbid-303b2b1a-9a52-428b-a449-4b72e7a8e728")
  })()
} catch {}

function de(e, r, a = !1) {
  P && N();
  var n = e,
    t = null,
    f = null,
    l = F,
    c = a ? U : 0,
    p = !1;
  const S = (o, i = !0) => {
    p = !0, _(i, o)
  };
  var u = null;

  function w() {
    u !== null && (u.lastChild.remove(), n.before(u), u = null);
    var o = l ? t : f,
      i = l ? f : t;
    o && z(o), i && Q(i, () => {
      l ? f = null : t = null
    })
  }
  const _ = (o, i) => {
    if (l === (l = o)) return;
    let E = !1;
    if (P) {
      const b = Y(n) === j;
      !!l === b && (n = B(), M(n), D(!1), E = !0)
    }
    var v = K(),
      d = n;
    if (v && (u = document.createDocumentFragment(), u.append(d = q())), l ? t ?? (t = i && O(() => i(d))) : f ?? (f = i && O(() => i(d))), v) {
      var h = C,
        g = l ? t : f,
        s = l ? f : t;
      g && h.skipped_effects.delete(g), s && h.skipped_effects.add(s), h.add_callback(w)
    } else w();
    E && D(!0)
  };
  L(() => {
    p = !1, r(S), p || _(null, null)
  }, c), P && (n = V)
}
let I = !1;

function fe(e) {
  var r = I;
  try {
    return I = !1, [e(), I]
  } finally {
    I = r
  }
}

function ce(e, r = 1) {
  const a = e();
  return e(a + r), a
}
const ue = {
  get(e, r) {
    if (!e.exclude.includes(r)) return e.props[r]
  },
  set(e, r) {
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    if (!e.exclude.includes(r) && r in e.props) return {
      enumerable: !0,
      configurable: !0,
      value: e.props[r]
    }
  },
  has(e, r) {
    return e.exclude.includes(r) ? !1 : r in e.props
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter(r => !e.exclude.includes(r))
  }
};

function _e(e, r, a) {
  return new Proxy({
    props: e,
    exclude: r
  }, ue)
}
const le = {
  get(e, r) {
    let a = e.props.length;
    for (; a--;) {
      let n = e.props[a];
      if (y(n) && (n = n()), typeof n == "object" && n !== null && r in n) return n[r]
    }
  },
  set(e, r, a) {
    let n = e.props.length;
    for (; n--;) {
      let t = e.props[n];
      y(t) && (t = t());
      const f = m(t, r);
      if (f && f.set) return f.set(a), !0
    }
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    let a = e.props.length;
    for (; a--;) {
      let n = e.props[a];
      if (y(n) && (n = n()), typeof n == "object" && n !== null && r in n) {
        const t = m(n, r);
        return t && !t.configurable && (t.configurable = !0), t
      }
    }
  },
  has(e, r) {
    if (r === A || r === x) return !1;
    for (let a of e.props)
      if (y(a) && (a = a()), a != null && r in a) return !0;
    return !1
  },
  ownKeys(e) {
    const r = [];
    for (let a of e.props)
      if (y(a) && (a = a()), !!a) {
        for (const n in a) r.includes(n) || r.push(n);
        for (const n of Object.getOwnPropertySymbols(a)) r.includes(n) || r.push(n)
      } return r
  }
};

function pe(...e) {
  return new Proxy({
    props: e
  }, le)
}

function ve(e, r, a, n) {
  var g;
  var t = !ae || (a & te) !== 0,
    f = (a & re) !== 0,
    l = (a & ie) !== 0,
    c = n,
    p = !0,
    S = () => (p && (p = !1, c = l ? ne(n) : n), c),
    u;
  if (f) {
    var w = A in e || x in e;
    u = ((g = m(e, r)) == null ? void 0 : g.set) ?? (w && r in e ? s => e[r] = s : void 0)
  }
  var _, o = !1;
  f ? [_, o] = fe(() => e[r]) : _ = e[r], _ === void 0 && n !== void 0 && (_ = S(), u && (t && Z(), u(_)));
  var i;
  if (t ? i = () => {
      var s = e[r];
      return s === void 0 ? S() : (p = !0, s)
    } : i = () => {
      var s = e[r];
      return s !== void 0 && (c = void 0), s === void 0 ? c : s
    }, t && (a & $) === 0) return i;
  if (u) {
    var E = e.$$legacy;
    return (function(s, b) {
      return arguments.length > 0 ? ((!t || !b || E || o) && u(b ? i() : s), s) : i()
    })
  }
  var v = !1,
    d = ((a & se) !== 0 ? G : H)(() => (v = !1, i()));
  f && T(d);
  var h = k;
  return (function(s, b) {
    if (arguments.length > 0) {
      const R = b ? T(d) : t && f ? W(s) : s;
      return J(d, R), v = !0, c !== void 0 && (c = R), s
    }
    return X && v || (h.f & ee) !== 0 ? d.v : T(d)
  })
}
export {
  de as i, ve as p, _e as r, pe as s, ce as u
};