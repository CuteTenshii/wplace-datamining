var u = Object.defineProperty;
var L = (n, t, e) => t in n ? u(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : n[t] = e;
var x = (n, t, e) => L(n, typeof t != "symbol" ? t + "" : t, e);
import {
  S as c
} from "./DH3WiCeb.js";
const a = 2 * Math.PI * 6378137 / 2,
  m = 85.0511287798066;

function M(n) {
  return ((n + 180) % 360 + 360) % 360 - 180
}

function P(n, t) {
  return [Math.max(-m, Math.min(m, n)), M(t)]
}
class f {
  constructor(t = 256) {
    x(this, "initialResolution");
    this.tileSize = t, this.initialResolution = 2 * a / this.tileSize
  }
  latLonToMeters(t, e) {
    const o = e / 180 * a,
      i = Math.log(Math.tan((90 + t) * Math.PI / 360)) / (Math.PI / 180) * a / 180;
    return [o, i]
  }
  metersToLatLon(t, e) {
    const o = t / a * 180;
    let i = e / a * 180;
    return i = 180 / Math.PI * (2 * Math.atan(Math.exp(i * Math.PI / 180)) - Math.PI / 2), [i, o]
  }
  pixelsToMeters(t, e, o) {
    const i = this.resolution(o),
      s = t * i - a,
      r = a - e * i;
    return [s, r]
  }
  pixelsToLatLon(t, e, o) {
    const [i, s] = this.pixelsToMeters(t, e, o);
    return this.metersToLatLon(i, s)
  }
  latLonToPixels(t, e, o) {
    const [i, s] = this.latLonToMeters(t, e);
    return this.metersToPixels(i, s, o)
  }
  latLonToPixelsFloor(t, e, o) {
    const [i, s] = this.latLonToPixels(t, e, o);
    return [Math.floor(i), Math.floor(s)]
  }
  metersToPixels(t, e, o) {
    const i = this.resolution(o),
      s = (t + a) / i,
      r = (a - e) / i;
    return [s, r]
  }
  latLonToTile(t, e, o) {
    const [i, s] = this.latLonToMeters(t, e);
    return this.metersToTile(i, s, o)
  }
  metersToTile(t, e, o) {
    const [i, s] = this.metersToPixels(t, e, o);
    return this.pixelsToTile(i, s)
  }
  pixelsToTile(t, e) {
    const o = Math.ceil(t / this.tileSize) - 1,
      i = Math.ceil(e / this.tileSize) - 1;
    return [o, i]
  }
  pixelsToTileLocal(t, e) {
    return {
      tile: this.pixelsToTile(t, e),
      pixel: [Math.floor(t) % this.tileSize, Math.floor(e) % this.tileSize]
    }
  }
  tileBounds(t, e, o) {
    const [i, s] = this.pixelsToMeters(t * this.tileSize, e * this.tileSize, o), [r, l] = this.pixelsToMeters((t + 1) * this.tileSize, (e + 1) * this.tileSize, o);
    return {
      min: [i, s],
      max: [r, l]
    }
  }
  tileBoundsLatLon(t, e, o) {
    const i = this.tileBounds(t, e, o);
    return {
      min: this.metersToLatLon(i.min[0], i.min[1]),
      max: this.metersToLatLon(i.max[0], i.max[1])
    }
  }
  resolution(t) {
    return this.initialResolution / 2 ** t
  }
  latLonToTileAndPixel(t, e, o) {
    const [i, s] = this.latLonToMeters(t, e), [r, l] = this.metersToTile(i, s, o), [h, T] = this.metersToPixels(i, s, o);
    return {
      tile: [r, l],
      pixel: [Math.floor(h) % this.tileSize, Math.floor(T) % this.tileSize]
    }
  }
  pixelBounds(t, e, o) {
    return {
      min: this.pixelsToMeters(t, e, o),
      max: this.pixelsToMeters(t + 1, e + 1, o)
    }
  }
  pixelToBoundsLatLon(t, e, o) {
    const i = this.pixelBounds(t, e, o);
    return {
      min: this.metersToLatLon(i.min[0], i.min[1]),
      max: this.metersToLatLon(i.max[0], i.max[1])
    }
  }
  latLonToTileBoundsLatLon(t, e, o) {
    const [i, s] = this.latLonToMeters(t, e), [r, l] = this.metersToTile(i, s, o);
    return this.tileBoundsLatLon(r, l, o)
  }
  latLonToPixelBoundsLatLon(t, e, o) {
    const [i, s] = this.latLonToMeters(t, e), [r, l] = this.metersToPixels(i, s, o);
    return this.pixelToBoundsLatLon(Math.floor(r), Math.floor(l), o)
  }
  latLonToRegionAndPixel(t, e, o, i = c.regionSize) {
    const [s, r] = this.latLonToPixelsFloor(t, e, o), l = this.tileSize * i;
    return {
      region: [Math.floor(s / l), Math.floor(r / l)],
      pixel: [s % l, r % l]
    }
  }
}

function S(n, t = !0) {
  const {
    min: e,
    max: o
  } = n;
  return t ? [
    [e[1], o[0]],
    [o[1], o[0]],
    [o[1], e[0]],
    [e[1], e[0]]
  ] : [
    [e[0], o[1]],
    [o[0], o[1]],
    [o[0], e[1]],
    [e[0], e[1]]
  ]
}

function y(n) {
  return [(n.min[0] + n.max[0]) / 2, (n.min[1] + n.max[1]) / 2]
}
export {
  f as G, S as b, y as g, P as n, M as w
};