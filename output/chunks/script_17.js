const fo = "https://maps.wplace.live",
  mo = "8d582454-e5ec-4314-b1c2-89e460ac1d28",
  po = "pk_live_51RMHjBAtY4KIdFGnnJ9ZHjvgP68opqg7wlT7fA1HG3p91vfhVQyn6je810y5Cz3ggTycnJtFRkwHsYy1qJEyKRFW00x1i0iWMl",
  ho = "true",
  go = "0x4AAAAAABpHqZ-6i7uL0nmG",
  yo = "https://backend.wplace.live/files",
  bo = "https://backend.wplace.live",
  _e = /; wv\)|FBAN|FBAV|Instagram|BytedanceWebview|musical_ly|Line\/|Snapchat|Twitter|MicroMessenger/i;

function wo() {
  return Be() ? !1 : _e.test(navigator.userAgent)
}

function Be() {
  return !!(window != null && window.ReactNativeWebView)
}

function Ze(e = void 0) {
  const t = (e == null ? void 0 : e.userAgent) ?? navigator.userAgent,
    n = (e == null ? void 0 : e.vendor) ?? navigator.vendor;
  return "brave" in navigator ? "Brave" : /\bEdg(?:e|A|iOS)?\//.test(t) ? "Edge" : /\bOPR\/|\bOpera\//.test(t) ? "Opera" : /\bVivaldi\//.test(t) ? "Vivaldi" : /\bYaBrowser\//.test(t) ? "Yandex" : /\bSamsungBrowser\//.test(t) ? "Samsung Internet" : /\bUCBrowser\/|\bUCWEB\//.test(t) ? "UC Browser" : /\bDuckDuckGo\/|\bDdg\//.test(t) ? "DuckDuckGo" : getComputedStyle(document.documentElement).getPropertyValue("--arc-palette-title") ? "Arc" : /Firefox\/|FxiOS\//.test(t) ? "Firefox" : /Chrome\/|CriOS\//.test(t) && /google/i.test(n) ? "Chrome" : /Safari\//.test(t) && /apple/i.test(n) ? "Safari" : "Unknown"
}
let q;

function De() {
  return q || (q = Ye()), q
}

function Ye() {
  let e = 0;
  const t = [].constructor;
  try {
    (-1).toFixed(-1)
  } catch (n) {
    e = (n instanceof Error ? n.message : String(n)).length + (t + "").split(t.name).join("").length
  }
  switch (e) {
    case 80:
      return "Blink";
    case 58:
      return "Gecko";
    case 77:
      return "WebKit";
    default:
      return "Unknown"
  }
}
async function je() {
  let e;
  try {
    e = document.createElement("canvas");
    const t = e.getContext("2d", {
      willReadFrequently: !1
    });
    if (!t) throw new Error("canvas context blocked");
    const n = Xe.replace(/!important/gm, ""),
      o = 75;
    Ne({
      canvas: e,
      context: t,
      area: {
        width: o,
        height: o
      }
    });
    const r = e.toDataURL();
    e.width = 50, e.height = 50, t.font = `50px ${n}`, t.fillText("A", 7, 37);
    const l = e.toDataURL();
    e.width = 50, e.height = 50, t.font = `35px ${n}`, t.fillText("👾", 0, 37);
    const a = e.toDataURL();
    return {
      paintURI: r,
      textURI: l,
      emojiURI: a
    }
  } catch (t) {
    console.error(t);
    return
  } finally {
    He(e)
  }
}

function He(e) {
  e && (e.width = 0, e.height = 0, e.remove())
}
const Xe = `
	'Segoe Fluent Icons',
	'Ink Free',
	'Bahnschrift',
	'Segoe MDL2 Assets',
	'HoloLens MDL2 Assets',
	'Leelawadee UI',
	'Javanese Text',
	'Segoe UI Emoji',
	'Aldhabi',
	'Gadugi',
	'Myanmar Text',
	'Nirmala UI',
	'Lucida Console',
	'Cambria Math',
	'Bai Jamjuree',
	'Chakra Petch',
	'Charmonman',
	'Fahkwang',
	'K2D',
	'Kodchasan',
	'KoHo',
	'Sarabun',
	'Srisakdi',
	'Galvji',
	'MuktaMahee Regular',
	'InaiMathi Bold',
	'American Typewriter Semibold',
	'Futura Bold',
	'SignPainter-HouseScript Semibold',
	'PingFang HK Light',
	'Kohinoor Devanagari Medium',
	'Luminari',
	'Geneva',
	'Helvetica Neue',
	'Droid Sans Mono',
	'Dancing Script',
	'Roboto',
	'Ubuntu',
	'Liberation Mono',
	'Source Code Pro',
	'DejaVu Sans',
	'OpenSymbol',
	'Chilanka',
	'Cousine',
	'Arimo',
	'Jomolhari',
	'MONO',
	'Noto Color Emoji',
	sans-serif !important
`,
  Ne = ({
    canvas: e,
    context: t,
    strokeText: n = !1,
    cssFontFamily: o = "",
    area: r = {
      width: 50,
      height: 50
    },
    rounds: l = 10,
    maxShadowBlur: a = 50,
    seed: c = 500,
    offset: f = 2001000001,
    multiplier: m = 15e3
  }) => {
    if (!t) return;
    t.clearRect(0, 0, e.width, e.height), e.width = r.width, e.height = r.height, e.style && (e.style.display = "none");
    const i = (({
        seed: y,
        offset: d,
        multiplier: k
      }) => {
        let p = Number(y) % Number(d);
        return {
          getNextSeed: () => (p = Number(k) * p % Number(d), p)
        }
      })({
        seed: c,
        offset: f,
        multiplier: m
      }),
      {
        getNextSeed: h
      } = i,
      u = (y, d, k, p) => {
        const b = (y - 1) / d * (k || 1) || 0;
        return p ? b : Math.floor(b)
      },
      g = (y, d, k, p, b) => {
        const {
          width: C,
          height: O
        } = k, Q = y.createRadialGradient(u(b(), d, C), u(b(), d, O), u(b(), d, C), u(b(), d, C), u(b(), d, O), u(b(), d, C));
        Q.addColorStop(0, p[u(b(), d, p.length)]), Q.addColorStop(1, p[u(b(), d, p.length)]), y.fillStyle = Q
      },
      v = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"],
      x = (y, d, k, p) => {
        const {
          width: b,
          height: C
        } = k, O = 2.99;
        y.font = `${C/O}px ${o.replace(/!important/gm,"")}`, y.strokeText("👾A", u(p(), d, b), u(p(), d, C), u(p(), d, b))
      },
      j = (y, d, k, p) => {
        const {
          width: b,
          height: C
        } = k;
        y.beginPath(), y.arc(u(p(), d, b), u(p(), d, C), u(p(), d, Math.min(b, C)), u(p(), d, 2 * Math.PI, !0), u(p(), d, 2 * Math.PI, !0)), y.stroke()
      },
      H = (y, d, k, p) => {
        const {
          width: b,
          height: C
        } = k;
        y.beginPath(), y.moveTo(u(p(), d, b), u(p(), d, C)), y.bezierCurveTo(u(p(), d, b), u(p(), d, C), u(p(), d, b), u(p(), d, C), u(p(), d, b), u(p(), d, C)), y.stroke()
      },
      X = (y, d, k, p) => {
        const {
          width: b,
          height: C
        } = k;
        y.beginPath(), y.moveTo(u(p(), d, b), u(p(), d, C)), y.quadraticCurveTo(u(p(), d, b), u(p(), d, C), u(p(), d, b), u(p(), d, C)), y.stroke()
      },
      N = (y, d, k, p) => {
        if (!("ellipse" in y)) return;
        const {
          width: b,
          height: C
        } = k;
        y.beginPath(), y.ellipse(u(p(), d, b), u(p(), d, C), u(p(), d, Math.floor(b / 2)), u(p(), d, Math.floor(C / 2)), u(p(), d, 2 * Math.PI, !0), u(p(), d, 2 * Math.PI, !0), u(p(), d, 2 * Math.PI, !0)), y.stroke()
      },
      R = [j, H, X];
    De() !== "WebKit" && R.push(N), n && R.push(x), [...Array(l)].forEach(y => {
      g(t, f, r, v, h), t.shadowBlur = u(h(), f, a, !0), t.shadowColor = v[u(h(), f, v.length)];
      const d = R[u(h(), f, R.length)];
      d(t, f, r, h), t.fill()
    })
  };
var Ce = "5.2.0";

function $(e, t) {
  return new Promise(n => setTimeout(n, e, t))
}

function Oe() {
  return new Promise(e => {
    const t = new MessageChannel;
    t.port1.onmessage = () => e(), t.port2.postMessage(null)
  })
}

function ze(e, t = 1 / 0) {
  const {
    requestIdleCallback: n
  } = window;
  return n ? new Promise(o => n.call(window, () => o(), {
    timeout: t
  })) : $(Math.min(e, t))
}

function Se(e) {
  return !!e && typeof e.then == "function"
}

function ue(e, t) {
  try {
    const n = e();
    Se(n) ? n.then(o => t(!0, o), o => t(!1, o)) : t(!0, n)
  } catch (n) {
    t(!1, n)
  }
}
async function le(e, t, n = 16) {
  const o = Array(e.length);
  let r = Date.now();
  for (let l = 0; l < e.length; ++l) {
    o[l] = t(e[l], l);
    const a = Date.now();
    a >= r + n && (r = a, await Oe())
  }
  return o
}

function B(e) {
  return e.then(void 0, () => {}), e
}

function Je(e, t) {
  for (let n = 0, o = e.length; n < o; ++n)
    if (e[n] === t) return !0;
  return !1
}

function Ue(e, t) {
  return !Je(e, t)
}

function ae(e) {
  return parseInt(e)
}

function I(e) {
  return parseFloat(e)
}

function A(e, t) {
  return typeof e == "number" && isNaN(e) ? t : e
}

function S(e) {
  return e.reduce((t, n) => t + (n ? 1 : 0), 0)
}

function ke(e, t = 1) {
  if (Math.abs(t) >= 1) return Math.round(e / t) * t;
  {
    const n = 1 / t;
    return Math.round(e * n) / n
  }
}

function $e(e) {
  var t, n;
  const o = `Unexpected syntax '${e}'`,
    r = /^\s*([a-z-]*)(.*)$/i.exec(e),
    l = r[1] || void 0,
    a = {},
    c = /([.:#][\w-]+|\[.+?\])/gi,
    f = (m, s) => {
      a[m] = a[m] || [], a[m].push(s)
    };
  for (;;) {
    const m = c.exec(r[2]);
    if (!m) break;
    const s = m[0];
    switch (s[0]) {
      case ".":
        f("class", s.slice(1));
        break;
      case "#":
        f("id", s.slice(1));
        break;
      case "[": {
        const i = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(s);
        if (i) f(i[1], (n = (t = i[4]) !== null && t !== void 0 ? t : i[5]) !== null && n !== void 0 ? n : "");
        else throw new Error(o);
        break
      }
      default:
        throw new Error(o)
    }
  }
  return [l, a]
}

function Ke(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) {
    const o = e.charCodeAt(n);
    if (o > 127) return new TextEncoder().encode(e);
    t[n] = o
  }
  return t
}

function E(e, t) {
  const n = e[0] >>> 16,
    o = e[0] & 65535,
    r = e[1] >>> 16,
    l = e[1] & 65535,
    a = t[0] >>> 16,
    c = t[0] & 65535,
    f = t[1] >>> 16,
    m = t[1] & 65535;
  let s = 0,
    i = 0,
    h = 0,
    u = 0;
  u += l + m, h += u >>> 16, u &= 65535, h += r + f, i += h >>> 16, h &= 65535, i += o + c, s += i >>> 16, i &= 65535, s += n + a, s &= 65535, e[0] = s << 16 | i, e[1] = h << 16 | u
}

function P(e, t) {
  const n = e[0] >>> 16,
    o = e[0] & 65535,
    r = e[1] >>> 16,
    l = e[1] & 65535,
    a = t[0] >>> 16,
    c = t[0] & 65535,
    f = t[1] >>> 16,
    m = t[1] & 65535;
  let s = 0,
    i = 0,
    h = 0,
    u = 0;
  u += l * m, h += u >>> 16, u &= 65535, h += r * m, i += h >>> 16, h &= 65535, h += l * f, i += h >>> 16, h &= 65535, i += o * m, s += i >>> 16, i &= 65535, i += r * f, s += i >>> 16, i &= 65535, i += l * c, s += i >>> 16, i &= 65535, s += n * m + o * f + r * c + l * a, s &= 65535, e[0] = s << 16 | i, e[1] = h << 16 | u
}

function W(e, t) {
  const n = e[0];
  t %= 64, t === 32 ? (e[0] = e[1], e[1] = n) : t < 32 ? (e[0] = n << t | e[1] >>> 32 - t, e[1] = e[1] << t | n >>> 32 - t) : (t -= 32, e[0] = e[1] << t | n >>> 32 - t, e[1] = n << t | e[1] >>> 32 - t)
}

function M(e, t) {
  t %= 64, t !== 0 && (t < 32 ? (e[0] = e[1] >>> 32 - t, e[1] = e[1] << t) : (e[0] = e[1] << t - 32, e[1] = 0))
}

function L(e, t) {
  e[0] ^= t[0], e[1] ^= t[1]
}
const Qe = [4283543511, 3981806797],
  qe = [3301882366, 444984403];

function de(e) {
  const t = [0, e[0] >>> 1];
  L(e, t), P(e, Qe), t[1] = e[0] >>> 1, L(e, t), P(e, qe), t[1] = e[0] >>> 1, L(e, t)
}
const z = [2277735313, 289559509],
  J = [1291169091, 658871167],
  fe = [0, 5],
  et = [0, 1390208809],
  tt = [0, 944331445];

function nt(e, t) {
  const n = Ke(e);
  t = t || 0;
  const o = [0, n.length],
    r = o[1] % 16,
    l = o[1] - r,
    a = [0, t],
    c = [0, t],
    f = [0, 0],
    m = [0, 0];
  let s;
  for (s = 0; s < l; s = s + 16) f[0] = n[s + 4] | n[s + 5] << 8 | n[s + 6] << 16 | n[s + 7] << 24, f[1] = n[s] | n[s + 1] << 8 | n[s + 2] << 16 | n[s + 3] << 24, m[0] = n[s + 12] | n[s + 13] << 8 | n[s + 14] << 16 | n[s + 15] << 24, m[1] = n[s + 8] | n[s + 9] << 8 | n[s + 10] << 16 | n[s + 11] << 24, P(f, z), W(f, 31), P(f, J), L(a, f), W(a, 27), E(a, c), P(a, fe), E(a, et), P(m, J), W(m, 33), P(m, z), L(c, m), W(c, 31), E(c, a), P(c, fe), E(c, tt);
  f[0] = 0, f[1] = 0, m[0] = 0, m[1] = 0;
  const i = [0, 0];
  switch (r) {
    case 15:
      i[1] = n[s + 14], M(i, 48), L(m, i);
    case 14:
      i[1] = n[s + 13], M(i, 40), L(m, i);
    case 13:
      i[1] = n[s + 12], M(i, 32), L(m, i);
    case 12:
      i[1] = n[s + 11], M(i, 24), L(m, i);
    case 11:
      i[1] = n[s + 10], M(i, 16), L(m, i);
    case 10:
      i[1] = n[s + 9], M(i, 8), L(m, i);
    case 9:
      i[1] = n[s + 8], L(m, i), P(m, J), W(m, 33), P(m, z), L(c, m);
    case 8:
      i[1] = n[s + 7], M(i, 56), L(f, i);
    case 7:
      i[1] = n[s + 6], M(i, 48), L(f, i);
    case 6:
      i[1] = n[s + 5], M(i, 40), L(f, i);
    case 5:
      i[1] = n[s + 4], M(i, 32), L(f, i);
    case 4:
      i[1] = n[s + 3], M(i, 24), L(f, i);
    case 3:
      i[1] = n[s + 2], M(i, 16), L(f, i);
    case 2:
      i[1] = n[s + 1], M(i, 8), L(f, i);
    case 1:
      i[1] = n[s], L(f, i), P(f, z), W(f, 31), P(f, J), L(a, f)
  }
  return L(a, o), L(c, o), E(a, c), E(c, a), de(a), de(c), E(a, c), E(c, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8)
}

function ot(e) {
  var t;
  return {
    name: e.name,
    message: e.message,
    stack: (t = e.stack) === null || t === void 0 ? void 0 : t.split(`
`),
    ...e
  }
}

function rt(e) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e))
}

function it(e) {
  return typeof e != "function"
}

function at(e, t) {
  const n = B(new Promise(o => {
    const r = Date.now();
    ue(e.bind(null, t), (...l) => {
      const a = Date.now() - r;
      if (!l[0]) return o(() => ({
        error: l[1],
        duration: a
      }));
      const c = l[1];
      if (it(c)) return o(() => ({
        value: c,
        duration: a
      }));
      o(() => new Promise(f => {
        const m = Date.now();
        ue(c, (...s) => {
          const i = a + Date.now() - m;
          if (!s[0]) return f({
            error: s[1],
            duration: i
          });
          f({
            value: s[1],
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

function st(e, t, n, o) {
  const r = Object.keys(e).filter(a => Ue(n, a)),
    l = B(le(r, a => at(e[a], t), o));
  return async function() {
    const c = await l,
      f = await le(c, i => B(i()), o),
      m = await Promise.all(f),
      s = {};
    for (let i = 0; i < r.length; ++i) s[r[i]] = m[i];
    return s
  }
}

function Fe() {
  const e = window,
    t = navigator;
  return S(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
}

function ct() {
  const e = window,
    t = navigator;
  return S(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !Fe()
}

function _() {
  const e = window,
    t = navigator;
  return S(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, (t.vendor || "").indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
}

function V() {
  const e = window,
    t = navigator;
  return S(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, t.vendor.indexOf("Apple") === 0, "RGBColor" in e, "WebKitMediaKeys" in e]) >= 4
}

function se() {
  const e = window,
    {
      HTMLElement: t,
      Document: n
    } = e;
  return S(["safari" in e, !("ongestureend" in e), !("TouchEvent" in e), !("orientation" in e), t && !("autocapitalize" in t.prototype), n && "pointerLockElement" in n.prototype]) >= 4
}

function Z() {
  const e = window;
  return rt(e.print) && String(e.browser) === "[object WebPageNamespace]"
}

function D() {
  var e, t;
  const n = window;
  return S(["buildID" in navigator, "MozAppearance" in ((t = (e = document.documentElement) === null || e === void 0 ? void 0 : e.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in n, "mozInnerScreenX" in n, "CSSMozDocumentRule" in n, "CanvasCaptureMediaStream" in n]) >= 4
}

function ut() {
  const e = window,
    t = navigator,
    {
      CSS: n
    } = e;
  return S(["userActivation" in t, n.supports("color", "light-dark(#000, #fff)"), n.supports("height", "1lh"), "globalPrivacyControl" in t]) >= 3
}

function Me() {
  const {
    CSS: e
  } = window;
  return S([e.supports("selector(::details-content)"), e.supports("selector(::before::marker)"), e.supports("selector(::after::marker)"), !("locale" in CompositionEvent.prototype)]) >= 3
}

function lt() {
  const e = window;
  return S([!("MediaSettingsRange" in e), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3
}

function dt() {
  const e = window,
    {
      URLPattern: t
    } = e;
  return S(["union" in Set.prototype, "Iterator" in e, t && "hasRegExpGroups" in t.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3
}

function ft() {
  const e = window,
    t = document,
    {
      CSS: n,
      Promise: o,
      AudioContext: r
    } = e;
  return S([o && "try" in o, "caretPositionFromPoint" in t, r && "onerror" in r.prototype, n.supports("ruby-align", "space-around")]) >= 3
}

function mt() {
  const e = window;
  return S(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
}

function Y() {
  const e = window,
    t = navigator,
    {
      CSS: n,
      HTMLButtonElement: o
    } = e;
  return S([!("getStorageUpdates" in t), o && "popover" in o.prototype, "CSSCounterStyleRule" in e, n.supports("font-size-adjust: ex-height 0.5"), n.supports("text-transform: full-width")]) >= 4
}

function pt() {
  if (navigator.platform === "iPad") return !0;
  const e = screen,
    t = e.width / e.height;
  return S(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
}

function ht() {
  const e = document;
  return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
}

function gt() {
  const e = document;
  return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e)
}

function K() {
  const e = _(),
    t = D(),
    n = window,
    o = navigator,
    r = "connection";
  return e ? S([!("SharedWorker" in n), o[r] && "ontypechange" in o[r], !("sinkId" in new Audio)]) >= 2 : t ? S(["onorientationchange" in n, "orientation" in n, /android/i.test(o.appVersion)]) >= 2 : !1
}

function yt() {
  const e = navigator,
    t = window,
    n = Audio.prototype,
    {
      visualViewport: o
    } = t;
  return S(["srLatency" in n, "srChannelCount" in n, "devicePosture" in e, o && "segments" in o, "getTextInformation" in Image.prototype]) >= 3
}

function bt() {
  return Lt() ? -4 : wt()
}

function wt() {
  const e = window,
    t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
  if (!t) return -2;
  if (vt()) return -1;
  const n = 4500,
    o = 5e3,
    r = new t(1, o, 44100),
    l = r.createOscillator();
  l.type = "triangle", l.frequency.value = 1e4;
  const a = r.createDynamicsCompressor();
  a.threshold.value = -50, a.knee.value = 40, a.ratio.value = 12, a.attack.value = 0, a.release.value = .25, l.connect(a), a.connect(r.destination), l.start(0);
  const [c, f] = Ct(r), m = B(c.then(s => St(s.getChannelData(0).subarray(n)), s => {
    if (s.name === "timeout" || s.name === "suspended") return -3;
    throw s
  }));
  return () => (f(), m)
}

function vt() {
  return V() && !se() && !mt()
}

function Lt() {
  return V() && Y() && Z() || _() && yt() && dt()
}

function Ct(e) {
  let l = () => {};
  return [new Promise((c, f) => {
    let m = !1,
      s = 0,
      i = 0;
    e.oncomplete = g => c(g.renderedBuffer);
    const h = () => {
        setTimeout(() => f(me("timeout")), Math.min(500, i + 5e3 - Date.now()))
      },
      u = () => {
        try {
          const g = e.startRendering();
          switch (Se(g) && B(g), e.state) {
            case "running":
              i = Date.now(), m && h();
              break;
            case "suspended":
              document.hidden || s++, m && s >= 3 ? f(me("suspended")) : setTimeout(u, 500);
              break
          }
        } catch (g) {
          f(g)
        }
      };
    u(), l = () => {
      m || (m = !0, i > 0 && h())
    }
  }), l]
}

function St(e) {
  let t = 0;
  for (let n = 0; n < e.length; ++n) t += Math.abs(e[n]);
  return t
}

function me(e) {
  const t = new Error(e);
  return t.name = e, t
}
async function Pe(e, t, n = 50) {
  var o, r, l;
  const a = document;
  for (; !a.body;) await $(n);
  const c = a.createElement("iframe");
  try {
    for (await new Promise((f, m) => {
        let s = !1;
        const i = () => {
            s = !0, f()
          },
          h = v => {
            s = !0, m(v)
          };
        c.onload = i, c.onerror = h;
        const {
          style: u
        } = c;
        u.setProperty("display", "block", "important"), u.position = "absolute", u.top = "0", u.left = "0", u.visibility = "hidden", t && "srcdoc" in c ? c.srcdoc = t : c.src = "about:blank", a.body.appendChild(c);
        const g = () => {
          var v, x;
          s || (((x = (v = c.contentWindow) === null || v === void 0 ? void 0 : v.document) === null || x === void 0 ? void 0 : x.readyState) === "complete" ? i() : setTimeout(g, 10))
        };
        g()
      }); !(!((r = (o = c.contentWindow) === null || o === void 0 ? void 0 : o.document) === null || r === void 0) && r.body);) await $(n);
    return await e(c, c.contentWindow)
  } finally {
    (l = c.parentNode) === null || l === void 0 || l.removeChild(c)
  }
}

function kt(e) {
  const [t, n] = $e(e), o = document.createElement(t ?? "div");
  for (const r of Object.keys(n)) {
    const l = n[r].join(" ");
    r === "style" ? Ft(o.style, l) : o.setAttribute(r, l)
  }
  return o
}

function Ft(e, t) {
  for (const n of t.split(";")) {
    const o = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(n);
    if (o) {
      const [, r, l, , a] = o;
      e.setProperty(r, l, a || "")
    }
  }
}

function Mt() {
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
const Pt = "mmMwWLliI0O&1",
  It = "48px",
  T = ["monospace", "sans-serif", "serif"],
  pe = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function Vt() {
  return Pe(async (e, {
    document: t
  }) => {
    const n = t.body;
    n.style.fontSize = It;
    const o = t.createElement("div");
    o.style.setProperty("visibility", "hidden", "important");
    const r = {},
      l = {},
      a = u => {
        const g = t.createElement("span"),
          {
            style: v
          } = g;
        return v.position = "absolute", v.top = "0", v.left = "0", v.fontFamily = u, g.textContent = Pt, o.appendChild(g), g
      },
      c = (u, g) => a(`'${u}',${g}`),
      f = () => T.map(a),
      m = () => {
        const u = {};
        for (const g of pe) u[g] = T.map(v => c(g, v));
        return u
      },
      s = u => T.some((g, v) => u[v].offsetWidth !== r[g] || u[v].offsetHeight !== l[g]),
      i = f(),
      h = m();
    n.appendChild(o);
    for (let u = 0; u < T.length; u++) r[T[u]] = i[u].offsetWidth, l[T[u]] = i[u].offsetHeight;
    return pe.filter(u => s(h[u]))
  })
}

function At() {
  const e = navigator.plugins;
  if (!e) return;
  const t = [];
  for (let n = 0; n < e.length; ++n) {
    const o = e[n];
    if (!o) continue;
    const r = [];
    for (let l = 0; l < o.length; ++l) {
      const a = o[l];
      r.push({
        type: a.type,
        suffixes: a.suffixes
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

function xt() {
  return Rt(Zt())
}

function Rt(e) {
  let t = !1,
    n, o;
  const [r, l] = Et();
  return Wt(r, l) ? (t = Tt(l), e ? n = o = "skipped" : [n, o] = Gt(r, l)) : n = o = "unsupported", {
    winding: t,
    geometry: n,
    text: o
  }
}

function Et() {
  const e = document.createElement("canvas");
  return e.width = 1, e.height = 1, [e, e.getContext("2d")]
}

function Wt(e, t) {
  return !!(t && e.toDataURL)
}

function Tt(e) {
  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd")
}

function Gt(e, t) {
  _t(e, t);
  const n = ee(e),
    o = ee(e);
  return n !== o ? ["unstable", "unstable"] : (Bt(e, t), [ee(e), n])
}

function _t(e, t) {
  e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
  const n = "Cwm fjordbank gly 😃";
  t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(n, 4, 45)
}

function Bt(e, t) {
  e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
  for (const [n, o, r] of [
      ["#f2f", 40, 40],
      ["#2ff", 80, 40],
      ["#ff2", 60, 80]
    ]) t.fillStyle = n, t.beginPath(), t.arc(o, r, 40, 0, Math.PI * 2, !0), t.closePath(), t.fill();
  t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, Math.PI * 2, !0), t.arc(60, 60, 20, 0, Math.PI * 2, !0), t.fill("evenodd")
}

function ee(e) {
  return e.toDataURL()
}

function Zt() {
  const e = V() && Y() && Z(),
    t = D() && ut();
  return e || t
}

function Dt() {
  const e = navigator;
  let t = 0,
    n;
  e.maxTouchPoints !== void 0 ? t = ae(e.maxTouchPoints) : e.msMaxTouchPoints !== void 0 && (t = e.msMaxTouchPoints);
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

function Yt() {
  return navigator.oscpu
}

function jt() {
  const e = navigator,
    t = [],
    n = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if (n !== void 0 && t.push([n]), Array.isArray(e.languages)) _() && lt() || t.push(e.languages);
  else if (typeof e.languages == "string") {
    const o = e.languages;
    o && t.push(o.split(","))
  }
  return t
}

function Ht() {
  return window.screen.colorDepth
}

function Xt() {
  return A(I(navigator.deviceMemory), void 0)
}

function Nt() {
  if (!(V() && Y() && Z())) return Ot()
}

function Ot() {
  const e = screen,
    t = o => A(ae(o), null),
    n = [t(e.width), t(e.height)];
  return n.sort().reverse(), n
}
const zt = 2500,
  Jt = 10;
let U, te;

function Ut() {
  if (te !== void 0) return;
  const e = () => {
    const t = re();
    ie(t) ? te = setTimeout(e, zt) : (U = t, te = void 0)
  };
  e()
}

function $t() {
  return Ut(), async () => {
    let e = re();
    if (ie(e)) {
      if (U) return [...U];
      ht() && (await gt(), e = re())
    }
    return ie(e) || (U = e), e
  }
}

function Kt() {
  const e = V() && Y() && Z(),
    t = D() && Me();
  if (e || t) return () => Promise.resolve(void 0);
  const n = $t();
  return async () => {
    const o = await n(),
      r = l => l === null ? null : ke(l, Jt);
    return [r(o[0]), r(o[1]), r(o[2]), r(o[3])]
  }
}

function re() {
  const e = screen;
  return [A(I(e.availTop), null), A(I(e.width) - I(e.availWidth) - A(I(e.availLeft), 0), null), A(I(e.height) - I(e.availHeight) - A(I(e.availTop), 0), null), A(I(e.availLeft), null)]
}

function ie(e) {
  for (let t = 0; t < 4; ++t)
    if (e[t]) return !1;
  return !0
}

function Qt() {
  const e = qt();
  return e !== void 0 && D() && Me() ? e >= 8 ? 8 : 4 : e
}

function qt() {
  return A(ae(navigator.hardwareConcurrency), void 0)
}

function en() {
  var e;
  const t = (e = window.Intl) === null || e === void 0 ? void 0 : e.DateTimeFormat;
  if (t) {
    const o = new t().resolvedOptions().timeZone;
    if (o) return o
  }
  const n = -tn();
  return `UTC${n>=0?"+":""}${n}`
}

function tn() {
  const e = new Date().getFullYear();
  return Math.max(I(new Date(e, 0, 1).getTimezoneOffset()), I(new Date(e, 6, 1).getTimezoneOffset()))
}

function nn() {
  try {
    return !!window.sessionStorage
  } catch {
    return !0
  }
}

function on() {
  try {
    return !!window.localStorage
  } catch {
    return !0
  }
}

function rn() {
  if (!(Fe() || ct())) try {
    return !!window.indexedDB
  } catch {
    return !0
  }
}

function an() {
  return !!window.openDatabase
}

function sn() {
  return navigator.cpuClass
}

function cn() {
  const {
    platform: e
  } = navigator;
  return e === "MacIntel" && V() && !se() ? pt() ? "iPad" : "iPhone" : e
}

function un() {
  return navigator.vendor || ""
}

function ln() {
  const e = [];
  for (const t of ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]) {
    const n = window[t];
    n && typeof n == "object" && e.push(t)
  }
  return e.sort()
}

function dn() {
  const e = document;
  try {
    e.cookie = "cookietest=1; SameSite=Strict;";
    const t = e.cookie.indexOf("cookietest=") !== -1;
    return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
  } catch {
    return !1
  }
}

function fn() {
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
async function mn({
  debug: e
} = {}) {
  if (!pn()) return;
  const t = fn(),
    n = Object.keys(t),
    o = [].concat(...n.map(a => t[a])),
    r = await hn(o);
  e && gn(t, r);
  const l = n.filter(a => {
    const c = t[a];
    return S(c.map(m => r[m])) > c.length * .6
  });
  return l.sort(), l
}

function pn() {
  return V() || K()
}
async function hn(e) {
  var t;
  const n = document,
    o = n.createElement("div"),
    r = new Array(e.length),
    l = {};
  he(o);
  for (let a = 0; a < e.length; ++a) {
    const c = kt(e[a]);
    c.tagName === "DIALOG" && c.show();
    const f = n.createElement("div");
    he(f), f.appendChild(c), o.appendChild(f), r[a] = c
  }
  for (; !n.body;) await $(50);
  n.body.appendChild(o);
  try {
    for (let a = 0; a < e.length; ++a) r[a].offsetParent || (l[e[a]] = !0)
  } finally {
    (t = o.parentNode) === null || t === void 0 || t.removeChild(o)
  }
  return l
}

function he(e) {
  e.style.setProperty("visibility", "hidden", "important"), e.style.setProperty("display", "block", "important")
}

function gn(e, t) {
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

function yn() {
  for (const e of ["rec2020", "p3", "srgb"])
    if (matchMedia(`(color-gamut: ${e})`).matches) return e
}

function bn() {
  if (ge("inverted")) return !0;
  if (ge("none")) return !1
}

function ge(e) {
  return matchMedia(`(inverted-colors: ${e})`).matches
}

function wn() {
  if (ye("active")) return !0;
  if (ye("none")) return !1
}

function ye(e) {
  return matchMedia(`(forced-colors: ${e})`).matches
}
const vn = 100;

function Ln() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (let e = 0; e <= vn; ++e)
      if (matchMedia(`(max-monochrome: ${e})`).matches) return e;
    throw new Error("Too high value")
  }
}

function Cn() {
  if (G("no-preference")) return 0;
  if (G("high") || G("more")) return 1;
  if (G("low") || G("less")) return -1;
  if (G("forced")) return 10
}

function G(e) {
  return matchMedia(`(prefers-contrast: ${e})`).matches
}

function Sn() {
  if (be("reduce")) return !0;
  if (be("no-preference")) return !1
}

function be(e) {
  return matchMedia(`(prefers-reduced-motion: ${e})`).matches
}

function kn() {
  if (we("reduce")) return !0;
  if (we("no-preference")) return !1
}

function we(e) {
  return matchMedia(`(prefers-reduced-transparency: ${e})`).matches
}

function Fn() {
  if (ve("high")) return !0;
  if (ve("standard")) return !1
}

function ve(e) {
  return matchMedia(`(dynamic-range: ${e})`).matches
}
const w = Math,
  F = () => 0;

function Mn() {
  const e = w.acos || F,
    t = w.acosh || F,
    n = w.asin || F,
    o = w.asinh || F,
    r = w.atanh || F,
    l = w.atan || F,
    a = w.sin || F,
    c = w.sinh || F,
    f = w.cos || F,
    m = w.cosh || F,
    s = w.tan || F,
    i = w.tanh || F,
    h = w.exp || F,
    u = w.expm1 || F,
    g = w.log1p || F,
    v = d => w.pow(w.PI, d),
    x = d => w.log(d + w.sqrt(d * d - 1)),
    j = d => w.log(d + w.sqrt(d * d + 1)),
    H = d => w.log((1 + d) / (1 - d)) / 2,
    X = d => w.exp(d) - 1 / w.exp(d) / 2,
    N = d => (w.exp(d) + 1 / w.exp(d)) / 2,
    R = d => w.exp(d) - 1,
    ce = d => (w.exp(2 * d) - 1) / (w.exp(2 * d) + 1),
    y = d => w.log(1 + d);
  return {
    acos: e(.12312423423423424),
    acosh: t(1e308),
    acoshPf: x(1e154),
    asin: n(.12312423423423424),
    asinh: o(1),
    asinhPf: j(1),
    atanh: r(.5),
    atanhPf: H(.5),
    atan: l(.5),
    sin: a(-1e300),
    sinh: c(1),
    sinhPf: X(1),
    cos: f(10.000000000123),
    cosh: m(1),
    coshPf: N(1),
    tan: s(-1e300),
    tanh: i(1),
    tanhPf: ce(1),
    exp: h(1),
    expm1: u(1),
    expm1Pf: R(1),
    log1p: g(10),
    log1pPf: y(10),
    powPI: v(-100)
  }
}
const Pn = "mmMwWLliI0fiflO&1",
  ne = {
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

function In() {
  return An((e, t, n) => {
    const o = {},
      r = {};
    for (const a of Object.keys(ne)) {
      const [c = {}, f = Pn] = ne[a], m = e.createElement("span");
      m.textContent = f, m.style.whiteSpace = "nowrap";
      for (const s of Object.keys(c)) {
        const i = c[s];
        i !== void 0 && (m.style[s] = i)
      }
      o[a] = m, t.append(e.createElement("br"), m)
    }
    const l = _() && ft();
    for (const a of Object.keys(ne)) {
      const c = o[a].getBoundingClientRect().width;
      r[a] = l ? Vn(c * n.devicePixelRatio) : c
    }
    return r
  })
}

function Vn(e) {
  const t = K() ? 0 : 3,
    n = Math.pow(10, t);
  return Math.floor(e * n) / n
}

function An(e, t = 4e3) {
  return Pe((n, o) => {
    const r = o.document,
      l = r.body,
      a = l.style;
    a.width = `${t}px`, a.webkitTextSizeAdjust = a.textSizeAdjust = "none", _() ? l.style.zoom = `${1/o.devicePixelRatio}` : V() && (l.style.zoom = "reset");
    const c = r.createElement("div");
    return c.textContent = [...Array(t / 20 << 0)].map(() => "word").join(" "), l.appendChild(c), e(r, l, o)
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
}

function xn() {
  return navigator.pdfViewerEnabled
}

function Rn() {
  const e = new Float32Array(1),
    t = new Uint8Array(e.buffer);
  return e[0] = 1 / 0, e[0] = e[0] - e[0], t[3]
}

function En() {
  const {
    ApplePaySession: e
  } = window;
  if (typeof(e == null ? void 0 : e.canMakePayments) != "function") return -1;
  if (Wn()) return -3;
  try {
    return e.canMakePayments() ? 1 : 0
  } catch (t) {
    return Tn(t)
  }
}
const Wn = Mt;

function Tn(e) {
  if (e instanceof Error && e.name === "InvalidAccessError" && /\bfrom\b.*\binsecure\b/i.test(e.message)) return -2;
  throw e
}

function Gn() {
  var e;
  const t = document.createElement("a"),
    n = (e = t.attributionSourceId) !== null && e !== void 0 ? e : t.attributionsourceid;
  return n === void 0 ? void 0 : String(n)
}
const Ie = -1,
  Ve = -2,
  _n = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
  Bn = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  Zn = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
  Dn = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
  Ae = "WEBGL_debug_renderer_info",
  Yn = "WEBGL_polygon_mode";

function jn({
  cache: e
}) {
  var t, n, o, r, l, a;
  const c = xe(e);
  if (!c) return Ie;
  if (!Ee(c)) return Ve;
  const f = Re() ? null : c.getExtension(Ae);
  return {
    version: ((t = c.getParameter(c.VERSION)) === null || t === void 0 ? void 0 : t.toString()) || "",
    vendor: ((n = c.getParameter(c.VENDOR)) === null || n === void 0 ? void 0 : n.toString()) || "",
    vendorUnmasked: f ? (o = c.getParameter(f.UNMASKED_VENDOR_WEBGL)) === null || o === void 0 ? void 0 : o.toString() : "",
    renderer: ((r = c.getParameter(c.RENDERER)) === null || r === void 0 ? void 0 : r.toString()) || "",
    rendererUnmasked: f ? (l = c.getParameter(f.UNMASKED_RENDERER_WEBGL)) === null || l === void 0 ? void 0 : l.toString() : "",
    shadingLanguageVersion: ((a = c.getParameter(c.SHADING_LANGUAGE_VERSION)) === null || a === void 0 ? void 0 : a.toString()) || ""
  }
}

function Hn({
  cache: e
}) {
  const t = xe(e);
  if (!t) return Ie;
  if (!Ee(t)) return Ve;
  const n = t.getSupportedExtensions(),
    o = t.getContextAttributes(),
    r = [],
    l = [],
    a = [],
    c = [],
    f = [];
  if (o)
    for (const s of Object.keys(o)) l.push(`${s}=${o[s]}`);
  const m = Le(t);
  for (const s of m) {
    const i = t[s];
    a.push(`${s}=${i}${_n.has(i)?`=${t.getParameter(i)}`:""}`)
  }
  if (n)
    for (const s of n) {
      if (s === Ae && Re() || s === Yn && On()) continue;
      const i = t.getExtension(s);
      if (!i) {
        r.push(s);
        continue
      }
      for (const h of Le(i)) {
        const u = i[h];
        c.push(`${h}=${u}${Bn.has(u)?`=${t.getParameter(u)}`:""}`)
      }
    }
  for (const s of Zn)
    for (const i of Dn) {
      const h = Xn(t, s, i);
      f.push(`${s}.${i}=${h.join(",")}`)
    }
  return c.sort(), a.sort(), {
    contextAttributes: l,
    parameters: a,
    shaderPrecisions: f,
    extensions: n,
    extensionParameters: c,
    unsupportedExtensions: r
  }
}

function xe(e) {
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

function Xn(e, t, n) {
  const o = e.getShaderPrecisionFormat(e[t], e[n]);
  return o ? [o.rangeMin, o.rangeMax, o.precision] : []
}

function Le(e) {
  return Object.keys(e.__proto__).filter(Nn)
}

function Nn(e) {
  return typeof e == "string" && !e.match(/[^A-Z0-9_x]/)
}

function Re() {
  return D()
}

function On() {
  return _() || V()
}

function Ee(e) {
  return typeof e.getParameter == "function"
}

function zn() {
  if (!(K() || V())) return -2;
  if (!window.AudioContext) return -1;
  const t = new AudioContext().baseLatency;
  return t == null ? -1 : isFinite(t) ? t : -3
}

function Jn() {
  if (!window.Intl) return -1;
  const e = window.Intl.DateTimeFormat;
  if (!e) return -2;
  const t = e().resolvedOptions().locale;
  return !t && t !== "" ? -3 : t
}

function Un(e) {
  return /not/i.test(e)
}
async function $n() {
  const e = navigator.userAgentData;
  if (!e) return;
  const t = e.brands.filter(({
      brand: r
    }) => !Un(r)).map(({
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
const Kn = {
  userAgentData: $n,
  fonts: Vt,
  domBlockers: mn,
  fontPreferences: In,
  audio: bt,
  screenFrame: Kt,
  canvas: xt,
  osCpu: Yt,
  languages: jt,
  colorDepth: Ht,
  deviceMemory: Xt,
  screenResolution: Nt,
  hardwareConcurrency: Qt,
  timezone: en,
  sessionStorage: nn,
  localStorage: on,
  indexedDB: rn,
  openDatabase: an,
  cpuClass: sn,
  platform: cn,
  plugins: At,
  touchSupport: Dt,
  vendor: un,
  vendorFlavors: ln,
  cookiesEnabled: dn,
  colorGamut: yn,
  invertedColors: bn,
  forcedColors: wn,
  monochrome: Ln,
  contrast: Cn,
  reducedMotion: Sn,
  reducedTransparency: kn,
  hdr: Fn,
  math: Mn,
  pdfViewerEnabled: xn,
  architecture: Rn,
  applePay: En,
  privateClickMeasurement: Gn,
  audioBaseLatency: zn,
  dateTimeLocale: Jn,
  webGlBasics: jn,
  webGlExtensions: Hn
};

function Qn(e) {
  return st(Kn, e, [])
}
const qn = "$ if upgrade to Pro: https://fingerprint.com/github/?utm_source=oss&utm_medium=referral&utm_campaign=confidence_score";

function eo(e) {
  const t = to(e),
    n = no(t);
  return {
    score: t,
    comment: qn.replace(/\$/g, `${n}`)
  }
}

function to(e) {
  if (K()) return .4;
  if (V()) return se() && !(Y() && Z()) ? .5 : .3;
  const t = "value" in e.platform ? e.platform.value : "";
  return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
}

function no(e) {
  return ke(.99 + .01 * e, 1e-4)
}

function oo(e) {
  let t = "";
  for (const n of Object.keys(e).sort()) {
    const o = e[n],
      r = "error" in o ? "error" : JSON.stringify(o.value);
    t += `${t?"|":""}${n.replace(/([:|\\])/g,"\\$1")}:${r}`
  }
  return t
}

function We(e) {
  return JSON.stringify(e, (t, n) => n instanceof Error ? ot(n) : n, 2)
}

function Te(e) {
  return nt(oo(e))
}

function ro(e) {
  let t;
  const n = eo(e);
  return {
    get visitorId() {
      return t === void 0 && (t = Te(this.components)), t
    },
    set visitorId(o) {
      t = o
    },
    confidence: n,
    components: e,
    version: Ce
  }
}

function io(e = 50) {
  return ze(e, e * 2)
}

function ao(e, t) {
  const n = Date.now();
  return {
    async get(o) {
      const r = Date.now(),
        l = await e(),
        a = ro(l);
      return (t || o != null && o.debug) && console.log(`Copy the text below to get the debug data:

\`\`\`
version: ${a.version}
userAgent: ${navigator.userAgent}
timeBetweenLoadAndGet: ${r-n}
visitorId: ${a.visitorId}
components: ${We(l)}
\`\`\``), a
    }
  }
}

function so() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const e = new XMLHttpRequest;
    e.open("get", `https://m1.openfpcdn.io/fingerprintjs/v${Ce}/npm-monitoring`, !0), e.send()
  } catch (e) {
    console.error(e)
  }
}
async function co(e = {}) {
  const {
    delayFallback: t,
    debug: n,
    monitoring: o = !0
  } = e;
  o && so(), await io(t);
  const r = Qn({
    cache: {},
    debug: n
  });
  return ao(r, n)
}
var Ge = {
  load: co,
  hashComponents: Te,
  componentsToDebugString: We
};
let oe = null;
async function uo() {
  return oe || (oe = Ge.load()), oe
}
async function vo() {
  return lo().then(e => e.visitorId)
}
async function lo() {
  const t = await (await uo()).get();
  let n = t.components;
  const o = Ze(),
    r = navigator.userAgent.toLowerCase(),
    l = r.includes("iphone"),
    a = r.includes("macintosh"),
    c = l || a,
    f = r.includes("android");
  if (c) n = t.components;
  else if (o === "Chrome") {
    const {
      languages: u,
      ...g
    } = t.components;
    n = g
  } else if (o === "Firefox") {
    const {
      languages: u,
      dateTimeLocale: g,
      ...v
    } = t.components;
    n = v
  } else if (o === "Brave") {
    const {
      fonts: u,
      audio: g,
      canvas: v,
      hardwareConcurrency: x,
      plugins: j,
      deviceMemory: H,
      languages: X,
      dateTimeLocale: N,
      ...R
    } = t.components;
    n = R
  } else {
    const {
      languages: u,
      ...g
    } = t.components;
    n = g
  }(o === "Safari" || f) && (n = {
    userAgent: {
      value: navigator.userAgent,
      duration: 0
    },
    ...t.components
  }), o === "Safari" && (n = {
    canvas2d: {
      value: await je(),
      duration: 0
    },
    ...t.components
  });
  const m = Ge.hashComponents(n),
    s = m.length,
    i = s >> 2 | 2;
  return {
    visitorId: m.slice(0, i) + (s * 5).toString(16) + m.slice(i + (s >> 4)),
    components: n
  }
}
export {
  bo as P, wo as a, po as b, go as c, mo as d, yo as e, Ze as f, vo as g, lo as h, Be as i, ho as j, fo as k
};