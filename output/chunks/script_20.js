import {
  At as e,
  It as t,
  Mt as n,
  lt as r,
  zt as i
} from "./R3px7NU1.js";
var a, o, s = `last_seen_patch_version`,
  c = new(a = new WeakMap, o = new WeakMap, class {
    get open() {
      return r(t(a, this))
    }
    set open(n) {
      e(t(a, this), n, !0)
    }
    get seenVersion() {
      return r(t(o, this))
    }
    set seenVersion(n) {
      e(t(o, this), n, !0)
    }
    constructor() {
      i(this, a, n(!1)), i(this, o, n(``));
      try {
        this.seenVersion = localStorage.getItem(s) ?? ``
      } catch {}
    }
    show(e) {
      this.open = !0, this.seenVersion = e;
      try {
        localStorage.setItem(s, e)
      } catch {}
    }
  });

function l(e, {
  interval: t,
  immediate: n = !1
}) {
  let r = n ? -1 / 0 : Date.now(),
    i = () => typeof document > `u` || document.visibilityState === `visible`;
  async function a() {
    let t = r;
    try {
      r = Date.now(), await e()
    } catch (e) {
      console.error(e), r = t
    }
  }
  let o = setInterval(() => {
    i() && a()
  }, t);
  n && a();
  async function s() {
    Date.now() - r >= t && await a()
  }
  let c = new AbortController;
  return typeof document < `u` && (document.addEventListener(`visibilitychange`, () => s(), {
    signal: c.signal
  }), document.addEventListener(`resume`, () => s(), {
    signal: c.signal
  })), typeof window < `u` && (window.addEventListener(`pageshow`, () => s(), {
    signal: c.signal
  }), window.addEventListener(`focus`, () => s(), {
    signal: c.signal
  }), window.addEventListener(`online`, () => s(), {
    signal: c.signal
  }), window.addEventListener(`wplace:online`, () => s(), {
    signal: c.signal
  })), () => {
    clearInterval(o), c.abort()
  }
}
var u = void 0;
typeof navigator < `u` && navigator.serviceWorker && navigator.serviceWorker.addEventListener(`controllerchange`, () => {
  u && b({
    type: `previewPixels`,
    data: u
  }).catch(e => console.warn(`[sw] message failed`, e))
});
var d = new Set;

function f(e) {
  return d.add(e), () => d.delete(e)
}

function p(e) {
  return u = e, b({
    type: `previewPixels`,
    data: e
  })
}

function m() {
  return u = void 0, b({
    type: `clearPixelPreview`
  })
}
async function h(e) {
  await b({
    type: `paintPixels`,
    data: e
  });
  for (let t of d) try {
    t(e)
  } catch (e) {
    console.error(`Canvas paint listener failed.`, e)
  }
}

function g() {
  return b({
    type: `refreshPixelArt`
  })
}
async function _() {
  u || await b({
    type: `clearPixelPreview`
  })
}
var v = 1e4,
  y = 0;

function b(e) {
  let t = y++,
    n = {
      ...e,
      id: t
    };
  return new Promise((e, r) => {
    let i = navigator.serviceWorker;
    if (!i) {
      r(Error(`Service Workers are not supported/enabled in your browser. Some features might not work properly.`));
      return
    }
    let a = !1,
      o = e => {
        var n;
        ((n = e.data) == null ? void 0 : n.id) === t && c()
      },
      s = () => {
        clearTimeout(u), i.removeEventListener(`message`, o)
      },
      c = () => {
        a || (a = !0, s(), e())
      },
      l = e => {
        a || (a = !0, s(), r(e))
      },
      u = setTimeout(() => l(Error(`Timed out waiting for service worker response`)), v);
    i.addEventListener(`message`, o);
    let d = e => {
        try {
          e.postMessage(n)
        } catch (e) {
          l(e instanceof Error ? e : Error(String(e)))
        }
      },
      f = i.controller;
    f ? d(f) : i.ready.then(e => {
      if (a) return;
      let t = e.active;
      t ? d(t) : l(Error(`Service worker registration not active`))
    }, e => l(e instanceof Error ? e : Error(String(e))))
  })
}

function x({
  pixel: e,
  season: t,
  tile: n
}) {
  return `t=(${n[0]},${n[1]});p=(${e[0]},${e[1]});s=${t}`
}
export {
  g as a, l as c, p as i, c as l, x as n, f as o, h as r, _ as s, m as t
};