var R = Object.defineProperty;
var x = q => {
  throw TypeError(q)
};
var Z = (q, V, t) => V in q ? R(q, V, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : q[V] = t;
var L = (q, V, t) => Z(q, typeof V != "symbol" ? V + "" : V, t),
  k = (q, V, t) => V.has(q) || x("Cannot " + t);
var g = (q, V, t) => (k(q, V, "read from private field"), t ? t.call(q) : V.get(q)),
  y = (q, V, t) => V.has(q) ? x("Cannot add the same private member more than once") : V instanceof WeakSet ? V.add(q) : V.set(q, t),
  h = (q, V, t, A) => (k(q, V, "write to private field"), A ? A.call(q, t) : V.set(q, t), t);
import "./D3lROOk9.js";
import {
  i as S
} from "./D6WlI9xC.js";
import {
  c as X
} from "./D1f3t9ko.js";
import {
  bz as K,
  i as N,
  e as O,
  g as H,
  h as _,
  u as $,
  bJ as C,
  as as qq,
  q as Vq,
  x as Y
} from "./B66BVdRM.js";

function tq() {
  return Symbol(K)
}
const Aq = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAEAAAHPAB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn6pqampqampqampqampqampqampqampqamp29vb29vb29vb29vb29vb29vb29vb29vb2/////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJANgAAAAAAAABzxmm4psAAAAAAD/+8DEAAAF7A1FtDAAIzil6D87kgAAAktuqNu7gOcCAAgEATB8HzcHwfB8+DgIROD4ABAEAQOeCH/iAMXLB9//BB3Lg+AAIgJwBCSoyQ0QES1dNwAYhicYDAiarL8aXE4ZXwYe9BkCgLS/Dg4MKQDMkgCjAiAxujyCQPmFYGBApKtkawq2qi9GqTYgLTpFiGdI9O1D5NmvVykb4Q0iC3QOU5rUBLCQ9IoJWFutwdm2v5UmUWmoy2K9QxuXw5RxuOwA2j2ytp2dZrWp2A2/kMupbmC5HKc2et0mbjSyeld35/luxXs97SW4/JJiln38v54TdWITN+nq3a1Pq93WW/3/vNLLf/////K6sDGP////6PvWxQBFoFJABHMZRCBoQGHo/GW6NG17vGW1Zm25xgoZkkHEXiCgHb9v4bi8evlnFw5BStnezI76WTtDaVvOnLL8s9+1t95y7trVqdf0zfXXtpb2dzNrj94XquvZ0M/NLX6l+vktgwC4jICYwfNAuho0IiQuj////9r102AEMKOmGkMYagJIsBaYDIChgOgJiENow+wojIdUMMSQEYSBUTMZQb0o8Sk0SAjR1t5HOrfQNex7cq0ENSD4pyGX7X0xZTZxIYcKtF3mZptVyMvMJudNbJV6UKXY/pfr32nNn0c5rcEZq6nJYnCORDbENctTk5KWZdS63RUTWFzZVbMV3mt6vHJyziusGx5zczaCWWIN////qcOYSSNcFwyUIAAjtY6tsg5hoaQgzCTEAExUCDBozfYO8qSY3T3MLBgMXFAyoIjSiUtF/0DIhCIBgG52VxKVSh3n1s08dh16HvYXJ8JdlBMxTY839i3jR8vtSlsKfeK0NnC/nM0tLW7FK8/Tyq3KYLswxTDQEYZQZBHdQsioRGajdWcNkfpNOahWTpUJEDyc9LCQ0gcfR2T8/////////2zGWVnTPOpjElOJxIKDcdxGcttHMdDk5//7cMTkAA8Uz0Nd1gAigaJm6eyxPIZMDGR0PEgIGrR49MVAZAmYoKJjqJJImBhKP02+o9Jznif5eVT2eHC0ysbdDWHcRBDdQtNsGHz5fw8l282p0U6XSlewoyfTz751qsNZZnm32XJ+unFUNjmoX7ZOpHcZdMd7QbwNu3WpMQZplTGVCmaoMR34247bm1mKtcK2aK+iQ4ivzjUezP///5geOSUMiJ4hUgCgC0K1WiCQN8vbLG0AQADBIlTNsRCYEzAEsjEodxELxqxP5Q/JrC1wBDIwZKExnLAxQW8x7DEIOswwBYw/DkUH4DcJwDDAHaJgbsOBr7QGlBha6NwBiCDcgQQAxYAIUQGBKBYuBJEAcWJEnQDE4pIly4MoYoqAEDCUAPQRAxqkAJ5GoBgyB4RikbLIcbhtIX7/+4DE6YAUZaM7rZheonoiZ3a28ASIsGAgt7D+AWIjkDSGWD0hfqSddyAgLAQ5QaQn8QDHWOoB4AMjh6g6BZYagtVSTqMjpBSeF6RccsrkVJwiZEC0VjA1cjv+xgbI/0TEwQN0GdBn///9q1N/9v//0/VsitLemubODxzX2KfBVKuK49NlTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7YMT0gCAhwyP52gAIAAA/w4AABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
  eq = "data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7QMTxA9NhPR3sPM5AAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",
  nq = "" + new URL("../assets/notification.CPyrWqU1.mp3", import.meta.url).href,
  oq = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAADAAAHVgCKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioru7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7///////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAUQAAAAAAAAB1ZvGw9zAAAAAAD/+9DEAAAGgANNtBAAJL5DKPc9kEkIAKVy6ZvTvjNiAEAQA4fwcOKBAED85LicHw/BAEHfg+D4f/B8Hwf/Ococ/lz//4P//lwfAAAQCzgEApUAchBICAMDwGwwpg3jDHA2MWkaAxCQqDAjBQMMoFYwVgLDCrX1NfwPQxajfTO/VkEYD4sAuYOwYBgPgBGmQOAYIgDoKER8AN4KNYgISnpehHt0X2WsksoO27zM1duB3IgimTpnXNwTefFr9ly4HYK1lgtE8a3uVY23SCpDEpz4xL3DZVTV8ZygdeB4X+GuX6sTh9sVNAzuwVTIUztBdnLL60VnPsrt8f+fw/LCUy2caLDNmzuzGatmcu97UsVIYilyxqUcpaSPSW63KzZucjnakuzw+zlc5nD7yfL5zPv59z7/dQ9EolEu9pf5V1Y1+7Eayl1qkt8rXLGdi5nz//////////////////9/r9dw1l39/+P73/7////rWr1PdwxvJCIEbNPJ1QmAABaCxKJEmLpurTGDFSAYMB0FQxfggyqAeYtYSphnAwmFmBIYTATyaZhFiAGFIEqY0hJ5wAIxmFKCgaFaihh9A1GSlMSJYunOGWWB6pdsMvN5kqIig49MYApkLhJxyjmgkA1gIGDp1/CEIOLNkht0Ag8+NWKWQOW+aivhGVsj00TCW4CiJWJKkYRECshrDX0vHCHosi1cqERxakomvtDHA2TIAyjt52yUsMz8EMpZDLYdbq3V0XSRtfmhWkyaFM+YpBSrxQBAx03pQHPND6exc0OKEQq3lvKqM9hSCVHlv0yVdJhNZf+1Nx2GYZbqxt2qLJ9GC00ETr2vY+tmMTrOqWWTEkkUeh27PYQFIWX0rcGmtAswPXlLzWp6IVZe/ssk8FZ02r16Xdz3hTwPHJu3DEos63dr2927GPfz3+sM+93/63n3u//D///3nv9/rX71v97/PHuGWv7z/1Uo+X7tNTZ91XyoaWnob1bs9Yp86oQUCZIAAwEB7VQIuyrSQANCQ2GhZMQQ4MOCHMFxAMRwkMAxlMHzDM9QQMAxabsYLC+aWdScYCCZCoabxBOZSGWZcE2FB0xAuPp4zhWswUOJAsxAQMFDR4qN//vAxOUALmI5MbnsgE1xwGT3O7ABhADArk1MFMSD0qUALTCIVTNZ6aumhCoZWXmZixYEi2Kiy35BH02oFLPGCg7rCgQDQYw4ZYE5yE1rTPX1YekYKAYsD1hgHKA0ZBWZkQVFFhX2gNE3fFvt411kDPlAE5BAAMrWnKUzkdUQ4GcKFNJrQ1beZZDA2TyBhzsLNlCcxIeBUAMBCRkBamhsy15MFpJFZV1ovs/V/u78Uh+bo5dMT3L0lpqC3Wi9mVXpPlvn5TNa1Vyq409e/b1XvY/9bHmF3O1dwt2u5ZY444Y8q2a2Ou5Zd/GzvHV7tu/cx5fzv587Xua5ewz1n3+91X/LPesO2M9Zb7c5n3eOHcb+5KDXnf0F87HySsMMMAEIAAAwaBkBfgCqAAS3goeAwxXwM3QBieI+IEf/E3Ckh6ID/mLENJk99YSErPrb/4uVDX/7Vo/+KKI1///VTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+yDE4AAIHGcJGUmAAAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",
  rq = "data:audio/mpeg;base64,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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xDE1gPAAAGkHAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
  iq = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAE/gDLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//////////////////////////////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAOoAAAAAAAABP6u4u+sAAAAAAD/+9DEAAAGhC1UdGMAJM1C6nc34FFSaWP+7vYBAAEOAAiHPJp6YAwtNgQl3qDHKBgo4Th/wf/Lh/8H35R3/4IAg7//gh/+UOcPgABgAAAB0YnM2TIZDUkAGYOFBdqBQkadAmEAgiDTKD1BYUFTGA4LixoJUcUsGkDJrfwYKEmBDRg+gZmBSBeYUQyJj2B9mAOAkYXINwOA3cdvzIrBtMDwFYOAEMZhFcyRwWTDiAGWo/LzSFp7vtDTSQ3bHKocXbPR6kg2U07Vs4KcJaDIIGTHZxDsSjEMyhPing6w8PSYAlwHfdtbFq3lAc1qmqzPxFFV1cbUkrP9GG/cbKIyivlRWq1mzvHDWNad73eE7q3JYPnIerXqKJTtzV3DmUzLZZFM7sv1z9U8czh5wVG4G3nru8cfyy+rhT5TtHTb7jzd3eWO6Wmy3R3e6/DW9b5l/b9e5///87///eY////9///////Df7/8vx/Xf///9f///52O6s3rZINILq82aqo6x1TAYDoYGInIIhASA++E8wYSIkIBd0NdJXDHQL2vFAR4YOsgwGFK6QQiPQDhcITBl4MWgDBEAosgZUgoDGkAwGFAMCCEDEQVAwaOgMChwEQXAwUBg5MTgJcAwARZxBj4Ng0LAigBGYdKKwKBIeIQDHCyhWxMlUmTx0xUCgJFBjnkGFkpk0ZF4gSLLRZJKGARbBQAsZDCCFAhxianDEuspVXRkOUWCGGCYsxZiXa0Ukl/8XOS4vxxjrDJR7RLyeiisxJn//y+11pJqNycOJkgiapIoo0UdS0dL//sUjzHxMgBgMUtVdLRYGrKTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tgxOMAHVGjN7magIAAADSDgAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
  $q = sq();

function sq() {
  const q = {
    plop: new Audio(oq),
    smallPlop: new Audio(iq),
    bigPlop: new Audio(Aq),
    smallDropplet: new Audio(rq),
    droppletAndPlop: new Audio(eq),
    notification1: new Audio(nq)
  };
  for (const V of Object.values(q)) V.preload = "auto", V.volume = .3;
  return q
}
let G;

function qV(q) {
  return G = q, T({
    type: "previewPixels",
    data: q
  })
}

function VV() {
  return G = void 0, T({
    type: "clearPixelPreview"
  })
}

function tV(q) {
  return T({
    type: "paintPixels",
    data: q
  })
}

function AV() {
  return T({
    type: "refreshPixelArt"
  })
}
async function eV() {
  G || await T({
    type: "clearPixelPreview"
  })
}

function T(q) {
  const V = Math.random(),
    t = {
      ...q,
      id: V
    };
  return new Promise((A, e) => {
    try {
      const n = navigator.serviceWorker;
      n || e(new Error("Service Workers are not supported/enabled in your browser. Some features might not work properly."));
      const o = c => {
        var a;
        ((a = c.data) == null ? void 0 : a.id) === V && (A(void 0), n.removeEventListener("message", o))
      };
      n.addEventListener("message", o);
      const s = navigator.serviceWorker.controller;
      s ? s.postMessage(t) : navigator.serviceWorker.ready.then(c => {
        const a = c.active;
        a ? a == null || a.postMessage(t) : e(new Error("Service worker registration not active"))
      })
    } catch (n) {
      e(n)
    }
  })
}

function nV({
  pixel: q,
  season: V,
  tile: t
}) {
  return `t=(${t[0]},${t[1]});p=(${q[0]},${q[1]});s=${V}`
}

function aq(q) {
  return q !== null && typeof q == "object"
}
const cq = ["string", "number", "bigint", "boolean"];

function I(q) {
  return q == null || cq.includes(typeof q) ? !0 : Array.isArray(q) ? q.every(V => I(V)) : typeof q == "object" ? Object.getPrototypeOf(q) === Object.prototype : !1
}
const D = Symbol("box"),
  z = Symbol("is-writable");

function oV(q, V) {
  const t = $(q);
  return V ? {
    [D]: !0,
    [z]: !0,
    get current() {
      return N(t)
    },
    set current(A) {
      V(A)
    }
  } : {
    [D]: !0,
    get current() {
      return q()
    }
  }
}

function uq(q) {
  return aq(q) && D in q
}

function rV(q) {
  let V = O(H(q));
  return {
    [D]: !0,
    [z]: !0,
    get current() {
      return N(V)
    },
    set current(t) {
      _(V, t, !0)
    }
  }
}

function lq(...q) {
  return function(V) {
    var t;
    for (const A of q)
      if (A) {
        if (V.defaultPrevented) return;
        typeof A == "function" ? A.call(this, V) : (t = A.current) == null || t.call(this, V)
      }
  }
}
var P = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  fq = /\n/g,
  pq = /^\s*/,
  dq = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  gq = /^:\s*/,
  mq = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  Eq = /^[;\s]*/,
  wq = /^\s+|\s+$/g,
  yq = `
`,
  U = "/",
  W = "*",
  m = "",
  hq = "comment",
  Bq = "declaration";

function Mq(q, V) {
  if (typeof q != "string") throw new TypeError("First argument must be a string");
  if (!q) return [];
  V = V || {};
  var t = 1,
    A = 1;

  function e(i) {
    var r = i.match(fq);
    r && (t += r.length);
    var l = i.lastIndexOf(yq);
    A = ~l ? i.length - l : A + i.length
  }

  function n() {
    var i = {
      line: t,
      column: A
    };
    return function(r) {
      return r.position = new o(i), a(), r
    }
  }

  function o(i) {
    this.start = i, this.end = {
      line: t,
      column: A
    }, this.source = V.source
  }
  o.prototype.content = q;

  function s(i) {
    var r = new Error(V.source + ":" + t + ":" + A + ": " + i);
    if (r.reason = i, r.filename = V.source, r.line = t, r.column = A, r.source = q, !V.silent) throw r
  }

  function c(i) {
    var r = i.exec(q);
    if (r) {
      var l = r[0];
      return e(l), q = q.slice(l.length), r
    }
  }

  function a() {
    c(pq)
  }

  function u(i) {
    var r;
    for (i = i || []; r = f();) r !== !1 && i.push(r);
    return i
  }

  function f() {
    var i = n();
    if (!(U != q.charAt(0) || W != q.charAt(1))) {
      for (var r = 2; m != q.charAt(r) && (W != q.charAt(r) || U != q.charAt(r + 1));) ++r;
      if (r += 2, m === q.charAt(r - 1)) return s("End of comment missing");
      var l = q.slice(2, r - 2);
      return A += 2, e(l), q = q.slice(r), A += 2, i({
        type: hq,
        comment: l
      })
    }
  }

  function p() {
    var i = n(),
      r = c(dq);
    if (r) {
      if (f(), !c(gq)) return s("property missing ':'");
      var l = c(mq),
        j = i({
          type: Bq,
          property: J(r[0].replace(P, m)),
          value: l ? J(l[0].replace(P, m)) : m
        });
      return c(Eq), j
    }
  }

  function d() {
    var i = [];
    u(i);
    for (var r; r = p();) r !== !1 && (i.push(r), u(i));
    return i
  }
  return a(), d()
}

function J(q) {
  return q ? q.replace(wq, m) : m
}

function bq(q, V) {
  let t = null;
  if (!q || typeof q != "string") return t;
  const A = Mq(q),
    e = typeof V == "function";
  return A.forEach(n => {
    if (n.type !== "declaration") return;
    const {
      property: o,
      value: s
    } = n;
    e ? V(o, s, n) : s && (t = t || {}, t[o] = s)
  }), t
}
const Tq = /\d/,
  vq = ["-", "_", "/", "."];

function Dq(q = "") {
  if (!Tq.test(q)) return q !== q.toLowerCase()
}

function Sq(q) {
  const V = [];
  let t = "",
    A, e;
  for (const n of q) {
    const o = vq.includes(n);
    if (o === !0) {
      V.push(t), t = "", A = void 0;
      continue
    }
    const s = Dq(n);
    if (e === !1) {
      if (A === !1 && s === !0) {
        V.push(t), t = n, A = s;
        continue
      }
      if (A === !0 && s === !1 && t.length > 1) {
        const c = t.at(-1);
        V.push(t.slice(0, Math.max(0, t.length - 1))), t = c + n, A = s;
        continue
      }
    }
    t += n, A = s, e = o
  }
  return V.push(t), V
}

function Q(q) {
  return q ? Sq(q).map(V => Iq(V)).join("") : ""
}

function Yq(q) {
  return Gq(Q(q || ""))
}

function Iq(q) {
  return q ? q[0].toUpperCase() + q.slice(1) : ""
}

function Gq(q) {
  return q ? q[0].toLowerCase() + q.slice(1) : ""
}

function v(q) {
  if (!q) return {};
  const V = {};

  function t(A, e) {
    if (A.startsWith("-moz-") || A.startsWith("-webkit-") || A.startsWith("-ms-") || A.startsWith("-o-")) {
      V[Q(A)] = e;
      return
    }
    if (A.startsWith("--")) {
      V[A] = e;
      return
    }
    V[Yq(A)] = e
  }
  return bq(q, t), V
}

function xq(...q) {
  return (...V) => {
    for (const t of q) typeof t == "function" && t(...V)
  }
}

function Lq(q, V) {
  const t = RegExp(q, "g");
  return A => {
    if (typeof A != "string") throw new TypeError(`expected an argument of type string, but got ${typeof A}`);
    return A.match(t) ? A.replace(t, V) : A
  }
}
const kq = Lq(/[A-Z]/, q => `-${q.toLowerCase()}`);

function Cq(q) {
  if (!q || typeof q != "object" || Array.isArray(q)) throw new TypeError(`expected an argument of type object, but got ${typeof q}`);
  return Object.keys(q).map(V => `${kq(V)}: ${q[V]};`).join(`
`)
}

function Pq(q = {}) {
  return Cq(q).replace(`
`, " ")
}
const Uq = ["onabort", "onanimationcancel", "onanimationend", "onanimationiteration", "onanimationstart", "onauxclick", "onbeforeinput", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncompositionend", "oncompositionstart", "oncompositionupdate", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onfocusin", "onfocusout", "onformdata", "ongotpointercapture", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onlostpointercapture", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onpaste", "onpause", "onplay", "onplaying", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onscrollend", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onselectionchange", "onselectstart", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "ontransitioncancel", "ontransitionend", "ontransitionrun", "ontransitionstart", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel"],
  Wq = new Set(Uq);

function Jq(q) {
  return Wq.has(q)
}

function iV(...q) {
  const V = {
    ...q[0]
  };
  for (let t = 1; t < q.length; t++) {
    const A = q[t];
    if (A) {
      for (const e of Object.keys(A)) {
        const n = V[e],
          o = A[e],
          s = typeof n == "function",
          c = typeof o == "function";
        if (s && Jq(e)) {
          const a = n,
            u = o;
          V[e] = lq(a, u)
        } else if (s && c) V[e] = xq(n, o);
        else if (e === "class") {
          const a = I(n),
            u = I(o);
          a && u ? V[e] = S(n, o) : a ? V[e] = S(n) : u && (V[e] = S(o))
        } else if (e === "style") {
          const a = typeof n == "object",
            u = typeof o == "object",
            f = typeof n == "string",
            p = typeof o == "string";
          if (a && u) V[e] = {
            ...n,
            ...o
          };
          else if (a && p) {
            const d = v(o);
            V[e] = {
              ...n,
              ...d
            }
          } else if (f && u) {
            const d = v(n);
            V[e] = {
              ...d,
              ...o
            }
          } else if (f && p) {
            const d = v(n),
              i = v(o);
            V[e] = {
              ...d,
              ...i
            }
          } else a ? V[e] = n : u ? V[e] = o : f ? V[e] = n : p && (V[e] = o)
        } else V[e] = o !== void 0 ? o : n
      }
      for (const e of Object.getOwnPropertySymbols(A)) {
        const n = V[e],
          o = A[e];
        V[e] = o !== void 0 ? o : n
      }
    }
  }
  return typeof V.style == "object" && (V.style = Pq(V.style).replaceAll(`
`, " ")), V.hidden === !1 && (V.hidden = void 0, delete V.hidden), V.disabled === !1 && (V.disabled = void 0, delete V.disabled), V
}
const Nq = typeof window < "u" ? window : void 0;

function zq(q) {
  let V = q.activeElement;
  for (; V != null && V.shadowRoot;) {
    const t = V.shadowRoot.activeElement;
    if (t === V) break;
    V = t
  }
  return V
}
var E, M;
class Qq {
  constructor(V = {}) {
    y(this, E);
    y(this, M);
    const {
      window: t = Nq,
      document: A = t == null ? void 0 : t.document
    } = V;
    t !== void 0 && (h(this, E, A), h(this, M, X(e => {
      const n = C(t, "focusin", e),
        o = C(t, "focusout", e);
      return () => {
        n(), o()
      }
    })))
  }
  get current() {
    var V;
    return (V = g(this, M)) == null || V.call(this), g(this, E) ? zq(g(this, E)) : null
  }
}
E = new WeakMap, M = new WeakMap;
new Qq;

function Fq(q, V) {
  switch (q) {
    case "post":
      Vq(V);
      break;
    case "pre":
      qq(V);
      break
  }
}

function F(q, V, t, A = {}) {
  const {
    lazy: e = !1
  } = A;
  let n = !e,
    o = Array.isArray(q) ? [] : void 0;
  Fq(V, () => {
    const s = Array.isArray(q) ? q.map(a => a()) : q();
    if (!n) {
      n = !0, o = s;
      return
    }
    const c = Y(() => t(s, o));
    return o = s, c
  })
}

function jq(q, V, t) {
  F(q, "post", V, t)
}

function Rq(q, V, t) {
  F(q, "pre", V, t)
}
jq.pre = Rq;

function sV(q, V) {
  return {
    [tq()]: t => uq(q) ? (q.current = t, Y(() => V == null ? void 0 : V(t)), () => {
      "isConnected" in t && t.isConnected || (q.current = null, V == null || V(null))
    }) : (q(t), Y(() => V == null ? void 0 : V(t)), () => {
      "isConnected" in t && t.isConnected || (q(null), V == null || V(null))
    })
  }
}

function aV(q) {
  return q ? "true" : "false"
}

function cV(q) {
  return q ? "" : void 0
}

function uV(q) {
  return q ? !0 : void 0
}
var w, b;
class Zq {
  constructor(V) {
    y(this, w);
    y(this, b);
    L(this, "attrs");
    h(this, w, V.getVariant ? V.getVariant() : null), h(this, b, g(this, w) ? `data-${g(this,w)}-` : `data-${V.component}-`), this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(V.parts.map(t => [t, this.getAttr(t)]))
  }
  getAttr(V, t) {
    return t ? `data-${t}-${V}` : `${g(this,b)}${V}`
  }
  selector(V, t) {
    return `[${this.getAttr(V,t)}]`
  }
}
w = new WeakMap, b = new WeakMap;

function lV(q) {
  const V = new Zq(q);
  return {
    ...V.attrs,
    selector: V.selector,
    getAttr: V.getAttr
  }
}

function fV() {}

function pV(q, V) {
  return `bits-${q}`
}
const B = {
  hour: 3600 * 1e3,
  min: 60 * 1e3,
  sec: 1e3
};

function dV(q) {
  const V = Math.floor(q / B.hour);
  q -= V * B.hour;
  const t = Math.floor(q / B.min);
  q -= t * B.min;
  const e = Math.floor(q / B.sec).toString().padStart(2, "0");
  return V > 0 ? `${V}:${t.toString().padStart(2,"0")}:${e}` : `${t}:${e}`
}

function gV(q) {
  const V = q.getFullYear(),
    t = String(q.getMonth() + 1).padStart(2, "0"),
    A = String(q.getDate()).padStart(2, "0"),
    e = String(q.getHours()).padStart(2, "0"),
    n = String(q.getMinutes()).padStart(2, "0"),
    o = String(q.getSeconds()).padStart(2, "0");
  return `${V}-${t}-${A} ${e}:${n}:${o}`
}

function mV(q) {
  return q && q.__esModule && Object.prototype.hasOwnProperty.call(q, "default") ? q.default : q
}

function EV(q, {
  interval: V,
  maxRetries: t = 3,
  retryDelay: A = 1e3,
  immediate: e = !1
}) {
  let n = null,
    o = !1,
    s = !1,
    c = !1;
  const a = () => typeof document > "u" || document.visibilityState === "visible";
  async function u() {
    if (!(c || s)) {
      if (!a()) {
        o = !0;
        return
      }
      o = !1, s = !0;
      try {
        for (let p = 0; p <= t; p++) {
          if (c) return;
          if (!a()) {
            o = !0;
            return
          }
          try {
            await q();
            return
          } catch (d) {
            if (p === t) {
              console.error("reliableInterval: giving up after retries", d);
              return
            }
            await new Promise(i => setTimeout(i, A))
          }
        }
      } finally {
        s = !1, o && a() && !c && u()
      }
    }
  }

  function f() {
    a() && o && !s && u()
  }
  return typeof document < "u" && document.addEventListener("visibilitychange", f), e && u(), n = setInterval(() => {
    s || !a() ? o = !0 : u()
  }, V), () => {
    c = !0, n && clearInterval(n), typeof document < "u" && document.removeEventListener("visibilitychange", f)
  }
}
export {
  $q as A, B as T, sV as a, oV as b, uV as c, lV as d, pV as e, dV as f, mV as g, eV as h, aq as i, VV as j, Pq as k, aV as l, iV as m, fV as n, cV as o, tV as p, gV as q, EV as r, rV as s, nV as t, qV as u, AV as v, jq as w
};