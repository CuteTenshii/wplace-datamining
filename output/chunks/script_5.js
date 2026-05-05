import {
  az as L,
  V as T,
  aJ as A,
  aK as M,
  aL as g,
  aM as w,
  aN as V,
  aA as I,
  z as N
} from "./wFsvFKKp.js";

function B(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture"
}
const P = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

function C(e) {
  return P.includes(e)
}
const m = {
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

function D(e) {
  return e = e.toLowerCase(), m[e] ?? e
}
const O = ["touchstart", "touchmove"];

function W(e) {
  return O.includes(e)
}
const i = Symbol("events"),
  j = new Set,
  q = new Set;

function R(e) {
  if (!N) return;
  e.removeAttribute("onload"), e.removeAttribute("onerror");
  const t = e.__e;
  t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
    e.isConnected && e.dispatchEvent(t)
  }))
}

function y(e, t, r, o = {}) {
  function n(a) {
    if (o.capture || x.call(t, a), !a.cancelBubble) return A(() => r == null ? void 0 : r.call(this, a))
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? T(() => {
    t.addEventListener(e, n, o)
  }) : t.addEventListener(e, n, o), n
}

function F(e, t, r, o = {}) {
  var n = y(t, e, r, o);
  return () => {
    e.removeEventListener(t, n, o)
  }
}

function G(e, t, r, o, n) {
  var a = {
      capture: o,
      passive: n
    },
    u = y(e, t, r, a);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && L(() => {
    t.removeEventListener(e, u, a)
  })
}

function H(e, t, r) {
  (t[i] ?? (t[i] = {}))[e] = r
}

function J(e) {
  for (var t = 0; t < e.length; t++) j.add(e[t]);
  for (var r of q) r(e)
}
let E = null;

function x(e) {
  var h, b;
  var t = this,
    r = t.ownerDocument,
    o = e.type,
    n = ((h = e.composedPath) == null ? void 0 : h.call(e)) || [],
    a = n[0] || e.target;
  E = e;
  var u = 0,
    d = E === e && e[i];
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
    M(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r
      }
    });
    var k = V,
      S = I;
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
  H as a, j as b, B as c, J as d, G as e, y as f, C as g, x as h, W as i, R as j, D as n, F as o, q as r
};