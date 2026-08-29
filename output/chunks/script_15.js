const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./BD7KhWjt.js", "./CX37corp.js", "./uSe_RizA.js", "./C20XUcOo.js", "./Dxrfux0V.js", "./CFbOHw-6.js", "./DCvMiq9p.js", "./CrLCY2lS.js", "./pZ_LzADz.js", "./Dl3RR1lN.js", "./Csp-PnlH.js"]))) => i.map(i => d[i]);
import {
  At as e,
  Gt as t,
  It as n,
  Mt as r,
  Wt as i,
  lt as a,
  zt as o
} from "./CX37corp.js";
import "./C20XUcOo.js";
import {
  a as s
} from "./CFbOHw-6.js";
import {
  S as c,
  q as l
} from "./DCvMiq9p.js";

function u(e) {
  return Math.floor(Math.random() * e)
}
var d = 14.5;
async function f() {
  let e = _();
  if (e) return e;
  try {
    if ((await navigator.permissions.query({
        name: `geolocation`
      })).state === `granted`) {
      let e = await new Promise((e, t) => navigator.geolocation.getCurrentPosition(t => e(t), e => t(e)));
      return {
        lat: e.coords.latitude,
        lng: e.coords.longitude,
        zoom: d
      }
    }
  } catch (e) {
    console.error(e)
  }
  return {
    ...p().pos,
    zoom: d
  }
}

function p() {
  let e = Object.entries(m),
    [t, n] = e[u(e.length)];
  return {
    city: t,
    pos: n
  }
}
var m = {
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
  h = `location`;

function g(e, t) {
  localStorage.setItem(h, JSON.stringify({
    ...e,
    zoom: t
  }))
}

function _() {
  let e = localStorage.getItem(h);
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
  if (!(typeof n != `number` || typeof r != `number` || !v({
      lat: n,
      lng: r
    }))) return {
    lat: n,
    lng: r,
    zoom: typeof i == `number` && y(i) ? i : d
  }
}

function v(e) {
  return e.lat >= -90 && e.lat <= 90 && e.lng >= -180 && e.lng <= 180
}

function y(e) {
  return Number.isFinite(e) && e >= 0 && e <= 24
}
var b = new WeakMap,
  x = new WeakMap,
  S = new class {
    get idx() {
      return a(n(b, this))
    }
    set idx(t) {
      e(n(b, this), t, !0)
    }
    get entries() {
      return a(n(x, this))
    }
    set entries(t) {
      e(n(x, this), t)
    }
    constructor() {
      o(this, b, r(-1)), o(this, x, r([]))
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
  },
  C = t({
    status: `unavailable`
  });
async function w() {
  let e = i(C);
  if (e.status === `available`) {
    C.set({
      status: `prompting`
    });
    try {
      return await e.event.prompt()
    } finally {
      i(C).status === `prompting` && C.set({
        status: `unavailable`
      })
    }
  }
}

function T() {
  return window.matchMedia(`(display-mode: standalone)`).matches || `standalone` in window.navigator && window.navigator.standalone === !0
}

function E() {
  let e = `last-unfocus`,
    t = new AbortController,
    n = window.pwaInstallPrompt;
  if (window.pwaInstallPrompt = void 0, n && C.set({
      status: `available`,
      event: n
    }), window.addEventListener(`beforeinstallprompt`, e => {
      e.preventDefault(), window.pwaInstallPrompt === e && (window.pwaInstallPrompt = void 0), C.set({
        status: `available`,
        event: e
      })
    }, {
      signal: t.signal
    }), window.addEventListener(`appinstalled`, () => {
      C.set({
        status: `installed`
      })
    }, {
      signal: t.signal
    }), T()) {
    queueMicrotask(async () => {
      let {
        TWAServices: e
      } = await s(async () => {
        let {
          TWAServices: e
        } = await import(`./BD7KhWjt.js`).then(e => e.i);
        return {
          TWAServices: e
        }
      }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), import.meta.url);
      await e.onInit(t)
    });
    let n = () => {
        let t = localStorage.getItem(e);
        if (t) {
          let e = parseInt(t, 10);
          Date.now() - e > 5 * c.minute && window.location.reload()
        }
      },
      r = () => {
        localStorage.setItem(e, Date.now().toString());
        let t = l.map;
        t && g(t.getCenter(), t.getZoom())
      };
    document.addEventListener(`visibilitychange`, () => {
      document.visibilityState === `visible` ? n() : r()
    }, {
      signal: t.signal
    }), window.addEventListener(`pageshow`, n, {
      signal: t.signal
    }), window.addEventListener(`pagehide`, r, {
      signal: t.signal
    })
  }
  return () => {
    t.abort(), C.set({
      status: `unavailable`
    })
  }
}
export {
  m as a, y as c, E as i, S as l, w as n, f as o, C as r, v as s, T as t, g as u
};