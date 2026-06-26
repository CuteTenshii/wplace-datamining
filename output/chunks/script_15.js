var Br = Object.defineProperty;
var ln = n => {
  throw TypeError(n)
};
var Fr = (n, t, e) => t in n ? Br(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : n[t] = e;
var L = (n, t, e) => Fr(n, typeof t != "symbol" ? t + "" : t, e),
  Ur = (n, t, e) => t.has(n) || ln("Cannot " + e);
var T = (n, t, e) => (Ur(n, t, "read from private field"), e ? e.call(n) : t.get(n)),
  j = (n, t, e) => t.has(n) ? ln("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
import {
  e as V,
  i as G,
  h as q,
  g as vt,
  bM as Gr,
  y as qr,
  B as dn,
  u as Ne
} from "./DmPVOt2G.js";
import {
  g as w
} from "./BhCkpOlh.js";
const GR = "https://maps.wplace.live",
  qR = "8d582454-e5ec-4314-b1c2-89e460ac1d28",
  Wr = "svHwYf228UcW8vPuQ575",
  WR = "pk_live_51RMHjBAtY4KIdFGnnJ9ZHjvgP68opqg7wlT7fA1HG3p91vfhVQyn6je810y5Cz3ggTycnJtFRkwHsYy1qJEyKRFW00x1i0iWMl",
  Vr = "true",
  VR = "0x4AAAAAABpHqZ-6i7uL0nmG",
  KR = "https://backend.wplace.live/files",
  rn = "https://backend.wplace.live",
  Kr = "" + new URL("../assets/pawtect_wasm_bg.8VPqYlMZ.wasm", import.meta.url).href;
var Hr = "2.0.0";
const I = {
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
class B extends Error {
  constructor(t, e) {
    super(e), this.state = t, this.name = "BotdError", Object.setPrototypeOf(this, B.prototype)
  }
}

function $r(n, t) {
  const e = {};
  let r = {
    bot: !1
  };
  for (const o in t) {
    const i = t[o],
      a = i(n);
    let s = {
      bot: !1
    };
    typeof a == "string" ? s = {
      bot: !0,
      botKind: a
    } : a && (s = {
      bot: !0,
      botKind: I.Unknown
    }), e[o] = s, s.bot && (r = s)
  }
  return [e, r]
}
async function Xr(n) {
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
      i instanceof B ? t[r] = {
        state: i.state,
        error: `${i.name}: ${i.message}`
      } : t[r] = {
        state: -3,
        error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
      }
    }
  })), t
}

function Yr({
  appVersion: n
}) {
  if (n.state !== 0) return !1;
  if (/headless/i.test(n.value)) return I.HeadlessChrome;
  if (/electron/i.test(n.value)) return I.Electron;
  if (/slimerjs/i.test(n.value)) return I.SlimerJS
}

function ht(n, t) {
  return n.indexOf(t) !== -1
}

function ne(n, t) {
  return n.indexOf(t) !== -1
}

function Jr(n, t) {
  if ("find" in n) return n.find(t);
  for (let e = 0; e < n.length; e++)
    if (t(n[e], e, n)) return n[e]
}

function _n(n) {
  return Object.getOwnPropertyNames(n)
}

function qt(n, ...t) {
  for (const e of t)
    if (typeof e == "string") {
      if (ht(n, e)) return !0
    } else if (Jr(n, o => e.test(o)) != null) return !0;
  return !1
}

function Se(n) {
  return n.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function Zr({
  documentElementKeys: n
}) {
  if (n.state !== 0) return !1;
  if (qt(n.value, "selenium", "webdriver", "driver")) return I.Selenium
}

function Qr({
  errorTrace: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return I.PhantomJS
}

function eo({
  evalLength: n,
  browserKind: t,
  browserEngineKind: e
}) {
  if (n.state !== 0 || t.state !== 0 || e.state !== 0) return;
  const r = n.value;
  return e.value === "unknown" ? !1 : r === 37 && !ht(["webkit", "gecko"], e.value) || r === 39 && !ht(["internet_explorer"], t.value) || r === 33 && !ht(["chromium"], e.value)
}

function to({
  functionBind: n
}) {
  if (n.state === -2) return I.PhantomJS
}

function no({
  languages: n
}) {
  if (n.state === 0 && n.value.length === 0) return I.HeadlessChrome
}

function ro({
  mimeTypesConsistent: n
}) {
  if (n.state === 0 && !n.value) return I.Unknown
}

function oo({
  notificationPermissions: n,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== "chrome") return !1;
  if (n.state === 0 && n.value) return I.HeadlessChrome
}

function io({
  pluginsArray: n
}) {
  if (n.state === 0 && !n.value) return I.HeadlessChrome
}

function ao({
  pluginsLength: n,
  android: t,
  browserKind: e,
  browserEngineKind: r
}) {
  if (!(n.state !== 0 || t.state !== 0 || e.state !== 0 || r.state !== 0) && !(e.value !== "chrome" || t.value || r.value !== "chromium") && n.value === 0) return I.HeadlessChrome
}

function so({
  process: n
}) {
  var t;
  if (n.state !== 0) return !1;
  if (n.value.type === "renderer" || ((t = n.value.versions) === null || t === void 0 ? void 0 : t.electron) != null) return I.Electron
}

function co({
  productSub: n,
  browserKind: t
}) {
  if (n.state !== 0 || t.state !== 0) return !1;
  if ((t.value === "chrome" || t.value === "safari" || t.value === "opera" || t.value === "wechat") && n.value !== "20030107") return I.Unknown
}

function uo({
  userAgent: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return I.PhantomJS;
  if (/Headless/i.test(n.value)) return I.HeadlessChrome;
  if (/Electron/i.test(n.value)) return I.Electron;
  if (/slimerjs/i.test(n.value)) return I.SlimerJS
}

function lo({
  webDriver: n
}) {
  if (n.state === 0 && n.value) return I.HeadlessChrome
}

function _o({
  webGL: n
}) {
  if (n.state === 0) {
    const {
      vendor: t,
      renderer: e
    } = n.value;
    if (t == "Brian Paul" && e == "Mesa OffScreen") return I.HeadlessChrome
  }
}

function fo({
  windowExternal: n
}) {
  if (n.state !== 0) return !1;
  if (/Sequentum/i.test(n.value)) return I.Sequentum
}

function po({
  windowSize: n,
  documentFocus: t
}) {
  if (n.state !== 0 || t.state !== 0) return !1;
  const {
    outerWidth: e,
    outerHeight: r
  } = n.value;
  if (t.value && e === 0 && r === 0) return I.HeadlessChrome
}

function mo({
  distinctiveProps: n
}) {
  if (n.state !== 0) return !1;
  const t = n.value;
  let e;
  for (e in t)
    if (t[e]) return e
}
const ho = {
  detectAppVersion: Yr,
  detectDocumentAttributes: Zr,
  detectErrorTrace: Qr,
  detectEvalLengthInconsistency: eo,
  detectFunctionBind: to,
  detectLanguagesLengthInconsistency: no,
  detectNotificationPermissions: oo,
  detectPluginsArray: io,
  detectPluginsLengthInconsistency: ao,
  detectProcess: so,
  detectUserAgent: uo,
  detectWebDriver: lo,
  detectWebGL: _o,
  detectWindowExternal: fo,
  detectWindowSize: po,
  detectMimeTypesConsistent: ro,
  detectProductSub: co,
  detectDistinctiveProperties: mo
};

function go() {
  const n = navigator.appVersion;
  if (n == null) throw new B(-1, "navigator.appVersion is undefined");
  return n
}

function wo() {
  if (document.documentElement === void 0) throw new B(-1, "document.documentElement is undefined");
  const {
    documentElement: n
  } = document;
  if (typeof n.getAttributeNames != "function") throw new B(-2, "document.documentElement.getAttributeNames is not a function");
  return n.getAttributeNames()
}

function yo() {
  try {
    null[0]()
  } catch (n) {
    if (n instanceof Error && n.stack != null) return n.stack.toString()
  }
  throw new B(-3, "errorTrace signal unexpected behaviour")
}

function bo() {
  return eval.toString().length
}

function vo() {
  if (Function.prototype.bind === void 0) throw new B(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function on() {
  var n, t;
  const e = window,
    r = navigator;
  return Se(["webkitPersistentStorage" in r, "webkitTemporaryStorage" in r, r.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : Se(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, r.vendor.indexOf("Apple") === 0, "getStorageUpdates" in r, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : Se(["buildID" in navigator, "MozAppearance" in ((t = (n = document.documentElement) === null || n === void 0 ? void 0 : n.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function Eo() {
  var n;
  const t = (n = navigator.userAgent) === null || n === void 0 ? void 0 : n.toLowerCase();
  return ne(t, "edg/") ? "edge" : ne(t, "trident") || ne(t, "msie") ? "internet_explorer" : ne(t, "wechat") ? "wechat" : ne(t, "firefox") ? "firefox" : ne(t, "opera") || ne(t, "opr") ? "opera" : ne(t, "chrome") ? "chrome" : ne(t, "safari") ? "safari" : "unknown"
}

function To() {
  const n = on(),
    t = n === "chromium",
    e = n === "gecko",
    r = window,
    o = navigator,
    i = "connection";
  return t ? Se([!("SharedWorker" in r), o[i] && "ontypechange" in o[i], !("sinkId" in new Audio)]) >= 2 : e ? Se(["onorientationchange" in r, "orientation" in r, /android/i.test(o.appVersion)]) >= 2 : !1
}

function Oo() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function ko() {
  const n = window;
  return Se([!("MediaSettingsRange" in n), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3
}

function So() {
  const n = navigator,
    t = [],
    e = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(n.languages)) on() === "chromium" && ko() || t.push(n.languages);
  else if (typeof n.languages == "string") {
    const r = n.languages;
    r && t.push(r.split(","))
  }
  return t
}

function Ao() {
  if (navigator.mimeTypes === void 0) throw new B(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: n
  } = navigator;
  let t = Object.getPrototypeOf(n) === MimeTypeArray.prototype;
  for (let e = 0; e < n.length; e++) t && (t = Object.getPrototypeOf(n[e]) === MimeType.prototype);
  return t
}
async function Ro() {
  if (window.Notification === void 0) throw new B(-1, "window.Notification is undefined");
  if (navigator.permissions === void 0) throw new B(-1, "navigator.permissions is undefined");
  const {
    permissions: n
  } = navigator;
  if (typeof n.query != "function") throw new B(-2, "navigator.permissions.query is not a function");
  try {
    const t = await n.query({
      name: "notifications"
    });
    return window.Notification.permission === "denied" && t.state === "prompt"
  } catch {
    throw new B(-3, "notificationPermissions signal unexpected behaviour")
  }
}

function Io() {
  if (navigator.plugins === void 0) throw new B(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new B(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function No() {
  if (navigator.plugins === void 0) throw new B(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new B(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function Do() {
  const {
    process: n
  } = window, t = "window.process is";
  if (n === void 0) throw new B(-1, `${t} undefined`);
  if (n && typeof n != "object") throw new B(-3, `${t} not an object`);
  return n
}

function Po() {
  const {
    productSub: n
  } = navigator;
  if (n === void 0) throw new B(-1, "navigator.productSub is undefined");
  return n
}

function Lo() {
  if (navigator.connection === void 0) throw new B(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new B(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function xo() {
  return navigator.userAgent
}

function zo() {
  if (navigator.webdriver == null) throw new B(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function Mo() {
  const n = document.createElement("canvas");
  if (typeof n.getContext != "function") throw new B(-2, "HTMLCanvasElement.getContext is not a function");
  const t = n.getContext("webgl");
  if (t === null) throw new B(-4, "WebGLRenderingContext is null");
  if (typeof t.getParameter != "function") throw new B(-2, "WebGLRenderingContext.getParameter is not a function");
  const e = t.getParameter(t.VENDOR),
    r = t.getParameter(t.RENDERER);
  return {
    vendor: e,
    renderer: r
  }
}

function Co() {
  if (window.external === void 0) throw new B(-1, "window.external is undefined");
  const {
    external: n
  } = window;
  if (typeof n.toString != "function") throw new B(-2, "window.external.toString is not a function");
  return n.toString()
}

function jo() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function Bo() {
  const n = {
    [I.Awesomium]: {
      window: ["awesomium"]
    },
    [I.Cef]: {
      window: ["RunPerfTest"]
    },
    [I.CefSharp]: {
      window: ["CefSharp"]
    },
    [I.CoachJS]: {
      window: ["emit"]
    },
    [I.FMiner]: {
      window: ["fmget_targets"]
    },
    [I.Geb]: {
      window: ["geb"]
    },
    [I.NightmareJS]: {
      window: ["__nightmare", "nightmare"]
    },
    [I.Phantomas]: {
      window: ["__phantomas"]
    },
    [I.PhantomJS]: {
      window: ["callPhantom", "_phantom"]
    },
    [I.Rhino]: {
      window: ["spawn"]
    },
    [I.Selenium]: {
      window: ["_Selenium_IDE_Recorder", "_selenium", "calledSelenium", /^([a-z]){3}_.*_(Array|Promise|Symbol)$/],
      document: ["__selenium_evaluate", "selenium-evaluate", "__selenium_unwrapped"]
    },
    [I.WebDriverIO]: {
      window: ["wdioElectron"]
    },
    [I.WebDriver]: {
      window: ["webdriver", "__webdriverFunc", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "_WEBDRIVER_ELEM_CACHE", "ChromeDriverw"],
      document: ["__webdriver_script_fn", "__driver_evaluate", "__webdriver_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__fxdriver_unwrapped", "__webdriver_script_fn", "__webdriver_script_func", "__webdriver_script_function", "$cdc_asdjflasutopfhvcZLmcf", "$cdc_asdjflasutopfhvcZLmcfl_", "$chrome_asyncScriptInfo", "__$webdriverAsyncExecutor"]
    },
    [I.HeadlessChrome]: {
      window: ["domAutomation", "domAutomationController"]
    }
  };
  let t;
  const e = {},
    r = _n(window);
  let o = [];
  window.document !== void 0 && (o = _n(window.document));
  for (t in n) {
    const i = n[t];
    if (i !== void 0) {
      const a = i.window === void 0 ? !1 : qt(r, ...i.window),
        s = i.document === void 0 || !o.length ? !1 : qt(o, ...i.document);
      e[t] = a || s
    }
  }
  return e
}
const Fo = {
  android: To,
  browserKind: Eo,
  browserEngineKind: on,
  documentFocus: Oo,
  userAgent: xo,
  appVersion: go,
  rtt: Lo,
  windowSize: jo,
  pluginsLength: No,
  pluginsArray: Io,
  errorTrace: yo,
  productSub: Po,
  windowExternal: Co,
  mimeTypesConsistent: Ao,
  evalLength: bo,
  webGL: Mo,
  webDriver: zo,
  languages: So,
  notificationPermissions: Ro,
  documentElementKeys: wo,
  functionBind: vo,
  process: Do,
  distinctiveProps: Bo
};
class Uo {
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
    const [t, e] = $r(this.components, ho);
    return this.detections = t, e
  }
  async collect() {
    return this.components = await Xr(Fo), this.components
  }
}

function Go() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const n = new XMLHttpRequest;
    n.open("get", `https://m1.openfpcdn.io/botd/v${Hr}/npm-monitoring`, !0), n.send()
  } catch (n) {
    console.error(n)
  }
}
async function qo({
  monitoring: n = !0
} = {}) {
  n && Go();
  const t = new Uo;
  return await t.collect(), t
}
let Dt = null;
async function Wo() {
  return await Vo() ? {
    bot: !1
  } : (await Ko()).detect()
}
async function Vo() {
  var e;
  const n = navigator;
  if (!((e = n.brave) != null && e.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(n.userAgent)) return !1;
  try {
    return await n.brave.isBrave()
  } catch {
    return !1
  }
}

function Ko() {
  return Dt || (Dt = qo({
    monitoring: !1
  })), Dt
}
const Ho = /; wv\)|FBAN|FBAV|Instagram|BytedanceWebview|musical_ly|Line\/|Snapchat|Twitter|MicroMessenger/i;

function HR() {
  return $o() ? !1 : Ho.test(navigator.userAgent)
}

function $o() {
  return !!(window != null && window.ReactNativeWebView)
}

function Xo(n = void 0) {
  const t = (n == null ? void 0 : n.userAgent) ?? navigator.userAgent,
    e = (n == null ? void 0 : n.vendor) ?? navigator.vendor;
  return "brave" in navigator ? "Brave" : /\bEdg(?:e|A|iOS)?\//.test(t) ? "Edge" : /\bOPR\/|\bOpera\//.test(t) ? "Opera" : /\bVivaldi\//.test(t) ? "Vivaldi" : /\bYaBrowser\//.test(t) ? "Yandex" : /\bSamsungBrowser\//.test(t) ? "Samsung Internet" : /\bUCBrowser\/|\bUCWEB\//.test(t) ? "UC Browser" : /\bDuckDuckGo\/|\bDdg\//.test(t) ? "DuckDuckGo" : getComputedStyle(document.documentElement).getPropertyValue("--arc-palette-title") ? "Arc" : /Firefox\/|FxiOS\//.test(t) ? "Firefox" : /Chrome\/|CriOS\//.test(t) && /google/i.test(e) ? "Chrome" : /Safari\//.test(t) && /apple/i.test(e) ? "Safari" : "Unknown"
}
let Pt;

function Yo() {
  return Pt || (Pt = Jo()), Pt
}

function Jo() {
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
async function fn() {
  let n;
  try {
    n = document.createElement("canvas");
    const t = n.getContext("2d", {
      willReadFrequently: !1
    });
    if (!t) throw new Error("canvas context blocked");
    const e = Qo.replace(/!important/gm, ""),
      r = 75;
    ei({
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
    Zo(n)
  }
}

function Zo(n) {
  n && (n.width = 0, n.height = 0, n.remove())
}
const Qo = `
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
  ei = ({
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
    seed: s = 500,
    offset: u = 2001000001,
    multiplier: l = 15e3
  }) => {
    if (!t) return;
    t.clearRect(0, 0, n.width, n.height), n.width = o.width, n.height = o.height, n.style && (n.style.display = "none");
    const d = (({
        seed: S,
        offset: g,
        multiplier: z
      }) => {
        let O = Number(S) % Number(g);
        return {
          getNextSeed: () => (O = Number(z) * O % Number(g), O)
        }
      })({
        seed: s,
        offset: u,
        multiplier: l
      }),
      {
        getNextSeed: y
      } = d,
      p = (S, g, z, O) => {
        const R = (S - 1) / g * (z || 1) || 0;
        return O ? R : Math.floor(R)
      },
      h = (S, g, z, O, R) => {
        const {
          width: F,
          height: pe
        } = z, se = S.createRadialGradient(p(R(), g, F), p(R(), g, pe), p(R(), g, F), p(R(), g, F), p(R(), g, pe), p(R(), g, F));
        se.addColorStop(0, O[p(R(), g, O.length)]), se.addColorStop(1, O[p(R(), g, O.length)]), S.fillStyle = se
      },
      v = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"],
      E = (S, g, z, O) => {
        const {
          width: R,
          height: F
        } = z, pe = 2.99;
        S.font = `${F/pe}px ${r.replace(/!important/gm,"")}`, S.strokeText("👾A", p(O(), g, R), p(O(), g, F), p(O(), g, R))
      },
      D = (S, g, z, O) => {
        const {
          width: R,
          height: F
        } = z;
        S.beginPath(), S.arc(p(O(), g, R), p(O(), g, F), p(O(), g, Math.min(R, F)), p(O(), g, 2 * Math.PI, !0), p(O(), g, 2 * Math.PI, !0)), S.stroke()
      },
      b = (S, g, z, O) => {
        const {
          width: R,
          height: F
        } = z;
        S.beginPath(), S.moveTo(p(O(), g, R), p(O(), g, F)), S.bezierCurveTo(p(O(), g, R), p(O(), g, F), p(O(), g, R), p(O(), g, F), p(O(), g, R), p(O(), g, F)), S.stroke()
      },
      k = (S, g, z, O) => {
        const {
          width: R,
          height: F
        } = z;
        S.beginPath(), S.moveTo(p(O(), g, R), p(O(), g, F)), S.quadraticCurveTo(p(O(), g, R), p(O(), g, F), p(O(), g, R), p(O(), g, F)), S.stroke()
      },
      A = (S, g, z, O) => {
        if (!("ellipse" in S)) return;
        const {
          width: R,
          height: F
        } = z;
        S.beginPath(), S.ellipse(p(O(), g, R), p(O(), g, F), p(O(), g, Math.floor(R / 2)), p(O(), g, Math.floor(F / 2)), p(O(), g, 2 * Math.PI, !0), p(O(), g, 2 * Math.PI, !0), p(O(), g, 2 * Math.PI, !0)), S.stroke()
      },
      P = [D, b, k];
    Yo() !== "WebKit" && P.push(A), e && P.push(E), [...Array(i)].forEach(S => {
      h(t, u, o, v, y), t.shadowBlur = p(y(), u, a, !0), t.shadowColor = v[p(y(), u, v.length)];
      const g = P[p(y(), u, P.length)];
      g(t, u, o, y), t.fill()
    })
  },
  pn = {
    7: ["Cambria Math", "Lucida Console"],
    8: ["Aldhabi", "Gadugi", "Myanmar Text", "Nirmala UI"],
    "8.1": ["Leelawadee UI", "Javanese Text", "Segoe UI Emoji"],
    10: ["HoloLens MDL2 Assets", "Segoe MDL2 Assets", "Bahnschrift", "Ink Free"],
    11: ["Segoe Fluent Icons"]
  },
  mn = {
    "10.9": ["Helvetica Neue", "Geneva"],
    "10.10": ["Kohinoor Devanagari Medium", "Luminari"],
    "10.11": ["PingFang HK Light"],
    "10.12": ["American Typewriter Semibold", "Futura Bold", "SignPainter-HouseScript Semibold"],
    "10.13-10.14": ["InaiMathi Bold"],
    "10.15-11": ["Galvji", "MuktaMahee Regular"],
    12: ["Noto Sans Gunjala Gondi Regular", "Noto Sans Masaram Gondi Regular", "Noto Serif Yezidi Regular"],
    13: ["Apple SD Gothic Neo ExtraBold", "STIX Two Math Regular", "STIX Two Text Regular", "Noto Sans Canadian Aboriginal Regular"]
  },
  hn = {
    "Microsoft Outlook": ["MS Outlook"],
    "Adobe Acrobat": ["ZWAdobeF"],
    LibreOffice: ["Amiri", "KACSTOffice", "Liberation Mono", "Source Code Pro"],
    OpenOffice: ["DejaVu Sans", "Gentium Book Basic", "OpenSymbol"]
  },
  ti = Object.keys(mn).map(n => mn[n]).flat(),
  ni = Object.keys(pn).map(n => pn[n]).flat(),
  ri = Object.keys(hn).map(n => hn[n]).flat(),
  oi = ["Arimo", "Chilanka", "Cousine", "Jomolhari", "MONO", "Noto Color Emoji", "Ubuntu"],
  ii = ["Dancing Script", "Droid Sans Mono", "Roboto"],
  ai = [...ti, ...ni, ...oi, ...ii, ...ri].sort();
async function si() {
  return await (async r => {
    try {
      let o = [];
      document.fonts.check(`0px "${ci()}"`) || (o = r.reduce((u, l) => (document.fonts.check(`0px "${l}"`) && u.push(l), u), []));
      const i = r.map(u => new FontFace(u, `local("${u}")`)),
        s = (await Promise.allSettled(i.map(u => u.load()))).reduce((u, l) => (l.status == "fulfilled" && u.push(l.value.family), u), []);
      return [...new Set([...o, ...s])].sort()
    } catch {
      return []
    }
  })(ai)
}

function ci() {
  return String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7)
}
const ui = ["ALIASED_POINT_SIZE_RANGE", "ALIASED_LINE_WIDTH_RANGE", "STENCIL_VALUE_MASK", "STENCIL_WRITEMASK", "STENCIL_BACK_VALUE_MASK", "STENCIL_BACK_WRITEMASK", "MAX_TEXTURE_SIZE", "MAX_VIEWPORT_DIMS", "SUBPIXEL_BITS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VARYING_VECTORS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_IMAGE_UNITS", "MAX_FRAGMENT_UNIFORM_VECTORS", "SHADING_LANGUAGE_VERSION", "VENDOR", "RENDERER", "VERSION", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_RENDERBUFFER_SIZE", "MAX_3D_TEXTURE_SIZE", "MAX_ELEMENTS_VERTICES", "MAX_ELEMENTS_INDICES", "MAX_TEXTURE_LOD_BIAS", "MAX_DRAW_BUFFERS", "MAX_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_UNIFORM_COMPONENTS", "MAX_ARRAY_TEXTURE_LAYERS", "MAX_PROGRAM_TEXEL_OFFSET", "MAX_VARYING_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", "MAX_COLOR_ATTACHMENTS", "MAX_SAMPLES", "MAX_VERTEX_UNIFORM_BLOCKS", "MAX_FRAGMENT_UNIFORM_BLOCKS", "MAX_COMBINED_UNIFORM_BLOCKS", "MAX_UNIFORM_BUFFER_BINDINGS", "MAX_UNIFORM_BLOCK_SIZE", "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_OUTPUT_COMPONENTS", "MAX_FRAGMENT_INPUT_COMPONENTS", "MAX_SERVER_WAIT_TIMEOUT", "MAX_ELEMENT_INDEX", "MAX_CLIENT_WAIT_TIMEOUT_WEBGL"].sort(),
  li = {
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
  di = new Set(["CLIP_DEPTH_MODE_EXT", "CLIP_ORIGIN_EXT", "DEPTH_CLAMP_EXT", "GPU_DISJOINT_EXT", "POLYGON_OFFSET_CLAMP_EXT", "MAX_TEXTURE_MAX_ANISOTROPY_EXT", "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", "VERTEX_ARRAY_BINDING_OES", "MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL", "UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL", "MAX_COLOR_ATTACHMENTS_WEBGL", "MAX_DRAW_BUFFERS_WEBGL"]);
async function _i() {
  let n, t, e, r;
  try {
    let o = window;
    const i = o.document;
    "OffscreenCanvas" in window ? (n = new o.OffscreenCanvas(256, 256), t = new o.OffscreenCanvas(256, 256)) : (n = i.createElement("canvas"), t = i.createElement("canvas"));
    const a = wn(n, "webgl"),
      s = wn(t, "webgl2");
    if (e = a, r = s, !a) return;
    const u = (b, k) => {
        if (!b) return;
        const A = Z(() => b.getShaderPrecisionFormat(b[k], b.LOW_FLOAT)),
          P = Z(() => b.getShaderPrecisionFormat(b[k], b.MEDIUM_FLOAT)),
          C = Z(() => b.getShaderPrecisionFormat(b[k], b.HIGH_FLOAT)),
          S = Z(() => b.getShaderPrecisionFormat(b[k], b.HIGH_INT));
        return {
          LOW_FLOAT: A,
          MEDIUM_FLOAT: P,
          HIGH_FLOAT: C,
          HIGH_INT: S
        }
      },
      l = (b, k) => {
        const A = {};
        if (!k) return A;
        for (const P in k) {
          const C = k[P];
          A[b + "." + P + ".precision"] = C ? Z(() => C.precision) : void 0, A[b + "." + P + ".rangeMax"] = C ? Z(() => C.rangeMax) : void 0, A[b + "." + P + ".rangeMin"] = C ? Z(() => C.rangeMin) : void 0
        }
        return A
      },
      _ = b => {
        const k = {};
        if (!b) return k;
        const A = b;
        for (const P of ui) {
          const C = A[P];
          if (C === void 0) continue;
          const S = b.getParameter(C);
          S && ArrayBuffer.isView(S) ? k[P] = Array.from(S) : k[P] = S
        }
        return k
      },
      d = b => {
        if (!b) return [];
        const k = Z(() => b.getContextAttributes());
        return k ? Object.keys(k).sort().map(A => `${A}=${k[A]}`) : []
      },
      y = b => {
        if (!b) return [];
        const k = [];
        for (const [A, P] of Object.entries(li)) {
          const C = Z(() => b.getExtension(A));
          if (C)
            for (const S of P) {
              const g = C[S];
              if (typeof g != "number") continue;
              if (!di.has(S)) {
                k.push(`${S}=${g}`);
                continue
              }
              const z = Z(() => b.getParameter(g));
              z == null ? k.push(`${S}=${g}`) : typeof z == "object" && "length" in z ? k.push(`${S}=${g}=${Array.from(z).join(",")}`) : k.push(`${S}=${g}=${z}`)
            }
        }
        return k.sort()
      },
      p = b => {
        const k = b ? b.getExtension("WEBGL_debug_renderer_info") : null;
        return !k || !b ? {} : {
          UNMASKED_VENDOR_WEBGL: b.getParameter(k.UNMASKED_VENDOR_WEBGL),
          UNMASKED_RENDERER_WEBGL: b.getParameter(k.UNMASKED_RENDERER_WEBGL)
        }
      },
      h = b => {
        if (!b) return [];
        const k = Z(() => b.getSupportedExtensions());
        return k || []
      },
      v = {
        ..._(a),
        ...p(a)
      },
      E = {
        ..._(s),
        ...p(s)
      };
    return {
      extensions: [...h(a), ...h(s)],
      contextAttributes: d(a),
      contextAttributes2: d(s),
      extensionParameters: y(a),
      extensionParameters2: y(s),
      parameters: {
        ...v,
        ...E,
        ...l("VERTEX_SHADER", u(a, "VERTEX_SHADER")),
        ...l("FRAGMENT_SHADER", u(a, "FRAGMENT_SHADER"))
      }
    }
  } catch (o) {
    console.log(o);
    return
  } finally {
    gn(n, e), gn(t, r)
  }
}

function Z(n) {
  try {
    return n()
  } catch {
    return
  }
}

function gn(n, t) {
  var e;
  if (n) {
    try {
      (e = t == null ? void 0 : t.getExtension("WEBGL_lose_context")) == null || e.loseContext()
    } catch {}
    n.width = 0, n.height = 0, n instanceof HTMLCanvasElement && n.remove()
  }
}

function wn(n, t) {
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
const fi = "client_timeout",
  pi = "network_connection",
  mi = "network_abort",
  Et = "csp_block",
  Tt = "invalid_endpoint",
  Wt = "handle_agent_data",
  ke = "script_load_fail",
  hi = "bad_response_format",
  Vt = "api_key_missing",
  Kt = "api_key_invalid",
  gi = "cache_misconfigured",
  Ht = "endpoints_misconfigured",
  wi = "wrong_worker_option",
  yi = "worker_initialization_failed",
  bi = "sandboxed_iframe",
  Le = "bundle_not_defined",
  re = {
    [fi]: "Client timeout",
    [pi]: "Network connection error",
    [mi]: "Network request aborted",
    [Et]: "Blocked by CSP",
    [Tt]: 'The provided endpoint in "endpoints" parameter is not a valid URL',
    [Wt]: "Handle on demand agent data error",
    [ke]: "Failed to load the JS script of the agent",
    [Le]: "9319",
    [hi]: "Can't parse the backend response. Make sure the proper endpoints are used.",
    [Vt]: "The `apiKey` option is not provided",
    [Kt]: "The `apiKey` option is not a string",
    [gi]: "The `cache` option is misconfigured",
    [Ht]: "The `endpoints` option is misconfigured",
    [wi]: "Wrong `worker` option, it should be a Worker instance",
    [yi]: "Web Worker initialization failed",
    [bi]: "Running inside sandboxed iframes is not supported"
  };
class Q extends Error {
  constructor(t, e) {
    super(t), this.name = "FingerprintError", this.event_id = null, this.code = e
  }
}

function vi(n) {
  const t = (function(r) {
    const o = atob(r),
      i = o.length,
      a = new Uint8Array(i);
    for (let s = 0; s < i; s++) a[s] = o.charCodeAt(s);
    return a
  })(n);
  let e = t;
  try {
    e = (function(r, o, i) {
      const a = () => {
          throw new Error("Invalid data")
        },
        s = Ot(r);
      s.length < o.length + 2 && a();
      for (let h = 0; h < o.length; ++h) Nn(s[1 + h], s[0]) !== o[h] && a();
      const u = 1 + o.length,
        l = Nn(s[u], s[0]);
      s.length < u + 1 + l + i && a();
      const _ = u + 1 + l,
        d = _ + i,
        y = new ArrayBuffer(s.length - d),
        p = new Uint8Array(y);
      for (let h = 0; h < p.length; ++h) p[h] = s[d + h] ^ s[_ + h % i];
      return y
    })(t, na, ra)
  } catch {}
  try {
    return (function(r) {
      const o = {
          len: 0,
          arr: new Uint8Array(128)
        },
        i = Ot(r);
      let a = 0;
      const s = () => (y(), i[a] === zt ? u() : yn(i[a]) ? l() : p(Sn) ? (a += Sn.length, null) : p(An) ? (a += An.length, !0) : p(Rn) ? (a += Rn.length, !1) : i[a] === $i ? _() : i[a] === Yi ? d() : h()),
        u = () => {
          for (o.len = 0; a++, i[a] !== zt;) {
            if (i[a] === qi) {
              if (a++, i[a] === sn) {
                const D = parseInt(xt(i.subarray(a + 1, a + 5)), 16);
                oa(o, ur(String.fromCharCode(D))), a += 4;
                continue
              }
              const E = Qi[i[a]];
              if (E) {
                bn(o, E);
                continue
              }
              return h()
            }
            if (i[a] === void 0) return h();
            bn(o, i[a])
          }
          return a++, xt((function(E) {
            return E.arr.subarray(0, E.len)
          })(o))
        },
        l = () => {
          const E = a;
          for (; i[a] === Hi || i[a] === an || i[a] === Wi || i[a] === Vi || yn(i[a]);) a++;
          return Number(xt(i.subarray(E, a)))
        },
        _ = () => {
          const E = [];
          for (a++;;) {
            if (y(), i[a] === Xi) {
              a++;
              break
            }
            if (E.length) {
              if (i[a] !== On) return h();
              a++
            }
            E.push(s())
          }
          return E
        },
        d = () => {
          const E = {};
          let D = !0;
          for (a++;;) {
            if (y(), i[a] === Ji) {
              a++;
              break
            }
            if (!D) {
              if (i[a] !== On) return h();
              a++, y()
            }
            if (i[a] !== zt) return h();
            const b = u();
            if (y(), i[a] !== ji) return h();
            a++, Object.defineProperty(E, b, {
              value: s(),
              configurable: !0,
              enumerable: !0,
              writable: !0
            }), D = !1
          }
          return E
        },
        y = () => {
          for (; i[a] === Bi || i[a] === Gi || i[a] === Ui || i[a] === Fi;) a++
        },
        p = E => {
          for (let D = 0; D < E.length; D++)
            if (i[a + D] !== E[D]) return !1;
          return !0
        },
        h = () => {
          throw new SyntaxError("Unexpected " + (a < i.length ? `byte ${a}` : "end"))
        },
        v = s();
      return y(), i[a] !== void 0 && h(), v
    })(e)
  } catch {}
  return null
}

function yn(n) {
  return n >= kn && n < kn + 10 || n === Ki
}

function Ei(n, t) {
  if (n.length === 0) return Promise.reject(new TypeError("The list of script URL patterns is empty"));
  const e = [],
    r = (function(o, i, a, s, u = {}) {
      const {
        maxAttemptCount: l = 5,
        backoffBase: _ = 200,
        backoffCap: d = 1e4,
        abort: y
      } = u, p = {
        failedAttempts: []
      }, [h, v] = (function(b, k, A, P) {
        const C = (function(z) {
            const O = [...z];
            return {
              current: () => O[0],
              postpone() {
                const R = O.shift();
                R !== void 0 && O.push(R)
              },
              exclude() {
                O.shift()
              }
            }
          })(b),
          S = (function(z, O) {
            let R = 0;
            return () => Math.random() * Math.min(O, z * Math.pow(2, R++))
          })(A, P),
          g = new Set;
        return [C.current(), (z, O, R) => {
          const F = k(z, O, R);
          F.action === "exclude" ? C.exclude() : C.postpone();
          const pe = () => Math.max(0, z.getTime() + S() - Date.now());
          let se;
          se = typeof F.delay == "number" ? F.delay : pe();
          const Ie = C.current();
          return se === 0 && Ie && Date.now() - z.getTime() < 50 && (g.has(Ie) ? se = pe() : g.add(Ie)), Ie === void 0 ? void 0 : [Ie, se]
        }]
      })(o, s, _, d), E = (D = [y == null ? void 0 : y.then(b => p.aborted = {
        resolve: !0,
        value: b
      }, b => p.aborted = {
        resolve: !1,
        error: b
      }), ta(h, l, i, a, v, p, y)], Promise.race(D.filter(b => !!b))).then(() => p);
      var D;
      return {
        then: E.then.bind(E),
        current: p
      }
    })(n, async o => {
      const i = new Date;
      try {
        const a = await t(o);
        return e.push({
          url: o,
          startedAt: i,
          finishedAt: new Date,
          error: void 0
        }), a
      } catch (a) {
        throw e.push({
          url: o,
          startedAt: i,
          finishedAt: new Date,
          error: a
        }), a
      }
    }, o => ({
      result: o
    }), Pi, {
      maxAttemptCount: 5,
      backoffBase: 100,
      backoffCap: 3e3
    });
  return new Promise((o, i) => {
    Promise.resolve(r).then(a => {
      if (a.result !== void 0) o([a.result, e]);
      else {
        const s = a.failedAttempts[0];
        i(s ? s.error : new Error("No attempts were made"))
      }
    }).catch(i)
  })
}

function Ti(n) {
  return {
    __type__: lr,
    value: n
  }
}

function Oi(n) {
  return (function(t) {
    const e = Ot(t);
    Lt = Lt || (function() {
      let o;
      const i = new Uint32Array(256);
      for (let a = 0; a < 256; a++) {
        o = a;
        for (let s = 0; s < 8; s++) o = 1 & o ? 3988292384 ^ o >>> 1 : o >>> 1;
        i[a] = o
      }
      return i
    })();
    let r = -1;
    for (let o = 0; o < e.length; o++) r = r >>> 8 ^ Lt[255 & (r ^ e[o])];
    return (-1 ^ r) >>> 0
  })(ur(n))
}
let Lt;

function ki(n, t) {
  return new Promise(e => (function(r, o, ...i) {
    const a = Date.now() + o;
    let s = 0;
    const u = () => {
      s = setTimeout(() => {
        Date.now() < a ? u() : r(...i)
      }, a - Date.now())
    };
    return u(), () => clearTimeout(s)
  })(e, n, t))
}

function Si(n) {
  return n !== null && typeof n == "object" && "name" in n && n.name === "FingerprintError" && "code" in n
}

function bn(n, t) {
  fr(n, n.len + 1), n.arr[n.len++] = t
}
const Ai = Array.isArray;

function Ot(n) {
  return n instanceof ArrayBuffer ? new Uint8Array(n) : new Uint8Array(n.buffer, n.byteOffset, n.byteLength)
}

function Ri({
  level: n,
  message: t
}) {
  n === "error" ? console.error(t) : n === "warning" ? console.warn(t) : console.log(t)
}

function ur(n) {
  const t = new Uint8Array(n.length);
  for (let e = 0; e < n.length; e++) {
    const r = n.charCodeAt(e);
    if (r > 127) return new TextEncoder().encode(n);
    t[e] = r
  }
  return t
}
const lr = "withoutDefault",
  Ii = "_vid_";

function dr(n) {
  return n instanceof Error && n.name === "TypeError"
}

function xt(n) {
  if (typeof TextDecoder == "function") {
    const e = new TextDecoder().decode(n);
    if (e) return e
  }
  const t = Ot(n);
  return decodeURIComponent(escape(String.fromCharCode.apply(null, t)))
}

function Ni(n = Li) {
  return function(t) {
    let e, r;
    const {
      picked: o,
      rest: i
    } = (function(h, v) {
      const E = {},
        D = {};
      for (const [b, k] of Object.entries(h)) v.includes(b) ? E[b] = k : D[b] = k;
      return {
        picked: E,
        rest: D
      }
    })(t, ["apiKey"]), {
      apiKey: a
    } = o;
    if (!a) throw new Q(re[Vt], Vt);
    if (typeof a != "string") throw new Q(re[Kt], Kt);
    const s = (function(h, v) {
      return Object.prototype.hasOwnProperty.call(h, v)
    })(u = t, l = "endpoints") ? u[l] : void 0;
    var u, l;
    const _ = (function(h, v, E) {
        const D = h.prepareScriptEndpoints(v, "https://fpnpmcdn.net/");
        if (D === null) throw new Q(re[Ht], Ht);
        return D.map(b => (function(k, A) {
          const P = new URL(k, window.location.href),
            C = P.pathname,
            S = "4";
          return P.pathname = `${C}${C.endsWith("/")?"":"/"}v${S}/${encodeURIComponent(A)}`, P.search = `?ci=jsl/${encodeURIComponent(Di)}`, P.href
        })(b, E))
      })(n, s, a),
      [d, y] = (function() {
        const h = [],
          v = () => {
            h.push({
              time: new Date,
              state: document.visibilityState
            })
          },
          E = (D = document, b = "visibilitychange", k = v, D.addEventListener(b, k, A), () => D.removeEventListener(b, k, A));
        var D, b, k, A;
        return v(), [h, E]
      })(),
      p = (async function() {
        try {
          const [h, v] = await Ei(_, D => (function(b, k) {
            return b.withCspViolationWatch(k, async () => {
              if ((function(A) {
                  if (URL.prototype) try {
                    return new URL(A, location.href), !1
                  } catch (P) {
                    if (dr(P)) return !0;
                    throw P
                  }
                })(k)) throw new Q(re[Tt], Tt);
              try {
                return await import(k)
              } catch {
                throw new Q(re[ke], ke)
              }
            }, () => {
              throw new Q(re[Et], Et)
            }).then(A => {
              if (typeof(A == null ? void 0 : A.start) != "function") throw new Q(re[Le], Le);
              return A
            })
          })(n, D)), E = await h.start({
            ...i,
            ldi: {
              attempts: v,
              visibilityStates: d
            }
          });
          return e = E, E
        } catch (h) {
          throw r = (function(v) {
            return v instanceof Q && v.code === Le ? new Q(re[ke], ke) : v
          })(h), r
        } finally {
          y()
        }
      })();
    return {
      async get(h) {
        if (e) return e.get(h);
        if (r) throw r;
        return (await p).get(h)
      },
      async collect(h) {
        if (e) return e.collect(h);
        if (r) throw r;
        return (await p).collect(h)
      }
    }
  }
}

function vn(n, t, e, r) {
  _r(() => {
    const o = `${n}=${t}`,
      i = `expires=${new Date(Date.now()+24*e*60*60*1e3).toUTCString()}`,
      a = r ? `domain=${r}` : "";
    document.cookie = [o, "path=/", i, a, "SameSite=Lax"].join("; ")
  }, void 0)
}

function En(n, t) {
  try {
    return new window.URL(n, window.location.href)
  } catch (e) {
    if (dr(e)) return console.warn(`Ignoring an invalid '${t}' value: "${n}"`), null;
    throw e
  }
}

function Tn(n) {
  const t = location.hostname,
    e = (function() {
      var r, o;
      const i = window;
      return ["buildID" in navigator, "MozAppearance" in ((o = (r = document.documentElement) === null || r === void 0 ? void 0 : r.style) !== null && o !== void 0 ? o : {}), "onmozfullscreenchange" in i, "mozInnerScreenX" in i, "CSSMozDocumentRule" in i, "CanvasCaptureMediaStream" in i].reduce((a, s) => a + (s ? 1 : 0), 0) >= 4
    })();
  (function(r, o) {
    let i = r.length - (r.slice(-1) === "." ? 1 : 0);
    do
      if (i = i > 0 ? r.lastIndexOf(".", i - 1) : -1, o(r.slice(i + 1)) === !0) return !0; while (i >= 0);
    return !1
  })(t, r => {
    if (!e || !/^([^.]{1,3}\.)*[^.]+\.?$/.test(r) || r === t) return n(r)
  }) || n()
}
var Di = "4.1.1";

function Pi(n, t, e) {
  const r = e instanceof Q ? e.code : null;
  return r === Et || r === Tt ? {
    action: "exclude",
    delay: 0
  } : r === Le ? {
    action: "exclude",
    delay: "backoff"
  } : r === ke ? {
    action: "postpone",
    delay: Date.now() - n.getTime() < 50 ? 0 : "backoff"
  } : {
    action: "postpone",
    delay: "backoff"
  }
}
const Li = {
    prepareScriptEndpoints: function(n, t) {
      return n === void 0 ? [t] : ft(n) ? (function(e, r) {
        let o, i = !1;
        $t(e) ? (i = !0, o = _t(e.value)) : o = _t(e);
        const a = [];
        for (const s of o) {
          const u = En(s, "endpoints");
          u && a.push(ea(u))
        }
        return i || a.push(r), a
      })(n, t) : (function(e) {
        if (!e || typeof e != "object") return !1;
        const r = e;
        return typeof r.__type__ == "string" && Oi(r.__type__) === 694409711 && (r.script === void 0 || ft(r.script)) && (r.helper === void 0 || ft(r.helper)) && (r.ingress === void 0 || ft(r.ingress))
      })(n) ? (function(e, r, o) {
        if (e === void 0) return [r];
        let i, a = !1;
        $t(e) ? (a = !0, i = _t(e.value)) : i = _t(e);
        const s = [];
        for (const u of i) {
          const l = En(u, o);
          l && s.push(l.href)
        }
        return a || s.push(r), s
      })(n.script, t, "script") : null
    },
    withCspViolationWatch: function(n, t, e, r) {
      const o = document,
        i = "securitypolicyviolation";
      let a;
      const s = l => {
        const _ = new URL(n, location.href),
          {
            blockedURI: d
          } = l;
        d !== _.href && d !== _.protocol.slice(0, -1) && d !== _.origin || (a = l, u())
      };
      o.addEventListener(i, s);
      const u = () => o.removeEventListener(i, s);
      return r == null || r.then(u, u), Promise.resolve().then(t).then(l => (u(), l), l => new Promise(_ => {
        const d = new MessageChannel;
        d.port1.onmessage = () => _(), d.port2.postMessage(null)
      }).then(() => {
        if (u(), a) return e(a);
        throw l
      }))
    }
  },
  xi = Ni();

function _r(n, t) {
  try {
    document.cookie
  } catch (e) {
    if ((function(r) {
        if (!(r instanceof DOMException)) return !1;
        const o = r.message;
        return zi.test(o) || Mi.test(o) || Ci.test(o)
      })(e)) return t;
    throw e
  }
  return n()
}

function _t(n) {
  return Ai(n) ? n : [n]
}
const zi = /The document is sandboxed and lacks the 'allow-same-origin' flag/,
  Mi = /The operation is insecure/,
  Ci = /Forbidden in a sandboxed document without the 'allow-same-origin' flag/;

function $t(n) {
  return !!n && n.__type__ === lr
}

function ft(n) {
  return $t(n) ? In(n.value) : In(n)
}
const zt = 34,
  On = 44,
  ji = 58,
  Bi = 32,
  Fi = 9,
  Ui = 13,
  Gi = 10,
  qi = 92,
  kn = 48,
  an = 101,
  sn = 117,
  Wi = 69,
  Vi = 43,
  Ki = 45,
  Hi = 46,
  $i = 91,
  Xi = 93,
  Yi = 123,
  Ji = 125,
  Sn = new Uint8Array([110, sn, 108, 108]),
  An = new Uint8Array([116, 114, sn, an]),
  Rn = new Uint8Array([102, 97, 108, 115, an]),
  Zi = {
    '"': '"',
    "\\": "\\",
    "\b": "b",
    "\f": "f",
    "\n": "n",
    "\r": "r",
    "	": "t"
  },
  Qi = (() => {
    const n = new Uint8Array(128);
    for (const [t, e] of Object.entries(Zi)) n[e.charCodeAt(0)] = t.charCodeAt(0);
    return n
  })();

function ea(n) {
  return `${n.origin}${n.pathname.endsWith("/")?n.pathname:`${n.pathname}/`}web/`
}
async function ta(n, t, e, r, o, i, a) {
  if (n === void 0) return;
  let s = n;
  for (let u = 0; u < t; ++u) {
    const l = new Date;
    let _, d;
    try {
      _ = await Xt(() => e(s, u, a), a)
    } catch (p) {
      d = p, i.failedAttempts.push({
        level: 0,
        endpoint: s,
        error: p
      })
    }
    if (_) {
      const p = r(_);
      if ("result" in p) {
        i.result = p.result;
        break
      }
      if (i.failedAttempts.push({
          level: 1,
          endpoint: s,
          error: p.error
        }), p.stop) break
    }
    const y = o(l, _, d);
    if (!y) break;
    await Xt(ki(y[1]), a), s = y[0]
  }
}

function fr(n, t) {
  if (n.arr.length < t) {
    const e = new Uint8Array(Math.max(2 * n.arr.length, t));
    e.set(n.arr), n.arr = e
  }
}

function Mt(n, t, ...e) {
  n && (async function(r, o) {
    try {
      return await r()
    } catch (i) {
      return console.error(i), o
    }
  })(() => {
    const r = t(...e);
    r !== void 0 && n(r)
  })
}

function In(n) {
  return typeof n == "string" || Array.isArray(n) && n.every(t => typeof t == "string")
}

function Xt(n, t) {
  return new Promise((e, r) => {
    let o = !1;
    t == null || t.then(() => o = !0, () => o = !0), (typeof n == "function" ? Xt(Promise.resolve(), t).then(n) : n).then(i => {
      o || e(i)
    }, i => {
      o || r(i)
    })
  })
}
const na = [3, 13];
const ra = 9;

function oa(n, t) {
  fr(n, n.len + t.length), n.arr.set(t, n.len), n.len += t.length
}

function Nn(n, t) {
  return (n - t + 256) % 256
}
const ia = function(n, t = {}) {
  const {
    storageKeyPrefix: e = Ii,
    do: r
  } = t;
  try {
    const l = vi(n);
    l !== null ? (l.visitorToken && (s = l.visitorToken, o = u = `${e}t`, i = s, a = 365, Tn(_ => {
      (function(d, y) {
        vn(d, "", -1, y)
      })(o, _)
    }), a < 0 || Tn(_ => (vn(o, i, a, _), (function(d) {
      return _r(() => {
        const y = `${d}=`;
        for (const p of document.cookie.split(";")) {
          let h = 0;
          for (; p[h] === " " && h < p.length;) ++h;
          if (p.indexOf(y) === h) return p.slice(h + y.length)
        }
      }, void 0)
    })(o) === i)), (function(_, d) {
      var y;
      try {
        (y = localStorage == null ? void 0 : localStorage.setItem) === null || y === void 0 || y.call(localStorage, _, d)
      } catch {}
    })(u, s)), l.notifications.forEach(Ri), Mt(r, () => ({
      e: 25,
      result: {
        response: l
      }
    }))) : Mt(r, () => ({
      e: 25,
      result: {
        error: new Error("Failed to decode response")
      }
    }))
  } catch (l) {
    throw Mt(r, () => ({
      e: 25,
      result: {
        error: l instanceof Error ? l : new Error(String(l))
      }
    })), new Q(re[Wt], Wt)
  }
  var o, i, a, s, u
};
var aa = {
    start: xi,
    handleAgentData: ia,
    isFingerprintError: Si,
    withoutDefault: Ti
  },
  pr = "5.2.0";

function kt(n, t) {
  return new Promise(e => setTimeout(e, n, t))
}

function sa() {
  return new Promise(n => {
    const t = new MessageChannel;
    t.port1.onmessage = () => n(), t.port2.postMessage(null)
  })
}

function ca(n, t = 1 / 0) {
  const {
    requestIdleCallback: e
  } = window;
  return e ? new Promise(r => e.call(window, () => r(), {
    timeout: t
  })) : kt(Math.min(n, t))
}

function mr(n) {
  return !!n && typeof n.then == "function"
}

function Dn(n, t) {
  try {
    const e = n();
    mr(e) ? e.then(r => t(!0, r), r => t(!1, r)) : t(!0, e)
  } catch (e) {
    t(!1, e)
  }
}
async function Pn(n, t, e = 16) {
  const r = Array(n.length);
  let o = Date.now();
  for (let i = 0; i < n.length; ++i) {
    r[i] = t(n[i], i);
    const a = Date.now();
    a >= o + e && (o = a, await sa())
  }
  return r
}

function ze(n) {
  return n.then(void 0, () => {}), n
}

function ua(n, t) {
  for (let e = 0, r = n.length; e < r; ++e)
    if (n[e] === t) return !0;
  return !1
}

function la(n, t) {
  return !ua(n, t)
}

function cn(n) {
  return parseInt(n)
}

function ee(n) {
  return parseFloat(n)
}

function oe(n, t) {
  return typeof n == "number" && isNaN(n) ? t : n
}

function K(n) {
  return n.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function hr(n, t = 1) {
  if (Math.abs(t) >= 1) return Math.round(n / t) * t;
  {
    const e = 1 / t;
    return Math.round(n * e) / e
  }
}

function da(n) {
  var t, e;
  const r = `Unexpected syntax '${n}'`,
    o = /^\s*([a-z-]*)(.*)$/i.exec(n),
    i = o[1] || void 0,
    a = {},
    s = /([.:#][\w-]+|\[.+?\])/gi,
    u = (l, _) => {
      a[l] = a[l] || [], a[l].push(_)
    };
  for (;;) {
    const l = s.exec(o[2]);
    if (!l) break;
    const _ = l[0];
    switch (_[0]) {
      case ".":
        u("class", _.slice(1));
        break;
      case "#":
        u("id", _.slice(1));
        break;
      case "[": {
        const d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(_);
        if (d) u(d[1], (e = (t = d[4]) !== null && t !== void 0 ? t : d[5]) !== null && e !== void 0 ? e : "");
        else throw new Error(r);
        break
      }
      default:
        throw new Error(r)
    }
  }
  return [i, a]
}

function _a(n) {
  const t = new Uint8Array(n.length);
  for (let e = 0; e < n.length; e++) {
    const r = n.charCodeAt(e);
    if (r > 127) return new TextEncoder().encode(n);
    t[e] = r
  }
  return t
}

function ce(n, t) {
  const e = n[0] >>> 16,
    r = n[0] & 65535,
    o = n[1] >>> 16,
    i = n[1] & 65535,
    a = t[0] >>> 16,
    s = t[0] & 65535,
    u = t[1] >>> 16,
    l = t[1] & 65535;
  let _ = 0,
    d = 0,
    y = 0,
    p = 0;
  p += i + l, y += p >>> 16, p &= 65535, y += o + u, d += y >>> 16, y &= 65535, d += r + s, _ += d >>> 16, d &= 65535, _ += e + a, _ &= 65535, n[0] = _ << 16 | d, n[1] = y << 16 | p
}

function Y(n, t) {
  const e = n[0] >>> 16,
    r = n[0] & 65535,
    o = n[1] >>> 16,
    i = n[1] & 65535,
    a = t[0] >>> 16,
    s = t[0] & 65535,
    u = t[1] >>> 16,
    l = t[1] & 65535;
  let _ = 0,
    d = 0,
    y = 0,
    p = 0;
  p += i * l, y += p >>> 16, p &= 65535, y += o * l, d += y >>> 16, y &= 65535, y += i * u, d += y >>> 16, y &= 65535, d += r * l, _ += d >>> 16, d &= 65535, d += o * u, _ += d >>> 16, d &= 65535, d += i * s, _ += d >>> 16, d &= 65535, _ += e * l + r * u + o * s + i * a, _ &= 65535, n[0] = _ << 16 | d, n[1] = y << 16 | p
}

function Ee(n, t) {
  const e = n[0];
  t %= 64, t === 32 ? (n[0] = n[1], n[1] = e) : t < 32 ? (n[0] = e << t | n[1] >>> 32 - t, n[1] = n[1] << t | e >>> 32 - t) : (t -= 32, n[0] = n[1] << t | e >>> 32 - t, n[1] = e << t | n[1] >>> 32 - t)
}

function X(n, t) {
  t %= 64, t !== 0 && (t < 32 ? (n[0] = n[1] >>> 32 - t, n[1] = n[1] << t) : (n[0] = n[1] << t - 32, n[1] = 0))
}

function W(n, t) {
  n[0] ^= t[0], n[1] ^= t[1]
}
const fa = [4283543511, 3981806797],
  pa = [3301882366, 444984403];

function Ln(n) {
  const t = [0, n[0] >>> 1];
  W(n, t), Y(n, fa), t[1] = n[0] >>> 1, W(n, t), Y(n, pa), t[1] = n[0] >>> 1, W(n, t)
}
const pt = [2277735313, 289559509],
  mt = [1291169091, 658871167],
  xn = [0, 5],
  ma = [0, 1390208809],
  ha = [0, 944331445];

function ga(n, t) {
  const e = _a(n);
  t = t || 0;
  const r = [0, e.length],
    o = r[1] % 16,
    i = r[1] - o,
    a = [0, t],
    s = [0, t],
    u = [0, 0],
    l = [0, 0];
  let _;
  for (_ = 0; _ < i; _ = _ + 16) u[0] = e[_ + 4] | e[_ + 5] << 8 | e[_ + 6] << 16 | e[_ + 7] << 24, u[1] = e[_] | e[_ + 1] << 8 | e[_ + 2] << 16 | e[_ + 3] << 24, l[0] = e[_ + 12] | e[_ + 13] << 8 | e[_ + 14] << 16 | e[_ + 15] << 24, l[1] = e[_ + 8] | e[_ + 9] << 8 | e[_ + 10] << 16 | e[_ + 11] << 24, Y(u, pt), Ee(u, 31), Y(u, mt), W(a, u), Ee(a, 27), ce(a, s), Y(a, xn), ce(a, ma), Y(l, mt), Ee(l, 33), Y(l, pt), W(s, l), Ee(s, 31), ce(s, a), Y(s, xn), ce(s, ha);
  u[0] = 0, u[1] = 0, l[0] = 0, l[1] = 0;
  const d = [0, 0];
  switch (o) {
    case 15:
      d[1] = e[_ + 14], X(d, 48), W(l, d);
    case 14:
      d[1] = e[_ + 13], X(d, 40), W(l, d);
    case 13:
      d[1] = e[_ + 12], X(d, 32), W(l, d);
    case 12:
      d[1] = e[_ + 11], X(d, 24), W(l, d);
    case 11:
      d[1] = e[_ + 10], X(d, 16), W(l, d);
    case 10:
      d[1] = e[_ + 9], X(d, 8), W(l, d);
    case 9:
      d[1] = e[_ + 8], W(l, d), Y(l, mt), Ee(l, 33), Y(l, pt), W(s, l);
    case 8:
      d[1] = e[_ + 7], X(d, 56), W(u, d);
    case 7:
      d[1] = e[_ + 6], X(d, 48), W(u, d);
    case 6:
      d[1] = e[_ + 5], X(d, 40), W(u, d);
    case 5:
      d[1] = e[_ + 4], X(d, 32), W(u, d);
    case 4:
      d[1] = e[_ + 3], X(d, 24), W(u, d);
    case 3:
      d[1] = e[_ + 2], X(d, 16), W(u, d);
    case 2:
      d[1] = e[_ + 1], X(d, 8), W(u, d);
    case 1:
      d[1] = e[_], W(u, d), Y(u, pt), Ee(u, 31), Y(u, mt), W(a, u)
  }
  return W(a, r), W(s, r), ce(a, s), ce(s, a), Ln(a), Ln(s), ce(a, s), ce(s, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8)
}

function wa(n) {
  var t;
  return {
    name: n.name,
    message: n.message,
    stack: (t = n.stack) === null || t === void 0 ? void 0 : t.split(`
`),
    ...n
  }
}

function ya(n) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(n))
}

function ba(n) {
  return typeof n != "function"
}

function va(n, t) {
  const e = ze(new Promise(r => {
    const o = Date.now();
    Dn(n.bind(null, t), (...i) => {
      const a = Date.now() - o;
      if (!i[0]) return r(() => ({
        error: i[1],
        duration: a
      }));
      const s = i[1];
      if (ba(s)) return r(() => ({
        value: s,
        duration: a
      }));
      r(() => new Promise(u => {
        const l = Date.now();
        Dn(s, (..._) => {
          const d = a + Date.now() - l;
          if (!_[0]) return u({
            error: _[1],
            duration: d
          });
          u({
            value: _[1],
            duration: d
          })
        })
      }))
    })
  }));
  return function() {
    return e.then(o => o())
  }
}

function Ea(n, t, e, r) {
  const o = Object.keys(n).filter(a => la(e, a)),
    i = ze(Pn(o, a => va(n[a], t), r));
  return async function() {
    const s = await i,
      u = await Pn(s, d => ze(d()), r),
      l = await Promise.all(u),
      _ = {};
    for (let d = 0; d < o.length; ++d) _[o[d]] = l[d];
    return _
  }
}

function gr() {
  const n = window,
    t = navigator;
  return K(["MSCSSMatrix" in n, "msSetImmediate" in n, "msIndexedDB" in n, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
}

function Ta() {
  const n = window,
    t = navigator;
  return K(["msWriteProfilerMark" in n, "MSStream" in n, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !gr()
}

function Re() {
  const n = window,
    t = navigator;
  return K(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, (t.vendor || "").indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in n, "BatteryManager" in n, "webkitMediaStream" in n, "webkitSpeechGrammar" in n]) >= 5
}

function te() {
  const n = window,
    t = navigator;
  return K(["ApplePayError" in n, "CSSPrimitiveValue" in n, "Counter" in n, t.vendor.indexOf("Apple") === 0, "RGBColor" in n, "WebKitMediaKeys" in n]) >= 4
}

function un() {
  const n = window,
    {
      HTMLElement: t,
      Document: e
    } = n;
  return K(["safari" in n, !("ongestureend" in n), !("TouchEvent" in n), !("orientation" in n), t && !("autocapitalize" in t.prototype), e && "pointerLockElement" in e.prototype]) >= 4
}

function ct() {
  const n = window;
  return ya(n.print) && String(n.browser) === "[object WebPageNamespace]"
}

function ut() {
  var n, t;
  const e = window;
  return K(["buildID" in navigator, "MozAppearance" in ((t = (n = document.documentElement) === null || n === void 0 ? void 0 : n.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4
}

function Oa() {
  const n = window,
    t = navigator,
    {
      CSS: e
    } = n;
  return K(["userActivation" in t, e.supports("color", "light-dark(#000, #fff)"), e.supports("height", "1lh"), "globalPrivacyControl" in t]) >= 3
}

function wr() {
  const {
    CSS: n
  } = window;
  return K([n.supports("selector(::details-content)"), n.supports("selector(::before::marker)"), n.supports("selector(::after::marker)"), !("locale" in CompositionEvent.prototype)]) >= 3
}

function ka() {
  const n = window;
  return K([!("MediaSettingsRange" in n), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3
}

function Sa() {
  const n = window,
    {
      URLPattern: t
    } = n;
  return K(["union" in Set.prototype, "Iterator" in n, t && "hasRegExpGroups" in t.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3
}

function Aa() {
  const n = window,
    t = document,
    {
      CSS: e,
      Promise: r,
      AudioContext: o
    } = n;
  return K([r && "try" in r, "caretPositionFromPoint" in t, o && "onerror" in o.prototype, e.supports("ruby-align", "space-around")]) >= 3
}

function Ra() {
  const n = window;
  return K(["DOMRectList" in n, "RTCPeerConnectionIceEvent" in n, "SVGGeometryElement" in n, "ontransitioncancel" in n]) >= 3
}

function lt() {
  const n = window,
    t = navigator,
    {
      CSS: e,
      HTMLButtonElement: r
    } = n;
  return K([!("getStorageUpdates" in t), r && "popover" in r.prototype, "CSSCounterStyleRule" in n, e.supports("font-size-adjust: ex-height 0.5"), e.supports("text-transform: full-width")]) >= 4
}

function Ia() {
  if (navigator.platform === "iPad") return !0;
  const n = screen,
    t = n.width / n.height;
  return K(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
}

function Na() {
  const n = document;
  return n.fullscreenElement || n.msFullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement || null
}

function Da() {
  const n = document;
  return (n.exitFullscreen || n.msExitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen).call(n)
}

function Nt() {
  const n = Re(),
    t = ut(),
    e = window,
    r = navigator,
    o = "connection";
  return n ? K([!("SharedWorker" in e), r[o] && "ontypechange" in r[o], !("sinkId" in new Audio)]) >= 2 : t ? K(["onorientationchange" in e, "orientation" in e, /android/i.test(r.appVersion)]) >= 2 : !1
}

function Pa() {
  const n = navigator,
    t = window,
    e = Audio.prototype,
    {
      visualViewport: r
    } = t;
  return K(["srLatency" in e, "srChannelCount" in e, "devicePosture" in n, r && "segments" in r, "getTextInformation" in Image.prototype]) >= 3
}

function La() {
  return Ma() ? -4 : xa()
}

function xa() {
  const n = window,
    t = n.OfflineAudioContext || n.webkitOfflineAudioContext;
  if (!t) return -2;
  if (za()) return -1;
  const e = 4500,
    r = 5e3,
    o = new t(1, r, 44100),
    i = o.createOscillator();
  i.type = "triangle", i.frequency.value = 1e4;
  const a = o.createDynamicsCompressor();
  a.threshold.value = -50, a.knee.value = 40, a.ratio.value = 12, a.attack.value = 0, a.release.value = .25, i.connect(a), a.connect(o.destination), i.start(0);
  const [s, u] = Ca(o), l = ze(s.then(_ => ja(_.getChannelData(0).subarray(e)), _ => {
    if (_.name === "timeout" || _.name === "suspended") return -3;
    throw _
  }));
  return () => (u(), l)
}

function za() {
  return te() && !un() && !Ra()
}

function Ma() {
  return te() && lt() && ct() || Re() && Pa() && Sa()
}

function Ca(n) {
  let i = () => {};
  return [new Promise((s, u) => {
    let l = !1,
      _ = 0,
      d = 0;
    n.oncomplete = h => s(h.renderedBuffer);
    const y = () => {
        setTimeout(() => u(zn("timeout")), Math.min(500, d + 5e3 - Date.now()))
      },
      p = () => {
        try {
          const h = n.startRendering();
          switch (mr(h) && ze(h), n.state) {
            case "running":
              d = Date.now(), l && y();
              break;
            case "suspended":
              document.hidden || _++, l && _ >= 3 ? u(zn("suspended")) : setTimeout(p, 500);
              break
          }
        } catch (h) {
          u(h)
        }
      };
    p(), i = () => {
      l || (l = !0, d > 0 && y())
    }
  }), i]
}

function ja(n) {
  let t = 0;
  for (let e = 0; e < n.length; ++e) t += Math.abs(n[e]);
  return t
}

function zn(n) {
  const t = new Error(n);
  return t.name = n, t
}
async function yr(n, t, e = 50) {
  var r, o, i;
  const a = document;
  for (; !a.body;) await kt(e);
  const s = a.createElement("iframe");
  try {
    for (await new Promise((u, l) => {
        let _ = !1;
        const d = () => {
            _ = !0, u()
          },
          y = v => {
            _ = !0, l(v)
          };
        s.onload = d, s.onerror = y;
        const {
          style: p
        } = s;
        p.setProperty("display", "block", "important"), p.position = "absolute", p.top = "0", p.left = "0", p.visibility = "hidden", t && "srcdoc" in s ? s.srcdoc = t : s.src = "about:blank", a.body.appendChild(s);
        const h = () => {
          var v, E;
          _ || (((E = (v = s.contentWindow) === null || v === void 0 ? void 0 : v.document) === null || E === void 0 ? void 0 : E.readyState) === "complete" ? d() : setTimeout(h, 10))
        };
        h()
      }); !(!((o = (r = s.contentWindow) === null || r === void 0 ? void 0 : r.document) === null || o === void 0) && o.body);) await kt(e);
    return await n(s, s.contentWindow)
  } finally {
    (i = s.parentNode) === null || i === void 0 || i.removeChild(s)
  }
}

function Ba(n) {
  const [t, e] = da(n), r = document.createElement(t ?? "div");
  for (const o of Object.keys(e)) {
    const i = e[o].join(" ");
    o === "style" ? Fa(r.style, i) : r.setAttribute(o, i)
  }
  return r
}

function Fa(n, t) {
  for (const e of t.split(";")) {
    const r = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(e);
    if (r) {
      const [, o, i, , a] = r;
      n.setProperty(o, i, a || "")
    }
  }
}

function Ua() {
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
const Ga = "mmMwWLliI0O&1",
  qa = "48px",
  Te = ["monospace", "sans-serif", "serif"],
  Mn = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function Wa() {
  return yr(async (n, {
    document: t
  }) => {
    const e = t.body;
    e.style.fontSize = qa;
    const r = t.createElement("div");
    r.style.setProperty("visibility", "hidden", "important");
    const o = {},
      i = {},
      a = p => {
        const h = t.createElement("span"),
          {
            style: v
          } = h;
        return v.position = "absolute", v.top = "0", v.left = "0", v.fontFamily = p, h.textContent = Ga, r.appendChild(h), h
      },
      s = (p, h) => a(`'${p}',${h}`),
      u = () => Te.map(a),
      l = () => {
        const p = {};
        for (const h of Mn) p[h] = Te.map(v => s(h, v));
        return p
      },
      _ = p => Te.some((h, v) => p[v].offsetWidth !== o[h] || p[v].offsetHeight !== i[h]),
      d = u(),
      y = l();
    e.appendChild(r);
    for (let p = 0; p < Te.length; p++) o[Te[p]] = d[p].offsetWidth, i[Te[p]] = d[p].offsetHeight;
    return Mn.filter(p => _(y[p]))
  })
}

function Va() {
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

function Ka() {
  return Ha(es())
}

function Ha(n) {
  let t = !1,
    e, r;
  const [o, i] = $a();
  return Xa(o, i) ? (t = Ya(i), n ? e = r = "skipped" : [e, r] = Ja(o, i)) : e = r = "unsupported", {
    winding: t,
    geometry: e,
    text: r
  }
}

function $a() {
  const n = document.createElement("canvas");
  return n.width = 1, n.height = 1, [n, n.getContext("2d")]
}

function Xa(n, t) {
  return !!(t && n.toDataURL)
}

function Ya(n) {
  return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), !n.isPointInPath(5, 5, "evenodd")
}

function Ja(n, t) {
  Za(n, t);
  const e = Ct(n),
    r = Ct(n);
  return e !== r ? ["unstable", "unstable"] : (Qa(n, t), [Ct(n), e])
}

function Za(n, t) {
  n.width = 240, n.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
  const e = "Cwm fjordbank gly 😃";
  t.fillText(e, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(e, 4, 45)
}

function Qa(n, t) {
  n.width = 122, n.height = 110, t.globalCompositeOperation = "multiply";
  for (const [e, r, o] of [
      ["#f2f", 40, 40],
      ["#2ff", 80, 40],
      ["#ff2", 60, 80]
    ]) t.fillStyle = e, t.beginPath(), t.arc(r, o, 40, 0, Math.PI * 2, !0), t.closePath(), t.fill();
  t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, Math.PI * 2, !0), t.arc(60, 60, 20, 0, Math.PI * 2, !0), t.fill("evenodd")
}

function Ct(n) {
  return n.toDataURL()
}

function es() {
  const n = te() && lt() && ct(),
    t = ut() && Oa();
  return n || t
}

function ts() {
  const n = navigator;
  let t = 0,
    e;
  n.maxTouchPoints !== void 0 ? t = cn(n.maxTouchPoints) : n.msMaxTouchPoints !== void 0 && (t = n.msMaxTouchPoints);
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

function ns() {
  return navigator.oscpu
}

function rs() {
  const n = navigator,
    t = [],
    e = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(n.languages)) Re() && ka() || t.push(n.languages);
  else if (typeof n.languages == "string") {
    const r = n.languages;
    r && t.push(r.split(","))
  }
  return t
}

function os() {
  return window.screen.colorDepth
}

function is() {
  return oe(ee(navigator.deviceMemory), void 0)
}

function as() {
  if (!(te() && lt() && ct())) return ss()
}

function ss() {
  const n = screen,
    t = r => oe(cn(r), null),
    e = [t(n.width), t(n.height)];
  return e.sort().reverse(), e
}
const cs = 2500,
  us = 10;
let gt, jt;

function ls() {
  if (jt !== void 0) return;
  const n = () => {
    const t = Yt();
    Jt(t) ? jt = setTimeout(n, cs) : (gt = t, jt = void 0)
  };
  n()
}

function ds() {
  return ls(), async () => {
    let n = Yt();
    if (Jt(n)) {
      if (gt) return [...gt];
      Na() && (await Da(), n = Yt())
    }
    return Jt(n) || (gt = n), n
  }
}

function _s() {
  const n = te() && lt() && ct(),
    t = ut() && wr();
  if (n || t) return () => Promise.resolve(void 0);
  const e = ds();
  return async () => {
    const r = await e(),
      o = i => i === null ? null : hr(i, us);
    return [o(r[0]), o(r[1]), o(r[2]), o(r[3])]
  }
}

function Yt() {
  const n = screen;
  return [oe(ee(n.availTop), null), oe(ee(n.width) - ee(n.availWidth) - oe(ee(n.availLeft), 0), null), oe(ee(n.height) - ee(n.availHeight) - oe(ee(n.availTop), 0), null), oe(ee(n.availLeft), null)]
}

function Jt(n) {
  for (let t = 0; t < 4; ++t)
    if (n[t]) return !1;
  return !0
}

function fs() {
  const n = ps();
  return n !== void 0 && ut() && wr() ? n >= 8 ? 8 : 4 : n
}

function ps() {
  return oe(cn(navigator.hardwareConcurrency), void 0)
}

function ms() {
  var n;
  const t = (n = window.Intl) === null || n === void 0 ? void 0 : n.DateTimeFormat;
  if (t) {
    const r = new t().resolvedOptions().timeZone;
    if (r) return r
  }
  const e = -hs();
  return `UTC${e>=0?"+":""}${e}`
}

function hs() {
  const n = new Date().getFullYear();
  return Math.max(ee(new Date(n, 0, 1).getTimezoneOffset()), ee(new Date(n, 6, 1).getTimezoneOffset()))
}

function gs() {
  try {
    return !!window.sessionStorage
  } catch {
    return !0
  }
}

function ws() {
  try {
    return !!window.localStorage
  } catch {
    return !0
  }
}

function ys() {
  if (!(gr() || Ta())) try {
    return !!window.indexedDB
  } catch {
    return !0
  }
}

function bs() {
  return !!window.openDatabase
}

function vs() {
  return navigator.cpuClass
}

function Es() {
  const {
    platform: n
  } = navigator;
  return n === "MacIntel" && te() && !un() ? Ia() ? "iPad" : "iPhone" : n
}

function Ts() {
  return navigator.vendor || ""
}

function Os() {
  const n = [];
  for (const t of ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]) {
    const e = window[t];
    e && typeof e == "object" && n.push(t)
  }
  return n.sort()
}

function ks() {
  const n = document;
  try {
    n.cookie = "cookietest=1; SameSite=Strict;";
    const t = n.cookie.indexOf("cookietest=") !== -1;
    return n.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
  } catch {
    return !1
  }
}

function Ss() {
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
async function As({
  debug: n
} = {}) {
  if (!Rs()) return;
  const t = Ss(),
    e = Object.keys(t),
    r = [].concat(...e.map(a => t[a])),
    o = await Is(r);
  n && Ns(t, o);
  const i = e.filter(a => {
    const s = t[a];
    return K(s.map(l => o[l])) > s.length * .6
  });
  return i.sort(), i
}

function Rs() {
  return te() || Nt()
}
async function Is(n) {
  var t;
  const e = document,
    r = e.createElement("div"),
    o = new Array(n.length),
    i = {};
  Cn(r);
  for (let a = 0; a < n.length; ++a) {
    const s = Ba(n[a]);
    s.tagName === "DIALOG" && s.show();
    const u = e.createElement("div");
    Cn(u), u.appendChild(s), r.appendChild(u), o[a] = s
  }
  for (; !e.body;) await kt(50);
  e.body.appendChild(r);
  try {
    for (let a = 0; a < n.length; ++a) o[a].offsetParent || (i[n[a]] = !0)
  } finally {
    (t = r.parentNode) === null || t === void 0 || t.removeChild(r)
  }
  return i
}

function Cn(n) {
  n.style.setProperty("visibility", "hidden", "important"), n.style.setProperty("display", "block", "important")
}

function Ns(n, t) {
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

function Ds() {
  for (const n of ["rec2020", "p3", "srgb"])
    if (matchMedia(`(color-gamut: ${n})`).matches) return n
}

function Ps() {
  if (jn("inverted")) return !0;
  if (jn("none")) return !1
}

function jn(n) {
  return matchMedia(`(inverted-colors: ${n})`).matches
}

function Ls() {
  if (Bn("active")) return !0;
  if (Bn("none")) return !1
}

function Bn(n) {
  return matchMedia(`(forced-colors: ${n})`).matches
}
const xs = 100;

function zs() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (let n = 0; n <= xs; ++n)
      if (matchMedia(`(max-monochrome: ${n})`).matches) return n;
    throw new Error("Too high value")
  }
}

function Ms() {
  if (Oe("no-preference")) return 0;
  if (Oe("high") || Oe("more")) return 1;
  if (Oe("low") || Oe("less")) return -1;
  if (Oe("forced")) return 10
}

function Oe(n) {
  return matchMedia(`(prefers-contrast: ${n})`).matches
}

function Cs() {
  if (Fn("reduce")) return !0;
  if (Fn("no-preference")) return !1
}

function Fn(n) {
  return matchMedia(`(prefers-reduced-motion: ${n})`).matches
}

function js() {
  if (Un("reduce")) return !0;
  if (Un("no-preference")) return !1
}

function Un(n) {
  return matchMedia(`(prefers-reduced-transparency: ${n})`).matches
}

function Bs() {
  if (Gn("high")) return !0;
  if (Gn("standard")) return !1
}

function Gn(n) {
  return matchMedia(`(dynamic-range: ${n})`).matches
}
const M = Math,
  H = () => 0;

function Fs() {
  const n = M.acos || H,
    t = M.acosh || H,
    e = M.asin || H,
    r = M.asinh || H,
    o = M.atanh || H,
    i = M.atan || H,
    a = M.sin || H,
    s = M.sinh || H,
    u = M.cos || H,
    l = M.cosh || H,
    _ = M.tan || H,
    d = M.tanh || H,
    y = M.exp || H,
    p = M.expm1 || H,
    h = M.log1p || H,
    v = g => M.pow(M.PI, g),
    E = g => M.log(g + M.sqrt(g * g - 1)),
    D = g => M.log(g + M.sqrt(g * g + 1)),
    b = g => M.log((1 + g) / (1 - g)) / 2,
    k = g => M.exp(g) - 1 / M.exp(g) / 2,
    A = g => (M.exp(g) + 1 / M.exp(g)) / 2,
    P = g => M.exp(g) - 1,
    C = g => (M.exp(2 * g) - 1) / (M.exp(2 * g) + 1),
    S = g => M.log(1 + g);
  return {
    acos: n(.12312423423423424),
    acosh: t(1e308),
    acoshPf: E(1e154),
    asin: e(.12312423423423424),
    asinh: r(1),
    asinhPf: D(1),
    atanh: o(.5),
    atanhPf: b(.5),
    atan: i(.5),
    sin: a(-1e300),
    sinh: s(1),
    sinhPf: k(1),
    cos: u(10.000000000123),
    cosh: l(1),
    coshPf: A(1),
    tan: _(-1e300),
    tanh: d(1),
    tanhPf: C(1),
    exp: y(1),
    expm1: p(1),
    expm1Pf: P(1),
    log1p: h(10),
    log1pPf: S(10),
    powPI: v(-100)
  }
}
const Us = "mmMwWLliI0fiflO&1",
  Bt = {
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

function Gs() {
  return Ws((n, t, e) => {
    const r = {},
      o = {};
    for (const a of Object.keys(Bt)) {
      const [s = {}, u = Us] = Bt[a], l = n.createElement("span");
      l.textContent = u, l.style.whiteSpace = "nowrap";
      for (const _ of Object.keys(s)) {
        const d = s[_];
        d !== void 0 && (l.style[_] = d)
      }
      r[a] = l, t.append(n.createElement("br"), l)
    }
    const i = Re() && Aa();
    for (const a of Object.keys(Bt)) {
      const s = r[a].getBoundingClientRect().width;
      o[a] = i ? qs(s * e.devicePixelRatio) : s
    }
    return o
  })
}

function qs(n) {
  const t = Nt() ? 0 : 3,
    e = Math.pow(10, t);
  return Math.floor(n * e) / e
}

function Ws(n, t = 4e3) {
  return yr((e, r) => {
    const o = r.document,
      i = o.body,
      a = i.style;
    a.width = `${t}px`, a.webkitTextSizeAdjust = a.textSizeAdjust = "none", Re() ? i.style.zoom = `${1/r.devicePixelRatio}` : te() && (i.style.zoom = "reset");
    const s = o.createElement("div");
    return s.textContent = [...Array(t / 20 << 0)].map(() => "word").join(" "), i.appendChild(s), n(o, i, r)
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
}

function Vs() {
  return navigator.pdfViewerEnabled
}

function Ks() {
  const n = new Float32Array(1),
    t = new Uint8Array(n.buffer);
  return n[0] = 1 / 0, n[0] = n[0] - n[0], t[3]
}

function Hs() {
  const {
    ApplePaySession: n
  } = window;
  if (typeof(n == null ? void 0 : n.canMakePayments) != "function") return -1;
  if ($s()) return -3;
  try {
    return n.canMakePayments() ? 1 : 0
  } catch (t) {
    return Xs(t)
  }
}
const $s = Ua;

function Xs(n) {
  if (n instanceof Error && n.name === "InvalidAccessError" && /\bfrom\b.*\binsecure\b/i.test(n.message)) return -2;
  throw n
}

function Ys() {
  var n;
  const t = document.createElement("a"),
    e = (n = t.attributionSourceId) !== null && n !== void 0 ? n : t.attributionsourceid;
  return e === void 0 ? void 0 : String(e)
}
const br = -1,
  vr = -2,
  Js = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
  Zs = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  Qs = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
  ec = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
  Er = "WEBGL_debug_renderer_info",
  tc = "WEBGL_polygon_mode";

function nc({
  cache: n
}) {
  var t, e, r, o, i, a;
  const s = Tr(n);
  if (!s) return br;
  if (!kr(s)) return vr;
  const u = Or() ? null : s.getExtension(Er);
  return {
    version: ((t = s.getParameter(s.VERSION)) === null || t === void 0 ? void 0 : t.toString()) || "",
    vendor: ((e = s.getParameter(s.VENDOR)) === null || e === void 0 ? void 0 : e.toString()) || "",
    vendorUnmasked: u ? (r = s.getParameter(u.UNMASKED_VENDOR_WEBGL)) === null || r === void 0 ? void 0 : r.toString() : "",
    renderer: ((o = s.getParameter(s.RENDERER)) === null || o === void 0 ? void 0 : o.toString()) || "",
    rendererUnmasked: u ? (i = s.getParameter(u.UNMASKED_RENDERER_WEBGL)) === null || i === void 0 ? void 0 : i.toString() : "",
    shadingLanguageVersion: ((a = s.getParameter(s.SHADING_LANGUAGE_VERSION)) === null || a === void 0 ? void 0 : a.toString()) || ""
  }
}

function rc({
  cache: n
}) {
  const t = Tr(n);
  if (!t) return br;
  if (!kr(t)) return vr;
  const e = t.getSupportedExtensions(),
    r = t.getContextAttributes(),
    o = [],
    i = [],
    a = [],
    s = [],
    u = [];
  if (r)
    for (const _ of Object.keys(r)) i.push(`${_}=${r[_]}`);
  const l = qn(t);
  for (const _ of l) {
    const d = t[_];
    a.push(`${_}=${d}${Js.has(d)?`=${t.getParameter(d)}`:""}`)
  }
  if (e)
    for (const _ of e) {
      if (_ === Er && Or() || _ === tc && ac()) continue;
      const d = t.getExtension(_);
      if (!d) {
        o.push(_);
        continue
      }
      for (const y of qn(d)) {
        const p = d[y];
        s.push(`${y}=${p}${Zs.has(p)?`=${t.getParameter(p)}`:""}`)
      }
    }
  for (const _ of Qs)
    for (const d of ec) {
      const y = oc(t, _, d);
      u.push(`${_}.${d}=${y.join(",")}`)
    }
  return s.sort(), a.sort(), {
    contextAttributes: i,
    parameters: a,
    shaderPrecisions: u,
    extensions: e,
    extensionParameters: s,
    unsupportedExtensions: o
  }
}

function Tr(n) {
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

function oc(n, t, e) {
  const r = n.getShaderPrecisionFormat(n[t], n[e]);
  return r ? [r.rangeMin, r.rangeMax, r.precision] : []
}

function qn(n) {
  return Object.keys(n.__proto__).filter(ic)
}

function ic(n) {
  return typeof n == "string" && !n.match(/[^A-Z0-9_x]/)
}

function Or() {
  return ut()
}

function ac() {
  return Re() || te()
}

function kr(n) {
  return typeof n.getParameter == "function"
}

function sc() {
  if (!(Nt() || te())) return -2;
  if (!window.AudioContext) return -1;
  const t = new AudioContext().baseLatency;
  return t == null ? -1 : isFinite(t) ? t : -3
}

function cc() {
  if (!window.Intl) return -1;
  const n = window.Intl.DateTimeFormat;
  if (!n) return -2;
  const t = n().resolvedOptions().locale;
  return !t && t !== "" ? -3 : t
}

function uc(n) {
  return /not/i.test(n)
}
async function lc() {
  const n = navigator.userAgentData;
  if (!n) return;
  const t = n.brands.filter(({
      brand: o
    }) => !uc(o)).map(({
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
const dc = {
  userAgentData: lc,
  fonts: Wa,
  domBlockers: As,
  fontPreferences: Gs,
  audio: La,
  screenFrame: _s,
  canvas: Ka,
  osCpu: ns,
  languages: rs,
  colorDepth: os,
  deviceMemory: is,
  screenResolution: as,
  hardwareConcurrency: fs,
  timezone: ms,
  sessionStorage: gs,
  localStorage: ws,
  indexedDB: ys,
  openDatabase: bs,
  cpuClass: vs,
  platform: Es,
  plugins: Va,
  touchSupport: ts,
  vendor: Ts,
  vendorFlavors: Os,
  cookiesEnabled: ks,
  colorGamut: Ds,
  invertedColors: Ps,
  forcedColors: Ls,
  monochrome: zs,
  contrast: Ms,
  reducedMotion: Cs,
  reducedTransparency: js,
  hdr: Bs,
  math: Fs,
  pdfViewerEnabled: Vs,
  architecture: Ks,
  applePay: Hs,
  privateClickMeasurement: Ys,
  audioBaseLatency: sc,
  dateTimeLocale: cc,
  webGlBasics: nc,
  webGlExtensions: rc
};

function _c(n) {
  return Ea(dc, n, [])
}
const fc = "$ if upgrade to Pro: https://fingerprint.com/github/?utm_source=oss&utm_medium=referral&utm_campaign=confidence_score";

function pc(n) {
  const t = mc(n),
    e = hc(t);
  return {
    score: t,
    comment: fc.replace(/\$/g, `${e}`)
  }
}

function mc(n) {
  if (Nt()) return .4;
  if (te()) return un() && !(lt() && ct()) ? .5 : .3;
  const t = "value" in n.platform ? n.platform.value : "";
  return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
}

function hc(n) {
  return hr(.99 + .01 * n, 1e-4)
}

function gc(n) {
  let t = "";
  for (const e of Object.keys(n).sort()) {
    const r = n[e],
      o = "error" in r ? "error" : JSON.stringify(r.value);
    t += `${t?"|":""}${e.replace(/([:|\\])/g,"\\$1")}:${o}`
  }
  return t
}

function Sr(n) {
  return JSON.stringify(n, (t, e) => e instanceof Error ? wa(e) : e, 2)
}

function Ar(n) {
  return ga(gc(n))
}

function wc(n) {
  let t;
  const e = pc(n);
  return {
    get visitorId() {
      return t === void 0 && (t = Ar(this.components)), t
    },
    set visitorId(r) {
      t = r
    },
    confidence: e,
    components: n,
    version: pr
  }
}

function yc(n = 50) {
  return ca(n, n * 2)
}

function bc(n, t) {
  const e = Date.now();
  return {
    async get(r) {
      const o = Date.now(),
        i = await n(),
        a = wc(i);
      return (t || r != null && r.debug) && console.log(`Copy the text below to get the debug data:

\`\`\`
version: ${a.version}
userAgent: ${navigator.userAgent}
timeBetweenLoadAndGet: ${o-e}
visitorId: ${a.visitorId}
components: ${Sr(i)}
\`\`\``), a
    }
  }
}

function vc() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const n = new XMLHttpRequest;
    n.open("get", `https://m1.openfpcdn.io/fingerprintjs/v${pr}/npm-monitoring`, !0), n.send()
  } catch (n) {
    console.error(n)
  }
}
async function Ec(n = {}) {
  const {
    delayFallback: t,
    debug: e,
    monitoring: r = !0
  } = n;
  r && vc(), await yc(t);
  const o = _c({
    cache: {},
    debug: e
  });
  return bc(o, e)
}
var Rr = {
  load: Ec,
  hashComponents: Ar,
  componentsToDebugString: Sr
};
let Ft = null;
async function Tc() {
  return Ft || (Ft = Rr.load()), Ft
}
async function Zt() {
  return Oc().then(n => n.visitorId)
}
async function Oc() {
  var p;
  const t = await (await Tc()).get();
  let e = t.components;
  const r = Xo(),
    o = navigator.userAgent.toLowerCase(),
    i = o.includes("iphone"),
    a = o.includes("macintosh"),
    s = i || a,
    u = o.includes("android");
  if (s) e = t.components;
  else if (r === "Chrome") {
    const {
      languages: h,
      ...v
    } = t.components;
    e = v
  } else if (r === "Firefox") {
    const {
      languages: h,
      dateTimeLocale: v,
      ...E
    } = t.components;
    e = E
  } else if (r === "Brave") {
    const {
      fonts: h,
      audio: v,
      canvas: E,
      hardwareConcurrency: D,
      plugins: b,
      deviceMemory: k,
      languages: A,
      dateTimeLocale: P,
      ...C
    } = t.components;
    e = C
  } else {
    const {
      languages: h,
      ...v
    } = t.components;
    e = v
  }(r === "Safari" || u) && (e = {
    userAgent: {
      value: navigator.userAgent,
      duration: 0
    },
    ...e
  }), r === "Safari" && (e = {
    canvas2d: {
      value: await fn(),
      duration: 0
    },
    canvasWebgl: {
      value: await _i(),
      duration: 0
    },
    ...e
  }), r === "Firefox" && (e = {
    ...e,
    fonts: {
      value: [(p = e.fonts) == null ? void 0 : p.value, await si()],
      duration: e.fonts.duration
    }
  }), u && (e = {
    canvas2d: {
      value: await fn(),
      duration: 0
    },
    ...e
  });
  const l = Rr.hashComponents(e),
    _ = l.length,
    d = _ >> 2 | 2;
  return {
    visitorId: l.slice(0, d) + (_ * 5).toString(16) + l.slice(d + (_ >> 4)),
    components: e
  }
}

function kc() {
  return aa.start({
    apiKey: Wr,
    endpoints: ["https://wplace.live/7eskSe93usV8ENxB/?region=eu"],
    region: "eu"
  })
}
const Wn = "theme";
var Me, Ce, je, Be, Fe, Ue, Ge, qe, We, Ve, Ke;
class Sc {
  constructor() {
    j(this, Me, V(!1));
    j(this, Ce, V(!1));
    j(this, je, V(!1));
    j(this, Be, V(0));
    j(this, Fe, V(!1));
    j(this, Ue, V(vt(Ac())));
    j(this, Ge, V(null));
    j(this, qe, V(!1));
    j(this, We, V("custom-winter"));
    j(this, Ve, V(vt(Date.now())));
    j(this, Ke, V(void 0));
    setInterval(() => {
      q(T(this, Ve), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(Wn), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return G(T(this, Me))
  }
  set dropletsDialogOpen(t) {
    q(T(this, Me), t, !0)
  }
  get pendingHistoryDialogOpen() {
    return G(T(this, Ce))
  }
  set pendingHistoryDialogOpen(t) {
    q(T(this, Ce), t, !0)
  }
  get storeDialogOpen() {
    return G(T(this, je))
  }
  set storeDialogOpen(t) {
    q(T(this, je), t, !0)
  }
  get storeTabIndex() {
    return G(T(this, Be))
  }
  set storeTabIndex(t) {
    q(T(this, Be), t, !0)
  }
  get muted() {
    return G(T(this, Fe))
  }
  set muted(t) {
    q(T(this, Fe), t, !0)
  }
  get language() {
    return G(T(this, Ue))
  }
  set language(t) {
    q(T(this, Ue), t, !0)
  }
  get map() {
    return G(T(this, Ge))
  }
  set map(t) {
    q(T(this, Ge), t)
  }
  get automatedClicks() {
    return G(T(this, qe))
  }
  set automatedClicks(t) {
    q(T(this, qe), t, !0)
  }
  get theme() {
    return G(T(this, We))
  }
  set theme(t) {
    q(T(this, We), t, !0), localStorage.setItem(Wn, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return G(T(this, Ve))
  }
  get captcha() {
    return Rc ? G(T(this, Ke)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    q(T(this, Ke), t, !0)
  }
}
Me = new WeakMap, Ce = new WeakMap, je = new WeakMap, Be = new WeakMap, Fe = new WeakMap, Ue = new WeakMap, Ge = new WeakMap, qe = new WeakMap, We = new WeakMap, Ve = new WeakMap, Ke = new WeakMap;
const Ir = new Sc;

function Ac() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(t => t.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const Rc = Vr.toLowerCase() !== "false",
  Ic = `
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
async function Nc() {
  try {
    const n = await fetch(`${rn}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!n.ok) return null;
    const t = await n.json(),
      e = await Dc(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function Dc(n, t) {
  return new Promise(e => {
    const r = new Blob([Ic], {
        type: "application/javascript"
      }),
      o = URL.createObjectURL(r),
      i = new Worker(o),
      a = setTimeout(() => {
        i.terminate(), URL.revokeObjectURL(o), e(null)
      }, 12e4);
    i.onmessage = s => {
      clearTimeout(a), i.terminate(), URL.revokeObjectURL(o), s.data.error ? e(null) : e(s.data.nonce)
    }, i.onerror = () => {
      clearTimeout(a), i.terminate(), URL.revokeObjectURL(o), e(null)
    }, i.postMessage({
      prefix: n,
      difficulty: t
    })
  })
}
const Nr = 3;
var He, $e;
class Pc {
  constructor() {
    j(this, He, V(null));
    j(this, $e, V(0))
  }
  get current() {
    return G(T(this, He))
  }
  set current(t) {
    q(T(this, He), t, !0)
  }
  get errorCount() {
    return G(T(this, $e))
  }
  set errorCount(t) {
    q(T(this, $e), t, !0)
  }
}
He = new WeakMap, $e = new WeakMap;
const $ = new Pc;
async function Vn(n) {
  if (n === 1) return Lc();
  if (n === 2) {
    const t = await Dr();
    return t ? Kn("turnstile", t) : !1
  }
  if (n === 3) {
    const t = await xc();
    return t ? Kn("hcaptcha", t) : !1
  }
  return n === 4 ? zc() : !1
}
async function Lc() {
  for (let n = 0; n < Nr; n++) try {
    const t = await Nc();
    if (!t) continue;
    return await fe.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}
async function Kn(n, t) {
  try {
    const e = await fe.postCaptchaSession({
      provider: n,
      token: t
    });
    return await fe.verifyChallenge({
      type: "captcha",
      sessionId: e.sessionId
    }), !0
  } catch {
    return !1
  }
}
const Ae = {};

function Dr() {
  return Pr(2)
}

function xc() {
  return Pr(3)
}

function Pr(n) {
  const t = Ae[n];
  if (t) return t;
  const e = new Promise(r => {
    $.errorCount = 0, $.current = {
      tier: n,
      resolve: o => {
        delete Ae[n], r(o)
      }
    }
  });
  return Ae[n] = e, e
}

function zc() {
  const n = Ae[4];
  if (n) return n;
  const t = new Promise(e => {
    $.errorCount = 0, $.current = {
      tier: 4,
      resolve: r => {
        delete Ae[4], e(r)
      }
    }
  });
  return Ae[4] = t, t
}

function $R(n) {
  const t = $.current;
  !t || t.tier === 4 || (t.resolve(n), $.current = null)
}

function XR() {
  const n = $.current;
  !n || n.tier === 4 || ($.errorCount += 1, $.errorCount >= Nr && (n.resolve(void 0), $.current = null))
}

function YR() {
  const n = $.current;
  !n || n.tier !== 4 || (n.resolve(!0), $.current = null)
}

function JR() {
  const n = $.current;
  n && (n.tier === 4 ? n.resolve(!1) : n.resolve(void 0), $.current = null)
}
const Mc = () => "Your account has been suspended for breaking the rules",
  Cc = () => "Sua conta foi suspensa por quebrar as regras",
  jc = () => "您的账号因违反规则已被暂停",
  Bc = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  Fc = () => "Tu cuenta ha sido suspendida por infringir las regras",
  Uc = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  Gc = () => "Il tuo account è stato sospeso per aver infranto le regole",
  qc = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  Wc = () => "Twoje konto zostało zawieszone za łamanie zasad",
  Vc = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Kc = () => "Ваш обліковий запис було призупинено за порушення правил",
  Hc = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  Hn = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Mc() : e === "pt" ? Cc() : e === "ch" ? jc() : e === "de" ? Bc() : e === "es" ? Fc() : e === "fr" ? Uc() : e === "it" ? Gc() : e === "jp" ? qc() : e === "pl" ? Wc() : e === "ru" ? Vc() : e === "uk" ? Kc() : Hc()
  },
  $c = () => "Alliance name already taken",
  Xc = () => "Já possui uma aliança com esse nome",
  Yc = () => "该联盟名称已被占用",
  Jc = () => "Der Allianzname ist bereits vergeben",
  Zc = () => "Ese nombre de alianza ya está en uso",
  Qc = () => "Ce nom d’alliance est déjà pris",
  eu = () => "Esiste già un'alleanza con questo nome",
  tu = () => "このアライアンス名は既に使用されています。",
  nu = () => "Nazwa sojuszu jest już zajęta",
  ru = () => "Такое название альянса уже используется",
  ou = () => "Назва альянсу вже зайнята",
  iu = () => "Tên liên minh đã được sử dụng",
  au = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? $c() : e === "pt" ? Xc() : e === "ch" ? Yc() : e === "de" ? Jc() : e === "es" ? Zc() : e === "fr" ? Qc() : e === "it" ? eu() : e === "jp" ? tu() : e === "pl" ? nu() : e === "ru" ? ru() : e === "uk" ? ou() : iu()
  },
  su = () => "Alliance name exceeded the maximum number of characters",
  cu = () => "O nome da aliança excedeu o número máximo de caracteres",
  uu = () => "联盟名称超过最大字符数限制",
  lu = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  du = () => "El nombre de la alianza superó el número máximo de caracteres",
  _u = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  fu = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  pu = () => "アライアンス名が最大文字数を超えています。",
  mu = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  hu = () => "Название альянса превышает максимальную длину",
  gu = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  wu = () => "Tên liên minh vượt quá số ký tự cho phép",
  yu = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? su() : e === "pt" ? cu() : e === "ch" ? uu() : e === "de" ? lu() : e === "es" ? du() : e === "fr" ? _u() : e === "it" ? fu() : e === "jp" ? pu() : e === "pl" ? mu() : e === "ru" ? hu() : e === "uk" ? gu() : wu()
  },
  bu = () => "Alliance with empty name",
  vu = () => "Aliança com nome vazio",
  Eu = () => "名称为空的联盟",
  Tu = () => "Allianz mit leerem Namen",
  Ou = () => "Alianza con nombre vacío",
  ku = () => "Alliance avec nom vide",
  Su = () => "Alleanza con nome vuoto",
  Au = () => "名前が空のアライアンスです。",
  Ru = () => "Sojusz z pustą nazwą",
  Iu = () => "Альянс с пустым названием",
  Nu = () => "Альянс із порожньою назвою",
  Du = () => "Liên minh không có tên",
  Pu = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? bu() : e === "pt" ? vu() : e === "ch" ? Eu() : e === "de" ? Tu() : e === "es" ? Ou() : e === "fr" ? ku() : e === "it" ? Su() : e === "jp" ? Au() : e === "pl" ? Ru() : e === "ru" ? Iu() : e === "uk" ? Nu() : Du()
  },
  Lu = () => "Botting",
  xu = () => "Uso de bots",
  zu = () => "脚本",
  Mu = () => "Bot-Nutzung",
  Cu = () => "Botting",
  ju = () => "Bots",
  Bu = () => "Uso di bot",
  Fu = () => "ボット使用",
  Uu = () => "Botting",
  Gu = () => "Боттинг",
  qu = () => "Боти",
  Wu = () => "Botting",
  Vu = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Lu() : e === "pt" ? xu() : e === "ch" ? zu() : e === "de" ? Mu() : e === "es" ? Cu() : e === "fr" ? ju() : e === "it" ? Bu() : e === "jp" ? Fu() : e === "pl" ? Uu() : e === "ru" ? Gu() : e === "uk" ? qu() : Wu()
  },
  Ku = () => "Use of software to completely automate painting",
  Hu = () => "Uso de software para pintar de forma completamente automatizada ",
  $u = () => "使用软件完全自动化绘制",
  Xu = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  Yu = () => "Uso de software para automatizar completamente la pintura",
  Ju = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  Zu = () => "Uso di software per dipingere in modo completamente automatizzato",
  Qu = () => "ペイントを完全に自動化するソフトウェアの使用",
  el = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  tl = () => "Использование программ для полной автоматизации рисования",
  nl = () => "Використання програм, які повністю автоматизують малювання",
  rl = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  ol = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Ku() : e === "pt" ? Hu() : e === "ch" ? $u() : e === "de" ? Xu() : e === "es" ? Yu() : e === "fr" ? Ju() : e === "it" ? Zu() : e === "jp" ? Qu() : e === "pl" ? el() : e === "ru" ? tl() : e === "uk" ? nl() : rl()
  },
  il = () => "Breaking the rules",
  al = () => "Quebrar as regras",
  sl = () => "违反规则",
  cl = () => "Regeln brechen",
  ul = () => "Romper las reglas",
  ll = () => "Violation des règles",
  dl = () => "Violazione delle regole",
  _l = () => "ルール違反",
  fl = () => "Łamanie zasad",
  pl = () => "Нарушение правил",
  ml = () => "Порушення правил",
  hl = () => "Vi phạm luật",
  gl = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? il() : e === "pt" ? al() : e === "ch" ? sl() : e === "de" ? cl() : e === "es" ? ul() : e === "fr" ? ll() : e === "it" ? dl() : e === "jp" ? _l() : e === "pl" ? fl() : e === "ru" ? pl() : e === "uk" ? ml() : hl()
  },
  wl = () => "You have broken one of Wplace's rules",
  yl = () => "Você quebrou uma das regras do Wplace",
  bl = () => "你违反了 Wplace 的一项规则",
  vl = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  El = () => "Has infringido una de las reglas de Wplace",
  Tl = () => "Vous avez enfreint l’une des règles de Wplace",
  Ol = () => "Hai infranto una delle regole di Wplace",
  kl = () => "Wplaceのルールのいずれかに違反しました。",
  Sl = () => "Złamałeś jedną z zasad Wplace",
  Al = () => "Вы нарушили одно из правил Wplace",
  Rl = () => "Ви порушили одне з правил Wplace",
  Il = () => "Bạn đã vi phạm một trong các luật của Wplace",
  Nl = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? wl() : e === "pt" ? yl() : e === "ch" ? bl() : e === "de" ? vl() : e === "es" ? El() : e === "fr" ? Tl() : e === "it" ? Ol() : e === "jp" ? kl() : e === "pl" ? Sl() : e === "ru" ? Al() : e === "uk" ? Rl() : Il()
  },
  Dl = () => "You cannot paint over event pixels",
  Pl = () => "Você não pode pintar sobre pixels de eventos",
  Ll = () => "你不能覆盖活动像素",
  xl = () => "Du kannst nicht über Event-Pixel malen",
  zl = () => "No puedes pintar sobre píxeles de evento",
  Ml = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  Cl = () => "Non puoi dipingere sopra i pixel dell'evento",
  jl = () => "イベント用のピクセルの上には塗れません。",
  Bl = () => "Nie możesz malować po pikselach wydarzenia",
  Fl = () => "Вы не можете рисовать по пикселям события",
  Ul = () => "Ви не можете малювати поверх пікселів події",
  Gl = () => "Bạn không thể tô lên pixel sự kiện",
  $n = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Dl() : e === "pt" ? Pl() : e === "ch" ? Ll() : e === "de" ? xl() : e === "es" ? zl() : e === "fr" ? Ml() : e === "it" ? Cl() : e === "jp" ? jl() : e === "pl" ? Bl() : e === "ru" ? Fl() : e === "uk" ? Ul() : Gl()
  },
  ql = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Wl = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Vl = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  Kl = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  Hl = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  $l = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  Xl = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Yl = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Jl = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Zl = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  Ql = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  ed = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  td = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? ql() : e === "pt" ? Wl() : e === "ch" ? Vl() : e === "de" ? Kl() : e === "es" ? Hl() : e === "fr" ? $l() : e === "it" ? Xl() : e === "jp" ? Yl() : e === "pl" ? Jl() : e === "ru" ? Zl() : e === "uk" ? Ql() : ed()
  },
  nd = () => "Challenge verification not completed",
  rd = () => "Verificação do desafio não concluída",
  od = () => "挑战验证未完成",
  id = () => "Herausforderungsverifizierung nicht abgeschlossen",
  ad = () => "Verificación del desafío no completada",
  sd = () => "Vérification du défi non terminée",
  cd = () => "Verifica della sfida non completata",
  ud = () => "チャレンジ検証が完了していません",
  ld = () => "Weryfikacja wyzwania niezakończona",
  dd = () => "Верификация вызова не завершена",
  _d = () => "Перевірку виклику не завершено",
  fd = () => "Xác minh thử thách chưa hoàn thành",
  Ut = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? nd() : e === "pt" ? rd() : e === "ch" ? od() : e === "de" ? id() : e === "es" ? ad() : e === "fr" ? sd() : e === "it" ? cd() : e === "jp" ? ud() : e === "pl" ? ld() : e === "ru" ? dd() : e === "uk" ? _d() : fd()
  },
  pd = () => "Couldn't complete the purchase. This item does not exist.",
  md = () => "Não foi possível concluir a compra. Este item não existe.",
  hd = () => "无法完成购买。该物品不存在。",
  gd = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  wd = () => "No se pudo completar la compra. Este ítem no existe.",
  yd = () => "Achat impossible. Cet objet n’existe pas.",
  bd = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  vd = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Ed = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Td = () => "Не удалось завершить покупку. Этот предмет не существует.",
  Od = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  kd = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  Xn = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? pd() : e === "pt" ? md() : e === "ch" ? hd() : e === "de" ? gd() : e === "es" ? wd() : e === "fr" ? yd() : e === "it" ? bd() : e === "jp" ? vd() : e === "pl" ? Ed() : e === "ru" ? Td() : e === "uk" ? Od() : kd()
  },
  Sd = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  Ad = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  Rd = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  Id = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  Nd = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  Dd = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  Pd = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  Ld = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  xd = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  zd = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  Md = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  Cd = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  jd = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Sd() : e === "pt" ? Ad() : e === "ch" ? Rd() : e === "de" ? Id() : e === "es" ? Nd() : e === "fr" ? Dd() : e === "it" ? Pd() : e === "jp" ? Ld() : e === "pl" ? xd() : e === "ru" ? zd() : e === "uk" ? Md() : Cd()
  },
  Bd = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  Fd = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  Ud = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  Gd = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  qd = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  Wd = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  Vd = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  Kd = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  Hd = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  $d = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  Xd = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  Yd = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  Yn = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Bd() : e === "pt" ? Fd() : e === "ch" ? Ud() : e === "de" ? Gd() : e === "es" ? qd() : e === "fr" ? Wd() : e === "it" ? Vd() : e === "jp" ? Kd() : e === "pl" ? Hd() : e === "ru" ? $d() : e === "uk" ? Xd() : Yd()
  },
  Jd = () => "Doxxing",
  Zd = () => "Doxxing",
  Qd = () => "人肉搜索",
  e_ = () => "Doxxing",
  t_ = () => "Doxxing",
  n_ = () => "Doxxing",
  r_ = () => "Doxxing",
  o_ = () => "ドックス（Doxxing）",
  i_ = () => "Doxxing",
  a_ = () => "Докcинг",
  s_ = () => "Докcинг",
  c_ = () => "Doxxing",
  u_ = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Jd() : e === "pt" ? Zd() : e === "ch" ? Qd() : e === "de" ? e_() : e === "es" ? t_() : e === "fr" ? n_() : e === "it" ? r_() : e === "jp" ? o_() : e === "pl" ? i_() : e === "ru" ? a_() : e === "uk" ? s_() : c_()
  },
  l_ = () => "Released other's personal information without their consent",
  d_ = () => "Vazar informações pessoais de terceiros sem consentimento",
  __ = () => "在未获同意的情况下公开他人个人信息",
  f_ = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  p_ = () => "Divulgó información personal de otra persona sin su consentimiento",
  m_ = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  h_ = () => "Diffusione di informazioni personali di terzi senza consenso",
  g_ = () => "他人の個人情報を同意なく公開した。",
  w_ = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  y_ = () => "Публикация личной информации других людей без их согласия",
  b_ = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  v_ = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  E_ = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? l_() : e === "pt" ? d_() : e === "ch" ? __() : e === "de" ? f_() : e === "es" ? p_() : e === "fr" ? m_() : e === "it" ? h_() : e === "jp" ? g_() : e === "pl" ? w_() : e === "ru" ? y_() : e === "uk" ? b_() : v_()
  },
  T_ = () => "This email is already in use.",
  O_ = () => "Este e-mail já está em uso.",
  k_ = () => "This email is already in use.",
  S_ = () => "This email is already in use.",
  A_ = () => "Este correo electrónico ya está en uso.",
  R_ = () => "This email is already in use.",
  I_ = () => "Questa email è già in uso.",
  N_ = () => "This email is already in use.",
  D_ = () => "This email is already in use.",
  P_ = () => "This email is already in use.",
  L_ = () => "This email is already in use.",
  x_ = () => "This email is already in use.",
  z_ = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? T_() : e === "pt" ? O_() : e === "ch" ? k_() : e === "de" ? S_() : e === "es" ? A_() : e === "fr" ? R_() : e === "it" ? I_() : e === "jp" ? N_() : e === "pl" ? D_() : e === "ru" ? P_() : e === "uk" ? L_() : x_()
  },
  M_ = n => `This email is already in use by user #${n.userId}.`,
  C_ = n => `Este e-mail já está em uso pelo usuário #${n.userId}.`,
  j_ = n => `This email is already in use by user #${n.userId}.`,
  B_ = n => `This email is already in use by user #${n.userId}.`,
  F_ = n => `Este correo electrónico ya está en uso por el usuario #${n.userId}.`,
  U_ = n => `This email is already in use by user #${n.userId}.`,
  G_ = n => `Questa email è già in uso dall'utente #${n.userId}.`,
  q_ = n => `This email is already in use by user #${n.userId}.`,
  W_ = n => `This email is already in use by user #${n.userId}.`,
  V_ = n => `This email is already in use by user #${n.userId}.`,
  K_ = n => `This email is already in use by user #${n.userId}.`,
  H_ = n => `This email is already in use by user #${n.userId}.`,
  $_ = (n, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? M_(n) : e === "pt" ? C_(n) : e === "ch" ? j_(n) : e === "de" ? B_(n) : e === "es" ? F_(n) : e === "fr" ? U_(n) : e === "it" ? G_(n) : e === "jp" ? q_(n) : e === "pl" ? W_(n) : e === "ru" ? V_(n) : e === "uk" ? K_(n) : H_(n)
  },
  X_ = () => "Enter a valid email address.",
  Y_ = () => "Informe um endereço de e-mail válido.",
  J_ = () => "Enter a valid email address.",
  Z_ = () => "Enter a valid email address.",
  Q_ = () => "Introduce una dirección de correo electrónico válida.",
  ef = () => "Enter a valid email address.",
  tf = () => "Inserisci un indirizzo email valido.",
  nf = () => "Enter a valid email address.",
  rf = () => "Enter a valid email address.",
  of = () => "Enter a valid email address.",
  af = () => "Enter a valid email address.",
  sf = () => "Enter a valid email address.",
  cf = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? X_() : e === "pt" ? Y_() : e === "ch" ? J_() : e === "de" ? Z_() : e === "es" ? Q_() : e === "fr" ? ef() : e === "it" ? tf() : e === "jp" ? nf() : e === "pl" ? rf() : e === "ru" ? of() : e === "uk" ? af() : sf()
  },
  uf = n => `Error while painting: ${n.err}`,
  lf = n => `Erro enquanto pinta: ${n.err}`,
  df = n => `绘制时出错：${n.err}`,
  _f = n => `Fehler beim Malen: ${n.err}`,
  ff = n => `Error al pintar: ${n.err}`,
  pf = n => `Erreur lors de la peinture : ${n.err}`,
  mf = n => `Errore durante la pittura: ${n.err}`,
  hf = n => `ペイント中にエラーが発生しました: ${n.err}`,
  gf = n => `Błąd podczas malowania: ${n.err}`,
  wf = n => `Ошибка при рисовании: ${n.err}`,
  yf = n => `Помилка під час малювання: ${n.err}`,
  bf = n => `Lỗi khi tô: ${n.err}`,
  vf = (n, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? uf(n) : e === "pt" ? lf(n) : e === "ch" ? df(n) : e === "de" ? _f(n) : e === "es" ? ff(n) : e === "fr" ? pf(n) : e === "it" ? mf(n) : e === "jp" ? hf(n) : e === "pl" ? gf(n) : e === "ru" ? wf(n) : e === "uk" ? yf(n) : bf(n)
  },
  Ef = () => "Exceeded maximum number of characters",
  Tf = () => "Excedeu o número máximo de caracteres permitidos",
  Of = () => "超出最大字符数",
  kf = () => "Maximale Zeichenanzahl überschritten",
  Sf = () => "Se excedió el número máximo de caracteres",
  Af = () => "Nombre maximal de caractères dépassé",
  Rf = () => "Numero massimo di caratteri superato",
  If = () => "最大文字数を超過しました",
  Nf = () => "Przekroczono maksymalną liczbę znaków",
  Df = () => "Превышено максимальное количество символов",
  Pf = () => "Перевищено максимальну кількість символів",
  Lf = () => "Đã vượt quá số ký tự tối đa",
  xf = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Ef() : e === "pt" ? Tf() : e === "ch" ? Of() : e === "de" ? kf() : e === "es" ? Sf() : e === "fr" ? Af() : e === "it" ? Rf() : e === "jp" ? If() : e === "pl" ? Nf() : e === "ru" ? Df() : e === "uk" ? Pf() : Lf()
  },
  zf = () => "Verification code expired. Please request a new one.",
  Mf = () => "Código de verificação expirado. Por favor, solicite um novo.",
  Cf = () => "验证码已过期，请重新获取。",
  jf = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  Bf = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  Ff = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  Uf = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  Gf = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  qf = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  Wf = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  Vf = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  Kf = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  Hf = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? zf() : e === "pt" ? Mf() : e === "ch" ? Cf() : e === "de" ? jf() : e === "es" ? Bf() : e === "fr" ? Ff() : e === "it" ? Uf() : e === "jp" ? Gf() : e === "pl" ? qf() : e === "ru" ? Wf() : e === "uk" ? Vf() : Kf()
  },
  $f = () => "Griefing",
  Xf = () => "Griefing",
  Yf = () => "破坏行为",
  Jf = () => "Griefing",
  Zf = () => "Griefing",
  Qf = () => "Griefing",
  ep = () => "Griefing",
  tp = () => "グリーフィング",
  np = () => "Griefing",
  rp = () => "Гриферство",
  op = () => "Гріфінг",
  ip = () => "Griefing",
  ap = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? $f() : e === "pt" ? Xf() : e === "ch" ? Yf() : e === "de" ? Jf() : e === "es" ? Zf() : e === "fr" ? Qf() : e === "it" ? ep() : e === "jp" ? tp() : e === "pl" ? np() : e === "ru" ? rp() : e === "uk" ? op() : ip()
  },
  sp = () => "Messed up with other's artworks",
  cp = () => "Estragou os desenhos dos outros",
  up = () => "破坏了他人的作品",
  lp = () => "Kunstwerke anderer beschädigt",
  dp = () => "Arruinó las obras de arte de otros",
  _p = () => "A abîmé les œuvres des autres",
  fp = () => "Ha rovinato i disegni degli altri",
  pp = () => "他人の作品を荒らした",
  mp = () => "Zniszczył prace innych",
  hp = () => "Испортил чужие рисунки",
  gp = () => "Зіпсував роботи інших",
  wp = () => "Phá hỏng tranh của người khác",
  yp = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? sp() : e === "pt" ? cp() : e === "ch" ? up() : e === "de" ? lp() : e === "es" ? dp() : e === "fr" ? _p() : e === "it" ? fp() : e === "jp" ? pp() : e === "pl" ? mp() : e === "ru" ? hp() : e === "uk" ? gp() : wp()
  },
  bp = () => "Hate speech",
  vp = () => "Discurso de Ódio",
  Ep = () => "仇恨言论",
  Tp = () => "Hassrede",
  Op = () => "Discurso de odio",
  kp = () => "Discours haineux",
  Sp = () => "Discorso d'odio",
  Ap = () => "ヘイトスピーチ",
  Rp = () => "Mowa nienawiści",
  Ip = () => "Речь ненависти",
  Np = () => "Мова ворожнечі",
  Dp = () => "Ngôn từ thù hằn",
  Pp = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? bp() : e === "pt" ? vp() : e === "ch" ? Ep() : e === "de" ? Tp() : e === "es" ? Op() : e === "fr" ? kp() : e === "it" ? Sp() : e === "jp" ? Ap() : e === "pl" ? Rp() : e === "ru" ? Ip() : e === "uk" ? Np() : Dp()
  },
  Lp = () => "Racism, homophobia, hate groups, ...",
  xp = () => "Racismo, homofobia, grupos de ódio, ...",
  zp = () => "种族主义、恐同、仇恨团体等",
  Mp = () => "Rassismus, Homophobie, Hassgruppen, ...",
  Cp = () => "Racismo, homofobia, grupos de odio, ...",
  jp = () => "Racisme, homophobie, groupes haineux, ...",
  Bp = () => "Razzismo, omofobia, gruppi d'odio, ...",
  Fp = () => "人種差別、同性愛差別、ヘイト団体など。",
  Up = () => "Rasizm, homofobia, grupy nienawiści, ...",
  Gp = () => "Расизм, гомофобия, группы ненависти и т.п.",
  qp = () => "Расизм, гомофобія, групи ненависті, ...",
  Wp = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  Vp = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Lp() : e === "pt" ? xp() : e === "ch" ? zp() : e === "de" ? Mp() : e === "es" ? Cp() : e === "fr" ? jp() : e === "it" ? Bp() : e === "jp" ? Fp() : e === "pl" ? Up() : e === "ru" ? Gp() : e === "uk" ? qp() : Wp()
  },
  Kp = () => `This case has already been reviewed, resolved, or acted on by the moderation team.

The reported incident may have already resulted in a punishment, warning, previous decision, or internal review. Submitting the same case again without new evidence will not usually change the outcome.

If you have new and relevant evidence that was not included before, please submit a new report and clearly explain what new information is being provided.`,
  Hp = () => `Este caso já foi analisado, resolvido ou tratado pela equipe de moderação.

O incidente denunciado pode já ter resultado em uma punição, advertência, decisão anterior ou revisão interna. Enviar o mesmo caso novamente sem novas evidências geralmente não altera o resultado.

Se você tiver evidências novas e relevantes que não foram incluídas antes, envie uma nova denúncia e explique claramente quais novas informações estão sendo fornecidas.`,
  $p = () => `此案件已由审核团队审查、解决或处理。

被举报的事件可能已经导致了处罚、警告、先前的裁决或内部审查。在没有新证据的情况下重复提交相同的案件通常不会改变结果。

如果您有此前未提供的、相关的新证据，请提交一份新的举报，并清楚说明所提供的新信息是什么。`,
  Xp = () => `Dieser Fall wurde vom Moderationsteam bereits überprüft, gelöst oder bearbeitet.

Der gemeldete Vorfall hat möglicherweise bereits zu einer Strafe, einer Verwarnung, einer früheren Entscheidung oder einer internen Überprüfung geführt. Denselben Fall ohne neue Beweise erneut einzureichen, ändert das Ergebnis in der Regel nicht.

Wenn du neue und relevante Beweise hast, die zuvor nicht enthalten waren, reiche bitte eine neue Meldung ein und erkläre klar, welche neuen Informationen vorliegen.`,
  Yp = () => `Este caso ya ha sido revisado, resuelto o gestionado por el equipo de moderación.

El incidente reportado puede haber dado lugar ya a una sanción, una advertencia, una decisión previa o una revisión interna. Enviar el mismo caso de nuevo sin pruebas nuevas no suele cambiar el resultado.

Si tienes pruebas nuevas y relevantes que no se incluyeron antes, envía un nuevo reporte y explica claramente qué información nueva aportas.`,
  Jp = () => `Ce cas a déjà été examiné, résolu ou traité par l'équipe de modération.

L'incident signalé a peut-être déjà donné lieu à une sanction, un avertissement, une décision antérieure ou un examen interne. Soumettre à nouveau le même cas sans nouvelles preuves ne change généralement pas le résultat.

Si vous disposez de nouvelles preuves pertinentes qui n'avaient pas été incluses, veuillez soumettre un nouveau signalement et expliquer clairement quelles nouvelles informations vous apportez.`,
  Zp = () => `Questo caso è già stato esaminato, risolto o gestito dal team di moderazione.

L'incidente segnalato potrebbe aver già portato a una punizione, un avviso, una decisione precedente o una revisione interna. Inviare di nuovo lo stesso caso senza nuove prove di solito non cambia l'esito.

Se hai prove nuove e pertinenti non incluse in precedenza, invia una nuova segnalazione e spiega chiaramente quali nuove informazioni stai fornendo.`,
  Qp = () => `このケースはすでにモデレーションチームによって確認・解決・対応されています。

報告された事案は、すでに処分、警告、過去の判断、または内部審査につながっている可能性があります。新たな証拠なしに同じケースを再度提出しても、通常は結果は変わりません。

以前に含まれていなかった新しく関連性のある証拠がある場合は、新しい報告を提出し、どのような新しい情報を提供するのかを明確に説明してください。`,
  em = () => `Ta sprawa została już sprawdzona, rozstrzygnięta lub rozpatrzona przez zespół moderacji.

Zgłoszone zdarzenie mogło już skutkować karą, ostrzeżeniem, wcześniejszą decyzją lub wewnętrzną weryfikacją. Ponowne przesłanie tej samej sprawy bez nowych dowodów zwykle nie zmieni wyniku.

Jeśli masz nowe i istotne dowody, które nie zostały wcześniej dołączone, prześlij nowe zgłoszenie i jasno wyjaśnij, jakie nowe informacje przekazujesz.`,
  tm = () => `Этот случай уже был рассмотрен, решён или обработан командой модерации.

Сообщённый инцидент мог уже привести к наказанию, предупреждению, ранее принятому решению или внутренней проверке. Повторная подача того же случая без новых доказательств обычно не меняет результат.

Если у вас есть новые и значимые доказательства, которые ранее не были предоставлены, отправьте новую жалобу и чётко объясните, какая новая информация предоставляется.`,
  nm = () => `Цю справу вже розглянуто, вирішено або опрацьовано командою модерації.

Повідомлений інцидент, можливо, вже призвів до покарання, попередження, попереднього рішення або внутрішньої перевірки. Повторне надсилання тієї самої справи без нових доказів зазвичай не змінює результату.

Якщо у вас є нові та важливі докази, які не були додані раніше, надішліть нову скаргу та чітко поясніть, яку нову інформацію ви надаєте.`,
  rm = () => `Trường hợp này đã được đội ngũ kiểm duyệt xem xét, giải quyết hoặc xử lý.

Sự việc bị báo cáo có thể đã dẫn đến một hình phạt, cảnh cáo, quyết định trước đó hoặc một lần xem xét nội bộ. Việc gửi lại cùng một trường hợp mà không có bằng chứng mới thường sẽ không thay đổi kết quả.

Nếu bạn có bằng chứng mới và liên quan mà trước đây chưa được đưa vào, vui lòng gửi một báo cáo mới và giải thích rõ thông tin mới mà bạn cung cấp là gì.`,
  om = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Kp() : e === "pt" ? Hp() : e === "ch" ? $p() : e === "de" ? Xp() : e === "es" ? Yp() : e === "fr" ? Jp() : e === "it" ? Zp() : e === "jp" ? Qp() : e === "pl" ? em() : e === "ru" ? tm() : e === "uk" ? nm() : rm()
  },
  im = () => "Already Handled",
  am = () => "Já tratado",
  sm = () => "已处理",
  cm = () => "Bereits bearbeitet",
  um = () => "Ya gestionado",
  lm = () => "Déjà traité",
  dm = () => "Già gestito",
  _m = () => "対応済み",
  fm = () => "Już rozpatrzone",
  pm = () => "Уже рассмотрено",
  mm = () => "Вже розглянуто",
  hm = () => "Đã xử lý",
  gm = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? im() : e === "pt" ? am() : e === "ch" ? sm() : e === "de" ? cm() : e === "es" ? um() : e === "fr" ? lm() : e === "it" ? dm() : e === "jp" ? _m() : e === "pl" ? fm() : e === "ru" ? pm() : e === "uk" ? mm() : hm()
  },
  wm = () => `The reported action was allowed under the event rules or special conditions active at the time.

Some events, areas, game modes, or temporary rules may allow behavior that would normally be restricted elsewhere. Because the action was permitted in that specific context, no moderation action will be taken.

Please make sure to check the current event rules or special-area rules before submitting reports related to event gameplay.`,
  ym = () => `A ação denunciada era permitida pelas regras do evento ou pelas condições especiais ativas no momento.

Alguns eventos, áreas, modos de jogo ou regras temporárias podem permitir comportamentos que normalmente seriam restritos em outros lugares. Como a ação era permitida nesse contexto específico, nenhuma ação de moderação será tomada.

Verifique as regras atuais do evento ou as regras de áreas especiais antes de enviar denúncias relacionadas à jogabilidade do evento.`,
  bm = () => `被举报的行为在当时生效的活动规则或特殊条件下是被允许的。

某些活动、区域、游戏模式或临时规则可能允许在其他情况下通常会被限制的行为。由于该行为在特定情境下被允许，因此不会采取任何审核措施。

在提交与活动玩法相关的举报之前，请务必查看当前的活动规则或特殊区域规则。`,
  vm = () => `Die gemeldete Aktion war nach den Event-Regeln oder den zu diesem Zeitpunkt geltenden Sonderbedingungen erlaubt.

Manche Events, Bereiche, Spielmodi oder temporäre Regeln können Verhalten erlauben, das anderswo normalerweise eingeschränkt wäre. Da die Aktion in diesem speziellen Kontext erlaubt war, wird keine Moderationsmaßnahme ergriffen.

Bitte prüfe die aktuellen Event-Regeln oder die Regeln für Sonderbereiche, bevor du Meldungen zum Event-Gameplay einreichst.`,
  Em = () => `La acción reportada estaba permitida según las reglas del evento o las condiciones especiales activas en ese momento.

Algunos eventos, áreas, modos de juego o reglas temporales pueden permitir comportamientos que normalmente estarían restringidos en otros lugares. Dado que la acción estaba permitida en ese contexto específico, no se tomará ninguna medida de moderación.

Asegúrate de revisar las reglas actuales del evento o las reglas de áreas especiales antes de enviar reportes relacionados con la jugabilidad del evento.`,
  Tm = () => `L'action signalée était autorisée par les règles de l'événement ou par les conditions spéciales en vigueur à ce moment-là.

Certains événements, zones, modes de jeu ou règles temporaires peuvent autoriser des comportements qui seraient normalement restreints ailleurs. Comme l'action était autorisée dans ce contexte précis, aucune mesure de modération ne sera prise.

Veuillez vérifier les règles actuelles de l'événement ou les règles des zones spéciales avant de soumettre des signalements liés au gameplay d'un événement.`,
  Om = () => `L'azione segnalata era consentita dalle regole dell'evento o dalle condizioni speciali attive in quel momento.

Alcuni eventi, aree, modalità di gioco o regole temporanee possono consentire comportamenti che altrove sarebbero normalmente vietati. Poiché l'azione era consentita in quel contesto specifico, non verrà presa alcuna azione di moderazione.

Assicurati di controllare le regole attuali dell'evento o le regole delle aree speciali prima di inviare segnalazioni relative al gameplay degli eventi.`,
  km = () => `報告された行為は、その時点で有効だったイベントのルールや特別な条件のもとで許可されていました。

一部のイベント、エリア、ゲームモード、または一時的なルールでは、通常なら他の場所で制限される行為が許可される場合があります。その特定の状況では行為が許可されていたため、モデレーションの措置は行われません。

イベントのプレイに関する報告を提出する前に、現在のイベントルールや特別エリアのルールを必ず確認してください。`,
  Sm = () => `Zgłoszone działanie było dozwolone zgodnie z zasadami wydarzenia lub specjalnymi warunkami obowiązującymi w tym czasie.

Niektóre wydarzenia, obszary, tryby gry lub zasady tymczasowe mogą zezwalać na zachowania, które gdzie indziej byłyby zwykle ograniczone. Ponieważ działanie było dozwolone w tym konkretnym kontekście, nie zostaną podjęte żadne działania moderacyjne.

Przed wysłaniem zgłoszeń dotyczących rozgrywki podczas wydarzenia sprawdź aktualne zasady wydarzenia lub zasady obszarów specjalnych.`,
  Am = () => `Сообщённое действие было разрешено правилами события или особыми условиями, действовавшими в тот момент.

Некоторые события, зоны, режимы игры или временные правила могут разрешать поведение, которое обычно ограничено в других местах. Поскольку действие было разрешено в этом конкретном контексте, никаких мер модерации приниматься не будет.

Пожалуйста, проверяйте текущие правила события или правила особых зон, прежде чем отправлять жалобы, связанные с игровым процессом события.`,
  Rm = () => `Повідомлена дія була дозволена правилами події або особливими умовами, що діяли на той момент.

Деякі події, зони, режими гри або тимчасові правила можуть дозволяти поведінку, яка зазвичай обмежена в інших місцях. Оскільки дія була дозволена в цьому конкретному контексті, жодних заходів модерації вжито не буде.

Будь ласка, перевіряйте чинні правила події або правила особливих зон, перш ніж надсилати скарги, пов'язані з ігровим процесом події.`,
  Im = () => `Hành động bị báo cáo được cho phép theo quy tắc sự kiện hoặc các điều kiện đặc biệt đang có hiệu lực vào thời điểm đó.

Một số sự kiện, khu vực, chế độ chơi hoặc quy tắc tạm thời có thể cho phép những hành vi mà ở nơi khác thường bị hạn chế. Vì hành động được cho phép trong bối cảnh cụ thể đó, sẽ không có biện pháp kiểm duyệt nào được áp dụng.

Vui lòng kiểm tra quy tắc sự kiện hiện hành hoặc quy tắc khu vực đặc biệt trước khi gửi báo cáo liên quan đến lối chơi trong sự kiện.`,
  Nm = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? wm() : e === "pt" ? ym() : e === "ch" ? bm() : e === "de" ? vm() : e === "es" ? Em() : e === "fr" ? Tm() : e === "it" ? Om() : e === "jp" ? km() : e === "pl" ? Sm() : e === "ru" ? Am() : e === "uk" ? Rm() : Im()
  },
  Dm = () => "Allowed by Event or Special Rules",
  Pm = () => "Permitido por evento ou regras especiais",
  Lm = () => "活动或特殊规则允许",
  xm = () => "Durch Event oder Sonderregeln erlaubt",
  zm = () => "Permitido por evento o reglas especiales",
  Mm = () => "Autorisé par un événement ou des règles spéciales",
  Cm = () => "Consentito da evento o regole speciali",
  jm = () => "イベントまたは特別ルールにより許可",
  Bm = () => "Dozwolone przez wydarzenie lub zasady specjalne",
  Fm = () => "Разрешено событием или особыми правилами",
  Um = () => "Дозволено подією або особливими правилами",
  Gm = () => "Được phép theo sự kiện hoặc quy tắc đặc biệt",
  qm = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Dm() : e === "pt" ? Pm() : e === "ch" ? Lm() : e === "de" ? xm() : e === "es" ? zm() : e === "fr" ? Mm() : e === "it" ? Cm() : e === "jp" ? jm() : e === "pl" ? Bm() : e === "ru" ? Fm() : e === "uk" ? Um() : Gm()
  },
  Wm = () => `The reported issue appears to have been caused by a glitch, bug, lag, desync, or another technical problem.

Because the evidence suggests that the situation may not have been intentional player misconduct, we cannot treat it as a punishable rule violation.

If the issue continues, please report it as a bug or provide more evidence showing that a player intentionally abused the glitch.`,
  Vm = () => `O problema denunciado parece ter sido causado por uma falha, bug, lag, dessincronização ou outro problema técnico.

Como as evidências sugerem que a situação pode não ter sido má conduta intencional de um jogador, não podemos tratá-la como uma violação de regras passível de punição.

Se o problema persistir, denuncie-o como um bug ou forneça mais evidências mostrando que um jogador abusou intencionalmente da falha.`,
  Km = () => `被举报的问题似乎是由故障、漏洞、延迟、不同步或其他技术问题导致的。

由于证据表明该情况可能并非玩家的故意不当行为，我们无法将其视为可处罚的违规行为。

如果问题持续存在，请将其作为漏洞举报，或提供更多证据，证明有玩家故意利用了该故障。`,
  Hm = () => `Das gemeldete Problem scheint durch einen Glitch, Bug, Lag, eine Desynchronisation oder ein anderes technisches Problem verursacht worden zu sein.

Da die Beweise darauf hindeuten, dass es sich möglicherweise nicht um vorsätzliches Fehlverhalten eines Spielers handelte, können wir es nicht als strafbaren Regelverstoß behandeln.

Wenn das Problem weiterhin besteht, melde es bitte als Bug oder liefere weitere Beweise, die zeigen, dass ein Spieler den Glitch absichtlich ausgenutzt hat.`,
  $m = () => `El problema reportado parece haber sido causado por un fallo, un error, lag, desincronización u otro problema técnico.

Dado que las pruebas sugieren que la situación pudo no ser una mala conducta intencional de un jugador, no podemos tratarla como una violación de reglas sancionable.

Si el problema continúa, repórtalo como un error o aporta más pruebas que demuestren que un jugador abusó intencionalmente del fallo.`,
  Xm = () => `Le problème signalé semble avoir été causé par un bug, un glitch, du lag, une désynchronisation ou un autre problème technique.

Comme les preuves suggèrent que la situation n'était peut-être pas une faute intentionnelle d'un joueur, nous ne pouvons pas la traiter comme une infraction passible de sanction.

Si le problème persiste, veuillez le signaler en tant que bug ou fournir davantage de preuves montrant qu'un joueur a intentionnellement abusé du bug.`,
  Ym = () => `Il problema segnalato sembra essere stato causato da un glitch, un bug, lag, desincronizzazione o un altro problema tecnico.

Poiché le prove suggeriscono che la situazione potrebbe non essere stata una cattiva condotta intenzionale di un giocatore, non possiamo trattarla come una violazione delle regole punibile.

Se il problema persiste, segnalalo come bug o fornisci ulteriori prove che mostrino che un giocatore ha abusato intenzionalmente del glitch.`,
  Jm = () => `報告された問題は、不具合、バグ、ラグ、同期ずれ、またはその他の技術的な問題によって引き起こされた可能性があります。

証拠からは、プレイヤーの意図的な不正行為ではなかった可能性が示唆されるため、処罰の対象となるルール違反として扱うことはできません。

問題が続く場合は、バグとして報告するか、プレイヤーが意図的に不具合を悪用したことを示すさらなる証拠を提出してください。`,
  Zm = () => `Zgłoszony problem prawdopodobnie został spowodowany usterką, błędem, lagiem, desynchronizacją lub innym problemem technicznym.

Ponieważ dowody sugerują, że sytuacja mogła nie być celowym niewłaściwym zachowaniem gracza, nie możemy potraktować jej jako karalnego naruszenia zasad.

Jeśli problem będzie się powtarzał, zgłoś go jako błąd lub dostarcz więcej dowodów pokazujących, że gracz celowo wykorzystał usterkę.`,
  Qm = () => `Сообщённая проблема, по-видимому, была вызвана сбоем, багом, лагом, рассинхронизацией или другой технической неполадкой.

Поскольку доказательства указывают на то, что ситуация могла не быть умышленным нарушением со стороны игрока, мы не можем рассматривать её как наказуемое нарушение правил.

Если проблема сохраняется, сообщите о ней как об ошибке или предоставьте дополнительные доказательства того, что игрок умышленно воспользовался сбоем.`,
  eh = () => `Повідомлена проблема, схоже, була спричинена збоєм, багом, лагом, розсинхронізацією або іншою технічною несправністю.

Оскільки докази свідчать, що ситуація могла не бути навмисною неправомірною поведінкою гравця, ми не можемо розглядати її як порушення правил, що карається.

Якщо проблема повторюється, повідомте про неї як про помилку або надайте додаткові докази того, що гравець навмисно скористався збоєм.`,
  th = () => `Vấn đề bị báo cáo có vẻ do một lỗi kỹ thuật, bug, lag, mất đồng bộ hoặc một sự cố kỹ thuật khác gây ra.

Vì bằng chứng cho thấy tình huống có thể không phải là hành vi sai phạm cố ý của người chơi, chúng tôi không thể xem đó là vi phạm quy tắc có thể bị xử phạt.

Nếu vấn đề vẫn tiếp diễn, vui lòng báo cáo dưới dạng lỗi hoặc cung cấp thêm bằng chứng cho thấy người chơi đã cố ý lợi dụng lỗi đó.`,
  nh = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Wm() : e === "pt" ? Vm() : e === "ch" ? Km() : e === "de" ? Hm() : e === "es" ? $m() : e === "fr" ? Xm() : e === "it" ? Ym() : e === "jp" ? Jm() : e === "pl" ? Zm() : e === "ru" ? Qm() : e === "uk" ? eh() : th()
  },
  rh = () => "Caused by a Glitch",
  oh = () => "Causado por uma falha",
  ih = () => "由故障导致",
  ah = () => "Durch einen Glitch verursacht",
  sh = () => "Causado por un fallo",
  ch = () => "Causé par un bug",
  uh = () => "Causato da un glitch",
  lh = () => "不具合が原因",
  dh = () => "Spowodowane usterką",
  _h = () => "Вызвано сбоем",
  fh = () => "Спричинено збоєм",
  ph = () => "Do lỗi kỹ thuật gây ra",
  mh = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? rh() : e === "pt" ? oh() : e === "ch" ? ih() : e === "de" ? ah() : e === "es" ? sh() : e === "fr" ? ch() : e === "it" ? uh() : e === "jp" ? lh() : e === "pl" ? dh() : e === "ru" ? _h() : e === "uk" ? fh() : ph()
  },
  hh = () => `We could not confirm what happened based on the information provided.

The report may show part of the situation, but it does not include enough context for the moderation team to understand the full incident, verify the sequence of events, or determine whether a rule was broken.

When submitting a report, please include clear evidence, relevant timestamps, location or coordinates when applicable, and enough surrounding context to help us understand what happened before and after the reported action.`,
  gh = () => `Não foi possível confirmar o que aconteceu com base nas informações fornecidas.

A denúncia pode mostrar parte da situação, mas não inclui contexto suficiente para que a equipe de moderação entenda o incidente completo, verifique a sequência dos eventos ou determine se uma regra foi violada.

Ao enviar uma denúncia, inclua evidências claras, registros de horário relevantes, localização ou coordenadas quando aplicável e contexto suficiente para nos ajudar a entender o que aconteceu antes e depois da ação denunciada.`,
  wh = () => `根据所提供的信息，我们无法确认发生了什么。

该举报可能展示了部分情况，但没有包含足够的背景信息，使审核团队无法了解整个事件、核实事件的先后顺序，或判断是否违反了规则。

提交举报时，请附上清晰的证据、相关的时间戳、适用时的位置或坐标，以及足够的背景信息，帮助我们了解被举报行为前后发生了什么。`,
  yh = () => `Anhand der bereitgestellten Informationen konnten wir nicht bestätigen, was passiert ist.

Die Meldung zeigt möglicherweise einen Teil der Situation, enthält aber nicht genug Kontext, damit das Moderationsteam den gesamten Vorfall verstehen, den Ablauf der Ereignisse überprüfen oder feststellen kann, ob eine Regel verletzt wurde.

Füge beim Einreichen einer Meldung bitte klare Beweise, relevante Zeitstempel, gegebenenfalls Ort oder Koordinaten sowie genügend Kontext hinzu, damit wir verstehen, was vor und nach der gemeldeten Aktion geschah.`,
  bh = () => `No pudimos confirmar qué ocurrió con la información proporcionada.

El reporte puede mostrar parte de la situación, pero no incluye contexto suficiente para que el equipo de moderación entienda el incidente completo, verifique la secuencia de los hechos o determine si se infringió una regla.

Al enviar un reporte, incluye pruebas claras, marcas de tiempo relevantes, ubicación o coordenadas cuando corresponda y contexto suficiente para ayudarnos a entender qué ocurrió antes y después de la acción reportada.`,
  vh = () => `Nous n'avons pas pu confirmer ce qui s'est passé sur la base des informations fournies.

Le signalement montre peut-être une partie de la situation, mais il ne fournit pas assez de contexte pour que l'équipe de modération comprenne l'incident dans son ensemble, vérifie le déroulement des événements ou détermine si une règle a été enfreinte.

Lorsque vous soumettez un signalement, veuillez inclure des preuves claires, les horodatages pertinents, l'emplacement ou les coordonnées le cas échéant, et suffisamment de contexte pour nous aider à comprendre ce qui s'est passé avant et après l'action signalée.`,
  Eh = () => `Non siamo riusciti a confermare cosa sia successo in base alle informazioni fornite.

La segnalazione può mostrare parte della situazione, ma non include abbastanza contesto per permettere al team di moderazione di comprendere l'intero incidente, verificare la sequenza degli eventi o stabilire se una regola sia stata violata.

Quando invii una segnalazione, includi prove chiare, marche temporali pertinenti, posizione o coordinate quando applicabile e contesto sufficiente per aiutarci a capire cosa è successo prima e dopo l'azione segnalata.`,
  Th = () => `提供された情報からは、何が起きたのかを確認できませんでした。

この報告は状況の一部を示しているかもしれませんが、モデレーションチームが事案の全体像を把握し、出来事の流れを確認し、ルール違反があったかどうかを判断するのに十分な背景情報が含まれていません。

報告を提出する際は、明確な証拠、関連するタイムスタンプ、該当する場合は場所や座標、そして報告された行為の前後に何が起きたかを理解するのに十分な背景情報を含めてください。`,
  Oh = () => `Na podstawie podanych informacji nie mogliśmy potwierdzić, co się wydarzyło.

Zgłoszenie może pokazywać część sytuacji, ale nie zawiera wystarczającego kontekstu, aby zespół moderacji mógł zrozumieć całe zdarzenie, zweryfikować przebieg wydarzeń lub ustalić, czy doszło do naruszenia zasad.

Wysyłając zgłoszenie, dołącz wyraźne dowody, odpowiednie znaczniki czasu, lokalizację lub współrzędne, jeśli dotyczy, oraz wystarczający kontekst, który pomoże nam zrozumieć, co wydarzyło się przed zgłoszonym działaniem i po nim.`,
  kh = () => `На основании предоставленной информации мы не смогли подтвердить, что произошло.

Жалоба может показывать часть ситуации, но в ней недостаточно контекста, чтобы команда модерации могла понять инцидент целиком, проверить последовательность событий или определить, было ли нарушено правило.

При отправке жалобы прилагайте чёткие доказательства, соответствующие временные метки, местоположение или координаты, если применимо, и достаточный контекст, чтобы помочь нам понять, что происходило до и после указанного действия.`,
  Sh = () => `На основі наданої інформації ми не змогли підтвердити, що сталося.

Скарга може показувати частину ситуації, але в ній недостатньо контексту, щоб команда модерації зрозуміла весь інцидент, перевірила послідовність подій або визначила, чи було порушено правило.

Надсилаючи скаргу, додавайте чіткі докази, відповідні позначки часу, місце або координати, якщо це доречно, і достатньо контексту, щоб допомогти нам зрозуміти, що відбувалося до та після зазначеної дії.`,
  Ah = () => `Chúng tôi không thể xác nhận điều gì đã xảy ra dựa trên thông tin được cung cấp.

Báo cáo có thể cho thấy một phần tình huống, nhưng không bao gồm đủ bối cảnh để đội ngũ kiểm duyệt hiểu toàn bộ sự việc, xác minh trình tự các sự kiện hoặc xác định liệu có vi phạm quy tắc hay không.

Khi gửi báo cáo, vui lòng kèm theo bằng chứng rõ ràng, dấu thời gian liên quan, vị trí hoặc tọa độ khi cần, và đủ bối cảnh xung quanh để giúp chúng tôi hiểu điều gì đã xảy ra trước và sau hành động bị báo cáo.`,
  Rh = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? hh() : e === "pt" ? gh() : e === "ch" ? wh() : e === "de" ? yh() : e === "es" ? bh() : e === "fr" ? vh() : e === "it" ? Eh() : e === "jp" ? Th() : e === "pl" ? Oh() : e === "ru" ? kh() : e === "uk" ? Sh() : Ah()
  },
  Ih = () => "Insufficient Context",
  Nh = () => "Contexto insuficiente",
  Dh = () => "背景信息不足",
  Ph = () => "Unzureichender Kontext",
  Lh = () => "Contexto insuficiente",
  xh = () => "Contexte insuffisant",
  zh = () => "Contesto insufficiente",
  Mh = () => "情報が不十分",
  Ch = () => "Niewystarczający kontekst",
  jh = () => "Недостаточно контекста",
  Bh = () => "Недостатньо контексту",
  Fh = () => "Không đủ bối cảnh",
  Uh = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Ih() : e === "pt" ? Nh() : e === "ch" ? Dh() : e === "de" ? Ph() : e === "es" ? Lh() : e === "fr" ? xh() : e === "it" ? zh() : e === "jp" ? Mh() : e === "pl" ? Ch() : e === "ru" ? jh() : e === "uk" ? Bh() : Fh()
  },
  Gh = () => `The report contains incorrect, incomplete, inaccessible, or unusable information.

This can happen when the evidence does not match the report, the link is broken, or required details are missing.

Please review the information carefully before submitting a report. Make sure to report the correct player, make sure that it is an actual violation, and make sure to submit enough context details to help the moderation team investigate reports properly.`,
  qh = () => `A denúncia contém informações incorretas, incompletas, inacessíveis ou inutilizáveis.

Isso pode acontecer quando as evidências não correspondem à denúncia, o link está quebrado ou detalhes obrigatórios estão faltando.

Revise as informações com atenção antes de enviar uma denúncia. Certifique-se de denunciar o jogador correto, de que se trata de uma violação real e de fornecer detalhes de contexto suficientes para ajudar a equipe de moderação a investigar as denúncias adequadamente.`,
  Wh = () => `该举报包含不正确、不完整、无法访问或无法使用的信息。

这可能是因为证据与举报内容不符、链接失效，或缺少必要的细节。

提交举报前，请仔细核对信息。请确保举报的是正确的玩家、确实存在违规行为，并提供足够的背景细节，以帮助审核团队妥善调查举报。`,
  Vh = () => `Die Meldung enthält falsche, unvollständige, nicht zugängliche oder unbrauchbare Informationen.

Das kann passieren, wenn die Beweise nicht zur Meldung passen, der Link defekt ist oder erforderliche Angaben fehlen.

Bitte überprüfe die Informationen sorgfältig, bevor du eine Meldung einreichst. Stelle sicher, dass du den richtigen Spieler meldest, dass es sich tatsächlich um einen Verstoß handelt und dass du genügend Kontextdetails angibst, damit das Moderationsteam Meldungen ordnungsgemäß untersuchen kann.`,
  Kh = () => `El reporte contiene información incorrecta, incompleta, inaccesible o inservible.

Esto puede ocurrir cuando las pruebas no coinciden con el reporte, el enlace está roto o faltan datos necesarios.

Revisa la información con cuidado antes de enviar un reporte. Asegúrate de reportar al jugador correcto, de que se trata de una infracción real y de aportar suficientes detalles de contexto para ayudar al equipo de moderación a investigar los reportes adecuadamente.`,
  Hh = () => `Le signalement contient des informations incorrectes, incomplètes, inaccessibles ou inutilisables.

Cela peut arriver lorsque les preuves ne correspondent pas au signalement, que le lien est rompu ou que des détails requis sont manquants.

Veuillez vérifier attentivement les informations avant de soumettre un signalement. Assurez-vous de signaler le bon joueur, qu'il s'agit bien d'une véritable infraction et de fournir suffisamment de détails de contexte pour aider l'équipe de modération à enquêter correctement sur les signalements.`,
  $h = () => `La segnalazione contiene informazioni errate, incomplete, inaccessibili o inutilizzabili.

Ciò può accadere quando le prove non corrispondono alla segnalazione, il link è interrotto o mancano dettagli obbligatori.

Controlla attentamente le informazioni prima di inviare una segnalazione. Assicurati di segnalare il giocatore corretto, che si tratti di una violazione reale e di fornire dettagli di contesto sufficienti per aiutare il team di moderazione a investigare correttamente le segnalazioni.`,
  Xh = () => `この報告には、誤った、不完全な、アクセスできない、または使用できない情報が含まれています。

これは、証拠が報告内容と一致しない、リンクが切れている、または必要な詳細が欠けている場合に起こり得ます。

報告を提出する前に、情報を注意深く確認してください。正しいプレイヤーを報告していること、実際に違反であること、そしてモデレーションチームが報告を適切に調査できるよう十分な背景情報を提出していることを確認してください。`,
  Yh = () => `Zgłoszenie zawiera nieprawidłowe, niepełne, niedostępne lub nieprzydatne informacje.

Może się to zdarzyć, gdy dowody nie pasują do zgłoszenia, link jest nieaktywny lub brakuje wymaganych szczegółów.

Przed wysłaniem zgłoszenia dokładnie sprawdź informacje. Upewnij się, że zgłaszasz właściwego gracza, że jest to rzeczywiste naruszenie oraz że podajesz wystarczające szczegóły kontekstu, aby pomóc zespołowi moderacji prawidłowo zbadać zgłoszenia.`,
  Jh = () => `Жалоба содержит неверную, неполную, недоступную или непригодную информацию.

Это может произойти, когда доказательства не соответствуют жалобе, ссылка не работает или отсутствуют необходимые сведения.

Внимательно проверьте информацию перед отправкой жалобы. Убедитесь, что вы жалуетесь на нужного игрока, что это действительно нарушение, и что вы предоставили достаточно контекстных деталей, чтобы помочь команде модерации правильно расследовать жалобы.`,
  Zh = () => `Скарга містить неправильну, неповну, недоступну або непридатну інформацію.

Це може статися, коли докази не відповідають скарзі, посилання не працює або відсутні обов'язкові деталі.

Уважно перевірте інформацію перед надсиланням скарги. Переконайтеся, що ви скаржитеся на правильного гравця, що це справді порушення, і що ви надаєте достатньо контекстних деталей, щоб допомогти команді модерації належно розслідувати скарги.`,
  Qh = () => `Báo cáo chứa thông tin không chính xác, không đầy đủ, không truy cập được hoặc không sử dụng được.

Điều này có thể xảy ra khi bằng chứng không khớp với báo cáo, liên kết bị hỏng hoặc thiếu các chi tiết bắt buộc.

Vui lòng xem lại thông tin cẩn thận trước khi gửi báo cáo. Hãy chắc chắn rằng bạn báo cáo đúng người chơi, rằng đó thực sự là một vi phạm, và cung cấp đủ chi tiết bối cảnh để giúp đội ngũ kiểm duyệt điều tra báo cáo một cách hợp lý.`,
  eg = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Gh() : e === "pt" ? qh() : e === "ch" ? Wh() : e === "de" ? Vh() : e === "es" ? Kh() : e === "fr" ? Hh() : e === "it" ? $h() : e === "jp" ? Xh() : e === "pl" ? Yh() : e === "ru" ? Jh() : e === "uk" ? Zh() : Qh()
  },
  tg = () => "Invalid Information",
  ng = () => "Informação inválida",
  rg = () => "信息无效",
  og = () => "Ungültige Informationen",
  ig = () => "Información no válida",
  ag = () => "Informations non valides",
  sg = () => "Informazioni non valide",
  cg = () => "無効な情報",
  ug = () => "Nieprawidłowe informacje",
  lg = () => "Недействительная информация",
  dg = () => "Недійсна інформація",
  _g = () => "Thông tin không hợp lệ",
  fg = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? tg() : e === "pt" ? ng() : e === "ch" ? rg() : e === "de" ? og() : e === "es" ? ig() : e === "fr" ? ag() : e === "it" ? sg() : e === "jp" ? cg() : e === "pl" ? ug() : e === "ru" ? lg() : e === "uk" ? dg() : _g()
  },
  pg = () => `The reported behavior does not appear to violate the current rules.

The situation may have been frustrating, unwanted, or disruptive from your perspective, but based on the evidence provided, it does not meet the criteria for a rule violation.

Moderation actions are only taken when a report clearly shows behavior that breaks the rules. If you believe this decision is incorrect, please make sure future reports include enough context explaining why you believe that a rule was violated.`,
  mg = () => `O comportamento denunciado não parece violar as regras atuais.

A situação pode ter sido frustrante, indesejada ou perturbadora do seu ponto de vista, mas, com base nas evidências fornecidas, ela não atende aos critérios de uma violação de regra.

Ações de moderação só são tomadas quando uma denúncia mostra claramente um comportamento que infringe as regras. Se você acredita que esta decisão está incorreta, certifique-se de que futuras denúncias incluam contexto suficiente explicando por que você acredita que uma regra foi violada.`,
  hg = () => `被举报的行为似乎并未违反当前规则。

从您的角度看，这种情况可能令人沮丧、不受欢迎或具有干扰性，但根据所提供的证据，它并不符合违规的标准。

只有当举报清楚地显示出违反规则的行为时，才会采取审核措施。如果您认为此决定有误，请确保今后的举报包含足够的背景信息，说明您为何认为某条规则被违反。`,
  gg = () => `Das gemeldete Verhalten scheint nicht gegen die aktuellen Regeln zu verstoßen.

Die Situation mag aus deiner Sicht frustrierend, unerwünscht oder störend gewesen sein, aber auf Grundlage der vorgelegten Beweise erfüllt sie nicht die Kriterien für einen Regelverstoß.

Moderationsmaßnahmen werden nur ergriffen, wenn eine Meldung eindeutig ein Verhalten zeigt, das gegen die Regeln verstößt. Wenn du der Meinung bist, dass diese Entscheidung falsch ist, achte bitte darauf, dass künftige Meldungen genügend Kontext enthalten und erklären, warum du glaubst, dass eine Regel verletzt wurde.`,
  wg = () => `El comportamiento reportado no parece infringir las reglas actuales.

La situación pudo haber sido frustrante, no deseada o molesta desde tu punto de vista, pero, según las pruebas aportadas, no cumple los criterios de una infracción de reglas.

Las acciones de moderación solo se toman cuando un reporte muestra claramente un comportamiento que rompe las reglas. Si crees que esta decisión es incorrecta, asegúrate de que los reportes futuros incluyan suficiente contexto que explique por qué consideras que se infringió una regla.`,
  yg = () => `Le comportement signalé ne semble pas enfreindre les règles actuelles.

La situation a peut-être été frustrante, indésirable ou perturbante de votre point de vue, mais d'après les preuves fournies, elle ne remplit pas les critères d'une infraction aux règles.

Des mesures de modération ne sont prises que lorsqu'un signalement montre clairement un comportement qui enfreint les règles. Si vous pensez que cette décision est incorrecte, veillez à ce que vos futurs signalements incluent suffisamment de contexte expliquant pourquoi vous estimez qu'une règle a été enfreinte.`,
  bg = () => `Il comportamento segnalato non sembra violare le regole attuali.

La situazione potrebbe essere stata frustrante, indesiderata o fastidiosa dal tuo punto di vista, ma in base alle prove fornite non soddisfa i criteri di una violazione delle regole.

Le azioni di moderazione vengono intraprese solo quando una segnalazione mostra chiaramente un comportamento che infrange le regole. Se ritieni che questa decisione sia errata, assicurati che le segnalazioni future includano contesto sufficiente a spiegare perché ritieni che una regola sia stata violata.`,
  vg = () => `報告された行為は、現在のルールに違反していないようです。

その状況は、あなたの視点ではいら立たしく、望ましくなく、または迷惑なものだったかもしれませんが、提供された証拠に基づくと、ルール違反の基準を満たしていません。

モデレーションの措置は、報告が明確にルールを破る行為を示している場合にのみ行われます。この判断が誤っていると思われる場合は、今後の報告に、なぜルール違反だと考えるのかを説明する十分な背景情報を含めるようにしてください。`,
  Eg = () => `Zgłoszone zachowanie nie wydaje się naruszać obowiązujących zasad.

Sytuacja mogła być z twojej perspektywy frustrująca, niechciana lub uciążliwa, ale na podstawie dostarczonych dowodów nie spełnia kryteriów naruszenia zasad.

Działania moderacyjne są podejmowane tylko wtedy, gdy zgłoszenie wyraźnie pokazuje zachowanie łamiące zasady. Jeśli uważasz, że ta decyzja jest błędna, zadbaj o to, aby przyszłe zgłoszenia zawierały wystarczający kontekst wyjaśniający, dlaczego uważasz, że doszło do naruszenia zasad.`,
  Tg = () => `Указанное поведение, по-видимому, не нарушает действующих правил.

С вашей точки зрения ситуация могла быть неприятной, нежелательной или мешающей, но на основании предоставленных доказательств она не соответствует критериям нарушения правил.

Меры модерации принимаются только тогда, когда жалоба чётко показывает поведение, нарушающее правила. Если вы считаете, что это решение неверно, постарайтесь, чтобы будущие жалобы содержали достаточно контекста, объясняющего, почему вы считаете, что правило было нарушено.`,
  Og = () => `Зазначена поведінка, схоже, не порушує чинних правил.

З вашого погляду ситуація могла бути неприємною, небажаною або такою, що заважає, але на основі наданих доказів вона не відповідає критеріям порушення правил.

Заходи модерації вживаються лише тоді, коли скарга чітко показує поведінку, що порушує правила. Якщо ви вважаєте, що це рішення неправильне, подбайте, щоб майбутні скарги містили достатньо контексту з поясненням, чому ви вважаєте, що правило було порушено.`,
  kg = () => `Hành vi bị báo cáo dường như không vi phạm các quy tắc hiện hành.

Tình huống có thể gây bực bội, không mong muốn hoặc gây phiền toái từ góc nhìn của bạn, nhưng dựa trên bằng chứng được cung cấp, nó không đáp ứng tiêu chí của một vi phạm quy tắc.

Các biện pháp kiểm duyệt chỉ được áp dụng khi một báo cáo cho thấy rõ hành vi vi phạm quy tắc. Nếu bạn cho rằng quyết định này không đúng, hãy đảm bảo các báo cáo trong tương lai có đủ bối cảnh giải thích vì sao bạn tin rằng một quy tắc đã bị vi phạm.`,
  Sg = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? pg() : e === "pt" ? mg() : e === "ch" ? hg() : e === "de" ? gg() : e === "es" ? wg() : e === "fr" ? yg() : e === "it" ? bg() : e === "jp" ? vg() : e === "pl" ? Eg() : e === "ru" ? Tg() : e === "uk" ? Og() : kg()
  },
  Ag = () => "No Rule Violation",
  Rg = () => "Nenhuma violação de regra",
  Ig = () => "未违反规则",
  Ng = () => "Kein Regelverstoß",
  Dg = () => "Sin infracción de reglas",
  Pg = () => "Aucune infraction aux règles",
  Lg = () => "Nessuna violazione delle regole",
  xg = () => "ルール違反なし",
  zg = () => "Brak naruszenia zasad",
  Mg = () => "Нарушения правил нет",
  Cg = () => "Порушення правил немає",
  jg = () => "Không vi phạm quy tắc",
  Bg = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Ag() : e === "pt" ? Rg() : e === "ch" ? Ig() : e === "de" ? Ng() : e === "es" ? Dg() : e === "fr" ? Pg() : e === "it" ? Lg() : e === "jp" ? xg() : e === "pl" ? zg() : e === "ru" ? Mg() : e === "uk" ? Cg() : jg()
  },
  Fg = () => `The report shows behavior that may be questionable, but it is not severe or clear enough to justify a moderation action.

Some situations may be inappropriate, annoying, or borderline, but still not reach the threshold required for a punishment. In these cases, the moderation team may choose not to take formal action unless the behavior continues or becomes more serious.

If this happens again, please submit a new report with additional evidence showing a repeated pattern or a more serious violation.`,
  Ug = () => `A denúncia mostra um comportamento que pode ser questionável, mas não é grave nem claro o suficiente para justificar uma ação de moderação.

Algumas situações podem ser inadequadas, irritantes ou limítrofes, mas ainda assim não atingem o limite necessário para uma punição. Nesses casos, a equipe de moderação pode optar por não tomar uma ação formal, a menos que o comportamento continue ou se torne mais grave.

Se isso acontecer novamente, envie uma nova denúncia com evidências adicionais que mostrem um padrão repetido ou uma violação mais grave.`,
  Gg = () => `该举报显示的行为可能存在问题，但还不够严重或明确，不足以采取审核措施。

某些情况可能不恰当、令人厌烦或处于灰色地带，但仍未达到处罚所需的门槛。在这种情况下，除非该行为继续发生或变得更加严重，否则审核团队可能选择不采取正式行动。

如果此情况再次发生，请提交一份新的举报，并附上能显示重复行为模式或更严重违规的额外证据。`,
  qg = () => `Die Meldung zeigt ein Verhalten, das fragwürdig sein mag, aber nicht schwerwiegend oder eindeutig genug ist, um eine Moderationsmaßnahme zu rechtfertigen.

Manche Situationen sind vielleicht unangemessen, störend oder grenzwertig, erreichen aber dennoch nicht die für eine Strafe erforderliche Schwelle. In solchen Fällen kann das Moderationsteam entscheiden, keine formelle Maßnahme zu ergreifen, sofern das Verhalten nicht anhält oder schwerwiegender wird.

Wenn dies erneut geschieht, reiche bitte eine neue Meldung mit zusätzlichen Beweisen ein, die ein wiederholtes Muster oder einen schwerwiegenderen Verstoß zeigen.`,
  Wg = () => `El reporte muestra un comportamiento que puede ser cuestionable, pero no es lo bastante grave ni claro como para justificar una acción de moderación.

Algunas situaciones pueden ser inapropiadas, molestas o estar en el límite, pero aun así no alcanzan el umbral necesario para una sanción. En estos casos, el equipo de moderación puede optar por no tomar medidas formales a menos que el comportamiento continúe o se agrave.

Si esto vuelve a ocurrir, envía un nuevo reporte con pruebas adicionales que muestren un patrón repetido o una infracción más grave.`,
  Vg = () => `Le signalement montre un comportement qui peut être discutable, mais qui n'est pas assez grave ou clair pour justifier une mesure de modération.

Certaines situations peuvent être inappropriées, agaçantes ou limites, sans pour autant atteindre le seuil requis pour une sanction. Dans ces cas, l'équipe de modération peut choisir de ne pas prendre de mesure formelle, sauf si le comportement persiste ou s'aggrave.

Si cela se reproduit, veuillez soumettre un nouveau signalement avec des preuves supplémentaires montrant un schéma répété ou une infraction plus grave.`,
  Kg = () => `La segnalazione mostra un comportamento che può essere discutibile, ma non è abbastanza grave o chiaro da giustificare un'azione di moderazione.

Alcune situazioni possono essere inappropriate, fastidiose o al limite, ma non raggiungono comunque la soglia richiesta per una punizione. In questi casi, il team di moderazione può scegliere di non intervenire formalmente, a meno che il comportamento non continui o diventi più grave.

Se dovesse ripetersi, invia una nuova segnalazione con prove aggiuntive che mostrino uno schema ripetuto o una violazione più grave.`,
  Hg = () => `この報告は、問題があるかもしれない行為を示していますが、モデレーションの措置を正当化するほど深刻でも明確でもありません。

一部の状況は不適切だったり、迷惑だったり、際どいものだったりするかもしれませんが、それでも処分に必要な基準には達していません。こうした場合、行為が続いたりより深刻になったりしない限り、モデレーションチームは正式な措置を取らないことを選ぶことがあります。

再び起きた場合は、繰り返しのパターンやより深刻な違反を示す追加の証拠を添えて、新しい報告を提出してください。`,
  $g = () => `Zgłoszenie pokazuje zachowanie, które może budzić wątpliwości, ale nie jest na tyle poważne ani jednoznaczne, aby uzasadniać działanie moderacyjne.

Niektóre sytuacje mogą być nieodpowiednie, irytujące lub graniczne, a mimo to nie osiągają progu wymaganego do nałożenia kary. W takich przypadkach zespół moderacji może nie podjąć formalnych działań, chyba że zachowanie będzie się powtarzać lub stanie się poważniejsze.

Jeśli sytuacja się powtórzy, prześlij nowe zgłoszenie z dodatkowymi dowodami pokazującymi powtarzający się wzorzec lub poważniejsze naruszenie.`,
  Xg = () => `Жалоба показывает поведение, которое может вызывать сомнения, но оно недостаточно серьёзное или явное, чтобы оправдать меры модерации.

Некоторые ситуации могут быть неуместными, раздражающими или пограничными, но всё же не достигают порога, необходимого для наказания. В таких случаях команда модерации может решить не предпринимать официальных действий, если поведение не продолжится или не станет более серьёзным.

Если это повторится, отправьте новую жалобу с дополнительными доказательствами, показывающими повторяющийся характер или более серьёзное нарушение.`,
  Yg = () => `Скарга показує поведінку, яка може викликати сумніви, але вона недостатньо серйозна чи однозначна, щоб виправдати захід модерації.

Деякі ситуації можуть бути недоречними, дратівливими або межовими, але все ж не досягають порогу, потрібного для покарання. У таких випадках команда модерації може вирішити не вживати офіційних заходів, якщо поведінка не повторюватиметься або не стане серйознішою.

Якщо це повториться, надішліть нову скаргу з додатковими доказами, що показують повторюваний характер або серйозніше порушення.`,
  Jg = () => `Báo cáo cho thấy hành vi có thể đáng ngờ, nhưng chưa đủ nghiêm trọng hoặc rõ ràng để biện minh cho một biện pháp kiểm duyệt.

Một số tình huống có thể không phù hợp, gây khó chịu hoặc nằm ở ranh giới, nhưng vẫn chưa đạt đến mức cần thiết để xử phạt. Trong những trường hợp này, đội ngũ kiểm duyệt có thể chọn không hành động chính thức trừ khi hành vi tiếp diễn hoặc trở nên nghiêm trọng hơn.

Nếu điều này lại xảy ra, vui lòng gửi một báo cáo mới kèm bằng chứng bổ sung cho thấy một khuôn mẫu lặp lại hoặc một vi phạm nghiêm trọng hơn.`,
  Zg = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Fg() : e === "pt" ? Ug() : e === "ch" ? Gg() : e === "de" ? qg() : e === "es" ? Wg() : e === "fr" ? Vg() : e === "it" ? Kg() : e === "jp" ? Hg() : e === "pl" ? $g() : e === "ru" ? Xg() : e === "uk" ? Yg() : Jg()
  },
  Qg = () => "Not Enough for Punishment",
  ew = () => "Insuficiente para punição",
  tw = () => "不足以处罚",
  nw = () => "Nicht ausreichend für eine Strafe",
  rw = () => "Insuficiente para una sanción",
  ow = () => "Insuffisant pour une sanction",
  iw = () => "Insufficiente per una punizione",
  aw = () => "処分には不十分",
  sw = () => "Niewystarczające do nałożenia kary",
  cw = () => "Недостаточно для наказания",
  uw = () => "Недостатньо для покарання",
  lw = () => "Không đủ để xử phạt",
  dw = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Qg() : e === "pt" ? ew() : e === "ch" ? tw() : e === "de" ? nw() : e === "es" ? rw() : e === "fr" ? ow() : e === "it" ? iw() : e === "jp" ? aw() : e === "pl" ? sw() : e === "ru" ? cw() : e === "uk" ? uw() : lw()
  },
  _w = () => `This report is outside the scope of what the moderation team can act on through the report system.

This may include issues that happened outside the game, personal disputes, support requests, appeals, bug reports, or situations that are not covered by the current moderation rules.

Please use the correct support channel if your issue is related to technical problems, account issues, appeals, or other non-moderation matters.`,
  fw = () => `Esta denúncia está fora do escopo daquilo que a equipe de moderação pode tratar pelo sistema de denúncias.

Isso pode incluir problemas que aconteceram fora do jogo, disputas pessoais, pedidos de suporte, apelos, relatos de bugs ou situações que não são abrangidas pelas regras de moderação atuais.

Use o canal de suporte correto se o seu problema estiver relacionado a problemas técnicos, questões de conta, apelos ou outros assuntos que não sejam de moderação.`,
  pw = () => `此举报超出了审核团队通过举报系统能够处理的范围。

这可能包括发生在游戏之外的问题、个人纠纷、支持请求、申诉、漏洞报告，或当前审核规则未涵盖的情况。

如果您的问题与技术故障、账户问题、申诉或其他非审核事项有关，请使用正确的支持渠道。`,
  mw = () => `Diese Meldung liegt außerhalb dessen, was das Moderationsteam über das Meldesystem bearbeiten kann.

Dazu können Probleme gehören, die außerhalb des Spiels aufgetreten sind, persönliche Streitigkeiten, Support-Anfragen, Einsprüche, Fehlerberichte oder Situationen, die nicht von den aktuellen Moderationsregeln abgedeckt sind.

Bitte nutze den richtigen Support-Kanal, wenn dein Anliegen technische Probleme, Kontoangelegenheiten, Einsprüche oder andere nicht zur Moderation gehörende Themen betrifft.`,
  hw = () => `Este reporte está fuera del alcance de lo que el equipo de moderación puede gestionar a través del sistema de reportes.

Esto puede incluir problemas ocurridos fuera del juego, disputas personales, solicitudes de soporte, apelaciones, reportes de errores o situaciones que no están cubiertas por las reglas de moderación actuales.

Utiliza el canal de soporte correcto si tu problema está relacionado con problemas técnicos, asuntos de cuenta, apelaciones u otros temas ajenos a la moderación.`,
  gw = () => `Ce signalement dépasse le champ d'action de l'équipe de modération via le système de signalement.

Cela peut inclure des problèmes survenus en dehors du jeu, des différends personnels, des demandes d'assistance, des recours, des rapports de bugs ou des situations qui ne sont pas couvertes par les règles de modération actuelles.

Veuillez utiliser le bon canal d'assistance si votre problème concerne des soucis techniques, des questions de compte, des recours ou d'autres sujets ne relevant pas de la modération.`,
  ww = () => `Questa segnalazione esula da ciò che il team di moderazione può gestire tramite il sistema di segnalazione.

Può includere problemi avvenuti al di fuori del gioco, dispute personali, richieste di assistenza, ricorsi, segnalazioni di bug o situazioni non coperte dalle attuali regole di moderazione.

Utilizza il canale di assistenza corretto se il tuo problema riguarda questioni tecniche, problemi di account, ricorsi o altre questioni non legate alla moderazione.`,
  yw = () => `この報告は、モデレーションチームが報告システムを通じて対応できる範囲を超えています。

これには、ゲーム外で起きた問題、個人的なトラブル、サポート依頼、異議申し立て、バグ報告、または現在のモデレーションルールでは扱えない状況が含まれる場合があります。

技術的な問題、アカウントの問題、異議申し立て、その他モデレーション以外の事項に関する場合は、適切なサポート窓口をご利用ください。`,
  bw = () => `To zgłoszenie wykracza poza zakres tego, czym zespół moderacji może się zająć za pośrednictwem systemu zgłoszeń.

Może to obejmować problemy, które miały miejsce poza grą, spory osobiste, prośby o wsparcie, odwołania, zgłoszenia błędów lub sytuacje nieobjęte obecnymi zasadami moderacji.

Skorzystaj z właściwego kanału wsparcia, jeśli twój problem dotyczy kwestii technicznych, spraw związanych z kontem, odwołań lub innych zagadnień niezwiązanych z moderacją.`,
  vw = () => `Эта жалоба выходит за рамки того, что команда модерации может рассматривать через систему жалоб.

Сюда могут относиться проблемы, возникшие вне игры, личные споры, обращения в поддержку, апелляции, сообщения об ошибках или ситуации, не охваченные действующими правилами модерации.

Пожалуйста, используйте подходящий канал поддержки, если ваш вопрос связан с техническими проблемами, вопросами учётной записи, апелляциями или другими темами, не относящимися к модерации.`,
  Ew = () => `Ця скарга виходить за межі того, що команда модерації може розглядати через систему скарг.

Сюди можуть належати проблеми, що сталися поза грою, особисті суперечки, звернення до підтримки, апеляції, повідомлення про помилки або ситуації, не охоплені чинними правилами модерації.

Будь ласка, скористайтеся відповідним каналом підтримки, якщо ваше питання стосується технічних проблем, питань облікового запису, апеляцій або інших тем, не пов'язаних із модерацією.`,
  Tw = () => `Báo cáo này nằm ngoài phạm vi mà đội ngũ kiểm duyệt có thể xử lý qua hệ thống báo cáo.

Điều này có thể bao gồm các vấn đề xảy ra bên ngoài trò chơi, tranh chấp cá nhân, yêu cầu hỗ trợ, kháng cáo, báo cáo lỗi hoặc các tình huống không thuộc phạm vi các quy tắc kiểm duyệt hiện hành.

Vui lòng sử dụng kênh hỗ trợ phù hợp nếu vấn đề của bạn liên quan đến sự cố kỹ thuật, vấn đề tài khoản, kháng cáo hoặc các vấn đề khác không thuộc về kiểm duyệt.`,
  Ow = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? _w() : e === "pt" ? fw() : e === "ch" ? pw() : e === "de" ? mw() : e === "es" ? hw() : e === "fr" ? gw() : e === "it" ? ww() : e === "jp" ? yw() : e === "pl" ? bw() : e === "ru" ? vw() : e === "uk" ? Ew() : Tw()
  },
  kw = () => "Out of Scope",
  Sw = () => "Fora do escopo",
  Aw = () => "超出处理范围",
  Rw = () => "Außerhalb des Zuständigkeitsbereichs",
  Iw = () => "Fuera del alcance",
  Nw = () => "Hors du champ d'action",
  Dw = () => "Fuori ambito",
  Pw = () => "対応範囲外",
  Lw = () => "Poza zakresem",
  xw = () => "Вне зоны ответственности",
  zw = () => "Поза межами компетенції",
  Mw = () => "Ngoài phạm vi xử lý",
  Cw = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? kw() : e === "pt" ? Sw() : e === "ch" ? Aw() : e === "de" ? Rw() : e === "es" ? Iw() : e === "fr" ? Nw() : e === "it" ? Dw() : e === "jp" ? Pw() : e === "pl" ? Lw() : e === "ru" ? xw() : e === "uk" ? zw() : Mw()
  },
  jw = () => "Inappropriate content",
  Bw = () => "Conteúdo inapropriado",
  Fw = () => "不当内容",
  Uw = () => "Unangemessene Inhalte",
  Gw = () => "Contenido inapropiado",
  qw = () => "Contenu inapproprié",
  Ww = () => "Contenuto inappropriato",
  Vw = () => "不適切なコンテンツ",
  Kw = () => "Nieodpowiednie treści",
  Hw = () => "Неприемлемый контент",
  $w = () => "Неприйнятний вміст",
  Xw = () => "Nội dung không phù hợp",
  Yw = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? jw() : e === "pt" ? Bw() : e === "ch" ? Fw() : e === "de" ? Uw() : e === "es" ? Gw() : e === "fr" ? qw() : e === "it" ? Ww() : e === "jp" ? Vw() : e === "pl" ? Kw() : e === "ru" ? Hw() : e === "uk" ? $w() : Xw()
  },
  Jw = () => "Explicit, hateful, or illegal content",
  Zw = () => "Conteúdo explícito, de ódio ou ilegal",
  Qw = () => "露骨、仇恨或非法内容",
  ey = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  ty = () => "Contenido explícito, de odio o ilegal",
  ny = () => "Contenu explicite, haineux ou illégal",
  ry = () => "Contenuto esplicito, d'odio o illegale",
  oy = () => "露骨、差別的、または違法なコンテンツ",
  iy = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  ay = () => "Откровенный, разжигающий ненависть или незаконный контент",
  sy = () => "Відвертий, ворожий або незаконний вміст",
  cy = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  uy = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Jw() : e === "pt" ? Zw() : e === "ch" ? Qw() : e === "de" ? ey() : e === "es" ? ty() : e === "fr" ? ny() : e === "it" ? ry() : e === "jp" ? oy() : e === "pl" ? iy() : e === "ru" ? ay() : e === "uk" ? sy() : cy()
  },
  ly = () => "Invalid captcha. Please try again.",
  dy = () => "Captcha inválido. Por favor, tente novamente.",
  _y = () => "验证码无效，请重试。",
  fy = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  py = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  my = () => "Captcha invalide. Veuillez réessayer.",
  hy = () => "Captcha non valido. Riprova.",
  gy = () => "キャプチャが無効です。もう一度お試しください。",
  wy = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  yy = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  by = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  vy = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Ey = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? ly() : e === "pt" ? dy() : e === "ch" ? _y() : e === "de" ? fy() : e === "es" ? py() : e === "fr" ? my() : e === "it" ? hy() : e === "jp" ? gy() : e === "pl" ? wy() : e === "ru" ? yy() : e === "uk" ? by() : vy()
  },
  Ty = () => "Invalid challenge response",
  Oy = () => "Resposta de desafio inválida",
  ky = () => "质询响应无效",
  Sy = () => "Ungültige Challenge-Antwort",
  Ay = () => "Respuesta de desafío inválida",
  Ry = () => "Réponse au défi invalide",
  Iy = () => "Risposta alla sfida non valida",
  Ny = () => "無効なチャレンジ応答",
  Dy = () => "Nieprawidłowa odpowiedź na wyzwanie",
  Py = () => "Неверный ответ на вызов",
  Ly = () => "Недійсна відповідь на виклик",
  xy = () => "Phản hồi thử thách không hợp lệ",
  zy = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Ty() : e === "pt" ? Oy() : e === "ch" ? ky() : e === "de" ? Sy() : e === "es" ? Ay() : e === "fr" ? Ry() : e === "it" ? Iy() : e === "jp" ? Ny() : e === "pl" ? Dy() : e === "ru" ? Py() : e === "uk" ? Ly() : xy()
  },
  My = () => "The verification code is incorrect. Please check it and try again.",
  Cy = () => "Código inválido",
  jy = () => "验证码不正确。请检查后重试。",
  By = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  Fy = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  Uy = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  Gy = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  qy = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  Wy = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  Vy = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  Ky = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  Hy = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  $y = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? My() : e === "pt" ? Cy() : e === "ch" ? jy() : e === "de" ? By() : e === "es" ? Fy() : e === "fr" ? Uy() : e === "it" ? Gy() : e === "jp" ? qy() : e === "pl" ? Wy() : e === "ru" ? Vy() : e === "uk" ? Ky() : Hy()
  },
  Xy = () => "Invalid discord.",
  Yy = () => "Discord inválido.",
  Jy = () => "无效的 Discord。",
  Zy = () => "Ungültiger Discord.",
  Qy = () => "Discord inválido.",
  eb = () => "Discord invalide.",
  tb = () => "Discord non valido.",
  nb = () => "無効なDiscordアカウントです。",
  rb = () => "Nieprawidłowy Discord.",
  ob = () => "Неверный Discord.",
  ib = () => "Некоректний Discord.",
  ab = () => "Discord không hợp lệ.",
  sb = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Xy() : e === "pt" ? Yy() : e === "ch" ? Jy() : e === "de" ? Zy() : e === "es" ? Qy() : e === "fr" ? eb() : e === "it" ? tb() : e === "jp" ? nb() : e === "pl" ? rb() : e === "ru" ? ob() : e === "uk" ? ib() : ab()
  },
  cb = () => "The name contains disallowed characters or words. Please choose a different name.",
  ub = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  lb = () => "名称包含禁止的字符或词语，请选择其他名称。",
  db = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  _b = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  fb = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  pb = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  mb = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  hb = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  gb = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  wb = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  yb = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  Jn = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? cb() : e === "pt" ? ub() : e === "ch" ? lb() : e === "de" ? db() : e === "es" ? _b() : e === "fr" ? fb() : e === "it" ? pb() : e === "jp" ? mb() : e === "pl" ? hb() : e === "ru" ? gb() : e === "uk" ? wb() : yb()
  },
  bb = () => "Please enter a valid phone number with country code.",
  vb = () => "Insira um número de telefone válido com código do país.",
  Eb = () => "请输入带国家代码的有效电话号码。",
  Tb = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  Ob = () => "Introduce un número de teléfono válido con código de país.",
  kb = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  Sb = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  Ab = () => "国番号付きの有効な電話番号を入力してください。",
  Rb = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  Ib = () => "Введите действительный номер телефона с кодом страны.",
  Nb = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  Db = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  Pb = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? bb() : e === "pt" ? vb() : e === "ch" ? Eb() : e === "de" ? Tb() : e === "es" ? Ob() : e === "fr" ? kb() : e === "it" ? Sb() : e === "jp" ? Ab() : e === "pl" ? Rb() : e === "ru" ? Ib() : e === "uk" ? Nb() : Db()
  },
  Lb = () => "Phone number not supported. Please try another number.",
  xb = () => "Número de telefone não suportado. Por favor, tente outro número.",
  zb = () => "不支持此电话号码。请尝试其他号码。",
  Mb = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  Cb = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  jb = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  Bb = () => "Numero di telefono non supportato. Prova con un altro numero.",
  Fb = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  Ub = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  Gb = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  qb = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  Wb = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  Vb = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Lb() : e === "pt" ? xb() : e === "ch" ? zb() : e === "de" ? Mb() : e === "es" ? Cb() : e === "fr" ? jb() : e === "it" ? Bb() : e === "jp" ? Fb() : e === "pl" ? Ub() : e === "ru" ? Gb() : e === "uk" ? qb() : Wb()
  },
  Kb = () => "The new leader must be a member of the alliance",
  Hb = () => "O novo líder deve ser um membro da aliança",
  $b = () => "新盟主必须是联盟成员",
  Xb = () => "Der neue Anführer muss Mitglied der Allianz sein",
  Yb = () => "El nuevo líder debe ser miembro de la alianza",
  Jb = () => "Le nouveau chef doit être membre de l’alliance",
  Zb = () => "Il nuovo leader deve essere un membro dell'alleanza",
  Qb = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  ev = () => "Nowy lider musi być członkiem sojuszu",
  tv = () => "Новый лидер должен быть участником альянса",
  nv = () => "Новий лідер має бути учасником альянсу",
  rv = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  ov = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Kb() : e === "pt" ? Hb() : e === "ch" ? $b() : e === "de" ? Xb() : e === "es" ? Yb() : e === "fr" ? Jb() : e === "it" ? Zb() : e === "jp" ? Qb() : e === "pl" ? ev() : e === "ru" ? tv() : e === "uk" ? nv() : rv()
  },
  iv = () => "Leaderboard is temporarily disabled",
  av = () => "O ranking está temporariamente desativado",
  sv = () => "排行榜已暂时停用",
  cv = () => "Die Bestenliste ist vorübergehend deaktiviert",
  uv = () => "La clasificación está deshabilitada temporalmente",
  lv = () => "Le classement est temporairement désactivé",
  dv = () => "La classifica è temporaneamente disattivata",
  _v = () => "ランキングは一時的に無効になっています。",
  fv = () => "Ranking jest tymczasowo wyłączony",
  pv = () => "Таблица лидеров временно отключена",
  mv = () => "Таблиця лідерів тимчасово вимкнена",
  hv = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  me = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? iv() : e === "pt" ? av() : e === "ch" ? sv() : e === "de" ? cv() : e === "es" ? uv() : e === "fr" ? lv() : e === "it" ? dv() : e === "jp" ? _v() : e === "pl" ? fv() : e === "ru" ? pv() : e === "uk" ? mv() : hv()
  },
  gv = () => "Location name is too big (max. 128 characters)",
  wv = () => "Nome da localização é grande demais (max. 128 caracteres)",
  yv = () => "位置名称过长（最大 128 个字符）",
  bv = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  vv = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Ev = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Tv = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Ov = () => "場所の名前が長すぎます（最大128文字）。",
  kv = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  Sv = () => "Название локации слишком длинное (макс. 128 символов)",
  Av = () => "Назва локації надто довга (макс. 128 символів)",
  Rv = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  Iv = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? gv() : e === "pt" ? wv() : e === "ch" ? yv() : e === "de" ? bv() : e === "es" ? vv() : e === "fr" ? Ev() : e === "it" ? Tv() : e === "jp" ? Ov() : e === "pl" ? kv() : e === "ru" ? Sv() : e === "uk" ? Av() : Rv()
  },
  Nv = () => "Multi-accounting",
  Dv = () => "Múltiplas contas",
  Pv = () => "多账号",
  Lv = () => "Multi-Accounting",
  xv = () => "Multi-cuentas",
  zv = () => "Multi-comptes",
  Mv = () => "Multi-account",
  Cv = () => "複数アカウント使用",
  jv = () => "Multi-konta",
  Bv = () => "Мультиаккаунт",
  Fv = () => "Мультиакаунтинг",
  Uv = () => "Nhiều tài khoản",
  Gv = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Nv() : e === "pt" ? Dv() : e === "ch" ? Pv() : e === "de" ? Lv() : e === "es" ? xv() : e === "fr" ? zv() : e === "it" ? Mv() : e === "jp" ? Cv() : e === "pl" ? jv() : e === "ru" ? Bv() : e === "uk" ? Fv() : Uv()
  },
  qv = () => "Paint with more than one account or using virtual machines, residential proxies, or multi-accounting browsers",
  Wv = () => "Pintar com mais de uma conta ou usando máquinas virtuais, proxies residenciais ou navegadores multi-conta",
  Vv = () => "使用多个账号绘制像素，或使用虚拟机、住宅代理或多账号浏览器",
  Kv = () => "Mehr als ein Konto zum Malen verwenden oder virtuelle Maschinen, Residential-Proxys oder Multi-Accounting-Browser nutzen",
  Hv = () => "Pintar con más de una cuenta o usar máquinas virtuales, proxies residenciales o navegadores multicuenta",
  $v = () => "Utiliser plus d’un compte pour peindre, ou utiliser des machines virtuelles, des proxys résidentiels ou des navigateurs multi-comptes",
  Xv = () => "Usare più di un account per dipingere, oppure usare macchine virtuali, proxy residenziali o browser multi-account",
  Yv = () => "複数のアカウントを使ってピクセルを塗る、または仮想マシン、住宅プロキシ、マルチアカウントブラウザを使用する",
  Jv = () => "Malowanie pikseli na więcej niż jednym koncie lub przy użyciu maszyn wirtualnych, proxy residential lub przeglądarek multi-kontowych",
  Zv = () => "Рисование с более чем одного аккаунта или с использованием виртуальных машин, резидентных прокси или мультиаккаунт-браузеров",
  Qv = () => "Малювання з більш ніж одного акаунта або з використанням віртуальних машин, резидентних проксі чи мультиакаунт-браузерів",
  eE = () => "Vẽ pixel bằng nhiều hơn một tài khoản hoặc bằng máy ảo, proxy dân cư hoặc trình duyệt đa tài khoản",
  tE = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? qv() : e === "pt" ? Wv() : e === "ch" ? Vv() : e === "de" ? Kv() : e === "es" ? Hv() : e === "fr" ? $v() : e === "it" ? Xv() : e === "jp" ? Yv() : e === "pl" ? Jv() : e === "ru" ? Zv() : e === "uk" ? Qv() : eE()
  },
  nE = n => `You can change your name again in ${n.days} days`,
  rE = n => `Você pode alterar seu nome novamente em ${n.days} dias.`,
  oE = n => `你可以在 ${n.days} 天后再次修改名称`,
  iE = n => `Du kannst deinen Namen in ${n.days} Tagen erneut ändern`,
  aE = n => `Podrás cambiar tu nombre de nuevo en ${n.days} días`,
  sE = n => `Vous pourrez changer votre nom à nouveau dans ${n.days} jours`,
  cE = n => `Potrai cambiare di nuovo il tuo nome tra ${n.days} giorni.`,
  uE = n => `${n.days}日後に再び名前を変更できます。`,
  lE = n => `Następną zmianę nazwy możesz wykonać za ${n.days} dni`,
  dE = n => `Вы сможете изменить имя снова через ${n.days} дн.`,
  _E = n => `Ви зможете змінити імʼя знову через ${n.days} днів`,
  fE = n => `Bạn có thể đổi tên lại sau ${n.days} ngày`,
  pE = (n, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? nE(n) : e === "pt" ? rE(n) : e === "ch" ? oE(n) : e === "de" ? iE(n) : e === "es" ? aE(n) : e === "fr" ? sE(n) : e === "it" ? cE(n) : e === "jp" ? uE(n) : e === "pl" ? lE(n) : e === "ru" ? dE(n) : e === "uk" ? _E(n) : fE(n)
  },
  mE = () => "No internet access or the servers are offline. Try again later.",
  hE = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  gE = () => "没有网络连接或服务器已离线。请稍后重试。",
  wE = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  yE = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  bE = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  vE = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  EE = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  TE = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  OE = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  kE = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  SE = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  AE = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? mE() : e === "pt" ? hE() : e === "ch" ? gE() : e === "de" ? wE() : e === "es" ? yE() : e === "fr" ? bE() : e === "it" ? vE() : e === "jp" ? EE() : e === "pl" ? TE() : e === "ru" ? OE() : e === "uk" ? kE() : SE()
  },
  RE = () => "You are not allowed to verify a phone number. Try refreshing the page",
  IE = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  NE = () => "您无权验证电话号码。请尝试刷新页面。",
  DE = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  PE = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  LE = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  xE = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  zE = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  ME = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  CE = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  jE = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  BE = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  FE = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? RE() : e === "pt" ? IE() : e === "ch" ? NE() : e === "de" ? DE() : e === "es" ? PE() : e === "fr" ? LE() : e === "it" ? xE() : e === "jp" ? zE() : e === "pl" ? ME() : e === "ru" ? CE() : e === "uk" ? jE() : BE()
  },
  UE = () => "Operation not allowed. Maybe you have too many favorite locations.",
  GE = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  qE = () => "操作不被允许。你的收藏位置可能过多。",
  WE = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  VE = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  KE = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  HE = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  $E = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  XE = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  YE = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  JE = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  ZE = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  QE = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? UE() : e === "pt" ? GE() : e === "ch" ? qE() : e === "de" ? WE() : e === "es" ? VE() : e === "fr" ? KE() : e === "it" ? HE() : e === "jp" ? $E() : e === "pl" ? XE() : e === "ru" ? YE() : e === "uk" ? JE() : ZE()
  },
  eT = n => `Not enough charges: you have ${n.charges} but this overlay needs ${n.pixels}.`,
  tT = n => `Cargas insuficientes: você tem ${n.charges}, mas esta sobreposição precisa de ${n.pixels}.`,
  nT = n => `充能不足：你有 ${n.charges}，但此叠加层需要 ${n.pixels}。`,
  rT = n => `Nicht genügend Ladungen: Du hast ${n.charges}, aber dieses Overlay benötigt ${n.pixels}.`,
  oT = n => `Cargas insuficientes: tienes ${n.charges} pero esta superposición necesita ${n.pixels}.`,
  iT = n => `Charges insuffisantes : vous avez ${n.charges} mais ce calque nécessite ${n.pixels}.`,
  aT = n => `Cariche insufficienti: ne hai ${n.charges} ma questo overlay ne richiede ${n.pixels}.`,
  sT = n => `チャージが足りません：現在 ${n.charges} ですが、このオーバーレイには ${n.pixels} 必要です。`,
  cT = n => `Za mało ładunków: masz ${n.charges}, ale ta nakładka wymaga ${n.pixels}.`,
  uT = n => `Недостаточно зарядов: у вас ${n.charges}, но для этого слоя нужно ${n.pixels}.`,
  lT = n => `Недостатньо зарядів: у вас ${n.charges}, але для цього шару потрібно ${n.pixels}.`,
  dT = n => `Không đủ lượt sơn: bạn có ${n.charges} nhưng lớp phủ này cần ${n.pixels}.`,
  _T = (n, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? eT(n) : e === "pt" ? tT(n) : e === "ch" ? nT(n) : e === "de" ? rT(n) : e === "es" ? oT(n) : e === "fr" ? iT(n) : e === "it" ? aT(n) : e === "jp" ? sT(n) : e === "pl" ? cT(n) : e === "ru" ? uT(n) : e === "uk" ? lT(n) : dT(n)
  },
  fT = () => "You are trying to paint with a color you do not own",
  pT = () => "Você está tentando pintar com uma cor que não possui",
  mT = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  hT = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  gT = () => "Estás intentando pintar con un color que no posees",
  wT = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  yT = () => "Stai cercando di dipingere con un colore che non possiedi",
  bT = () => "所持していない色で塗ろうとしています。",
  vT = () => "Próbujesz malować kolorem, którego nie posiadasz",
  ET = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  TT = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  OT = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  Zn = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? fT() : e === "pt" ? pT() : e === "ch" ? mT() : e === "de" ? hT() : e === "es" ? gT() : e === "fr" ? wT() : e === "it" ? yT() : e === "jp" ? bT() : e === "pl" ? vT() : e === "ru" ? ET() : e === "uk" ? TT() : OT()
  },
  kT = () => "Phone already used",
  ST = () => "Telefone já usado",
  AT = () => "电话号码已被使用",
  RT = () => "Telefonnummer bereits verwendet",
  IT = () => "Teléfono ya utilizado",
  NT = () => "Téléphone déjà utilisé",
  DT = () => "Telefono già utilizzato",
  PT = () => "この電話番号は既に使用されています。",
  LT = () => "Numer telefonu jest już używany",
  xT = () => "Телефон уже используется",
  zT = () => "Номер телефону вже використовується",
  MT = () => "Số điện thoại đã được sử dụng",
  CT = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? kT() : e === "pt" ? ST() : e === "ch" ? AT() : e === "de" ? RT() : e === "es" ? IT() : e === "fr" ? NT() : e === "it" ? DT() : e === "jp" ? PT() : e === "pl" ? LT() : e === "ru" ? xT() : e === "uk" ? zT() : MT()
  },
  jT = () => "This phone number's region is not supported",
  BT = () => "A região deste número de telefone não é suportada",
  FT = () => "此电话号码的地区不受支持",
  UT = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  GT = () => "La región de este número de teléfono no es compatible",
  qT = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  WT = () => "La regione di questo numero di telefono non è supportata",
  VT = () => "この電話番号の地域はサポートされていません",
  KT = () => "Region tego numeru telefonu nie jest obsługiwany",
  HT = () => "Регион этого номера телефона не поддерживается",
  $T = () => "Регіон цього номера телефону не підтримується",
  XT = () => "Vùng của số điện thoại này không được hỗ trợ",
  YT = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? jT() : e === "pt" ? BT() : e === "ch" ? FT() : e === "de" ? UT() : e === "es" ? GT() : e === "fr" ? qT() : e === "it" ? WT() : e === "jp" ? VT() : e === "pl" ? KT() : e === "ru" ? HT() : e === "uk" ? $T() : XT()
  },
  JT = () => "Refresh your page to get the latest update",
  ZT = () => "Recarregue sua página para obter as últimas atualizações",
  QT = () => "刷新页面以获取最新更新",
  e0 = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  t0 = () => "Actualiza la página para obtener la última versión",
  n0 = () => "Actualisez la page pour obtenir les dernières mises à jour",
  r0 = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  o0 = () => "最新の状態にするにはページを再読み込みしてください。",
  i0 = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  a0 = () => "Обновите страницу, чтобы получить последние изменения",
  s0 = () => "Оновіть сторінку, щоб отримати останні оновлення",
  c0 = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  Qn = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? JT() : e === "pt" ? ZT() : e === "ch" ? QT() : e === "de" ? e0() : e === "es" ? t0() : e === "fr" ? n0() : e === "it" ? r0() : e === "jp" ? o0() : e === "pl" ? i0() : e === "ru" ? a0() : e === "uk" ? s0() : c0()
  },
  u0 = () => "The request timed out. Please try again.",
  l0 = () => "A solicitação expirou. Por favor, tente novamente.",
  d0 = () => "请求超时。请重试。",
  _0 = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  f0 = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  p0 = () => "La requête a expiré. Veuillez réessayer.",
  m0 = () => "La richiesta è scaduta. Riprova.",
  h0 = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  g0 = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  w0 = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  y0 = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  b0 = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  v0 = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? u0() : e === "pt" ? l0() : e === "ch" ? d0() : e === "de" ? _0() : e === "es" ? f0() : e === "fr" ? p0() : e === "it" ? m0() : e === "jp" ? h0() : e === "pl" ? g0() : e === "ru" ? w0() : e === "uk" ? y0() : b0()
  },
  E0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  T0 = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  O0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  k0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  S0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  A0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  R0 = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  I0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  N0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  D0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  P0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  L0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  x0 = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? E0() : e === "pt" ? T0() : e === "ch" ? O0() : e === "de" ? k0() : e === "es" ? S0() : e === "fr" ? A0() : e === "it" ? R0() : e === "jp" ? I0() : e === "pl" ? N0() : e === "ru" ? D0() : e === "uk" ? P0() : L0()
  },
  z0 = () => "The service is currently unavailable. Please try again later.",
  M0 = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  C0 = () => "服务当前不可用。请稍后再试。",
  j0 = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  B0 = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  F0 = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  U0 = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  G0 = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  q0 = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  W0 = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  V0 = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  K0 = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  H0 = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? z0() : e === "pt" ? M0() : e === "ch" ? C0() : e === "de" ? j0() : e === "es" ? B0() : e === "fr" ? F0() : e === "it" ? U0() : e === "jp" ? G0() : e === "pl" ? q0() : e === "ru" ? W0() : e === "uk" ? V0() : K0()
  },
  $0 = () => "Too many attempts. Please try again later",
  X0 = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  Y0 = () => "尝试次数过多，请稍后再试",
  J0 = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  Z0 = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  Q0 = () => "Trop de tentatives. Veuillez réessayer plus tard",
  eO = () => "Troppi tentativi. Riprova più tardi.",
  tO = () => "試行回数が多すぎます。後で再度お試しください。",
  nO = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  rO = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  oO = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  iO = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  er = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? $0() : e === "pt" ? X0() : e === "ch" ? Y0() : e === "de" ? J0() : e === "es" ? Z0() : e === "fr" ? Q0() : e === "it" ? eO() : e === "jp" ? tO() : e === "pl" ? nO() : e === "ru" ? rO() : e === "uk" ? oO() : iO()
  },
  aO = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  sO = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  cO = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  uO = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  lO = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  dO = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  _O = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  fO = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  pO = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  mO = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  hO = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  gO = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  wO = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? aO() : e === "pt" ? sO() : e === "ch" ? cO() : e === "de" ? uO() : e === "es" ? lO() : e === "fr" ? dO() : e === "it" ? _O() : e === "jp" ? fO() : e === "pl" ? pO() : e === "ru" ? mO() : e === "uk" ? hO() : gO()
  },
  yO = () => "The typed username does not match your current username.",
  bO = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  vO = () => "输入的用户名与当前用户名不匹配。",
  EO = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  TO = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  OO = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  kO = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  SO = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  AO = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  RO = () => "Введённое имя пользователя не совпадает с текущим.",
  IO = () => "Введене імʼя користувача не збігається з поточним.",
  NO = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  DO = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? yO() : e === "pt" ? bO() : e === "ch" ? vO() : e === "de" ? EO() : e === "es" ? TO() : e === "fr" ? OO() : e === "it" ? kO() : e === "jp" ? SO() : e === "pl" ? AO() : e === "ru" ? RO() : e === "uk" ? IO() : NO()
  },
  PO = () => "Unexpected server error. Try again later.",
  LO = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  xO = () => "服务器出现意外错误。请稍后再试。",
  zO = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  MO = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  CO = () => "Erreur serveur inattendue. Réessayez plus tard.",
  jO = () => "Errore imprevisto del server. Riprova più tardi.",
  BO = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  FO = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  UO = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  GO = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  qO = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  f = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? PO() : e === "pt" ? LO() : e === "ch" ? xO() : e === "de" ? zO() : e === "es" ? MO() : e === "fr" ? CO() : e === "it" ? jO() : e === "jp" ? BO() : e === "pl" ? FO() : e === "ru" ? UO() : e === "uk" ? GO() : qO()
  },
  WO = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  VO = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  KO = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  HO = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  $O = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  XO = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  YO = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  JO = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  ZO = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  QO = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  ek = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  tk = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  nk = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? WO() : e === "pt" ? VO() : e === "ch" ? KO() : e === "de" ? HO() : e === "es" ? $O() : e === "fr" ? XO() : e === "it" ? YO() : e === "jp" ? JO() : e === "pl" ? ZO() : e === "ru" ? QO() : e === "uk" ? ek() : tk()
  },
  rk = () => "VPN or proxy detected. Please disable your VPN and try again.",
  ok = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  ik = () => "检测到VPN或代理。请关闭VPN后重试。",
  ak = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  sk = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  ck = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  uk = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  lk = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  dk = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  _k = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  fk = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  pk = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  mk = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? rk() : e === "pt" ? ok() : e === "ch" ? ik() : e === "de" ? ak() : e === "es" ? sk() : e === "fr" ? ck() : e === "it" ? uk() : e === "jp" ? lk() : e === "pl" ? dk() : e === "ru" ? _k() : e === "uk" ? fk() : pk()
  },
  hk = () => "Failed to load WebAssembly module. Try to use another browser.",
  gk = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  wk = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  yk = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  bk = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  vk = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  Ek = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  Tk = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  Ok = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  kk = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  Sk = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  Ak = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  Rk = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? hk() : e === "pt" ? gk() : e === "ch" ? wk() : e === "de" ? yk() : e === "es" ? bk() : e === "fr" ? vk() : e === "it" ? Ek() : e === "jp" ? Tk() : e === "pl" ? Ok() : e === "ru" ? kk() : e === "uk" ? Sk() : Ak()
  },
  Ik = () => "You already have this item. Please refresh the page.",
  Nk = () => "Você já possui este item. Atualize a página.",
  Dk = () => "你已经拥有此物品。请刷新页面。",
  Pk = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  Lk = () => "Ya tienes este ítem. Actualiza la página.",
  xk = () => "Vous possédez déjà cet objet. Actualisez la page.",
  zk = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  Mk = () => "このアイテムはすでに所持しています。ページを更新してください。",
  Ck = () => "Masz już ten przedmiot. Odśwież stronę.",
  jk = () => "У вас уже есть этот предмет. Обновите страницу.",
  Bk = () => "У вас уже є цей предмет. Оновіть сторінку.",
  Fk = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  tr = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Ik() : e === "pt" ? Nk() : e === "ch" ? Dk() : e === "de" ? Pk() : e === "es" ? Lk() : e === "fr" ? xk() : e === "it" ? zk() : e === "jp" ? Mk() : e === "pl" ? Ck() : e === "ru" ? jk() : e === "uk" ? Bk() : Fk()
  },
  Uk = () => "You are already in an alliance",
  Gk = () => "Você já está em uma aliança",
  qk = () => "你已经在一个联盟中",
  Wk = () => "Du bist bereits in einer Allianz",
  Vk = () => "Ya estás en una alianza",
  Kk = () => "Vous êtes déjà dans une alliance",
  Hk = () => "Sei già in un'alleanza",
  $k = () => "すでにアライアンスに所属しています。",
  Xk = () => "Jesteś już w sojuszu",
  Yk = () => "Вы уже состоите в альянсе",
  Jk = () => "Ви вже перебуваєте в альянсі",
  Zk = () => "Bạn đã ở trong một liên minh",
  Qk = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? Uk() : e === "pt" ? Gk() : e === "ch" ? qk() : e === "de" ? Wk() : e === "es" ? Vk() : e === "fr" ? Kk() : e === "it" ? Hk() : e === "jp" ? $k() : e === "pl" ? Xk() : e === "ru" ? Yk() : e === "uk" ? Jk() : Zk()
  },
  eS = () => "You are not allowed to do this",
  tS = () => "Você não tem permissão para fazer isso",
  nS = () => "你无权执行此操作",
  rS = () => "Du bist dazu nicht berechtigt",
  oS = () => "No tienes permiso para hacer esto",
  iS = () => "Vous n’êtes pas autorisé à faire cela",
  aS = () => "Non hai il permesso di farlo",
  sS = () => "この操作を行う権限がありません。",
  cS = () => "Nie masz uprawnień, aby to zrobić",
  uS = () => "У вас нет прав для этого действия",
  lS = () => "Ви не маєте права це робити",
  dS = () => "Bạn không có quyền làm việc này",
  he = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? eS() : e === "pt" ? tS() : e === "ch" ? nS() : e === "de" ? rS() : e === "es" ? oS() : e === "fr" ? iS() : e === "it" ? aS() : e === "jp" ? sS() : e === "pl" ? cS() : e === "ru" ? uS() : e === "uk" ? lS() : dS()
  },
  _S = () => "You do not have enough Droplets to buy this item.",
  fS = () => "Você não tem Droplets suficientes para comprar este item.",
  pS = () => "你的 Droplets 不足，无法购买此物品。",
  mS = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  hS = () => "No tienes suficientes Droplets para comprar este ítem.",
  gS = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  wS = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  yS = () => "このアイテムを購入するのに十分なDropletsがありません。",
  bS = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  vS = () => "У вас недостаточно Droplets для покупки этого предмета.",
  ES = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  TS = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  nr = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? _S() : e === "pt" ? fS() : e === "ch" ? pS() : e === "de" ? mS() : e === "es" ? hS() : e === "fr" ? gS() : e === "it" ? wS() : e === "jp" ? yS() : e === "pl" ? bS() : e === "ru" ? vS() : e === "uk" ? ES() : TS()
  },
  OS = () => "You need to be logged in to paint",
  kS = () => "Você precisa estar conectado para pintar",
  SS = () => "你需要登录才能进行绘制",
  AS = () => "Du musst eingeloggt sein, um zu malen",
  RS = () => "Debes iniciar sesión para pintar",
  IS = () => "Vous devez être connecté pour peindre",
  NS = () => "Devi avere effettuato l'accesso per dipingere",
  DS = () => "ペイントするにはログインが必要です。",
  PS = () => "Musisz być zalogowany, aby malować",
  LS = () => "Чтобы рисовать, нужно войти в аккаунт",
  xS = () => "Щоб малювати, необхідно увійти в акаунт",
  zS = () => "Bạn cần đăng nhập để tô",
  rr = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? OS() : e === "pt" ? kS() : e === "ch" ? SS() : e === "de" ? AS() : e === "es" ? RS() : e === "fr" ? IS() : e === "it" ? NS() : e === "jp" ? DS() : e === "pl" ? PS() : e === "ru" ? LS() : e === "uk" ? xS() : zS()
  },
  MS = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  CS = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  jS = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  BS = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  FS = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  US = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  GS = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  qS = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  WS = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  VS = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  KS = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  HS = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  $S = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? MS() : e === "pt" ? CS() : e === "ch" ? jS() : e === "de" ? BS() : e === "es" ? FS() : e === "fr" ? US() : e === "it" ? GS() : e === "jp" ? qS() : e === "pl" ? WS() : e === "ru" ? VS() : e === "uk" ? KS() : HS()
  },
  XS = n => `Your account has been suspended out until ${n.until}`,
  YS = n => `A sua conta está suspensa até ${n.until}`,
  JS = n => `你的账号已被暂停至 ${n.until}`,
  ZS = n => `Dein Konto ist gesperrt bis ${n.until}`,
  QS = n => `Tu cuenta ha sido suspendida hasta ${n.until}`,
  eA = n => `Votre compte est suspendu jusqu’au ${n.until}`,
  tA = n => `Il tuo account è sospeso fino al ${n.until}`,
  nA = n => `あなたのアカウントは${n.until}まで一時停止されています。`,
  rA = n => `Twoje konto zostało zawieszone do ${n.until}`,
  oA = n => `Ваш аккаунт заблокирован до ${n.until}`,
  iA = n => `Ваш акаунт призупинено до ${n.until}`,
  aA = n => `Tài khoản của bạn đã bị đình chỉ đến ${n.until}`,
  or = (n, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? XS(n) : e === "pt" ? YS(n) : e === "ch" ? JS(n) : e === "de" ? ZS(n) : e === "es" ? QS(n) : e === "fr" ? eA(n) : e === "it" ? tA(n) : e === "jp" ? nA(n) : e === "pl" ? rA(n) : e === "ru" ? oA(n) : e === "uk" ? iA(n) : aA(n)
  },
  sA = () => "A correction is already pending for this ticket.",
  cA = () => "Já existe uma correção pendente para este ticket.",
  uA = () => "此工单已存在待审核的更正请求。",
  lA = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  dA = () => "Ya hay una corrección pendiente para este ticket.",
  _A = () => "Une correction est déjà en attente pour ce ticket.",
  fA = () => "Una correzione è già in sospeso per questo ticket.",
  pA = () => "このチケットには未処理の修正があります。",
  mA = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  hA = () => "Для этого тикета уже есть запрос на исправление.",
  gA = () => "Для цього тікета вже є запит на перевірці.",
  wA = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  yA = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? sA() : e === "pt" ? cA() : e === "ch" ? uA() : e === "de" ? lA() : e === "es" ? dA() : e === "fr" ? _A() : e === "it" ? fA() : e === "jp" ? pA() : e === "pl" ? mA() : e === "ru" ? hA() : e === "uk" ? gA() : wA()
  },
  bA = () => "You cannot review your own correction request.",
  vA = () => "Você não pode revisar sua própria solicitação de correção.",
  EA = () => "不能审核自己提交的更正请求。",
  TA = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  OA = () => "No puedes revisar tu propia solicitud de corrección.",
  kA = () => "Tu ne peux pas examiner ta propre demande de correction.",
  SA = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  AA = () => "自分のリクエストはレビューできません。",
  RA = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  IA = () => "Нельзя рассматривать собственный запрос.",
  NA = () => "Не можна перевіряти власний запит.",
  DA = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  PA = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? bA() : e === "pt" ? vA() : e === "ch" ? EA() : e === "de" ? TA() : e === "es" ? OA() : e === "fr" ? kA() : e === "it" ? SA() : e === "jp" ? AA() : e === "pl" ? RA() : e === "ru" ? IA() : e === "uk" ? NA() : DA()
  },
  LA = () => "This correction has already been reviewed.",
  xA = () => "Esta correção já foi revisada.",
  zA = () => "此请求已被审核。",
  MA = () => "Diese Korrektur wurde bereits geprüft.",
  CA = () => "Esta corrección ya ha sido revisada.",
  jA = () => "Cette correction a déjà été examinée.",
  BA = () => "Questa correzione è già stata revisionata.",
  FA = () => "このリクエストはすでにレビュー済みです。",
  UA = () => "Ta prośba została już rozpatrzona.",
  GA = () => "Этот запрос уже рассмотрен.",
  qA = () => "Цей запит вже перевірено.",
  WA = () => "Yêu cầu này đã được duyệt.",
  VA = (n = {}, t = {}) => {
    const e = t.locale ?? w();
    return e === "en" ? LA() : e === "pt" ? xA() : e === "ch" ? zA() : e === "de" ? MA() : e === "es" ? CA() : e === "fr" ? jA() : e === "it" ? BA() : e === "jp" ? FA() : e === "pl" ? UA() : e === "ru" ? GA() : e === "uk" ? qA() : WA()
  },
  Qt = {
    insufficient_context: Uh(),
    no_rule_violation: Bg(),
    not_enough_for_punishment: dw(),
    caused_by_glitch: mh(),
    out_of_scope: Cw(),
    invalid_information: fg(),
    allowed_by_event: qm(),
    already_handled: gm()
  },
  ZR = {
    insufficient_context: Rh(),
    no_rule_violation: Sg(),
    not_enough_for_punishment: Zg(),
    caused_by_glitch: nh(),
    out_of_scope: Ow(),
    invalid_information: eg(),
    allowed_by_event: Nm(),
    already_handled: om()
  },
  QR = Object.keys(Qt).map(n => ({
    value: n,
    label: Qt[n]
  }));

function eI(n) {
  return n in Qt
}
var c = (n => (n[n.CONTINUE = 100] = "CONTINUE", n[n.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", n[n.PROCESSING = 102] = "PROCESSING", n[n.EARLY_HINTS = 103] = "EARLY_HINTS", n[n.OK = 200] = "OK", n[n.CREATED = 201] = "CREATED", n[n.ACCEPTED = 202] = "ACCEPTED", n[n.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", n[n.NO_CONTENT = 204] = "NO_CONTENT", n[n.RESET_CONTENT = 205] = "RESET_CONTENT", n[n.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", n[n.MULTI_STATUS = 207] = "MULTI_STATUS", n[n.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", n[n.IM_USED = 226] = "IM_USED", n[n.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", n[n.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", n[n.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", n[n.FOUND = 302] = "FOUND", n[n.SEE_OTHER = 303] = "SEE_OTHER", n[n.NOT_MODIFIED = 304] = "NOT_MODIFIED", n[n.USE_PROXY = 305] = "USE_PROXY", n[n.SWITCH_PROXY = 306] = "SWITCH_PROXY", n[n.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", n[n.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", n[n.BAD_REQUEST = 400] = "BAD_REQUEST", n[n.UNAUTHORIZED = 401] = "UNAUTHORIZED", n[n.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", n[n.FORBIDDEN = 403] = "FORBIDDEN", n[n.NOT_FOUND = 404] = "NOT_FOUND", n[n.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", n[n.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", n[n.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", n[n.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", n[n.CONFLICT = 409] = "CONFLICT", n[n.GONE = 410] = "GONE", n[n.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", n[n.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", n[n.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", n[n.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", n[n.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", n[n.URI_TOO_LONG = 414] = "URI_TOO_LONG", n[n.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", n[n.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", n[n.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", n[n.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", n[n.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", n[n.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", n[n.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", n[n.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", n[n.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", n[n.LOCKED = 423] = "LOCKED", n[n.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", n[n.TOO_EARLY = 425] = "TOO_EARLY", n[n.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", n[n.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", n[n.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", n[n.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", n[n.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", n[n.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", n[n.BAD_GATEWAY = 502] = "BAD_GATEWAY", n[n.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", n[n.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", n[n.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", n[n.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", n[n.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", n[n.LOOP_DETECTED = 508] = "LOOP_DETECTED", n[n.NOT_EXTENDED = 510] = "NOT_EXTENDED", n[n.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", n[n.AWS_ELB_000 = 0] = "AWS_ELB_000", n[n.THIS_IS_FINE = 218] = "THIS_IS_FINE", n[n.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", n[n.METHOD_FAILURE = 420] = "METHOD_FAILURE", n[n.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", n[n.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", n[n.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", n[n.NO_RESPONSE = 444] = "NO_RESPONSE", n[n.RETRY_WITH = 449] = "RETRY_WITH", n[n.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", n[n.REDIRECT_IIS = 451] = "REDIRECT_IIS", n[n.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", n[n.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", n[n.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", n[n.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", n[n.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", n[n.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", n[n.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", n[n.INVALID_TOKEN = 498] = "INVALID_TOKEN", n[n.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", n[n.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", n[n.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", n[n.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", n[n.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", n[n.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", n[n.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", n[n.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", n[n.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", n[n.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", n[n.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", n[n.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", n[n.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", n[n.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", n[n.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", n[n.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", n[n.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", n[n.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", n[n.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", n[n.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", n[n.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", n[n.REQUEST_DENIED = 999] = "REQUEST_DENIED", n))(c || {});
const _e = {
  day: 1440 * 60 * 1e3,
  hour: 3600 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
};

function tI(n) {
  const t = Math.floor(n / _e.hour);
  n -= t * _e.hour;
  const e = Math.floor(n / _e.minute);
  n -= e * _e.minute;
  const o = Math.floor(n / _e.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${o}` : `${e}:${o}`
}

function nI(n) {
  const t = n.getFullYear(),
    e = String(n.getMonth() + 1).padStart(2, "0"),
    r = String(n.getDate()).padStart(2, "0"),
    o = String(n.getHours()).padStart(2, "0"),
    i = String(n.getMinutes()).padStart(2, "0"),
    a = String(n.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${r} ${o}:${i}:${a}`
}
const rI = {
    griefing: ap(),
    "multi-accounting": Gv(),
    "hate-speech": Pp(),
    bot: Vu(),
    doxxing: u_(),
    "inappropriate-content": Yw(),
    other: gl()
  },
  oI = {
    doxxing: E_(),
    "hate-speech": Vp(),
    griefing: yp(),
    "multi-accounting": tE(),
    bot: ol(),
    "inappropriate-content": uy(),
    other: Nl()
  },
  iI = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  ir = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  aI = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  KA = 365 * _e.day;

function Lr(n) {
  if (!n) return null;
  const e = (n instanceof Date ? n : new Date(n)).getTime();
  return Number.isFinite(e) ? e : null
}

function sI(n, t = Date.now()) {
  const e = Lr(n);
  return e === null ? !1 : e - t >= KA
}

function cI(n, t = Date.now()) {
  const e = Lr(n);
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
const HA = [{
    tileSize: 1e3,
    zoom: 11
  }],
  $A = 4,
  XA = 6e3,
  YA = [{
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
  JA = {
    android: {
      googlePlayBilling: {
        price: 1.2
      },
      appName: "live.wplace.twa"
    }
  },
  ZA = {
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
  QA = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  eR = {
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
        see: "staff.dashboard.anticheat.see",
        unban: "staff.dashboard.anticheat.unban"
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
  tR = {
    tools: {
      wayback: {
        limit: 1e4
      }
    }
  },
  nR = [{
    slug: "country_badge",
    kind: "country",
    name: "Country badge",
    priceCoins: 50
  }, {
    slug: "profile_border",
    kind: "frame",
    name: "Profile border",
    priceCoins: 100,
    grantName: "World Cup Border",
    image: "https://files.wplace.live/img/world-cup/world-cup-frame.png"
  }, {
    slug: "champion_badge",
    kind: "badge",
    name: "Champion badge",
    priceCoins: 300,
    grantName: "World Cup Champion",
    image: "https://files.wplace.live/img/world-cup/world-cup-trophy-badge.png"
  }, {
    slug: "octopus_badge",
    kind: "badge",
    name: "Octopus badge",
    priceCoins: 0,
    grantName: "World Cup Octopus",
    unlockCondition: "knockout_perfect",
    image: "https://files.wplace.live/img/world-cup/world-cup-dust-badge.png"
  }],
  rR = {
    areaRadius: 250
  },
  ae = {
    seasons: HA,
    regionSize: $A,
    refreshIntervalMs: XA,
    colors: YA,
    platforms: JA,
    products: ZA,
    countries: QA,
    permissions: eR,
    settings: tR,
    worldCupStore: nR,
    moderation: rR
  },
  St = ae,
  oR = ae.seasons,
  xr = ae.seasons.length - 1,
  uI = ae.seasons[xr].zoom,
  lI = ae.seasons[xr].tileSize,
  dI = ae.permissions,
  iR = ae.settings,
  aR = ae.platforms.android,
  _I = aR.googlePlayBilling.price,
  fI = ae.worldCupStore;

function pI(n) {
  return St.countries[n - 1]
}

function en(n) {
  return en.map.get(n)
}(n => {
  n.sharedProducts = Object.entries(St.products).map(([t, e]) => ({
    ...e,
    productId: t
  })).filter(t => "lookupKey" in t), n.map = sR(n.sharedProducts, t => t.lookupKey)
})(en || (en = {}));

function sR(n, t) {
  const e = new Map;
  for (const r in n) {
    const o = Reflect.get(n, r),
      i = t(o, r, n);
    e.set(i, o)
  }
  return e
}
class m extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}
class mI extends Error {}

function ar(n, t) {
  const e = {};
  for (const r of n) {
    const o = t(r);
    let i = e[o];
    i ? i.push(r) : e[o] = [r]
  }
  return e
}

function hI(n, t) {
  const e = {};
  for (const r of n) {
    const o = t(r);
    e[o] = r
  }
  return e
}
const cR = 30 * _e.minute;
var Xe, Ye;
class uR {
  constructor(t) {
    j(this, Xe, V(!0));
    j(this, Ye, V(null));
    L(this, "lastHotspotRequestAt", 0);
    this.url = t
  }
  get online() {
    return G(T(this, Xe))
  }
  set online(t) {
    q(T(this, Xe), t, !0)
  }
  get serverTimeOffsetMs() {
    return G(T(this, Ye))
  }
  set serverTimeOffsetMs(t) {
    q(T(this, Ye), t, !0)
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
    const e = ar(t, s => `t=(${s.tile[0]},${s.tile[1]}),s=${s.season}`),
      r = {
        season: t[0].season,
        tiles: Object.values(e).map(s => ({
          x: s[0].tile[0],
          y: s[0].tile[1],
          pixels: {
            x: s.map(u => u.pixel[0]),
            y: s.map(u => u.pixel[1]),
            colors: s.map(u => u.colorIdx)
          }
        }))
      },
      o = JSON.stringify(r),
      i = await Pe.getHeaders(o),
      a = await this.request("/paint", {
        method: "POST",
        body: o,
        headers: i,
        credentials: "include"
      });
    if (a.status === c.OK) {
      const s = await a.json().catch(() => ({}));
      return {
        worldCupQuestCompleted: !!(s != null && s.worldCupQuestCompleted)
      }
    }
    if (a.status !== c.OK) {
      if (a.status === c.UNAUTHORIZED) throw new Error(rr());
      if (a.status === c.FORBIDDEN) {
        if (a.headers.get("cf-mitigated") === "challenge") throw new Error(Yn());
        const s = await a.json();
        if ((s == null ? void 0 : s.error) === "timeout") {
          const u = new Date(Date.now() + ((s == null ? void 0 : s.durationMs) ?? 0));
          throw new Error(or({
            until: u.toLocaleString()
          }))
        }
        if ((s == null ? void 0 : s.error) === "refresh") throw new Error(Qn());
        if ((s == null ? void 0 : s.error) === "color-not-owned") throw new Error(Zn());
        if ((s == null ? void 0 : s.error) === "event-pixel-present") throw new Error($n());
        if ((s == null ? void 0 : s.error) === "challenge-required")
          if (s.tier) {
            if (await Vn(s.tier)) return this.paint(t);
            throw new Error(Ut())
          } else console.error("Challenge required but no tier provided", s);
        if ((s == null ? void 0 : s.error) === "verification-required") {
          const l = (await kc().get()).sealed_result;
          if (l) return await this.verifyAnticheat(l), this.paint(t);
          throw new Error(f())
        }
        ye.refresh()
      } else throw new Error(f())
    }
    return {
      worldCupQuestCompleted: !1
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
    if (e.status !== c.OK) throw new m(f(), e.status);
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
    if (a.status !== c.OK) throw new m(f(), a.status);
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
    if (a.status !== c.OK) throw new m(f(), a.status);
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
    if (r.status === c.BAD_REQUEST) {
      const o = await r.json(),
        i = (o == null ? void 0 : o.error) ?? "";
      throw i === "timelapse_too_many_events" ? new m(x0(), c.BAD_REQUEST) : new m(typeof i == "string" && i ? i : f(), c.BAD_REQUEST)
    }
    if (r.status !== c.OK) throw new m(f(), r.status);
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
    if (a.status !== c.OK) throw new m(f(), a.status);
    return a.json()
  }
  async sendPaintRequests(t, e, r, o) {
    const i = ar(t, u => `t=(${u.tile[0]},${u.tile[1]}),s=${u.season}`),
      s = (await Promise.all(Object.values(i).map(async u => {
        const [l, _] = u[0].tile, d = u[0].season, y = {
          colors: u.map(E => E.colorIdx),
          coords: u.flatMap(E => E.pixel),
          csid: r
        }, p = JSON.stringify(y), h = e(d, l, _), v = await Pe.getHeaders(p);
        return this.request(h, {
          method: "POST",
          body: p,
          headers: v,
          credentials: "include"
        })
      }))).filter(u => u.status !== c.OK);
    if (s.length) {
      const u = s[0];
      if (u.status === c.UNAUTHORIZED) throw new Error(rr());
      if (u.status === c.FORBIDDEN) {
        if (u.headers.get("cf-mitigated") === "challenge") throw new Error(Yn());
        const l = await u.json();
        if ((l == null ? void 0 : l.error) === "timeout") {
          const _ = new Date(Date.now() + ((l == null ? void 0 : l.durationMs) ?? 0));
          throw new Error(or({
            until: _.toLocaleString()
          }))
        }
        if ((l == null ? void 0 : l.error) === "refresh") throw new Error(Qn());
        if ((l == null ? void 0 : l.error) === "color-not-owned") throw new Error(Zn());
        if ((l == null ? void 0 : l.error) === "event-pixel-present") throw new Error($n());
        ye.refresh()
      } else throw new Error(f())
    }
  }
  async adminAutoPainterPaint(t, e, r) {
    const o = lR(t),
      i = await dR(o),
      a = new FormData;
    a.append("fingerprint", e), a.append("season", o.season.toString()), a.append("px0", o.offsetX.toString()), a.append("py0", o.offsetY.toString()), a.append("width", o.width.toString()), a.append("height", o.height.toString()), a.append("pixels", t.length.toString()), a.append("bitmap", i, "auto-painter.png"), a.append("userId", r.toString());
    const s = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: a,
      credentials: "include"
    });
    if (s.status === c.FORBIDDEN) {
      const u = await s.json().catch(() => null);
      if (typeof(u == null ? void 0 : u.charges) == "number") throw new Error(_T({
        charges: Math.floor(u.charges),
        pixels: t.length
      }));
      const l = typeof(u == null ? void 0 : u.error) == "string" ? u.error.trim() : "";
      throw l && l !== "Forbidden" ? new Error(l) : new Error("Auto painter is restricted to administrators.")
    }
    if (s.status !== c.OK) throw new Error(f());
    return s.json()
  }
  async getPixelInfo({
    season: t,
    tile: [e, r],
    pixel: [o, i]
  }) {
    const a = new URLSearchParams;
    a.set("x", String(o)), a.set("y", String(i));
    const s = await this.request(`/s${t}/pixel/${e}/${r}?${a.toString()}`, {
      credentials: "include"
    });
    if (s.status !== c.OK) {
      const u = await s.text();
      throw new Error(vf({
        err: u
      }))
    }
    return s.json()
  }
  async getPixelAreaInfo({
    season: t,
    tile: [e, r],
    p0: [o, i],
    p1: [a, s]
  }) {
    const u = await this.request(`/staff/tools/select-area/s${t}/${e}/${r}?x0=${o}&y0=${i}&x1=${a}&y1=${s}`, {
      credentials: "include"
    });
    if (u.status !== c.OK) {
      const h = await u.text();
      throw console.error("Error while fetching pixel area info", h), new Error(f())
    }
    const l = await u.arrayBuffer(),
      _ = new DataView(l),
      d = Math.floor(l.byteLength / 5),
      y = new Uint32Array(d),
      p = new Uint8Array(d);
    for (let h = 0; h < d; h++) {
      const v = h * 5;
      y[h] = _.getUint32(v, !0), p[h] = _.getUint8(v + 4)
    }
    return {
      paintedBy: y,
      colors: p
    }
  }
  async me() {
    const t = await this.request("/me", {
      credentials: "include"
    });
    if (t.status === c.OK) return await t.json()
  }
  async meEmail() {
    const t = await this.request("/me/email", {
      credentials: "include"
    });
    if (t.status === c.OK) return (await t.json()).email
  }
  async exchangeForCupCoins(t) {
    return (await this.request("/world-cup/coins/exchange", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        batches: t
      }),
      throwOnStatus: !1
    })).status === c.OK
  }
  async getOwnedWorldCupItems() {
    const t = await this.request("/world-cup/items/owned", {
      credentials: "include",
      throwOnStatus: !1
    });
    return t.status !== c.OK ? {
      owned: [],
      cupQuestDoneToday: !1,
      cupCoins: 0
    } : t.json()
  }
  async buyWorldCupItem(t, e) {
    return (await this.request(`/world-cup/store/buy/${t}`, {
      method: "POST",
      credentials: "include",
      body: e ? JSON.stringify({
        country: e
      }) : void 0,
      throwOnStatus: !1
    })).status === c.OK
  }
  async getWorldCupPredictions() {
    const t = await this.request("/world-cup/predictions", {
      credentials: "omit",
      throwOnStatus: !1
    });
    return t.status !== c.OK ? [] : (await t.json()).predictions ?? []
  }
  async getMyWorldCupPredictions() {
    const t = await this.request("/world-cup/predictions/mine", {
      credentials: "include",
      throwOnStatus: !1
    });
    return t.status !== c.OK ? [] : (await t.json()).predictions ?? []
  }
  async postWorldCupPrediction(t, e) {
    const r = await this.request("/world-cup/predictions", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        matchId: t,
        pick: e
      }),
      throwOnStatus: !1
    });
    return r.status !== c.OK ? {
      status: r.status
    } : {
      status: r.status,
      result: await r.json()
    }
  }
  async logout() {
    const t = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new Error(await t.text());
    return await t.json()
  }
  async driveStatus() {
    const t = await this.request("/drive/status", {
      credentials: "include"
    });
    return t.status !== c.OK ? !1 : !!(await t.json()).connected
  }
  async driveConnect(t) {
    const e = await this.request("/drive/connect", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        code: t
      })
    });
    if (e.status !== c.OK) throw new Error(`drive connect failed: ${e.status}`);
    return e.json()
  }
  async driveToken() {
    const t = await this.request("/drive/token", {
      credentials: "include",
      throwOnStatus: !1
    });
    if (t.status === c.CONFLICT) return null;
    if (t.status !== c.OK) throw new Error(`drive token failed: ${t.status}`);
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
    if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(Hn());
    if (e.status !== c.OK) throw new Error(await e.text());
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
    if (t.status === c.NOT_FOUND) return null;
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
    if (t.status !== c.OK) throw new Error(f());
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
    if (e.status === c.BAD_REQUEST) throw new Error(Pb());
    if (e.status === c.CONFLICT) throw new Error(CT());
    if (e.status === c.FORBIDDEN) throw new Error(FE());
    if (e.status === c.TOO_MANY_REQUESTS) throw new Error(er());
    if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(YT());
    if (e.status === c.LOCKED) throw new Error(nk());
    if (e.status === c.UNPROCESSABLE_ENTITY) throw new Error(Vb());
    if (e.status === c.NOT_ACCEPTABLE) throw new Error(mk());
    if (e.status === c.PRECONDITION_FAILED) throw new Error(jd());
    if (e.status !== c.OK) throw new Error(f());
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
        "x-fp": await Zt()
      }
    });
    if (t.type === "otp") {
      if (r.status === c.GONE) throw new Error(Hf());
      if (r.status === c.BAD_REQUEST) throw new Error($y());
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(er());
      if (r.status !== c.OK) throw new Error(f())
    } else {
      if (r.status === c.BAD_REQUEST) throw new Error(zy());
      if (r.status !== c.OK) throw new Error(f())
    }
  }
  async verifyAnticheat(t) {
    if ((await this.request("/anticheat/verify", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          sealedResults: t.base64()
        })
      })).status !== c.OK) throw new Error(f())
  }
  async updateMe(t) {
    const e = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === c.BAD_REQUEST) {
      const r = await e.json(),
        o = (r == null ? void 0 : r.error) ?? "";
      if (o === "invalid_name") throw new Error(Jn());
      if (o === "invalid_discord") throw new Error(sb());
      if (typeof o == "string" && o.startsWith("name_change_cooldown:")) {
        const i = parseInt(o.split(":")[1] ?? "0", 10);
        throw new Error(pE({
          days: i
        }))
      }
      throw new Error(r == null ? void 0 : r.error)
    } else if (e.status !== c.OK) throw new Error(f())
  }
  async deleteMe(t) {
    const e = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: t
      })
    });
    if (e.status === c.BAD_REQUEST) throw new Error(DO());
    if (e.status !== c.OK) throw new Error(f())
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
    if (e.status === c.FORBIDDEN) throw new Error(QE());
    if (e.status !== c.OK) throw new Error(f())
  }
  async deleteFavoriteLocation(t) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: t
        }),
        credentials: "include"
      })).status !== c.OK) throw new Error(f())
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
    if (r.status === c.BAD_REQUEST) throw new Error(Iv());
    if (r.status !== c.OK) throw new Error(f())
  }
  async leaderboardPlayers(t) {
    const e = await this.request(`/leaderboard/player/${t}`);
    if (e.status !== c.OK) throw new Error(me());
    return e.json()
  }
  async leaderboardAlliances(t) {
    const e = await this.request(`/leaderboard/alliance/${t}`);
    if (e.status !== c.OK) throw new Error(me());
    return e.json()
  }
  async leaderboardRegions(t, e = 0) {
    const r = await this.request(`/leaderboard/region/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(me())
  }
  async leaderboardRegionPlayers(t, e) {
    const r = await this.request(`/leaderboard/region/players/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(me())
  }
  async leaderboardRegionAlliances(t, e) {
    const r = await this.request(`/leaderboard/region/alliances/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(me())
  }
  async leaderboardCountries(t) {
    const e = await this.request(`/leaderboard/country/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw new Error(me())
  }
  refreshHotspotsIfStale() {
    Date.now() - this.lastHotspotRequestAt < cR || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
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
    if (e.status !== c.OK) throw new Error(f());
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
    if (e.status !== c.OK) throw e.status === c.NOT_FOUND ? new Error(Xn()) : e.status === c.FORBIDDEN ? new Error(nr()) : e.status === c.CONFLICT ? new Error(tr()) : new Error(f())
  }
  async getAlliance() {
    const t = await this.request("/alliance", {
      credentials: "include"
    });
    if (t.status === c.OK) return t.json();
    if (t.status === c.NOT_FOUND) return;
    throw new Error(f())
  }
  async createAlliance(t) {
    const e = await this.request("/alliance", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: t
      })
    });
    if (e.status === c.OK) return e.json();
    if (e.status === c.BAD_REQUEST) {
      const r = await e.json();
      throw r.error === "max_characters" ? new Error(yu()) : r.error === "name_taken" ? new Error(au()) : r.error == "empty_name" ? new Error(Pu()) : new Error(f())
    } else throw e.status === c.FORBIDDEN ? new Error(Qk()) : new Error(f())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== c.OK) throw new Error(f())
  }
  async updateAllianceDescription(t) {
    const e = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: t
      })
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(he()) : e.status === c.BAD_REQUEST ? new Error(xf()) : new Error(f())
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
    if (r.status !== c.OK) throw r.status === c.FORBIDDEN ? new Error(he()) : new Error(f())
  }
  async allianceLeaderboard(t) {
    const e = await this.request(`/alliance/leaderboard/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw e.status === c.FORBIDDEN ? new Error(he()) : new Error(me())
  }
  async getAllianceInvites() {
    const t = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (t.status === c.OK) return t.json();
    throw t.status === c.FORBIDDEN ? new Error(he()) : new Error(f())
  }
  async joinAlliance(t) {
    switch ((await this.request(`/alliance/join/${t}`, {
        credentials: "include"
      })).status) {
      case c.OK:
        return "success";
      case c.ALREADY_REPORTED:
        return "in-another-alliance";
      case c.UNAUTHORIZED:
        return "not-logged-in";
      case c.FORBIDDEN:
        return "banned";
      case c.BAD_REQUEST:
      case c.NOT_FOUND:
        return "invalid-invite";
      default:
        return "error"
    }
  }
  async getAllianceMembers(t) {
    const e = await this.request(`/alliance/members/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw new Error(f())
  }
  async getAllianceBannedMembers(t) {
    const e = await this.request(`/alliance/members/banned/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw new Error(f())
  }
  async getAllianceById(t) {
    const e = await this.request(`/staff/dashboard/alliances/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === c.NOT_FOUND) return;
    if (e.status !== c.OK) throw new m(f(), e.status);
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
    if (r.status !== c.OK) throw new m(f(), r.status);
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
    if (e.status === c.NOT_FOUND) return null;
    if (e.status !== c.OK) throw new m(f(), e.status);
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
    if (o.status === c.NOT_FOUND) return {
      members: [],
      total: 0
    };
    if (o.status !== c.OK) throw new m(f(), o.status);
    const i = await o.json(),
      a = Array.isArray(i == null ? void 0 : i.members) ? i.members : [];
    return {
      members: a.map(s => ({
        id: Number(s == null ? void 0 : s.id),
        name: String((s == null ? void 0 : s.name) ?? `#${s==null?void 0:s.id}`),
        picture: (s == null ? void 0 : s.picture) ?? null,
        pixelsPainted: Number((s == null ? void 0 : s.pixelsPainted) ?? (s == null ? void 0 : s.pixels_painted) ?? 0),
        lastPixelLatitude: (s == null ? void 0 : s.lastPixelLatitude) ?? null,
        lastPixelLongitude: (s == null ? void 0 : s.lastPixelLongitude) ?? null,
        role: (s == null ? void 0 : s.alliance_role) === "admin" || (s == null ? void 0 : s.role) === "admin" ? "admin" : "member"
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
    if (r.status === c.BAD_REQUEST) {
      const o = await r.json().catch(() => ({}));
      throw new Error((o == null ? void 0 : o.error) ?? f())
    } else if (r.status !== c.OK) throw new m(f(), r.status)
  }
  async changeAllianceLeader(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/leader`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        newLeaderUserId: e
      })
    });
    if (r.status === c.BAD_REQUEST) {
      const o = await r.json();
      throw (o == null ? void 0 : o.error) === "user_not_in_alliance" ? new Error(ov()) : new Error(f())
    } else if (r.status !== c.OK) throw new m(f(), r.status)
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
    if (o.status !== c.OK) throw new m(f(), o.status)
  }
  async setAllianceMemberRole(t, e, r) {
    const o = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: r
      })
    });
    if (o.status !== c.OK) throw new m(f(), o.status)
  }
  async removeAllianceMember(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new m(f(), r.status)
  }
  async giveAllianceAdmin(t) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(he()) : new Error(f())
  }
  async banAllianceUser(t) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(he()) : new Error(f())
  }
  async equipFlag(t) {
    if ((await this.request(`/flag/equip/${t}`, {
        method: "POST",
        credentials: "include"
      })).status !== c.OK) throw new Error(f())
  }
  async getMyProfilePictures() {
    const t = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (t.status !== c.OK) throw new Error(f());
    return t.json()
  }
  async changeProfilePicture(t) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: t
        })
      })).status !== c.OK) throw new Error(f())
  }
  async unbanAllianceUser(t) {
    const e = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(he()) : new Error(f())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async getPlayAccountId() {
    const t = await this.request("/payment/play/account-id", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new Error(f());
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
    if (e.status === c.BAD_REQUEST) {
      const r = await e.json().catch(() => ({}));
      throw new Error((r == null ? void 0 : r.error) ?? "Invalid Play purchase")
    }
    if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(Hn());
    if (e.status !== c.OK) throw new Error(f());
    return e.json()
  }
  async verifyPendingPlayPurchases() {
    const t = await this.request("/payment/play/verify-pending", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new Error(f());
    return t.json()
  }
  async getPlayClaimStatus(t) {
    const e = await this.request(`/payment/play/claim/${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === c.NOT_FOUND) return {
      status: "unknown",
      droplets: 0
    };
    if (e.status !== c.OK) throw new Error(f());
    return e.json()
  }
  async listPlayPurchaseHistory() {
    const t = await this.request("/payment/play/history", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new Error(f());
    return t.json()
  }
  async getModeratorTickets() {
    const t = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
    const e = await t.json();
    for (const r of e.tickets) r.reports.sort((o, i) => ir[o.reason] - ir[i.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const t = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
    return t.json()
  }
  async getOpenTicketsCount() {
    const t = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
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
    if (t.status !== c.OK) throw new m(f(), t.status);
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
    if (a.status !== c.OK && a.status !== c.BAD_REQUEST) throw new m(f(), a.status)
  }
  async getLastResolvedTicket() {
    const t = await this.request("/staff/tickets/reversals/last-resolved", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
    return (await t.json()).ticket
  }
  async getTicketReversalTicketInfo(t) {
    const e = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status);
    return (await e.json()).ticket
  }
  async createTicketReversal(t) {
    const e = await this.request("/staff/tickets/reversals", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === c.CONFLICT) {
      const r = await e.json().catch(() => ({}));
      throw (r == null ? void 0 : r.error) === "reversal_already_pending" ? new m(yA(), c.CONFLICT) : new m(f(), c.CONFLICT)
    }
    if (e.status !== c.OK) throw new m(f(), e.status);
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
    if (o.status !== c.OK) throw new m(f(), o.status);
    return (await o.json()).reversals ?? []
  }
  async getTicketReversal(t) {
    const e = await this.request(`/staff/tickets/reversals/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status);
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
    if (o.status === c.FORBIDDEN) throw new m(PA(), c.FORBIDDEN);
    if (o.status === c.CONFLICT) throw new m(VA(), c.CONFLICT);
    if (o.status !== c.OK) throw new m(f(), o.status)
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
    } catch (s) {
      throw console.error("Fetch error:", s), this.online = !1, new Error(td(), {
        cause: s
      })
    }
    if (r.status === c.FORBIDDEN && r.headers.get("x-block-reason") === "tor") throw new Error(wO());
    const o = ((a = r.headers.get("cf-mitigated")) == null ? void 0 : a.toLowerCase()) === "challenge";
    if (r.status === 403 && o) {
      if (Pe.setCfLikelyAutomated(!0), !await Dr()) throw new Error(Ut());
      r = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error($S());
      if (r.status === c.REQUEST_TIMEOUT) throw new Error(v0());
      if (r.status === c.SERVICE_UNAVAILABLE) throw new Error(H0())
    }
    return r
  }
  async getOpenTicketsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
    return t.json()
  }
  async getOpenReportsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
    return t.json()
  }
  async getBanAppealStats(t, e) {
    const r = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new m(f(), r.status);
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
    if (r.status !== c.OK) throw new m(f(), r.status);
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
    if (r.status !== c.OK) throw new m(f(), r.status);
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
    if (e.status !== c.OK) throw new m(f(), e.status);
    return e.json()
  }
  async getUserInfoFull(t) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.NOT_FOUND) {
      if (e.status !== c.OK) throw new m(f(), e.status);
      return e.json()
    }
  }
  async getUsersReportInfo(t) {
    const e = t.filter(o => Number.isFinite(o) && o > 0);
    if (e.length === 0) return [];
    const r = await this.request(`/staff/dashboard/users/info-batch?ids=${encodeURIComponent(e.join(","))}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new m(f(), r.status);
    return r.json()
  }
  async getUserInfoByEmail(t) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.NOT_FOUND) {
      if (e.status !== c.OK) throw new m(f(), e.status);
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
    if (o.status !== c.OK) throw new m(f(), o.status)
  }
  async getUserPunishments(t) {
    const e = await this.request(`/staff/dashboard/users/punishments?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status);
    return (await e.json()).punishments ?? []
  }
  async getUserAnticheat(t) {
    const e = await this.request(`/staff/dashboard/users/anticheat?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status);
    return await e.json()
  }
  async getPunishmentTicket(t) {
    const e = await this.request(`/staff/dashboard/users/punishment-ticket?ticketId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status);
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
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async getUserNotes(t, e) {
    const r = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      o = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (o.status !== c.OK) throw new m(f(), o.status);
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
    if (i.status !== c.OK) throw new m(f(), i.status)
  }
  async getUserPermissions(t) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status);
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
    if (r.status !== c.OK) throw new m(f(), r.status);
    const o = await r.json();
    return Array.isArray(o == null ? void 0 : o.permissions) ? o.permissions : []
  }
  async getUserPurchases(t) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status);
    const r = await e.json();
    return (Array.isArray(r == null ? void 0 : r.purchases) ? r.purchases : []).map(i => {
      const a = i.is_dollar ?? i.isDollar ?? i.currency ?? i.Currency ?? 0;
      let s;
      if (typeof a == "string") {
        const d = a.toLowerCase();
        s = d === "usd" || d === "dollar" || d === "true"
      } else typeof a == "number" ? s = a !== 0 : s = !!a;
      const u = typeof i.createdAt == "string" ? i.createdAt : i.CreatedAt ? new Date(i.CreatedAt).toISOString() : "",
        l = i.product_variant ?? i.productVariant,
        _ = l == null || l === "" ? null : Number(l);
      return {
        product_name: String(i.productName ?? i.product_name ?? ""),
        amount: Number(i.amount ?? 0),
        price: Number(i.price ?? 0),
        is_dollar: s,
        created_at: u,
        product_variant: Number.isInteger(_) ? _ : null
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
    if (r.status !== c.OK) throw new m(f(), r.status)
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
    if (o.status === c.BAD_REQUEST) {
      const i = await o.json(),
        a = (i == null ? void 0 : i.error) ?? "";
      throw a === "invalid_name" ? new m(Jn(), c.BAD_REQUEST) : new m(typeof a == "string" && a ? a : f(), c.BAD_REQUEST)
    }
    if (o.status !== c.OK) throw new m(f(), o.status)
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
    if (r.status === c.BAD_REQUEST) {
      const o = await r.json(),
        i = (o == null ? void 0 : o.error) ?? "";
      throw i === "email_required" || i === "invalid_email" ? new m(cf(), c.BAD_REQUEST) : new m(typeof i == "string" && i ? i : f(), c.BAD_REQUEST)
    }
    if (r.status === c.CONFLICT) {
      const o = await r.json();
      if (((o == null ? void 0 : o.error) ?? "") === "email_already_in_use") {
        const a = new m(typeof(o == null ? void 0 : o.userId) == "number" ? $_({
          userId: o.userId
        }) : z_(), c.CONFLICT);
        throw typeof(o == null ? void 0 : o.userId) == "number" && (a.userId = o.userId), a
      }
      throw new m(f(), c.CONFLICT)
    }
    if (r.status === c.NOT_FOUND) throw new m("User not found.", c.NOT_FOUND);
    if (r.status !== c.OK) throw new m(f(), r.status)
  }
  async getAdminUserProfilePictures(t) {
    const e = await this.request(`/staff/dashboard/users/profile-pictures?userId=${t}`, {
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status);
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
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async postAdminRerollUserAvatar(t) {
    const e = await this.request("/staff/dashboard/users/reroll-avatar", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t
      })
    });
    if (e.status !== c.OK) throw new m(f(), e.status);
    return e.json()
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
    if (i.status !== c.OK) throw new m(f(), i.status);
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
    if (r.status !== c.OK) throw new m(f(), r.status);
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
    if (o.status !== c.OK) throw new m(f(), o.status);
    const i = await o.json();
    return i == null ? void 0 : i.translation
  }
  mapTicketsToReportRows(t, e) {
    var o, i, a, s, u;
    const r = [];
    for (const l of t) {
      const _ = l.status ?? "open";
      if (e === "received") {
        for (const d of l.reports) r.push({
          id: String(d.id),
          ticketId: String(l.id),
          createdAt: d.createdAt ?? l.createdAt,
          byUser: {
            id: Number(d.reportedBy),
            name: String(d.reportedByName ?? d.reportedBy),
            picture: d.reportedByPicture ?? null
          },
          reason: String(d.reason),
          status: _
        });
        continue
      }
      if (e === "sent") {
        for (const d of l.reports) r.push({
          id: String(d.id),
          ticketId: String(l.id),
          createdAt: d.createdAt ?? l.createdAt,
          toUser: {
            id: Number(l.reportedUser.id),
            name: String(l.reportedUser.name),
            picture: l.reportedUser.picture ?? null
          },
          reason: String(d.reason),
          status: _
        });
        continue
      }
      r.push({
        id: String(l.id),
        ticketId: String(l.id),
        createdAt: l.createdAt,
        handledBy: l.status && l.status !== "open" ? {
          id: ((o = l.handledBy) == null ? void 0 : o.id) ?? 0,
          name: ((i = l.handledBy) == null ? void 0 : i.name) ?? "Moderator",
          picture: ((a = l.handledBy) == null ? void 0 : a.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((u = (s = l.reports) == null ? void 0 : s[0]) == null ? void 0 : u.reason) ?? "other"),
        status: _
      })
    }
    return r.sort((l, _) => new Date(_.createdAt).getTime() - new Date(l.createdAt).getTime()), r
  }
  async getModeratorClosedTicketStats(t) {
    const e = new URLSearchParams({
        id: String(t)
      }).toString(),
      r = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== c.OK) throw new m(f(), r.status);
    return r.json()
  }
  async unlinkDiscord() {
    const t = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== c.NO_CONTENT) throw new m(f(), t.status)
  }
  async deleteSessions() {
    const t = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status)
  }
  async deleteAllUserSessions(t) {
    const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status)
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
    if (o.status !== c.OK) throw new m(f(), o.status)
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
    if (o.status !== c.OK) throw new m(f(), o.status)
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
    if (o.status !== c.OK) throw new m(f(), o.status)
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
    if (r.status !== c.OK) throw new m(f(), r.status)
  }
  async postAnticheatUnbanUsers(t, e) {
    const r = await this.request("/staff/dashboard/anticheat/unban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        notes: e
      })
    });
    if (r.status !== c.OK) throw new m(f(), r.status)
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
    if (r.status !== c.OK) throw new m(f(), r.status);
    return await r.json()
  }
  async getAuditLogs(t) {
    const e = new URLSearchParams;
    t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
    const r = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new m(f(), r.status);
    return r.json()
  }
  async postUsersSuspend(t, e, r) {
    let o;
    switch (e) {
      case "dashboard":
        o = `/staff/dashboard/users/${r}`;
        break;
      case "summary":
        o = `/staff/dashboard/summary/users/${r}`;
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
      })).status !== c.OK) throw new Error(f())
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
    if (r.status !== c.OK) throw new m(f(), r.status);
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
    if (r.status !== c.OK) throw new m(f(), r.status);
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
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async postReportAllianceName(t) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: t
      })
    });
    if (e.status !== c.OK) throw new m(f(), e.status);
    return e.json()
  }
  async submitBanAppeal(t, e) {
    const r = JSON.stringify(e ? {
        message: t,
        ticketId: e
      } : {
        message: t
      }),
      o = await Pe.getHeaders(r),
      i = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: r,
        headers: o
      });
    if (i.status === c.FORBIDDEN) {
      const a = await i.json();
      if ((a == null ? void 0 : a.error) === "challenge-required" && a.tier) {
        if (await Vn(a.tier)) return this.submitBanAppeal(t, e);
        throw new m(Ut(), i.status)
      }
    }
    if (i.status !== c.OK && i.status !== c.ALREADY_REPORTED) throw new m(f(), i.status);
    return i.status
  }
  async getOpenAppeals() {
    const t = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
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
    if (r.status !== c.OK) throw new m(f(), r.status);
    return await r.json()
  }
  async getUserLastAppeal() {
    const t = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async getMySuspensionDetails() {
    const t = await this.request("/me/suspension", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
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
    if (t.status !== c.OK) throw new m(f(), t.status);
    return await t.json()
  }
  async getNotificationCount() {
    const t = await this.request("/notification/count", {
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
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
    if (o.status !== c.OK) throw new m(f(), o.status);
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
    if (e.status !== c.OK) throw new m(f(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const t = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
    return t.json()
  }
  async getAnticheatStats(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/stats?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new m(f(), r.status);
    return r.json()
  }
  async getAnticheatSignals(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/signals?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new m(f(), r.status);
    return r.json()
  }
  async getAnticheatUserJourney(t, e, r) {
    const o = await this.request(`/staff/dashboard/anticheat/user/${t}?from=${e}&to=${r}`, {
      method: "GET",
      credentials: "include"
    });
    if (o.status !== c.OK) throw new m(f(), o.status);
    return o.json()
  }
  async getAnticheatSignalAnalysis(t, e, r) {
    const o = await this.request(`/staff/dashboard/anticheat/signal/${encodeURIComponent(t)}?from=${encodeURIComponent(e)}&to=${encodeURIComponent(r)}`, {
      method: "GET",
      credentials: "include"
    });
    if (o.status !== c.OK) throw new m(f(), o.status);
    return o.json()
  }
  async getPendingAppealsCount() {
    const t = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async getUserPixelsPaintedToday() {
    const t = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const t = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
    return t.json()
  }
  async postEquipUserFrame(t) {
    const e = await this.request(`/me/frames/equip/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async getUserBadges() {
    const t = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
    return t.json()
  }
  async postEquipUserBadge(t) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async postCaptchaSession(t, e = "include") {
    const r = await this.request("/anticheat/captcha/session", {
      method: "POST",
      credentials: e,
      body: JSON.stringify(t),
      headers: {
        "x-fp": await Zt()
      }
    });
    if (!r.ok) throw r.status === 500 ? new m(f(), r.status) : new m(Ey(), r.status);
    return r.json()
  }
  validWaybackInput(t) {
    const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < oR.length,
      o = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= iR.tools.wayback.limit,
      i = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
      a = t.cursorTs !== void 0,
      s = t.cursorUserId !== void 0,
      u = t.cursorAllianceId !== void 0,
      l = t.cursorPixelsCount !== void 0,
      _ = a || s || u || l,
      d = a && s && u && l;
    let y = !0;
    return _ && (y = d && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!r || !o || !i || !e || !y)
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
    if (i.status === c.FORBIDDEN) throw new Error("Access denied");
    if (i.status !== c.OK) throw new Error("Failed to fetch wayback events");
    return i.json()
  }
  async getStoreFrames() {
    const t = await this.request("/store/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
    return t.json()
  }
  async postBuyUserFrame(t) {
    const e = await this.request(`/store/frames/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === c.NOT_FOUND) throw new Error(Xn());
    if (e.status === c.FORBIDDEN) throw new Error(nr());
    if (e.status === c.CONFLICT) throw new Error(tr());
    if (e.status !== c.OK) throw new Error(f())
  }
  async postEquipCosmetics(t) {
    const e = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async getStoreNameCosmetics() {
    const t = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
    return await t.json()
  }
  async postBuyCosmetic(t) {
    const e = await this.request(`/store/name/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async getMyNameCosmetics() {
    const t = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new m(f(), t.status);
    return await t.json()
  }
  async getTicketsKpi(t) {
    const e = new URLSearchParams;
    e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
    const r = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new m(f(), r.status);
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
    if (r.status !== c.OK) throw new m(f(), r.status)
  }
  async postCreateFont(t) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async postCreateStyle(t) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new m(f(), e.status)
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
    if (r.status !== c.OK) throw new m(f(), r.status);
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
    if (r.status !== c.OK) throw new m(f(), r.status);
    return r.json()
  }
  async deleteR2Image(t) {
    const e = await this.request(`/staff/store-manager/images/${t}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async markRulesAsRead() {
    return (await this.request("/me/rules/read", {
      method: "POST",
      credentials: "include"
    })).status === c.OK
  }
}
Xe = new WeakMap, Ye = new WeakMap;

function lR(n) {
  var y, p;
  if (!n.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = n[0].season;
  for (const h of n)
    if (h.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (y = St.seasons) == null ? void 0 : y[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const r = e.tileSize;
  let o = Number.POSITIVE_INFINITY,
    i = Number.POSITIVE_INFINITY,
    a = Number.NEGATIVE_INFINITY,
    s = Number.NEGATIVE_INFINITY;
  const u = n.map(h => {
      const v = Math.round(h.tile[0] * r + h.pixel[0]),
        E = Math.round(h.tile[1] * r + h.pixel[1]);
      return v < o && (o = v), E < i && (i = E), v > a && (a = v), E > s && (s = E), {
        x: v,
        y: E,
        colorIdx: h.colorIdx
      }
    }),
    l = a - o + 1,
    _ = s - i + 1;
  if (!Number.isFinite(l) || !Number.isFinite(_) || l <= 0 || _ <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const d = new Uint8ClampedArray(l * _ * 4);
  for (const {
      x: h,
      y: v,
      colorIdx: E
    }
    of u) {
    const D = (p = St.colors) == null ? void 0 : p[E];
    if (!D) throw new Error(`Unknown palette color index: ${E}`);
    const b = h - o,
      A = ((v - i) * l + b) * 4,
      [P, C, S] = D.rgb;
    d[A] = P, d[A + 1] = C, d[A + 2] = S, d[A + 3] = E === 0 ? 1 : 255
  }
  return {
    data: d,
    width: l,
    height: _,
    offsetX: o,
    offsetY: i,
    season: t
  }
}
async function dR(n) {
  const t = _R(n.width, n.height),
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

function _R(n, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = n, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let fe = new uR(rn);
typeof window < "u" && Gr(() => {
  let n = fe.online;
  qr(() => {
    const t = fe.online;
    t && !n && window.dispatchEvent(new CustomEvent("wplace:online")), n = t
  })
});
const gI = n => new URL(n, rn).toString();

function zr(n, t) {
  if (!(n != null && n.length)) return !1;
  for (const e of n)
    if (e === t) return !0;
  return !1
}

function fR(n, t) {
  for (const e of t)
    if (zr(n, e)) return !0;
  return !1
}

function Mr(n) {
  const t = atob(n),
    e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
  return e
}

function pR(n) {
  if (typeof Buffer < "u") return Buffer.from(n).toString("base64");
  let t = "";
  for (let e = 0; e < n.length; e++) t += String.fromCharCode(n[e]);
  return btoa(t)
}
class mR {
  constructor(t) {
    L(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const r = Math.floor(t / 8),
      o = t % 8;
    if (r >= this.bytes.length) {
      const a = new Uint8Array(r + 1),
        s = a.length - this.bytes.length;
      for (let u = 0; u < this.bytes.length; u++) a[u + s] = this.bytes[u];
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

function wI(n) {
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

function yI(n) {
  if (typeof FileReader > "u") {
    const t = n.type || "application/octet-stream";
    return n.arrayBuffer().then(e => `data:${t};base64,${pR(new Uint8Array(e))}`)
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

function bI(n) {
  if (!n.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = n.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = n.slice(5, t),
    r = n.slice(t + 1),
    o = e.indexOf(";base64"),
    i = (o === -1 ? e : e.slice(0, o)) || "text/plain";
  if (o !== -1) {
    const a = Mr(r),
      s = new Uint8Array(a.byteLength);
    return s.set(a), new Blob([s], {
      type: i
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: i
  })
}

function vI(...n) {
  return n.filter(Boolean).join(" ")
}
const hR = typeof document < "u";
let sr = 0;
var Je, Ze, Qe;
class gR {
  constructor() {
    j(this, Je, V(vt([])));
    j(this, Ze, V(vt([])));
    j(this, Qe, t => {
      const e = this.toasts.findIndex(r => r.id === t);
      return e === -1 ? null : e
    });
    L(this, "addToast", t => {
      hR && this.toasts.unshift(t)
    });
    L(this, "updateToast", ({
      id: t,
      data: e,
      type: r,
      message: o
    }) => {
      const i = this.toasts.findIndex(s => s.id === t),
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
    L(this, "create", t => {
      var s;
      const {
        message: e,
        ...r
      } = t, o = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((s = t.id) == null ? void 0 : s.length) > 0 ? t.id : sr++, i = t.dismissable === void 0 ? !0 : t.dismissable, a = t.type === void 0 ? "default" : t.type;
      return dn(() => {
        this.toasts.find(l => l.id === o) ? this.updateToast({
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
    L(this, "dismiss", t => (dn(() => {
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
    L(this, "remove", t => {
      if (t === void 0) {
        this.toasts = [];
        return
      }
      const e = T(this, Qe).call(this, t);
      if (e !== null) return this.toasts.splice(e, 1), t
    });
    L(this, "message", (t, e) => this.create({
      ...e,
      type: "default",
      message: t
    }));
    L(this, "error", (t, e) => this.create({
      ...e,
      type: "error",
      message: t
    }));
    L(this, "success", (t, e) => this.create({
      ...e,
      type: "success",
      message: t
    }));
    L(this, "info", (t, e) => this.create({
      ...e,
      type: "info",
      message: t
    }));
    L(this, "warning", (t, e) => this.create({
      ...e,
      type: "warning",
      message: t
    }));
    L(this, "loading", (t, e) => this.create({
      ...e,
      type: "loading",
      message: t
    }));
    L(this, "promise", (t, e) => {
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
          const s = wR(a);
          this.create({
            id: r,
            type: "error",
            message: s
          })
        } else if (e.success !== void 0) {
          i = !1;
          const s = typeof e.success == "function" ? e.success(a) : e.success;
          this.create({
            id: r,
            type: "success",
            message: s
          })
        }
      }).catch(a => {
        if (e.error !== void 0) {
          i = !1;
          const s = typeof e.error == "function" ? e.error(a) : e.error;
          this.create({
            id: r,
            type: "error",
            message: s
          })
        }
      }).finally(() => {
        var a;
        i && (this.dismiss(r), r = void 0), (a = e.finally) == null || a.call(e)
      }), r
    });
    L(this, "custom", (t, e) => {
      const r = (e == null ? void 0 : e.id) || sr++;
      return this.create({
        component: t,
        id: r,
        ...e
      }), r
    });
    L(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    L(this, "setHeight", t => {
      const e = T(this, Qe).call(this, t.toastId);
      if (e === null) {
        this.heights.push(t);
        return
      }
      this.heights[e] = t
    });
    L(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return G(T(this, Je))
  }
  set toasts(t) {
    q(T(this, Je), t, !0)
  }
  get heights() {
    return G(T(this, Ze))
  }
  set heights(t) {
    q(T(this, Ze), t, !0)
  }
}
Je = new WeakMap, Ze = new WeakMap, Qe = new WeakMap;

function wR(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const J = new gR;

function yR(n, t) {
  return J.create({
    message: n,
    ...t
  })
}
var It;
class EI {
  constructor() {
    j(this, It, Ne(() => J.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return G(T(this, It))
  }
}
It = new WeakMap;
const bR = yR,
  vR = Object.assign(bR, {
    success: J.success,
    info: J.info,
    warning: J.warning,
    error: J.error,
    custom: J.custom,
    message: J.message,
    promise: J.promise,
    dismiss: J.dismiss,
    loading: J.loading,
    getActiveToasts: () => J.toasts.filter(n => !n.dismiss)
  });
var et, tt, nt, rt, ot, it, at, st;
class ER {
  constructor() {
    L(this, "channel", new BroadcastChannel("user-channel"));
    j(this, et, V());
    j(this, tt, V(!0));
    j(this, nt, V());
    j(this, rt, V(Date.now()));
    j(this, ot, Ne(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((Ir.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    j(this, it, Ne(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    j(this, at, Ne(() => {
      var t;
      return new mR(Mr(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    j(this, st, Ne(() => {
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
    return G(T(this, et))
  }
  set data(t) {
    q(T(this, et), t, !0)
  }
  get loading() {
    return G(T(this, tt))
  }
  set loading(t) {
    q(T(this, tt), t, !0)
  }
  get notificationCount() {
    return G(T(this, nt))
  }
  set notificationCount(t) {
    q(T(this, nt), t, !0)
  }
  get lastFetch() {
    return G(T(this, rt))
  }
  set lastFetch(t) {
    q(T(this, rt), t)
  }
  get charges() {
    return G(T(this, ot))
  }
  set charges(t) {
    q(T(this, ot), t)
  }
  get cooldown() {
    return G(T(this, it))
  }
  set cooldown(t) {
    q(T(this, it), t)
  }
  get flagsBitmap() {
    return G(T(this, at))
  }
  set flagsBitmap(t) {
    q(T(this, at), t)
  }
  get timeoutUntil() {
    return G(T(this, st))
  }
  set timeoutUntil(t) {
    q(T(this, st), t)
  }
  async refresh() {
    var t, e;
    try {
      return this.loading = !0, this.data = await fe.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && fe.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && Pe.setUserId(this.data.id), !!this.data
    } catch (r) {
      return console.error(r), vR.warning(AE(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var t;
    await fe.logout(), (t = this.channel) == null || t.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(t) {
    var r;
    return t < 32 ? !0 : ((((r = this.data) == null ? void 0 : r.extraColorsBitmap) ?? 0) & 1 << t - 32) !== 0
  }
  hasPermission(t) {
    var e;
    return zr((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return fR((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
et = new WeakMap, tt = new WeakMap, nt = new WeakMap, rt = new WeakMap, ot = new WeakMap, it = new WeakMap, at = new WeakMap, st = new WeakMap;
const ye = new ER;
let x;
const ie = new Array(128).fill(void 0);
ie.push(void 0, null, !0, !1);

function N(n) {
  return ie[n]
}
let xe = ie.length;

function U(n) {
  xe === ie.length && ie.push(ie.length + 1);
  const t = xe;
  return xe = ie[t], ie[t] = n, t
}

function ue(n, t) {
  try {
    return n.apply(this, t)
  } catch (e) {
    x.__wbindgen_export_0(U(e))
  }
}

function ge(n) {
  return n == null
}
const Cr = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && Cr.decode();
let De = null;

function wt() {
  return (De === null || De.byteLength === 0) && (De = new Uint8Array(x.memory.buffer)), De
}

function yt(n, t) {
  return n = n >>> 0, Cr.decode(wt().subarray(n, n + t))
}

function TR(n) {
  n < 132 || (ie[n] = xe, xe = n)
}

function cr(n) {
  const t = N(n);
  return TR(n), t
}
let we = null;

function At() {
  return (we === null || we.buffer.detached === !0 || we.buffer.detached === void 0 && we.buffer !== x.memory.buffer) && (we = new DataView(x.memory.buffer)), we
}
let ve = 0;
const bt = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  OR = typeof bt.encodeInto == "function" ? function(n, t) {
    return bt.encodeInto(n, t)
  } : function(n, t) {
    const e = bt.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    }
  };

function dt(n, t, e) {
  if (e === void 0) {
    const s = bt.encode(n),
      u = t(s.length, 1) >>> 0;
    return wt().subarray(u, u + s.length).set(s), ve = s.length, u
  }
  let r = n.length,
    o = t(r, 1) >>> 0;
  const i = wt();
  let a = 0;
  for (; a < r; a++) {
    const s = n.charCodeAt(a);
    if (s > 127) break;
    i[o + a] = s
  }
  if (a !== r) {
    a !== 0 && (n = n.slice(a)), o = e(o, r, r = a + n.length * 3, 1) >>> 0;
    const s = wt().subarray(o + a, o + r),
      u = OR(n, s);
    a += u.written, o = e(o, r, a, 1) >>> 0
  }
  return ve = a, o
}

function kR(n) {
  const t = dt(n, x.__wbindgen_export_1, x.__wbindgen_export_2),
    e = ve;
  x.set_discord_id(t, e)
}

function SR(n) {
  const t = dt(n, x.__wbindgen_export_1, x.__wbindgen_export_2),
    e = ve;
  x.set_fingerprint(t, e)
}

function AR(n) {
  const t = dt(n, x.__wbindgen_export_1, x.__wbindgen_export_2),
    e = ve;
  x.set_detected_bot(t, e)
}

function RR(n) {
  let t, e;
  try {
    const i = x.__wbindgen_add_to_stack_pointer(-16),
      a = dt(n, x.__wbindgen_export_1, x.__wbindgen_export_2),
      s = ve;
    x.get_pawtected_endpoint_payload(i, a, s);
    var r = At().getInt32(i + 0, !0),
      o = At().getInt32(i + 4, !0);
    return t = r, e = o, yt(r, o)
  } finally {
    x.__wbindgen_add_to_stack_pointer(16), x.__wbindgen_export_3(t, e, 1)
  }
}

function Gt(n) {
  x.set_user_id(n)
}

function IR(n) {
  x.set_cf_likely_automated(n)
}

function NR(n) {
  x.set_automated_clicks(n)
}

function DR(n) {
  const t = dt(n, x.__wbindgen_export_1, x.__wbindgen_export_2),
    e = ve;
  x.request_url(t, e)
}

function PR(n) {
  x.set_automated_browser(n)
}
async function LR(n, t) {
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

function xR() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    const e = N(t).buffer;
    return U(e)
  }, n.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return ue(function(t, e) {
      const r = N(t).call(N(e));
      return U(r)
    }, arguments)
  }, n.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return ue(function(t, e, r) {
      const o = N(t).call(N(e), N(r));
      return U(o)
    }, arguments)
  }, n.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    const e = N(t).crypto;
    return U(e)
  }, n.wbg.__wbg_document_d249400bd7bd996d = function(t) {
    const e = N(t).document;
    return ge(e) ? 0 : U(e)
  }, n.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return ue(function(t, e) {
      N(t).getRandomValues(N(e))
    }, arguments)
  }, n.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return ue(function(t, e) {
      const r = Reflect.get(N(t), N(e));
      return U(r)
    }, arguments)
  }, n.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return ue(function(t) {
      return N(t).hasFocus()
    }, arguments)
  }, n.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return ue(function(t) {
      const e = N(t).innerWidth;
      return U(e)
    }, arguments)
  }, n.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(t) {
    let e;
    try {
      e = N(t) instanceof Window
    } catch {
      e = !1
    }
    return e
  }, n.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(t) {
    const e = N(t).msCrypto;
    return U(e)
  }, n.wbg.__wbg_navigator_1577371c070c8947 = function(t) {
    const e = N(t).navigator;
    return U(e)
  }, n.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    const e = new Uint8Array(N(t));
    return U(e)
  }, n.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    const r = new Function(yt(t, e));
    return U(r)
  }, n.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, r) {
    const o = new Uint8Array(N(t), e >>> 0, r >>> 0);
    return U(o)
  }, n.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return U(e)
  }, n.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    const e = N(t).node;
    return U(e)
  }, n.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, n.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    const e = N(t).process;
    return U(e)
  }, n.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return ue(function(t, e) {
      N(t).randomFillSync(cr(e))
    }, arguments)
  }, n.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return ue(function() {
      const t = module.require;
      return U(t)
    }, arguments)
  }, n.wbg.__wbg_set_65595bdd868b3009 = function(t, e, r) {
    N(t).set(N(e), r >>> 0)
  }, n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return ge(t) ? 0 : U(t)
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return ge(t) ? 0 : U(t)
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return ge(t) ? 0 : U(t)
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return ge(t) ? 0 : U(t)
  }, n.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, r) {
    const o = N(t).subarray(e >>> 0, r >>> 0);
    return U(o)
  }, n.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    const e = N(t).versions;
    return U(e)
  }, n.wbg.__wbindgen_boolean_get = function(t) {
    const e = N(t);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, n.wbg.__wbindgen_is_function = function(t) {
    return typeof N(t) == "function"
  }, n.wbg.__wbindgen_is_null = function(t) {
    return N(t) === null
  }, n.wbg.__wbindgen_is_object = function(t) {
    const e = N(t);
    return typeof e == "object" && e !== null
  }, n.wbg.__wbindgen_is_string = function(t) {
    return typeof N(t) == "string"
  }, n.wbg.__wbindgen_is_undefined = function(t) {
    return N(t) === void 0
  }, n.wbg.__wbindgen_memory = function() {
    const t = x.memory;
    return U(t)
  }, n.wbg.__wbindgen_number_get = function(t, e) {
    const r = N(e),
      o = typeof r == "number" ? r : void 0;
    At().setFloat64(t + 8, ge(o) ? 0 : o, !0), At().setInt32(t + 0, !ge(o), !0)
  }, n.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = N(t);
    return U(e)
  }, n.wbg.__wbindgen_object_drop_ref = function(t) {
    cr(t)
  }, n.wbg.__wbindgen_string_new = function(t, e) {
    const r = yt(t, e);
    return U(r)
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(yt(t, e))
  }, n
}

function zR(n, t) {
  return x = n.exports, jr.__wbindgen_wasm_module = t, we = null, De = null, x
}
async function jr(n) {
  if (x !== void 0) return x;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = xR();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: r
  } = await LR(await n, t);
  return zR(e, r)
}
class MR {
  constructor() {
    L(this, "interval");
    L(this, "storagesEmpty", !1);
    L(this, "storages", [new Rt, new tn, new nn, new jR]);
    L(this, "pawtectLoaded");
    L(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!ye.data || this.storagesEmpty || localStorage.getItem(Rt.KEY))) {
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
    const e = _e.day;
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
        await jr(Kr), (t = ye.data) != null && t.id && Gt(ye.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: CR((r, o) => {
            let i = null;
            return r instanceof Request ? i = r.url : r instanceof URL ? i = r.href : typeof r == "string" && (i = r), i !== null && !i.startsWith("/") && DR(i), e.call(window, r, o)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(t) {
    await this.loadPawtect(), Gt(t)
  }
  async setCfLikelyAutomated(t) {
    await this.loadPawtect(), IR(t)
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
    if (!await this.loadPawtect()) throw new Error(Rk());
    const r = navigator.webdriver,
      [o, i] = await Promise.all([Zt(), Wo().catch(a => (console.error(a), {
        bot: !1
      }))]);
    return Gt(ye.data.id), kR(ye.data.discordId ?? ""), SR(o), PR(r), NR(Ir.automatedClicks), i.bot && AR(i.botKind ?? "unknown"), RR(t)
  }
}

function CR(n) {
  return n.bind().bind()
}
const le = class le {
  static codec(t) {
    const e = new TextEncoder().encode(this.XOR_KEY),
      r = new Uint8Array(t.length);
    for (let o = 0; o < t.length; o++) r[o] = t[o] ^ e[o % e.length];
    return r
  }
  get() {
    try {
      const t = localStorage.getItem(le.KEY);
      if (!t) return;
      const e = Uint8Array.from(atob(t), o => o.charCodeAt(0)),
        r = new TextDecoder().decode(le.codec(e));
      return JSON.parse(r)
    } catch {
      return
    }
  }
  set(t) {
    const e = new TextEncoder().encode(JSON.stringify(t)),
      r = le.codec(e);
    localStorage.setItem(le.KEY, btoa(String.fromCharCode(...r)))
  }
};
L(le, "KEY", "ui_layout_v3"), L(le, "XOR_KEY", "wplace-prefs");
let Rt = le;
const de = class de {
  get() {
    try {
      const t = sessionStorage.getItem(de.KEY);
      if (!t) return;
      let e = "";
      for (let r = 0; r < t.length; r += 4) {
        const o = parseInt(t.slice(r, r + 4), 16);
        e += String.fromCharCode(o - de.SHIFT & 65535)
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
      const i = o.charCodeAt(0) + de.SHIFT & 65535;
      r += i.toString(16).padStart(4, "0")
    }
    sessionStorage.setItem(de.KEY, r)
  }
};
L(de, "KEY", "nav.cursor"), L(de, "SHIFT", 13);
let tn = de;
const be = class be {
  get() {
    const t = document.cookie.match(new RegExp("(?:^|; )" + be.KEY + "=([^;]*)"));
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
    document.cookie = `${be.KEY}=${encodeURIComponent(e)};path=/;max-age=${be.MAX_AGE};SameSite=Lax`
  }
};
L(be, "KEY", "_pf_uid"), L(be, "MAX_AGE", 3600 * 24 * 365);
let nn = be;
class jR {
  constructor() {
    L(this, "packed")
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
const Pe = new MR;
export {
  iR as $, ol as A, tE as B, Gv as C, yp as D, QR as E, ZR as F, PA as G, en as H, aR as I, Xo as J, _I as K, J as L, vI as M, EI as N, tI as O, rn as P, JR as Q, $ as R, dI as S, _e as T, XR as U, $R as V, mI as W, YR as X, VR as Y, qR as Z, Ko as _, fe as a, xr as a0, KR as a1, WR as a2, pI as a3, cf as a4, Qt as a5, eI as a6, yI as a7, bI as a8, nI as a9, Rk as aa, DO as ab, gI as ac, sI as ad, oI as ae, cI as af, aI as ag, hI as ah, fI as ai, GR as aj, Ey as ak, St as b, f as c, rI as d, uI as e, lI as f, Ir as g, Zt as h, $o as i, HR as j, u_ as k, Yw as l, Pp as m, Vu as n, ap as o, Pe as p, Dr as q, Ut as r, iI as s, vR as t, ye as u, Vn as v, wI as w, uy as x, Vp as y, E_ as z
};