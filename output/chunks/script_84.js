var x = Object.defineProperty;
var m = (s, e, t) => e in s ? x(s, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : s[e] = t;
var c = (s, e, t) => m(s, typeof e != "symbol" ? e + "" : e, t);
import {
  g as h
} from "./BhCkpOlh.js";
import {
  d as T
} from "./BadwafE7.js";
const L = () => "No description",
  d = () => "Sem descrição",
  f = () => "无描述",
  _ = () => "Keine Beschreibung",
  M = () => "Sin descripción",
  P = () => "Aucune description",
  S = () => "Nessuna descrizione",
  y = () => "説明なし",
  B = () => "Brak opisu",
  g = () => "Без описания",
  z = () => "Без опису",
  R = () => "Không có mô tả",
  w = (s = {}, e = {}) => {
    const t = e.locale ?? h();
    return t === "en" ? L() : t === "pt" ? d() : t === "ch" ? f() : t === "de" ? _() : t === "es" ? M() : t === "fr" ? P() : t === "it" ? S() : t === "jp" ? y() : t === "pl" ? B() : t === "ru" ? g() : t === "uk" ? z() : R()
  },
  b = () => "Reason",
  I = () => "Motivo",
  A = () => "原因",
  k = () => "Grund",
  v = () => "Motivo",
  C = () => "Raison",
  E = () => "Motivo",
  j = () => "理由",
  F = () => "Powód",
  N = () => "Причина",
  G = () => "Причина",
  H = () => "Lý do",
  D = (s = {}, e = {}) => {
    const t = e.locale ?? h();
    return t === "en" ? b() : t === "pt" ? I() : t === "ch" ? A() : t === "de" ? k() : t === "es" ? v() : t === "fr" ? C() : t === "it" ? E() : t === "jp" ? j() : t === "pl" ? F() : t === "ru" ? N() : t === "uk" ? G() : H()
  },
  u = 2 * Math.PI * 6378137 / 2;
class U {
  constructor(e = 256) {
    c(this, "initialResolution");
    this.tileSize = e, this.initialResolution = 2 * u / this.tileSize
  }
  latLonToMeters(e, t) {
    const n = t / 180 * u,
      o = Math.log(Math.tan((90 + e) * Math.PI / 360)) / (Math.PI / 180) * u / 180;
    return [n, o]
  }
  metersToLatLon(e, t) {
    const n = e / u * 180;
    let o = t / u * 180;
    return o = 180 / Math.PI * (2 * Math.atan(Math.exp(o * Math.PI / 180)) - Math.PI / 2), [o, n]
  }
  pixelsToMeters(e, t, n) {
    const o = this.resolution(n),
      r = e * o - u,
      i = u - t * o;
    return [r, i]
  }
  pixelsToLatLon(e, t, n) {
    const [o, r] = this.pixelsToMeters(e, t, n);
    return this.metersToLatLon(o, r)
  }
  latLonToPixels(e, t, n) {
    const [o, r] = this.latLonToMeters(e, t);
    return this.metersToPixels(o, r, n)
  }
  latLonToPixelsFloor(e, t, n) {
    const [o, r] = this.latLonToPixels(e, t, n);
    return [Math.floor(o), Math.floor(r)]
  }
  metersToPixels(e, t, n) {
    const o = this.resolution(n),
      r = (e + u) / o,
      i = (u - t) / o;
    return [r, i]
  }
  latLonToTile(e, t, n) {
    const [o, r] = this.latLonToMeters(e, t);
    return this.metersToTile(o, r, n)
  }
  metersToTile(e, t, n) {
    const [o, r] = this.metersToPixels(e, t, n);
    return this.pixelsToTile(o, r)
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
    const [o, r] = this.pixelsToMeters(e * this.tileSize, t * this.tileSize, n), [i, l] = this.pixelsToMeters((e + 1) * this.tileSize, (t + 1) * this.tileSize, n);
    return {
      min: [o, r],
      max: [i, l]
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
    const [o, r] = this.latLonToMeters(e, t), [i, l] = this.metersToTile(o, r, n), [a, p] = this.metersToPixels(o, r, n);
    return {
      tile: [i, l],
      pixel: [Math.floor(a) % this.tileSize, Math.floor(p) % this.tileSize]
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
    const [o, r] = this.latLonToMeters(e, t), [i, l] = this.metersToTile(o, r, n);
    return this.tileBoundsLatLon(i, l, n)
  }
  latLonToPixelBoundsLatLon(e, t, n) {
    const [o, r] = this.latLonToMeters(e, t), [i, l] = this.metersToPixels(o, r, n);
    return this.pixelToBoundsLatLon(Math.floor(i), Math.floor(l), n)
  }
  latLonToRegionAndPixel(e, t, n, o = T.regionSize) {
    const [r, i] = this.latLonToPixelsFloor(e, t, n), l = this.tileSize * o;
    return {
      region: [Math.floor(r / l), Math.floor(i / l)],
      pixel: [r % l, i % l]
    }
  }
}

function q(s, e = !0) {
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

function J(s) {
  return [(s.min[0] + s.max[0]) / 2, (s.min[1] + s.max[1]) / 2]
}
export {
  U as G, q as b, J as g, w as n, D as r
};