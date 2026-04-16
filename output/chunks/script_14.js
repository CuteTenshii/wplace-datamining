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
  O as j,
  aR as K,
  aS as C,
  av as Z,
  A as $,
  aT as q,
  Z as I,
  aU as O,
  aV as c
} from "./CaCjFaGC.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cfa0387f7130e8b16c3d20b0694a74c32ca6dc49"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "123c3700-9e2b-49c0-8e5a-43e372520b0b", e._sentryDebugIdIdentifier = "sentry-dbid-123c3700-9e2b-49c0-8e5a-43e372520b0b")
  } catch {}
})();
let _ = !1;

function z(e) {
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
const G = {
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
  }, G)
}
const Q = {
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
    if (r === I || r === O) return !1;
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
  }, Q)
}

function W(e, r, n, t) {
  var h;
  var i = !j || (n & K) !== 0,
    a = (n & M) !== 0,
    E = (n & q) !== 0,
    u = t,
    v = !0,
    P = () => (v && (v = !1, u = E ? U(t) : t), u),
    o;
  if (a) {
    var R = I in e || O in e;
    o = ((h = y(e, r)) == null ? void 0 : h.set) ?? (R && r in e ? s => e[r] = s : void 0)
  }
  var l, S = !1;
  a ? [l, S] = z(() => e[r]) : l = e[r], l === void 0 && t !== void 0 && (l = P(), o && (i && x(), o(l)));
  var f;
  if (i ? f = () => {
      var s = e[r];
      return s === void 0 ? P() : (v = !0, s)
    } : f = () => {
      var s = e[r];
      return s !== void 0 && (u = void 0), s === void 0 ? u : s
    }, i && (n & A) === 0) return f;
  if (o) {
    var D = e.$$legacy;
    return (function(s, p) {
      return arguments.length > 0 ? ((!i || !p || D || S) && o(p ? f() : s), s) : f()
    })
  }
  var b = !1,
    d = ((n & C) !== 0 ? Z : $)(() => (b = !1, f()));
  a && g(d);
  var T = Y;
  return (function(s, p) {
    if (arguments.length > 0) {
      const w = p ? g(d) : i && a ? L(s) : s;
      return m(d, w), b = !0, u !== void 0 && (u = w), s
    }
    return N && b || (T.f & B) !== 0 ? d.v : g(d)
  })
}
export {
  W as p, H as r, J as s, F as u
};