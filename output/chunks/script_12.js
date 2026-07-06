import {
  aK as g,
  aL as L,
  aM as T,
  i as c,
  g as B,
  h as K,
  aN as M,
  V as N,
  an as Y,
  aO as j,
  D as U,
  C,
  aP as $,
  aQ as q,
  aJ as y,
  af as z,
  aR as G,
  X as x,
  aS as D,
  aT as d
} from "./Dkgr_Dbt.js";
let v = !1;

function J(e) {
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
const Q = {
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
  }, Q)
}
const V = {
  get(e, r) {
    let n = e.props.length;
    for (; n--;) {
      let t = e.props[n];
      if (d(t) && (t = t()), typeof t == "object" && t !== null && r in t) return t[r]
    }
  },
  set(e, r, n) {
    let t = e.props.length;
    for (; t--;) {
      let i = e.props[t];
      d(i) && (i = i());
      const a = g(i, r);
      if (a && a.set) return a.set(n), !0
    }
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    let n = e.props.length;
    for (; n--;) {
      let t = e.props[n];
      if (d(t) && (t = t()), typeof t == "object" && t !== null && r in t) {
        const i = g(t, r);
        return i && !i.configurable && (i.configurable = !0), i
      }
    }
  },
  has(e, r) {
    if (r === x || r === D) return !1;
    for (let n of e.props)
      if (d(n) && (n = n()), n != null && r in n) return !0;
    return !1
  },
  ownKeys(e) {
    const r = [];
    for (let n of e.props)
      if (d(n) && (n = n()), !!n) {
        for (const t in n) r.includes(t) || r.push(t);
        for (const t of Object.getOwnPropertySymbols(n)) r.includes(t) || r.push(t)
      } return r
  }
};

function H(...e) {
  return new Proxy({
    props: e
  }, V)
}

function W(e, r, n, t) {
  var I;
  var i = !C || (n & $) !== 0,
    a = (n & j) !== 0,
    S = (n & G) !== 0,
    u = t,
    h = !0,
    b = void 0,
    O = () => S && i ? (b ?? (b = y(t)), c(b)) : (h && (h = !1, u = S ? U(t) : t), u);
  let o;
  if (a) {
    var E = x in e || D in e;
    o = ((I = g(e, r)) == null ? void 0 : I.set) ?? (E && r in e ? s => e[r] = s : void 0)
  }
  var l, w = !1;
  a ? [l, w] = J(() => e[r]) : l = e[r], l === void 0 && t !== void 0 && (l = O(), o && (i && L(), o(l)));
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
    p = ((n & q) !== 0 ? y : z)(() => (P = !1, f()));
  a && c(p);
  var A = N;
  return (function(s, _) {
    if (arguments.length > 0) {
      const R = _ ? c(p) : i && a ? B(s) : s;
      return K(p, R), P = !0, u !== void 0 && (u = R), s
    }
    return M && P || (A.f & Y) !== 0 ? p.v : c(p)
  })
}
export {
  W as p, F as r, H as s, Z as u
};