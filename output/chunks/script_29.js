import {
  Bt as e,
  Lt as t,
  Nt as n,
  jt as r,
  ut as i
} from "./D2z8HFb7.js";

function a(e) {
  return Math.floor(Math.random() * e)
}
var o = 14.5;
async function s() {
  let e = f();
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
    ...c().pos,
    zoom: o
  }
}

function c() {
  let e = Object.entries(l),
    [t, n] = e[a(e.length)];
  return {
    city: t,
    pos: n
  }
}
var l = {
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
  u = `location`;

function d(e, t) {
  localStorage.setItem(u, JSON.stringify({
    ...e,
    zoom: t
  }))
}

function f() {
  let e = localStorage.getItem(u);
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
  if (!(typeof n != `number` || typeof r != `number` || !p({
      lat: n,
      lng: r
    }))) return {
    lat: n,
    lng: r,
    zoom: typeof i == `number` && m(i) ? i : o
  }
}

function p(e) {
  return e.lat >= -90 && e.lat <= 90 && e.lng >= -180 && e.lng <= 180
}

function m(e) {
  return Number.isFinite(e) && e >= 0 && e <= 24
}
var h = new WeakMap,
  g = new WeakMap,
  _ = new class {
    get idx() {
      return i(t(h, this))
    }
    set idx(e) {
      r(t(h, this), e, !0)
    }
    get entries() {
      return i(t(g, this))
    }
    set entries(e) {
      r(t(g, this), e)
    }
    constructor() {
      e(this, h, n(-1)), e(this, g, n([]))
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
  _ as a, m as i, s as n, d as o, p as r, l as t
};