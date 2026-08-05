var x = Object.defineProperty;
var T = (i, e, t) => e in i ? x(i, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : i[e] = t;
var c = (i, e, t) => T(i, typeof e != "symbol" ? e + "" : e, t);
import {
  g as m
} from "./BhCkpOlh.js";
import {
  d as L
} from "./gj3a2jtj.js";
const d = () => "No description",
  f = () => "Sem descrição",
  M = () => "无描述",
  _ = () => "Keine Beschreibung",
  P = () => "Sin descripción",
  S = () => "Aucune description",
  y = () => "Nessuna descrizione",
  B = () => "説明なし",
  z = () => "Brak opisu",
  R = () => "Без описания",
  g = () => "Без опису",
  A = () => "Không có mô tả",
  Y = (i = {}, e = {}) => {
    const t = e.locale ?? m();
    return t === "en" ? d() : t === "pt" ? f() : t === "ch" ? M() : t === "de" ? _() : t === "es" ? P() : t === "fr" ? S() : t === "it" ? y() : t === "jp" ? B() : t === "pl" ? z() : t === "ru" ? R() : t === "uk" ? g() : A()
  },
  E = () => "Reason",
  I = () => "Motivo",
  b = () => "原因",
  C = () => "Grund",
  k = () => "Motivo",
  v = () => "Raison",
  j = () => "Motivo",
  F = () => "理由",
  N = () => "Powód",
  w = () => "Причина",
  G = () => "Причина",
  H = () => "Lý do",
  O = (i = {}, e = {}) => {
    const t = e.locale ?? m();
    return t === "en" ? E() : t === "pt" ? I() : t === "ch" ? b() : t === "de" ? C() : t === "es" ? k() : t === "fr" ? v() : t === "it" ? j() : t === "jp" ? F() : t === "pl" ? N() : t === "ru" ? w() : t === "uk" ? G() : H()
  },
  a = 2 * Math.PI * 6378137 / 2,
  h = 85.0511287798066;

function X(i) {
  return ((i + 180) % 360 + 360) % 360 - 180
}

function W(i, e) {
  return [Math.max(-h, Math.min(h, i)), X(e)]
}
class q {
  constructor(e = 256) {
    c(this, "initialResolution");
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
      r = e * o - a,
      s = a - t * o;
    return [r, s]
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
      r = (e + a) / o,
      s = (a - t) / o;
    return [r, s]
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
    const [o, r] = this.pixelsToMeters(e * this.tileSize, t * this.tileSize, n), [s, l] = this.pixelsToMeters((e + 1) * this.tileSize, (t + 1) * this.tileSize, n);
    return {
      min: [o, r],
      max: [s, l]
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
    const [o, r] = this.latLonToMeters(e, t), [s, l] = this.metersToTile(o, r, n), [u, p] = this.metersToPixels(o, r, n);
    return {
      tile: [s, l],
      pixel: [Math.floor(u) % this.tileSize, Math.floor(p) % this.tileSize]
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
    const [o, r] = this.latLonToMeters(e, t), [s, l] = this.metersToTile(o, r, n);
    return this.tileBoundsLatLon(s, l, n)
  }
  latLonToPixelBoundsLatLon(e, t, n) {
    const [o, r] = this.latLonToMeters(e, t), [s, l] = this.metersToPixels(o, r, n);
    return this.pixelToBoundsLatLon(Math.floor(s), Math.floor(l), n)
  }
  latLonToRegionAndPixel(e, t, n, o = L.regionSize) {
    const [r, s] = this.latLonToPixelsFloor(e, t, n), l = this.tileSize * o;
    return {
      region: [Math.floor(r / l), Math.floor(s / l)],
      pixel: [r % l, s % l]
    }
  }
}

function J(i, e = !0) {
  const {
    min: t,
    max: n
  } = i;
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

function Q(i) {
  return [(i.min[0] + i.max[0]) / 2, (i.min[1] + i.max[1]) / 2]
}
export {
  q as G, W as a, J as b, Q as g, Y as n, O as r, X as w
};