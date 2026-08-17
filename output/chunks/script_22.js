var p = t => {
  throw TypeError(t)
};
var h = (t, e, n) => e.has(t) || p("Cannot " + n);
var i = (t, e, n) => (h(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
  l = (t, e, n) => e.has(t) ? p("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n),
  d = (t, e, n, r) => (h(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
import {
  c as v
} from "./riRxs-wl.js";
import {
  bn as m,
  aF as A,
  y as k,
  B as E
} from "./m4hpPlb8.js";
const F = typeof window < "u" ? window : void 0;

function _(t) {
  let e = t.activeElement;
  for (; e != null && e.shadowRoot;) {
    const n = e.shadowRoot.activeElement;
    if (n === e) break;
    e = n
  }
  return e
}
var c, o;
class g {
  constructor(e = {}) {
    l(this, c);
    l(this, o);
    const {
      window: n = F,
      document: r = n == null ? void 0 : n.document
    } = e;
    n !== void 0 && (d(this, c, r), d(this, o, v(u => {
      const a = m(n, "focusin", u),
        s = m(n, "focusout", u);
      return () => {
        a(), s()
      }
    })))
  }
  get current() {
    var e;
    return (e = i(this, o)) == null || e.call(this), i(this, c) ? _(i(this, c)) : null
  }
}
c = new WeakMap, o = new WeakMap;
new g;

function R(t, e) {
  switch (t) {
    case "post":
      k(e);
      break;
    case "pre":
      A(e);
      break
  }
}

function w(t, e, n, r = {}) {
  const {
    lazy: u = !1
  } = r;
  let a = !u,
    s = Array.isArray(t) ? [] : void 0;
  R(e, () => {
    const f = Array.isArray(t) ? t.map(y => y()) : t();
    if (!a) {
      a = !0, s = f;
      return
    }
    const b = E(() => n(f, s));
    return s = f, b
  })
}

function W(t, e, n) {
  w(t, "post", e, n)
}

function x(t, e, n) {
  w(t, "pre", e, n)
}
W.pre = x;
export {
  F as d, W as w
};