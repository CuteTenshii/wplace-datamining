import {
  ax as U,
  aL as B,
  n as x,
  ak as M,
  aM as Y,
  aN as j,
  i as p,
  h as A,
  aO as P,
  aP as K,
  aQ as $,
  g as V,
  aR as X,
  V as q,
  an as z,
  aS as C,
  B as G,
  A as J,
  aT as Q,
  aU as W,
  aJ as E,
  af as Z,
  aV as F,
  X as D,
  aW as T,
  aX as d
} from "./B20EPEO9.js";
let v = !1,
  S = Symbol("unmounted");

function ne(e, r, t) {
  const n = t[r] ?? (t[r] = {
    store: null,
    source: M(void 0),
    unsubscribe: x
  });
  if (n.store !== e && !(S in t))
    if (n.unsubscribe(), n.store = e ?? null, e == null) n.source.v = void 0, n.unsubscribe = x;
    else {
      var u = !0;
      n.unsubscribe = Y(e, s => {
        u ? n.source.v = s : A(n.source, s)
      }), u = !1
    } return e && S in t ? j(e) : p(n.source)
}

function te() {
  const e = {};

  function r() {
    U(() => {
      for (var t in e) e[t].unsubscribe();
      B(e, S, {
        enumerable: !1,
        value: !0
      })
    })
  }
  return [e, r]
}

function H(e) {
  var r = v;
  try {
    return v = !1, [e(), v]
  } finally {
    v = r
  }
}

function ue(e, r = 1) {
  const t = e();
  return e(t + r), t
}
const k = {
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

function ie(e, r, t) {
  return new Proxy({
    props: e,
    exclude: r
  }, k)
}
const ee = {
  get(e, r) {
    let t = e.props.length;
    for (; t--;) {
      let n = e.props[t];
      if (d(n) && (n = n()), typeof n == "object" && n !== null && r in n) return n[r]
    }
  },
  set(e, r, t) {
    let n = e.props.length;
    for (; n--;) {
      let u = e.props[n];
      d(u) && (u = u());
      const s = P(u, r);
      if (s && s.set) return s.set(t), !0
    }
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    let t = e.props.length;
    for (; t--;) {
      let n = e.props[t];
      if (d(n) && (n = n()), typeof n == "object" && n !== null && r in n) {
        const u = P(n, r);
        return u && !u.configurable && (u.configurable = !0), u
      }
    }
  },
  has(e, r) {
    if (r === D || r === T) return !1;
    for (let t of e.props)
      if (d(t) && (t = t()), t != null && r in t) return !0;
    return !1
  },
  ownKeys(e) {
    const r = [];
    for (let t of e.props)
      if (d(t) && (t = t()), !!t) {
        for (const n in t) r.includes(n) || r.push(n);
        for (const n of Object.getOwnPropertySymbols(t)) r.includes(n) || r.push(n)
      } return r
  }
};

function se(...e) {
  return new Proxy({
    props: e
  }, ee)
}

function ae(e, r, t, n) {
  var I;
  var u = !J || (t & Q) !== 0,
    s = (t & C) !== 0,
    h = (t & F) !== 0,
    a = n,
    b = !0,
    O = void 0,
    w = () => h && u ? (O ?? (O = E(n)), p(O)) : (b && (b = !1, a = h ? G(n) : n), a);
  let l;
  if (s) {
    var m = D in e || T in e;
    l = ((I = P(e, r)) == null ? void 0 : I.set) ?? (m && r in e ? i => e[r] = i : void 0)
  }
  var o, y = !1;
  s ? [o, y] = H(() => e[r]) : o = e[r], o === void 0 && n !== void 0 && (o = w(), l && (u && K(), l(o)));
  var f;
  if (u ? f = () => {
      var i = e[r];
      return i === void 0 ? w() : (b = !0, i)
    } : f = () => {
      var i = e[r];
      return i !== void 0 && (a = void 0), i === void 0 ? a : i
    }, u && (t & $) === 0) return f;
  if (l) {
    var L = e.$$legacy;
    return (function(i, _) {
      return arguments.length > 0 ? ((!u || !_ || L || y) && l(_ ? f() : i), i) : f()
    })
  }
  var g = !1,
    c = ((t & W) !== 0 ? E : Z)(() => (g = !1, f()));
  s && p(c);
  var N = q;
  return (function(i, _) {
    if (arguments.length > 0) {
      const R = _ ? p(c) : u && s ? V(i) : i;
      return A(c, R), g = !0, a !== void 0 && (a = R), i
    }
    return X && g || (N.f & z) !== 0 ? c.v : p(c)
  })
}
export {
  te as a, ne as b, ae as p, ie as r, se as s, ue as u
};