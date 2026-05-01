var H = Object.defineProperty;
var U = q => {
  throw TypeError(q)
};
var _ = (q, V, t) => V in q ? H(q, V, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : q[V] = t;
var W = (q, V, t) => _(q, typeof V != "symbol" ? V + "" : V, t),
  z = (q, V, t) => V.has(q) || U("Cannot " + t);
var f = (q, V, t) => (z(q, V, "read from private field"), t ? t.call(q) : V.get(q)),
  p = (q, V, t) => V.has(q) ? U("Cannot add the same private member more than once") : V instanceof WeakSet ? V.add(q) : V.set(q, t),
  y = (q, V, t, e) => (z(q, V, "write to private field"), e ? e.call(q, t) : V.set(q, t), t);
import {
  T as $,
  k as qq
} from "./CrPq4ZAu.js";
import {
  bA as Vq,
  e as Y,
  i as I,
  h as L,
  g as tq,
  u as eq,
  bK as N,
  at as nq,
  q as Aq,
  A as G
} from "./BC180BoF.js";
import {
  i as S
} from "./Bbytcfj7.js";
import {
  c as oq
} from "./CpsyGtAr.js";

function rq() {
  return Symbol(Vq)
}
const iq = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAEAAAHPAB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn6pqampqampqampqampqampqampqampqamp29vb29vb29vb29vb29vb29vb29vb29vb2/////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJANgAAAAAAAABzxmm4psAAAAAAD/+8DEAAAF7A1FtDAAIzil6D87kgAAAktuqNu7gOcCAAgEATB8HzcHwfB8+DgIROD4ABAEAQOeCH/iAMXLB9//BB3Lg+AAIgJwBCSoyQ0QES1dNwAYhicYDAiarL8aXE4ZXwYe9BkCgLS/Dg4MKQDMkgCjAiAxujyCQPmFYGBApKtkawq2qi9GqTYgLTpFiGdI9O1D5NmvVykb4Q0iC3QOU5rUBLCQ9IoJWFutwdm2v5UmUWmoy2K9QxuXw5RxuOwA2j2ytp2dZrWp2A2/kMupbmC5HKc2et0mbjSyeld35/luxXs97SW4/JJiln38v54TdWITN+nq3a1Pq93WW/3/vNLLf/////K6sDGP////6PvWxQBFoFJABHMZRCBoQGHo/GW6NG17vGW1Zm25xgoZkkHEXiCgHb9v4bi8evlnFw5BStnezI76WTtDaVvOnLL8s9+1t95y7trVqdf0zfXXtpb2dzNrj94XquvZ0M/NLX6l+vktgwC4jICYwfNAuho0IiQuj////9r102AEMKOmGkMYagJIsBaYDIChgOgJiENow+wojIdUMMSQEYSBUTMZQb0o8Sk0SAjR1t5HOrfQNex7cq0ENSD4pyGX7X0xZTZxIYcKtF3mZptVyMvMJudNbJV6UKXY/pfr32nNn0c5rcEZq6nJYnCORDbENctTk5KWZdS63RUTWFzZVbMV3mt6vHJyziusGx5zczaCWWIN////qcOYSSNcFwyUIAAjtY6tsg5hoaQgzCTEAExUCDBozfYO8qSY3T3MLBgMXFAyoIjSiUtF/0DIhCIBgG52VxKVSh3n1s08dh16HvYXJ8JdlBMxTY839i3jR8vtSlsKfeK0NnC/nM0tLW7FK8/Tyq3KYLswxTDQEYZQZBHdQsioRGajdWcNkfpNOahWTpUJEDyc9LCQ0gcfR2T8/////////2zGWVnTPOpjElOJxIKDcdxGcttHMdDk5//7cMTkAA8Uz0Nd1gAigaJm6eyxPIZMDGR0PEgIGrR49MVAZAmYoKJjqJJImBhKP02+o9Jznif5eVT2eHC0ysbdDWHcRBDdQtNsGHz5fw8l282p0U6XSlewoyfTz751qsNZZnm32XJ+unFUNjmoX7ZOpHcZdMd7QbwNu3WpMQZplTGVCmaoMR34247bm1mKtcK2aK+iQ4ivzjUezP///5geOSUMiJ4hUgCgC0K1WiCQN8vbLG0AQADBIlTNsRCYEzAEsjEodxELxqxP5Q/JrC1wBDIwZKExnLAxQW8x7DEIOswwBYw/DkUH4DcJwDDAHaJgbsOBr7QGlBha6NwBiCDcgQQAxYAIUQGBKBYuBJEAcWJEnQDE4pIly4MoYoqAEDCUAPQRAxqkAJ5GoBgyB4RikbLIcbhtIX7/+4DE6YAUZaM7rZheonoiZ3a28ASIsGAgt7D+AWIjkDSGWD0hfqSddyAgLAQ5QaQn8QDHWOoB4AMjh6g6BZYagtVSTqMjpBSeF6RccsrkVJwiZEC0VjA1cjv+xgbI/0TEwQN0GdBn///9q1N/9v//0/VsitLemubODxzX2KfBVKuK49NlTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7YMT0gCAhwyP52gAIAAA/w4AABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
  sq = "data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7QMTxA9NhPR3sPM5AAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",
  aq = "" + new URL("../assets/notification.CPyrWqU1.mp3", import.meta.url).href,
  cq = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAADAAAHVgCKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioru7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7///////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAUQAAAAAAAAB1ZvGw9zAAAAAAD/+9DEAAAGgANNtBAAJL5DKPc9kEkIAKVy6ZvTvjNiAEAQA4fwcOKBAED85LicHw/BAEHfg+D4f/B8Hwf/Ococ/lz//4P//lwfAAAQCzgEApUAchBICAMDwGwwpg3jDHA2MWkaAxCQqDAjBQMMoFYwVgLDCrX1NfwPQxajfTO/VkEYD4sAuYOwYBgPgBGmQOAYIgDoKER8AN4KNYgISnpehHt0X2WsksoO27zM1duB3IgimTpnXNwTefFr9ly4HYK1lgtE8a3uVY23SCpDEpz4xL3DZVTV8ZygdeB4X+GuX6sTh9sVNAzuwVTIUztBdnLL60VnPsrt8f+fw/LCUy2caLDNmzuzGatmcu97UsVIYilyxqUcpaSPSW63KzZucjnakuzw+zlc5nD7yfL5zPv59z7/dQ9EolEu9pf5V1Y1+7Eayl1qkt8rXLGdi5nz//////////////////9/r9dw1l39/+P73/7////rWr1PdwxvJCIEbNPJ1QmAABaCxKJEmLpurTGDFSAYMB0FQxfggyqAeYtYSphnAwmFmBIYTATyaZhFiAGFIEqY0hJ5wAIxmFKCgaFaihh9A1GSlMSJYunOGWWB6pdsMvN5kqIig49MYApkLhJxyjmgkA1gIGDp1/CEIOLNkht0Ag8+NWKWQOW+aivhGVsj00TCW4CiJWJKkYRECshrDX0vHCHosi1cqERxakomvtDHA2TIAyjt52yUsMz8EMpZDLYdbq3V0XSRtfmhWkyaFM+YpBSrxQBAx03pQHPND6exc0OKEQq3lvKqM9hSCVHlv0yVdJhNZf+1Nx2GYZbqxt2qLJ9GC00ETr2vY+tmMTrOqWWTEkkUeh27PYQFIWX0rcGmtAswPXlLzWp6IVZe/ssk8FZ02r16Xdz3hTwPHJu3DEos63dr2927GPfz3+sM+93/63n3u//D///3nv9/rX71v97/PHuGWv7z/1Uo+X7tNTZ91XyoaWnob1bs9Yp86oQUCZIAAwEB7VQIuyrSQANCQ2GhZMQQ4MOCHMFxAMRwkMAxlMHzDM9QQMAxabsYLC+aWdScYCCZCoabxBOZSGWZcE2FB0xAuPp4zhWswUOJAsxAQMFDR4qN//vAxOUALmI5MbnsgE1xwGT3O7ABhADArk1MFMSD0qUALTCIVTNZ6aumhCoZWXmZixYEi2Kiy35BH02oFLPGCg7rCgQDQYw4ZYE5yE1rTPX1YekYKAYsD1hgHKA0ZBWZkQVFFhX2gNE3fFvt411kDPlAE5BAAMrWnKUzkdUQ4GcKFNJrQ1beZZDA2TyBhzsLNlCcxIeBUAMBCRkBamhsy15MFpJFZV1ovs/V/u78Uh+bo5dMT3L0lpqC3Wi9mVXpPlvn5TNa1Vyq409e/b1XvY/9bHmF3O1dwt2u5ZY444Y8q2a2Ou5Zd/GzvHV7tu/cx5fzv587Xua5ewz1n3+91X/LPesO2M9Zb7c5n3eOHcb+5KDXnf0F87HySsMMMAEIAAAwaBkBfgCqAAS3goeAwxXwM3QBieI+IEf/E3Ckh6ID/mLENJk99YSErPrb/4uVDX/7Vo/+KKI1///VTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+yDE4AAIHGcJGUmAAAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",
  uq = "data:audio/mpeg;base64,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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xDE1gPAAAGkHAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
  lq = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAE/gDLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//////////////////////////////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAOoAAAAAAAABP6u4u+sAAAAAAD/+9DEAAAGhC1UdGMAJM1C6nc34FFSaWP+7vYBAAEOAAiHPJp6YAwtNgQl3qDHKBgo4Th/wf/Lh/8H35R3/4IAg7//gh/+UOcPgABgAAAB0YnM2TIZDUkAGYOFBdqBQkadAmEAgiDTKD1BYUFTGA4LixoJUcUsGkDJrfwYKEmBDRg+gZmBSBeYUQyJj2B9mAOAkYXINwOA3cdvzIrBtMDwFYOAEMZhFcyRwWTDiAGWo/LzSFp7vtDTSQ3bHKocXbPR6kg2U07Vs4KcJaDIIGTHZxDsSjEMyhPing6w8PSYAlwHfdtbFq3lAc1qmqzPxFFV1cbUkrP9GG/cbKIyivlRWq1mzvHDWNad73eE7q3JYPnIerXqKJTtzV3DmUzLZZFM7sv1z9U8czh5wVG4G3nru8cfyy+rhT5TtHTb7jzd3eWO6Wmy3R3e6/DW9b5l/b9e5///87///eY////9///////Df7/8vx/Xf///9f///52O6s3rZINILq82aqo6x1TAYDoYGInIIhASA++E8wYSIkIBd0NdJXDHQL2vFAR4YOsgwGFK6QQiPQDhcITBl4MWgDBEAosgZUgoDGkAwGFAMCCEDEQVAwaOgMChwEQXAwUBg5MTgJcAwARZxBj4Ng0LAigBGYdKKwKBIeIQDHCyhWxMlUmTx0xUCgJFBjnkGFkpk0ZF4gSLLRZJKGARbBQAsZDCCFAhxianDEuspVXRkOUWCGGCYsxZiXa0Ukl/8XOS4vxxjrDJR7RLyeiisxJn//y+11pJqNycOJkgiapIoo0UdS0dL//sUjzHxMgBgMUtVdLRYGrKTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tgxOMAHVGjN7magIAAADSDgAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
  cV = fq();

function fq() {
  const q = {
    plop: new Audio(cq),
    smallPlop: new Audio(lq),
    bigPlop: new Audio(iq),
    smallDropplet: new Audio(uq),
    droppletAndPlop: new Audio(sq),
    notification1: new Audio(aq)
  };
  for (const V of Object.values(q)) V.preload = "auto", V.volume = .3;
  return q
}

function dq(q) {
  return Math.floor(Math.random() * q)
}
const k = 14.5;
async function uV() {
  const q = wq();
  if (q) return q;
  try {
    if ((await navigator.permissions.query({
        name: "geolocation"
      })).state === "granted") {
      const t = await new Promise((e, n) => navigator.geolocation.getCurrentPosition(A => e(A), A => n(A)));
      return {
        lat: t.coords.latitude,
        lng: t.coords.longitude,
        zoom: k
      }
    }
  } catch (V) {
    console.error(V)
  }
  return {
    ...pq().pos,
    zoom: k
  }
}

function pq() {
  const q = Object.entries(gq),
    V = dq(q.length),
    [t, e] = q[V];
  return {
    city: t,
    pos: e
  }
}
const gq = {
    tokyo: {
      lat: 35.677545560719665,
      lng: 139.76394445809638
    },
    paris: {
      lat: 48.8537151734952,
      lng: 2.3484026030630787
    },
    newYork: {
      lat: 40.71283173786517,
      lng: -74.00599771376795
    },
    saoPaulo: {
      lat: -23.550584064565356,
      lng: -46.63339720713918
    },
    sydney: {
      lat: -33.86943325619071,
      lng: 151.2083447239608
    }
  },
  R = "location";

function mq(q, V) {
  localStorage.setItem(R, JSON.stringify({
    ...q,
    zoom: V
  }))
}

function wq() {
  const q = localStorage.getItem(R);
  if (!q) return;
  const V = JSON.parse(q);
  return V.zoom ?? (V.zoom = k), V
}

function lV(q) {
  return q.lat >= -90 && q.lat <= 90 && q.lng >= -180 && q.lng <= 180
}
var v, B;
class Eq {
  constructor() {
    p(this, v, Y(-1));
    p(this, B, Y([]))
  }
  get idx() {
    return I(f(this, v))
  }
  set idx(V) {
    L(f(this, v), V, !0)
  }
  get entries() {
    return I(f(this, B))
  }
  set entries(V) {
    L(f(this, B), V)
  }
  hasNext() {
    return this.idx < this.entries.length - 1
  }
  goToNext(V) {
    const t = this.idx + 1,
      e = this.entries[t];
    e && (this.idx = t, V.flyTo({
      center: e.pos,
      zoom: e.zoom
    }))
  }
  hasPrev() {
    return this.idx > 0
  }
  goToPrev(V) {
    const t = this.idx - 1,
      e = this.entries[t];
    e && (this.idx = t, V.flyTo({
      center: e.pos,
      zoom: e.zoom
    }))
  }
  isEmpty() {
    return this.entries.length === 0
  }
  push(V) {
    this.idx = this.idx + 1, this.entries = [...this.entries.slice(0, this.idx), V]
  }
}
v = new WeakMap, B = new WeakMap;
const fV = new Eq;

function hq() {
  return window.matchMedia("(display-mode: standalone)").matches || "standalone" in window.navigator && window.navigator.standalone === !0
}

function dV() {
  const q = "last-unfocus",
    V = new AbortController;
  if (hq()) {
    const t = () => {
        const n = localStorage.getItem(q);
        if (n) {
          const A = parseInt(n, 10);
          Date.now() - A > 5 * $.minute && window.location.reload()
        }
      },
      e = () => {
        localStorage.setItem(q, Date.now().toString());
        const n = qq.map;
        if (n) {
          const A = n.getCenter(),
            o = n.getZoom();
          mq(A, o)
        }
      };
    document.addEventListener("visibilitychange", () => {
      document.visibilityState === "visible" ? t() : e()
    }, {
      signal: V.signal
    }), window.addEventListener("pageshow", t, {
      signal: V.signal
    }), window.addEventListener("pagehide", e, {
      signal: V.signal
    })
  }
  return () => {
    V.abort()
  }
}
let P;

function pV(q) {
  return P = q, T({
    type: "previewPixels",
    data: q
  })
}

function gV() {
  return P = void 0, T({
    type: "clearPixelPreview"
  })
}

function mV(q) {
  return T({
    type: "paintPixels",
    data: q
  })
}

function wV() {
  return T({
    type: "refreshPixelArt"
  })
}
async function EV() {
  P || await T({
    type: "clearPixelPreview"
  })
}

function T(q) {
  const V = Math.random(),
    t = {
      ...q,
      id: V
    };
  return new Promise((e, n) => {
    try {
      const A = navigator.serviceWorker;
      A || n(new Error("Service Workers are not supported/enabled in your browser. Some features might not work properly."));
      const o = a => {
        var c;
        ((c = a.data) == null ? void 0 : c.id) === V && (e(void 0), A.removeEventListener("message", o))
      };
      A.addEventListener("message", o);
      const i = navigator.serviceWorker.controller;
      i ? i.postMessage(t) : navigator.serviceWorker.ready.then(a => {
        const c = a.active;
        c ? c == null || c.postMessage(t) : n(new Error("Service worker registration not active"))
      })
    } catch (A) {
      n(A)
    }
  })
}

function hV({
  pixel: q,
  season: V,
  tile: t
}) {
  return `t=(${t[0]},${t[1]});p=(${q[0]},${q[1]});s=${V}`
}

function yq(q) {
  return q !== null && typeof q == "object"
}
const vq = ["string", "number", "bigint", "boolean"];

function C(q) {
  return q == null || vq.includes(typeof q) ? !0 : Array.isArray(q) ? q.every(V => C(V)) : typeof q == "object" ? Object.getPrototypeOf(q) === Object.prototype : !1
}
const x = Symbol("box"),
  Z = Symbol("is-writable");

function yV(q, V) {
  const t = eq(q);
  return V ? {
    [x]: !0,
    [Z]: !0,
    get current() {
      return I(t)
    },
    set current(e) {
      V(e)
    }
  } : {
    [x]: !0,
    get current() {
      return q()
    }
  }
}

function Bq(q) {
  return yq(q) && x in q
}

function vV(q) {
  let V = Y(tq(q));
  return {
    [x]: !0,
    [Z]: !0,
    get current() {
      return I(V)
    },
    set current(t) {
      L(V, t, !0)
    }
  }
}

function bq(...q) {
  return function(V) {
    var t;
    for (const e of q)
      if (e) {
        if (V.defaultPrevented) return;
        typeof e == "function" ? e.call(this, V) : (t = e.current) == null || t.call(this, V)
      }
  }
}
var J = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  Mq = /\n/g,
  Tq = /^\s*/,
  Dq = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  Iq = /^:\s*/,
  xq = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  Sq = /^[;\s]*/,
  Yq = /^\s+|\s+$/g,
  Lq = `
`,
  Q = "/",
  F = "*",
  g = "",
  Gq = "comment",
  kq = "declaration";

function Cq(q, V) {
  if (typeof q != "string") throw new TypeError("First argument must be a string");
  if (!q) return [];
  V = V || {};
  var t = 1,
    e = 1;

  function n(s) {
    var r = s.match(Mq);
    r && (t += r.length);
    var l = s.lastIndexOf(Lq);
    e = ~l ? s.length - l : e + s.length
  }

  function A() {
    var s = {
      line: t,
      column: e
    };
    return function(r) {
      return r.position = new o(s), c(), r
    }
  }

  function o(s) {
    this.start = s, this.end = {
      line: t,
      column: e
    }, this.source = V.source
  }
  o.prototype.content = q;

  function i(s) {
    var r = new Error(V.source + ":" + t + ":" + e + ": " + s);
    if (r.reason = s, r.filename = V.source, r.line = t, r.column = e, r.source = q, !V.silent) throw r
  }

  function a(s) {
    var r = s.exec(q);
    if (r) {
      var l = r[0];
      return n(l), q = q.slice(l.length), r
    }
  }

  function c() {
    a(Tq)
  }

  function u(s) {
    var r;
    for (s = s || []; r = m();) r !== !1 && s.push(r);
    return s
  }

  function m() {
    var s = A();
    if (!(Q != q.charAt(0) || F != q.charAt(1))) {
      for (var r = 2; g != q.charAt(r) && (F != q.charAt(r) || Q != q.charAt(r + 1));) ++r;
      if (r += 2, g === q.charAt(r - 1)) return i("End of comment missing");
      var l = q.slice(2, r - 2);
      return e += 2, n(l), q = q.slice(r), e += 2, s({
        type: Gq,
        comment: l
      })
    }
  }

  function h() {
    var s = A(),
      r = a(Dq);
    if (r) {
      if (m(), !a(Iq)) return i("property missing ':'");
      var l = a(xq),
        O = s({
          type: kq,
          property: j(r[0].replace(J, g)),
          value: l ? j(l[0].replace(J, g)) : g
        });
      return a(Sq), O
    }
  }

  function d() {
    var s = [];
    u(s);
    for (var r; r = h();) r !== !1 && (s.push(r), u(s));
    return s
  }
  return c(), d()
}

function j(q) {
  return q ? q.replace(Yq, g) : g
}

function Pq(q, V) {
  let t = null;
  if (!q || typeof q != "string") return t;
  const e = Cq(q),
    n = typeof V == "function";
  return e.forEach(A => {
    if (A.type !== "declaration") return;
    const {
      property: o,
      value: i
    } = A;
    n ? V(o, i, A) : i && (t = t || {}, t[o] = i)
  }), t
}
const Uq = /\d/,
  Wq = ["-", "_", "/", "."];

function zq(q = "") {
  if (!Uq.test(q)) return q !== q.toLowerCase()
}

function Nq(q) {
  const V = [];
  let t = "",
    e, n;
  for (const A of q) {
    const o = Wq.includes(A);
    if (o === !0) {
      V.push(t), t = "", e = void 0;
      continue
    }
    const i = zq(A);
    if (n === !1) {
      if (e === !1 && i === !0) {
        V.push(t), t = A, e = i;
        continue
      }
      if (e === !0 && i === !1 && t.length > 1) {
        const a = t.at(-1);
        V.push(t.slice(0, Math.max(0, t.length - 1))), t = a + A, e = i;
        continue
      }
    }
    t += A, e = i, n = o
  }
  return V.push(t), V
}

function K(q) {
  return q ? Nq(q).map(V => Qq(V)).join("") : ""
}

function Jq(q) {
  return Fq(K(q || ""))
}

function Qq(q) {
  return q ? q[0].toUpperCase() + q.slice(1) : ""
}

function Fq(q) {
  return q ? q[0].toLowerCase() + q.slice(1) : ""
}

function D(q) {
  if (!q) return {};
  const V = {};

  function t(e, n) {
    if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
      V[K(e)] = n;
      return
    }
    if (e.startsWith("--")) {
      V[e] = n;
      return
    }
    V[Jq(e)] = n
  }
  return Pq(q, t), V
}

function jq(...q) {
  return (...V) => {
    for (const t of q) typeof t == "function" && t(...V)
  }
}

function Rq(q, V) {
  const t = RegExp(q, "g");
  return e => {
    if (typeof e != "string") throw new TypeError(`expected an argument of type string, but got ${typeof e}`);
    return e.match(t) ? e.replace(t, V) : e
  }
}
const Zq = Rq(/[A-Z]/, q => `-${q.toLowerCase()}`);

function Kq(q) {
  if (!q || typeof q != "object" || Array.isArray(q)) throw new TypeError(`expected an argument of type object, but got ${typeof q}`);
  return Object.keys(q).map(V => `${Zq(V)}: ${q[V]};`).join(`
`)
}

function Xq(q = {}) {
  return Kq(q).replace(`
`, " ")
}
const Oq = ["onabort", "onanimationcancel", "onanimationend", "onanimationiteration", "onanimationstart", "onauxclick", "onbeforeinput", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncompositionend", "oncompositionstart", "oncompositionupdate", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onfocusin", "onfocusout", "onformdata", "ongotpointercapture", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onlostpointercapture", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onpaste", "onpause", "onplay", "onplaying", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onscrollend", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onselectionchange", "onselectstart", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "ontransitioncancel", "ontransitionend", "ontransitionrun", "ontransitionstart", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel"],
  Hq = new Set(Oq);

function _q(q) {
  return Hq.has(q)
}

function BV(...q) {
  const V = {
    ...q[0]
  };
  for (let t = 1; t < q.length; t++) {
    const e = q[t];
    if (e) {
      for (const n of Object.keys(e)) {
        const A = V[n],
          o = e[n],
          i = typeof A == "function",
          a = typeof o == "function";
        if (i && _q(n)) {
          const c = A,
            u = o;
          V[n] = bq(c, u)
        } else if (i && a) V[n] = jq(A, o);
        else if (n === "class") {
          const c = C(A),
            u = C(o);
          c && u ? V[n] = S(A, o) : c ? V[n] = S(A) : u && (V[n] = S(o))
        } else if (n === "style") {
          const c = typeof A == "object",
            u = typeof o == "object",
            m = typeof A == "string",
            h = typeof o == "string";
          if (c && u) V[n] = {
            ...A,
            ...o
          };
          else if (c && h) {
            const d = D(o);
            V[n] = {
              ...A,
              ...d
            }
          } else if (m && u) {
            const d = D(A);
            V[n] = {
              ...d,
              ...o
            }
          } else if (m && h) {
            const d = D(A),
              s = D(o);
            V[n] = {
              ...d,
              ...s
            }
          } else c ? V[n] = A : u ? V[n] = o : m ? V[n] = A : h && (V[n] = o)
        } else V[n] = o !== void 0 ? o : A
      }
      for (const n of Object.getOwnPropertySymbols(e)) {
        const A = V[n],
          o = e[n];
        V[n] = o !== void 0 ? o : A
      }
    }
  }
  return typeof V.style == "object" && (V.style = Xq(V.style).replaceAll(`
`, " ")), V.hidden === !1 && (V.hidden = void 0, delete V.hidden), V.disabled === !1 && (V.disabled = void 0, delete V.disabled), V
}
const $q = typeof window < "u" ? window : void 0;

function qV(q) {
  let V = q.activeElement;
  for (; V != null && V.shadowRoot;) {
    const t = V.shadowRoot.activeElement;
    if (t === V) break;
    V = t
  }
  return V
}
var w, b;
class VV {
  constructor(V = {}) {
    p(this, w);
    p(this, b);
    const {
      window: t = $q,
      document: e = t == null ? void 0 : t.document
    } = V;
    t !== void 0 && (y(this, w, e), y(this, b, oq(n => {
      const A = N(t, "focusin", n),
        o = N(t, "focusout", n);
      return () => {
        A(), o()
      }
    })))
  }
  get current() {
    var V;
    return (V = f(this, b)) == null || V.call(this), f(this, w) ? qV(f(this, w)) : null
  }
}
w = new WeakMap, b = new WeakMap;
new VV;

function tV(q, V) {
  switch (q) {
    case "post":
      Aq(V);
      break;
    case "pre":
      nq(V);
      break
  }
}

function X(q, V, t, e = {}) {
  const {
    lazy: n = !1
  } = e;
  let A = !n,
    o = Array.isArray(q) ? [] : void 0;
  tV(V, () => {
    const i = Array.isArray(q) ? q.map(c => c()) : q();
    if (!A) {
      A = !0, o = i;
      return
    }
    const a = G(() => t(i, o));
    return o = i, a
  })
}

function eV(q, V, t) {
  X(q, "post", V, t)
}

function nV(q, V, t) {
  X(q, "pre", V, t)
}
eV.pre = nV;

function bV(q, V) {
  return {
    [rq()]: t => Bq(q) ? (q.current = t, G(() => V == null ? void 0 : V(t)), () => {
      "isConnected" in t && t.isConnected || (q.current = null, V == null || V(null))
    }) : (q(t), G(() => V == null ? void 0 : V(t)), () => {
      "isConnected" in t && t.isConnected || (q(null), V == null || V(null))
    })
  }
}

function MV(q) {
  return q ? "true" : "false"
}

function TV(q) {
  return q ? "" : void 0
}

function DV(q) {
  return q ? !0 : void 0
}
var E, M;
class AV {
  constructor(V) {
    p(this, E);
    p(this, M);
    W(this, "attrs");
    y(this, E, V.getVariant ? V.getVariant() : null), y(this, M, f(this, E) ? `data-${f(this,E)}-` : `data-${V.component}-`), this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(V.parts.map(t => [t, this.getAttr(t)]))
  }
  getAttr(V, t) {
    return t ? `data-${t}-${V}` : `${f(this,M)}${V}`
  }
  selector(V, t) {
    return `[${this.getAttr(V,t)}]`
  }
}
E = new WeakMap, M = new WeakMap;

function IV(q) {
  const V = new AV(q);
  return {
    ...V.attrs,
    selector: V.selector,
    getAttr: V.getAttr
  }
}

function xV() {}

function SV(q, V) {
  return `bits-${q}`
}

function YV(q) {
  return q && q.__esModule && Object.prototype.hasOwnProperty.call(q, "default") ? q.default : q
}

function LV(q, {
  interval: V,
  immediate: t = !1
}) {
  let e = t ? -1 / 0 : Date.now();
  const n = () => typeof document > "u" || document.visibilityState === "visible";
  async function A() {
    const c = e;
    try {
      e = Date.now(), await q()
    } catch (u) {
      console.error(u), e = c
    }
  }
  const o = setInterval(() => {
    n() && A()
  }, V);
  t && A();
  async function i() {
    Date.now() - e >= V && await A()
  }
  const a = new AbortController;
  return typeof document < "u" && (document.addEventListener("visibilitychange", () => i(), {
    signal: a.signal
  }), document.addEventListener("resume", () => i(), {
    signal: a.signal
  })), typeof window < "u" && (window.addEventListener("pageshow", () => i(), {
    signal: a.signal
  }), window.addEventListener("focus", () => i(), {
    signal: a.signal
  }), window.addEventListener("online", () => i(), {
    signal: a.signal
  }), window.addEventListener("wplace:online", () => i(), {
    signal: a.signal
  })), () => {
    clearInterval(o), a.abort()
  }
}
export {
  cV as A, gq as B, hq as C, bV as a, yV as b, DV as c, IV as d, SV as e, dV as f, YV as g, LV as h, yq as i, EV as j, gV as k, Xq as l, BV as m, xV as n, MV as o, TV as p, mV as q, mq as r, vV as s, hV as t, pV as u, fV as v, eV as w, wV as x, uV as y, lV as z
};