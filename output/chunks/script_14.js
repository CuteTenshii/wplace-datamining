import {
  aL as y,
  aM as x,
  aN as A,
  i as g,
  g as L,
  h as m,
  aO as N,
  aC as Y,
  aP as B,
  aQ as M,
  x as U,
  N as j,
  aR as K,
  aS as C,
  av as $,
  af as q,
  aT as z,
  Y as I,
  aU as E,
  aV as c
} from "./Dcbzw1se.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "acad8f85-c6ab-45c2-a4c7-94854619564f", e._sentryDebugIdIdentifier = "sentry-dbid-acad8f85-c6ab-45c2-a4c7-94854619564f")
  } catch {}
})();
let _ = !1;

function G(e) {
  var r = _;
  try {
    return _ = !1, [e(), _]
  } finally {
    _ = r
  }
}

function F(e, r = 1) {
  const n = e();
  return e(n + r), n
}
const Q = {
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
  }, Q)
}
const V = {
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
      const a = y(i, r);
      if (a && a.set) return a.set(n), !0
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

function J(...e) {
  return new Proxy({
    props: e
  }, V)
}

function W(e, r, n, t) {
  var h;
  var i = !j || (n & K) !== 0,
    a = (n & M) !== 0,
    O = (n & z) !== 0,
    f = t,
    b = !0,
    P = () => (b && (b = !1, f = O ? U(t) : t), f),
    o;
  if (a) {
    var R = I in e || E in e;
    o = ((h = y(e, r)) == null ? void 0 : h.set) ?? (R && r in e ? s => e[r] = s : void 0)
  }
  var l, S = !1;
  a ? [l, S] = G(() => e[r]) : l = e[r], l === void 0 && t !== void 0 && (l = P(), o && (i && x(), o(l)));
  var u;
  if (i ? u = () => {
      var s = e[r];
      return s === void 0 ? P() : (b = !0, s)
    } : u = () => {
      var s = e[r];
      return s !== void 0 && (f = void 0), s === void 0 ? f : s
    }, i && (n & A) === 0) return u;
  if (o) {
    var D = e.$$legacy;
    return (function(s, p) {
      return arguments.length > 0 ? ((!i || !p || D || S) && o(p ? u() : s), s) : u()
    })
  }
  var v = !1,
    d = ((n & C) !== 0 ? $ : q)(() => (v = !1, u()));
  a && g(d);
  var T = Y;
  return (function(s, p) {
    if (arguments.length > 0) {
      const w = p ? g(d) : i && a ? L(s) : s;
      return m(d, w), v = !0, f !== void 0 && (f = w), s
    }
    return N && v || (T.f & B) !== 0 ? d.v : g(d)
  })
}
export {
  W as p, H as r, J as s, F as u
};