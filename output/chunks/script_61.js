import {
  $ as e,
  Et as t,
  G as n,
  X as r,
  Xt as i,
  Yt as a,
  Z as o,
  an as s,
  o as c,
  y as l
} from "./R3px7NU1.js";
import "./B8UK1oE5.js";
import {
  t as u
} from "./6vx7SfJF.js";
var d = new Set([`$$slots`, `$$events`, `$$legacy`]),
  f = e(`<svg><path d="M480-680q-33 0-56.5-23.5T400-760q0-33 23.5-56.5T480-840q33 0 56.5 23.5T560-760q0 33-23.5 56.5T480-680Zm-60 560v-480h120v480H420Z"></path></svg>`),
  p = e(`<svg><path d="M10 2h4v4h-4V2ZM8 8h6v12h2v2H8v-2h2V10H8V8Z"></path></svg>`);

function m(e, s) {
  i(s, !0);
  let m = c(s, d);
  var h = o(),
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
  }), r(e, h), a()
}
var h = class {
  constructor({
    maxBytes: e,
    maxEntries: t,
    onEvict: n
  }) {
    if (s(this, `entries`, new Map), s(this, `maxBytes`, void 0), s(this, `maxEntries`, void 0), s(this, `onEvict`, void 0), s(this, `retainedBytes`, 0), !Number.isSafeInteger(e) || e < 0) throw RangeError(`ByteLruCache maxBytes must be a non-negative safe integer.`);
    if (t !== void 0 && (!Number.isSafeInteger(t) || t < 0)) throw RangeError(`ByteLruCache maxEntries must be a non-negative safe integer.`);
    this.maxEntries = t ?? 1 / 0, this.maxBytes = e, this.onEvict = n
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
    if (n > this.maxBytes || this.maxEntries === 0) return !1;
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
    for (; this.retainedBytes > this.maxBytes || this.entries.size > this.maxEntries;) {
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