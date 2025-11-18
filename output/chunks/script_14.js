import {
  aI as y,
  aJ as m,
  aK as x,
  g,
  J as A,
  Y as L,
  m as Y,
  o as N,
  aL as B,
  ao as K,
  aM as M,
  aN as j,
  F as U,
  aw as J,
  aO as $,
  aP as q,
  aQ as z,
  S as I,
  aR as E,
  aS as c
} from "./Dff7lKDG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5e7c9fd5f328559866810f75338456562566478c"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "78009f33-be39-42df-9c33-354169d873ec", e._sentryDebugIdIdentifier = "sentry-dbid-78009f33-be39-42df-9c33-354169d873ec")
  })()
} catch {}
let _ = !1;

function C(e) {
  var r = _;
  try {
    return _ = !1, [e(), _]
  } finally {
    _ = r
  }
}

function Z(e, r = 1) {
  const n = e();
  return e(n + r), n
}
const F = {
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

function H(e, r, n) {
  return new Proxy({
    props: e,
    exclude: r
  }, F)
}
const G = {
  get(e, r) {
    let n = e.props.length;
    for (; n--;) {
      let t = e.props[n];
      if (c(t) && (t = t()), typeof t == "object" && t !== null && r in t) return t[r]
    }
  },
  set(e, r, n) {
    let t = e.props.length;
    for (; t--;) {
      let i = e.props[t];
      c(i) && (i = i());
      const f = y(i, r);
      if (f && f.set) return f.set(n), !0
    }
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    let n = e.props.length;
    for (; n--;) {
      let t = e.props[n];
      if (c(t) && (t = t()), typeof t == "object" && t !== null && r in t) {
        const i = y(t, r);
        return i && !i.configurable && (i.configurable = !0), i
      }
    }
  },
  has(e, r) {
    if (r === I || r === E) return !1;
    for (let n of e.props)
      if (c(n) && (n = n()), n != null && r in n) return !0;
    return !1
  },
  ownKeys(e) {
    const r = [];
    for (let n of e.props)
      if (c(n) && (n = n()), !!n) {
        for (const t in n) r.includes(t) || r.push(t);
        for (const t of Object.getOwnPropertySymbols(n)) r.includes(t) || r.push(t)
      } return r
  }
};

function V(...e) {
  return new Proxy({
    props: e
  }, G)
}

function W(e, r, n, t) {
  var S;
  var i = !J || (n & $) !== 0,
    f = (n & j) !== 0,
    O = (n & z) !== 0,
    u = t,
    v = !0,
    w = () => (v && (v = !1, u = O ? U(t) : t), u),
    o;
  if (f) {
    var R = I in e || E in e;
    o = ((S = y(e, r)) == null ? void 0 : S.set) ?? (R && r in e ? s => e[r] = s : void 0)
  }
  var l, h = !1;
  f ? [l, h] = C(() => e[r]) : l = e[r], l === void 0 && t !== void 0 && (l = w(), o && (i && m(), o(l)));
  var a;
  if (i ? a = () => {
      var s = e[r];
      return s === void 0 ? w() : (v = !0, s)
    } : a = () => {
      var s = e[r];
      return s !== void 0 && (u = void 0), s === void 0 ? u : s
    }, i && (n & x) === 0) return a;
  if (o) {
    var D = e.$$legacy;
    return (function(s, p) {
      return arguments.length > 0 ? ((!i || !p || D || h) && o(p ? a() : s), s) : a()
    })
  }
  var b = !1,
    d = ((n & q) !== 0 ? A : L)(() => (b = !1, a()));
  f && g(d);
  var T = K;
  return (function(s, p) {
    if (arguments.length > 0) {
      const P = p ? g(d) : i && f ? Y(s) : s;
      return N(d, P), b = !0, u !== void 0 && (u = P), s
    }
    return B && b || (T.f & M) !== 0 ? d.v : g(d)
  })
}
export {
  W as p, H as r, V as s, Z as u
};