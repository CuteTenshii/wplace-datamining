import {
  aL as g,
  aM as A,
  aN as D,
  i as S,
  g as L,
  h as T,
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
  aU as R,
  aV as c
} from "./C21-Odj5.js";
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

function J(...e) {
  return new Proxy({
    props: e
  }, V)
}

function W(e, r, n, t) {
  var O;
  var i = !j || (n & K) !== 0,
    u = (n & M) !== 0,
    x = (n & z) !== 0,
    a = t,
    v = !0,
    h = () => (v && (v = !1, a = x ? U(t) : t), a),
    o;
  if (u) {
    var y = I in e || R in e;
    o = ((O = g(e, r)) == null ? void 0 : O.set) ?? (y && r in e ? s => e[r] = s : void 0)
  }
  var l, b = !1;
  u ? [l, b] = G(() => e[r]) : l = e[r], l === void 0 && t !== void 0 && (l = h(), o && (i && A(), o(l)));
  var f;
  if (i ? f = () => {
      var s = e[r];
      return s === void 0 ? h() : (v = !0, s)
    } : f = () => {
      var s = e[r];
      return s !== void 0 && (a = void 0), s === void 0 ? a : s
    }, i && (n & D) === 0) return f;
  if (o) {
    var E = e.$$legacy;
    return (function(s, p) {
      return arguments.length > 0 ? ((!i || !p || E || b) && o(p ? f() : s), s) : f()
    })
  }
  var P = !1,
    d = ((n & C) !== 0 ? $ : q)(() => (P = !1, f()));
  u && S(d);
  var m = Y;
  return (function(s, p) {
    if (arguments.length > 0) {
      const w = p ? S(d) : i && u ? L(s) : s;
      return T(d, w), P = !0, a !== void 0 && (a = w), s
    }
    return N && P || (m.f & B) !== 0 ? d.v : S(d)
  })
}
export {
  W as p, H as r, J as s, F as u
};