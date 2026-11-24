function e(e, n, r, i, a) {
  if (t(r, i, a), e.length !== r * i * 4 || n.length !== e.length) throw Error(`Overlay progress buffers must have matching positive dimensions.`)
}

function t(e, t, n) {
  if (!Number.isSafeInteger(e) || !Number.isSafeInteger(t) || e <= 0 || t <= 0 || e * t > (2 ** 53 - 1) / 4) throw Error(`Overlay progress buffers must have matching positive dimensions.`);
  if (!Number.isSafeInteger(n.originX) || !Number.isSafeInteger(n.originY) || !Number.isSafeInteger(n.tileSize) || n.tileSize <= 0 || n.tileSize > 65535 || !Number.isSafeInteger(n.originX + e - 1) || !Number.isSafeInteger(n.originY + t - 1)) throw Error(`Overlay progress geometry is invalid.`)
}

function n(e) {
  if (e < -2147483648 || e > 2147483647) throw Error(`Overlay progress tile coordinates exceed the supported canvas range.`)
}

function r(e, t, n, r) {
  let i = t + Math.floor(n / 4),
    a = n % 4 * 2;
  e[i] |= r << a
}

function* i(e, t, n, i, a = !0) {
  if (!Number.isSafeInteger(n) || !Number.isSafeInteger(i) || n <= 0 || i <= 0 || e.length !== n * i * 4 || t.length !== e.length) throw Error(`Overlay tile buffers must have matching positive dimensions.`);
  let o = new Uint32Array(4),
    s = new Uint8Array(a ? Math.ceil(n * i / 4) : 0),
    c = 0;
  for (let l = 0; l < i; l += 1) {
    for (let i = 0; i < n; i += 1) {
      let n = c * 4,
        i = 0;
      e[n + 3] >= 16 && (o[0] += 1, t[n + 3] < 16 ? (i = 2, o[2] += 1) : e[n] === t[n] && e[n + 1] === t[n + 1] && e[n + 2] === t[n + 2] ? (i = 1, o[1] += 1) : (i = 3, o[3] += 1)), a && r(s, 0, c, i), c += 1
    }
    yield l
  }
  return {
    counts: o,
    statuses: s
  }
}

function a(e, t, n) {
  let r = t + Math.floor(n / 4),
    i = n % 4 * 2;
  return e[r] >> i & 3
}

function o(e, r, i) {
  t(e, r, i);
  let {
    originX: a,
    originY: o,
    tileSize: s
  } = i, c = Math.floor(a / s), l = Math.floor(o / s), u = Math.floor((a + e - 1) / s), d = Math.floor((o + r - 1) / s);
  n(c), n(l), n(u), n(d);
  let f = (u - c + 1) * (d - l + 1),
    p = new Int32Array(f * 2),
    m = new Uint16Array(f * 4),
    h = new Uint32Array(f * 4),
    g = new Uint32Array(f + 1),
    _ = 0,
    v = 0;
  for (let t = l; t <= d; t++)
    for (let n = c; n <= u; n++) {
      let i = Math.max(a, n * s),
        c = Math.max(o, t * s),
        l = Math.min(a + e, (n + 1) * s),
        u = Math.min(o + r, (t + 1) * s),
        d = _ * 4,
        f = l - i,
        h = u - c;
      p[_ * 2] = n, p[_ * 2 + 1] = t, m[d] = i - n * s, m[d + 1] = c - t * s, m[d + 2] = f, m[d + 3] = h, g[_] = v, v += Math.ceil(f * h / 4), _ += 1
    }
  return g[f] = v, {
    total: 0,
    completed: 0,
    unpainted: 0,
    mismatched: 0,
    originX: a,
    originY: o,
    width: e,
    height: r,
    tileSize: s,
    tileCoordinates: p,
    tileBounds: m,
    tileCounts: h,
    tileStatusOffsets: g,
    statuses: new Uint8Array(v)
  }
}

function* s(t, n, i, a, s, l) {
  e(t, n, i, a, s);
  let {
    originX: u,
    originY: d,
    tileSize: f,
    tileCoordinates: p,
    tileBounds: m,
    tileCounts: h,
    tileStatusOffsets: g,
    statuses: _
  } = o(i, a, s), v = h.length / 4, y = 0, b = 0, x = 0, S = 0, C = 0, w = c(l, v);
  for (let e of w) {
    y = e;
    let a = y * 2,
      o = y * 4,
      s = y * 4,
      c = p[a],
      l = p[a + 1],
      v = m[o],
      w = m[o + 1],
      T = m[o + 2],
      E = m[o + 3],
      D = c * f + v - u,
      O = l * f + w - d,
      k = 0;
    for (let e = 0; e < E; e++) {
      for (let a = 0; a < T; a++) {
        let o = ((O + e) * i + D + a) * 4,
          c = 0;
        t[o + 3] >= 16 && (h[s + 0] += 1, b += 1, n[o + 3] < 16 ? (c = 2, h[s + 2] += 1, S += 1) : t[o] === n[o] && t[o + 1] === n[o + 1] && t[o + 2] === n[o + 2] ? (c = 1, h[s + 1] += 1, x += 1) : (c = 3, h[s + 3] += 1, C += 1)), r(_, g[y], k, c), k += 1
      }
      yield O + e
    }
  }
  return {
    total: b,
    completed: x,
    unpainted: S,
    mismatched: C,
    originX: u,
    originY: d,
    width: i,
    height: a,
    tileSize: f,
    tileCoordinates: p,
    tileBounds: m,
    tileCounts: h,
    tileStatusOffsets: g,
    statuses: _
  }
}

function c(e, t) {
  if (!(e != null && e.length)) return Uint32Array.from({
    length: t
  }, (e, t) => t);
  let n = new Uint8Array(t),
    r = new Uint32Array(t),
    i = 0;
  for (let a of e) {
    if (a >= t) throw Error(`Overlay progress tile index is out of bounds.`);
    n[a] || (n[a] = 1, r[i++] = a)
  }
  for (let e = 0; e < t; e += 1) n[e] || (r[i++] = e);
  return r
}
export {
  a as i, i as n, o as r, s as t
};