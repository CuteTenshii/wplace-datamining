import {
  $ as e,
  X as t,
  an as n,
  o as r,
  y as i
} from "./CX37corp.js";
import "./B8UK1oE5.js";
var a = new Set([`$$slots`, `$$events`, `$$legacy`]),
  o = e(`<svg><path d="M480-680q-33 0-56.5-23.5T400-760q0-33 23.5-56.5T480-840q33 0 56.5 23.5T560-760q0 33-23.5 56.5T480-680Zm-60 560v-480h120v480H420Z"></path></svg>`);

function s(e, n) {
  let s = r(n, a);
  var c = o();
  i(c, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 -960 960 960`,
    fill: `currentColor`,
    ...s
  })), t(e, c)
}
var c = class {
  constructor({
    maxBytes: e,
    onEvict: t
  }) {
    if (n(this, `entries`, new Map), n(this, `maxBytes`, void 0), n(this, `onEvict`, void 0), n(this, `retainedBytes`, 0), !Number.isSafeInteger(e) || e < 0) throw RangeError(`ByteLruCache maxBytes must be a non-negative safe integer.`);
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
  s as n, c as t
};