var e = void 0;

function t(t) {
  return e = t, c({
    type: `previewPixels`,
    data: t
  })
}

function n() {
  return e = void 0, c({
    type: `clearPixelPreview`
  })
}

function r(e) {
  return c({
    type: `paintPixels`,
    data: e
  })
}

function i() {
  return c({
    type: `refreshPixelArt`
  })
}
async function a() {
  e || await c({
    type: `clearPixelPreview`
  })
}
var o = 1e4,
  s = 0;

function c(e) {
  let t = s++,
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
      s = e => {
        var n;
        ((n = e.data) == null ? void 0 : n.id) === t && l()
      },
      c = () => {
        clearTimeout(d), i.removeEventListener(`message`, s)
      },
      l = () => {
        a || (a = !0, c(), e())
      },
      u = e => {
        a || (a = !0, c(), r(e))
      },
      d = setTimeout(() => u(Error(`Timed out waiting for service worker response`)), o);
    i.addEventListener(`message`, s);
    let f = e => {
        try {
          e.postMessage(n)
        } catch (e) {
          u(e instanceof Error ? e : Error(String(e)))
        }
      },
      p = i.controller;
    p ? f(p) : i.ready.then(e => {
      if (a) return;
      let t = e.active;
      t ? f(t) : u(Error(`Service worker registration not active`))
    }, e => u(e instanceof Error ? e : Error(String(e))))
  })
}

function l({
  pixel: e,
  season: t,
  tile: n
}) {
  return `t=(${n[0]},${n[1]});p=(${e[0]},${e[1]});s=${t}`
}

function u(e, {
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
export {
  t as a, r as i, n, i as o, l as r, a as s, u as t
};