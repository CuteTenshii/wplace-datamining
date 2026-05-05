import {
  aO as g,
  aP as m,
  aQ as D,
  i as S,
  g as L,
  h as T,
  aR as Y,
  aA as B,
  aS as U,
  aT as j,
  x as K,
  L as M,
  aU as N,
  aV as W,
  at as $,
  ad as q,
  aW as z,
  W as I,
  aX as R,
  aY as c
} from "./wFsvFKKp.js";
let _ = !1;

function C(e) {
  var r = _;
  try {
    return _ = !1, [e(), _]
  } finally {
    _ = r
  }
}

function X(e, r = 1) {
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

function Z(e, r, n) {
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
      const u = g(i, r);
      if (u && u.set) return u.set(n), !0
    }
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    let n = e.props.length;
    for (; n--;) {
      let t = e.props[n];
      if (c(t) && (t = t()), typeof t == "object" && t !== null && r in t) {
        const i = g(t, r);
        return i && !i.configurable && (i.configurable = !0), i
      }
    }
  },
  has(e, r) {
    if (r === I || r === R) return !1;
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

function F(...e) {
  return new Proxy({
    props: e
  }, Q)
}

function H(e, r, n, t) {
  var O;
  var i = !M || (n & N) !== 0,
    u = (n & j) !== 0,
    x = (n & z) !== 0,
    a = t,
    v = !0,
    h = () => (v && (v = !1, a = x ? K(t) : t), a),
    o;
  if (u) {
    var y = I in e || R in e;
    o = ((O = g(e, r)) == null ? void 0 : O.set) ?? (y && r in e ? s => e[r] = s : void 0)
  }
  var l, b = !1;
  u ? [l, b] = C(() => e[r]) : l = e[r], l === void 0 && t !== void 0 && (l = h(), o && (i && m(), o(l)));
  var f;
  if (i ? f = () => {
      var s = e[r];
      return s === void 0 ? h() : (v = !0, s)
    } : f = () => {
      var s = e[r];
      return s !== void 0 && (a = void 0), s === void 0 ? a : s
    }, i && (n & D) === 0) return f;
  if (o) {
    var A = e.$$legacy;
    return (function(s, p) {
      return arguments.length > 0 ? ((!i || !p || A || b) && o(p ? f() : s), s) : f()
    })
  }
  var P = !1,
    d = ((n & W) !== 0 ? $ : q)(() => (P = !1, f()));
  u && S(d);
  var E = B;
  return (function(s, p) {
    if (arguments.length > 0) {
      const w = p ? S(d) : i && u ? L(s) : s;
      return T(d, w), P = !0, a !== void 0 && (a = w), s
    }
    return Y && P || (E.f & U) !== 0 ? d.v : S(d)
  })
}
export {
  H as p, Z as r, F as s, X as u
};