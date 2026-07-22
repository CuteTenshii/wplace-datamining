var Pt = Object.defineProperty;
var Je = r => {
  throw TypeError(r)
};
var xt = (r, t, e) => t in r ? Pt(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var g = (r, t, e) => xt(r, typeof t != "symbol" ? t + "" : t, e),
  jt = (r, t, e) => t.has(r) || Je("Cannot " + e);
var p = (r, t, e) => (jt(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  b = (r, t, e) => t.has(r) ? Je("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e);
import {
  h as Ut,
  P as ft,
  g as Ve,
  j as Lt
} from "./DzBCW1Dp.js";
import {
  e as I,
  i as E,
  h as O,
  g as je,
  bL as Mt,
  y as Ct,
  B as Qe,
  u as Q
} from "./BKnGt6Ki.js";
import {
  g as d
} from "./BhCkpOlh.js";
const zt = "" + new URL("../assets/pawtect_wasm_bg.8VPqYlMZ.wasm", import.meta.url).href;
var Bt = "2.0.0";
const h = {
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
class v extends Error {
  constructor(t, e) {
    super(e), this.state = t, this.name = "BotdError", Object.setPrototypeOf(this, v.prototype)
  }
}

function qt(r, t) {
  const e = {};
  let n = {
    bot: !1
  };
  for (const s in t) {
    const o = t[s],
      u = o(r);
    let c = {
      bot: !1
    };
    typeof u == "string" ? c = {
      bot: !0,
      botKind: u
    } : u && (c = {
      bot: !0,
      botKind: h.Unknown
    }), e[s] = c, c.bot && (n = c)
  }
  return [e, n]
}
async function Kt(r) {
  const t = {},
    e = Object.keys(r);
  return await Promise.all(e.map(async n => {
    const s = r[n];
    try {
      t[n] = {
        value: await s(),
        state: 0
      }
    } catch (o) {
      o instanceof v ? t[n] = {
        state: o.state,
        error: `${o.name}: ${o.message}`
      } : t[n] = {
        state: -3,
        error: o instanceof Error ? `${o.name}: ${o.message}` : String(o)
      }
    }
  })), t
}

function Ft({
  appVersion: r
}) {
  if (r.state !== 0) return !1;
  if (/headless/i.test(r.value)) return h.HeadlessChrome;
  if (/electron/i.test(r.value)) return h.Electron;
  if (/slimerjs/i.test(r.value)) return h.SlimerJS
}

function Re(r, t) {
  return r.indexOf(t) !== -1
}

function x(r, t) {
  return r.indexOf(t) !== -1
}

function $t(r, t) {
  if ("find" in r) return r.find(t);
  for (let e = 0; e < r.length; e++)
    if (t(r[e], e, r)) return r[e]
}

function Xe(r) {
  return Object.getOwnPropertyNames(r)
}

function qe(r, ...t) {
  for (const e of t)
    if (typeof e == "string") {
      if (Re(r, e)) return !0
    } else if ($t(r, s => e.test(s)) != null) return !0;
  return !1
}

function Y(r) {
  return r.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function Gt({
  documentElementKeys: r
}) {
  if (r.state !== 0) return !1;
  if (qe(r.value, "selenium", "webdriver", "driver")) return h.Selenium
}

function Vt({
  errorTrace: r
}) {
  if (r.state !== 0) return !1;
  if (/PhantomJS/i.test(r.value)) return h.PhantomJS
}

function Ht({
  evalLength: r,
  browserKind: t,
  browserEngineKind: e
}) {
  if (r.state !== 0 || t.state !== 0 || e.state !== 0) return;
  const n = r.value;
  return e.value === "unknown" ? !1 : n === 37 && !Re(["webkit", "gecko"], e.value) || n === 39 && !Re(["internet_explorer"], t.value) || n === 33 && !Re(["chromium"], e.value)
}

function Wt({
  functionBind: r
}) {
  if (r.state === -2) return h.PhantomJS
}

function Yt({
  languages: r
}) {
  if (r.state === 0 && r.value.length === 0) return h.HeadlessChrome
}

function Jt({
  mimeTypesConsistent: r
}) {
  if (r.state === 0 && !r.value) return h.Unknown
}

function Qt({
  notificationPermissions: r,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== "chrome") return !1;
  if (r.state === 0 && r.value) return h.HeadlessChrome
}

function Xt({
  pluginsArray: r
}) {
  if (r.state === 0 && !r.value) return h.HeadlessChrome
}

function Zt({
  pluginsLength: r,
  android: t,
  browserKind: e,
  browserEngineKind: n
}) {
  if (!(r.state !== 0 || t.state !== 0 || e.state !== 0 || n.state !== 0) && !(e.value !== "chrome" || t.value || n.value !== "chromium") && r.value === 0) return h.HeadlessChrome
}

function er({
  process: r
}) {
  var t;
  if (r.state !== 0) return !1;
  if (r.value.type === "renderer" || ((t = r.value.versions) === null || t === void 0 ? void 0 : t.electron) != null) return h.Electron
}

function tr({
  productSub: r,
  browserKind: t
}) {
  if (r.state !== 0 || t.state !== 0) return !1;
  if ((t.value === "chrome" || t.value === "safari" || t.value === "opera" || t.value === "wechat") && r.value !== "20030107") return h.Unknown
}

function rr({
  userAgent: r
}) {
  if (r.state !== 0) return !1;
  if (/PhantomJS/i.test(r.value)) return h.PhantomJS;
  if (/Headless/i.test(r.value)) return h.HeadlessChrome;
  if (/Electron/i.test(r.value)) return h.Electron;
  if (/slimerjs/i.test(r.value)) return h.SlimerJS
}

function nr({
  webDriver: r
}) {
  if (r.state === 0 && r.value) return h.HeadlessChrome
}

function sr({
  webGL: r
}) {
  if (r.state === 0) {
    const {
      vendor: t,
      renderer: e
    } = r.value;
    if (t == "Brian Paul" && e == "Mesa OffScreen") return h.HeadlessChrome
  }
}

function ar({
  windowExternal: r
}) {
  if (r.state !== 0) return !1;
  if (/Sequentum/i.test(r.value)) return h.Sequentum
}

function or({
  windowSize: r,
  documentFocus: t
}) {
  if (r.state !== 0 || t.state !== 0) return !1;
  const {
    outerWidth: e,
    outerHeight: n
  } = r.value;
  if (t.value && e === 0 && n === 0) return h.HeadlessChrome
}

function ir({
  distinctiveProps: r
}) {
  if (r.state !== 0) return !1;
  const t = r.value;
  let e;
  for (e in t)
    if (t[e]) return e
}
const cr = {
  detectAppVersion: Ft,
  detectDocumentAttributes: Gt,
  detectErrorTrace: Vt,
  detectEvalLengthInconsistency: Ht,
  detectFunctionBind: Wt,
  detectLanguagesLengthInconsistency: Yt,
  detectNotificationPermissions: Qt,
  detectPluginsArray: Xt,
  detectPluginsLengthInconsistency: Zt,
  detectProcess: er,
  detectUserAgent: rr,
  detectWebDriver: nr,
  detectWebGL: sr,
  detectWindowExternal: ar,
  detectWindowSize: or,
  detectMimeTypesConsistent: Jt,
  detectProductSub: tr,
  detectDistinctiveProperties: ir
};

function ur() {
  const r = navigator.appVersion;
  if (r == null) throw new v(-1, "navigator.appVersion is undefined");
  return r
}

function lr() {
  if (document.documentElement === void 0) throw new v(-1, "document.documentElement is undefined");
  const {
    documentElement: r
  } = document;
  if (typeof r.getAttributeNames != "function") throw new v(-2, "document.documentElement.getAttributeNames is not a function");
  return r.getAttributeNames()
}

function dr() {
  try {
    null[0]()
  } catch (r) {
    if (r instanceof Error && r.stack != null) return r.stack.toString()
  }
  throw new v(-3, "errorTrace signal unexpected behaviour")
}

function _r() {
  return eval.toString().length
}

function fr() {
  if (Function.prototype.bind === void 0) throw new v(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function He() {
  var r, t;
  const e = window,
    n = navigator;
  return Y(["webkitPersistentStorage" in n, "webkitTemporaryStorage" in n, n.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : Y(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, n.vendor.indexOf("Apple") === 0, "getStorageUpdates" in n, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : Y(["buildID" in navigator, "MozAppearance" in ((t = (r = document.documentElement) === null || r === void 0 ? void 0 : r.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function pr() {
  var r;
  const t = (r = navigator.userAgent) === null || r === void 0 ? void 0 : r.toLowerCase();
  return x(t, "edg/") ? "edge" : x(t, "trident") || x(t, "msie") ? "internet_explorer" : x(t, "wechat") ? "wechat" : x(t, "firefox") ? "firefox" : x(t, "opera") || x(t, "opr") ? "opera" : x(t, "chrome") ? "chrome" : x(t, "safari") ? "safari" : "unknown"
}

function hr() {
  const r = He(),
    t = r === "chromium",
    e = r === "gecko",
    n = window,
    s = navigator,
    o = "connection";
  return t ? Y([!("SharedWorker" in n), s[o] && "ontypechange" in s[o], !("sinkId" in new Audio)]) >= 2 : e ? Y(["onorientationchange" in n, "orientation" in n, /android/i.test(s.appVersion)]) >= 2 : !1
}

function mr() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function gr() {
  const r = window;
  return Y([!("MediaSettingsRange" in r), "RTCEncodedAudioFrame" in r, "" + r.Intl == "[object Intl]", "" + r.Reflect == "[object Reflect]"]) >= 3
}

function wr() {
  const r = navigator,
    t = [],
    e = r.language || r.userLanguage || r.browserLanguage || r.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(r.languages)) He() === "chromium" && gr() || t.push(r.languages);
  else if (typeof r.languages == "string") {
    const n = r.languages;
    n && t.push(n.split(","))
  }
  return t
}

function yr() {
  if (navigator.mimeTypes === void 0) throw new v(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: r
  } = navigator;
  let t = Object.getPrototypeOf(r) === MimeTypeArray.prototype;
  for (let e = 0; e < r.length; e++) t && (t = Object.getPrototypeOf(r[e]) === MimeType.prototype);
  return t
}
async function br() {
  if (window.Notification === void 0) throw new v(-1, "window.Notification is undefined");
  if (navigator.permissions === void 0) throw new v(-1, "navigator.permissions is undefined");
  const {
    permissions: r
  } = navigator;
  if (typeof r.query != "function") throw new v(-2, "navigator.permissions.query is not a function");
  try {
    const t = await r.query({
      name: "notifications"
    });
    return window.Notification.permission === "denied" && t.state === "prompt"
  } catch {
    throw new v(-3, "notificationPermissions signal unexpected behaviour")
  }
}

function vr() {
  if (navigator.plugins === void 0) throw new v(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new v(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function Er() {
  if (navigator.plugins === void 0) throw new v(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new v(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function Tr() {
  const {
    process: r
  } = window, t = "window.process is";
  if (r === void 0) throw new v(-1, `${t} undefined`);
  if (r && typeof r != "object") throw new v(-3, `${t} not an object`);
  return r
}

function Or() {
  const {
    productSub: r
  } = navigator;
  if (r === void 0) throw new v(-1, "navigator.productSub is undefined");
  return r
}

function kr() {
  if (navigator.connection === void 0) throw new v(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new v(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function Ir() {
  return navigator.userAgent
}

function Nr() {
  if (navigator.webdriver == null) throw new v(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function Sr() {
  const r = document.createElement("canvas");
  if (typeof r.getContext != "function") throw new v(-2, "HTMLCanvasElement.getContext is not a function");
  const t = r.getContext("webgl");
  if (t === null) throw new v(-4, "WebGLRenderingContext is null");
  if (typeof t.getParameter != "function") throw new v(-2, "WebGLRenderingContext.getParameter is not a function");
  const e = t.getParameter(t.VENDOR),
    n = t.getParameter(t.RENDERER);
  return {
    vendor: e,
    renderer: n
  }
}

function Ar() {
  if (window.external === void 0) throw new v(-1, "window.external is undefined");
  const {
    external: r
  } = window;
  if (typeof r.toString != "function") throw new v(-2, "window.external.toString is not a function");
  return r.toString()
}

function Rr() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function Dr() {
  const r = {
    [h.Awesomium]: {
      window: ["awesomium"]
    },
    [h.Cef]: {
      window: ["RunPerfTest"]
    },
    [h.CefSharp]: {
      window: ["CefSharp"]
    },
    [h.CoachJS]: {
      window: ["emit"]
    },
    [h.FMiner]: {
      window: ["fmget_targets"]
    },
    [h.Geb]: {
      window: ["geb"]
    },
    [h.NightmareJS]: {
      window: ["__nightmare", "nightmare"]
    },
    [h.Phantomas]: {
      window: ["__phantomas"]
    },
    [h.PhantomJS]: {
      window: ["callPhantom", "_phantom"]
    },
    [h.Rhino]: {
      window: ["spawn"]
    },
    [h.Selenium]: {
      window: ["_Selenium_IDE_Recorder", "_selenium", "calledSelenium", /^([a-z]){3}_.*_(Array|Promise|Symbol)$/],
      document: ["__selenium_evaluate", "selenium-evaluate", "__selenium_unwrapped"]
    },
    [h.WebDriverIO]: {
      window: ["wdioElectron"]
    },
    [h.WebDriver]: {
      window: ["webdriver", "__webdriverFunc", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "_WEBDRIVER_ELEM_CACHE", "ChromeDriverw"],
      document: ["__webdriver_script_fn", "__driver_evaluate", "__webdriver_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__fxdriver_unwrapped", "__webdriver_script_fn", "__webdriver_script_func", "__webdriver_script_function", "$cdc_asdjflasutopfhvcZLmcf", "$cdc_asdjflasutopfhvcZLmcfl_", "$chrome_asyncScriptInfo", "__$webdriverAsyncExecutor"]
    },
    [h.HeadlessChrome]: {
      window: ["domAutomation", "domAutomationController"]
    }
  };
  let t;
  const e = {},
    n = Xe(window);
  let s = [];
  window.document !== void 0 && (s = Xe(window.document));
  for (t in r) {
    const o = r[t];
    if (o !== void 0) {
      const u = o.window === void 0 ? !1 : qe(n, ...o.window),
        c = o.document === void 0 || !s.length ? !1 : qe(s, ...o.document);
      e[t] = u || c
    }
  }
  return e
}
const Pr = {
  android: hr,
  browserKind: pr,
  browserEngineKind: He,
  documentFocus: mr,
  userAgent: Ir,
  appVersion: ur,
  rtt: kr,
  windowSize: Rr,
  pluginsLength: Er,
  pluginsArray: vr,
  errorTrace: dr,
  productSub: Or,
  windowExternal: Ar,
  mimeTypesConsistent: yr,
  evalLength: _r,
  webGL: Sr,
  webDriver: Nr,
  languages: wr,
  notificationPermissions: br,
  documentElementKeys: lr,
  functionBind: fr,
  process: Tr,
  distinctiveProps: Dr
};
class xr {
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
    const [t, e] = qt(this.components, cr);
    return this.detections = t, e
  }
  async collect() {
    return this.components = await Kt(Pr), this.components
  }
}

function jr() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const r = new XMLHttpRequest;
    r.open("get", `https://m1.openfpcdn.io/botd/v${Bt}/npm-monitoring`, !0), r.send()
  } catch (r) {
    console.error(r)
  }
}
async function Ur({
  monitoring: r = !0
} = {}) {
  r && jr();
  const t = new xr;
  return await t.collect(), t
}
let ze = null;
async function Lr() {
  return await Mr() ? {
    bot: !1
  } : (await Cr()).detect()
}
async function Mr() {
  var e;
  const r = navigator;
  if (!((e = r.brave) != null && e.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(r.userAgent)) return !1;
  try {
    return await r.brave.isBrave()
  } catch {
    return !1
  }
}

function Cr() {
  return ze || (ze = Ur({
    monitoring: !1
  })), ze
}
const Ze = "theme";
var te, re, ne, se, ae, oe, ie, ce, ue, le, de, _e;
class zr {
  constructor() {
    b(this, te, I(!1));
    b(this, re, I(!1));
    b(this, ne, I(!1));
    b(this, se, I(!1));
    b(this, ae, I(0));
    b(this, oe, I(!1));
    b(this, ie, I(je(Br())));
    b(this, ce, I(null));
    b(this, ue, I(!1));
    b(this, le, I("custom-winter"));
    b(this, de, I(je(Date.now())));
    b(this, _e, I(void 0));
    setInterval(() => {
      O(p(this, de), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(Ze), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return E(p(this, te))
  }
  set dropletsDialogOpen(t) {
    O(p(this, te), t, !0)
  }
  get accountConflictDialogOpen() {
    return E(p(this, re))
  }
  set accountConflictDialogOpen(t) {
    O(p(this, re), t, !0)
  }
  get pendingHistoryDialogOpen() {
    return E(p(this, ne))
  }
  set pendingHistoryDialogOpen(t) {
    O(p(this, ne), t, !0)
  }
  get storeDialogOpen() {
    return E(p(this, se))
  }
  set storeDialogOpen(t) {
    O(p(this, se), t, !0)
  }
  get storeTabIndex() {
    return E(p(this, ae))
  }
  set storeTabIndex(t) {
    O(p(this, ae), t, !0)
  }
  get muted() {
    return E(p(this, oe))
  }
  set muted(t) {
    O(p(this, oe), t, !0)
  }
  get language() {
    return E(p(this, ie))
  }
  set language(t) {
    O(p(this, ie), t, !0)
  }
  get map() {
    return E(p(this, ce))
  }
  set map(t) {
    O(p(this, ce), t)
  }
  get automatedClicks() {
    return E(p(this, ue))
  }
  set automatedClicks(t) {
    O(p(this, ue), t, !0)
  }
  get theme() {
    return E(p(this, le))
  }
  set theme(t) {
    O(p(this, le), t, !0), localStorage.setItem(Ze, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return E(p(this, de))
  }
  get captcha() {
    return qr ? E(p(this, _e)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    O(p(this, _e), t, !0)
  }
}
te = new WeakMap, re = new WeakMap, ne = new WeakMap, se = new WeakMap, ae = new WeakMap, oe = new WeakMap, ie = new WeakMap, ce = new WeakMap, ue = new WeakMap, le = new WeakMap, de = new WeakMap, _e = new WeakMap;
const Ke = new zr;

function Br() {
  if (navigator.languages && navigator.languages.length > 0) {
    const r = navigator.languages.find(t => t.length === 2);
    if (r) return r
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const qr = Ut.toLowerCase() !== "false",
  Kr = `
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
async function Fr() {
  try {
    const r = await fetch(`${ft}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!r.ok) return null;
    const t = await r.json(),
      e = await $r(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function $r(r, t) {
  return new Promise(e => {
    const n = new Blob([Kr], {
        type: "application/javascript"
      }),
      s = URL.createObjectURL(n),
      o = new Worker(s),
      u = setTimeout(() => {
        o.terminate(), URL.revokeObjectURL(s), e(null)
      }, 12e4);
    o.onmessage = c => {
      clearTimeout(u), o.terminate(), URL.revokeObjectURL(s), c.data.error ? e(null) : e(c.data.nonce)
    }, o.onerror = () => {
      clearTimeout(u), o.terminate(), URL.revokeObjectURL(s), e(null)
    }, o.postMessage({
      prefix: r,
      difficulty: t
    })
  })
}
const pt = 3;
var fe, pe;
class Gr {
  constructor() {
    b(this, fe, I(null));
    b(this, pe, I(0))
  }
  get current() {
    return E(p(this, fe))
  }
  set current(t) {
    O(p(this, fe), t, !0)
  }
  get errorCount() {
    return E(p(this, pe))
  }
  set errorCount(t) {
    O(p(this, pe), t, !0)
  }
}
fe = new WeakMap, pe = new WeakMap;
const S = new Gr;
async function ht(r) {
  if (r === 1) return Vr();
  if (r === 2) {
    const t = await mt();
    return t ? et("turnstile", t) : !1
  }
  if (r === 3) {
    const t = await Hr();
    return t ? et("hcaptcha", t) : !1
  }
  return r === 4 ? Wr() : !1
}
async function Vr() {
  for (let r = 0; r < pt; r++) try {
    const t = await Fr();
    if (!t) continue;
    return await q.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}
async function et(r, t) {
  try {
    const e = await q.postCaptchaSession({
      provider: r,
      token: t
    });
    return await q.verifyChallenge({
      type: "captcha",
      sessionId: e.sessionId
    }), !0
  } catch {
    return !1
  }
}
const J = {};

function mt() {
  return gt(2)
}

function Hr() {
  return gt(3)
}

function gt(r) {
  const t = J[r];
  if (t) return t;
  const e = new Promise(n => {
    S.errorCount = 0, S.current = {
      tier: r,
      resolve: s => {
        delete J[r], n(s)
      }
    }
  });
  return J[r] = e, e
}

function Wr() {
  const r = J[4];
  if (r) return r;
  const t = new Promise(e => {
    S.errorCount = 0, S.current = {
      tier: 4,
      resolve: n => {
        delete J[4], e(n)
      }
    }
  });
  return J[4] = t, t
}

function _v(r) {
  const t = S.current;
  !t || t.tier === 4 || (t.resolve(r), S.current = null)
}

function fv() {
  const r = S.current;
  !r || r.tier === 4 || (S.errorCount += 1, S.errorCount >= pt && (r.resolve(void 0), S.current = null))
}

function pv() {
  const r = S.current;
  !r || r.tier !== 4 || (r.resolve(!0), S.current = null)
}

function hv() {
  const r = S.current;
  r && (r.tier === 4 ? r.resolve(!1) : r.resolve(void 0), S.current = null)
}
var a = (r => (r[r.CONTINUE = 100] = "CONTINUE", r[r.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", r[r.PROCESSING = 102] = "PROCESSING", r[r.EARLY_HINTS = 103] = "EARLY_HINTS", r[r.OK = 200] = "OK", r[r.CREATED = 201] = "CREATED", r[r.ACCEPTED = 202] = "ACCEPTED", r[r.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", r[r.NO_CONTENT = 204] = "NO_CONTENT", r[r.RESET_CONTENT = 205] = "RESET_CONTENT", r[r.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", r[r.MULTI_STATUS = 207] = "MULTI_STATUS", r[r.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", r[r.IM_USED = 226] = "IM_USED", r[r.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", r[r.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", r[r.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", r[r.FOUND = 302] = "FOUND", r[r.SEE_OTHER = 303] = "SEE_OTHER", r[r.NOT_MODIFIED = 304] = "NOT_MODIFIED", r[r.USE_PROXY = 305] = "USE_PROXY", r[r.SWITCH_PROXY = 306] = "SWITCH_PROXY", r[r.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", r[r.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", r[r.BAD_REQUEST = 400] = "BAD_REQUEST", r[r.UNAUTHORIZED = 401] = "UNAUTHORIZED", r[r.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", r[r.FORBIDDEN = 403] = "FORBIDDEN", r[r.NOT_FOUND = 404] = "NOT_FOUND", r[r.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", r[r.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", r[r.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", r[r.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", r[r.CONFLICT = 409] = "CONFLICT", r[r.GONE = 410] = "GONE", r[r.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", r[r.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", r[r.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", r[r.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", r[r.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", r[r.URI_TOO_LONG = 414] = "URI_TOO_LONG", r[r.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", r[r.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", r[r.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", r[r.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", r[r.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", r[r.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", r[r.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", r[r.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", r[r.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", r[r.LOCKED = 423] = "LOCKED", r[r.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", r[r.TOO_EARLY = 425] = "TOO_EARLY", r[r.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", r[r.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", r[r.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", r[r.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", r[r.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", r[r.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", r[r.BAD_GATEWAY = 502] = "BAD_GATEWAY", r[r.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", r[r.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", r[r.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", r[r.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", r[r.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", r[r.LOOP_DETECTED = 508] = "LOOP_DETECTED", r[r.NOT_EXTENDED = 510] = "NOT_EXTENDED", r[r.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", r[r.AWS_ELB_000 = 0] = "AWS_ELB_000", r[r.THIS_IS_FINE = 218] = "THIS_IS_FINE", r[r.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", r[r.METHOD_FAILURE = 420] = "METHOD_FAILURE", r[r.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", r[r.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", r[r.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", r[r.NO_RESPONSE = 444] = "NO_RESPONSE", r[r.RETRY_WITH = 449] = "RETRY_WITH", r[r.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", r[r.REDIRECT_IIS = 451] = "REDIRECT_IIS", r[r.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", r[r.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", r[r.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", r[r.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", r[r.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", r[r.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", r[r.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", r[r.INVALID_TOKEN = 498] = "INVALID_TOKEN", r[r.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", r[r.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", r[r.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", r[r.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", r[r.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", r[r.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", r[r.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", r[r.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", r[r.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", r[r.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", r[r.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", r[r.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", r[r.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", r[r.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", r[r.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", r[r.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", r[r.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", r[r.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", r[r.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", r[r.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", r[r.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", r[r.REQUEST_DENIED = 999] = "REQUEST_DENIED", r))(a || {});
const Yr = () => "A punishment cache reload is already running",
  Jr = () => "Um recarregamento do cache de punições já está em andamento",
  Qr = () => "处罚缓存重新加载已在进行中",
  Xr = () => "Ein Neuladen des Strafen-Caches läuft bereits",
  Zr = () => "Ya hay una recarga de la caché de sanciones en curso",
  en = () => "Un rechargement du cache des sanctions est déjà en cours",
  tn = () => "Un ricaricamento della cache delle sanzioni è già in corso",
  rn = () => "処罰キャッシュの再読み込みは既に実行中です",
  nn = () => "Przeładowanie pamięci kar już trwa",
  sn = () => "Перезагрузка кэша наказаний уже выполняется",
  an = () => "Перезавантаження кешу покарань уже виконується",
  on = () => "Quá trình tải lại bộ nhớ đệm hình phạt đang chạy",
  cn = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Yr() : e === "pt" ? Jr() : e === "ch" ? Qr() : e === "de" ? Xr() : e === "es" ? Zr() : e === "fr" ? en() : e === "it" ? tn() : e === "jp" ? rn() : e === "pl" ? nn() : e === "ru" ? sn() : e === "uk" ? an() : on()
  },
  un = () => "Your account has been suspended for breaking the rules",
  ln = () => "Sua conta foi suspensa por quebrar as regras",
  dn = () => "您的账号因违反规则已被暂停",
  _n = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  fn = () => "Tu cuenta ha sido suspendida por infringir las regras",
  pn = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  hn = () => "Il tuo account è stato sospeso per aver infranto le regole",
  mn = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  gn = () => "Twoje konto zostało zawieszone za łamanie zasad",
  wn = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  yn = () => "Ваш обліковий запис було призупинено за порушення правил",
  bn = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  tt = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? un() : e === "pt" ? ln() : e === "ch" ? dn() : e === "de" ? _n() : e === "es" ? fn() : e === "fr" ? pn() : e === "it" ? hn() : e === "jp" ? mn() : e === "pl" ? gn() : e === "ru" ? wn() : e === "uk" ? yn() : bn()
  },
  vn = () => "Alliance name already taken",
  En = () => "Já possui uma aliança com esse nome",
  Tn = () => "该联盟名称已被占用",
  On = () => "Der Allianzname ist bereits vergeben",
  kn = () => "Ese nombre de alianza ya está en uso",
  In = () => "Ce nom d’alliance est déjà pris",
  Nn = () => "Esiste già un'alleanza con questo nome",
  Sn = () => "このアライアンス名は既に使用されています。",
  An = () => "Nazwa sojuszu jest już zajęta",
  Rn = () => "Такое название альянса уже используется",
  Dn = () => "Назва альянсу вже зайнята",
  Pn = () => "Tên liên minh đã được sử dụng",
  xn = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? vn() : e === "pt" ? En() : e === "ch" ? Tn() : e === "de" ? On() : e === "es" ? kn() : e === "fr" ? In() : e === "it" ? Nn() : e === "jp" ? Sn() : e === "pl" ? An() : e === "ru" ? Rn() : e === "uk" ? Dn() : Pn()
  },
  jn = () => "Alliance name exceeded the maximum number of characters",
  Un = () => "O nome da aliança excedeu o número máximo de caracteres",
  Ln = () => "联盟名称超过最大字符数限制",
  Mn = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  Cn = () => "El nombre de la alianza superó el número máximo de caracteres",
  zn = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  Bn = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  qn = () => "アライアンス名が最大文字数を超えています。",
  Kn = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  Fn = () => "Название альянса превышает максимальную длину",
  $n = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  Gn = () => "Tên liên minh vượt quá số ký tự cho phép",
  Vn = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? jn() : e === "pt" ? Un() : e === "ch" ? Ln() : e === "de" ? Mn() : e === "es" ? Cn() : e === "fr" ? zn() : e === "it" ? Bn() : e === "jp" ? qn() : e === "pl" ? Kn() : e === "ru" ? Fn() : e === "uk" ? $n() : Gn()
  },
  Hn = () => "Alliance with empty name",
  Wn = () => "Aliança com nome vazio",
  Yn = () => "名称为空的联盟",
  Jn = () => "Allianz mit leerem Namen",
  Qn = () => "Alianza con nombre vacío",
  Xn = () => "Alliance avec nom vide",
  Zn = () => "Alleanza con nome vuoto",
  es = () => "名前が空のアライアンスです。",
  ts = () => "Sojusz z pustą nazwą",
  rs = () => "Альянс с пустым названием",
  ns = () => "Альянс із порожньою назвою",
  ss = () => "Liên minh không có tên",
  as = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Hn() : e === "pt" ? Wn() : e === "ch" ? Yn() : e === "de" ? Jn() : e === "es" ? Qn() : e === "fr" ? Xn() : e === "it" ? Zn() : e === "jp" ? es() : e === "pl" ? ts() : e === "ru" ? rs() : e === "uk" ? ns() : ss()
  },
  os = () => "Botting",
  is = () => "Uso de bots",
  cs = () => "脚本",
  us = () => "Bot-Nutzung",
  ls = () => "Botting",
  ds = () => "Bots",
  _s = () => "Uso di bot",
  fs = () => "ボット使用",
  ps = () => "Botting",
  hs = () => "Боттинг",
  ms = () => "Боти",
  gs = () => "Botting",
  ws = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? os() : e === "pt" ? is() : e === "ch" ? cs() : e === "de" ? us() : e === "es" ? ls() : e === "fr" ? ds() : e === "it" ? _s() : e === "jp" ? fs() : e === "pl" ? ps() : e === "ru" ? hs() : e === "uk" ? ms() : gs()
  },
  ys = () => "Use of software to completely automate painting",
  bs = () => "Uso de software para pintar de forma completamente automatizada ",
  vs = () => "使用软件完全自动化绘制",
  Es = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  Ts = () => "Uso de software para automatizar completamente la pintura",
  Os = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  ks = () => "Uso di software per dipingere in modo completamente automatizzato",
  Is = () => "ペイントを完全に自動化するソフトウェアの使用",
  Ns = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  Ss = () => "Использование программ для полной автоматизации рисования",
  As = () => "Використання програм, які повністю автоматизують малювання",
  Rs = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  Ds = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ys() : e === "pt" ? bs() : e === "ch" ? vs() : e === "de" ? Es() : e === "es" ? Ts() : e === "fr" ? Os() : e === "it" ? ks() : e === "jp" ? Is() : e === "pl" ? Ns() : e === "ru" ? Ss() : e === "uk" ? As() : Rs()
  },
  Ps = () => "Breaking the rules",
  xs = () => "Quebrar as regras",
  js = () => "违反规则",
  Us = () => "Regeln brechen",
  Ls = () => "Romper las reglas",
  Ms = () => "Violation des règles",
  Cs = () => "Violazione delle regole",
  zs = () => "ルール違反",
  Bs = () => "Łamanie zasad",
  qs = () => "Нарушение правил",
  Ks = () => "Порушення правил",
  Fs = () => "Vi phạm luật",
  $s = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ps() : e === "pt" ? xs() : e === "ch" ? js() : e === "de" ? Us() : e === "es" ? Ls() : e === "fr" ? Ms() : e === "it" ? Cs() : e === "jp" ? zs() : e === "pl" ? Bs() : e === "ru" ? qs() : e === "uk" ? Ks() : Fs()
  },
  Gs = () => "You have broken one of Wplace's rules",
  Vs = () => "Você quebrou uma das regras do Wplace",
  Hs = () => "你违反了 Wplace 的一项规则",
  Ws = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  Ys = () => "Has infringido una de las reglas de Wplace",
  Js = () => "Vous avez enfreint l’une des règles de Wplace",
  Qs = () => "Hai infranto una delle regole di Wplace",
  Xs = () => "Wplaceのルールのいずれかに違反しました。",
  Zs = () => "Złamałeś jedną z zasad Wplace",
  ea = () => "Вы нарушили одно из правил Wplace",
  ta = () => "Ви порушили одне з правил Wplace",
  ra = () => "Bạn đã vi phạm một trong các luật của Wplace",
  na = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Gs() : e === "pt" ? Vs() : e === "ch" ? Hs() : e === "de" ? Ws() : e === "es" ? Ys() : e === "fr" ? Js() : e === "it" ? Qs() : e === "jp" ? Xs() : e === "pl" ? Zs() : e === "ru" ? ea() : e === "uk" ? ta() : ra()
  },
  sa = () => "You cannot paint over event pixels",
  aa = () => "Você não pode pintar sobre pixels de eventos",
  oa = () => "你不能覆盖活动像素",
  ia = () => "Du kannst nicht über Event-Pixel malen",
  ca = () => "No puedes pintar sobre píxeles de evento",
  ua = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  la = () => "Non puoi dipingere sopra i pixel dell'evento",
  da = () => "イベント用のピクセルの上には塗れません。",
  _a = () => "Nie możesz malować po pikselach wydarzenia",
  fa = () => "Вы не можете рисовать по пикселям события",
  pa = () => "Ви не можете малювати поверх пікселів події",
  ha = () => "Bạn không thể tô lên pixel sự kiện",
  rt = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? sa() : e === "pt" ? aa() : e === "ch" ? oa() : e === "de" ? ia() : e === "es" ? ca() : e === "fr" ? ua() : e === "it" ? la() : e === "jp" ? da() : e === "pl" ? _a() : e === "ru" ? fa() : e === "uk" ? pa() : ha()
  },
  ma = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  ga = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  wa = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  ya = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  ba = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  va = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  Ea = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Ta = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Oa = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  ka = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  Ia = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Na = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Sa = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ma() : e === "pt" ? ga() : e === "ch" ? wa() : e === "de" ? ya() : e === "es" ? ba() : e === "fr" ? va() : e === "it" ? Ea() : e === "jp" ? Ta() : e === "pl" ? Oa() : e === "ru" ? ka() : e === "uk" ? Ia() : Na()
  },
  Aa = () => "Challenge verification not completed",
  Ra = () => "Verificação do desafio não concluída",
  Da = () => "挑战验证未完成",
  Pa = () => "Herausforderungsverifizierung nicht abgeschlossen",
  xa = () => "Verificación del desafío no completada",
  ja = () => "Vérification du défi non terminée",
  Ua = () => "Verifica della sfida non completata",
  La = () => "チャレンジ検証が完了していません",
  Ma = () => "Weryfikacja wyzwania niezakończona",
  Ca = () => "Верификация вызова не завершена",
  za = () => "Перевірку виклику не завершено",
  Ba = () => "Xác minh thử thách chưa hoàn thành",
  We = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Aa() : e === "pt" ? Ra() : e === "ch" ? Da() : e === "de" ? Pa() : e === "es" ? xa() : e === "fr" ? ja() : e === "it" ? Ua() : e === "jp" ? La() : e === "pl" ? Ma() : e === "ru" ? Ca() : e === "uk" ? za() : Ba()
  },
  qa = () => "Couldn't complete the purchase. This item does not exist.",
  Ka = () => "Não foi possível concluir a compra. Este item não existe.",
  Fa = () => "无法完成购买。该物品不存在。",
  $a = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  Ga = () => "No se pudo completar la compra. Este ítem no existe.",
  Va = () => "Achat impossible. Cet objet n’existe pas.",
  Ha = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  Wa = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Ya = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Ja = () => "Не удалось завершить покупку. Этот предмет не существует.",
  Qa = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  Xa = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  wt = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? qa() : e === "pt" ? Ka() : e === "ch" ? Fa() : e === "de" ? $a() : e === "es" ? Ga() : e === "fr" ? Va() : e === "it" ? Ha() : e === "jp" ? Wa() : e === "pl" ? Ya() : e === "ru" ? Ja() : e === "uk" ? Qa() : Xa()
  },
  Za = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  eo = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  to = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  ro = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  no = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  so = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  ao = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  oo = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  io = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  co = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  uo = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  lo = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  _o = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Za() : e === "pt" ? eo() : e === "ch" ? to() : e === "de" ? ro() : e === "es" ? no() : e === "fr" ? so() : e === "it" ? ao() : e === "jp" ? oo() : e === "pl" ? io() : e === "ru" ? co() : e === "uk" ? uo() : lo()
  },
  fo = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  po = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  ho = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  mo = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  go = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  wo = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  yo = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  bo = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  vo = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  Eo = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  To = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  Oo = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  nt = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? fo() : e === "pt" ? po() : e === "ch" ? ho() : e === "de" ? mo() : e === "es" ? go() : e === "fr" ? wo() : e === "it" ? yo() : e === "jp" ? bo() : e === "pl" ? vo() : e === "ru" ? Eo() : e === "uk" ? To() : Oo()
  },
  ko = () => "Doxxing",
  Io = () => "Doxxing",
  No = () => "人肉搜索",
  So = () => "Doxxing",
  Ao = () => "Doxxing",
  Ro = () => "Doxxing",
  Do = () => "Doxxing",
  Po = () => "ドックス（Doxxing）",
  xo = () => "Doxxing",
  jo = () => "Докcинг",
  Uo = () => "Докcинг",
  Lo = () => "Doxxing",
  Mo = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ko() : e === "pt" ? Io() : e === "ch" ? No() : e === "de" ? So() : e === "es" ? Ao() : e === "fr" ? Ro() : e === "it" ? Do() : e === "jp" ? Po() : e === "pl" ? xo() : e === "ru" ? jo() : e === "uk" ? Uo() : Lo()
  },
  Co = () => "Released other's personal information without their consent",
  zo = () => "Vazar informações pessoais de terceiros sem consentimento",
  Bo = () => "在未获同意的情况下公开他人个人信息",
  qo = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  Ko = () => "Divulgó información personal de otra persona sin su consentimiento",
  Fo = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  $o = () => "Diffusione di informazioni personali di terzi senza consenso",
  Go = () => "他人の個人情報を同意なく公開した。",
  Vo = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  Ho = () => "Публикация личной информации других людей без их согласия",
  Wo = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  Yo = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  Jo = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Co() : e === "pt" ? zo() : e === "ch" ? Bo() : e === "de" ? qo() : e === "es" ? Ko() : e === "fr" ? Fo() : e === "it" ? $o() : e === "jp" ? Go() : e === "pl" ? Vo() : e === "ru" ? Ho() : e === "uk" ? Wo() : Yo()
  },
  Qo = () => "This was already resolved. Reload the page to see your account.",
  Xo = () => "Isso já foi resolvido. Recarregue a página para ver sua conta.",
  Zo = () => "此问题已解决。请刷新页面以查看您的账户。",
  ei = () => "Dies wurde bereits gelöst. Laden Sie die Seite neu, um Ihr Konto zu sehen.",
  ti = () => "Esto ya está resuelto. Recarga la página para ver tu cuenta.",
  ri = () => "C'était déjà résolu. Rechargez la page pour voir votre compte.",
  ni = () => "Questo è stato già risolto. Ricarica la pagina per vedere il tuo account.",
  si = () => "これはすでに解決済みです。アカウントを表示するには、ページを再読み込みしてください。",
  ai = () => "Problem został już rozwiązany. Odśwież stronę, aby zobaczyć swoje konto.",
  oi = () => "Это уже было решено. Перезагрузите страницу, чтобы увидеть свою учетную запись.",
  ii = () => "Це вже було вирішено. Перезавантажте сторінку, щоб побачити свій обліковий запис.",
  ci = () => "Vấn đề này đã được giải quyết. Tải lại trang để xem tài khoản của bạn.",
  ui = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Qo() : e === "pt" ? Xo() : e === "ch" ? Zo() : e === "de" ? ei() : e === "es" ? ti() : e === "fr" ? ri() : e === "it" ? ni() : e === "jp" ? si() : e === "pl" ? ai() : e === "ru" ? oi() : e === "uk" ? ii() : ci()
  },
  li = () => "These accounts can't be merged automatically. Contact us at contact@wplace.live and we'll sort it out.",
  di = () => "Estas contas não podem ser mescladas automaticamente. Entre em contato conosco em contact@wplace.live e resolveremos isso.",
  _i = () => "这些账户无法自动合并。请发送邮件至 contact@wplace.live 联系我们，我们将妥善处理。",
  fi = () => "Diese Konten können nicht automatisch zusammengeführt werden. Kontaktieren Sie uns unter contact@wplace.live und wir kümmern uns darum.",
  pi = () => "Estas cuentas no se pueden fusionar automáticamente. Contáctanos en contact@wplace.live y lo solucionaremos.",
  hi = () => "Ces comptes ne peuvent pas être fusionnés automatiquement. Contactez-nous à contact@wplace.live et nous nous en occuperons.",
  mi = () => "Questi account non possono essere uniti automaticamente. Contattaci a contact@wplace.live e sistemeremo tutto.",
  gi = () => "これらのアカウントは自動的に統合できません。contact@wplace.liveまでお問い合わせください。弊社が対応いたします。",
  wi = () => "Te konta nie mogą zostać automatycznie scalone. Skontaktuj się z nami pod adresem contact@wplace.live, a my się tym zajmiemy.",
  yi = () => "Эти аккаунты не могут быть объединены автоматически. Свяжитесь с нами по адресу contact@wplace.live, и мы разберемся.",
  bi = () => "Ці облікові записи не можуть бути об'єднані автоматично. Зв'яжіться з нами за адресою contact@wplace.live, і ми все владнаємо.",
  vi = () => "Các tài khoản này không thể hợp nhất tự động. Hãy liên hệ với chúng tôi tại contact@wplace.live và chúng tôi sẽ giải quyết.",
  Ei = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? li() : e === "pt" ? di() : e === "ch" ? _i() : e === "de" ? fi() : e === "es" ? pi() : e === "fr" ? hi() : e === "it" ? mi() : e === "jp" ? gi() : e === "pl" ? wi() : e === "ru" ? yi() : e === "uk" ? bi() : vi()
  },
  Ti = () => "This email is already in use.",
  Oi = () => "Este e-mail já está em uso.",
  ki = () => "This email is already in use.",
  Ii = () => "This email is already in use.",
  Ni = () => "Este correo electrónico ya está en uso.",
  Si = () => "This email is already in use.",
  Ai = () => "Questa email è già in uso.",
  Ri = () => "This email is already in use.",
  Di = () => "This email is already in use.",
  Pi = () => "This email is already in use.",
  xi = () => "This email is already in use.",
  ji = () => "This email is already in use.",
  Ui = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ti() : e === "pt" ? Oi() : e === "ch" ? ki() : e === "de" ? Ii() : e === "es" ? Ni() : e === "fr" ? Si() : e === "it" ? Ai() : e === "jp" ? Ri() : e === "pl" ? Di() : e === "ru" ? Pi() : e === "uk" ? xi() : ji()
  },
  Li = r => `This email is already in use by user #${r.userId}.`,
  Mi = r => `Este e-mail já está em uso pelo usuário #${r.userId}.`,
  Ci = r => `This email is already in use by user #${r.userId}.`,
  zi = r => `This email is already in use by user #${r.userId}.`,
  Bi = r => `Este correo electrónico ya está en uso por el usuario #${r.userId}.`,
  qi = r => `This email is already in use by user #${r.userId}.`,
  Ki = r => `Questa email è già in uso dall'utente #${r.userId}.`,
  Fi = r => `This email is already in use by user #${r.userId}.`,
  $i = r => `This email is already in use by user #${r.userId}.`,
  Gi = r => `This email is already in use by user #${r.userId}.`,
  Vi = r => `This email is already in use by user #${r.userId}.`,
  Hi = r => `This email is already in use by user #${r.userId}.`,
  Wi = (r, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Li(r) : e === "pt" ? Mi(r) : e === "ch" ? Ci(r) : e === "de" ? zi(r) : e === "es" ? Bi(r) : e === "fr" ? qi(r) : e === "it" ? Ki(r) : e === "jp" ? Fi(r) : e === "pl" ? $i(r) : e === "ru" ? Gi(r) : e === "uk" ? Vi(r) : Hi(r)
  },
  Yi = () => "Enter a valid email address.",
  Ji = () => "Informe um endereço de e-mail válido.",
  Qi = () => "Enter a valid email address.",
  Xi = () => "Enter a valid email address.",
  Zi = () => "Introduce una dirección de correo electrónico válida.",
  ec = () => "Enter a valid email address.",
  tc = () => "Inserisci un indirizzo email valido.",
  rc = () => "Enter a valid email address.",
  nc = () => "Enter a valid email address.",
  sc = () => "Enter a valid email address.",
  ac = () => "Enter a valid email address.",
  oc = () => "Enter a valid email address.",
  ic = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Yi() : e === "pt" ? Ji() : e === "ch" ? Qi() : e === "de" ? Xi() : e === "es" ? Zi() : e === "fr" ? ec() : e === "it" ? tc() : e === "jp" ? rc() : e === "pl" ? nc() : e === "ru" ? sc() : e === "uk" ? ac() : oc()
  },
  cc = r => `Error while painting: ${r.err}`,
  uc = r => `Erro enquanto pinta: ${r.err}`,
  lc = r => `绘制时出错：${r.err}`,
  dc = r => `Fehler beim Malen: ${r.err}`,
  _c = r => `Error al pintar: ${r.err}`,
  fc = r => `Erreur lors de la peinture : ${r.err}`,
  pc = r => `Errore durante la pittura: ${r.err}`,
  hc = r => `ペイント中にエラーが発生しました: ${r.err}`,
  mc = r => `Błąd podczas malowania: ${r.err}`,
  gc = r => `Ошибка при рисовании: ${r.err}`,
  wc = r => `Помилка під час малювання: ${r.err}`,
  yc = r => `Lỗi khi tô: ${r.err}`,
  bc = (r, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? cc(r) : e === "pt" ? uc(r) : e === "ch" ? lc(r) : e === "de" ? dc(r) : e === "es" ? _c(r) : e === "fr" ? fc(r) : e === "it" ? pc(r) : e === "jp" ? hc(r) : e === "pl" ? mc(r) : e === "ru" ? gc(r) : e === "uk" ? wc(r) : yc(r)
  },
  vc = () => "Exceeded maximum number of characters",
  Ec = () => "Excedeu o número máximo de caracteres permitidos",
  Tc = () => "超出最大字符数",
  Oc = () => "Maximale Zeichenanzahl überschritten",
  kc = () => "Se excedió el número máximo de caracteres",
  Ic = () => "Nombre maximal de caractères dépassé",
  Nc = () => "Numero massimo di caratteri superato",
  Sc = () => "最大文字数を超過しました",
  Ac = () => "Przekroczono maksymalną liczbę znaków",
  Rc = () => "Превышено максимальное количество символов",
  Dc = () => "Перевищено максимальну кількість символів",
  Pc = () => "Đã vượt quá số ký tự tối đa",
  xc = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? vc() : e === "pt" ? Ec() : e === "ch" ? Tc() : e === "de" ? Oc() : e === "es" ? kc() : e === "fr" ? Ic() : e === "it" ? Nc() : e === "jp" ? Sc() : e === "pl" ? Ac() : e === "ru" ? Rc() : e === "uk" ? Dc() : Pc()
  },
  jc = () => "Verification code expired. Please request a new one.",
  Uc = () => "Código de verificação expirado. Por favor, solicite um novo.",
  Lc = () => "验证码已过期，请重新获取。",
  Mc = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  Cc = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  zc = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  Bc = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  qc = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  Kc = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  Fc = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  $c = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  Gc = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  Vc = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? jc() : e === "pt" ? Uc() : e === "ch" ? Lc() : e === "de" ? Mc() : e === "es" ? Cc() : e === "fr" ? zc() : e === "it" ? Bc() : e === "jp" ? qc() : e === "pl" ? Kc() : e === "ru" ? Fc() : e === "uk" ? $c() : Gc()
  },
  Hc = () => "Griefing",
  Wc = () => "Griefing",
  Yc = () => "破坏行为",
  Jc = () => "Griefing",
  Qc = () => "Griefing",
  Xc = () => "Griefing",
  Zc = () => "Griefing",
  eu = () => "グリーフィング",
  tu = () => "Griefing",
  ru = () => "Гриферство",
  nu = () => "Гріфінг",
  su = () => "Griefing",
  au = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Hc() : e === "pt" ? Wc() : e === "ch" ? Yc() : e === "de" ? Jc() : e === "es" ? Qc() : e === "fr" ? Xc() : e === "it" ? Zc() : e === "jp" ? eu() : e === "pl" ? tu() : e === "ru" ? ru() : e === "uk" ? nu() : su()
  },
  ou = () => "Messed up with other's artworks",
  iu = () => "Estragou os desenhos dos outros",
  cu = () => "破坏了他人的作品",
  uu = () => "Kunstwerke anderer beschädigt",
  lu = () => "Arruinó las obras de arte de otros",
  du = () => "A abîmé les œuvres des autres",
  _u = () => "Ha rovinato i disegni degli altri",
  fu = () => "他人の作品を荒らした",
  pu = () => "Zniszczył prace innych",
  hu = () => "Испортил чужие рисунки",
  mu = () => "Зіпсував роботи інших",
  gu = () => "Phá hỏng tranh của người khác",
  wu = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ou() : e === "pt" ? iu() : e === "ch" ? cu() : e === "de" ? uu() : e === "es" ? lu() : e === "fr" ? du() : e === "it" ? _u() : e === "jp" ? fu() : e === "pl" ? pu() : e === "ru" ? hu() : e === "uk" ? mu() : gu()
  },
  yu = () => "Hate speech",
  bu = () => "Discurso de Ódio",
  vu = () => "仇恨言论",
  Eu = () => "Hassrede",
  Tu = () => "Discurso de odio",
  Ou = () => "Discours haineux",
  ku = () => "Discorso d'odio",
  Iu = () => "ヘイトスピーチ",
  Nu = () => "Mowa nienawiści",
  Su = () => "Речь ненависти",
  Au = () => "Мова ворожнечі",
  Ru = () => "Ngôn từ thù hằn",
  Du = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? yu() : e === "pt" ? bu() : e === "ch" ? vu() : e === "de" ? Eu() : e === "es" ? Tu() : e === "fr" ? Ou() : e === "it" ? ku() : e === "jp" ? Iu() : e === "pl" ? Nu() : e === "ru" ? Su() : e === "uk" ? Au() : Ru()
  },
  Pu = () => "Racism, homophobia, hate symbols, etc",
  xu = () => "Racismo, homofobia, símbolos de ódio, etc.",
  ju = () => "种族主义、恐同、仇恨符号等",
  Uu = () => "Rassismus, Homophobie, Hasssymbole usw.",
  Lu = () => "Racismo, homofobia, símbolos de odio, etc.",
  Mu = () => "Racisme, homophobie, symboles haineux, etc.",
  Cu = () => "Razzismo, omofobia, simboli d'odio, ecc.",
  zu = () => "人種差別、同性愛嫌悪、ヘイトシンボルなど",
  Bu = () => "Rasizm, homofobia, symbole nienawiści itp.",
  qu = () => "Расизм, гомофобия, символы ненависти и т. п.",
  Ku = () => "Расизм, гомофобія, символи ненависті тощо",
  Fu = () => "Phân biệt chủng tộc, kỳ thị đồng tính, biểu tượng thù ghét, v.v.",
  $u = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Pu() : e === "pt" ? xu() : e === "ch" ? ju() : e === "de" ? Uu() : e === "es" ? Lu() : e === "fr" ? Mu() : e === "it" ? Cu() : e === "jp" ? zu() : e === "pl" ? Bu() : e === "ru" ? qu() : e === "uk" ? Ku() : Fu()
  },
  Gu = () => "Inappropriate content",
  Vu = () => "Conteúdo inapropriado",
  Hu = () => "不当内容",
  Wu = () => "Unangemessene Inhalte",
  Yu = () => "Contenido inapropiado",
  Ju = () => "Contenu inapproprié",
  Qu = () => "Contenuto inappropriato",
  Xu = () => "不適切なコンテンツ",
  Zu = () => "Nieodpowiednie treści",
  el = () => "Неприемлемый контент",
  tl = () => "Неприйнятний вміст",
  rl = () => "Nội dung không phù hợp",
  nl = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Gu() : e === "pt" ? Vu() : e === "ch" ? Hu() : e === "de" ? Wu() : e === "es" ? Yu() : e === "fr" ? Ju() : e === "it" ? Qu() : e === "jp" ? Xu() : e === "pl" ? Zu() : e === "ru" ? el() : e === "uk" ? tl() : rl()
  },
  sl = () => "Explicit or illegal content, severe slurs",
  al = () => "Conteúdo explícito ou ilegal, insultos graves",
  ol = () => "露骨或非法内容、严重的侮辱性言论",
  il = () => "Expliziter oder illegaler Inhalt, schwere Beleidigungen",
  cl = () => "Contenido explícito o ilegal, insultos graves",
  ul = () => "Contenu explicite ou illégal, insultes graves",
  ll = () => "Contenuto esplicito o illegale, insulti gravi",
  dl = () => "露骨または違法なコンテンツ、ひどい侮辱・中傷",
  _l = () => "Treści jawnie seksualne lub nielegalne, poważne obelgi",
  fl = () => "Откровенный или незаконный контент, грубые оскорбления",
  pl = () => "Відвертий або незаконний вміст, грубі образи",
  hl = () => "Nội dung phản cảm hoặc bất hợp pháp, lời lẽ lăng mạ nghiêm trọng",
  ml = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? sl() : e === "pt" ? al() : e === "ch" ? ol() : e === "de" ? il() : e === "es" ? cl() : e === "fr" ? ul() : e === "it" ? ll() : e === "jp" ? dl() : e === "pl" ? _l() : e === "ru" ? fl() : e === "uk" ? pl() : hl()
  },
  gl = () => "Invalid captcha. Please try again.",
  wl = () => "Captcha inválido. Por favor, tente novamente.",
  yl = () => "验证码无效，请重试。",
  bl = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  vl = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  El = () => "Captcha invalide. Veuillez réessayer.",
  Tl = () => "Captcha non valido. Riprova.",
  Ol = () => "キャプチャが無効です。もう一度お試しください。",
  kl = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  Il = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  Nl = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Sl = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Al = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? gl() : e === "pt" ? wl() : e === "ch" ? yl() : e === "de" ? bl() : e === "es" ? vl() : e === "fr" ? El() : e === "it" ? Tl() : e === "jp" ? Ol() : e === "pl" ? kl() : e === "ru" ? Il() : e === "uk" ? Nl() : Sl()
  },
  Rl = () => "Invalid challenge response",
  Dl = () => "Resposta de desafio inválida",
  Pl = () => "质询响应无效",
  xl = () => "Ungültige Challenge-Antwort",
  jl = () => "Respuesta de desafío inválida",
  Ul = () => "Réponse au défi invalide",
  Ll = () => "Risposta alla sfida non valida",
  Ml = () => "無効なチャレンジ応答",
  Cl = () => "Nieprawidłowa odpowiedź na wyzwanie",
  zl = () => "Неверный ответ на вызов",
  Bl = () => "Недійсна відповідь на виклик",
  ql = () => "Phản hồi thử thách không hợp lệ",
  Kl = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Rl() : e === "pt" ? Dl() : e === "ch" ? Pl() : e === "de" ? xl() : e === "es" ? jl() : e === "fr" ? Ul() : e === "it" ? Ll() : e === "jp" ? Ml() : e === "pl" ? Cl() : e === "ru" ? zl() : e === "uk" ? Bl() : ql()
  },
  Fl = () => "The verification code is incorrect. Please check it and try again.",
  $l = () => "Código inválido",
  Gl = () => "验证码不正确。请检查后重试。",
  Vl = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  Hl = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  Wl = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  Yl = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  Jl = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  Ql = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  Xl = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  Zl = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  ed = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  td = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Fl() : e === "pt" ? $l() : e === "ch" ? Gl() : e === "de" ? Vl() : e === "es" ? Hl() : e === "fr" ? Wl() : e === "it" ? Yl() : e === "jp" ? Jl() : e === "pl" ? Ql() : e === "ru" ? Xl() : e === "uk" ? Zl() : ed()
  },
  rd = () => "Invalid discord.",
  nd = () => "Discord inválido.",
  sd = () => "无效的 Discord。",
  ad = () => "Ungültiger Discord.",
  od = () => "Discord inválido.",
  id = () => "Discord invalide.",
  cd = () => "Discord non valido.",
  ud = () => "無効なDiscordアカウントです。",
  ld = () => "Nieprawidłowy Discord.",
  dd = () => "Неверный Discord.",
  _d = () => "Некоректний Discord.",
  fd = () => "Discord không hợp lệ.",
  pd = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? rd() : e === "pt" ? nd() : e === "ch" ? sd() : e === "de" ? ad() : e === "es" ? od() : e === "fr" ? id() : e === "it" ? cd() : e === "jp" ? ud() : e === "pl" ? ld() : e === "ru" ? dd() : e === "uk" ? _d() : fd()
  },
  hd = () => "The name contains disallowed characters or words. Please choose a different name.",
  md = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  gd = () => "名称包含禁止的字符或词语，请选择其他名称。",
  wd = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  yd = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  bd = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  vd = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  Ed = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  Td = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  Od = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  kd = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  Id = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  yt = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? hd() : e === "pt" ? md() : e === "ch" ? gd() : e === "de" ? wd() : e === "es" ? yd() : e === "fr" ? bd() : e === "it" ? vd() : e === "jp" ? Ed() : e === "pl" ? Td() : e === "ru" ? Od() : e === "uk" ? kd() : Id()
  },
  Nd = () => "Please enter a valid phone number with country code.",
  Sd = () => "Insira um número de telefone válido com código do país.",
  Ad = () => "请输入带国家代码的有效电话号码。",
  Rd = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  Dd = () => "Introduce un número de teléfono válido con código de país.",
  Pd = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  xd = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  jd = () => "国番号付きの有効な電話番号を入力してください。",
  Ud = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  Ld = () => "Введите действительный номер телефона с кодом страны.",
  Md = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  Cd = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  zd = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Nd() : e === "pt" ? Sd() : e === "ch" ? Ad() : e === "de" ? Rd() : e === "es" ? Dd() : e === "fr" ? Pd() : e === "it" ? xd() : e === "jp" ? jd() : e === "pl" ? Ud() : e === "ru" ? Ld() : e === "uk" ? Md() : Cd()
  },
  Bd = () => "Phone number not supported. Please try another number.",
  qd = () => "Número de telefone não suportado. Por favor, tente outro número.",
  Kd = () => "不支持此电话号码。请尝试其他号码。",
  Fd = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  $d = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  Gd = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  Vd = () => "Numero di telefono non supportato. Prova con un altro numero.",
  Hd = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  Wd = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  Yd = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  Jd = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  Qd = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  Xd = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Bd() : e === "pt" ? qd() : e === "ch" ? Kd() : e === "de" ? Fd() : e === "es" ? $d() : e === "fr" ? Gd() : e === "it" ? Vd() : e === "jp" ? Hd() : e === "pl" ? Wd() : e === "ru" ? Yd() : e === "uk" ? Jd() : Qd()
  },
  Zd = () => "The new leader must be a member of the alliance",
  e_ = () => "O novo líder deve ser um membro da aliança",
  t_ = () => "新盟主必须是联盟成员",
  r_ = () => "Der neue Anführer muss Mitglied der Allianz sein",
  n_ = () => "El nuevo líder debe ser miembro de la alianza",
  s_ = () => "Le nouveau chef doit être membre de l’alliance",
  a_ = () => "Il nuovo leader deve essere un membro dell'alleanza",
  o_ = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  i_ = () => "Nowy lider musi być członkiem sojuszu",
  c_ = () => "Новый лидер должен быть участником альянса",
  u_ = () => "Новий лідер має бути учасником альянсу",
  l_ = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  d_ = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Zd() : e === "pt" ? e_() : e === "ch" ? t_() : e === "de" ? r_() : e === "es" ? n_() : e === "fr" ? s_() : e === "it" ? a_() : e === "jp" ? o_() : e === "pl" ? i_() : e === "ru" ? c_() : e === "uk" ? u_() : l_()
  },
  __ = () => "Leaderboard is temporarily disabled",
  f_ = () => "O ranking está temporariamente desativado",
  p_ = () => "排行榜已暂时停用",
  h_ = () => "Die Bestenliste ist vorübergehend deaktiviert",
  m_ = () => "La clasificación está deshabilitada temporalmente",
  g_ = () => "Le classement est temporairement désactivé",
  w_ = () => "La classifica è temporaneamente disattivata",
  y_ = () => "ランキングは一時的に無効になっています。",
  b_ = () => "Ranking jest tymczasowo wyłączony",
  v_ = () => "Таблица лидеров временно отключена",
  E_ = () => "Таблиця лідерів тимчасово вимкнена",
  T_ = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  $ = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? __() : e === "pt" ? f_() : e === "ch" ? p_() : e === "de" ? h_() : e === "es" ? m_() : e === "fr" ? g_() : e === "it" ? w_() : e === "jp" ? y_() : e === "pl" ? b_() : e === "ru" ? v_() : e === "uk" ? E_() : T_()
  },
  O_ = () => "Location name is too big (max. 128 characters)",
  k_ = () => "Nome da localização é grande demais (max. 128 caracteres)",
  I_ = () => "位置名称过长（最大 128 个字符）",
  N_ = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  S_ = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  A_ = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  R_ = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  D_ = () => "場所の名前が長すぎます（最大128文字）。",
  P_ = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  x_ = () => "Название локации слишком длинное (макс. 128 символов)",
  j_ = () => "Назва локації надто довга (макс. 128 символів)",
  U_ = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  L_ = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? O_() : e === "pt" ? k_() : e === "ch" ? I_() : e === "de" ? N_() : e === "es" ? S_() : e === "fr" ? A_() : e === "it" ? R_() : e === "jp" ? D_() : e === "pl" ? P_() : e === "ru" ? x_() : e === "uk" ? j_() : U_()
  },
  M_ = () => "Multi-accounting",
  C_ = () => "Múltiplas contas",
  z_ = () => "多账号",
  B_ = () => "Multi-Accounting",
  q_ = () => "Multi-cuentas",
  K_ = () => "Multi-comptes",
  F_ = () => "Multi-account",
  $_ = () => "複数アカウント使用",
  G_ = () => "Multi-konta",
  V_ = () => "Мультиаккаунт",
  H_ = () => "Мультиакаунтинг",
  W_ = () => "Nhiều tài khoản",
  Y_ = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? M_() : e === "pt" ? C_() : e === "ch" ? z_() : e === "de" ? B_() : e === "es" ? q_() : e === "fr" ? K_() : e === "it" ? F_() : e === "jp" ? $_() : e === "pl" ? G_() : e === "ru" ? V_() : e === "uk" ? H_() : W_()
  },
  J_ = () => "Paint with more than one account or using virtual machines, residential proxies, or multi-accounting browsers",
  Q_ = () => "Pintar com mais de uma conta ou usando máquinas virtuais, proxies residenciais ou navegadores multi-conta",
  X_ = () => "使用多个账号绘制像素，或使用虚拟机、住宅代理或多账号浏览器",
  Z_ = () => "Mehr als ein Konto zum Malen verwenden oder virtuelle Maschinen, Residential-Proxys oder Multi-Accounting-Browser nutzen",
  ef = () => "Pintar con más de una cuenta o usar máquinas virtuales, proxies residenciales o navegadores multicuenta",
  tf = () => "Utiliser plus d’un compte pour peindre, ou utiliser des machines virtuelles, des proxys résidentiels ou des navigateurs multi-comptes",
  rf = () => "Usare più di un account per dipingere, oppure usare macchine virtuali, proxy residenziali o browser multi-account",
  nf = () => "複数のアカウントを使ってピクセルを塗る、または仮想マシン、住宅プロキシ、マルチアカウントブラウザを使用する",
  sf = () => "Malowanie pikseli na więcej niż jednym koncie lub przy użyciu maszyn wirtualnych, proxy residential lub przeglądarek multi-kontowych",
  af = () => "Рисование с более чем одного аккаунта или с использованием виртуальных машин, резидентных прокси или мультиаккаунт-браузеров",
  of = () => "Малювання з більш ніж одного акаунта або з використанням віртуальних машин, резидентних проксі чи мультиакаунт-браузерів",
  cf = () => "Vẽ pixel bằng nhiều hơn một tài khoản hoặc bằng máy ảo, proxy dân cư hoặc trình duyệt đa tài khoản",
  uf = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? J_() : e === "pt" ? Q_() : e === "ch" ? X_() : e === "de" ? Z_() : e === "es" ? ef() : e === "fr" ? tf() : e === "it" ? rf() : e === "jp" ? nf() : e === "pl" ? sf() : e === "ru" ? af() : e === "uk" ? of() : cf()
  },
  lf = r => `You can change your name again in ${r.days} days`,
  df = r => `Você pode alterar seu nome novamente em ${r.days} dias.`,
  _f = r => `你可以在 ${r.days} 天后再次修改名称`,
  ff = r => `Du kannst deinen Namen in ${r.days} Tagen erneut ändern`,
  pf = r => `Podrás cambiar tu nombre de nuevo en ${r.days} días`,
  hf = r => `Vous pourrez changer votre nom à nouveau dans ${r.days} jours`,
  mf = r => `Potrai cambiare di nuovo il tuo nome tra ${r.days} giorni.`,
  gf = r => `${r.days}日後に再び名前を変更できます。`,
  wf = r => `Następną zmianę nazwy możesz wykonać za ${r.days} dni`,
  yf = r => `Вы сможете изменить имя снова через ${r.days} дн.`,
  bf = r => `Ви зможете змінити імʼя знову через ${r.days} днів`,
  vf = r => `Bạn có thể đổi tên lại sau ${r.days} ngày`,
  Ef = (r, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? lf(r) : e === "pt" ? df(r) : e === "ch" ? _f(r) : e === "de" ? ff(r) : e === "es" ? pf(r) : e === "fr" ? hf(r) : e === "it" ? mf(r) : e === "jp" ? gf(r) : e === "pl" ? wf(r) : e === "ru" ? yf(r) : e === "uk" ? bf(r) : vf(r)
  },
  Tf = () => "No internet access or the servers are offline. Try again later.",
  Of = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  kf = () => "没有网络连接或服务器已离线。请稍后重试。",
  If = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Nf = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Sf = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Af = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Rf = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Df = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Pf = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  xf = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  jf = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  Uf = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Tf() : e === "pt" ? Of() : e === "ch" ? kf() : e === "de" ? If() : e === "es" ? Nf() : e === "fr" ? Sf() : e === "it" ? Af() : e === "jp" ? Rf() : e === "pl" ? Df() : e === "ru" ? Pf() : e === "uk" ? xf() : jf()
  },
  Lf = () => "You are not allowed to verify a phone number. Try refreshing the page",
  Mf = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  Cf = () => "您无权验证电话号码。请尝试刷新页面。",
  zf = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  Bf = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  qf = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  Kf = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  Ff = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  $f = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  Gf = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  Vf = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  Hf = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  Wf = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Lf() : e === "pt" ? Mf() : e === "ch" ? Cf() : e === "de" ? zf() : e === "es" ? Bf() : e === "fr" ? qf() : e === "it" ? Kf() : e === "jp" ? Ff() : e === "pl" ? $f() : e === "ru" ? Gf() : e === "uk" ? Vf() : Hf()
  },
  Yf = () => "Operation not allowed. Maybe you have too many favorite locations.",
  Jf = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Qf = () => "操作不被允许。你的收藏位置可能过多。",
  Xf = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  Zf = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  ep = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  tp = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  rp = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  np = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  sp = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  ap = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  op = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  ip = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Yf() : e === "pt" ? Jf() : e === "ch" ? Qf() : e === "de" ? Xf() : e === "es" ? Zf() : e === "fr" ? ep() : e === "it" ? tp() : e === "jp" ? rp() : e === "pl" ? np() : e === "ru" ? sp() : e === "uk" ? ap() : op()
  },
  cp = r => `Not enough charges: you have ${r.charges} but this overlay needs ${r.pixels}.`,
  up = r => `Cargas insuficientes: você tem ${r.charges}, mas esta sobreposição precisa de ${r.pixels}.`,
  lp = r => `充能不足：你有 ${r.charges}，但此叠加层需要 ${r.pixels}。`,
  dp = r => `Nicht genügend Ladungen: Du hast ${r.charges}, aber dieses Overlay benötigt ${r.pixels}.`,
  _p = r => `Cargas insuficientes: tienes ${r.charges} pero esta superposición necesita ${r.pixels}.`,
  fp = r => `Charges insuffisantes : vous avez ${r.charges} mais ce calque nécessite ${r.pixels}.`,
  pp = r => `Cariche insufficienti: ne hai ${r.charges} ma questo overlay ne richiede ${r.pixels}.`,
  hp = r => `チャージが足りません：現在 ${r.charges} ですが、このオーバーレイには ${r.pixels} 必要です。`,
  mp = r => `Za mało ładunków: masz ${r.charges}, ale ta nakładka wymaga ${r.pixels}.`,
  gp = r => `Недостаточно зарядов: у вас ${r.charges}, но для этого слоя нужно ${r.pixels}.`,
  wp = r => `Недостатньо зарядів: у вас ${r.charges}, але для цього шару потрібно ${r.pixels}.`,
  yp = r => `Không đủ lượt sơn: bạn có ${r.charges} nhưng lớp phủ này cần ${r.pixels}.`,
  bp = (r, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? cp(r) : e === "pt" ? up(r) : e === "ch" ? lp(r) : e === "de" ? dp(r) : e === "es" ? _p(r) : e === "fr" ? fp(r) : e === "it" ? pp(r) : e === "jp" ? hp(r) : e === "pl" ? mp(r) : e === "ru" ? gp(r) : e === "uk" ? wp(r) : yp(r)
  },
  vp = () => "You are trying to paint with a color you do not own",
  Ep = () => "Você está tentando pintar com uma cor que não possui",
  Tp = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  Op = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  kp = () => "Estás intentando pintar con un color que no posees",
  Ip = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  Np = () => "Stai cercando di dipingere con un colore che non possiedi",
  Sp = () => "所持していない色で塗ろうとしています。",
  Ap = () => "Próbujesz malować kolorem, którego nie posiadasz",
  Rp = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  Dp = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  Pp = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  st = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? vp() : e === "pt" ? Ep() : e === "ch" ? Tp() : e === "de" ? Op() : e === "es" ? kp() : e === "fr" ? Ip() : e === "it" ? Np() : e === "jp" ? Sp() : e === "pl" ? Ap() : e === "ru" ? Rp() : e === "uk" ? Dp() : Pp()
  },
  xp = () => "Phone already used",
  jp = () => "Telefone já usado",
  Up = () => "电话号码已被使用",
  Lp = () => "Telefonnummer bereits verwendet",
  Mp = () => "Teléfono ya utilizado",
  Cp = () => "Téléphone déjà utilisé",
  zp = () => "Telefono già utilizzato",
  Bp = () => "この電話番号は既に使用されています。",
  qp = () => "Numer telefonu jest już używany",
  Kp = () => "Телефон уже используется",
  Fp = () => "Номер телефону вже використовується",
  $p = () => "Số điện thoại đã được sử dụng",
  Gp = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? xp() : e === "pt" ? jp() : e === "ch" ? Up() : e === "de" ? Lp() : e === "es" ? Mp() : e === "fr" ? Cp() : e === "it" ? zp() : e === "jp" ? Bp() : e === "pl" ? qp() : e === "ru" ? Kp() : e === "uk" ? Fp() : $p()
  },
  Vp = () => "This phone number's region is not supported",
  Hp = () => "A região deste número de telefone não é suportada",
  Wp = () => "此电话号码的地区不受支持",
  Yp = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  Jp = () => "La región de este número de teléfono no es compatible",
  Qp = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  Xp = () => "La regione di questo numero di telefono non è supportata",
  Zp = () => "この電話番号の地域はサポートされていません",
  eh = () => "Region tego numeru telefonu nie jest obsługiwany",
  th = () => "Регион этого номера телефона не поддерживается",
  rh = () => "Регіон цього номера телефону не підтримується",
  nh = () => "Vùng của số điện thoại này không được hỗ trợ",
  sh = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Vp() : e === "pt" ? Hp() : e === "ch" ? Wp() : e === "de" ? Yp() : e === "es" ? Jp() : e === "fr" ? Qp() : e === "it" ? Xp() : e === "jp" ? Zp() : e === "pl" ? eh() : e === "ru" ? th() : e === "uk" ? rh() : nh()
  },
  ah = () => "Refresh your page to get the latest update",
  oh = () => "Recarregue sua página para obter as últimas atualizações",
  ih = () => "刷新页面以获取最新更新",
  ch = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  uh = () => "Actualiza la página para obtener la última versión",
  lh = () => "Actualisez la page pour obtenir les dernières mises à jour",
  dh = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  _h = () => "最新の状態にするにはページを再読み込みしてください。",
  fh = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  ph = () => "Обновите страницу, чтобы получить последние изменения",
  hh = () => "Оновіть сторінку, щоб отримати останні оновлення",
  mh = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  at = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ah() : e === "pt" ? oh() : e === "ch" ? ih() : e === "de" ? ch() : e === "es" ? uh() : e === "fr" ? lh() : e === "it" ? dh() : e === "jp" ? _h() : e === "pl" ? fh() : e === "ru" ? ph() : e === "uk" ? hh() : mh()
  },
  gh = () => "The request timed out. Please try again.",
  wh = () => "A solicitação expirou. Por favor, tente novamente.",
  yh = () => "请求超时。请重试。",
  bh = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  vh = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  Eh = () => "La requête a expiré. Veuillez réessayer.",
  Th = () => "La richiesta è scaduta. Riprova.",
  Oh = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  kh = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  Ih = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  Nh = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  Sh = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  Ah = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? gh() : e === "pt" ? wh() : e === "ch" ? yh() : e === "de" ? bh() : e === "es" ? vh() : e === "fr" ? Eh() : e === "it" ? Th() : e === "jp" ? Oh() : e === "pl" ? kh() : e === "ru" ? Ih() : e === "uk" ? Nh() : Sh()
  },
  Rh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Dh = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  Ph = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  xh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  jh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Uh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Lh = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  Mh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Ch = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  zh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Bh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  qh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Kh = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Rh() : e === "pt" ? Dh() : e === "ch" ? Ph() : e === "de" ? xh() : e === "es" ? jh() : e === "fr" ? Uh() : e === "it" ? Lh() : e === "jp" ? Mh() : e === "pl" ? Ch() : e === "ru" ? zh() : e === "uk" ? Bh() : qh()
  },
  Fh = () => "The service is currently unavailable. Please try again later.",
  $h = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  Gh = () => "服务当前不可用。请稍后再试。",
  Vh = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  Hh = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  Wh = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  Yh = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  Jh = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  Qh = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  Xh = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  Zh = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  em = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  tm = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Fh() : e === "pt" ? $h() : e === "ch" ? Gh() : e === "de" ? Vh() : e === "es" ? Hh() : e === "fr" ? Wh() : e === "it" ? Yh() : e === "jp" ? Jh() : e === "pl" ? Qh() : e === "ru" ? Xh() : e === "uk" ? Zh() : em()
  },
  rm = () => "Too many attempts. Please try again later",
  nm = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  sm = () => "尝试次数过多，请稍后再试",
  am = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  om = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  im = () => "Trop de tentatives. Veuillez réessayer plus tard",
  cm = () => "Troppi tentativi. Riprova più tardi.",
  um = () => "試行回数が多すぎます。後で再度お試しください。",
  lm = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  dm = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  _m = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  fm = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  ot = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? rm() : e === "pt" ? nm() : e === "ch" ? sm() : e === "de" ? am() : e === "es" ? om() : e === "fr" ? im() : e === "it" ? cm() : e === "jp" ? um() : e === "pl" ? lm() : e === "ru" ? dm() : e === "uk" ? _m() : fm()
  },
  pm = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  hm = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  mm = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  gm = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  wm = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  ym = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  bm = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  vm = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  Em = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  Tm = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  Om = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  km = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  Im = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? pm() : e === "pt" ? hm() : e === "ch" ? mm() : e === "de" ? gm() : e === "es" ? wm() : e === "fr" ? ym() : e === "it" ? bm() : e === "jp" ? vm() : e === "pl" ? Em() : e === "ru" ? Tm() : e === "uk" ? Om() : km()
  },
  Nm = () => "The typed username does not match your current username.",
  Sm = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Am = () => "输入的用户名与当前用户名不匹配。",
  Rm = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Dm = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Pm = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  xm = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  jm = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  Um = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Lm = () => "Введённое имя пользователя не совпадает с текущим.",
  Mm = () => "Введене імʼя користувача не збігається з поточним.",
  Cm = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  zm = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Nm() : e === "pt" ? Sm() : e === "ch" ? Am() : e === "de" ? Rm() : e === "es" ? Dm() : e === "fr" ? Pm() : e === "it" ? xm() : e === "jp" ? jm() : e === "pl" ? Um() : e === "ru" ? Lm() : e === "uk" ? Mm() : Cm()
  },
  Bm = () => "Unexpected server error. Try again later.",
  qm = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  Km = () => "服务器出现意外错误。请稍后再试。",
  Fm = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  $m = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Gm = () => "Erreur serveur inattendue. Réessayez plus tard.",
  Vm = () => "Errore imprevisto del server. Riprova più tardi.",
  Hm = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  Wm = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  Ym = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  Jm = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  Qm = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  i = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Bm() : e === "pt" ? qm() : e === "ch" ? Km() : e === "de" ? Fm() : e === "es" ? $m() : e === "fr" ? Gm() : e === "it" ? Vm() : e === "jp" ? Hm() : e === "pl" ? Wm() : e === "ru" ? Ym() : e === "uk" ? Jm() : Qm()
  },
  Xm = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  Zm = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  eg = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  tg = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  rg = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  ng = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  sg = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  ag = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  og = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  ig = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  cg = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  ug = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  lg = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Xm() : e === "pt" ? Zm() : e === "ch" ? eg() : e === "de" ? tg() : e === "es" ? rg() : e === "fr" ? ng() : e === "it" ? sg() : e === "jp" ? ag() : e === "pl" ? og() : e === "ru" ? ig() : e === "uk" ? cg() : ug()
  },
  dg = () => "VPN or proxy detected. Please disable your VPN and try again.",
  _g = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  fg = () => "检测到VPN或代理。请关闭VPN后重试。",
  pg = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  hg = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  mg = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  gg = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  wg = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  yg = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  bg = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  vg = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  Eg = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  Tg = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? dg() : e === "pt" ? _g() : e === "ch" ? fg() : e === "de" ? pg() : e === "es" ? hg() : e === "fr" ? mg() : e === "it" ? gg() : e === "jp" ? wg() : e === "pl" ? yg() : e === "ru" ? bg() : e === "uk" ? vg() : Eg()
  },
  Og = () => "Failed to load WebAssembly module. Try to use another browser.",
  kg = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  Ig = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  Ng = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  Sg = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  Ag = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  Rg = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  Dg = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  Pg = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  xg = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  jg = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  Ug = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  Lg = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Og() : e === "pt" ? kg() : e === "ch" ? Ig() : e === "de" ? Ng() : e === "es" ? Sg() : e === "fr" ? Ag() : e === "it" ? Rg() : e === "jp" ? Dg() : e === "pl" ? Pg() : e === "ru" ? xg() : e === "uk" ? jg() : Ug()
  },
  Mg = () => "You already have this item. Please refresh the page.",
  Cg = () => "Você já possui este item. Atualize a página.",
  zg = () => "你已经拥有此物品。请刷新页面。",
  Bg = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  qg = () => "Ya tienes este ítem. Actualiza la página.",
  Kg = () => "Vous possédez déjà cet objet. Actualisez la page.",
  Fg = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  $g = () => "このアイテムはすでに所持しています。ページを更新してください。",
  Gg = () => "Masz już ten przedmiot. Odśwież stronę.",
  Vg = () => "У вас уже есть этот предмет. Обновите страницу.",
  Hg = () => "У вас уже є цей предмет. Оновіть сторінку.",
  Wg = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  bt = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Mg() : e === "pt" ? Cg() : e === "ch" ? zg() : e === "de" ? Bg() : e === "es" ? qg() : e === "fr" ? Kg() : e === "it" ? Fg() : e === "jp" ? $g() : e === "pl" ? Gg() : e === "ru" ? Vg() : e === "uk" ? Hg() : Wg()
  },
  Yg = () => "You are already in an alliance",
  Jg = () => "Você já está em uma aliança",
  Qg = () => "你已经在一个联盟中",
  Xg = () => "Du bist bereits in einer Allianz",
  Zg = () => "Ya estás en una alianza",
  ew = () => "Vous êtes déjà dans une alliance",
  tw = () => "Sei già in un'alleanza",
  rw = () => "すでにアライアンスに所属しています。",
  nw = () => "Jesteś już w sojuszu",
  sw = () => "Вы уже состоите в альянсе",
  aw = () => "Ви вже перебуваєте в альянсі",
  ow = () => "Bạn đã ở trong một liên minh",
  iw = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Yg() : e === "pt" ? Jg() : e === "ch" ? Qg() : e === "de" ? Xg() : e === "es" ? Zg() : e === "fr" ? ew() : e === "it" ? tw() : e === "jp" ? rw() : e === "pl" ? nw() : e === "ru" ? sw() : e === "uk" ? aw() : ow()
  },
  cw = () => "You are not allowed to do this",
  uw = () => "Você não tem permissão para fazer isso",
  lw = () => "你无权执行此操作",
  dw = () => "Du bist dazu nicht berechtigt",
  _w = () => "No tienes permiso para hacer esto",
  fw = () => "Vous n’êtes pas autorisé à faire cela",
  pw = () => "Non hai il permesso di farlo",
  hw = () => "この操作を行う権限がありません。",
  mw = () => "Nie masz uprawnień, aby to zrobić",
  gw = () => "У вас нет прав для этого действия",
  ww = () => "Ви не маєте права це робити",
  yw = () => "Bạn không có quyền làm việc này",
  K = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? cw() : e === "pt" ? uw() : e === "ch" ? lw() : e === "de" ? dw() : e === "es" ? _w() : e === "fr" ? fw() : e === "it" ? pw() : e === "jp" ? hw() : e === "pl" ? mw() : e === "ru" ? gw() : e === "uk" ? ww() : yw()
  },
  bw = () => "You do not have enough Droplets to buy this item.",
  vw = () => "Você não tem Droplets suficientes para comprar este item.",
  Ew = () => "你的 Droplets 不足，无法购买此物品。",
  Tw = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  Ow = () => "No tienes suficientes Droplets para comprar este ítem.",
  kw = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  Iw = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  Nw = () => "このアイテムを購入するのに十分なDropletsがありません。",
  Sw = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  Aw = () => "У вас недостаточно Droplets для покупки этого предмета.",
  Rw = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  Dw = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  vt = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? bw() : e === "pt" ? vw() : e === "ch" ? Ew() : e === "de" ? Tw() : e === "es" ? Ow() : e === "fr" ? kw() : e === "it" ? Iw() : e === "jp" ? Nw() : e === "pl" ? Sw() : e === "ru" ? Aw() : e === "uk" ? Rw() : Dw()
  },
  Pw = () => "You need to be logged in to paint",
  xw = () => "Você precisa estar conectado para pintar",
  jw = () => "你需要登录才能进行绘制",
  Uw = () => "Du musst eingeloggt sein, um zu malen",
  Lw = () => "Debes iniciar sesión para pintar",
  Mw = () => "Vous devez être connecté pour peindre",
  Cw = () => "Devi avere effettuato l'accesso per dipingere",
  zw = () => "ペイントするにはログインが必要です。",
  Bw = () => "Musisz być zalogowany, aby malować",
  qw = () => "Чтобы рисовать, нужно войти в аккаунт",
  Kw = () => "Щоб малювати, необхідно увійти в акаунт",
  Fw = () => "Bạn cần đăng nhập để tô",
  it = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Pw() : e === "pt" ? xw() : e === "ch" ? jw() : e === "de" ? Uw() : e === "es" ? Lw() : e === "fr" ? Mw() : e === "it" ? Cw() : e === "jp" ? zw() : e === "pl" ? Bw() : e === "ru" ? qw() : e === "uk" ? Kw() : Fw()
  },
  $w = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Gw = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  Vw = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  Hw = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  Ww = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  Yw = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  Jw = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  Qw = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  Xw = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  Zw = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  ey = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  ty = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  ry = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? $w() : e === "pt" ? Gw() : e === "ch" ? Vw() : e === "de" ? Hw() : e === "es" ? Ww() : e === "fr" ? Yw() : e === "it" ? Jw() : e === "jp" ? Qw() : e === "pl" ? Xw() : e === "ru" ? Zw() : e === "uk" ? ey() : ty()
  },
  ny = r => `Your account has been suspended out until ${r.until}`,
  sy = r => `A sua conta está suspensa até ${r.until}`,
  ay = r => `你的账号已被暂停至 ${r.until}`,
  oy = r => `Dein Konto ist gesperrt bis ${r.until}`,
  iy = r => `Tu cuenta ha sido suspendida hasta ${r.until}`,
  cy = r => `Votre compte est suspendu jusqu’au ${r.until}`,
  uy = r => `Il tuo account è sospeso fino al ${r.until}`,
  ly = r => `あなたのアカウントは${r.until}まで一時停止されています。`,
  dy = r => `Twoje konto zostało zawieszone do ${r.until}`,
  _y = r => `Ваш аккаунт заблокирован до ${r.until}`,
  fy = r => `Ваш акаунт призупинено до ${r.until}`,
  py = r => `Tài khoản của bạn đã bị đình chỉ đến ${r.until}`,
  ct = (r, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ny(r) : e === "pt" ? sy(r) : e === "ch" ? ay(r) : e === "de" ? oy(r) : e === "es" ? iy(r) : e === "fr" ? cy(r) : e === "it" ? uy(r) : e === "jp" ? ly(r) : e === "pl" ? dy(r) : e === "ru" ? _y(r) : e === "uk" ? fy(r) : py(r)
  },
  hy = () => "A correction is already pending for this ticket.",
  my = () => "Já existe uma correção pendente para este ticket.",
  gy = () => "此工单已存在待审核的更正请求。",
  wy = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  yy = () => "Ya hay una corrección pendiente para este ticket.",
  by = () => "Une correction est déjà en attente pour ce ticket.",
  vy = () => "Una correzione è già in sospeso per questo ticket.",
  Ey = () => "このチケットには未処理の修正があります。",
  Ty = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  Oy = () => "Для этого тикета уже есть запрос на исправление.",
  ky = () => "Для цього тікета вже є запит на перевірці.",
  Iy = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  Ny = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? hy() : e === "pt" ? my() : e === "ch" ? gy() : e === "de" ? wy() : e === "es" ? yy() : e === "fr" ? by() : e === "it" ? vy() : e === "jp" ? Ey() : e === "pl" ? Ty() : e === "ru" ? Oy() : e === "uk" ? ky() : Iy()
  },
  Sy = () => "You cannot review your own correction request.",
  Ay = () => "Você não pode revisar sua própria solicitação de correção.",
  Ry = () => "不能审核自己提交的更正请求。",
  Dy = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  Py = () => "No puedes revisar tu propia solicitud de corrección.",
  xy = () => "Tu ne peux pas examiner ta propre demande de correction.",
  jy = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  Uy = () => "自分のリクエストはレビューできません。",
  Ly = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  My = () => "Нельзя рассматривать собственный запрос.",
  Cy = () => "Не можна перевіряти власний запит.",
  zy = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  By = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Sy() : e === "pt" ? Ay() : e === "ch" ? Ry() : e === "de" ? Dy() : e === "es" ? Py() : e === "fr" ? xy() : e === "it" ? jy() : e === "jp" ? Uy() : e === "pl" ? Ly() : e === "ru" ? My() : e === "uk" ? Cy() : zy()
  },
  qy = () => "This correction has already been reviewed.",
  Ky = () => "Esta correção já foi revisada.",
  Fy = () => "此请求已被审核。",
  $y = () => "Diese Korrektur wurde bereits geprüft.",
  Gy = () => "Esta corrección ya ha sido revisada.",
  Vy = () => "Cette correction a déjà été examinée.",
  Hy = () => "Questa correzione è già stata revisionata.",
  Wy = () => "このリクエストはすでにレビュー済みです。",
  Yy = () => "Ta prośba została już rozpatrzona.",
  Jy = () => "Этот запрос уже рассмотрен.",
  Qy = () => "Цей запит вже перевірено.",
  Xy = () => "Yêu cầu này đã được duyệt.",
  Zy = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? qy() : e === "pt" ? Ky() : e === "ch" ? Fy() : e === "de" ? $y() : e === "es" ? Gy() : e === "fr" ? Vy() : e === "it" ? Hy() : e === "jp" ? Wy() : e === "pl" ? Yy() : e === "ru" ? Jy() : e === "uk" ? Qy() : Xy()
  };
var he, me;
class eb {
  constructor(t) {
    b(this, he, I(!0));
    b(this, me, I(null));
    this.url = t
  }
  get online() {
    return E(p(this, he))
  }
  set online(t) {
    O(p(this, he), t, !0)
  }
  get serverTimeOffsetMs() {
    return E(p(this, me))
  }
  set serverTimeOffsetMs(t) {
    O(p(this, me), t, !0)
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
      })).status !== a.OK) throw new Error(i())
  }
  async guardedFetch(t, e) {
    try {
      const n = await fetch(`${this.url}${t}`, e);
      return this.online = !0, this.updateServerTimeEstimate(n), n
    } catch (n) {
      throw console.error("Fetch error:", n), this.online = !1, new Error(Sa())
    }
  }
  async request(t, e) {
    var u;
    e = {
      credentials: "include",
      ...e
    };
    let n = await this.guardedFetch(t, e);
    if (n.status === a.FORBIDDEN && n.headers.get("x-block-reason") === "tor") throw new Error(Im());
    const s = ((u = n.headers.get("cf-mitigated")) == null ? void 0 : u.toLowerCase()) === "challenge";
    if (n.status === 403 && s) {
      if (ee.setCfLikelyAutomated(!0), !await mt()) throw new Error(We());
      n = await this.guardedFetch(t, e)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (n.status === a.TOO_MANY_REQUESTS) throw new Error(ry());
      if (n.status === a.REQUEST_TIMEOUT) throw new Error(Ah());
      if (n.status === a.SERVICE_UNAVAILABLE) throw new Error(tm())
    }
    return n
  }
}
he = new WeakMap, me = new WeakMap;
class l extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}
class mv extends Error {}

function tb(r) {
  return class extends r {
    async me() {
      const t = await this.request("/me", {
        credentials: "include",
        throwOnStatus: !1
      });
      if (t.status === a.OK) return await t.json();
      if (t.status !== a.UNAUTHORIZED) throw new l(i(), t.status)
    }
    async meEmail() {
      const t = await this.request("/me/email", {
        credentials: "include"
      });
      if (t.status === a.OK) return (await t.json()).email
    }
    async logout() {
      const t = await this.request("/auth/logout", {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new Error(await t.text());
      return await t.json()
    }
    async getOtpCooldown() {
      const t = await this.request("/anticheat/otp/cooldown", {
        credentials: "include"
      });
      if (t.status !== a.OK) throw new Error(i());
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
      if (e.status === a.BAD_REQUEST) throw new Error(zd());
      if (e.status === a.CONFLICT) throw new Error(Gp());
      if (e.status === a.FORBIDDEN) throw new Error(Wf());
      if (e.status === a.TOO_MANY_REQUESTS) throw new Error(ot());
      if (e.status === a.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(sh());
      if (e.status === a.LOCKED) throw new Error(lg());
      if (e.status === a.UNPROCESSABLE_ENTITY) throw new Error(Xd());
      if (e.status === a.NOT_ACCEPTABLE) throw new Error(Tg());
      if (e.status === a.PRECONDITION_FAILED) throw new Error(_o());
      if (e.status !== a.OK) throw new Error(i());
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
          "x-fp": await Ve()
        }
      });
      if (t.type === "otp") {
        if (n.status === a.GONE) throw new Error(Vc());
        if (n.status === a.BAD_REQUEST) throw new Error(td());
        if (n.status === a.TOO_MANY_REQUESTS) throw new Error(ot());
        if (n.status !== a.OK) throw new Error(i())
      } else {
        if (n.status === a.BAD_REQUEST) throw new Error(Kl());
        if (n.status !== a.OK) throw new Error(i())
      }
    }
    async updateMe(t) {
      const e = await this.request("/me/update", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status === a.BAD_REQUEST) {
        const n = await e.json(),
          s = (n == null ? void 0 : n.error) ?? "";
        if (s === "invalid_name") throw new Error(yt());
        if (s === "invalid_discord") throw new Error(pd());
        if (typeof s == "string" && s.startsWith("name_change_cooldown:")) {
          const o = parseInt(s.split(":")[1] ?? "0", 10);
          throw new Error(Ef({
            days: o
          }))
        }
        throw new Error(n == null ? void 0 : n.error)
      } else if (e.status !== a.OK) throw new Error(i())
    }
    async deleteMe(t) {
      const e = await this.request("/me", {
        method: "DELETE",
        credentials: "include",
        body: JSON.stringify({
          confirmText: t
        })
      });
      if (e.status === a.BAD_REQUEST) throw new Error(zm());
      if (e.status !== a.OK) throw new Error(i())
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
      if (e.status === a.FORBIDDEN) throw new Error(ip());
      if (e.status !== a.OK) throw new Error(i())
    }
    async deleteFavoriteLocation(t) {
      if ((await this.request("/favorite-location/delete", {
          method: "POST",
          body: JSON.stringify({
            id: t
          }),
          credentials: "include"
        })).status !== a.OK) throw new Error(i())
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
      if (n.status === a.BAD_REQUEST) throw new Error(L_());
      if (n.status !== a.OK) throw new Error(i())
    }
    async getMyProfilePictures() {
      const t = await this.request("/me/profile-pictures", {
        credentials: "include"
      });
      if (t.status !== a.OK) throw new Error(i());
      return t.json()
    }
    async changeProfilePicture(t) {
      if ((await this.request("/me/profile-picture/change", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            pictureId: t
          })
        })).status !== a.OK) throw new Error(i())
    }
    async unlinkDiscord() {
      const t = await this.request("/discord/unlink", {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== a.NO_CONTENT) throw new l(i(), t.status)
    }
    async deleteSessions() {
      const t = await this.request("/me/sessions", {
        method: "DELETE",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status)
    }
    async deleteAllUserSessions(t) {
      const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
        method: "DELETE",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(i(), e.status)
    }
    async getMySuspensionDetails() {
      const t = await this.request("/me/suspension", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
      const e = await t.json();
      return !(e != null && e.active) || !Array.isArray(e == null ? void 0 : e.punishments) ? null : {
        punishments: e.punishments.map(s => ({
          kind: (s == null ? void 0 : s.kind) === "ban" ? "ban" : "timeout",
          reason: s == null ? void 0 : s.reason,
          timeoutUntil: typeof(s == null ? void 0 : s.timeoutUntil) == "string" ? s.timeoutUntil : void 0,
          reportedLatitude: typeof(s == null ? void 0 : s.reportedLatitude) == "number" ? s.reportedLatitude : void 0,
          reportedLongitude: typeof(s == null ? void 0 : s.reportedLongitude) == "number" ? s.reportedLongitude : void 0,
          zoom: typeof(s == null ? void 0 : s.zoom) == "number" ? s.zoom : void 0,
          appealSubmitted: (s == null ? void 0 : s.appealSubmitted) === !0,
          ticketId: typeof(s == null ? void 0 : s.ticketId) == "string" ? s.ticketId : void 0
        }))
      }
    }
    async getUserPixelsPaintedToday() {
      const t = await this.request("/me/pixels-painted-today", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
      const e = await t.json();
      return (e == null ? void 0 : e.paintedToday) ?? 0
    }
    async accountConflict() {
      const t = await this.request("/me/account-conflict", {
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
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
        case a.OK:
          return (await e.json()).keptUserId;
        case a.CONFLICT:
          throw (await e.json()).error === "conflict_blocked" ? new Error(Ei()) : new Error(ui());
        default:
          throw new l(i(), e.status)
      }
    }
    async markRulesAsRead() {
      return (await this.request("/me/rules/read", {
        method: "POST",
        credentials: "include"
      })).status === a.OK
    }
  }
}

function rb(r) {
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
      if (n.status !== a.OK) throw new l(i(), n.status);
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
      if (n.status === a.BAD_REQUEST) {
        const s = await n.json(),
          o = (s == null ? void 0 : s.error) ?? "";
        throw o === "invalid_name" ? new l(yt(), a.BAD_REQUEST) : new l(typeof o == "string" && o ? o : i(), a.BAD_REQUEST)
      }
      if (n.status !== a.OK) throw new l(i(), n.status)
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
      if (n.status === a.BAD_REQUEST) {
        const s = await n.json(),
          o = (s == null ? void 0 : s.error) ?? "";
        throw o === "email_required" || o === "invalid_email" ? new l(ic(), a.BAD_REQUEST) : new l(typeof o == "string" && o ? o : i(), a.BAD_REQUEST)
      }
      if (n.status === a.CONFLICT) {
        const s = await n.json();
        if (((s == null ? void 0 : s.error) ?? "") === "email_already_in_use") {
          const u = new l(typeof(s == null ? void 0 : s.userId) == "number" ? Wi({
            userId: s.userId
          }) : Ui(), a.CONFLICT);
          throw typeof(s == null ? void 0 : s.userId) == "number" && (u.userId = s.userId), u
        }
        throw new l(i(), a.CONFLICT)
      }
      if (n.status === a.NOT_FOUND) throw new l("User not found.", a.NOT_FOUND);
      if (n.status !== a.OK) throw new l(i(), n.status)
    }
    async getAdminUserProfilePictures(t) {
      const e = await this.request(`/staff/dashboard/users/profile-pictures?userId=${t}`, {
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(i(), e.status);
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
      if (e.status !== a.OK) throw new l(i(), e.status)
    }
    async postAdminRerollUserAvatar(t) {
      const e = await this.request("/staff/dashboard/users/reroll-avatar", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
      if (e.status !== a.OK) throw new l(i(), e.status);
      return e.json()
    }
    async banUsers(t, e, n) {
      const s = await this.request("/staff/dashboard/summary/users/ban", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: t,
          reason: e,
          notes: n
        })
      });
      if (s.status !== a.OK) throw new l(i(), s.status)
    }
    async timeoutUsers(t, e, n) {
      const s = await this.request("/staff/dashboard/summary/users/timeout", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: t,
          reason: e,
          notes: n
        })
      });
      if (s.status !== a.OK) throw new l(i(), s.status)
    }
    async incrementUsersDroplets(t, e, n) {
      const s = await this.request("/staff/dashboard/summary/users/increment-droplet", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: t,
          delta: e,
          notes: n
        })
      });
      if (s.status !== a.OK) throw new l(i(), s.status)
    }
    async reloadPunishmentCache() {
      const t = await this.request("/staff/dashboard/summary/reload-punishment-cache", {
        method: "POST",
        credentials: "include"
      });
      if (t.status === a.CONFLICT) throw new l(cn(), t.status);
      if (t.status !== a.OK && t.status !== a.ACCEPTED) throw new l(i(), t.status)
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
      if (n.status !== a.OK) throw new l(i(), n.status)
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
      if (n.status !== a.OK) throw new l(i(), n.status)
    }
    async postAnticheatBanUsers(t, e, n) {
      const s = await this.request("/staff/dashboard/anticheat/ban", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: t,
          notes: e,
          reason: n
        })
      });
      if (s.status !== a.OK) throw new l(i(), s.status)
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
      if (n.status !== a.OK) throw new l(i(), n.status);
      return await n.json()
    }
    async getAuditLogs(t) {
      const e = new URLSearchParams;
      t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
      const n = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(i(), n.status);
      return n.json()
    }
    async postUsersSuspend(t, e, n) {
      let s;
      switch (e) {
        case "dashboard":
          s = `/staff/dashboard/users/${n}`;
          break;
        case "summary":
          s = `/staff/dashboard/summary/users/${n}`;
          break;
        case "select-area":
          s = `/staff/tools/select-area/${n}`;
          break;
        case "select-pixel":
        default:
          s = `/staff/tools/select-pixel/${n}`;
          break
      }
      if ((await this.request(s, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(t)
        })).status !== a.OK) throw new Error(i())
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
      if (n.status !== a.OK) throw new l(i(), n.status);
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
      if (n.status !== a.OK) throw new l(i(), n.status);
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
      if (e.status !== a.OK) throw new l(i(), e.status)
    }
    async postReportAllianceName(t) {
      const e = await this.request("/report/alliance/name", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          allianceId: t
        })
      });
      if (e.status !== a.OK) throw new l(i(), e.status);
      return e.json()
    }
  }
}

function nb(r) {
  return class extends r {
    async getAlliance() {
      const t = await this.request("/alliance", {
        credentials: "include"
      });
      if (t.status === a.OK) return t.json();
      if (t.status === a.NOT_FOUND) return;
      throw new Error(i())
    }
    async createAlliance(t) {
      const e = await this.request("/alliance", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          name: t
        })
      });
      if (e.status === a.OK) return e.json();
      if (e.status === a.BAD_REQUEST) {
        const n = await e.json();
        throw n.error === "max_characters" ? new Error(Vn()) : n.error === "name_taken" ? new Error(xn()) : n.error == "empty_name" ? new Error(as()) : new Error(i())
      } else throw e.status === a.FORBIDDEN ? new Error(iw()) : new Error(i())
    }
    async leaveAlliance() {
      if ((await this.request("/alliance/leave", {
          method: "POST",
          credentials: "include"
        })).status !== a.OK) throw new Error(i())
    }
    async updateAllianceDescription(t) {
      const e = await this.request("/alliance/update-description", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          description: t
        })
      });
      if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error(K()) : e.status === a.BAD_REQUEST ? new Error(xc()) : new Error(i())
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
      if (n.status !== a.OK) throw n.status === a.FORBIDDEN ? new Error(K()) : new Error(i())
    }
    async allianceLeaderboard(t) {
      const e = await this.request(`/alliance/leaderboard/${t}`, {
        credentials: "include"
      });
      if (e.status === a.OK) return e.json();
      throw e.status === a.FORBIDDEN ? new Error(K()) : new Error($())
    }
    async getAllianceInvites() {
      const t = await this.request("/alliance/invites", {
        credentials: "include"
      });
      if (t.status === a.OK) return t.json();
      throw t.status === a.FORBIDDEN ? new Error(K()) : new Error(i())
    }
    async joinAlliance(t) {
      switch ((await this.request(`/alliance/join/${t}`, {
          method: "POST",
          credentials: "include"
        })).status) {
        case a.OK:
          return "success";
        case a.ALREADY_REPORTED:
          return "in-another-alliance";
        case a.UNAUTHORIZED:
          return "not-logged-in";
        case a.FORBIDDEN:
          return "banned";
        case a.BAD_REQUEST:
        case a.NOT_FOUND:
          return "invalid-invite";
        default:
          return "error"
      }
    }
    async getAllianceMembers(t) {
      const e = await this.request(`/alliance/members/${t}`, {
        credentials: "include"
      });
      if (e.status === a.OK) return e.json();
      throw new Error(i())
    }
    async getAllianceBannedMembers(t) {
      const e = await this.request(`/alliance/members/banned/${t}`, {
        credentials: "include"
      });
      if (e.status === a.OK) return e.json();
      throw new Error(i())
    }
    async getAllianceById(t) {
      const e = await this.request(`/staff/dashboard/alliances/${t}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status === a.NOT_FOUND) return;
      if (e.status !== a.OK) throw new l(i(), e.status);
      const n = await e.json();
      return {
        id: Number(n.id),
        name: String(n.name),
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
      if (n.status !== a.OK) throw new l(i(), n.status);
      const s = await n.json();
      return (Array.isArray(s) ? s : []).map(o => ({
        id: Number(o.id),
        name: String(o.name ?? ""),
        pixelsPainted: Number((o == null ? void 0 : o.pixels_painted) ?? 0)
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
      if (e.status === a.NOT_FOUND) return null;
      if (e.status !== a.OK) throw new l(i(), e.status);
      const n = await e.json(),
        s = Array.isArray(n == null ? void 0 : n.members) ? n.members : [];
      return {
        id: Number(n == null ? void 0 : n.id),
        name: String((n == null ? void 0 : n.name) ?? ""),
        description: (n == null ? void 0 : n.description) ?? null,
        ownerId: Number((n == null ? void 0 : n.ownerId) ?? (n == null ? void 0 : n.created_by)),
        ownerName: (n == null ? void 0 : n.ownerName) ?? null,
        hqName: (n == null ? void 0 : n.hqName) ?? null,
        hqLatitude: (n == null ? void 0 : n.hqLatitude) ?? (n == null ? void 0 : n.hq_latitude) ?? null,
        hqLongitude: (n == null ? void 0 : n.hqLongitude) ?? (n == null ? void 0 : n.hq_longitude) ?? null,
        pixelsPainted: Number((n == null ? void 0 : n.pixelsPainted) ?? (n == null ? void 0 : n.pixels_painted) ?? 0),
        membersCount: Number((n == null ? void 0 : n.membersCount) ?? s.length),
        members: s.map(o => ({
          id: Number(o == null ? void 0 : o.id),
          name: String((o == null ? void 0 : o.name) ?? `#${o==null?void 0:o.id}`),
          picture: (o == null ? void 0 : o.picture) ?? null,
          pixelsPainted: Number((o == null ? void 0 : o.pixelsPainted) ?? (o == null ? void 0 : o.pixels_painted) ?? 0),
          lastPixelLatitude: (o == null ? void 0 : o.lastPixelLatitude) ?? null,
          lastPixelLongitude: (o == null ? void 0 : o.lastPixelLongitude) ?? null,
          role: (o == null ? void 0 : o.alliance_role) === "admin" || (o == null ? void 0 : o.role) === "admin" ? "admin" : "member",
          timedOut: !!(o != null && o.timedOut),
          banned: !!(o != null && o.banned)
        }))
      }
    }
    async getAdminAllianceMembers(t, e) {
      const n = new URLSearchParams({
          page: String(e.page),
          pageSize: String(e.pageSize)
        }),
        s = await this.request(`/staff/dashboard/alliances/${t}/members?${n.toString()}`, {
          method: "GET",
          credentials: "include"
        });
      if (s.status === a.NOT_FOUND) return {
        members: [],
        total: 0
      };
      if (s.status !== a.OK) throw new l(i(), s.status);
      const o = await s.json(),
        u = Array.isArray(o == null ? void 0 : o.members) ? o.members : [];
      return {
        members: u.map(c => ({
          id: Number(c == null ? void 0 : c.id),
          name: String((c == null ? void 0 : c.name) ?? `#${c==null?void 0:c.id}`),
          picture: (c == null ? void 0 : c.picture) ?? null,
          pixelsPainted: Number((c == null ? void 0 : c.pixelsPainted) ?? (c == null ? void 0 : c.pixels_painted) ?? 0),
          lastPixelLatitude: (c == null ? void 0 : c.lastPixelLatitude) ?? null,
          lastPixelLongitude: (c == null ? void 0 : c.lastPixelLongitude) ?? null,
          role: (c == null ? void 0 : c.alliance_role) === "admin" || (c == null ? void 0 : c.role) === "admin" ? "admin" : "member",
          timedOut: !!(c != null && c.timedOut),
          banned: !!(c != null && c.banned)
        })),
        total: Number((o == null ? void 0 : o.total) ?? u.length)
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
      if (n.status === a.BAD_REQUEST) {
        const s = await n.json().catch(() => ({}));
        throw new Error((s == null ? void 0 : s.error) ?? i())
      } else if (n.status !== a.OK) throw new l(i(), n.status)
    }
    async changeAllianceLeader(t, e) {
      const n = await this.request(`/staff/dashboard/alliances/${t}/leader`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          newLeaderUserId: e
        })
      });
      if (n.status === a.BAD_REQUEST) {
        const s = await n.json();
        throw (s == null ? void 0 : s.error) === "user_not_in_alliance" ? new Error(d_()) : new Error(i())
      } else if (n.status !== a.OK) throw new l(i(), n.status)
    }
    async banAllAllianceMembers(t, e, n) {
      const s = await this.request(`/staff/dashboard/alliances/${t}/ban-all`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          reason: e,
          notes: n
        })
      });
      if (s.status !== a.OK) throw new l(i(), s.status)
    }
    async setAllianceMemberRole(t, e, n) {
      const s = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          role: n
        })
      });
      if (s.status !== a.OK) throw new l(i(), s.status)
    }
    async removeAllianceMember(t, e) {
      const n = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
        method: "POST",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(i(), n.status)
    }
    async giveAllianceAdmin(t) {
      const e = await this.request("/alliance/give-admin", {
        body: JSON.stringify({
          promotedUserId: t
        }),
        method: "POST",
        credentials: "include"
      });
      if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error(K()) : new Error(i())
    }
    async banAllianceUser(t) {
      const e = await this.request("/alliance/ban", {
        body: JSON.stringify({
          bannedUserId: t
        }),
        method: "POST",
        credentials: "include"
      });
      if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error(K()) : new Error(i())
    }
    async equipFlag(t) {
      if ((await this.request(`/flag/equip/${t}`, {
          method: "POST",
          credentials: "include"
        })).status !== a.OK) throw new Error(i())
    }
    async unbanAllianceUser(t) {
      const e = await this.request("/alliance/unban", {
        body: JSON.stringify({
          unbannedUserId: t
        }),
        method: "POST",
        credentials: "include"
      });
      if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error(K()) : new Error(i())
    }
  }
}

function sb(r) {
  return class extends r {
    async getUserAnticheat(t) {
      const e = await this.request(`/staff/dashboard/users/anticheat?id=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(i(), e.status);
      return await e.json()
    }
    async getAnticheatStats(t, e) {
      const n = await this.request(`/staff/dashboard/anticheat/stats?from=${t}&to=${e}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(i(), n.status);
      return n.json()
    }
    async getAnticheatSignals(t, e) {
      const n = await this.request(`/staff/dashboard/anticheat/signals?from=${t}&to=${e}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(i(), n.status);
      return n.json()
    }
    async getAnticheatUserJourney(t, e, n) {
      const s = await this.request(`/staff/dashboard/anticheat/user/${t}?from=${e}&to=${n}`, {
        method: "GET",
        credentials: "include"
      });
      if (s.status !== a.OK) throw new l(i(), s.status);
      return s.json()
    }
    async getAnticheatSignalAnalysis(t, e, n) {
      const s = await this.request(`/staff/dashboard/anticheat/signal/${encodeURIComponent(t)}?from=${encodeURIComponent(e)}&to=${encodeURIComponent(n)}`, {
        method: "GET",
        credentials: "include"
      });
      if (s.status !== a.OK) throw new l(i(), s.status);
      return s.json()
    }
  }
}

function ab(r) {
  return class extends r {
    async autoReviewBan(t) {
      const e = await this.request("/staff/dashboard/users/auto-review-ban", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
      if (e.status !== a.OK) throw new l(i(), e.status);
      return await e.json()
    }
    async getUserAppeals(t) {
      const e = new URLSearchParams;
      e.set("userId", String(t.userId)), e.set("kind", t.kind), t.page !== void 0 && e.set("page", String(t.page)), t.pageSize !== void 0 && e.set("pageSize", String(t.pageSize)), t.sortBy && e.set("sortBy", t.sortBy), t.sortDir && e.set("sortDir", t.sortDir);
      const n = await this.request(`/staff/dashboard/users/appeals?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(i(), n.status);
      const s = await n.json(),
        o = Array.isArray(s == null ? void 0 : s.appeals) ? s.appeals : [],
        u = typeof(s == null ? void 0 : s.total) == "number" ? s.total : o.length;
      return {
        appeals: o,
        total: u
      }
    }
    async submitBanAppeal(t, e) {
      const n = JSON.stringify(e ? {
          message: t,
          ticketId: e
        } : {
          message: t
        }),
        s = await ee.getHeaders(n),
        o = await this.request("/report/appeal", {
          method: "POST",
          credentials: "include",
          body: n,
          headers: s
        });
      if (o.status === a.FORBIDDEN) {
        const u = await o.json();
        if ((u == null ? void 0 : u.error) === "challenge-required" && u.tier) {
          if (await ht(u.tier)) return this.submitBanAppeal(t, e);
          throw new l(We(), o.status)
        }
      }
      if (o.status !== a.OK && o.status !== a.ALREADY_REPORTED) throw new l(i(), o.status);
      return o.status
    }
    async getOpenAppeals() {
      const t = await this.request("/staff/appeals/get", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
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
      if (n.status !== a.OK) throw new l(i(), n.status);
      return await n.json()
    }
    async getUserLastAppeal() {
      const t = await this.request("/me/last-appeal", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
      const e = await t.json();
      return (e == null ? void 0 : e.appealDate) ?? null
    }
    async assignAppeals() {
      const t = await this.request("/staff/appeals/assign", {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
      return await t.json()
    }
    async getPendingAppealsCount() {
      const t = await this.request("/staff/appeals/open_count", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
      const e = await t.json();
      return (e == null ? void 0 : e.appeals) ?? 0
    }
  }
}

function ob(r) {
  return class extends r {
    async getUserFrames() {
      const t = await this.request("/me/frames", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
      return t.json()
    }
    async postEquipUserFrame(t) {
      const e = await this.request(`/me/frames/equip/${t}`, {
        method: "POST",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(i(), e.status)
    }
    async getUserBadges() {
      const t = await this.request("/me/badges", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
      return t.json()
    }
    async postEquipUserBadge(t) {
      const e = await this.request("/me/badges/equip", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== a.OK) throw new l(i(), e.status)
    }
    async getStoreFrames() {
      const t = await this.request("/store/frames", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
      return t.json()
    }
    async postBuyUserFrame(t) {
      const e = await this.request(`/store/frames/buy/${t}`, {
        method: "POST",
        credentials: "include"
      });
      if (e.status === a.NOT_FOUND) throw new Error(wt());
      if (e.status === a.FORBIDDEN) throw new Error(vt());
      if (e.status === a.CONFLICT) throw new Error(bt());
      if (e.status !== a.OK) throw new Error(i())
    }
    async postEquipCosmetics(t) {
      const e = await this.request("/me/cosmetic/equip", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== a.OK) throw new l(i(), e.status)
    }
    async getStoreNameCosmetics() {
      const t = await this.request("/store/name", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
      return await t.json()
    }
    async postBuyCosmetic(t) {
      const e = await this.request(`/store/name/buy/${t}`, {
        method: "POST",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(i(), e.status)
    }
    async getMyNameCosmetics() {
      const t = await this.request("/me/cosmetics/name", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
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
      if (n.status !== a.OK) throw new l(i(), n.status)
    }
    async postCreateFont(t) {
      const e = await this.request("/staff/store-manager/fonts", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== a.OK) throw new l(i(), e.status)
    }
    async postCreateStyle(t) {
      const e = await this.request("/staff/store-manager/styles", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== a.OK) throw new l(i(), e.status)
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
      if (n.status !== a.OK) throw new l(i(), n.status);
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
      if (n.status !== a.OK) throw new l(i(), n.status);
      return n.json()
    }
    async deleteR2Image(t) {
      const e = await this.request(`/staff/store-manager/images/${t}`, {
        method: "DELETE",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(i(), e.status)
    }
  }
}
const B = {
  day: 1440 * 60 * 1e3,
  hour: 3600 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
};

function gv(r) {
  const t = Math.floor(r / B.hour);
  r -= t * B.hour;
  const e = Math.floor(r / B.minute);
  r -= e * B.minute;
  const s = Math.floor(r / B.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${s}` : `${e}:${s}`
}

function wv(r) {
  const t = r.getFullYear(),
    e = String(r.getMonth() + 1).padStart(2, "0"),
    n = String(r.getDate()).padStart(2, "0"),
    s = String(r.getHours()).padStart(2, "0"),
    o = String(r.getMinutes()).padStart(2, "0"),
    u = String(r.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${n} ${s}:${o}:${u}`
}
const ib = 30 * B.minute;

function cb(r) {
  return class extends r {
    constructor() {
      super(...arguments);
      g(this, "lastHotspotRequestAt", 0)
    }
    async leaderboardPlayers(e) {
      const n = await this.request(`/leaderboard/player/${e}`);
      if (n.status !== a.OK) throw new Error($());
      return n.json()
    }
    async leaderboardAlliances(e) {
      const n = await this.request(`/leaderboard/alliance/${e}`);
      if (n.status !== a.OK) throw new Error($());
      return n.json()
    }
    async leaderboardRegions(e, n = 0) {
      const s = await this.request(`/leaderboard/region/${e}/${n}`);
      if (s.status === a.OK) return s.json();
      throw new Error($())
    }
    async leaderboardRegionPlayers(e, n) {
      const s = await this.request(`/leaderboard/region/players/${e}/${n}`);
      if (s.status === a.OK) return s.json();
      throw new Error($())
    }
    async leaderboardRegionAlliances(e, n) {
      const s = await this.request(`/leaderboard/region/alliances/${e}/${n}`);
      if (s.status === a.OK) return s.json();
      throw new Error($())
    }
    async leaderboardCountries(e) {
      const n = await this.request(`/leaderboard/country/${e}`, {
        credentials: "include"
      });
      if (n.status === a.OK) return n.json();
      throw new Error($())
    }
    refreshHotspotsIfStale() {
      Date.now() - this.lastHotspotRequestAt < ib || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
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
      if (n.status !== a.OK) throw new Error(i());
      return n.json()
    }
  }
}

function ub(r) {
  return class extends r {
    async postCaptchaSession(t, e = "include") {
      const n = await this.request("/anticheat/captcha/session", {
        method: "POST",
        credentials: e,
        body: JSON.stringify(t),
        headers: {
          "x-fp": await Ve()
        }
      });
      if (!n.ok) throw n.status === 500 ? new l(i(), n.status) : new l(Al(), n.status);
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
      })).status === a.OK
    }
  }
}
const yv = {
    griefing: au(),
    "multi-accounting": Y_(),
    "hate-speech": Du(),
    bot: ws(),
    doxxing: Mo(),
    "inappropriate-content": nl(),
    other: $s()
  },
  bv = {
    doxxing: Jo(),
    "hate-speech": $u(),
    griefing: wu(),
    "multi-accounting": uf(),
    bot: Ds(),
    "inappropriate-content": ml(),
    other: na()
  },
  vv = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  ut = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  Ev = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  lb = 365 * B.day;

function Et(r) {
  if (!r) return null;
  const e = (r instanceof Date ? r : new Date(r)).getTime();
  return Number.isFinite(e) ? e : null
}

function Tv(r, t = Date.now()) {
  const e = Et(r);
  return e === null ? !1 : e - t >= lb
}

function Ov(r, t = Date.now()) {
  const e = Et(r);
  if (e === null || e <= t) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const n = Math.max(0, Math.ceil((e - t) / 6e4)),
    s = Math.floor(n / 1440),
    o = Math.floor(n % 1440 / 60),
    u = n % 60;
  return {
    days: s,
    hours: o,
    minutes: u
  }
}

function db(r) {
  return class extends r {
    async getModeratorTickets() {
      const t = await this.request("/staff/tickets/get", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
      const e = await t.json();
      for (const n of e.tickets) n.reports.sort((s, o) => ut[s.reason] - ut[o.reason]);
      return e
    }
    async countMyTicketsClosedToday() {
      const t = await this.request("/staff/tickets/closed-today", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
      return t.json()
    }
    async getOpenTicketsCount() {
      const t = await this.request("/staff/tickets/open_count", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
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
      if (t.status !== a.OK) throw new l(i(), t.status);
      return t.json()
    }
    async setTicketStatus(t, e, n, s, o) {
      const u = await this.request("/staff/tickets/set-status", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          ticketId: t,
          status: e,
          selectedReportId: n,
          assignedReason: s,
          ignoreReason: o
        })
      });
      if (u.status !== a.OK && u.status !== a.BAD_REQUEST) throw new l(i(), u.status)
    }
    async getLastResolvedTicket() {
      const t = await this.request("/staff/tickets/reversals/last-resolved", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
      return (await t.json()).ticket
    }
    async getTicketReversalTicketInfo(t) {
      const e = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(i(), e.status);
      return (await e.json()).ticket
    }
    async getReporterReportHistory(t, e) {
      const n = await this.request(`/staff/tickets/reporter-history?ticketId=${encodeURIComponent(t)}&reporterId=${e}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(i(), n.status);
      return (await n.json()).reports
    }
    async createTicketReversal(t) {
      const e = await this.request("/staff/tickets/reversals", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status === a.CONFLICT) {
        const n = await e.json().catch(() => ({}));
        throw (n == null ? void 0 : n.error) === "reversal_already_pending" ? new l(Ny(), a.CONFLICT) : new l(i(), a.CONFLICT)
      }
      if (e.status !== a.OK) throw new l(i(), e.status);
      return e.json()
    }
    async reSolveTicket(t) {
      const e = await this.request("/staff/tickets/re-solve", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== a.OK) throw new l(i(), e.status);
      return e.json()
    }
    async listTicketReversals(t = {}) {
      const e = new URLSearchParams;
      t.status && e.set("status", t.status), t.page != null && e.set("page", String(t.page)), t.pageSize != null && e.set("pageSize", String(t.pageSize));
      const n = `/staff/tickets/reversals${e.toString()?`?${e.toString()}`:""}`,
        s = await this.request(n, {
          method: "GET",
          credentials: "include"
        });
      if (s.status !== a.OK) throw new l(i(), s.status);
      return (await s.json()).reversals ?? []
    }
    async getTicketReversal(t) {
      const e = await this.request(`/staff/tickets/reversals/${t}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(i(), e.status);
      return (await e.json()).reversal
    }
    async reviewTicketReversal(t, e, n) {
      const s = await this.request(`/staff/tickets/reversals/${t}/review`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          decision: e,
          notes: n
        })
      });
      if (s.status === a.FORBIDDEN) throw new l(By(), a.FORBIDDEN);
      if (s.status === a.CONFLICT) throw new l(Zy(), a.CONFLICT);
      if (s.status !== a.OK) throw new l(i(), s.status)
    }
    async getOpenTicketsSummary() {
      const t = await this.request("/staff/dashboard/summary/counters/tickets", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
      return t.json()
    }
    async getOpenReportsSummary() {
      const t = await this.request("/staff/dashboard/summary/counters/reports", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
      return t.json()
    }
    async getBanAppealStats(t, e) {
      const n = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(i(), n.status);
      const s = await n.json();
      return {
        items: s.items ?? [],
        globals: s.globals
      }
    }
    async getClosedTicketsByMod(t, e) {
      const n = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(i(), n.status);
      return (await n.json()).items.map(o => ({
        ...o,
        suspensionRate: (o.ban + o.timeout) / o.total
      }))
    }
    async getClosedReportsByMod(t, e) {
      const n = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(i(), n.status);
      return (await n.json()).items.map(o => ({
        ...o,
        suspensionRate: (o.ban + o.timeout) / o.total
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
      if (e.status !== a.OK) throw new l(i(), e.status);
      return e.json()
    }
    async getUserInfoFull(t) {
      const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.NOT_FOUND) {
        if (e.status !== a.OK) throw new l(i(), e.status);
        return e.json()
      }
    }
    async getUsersReportInfo(t) {
      const e = t.filter(s => Number.isFinite(s) && s > 0);
      if (e.length === 0) return [];
      const n = await this.request(`/staff/dashboard/users/info-batch?ids=${encodeURIComponent(e.join(","))}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(i(), n.status);
      return n.json()
    }
    async getUserInfoByEmail(t) {
      const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.NOT_FOUND) {
        if (e.status !== a.OK) throw new l(i(), e.status);
        return e.json()
      }
    }
    async getUserPunishments(t) {
      const e = await this.request(`/staff/dashboard/users/punishments?userId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(i(), e.status);
      return (await e.json()).punishments ?? []
    }
    async getPunishmentTicket(t) {
      const e = await this.request(`/staff/dashboard/users/punishment-ticket?ticketId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(i(), e.status);
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
      if (e.status !== a.OK) throw new l(i(), e.status)
    }
    async getUserNotes(t, e) {
      const n = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
        s = await this.request(n, {
          method: "GET",
          credentials: "include"
        });
      if (s.status !== a.OK) throw new l(i(), s.status);
      return s.json()
    }
    async addUserNote(t, e, n) {
      const s = n == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
        o = await this.request(s, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            userId: t,
            note: e
          })
        });
      if (o.status !== a.OK) throw new l(i(), o.status)
    }
    async getUserPermissions(t) {
      const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(i(), e.status);
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
      if (n.status !== a.OK) throw new l(i(), n.status);
      const s = await n.json();
      return Array.isArray(s == null ? void 0 : s.permissions) ? s.permissions : []
    }
    async getUserPurchases(t) {
      const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(i(), e.status);
      const n = await e.json();
      return (Array.isArray(n == null ? void 0 : n.purchases) ? n.purchases : []).map(o => {
        const u = o.is_dollar ?? o.isDollar ?? o.currency ?? o.Currency ?? 0;
        let c;
        if (typeof u == "string") {
          const y = u.toLowerCase();
          c = y === "usd" || y === "dollar" || y === "true"
        } else typeof u == "number" ? c = u !== 0 : c = !!u;
        const _ = typeof o.createdAt == "string" ? o.createdAt : o.CreatedAt ? new Date(o.CreatedAt).toISOString() : "",
          f = o.product_variant ?? o.productVariant,
          k = f == null || f === "" ? null : Number(f);
        return {
          product_name: String(o.productName ?? o.product_name ?? ""),
          amount: Number(o.amount ?? 0),
          price: Number(o.price ?? 0),
          is_dollar: c,
          created_at: _,
          product_variant: Number.isInteger(k) ? k : null
        }
      })
    }
    async getUserTickets(t, e) {
      if (e === "appeals" && (t.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
      const n = new URLSearchParams;
      n.set("userId", String(t.userId)), n.set("kind", String(t.kind)), n.set("page", String(t.page ?? 0)), n.set("pageSize", String(t.pageSize ?? 20)), t.sortBy && n.set("sortBy", t.sortBy), t.sortDir && n.set("sortDir", t.sortDir), t.status && n.set("status", t.status), t.reason && n.set("reason", t.reason), e === "appeals" && n.set("appealId", String(t.appealId));
      const s = e === "appeals" ? `/staff/appeals/tickets?${n.toString()}` : `/staff/dashboard/users/tickets?${n.toString()}`,
        o = await this.request(s, {
          method: "GET",
          credentials: "include"
        });
      if (o.status !== a.OK) throw new l(i(), o.status);
      const u = await o.json(),
        c = Array.isArray(u == null ? void 0 : u.tickets) ? u.tickets : [],
        _ = typeof(u == null ? void 0 : u.total) == "number" ? u.total : c.length;
      return {
        tickets: c,
        total: _
      }
    }
    async getAllTickets(t) {
      const e = new URLSearchParams;
      e.set("page", String(t.page ?? 0)), e.set("pageSize", String(t.pageSize ?? 20)), t.modId && e.set("modId", String(t.modId)), t.sortBy && e.set("sortBy", t.sortBy), t.sortDir && e.set("sortDir", t.sortDir), t.status && e.set("status", t.status), t.reason && e.set("reason", t.reason), t.role && e.set("role", t.role), t.reviewed && e.set("reviewed", t.reviewed), t.reSolvedOnly && e.set("reSolvedOnly", "true"), t.hideSystem && e.set("hideSystem", "true"), t.dateFrom && e.set("dateFrom", t.dateFrom), t.dateTo && e.set("dateTo", t.dateTo);
      const n = await this.request(`/staff/dashboard/all-tickets?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(i(), n.status);
      const s = await n.json(),
        o = Array.isArray(s == null ? void 0 : s.tickets) ? s.tickets : [],
        u = typeof(s == null ? void 0 : s.total) == "number" ? s.total : o.length,
        c = typeof(s == null ? void 0 : s.matchedTotal) == "number" ? s.matchedTotal : u,
        _ = typeof(s == null ? void 0 : s.reviewedTotal) == "number" ? s.reviewedTotal : 0;
      return {
        tickets: o,
        total: u,
        matchedTotal: c,
        reviewedTotal: _
      }
    }
    async reviewTicket(t) {
      const e = await this.request("/staff/dashboard/all-tickets/review", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== a.OK) throw new l(i(), e.status);
      return e.json()
    }
    async getTicketOverturnInfo(t) {
      const e = await this.request(`/staff/dashboard/all-tickets/overturn-info?ticketId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(i(), e.status);
      return e.json()
    }
    async getModerationTranslate(t, e) {
      const n = e == "tickets" ? "/staff/tickets/translate" : "/staff/appeals/translate",
        s = await this.request(n, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            text: t
          })
        });
      if (s.status !== a.OK) throw new l(i(), s.status);
      const o = await s.json();
      return o == null ? void 0 : o.translation
    }
    mapTicketsToReportRows(t, e) {
      var s, o, u, c, _;
      const n = [];
      for (const f of t) {
        const k = f.status ?? "open";
        if (e === "received") {
          for (const y of f.reports) n.push({
            id: String(y.id),
            ticketId: String(f.id),
            createdAt: y.createdAt ?? f.createdAt,
            byUser: {
              id: Number(y.reportedBy),
              name: String(y.reportedByName ?? y.reportedBy),
              picture: y.reportedByPicture ?? null
            },
            reason: String(y.reason),
            status: k
          });
          continue
        }
        if (e === "sent") {
          for (const y of f.reports) n.push({
            id: String(y.id),
            ticketId: String(f.id),
            createdAt: y.createdAt ?? f.createdAt,
            toUser: {
              id: Number(f.reportedUser.id),
              name: String(f.reportedUser.name),
              picture: f.reportedUser.picture ?? null
            },
            reason: String(y.reason),
            status: k
          });
          continue
        }
        n.push({
          id: String(f.id),
          ticketId: String(f.id),
          createdAt: f.createdAt,
          handledBy: f.status && f.status !== "open" ? {
            id: ((s = f.handledBy) == null ? void 0 : s.id) ?? 0,
            name: ((o = f.handledBy) == null ? void 0 : o.name) ?? "Moderator",
            picture: ((u = f.handledBy) == null ? void 0 : u.picture) ?? null
          } : {
            id: 0,
            name: "—",
            picture: null
          },
          reason: String(((_ = (c = f.reports) == null ? void 0 : c[0]) == null ? void 0 : _.reason) ?? "other"),
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
      if (n.status !== a.OK) throw new l(i(), n.status);
      return n.json()
    }
    async getTicketsKpi(t) {
      const e = new URLSearchParams;
      e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
      const n = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(i(), n.status);
      return n.json()
    }
  }
}

function _b(r) {
  return class extends r {
    async getNotificationCount() {
      const t = await this.request("/notification/count", {
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
      const {
        count: e
      } = await t.json();
      return e
    }
    async getNotificationPage(t) {
      const n = `/notification/page${t!==void 0?`?cursor=${encodeURIComponent(t)}`:""}`,
        s = await this.request(n, {
          credentials: "include"
        });
      if (s.status !== a.OK) throw new l(i(), s.status);
      return s.json()
    }
    async postNotificationMarkRead(t) {
      const e = await this.request("/notification/mark-read", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          notificationIds: t
        })
      });
      if (e.status !== a.OK) throw new l(i(), e.status);
      return e.json()
    }
    async postNotificationMarkReadAll() {
      const t = await this.request("/notification/mark-read/all", {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(i(), t.status);
      return t.json()
    }
  }
}

function fb(r) {
  return class extends r {
    async exchangeForCupCoins(t) {
      return (await this.request("/world-cup/coins/exchange", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          batches: t
        }),
        throwOnStatus: !1
      })).status === a.OK
    }
    async getOwnedWorldCupItems() {
      const t = await this.request("/world-cup/items/owned", {
        credentials: "include",
        throwOnStatus: !1
      });
      return t.status !== a.OK ? {
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
      })).status === a.OK
    }
    async getWorldCupPredictions() {
      const t = await this.request("/world-cup/predictions", {
        credentials: "omit",
        throwOnStatus: !1
      });
      return t.status !== a.OK ? [] : (await t.json()).predictions ?? []
    }
    async getMyWorldCupPredictions() {
      const t = await this.request("/world-cup/predictions/mine", {
        credentials: "include",
        throwOnStatus: !1
      });
      return t.status !== a.OK ? [] : (await t.json()).predictions ?? []
    }
    async postWorldCupPrediction(t, e) {
      const n = await this.request("/world-cup/predictions", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          matchId: t,
          pick: e
        }),
        throwOnStatus: !1
      });
      return n.status !== a.OK ? {
        status: n.status
      } : {
        status: n.status,
        result: await n.json()
      }
    }
    async driveStatus() {
      const t = await this.request("/drive/status", {
        credentials: "include"
      });
      return t.status !== a.OK ? !1 : !!(await t.json()).connected
    }
    async driveConnect(t) {
      const e = await this.request("/drive/connect", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          code: t
        })
      });
      if (e.status !== a.OK) throw new Error(`drive connect failed: ${e.status}`);
      return e.json()
    }
    async driveToken() {
      const t = await this.request("/drive/token", {
        credentials: "include",
        throwOnStatus: !1
      });
      if (t.status === a.CONFLICT) return null;
      if (t.status !== a.OK) throw new Error(`drive token failed: ${t.status}`);
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
      if (e.status === a.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(tt());
      if (e.status !== a.OK) throw new Error(await e.text());
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
      if (t.status === a.NOT_FOUND) return null;
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
      if (e.status !== a.OK) throw e.status === a.NOT_FOUND ? new Error(wt()) : e.status === a.FORBIDDEN ? new Error(vt()) : e.status === a.CONFLICT ? new Error(bt()) : new Error(i())
    }
    async getPlayAccountId() {
      const t = await this.request("/payment/play/account-id", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new Error(i());
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
      if (e.status === a.BAD_REQUEST) {
        const n = await e.json().catch(() => ({}));
        throw new Error((n == null ? void 0 : n.error) ?? "Invalid Play purchase")
      }
      if (e.status === a.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(tt());
      if (e.status !== a.OK) throw new Error(i());
      return e.json()
    }
    async verifyPendingPlayPurchases() {
      const t = await this.request("/payment/play/verify-pending", {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new Error(i());
      return t.json()
    }
    async getPlayClaimStatus(t) {
      const e = await this.request(`/payment/play/claim/${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status === a.NOT_FOUND) return {
        status: "unknown",
        droplets: 0
      };
      if (e.status !== a.OK) throw new Error(i());
      return e.json()
    }
    async listPlayPurchaseHistory() {
      const t = await this.request("/payment/play/history", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new Error(i());
      return t.json()
    }
  }
}
const pb = [{
    tileSize: 1e3,
    zoom: 11
  }],
  hb = 4,
  mb = 6e3,
  gb = [{
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
  wb = {
    android: {
      googlePlayBilling: {
        price: 1.2
      },
      appName: "live.wplace.twa"
    }
  },
  yb = {
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
  bb = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  vb = {
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
  Eb = {
    tools: {
      wayback: {
        limit: 1e4
      }
    }
  },
  Tb = [{
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
  Ob = {
    areaRadius: 250
  },
  U = {
    seasons: pb,
    regionSize: hb,
    refreshIntervalMs: mb,
    colors: gb,
    platforms: wb,
    products: yb,
    countries: bb,
    permissions: vb,
    settings: Eb,
    worldCupStore: Tb,
    moderation: Ob
  },
  Ue = U,
  kb = U.seasons,
  Tt = U.seasons.length - 1,
  kv = U.seasons[Tt].zoom,
  Iv = U.seasons[Tt].tileSize,
  Nv = U.permissions,
  Ib = U.settings,
  Nb = U.platforms.android,
  Sv = Nb.googlePlayBilling.price,
  Av = U.worldCupStore;

function Rv(r) {
  return Ue.countries[r - 1]
}

function Fe(r) {
  return Fe.map.get(r)
}(r => {
  r.sharedProducts = Object.entries(Ue.products).map(([t, e]) => ({
    ...e,
    productId: t
  })).filter(t => "lookupKey" in t), r.map = Sb(r.sharedProducts, t => t.lookupKey)
})(Fe || (Fe = {}));

function Sb(r, t) {
  const e = new Map;
  for (const n in r) {
    const s = Reflect.get(r, n),
      o = t(s, n, r);
    e.set(o, s)
  }
  return e
}

function lt(r, t) {
  const e = {};
  for (const n of r) {
    const s = t(n),
      o = e[s];
    o ? o.push(n) : e[s] = [n]
  }
  return e
}

function Dv(r, t) {
  const e = {};
  for (const n of r) {
    const s = t(n);
    e[s] = n
  }
  return e
}

function Ab(r) {
  return class extends r {
    async paint(t) {
      const e = lt(t, c => `t=(${c.tile[0]},${c.tile[1]}),s=${c.season}`),
        n = {
          season: t[0].season,
          tiles: Object.values(e).map(c => ({
            x: c[0].tile[0],
            y: c[0].tile[1],
            pixels: {
              x: c.map(_ => _.pixel[0]),
              y: c.map(_ => _.pixel[1]),
              colors: c.map(_ => _.colorIdx)
            }
          }))
        },
        s = JSON.stringify(n),
        o = await ee.getHeaders(s),
        u = await this.request("/paint", {
          method: "POST",
          body: s,
          headers: o,
          credentials: "include"
        });
      if (u.status === a.OK) {
        const c = await u.json().catch(() => ({}));
        return {
          worldCupQuestCompleted: !!(c != null && c.worldCupQuestCompleted)
        }
      }
      if (u.status !== a.OK) {
        if (u.status === a.UNAUTHORIZED) throw new Error(it());
        if (u.status === a.FORBIDDEN) {
          if (u.headers.get("cf-mitigated") === "challenge") throw new Error(nt());
          const c = await u.json();
          if ((c == null ? void 0 : c.error) === "timeout") {
            const _ = new Date(Date.now() + ((c == null ? void 0 : c.durationMs) ?? 0));
            throw new Error(ct({
              until: _.toLocaleString()
            }))
          }
          if ((c == null ? void 0 : c.error) === "refresh") throw new Error(at());
          if ((c == null ? void 0 : c.error) === "color-not-owned") throw new Error(st());
          if ((c == null ? void 0 : c.error) === "event-pixel-present") throw new Error(rt());
          if ((c == null ? void 0 : c.error) === "challenge-required")
            if (c.tier) {
              if (await ht(c.tier)) return this.paint(t);
              throw new Error(We())
            } else console.error("Challenge required but no tier provided", c);
          if ((c == null ? void 0 : c.error) === "verification-required") {
            const f = (await Lt().get()).sealed_result;
            if (f) return await this.verifyAnticheat(f), this.paint(t);
            throw new Error(i())
          }
          V.refresh()
        } else throw new Error(i())
      }
      return {
        worldCupQuestCompleted: !1
      }
    }
    async selectAreaClear(t, e) {
      return this.sendPaintRequests(t, (n, s, o) => `/staff/tools/select-area/clear/s${n}/pixel/${s}/${o}`, e)
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
      if (e.status !== a.OK) throw new l(i(), e.status);
      return e.json()
    }
    async getReverseTimestamps(t, e = {}) {
      const {
        mode: n = "depth",
        beforeDepth: s,
        beforeTimestamp: o
      } = e, u = await this.request("/staff/tools/select-area/reverse/timestamps", {
        method: "POST",
        body: JSON.stringify({
          sessionId: t,
          mode: n,
          beforeDepth: s,
          beforeTimestamp: o
        }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (u.status !== a.OK) throw new l(i(), u.status);
      return u.json()
    }
    async getReversePreview(t, e) {
      const {
        mode: n = "depth",
        snapshotDepth: s,
        timestamp: o
      } = e, u = await this.request("/staff/tools/select-area/reverse/preview", {
        method: "POST",
        body: JSON.stringify({
          sessionId: t,
          mode: n,
          snapshotDepth: s,
          timestamp: o
        }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (u.status !== a.OK) throw new l(i(), u.status);
      return u.json()
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
      if (n.status === a.BAD_REQUEST) {
        const s = await n.json(),
          o = (s == null ? void 0 : s.error) ?? "";
        throw o === "timelapse_too_many_events" ? new l(Kh(), a.BAD_REQUEST) : new l(typeof o == "string" && o ? o : i(), a.BAD_REQUEST)
      }
      if (n.status !== a.OK) throw new l(i(), n.status);
      return n.arrayBuffer()
    }
    async applyReverse(t, e) {
      const {
        mode: n = "depth",
        snapshotDepth: s,
        timestamp: o
      } = e, u = await this.request("/staff/tools/select-area/reverse/apply", {
        method: "POST",
        body: JSON.stringify({
          sessionId: t,
          mode: n,
          snapshotDepth: s,
          timestamp: o
        }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (u.status !== a.OK) throw new l(i(), u.status);
      return u.json()
    }
    async sendPaintRequests(t, e, n, s) {
      const o = lt(t, _ => `t=(${_.tile[0]},${_.tile[1]}),s=${_.season}`),
        c = (await Promise.all(Object.values(o).map(async _ => {
          const [f, k] = _[0].tile, y = _[0].season, P = {
            colors: _.map(A => A.colorIdx),
            coords: _.flatMap(A => A.pixel),
            csid: n
          }, L = JSON.stringify(P), N = e(y, f, k), R = await ee.getHeaders(L);
          return this.request(N, {
            method: "POST",
            body: L,
            headers: R,
            credentials: "include"
          })
        }))).filter(_ => _.status !== a.OK);
      if (c.length) {
        const _ = c[0];
        if (_.status === a.UNAUTHORIZED) throw new Error(it());
        if (_.status === a.FORBIDDEN) {
          if (_.headers.get("cf-mitigated") === "challenge") throw new Error(nt());
          const f = await _.json();
          if ((f == null ? void 0 : f.error) === "timeout") {
            const k = new Date(Date.now() + ((f == null ? void 0 : f.durationMs) ?? 0));
            throw new Error(ct({
              until: k.toLocaleString()
            }))
          }
          if ((f == null ? void 0 : f.error) === "refresh") throw new Error(at());
          if ((f == null ? void 0 : f.error) === "color-not-owned") throw new Error(st());
          if ((f == null ? void 0 : f.error) === "event-pixel-present") throw new Error(rt());
          V.refresh()
        } else throw new Error(i())
      }
    }
    async adminAutoPainterPaint(t, e, n) {
      const s = Rb(t),
        o = await Db(s),
        u = new FormData;
      u.append("fingerprint", e), u.append("season", s.season.toString()), u.append("px0", s.offsetX.toString()), u.append("py0", s.offsetY.toString()), u.append("width", s.width.toString()), u.append("height", s.height.toString()), u.append("pixels", t.length.toString()), u.append("bitmap", o, "auto-painter.png"), u.append("userId", n.toString());
      const c = await this.request("/staff/tools/auto-painter/paint", {
        method: "POST",
        body: u,
        credentials: "include"
      });
      if (c.status === a.FORBIDDEN) {
        const _ = await c.json().catch(() => null);
        if (typeof(_ == null ? void 0 : _.charges) == "number") throw new Error(bp({
          charges: Math.floor(_.charges),
          pixels: t.length
        }));
        const f = typeof(_ == null ? void 0 : _.error) == "string" ? _.error.trim() : "";
        throw f && f !== "Forbidden" ? new Error(f) : new Error("Auto painter is restricted to administrators.")
      }
      if (c.status !== a.OK) throw new Error(i());
      return c.json()
    }
    async getPixelInfo({
      season: t,
      tile: [e, n],
      pixel: [s, o]
    }) {
      const u = new URLSearchParams;
      u.set("x", String(s)), u.set("y", String(o));
      const c = await this.request(`/s${t}/pixel/${e}/${n}?${u.toString()}`, {
        credentials: "include"
      });
      if (c.status !== a.OK) {
        const _ = await c.text();
        throw new Error(bc({
          err: _
        }))
      }
      return c.json()
    }
    async getPixelAreaInfo({
      season: t,
      tile: [e, n],
      p0: [s, o],
      p1: [u, c]
    }) {
      const _ = await this.request(`/staff/tools/select-area/s${t}/${e}/${n}?x0=${s}&y0=${o}&x1=${u}&y1=${c}`, {
        credentials: "include"
      });
      if (_.status !== a.OK) {
        const N = await _.text();
        throw console.error("Error while fetching pixel area info", N), new Error(i())
      }
      const f = await _.arrayBuffer(),
        k = new DataView(f),
        y = Math.floor(f.byteLength / 5),
        P = new Uint32Array(y),
        L = new Uint8Array(y);
      for (let N = 0; N < y; N++) {
        const R = N * 5;
        P[N] = k.getUint32(R, !0), L[N] = k.getUint8(R + 4)
      }
      return {
        paintedBy: P,
        colors: L
      }
    }
  }
}

function Rb(r) {
  var P, L;
  if (!r.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = r[0].season;
  for (const N of r)
    if (N.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (P = Ue.seasons) == null ? void 0 : P[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const n = e.tileSize;
  let s = Number.POSITIVE_INFINITY,
    o = Number.POSITIVE_INFINITY,
    u = Number.NEGATIVE_INFINITY,
    c = Number.NEGATIVE_INFINITY;
  const _ = r.map(N => {
      const R = Math.round(N.tile[0] * n + N.pixel[0]),
        A = Math.round(N.tile[1] * n + N.pixel[1]);
      return R < s && (s = R), A < o && (o = A), R > u && (u = R), A > c && (c = A), {
        x: R,
        y: A,
        colorIdx: N.colorIdx
      }
    }),
    f = u - s + 1,
    k = c - o + 1;
  if (!Number.isFinite(f) || !Number.isFinite(k) || f <= 0 || k <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const y = new Uint8ClampedArray(f * k * 4);
  for (const {
      x: N,
      y: R,
      colorIdx: A
    }
    of _) {
    const Ye = (L = Ue.colors) == null ? void 0 : L[A];
    if (!Ye) throw new Error(`Unknown palette color index: ${A}`);
    const St = N - s,
      Ae = ((R - o) * f + St) * 4,
      [At, Rt, Dt] = Ye.rgb;
    y[Ae] = At, y[Ae + 1] = Rt, y[Ae + 2] = Dt, y[Ae + 3] = A === 0 ? 1 : 255
  }
  return {
    data: y,
    width: f,
    height: k,
    offsetX: s,
    offsetY: o,
    season: t
  }
}
async function Db(r) {
  const t = Pb(r.width, r.height),
    e = t.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const n = e.createImageData(r.width, r.height);
  return n.data.set(r.data), e.putImageData(n, 0, 0), "convertToBlob" in t ? t.convertToBlob({
    type: "image/png"
  }) : new Promise((s, o) => {
    t.toBlob(u => {
      if (!u) {
        o(new Error("Failed to encode auto painter bitmap."));
        return
      }
      s(u)
    }, "image/png")
  })
}

function Pb(r, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(r, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = r, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}

function xb(r) {
  return class extends r {
    validWaybackInput(t) {
      const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
        n = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < kb.length,
        s = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= Ib.tools.wayback.limit,
        o = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
        u = t.cursorTs !== void 0,
        c = t.cursorUserId !== void 0,
        _ = t.cursorAllianceId !== void 0,
        f = t.cursorPixelsCount !== void 0,
        k = u || c || _ || f,
        y = u && c && _ && f;
      let P = !0;
      return k && (P = y && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!n || !s || !o || !e || !P)
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
        s = e.toString(),
        o = await this.request(s.length > 0 ? `${n}?${s}` : n, {
          method: "GET",
          credentials: "include"
        });
      if (o.status === a.FORBIDDEN) throw new Error("Access denied");
      if (o.status !== a.OK) throw new Error("Failed to fetch wayback events");
      return o.json()
    }
  }
}
class jb extends tb(rb(nb(sb(ab(ob(cb(ub(db(_b(fb(Ab(xb(eb))))))))))))) {}
const q = new jb(ft);
typeof window < "u" && Mt(() => {
  let r = q.online;
  Ct(() => {
    const t = q.online;
    t && !r && window.dispatchEvent(new CustomEvent("wplace:online")), r = t
  })
});

function Ot(r, t) {
  if (!(r != null && r.length)) return !1;
  for (const e of r)
    if (e === t) return !0;
  return !1
}

function Ub(r, t) {
  for (const e of t)
    if (Ot(r, e)) return !0;
  return !1
}

function kt(r) {
  const t = atob(r),
    e = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
  return e
}

function Lb(r) {
  if (typeof Buffer < "u") return Buffer.from(r).toString("base64");
  let t = "";
  for (let e = 0; e < r.length; e++) t += String.fromCharCode(r[e]);
  return btoa(t)
}
class Mb {
  constructor(t) {
    g(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const n = Math.floor(t / 8),
      s = t % 8;
    if (n >= this.bytes.length) {
      const u = new Uint8Array(n + 1),
        c = u.length - this.bytes.length;
      for (let _ = 0; _ < this.bytes.length; _++) u[_ + c] = this.bytes[_];
      this.bytes = u
    }
    const o = this.bytes.length - 1 - n;
    e ? this.bytes[o] = this.bytes[o] | 1 << s : this.bytes[o] = this.bytes[o] & ~(1 << s)
  }
  get(t) {
    const e = Math.floor(t / 8),
      n = t % 8,
      s = this.bytes.length;
    return e > s ? !1 : (this.bytes[s - 1 - e] & 1 << n) !== 0
  }
}

function Pv(r) {
  return new Promise((t, e) => {
    const n = new FileReader;
    n.onload = () => {
      const s = n.result;
      if (!s || typeof s != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(s.substring(s.indexOf(",") + 1))
    }, n.readAsDataURL(r)
  })
}

function xv(r) {
  if (typeof FileReader > "u") {
    const t = r.type || "application/octet-stream";
    return r.arrayBuffer().then(e => `data:${t};base64,${Lb(new Uint8Array(e))}`)
  }
  return new Promise((t, e) => {
    const n = new FileReader;
    n.onloadend = () => {
      const s = n.result;
      if (typeof s != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(s)
    }, n.onerror = e, n.readAsDataURL(r)
  })
}

function jv(r) {
  if (!r.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = r.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = r.slice(5, t),
    n = r.slice(t + 1),
    s = e.indexOf(";base64"),
    o = (s === -1 ? e : e.slice(0, s)) || "text/plain";
  if (s !== -1) {
    const u = kt(n),
      c = new Uint8Array(u.byteLength);
    return c.set(u), new Blob([c], {
      type: o
    })
  }
  return new Blob([decodeURIComponent(n)], {
    type: o
  })
}

function Uv(...r) {
  return r.filter(Boolean).join(" ")
}
const Cb = typeof document < "u";
let dt = 0;
var ge, we, ye;
class zb {
  constructor() {
    b(this, ge, I(je([])));
    b(this, we, I(je([])));
    b(this, ye, t => {
      const e = this.toasts.findIndex(n => n.id === t);
      return e === -1 ? null : e
    });
    g(this, "addToast", t => {
      Cb && this.toasts.unshift(t)
    });
    g(this, "updateToast", ({
      id: t,
      data: e,
      type: n,
      message: s
    }) => {
      const o = this.toasts.findIndex(c => c.id === t),
        u = this.toasts[o];
      this.toasts[o] = {
        ...u,
        ...e,
        id: t,
        title: s,
        type: n,
        updated: !0
      }
    });
    g(this, "create", t => {
      var c;
      const {
        message: e,
        ...n
      } = t, s = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((c = t.id) == null ? void 0 : c.length) > 0 ? t.id : dt++, o = t.dismissable === void 0 ? !0 : t.dismissable, u = t.type === void 0 ? "default" : t.type;
      return Qe(() => {
        this.toasts.find(f => f.id === s) ? this.updateToast({
          id: s,
          data: t,
          type: u,
          message: e,
          dismissable: o
        }) : this.addToast({
          ...n,
          id: s,
          title: e,
          dismissable: o,
          type: u
        })
      }), s
    });
    g(this, "dismiss", t => (Qe(() => {
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
    g(this, "remove", t => {
      if (t === void 0) {
        this.toasts = [];
        return
      }
      const e = p(this, ye).call(this, t);
      if (e !== null) return this.toasts.splice(e, 1), t
    });
    g(this, "message", (t, e) => this.create({
      ...e,
      type: "default",
      message: t
    }));
    g(this, "error", (t, e) => this.create({
      ...e,
      type: "error",
      message: t
    }));
    g(this, "success", (t, e) => this.create({
      ...e,
      type: "success",
      message: t
    }));
    g(this, "info", (t, e) => this.create({
      ...e,
      type: "info",
      message: t
    }));
    g(this, "warning", (t, e) => this.create({
      ...e,
      type: "warning",
      message: t
    }));
    g(this, "loading", (t, e) => this.create({
      ...e,
      type: "loading",
      message: t
    }));
    g(this, "promise", (t, e) => {
      if (!e) return;
      let n;
      e.loading !== void 0 && (n = this.create({
        ...e,
        promise: t,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const s = t instanceof Promise ? t : t();
      let o = n !== void 0;
      return s.then(u => {
        if (typeof u == "object" && u && "ok" in u && typeof u.ok == "boolean" && !u.ok) {
          o = !1;
          const c = Bb(u);
          this.create({
            id: n,
            type: "error",
            message: c
          })
        } else if (e.success !== void 0) {
          o = !1;
          const c = typeof e.success == "function" ? e.success(u) : e.success;
          this.create({
            id: n,
            type: "success",
            message: c
          })
        }
      }).catch(u => {
        if (e.error !== void 0) {
          o = !1;
          const c = typeof e.error == "function" ? e.error(u) : e.error;
          this.create({
            id: n,
            type: "error",
            message: c
          })
        }
      }).finally(() => {
        var u;
        o && (this.dismiss(n), n = void 0), (u = e.finally) == null || u.call(e)
      }), n
    });
    g(this, "custom", (t, e) => {
      const n = (e == null ? void 0 : e.id) || dt++;
      return this.create({
        component: t,
        id: n,
        ...e
      }), n
    });
    g(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    g(this, "setHeight", t => {
      const e = p(this, ye).call(this, t.toastId);
      if (e === null) {
        this.heights.push(t);
        return
      }
      this.heights[e] = t
    });
    g(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return E(p(this, ge))
  }
  set toasts(t) {
    O(p(this, ge), t, !0)
  }
  get heights() {
    return E(p(this, we))
  }
  set heights(t) {
    O(p(this, we), t, !0)
  }
}
ge = new WeakMap, we = new WeakMap, ye = new WeakMap;

function Bb(r) {
  return r && typeof r == "object" && "status" in r ? `HTTP error! Status: ${r.status}` : `Error! ${r}`
}
const D = new zb;

function qb(r, t) {
  return D.create({
    message: r,
    ...t
  })
}
var Ce;
class Lv {
  constructor() {
    b(this, Ce, Q(() => D.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return E(p(this, Ce))
  }
}
Ce = new WeakMap;
const Kb = qb,
  Fb = Object.assign(Kb, {
    success: D.success,
    info: D.info,
    warning: D.warning,
    error: D.error,
    custom: D.custom,
    message: D.message,
    promise: D.promise,
    dismiss: D.dismiss,
    loading: D.loading,
    getActiveToasts: () => D.toasts.filter(r => !r.dismiss)
  });
var be, ve, Ee, Te, Oe, ke, Ie, Ne;
class $b {
  constructor() {
    g(this, "channel", new BroadcastChannel("user-channel"));
    b(this, be, I());
    b(this, ve, I(!0));
    b(this, Ee, I());
    b(this, Te, I(Date.now()));
    b(this, Oe, Q(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((Ke.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    b(this, ke, Q(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    b(this, Ie, Q(() => {
      var t;
      return new Mb(kt(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    b(this, Ne, Q(() => {
      var n;
      if (!((n = this.data) != null && n.timeoutUntil)) return;
      const t = new Date(this.data.timeoutUntil),
        e = t.getTime();
      if (!(!Number.isFinite(e) || e <= Ke.now)) return t
    }));
    this.channel && (this.channel.onmessage = t => {
      const e = JSON.parse(t.data);
      e.type === "refresh" ? (this.data = e.data, this.lastFetch = Date.now()) : e.type === "logout" && (this.data = void 0)
    })
  }
  get data() {
    return E(p(this, be))
  }
  set data(t) {
    O(p(this, be), t, !0)
  }
  get loading() {
    return E(p(this, ve))
  }
  set loading(t) {
    O(p(this, ve), t, !0)
  }
  get notificationCount() {
    return E(p(this, Ee))
  }
  set notificationCount(t) {
    O(p(this, Ee), t, !0)
  }
  get lastFetch() {
    return E(p(this, Te))
  }
  set lastFetch(t) {
    O(p(this, Te), t)
  }
  get charges() {
    return E(p(this, Oe))
  }
  set charges(t) {
    O(p(this, Oe), t)
  }
  get cooldown() {
    return E(p(this, ke))
  }
  set cooldown(t) {
    O(p(this, ke), t)
  }
  get flagsBitmap() {
    return E(p(this, Ie))
  }
  set flagsBitmap(t) {
    O(p(this, Ie), t)
  }
  get timeoutUntil() {
    return E(p(this, Ne))
  }
  set timeoutUntil(t) {
    O(p(this, Ne), t)
  }
  async refresh() {
    var t, e;
    try {
      return this.loading = !0, this.data = await q.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && q.getNotificationCount().then(n => {
        this.notificationCount = n
      }).catch(n => {
        console.error("Failed to refresh notification count:", n)
      }), (e = this.data) != null && e.id && ee.setUserId(this.data.id), !0
    } catch (n) {
      return console.error(n), Fb.warning(Uf(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var t;
    await q.logout(), (t = this.channel) == null || t.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(t) {
    var n;
    return t < 32 ? !0 : ((((n = this.data) == null ? void 0 : n.extraColorsBitmap) ?? 0) & 1 << t - 32) !== 0
  }
  hasPermission(t) {
    var e;
    return Ot((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return Ub((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
be = new WeakMap, ve = new WeakMap, Ee = new WeakMap, Te = new WeakMap, Oe = new WeakMap, ke = new WeakMap, Ie = new WeakMap, Ne = new WeakMap;
const V = new $b;
let w;
const j = new Array(128).fill(void 0);
j.push(void 0, null, !0, !1);

function m(r) {
  return j[r]
}
let Z = j.length;

function T(r) {
  Z === j.length && j.push(j.length + 1);
  const t = Z;
  return Z = j[t], j[t] = r, t
}

function M(r, t) {
  try {
    return r.apply(this, t)
  } catch (e) {
    w.__wbindgen_export_0(T(e))
  }
}

function F(r) {
  return r == null
}
const It = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && It.decode();
let X = null;

function De() {
  return (X === null || X.byteLength === 0) && (X = new Uint8Array(w.memory.buffer)), X
}

function Pe(r, t) {
  return r = r >>> 0, It.decode(De().subarray(r, r + t))
}

function Gb(r) {
  r < 132 || (j[r] = Z, Z = r)
}

function _t(r) {
  const t = m(r);
  return Gb(r), t
}
let G = null;

function Le() {
  return (G === null || G.buffer.detached === !0 || G.buffer.detached === void 0 && G.buffer !== w.memory.buffer) && (G = new DataView(w.memory.buffer)), G
}
let W = 0;
const xe = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  Vb = typeof xe.encodeInto == "function" ? function(r, t) {
    return xe.encodeInto(r, t)
  } : function(r, t) {
    const e = xe.encode(r);
    return t.set(e), {
      read: r.length,
      written: e.length
    }
  };

function Se(r, t, e) {
  if (e === void 0) {
    const c = xe.encode(r),
      _ = t(c.length, 1) >>> 0;
    return De().subarray(_, _ + c.length).set(c), W = c.length, _
  }
  let n = r.length,
    s = t(n, 1) >>> 0;
  const o = De();
  let u = 0;
  for (; u < n; u++) {
    const c = r.charCodeAt(u);
    if (c > 127) break;
    o[s + u] = c
  }
  if (u !== n) {
    u !== 0 && (r = r.slice(u)), s = e(s, n, n = u + r.length * 3, 1) >>> 0;
    const c = De().subarray(s + u, s + n),
      _ = Vb(r, c);
    u += _.written, s = e(s, n, u, 1) >>> 0
  }
  return W = u, s
}

function Hb(r) {
  const t = Se(r, w.__wbindgen_export_1, w.__wbindgen_export_2),
    e = W;
  w.set_discord_id(t, e)
}

function Wb(r) {
  const t = Se(r, w.__wbindgen_export_1, w.__wbindgen_export_2),
    e = W;
  w.set_fingerprint(t, e)
}

function Yb(r) {
  const t = Se(r, w.__wbindgen_export_1, w.__wbindgen_export_2),
    e = W;
  w.set_detected_bot(t, e)
}

function Jb(r) {
  let t, e;
  try {
    const o = w.__wbindgen_add_to_stack_pointer(-16),
      u = Se(r, w.__wbindgen_export_1, w.__wbindgen_export_2),
      c = W;
    w.get_pawtected_endpoint_payload(o, u, c);
    var n = Le().getInt32(o + 0, !0),
      s = Le().getInt32(o + 4, !0);
    return t = n, e = s, Pe(n, s)
  } finally {
    w.__wbindgen_add_to_stack_pointer(16), w.__wbindgen_export_3(t, e, 1)
  }
}

function Be(r) {
  w.set_user_id(r)
}

function Qb(r) {
  w.set_cf_likely_automated(r)
}

function Xb(r) {
  w.set_automated_clicks(r)
}

function Zb(r) {
  const t = Se(r, w.__wbindgen_export_1, w.__wbindgen_export_2),
    e = W;
  w.request_url(t, e)
}

function ev(r) {
  w.set_automated_browser(r)
}
async function tv(r, t) {
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

function rv() {
  const r = {};
  return r.wbg = {}, r.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    const e = m(t).buffer;
    return T(e)
  }, r.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return M(function(t, e) {
      const n = m(t).call(m(e));
      return T(n)
    }, arguments)
  }, r.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return M(function(t, e, n) {
      const s = m(t).call(m(e), m(n));
      return T(s)
    }, arguments)
  }, r.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    const e = m(t).crypto;
    return T(e)
  }, r.wbg.__wbg_document_d249400bd7bd996d = function(t) {
    const e = m(t).document;
    return F(e) ? 0 : T(e)
  }, r.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return M(function(t, e) {
      m(t).getRandomValues(m(e))
    }, arguments)
  }, r.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return M(function(t, e) {
      const n = Reflect.get(m(t), m(e));
      return T(n)
    }, arguments)
  }, r.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return M(function(t) {
      return m(t).hasFocus()
    }, arguments)
  }, r.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return M(function(t) {
      const e = m(t).innerWidth;
      return T(e)
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
    return T(e)
  }, r.wbg.__wbg_navigator_1577371c070c8947 = function(t) {
    const e = m(t).navigator;
    return T(e)
  }, r.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    const e = new Uint8Array(m(t));
    return T(e)
  }, r.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    const n = new Function(Pe(t, e));
    return T(n)
  }, r.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, n) {
    const s = new Uint8Array(m(t), e >>> 0, n >>> 0);
    return T(s)
  }, r.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return T(e)
  }, r.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    const e = m(t).node;
    return T(e)
  }, r.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, r.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    const e = m(t).process;
    return T(e)
  }, r.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return M(function(t, e) {
      m(t).randomFillSync(_t(e))
    }, arguments)
  }, r.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return M(function() {
      const t = module.require;
      return T(t)
    }, arguments)
  }, r.wbg.__wbg_set_65595bdd868b3009 = function(t, e, n) {
    m(t).set(m(e), n >>> 0)
  }, r.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return F(t) ? 0 : T(t)
  }, r.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return F(t) ? 0 : T(t)
  }, r.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return F(t) ? 0 : T(t)
  }, r.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return F(t) ? 0 : T(t)
  }, r.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, n) {
    const s = m(t).subarray(e >>> 0, n >>> 0);
    return T(s)
  }, r.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    const e = m(t).versions;
    return T(e)
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
    const t = w.memory;
    return T(t)
  }, r.wbg.__wbindgen_number_get = function(t, e) {
    const n = m(e),
      s = typeof n == "number" ? n : void 0;
    Le().setFloat64(t + 8, F(s) ? 0 : s, !0), Le().setInt32(t + 0, !F(s), !0)
  }, r.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = m(t);
    return T(e)
  }, r.wbg.__wbindgen_object_drop_ref = function(t) {
    _t(t)
  }, r.wbg.__wbindgen_string_new = function(t, e) {
    const n = Pe(t, e);
    return T(n)
  }, r.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(Pe(t, e))
  }, r
}

function nv(r, t) {
  return w = r.exports, Nt.__wbindgen_wasm_module = t, G = null, X = null, w
}
async function Nt(r) {
  if (w !== void 0) return w;
  typeof r < "u" && (Object.getPrototypeOf(r) === Object.prototype ? {
    module_or_path: r
  } = r : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof r > "u" && (r = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = rv();
  (typeof r == "string" || typeof Request == "function" && r instanceof Request || typeof URL == "function" && r instanceof URL) && (r = fetch(r));
  const {
    instance: e,
    module: n
  } = await tv(await r, t);
  return nv(e, n)
}
class sv {
  constructor() {
    g(this, "interval");
    g(this, "storagesEmpty", !1);
    g(this, "storages", [new Me, new $e, new Ge, new ov]);
    g(this, "pawtectLoaded");
    g(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!V.data || this.storagesEmpty || localStorage.getItem(Me.KEY))) {
        for (const e of this.storages) {
          const n = e.get();
          if (n) {
            for (const s of this.storages) s.set(n);
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
    const e = B.day;
    for (const s of this.storages) {
      const o = s.get();
      if (o && !(o.timestamp + e < Date.now()) && o.userId !== t) return !0
    }
    const n = {
      userId: t,
      timestamp: Date.now()
    };
    for (const s of this.storages) s.set(n);
    return this.storagesEmpty = !1, !1
  }
  loadPawtect() {
    return this.pawtectLoaded || (this.pawtectLoaded = (async () => {
      var t;
      try {
        await Nt(zt), (t = V.data) != null && t.id && Be(V.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: av((n, s) => {
            let o = null;
            return n instanceof Request ? o = n.url : n instanceof URL ? o = n.href : typeof n == "string" && (o = n), o !== null && !o.startsWith("/") && Zb(o), e.call(window, n, s)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(t) {
    await this.loadPawtect(), Be(t)
  }
  async setCfLikelyAutomated(t) {
    await this.loadPawtect(), Qb(t)
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
    if (!await this.loadPawtect()) throw new Error(Lg());
    const n = navigator.webdriver,
      [s, o] = await Promise.all([Ve(), Lr().catch(u => (console.error(u), {
        bot: !1
      }))]);
    return Be(V.data.id), Hb(V.data.discordId ?? ""), Wb(s), ev(n), Xb(Ke.automatedClicks), o.bot && Yb(o.botKind ?? "unknown"), Jb(t)
  }
}

function av(r) {
  return r.bind().bind()
}
const C = class C {
  static codec(t) {
    const e = new TextEncoder().encode(this.XOR_KEY),
      n = new Uint8Array(t.length);
    for (let s = 0; s < t.length; s++) n[s] = t[s] ^ e[s % e.length];
    return n
  }
  get() {
    try {
      const t = localStorage.getItem(C.KEY);
      if (!t) return;
      const e = Uint8Array.from(atob(t), s => s.charCodeAt(0)),
        n = new TextDecoder().decode(C.codec(e));
      return JSON.parse(n)
    } catch {
      return
    }
  }
  set(t) {
    const e = new TextEncoder().encode(JSON.stringify(t)),
      n = C.codec(e);
    localStorage.setItem(C.KEY, btoa(String.fromCharCode(...n)))
  }
};
g(C, "KEY", "ui_layout_v3"), g(C, "XOR_KEY", "wplace-prefs");
let Me = C;
const z = class z {
  get() {
    try {
      const t = sessionStorage.getItem(z.KEY);
      if (!t) return;
      let e = "";
      for (let n = 0; n < t.length; n += 4) {
        const s = parseInt(t.slice(n, n + 4), 16);
        e += String.fromCharCode(s - z.SHIFT & 65535)
      }
      return JSON.parse(e)
    } catch {
      return
    }
  }
  set(t) {
    const e = JSON.stringify(t);
    let n = "";
    for (const s of e) {
      const o = s.charCodeAt(0) + z.SHIFT & 65535;
      n += o.toString(16).padStart(4, "0")
    }
    sessionStorage.setItem(z.KEY, n)
  }
};
g(z, "KEY", "nav.cursor"), g(z, "SHIFT", 13);
let $e = z;
const H = class H {
  get() {
    const t = document.cookie.match(new RegExp("(?:^|; )" + H.KEY + "=([^;]*)"));
    if (t) try {
      const [e, n] = decodeURIComponent(t[1]).split("."), s = parseInt(e, 36), o = parseInt(n, 36);
      return !Number.isFinite(s) || !Number.isFinite(o) ? void 0 : {
        userId: s,
        timestamp: o
      }
    } catch {
      return
    }
  }
  set(t) {
    const e = `${t.userId.toString(36)}.${t.timestamp.toString(36)}`;
    document.cookie = `${H.KEY}=${encodeURIComponent(e)};path=/;max-age=${H.MAX_AGE};SameSite=Lax`
  }
};
g(H, "KEY", "_pf_uid"), g(H, "MAX_AGE", 3600 * 24 * 365);
let Ge = H;
class ov {
  constructor() {
    g(this, "packed")
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
const ee = new sv;
export {
  wv as $, Y_ as A, ut as B, By as C, Fe as D, Nb as E, D as F, Sv as G, Uv as H, Lv as I, gv as J, hv as K, S as L, fv as M, _v as N, pv as O, kv as P, Cr as Q, Ib as R, Nv as S, B as T, Tt as U, Rv as V, mv as W, ic as X, kb as Y, xv as Z, jv as _, yv as a, Mb as a0, kt as a1, Tv as a2, Ov as a3, Lg as a4, zm as a5, bv as a6, Ev as a7, Dv as a8, Av as a9, Al as aa, tt as ab, q as b, Iv as c, Ue as d, a as e, i as f, Ke as g, Mo as h, nl as i, Du as j, ws as k, au as l, ee as m, Uf as n, mt as o, We as p, Pv as q, wu as r, vv as s, Fb as t, V as u, ht as v, ml as w, $u as x, Jo as y, Ds as z
};