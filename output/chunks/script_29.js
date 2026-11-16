import {
  Ft as e,
  Lt as t,
  Vt as n,
  Wt as r,
  pt as i
} from "./DXDHrD2o.js";

function a(e) {
  return Math.floor(Math.random() * e)
}
var o = 14.5;
async function s() {
  let e = p();
  if (e) return e;
  try {
    if ((await navigator.permissions.query({
        name: `geolocation`
      })).state === `granted`) {
      let e = await new Promise((e, t) => navigator.geolocation.getCurrentPosition(t => e(t), e => t(e)));
      return {
        lat: e.coords.latitude,
        lng: e.coords.longitude,
        zoom: o
      }
    }
  } catch (e) {
    console.error(e)
  }
  return {
    ...l().pos,
    zoom: o
  }
}

function c() {
  return {
    ...l().pos,
    zoom: o
  }
}

function l() {
  let e = Object.entries(u),
    [t, n] = e[a(e.length)];
  return {
    city: t,
    pos: n
  }
}
var u = {
    tokyo: {
      lat: 35.677545560719665,
      lng: 139.76394445809638
    },
    paris: {
      lat: 48.8537151734952,
      lng: 2.3484026030630787
    },
    newYork: {
      lat: 40.71283173786517,
      lng: -74.00599771376795
    },
    saoPaulo: {
      lat: -23.550584064565356,
      lng: -46.63339720713918
    },
    sydney: {
      lat: -33.86943325619071,
      lng: 151.2083447239608
    }
  },
  d = `location`;

function f(e, t) {
  localStorage.setItem(d, JSON.stringify({
    ...e,
    zoom: t
  }))
}

function p() {
  let e = localStorage.getItem(d);
  if (!e) return;
  let t;
  try {
    t = JSON.parse(e)
  } catch {
    return
  }
  if (!t || typeof t != `object`) return;
  let {
    lat: n,
    lng: r,
    zoom: i
  } = t;
  if (!(typeof n != `number` || typeof r != `number` || !m({
      lat: n,
      lng: r
    }))) return {
    lat: n,
    lng: r,
    zoom: typeof i == `number` && h(i) ? i : o
  }
}

function m(e) {
  return e.lat >= -90 && e.lat <= 90 && e.lng >= -180 && e.lng <= 180
}

function h(e) {
  return Number.isFinite(e) && e >= 0 && e <= 24
}
var g = new WeakMap,
  _ = new WeakMap,
  v = new class {
    get idx() {
      return i(n(g, this))
    }
    set idx(t) {
      e(n(g, this), t, !0)
    }
    get entries() {
      return i(n(_, this))
    }
    set entries(t) {
      e(n(_, this), t)
    }
    constructor() {
      r(this, g, t(-1)), r(this, _, t([]))
    }
    hasNext() {
      return this.idx < this.entries.length - 1
    }
    goToNext(e) {
      let t = this.idx + 1,
        n = this.entries[t];
      n && (this.idx = t, e.flyTo({
        center: n.pos,
        zoom: n.zoom
      }))
    }
    hasPrev() {
      return this.idx > 0
    }
    goToPrev(e) {
      let t = this.idx - 1,
        n = this.entries[t];
      n && (this.idx = t, e.flyTo({
        center: n.pos,
        zoom: n.zoom
      }))
    }
    isEmpty() {
      return this.entries.length === 0
    }
    push(e) {
      this.idx += 1, this.entries = [...this.entries.slice(0, this.idx), e]
    }
  };
export {
  h as a, m as i, c as n, v as o, s as r, f as s, u as t
};