import {
  i as L,
  h as I,
  e as N,
  E as Y,
  a2 as U,
  a3 as j,
  a4 as B,
  _ as K,
  a5 as D,
  j as q,
  k as A,
  l as C,
  U as F,
  m as M,
  af as Z,
  q as $,
  o as z,
  aX as T,
  aY as G,
  aZ as H,
  g as m,
  P as X,
  a1 as J,
  x as Q,
  z as V,
  a_ as W,
  ao as k,
  a$ as ee,
  b0 as re,
  L as ne,
  aP as te,
  b1 as ae,
  b2 as se,
  b3 as ie,
  Y as O,
  b4 as x,
  aK as y
} from "./DlUXbix6.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a284527cbd407023d7d6ce22d7062bdeed40257e"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "8814bb4f-d948-4bfe-86b2-64927363bfb3", e._sentryDebugIdIdentifier = "sentry-dbid-8814bb4f-d948-4bfe-86b2-64927363bfb3")
  })()
} catch {}

function de(e, r, t = !1) {
  I && N();
  var n = e,
    a = null,
    f = null,
    l = F,
    c = t ? Y : 0,
    p = !1;
  const w = (o, i = !0) => {
    p = !0, _(i, o)
  };
  var u = null;

  function P() {
    u !== null && (u.lastChild.remove(), n.before(u), u = null);
    var o = l ? a : f,
      i = l ? f : a;
    o && Z(o), i && $(i, () => {
      l ? f = null : a = null
    })
  }
  const _ = (o, i) => {
    if (l === (l = o)) return;
    let S = !1;
    if (I) {
      const v = U(n) === j;
      !!l === v && (n = B(), K(n), D(!1), S = !0)
    }
    var b = M(),
      d = n;
    if (b && (u = document.createDocumentFragment(), u.append(d = q())), l ? a ?? (a = i && A(() => i(d))) : f ?? (f = i && A(() => i(d))), b) {
      var h = C,
        g = l ? a : f,
        s = l ? f : a;
      g && h.skipped_effects.delete(g), s && h.skipped_effects.add(s), h.add_callback(P)
    } else P();
    S && D(!0)
  };
  L(() => {
    p = !1, r(w), p || _(null, null)
  }, c), I && (n = z)
}
let E = !1;

function fe(e) {
  var r = E;
  try {
    return E = !1, [e(), E]
  } finally {
    E = r
  }
}

function ce(e, r = 1) {
  const t = e();
  return e(t + r), t
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

function _e(e, r, t) {
  return new Proxy({
    props: e,
    exclude: r
  }, ue)
}
const le = {
  get(e, r) {
    let t = e.props.length;
    for (; t--;) {
      let n = e.props[t];
      if (y(n) && (n = n()), typeof n == "object" && n !== null && r in n) return n[r]
    }
  },
  set(e, r, t) {
    let n = e.props.length;
    for (; n--;) {
      let a = e.props[n];
      y(a) && (a = a());
      const f = T(a, r);
      if (f && f.set) return f.set(t), !0
    }
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    let t = e.props.length;
    for (; t--;) {
      let n = e.props[t];
      if (y(n) && (n = n()), typeof n == "object" && n !== null && r in n) {
        const a = T(n, r);
        return a && !a.configurable && (a.configurable = !0), a
      }
    }
  },
  has(e, r) {
    if (r === O || r === x) return !1;
    for (let t of e.props)
      if (y(t) && (t = t()), t != null && r in t) return !0;
    return !1
  },
  ownKeys(e) {
    const r = [];
    for (let t of e.props)
      if (y(t) && (t = t()), !!t) {
        for (const n in t) r.includes(n) || r.push(n);
        for (const n of Object.getOwnPropertySymbols(t)) r.includes(n) || r.push(n)
      } return r
  }
};

function pe(...e) {
  return new Proxy({
    props: e
  }, le)
}

function be(e, r, t, n) {
  var g;
  var a = !te || (t & ae) !== 0,
    f = (t & re) !== 0,
    l = (t & ie) !== 0,
    c = n,
    p = !0,
    w = () => (p && (p = !1, c = l ? ne(n) : n), c),
    u;
  if (f) {
    var P = O in e || x in e;
    u = ((g = T(e, r)) == null ? void 0 : g.set) ?? (P && r in e ? s => e[r] = s : void 0)
  }
  var _, o = !1;
  f ? [_, o] = fe(() => e[r]) : _ = e[r], _ === void 0 && n !== void 0 && (_ = w(), u && (a && G(), u(_)));
  var i;
  if (a ? i = () => {
      var s = e[r];
      return s === void 0 ? w() : (p = !0, s)
    } : i = () => {
      var s = e[r];
      return s !== void 0 && (c = void 0), s === void 0 ? c : s
    }, a && (t & H) === 0) return i;
  if (u) {
    var S = e.$$legacy;
    return (function(s, v) {
      return arguments.length > 0 ? ((!a || !v || S || o) && u(v ? i() : s), s) : i()
    })
  }
  var b = !1,
    d = ((t & se) !== 0 ? X : J)(() => (b = !1, i()));
  f && m(d);
  var h = k;
  return (function(s, v) {
    if (arguments.length > 0) {
      const R = v ? m(d) : a && f ? Q(s) : s;
      return V(d, R), b = !0, c !== void 0 && (c = R), s
    }
    return W && b || (h.f & ee) !== 0 ? d.v : m(d)
  })
}
export {
  de as i, be as p, _e as r, pe as s, ce as u
};