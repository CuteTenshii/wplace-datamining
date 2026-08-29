import {
  Ft as e,
  Pt as t,
  Rt as n,
  ct as r,
  in as i,
  kt as a
} from "./D6uuD926.js";
import {
  S as o,
  b as s
} from "./C9RwO-Hq.js";
var c = void 0;

function l(e) {
  return c = e, g({
    type: `previewPixels`,
    data: e
  })
}

function u() {
  return c = void 0, g({
    type: `clearPixelPreview`
  })
}

function d(e) {
  return g({
    type: `paintPixels`,
    data: e
  })
}

function f() {
  return g({
    type: `refreshPixelArt`
  })
}
async function p() {
  c || await g({
    type: `clearPixelPreview`
  })
}
var m = 1e4,
  h = 0;

function g(e) {
  let t = h++,
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
      u = setTimeout(() => l(Error(`Timed out waiting for service worker response`)), m);
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

function _({
  pixel: e,
  season: t,
  tile: n
}) {
  return `t=(${n[0]},${n[1]});p=(${e[0]},${e[1]});s=${t}`
}
var v = 1,
  y = 9,
  b = 11;

function x(e) {
  return o(e) && e.nodeType === v && typeof e.nodeName == `string`
}

function S(e) {
  return o(e) && e.nodeType === y
}

function C(e) {
  var t;
  return o(e) && ((t = e.constructor) == null ? void 0 : t.name) === `VisualViewport`
}

function w(e) {
  return o(e) && e.nodeType !== void 0
}

function T(e) {
  return w(e) && e.nodeType === b && `host` in e
}

function E(e, t) {
  var n;
  if (!e || !t || !x(e) || !x(t)) return !1;
  let r = (n = t.getRootNode) == null ? void 0 : n.call(t);
  if (e === t || e.contains(t)) return !0;
  if (r && T(r)) {
    let n = t;
    for (; n;) {
      if (e === n) return !0;
      n = n.parentNode || n.host
    }
  }
  return !1
}

function D(e) {
  return S(e) ? e : C(e) ? e.document : (e == null ? void 0 : e.ownerDocument) ?? document
}

function O(e) {
  var t;
  return T(e) ? O(e.host) : S(e) ? e.defaultView ?? window : x(e) ? ((t = e.ownerDocument) == null ? void 0 : t.defaultView) ?? window : window
}

function k(e) {
  let t = e.activeElement;
  for (; t != null && t.shadowRoot;) {
    let e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e
  }
  return t
}
var A = new WeakMap,
  j = class {
    get root() {
      return r(e(A, this))
    }
    set root(t) {
      a(e(A, this), t)
    }
    constructor(e) {
      i(this, `element`, void 0), n(this, A, t(() => this.element.current ? this.element.current.getRootNode() ?? document : document)), i(this, `getDocument`, () => D(this.root)), i(this, `getWindow`, () => this.getDocument().defaultView ?? window), i(this, `getActiveElement`, () => k(this.root)), i(this, `isActiveElement`, e => e === this.getActiveElement()), i(this, `querySelector`, e => this.root ? this.root.querySelector(e) : null), i(this, `querySelectorAll`, e => this.root ? this.root.querySelectorAll(e) : []), i(this, `setTimeout`, (e, t) => this.getWindow().setTimeout(e, t)), i(this, `clearTimeout`, e => this.getWindow().clearTimeout(e)), this.element = typeof e == `function` ? s(e) : e
    }
    getElementById(e) {
      return this.root.getElementById(e)
    }
  };

function M(e, {
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
  O as a, d as c, p as d, D as i, l, j as n, u as o, E as r, _ as s, M as t, f as u
};