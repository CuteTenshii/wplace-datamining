var er = Object.defineProperty;
var Ut = n => {
  throw TypeError(n)
};
var tr = (n, t, e) => t in n ? er(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : n[t] = e;
var R = (n, t, e) => tr(n, typeof t != "symbol" ? t + "" : t, e),
  nr = (n, t, e) => t.has(n) || Ut("Cannot " + e);
var w = (n, t, e) => (nr(n, t, "read from private field"), e ? e.call(n) : t.get(n)),
  L = (n, t, e) => t.has(n) ? Ut("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
import {
  e as V,
  i as M,
  h as C,
  g as ft,
  bM as rr,
  y as or,
  B as Gt,
  u as Oe
} from "./CxLQz1V2.js";
import {
  g as h
} from "./BhCkpOlh.js";
const iA = "https://maps.wplace.live",
  aA = "8d582454-e5ec-4314-b1c2-89e460ac1d28",
  sA = "pk_live_51RMHjBAtY4KIdFGnnJ9ZHjvgP68opqg7wlT7fA1HG3p91vfhVQyn6je810y5Cz3ggTycnJtFRkwHsYy1qJEyKRFW00x1i0iWMl",
  ir = "true",
  cA = "0x4AAAAAABpHqZ-6i7uL0nmG",
  uA = "https://backend.wplace.live/files",
  Ct = "https://backend.wplace.live",
  ar = "" + new URL("../assets/pawtect_wasm_bg.8VPqYlMZ.wasm", import.meta.url).href;
var sr = "2.0.0";
const S = {
  Awesomium: "awesomium",
  Cef: "cef",
  CefSharp: "cefsharp",
  CoachJS: "coachjs",
  Electron: "electron",
  FMiner: "fminer",
  Geb: "geb",
  NightmareJS: "nightmarejs",
  Phantomas: "phantomas",
  PhantomJS: "phantomjs",
  Rhino: "rhino",
  Selenium: "selenium",
  Sequentum: "sequentum",
  SlimerJS: "slimerjs",
  WebDriverIO: "webdriverio",
  WebDriver: "webdriver",
  HeadlessChrome: "headless_chrome",
  Unknown: "unknown"
};
class P extends Error {
  constructor(t, e) {
    super(e), this.state = t, this.name = "BotdError", Object.setPrototypeOf(this, P.prototype)
  }
}

function cr(n, t) {
  const e = {};
  let r = {
    bot: !1
  };
  for (const o in t) {
    const i = t[o],
      a = i(n);
    let c = {
      bot: !1
    };
    typeof a == "string" ? c = {
      bot: !0,
      botKind: a
    } : a && (c = {
      bot: !0,
      botKind: S.Unknown
    }), e[o] = c, c.bot && (r = c)
  }
  return [e, r]
}
async function ur(n) {
  const t = {},
    e = Object.keys(n);
  return await Promise.all(e.map(async r => {
    const o = n[r];
    try {
      t[r] = {
        value: await o(),
        state: 0
      }
    } catch (i) {
      i instanceof P ? t[r] = {
        state: i.state,
        error: `${i.name}: ${i.message}`
      } : t[r] = {
        state: -3,
        error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
      }
    }
  })), t
}

function lr({
  appVersion: n
}) {
  if (n.state !== 0) return !1;
  if (/headless/i.test(n.value)) return S.HeadlessChrome;
  if (/electron/i.test(n.value)) return S.Electron;
  if (/slimerjs/i.test(n.value)) return S.SlimerJS
}

function ct(n, t) {
  return n.indexOf(t) !== -1
}

function ee(n, t) {
  return n.indexOf(t) !== -1
}

function dr(n, t) {
  if ("find" in n) return n.find(t);
  for (let e = 0; e < n.length; e++)
    if (t(n[e], e, n)) return n[e]
}

function qt(n) {
  return Object.getOwnPropertyNames(n)
}

function It(n, ...t) {
  for (const e of t)
    if (typeof e == "string") {
      if (ct(n, e)) return !0
    } else if (dr(n, o => e.test(o)) != null) return !0;
  return !1
}

function ve(n) {
  return n.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function _r({
  documentElementKeys: n
}) {
  if (n.state !== 0) return !1;
  if (It(n.value, "selenium", "webdriver", "driver")) return S.Selenium
}

function fr({
  errorTrace: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return S.PhantomJS
}

function pr({
  evalLength: n,
  browserKind: t,
  browserEngineKind: e
}) {
  if (n.state !== 0 || t.state !== 0 || e.state !== 0) return;
  const r = n.value;
  return e.value === "unknown" ? !1 : r === 37 && !ct(["webkit", "gecko"], e.value) || r === 39 && !ct(["internet_explorer"], t.value) || r === 33 && !ct(["chromium"], e.value)
}

function mr({
  functionBind: n
}) {
  if (n.state === -2) return S.PhantomJS
}

function hr({
  languages: n
}) {
  if (n.state === 0 && n.value.length === 0) return S.HeadlessChrome
}

function gr({
  mimeTypesConsistent: n
}) {
  if (n.state === 0 && !n.value) return S.Unknown
}

function wr({
  notificationPermissions: n,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== "chrome") return !1;
  if (n.state === 0 && n.value) return S.HeadlessChrome
}

function yr({
  pluginsArray: n
}) {
  if (n.state === 0 && !n.value) return S.HeadlessChrome
}

function br({
  pluginsLength: n,
  android: t,
  browserKind: e,
  browserEngineKind: r
}) {
  if (!(n.state !== 0 || t.state !== 0 || e.state !== 0 || r.state !== 0) && !(e.value !== "chrome" || t.value || r.value !== "chromium") && n.value === 0) return S.HeadlessChrome
}

function vr({
  process: n
}) {
  var t;
  if (n.state !== 0) return !1;
  if (n.value.type === "renderer" || ((t = n.value.versions) === null || t === void 0 ? void 0 : t.electron) != null) return S.Electron
}

function Er({
  productSub: n,
  browserKind: t
}) {
  if (n.state !== 0 || t.state !== 0) return !1;
  if ((t.value === "chrome" || t.value === "safari" || t.value === "opera" || t.value === "wechat") && n.value !== "20030107") return S.Unknown
}

function Tr({
  userAgent: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return S.PhantomJS;
  if (/Headless/i.test(n.value)) return S.HeadlessChrome;
  if (/Electron/i.test(n.value)) return S.Electron;
  if (/slimerjs/i.test(n.value)) return S.SlimerJS
}

function Or({
  webDriver: n
}) {
  if (n.state === 0 && n.value) return S.HeadlessChrome
}

function kr({
  webGL: n
}) {
  if (n.state === 0) {
    const {
      vendor: t,
      renderer: e
    } = n.value;
    if (t == "Brian Paul" && e == "Mesa OffScreen") return S.HeadlessChrome
  }
}

function Sr({
  windowExternal: n
}) {
  if (n.state !== 0) return !1;
  if (/Sequentum/i.test(n.value)) return S.Sequentum
}

function Ar({
  windowSize: n,
  documentFocus: t
}) {
  if (n.state !== 0 || t.state !== 0) return !1;
  const {
    outerWidth: e,
    outerHeight: r
  } = n.value;
  if (t.value && e === 0 && r === 0) return S.HeadlessChrome
}

function Rr({
  distinctiveProps: n
}) {
  if (n.state !== 0) return !1;
  const t = n.value;
  let e;
  for (e in t)
    if (t[e]) return e
}
const Ir = {
  detectAppVersion: lr,
  detectDocumentAttributes: _r,
  detectErrorTrace: fr,
  detectEvalLengthInconsistency: pr,
  detectFunctionBind: mr,
  detectLanguagesLengthInconsistency: hr,
  detectNotificationPermissions: wr,
  detectPluginsArray: yr,
  detectPluginsLengthInconsistency: br,
  detectProcess: vr,
  detectUserAgent: Tr,
  detectWebDriver: Or,
  detectWebGL: kr,
  detectWindowExternal: Sr,
  detectWindowSize: Ar,
  detectMimeTypesConsistent: gr,
  detectProductSub: Er,
  detectDistinctiveProperties: Rr
};

function Nr() {
  const n = navigator.appVersion;
  if (n == null) throw new P(-1, "navigator.appVersion is undefined");
  return n
}

function Dr() {
  if (document.documentElement === void 0) throw new P(-1, "document.documentElement is undefined");
  const {
    documentElement: n
  } = document;
  if (typeof n.getAttributeNames != "function") throw new P(-2, "document.documentElement.getAttributeNames is not a function");
  return n.getAttributeNames()
}

function Lr() {
  try {
    null[0]()
  } catch (n) {
    if (n instanceof Error && n.stack != null) return n.stack.toString()
  }
  throw new P(-3, "errorTrace signal unexpected behaviour")
}

function Pr() {
  return eval.toString().length
}

function xr() {
  if (Function.prototype.bind === void 0) throw new P(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function jt() {
  var n, t;
  const e = window,
    r = navigator;
  return ve(["webkitPersistentStorage" in r, "webkitTemporaryStorage" in r, r.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : ve(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, r.vendor.indexOf("Apple") === 0, "getStorageUpdates" in r, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : ve(["buildID" in navigator, "MozAppearance" in ((t = (n = document.documentElement) === null || n === void 0 ? void 0 : n.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function zr() {
  var n;
  const t = (n = navigator.userAgent) === null || n === void 0 ? void 0 : n.toLowerCase();
  return ee(t, "edg/") ? "edge" : ee(t, "trident") || ee(t, "msie") ? "internet_explorer" : ee(t, "wechat") ? "wechat" : ee(t, "firefox") ? "firefox" : ee(t, "opera") || ee(t, "opr") ? "opera" : ee(t, "chrome") ? "chrome" : ee(t, "safari") ? "safari" : "unknown"
}

function Mr() {
  const n = jt(),
    t = n === "chromium",
    e = n === "gecko",
    r = window,
    o = navigator,
    i = "connection";
  return t ? ve([!("SharedWorker" in r), o[i] && "ontypechange" in o[i], !("sinkId" in new Audio)]) >= 2 : e ? ve(["onorientationchange" in r, "orientation" in r, /android/i.test(o.appVersion)]) >= 2 : !1
}

function Cr() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function jr() {
  const n = window;
  return ve([!("MediaSettingsRange" in n), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3
}

function Br() {
  const n = navigator,
    t = [],
    e = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(n.languages)) jt() === "chromium" && jr() || t.push(n.languages);
  else if (typeof n.languages == "string") {
    const r = n.languages;
    r && t.push(r.split(","))
  }
  return t
}

function Fr() {
  if (navigator.mimeTypes === void 0) throw new P(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: n
  } = navigator;
  let t = Object.getPrototypeOf(n) === MimeTypeArray.prototype;
  for (let e = 0; e < n.length; e++) t && (t = Object.getPrototypeOf(n[e]) === MimeType.prototype);
  return t
}
async function Ur() {
  if (window.Notification === void 0) throw new P(-1, "window.Notification is undefined");
  if (navigator.permissions === void 0) throw new P(-1, "navigator.permissions is undefined");
  const {
    permissions: n
  } = navigator;
  if (typeof n.query != "function") throw new P(-2, "navigator.permissions.query is not a function");
  try {
    const t = await n.query({
      name: "notifications"
    });
    return window.Notification.permission === "denied" && t.state === "prompt"
  } catch {
    throw new P(-3, "notificationPermissions signal unexpected behaviour")
  }
}

function Gr() {
  if (navigator.plugins === void 0) throw new P(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new P(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function qr() {
  if (navigator.plugins === void 0) throw new P(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new P(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function Vr() {
  const {
    process: n
  } = window, t = "window.process is";
  if (n === void 0) throw new P(-1, `${t} undefined`);
  if (n && typeof n != "object") throw new P(-3, `${t} not an object`);
  return n
}

function Wr() {
  const {
    productSub: n
  } = navigator;
  if (n === void 0) throw new P(-1, "navigator.productSub is undefined");
  return n
}

function Hr() {
  if (navigator.connection === void 0) throw new P(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new P(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function Kr() {
  return navigator.userAgent
}

function $r() {
  if (navigator.webdriver == null) throw new P(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function Xr() {
  const n = document.createElement("canvas");
  if (typeof n.getContext != "function") throw new P(-2, "HTMLCanvasElement.getContext is not a function");
  const t = n.getContext("webgl");
  if (t === null) throw new P(-4, "WebGLRenderingContext is null");
  if (typeof t.getParameter != "function") throw new P(-2, "WebGLRenderingContext.getParameter is not a function");
  const e = t.getParameter(t.VENDOR),
    r = t.getParameter(t.RENDERER);
  return {
    vendor: e,
    renderer: r
  }
}

function Yr() {
  if (window.external === void 0) throw new P(-1, "window.external is undefined");
  const {
    external: n
  } = window;
  if (typeof n.toString != "function") throw new P(-2, "window.external.toString is not a function");
  return n.toString()
}

function Jr() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function Zr() {
  const n = {
    [S.Awesomium]: {
      window: ["awesomium"]
    },
    [S.Cef]: {
      window: ["RunPerfTest"]
    },
    [S.CefSharp]: {
      window: ["CefSharp"]
    },
    [S.CoachJS]: {
      window: ["emit"]
    },
    [S.FMiner]: {
      window: ["fmget_targets"]
    },
    [S.Geb]: {
      window: ["geb"]
    },
    [S.NightmareJS]: {
      window: ["__nightmare", "nightmare"]
    },
    [S.Phantomas]: {
      window: ["__phantomas"]
    },
    [S.PhantomJS]: {
      window: ["callPhantom", "_phantom"]
    },
    [S.Rhino]: {
      window: ["spawn"]
    },
    [S.Selenium]: {
      window: ["_Selenium_IDE_Recorder", "_selenium", "calledSelenium", /^([a-z]){3}_.*_(Array|Promise|Symbol)$/],
      document: ["__selenium_evaluate", "selenium-evaluate", "__selenium_unwrapped"]
    },
    [S.WebDriverIO]: {
      window: ["wdioElectron"]
    },
    [S.WebDriver]: {
      window: ["webdriver", "__webdriverFunc", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "_WEBDRIVER_ELEM_CACHE", "ChromeDriverw"],
      document: ["__webdriver_script_fn", "__driver_evaluate", "__webdriver_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__fxdriver_unwrapped", "__webdriver_script_fn", "__webdriver_script_func", "__webdriver_script_function", "$cdc_asdjflasutopfhvcZLmcf", "$cdc_asdjflasutopfhvcZLmcfl_", "$chrome_asyncScriptInfo", "__$webdriverAsyncExecutor"]
    },
    [S.HeadlessChrome]: {
      window: ["domAutomation", "domAutomationController"]
    }
  };
  let t;
  const e = {},
    r = qt(window);
  let o = [];
  window.document !== void 0 && (o = qt(window.document));
  for (t in n) {
    const i = n[t];
    if (i !== void 0) {
      const a = i.window === void 0 ? !1 : It(r, ...i.window),
        c = i.document === void 0 || !o.length ? !1 : It(o, ...i.document);
      e[t] = a || c
    }
  }
  return e
}
const Qr = {
  android: Mr,
  browserKind: zr,
  browserEngineKind: jt,
  documentFocus: Cr,
  userAgent: Kr,
  appVersion: Nr,
  rtt: Hr,
  windowSize: Jr,
  pluginsLength: qr,
  pluginsArray: Gr,
  errorTrace: Lr,
  productSub: Wr,
  windowExternal: Yr,
  mimeTypesConsistent: Fr,
  evalLength: Pr,
  webGL: Xr,
  webDriver: $r,
  languages: Br,
  notificationPermissions: Ur,
  documentElementKeys: Dr,
  functionBind: xr,
  process: Vr,
  distinctiveProps: Zr
};
class eo {
  constructor() {
    this.components = void 0, this.detections = void 0
  }
  getComponents() {
    return this.components
  }
  getDetections() {
    return this.detections
  }
  detect() {
    if (this.components === void 0) throw new Error("BotDetector.detect can't be called before BotDetector.collect");
    const [t, e] = cr(this.components, Ir);
    return this.detections = t, e
  }
  async collect() {
    return this.components = await ur(Qr), this.components
  }
}

function to() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const n = new XMLHttpRequest;
    n.open("get", `https://m1.openfpcdn.io/botd/v${sr}/npm-monitoring`, !0), n.send()
  } catch (n) {
    console.error(n)
  }
}
async function no({
  monitoring: n = !0
} = {}) {
  n && to();
  const t = new eo;
  return await t.collect(), t
}
let vt = null;
async function ro() {
  return await oo() ? {
    bot: !1
  } : (await io()).detect()
}
async function oo() {
  var e;
  const n = navigator;
  if (!((e = n.brave) != null && e.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(n.userAgent)) return !1;
  try {
    return await n.brave.isBrave()
  } catch {
    return !1
  }
}

function io() {
  return vt || (vt = no({
    monitoring: !1
  })), vt
}
const ao = /; wv\)|FBAN|FBAV|Instagram|BytedanceWebview|musical_ly|Line\/|Snapchat|Twitter|MicroMessenger/i;

function lA() {
  return so() ? !1 : ao.test(navigator.userAgent)
}

function so() {
  return !!(window != null && window.ReactNativeWebView)
}

function co(n = void 0) {
  const t = (n == null ? void 0 : n.userAgent) ?? navigator.userAgent,
    e = (n == null ? void 0 : n.vendor) ?? navigator.vendor;
  return "brave" in navigator ? "Brave" : /\bEdg(?:e|A|iOS)?\//.test(t) ? "Edge" : /\bOPR\/|\bOpera\//.test(t) ? "Opera" : /\bVivaldi\//.test(t) ? "Vivaldi" : /\bYaBrowser\//.test(t) ? "Yandex" : /\bSamsungBrowser\//.test(t) ? "Samsung Internet" : /\bUCBrowser\/|\bUCWEB\//.test(t) ? "UC Browser" : /\bDuckDuckGo\/|\bDdg\//.test(t) ? "DuckDuckGo" : getComputedStyle(document.documentElement).getPropertyValue("--arc-palette-title") ? "Arc" : /Firefox\/|FxiOS\//.test(t) ? "Firefox" : /Chrome\/|CriOS\//.test(t) && /google/i.test(e) ? "Chrome" : /Safari\//.test(t) && /apple/i.test(e) ? "Safari" : "Unknown"
}
let Et;

function uo() {
  return Et || (Et = lo()), Et
}

function lo() {
  let n = 0;
  const t = [].constructor;
  try {
    (-1).toFixed(-1)
  } catch (e) {
    n = (e instanceof Error ? e.message : String(e)).length + (t + "").split(t.name).join("").length
  }
  switch (n) {
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
async function Vt() {
  let n;
  try {
    n = document.createElement("canvas");
    const t = n.getContext("2d", {
      willReadFrequently: !1
    });
    if (!t) throw new Error("canvas context blocked");
    const e = fo.replace(/!important/gm, ""),
      r = 75;
    po({
      canvas: n,
      context: t,
      area: {
        width: r,
        height: r
      }
    });
    const o = n.toDataURL();
    n.width = 50, n.height = 50, t.font = `50px ${e}`, t.fillText("A", 7, 37);
    const i = n.toDataURL();
    n.width = 50, n.height = 50, t.font = `35px ${e}`, t.fillText("👾", 0, 37);
    const a = n.toDataURL();
    return {
      paintURI: o,
      textURI: i,
      emojiURI: a
    }
  } catch (t) {
    console.error(t);
    return
  } finally {
    _o(n)
  }
}

function _o(n) {
  n && (n.width = 0, n.height = 0, n.remove())
}
const fo = `
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
  po = ({
    canvas: n,
    context: t,
    strokeText: e = !1,
    cssFontFamily: r = "",
    area: o = {
      width: 50,
      height: 50
    },
    rounds: i = 10,
    maxShadowBlur: a = 50,
    seed: c = 500,
    offset: u = 2001000001,
    multiplier: _ = 15e3
  }) => {
    if (!t) return;
    t.clearRect(0, 0, n.width, n.height), n.width = o.width, n.height = o.height, n.style && (n.style.display = "none");
    const l = (({
        seed: v,
        offset: g,
        multiplier: U
      }) => {
        let T = Number(v) % Number(g);
        return {
          getNextSeed: () => (T = Number(U) * T % Number(g), T)
        }
      })({
        seed: c,
        offset: u,
        multiplier: _
      }),
      {
        getNextSeed: b
      } = l,
      m = (v, g, U, T) => {
        const N = (v - 1) / g * (U || 1) || 0;
        return T ? N : Math.floor(N)
      },
      y = (v, g, U, T, N) => {
        const {
          width: G,
          height: it
        } = U, bt = v.createRadialGradient(m(N(), g, G), m(N(), g, it), m(N(), g, G), m(N(), g, G), m(N(), g, it), m(N(), g, G));
        bt.addColorStop(0, T[m(N(), g, T.length)]), bt.addColorStop(1, T[m(N(), g, T.length)]), v.fillStyle = bt
      },
      O = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"],
      x = (v, g, U, T) => {
        const {
          width: N,
          height: G
        } = U, it = 2.99;
        v.font = `${G/it}px ${r.replace(/!important/gm,"")}`, v.strokeText("👾A", m(T(), g, N), m(T(), g, G), m(T(), g, N))
      },
      re = (v, g, U, T) => {
        const {
          width: N,
          height: G
        } = U;
        v.beginPath(), v.arc(m(T(), g, N), m(T(), g, G), m(T(), g, Math.min(N, G)), m(T(), g, 2 * Math.PI, !0), m(T(), g, 2 * Math.PI, !0)), v.stroke()
      },
      E = (v, g, U, T) => {
        const {
          width: N,
          height: G
        } = U;
        v.beginPath(), v.moveTo(m(T(), g, N), m(T(), g, G)), v.bezierCurveTo(m(T(), g, N), m(T(), g, G), m(T(), g, N), m(T(), g, G), m(T(), g, N), m(T(), g, G)), v.stroke()
      },
      k = (v, g, U, T) => {
        const {
          width: N,
          height: G
        } = U;
        v.beginPath(), v.moveTo(m(T(), g, N), m(T(), g, G)), v.quadraticCurveTo(m(T(), g, N), m(T(), g, G), m(T(), g, N), m(T(), g, G)), v.stroke()
      },
      j = (v, g, U, T) => {
        if (!("ellipse" in v)) return;
        const {
          width: N,
          height: G
        } = U;
        v.beginPath(), v.ellipse(m(T(), g, N), m(T(), g, G), m(T(), g, Math.floor(N / 2)), m(T(), g, Math.floor(G / 2)), m(T(), g, 2 * Math.PI, !0), m(T(), g, 2 * Math.PI, !0), m(T(), g, 2 * Math.PI, !0)), v.stroke()
      },
      F = [re, E, k];
    uo() !== "WebKit" && F.push(j), e && F.push(x), [...Array(i)].forEach(v => {
      y(t, u, o, O, b), t.shadowBlur = m(b(), u, a, !0), t.shadowColor = O[m(b(), u, O.length)];
      const g = F[m(b(), u, F.length)];
      g(t, u, o, b), t.fill()
    })
  },
  Wt = {
    7: ["Cambria Math", "Lucida Console"],
    8: ["Aldhabi", "Gadugi", "Myanmar Text", "Nirmala UI"],
    "8.1": ["Leelawadee UI", "Javanese Text", "Segoe UI Emoji"],
    10: ["HoloLens MDL2 Assets", "Segoe MDL2 Assets", "Bahnschrift", "Ink Free"],
    11: ["Segoe Fluent Icons"]
  },
  Ht = {
    "10.9": ["Helvetica Neue", "Geneva"],
    "10.10": ["Kohinoor Devanagari Medium", "Luminari"],
    "10.11": ["PingFang HK Light"],
    "10.12": ["American Typewriter Semibold", "Futura Bold", "SignPainter-HouseScript Semibold"],
    "10.13-10.14": ["InaiMathi Bold"],
    "10.15-11": ["Galvji", "MuktaMahee Regular"],
    12: ["Noto Sans Gunjala Gondi Regular", "Noto Sans Masaram Gondi Regular", "Noto Serif Yezidi Regular"],
    13: ["Apple SD Gothic Neo ExtraBold", "STIX Two Math Regular", "STIX Two Text Regular", "Noto Sans Canadian Aboriginal Regular"]
  },
  Kt = {
    "Microsoft Outlook": ["MS Outlook"],
    "Adobe Acrobat": ["ZWAdobeF"],
    LibreOffice: ["Amiri", "KACSTOffice", "Liberation Mono", "Source Code Pro"],
    OpenOffice: ["DejaVu Sans", "Gentium Book Basic", "OpenSymbol"]
  },
  mo = Object.keys(Ht).map(n => Ht[n]).flat(),
  ho = Object.keys(Wt).map(n => Wt[n]).flat(),
  go = Object.keys(Kt).map(n => Kt[n]).flat(),
  wo = ["Arimo", "Chilanka", "Cousine", "Jomolhari", "MONO", "Noto Color Emoji", "Ubuntu"],
  yo = ["Dancing Script", "Droid Sans Mono", "Roboto"],
  bo = [...mo, ...ho, ...wo, ...yo, ...go].sort();
async function vo() {
  return await (async r => {
    try {
      let o = [];
      document.fonts.check(`0px "${Eo()}"`) || (o = r.reduce((u, _) => (document.fonts.check(`0px "${_}"`) && u.push(_), u), []));
      const i = r.map(u => new FontFace(u, `local("${u}")`)),
        c = (await Promise.allSettled(i.map(u => u.load()))).reduce((u, _) => (_.status == "fulfilled" && u.push(_.value.family), u), []);
      return [...new Set([...o, ...c])].sort()
    } catch {
      return []
    }
  })(bo)
}

function Eo() {
  return String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7)
}
const To = ["ALIASED_POINT_SIZE_RANGE", "ALIASED_LINE_WIDTH_RANGE", "STENCIL_VALUE_MASK", "STENCIL_WRITEMASK", "STENCIL_BACK_VALUE_MASK", "STENCIL_BACK_WRITEMASK", "MAX_TEXTURE_SIZE", "MAX_VIEWPORT_DIMS", "SUBPIXEL_BITS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VARYING_VECTORS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_IMAGE_UNITS", "MAX_FRAGMENT_UNIFORM_VECTORS", "SHADING_LANGUAGE_VERSION", "VENDOR", "RENDERER", "VERSION", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_RENDERBUFFER_SIZE", "MAX_3D_TEXTURE_SIZE", "MAX_ELEMENTS_VERTICES", "MAX_ELEMENTS_INDICES", "MAX_TEXTURE_LOD_BIAS", "MAX_DRAW_BUFFERS", "MAX_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_UNIFORM_COMPONENTS", "MAX_ARRAY_TEXTURE_LAYERS", "MAX_PROGRAM_TEXEL_OFFSET", "MAX_VARYING_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", "MAX_COLOR_ATTACHMENTS", "MAX_SAMPLES", "MAX_VERTEX_UNIFORM_BLOCKS", "MAX_FRAGMENT_UNIFORM_BLOCKS", "MAX_COMBINED_UNIFORM_BLOCKS", "MAX_UNIFORM_BUFFER_BINDINGS", "MAX_UNIFORM_BLOCK_SIZE", "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_OUTPUT_COMPONENTS", "MAX_FRAGMENT_INPUT_COMPONENTS", "MAX_SERVER_WAIT_TIMEOUT", "MAX_ELEMENT_INDEX", "MAX_CLIENT_WAIT_TIMEOUT_WEBGL"].sort(),
  Oo = {
    EXT_clip_control: ["CLIP_DEPTH_MODE_EXT", "CLIP_ORIGIN_EXT", "LOWER_LEFT_EXT", "UPPER_LEFT_EXT", "NEGATIVE_ONE_TO_ONE_EXT", "ZERO_TO_ONE_EXT"],
    EXT_color_buffer_half_float: ["RGB16F_EXT", "RGBA16F_EXT", "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT", "UNSIGNED_NORMALIZED_EXT"],
    EXT_depth_clamp: ["DEPTH_CLAMP_EXT"],
    EXT_disjoint_timer_query: ["CURRENT_QUERY_EXT", "GPU_DISJOINT_EXT", "QUERY_COUNTER_BITS_EXT", "QUERY_RESULT_AVAILABLE_EXT", "QUERY_RESULT_EXT", "TIMESTAMP_EXT", "TIME_ELAPSED_EXT"],
    EXT_polygon_offset_clamp: ["POLYGON_OFFSET_CLAMP_EXT"],
    EXT_sRGB: ["SRGB8_ALPHA8_EXT", "SRGB_ALPHA_EXT", "SRGB_EXT", "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT"],
    EXT_texture_compression_bptc: ["COMPRESSED_RGBA_BPTC_UNORM_EXT", "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT", "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT", "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT"],
    EXT_texture_compression_rgtc: ["COMPRESSED_RED_GREEN_RGTC2_EXT", "COMPRESSED_RED_RGTC1_EXT", "COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT", "COMPRESSED_SIGNED_RED_RGTC1_EXT"],
    EXT_texture_filter_anisotropic: ["MAX_TEXTURE_MAX_ANISOTROPY_EXT", "TEXTURE_MAX_ANISOTROPY_EXT"],
    EXT_texture_mirror_clamp_to_edge: ["MIRROR_CLAMP_TO_EDGE_EXT"],
    KHR_parallel_shader_compile: ["COMPLETION_STATUS_KHR"],
    OES_standard_derivatives: ["FRAGMENT_SHADER_DERIVATIVE_HINT_OES"],
    OES_texture_half_float: ["HALF_FLOAT_OES"],
    OES_vertex_array_object: ["VERTEX_ARRAY_BINDING_OES"],
    WEBGL_blend_func_extended: ["ONE_MINUS_SRC1_ALPHA_WEBGL", "ONE_MINUS_SRC1_COLOR_WEBGL", "SRC1_ALPHA_WEBGL", "SRC1_COLOR_WEBGL", "MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL"],
    WEBGL_color_buffer_float: ["RGBA32F_EXT"],
    WEBGL_compressed_texture_s3tc: ["COMPRESSED_RGBA_S3TC_DXT1_EXT", "COMPRESSED_RGBA_S3TC_DXT3_EXT", "COMPRESSED_RGBA_S3TC_DXT5_EXT", "COMPRESSED_RGB_S3TC_DXT1_EXT"],
    WEBGL_compressed_texture_s3tc_srgb: ["COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", "COMPRESSED_SRGB_S3TC_DXT1_EXT"],
    WEBGL_debug_renderer_info: ["UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL"],
    WEBGL_depth_texture: ["UNSIGNED_INT_24_8_WEBGL"],
    WEBGL_draw_buffers: ["COLOR_ATTACHMENT0_WEBGL", "COLOR_ATTACHMENT1_WEBGL", "COLOR_ATTACHMENT2_WEBGL", "COLOR_ATTACHMENT3_WEBGL", "COLOR_ATTACHMENT4_WEBGL", "COLOR_ATTACHMENT5_WEBGL", "COLOR_ATTACHMENT6_WEBGL", "COLOR_ATTACHMENT7_WEBGL", "COLOR_ATTACHMENT8_WEBGL", "COLOR_ATTACHMENT9_WEBGL", "COLOR_ATTACHMENT10_WEBGL", "COLOR_ATTACHMENT11_WEBGL", "COLOR_ATTACHMENT12_WEBGL", "COLOR_ATTACHMENT13_WEBGL", "COLOR_ATTACHMENT14_WEBGL", "COLOR_ATTACHMENT15_WEBGL", "DRAW_BUFFER0_WEBGL", "DRAW_BUFFER1_WEBGL", "DRAW_BUFFER2_WEBGL", "DRAW_BUFFER3_WEBGL", "DRAW_BUFFER4_WEBGL", "DRAW_BUFFER5_WEBGL", "DRAW_BUFFER6_WEBGL", "DRAW_BUFFER7_WEBGL", "DRAW_BUFFER8_WEBGL", "DRAW_BUFFER9_WEBGL", "DRAW_BUFFER10_WEBGL", "DRAW_BUFFER11_WEBGL", "DRAW_BUFFER12_WEBGL", "DRAW_BUFFER13_WEBGL", "DRAW_BUFFER14_WEBGL", "DRAW_BUFFER15_WEBGL", "MAX_COLOR_ATTACHMENTS_WEBGL", "MAX_DRAW_BUFFERS_WEBGL"],
    ANGLE_instanced_arrays: ["VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE"],
    EXT_blend_minmax: ["MIN_EXT", "MAX_EXT"]
  },
  ko = new Set(["CLIP_DEPTH_MODE_EXT", "CLIP_ORIGIN_EXT", "DEPTH_CLAMP_EXT", "GPU_DISJOINT_EXT", "POLYGON_OFFSET_CLAMP_EXT", "MAX_TEXTURE_MAX_ANISOTROPY_EXT", "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", "VERTEX_ARRAY_BINDING_OES", "MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL", "UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL", "MAX_COLOR_ATTACHMENTS_WEBGL", "MAX_DRAW_BUFFERS_WEBGL"]);
async function So() {
  let n, t, e, r;
  try {
    let o = window;
    const i = o.document;
    "OffscreenCanvas" in window ? (n = new o.OffscreenCanvas(256, 256), t = new o.OffscreenCanvas(256, 256)) : (n = i.createElement("canvas"), t = i.createElement("canvas"));
    const a = Xt(n, "webgl"),
      c = Xt(t, "webgl2");
    if (e = a, r = c, !a) return;
    const u = (E, k) => {
        if (!E) return;
        const j = J(() => E.getShaderPrecisionFormat(E[k], E.LOW_FLOAT)),
          F = J(() => E.getShaderPrecisionFormat(E[k], E.MEDIUM_FLOAT)),
          q = J(() => E.getShaderPrecisionFormat(E[k], E.HIGH_FLOAT)),
          v = J(() => E.getShaderPrecisionFormat(E[k], E.HIGH_INT));
        return {
          LOW_FLOAT: j,
          MEDIUM_FLOAT: F,
          HIGH_FLOAT: q,
          HIGH_INT: v
        }
      },
      _ = (E, k) => {
        const j = {};
        if (!k) return j;
        for (const F in k) {
          const q = k[F];
          j[E + "." + F + ".precision"] = q ? J(() => q.precision) : void 0, j[E + "." + F + ".rangeMax"] = q ? J(() => q.rangeMax) : void 0, j[E + "." + F + ".rangeMin"] = q ? J(() => q.rangeMin) : void 0
        }
        return j
      },
      f = E => {
        const k = {};
        if (!E) return k;
        const j = E;
        for (const F of To) {
          const q = j[F];
          if (q === void 0) continue;
          const v = E.getParameter(q);
          v && ArrayBuffer.isView(v) ? k[F] = Array.from(v) : k[F] = v
        }
        return k
      },
      l = E => {
        if (!E) return [];
        const k = J(() => E.getContextAttributes());
        return k ? Object.keys(k).sort().map(j => `${j}=${k[j]}`) : []
      },
      b = E => {
        if (!E) return [];
        const k = [];
        for (const [j, F] of Object.entries(Oo)) {
          const q = J(() => E.getExtension(j));
          if (q)
            for (const v of F) {
              const g = q[v];
              if (typeof g != "number") continue;
              if (!ko.has(v)) {
                k.push(`${v}=${g}`);
                continue
              }
              const U = J(() => E.getParameter(g));
              U == null ? k.push(`${v}=${g}`) : typeof U == "object" && "length" in U ? k.push(`${v}=${g}=${Array.from(U).join(",")}`) : k.push(`${v}=${g}=${U}`)
            }
        }
        return k.sort()
      },
      m = E => {
        const k = E ? E.getExtension("WEBGL_debug_renderer_info") : null;
        return !k || !E ? {} : {
          UNMASKED_VENDOR_WEBGL: E.getParameter(k.UNMASKED_VENDOR_WEBGL),
          UNMASKED_RENDERER_WEBGL: E.getParameter(k.UNMASKED_RENDERER_WEBGL)
        }
      },
      y = E => {
        if (!E) return [];
        const k = J(() => E.getSupportedExtensions());
        return k || []
      },
      O = {
        ...f(a),
        ...m(a)
      },
      x = {
        ...f(c),
        ...m(c)
      };
    return {
      extensions: [...y(a), ...y(c)],
      contextAttributes: l(a),
      contextAttributes2: l(c),
      extensionParameters: b(a),
      extensionParameters2: b(c),
      parameters: {
        ...O,
        ...x,
        ..._("VERTEX_SHADER", u(a, "VERTEX_SHADER")),
        ..._("FRAGMENT_SHADER", u(a, "FRAGMENT_SHADER"))
      }
    }
  } catch (o) {
    console.log(o);
    return
  } finally {
    $t(n, e), $t(t, r)
  }
}

function J(n) {
  try {
    return n()
  } catch {
    return
  }
}

function $t(n, t) {
  var e;
  if (n) {
    try {
      (e = t == null ? void 0 : t.getExtension("WEBGL_lose_context")) == null || e.loseContext()
    } catch {}
    n.width = 0, n.height = 0, n instanceof HTMLCanvasElement && n.remove()
  }
}

function Xt(n, t) {
  try {
    if (t == "webgl2") {
      const r = n.getContext("webgl2");
      return r || !(n instanceof HTMLCanvasElement) ? r : n.getContext("experimental-webgl2")
    }
    const e = n.getContext("webgl");
    return e || !(n instanceof HTMLCanvasElement) ? e : n.getContext("experimental-webgl") ?? n.getContext("moz-webgl") ?? n.getContext("webkit-3d")
  } catch (e) {
    console.error("Error while getting canvas context:", e);
    return
  }
}
var In = "5.2.0";

function pt(n, t) {
  return new Promise(e => setTimeout(e, n, t))
}

function Ao() {
  return new Promise(n => {
    const t = new MessageChannel;
    t.port1.onmessage = () => n(), t.port2.postMessage(null)
  })
}

function Ro(n, t = 1 / 0) {
  const {
    requestIdleCallback: e
  } = window;
  return e ? new Promise(r => e.call(window, () => r(), {
    timeout: t
  })) : pt(Math.min(n, t))
}

function Nn(n) {
  return !!n && typeof n.then == "function"
}

function Yt(n, t) {
  try {
    const e = n();
    Nn(e) ? e.then(r => t(!0, r), r => t(!1, r)) : t(!0, e)
  } catch (e) {
    t(!1, e)
  }
}
async function Jt(n, t, e = 16) {
  const r = Array(n.length);
  let o = Date.now();
  for (let i = 0; i < n.length; ++i) {
    r[i] = t(n[i], i);
    const a = Date.now();
    a >= o + e && (o = a, await Ao())
  }
  return r
}

function Re(n) {
  return n.then(void 0, () => {}), n
}

function Io(n, t) {
  for (let e = 0, r = n.length; e < r; ++e)
    if (n[e] === t) return !0;
  return !1
}

function No(n, t) {
  return !Io(n, t)
}

function Bt(n) {
  return parseInt(n)
}

function Z(n) {
  return parseFloat(n)
}

function te(n, t) {
  return typeof n == "number" && isNaN(n) ? t : n
}

function W(n) {
  return n.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function Dn(n, t = 1) {
  if (Math.abs(t) >= 1) return Math.round(n / t) * t;
  {
    const e = 1 / t;
    return Math.round(n * e) / e
  }
}

function Do(n) {
  var t, e;
  const r = `Unexpected syntax '${n}'`,
    o = /^\s*([a-z-]*)(.*)$/i.exec(n),
    i = o[1] || void 0,
    a = {},
    c = /([.:#][\w-]+|\[.+?\])/gi,
    u = (_, f) => {
      a[_] = a[_] || [], a[_].push(f)
    };
  for (;;) {
    const _ = c.exec(o[2]);
    if (!_) break;
    const f = _[0];
    switch (f[0]) {
      case ".":
        u("class", f.slice(1));
        break;
      case "#":
        u("id", f.slice(1));
        break;
      case "[": {
        const l = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(f);
        if (l) u(l[1], (e = (t = l[4]) !== null && t !== void 0 ? t : l[5]) !== null && e !== void 0 ? e : "");
        else throw new Error(r);
        break
      }
      default:
        throw new Error(r)
    }
  }
  return [i, a]
}

function Lo(n) {
  const t = new Uint8Array(n.length);
  for (let e = 0; e < n.length; e++) {
    const r = n.charCodeAt(e);
    if (r > 127) return new TextEncoder().encode(n);
    t[e] = r
  }
  return t
}

function oe(n, t) {
  const e = n[0] >>> 16,
    r = n[0] & 65535,
    o = n[1] >>> 16,
    i = n[1] & 65535,
    a = t[0] >>> 16,
    c = t[0] & 65535,
    u = t[1] >>> 16,
    _ = t[1] & 65535;
  let f = 0,
    l = 0,
    b = 0,
    m = 0;
  m += i + _, b += m >>> 16, m &= 65535, b += o + u, l += b >>> 16, b &= 65535, l += r + c, f += l >>> 16, l &= 65535, f += e + a, f &= 65535, n[0] = f << 16 | l, n[1] = b << 16 | m
}

function X(n, t) {
  const e = n[0] >>> 16,
    r = n[0] & 65535,
    o = n[1] >>> 16,
    i = n[1] & 65535,
    a = t[0] >>> 16,
    c = t[0] & 65535,
    u = t[1] >>> 16,
    _ = t[1] & 65535;
  let f = 0,
    l = 0,
    b = 0,
    m = 0;
  m += i * _, b += m >>> 16, m &= 65535, b += o * _, l += b >>> 16, b &= 65535, b += i * u, l += b >>> 16, b &= 65535, l += r * _, f += l >>> 16, l &= 65535, l += o * u, f += l >>> 16, l &= 65535, l += i * c, f += l >>> 16, l &= 65535, f += e * _ + r * u + o * c + i * a, f &= 65535, n[0] = f << 16 | l, n[1] = b << 16 | m
}

function we(n, t) {
  const e = n[0];
  t %= 64, t === 32 ? (n[0] = n[1], n[1] = e) : t < 32 ? (n[0] = e << t | n[1] >>> 32 - t, n[1] = n[1] << t | e >>> 32 - t) : (t -= 32, n[0] = n[1] << t | e >>> 32 - t, n[1] = e << t | n[1] >>> 32 - t)
}

function $(n, t) {
  t %= 64, t !== 0 && (t < 32 ? (n[0] = n[1] >>> 32 - t, n[1] = n[1] << t) : (n[0] = n[1] << t - 32, n[1] = 0))
}

function B(n, t) {
  n[0] ^= t[0], n[1] ^= t[1]
}
const Po = [4283543511, 3981806797],
  xo = [3301882366, 444984403];

function Zt(n) {
  const t = [0, n[0] >>> 1];
  B(n, t), X(n, Po), t[1] = n[0] >>> 1, B(n, t), X(n, xo), t[1] = n[0] >>> 1, B(n, t)
}
const at = [2277735313, 289559509],
  st = [1291169091, 658871167],
  Qt = [0, 5],
  zo = [0, 1390208809],
  Mo = [0, 944331445];

function Co(n, t) {
  const e = Lo(n);
  t = t || 0;
  const r = [0, e.length],
    o = r[1] % 16,
    i = r[1] - o,
    a = [0, t],
    c = [0, t],
    u = [0, 0],
    _ = [0, 0];
  let f;
  for (f = 0; f < i; f = f + 16) u[0] = e[f + 4] | e[f + 5] << 8 | e[f + 6] << 16 | e[f + 7] << 24, u[1] = e[f] | e[f + 1] << 8 | e[f + 2] << 16 | e[f + 3] << 24, _[0] = e[f + 12] | e[f + 13] << 8 | e[f + 14] << 16 | e[f + 15] << 24, _[1] = e[f + 8] | e[f + 9] << 8 | e[f + 10] << 16 | e[f + 11] << 24, X(u, at), we(u, 31), X(u, st), B(a, u), we(a, 27), oe(a, c), X(a, Qt), oe(a, zo), X(_, st), we(_, 33), X(_, at), B(c, _), we(c, 31), oe(c, a), X(c, Qt), oe(c, Mo);
  u[0] = 0, u[1] = 0, _[0] = 0, _[1] = 0;
  const l = [0, 0];
  switch (o) {
    case 15:
      l[1] = e[f + 14], $(l, 48), B(_, l);
    case 14:
      l[1] = e[f + 13], $(l, 40), B(_, l);
    case 13:
      l[1] = e[f + 12], $(l, 32), B(_, l);
    case 12:
      l[1] = e[f + 11], $(l, 24), B(_, l);
    case 11:
      l[1] = e[f + 10], $(l, 16), B(_, l);
    case 10:
      l[1] = e[f + 9], $(l, 8), B(_, l);
    case 9:
      l[1] = e[f + 8], B(_, l), X(_, st), we(_, 33), X(_, at), B(c, _);
    case 8:
      l[1] = e[f + 7], $(l, 56), B(u, l);
    case 7:
      l[1] = e[f + 6], $(l, 48), B(u, l);
    case 6:
      l[1] = e[f + 5], $(l, 40), B(u, l);
    case 5:
      l[1] = e[f + 4], $(l, 32), B(u, l);
    case 4:
      l[1] = e[f + 3], $(l, 24), B(u, l);
    case 3:
      l[1] = e[f + 2], $(l, 16), B(u, l);
    case 2:
      l[1] = e[f + 1], $(l, 8), B(u, l);
    case 1:
      l[1] = e[f], B(u, l), X(u, at), we(u, 31), X(u, st), B(a, u)
  }
  return B(a, r), B(c, r), oe(a, c), oe(c, a), Zt(a), Zt(c), oe(a, c), oe(c, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8)
}

function jo(n) {
  var t;
  return {
    name: n.name,
    message: n.message,
    stack: (t = n.stack) === null || t === void 0 ? void 0 : t.split(`
`),
    ...n
  }
}

function Bo(n) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(n))
}

function Fo(n) {
  return typeof n != "function"
}

function Uo(n, t) {
  const e = Re(new Promise(r => {
    const o = Date.now();
    Yt(n.bind(null, t), (...i) => {
      const a = Date.now() - o;
      if (!i[0]) return r(() => ({
        error: i[1],
        duration: a
      }));
      const c = i[1];
      if (Fo(c)) return r(() => ({
        value: c,
        duration: a
      }));
      r(() => new Promise(u => {
        const _ = Date.now();
        Yt(c, (...f) => {
          const l = a + Date.now() - _;
          if (!f[0]) return u({
            error: f[1],
            duration: l
          });
          u({
            value: f[1],
            duration: l
          })
        })
      }))
    })
  }));
  return function() {
    return e.then(o => o())
  }
}

function Go(n, t, e, r) {
  const o = Object.keys(n).filter(a => No(e, a)),
    i = Re(Jt(o, a => Uo(n[a], t), r));
  return async function() {
    const c = await i,
      u = await Jt(c, l => Re(l()), r),
      _ = await Promise.all(u),
      f = {};
    for (let l = 0; l < o.length; ++l) f[o[l]] = _[l];
    return f
  }
}

function Ln() {
  const n = window,
    t = navigator;
  return W(["MSCSSMatrix" in n, "msSetImmediate" in n, "msIndexedDB" in n, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
}

function qo() {
  const n = window,
    t = navigator;
  return W(["msWriteProfilerMark" in n, "MSStream" in n, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !Ln()
}

function Te() {
  const n = window,
    t = navigator;
  return W(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, (t.vendor || "").indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in n, "BatteryManager" in n, "webkitMediaStream" in n, "webkitSpeechGrammar" in n]) >= 5
}

function Q() {
  const n = window,
    t = navigator;
  return W(["ApplePayError" in n, "CSSPrimitiveValue" in n, "Counter" in n, t.vendor.indexOf("Apple") === 0, "RGBColor" in n, "WebKitMediaKeys" in n]) >= 4
}

function Ft() {
  const n = window,
    {
      HTMLElement: t,
      Document: e
    } = n;
  return W(["safari" in n, !("ongestureend" in n), !("TouchEvent" in n), !("orientation" in n), t && !("autocapitalize" in t.prototype), e && "pointerLockElement" in e.prototype]) >= 4
}

function tt() {
  const n = window;
  return Bo(n.print) && String(n.browser) === "[object WebPageNamespace]"
}

function nt() {
  var n, t;
  const e = window;
  return W(["buildID" in navigator, "MozAppearance" in ((t = (n = document.documentElement) === null || n === void 0 ? void 0 : n.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4
}

function Vo() {
  const n = window,
    t = navigator,
    {
      CSS: e
    } = n;
  return W(["userActivation" in t, e.supports("color", "light-dark(#000, #fff)"), e.supports("height", "1lh"), "globalPrivacyControl" in t]) >= 3
}

function Pn() {
  const {
    CSS: n
  } = window;
  return W([n.supports("selector(::details-content)"), n.supports("selector(::before::marker)"), n.supports("selector(::after::marker)"), !("locale" in CompositionEvent.prototype)]) >= 3
}

function Wo() {
  const n = window;
  return W([!("MediaSettingsRange" in n), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3
}

function Ho() {
  const n = window,
    {
      URLPattern: t
    } = n;
  return W(["union" in Set.prototype, "Iterator" in n, t && "hasRegExpGroups" in t.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3
}

function Ko() {
  const n = window,
    t = document,
    {
      CSS: e,
      Promise: r,
      AudioContext: o
    } = n;
  return W([r && "try" in r, "caretPositionFromPoint" in t, o && "onerror" in o.prototype, e.supports("ruby-align", "space-around")]) >= 3
}

function $o() {
  const n = window;
  return W(["DOMRectList" in n, "RTCPeerConnectionIceEvent" in n, "SVGGeometryElement" in n, "ontransitioncancel" in n]) >= 3
}

function rt() {
  const n = window,
    t = navigator,
    {
      CSS: e,
      HTMLButtonElement: r
    } = n;
  return W([!("getStorageUpdates" in t), r && "popover" in r.prototype, "CSSCounterStyleRule" in n, e.supports("font-size-adjust: ex-height 0.5"), e.supports("text-transform: full-width")]) >= 4
}

function Xo() {
  if (navigator.platform === "iPad") return !0;
  const n = screen,
    t = n.width / n.height;
  return W(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
}

function Yo() {
  const n = document;
  return n.fullscreenElement || n.msFullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement || null
}

function Jo() {
  const n = document;
  return (n.exitFullscreen || n.msExitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen).call(n)
}

function yt() {
  const n = Te(),
    t = nt(),
    e = window,
    r = navigator,
    o = "connection";
  return n ? W([!("SharedWorker" in e), r[o] && "ontypechange" in r[o], !("sinkId" in new Audio)]) >= 2 : t ? W(["onorientationchange" in e, "orientation" in e, /android/i.test(r.appVersion)]) >= 2 : !1
}

function Zo() {
  const n = navigator,
    t = window,
    e = Audio.prototype,
    {
      visualViewport: r
    } = t;
  return W(["srLatency" in e, "srChannelCount" in e, "devicePosture" in n, r && "segments" in r, "getTextInformation" in Image.prototype]) >= 3
}

function Qo() {
  return ni() ? -4 : ei()
}

function ei() {
  const n = window,
    t = n.OfflineAudioContext || n.webkitOfflineAudioContext;
  if (!t) return -2;
  if (ti()) return -1;
  const e = 4500,
    r = 5e3,
    o = new t(1, r, 44100),
    i = o.createOscillator();
  i.type = "triangle", i.frequency.value = 1e4;
  const a = o.createDynamicsCompressor();
  a.threshold.value = -50, a.knee.value = 40, a.ratio.value = 12, a.attack.value = 0, a.release.value = .25, i.connect(a), a.connect(o.destination), i.start(0);
  const [c, u] = ri(o), _ = Re(c.then(f => oi(f.getChannelData(0).subarray(e)), f => {
    if (f.name === "timeout" || f.name === "suspended") return -3;
    throw f
  }));
  return () => (u(), _)
}

function ti() {
  return Q() && !Ft() && !$o()
}

function ni() {
  return Q() && rt() && tt() || Te() && Zo() && Ho()
}

function ri(n) {
  let i = () => {};
  return [new Promise((c, u) => {
    let _ = !1,
      f = 0,
      l = 0;
    n.oncomplete = y => c(y.renderedBuffer);
    const b = () => {
        setTimeout(() => u(en("timeout")), Math.min(500, l + 5e3 - Date.now()))
      },
      m = () => {
        try {
          const y = n.startRendering();
          switch (Nn(y) && Re(y), n.state) {
            case "running":
              l = Date.now(), _ && b();
              break;
            case "suspended":
              document.hidden || f++, _ && f >= 3 ? u(en("suspended")) : setTimeout(m, 500);
              break
          }
        } catch (y) {
          u(y)
        }
      };
    m(), i = () => {
      _ || (_ = !0, l > 0 && b())
    }
  }), i]
}

function oi(n) {
  let t = 0;
  for (let e = 0; e < n.length; ++e) t += Math.abs(n[e]);
  return t
}

function en(n) {
  const t = new Error(n);
  return t.name = n, t
}
async function xn(n, t, e = 50) {
  var r, o, i;
  const a = document;
  for (; !a.body;) await pt(e);
  const c = a.createElement("iframe");
  try {
    for (await new Promise((u, _) => {
        let f = !1;
        const l = () => {
            f = !0, u()
          },
          b = O => {
            f = !0, _(O)
          };
        c.onload = l, c.onerror = b;
        const {
          style: m
        } = c;
        m.setProperty("display", "block", "important"), m.position = "absolute", m.top = "0", m.left = "0", m.visibility = "hidden", t && "srcdoc" in c ? c.srcdoc = t : c.src = "about:blank", a.body.appendChild(c);
        const y = () => {
          var O, x;
          f || (((x = (O = c.contentWindow) === null || O === void 0 ? void 0 : O.document) === null || x === void 0 ? void 0 : x.readyState) === "complete" ? l() : setTimeout(y, 10))
        };
        y()
      }); !(!((o = (r = c.contentWindow) === null || r === void 0 ? void 0 : r.document) === null || o === void 0) && o.body);) await pt(e);
    return await n(c, c.contentWindow)
  } finally {
    (i = c.parentNode) === null || i === void 0 || i.removeChild(c)
  }
}

function ii(n) {
  const [t, e] = Do(n), r = document.createElement(t ?? "div");
  for (const o of Object.keys(e)) {
    const i = e[o].join(" ");
    o === "style" ? ai(r.style, i) : r.setAttribute(o, i)
  }
  return r
}

function ai(n, t) {
  for (const e of t.split(";")) {
    const r = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(e);
    if (r) {
      const [, o, i, , a] = r;
      n.setProperty(o, i, a || "")
    }
  }
}

function si() {
  let n = window;
  for (;;) {
    const t = n.parent;
    if (!t || t === n) return !1;
    try {
      if (t.location.origin !== n.location.origin) return !0
    } catch (e) {
      if (e instanceof Error && e.name === "SecurityError") return !0;
      throw e
    }
    n = t
  }
}
const ci = "mmMwWLliI0O&1",
  ui = "48px",
  ye = ["monospace", "sans-serif", "serif"],
  tn = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function li() {
  return xn(async (n, {
    document: t
  }) => {
    const e = t.body;
    e.style.fontSize = ui;
    const r = t.createElement("div");
    r.style.setProperty("visibility", "hidden", "important");
    const o = {},
      i = {},
      a = m => {
        const y = t.createElement("span"),
          {
            style: O
          } = y;
        return O.position = "absolute", O.top = "0", O.left = "0", O.fontFamily = m, y.textContent = ci, r.appendChild(y), y
      },
      c = (m, y) => a(`'${m}',${y}`),
      u = () => ye.map(a),
      _ = () => {
        const m = {};
        for (const y of tn) m[y] = ye.map(O => c(y, O));
        return m
      },
      f = m => ye.some((y, O) => m[O].offsetWidth !== o[y] || m[O].offsetHeight !== i[y]),
      l = u(),
      b = _();
    e.appendChild(r);
    for (let m = 0; m < ye.length; m++) o[ye[m]] = l[m].offsetWidth, i[ye[m]] = l[m].offsetHeight;
    return tn.filter(m => f(b[m]))
  })
}

function di() {
  const n = navigator.plugins;
  if (!n) return;
  const t = [];
  for (let e = 0; e < n.length; ++e) {
    const r = n[e];
    if (!r) continue;
    const o = [];
    for (let i = 0; i < r.length; ++i) {
      const a = r[i];
      o.push({
        type: a.type,
        suffixes: a.suffixes
      })
    }
    t.push({
      name: r.name,
      description: r.description,
      mimeTypes: o
    })
  }
  return t
}

function _i() {
  return fi(bi())
}

function fi(n) {
  let t = !1,
    e, r;
  const [o, i] = pi();
  return mi(o, i) ? (t = hi(i), n ? e = r = "skipped" : [e, r] = gi(o, i)) : e = r = "unsupported", {
    winding: t,
    geometry: e,
    text: r
  }
}

function pi() {
  const n = document.createElement("canvas");
  return n.width = 1, n.height = 1, [n, n.getContext("2d")]
}

function mi(n, t) {
  return !!(t && n.toDataURL)
}

function hi(n) {
  return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), !n.isPointInPath(5, 5, "evenodd")
}

function gi(n, t) {
  wi(n, t);
  const e = Tt(n),
    r = Tt(n);
  return e !== r ? ["unstable", "unstable"] : (yi(n, t), [Tt(n), e])
}

function wi(n, t) {
  n.width = 240, n.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
  const e = "Cwm fjordbank gly 😃";
  t.fillText(e, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(e, 4, 45)
}

function yi(n, t) {
  n.width = 122, n.height = 110, t.globalCompositeOperation = "multiply";
  for (const [e, r, o] of [
      ["#f2f", 40, 40],
      ["#2ff", 80, 40],
      ["#ff2", 60, 80]
    ]) t.fillStyle = e, t.beginPath(), t.arc(r, o, 40, 0, Math.PI * 2, !0), t.closePath(), t.fill();
  t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, Math.PI * 2, !0), t.arc(60, 60, 20, 0, Math.PI * 2, !0), t.fill("evenodd")
}

function Tt(n) {
  return n.toDataURL()
}

function bi() {
  const n = Q() && rt() && tt(),
    t = nt() && Vo();
  return n || t
}

function vi() {
  const n = navigator;
  let t = 0,
    e;
  n.maxTouchPoints !== void 0 ? t = Bt(n.maxTouchPoints) : n.msMaxTouchPoints !== void 0 && (t = n.msMaxTouchPoints);
  try {
    document.createEvent("TouchEvent"), e = !0
  } catch {
    e = !1
  }
  const r = "ontouchstart" in window;
  return {
    maxTouchPoints: t,
    touchEvent: e,
    touchStart: r
  }
}

function Ei() {
  return navigator.oscpu
}

function Ti() {
  const n = navigator,
    t = [],
    e = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(n.languages)) Te() && Wo() || t.push(n.languages);
  else if (typeof n.languages == "string") {
    const r = n.languages;
    r && t.push(r.split(","))
  }
  return t
}

function Oi() {
  return window.screen.colorDepth
}

function ki() {
  return te(Z(navigator.deviceMemory), void 0)
}

function Si() {
  if (!(Q() && rt() && tt())) return Ai()
}

function Ai() {
  const n = screen,
    t = r => te(Bt(r), null),
    e = [t(n.width), t(n.height)];
  return e.sort().reverse(), e
}
const Ri = 2500,
  Ii = 10;
let ut, Ot;

function Ni() {
  if (Ot !== void 0) return;
  const n = () => {
    const t = Nt();
    Dt(t) ? Ot = setTimeout(n, Ri) : (ut = t, Ot = void 0)
  };
  n()
}

function Di() {
  return Ni(), async () => {
    let n = Nt();
    if (Dt(n)) {
      if (ut) return [...ut];
      Yo() && (await Jo(), n = Nt())
    }
    return Dt(n) || (ut = n), n
  }
}

function Li() {
  const n = Q() && rt() && tt(),
    t = nt() && Pn();
  if (n || t) return () => Promise.resolve(void 0);
  const e = Di();
  return async () => {
    const r = await e(),
      o = i => i === null ? null : Dn(i, Ii);
    return [o(r[0]), o(r[1]), o(r[2]), o(r[3])]
  }
}

function Nt() {
  const n = screen;
  return [te(Z(n.availTop), null), te(Z(n.width) - Z(n.availWidth) - te(Z(n.availLeft), 0), null), te(Z(n.height) - Z(n.availHeight) - te(Z(n.availTop), 0), null), te(Z(n.availLeft), null)]
}

function Dt(n) {
  for (let t = 0; t < 4; ++t)
    if (n[t]) return !1;
  return !0
}

function Pi() {
  const n = xi();
  return n !== void 0 && nt() && Pn() ? n >= 8 ? 8 : 4 : n
}

function xi() {
  return te(Bt(navigator.hardwareConcurrency), void 0)
}

function zi() {
  var n;
  const t = (n = window.Intl) === null || n === void 0 ? void 0 : n.DateTimeFormat;
  if (t) {
    const r = new t().resolvedOptions().timeZone;
    if (r) return r
  }
  const e = -Mi();
  return `UTC${e>=0?"+":""}${e}`
}

function Mi() {
  const n = new Date().getFullYear();
  return Math.max(Z(new Date(n, 0, 1).getTimezoneOffset()), Z(new Date(n, 6, 1).getTimezoneOffset()))
}

function Ci() {
  try {
    return !!window.sessionStorage
  } catch {
    return !0
  }
}

function ji() {
  try {
    return !!window.localStorage
  } catch {
    return !0
  }
}

function Bi() {
  if (!(Ln() || qo())) try {
    return !!window.indexedDB
  } catch {
    return !0
  }
}

function Fi() {
  return !!window.openDatabase
}

function Ui() {
  return navigator.cpuClass
}

function Gi() {
  const {
    platform: n
  } = navigator;
  return n === "MacIntel" && Q() && !Ft() ? Xo() ? "iPad" : "iPhone" : n
}

function qi() {
  return navigator.vendor || ""
}

function Vi() {
  const n = [];
  for (const t of ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]) {
    const e = window[t];
    e && typeof e == "object" && n.push(t)
  }
  return n.sort()
}

function Wi() {
  const n = document;
  try {
    n.cookie = "cookietest=1; SameSite=Strict;";
    const t = n.cookie.indexOf("cookietest=") !== -1;
    return n.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
  } catch {
    return !1
  }
}

function Hi() {
  const n = atob;
  return {
    abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', n("I0JveC1CYW5uZXItYWRz")],
    abpvn: [".quangcao", "#mobileCatfish", n("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
    adBlockFinland: [".mainostila", n("LnNwb25zb3JpdA=="), ".ylamainos", n("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), n("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
    adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", n("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
    adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", n("LmhlYWRlci1ibG9ja2VkLWFk"), n("I2FkX2Jsb2NrZXI=")],
    adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
    adGuardBase: [".BetterJsPopOverlay", n("I2FkXzMwMFgyNTA="), n("I2Jhbm5lcmZsb2F0MjI="), n("I2NhbXBhaWduLWJhbm5lcg=="), n("I0FkLUNvbnRlbnQ=")],
    adGuardChinese: [n("LlppX2FkX2FfSA=="), n("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", n("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), n("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
    adGuardFrench: ["#pavePub", n("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", n("LmFkc19iYW4=")],
    adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
    adGuardJapanese: ["#kauli_yad_1", n("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), n("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), n("LmFkZ29vZ2xl"), n("Ll9faXNib29zdFJldHVybkFk")],
    adGuardMobile: [n("YW1wLWF1dG8tYWRz"), n("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", n("I2FkX2ludmlld19hcmVh")],
    adGuardRussian: [n("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), n("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', n("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
    adGuardSocial: [n("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), n("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
    adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
    adGuardTrackingProtection: ["#qoo-counter", n("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), n("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), n("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
    adGuardTurkish: ["#backkapat", n("I3Jla2xhbWk="), n("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), n("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), n("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
    bulgarian: [n("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
    easyList: [".yb-floorad", n("LndpZGdldF9wb19hZHNfd2lkZ2V0"), n("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", n("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
    easyListChina: [n("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), n("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
    easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", n("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
    easyListCzechSlovak: ["#onlajny-stickers", n("I3Jla2xhbW5pLWJveA=="), n("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", n("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
    easyListDutch: [n("I2FkdmVydGVudGll"), n("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", n("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
    easyListGermany: ["#SSpotIMPopSlider", n("LnNwb25zb3JsaW5rZ3J1ZW4="), n("I3dlcmJ1bmdza3k="), n("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), n("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
    easyListItaly: [n("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", n("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), n("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), n("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
    easyListLithuania: [n("LnJla2xhbW9zX3RhcnBhcw=="), n("LnJla2xhbW9zX251b3JvZG9z"), n("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), n("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), n("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
    estonian: [n("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
    fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
    fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
    fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
    fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
    frellwitSwedish: [n("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), n("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", n("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
    greekAdBlock: [n("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), n("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), n("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
    hungarian: ["#cemp_doboz", ".optimonk-iframe-container", n("LmFkX19tYWlu"), n("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
    iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
    icelandicAbp: [n("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
    latvian: [n("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), n("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
    listKr: [n("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), n("I2xpdmVyZUFkV3JhcHBlcg=="), n("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), n("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
    listeAr: [n("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", n("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), n("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), n("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
    listeFr: [n("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), n("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), n("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
    officialPolish: ["#ceneo-placeholder-ceneo-12", n("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), n("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), n("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), n("ZGl2I3NrYXBpZWNfYWQ=")],
    ro: [n("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), n("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), n("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), n("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
    ruAd: [n("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), n("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), n("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
    thaiAds: ["a[href*=macau-uta-popup]", n("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), n("LmFkczMwMHM="), ".bumq", ".img-kosana"],
    webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", n("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
  }
}
async function Ki({
  debug: n
} = {}) {
  if (!$i()) return;
  const t = Hi(),
    e = Object.keys(t),
    r = [].concat(...e.map(a => t[a])),
    o = await Xi(r);
  n && Yi(t, o);
  const i = e.filter(a => {
    const c = t[a];
    return W(c.map(_ => o[_])) > c.length * .6
  });
  return i.sort(), i
}

function $i() {
  return Q() || yt()
}
async function Xi(n) {
  var t;
  const e = document,
    r = e.createElement("div"),
    o = new Array(n.length),
    i = {};
  nn(r);
  for (let a = 0; a < n.length; ++a) {
    const c = ii(n[a]);
    c.tagName === "DIALOG" && c.show();
    const u = e.createElement("div");
    nn(u), u.appendChild(c), r.appendChild(u), o[a] = c
  }
  for (; !e.body;) await pt(50);
  e.body.appendChild(r);
  try {
    for (let a = 0; a < n.length; ++a) o[a].offsetParent || (i[n[a]] = !0)
  } finally {
    (t = r.parentNode) === null || t === void 0 || t.removeChild(r)
  }
  return i
}

function nn(n) {
  n.style.setProperty("visibility", "hidden", "important"), n.style.setProperty("display", "block", "important")
}

function Yi(n, t) {
  let e = "DOM blockers debug:\n```";
  for (const r of Object.keys(n)) {
    e += `
${r}:`;
    for (const o of n[r]) e += `
  ${t[o]?"🚫":"➡️"} ${o}`
  }
  console.log(`${e}
\`\`\``)
}

function Ji() {
  for (const n of ["rec2020", "p3", "srgb"])
    if (matchMedia(`(color-gamut: ${n})`).matches) return n
}

function Zi() {
  if (rn("inverted")) return !0;
  if (rn("none")) return !1
}

function rn(n) {
  return matchMedia(`(inverted-colors: ${n})`).matches
}

function Qi() {
  if (on("active")) return !0;
  if (on("none")) return !1
}

function on(n) {
  return matchMedia(`(forced-colors: ${n})`).matches
}
const ea = 100;

function ta() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (let n = 0; n <= ea; ++n)
      if (matchMedia(`(max-monochrome: ${n})`).matches) return n;
    throw new Error("Too high value")
  }
}

function na() {
  if (be("no-preference")) return 0;
  if (be("high") || be("more")) return 1;
  if (be("low") || be("less")) return -1;
  if (be("forced")) return 10
}

function be(n) {
  return matchMedia(`(prefers-contrast: ${n})`).matches
}

function ra() {
  if (an("reduce")) return !0;
  if (an("no-preference")) return !1
}

function an(n) {
  return matchMedia(`(prefers-reduced-motion: ${n})`).matches
}

function oa() {
  if (sn("reduce")) return !0;
  if (sn("no-preference")) return !1
}

function sn(n) {
  return matchMedia(`(prefers-reduced-transparency: ${n})`).matches
}

function ia() {
  if (cn("high")) return !0;
  if (cn("standard")) return !1
}

function cn(n) {
  return matchMedia(`(dynamic-range: ${n})`).matches
}
const D = Math,
  H = () => 0;

function aa() {
  const n = D.acos || H,
    t = D.acosh || H,
    e = D.asin || H,
    r = D.asinh || H,
    o = D.atanh || H,
    i = D.atan || H,
    a = D.sin || H,
    c = D.sinh || H,
    u = D.cos || H,
    _ = D.cosh || H,
    f = D.tan || H,
    l = D.tanh || H,
    b = D.exp || H,
    m = D.expm1 || H,
    y = D.log1p || H,
    O = g => D.pow(D.PI, g),
    x = g => D.log(g + D.sqrt(g * g - 1)),
    re = g => D.log(g + D.sqrt(g * g + 1)),
    E = g => D.log((1 + g) / (1 - g)) / 2,
    k = g => D.exp(g) - 1 / D.exp(g) / 2,
    j = g => (D.exp(g) + 1 / D.exp(g)) / 2,
    F = g => D.exp(g) - 1,
    q = g => (D.exp(2 * g) - 1) / (D.exp(2 * g) + 1),
    v = g => D.log(1 + g);
  return {
    acos: n(.12312423423423424),
    acosh: t(1e308),
    acoshPf: x(1e154),
    asin: e(.12312423423423424),
    asinh: r(1),
    asinhPf: re(1),
    atanh: o(.5),
    atanhPf: E(.5),
    atan: i(.5),
    sin: a(-1e300),
    sinh: c(1),
    sinhPf: k(1),
    cos: u(10.000000000123),
    cosh: _(1),
    coshPf: j(1),
    tan: f(-1e300),
    tanh: l(1),
    tanhPf: q(1),
    exp: b(1),
    expm1: m(1),
    expm1Pf: F(1),
    log1p: y(10),
    log1pPf: v(10),
    powPI: O(-100)
  }
}
const sa = "mmMwWLliI0fiflO&1",
  kt = {
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

function ca() {
  return la((n, t, e) => {
    const r = {},
      o = {};
    for (const a of Object.keys(kt)) {
      const [c = {}, u = sa] = kt[a], _ = n.createElement("span");
      _.textContent = u, _.style.whiteSpace = "nowrap";
      for (const f of Object.keys(c)) {
        const l = c[f];
        l !== void 0 && (_.style[f] = l)
      }
      r[a] = _, t.append(n.createElement("br"), _)
    }
    const i = Te() && Ko();
    for (const a of Object.keys(kt)) {
      const c = r[a].getBoundingClientRect().width;
      o[a] = i ? ua(c * e.devicePixelRatio) : c
    }
    return o
  })
}

function ua(n) {
  const t = yt() ? 0 : 3,
    e = Math.pow(10, t);
  return Math.floor(n * e) / e
}

function la(n, t = 4e3) {
  return xn((e, r) => {
    const o = r.document,
      i = o.body,
      a = i.style;
    a.width = `${t}px`, a.webkitTextSizeAdjust = a.textSizeAdjust = "none", Te() ? i.style.zoom = `${1/r.devicePixelRatio}` : Q() && (i.style.zoom = "reset");
    const c = o.createElement("div");
    return c.textContent = [...Array(t / 20 << 0)].map(() => "word").join(" "), i.appendChild(c), n(o, i, r)
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
}

function da() {
  return navigator.pdfViewerEnabled
}

function _a() {
  const n = new Float32Array(1),
    t = new Uint8Array(n.buffer);
  return n[0] = 1 / 0, n[0] = n[0] - n[0], t[3]
}

function fa() {
  const {
    ApplePaySession: n
  } = window;
  if (typeof(n == null ? void 0 : n.canMakePayments) != "function") return -1;
  if (pa()) return -3;
  try {
    return n.canMakePayments() ? 1 : 0
  } catch (t) {
    return ma(t)
  }
}
const pa = si;

function ma(n) {
  if (n instanceof Error && n.name === "InvalidAccessError" && /\bfrom\b.*\binsecure\b/i.test(n.message)) return -2;
  throw n
}

function ha() {
  var n;
  const t = document.createElement("a"),
    e = (n = t.attributionSourceId) !== null && n !== void 0 ? n : t.attributionsourceid;
  return e === void 0 ? void 0 : String(e)
}
const zn = -1,
  Mn = -2,
  ga = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
  wa = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  ya = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
  ba = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
  Cn = "WEBGL_debug_renderer_info",
  va = "WEBGL_polygon_mode";

function Ea({
  cache: n
}) {
  var t, e, r, o, i, a;
  const c = jn(n);
  if (!c) return zn;
  if (!Fn(c)) return Mn;
  const u = Bn() ? null : c.getExtension(Cn);
  return {
    version: ((t = c.getParameter(c.VERSION)) === null || t === void 0 ? void 0 : t.toString()) || "",
    vendor: ((e = c.getParameter(c.VENDOR)) === null || e === void 0 ? void 0 : e.toString()) || "",
    vendorUnmasked: u ? (r = c.getParameter(u.UNMASKED_VENDOR_WEBGL)) === null || r === void 0 ? void 0 : r.toString() : "",
    renderer: ((o = c.getParameter(c.RENDERER)) === null || o === void 0 ? void 0 : o.toString()) || "",
    rendererUnmasked: u ? (i = c.getParameter(u.UNMASKED_RENDERER_WEBGL)) === null || i === void 0 ? void 0 : i.toString() : "",
    shadingLanguageVersion: ((a = c.getParameter(c.SHADING_LANGUAGE_VERSION)) === null || a === void 0 ? void 0 : a.toString()) || ""
  }
}

function Ta({
  cache: n
}) {
  const t = jn(n);
  if (!t) return zn;
  if (!Fn(t)) return Mn;
  const e = t.getSupportedExtensions(),
    r = t.getContextAttributes(),
    o = [],
    i = [],
    a = [],
    c = [],
    u = [];
  if (r)
    for (const f of Object.keys(r)) i.push(`${f}=${r[f]}`);
  const _ = un(t);
  for (const f of _) {
    const l = t[f];
    a.push(`${f}=${l}${ga.has(l)?`=${t.getParameter(l)}`:""}`)
  }
  if (e)
    for (const f of e) {
      if (f === Cn && Bn() || f === va && Sa()) continue;
      const l = t.getExtension(f);
      if (!l) {
        o.push(f);
        continue
      }
      for (const b of un(l)) {
        const m = l[b];
        c.push(`${b}=${m}${wa.has(m)?`=${t.getParameter(m)}`:""}`)
      }
    }
  for (const f of ya)
    for (const l of ba) {
      const b = Oa(t, f, l);
      u.push(`${f}.${l}=${b.join(",")}`)
    }
  return c.sort(), a.sort(), {
    contextAttributes: i,
    parameters: a,
    shaderPrecisions: u,
    extensions: e,
    extensionParameters: c,
    unsupportedExtensions: o
  }
}

function jn(n) {
  if (n.webgl) return n.webgl.context;
  const t = document.createElement("canvas");
  let e;
  t.addEventListener("webglCreateContextError", () => e = void 0);
  for (const r of ["webgl", "experimental-webgl"]) {
    try {
      e = t.getContext(r)
    } catch {}
    if (e) break
  }
  return n.webgl = {
    context: e
  }, e
}

function Oa(n, t, e) {
  const r = n.getShaderPrecisionFormat(n[t], n[e]);
  return r ? [r.rangeMin, r.rangeMax, r.precision] : []
}

function un(n) {
  return Object.keys(n.__proto__).filter(ka)
}

function ka(n) {
  return typeof n == "string" && !n.match(/[^A-Z0-9_x]/)
}

function Bn() {
  return nt()
}

function Sa() {
  return Te() || Q()
}

function Fn(n) {
  return typeof n.getParameter == "function"
}

function Aa() {
  if (!(yt() || Q())) return -2;
  if (!window.AudioContext) return -1;
  const t = new AudioContext().baseLatency;
  return t == null ? -1 : isFinite(t) ? t : -3
}

function Ra() {
  if (!window.Intl) return -1;
  const n = window.Intl.DateTimeFormat;
  if (!n) return -2;
  const t = n().resolvedOptions().locale;
  return !t && t !== "" ? -3 : t
}

function Ia(n) {
  return /not/i.test(n)
}
async function Na() {
  const n = navigator.userAgentData;
  if (!n) return;
  const t = n.brands.filter(({
      brand: o
    }) => !Ia(o)).map(({
      brand: o
    }) => o),
    r = {
      brands: t.length > 1 ? t.filter(o => o !== "Chromium") : t,
      mobile: n.mobile,
      platform: n.platform
    };
  if (n.getHighEntropyValues) try {
    const o = await n.getHighEntropyValues(["architecture", "bitness", "model", "platformVersion"]);
    r.architecture = o.architecture, r.bitness = o.bitness, r.model = o.model, r.platformVersion = o.platformVersion
  } catch (o) {
    if (o instanceof DOMException && o.name === "NotAllowedError") r.highEntropyStatus = "not_allowed";
    else throw o
  }
  return r
}
const Da = {
  userAgentData: Na,
  fonts: li,
  domBlockers: Ki,
  fontPreferences: ca,
  audio: Qo,
  screenFrame: Li,
  canvas: _i,
  osCpu: Ei,
  languages: Ti,
  colorDepth: Oi,
  deviceMemory: ki,
  screenResolution: Si,
  hardwareConcurrency: Pi,
  timezone: zi,
  sessionStorage: Ci,
  localStorage: ji,
  indexedDB: Bi,
  openDatabase: Fi,
  cpuClass: Ui,
  platform: Gi,
  plugins: di,
  touchSupport: vi,
  vendor: qi,
  vendorFlavors: Vi,
  cookiesEnabled: Wi,
  colorGamut: Ji,
  invertedColors: Zi,
  forcedColors: Qi,
  monochrome: ta,
  contrast: na,
  reducedMotion: ra,
  reducedTransparency: oa,
  hdr: ia,
  math: aa,
  pdfViewerEnabled: da,
  architecture: _a,
  applePay: fa,
  privateClickMeasurement: ha,
  audioBaseLatency: Aa,
  dateTimeLocale: Ra,
  webGlBasics: Ea,
  webGlExtensions: Ta
};

function La(n) {
  return Go(Da, n, [])
}
const Pa = "$ if upgrade to Pro: https://fingerprint.com/github/?utm_source=oss&utm_medium=referral&utm_campaign=confidence_score";

function xa(n) {
  const t = za(n),
    e = Ma(t);
  return {
    score: t,
    comment: Pa.replace(/\$/g, `${e}`)
  }
}

function za(n) {
  if (yt()) return .4;
  if (Q()) return Ft() && !(rt() && tt()) ? .5 : .3;
  const t = "value" in n.platform ? n.platform.value : "";
  return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
}

function Ma(n) {
  return Dn(.99 + .01 * n, 1e-4)
}

function Ca(n) {
  let t = "";
  for (const e of Object.keys(n).sort()) {
    const r = n[e],
      o = "error" in r ? "error" : JSON.stringify(r.value);
    t += `${t?"|":""}${e.replace(/([:|\\])/g,"\\$1")}:${o}`
  }
  return t
}

function Un(n) {
  return JSON.stringify(n, (t, e) => e instanceof Error ? jo(e) : e, 2)
}

function Gn(n) {
  return Co(Ca(n))
}

function ja(n) {
  let t;
  const e = xa(n);
  return {
    get visitorId() {
      return t === void 0 && (t = Gn(this.components)), t
    },
    set visitorId(r) {
      t = r
    },
    confidence: e,
    components: n,
    version: In
  }
}

function Ba(n = 50) {
  return Ro(n, n * 2)
}

function Fa(n, t) {
  const e = Date.now();
  return {
    async get(r) {
      const o = Date.now(),
        i = await n(),
        a = ja(i);
      return (t || r != null && r.debug) && console.log(`Copy the text below to get the debug data:

\`\`\`
version: ${a.version}
userAgent: ${navigator.userAgent}
timeBetweenLoadAndGet: ${o-e}
visitorId: ${a.visitorId}
components: ${Un(i)}
\`\`\``), a
    }
  }
}

function Ua() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const n = new XMLHttpRequest;
    n.open("get", `https://m1.openfpcdn.io/fingerprintjs/v${In}/npm-monitoring`, !0), n.send()
  } catch (n) {
    console.error(n)
  }
}
async function Ga(n = {}) {
  const {
    delayFallback: t,
    debug: e,
    monitoring: r = !0
  } = n;
  r && Ua(), await Ba(t);
  const o = La({
    cache: {},
    debug: e
  });
  return Fa(o, e)
}
var qn = {
  load: Ga,
  hashComponents: Gn,
  componentsToDebugString: Un
};
let St = null;
async function qa() {
  return St || (St = qn.load()), St
}
async function Lt() {
  return Va().then(n => n.visitorId)
}
async function Va() {
  var m;
  const t = await (await qa()).get();
  let e = t.components;
  const r = co(),
    o = navigator.userAgent.toLowerCase(),
    i = o.includes("iphone"),
    a = o.includes("macintosh"),
    c = i || a,
    u = o.includes("android");
  if (c) e = t.components;
  else if (r === "Chrome") {
    const {
      languages: y,
      ...O
    } = t.components;
    e = O
  } else if (r === "Firefox") {
    const {
      languages: y,
      dateTimeLocale: O,
      ...x
    } = t.components;
    e = x
  } else if (r === "Brave") {
    const {
      fonts: y,
      audio: O,
      canvas: x,
      hardwareConcurrency: re,
      plugins: E,
      deviceMemory: k,
      languages: j,
      dateTimeLocale: F,
      ...q
    } = t.components;
    e = q
  } else {
    const {
      languages: y,
      ...O
    } = t.components;
    e = O
  }(r === "Safari" || u) && (e = {
    userAgent: {
      value: navigator.userAgent,
      duration: 0
    },
    ...e
  }), r === "Safari" && (e = {
    canvas2d: {
      value: await Vt(),
      duration: 0
    },
    canvasWebgl: {
      value: await So(),
      duration: 0
    },
    ...e
  }), r === "Firefox" && (e = {
    ...e,
    fonts: {
      value: [(m = e.fonts) == null ? void 0 : m.value, await vo()],
      duration: e.fonts.duration
    }
  }), u && (e = {
    canvas2d: {
      value: await Vt(),
      duration: 0
    },
    ...e
  });
  const _ = qn.hashComponents(e),
    f = _.length,
    l = f >> 2 | 2;
  return {
    visitorId: _.slice(0, l) + (f * 5).toString(16) + _.slice(l + (f >> 4)),
    components: e
  }
}
const ln = "theme";
var Ie, Ne, De, Le, Pe, xe, ze, Me, Ce, je, Be;
class Wa {
  constructor() {
    L(this, Ie, V(!1));
    L(this, Ne, V(!1));
    L(this, De, V(!1));
    L(this, Le, V(0));
    L(this, Pe, V(!1));
    L(this, xe, V(ft(Ha())));
    L(this, ze, V(null));
    L(this, Me, V(!1));
    L(this, Ce, V("custom-winter"));
    L(this, je, V(ft(Date.now())));
    L(this, Be, V(void 0));
    setInterval(() => {
      C(w(this, je), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(ln), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return M(w(this, Ie))
  }
  set dropletsDialogOpen(t) {
    C(w(this, Ie), t, !0)
  }
  get pendingHistoryDialogOpen() {
    return M(w(this, Ne))
  }
  set pendingHistoryDialogOpen(t) {
    C(w(this, Ne), t, !0)
  }
  get storeDialogOpen() {
    return M(w(this, De))
  }
  set storeDialogOpen(t) {
    C(w(this, De), t, !0)
  }
  get storeTabIndex() {
    return M(w(this, Le))
  }
  set storeTabIndex(t) {
    C(w(this, Le), t, !0)
  }
  get muted() {
    return M(w(this, Pe))
  }
  set muted(t) {
    C(w(this, Pe), t, !0)
  }
  get language() {
    return M(w(this, xe))
  }
  set language(t) {
    C(w(this, xe), t, !0)
  }
  get map() {
    return M(w(this, ze))
  }
  set map(t) {
    C(w(this, ze), t)
  }
  get automatedClicks() {
    return M(w(this, Me))
  }
  set automatedClicks(t) {
    C(w(this, Me), t, !0)
  }
  get theme() {
    return M(w(this, Ce))
  }
  set theme(t) {
    C(w(this, Ce), t, !0), localStorage.setItem(ln, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return M(w(this, je))
  }
  get captcha() {
    return Ka ? M(w(this, Be)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    C(w(this, Be), t, !0)
  }
}
Ie = new WeakMap, Ne = new WeakMap, De = new WeakMap, Le = new WeakMap, Pe = new WeakMap, xe = new WeakMap, ze = new WeakMap, Me = new WeakMap, Ce = new WeakMap, je = new WeakMap, Be = new WeakMap;
const Vn = new Wa;

function Ha() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(t => t.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const Ka = ir.toLowerCase() !== "false",
  $a = `
self.onmessage = function(e) {
  const { prefix, difficulty } = e.data;

  // Brute-force: find nonce where SHA256(prefix + nonce) has 'difficulty' leading zero bits
  const targetBytes = Math.floor(difficulty / 8);
  const remainingBits = difficulty % 8;

  async function solve() {
    let nonce = 0;
    while (true) {
      const nonceStr = nonce.toString(16).padStart(8, '0');
      const data = new TextEncoder().encode(prefix + nonceStr);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashBytes = new Uint8Array(hashBuffer);

      let valid = true;
      for (let i = 0; i < targetBytes; i++) {
        if (hashBytes[i] !== 0) { valid = false; break; }
      }
      if (valid && remainingBits > 0) {
        const mask = (0xFF << (8 - remainingBits)) & 0xFF;
        if ((hashBytes[targetBytes] & mask) !== 0) valid = false;
      }

      if (valid) {
        self.postMessage({ nonce: nonceStr });
        return;
      }
      nonce++;

      // Yield every 1000 iterations to allow other work
      if (nonce % 1000 === 0) {
        await new Promise(resolve => setTimeout(resolve, 0));
      }
    }
  }

  solve().catch(err => self.postMessage({ error: err.message }));
};
`;
async function Xa() {
  try {
    const n = await fetch(`${Ct}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!n.ok) return null;
    const t = await n.json(),
      e = await Ya(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function Ya(n, t) {
  return new Promise(e => {
    const r = new Blob([$a], {
        type: "application/javascript"
      }),
      o = URL.createObjectURL(r),
      i = new Worker(o),
      a = setTimeout(() => {
        i.terminate(), URL.revokeObjectURL(o), e(null)
      }, 12e4);
    i.onmessage = c => {
      clearTimeout(a), i.terminate(), URL.revokeObjectURL(o), c.data.error ? e(null) : e(c.data.nonce)
    }, i.onerror = () => {
      clearTimeout(a), i.terminate(), URL.revokeObjectURL(o), e(null)
    }, i.postMessage({
      prefix: n,
      difficulty: t
    })
  })
}
const Wn = 3;
var Fe, Ue;
class Ja {
  constructor() {
    L(this, Fe, V(null));
    L(this, Ue, V(0))
  }
  get current() {
    return M(w(this, Fe))
  }
  set current(t) {
    C(w(this, Fe), t, !0)
  }
  get errorCount() {
    return M(w(this, Ue))
  }
  set errorCount(t) {
    C(w(this, Ue), t, !0)
  }
}
Fe = new WeakMap, Ue = new WeakMap;
const K = new Ja;
async function dn(n) {
  if (n === 1) return Za();
  if (n === 2) {
    const t = await Hn();
    return t ? _n("turnstile", t) : !1
  }
  if (n === 3) {
    const t = await Qa();
    return t ? _n("hcaptcha", t) : !1
  }
  return n === 4 ? es() : !1
}
async function Za() {
  for (let n = 0; n < Wn; n++) try {
    const t = await Xa();
    if (!t) continue;
    return await ue.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}
async function _n(n, t) {
  try {
    const e = await ue.postCaptchaSession({
      provider: n,
      token: t
    });
    return await ue.verifyChallenge({
      type: "captcha",
      sessionId: e.sessionId
    }), !0
  } catch {
    return !1
  }
}
const Ee = {};

function Hn() {
  return Kn(2)
}

function Qa() {
  return Kn(3)
}

function Kn(n) {
  const t = Ee[n];
  if (t) return t;
  const e = new Promise(r => {
    K.errorCount = 0, K.current = {
      tier: n,
      resolve: o => {
        delete Ee[n], r(o)
      }
    }
  });
  return Ee[n] = e, e
}

function es() {
  const n = Ee[4];
  if (n) return n;
  const t = new Promise(e => {
    K.errorCount = 0, K.current = {
      tier: 4,
      resolve: r => {
        delete Ee[4], e(r)
      }
    }
  });
  return Ee[4] = t, t
}

function dA(n) {
  const t = K.current;
  !t || t.tier === 4 || (t.resolve(n), K.current = null)
}

function _A() {
  const n = K.current;
  !n || n.tier === 4 || (K.errorCount += 1, K.errorCount >= Wn && (n.resolve(void 0), K.current = null))
}

function fA() {
  const n = K.current;
  !n || n.tier !== 4 || (n.resolve(!0), K.current = null)
}

function pA() {
  const n = K.current;
  n && (n.tier === 4 ? n.resolve(!1) : n.resolve(void 0), K.current = null)
}
const ts = () => "Your account has been suspended for breaking the rules",
  ns = () => "Sua conta foi suspensa por quebrar as regras",
  rs = () => "您的账号因违反规则已被暂停",
  os = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  is = () => "Tu cuenta ha sido suspendida por infringir las regras",
  as = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  ss = () => "Il tuo account è stato sospeso per aver infranto le regole",
  cs = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  us = () => "Twoje konto zostało zawieszone za łamanie zasad",
  ls = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  ds = () => "Ваш обліковий запис було призупинено за порушення правил",
  _s = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  fn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? ts() : e === "pt" ? ns() : e === "ch" ? rs() : e === "de" ? os() : e === "es" ? is() : e === "fr" ? as() : e === "it" ? ss() : e === "jp" ? cs() : e === "pl" ? us() : e === "ru" ? ls() : e === "uk" ? ds() : _s()
  },
  fs = () => "Alliance name already taken",
  ps = () => "Já possui uma aliança com esse nome",
  ms = () => "该联盟名称已被占用",
  hs = () => "Der Allianzname ist bereits vergeben",
  gs = () => "Ese nombre de alianza ya está en uso",
  ws = () => "Ce nom d’alliance est déjà pris",
  ys = () => "Esiste già un'alleanza con questo nome",
  bs = () => "このアライアンス名は既に使用されています。",
  vs = () => "Nazwa sojuszu jest już zajęta",
  Es = () => "Такое название альянса уже используется",
  Ts = () => "Назва альянсу вже зайнята",
  Os = () => "Tên liên minh đã được sử dụng",
  ks = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? fs() : e === "pt" ? ps() : e === "ch" ? ms() : e === "de" ? hs() : e === "es" ? gs() : e === "fr" ? ws() : e === "it" ? ys() : e === "jp" ? bs() : e === "pl" ? vs() : e === "ru" ? Es() : e === "uk" ? Ts() : Os()
  },
  Ss = () => "Alliance name exceeded the maximum number of characters",
  As = () => "O nome da aliança excedeu o número máximo de caracteres",
  Rs = () => "联盟名称超过最大字符数限制",
  Is = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  Ns = () => "El nombre de la alianza superó el número máximo de caracteres",
  Ds = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  Ls = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  Ps = () => "アライアンス名が最大文字数を超えています。",
  xs = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  zs = () => "Название альянса превышает максимальную длину",
  Ms = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  Cs = () => "Tên liên minh vượt quá số ký tự cho phép",
  js = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Ss() : e === "pt" ? As() : e === "ch" ? Rs() : e === "de" ? Is() : e === "es" ? Ns() : e === "fr" ? Ds() : e === "it" ? Ls() : e === "jp" ? Ps() : e === "pl" ? xs() : e === "ru" ? zs() : e === "uk" ? Ms() : Cs()
  },
  Bs = () => "Alliance with empty name",
  Fs = () => "Aliança com nome vazio",
  Us = () => "名称为空的联盟",
  Gs = () => "Allianz mit leerem Namen",
  qs = () => "Alianza con nombre vacío",
  Vs = () => "Alliance avec nom vide",
  Ws = () => "Alleanza con nome vuoto",
  Hs = () => "名前が空のアライアンスです。",
  Ks = () => "Sojusz z pustą nazwą",
  $s = () => "Альянс с пустым названием",
  Xs = () => "Альянс із порожньою назвою",
  Ys = () => "Liên minh không có tên",
  Js = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Bs() : e === "pt" ? Fs() : e === "ch" ? Us() : e === "de" ? Gs() : e === "es" ? qs() : e === "fr" ? Vs() : e === "it" ? Ws() : e === "jp" ? Hs() : e === "pl" ? Ks() : e === "ru" ? $s() : e === "uk" ? Xs() : Ys()
  },
  Zs = () => "Botting",
  Qs = () => "Uso de bots",
  ec = () => "脚本",
  tc = () => "Bot-Nutzung",
  nc = () => "Botting",
  rc = () => "Bots",
  oc = () => "Uso di bot",
  ic = () => "ボット使用",
  ac = () => "Botting",
  sc = () => "Боттинг",
  cc = () => "Боти",
  uc = () => "Botting",
  lc = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Zs() : e === "pt" ? Qs() : e === "ch" ? ec() : e === "de" ? tc() : e === "es" ? nc() : e === "fr" ? rc() : e === "it" ? oc() : e === "jp" ? ic() : e === "pl" ? ac() : e === "ru" ? sc() : e === "uk" ? cc() : uc()
  },
  dc = () => "Use of software to completely automate painting",
  _c = () => "Uso de software para pintar de forma completamente automatizada ",
  fc = () => "使用软件完全自动化绘制",
  pc = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  mc = () => "Uso de software para automatizar completamente la pintura",
  hc = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  gc = () => "Uso di software per dipingere in modo completamente automatizzato",
  wc = () => "ペイントを完全に自動化するソフトウェアの使用",
  yc = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  bc = () => "Использование программ для полной автоматизации рисования",
  vc = () => "Використання програм, які повністю автоматизують малювання",
  Ec = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  Tc = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? dc() : e === "pt" ? _c() : e === "ch" ? fc() : e === "de" ? pc() : e === "es" ? mc() : e === "fr" ? hc() : e === "it" ? gc() : e === "jp" ? wc() : e === "pl" ? yc() : e === "ru" ? bc() : e === "uk" ? vc() : Ec()
  },
  Oc = () => "Breaking the rules",
  kc = () => "Quebrar as regras",
  Sc = () => "违反规则",
  Ac = () => "Regeln brechen",
  Rc = () => "Romper las reglas",
  Ic = () => "Violation des règles",
  Nc = () => "Violazione delle regole",
  Dc = () => "ルール違反",
  Lc = () => "Łamanie zasad",
  Pc = () => "Нарушение правил",
  xc = () => "Порушення правил",
  zc = () => "Vi phạm luật",
  Mc = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Oc() : e === "pt" ? kc() : e === "ch" ? Sc() : e === "de" ? Ac() : e === "es" ? Rc() : e === "fr" ? Ic() : e === "it" ? Nc() : e === "jp" ? Dc() : e === "pl" ? Lc() : e === "ru" ? Pc() : e === "uk" ? xc() : zc()
  },
  Cc = () => "You have broken one of Wplace's rules",
  jc = () => "Você quebrou uma das regras do Wplace",
  Bc = () => "你违反了 Wplace 的一项规则",
  Fc = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  Uc = () => "Has infringido una de las reglas de Wplace",
  Gc = () => "Vous avez enfreint l’une des règles de Wplace",
  qc = () => "Hai infranto una delle regole di Wplace",
  Vc = () => "Wplaceのルールのいずれかに違反しました。",
  Wc = () => "Złamałeś jedną z zasad Wplace",
  Hc = () => "Вы нарушили одно из правил Wplace",
  Kc = () => "Ви порушили одне з правил Wplace",
  $c = () => "Bạn đã vi phạm một trong các luật của Wplace",
  Xc = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Cc() : e === "pt" ? jc() : e === "ch" ? Bc() : e === "de" ? Fc() : e === "es" ? Uc() : e === "fr" ? Gc() : e === "it" ? qc() : e === "jp" ? Vc() : e === "pl" ? Wc() : e === "ru" ? Hc() : e === "uk" ? Kc() : $c()
  },
  Yc = () => "You cannot paint over event pixels",
  Jc = () => "Você não pode pintar sobre pixels de eventos",
  Zc = () => "你不能覆盖活动像素",
  Qc = () => "Du kannst nicht über Event-Pixel malen",
  eu = () => "No puedes pintar sobre píxeles de evento",
  tu = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  nu = () => "Non puoi dipingere sopra i pixel dell'evento",
  ru = () => "イベント用のピクセルの上には塗れません。",
  ou = () => "Nie możesz malować po pikselach wydarzenia",
  iu = () => "Вы не можете рисовать по пикселям события",
  au = () => "Ви не можете малювати поверх пікселів події",
  su = () => "Bạn không thể tô lên pixel sự kiện",
  pn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Yc() : e === "pt" ? Jc() : e === "ch" ? Zc() : e === "de" ? Qc() : e === "es" ? eu() : e === "fr" ? tu() : e === "it" ? nu() : e === "jp" ? ru() : e === "pl" ? ou() : e === "ru" ? iu() : e === "uk" ? au() : su()
  },
  cu = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  uu = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  lu = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  du = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  _u = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  fu = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  pu = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  mu = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  hu = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  gu = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  wu = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  yu = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  bu = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? cu() : e === "pt" ? uu() : e === "ch" ? lu() : e === "de" ? du() : e === "es" ? _u() : e === "fr" ? fu() : e === "it" ? pu() : e === "jp" ? mu() : e === "pl" ? hu() : e === "ru" ? gu() : e === "uk" ? wu() : yu()
  },
  vu = () => "Challenge verification not completed",
  Eu = () => "Verificação do desafio não concluída",
  Tu = () => "挑战验证未完成",
  Ou = () => "Herausforderungsverifizierung nicht abgeschlossen",
  ku = () => "Verificación del desafío no completada",
  Su = () => "Vérification du défi non terminée",
  Au = () => "Verifica della sfida non completata",
  Ru = () => "チャレンジ検証が完了していません",
  Iu = () => "Weryfikacja wyzwania niezakończona",
  Nu = () => "Верификация вызова не завершена",
  Du = () => "Перевірку виклику не завершено",
  Lu = () => "Xác minh thử thách chưa hoàn thành",
  At = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? vu() : e === "pt" ? Eu() : e === "ch" ? Tu() : e === "de" ? Ou() : e === "es" ? ku() : e === "fr" ? Su() : e === "it" ? Au() : e === "jp" ? Ru() : e === "pl" ? Iu() : e === "ru" ? Nu() : e === "uk" ? Du() : Lu()
  },
  Pu = () => "Couldn't complete the purchase. This item does not exist.",
  xu = () => "Não foi possível concluir a compra. Este item não existe.",
  zu = () => "无法完成购买。该物品不存在。",
  Mu = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  Cu = () => "No se pudo completar la compra. Este ítem no existe.",
  ju = () => "Achat impossible. Cet objet n’existe pas.",
  Bu = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  Fu = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Uu = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Gu = () => "Не удалось завершить покупку. Этот предмет не существует.",
  qu = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  Vu = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  mn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Pu() : e === "pt" ? xu() : e === "ch" ? zu() : e === "de" ? Mu() : e === "es" ? Cu() : e === "fr" ? ju() : e === "it" ? Bu() : e === "jp" ? Fu() : e === "pl" ? Uu() : e === "ru" ? Gu() : e === "uk" ? qu() : Vu()
  },
  Wu = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  Hu = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  Ku = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  $u = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  Xu = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  Yu = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  Ju = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  Zu = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  Qu = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  el = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  tl = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  nl = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  rl = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Wu() : e === "pt" ? Hu() : e === "ch" ? Ku() : e === "de" ? $u() : e === "es" ? Xu() : e === "fr" ? Yu() : e === "it" ? Ju() : e === "jp" ? Zu() : e === "pl" ? Qu() : e === "ru" ? el() : e === "uk" ? tl() : nl()
  },
  ol = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  il = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  al = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  sl = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  cl = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  ul = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  ll = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  dl = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  _l = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  fl = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  pl = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  ml = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  hn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? ol() : e === "pt" ? il() : e === "ch" ? al() : e === "de" ? sl() : e === "es" ? cl() : e === "fr" ? ul() : e === "it" ? ll() : e === "jp" ? dl() : e === "pl" ? _l() : e === "ru" ? fl() : e === "uk" ? pl() : ml()
  },
  hl = () => "Doxxing",
  gl = () => "Doxxing",
  wl = () => "人肉搜索",
  yl = () => "Doxxing",
  bl = () => "Doxxing",
  vl = () => "Doxxing",
  El = () => "Doxxing",
  Tl = () => "ドックス（Doxxing）",
  Ol = () => "Doxxing",
  kl = () => "Докcинг",
  Sl = () => "Докcинг",
  Al = () => "Doxxing",
  Rl = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? hl() : e === "pt" ? gl() : e === "ch" ? wl() : e === "de" ? yl() : e === "es" ? bl() : e === "fr" ? vl() : e === "it" ? El() : e === "jp" ? Tl() : e === "pl" ? Ol() : e === "ru" ? kl() : e === "uk" ? Sl() : Al()
  },
  Il = () => "Released other's personal information without their consent",
  Nl = () => "Vazar informações pessoais de terceiros sem consentimento",
  Dl = () => "在未获同意的情况下公开他人个人信息",
  Ll = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  Pl = () => "Divulgó información personal de otra persona sin su consentimiento",
  xl = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  zl = () => "Diffusione di informazioni personali di terzi senza consenso",
  Ml = () => "他人の個人情報を同意なく公開した。",
  Cl = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  jl = () => "Публикация личной информации других людей без их согласия",
  Bl = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  Fl = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  Ul = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Il() : e === "pt" ? Nl() : e === "ch" ? Dl() : e === "de" ? Ll() : e === "es" ? Pl() : e === "fr" ? xl() : e === "it" ? zl() : e === "jp" ? Ml() : e === "pl" ? Cl() : e === "ru" ? jl() : e === "uk" ? Bl() : Fl()
  },
  Gl = () => "This email is already in use.",
  ql = () => "Este e-mail já está em uso.",
  Vl = () => "This email is already in use.",
  Wl = () => "This email is already in use.",
  Hl = () => "Este correo electrónico ya está en uso.",
  Kl = () => "This email is already in use.",
  $l = () => "Questa email è già in uso.",
  Xl = () => "This email is already in use.",
  Yl = () => "This email is already in use.",
  Jl = () => "This email is already in use.",
  Zl = () => "This email is already in use.",
  Ql = () => "This email is already in use.",
  ed = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Gl() : e === "pt" ? ql() : e === "ch" ? Vl() : e === "de" ? Wl() : e === "es" ? Hl() : e === "fr" ? Kl() : e === "it" ? $l() : e === "jp" ? Xl() : e === "pl" ? Yl() : e === "ru" ? Jl() : e === "uk" ? Zl() : Ql()
  },
  td = n => `This email is already in use by user #${n.userId}.`,
  nd = n => `Este e-mail já está em uso pelo usuário #${n.userId}.`,
  rd = n => `This email is already in use by user #${n.userId}.`,
  od = n => `This email is already in use by user #${n.userId}.`,
  id = n => `Este correo electrónico ya está en uso por el usuario #${n.userId}.`,
  ad = n => `This email is already in use by user #${n.userId}.`,
  sd = n => `Questa email è già in uso dall'utente #${n.userId}.`,
  cd = n => `This email is already in use by user #${n.userId}.`,
  ud = n => `This email is already in use by user #${n.userId}.`,
  ld = n => `This email is already in use by user #${n.userId}.`,
  dd = n => `This email is already in use by user #${n.userId}.`,
  _d = n => `This email is already in use by user #${n.userId}.`,
  fd = (n, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? td(n) : e === "pt" ? nd(n) : e === "ch" ? rd(n) : e === "de" ? od(n) : e === "es" ? id(n) : e === "fr" ? ad(n) : e === "it" ? sd(n) : e === "jp" ? cd(n) : e === "pl" ? ud(n) : e === "ru" ? ld(n) : e === "uk" ? dd(n) : _d(n)
  },
  pd = () => "Enter a valid email address.",
  md = () => "Informe um endereço de e-mail válido.",
  hd = () => "Enter a valid email address.",
  gd = () => "Enter a valid email address.",
  wd = () => "Introduce una dirección de correo electrónico válida.",
  yd = () => "Enter a valid email address.",
  bd = () => "Inserisci un indirizzo email valido.",
  vd = () => "Enter a valid email address.",
  Ed = () => "Enter a valid email address.",
  Td = () => "Enter a valid email address.",
  Od = () => "Enter a valid email address.",
  kd = () => "Enter a valid email address.",
  Sd = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? pd() : e === "pt" ? md() : e === "ch" ? hd() : e === "de" ? gd() : e === "es" ? wd() : e === "fr" ? yd() : e === "it" ? bd() : e === "jp" ? vd() : e === "pl" ? Ed() : e === "ru" ? Td() : e === "uk" ? Od() : kd()
  },
  Ad = n => `Error while painting: ${n.err}`,
  Rd = n => `Erro enquanto pinta: ${n.err}`,
  Id = n => `绘制时出错：${n.err}`,
  Nd = n => `Fehler beim Malen: ${n.err}`,
  Dd = n => `Error al pintar: ${n.err}`,
  Ld = n => `Erreur lors de la peinture : ${n.err}`,
  Pd = n => `Errore durante la pittura: ${n.err}`,
  xd = n => `ペイント中にエラーが発生しました: ${n.err}`,
  zd = n => `Błąd podczas malowania: ${n.err}`,
  Md = n => `Ошибка при рисовании: ${n.err}`,
  Cd = n => `Помилка під час малювання: ${n.err}`,
  jd = n => `Lỗi khi tô: ${n.err}`,
  Bd = (n, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Ad(n) : e === "pt" ? Rd(n) : e === "ch" ? Id(n) : e === "de" ? Nd(n) : e === "es" ? Dd(n) : e === "fr" ? Ld(n) : e === "it" ? Pd(n) : e === "jp" ? xd(n) : e === "pl" ? zd(n) : e === "ru" ? Md(n) : e === "uk" ? Cd(n) : jd(n)
  },
  Fd = () => "Exceeded maximum number of characters",
  Ud = () => "Excedeu o número máximo de caracteres permitidos",
  Gd = () => "超出最大字符数",
  qd = () => "Maximale Zeichenanzahl überschritten",
  Vd = () => "Se excedió el número máximo de caracteres",
  Wd = () => "Nombre maximal de caractères dépassé",
  Hd = () => "Numero massimo di caratteri superato",
  Kd = () => "最大文字数を超過しました",
  $d = () => "Przekroczono maksymalną liczbę znaków",
  Xd = () => "Превышено максимальное количество символов",
  Yd = () => "Перевищено максимальну кількість символів",
  Jd = () => "Đã vượt quá số ký tự tối đa",
  Zd = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Fd() : e === "pt" ? Ud() : e === "ch" ? Gd() : e === "de" ? qd() : e === "es" ? Vd() : e === "fr" ? Wd() : e === "it" ? Hd() : e === "jp" ? Kd() : e === "pl" ? $d() : e === "ru" ? Xd() : e === "uk" ? Yd() : Jd()
  },
  Qd = () => "Verification code expired. Please request a new one.",
  e_ = () => "Código de verificação expirado. Por favor, solicite um novo.",
  t_ = () => "验证码已过期，请重新获取。",
  n_ = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  r_ = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  o_ = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  i_ = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  a_ = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  s_ = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  c_ = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  u_ = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  l_ = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  d_ = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Qd() : e === "pt" ? e_() : e === "ch" ? t_() : e === "de" ? n_() : e === "es" ? r_() : e === "fr" ? o_() : e === "it" ? i_() : e === "jp" ? a_() : e === "pl" ? s_() : e === "ru" ? c_() : e === "uk" ? u_() : l_()
  },
  __ = () => "Griefing",
  f_ = () => "Griefing",
  p_ = () => "破坏行为",
  m_ = () => "Griefing",
  h_ = () => "Griefing",
  g_ = () => "Griefing",
  w_ = () => "Griefing",
  y_ = () => "グリーフィング",
  b_ = () => "Griefing",
  v_ = () => "Гриферство",
  E_ = () => "Гріфінг",
  T_ = () => "Griefing",
  O_ = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? __() : e === "pt" ? f_() : e === "ch" ? p_() : e === "de" ? m_() : e === "es" ? h_() : e === "fr" ? g_() : e === "it" ? w_() : e === "jp" ? y_() : e === "pl" ? b_() : e === "ru" ? v_() : e === "uk" ? E_() : T_()
  },
  k_ = () => "Messed up with other's artworks",
  S_ = () => "Estragou os desenhos dos outros",
  A_ = () => "破坏了他人的作品",
  R_ = () => "Kunstwerke anderer beschädigt",
  I_ = () => "Arruinó las obras de arte de otros",
  N_ = () => "A abîmé les œuvres des autres",
  D_ = () => "Ha rovinato i disegni degli altri",
  L_ = () => "他人の作品を荒らした",
  P_ = () => "Zniszczył prace innych",
  x_ = () => "Испортил чужие рисунки",
  z_ = () => "Зіпсував роботи інших",
  M_ = () => "Phá hỏng tranh của người khác",
  C_ = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? k_() : e === "pt" ? S_() : e === "ch" ? A_() : e === "de" ? R_() : e === "es" ? I_() : e === "fr" ? N_() : e === "it" ? D_() : e === "jp" ? L_() : e === "pl" ? P_() : e === "ru" ? x_() : e === "uk" ? z_() : M_()
  },
  j_ = () => "Hate speech",
  B_ = () => "Discurso de Ódio",
  F_ = () => "仇恨言论",
  U_ = () => "Hassrede",
  G_ = () => "Discurso de odio",
  q_ = () => "Discours haineux",
  V_ = () => "Discorso d'odio",
  W_ = () => "ヘイトスピーチ",
  H_ = () => "Mowa nienawiści",
  K_ = () => "Речь ненависти",
  $_ = () => "Мова ворожнечі",
  X_ = () => "Ngôn từ thù hằn",
  Y_ = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? j_() : e === "pt" ? B_() : e === "ch" ? F_() : e === "de" ? U_() : e === "es" ? G_() : e === "fr" ? q_() : e === "it" ? V_() : e === "jp" ? W_() : e === "pl" ? H_() : e === "ru" ? K_() : e === "uk" ? $_() : X_()
  },
  J_ = () => "Racism, homophobia, hate groups, ...",
  Z_ = () => "Racismo, homofobia, grupos de ódio, ...",
  Q_ = () => "种族主义、恐同、仇恨团体等",
  ef = () => "Rassismus, Homophobie, Hassgruppen, ...",
  tf = () => "Racismo, homofobia, grupos de odio, ...",
  nf = () => "Racisme, homophobie, groupes haineux, ...",
  rf = () => "Razzismo, omofobia, gruppi d'odio, ...",
  of = () => "人種差別、同性愛差別、ヘイト団体など。",
  af = () => "Rasizm, homofobia, grupy nienawiści, ...",
  sf = () => "Расизм, гомофобия, группы ненависти и т.п.",
  cf = () => "Расизм, гомофобія, групи ненависті, ...",
  uf = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  lf = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? J_() : e === "pt" ? Z_() : e === "ch" ? Q_() : e === "de" ? ef() : e === "es" ? tf() : e === "fr" ? nf() : e === "it" ? rf() : e === "jp" ? of() : e === "pl" ? af() : e === "ru" ? sf() : e === "uk" ? cf() : uf()
  },
  df = () => `This case has already been reviewed, resolved, or acted on by the moderation team.

The reported incident may have already resulted in a punishment, warning, previous decision, or internal review. Submitting the same case again without new evidence will not usually change the outcome.

If you have new and relevant evidence that was not included before, please submit a new report and clearly explain what new information is being provided.`,
  _f = () => `Este caso já foi analisado, resolvido ou tratado pela equipe de moderação.

O incidente denunciado pode já ter resultado em uma punição, advertência, decisão anterior ou revisão interna. Enviar o mesmo caso novamente sem novas evidências geralmente não altera o resultado.

Se você tiver evidências novas e relevantes que não foram incluídas antes, envie uma nova denúncia e explique claramente quais novas informações estão sendo fornecidas.`,
  ff = () => `此案件已由审核团队审查、解决或处理。

被举报的事件可能已经导致了处罚、警告、先前的裁决或内部审查。在没有新证据的情况下重复提交相同的案件通常不会改变结果。

如果您有此前未提供的、相关的新证据，请提交一份新的举报，并清楚说明所提供的新信息是什么。`,
  pf = () => `Dieser Fall wurde vom Moderationsteam bereits überprüft, gelöst oder bearbeitet.

Der gemeldete Vorfall hat möglicherweise bereits zu einer Strafe, einer Verwarnung, einer früheren Entscheidung oder einer internen Überprüfung geführt. Denselben Fall ohne neue Beweise erneut einzureichen, ändert das Ergebnis in der Regel nicht.

Wenn du neue und relevante Beweise hast, die zuvor nicht enthalten waren, reiche bitte eine neue Meldung ein und erkläre klar, welche neuen Informationen vorliegen.`,
  mf = () => `Este caso ya ha sido revisado, resuelto o gestionado por el equipo de moderación.

El incidente reportado puede haber dado lugar ya a una sanción, una advertencia, una decisión previa o una revisión interna. Enviar el mismo caso de nuevo sin pruebas nuevas no suele cambiar el resultado.

Si tienes pruebas nuevas y relevantes que no se incluyeron antes, envía un nuevo reporte y explica claramente qué información nueva aportas.`,
  hf = () => `Ce cas a déjà été examiné, résolu ou traité par l'équipe de modération.

L'incident signalé a peut-être déjà donné lieu à une sanction, un avertissement, une décision antérieure ou un examen interne. Soumettre à nouveau le même cas sans nouvelles preuves ne change généralement pas le résultat.

Si vous disposez de nouvelles preuves pertinentes qui n'avaient pas été incluses, veuillez soumettre un nouveau signalement et expliquer clairement quelles nouvelles informations vous apportez.`,
  gf = () => `Questo caso è già stato esaminato, risolto o gestito dal team di moderazione.

L'incidente segnalato potrebbe aver già portato a una punizione, un avviso, una decisione precedente o una revisione interna. Inviare di nuovo lo stesso caso senza nuove prove di solito non cambia l'esito.

Se hai prove nuove e pertinenti non incluse in precedenza, invia una nuova segnalazione e spiega chiaramente quali nuove informazioni stai fornendo.`,
  wf = () => `このケースはすでにモデレーションチームによって確認・解決・対応されています。

報告された事案は、すでに処分、警告、過去の判断、または内部審査につながっている可能性があります。新たな証拠なしに同じケースを再度提出しても、通常は結果は変わりません。

以前に含まれていなかった新しく関連性のある証拠がある場合は、新しい報告を提出し、どのような新しい情報を提供するのかを明確に説明してください。`,
  yf = () => `Ta sprawa została już sprawdzona, rozstrzygnięta lub rozpatrzona przez zespół moderacji.

Zgłoszone zdarzenie mogło już skutkować karą, ostrzeżeniem, wcześniejszą decyzją lub wewnętrzną weryfikacją. Ponowne przesłanie tej samej sprawy bez nowych dowodów zwykle nie zmieni wyniku.

Jeśli masz nowe i istotne dowody, które nie zostały wcześniej dołączone, prześlij nowe zgłoszenie i jasno wyjaśnij, jakie nowe informacje przekazujesz.`,
  bf = () => `Этот случай уже был рассмотрен, решён или обработан командой модерации.

Сообщённый инцидент мог уже привести к наказанию, предупреждению, ранее принятому решению или внутренней проверке. Повторная подача того же случая без новых доказательств обычно не меняет результат.

Если у вас есть новые и значимые доказательства, которые ранее не были предоставлены, отправьте новую жалобу и чётко объясните, какая новая информация предоставляется.`,
  vf = () => `Цю справу вже розглянуто, вирішено або опрацьовано командою модерації.

Повідомлений інцидент, можливо, вже призвів до покарання, попередження, попереднього рішення або внутрішньої перевірки. Повторне надсилання тієї самої справи без нових доказів зазвичай не змінює результату.

Якщо у вас є нові та важливі докази, які не були додані раніше, надішліть нову скаргу та чітко поясніть, яку нову інформацію ви надаєте.`,
  Ef = () => `Trường hợp này đã được đội ngũ kiểm duyệt xem xét, giải quyết hoặc xử lý.

Sự việc bị báo cáo có thể đã dẫn đến một hình phạt, cảnh cáo, quyết định trước đó hoặc một lần xem xét nội bộ. Việc gửi lại cùng một trường hợp mà không có bằng chứng mới thường sẽ không thay đổi kết quả.

Nếu bạn có bằng chứng mới và liên quan mà trước đây chưa được đưa vào, vui lòng gửi một báo cáo mới và giải thích rõ thông tin mới mà bạn cung cấp là gì.`,
  Tf = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? df() : e === "pt" ? _f() : e === "ch" ? ff() : e === "de" ? pf() : e === "es" ? mf() : e === "fr" ? hf() : e === "it" ? gf() : e === "jp" ? wf() : e === "pl" ? yf() : e === "ru" ? bf() : e === "uk" ? vf() : Ef()
  },
  Of = () => "Already Handled",
  kf = () => "Já tratado",
  Sf = () => "已处理",
  Af = () => "Bereits bearbeitet",
  Rf = () => "Ya gestionado",
  If = () => "Déjà traité",
  Nf = () => "Già gestito",
  Df = () => "対応済み",
  Lf = () => "Już rozpatrzone",
  Pf = () => "Уже рассмотрено",
  xf = () => "Вже розглянуто",
  zf = () => "Đã xử lý",
  Mf = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Of() : e === "pt" ? kf() : e === "ch" ? Sf() : e === "de" ? Af() : e === "es" ? Rf() : e === "fr" ? If() : e === "it" ? Nf() : e === "jp" ? Df() : e === "pl" ? Lf() : e === "ru" ? Pf() : e === "uk" ? xf() : zf()
  },
  Cf = () => `The reported action was allowed under the event rules or special conditions active at the time.

Some events, areas, game modes, or temporary rules may allow behavior that would normally be restricted elsewhere. Because the action was permitted in that specific context, no moderation action will be taken.

Please make sure to check the current event rules or special-area rules before submitting reports related to event gameplay.`,
  jf = () => `A ação denunciada era permitida pelas regras do evento ou pelas condições especiais ativas no momento.

Alguns eventos, áreas, modos de jogo ou regras temporárias podem permitir comportamentos que normalmente seriam restritos em outros lugares. Como a ação era permitida nesse contexto específico, nenhuma ação de moderação será tomada.

Verifique as regras atuais do evento ou as regras de áreas especiais antes de enviar denúncias relacionadas à jogabilidade do evento.`,
  Bf = () => `被举报的行为在当时生效的活动规则或特殊条件下是被允许的。

某些活动、区域、游戏模式或临时规则可能允许在其他情况下通常会被限制的行为。由于该行为在特定情境下被允许，因此不会采取任何审核措施。

在提交与活动玩法相关的举报之前，请务必查看当前的活动规则或特殊区域规则。`,
  Ff = () => `Die gemeldete Aktion war nach den Event-Regeln oder den zu diesem Zeitpunkt geltenden Sonderbedingungen erlaubt.

Manche Events, Bereiche, Spielmodi oder temporäre Regeln können Verhalten erlauben, das anderswo normalerweise eingeschränkt wäre. Da die Aktion in diesem speziellen Kontext erlaubt war, wird keine Moderationsmaßnahme ergriffen.

Bitte prüfe die aktuellen Event-Regeln oder die Regeln für Sonderbereiche, bevor du Meldungen zum Event-Gameplay einreichst.`,
  Uf = () => `La acción reportada estaba permitida según las reglas del evento o las condiciones especiales activas en ese momento.

Algunos eventos, áreas, modos de juego o reglas temporales pueden permitir comportamientos que normalmente estarían restringidos en otros lugares. Dado que la acción estaba permitida en ese contexto específico, no se tomará ninguna medida de moderación.

Asegúrate de revisar las reglas actuales del evento o las reglas de áreas especiales antes de enviar reportes relacionados con la jugabilidad del evento.`,
  Gf = () => `L'action signalée était autorisée par les règles de l'événement ou par les conditions spéciales en vigueur à ce moment-là.

Certains événements, zones, modes de jeu ou règles temporaires peuvent autoriser des comportements qui seraient normalement restreints ailleurs. Comme l'action était autorisée dans ce contexte précis, aucune mesure de modération ne sera prise.

Veuillez vérifier les règles actuelles de l'événement ou les règles des zones spéciales avant de soumettre des signalements liés au gameplay d'un événement.`,
  qf = () => `L'azione segnalata era consentita dalle regole dell'evento o dalle condizioni speciali attive in quel momento.

Alcuni eventi, aree, modalità di gioco o regole temporanee possono consentire comportamenti che altrove sarebbero normalmente vietati. Poiché l'azione era consentita in quel contesto specifico, non verrà presa alcuna azione di moderazione.

Assicurati di controllare le regole attuali dell'evento o le regole delle aree speciali prima di inviare segnalazioni relative al gameplay degli eventi.`,
  Vf = () => `報告された行為は、その時点で有効だったイベントのルールや特別な条件のもとで許可されていました。

一部のイベント、エリア、ゲームモード、または一時的なルールでは、通常なら他の場所で制限される行為が許可される場合があります。その特定の状況では行為が許可されていたため、モデレーションの措置は行われません。

イベントのプレイに関する報告を提出する前に、現在のイベントルールや特別エリアのルールを必ず確認してください。`,
  Wf = () => `Zgłoszone działanie było dozwolone zgodnie z zasadami wydarzenia lub specjalnymi warunkami obowiązującymi w tym czasie.

Niektóre wydarzenia, obszary, tryby gry lub zasady tymczasowe mogą zezwalać na zachowania, które gdzie indziej byłyby zwykle ograniczone. Ponieważ działanie było dozwolone w tym konkretnym kontekście, nie zostaną podjęte żadne działania moderacyjne.

Przed wysłaniem zgłoszeń dotyczących rozgrywki podczas wydarzenia sprawdź aktualne zasady wydarzenia lub zasady obszarów specjalnych.`,
  Hf = () => `Сообщённое действие было разрешено правилами события или особыми условиями, действовавшими в тот момент.

Некоторые события, зоны, режимы игры или временные правила могут разрешать поведение, которое обычно ограничено в других местах. Поскольку действие было разрешено в этом конкретном контексте, никаких мер модерации приниматься не будет.

Пожалуйста, проверяйте текущие правила события или правила особых зон, прежде чем отправлять жалобы, связанные с игровым процессом события.`,
  Kf = () => `Повідомлена дія була дозволена правилами події або особливими умовами, що діяли на той момент.

Деякі події, зони, режими гри або тимчасові правила можуть дозволяти поведінку, яка зазвичай обмежена в інших місцях. Оскільки дія була дозволена в цьому конкретному контексті, жодних заходів модерації вжито не буде.

Будь ласка, перевіряйте чинні правила події або правила особливих зон, перш ніж надсилати скарги, пов'язані з ігровим процесом події.`,
  $f = () => `Hành động bị báo cáo được cho phép theo quy tắc sự kiện hoặc các điều kiện đặc biệt đang có hiệu lực vào thời điểm đó.

Một số sự kiện, khu vực, chế độ chơi hoặc quy tắc tạm thời có thể cho phép những hành vi mà ở nơi khác thường bị hạn chế. Vì hành động được cho phép trong bối cảnh cụ thể đó, sẽ không có biện pháp kiểm duyệt nào được áp dụng.

Vui lòng kiểm tra quy tắc sự kiện hiện hành hoặc quy tắc khu vực đặc biệt trước khi gửi báo cáo liên quan đến lối chơi trong sự kiện.`,
  Xf = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Cf() : e === "pt" ? jf() : e === "ch" ? Bf() : e === "de" ? Ff() : e === "es" ? Uf() : e === "fr" ? Gf() : e === "it" ? qf() : e === "jp" ? Vf() : e === "pl" ? Wf() : e === "ru" ? Hf() : e === "uk" ? Kf() : $f()
  },
  Yf = () => "Allowed by Event or Special Rules",
  Jf = () => "Permitido por evento ou regras especiais",
  Zf = () => "活动或特殊规则允许",
  Qf = () => "Durch Event oder Sonderregeln erlaubt",
  ep = () => "Permitido por evento o reglas especiales",
  tp = () => "Autorisé par un événement ou des règles spéciales",
  np = () => "Consentito da evento o regole speciali",
  rp = () => "イベントまたは特別ルールにより許可",
  op = () => "Dozwolone przez wydarzenie lub zasady specjalne",
  ip = () => "Разрешено событием или особыми правилами",
  ap = () => "Дозволено подією або особливими правилами",
  sp = () => "Được phép theo sự kiện hoặc quy tắc đặc biệt",
  cp = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Yf() : e === "pt" ? Jf() : e === "ch" ? Zf() : e === "de" ? Qf() : e === "es" ? ep() : e === "fr" ? tp() : e === "it" ? np() : e === "jp" ? rp() : e === "pl" ? op() : e === "ru" ? ip() : e === "uk" ? ap() : sp()
  },
  up = () => `The reported issue appears to have been caused by a glitch, bug, lag, desync, or another technical problem.

Because the evidence suggests that the situation may not have been intentional player misconduct, we cannot treat it as a punishable rule violation.

If the issue continues, please report it as a bug or provide more evidence showing that a player intentionally abused the glitch.`,
  lp = () => `O problema denunciado parece ter sido causado por uma falha, bug, lag, dessincronização ou outro problema técnico.

Como as evidências sugerem que a situação pode não ter sido má conduta intencional de um jogador, não podemos tratá-la como uma violação de regras passível de punição.

Se o problema persistir, denuncie-o como um bug ou forneça mais evidências mostrando que um jogador abusou intencionalmente da falha.`,
  dp = () => `被举报的问题似乎是由故障、漏洞、延迟、不同步或其他技术问题导致的。

由于证据表明该情况可能并非玩家的故意不当行为，我们无法将其视为可处罚的违规行为。

如果问题持续存在，请将其作为漏洞举报，或提供更多证据，证明有玩家故意利用了该故障。`,
  _p = () => `Das gemeldete Problem scheint durch einen Glitch, Bug, Lag, eine Desynchronisation oder ein anderes technisches Problem verursacht worden zu sein.

Da die Beweise darauf hindeuten, dass es sich möglicherweise nicht um vorsätzliches Fehlverhalten eines Spielers handelte, können wir es nicht als strafbaren Regelverstoß behandeln.

Wenn das Problem weiterhin besteht, melde es bitte als Bug oder liefere weitere Beweise, die zeigen, dass ein Spieler den Glitch absichtlich ausgenutzt hat.`,
  fp = () => `El problema reportado parece haber sido causado por un fallo, un error, lag, desincronización u otro problema técnico.

Dado que las pruebas sugieren que la situación pudo no ser una mala conducta intencional de un jugador, no podemos tratarla como una violación de reglas sancionable.

Si el problema continúa, repórtalo como un error o aporta más pruebas que demuestren que un jugador abusó intencionalmente del fallo.`,
  pp = () => `Le problème signalé semble avoir été causé par un bug, un glitch, du lag, une désynchronisation ou un autre problème technique.

Comme les preuves suggèrent que la situation n'était peut-être pas une faute intentionnelle d'un joueur, nous ne pouvons pas la traiter comme une infraction passible de sanction.

Si le problème persiste, veuillez le signaler en tant que bug ou fournir davantage de preuves montrant qu'un joueur a intentionnellement abusé du bug.`,
  mp = () => `Il problema segnalato sembra essere stato causato da un glitch, un bug, lag, desincronizzazione o un altro problema tecnico.

Poiché le prove suggeriscono che la situazione potrebbe non essere stata una cattiva condotta intenzionale di un giocatore, non possiamo trattarla come una violazione delle regole punibile.

Se il problema persiste, segnalalo come bug o fornisci ulteriori prove che mostrino che un giocatore ha abusato intenzionalmente del glitch.`,
  hp = () => `報告された問題は、不具合、バグ、ラグ、同期ずれ、またはその他の技術的な問題によって引き起こされた可能性があります。

証拠からは、プレイヤーの意図的な不正行為ではなかった可能性が示唆されるため、処罰の対象となるルール違反として扱うことはできません。

問題が続く場合は、バグとして報告するか、プレイヤーが意図的に不具合を悪用したことを示すさらなる証拠を提出してください。`,
  gp = () => `Zgłoszony problem prawdopodobnie został spowodowany usterką, błędem, lagiem, desynchronizacją lub innym problemem technicznym.

Ponieważ dowody sugerują, że sytuacja mogła nie być celowym niewłaściwym zachowaniem gracza, nie możemy potraktować jej jako karalnego naruszenia zasad.

Jeśli problem będzie się powtarzał, zgłoś go jako błąd lub dostarcz więcej dowodów pokazujących, że gracz celowo wykorzystał usterkę.`,
  wp = () => `Сообщённая проблема, по-видимому, была вызвана сбоем, багом, лагом, рассинхронизацией или другой технической неполадкой.

Поскольку доказательства указывают на то, что ситуация могла не быть умышленным нарушением со стороны игрока, мы не можем рассматривать её как наказуемое нарушение правил.

Если проблема сохраняется, сообщите о ней как об ошибке или предоставьте дополнительные доказательства того, что игрок умышленно воспользовался сбоем.`,
  yp = () => `Повідомлена проблема, схоже, була спричинена збоєм, багом, лагом, розсинхронізацією або іншою технічною несправністю.

Оскільки докази свідчать, що ситуація могла не бути навмисною неправомірною поведінкою гравця, ми не можемо розглядати її як порушення правил, що карається.

Якщо проблема повторюється, повідомте про неї як про помилку або надайте додаткові докази того, що гравець навмисно скористався збоєм.`,
  bp = () => `Vấn đề bị báo cáo có vẻ do một lỗi kỹ thuật, bug, lag, mất đồng bộ hoặc một sự cố kỹ thuật khác gây ra.

Vì bằng chứng cho thấy tình huống có thể không phải là hành vi sai phạm cố ý của người chơi, chúng tôi không thể xem đó là vi phạm quy tắc có thể bị xử phạt.

Nếu vấn đề vẫn tiếp diễn, vui lòng báo cáo dưới dạng lỗi hoặc cung cấp thêm bằng chứng cho thấy người chơi đã cố ý lợi dụng lỗi đó.`,
  vp = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? up() : e === "pt" ? lp() : e === "ch" ? dp() : e === "de" ? _p() : e === "es" ? fp() : e === "fr" ? pp() : e === "it" ? mp() : e === "jp" ? hp() : e === "pl" ? gp() : e === "ru" ? wp() : e === "uk" ? yp() : bp()
  },
  Ep = () => "Caused by a Glitch",
  Tp = () => "Causado por uma falha",
  Op = () => "由故障导致",
  kp = () => "Durch einen Glitch verursacht",
  Sp = () => "Causado por un fallo",
  Ap = () => "Causé par un bug",
  Rp = () => "Causato da un glitch",
  Ip = () => "不具合が原因",
  Np = () => "Spowodowane usterką",
  Dp = () => "Вызвано сбоем",
  Lp = () => "Спричинено збоєм",
  Pp = () => "Do lỗi kỹ thuật gây ra",
  xp = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Ep() : e === "pt" ? Tp() : e === "ch" ? Op() : e === "de" ? kp() : e === "es" ? Sp() : e === "fr" ? Ap() : e === "it" ? Rp() : e === "jp" ? Ip() : e === "pl" ? Np() : e === "ru" ? Dp() : e === "uk" ? Lp() : Pp()
  },
  zp = () => `We could not confirm what happened based on the information provided.

The report may show part of the situation, but it does not include enough context for the moderation team to understand the full incident, verify the sequence of events, or determine whether a rule was broken.

When submitting a report, please include clear evidence, relevant timestamps, location or coordinates when applicable, and enough surrounding context to help us understand what happened before and after the reported action.`,
  Mp = () => `Não foi possível confirmar o que aconteceu com base nas informações fornecidas.

A denúncia pode mostrar parte da situação, mas não inclui contexto suficiente para que a equipe de moderação entenda o incidente completo, verifique a sequência dos eventos ou determine se uma regra foi violada.

Ao enviar uma denúncia, inclua evidências claras, registros de horário relevantes, localização ou coordenadas quando aplicável e contexto suficiente para nos ajudar a entender o que aconteceu antes e depois da ação denunciada.`,
  Cp = () => `根据所提供的信息，我们无法确认发生了什么。

该举报可能展示了部分情况，但没有包含足够的背景信息，使审核团队无法了解整个事件、核实事件的先后顺序，或判断是否违反了规则。

提交举报时，请附上清晰的证据、相关的时间戳、适用时的位置或坐标，以及足够的背景信息，帮助我们了解被举报行为前后发生了什么。`,
  jp = () => `Anhand der bereitgestellten Informationen konnten wir nicht bestätigen, was passiert ist.

Die Meldung zeigt möglicherweise einen Teil der Situation, enthält aber nicht genug Kontext, damit das Moderationsteam den gesamten Vorfall verstehen, den Ablauf der Ereignisse überprüfen oder feststellen kann, ob eine Regel verletzt wurde.

Füge beim Einreichen einer Meldung bitte klare Beweise, relevante Zeitstempel, gegebenenfalls Ort oder Koordinaten sowie genügend Kontext hinzu, damit wir verstehen, was vor und nach der gemeldeten Aktion geschah.`,
  Bp = () => `No pudimos confirmar qué ocurrió con la información proporcionada.

El reporte puede mostrar parte de la situación, pero no incluye contexto suficiente para que el equipo de moderación entienda el incidente completo, verifique la secuencia de los hechos o determine si se infringió una regla.

Al enviar un reporte, incluye pruebas claras, marcas de tiempo relevantes, ubicación o coordenadas cuando corresponda y contexto suficiente para ayudarnos a entender qué ocurrió antes y después de la acción reportada.`,
  Fp = () => `Nous n'avons pas pu confirmer ce qui s'est passé sur la base des informations fournies.

Le signalement montre peut-être une partie de la situation, mais il ne fournit pas assez de contexte pour que l'équipe de modération comprenne l'incident dans son ensemble, vérifie le déroulement des événements ou détermine si une règle a été enfreinte.

Lorsque vous soumettez un signalement, veuillez inclure des preuves claires, les horodatages pertinents, l'emplacement ou les coordonnées le cas échéant, et suffisamment de contexte pour nous aider à comprendre ce qui s'est passé avant et après l'action signalée.`,
  Up = () => `Non siamo riusciti a confermare cosa sia successo in base alle informazioni fornite.

La segnalazione può mostrare parte della situazione, ma non include abbastanza contesto per permettere al team di moderazione di comprendere l'intero incidente, verificare la sequenza degli eventi o stabilire se una regola sia stata violata.

Quando invii una segnalazione, includi prove chiare, marche temporali pertinenti, posizione o coordinate quando applicabile e contesto sufficiente per aiutarci a capire cosa è successo prima e dopo l'azione segnalata.`,
  Gp = () => `提供された情報からは、何が起きたのかを確認できませんでした。

この報告は状況の一部を示しているかもしれませんが、モデレーションチームが事案の全体像を把握し、出来事の流れを確認し、ルール違反があったかどうかを判断するのに十分な背景情報が含まれていません。

報告を提出する際は、明確な証拠、関連するタイムスタンプ、該当する場合は場所や座標、そして報告された行為の前後に何が起きたかを理解するのに十分な背景情報を含めてください。`,
  qp = () => `Na podstawie podanych informacji nie mogliśmy potwierdzić, co się wydarzyło.

Zgłoszenie może pokazywać część sytuacji, ale nie zawiera wystarczającego kontekstu, aby zespół moderacji mógł zrozumieć całe zdarzenie, zweryfikować przebieg wydarzeń lub ustalić, czy doszło do naruszenia zasad.

Wysyłając zgłoszenie, dołącz wyraźne dowody, odpowiednie znaczniki czasu, lokalizację lub współrzędne, jeśli dotyczy, oraz wystarczający kontekst, który pomoże nam zrozumieć, co wydarzyło się przed zgłoszonym działaniem i po nim.`,
  Vp = () => `На основании предоставленной информации мы не смогли подтвердить, что произошло.

Жалоба может показывать часть ситуации, но в ней недостаточно контекста, чтобы команда модерации могла понять инцидент целиком, проверить последовательность событий или определить, было ли нарушено правило.

При отправке жалобы прилагайте чёткие доказательства, соответствующие временные метки, местоположение или координаты, если применимо, и достаточный контекст, чтобы помочь нам понять, что происходило до и после указанного действия.`,
  Wp = () => `На основі наданої інформації ми не змогли підтвердити, що сталося.

Скарга може показувати частину ситуації, але в ній недостатньо контексту, щоб команда модерації зрозуміла весь інцидент, перевірила послідовність подій або визначила, чи було порушено правило.

Надсилаючи скаргу, додавайте чіткі докази, відповідні позначки часу, місце або координати, якщо це доречно, і достатньо контексту, щоб допомогти нам зрозуміти, що відбувалося до та після зазначеної дії.`,
  Hp = () => `Chúng tôi không thể xác nhận điều gì đã xảy ra dựa trên thông tin được cung cấp.

Báo cáo có thể cho thấy một phần tình huống, nhưng không bao gồm đủ bối cảnh để đội ngũ kiểm duyệt hiểu toàn bộ sự việc, xác minh trình tự các sự kiện hoặc xác định liệu có vi phạm quy tắc hay không.

Khi gửi báo cáo, vui lòng kèm theo bằng chứng rõ ràng, dấu thời gian liên quan, vị trí hoặc tọa độ khi cần, và đủ bối cảnh xung quanh để giúp chúng tôi hiểu điều gì đã xảy ra trước và sau hành động bị báo cáo.`,
  Kp = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? zp() : e === "pt" ? Mp() : e === "ch" ? Cp() : e === "de" ? jp() : e === "es" ? Bp() : e === "fr" ? Fp() : e === "it" ? Up() : e === "jp" ? Gp() : e === "pl" ? qp() : e === "ru" ? Vp() : e === "uk" ? Wp() : Hp()
  },
  $p = () => "Insufficient Context",
  Xp = () => "Contexto insuficiente",
  Yp = () => "背景信息不足",
  Jp = () => "Unzureichender Kontext",
  Zp = () => "Contexto insuficiente",
  Qp = () => "Contexte insuffisant",
  em = () => "Contesto insufficiente",
  tm = () => "情報が不十分",
  nm = () => "Niewystarczający kontekst",
  rm = () => "Недостаточно контекста",
  om = () => "Недостатньо контексту",
  im = () => "Không đủ bối cảnh",
  am = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? $p() : e === "pt" ? Xp() : e === "ch" ? Yp() : e === "de" ? Jp() : e === "es" ? Zp() : e === "fr" ? Qp() : e === "it" ? em() : e === "jp" ? tm() : e === "pl" ? nm() : e === "ru" ? rm() : e === "uk" ? om() : im()
  },
  sm = () => `The report contains incorrect, incomplete, inaccessible, or unusable information.

This can happen when the evidence does not match the report, the link is broken, or required details are missing.

Please review the information carefully before submitting a report. Make sure to report the correct player, make sure that it is an actual violation, and make sure to submit enough context details to help the moderation team investigate reports properly.`,
  cm = () => `A denúncia contém informações incorretas, incompletas, inacessíveis ou inutilizáveis.

Isso pode acontecer quando as evidências não correspondem à denúncia, o link está quebrado ou detalhes obrigatórios estão faltando.

Revise as informações com atenção antes de enviar uma denúncia. Certifique-se de denunciar o jogador correto, de que se trata de uma violação real e de fornecer detalhes de contexto suficientes para ajudar a equipe de moderação a investigar as denúncias adequadamente.`,
  um = () => `该举报包含不正确、不完整、无法访问或无法使用的信息。

这可能是因为证据与举报内容不符、链接失效，或缺少必要的细节。

提交举报前，请仔细核对信息。请确保举报的是正确的玩家、确实存在违规行为，并提供足够的背景细节，以帮助审核团队妥善调查举报。`,
  lm = () => `Die Meldung enthält falsche, unvollständige, nicht zugängliche oder unbrauchbare Informationen.

Das kann passieren, wenn die Beweise nicht zur Meldung passen, der Link defekt ist oder erforderliche Angaben fehlen.

Bitte überprüfe die Informationen sorgfältig, bevor du eine Meldung einreichst. Stelle sicher, dass du den richtigen Spieler meldest, dass es sich tatsächlich um einen Verstoß handelt und dass du genügend Kontextdetails angibst, damit das Moderationsteam Meldungen ordnungsgemäß untersuchen kann.`,
  dm = () => `El reporte contiene información incorrecta, incompleta, inaccesible o inservible.

Esto puede ocurrir cuando las pruebas no coinciden con el reporte, el enlace está roto o faltan datos necesarios.

Revisa la información con cuidado antes de enviar un reporte. Asegúrate de reportar al jugador correcto, de que se trata de una infracción real y de aportar suficientes detalles de contexto para ayudar al equipo de moderación a investigar los reportes adecuadamente.`,
  _m = () => `Le signalement contient des informations incorrectes, incomplètes, inaccessibles ou inutilisables.

Cela peut arriver lorsque les preuves ne correspondent pas au signalement, que le lien est rompu ou que des détails requis sont manquants.

Veuillez vérifier attentivement les informations avant de soumettre un signalement. Assurez-vous de signaler le bon joueur, qu'il s'agit bien d'une véritable infraction et de fournir suffisamment de détails de contexte pour aider l'équipe de modération à enquêter correctement sur les signalements.`,
  fm = () => `La segnalazione contiene informazioni errate, incomplete, inaccessibili o inutilizzabili.

Ciò può accadere quando le prove non corrispondono alla segnalazione, il link è interrotto o mancano dettagli obbligatori.

Controlla attentamente le informazioni prima di inviare una segnalazione. Assicurati di segnalare il giocatore corretto, che si tratti di una violazione reale e di fornire dettagli di contesto sufficienti per aiutare il team di moderazione a investigare correttamente le segnalazioni.`,
  pm = () => `この報告には、誤った、不完全な、アクセスできない、または使用できない情報が含まれています。

これは、証拠が報告内容と一致しない、リンクが切れている、または必要な詳細が欠けている場合に起こり得ます。

報告を提出する前に、情報を注意深く確認してください。正しいプレイヤーを報告していること、実際に違反であること、そしてモデレーションチームが報告を適切に調査できるよう十分な背景情報を提出していることを確認してください。`,
  mm = () => `Zgłoszenie zawiera nieprawidłowe, niepełne, niedostępne lub nieprzydatne informacje.

Może się to zdarzyć, gdy dowody nie pasują do zgłoszenia, link jest nieaktywny lub brakuje wymaganych szczegółów.

Przed wysłaniem zgłoszenia dokładnie sprawdź informacje. Upewnij się, że zgłaszasz właściwego gracza, że jest to rzeczywiste naruszenie oraz że podajesz wystarczające szczegóły kontekstu, aby pomóc zespołowi moderacji prawidłowo zbadać zgłoszenia.`,
  hm = () => `Жалоба содержит неверную, неполную, недоступную или непригодную информацию.

Это может произойти, когда доказательства не соответствуют жалобе, ссылка не работает или отсутствуют необходимые сведения.

Внимательно проверьте информацию перед отправкой жалобы. Убедитесь, что вы жалуетесь на нужного игрока, что это действительно нарушение, и что вы предоставили достаточно контекстных деталей, чтобы помочь команде модерации правильно расследовать жалобы.`,
  gm = () => `Скарга містить неправильну, неповну, недоступну або непридатну інформацію.

Це може статися, коли докази не відповідають скарзі, посилання не працює або відсутні обов'язкові деталі.

Уважно перевірте інформацію перед надсиланням скарги. Переконайтеся, що ви скаржитеся на правильного гравця, що це справді порушення, і що ви надаєте достатньо контекстних деталей, щоб допомогти команді модерації належно розслідувати скарги.`,
  wm = () => `Báo cáo chứa thông tin không chính xác, không đầy đủ, không truy cập được hoặc không sử dụng được.

Điều này có thể xảy ra khi bằng chứng không khớp với báo cáo, liên kết bị hỏng hoặc thiếu các chi tiết bắt buộc.

Vui lòng xem lại thông tin cẩn thận trước khi gửi báo cáo. Hãy chắc chắn rằng bạn báo cáo đúng người chơi, rằng đó thực sự là một vi phạm, và cung cấp đủ chi tiết bối cảnh để giúp đội ngũ kiểm duyệt điều tra báo cáo một cách hợp lý.`,
  ym = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? sm() : e === "pt" ? cm() : e === "ch" ? um() : e === "de" ? lm() : e === "es" ? dm() : e === "fr" ? _m() : e === "it" ? fm() : e === "jp" ? pm() : e === "pl" ? mm() : e === "ru" ? hm() : e === "uk" ? gm() : wm()
  },
  bm = () => "Invalid Information",
  vm = () => "Informação inválida",
  Em = () => "信息无效",
  Tm = () => "Ungültige Informationen",
  Om = () => "Información no válida",
  km = () => "Informations non valides",
  Sm = () => "Informazioni non valide",
  Am = () => "無効な情報",
  Rm = () => "Nieprawidłowe informacje",
  Im = () => "Недействительная информация",
  Nm = () => "Недійсна інформація",
  Dm = () => "Thông tin không hợp lệ",
  Lm = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? bm() : e === "pt" ? vm() : e === "ch" ? Em() : e === "de" ? Tm() : e === "es" ? Om() : e === "fr" ? km() : e === "it" ? Sm() : e === "jp" ? Am() : e === "pl" ? Rm() : e === "ru" ? Im() : e === "uk" ? Nm() : Dm()
  },
  Pm = () => `The reported behavior does not appear to violate the current rules.

The situation may have been frustrating, unwanted, or disruptive from your perspective, but based on the evidence provided, it does not meet the criteria for a rule violation.

Moderation actions are only taken when a report clearly shows behavior that breaks the rules. If you believe this decision is incorrect, please make sure future reports include enough context explaining why you believe that a rule was violated.`,
  xm = () => `O comportamento denunciado não parece violar as regras atuais.

A situação pode ter sido frustrante, indesejada ou perturbadora do seu ponto de vista, mas, com base nas evidências fornecidas, ela não atende aos critérios de uma violação de regra.

Ações de moderação só são tomadas quando uma denúncia mostra claramente um comportamento que infringe as regras. Se você acredita que esta decisão está incorreta, certifique-se de que futuras denúncias incluam contexto suficiente explicando por que você acredita que uma regra foi violada.`,
  zm = () => `被举报的行为似乎并未违反当前规则。

从您的角度看，这种情况可能令人沮丧、不受欢迎或具有干扰性，但根据所提供的证据，它并不符合违规的标准。

只有当举报清楚地显示出违反规则的行为时，才会采取审核措施。如果您认为此决定有误，请确保今后的举报包含足够的背景信息，说明您为何认为某条规则被违反。`,
  Mm = () => `Das gemeldete Verhalten scheint nicht gegen die aktuellen Regeln zu verstoßen.

Die Situation mag aus deiner Sicht frustrierend, unerwünscht oder störend gewesen sein, aber auf Grundlage der vorgelegten Beweise erfüllt sie nicht die Kriterien für einen Regelverstoß.

Moderationsmaßnahmen werden nur ergriffen, wenn eine Meldung eindeutig ein Verhalten zeigt, das gegen die Regeln verstößt. Wenn du der Meinung bist, dass diese Entscheidung falsch ist, achte bitte darauf, dass künftige Meldungen genügend Kontext enthalten und erklären, warum du glaubst, dass eine Regel verletzt wurde.`,
  Cm = () => `El comportamiento reportado no parece infringir las reglas actuales.

La situación pudo haber sido frustrante, no deseada o molesta desde tu punto de vista, pero, según las pruebas aportadas, no cumple los criterios de una infracción de reglas.

Las acciones de moderación solo se toman cuando un reporte muestra claramente un comportamiento que rompe las reglas. Si crees que esta decisión es incorrecta, asegúrate de que los reportes futuros incluyan suficiente contexto que explique por qué consideras que se infringió una regla.`,
  jm = () => `Le comportement signalé ne semble pas enfreindre les règles actuelles.

La situation a peut-être été frustrante, indésirable ou perturbante de votre point de vue, mais d'après les preuves fournies, elle ne remplit pas les critères d'une infraction aux règles.

Des mesures de modération ne sont prises que lorsqu'un signalement montre clairement un comportement qui enfreint les règles. Si vous pensez que cette décision est incorrecte, veillez à ce que vos futurs signalements incluent suffisamment de contexte expliquant pourquoi vous estimez qu'une règle a été enfreinte.`,
  Bm = () => `Il comportamento segnalato non sembra violare le regole attuali.

La situazione potrebbe essere stata frustrante, indesiderata o fastidiosa dal tuo punto di vista, ma in base alle prove fornite non soddisfa i criteri di una violazione delle regole.

Le azioni di moderazione vengono intraprese solo quando una segnalazione mostra chiaramente un comportamento che infrange le regole. Se ritieni che questa decisione sia errata, assicurati che le segnalazioni future includano contesto sufficiente a spiegare perché ritieni che una regola sia stata violata.`,
  Fm = () => `報告された行為は、現在のルールに違反していないようです。

その状況は、あなたの視点ではいら立たしく、望ましくなく、または迷惑なものだったかもしれませんが、提供された証拠に基づくと、ルール違反の基準を満たしていません。

モデレーションの措置は、報告が明確にルールを破る行為を示している場合にのみ行われます。この判断が誤っていると思われる場合は、今後の報告に、なぜルール違反だと考えるのかを説明する十分な背景情報を含めるようにしてください。`,
  Um = () => `Zgłoszone zachowanie nie wydaje się naruszać obowiązujących zasad.

Sytuacja mogła być z twojej perspektywy frustrująca, niechciana lub uciążliwa, ale na podstawie dostarczonych dowodów nie spełnia kryteriów naruszenia zasad.

Działania moderacyjne są podejmowane tylko wtedy, gdy zgłoszenie wyraźnie pokazuje zachowanie łamiące zasady. Jeśli uważasz, że ta decyzja jest błędna, zadbaj o to, aby przyszłe zgłoszenia zawierały wystarczający kontekst wyjaśniający, dlaczego uważasz, że doszło do naruszenia zasad.`,
  Gm = () => `Указанное поведение, по-видимому, не нарушает действующих правил.

С вашей точки зрения ситуация могла быть неприятной, нежелательной или мешающей, но на основании предоставленных доказательств она не соответствует критериям нарушения правил.

Меры модерации принимаются только тогда, когда жалоба чётко показывает поведение, нарушающее правила. Если вы считаете, что это решение неверно, постарайтесь, чтобы будущие жалобы содержали достаточно контекста, объясняющего, почему вы считаете, что правило было нарушено.`,
  qm = () => `Зазначена поведінка, схоже, не порушує чинних правил.

З вашого погляду ситуація могла бути неприємною, небажаною або такою, що заважає, але на основі наданих доказів вона не відповідає критеріям порушення правил.

Заходи модерації вживаються лише тоді, коли скарга чітко показує поведінку, що порушує правила. Якщо ви вважаєте, що це рішення неправильне, подбайте, щоб майбутні скарги містили достатньо контексту з поясненням, чому ви вважаєте, що правило було порушено.`,
  Vm = () => `Hành vi bị báo cáo dường như không vi phạm các quy tắc hiện hành.

Tình huống có thể gây bực bội, không mong muốn hoặc gây phiền toái từ góc nhìn của bạn, nhưng dựa trên bằng chứng được cung cấp, nó không đáp ứng tiêu chí của một vi phạm quy tắc.

Các biện pháp kiểm duyệt chỉ được áp dụng khi một báo cáo cho thấy rõ hành vi vi phạm quy tắc. Nếu bạn cho rằng quyết định này không đúng, hãy đảm bảo các báo cáo trong tương lai có đủ bối cảnh giải thích vì sao bạn tin rằng một quy tắc đã bị vi phạm.`,
  Wm = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Pm() : e === "pt" ? xm() : e === "ch" ? zm() : e === "de" ? Mm() : e === "es" ? Cm() : e === "fr" ? jm() : e === "it" ? Bm() : e === "jp" ? Fm() : e === "pl" ? Um() : e === "ru" ? Gm() : e === "uk" ? qm() : Vm()
  },
  Hm = () => "No Rule Violation",
  Km = () => "Nenhuma violação de regra",
  $m = () => "未违反规则",
  Xm = () => "Kein Regelverstoß",
  Ym = () => "Sin infracción de reglas",
  Jm = () => "Aucune infraction aux règles",
  Zm = () => "Nessuna violazione delle regole",
  Qm = () => "ルール違反なし",
  eh = () => "Brak naruszenia zasad",
  th = () => "Нарушения правил нет",
  nh = () => "Порушення правил немає",
  rh = () => "Không vi phạm quy tắc",
  oh = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Hm() : e === "pt" ? Km() : e === "ch" ? $m() : e === "de" ? Xm() : e === "es" ? Ym() : e === "fr" ? Jm() : e === "it" ? Zm() : e === "jp" ? Qm() : e === "pl" ? eh() : e === "ru" ? th() : e === "uk" ? nh() : rh()
  },
  ih = () => `The report shows behavior that may be questionable, but it is not severe or clear enough to justify a moderation action.

Some situations may be inappropriate, annoying, or borderline, but still not reach the threshold required for a punishment. In these cases, the moderation team may choose not to take formal action unless the behavior continues or becomes more serious.

If this happens again, please submit a new report with additional evidence showing a repeated pattern or a more serious violation.`,
  ah = () => `A denúncia mostra um comportamento que pode ser questionável, mas não é grave nem claro o suficiente para justificar uma ação de moderação.

Algumas situações podem ser inadequadas, irritantes ou limítrofes, mas ainda assim não atingem o limite necessário para uma punição. Nesses casos, a equipe de moderação pode optar por não tomar uma ação formal, a menos que o comportamento continue ou se torne mais grave.

Se isso acontecer novamente, envie uma nova denúncia com evidências adicionais que mostrem um padrão repetido ou uma violação mais grave.`,
  sh = () => `该举报显示的行为可能存在问题，但还不够严重或明确，不足以采取审核措施。

某些情况可能不恰当、令人厌烦或处于灰色地带，但仍未达到处罚所需的门槛。在这种情况下，除非该行为继续发生或变得更加严重，否则审核团队可能选择不采取正式行动。

如果此情况再次发生，请提交一份新的举报，并附上能显示重复行为模式或更严重违规的额外证据。`,
  ch = () => `Die Meldung zeigt ein Verhalten, das fragwürdig sein mag, aber nicht schwerwiegend oder eindeutig genug ist, um eine Moderationsmaßnahme zu rechtfertigen.

Manche Situationen sind vielleicht unangemessen, störend oder grenzwertig, erreichen aber dennoch nicht die für eine Strafe erforderliche Schwelle. In solchen Fällen kann das Moderationsteam entscheiden, keine formelle Maßnahme zu ergreifen, sofern das Verhalten nicht anhält oder schwerwiegender wird.

Wenn dies erneut geschieht, reiche bitte eine neue Meldung mit zusätzlichen Beweisen ein, die ein wiederholtes Muster oder einen schwerwiegenderen Verstoß zeigen.`,
  uh = () => `El reporte muestra un comportamiento que puede ser cuestionable, pero no es lo bastante grave ni claro como para justificar una acción de moderación.

Algunas situaciones pueden ser inapropiadas, molestas o estar en el límite, pero aun así no alcanzan el umbral necesario para una sanción. En estos casos, el equipo de moderación puede optar por no tomar medidas formales a menos que el comportamiento continúe o se agrave.

Si esto vuelve a ocurrir, envía un nuevo reporte con pruebas adicionales que muestren un patrón repetido o una infracción más grave.`,
  lh = () => `Le signalement montre un comportement qui peut être discutable, mais qui n'est pas assez grave ou clair pour justifier une mesure de modération.

Certaines situations peuvent être inappropriées, agaçantes ou limites, sans pour autant atteindre le seuil requis pour une sanction. Dans ces cas, l'équipe de modération peut choisir de ne pas prendre de mesure formelle, sauf si le comportement persiste ou s'aggrave.

Si cela se reproduit, veuillez soumettre un nouveau signalement avec des preuves supplémentaires montrant un schéma répété ou une infraction plus grave.`,
  dh = () => `La segnalazione mostra un comportamento che può essere discutibile, ma non è abbastanza grave o chiaro da giustificare un'azione di moderazione.

Alcune situazioni possono essere inappropriate, fastidiose o al limite, ma non raggiungono comunque la soglia richiesta per una punizione. In questi casi, il team di moderazione può scegliere di non intervenire formalmente, a meno che il comportamento non continui o diventi più grave.

Se dovesse ripetersi, invia una nuova segnalazione con prove aggiuntive che mostrino uno schema ripetuto o una violazione più grave.`,
  _h = () => `この報告は、問題があるかもしれない行為を示していますが、モデレーションの措置を正当化するほど深刻でも明確でもありません。

一部の状況は不適切だったり、迷惑だったり、際どいものだったりするかもしれませんが、それでも処分に必要な基準には達していません。こうした場合、行為が続いたりより深刻になったりしない限り、モデレーションチームは正式な措置を取らないことを選ぶことがあります。

再び起きた場合は、繰り返しのパターンやより深刻な違反を示す追加の証拠を添えて、新しい報告を提出してください。`,
  fh = () => `Zgłoszenie pokazuje zachowanie, które może budzić wątpliwości, ale nie jest na tyle poważne ani jednoznaczne, aby uzasadniać działanie moderacyjne.

Niektóre sytuacje mogą być nieodpowiednie, irytujące lub graniczne, a mimo to nie osiągają progu wymaganego do nałożenia kary. W takich przypadkach zespół moderacji może nie podjąć formalnych działań, chyba że zachowanie będzie się powtarzać lub stanie się poważniejsze.

Jeśli sytuacja się powtórzy, prześlij nowe zgłoszenie z dodatkowymi dowodami pokazującymi powtarzający się wzorzec lub poważniejsze naruszenie.`,
  ph = () => `Жалоба показывает поведение, которое может вызывать сомнения, но оно недостаточно серьёзное или явное, чтобы оправдать меры модерации.

Некоторые ситуации могут быть неуместными, раздражающими или пограничными, но всё же не достигают порога, необходимого для наказания. В таких случаях команда модерации может решить не предпринимать официальных действий, если поведение не продолжится или не станет более серьёзным.

Если это повторится, отправьте новую жалобу с дополнительными доказательствами, показывающими повторяющийся характер или более серьёзное нарушение.`,
  mh = () => `Скарга показує поведінку, яка може викликати сумніви, але вона недостатньо серйозна чи однозначна, щоб виправдати захід модерації.

Деякі ситуації можуть бути недоречними, дратівливими або межовими, але все ж не досягають порогу, потрібного для покарання. У таких випадках команда модерації може вирішити не вживати офіційних заходів, якщо поведінка не повторюватиметься або не стане серйознішою.

Якщо це повториться, надішліть нову скаргу з додатковими доказами, що показують повторюваний характер або серйозніше порушення.`,
  hh = () => `Báo cáo cho thấy hành vi có thể đáng ngờ, nhưng chưa đủ nghiêm trọng hoặc rõ ràng để biện minh cho một biện pháp kiểm duyệt.

Một số tình huống có thể không phù hợp, gây khó chịu hoặc nằm ở ranh giới, nhưng vẫn chưa đạt đến mức cần thiết để xử phạt. Trong những trường hợp này, đội ngũ kiểm duyệt có thể chọn không hành động chính thức trừ khi hành vi tiếp diễn hoặc trở nên nghiêm trọng hơn.

Nếu điều này lại xảy ra, vui lòng gửi một báo cáo mới kèm bằng chứng bổ sung cho thấy một khuôn mẫu lặp lại hoặc một vi phạm nghiêm trọng hơn.`,
  gh = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? ih() : e === "pt" ? ah() : e === "ch" ? sh() : e === "de" ? ch() : e === "es" ? uh() : e === "fr" ? lh() : e === "it" ? dh() : e === "jp" ? _h() : e === "pl" ? fh() : e === "ru" ? ph() : e === "uk" ? mh() : hh()
  },
  wh = () => "Not Enough for Punishment",
  yh = () => "Insuficiente para punição",
  bh = () => "不足以处罚",
  vh = () => "Nicht ausreichend für eine Strafe",
  Eh = () => "Insuficiente para una sanción",
  Th = () => "Insuffisant pour une sanction",
  Oh = () => "Insufficiente per una punizione",
  kh = () => "処分には不十分",
  Sh = () => "Niewystarczające do nałożenia kary",
  Ah = () => "Недостаточно для наказания",
  Rh = () => "Недостатньо для покарання",
  Ih = () => "Không đủ để xử phạt",
  Nh = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? wh() : e === "pt" ? yh() : e === "ch" ? bh() : e === "de" ? vh() : e === "es" ? Eh() : e === "fr" ? Th() : e === "it" ? Oh() : e === "jp" ? kh() : e === "pl" ? Sh() : e === "ru" ? Ah() : e === "uk" ? Rh() : Ih()
  },
  Dh = () => `This report is outside the scope of what the moderation team can act on through the report system.

This may include issues that happened outside the game, personal disputes, support requests, appeals, bug reports, or situations that are not covered by the current moderation rules.

Please use the correct support channel if your issue is related to technical problems, account issues, appeals, or other non-moderation matters.`,
  Lh = () => `Esta denúncia está fora do escopo daquilo que a equipe de moderação pode tratar pelo sistema de denúncias.

Isso pode incluir problemas que aconteceram fora do jogo, disputas pessoais, pedidos de suporte, apelos, relatos de bugs ou situações que não são abrangidas pelas regras de moderação atuais.

Use o canal de suporte correto se o seu problema estiver relacionado a problemas técnicos, questões de conta, apelos ou outros assuntos que não sejam de moderação.`,
  Ph = () => `此举报超出了审核团队通过举报系统能够处理的范围。

这可能包括发生在游戏之外的问题、个人纠纷、支持请求、申诉、漏洞报告，或当前审核规则未涵盖的情况。

如果您的问题与技术故障、账户问题、申诉或其他非审核事项有关，请使用正确的支持渠道。`,
  xh = () => `Diese Meldung liegt außerhalb dessen, was das Moderationsteam über das Meldesystem bearbeiten kann.

Dazu können Probleme gehören, die außerhalb des Spiels aufgetreten sind, persönliche Streitigkeiten, Support-Anfragen, Einsprüche, Fehlerberichte oder Situationen, die nicht von den aktuellen Moderationsregeln abgedeckt sind.

Bitte nutze den richtigen Support-Kanal, wenn dein Anliegen technische Probleme, Kontoangelegenheiten, Einsprüche oder andere nicht zur Moderation gehörende Themen betrifft.`,
  zh = () => `Este reporte está fuera del alcance de lo que el equipo de moderación puede gestionar a través del sistema de reportes.

Esto puede incluir problemas ocurridos fuera del juego, disputas personales, solicitudes de soporte, apelaciones, reportes de errores o situaciones que no están cubiertas por las reglas de moderación actuales.

Utiliza el canal de soporte correcto si tu problema está relacionado con problemas técnicos, asuntos de cuenta, apelaciones u otros temas ajenos a la moderación.`,
  Mh = () => `Ce signalement dépasse le champ d'action de l'équipe de modération via le système de signalement.

Cela peut inclure des problèmes survenus en dehors du jeu, des différends personnels, des demandes d'assistance, des recours, des rapports de bugs ou des situations qui ne sont pas couvertes par les règles de modération actuelles.

Veuillez utiliser le bon canal d'assistance si votre problème concerne des soucis techniques, des questions de compte, des recours ou d'autres sujets ne relevant pas de la modération.`,
  Ch = () => `Questa segnalazione esula da ciò che il team di moderazione può gestire tramite il sistema di segnalazione.

Può includere problemi avvenuti al di fuori del gioco, dispute personali, richieste di assistenza, ricorsi, segnalazioni di bug o situazioni non coperte dalle attuali regole di moderazione.

Utilizza il canale di assistenza corretto se il tuo problema riguarda questioni tecniche, problemi di account, ricorsi o altre questioni non legate alla moderazione.`,
  jh = () => `この報告は、モデレーションチームが報告システムを通じて対応できる範囲を超えています。

これには、ゲーム外で起きた問題、個人的なトラブル、サポート依頼、異議申し立て、バグ報告、または現在のモデレーションルールでは扱えない状況が含まれる場合があります。

技術的な問題、アカウントの問題、異議申し立て、その他モデレーション以外の事項に関する場合は、適切なサポート窓口をご利用ください。`,
  Bh = () => `To zgłoszenie wykracza poza zakres tego, czym zespół moderacji może się zająć za pośrednictwem systemu zgłoszeń.

Może to obejmować problemy, które miały miejsce poza grą, spory osobiste, prośby o wsparcie, odwołania, zgłoszenia błędów lub sytuacje nieobjęte obecnymi zasadami moderacji.

Skorzystaj z właściwego kanału wsparcia, jeśli twój problem dotyczy kwestii technicznych, spraw związanych z kontem, odwołań lub innych zagadnień niezwiązanych z moderacją.`,
  Fh = () => `Эта жалоба выходит за рамки того, что команда модерации может рассматривать через систему жалоб.

Сюда могут относиться проблемы, возникшие вне игры, личные споры, обращения в поддержку, апелляции, сообщения об ошибках или ситуации, не охваченные действующими правилами модерации.

Пожалуйста, используйте подходящий канал поддержки, если ваш вопрос связан с техническими проблемами, вопросами учётной записи, апелляциями или другими темами, не относящимися к модерации.`,
  Uh = () => `Ця скарга виходить за межі того, що команда модерації може розглядати через систему скарг.

Сюди можуть належати проблеми, що сталися поза грою, особисті суперечки, звернення до підтримки, апеляції, повідомлення про помилки або ситуації, не охоплені чинними правилами модерації.

Будь ласка, скористайтеся відповідним каналом підтримки, якщо ваше питання стосується технічних проблем, питань облікового запису, апеляцій або інших тем, не пов'язаних із модерацією.`,
  Gh = () => `Báo cáo này nằm ngoài phạm vi mà đội ngũ kiểm duyệt có thể xử lý qua hệ thống báo cáo.

Điều này có thể bao gồm các vấn đề xảy ra bên ngoài trò chơi, tranh chấp cá nhân, yêu cầu hỗ trợ, kháng cáo, báo cáo lỗi hoặc các tình huống không thuộc phạm vi các quy tắc kiểm duyệt hiện hành.

Vui lòng sử dụng kênh hỗ trợ phù hợp nếu vấn đề của bạn liên quan đến sự cố kỹ thuật, vấn đề tài khoản, kháng cáo hoặc các vấn đề khác không thuộc về kiểm duyệt.`,
  qh = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Dh() : e === "pt" ? Lh() : e === "ch" ? Ph() : e === "de" ? xh() : e === "es" ? zh() : e === "fr" ? Mh() : e === "it" ? Ch() : e === "jp" ? jh() : e === "pl" ? Bh() : e === "ru" ? Fh() : e === "uk" ? Uh() : Gh()
  },
  Vh = () => "Out of Scope",
  Wh = () => "Fora do escopo",
  Hh = () => "超出处理范围",
  Kh = () => "Außerhalb des Zuständigkeitsbereichs",
  $h = () => "Fuera del alcance",
  Xh = () => "Hors du champ d'action",
  Yh = () => "Fuori ambito",
  Jh = () => "対応範囲外",
  Zh = () => "Poza zakresem",
  Qh = () => "Вне зоны ответственности",
  eg = () => "Поза межами компетенції",
  tg = () => "Ngoài phạm vi xử lý",
  ng = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Vh() : e === "pt" ? Wh() : e === "ch" ? Hh() : e === "de" ? Kh() : e === "es" ? $h() : e === "fr" ? Xh() : e === "it" ? Yh() : e === "jp" ? Jh() : e === "pl" ? Zh() : e === "ru" ? Qh() : e === "uk" ? eg() : tg()
  },
  rg = () => "Inappropriate content",
  og = () => "Conteúdo inapropriado",
  ig = () => "不当内容",
  ag = () => "Unangemessene Inhalte",
  sg = () => "Contenido inapropiado",
  cg = () => "Contenu inapproprié",
  ug = () => "Contenuto inappropriato",
  lg = () => "不適切なコンテンツ",
  dg = () => "Nieodpowiednie treści",
  _g = () => "Неприемлемый контент",
  fg = () => "Неприйнятний вміст",
  pg = () => "Nội dung không phù hợp",
  mg = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? rg() : e === "pt" ? og() : e === "ch" ? ig() : e === "de" ? ag() : e === "es" ? sg() : e === "fr" ? cg() : e === "it" ? ug() : e === "jp" ? lg() : e === "pl" ? dg() : e === "ru" ? _g() : e === "uk" ? fg() : pg()
  },
  hg = () => "Explicit, hateful, or illegal content",
  gg = () => "Conteúdo explícito, de ódio ou ilegal",
  wg = () => "露骨、仇恨或非法内容",
  yg = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  bg = () => "Contenido explícito, de odio o ilegal",
  vg = () => "Contenu explicite, haineux ou illégal",
  Eg = () => "Contenuto esplicito, d'odio o illegale",
  Tg = () => "露骨、差別的、または違法なコンテンツ",
  Og = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  kg = () => "Откровенный, разжигающий ненависть или незаконный контент",
  Sg = () => "Відвертий, ворожий або незаконний вміст",
  Ag = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  Rg = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? hg() : e === "pt" ? gg() : e === "ch" ? wg() : e === "de" ? yg() : e === "es" ? bg() : e === "fr" ? vg() : e === "it" ? Eg() : e === "jp" ? Tg() : e === "pl" ? Og() : e === "ru" ? kg() : e === "uk" ? Sg() : Ag()
  },
  Ig = () => "Invalid captcha. Please try again.",
  Ng = () => "Captcha inválido. Por favor, tente novamente.",
  Dg = () => "验证码无效，请重试。",
  Lg = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  Pg = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  xg = () => "Captcha invalide. Veuillez réessayer.",
  zg = () => "Captcha non valido. Riprova.",
  Mg = () => "キャプチャが無効です。もう一度お試しください。",
  Cg = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  jg = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  Bg = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Fg = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Ug = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Ig() : e === "pt" ? Ng() : e === "ch" ? Dg() : e === "de" ? Lg() : e === "es" ? Pg() : e === "fr" ? xg() : e === "it" ? zg() : e === "jp" ? Mg() : e === "pl" ? Cg() : e === "ru" ? jg() : e === "uk" ? Bg() : Fg()
  },
  Gg = () => "Invalid challenge response",
  qg = () => "Resposta de desafio inválida",
  Vg = () => "质询响应无效",
  Wg = () => "Ungültige Challenge-Antwort",
  Hg = () => "Respuesta de desafío inválida",
  Kg = () => "Réponse au défi invalide",
  $g = () => "Risposta alla sfida non valida",
  Xg = () => "無効なチャレンジ応答",
  Yg = () => "Nieprawidłowa odpowiedź na wyzwanie",
  Jg = () => "Неверный ответ на вызов",
  Zg = () => "Недійсна відповідь на виклик",
  Qg = () => "Phản hồi thử thách không hợp lệ",
  ew = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Gg() : e === "pt" ? qg() : e === "ch" ? Vg() : e === "de" ? Wg() : e === "es" ? Hg() : e === "fr" ? Kg() : e === "it" ? $g() : e === "jp" ? Xg() : e === "pl" ? Yg() : e === "ru" ? Jg() : e === "uk" ? Zg() : Qg()
  },
  tw = () => "The verification code is incorrect. Please check it and try again.",
  nw = () => "Código inválido",
  rw = () => "验证码不正确。请检查后重试。",
  ow = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  iw = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  aw = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  sw = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  cw = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  uw = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  lw = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  dw = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  _w = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  fw = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? tw() : e === "pt" ? nw() : e === "ch" ? rw() : e === "de" ? ow() : e === "es" ? iw() : e === "fr" ? aw() : e === "it" ? sw() : e === "jp" ? cw() : e === "pl" ? uw() : e === "ru" ? lw() : e === "uk" ? dw() : _w()
  },
  pw = () => "Invalid discord.",
  mw = () => "Discord inválido.",
  hw = () => "无效的 Discord。",
  gw = () => "Ungültiger Discord.",
  ww = () => "Discord inválido.",
  yw = () => "Discord invalide.",
  bw = () => "Discord non valido.",
  vw = () => "無効なDiscordアカウントです。",
  Ew = () => "Nieprawidłowy Discord.",
  Tw = () => "Неверный Discord.",
  Ow = () => "Некоректний Discord.",
  kw = () => "Discord không hợp lệ.",
  Sw = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? pw() : e === "pt" ? mw() : e === "ch" ? hw() : e === "de" ? gw() : e === "es" ? ww() : e === "fr" ? yw() : e === "it" ? bw() : e === "jp" ? vw() : e === "pl" ? Ew() : e === "ru" ? Tw() : e === "uk" ? Ow() : kw()
  },
  Aw = () => "The name contains disallowed characters or words. Please choose a different name.",
  Rw = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  Iw = () => "名称包含禁止的字符或词语，请选择其他名称。",
  Nw = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  Dw = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  Lw = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  Pw = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  xw = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  zw = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  Mw = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  Cw = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  jw = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  gn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Aw() : e === "pt" ? Rw() : e === "ch" ? Iw() : e === "de" ? Nw() : e === "es" ? Dw() : e === "fr" ? Lw() : e === "it" ? Pw() : e === "jp" ? xw() : e === "pl" ? zw() : e === "ru" ? Mw() : e === "uk" ? Cw() : jw()
  },
  Bw = () => "Please enter a valid phone number with country code.",
  Fw = () => "Insira um número de telefone válido com código do país.",
  Uw = () => "请输入带国家代码的有效电话号码。",
  Gw = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  qw = () => "Introduce un número de teléfono válido con código de país.",
  Vw = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  Ww = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  Hw = () => "国番号付きの有効な電話番号を入力してください。",
  Kw = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  $w = () => "Введите действительный номер телефона с кодом страны.",
  Xw = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  Yw = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  Jw = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Bw() : e === "pt" ? Fw() : e === "ch" ? Uw() : e === "de" ? Gw() : e === "es" ? qw() : e === "fr" ? Vw() : e === "it" ? Ww() : e === "jp" ? Hw() : e === "pl" ? Kw() : e === "ru" ? $w() : e === "uk" ? Xw() : Yw()
  },
  Zw = () => "Phone number not supported. Please try another number.",
  Qw = () => "Número de telefone não suportado. Por favor, tente outro número.",
  ey = () => "不支持此电话号码。请尝试其他号码。",
  ty = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  ny = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  ry = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  oy = () => "Numero di telefono non supportato. Prova con un altro numero.",
  iy = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  ay = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  sy = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  cy = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  uy = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  ly = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Zw() : e === "pt" ? Qw() : e === "ch" ? ey() : e === "de" ? ty() : e === "es" ? ny() : e === "fr" ? ry() : e === "it" ? oy() : e === "jp" ? iy() : e === "pl" ? ay() : e === "ru" ? sy() : e === "uk" ? cy() : uy()
  },
  dy = () => "The new leader must be a member of the alliance",
  _y = () => "O novo líder deve ser um membro da aliança",
  fy = () => "新盟主必须是联盟成员",
  py = () => "Der neue Anführer muss Mitglied der Allianz sein",
  my = () => "El nuevo líder debe ser miembro de la alianza",
  hy = () => "Le nouveau chef doit être membre de l’alliance",
  gy = () => "Il nuovo leader deve essere un membro dell'alleanza",
  wy = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  yy = () => "Nowy lider musi być członkiem sojuszu",
  by = () => "Новый лидер должен быть участником альянса",
  vy = () => "Новий лідер має бути учасником альянсу",
  Ey = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Ty = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? dy() : e === "pt" ? _y() : e === "ch" ? fy() : e === "de" ? py() : e === "es" ? my() : e === "fr" ? hy() : e === "it" ? gy() : e === "jp" ? wy() : e === "pl" ? yy() : e === "ru" ? by() : e === "uk" ? vy() : Ey()
  },
  Oy = () => "Leaderboard is temporarily disabled",
  ky = () => "O ranking está temporariamente desativado",
  Sy = () => "排行榜已暂时停用",
  Ay = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Ry = () => "La clasificación está deshabilitada temporalmente",
  Iy = () => "Le classement est temporairement désactivé",
  Ny = () => "La classifica è temporaneamente disattivata",
  Dy = () => "ランキングは一時的に無効になっています。",
  Ly = () => "Ranking jest tymczasowo wyłączony",
  Py = () => "Таблица лидеров временно отключена",
  xy = () => "Таблиця лідерів тимчасово вимкнена",
  zy = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  de = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Oy() : e === "pt" ? ky() : e === "ch" ? Sy() : e === "de" ? Ay() : e === "es" ? Ry() : e === "fr" ? Iy() : e === "it" ? Ny() : e === "jp" ? Dy() : e === "pl" ? Ly() : e === "ru" ? Py() : e === "uk" ? xy() : zy()
  },
  My = () => "Location name is too big (max. 128 characters)",
  Cy = () => "Nome da localização é grande demais (max. 128 caracteres)",
  jy = () => "位置名称过长（最大 128 个字符）",
  By = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Fy = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Uy = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Gy = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  qy = () => "場所の名前が長すぎます（最大128文字）。",
  Vy = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  Wy = () => "Название локации слишком длинное (макс. 128 символов)",
  Hy = () => "Назва локації надто довга (макс. 128 символів)",
  Ky = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  $y = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? My() : e === "pt" ? Cy() : e === "ch" ? jy() : e === "de" ? By() : e === "es" ? Fy() : e === "fr" ? Uy() : e === "it" ? Gy() : e === "jp" ? qy() : e === "pl" ? Vy() : e === "ru" ? Wy() : e === "uk" ? Hy() : Ky()
  },
  Xy = () => "Multi-accounting",
  Yy = () => "Múltiplas contas",
  Jy = () => "多账号",
  Zy = () => "Multi-Accounting",
  Qy = () => "Multi-cuentas",
  eb = () => "Multi-comptes",
  tb = () => "Multi-account",
  nb = () => "複数アカウント使用",
  rb = () => "Multi-konta",
  ob = () => "Мультиаккаунт",
  ib = () => "Мультиакаунтинг",
  ab = () => "Nhiều tài khoản",
  sb = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Xy() : e === "pt" ? Yy() : e === "ch" ? Jy() : e === "de" ? Zy() : e === "es" ? Qy() : e === "fr" ? eb() : e === "it" ? tb() : e === "jp" ? nb() : e === "pl" ? rb() : e === "ru" ? ob() : e === "uk" ? ib() : ab()
  },
  cb = () => "Use more than one account to paint pixels",
  ub = () => "Usar mais de uma conta para pintar",
  lb = () => "使用多个账号绘制像素",
  db = () => "Mehr als ein Konto zum Malen verwenden",
  _b = () => "Uso de más de una cuenta para pintar píxeles",
  fb = () => "Utiliser plus d’un compte pour peindre",
  pb = () => "Usare più di un account per dipingere",
  mb = () => "複数のアカウントを使ってピクセルを塗った。",
  hb = () => "Używanie więcej niż jednego konta do malowania pikseli",
  gb = () => "Использование более одного аккаунта для рисования",
  wb = () => "Використання більше ніж одного акаунта для малювання",
  yb = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  bb = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? cb() : e === "pt" ? ub() : e === "ch" ? lb() : e === "de" ? db() : e === "es" ? _b() : e === "fr" ? fb() : e === "it" ? pb() : e === "jp" ? mb() : e === "pl" ? hb() : e === "ru" ? gb() : e === "uk" ? wb() : yb()
  },
  vb = n => `You can change your name again in ${n.days} days`,
  Eb = n => `Você pode alterar seu nome novamente em ${n.days} dias.`,
  Tb = n => `你可以在 ${n.days} 天后再次修改名称`,
  Ob = n => `Du kannst deinen Namen in ${n.days} Tagen erneut ändern`,
  kb = n => `Podrás cambiar tu nombre de nuevo en ${n.days} días`,
  Sb = n => `Vous pourrez changer votre nom à nouveau dans ${n.days} jours`,
  Ab = n => `Potrai cambiare di nuovo il tuo nome tra ${n.days} giorni.`,
  Rb = n => `${n.days}日後に再び名前を変更できます。`,
  Ib = n => `Następną zmianę nazwy możesz wykonać za ${n.days} dni`,
  Nb = n => `Вы сможете изменить имя снова через ${n.days} дн.`,
  Db = n => `Ви зможете змінити імʼя знову через ${n.days} днів`,
  Lb = n => `Bạn có thể đổi tên lại sau ${n.days} ngày`,
  Pb = (n, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? vb(n) : e === "pt" ? Eb(n) : e === "ch" ? Tb(n) : e === "de" ? Ob(n) : e === "es" ? kb(n) : e === "fr" ? Sb(n) : e === "it" ? Ab(n) : e === "jp" ? Rb(n) : e === "pl" ? Ib(n) : e === "ru" ? Nb(n) : e === "uk" ? Db(n) : Lb(n)
  },
  xb = () => "No internet access or the servers are offline. Try again later.",
  zb = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Mb = () => "没有网络连接或服务器已离线。请稍后重试。",
  Cb = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  jb = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Bb = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Fb = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Ub = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Gb = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  qb = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Vb = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  Wb = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  Hb = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? xb() : e === "pt" ? zb() : e === "ch" ? Mb() : e === "de" ? Cb() : e === "es" ? jb() : e === "fr" ? Bb() : e === "it" ? Fb() : e === "jp" ? Ub() : e === "pl" ? Gb() : e === "ru" ? qb() : e === "uk" ? Vb() : Wb()
  },
  Kb = () => "You are not allowed to verify a phone number. Try refreshing the page",
  $b = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  Xb = () => "您无权验证电话号码。请尝试刷新页面。",
  Yb = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  Jb = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  Zb = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  Qb = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  ev = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  tv = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  nv = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  rv = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  ov = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  iv = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Kb() : e === "pt" ? $b() : e === "ch" ? Xb() : e === "de" ? Yb() : e === "es" ? Jb() : e === "fr" ? Zb() : e === "it" ? Qb() : e === "jp" ? ev() : e === "pl" ? tv() : e === "ru" ? nv() : e === "uk" ? rv() : ov()
  },
  av = () => "Operation not allowed. Maybe you have too many favorite locations.",
  sv = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  cv = () => "操作不被允许。你的收藏位置可能过多。",
  uv = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  lv = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  dv = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  _v = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  fv = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  pv = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  mv = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  hv = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  gv = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  wv = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? av() : e === "pt" ? sv() : e === "ch" ? cv() : e === "de" ? uv() : e === "es" ? lv() : e === "fr" ? dv() : e === "it" ? _v() : e === "jp" ? fv() : e === "pl" ? pv() : e === "ru" ? mv() : e === "uk" ? hv() : gv()
  },
  yv = n => `Not enough charges: you have ${n.charges} but this overlay needs ${n.pixels}.`,
  bv = n => `Cargas insuficientes: você tem ${n.charges}, mas esta sobreposição precisa de ${n.pixels}.`,
  vv = n => `充能不足：你有 ${n.charges}，但此叠加层需要 ${n.pixels}。`,
  Ev = n => `Nicht genügend Ladungen: Du hast ${n.charges}, aber dieses Overlay benötigt ${n.pixels}.`,
  Tv = n => `Cargas insuficientes: tienes ${n.charges} pero esta superposición necesita ${n.pixels}.`,
  Ov = n => `Charges insuffisantes : vous avez ${n.charges} mais ce calque nécessite ${n.pixels}.`,
  kv = n => `Cariche insufficienti: ne hai ${n.charges} ma questo overlay ne richiede ${n.pixels}.`,
  Sv = n => `チャージが足りません：現在 ${n.charges} ですが、このオーバーレイには ${n.pixels} 必要です。`,
  Av = n => `Za mało ładunków: masz ${n.charges}, ale ta nakładka wymaga ${n.pixels}.`,
  Rv = n => `Недостаточно зарядов: у вас ${n.charges}, но для этого слоя нужно ${n.pixels}.`,
  Iv = n => `Недостатньо зарядів: у вас ${n.charges}, але для цього шару потрібно ${n.pixels}.`,
  Nv = n => `Không đủ lượt sơn: bạn có ${n.charges} nhưng lớp phủ này cần ${n.pixels}.`,
  Dv = (n, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? yv(n) : e === "pt" ? bv(n) : e === "ch" ? vv(n) : e === "de" ? Ev(n) : e === "es" ? Tv(n) : e === "fr" ? Ov(n) : e === "it" ? kv(n) : e === "jp" ? Sv(n) : e === "pl" ? Av(n) : e === "ru" ? Rv(n) : e === "uk" ? Iv(n) : Nv(n)
  },
  Lv = () => "You are trying to paint with a color you do not own",
  Pv = () => "Você está tentando pintar com uma cor que não possui",
  xv = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  zv = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  Mv = () => "Estás intentando pintar con un color que no posees",
  Cv = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  jv = () => "Stai cercando di dipingere con un colore che non possiedi",
  Bv = () => "所持していない色で塗ろうとしています。",
  Fv = () => "Próbujesz malować kolorem, którego nie posiadasz",
  Uv = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  Gv = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  qv = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  wn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Lv() : e === "pt" ? Pv() : e === "ch" ? xv() : e === "de" ? zv() : e === "es" ? Mv() : e === "fr" ? Cv() : e === "it" ? jv() : e === "jp" ? Bv() : e === "pl" ? Fv() : e === "ru" ? Uv() : e === "uk" ? Gv() : qv()
  },
  Vv = () => "Phone already used",
  Wv = () => "Telefone já usado",
  Hv = () => "电话号码已被使用",
  Kv = () => "Telefonnummer bereits verwendet",
  $v = () => "Teléfono ya utilizado",
  Xv = () => "Téléphone déjà utilisé",
  Yv = () => "Telefono già utilizzato",
  Jv = () => "この電話番号は既に使用されています。",
  Zv = () => "Numer telefonu jest już używany",
  Qv = () => "Телефон уже используется",
  eE = () => "Номер телефону вже використовується",
  tE = () => "Số điện thoại đã được sử dụng",
  nE = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Vv() : e === "pt" ? Wv() : e === "ch" ? Hv() : e === "de" ? Kv() : e === "es" ? $v() : e === "fr" ? Xv() : e === "it" ? Yv() : e === "jp" ? Jv() : e === "pl" ? Zv() : e === "ru" ? Qv() : e === "uk" ? eE() : tE()
  },
  rE = () => "This phone number's region is not supported",
  oE = () => "A região deste número de telefone não é suportada",
  iE = () => "此电话号码的地区不受支持",
  aE = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  sE = () => "La región de este número de teléfono no es compatible",
  cE = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  uE = () => "La regione di questo numero di telefono non è supportata",
  lE = () => "この電話番号の地域はサポートされていません",
  dE = () => "Region tego numeru telefonu nie jest obsługiwany",
  _E = () => "Регион этого номера телефона не поддерживается",
  fE = () => "Регіон цього номера телефону не підтримується",
  pE = () => "Vùng của số điện thoại này không được hỗ trợ",
  mE = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? rE() : e === "pt" ? oE() : e === "ch" ? iE() : e === "de" ? aE() : e === "es" ? sE() : e === "fr" ? cE() : e === "it" ? uE() : e === "jp" ? lE() : e === "pl" ? dE() : e === "ru" ? _E() : e === "uk" ? fE() : pE()
  },
  hE = () => "Refresh your page to get the latest update",
  gE = () => "Recarregue sua página para obter as últimas atualizações",
  wE = () => "刷新页面以获取最新更新",
  yE = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  bE = () => "Actualiza la página para obtener la última versión",
  vE = () => "Actualisez la page pour obtenir les dernières mises à jour",
  EE = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  TE = () => "最新の状態にするにはページを再読み込みしてください。",
  OE = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  kE = () => "Обновите страницу, чтобы получить последние изменения",
  SE = () => "Оновіть сторінку, щоб отримати останні оновлення",
  AE = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  yn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? hE() : e === "pt" ? gE() : e === "ch" ? wE() : e === "de" ? yE() : e === "es" ? bE() : e === "fr" ? vE() : e === "it" ? EE() : e === "jp" ? TE() : e === "pl" ? OE() : e === "ru" ? kE() : e === "uk" ? SE() : AE()
  },
  RE = () => "The request timed out. Please try again.",
  IE = () => "A solicitação expirou. Por favor, tente novamente.",
  NE = () => "请求超时。请重试。",
  DE = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  LE = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  PE = () => "La requête a expiré. Veuillez réessayer.",
  xE = () => "La richiesta è scaduta. Riprova.",
  zE = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  ME = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  CE = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  jE = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  BE = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  FE = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? RE() : e === "pt" ? IE() : e === "ch" ? NE() : e === "de" ? DE() : e === "es" ? LE() : e === "fr" ? PE() : e === "it" ? xE() : e === "jp" ? zE() : e === "pl" ? ME() : e === "ru" ? CE() : e === "uk" ? jE() : BE()
  },
  UE = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  GE = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  qE = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  VE = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  WE = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  HE = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  KE = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  $E = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  XE = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  YE = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  JE = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  ZE = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  QE = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? UE() : e === "pt" ? GE() : e === "ch" ? qE() : e === "de" ? VE() : e === "es" ? WE() : e === "fr" ? HE() : e === "it" ? KE() : e === "jp" ? $E() : e === "pl" ? XE() : e === "ru" ? YE() : e === "uk" ? JE() : ZE()
  },
  eT = () => "The service is currently unavailable. Please try again later.",
  tT = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  nT = () => "服务当前不可用。请稍后再试。",
  rT = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  oT = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  iT = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  aT = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  sT = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  cT = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  uT = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  lT = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  dT = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  _T = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? eT() : e === "pt" ? tT() : e === "ch" ? nT() : e === "de" ? rT() : e === "es" ? oT() : e === "fr" ? iT() : e === "it" ? aT() : e === "jp" ? sT() : e === "pl" ? cT() : e === "ru" ? uT() : e === "uk" ? lT() : dT()
  },
  fT = () => "Too many attempts. Please try again later",
  pT = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  mT = () => "尝试次数过多，请稍后再试",
  hT = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  gT = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  wT = () => "Trop de tentatives. Veuillez réessayer plus tard",
  yT = () => "Troppi tentativi. Riprova più tardi.",
  bT = () => "試行回数が多すぎます。後で再度お試しください。",
  vT = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  ET = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  TT = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  OT = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  bn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? fT() : e === "pt" ? pT() : e === "ch" ? mT() : e === "de" ? hT() : e === "es" ? gT() : e === "fr" ? wT() : e === "it" ? yT() : e === "jp" ? bT() : e === "pl" ? vT() : e === "ru" ? ET() : e === "uk" ? TT() : OT()
  },
  kT = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  ST = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  AT = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  RT = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  IT = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  NT = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  DT = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  LT = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  PT = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  xT = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  zT = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  MT = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  CT = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? kT() : e === "pt" ? ST() : e === "ch" ? AT() : e === "de" ? RT() : e === "es" ? IT() : e === "fr" ? NT() : e === "it" ? DT() : e === "jp" ? LT() : e === "pl" ? PT() : e === "ru" ? xT() : e === "uk" ? zT() : MT()
  },
  jT = () => "The typed username does not match your current username.",
  BT = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  FT = () => "输入的用户名与当前用户名不匹配。",
  UT = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  GT = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  qT = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  VT = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  WT = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  HT = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  KT = () => "Введённое имя пользователя не совпадает с текущим.",
  $T = () => "Введене імʼя користувача не збігається з поточним.",
  XT = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  YT = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? jT() : e === "pt" ? BT() : e === "ch" ? FT() : e === "de" ? UT() : e === "es" ? GT() : e === "fr" ? qT() : e === "it" ? VT() : e === "jp" ? WT() : e === "pl" ? HT() : e === "ru" ? KT() : e === "uk" ? $T() : XT()
  },
  JT = () => "Unexpected server error. Try again later.",
  ZT = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  QT = () => "服务器出现意外错误。请稍后再试。",
  e0 = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  t0 = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  n0 = () => "Erreur serveur inattendue. Réessayez plus tard.",
  r0 = () => "Errore imprevisto del server. Riprova più tardi.",
  o0 = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  i0 = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  a0 = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  s0 = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  c0 = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  d = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? JT() : e === "pt" ? ZT() : e === "ch" ? QT() : e === "de" ? e0() : e === "es" ? t0() : e === "fr" ? n0() : e === "it" ? r0() : e === "jp" ? o0() : e === "pl" ? i0() : e === "ru" ? a0() : e === "uk" ? s0() : c0()
  },
  u0 = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  l0 = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  d0 = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  _0 = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  f0 = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  p0 = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  m0 = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  h0 = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  g0 = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  w0 = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  y0 = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  b0 = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  v0 = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? u0() : e === "pt" ? l0() : e === "ch" ? d0() : e === "de" ? _0() : e === "es" ? f0() : e === "fr" ? p0() : e === "it" ? m0() : e === "jp" ? h0() : e === "pl" ? g0() : e === "ru" ? w0() : e === "uk" ? y0() : b0()
  },
  E0 = () => "VPN or proxy detected. Please disable your VPN and try again.",
  T0 = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  O0 = () => "检测到VPN或代理。请关闭VPN后重试。",
  k0 = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  S0 = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  A0 = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  R0 = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  I0 = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  N0 = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  D0 = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  L0 = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  P0 = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  x0 = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? E0() : e === "pt" ? T0() : e === "ch" ? O0() : e === "de" ? k0() : e === "es" ? S0() : e === "fr" ? A0() : e === "it" ? R0() : e === "jp" ? I0() : e === "pl" ? N0() : e === "ru" ? D0() : e === "uk" ? L0() : P0()
  },
  z0 = () => "Failed to load WebAssembly module. Try to use another browser.",
  M0 = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  C0 = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  j0 = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  B0 = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  F0 = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  U0 = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  G0 = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  q0 = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  V0 = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  W0 = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  H0 = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  K0 = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? z0() : e === "pt" ? M0() : e === "ch" ? C0() : e === "de" ? j0() : e === "es" ? B0() : e === "fr" ? F0() : e === "it" ? U0() : e === "jp" ? G0() : e === "pl" ? q0() : e === "ru" ? V0() : e === "uk" ? W0() : H0()
  },
  $0 = () => "You already have this item. Please refresh the page.",
  X0 = () => "Você já possui este item. Atualize a página.",
  Y0 = () => "你已经拥有此物品。请刷新页面。",
  J0 = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  Z0 = () => "Ya tienes este ítem. Actualiza la página.",
  Q0 = () => "Vous possédez déjà cet objet. Actualisez la page.",
  eO = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  tO = () => "このアイテムはすでに所持しています。ページを更新してください。",
  nO = () => "Masz już ten przedmiot. Odśwież stronę.",
  rO = () => "У вас уже есть этот предмет. Обновите страницу.",
  oO = () => "У вас уже є цей предмет. Оновіть сторінку.",
  iO = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  vn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? $0() : e === "pt" ? X0() : e === "ch" ? Y0() : e === "de" ? J0() : e === "es" ? Z0() : e === "fr" ? Q0() : e === "it" ? eO() : e === "jp" ? tO() : e === "pl" ? nO() : e === "ru" ? rO() : e === "uk" ? oO() : iO()
  },
  aO = () => "You are already in an alliance",
  sO = () => "Você já está em uma aliança",
  cO = () => "你已经在一个联盟中",
  uO = () => "Du bist bereits in einer Allianz",
  lO = () => "Ya estás en una alianza",
  dO = () => "Vous êtes déjà dans une alliance",
  _O = () => "Sei già in un'alleanza",
  fO = () => "すでにアライアンスに所属しています。",
  pO = () => "Jesteś już w sojuszu",
  mO = () => "Вы уже состоите в альянсе",
  hO = () => "Ви вже перебуваєте в альянсі",
  gO = () => "Bạn đã ở trong một liên minh",
  wO = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? aO() : e === "pt" ? sO() : e === "ch" ? cO() : e === "de" ? uO() : e === "es" ? lO() : e === "fr" ? dO() : e === "it" ? _O() : e === "jp" ? fO() : e === "pl" ? pO() : e === "ru" ? mO() : e === "uk" ? hO() : gO()
  },
  yO = () => "You are not allowed to do this",
  bO = () => "Você não tem permissão para fazer isso",
  vO = () => "你无权执行此操作",
  EO = () => "Du bist dazu nicht berechtigt",
  TO = () => "No tienes permiso para hacer esto",
  OO = () => "Vous n’êtes pas autorisé à faire cela",
  kO = () => "Non hai il permesso di farlo",
  SO = () => "この操作を行う権限がありません。",
  AO = () => "Nie masz uprawnień, aby to zrobić",
  RO = () => "У вас нет прав для этого действия",
  IO = () => "Ви не маєте права це робити",
  NO = () => "Bạn không có quyền làm việc này",
  _e = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? yO() : e === "pt" ? bO() : e === "ch" ? vO() : e === "de" ? EO() : e === "es" ? TO() : e === "fr" ? OO() : e === "it" ? kO() : e === "jp" ? SO() : e === "pl" ? AO() : e === "ru" ? RO() : e === "uk" ? IO() : NO()
  },
  DO = () => "You do not have enough Droplets to buy this item.",
  LO = () => "Você não tem Droplets suficientes para comprar este item.",
  PO = () => "你的 Droplets 不足，无法购买此物品。",
  xO = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  zO = () => "No tienes suficientes Droplets para comprar este ítem.",
  MO = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  CO = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  jO = () => "このアイテムを購入するのに十分なDropletsがありません。",
  BO = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  FO = () => "У вас недостаточно Droplets для покупки этого предмета.",
  UO = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  GO = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  En = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? DO() : e === "pt" ? LO() : e === "ch" ? PO() : e === "de" ? xO() : e === "es" ? zO() : e === "fr" ? MO() : e === "it" ? CO() : e === "jp" ? jO() : e === "pl" ? BO() : e === "ru" ? FO() : e === "uk" ? UO() : GO()
  },
  qO = () => "You need to be logged in to paint",
  VO = () => "Você precisa estar conectado para pintar",
  WO = () => "你需要登录才能进行绘制",
  HO = () => "Du musst eingeloggt sein, um zu malen",
  KO = () => "Debes iniciar sesión para pintar",
  $O = () => "Vous devez être connecté pour peindre",
  XO = () => "Devi avere effettuato l'accesso per dipingere",
  YO = () => "ペイントするにはログインが必要です。",
  JO = () => "Musisz być zalogowany, aby malować",
  ZO = () => "Чтобы рисовать, нужно войти в аккаунт",
  QO = () => "Щоб малювати, необхідно увійти в акаунт",
  ek = () => "Bạn cần đăng nhập để tô",
  Tn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? qO() : e === "pt" ? VO() : e === "ch" ? WO() : e === "de" ? HO() : e === "es" ? KO() : e === "fr" ? $O() : e === "it" ? XO() : e === "jp" ? YO() : e === "pl" ? JO() : e === "ru" ? ZO() : e === "uk" ? QO() : ek()
  },
  tk = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  nk = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  rk = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  ok = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  ik = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  ak = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  sk = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  ck = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  uk = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  lk = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  dk = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  _k = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  fk = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? tk() : e === "pt" ? nk() : e === "ch" ? rk() : e === "de" ? ok() : e === "es" ? ik() : e === "fr" ? ak() : e === "it" ? sk() : e === "jp" ? ck() : e === "pl" ? uk() : e === "ru" ? lk() : e === "uk" ? dk() : _k()
  },
  pk = n => `Your account has been suspended out until ${n.until}`,
  mk = n => `A sua conta está suspensa até ${n.until}`,
  hk = n => `你的账号已被暂停至 ${n.until}`,
  gk = n => `Dein Konto ist gesperrt bis ${n.until}`,
  wk = n => `Tu cuenta ha sido suspendida hasta ${n.until}`,
  yk = n => `Votre compte est suspendu jusqu’au ${n.until}`,
  bk = n => `Il tuo account è sospeso fino al ${n.until}`,
  vk = n => `あなたのアカウントは${n.until}まで一時停止されています。`,
  Ek = n => `Twoje konto zostało zawieszone do ${n.until}`,
  Tk = n => `Ваш аккаунт заблокирован до ${n.until}`,
  Ok = n => `Ваш акаунт призупинено до ${n.until}`,
  kk = n => `Tài khoản của bạn đã bị đình chỉ đến ${n.until}`,
  On = (n, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? pk(n) : e === "pt" ? mk(n) : e === "ch" ? hk(n) : e === "de" ? gk(n) : e === "es" ? wk(n) : e === "fr" ? yk(n) : e === "it" ? bk(n) : e === "jp" ? vk(n) : e === "pl" ? Ek(n) : e === "ru" ? Tk(n) : e === "uk" ? Ok(n) : kk(n)
  },
  Sk = () => "A correction is already pending for this ticket.",
  Ak = () => "Já existe uma correção pendente para este ticket.",
  Rk = () => "此工单已存在待审核的更正请求。",
  Ik = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  Nk = () => "Ya hay una corrección pendiente para este ticket.",
  Dk = () => "Une correction est déjà en attente pour ce ticket.",
  Lk = () => "Una correzione è già in sospeso per questo ticket.",
  Pk = () => "このチケットには未処理の修正があります。",
  xk = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  zk = () => "Для этого тикета уже есть запрос на исправление.",
  Mk = () => "Для цього тікета вже є запит на перевірці.",
  Ck = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  jk = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Sk() : e === "pt" ? Ak() : e === "ch" ? Rk() : e === "de" ? Ik() : e === "es" ? Nk() : e === "fr" ? Dk() : e === "it" ? Lk() : e === "jp" ? Pk() : e === "pl" ? xk() : e === "ru" ? zk() : e === "uk" ? Mk() : Ck()
  },
  Bk = () => "You cannot review your own correction request.",
  Fk = () => "Você não pode revisar sua própria solicitação de correção.",
  Uk = () => "不能审核自己提交的更正请求。",
  Gk = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  qk = () => "No puedes revisar tu propia solicitud de corrección.",
  Vk = () => "Tu ne peux pas examiner ta propre demande de correction.",
  Wk = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  Hk = () => "自分のリクエストはレビューできません。",
  Kk = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  $k = () => "Нельзя рассматривать собственный запрос.",
  Xk = () => "Не можна перевіряти власний запит.",
  Yk = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  Jk = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Bk() : e === "pt" ? Fk() : e === "ch" ? Uk() : e === "de" ? Gk() : e === "es" ? qk() : e === "fr" ? Vk() : e === "it" ? Wk() : e === "jp" ? Hk() : e === "pl" ? Kk() : e === "ru" ? $k() : e === "uk" ? Xk() : Yk()
  },
  Zk = () => "This correction has already been reviewed.",
  Qk = () => "Esta correção já foi revisada.",
  eS = () => "此请求已被审核。",
  tS = () => "Diese Korrektur wurde bereits geprüft.",
  nS = () => "Esta corrección ya ha sido revisada.",
  rS = () => "Cette correction a déjà été examinée.",
  oS = () => "Questa correzione è già stata revisionata.",
  iS = () => "このリクエストはすでにレビュー済みです。",
  aS = () => "Ta prośba została już rozpatrzona.",
  sS = () => "Этот запрос уже рассмотрен.",
  cS = () => "Цей запит вже перевірено.",
  uS = () => "Yêu cầu này đã được duyệt.",
  lS = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Zk() : e === "pt" ? Qk() : e === "ch" ? eS() : e === "de" ? tS() : e === "es" ? nS() : e === "fr" ? rS() : e === "it" ? oS() : e === "jp" ? iS() : e === "pl" ? aS() : e === "ru" ? sS() : e === "uk" ? cS() : uS()
  },
  Pt = {
    insufficient_context: am(),
    no_rule_violation: oh(),
    not_enough_for_punishment: Nh(),
    caused_by_glitch: xp(),
    out_of_scope: ng(),
    invalid_information: Lm(),
    allowed_by_event: cp(),
    already_handled: Mf()
  },
  mA = {
    insufficient_context: Kp(),
    no_rule_violation: Wm(),
    not_enough_for_punishment: gh(),
    caused_by_glitch: vp(),
    out_of_scope: qh(),
    invalid_information: ym(),
    allowed_by_event: Xf(),
    already_handled: Tf()
  },
  hA = Object.keys(Pt).map(n => ({
    value: n,
    label: Pt[n]
  }));

function gA(n) {
  return n in Pt
}
var s = (n => (n[n.CONTINUE = 100] = "CONTINUE", n[n.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", n[n.PROCESSING = 102] = "PROCESSING", n[n.EARLY_HINTS = 103] = "EARLY_HINTS", n[n.OK = 200] = "OK", n[n.CREATED = 201] = "CREATED", n[n.ACCEPTED = 202] = "ACCEPTED", n[n.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", n[n.NO_CONTENT = 204] = "NO_CONTENT", n[n.RESET_CONTENT = 205] = "RESET_CONTENT", n[n.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", n[n.MULTI_STATUS = 207] = "MULTI_STATUS", n[n.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", n[n.IM_USED = 226] = "IM_USED", n[n.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", n[n.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", n[n.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", n[n.FOUND = 302] = "FOUND", n[n.SEE_OTHER = 303] = "SEE_OTHER", n[n.NOT_MODIFIED = 304] = "NOT_MODIFIED", n[n.USE_PROXY = 305] = "USE_PROXY", n[n.SWITCH_PROXY = 306] = "SWITCH_PROXY", n[n.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", n[n.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", n[n.BAD_REQUEST = 400] = "BAD_REQUEST", n[n.UNAUTHORIZED = 401] = "UNAUTHORIZED", n[n.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", n[n.FORBIDDEN = 403] = "FORBIDDEN", n[n.NOT_FOUND = 404] = "NOT_FOUND", n[n.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", n[n.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", n[n.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", n[n.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", n[n.CONFLICT = 409] = "CONFLICT", n[n.GONE = 410] = "GONE", n[n.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", n[n.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", n[n.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", n[n.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", n[n.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", n[n.URI_TOO_LONG = 414] = "URI_TOO_LONG", n[n.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", n[n.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", n[n.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", n[n.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", n[n.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", n[n.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", n[n.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", n[n.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", n[n.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", n[n.LOCKED = 423] = "LOCKED", n[n.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", n[n.TOO_EARLY = 425] = "TOO_EARLY", n[n.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", n[n.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", n[n.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", n[n.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", n[n.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", n[n.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", n[n.BAD_GATEWAY = 502] = "BAD_GATEWAY", n[n.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", n[n.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", n[n.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", n[n.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", n[n.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", n[n.LOOP_DETECTED = 508] = "LOOP_DETECTED", n[n.NOT_EXTENDED = 510] = "NOT_EXTENDED", n[n.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", n[n.AWS_ELB_000 = 0] = "AWS_ELB_000", n[n.THIS_IS_FINE = 218] = "THIS_IS_FINE", n[n.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", n[n.METHOD_FAILURE = 420] = "METHOD_FAILURE", n[n.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", n[n.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", n[n.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", n[n.NO_RESPONSE = 444] = "NO_RESPONSE", n[n.RETRY_WITH = 449] = "RETRY_WITH", n[n.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", n[n.REDIRECT_IIS = 451] = "REDIRECT_IIS", n[n.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", n[n.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", n[n.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", n[n.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", n[n.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", n[n.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", n[n.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", n[n.INVALID_TOKEN = 498] = "INVALID_TOKEN", n[n.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", n[n.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", n[n.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", n[n.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", n[n.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", n[n.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", n[n.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", n[n.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", n[n.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", n[n.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", n[n.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", n[n.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", n[n.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", n[n.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", n[n.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", n[n.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", n[n.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", n[n.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", n[n.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", n[n.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", n[n.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", n[n.REQUEST_DENIED = 999] = "REQUEST_DENIED", n))(s || {});
const ce = {
  day: 1440 * 60 * 1e3,
  hour: 3600 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
};

function wA(n) {
  const t = Math.floor(n / ce.hour);
  n -= t * ce.hour;
  const e = Math.floor(n / ce.minute);
  n -= e * ce.minute;
  const o = Math.floor(n / ce.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${o}` : `${e}:${o}`
}

function yA(n) {
  const t = n.getFullYear(),
    e = String(n.getMonth() + 1).padStart(2, "0"),
    r = String(n.getDate()).padStart(2, "0"),
    o = String(n.getHours()).padStart(2, "0"),
    i = String(n.getMinutes()).padStart(2, "0"),
    a = String(n.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${r} ${o}:${i}:${a}`
}
const bA = {
    griefing: O_(),
    "multi-accounting": sb(),
    "hate-speech": Y_(),
    bot: lc(),
    doxxing: Rl(),
    "inappropriate-content": mg(),
    other: Mc()
  },
  vA = {
    doxxing: Ul(),
    "hate-speech": lf(),
    griefing: C_(),
    "multi-accounting": bb(),
    bot: Tc(),
    "inappropriate-content": Rg(),
    other: Xc()
  },
  EA = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  kn = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  TA = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  dS = 365 * ce.day;

function $n(n) {
  if (!n) return null;
  const e = (n instanceof Date ? n : new Date(n)).getTime();
  return Number.isFinite(e) ? e : null
}

function OA(n, t = Date.now()) {
  const e = $n(n);
  return e === null ? !1 : e - t >= dS
}

function kA(n, t = Date.now()) {
  const e = $n(n);
  if (e === null || e <= t) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const r = Math.max(0, Math.ceil((e - t) / 6e4)),
    o = Math.floor(r / 1440),
    i = Math.floor(r % 1440 / 60),
    a = r % 60;
  return {
    days: o,
    hours: i,
    minutes: a
  }
}
const _S = [{
    tileSize: 1e3,
    zoom: 11
  }],
  fS = 4,
  pS = 6e3,
  mS = [{
    name: "Transparent",
    rgb: [0, 0, 0]
  }, {
    name: "Black",
    rgb: [0, 0, 0]
  }, {
    name: "Dark Gray",
    rgb: [60, 60, 60]
  }, {
    name: "Gray",
    rgb: [120, 120, 120]
  }, {
    name: "Light Gray",
    rgb: [210, 210, 210]
  }, {
    name: "White",
    rgb: [255, 255, 255]
  }, {
    name: "Deep Red",
    rgb: [96, 0, 24]
  }, {
    name: "Red",
    rgb: [237, 28, 36]
  }, {
    name: "Orange",
    rgb: [255, 127, 39]
  }, {
    name: "Gold",
    rgb: [246, 170, 9]
  }, {
    name: "Yellow",
    rgb: [249, 221, 59]
  }, {
    name: "Light Yellow",
    rgb: [255, 250, 188]
  }, {
    name: "Dark Green",
    rgb: [14, 185, 104]
  }, {
    name: "Green",
    rgb: [19, 230, 123]
  }, {
    name: "Light Green",
    rgb: [135, 255, 94]
  }, {
    name: "Dark Teal",
    rgb: [12, 129, 110]
  }, {
    name: "Teal",
    rgb: [16, 174, 166]
  }, {
    name: "Light Teal",
    rgb: [19, 225, 190]
  }, {
    name: "Dark Blue",
    rgb: [40, 80, 158]
  }, {
    name: "Blue",
    rgb: [64, 147, 228]
  }, {
    name: "Cyan",
    rgb: [96, 247, 242]
  }, {
    name: "Indigo",
    rgb: [107, 80, 246]
  }, {
    name: "Light Indigo",
    rgb: [153, 177, 251]
  }, {
    name: "Dark Purple",
    rgb: [120, 12, 153]
  }, {
    name: "Purple",
    rgb: [170, 56, 185]
  }, {
    name: "Light Purple",
    rgb: [224, 159, 249]
  }, {
    name: "Dark Pink",
    rgb: [203, 0, 122]
  }, {
    name: "Pink",
    rgb: [236, 31, 128]
  }, {
    name: "Light Pink",
    rgb: [243, 141, 169]
  }, {
    name: "Dark Brown",
    rgb: [104, 70, 52]
  }, {
    name: "Brown",
    rgb: [149, 104, 42]
  }, {
    name: "Beige",
    rgb: [248, 178, 119]
  }, {
    name: "Medium Gray",
    rgb: [170, 170, 170]
  }, {
    name: "Dark Red",
    rgb: [165, 14, 30]
  }, {
    name: "Light Red",
    rgb: [250, 128, 114]
  }, {
    name: "Dark Orange",
    rgb: [228, 92, 26]
  }, {
    name: "Light Tan",
    rgb: [214, 181, 148]
  }, {
    name: "Dark Goldenrod",
    rgb: [156, 132, 49]
  }, {
    name: "Goldenrod",
    rgb: [197, 173, 49]
  }, {
    name: "Light Goldenrod",
    rgb: [232, 212, 95]
  }, {
    name: "Dark Olive",
    rgb: [74, 107, 58]
  }, {
    name: "Olive",
    rgb: [90, 148, 74]
  }, {
    name: "Light Olive",
    rgb: [132, 197, 115]
  }, {
    name: "Dark Cyan",
    rgb: [15, 121, 159]
  }, {
    name: "Light Cyan",
    rgb: [187, 250, 242]
  }, {
    name: "Light Blue",
    rgb: [125, 199, 255]
  }, {
    name: "Dark Indigo",
    rgb: [77, 49, 184]
  }, {
    name: "Dark Slate Blue",
    rgb: [74, 66, 132]
  }, {
    name: "Slate Blue",
    rgb: [122, 113, 196]
  }, {
    name: "Light Slate Blue",
    rgb: [181, 174, 241]
  }, {
    name: "Light Brown",
    rgb: [219, 164, 99]
  }, {
    name: "Dark Beige",
    rgb: [209, 128, 81]
  }, {
    name: "Light Beige",
    rgb: [255, 197, 165]
  }, {
    name: "Dark Peach",
    rgb: [155, 82, 73]
  }, {
    name: "Peach",
    rgb: [209, 128, 120]
  }, {
    name: "Light Peach",
    rgb: [250, 182, 164]
  }, {
    name: "Dark Tan",
    rgb: [123, 99, 82]
  }, {
    name: "Tan",
    rgb: [156, 132, 107]
  }, {
    name: "Dark Slate",
    rgb: [51, 57, 65]
  }, {
    name: "Slate",
    rgb: [109, 117, 141]
  }, {
    name: "Light Slate",
    rgb: [179, 185, 209]
  }, {
    name: "Dark Stone",
    rgb: [109, 100, 63]
  }, {
    name: "Stone",
    rgb: [148, 140, 107]
  }, {
    name: "Light Stone",
    rgb: [205, 197, 158]
  }],
  hS = {
    price: {
      googlePlayBilling: 1.2
    }
  },
  gS = {
    10: {
      name: "25,000 Droplets",
      price: 500,
      isDollar: !0,
      lookupKey: "droplets_5",
      items: [{
        name: "Droplet",
        amount: 25e3
      }]
    },
    20: {
      name: "78,750 Droplets",
      price: 1500,
      isDollar: !0,
      lookupKey: "droplets_15",
      items: [{
        name: "Droplet",
        amount: 78750
      }]
    },
    30: {
      name: "165,000 Droplets",
      price: 3e3,
      isDollar: !0,
      lookupKey: "droplets_30",
      items: [{
        name: "Droplet",
        amount: 165e3
      }]
    },
    40: {
      name: "287,500 Droplets",
      price: 5e3,
      isDollar: !0,
      lookupKey: "droplets_50",
      items: [{
        name: "Droplet",
        amount: 287500
      }]
    },
    50: {
      name: "450,000 Droplets",
      price: 7500,
      isDollar: !0,
      lookupKey: "droplets_75",
      items: [{
        name: "Droplet",
        amount: 45e4
      }]
    },
    60: {
      name: "625,000 Droplets",
      price: 1e4,
      isDollar: !0,
      lookupKey: "droplets_100",
      items: [{
        name: "Droplet",
        amount: 625e3
      }]
    },
    70: {
      name: "+5 Max. Charges",
      price: 500,
      isDollar: !1,
      items: [{
        name: "Max. Charge",
        amount: 5
      }]
    },
    80: {
      name: "+30 Paint Charges",
      price: 500,
      isDollar: !1,
      items: [{
        name: "Paint Charge",
        amount: 30
      }]
    },
    100: {
      name: "Unlock Color",
      price: 2e3,
      isDollar: !1,
      items: [{
        name: "Color",
        amount: 1
      }]
    },
    110: {
      name: "Flag",
      price: 2e4,
      isDollar: !1,
      items: [{
        name: "Flag",
        amount: 1
      }]
    },
    120: {
      name: "Profile Picture",
      price: 2e4,
      isDollar: !1,
      items: [{
        name: "Profile Picture",
        amount: 1
      }]
    },
    130: {
      name: "FRAME",
      isDollar: !1,
      items: [{
        name: "FRAME",
        amount: 1
      }]
    },
    140: {
      name: "Custom Name Font",
      isDollar: !1,
      items: [{
        name: "Custom Name Font",
        amount: 1
      }]
    },
    150: {
      name: "Custom Name Style",
      isDollar: !1,
      items: [{
        name: "Custom Name Style",
        amount: 1
      }]
    }
  },
  wS = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  yS = {
    dashboard: {
      summary: {
        counters: {
          tickets: "staff.dashboard.summary.counters.tickets",
          reports: "staff.dashboard.summary.counters.reports"
        },
        events: {
          status: "staff.dashboard.summary.events.status",
          start: "staff.dashboard.summary.events.start",
          stop: "staff.dashboard.summary.events.stop",
          anchors: "staff.dashboard.summary.events.anchors"
        },
        users: {
          ban: "staff.dashboard.summary.users.ban",
          timeout: "staff.dashboard.summary.users.timeout",
          unban: "staff.dashboard.summary.users.unban",
          incrementDroplets: "staff.dashboard.summary.users.increment_droplets",
          phoneVerification: "staff.dashboard.summary.users.phone_verification"
        }
      },
      team: {
        tickets: "staff.dashboard.team.tickets",
        reports: "staff.dashboard.team.reports"
      },
      users: {
        info: "staff.dashboard.users.info",
        rename: "staff.dashboard.users.rename",
        notesGet: "staff.dashboard.users.notes_get",
        notesSet: "staff.dashboard.users.notes_set",
        purchases: "staff.dashboard.users.purchases",
        ticketsHistory: "staff.dashboard.users.tickets_history",
        ticketsStats: "staff.dashboard.users.tickets_stats",
        appealsHistory: "staff.dashboard.users.appeals_history",
        timeout: "staff.dashboard.users.timeout",
        removeTimeout: "staff.dashboard.users.remove_timeout",
        ban: "staff.dashboard.users.ban",
        removeBan: "staff.dashboard.users.remove_ban",
        personalInformation: "staff.dashboard.users.personal_information",
        editEmail: "staff.dashboard.users.edit_email",
        disconnect: "staff.dashboard.users.disconnect",
        setDroplets: "staff.dashboard.users.set_droplets",
        phoneVerification: "staff.dashboard.users.phone_verification",
        removePicture: "staff.dashboard.users.remove_picture"
      },
      permissions: {
        get: "staff.dashboard.permissions.get",
        set: "staff.dashboard.permissions.set"
      },
      alliances: {
        search: "staff.dashboard.alliances.search",
        details: "staff.dashboard.alliances.details",
        members: "staff.dashboard.alliances.members",
        rename: "staff.dashboard.alliances.rename",
        leader: "staff.dashboard.alliances.leader",
        banAll: "staff.dashboard.alliances.ban_all",
        role: "staff.dashboard.alliances.role",
        removeMember: "staff.dashboard.alliances.remove_member"
      },
      auditLogs: {
        see: "staff.dashboard.audit_logs.see"
      },
      banAppeals: {
        see: "staff.dashboard.ban_appeals.see"
      },
      kpi: {
        tickets: "staff.dashboard.kpi.tickets"
      },
      storeManager: {
        frames: "staff.dashboard.store_manager.frames",
        fonts: "staff.dashboard.store_manager.fonts",
        styles: "staff.dashboard.store_manager.styles",
        badges: "staff.dashboard.store_manager.badges"
      },
      anticheat: {
        see: "staff.dashboard.anticheat.see"
      }
    },
    tickets: {
      assign: "staff.tickets.assign",
      closedToday: "staff.tickets.closed_today",
      openCount: "staff.tickets.open_count",
      translate: "staff.tickets.translate",
      setStatus: "staff.tickets.set_status",
      revert: "staff.tickets.revert",
      revertReview: "staff.tickets.revert_review"
    },
    appeals: {
      assign: "staff.appeals.assign",
      openCount: "staff.appeals.open_count",
      ticketsHistory: "staff.appeals.tickets_history",
      notes_get: "staff.appeals.notes_get",
      notes_set: "staff.appeals.notes_set",
      translate: "staff.appeals.translate",
      solve: "staff.appeals.solve"
    },
    tools: {
      selectArea: {
        timeout: "staff.tools.select_area.timeout",
        ban: "staff.tools.select_area.ban",
        clear: "staff.tools.select_area.clear",
        info: "staff.tools.select_area.info",
        phoneVerification: "staff.tools.select_area.phone_verification",
        reverse: "staff.tools.select_area.reverse",
        timelapse: "staff.tools.select_area.timelapse"
      },
      selectPixel: {
        timeout: "staff.tools.select_pixel.timeout",
        ban: "staff.tools.select_pixel.ban",
        seeRole: "staff.tools.select_pixel.see_role",
        seePunishment: "staff.tools.select_pixel.see_punishment"
      },
      autoPainter: {
        paint: "staff.tools.auto_painter.paint",
        transparent: "staff.tools.auto_painter.transparent",
        noCharges: "staff.tools.auto_painter.no_charges",
        asUser: "staff.tools.auto_painter.as_user",
        noSizeLimit: "staff.tools.auto_painter.no_size_limit"
      },
      wayback: "staff.tools.wayback"
    },
    ui: {
      themeDarkMode: "staff.ui.theme.dark_mode",
      tooglePixelArt: "staff.ui.toggle_pixel_art"
    },
    cosmetics: {
      viewCosmetics: "staff.cosmetics.view_cosmetics",
      manageCosmetics: "staff.cosmetics.manage_cosmetics",
      assignCosmetics: "staff.cosmetics.assign_cosmetics"
    }
  },
  bS = {
    tools: {
      wayback: {
        limit: 1e4
      }
    }
  },
  vS = {
    areaRadius: 250
  },
  le = {
    seasons: _S,
    regionSize: fS,
    refreshIntervalMs: pS,
    colors: mS,
    platforms: hS,
    products: gS,
    countries: wS,
    permissions: yS,
    settings: bS,
    moderation: vS
  },
  mt = le,
  ES = le.seasons,
  Xn = le.seasons.length - 1,
  SA = le.seasons[Xn].zoom,
  AA = le.seasons[Xn].tileSize,
  RA = le.permissions,
  TS = le.settings,
  IA = le.platforms.price.googlePlayBilling;

function NA(n) {
  return mt.countries[n - 1]
}

function xt(n) {
  return xt.map.get(n)
}(n => {
  n.sharedProducts = Object.entries(mt.products).map(([t, e]) => ({
    ...e,
    productId: t
  })).filter(t => "lookupKey" in t), n.map = OS(n.sharedProducts, t => t.lookupKey)
})(xt || (xt = {}));

function OS(n, t) {
  const e = new Map;
  for (const r in n) {
    const o = Reflect.get(n, r),
      i = t(o, r, n);
    e.set(i, o)
  }
  return e
}
class p extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}

function Sn(n, t) {
  const e = {};
  for (const r of n) {
    const o = t(r);
    let i = e[o];
    i ? i.push(r) : e[o] = [r]
  }
  return e
}

function DA(n, t) {
  const e = {};
  for (const r of n) {
    const o = t(r);
    e[o] = r
  }
  return e
}
const kS = 30 * ce.minute;
var Ge, qe;
class SS {
  constructor(t) {
    L(this, Ge, V(!0));
    L(this, qe, V(null));
    R(this, "lastHotspotRequestAt", 0);
    this.url = t
  }
  get online() {
    return M(w(this, Ge))
  }
  set online(t) {
    C(w(this, Ge), t, !0)
  }
  get serverTimeOffsetMs() {
    return M(w(this, qe))
  }
  set serverTimeOffsetMs(t) {
    C(w(this, qe), t, !0)
  }
  hasServerTimeEstimate() {
    return this.serverTimeOffsetMs !== null
  }
  getEstimatedServerNowMs() {
    const t = Date.now();
    return this.serverTimeOffsetMs === null ? t - 6e4 : t + this.serverTimeOffsetMs
  }
  clampWaybackTimestamp(t) {
    if (!Number.isFinite(t)) return 0;
    const e = Math.trunc(t);
    if (e <= 0) return 0;
    const r = Math.trunc(this.getEstimatedServerNowMs());
    return e > r ? r : e
  }
  updateServerTimeEstimate(t) {
    const e = t.headers.get("date");
    if (!e) return;
    const r = new Date(e).getTime();
    Number.isFinite(r) && (this.serverTimeOffsetMs = r - Date.now())
  }
  async paint(t) {
    const e = Sn(t, c => `t=(${c.tile[0]},${c.tile[1]}),s=${c.season}`),
      r = {
        season: t[0].season,
        tiles: Object.values(e).map(c => ({
          x: c[0].tile[0],
          y: c[0].tile[1],
          pixels: {
            x: c.map(u => u.pixel[0]),
            y: c.map(u => u.pixel[1]),
            colors: c.map(u => u.colorIdx)
          }
        }))
      },
      o = JSON.stringify(r),
      i = await Se.getHeaders(o),
      a = await this.request("/paint", {
        method: "POST",
        body: o,
        headers: i,
        credentials: "include"
      });
    if (a.status !== s.OK) {
      if (a.status === s.UNAUTHORIZED) throw new Error(Tn());
      if (a.status === s.FORBIDDEN) {
        if (a.headers.get("cf-mitigated") === "challenge") throw new Error(hn());
        const c = await a.json();
        if ((c == null ? void 0 : c.error) === "timeout") {
          const u = new Date(Date.now() + ((c == null ? void 0 : c.durationMs) ?? 0));
          throw new Error(On({
            until: u.toLocaleString()
          }))
        }
        if ((c == null ? void 0 : c.error) === "refresh") throw new Error(yn());
        if ((c == null ? void 0 : c.error) === "color-not-owned") throw new Error(wn());
        if ((c == null ? void 0 : c.error) === "event-pixel-present") throw new Error(pn());
        if ((c == null ? void 0 : c.error) === "challenge-required")
          if (c.tier) {
            if (await dn(c.tier)) return this.paint(t);
            throw new Error(At())
          } else console.error("Challenge required but no tier provided", c);
        me.refresh()
      } else throw new Error(d())
    }
  }
  async selectAreaClear(t, e) {
    return this.sendPaintRequests(t, (r, o, i) => `/staff/tools/select-area/clear/s${r}/pixel/${o}/${i}`, e)
  }
  async createReverseSession(t) {
    const e = await this.request("/staff/tools/select-area/reverse/session", {
      method: "POST",
      body: t.buffer,
      headers: {
        "Content-Type": "application/octet-stream"
      },
      credentials: "include"
    });
    if (e.status !== s.OK) throw new p(d(), e.status);
    return e.json()
  }
  async getReverseTimestamps(t, e = {}) {
    const {
      mode: r = "depth",
      beforeDepth: o,
      beforeTimestamp: i
    } = e, a = await this.request("/staff/tools/select-area/reverse/timestamps", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        beforeDepth: o,
        beforeTimestamp: i
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (a.status !== s.OK) throw new p(d(), a.status);
    return a.json()
  }
  async getReversePreview(t, e) {
    const {
      mode: r = "depth",
      snapshotDepth: o,
      timestamp: i
    } = e, a = await this.request("/staff/tools/select-area/reverse/preview", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        snapshotDepth: o,
        timestamp: i
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (a.status !== s.OK) throw new p(d(), a.status);
    return a.json()
  }
  async getReverseTimelapse(t, e) {
    const r = await this.request("/staff/tools/select-area/reverse/timelapse", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        paceMode: e.paceMode,
        fps: e.fps,
        durationSeconds: e.durationSeconds,
        maxFrameCount: e.maxFrameCount,
        beforeTimestamp: e.beforeTimestamp ?? 0
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (r.status === s.BAD_REQUEST) {
      const o = await r.json(),
        i = (o == null ? void 0 : o.error) ?? "";
      throw i === "timelapse_too_many_events" ? new p(QE(), s.BAD_REQUEST) : new p(typeof i == "string" && i ? i : d(), s.BAD_REQUEST)
    }
    if (r.status !== s.OK) throw new p(d(), r.status);
    return r.arrayBuffer()
  }
  async applyReverse(t, e) {
    const {
      mode: r = "depth",
      snapshotDepth: o,
      timestamp: i
    } = e, a = await this.request("/staff/tools/select-area/reverse/apply", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        snapshotDepth: o,
        timestamp: i
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (a.status !== s.OK) throw new p(d(), a.status);
    return a.json()
  }
  async sendPaintRequests(t, e, r, o) {
    const i = Sn(t, u => `t=(${u.tile[0]},${u.tile[1]}),s=${u.season}`),
      c = (await Promise.all(Object.values(i).map(async u => {
        const [_, f] = u[0].tile, l = u[0].season, b = {
          colors: u.map(x => x.colorIdx),
          coords: u.flatMap(x => x.pixel),
          csid: r
        }, m = JSON.stringify(b), y = e(l, _, f), O = await Se.getHeaders(m);
        return this.request(y, {
          method: "POST",
          body: m,
          headers: O,
          credentials: "include"
        })
      }))).filter(u => u.status !== s.OK);
    if (c.length) {
      const u = c[0];
      if (u.status === s.UNAUTHORIZED) throw new Error(Tn());
      if (u.status === s.FORBIDDEN) {
        if (u.headers.get("cf-mitigated") === "challenge") throw new Error(hn());
        const _ = await u.json();
        if ((_ == null ? void 0 : _.error) === "timeout") {
          const f = new Date(Date.now() + ((_ == null ? void 0 : _.durationMs) ?? 0));
          throw new Error(On({
            until: f.toLocaleString()
          }))
        }
        if ((_ == null ? void 0 : _.error) === "refresh") throw new Error(yn());
        if ((_ == null ? void 0 : _.error) === "color-not-owned") throw new Error(wn());
        if ((_ == null ? void 0 : _.error) === "event-pixel-present") throw new Error(pn());
        me.refresh()
      } else throw new Error(d())
    }
  }
  async adminAutoPainterPaint(t, e, r) {
    const o = AS(t),
      i = await RS(o),
      a = new FormData;
    a.append("fingerprint", e), a.append("season", o.season.toString()), a.append("px0", o.offsetX.toString()), a.append("py0", o.offsetY.toString()), a.append("width", o.width.toString()), a.append("height", o.height.toString()), a.append("pixels", t.length.toString()), a.append("bitmap", i, "auto-painter.png"), a.append("userId", r.toString());
    const c = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: a,
      credentials: "include"
    });
    if (c.status === s.FORBIDDEN) {
      const u = await c.json().catch(() => null);
      if (typeof(u == null ? void 0 : u.charges) == "number") throw new Error(Dv({
        charges: Math.floor(u.charges),
        pixels: t.length
      }));
      const _ = typeof(u == null ? void 0 : u.error) == "string" ? u.error.trim() : "";
      throw _ && _ !== "Forbidden" ? new Error(_) : new Error("Auto painter is restricted to administrators.")
    }
    if (c.status !== s.OK) throw new Error(d());
    return c.json()
  }
  async getPixelInfo({
    season: t,
    tile: [e, r],
    pixel: [o, i]
  }) {
    const a = new URLSearchParams;
    a.set("x", String(o)), a.set("y", String(i));
    const c = await this.request(`/s${t}/pixel/${e}/${r}?${a.toString()}`, {
      credentials: "include"
    });
    if (c.status !== s.OK) {
      const u = await c.text();
      throw new Error(Bd({
        err: u
      }))
    }
    return c.json()
  }
  async getPixelAreaInfo({
    season: t,
    tile: [e, r],
    p0: [o, i],
    p1: [a, c]
  }) {
    const u = await this.request(`/staff/tools/select-area/s${t}/${e}/${r}?x0=${o}&y0=${i}&x1=${a}&y1=${c}`, {
      credentials: "include"
    });
    if (u.status !== s.OK) {
      const y = await u.text();
      throw console.error("Error while fetching pixel area info", y), new Error(d())
    }
    const _ = await u.arrayBuffer(),
      f = new DataView(_),
      l = Math.floor(_.byteLength / 5),
      b = new Uint32Array(l),
      m = new Uint8Array(l);
    for (let y = 0; y < l; y++) {
      const O = y * 5;
      b[y] = f.getUint32(O, !0), m[y] = f.getUint8(O + 4)
    }
    return {
      paintedBy: b,
      colors: m
    }
  }
  async me() {
    const t = await this.request("/me", {
      credentials: "include"
    });
    if (t.status === s.OK) return await t.json()
  }
  async meEmail() {
    const t = await this.request("/me/email", {
      credentials: "include"
    });
    if (t.status === s.OK) return (await t.json()).email
  }
  async logout() {
    const t = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new Error(await t.text());
    return await t.json()
  }
  async driveStatus() {
    const t = await this.request("/drive/status", {
      credentials: "include"
    });
    return t.status !== s.OK ? !1 : !!(await t.json()).connected
  }
  async driveConnect(t) {
    const e = await this.request("/drive/connect", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        code: t
      })
    });
    if (e.status !== s.OK) throw new Error(`drive connect failed: ${e.status}`);
    return e.json()
  }
  async driveToken() {
    const t = await this.request("/drive/token", {
      credentials: "include",
      throwOnStatus: !1
    });
    if (t.status === s.CONFLICT) return null;
    if (t.status !== s.OK) throw new Error(`drive token failed: ${t.status}`);
    return t.json()
  }
  async driveDisconnect() {
    await this.request("/drive/disconnect", {
      method: "POST",
      credentials: "include",
      throwOnStatus: !1
    })
  }
  async createEmbeddedCheckout(t) {
    const e = await this.request("/payment/create-checkout-session", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        lookup_key: t
      })
    });
    if (e.status === s.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(fn());
    if (e.status !== s.OK) throw new Error(await e.text());
    return e.json()
  }
  async refreshStripeSession(t) {
    await this.request(`/payment/refresh-session/${t}`, {
      method: "POST",
      credentials: "include"
    })
  }
  async refreshFastspringSession(t) {
    const e = await this.request(`/payment/fastspring/refresh-session/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (!e.ok) throw new Error(`fastspring refresh failed: ${e.status}`);
    return await e.json()
  }
  async getLastFastspringOrder() {
    const t = await this.request("/payment/fastspring/orders/last", {
      credentials: "include"
    });
    if (t.status === s.NOT_FOUND) return null;
    if (!t.ok) throw new Error(`Failed to get last FastSpring order: ${t.status} ${t.statusText}`);
    return await t.json()
  }
  async markFastspringOrderAsRead(t) {
    const e = await this.request(`/payment/fastspring/orders/${t}/mark-as-read`, {
      method: "PATCH",
      credentials: "include"
    });
    if (!e.ok) throw new Error(`Failed to update FastSpring order: ${e.status} ${e.statusText}`)
  }
  async getOtpCooldown() {
    const t = await this.request("/anticheat/otp/cooldown", {
      credentials: "include"
    });
    if (t.status !== s.OK) throw new Error(d());
    return await t.json()
  }
  async sendOtp(t) {
    const e = await this.request("/anticheat/otp/send", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        phone: t
      }),
      throwOnStatus: !1
    });
    if (e.status === s.BAD_REQUEST) throw new Error(Jw());
    if (e.status === s.CONFLICT) throw new Error(nE());
    if (e.status === s.FORBIDDEN) throw new Error(iv());
    if (e.status === s.TOO_MANY_REQUESTS) throw new Error(bn());
    if (e.status === s.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(mE());
    if (e.status === s.LOCKED) throw new Error(v0());
    if (e.status === s.UNPROCESSABLE_ENTITY) throw new Error(ly());
    if (e.status === s.NOT_ACCEPTABLE) throw new Error(x0());
    if (e.status === s.PRECONDITION_FAILED) throw new Error(rl());
    if (e.status !== s.OK) throw new Error(d());
    return await e.json()
  }
  async verifyChallenge(t) {
    let e;
    switch (t.type) {
      case "pow":
        e = {
          code: t.challengeId,
          nonce: t.nonce
        };
        break;
      case "captcha":
        e = {
          code: t.sessionId
        };
        break;
      case "otp":
        e = {
          code: t.code
        }
    }
    const r = await this.request("/anticheat/challenge/verify", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(e),
      headers: {
        "x-fp": await Lt()
      }
    });
    if (t.type === "otp") {
      if (r.status === s.GONE) throw new Error(d_());
      if (r.status === s.BAD_REQUEST) throw new Error(fw());
      if (r.status === s.TOO_MANY_REQUESTS) throw new Error(bn());
      if (r.status !== s.OK) throw new Error(d())
    } else {
      if (r.status === s.BAD_REQUEST) throw new Error(ew());
      if (r.status !== s.OK) throw new Error(d())
    }
  }
  async updateMe(t) {
    const e = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === s.BAD_REQUEST) {
      const r = await e.json(),
        o = (r == null ? void 0 : r.error) ?? "";
      if (o === "invalid_name") throw new Error(gn());
      if (o === "invalid_discord") throw new Error(Sw());
      if (typeof o == "string" && o.startsWith("name_change_cooldown:")) {
        const i = parseInt(o.split(":")[1] ?? "0", 10);
        throw new Error(Pb({
          days: i
        }))
      }
      throw new Error(r == null ? void 0 : r.error)
    } else if (e.status !== s.OK) throw new Error(d())
  }
  async deleteMe(t) {
    const e = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: t
      })
    });
    if (e.status === s.BAD_REQUEST) throw new Error(YT());
    if (e.status !== s.OK) throw new Error(d())
  }
  async favoriteLocation(t) {
    const e = await this.request("/favorite-location", {
      method: "POST",
      body: JSON.stringify({
        latitude: t[0],
        longitude: t[1]
      }),
      credentials: "include"
    });
    if (e.status === s.FORBIDDEN) throw new Error(wv());
    if (e.status !== s.OK) throw new Error(d())
  }
  async deleteFavoriteLocation(t) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: t
        }),
        credentials: "include"
      })).status !== s.OK) throw new Error(d())
  }
  async updateFavoriteLocation(t, e) {
    const r = await this.request("/favorite-location/update", {
      method: "POST",
      body: JSON.stringify({
        id: t,
        name: e
      }),
      credentials: "include"
    });
    if (r.status === s.BAD_REQUEST) throw new Error($y());
    if (r.status !== s.OK) throw new Error(d())
  }
  async leaderboardPlayers(t) {
    const e = await this.request(`/leaderboard/player/${t}`);
    if (e.status !== s.OK) throw new Error(de());
    return e.json()
  }
  async leaderboardAlliances(t) {
    const e = await this.request(`/leaderboard/alliance/${t}`);
    if (e.status !== s.OK) throw new Error(de());
    return e.json()
  }
  async leaderboardRegions(t, e = 0) {
    const r = await this.request(`/leaderboard/region/${t}/${e}`);
    if (r.status === s.OK) return r.json();
    throw new Error(de())
  }
  async leaderboardRegionPlayers(t, e) {
    const r = await this.request(`/leaderboard/region/players/${t}/${e}`);
    if (r.status === s.OK) return r.json();
    throw new Error(de())
  }
  async leaderboardRegionAlliances(t, e) {
    const r = await this.request(`/leaderboard/region/alliances/${t}/${e}`);
    if (r.status === s.OK) return r.json();
    throw new Error(de())
  }
  async leaderboardCountries(t) {
    const e = await this.request(`/leaderboard/country/${t}`, {
      credentials: "include"
    });
    if (e.status === s.OK) return e.json();
    throw new Error(de())
  }
  refreshHotspotsIfStale() {
    Date.now() - this.lastHotspotRequestAt < kS || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
      credentials: "include",
      keepalive: !0,
      throwOnStatus: !1
    }).catch(() => {
      this.lastHotspotRequestAt = 0
    }))
  }
  async getMapHotspots() {
    const t = await this.request("/map/hotspots", {
      credentials: "include"
    });
    return t.status !== 200 ? [] : (this.lastHotspotRequestAt = Date.now(), t.json())
  }
  async getRandomTile(t) {
    const e = await this.request(`/s${t}/tile/random`);
    if (e.status !== s.OK) throw new Error(d());
    return e.json()
  }
  async purchase(t) {
    const e = await this.request("/purchase", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        product: t
      })
    });
    if (e.status !== s.OK) throw e.status === s.NOT_FOUND ? new Error(mn()) : e.status === s.FORBIDDEN ? new Error(En()) : e.status === s.CONFLICT ? new Error(vn()) : new Error(d())
  }
  async getAlliance() {
    const t = await this.request("/alliance", {
      credentials: "include"
    });
    if (t.status === s.OK) return t.json();
    if (t.status === s.NOT_FOUND) return;
    throw new Error(d())
  }
  async createAlliance(t) {
    const e = await this.request("/alliance", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: t
      })
    });
    if (e.status === s.OK) return e.json();
    if (e.status === s.BAD_REQUEST) {
      const r = await e.json();
      throw r.error === "max_characters" ? new Error(js()) : r.error === "name_taken" ? new Error(ks()) : r.error == "empty_name" ? new Error(Js()) : new Error(d())
    } else throw e.status === s.FORBIDDEN ? new Error(wO()) : new Error(d())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== s.OK) throw new Error(d())
  }
  async updateAllianceDescription(t) {
    const e = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: t
      })
    });
    if (e.status !== s.OK) throw e.status === s.FORBIDDEN ? new Error(_e()) : e.status === s.BAD_REQUEST ? new Error(Zd()) : new Error(d())
  }
  async updateAllianceHeadquarters(t, e) {
    const r = await this.request("/alliance/update-headquarters", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        latitude: t,
        longitude: e
      })
    });
    if (r.status !== s.OK) throw r.status === s.FORBIDDEN ? new Error(_e()) : new Error(d())
  }
  async allianceLeaderboard(t) {
    const e = await this.request(`/alliance/leaderboard/${t}`, {
      credentials: "include"
    });
    if (e.status === s.OK) return e.json();
    throw e.status === s.FORBIDDEN ? new Error(_e()) : new Error(de())
  }
  async getAllianceInvites() {
    const t = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (t.status === s.OK) return t.json();
    throw t.status === s.FORBIDDEN ? new Error(_e()) : new Error(d())
  }
  async joinAlliance(t) {
    switch ((await this.request(`/alliance/join/${t}`, {
        credentials: "include"
      })).status) {
      case s.OK:
        return "success";
      case s.ALREADY_REPORTED:
        return "in-another-alliance";
      case s.UNAUTHORIZED:
        return "not-logged-in";
      case s.FORBIDDEN:
        return "banned";
      case s.BAD_REQUEST:
      case s.NOT_FOUND:
        return "invalid-invite";
      default:
        return "error"
    }
  }
  async getAllianceMembers(t) {
    const e = await this.request(`/alliance/members/${t}`, {
      credentials: "include"
    });
    if (e.status === s.OK) return e.json();
    throw new Error(d())
  }
  async getAllianceBannedMembers(t) {
    const e = await this.request(`/alliance/members/banned/${t}`, {
      credentials: "include"
    });
    if (e.status === s.OK) return e.json();
    throw new Error(d())
  }
  async getAllianceById(t) {
    const e = await this.request(`/staff/dashboard/alliances/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === s.NOT_FOUND) return;
    if (e.status !== s.OK) throw new p(d(), e.status);
    const r = await e.json();
    return {
      id: Number(r.id),
      name: String(r.name),
      pixelsPainted: Number((r == null ? void 0 : r.pixels_painted) ?? 0)
    }
  }
  async searchAlliance(t) {
    const e = new URLSearchParams({
        q: t
      }),
      r = await this.request(`/staff/dashboard/alliances/search?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== s.OK) throw new p(d(), r.status);
    const o = await r.json();
    return (Array.isArray(o) ? o : []).map(i => ({
      id: Number(i.id),
      name: String(i.name ?? ""),
      pixelsPainted: Number((i == null ? void 0 : i.pixels_painted) ?? 0)
    }))
  }
  async searchAlliances(t) {
    return this.searchAlliance(t)
  }
  async getAllianceFull(t) {
    const e = await this.request(`/staff/dashboard/alliances/${t}/full`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === s.NOT_FOUND) return null;
    if (e.status !== s.OK) throw new p(d(), e.status);
    const r = await e.json(),
      o = Array.isArray(r == null ? void 0 : r.members) ? r.members : [];
    return {
      id: Number(r == null ? void 0 : r.id),
      name: String((r == null ? void 0 : r.name) ?? ""),
      description: (r == null ? void 0 : r.description) ?? null,
      ownerId: Number((r == null ? void 0 : r.ownerId) ?? (r == null ? void 0 : r.created_by)),
      ownerName: (r == null ? void 0 : r.ownerName) ?? null,
      hqName: (r == null ? void 0 : r.hqName) ?? null,
      hqLatitude: (r == null ? void 0 : r.hqLatitude) ?? (r == null ? void 0 : r.hq_latitude) ?? null,
      hqLongitude: (r == null ? void 0 : r.hqLongitude) ?? (r == null ? void 0 : r.hq_longitude) ?? null,
      pixelsPainted: Number((r == null ? void 0 : r.pixelsPainted) ?? (r == null ? void 0 : r.pixels_painted) ?? 0),
      membersCount: Number((r == null ? void 0 : r.membersCount) ?? o.length),
      members: o.map(i => ({
        id: Number(i == null ? void 0 : i.id),
        name: String((i == null ? void 0 : i.name) ?? `#${i==null?void 0:i.id}`),
        picture: (i == null ? void 0 : i.picture) ?? null,
        pixelsPainted: Number((i == null ? void 0 : i.pixelsPainted) ?? (i == null ? void 0 : i.pixels_painted) ?? 0),
        lastPixelLatitude: (i == null ? void 0 : i.lastPixelLatitude) ?? null,
        lastPixelLongitude: (i == null ? void 0 : i.lastPixelLongitude) ?? null,
        role: (i == null ? void 0 : i.alliance_role) === "admin" || (i == null ? void 0 : i.role) === "admin" ? "admin" : "member"
      }))
    }
  }
  async getAdminAllianceMembers(t, e) {
    const r = new URLSearchParams({
        page: String(e.page),
        pageSize: String(e.pageSize)
      }),
      o = await this.request(`/staff/dashboard/alliances/${t}/members?${r.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (o.status === s.NOT_FOUND) return {
      members: [],
      total: 0
    };
    if (o.status !== s.OK) throw new p(d(), o.status);
    const i = await o.json(),
      a = Array.isArray(i == null ? void 0 : i.members) ? i.members : [];
    return {
      members: a.map(c => ({
        id: Number(c == null ? void 0 : c.id),
        name: String((c == null ? void 0 : c.name) ?? `#${c==null?void 0:c.id}`),
        picture: (c == null ? void 0 : c.picture) ?? null,
        pixelsPainted: Number((c == null ? void 0 : c.pixelsPainted) ?? (c == null ? void 0 : c.pixels_painted) ?? 0),
        lastPixelLatitude: (c == null ? void 0 : c.lastPixelLatitude) ?? null,
        lastPixelLongitude: (c == null ? void 0 : c.lastPixelLongitude) ?? null,
        role: (c == null ? void 0 : c.alliance_role) === "admin" || (c == null ? void 0 : c.role) === "admin" ? "admin" : "member"
      })),
      total: Number((i == null ? void 0 : i.total) ?? a.length)
    }
  }
  async renameAlliance(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/rename`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: e
      })
    });
    if (r.status === s.BAD_REQUEST) {
      const o = await r.json().catch(() => ({}));
      throw new Error((o == null ? void 0 : o.error) ?? d())
    } else if (r.status !== s.OK) throw new p(d(), r.status)
  }
  async changeAllianceLeader(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/leader`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        newLeaderUserId: e
      })
    });
    if (r.status === s.BAD_REQUEST) {
      const o = await r.json();
      throw (o == null ? void 0 : o.error) === "user_not_in_alliance" ? new Error(Ty()) : new Error(d())
    } else if (r.status !== s.OK) throw new p(d(), r.status)
  }
  async banAllAllianceMembers(t, e, r) {
    const o = await this.request(`/staff/dashboard/alliances/${t}/ban-all`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        reason: e,
        notes: r
      })
    });
    if (o.status !== s.OK) throw new p(d(), o.status)
  }
  async setAllianceMemberRole(t, e, r) {
    const o = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: r
      })
    });
    if (o.status !== s.OK) throw new p(d(), o.status)
  }
  async removeAllianceMember(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (r.status !== s.OK) throw new p(d(), r.status)
  }
  async giveAllianceAdmin(t) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== s.OK) throw e.status === s.FORBIDDEN ? new Error(_e()) : new Error(d())
  }
  async banAllianceUser(t) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== s.OK) throw e.status === s.FORBIDDEN ? new Error(_e()) : new Error(d())
  }
  async equipFlag(t) {
    if ((await this.request(`/flag/equip/${t}`, {
        method: "POST",
        credentials: "include"
      })).status !== s.OK) throw new Error(d())
  }
  async getMyProfilePictures() {
    const t = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (t.status !== s.OK) throw new Error(d());
    return t.json()
  }
  async changeProfilePicture(t) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: t
        })
      })).status !== s.OK) throw new Error(d())
  }
  async unbanAllianceUser(t) {
    const e = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== s.OK) throw e.status === s.FORBIDDEN ? new Error(_e()) : new Error(d())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async getPlayAccountId() {
    const t = await this.request("/payment/play/account-id", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new Error(d());
    return t.json()
  }
  async verifyPlayPurchase(t) {
    const e = await this.request("/payment/play/verify", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(t)
    });
    if (e.status === s.BAD_REQUEST) {
      const r = await e.json().catch(() => ({}));
      throw new Error((r == null ? void 0 : r.error) ?? "Invalid Play purchase")
    }
    if (e.status === s.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(fn());
    if (e.status !== s.OK) throw new Error(d());
    return e.json()
  }
  async verifyPendingPlayPurchases() {
    const t = await this.request("/payment/play/verify-pending", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new Error(d());
    return t.json()
  }
  async getPlayClaimStatus(t) {
    const e = await this.request(`/payment/play/claim/${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === s.NOT_FOUND) return {
      status: "unknown",
      droplets: 0
    };
    if (e.status !== s.OK) throw new Error(d());
    return e.json()
  }
  async listPlayPurchaseHistory() {
    const t = await this.request("/payment/play/history", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new Error(d());
    return t.json()
  }
  async getModeratorTickets() {
    const t = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    const e = await t.json();
    for (const r of e.tickets) r.reports.sort((o, i) => kn[o.reason] - kn[i.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const t = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    return t.json()
  }
  async getOpenTicketsCount() {
    const t = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    const {
      tickets: e
    } = await t.json();
    return e
  }
  async assignNewTickets() {
    const t = await this.request("/staff/tickets/assign", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    return t.json()
  }
  async setTicketStatus(t, e, r, o, i) {
    const a = await this.request("/staff/tickets/set-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: t,
        status: e,
        selectedReportId: r,
        assignedReason: o,
        ignoreReason: i
      })
    });
    if (a.status !== s.OK && a.status !== s.BAD_REQUEST) throw new p(d(), a.status)
  }
  async getLastResolvedTicket() {
    const t = await this.request("/staff/tickets/reversals/last-resolved", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    return (await t.json()).ticket
  }
  async getTicketReversalTicketInfo(t) {
    const e = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== s.OK) throw new p(d(), e.status);
    return (await e.json()).ticket
  }
  async createTicketReversal(t) {
    const e = await this.request("/staff/tickets/reversals", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === s.CONFLICT) {
      const r = await e.json().catch(() => ({}));
      throw (r == null ? void 0 : r.error) === "reversal_already_pending" ? new p(jk(), s.CONFLICT) : new p(d(), s.CONFLICT)
    }
    if (e.status !== s.OK) throw new p(d(), e.status);
    return e.json()
  }
  async listTicketReversals(t = {}) {
    const e = new URLSearchParams;
    t.status && e.set("status", t.status), t.page != null && e.set("page", String(t.page)), t.pageSize != null && e.set("pageSize", String(t.pageSize));
    const r = `/staff/tickets/reversals${e.toString()?`?${e.toString()}`:""}`,
      o = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (o.status !== s.OK) throw new p(d(), o.status);
    return (await o.json()).reversals ?? []
  }
  async getTicketReversal(t) {
    const e = await this.request(`/staff/tickets/reversals/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== s.OK) throw new p(d(), e.status);
    return (await e.json()).reversal
  }
  async reviewTicketReversal(t, e, r) {
    const o = await this.request(`/staff/tickets/reversals/${t}/review`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        decision: e,
        notes: r
      })
    });
    if (o.status === s.FORBIDDEN) throw new p(Jk(), s.FORBIDDEN);
    if (o.status === s.CONFLICT) throw new p(lS(), s.CONFLICT);
    if (o.status !== s.OK) throw new p(d(), o.status)
  }
  async request(t, e) {
    var a;
    let r;
    e = {
      credentials: "include",
      ...e
    };
    try {
      r = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    } catch (c) {
      throw console.error("Fetch error:", c), this.online = !1, new Error(bu(), {
        cause: c
      })
    }
    if (r.status === s.FORBIDDEN && r.headers.get("x-block-reason") === "tor") throw new Error(CT());
    const o = ((a = r.headers.get("cf-mitigated")) == null ? void 0 : a.toLowerCase()) === "challenge";
    if (r.status === 403 && o) {
      if (Se.setCfLikelyAutomated(!0), !await Hn()) throw new Error(At());
      r = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === s.TOO_MANY_REQUESTS) throw new Error(fk());
      if (r.status === s.REQUEST_TIMEOUT) throw new Error(FE());
      if (r.status === s.SERVICE_UNAVAILABLE) throw new Error(_T())
    }
    return r
  }
  async getOpenTicketsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    return t.json()
  }
  async getOpenReportsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    return t.json()
  }
  async getBanAppealStats(t, e) {
    const r = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== s.OK) throw new p(d(), r.status);
    const o = await r.json();
    return {
      items: o.items ?? [],
      globals: o.globals
    }
  }
  async getClosedTicketsByMod(t, e) {
    const r = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== s.OK) throw new p(d(), r.status);
    return (await r.json()).items.map(i => ({
      ...i,
      suspensionRate: (i.ban + i.timeout) / i.total
    }))
  }
  async getClosedReportsByMod(t, e) {
    const r = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== s.OK) throw new p(d(), r.status);
    return (await r.json()).items.map(i => ({
      ...i,
      suspensionRate: (i.ban + i.timeout) / i.total
    }))
  }
  async getMultipleUsersInfoById(t) {
    const e = await this.request("/staff/tools/select-area/users", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t
      })
    });
    if (e.status !== s.OK) throw new p(d(), e.status);
    return e.json()
  }
  async getUserInfoFull(t) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== s.NOT_FOUND) {
      if (e.status !== s.OK) throw new p(d(), e.status);
      return e.json()
    }
  }
  async getUserInfoByEmail(t) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== s.NOT_FOUND) {
      if (e.status !== s.OK) throw new p(d(), e.status);
      return e.json()
    }
  }
  async removePunishment(t, e) {
    const r = e ? "/staff/dashboard/users/remove-ban" : "/staff/dashboard/users/remove-timeout",
      o = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
    if (o.status !== s.OK) throw new p(d(), o.status)
  }
  async getUserPunishments(t) {
    const e = await this.request(`/staff/dashboard/users/punishments?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== s.OK) throw new p(d(), e.status);
    return (await e.json()).punishments ?? []
  }
  async getPunishmentTicket(t) {
    const e = await this.request(`/staff/dashboard/users/punishment-ticket?ticketId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== s.OK) throw new p(d(), e.status);
    return (await e.json()).ticket
  }
  async overturnPunishment(t) {
    const e = await this.request("/staff/dashboard/users/overturn-punishment", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        punishmentId: t
      })
    });
    if (e.status !== s.OK) throw new p(d(), e.status)
  }
  async getUserNotes(t, e) {
    const r = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      o = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (o.status !== s.OK) throw new p(d(), o.status);
    return o.json()
  }
  async addUserNote(t, e, r) {
    const o = r == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      i = await this.request(o, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          note: e
        })
      });
    if (i.status !== s.OK) throw new p(d(), i.status)
  }
  async getUserPermissions(t) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== s.OK) throw new p(d(), e.status);
    return e.json()
  }
  async setUserPermissions(t, e) {
    const r = await this.request("/staff/dashboard/permissions/set", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        permissions: Array.from(e)
      })
    });
    if (r.status !== s.OK) throw new p(d(), r.status);
    const o = await r.json();
    return Array.isArray(o == null ? void 0 : o.permissions) ? o.permissions : []
  }
  async getUserPurchases(t) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== s.OK) throw new p(d(), e.status);
    const r = await e.json();
    return (Array.isArray(r == null ? void 0 : r.purchases) ? r.purchases : []).map(i => {
      const a = i.is_dollar ?? i.isDollar ?? i.currency ?? i.Currency ?? 0;
      let c;
      if (typeof a == "string") {
        const l = a.toLowerCase();
        c = l === "usd" || l === "dollar" || l === "true"
      } else typeof a == "number" ? c = a !== 0 : c = !!a;
      const u = typeof i.createdAt == "string" ? i.createdAt : i.CreatedAt ? new Date(i.CreatedAt).toISOString() : "",
        _ = i.product_variant ?? i.productVariant,
        f = _ == null || _ === "" ? null : Number(_);
      return {
        product_name: String(i.productName ?? i.product_name ?? ""),
        amount: Number(i.amount ?? 0),
        price: Number(i.price ?? 0),
        is_dollar: c,
        created_at: u,
        product_variant: Number.isInteger(f) ? f : null
      }
    })
  }
  async postSetUserDroplets(t, e) {
    const r = await this.request("/staff/dashboard/users/set-user-droplets", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        droplets: e
      })
    });
    if (r.status !== s.OK) throw new p(d(), r.status)
  }
  async postAdminRenameUser(t, e, r) {
    const o = await this.request("/staff/dashboard/users/rename", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        newName: e,
        oldName: r
      })
    });
    if (o.status === s.BAD_REQUEST) {
      const i = await o.json(),
        a = (i == null ? void 0 : i.error) ?? "";
      throw a === "invalid_name" ? new p(gn(), s.BAD_REQUEST) : new p(typeof a == "string" && a ? a : d(), s.BAD_REQUEST)
    }
    if (o.status !== s.OK) throw new p(d(), o.status)
  }
  async postAdminChangeUserEmail(t, e) {
    const r = await this.request("/staff/dashboard/users/email", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        email: e
      })
    });
    if (r.status === s.BAD_REQUEST) {
      const o = await r.json(),
        i = (o == null ? void 0 : o.error) ?? "";
      throw i === "email_required" || i === "invalid_email" ? new p(Sd(), s.BAD_REQUEST) : new p(typeof i == "string" && i ? i : d(), s.BAD_REQUEST)
    }
    if (r.status === s.CONFLICT) {
      const o = await r.json();
      if (((o == null ? void 0 : o.error) ?? "") === "email_already_in_use") {
        const a = new p(typeof(o == null ? void 0 : o.userId) == "number" ? fd({
          userId: o.userId
        }) : ed(), s.CONFLICT);
        throw typeof(o == null ? void 0 : o.userId) == "number" && (a.userId = o.userId), a
      }
      throw new p(d(), s.CONFLICT)
    }
    if (r.status === s.NOT_FOUND) throw new p("User not found.", s.NOT_FOUND);
    if (r.status !== s.OK) throw new p(d(), r.status)
  }
  async getAdminUserProfilePictures(t) {
    const e = await this.request(`/staff/dashboard/users/profile-pictures?userId=${t}`, {
      credentials: "include"
    });
    if (e.status !== s.OK) throw new p(d(), e.status);
    return e.json()
  }
  async postAdminRemoveUserPicture(t) {
    const e = await this.request("/staff/dashboard/users/remove-picture", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        pictureId: t
      })
    });
    if (e.status !== s.OK) throw new p(d(), e.status)
  }
  async getUserTickets(t, e) {
    if (e === "appeals" && (t.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
    const r = new URLSearchParams;
    r.set("userId", String(t.userId)), r.set("kind", String(t.kind)), r.set("page", String(t.page ?? 0)), r.set("pageSize", String(t.pageSize ?? 20)), t.sortBy && r.set("sortBy", t.sortBy), t.sortDir && r.set("sortDir", t.sortDir), t.status && r.set("status", t.status), e === "appeals" && r.set("appealId", String(t.appealId));
    const o = e === "appeals" ? `/staff/appeals/tickets?${r.toString()}` : `/staff/dashboard/users/tickets?${r.toString()}`,
      i = await this.request(o, {
        method: "GET",
        credentials: "include"
      });
    if (i.status !== s.OK) throw new p(d(), i.status);
    const a = await i.json();
    return Array.isArray(a == null ? void 0 : a.tickets) ? a.tickets : []
  }
  async getUserAppeals(t) {
    const e = new URLSearchParams;
    e.set("userId", String(t.userId)), e.set("kind", t.kind), t.page !== void 0 && e.set("page", String(t.page)), t.pageSize !== void 0 && e.set("pageSize", String(t.pageSize)), t.sortBy && e.set("sortBy", t.sortBy), t.sortDir && e.set("sortDir", t.sortDir);
    const r = await this.request(`/staff/dashboard/users/appeals?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== s.OK) throw new p(d(), r.status);
    const o = await r.json();
    return Array.isArray(o == null ? void 0 : o.appeals) ? o.appeals : []
  }
  async getModerationTranslate(t, e) {
    const r = e == "tickets" ? "/staff/tickets/translate" : "/staff/appeals/translate",
      o = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          text: t
        })
      });
    if (o.status !== s.OK) throw new p(d(), o.status);
    const i = await o.json();
    return i == null ? void 0 : i.translation
  }
  mapTicketsToReportRows(t, e) {
    var o, i, a, c, u;
    const r = [];
    for (const _ of t) {
      const f = _.status ?? "open";
      if (e === "received") {
        for (const l of _.reports) r.push({
          id: String(l.id),
          ticketId: String(_.id),
          createdAt: l.createdAt ?? _.createdAt,
          byUser: {
            id: Number(l.reportedBy),
            name: String(l.reportedByName ?? l.reportedBy),
            picture: l.reportedByPicture ?? null
          },
          reason: String(l.reason),
          status: f
        });
        continue
      }
      if (e === "sent") {
        for (const l of _.reports) r.push({
          id: String(l.id),
          ticketId: String(_.id),
          createdAt: l.createdAt ?? _.createdAt,
          toUser: {
            id: Number(_.reportedUser.id),
            name: String(_.reportedUser.name),
            picture: _.reportedUser.picture ?? null
          },
          reason: String(l.reason),
          status: f
        });
        continue
      }
      r.push({
        id: String(_.id),
        ticketId: String(_.id),
        createdAt: _.createdAt,
        handledBy: _.status && _.status !== "open" ? {
          id: ((o = _.handledBy) == null ? void 0 : o.id) ?? 0,
          name: ((i = _.handledBy) == null ? void 0 : i.name) ?? "Moderator",
          picture: ((a = _.handledBy) == null ? void 0 : a.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((u = (c = _.reports) == null ? void 0 : c[0]) == null ? void 0 : u.reason) ?? "other"),
        status: f
      })
    }
    return r.sort((_, f) => new Date(f.createdAt).getTime() - new Date(_.createdAt).getTime()), r
  }
  async getModeratorClosedTicketStats(t) {
    const e = new URLSearchParams({
        id: String(t)
      }).toString(),
      r = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== s.OK) throw new p(d(), r.status);
    return r.json()
  }
  async unlinkDiscord() {
    const t = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== s.NO_CONTENT) throw new p(d(), t.status)
  }
  async deleteSessions() {
    const t = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status)
  }
  async deleteAllUserSessions(t) {
    const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== s.OK) throw new p(d(), e.status)
  }
  async banUsers(t, e, r) {
    const o = await this.request("/staff/dashboard/summary/users/ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: r
      })
    });
    if (o.status !== s.OK) throw new p(d(), o.status)
  }
  async timeoutUsers(t, e, r) {
    const o = await this.request("/staff/dashboard/summary/users/timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: r
      })
    });
    if (o.status !== s.OK) throw new p(d(), o.status)
  }
  async incrementUsersDroplets(t, e, r) {
    const o = await this.request("/staff/dashboard/summary/users/increment-droplet", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        delta: e,
        notes: r
      })
    });
    if (o.status !== s.OK) throw new p(d(), o.status)
  }
  async postUnbanUsers(t, e) {
    const r = await this.request("/staff/dashboard/summary/users/unban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        notes: e
      })
    });
    if (r.status !== s.OK) throw new p(d(), r.status)
  }
  async postBulkPhoneVerification(t, e) {
    const r = await this.request("/staff/dashboard/summary/users/phone-verification", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        notes: e
      })
    });
    if (r.status !== s.OK) throw new p(d(), r.status);
    return await r.json()
  }
  async getAuditLogs(t) {
    const e = new URLSearchParams;
    t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
    const r = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== s.OK) throw new p(d(), r.status);
    return r.json()
  }
  async postUsersSuspend(t, e, r) {
    let o;
    switch (e) {
      case "dashboard":
        o = `/staff/dashboard/users/${r}`;
        break;
      case "select-area":
        o = `/staff/tools/select-area/${r}`;
        break;
      case "select-pixel":
      default:
        o = `/staff/tools/select-pixel/${r}`;
        break
    }
    if ((await this.request(o, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      })).status !== s.OK) throw new Error(d())
  }
  async postSelectAreaPhoneVerification(t, e = "") {
    const r = await this.request("/staff/tools/select-area/phone-verification", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        notes: e
      })
    });
    if (r.status !== s.OK) throw new p(d(), r.status);
    return await r.json()
  }
  async postDashboardUserPhoneVerification(t, e = "") {
    const r = await this.request("/staff/dashboard/users/phone-verification", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: [t],
        notes: e
      })
    });
    if (r.status !== s.OK) throw new p(d(), r.status);
    return await r.json()
  }
  async postReportUserName(t) {
    const e = await this.request("/report/user/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t
      })
    });
    if (e.status !== s.OK) throw new p(d(), e.status)
  }
  async postReportAllianceName(t) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: t
      })
    });
    if (e.status !== s.OK) throw new p(d(), e.status);
    return e.json()
  }
  async submitBanAppeal(t, e) {
    const r = JSON.stringify(e ? {
        message: t,
        ticketId: e
      } : {
        message: t
      }),
      o = await Se.getHeaders(r),
      i = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: r,
        headers: o
      });
    if (i.status === s.FORBIDDEN) {
      const a = await i.json();
      if ((a == null ? void 0 : a.error) === "challenge-required" && a.tier) {
        if (await dn(a.tier)) return this.submitBanAppeal(t, e);
        throw new p(At(), i.status)
      }
    }
    if (i.status !== s.OK && i.status !== s.ALREADY_REPORTED) throw new p(d(), i.status);
    return i.status
  }
  async getOpenAppeals() {
    const t = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    return t.json()
  }
  async postSolveAppeal(t, e) {
    const r = await this.request(`/staff/appeals/${t}/handle`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        approved: e
      })
    });
    if (r.status !== s.OK) throw new p(d(), r.status);
    return await r.json()
  }
  async getUserLastAppeal() {
    const t = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async getMySuspensionDetails() {
    const t = await this.request("/me/suspension", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    const e = await t.json();
    return !(e != null && e.active) || !Array.isArray(e == null ? void 0 : e.punishments) ? null : {
      punishments: e.punishments.map(o => ({
        kind: (o == null ? void 0 : o.kind) === "ban" ? "ban" : "timeout",
        reason: o == null ? void 0 : o.reason,
        timeoutUntil: typeof(o == null ? void 0 : o.timeoutUntil) == "string" ? o.timeoutUntil : void 0,
        reportedLatitude: typeof(o == null ? void 0 : o.reportedLatitude) == "number" ? o.reportedLatitude : void 0,
        reportedLongitude: typeof(o == null ? void 0 : o.reportedLongitude) == "number" ? o.reportedLongitude : void 0,
        zoom: typeof(o == null ? void 0 : o.zoom) == "number" ? o.zoom : void 0,
        appealSubmitted: (o == null ? void 0 : o.appealSubmitted) === !0,
        ticketId: typeof(o == null ? void 0 : o.ticketId) == "string" ? o.ticketId : void 0
      }))
    }
  }
  async assignAppeals() {
    const t = await this.request("/staff/appeals/assign", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    return await t.json()
  }
  async getNotificationCount() {
    const t = await this.request("/notification/count", {
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    const {
      count: e
    } = await t.json();
    return e
  }
  async getNotificationPage(t) {
    const r = `/notification/page${t!==void 0?`?cursor=${encodeURIComponent(t)}`:""}`,
      o = await this.request(r, {
        credentials: "include"
      });
    if (o.status !== s.OK) throw new p(d(), o.status);
    return o.json()
  }
  async postNotificationMarkRead(t) {
    const e = await this.request("/notification/mark-read", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        notificationIds: t
      })
    });
    if (e.status !== s.OK) throw new p(d(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const t = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    return t.json()
  }
  async getAnticheatStats(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/stats?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== s.OK) throw new p(d(), r.status);
    return r.json()
  }
  async getAnticheatSignals(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/signals?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== s.OK) throw new p(d(), r.status);
    return r.json()
  }
  async getAnticheatUserJourney(t, e, r) {
    const o = await this.request(`/staff/dashboard/anticheat/user/${t}?from=${e}&to=${r}`, {
      method: "GET",
      credentials: "include"
    });
    if (o.status !== s.OK) throw new p(d(), o.status);
    return o.json()
  }
  async getAnticheatSignalAnalysis(t, e, r) {
    const o = await this.request(`/staff/dashboard/anticheat/signal/${encodeURIComponent(t)}?from=${encodeURIComponent(e)}&to=${encodeURIComponent(r)}`, {
      method: "GET",
      credentials: "include"
    });
    if (o.status !== s.OK) throw new p(d(), o.status);
    return o.json()
  }
  async getPendingAppealsCount() {
    const t = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async getUserPixelsPaintedToday() {
    const t = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const t = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    return t.json()
  }
  async postEquipUserFrame(t) {
    const e = await this.request(`/me/frames/equip/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== s.OK) throw new p(d(), e.status)
  }
  async getUserBadges() {
    const t = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    return t.json()
  }
  async postEquipUserBadge(t) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== s.OK) throw new p(d(), e.status)
  }
  async postCaptchaSession(t, e = "include") {
    const r = await this.request("/anticheat/captcha/session", {
      method: "POST",
      credentials: e,
      body: JSON.stringify(t),
      headers: {
        "x-fp": await Lt()
      }
    });
    if (!r.ok) throw r.status === 500 ? new p(d(), r.status) : new p(Ug(), r.status);
    return r.json()
  }
  validWaybackInput(t) {
    const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < ES.length,
      o = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= TS.tools.wayback.limit,
      i = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
      a = t.cursorTs !== void 0,
      c = t.cursorUserId !== void 0,
      u = t.cursorAllianceId !== void 0,
      _ = t.cursorPixelsCount !== void 0,
      f = a || c || u || _,
      l = a && c && u && _;
    let b = !0;
    return f && (b = l && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!r || !o || !i || !e || !b)
  }
  getSafeWaybackInput(t) {
    return t.season = Math.trunc(t.season), t.limit = Math.trunc(t.limit), t.timestamp = Math.trunc(t.timestamp), t.tileX = Math.trunc(t.tileX), t.tileY = Math.trunc(t.tileY), t.cursorTs !== void 0 && (t.cursorTs = Math.trunc(t.cursorTs)), t.cursorUserId !== void 0 && (t.cursorUserId = Math.trunc(t.cursorUserId)), t.cursorAllianceId !== void 0 && (t.cursorAllianceId = Math.trunc(t.cursorAllianceId)), t.cursorPixelsCount !== void 0 && (t.cursorPixelsCount = Math.trunc(t.cursorPixelsCount)), t
  }
  async getWaybackEvents(t) {
    if (!this.validWaybackInput(t)) throw new Error("Invalid query params");
    t = this.getSafeWaybackInput(t);
    const e = new URLSearchParams;
    t.cursorTs !== void 0 && e.set("cursorTs", String(t.cursorTs)), t.cursorUserId !== void 0 && e.set("cursorUserId", String(t.cursorUserId)), t.cursorAllianceId !== void 0 && e.set("cursorAllianceId", String(t.cursorAllianceId)), t.cursorPixelsCount !== void 0 && e.set("cursorPixelsCount", String(t.cursorPixelsCount));
    const r = `/staff/tools/wayback/s${t.season}/l${t.limit}/x${t.tileX}/y${t.tileY}/t${t.timestamp}`,
      o = e.toString(),
      i = await this.request(o.length > 0 ? `${r}?${o}` : r, {
        method: "GET",
        credentials: "include"
      });
    if (i.status === s.FORBIDDEN) throw new Error("Access denied");
    if (i.status !== s.OK) throw new Error("Failed to fetch wayback events");
    return i.json()
  }
  async getStoreFrames() {
    const t = await this.request("/store/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    return t.json()
  }
  async postBuyUserFrame(t) {
    const e = await this.request(`/store/frames/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === s.NOT_FOUND) throw new Error(mn());
    if (e.status === s.FORBIDDEN) throw new Error(En());
    if (e.status === s.CONFLICT) throw new Error(vn());
    if (e.status !== s.OK) throw new Error(d())
  }
  async postEquipCosmetics(t) {
    const e = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== s.OK) throw new p(d(), e.status)
  }
  async getStoreNameCosmetics() {
    const t = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    return await t.json()
  }
  async postBuyCosmetic(t) {
    const e = await this.request(`/store/name/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== s.OK) throw new p(d(), e.status)
  }
  async getMyNameCosmetics() {
    const t = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== s.OK) throw new p(d(), t.status);
    return await t.json()
  }
  async getTicketsKpi(t) {
    const e = new URLSearchParams;
    e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
    const r = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== s.OK) throw new p(d(), r.status);
    return r.json()
  }
  async postCreateFrame(t) {
    const e = new FormData;
    e.append("name", t.name), e.append("image", t.image), e.append("description", t.description), e.append("value", t.value.toString()), e.append("rarity", t.rarity), e.append("purchasable", t.purchasable.toString());
    const r = await this.request("/staff/store-manager/frames", {
      method: "POST",
      credentials: "include",
      body: e
    });
    if (r.status !== s.OK) throw new p(d(), r.status)
  }
  async postCreateFont(t) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== s.OK) throw new p(d(), e.status)
  }
  async postCreateStyle(t) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== s.OK) throw new p(d(), e.status)
  }
  async getR2Images(t) {
    const e = new URLSearchParams({
        page: String(t.page),
        pageSize: String(t.pageSize)
      }),
      r = await this.request(`/staff/store-manager/images?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== s.OK) throw new p(d(), r.status);
    return r.json()
  }
  async postUploadR2Image(t) {
    const e = new FormData;
    t.name && e.append("name", t.name), e.append("image", t.image);
    const r = await this.request("/staff/store-manager/images", {
      method: "POST",
      credentials: "include",
      body: e
    });
    if (r.status !== s.OK) throw new p(d(), r.status);
    return r.json()
  }
  async deleteR2Image(t) {
    const e = await this.request(`/staff/store-manager/images/${t}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== s.OK) throw new p(d(), e.status)
  }
  async markRulesAsRead() {
    return (await this.request("/me/rules/read", {
      method: "POST",
      credentials: "include"
    })).status === s.OK
  }
}
Ge = new WeakMap, qe = new WeakMap;

function AS(n) {
  var b, m;
  if (!n.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = n[0].season;
  for (const y of n)
    if (y.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (b = mt.seasons) == null ? void 0 : b[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const r = e.tileSize;
  let o = Number.POSITIVE_INFINITY,
    i = Number.POSITIVE_INFINITY,
    a = Number.NEGATIVE_INFINITY,
    c = Number.NEGATIVE_INFINITY;
  const u = n.map(y => {
      const O = Math.round(y.tile[0] * r + y.pixel[0]),
        x = Math.round(y.tile[1] * r + y.pixel[1]);
      return O < o && (o = O), x < i && (i = x), O > a && (a = O), x > c && (c = x), {
        x: O,
        y: x,
        colorIdx: y.colorIdx
      }
    }),
    _ = a - o + 1,
    f = c - i + 1;
  if (!Number.isFinite(_) || !Number.isFinite(f) || _ <= 0 || f <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const l = new Uint8ClampedArray(_ * f * 4);
  for (const {
      x: y,
      y: O,
      colorIdx: x
    }
    of u) {
    const re = (m = mt.colors) == null ? void 0 : m[x];
    if (!re) throw new Error(`Unknown palette color index: ${x}`);
    const E = y - o,
      j = ((O - i) * _ + E) * 4,
      [F, q, v] = re.rgb;
    l[j] = F, l[j + 1] = q, l[j + 2] = v, l[j + 3] = x === 0 ? 1 : 255
  }
  return {
    data: l,
    width: _,
    height: f,
    offsetX: o,
    offsetY: i,
    season: t
  }
}
async function RS(n) {
  const t = IS(n.width, n.height),
    e = t.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const r = e.createImageData(n.width, n.height);
  return r.data.set(n.data), e.putImageData(r, 0, 0), "convertToBlob" in t ? t.convertToBlob({
    type: "image/png"
  }) : new Promise((o, i) => {
    t.toBlob(a => {
      if (!a) {
        i(new Error("Failed to encode auto painter bitmap."));
        return
      }
      o(a)
    }, "image/png")
  })
}

function IS(n, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = n, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let ue = new SS(Ct);
typeof window < "u" && rr(() => {
  let n = ue.online;
  or(() => {
    const t = ue.online;
    t && !n && window.dispatchEvent(new CustomEvent("wplace:online")), n = t
  })
});
const LA = n => new URL(n, Ct).toString();

function Yn(n, t) {
  if (!(n != null && n.length)) return !1;
  for (const e of n)
    if (e === t) return !0;
  return !1
}

function NS(n, t) {
  for (const e of t)
    if (Yn(n, e)) return !0;
  return !1
}

function Jn(n) {
  const t = atob(n),
    e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
  return e
}

function DS(n) {
  if (typeof Buffer < "u") return Buffer.from(n).toString("base64");
  let t = "";
  for (let e = 0; e < n.length; e++) t += String.fromCharCode(n[e]);
  return btoa(t)
}
class LS {
  constructor(t) {
    R(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const r = Math.floor(t / 8),
      o = t % 8;
    if (r >= this.bytes.length) {
      const a = new Uint8Array(r + 1),
        c = a.length - this.bytes.length;
      for (let u = 0; u < this.bytes.length; u++) a[u + c] = this.bytes[u];
      this.bytes = a
    }
    const i = this.bytes.length - 1 - r;
    e ? this.bytes[i] = this.bytes[i] | 1 << o : this.bytes[i] = this.bytes[i] & ~(1 << o)
  }
  get(t) {
    const e = Math.floor(t / 8),
      r = t % 8,
      o = this.bytes.length;
    return e > o ? !1 : (this.bytes[o - 1 - e] & 1 << r) !== 0
  }
}

function PA(n) {
  return new Promise((t, e) => {
    const r = new FileReader;
    r.onload = () => {
      const o = r.result;
      if (!o || typeof o != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(o.substring(o.indexOf(",") + 1))
    }, r.readAsDataURL(n)
  })
}

function xA(n) {
  if (typeof FileReader > "u") {
    const t = n.type || "application/octet-stream";
    return n.arrayBuffer().then(e => `data:${t};base64,${DS(new Uint8Array(e))}`)
  }
  return new Promise((t, e) => {
    const r = new FileReader;
    r.onloadend = () => {
      const o = r.result;
      if (typeof o != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(o)
    }, r.onerror = e, r.readAsDataURL(n)
  })
}

function zA(n) {
  if (!n.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = n.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = n.slice(5, t),
    r = n.slice(t + 1),
    o = e.indexOf(";base64"),
    i = (o === -1 ? e : e.slice(0, o)) || "text/plain";
  if (o !== -1) {
    const a = Jn(r),
      c = new Uint8Array(a.byteLength);
    return c.set(a), new Blob([c], {
      type: i
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: i
  })
}

function MA(...n) {
  return n.filter(Boolean).join(" ")
}
const PS = typeof document < "u";
let An = 0;
var Ve, We, He;
class xS {
  constructor() {
    L(this, Ve, V(ft([])));
    L(this, We, V(ft([])));
    L(this, He, t => {
      const e = this.toasts.findIndex(r => r.id === t);
      return e === -1 ? null : e
    });
    R(this, "addToast", t => {
      PS && this.toasts.unshift(t)
    });
    R(this, "updateToast", ({
      id: t,
      data: e,
      type: r,
      message: o
    }) => {
      const i = this.toasts.findIndex(c => c.id === t),
        a = this.toasts[i];
      this.toasts[i] = {
        ...a,
        ...e,
        id: t,
        title: o,
        type: r,
        updated: !0
      }
    });
    R(this, "create", t => {
      var c;
      const {
        message: e,
        ...r
      } = t, o = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((c = t.id) == null ? void 0 : c.length) > 0 ? t.id : An++, i = t.dismissable === void 0 ? !0 : t.dismissable, a = t.type === void 0 ? "default" : t.type;
      return Gt(() => {
        this.toasts.find(_ => _.id === o) ? this.updateToast({
          id: o,
          data: t,
          type: a,
          message: e,
          dismissable: i
        }) : this.addToast({
          ...r,
          id: o,
          title: e,
          dismissable: i,
          type: a
        })
      }), o
    });
    R(this, "dismiss", t => (Gt(() => {
      if (t === void 0) {
        this.toasts = this.toasts.map(r => ({
          ...r,
          dismiss: !0
        }));
        return
      }
      const e = this.toasts.findIndex(r => r.id === t);
      this.toasts[e] && (this.toasts[e] = {
        ...this.toasts[e],
        dismiss: !0
      })
    }), t));
    R(this, "remove", t => {
      if (t === void 0) {
        this.toasts = [];
        return
      }
      const e = w(this, He).call(this, t);
      if (e !== null) return this.toasts.splice(e, 1), t
    });
    R(this, "message", (t, e) => this.create({
      ...e,
      type: "default",
      message: t
    }));
    R(this, "error", (t, e) => this.create({
      ...e,
      type: "error",
      message: t
    }));
    R(this, "success", (t, e) => this.create({
      ...e,
      type: "success",
      message: t
    }));
    R(this, "info", (t, e) => this.create({
      ...e,
      type: "info",
      message: t
    }));
    R(this, "warning", (t, e) => this.create({
      ...e,
      type: "warning",
      message: t
    }));
    R(this, "loading", (t, e) => this.create({
      ...e,
      type: "loading",
      message: t
    }));
    R(this, "promise", (t, e) => {
      if (!e) return;
      let r;
      e.loading !== void 0 && (r = this.create({
        ...e,
        promise: t,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const o = t instanceof Promise ? t : t();
      let i = r !== void 0;
      return o.then(a => {
        if (typeof a == "object" && a && "ok" in a && typeof a.ok == "boolean" && !a.ok) {
          i = !1;
          const c = zS(a);
          this.create({
            id: r,
            type: "error",
            message: c
          })
        } else if (e.success !== void 0) {
          i = !1;
          const c = typeof e.success == "function" ? e.success(a) : e.success;
          this.create({
            id: r,
            type: "success",
            message: c
          })
        }
      }).catch(a => {
        if (e.error !== void 0) {
          i = !1;
          const c = typeof e.error == "function" ? e.error(a) : e.error;
          this.create({
            id: r,
            type: "error",
            message: c
          })
        }
      }).finally(() => {
        var a;
        i && (this.dismiss(r), r = void 0), (a = e.finally) == null || a.call(e)
      }), r
    });
    R(this, "custom", (t, e) => {
      const r = (e == null ? void 0 : e.id) || An++;
      return this.create({
        component: t,
        id: r,
        ...e
      }), r
    });
    R(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    R(this, "setHeight", t => {
      const e = w(this, He).call(this, t.toastId);
      if (e === null) {
        this.heights.push(t);
        return
      }
      this.heights[e] = t
    });
    R(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return M(w(this, Ve))
  }
  set toasts(t) {
    C(w(this, Ve), t, !0)
  }
  get heights() {
    return M(w(this, We))
  }
  set heights(t) {
    C(w(this, We), t, !0)
  }
}
Ve = new WeakMap, We = new WeakMap, He = new WeakMap;

function zS(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const Y = new xS;

function MS(n, t) {
  return Y.create({
    message: n,
    ...t
  })
}
var wt;
class CA {
  constructor() {
    L(this, wt, Oe(() => Y.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return M(w(this, wt))
  }
}
wt = new WeakMap;
const CS = MS,
  jS = Object.assign(CS, {
    success: Y.success,
    info: Y.info,
    warning: Y.warning,
    error: Y.error,
    custom: Y.custom,
    message: Y.message,
    promise: Y.promise,
    dismiss: Y.dismiss,
    loading: Y.loading,
    getActiveToasts: () => Y.toasts.filter(n => !n.dismiss)
  });
var Ke, $e, Xe, Ye, Je, Ze, Qe, et;
class BS {
  constructor() {
    R(this, "channel", new BroadcastChannel("user-channel"));
    L(this, Ke, V());
    L(this, $e, V(!0));
    L(this, Xe, V());
    L(this, Ye, V(Date.now()));
    L(this, Je, Oe(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((Vn.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    L(this, Ze, Oe(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    L(this, Qe, Oe(() => {
      var t;
      return new LS(Jn(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    L(this, et, Oe(() => {
      var e;
      if (!((e = this.data) != null && e.timeoutUntil)) return;
      const t = new Date(this.data.timeoutUntil);
      if (!(t.getTime() < Date.now())) return t
    }));
    this.channel && (this.channel.onmessage = t => {
      const e = JSON.parse(t.data);
      e.type === "refresh" ? (this.data = e.data, this.lastFetch = Date.now()) : e.type === "logout" && (this.data = void 0)
    })
  }
  get data() {
    return M(w(this, Ke))
  }
  set data(t) {
    C(w(this, Ke), t, !0)
  }
  get loading() {
    return M(w(this, $e))
  }
  set loading(t) {
    C(w(this, $e), t, !0)
  }
  get notificationCount() {
    return M(w(this, Xe))
  }
  set notificationCount(t) {
    C(w(this, Xe), t, !0)
  }
  get lastFetch() {
    return M(w(this, Ye))
  }
  set lastFetch(t) {
    C(w(this, Ye), t)
  }
  get charges() {
    return M(w(this, Je))
  }
  set charges(t) {
    C(w(this, Je), t)
  }
  get cooldown() {
    return M(w(this, Ze))
  }
  set cooldown(t) {
    C(w(this, Ze), t)
  }
  get flagsBitmap() {
    return M(w(this, Qe))
  }
  set flagsBitmap(t) {
    C(w(this, Qe), t)
  }
  get timeoutUntil() {
    return M(w(this, et))
  }
  set timeoutUntil(t) {
    C(w(this, et), t)
  }
  async refresh() {
    var t, e;
    try {
      return this.loading = !0, this.data = await ue.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && ue.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && Se.setUserId(this.data.id), !!this.data
    } catch (r) {
      return console.error(r), jS.warning(Hb(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var t;
    await ue.logout(), (t = this.channel) == null || t.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(t) {
    var r;
    return t < 32 ? !0 : ((((r = this.data) == null ? void 0 : r.extraColorsBitmap) ?? 0) & 1 << t - 32) !== 0
  }
  hasPermission(t) {
    var e;
    return Yn((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return NS((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
Ke = new WeakMap, $e = new WeakMap, Xe = new WeakMap, Ye = new WeakMap, Je = new WeakMap, Ze = new WeakMap, Qe = new WeakMap, et = new WeakMap;
const me = new BS;
let I;
const ne = new Array(128).fill(void 0);
ne.push(void 0, null, !0, !1);

function A(n) {
  return ne[n]
}
let Ae = ne.length;

function z(n) {
  Ae === ne.length && ne.push(ne.length + 1);
  const t = Ae;
  return Ae = ne[t], ne[t] = n, t
}

function ie(n, t) {
  try {
    return n.apply(this, t)
  } catch (e) {
    I.__wbindgen_export_0(z(e))
  }
}

function fe(n) {
  return n == null
}
const Zn = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && Zn.decode();
let ke = null;

function lt() {
  return (ke === null || ke.byteLength === 0) && (ke = new Uint8Array(I.memory.buffer)), ke
}

function dt(n, t) {
  return n = n >>> 0, Zn.decode(lt().subarray(n, n + t))
}

function FS(n) {
  n < 132 || (ne[n] = Ae, Ae = n)
}

function Rn(n) {
  const t = A(n);
  return FS(n), t
}
let pe = null;

function ht() {
  return (pe === null || pe.buffer.detached === !0 || pe.buffer.detached === void 0 && pe.buffer !== I.memory.buffer) && (pe = new DataView(I.memory.buffer)), pe
}
let ge = 0;
const _t = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  US = typeof _t.encodeInto == "function" ? function(n, t) {
    return _t.encodeInto(n, t)
  } : function(n, t) {
    const e = _t.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    }
  };

function ot(n, t, e) {
  if (e === void 0) {
    const c = _t.encode(n),
      u = t(c.length, 1) >>> 0;
    return lt().subarray(u, u + c.length).set(c), ge = c.length, u
  }
  let r = n.length,
    o = t(r, 1) >>> 0;
  const i = lt();
  let a = 0;
  for (; a < r; a++) {
    const c = n.charCodeAt(a);
    if (c > 127) break;
    i[o + a] = c
  }
  if (a !== r) {
    a !== 0 && (n = n.slice(a)), o = e(o, r, r = a + n.length * 3, 1) >>> 0;
    const c = lt().subarray(o + a, o + r),
      u = US(n, c);
    a += u.written, o = e(o, r, a, 1) >>> 0
  }
  return ge = a, o
}

function GS(n) {
  const t = ot(n, I.__wbindgen_export_1, I.__wbindgen_export_2),
    e = ge;
  I.set_discord_id(t, e)
}

function qS(n) {
  const t = ot(n, I.__wbindgen_export_1, I.__wbindgen_export_2),
    e = ge;
  I.set_fingerprint(t, e)
}

function VS(n) {
  const t = ot(n, I.__wbindgen_export_1, I.__wbindgen_export_2),
    e = ge;
  I.set_detected_bot(t, e)
}

function WS(n) {
  let t, e;
  try {
    const i = I.__wbindgen_add_to_stack_pointer(-16),
      a = ot(n, I.__wbindgen_export_1, I.__wbindgen_export_2),
      c = ge;
    I.get_pawtected_endpoint_payload(i, a, c);
    var r = ht().getInt32(i + 0, !0),
      o = ht().getInt32(i + 4, !0);
    return t = r, e = o, dt(r, o)
  } finally {
    I.__wbindgen_add_to_stack_pointer(16), I.__wbindgen_export_3(t, e, 1)
  }
}

function Rt(n) {
  I.set_user_id(n)
}

function HS(n) {
  I.set_cf_likely_automated(n)
}

function KS(n) {
  I.set_automated_clicks(n)
}

function $S(n) {
  const t = ot(n, I.__wbindgen_export_1, I.__wbindgen_export_2),
    e = ge;
  I.request_url(t, e)
}

function XS(n) {
  I.set_automated_browser(n)
}
async function YS(n, t) {
  if (typeof Response == "function" && n instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(n, t)
    } catch (r) {
      if (n.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r
    }
    const e = await n.arrayBuffer();
    return await WebAssembly.instantiate(e, t)
  } else {
    const e = await WebAssembly.instantiate(n, t);
    return e instanceof WebAssembly.Instance ? {
      instance: e,
      module: n
    } : e
  }
}

function JS() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    const e = A(t).buffer;
    return z(e)
  }, n.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return ie(function(t, e) {
      const r = A(t).call(A(e));
      return z(r)
    }, arguments)
  }, n.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return ie(function(t, e, r) {
      const o = A(t).call(A(e), A(r));
      return z(o)
    }, arguments)
  }, n.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    const e = A(t).crypto;
    return z(e)
  }, n.wbg.__wbg_document_d249400bd7bd996d = function(t) {
    const e = A(t).document;
    return fe(e) ? 0 : z(e)
  }, n.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return ie(function(t, e) {
      A(t).getRandomValues(A(e))
    }, arguments)
  }, n.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return ie(function(t, e) {
      const r = Reflect.get(A(t), A(e));
      return z(r)
    }, arguments)
  }, n.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return ie(function(t) {
      return A(t).hasFocus()
    }, arguments)
  }, n.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return ie(function(t) {
      const e = A(t).innerWidth;
      return z(e)
    }, arguments)
  }, n.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(t) {
    let e;
    try {
      e = A(t) instanceof Window
    } catch {
      e = !1
    }
    return e
  }, n.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(t) {
    const e = A(t).msCrypto;
    return z(e)
  }, n.wbg.__wbg_navigator_1577371c070c8947 = function(t) {
    const e = A(t).navigator;
    return z(e)
  }, n.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    const e = new Uint8Array(A(t));
    return z(e)
  }, n.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    const r = new Function(dt(t, e));
    return z(r)
  }, n.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, r) {
    const o = new Uint8Array(A(t), e >>> 0, r >>> 0);
    return z(o)
  }, n.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return z(e)
  }, n.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    const e = A(t).node;
    return z(e)
  }, n.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, n.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    const e = A(t).process;
    return z(e)
  }, n.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return ie(function(t, e) {
      A(t).randomFillSync(Rn(e))
    }, arguments)
  }, n.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return ie(function() {
      const t = module.require;
      return z(t)
    }, arguments)
  }, n.wbg.__wbg_set_65595bdd868b3009 = function(t, e, r) {
    A(t).set(A(e), r >>> 0)
  }, n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return fe(t) ? 0 : z(t)
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return fe(t) ? 0 : z(t)
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return fe(t) ? 0 : z(t)
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return fe(t) ? 0 : z(t)
  }, n.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, r) {
    const o = A(t).subarray(e >>> 0, r >>> 0);
    return z(o)
  }, n.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    const e = A(t).versions;
    return z(e)
  }, n.wbg.__wbindgen_boolean_get = function(t) {
    const e = A(t);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, n.wbg.__wbindgen_is_function = function(t) {
    return typeof A(t) == "function"
  }, n.wbg.__wbindgen_is_null = function(t) {
    return A(t) === null
  }, n.wbg.__wbindgen_is_object = function(t) {
    const e = A(t);
    return typeof e == "object" && e !== null
  }, n.wbg.__wbindgen_is_string = function(t) {
    return typeof A(t) == "string"
  }, n.wbg.__wbindgen_is_undefined = function(t) {
    return A(t) === void 0
  }, n.wbg.__wbindgen_memory = function() {
    const t = I.memory;
    return z(t)
  }, n.wbg.__wbindgen_number_get = function(t, e) {
    const r = A(e),
      o = typeof r == "number" ? r : void 0;
    ht().setFloat64(t + 8, fe(o) ? 0 : o, !0), ht().setInt32(t + 0, !fe(o), !0)
  }, n.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = A(t);
    return z(e)
  }, n.wbg.__wbindgen_object_drop_ref = function(t) {
    Rn(t)
  }, n.wbg.__wbindgen_string_new = function(t, e) {
    const r = dt(t, e);
    return z(r)
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(dt(t, e))
  }, n
}

function ZS(n, t) {
  return I = n.exports, Qn.__wbindgen_wasm_module = t, pe = null, ke = null, I
}
async function Qn(n) {
  if (I !== void 0) return I;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = JS();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: r
  } = await YS(await n, t);
  return ZS(e, r)
}
class QS {
  constructor() {
    R(this, "interval");
    R(this, "storagesEmpty", !1);
    R(this, "storages", [new gt, new zt, new Mt, new tA]);
    R(this, "pawtectLoaded");
    R(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!me.data || this.storagesEmpty || localStorage.getItem(gt.KEY))) {
        for (const e of this.storages) {
          const r = e.get();
          if (r) {
            for (const o of this.storages) o.set(r);
            return
          }
        }
        this.storagesEmpty = !0
      }
    }, 500))
  }
  cleanup() {
    clearInterval(this.interval), this.interval = void 0
  }
  isMultiAccounting(t) {
    const e = ce.day;
    for (const o of this.storages) {
      const i = o.get();
      if (i && !(i.timestamp + e < Date.now()) && i.userId !== t) return !0
    }
    const r = {
      userId: t,
      timestamp: Date.now()
    };
    for (const o of this.storages) o.set(r);
    return this.storagesEmpty = !1, !1
  }
  loadPawtect() {
    return this.pawtectLoaded || (this.pawtectLoaded = (async () => {
      var t;
      try {
        await Qn(ar), (t = me.data) != null && t.id && Rt(me.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: eA((r, o) => {
            let i = null;
            return r instanceof Request ? i = r.url : r instanceof URL ? i = r.href : typeof r == "string" && (i = r), i !== null && !i.startsWith("/") && $S(i), e.call(window, r, o)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(t) {
    await this.loadPawtect(), Rt(t)
  }
  async setCfLikelyAutomated(t) {
    await this.loadPawtect(), HS(t)
  }
  isPawtectReady() {
    return this.pawtectLoaded ?? Promise.resolve(!1)
  }
  getPawtectError() {
    return this.pawtectError
  }
  async getHeaders(t) {
    return {
      "x-pawtect-token": await this.getPawtectedEndpointPayload(t)
    }
  }
  async getPawtectedEndpointPayload(t) {
    if (!await this.loadPawtect()) throw new Error(K0());
    const r = navigator.webdriver,
      [o, i] = await Promise.all([Lt(), ro().catch(a => (console.error(a), {
        bot: !1
      }))]);
    return Rt(me.data.id), GS(me.data.discordId ?? ""), qS(o), XS(r), KS(Vn.automatedClicks), i.bot && VS(i.botKind ?? "unknown"), WS(t)
  }
}

function eA(n) {
  return n.bind().bind()
}
const ae = class ae {
  static codec(t) {
    const e = new TextEncoder().encode(this.XOR_KEY),
      r = new Uint8Array(t.length);
    for (let o = 0; o < t.length; o++) r[o] = t[o] ^ e[o % e.length];
    return r
  }
  get() {
    try {
      const t = localStorage.getItem(ae.KEY);
      if (!t) return;
      const e = Uint8Array.from(atob(t), o => o.charCodeAt(0)),
        r = new TextDecoder().decode(ae.codec(e));
      return JSON.parse(r)
    } catch {
      return
    }
  }
  set(t) {
    const e = new TextEncoder().encode(JSON.stringify(t)),
      r = ae.codec(e);
    localStorage.setItem(ae.KEY, btoa(String.fromCharCode(...r)))
  }
};
R(ae, "KEY", "ui_layout_v3"), R(ae, "XOR_KEY", "wplace-prefs");
let gt = ae;
const se = class se {
  get() {
    try {
      const t = sessionStorage.getItem(se.KEY);
      if (!t) return;
      let e = "";
      for (let r = 0; r < t.length; r += 4) {
        const o = parseInt(t.slice(r, r + 4), 16);
        e += String.fromCharCode(o - se.SHIFT & 65535)
      }
      return JSON.parse(e)
    } catch {
      return
    }
  }
  set(t) {
    const e = JSON.stringify(t);
    let r = "";
    for (const o of e) {
      const i = o.charCodeAt(0) + se.SHIFT & 65535;
      r += i.toString(16).padStart(4, "0")
    }
    sessionStorage.setItem(se.KEY, r)
  }
};
R(se, "KEY", "nav.cursor"), R(se, "SHIFT", 13);
let zt = se;
const he = class he {
  get() {
    const t = document.cookie.match(new RegExp("(?:^|; )" + he.KEY + "=([^;]*)"));
    if (t) try {
      const [e, r] = decodeURIComponent(t[1]).split("."), o = parseInt(e, 36), i = parseInt(r, 36);
      return !Number.isFinite(o) || !Number.isFinite(i) ? void 0 : {
        userId: o,
        timestamp: i
      }
    } catch {
      return
    }
  }
  set(t) {
    const e = `${t.userId.toString(36)}.${t.timestamp.toString(36)}`;
    document.cookie = `${he.KEY}=${encodeURIComponent(e)};path=/;max-age=${he.MAX_AGE};SameSite=Lax`
  }
};
R(he, "KEY", "_pf_uid"), R(he, "MAX_AGE", 3600 * 24 * 365);
let Mt = he;
class tA {
  constructor() {
    R(this, "packed")
  }
  get() {
    if (this.packed === void 0) return;
    const t = Number(this.packed & 0xffffffffn),
      e = Number(this.packed >> 32n);
    return {
      userId: t,
      timestamp: e
    }
  }
  set(t) {
    this.packed = BigInt(t.timestamp) << 32n | BigInt(t.userId) & 0xffffffffn
  }
}
const Se = new QS;
export {
  lf as $, CA as A, wA as B, pA as C, K as D, _A as E, dA as F, IA as G, fA as H, cA as I, aA as J, Se as K, io as L, TS as M, Xn as N, uA as O, Ct as P, sA as Q, Sd as R, RA as S, ce as T, Pt as U, gA as V, Hn as W, At as X, dn as Y, PA as Z, Rg as _, ue as a, Ul as a0, Tc as a1, bb as a2, C_ as a3, xA as a4, zA as a5, NA as a6, yA as a7, K0 as a8, YT as a9, LA as aa, OA as ab, vA as ac, kA as ad, TA as ae, DA as af, iA as ag, Ug as ah, mt as b, d as c, bA as d, SA as e, AA as f, Vn as g, Rl as h, mg as i, Y_ as j, lc as k, O_ as l, sb as m, Lt as n, so as o, lA as p, xt as q, co as r, EA as s, jS as t, me as u, hA as v, mA as w, Jk as x, Y as y, MA as z
};