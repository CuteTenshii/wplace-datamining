function e(e, t) {
  let n = e.getBounds(),
    r = e.getCanvas(),
    i = r.width || r.clientWidth || 1,
    a = r.height || r.clientHeight || 1,
    o = (t == null ? void 0 : t.maxWidth) ?? i,
    s = (t == null ? void 0 : t.maxHeight) ?? a,
    c = Math.min(1, o / i, s / a),
    l = Math.max(1, Math.floor(i * c)),
    u = Math.max(1, Math.floor(a * c));
  return {
    north: n.getNorth(),
    south: n.getSouth(),
    west: n.getWest(),
    east: n.getEast(),
    width: l,
    height: u
  }
}

function t(e, t) {
  return new Promise((n, r) => {
    e.once(`render`, () => {
      let i = e.getCanvas(),
        a = i;
      if (t != null && t.maxWidth || t != null && t.maxHeight) {
        let e = i.width,
          n = i.height,
          r = (t == null ? void 0 : t.maxWidth) ?? e,
          o = (t == null ? void 0 : t.maxHeight) ?? n;
        a = document.createElement(`canvas`);
        let s = Math.min(r / e, o / n);
        a.width = Math.floor(e * s), a.height = Math.floor(n * s);
        let c = a.getContext(`2d`);
        c && c.drawImage(i, 0, 0, a.width, a.height)
      }
      try {
        a.toBlob(e => {
          e && n(e)
        }, (t == null ? void 0 : t.type) ?? `image/png`, (t == null ? void 0 : t.quality) ?? 1)
      } catch (e) {
        r(e)
      } finally {
        a !== i && a.remove()
      }
    })
  })
}
export {
  e as n, t
};