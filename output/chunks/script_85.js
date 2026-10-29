var e, t = typeof TextDecoder < `u` ? new TextDecoder(`utf-8`, {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error(`TextDecoder not available`)
  }
};
typeof TextDecoder < `u` && t.decode();
var n = null;

function r() {
  return (n === null || n.byteLength === 0) && (n = new Uint8Array(e.memory.buffer)), n
}

function i(e, n) {
  return e >>>= 0, t.decode(r().subarray(e, e + n))
}
var a = null;

function o() {
  return (a === null || a.byteLength === 0) && (a = new Uint8ClampedArray(e.memory.buffer)), a
}

function s(e, t) {
  return e >>>= 0, o().subarray(e / 1, e / 1 + t)
}
var c = Array(128).fill(void 0);
c.push(void 0, null, !0, !1);
var l = c.length;

function u(e) {
  l === c.length && c.push(c.length + 1);
  let t = l;
  return l = c[t], c[t] = e, t
}
var d = 0;

function f(e, t) {
  let n = t(e.length * 1, 1) >>> 0;
  return r().set(e, n / 1), d = e.length, n
}
var p = null;

function m() {
  return (p === null || p.byteLength === 0) && (p = new Int32Array(e.memory.buffer)), p
}

function h(e, t) {
  return e >>>= 0, r().subarray(e / 1, e / 1 + t)
}

function g(t, n, r) {
  try {
    let s = e.__wbindgen_add_to_stack_pointer(-16),
      c = f(t, e.__wbindgen_malloc),
      l = d;
    e.encode(s, c, l, n, r);
    var i = m()[s / 4 + 0],
      a = m()[s / 4 + 1],
      o = h(i, a).slice();
    return e.__wbindgen_free(i, a * 1, 1), o
  } finally {
    e.__wbindgen_add_to_stack_pointer(16)
  }
}

function _(e) {
  return c[e]
}

function v(e) {
  e < 132 || (c[e] = l, l = e)
}

function y(e) {
  let t = _(e);
  return v(e), t
}

function b(t) {
  let n = f(t, e.__wbindgen_malloc),
    r = d;
  return y(e.decode(n, r))
}
async function x(e, t) {
  if (typeof Response == `function` && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == `function`) try {
      return await WebAssembly.instantiateStreaming(e, t)
    } catch (t) {
      if (e.headers.get(`Content-Type`) != `application/wasm`) console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", t);
      else throw t
    }
    let n = await e.arrayBuffer();
    return await WebAssembly.instantiate(n, t)
  } {
    let n = await WebAssembly.instantiate(e, t);
    return n instanceof WebAssembly.Instance ? {
      instance: n,
      module: e
    } : n
  }
}

function S() {
  let t = {};
  return t.wbg = {}, t.wbg.__wbg_newwithownedu8clampedarrayandsh_91db5987993a08fb = function(t, n, r, i) {
    var a = s(t, n).slice();
    return e.__wbindgen_free(t, n * 1, 1), u(new ImageData(a, r >>> 0, i >>> 0))
  }, t.wbg.__wbindgen_throw = function(e, t) {
    throw Error(i(e, t))
  }, t
}

function C(t, r) {
  return e = t.exports, w.__wbindgen_wasm_module = r, p = null, n = null, a = null, e
}
async function w(t) {
  if (e !== void 0) return e;
  let n = S();
  (typeof t == `string` || typeof Request == `function` && t instanceof Request || typeof URL == `function` && t instanceof URL) && (t = fetch(t));
  let {
    instance: r,
    module: i
  } = await x(await t, n);
  return C(r, i)
}
var T = globalThis.ServiceWorkerGlobalScope !== void 0 && typeof self < `u` && globalThis.caches && globalThis.caches.default !== void 0,
  E = typeof process == `object` && process.release && process.release.name === `node`;
(T || E) && (globalThis.ImageData || (globalThis.ImageData = class {
  constructor(e, t, n) {
    this.data = e, this.width = t, this.height = n
  }
}), typeof self < `u` && self.location === void 0 && (self.location = {
  href: ``
}));
var D;
async function O(e) {
  return D || (D = w(e)), D
}
async function k(e) {
  await O();
  let t = await b(new Uint8Array(e));
  if (!t) throw Error(`Encoding error.`);
  return t
}
var A;
async function j(e) {
  return A || (A = w(e)), A
}
async function M(e) {
  await j();
  let t = await g(e.data, e.width, e.height);
  if (!t) throw Error(`Encoding error.`);
  return t.buffer
}
var N = `` + new URL(`../assets/squoosh_png_bg.BsfxGNEB.wasm`, import.meta.url).href,
  P;

function F() {
  return P || (P = O(N)), P
}
async function I(e) {
  return await F(), k(e)
}
async function L(e) {
  return await F(), M(e)
}
export {
  L as n, I as t
};