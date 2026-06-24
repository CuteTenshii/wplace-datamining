import {
  aJ as g,
  aK as L,
  aL as T,
  i as c,
  g as B,
  h as K,
  aM as M,
  T as N,
  al as Y,
  aN as j,
  B as U,
  A as $,
  aO as q,
  aP as z,
  aH as y,
  ad as C,
  aQ as G,
  V as x,
  aR as A,
  aS as p
} from "./CNUayq5u.js";
let v = !1;

function H(e) {
  var r = v;
  try {
    return v = !1, [e(), v]
  } finally {
    v = r
  }
}

function Z(e, r = 1) {
  const n = e();
  return e(n + r), n
}
const J = {
  get(e, r) {
    if (!e.exclude.has(r)) return e.props[r]
  },
  set(e, r) {
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    if (!e.exclude.has(r) && r in e.props) return {
      enumerable: !0,
      configurable: !0,
      value: e.props[r]
    }
  },
  has(e, r) {
    return e.exclude.has(r) ? !1 : r in e.props
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter(r => !e.exclude.has(r))
  }
};

function F(e, r, n) {
  return new Proxy({
    props: e,
    exclude: r
  }, J)
}
const Q = {
  get(e, r) {
    let n = e.props.length;
    for (; n--;) {
      let t = e.props[n];
      if (p(t) && (t = t()), typeof t == "object" && t !== null && r in t) return t[r]
    }
  },
  set(e, r, n) {
    let t = e.props.length;
    for (; t--;) {
      let i = e.props[t];
      p(i) && (i = i());
      const a = g(i, r);
      if (a && a.set) return a.set(n), !0
    }
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    let n = e.props.length;
    for (; n--;) {
      let t = e.props[n];
      if (p(t) && (t = t()), typeof t == "object" && t !== null && r in t) {
        const i = g(t, r);
        return i && !i.configurable && (i.configurable = !0), i
      }
    }
  },
  has(e, r) {
    if (r === x || r === A) return !1;
    for (let n of e.props)
      if (p(n) && (n = n()), n != null && r in n) return !0;
    return !1
  },
  ownKeys(e) {
    const r = [];
    for (let n of e.props)
      if (p(n) && (n = n()), !!n) {
        for (const t in n) r.includes(t) || r.push(t);
        for (const t of Object.getOwnPropertySymbols(n)) r.includes(t) || r.push(t)
      } return r
  }
};

function W(...e) {
  return new Proxy({
    props: e
  }, Q)
}

function X(e, r, n, t) {
  var I;
  var i = !$ || (n & q) !== 0,
    a = (n & j) !== 0,
    S = (n & G) !== 0,
    u = t,
    h = !0,
    b = void 0,
    O = () => S && i ? (b ?? (b = y(t)), c(b)) : (h && (h = !1, u = S ? U(t) : t), u);
  let o;
  if (a) {
    var E = x in e || A in e;
    o = ((I = g(e, r)) == null ? void 0 : I.set) ?? (E && r in e ? s => e[r] = s : void 0)
  }
  var l, w = !1;
  a ? [l, w] = H(() => e[r]) : l = e[r], l === void 0 && t !== void 0 && (l = O(), o && (i && L(), o(l)));
  var f;
  if (i ? f = () => {
      var s = e[r];
      return s === void 0 ? O() : (h = !0, s)
    } : f = () => {
      var s = e[r];
      return s !== void 0 && (u = void 0), s === void 0 ? u : s
    }, i && (n & T) === 0) return f;
  if (o) {
    var m = e.$$legacy;
    return (function(s, _) {
      return arguments.length > 0 ? ((!i || !_ || m || w) && o(_ ? f() : s), s) : f()
    })
  }
  var P = !1,
    d = ((n & z) !== 0 ? y : C)(() => (P = !1, f()));
  a && c(d);
  var D = N;
  return (function(s, _) {
    if (arguments.length > 0) {
      const R = _ ? c(d) : i && a ? B(s) : s;
      return K(d, R), P = !0, u !== void 0 && (u = R), s
    }
    return M && P || (D.f & Y) !== 0 ? d.v : c(d)
  })
}
export {
  X as p, F as r, W as s, Z as u
};