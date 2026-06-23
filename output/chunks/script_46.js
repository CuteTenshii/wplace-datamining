var x = Object.defineProperty;
var m = (s, e, t) => e in s ? x(s, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : s[e] = t;
var u = (s, e, t) => m(s, typeof e != "symbol" ? e + "" : e, t);
import {
  g as T
} from "./BhCkpOlh.js";
import {
  b as p
} from "./BJ9TJh0P.js";
const L = () => "No description",
  d = () => "Sem descrição",
  M = () => "无描述",
  f = () => "Keine Beschreibung",
  _ = () => "Sin descripción",
  P = () => "Aucune description",
  S = () => "Nessuna descrizione",
  y = () => "説明なし",
  B = () => "Brak opisu",
  g = () => "Без описания",
  z = () => "Без опису",
  b = () => "Không có mô tả",
  C = (s = {}, e = {}) => {
    const t = e.locale ?? T();
    return t === "en" ? L() : t === "pt" ? d() : t === "ch" ? M() : t === "de" ? f() : t === "es" ? _() : t === "fr" ? P() : t === "it" ? S() : t === "jp" ? y() : t === "pl" ? B() : t === "ru" ? g() : t === "uk" ? z() : b()
  },
  a = 2 * Math.PI * 6378137 / 2;
class E {
  constructor(e = 256) {
    u(this, "initialResolution");
    this.tileSize = e, this.initialResolution = 2 * a / this.tileSize
  }
  latLonToMeters(e, t) {
    const i = t / 180 * a,
      n = Math.log(Math.tan((90 + e) * Math.PI / 360)) / (Math.PI / 180) * a / 180;
    return [i, n]
  }
  metersToLatLon(e, t) {
    const i = e / a * 180;
    let n = t / a * 180;
    return n = 180 / Math.PI * (2 * Math.atan(Math.exp(n * Math.PI / 180)) - Math.PI / 2), [n, i]
  }
  pixelsToMeters(e, t, i) {
    const n = this.resolution(i),
      o = e * n - a,
      r = a - t * n;
    return [o, r]
  }
  pixelsToLatLon(e, t, i) {
    const [n, o] = this.pixelsToMeters(e, t, i);
    return this.metersToLatLon(n, o)
  }
  latLonToPixels(e, t, i) {
    const [n, o] = this.latLonToMeters(e, t);
    return this.metersToPixels(n, o, i)
  }
  latLonToPixelsFloor(e, t, i) {
    const [n, o] = this.latLonToPixels(e, t, i);
    return [Math.floor(n), Math.floor(o)]
  }
  metersToPixels(e, t, i) {
    const n = this.resolution(i),
      o = (e + a) / n,
      r = (a - t) / n;
    return [o, r]
  }
  latLonToTile(e, t, i) {
    const [n, o] = this.latLonToMeters(e, t);
    return this.metersToTile(n, o, i)
  }
  metersToTile(e, t, i) {
    const [n, o] = this.metersToPixels(e, t, i);
    return this.pixelsToTile(n, o)
  }
  pixelsToTile(e, t) {
    const i = Math.ceil(e / this.tileSize) - 1,
      n = Math.ceil(t / this.tileSize) - 1;
    return [i, n]
  }
  pixelsToTileLocal(e, t) {
    return {
      tile: this.pixelsToTile(e, t),
      pixel: [Math.floor(e) % this.tileSize, Math.floor(t) % this.tileSize]
    }
  }
  tileBounds(e, t, i) {
    const [n, o] = this.pixelsToMeters(e * this.tileSize, t * this.tileSize, i), [r, l] = this.pixelsToMeters((e + 1) * this.tileSize, (t + 1) * this.tileSize, i);
    return {
      min: [n, o],
      max: [r, l]
    }
  }
  tileBoundsLatLon(e, t, i) {
    const n = this.tileBounds(e, t, i);
    return {
      min: this.metersToLatLon(n.min[0], n.min[1]),
      max: this.metersToLatLon(n.max[0], n.max[1])
    }
  }
  resolution(e) {
    return this.initialResolution / 2 ** e
  }
  latLonToTileAndPixel(e, t, i) {
    const [n, o] = this.latLonToMeters(e, t), [r, l] = this.metersToTile(n, o, i), [c, h] = this.metersToPixels(n, o, i);
    return {
      tile: [r, l],
      pixel: [Math.floor(c) % this.tileSize, Math.floor(h) % this.tileSize]
    }
  }
  pixelBounds(e, t, i) {
    return {
      min: this.pixelsToMeters(e, t, i),
      max: this.pixelsToMeters(e + 1, t + 1, i)
    }
  }
  pixelToBoundsLatLon(e, t, i) {
    const n = this.pixelBounds(e, t, i);
    return {
      min: this.metersToLatLon(n.min[0], n.min[1]),
      max: this.metersToLatLon(n.max[0], n.max[1])
    }
  }
  latLonToTileBoundsLatLon(e, t, i) {
    const [n, o] = this.latLonToMeters(e, t), [r, l] = this.metersToTile(n, o, i);
    return this.tileBoundsLatLon(r, l, i)
  }
  latLonToPixelBoundsLatLon(e, t, i) {
    const [n, o] = this.latLonToMeters(e, t), [r, l] = this.metersToPixels(n, o, i);
    return this.pixelToBoundsLatLon(Math.floor(r), Math.floor(l), i)
  }
  latLonToRegionAndPixel(e, t, i, n = p.regionSize) {
    const [o, r] = this.latLonToPixelsFloor(e, t, i), l = this.tileSize * n;
    return {
      region: [Math.floor(o / l), Math.floor(r / l)],
      pixel: [o % l, r % l]
    }
  }
}

function F(s, e = !0) {
  const {
    min: t,
    max: i
  } = s;
  return e ? [
    [t[1], i[0]],
    [i[1], i[0]],
    [i[1], t[0]],
    [t[1], t[0]]
  ] : [
    [t[0], i[1]],
    [i[0], i[1]],
    [i[0], t[1]],
    [t[0], t[1]]
  ]
}

function N(s) {
  return [(s.min[0] + s.max[0]) / 2, (s.min[1] + s.max[1]) / 2]
}
export {
  E as G, F as b, N as g, C as n
};