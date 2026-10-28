import {
  $ as e,
  Dt as t,
  G as n,
  X as r,
  Xt as i,
  Z as a,
  Zt as o,
  o as s,
  y as c
} from "./DTpxYwnW.js";
import "./B8UK1oE5.js";
import {
  t as l
} from "./BMPGVY3G.js";
import {
  W as u
} from "./Ds81Tj2i.js";
import {
  r as d
} from "./Bj-o04n3.js";
import {
  i as f,
  n as p,
  t as m
} from "./TwBIz_JE.js";
import {
  a as h,
  c as g,
  r as _
} from "./DThoGFvs.js";
var v = new Set([`$$slots`, `$$events`, `$$legacy`]),
  y = e(`<svg><path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm0-360Zm112 168 56-56-128-128v-184h-80v216l152 152ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56ZM480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Z"></path></svg>`),
  b = e(`<svg><path d="M8 5h8v2H8zm0 14h8v2H8zM6 7h2v2H6zm0 10h2v2H6zM16 7h2v2h-2zm0 10h2v2h-2zM4 9h2v8H4zm14 0h2v8h-2zM4 2h2v2H4zm0 17h2v2H4zm14 0h2v2h-2zm0-17h2v2h-2zM2 4h2v2H2zm18 0h2v2h-2zm-9 5h2v4h-2zm2 4h2v2h-2z"></path></svg>`);

function x(e, u) {
  o(u, !0);
  let d = s(u, v);
  var f = a(),
    p = t(f),
    m = e => {
      var t = y();
      c(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...d
      })), r(e, t)
    },
    h = e => {
      var t = b();
      c(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...d
      })), r(e, t)
    };
  n(p, e => {
    l.standard ? e(m) : e(h, -1)
  }), r(e, f), i()
}
async function S(e, t) {
  let n = performance.now();
  for (;;) {
    t.throwIfAborted();
    let r = e.next();
    if (r.done) return r.value;
    performance.now() - n >= 8 && (await d(), n = performance.now())
  }
}

function C(e, t) {
  return {
    x: e.tileCoordinates[t * 2] * e.tileSize + e.tileBounds[t * 4],
    y: e.tileCoordinates[t * 2 + 1] * e.tileSize + e.tileBounds[t * 4 + 1],
    width: e.tileBounds[t * 4 + 2],
    height: e.tileBounds[t * 4 + 3]
  }
}

function w(e, t) {
  let n = [];
  for (let r = 0; r < e.tileCounts.length / 4; r++) {
    let i = C(e, r);
    (!t || t.x < i.x + i.width && t.x + t.width > i.x && t.y < i.y + i.height && t.y + t.height > i.y) && n.push(r)
  }
  return n
}
async function T(e, t, n, r) {
  let i = await n.readOverlayPixels(t, r, !0);
  r.throwIfAborted();
  let a = {
      originX: t.x,
      originY: t.y,
      tileSize: 128
    },
    o = _({
      expected: h(e),
      actual: h(i),
      ...a
    }, r);
  if (o) try {
    let e = await o;
    return {
      ...e,
      tileVersions: new Uint32Array(e.tileCounts.length / 4)
    }
  } catch {
    r.throwIfAborted()
  }
  let s = await S(m(e.data, i.data, e.width, e.height, a), r);
  return {
    ...s,
    tileVersions: new Uint32Array(s.tileCounts.length / 4)
  }
}
async function E(e, t, n, r, i) {
  let a = [],
    o = performance.now();
  for (let s of r) {
    let r = C(e, s),
      c = await n.readOverlayPixels(r, i);
    i.throwIfAborted();
    let l = new Uint8ClampedArray(r.width * r.height * 4);
    for (let n = 0; n < r.height; n++) {
      let i = ((r.y - e.originY + n) * t.width + r.x - e.originX) * 4;
      l.set(t.data.subarray(i, i + r.width * 4), n * r.width * 4)
    }
    a.push({
      tileIndex: s,
      width: r.width,
      height: r.height,
      expected: l,
      actual: c.data
    }), performance.now() - o >= 4 && (await d(), i.throwIfAborted(), o = performance.now())
  }
  let s = g({
      tiles: a.map(e => ({
        ...e,
        expected: e.expected.slice(),
        actual: e.actual.slice()
      }))
    }, i),
    c;
  if (s) try {
    c = (await s).updates
  } catch {
    i.throwIfAborted()
  }
  if (!c) {
    c = [], o = performance.now();
    for (let e of a) c.push({
      tileIndex: e.tileIndex,
      ...await S(p(e.expected, e.actual, e.width, e.height), i)
    }), performance.now() - o >= 4 && (await d(), i.throwIfAborted(), o = performance.now())
  }
  i.throwIfAborted();
  let l = c.filter(({
    tileIndex: t,
    statuses: n
  }) => {
    let r = e.tileStatusOffsets[t];
    return n.some((t, n) => t !== e.statuses[r + n])
  });
  if (!l.length) return e;
  let u = {
    ...e,
    tileVersions: e.tileVersions.slice(),
    tileCounts: e.tileCounts.slice(),
    statuses: e.statuses.slice(),
    changedTileIndices: Uint32Array.from(l, e => e.tileIndex)
  };
  for (let {
      tileIndex: e,
      counts: t,
      statuses: n
    }
    of l) {
    u.tileVersions[e]++;
    let r = e * 4;
    u.total += t[0] - u.tileCounts[r], u.completed += t[1] - u.tileCounts[r + 1], u.unpainted += t[2] - u.tileCounts[r + 2], u.mismatched += t[3] - u.tileCounts[r + 3], u.tileCounts.set(t, r), u.statuses.set(n, u.tileStatusOffsets[e])
  }
  return u
}
var D = new Map(u.colors.map((e, t) => [e.rgb[0] << 16 | e.rgb[1] << 8 | e.rgb[2], t]));
async function O(e, t, n, r, i) {
  var a, o;
  let s = JSON.stringify(n),
    c = (i == null ? void 0 : i.source) === e && i.optionsKey === s && ((a = i.progress) == null ? void 0 : a.tileCoordinates) === (t == null ? void 0 : t.tileCoordinates);
  r.throwIfAborted();
  let l = c ? i.image : e,
    p = !1,
    m = c ? [...i.tileColorCounts] : [],
    h = n.selectedColor ? (o = u.colors[n.selectedColor]) == null ? void 0 : o.rgb : void 0,
    g = performance.now(),
    _ = t ? t.tileCounts.length / 4 : +!!h;
  for (let a = 0; a < _; a++) {
    var v;
    if (r.throwIfAborted(), c && t && ((v = i.progress) == null ? void 0 : v.tileVersions[a]) === t.tileVersions[a]) continue;
    let o = t ? C(t, a) : {
        x: 0,
        y: 0,
        width: e.width,
        height: e.height
      },
      s = new Uint32Array(u.colors.length);
    m[a] = s;
    for (let i = 0; i < o.height; i++) {
      for (let r = 0; r < o.width; r++) {
        let c = ((o.y - ((t == null ? void 0 : t.originY) ?? 0) + i) * e.width + o.x - ((t == null ? void 0 : t.originX) ?? 0) + r) * 4,
          u = t ? f(t.statuses, t.tileStatusOffsets[a], i * o.width + r) : 0;
        if (u >= 2) {
          let t = D.get(e.data[c] << 16 | e.data[c + 1] << 8 | e.data[c + 2]);
          t !== void 0 && s[t]++
        }
        let d = e.data[c + 3];
        (n.incorrect && u === 3 || n.unpainted && u === 2) && (d = u === 3 ? 254 : 253), h && (e.data[c] !== h[0] || e.data[c + 1] !== h[1] || e.data[c + 2] !== h[2]) && (d = 0), l.data[c + 3] !== d && (p || (l = new ImageData(l.data.slice(), e.width, e.height), p = !0), l.data[c + 3] = d)
      }
      performance.now() - g >= 8 && (await d(), r.throwIfAborted(), g = performance.now())
    }
  }
  let y = new Uint32Array(u.colors.length);
  for (let e of m)
    for (let t = 0; t < y.length; t++) y[t] += e[t];
  let b = Array.from(y, (e, t) => ({
      colorIdx: t,
      count: e
    })).filter(e => e.count > 0),
    x = i && i.remainingColors.length === b.length && b.every((e, t) => e.colorIdx === i.remainingColors[t].colorIdx && e.count === i.remainingColors[t].count);
  return {
    source: e,
    progress: t,
    optionsKey: s,
    image: l,
    tileColorCounts: m,
    remainingColors: x ? i.remainingColors : b
  }
}
export {
  x as a, E as i, w as n, O as r, T as t
};