import {
  un as e
} from "./DXDHrD2o.js";
import {
  W as t
} from "./BiTo61FT.js";
import {
  n,
  t as r
} from "./LepJA_go.js";
var i = [],
  a = new Set;

function o(e, t) {
  try {
    e(t)
  } catch (e) {
    console.error(`Pending paint preview listener failed.`, e)
  }
}

function s(e) {
  i = [...e];
  for (let e of a) o(e, i)
}

function c(e) {
  return a.add(e), o(e, i), () => a.delete(e)
}

function l(e, t, n) {
  let r = new Map;
  for (let e of t) {
    if (e.season !== n) continue;
    let t = `${e.tile[0]},${e.tile[1]}`,
      i = r.get(t);
    i ? i.push(e) : r.set(t, [e])
  }
  let i = new Set([...e.keys(), ...r.keys()]);
  for (let [t, n] of r) {
    let r = e.get(t);
    (r == null ? void 0 : r.length) === n.length && n.every((e, t) => {
      let n = r[t];
      return e === n || e.pixel[0] === n.pixel[0] && e.pixel[1] === n.pixel[1] && e.color.r === n.color.r && e.color.g === n.color.g && e.color.b === n.color.b && e.color.a === n.color.a
    }) && i.delete(t)
  }
  return {
    byTile: r,
    changedTileCoordinates: [...i].flatMap(e => e.split(`,`).map(Number))
  }
}

function u(e, t, n, r, i, a) {
  if (e.length !== t * n * 4) throw Error(`Pending paint preview tile dimensions are invalid.`);
  for (let o of a) {
    let a = o.pixel[0] - r,
      s = o.pixel[1] - i;
    if (a < 0 || s < 0 || a >= t || s >= n) continue;
    let c = (s * t + a) * 4;
    e[c] = o.color.r, e[c + 1] = o.color.g, e[c + 2] = o.color.b, e[c + 3] = o.color.a
  }
}

function d(e, t, n) {
  return [t, n].find(t => t && e.getLayer(t))
}
var f = class {
    constructor(t) {
      e(this, `input`, void 0), e(this, `gm`, void 0), e(this, `opacity`, 1), e(this, `id`, `paint-preview-${Math.random()}`), e(this, `tiles`, new Map), this.input = t, this.gm = new r(this.input.tileSize)
    }
    place([e, t], r) {
      let {
        tile: i,
        pixel: a
      } = this.gm.latLonToTileAndPixel(e, t, this.input.tileZoom), o = this.getTileKey(i[0], i[1]), s = this.tiles.get(o);
      if (!s) {
        let e = this.gm.tileBoundsLatLon(i[0], i[1], this.input.tileZoom),
          t = new p({
            coordinates: n(e, !0),
            id: `${this.id}-${o}`,
            layerPaint: {
              "raster-opacity": this.opacity,
              "raster-resampling": `nearest`
            },
            tileSize: this.input.tileSize,
            beforeLayerId: this.input.beforeLayerId,
            fallbackBeforeLayerId: this.input.fallbackBeforeLayerId
          });
        t.addTo(this.input.map), this.tiles.set(o, t), s = t
      }
      s.place(a[0], this.input.tileSize - a[1] - 1, r)
    }
    clear() {
      let e = this.input.map;
      for (let t of this.tiles.values()) t.removeFrom(e), t.removeDOM();
      this.tiles.clear()
    }
    commit(e, t) {
      if (!this.tiles.size) return;
      let n = this.input.map,
        r = this.tiles,
        i = this.opacity;
      this.tiles = new Map, this.id = `paint-preview-${Math.random()}`;
      let a = e => {
          n.off(`render`, s), n.off(`remove`, o);
          for (let t of r.values()) e && t.removeFrom(n), t.removeDOM();
          r.clear()
        },
        o = () => a(!1),
        s = () => {
          if (!n.getSource(e) || n.isSourceLoaded(e)) {
            a(!0);
            return
          }
          let t = +(n.getPaintProperty(e, `raster-opacity`) === 1);
          if (i !== t) {
            i = t;
            for (let e of r.values()) e.setOpacity(i)
          }
        };
      n.on(`render`, s), n.on(`remove`, o), t()
    }
    clearAndPlace(e, t) {
      this.clear(), this.place(e, t)
    }
    remove([e, t]) {
      let {
        tile: n,
        pixel: r
      } = this.gm.latLonToTileAndPixel(e, t, this.input.tileZoom), i = this.getTileKey(n[0], n[1]), a = this.tiles.get(i);
      a && a.remove(r[0], this.input.tileSize - r[1] - 1)
    }
    setCanvasOpacity(e) {
      this.opacity = e;
      for (let t of this.tiles.values()) t.setOpacity(e)
    }
    setLayerOrder(e, t) {
      this.input.beforeLayerId = e, this.input.fallbackBeforeLayerId = t;
      for (let n of this.tiles.values()) n.setLayerOrder(e, t)
    }
    getTileKey(e, t) {
      return `${e},${t}`
    }
  },
  p = class {
    constructor(t) {
      e(this, `input`, void 0), e(this, `canvas`, void 0), e(this, `maps`, new Set), this.input = t;
      let n = this.input.tileSize;
      this.canvas = document.createElement(`canvas`), this.canvas.width = n, this.canvas.height = n
    }
    place(e, n, r) {
      var i;
      let a = ((i = t.colors) == null ? void 0 : i[r]) ?? t.colors[0],
        o = this.canvas.getContext(`2d`);
      if (o) {
        let t = o.createImageData(1, 1),
          [i, s, c] = a.rgb,
          l = r === 0 ? 0 : 255;
        t.data[0] = i, t.data[1] = s, t.data[2] = c, t.data[3] = l, o.putImageData(t, e, n)
      }
    }
    remove(e, t) {
      let n = this.canvas.getContext(`2d`);
      n && n.clearRect(e, t, 1, 1)
    }
    addTo(e) {
      let t = this.input.id;
      if (e.getSource(t) || e.addSource(t, {
          type: `canvas`,
          canvas: this.canvas,
          coordinates: this.input.coordinates
        }), !e.getLayer(t)) {
        let n = d(e, this.input.beforeLayerId, this.input.fallbackBeforeLayerId);
        e.addLayer({
          id: t,
          type: `raster`,
          source: t,
          paint: this.input.layerPaint
        }, n)
      }
      this.maps.add(e)
    }
    removeFrom(e) {
      let {
        id: t
      } = this.input;
      e.getLayer(t) && e.removeLayer(t), e.getSource(t) && e.removeSource(t), this.maps.delete(e)
    }
    removeDOM() {
      this.canvas.remove()
    }
    setOpacity(e) {
      for (let t of this.maps.values()) t.setPaintProperty(this.input.id, `raster-opacity`, e)
    }
    setLayerOrder(e, t) {
      this.input.beforeLayerId = e, this.input.fallbackBeforeLayerId = t;
      for (let n of this.maps) {
        if (!n.getLayer(this.input.id)) continue;
        let r = d(n, e, t);
        r && n.moveLayer(this.input.id, r)
      }
    }
  };
export {
  l as a, c as i, u as n, s as r, f as t
};