const qn = "https://maps.wplace.live",
  eo = "8d582454-e5ec-4314-b1c2-89e460ac1d28",
  to = "pk_live_51RMHjBAtY4KIdFGnnJ9ZHjvgP68opqg7wlT7fA1HG3p91vfhVQyn6je810y5Cz3ggTycnJtFRkwHsYy1qJEyKRFW00x1i0iWMl",
  no = "true",
  oo = "0x4AAAAAABpHqZ-6i7uL0nmG",
  ro = "https://backend.wplace.live/files",
  io = "https://backend.wplace.live",
  We = /; wv\)|FBAN|FBAV|Instagram|BytedanceWebview|musical_ly|Line\/|Snapchat|Twitter|MicroMessenger/i;

function ao() {
  return Ae() ? !1 : We.test(navigator.userAgent)
}

function Ae() {
  return !!(window != null && window.ReactNativeWebView)
}

function Re(e = void 0) {
  const t = (e == null ? void 0 : e.userAgent) ?? navigator.userAgent,
    n = (e == null ? void 0 : e.vendor) ?? navigator.vendor;
  return "brave" in navigator ? "Brave" : /\bEdg(?:e|A|iOS)?\//.test(t) ? "Edge" : /\bOPR\/|\bOpera\//.test(t) ? "Opera" : /\bVivaldi\//.test(t) ? "Vivaldi" : /\bYaBrowser\//.test(t) ? "Yandex" : /\bSamsungBrowser\//.test(t) ? "Samsung Internet" : /\bUCBrowser\/|\bUCWEB\//.test(t) ? "UC Browser" : /\bDuckDuckGo\/|\bDdg\//.test(t) ? "DuckDuckGo" : getComputedStyle(document.documentElement).getPropertyValue("--arc-palette-title") ? "Arc" : /Firefox\/|FxiOS\//.test(t) ? "Firefox" : /Chrome\/|CriOS\//.test(t) && /google/i.test(n) ? "Chrome" : /Safari\//.test(t) && /apple/i.test(n) ? "Safari" : "Unknown"
}
var le = "5.2.0";

function N(e, t) {
  return new Promise(n => setTimeout(n, e, t))
}

function Te() {
  return new Promise(e => {
    const t = new MessageChannel;
    t.port1.onmessage = () => e(), t.port2.postMessage(null)
  })
}

function Ee(e, t = 1 / 0) {
  const {
    requestIdleCallback: n
  } = window;
  return n ? new Promise(o => n.call(window, () => o(), {
    timeout: t
  })) : N(Math.min(e, t))
}

function de(e) {
  return !!e && typeof e.then == "function"
}

function K(e, t) {
  try {
    const n = e();
    de(n) ? n.then(o => t(!0, o), o => t(!1, o)) : t(!0, n)
  } catch (n) {
    t(!1, n)
  }
}
async function Q(e, t, n = 16) {
  const o = Array(e.length);
  let r = Date.now();
  for (let u = 0; u < e.length; ++u) {
    o[u] = t(e[u], u);
    const s = Date.now();
    s >= r + n && (r = s, await Te())
  }
  return o
}

function A(e) {
  return e.then(void 0, () => {}), e
}

function Ge(e, t) {
  for (let n = 0, o = e.length; n < o; ++n)
    if (e[n] === t) return !0;
  return !1
}

function Ze(e, t) {
  return !Ge(e, t)
}

function U(e) {
  return parseInt(e)
}

function k(e) {
  return parseFloat(e)
}

function C(e, t) {
  return typeof e == "number" && isNaN(e) ? t : e
}

function w(e) {
  return e.reduce((t, n) => t + (n ? 1 : 0), 0)
}

function fe(e, t = 1) {
  if (Math.abs(t) >= 1) return Math.round(e / t) * t;
  {
    const n = 1 / t;
    return Math.round(e * n) / n
  }
}

function _e(e) {
  var t, n;
  const o = `Unexpected syntax '${e}'`,
    r = /^\s*([a-z-]*)(.*)$/i.exec(e),
    u = r[1] || void 0,
    s = {},
    c = /([.:#][\w-]+|\[.+?\])/gi,
    l = (d, a) => {
      s[d] = s[d] || [], s[d].push(a)
    };
  for (;;) {
    const d = c.exec(r[2]);
    if (!d) break;
    const a = d[0];
    switch (a[0]) {
      case ".":
        l("class", a.slice(1));
        break;
      case "#":
        l("id", a.slice(1));
        break;
      case "[": {
        const i = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(a);
        if (i) l(i[1], (n = (t = i[4]) !== null && t !== void 0 ? t : i[5]) !== null && n !== void 0 ? n : "");
        else throw new Error(o);
        break
      }
      default:
        throw new Error(o)
    }
  }
  return [u, s]
}

function Ne(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) {
    const o = e.charCodeAt(n);
    if (o > 127) return new TextEncoder().encode(e);
    t[n] = o
  }
  return t
}

function V(e, t) {
  const n = e[0] >>> 16,
    o = e[0] & 65535,
    r = e[1] >>> 16,
    u = e[1] & 65535,
    s = t[0] >>> 16,
    c = t[0] & 65535,
    l = t[1] >>> 16,
    d = t[1] & 65535;
  let a = 0,
    i = 0,
    p = 0,
    f = 0;
  f += u + d, p += f >>> 16, f &= 65535, p += r + l, i += p >>> 16, p &= 65535, i += o + c, a += i >>> 16, i &= 65535, a += n + s, a &= 65535, e[0] = a << 16 | i, e[1] = p << 16 | f
}

function L(e, t) {
  const n = e[0] >>> 16,
    o = e[0] & 65535,
    r = e[1] >>> 16,
    u = e[1] & 65535,
    s = t[0] >>> 16,
    c = t[0] & 65535,
    l = t[1] >>> 16,
    d = t[1] & 65535;
  let a = 0,
    i = 0,
    p = 0,
    f = 0;
  f += u * d, p += f >>> 16, f &= 65535, p += r * d, i += p >>> 16, p &= 65535, p += u * l, i += p >>> 16, p &= 65535, i += o * d, a += i >>> 16, i &= 65535, i += r * l, a += i >>> 16, i &= 65535, i += u * c, a += i >>> 16, i &= 65535, a += n * d + o * l + r * c + u * s, a &= 65535, e[0] = a << 16 | i, e[1] = p << 16 | f
}

function P(e, t) {
  const n = e[0];
  t %= 64, t === 32 ? (e[0] = e[1], e[1] = n) : t < 32 ? (e[0] = n << t | e[1] >>> 32 - t, e[1] = e[1] << t | n >>> 32 - t) : (t -= 32, e[0] = e[1] << t | n >>> 32 - t, e[1] = n << t | e[1] >>> 32 - t)
}

function S(e, t) {
  t %= 64, t !== 0 && (t < 32 ? (e[0] = e[1] >>> 32 - t, e[1] = e[1] << t) : (e[0] = e[1] << t - 32, e[1] = 0))
}

function y(e, t) {
  e[0] ^= t[0], e[1] ^= t[1]
}
const Ye = [4283543511, 3981806797],
  Be = [3301882366, 444984403];

function q(e) {
  const t = [0, e[0] >>> 1];
  y(e, t), L(e, Ye), t[1] = e[0] >>> 1, y(e, t), L(e, Be), t[1] = e[0] >>> 1, y(e, t)
}
const G = [2277735313, 289559509],
  Z = [1291169091, 658871167],
  ee = [0, 5],
  De = [0, 1390208809],
  He = [0, 944331445];

function je(e, t) {
  const n = Ne(e);
  t = t || 0;
  const o = [0, n.length],
    r = o[1] % 16,
    u = o[1] - r,
    s = [0, t],
    c = [0, t],
    l = [0, 0],
    d = [0, 0];
  let a;
  for (a = 0; a < u; a = a + 16) l[0] = n[a + 4] | n[a + 5] << 8 | n[a + 6] << 16 | n[a + 7] << 24, l[1] = n[a] | n[a + 1] << 8 | n[a + 2] << 16 | n[a + 3] << 24, d[0] = n[a + 12] | n[a + 13] << 8 | n[a + 14] << 16 | n[a + 15] << 24, d[1] = n[a + 8] | n[a + 9] << 8 | n[a + 10] << 16 | n[a + 11] << 24, L(l, G), P(l, 31), L(l, Z), y(s, l), P(s, 27), V(s, c), L(s, ee), V(s, De), L(d, Z), P(d, 33), L(d, G), y(c, d), P(c, 31), V(c, s), L(c, ee), V(c, He);
  l[0] = 0, l[1] = 0, d[0] = 0, d[1] = 0;
  const i = [0, 0];
  switch (r) {
    case 15:
      i[1] = n[a + 14], S(i, 48), y(d, i);
    case 14:
      i[1] = n[a + 13], S(i, 40), y(d, i);
    case 13:
      i[1] = n[a + 12], S(i, 32), y(d, i);
    case 12:
      i[1] = n[a + 11], S(i, 24), y(d, i);
    case 11:
      i[1] = n[a + 10], S(i, 16), y(d, i);
    case 10:
      i[1] = n[a + 9], S(i, 8), y(d, i);
    case 9:
      i[1] = n[a + 8], y(d, i), L(d, Z), P(d, 33), L(d, G), y(c, d);
    case 8:
      i[1] = n[a + 7], S(i, 56), y(l, i);
    case 7:
      i[1] = n[a + 6], S(i, 48), y(l, i);
    case 6:
      i[1] = n[a + 5], S(i, 40), y(l, i);
    case 5:
      i[1] = n[a + 4], S(i, 32), y(l, i);
    case 4:
      i[1] = n[a + 3], S(i, 24), y(l, i);
    case 3:
      i[1] = n[a + 2], S(i, 16), y(l, i);
    case 2:
      i[1] = n[a + 1], S(i, 8), y(l, i);
    case 1:
      i[1] = n[a], y(l, i), L(l, G), P(l, 31), L(l, Z), y(s, l)
  }
  return y(s, o), y(c, o), V(s, c), V(c, s), q(s), q(c), V(s, c), V(c, s), ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8)
}

function Xe(e) {
  var t;
  return {
    name: e.name,
    message: e.message,
    stack: (t = e.stack) === null || t === void 0 ? void 0 : t.split(`
`),
    ...e
  }
}

function Oe(e) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e))
}

function ze(e) {
  return typeof e != "function"
}

function Je(e, t) {
  const n = A(new Promise(o => {
    const r = Date.now();
    K(e.bind(null, t), (...u) => {
      const s = Date.now() - r;
      if (!u[0]) return o(() => ({
        error: u[1],
        duration: s
      }));
      const c = u[1];
      if (ze(c)) return o(() => ({
        value: c,
        duration: s
      }));
      o(() => new Promise(l => {
        const d = Date.now();
        K(c, (...a) => {
          const i = s + Date.now() - d;
          if (!a[0]) return l({
            error: a[1],
            duration: i
          });
          l({
            value: a[1],
            duration: i
          })
        })
      }))
    })
  }));
  return function() {
    return n.then(r => r())
  }
}

function Ue(e, t, n, o) {
  const r = Object.keys(e).filter(s => Ze(n, s)),
    u = A(Q(r, s => Je(e[s], t), o));
  return async function() {
    const c = await u,
      l = await Q(c, i => A(i()), o),
      d = await Promise.all(l),
      a = {};
    for (let i = 0; i < r.length; ++i) a[r[i]] = d[i];
    return a
  }
}

function me() {
  const e = window,
    t = navigator;
  return w(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
}

function $e() {
  const e = window,
    t = navigator;
  return w(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !me()
}

function W() {
  const e = window,
    t = navigator;
  return w(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, (t.vendor || "").indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
}

function x() {
  const e = window,
    t = navigator;
  return w(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, t.vendor.indexOf("Apple") === 0, "RGBColor" in e, "WebKitMediaKeys" in e]) >= 4
}

function $() {
  const e = window,
    {
      HTMLElement: t,
      Document: n
    } = e;
  return w(["safari" in e, !("ongestureend" in e), !("TouchEvent" in e), !("orientation" in e), t && !("autocapitalize" in t.prototype), n && "pointerLockElement" in n.prototype]) >= 4
}

function R() {
  const e = window;
  return Oe(e.print) && String(e.browser) === "[object WebPageNamespace]"
}

function T() {
  var e, t;
  const n = window;
  return w(["buildID" in navigator, "MozAppearance" in ((t = (e = document.documentElement) === null || e === void 0 ? void 0 : e.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in n, "mozInnerScreenX" in n, "CSSMozDocumentRule" in n, "CanvasCaptureMediaStream" in n]) >= 4
}

function Ke() {
  const e = window,
    t = navigator,
    {
      CSS: n
    } = e;
  return w(["userActivation" in t, n.supports("color", "light-dark(#000, #fff)"), n.supports("height", "1lh"), "globalPrivacyControl" in t]) >= 3
}

function pe() {
  const {
    CSS: e
  } = window;
  return w([e.supports("selector(::details-content)"), e.supports("selector(::before::marker)"), e.supports("selector(::after::marker)"), !("locale" in CompositionEvent.prototype)]) >= 3
}

function Qe() {
  const e = window;
  return w([!("MediaSettingsRange" in e), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3
}

function qe() {
  const e = window,
    {
      URLPattern: t
    } = e;
  return w(["union" in Set.prototype, "Iterator" in e, t && "hasRegExpGroups" in t.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3
}

function et() {
  const e = window,
    t = document,
    {
      CSS: n,
      Promise: o,
      AudioContext: r
    } = e;
  return w([o && "try" in o, "caretPositionFromPoint" in t, r && "onerror" in r.prototype, n.supports("ruby-align", "space-around")]) >= 3
}

function tt() {
  const e = window;
  return w(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
}

function E() {
  const e = window,
    t = navigator,
    {
      CSS: n,
      HTMLButtonElement: o
    } = e;
  return w([!("getStorageUpdates" in t), o && "popover" in o.prototype, "CSSCounterStyleRule" in e, n.supports("font-size-adjust: ex-height 0.5"), n.supports("text-transform: full-width")]) >= 4
}

function nt() {
  if (navigator.platform === "iPad") return !0;
  const e = screen,
    t = e.width / e.height;
  return w(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
}

function ot() {
  const e = document;
  return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
}

function rt() {
  const e = document;
  return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e)
}

function B() {
  const e = W(),
    t = T(),
    n = window,
    o = navigator,
    r = "connection";
  return e ? w([!("SharedWorker" in n), o[r] && "ontypechange" in o[r], !("sinkId" in new Audio)]) >= 2 : t ? w(["onorientationchange" in n, "orientation" in n, /android/i.test(o.appVersion)]) >= 2 : !1
}

function it() {
  const e = navigator,
    t = window,
    n = Audio.prototype,
    {
      visualViewport: o
    } = t;
  return w(["srLatency" in n, "srChannelCount" in n, "devicePosture" in e, o && "segments" in o, "getTextInformation" in Image.prototype]) >= 3
}

function at() {
  return ut() ? -4 : st()
}

function st() {
  const e = window,
    t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
  if (!t) return -2;
  if (ct()) return -1;
  const n = 4500,
    o = 5e3,
    r = new t(1, o, 44100),
    u = r.createOscillator();
  u.type = "triangle", u.frequency.value = 1e4;
  const s = r.createDynamicsCompressor();
  s.threshold.value = -50, s.knee.value = 40, s.ratio.value = 12, s.attack.value = 0, s.release.value = .25, u.connect(s), s.connect(r.destination), u.start(0);
  const [c, l] = lt(r), d = A(c.then(a => dt(a.getChannelData(0).subarray(n)), a => {
    if (a.name === "timeout" || a.name === "suspended") return -3;
    throw a
  }));
  return () => (l(), d)
}

function ct() {
  return x() && !$() && !tt()
}

function ut() {
  return x() && E() && R() || W() && it() && qe()
}

function lt(e) {
  let u = () => {};
  return [new Promise((c, l) => {
    let d = !1,
      a = 0,
      i = 0;
    e.oncomplete = h => c(h.renderedBuffer);
    const p = () => {
        setTimeout(() => l(te("timeout")), Math.min(500, i + 5e3 - Date.now()))
      },
      f = () => {
        try {
          const h = e.startRendering();
          switch (de(h) && A(h), e.state) {
            case "running":
              i = Date.now(), d && p();
              break;
            case "suspended":
              document.hidden || a++, d && a >= 3 ? l(te("suspended")) : setTimeout(f, 500);
              break
          }
        } catch (h) {
          l(h)
        }
      };
    f(), u = () => {
      d || (d = !0, i > 0 && p())
    }
  }), u]
}

function dt(e) {
  let t = 0;
  for (let n = 0; n < e.length; ++n) t += Math.abs(e[n]);
  return t
}

function te(e) {
  const t = new Error(e);
  return t.name = e, t
}
async function he(e, t, n = 50) {
  var o, r, u;
  const s = document;
  for (; !s.body;) await N(n);
  const c = s.createElement("iframe");
  try {
    for (await new Promise((l, d) => {
        let a = !1;
        const i = () => {
            a = !0, l()
          },
          p = b => {
            a = !0, d(b)
          };
        c.onload = i, c.onerror = p;
        const {
          style: f
        } = c;
        f.setProperty("display", "block", "important"), f.position = "absolute", f.top = "0", f.left = "0", f.visibility = "hidden", t && "srcdoc" in c ? c.srcdoc = t : c.src = "about:blank", s.body.appendChild(c);
        const h = () => {
          var b, F;
          a || (((F = (b = c.contentWindow) === null || b === void 0 ? void 0 : b.document) === null || F === void 0 ? void 0 : F.readyState) === "complete" ? i() : setTimeout(h, 10))
        };
        h()
      }); !(!((r = (o = c.contentWindow) === null || o === void 0 ? void 0 : o.document) === null || r === void 0) && r.body);) await N(n);
    return await e(c, c.contentWindow)
  } finally {
    (u = c.parentNode) === null || u === void 0 || u.removeChild(c)
  }
}

function ft(e) {
  const [t, n] = _e(e), o = document.createElement(t ?? "div");
  for (const r of Object.keys(n)) {
    const u = n[r].join(" ");
    r === "style" ? mt(o.style, u) : o.setAttribute(r, u)
  }
  return o
}

function mt(e, t) {
  for (const n of t.split(";")) {
    const o = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(n);
    if (o) {
      const [, r, u, , s] = o;
      e.setProperty(r, u, s || "")
    }
  }
}

function pt() {
  let e = window;
  for (;;) {
    const t = e.parent;
    if (!t || t === e) return !1;
    try {
      if (t.location.origin !== e.location.origin) return !0
    } catch (n) {
      if (n instanceof Error && n.name === "SecurityError") return !0;
      throw n
    }
    e = t
  }
}
const ht = "mmMwWLliI0O&1",
  gt = "48px",
  I = ["monospace", "sans-serif", "serif"],
  ne = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function yt() {
  return he(async (e, {
    document: t
  }) => {
    const n = t.body;
    n.style.fontSize = gt;
    const o = t.createElement("div");
    o.style.setProperty("visibility", "hidden", "important");
    const r = {},
      u = {},
      s = f => {
        const h = t.createElement("span"),
          {
            style: b
          } = h;
        return b.position = "absolute", b.top = "0", b.left = "0", b.fontFamily = f, h.textContent = ht, o.appendChild(h), h
      },
      c = (f, h) => s(`'${f}',${h}`),
      l = () => I.map(s),
      d = () => {
        const f = {};
        for (const h of ne) f[h] = I.map(b => c(h, b));
        return f
      },
      a = f => I.some((h, b) => f[b].offsetWidth !== r[h] || f[b].offsetHeight !== u[h]),
      i = l(),
      p = d();
    n.appendChild(o);
    for (let f = 0; f < I.length; f++) r[I[f]] = i[f].offsetWidth, u[I[f]] = i[f].offsetHeight;
    return ne.filter(f => a(p[f]))
  })
}

function bt() {
  const e = navigator.plugins;
  if (!e) return;
  const t = [];
  for (let n = 0; n < e.length; ++n) {
    const o = e[n];
    if (!o) continue;
    const r = [];
    for (let u = 0; u < o.length; ++u) {
      const s = o[u];
      r.push({
        type: s.type,
        suffixes: s.suffixes
      })
    }
    t.push({
      name: o.name,
      description: o.description,
      mimeTypes: r
    })
  }
  return t
}

function wt() {
  return vt(Ft())
}

function vt(e) {
  let t = !1,
    n, o;
  const [r, u] = St();
  return Lt(r, u) ? (t = kt(u), e ? n = o = "skipped" : [n, o] = xt(r, u)) : n = o = "unsupported", {
    winding: t,
    geometry: n,
    text: o
  }
}

function St() {
  const e = document.createElement("canvas");
  return e.width = 1, e.height = 1, [e, e.getContext("2d")]
}

function Lt(e, t) {
  return !!(t && e.toDataURL)
}

function kt(e) {
  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd")
}

function xt(e, t) {
  Ct(e, t);
  const n = H(e),
    o = H(e);
  return n !== o ? ["unstable", "unstable"] : (Vt(e, t), [H(e), n])
}

function Ct(e, t) {
  e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
  const n = "Cwm fjordbank gly 😃";
  t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(n, 4, 45)
}

function Vt(e, t) {
  e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
  for (const [n, o, r] of [
      ["#f2f", 40, 40],
      ["#2ff", 80, 40],
      ["#ff2", 60, 80]
    ]) t.fillStyle = n, t.beginPath(), t.arc(o, r, 40, 0, Math.PI * 2, !0), t.closePath(), t.fill();
  t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, Math.PI * 2, !0), t.arc(60, 60, 20, 0, Math.PI * 2, !0), t.fill("evenodd")
}

function H(e) {
  return e.toDataURL()
}

function Ft() {
  const e = x() && E() && R(),
    t = T() && Ke();
  return e || t
}

function Pt() {
  const e = navigator;
  let t = 0,
    n;
  e.maxTouchPoints !== void 0 ? t = U(e.maxTouchPoints) : e.msMaxTouchPoints !== void 0 && (t = e.msMaxTouchPoints);
  try {
    document.createEvent("TouchEvent"), n = !0
  } catch {
    n = !1
  }
  const o = "ontouchstart" in window;
  return {
    maxTouchPoints: t,
    touchEvent: n,
    touchStart: o
  }
}

function It() {
  return navigator.oscpu
}

function Mt() {
  const e = navigator,
    t = [],
    n = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if (n !== void 0 && t.push([n]), Array.isArray(e.languages)) W() && Qe() || t.push(e.languages);
  else if (typeof e.languages == "string") {
    const o = e.languages;
    o && t.push(o.split(","))
  }
  return t
}

function Wt() {
  return window.screen.colorDepth
}

function At() {
  return C(k(navigator.deviceMemory), void 0)
}

function Rt() {
  if (!(x() && E() && R())) return Tt()
}

function Tt() {
  const e = screen,
    t = o => C(U(o), null),
    n = [t(e.width), t(e.height)];
  return n.sort().reverse(), n
}
const Et = 2500,
  Gt = 10;
let _, j;

function Zt() {
  if (j !== void 0) return;
  const e = () => {
    const t = z();
    J(t) ? j = setTimeout(e, Et) : (_ = t, j = void 0)
  };
  e()
}

function _t() {
  return Zt(), async () => {
    let e = z();
    if (J(e)) {
      if (_) return [..._];
      ot() && (await rt(), e = z())
    }
    return J(e) || (_ = e), e
  }
}

function Nt() {
  const e = x() && E() && R(),
    t = T() && pe();
  if (e || t) return () => Promise.resolve(void 0);
  const n = _t();
  return async () => {
    const o = await n(),
      r = u => u === null ? null : fe(u, Gt);
    return [r(o[0]), r(o[1]), r(o[2]), r(o[3])]
  }
}

function z() {
  const e = screen;
  return [C(k(e.availTop), null), C(k(e.width) - k(e.availWidth) - C(k(e.availLeft), 0), null), C(k(e.height) - k(e.availHeight) - C(k(e.availTop), 0), null), C(k(e.availLeft), null)]
}

function J(e) {
  for (let t = 0; t < 4; ++t)
    if (e[t]) return !1;
  return !0
}

function Yt() {
  const e = Bt();
  return e !== void 0 && T() && pe() ? e >= 8 ? 8 : 4 : e
}

function Bt() {
  return C(U(navigator.hardwareConcurrency), void 0)
}

function Dt() {
  var e;
  const t = (e = window.Intl) === null || e === void 0 ? void 0 : e.DateTimeFormat;
  if (t) {
    const o = new t().resolvedOptions().timeZone;
    if (o) return o
  }
  const n = -Ht();
  return `UTC${n>=0?"+":""}${n}`
}

function Ht() {
  const e = new Date().getFullYear();
  return Math.max(k(new Date(e, 0, 1).getTimezoneOffset()), k(new Date(e, 6, 1).getTimezoneOffset()))
}

function jt() {
  try {
    return !!window.sessionStorage
  } catch {
    return !0
  }
}

function Xt() {
  try {
    return !!window.localStorage
  } catch {
    return !0
  }
}

function Ot() {
  if (!(me() || $e())) try {
    return !!window.indexedDB
  } catch {
    return !0
  }
}

function zt() {
  return !!window.openDatabase
}

function Jt() {
  return navigator.cpuClass
}

function Ut() {
  const {
    platform: e
  } = navigator;
  return e === "MacIntel" && x() && !$() ? nt() ? "iPad" : "iPhone" : e
}

function $t() {
  return navigator.vendor || ""
}

function Kt() {
  const e = [];
  for (const t of ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]) {
    const n = window[t];
    n && typeof n == "object" && e.push(t)
  }
  return e.sort()
}

function Qt() {
  const e = document;
  try {
    e.cookie = "cookietest=1; SameSite=Strict;";
    const t = e.cookie.indexOf("cookietest=") !== -1;
    return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
  } catch {
    return !1
  }
}

function qt() {
  const e = atob;
  return {
    abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', e("I0JveC1CYW5uZXItYWRz")],
    abpvn: [".quangcao", "#mobileCatfish", e("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
    adBlockFinland: [".mainostila", e("LnNwb25zb3JpdA=="), ".ylamainos", e("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
    adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", e("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
    adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", e("LmhlYWRlci1ibG9ja2VkLWFk"), e("I2FkX2Jsb2NrZXI=")],
    adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
    adGuardBase: [".BetterJsPopOverlay", e("I2FkXzMwMFgyNTA="), e("I2Jhbm5lcmZsb2F0MjI="), e("I2NhbXBhaWduLWJhbm5lcg=="), e("I0FkLUNvbnRlbnQ=")],
    adGuardChinese: [e("LlppX2FkX2FfSA=="), e("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", e("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), e("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
    adGuardFrench: ["#pavePub", e("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", e("LmFkc19iYW4=")],
    adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
    adGuardJapanese: ["#kauli_yad_1", e("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), e("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), e("LmFkZ29vZ2xl"), e("Ll9faXNib29zdFJldHVybkFk")],
    adGuardMobile: [e("YW1wLWF1dG8tYWRz"), e("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", e("I2FkX2ludmlld19hcmVh")],
    adGuardRussian: [e("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), e("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', e("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
    adGuardSocial: [e("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), e("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
    adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
    adGuardTrackingProtection: ["#qoo-counter", e("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), e("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), e("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
    adGuardTurkish: ["#backkapat", e("I3Jla2xhbWk="), e("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), e("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), e("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
    bulgarian: [e("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
    easyList: [".yb-floorad", e("LndpZGdldF9wb19hZHNfd2lkZ2V0"), e("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", e("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
    easyListChina: [e("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), e("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
    easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", e("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
    easyListCzechSlovak: ["#onlajny-stickers", e("I3Jla2xhbW5pLWJveA=="), e("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", e("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
    easyListDutch: [e("I2FkdmVydGVudGll"), e("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", e("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
    easyListGermany: ["#SSpotIMPopSlider", e("LnNwb25zb3JsaW5rZ3J1ZW4="), e("I3dlcmJ1bmdza3k="), e("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), e("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
    easyListItaly: [e("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", e("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
    easyListLithuania: [e("LnJla2xhbW9zX3RhcnBhcw=="), e("LnJla2xhbW9zX251b3JvZG9z"), e("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), e("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), e("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
    estonian: [e("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
    fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
    fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
    fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
    fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
    frellwitSwedish: [e("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), e("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", e("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
    greekAdBlock: [e("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), e("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), e("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
    hungarian: ["#cemp_doboz", ".optimonk-iframe-container", e("LmFkX19tYWlu"), e("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
    iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
    icelandicAbp: [e("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
    latvian: [e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
    listKr: [e("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), e("I2xpdmVyZUFkV3JhcHBlcg=="), e("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), e("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
    listeAr: [e("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", e("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), e("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), e("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
    listeFr: [e("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), e("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), e("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
    officialPolish: ["#ceneo-placeholder-ceneo-12", e("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), e("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), e("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), e("ZGl2I3NrYXBpZWNfYWQ=")],
    ro: [e("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), e("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), e("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
    ruAd: [e("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), e("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), e("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
    thaiAds: ["a[href*=macau-uta-popup]", e("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), e("LmFkczMwMHM="), ".bumq", ".img-kosana"],
    webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", e("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
  }
}
async function en({
  debug: e
} = {}) {
  if (!tn()) return;
  const t = qt(),
    n = Object.keys(t),
    o = [].concat(...n.map(s => t[s])),
    r = await nn(o);
  e && on(t, r);
  const u = n.filter(s => {
    const c = t[s];
    return w(c.map(d => r[d])) > c.length * .6
  });
  return u.sort(), u
}

function tn() {
  return x() || B()
}
async function nn(e) {
  var t;
  const n = document,
    o = n.createElement("div"),
    r = new Array(e.length),
    u = {};
  oe(o);
  for (let s = 0; s < e.length; ++s) {
    const c = ft(e[s]);
    c.tagName === "DIALOG" && c.show();
    const l = n.createElement("div");
    oe(l), l.appendChild(c), o.appendChild(l), r[s] = c
  }
  for (; !n.body;) await N(50);
  n.body.appendChild(o);
  try {
    for (let s = 0; s < e.length; ++s) r[s].offsetParent || (u[e[s]] = !0)
  } finally {
    (t = o.parentNode) === null || t === void 0 || t.removeChild(o)
  }
  return u
}

function oe(e) {
  e.style.setProperty("visibility", "hidden", "important"), e.style.setProperty("display", "block", "important")
}

function on(e, t) {
  let n = "DOM blockers debug:\n```";
  for (const o of Object.keys(e)) {
    n += `
${o}:`;
    for (const r of e[o]) n += `
  ${t[r]?"🚫":"➡️"} ${r}`
  }
  console.log(`${n}
\`\`\``)
}

function rn() {
  for (const e of ["rec2020", "p3", "srgb"])
    if (matchMedia(`(color-gamut: ${e})`).matches) return e
}

function an() {
  if (re("inverted")) return !0;
  if (re("none")) return !1
}

function re(e) {
  return matchMedia(`(inverted-colors: ${e})`).matches
}

function sn() {
  if (ie("active")) return !0;
  if (ie("none")) return !1
}

function ie(e) {
  return matchMedia(`(forced-colors: ${e})`).matches
}
const cn = 100;

function un() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (let e = 0; e <= cn; ++e)
      if (matchMedia(`(max-monochrome: ${e})`).matches) return e;
    throw new Error("Too high value")
  }
}

function ln() {
  if (M("no-preference")) return 0;
  if (M("high") || M("more")) return 1;
  if (M("low") || M("less")) return -1;
  if (M("forced")) return 10
}

function M(e) {
  return matchMedia(`(prefers-contrast: ${e})`).matches
}

function dn() {
  if (ae("reduce")) return !0;
  if (ae("no-preference")) return !1
}

function ae(e) {
  return matchMedia(`(prefers-reduced-motion: ${e})`).matches
}

function fn() {
  if (se("reduce")) return !0;
  if (se("no-preference")) return !1
}

function se(e) {
  return matchMedia(`(prefers-reduced-transparency: ${e})`).matches
}

function mn() {
  if (ce("high")) return !0;
  if (ce("standard")) return !1
}

function ce(e) {
  return matchMedia(`(dynamic-range: ${e})`).matches
}
const m = Math,
  v = () => 0;

function pn() {
  const e = m.acos || v,
    t = m.acosh || v,
    n = m.asin || v,
    o = m.asinh || v,
    r = m.atanh || v,
    u = m.atan || v,
    s = m.sin || v,
    c = m.sinh || v,
    l = m.cos || v,
    d = m.cosh || v,
    a = m.tan || v,
    i = m.tanh || v,
    p = m.exp || v,
    f = m.expm1 || v,
    h = m.log1p || v,
    b = g => m.pow(m.PI, g),
    F = g => m.log(g + m.sqrt(g * g - 1)),
    D = g => m.log(g + m.sqrt(g * g + 1)),
    Ce = g => m.log((1 + g) / (1 - g)) / 2,
    Ve = g => m.exp(g) - 1 / m.exp(g) / 2,
    Fe = g => (m.exp(g) + 1 / m.exp(g)) / 2,
    Pe = g => m.exp(g) - 1,
    Ie = g => (m.exp(2 * g) - 1) / (m.exp(2 * g) + 1),
    Me = g => m.log(1 + g);
  return {
    acos: e(.12312423423423424),
    acosh: t(1e308),
    acoshPf: F(1e154),
    asin: n(.12312423423423424),
    asinh: o(1),
    asinhPf: D(1),
    atanh: r(.5),
    atanhPf: Ce(.5),
    atan: u(.5),
    sin: s(-1e300),
    sinh: c(1),
    sinhPf: Ve(1),
    cos: l(10.000000000123),
    cosh: d(1),
    coshPf: Fe(1),
    tan: a(-1e300),
    tanh: i(1),
    tanhPf: Ie(1),
    exp: p(1),
    expm1: f(1),
    expm1Pf: Pe(1),
    log1p: h(10),
    log1pPf: Me(10),
    powPI: b(-100)
  }
}
const hn = "mmMwWLliI0fiflO&1",
  X = {
    default: [],
    apple: [{
      font: "-apple-system-body"
    }],
    serif: [{
      fontFamily: "serif"
    }],
    sans: [{
      fontFamily: "sans-serif"
    }],
    mono: [{
      fontFamily: "monospace"
    }],
    min: [{
      fontSize: "1px"
    }],
    system: [{
      fontFamily: "system-ui"
    }]
  };

function gn() {
  return bn((e, t, n) => {
    const o = {},
      r = {};
    for (const s of Object.keys(X)) {
      const [c = {}, l = hn] = X[s], d = e.createElement("span");
      d.textContent = l, d.style.whiteSpace = "nowrap";
      for (const a of Object.keys(c)) {
        const i = c[a];
        i !== void 0 && (d.style[a] = i)
      }
      o[s] = d, t.append(e.createElement("br"), d)
    }
    const u = W() && et();
    for (const s of Object.keys(X)) {
      const c = o[s].getBoundingClientRect().width;
      r[s] = u ? yn(c * n.devicePixelRatio) : c
    }
    return r
  })
}

function yn(e) {
  const t = B() ? 0 : 3,
    n = Math.pow(10, t);
  return Math.floor(e * n) / n
}

function bn(e, t = 4e3) {
  return he((n, o) => {
    const r = o.document,
      u = r.body,
      s = u.style;
    s.width = `${t}px`, s.webkitTextSizeAdjust = s.textSizeAdjust = "none", W() ? u.style.zoom = `${1/o.devicePixelRatio}` : x() && (u.style.zoom = "reset");
    const c = r.createElement("div");
    return c.textContent = [...Array(t / 20 << 0)].map(() => "word").join(" "), u.appendChild(c), e(r, u, o)
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
}

function wn() {
  return navigator.pdfViewerEnabled
}

function vn() {
  const e = new Float32Array(1),
    t = new Uint8Array(e.buffer);
  return e[0] = 1 / 0, e[0] = e[0] - e[0], t[3]
}

function Sn() {
  const {
    ApplePaySession: e
  } = window;
  if (typeof(e == null ? void 0 : e.canMakePayments) != "function") return -1;
  if (Ln()) return -3;
  try {
    return e.canMakePayments() ? 1 : 0
  } catch (t) {
    return kn(t)
  }
}
const Ln = pt;

function kn(e) {
  if (e instanceof Error && e.name === "InvalidAccessError" && /\bfrom\b.*\binsecure\b/i.test(e.message)) return -2;
  throw e
}

function xn() {
  var e;
  const t = document.createElement("a"),
    n = (e = t.attributionSourceId) !== null && e !== void 0 ? e : t.attributionsourceid;
  return n === void 0 ? void 0 : String(n)
}
const ge = -1,
  ye = -2,
  Cn = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
  Vn = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  Fn = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
  Pn = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
  be = "WEBGL_debug_renderer_info",
  In = "WEBGL_polygon_mode";

function Mn({
  cache: e
}) {
  var t, n, o, r, u, s;
  const c = we(e);
  if (!c) return ge;
  if (!Se(c)) return ye;
  const l = ve() ? null : c.getExtension(be);
  return {
    version: ((t = c.getParameter(c.VERSION)) === null || t === void 0 ? void 0 : t.toString()) || "",
    vendor: ((n = c.getParameter(c.VENDOR)) === null || n === void 0 ? void 0 : n.toString()) || "",
    vendorUnmasked: l ? (o = c.getParameter(l.UNMASKED_VENDOR_WEBGL)) === null || o === void 0 ? void 0 : o.toString() : "",
    renderer: ((r = c.getParameter(c.RENDERER)) === null || r === void 0 ? void 0 : r.toString()) || "",
    rendererUnmasked: l ? (u = c.getParameter(l.UNMASKED_RENDERER_WEBGL)) === null || u === void 0 ? void 0 : u.toString() : "",
    shadingLanguageVersion: ((s = c.getParameter(c.SHADING_LANGUAGE_VERSION)) === null || s === void 0 ? void 0 : s.toString()) || ""
  }
}

function Wn({
  cache: e
}) {
  const t = we(e);
  if (!t) return ge;
  if (!Se(t)) return ye;
  const n = t.getSupportedExtensions(),
    o = t.getContextAttributes(),
    r = [],
    u = [],
    s = [],
    c = [],
    l = [];
  if (o)
    for (const a of Object.keys(o)) u.push(`${a}=${o[a]}`);
  const d = ue(t);
  for (const a of d) {
    const i = t[a];
    s.push(`${a}=${i}${Cn.has(i)?`=${t.getParameter(i)}`:""}`)
  }
  if (n)
    for (const a of n) {
      if (a === be && ve() || a === In && Tn()) continue;
      const i = t.getExtension(a);
      if (!i) {
        r.push(a);
        continue
      }
      for (const p of ue(i)) {
        const f = i[p];
        c.push(`${p}=${f}${Vn.has(f)?`=${t.getParameter(f)}`:""}`)
      }
    }
  for (const a of Fn)
    for (const i of Pn) {
      const p = An(t, a, i);
      l.push(`${a}.${i}=${p.join(",")}`)
    }
  return c.sort(), s.sort(), {
    contextAttributes: u,
    parameters: s,
    shaderPrecisions: l,
    extensions: n,
    extensionParameters: c,
    unsupportedExtensions: r
  }
}

function we(e) {
  if (e.webgl) return e.webgl.context;
  const t = document.createElement("canvas");
  let n;
  t.addEventListener("webglCreateContextError", () => n = void 0);
  for (const o of ["webgl", "experimental-webgl"]) {
    try {
      n = t.getContext(o)
    } catch {}
    if (n) break
  }
  return e.webgl = {
    context: n
  }, n
}

function An(e, t, n) {
  const o = e.getShaderPrecisionFormat(e[t], e[n]);
  return o ? [o.rangeMin, o.rangeMax, o.precision] : []
}

function ue(e) {
  return Object.keys(e.__proto__).filter(Rn)
}

function Rn(e) {
  return typeof e == "string" && !e.match(/[^A-Z0-9_x]/)
}

function ve() {
  return T()
}

function Tn() {
  return W() || x()
}

function Se(e) {
  return typeof e.getParameter == "function"
}

function En() {
  if (!(B() || x())) return -2;
  if (!window.AudioContext) return -1;
  const t = new AudioContext().baseLatency;
  return t == null ? -1 : isFinite(t) ? t : -3
}

function Gn() {
  if (!window.Intl) return -1;
  const e = window.Intl.DateTimeFormat;
  if (!e) return -2;
  const t = e().resolvedOptions().locale;
  return !t && t !== "" ? -3 : t
}

function Zn(e) {
  return /not/i.test(e)
}
async function _n() {
  const e = navigator.userAgentData;
  if (!e) return;
  const t = e.brands.filter(({
      brand: r
    }) => !Zn(r)).map(({
      brand: r
    }) => r),
    o = {
      brands: t.length > 1 ? t.filter(r => r !== "Chromium") : t,
      mobile: e.mobile,
      platform: e.platform
    };
  if (e.getHighEntropyValues) try {
    const r = await e.getHighEntropyValues(["architecture", "bitness", "model", "platformVersion"]);
    o.architecture = r.architecture, o.bitness = r.bitness, o.model = r.model, o.platformVersion = r.platformVersion
  } catch (r) {
    if (r instanceof DOMException && r.name === "NotAllowedError") o.highEntropyStatus = "not_allowed";
    else throw r
  }
  return o
}
const Nn = {
  userAgentData: _n,
  fonts: yt,
  domBlockers: en,
  fontPreferences: gn,
  audio: at,
  screenFrame: Nt,
  canvas: wt,
  osCpu: It,
  languages: Mt,
  colorDepth: Wt,
  deviceMemory: At,
  screenResolution: Rt,
  hardwareConcurrency: Yt,
  timezone: Dt,
  sessionStorage: jt,
  localStorage: Xt,
  indexedDB: Ot,
  openDatabase: zt,
  cpuClass: Jt,
  platform: Ut,
  plugins: bt,
  touchSupport: Pt,
  vendor: $t,
  vendorFlavors: Kt,
  cookiesEnabled: Qt,
  colorGamut: rn,
  invertedColors: an,
  forcedColors: sn,
  monochrome: un,
  contrast: ln,
  reducedMotion: dn,
  reducedTransparency: fn,
  hdr: mn,
  math: pn,
  pdfViewerEnabled: wn,
  architecture: vn,
  applePay: Sn,
  privateClickMeasurement: xn,
  audioBaseLatency: En,
  dateTimeLocale: Gn,
  webGlBasics: Mn,
  webGlExtensions: Wn
};

function Yn(e) {
  return Ue(Nn, e, [])
}
const Bn = "$ if upgrade to Pro: https://fingerprint.com/github/?utm_source=oss&utm_medium=referral&utm_campaign=confidence_score";

function Dn(e) {
  const t = Hn(e),
    n = jn(t);
  return {
    score: t,
    comment: Bn.replace(/\$/g, `${n}`)
  }
}

function Hn(e) {
  if (B()) return .4;
  if (x()) return $() && !(E() && R()) ? .5 : .3;
  const t = "value" in e.platform ? e.platform.value : "";
  return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
}

function jn(e) {
  return fe(.99 + .01 * e, 1e-4)
}

function Xn(e) {
  let t = "";
  for (const n of Object.keys(e).sort()) {
    const o = e[n],
      r = "error" in o ? "error" : JSON.stringify(o.value);
    t += `${t?"|":""}${n.replace(/([:|\\])/g,"\\$1")}:${r}`
  }
  return t
}

function Le(e) {
  return JSON.stringify(e, (t, n) => n instanceof Error ? Xe(n) : n, 2)
}

function ke(e) {
  return je(Xn(e))
}

function On(e) {
  let t;
  const n = Dn(e);
  return {
    get visitorId() {
      return t === void 0 && (t = ke(this.components)), t
    },
    set visitorId(o) {
      t = o
    },
    confidence: n,
    components: e,
    version: le
  }
}

function zn(e = 50) {
  return Ee(e, e * 2)
}

function Jn(e, t) {
  const n = Date.now();
  return {
    async get(o) {
      const r = Date.now(),
        u = await e(),
        s = On(u);
      return (t || o != null && o.debug) && console.log(`Copy the text below to get the debug data:

\`\`\`
version: ${s.version}
userAgent: ${navigator.userAgent}
timeBetweenLoadAndGet: ${r-n}
visitorId: ${s.visitorId}
components: ${Le(u)}
\`\`\``), s
    }
  }
}

function Un() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const e = new XMLHttpRequest;
    e.open("get", `https://m1.openfpcdn.io/fingerprintjs/v${le}/npm-monitoring`, !0), e.send()
  } catch (e) {
    console.error(e)
  }
}
async function $n(e = {}) {
  const {
    delayFallback: t,
    debug: n,
    monitoring: o = !0
  } = e;
  o && Un(), await zn(t);
  const r = Yn({
    cache: {},
    debug: n
  });
  return Jn(r, n)
}
var xe = {
  load: $n,
  hashComponents: ke,
  componentsToDebugString: Le
};
let O = null,
  Y;
async function Kn() {
  return O || (O = xe.load()), O
}
async function so() {
  return Y || Qn().then(e => e.visitorId)
}
async function Qn() {
  const t = await (await Kn()).get();
  let n = t.components;
  const o = Re(),
    r = navigator.userAgent.toLowerCase(),
    u = r.includes("iphone"),
    s = r.includes("macintosh"),
    c = u || s,
    l = r.includes("android");
  if (c) n = t.components;
  else if (o === "Chrome") {
    const {
      languages: d,
      ...a
    } = t.components;
    n = a
  } else if (o === "Firefox") {
    const {
      languages: d,
      dateTimeLocale: a,
      ...i
    } = t.components;
    n = i
  } else if (o === "Brave") {
    const {
      fonts: d,
      audio: a,
      canvas: i,
      hardwareConcurrency: p,
      plugins: f,
      deviceMemory: h,
      languages: b,
      dateTimeLocale: F,
      ...D
    } = t.components;
    n = D
  } else {
    const {
      languages: d,
      ...a
    } = t.components;
    n = a
  }
  return (o === "Safari" || l) && (n = {
    userAgent: {
      value: navigator.userAgent,
      duration: 0
    },
    ...t.components
  }), Y = xe.hashComponents(n), {
    visitorId: Y,
    components: n
  }
}
export {
  io as P, ao as a, to as b, oo as c, eo as d, ro as e, Re as f, so as g, Qn as h, Ae as i, no as j, qn as k
};