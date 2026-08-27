import {
  aA as Y,
  aP as M,
  z as R,
  an as N,
  aQ as B,
  aR as $,
  i as p,
  h as x,
  aS as P,
  aT as j,
  aU as K,
  g as q,
  aV as z,
  Y as Z,
  aq as C,
  aW as G,
  E as Q,
  D as V,
  aX as W,
  aY as X,
  aM as D,
  ai as F,
  aZ as H,
  _ as A,
  a_ as T,
  a$ as d
} from "./D5GL_E7i.js";
let v = !1,
  S = Symbol("unmounted");

function ne(e, r, t) {
  const n = t[r] ?? (t[r] = {
    store: null,
    source: N(void 0),
    unsubscribe: R
  });
  if (n.store !== e && !(S in t))
    if (n.unsubscribe(), n.store = e ?? null, e == null) n.source.v = void 0, n.unsubscribe = R;
    else {
      var i = !0;
      n.unsubscribe = B(e, s => {
        i ? n.source.v = s : x(n.source, s)
      }), i = !1
    } return e && S in t ? $(e) : p(n.source)
}

function te() {
  const e = {};

  function r() {
    Y(() => {
      for (var t in e) e[t].unsubscribe();
      M(e, S, {
        enumerable: !1,
        value: !0
      })
    })
  }
  return [e, r]
}

function J(e) {
  var r = v;
  try {
    return v = !1, [e(), v]
  } finally {
    v = r
  }
}

function ie(e, r = 1) {
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

function ue(e, r, t) {
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
      let i = e.props[n];
      d(i) && (i = i());
      const s = P(i, r);
      if (s && s.set) return s.set(t), !0
    }
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    let t = e.props.length;
    for (; t--;) {
      let n = e.props[t];
      if (d(n) && (n = n()), typeof n == "object" && n !== null && r in n) {
        const i = P(n, r);
        return i && !i.configurable && (i.configurable = !0), i
      }
    }
  },
  has(e, r) {
    if (r === A || r === T) return !1;
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
  var i = !V || (t & W) !== 0,
    s = (t & G) !== 0,
    h = (t & H) !== 0,
    a = n,
    b = !0,
    w = void 0,
    O = () => h && i ? (w ?? (w = D(n)), p(w)) : (b && (b = !1, a = h ? Q(n) : n), a);
  let l;
  if (s) {
    var m = A in e || T in e;
    l = ((I = P(e, r)) == null ? void 0 : I.set) ?? (m && r in e ? u => e[r] = u : void 0)
  }
  var o, y = !1;
  s ? [o, y] = J(() => e[r]) : o = e[r], o === void 0 && n !== void 0 && (o = O(), l && (i && j(), l(o)));
  var f;
  if (i ? f = () => {
      var u = e[r];
      return u === void 0 ? O() : (b = !0, u)
    } : f = () => {
      var u = e[r];
      return u !== void 0 && (a = void 0), u === void 0 ? a : u
    }, i && (t & K) === 0) return f;
  if (l) {
    var L = e.$$legacy;
    return (function(u, _) {
      return arguments.length > 0 ? ((!i || !_ || L || y) && l(_ ? f() : u), u) : f()
    })
  }
  var g = !1,
    c = ((t & X) !== 0 ? D : F)(() => (g = !1, f()));
  s && p(c);
  var U = Z;
  return (function(u, _) {
    if (arguments.length > 0) {
      const E = _ ? p(c) : i && s ? q(u) : u;
      return x(c, E), g = !0, a !== void 0 && (a = E), u
    }
    return z && g || (U.f & C) !== 0 ? c.v : p(c)
  })
}
export {
  te as a, ne as b, ae as p, ue as r, se as s, ie as u
};