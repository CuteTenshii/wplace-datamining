var x = Object.defineProperty;
var T = (s, e, t) => e in s ? x(s, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : s[e] = t;
var u = (s, e, t) => T(s, typeof e != "symbol" ? e + "" : e, t);
import {
  g as p
} from "./BhCkpOlh.js";
import {
  d as L
} from "./Cpgf6r_0.js";
const d = () => "No description",
  M = () => "Sem descrição",
  f = () => "无描述",
  _ = () => "Keine Beschreibung",
  P = () => "Sin descripción",
  S = () => "Aucune description",
  y = () => "Nessuna descrizione",
  B = () => "説明なし",
  z = () => "Brak opisu",
  g = () => "Без описания",
  R = () => "Без опису",
  A = () => "Không có mô tả",
  F = (s = {}, e = {}) => {
    const t = e.locale ?? p();
    return t === "en" ? d() : t === "pt" ? M() : t === "ch" ? f() : t === "de" ? _() : t === "es" ? P() : t === "fr" ? S() : t === "it" ? y() : t === "jp" ? B() : t === "pl" ? z() : t === "ru" ? g() : t === "uk" ? R() : A()
  },
  a = 2 * Math.PI * 6378137 / 2,
  h = 85.0511287798066;

function E(s) {
  return ((s + 180) % 360 + 360) % 360 - 180
}

function N(s, e) {
  return [Math.max(-h, Math.min(h, s)), E(e)]
}
class k {
  constructor(e = 256) {
    u(this, "initialResolution");
    this.tileSize = e, this.initialResolution = 2 * a / this.tileSize
  }
  latLonToMeters(e, t) {
    const n = t / 180 * a,
      o = Math.log(Math.tan((90 + e) * Math.PI / 360)) / (Math.PI / 180) * a / 180;
    return [n, o]
  }
  metersToLatLon(e, t) {
    const n = e / a * 180;
    let o = t / a * 180;
    return o = 180 / Math.PI * (2 * Math.atan(Math.exp(o * Math.PI / 180)) - Math.PI / 2), [o, n]
  }
  pixelsToMeters(e, t, n) {
    const o = this.resolution(n),
      i = e * o - a,
      r = a - t * o;
    return [i, r]
  }
  pixelsToLatLon(e, t, n) {
    const [o, i] = this.pixelsToMeters(e, t, n);
    return this.metersToLatLon(o, i)
  }
  latLonToPixels(e, t, n) {
    const [o, i] = this.latLonToMeters(e, t);
    return this.metersToPixels(o, i, n)
  }
  latLonToPixelsFloor(e, t, n) {
    const [o, i] = this.latLonToPixels(e, t, n);
    return [Math.floor(o), Math.floor(i)]
  }
  metersToPixels(e, t, n) {
    const o = this.resolution(n),
      i = (e + a) / o,
      r = (a - t) / o;
    return [i, r]
  }
  latLonToTile(e, t, n) {
    const [o, i] = this.latLonToMeters(e, t);
    return this.metersToTile(o, i, n)
  }
  metersToTile(e, t, n) {
    const [o, i] = this.metersToPixels(e, t, n);
    return this.pixelsToTile(o, i)
  }
  pixelsToTile(e, t) {
    const n = Math.ceil(e / this.tileSize) - 1,
      o = Math.ceil(t / this.tileSize) - 1;
    return [n, o]
  }
  pixelsToTileLocal(e, t) {
    return {
      tile: this.pixelsToTile(e, t),
      pixel: [Math.floor(e) % this.tileSize, Math.floor(t) % this.tileSize]
    }
  }
  tileBounds(e, t, n) {
    const [o, i] = this.pixelsToMeters(e * this.tileSize, t * this.tileSize, n), [r, l] = this.pixelsToMeters((e + 1) * this.tileSize, (t + 1) * this.tileSize, n);
    return {
      min: [o, i],
      max: [r, l]
    }
  }
  tileBoundsLatLon(e, t, n) {
    const o = this.tileBounds(e, t, n);
    return {
      min: this.metersToLatLon(o.min[0], o.min[1]),
      max: this.metersToLatLon(o.max[0], o.max[1])
    }
  }
  resolution(e) {
    return this.initialResolution / 2 ** e
  }
  latLonToTileAndPixel(e, t, n) {
    const [o, i] = this.latLonToMeters(e, t), [r, l] = this.metersToTile(o, i, n), [c, m] = this.metersToPixels(o, i, n);
    return {
      tile: [r, l],
      pixel: [Math.floor(c) % this.tileSize, Math.floor(m) % this.tileSize]
    }
  }
  pixelBounds(e, t, n) {
    return {
      min: this.pixelsToMeters(e, t, n),
      max: this.pixelsToMeters(e + 1, t + 1, n)
    }
  }
  pixelToBoundsLatLon(e, t, n) {
    const o = this.pixelBounds(e, t, n);
    return {
      min: this.metersToLatLon(o.min[0], o.min[1]),
      max: this.metersToLatLon(o.max[0], o.max[1])
    }
  }
  latLonToTileBoundsLatLon(e, t, n) {
    const [o, i] = this.latLonToMeters(e, t), [r, l] = this.metersToTile(o, i, n);
    return this.tileBoundsLatLon(r, l, n)
  }
  latLonToPixelBoundsLatLon(e, t, n) {
    const [o, i] = this.latLonToMeters(e, t), [r, l] = this.metersToPixels(o, i, n);
    return this.pixelToBoundsLatLon(Math.floor(r), Math.floor(l), n)
  }
  latLonToRegionAndPixel(e, t, n, o = L.regionSize) {
    const [i, r] = this.latLonToPixelsFloor(e, t, n), l = this.tileSize * o;
    return {
      region: [Math.floor(i / l), Math.floor(r / l)],
      pixel: [i % l, r % l]
    }
  }
}

function H(s, e = !0) {
  const {
    min: t,
    max: n
  } = s;
  return e ? [
    [t[1], n[0]],
    [n[1], n[0]],
    [n[1], t[0]],
    [t[1], t[0]]
  ] : [
    [t[0], n[1]],
    [n[0], n[1]],
    [n[0], t[1]],
    [t[0], t[1]]
  ]
}

function X(s) {
  return [(s.min[0] + s.max[0]) / 2, (s.min[1] + s.max[1]) / 2]
}
export {
  k as G, N as a, H as b, X as g, F as n, E as w
};