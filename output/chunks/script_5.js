import {
  ax as T,
  S as L,
  aG as A,
  aH as I,
  aI as g,
  aJ as w,
  aK as M,
  ay as V,
  q as P
} from "./Cky4CUzE.js";

function C(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture"
}
const m = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

function D(e) {
  return m.includes(e)
}
const q = {
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};

function W(e) {
  return e = e.toLowerCase(), q[e] ?? e
}
const x = ["touchstart", "touchmove"];

function G(e) {
  return x.includes(e)
}
const i = Symbol("events"),
  N = new Set,
  O = new Set;

function H(e) {
  if (!P) return;
  e.removeAttribute("onload"), e.removeAttribute("onerror");
  const t = e.__e;
  t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
    e.isConnected && e.dispatchEvent(t)
  }))
}

function E(e, t, r, o = {}) {
  function n(a) {
    if (o.capture || j.call(t, a), !a.cancelBubble) return A(() => r == null ? void 0 : r.call(this, a))
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? L(() => {
    t.addEventListener(e, n, o)
  }) : t.addEventListener(e, n, o), n
}

function R(e, t, r, o = {}) {
  var n = E(t, e, r, o);
  return () => {
    e.removeEventListener(t, n, o)
  }
}

function z(e, t, r, o, n) {
  var a = {
      capture: o,
      passive: n
    },
    u = E(e, t, r, a);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && T(() => {
    t.removeEventListener(e, u, a)
  })
}

function F(e, t, r) {
  (t[i] ?? (t[i] = {}))[e] = r
}

function J(e) {
  for (var t = 0; t < e.length; t++) N.add(e[t]);
  for (var r of O) r(e)
}
let y = null;

function j(e) {
  var h, b;
  var t = this,
    r = t.ownerDocument,
    o = e.type,
    n = ((h = e.composedPath) == null ? void 0 : h.call(e)) || [],
    a = n[0] || e.target;
  y = e;
  var u = 0,
    d = y === e && e[i];
  if (d) {
    var l = n.indexOf(d);
    if (l !== -1 && (t === document || t === window)) {
      e[i] = t;
      return
    }
    var p = n.indexOf(t);
    if (p === -1) return;
    l <= p && (u = l)
  }
  if (a = n[u] || e.target, a !== t) {
    I(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r
      }
    });
    var k = M,
      S = V;
    g(null), w(null);
    try {
      for (var c, v = []; a !== null;) {
        var f = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var _ = (b = a[i]) == null ? void 0 : b[o];
          _ != null && (!a.disabled || e.target === a) && _.call(a, e)
        } catch (s) {
          c ? v.push(s) : c = s
        }
        if (e.cancelBubble || f === t || f === null) break;
        a = f
      }
      if (c) {
        for (let s of v) queueMicrotask(() => {
          throw s
        });
        throw c
      }
    } finally {
      e[i] = t, delete e.currentTarget, g(k), w(S)
    }
  }
}
export {
  F as a, N as b, C as c, J as d, z as e, E as f, D as g, j as h, G as i, H as j, W as n, R as o, O as r
};