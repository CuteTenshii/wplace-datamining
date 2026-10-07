function e(e, t, n, r, i) {
  if (!Number.isSafeInteger(n) || !Number.isSafeInteger(r) || n <= 0 || r <= 0 || n * r > (2 ** 53 - 1) / 4) throw Error(`Overlay progress buffers must have matching positive dimensions.`);
  let a = n * r * 4;
  if (e.length !== a || t.length !== a) throw Error(`Overlay progress buffers must have matching positive dimensions.`);
  if (!Number.isSafeInteger(i.originX) || !Number.isSafeInteger(i.originY) || !Number.isSafeInteger(i.tileSize) || i.tileSize <= 0 || i.tileSize > 65535 || !Number.isSafeInteger(i.originX + n - 1) || !Number.isSafeInteger(i.originY + r - 1)) throw Error(`Overlay progress geometry is invalid.`)
}

function t(e) {
  if (e < -2147483648 || e > 2147483647) throw Error(`Overlay progress tile coordinates exceed the supported canvas range.`)
}

function n(e, t, n, r) {
  let i = t + Math.floor(n / 4),
    a = n % 4 * 2;
  e[i] |= r << a
}

function* r(e, t, r, i) {
  if (!Number.isSafeInteger(r) || !Number.isSafeInteger(i) || r <= 0 || i <= 0 || e.length !== r * i * 4 || t.length !== e.length) throw Error(`Overlay tile buffers must have matching positive dimensions.`);
  let a = new Uint32Array(4),
    o = new Uint8Array(Math.ceil(r * i / 4)),
    s = 0;
  for (let c = 0; c < i; c += 1) {
    for (let i = 0; i < r; i += 1) {
      let r = s * 4,
        i = 0;
      e[r + 3] >= 16 && (a[0] += 1, t[r + 3] < 16 ? (i = 2, a[2] += 1) : e[r] === t[r] && e[r + 1] === t[r + 1] && e[r + 2] === t[r + 2] ? (i = 1, a[1] += 1) : (i = 3, a[3] += 1)), n(o, 0, s, i), s += 1
    }
    yield c
  }
  return {
    counts: a,
    statuses: o
  }
}

function i(e, t, n) {
  let r = t + Math.floor(n / 4),
    i = n % 4 * 2;
  return e[r] >> i & 3
}

function* a(r, i, a, s, c, l) {
  e(r, i, a, s, c);
  let {
    originX: u,
    originY: d,
    tileSize: f
  } = c, p = Math.floor(u / f), m = Math.floor(d / f), h = Math.floor((u + a - 1) / f), g = Math.floor((d + s - 1) / f);
  t(p), t(m), t(h), t(g);
  let _ = (h - p + 1) * (g - m + 1),
    v = new Int32Array(_ * 2),
    y = new Uint16Array(_ * 4),
    b = new Uint32Array(_ * 4),
    x = new Uint32Array(_ + 1),
    S = 0,
    C = 0;
  for (let e = m; e <= g; e++)
    for (let t = p; t <= h; t++) {
      let n = Math.max(u, t * f),
        r = Math.max(d, e * f),
        i = Math.min(u + a, (t + 1) * f),
        o = Math.min(d + s, (e + 1) * f),
        c = S * 4,
        l = i - n,
        p = o - r;
      v[S * 2] = t, v[S * 2 + 1] = e, y[c] = n - t * f, y[c + 1] = r - e * f, y[c + 2] = l, y[c + 3] = p, x[S] = C, C += Math.ceil(l * p / 4), S += 1
    }
  x[_] = C;
  let w = new Uint8Array(C),
    T = 0,
    E = 0,
    D = 0,
    O = 0,
    k = o(l, _);
  for (let e of k) {
    S = e;
    let t = S * 2,
      o = S * 4,
      s = S * 4,
      c = v[t],
      l = v[t + 1],
      p = y[o],
      m = y[o + 1],
      h = y[o + 2],
      g = y[o + 3],
      _ = c * f + p - u,
      C = l * f + m - d,
      k = 0;
    for (let e = 0; e < g; e++) {
      for (let t = 0; t < h; t++) {
        let o = ((C + e) * a + _ + t) * 4,
          c = 0;
        r[o + 3] >= 16 && (b[s + 0] += 1, T += 1, i[o + 3] < 16 ? (c = 2, b[s + 2] += 1, D += 1) : r[o] === i[o] && r[o + 1] === i[o + 1] && r[o + 2] === i[o + 2] ? (c = 1, b[s + 1] += 1, E += 1) : (c = 3, b[s + 3] += 1, O += 1)), n(w, x[S], k, c), k += 1
      }
      yield C + e
    }
  }
  return {
    total: T,
    completed: E,
    unpainted: D,
    mismatched: O,
    originX: u,
    originY: d,
    width: a,
    height: s,
    tileSize: f,
    tileCoordinates: v,
    tileBounds: y,
    tileCounts: b,
    tileStatusOffsets: x,
    statuses: w
  }
}

function o(e, t) {
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

function s(e, t, n, r, i, o) {
  let s = a(e, t, n, r, i, o);
  for (;;) {
    let e = s.next();
    if (e.done) return e.value
  }
}

function c(e) {
  let t = e.tileCoordinates.length / 2;
  if (!Number.isInteger(t) || e.tileBounds.length !== t * 4 || e.tileCounts.length !== t * 4 || e.tileStatusOffsets.length !== t + 1 || e.tileStatusOffsets[t] !== e.statuses.length) throw Error(`Overlay progress result layout is invalid.`);
  let n = 0;
  for (let r = 0; r < t; r++) {
    let t = r * 4,
      i = e.tileBounds[t + 2],
      a = e.tileBounds[t + 3],
      o = e.tileStatusOffsets[r],
      s = e.tileStatusOffsets[r + 1];
    if (o !== n || s - o !== Math.ceil(i * a / 4)) throw Error(`Overlay progress result layout is invalid.`);
    n = s
  }
}

function l(e, t) {
  let n = new Uint8Array(t),
    r = 0;
  for (let i = 0; i < e.length; i++) {
    let a = e[i];
    if (a >= t) throw Error(`Overlay progress tile index is out of bounds.`);
    n[a] === 0 && (n[a] = 1, r += 1)
  }
  let i = new Uint32Array(r),
    a = 0;
  for (let e = 0; e < n.length; e++) n[e] !== 0 && (i[a] = e, a += 1);
  return i
}

function* u(t, r, i, a) {
  e(r, i, t.width, t.height, t), c(t);
  let o = l(a, t.tileCoordinates.length / 2);
  for (let e = 0; e < o.length; e++) {
    let a = o[e],
      s = a * 2,
      c = a * 4,
      l = a * 4,
      u = t.tileCoordinates[s],
      d = t.tileCoordinates[s + 1],
      f = t.tileBounds[c],
      p = t.tileBounds[c + 1],
      m = t.tileBounds[c + 2],
      h = t.tileBounds[c + 3],
      g = u * t.tileSize + f - t.originX,
      _ = d * t.tileSize + p - t.originY,
      v = t.tileStatusOffsets[a],
      y = t.tileStatusOffsets[a + 1];
    t.total -= t.tileCounts[l + 0], t.completed -= t.tileCounts[l + 1], t.unpainted -= t.tileCounts[l + 2], t.mismatched -= t.tileCounts[l + 3], t.tileCounts.fill(0, l, l + 4), t.statuses.fill(0, v, y);
    let b = 0;
    for (let e = 0; e < h; e++) {
      for (let a = 0; a < m; a++) {
        let o = ((_ + e) * t.width + g + a) * 4,
          s = 0;
        r[o + 3] >= 16 && (t.tileCounts[l + 0] += 1, t.total += 1, i[o + 3] < 16 ? (s = 2, t.tileCounts[l + 2] += 1, t.unpainted += 1) : r[o] === i[o] && r[o + 1] === i[o + 1] && r[o + 2] === i[o + 2] ? (s = 1, t.tileCounts[l + 1] += 1, t.completed += 1) : (s = 3, t.tileCounts[l + 3] += 1, t.mismatched += 1)), n(t.statuses, v, b, s), b += 1
      }
      yield _ + e
    }
  }
  return t
}

function d(e, t, n, r) {
  let i = u(e, t, n, r);
  for (;;) {
    let e = i.next();
    if (e.done) return e.value
  }
}
export {
  d as a, i, a as n, r, s as t
};