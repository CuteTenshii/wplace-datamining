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
} from "./DTpxYwnW.js";
import "./B8UK1oE5.js";
import {
  t as u
} from "./u65G_XIT.js";
import {
  u as d
} from "./Bj-o04n3.js";
var f = class {
    constructor({
      maxBytes: e,
      maxEntries: t,
      onEvict: n
    }) {
      if (c(this, `entries`, new Map), c(this, `maxBytes`, void 0), c(this, `maxEntries`, void 0), c(this, `onEvict`, void 0), c(this, `retainedBytes`, 0), !Number.isSafeInteger(e) || e < 0) throw RangeError(`ByteLruCache maxBytes must be a non-negative safe integer.`);
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
  },
  p = 1048576,
  m = 3e4,
  h = 3e4,
  g = 5e3;
96 * p;

function _(e) {
  let t = e == null ? void 0 : e.usedJSHeapSize,
    n = e == null ? void 0 : e.jsHeapSizeLimit;
  return typeof t != `number` || !Number.isFinite(t) || t < 0 || typeof n != `number` || !Number.isFinite(n) || n <= 0 || t > n ? !1 : t / n >= .8 || n - t <= 100663296
}

function v({
  isWorkActive: e,
  onLongTask: t,
  onMemoryPressure: n,
  runtimeWindow: r = window,
  runtimePerformance: i = performance,
  Observer: a = typeof PerformanceObserver > `u` ? void 0 : PerformanceObserver
}) {
  let o;
  if (a) try {
    o = new a(n => {
      if (e()) {
        for (let e of Array.from(n.getEntries()))
          if (e.duration >= 100) {
            t();
            break
          }
      }
    }), o.observe({
      type: `longtask`,
      buffered: !1
    })
  } catch {
    o == null || o.disconnect(), o = void 0
  }
  let s = () => {
      _(i.memory) && n()
    },
    c = () => n(),
    l = r.setInterval(s, g);
  return r.addEventListener(`memorypressure`, c), s(), () => {
    o == null || o.disconnect(), r.clearInterval(l), r.removeEventListener(`memorypressure`, c)
  }
}
var y = class {
    constructor(e, t, n = Date.now) {
      if (c(this, `failureLimit`, void 0), c(this, `cooldownMs`, void 0), c(this, `now`, void 0), c(this, `failures`, 0), c(this, `blockedUntil`, 0), this.failureLimit = e, this.cooldownMs = t, this.now = n, !Number.isInteger(e) || e < 1) throw RangeError(`A failure circuit breaker requires at least one failure.`);
      if (!Number.isFinite(t) || t < 0) throw RangeError(`A failure circuit breaker requires a non-negative cooldown.`)
    }
    canAttempt() {
      return this.blockedUntil === 0 ? !0 : this.now() < this.blockedUntil ? !1 : (this.failures = 0, this.blockedUntil = 0, !0)
    }
    recordFailure() {
      return this.failures += 1, this.failures < this.failureLimit ? !1 : (this.blockedUntil = this.now() + this.cooldownMs, !0)
    }
    recordSuccess() {
      this.failures = 0, this.blockedUntil = 0
    }
  },
  b = class extends Error {
    constructor() {
      super(`Overlay processing was superseded.`), this.name = `OverlayProcessingCancelledError`
    }
  },
  x = class extends Error {
    constructor() {
      super(`Overlay processing exceeded the safe time limit.`), this.name = `OverlayProcessingTimeoutError`
    }
  },
  S, C = 1,
  w = new Map,
  T = new y(3, h),
  E = new f({
    maxBytes: d,
    onEvict: e => {
      if (S) try {
        S.postMessage({
          type: `release-source`,
          sourceKey: e
        })
      } catch {
        k()
      }
    }
  });

function D(e, t) {
  w.delete(e), t.timeout && clearTimeout(t.timeout), t.signal && t.abortHandler && t.signal.removeEventListener(`abort`, t.abortHandler)
}

function O(e) {
  let t = e.data,
    n = w.get(t.id);
  if (n) {
    if (D(t.id, n), t.type === `cancelled`) n.reject(new b);
    else if (t.type === `error`) {
      let e = Error(t.message),
        r = n.operation === `render` && T.recordFailure();
      n.reject(e), r && k(S, e, !1)
    } else T.recordSuccess(), n.resolve(t)
  }
}

function k(e = S, t = Error(`Overlay processing worker failed.`), n = !0) {
  if (!(e && S !== e)) {
    e == null || e.terminate(), S = void 0, n && T.recordFailure(), E.clear();
    for (let [e, n] of w) D(e, n), n.reject(t)
  }
}

function A() {
  if (!(typeof Worker > `u`)) {
    if (S) return S;
    if (T.canAttempt()) try {
      let e = new Worker(new URL(`` + new URL(`../workers/processing.worker-S70EdUqy.js`, import.meta.url).href, `` + import.meta.url), {
        type: `module`
      });
      return e.onmessage = O, e.onerror = () => k(e), e.onmessageerror = () => k(e), S = e, e
    } catch {
      T.recordFailure();
      return
    }
  }
}

function j() {
  return A() !== void 0
}

function M(e, t, n = []) {
  let r = A();
  if (!r) return;
  if (t != null && t.aborted) return Promise.reject(new b);
  let i = C++;
  return new Promise((a, o) => {
    let s = {
      operation: e.type,
      resolve: a,
      reject: o,
      signal: t
    };
    s.abortHandler = () => {
      w.has(i) && (D(i, s), r.postMessage({
        type: `cancel`,
        id: i
      }), o(new b))
    }, t == null || t.addEventListener(`abort`, s.abortHandler, {
      once: !0
    }), w.set(i, s), s.timeout = setTimeout(() => {
      w.has(i) && k(r, new x)
    }, m);
    try {
      r.postMessage({
        ...e,
        id: i
      }, n)
    } catch {
      k(r)
    }
  })
}

function N(e, t) {
  if (E.get(e)) return !0;
  let n = A();
  if (!n || t.data.byteLength > d) return !1;
  let r = new Uint8ClampedArray(t.data);
  try {
    return n.postMessage({
      type: `register-source`,
      sourceKey: e,
      source: {
        pixels: r,
        width: t.width,
        height: t.height
      }
    }, [r.buffer]), E.set(e, !0, t.data.byteLength), !0
  } catch {
    return k(), !1
  }
}

function P(e) {
  E.delete(e)
}

function F() {
  if (E.clear(), S) try {
    S.postMessage({
      type: `clear-derived-caches`
    })
  } catch {
    k()
  }
}

function I(e, t) {
  let n = M({
    type: `render`,
    payload: e
  }, t);
  if (n) return n.then(e => {
    if (e.type !== `render-result`) throw Error(`Unexpected overlay worker response.`);
    return {
      displayPixels: new ImageData(new Uint8ClampedArray(e.displayPixels), e.width, e.height),
      pickerPixels: e.pickerPixels ? new ImageData(new Uint8ClampedArray(e.pickerPixels), e.width, e.height) : void 0
    }
  })
}

function L(e, t) {
  let n = M({
    type: `resize`,
    payload: e
  }, t);
  if (n) return n.then(e => {
    if (e.type !== `resize-result`) throw Error(`Unexpected overlay worker response.`);
    return new ImageData(new Uint8ClampedArray(e.pixels), e.width, e.height)
  })
}

function R(e, t) {
  let n = M({
    type: `decode-resize`,
    payload: e
  }, t);
  if (n) return n.then(e => {
    if (e.type !== `decode-resize-result`) throw Error(`Unexpected overlay worker response.`);
    return new ImageData(new Uint8ClampedArray(e.pixels), e.width, e.height)
  })
}

function z(e, t) {
  let n = M({
    type: `analyze`,
    payload: e
  }, t);
  if (n) return n.then(H)
}

function B(e, t) {
  let n = M({
    type: `progress-tile`,
    payload: e
  }, t, [e.expected.buffer]);
  if (n) return n.then(e => {
    if (e.type !== `progress-tile-result`) throw Error(`Unexpected overlay worker response.`);
    return e.result
  })
}

function V(e, t) {
  let n = [];
  for (let t of e.tiles) n.push(t.expected.buffer, t.actual.buffer);
  let r = M({
    type: `reanalyze-tiles`,
    payload: e
  }, t, n);
  if (r) return r.then(e => {
    if (e.type !== `tile-analysis-result`) throw Error(`Unexpected overlay worker response.`);
    return {
      updates: e.updates.map(e => ({
        tileIndex: e.tileIndex,
        counts: new Uint32Array(e.counts),
        statuses: new Uint8Array(e.statuses)
      }))
    }
  })
}

function H(e) {
  if (e.type !== `analysis-result`) throw Error(`Unexpected overlay worker response.`);
  return {
    total: e.total,
    completed: e.completed,
    unpainted: e.unpainted,
    mismatched: e.mismatched,
    originX: e.originX,
    originY: e.originY,
    width: e.width,
    height: e.height,
    tileSize: e.tileSize,
    tileCoordinates: new Int32Array(e.tileCoordinates),
    tileBounds: new Uint16Array(e.tileBounds),
    tileCounts: new Uint32Array(e.tileCounts),
    tileStatusOffsets: new Uint32Array(e.tileStatusOffsets),
    statuses: new Uint8Array(e.statuses)
  }
}

function U(e) {
  return {
    pixels: e.data,
    width: e.width,
    height: e.height
  }
}
var W = new Set([`$$slots`, `$$events`, `$$legacy`]),
  G = e(`<svg><path d="M480-680q-33 0-56.5-23.5T400-760q0-33 23.5-56.5T480-840q33 0 56.5 23.5T560-760q0 33-23.5 56.5T480-680Zm-60 560v-480h120v480H420Z"></path></svg>`),
  K = e(`<svg><path d="M10 2h4v4h-4V2ZM8 8h6v12h2v2H8v-2h2V10H8V8Z"></path></svg>`);

function q(e, c) {
  o(c, !0);
  let d = s(c, W);
  var f = a(),
    p = t(f),
    m = e => {
      var t = G();
      l(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...d
      })), r(e, t)
    },
    h = e => {
      var t = K();
      l(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        "fill-rule": `evenodd`,
        ...d
      })), r(e, t)
    };
  n(p, e => {
    u.standard ? e(m) : e(h, -1)
  }), r(e, f), i()
}
export {
  U as a, V as c, P as d, I as f, f as h, R as i, N as l, v as m, b as n, j as o, L as p, z as r, B as s, q as t, F as u
};