var Yt = Object.defineProperty;
var nt = r => {
  throw TypeError(r)
};
var Wt = (r, t, e) => t in r ? Yt(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var w = (r, t, e) => Wt(r, typeof t != "symbol" ? t + "" : t, e),
  Jt = (r, t, e) => t.has(r) || nt("Cannot " + e);
var h = (r, t, e) => (Jt(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  v = (r, t, e) => t.has(r) ? nt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e);
import {
  j as Qt,
  P as It,
  g as tt,
  k as We
} from "./CftFOTTa.js";
import {
  e as S,
  i as E,
  h as T,
  g as Be,
  bP as Xt,
  y as Zt,
  B as at,
  u as ne
} from "./DUZ_qUVk.js";
import {
  g as _
} from "./BhCkpOlh.js";
const er = "" + new URL("../assets/pawtect_wasm_bg.8VPqYlMZ.wasm", import.meta.url).href;
var tr = "2.0.0";
const p = {
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
class b extends Error {
  constructor(t, e) {
    super(e), this.state = t, this.name = "BotdError", Object.setPrototypeOf(this, b.prototype)
  }
}

function rr(r, t) {
  const e = {};
  let n = {
    bot: !1
  };
  for (const a in t) {
    const s = t[a],
      c = s(r);
    let u = {
      bot: !1
    };
    typeof c == "string" ? u = {
      bot: !0,
      botKind: c
    } : c && (u = {
      bot: !0,
      botKind: p.Unknown
    }), e[a] = u, u.bot && (n = u)
  }
  return [e, n]
}
async function nr(r) {
  const t = {},
    e = Object.keys(r);
  return await Promise.all(e.map(async n => {
    const a = r[n];
    try {
      t[n] = {
        value: await a(),
        state: 0
      }
    } catch (s) {
      s instanceof b ? t[n] = {
        state: s.state,
        error: `${s.name}: ${s.message}`
      } : t[n] = {
        state: -3,
        error: s instanceof Error ? `${s.name}: ${s.message}` : String(s)
      }
    }
  })), t
}

function ar({
  appVersion: r
}) {
  if (r.state !== 0) return !1;
  if (/headless/i.test(r.value)) return p.HeadlessChrome;
  if (/electron/i.test(r.value)) return p.Electron;
  if (/slimerjs/i.test(r.value)) return p.SlimerJS
}

function Le(r, t) {
  return r.indexOf(t) !== -1
}

function z(r, t) {
  return r.indexOf(t) !== -1
}

function ir(r, t) {
  if ("find" in r) return r.find(t);
  for (let e = 0; e < r.length; e++)
    if (t(r[e], e, r)) return r[e]
}

function it(r) {
  return Object.getOwnPropertyNames(r)
}

function Je(r, ...t) {
  for (const e of t)
    if (typeof e == "string") {
      if (Le(r, e)) return !0
    } else if (ir(r, a => e.test(a)) != null) return !0;
  return !1
}

function X(r) {
  return r.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function sr({
  documentElementKeys: r
}) {
  if (r.state !== 0) return !1;
  if (Je(r.value, "selenium", "webdriver", "driver")) return p.Selenium
}

function or({
  errorTrace: r
}) {
  if (r.state !== 0) return !1;
  if (/PhantomJS/i.test(r.value)) return p.PhantomJS
}

function cr({
  evalLength: r,
  browserKind: t,
  browserEngineKind: e
}) {
  if (r.state !== 0 || t.state !== 0 || e.state !== 0) return;
  const n = r.value;
  return e.value === "unknown" ? !1 : n === 37 && !Le(["webkit", "gecko"], e.value) || n === 39 && !Le(["internet_explorer"], t.value) || n === 33 && !Le(["chromium"], e.value)
}

function ur({
  functionBind: r
}) {
  if (r.state === -2) return p.PhantomJS
}

function lr({
  languages: r
}) {
  if (r.state === 0 && r.value.length === 0) return p.HeadlessChrome
}

function _r({
  mimeTypesConsistent: r
}) {
  if (r.state === 0 && !r.value) return p.Unknown
}

function dr({
  notificationPermissions: r,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== "chrome") return !1;
  if (r.state === 0 && r.value) return p.HeadlessChrome
}

function fr({
  pluginsArray: r
}) {
  if (r.state === 0 && !r.value) return p.HeadlessChrome
}

function hr({
  pluginsLength: r,
  android: t,
  browserKind: e,
  browserEngineKind: n
}) {
  if (!(r.state !== 0 || t.state !== 0 || e.state !== 0 || n.state !== 0) && !(e.value !== "chrome" || t.value || n.value !== "chromium") && r.value === 0) return p.HeadlessChrome
}

function pr({
  process: r
}) {
  var t;
  if (r.state !== 0) return !1;
  if (r.value.type === "renderer" || ((t = r.value.versions) === null || t === void 0 ? void 0 : t.electron) != null) return p.Electron
}

function mr({
  productSub: r,
  browserKind: t
}) {
  if (r.state !== 0 || t.state !== 0) return !1;
  if ((t.value === "chrome" || t.value === "safari" || t.value === "opera" || t.value === "wechat") && r.value !== "20030107") return p.Unknown
}

function gr({
  userAgent: r
}) {
  if (r.state !== 0) return !1;
  if (/PhantomJS/i.test(r.value)) return p.PhantomJS;
  if (/Headless/i.test(r.value)) return p.HeadlessChrome;
  if (/Electron/i.test(r.value)) return p.Electron;
  if (/slimerjs/i.test(r.value)) return p.SlimerJS
}

function wr({
  webDriver: r
}) {
  if (r.state === 0 && r.value) return p.HeadlessChrome
}

function yr({
  webGL: r
}) {
  if (r.state === 0) {
    const {
      vendor: t,
      renderer: e
    } = r.value;
    if (t == "Brian Paul" && e == "Mesa OffScreen") return p.HeadlessChrome
  }
}

function vr({
  windowExternal: r
}) {
  if (r.state !== 0) return !1;
  if (/Sequentum/i.test(r.value)) return p.Sequentum
}

function br({
  windowSize: r,
  documentFocus: t
}) {
  if (r.state !== 0 || t.state !== 0) return !1;
  const {
    outerWidth: e,
    outerHeight: n
  } = r.value;
  if (t.value && e === 0 && n === 0) return p.HeadlessChrome
}

function Er({
  distinctiveProps: r
}) {
  if (r.state !== 0) return !1;
  const t = r.value;
  let e;
  for (e in t)
    if (t[e]) return e
}
const Or = {
  detectAppVersion: ar,
  detectDocumentAttributes: sr,
  detectErrorTrace: or,
  detectEvalLengthInconsistency: cr,
  detectFunctionBind: ur,
  detectLanguagesLengthInconsistency: lr,
  detectNotificationPermissions: dr,
  detectPluginsArray: fr,
  detectPluginsLengthInconsistency: hr,
  detectProcess: pr,
  detectUserAgent: gr,
  detectWebDriver: wr,
  detectWebGL: yr,
  detectWindowExternal: vr,
  detectWindowSize: br,
  detectMimeTypesConsistent: _r,
  detectProductSub: mr,
  detectDistinctiveProperties: Er
};

function Tr() {
  const r = navigator.appVersion;
  if (r == null) throw new b(-1, "navigator.appVersion is undefined");
  return r
}

function kr() {
  if (document.documentElement === void 0) throw new b(-1, "document.documentElement is undefined");
  const {
    documentElement: r
  } = document;
  if (typeof r.getAttributeNames != "function") throw new b(-2, "document.documentElement.getAttributeNames is not a function");
  return r.getAttributeNames()
}

function qr() {
  try {
    null[0]()
  } catch (r) {
    if (r instanceof Error && r.stack != null) return r.stack.toString()
  }
  throw new b(-3, "errorTrace signal unexpected behaviour")
}

function Ar() {
  return eval.toString().length
}

function Sr() {
  if (Function.prototype.bind === void 0) throw new b(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function rt() {
  var r, t;
  const e = window,
    n = navigator;
  return X(["webkitPersistentStorage" in n, "webkitTemporaryStorage" in n, n.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : X(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, n.vendor.indexOf("Apple") === 0, "getStorageUpdates" in n, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : X(["buildID" in navigator, "MozAppearance" in ((t = (r = document.documentElement) === null || r === void 0 ? void 0 : r.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function Nr() {
  var r;
  const t = (r = navigator.userAgent) === null || r === void 0 ? void 0 : r.toLowerCase();
  return z(t, "edg/") ? "edge" : z(t, "trident") || z(t, "msie") ? "internet_explorer" : z(t, "wechat") ? "wechat" : z(t, "firefox") ? "firefox" : z(t, "opera") || z(t, "opr") ? "opera" : z(t, "chrome") ? "chrome" : z(t, "safari") ? "safari" : "unknown"
}

function Ir() {
  const r = rt(),
    t = r === "chromium",
    e = r === "gecko",
    n = window,
    a = navigator,
    s = "connection";
  return t ? X([!("SharedWorker" in n), a[s] && "ontypechange" in a[s], !("sinkId" in new Audio)]) >= 2 : e ? X(["onorientationchange" in n, "orientation" in n, /android/i.test(a.appVersion)]) >= 2 : !1
}

function Rr() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function Dr() {
  const r = window;
  return X([!("MediaSettingsRange" in r), "RTCEncodedAudioFrame" in r, "" + r.Intl == "[object Intl]", "" + r.Reflect == "[object Reflect]"]) >= 3
}

function Pr() {
  const r = navigator,
    t = [],
    e = r.language || r.userLanguage || r.browserLanguage || r.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(r.languages)) rt() === "chromium" && Dr() || t.push(r.languages);
  else if (typeof r.languages == "string") {
    const n = r.languages;
    n && t.push(n.split(","))
  }
  return t
}

function xr() {
  if (navigator.mimeTypes === void 0) throw new b(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: r
  } = navigator;
  let t = Object.getPrototypeOf(r) === MimeTypeArray.prototype;
  for (let e = 0; e < r.length; e++) t && (t = Object.getPrototypeOf(r[e]) === MimeType.prototype);
  return t
}
async function jr() {
  if (window.Notification === void 0) throw new b(-1, "window.Notification is undefined");
  if (navigator.permissions === void 0) throw new b(-1, "navigator.permissions is undefined");
  const {
    permissions: r
  } = navigator;
  if (typeof r.query != "function") throw new b(-2, "navigator.permissions.query is not a function");
  try {
    const t = await r.query({
      name: "notifications"
    });
    return window.Notification.permission === "denied" && t.state === "prompt"
  } catch {
    throw new b(-3, "notificationPermissions signal unexpected behaviour")
  }
}

function zr() {
  if (navigator.plugins === void 0) throw new b(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new b(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function Lr() {
  if (navigator.plugins === void 0) throw new b(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new b(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function Ur() {
  const {
    process: r
  } = window, t = "window.process is";
  if (r === void 0) throw new b(-1, `${t} undefined`);
  if (r && typeof r != "object") throw new b(-3, `${t} not an object`);
  return r
}

function Cr() {
  const {
    productSub: r
  } = navigator;
  if (r === void 0) throw new b(-1, "navigator.productSub is undefined");
  return r
}

function Mr() {
  if (navigator.connection === void 0) throw new b(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new b(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function Br() {
  return navigator.userAgent
}

function Kr() {
  if (navigator.webdriver == null) throw new b(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function $r() {
  const r = document.createElement("canvas");
  if (typeof r.getContext != "function") throw new b(-2, "HTMLCanvasElement.getContext is not a function");
  const t = r.getContext("webgl");
  if (t === null) throw new b(-4, "WebGLRenderingContext is null");
  if (typeof t.getParameter != "function") throw new b(-2, "WebGLRenderingContext.getParameter is not a function");
  const e = t.getParameter(t.VENDOR),
    n = t.getParameter(t.RENDERER);
  return {
    vendor: e,
    renderer: n
  }
}

function Fr() {
  if (window.external === void 0) throw new b(-1, "window.external is undefined");
  const {
    external: r
  } = window;
  if (typeof r.toString != "function") throw new b(-2, "window.external.toString is not a function");
  return r.toString()
}

function Hr() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function Gr() {
  const r = {
    [p.Awesomium]: {
      window: ["awesomium"]
    },
    [p.Cef]: {
      window: ["RunPerfTest"]
    },
    [p.CefSharp]: {
      window: ["CefSharp"]
    },
    [p.CoachJS]: {
      window: ["emit"]
    },
    [p.FMiner]: {
      window: ["fmget_targets"]
    },
    [p.Geb]: {
      window: ["geb"]
    },
    [p.NightmareJS]: {
      window: ["__nightmare", "nightmare"]
    },
    [p.Phantomas]: {
      window: ["__phantomas"]
    },
    [p.PhantomJS]: {
      window: ["callPhantom", "_phantom"]
    },
    [p.Rhino]: {
      window: ["spawn"]
    },
    [p.Selenium]: {
      window: ["_Selenium_IDE_Recorder", "_selenium", "calledSelenium", /^([a-z]){3}_.*_(Array|Promise|Symbol)$/],
      document: ["__selenium_evaluate", "selenium-evaluate", "__selenium_unwrapped"]
    },
    [p.WebDriverIO]: {
      window: ["wdioElectron"]
    },
    [p.WebDriver]: {
      window: ["webdriver", "__webdriverFunc", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "_WEBDRIVER_ELEM_CACHE", "ChromeDriverw"],
      document: ["__webdriver_script_fn", "__driver_evaluate", "__webdriver_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__fxdriver_unwrapped", "__webdriver_script_fn", "__webdriver_script_func", "__webdriver_script_function", "$cdc_asdjflasutopfhvcZLmcf", "$cdc_asdjflasutopfhvcZLmcfl_", "$chrome_asyncScriptInfo", "__$webdriverAsyncExecutor"]
    },
    [p.HeadlessChrome]: {
      window: ["domAutomation", "domAutomationController"]
    }
  };
  let t;
  const e = {},
    n = it(window);
  let a = [];
  window.document !== void 0 && (a = it(window.document));
  for (t in r) {
    const s = r[t];
    if (s !== void 0) {
      const c = s.window === void 0 ? !1 : Je(n, ...s.window),
        u = s.document === void 0 || !a.length ? !1 : Je(a, ...s.document);
      e[t] = c || u
    }
  }
  return e
}
const Vr = {
  android: Ir,
  browserKind: Nr,
  browserEngineKind: rt,
  documentFocus: Rr,
  userAgent: Br,
  appVersion: Tr,
  rtt: Mr,
  windowSize: Hr,
  pluginsLength: Lr,
  pluginsArray: zr,
  errorTrace: qr,
  productSub: Cr,
  windowExternal: Fr,
  mimeTypesConsistent: xr,
  evalLength: Ar,
  webGL: $r,
  webDriver: Kr,
  languages: Pr,
  notificationPermissions: jr,
  documentElementKeys: kr,
  functionBind: Sr,
  process: Ur,
  distinctiveProps: Gr
};
class Yr {
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
    const [t, e] = rr(this.components, Or);
    return this.detections = t, e
  }
  async collect() {
    return this.components = await nr(Vr), this.components
  }
}

function Wr() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const r = new XMLHttpRequest;
    r.open("get", `https://m1.openfpcdn.io/botd/v${tr}/npm-monitoring`, !0), r.send()
  } catch (r) {
    console.error(r)
  }
}
async function Jr({
  monitoring: r = !0
} = {}) {
  r && Wr();
  const t = new Yr;
  return await t.collect(), t
}
let Ve = null;
async function Qr() {
  return await Xr() ? {
    bot: !1
  } : (await Zr()).detect()
}
async function Xr() {
  var e;
  const r = navigator;
  if (!((e = r.brave) != null && e.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(r.userAgent)) return !1;
  try {
    return await r.brave.isBrave()
  } catch {
    return !1
  }
}

function Zr() {
  return Ve || (Ve = Jr({
    monitoring: !1
  })), Ve
}
const st = "theme";
var ce, ue, le, _e, de, fe, he, pe, me, ge, we, ye;
class en {
  constructor() {
    v(this, ce, S(!1));
    v(this, ue, S(!1));
    v(this, le, S(!1));
    v(this, _e, S(!1));
    v(this, de, S(0));
    v(this, fe, S(!1));
    v(this, he, S(Be(tn())));
    v(this, pe, S(null));
    v(this, me, S(!1));
    v(this, ge, S("custom-winter"));
    v(this, we, S(Be(Date.now())));
    v(this, ye, S(void 0));
    setInterval(() => {
      T(h(this, we), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(st), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return E(h(this, ce))
  }
  set dropletsDialogOpen(t) {
    T(h(this, ce), t, !0)
  }
  get accountConflictDialogOpen() {
    return E(h(this, ue))
  }
  set accountConflictDialogOpen(t) {
    T(h(this, ue), t, !0)
  }
  get pendingHistoryDialogOpen() {
    return E(h(this, le))
  }
  set pendingHistoryDialogOpen(t) {
    T(h(this, le), t, !0)
  }
  get storeDialogOpen() {
    return E(h(this, _e))
  }
  set storeDialogOpen(t) {
    T(h(this, _e), t, !0)
  }
  get storeTabIndex() {
    return E(h(this, de))
  }
  set storeTabIndex(t) {
    T(h(this, de), t, !0)
  }
  get muted() {
    return E(h(this, fe))
  }
  set muted(t) {
    T(h(this, fe), t, !0)
  }
  get language() {
    return E(h(this, he))
  }
  set language(t) {
    T(h(this, he), t, !0)
  }
  get map() {
    return E(h(this, pe))
  }
  set map(t) {
    T(h(this, pe), t)
  }
  get automatedClicks() {
    return E(h(this, me))
  }
  set automatedClicks(t) {
    T(h(this, me), t, !0)
  }
  get theme() {
    return E(h(this, ge))
  }
  set theme(t) {
    T(h(this, ge), t, !0), localStorage.setItem(st, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return E(h(this, we))
  }
  get captcha() {
    return rn ? E(h(this, ye)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    T(h(this, ye), t, !0)
  }
}
ce = new WeakMap, ue = new WeakMap, le = new WeakMap, _e = new WeakMap, de = new WeakMap, fe = new WeakMap, he = new WeakMap, pe = new WeakMap, me = new WeakMap, ge = new WeakMap, we = new WeakMap, ye = new WeakMap;
const Qe = new en;

function tn() {
  if (navigator.languages && navigator.languages.length > 0) {
    const r = navigator.languages.find(t => t.length === 2);
    if (r) return r
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const rn = Qt.toLowerCase() !== "false",
  nn = `
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
async function an() {
  try {
    const r = await fetch(`${It}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!r.ok) return null;
    const t = await r.json(),
      e = await sn(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function sn(r, t) {
  return new Promise(e => {
    const n = new Blob([nn], {
        type: "application/javascript"
      }),
      a = URL.createObjectURL(n),
      s = new Worker(a),
      c = setTimeout(() => {
        s.terminate(), URL.revokeObjectURL(a), e(null)
      }, 12e4);
    s.onmessage = u => {
      clearTimeout(c), s.terminate(), URL.revokeObjectURL(a), u.data.error ? e(null) : e(u.data.nonce)
    }, s.onerror = () => {
      clearTimeout(c), s.terminate(), URL.revokeObjectURL(a), e(null)
    }, s.postMessage({
      prefix: r,
      difficulty: t
    })
  })
}
const Rt = 3;
var ve, be;
class on {
  constructor() {
    v(this, ve, S(null));
    v(this, be, S(0))
  }
  get current() {
    return E(h(this, ve))
  }
  set current(t) {
    T(h(this, ve), t, !0)
  }
  get errorCount() {
    return E(h(this, be))
  }
  set errorCount(t) {
    T(h(this, be), t, !0)
  }
}
ve = new WeakMap, be = new WeakMap;
const R = new on;
async function se(r) {
  if (r === 1) return cn();
  if (r === 2) {
    const t = await Dt();
    return t ? ot("turnstile", t) : !1
  }
  if (r === 3) {
    const t = await un();
    return t ? ot("hcaptcha", t) : !1
  }
  return r === 4 ? ln() : !1
}
async function cn() {
  for (let r = 0; r < Rt; r++) try {
    const t = await an();
    if (!t) continue;
    return await $.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}
async function ot(r, t) {
  try {
    const e = await $.postCaptchaSession({
      provider: r,
      token: t
    });
    return await $.verifyChallenge({
      type: "captcha",
      sessionId: e.sessionId
    }), !0
  } catch {
    return !1
  }
}
const Z = {};

function Dt() {
  return Pt(2)
}

function un() {
  return Pt(3)
}

function Pt(r) {
  const t = Z[r];
  if (t) return t;
  const e = new Promise(n => {
    R.errorCount = 0, R.current = {
      tier: r,
      resolve: a => {
        delete Z[r], n(a)
      }
    }
  });
  return Z[r] = e, e
}

function ln() {
  const r = Z[4];
  if (r) return r;
  const t = new Promise(e => {
    R.errorCount = 0, R.current = {
      tier: 4,
      resolve: n => {
        delete Z[4], e(n)
      }
    }
  });
  return Z[4] = t, t
}

function vN(r) {
  const t = R.current;
  !t || t.tier === 4 || (t.resolve(r), R.current = null)
}

function bN() {
  const r = R.current;
  !r || r.tier === 4 || (R.errorCount += 1, R.errorCount >= Rt && (r.resolve(void 0), R.current = null))
}

function EN() {
  const r = R.current;
  !r || r.tier !== 4 || (r.resolve(!0), R.current = null)
}

function ON() {
  const r = R.current;
  r && (r.tier === 4 ? r.resolve(!1) : r.resolve(void 0), R.current = null)
}
var i = (r => (r[r.CONTINUE = 100] = "CONTINUE", r[r.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", r[r.PROCESSING = 102] = "PROCESSING", r[r.EARLY_HINTS = 103] = "EARLY_HINTS", r[r.OK = 200] = "OK", r[r.CREATED = 201] = "CREATED", r[r.ACCEPTED = 202] = "ACCEPTED", r[r.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", r[r.NO_CONTENT = 204] = "NO_CONTENT", r[r.RESET_CONTENT = 205] = "RESET_CONTENT", r[r.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", r[r.MULTI_STATUS = 207] = "MULTI_STATUS", r[r.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", r[r.IM_USED = 226] = "IM_USED", r[r.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", r[r.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", r[r.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", r[r.FOUND = 302] = "FOUND", r[r.SEE_OTHER = 303] = "SEE_OTHER", r[r.NOT_MODIFIED = 304] = "NOT_MODIFIED", r[r.USE_PROXY = 305] = "USE_PROXY", r[r.SWITCH_PROXY = 306] = "SWITCH_PROXY", r[r.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", r[r.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", r[r.BAD_REQUEST = 400] = "BAD_REQUEST", r[r.UNAUTHORIZED = 401] = "UNAUTHORIZED", r[r.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", r[r.FORBIDDEN = 403] = "FORBIDDEN", r[r.NOT_FOUND = 404] = "NOT_FOUND", r[r.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", r[r.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", r[r.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", r[r.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", r[r.CONFLICT = 409] = "CONFLICT", r[r.GONE = 410] = "GONE", r[r.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", r[r.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", r[r.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", r[r.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", r[r.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", r[r.URI_TOO_LONG = 414] = "URI_TOO_LONG", r[r.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", r[r.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", r[r.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", r[r.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", r[r.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", r[r.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", r[r.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", r[r.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", r[r.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", r[r.LOCKED = 423] = "LOCKED", r[r.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", r[r.TOO_EARLY = 425] = "TOO_EARLY", r[r.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", r[r.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", r[r.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", r[r.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", r[r.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", r[r.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", r[r.BAD_GATEWAY = 502] = "BAD_GATEWAY", r[r.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", r[r.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", r[r.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", r[r.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", r[r.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", r[r.LOOP_DETECTED = 508] = "LOOP_DETECTED", r[r.NOT_EXTENDED = 510] = "NOT_EXTENDED", r[r.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", r[r.AWS_ELB_000 = 0] = "AWS_ELB_000", r[r.THIS_IS_FINE = 218] = "THIS_IS_FINE", r[r.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", r[r.METHOD_FAILURE = 420] = "METHOD_FAILURE", r[r.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", r[r.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", r[r.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", r[r.NO_RESPONSE = 444] = "NO_RESPONSE", r[r.RETRY_WITH = 449] = "RETRY_WITH", r[r.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", r[r.REDIRECT_IIS = 451] = "REDIRECT_IIS", r[r.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", r[r.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", r[r.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", r[r.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", r[r.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", r[r.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", r[r.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", r[r.INVALID_TOKEN = 498] = "INVALID_TOKEN", r[r.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", r[r.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", r[r.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", r[r.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", r[r.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", r[r.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", r[r.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", r[r.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", r[r.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", r[r.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", r[r.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", r[r.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", r[r.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", r[r.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", r[r.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", r[r.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", r[r.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", r[r.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", r[r.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", r[r.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", r[r.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", r[r.REQUEST_DENIED = 999] = "REQUEST_DENIED", r))(i || {});
class ae extends Error {}
const _n = () => "A punishment cache reload is already running",
  dn = () => "Um recarregamento do cache de punições já está em andamento",
  fn = () => "处罚缓存重新加载已在进行中",
  hn = () => "Ein Neuladen des Strafen-Caches läuft bereits",
  pn = () => "Ya hay una recarga de la caché de sanciones en curso",
  mn = () => "Un rechargement du cache des sanctions est déjà en cours",
  gn = () => "Un ricaricamento della cache delle sanzioni è già in corso",
  wn = () => "処罰キャッシュの再読み込みは既に実行中です",
  yn = () => "Przeładowanie pamięci kar już trwa",
  vn = () => "Перезагрузка кэша наказаний уже выполняется",
  bn = () => "Перезавантаження кешу покарань уже виконується",
  En = () => "Quá trình tải lại bộ nhớ đệm hình phạt đang chạy",
  On = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? _n() : e === "pt" ? dn() : e === "ch" ? fn() : e === "de" ? hn() : e === "es" ? pn() : e === "fr" ? mn() : e === "it" ? gn() : e === "jp" ? wn() : e === "pl" ? yn() : e === "ru" ? vn() : e === "uk" ? bn() : En()
  },
  Tn = () => "Your account has been suspended for breaking the rules",
  kn = () => "Sua conta foi suspensa por quebrar as regras",
  qn = () => "您的账号因违反规则已被暂停",
  An = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  Sn = () => "Tu cuenta ha sido suspendida por infringir las regras",
  Nn = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  In = () => "Il tuo account è stato sospeso per aver infranto le regole",
  Rn = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  Dn = () => "Twoje konto zostało zawieszone za łamanie zasad",
  Pn = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  xn = () => "Ваш обліковий запис було призупинено за порушення правил",
  jn = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  ct = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Tn() : e === "pt" ? kn() : e === "ch" ? qn() : e === "de" ? An() : e === "es" ? Sn() : e === "fr" ? Nn() : e === "it" ? In() : e === "jp" ? Rn() : e === "pl" ? Dn() : e === "ru" ? Pn() : e === "uk" ? xn() : jn()
  },
  zn = () => "Alliance name already taken",
  Ln = () => "Já possui uma aliança com esse nome",
  Un = () => "该联盟名称已被占用",
  Cn = () => "Der Allianzname ist bereits vergeben",
  Mn = () => "Ese nombre de alianza ya está en uso",
  Bn = () => "Ce nom d’alliance est déjà pris",
  Kn = () => "Esiste già un'alleanza con questo nome",
  $n = () => "このアライアンス名は既に使用されています。",
  Fn = () => "Nazwa sojuszu jest już zajęta",
  Hn = () => "Такое название альянса уже используется",
  Gn = () => "Назва альянсу вже зайнята",
  Vn = () => "Tên liên minh đã được sử dụng",
  ut = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? zn() : e === "pt" ? Ln() : e === "ch" ? Un() : e === "de" ? Cn() : e === "es" ? Mn() : e === "fr" ? Bn() : e === "it" ? Kn() : e === "jp" ? $n() : e === "pl" ? Fn() : e === "ru" ? Hn() : e === "uk" ? Gn() : Vn()
  },
  Yn = () => "Alliance name exceeded the maximum number of characters",
  Wn = () => "O nome da aliança excedeu o número máximo de caracteres",
  Jn = () => "联盟名称超过最大字符数限制",
  Qn = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  Xn = () => "El nombre de la alianza superó el número máximo de caracteres",
  Zn = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  ea = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  ta = () => "アライアンス名が最大文字数を超えています。",
  ra = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  na = () => "Название альянса превышает максимальную длину",
  aa = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  ia = () => "Tên liên minh vượt quá số ký tự cho phép",
  lt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Yn() : e === "pt" ? Wn() : e === "ch" ? Jn() : e === "de" ? Qn() : e === "es" ? Xn() : e === "fr" ? Zn() : e === "it" ? ea() : e === "jp" ? ta() : e === "pl" ? ra() : e === "ru" ? na() : e === "uk" ? aa() : ia()
  },
  sa = () => "Alliance with empty name",
  oa = () => "Aliança com nome vazio",
  ca = () => "名称为空的联盟",
  ua = () => "Allianz mit leerem Namen",
  la = () => "Alianza con nombre vacío",
  _a = () => "Alliance avec nom vide",
  da = () => "Alleanza con nome vuoto",
  fa = () => "名前が空のアライアンスです。",
  ha = () => "Sojusz z pustą nazwą",
  pa = () => "Альянс с пустым названием",
  ma = () => "Альянс із порожньою назвою",
  ga = () => "Liên minh không có tên",
  wa = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? sa() : e === "pt" ? oa() : e === "ch" ? ca() : e === "de" ? ua() : e === "es" ? la() : e === "fr" ? _a() : e === "it" ? da() : e === "jp" ? fa() : e === "pl" ? ha() : e === "ru" ? pa() : e === "uk" ? ma() : ga()
  },
  ya = () => "Botting",
  va = () => "Uso de bots",
  ba = () => "脚本",
  Ea = () => "Bot-Nutzung",
  Oa = () => "Botting",
  Ta = () => "Bots",
  ka = () => "Uso di bot",
  qa = () => "ボット使用",
  Aa = () => "Botting",
  Sa = () => "Боттинг",
  Na = () => "Боти",
  Ia = () => "Botting",
  Ra = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ya() : e === "pt" ? va() : e === "ch" ? ba() : e === "de" ? Ea() : e === "es" ? Oa() : e === "fr" ? Ta() : e === "it" ? ka() : e === "jp" ? qa() : e === "pl" ? Aa() : e === "ru" ? Sa() : e === "uk" ? Na() : Ia()
  },
  Da = () => "Use of software to completely automate painting",
  Pa = () => "Uso de software para pintar de forma completamente automatizada ",
  xa = () => "使用软件完全自动化绘制",
  ja = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  za = () => "Uso de software para automatizar completamente la pintura",
  La = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  Ua = () => "Uso di software per dipingere in modo completamente automatizzato",
  Ca = () => "ペイントを完全に自動化するソフトウェアの使用",
  Ma = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  Ba = () => "Использование программ для полной автоматизации рисования",
  Ka = () => "Використання програм, які повністю автоматизують малювання",
  $a = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  Fa = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Da() : e === "pt" ? Pa() : e === "ch" ? xa() : e === "de" ? ja() : e === "es" ? za() : e === "fr" ? La() : e === "it" ? Ua() : e === "jp" ? Ca() : e === "pl" ? Ma() : e === "ru" ? Ba() : e === "uk" ? Ka() : $a()
  },
  Ha = () => "Breaking the rules",
  Ga = () => "Quebrar as regras",
  Va = () => "违反规则",
  Ya = () => "Regeln brechen",
  Wa = () => "Romper las reglas",
  Ja = () => "Violation des règles",
  Qa = () => "Violazione delle regole",
  Xa = () => "ルール違反",
  Za = () => "Łamanie zasad",
  ei = () => "Нарушение правил",
  ti = () => "Порушення правил",
  ri = () => "Vi phạm luật",
  ni = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ha() : e === "pt" ? Ga() : e === "ch" ? Va() : e === "de" ? Ya() : e === "es" ? Wa() : e === "fr" ? Ja() : e === "it" ? Qa() : e === "jp" ? Xa() : e === "pl" ? Za() : e === "ru" ? ei() : e === "uk" ? ti() : ri()
  },
  ai = () => "You have broken one of Wplace's rules",
  ii = () => "Você quebrou uma das regras do Wplace",
  si = () => "你违反了 Wplace 的一项规则",
  oi = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  ci = () => "Has infringido una de las reglas de Wplace",
  ui = () => "Vous avez enfreint l’une des règles de Wplace",
  li = () => "Hai infranto una delle regole di Wplace",
  _i = () => "Wplaceのルールのいずれかに違反しました。",
  di = () => "Złamałeś jedną z zasad Wplace",
  fi = () => "Вы нарушили одно из правил Wplace",
  hi = () => "Ви порушили одне з правил Wplace",
  pi = () => "Bạn đã vi phạm một trong các luật của Wplace",
  mi = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ai() : e === "pt" ? ii() : e === "ch" ? si() : e === "de" ? oi() : e === "es" ? ci() : e === "fr" ? ui() : e === "it" ? li() : e === "jp" ? _i() : e === "pl" ? di() : e === "ru" ? fi() : e === "uk" ? hi() : pi()
  },
  gi = () => "You cannot paint over event pixels",
  wi = () => "Você não pode pintar sobre pixels de eventos",
  yi = () => "你不能覆盖活动像素",
  vi = () => "Du kannst nicht über Event-Pixel malen",
  bi = () => "No puedes pintar sobre píxeles de evento",
  Ei = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  Oi = () => "Non puoi dipingere sopra i pixel dell'evento",
  Ti = () => "イベント用のピクセルの上には塗れません。",
  ki = () => "Nie możesz malować po pikselach wydarzenia",
  qi = () => "Вы не можете рисовать по пикселям события",
  Ai = () => "Ви не можете малювати поверх пікселів події",
  Si = () => "Bạn không thể tô lên pixel sự kiện",
  _t = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? gi() : e === "pt" ? wi() : e === "ch" ? yi() : e === "de" ? vi() : e === "es" ? bi() : e === "fr" ? Ei() : e === "it" ? Oi() : e === "jp" ? Ti() : e === "pl" ? ki() : e === "ru" ? qi() : e === "uk" ? Ai() : Si()
  },
  Ni = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Ii = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Ri = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  Di = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  Pi = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  xi = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  ji = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  zi = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Li = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Ui = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  Ci = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Mi = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Bi = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ni() : e === "pt" ? Ii() : e === "ch" ? Ri() : e === "de" ? Di() : e === "es" ? Pi() : e === "fr" ? xi() : e === "it" ? ji() : e === "jp" ? zi() : e === "pl" ? Li() : e === "ru" ? Ui() : e === "uk" ? Ci() : Mi()
  },
  Ki = () => "Challenge verification not completed",
  $i = () => "Verificação do desafio não concluída",
  Fi = () => "挑战验证未完成",
  Hi = () => "Herausforderungsverifizierung nicht abgeschlossen",
  Gi = () => "Verificación del desafío no completada",
  Vi = () => "Vérification du défi non terminée",
  Yi = () => "Verifica della sfida non completata",
  Wi = () => "チャレンジ検証が完了していません",
  Ji = () => "Weryfikacja wyzwania niezakończona",
  Qi = () => "Верификация вызова не завершена",
  Xi = () => "Перевірку виклику не завершено",
  Zi = () => "Xác minh thử thách chưa hoàn thành",
  ee = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ki() : e === "pt" ? $i() : e === "ch" ? Fi() : e === "de" ? Hi() : e === "es" ? Gi() : e === "fr" ? Vi() : e === "it" ? Yi() : e === "jp" ? Wi() : e === "pl" ? Ji() : e === "ru" ? Qi() : e === "uk" ? Xi() : Zi()
  },
  es = () => "Couldn't complete the purchase. This item does not exist.",
  ts = () => "Não foi possível concluir a compra. Este item não existe.",
  rs = () => "无法完成购买。该物品不存在。",
  ns = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  as = () => "No se pudo completar la compra. Este ítem no existe.",
  is = () => "Achat impossible. Cet objet n’existe pas.",
  ss = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  os = () => "購入を完了できませんでした。このアイテムは存在しません。",
  cs = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  us = () => "Не удалось завершить покупку. Этот предмет не существует.",
  ls = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  _s = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  xt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? es() : e === "pt" ? ts() : e === "ch" ? rs() : e === "de" ? ns() : e === "es" ? as() : e === "fr" ? is() : e === "it" ? ss() : e === "jp" ? os() : e === "pl" ? cs() : e === "ru" ? us() : e === "uk" ? ls() : _s()
  },
  ds = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  fs = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  hs = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  ps = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  ms = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  gs = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  ws = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  ys = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  vs = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  bs = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  Es = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  Os = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  Ts = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ds() : e === "pt" ? fs() : e === "ch" ? hs() : e === "de" ? ps() : e === "es" ? ms() : e === "fr" ? gs() : e === "it" ? ws() : e === "jp" ? ys() : e === "pl" ? vs() : e === "ru" ? bs() : e === "uk" ? Es() : Os()
  },
  ks = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  qs = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  As = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  Ss = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  Ns = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  Is = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  Rs = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  Ds = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  Ps = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  xs = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  js = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  zs = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  dt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ks() : e === "pt" ? qs() : e === "ch" ? As() : e === "de" ? Ss() : e === "es" ? Ns() : e === "fr" ? Is() : e === "it" ? Rs() : e === "jp" ? Ds() : e === "pl" ? Ps() : e === "ru" ? xs() : e === "uk" ? js() : zs()
  },
  Ls = () => "Doxxing",
  Us = () => "Doxxing",
  Cs = () => "人肉搜索",
  Ms = () => "Doxxing",
  Bs = () => "Doxxing",
  Ks = () => "Doxxing",
  $s = () => "Doxxing",
  Fs = () => "ドックス（Doxxing）",
  Hs = () => "Doxxing",
  Gs = () => "Докcинг",
  Vs = () => "Докcинг",
  Ys = () => "Doxxing",
  Ws = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ls() : e === "pt" ? Us() : e === "ch" ? Cs() : e === "de" ? Ms() : e === "es" ? Bs() : e === "fr" ? Ks() : e === "it" ? $s() : e === "jp" ? Fs() : e === "pl" ? Hs() : e === "ru" ? Gs() : e === "uk" ? Vs() : Ys()
  },
  Js = () => "Released other's personal information without their consent",
  Qs = () => "Vazar informações pessoais de terceiros sem consentimento",
  Xs = () => "在未获同意的情况下公开他人个人信息",
  Zs = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  eo = () => "Divulgó información personal de otra persona sin su consentimiento",
  to = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  ro = () => "Diffusione di informazioni personali di terzi senza consenso",
  no = () => "他人の個人情報を同意なく公開した。",
  ao = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  io = () => "Публикация личной информации других людей без их согласия",
  so = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  oo = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  co = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Js() : e === "pt" ? Qs() : e === "ch" ? Xs() : e === "de" ? Zs() : e === "es" ? eo() : e === "fr" ? to() : e === "it" ? ro() : e === "jp" ? no() : e === "pl" ? ao() : e === "ru" ? io() : e === "uk" ? so() : oo()
  },
  uo = () => "This was already resolved. Reload the page to see your account.",
  lo = () => "Isso já foi resolvido. Recarregue a página para ver sua conta.",
  _o = () => "此问题已解决。请刷新页面以查看您的账户。",
  fo = () => "Dies wurde bereits gelöst. Laden Sie die Seite neu, um Ihr Konto zu sehen.",
  ho = () => "Esto ya está resuelto. Recarga la página para ver tu cuenta.",
  po = () => "C'était déjà résolu. Rechargez la page pour voir votre compte.",
  mo = () => "Questo è stato già risolto. Ricarica la pagina per vedere il tuo account.",
  go = () => "これはすでに解決済みです。アカウントを表示するには、ページを再読み込みしてください。",
  wo = () => "Problem został już rozwiązany. Odśwież stronę, aby zobaczyć swoje konto.",
  yo = () => "Это уже было решено. Перезагрузите страницу, чтобы увидеть свою учетную запись.",
  vo = () => "Це вже було вирішено. Перезавантажте сторінку, щоб побачити свій обліковий запис.",
  bo = () => "Vấn đề này đã được giải quyết. Tải lại trang để xem tài khoản của bạn.",
  Eo = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? uo() : e === "pt" ? lo() : e === "ch" ? _o() : e === "de" ? fo() : e === "es" ? ho() : e === "fr" ? po() : e === "it" ? mo() : e === "jp" ? go() : e === "pl" ? wo() : e === "ru" ? yo() : e === "uk" ? vo() : bo()
  },
  Oo = () => "These accounts can't be merged automatically. Contact us at contact@wplace.live and we'll sort it out.",
  To = () => "Estas contas não podem ser mescladas automaticamente. Entre em contato conosco em contact@wplace.live e resolveremos isso.",
  ko = () => "这些账户无法自动合并。请发送邮件至 contact@wplace.live 联系我们，我们将妥善处理。",
  qo = () => "Diese Konten können nicht automatisch zusammengeführt werden. Kontaktieren Sie uns unter contact@wplace.live und wir kümmern uns darum.",
  Ao = () => "Estas cuentas no se pueden fusionar automáticamente. Contáctanos en contact@wplace.live y lo solucionaremos.",
  So = () => "Ces comptes ne peuvent pas être fusionnés automatiquement. Contactez-nous à contact@wplace.live et nous nous en occuperons.",
  No = () => "Questi account non possono essere uniti automaticamente. Contattaci a contact@wplace.live e sistemeremo tutto.",
  Io = () => "これらのアカウントは自動的に統合できません。contact@wplace.liveまでお問い合わせください。弊社が対応いたします。",
  Ro = () => "Te konta nie mogą zostać automatycznie scalone. Skontaktuj się z nami pod adresem contact@wplace.live, a my się tym zajmiemy.",
  Do = () => "Эти аккаунты не могут быть объединены автоматически. Свяжитесь с нами по адресу contact@wplace.live, и мы разберемся.",
  Po = () => "Ці облікові записи не можуть бути об'єднані автоматично. Зв'яжіться з нами за адресою contact@wplace.live, і ми все владнаємо.",
  xo = () => "Các tài khoản này không thể hợp nhất tự động. Hãy liên hệ với chúng tôi tại contact@wplace.live và chúng tôi sẽ giải quyết.",
  jo = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Oo() : e === "pt" ? To() : e === "ch" ? ko() : e === "de" ? qo() : e === "es" ? Ao() : e === "fr" ? So() : e === "it" ? No() : e === "jp" ? Io() : e === "pl" ? Ro() : e === "ru" ? Do() : e === "uk" ? Po() : xo()
  },
  zo = () => "This email is already in use.",
  Lo = () => "Este e-mail já está em uso.",
  Uo = () => "This email is already in use.",
  Co = () => "This email is already in use.",
  Mo = () => "Este correo electrónico ya está en uso.",
  Bo = () => "This email is already in use.",
  Ko = () => "Questa email è già in uso.",
  $o = () => "This email is already in use.",
  Fo = () => "This email is already in use.",
  Ho = () => "This email is already in use.",
  Go = () => "This email is already in use.",
  Vo = () => "This email is already in use.",
  Yo = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? zo() : e === "pt" ? Lo() : e === "ch" ? Uo() : e === "de" ? Co() : e === "es" ? Mo() : e === "fr" ? Bo() : e === "it" ? Ko() : e === "jp" ? $o() : e === "pl" ? Fo() : e === "ru" ? Ho() : e === "uk" ? Go() : Vo()
  },
  Wo = r => `This email is already in use by user #${r.userId}.`,
  Jo = r => `Este e-mail já está em uso pelo usuário #${r.userId}.`,
  Qo = r => `This email is already in use by user #${r.userId}.`,
  Xo = r => `This email is already in use by user #${r.userId}.`,
  Zo = r => `Este correo electrónico ya está en uso por el usuario #${r.userId}.`,
  ec = r => `This email is already in use by user #${r.userId}.`,
  tc = r => `Questa email è già in uso dall'utente #${r.userId}.`,
  rc = r => `This email is already in use by user #${r.userId}.`,
  nc = r => `This email is already in use by user #${r.userId}.`,
  ac = r => `This email is already in use by user #${r.userId}.`,
  ic = r => `This email is already in use by user #${r.userId}.`,
  sc = r => `This email is already in use by user #${r.userId}.`,
  oc = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Wo(r) : e === "pt" ? Jo(r) : e === "ch" ? Qo(r) : e === "de" ? Xo(r) : e === "es" ? Zo(r) : e === "fr" ? ec(r) : e === "it" ? tc(r) : e === "jp" ? rc(r) : e === "pl" ? nc(r) : e === "ru" ? ac(r) : e === "uk" ? ic(r) : sc(r)
  },
  cc = () => "Enter a valid email address.",
  uc = () => "Informe um endereço de e-mail válido.",
  lc = () => "Enter a valid email address.",
  _c = () => "Enter a valid email address.",
  dc = () => "Introduce una dirección de correo electrónico válida.",
  fc = () => "Enter a valid email address.",
  hc = () => "Inserisci un indirizzo email valido.",
  pc = () => "Enter a valid email address.",
  mc = () => "Enter a valid email address.",
  gc = () => "Enter a valid email address.",
  wc = () => "Enter a valid email address.",
  yc = () => "Enter a valid email address.",
  vc = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? cc() : e === "pt" ? uc() : e === "ch" ? lc() : e === "de" ? _c() : e === "es" ? dc() : e === "fr" ? fc() : e === "it" ? hc() : e === "jp" ? pc() : e === "pl" ? mc() : e === "ru" ? gc() : e === "uk" ? wc() : yc()
  },
  bc = r => `Error while painting: ${r.err}`,
  Ec = r => `Erro enquanto pinta: ${r.err}`,
  Oc = r => `绘制时出错：${r.err}`,
  Tc = r => `Fehler beim Malen: ${r.err}`,
  kc = r => `Error al pintar: ${r.err}`,
  qc = r => `Erreur lors de la peinture : ${r.err}`,
  Ac = r => `Errore durante la pittura: ${r.err}`,
  Sc = r => `ペイント中にエラーが発生しました: ${r.err}`,
  Nc = r => `Błąd podczas malowania: ${r.err}`,
  Ic = r => `Ошибка при рисовании: ${r.err}`,
  Rc = r => `Помилка під час малювання: ${r.err}`,
  Dc = r => `Lỗi khi tô: ${r.err}`,
  Pc = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? bc(r) : e === "pt" ? Ec(r) : e === "ch" ? Oc(r) : e === "de" ? Tc(r) : e === "es" ? kc(r) : e === "fr" ? qc(r) : e === "it" ? Ac(r) : e === "jp" ? Sc(r) : e === "pl" ? Nc(r) : e === "ru" ? Ic(r) : e === "uk" ? Rc(r) : Dc(r)
  },
  xc = () => "Exceeded maximum number of characters",
  jc = () => "Excedeu o número máximo de caracteres permitidos",
  zc = () => "超出最大字符数",
  Lc = () => "Maximale Zeichenanzahl überschritten",
  Uc = () => "Se excedió el número máximo de caracteres",
  Cc = () => "Nombre maximal de caractères dépassé",
  Mc = () => "Numero massimo di caratteri superato",
  Bc = () => "最大文字数を超過しました",
  Kc = () => "Przekroczono maksymalną liczbę znaków",
  $c = () => "Превышено максимальное количество символов",
  Fc = () => "Перевищено максимальну кількість символів",
  Hc = () => "Đã vượt quá số ký tự tối đa",
  Gc = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? xc() : e === "pt" ? jc() : e === "ch" ? zc() : e === "de" ? Lc() : e === "es" ? Uc() : e === "fr" ? Cc() : e === "it" ? Mc() : e === "jp" ? Bc() : e === "pl" ? Kc() : e === "ru" ? $c() : e === "uk" ? Fc() : Hc()
  },
  Vc = () => "Verification code expired. Please request a new one.",
  Yc = () => "Código de verificação expirado. Por favor, solicite um novo.",
  Wc = () => "验证码已过期，请重新获取。",
  Jc = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  Qc = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  Xc = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  Zc = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  eu = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  tu = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  ru = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  nu = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  au = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  iu = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Vc() : e === "pt" ? Yc() : e === "ch" ? Wc() : e === "de" ? Jc() : e === "es" ? Qc() : e === "fr" ? Xc() : e === "it" ? Zc() : e === "jp" ? eu() : e === "pl" ? tu() : e === "ru" ? ru() : e === "uk" ? nu() : au()
  },
  su = () => "Griefing",
  ou = () => "Griefing",
  cu = () => "破坏行为",
  uu = () => "Griefing",
  lu = () => "Griefing",
  _u = () => "Griefing",
  du = () => "Griefing",
  fu = () => "グリーフィング",
  hu = () => "Griefing",
  pu = () => "Гриферство",
  mu = () => "Гріфінг",
  gu = () => "Griefing",
  wu = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? su() : e === "pt" ? ou() : e === "ch" ? cu() : e === "de" ? uu() : e === "es" ? lu() : e === "fr" ? _u() : e === "it" ? du() : e === "jp" ? fu() : e === "pl" ? hu() : e === "ru" ? pu() : e === "uk" ? mu() : gu()
  },
  yu = () => "Messed up with other's artworks",
  vu = () => "Estragou os desenhos dos outros",
  bu = () => "破坏了他人的作品",
  Eu = () => "Kunstwerke anderer beschädigt",
  Ou = () => "Arruinó las obras de arte de otros",
  Tu = () => "A abîmé les œuvres des autres",
  ku = () => "Ha rovinato i disegni degli altri",
  qu = () => "他人の作品を荒らした",
  Au = () => "Zniszczył prace innych",
  Su = () => "Испортил чужие рисунки",
  Nu = () => "Зіпсував роботи інших",
  Iu = () => "Phá hỏng tranh của người khác",
  Ru = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? yu() : e === "pt" ? vu() : e === "ch" ? bu() : e === "de" ? Eu() : e === "es" ? Ou() : e === "fr" ? Tu() : e === "it" ? ku() : e === "jp" ? qu() : e === "pl" ? Au() : e === "ru" ? Su() : e === "uk" ? Nu() : Iu()
  },
  Du = () => "Hate speech",
  Pu = () => "Discurso de Ódio",
  xu = () => "仇恨言论",
  ju = () => "Hassrede",
  zu = () => "Discurso de odio",
  Lu = () => "Discours haineux",
  Uu = () => "Discorso d'odio",
  Cu = () => "ヘイトスピーチ",
  Mu = () => "Mowa nienawiści",
  Bu = () => "Речь ненависти",
  Ku = () => "Мова ворожнечі",
  $u = () => "Ngôn từ thù hằn",
  Fu = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Du() : e === "pt" ? Pu() : e === "ch" ? xu() : e === "de" ? ju() : e === "es" ? zu() : e === "fr" ? Lu() : e === "it" ? Uu() : e === "jp" ? Cu() : e === "pl" ? Mu() : e === "ru" ? Bu() : e === "uk" ? Ku() : $u()
  },
  Hu = () => "Racism, homophobia, hate symbols, etc",
  Gu = () => "Racismo, homofobia, símbolos de ódio, etc.",
  Vu = () => "种族主义、恐同、仇恨符号等",
  Yu = () => "Rassismus, Homophobie, Hasssymbole usw.",
  Wu = () => "Racismo, homofobia, símbolos de odio, etc.",
  Ju = () => "Racisme, homophobie, symboles haineux, etc.",
  Qu = () => "Razzismo, omofobia, simboli d'odio, ecc.",
  Xu = () => "人種差別、同性愛嫌悪、ヘイトシンボルなど",
  Zu = () => "Rasizm, homofobia, symbole nienawiści itp.",
  el = () => "Расизм, гомофобия, символы ненависти и т. п.",
  tl = () => "Расизм, гомофобія, символи ненависті тощо",
  rl = () => "Phân biệt chủng tộc, kỳ thị đồng tính, biểu tượng thù ghét, v.v.",
  nl = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Hu() : e === "pt" ? Gu() : e === "ch" ? Vu() : e === "de" ? Yu() : e === "es" ? Wu() : e === "fr" ? Ju() : e === "it" ? Qu() : e === "jp" ? Xu() : e === "pl" ? Zu() : e === "ru" ? el() : e === "uk" ? tl() : rl()
  },
  al = () => "Inappropriate content",
  il = () => "Conteúdo inapropriado",
  sl = () => "不当内容",
  ol = () => "Unangemessene Inhalte",
  cl = () => "Contenido inapropiado",
  ul = () => "Contenu inapproprié",
  ll = () => "Contenuto inappropriato",
  _l = () => "不適切なコンテンツ",
  dl = () => "Nieodpowiednie treści",
  fl = () => "Неприемлемый контент",
  hl = () => "Неприйнятний вміст",
  pl = () => "Nội dung không phù hợp",
  ml = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? al() : e === "pt" ? il() : e === "ch" ? sl() : e === "de" ? ol() : e === "es" ? cl() : e === "fr" ? ul() : e === "it" ? ll() : e === "jp" ? _l() : e === "pl" ? dl() : e === "ru" ? fl() : e === "uk" ? hl() : pl()
  },
  gl = () => "Explicit or illegal content, severe slurs",
  wl = () => "Conteúdo explícito ou ilegal, insultos graves",
  yl = () => "露骨或非法内容、严重的侮辱性言论",
  vl = () => "Expliziter oder illegaler Inhalt, schwere Beleidigungen",
  bl = () => "Contenido explícito o ilegal, insultos graves",
  El = () => "Contenu explicite ou illégal, insultes graves",
  Ol = () => "Contenuto esplicito o illegale, insulti gravi",
  Tl = () => "露骨または違法なコンテンツ、ひどい侮辱・中傷",
  kl = () => "Treści jawnie seksualne lub nielegalne, poważne obelgi",
  ql = () => "Откровенный или незаконный контент, грубые оскорбления",
  Al = () => "Відвертий або незаконний вміст, грубі образи",
  Sl = () => "Nội dung phản cảm hoặc bất hợp pháp, lời lẽ lăng mạ nghiêm trọng",
  Nl = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? gl() : e === "pt" ? wl() : e === "ch" ? yl() : e === "de" ? vl() : e === "es" ? bl() : e === "fr" ? El() : e === "it" ? Ol() : e === "jp" ? Tl() : e === "pl" ? kl() : e === "ru" ? ql() : e === "uk" ? Al() : Sl()
  },
  Il = () => "Invalid captcha. Please try again.",
  Rl = () => "Captcha inválido. Por favor, tente novamente.",
  Dl = () => "验证码无效，请重试。",
  Pl = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  xl = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  jl = () => "Captcha invalide. Veuillez réessayer.",
  zl = () => "Captcha non valido. Riprova.",
  Ll = () => "キャプチャが無効です。もう一度お試しください。",
  Ul = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  Cl = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  Ml = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Bl = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Kl = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Il() : e === "pt" ? Rl() : e === "ch" ? Dl() : e === "de" ? Pl() : e === "es" ? xl() : e === "fr" ? jl() : e === "it" ? zl() : e === "jp" ? Ll() : e === "pl" ? Ul() : e === "ru" ? Cl() : e === "uk" ? Ml() : Bl()
  },
  $l = () => "Invalid challenge response",
  Fl = () => "Resposta de desafio inválida",
  Hl = () => "质询响应无效",
  Gl = () => "Ungültige Challenge-Antwort",
  Vl = () => "Respuesta de desafío inválida",
  Yl = () => "Réponse au défi invalide",
  Wl = () => "Risposta alla sfida non valida",
  Jl = () => "無効なチャレンジ応答",
  Ql = () => "Nieprawidłowa odpowiedź na wyzwanie",
  Xl = () => "Неверный ответ на вызов",
  Zl = () => "Недійсна відповідь на виклик",
  e_ = () => "Phản hồi thử thách không hợp lệ",
  t_ = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? $l() : e === "pt" ? Fl() : e === "ch" ? Hl() : e === "de" ? Gl() : e === "es" ? Vl() : e === "fr" ? Yl() : e === "it" ? Wl() : e === "jp" ? Jl() : e === "pl" ? Ql() : e === "ru" ? Xl() : e === "uk" ? Zl() : e_()
  },
  r_ = () => "The verification code is incorrect. Please check it and try again.",
  n_ = () => "Código inválido",
  a_ = () => "验证码不正确。请检查后重试。",
  i_ = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  s_ = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  o_ = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  c_ = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  u_ = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  l_ = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  __ = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  d_ = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  f_ = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  h_ = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? r_() : e === "pt" ? n_() : e === "ch" ? a_() : e === "de" ? i_() : e === "es" ? s_() : e === "fr" ? o_() : e === "it" ? c_() : e === "jp" ? u_() : e === "pl" ? l_() : e === "ru" ? __() : e === "uk" ? d_() : f_()
  },
  p_ = () => "Invalid discord.",
  m_ = () => "Discord inválido.",
  g_ = () => "无效的 Discord。",
  w_ = () => "Ungültiger Discord.",
  y_ = () => "Discord inválido.",
  v_ = () => "Discord invalide.",
  b_ = () => "Discord non valido.",
  E_ = () => "無効なDiscordアカウントです。",
  O_ = () => "Nieprawidłowy Discord.",
  T_ = () => "Неверный Discord.",
  k_ = () => "Некоректний Discord.",
  q_ = () => "Discord không hợp lệ.",
  A_ = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? p_() : e === "pt" ? m_() : e === "ch" ? g_() : e === "de" ? w_() : e === "es" ? y_() : e === "fr" ? v_() : e === "it" ? b_() : e === "jp" ? E_() : e === "pl" ? O_() : e === "ru" ? T_() : e === "uk" ? k_() : q_()
  },
  S_ = () => "The name contains disallowed characters or words. Please choose a different name.",
  N_ = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  I_ = () => "名称包含禁止的字符或词语，请选择其他名称。",
  R_ = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  D_ = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  P_ = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  x_ = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  j_ = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  z_ = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  L_ = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  U_ = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  C_ = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  jt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? S_() : e === "pt" ? N_() : e === "ch" ? I_() : e === "de" ? R_() : e === "es" ? D_() : e === "fr" ? P_() : e === "it" ? x_() : e === "jp" ? j_() : e === "pl" ? z_() : e === "ru" ? L_() : e === "uk" ? U_() : C_()
  },
  M_ = () => "Please enter a valid phone number with country code.",
  B_ = () => "Insira um número de telefone válido com código do país.",
  K_ = () => "请输入带国家代码的有效电话号码。",
  $_ = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  F_ = () => "Introduce un número de teléfono válido con código de país.",
  H_ = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  G_ = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  V_ = () => "国番号付きの有効な電話番号を入力してください。",
  Y_ = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  W_ = () => "Введите действительный номер телефона с кодом страны.",
  J_ = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  Q_ = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  X_ = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? M_() : e === "pt" ? B_() : e === "ch" ? K_() : e === "de" ? $_() : e === "es" ? F_() : e === "fr" ? H_() : e === "it" ? G_() : e === "jp" ? V_() : e === "pl" ? Y_() : e === "ru" ? W_() : e === "uk" ? J_() : Q_()
  },
  Z_ = () => "Phone number not supported. Please try another number.",
  ed = () => "Número de telefone não suportado. Por favor, tente outro número.",
  td = () => "不支持此电话号码。请尝试其他号码。",
  rd = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  nd = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  ad = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  id = () => "Numero di telefono non supportato. Prova con un altro numero.",
  sd = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  od = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  cd = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  ud = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  ld = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  _d = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Z_() : e === "pt" ? ed() : e === "ch" ? td() : e === "de" ? rd() : e === "es" ? nd() : e === "fr" ? ad() : e === "it" ? id() : e === "jp" ? sd() : e === "pl" ? od() : e === "ru" ? cd() : e === "uk" ? ud() : ld()
  },
  dd = () => "The new leader must be a member of the alliance",
  fd = () => "O novo líder deve ser um membro da aliança",
  hd = () => "新盟主必须是联盟成员",
  pd = () => "Der neue Anführer muss Mitglied der Allianz sein",
  md = () => "El nuevo líder debe ser miembro de la alianza",
  gd = () => "Le nouveau chef doit être membre de l’alliance",
  wd = () => "Il nuovo leader deve essere un membro dell'alleanza",
  yd = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  vd = () => "Nowy lider musi być członkiem sojuszu",
  bd = () => "Новый лидер должен быть участником альянса",
  Ed = () => "Новий лідер має бути учасником альянсу",
  Od = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Td = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? dd() : e === "pt" ? fd() : e === "ch" ? hd() : e === "de" ? pd() : e === "es" ? md() : e === "fr" ? gd() : e === "it" ? wd() : e === "jp" ? yd() : e === "pl" ? vd() : e === "ru" ? bd() : e === "uk" ? Ed() : Od()
  },
  kd = () => "Leaderboard is temporarily disabled",
  qd = () => "O ranking está temporariamente desativado",
  Ad = () => "排行榜已暂时停用",
  Sd = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Nd = () => "La clasificación está deshabilitada temporalmente",
  Id = () => "Le classement est temporairement désactivé",
  Rd = () => "La classifica è temporaneamente disattivata",
  Dd = () => "ランキングは一時的に無効になっています。",
  Pd = () => "Ranking jest tymczasowo wyłączony",
  xd = () => "Таблица лидеров временно отключена",
  jd = () => "Таблиця лідерів тимчасово вимкнена",
  zd = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  V = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? kd() : e === "pt" ? qd() : e === "ch" ? Ad() : e === "de" ? Sd() : e === "es" ? Nd() : e === "fr" ? Id() : e === "it" ? Rd() : e === "jp" ? Dd() : e === "pl" ? Pd() : e === "ru" ? xd() : e === "uk" ? jd() : zd()
  },
  Ld = () => "Location name is too big (max. 128 characters)",
  Ud = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Cd = () => "位置名称过长（最大 128 个字符）",
  Md = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Bd = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Kd = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  $d = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Fd = () => "場所の名前が長すぎます（最大128文字）。",
  Hd = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  Gd = () => "Название локации слишком длинное (макс. 128 символов)",
  Vd = () => "Назва локації надто довга (макс. 128 символів)",
  Yd = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  Wd = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ld() : e === "pt" ? Ud() : e === "ch" ? Cd() : e === "de" ? Md() : e === "es" ? Bd() : e === "fr" ? Kd() : e === "it" ? $d() : e === "jp" ? Fd() : e === "pl" ? Hd() : e === "ru" ? Gd() : e === "uk" ? Vd() : Yd()
  },
  Jd = () => "Multi-accounting",
  Qd = () => "Múltiplas contas",
  Xd = () => "多账号",
  Zd = () => "Multi-Accounting",
  ef = () => "Multi-cuentas",
  tf = () => "Multi-comptes",
  rf = () => "Multi-account",
  nf = () => "複数アカウント使用",
  af = () => "Multi-konta",
  sf = () => "Мультиаккаунт",
  of = () => "Мультиакаунтинг",
  cf = () => "Nhiều tài khoản",
  uf = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Jd() : e === "pt" ? Qd() : e === "ch" ? Xd() : e === "de" ? Zd() : e === "es" ? ef() : e === "fr" ? tf() : e === "it" ? rf() : e === "jp" ? nf() : e === "pl" ? af() : e === "ru" ? sf() : e === "uk" ? of() : cf()
  },
  lf = () => "Paint with more than one account or using virtual machines, residential proxies, or multi-accounting browsers",
  _f = () => "Pintar com mais de uma conta ou usando máquinas virtuais, proxies residenciais ou navegadores multi-conta",
  df = () => "使用多个账号绘制像素，或使用虚拟机、住宅代理或多账号浏览器",
  ff = () => "Mehr als ein Konto zum Malen verwenden oder virtuelle Maschinen, Residential-Proxys oder Multi-Accounting-Browser nutzen",
  hf = () => "Pintar con más de una cuenta o usar máquinas virtuales, proxies residenciales o navegadores multicuenta",
  pf = () => "Utiliser plus d’un compte pour peindre, ou utiliser des machines virtuelles, des proxys résidentiels ou des navigateurs multi-comptes",
  mf = () => "Usare più di un account per dipingere, oppure usare macchine virtuali, proxy residenziali o browser multi-account",
  gf = () => "複数のアカウントを使ってピクセルを塗る、または仮想マシン、住宅プロキシ、マルチアカウントブラウザを使用する",
  wf = () => "Malowanie pikseli na więcej niż jednym koncie lub przy użyciu maszyn wirtualnych, proxy residential lub przeglądarek multi-kontowych",
  yf = () => "Рисование с более чем одного аккаунта или с использованием виртуальных машин, резидентных прокси или мультиаккаунт-браузеров",
  vf = () => "Малювання з більш ніж одного акаунта або з використанням віртуальних машин, резидентних проксі чи мультиакаунт-браузерів",
  bf = () => "Vẽ pixel bằng nhiều hơn một tài khoản hoặc bằng máy ảo, proxy dân cư hoặc trình duyệt đa tài khoản",
  Ef = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? lf() : e === "pt" ? _f() : e === "ch" ? df() : e === "de" ? ff() : e === "es" ? hf() : e === "fr" ? pf() : e === "it" ? mf() : e === "jp" ? gf() : e === "pl" ? wf() : e === "ru" ? yf() : e === "uk" ? vf() : bf()
  },
  Of = r => `You can change your name again in ${r.days} days`,
  Tf = r => `Você pode alterar seu nome novamente em ${r.days} dias.`,
  kf = r => `你可以在 ${r.days} 天后再次修改名称`,
  qf = r => `Du kannst deinen Namen in ${r.days} Tagen erneut ändern`,
  Af = r => `Podrás cambiar tu nombre de nuevo en ${r.days} días`,
  Sf = r => `Vous pourrez changer votre nom à nouveau dans ${r.days} jours`,
  Nf = r => `Potrai cambiare di nuovo il tuo nome tra ${r.days} giorni.`,
  If = r => `${r.days}日後に再び名前を変更できます。`,
  Rf = r => `Następną zmianę nazwy możesz wykonać za ${r.days} dni`,
  Df = r => `Вы сможете изменить имя снова через ${r.days} дн.`,
  Pf = r => `Ви зможете змінити імʼя знову через ${r.days} днів`,
  xf = r => `Bạn có thể đổi tên lại sau ${r.days} ngày`,
  jf = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Of(r) : e === "pt" ? Tf(r) : e === "ch" ? kf(r) : e === "de" ? qf(r) : e === "es" ? Af(r) : e === "fr" ? Sf(r) : e === "it" ? Nf(r) : e === "jp" ? If(r) : e === "pl" ? Rf(r) : e === "ru" ? Df(r) : e === "uk" ? Pf(r) : xf(r)
  },
  zf = () => "No internet access or the servers are offline. Try again later.",
  Lf = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Uf = () => "没有网络连接或服务器已离线。请稍后重试。",
  Cf = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Mf = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Bf = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Kf = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  $f = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Ff = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Hf = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Gf = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  Vf = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  Yf = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? zf() : e === "pt" ? Lf() : e === "ch" ? Uf() : e === "de" ? Cf() : e === "es" ? Mf() : e === "fr" ? Bf() : e === "it" ? Kf() : e === "jp" ? $f() : e === "pl" ? Ff() : e === "ru" ? Hf() : e === "uk" ? Gf() : Vf()
  },
  Wf = () => "You are not allowed to verify a phone number. Try refreshing the page",
  Jf = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  Qf = () => "您无权验证电话号码。请尝试刷新页面。",
  Xf = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  Zf = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  eh = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  th = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  rh = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  nh = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  ah = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  ih = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  sh = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  oh = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Wf() : e === "pt" ? Jf() : e === "ch" ? Qf() : e === "de" ? Xf() : e === "es" ? Zf() : e === "fr" ? eh() : e === "it" ? th() : e === "jp" ? rh() : e === "pl" ? nh() : e === "ru" ? ah() : e === "uk" ? ih() : sh()
  },
  ch = () => "Not enough Droplets",
  uh = () => "Droplets insuficientes",
  lh = () => "Droplets 数量不足",
  _h = () => "Nicht genug Droplets",
  dh = () => "No tienes suficientes Droplets",
  fh = () => "Pas assez de Droplets",
  hh = () => "Droplets insufficienti",
  ph = () => "Dropletsが足りません。",
  mh = () => "Za mało Droplets",
  gh = () => "Недостаточно Droplets",
  wh = () => "Недостатньо Droplets",
  yh = () => "Không đủ Droplets",
  ft = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ch() : e === "pt" ? uh() : e === "ch" ? lh() : e === "de" ? _h() : e === "es" ? dh() : e === "fr" ? fh() : e === "it" ? hh() : e === "jp" ? ph() : e === "pl" ? mh() : e === "ru" ? gh() : e === "uk" ? wh() : yh()
  },
  vh = () => "Operation not allowed. Maybe you have too many favorite locations.",
  bh = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Eh = () => "操作不被允许。你的收藏位置可能过多。",
  Oh = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  Th = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  kh = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  qh = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  Ah = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  Sh = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  Nh = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  Ih = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  Rh = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  Dh = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? vh() : e === "pt" ? bh() : e === "ch" ? Eh() : e === "de" ? Oh() : e === "es" ? Th() : e === "fr" ? kh() : e === "it" ? qh() : e === "jp" ? Ah() : e === "pl" ? Sh() : e === "ru" ? Nh() : e === "uk" ? Ih() : Rh()
  },
  Ph = r => `Not enough charges: you have ${r.charges} but this overlay needs ${r.pixels}.`,
  xh = r => `Cargas insuficientes: você tem ${r.charges}, mas esta sobreposição precisa de ${r.pixels}.`,
  jh = r => `充能不足：你有 ${r.charges}，但此叠加层需要 ${r.pixels}。`,
  zh = r => `Nicht genügend Ladungen: Du hast ${r.charges}, aber dieses Overlay benötigt ${r.pixels}.`,
  Lh = r => `Cargas insuficientes: tienes ${r.charges} pero esta superposición necesita ${r.pixels}.`,
  Uh = r => `Charges insuffisantes : vous avez ${r.charges} mais ce calque nécessite ${r.pixels}.`,
  Ch = r => `Cariche insufficienti: ne hai ${r.charges} ma questo overlay ne richiede ${r.pixels}.`,
  Mh = r => `チャージが足りません：現在 ${r.charges} ですが、このオーバーレイには ${r.pixels} 必要です。`,
  Bh = r => `Za mało ładunków: masz ${r.charges}, ale ta nakładka wymaga ${r.pixels}.`,
  Kh = r => `Недостаточно зарядов: у вас ${r.charges}, но для этого слоя нужно ${r.pixels}.`,
  $h = r => `Недостатньо зарядів: у вас ${r.charges}, але для цього шару потрібно ${r.pixels}.`,
  Fh = r => `Không đủ lượt sơn: bạn có ${r.charges} nhưng lớp phủ này cần ${r.pixels}.`,
  Hh = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ph(r) : e === "pt" ? xh(r) : e === "ch" ? jh(r) : e === "de" ? zh(r) : e === "es" ? Lh(r) : e === "fr" ? Uh(r) : e === "it" ? Ch(r) : e === "jp" ? Mh(r) : e === "pl" ? Bh(r) : e === "ru" ? Kh(r) : e === "uk" ? $h(r) : Fh(r)
  },
  Gh = () => "You are trying to paint with a color you do not own",
  Vh = () => "Você está tentando pintar com uma cor que não possui",
  Yh = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  Wh = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  Jh = () => "Estás intentando pintar con un color que no posees",
  Qh = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  Xh = () => "Stai cercando di dipingere con un colore che non possiedi",
  Zh = () => "所持していない色で塗ろうとしています。",
  ep = () => "Próbujesz malować kolorem, którego nie posiadasz",
  tp = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  rp = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  np = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  ht = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Gh() : e === "pt" ? Vh() : e === "ch" ? Yh() : e === "de" ? Wh() : e === "es" ? Jh() : e === "fr" ? Qh() : e === "it" ? Xh() : e === "jp" ? Zh() : e === "pl" ? ep() : e === "ru" ? tp() : e === "uk" ? rp() : np()
  },
  ap = () => "Phone already used",
  ip = () => "Telefone já usado",
  sp = () => "电话号码已被使用",
  op = () => "Telefonnummer bereits verwendet",
  cp = () => "Teléfono ya utilizado",
  up = () => "Téléphone déjà utilisé",
  lp = () => "Telefono già utilizzato",
  _p = () => "この電話番号は既に使用されています。",
  dp = () => "Numer telefonu jest już używany",
  fp = () => "Телефон уже используется",
  hp = () => "Номер телефону вже використовується",
  pp = () => "Số điện thoại đã được sử dụng",
  mp = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ap() : e === "pt" ? ip() : e === "ch" ? sp() : e === "de" ? op() : e === "es" ? cp() : e === "fr" ? up() : e === "it" ? lp() : e === "jp" ? _p() : e === "pl" ? dp() : e === "ru" ? fp() : e === "uk" ? hp() : pp()
  },
  gp = () => "This phone number's region is not supported",
  wp = () => "A região deste número de telefone não é suportada",
  yp = () => "此电话号码的地区不受支持",
  vp = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  bp = () => "La región de este número de teléfono no es compatible",
  Ep = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  Op = () => "La regione di questo numero di telefono non è supportata",
  Tp = () => "この電話番号の地域はサポートされていません",
  kp = () => "Region tego numeru telefonu nie jest obsługiwany",
  qp = () => "Регион этого номера телефона не поддерживается",
  Ap = () => "Регіон цього номера телефону не підтримується",
  Sp = () => "Vùng của số điện thoại này không được hỗ trợ",
  Np = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? gp() : e === "pt" ? wp() : e === "ch" ? yp() : e === "de" ? vp() : e === "es" ? bp() : e === "fr" ? Ep() : e === "it" ? Op() : e === "jp" ? Tp() : e === "pl" ? kp() : e === "ru" ? qp() : e === "uk" ? Ap() : Sp()
  },
  Ip = () => "Refresh your page to get the latest update",
  Rp = () => "Recarregue sua página para obter as últimas atualizações",
  Dp = () => "刷新页面以获取最新更新",
  Pp = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  xp = () => "Actualiza la página para obtener la última versión",
  jp = () => "Actualisez la page pour obtenir les dernières mises à jour",
  zp = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  Lp = () => "最新の状態にするにはページを再読み込みしてください。",
  Up = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  Cp = () => "Обновите страницу, чтобы получить последние изменения",
  Mp = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Bp = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  pt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ip() : e === "pt" ? Rp() : e === "ch" ? Dp() : e === "de" ? Pp() : e === "es" ? xp() : e === "fr" ? jp() : e === "it" ? zp() : e === "jp" ? Lp() : e === "pl" ? Up() : e === "ru" ? Cp() : e === "uk" ? Mp() : Bp()
  },
  Kp = () => "Report failed. Please try again later",
  $p = () => "Denúncia falhou. Por favor, tente novamente mais tarde",
  Fp = () => "举报失败，请稍后再试",
  Hp = () => "Meldung fehlgeschlagen. Bitte versuche es später erneut",
  Gp = () => "Error al enviar el reporte. Inténtalo de nuevo más tarde",
  Vp = () => "Échec du signalement. Veuillez réessayer plus tard",
  Yp = () => "Segnalazione fallita. Riprova più tardi",
  Wp = () => "通報に失敗しました。時間をおいて再度お試しください",
  Jp = () => "Zgłoszenie nie powiodło się. Spróbuj ponownie później",
  Qp = () => "Не удалось отправить жалобу. Попробуйте позже.",
  Xp = () => "Не вдалося відправити скаргу. Спробуйте пізніше.",
  Zp = () => "Báo cáo thất bại. Vui lòng thử lại sau",
  em = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Kp() : e === "pt" ? $p() : e === "ch" ? Fp() : e === "de" ? Hp() : e === "es" ? Gp() : e === "fr" ? Vp() : e === "it" ? Yp() : e === "jp" ? Wp() : e === "pl" ? Jp() : e === "ru" ? Qp() : e === "uk" ? Xp() : Zp()
  },
  tm = () => "The request timed out. Please try again.",
  rm = () => "A solicitação expirou. Por favor, tente novamente.",
  nm = () => "请求超时。请重试。",
  am = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  im = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  sm = () => "La requête a expiré. Veuillez réessayer.",
  om = () => "La richiesta è scaduta. Riprova.",
  cm = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  um = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  lm = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  _m = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  dm = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  fm = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? tm() : e === "pt" ? rm() : e === "ch" ? nm() : e === "de" ? am() : e === "es" ? im() : e === "fr" ? sm() : e === "it" ? om() : e === "jp" ? cm() : e === "pl" ? um() : e === "ru" ? lm() : e === "uk" ? _m() : dm()
  },
  hm = () => "No modifications found for the selected pixels.",
  pm = () => "Nenhuma modificação encontrada para os pixels selecionados.",
  mm = () => "未找到所选像素的修改记录。",
  gm = () => "Keine Änderungen für die ausgewählten Pixel gefunden.",
  wm = () => "No se encontraron modificaciones para los píxeles seleccionados.",
  ym = () => "Aucune modification trouvée pour les pixels sélectionnés.",
  vm = () => "Nessuna modifica trovata per i pixel selezionati.",
  bm = () => "選択したピクセルの変更が見つかりませんでした。",
  Em = () => "Nie znaleziono modyfikacji dla wybranych pikseli.",
  Om = () => "Модификации для выбранных пикселей не найдены.",
  Tm = () => "Модифікації для вибраних пікселів не знайдено.",
  km = () => "Không tìm thấy thay đổi cho các pixel đã chọn.",
  qm = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? hm() : e === "pt" ? pm() : e === "ch" ? mm() : e === "de" ? gm() : e === "es" ? wm() : e === "fr" ? ym() : e === "it" ? vm() : e === "jp" ? bm() : e === "pl" ? Em() : e === "ru" ? Om() : e === "uk" ? Tm() : km()
  },
  Am = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Sm = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  Nm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Im = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Rm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Dm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Pm = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  xm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  jm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  zm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Lm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Um = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Cm = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Am() : e === "pt" ? Sm() : e === "ch" ? Nm() : e === "de" ? Im() : e === "es" ? Rm() : e === "fr" ? Dm() : e === "it" ? Pm() : e === "jp" ? xm() : e === "pl" ? jm() : e === "ru" ? zm() : e === "uk" ? Lm() : Um()
  },
  Mm = () => "The service is currently unavailable. Please try again later.",
  Bm = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  Km = () => "服务当前不可用。请稍后再试。",
  $m = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  Fm = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  Hm = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  Gm = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  Vm = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  Ym = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  Wm = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  Jm = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  Qm = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  Xm = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Mm() : e === "pt" ? Bm() : e === "ch" ? Km() : e === "de" ? $m() : e === "es" ? Fm() : e === "fr" ? Hm() : e === "it" ? Gm() : e === "jp" ? Vm() : e === "pl" ? Ym() : e === "ru" ? Wm() : e === "uk" ? Jm() : Qm()
  },
  Zm = () => "Too many attempts. Please try again later",
  eg = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  tg = () => "尝试次数过多，请稍后再试",
  rg = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  ng = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  ag = () => "Trop de tentatives. Veuillez réessayer plus tard",
  ig = () => "Troppi tentativi. Riprova più tardi.",
  sg = () => "試行回数が多すぎます。後で再度お試しください。",
  og = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  cg = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  ug = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  lg = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  mt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Zm() : e === "pt" ? eg() : e === "ch" ? tg() : e === "de" ? rg() : e === "es" ? ng() : e === "fr" ? ag() : e === "it" ? ig() : e === "jp" ? sg() : e === "pl" ? og() : e === "ru" ? cg() : e === "uk" ? ug() : lg()
  },
  _g = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  dg = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  fg = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  hg = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  pg = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  mg = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  gg = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  wg = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  yg = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  vg = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  bg = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  Eg = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  Og = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? _g() : e === "pt" ? dg() : e === "ch" ? fg() : e === "de" ? hg() : e === "es" ? pg() : e === "fr" ? mg() : e === "it" ? gg() : e === "jp" ? wg() : e === "pl" ? yg() : e === "ru" ? vg() : e === "uk" ? bg() : Eg()
  },
  Tg = () => "The typed username does not match your current username.",
  kg = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  qg = () => "输入的用户名与当前用户名不匹配。",
  Ag = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Sg = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Ng = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  Ig = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  Rg = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  Dg = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Pg = () => "Введённое имя пользователя не совпадает с текущим.",
  xg = () => "Введене імʼя користувача не збігається з поточним.",
  jg = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  zg = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Tg() : e === "pt" ? kg() : e === "ch" ? qg() : e === "de" ? Ag() : e === "es" ? Sg() : e === "fr" ? Ng() : e === "it" ? Ig() : e === "jp" ? Rg() : e === "pl" ? Dg() : e === "ru" ? Pg() : e === "uk" ? xg() : jg()
  },
  Lg = () => "Unexpected server error. Try again later.",
  Ug = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  Cg = () => "服务器出现意外错误。请稍后再试。",
  Mg = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  Bg = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Kg = () => "Erreur serveur inattendue. Réessayez plus tard.",
  $g = () => "Errore imprevisto del server. Riprova più tardi.",
  Fg = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  Hg = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  Gg = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  Vg = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  Yg = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  o = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Lg() : e === "pt" ? Ug() : e === "ch" ? Cg() : e === "de" ? Mg() : e === "es" ? Bg() : e === "fr" ? Kg() : e === "it" ? $g() : e === "jp" ? Fg() : e === "pl" ? Hg() : e === "ru" ? Gg() : e === "uk" ? Vg() : Yg()
  },
  Wg = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  Jg = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  Qg = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  Xg = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  Zg = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  ew = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  tw = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  rw = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  nw = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  aw = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  iw = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  sw = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  ow = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Wg() : e === "pt" ? Jg() : e === "ch" ? Qg() : e === "de" ? Xg() : e === "es" ? Zg() : e === "fr" ? ew() : e === "it" ? tw() : e === "jp" ? rw() : e === "pl" ? nw() : e === "ru" ? aw() : e === "uk" ? iw() : sw()
  },
  cw = () => "VPN or proxy detected. Please disable your VPN and try again.",
  uw = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  lw = () => "检测到VPN或代理。请关闭VPN后重试。",
  _w = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  dw = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  fw = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  hw = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  pw = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  mw = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  gw = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  ww = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  yw = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  vw = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? cw() : e === "pt" ? uw() : e === "ch" ? lw() : e === "de" ? _w() : e === "es" ? dw() : e === "fr" ? fw() : e === "it" ? hw() : e === "jp" ? pw() : e === "pl" ? mw() : e === "ru" ? gw() : e === "uk" ? ww() : yw()
  },
  bw = () => "Failed to load WebAssembly module. Try to use another browser.",
  Ew = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  Ow = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  Tw = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  kw = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  qw = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  Aw = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  Sw = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  Nw = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  Iw = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  Rw = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  Dw = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  Pw = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? bw() : e === "pt" ? Ew() : e === "ch" ? Ow() : e === "de" ? Tw() : e === "es" ? kw() : e === "fr" ? qw() : e === "it" ? Aw() : e === "jp" ? Sw() : e === "pl" ? Nw() : e === "ru" ? Iw() : e === "uk" ? Rw() : Dw()
  },
  xw = () => "You already have this item. Please refresh the page.",
  jw = () => "Você já possui este item. Atualize a página.",
  zw = () => "你已经拥有此物品。请刷新页面。",
  Lw = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  Uw = () => "Ya tienes este ítem. Actualiza la página.",
  Cw = () => "Vous possédez déjà cet objet. Actualisez la page.",
  Mw = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  Bw = () => "このアイテムはすでに所持しています。ページを更新してください。",
  Kw = () => "Masz już ten przedmiot. Odśwież stronę.",
  $w = () => "У вас уже есть этот предмет. Обновите страницу.",
  Fw = () => "У вас уже є цей предмет. Оновіть сторінку.",
  Hw = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  zt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? xw() : e === "pt" ? jw() : e === "ch" ? zw() : e === "de" ? Lw() : e === "es" ? Uw() : e === "fr" ? Cw() : e === "it" ? Mw() : e === "jp" ? Bw() : e === "pl" ? Kw() : e === "ru" ? $w() : e === "uk" ? Fw() : Hw()
  },
  Gw = () => "You are already in an alliance",
  Vw = () => "Você já está em uma aliança",
  Yw = () => "你已经在一个联盟中",
  Ww = () => "Du bist bereits in einer Allianz",
  Jw = () => "Ya estás en una alianza",
  Qw = () => "Vous êtes déjà dans une alliance",
  Xw = () => "Sei già in un'alleanza",
  Zw = () => "すでにアライアンスに所属しています。",
  ey = () => "Jesteś już w sojuszu",
  ty = () => "Вы уже состоите в альянсе",
  ry = () => "Ви вже перебуваєте в альянсі",
  ny = () => "Bạn đã ở trong một liên minh",
  ay = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Gw() : e === "pt" ? Vw() : e === "ch" ? Yw() : e === "de" ? Ww() : e === "es" ? Jw() : e === "fr" ? Qw() : e === "it" ? Xw() : e === "jp" ? Zw() : e === "pl" ? ey() : e === "ru" ? ty() : e === "uk" ? ry() : ny()
  },
  iy = () => "You are not allowed to do this",
  sy = () => "Você não tem permissão para fazer isso",
  oy = () => "你无权执行此操作",
  cy = () => "Du bist dazu nicht berechtigt",
  uy = () => "No tienes permiso para hacer esto",
  ly = () => "Vous n’êtes pas autorisé à faire cela",
  _y = () => "Non hai il permesso di farlo",
  dy = () => "この操作を行う権限がありません。",
  fy = () => "Nie masz uprawnień, aby to zrobić",
  hy = () => "У вас нет прав для этого действия",
  py = () => "Ви не маєте права це робити",
  my = () => "Bạn không có quyền làm việc này",
  A = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? iy() : e === "pt" ? sy() : e === "ch" ? oy() : e === "de" ? cy() : e === "es" ? uy() : e === "fr" ? ly() : e === "it" ? _y() : e === "jp" ? dy() : e === "pl" ? fy() : e === "ru" ? hy() : e === "uk" ? py() : my()
  },
  gy = () => "You do not have enough Droplets to buy this item.",
  wy = () => "Você não tem Droplets suficientes para comprar este item.",
  yy = () => "你的 Droplets 不足，无法购买此物品。",
  vy = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  by = () => "No tienes suficientes Droplets para comprar este ítem.",
  Ey = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  Oy = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  Ty = () => "このアイテムを購入するのに十分なDropletsがありません。",
  ky = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  qy = () => "У вас недостаточно Droplets для покупки этого предмета.",
  Ay = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  Sy = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  Lt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? gy() : e === "pt" ? wy() : e === "ch" ? yy() : e === "de" ? vy() : e === "es" ? by() : e === "fr" ? Ey() : e === "it" ? Oy() : e === "jp" ? Ty() : e === "pl" ? ky() : e === "ru" ? qy() : e === "uk" ? Ay() : Sy()
  },
  Ny = () => "You need to be logged in to paint",
  Iy = () => "Você precisa estar conectado para pintar",
  Ry = () => "你需要登录才能进行绘制",
  Dy = () => "Du musst eingeloggt sein, um zu malen",
  Py = () => "Debes iniciar sesión para pintar",
  xy = () => "Vous devez être connecté pour peindre",
  jy = () => "Devi avere effettuato l'accesso per dipingere",
  zy = () => "ペイントするにはログインが必要です。",
  Ly = () => "Musisz być zalogowany, aby malować",
  Uy = () => "Чтобы рисовать, нужно войти в аккаунт",
  Cy = () => "Щоб малювати, необхідно увійти в акаунт",
  My = () => "Bạn cần đăng nhập để tô",
  gt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ny() : e === "pt" ? Iy() : e === "ch" ? Ry() : e === "de" ? Dy() : e === "es" ? Py() : e === "fr" ? xy() : e === "it" ? jy() : e === "jp" ? zy() : e === "pl" ? Ly() : e === "ru" ? Uy() : e === "uk" ? Cy() : My()
  },
  By = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Ky = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  $y = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  Fy = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  Hy = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  Gy = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  Vy = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  Yy = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  Wy = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  Jy = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  Qy = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  Xy = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  Zy = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? By() : e === "pt" ? Ky() : e === "ch" ? $y() : e === "de" ? Fy() : e === "es" ? Hy() : e === "fr" ? Gy() : e === "it" ? Vy() : e === "jp" ? Yy() : e === "pl" ? Wy() : e === "ru" ? Jy() : e === "uk" ? Qy() : Xy()
  },
  ev = r => `Your account has been suspended out until ${r.until}`,
  tv = r => `A sua conta está suspensa até ${r.until}`,
  rv = r => `你的账号已被暂停至 ${r.until}`,
  nv = r => `Dein Konto ist gesperrt bis ${r.until}`,
  av = r => `Tu cuenta ha sido suspendida hasta ${r.until}`,
  iv = r => `Votre compte est suspendu jusqu’au ${r.until}`,
  sv = r => `Il tuo account è sospeso fino al ${r.until}`,
  ov = r => `あなたのアカウントは${r.until}まで一時停止されています。`,
  cv = r => `Twoje konto zostało zawieszone do ${r.until}`,
  uv = r => `Ваш аккаунт заблокирован до ${r.until}`,
  lv = r => `Ваш акаунт призупинено до ${r.until}`,
  _v = r => `Tài khoản của bạn đã bị đình chỉ đến ${r.until}`,
  wt = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ev(r) : e === "pt" ? tv(r) : e === "ch" ? rv(r) : e === "de" ? nv(r) : e === "es" ? av(r) : e === "fr" ? iv(r) : e === "it" ? sv(r) : e === "jp" ? ov(r) : e === "pl" ? cv(r) : e === "ru" ? uv(r) : e === "uk" ? lv(r) : _v(r)
  },
  dv = () => "A correction is already pending for this ticket.",
  fv = () => "Já existe uma correção pendente para este ticket.",
  hv = () => "此工单已存在待审核的更正请求。",
  pv = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  mv = () => "Ya hay una corrección pendiente para este ticket.",
  gv = () => "Une correction est déjà en attente pour ce ticket.",
  wv = () => "Una correzione è già in sospeso per questo ticket.",
  yv = () => "このチケットには未処理の修正があります。",
  vv = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  bv = () => "Для этого тикета уже есть запрос на исправление.",
  Ev = () => "Для цього тікета вже є запит на перевірці.",
  Ov = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  Tv = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? dv() : e === "pt" ? fv() : e === "ch" ? hv() : e === "de" ? pv() : e === "es" ? mv() : e === "fr" ? gv() : e === "it" ? wv() : e === "jp" ? yv() : e === "pl" ? vv() : e === "ru" ? bv() : e === "uk" ? Ev() : Ov()
  },
  kv = () => "You cannot review your own correction request.",
  qv = () => "Você não pode revisar sua própria solicitação de correção.",
  Av = () => "不能审核自己提交的更正请求。",
  Sv = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  Nv = () => "No puedes revisar tu propia solicitud de corrección.",
  Iv = () => "Tu ne peux pas examiner ta propre demande de correction.",
  Rv = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  Dv = () => "自分のリクエストはレビューできません。",
  Pv = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  xv = () => "Нельзя рассматривать собственный запрос.",
  jv = () => "Не можна перевіряти власний запит.",
  zv = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  Lv = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? kv() : e === "pt" ? qv() : e === "ch" ? Av() : e === "de" ? Sv() : e === "es" ? Nv() : e === "fr" ? Iv() : e === "it" ? Rv() : e === "jp" ? Dv() : e === "pl" ? Pv() : e === "ru" ? xv() : e === "uk" ? jv() : zv()
  },
  Uv = () => "This correction has already been reviewed.",
  Cv = () => "Esta correção já foi revisada.",
  Mv = () => "此请求已被审核。",
  Bv = () => "Diese Korrektur wurde bereits geprüft.",
  Kv = () => "Esta corrección ya ha sido revisada.",
  $v = () => "Cette correction a déjà été examinée.",
  Fv = () => "Questa correzione è già stata revisionata.",
  Hv = () => "このリクエストはすでにレビュー済みです。",
  Gv = () => "Ta prośba została już rozpatrzona.",
  Vv = () => "Этот запрос уже рассмотрен.",
  Yv = () => "Цей запит вже перевірено.",
  Wv = () => "Yêu cầu này đã được duyệt.",
  Jv = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Uv() : e === "pt" ? Cv() : e === "ch" ? Mv() : e === "de" ? Bv() : e === "es" ? Kv() : e === "fr" ? $v() : e === "it" ? Fv() : e === "jp" ? Hv() : e === "pl" ? Gv() : e === "ru" ? Vv() : e === "uk" ? Yv() : Wv()
  },
  Qv = () => "Alliance not found",
  Xv = () => "Aliança não encontrada",
  Zv = () => "未找到联盟",
  eb = () => "Allianz nicht gefunden",
  tb = () => "Alianza no encontrada",
  rb = () => "Alliance introuvable",
  nb = () => "Alleanza non trovata",
  ab = () => "アライアンスが見つかりません",
  ib = () => "Nie znaleziono sojuszu",
  sb = () => "Альянс не найден",
  ob = () => "Альянс не знайдено",
  cb = () => "Không tìm thấy liên minh",
  ub = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Qv() : e === "pt" ? Xv() : e === "ch" ? Zv() : e === "de" ? eb() : e === "es" ? tb() : e === "fr" ? rb() : e === "it" ? nb() : e === "jp" ? ab() : e === "pl" ? ib() : e === "ru" ? sb() : e === "uk" ? ob() : cb()
  },
  lb = () => "Invalid ID",
  _b = () => "ID inválido",
  db = () => "无效的 ID",
  fb = () => "Ungültige ID",
  hb = () => "ID inválido",
  pb = () => "ID invalide",
  mb = () => "ID non valido",
  gb = () => "無効なIDです",
  wb = () => "Nieprawidłowe ID",
  yb = () => "Неверный ID",
  vb = () => "Недійсний ID",
  bb = () => "ID không hợp lệ",
  Eb = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? lb() : e === "pt" ? _b() : e === "ch" ? db() : e === "de" ? fb() : e === "es" ? hb() : e === "fr" ? pb() : e === "it" ? mb() : e === "jp" ? gb() : e === "pl" ? wb() : e === "ru" ? yb() : e === "uk" ? vb() : bb()
  },
  Ob = () => "This alliance already has the maximum number of active invites",
  Tb = () => "Esta aliança já tem o número máximo de convites ativos",
  kb = () => "该联盟的有效邀请数量已达上限",
  qb = () => "Diese Allianz hat bereits die maximale Anzahl aktiver Einladungen",
  Ab = () => "Esta alianza ya tiene el número máximo de invitaciones activas",
  Sb = () => "Cette alliance a déjà le nombre maximal d'invitations actives",
  Nb = () => "Questa alleanza ha già il numero massimo di inviti attivi",
  Ib = () => "このアライアンスは有効な招待の上限に達しています",
  Rb = () => "Ten sojusz ma już maksymalną liczbę aktywnych zaproszeń",
  Db = () => "У этого альянса уже максимальное количество активных приглашений",
  Pb = () => "Цей альянс уже має максимальну кількість активних запрошень",
  xb = () => "Liên minh này đã đạt số lời mời đang hoạt động tối đa",
  jb = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ob() : e === "pt" ? Tb() : e === "ch" ? kb() : e === "de" ? qb() : e === "es" ? Ab() : e === "fr" ? Sb() : e === "it" ? Nb() : e === "jp" ? Ib() : e === "pl" ? Rb() : e === "ru" ? Db() : e === "uk" ? Pb() : xb()
  },
  zb = () => "Enter a valid discord.gg or discord.com/invite link",
  Lb = () => "Informe um link válido de discord.gg ou discord.com/invite",
  Ub = () => "请输入有效的 discord.gg 或 discord.com/invite 链接",
  Cb = () => "Gib einen gültigen discord.gg- oder discord.com/invite-Link ein",
  Mb = () => "Introduce un enlace válido de discord.gg o discord.com/invite",
  Bb = () => "Saisissez un lien discord.gg ou discord.com/invite valide",
  Kb = () => "Inserisci un link discord.gg o discord.com/invite valido",
  $b = () => "有効な discord.gg または discord.com/invite のリンクを入力してください",
  Fb = () => "Podaj prawidłowy link discord.gg lub discord.com/invite",
  Hb = () => "Введите корректную ссылку discord.gg или discord.com/invite",
  Gb = () => "Введіть дійсне посилання discord.gg або discord.com/invite",
  Vb = () => "Nhập liên kết discord.gg hoặc discord.com/invite hợp lệ",
  Yb = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? zb() : e === "pt" ? Lb() : e === "ch" ? Ub() : e === "de" ? Cb() : e === "es" ? Mb() : e === "fr" ? Bb() : e === "it" ? Kb() : e === "jp" ? $b() : e === "pl" ? Fb() : e === "ru" ? Hb() : e === "uk" ? Gb() : Vb()
  },
  Wb = () => "Enter a positive multiple of the conversion rate",
  Jb = () => "Informe um múltiplo positivo da taxa de conversão",
  Qb = () => "请输入兑换比例的正整数倍",
  Xb = () => "Gib ein positives Vielfaches des Umrechnungskurses ein",
  Zb = () => "Introduce un múltiplo positivo de la tasa de conversión",
  eE = () => "Saisissez un multiple positif du taux de conversion",
  tE = () => "Inserisci un multiplo positivo del tasso di conversione",
  rE = () => "変換レートの正の倍数を入力してください",
  nE = () => "Podaj dodatnią wielokrotność kursu wymiany",
  aE = () => "Введите положительное число, кратное курсу обмена",
  iE = () => "Введіть додатне число, кратне курсу обміну",
  sE = () => "Nhập một bội số dương của tỷ lệ quy đổi",
  oE = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Wb() : e === "pt" ? Jb() : e === "ch" ? Qb() : e === "de" ? Xb() : e === "es" ? Zb() : e === "fr" ? eE() : e === "it" ? tE() : e === "jp" ? rE() : e === "pl" ? nE() : e === "ru" ? aE() : e === "uk" ? iE() : sE()
  },
  cE = () => "The alliance does not have enough Coins",
  uE = () => "A aliança não tem moedas suficientes",
  lE = () => "该联盟的金币不足",
  _E = () => "Die Allianz hat nicht genug Coins",
  dE = () => "La alianza no tiene suficientes Monedas",
  fE = () => "L'alliance n'a pas assez de Coins",
  hE = () => "L'alleanza non ha abbastanza Monete",
  pE = () => "アライアンスのCoinsが不足しています",
  mE = () => "Sojusz nie ma wystarczającej liczby Monet",
  gE = () => "У альянса недостаточно Монет",
  wE = () => "Альянсу не вистачає монет",
  yE = () => "Liên minh không có đủ Coins",
  re = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? cE() : e === "pt" ? uE() : e === "ch" ? lE() : e === "de" ? _E() : e === "es" ? dE() : e === "fr" ? fE() : e === "it" ? hE() : e === "jp" ? pE() : e === "pl" ? mE() : e === "ru" ? gE() : e === "uk" ? wE() : yE()
  },
  vE = () => "This capability is already unlocked",
  bE = () => "Este recurso já está desbloqueado",
  EE = () => "此功能已解锁",
  OE = () => "Diese Funktion ist bereits freigeschaltet",
  TE = () => "Esta función ya está desbloqueada",
  kE = () => "Cette fonctionnalité est déjà débloquée",
  qE = () => "Questa funzione è già sbloccata",
  AE = () => "この機能はすでにロック解除されています",
  SE = () => "Ta funkcja jest już odblokowana",
  NE = () => "Эта возможность уже разблокирована",
  IE = () => "Цю можливість уже розблоковано",
  RE = () => "Tính năng này đã được mở khóa",
  yt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? vE() : e === "pt" ? bE() : e === "ch" ? EE() : e === "de" ? OE() : e === "es" ? TE() : e === "fr" ? kE() : e === "it" ? qE() : e === "jp" ? AE() : e === "pl" ? SE() : e === "ru" ? NE() : e === "uk" ? IE() : RE()
  },
  DE = () => "This alliance color requires Better Pallet",
  PE = () => "Esta cor da aliança requer a Paleta melhorada",
  xE = () => "此联盟颜色需要高级调色板",
  jE = () => "Diese Allianzfarbe erfordert Bessere Palette",
  zE = () => "Este color de alianza requiere la Paleta mejorada",
  LE = () => "Cette couleur d'alliance nécessite la Palette améliorée",
  UE = () => "Questo colore dell'alleanza richiede la Tavolozza migliorata",
  CE = () => "このアライアンスカラーにはパレット強化が必要です",
  ME = () => "Ten kolor sojuszu wymaga Ulepszonej palety",
  BE = () => "Этот цвет альянса требует Улучшенную палитру",
  KE = () => "Цей колір альянсу потребує Покращеної палітри",
  $E = () => "Màu liên minh này cần Bảng màu nâng cao",
  vt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? DE() : e === "pt" ? PE() : e === "ch" ? xE() : e === "de" ? jE() : e === "es" ? zE() : e === "fr" ? LE() : e === "it" ? UE() : e === "jp" ? CE() : e === "pl" ? ME() : e === "ru" ? BE() : e === "uk" ? KE() : $E()
  },
  FE = () => "Enter a different alliance name",
  HE = () => "Informe um nome diferente",
  GE = () => "请输入不同的联盟名称",
  VE = () => "Gib einen anderen Allianznamen ein",
  YE = () => "Introduce un nombre de alianza diferente",
  WE = () => "Saisissez un nom d'alliance différent",
  JE = () => "Inserisci un nome diverso per l'alleanza",
  QE = () => "別のアライアンス名を入力してください",
  XE = () => "Podaj inną nazwę sojuszu",
  ZE = () => "Введите другое название альянса",
  eO = () => "Введіть іншу назву альянсу",
  tO = () => "Nhập một tên liên minh khác",
  rO = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? FE() : e === "pt" ? HE() : e === "ch" ? GE() : e === "de" ? VE() : e === "es" ? YE() : e === "fr" ? WE() : e === "it" ? JE() : e === "jp" ? QE() : e === "pl" ? XE() : e === "ru" ? ZE() : e === "uk" ? eO() : tO()
  },
  nO = () => "A description change credit is required",
  aO = () => "É necessário um crédito de alteração da descrição",
  iO = () => "需要一次描述修改额度",
  sO = () => "Dafür wird ein Guthaben für Beschreibungsänderungen benötigt",
  oO = () => "Se necesita un crédito de cambio de descripción",
  cO = () => "Un crédit de modification de la description est requis",
  uO = () => "Serve un credito di modifica della descrizione",
  lO = () => "説明変更クレジットが必要です",
  _O = () => "Wymagany jest kredyt zmiany opisu",
  dO = () => "Нужен кредит на изменение описания",
  fO = () => "Потрібен кредит на зміну опису",
  hO = () => "Cần một lượt đổi mô tả",
  pO = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? nO() : e === "pt" ? aO() : e === "ch" ? iO() : e === "de" ? sO() : e === "es" ? oO() : e === "fr" ? cO() : e === "it" ? uO() : e === "jp" ? lO() : e === "pl" ? _O() : e === "ru" ? dO() : e === "uk" ? fO() : hO()
  },
  mO = () => "The description contains unsupported Markdown or an unsafe link",
  gO = () => "A descrição contém Markdown não suportado ou um link inseguro",
  wO = () => "描述中包含不受支持的 Markdown 或不安全的链接",
  yO = () => "Die Beschreibung enthält nicht unterstütztes Markdown oder einen unsicheren Link",
  vO = () => "La descripción contiene Markdown no compatible o un enlace inseguro",
  bO = () => "La description contient du Markdown non pris en charge ou un lien non sécurisé",
  EO = () => "La descrizione contiene Markdown non supportato o un link non sicuro",
  OO = () => "説明に未対応のMarkdownまたは安全でないリンクが含まれています",
  TO = () => "Opis zawiera nieobsługiwany Markdown lub niebezpieczny link",
  kO = () => "Описание содержит неподдерживаемый Markdown или небезопасную ссылку",
  qO = () => "Опис містить непідтримуваний Markdown або небезпечне посилання",
  AO = () => "Mô tả chứa Markdown không được hỗ trợ hoặc liên kết không an toàn",
  SO = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? mO() : e === "pt" ? gO() : e === "ch" ? wO() : e === "de" ? yO() : e === "es" ? vO() : e === "fr" ? bO() : e === "it" ? EO() : e === "jp" ? OO() : e === "pl" ? TO() : e === "ru" ? kO() : e === "uk" ? qO() : AO()
  },
  NO = () => "This member already has access to the draft",
  IO = () => "Este membro já tem acesso ao rascunho",
  RO = () => "该成员已拥有此草稿的权限",
  DO = () => "Dieses Mitglied hat bereits Zugriff auf den Entwurf",
  PO = () => "Este miembro ya tiene acceso al borrador",
  xO = () => "Ce membre a déjà accès au brouillon",
  jO = () => "Questo membro ha già accesso alla bozza",
  zO = () => "このメンバーはすでにこの下書きにアクセスできます",
  LO = () => "Ten członek ma już dostęp do szkicu",
  UO = () => "У этого участника уже есть доступ к черновику",
  CO = () => "Цей учасник уже має доступ до чернетки",
  MO = () => "Thành viên này đã có quyền truy cập bản nháp",
  BO = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? NO() : e === "pt" ? IO() : e === "ch" ? RO() : e === "de" ? DO() : e === "es" ? PO() : e === "fr" ? xO() : e === "it" ? jO() : e === "jp" ? zO() : e === "pl" ? LO() : e === "ru" ? UO() : e === "uk" ? CO() : MO()
  },
  KO = () => "Unequip this version before removing it",
  $O = () => "Desequipe esta versão antes de removê-la",
  FO = () => "移除前请先卸下此版本",
  HO = () => "Lege diese Version ab, bevor du sie entfernst",
  GO = () => "Desequipa esta versión antes de eliminarla",
  VO = () => "Déséquipez cette version avant de la retirer",
  YO = () => "Disequipaggia questa versione prima di rimuoverla",
  WO = () => "削除する前に、このバージョンの装備を解除してください",
  JO = () => "Zdejmij tę wersję przed jej usunięciem",
  QO = () => "Снимите эту версию перед удалением",
  XO = () => "Зніміть цю версію перед видаленням",
  ZO = () => "Hãy gỡ trang bị phiên bản này trước khi xóa",
  eT = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? KO() : e === "pt" ? $O() : e === "ch" ? FO() : e === "de" ? HO() : e === "es" ? GO() : e === "fr" ? VO() : e === "it" ? YO() : e === "jp" ? WO() : e === "pl" ? JO() : e === "ru" ? QO() : e === "uk" ? XO() : ZO()
  },
  tT = () => "You are painting too quickly. Wait a moment and try again.",
  rT = () => "Você está pintando rápido demais. Espere um momento e tente novamente.",
  nT = () => "你的绘制速度过快。请稍后再试。",
  aT = () => "Du malst zu schnell. Warte einen Moment und versuche es erneut.",
  iT = () => "Estás pintando demasiado rápido. Espera un momento e inténtalo de nuevo.",
  sT = () => "Vous peignez trop vite. Attendez un instant et réessayez.",
  oT = () => "Stai dipingendo troppo in fretta. Attendi un momento e riprova.",
  cT = () => "ペイントが速すぎます。少し待ってから再度お試しください。",
  uT = () => "Malujesz zbyt szybko. Odczekaj chwilę i spróbuj ponownie.",
  lT = () => "Вы рисуете слишком быстро. Подождите немного и попробуйте снова.",
  _T = () => "Ви малюєте занадто швидко. Зачекайте трохи і спробуйте ще раз.",
  dT = () => "Bạn đang tô quá nhanh. Hãy chờ một lát rồi thử lại.",
  bt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? tT() : e === "pt" ? rT() : e === "ch" ? nT() : e === "de" ? aT() : e === "es" ? iT() : e === "fr" ? sT() : e === "it" ? oT() : e === "jp" ? cT() : e === "pl" ? uT() : e === "ru" ? lT() : e === "uk" ? _T() : dT()
  },
  fT = () => "The alliance headquarters is not unlocked yet",
  hT = () => "A sede da aliança ainda não foi desbloqueada",
  pT = () => "该联盟总部尚未解锁",
  mT = () => "Das Hauptquartier der Allianz ist noch nicht freigeschaltet",
  gT = () => "El cuartel general de la alianza aún no está desbloqueado",
  wT = () => "Le quartier général de l'alliance n'est pas encore débloqué",
  yT = () => "Il quartier generale dell'alleanza non è ancora sbloccato",
  vT = () => "アライアンスの拠点はまだ解放されていません",
  bT = () => "Siedziba sojuszu nie została jeszcze odblokowana",
  ET = () => "Штаб-квартира альянса ещё не разблокирована",
  OT = () => "Штаб-квартиру альянсу ще не розблоковано",
  TT = () => "Trụ sở của liên minh chưa được mở khóa",
  Et = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? fT() : e === "pt" ? hT() : e === "ch" ? pT() : e === "de" ? mT() : e === "es" ? gT() : e === "fr" ? wT() : e === "it" ? yT() : e === "jp" ? vT() : e === "pl" ? bT() : e === "ru" ? ET() : e === "uk" ? OT() : TT()
  },
  kT = () => "Choose the headquarters location on the map first",
  qT = () => "Escolha primeiro o local da sede no mapa",
  AT = () => "请先在地图上选择总部位置",
  ST = () => "Wähle zuerst den Standort des Hauptquartiers auf der Karte",
  NT = () => "Elige primero la ubicación del cuartel general en el mapa",
  IT = () => "Choisissez d'abord l'emplacement du quartier général sur la carte",
  RT = () => "Scegli prima la posizione del quartier generale sulla mappa",
  DT = () => "先にマップ上で拠点の場所を選択してください",
  PT = () => "Najpierw wybierz lokalizację siedziby na mapie",
  xT = () => "Сначала выберите место штаб-квартиры на карте",
  jT = () => "Спершу виберіть розташування штаб-квартири на карті",
  zT = () => "Hãy chọn vị trí trụ sở trên bản đồ trước",
  LT = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? kT() : e === "pt" ? qT() : e === "ch" ? AT() : e === "de" ? ST() : e === "es" ? NT() : e === "fr" ? IT() : e === "it" ? RT() : e === "jp" ? DT() : e === "pl" ? PT() : e === "ru" ? xT() : e === "uk" ? jT() : zT()
  },
  UT = () => "Moving the headquarters requires a Change Headquarters credit",
  CT = () => "Mover a sede requer um crédito de Mudar Sede",
  MT = () => "移动总部需要一张“迁移总部”凭证",
  BT = () => 'Zum Verlegen des Hauptquartiers wird ein Gutschein "Hauptquartier verlegen" benötigt',
  KT = () => "Mover el cuartel general requiere un crédito de Cambiar cuartel general",
  $T = () => "Déplacer le quartier général nécessite un crédit Changement de quartier général",
  FT = () => "Spostare il quartier generale richiede un credito Cambia quartier generale",
  HT = () => "拠点の移動には「拠点の変更」クレジットが必要です",
  GT = () => "Przeniesienie siedziby wymaga kredytu Zmiana Siedziby",
  VT = () => 'Для переноса штаб-квартиры нужен купон "Смена штаб-квартиры"',
  YT = () => 'Щоб перемістити штаб-квартиру, потрібен кредит "Змінити штаб-квартиру"',
  WT = () => "Di chuyển trụ sở cần một lượt Đổi Trụ sở",
  JT = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? UT() : e === "pt" ? CT() : e === "ch" ? MT() : e === "de" ? BT() : e === "es" ? KT() : e === "fr" ? $T() : e === "it" ? FT() : e === "jp" ? HT() : e === "pl" ? GT() : e === "ru" ? VT() : e === "uk" ? YT() : WT()
  },
  QT = () => "Headquarters sizes must be unlocked in order",
  XT = () => "Os tamanhos da sede devem ser desbloqueados em ordem",
  ZT = () => "总部尺寸必须按顺序解锁",
  ek = () => "Die Hauptquartier-Größen müssen der Reihe nach freigeschaltet werden",
  tk = () => "Los tamaños del cuartel general deben desbloquearse en orden",
  rk = () => "Les tailles du quartier général doivent être débloquées dans l'ordre",
  nk = () => "Le dimensioni del quartier generale devono essere sbloccate in ordine",
  ak = () => "拠点のサイズは順番に解放する必要があります",
  ik = () => "Rozmiary siedziby trzeba odblokowywać po kolei",
  sk = () => "Размеры штаб-квартиры нужно разблокировать по порядку",
  ok = () => "Розміри штаб-квартири потрібно розблоковувати по порядку",
  ck = () => "Các kích thước trụ sở phải được mở khóa theo thứ tự",
  uk = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? QT() : e === "pt" ? XT() : e === "ch" ? ZT() : e === "de" ? ek() : e === "es" ? tk() : e === "fr" ? rk() : e === "it" ? nk() : e === "jp" ? ak() : e === "pl" ? ik() : e === "ru" ? sk() : e === "uk" ? ok() : ck()
  },
  lk = () => "Headquarters upgrades must be unlocked in order",
  _k = () => "As melhorias da sede devem ser desbloqueadas em ordem",
  dk = () => "总部升级必须按顺序解锁",
  fk = () => "Die Hauptquartier-Verbesserungen müssen der Reihe nach freigeschaltet werden",
  hk = () => "Las mejoras del cuartel general deben desbloquearse en orden",
  pk = () => "Les améliorations du quartier général doivent être débloquées dans l'ordre",
  mk = () => "I miglioramenti del quartier generale devono essere sbloccati in ordine",
  gk = () => "拠点のアップグレードは順番に解放する必要があります",
  wk = () => "Ulepszenia siedziby trzeba odblokowywać po kolei",
  yk = () => "Улучшения штаб-квартиры нужно разблокировать по порядку",
  vk = () => "Покращення штаб-квартири потрібно розблоковувати по порядку",
  bk = () => "Các nâng cấp trụ sở phải được mở khóa theo thứ tự",
  Ek = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? lk() : e === "pt" ? _k() : e === "ch" ? dk() : e === "de" ? fk() : e === "es" ? hk() : e === "fr" ? pk() : e === "it" ? mk() : e === "jp" ? gk() : e === "pl" ? wk() : e === "ru" ? yk() : e === "uk" ? vk() : bk()
  },
  Ok = () => "Not enough headquarters charges",
  Tk = () => "Cargas da sede insuficientes",
  kk = () => "总部充能不足",
  qk = () => "Nicht genügend Hauptquartier-Ladungen",
  Ak = () => "Cargas del cuartel general insuficientes",
  Sk = () => "Charges du quartier général insuffisantes",
  Nk = () => "Cariche del quartier generale insufficienti",
  Ik = () => "拠点のチャージが足りません",
  Rk = () => "Za mało ładunków siedziby",
  Dk = () => "Недостаточно зарядов штаб-квартиры",
  Pk = () => "Недостатньо зарядів штаб-квартири",
  xk = () => "Không đủ lượt tô của trụ sở",
  jk = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ok() : e === "pt" ? Tk() : e === "ch" ? kk() : e === "de" ? qk() : e === "es" ? Ak() : e === "fr" ? Sk() : e === "it" ? Nk() : e === "jp" ? Ik() : e === "pl" ? Rk() : e === "ru" ? Dk() : e === "uk" ? Pk() : xk()
  },
  zk = () => "Nothing changed on the canvas",
  Lk = () => "Nada mudou no canvas",
  Uk = () => "画布没有任何改动",
  Ck = () => "Auf dem Canvas hat sich nichts geändert",
  Mk = () => "No cambió nada en el lienzo",
  Bk = () => "Rien n'a changé sur le canvas",
  Kk = () => "Nulla è cambiato sul canvas",
  $k = () => "キャンバスに変更はありません",
  Fk = () => "Nic się nie zmieniło na płótnie",
  Hk = () => "На холсте ничего не изменилось",
  Gk = () => "На полотні нічого не змінилося",
  Vk = () => "Không có gì thay đổi trên bảng vẽ",
  Yk = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? zk() : e === "pt" ? Lk() : e === "ch" ? Uk() : e === "de" ? Ck() : e === "es" ? Mk() : e === "fr" ? Bk() : e === "it" ? Kk() : e === "jp" ? $k() : e === "pl" ? Fk() : e === "ru" ? Hk() : e === "uk" ? Gk() : Vk()
  },
  Wk = () => "The headquarters canvas is locked by moderation",
  Jk = () => "O canvas da sede está bloqueado pela moderação",
  Qk = () => "总部画布已被审核锁定",
  Xk = () => "Der Hauptquartier-Canvas ist von der Moderation gesperrt",
  Zk = () => "El lienzo del cuartel general está bloqueado por la moderación",
  eq = () => "Le canvas du quartier général est verrouillé par la modération",
  tq = () => "Il canvas del quartier generale è bloccato dalla moderazione",
  rq = () => "拠点のキャンバスはモデレーションによりロックされています",
  nq = () => "Płótno siedziby zostało zablokowane przez moderację",
  aq = () => "Холст штаб-квартиры заблокирован модерацией",
  iq = () => "Полотно штаб-квартири заблоковано модерацією",
  sq = () => "Bảng vẽ trụ sở đang bị kiểm duyệt khóa",
  oq = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Wk() : e === "pt" ? Jk() : e === "ch" ? Qk() : e === "de" ? Xk() : e === "es" ? Zk() : e === "fr" ? eq() : e === "it" ? tq() : e === "jp" ? rq() : e === "pl" ? nq() : e === "ru" ? aq() : e === "uk" ? iq() : sq()
  },
  cq = () => "You are timed out from the headquarters canvas",
  uq = () => "Você está suspenso do canvas da sede",
  lq = () => "你已被禁言，无法在总部画布上绘制",
  _q = () => "Du hast einen Timeout für den Hauptquartier-Canvas",
  dq = () => "Estás suspendido del lienzo del cuartel general",
  fq = () => "Vous êtes suspendu du canvas du quartier général",
  hq = () => "Sei sospeso dal canvas del quartier generale",
  pq = () => "あなたは拠点のキャンバスからタイムアウトされています",
  mq = () => "Masz zawieszony dostęp do płótna siedziby",
  gq = () => "Вам выдан тайм-аут на холсте штаб-квартиры",
  wq = () => "У вас тайм-аут на полотні штаб-квартири",
  yq = () => "Bạn đang bị tạm khóa khỏi bảng vẽ trụ sở",
  vq = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? cq() : e === "pt" ? uq() : e === "ch" ? lq() : e === "de" ? _q() : e === "es" ? dq() : e === "fr" ? fq() : e === "it" ? hq() : e === "jp" ? pq() : e === "pl" ? mq() : e === "ru" ? gq() : e === "uk" ? wq() : yq()
  },
  bq = () => "A reason is required",
  Eq = () => "Um motivo é obrigatório",
  Oq = () => "必须填写原因",
  Tq = () => "Ein Grund ist erforderlich",
  kq = () => "Se requiere un motivo",
  qq = () => "Un motif est obligatoire",
  Aq = () => "Il motivo è obbligatorio",
  Sq = () => "理由は必須です",
  Nq = () => "Powód jest wymagany",
  Iq = () => "Нужно указать причину",
  Rq = () => "Потрібно вказати причину",
  Dq = () => "Cần nhập lý do",
  Ot = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? bq() : e === "pt" ? Eq() : e === "ch" ? Oq() : e === "de" ? Tq() : e === "es" ? kq() : e === "fr" ? qq() : e === "it" ? Aq() : e === "jp" ? Sq() : e === "pl" ? Nq() : e === "ru" ? Iq() : e === "uk" ? Rq() : Dq()
  },
  Pq = () => "This member already has an active headquarters timeout",
  xq = () => "Este membro já tem uma suspensão ativa da sede",
  jq = () => "该成员已有生效中的总部禁言",
  zq = () => "Dieses Mitglied hat bereits einen aktiven Hauptquartier-Timeout",
  Lq = () => "Este miembro ya tiene una suspensión activa del cuartel general",
  Uq = () => "Ce membre a déjà une suspension active du quartier général",
  Cq = () => "Questo membro ha già una sospensione attiva dal quartier generale",
  Mq = () => "このメンバーにはすでに有効な拠点のタイムアウトがあります",
  Bq = () => "Ten członek ma już aktywne zawieszenie w siedzibie",
  Kq = () => "У этого участника уже есть активный тайм-аут штаб-квартиры",
  $q = () => "Цей учасник уже має активний тайм-аут штаб-квартири",
  Fq = () => "Thành viên này đã có một lệnh tạm khóa trụ sở đang hiệu lực",
  Hq = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Pq() : e === "pt" ? xq() : e === "ch" ? jq() : e === "de" ? zq() : e === "es" ? Lq() : e === "fr" ? Uq() : e === "it" ? Cq() : e === "jp" ? Mq() : e === "pl" ? Bq() : e === "ru" ? Kq() : e === "uk" ? $q() : Fq()
  },
  Gq = () => "This timeout is no longer active",
  Vq = () => "Esta suspensão não está mais ativa",
  Yq = () => "该禁言已不再生效",
  Wq = () => "Dieser Timeout ist nicht mehr aktiv",
  Jq = () => "Esta suspensión ya no está activa",
  Qq = () => "Cette suspension n'est plus active",
  Xq = () => "Questa sospensione non è più attiva",
  Zq = () => "このタイムアウトはすでに有効ではありません",
  eA = () => "To zawieszenie nie jest już aktywne",
  tA = () => "Этот тайм-аут больше не активен",
  rA = () => "Цей тайм-аут більше не активний",
  nA = () => "Lệnh tạm khóa này không còn hiệu lực",
  aA = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Gq() : e === "pt" ? Vq() : e === "ch" ? Yq() : e === "de" ? Wq() : e === "es" ? Jq() : e === "fr" ? Qq() : e === "it" ? Xq() : e === "jp" ? Zq() : e === "pl" ? eA() : e === "ru" ? tA() : e === "uk" ? rA() : nA()
  },
  iA = () => "That user already belongs to an alliance",
  sA = () => "Esse usuário já pertence a uma aliança",
  oA = () => "该用户已属于其他联盟",
  cA = () => "Dieser Nutzer gehört bereits einer Allianz an",
  uA = () => "Ese usuario ya pertenece a una alianza",
  lA = () => "Cet utilisateur appartient déjà à une alliance",
  _A = () => "Questo utente appartiene già a un'alleanza",
  dA = () => "そのユーザーはすでに別のアライアンスに所属しています",
  fA = () => "Ten użytkownik należy już do sojuszu",
  hA = () => "Этот пользователь уже состоит в альянсе",
  pA = () => "Цей користувач уже належить до альянсу",
  mA = () => "Người dùng đó đã thuộc một liên minh",
  gA = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? iA() : e === "pt" ? sA() : e === "ch" ? oA() : e === "de" ? cA() : e === "es" ? uA() : e === "fr" ? lA() : e === "it" ? _A() : e === "jp" ? dA() : e === "pl" ? fA() : e === "ru" ? hA() : e === "uk" ? pA() : mA()
  },
  wA = () => "The alliance is not archived",
  yA = () => "A aliança não está arquivada",
  vA = () => "该联盟未被归档",
  bA = () => "Die Allianz ist nicht archiviert",
  EA = () => "La alianza no está archivada",
  OA = () => "L'alliance n'est pas archivée",
  TA = () => "L'alleanza non è archiviata",
  kA = () => "このアライアンスはアーカイブされていません",
  qA = () => "Sojusz nie jest zarchiwizowany",
  AA = () => "Альянс не находится в архиве",
  SA = () => "Альянс не архівований",
  NA = () => "Liên minh này chưa được lưu trữ",
  IA = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? wA() : e === "pt" ? yA() : e === "ch" ? vA() : e === "de" ? bA() : e === "es" ? EA() : e === "fr" ? OA() : e === "it" ? TA() : e === "jp" ? kA() : e === "pl" ? qA() : e === "ru" ? AA() : e === "uk" ? SA() : NA()
  },
  RA = () => "The selected headquarters pixels have too much history to change at once. Select fewer pixels.",
  DA = () => "Os pixels selecionados têm histórico demais para alterar de uma vez. Selecione menos pixels.",
  PA = () => "所选总部像素的历史记录过多，无法一次性修改。请减少选择的像素。",
  xA = () => "Die ausgewählten Hauptquartier-Pixel haben zu viel Verlauf, um sie auf einmal zu ändern. Wähle weniger Pixel aus.",
  jA = () => "Los píxeles seleccionados del cuartel general tienen demasiado historial para cambiarlos de una vez. Selecciona menos píxeles.",
  zA = () => "Les pixels sélectionnés du quartier général ont trop d'historique pour être modifiés en une seule fois. Sélectionnez moins de pixels.",
  LA = () => "I pixel selezionati del quartier generale hanno troppa cronologià per essere modificati in una volta. Seleziona meno pixel.",
  UA = () => "選択した拠点のピクセルは履歴が多すぎて一度に変更できません。選択するピクセルを減らしてください。",
  CA = () => "Wybrane piksele siedziby mają zbyt dużo historii, aby zmienić je naraz. Wybierz mniej pikseli.",
  MA = () => "У выбранных пикселей штаб-квартиры слишком большая история, чтобы изменить всё сразу. Выберите меньше пикселей.",
  BA = () => "Вибрані пікселі штаб-квартири мають забагато історії, щоб змінити їх за один раз. Виберіть менше пікселів.",
  KA = () => "Các pixel trụ sở đã chọn có quá nhiều lịch sử để thay đổi cùng lúc. Hãy chọn ít pixel hơn.",
  $A = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? RA() : e === "pt" ? DA() : e === "ch" ? PA() : e === "de" ? xA() : e === "es" ? jA() : e === "fr" ? zA() : e === "it" ? LA() : e === "jp" ? UA() : e === "pl" ? CA() : e === "ru" ? MA() : e === "uk" ? BA() : KA()
  },
  FA = () => "This alliance has no headquarters",
  HA = () => "Esta aliança não tem sede",
  GA = () => "该联盟没有总部",
  VA = () => "Diese Allianz hat kein Hauptquartier",
  YA = () => "Esta alianza no tiene cuartel general",
  WA = () => "Cette alliance n'a pas de quartier général",
  JA = () => "Questa alleanza non ha un quartier generale",
  QA = () => "このアライアンスには拠点がありません",
  XA = () => "Ten sojusz nie ma siedziby",
  ZA = () => "У этого альянса нет штаб-квартиры",
  eS = () => "Цей альянс не має штаб-квартири",
  tS = () => "Liên minh này không có trụ sở",
  rS = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? FA() : e === "pt" ? HA() : e === "ch" ? GA() : e === "de" ? VA() : e === "es" ? YA() : e === "fr" ? WA() : e === "it" ? JA() : e === "jp" ? QA() : e === "pl" ? XA() : e === "ru" ? ZA() : e === "uk" ? eS() : tS()
  };

function nS(r, t) {
  return (t == null ? void 0 : t.aborted) === !0 || typeof DOMException < "u" && r instanceof DOMException && r.name === "AbortError"
}
var Ee, Oe;
class aS {
  constructor(t) {
    v(this, Ee, S(!0));
    v(this, Oe, S(null));
    this.url = t
  }
  get online() {
    return E(h(this, Ee))
  }
  set online(t) {
    T(h(this, Ee), t, !0)
  }
  get serverTimeOffsetMs() {
    return E(h(this, Oe))
  }
  set serverTimeOffsetMs(t) {
    T(h(this, Oe), t, !0)
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
    const n = Math.trunc(this.getEstimatedServerNowMs());
    return e > n ? n : e
  }
  updateServerTimeEstimate(t) {
    const e = t.headers.get("date");
    if (!e) return;
    const n = new Date(e).getTime();
    Number.isFinite(n) && (this.serverTimeOffsetMs = n - Date.now())
  }
  async verifyAnticheat(t) {
    if ((await this.request("/anticheat/verify", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          sealedResults: t.base64()
        })
      })).status !== i.OK) throw new Error(o())
  }
  async guardedFetch(t, e) {
    try {
      const n = await fetch(`${this.url}${t}`, e);
      return this.online = !0, this.updateServerTimeEstimate(n), n
    } catch (n) {
      throw nS(n, e == null ? void 0 : e.signal) ? n : (console.error("Fetch error:", n), this.online = !1, new Error(Bi()))
    }
  }
  async request(t, e) {
    var c;
    e = {
      credentials: "include",
      ...e
    };
    let n = await this.guardedFetch(t, e);
    if (n.status === i.FORBIDDEN && n.headers.get("x-block-reason") === "tor") throw new Error(Og());
    const a = ((c = n.headers.get("cf-mitigated")) == null ? void 0 : c.toLowerCase()) === "challenge";
    if (n.status === 403 && a) {
      if (F.setCfLikelyAutomated(!0), !await Dt()) throw new Error(ee());
      n = await this.guardedFetch(t, e)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (n.status === i.TOO_MANY_REQUESTS) throw new ae(Zy());
      if (n.status === i.REQUEST_TIMEOUT) throw new Error(fm());
      if (n.status === i.SERVICE_UNAVAILABLE) throw new Error(Xm())
    }
    return n
  }
}
Ee = new WeakMap, Oe = new WeakMap;
class l extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}
class TN extends Error {}

function iS(r) {
  return class extends r {
    async me() {
      const t = await this.request("/me", {
        credentials: "include",
        throwOnStatus: !1
      });
      if (t.status === i.OK) return await t.json();
      if (t.status !== i.UNAUTHORIZED) throw new l(o(), t.status)
    }
    async meEmail() {
      const t = await this.request("/me/email", {
        credentials: "include"
      });
      if (t.status === i.OK) return (await t.json()).email
    }
    async logout() {
      const t = await this.request("/auth/logout", {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new Error(await t.text());
      return await t.json()
    }
    async getOtpCooldown() {
      const t = await this.request("/anticheat/otp/cooldown", {
        credentials: "include"
      });
      if (t.status !== i.OK) throw new Error(o());
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
      if (e.status === i.BAD_REQUEST) throw new Error(X_());
      if (e.status === i.CONFLICT) throw new Error(mp());
      if (e.status === i.FORBIDDEN) throw new Error(oh());
      if (e.status === i.TOO_MANY_REQUESTS) throw new Error(mt());
      if (e.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(Np());
      if (e.status === i.LOCKED) throw new Error(ow());
      if (e.status === i.UNPROCESSABLE_ENTITY) throw new Error(_d());
      if (e.status === i.NOT_ACCEPTABLE) throw new Error(vw());
      if (e.status === i.PRECONDITION_FAILED) throw new Error(Ts());
      if (e.status !== i.OK) throw new Error(o());
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
      const n = await this.request("/anticheat/challenge/verify", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(e),
        headers: {
          "x-fp": await tt()
        }
      });
      if (t.type === "otp") {
        if (n.status === i.GONE) throw new Error(iu());
        if (n.status === i.BAD_REQUEST) throw new Error(h_());
        if (n.status === i.TOO_MANY_REQUESTS) throw new Error(mt());
        if (n.status !== i.OK) throw new Error(o())
      } else {
        if (n.status === i.BAD_REQUEST) throw new Error(t_());
        if (n.status !== i.OK) throw new Error(o())
      }
    }
    async updateMe(t) {
      const e = await this.request("/me/update", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status === i.BAD_REQUEST) {
        const n = await e.json(),
          a = (n == null ? void 0 : n.error) ?? "";
        if (a === "invalid_name") throw new Error(jt());
        if (a === "invalid_discord") throw new Error(A_());
        if (typeof a == "string" && a.startsWith("name_change_cooldown:")) {
          const s = parseInt(a.split(":")[1] ?? "0", 10);
          throw new Error(jf({
            days: s
          }))
        }
        throw new Error(n == null ? void 0 : n.error)
      } else if (e.status !== i.OK) throw new Error(o())
    }
    async deleteMe(t) {
      const e = await this.request("/me", {
        method: "DELETE",
        credentials: "include",
        body: JSON.stringify({
          confirmText: t
        })
      });
      if (e.status === i.BAD_REQUEST) throw new Error(zg());
      if (e.status !== i.OK) throw new Error(o())
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
      if (e.status === i.FORBIDDEN) throw new Error(Dh());
      if (e.status !== i.OK) throw new Error(o())
    }
    async deleteFavoriteLocation(t) {
      if ((await this.request("/favorite-location/delete", {
          method: "POST",
          body: JSON.stringify({
            id: t
          }),
          credentials: "include"
        })).status !== i.OK) throw new Error(o())
    }
    async updateFavoriteLocation(t, e) {
      const n = await this.request("/favorite-location/update", {
        method: "POST",
        body: JSON.stringify({
          id: t,
          name: e
        }),
        credentials: "include"
      });
      if (n.status === i.BAD_REQUEST) throw new Error(Wd());
      if (n.status !== i.OK) throw new Error(o())
    }
    async getMyProfilePictures() {
      const t = await this.request("/me/profile-pictures", {
        credentials: "include"
      });
      if (t.status !== i.OK) throw new Error(o());
      return t.json()
    }
    async changeProfilePicture(t) {
      if ((await this.request("/me/profile-picture/change", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            pictureId: t
          })
        })).status !== i.OK) throw new Error(o())
    }
    async unlinkDiscord() {
      const t = await this.request("/discord/unlink", {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== i.NO_CONTENT) throw new l(o(), t.status)
    }
    async deleteSessions() {
      const t = await this.request("/me/sessions", {
        method: "DELETE",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status)
    }
    async deleteAllUserSessions(t) {
      const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
        method: "DELETE",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(o(), e.status)
    }
    async getMySuspensionDetails() {
      const t = await this.request("/me/suspension", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      const e = await t.json();
      return !(e != null && e.active) || !Array.isArray(e == null ? void 0 : e.punishments) ? null : {
        punishments: e.punishments.map(a => ({
          kind: (a == null ? void 0 : a.kind) === "ban" ? "ban" : "timeout",
          reason: a == null ? void 0 : a.reason,
          timeoutUntil: typeof(a == null ? void 0 : a.timeoutUntil) == "string" ? a.timeoutUntil : void 0,
          reportedLatitude: typeof(a == null ? void 0 : a.reportedLatitude) == "number" ? a.reportedLatitude : void 0,
          reportedLongitude: typeof(a == null ? void 0 : a.reportedLongitude) == "number" ? a.reportedLongitude : void 0,
          zoom: typeof(a == null ? void 0 : a.zoom) == "number" ? a.zoom : void 0,
          appealSubmitted: (a == null ? void 0 : a.appealSubmitted) === !0,
          ticketId: typeof(a == null ? void 0 : a.ticketId) == "string" ? a.ticketId : void 0
        }))
      }
    }
    async getUserPixelsPaintedToday() {
      const t = await this.request("/me/pixels-painted-today", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      const e = await t.json();
      return (e == null ? void 0 : e.paintedToday) ?? 0
    }
    async accountConflict() {
      const t = await this.request("/me/account-conflict", {
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      return await t.json()
    }
    async resolveAccountConflict(t) {
      const e = await this.request("/me/account-conflict/resolve", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          keepUserId: t
        })
      });
      switch (e.status) {
        case i.OK:
          return (await e.json()).keptUserId;
        case i.CONFLICT:
          throw (await e.json()).error === "conflict_blocked" ? new Error(jo()) : new Error(Eo());
        default:
          throw new l(o(), e.status)
      }
    }
    async markRulesAsRead() {
      return (await this.request("/me/rules/read", {
        method: "POST",
        credentials: "include"
      })).status === i.OK
    }
  }
}

function sS(r) {
  return class extends r {
    async health() {
      return (await this.request("/health")).json()
    }
    async postAdjustUserDroplets(t, e) {
      const n = await this.request("/staff/dashboard/users/adjust-user-droplets", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          delta: e
        })
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return (await n.json()).droplets
    }
    async postAdminRenameUser(t, e) {
      const n = await this.request("/staff/dashboard/users/rename", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          newName: e
        })
      });
      if (n.status === i.BAD_REQUEST) {
        const a = await n.json(),
          s = (a == null ? void 0 : a.error) ?? "";
        throw s === "invalid_name" ? new l(jt(), i.BAD_REQUEST) : new l(typeof s == "string" && s ? s : o(), i.BAD_REQUEST)
      }
      if (n.status !== i.OK) throw new l(o(), n.status)
    }
    async postAdminChangeUserEmail(t, e) {
      const n = await this.request("/staff/dashboard/users/email", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          email: e
        })
      });
      if (n.status === i.BAD_REQUEST) {
        const a = await n.json(),
          s = (a == null ? void 0 : a.error) ?? "";
        throw s === "email_required" || s === "invalid_email" ? new l(vc(), i.BAD_REQUEST) : new l(typeof s == "string" && s ? s : o(), i.BAD_REQUEST)
      }
      if (n.status === i.CONFLICT) {
        const a = await n.json();
        if (((a == null ? void 0 : a.error) ?? "") === "email_already_in_use") {
          const c = new l(typeof(a == null ? void 0 : a.userId) == "number" ? oc({
            userId: a.userId
          }) : Yo(), i.CONFLICT);
          throw typeof(a == null ? void 0 : a.userId) == "number" && (c.userId = a.userId), c
        }
        throw new l(o(), i.CONFLICT)
      }
      if (n.status === i.NOT_FOUND) throw new l("User not found.", i.NOT_FOUND);
      if (n.status !== i.OK) throw new l(o(), n.status)
    }
    async getAdminUserProfilePictures(t) {
      const e = await this.request(`/staff/dashboard/users/profile-pictures?userId=${t}`, {
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
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
      if (e.status !== i.OK) throw new l(o(), e.status)
    }
    async postAdminRerollUserAvatar(t) {
      const e = await this.request("/staff/dashboard/users/reroll-avatar", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
      return e.json()
    }
    async banUsers(t, e, n) {
      const a = await this.request("/staff/dashboard/summary/users/ban", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: t,
          reason: e,
          notes: n
        })
      });
      if (a.status !== i.OK) throw new l(o(), a.status)
    }
    async timeoutUsers(t, e, n) {
      const a = await this.request("/staff/dashboard/summary/users/timeout", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: t,
          reason: e,
          notes: n
        })
      });
      if (a.status !== i.OK) throw new l(o(), a.status)
    }
    async incrementUsersDroplets(t, e, n) {
      const a = await this.request("/staff/dashboard/summary/users/increment-droplet", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: t,
          delta: e,
          notes: n
        })
      });
      if (a.status !== i.OK) throw new l(o(), a.status)
    }
    async reloadPunishmentCache() {
      const t = await this.request("/staff/dashboard/summary/reload-punishment-cache", {
        method: "POST",
        credentials: "include"
      });
      if (t.status === i.CONFLICT) throw new l(On(), t.status);
      if (t.status !== i.OK && t.status !== i.ACCEPTED) throw new l(o(), t.status)
    }
    async postUnbanUsers(t, e) {
      const n = await this.request("/staff/dashboard/summary/users/unban", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: t,
          notes: e
        })
      });
      if (n.status !== i.OK) throw new l(o(), n.status)
    }
    async postAnticheatUnbanUsers(t, e) {
      const n = await this.request("/staff/dashboard/anticheat/unban", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: t,
          notes: e
        })
      });
      if (n.status !== i.OK) throw new l(o(), n.status)
    }
    async postAnticheatBanUsers(t, e, n) {
      const a = await this.request("/staff/dashboard/anticheat/ban", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: t,
          notes: e,
          reason: n
        })
      });
      if (a.status !== i.OK) throw new l(o(), a.status)
    }
    async postBulkPhoneVerification(t, e) {
      const n = await this.request("/staff/dashboard/summary/users/phone-verification", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: t,
          notes: e
        })
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return await n.json()
    }
    async getAuditLogs(t) {
      const e = new URLSearchParams;
      t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
      const n = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      const a = await n.json();
      return (Array.isArray(a) ? a : []).map(s => ({
        ...s,
        targetUserId: s.targetUserId ?? [],
        targetAvatarSeeds: s.targetAvatarSeeds ?? []
      }))
    }
    async postUsersSuspend(t, e, n) {
      let a;
      switch (e) {
        case "dashboard":
          a = `/staff/dashboard/users/${n}`;
          break;
        case "summary":
          a = `/staff/dashboard/summary/users/${n}`;
          break;
        case "select-area":
          a = `/staff/tools/select-area/${n}`;
          break;
        case "select-pixel":
        default:
          a = `/staff/tools/select-pixel/${n}`;
          break
      }
      if ((await this.request(a, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(t)
        })).status !== i.OK) throw new Error(o())
    }
    async postSelectAreaPhoneVerification(t, e = "") {
      const n = await this.request("/staff/tools/select-area/phone-verification", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: t,
          notes: e
        })
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return await n.json()
    }
    async postDashboardUserPhoneVerification(t, e = "") {
      const n = await this.request("/staff/dashboard/users/phone-verification", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: [t],
          notes: e
        })
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return await n.json()
    }
    async postReportUserName(t) {
      const e = await this.request("/report/user/name", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
      if (e.status !== i.OK) throw new l(o(), e.status)
    }
    async postReportAllianceName(t) {
      const e = await this.request("/report/alliance/name", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          allianceId: t
        })
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
      return e.json()
    }
  }
}
const oS = [{
    tileSize: 1e3,
    zoom: 11
  }],
  cS = 4,
  uS = 6e3,
  lS = [{
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
  _S = {
    needsPhoneVerification: "needs_phone_verification"
  },
  dS = {
    Droplet: {},
    "Max. Charge": {},
    "Paint Charge": {},
    Color: {},
    Flag: {},
    "Profile Picture": {},
    FRAME: {},
    "Custom Name Font": {},
    "Custom Name Style": {}
  },
  fS = {
    android: {
      googlePlayBilling: {
        price: 1.2
      },
      appName: "live.wplace.twa"
    }
  },
  hS = {
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
  pS = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  mS = {
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
        },
        reloadPunishmentCache: "staff.dashboard.summary.reload_punishment_cache"
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
        autoReviewBan: "staff.dashboard.users.auto_review_ban",
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
        removeMember: "staff.dashboard.alliances.remove_member",
        restore: "staff.dashboard.alliances.restore",
        moderate: "staff.dashboard.alliances.moderate",
        punish: "staff.dashboard.alliances.punish"
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
      allTickets: {
        see: "staff.dashboard.all_tickets.see",
        review: "staff.dashboard.all_tickets.review"
      },
      storeManager: {
        frames: "staff.dashboard.store_manager.frames",
        fonts: "staff.dashboard.store_manager.fonts",
        styles: "staff.dashboard.store_manager.styles",
        badges: "staff.dashboard.store_manager.badges"
      },
      anticheat: {
        see: "staff.dashboard.anticheat.see",
        unban: "staff.dashboard.anticheat.unban",
        ban: "staff.dashboard.anticheat.ban"
      }
    },
    tickets: {
      assign: "staff.tickets.assign",
      closedToday: "staff.tickets.closed_today",
      openCount: "staff.tickets.open_count",
      translate: "staff.tickets.translate",
      setStatus: "staff.tickets.set_status",
      revert: "staff.tickets.revert",
      revertReview: "staff.tickets.revert_review",
      reSolve: "staff.tickets.re_solve"
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
  gS = {
    tools: {
      wayback: {
        limit: 1e4,
        hqLimit: 5e3
      }
    }
  },
  wS = {
    areaRadius: 250
  },
  yS = {
    creationCostDroplets: 25e3,
    donationDropletsPerCoin: 1e3,
    paintsPerCoin: 5e3,
    betterDescriptionCostCoins: 25,
    betterPalletCostCoins: 25,
    descriptionChangeCostCoins: 10,
    renameCostCoins: 20,
    pictureUnlockCostCoins: 50,
    bannerUnlockCostCoins: 50,
    pictureDraftCostCoins: 10,
    bannerDraftCostCoins: 10,
    headquartersUnlockCostCoins: 75,
    headquartersChangeCostCoins: 15,
    headquartersSizeCostCoins: [10, 25, 50, 75, 100],
    headquartersMaxChargeCostCoins: [5, 5, 5, 10, 10, 10, 15, 15, 15],
    headquartersChargeCooldownCostCoins: [10, 10, 15, 15, 20],
    assetPaintMaxBatchSize: 128,
    assetPaintRequestsPerMinute: 120,
    maxFeaturedAwards: 3,
    maxActiveInvites: 5,
    inviteDurationDays: [1, 7, 30],
    joinRequestRejectedCooldownHours: 72,
    joinRequestCancelledCooldownHours: 1,
    galleryPageSize: 20,
    memberPageSize: 50
  },
  H = {
    seasons: oS,
    regionSize: cS,
    refreshIntervalMs: uS,
    colors: lS,
    errors: _S,
    items: dS,
    platforms: fS,
    products: hS,
    countries: pS,
    permissions: mS,
    settings: gS,
    moderation: wS,
    alliance: yS
  },
  Ke = H,
  vS = H.seasons,
  Ut = H.seasons.length - 1,
  kN = H.seasons[Ut].zoom,
  qN = H.seasons[Ut].tileSize,
  AN = H.permissions,
  Ct = H.settings,
  bS = H.platforms.android,
  SN = bS.googlePlayBilling.price;

function NN(r) {
  return Ke.countries[r - 1]
}

function Xe(r) {
  return Xe.map.get(r)
}(r => {
  r.sharedProducts = Object.entries(Ke.products).map(([t, e]) => ({
    ...e,
    productId: t
  })).filter(t => "lookupKey" in t), r.map = ES(r.sharedProducts, t => t.lookupKey)
})(Xe || (Xe = {}));

function ES(r, t) {
  const e = new Map;
  for (const n in r) {
    const a = Reflect.get(r, n),
      s = t(a, n, r);
    e.set(s, a)
  }
  return e
}
const $e = 5e3,
  Tt = 4,
  U = 64,
  OS = 8;

function TS(r) {
  const t = r.maxX - r.minX + 1,
    e = r.maxY - r.minY + 1;
  if (t <= 0 || e <= 0) return [];
  const n = Math.min(t, $e),
    a = Math.max(1, Math.floor($e / n)),
    s = [];
  for (let c = r.minY; c <= r.maxY; c += a)
    for (let u = r.minX; u <= r.maxX; u += n) s.push({
      minX: u,
      minY: c,
      maxX: Math.min(r.maxX, u + n - 1),
      maxY: Math.min(r.maxY, c + a - 1)
    });
  return s
}

function kS(r) {
  const t = [],
    e = Math.floor(r.minX / U),
    n = Math.floor(r.maxX / U),
    a = Math.floor(r.minY / U),
    s = Math.floor(r.maxY / U);
  for (let c = a; c <= s; c += 1)
    for (let u = e; u <= n; u += 1) t.push({
      minX: Math.max(r.minX, u * U),
      minY: Math.max(r.minY, c * U),
      maxX: Math.min(r.maxX, (u + 1) * U - 1),
      maxY: Math.min(r.maxY, (c + 1) * U - 1)
    });
  return t
}

function kt(r) {
  const t = (r == null ? void 0 : r.role) ?? (r == null ? void 0 : r.alliance_role);
  return t === "mod" || t === "admin" || t === "leader" ? t : "member"
}

function qS(r) {
  return class extends r {
    async getAlliance() {
      const t = await this.request("/alliance", {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      if (t.status === i.NOT_FOUND) return;
      throw new Error(o())
    }
    async createAlliance(t) {
      const e = await this.request("/alliance", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          name: t
        })
      });
      if (e.status === i.OK) return e.json();
      if (e.status === i.BAD_REQUEST) {
        const n = await e.json();
        throw n.error === "max_characters" ? new l(lt(), e.status) : n.error === "name_taken" ? new l(ut(), e.status) : n.error == "empty_name" ? new l(wa(), e.status) : new l(o(), e.status)
      } else throw e.status === i.FORBIDDEN ? (await e.json().catch(() => ({}))).error === "not_enough_droplets" ? new Error(ft()) : new Error(ay()) : new Error(o())
    }
    async leaveAlliance() {
      if ((await this.request("/alliance/leave", {
          method: "POST",
          credentials: "include"
        })).status !== i.OK) throw new Error(o())
    }
    async updateAllianceDescription(t) {
      const e = await this.request("/alliance/update-description", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          description: t
        })
      });
      if (e.status === i.OK) return e.json();
      if (e.status === i.FORBIDDEN) throw new Error(A());
      if (e.status === i.BAD_REQUEST) {
        const n = await e.json().catch(() => ({}));
        throw new Error(n.error === "invalid_markdown" ? SO() : Gc())
      } else throw e.status === i.CONFLICT ? new Error(pO()) : new Error(o())
    }
    async getAllianceStore() {
      const t = await this.request("/alliance/store", {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      throw new Error(o())
    }
    async getAllianceCoinLedger(t) {
      const e = t ? `?before=${t}` : "",
        n = await this.request(`/alliance/economy/ledger${e}`, {
          credentials: "include"
        });
      if (n.status === i.OK) return n.json();
      throw new Error(o())
    }
    async donateToAlliance(t, e) {
      const n = await this.request("/alliance/economy/donate", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          droplets: t,
          idempotencyKey: e
        })
      });
      if (n.status === i.OK) return n.json();
      const a = await n.json().catch(() => ({}));
      throw a.error === "not_enough_droplets" ? new Error(ft()) : a.error === "invalid_donation" ? new Error(oE()) : new Error(o())
    }
    async purchaseAllianceItem(t) {
      const e = await this.request("/alliance/economy/purchase", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          itemKey: t,
          idempotencyKey: crypto.randomUUID()
        })
      });
      if (e.status === i.OK) return e.json();
      const n = await e.json().catch(() => ({}));
      throw n.error === "not_enough_alliance_coins" ? new Error(re()) : n.error === "already_unlocked" ? new Error(yt()) : n.error === "headquarters_not_unlocked" ? new Error(Et()) : n.error === "headquarters_upgrade_prerequisite" ? new Error(Ek()) : new Error(o())
    }
    async renameOwnAlliance(t) {
      const e = await this.request("/alliance/rename", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          name: t,
          idempotencyKey: crypto.randomUUID()
        })
      });
      if (e.status === i.OK) return e.json();
      const n = await e.json().catch(() => ({}));
      throw n.error === "not_enough_alliance_coins" ? new Error(re()) : n.error === "name_taken" ? new Error(ut()) : n.error === "name_unchanged" ? new Error(rO()) : n.error === "max_characters" ? new Error(lt()) : new Error(o())
    }
    async getAllianceAssets(t) {
      const e = await this.request(`/alliance/assets/${t}`, {
        credentials: "include"
      });
      if (e.status === i.OK) return e.json();
      throw new Error(o())
    }
    async createAllianceAssetDraft(t, e) {
      const n = await this.request(`/alliance/assets/${t}/drafts`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          idempotencyKey: crypto.randomUUID(),
          ...e ? {
            sourceVersionId: e
          } : {}
        })
      });
      if (n.status === i.OK) return n.json();
      throw (await n.json().catch(() => ({}))).error === "not_enough_alliance_coins" ? new Error(re()) : new Error(o())
    }
    async getAllianceAssetCanvas(t) {
      const e = await this.request(`/alliance/assets/drafts/${t}/canvas`, {
        credentials: "include"
      });
      if (e.status === i.OK) return e.json();
      throw new Error(o())
    }
    async getAllianceAssetRevision(t) {
      const e = await this.request(`/alliance/assets/drafts/${t}/canvas?metadataOnly=true`, {
        credentials: "include"
      });
      if (e.status === i.OK) return e.json();
      if (!(e.status === i.FORBIDDEN || e.status === i.NOT_FOUND)) throw new Error(o())
    }
    async paintAllianceAsset(t, e) {
      const n = JSON.stringify({
          pixels: e
        }),
        a = await this.request(`/alliance/assets/drafts/${t}/paint`, {
          method: "POST",
          credentials: "include",
          headers: await F.getHeaders(n),
          body: n
        }).catch(c => {
          throw c instanceof ae ? new ae(bt()) : c
        });
      if (a.status === i.OK) return a.json();
      const s = await a.json().catch(() => ({}));
      if (s.error === "challenge-required" && s.tier) {
        if (await se(s.tier)) return this.paintAllianceAsset(t, e);
        throw new Error(ee())
      }
      if (s.error === "verification-required") {
        const c = await We().get();
        if (!c.sealed_result) throw new Error(o());
        return await this.verifyAnticheat(c.sealed_result), this.paintAllianceAsset(t, e)
      }
      throw s.error === "color-not-owned" ? new Error(vt()) : new Error(o())
    }
    async finishAllianceAssetDraft(t, e) {
      const n = await this.request(`/alliance/assets/drafts/${t}/finish`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          publish: e
        })
      });
      if (n.status === i.OK) return n.json();
      throw new Error(o())
    }
    async equipAllianceAssetVersion(t) {
      if ((await this.request(`/alliance/assets/versions/${t}/select`, {
          method: "POST",
          credentials: "include"
        })).status !== i.OK) throw new Error(o())
    }
    async unequipAllianceAsset(t) {
      if ((await this.request(`/alliance/assets/${t}/unpublish`, {
          method: "POST",
          credentials: "include"
        })).status !== i.OK) throw new Error(o())
    }
    async deleteAllianceAssetVersion(t) {
      const e = await this.request(`/alliance/assets/versions/${t}`, {
        method: "DELETE",
        credentials: "include"
      });
      if (e.status !== i.OK) throw (await e.json().catch(() => ({}))).error === "asset_version_selected" ? new Error(eT()) : new Error(o())
    }
    async getAllianceAssetEditors(t) {
      const e = await this.request(`/alliance/assets/drafts/${t}/editors`, {
        credentials: "include"
      });
      if (e.status === i.OK) return e.json();
      throw new Error(o())
    }
    async grantAllianceAssetEditor(t, e) {
      const n = await this.request(`/alliance/assets/drafts/${t}/editors`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: e
        })
      });
      if (n.status !== i.OK) throw (await n.json().catch(() => ({}))).error === "editor_already_granted" ? new Error(BO()) : new Error(o())
    }
    async revokeAllianceAssetEditor(t, e) {
      if ((await this.request(`/alliance/assets/drafts/${t}/editors/${e}`, {
          method: "DELETE",
          credentials: "include"
        })).status !== i.OK) throw new Error(o())
    }
    async copyAllianceAssetEditors(t, e) {
      const n = await this.request(`/alliance/assets/drafts/${t}/editors/copy`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          sourceDraftId: e
        })
      });
      if (n.status === i.OK) return n.json();
      throw new Error(o())
    }
    async getAllianceAwards(t, e = 0) {
      const n = await this.request(`/alliances/${t}/awards?page=${e}`, {});
      if (n.status === i.OK) return n.json();
      throw new Error(o())
    }
    async setAllianceFeaturedAwards(t) {
      if ((await this.request("/alliance/awards/featured", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            awardKeys: t
          })
        })).status !== i.OK) throw new Error(o())
    }
    async updateAllianceHeadquarters(t, e) {
      const n = await this.request("/alliance/update-headquarters", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          latitude: t,
          longitude: e
        })
      });
      if (n.status === i.OK) return;
      if (n.status === i.FORBIDDEN) throw new Error(A());
      const a = await n.json().catch(() => ({}));
      throw a.error === "headquarters_credit_required" ? new Error(JT()) : a.error === "headquarters_not_unlocked" ? new Error(Et()) : new Error(o())
    }
    async getAllianceHeadquarters() {
      const t = await this.request("/alliance/headquarters", {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      throw new Error(o())
    }
    async getAllianceHeadquartersCanvas(t = {}) {
      const e = new URLSearchParams;
      t.metadataOnly && e.set("metadataOnly", "true"), t.viewport && (e.set("minX", String(t.viewport.minX)), e.set("minY", String(t.viewport.minY)), e.set("maxX", String(t.viewport.maxX)), e.set("maxY", String(t.viewport.maxY)));
      const n = e.size > 0 ? `?${e}` : "",
        a = await this.request(`/alliance/headquarters/canvas${n}`, {
          credentials: "include",
          signal: t.signal
        });
      if (a.status === i.OK) return a.json();
      throw new Error(o())
    }
    async getAllianceHeadquartersManifest(t = {}) {
      return this.getAllianceHeadquartersManifestAt("/alliance/headquarters/manifest", t)
    }
    async getPublicAllianceHeadquartersManifest(t, e = {}) {
      return this.getAllianceHeadquartersManifestAt(`/alliances/${t}/headquarters/manifest`, e)
    }
    async getAllianceHeadquartersManifestAt(t, e) {
      const n = new URLSearchParams;
      e.metadataOnly && n.set("metadataOnly", "true"), e.viewport && (n.set("minX", String(e.viewport.minX)), n.set("minY", String(e.viewport.minY)), n.set("maxX", String(e.viewport.maxX)), n.set("maxY", String(e.viewport.maxY)));
      const a = n.size > 0 ? `?${n}` : "",
        s = await this.request(`${t}${a}`, {
          credentials: "include",
          signal: e.signal
        });
      if (s.status === i.OK) return s.json();
      throw new l(o(), s.status)
    }
    async getAllianceHeadquartersSnapshot(t, e, n) {
      return this.getAllianceHeadquartersSnapshotAt("/alliance/headquarters/snapshot", t, e, "include", n)
    }
    async getPublicAllianceHeadquartersSnapshot(t, e, n, a) {
      return this.getAllianceHeadquartersSnapshotAt(`/alliances/${t}/headquarters/snapshot`, e, n, "omit", a)
    }
    async getAllianceHeadquartersSnapshotAt(t, e, n, a, s) {
      const c = await this.request(t, {
        method: "POST",
        credentials: a,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...e,
          knownTiles: n
        }),
        signal: s
      });
      if (c.status === i.OK) return c.arrayBuffer();
      throw new l(o(), c.status)
    }
    async unlockAllianceHeadquarters(t) {
      const e = await this.request("/alliance/headquarters/unlock", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          idempotencyKey: crypto.randomUUID(),
          ...t ?? {}
        })
      });
      if (e.status === i.OK) return e.json();
      const n = await e.json().catch(() => ({}));
      throw n.error === "not_enough_alliance_coins" ? new Error(re()) : n.error === "already_unlocked" ? new Error(yt()) : n.error === "headquarters_anchor_required" ? new Error(LT()) : new Error(o())
    }
    async expandAllianceHeadquarters(t) {
      const e = await this.request("/alliance/headquarters/expand", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          idempotencyKey: crypto.randomUUID(),
          size: t
        })
      });
      if (e.status === i.OK) return e.json();
      const n = await e.json().catch(() => ({}));
      throw n.error === "not_enough_alliance_coins" ? new Error(re()) : n.error === "headquarters_size_prerequisite" ? new Error(uk()) : new Error(o())
    }
    async paintAllianceHeadquarters(t, e = crypto.randomUUID()) {
      const n = JSON.stringify({
          batchId: e,
          pixels: t
        }),
        a = await this.request("/alliance/headquarters/paint", {
          method: "POST",
          credentials: "include",
          headers: await F.getHeaders(n),
          body: n
        }).catch(c => {
          throw c instanceof ae ? new ae(bt()) : c
        });
      if (a.status === i.OK) return a.json();
      const s = await a.json().catch(() => ({}));
      if (s.error === "challenge-required" && s.tier) {
        if (await se(s.tier)) return this.paintAllianceHeadquarters(t, e);
        throw new Error(ee())
      }
      if (s.error === "verification-required") {
        const c = await We().get();
        if (!c.sealed_result) throw new Error(o());
        return await this.verifyAnticheat(c.sealed_result), this.paintAllianceHeadquarters(t, e)
      }
      throw s.error === "color-not-owned" ? new Error(vt()) : s.error === "not_enough_hq_charges" ? new Error(jk()) : s.error === "headquarters_timed_out" ? new Error(vq()) : s.error === "headquarters_locked" ? new Error(oq()) : s.error === "no_pixel_changes" ? new Error(Yk()) : new Error(o())
    }
    async getAllianceHqPixelInfo(t, e) {
      const n = await this.request(`/alliance/headquarters/pixel?x=${t}&y=${e}`, {
        credentials: "include"
      });
      if (n.status === i.OK) return n.json();
      throw new Error(o())
    }
    async getAllianceHqTimeouts(t) {
      const e = t ? `?before=${t}` : "",
        n = await this.request(`/alliance/headquarters/timeouts${e}`, {
          credentials: "include"
        });
      if (n.status === i.OK) return n.json();
      throw new Error(o())
    }
    async createAllianceHqTimeout(t, e, n) {
      const a = await this.request("/alliance/headquarters/timeouts", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          duration: e,
          reason: n
        })
      });
      if (a.status === i.OK) return a.json();
      if (a.status === i.FORBIDDEN) throw new Error(A());
      const s = await a.json().catch(() => ({}));
      throw s.error === "headquarters_timeout_active" ? new Error(Hq()) : s.error === "invalid_timeout_reason" ? new Error(Ot()) : new Error(o())
    }
    async revokeAllianceHqTimeout(t, e) {
      const n = await this.request(`/alliance/headquarters/timeouts/${t}`, {
        method: "DELETE",
        credentials: "include",
        body: JSON.stringify({
          reason: e
        })
      });
      if (n.status === i.OK) return;
      if (n.status === i.FORBIDDEN) throw new Error(A());
      const a = await n.json().catch(() => ({}));
      throw a.error === "headquarters_timeout_inactive" ? new Error(aA()) : a.error === "invalid_timeout_reason" ? new Error(Ot()) : new Error(o())
    }
    async getPublicAllianceHeadquarters(t) {
      const e = await this.request(`/alliances/${t}/headquarters`, {});
      if (e.status === i.OK) return e.json();
      if (e.status !== i.NOT_FOUND) throw new Error(o())
    }
    async allianceLeaderboard(t) {
      const e = await this.request(`/alliance/leaderboard/${t}`, {
        credentials: "include"
      });
      if (e.status === i.OK) return e.json();
      throw e.status === i.FORBIDDEN ? new Error(A()) : new Error(V())
    }
    async getAllianceInvites() {
      const t = await this.request("/alliance/invites", {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      throw t.status === i.FORBIDDEN ? new Error(A()) : new Error(o())
    }
    async createAllianceInvite(t) {
      const e = await this.request("/alliance/invites", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          durationDays: t.durationDays,
          maxUses: t.maxUses ?? null
        })
      });
      if (e.status === i.OK) return e.json();
      throw e.status === i.BAD_REQUEST ? (await e.json().catch(() => ({}))).error === "max_invites" ? new Error(jb()) : new Error(o()) : e.status === i.FORBIDDEN ? new Error(A()) : new Error(o())
    }
    async revokeAllianceInvite(t) {
      const e = await this.request(`/alliance/invites/${t}/revoke`, {
        method: "POST",
        credentials: "include"
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(A()) : new Error(o())
    }
    async getAllianceGallery(t) {
      const e = new URLSearchParams({
        sort: t.sort,
        page: String(t.page)
      });
      t.query && e.set("q", t.query), t.joinPolicy && e.set("joinPolicy", t.joinPolicy);
      const n = await this.request(`/alliances?${e.toString()}`, {});
      if (n.status === i.OK) return n.json();
      throw new Error(o())
    }
    async getPublicAllianceHeadquartersPins(t) {
      const e = new URLSearchParams({
          minLat: t.minLat.toFixed(5),
          maxLat: t.maxLat.toFixed(5),
          minLng: t.minLng.toFixed(5),
          maxLng: t.maxLng.toFixed(5)
        }),
        n = await this.request(`/alliances/headquarters/pins?${e.toString()}`, {});
      if (n.status === i.OK) return n.json();
      throw new Error(o())
    }
    async getPublicAlliance(t) {
      const e = await this.request(`/alliances/${t}`, {});
      if (e.status === i.OK) return e.json();
      if (e.status === i.NOT_FOUND) return;
      throw new Error(o())
    }
    async getPublicAllianceMembers(t, e) {
      const n = new URLSearchParams({
        page: String(e.page),
        role: e.role,
        sort: e.sort
      });
      e.query && n.set("q", e.query);
      const a = await this.request(`/alliances/${t}/members?${n.toString()}`, {});
      if (a.status === i.OK) return a.json();
      throw new Error(o())
    }
    async getAllianceViewerState(t) {
      const e = await this.request(`/alliances/${t}/viewer`, {
        credentials: "include"
      });
      if (e.status === i.OK) return e.json();
      if (e.status === i.UNAUTHORIZED) return;
      throw new Error(o())
    }
    async directJoinAlliance(t) {
      const e = await this.request(`/alliances/${t}/join`, {
        method: "POST",
        credentials: "include"
      });
      return this.mapJoinOutcome(e)
    }
    async requestJoinAlliance(t) {
      const e = await this.request(`/alliances/${t}/request`, {
        method: "POST",
        credentials: "include"
      });
      return e.status === i.TOO_MANY_REQUESTS ? "cooldown" : this.mapJoinOutcome(e)
    }
    async mapJoinOutcome(t) {
      switch (t.status) {
        case i.OK:
          return "success";
        case i.FORBIDDEN:
          return (await t.json().catch(() => ({}))).error === "banned" ? "banned" : "policy";
        case i.CONFLICT:
          return "in-alliance";
        case i.NOT_FOUND:
          return "not-found";
        default:
          return "error"
      }
    }
    async cancelAllianceJoinRequest(t) {
      const e = await this.request(`/alliance/join-requests/${t}/cancel`, {
        method: "POST",
        credentials: "include"
      });
      if (e.status !== i.OK && e.status !== i.CONFLICT) throw new Error(o())
    }
    async getAllianceJoinRequests(t) {
      const e = await this.request(`/alliance/join-requests?page=${t}`, {
        credentials: "include"
      });
      if (e.status === i.OK) return e.json();
      throw e.status === i.FORBIDDEN ? new Error(A()) : new Error(o())
    }
    async reviewAllianceJoinRequest(t, e) {
      const n = await this.request(`/alliance/join-requests/${t}/review`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          accept: e
        })
      });
      if (n.status === i.OK) return "success";
      if (n.status === i.CONFLICT) return "stale";
      throw n.status === i.FORBIDDEN ? new Error(A()) : new Error(o())
    }
    async kickAllianceMember(t) {
      const e = await this.request("/alliance/kick", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          kickedUserId: t
        })
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(A()) : new Error(o())
    }
    async removeAllianceAdmin(t) {
      const e = await this.request("/alliance/remove-admin", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          demotedUserId: t
        })
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(A()) : new Error(o())
    }
    async setOwnAllianceMemberRole(t, e) {
      const n = await this.request(`/alliance/members/${t}/role`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          role: e
        })
      });
      if (n.status !== i.OK) throw n.status === i.FORBIDDEN ? new Error(A()) : new Error(o())
    }
    async getAllianceRolePermissions() {
      const t = await this.request("/alliance/role-permissions", {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      throw t.status === i.FORBIDDEN ? new Error(A()) : new Error(o())
    }
    async updateAllianceRolePermissions(t) {
      const e = await this.request("/alliance/role-permissions", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          roles: t
        })
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(A()) : new Error(o())
    }
    async transferAllianceLeadership(t) {
      const e = await this.request("/alliance/transfer-leadership", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          newLeaderUserId: t
        })
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(A()) : new Error(o())
    }
    async updateAllianceSettings(t) {
      const e = await this.request("/alliance/settings", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(A()) : new Error(o())
    }
    async setAllianceDiscordInvite(t) {
      const e = await this.request("/alliance/discord-invite", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          url: t
        })
      });
      if (e.status !== i.OK) {
        {
          if (e.status === i.BAD_REQUEST) throw new Error(Yb());
          if (e.status === i.FORBIDDEN) throw new Error(A())
        }
        throw new Error(o())
      }
    }
    async getAllianceActivity(t) {
      const e = t ? `?cursor=${t}` : "",
        n = await this.request(`/alliance/activity${e}`, {
          credentials: "include"
        });
      if (n.status === i.OK) return n.json();
      throw n.status === i.FORBIDDEN ? new Error(A()) : new Error(o())
    }
    async getAllianceNotificationPreferences() {
      const t = await this.request("/alliance/notification-preferences", {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      throw new Error(o())
    }
    async setAllianceNotificationPreference(t, e) {
      if ((await this.request("/alliance/notification-preferences", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            category: t,
            enabled: e
          })
        })).status !== i.OK) throw new Error(o())
    }
    async reportAlliance(t) {
      const e = JSON.stringify({
          allianceId: t.allianceId,
          target: t.target,
          targetId: t.targetId ?? 0,
          eventHwm: t.eventHwm,
          area: t.area,
          zoom: t.zoom,
          viewport: t.viewport,
          reason: t.reason,
          notes: t.notes ?? ""
        }),
        n = await this.request("/report/alliance", {
          method: "POST",
          credentials: "include",
          headers: await F.getHeaders(e),
          body: e
        });
      if (n.status === i.OK) return n.json();
      if (n.status === i.FORBIDDEN) {
        const a = await n.json().catch(() => ({}));
        if (a.error === "challenge-required" && a.tier) {
          if (await se(a.tier)) return this.reportAlliance(t);
          throw new Error(ee())
        }
      }
      throw new Error(em())
    }
    async joinAlliance(t) {
      switch ((await this.request(`/alliance/join/${t}`, {
          method: "POST",
          credentials: "include"
        })).status) {
        case i.OK:
          return "success";
        case i.ALREADY_REPORTED:
          return "in-another-alliance";
        case i.UNAUTHORIZED:
          return "not-logged-in";
        case i.FORBIDDEN:
          return "banned";
        case i.BAD_REQUEST:
        case i.NOT_FOUND:
          return "invalid-invite";
        default:
          return "error"
      }
    }
    async getAllianceMembers(t) {
      const e = new URLSearchParams({
        role: t.role,
        sort: t.sort
      });
      t.query && e.set("q", t.query);
      const n = await this.request(`/alliance/members/${t.page}?${e.toString()}`, {
        credentials: "include"
      });
      if (n.status === i.OK) return n.json();
      throw new Error(o())
    }
    async getAllianceBannedMembers(t) {
      const e = new URLSearchParams({
        sort: t.sort
      });
      t.query && e.set("q", t.query);
      const n = await this.request(`/alliance/members/banned/${t.page}?${e.toString()}`, {
        credentials: "include"
      });
      if (n.status === i.OK) return n.json();
      throw new Error(o())
    }
    async getAllianceById(t) {
      const e = await this.request(`/staff/dashboard/alliances/${t}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status === i.NOT_FOUND) return;
      if (e.status !== i.OK) throw new l(o(), e.status);
      const n = await e.json();
      return {
        id: Number(n.id),
        name: String(n.name),
        avatarSeed: (n == null ? void 0 : n.avatarSeed) || void 0,
        pictureVersionId: (n == null ? void 0 : n.pictureVersionId) ?? void 0,
        pixelsPainted: Number((n == null ? void 0 : n.pixels_painted) ?? 0)
      }
    }
    async searchAlliance(t) {
      const e = new URLSearchParams({
          q: t
        }),
        n = await this.request(`/staff/dashboard/alliances/search?${e.toString()}`, {
          method: "GET",
          credentials: "include"
        });
      if (n.status !== i.OK) throw new l(o(), n.status);
      const a = await n.json();
      return (Array.isArray(a) ? a : []).map(s => ({
        id: Number(s.id),
        name: String(s.name ?? ""),
        avatarSeed: (s == null ? void 0 : s.avatarSeed) || void 0,
        pictureVersionId: (s == null ? void 0 : s.pictureVersionId) ?? void 0,
        pixelsPainted: Number((s == null ? void 0 : s.pixels_painted) ?? 0)
      }))
    }
    async searchAlliances(t) {
      return this.searchAlliance(t)
    }
    async getAdminAllianceAwards(t) {
      const e = await this.request(`/staff/dashboard/alliances/${t}/awards`, {
        credentials: "include"
      });
      if (e.status === i.OK) return e.json();
      throw new Error(o())
    }
    async getAdminAllianceAssets(t) {
      const e = await this.request(`/staff/dashboard/alliances/${t}/assets`, {
        credentials: "include"
      });
      if (e.status === i.OK) return e.json();
      throw new Error(o())
    }
    async getAdminAllianceAssetEvents(t, e, n) {
      const a = n ? `?before=${n}` : "",
        s = await this.request(`/staff/dashboard/alliances/${t}/assets/drafts/${e}/events${a}`, {
          credentials: "include"
        });
      if (s.status === i.OK) return s.json();
      throw new Error(o())
    }
    async moderateAdminAllianceAssetVersion(t, e, n, a) {
      if ((await this.request(`/staff/dashboard/alliances/${t}/assets/versions/${e}/moderation`, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            ...n,
            reason: a
          })
        })).status !== i.OK) throw new Error(o())
    }
    async moderateAdminAllianceAssetDraft(t, e, n, a) {
      if ((await this.request(`/staff/dashboard/alliances/${t}/assets/drafts/${e}/moderation`, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            ...n,
            reason: a
          })
        })).status !== i.OK) throw new Error(o())
    }
    async getAllianceHqWaybackEvents(t, e) {
      const n = new URLSearchParams;
      n.set("limit", String((e == null ? void 0 : e.limit) ?? Ct.tools.wayback.hqLimit)), e != null && e.before && n.set("before", String(e.before)), e != null && e.area && (n.set("minX", String(e.area.minX)), n.set("minY", String(e.area.minY)), n.set("maxX", String(e.area.maxX)), n.set("maxY", String(e.area.maxY)));
      const a = await this.request(`/staff/dashboard/alliances/${t}/headquarters/events?${n.toString()}`, {
        credentials: "include"
      });
      if (a.status === i.NOT_FOUND) throw new Error(ub());
      if (a.status !== i.OK) throw new Error(o());
      return a.json()
    }
    async getAdminAllianceHqArea(t, e) {
      const n = TS(e);
      if (n.length === 0) throw new Error(o());
      const a = await this.getAdminAllianceHqAreaChunk(t, n[0]),
        s = [...a.pixels];
      for (let c = 1; c < n.length; c += Tt) {
        const u = await Promise.all(n.slice(c, c + Tt).map(d => this.getAdminAllianceHqAreaChunk(t, d, a.eventHwm)));
        for (const d of u) s.push(...d.pixels)
      }
      return {
        ...a,
        bounds: e,
        pixels: s
      }
    }
    async getAdminAllianceHqSelectArea(t, e, n) {
      var d;
      const a = kS(e),
        s = new Array(a.length);
      let c = 0;
      const u = Array.from({
        length: Math.min(OS, a.length)
      }, async () => {
        for (; c < a.length;) {
          const f = c;
          c += 1, s[f] = await this.getAdminAllianceHqSelectAreaChunk(t, a[f], n)
        }
      });
      return await Promise.all(u), {
        bounds: e,
        eventHwm: n,
        anchor: (d = s[0]) == null ? void 0 : d.anchor,
        chunks: s
      }
    }
    async getAdminAllianceHqSelectAreaChunk(t, e, n) {
      const a = new URLSearchParams({
          minX: String(e.minX),
          minY: String(e.minY),
          maxX: String(e.maxX),
          maxY: String(e.maxY),
          eventHwm: String(n),
          format: "compact"
        }),
        s = await this.request(`/staff/dashboard/alliances/${t}/headquarters/area?${a.toString()}`, {
          credentials: "include"
        });
      if (s.status !== i.OK) throw new Error(o());
      const c = await s.arrayBuffer(),
        u = (e.maxX - e.minX + 1) * (e.maxY - e.minY + 1);
      if (c.byteLength !== u * 13) throw new Error(o());
      const d = new DataView(c),
        f = new Uint32Array(u),
        k = new Uint8Array(u),
        g = new BigUint64Array(u);
      for (let j = 0; j < u; j += 1) {
        const te = j * 13;
        f[j] = d.getUint32(te, !0), k[j] = d.getUint8(te + 4), g[j] = d.getBigUint64(te + 5, !0)
      }
      const D = s.headers.get("X-Alliance-Canvas-Anchor-Latitude"),
        x = s.headers.get("X-Alliance-Canvas-Anchor-Longitude"),
        q = Number(D),
        N = Number(x),
        I = D !== null && x !== null && Number.isFinite(q) && Number.isFinite(N) ? {
          latitude: q,
          longitude: N
        } : void 0;
      return {
        bounds: e,
        paintedBy: f,
        colors: k,
        eventIds: g,
        anchor: I
      }
    }
    async getAdminAllianceHqAreaChunk(t, e, n) {
      const a = new URLSearchParams({
        minX: String(e.minX),
        minY: String(e.minY),
        maxX: String(e.maxX),
        maxY: String(e.maxY)
      });
      n !== void 0 && a.set("eventHwm", String(n));
      const s = await this.request(`/staff/dashboard/alliances/${t}/headquarters/area?${a.toString()}`, {
        credentials: "include"
      });
      if (s.status === i.CONTENT_TOO_LARGE) throw new Error(o());
      if (s.status !== i.OK) throw new Error(o());
      return s.json()
    }
    async reverseAdminAllianceHqPixels(t, e, n, a = !1) {
      let s = 0,
        c = 0;
      for (let u = 0; u < e.length; u += $e) {
        const d = await this.reverseAdminAllianceHqPixelChunk(t, e.slice(u, u + $e), n, a);
        s += d.reversed, c = d.eventHwm
      }
      return {
        reversed: s,
        cleared: a,
        eventHwm: c
      }
    }
    async reverseAdminAllianceHqPixelChunk(t, e, n, a) {
      const s = await this.request(`/staff/dashboard/alliances/${t}/headquarters/reverse`, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            pixels: e,
            reason: n,
            clear: a
          })
        }),
        c = await s.json().catch(() => ({}));
      if (s.status === i.CONTENT_TOO_LARGE) throw new Error($A());
      if (s.status === i.NOT_FOUND) throw new Error(qm());
      if (s.status !== i.OK) throw new Error(o());
      return c
    }
    async getAllianceFull(t) {
      const e = await this.request(`/staff/dashboard/alliances/${t}/full`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status === i.NOT_FOUND) return null;
      if (e.status !== i.OK) throw new l(o(), e.status);
      const n = await e.json(),
        a = Array.isArray(n == null ? void 0 : n.members) ? n.members : [];
      return {
        id: Number(n == null ? void 0 : n.id),
        name: String((n == null ? void 0 : n.name) ?? ""),
        status: (n == null ? void 0 : n.status) === "archived" ? "archived" : "active",
        createdAt: (n == null ? void 0 : n.createdAt) ?? null,
        archivedAt: (n == null ? void 0 : n.archivedAt) ?? null,
        activeSince: (n == null ? void 0 : n.activeSince) ?? null,
        lastActivityAt: (n == null ? void 0 : n.lastActivityAt) ?? null,
        description: (n == null ? void 0 : n.description) ?? null,
        descriptionMode: (n == null ? void 0 : n.descriptionMode) === "markdown" ? "markdown" : "plain",
        avatarSeed: (n == null ? void 0 : n.avatarSeed) ?? void 0,
        discoverability: (n == null ? void 0 : n.discoverability) === "unlisted" ? "unlisted" : "public",
        joinPolicy: (n == null ? void 0 : n.joinPolicy) === "open" || (n == null ? void 0 : n.joinPolicy) === "invite_only" ? n.joinPolicy : "request",
        inviteMinRole: (n == null ? void 0 : n.inviteMinRole) === "member" || (n == null ? void 0 : n.inviteMinRole) === "leader" ? n.inviteMinRole : "admin",
        ownerId: Number((n == null ? void 0 : n.ownerId) ?? (n == null ? void 0 : n.created_by)),
        ownerName: (n == null ? void 0 : n.ownerName) ?? null,
        ownerAvatarSeed: (n == null ? void 0 : n.ownerAvatarSeed) ?? void 0,
        hqName: (n == null ? void 0 : n.hqName) ?? null,
        hqLatitude: (n == null ? void 0 : n.hqLatitude) ?? (n == null ? void 0 : n.hq_latitude) ?? null,
        hqLongitude: (n == null ? void 0 : n.hqLongitude) ?? (n == null ? void 0 : n.hq_longitude) ?? null,
        hqVisibility: (n == null ? void 0 : n.hqVisibility) ?? null,
        headquartersId: (n == null ? void 0 : n.headquartersId) ?? null,
        headquartersSize: (n == null ? void 0 : n.headquartersSize) ?? null,
        headquartersLocked: !!(n != null && n.headquartersLocked),
        pixelsPainted: Number((n == null ? void 0 : n.pixelsPainted) ?? (n == null ? void 0 : n.pixels_painted) ?? 0),
        membersCount: Number((n == null ? void 0 : n.membersCount) ?? a.length),
        coinBalance: Number((n == null ? void 0 : n.coinBalance) ?? 0),
        unlockKeys: Array.isArray(n == null ? void 0 : n.unlockKeys) ? n.unlockKeys.map(String) : [],
        currentPictureVersionId: (n == null ? void 0 : n.currentPictureVersionId) ?? null,
        currentBannerVersionId: (n == null ? void 0 : n.currentBannerVersionId) ?? null,
        discordInviteRevisionId: (n == null ? void 0 : n.discordInviteRevisionId) ?? null,
        discordInviteUrl: (n == null ? void 0 : n.discordInviteUrl) ?? null,
        discordInviteModerationState: (n == null ? void 0 : n.discordInviteModerationState) ?? null,
        members: a.map(s => ({
          id: Number(s == null ? void 0 : s.id),
          name: String((s == null ? void 0 : s.name) ?? `#${s==null?void 0:s.id}`),
          picture: (s == null ? void 0 : s.picture) ?? null,
          avatarSeed: (s == null ? void 0 : s.avatarSeed) ?? void 0,
          pixelsPainted: Number((s == null ? void 0 : s.pixelsPainted) ?? (s == null ? void 0 : s.pixels_painted) ?? 0),
          lastPixelLatitude: (s == null ? void 0 : s.lastPixelLatitude) ?? null,
          lastPixelLongitude: (s == null ? void 0 : s.lastPixelLongitude) ?? null,
          role: kt(s),
          timedOut: !!(s != null && s.timedOut),
          banned: !!(s != null && s.banned)
        }))
      }
    }
    async getAdminAllianceMembers(t, e) {
      const n = new URLSearchParams({
        page: String(e.page),
        pageSize: String(e.pageSize),
        role: e.role,
        status: e.status,
        sort: e.sort
      });
      e.query && n.set("q", e.query);
      const a = await this.request(`/staff/dashboard/alliances/${t}/members?${n.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (a.status === i.NOT_FOUND) return {
        members: [],
        total: 0,
        filteredTotal: 0
      };
      if (a.status !== i.OK) throw new l(o(), a.status);
      const s = await a.json(),
        c = Array.isArray(s == null ? void 0 : s.members) ? s.members : [];
      return {
        members: c.map(u => ({
          id: Number(u == null ? void 0 : u.id),
          name: String((u == null ? void 0 : u.name) ?? `#${u==null?void 0:u.id}`),
          picture: (u == null ? void 0 : u.picture) ?? null,
          avatarSeed: (u == null ? void 0 : u.avatarSeed) ?? void 0,
          pixelsPainted: Number((u == null ? void 0 : u.pixelsPainted) ?? (u == null ? void 0 : u.pixels_painted) ?? 0),
          lastPixelLatitude: (u == null ? void 0 : u.lastPixelLatitude) ?? null,
          lastPixelLongitude: (u == null ? void 0 : u.lastPixelLongitude) ?? null,
          role: kt(u),
          timedOut: !!(u != null && u.timedOut),
          banned: !!(u != null && u.banned)
        })),
        total: Number((s == null ? void 0 : s.total) ?? c.length),
        filteredTotal: Number((s == null ? void 0 : s.filteredTotal) ?? (s == null ? void 0 : s.total) ?? c.length)
      }
    }
    async renameAlliance(t, e) {
      const n = await this.request(`/staff/dashboard/alliances/${t}/rename`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          name: e
        })
      });
      if (n.status === i.BAD_REQUEST) {
        const a = await n.json().catch(() => ({}));
        throw new Error((a == null ? void 0 : a.error) ?? o())
      } else if (n.status !== i.OK) throw new l(o(), n.status)
    }
    async changeAllianceLeader(t, e) {
      const n = await this.request(`/staff/dashboard/alliances/${t}/leader`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          newLeaderUserId: e
        })
      });
      if (n.status === i.BAD_REQUEST) {
        const a = await n.json();
        throw (a == null ? void 0 : a.error) === "user_not_in_alliance" ? new Error(Td()) : new Error(o())
      } else if (n.status !== i.OK) throw new l(o(), n.status)
    }
    async banAllAllianceMembers(t, e, n) {
      const a = await this.request(`/staff/dashboard/alliances/${t}/ban-all`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          reason: e,
          notes: n
        })
      });
      if (a.status !== i.OK) throw new l(o(), a.status)
    }
    async setAllianceMemberRole(t, e, n) {
      const a = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          role: n
        })
      });
      if (a.status !== i.OK) throw new l(o(), a.status)
    }
    async removeAllianceMember(t, e) {
      const n = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
        method: "POST",
        credentials: "include"
      });
      if (n.status !== i.OK) throw new l(o(), n.status)
    }
    async getAdminAllianceRevisions(t, e) {
      const n = await this.request(`/staff/dashboard/alliances/${t}/revisions?kind=${e}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return n.json()
    }
    async hideAdminAllianceRevision(t, e, n) {
      const a = await this.request(`/staff/dashboard/alliances/${t}/revisions/hide`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          kind: e,
          revisionId: n
        })
      });
      if (a.status !== i.OK) throw new l(o(), a.status)
    }
    async suspendAdminAllianceVisibility(t, e) {
      const n = await this.request(`/staff/dashboard/alliances/${t}/suspend-visibility`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          discoverability: e
        })
      });
      if (n.status !== i.OK) throw new l(o(), n.status)
    }
    async moderateAdminAllianceHeadquarters(t, e, n) {
      const a = await this.request(`/staff/dashboard/alliances/${t}/headquarters/moderation`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          locked: e,
          reason: n
        })
      });
      if (a.status === i.NOT_FOUND) throw new Error(rS());
      if (a.status !== i.OK) throw new l(o(), a.status)
    }
    async restoreAdminAlliance(t, e) {
      const n = await this.request(`/staff/dashboard/alliances/${t}/restore`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          newLeaderUserId: e
        })
      });
      if (n.status === i.BAD_REQUEST) {
        const a = await n.json().catch(() => ({}));
        throw (a == null ? void 0 : a.error) === "user_not_found" ? new Error(Eb()) : (a == null ? void 0 : a.error) === "user_already_in_alliance" ? new Error(gA()) : (a == null ? void 0 : a.error) === "alliance_not_archived" ? new Error(IA()) : new Error(o())
      }
      if (n.status !== i.OK) throw new l(o(), n.status)
    }
    async archiveAdminAlliance(t) {
      const e = await this.request(`/staff/dashboard/alliances/${t}/archive`, {
        method: "POST",
        credentials: "include"
      });
      if (e.status === i.CONFLICT) return "not-empty";
      if (e.status !== i.OK) throw new l(o(), e.status);
      return "success"
    }
    async punishAdminAllianceMembers(t, e) {
      const n = await this.request(`/staff/dashboard/alliances/${t}/punish-members`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: e.userIds,
          punishmentType: e.punishmentType,
          reason: e.reason,
          ticketId: e.ticketId ?? "",
          notes: e.notes ?? ""
        })
      });
      if (n.status !== i.OK) throw new l(o(), n.status)
    }
    async giveAllianceAdmin(t) {
      const e = await this.request("/alliance/give-admin", {
        body: JSON.stringify({
          promotedUserId: t
        }),
        method: "POST",
        credentials: "include"
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(A()) : new Error(o())
    }
    async banAllianceUser(t) {
      const e = await this.request("/alliance/ban", {
        body: JSON.stringify({
          bannedUserId: t
        }),
        method: "POST",
        credentials: "include"
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(A()) : new Error(o())
    }
    async equipFlag(t) {
      if ((await this.request(`/flag/equip/${t}`, {
          method: "POST",
          credentials: "include"
        })).status !== i.OK) throw new Error(o())
    }
    async unbanAllianceUser(t) {
      const e = await this.request("/alliance/unban", {
        body: JSON.stringify({
          unbannedUserId: t
        }),
        method: "POST",
        credentials: "include"
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(A()) : new Error(o())
    }
  }
}

function AS(r) {
  return class extends r {
    async getUserAnticheat(t) {
      const e = await this.request(`/staff/dashboard/users/anticheat?id=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
      return await e.json()
    }
    async getAnticheatStats(t, e) {
      const n = await this.request(`/staff/dashboard/anticheat/stats?from=${t}&to=${e}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return n.json()
    }
    async getAnticheatSignals(t, e) {
      const n = await this.request(`/staff/dashboard/anticheat/signals?from=${t}&to=${e}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return n.json()
    }
    async getAnticheatUserJourney(t, e, n) {
      const a = await this.request(`/staff/dashboard/anticheat/user/${t}?from=${e}&to=${n}`, {
        method: "GET",
        credentials: "include"
      });
      if (a.status !== i.OK) throw new l(o(), a.status);
      return a.json()
    }
    async getAnticheatSignalAnalysis(t, e, n) {
      const a = await this.request(`/staff/dashboard/anticheat/signal/${encodeURIComponent(t)}?from=${encodeURIComponent(e)}&to=${encodeURIComponent(n)}`, {
        method: "GET",
        credentials: "include"
      });
      if (a.status !== i.OK) throw new l(o(), a.status);
      return a.json()
    }
  }
}

function SS(r) {
  return class extends r {
    async autoReviewBan(t) {
      const e = await this.request("/staff/dashboard/users/auto-review-ban", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
      return await e.json()
    }
    async getUserAppeals(t) {
      const e = new URLSearchParams;
      e.set("userId", String(t.userId)), e.set("kind", t.kind), t.page !== void 0 && e.set("page", String(t.page)), t.pageSize !== void 0 && e.set("pageSize", String(t.pageSize)), t.sortBy && e.set("sortBy", t.sortBy), t.sortDir && e.set("sortDir", t.sortDir);
      const n = await this.request(`/staff/dashboard/users/appeals?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      const a = await n.json(),
        s = Array.isArray(a == null ? void 0 : a.appeals) ? a.appeals : [],
        c = typeof(a == null ? void 0 : a.total) == "number" ? a.total : s.length;
      return {
        appeals: s,
        total: c
      }
    }
    async submitBanAppeal(t, e) {
      const n = JSON.stringify(e ? {
          message: t,
          ticketId: e
        } : {
          message: t
        }),
        a = await F.getHeaders(n),
        s = await this.request("/report/appeal", {
          method: "POST",
          credentials: "include",
          body: n,
          headers: a
        });
      if (s.status === i.FORBIDDEN) {
        const c = await s.json();
        if ((c == null ? void 0 : c.error) === "challenge-required" && c.tier) {
          if (await se(c.tier)) return this.submitBanAppeal(t, e);
          throw new l(ee(), s.status)
        }
      }
      if (s.status !== i.OK && s.status !== i.ALREADY_REPORTED) throw new l(o(), s.status);
      return s.status
    }
    async getOpenAppeals() {
      const t = await this.request("/staff/appeals/get", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      return t.json()
    }
    async postSolveAppeal(t, e) {
      const n = await this.request(`/staff/appeals/${t}/handle`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          approved: e
        })
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return await n.json()
    }
    async getUserLastAppeal() {
      const t = await this.request("/me/last-appeal", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      const e = await t.json();
      return (e == null ? void 0 : e.appealDate) ?? null
    }
    async assignAppeals() {
      const t = await this.request("/staff/appeals/assign", {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      return await t.json()
    }
    async getPendingAppealsCount() {
      const t = await this.request("/staff/appeals/open_count", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      const e = await t.json();
      return (e == null ? void 0 : e.appeals) ?? 0
    }
  }
}

function NS(r) {
  return class extends r {
    async getUserFrames() {
      const t = await this.request("/me/frames", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      return t.json()
    }
    async postEquipUserFrame(t) {
      const e = await this.request(`/me/frames/equip/${t}`, {
        method: "POST",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(o(), e.status)
    }
    async getUserBadges() {
      const t = await this.request("/me/badges", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      return t.json()
    }
    async postEquipUserBadge(t) {
      const e = await this.request("/me/badges/equip", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== i.OK) throw new l(o(), e.status)
    }
    async getStoreFrames() {
      const t = await this.request("/store/frames", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      return t.json()
    }
    async postBuyUserFrame(t) {
      const e = await this.request(`/store/frames/buy/${t}`, {
        method: "POST",
        credentials: "include"
      });
      if (e.status === i.NOT_FOUND) throw new Error(xt());
      if (e.status === i.FORBIDDEN) throw new Error(Lt());
      if (e.status === i.CONFLICT) throw new Error(zt());
      if (e.status !== i.OK) throw new Error(o())
    }
    async postEquipCosmetics(t) {
      const e = await this.request("/me/cosmetic/equip", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== i.OK) throw new l(o(), e.status)
    }
    async getStoreNameCosmetics() {
      const t = await this.request("/store/name", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      return await t.json()
    }
    async postBuyCosmetic(t) {
      const e = await this.request(`/store/name/buy/${t}`, {
        method: "POST",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(o(), e.status)
    }
    async getMyNameCosmetics() {
      const t = await this.request("/me/cosmetics/name", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      return await t.json()
    }
    async postCreateFrame(t) {
      const e = new FormData;
      e.append("name", t.name), e.append("image", t.image), e.append("description", t.description), e.append("value", t.value.toString()), e.append("rarity", t.rarity), e.append("purchasable", t.purchasable.toString());
      const n = await this.request("/staff/store-manager/frames", {
        method: "POST",
        credentials: "include",
        body: e
      });
      if (n.status !== i.OK) throw new l(o(), n.status)
    }
    async postCreateFont(t) {
      const e = await this.request("/staff/store-manager/fonts", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== i.OK) throw new l(o(), e.status)
    }
    async postCreateStyle(t) {
      const e = await this.request("/staff/store-manager/styles", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== i.OK) throw new l(o(), e.status)
    }
    async getR2Images(t) {
      const e = new URLSearchParams({
          page: String(t.page),
          pageSize: String(t.pageSize)
        }),
        n = await this.request(`/staff/store-manager/images?${e.toString()}`, {
          method: "GET",
          credentials: "include"
        });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return n.json()
    }
    async postUploadR2Image(t) {
      const e = new FormData;
      t.name && e.append("name", t.name), e.append("image", t.image);
      const n = await this.request("/staff/store-manager/images", {
        method: "POST",
        credentials: "include",
        body: e
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return n.json()
    }
    async deleteR2Image(t) {
      const e = await this.request(`/staff/store-manager/images/${t}`, {
        method: "DELETE",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(o(), e.status)
    }
  }
}
const K = {
  day: 1440 * 60 * 1e3,
  hour: 3600 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
};

function IN(r) {
  const t = Math.floor(r / K.hour);
  r -= t * K.hour;
  const e = Math.floor(r / K.minute);
  r -= e * K.minute;
  const a = Math.floor(r / K.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${a}` : `${e}:${a}`
}

function RN(r) {
  const t = r.getFullYear(),
    e = String(r.getMonth() + 1).padStart(2, "0"),
    n = String(r.getDate()).padStart(2, "0"),
    a = String(r.getHours()).padStart(2, "0"),
    s = String(r.getMinutes()).padStart(2, "0"),
    c = String(r.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${n} ${a}:${s}:${c}`
}
const IS = 30 * K.minute;

function RS(r) {
  return class extends r {
    constructor() {
      super(...arguments);
      w(this, "lastHotspotRequestAt", 0)
    }
    async leaderboardPlayers(e) {
      const n = await this.request(`/leaderboard/player/${e}`);
      if (n.status !== i.OK) throw new Error(V());
      return n.json()
    }
    async leaderboardAlliances(e) {
      const n = await this.request(`/leaderboard/alliance/${e}`);
      if (n.status !== i.OK) throw new Error(V());
      return n.json()
    }
    async leaderboardRegions(e, n = 0) {
      const a = await this.request(`/leaderboard/region/${e}/${n}`);
      if (a.status === i.OK) return a.json();
      throw new Error(V())
    }
    async leaderboardRegionPlayers(e, n) {
      const a = await this.request(`/leaderboard/region/players/${e}/${n}`);
      if (a.status === i.OK) return a.json();
      throw new Error(V())
    }
    async leaderboardRegionAlliances(e, n) {
      const a = await this.request(`/leaderboard/region/alliances/${e}/${n}`);
      if (a.status === i.OK) return a.json();
      throw new Error(V())
    }
    async leaderboardCountries(e) {
      const n = await this.request(`/leaderboard/country/${e}`, {
        credentials: "include"
      });
      if (n.status === i.OK) return n.json();
      throw new Error(V())
    }
    refreshHotspotsIfStale() {
      Date.now() - this.lastHotspotRequestAt < IS || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
        credentials: "include",
        keepalive: !0,
        throwOnStatus: !1
      }).catch(() => {
        this.lastHotspotRequestAt = 0
      }))
    }
    async getMapHotspots() {
      const e = await this.request("/map/hotspots", {
        credentials: "include"
      });
      return e.status !== 200 ? [] : (this.lastHotspotRequestAt = Date.now(), e.json())
    }
    async getRandomTile(e) {
      const n = await this.request(`/s${e}/tile/random`);
      if (n.status !== i.OK) throw new Error(o());
      return n.json()
    }
  }
}

function DS(r) {
  return class extends r {
    async postCaptchaSession(t, e = "include") {
      const n = await this.request("/anticheat/captcha/session", {
        method: "POST",
        credentials: e,
        body: JSON.stringify(t),
        headers: {
          "x-fp": await tt()
        }
      });
      if (!n.ok) throw n.status === 500 ? new l(o(), n.status) : new l(Kl(), n.status);
      return n.json()
    }
    async postTelemetry(t, e) {
      return (await this.request("/frontend/telemetry", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          event: t,
          data: e
        })
      })).status === i.OK
    }
  }
}
const DN = {
    griefing: wu(),
    "multi-accounting": uf(),
    "hate-speech": Fu(),
    bot: Ra(),
    doxxing: Ws(),
    "inappropriate-content": ml(),
    other: ni()
  },
  PN = {
    doxxing: co(),
    "hate-speech": nl(),
    griefing: Ru(),
    "multi-accounting": Ef(),
    bot: Fa(),
    "inappropriate-content": Nl(),
    other: mi()
  },
  xN = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  qt = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  jN = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  PS = 365 * K.day;

function Mt(r) {
  if (!r) return null;
  const e = (r instanceof Date ? r : new Date(r)).getTime();
  return Number.isFinite(e) ? e : null
}

function zN(r, t = Date.now()) {
  const e = Mt(r);
  return e === null ? !1 : e - t >= PS
}

function LN(r, t = Date.now()) {
  const e = Mt(r);
  if (e === null || e <= t) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const n = Math.max(0, Math.ceil((e - t) / 6e4)),
    a = Math.floor(n / 1440),
    s = Math.floor(n % 1440 / 60),
    c = n % 60;
  return {
    days: a,
    hours: s,
    minutes: c
  }
}

function xS(r) {
  return class extends r {
    async getModeratorTickets() {
      const t = await this.request("/staff/tickets/get", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      const e = await t.json();
      for (const n of e.tickets) n.reports.sort((a, s) => qt[a.reason] - qt[s.reason]);
      return e
    }
    async countMyTicketsClosedToday() {
      const t = await this.request("/staff/tickets/closed-today", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      return t.json()
    }
    async getOpenTicketsCount() {
      const t = await this.request("/staff/tickets/open_count", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
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
      if (t.status !== i.OK) throw new l(o(), t.status);
      return t.json()
    }
    async setTicketStatus(t, e, n, a, s) {
      const c = await this.request("/staff/tickets/set-status", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          ticketId: t,
          status: e,
          selectedReportId: n ?? void 0,
          assignedReason: a,
          ignoreReason: s
        })
      });
      if (c.status !== i.OK && c.status !== i.BAD_REQUEST) throw new l(o(), c.status)
    }
    async getLastResolvedTicket() {
      const t = await this.request("/staff/tickets/reversals/last-resolved", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      return (await t.json()).ticket
    }
    async getTicketReversalTicketInfo(t) {
      const e = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
      return (await e.json()).ticket
    }
    async getReporterReportHistory(t, e) {
      const n = await this.request(`/staff/tickets/reporter-history?ticketId=${encodeURIComponent(t)}&reporterId=${e}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return (await n.json()).reports
    }
    async createTicketReversal(t) {
      const e = await this.request("/staff/tickets/reversals", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status === i.CONFLICT) {
        const n = await e.json().catch(() => ({}));
        throw (n == null ? void 0 : n.error) === "reversal_already_pending" ? new l(Tv(), i.CONFLICT) : new l(o(), i.CONFLICT)
      }
      if (e.status !== i.OK) throw new l(o(), e.status);
      return e.json()
    }
    async reSolveTicket(t) {
      const e = await this.request("/staff/tickets/re-solve", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
      return e.json()
    }
    async listTicketReversals(t = {}) {
      const e = new URLSearchParams;
      t.status && e.set("status", t.status), t.page != null && e.set("page", String(t.page)), t.pageSize != null && e.set("pageSize", String(t.pageSize));
      const n = `/staff/tickets/reversals${e.toString()?`?${e.toString()}`:""}`,
        a = await this.request(n, {
          method: "GET",
          credentials: "include"
        });
      if (a.status !== i.OK) throw new l(o(), a.status);
      return (await a.json()).reversals ?? []
    }
    async getTicketReversal(t) {
      const e = await this.request(`/staff/tickets/reversals/${t}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
      return (await e.json()).reversal
    }
    async reviewTicketReversal(t, e, n) {
      const a = await this.request(`/staff/tickets/reversals/${t}/review`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          decision: e,
          notes: n
        })
      });
      if (a.status === i.FORBIDDEN) throw new l(Lv(), i.FORBIDDEN);
      if (a.status === i.CONFLICT) throw new l(Jv(), i.CONFLICT);
      if (a.status !== i.OK) throw new l(o(), a.status)
    }
    async getOpenTicketsSummary() {
      const t = await this.request("/staff/dashboard/summary/counters/tickets", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      return t.json()
    }
    async getOpenReportsSummary() {
      const t = await this.request("/staff/dashboard/summary/counters/reports", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      return t.json()
    }
    async getBanAppealStats(t, e) {
      const n = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      const a = await n.json();
      return {
        items: a.items ?? [],
        globals: a.globals
      }
    }
    async getClosedTicketsByMod(t, e) {
      const n = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return (await n.json()).items.map(s => ({
        ...s,
        suspensionRate: (s.ban + s.timeout) / s.total
      }))
    }
    async getClosedReportsByMod(t, e) {
      const n = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return (await n.json()).items.map(s => ({
        ...s,
        suspensionRate: (s.ban + s.timeout) / s.total
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
      if (e.status !== i.OK) throw new l(o(), e.status);
      return e.json()
    }
    async getUserInfoFull(t) {
      const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.NOT_FOUND) {
        if (e.status !== i.OK) throw new l(o(), e.status);
        return e.json()
      }
    }
    async getUsersReportInfo(t) {
      const e = t.filter(a => Number.isFinite(a) && a > 0);
      if (e.length === 0) return [];
      const n = await this.request(`/staff/dashboard/users/info-batch?ids=${encodeURIComponent(e.join(","))}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return n.json()
    }
    async getUserInfoByEmail(t) {
      const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.NOT_FOUND) {
        if (e.status !== i.OK) throw new l(o(), e.status);
        return e.json()
      }
    }
    async getUserPunishments(t) {
      const e = await this.request(`/staff/dashboard/users/punishments?userId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
      return (await e.json()).punishments ?? []
    }
    async getPunishmentTicket(t) {
      const e = await this.request(`/staff/dashboard/users/punishment-ticket?ticketId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
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
      if (e.status !== i.OK) throw new l(o(), e.status)
    }
    async getUserNotes(t, e) {
      const n = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
        a = await this.request(n, {
          method: "GET",
          credentials: "include"
        });
      if (a.status !== i.OK) throw new l(o(), a.status);
      return a.json()
    }
    async addUserNote(t, e, n) {
      const a = n == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
        s = await this.request(a, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            userId: t,
            note: e
          })
        });
      if (s.status !== i.OK) throw new l(o(), s.status)
    }
    async getUserPermissions(t) {
      const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
      return e.json()
    }
    async setUserPermissions(t, e) {
      const n = await this.request("/staff/dashboard/permissions/set", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          permissions: Array.from(e)
        })
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      const a = await n.json();
      return Array.isArray(a == null ? void 0 : a.permissions) ? a.permissions : []
    }
    async getUserPurchases(t) {
      const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
      const n = await e.json();
      return (Array.isArray(n == null ? void 0 : n.purchases) ? n.purchases : []).map(s => {
        const c = s.is_dollar ?? s.isDollar ?? s.currency ?? s.Currency ?? 0;
        let u;
        if (typeof c == "string") {
          const g = c.toLowerCase();
          u = g === "usd" || g === "dollar" || g === "true"
        } else typeof c == "number" ? u = c !== 0 : u = !!c;
        const d = typeof s.createdAt == "string" ? s.createdAt : s.CreatedAt ? new Date(s.CreatedAt).toISOString() : "",
          f = s.product_variant ?? s.productVariant,
          k = f == null || f === "" ? null : Number(f);
        return {
          product_name: String(s.productName ?? s.product_name ?? ""),
          amount: Number(s.amount ?? 0),
          price: Number(s.price ?? 0),
          is_dollar: u,
          created_at: d,
          product_variant: Number.isInteger(k) ? k : null
        }
      })
    }
    async getUserTickets(t, e) {
      if (e === "appeals" && (t.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
      const n = new URLSearchParams;
      n.set("userId", String(t.userId)), n.set("kind", String(t.kind)), n.set("page", String(t.page ?? 0)), n.set("pageSize", String(t.pageSize ?? 20)), t.sortBy && n.set("sortBy", t.sortBy), t.sortDir && n.set("sortDir", t.sortDir), t.status && n.set("status", t.status), t.reason && n.set("reason", t.reason), e === "appeals" && n.set("appealId", String(t.appealId));
      const a = e === "appeals" ? `/staff/appeals/tickets?${n.toString()}` : `/staff/dashboard/users/tickets?${n.toString()}`,
        s = await this.request(a, {
          method: "GET",
          credentials: "include"
        });
      if (s.status !== i.OK) throw new l(o(), s.status);
      const c = await s.json(),
        u = Array.isArray(c == null ? void 0 : c.tickets) ? c.tickets : [],
        d = typeof(c == null ? void 0 : c.total) == "number" ? c.total : u.length;
      return {
        tickets: u,
        total: d
      }
    }
    async getAllTickets(t) {
      const e = new URLSearchParams;
      e.set("page", String(t.page ?? 0)), e.set("pageSize", String(t.pageSize ?? 20)), t.modId && e.set("modId", String(t.modId)), t.sortBy && e.set("sortBy", t.sortBy), t.sortDir && e.set("sortDir", t.sortDir), t.status && e.set("status", t.status), t.reason && e.set("reason", t.reason), t.role && e.set("role", t.role), t.reviewed && e.set("reviewed", t.reviewed), t.reSolvedOnly && e.set("reSolvedOnly", "true"), t.hideSystem && e.set("hideSystem", "true"), t.dateFrom && e.set("dateFrom", t.dateFrom), t.dateTo && e.set("dateTo", t.dateTo);
      const n = await this.request(`/staff/dashboard/all-tickets?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      const a = await n.json(),
        s = Array.isArray(a == null ? void 0 : a.tickets) ? a.tickets : [],
        c = typeof(a == null ? void 0 : a.total) == "number" ? a.total : s.length,
        u = typeof(a == null ? void 0 : a.matchedTotal) == "number" ? a.matchedTotal : c,
        d = typeof(a == null ? void 0 : a.reviewedTotal) == "number" ? a.reviewedTotal : 0;
      return {
        tickets: s,
        total: c,
        matchedTotal: u,
        reviewedTotal: d
      }
    }
    async reviewTicket(t) {
      const e = await this.request("/staff/dashboard/all-tickets/review", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
      return e.json()
    }
    async getTicketOverturnInfo(t) {
      const e = await this.request(`/staff/dashboard/all-tickets/overturn-info?ticketId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
      return e.json()
    }
    async getModerationTranslate(t, e) {
      const n = e == "tickets" ? "/staff/tickets/translate" : "/staff/appeals/translate",
        a = await this.request(n, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            text: t
          })
        });
      if (a.status !== i.OK) throw new l(o(), a.status);
      const s = await a.json();
      return s == null ? void 0 : s.translation
    }
    mapTicketsToReportRows(t, e) {
      var a, s, c, u, d;
      const n = [];
      for (const f of t) {
        const k = f.status ?? "open";
        if (e === "received") {
          for (const g of f.reports) n.push({
            id: String(g.id),
            ticketId: String(f.id),
            createdAt: g.createdAt ?? f.createdAt,
            byUser: {
              id: Number(g.reportedBy),
              name: String(g.reportedByName ?? g.reportedBy),
              picture: g.reportedByPicture ?? null
            },
            reason: String(g.reason),
            status: k
          });
          continue
        }
        if (e === "sent") {
          for (const g of f.reports) f.reportedUser && n.push({
            id: String(g.id),
            ticketId: String(f.id),
            createdAt: g.createdAt ?? f.createdAt,
            toUser: {
              id: Number(f.reportedUser.id),
              name: String(f.reportedUser.name),
              picture: f.reportedUser.picture ?? null
            },
            reason: String(g.reason),
            status: k
          });
          continue
        }
        n.push({
          id: String(f.id),
          ticketId: String(f.id),
          createdAt: f.createdAt,
          handledBy: f.status && f.status !== "open" ? {
            id: ((a = f.handledBy) == null ? void 0 : a.id) ?? 0,
            name: ((s = f.handledBy) == null ? void 0 : s.name) ?? "Moderator",
            picture: ((c = f.handledBy) == null ? void 0 : c.picture) ?? null
          } : {
            id: 0,
            name: "—",
            picture: null
          },
          reason: String(((d = (u = f.reports) == null ? void 0 : u[0]) == null ? void 0 : d.reason) ?? "other"),
          status: k
        })
      }
      return n.sort((f, k) => new Date(k.createdAt).getTime() - new Date(f.createdAt).getTime()), n
    }
    async getModeratorClosedTicketStats(t) {
      const e = new URLSearchParams({
          id: String(t)
        }).toString(),
        n = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
          method: "GET",
          credentials: "include"
        });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return n.json()
    }
    async getTicketsKpi(t) {
      const e = new URLSearchParams;
      e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
      const n = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return n.json()
    }
  }
}

function jS(r) {
  return class extends r {
    async getNotificationCount() {
      const t = await this.request("/notification/count", {
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      const {
        count: e
      } = await t.json();
      return e
    }
    async getNotificationPage(t) {
      const n = `/notification/page${t!==void 0?`?cursor=${encodeURIComponent(t)}`:""}`,
        a = await this.request(n, {
          credentials: "include"
        });
      if (a.status !== i.OK) throw new l(o(), a.status);
      return a.json()
    }
    async postNotificationMarkRead(t) {
      const e = await this.request("/notification/mark-read", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          notificationIds: t
        })
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
      return e.json()
    }
    async postNotificationMarkReadAll() {
      const t = await this.request("/notification/mark-read/all", {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      return t.json()
    }
  }
}

function zS(r) {
  return class extends r {
    async driveStatus() {
      const t = await this.request("/drive/status", {
        credentials: "include"
      });
      return t.status !== i.OK ? !1 : !!(await t.json()).connected
    }
    async driveConnect(t) {
      const e = await this.request("/drive/connect", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          code: t
        })
      });
      if (e.status !== i.OK) throw new Error(`drive connect failed: ${e.status}`);
      return e.json()
    }
    async driveToken() {
      const t = await this.request("/drive/token", {
        credentials: "include",
        throwOnStatus: !1
      });
      if (t.status === i.CONFLICT) return null;
      if (t.status !== i.OK) throw new Error(`drive token failed: ${t.status}`);
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
      if (e.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(ct());
      if (e.status !== i.OK) throw new Error(await e.text());
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
    async getFastspringSecurePayload(t) {
      const e = await this.request(`/payment/fastspring/secure-payload?lookup_key=${encodeURIComponent(t)}`, {
        credentials: "include",
        throwOnStatus: !1
      });
      return e.status !== i.OK ? null : await e.json()
    }
    async getLastFastspringOrder() {
      const t = await this.request("/payment/fastspring/orders/last", {
        credentials: "include"
      });
      if (t.status === i.NOT_FOUND) return null;
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
    async purchase(t) {
      const e = await this.request("/purchase", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          product: t
        })
      });
      if (e.status !== i.OK) throw e.status === i.NOT_FOUND ? new Error(xt()) : e.status === i.FORBIDDEN ? new Error(Lt()) : e.status === i.CONFLICT ? new Error(zt()) : new Error(o())
    }
    async getPlayAccountId() {
      const t = await this.request("/payment/play/account-id", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new Error(o());
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
      if (e.status === i.BAD_REQUEST) {
        const n = await e.json().catch(() => ({}));
        throw new Error((n == null ? void 0 : n.error) ?? "Invalid Play purchase")
      }
      if (e.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(ct());
      if (e.status !== i.OK) throw new Error(o());
      return e.json()
    }
    async verifyPendingPlayPurchases() {
      const t = await this.request("/payment/play/verify-pending", {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new Error(o());
      return t.json()
    }
    async getPlayClaimStatus(t) {
      const e = await this.request(`/payment/play/claim/${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status === i.NOT_FOUND) return {
        status: "unknown",
        droplets: 0
      };
      if (e.status !== i.OK) throw new Error(o());
      return e.json()
    }
    async listPlayPurchaseHistory() {
      const t = await this.request("/payment/play/history", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new Error(o());
      return t.json()
    }
  }
}

function At(r, t) {
  const e = {};
  for (const n of r) {
    const a = t(n),
      s = e[a];
    s ? s.push(n) : e[a] = [n]
  }
  return e
}

function UN(r, t) {
  const e = {};
  for (const n of r) {
    const a = t(n);
    e[a] = n
  }
  return e
}

function LS(r) {
  return class extends r {
    async paint(t) {
      const e = At(t, u => `t=(${u.tile[0]},${u.tile[1]}),s=${u.season}`),
        n = {
          season: t[0].season,
          tiles: Object.values(e).map(u => ({
            x: u[0].tile[0],
            y: u[0].tile[1],
            pixels: {
              x: u.map(d => d.pixel[0]),
              y: u.map(d => d.pixel[1]),
              colors: u.map(d => d.colorIdx)
            }
          }))
        },
        a = JSON.stringify(n),
        s = await F.getHeaders(a),
        c = await this.request("/paint", {
          method: "POST",
          body: a,
          headers: s,
          credentials: "include"
        });
      if (c.status !== i.OK && c.status !== i.OK) {
        if (c.status === i.UNAUTHORIZED) throw new Error(gt());
        if (c.status === i.FORBIDDEN) {
          if (c.headers.get("cf-mitigated") === "challenge") throw new Error(dt());
          const u = await c.json();
          if ((u == null ? void 0 : u.error) === "timeout") {
            const d = new Date(Date.now() + ((u == null ? void 0 : u.durationMs) ?? 0));
            throw new Error(wt({
              until: d.toLocaleString()
            }))
          }
          if ((u == null ? void 0 : u.error) === "refresh") throw new Error(pt());
          if ((u == null ? void 0 : u.error) === "color-not-owned") throw new Error(ht());
          if ((u == null ? void 0 : u.error) === "event-pixel-present") throw new Error(_t());
          if ((u == null ? void 0 : u.error) === "challenge-required")
            if (u.tier) {
              if (await se(u.tier)) return this.paint(t);
              throw new Error(ee())
            } else console.error("Challenge required but no tier provided", u);
          if ((u == null ? void 0 : u.error) === "verification-required") {
            const f = (await We().get()).sealed_result;
            if (f) return await this.verifyAnticheat(f), this.paint(t);
            throw new Error(o())
          }
          W.refresh()
        } else throw new Error(o())
      }
    }
    async selectAreaClear(t, e) {
      return this.sendPaintRequests(t, (n, a, s) => `/staff/tools/select-area/clear/s${n}/pixel/${a}/${s}`, e)
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
      if (e.status !== i.OK) throw new l(o(), e.status);
      return e.json()
    }
    async getReverseTimestamps(t, e = {}) {
      const {
        mode: n = "depth",
        beforeDepth: a,
        beforeTimestamp: s
      } = e, c = await this.request("/staff/tools/select-area/reverse/timestamps", {
        method: "POST",
        body: JSON.stringify({
          sessionId: t,
          mode: n,
          beforeDepth: a,
          beforeTimestamp: s
        }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (c.status !== i.OK) throw new l(o(), c.status);
      return c.json()
    }
    async getReversePreview(t, e) {
      const {
        mode: n = "depth",
        snapshotDepth: a,
        timestamp: s
      } = e, c = await this.request("/staff/tools/select-area/reverse/preview", {
        method: "POST",
        body: JSON.stringify({
          sessionId: t,
          mode: n,
          snapshotDepth: a,
          timestamp: s
        }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (c.status !== i.OK) throw new l(o(), c.status);
      return c.json()
    }
    async getReverseTimelapse(t, e) {
      const n = await this.request("/staff/tools/select-area/reverse/timelapse", {
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
      if (n.status === i.BAD_REQUEST) {
        const a = await n.json(),
          s = (a == null ? void 0 : a.error) ?? "";
        throw s === "timelapse_too_many_events" ? new l(Cm(), i.BAD_REQUEST) : new l(typeof s == "string" && s ? s : o(), i.BAD_REQUEST)
      }
      if (n.status !== i.OK) throw new l(o(), n.status);
      return n.arrayBuffer()
    }
    async applyReverse(t, e) {
      const {
        mode: n = "depth",
        snapshotDepth: a,
        timestamp: s
      } = e, c = await this.request("/staff/tools/select-area/reverse/apply", {
        method: "POST",
        body: JSON.stringify({
          sessionId: t,
          mode: n,
          snapshotDepth: a,
          timestamp: s
        }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (c.status !== i.OK) throw new l(o(), c.status);
      return c.json()
    }
    async sendPaintRequests(t, e, n, a) {
      const s = At(t, d => `t=(${d.tile[0]},${d.tile[1]}),s=${d.season}`),
        u = (await Promise.all(Object.values(s).map(async d => {
          const [f, k] = d[0].tile, g = d[0].season, D = {
            colors: d.map(I => I.colorIdx),
            coords: d.flatMap(I => I.pixel),
            csid: n
          }, x = JSON.stringify(D), q = e(g, f, k), N = await F.getHeaders(x);
          return this.request(q, {
            method: "POST",
            body: x,
            headers: N,
            credentials: "include"
          })
        }))).filter(d => d.status !== i.OK);
      if (u.length) {
        const d = u[0];
        if (d.status === i.UNAUTHORIZED) throw new Error(gt());
        if (d.status === i.FORBIDDEN) {
          if (d.headers.get("cf-mitigated") === "challenge") throw new Error(dt());
          const f = await d.json();
          if ((f == null ? void 0 : f.error) === "timeout") {
            const k = new Date(Date.now() + ((f == null ? void 0 : f.durationMs) ?? 0));
            throw new Error(wt({
              until: k.toLocaleString()
            }))
          }
          if ((f == null ? void 0 : f.error) === "refresh") throw new Error(pt());
          if ((f == null ? void 0 : f.error) === "color-not-owned") throw new Error(ht());
          if ((f == null ? void 0 : f.error) === "event-pixel-present") throw new Error(_t());
          W.refresh()
        } else throw new Error(o())
      }
    }
    async adminAutoPainterPaint(t, e, n) {
      const a = US(t),
        s = await CS(a),
        c = new FormData;
      c.append("fingerprint", e), c.append("season", a.season.toString()), c.append("px0", a.offsetX.toString()), c.append("py0", a.offsetY.toString()), c.append("width", a.width.toString()), c.append("height", a.height.toString()), c.append("pixels", t.length.toString()), c.append("bitmap", s, "auto-painter.png"), c.append("userId", n.toString());
      const u = await this.request("/staff/tools/auto-painter/paint", {
        method: "POST",
        body: c,
        credentials: "include"
      });
      if (u.status === i.FORBIDDEN) {
        const d = await u.json().catch(() => null);
        if (typeof(d == null ? void 0 : d.charges) == "number") throw new Error(Hh({
          charges: Math.floor(d.charges),
          pixels: t.length
        }));
        const f = typeof(d == null ? void 0 : d.error) == "string" ? d.error.trim() : "";
        throw f && f !== "Forbidden" ? new Error(f) : new Error("Auto painter is restricted to administrators.")
      }
      if (u.status !== i.OK) throw new Error(o());
      return u.json()
    }
    async getPixelInfo({
      season: t,
      tile: [e, n],
      pixel: [a, s]
    }) {
      const c = new URLSearchParams;
      c.set("x", String(a)), c.set("y", String(s));
      const u = await this.request(`/s${t}/pixel/${e}/${n}?${c.toString()}`, {
        credentials: "include"
      });
      if (u.status !== i.OK) {
        const d = await u.text();
        throw new Error(Pc({
          err: d
        }))
      }
      return u.json()
    }
    async getPixelAreaInfo({
      season: t,
      tile: [e, n],
      p0: [a, s],
      p1: [c, u]
    }) {
      const d = await this.request(`/staff/tools/select-area/s${t}/${e}/${n}?x0=${a}&y0=${s}&x1=${c}&y1=${u}`, {
        credentials: "include"
      });
      if (d.status !== i.OK) {
        const q = await d.text();
        throw console.error("Error while fetching pixel area info", q), new Error(o())
      }
      const f = await d.arrayBuffer(),
        k = new DataView(f),
        g = Math.floor(f.byteLength / 5),
        D = new Uint32Array(g),
        x = new Uint8Array(g);
      for (let q = 0; q < g; q++) {
        const N = q * 5;
        D[q] = k.getUint32(N, !0), x[q] = k.getUint8(N + 4)
      }
      return {
        paintedBy: D,
        colors: x
      }
    }
  }
}

function US(r) {
  var D, x;
  if (!r.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = r[0].season;
  for (const q of r)
    if (q.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (D = Ke.seasons) == null ? void 0 : D[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const n = e.tileSize;
  let a = Number.POSITIVE_INFINITY,
    s = Number.POSITIVE_INFINITY,
    c = Number.NEGATIVE_INFINITY,
    u = Number.NEGATIVE_INFINITY;
  const d = r.map(q => {
      const N = Math.round(q.tile[0] * n + q.pixel[0]),
        I = Math.round(q.tile[1] * n + q.pixel[1]);
      return N < a && (a = N), I < s && (s = I), N > c && (c = N), I > u && (u = I), {
        x: N,
        y: I,
        colorIdx: q.colorIdx
      }
    }),
    f = c - a + 1,
    k = u - s + 1;
  if (!Number.isFinite(f) || !Number.isFinite(k) || f <= 0 || k <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const g = new Uint8ClampedArray(f * k * 4);
  for (const {
      x: q,
      y: N,
      colorIdx: I
    }
    of d) {
    const j = (x = Ke.colors) == null ? void 0 : x[I];
    if (!j) throw new Error(`Unknown palette color index: ${I}`);
    const te = q - a,
      ze = ((N - s) * f + te) * 4,
      [Ht, Gt, Vt] = j.rgb;
    g[ze] = Ht, g[ze + 1] = Gt, g[ze + 2] = Vt, g[ze + 3] = I === 0 ? 1 : 255
  }
  return {
    data: g,
    width: f,
    height: k,
    offsetX: a,
    offsetY: s,
    season: t
  }
}
async function CS(r) {
  const t = MS(r.width, r.height),
    e = t.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const n = e.createImageData(r.width, r.height);
  return n.data.set(r.data), e.putImageData(n, 0, 0), "convertToBlob" in t ? t.convertToBlob({
    type: "image/png"
  }) : new Promise((a, s) => {
    t.toBlob(c => {
      if (!c) {
        s(new Error("Failed to encode auto painter bitmap."));
        return
      }
      a(c)
    }, "image/png")
  })
}

function MS(r, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(r, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = r, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}

function BS(r) {
  return class extends r {
    validWaybackInput(t) {
      const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
        n = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < vS.length,
        a = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= Ct.tools.wayback.limit,
        s = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
        c = t.cursorTs !== void 0,
        u = t.cursorUserId !== void 0,
        d = t.cursorAllianceId !== void 0,
        f = t.cursorPixelsCount !== void 0,
        k = c || u || d || f,
        g = c && u && d && f;
      let D = !0;
      return k && (D = g && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!n || !a || !s || !e || !D)
    }
    getSafeWaybackInput(t) {
      return t.season = Math.trunc(t.season), t.limit = Math.trunc(t.limit), t.timestamp = Math.trunc(t.timestamp), t.tileX = Math.trunc(t.tileX), t.tileY = Math.trunc(t.tileY), t.cursorTs !== void 0 && (t.cursorTs = Math.trunc(t.cursorTs)), t.cursorUserId !== void 0 && (t.cursorUserId = Math.trunc(t.cursorUserId)), t.cursorAllianceId !== void 0 && (t.cursorAllianceId = Math.trunc(t.cursorAllianceId)), t.cursorPixelsCount !== void 0 && (t.cursorPixelsCount = Math.trunc(t.cursorPixelsCount)), t
    }
    async getWaybackEvents(t) {
      if (!this.validWaybackInput(t)) throw new Error("Invalid query params");
      t = this.getSafeWaybackInput(t);
      const e = new URLSearchParams;
      t.cursorTs !== void 0 && e.set("cursorTs", String(t.cursorTs)), t.cursorUserId !== void 0 && e.set("cursorUserId", String(t.cursorUserId)), t.cursorAllianceId !== void 0 && e.set("cursorAllianceId", String(t.cursorAllianceId)), t.cursorPixelsCount !== void 0 && e.set("cursorPixelsCount", String(t.cursorPixelsCount));
      const n = `/staff/tools/wayback/s${t.season}/l${t.limit}/x${t.tileX}/y${t.tileY}/t${t.timestamp}`,
        a = e.toString(),
        s = await this.request(a.length > 0 ? `${n}?${a}` : n, {
          method: "GET",
          credentials: "include"
        });
      if (s.status === i.FORBIDDEN) throw new Error("Access denied");
      if (s.status !== i.OK) throw new Error("Failed to fetch wayback events");
      return s.json()
    }
  }
}
class KS extends iS(sS(qS(AS(SS(NS(RS(DS(xS(jS(zS(LS(BS(aS))))))))))))) {}
const $ = new KS(It);
typeof window < "u" && Xt(() => {
  let r = $.online;
  Zt(() => {
    const t = $.online;
    t && !r && window.dispatchEvent(new CustomEvent("wplace:online")), r = t
  })
});

function Bt(r, t) {
  if (!(r != null && r.length)) return !1;
  for (const e of r)
    if (e === t) return !0;
  return !1
}

function $S(r, t) {
  for (const e of t)
    if (Bt(r, e)) return !0;
  return !1
}

function Kt(r) {
  const t = atob(r),
    e = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
  return e
}

function FS(r) {
  if (typeof Buffer < "u") return Buffer.from(r).toString("base64");
  let t = "";
  for (let e = 0; e < r.length; e++) t += String.fromCharCode(r[e]);
  return btoa(t)
}
class HS {
  constructor(t) {
    w(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const n = Math.floor(t / 8),
      a = t % 8;
    if (n >= this.bytes.length) {
      const c = new Uint8Array(n + 1),
        u = c.length - this.bytes.length;
      for (let d = 0; d < this.bytes.length; d++) c[d + u] = this.bytes[d];
      this.bytes = c
    }
    const s = this.bytes.length - 1 - n;
    e ? this.bytes[s] = this.bytes[s] | 1 << a : this.bytes[s] = this.bytes[s] & ~(1 << a)
  }
  get(t) {
    const e = Math.floor(t / 8),
      n = t % 8,
      a = this.bytes.length;
    return e > a ? !1 : (this.bytes[a - 1 - e] & 1 << n) !== 0
  }
}

function CN(r) {
  return new Promise((t, e) => {
    const n = new FileReader;
    n.onload = () => {
      const a = n.result;
      if (!a || typeof a != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(a.substring(a.indexOf(",") + 1))
    }, n.readAsDataURL(r)
  })
}

function MN(r) {
  if (typeof FileReader > "u") {
    const t = r.type || "application/octet-stream";
    return r.arrayBuffer().then(e => `data:${t};base64,${FS(new Uint8Array(e))}`)
  }
  return new Promise((t, e) => {
    const n = new FileReader;
    n.onloadend = () => {
      const a = n.result;
      if (typeof a != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(a)
    }, n.onerror = e, n.readAsDataURL(r)
  })
}

function BN(r) {
  if (!r.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = r.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = r.slice(5, t),
    n = r.slice(t + 1),
    a = e.indexOf(";base64"),
    s = (a === -1 ? e : e.slice(0, a)) || "text/plain";
  if (a !== -1) {
    const c = Kt(n),
      u = new Uint8Array(c.byteLength);
    return u.set(c), new Blob([u], {
      type: s
    })
  }
  return new Blob([decodeURIComponent(n)], {
    type: s
  })
}

function KN(...r) {
  return r.filter(Boolean).join(" ")
}
const GS = typeof document < "u";
let St = 0;
var Te, ke, qe;
class VS {
  constructor() {
    v(this, Te, S(Be([])));
    v(this, ke, S(Be([])));
    v(this, qe, t => {
      const e = this.toasts.findIndex(n => n.id === t);
      return e === -1 ? null : e
    });
    w(this, "addToast", t => {
      GS && this.toasts.unshift(t)
    });
    w(this, "updateToast", ({
      id: t,
      data: e,
      type: n,
      message: a
    }) => {
      const s = this.toasts.findIndex(u => u.id === t),
        c = this.toasts[s];
      this.toasts[s] = {
        ...c,
        ...e,
        id: t,
        title: a,
        type: n,
        updated: !0
      }
    });
    w(this, "create", t => {
      var u;
      const {
        message: e,
        ...n
      } = t, a = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((u = t.id) == null ? void 0 : u.length) > 0 ? t.id : St++, s = t.dismissable === void 0 ? !0 : t.dismissable, c = t.type === void 0 ? "default" : t.type;
      return at(() => {
        this.toasts.find(f => f.id === a) ? this.updateToast({
          id: a,
          data: t,
          type: c,
          message: e,
          dismissable: s
        }) : this.addToast({
          ...n,
          id: a,
          title: e,
          dismissable: s,
          type: c
        })
      }), a
    });
    w(this, "dismiss", t => (at(() => {
      if (t === void 0) {
        this.toasts = this.toasts.map(n => ({
          ...n,
          dismiss: !0
        }));
        return
      }
      const e = this.toasts.findIndex(n => n.id === t);
      this.toasts[e] && (this.toasts[e] = {
        ...this.toasts[e],
        dismiss: !0
      })
    }), t));
    w(this, "remove", t => {
      if (t === void 0) {
        this.toasts = [];
        return
      }
      const e = h(this, qe).call(this, t);
      if (e !== null) return this.toasts.splice(e, 1), t
    });
    w(this, "message", (t, e) => this.create({
      ...e,
      type: "default",
      message: t
    }));
    w(this, "error", (t, e) => this.create({
      ...e,
      type: "error",
      message: t
    }));
    w(this, "success", (t, e) => this.create({
      ...e,
      type: "success",
      message: t
    }));
    w(this, "info", (t, e) => this.create({
      ...e,
      type: "info",
      message: t
    }));
    w(this, "warning", (t, e) => this.create({
      ...e,
      type: "warning",
      message: t
    }));
    w(this, "loading", (t, e) => this.create({
      ...e,
      type: "loading",
      message: t
    }));
    w(this, "promise", (t, e) => {
      if (!e) return;
      let n;
      e.loading !== void 0 && (n = this.create({
        ...e,
        promise: t,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const a = t instanceof Promise ? t : t();
      let s = n !== void 0;
      return a.then(c => {
        if (typeof c == "object" && c && "ok" in c && typeof c.ok == "boolean" && !c.ok) {
          s = !1;
          const u = YS(c);
          this.create({
            id: n,
            type: "error",
            message: u
          })
        } else if (e.success !== void 0) {
          s = !1;
          const u = typeof e.success == "function" ? e.success(c) : e.success;
          this.create({
            id: n,
            type: "success",
            message: u
          })
        }
      }).catch(c => {
        if (e.error !== void 0) {
          s = !1;
          const u = typeof e.error == "function" ? e.error(c) : e.error;
          this.create({
            id: n,
            type: "error",
            message: u
          })
        }
      }).finally(() => {
        var c;
        s && (this.dismiss(n), n = void 0), (c = e.finally) == null || c.call(e)
      }), n
    });
    w(this, "custom", (t, e) => {
      const n = (e == null ? void 0 : e.id) || St++;
      return this.create({
        component: t,
        id: n,
        ...e
      }), n
    });
    w(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    w(this, "setHeight", t => {
      const e = h(this, qe).call(this, t.toastId);
      if (e === null) {
        this.heights.push(t);
        return
      }
      this.heights[e] = t
    });
    w(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return E(h(this, Te))
  }
  set toasts(t) {
    T(h(this, Te), t, !0)
  }
  get heights() {
    return E(h(this, ke))
  }
  set heights(t) {
    T(h(this, ke), t, !0)
  }
}
Te = new WeakMap, ke = new WeakMap, qe = new WeakMap;

function YS(r) {
  return r && typeof r == "object" && "status" in r ? `HTTP error! Status: ${r.status}` : `Error! ${r}`
}
const P = new VS;

function WS(r, t) {
  return P.create({
    message: r,
    ...t
  })
}
var Ge;
class $N {
  constructor() {
    v(this, Ge, ne(() => P.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return E(h(this, Ge))
  }
}
Ge = new WeakMap;
const JS = WS,
  QS = Object.assign(JS, {
    success: P.success,
    info: P.info,
    warning: P.warning,
    error: P.error,
    custom: P.custom,
    message: P.message,
    promise: P.promise,
    dismiss: P.dismiss,
    loading: P.loading,
    getActiveToasts: () => P.toasts.filter(r => !r.dismiss)
  });
var Ae, Se, Ne, Ie, Re, De, Pe, xe;
class XS {
  constructor() {
    w(this, "channel", new BroadcastChannel("user-channel"));
    v(this, Ae, S());
    v(this, Se, S(!0));
    v(this, Ne, S());
    v(this, Ie, S(Date.now()));
    v(this, Re, ne(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((Qe.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    v(this, De, ne(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    v(this, Pe, ne(() => {
      var t;
      return new HS(Kt(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    v(this, xe, ne(() => {
      var n;
      if (!((n = this.data) != null && n.timeoutUntil)) return;
      const t = new Date(this.data.timeoutUntil),
        e = t.getTime();
      if (!(!Number.isFinite(e) || e <= Qe.now)) return t
    }));
    this.channel && (this.channel.onmessage = t => {
      const e = JSON.parse(t.data);
      e.type === "refresh" ? (this.data = e.data, this.lastFetch = Date.now()) : e.type === "logout" && (this.data = void 0)
    })
  }
  get data() {
    return E(h(this, Ae))
  }
  set data(t) {
    T(h(this, Ae), t, !0)
  }
  get loading() {
    return E(h(this, Se))
  }
  set loading(t) {
    T(h(this, Se), t, !0)
  }
  get notificationCount() {
    return E(h(this, Ne))
  }
  set notificationCount(t) {
    T(h(this, Ne), t, !0)
  }
  get lastFetch() {
    return E(h(this, Ie))
  }
  set lastFetch(t) {
    T(h(this, Ie), t)
  }
  get charges() {
    return E(h(this, Re))
  }
  set charges(t) {
    T(h(this, Re), t)
  }
  get cooldown() {
    return E(h(this, De))
  }
  set cooldown(t) {
    T(h(this, De), t)
  }
  get flagsBitmap() {
    return E(h(this, Pe))
  }
  set flagsBitmap(t) {
    T(h(this, Pe), t)
  }
  get timeoutUntil() {
    return E(h(this, xe))
  }
  set timeoutUntil(t) {
    T(h(this, xe), t)
  }
  async refresh() {
    var t, e;
    try {
      return this.loading = !0, this.data = await $.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && $.getNotificationCount().then(n => {
        this.notificationCount = n
      }).catch(n => {
        console.error("Failed to refresh notification count:", n)
      }), (e = this.data) != null && e.id && F.setUserId(this.data.id), !0
    } catch (n) {
      return console.error(n), QS.warning(Yf(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var t;
    await $.logout(), (t = this.channel) == null || t.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(t) {
    var n;
    return t < 32 ? !0 : ((((n = this.data) == null ? void 0 : n.extraColorsBitmap) ?? 0) & 1 << t - 32) !== 0
  }
  hasPermission(t) {
    var e;
    return Bt((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return $S((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
Ae = new WeakMap, Se = new WeakMap, Ne = new WeakMap, Ie = new WeakMap, Re = new WeakMap, De = new WeakMap, Pe = new WeakMap, xe = new WeakMap;
const W = new XS;
let y;
const L = new Array(128).fill(void 0);
L.push(void 0, null, !0, !1);

function m(r) {
  return L[r]
}
let oe = L.length;

function O(r) {
  oe === L.length && L.push(L.length + 1);
  const t = oe;
  return oe = L[t], L[t] = r, t
}

function C(r, t) {
  try {
    return r.apply(this, t)
  } catch (e) {
    y.__wbindgen_export_0(O(e))
  }
}

function G(r) {
  return r == null
}
const $t = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && $t.decode();
let ie = null;

function Ue() {
  return (ie === null || ie.byteLength === 0) && (ie = new Uint8Array(y.memory.buffer)), ie
}

function Ce(r, t) {
  return r = r >>> 0, $t.decode(Ue().subarray(r, r + t))
}

function ZS(r) {
  r < 132 || (L[r] = oe, oe = r)
}

function Nt(r) {
  const t = m(r);
  return ZS(r), t
}
let Y = null;

function Fe() {
  return (Y === null || Y.buffer.detached === !0 || Y.buffer.detached === void 0 && Y.buffer !== y.memory.buffer) && (Y = new DataView(y.memory.buffer)), Y
}
let Q = 0;
const Me = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  eN = typeof Me.encodeInto == "function" ? function(r, t) {
    return Me.encodeInto(r, t)
  } : function(r, t) {
    const e = Me.encode(r);
    return t.set(e), {
      read: r.length,
      written: e.length
    }
  };

function je(r, t, e) {
  if (e === void 0) {
    const u = Me.encode(r),
      d = t(u.length, 1) >>> 0;
    return Ue().subarray(d, d + u.length).set(u), Q = u.length, d
  }
  let n = r.length,
    a = t(n, 1) >>> 0;
  const s = Ue();
  let c = 0;
  for (; c < n; c++) {
    const u = r.charCodeAt(c);
    if (u > 127) break;
    s[a + c] = u
  }
  if (c !== n) {
    c !== 0 && (r = r.slice(c)), a = e(a, n, n = c + r.length * 3, 1) >>> 0;
    const u = Ue().subarray(a + c, a + n),
      d = eN(r, u);
    c += d.written, a = e(a, n, c, 1) >>> 0
  }
  return Q = c, a
}

function tN(r) {
  const t = je(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = Q;
  y.set_discord_id(t, e)
}

function rN(r) {
  const t = je(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = Q;
  y.set_fingerprint(t, e)
}

function nN(r) {
  const t = je(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = Q;
  y.set_detected_bot(t, e)
}

function aN(r) {
  let t, e;
  try {
    const s = y.__wbindgen_add_to_stack_pointer(-16),
      c = je(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
      u = Q;
    y.get_pawtected_endpoint_payload(s, c, u);
    var n = Fe().getInt32(s + 0, !0),
      a = Fe().getInt32(s + 4, !0);
    return t = n, e = a, Ce(n, a)
  } finally {
    y.__wbindgen_add_to_stack_pointer(16), y.__wbindgen_export_3(t, e, 1)
  }
}

function Ye(r) {
  y.set_user_id(r)
}

function iN(r) {
  y.set_cf_likely_automated(r)
}

function sN(r) {
  y.set_automated_clicks(r)
}

function oN(r) {
  const t = je(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = Q;
  y.request_url(t, e)
}

function cN(r) {
  y.set_automated_browser(r)
}
async function uN(r, t) {
  if (typeof Response == "function" && r instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(r, t)
    } catch (n) {
      if (r.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n);
      else throw n
    }
    const e = await r.arrayBuffer();
    return await WebAssembly.instantiate(e, t)
  } else {
    const e = await WebAssembly.instantiate(r, t);
    return e instanceof WebAssembly.Instance ? {
      instance: e,
      module: r
    } : e
  }
}

function lN() {
  const r = {};
  return r.wbg = {}, r.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    const e = m(t).buffer;
    return O(e)
  }, r.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return C(function(t, e) {
      const n = m(t).call(m(e));
      return O(n)
    }, arguments)
  }, r.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return C(function(t, e, n) {
      const a = m(t).call(m(e), m(n));
      return O(a)
    }, arguments)
  }, r.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    const e = m(t).crypto;
    return O(e)
  }, r.wbg.__wbg_document_d249400bd7bd996d = function(t) {
    const e = m(t).document;
    return G(e) ? 0 : O(e)
  }, r.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return C(function(t, e) {
      m(t).getRandomValues(m(e))
    }, arguments)
  }, r.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return C(function(t, e) {
      const n = Reflect.get(m(t), m(e));
      return O(n)
    }, arguments)
  }, r.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return C(function(t) {
      return m(t).hasFocus()
    }, arguments)
  }, r.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return C(function(t) {
      const e = m(t).innerWidth;
      return O(e)
    }, arguments)
  }, r.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(t) {
    let e;
    try {
      e = m(t) instanceof Window
    } catch {
      e = !1
    }
    return e
  }, r.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(t) {
    const e = m(t).msCrypto;
    return O(e)
  }, r.wbg.__wbg_navigator_1577371c070c8947 = function(t) {
    const e = m(t).navigator;
    return O(e)
  }, r.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    const e = new Uint8Array(m(t));
    return O(e)
  }, r.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    const n = new Function(Ce(t, e));
    return O(n)
  }, r.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, n) {
    const a = new Uint8Array(m(t), e >>> 0, n >>> 0);
    return O(a)
  }, r.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return O(e)
  }, r.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    const e = m(t).node;
    return O(e)
  }, r.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, r.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    const e = m(t).process;
    return O(e)
  }, r.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return C(function(t, e) {
      m(t).randomFillSync(Nt(e))
    }, arguments)
  }, r.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return C(function() {
      const t = module.require;
      return O(t)
    }, arguments)
  }, r.wbg.__wbg_set_65595bdd868b3009 = function(t, e, n) {
    m(t).set(m(e), n >>> 0)
  }, r.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return G(t) ? 0 : O(t)
  }, r.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return G(t) ? 0 : O(t)
  }, r.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return G(t) ? 0 : O(t)
  }, r.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return G(t) ? 0 : O(t)
  }, r.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, n) {
    const a = m(t).subarray(e >>> 0, n >>> 0);
    return O(a)
  }, r.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    const e = m(t).versions;
    return O(e)
  }, r.wbg.__wbindgen_boolean_get = function(t) {
    const e = m(t);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, r.wbg.__wbindgen_is_function = function(t) {
    return typeof m(t) == "function"
  }, r.wbg.__wbindgen_is_null = function(t) {
    return m(t) === null
  }, r.wbg.__wbindgen_is_object = function(t) {
    const e = m(t);
    return typeof e == "object" && e !== null
  }, r.wbg.__wbindgen_is_string = function(t) {
    return typeof m(t) == "string"
  }, r.wbg.__wbindgen_is_undefined = function(t) {
    return m(t) === void 0
  }, r.wbg.__wbindgen_memory = function() {
    const t = y.memory;
    return O(t)
  }, r.wbg.__wbindgen_number_get = function(t, e) {
    const n = m(e),
      a = typeof n == "number" ? n : void 0;
    Fe().setFloat64(t + 8, G(a) ? 0 : a, !0), Fe().setInt32(t + 0, !G(a), !0)
  }, r.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = m(t);
    return O(e)
  }, r.wbg.__wbindgen_object_drop_ref = function(t) {
    Nt(t)
  }, r.wbg.__wbindgen_string_new = function(t, e) {
    const n = Ce(t, e);
    return O(n)
  }, r.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(Ce(t, e))
  }, r
}

function _N(r, t) {
  return y = r.exports, Ft.__wbindgen_wasm_module = t, Y = null, ie = null, y
}
async function Ft(r) {
  if (y !== void 0) return y;
  typeof r < "u" && (Object.getPrototypeOf(r) === Object.prototype ? {
    module_or_path: r
  } = r : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof r > "u" && (r = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = lN();
  (typeof r == "string" || typeof Request == "function" && r instanceof Request || typeof URL == "function" && r instanceof URL) && (r = fetch(r));
  const {
    instance: e,
    module: n
  } = await uN(await r, t);
  return _N(e, n)
}
class dN {
  constructor() {
    w(this, "interval");
    w(this, "storagesEmpty", !1);
    w(this, "storages", [new He, new Ze, new et, new hN]);
    w(this, "pawtectLoaded");
    w(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!W.data || this.storagesEmpty || localStorage.getItem(He.KEY))) {
        for (const e of this.storages) {
          const n = e.get();
          if (n) {
            for (const a of this.storages) a.set(n);
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
    const e = K.day;
    for (const a of this.storages) {
      const s = a.get();
      if (s && !(s.timestamp + e < Date.now()) && s.userId !== t) return !0
    }
    const n = {
      userId: t,
      timestamp: Date.now()
    };
    for (const a of this.storages) a.set(n);
    return this.storagesEmpty = !1, !1
  }
  loadPawtect() {
    return this.pawtectLoaded || (this.pawtectLoaded = (async () => {
      var t;
      try {
        await Ft(er), (t = W.data) != null && t.id && Ye(W.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: fN((n, a) => {
            let s = null;
            return n instanceof Request ? s = n.url : n instanceof URL ? s = n.href : typeof n == "string" && (s = n), s !== null && !s.startsWith("/") && oN(s), e.call(window, n, a)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(t) {
    await this.loadPawtect(), Ye(t)
  }
  async setCfLikelyAutomated(t) {
    await this.loadPawtect(), iN(t)
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
    if (!await this.loadPawtect()) throw new Error(Pw());
    const n = navigator.webdriver,
      [a, s] = await Promise.all([tt(), Qr().catch(c => (console.error(c), {
        bot: !1
      }))]);
    return Ye(W.data.id), tN(W.data.discordId ?? ""), rN(a), cN(n), sN(Qe.automatedClicks), s.bot && nN(s.botKind ?? "unknown"), aN(t)
  }
}

function fN(r) {
  return r.bind().bind()
}
const M = class M {
  static codec(t) {
    const e = new TextEncoder().encode(this.XOR_KEY),
      n = new Uint8Array(t.length);
    for (let a = 0; a < t.length; a++) n[a] = t[a] ^ e[a % e.length];
    return n
  }
  get() {
    try {
      const t = localStorage.getItem(M.KEY);
      if (!t) return;
      const e = Uint8Array.from(atob(t), a => a.charCodeAt(0)),
        n = new TextDecoder().decode(M.codec(e));
      return JSON.parse(n)
    } catch {
      return
    }
  }
  set(t) {
    const e = new TextEncoder().encode(JSON.stringify(t)),
      n = M.codec(e);
    localStorage.setItem(M.KEY, btoa(String.fromCharCode(...n)))
  }
};
w(M, "KEY", "ui_layout_v3"), w(M, "XOR_KEY", "wplace-prefs");
let He = M;
const B = class B {
  get() {
    try {
      const t = sessionStorage.getItem(B.KEY);
      if (!t) return;
      let e = "";
      for (let n = 0; n < t.length; n += 4) {
        const a = parseInt(t.slice(n, n + 4), 16);
        e += String.fromCharCode(a - B.SHIFT & 65535)
      }
      return JSON.parse(e)
    } catch {
      return
    }
  }
  set(t) {
    const e = JSON.stringify(t);
    let n = "";
    for (const a of e) {
      const s = a.charCodeAt(0) + B.SHIFT & 65535;
      n += s.toString(16).padStart(4, "0")
    }
    sessionStorage.setItem(B.KEY, n)
  }
};
w(B, "KEY", "nav.cursor"), w(B, "SHIFT", 13);
let Ze = B;
const J = class J {
  get() {
    const t = document.cookie.match(new RegExp("(?:^|; )" + J.KEY + "=([^;]*)"));
    if (t) try {
      const [e, n] = decodeURIComponent(t[1]).split("."), a = parseInt(e, 36), s = parseInt(n, 36);
      return !Number.isFinite(a) || !Number.isFinite(s) ? void 0 : {
        userId: a,
        timestamp: s
      }
    } catch {
      return
    }
  }
  set(t) {
    const e = `${t.userId.toString(36)}.${t.timestamp.toString(36)}`;
    document.cookie = `${J.KEY}=${encodeURIComponent(e)};path=/;max-age=${J.MAX_AGE};SameSite=Lax`
  }
};
w(J, "KEY", "_pf_uid"), w(J, "MAX_AGE", 3600 * 24 * 365);
let et = J;
class hN {
  constructor() {
    w(this, "packed")
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
const F = new dN;
export {
  NN as $, Fa as A, Ra as B, uf as C, qt as D, Xe as E, bS as F, SN as G, Lv as H, P as I, KN as J, $N as K, IN as L, ON as M, R as N, bN as O, kN as P, vN as Q, EN as R, AN as S, K as T, Zr as U, qm as V, TN as W, Ut as X, Ct as Y, ub as Z, Eb as _, DN as a, vc as a0, vS as a1, MN as a2, BN as a3, zN as a4, LN as a5, ae as a6, l as a7, oq as a8, rO as a9, oE as aa, RN as ab, HS as ac, Kt as ad, Pw as ae, zg as af, PN as ag, jN as ah, UN as ai, Kl as aj, ct as ak, $ as b, qN as c, Ke as d, i as e, o as f, Qe as g, ft as h, F as i, Dt as j, ee as k, CN as l, Ru as m, Yf as n, wu as o, Nl as p, ml as q, em as r, xN as s, QS as t, W as u, se as v, nl as w, Fu as x, co as y, Ws as z
};