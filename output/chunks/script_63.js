import {
  $ as e,
  Et as t,
  G as n,
  X as r,
  Z as i,
  a,
  o,
  y as s
} from "./CX37corp.js";
import "./B8UK1oE5.js";
var c = new Set([`$$slots`, `$$events`, `$$legacy`, `filled`]),
  l = e(`<svg><path d="M480-118 120-398l66-50 294 228 294-228 66 50-360 280Zm0-202L120-600l360-280 360 280-360 280Z"></path></svg>`),
  u = e(`<svg><path d="M480-118 120-398l66-50 294 228 294-228 66 50-360 280Zm0-202L120-600l360-280 360 280-360 280Zm0-280Zm0 178 230-178-230-178-230 178 230 178Z"></path></svg>`);

function d(e, d) {
  let f = a(d, `filled`, 3, !1),
    p = o(d, c);
  var m = i(),
    h = t(m),
    g = e => {
      var t = l();
      s(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...p
      })), r(e, t)
    },
    _ = e => {
      var t = u();
      s(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...p
      })), r(e, t)
    };
  n(h, e => {
    f() ? e(g) : e(_, -1)
  }), r(e, m)
}
var f = 1048576,
  p = {
    profile: `constrained`,
    cpuResourceCacheBytes: 192 * f,
    workerSourceCacheBytes: 64 * f,
    colorLookupCacheBytes: 8 * f,
    colorLookupCacheEntries: 131072,
    gpuTextureCacheBytes: 16 * f,
    processingTimeSliceMs: 3
  },
  m = {
    profile: `mobile`,
    cpuResourceCacheBytes: 256 * f,
    workerSourceCacheBytes: 96 * f,
    colorLookupCacheBytes: 12 * f,
    colorLookupCacheEntries: 196608,
    gpuTextureCacheBytes: 32 * f,
    processingTimeSliceMs: 5
  },
  h = {
    profile: `desktop`,
    cpuResourceCacheBytes: 320 * f,
    workerSourceCacheBytes: 192 * f,
    colorLookupCacheBytes: 24 * f,
    colorLookupCacheEntries: 393216,
    gpuTextureCacheBytes: 64 * f,
    processingTimeSliceMs: 8
  };

function g(e) {
  return typeof e == `number` && Number.isFinite(e) && e > 0 ? e : void 0
}

function _({
  deviceMemoryGiB: e,
  hardwareConcurrency: t,
  mobile: n = !1
} = {}) {
  let r = g(e),
    i = g(t);
  return r !== void 0 && r <= 2 || i !== void 0 && i <= 2 ? p : n || r !== void 0 && r <= 4 || i !== void 0 && i <= 4 ? m : h
}

function v(e) {
  var t;
  return e ? {
    deviceMemoryGiB: e.deviceMemory,
    hardwareConcurrency: e.hardwareConcurrency,
    mobile: ((t = e.userAgentData) == null ? void 0 : t.mobile) === !0 || /Android|iPhone|iPad|iPod|IEMobile|Mobile|Opera Mini/i.test(e.userAgent ?? ``)
  } : {}
}
var y = _(v(typeof navigator > `u` ? void 0 : navigator)),
  b = y.cpuResourceCacheBytes,
  x = y.workerSourceCacheBytes,
  S = y.colorLookupCacheBytes,
  C = y.colorLookupCacheEntries,
  w = y.gpuTextureCacheBytes,
  T = y.processingTimeSliceMs;
export {
  y as a, d as c, w as i, C as n, T as o, b as r, x as s, S as t
};