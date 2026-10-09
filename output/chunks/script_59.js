import {
  $ as e,
  Dt as t,
  G as n,
  X as r,
  Xt as i,
  Z as a,
  Zt as o,
  o as s,
  on as c,
  y as l
} from "./D2z8HFb7.js";
import "./B8UK1oE5.js";
import {
  t as u
} from "./Da1b2czT.js";
var d = new Set([`$$slots`, `$$events`, `$$legacy`]),
  f = e(`<svg><path d="M480-680q-33 0-56.5-23.5T400-760q0-33 23.5-56.5T480-840q33 0 56.5 23.5T560-760q0 33-23.5 56.5T480-680Zm-60 560v-480h120v480H420Z"></path></svg>`),
  p = e(`<svg><path d="M10 2h4v4h-4V2ZM8 8h6v12h2v2H8v-2h2V10H8V8Z"></path></svg>`);

function m(e, c) {
  o(c, !0);
  let m = s(c, d);
  var h = a(),
    g = t(h),
    _ = e => {
      var t = f();
      l(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...m
      })), r(e, t)
    },
    v = e => {
      var t = p();
      l(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        "fill-rule": `evenodd`,
        ...m
      })), r(e, t)
    };
  n(g, e => {
    u.standard ? e(_) : e(v, -1)
  }), r(e, h), i()
}
var h = class {
  constructor({
    maxBytes: e,
    onEvict: t
  }) {
    if (c(this, `entries`, new Map), c(this, `maxBytes`, void 0), c(this, `onEvict`, void 0), c(this, `retainedBytes`, 0), !Number.isSafeInteger(e) || e < 0) throw RangeError(`ByteLruCache maxBytes must be a non-negative safe integer.`);
    this.maxBytes = e, this.onEvict = t
  }
  get size() {
    return this.entries.size
  }
  get byteSize() {
    return this.retainedBytes
  }
  has(e) {
    return this.entries.has(e)
  }
  peek(e) {
    var t;
    return (t = this.entries.get(e)) == null ? void 0 : t.value
  }
  get(e) {
    let t = this.entries.get(e);
    if (t) return this.entries.delete(e), this.entries.set(e, t), t.value
  }
  set(e, t, n) {
    if (!Number.isSafeInteger(n) || n < 0) throw RangeError(`ByteLruCache entry bytes must be a non-negative safe integer.`);
    if (n > this.maxBytes) return !1;
    let r = this.entries.get(e);
    if (r) {
      var i;
      this.entries.delete(e), this.retainedBytes -= r.bytes, r.value !== t && ((i = this.onEvict) == null || i.call(this, e, r.value))
    }
    return this.entries.set(e, {
      value: t,
      bytes: n
    }), this.retainedBytes += n, this.evictToBudget(), !0
  }
  delete(e) {
    var t;
    let n = this.entries.get(e);
    return n ? (this.entries.delete(e), this.retainedBytes -= n.bytes, (t = this.onEvict) == null || t.call(this, e, n.value), !0) : !1
  }
  clear() {
    if (!this.onEvict) {
      this.entries.clear(), this.retainedBytes = 0;
      return
    }
    for (let [e, t] of this.entries) this.onEvict(e, t.value);
    this.entries.clear(), this.retainedBytes = 0
  }
  evictWhere(e) {
    let t = 0;
    for (let [r, i] of this.entries) {
      var n;
      e(r, i.value) && (this.entries.delete(r), this.retainedBytes -= i.bytes, (n = this.onEvict) == null || n.call(this, r, i.value), t += 1)
    }
    return t
  }
  evictToBudget() {
    for (; this.retainedBytes > this.maxBytes;) {
      var e;
      let t = this.entries.entries().next().value;
      if (!t) return;
      let [n, r] = t;
      this.entries.delete(n), this.retainedBytes -= r.bytes, (e = this.onEvict) == null || e.call(this, n, r.value)
    }
  }
};
export {
  m as n, h as t
};