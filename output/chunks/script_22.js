var p = t => {
  throw TypeError(t)
};
var h = (t, e, n) => e.has(t) || p("Cannot " + n);
var i = (t, e, n) => (h(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
  l = (t, e, n) => e.has(t) ? p("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n),
  d = (t, e, n, r) => (h(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
import {
  c as v
} from "./BATewRf7.js";
import {
  bu as m,
  aI as A,
  y as E,
  E as k
} from "./D5GL_E7i.js";
const _ = typeof window < "u" ? window : void 0;

function g(t) {
  let e = t.activeElement;
  for (; e != null && e.shadowRoot;) {
    const n = e.shadowRoot.activeElement;
    if (n === e) break;
    e = n
  }
  return e
}
var c, u;
class F {
  constructor(e = {}) {
    l(this, c);
    l(this, u);
    const {
      window: n = _,
      document: r = n == null ? void 0 : n.document
    } = e;
    n !== void 0 && (d(this, c, r), d(this, u, v(o => {
      const a = m(n, "focusin", o),
        s = m(n, "focusout", o);
      return () => {
        a(), s()
      }
    })))
  }
  get current() {
    var e;
    return (e = i(this, u)) == null || e.call(this), i(this, c) ? g(i(this, c)) : null
  }
}
c = new WeakMap, u = new WeakMap;
new F;

function I(t, e) {
  switch (t) {
    case "post":
      E(e);
      break;
    case "pre":
      A(e);
      break
  }
}

function w(t, e, n, r = {}) {
  const {
    lazy: o = !1
  } = r;
  let a = !o,
    s = Array.isArray(t) ? [] : void 0;
  I(e, () => {
    const f = Array.isArray(t) ? t.map(y => y()) : t();
    if (!a) {
      a = !0, s = f;
      return
    }
    const b = k(() => n(f, s));
    return s = f, b
  })
}

function R(t, e, n) {
  w(t, "post", e, n)
}

function W(t, e, n) {
  w(t, "pre", e, n)
}
R.pre = W;
export {
  _ as d, R as w
};