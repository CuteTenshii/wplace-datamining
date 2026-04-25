import {
  aM as S,
  aN as E,
  aO as m,
  i as g,
  g as T,
  h as L,
  aP as B,
  aD as M,
  aQ as N,
  aR as U,
  A as Y,
  O as j,
  aS as K,
  aT as Z,
  aw as $,
  ag as q,
  aU as z,
  Z as I,
  aV as R,
  aW as c
} from "./C_-299ry.js";
let _ = !1;

function C(e) {
  var r = _;
  try {
    return _ = !1, [e(), _]
  } finally {
    _ = r
  }
}

function W(e, r = 1) {
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

function F(e, r, n) {
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
      const u = S(i, r);
      if (u && u.set) return u.set(n), !0
    }
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    let n = e.props.length;
    for (; n--;) {
      let t = e.props[n];
      if (c(t) && (t = t()), typeof t == "object" && t !== null && r in t) {
        const i = S(t, r);
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

function H(...e) {
  return new Proxy({
    props: e
  }, Q)
}

function J(e, r, n, t) {
  var O;
  var i = !j || (n & K) !== 0,
    u = (n & U) !== 0,
    y = (n & z) !== 0,
    a = t,
    v = !0,
    h = () => (v && (v = !1, a = y ? Y(t) : t), a),
    o;
  if (u) {
    var x = I in e || R in e;
    o = ((O = S(e, r)) == null ? void 0 : O.set) ?? (x && r in e ? s => e[r] = s : void 0)
  }
  var l, b = !1;
  u ? [l, b] = C(() => e[r]) : l = e[r], l === void 0 && t !== void 0 && (l = h(), o && (i && E(), o(l)));
  var f;
  if (i ? f = () => {
      var s = e[r];
      return s === void 0 ? h() : (v = !0, s)
    } : f = () => {
      var s = e[r];
      return s !== void 0 && (a = void 0), s === void 0 ? a : s
    }, i && (n & m) === 0) return f;
  if (o) {
    var A = e.$$legacy;
    return (function(s, p) {
      return arguments.length > 0 ? ((!i || !p || A || b) && o(p ? f() : s), s) : f()
    })
  }
  var P = !1,
    d = ((n & Z) !== 0 ? $ : q)(() => (P = !1, f()));
  u && g(d);
  var D = M;
  return (function(s, p) {
    if (arguments.length > 0) {
      const w = p ? g(d) : i && u ? T(s) : s;
      return L(d, w), P = !0, a !== void 0 && (a = w), s
    }
    return B && P || (D.f & N) !== 0 ? d.v : g(d)
  })
}
export {
  J as p, F as r, H as s, W as u
};