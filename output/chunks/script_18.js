var _ = Object.defineProperty;
var W = q => {
  throw TypeError(q)
};
var $ = (q, V, t) => V in q ? _(q, V, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : q[V] = t;
var z = (q, V, t) => $(q, typeof V != "symbol" ? V + "" : V, t),
  N = (q, V, t) => V.has(q) || W("Cannot " + t);
var f = (q, V, t) => (N(q, V, "read from private field"), t ? t.call(q) : V.get(q)),
  m = (q, V, t) => V.has(q) ? W("Cannot add the same private member more than once") : V instanceof WeakSet ? V.add(q) : V.set(q, t),
  v = (q, V, t, e) => (N(q, V, "write to private field"), e ? e.call(q, t) : V.set(q, t), t);
import {
  j as qq
} from "./6VMe-q54.js";
import {
  bz as Vq,
  e as G,
  i as x,
  h as L,
  g as tq,
  u as eq,
  bJ as J,
  as as nq,
  q as oq,
  x as P
} from "./B66BVdRM.js";
import {
  i as Y
} from "./D6WlI9xC.js";
import {
  c as Aq
} from "./D1f3t9ko.js";

function rq() {
  return Symbol(Vq)
}
const iq = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAEAAAHPAB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn6pqampqampqampqampqampqampqampqamp29vb29vb29vb29vb29vb29vb29vb29vb2/////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJANgAAAAAAAABzxmm4psAAAAAAD/+8DEAAAF7A1FtDAAIzil6D87kgAAAktuqNu7gOcCAAgEATB8HzcHwfB8+DgIROD4ABAEAQOeCH/iAMXLB9//BB3Lg+AAIgJwBCSoyQ0QES1dNwAYhicYDAiarL8aXE4ZXwYe9BkCgLS/Dg4MKQDMkgCjAiAxujyCQPmFYGBApKtkawq2qi9GqTYgLTpFiGdI9O1D5NmvVykb4Q0iC3QOU5rUBLCQ9IoJWFutwdm2v5UmUWmoy2K9QxuXw5RxuOwA2j2ytp2dZrWp2A2/kMupbmC5HKc2et0mbjSyeld35/luxXs97SW4/JJiln38v54TdWITN+nq3a1Pq93WW/3/vNLLf/////K6sDGP////6PvWxQBFoFJABHMZRCBoQGHo/GW6NG17vGW1Zm25xgoZkkHEXiCgHb9v4bi8evlnFw5BStnezI76WTtDaVvOnLL8s9+1t95y7trVqdf0zfXXtpb2dzNrj94XquvZ0M/NLX6l+vktgwC4jICYwfNAuho0IiQuj////9r102AEMKOmGkMYagJIsBaYDIChgOgJiENow+wojIdUMMSQEYSBUTMZQb0o8Sk0SAjR1t5HOrfQNex7cq0ENSD4pyGX7X0xZTZxIYcKtF3mZptVyMvMJudNbJV6UKXY/pfr32nNn0c5rcEZq6nJYnCORDbENctTk5KWZdS63RUTWFzZVbMV3mt6vHJyziusGx5zczaCWWIN////qcOYSSNcFwyUIAAjtY6tsg5hoaQgzCTEAExUCDBozfYO8qSY3T3MLBgMXFAyoIjSiUtF/0DIhCIBgG52VxKVSh3n1s08dh16HvYXJ8JdlBMxTY839i3jR8vtSlsKfeK0NnC/nM0tLW7FK8/Tyq3KYLswxTDQEYZQZBHdQsioRGajdWcNkfpNOahWTpUJEDyc9LCQ0gcfR2T8/////////2zGWVnTPOpjElOJxIKDcdxGcttHMdDk5//7cMTkAA8Uz0Nd1gAigaJm6eyxPIZMDGR0PEgIGrR49MVAZAmYoKJjqJJImBhKP02+o9Jznif5eVT2eHC0ysbdDWHcRBDdQtNsGHz5fw8l282p0U6XSlewoyfTz751qsNZZnm32XJ+unFUNjmoX7ZOpHcZdMd7QbwNu3WpMQZplTGVCmaoMR34247bm1mKtcK2aK+iQ4ivzjUezP///5geOSUMiJ4hUgCgC0K1WiCQN8vbLG0AQADBIlTNsRCYEzAEsjEodxELxqxP5Q/JrC1wBDIwZKExnLAxQW8x7DEIOswwBYw/DkUH4DcJwDDAHaJgbsOBr7QGlBha6NwBiCDcgQQAxYAIUQGBKBYuBJEAcWJEnQDE4pIly4MoYoqAEDCUAPQRAxqkAJ5GoBgyB4RikbLIcbhtIX7/+4DE6YAUZaM7rZheonoiZ3a28ASIsGAgt7D+AWIjkDSGWD0hfqSddyAgLAQ5QaQn8QDHWOoB4AMjh6g6BZYagtVSTqMjpBSeF6RccsrkVJwiZEC0VjA1cjv+xgbI/0TEwQN0GdBn///9q1N/9v//0/VsitLemubODxzX2KfBVKuK49NlTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7YMT0gCAhwyP52gAIAAA/w4AABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
  sq = "data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7QMTxA9NhPR3sPM5AAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",
  aq = "" + new URL("../assets/notification.CPyrWqU1.mp3", import.meta.url).href,
  cq = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAADAAAHVgCKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioru7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7///////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAUQAAAAAAAAB1ZvGw9zAAAAAAD/+9DEAAAGgANNtBAAJL5DKPc9kEkIAKVy6ZvTvjNiAEAQA4fwcOKBAED85LicHw/BAEHfg+D4f/B8Hwf/Ococ/lz//4P//lwfAAAQCzgEApUAchBICAMDwGwwpg3jDHA2MWkaAxCQqDAjBQMMoFYwVgLDCrX1NfwPQxajfTO/VkEYD4sAuYOwYBgPgBGmQOAYIgDoKER8AN4KNYgISnpehHt0X2WsksoO27zM1duB3IgimTpnXNwTefFr9ly4HYK1lgtE8a3uVY23SCpDEpz4xL3DZVTV8ZygdeB4X+GuX6sTh9sVNAzuwVTIUztBdnLL60VnPsrt8f+fw/LCUy2caLDNmzuzGatmcu97UsVIYilyxqUcpaSPSW63KzZucjnakuzw+zlc5nD7yfL5zPv59z7/dQ9EolEu9pf5V1Y1+7Eayl1qkt8rXLGdi5nz//////////////////9/r9dw1l39/+P73/7////rWr1PdwxvJCIEbNPJ1QmAABaCxKJEmLpurTGDFSAYMB0FQxfggyqAeYtYSphnAwmFmBIYTATyaZhFiAGFIEqY0hJ5wAIxmFKCgaFaihh9A1GSlMSJYunOGWWB6pdsMvN5kqIig49MYApkLhJxyjmgkA1gIGDp1/CEIOLNkht0Ag8+NWKWQOW+aivhGVsj00TCW4CiJWJKkYRECshrDX0vHCHosi1cqERxakomvtDHA2TIAyjt52yUsMz8EMpZDLYdbq3V0XSRtfmhWkyaFM+YpBSrxQBAx03pQHPND6exc0OKEQq3lvKqM9hSCVHlv0yVdJhNZf+1Nx2GYZbqxt2qLJ9GC00ETr2vY+tmMTrOqWWTEkkUeh27PYQFIWX0rcGmtAswPXlLzWp6IVZe/ssk8FZ02r16Xdz3hTwPHJu3DEos63dr2927GPfz3+sM+93/63n3u//D///3nv9/rX71v97/PHuGWv7z/1Uo+X7tNTZ91XyoaWnob1bs9Yp86oQUCZIAAwEB7VQIuyrSQANCQ2GhZMQQ4MOCHMFxAMRwkMAxlMHzDM9QQMAxabsYLC+aWdScYCCZCoabxBOZSGWZcE2FB0xAuPp4zhWswUOJAsxAQMFDR4qN//vAxOUALmI5MbnsgE1xwGT3O7ABhADArk1MFMSD0qUALTCIVTNZ6aumhCoZWXmZixYEi2Kiy35BH02oFLPGCg7rCgQDQYw4ZYE5yE1rTPX1YekYKAYsD1hgHKA0ZBWZkQVFFhX2gNE3fFvt411kDPlAE5BAAMrWnKUzkdUQ4GcKFNJrQ1beZZDA2TyBhzsLNlCcxIeBUAMBCRkBamhsy15MFpJFZV1ovs/V/u78Uh+bo5dMT3L0lpqC3Wi9mVXpPlvn5TNa1Vyq409e/b1XvY/9bHmF3O1dwt2u5ZY444Y8q2a2Ou5Zd/GzvHV7tu/cx5fzv587Xua5ewz1n3+91X/LPesO2M9Zb7c5n3eOHcb+5KDXnf0F87HySsMMMAEIAAAwaBkBfgCqAAS3goeAwxXwM3QBieI+IEf/E3Ckh6ID/mLENJk99YSErPrb/4uVDX/7Vo/+KKI1///VTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+yDE4AAIHGcJGUmAAAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",
  uq = "data:audio/mpeg;base64,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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xDE1gPAAAGkHAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
  lq = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAE/gDLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//////////////////////////////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAOoAAAAAAAABP6u4u+sAAAAAAD/+9DEAAAGhC1UdGMAJM1C6nc34FFSaWP+7vYBAAEOAAiHPJp6YAwtNgQl3qDHKBgo4Th/wf/Lh/8H35R3/4IAg7//gh/+UOcPgABgAAAB0YnM2TIZDUkAGYOFBdqBQkadAmEAgiDTKD1BYUFTGA4LixoJUcUsGkDJrfwYKEmBDRg+gZmBSBeYUQyJj2B9mAOAkYXINwOA3cdvzIrBtMDwFYOAEMZhFcyRwWTDiAGWo/LzSFp7vtDTSQ3bHKocXbPR6kg2U07Vs4KcJaDIIGTHZxDsSjEMyhPing6w8PSYAlwHfdtbFq3lAc1qmqzPxFFV1cbUkrP9GG/cbKIyivlRWq1mzvHDWNad73eE7q3JYPnIerXqKJTtzV3DmUzLZZFM7sv1z9U8czh5wVG4G3nru8cfyy+rhT5TtHTb7jzd3eWO6Wmy3R3e6/DW9b5l/b9e5///87///eY////9///////Df7/8vx/Xf///9f///52O6s3rZINILq82aqo6x1TAYDoYGInIIhASA++E8wYSIkIBd0NdJXDHQL2vFAR4YOsgwGFK6QQiPQDhcITBl4MWgDBEAosgZUgoDGkAwGFAMCCEDEQVAwaOgMChwEQXAwUBg5MTgJcAwARZxBj4Ng0LAigBGYdKKwKBIeIQDHCyhWxMlUmTx0xUCgJFBjnkGFkpk0ZF4gSLLRZJKGARbBQAsZDCCFAhxianDEuspVXRkOUWCGGCYsxZiXa0Ukl/8XOS4vxxjrDJR7RLyeiisxJn//y+11pJqNycOJkgiapIoo0UdS0dL//sUjzHxMgBgMUtVdLRYGrKTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tgxOMAHVGjN7magIAAADSDgAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
  uV = fq();

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
const C = 14.5;
async function lV() {
  const q = wq();
  if (q) return q;
  try {
    if ((await navigator.permissions.query({
        name: "geolocation"
      })).state === "granted") {
      const t = await new Promise((e, n) => navigator.geolocation.getCurrentPosition(o => e(o), o => n(o)));
      return {
        lat: t.coords.latitude,
        lng: t.coords.longitude,
        zoom: C
      }
    }
  } catch (V) {
    console.error(V)
  }
  return {
    ...pq().pos,
    zoom: C
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
  Z = "location";

function mq(q, V) {
  localStorage.setItem(Z, JSON.stringify({
    ...q,
    zoom: V
  }))
}

function wq() {
  const q = localStorage.getItem(Z);
  if (!q) return;
  const V = JSON.parse(q);
  return V.zoom ?? (V.zoom = C), V
}

function fV(q) {
  return q.lat >= -90 && q.lat <= 90 && q.lng >= -180 && q.lng <= 180
}
var M, B;
class Eq {
  constructor() {
    m(this, M, G(-1));
    m(this, B, G([]))
  }
  get idx() {
    return x(f(this, M))
  }
  set idx(V) {
    L(f(this, M), V, !0)
  }
  get entries() {
    return x(f(this, B))
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
M = new WeakMap, B = new WeakMap;
const dV = new Eq,
  E = {
    day: 1440 * 60 * 1e3,
    hour: 3600 * 1e3,
    minute: 60 * 1e3,
    second: 1e3,
    millisecond: 1
  };

function pV(q) {
  const V = Math.floor(q / E.hour);
  q -= V * E.hour;
  const t = Math.floor(q / E.minute);
  q -= t * E.minute;
  const n = Math.floor(q / E.second).toString().padStart(2, "0");
  return V > 0 ? `${V}:${t.toString().padStart(2,"0")}:${n}` : `${t}:${n}`
}

function gV(q) {
  const V = q.getFullYear(),
    t = String(q.getMonth() + 1).padStart(2, "0"),
    e = String(q.getDate()).padStart(2, "0"),
    n = String(q.getHours()).padStart(2, "0"),
    o = String(q.getMinutes()).padStart(2, "0"),
    A = String(q.getSeconds()).padStart(2, "0");
  return `${V}-${t}-${e} ${n}:${o}:${A}`
}

function hq(q, V) {
  return q * E[V]
}

function yq() {
  return window.matchMedia("(display-mode: standalone)").matches || "standalone" in window.navigator && window.navigator.standalone === !0
}

function mV() {
  const q = "last-unfocus",
    V = new AbortController;
  if (yq()) {
    const t = () => {
        const n = localStorage.getItem(q);
        if (n) {
          const o = parseInt(n, 10);
          Date.now() - o > hq(1, "second") && window.location.reload()
        }
      },
      e = () => {
        localStorage.setItem(q, Date.now().toString());
        const n = qq.map;
        if (n) {
          const o = n.getCenter(),
            A = n.getZoom();
          mq(o, A)
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
let U;

function wV(q) {
  return U = q, S({
    type: "previewPixels",
    data: q
  })
}

function EV() {
  return U = void 0, S({
    type: "clearPixelPreview"
  })
}

function hV(q) {
  return S({
    type: "paintPixels",
    data: q
  })
}

function yV() {
  return S({
    type: "refreshPixelArt"
  })
}
async function vV() {
  U || await S({
    type: "clearPixelPreview"
  })
}

function S(q) {
  const V = Math.random(),
    t = {
      ...q,
      id: V
    };
  return new Promise((e, n) => {
    try {
      const o = navigator.serviceWorker;
      o || n(new Error("Service Workers are not supported/enabled in your browser. Some features might not work properly."));
      const A = c => {
        var a;
        ((a = c.data) == null ? void 0 : a.id) === V && (e(void 0), o.removeEventListener("message", A))
      };
      o.addEventListener("message", A);
      const s = navigator.serviceWorker.controller;
      s ? s.postMessage(t) : navigator.serviceWorker.ready.then(c => {
        const a = c.active;
        a ? a == null || a.postMessage(t) : n(new Error("Service worker registration not active"))
      })
    } catch (o) {
      n(o)
    }
  })
}

function MV({
  pixel: q,
  season: V,
  tile: t
}) {
  return `t=(${t[0]},${t[1]});p=(${q[0]},${q[1]});s=${V}`
}

function vq(q) {
  return q !== null && typeof q == "object"
}
const Mq = ["string", "number", "bigint", "boolean"];

function k(q) {
  return q == null || Mq.includes(typeof q) ? !0 : Array.isArray(q) ? q.every(V => k(V)) : typeof q == "object" ? Object.getPrototypeOf(q) === Object.prototype : !1
}
const I = Symbol("box"),
  K = Symbol("is-writable");

function BV(q, V) {
  const t = eq(q);
  return V ? {
    [I]: !0,
    [K]: !0,
    get current() {
      return x(t)
    },
    set current(e) {
      V(e)
    }
  } : {
    [I]: !0,
    get current() {
      return q()
    }
  }
}

function Bq(q) {
  return vq(q) && I in q
}

function bV(q) {
  let V = G(tq(q));
  return {
    [I]: !0,
    [K]: !0,
    get current() {
      return x(V)
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
var F = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  Tq = /\n/g,
  Sq = /^\s*/,
  Dq = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  xq = /^:\s*/,
  Iq = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  Yq = /^[;\s]*/,
  Gq = /^\s+|\s+$/g,
  Lq = `
`,
  Q = "/",
  j = "*",
  w = "",
  Pq = "comment",
  Cq = "declaration";

function kq(q, V) {
  if (typeof q != "string") throw new TypeError("First argument must be a string");
  if (!q) return [];
  V = V || {};
  var t = 1,
    e = 1;

  function n(i) {
    var r = i.match(Tq);
    r && (t += r.length);
    var l = i.lastIndexOf(Lq);
    e = ~l ? i.length - l : e + i.length
  }

  function o() {
    var i = {
      line: t,
      column: e
    };
    return function(r) {
      return r.position = new A(i), a(), r
    }
  }

  function A(i) {
    this.start = i, this.end = {
      line: t,
      column: e
    }, this.source = V.source
  }
  A.prototype.content = q;

  function s(i) {
    var r = new Error(V.source + ":" + t + ":" + e + ": " + i);
    if (r.reason = i, r.filename = V.source, r.line = t, r.column = e, r.source = q, !V.silent) throw r
  }

  function c(i) {
    var r = i.exec(q);
    if (r) {
      var l = r[0];
      return n(l), q = q.slice(l.length), r
    }
  }

  function a() {
    c(Sq)
  }

  function u(i) {
    var r;
    for (i = i || []; r = d();) r !== !1 && i.push(r);
    return i
  }

  function d() {
    var i = o();
    if (!(Q != q.charAt(0) || j != q.charAt(1))) {
      for (var r = 2; w != q.charAt(r) && (j != q.charAt(r) || Q != q.charAt(r + 1));) ++r;
      if (r += 2, w === q.charAt(r - 1)) return s("End of comment missing");
      var l = q.slice(2, r - 2);
      return e += 2, n(l), q = q.slice(r), e += 2, i({
        type: Pq,
        comment: l
      })
    }
  }

  function p() {
    var i = o(),
      r = c(Dq);
    if (r) {
      if (d(), !c(xq)) return s("property missing ':'");
      var l = c(Iq),
        H = i({
          type: Cq,
          property: R(r[0].replace(F, w)),
          value: l ? R(l[0].replace(F, w)) : w
        });
      return c(Yq), H
    }
  }

  function g() {
    var i = [];
    u(i);
    for (var r; r = p();) r !== !1 && (i.push(r), u(i));
    return i
  }
  return a(), g()
}

function R(q) {
  return q ? q.replace(Gq, w) : w
}

function Uq(q, V) {
  let t = null;
  if (!q || typeof q != "string") return t;
  const e = kq(q),
    n = typeof V == "function";
  return e.forEach(o => {
    if (o.type !== "declaration") return;
    const {
      property: A,
      value: s
    } = o;
    n ? V(A, s, o) : s && (t = t || {}, t[A] = s)
  }), t
}
const Wq = /\d/,
  zq = ["-", "_", "/", "."];

function Nq(q = "") {
  if (!Wq.test(q)) return q !== q.toLowerCase()
}

function Jq(q) {
  const V = [];
  let t = "",
    e, n;
  for (const o of q) {
    const A = zq.includes(o);
    if (A === !0) {
      V.push(t), t = "", e = void 0;
      continue
    }
    const s = Nq(o);
    if (n === !1) {
      if (e === !1 && s === !0) {
        V.push(t), t = o, e = s;
        continue
      }
      if (e === !0 && s === !1 && t.length > 1) {
        const c = t.at(-1);
        V.push(t.slice(0, Math.max(0, t.length - 1))), t = c + o, e = s;
        continue
      }
    }
    t += o, e = s, n = A
  }
  return V.push(t), V
}

function X(q) {
  return q ? Jq(q).map(V => Qq(V)).join("") : ""
}

function Fq(q) {
  return jq(X(q || ""))
}

function Qq(q) {
  return q ? q[0].toUpperCase() + q.slice(1) : ""
}

function jq(q) {
  return q ? q[0].toLowerCase() + q.slice(1) : ""
}

function D(q) {
  if (!q) return {};
  const V = {};

  function t(e, n) {
    if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
      V[X(e)] = n;
      return
    }
    if (e.startsWith("--")) {
      V[e] = n;
      return
    }
    V[Fq(e)] = n
  }
  return Uq(q, t), V
}

function Rq(...q) {
  return (...V) => {
    for (const t of q) typeof t == "function" && t(...V)
  }
}

function Zq(q, V) {
  const t = RegExp(q, "g");
  return e => {
    if (typeof e != "string") throw new TypeError(`expected an argument of type string, but got ${typeof e}`);
    return e.match(t) ? e.replace(t, V) : e
  }
}
const Kq = Zq(/[A-Z]/, q => `-${q.toLowerCase()}`);

function Xq(q) {
  if (!q || typeof q != "object" || Array.isArray(q)) throw new TypeError(`expected an argument of type object, but got ${typeof q}`);
  return Object.keys(q).map(V => `${Kq(V)}: ${q[V]};`).join(`
`)
}

function Oq(q = {}) {
  return Xq(q).replace(`
`, " ")
}
const Hq = ["onabort", "onanimationcancel", "onanimationend", "onanimationiteration", "onanimationstart", "onauxclick", "onbeforeinput", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncompositionend", "oncompositionstart", "oncompositionupdate", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onfocusin", "onfocusout", "onformdata", "ongotpointercapture", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onlostpointercapture", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onpaste", "onpause", "onplay", "onplaying", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onscrollend", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onselectionchange", "onselectstart", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "ontransitioncancel", "ontransitionend", "ontransitionrun", "ontransitionstart", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel"],
  _q = new Set(Hq);

function $q(q) {
  return _q.has(q)
}

function TV(...q) {
  const V = {
    ...q[0]
  };
  for (let t = 1; t < q.length; t++) {
    const e = q[t];
    if (e) {
      for (const n of Object.keys(e)) {
        const o = V[n],
          A = e[n],
          s = typeof o == "function",
          c = typeof A == "function";
        if (s && $q(n)) {
          const a = o,
            u = A;
          V[n] = bq(a, u)
        } else if (s && c) V[n] = Rq(o, A);
        else if (n === "class") {
          const a = k(o),
            u = k(A);
          a && u ? V[n] = Y(o, A) : a ? V[n] = Y(o) : u && (V[n] = Y(A))
        } else if (n === "style") {
          const a = typeof o == "object",
            u = typeof A == "object",
            d = typeof o == "string",
            p = typeof A == "string";
          if (a && u) V[n] = {
            ...o,
            ...A
          };
          else if (a && p) {
            const g = D(A);
            V[n] = {
              ...o,
              ...g
            }
          } else if (d && u) {
            const g = D(o);
            V[n] = {
              ...g,
              ...A
            }
          } else if (d && p) {
            const g = D(o),
              i = D(A);
            V[n] = {
              ...g,
              ...i
            }
          } else a ? V[n] = o : u ? V[n] = A : d ? V[n] = o : p && (V[n] = A)
        } else V[n] = A !== void 0 ? A : o
      }
      for (const n of Object.getOwnPropertySymbols(e)) {
        const o = V[n],
          A = e[n];
        V[n] = A !== void 0 ? A : o
      }
    }
  }
  return typeof V.style == "object" && (V.style = Oq(V.style).replaceAll(`
`, " ")), V.hidden === !1 && (V.hidden = void 0, delete V.hidden), V.disabled === !1 && (V.disabled = void 0, delete V.disabled), V
}
const qV = typeof window < "u" ? window : void 0;

function VV(q) {
  let V = q.activeElement;
  for (; V != null && V.shadowRoot;) {
    const t = V.shadowRoot.activeElement;
    if (t === V) break;
    V = t
  }
  return V
}
var h, b;
class tV {
  constructor(V = {}) {
    m(this, h);
    m(this, b);
    const {
      window: t = qV,
      document: e = t == null ? void 0 : t.document
    } = V;
    t !== void 0 && (v(this, h, e), v(this, b, Aq(n => {
      const o = J(t, "focusin", n),
        A = J(t, "focusout", n);
      return () => {
        o(), A()
      }
    })))
  }
  get current() {
    var V;
    return (V = f(this, b)) == null || V.call(this), f(this, h) ? VV(f(this, h)) : null
  }
}
h = new WeakMap, b = new WeakMap;
new tV;

function eV(q, V) {
  switch (q) {
    case "post":
      oq(V);
      break;
    case "pre":
      nq(V);
      break
  }
}

function O(q, V, t, e = {}) {
  const {
    lazy: n = !1
  } = e;
  let o = !n,
    A = Array.isArray(q) ? [] : void 0;
  eV(V, () => {
    const s = Array.isArray(q) ? q.map(a => a()) : q();
    if (!o) {
      o = !0, A = s;
      return
    }
    const c = P(() => t(s, A));
    return A = s, c
  })
}

function nV(q, V, t) {
  O(q, "post", V, t)
}

function oV(q, V, t) {
  O(q, "pre", V, t)
}
nV.pre = oV;

function SV(q, V) {
  return {
    [rq()]: t => Bq(q) ? (q.current = t, P(() => V == null ? void 0 : V(t)), () => {
      "isConnected" in t && t.isConnected || (q.current = null, V == null || V(null))
    }) : (q(t), P(() => V == null ? void 0 : V(t)), () => {
      "isConnected" in t && t.isConnected || (q(null), V == null || V(null))
    })
  }
}

function DV(q) {
  return q ? "true" : "false"
}

function xV(q) {
  return q ? "" : void 0
}

function IV(q) {
  return q ? !0 : void 0
}
var y, T;
class AV {
  constructor(V) {
    m(this, y);
    m(this, T);
    z(this, "attrs");
    v(this, y, V.getVariant ? V.getVariant() : null), v(this, T, f(this, y) ? `data-${f(this,y)}-` : `data-${V.component}-`), this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(V.parts.map(t => [t, this.getAttr(t)]))
  }
  getAttr(V, t) {
    return t ? `data-${t}-${V}` : `${f(this,T)}${V}`
  }
  selector(V, t) {
    return `[${this.getAttr(V,t)}]`
  }
}
y = new WeakMap, T = new WeakMap;

function YV(q) {
  const V = new AV(q);
  return {
    ...V.attrs,
    selector: V.selector,
    getAttr: V.getAttr
  }
}

function GV() {}

function LV(q, V) {
  return `bits-${q}`
}

function PV(q) {
  return q && q.__esModule && Object.prototype.hasOwnProperty.call(q, "default") ? q.default : q
}

function CV(q, {
  interval: V,
  maxRetries: t = 3,
  retryDelay: e = 1e3,
  immediate: n = !1
}) {
  let o = null,
    A = !1,
    s = !1,
    c = !1;
  const a = () => typeof document > "u" || document.visibilityState === "visible";
  async function u() {
    if (!(c || s)) {
      if (!a()) {
        A = !0;
        return
      }
      A = !1, s = !0;
      try {
        for (let p = 0; p <= t; p++) {
          if (c) return;
          if (!a()) {
            A = !0;
            return
          }
          try {
            await q();
            return
          } catch (g) {
            if (p === t) {
              console.error("reliableInterval: giving up after retries", g);
              return
            }
            await new Promise(i => setTimeout(i, e))
          }
        }
      } finally {
        s = !1, A && a() && !c && u()
      }
    }
  }

  function d() {
    a() && A && !s && u()
  }
  return typeof document < "u" && document.addEventListener("visibilitychange", d), n && u(), o = setInterval(() => {
    s || !a() ? A = !0 : u()
  }, V), () => {
    c = !0, o && clearInterval(o), typeof document < "u" && document.removeEventListener("visibilitychange", d)
  }
}
export {
  uV as A, lV as B, fV as C, gq as D, yq as E, hq as F, E as T, SV as a, BV as b, IV as c, YV as d, LV as e, pV as f, PV as g, mV as h, vq as i, vV as j, EV as k, Oq as l, TV as m, GV as n, DV as o, xV as p, hV as q, CV as r, bV as s, gV as t, mq as u, MV as v, nV as w, wV as x, dV as y, yV as z
};