var e = 1048576,
  t = {
    profile: `constrained`,
    cpuResourceCacheBytes: 192 * e,
    workerSourceCacheBytes: 64 * e,
    colorLookupCacheBytes: 8 * e,
    colorLookupCacheEntries: 131072,
    gpuTextureCacheBytes: 16 * e,
    processingTimeSliceMs: 3
  },
  n = {
    profile: `mobile`,
    cpuResourceCacheBytes: 256 * e,
    workerSourceCacheBytes: 96 * e,
    colorLookupCacheBytes: 12 * e,
    colorLookupCacheEntries: 196608,
    gpuTextureCacheBytes: 32 * e,
    processingTimeSliceMs: 5
  },
  r = {
    profile: `desktop`,
    cpuResourceCacheBytes: 320 * e,
    workerSourceCacheBytes: 192 * e,
    colorLookupCacheBytes: 24 * e,
    colorLookupCacheEntries: 393216,
    gpuTextureCacheBytes: 64 * e,
    processingTimeSliceMs: 8
  };

function i(e) {
  return typeof e == `number` && Number.isFinite(e) && e > 0 ? e : void 0
}

function a({
  deviceMemoryGiB: e,
  hardwareConcurrency: a,
  mobile: o = !1
} = {}) {
  let s = i(e),
    c = i(a);
  return s !== void 0 && s <= 2 || c !== void 0 && c <= 2 ? t : o || s !== void 0 && s <= 4 || c !== void 0 && c <= 4 ? n : r
}

function o(e) {
  var t;
  return e ? {
    deviceMemoryGiB: e.deviceMemory,
    hardwareConcurrency: e.hardwareConcurrency,
    mobile: ((t = e.userAgentData) == null ? void 0 : t.mobile) === !0 || /Android|iPhone|iPad|iPod|IEMobile|Mobile|Opera Mini/i.test(e.userAgent ?? ``)
  } : {}
}
var s = a(o(typeof navigator > `u` ? void 0 : navigator)),
  c = s.cpuResourceCacheBytes,
  l = s.workerSourceCacheBytes,
  u = s.colorLookupCacheBytes,
  d = s.colorLookupCacheEntries,
  f = s.gpuTextureCacheBytes,
  p = s.processingTimeSliceMs;

function m(e, t, n) {
  let r = e.width,
    i = e.height,
    a = new ImageData(t, n),
    o = new Uint32Array(e.data.buffer, e.data.byteOffset, e.data.byteLength / 4),
    s = new Uint32Array(a.data.buffer, a.data.byteOffset, a.data.byteLength / 4),
    c = h(r, t),
    l = -1;
  for (let e = 0; e < n; e++) {
    let a = Math.min(Math.floor(e * i / n), i - 1),
      u = e * t;
    if (a === l) {
      s.copyWithin(u, u - t, u);
      continue
    }
    let d = a * r;
    for (let e = 0; e < t; e++) s[u + e] = o[d + c[e]];
    l = a
  }
  return a
}

function h(e, t) {
  let n = new Uint32Array(t);
  for (let r = 0; r < t; r++) n[r] = Math.min(Math.floor(r * e / t), e - 1);
  return n
}

function g(e) {
  if (e != null && e.aborted) throw new DOMException(`Image resize aborted.`, `AbortError`)
}

function _() {
  return new Promise(e => {
    if (typeof requestAnimationFrame == `function`) {
      requestAnimationFrame(() => e());
      return
    }
    setTimeout(e, 0)
  })
}
async function v(e, t, n, r = {}) {
  let i = e.width,
    a = e.height,
    o = new ImageData(t, n),
    s = new Uint32Array(e.data.buffer, e.data.byteOffset, e.data.byteLength / 4),
    c = new Uint32Array(o.data.buffer, o.data.byteOffset, o.data.byteLength / 4),
    l = h(i, t),
    u = Math.max(1, r.timeSliceMs ?? p),
    d = r.yieldControl ?? _,
    f = performance.now(),
    m = -1;
  g(r.signal);
  for (let e = 0; e < n; e++) {
    let o = Math.min(Math.floor(e * a / n), a - 1),
      p = e * t;
    if (o === m) c.copyWithin(p, p - t, p);
    else {
      let e = o * i;
      for (let n = 0; n < t; n++) c[p + n] = s[e + l[n]]
    }
    m = o, performance.now() - f >= u && e + 1 < n && (g(r.signal), await d(), g(r.signal), f = performance.now())
  }
  return o
}
export {
  d as a, s as c, u as i, p as l, v as n, c as o, _ as r, f as s, m as t, l as u
};