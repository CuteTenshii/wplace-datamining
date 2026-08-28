var At = Object.defineProperty;
var et = n => {
  throw TypeError(n)
};
var St = (n, e, t) => e in n ? At(n, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : n[e] = t;
var g = (n, e, t) => St(n, typeof e != "symbol" ? e + "" : e, t),
  It = (n, e, t) => e.has(n) || et("Cannot " + t);
var h = (n, e, t) => (It(n, e, "read from private field"), t ? t.call(n) : e.get(n)),
  y = (n, e, t) => e.has(n) ? et("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t);
import {
  f as Nt,
  P as ut,
  g as ze,
  h as Je
} from "./D5blgKZB.js";
import {
  e as A,
  i as E,
  h as O,
  g as Me,
  bT as Rt,
  y as xt,
  E as tt,
  u as z
} from "./D5GL_E7i.js";
import {
  m as a
} from "./XL5Wf48w.js";
const Pt = "" + new URL("../assets/pawtect_wasm_bg.8VPqYlMZ.wasm", import.meta.url).href;
var Dt = "2.0.0";
const _ = {
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
  constructor(e, t) {
    super(t), this.state = e, this.name = "BotdError", Object.setPrototypeOf(this, b.prototype)
  }
}

function qt(n, e) {
  const t = {};
  let r = {
    bot: !1
  };
  for (const s in e) {
    const o = e[s],
      c = o(n);
    let d = {
      bot: !1
    };
    typeof c == "string" ? d = {
      bot: !0,
      botKind: c
    } : c && (d = {
      bot: !0,
      botKind: _.Unknown
    }), t[s] = d, d.bot && (r = d)
  }
  return [t, r]
}
async function Ut(n) {
  const e = {},
    t = Object.keys(n);
  return await Promise.all(t.map(async r => {
    const s = n[r];
    try {
      e[r] = {
        value: await s(),
        state: 0
      }
    } catch (o) {
      o instanceof b ? e[r] = {
        state: o.state,
        error: `${o.name}: ${o.message}`
      } : e[r] = {
        state: -3,
        error: o instanceof Error ? `${o.name}: ${o.message}` : String(o)
      }
    }
  })), e
}

function Lt({
  appVersion: n
}) {
  if (n.state !== 0) return !1;
  if (/headless/i.test(n.value)) return _.HeadlessChrome;
  if (/electron/i.test(n.value)) return _.Electron;
  if (/slimerjs/i.test(n.value)) return _.SlimerJS
}

function Ue(n, e) {
  return n.indexOf(e) !== -1
}

function U(n, e) {
  return n.indexOf(e) !== -1
}

function Ct(n, e) {
  if ("find" in n) return n.find(e);
  for (let t = 0; t < n.length; t++)
    if (e(n[t], t, n)) return n[t]
}

function rt(n) {
  return Object.getOwnPropertyNames(n)
}

function Ye(n, ...e) {
  for (const t of e)
    if (typeof t == "string") {
      if (Ue(n, t)) return !0
    } else if (Ct(n, s => t.test(s)) != null) return !0;
  return !1
}

function V(n) {
  return n.reduce((e, t) => e + (t ? 1 : 0), 0)
}

function kt({
  documentElementKeys: n
}) {
  if (n.state !== 0) return !1;
  if (Ye(n.value, "selenium", "webdriver", "driver")) return _.Selenium
}

function Mt({
  errorTrace: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return _.PhantomJS
}

function Kt({
  evalLength: n,
  browserKind: e,
  browserEngineKind: t
}) {
  if (n.state !== 0 || e.state !== 0 || t.state !== 0) return;
  const r = n.value;
  return t.value === "unknown" ? !1 : r === 37 && !Ue(["webkit", "gecko"], t.value) || r === 39 && !Ue(["internet_explorer"], e.value) || r === 33 && !Ue(["chromium"], t.value)
}

function Bt({
  functionBind: n
}) {
  if (n.state === -2) return _.PhantomJS
}

function Ft({
  languages: n
}) {
  if (n.state === 0 && n.value.length === 0) return _.HeadlessChrome
}

function jt({
  mimeTypesConsistent: n
}) {
  if (n.state === 0 && !n.value) return _.Unknown
}

function $t({
  notificationPermissions: n,
  browserKind: e
}) {
  if (e.state !== 0 || e.value !== "chrome") return !1;
  if (n.state === 0 && n.value) return _.HeadlessChrome
}

function Ht({
  pluginsArray: n
}) {
  if (n.state === 0 && !n.value) return _.HeadlessChrome
}

function Gt({
  pluginsLength: n,
  android: e,
  browserKind: t,
  browserEngineKind: r
}) {
  if (!(n.state !== 0 || e.state !== 0 || t.state !== 0 || r.state !== 0) && !(t.value !== "chrome" || e.value || r.value !== "chromium") && n.value === 0) return _.HeadlessChrome
}

function Jt({
  process: n
}) {
  var e;
  if (n.state !== 0) return !1;
  if (n.value.type === "renderer" || ((e = n.value.versions) === null || e === void 0 ? void 0 : e.electron) != null) return _.Electron
}

function Yt({
  productSub: n,
  browserKind: e
}) {
  if (n.state !== 0 || e.state !== 0) return !1;
  if ((e.value === "chrome" || e.value === "safari" || e.value === "opera" || e.value === "wechat") && n.value !== "20030107") return _.Unknown
}

function Wt({
  userAgent: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return _.PhantomJS;
  if (/Headless/i.test(n.value)) return _.HeadlessChrome;
  if (/Electron/i.test(n.value)) return _.Electron;
  if (/slimerjs/i.test(n.value)) return _.SlimerJS
}

function Vt({
  webDriver: n
}) {
  if (n.state === 0 && n.value) return _.HeadlessChrome
}

function Qt({
  webGL: n
}) {
  if (n.state === 0) {
    const {
      vendor: e,
      renderer: t
    } = n.value;
    if (e == "Brian Paul" && t == "Mesa OffScreen") return _.HeadlessChrome
  }
}

function Xt({
  windowExternal: n
}) {
  if (n.state !== 0) return !1;
  if (/Sequentum/i.test(n.value)) return _.Sequentum
}

function zt({
  windowSize: n,
  documentFocus: e
}) {
  if (n.state !== 0 || e.state !== 0) return !1;
  const {
    outerWidth: t,
    outerHeight: r
  } = n.value;
  if (e.value && t === 0 && r === 0) return _.HeadlessChrome
}

function Zt({
  distinctiveProps: n
}) {
  if (n.state !== 0) return !1;
  const e = n.value;
  let t;
  for (t in e)
    if (e[t]) return t
}
const er = {
  detectAppVersion: Lt,
  detectDocumentAttributes: kt,
  detectErrorTrace: Mt,
  detectEvalLengthInconsistency: Kt,
  detectFunctionBind: Bt,
  detectLanguagesLengthInconsistency: Ft,
  detectNotificationPermissions: $t,
  detectPluginsArray: Ht,
  detectPluginsLengthInconsistency: Gt,
  detectProcess: Jt,
  detectUserAgent: Wt,
  detectWebDriver: Vt,
  detectWebGL: Qt,
  detectWindowExternal: Xt,
  detectWindowSize: zt,
  detectMimeTypesConsistent: jt,
  detectProductSub: Yt,
  detectDistinctiveProperties: Zt
};

function tr() {
  const n = navigator.appVersion;
  if (n == null) throw new b(-1, "navigator.appVersion is undefined");
  return n
}

function rr() {
  if (document.documentElement === void 0) throw new b(-1, "document.documentElement is undefined");
  const {
    documentElement: n
  } = document;
  if (typeof n.getAttributeNames != "function") throw new b(-2, "document.documentElement.getAttributeNames is not a function");
  return n.getAttributeNames()
}

function nr() {
  try {
    null[0]()
  } catch (n) {
    if (n instanceof Error && n.stack != null) return n.stack.toString()
  }
  throw new b(-3, "errorTrace signal unexpected behaviour")
}

function sr() {
  return eval.toString().length
}

function ar() {
  if (Function.prototype.bind === void 0) throw new b(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function Ze() {
  var n, e;
  const t = window,
    r = navigator;
  return V(["webkitPersistentStorage" in r, "webkitTemporaryStorage" in r, r.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in t, "BatteryManager" in t, "webkitMediaStream" in t, "webkitSpeechGrammar" in t]) >= 5 ? "chromium" : V(["ApplePayError" in t, "CSSPrimitiveValue" in t, "Counter" in t, r.vendor.indexOf("Apple") === 0, "getStorageUpdates" in r, "WebKitMediaKeys" in t]) >= 4 ? "webkit" : V(["buildID" in navigator, "MozAppearance" in ((e = (n = document.documentElement) === null || n === void 0 ? void 0 : n.style) !== null && e !== void 0 ? e : {}), "onmozfullscreenchange" in t, "mozInnerScreenX" in t, "CSSMozDocumentRule" in t, "CanvasCaptureMediaStream" in t]) >= 4 ? "gecko" : "unknown"
}

function ir() {
  var n;
  const e = (n = navigator.userAgent) === null || n === void 0 ? void 0 : n.toLowerCase();
  return U(e, "edg/") ? "edge" : U(e, "trident") || U(e, "msie") ? "internet_explorer" : U(e, "wechat") ? "wechat" : U(e, "firefox") ? "firefox" : U(e, "opera") || U(e, "opr") ? "opera" : U(e, "chrome") ? "chrome" : U(e, "safari") ? "safari" : "unknown"
}

function or() {
  const n = Ze(),
    e = n === "chromium",
    t = n === "gecko",
    r = window,
    s = navigator,
    o = "connection";
  return e ? V([!("SharedWorker" in r), s[o] && "ontypechange" in s[o], !("sinkId" in new Audio)]) >= 2 : t ? V(["onorientationchange" in r, "orientation" in r, /android/i.test(s.appVersion)]) >= 2 : !1
}

function cr() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function dr() {
  const n = window;
  return V([!("MediaSettingsRange" in n), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3
}

function lr() {
  const n = navigator,
    e = [],
    t = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
  if (t !== void 0 && e.push([t]), Array.isArray(n.languages)) Ze() === "chromium" && dr() || e.push(n.languages);
  else if (typeof n.languages == "string") {
    const r = n.languages;
    r && e.push(r.split(","))
  }
  return e
}

function ur() {
  if (navigator.mimeTypes === void 0) throw new b(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: n
  } = navigator;
  let e = Object.getPrototypeOf(n) === MimeTypeArray.prototype;
  for (let t = 0; t < n.length; t++) e && (e = Object.getPrototypeOf(n[t]) === MimeType.prototype);
  return e
}
async function fr() {
  if (window.Notification === void 0) throw new b(-1, "window.Notification is undefined");
  if (navigator.permissions === void 0) throw new b(-1, "navigator.permissions is undefined");
  const {
    permissions: n
  } = navigator;
  if (typeof n.query != "function") throw new b(-2, "navigator.permissions.query is not a function");
  try {
    const e = await n.query({
      name: "notifications"
    });
    return window.Notification.permission === "denied" && e.state === "prompt"
  } catch {
    throw new b(-3, "notificationPermissions signal unexpected behaviour")
  }
}

function hr() {
  if (navigator.plugins === void 0) throw new b(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new b(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function _r() {
  if (navigator.plugins === void 0) throw new b(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new b(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function wr() {
  const {
    process: n
  } = window, e = "window.process is";
  if (n === void 0) throw new b(-1, `${e} undefined`);
  if (n && typeof n != "object") throw new b(-3, `${e} not an object`);
  return n
}

function mr() {
  const {
    productSub: n
  } = navigator;
  if (n === void 0) throw new b(-1, "navigator.productSub is undefined");
  return n
}

function gr() {
  if (navigator.connection === void 0) throw new b(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new b(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function pr() {
  return navigator.userAgent
}

function yr() {
  if (navigator.webdriver == null) throw new b(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function Er() {
  const n = document.createElement("canvas");
  if (typeof n.getContext != "function") throw new b(-2, "HTMLCanvasElement.getContext is not a function");
  const e = n.getContext("webgl");
  if (e === null) throw new b(-4, "WebGLRenderingContext is null");
  if (typeof e.getParameter != "function") throw new b(-2, "WebGLRenderingContext.getParameter is not a function");
  const t = e.getParameter(e.VENDOR),
    r = e.getParameter(e.RENDERER);
  return {
    vendor: t,
    renderer: r
  }
}

function br() {
  if (window.external === void 0) throw new b(-1, "window.external is undefined");
  const {
    external: n
  } = window;
  if (typeof n.toString != "function") throw new b(-2, "window.external.toString is not a function");
  return n.toString()
}

function Or() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function vr() {
  const n = {
    [_.Awesomium]: {
      window: ["awesomium"]
    },
    [_.Cef]: {
      window: ["RunPerfTest"]
    },
    [_.CefSharp]: {
      window: ["CefSharp"]
    },
    [_.CoachJS]: {
      window: ["emit"]
    },
    [_.FMiner]: {
      window: ["fmget_targets"]
    },
    [_.Geb]: {
      window: ["geb"]
    },
    [_.NightmareJS]: {
      window: ["__nightmare", "nightmare"]
    },
    [_.Phantomas]: {
      window: ["__phantomas"]
    },
    [_.PhantomJS]: {
      window: ["callPhantom", "_phantom"]
    },
    [_.Rhino]: {
      window: ["spawn"]
    },
    [_.Selenium]: {
      window: ["_Selenium_IDE_Recorder", "_selenium", "calledSelenium", /^([a-z]){3}_.*_(Array|Promise|Symbol)$/],
      document: ["__selenium_evaluate", "selenium-evaluate", "__selenium_unwrapped"]
    },
    [_.WebDriverIO]: {
      window: ["wdioElectron"]
    },
    [_.WebDriver]: {
      window: ["webdriver", "__webdriverFunc", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "_WEBDRIVER_ELEM_CACHE", "ChromeDriverw"],
      document: ["__webdriver_script_fn", "__driver_evaluate", "__webdriver_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__fxdriver_unwrapped", "__webdriver_script_fn", "__webdriver_script_func", "__webdriver_script_function", "$cdc_asdjflasutopfhvcZLmcf", "$cdc_asdjflasutopfhvcZLmcfl_", "$chrome_asyncScriptInfo", "__$webdriverAsyncExecutor"]
    },
    [_.HeadlessChrome]: {
      window: ["domAutomation", "domAutomationController"]
    }
  };
  let e;
  const t = {},
    r = rt(window);
  let s = [];
  window.document !== void 0 && (s = rt(window.document));
  for (e in n) {
    const o = n[e];
    if (o !== void 0) {
      const c = o.window === void 0 ? !1 : Ye(r, ...o.window),
        d = o.document === void 0 || !s.length ? !1 : Ye(s, ...o.document);
      t[e] = c || d
    }
  }
  return t
}
const Tr = {
  android: or,
  browserKind: ir,
  browserEngineKind: Ze,
  documentFocus: cr,
  userAgent: pr,
  appVersion: tr,
  rtt: gr,
  windowSize: Or,
  pluginsLength: _r,
  pluginsArray: hr,
  errorTrace: nr,
  productSub: mr,
  windowExternal: br,
  mimeTypesConsistent: ur,
  evalLength: sr,
  webGL: Er,
  webDriver: yr,
  languages: lr,
  notificationPermissions: fr,
  documentElementKeys: rr,
  functionBind: ar,
  process: wr,
  distinctiveProps: vr
};
class Ar {
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
    const [e, t] = qt(this.components, er);
    return this.detections = e, t
  }
  async collect() {
    return this.components = await Ut(Tr), this.components
  }
}

function Sr() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const n = new XMLHttpRequest;
    n.open("get", `https://m1.openfpcdn.io/botd/v${Dt}/npm-monitoring`, !0), n.send()
  } catch (n) {
    console.error(n)
  }
}
async function Ir({
  monitoring: n = !0
} = {}) {
  n && Sr();
  const e = new Ar;
  return await e.collect(), e
}
let He = null;
async function Nr() {
  return await Rr() ? {
    bot: !1
  } : (await xr()).detect()
}
async function Rr() {
  var t;
  const n = navigator;
  if (!((t = n.brave) != null && t.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(n.userAgent)) return !1;
  try {
    return await n.brave.isBrave()
  } catch {
    return !1
  }
}

function xr() {
  return He || (He = Ir({
    monitoring: !1
  })), He
}
const nt = "theme";
var ne, se, ae, ie, oe, ce, de, le, ue, fe, he, _e, we;
class Pr {
  constructor() {
    y(this, ne, A(!1));
    y(this, se, A(!1));
    y(this, ae, A(!1));
    y(this, ie, A(!1));
    y(this, oe, A(!1));
    y(this, ce, A(0));
    y(this, de, A(!1));
    y(this, le, A(Me(Dr())));
    y(this, ue, A(null));
    y(this, fe, A(!1));
    y(this, he, A("custom-winter"));
    y(this, _e, A(Me(Date.now())));
    y(this, we, A(void 0));
    setInterval(() => {
      O(h(this, _e), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(nt), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return E(h(this, ne))
  }
  set dropletsDialogOpen(e) {
    O(h(this, ne), e, !0)
  }
  get prismDialogOpen() {
    return E(h(this, se))
  }
  set prismDialogOpen(e) {
    O(h(this, se), e, !0)
  }
  get accountConflictDialogOpen() {
    return E(h(this, ae))
  }
  set accountConflictDialogOpen(e) {
    O(h(this, ae), e, !0)
  }
  get pendingHistoryDialogOpen() {
    return E(h(this, ie))
  }
  set pendingHistoryDialogOpen(e) {
    O(h(this, ie), e, !0)
  }
  get storeDialogOpen() {
    return E(h(this, oe))
  }
  set storeDialogOpen(e) {
    O(h(this, oe), e, !0)
  }
  get storeTabIndex() {
    return E(h(this, ce))
  }
  set storeTabIndex(e) {
    O(h(this, ce), e, !0)
  }
  get muted() {
    return E(h(this, de))
  }
  set muted(e) {
    O(h(this, de), e, !0)
  }
  get language() {
    return E(h(this, le))
  }
  set language(e) {
    O(h(this, le), e, !0)
  }
  get map() {
    return E(h(this, ue))
  }
  set map(e) {
    O(h(this, ue), e)
  }
  get automatedClicks() {
    return E(h(this, fe))
  }
  set automatedClicks(e) {
    O(h(this, fe), e, !0)
  }
  get theme() {
    return E(h(this, he))
  }
  set theme(e) {
    O(h(this, he), e, !0), localStorage.setItem(nt, e), document.documentElement.setAttribute("data-theme", e)
  }
  get now() {
    return E(h(this, _e))
  }
  get captcha() {
    return qr ? E(h(this, we)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(e) {
    O(h(this, we), e, !0)
  }
}
ne = new WeakMap, se = new WeakMap, ae = new WeakMap, ie = new WeakMap, oe = new WeakMap, ce = new WeakMap, de = new WeakMap, le = new WeakMap, ue = new WeakMap, fe = new WeakMap, he = new WeakMap, _e = new WeakMap, we = new WeakMap;
const We = new Pr;

function Dr() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(e => e.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const qr = Nt.toLowerCase() !== "false",
  Ur = `
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
async function Lr() {
  try {
    const n = await fetch(`${ut}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!n.ok) return null;
    const e = await n.json(),
      t = await Cr(e.prefix, e.difficulty);
    return t ? {
      ...e,
      nonce: t
    } : null
  } catch {
    return null
  }
}
async function Cr(n, e) {
  return new Promise(t => {
    const r = new Blob([Ur], {
        type: "application/javascript"
      }),
      s = URL.createObjectURL(r),
      o = new Worker(s),
      c = setTimeout(() => {
        o.terminate(), URL.revokeObjectURL(s), t(null)
      }, 12e4);
    o.onmessage = d => {
      clearTimeout(c), o.terminate(), URL.revokeObjectURL(s), d.data.error ? t(null) : t(d.data.nonce)
    }, o.onerror = () => {
      clearTimeout(c), o.terminate(), URL.revokeObjectURL(s), t(null)
    }, o.postMessage({
      prefix: n,
      difficulty: e
    })
  })
}
const ft = 3;
var me, ge;
class kr {
  constructor() {
    y(this, me, A(null));
    y(this, ge, A(0))
  }
  get current() {
    return E(h(this, me))
  }
  set current(e) {
    O(h(this, me), e, !0)
  }
  get errorCount() {
    return E(h(this, ge))
  }
  set errorCount(e) {
    O(h(this, ge), e, !0)
  }
}
me = new WeakMap, ge = new WeakMap;
const R = new kr;
async function te(n) {
  if (n === 1) return Mr();
  if (n === 2) {
    const e = await ht();
    return e ? st("turnstile", e) : !1
  }
  if (n === 3) {
    const e = await Kr();
    return e ? st("hcaptcha", e) : !1
  }
  return n === 4 ? Br() : !1
}
async function Mr() {
  for (let n = 0; n < ft; n++) try {
    const e = await Lr();
    if (!e) continue;
    return await F.verifyChallenge({
      type: "pow",
      challengeId: e.challengeId,
      nonce: e.nonce
    }), !0
  } catch {}
  return !1
}
async function st(n, e) {
  try {
    const t = await F.postCaptchaSession({
      provider: n,
      token: e
    });
    return await F.verifyChallenge({
      type: "captcha",
      sessionId: t.sessionId
    }), !0
  } catch {
    return !1
  }
}
const Q = {};

function ht() {
  return _t(2)
}

function Kr() {
  return _t(3)
}

function _t(n) {
  const e = Q[n];
  if (e) return e;
  const t = new Promise(r => {
    R.errorCount = 0, R.current = {
      tier: n,
      resolve: s => {
        delete Q[n], r(s)
      }
    }
  });
  return Q[n] = t, t
}

function Br() {
  const n = Q[4];
  if (n) return n;
  const e = new Promise(t => {
    R.errorCount = 0, R.current = {
      tier: 4,
      resolve: r => {
        delete Q[4], t(r)
      }
    }
  });
  return Q[4] = e, e
}

function cs(n) {
  const e = R.current;
  !e || e.tier === 4 || (e.resolve(n), R.current = null)
}

function ds() {
  const n = R.current;
  !n || n.tier === 4 || (R.errorCount += 1, R.errorCount >= ft && (n.resolve(void 0), R.current = null))
}

function ls() {
  const n = R.current;
  !n || n.tier !== 4 || (n.resolve(!0), R.current = null)
}

function us() {
  const n = R.current;
  n && (n.tier === 4 ? n.resolve(!1) : n.resolve(void 0), R.current = null)
}
var i = (n => (n[n.CONTINUE = 100] = "CONTINUE", n[n.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", n[n.PROCESSING = 102] = "PROCESSING", n[n.EARLY_HINTS = 103] = "EARLY_HINTS", n[n.OK = 200] = "OK", n[n.CREATED = 201] = "CREATED", n[n.ACCEPTED = 202] = "ACCEPTED", n[n.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", n[n.NO_CONTENT = 204] = "NO_CONTENT", n[n.RESET_CONTENT = 205] = "RESET_CONTENT", n[n.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", n[n.MULTI_STATUS = 207] = "MULTI_STATUS", n[n.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", n[n.IM_USED = 226] = "IM_USED", n[n.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", n[n.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", n[n.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", n[n.FOUND = 302] = "FOUND", n[n.SEE_OTHER = 303] = "SEE_OTHER", n[n.NOT_MODIFIED = 304] = "NOT_MODIFIED", n[n.USE_PROXY = 305] = "USE_PROXY", n[n.SWITCH_PROXY = 306] = "SWITCH_PROXY", n[n.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", n[n.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", n[n.BAD_REQUEST = 400] = "BAD_REQUEST", n[n.UNAUTHORIZED = 401] = "UNAUTHORIZED", n[n.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", n[n.FORBIDDEN = 403] = "FORBIDDEN", n[n.NOT_FOUND = 404] = "NOT_FOUND", n[n.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", n[n.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", n[n.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", n[n.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", n[n.CONFLICT = 409] = "CONFLICT", n[n.GONE = 410] = "GONE", n[n.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", n[n.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", n[n.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", n[n.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", n[n.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", n[n.URI_TOO_LONG = 414] = "URI_TOO_LONG", n[n.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", n[n.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", n[n.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", n[n.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", n[n.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", n[n.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", n[n.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", n[n.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", n[n.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", n[n.LOCKED = 423] = "LOCKED", n[n.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", n[n.TOO_EARLY = 425] = "TOO_EARLY", n[n.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", n[n.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", n[n.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", n[n.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", n[n.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", n[n.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", n[n.BAD_GATEWAY = 502] = "BAD_GATEWAY", n[n.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", n[n.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", n[n.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", n[n.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", n[n.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", n[n.LOOP_DETECTED = 508] = "LOOP_DETECTED", n[n.NOT_EXTENDED = 510] = "NOT_EXTENDED", n[n.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", n[n.AWS_ELB_000 = 0] = "AWS_ELB_000", n[n.THIS_IS_FINE = 218] = "THIS_IS_FINE", n[n.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", n[n.METHOD_FAILURE = 420] = "METHOD_FAILURE", n[n.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", n[n.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", n[n.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", n[n.NO_RESPONSE = 444] = "NO_RESPONSE", n[n.RETRY_WITH = 449] = "RETRY_WITH", n[n.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", n[n.REDIRECT_IIS = 451] = "REDIRECT_IIS", n[n.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", n[n.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", n[n.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", n[n.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", n[n.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", n[n.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", n[n.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", n[n.INVALID_TOKEN = 498] = "INVALID_TOKEN", n[n.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", n[n.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", n[n.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", n[n.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", n[n.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", n[n.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", n[n.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", n[n.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", n[n.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", n[n.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", n[n.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", n[n.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", n[n.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", n[n.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", n[n.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", n[n.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", n[n.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", n[n.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", n[n.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", n[n.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", n[n.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", n[n.REQUEST_DENIED = 999] = "REQUEST_DENIED", n))(i || {});
class Z extends Error {}

function Fr(n, e) {
  return (e == null ? void 0 : e.aborted) === !0 || typeof DOMException < "u" && n instanceof DOMException && n.name === "AbortError"
}
var pe, ye;
class jr {
  constructor(e) {
    y(this, pe, A(!0));
    y(this, ye, A(null));
    this.url = e
  }
  get online() {
    return E(h(this, pe))
  }
  set online(e) {
    O(h(this, pe), e, !0)
  }
  get serverTimeOffsetMs() {
    return E(h(this, ye))
  }
  set serverTimeOffsetMs(e) {
    O(h(this, ye), e, !0)
  }
  hasServerTimeEstimate() {
    return this.serverTimeOffsetMs !== null
  }
  getEstimatedServerNowMs() {
    const e = Date.now();
    return this.serverTimeOffsetMs === null ? e - 6e4 : e + this.serverTimeOffsetMs
  }
  clampWaybackTimestamp(e) {
    if (!Number.isFinite(e)) return 0;
    const t = Math.trunc(e);
    if (t <= 0) return 0;
    const r = Math.trunc(this.getEstimatedServerNowMs());
    return t > r ? r : t
  }
  updateServerTimeEstimate(e) {
    const t = e.headers.get("date");
    if (!t) return;
    const r = new Date(t).getTime();
    Number.isFinite(r) && (this.serverTimeOffsetMs = r - Date.now())
  }
  async verifyAnticheat(e) {
    if ((await this.request("/anticheat/verify", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          sealedResults: e.base64()
        })
      })).status !== i.OK) throw new Error(a.unexpected_server_error())
  }
  async guardedFetch(e, t) {
    try {
      const r = await fetch(`${this.url}${e}`, t);
      return this.online = !0, this.updateServerTimeEstimate(r), r
    } catch (r) {
      throw Fr(r, t == null ? void 0 : t.signal) ? r : (console.error("Fetch error:", r), this.online = !1, new Error(a.cant_reach_the_server()))
    }
  }
  async request(e, t) {
    var c;
    t = {
      credentials: "include",
      ...t
    };
    let r = await this.guardedFetch(e, t);
    if (r.status === i.FORBIDDEN && r.headers.get("x-block-reason") === "tor") throw new Error(a.tor_blocked());
    if (r.status === i.FORBIDDEN && r.headers.get("x-block-reason") === "integrity") throw new Error(a.request_integrity_blocked());
    const s = ((c = r.headers.get("cf-mitigated")) == null ? void 0 : c.toLowerCase()) === "challenge";
    if (r.status === 403 && s) {
      if (j.setCfLikelyAutomated(!0), !await ht()) throw new Error(a.challenge_verification_not_completed());
      r = await this.guardedFetch(e, t)
    }
    if ((t == null ? void 0 : t.throwOnStatus) ?? !0) {
      if (r.status === i.TOO_MANY_REQUESTS) throw new Z(a.you_or_someone_in_your_network_is_making_a_lot_of_requests_to_the_server());
      if (r.status === i.REQUEST_TIMEOUT) throw new Error(a.request_timeout());
      if (r.status === i.SERVICE_UNAVAILABLE) throw new Error(a.service_unavailable())
    }
    return r
  }
}
pe = new WeakMap, ye = new WeakMap;
class l extends Error {
  constructor(e, t) {
    super(e), this.message = e, this.status = t
  }
}
class fs extends Error {}

function $r(n) {
  return class extends n {
    async me() {
      const e = await this.request("/me", {
        credentials: "include",
        throwOnStatus: !1
      });
      if (e.status === i.OK) return await e.json();
      if (e.status !== i.UNAUTHORIZED) throw new l(a.unexpected_server_error(), e.status)
    }
    async meEmail() {
      const e = await this.request("/me/email", {
        credentials: "include"
      });
      if (e.status === i.OK) return (await e.json()).email
    }
    async logout() {
      const e = await this.request("/auth/logout", {
        method: "POST",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new Error(await e.text());
      return await e.json()
    }
    async getOtpCooldown() {
      const e = await this.request("/anticheat/otp/cooldown", {
        credentials: "include"
      });
      if (e.status !== i.OK) throw new Error(a.unexpected_server_error());
      return await e.json()
    }
    async sendOtp(e) {
      const t = await this.request("/anticheat/otp/send", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phone: e
        }),
        throwOnStatus: !1
      });
      if (t.status === i.BAD_REQUEST) throw new Error(a.invalid_phone_number());
      if (t.status === i.CONFLICT) throw new Error(a.phone_already_used());
      if (t.status === i.FORBIDDEN) throw new Error(a.not_allowed_to_verify());
      if (t.status === i.TOO_MANY_REQUESTS) throw new Error(a.too_many_attempts());
      if (t.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(a.phone_region_not_supported());
      if (t.status === i.LOCKED) throw new Error(a.unsubscribed_from_sms());
      if (t.status === i.UNPROCESSABLE_ENTITY) throw new Error(a.phone_not_supported());
      if (t.status === i.NOT_ACCEPTABLE) throw new Error(a.vpn_not_allowed());
      if (t.status === i.PRECONDITION_FAILED) throw new Error(a.country_mismatch());
      if (t.status !== i.OK) throw new Error(a.unexpected_server_error());
      return await t.json()
    }
    async verifyChallenge(e) {
      let t;
      switch (e.type) {
        case "pow":
          t = {
            code: e.challengeId,
            nonce: e.nonce
          };
          break;
        case "captcha":
          t = {
            code: e.sessionId
          };
          break;
        case "otp":
          t = {
            code: e.code
          }
      }
      const r = await this.request("/anticheat/challenge/verify", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t),
        headers: {
          "x-fp": await ze()
        }
      });
      if (e.type === "otp") {
        if (r.status === i.GONE) throw new Error(a.expired_code());
        if (r.status === i.BAD_REQUEST) throw new Error(a.invalid_code());
        if (r.status === i.TOO_MANY_REQUESTS) throw new Error(a.too_many_attempts());
        if (r.status !== i.OK) throw new Error(a.unexpected_server_error())
      } else {
        if (r.status === i.BAD_REQUEST) throw new Error(a.invalid_challenge_response());
        if (r.status !== i.OK) throw new Error(a.unexpected_server_error())
      }
    }
    async updateMe(e) {
      const t = await this.request("/me/update", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(e)
      });
      if (t.status === i.BAD_REQUEST) {
        const r = await t.json(),
          s = (r == null ? void 0 : r.error) ?? "";
        if (s === "invalid_name") throw new Error(a.invalid_name());
        if (s === "invalid_discord") throw new Error(a.invalid_discord());
        if (typeof s == "string" && s.startsWith("name_change_cooldown:")) {
          const o = parseInt(s.split(":")[1] ?? "0", 10);
          throw new Error(a.name_change_cooldown_days({
            days: o
          }))
        }
        throw new Error(r == null ? void 0 : r.error)
      } else if (t.status !== i.OK) throw new Error(a.unexpected_server_error())
    }
    async deleteMe(e) {
      const t = await this.request("/me", {
        method: "DELETE",
        credentials: "include",
        body: JSON.stringify({
          confirmText: e
        })
      });
      if (t.status === i.BAD_REQUEST) throw new Error(a.typed_username_does_not_match());
      if (t.status !== i.OK) throw new Error(a.unexpected_server_error())
    }
    async favoriteLocation(e) {
      const t = await this.request("/favorite-location", {
        method: "POST",
        body: JSON.stringify({
          latitude: e[0],
          longitude: e[1]
        }),
        credentials: "include"
      });
      if (t.status === i.FORBIDDEN) throw new Error(a.operation_not_allowed_maybe_you_have_too_many_favorite_locations());
      if (t.status !== i.OK) throw new Error(a.unexpected_server_error())
    }
    async deleteFavoriteLocation(e) {
      if ((await this.request("/favorite-location/delete", {
          method: "POST",
          body: JSON.stringify({
            id: e
          }),
          credentials: "include"
        })).status !== i.OK) throw new Error(a.unexpected_server_error())
    }
    async updateFavoriteLocation(e, t) {
      const r = await this.request("/favorite-location/update", {
        method: "POST",
        body: JSON.stringify({
          id: e,
          name: t
        }),
        credentials: "include"
      });
      if (r.status === i.BAD_REQUEST) throw new Error(a.location_name_is_too_big());
      if (r.status !== i.OK) throw new Error(a.unexpected_server_error())
    }
    async getMyProfilePictures() {
      const e = await this.request("/me/profile-pictures", {
        credentials: "include"
      });
      if (e.status !== i.OK) throw new Error(a.unexpected_server_error());
      return e.json()
    }
    async changeProfilePicture(e) {
      if ((await this.request("/me/profile-picture/change", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            pictureId: e
          })
        })).status !== i.OK) throw new Error(a.unexpected_server_error())
    }
    async unlinkDiscord() {
      const e = await this.request("/discord/unlink", {
        method: "POST",
        credentials: "include"
      });
      if (e.status !== i.NO_CONTENT) throw new l(a.unexpected_server_error(), e.status)
    }
    async deleteSessions() {
      const e = await this.request("/me/sessions", {
        method: "DELETE",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status)
    }
    async deleteAllUserSessions(e) {
      const t = await this.request(`/staff/dashboard/users/${e}/sessions`, {
        method: "DELETE",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status)
    }
    async getMySuspensionDetails() {
      const e = await this.request("/me/suspension", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      const t = await e.json();
      return !(t != null && t.active) || !Array.isArray(t == null ? void 0 : t.punishments) ? null : {
        punishments: t.punishments.map(s => ({
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
      const e = await this.request("/me/pixels-painted-today", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      const t = await e.json();
      return (t == null ? void 0 : t.paintedToday) ?? 0
    }
    async accountConflict() {
      const e = await this.request("/me/account-conflict", {
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      return await e.json()
    }
    async resolveAccountConflict(e) {
      const t = await this.request("/me/account-conflict/resolve", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          keepUserId: e
        })
      });
      switch (t.status) {
        case i.OK:
          return (await t.json()).keptUserId;
        case i.CONFLICT:
          throw (await t.json()).error === "conflict_blocked" ? new Error(a.duplicate_account_blocked()) : new Error(a.duplicate_account_already_resolved());
        default:
          throw new l(a.unexpected_server_error(), t.status)
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

function Hr(n) {
  return class extends n {
    async health() {
      return (await this.request("/health")).json()
    }
    async postAdjustUserDroplets(e, t) {
      const r = await this.request("/staff/dashboard/users/adjust-user-droplets", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: e,
          delta: t
        })
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return (await r.json()).droplets
    }
    async postAdjustUserPrism(e, t) {
      const r = await this.request("/staff/dashboard/users/adjust-user-prism", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: e,
          delta: t
        })
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return (await r.json()).prism
    }
    async postAdminRenameUser(e, t) {
      const r = await this.request("/staff/dashboard/users/rename", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: e,
          newName: t
        })
      });
      if (r.status === i.BAD_REQUEST) {
        const s = await r.json(),
          o = (s == null ? void 0 : s.error) ?? "";
        throw o === "invalid_name" ? new l(a.invalid_name(), i.BAD_REQUEST) : new l(typeof o == "string" && o ? o : a.unexpected_server_error(), i.BAD_REQUEST)
      }
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status)
    }
    async postAdminChangeUserEmail(e, t) {
      const r = await this.request("/staff/dashboard/users/email", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: e,
          email: t
        })
      });
      if (r.status === i.BAD_REQUEST) {
        const s = await r.json(),
          o = (s == null ? void 0 : s.error) ?? "";
        throw o === "email_required" || o === "invalid_email" ? new l(a.enter_valid_email_address(), i.BAD_REQUEST) : new l(typeof o == "string" && o ? o : a.unexpected_server_error(), i.BAD_REQUEST)
      }
      if (r.status === i.CONFLICT) {
        const s = await r.json();
        if (((s == null ? void 0 : s.error) ?? "") === "email_already_in_use") {
          const c = new l(typeof(s == null ? void 0 : s.userId) == "number" ? a.email_already_in_use_by_user({
            userId: s.userId
          }) : a.email_already_in_use(), i.CONFLICT);
          throw typeof(s == null ? void 0 : s.userId) == "number" && (c.userId = s.userId), c
        }
        throw new l(a.unexpected_server_error(), i.CONFLICT)
      }
      if (r.status === i.NOT_FOUND) throw new l("User not found.", i.NOT_FOUND);
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status)
    }
    async getAdminUserProfilePictures(e) {
      const t = await this.request(`/staff/dashboard/users/profile-pictures?userId=${e}`, {
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return t.json()
    }
    async postAdminRemoveUserPicture(e) {
      const t = await this.request("/staff/dashboard/users/remove-picture", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: e
        })
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status)
    }
    async postAdminRerollUserAvatar(e) {
      const t = await this.request("/staff/dashboard/users/reroll-avatar", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: e
        })
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return t.json()
    }
    async banUsers(e, t, r) {
      const s = await this.request("/staff/dashboard/summary/users/ban", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: e,
          reason: t,
          notes: r
        })
      });
      if (s.status !== i.OK) throw new l(a.unexpected_server_error(), s.status)
    }
    async timeoutUsers(e, t, r) {
      const s = await this.request("/staff/dashboard/summary/users/timeout", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: e,
          reason: t,
          notes: r
        })
      });
      if (s.status !== i.OK) throw new l(a.unexpected_server_error(), s.status)
    }
    async incrementUsersDroplets(e, t, r) {
      const s = await this.request("/staff/dashboard/summary/users/increment-droplet", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: e,
          delta: t,
          notes: r
        })
      });
      if (s.status !== i.OK) throw new l(a.unexpected_server_error(), s.status)
    }
    async reloadPunishmentCache() {
      const e = await this.request("/staff/dashboard/summary/reload-punishment-cache", {
        method: "POST",
        credentials: "include"
      });
      if (e.status === i.CONFLICT) throw new l(a.punishment_cache_reload_already_running(), e.status);
      if (e.status !== i.OK && e.status !== i.ACCEPTED) throw new l(a.unexpected_server_error(), e.status)
    }
    async postUnbanUsers(e, t) {
      const r = await this.request("/staff/dashboard/summary/users/unban", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: e,
          notes: t
        })
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status)
    }
    async postAnticheatUnbanUsers(e, t) {
      const r = await this.request("/staff/dashboard/anticheat/unban", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: e,
          notes: t
        })
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status)
    }
    async postAnticheatBanUsers(e, t, r) {
      const s = await this.request("/staff/dashboard/anticheat/ban", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: e,
          notes: t,
          reason: r
        })
      });
      if (s.status !== i.OK) throw new l(a.unexpected_server_error(), s.status)
    }
    async postBulkPhoneVerification(e, t) {
      const r = await this.request("/staff/dashboard/summary/users/phone-verification", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: e,
          notes: t
        })
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return await r.json()
    }
    async getAuditLogs(e) {
      const t = new URLSearchParams;
      e.query && t.set("query", e.query), e.actorUserId !== void 0 && t.set("actorUserId", String(e.actorUserId)), e.targetUserId !== void 0 && t.set("targetUserId", String(e.targetUserId)), e.targetType && t.set("targetType", e.targetType), e.targetId && t.set("targetId", e.targetId), e.action && t.set("action", e.action), e.outcome && t.set("outcome", e.outcome), e.actorRole && t.set("actorRole", e.actorRole), e.from && t.set("from", e.from), e.to && t.set("to", e.to), e.sortKey && t.set("sortKey", e.sortKey), e.sortDir && t.set("sortDir", e.sortDir), t.set("limit", String(e.limit)), t.set("offset", String(e.offset));
      const r = await this.request(`/staff/dashboard/audit-logs/see?${t.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      const s = await r.json();
      return (Array.isArray(s) ? s : []).map(o => {
        const c = o && typeof o == "object" ? o : {};
        return {
          ...c,
          actorRole: c.actorRole ?? "unknown",
          targetUserId: c.targetUserId ?? [],
          targetAvatarSeeds: c.targetAvatarSeeds ?? [],
          targetType: c.targetType ?? "user",
          targetIds: c.targetIds ?? []
        }
      })
    }
    async postUsersSuspend(e, t, r) {
      let s;
      switch (t) {
        case "dashboard":
          s = `/staff/dashboard/users/${r}`;
          break;
        case "summary":
          s = `/staff/dashboard/summary/users/${r}`;
          break;
        case "select-area":
          s = `/staff/tools/select-area/${r}`;
          break;
        case "select-pixel":
        default:
          s = `/staff/tools/select-pixel/${r}`;
          break
      }
      if ((await this.request(s, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(e)
        })).status !== i.OK) throw new Error(a.unexpected_server_error())
    }
    async postSelectAreaPhoneVerification(e, t = "") {
      const r = await this.request("/staff/tools/select-area/phone-verification", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: e,
          notes: t
        })
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return await r.json()
    }
    async postDashboardUserPhoneVerification(e, t = "") {
      const r = await this.request("/staff/dashboard/users/phone-verification", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: [e],
          notes: t
        })
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return await r.json()
    }
    async postReportUserName(e) {
      const t = await this.request("/report/user/name", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: e
        })
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status)
    }
    async postReportAllianceName(e) {
      const t = await this.request("/report/alliance/name", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          allianceId: e
        })
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return t.json()
    }
  }
}
const Gr = [{
    tileSize: 1e3,
    zoom: 11
  }],
  Jr = 4,
  Yr = 6e3,
  Wr = [{
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
  Vr = {
    needsPhoneVerification: "needs_phone_verification"
  },
  Qr = {
    Droplet: {},
    "Max. Charge": {},
    "Paint Charge": {},
    Color: {},
    Flag: {},
    "Profile Picture": {},
    FRAME: {},
    "Custom Name Font": {},
    "Custom Name Style": {},
    Prism: {}
  },
  Xr = {
    android: {
      googlePlayBilling: {
        price: 1
      },
      appName: "live.wplace.twa"
    }
  },
  zr = {
    10: {
      name: "25,000 Droplets",
      price: 500,
      priceCurrency: "fiat",
      lookupKey: "droplets_5",
      items: [{
        name: "Droplet",
        amount: 25e3
      }]
    },
    20: {
      name: "78,750 Droplets",
      price: 1500,
      priceCurrency: "fiat",
      lookupKey: "droplets_15",
      items: [{
        name: "Droplet",
        amount: 78750
      }]
    },
    30: {
      name: "165,000 Droplets",
      price: 3e3,
      priceCurrency: "fiat",
      lookupKey: "droplets_30",
      items: [{
        name: "Droplet",
        amount: 165e3
      }]
    },
    40: {
      name: "287,500 Droplets",
      price: 5e3,
      priceCurrency: "fiat",
      lookupKey: "droplets_50",
      items: [{
        name: "Droplet",
        amount: 287500
      }]
    },
    50: {
      name: "450,000 Droplets",
      price: 7500,
      priceCurrency: "fiat",
      lookupKey: "droplets_75",
      items: [{
        name: "Droplet",
        amount: 45e4
      }]
    },
    60: {
      name: "625,000 Droplets",
      price: 1e4,
      priceCurrency: "fiat",
      lookupKey: "droplets_100",
      items: [{
        name: "Droplet",
        amount: 625e3
      }]
    },
    70: {
      name: "+5 Max. Charges",
      price: 500,
      priceCurrency: "droplets",
      items: [{
        name: "Max. Charge",
        amount: 5
      }]
    },
    80: {
      name: "+30 Paint Charges",
      price: 500,
      priceCurrency: "droplets",
      items: [{
        name: "Paint Charge",
        amount: 30
      }]
    },
    100: {
      name: "Unlock Color",
      price: 2e3,
      priceCurrency: "droplets",
      items: [{
        name: "Color",
        amount: 1
      }]
    },
    110: {
      name: "Flag",
      price: 2e4,
      priceCurrency: "droplets",
      items: [{
        name: "Flag",
        amount: 1
      }]
    },
    120: {
      name: "Profile Picture",
      price: 2e4,
      priceCurrency: "droplets",
      items: [{
        name: "Profile Picture",
        amount: 1
      }]
    },
    130: {
      name: "FRAME",
      priceCurrency: "droplets",
      items: [{
        name: "FRAME",
        amount: 1
      }]
    },
    140: {
      name: "Custom Name Font",
      priceCurrency: "droplets",
      items: [{
        name: "Custom Name Font",
        amount: 1
      }]
    },
    150: {
      name: "Custom Name Style",
      priceCurrency: "droplets",
      items: [{
        name: "Custom Name Style",
        amount: 1
      }]
    },
    160: {
      name: "20 Prism",
      price: 1e3,
      priceCurrency: "fiat",
      lookupKey: "prism_10",
      items: [{
        name: "Prism",
        amount: 20
      }]
    },
    161: {
      name: "44 Prism",
      price: 2e3,
      priceCurrency: "fiat",
      lookupKey: "prism_20",
      items: [{
        name: "Prism",
        amount: 44
      }]
    },
    162: {
      name: "72 Prism",
      price: 3e3,
      priceCurrency: "fiat",
      lookupKey: "prism_30",
      items: [{
        name: "Prism",
        amount: 72
      }]
    },
    163: {
      name: "124 Prism",
      price: 5e3,
      priceCurrency: "fiat",
      lookupKey: "prism_50",
      items: [{
        name: "Prism",
        amount: 124
      }]
    },
    164: {
      name: "194 Prism",
      price: 7500,
      priceCurrency: "fiat",
      lookupKey: "prism_75",
      items: [{
        name: "Prism",
        amount: 194
      }]
    },
    165: {
      name: "270 Prism",
      price: 1e4,
      priceCurrency: "fiat",
      lookupKey: "prism_100",
      items: [{
        name: "Prism",
        amount: 270
      }]
    }
  },
  Zr = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  en = {
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
        setPrism: "staff.dashboard.users.set_prism",
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
        see: "staff.dashboard.audit_logs.see",
        events: {
          timeout: "staff.dashboard.audit_logs.events.timeout",
          ban: "staff.dashboard.audit_logs.events.ban",
          changeDroplets: "staff.dashboard.audit_logs.events.change_droplets",
          changePrism: "staff.dashboard.audit_logs.events.change_prism",
          removeTimeout: "staff.dashboard.audit_logs.events.remove_timeout",
          removeBan: "staff.dashboard.audit_logs.events.remove_ban",
          manualTimeout: "staff.dashboard.audit_logs.events.manual_timeout",
          manualBan: "staff.dashboard.audit_logs.events.manual_ban",
          manualChangeDroplets: "staff.dashboard.audit_logs.events.manual_change_droplets",
          manualRemoveBan: "staff.dashboard.audit_logs.events.manual_remove_ban",
          manualPhoneVerification: "staff.dashboard.audit_logs.events.manual_phone_verification",
          anticheatBan: "staff.dashboard.audit_logs.events.anticheat_ban",
          anticheatRemoveBan: "staff.dashboard.audit_logs.events.anticheat_remove_ban",
          deleteAllSessions: "staff.dashboard.audit_logs.events.delete_all_sessions",
          permissionsUpdate: "staff.dashboard.audit_logs.events.permissions_update",
          changeUsername: "staff.dashboard.audit_logs.events.change_username",
          banWave: "staff.dashboard.audit_logs.events.ban_wave",
          changeEmail: "staff.dashboard.audit_logs.events.change_email",
          acceptAppeal: "staff.dashboard.audit_logs.events.accept_appeal",
          denyAppeal: "staff.dashboard.audit_logs.events.deny_appeal",
          revertTicketRequest: "staff.dashboard.audit_logs.events.revert_ticket_request",
          revertTicketApprove: "staff.dashboard.audit_logs.events.revert_ticket_approve",
          revertTicketDeny: "staff.dashboard.audit_logs.events.revert_ticket_deny",
          removePicture: "staff.dashboard.audit_logs.events.remove_picture",
          rerollAvatar: "staff.dashboard.audit_logs.events.reroll_avatar",
          resolveTicket: "staff.dashboard.audit_logs.events.re_solve_ticket",
          reviewTicket: "staff.dashboard.audit_logs.events.review_ticket",
          autoReviewBanRemoveBan: "staff.dashboard.audit_logs.events.auto_review_ban_remove_ban",
          resolveAccountConflict: "staff.dashboard.audit_logs.events.resolve_account_conflict",
          allianceModeration: "staff.dashboard.audit_logs.events.alliance_moderation",
          userNoteCreated: "staff.dashboard.audit_logs.events.user_note_created",
          ticketAssigned: "staff.dashboard.audit_logs.events.ticket_assigned",
          ticketResolved: "staff.dashboard.audit_logs.events.ticket_resolved",
          appealAssigned: "staff.dashboard.audit_logs.events.appeal_assigned",
          punishmentCacheReloadRequested: "staff.dashboard.audit_logs.events.punishment_cache_reload_requested",
          canvasPixelBatchQueued: "staff.dashboard.audit_logs.events.canvas_pixel_batch_queued",
          canvasAreaReversed: "staff.dashboard.audit_logs.events.canvas_area_reversed",
          canvasAutoPaintQueued: "staff.dashboard.audit_logs.events.canvas_auto_paint_queued",
          cosmeticCreated: "staff.dashboard.audit_logs.events.cosmetic_created",
          cosmeticUpdated: "staff.dashboard.audit_logs.events.cosmetic_updated",
          cosmeticDeleted: "staff.dashboard.audit_logs.events.cosmetic_deleted",
          badgeCreated: "staff.dashboard.audit_logs.events.badge_created",
          badgeUpdated: "staff.dashboard.audit_logs.events.badge_updated",
          badgeDeleted: "staff.dashboard.audit_logs.events.badge_deleted",
          storeImageUploaded: "staff.dashboard.audit_logs.events.store_image_uploaded",
          storeImageDeleted: "staff.dashboard.audit_logs.events.store_image_deleted"
        }
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
  tn = {
    tools: {
      wayback: {
        limit: 1e4,
        hqLimit: 5e3
      }
    }
  },
  rn = {
    areaRadius: 250
  },
  nn = {
    creationCostDroplets: 25e3,
    donationDropletsPerCoin: 1e3,
    paintsPerCoin: 5e3,
    betterDescriptionCostCoins: 25,
    betterPalletCostCoins: 25,
    advancedPaintToolsCostCoins: 15,
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
    templateSpaceCostCoins: [30, 40, 50, 60, 70],
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
  sn = {
    year: 2026,
    month: 8,
    tiles: [{
      day: 17,
      x: 340,
      y: 1938
    }, {
      day: 18,
      x: 341,
      y: 1938
    }, {
      day: 19,
      x: 342,
      y: 1938
    }, {
      day: 20,
      x: 343,
      y: 1938
    }, {
      day: 21,
      x: 340,
      y: 1939
    }, {
      day: 22,
      x: 341,
      y: 1939
    }, {
      day: 23,
      x: 342,
      y: 1939
    }, {
      day: 24,
      x: 343,
      y: 1939
    }, {
      day: 25,
      x: 340,
      y: 1940
    }, {
      day: 26,
      x: 341,
      y: 1940
    }, {
      day: 27,
      x: 342,
      y: 1940
    }, {
      day: 28,
      x: 343,
      y: 1940
    }, {
      day: 29,
      x: 340,
      y: 1941
    }, {
      day: 30,
      x: 341,
      y: 1941
    }, {
      day: 31,
      x: 342,
      y: 1941
    }, {
      day: 1,
      month: 9,
      x: 343,
      y: 1941
    }],
    prizePool: {
      pixels: 1e4,
      droplets: 5e3
    },
    badgeTiers: {
      pixels: 1e3,
      multipliers: [2, 5, 10, 20]
    },
    sideBalance: {
      percent: 5,
      floor: 5
    },
    conquestPointsFloor: 2e3
  },
  $ = {
    seasons: Gr,
    regionSize: Jr,
    refreshIntervalMs: Yr,
    colors: Wr,
    errors: Vr,
    items: Qr,
    platforms: Xr,
    products: zr,
    countries: Zr,
    permissions: en,
    settings: tn,
    moderation: rn,
    alliance: nn,
    voidEvent: sn
  },
  Ke = $,
  an = $.seasons,
  wt = $.seasons.length - 1,
  hs = $.seasons[wt].zoom,
  _s = $.seasons[wt].tileSize,
  ws = $.permissions,
  mt = $.settings,
  on = $.platforms.android,
  ms = on.googlePlayBilling.price;

function gs(n) {
  return Ke.countries[n - 1]
}

function Ve(n) {
  return Ve.map.get(n)
}(n => {
  n.sharedProducts = Object.entries(Ke.products).map(([e, t]) => ({
    ...t,
    productId: e
  })).filter(e => "lookupKey" in e), n.map = cn(n.sharedProducts, e => e.lookupKey)
})(Ve || (Ve = {}));

function cn(n, e) {
  const t = new Map;
  for (const r in n) {
    const s = Reflect.get(n, r),
      o = e(s, r, n);
    t.set(o, s)
  }
  return t
}
const Be = 5e3,
  at = 4,
  C = 64,
  dn = 8;

function qe(n) {
  const e = Array.isArray(n.locations) ? n.locations.map(t => ({
    ...t,
    opacity: t.opacity ?? n.opacity,
    colorMetric: t.colorMetric ?? n.colorMetric,
    dithering: t.dithering ?? n.dithering,
    colorPaletteMode: t.colorPaletteMode ?? n.colorPaletteMode,
    pixelMode: t.pixelMode ?? n.pixelMode
  })) : [];
  return {
    ...n,
    imageRevision: n.imageRevision ?? n.updatedAt,
    thumbnailRevision: n.thumbnailRevision ?? n.imageRevision ?? n.updatedAt,
    sizeBytes: n.sizeBytes ?? 0,
    audienceRoles: Array.isArray(n.audienceRoles) ? n.audienceRoles : n.audienceRole ? [n.audienceRole] : [],
    audienceUserIds: Array.isArray(n.audienceUserIds) ? n.audienceUserIds : [],
    locations: e
  }
}

function ln(n) {
  const e = n.maxX - n.minX + 1,
    t = n.maxY - n.minY + 1;
  if (e <= 0 || t <= 0) return [];
  const r = Math.min(e, Be),
    s = Math.max(1, Math.floor(Be / r)),
    o = [];
  for (let c = n.minY; c <= n.maxY; c += s)
    for (let d = n.minX; d <= n.maxX; d += r) o.push({
      minX: d,
      minY: c,
      maxX: Math.min(n.maxX, d + r - 1),
      maxY: Math.min(n.maxY, c + s - 1)
    });
  return o
}

function un(n) {
  const e = [],
    t = Math.floor(n.minX / C),
    r = Math.floor(n.maxX / C),
    s = Math.floor(n.minY / C),
    o = Math.floor(n.maxY / C);
  for (let c = s; c <= o; c += 1)
    for (let d = t; d <= r; d += 1) e.push({
      minX: Math.max(n.minX, d * C),
      minY: Math.max(n.minY, c * C),
      maxX: Math.min(n.maxX, (d + 1) * C - 1),
      maxY: Math.min(n.maxY, (c + 1) * C - 1)
    });
  return e
}

function it(n) {
  const e = (n == null ? void 0 : n.role) ?? (n == null ? void 0 : n.alliance_role);
  return e === "mod" || e === "admin" || e === "leader" ? e : "member"
}

function fn(n) {
  return class extends n {
    async getAlliance() {
      const e = await this.request("/alliance", {
        credentials: "include"
      });
      if (e.status === i.OK) return e.json();
      if (e.status === i.NOT_FOUND) return;
      throw new Error(a.unexpected_server_error())
    }
    async createAlliance(e) {
      const t = await this.request("/alliance", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          name: e
        })
      });
      if (t.status === i.OK) return t.json();
      if (t.status === i.BAD_REQUEST) {
        const r = await t.json();
        throw r.error === "max_characters" ? new l(a.alliance_name_exceeded_the_maximum_number_of_characters(), t.status) : r.error === "name_taken" ? new l(a.alliance_name_already_taken(), t.status) : r.error == "empty_name" ? new l(a.alliance_with_empty_name(), t.status) : new l(a.unexpected_server_error(), t.status)
      } else throw t.status === i.FORBIDDEN ? (await t.json().catch(() => ({}))).error === "not_enough_droplets" ? new Error(a.not_enough_droplets()) : new Error(a.you_are_already_in_an_alliance()) : new Error(a.unexpected_server_error())
    }
    async leaveAlliance() {
      if ((await this.request("/alliance/leave", {
          method: "POST",
          credentials: "include"
        })).status !== i.OK) throw new Error(a.unexpected_server_error())
    }
    async updateAllianceDescription(e) {
      const t = await this.request("/alliance/update-description", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          description: e
        })
      });
      if (t.status === i.OK) return t.json();
      if (t.status === i.FORBIDDEN) throw new Error(a.you_are_not_allowed_to_do_this());
      if (t.status === i.BAD_REQUEST) {
        const r = await t.json().catch(() => ({}));
        throw new Error(r.error === "invalid_markdown" ? a.alliance_description_invalid_markdown() : a.exceeded_max_chars())
      } else throw t.status === i.CONFLICT ? new Error(a.alliance_description_credit_required()) : new Error(a.unexpected_server_error())
    }
    async getAllianceStore() {
      const e = await this.request("/alliance/store", {
        credentials: "include"
      });
      if (e.status === i.OK) return e.json();
      throw new Error(a.unexpected_server_error())
    }
    async getAllianceCoinLedger(e) {
      const t = e ? `?before=${e}` : "",
        r = await this.request(`/alliance/economy/ledger${t}`, {
          credentials: "include"
        });
      if (r.status === i.OK) return r.json();
      throw new Error(a.unexpected_server_error())
    }
    async donateToAlliance(e, t) {
      const r = await this.request("/alliance/economy/donate", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          droplets: e,
          idempotencyKey: t
        })
      });
      if (r.status === i.OK) return r.json();
      const s = await r.json().catch(() => ({}));
      throw s.error === "not_enough_droplets" ? new Error(a.not_enough_droplets()) : s.error === "invalid_donation" ? new Error(a.alliance_donation_invalid()) : new Error(a.unexpected_server_error())
    }
    async purchaseAllianceItem(e) {
      const t = await this.request("/alliance/economy/purchase", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          itemKey: e,
          idempotencyKey: crypto.randomUUID()
        })
      });
      if (t.status === i.OK) return t.json();
      const r = await t.json().catch(() => ({}));
      throw r.error === "not_enough_alliance_coins" ? new Error(a.alliance_not_enough_coins()) : r.error === "already_unlocked" ? new Error(a.alliance_already_unlocked()) : r.error === "headquarters_not_unlocked" ? new Error(a.alliance_hq_not_unlocked()) : r.error === "headquarters_upgrade_prerequisite" ? new Error(a.alliance_hq_upgrade_prerequisite()) : r.error === "template_upgrade_prerequisite" ? new Error(a.alliance_template_upgrade_prerequisite()) : new Error(a.unexpected_server_error())
    }
    async getAllianceTemplates(e) {
      const t = new URLSearchParams;
      e && (t.set("target", e.target), e.draftId !== void 0 && t.set("draftId", String(e.draftId)));
      const r = await this.request(`/alliance/templates${t.size?`?${t}`:""}`, {
        credentials: "include"
      });
      if (r.status === i.OK) {
        const s = await r.json();
        return {
          ...s,
          templates: (s.templates ?? []).map(qe),
          usedBytes: s.usedBytes ?? 0,
          byteLimit: s.byteLimit ?? 64 * 1024 * 1024,
          draftOptions: s.draftOptions ?? []
        }
      }
      throw new Error(a.unexpected_server_error())
    }
    async createAllianceTemplate(e, t) {
      const r = new FormData;
      r.set("idempotencyKey", t), r.set("name", e.name), r.set("audienceAllMembers", String(e.audienceAllMembers)), r.set("audienceRoles", JSON.stringify(e.audienceRoles ?? [])), r.set("audienceUserIds", JSON.stringify(e.audienceUserIds ?? [])), r.set("locations", JSON.stringify(e.locations)), r.set("opacity", String(e.opacity)), r.set("colorMetric", e.colorMetric), r.set("dithering", String(e.dithering)), r.set("colorPaletteMode", e.colorPaletteMode), r.set("pixelMode", e.pixelMode), r.set("image", e.image, "alliance-template.png");
      const s = await this.request("/alliance/templates", {
        method: "POST",
        credentials: "include",
        body: r
      });
      if (s.status === i.CREATED || s.status === i.OK) return qe(await s.json());
      const o = await s.json().catch(() => ({}));
      throw o.error === "template_limit_reached" ? new Error(a.alliance_template_limit_reached()) : o.error === "template_storage_limit_reached" ? new Error(a.alliance_template_storage_limit_reached()) : o.error === "invalid_template_image" ? new Error(a.alliance_template_invalid_image()) : o.error === "template_upload_rate_limited" ? new Error(a.alliance_template_upload_rate_limited()) : s.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async patchAllianceTemplateMetadata(e, t) {
      const r = await this.request(`/alliance/templates/${e}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(t)
      });
      if (r.status === i.OK) return qe(await r.json());
      throw (await r.json().catch(() => ({}))).error === "template_upload_rate_limited" ? new Error(a.alliance_template_upload_rate_limited()) : r.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async patchAllianceTemplatePlacement(e, t) {
      const r = await this.request(`/alliance/templates/${e}/placement`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(t)
      });
      if (r.status === i.OK) return r.json();
      const s = await r.json().catch(() => ({}));
      throw s.error === "invalid_template_placement" ? new Error(a.alliance_template_invalid_placement()) : s.error === "template_location_not_selected" ? new Error(a.alliance_template_location_not_selected()) : r.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async updateAllianceTemplate(e, t) {
      const r = new FormData;
      r.set("name", t.name), r.set("audienceAllMembers", String(t.audienceAllMembers)), r.set("audienceRoles", JSON.stringify(t.audienceRoles ?? [])), r.set("audienceUserIds", JSON.stringify(t.audienceUserIds ?? [])), r.set("locations", JSON.stringify(t.locations)), r.set("opacity", String(t.opacity)), r.set("colorMetric", t.colorMetric), r.set("dithering", String(t.dithering)), r.set("colorPaletteMode", t.colorPaletteMode), r.set("pixelMode", t.pixelMode), r.set("image", t.image, "alliance-template.png");
      const s = await this.request(`/alliance/templates/${e}`, {
        method: "PUT",
        credentials: "include",
        body: r
      });
      if (s.status === i.OK) return qe(await s.json());
      const o = await s.json().catch(() => ({}));
      throw o.error === "template_storage_limit_reached" ? new Error(a.alliance_template_storage_limit_reached()) : o.error === "invalid_template_image" ? new Error(a.alliance_template_invalid_image()) : o.error === "template_upload_rate_limited" ? new Error(a.alliance_template_upload_rate_limited()) : s.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async deleteAllianceTemplate(e) {
      const t = await this.request(`/alliance/templates/${e}`, {
        method: "DELETE",
        credentials: "include"
      });
      if (t.status !== i.NO_CONTENT) throw t.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async renameOwnAlliance(e) {
      const t = await this.request("/alliance/rename", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          name: e,
          idempotencyKey: crypto.randomUUID()
        })
      });
      if (t.status === i.OK) return t.json();
      const r = await t.json().catch(() => ({}));
      throw r.error === "not_enough_alliance_coins" ? new Error(a.alliance_not_enough_coins()) : r.error === "name_taken" ? new Error(a.alliance_name_already_taken()) : r.error === "name_unchanged" ? new Error(a.alliance_name_unchanged()) : r.error === "max_characters" ? new Error(a.alliance_name_exceeded_the_maximum_number_of_characters()) : new Error(a.unexpected_server_error())
    }
    async getAllianceAssets(e) {
      const t = await this.request(`/alliance/assets/${e}`, {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      throw new Error(a.unexpected_server_error())
    }
    async createAllianceAssetDraft(e, t) {
      const r = await this.request(`/alliance/assets/${e}/drafts`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          idempotencyKey: crypto.randomUUID(),
          ...t ? {
            sourceVersionId: t
          } : {}
        })
      });
      if (r.status === i.OK) return r.json();
      throw (await r.json().catch(() => ({}))).error === "not_enough_alliance_coins" ? new Error(a.alliance_not_enough_coins()) : new Error(a.unexpected_server_error())
    }
    async getAllianceAssetCanvas(e) {
      const t = await this.request(`/alliance/assets/drafts/${e}/canvas`, {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      throw new Error(a.unexpected_server_error())
    }
    async getAllianceAssetRevision(e) {
      const t = await this.request(`/alliance/assets/drafts/${e}/canvas?metadataOnly=true`, {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      if (!(t.status === i.FORBIDDEN || t.status === i.NOT_FOUND)) throw new Error(a.unexpected_server_error())
    }
    async paintAllianceAsset(e, t) {
      const r = JSON.stringify({
          pixels: t
        }),
        s = await this.request(`/alliance/assets/drafts/${e}/paint`, {
          method: "POST",
          credentials: "include",
          headers: await j.getHeaders(r),
          body: r
        }).catch(c => {
          throw c instanceof Z ? new Z(a.alliance_asset_paint_rate_limited()) : c
        });
      if (s.status === i.OK) return s.json();
      const o = await s.json().catch(() => ({}));
      if (o.error === "challenge-required" && o.tier) {
        if (await te(o.tier)) return this.paintAllianceAsset(e, t);
        throw new Error(a.challenge_verification_not_completed())
      }
      if (o.error === "verification-required") {
        const c = await Je().get();
        if (!c.sealed_result) throw new Error(a.unexpected_server_error());
        return await this.verifyAnticheat(c.sealed_result), this.paintAllianceAsset(e, t)
      }
      throw o.error === "color-not-owned" ? new Error(a.alliance_better_pallet_required()) : new Error(a.unexpected_server_error())
    }
    async finishAllianceAssetDraft(e, t) {
      const r = await this.request(`/alliance/assets/drafts/${e}/finish`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          publish: t
        })
      });
      if (r.status === i.OK) return r.json();
      throw new Error(a.unexpected_server_error())
    }
    async equipAllianceAssetVersion(e) {
      if ((await this.request(`/alliance/assets/versions/${e}/select`, {
          method: "POST",
          credentials: "include"
        })).status !== i.OK) throw new Error(a.unexpected_server_error())
    }
    async unequipAllianceAsset(e) {
      if ((await this.request(`/alliance/assets/${e}/unpublish`, {
          method: "POST",
          credentials: "include"
        })).status !== i.OK) throw new Error(a.unexpected_server_error())
    }
    async deleteAllianceAssetVersion(e) {
      const t = await this.request(`/alliance/assets/versions/${e}`, {
        method: "DELETE",
        credentials: "include"
      });
      if (t.status !== i.OK) throw (await t.json().catch(() => ({}))).error === "asset_version_selected" ? new Error(a.alliance_asset_unequip_before_delete()) : new Error(a.unexpected_server_error())
    }
    async getAllianceAssetEditors(e) {
      const t = await this.request(`/alliance/assets/drafts/${e}/editors`, {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      throw new Error(a.unexpected_server_error())
    }
    async grantAllianceAssetEditor(e, t) {
      const r = await this.request(`/alliance/assets/drafts/${e}/editors`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
      if (r.status !== i.OK) throw (await r.json().catch(() => ({}))).error === "editor_already_granted" ? new Error(a.alliance_asset_editor_already_added()) : new Error(a.unexpected_server_error())
    }
    async revokeAllianceAssetEditor(e, t) {
      if ((await this.request(`/alliance/assets/drafts/${e}/editors/${t}`, {
          method: "DELETE",
          credentials: "include"
        })).status !== i.OK) throw new Error(a.unexpected_server_error())
    }
    async copyAllianceAssetEditors(e, t) {
      const r = await this.request(`/alliance/assets/drafts/${e}/editors/copy`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          sourceDraftId: t
        })
      });
      if (r.status === i.OK) return r.json();
      throw new Error(a.unexpected_server_error())
    }
    async getAllianceAwards(e, t = 0) {
      const r = await this.request(`/alliances/${e}/awards?page=${t}`, {});
      if (r.status === i.OK) return r.json();
      throw new Error(a.unexpected_server_error())
    }
    async setAllianceFeaturedAwards(e) {
      if ((await this.request("/alliance/awards/featured", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            awardKeys: e
          })
        })).status !== i.OK) throw new Error(a.unexpected_server_error())
    }
    async updateAllianceHeadquarters(e, t) {
      const r = await this.request("/alliance/update-headquarters", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          latitude: e,
          longitude: t
        })
      });
      if (r.status === i.OK) return;
      if (r.status === i.FORBIDDEN) throw new Error(a.you_are_not_allowed_to_do_this());
      const s = await r.json().catch(() => ({}));
      throw s.error === "headquarters_credit_required" ? new Error(a.alliance_hq_credit_required()) : s.error === "headquarters_not_unlocked" ? new Error(a.alliance_hq_not_unlocked()) : new Error(a.unexpected_server_error())
    }
    async getAllianceHeadquarters() {
      const e = await this.request("/alliance/headquarters", {
        credentials: "include"
      });
      if (e.status === i.OK) return e.json();
      throw new Error(a.unexpected_server_error())
    }
    async getAllianceHeadquartersCanvas(e = {}) {
      const t = new URLSearchParams;
      e.metadataOnly && t.set("metadataOnly", "true"), e.viewport && (t.set("minX", String(e.viewport.minX)), t.set("minY", String(e.viewport.minY)), t.set("maxX", String(e.viewport.maxX)), t.set("maxY", String(e.viewport.maxY)));
      const r = t.size > 0 ? `?${t}` : "",
        s = await this.request(`/alliance/headquarters/canvas${r}`, {
          credentials: "include",
          signal: e.signal
        });
      if (s.status === i.OK) return s.json();
      throw new Error(a.unexpected_server_error())
    }
    async getAllianceHeadquartersManifest(e = {}) {
      return this.getAllianceHeadquartersManifestAt("/alliance/headquarters/manifest", e)
    }
    async getPublicAllianceHeadquartersManifest(e, t = {}) {
      return this.getAllianceHeadquartersManifestAt(`/alliances/${e}/headquarters/manifest`, t)
    }
    async getAllianceHeadquartersManifestAt(e, t) {
      const r = new URLSearchParams;
      t.metadataOnly && r.set("metadataOnly", "true"), t.viewport && (r.set("minX", String(t.viewport.minX)), r.set("minY", String(t.viewport.minY)), r.set("maxX", String(t.viewport.maxX)), r.set("maxY", String(t.viewport.maxY)));
      const s = r.size > 0 ? `?${r}` : "",
        o = await this.request(`${e}${s}`, {
          credentials: "include",
          signal: t.signal
        });
      if (o.status === i.OK) return o.json();
      throw new l(a.unexpected_server_error(), o.status)
    }
    async getAllianceHeadquartersSnapshot(e, t, r) {
      return this.getAllianceHeadquartersSnapshotAt("/alliance/headquarters/snapshot", e, t, "include", r)
    }
    async getPublicAllianceHeadquartersSnapshot(e, t, r, s) {
      return this.getAllianceHeadquartersSnapshotAt(`/alliances/${e}/headquarters/snapshot`, t, r, "omit", s)
    }
    async getAllianceHeadquartersSnapshotAt(e, t, r, s, o) {
      const c = await this.request(e, {
        method: "POST",
        credentials: s,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...t,
          knownTiles: r
        }),
        signal: o
      });
      if (c.status === i.OK) return c.arrayBuffer();
      throw new l(a.unexpected_server_error(), c.status)
    }
    async unlockAllianceHeadquarters(e) {
      const t = await this.request("/alliance/headquarters/unlock", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          idempotencyKey: crypto.randomUUID(),
          ...e ?? {}
        })
      });
      if (t.status === i.OK) return t.json();
      const r = await t.json().catch(() => ({}));
      throw r.error === "not_enough_alliance_coins" ? new Error(a.alliance_not_enough_coins()) : r.error === "already_unlocked" ? new Error(a.alliance_already_unlocked()) : r.error === "headquarters_anchor_required" ? new Error(a.alliance_hq_anchor_required()) : new Error(a.unexpected_server_error())
    }
    async expandAllianceHeadquarters(e) {
      const t = await this.request("/alliance/headquarters/expand", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          idempotencyKey: crypto.randomUUID(),
          size: e
        })
      });
      if (t.status === i.OK) return t.json();
      const r = await t.json().catch(() => ({}));
      throw r.error === "not_enough_alliance_coins" ? new Error(a.alliance_not_enough_coins()) : r.error === "headquarters_size_prerequisite" ? new Error(a.alliance_hq_size_prerequisite()) : new Error(a.unexpected_server_error())
    }
    async paintAllianceHeadquarters(e, t = crypto.randomUUID()) {
      const r = JSON.stringify({
          batchId: t,
          pixels: e
        }),
        s = await this.request("/alliance/headquarters/paint", {
          method: "POST",
          credentials: "include",
          headers: await j.getHeaders(r),
          body: r
        }).catch(c => {
          throw c instanceof Z ? new Z(a.alliance_asset_paint_rate_limited()) : c
        });
      if (s.status === i.OK) return s.json();
      const o = await s.json().catch(() => ({}));
      if (o.error === "challenge-required" && o.tier) {
        if (await te(o.tier)) return this.paintAllianceHeadquarters(e, t);
        throw new Error(a.challenge_verification_not_completed())
      }
      if (o.error === "verification-required") {
        const c = await Je().get();
        if (!c.sealed_result) throw new Error(a.unexpected_server_error());
        return await this.verifyAnticheat(c.sealed_result), this.paintAllianceHeadquarters(e, t)
      }
      throw o.error === "color-not-owned" ? new Error(a.alliance_better_pallet_required()) : o.error === "not_enough_hq_charges" ? new Error(a.alliance_hq_not_enough_charges()) : o.error === "headquarters_timed_out" ? new Error(a.alliance_hq_timed_out_error()) : o.error === "headquarters_locked" ? new Error(a.alliance_hq_locked()) : o.error === "no_pixel_changes" ? new Error(a.alliance_hq_no_pixel_changes()) : new Error(a.unexpected_server_error())
    }
    async getAllianceHqPixelInfo(e, t) {
      const r = await this.request(`/alliance/headquarters/pixel?x=${e}&y=${t}`, {
        credentials: "include"
      });
      if (r.status === i.OK) return r.json();
      throw new Error(a.unexpected_server_error())
    }
    async getAllianceHqLeaderboard(e) {
      const t = await this.request(`/alliance/headquarters/leaderboard/${e}`, {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      throw t.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.alliance_hq_leaderboard_load_failed())
    }
    async getAllianceHqTimeouts(e) {
      const t = e ? `?before=${e}` : "",
        r = await this.request(`/alliance/headquarters/timeouts${t}`, {
          credentials: "include"
        });
      if (r.status === i.OK) return r.json();
      throw new Error(a.unexpected_server_error())
    }
    async createAllianceHqTimeout(e, t, r) {
      const s = await this.request("/alliance/headquarters/timeouts", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: e,
          duration: t,
          reason: r
        })
      });
      if (s.status === i.OK) return s.json();
      if (s.status === i.FORBIDDEN) throw new Error(a.you_are_not_allowed_to_do_this());
      const o = await s.json().catch(() => ({}));
      throw o.error === "headquarters_timeout_active" ? new Error(a.alliance_hq_timeout_already_active()) : o.error === "invalid_timeout_reason" ? new Error(a.alliance_hq_timeout_reason_required()) : new Error(a.unexpected_server_error())
    }
    async revokeAllianceHqTimeout(e, t) {
      const r = await this.request(`/alliance/headquarters/timeouts/${e}`, {
        method: "DELETE",
        credentials: "include",
        body: JSON.stringify({
          reason: t
        })
      });
      if (r.status === i.OK) return;
      if (r.status === i.FORBIDDEN) throw new Error(a.you_are_not_allowed_to_do_this());
      const s = await r.json().catch(() => ({}));
      throw s.error === "headquarters_timeout_inactive" ? new Error(a.alliance_hq_timeout_inactive()) : s.error === "invalid_timeout_reason" ? new Error(a.alliance_hq_timeout_reason_required()) : new Error(a.unexpected_server_error())
    }
    async getPublicAllianceHeadquarters(e) {
      const t = await this.request(`/alliances/${e}/headquarters`, {});
      if (t.status === i.OK) return t.json();
      if (t.status !== i.NOT_FOUND) throw new Error(a.unexpected_server_error())
    }
    async allianceLeaderboard(e) {
      const t = await this.request(`/alliance/leaderboard/${e}`, {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      throw t.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.leaderboard_disabled_temporarily())
    }
    async getAllianceInvites() {
      const e = await this.request("/alliance/invites", {
        credentials: "include"
      });
      if (e.status === i.OK) return e.json();
      throw e.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async createAllianceInvite(e) {
      const t = await this.request("/alliance/invites", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          durationDays: e.durationDays,
          maxUses: e.maxUses ?? null
        })
      });
      if (t.status === i.OK) return t.json();
      throw t.status === i.BAD_REQUEST ? (await t.json().catch(() => ({}))).error === "max_invites" ? new Error(a.alliance_invite_limit_reached()) : new Error(a.unexpected_server_error()) : t.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async revokeAllianceInvite(e) {
      const t = await this.request(`/alliance/invites/${e}/revoke`, {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== i.OK) throw t.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async getAllianceGallery(e) {
      const t = new URLSearchParams({
        sort: e.sort,
        page: String(e.page)
      });
      e.query && t.set("q", e.query), e.joinPolicy && t.set("joinPolicy", e.joinPolicy);
      const r = await this.request(`/alliances?${t.toString()}`, {});
      if (r.status === i.OK) return r.json();
      throw new Error(a.unexpected_server_error())
    }
    async getPublicAllianceHeadquartersPins(e) {
      const t = new URLSearchParams({
          minLat: e.minLat.toFixed(5),
          maxLat: e.maxLat.toFixed(5),
          minLng: e.minLng.toFixed(5),
          maxLng: e.maxLng.toFixed(5)
        }),
        r = await this.request(`/alliances/headquarters/pins?${t.toString()}`, {});
      if (r.status === i.OK) return r.json();
      throw new Error(a.unexpected_server_error())
    }
    async getPublicAlliance(e) {
      const t = await this.request(`/alliances/${e}`, {});
      if (t.status === i.OK) return t.json();
      if (t.status === i.NOT_FOUND) return;
      throw new Error(a.unexpected_server_error())
    }
    async getPublicAllianceMembers(e, t) {
      const r = new URLSearchParams({
        page: String(t.page),
        role: t.role,
        sort: t.sort
      });
      t.query && r.set("q", t.query);
      const s = await this.request(`/alliances/${e}/members?${r.toString()}`, {});
      if (s.status === i.OK) return s.json();
      throw new Error(a.unexpected_server_error())
    }
    async getAllianceViewerState(e) {
      const t = await this.request(`/alliances/${e}/viewer`, {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      if (t.status === i.UNAUTHORIZED) return;
      throw new Error(a.unexpected_server_error())
    }
    async directJoinAlliance(e) {
      const t = await this.request(`/alliances/${e}/join`, {
        method: "POST",
        credentials: "include"
      });
      return this.mapJoinOutcome(t)
    }
    async requestJoinAlliance(e) {
      const t = await this.request(`/alliances/${e}/request`, {
        method: "POST",
        credentials: "include"
      });
      return t.status === i.TOO_MANY_REQUESTS ? "cooldown" : this.mapJoinOutcome(t)
    }
    async mapJoinOutcome(e) {
      switch (e.status) {
        case i.OK:
          return "success";
        case i.FORBIDDEN:
          return (await e.json().catch(() => ({}))).error === "banned" ? "banned" : "policy";
        case i.CONFLICT:
          return "in-alliance";
        case i.NOT_FOUND:
          return "not-found";
        default:
          return "error"
      }
    }
    async cancelAllianceJoinRequest(e) {
      const t = await this.request(`/alliance/join-requests/${e}/cancel`, {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== i.OK && t.status !== i.CONFLICT) throw new Error(a.unexpected_server_error())
    }
    async getAllianceJoinRequests(e) {
      const t = await this.request(`/alliance/join-requests?page=${e}`, {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      throw t.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async reviewAllianceJoinRequest(e, t) {
      const r = await this.request(`/alliance/join-requests/${e}/review`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          accept: t
        })
      });
      if (r.status === i.OK) return "success";
      if (r.status === i.CONFLICT) return "stale";
      throw r.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async kickAllianceMember(e) {
      const t = await this.request("/alliance/kick", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          kickedUserId: e
        })
      });
      if (t.status !== i.OK) throw t.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async removeAllianceAdmin(e) {
      const t = await this.request("/alliance/remove-admin", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          demotedUserId: e
        })
      });
      if (t.status !== i.OK) throw t.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async setOwnAllianceMemberRole(e, t) {
      const r = await this.request(`/alliance/members/${e}/role`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          role: t
        })
      });
      if (r.status !== i.OK) throw r.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async getAllianceRolePermissions() {
      const e = await this.request("/alliance/role-permissions", {
        credentials: "include"
      });
      if (e.status === i.OK) return e.json();
      throw e.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async updateAllianceRolePermissions(e) {
      const t = await this.request("/alliance/role-permissions", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          roles: e
        })
      });
      if (t.status !== i.OK) throw t.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async transferAllianceLeadership(e) {
      const t = await this.request("/alliance/transfer-leadership", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          newLeaderUserId: e
        })
      });
      if (t.status !== i.OK) throw t.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async updateAllianceSettings(e) {
      const t = await this.request("/alliance/settings", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(e)
      });
      if (t.status !== i.OK) throw t.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async setAllianceDiscordInvite(e) {
      const t = await this.request("/alliance/discord-invite", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          url: e
        })
      });
      if (t.status !== i.OK) {
        {
          if (t.status === i.BAD_REQUEST) throw new Error(a.alliance_discord_invite_invalid());
          if (t.status === i.FORBIDDEN) throw new Error(a.you_are_not_allowed_to_do_this())
        }
        throw new Error(a.unexpected_server_error())
      }
    }
    async getAllianceActivity(e) {
      const t = e ? `?cursor=${e}` : "",
        r = await this.request(`/alliance/activity${t}`, {
          credentials: "include"
        });
      if (r.status === i.OK) return r.json();
      throw r.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async getAllianceNotificationPreferences() {
      const e = await this.request("/alliance/notification-preferences", {
        credentials: "include"
      });
      if (e.status === i.OK) return e.json();
      throw new Error(a.unexpected_server_error())
    }
    async setAllianceNotificationPreference(e, t) {
      if ((await this.request("/alliance/notification-preferences", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            category: e,
            enabled: t
          })
        })).status !== i.OK) throw new Error(a.unexpected_server_error())
    }
    async reportAlliance(e) {
      const t = JSON.stringify({
          allianceId: e.allianceId,
          target: e.target,
          targetId: e.targetId ?? 0,
          eventHwm: e.eventHwm,
          area: e.area,
          zoom: e.zoom,
          viewport: e.viewport,
          reason: e.reason,
          notes: e.notes ?? ""
        }),
        r = await this.request("/report/alliance", {
          method: "POST",
          credentials: "include",
          headers: await j.getHeaders(t),
          body: t
        });
      if (r.status === i.OK) return r.json();
      if (r.status === i.FORBIDDEN) {
        const s = await r.json().catch(() => ({}));
        if (s.error === "challenge-required" && s.tier) {
          if (await te(s.tier)) return this.reportAlliance(e);
          throw new Error(a.challenge_verification_not_completed())
        }
      }
      throw new Error(a.report_failed())
    }
    async joinAlliance(e) {
      switch ((await this.request(`/alliance/join/${e}`, {
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
    async getAllianceMembers(e) {
      const t = new URLSearchParams({
        role: e.role,
        sort: e.sort
      });
      e.query && t.set("q", e.query);
      const r = await this.request(`/alliance/members/${e.page}?${t.toString()}`, {
        credentials: "include"
      });
      if (r.status === i.OK) return r.json();
      throw new Error(a.unexpected_server_error())
    }
    async getAllianceBannedMembers(e) {
      const t = new URLSearchParams({
        sort: e.sort
      });
      e.query && t.set("q", e.query);
      const r = await this.request(`/alliance/members/banned/${e.page}?${t.toString()}`, {
        credentials: "include"
      });
      if (r.status === i.OK) return r.json();
      throw new Error(a.unexpected_server_error())
    }
    async getAllianceById(e) {
      const t = await this.request(`/staff/dashboard/alliances/${e}`, {
        method: "GET",
        credentials: "include"
      });
      if (t.status === i.NOT_FOUND) return;
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      const r = await t.json();
      return {
        id: Number(r.id),
        name: String(r.name),
        avatarSeed: (r == null ? void 0 : r.avatarSeed) || void 0,
        pictureVersionId: (r == null ? void 0 : r.pictureVersionId) ?? void 0,
        pixelsPainted: Number((r == null ? void 0 : r.pixels_painted) ?? 0)
      }
    }
    async searchAlliance(e) {
      const t = new URLSearchParams({
          q: e
        }),
        r = await this.request(`/staff/dashboard/alliances/search?${t.toString()}`, {
          method: "GET",
          credentials: "include"
        });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      const s = await r.json();
      return (Array.isArray(s) ? s : []).map(o => ({
        id: Number(o.id),
        name: String(o.name ?? ""),
        avatarSeed: (o == null ? void 0 : o.avatarSeed) || void 0,
        pictureVersionId: (o == null ? void 0 : o.pictureVersionId) ?? void 0,
        pixelsPainted: Number((o == null ? void 0 : o.pixels_painted) ?? 0)
      }))
    }
    async searchAlliances(e) {
      return this.searchAlliance(e)
    }
    async getAdminAllianceAwards(e) {
      const t = await this.request(`/staff/dashboard/alliances/${e}/awards`, {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      throw new Error(a.unexpected_server_error())
    }
    async getAdminAllianceAssets(e) {
      const t = await this.request(`/staff/dashboard/alliances/${e}/assets`, {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      throw new Error(a.unexpected_server_error())
    }
    async getAdminAllianceAssetEvents(e, t, r) {
      const s = r ? `?before=${r}` : "",
        o = await this.request(`/staff/dashboard/alliances/${e}/assets/drafts/${t}/events${s}`, {
          credentials: "include"
        });
      if (o.status === i.OK) return o.json();
      throw new Error(a.unexpected_server_error())
    }
    async moderateAdminAllianceAssetVersion(e, t, r, s) {
      if ((await this.request(`/staff/dashboard/alliances/${e}/assets/versions/${t}/moderation`, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            ...r,
            reason: s
          })
        })).status !== i.OK) throw new Error(a.unexpected_server_error())
    }
    async moderateAdminAllianceAssetDraft(e, t, r, s) {
      if ((await this.request(`/staff/dashboard/alliances/${e}/assets/drafts/${t}/moderation`, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            ...r,
            reason: s
          })
        })).status !== i.OK) throw new Error(a.unexpected_server_error())
    }
    async getAllianceHqWaybackEvents(e, t) {
      const r = new URLSearchParams;
      r.set("limit", String((t == null ? void 0 : t.limit) ?? mt.tools.wayback.hqLimit)), t != null && t.before && r.set("before", String(t.before)), t != null && t.area && (r.set("minX", String(t.area.minX)), r.set("minY", String(t.area.minY)), r.set("maxX", String(t.area.maxX)), r.set("maxY", String(t.area.maxY)));
      const s = await this.request(`/staff/dashboard/alliances/${e}/headquarters/events?${r.toString()}`, {
        credentials: "include"
      });
      if (s.status === i.NOT_FOUND) throw new Error(a.alliances_not_found());
      if (s.status !== i.OK) throw new Error(a.unexpected_server_error());
      return s.json()
    }
    async getAdminAllianceHqArea(e, t) {
      const r = ln(t);
      if (r.length === 0) throw new Error(a.unexpected_server_error());
      const s = await this.getAdminAllianceHqAreaChunk(e, r[0]),
        o = [...s.pixels];
      for (let c = 1; c < r.length; c += at) {
        const d = await Promise.all(r.slice(c, c + at).map(u => this.getAdminAllianceHqAreaChunk(e, u, s.eventHwm)));
        for (const u of d) o.push(...u.pixels)
      }
      return {
        ...s,
        bounds: t,
        pixels: o
      }
    }
    async getAdminAllianceHqSelectArea(e, t, r) {
      var u;
      const s = un(t),
        o = new Array(s.length);
      let c = 0;
      const d = Array.from({
        length: Math.min(dn, s.length)
      }, async () => {
        for (; c < s.length;) {
          const f = c;
          c += 1, o[f] = await this.getAdminAllianceHqSelectAreaChunk(e, s[f], r)
        }
      });
      return await Promise.all(d), {
        bounds: t,
        eventHwm: r,
        anchor: (u = o[0]) == null ? void 0 : u.anchor,
        chunks: o
      }
    }
    async getAdminAllianceHqSelectAreaChunk(e, t, r) {
      const s = new URLSearchParams({
          minX: String(t.minX),
          minY: String(t.minY),
          maxX: String(t.maxX),
          maxY: String(t.maxY),
          eventHwm: String(r),
          format: "compact"
        }),
        o = await this.request(`/staff/dashboard/alliances/${e}/headquarters/area?${s.toString()}`, {
          credentials: "include"
        });
      if (o.status !== i.OK) throw new Error(a.unexpected_server_error());
      const c = await o.arrayBuffer(),
        d = (t.maxX - t.minX + 1) * (t.maxY - t.minY + 1);
      if (c.byteLength !== d * 13) throw new Error(a.unexpected_server_error());
      const u = new DataView(c),
        f = new Uint32Array(d),
        T = new Uint8Array(d),
        m = new BigUint64Array(d);
      for (let q = 0; q < d; q += 1) {
        const X = q * 13;
        f[q] = u.getUint32(X, !0), T[q] = u.getUint8(X + 4), m[q] = u.getBigUint64(X + 5, !0)
      }
      const x = o.headers.get("X-Alliance-Canvas-Anchor-Latitude"),
        D = o.headers.get("X-Alliance-Canvas-Anchor-Longitude"),
        S = Number(x),
        I = Number(D),
        N = x !== null && D !== null && Number.isFinite(S) && Number.isFinite(I) ? {
          latitude: S,
          longitude: I
        } : void 0;
      return {
        bounds: t,
        paintedBy: f,
        colors: T,
        eventIds: m,
        anchor: N
      }
    }
    async getAdminAllianceHqAreaChunk(e, t, r) {
      const s = new URLSearchParams({
        minX: String(t.minX),
        minY: String(t.minY),
        maxX: String(t.maxX),
        maxY: String(t.maxY)
      });
      r !== void 0 && s.set("eventHwm", String(r));
      const o = await this.request(`/staff/dashboard/alliances/${e}/headquarters/area?${s.toString()}`, {
        credentials: "include"
      });
      if (o.status === i.CONTENT_TOO_LARGE) throw new Error(a.unexpected_server_error());
      if (o.status !== i.OK) throw new Error(a.unexpected_server_error());
      return o.json()
    }
    async reverseAdminAllianceHqPixels(e, t, r, s = !1) {
      let o = 0,
        c = 0;
      for (let d = 0; d < t.length; d += Be) {
        const u = await this.reverseAdminAllianceHqPixelChunk(e, t.slice(d, d + Be), r, s);
        o += u.reversed, c = u.eventHwm
      }
      return {
        reversed: o,
        cleared: s,
        eventHwm: c
      }
    }
    async reverseAdminAllianceHqPixelChunk(e, t, r, s) {
      const o = await this.request(`/staff/dashboard/alliances/${e}/headquarters/reverse`, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            pixels: t,
            reason: r,
            clear: s
          })
        }),
        c = await o.json().catch(() => ({}));
      if (o.status === i.CONTENT_TOO_LARGE) throw new Error(a.alliance_hq_select_area_history_too_large());
      if (o.status === i.NOT_FOUND) throw new Error(a.reverse_no_modifications());
      if (o.status !== i.OK) throw new Error(a.unexpected_server_error());
      return c
    }
    async getAllianceFull(e) {
      const t = await this.request(`/staff/dashboard/alliances/${e}/full`, {
        method: "GET",
        credentials: "include"
      });
      if (t.status === i.NOT_FOUND) return null;
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      const r = await t.json(),
        s = Array.isArray(r == null ? void 0 : r.members) ? r.members : [];
      return {
        id: Number(r == null ? void 0 : r.id),
        name: String((r == null ? void 0 : r.name) ?? ""),
        status: (r == null ? void 0 : r.status) === "archived" ? "archived" : "active",
        createdAt: (r == null ? void 0 : r.createdAt) ?? null,
        archivedAt: (r == null ? void 0 : r.archivedAt) ?? null,
        activeSince: (r == null ? void 0 : r.activeSince) ?? null,
        lastActivityAt: (r == null ? void 0 : r.lastActivityAt) ?? null,
        description: (r == null ? void 0 : r.description) ?? null,
        descriptionMode: (r == null ? void 0 : r.descriptionMode) === "markdown" ? "markdown" : "plain",
        avatarSeed: (r == null ? void 0 : r.avatarSeed) ?? void 0,
        discoverability: (r == null ? void 0 : r.discoverability) === "unlisted" ? "unlisted" : "public",
        joinPolicy: (r == null ? void 0 : r.joinPolicy) === "open" || (r == null ? void 0 : r.joinPolicy) === "invite_only" ? r.joinPolicy : "request",
        inviteMinRole: (r == null ? void 0 : r.inviteMinRole) === "member" || (r == null ? void 0 : r.inviteMinRole) === "leader" ? r.inviteMinRole : "admin",
        ownerId: Number((r == null ? void 0 : r.ownerId) ?? (r == null ? void 0 : r.created_by)),
        ownerName: (r == null ? void 0 : r.ownerName) ?? null,
        ownerAvatarSeed: (r == null ? void 0 : r.ownerAvatarSeed) ?? void 0,
        hqName: (r == null ? void 0 : r.hqName) ?? null,
        hqLatitude: (r == null ? void 0 : r.hqLatitude) ?? (r == null ? void 0 : r.hq_latitude) ?? null,
        hqLongitude: (r == null ? void 0 : r.hqLongitude) ?? (r == null ? void 0 : r.hq_longitude) ?? null,
        hqVisibility: (r == null ? void 0 : r.hqVisibility) ?? null,
        headquartersId: (r == null ? void 0 : r.headquartersId) ?? null,
        headquartersSize: (r == null ? void 0 : r.headquartersSize) ?? null,
        headquartersLocked: !!(r != null && r.headquartersLocked),
        pixelsPainted: Number((r == null ? void 0 : r.pixelsPainted) ?? (r == null ? void 0 : r.pixels_painted) ?? 0),
        membersCount: Number((r == null ? void 0 : r.membersCount) ?? s.length),
        coinBalance: Number((r == null ? void 0 : r.coinBalance) ?? 0),
        unlockKeys: Array.isArray(r == null ? void 0 : r.unlockKeys) ? r.unlockKeys.map(String) : [],
        currentPictureVersionId: (r == null ? void 0 : r.currentPictureVersionId) ?? null,
        currentBannerVersionId: (r == null ? void 0 : r.currentBannerVersionId) ?? null,
        discordInviteRevisionId: (r == null ? void 0 : r.discordInviteRevisionId) ?? null,
        discordInviteUrl: (r == null ? void 0 : r.discordInviteUrl) ?? null,
        discordInviteModerationState: (r == null ? void 0 : r.discordInviteModerationState) ?? null,
        members: s.map(o => ({
          id: Number(o == null ? void 0 : o.id),
          name: String((o == null ? void 0 : o.name) ?? `#${o==null?void 0:o.id}`),
          picture: (o == null ? void 0 : o.picture) ?? null,
          avatarSeed: (o == null ? void 0 : o.avatarSeed) ?? void 0,
          pixelsPainted: Number((o == null ? void 0 : o.pixelsPainted) ?? (o == null ? void 0 : o.pixels_painted) ?? 0),
          lastPixelLatitude: (o == null ? void 0 : o.lastPixelLatitude) ?? null,
          lastPixelLongitude: (o == null ? void 0 : o.lastPixelLongitude) ?? null,
          role: it(o),
          timedOut: !!(o != null && o.timedOut),
          banned: !!(o != null && o.banned)
        }))
      }
    }
    async getAdminAllianceMembers(e, t) {
      const r = new URLSearchParams({
        page: String(t.page),
        pageSize: String(t.pageSize),
        role: t.role,
        status: t.status,
        sort: t.sort
      });
      t.query && r.set("q", t.query);
      const s = await this.request(`/staff/dashboard/alliances/${e}/members?${r.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (s.status === i.NOT_FOUND) return {
        members: [],
        total: 0,
        filteredTotal: 0
      };
      if (s.status !== i.OK) throw new l(a.unexpected_server_error(), s.status);
      const o = await s.json(),
        c = Array.isArray(o == null ? void 0 : o.members) ? o.members : [];
      return {
        members: c.map(d => ({
          id: Number(d == null ? void 0 : d.id),
          name: String((d == null ? void 0 : d.name) ?? `#${d==null?void 0:d.id}`),
          picture: (d == null ? void 0 : d.picture) ?? null,
          avatarSeed: (d == null ? void 0 : d.avatarSeed) ?? void 0,
          pixelsPainted: Number((d == null ? void 0 : d.pixelsPainted) ?? (d == null ? void 0 : d.pixels_painted) ?? 0),
          lastPixelLatitude: (d == null ? void 0 : d.lastPixelLatitude) ?? null,
          lastPixelLongitude: (d == null ? void 0 : d.lastPixelLongitude) ?? null,
          role: it(d),
          timedOut: !!(d != null && d.timedOut),
          banned: !!(d != null && d.banned)
        })),
        total: Number((o == null ? void 0 : o.total) ?? c.length),
        filteredTotal: Number((o == null ? void 0 : o.filteredTotal) ?? (o == null ? void 0 : o.total) ?? c.length)
      }
    }
    async renameAlliance(e, t) {
      const r = await this.request(`/staff/dashboard/alliances/${e}/rename`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          name: t
        })
      });
      if (r.status === i.BAD_REQUEST) {
        const s = await r.json().catch(() => ({}));
        throw new Error((s == null ? void 0 : s.error) ?? a.unexpected_server_error())
      } else if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status)
    }
    async changeAllianceLeader(e, t) {
      const r = await this.request(`/staff/dashboard/alliances/${e}/leader`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          newLeaderUserId: t
        })
      });
      if (r.status === i.BAD_REQUEST) {
        const s = await r.json();
        throw (s == null ? void 0 : s.error) === "user_not_in_alliance" ? new Error(a.leader_must_be_in_alliance()) : new Error(a.unexpected_server_error())
      } else if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status)
    }
    async banAllAllianceMembers(e, t, r) {
      const s = await this.request(`/staff/dashboard/alliances/${e}/ban-all`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          reason: t,
          notes: r
        })
      });
      if (s.status !== i.OK) throw new l(a.unexpected_server_error(), s.status)
    }
    async setAllianceMemberRole(e, t, r) {
      const s = await this.request(`/staff/dashboard/alliances/${e}/members/${t}/role`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          role: r
        })
      });
      if (s.status !== i.OK) throw new l(a.unexpected_server_error(), s.status)
    }
    async removeAllianceMember(e, t) {
      const r = await this.request(`/staff/dashboard/alliances/${e}/members/${t}/remove`, {
        method: "POST",
        credentials: "include"
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status)
    }
    async getAdminAllianceRevisions(e, t) {
      const r = await this.request(`/staff/dashboard/alliances/${e}/revisions?kind=${t}`, {
        method: "GET",
        credentials: "include"
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return r.json()
    }
    async hideAdminAllianceRevision(e, t, r) {
      const s = await this.request(`/staff/dashboard/alliances/${e}/revisions/hide`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          kind: t,
          revisionId: r
        })
      });
      if (s.status !== i.OK) throw new l(a.unexpected_server_error(), s.status)
    }
    async suspendAdminAllianceVisibility(e, t) {
      const r = await this.request(`/staff/dashboard/alliances/${e}/suspend-visibility`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          discoverability: t
        })
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status)
    }
    async moderateAdminAllianceHeadquarters(e, t, r) {
      const s = await this.request(`/staff/dashboard/alliances/${e}/headquarters/moderation`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          locked: t,
          reason: r
        })
      });
      if (s.status === i.NOT_FOUND) throw new Error(a.alliance_ticket_no_headquarters());
      if (s.status !== i.OK) throw new l(a.unexpected_server_error(), s.status)
    }
    async restoreAdminAlliance(e, t) {
      const r = await this.request(`/staff/dashboard/alliances/${e}/restore`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          newLeaderUserId: t
        })
      });
      if (r.status === i.BAD_REQUEST) {
        const s = await r.json().catch(() => ({}));
        throw (s == null ? void 0 : s.error) === "user_not_found" ? new Error(a.alliances_invalid_id()) : (s == null ? void 0 : s.error) === "user_already_in_alliance" ? new Error(a.alliance_staff_restore_leader_in_alliance()) : (s == null ? void 0 : s.error) === "alliance_not_archived" ? new Error(a.alliance_staff_restore_not_archived()) : new Error(a.unexpected_server_error())
      }
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status)
    }
    async archiveAdminAlliance(e) {
      const t = await this.request(`/staff/dashboard/alliances/${e}/archive`, {
        method: "POST",
        credentials: "include"
      });
      if (t.status === i.CONFLICT) return "not-empty";
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return "success"
    }
    async punishAdminAllianceMembers(e, t) {
      const r = await this.request(`/staff/dashboard/alliances/${e}/punish-members`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: t.userIds,
          punishmentType: t.punishmentType,
          reason: t.reason,
          ticketId: t.ticketId ?? "",
          notes: t.notes ?? ""
        })
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status)
    }
    async giveAllianceAdmin(e) {
      const t = await this.request("/alliance/give-admin", {
        body: JSON.stringify({
          promotedUserId: e
        }),
        method: "POST",
        credentials: "include"
      });
      if (t.status !== i.OK) throw t.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async banAllianceUser(e) {
      const t = await this.request("/alliance/ban", {
        body: JSON.stringify({
          bannedUserId: e
        }),
        method: "POST",
        credentials: "include"
      });
      if (t.status !== i.OK) throw t.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
    async equipFlag(e) {
      if ((await this.request(`/flag/equip/${e}`, {
          method: "POST",
          credentials: "include"
        })).status !== i.OK) throw new Error(a.unexpected_server_error())
    }
    async unbanAllianceUser(e) {
      const t = await this.request("/alliance/unban", {
        body: JSON.stringify({
          unbannedUserId: e
        }),
        method: "POST",
        credentials: "include"
      });
      if (t.status !== i.OK) throw t.status === i.FORBIDDEN ? new Error(a.you_are_not_allowed_to_do_this()) : new Error(a.unexpected_server_error())
    }
  }
}

function hn(n) {
  return class extends n {
    async getUserAnticheat(e) {
      const t = await this.request(`/staff/dashboard/users/anticheat?id=${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return await t.json()
    }
    async getAnticheatStats(e, t) {
      const r = await this.request(`/staff/dashboard/anticheat/stats?from=${e}&to=${t}`, {
        method: "GET",
        credentials: "include"
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return r.json()
    }
    async getAnticheatSignals(e, t) {
      const r = await this.request(`/staff/dashboard/anticheat/signals?from=${e}&to=${t}`, {
        method: "GET",
        credentials: "include"
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return r.json()
    }
    async getAnticheatUserJourney(e, t, r) {
      const s = await this.request(`/staff/dashboard/anticheat/user/${e}?from=${t}&to=${r}`, {
        method: "GET",
        credentials: "include"
      });
      if (s.status !== i.OK) throw new l(a.unexpected_server_error(), s.status);
      return s.json()
    }
    async getAnticheatSignalAnalysis(e, t, r) {
      const s = await this.request(`/staff/dashboard/anticheat/signal/${encodeURIComponent(e)}?from=${encodeURIComponent(t)}&to=${encodeURIComponent(r)}`, {
        method: "GET",
        credentials: "include"
      });
      if (s.status !== i.OK) throw new l(a.unexpected_server_error(), s.status);
      return s.json()
    }
  }
}

function _n(n) {
  return class extends n {
    async autoReviewBan(e) {
      const t = await this.request("/staff/dashboard/users/auto-review-ban", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: e
        })
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return await t.json()
    }
    async getUserAppeals(e) {
      const t = new URLSearchParams;
      t.set("userId", String(e.userId)), t.set("kind", e.kind), e.page !== void 0 && t.set("page", String(e.page)), e.pageSize !== void 0 && t.set("pageSize", String(e.pageSize)), e.sortBy && t.set("sortBy", e.sortBy), e.sortDir && t.set("sortDir", e.sortDir);
      const r = await this.request(`/staff/dashboard/users/appeals?${t.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      const s = await r.json(),
        o = Array.isArray(s == null ? void 0 : s.appeals) ? s.appeals : [],
        c = typeof(s == null ? void 0 : s.total) == "number" ? s.total : o.length;
      return {
        appeals: o,
        total: c
      }
    }
    async submitBanAppeal(e, t) {
      const r = JSON.stringify(t ? {
          message: e,
          ticketId: t
        } : {
          message: e
        }),
        s = await j.getHeaders(r),
        o = await this.request("/report/appeal", {
          method: "POST",
          credentials: "include",
          body: r,
          headers: s
        });
      if (o.status === i.FORBIDDEN) {
        const c = await o.json();
        if ((c == null ? void 0 : c.error) === "challenge-required" && c.tier) {
          if (await te(c.tier)) return this.submitBanAppeal(e, t);
          throw new l(a.challenge_verification_not_completed(), o.status)
        }
      }
      if (o.status !== i.OK && o.status !== i.ALREADY_REPORTED) throw new l(a.unexpected_server_error(), o.status);
      return o.status
    }
    async getOpenAppeals() {
      const e = await this.request("/staff/appeals/get", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      return e.json()
    }
    async postSolveAppeal(e, t) {
      const r = await this.request(`/staff/appeals/${e}/handle`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          approved: t
        })
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return await r.json()
    }
    async getUserLastAppeal() {
      const e = await this.request("/me/last-appeal", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      const t = await e.json();
      return (t == null ? void 0 : t.appealDate) ?? null
    }
    async assignAppeals() {
      const e = await this.request("/staff/appeals/assign", {
        method: "POST",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      return await e.json()
    }
    async getPendingAppealsCount() {
      const e = await this.request("/staff/appeals/open_count", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      const t = await e.json();
      return (t == null ? void 0 : t.appeals) ?? 0
    }
  }
}

function wn(n) {
  return class extends n {
    async getUserFrames() {
      const e = await this.request("/me/frames", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      return e.json()
    }
    async postEquipUserFrame(e) {
      const t = await this.request(`/me/frames/equip/${e}`, {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status)
    }
    async getUserBadges() {
      const e = await this.request("/me/badges", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      return e.json()
    }
    async postEquipUserBadge(e) {
      const t = await this.request("/me/badges/equip", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(e)
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status)
    }
    async getStoreFrames() {
      const e = await this.request("/store/frames", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      return e.json()
    }
    async postBuyUserFrame(e) {
      const t = await this.request(`/store/frames/buy/${e}`, {
        method: "POST",
        credentials: "include"
      });
      if (t.status === i.NOT_FOUND) throw new Error(a.couldnt_complete_the_purchase_this_item_doesnt_exist());
      if (t.status === i.FORBIDDEN) throw new Error(a.you_do_not_have_enough_droplets_to_buy_this_item());
      if (t.status === i.CONFLICT) throw new Error(a.you_already_have_this_item());
      if (t.status !== i.OK) throw new Error(a.unexpected_server_error())
    }
    async postEquipCosmetics(e) {
      const t = await this.request("/me/cosmetic/equip", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(e)
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status)
    }
    async getStoreNameCosmetics() {
      const e = await this.request("/store/name", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      return await e.json()
    }
    async postBuyCosmetic(e) {
      const t = await this.request(`/store/name/buy/${e}`, {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status)
    }
    async getMyNameCosmetics() {
      const e = await this.request("/me/cosmetics/name", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      return await e.json()
    }
    async postCreateFrame(e) {
      const t = new FormData;
      t.append("name", e.name), e.image && t.append("image", e.image), e.assetKey && t.append("assetKey", e.assetKey), t.append("description", e.description), t.append("rarity", e.rarity), t.append("priceCurrency", e.priceCurrency), t.append("purchasable", e.purchasable.toString()), t.append("allowedRoles", JSON.stringify(e.allowedRoles));
      const r = await this.request("/staff/store-manager/frames", {
        method: "POST",
        credentials: "include",
        body: t
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return r.json()
    }
    async postCreateFont(e) {
      const t = await this.request("/staff/store-manager/fonts", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(e)
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return t.json()
    }
    async postCreateStyle(e) {
      const t = await this.request("/staff/store-manager/styles", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(e)
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return t.json()
    }
    async getAdminCosmetics(e) {
      const t = new URLSearchParams({
        page: String(e.page),
        pageSize: String(e.pageSize)
      });
      e.type && t.set("type", e.type), e.search && t.set("search", e.search), e.visibility && t.set("visibility", e.visibility);
      const r = await this.request(`/staff/store-manager/cosmetics?${t.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return r.json()
    }
    async putAdminCosmetic(e, t) {
      const r = await this.request(`/staff/store-manager/cosmetics/${e}`, {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return r.json()
    }
    async deleteAdminCosmetic(e) {
      const t = await this.request(`/staff/store-manager/cosmetics/${e}`, {
        method: "DELETE",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status)
    }
    async getAdminBadges(e) {
      const t = new URLSearchParams;
      e && t.set("search", e);
      const r = t.size ? `?${t.toString()}` : "",
        s = await this.request(`/staff/store-manager/badges${r}`, {
          method: "GET",
          credentials: "include"
        });
      if (s.status !== i.OK) throw new l(a.unexpected_server_error(), s.status);
      return s.json()
    }
    async postAdminBadge(e) {
      const t = await this.request("/staff/store-manager/badges", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(e)
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return t.json()
    }
    async putAdminBadge(e, t) {
      const r = await this.request(`/staff/store-manager/badges/${e}`, {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return r.json()
    }
    async deleteAdminBadge(e) {
      const t = await this.request(`/staff/store-manager/badges/${e}`, {
        method: "DELETE",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status)
    }
    async getR2Images(e) {
      const t = new URLSearchParams({
          page: String(e.page),
          pageSize: String(e.pageSize)
        }),
        r = await this.request(`/staff/store-manager/images?${t.toString()}`, {
          method: "GET",
          credentials: "include"
        });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return r.json()
    }
    async postUploadR2Image(e) {
      const t = new FormData;
      e.name && t.append("name", e.name), t.append("image", e.image);
      const r = await this.request("/staff/store-manager/images", {
        method: "POST",
        credentials: "include",
        body: t
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return r.json()
    }
    async deleteR2Image(e) {
      const t = await this.request(`/staff/store-manager/images/${e}`, {
        method: "DELETE",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status)
    }
  }
}
const B = {
  day: 1440 * 60 * 1e3,
  hour: 3600 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
};

function ps(n) {
  const e = Math.floor(n / B.hour);
  n -= e * B.hour;
  const t = Math.floor(n / B.minute);
  n -= t * B.minute;
  const s = Math.floor(n / B.second).toString().padStart(2, "0");
  return e > 0 ? `${e}:${t.toString().padStart(2,"0")}:${s}` : `${t}:${s}`
}

function ys(n) {
  const e = n.getFullYear(),
    t = String(n.getMonth() + 1).padStart(2, "0"),
    r = String(n.getDate()).padStart(2, "0"),
    s = String(n.getHours()).padStart(2, "0"),
    o = String(n.getMinutes()).padStart(2, "0"),
    c = String(n.getSeconds()).padStart(2, "0");
  return `${e}-${t}-${r} ${s}:${o}:${c}`
}
const mn = 30 * B.minute;

function gn(n) {
  return class extends n {
    constructor() {
      super(...arguments);
      g(this, "lastHotspotRequestAt", 0)
    }
    async leaderboardPlayers(t) {
      const r = await this.request(`/leaderboard/player/${t}`);
      if (r.status !== i.OK) throw new Error(a.leaderboard_disabled_temporarily());
      return r.json()
    }
    async leaderboardAlliances(t) {
      const r = await this.request(`/leaderboard/alliance/${t}`);
      if (r.status !== i.OK) throw new Error(a.leaderboard_disabled_temporarily());
      return r.json()
    }
    async leaderboardRegions(t, r = 0) {
      const s = await this.request(`/leaderboard/region/${t}/${r}`);
      if (s.status === i.OK) return s.json();
      throw new Error(a.leaderboard_disabled_temporarily())
    }
    async leaderboardRegionPlayers(t, r) {
      const s = await this.request(`/leaderboard/region/players/${t}/${r}`);
      if (s.status === i.OK) return s.json();
      throw new Error(a.leaderboard_disabled_temporarily())
    }
    async leaderboardRegionAlliances(t, r) {
      const s = await this.request(`/leaderboard/region/alliances/${t}/${r}`);
      if (s.status === i.OK) return s.json();
      throw new Error(a.leaderboard_disabled_temporarily())
    }
    async leaderboardCountries(t) {
      const r = await this.request(`/leaderboard/country/${t}`, {
        credentials: "include"
      });
      if (r.status === i.OK) return r.json();
      throw new Error(a.leaderboard_disabled_temporarily())
    }
    refreshHotspotsIfStale() {
      Date.now() - this.lastHotspotRequestAt < mn || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
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
      const r = await this.request(`/s${t}/tile/random`);
      if (r.status !== i.OK) throw new Error(a.unexpected_server_error());
      return r.json()
    }
  }
}

function pn(n) {
  return class extends n {
    async postCaptchaSession(e, t = "include") {
      const r = await this.request("/anticheat/captcha/session", {
        method: "POST",
        credentials: t,
        body: JSON.stringify(e),
        headers: {
          "x-fp": await ze()
        }
      });
      if (!r.ok) throw r.status === 500 ? new l(a.unexpected_server_error(), r.status) : new l(a.invalid_captcha(), r.status);
      return r.json()
    }
    async postTelemetry(e, t) {
      return (await this.request("/frontend/telemetry", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          event: e,
          data: t
        })
      })).status === i.OK
    }
  }
}
const Es = {
    griefing: a.griefing(),
    "multi-accounting": a.multi_accounting(),
    "hate-speech": a.hate_speech(),
    bot: a.bot(),
    doxxing: a.doxxing(),
    "inappropriate-content": a.inappropriate_content(),
    other: a.breaking_the_rules()
  },
  bs = {
    doxxing: a.doxxing_description(),
    "hate-speech": a.hate_speech_description(),
    griefing: a.griefing_description(),
    "multi-accounting": a.multi_accounting_description(),
    bot: a.bot_description(),
    "inappropriate-content": a.inappropriate_content_description(),
    other: a.breaking_the_rules_description()
  },
  Os = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  ot = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  vs = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  yn = 365 * B.day;

function gt(n) {
  if (!n) return null;
  const t = (n instanceof Date ? n : new Date(n)).getTime();
  return Number.isFinite(t) ? t : null
}

function Ts(n, e = Date.now()) {
  const t = gt(n);
  return t === null ? !1 : t - e >= yn
}

function As(n, e = Date.now()) {
  const t = gt(n);
  if (t === null || t <= e) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const r = Math.max(0, Math.ceil((t - e) / 6e4)),
    s = Math.floor(r / 1440),
    o = Math.floor(r % 1440 / 60),
    c = r % 60;
  return {
    days: s,
    hours: o,
    minutes: c
  }
}

function En(n) {
  return class extends n {
    async getModeratorTickets() {
      const e = await this.request("/staff/tickets/get", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      const t = await e.json();
      for (const r of t.tickets) r.reports.sort((s, o) => ot[s.reason] - ot[o.reason]);
      return t
    }
    async countMyTicketsClosedToday() {
      const e = await this.request("/staff/tickets/closed-today", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      return e.json()
    }
    async getOpenTicketsCount() {
      const e = await this.request("/staff/tickets/open_count", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      const {
        tickets: t
      } = await e.json();
      return t
    }
    async assignNewTickets() {
      const e = await this.request("/staff/tickets/assign", {
        method: "POST",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      return e.json()
    }
    async setTicketStatus(e, t, r, s, o) {
      const c = await this.request("/staff/tickets/set-status", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          ticketId: e,
          status: t,
          selectedReportId: r ?? void 0,
          assignedReason: s,
          ignoreReason: o
        })
      });
      if (c.status !== i.OK && c.status !== i.BAD_REQUEST) throw new l(a.unexpected_server_error(), c.status)
    }
    async getLastResolvedTicket() {
      const e = await this.request("/staff/tickets/reversals/last-resolved", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      return (await e.json()).ticket
    }
    async getTicketReversalTicketInfo(e) {
      const t = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return (await t.json()).ticket
    }
    async getReporterReportHistory(e, t) {
      const r = await this.request(`/staff/tickets/reporter-history?ticketId=${encodeURIComponent(e)}&reporterId=${t}`, {
        method: "GET",
        credentials: "include"
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return (await r.json()).reports
    }
    async createTicketReversal(e) {
      const t = await this.request("/staff/tickets/reversals", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(e)
      });
      if (t.status === i.CONFLICT) {
        const r = await t.json().catch(() => ({}));
        throw (r == null ? void 0 : r.error) === "reversal_already_pending" ? new l(a.ticket_reversal_already_pending(), i.CONFLICT) : new l(a.unexpected_server_error(), i.CONFLICT)
      }
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return t.json()
    }
    async reSolveTicket(e) {
      const t = await this.request("/staff/tickets/re-solve", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(e)
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return t.json()
    }
    async listTicketReversals(e = {}) {
      const t = new URLSearchParams;
      e.status && t.set("status", e.status), e.page != null && t.set("page", String(e.page)), e.pageSize != null && t.set("pageSize", String(e.pageSize));
      const r = `/staff/tickets/reversals${t.toString()?`?${t.toString()}`:""}`,
        s = await this.request(r, {
          method: "GET",
          credentials: "include"
        });
      if (s.status !== i.OK) throw new l(a.unexpected_server_error(), s.status);
      return (await s.json()).reversals ?? []
    }
    async getTicketReversal(e) {
      const t = await this.request(`/staff/tickets/reversals/${e}`, {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return (await t.json()).reversal
    }
    async reviewTicketReversal(e, t, r) {
      const s = await this.request(`/staff/tickets/reversals/${e}/review`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          decision: t,
          notes: r
        })
      });
      if (s.status === i.FORBIDDEN) throw new l(a.ticket_reversal_cannot_self_review(), i.FORBIDDEN);
      if (s.status === i.CONFLICT) throw new l(a.ticket_reversal_already_reviewed(), i.CONFLICT);
      if (s.status !== i.OK) throw new l(a.unexpected_server_error(), s.status)
    }
    async getOpenTicketsSummary() {
      const e = await this.request("/staff/dashboard/summary/counters/tickets", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      return e.json()
    }
    async getOpenReportsSummary() {
      const e = await this.request("/staff/dashboard/summary/counters/reports", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      return e.json()
    }
    async getBanAppealStats(e, t) {
      const r = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(e)}&end=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      const s = await r.json();
      return {
        items: s.items ?? [],
        globals: s.globals
      }
    }
    async getClosedTicketsByMod(e, t) {
      const r = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(e)}&end=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return (await r.json()).items.map(o => ({
        ...o,
        suspensionRate: (o.ban + o.timeout) / o.total
      }))
    }
    async getClosedReportsByMod(e, t) {
      const r = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(e)}&end=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return (await r.json()).items.map(o => ({
        ...o,
        suspensionRate: (o.ban + o.timeout) / o.total
      }))
    }
    async getMultipleUsersInfoById(e) {
      const t = await this.request("/staff/tools/select-area/users", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userIds: e
        })
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return t.json()
    }
    async getUserInfoFull(e) {
      const t = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.NOT_FOUND) {
        if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
        return t.json()
      }
    }
    async getUsersReportInfo(e) {
      const t = e.filter(s => Number.isFinite(s) && s > 0);
      if (t.length === 0) return [];
      const r = await this.request(`/staff/dashboard/users/info-batch?ids=${encodeURIComponent(t.join(","))}`, {
        method: "GET",
        credentials: "include"
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return r.json()
    }
    async getUserInfoByEmail(e) {
      const t = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.NOT_FOUND) {
        if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
        return t.json()
      }
    }
    async getUserPunishments(e) {
      const t = await this.request(`/staff/dashboard/users/punishments?userId=${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return (await t.json()).punishments ?? []
    }
    async getPunishmentTicket(e) {
      const t = await this.request(`/staff/dashboard/users/punishment-ticket?ticketId=${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return (await t.json()).ticket
    }
    async overturnPunishment(e) {
      const t = await this.request("/staff/dashboard/users/overturn-punishment", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          punishmentId: e
        })
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status)
    }
    async getUserNotes(e, t) {
      const r = t == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(e)}` : `/staff/appeals/notes?userId=${encodeURIComponent(e)}`,
        s = await this.request(r, {
          method: "GET",
          credentials: "include"
        });
      if (s.status !== i.OK) throw new l(a.unexpected_server_error(), s.status);
      return s.json()
    }
    async addUserNote(e, t, r) {
      const s = r == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(e)}` : `/staff/appeals/notes?userId=${encodeURIComponent(e)}`,
        o = await this.request(s, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            userId: e,
            note: t
          })
        });
      if (o.status !== i.OK) throw new l(a.unexpected_server_error(), o.status)
    }
    async getUserPermissions(e) {
      const t = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return t.json()
    }
    async setUserPermissions(e, t) {
      const r = await this.request("/staff/dashboard/permissions/set", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: e,
          permissions: Array.from(t)
        })
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      const s = await r.json();
      return Array.isArray(s == null ? void 0 : s.permissions) ? s.permissions : []
    }
    async getUserPurchases(e) {
      const t = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      const r = await t.json();
      return (Array.isArray(r == null ? void 0 : r.purchases) ? r.purchases : []).map(o => {
        const c = o.is_dollar ?? o.isDollar ?? o.currency ?? o.Currency ?? 0;
        let d;
        if (typeof c == "string") {
          const m = c.toLowerCase();
          d = m === "usd" || m === "dollar" || m === "true"
        } else typeof c == "number" ? d = c !== 0 : d = !!c;
        const u = typeof o.createdAt == "string" ? o.createdAt : o.CreatedAt ? new Date(o.CreatedAt).toISOString() : "",
          f = o.product_variant ?? o.productVariant,
          T = f == null || f === "" ? null : Number(f);
        return {
          product_name: String(o.productName ?? o.product_name ?? ""),
          amount: Number(o.amount ?? 0),
          price: Number(o.price ?? 0),
          is_dollar: d,
          created_at: u,
          product_variant: Number.isInteger(T) ? T : null
        }
      })
    }
    async getUserTickets(e, t) {
      if (t === "appeals" && (e.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
      const r = new URLSearchParams;
      r.set("userId", String(e.userId)), r.set("kind", String(e.kind)), r.set("page", String(e.page ?? 0)), r.set("pageSize", String(e.pageSize ?? 20)), e.sortBy && r.set("sortBy", e.sortBy), e.sortDir && r.set("sortDir", e.sortDir), e.status && r.set("status", e.status), e.reason && r.set("reason", e.reason), t === "appeals" && r.set("appealId", String(e.appealId));
      const s = t === "appeals" ? `/staff/appeals/tickets?${r.toString()}` : `/staff/dashboard/users/tickets?${r.toString()}`,
        o = await this.request(s, {
          method: "GET",
          credentials: "include"
        });
      if (o.status !== i.OK) throw new l(a.unexpected_server_error(), o.status);
      const c = await o.json(),
        d = Array.isArray(c == null ? void 0 : c.tickets) ? c.tickets : [],
        u = typeof(c == null ? void 0 : c.total) == "number" ? c.total : d.length;
      return {
        tickets: d,
        total: u
      }
    }
    async getAllTickets(e) {
      const t = new URLSearchParams;
      t.set("page", String(e.page ?? 0)), t.set("pageSize", String(e.pageSize ?? 20)), e.modId && t.set("modId", String(e.modId)), e.sortBy && t.set("sortBy", e.sortBy), e.sortDir && t.set("sortDir", e.sortDir), e.status && t.set("status", e.status), e.reason && t.set("reason", e.reason), e.role && t.set("role", e.role), e.reviewed && t.set("reviewed", e.reviewed), e.reSolvedOnly && t.set("reSolvedOnly", "true"), e.hideSystem && t.set("hideSystem", "true"), e.dateFrom && t.set("dateFrom", e.dateFrom), e.dateTo && t.set("dateTo", e.dateTo);
      const r = await this.request(`/staff/dashboard/all-tickets?${t.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      const s = await r.json(),
        o = Array.isArray(s == null ? void 0 : s.tickets) ? s.tickets : [],
        c = typeof(s == null ? void 0 : s.total) == "number" ? s.total : o.length,
        d = typeof(s == null ? void 0 : s.matchedTotal) == "number" ? s.matchedTotal : c,
        u = typeof(s == null ? void 0 : s.reviewedTotal) == "number" ? s.reviewedTotal : 0;
      return {
        tickets: o,
        total: c,
        matchedTotal: d,
        reviewedTotal: u
      }
    }
    async reviewTicket(e) {
      const t = await this.request("/staff/dashboard/all-tickets/review", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(e)
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return t.json()
    }
    async getTicketOverturnInfo(e) {
      const t = await this.request(`/staff/dashboard/all-tickets/overturn-info?ticketId=${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return t.json()
    }
    async getModerationTranslate(e, t) {
      const r = t == "tickets" ? "/staff/tickets/translate" : "/staff/appeals/translate",
        s = await this.request(r, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            text: e
          })
        });
      if (s.status !== i.OK) throw new l(a.unexpected_server_error(), s.status);
      const o = await s.json();
      return o == null ? void 0 : o.translation
    }
    mapTicketsToReportRows(e, t) {
      var s, o, c, d, u;
      const r = [];
      for (const f of e) {
        const T = f.status ?? "open";
        if (t === "received") {
          for (const m of f.reports) r.push({
            id: String(m.id),
            ticketId: String(f.id),
            createdAt: m.createdAt ?? f.createdAt,
            byUser: {
              id: Number(m.reportedBy),
              name: String(m.reportedByName ?? m.reportedBy),
              picture: m.reportedByPicture ?? null
            },
            reason: String(m.reason),
            status: T
          });
          continue
        }
        if (t === "sent") {
          for (const m of f.reports) f.reportedUser && r.push({
            id: String(m.id),
            ticketId: String(f.id),
            createdAt: m.createdAt ?? f.createdAt,
            toUser: {
              id: Number(f.reportedUser.id),
              name: String(f.reportedUser.name),
              picture: f.reportedUser.picture ?? null
            },
            reason: String(m.reason),
            status: T
          });
          continue
        }
        r.push({
          id: String(f.id),
          ticketId: String(f.id),
          createdAt: f.createdAt,
          handledBy: f.status && f.status !== "open" ? {
            id: ((s = f.handledBy) == null ? void 0 : s.id) ?? 0,
            name: ((o = f.handledBy) == null ? void 0 : o.name) ?? "Moderator",
            picture: ((c = f.handledBy) == null ? void 0 : c.picture) ?? null
          } : {
            id: 0,
            name: "—",
            picture: null
          },
          reason: String(((u = (d = f.reports) == null ? void 0 : d[0]) == null ? void 0 : u.reason) ?? "other"),
          status: T
        })
      }
      return r.sort((f, T) => new Date(T.createdAt).getTime() - new Date(f.createdAt).getTime()), r
    }
    async getModeratorClosedTicketStats(e) {
      const t = new URLSearchParams({
          id: String(e)
        }).toString(),
        r = await this.request(`/staff/dashboard/users/tickets/stats?${t}`, {
          method: "GET",
          credentials: "include"
        });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return r.json()
    }
    async getTicketsKpi(e) {
      const t = new URLSearchParams;
      t.set("start", e.startIso), t.set("end", e.endIso), e.compare && t.set("compare", "1"), e.userId != null && t.set("userId", String(e.userId)), e.allianceId != null && t.set("allianceId", String(e.allianceId)), e.reason != null && t.set("reason", e.reason), e.punishment != null && t.set("punishment", e.punishment), e.granularity != null && t.set("granularity", e.granularity);
      const r = await this.request(`/staff/dashboard/kpi/tickets?${t.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return r.json()
    }
  }
}

function bn(n) {
  return class extends n {
    async getNotificationCount() {
      const e = await this.request("/notification/count", {
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      const {
        count: t
      } = await e.json();
      return t
    }
    async getNotificationPage(e) {
      const r = `/notification/page${e!==void 0?`?cursor=${encodeURIComponent(e)}`:""}`,
        s = await this.request(r, {
          credentials: "include"
        });
      if (s.status !== i.OK) throw new l(a.unexpected_server_error(), s.status);
      return s.json()
    }
    async postNotificationMarkRead(e) {
      const t = await this.request("/notification/mark-read", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          notificationIds: e
        })
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return t.json()
    }
    async postNotificationMarkReadAll() {
      const e = await this.request("/notification/mark-read/all", {
        method: "POST",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      return e.json()
    }
  }
}
const On = ["droplets", "prism"];

function Ss(n) {
  return On.map(e => ({
    currency: e,
    amount: n.reduce((t, r) => t + (r.currency === e ? r.amount : 0), 0)
  })).filter(e => e.amount > 0)
}

function vn(n) {
  return class extends n {
    async driveStatus() {
      const e = await this.request("/drive/status", {
        credentials: "include"
      });
      return e.status !== i.OK ? !1 : !!(await e.json()).connected
    }
    async driveConnect(e) {
      const t = await this.request("/drive/connect", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          code: e
        })
      });
      if (t.status !== i.OK) throw new Error(`drive connect failed: ${t.status}`);
      return t.json()
    }
    async driveToken() {
      const e = await this.request("/drive/token", {
        credentials: "include",
        throwOnStatus: !1
      });
      if (e.status === i.CONFLICT) return null;
      if (e.status !== i.OK) throw new Error(`drive token failed: ${e.status}`);
      return e.json()
    }
    async driveDisconnect() {
      await this.request("/drive/disconnect", {
        method: "POST",
        credentials: "include",
        throwOnStatus: !1
      })
    }
    async createEmbeddedCheckout(e) {
      const t = await this.request("/payment/create-checkout-session", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          lookup_key: e
        })
      });
      if (t.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(a.account_suspended_message());
      if (t.status !== i.OK) throw new Error(await t.text());
      return t.json()
    }
    async refreshStripeSession(e) {
      return {
        credited: (await this.request(`/payment/refresh-session/${e}`, {
          method: "POST",
          credentials: "include",
          throwOnStatus: !1
        })).ok
      }
    }
    async createFastspringSession(e) {
      const t = await this.request("/payment/fastspring/session", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          lookup_key: e
        })
      });
      if (t.status !== i.OK) throw new Error(`fastspring session failed: ${t.status}`);
      return await t.json()
    }
    async refreshFastspringOrder(e) {
      const t = await this.request(`/payment/fastspring/refresh-order/${e}`, {
        method: "POST",
        credentials: "include"
      });
      if (!t.ok) throw new Error(`fastspring refresh failed: ${t.status}`);
      return await t.json()
    }
    async getLastFastspringOrder() {
      const e = await this.request("/payment/fastspring/orders/last", {
        credentials: "include"
      });
      if (e.status === i.NOT_FOUND) return null;
      if (!e.ok) throw new Error(`Failed to get last FastSpring order: ${e.status} ${e.statusText}`);
      return await e.json()
    }
    async markFastspringOrderAsRead(e) {
      const t = await this.request(`/payment/fastspring/orders/${e}/mark-as-read`, {
        method: "PATCH",
        credentials: "include"
      });
      if (!t.ok) throw new Error(`Failed to update FastSpring order: ${t.status} ${t.statusText}`)
    }
    async purchase(e) {
      const t = await this.request("/purchase", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          product: e
        })
      });
      if (t.status !== i.OK) throw t.status === i.NOT_FOUND ? new Error(a.couldnt_complete_the_purchase_this_item_doesnt_exist()) : t.status === i.FORBIDDEN ? new Error(a.you_do_not_have_enough_droplets_to_buy_this_item()) : t.status === i.CONFLICT ? new Error(a.you_already_have_this_item()) : new Error(a.unexpected_server_error())
    }
    async getPlayAccountId() {
      const e = await this.request("/payment/play/account-id", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new Error(a.unexpected_server_error());
      return e.json()
    }
    async verifyPlayPurchase(e) {
      const t = await this.request("/payment/play/verify", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(e)
      });
      if (t.status === i.BAD_REQUEST) {
        const r = await t.json().catch(() => ({}));
        throw new Error((r == null ? void 0 : r.error) ?? "Invalid Play purchase")
      }
      if (t.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(a.account_suspended_message());
      if (t.status !== i.OK) throw new Error(a.unexpected_server_error());
      return t.json()
    }
    async verifyPendingPlayPurchases() {
      const e = await this.request("/payment/play/verify-pending", {
        method: "POST",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new Error(a.unexpected_server_error());
      return e.json()
    }
    async getPlayClaimStatus(e) {
      const t = await this.request(`/payment/play/claim/${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (t.status === i.NOT_FOUND) return {
        status: "unknown",
        grant: {
          currency: "droplets",
          amount: 0
        }
      };
      if (t.status !== i.OK) throw new Error(a.unexpected_server_error());
      return t.json()
    }
    async listPlayPurchaseHistory() {
      const e = await this.request("/payment/play/history", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new Error(a.unexpected_server_error());
      return e.json()
    }
  }
}

function ct(n, e) {
  const t = {};
  for (const r of n) {
    const s = e(r),
      o = t[s];
    o ? o.push(r) : t[s] = [r]
  }
  return t
}

function Is(n, e) {
  const t = {};
  for (const r of n) {
    const s = e(r);
    t[s] = r
  }
  return t
}

function Tn(n) {
  return class extends n {
    async paint(e) {
      const t = ct(e, d => `t=(${d.tile[0]},${d.tile[1]}),s=${d.season}`),
        r = {
          season: e[0].season,
          tiles: Object.values(t).map(d => ({
            x: d[0].tile[0],
            y: d[0].tile[1],
            pixels: {
              x: d.map(u => u.pixel[0]),
              y: d.map(u => u.pixel[1]),
              colors: d.map(u => u.colorIdx)
            }
          }))
        },
        s = JSON.stringify(r),
        o = await j.getHeaders(s),
        c = await this.request("/paint", {
          method: "POST",
          body: s,
          headers: o,
          credentials: "include"
        });
      if (c.status !== i.OK) {
        if (c.status === i.UNAUTHORIZED) throw new Error(a.you_need_to_be_logged_in_to_paint());
        if (c.status === i.FORBIDDEN) {
          if (c.headers.get("cf-mitigated") === "challenge") throw new Error(a.ddos_message());
          const d = await c.json().catch(() => ({}));
          switch (d == null ? void 0 : d.error) {
            case "timeout": {
              const u = new Date(Date.now() + ((d == null ? void 0 : d.durationMs) ?? 0));
              throw new Error(a.your_account_was_suspended_until({
                until: u.toLocaleString()
              }))
            }
            case "refresh":
              throw new Error(a.refresh_page());
            case "color-not-owned":
              throw new Error(a.paint_color_not_owned());
            case "event-pixel-present":
              throw new Error(a.cannot_paint_over_event_pixel());
            case "challenge-required": {
              if (d.tier) {
                if (await te(d.tier)) return this.paint(e);
                throw new Error(a.challenge_verification_not_completed())
              }
              throw console.error("Challenge required but no tier provided", d), new Error(a.unexpected_server_error())
            }
            case "verification-required": {
              const f = (await Je().get()).sealed_result;
              if (!f) throw new Error(a.unexpected_server_error());
              return await this.verifyAnticheat(f), this.paint(e)
            }
          }
          throw await J.refresh(), typeof(d == null ? void 0 : d.charges) == "number" ? new Error(a.you_do_not_have_enough_charges_to_paint()) : new Error(a.unexpected_server_error())
        }
        throw new Error(a.unexpected_server_error())
      }
    }
    async selectAreaClear(e, t) {
      return this.sendPaintRequests(e, (r, s, o) => `/staff/tools/select-area/clear/s${r}/pixel/${s}/${o}`, t)
    }
    async createReverseSession(e) {
      const t = await this.request("/staff/tools/select-area/reverse/session", {
        method: "POST",
        body: e.buffer,
        headers: {
          "Content-Type": "application/octet-stream"
        },
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return t.json()
    }
    async getReverseTimestamps(e, t = {}) {
      const {
        mode: r = "depth",
        beforeDepth: s,
        beforeTimestamp: o
      } = t, c = await this.request("/staff/tools/select-area/reverse/timestamps", {
        method: "POST",
        body: JSON.stringify({
          sessionId: e,
          mode: r,
          beforeDepth: s,
          beforeTimestamp: o
        }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (c.status !== i.OK) throw new l(a.unexpected_server_error(), c.status);
      return c.json()
    }
    async getReversePreview(e, t) {
      const {
        mode: r = "depth",
        snapshotDepth: s,
        timestamp: o
      } = t, c = await this.request("/staff/tools/select-area/reverse/preview", {
        method: "POST",
        body: JSON.stringify({
          sessionId: e,
          mode: r,
          snapshotDepth: s,
          timestamp: o
        }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (c.status !== i.OK) throw new l(a.unexpected_server_error(), c.status);
      return c.json()
    }
    async getReverseTimelapse(e, t) {
      const r = await this.request("/staff/tools/select-area/reverse/timelapse", {
        method: "POST",
        body: JSON.stringify({
          sessionId: e,
          paceMode: t.paceMode,
          fps: t.fps,
          durationSeconds: t.durationSeconds,
          maxFrameCount: t.maxFrameCount,
          beforeTimestamp: t.beforeTimestamp ?? 0
        }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (r.status === i.BAD_REQUEST) {
        const s = await r.json(),
          o = (s == null ? void 0 : s.error) ?? "";
        throw o === "timelapse_too_many_events" ? new l(a.select_area_timelapse_history_too_large(), i.BAD_REQUEST) : new l(typeof o == "string" && o ? o : a.unexpected_server_error(), i.BAD_REQUEST)
      }
      if (r.status !== i.OK) throw new l(a.unexpected_server_error(), r.status);
      return r.arrayBuffer()
    }
    async applyReverse(e, t) {
      const {
        mode: r = "depth",
        snapshotDepth: s,
        timestamp: o
      } = t, c = await this.request("/staff/tools/select-area/reverse/apply", {
        method: "POST",
        body: JSON.stringify({
          sessionId: e,
          mode: r,
          snapshotDepth: s,
          timestamp: o
        }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (c.status !== i.OK) throw new l(a.unexpected_server_error(), c.status);
      return c.json()
    }
    async sendPaintRequests(e, t, r, s) {
      const o = ct(e, u => `t=(${u.tile[0]},${u.tile[1]}),s=${u.season}`),
        d = (await Promise.all(Object.values(o).map(async u => {
          const [f, T] = u[0].tile, m = u[0].season, x = {
            colors: u.map(N => N.colorIdx),
            coords: u.flatMap(N => N.pixel),
            csid: r
          }, D = JSON.stringify(x), S = t(m, f, T), I = await j.getHeaders(D);
          return this.request(S, {
            method: "POST",
            body: D,
            headers: I,
            credentials: "include"
          })
        }))).filter(u => u.status !== i.OK);
      if (d.length) {
        const u = d[0];
        if (u.status === i.UNAUTHORIZED) throw new Error(a.you_need_to_be_logged_in_to_paint());
        if (u.status === i.FORBIDDEN) {
          if (u.headers.get("cf-mitigated") === "challenge") throw new Error(a.ddos_message());
          const f = await u.json().catch(() => ({}));
          switch (f == null ? void 0 : f.error) {
            case "timeout": {
              const T = new Date(Date.now() + ((f == null ? void 0 : f.durationMs) ?? 0));
              throw new Error(a.your_account_was_suspended_until({
                until: T.toLocaleString()
              }))
            }
            case "refresh":
              throw new Error(a.refresh_page());
            case "color-not-owned":
              throw new Error(a.paint_color_not_owned());
            case "event-pixel-present":
              throw new Error(a.cannot_paint_over_event_pixel())
          }
          throw await J.refresh(), typeof(f == null ? void 0 : f.charges) == "number" ? new Error(a.you_do_not_have_enough_charges_to_paint()) : new Error(a.unexpected_server_error())
        } else throw new Error(a.unexpected_server_error())
      }
    }
    async adminAutoPainterPaint(e, t, r) {
      const s = An(e),
        o = await Sn(s),
        c = new FormData;
      c.append("fingerprint", t), c.append("season", s.season.toString()), c.append("px0", s.offsetX.toString()), c.append("py0", s.offsetY.toString()), c.append("width", s.width.toString()), c.append("height", s.height.toString()), c.append("pixels", e.length.toString()), c.append("bitmap", o, "auto-painter.png"), c.append("userId", r.toString());
      const d = await this.request("/staff/tools/auto-painter/paint", {
        method: "POST",
        body: c,
        credentials: "include"
      });
      if (d.status === i.FORBIDDEN) {
        const u = await d.json().catch(() => null);
        if (typeof(u == null ? void 0 : u.charges) == "number") throw new Error(a.overlay_auto_paint_not_enough_charges({
          charges: Math.floor(u.charges),
          pixels: e.length
        }));
        const f = typeof(u == null ? void 0 : u.error) == "string" ? u.error.trim() : "";
        throw f && f !== "Forbidden" ? new Error(f) : new Error("Auto painter is restricted to administrators.")
      }
      if (d.status !== i.OK) throw new Error(a.unexpected_server_error());
      return d.json()
    }
    async getPixelInfo({
      season: e,
      tile: [t, r],
      pixel: [s, o]
    }) {
      const c = new URLSearchParams;
      c.set("x", String(s)), c.set("y", String(o));
      const d = await this.request(`/s${e}/pixel/${t}/${r}?${c.toString()}`, {
        credentials: "include"
      });
      if (d.status !== i.OK) {
        const u = await d.text();
        throw new Error(a.error_while_painting({
          err: u
        }))
      }
      return d.json()
    }
    async getPixelAreaInfo({
      season: e,
      tile: [t, r],
      p0: [s, o],
      p1: [c, d]
    }) {
      const u = await this.request(`/staff/tools/select-area/s${e}/${t}/${r}?x0=${s}&y0=${o}&x1=${c}&y1=${d}`, {
        credentials: "include"
      });
      if (u.status !== i.OK) {
        const S = await u.text();
        throw console.error("Error while fetching pixel area info", S), new Error(a.unexpected_server_error())
      }
      const f = await u.arrayBuffer(),
        T = new DataView(f),
        m = Math.floor(f.byteLength / 5),
        x = new Uint32Array(m),
        D = new Uint8Array(m);
      for (let S = 0; S < m; S++) {
        const I = S * 5;
        x[S] = T.getUint32(I, !0), D[S] = T.getUint8(I + 4)
      }
      return {
        paintedBy: x,
        colors: D
      }
    }
  }
}

function An(n) {
  var x, D;
  if (!n.length) throw new Error("Auto painter request does not contain any pixels.");
  const e = n[0].season;
  for (const S of n)
    if (S.season !== e) throw new Error("Auto painter requests cannot mix seasons.");
  const t = (x = Ke.seasons) == null ? void 0 : x[e];
  if (!t) throw new Error("Invalid season selected for auto painter request.");
  const r = t.tileSize;
  let s = Number.POSITIVE_INFINITY,
    o = Number.POSITIVE_INFINITY,
    c = Number.NEGATIVE_INFINITY,
    d = Number.NEGATIVE_INFINITY;
  const u = n.map(S => {
      const I = Math.round(S.tile[0] * r + S.pixel[0]),
        N = Math.round(S.tile[1] * r + S.pixel[1]);
      return I < s && (s = I), N < o && (o = N), I > c && (c = I), N > d && (d = N), {
        x: I,
        y: N,
        colorIdx: S.colorIdx
      }
    }),
    f = c - s + 1,
    T = d - o + 1;
  if (!Number.isFinite(f) || !Number.isFinite(T) || f <= 0 || T <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const m = new Uint8ClampedArray(f * T * 4);
  for (const {
      x: S,
      y: I,
      colorIdx: N
    }
    of u) {
    const q = (D = Ke.colors) == null ? void 0 : D[N];
    if (!q) throw new Error(`Unknown palette color index: ${N}`);
    const X = S - s,
      De = ((I - o) * f + X) * 4,
      [Ot, vt, Tt] = q.rgb;
    m[De] = Ot, m[De + 1] = vt, m[De + 2] = Tt, m[De + 3] = N === 0 ? 1 : 255
  }
  return {
    data: m,
    width: f,
    height: T,
    offsetX: s,
    offsetY: o,
    season: e
  }
}
async function Sn(n) {
  const e = In(n.width, n.height),
    t = e.getContext("2d");
  if (!t) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const r = t.createImageData(n.width, n.height);
  return r.data.set(n.data), t.putImageData(r, 0, 0), "convertToBlob" in e ? e.convertToBlob({
    type: "image/png"
  }) : new Promise((s, o) => {
    e.toBlob(c => {
      if (!c) {
        o(new Error("Failed to encode auto painter bitmap."));
        return
      }
      s(c)
    }, "image/png")
  })
}

function In(n, e) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, e);
  if (typeof document < "u") {
    const t = document.createElement("canvas");
    return t.width = n, t.height = e, t
  }
  throw new Error("Canvas API is not available in the current environment.")
}

function Nn(n) {
  return class extends n {
    async getVoidEvent() {
      const e = await this.request("/void-event", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      return e.json()
    }
    async getVoidEventRewards() {
      const e = await this.request("/void-event/rewards", {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(a.unexpected_server_error(), e.status);
      return e.json()
    }
    async getVoidEventTileConquerors(e) {
      const t = await this.request(`/void-event/tile/${e}/conquerors`, {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(a.unexpected_server_error(), t.status);
      return t.json()
    }
    async postVoidEventPick(e) {
      const t = await this.request("/void-event/pick", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          team: e
        })
      });
      if (t.status === i.OK) return t.json();
      throw t.status === i.UNAUTHORIZED ? new Error(a.you_are_not_logged_in()) : t.status === i.FORBIDDEN ? new Error(a.void_event_not_enough_droplets()) : t.status === i.CONFLICT ? new Error(a.void_event_already_picked()) : new Error(a.unexpected_server_error())
    }
  }
}

function Rn(n) {
  return class extends n {
    validWaybackInput(e) {
      const t = Number.isFinite(e.timestamp) && Number.isInteger(e.timestamp) && e.timestamp >= 0 && e.timestamp <= this.getEstimatedServerNowMs(),
        r = Number.isFinite(e.season) && Number.isInteger(e.season) && e.season >= 0 && e.season < an.length,
        s = Number.isFinite(e.limit) && Number.isInteger(e.limit) && e.limit > 0 && e.limit <= mt.tools.wayback.limit,
        o = Number.isFinite(e.tileX) && Number.isFinite(e.tileY) && Number.isInteger(e.tileX) && Number.isInteger(e.tileY) && e.tileX >= 0 && e.tileY >= 0,
        c = e.cursorTs !== void 0,
        d = e.cursorUserId !== void 0,
        u = e.cursorAllianceId !== void 0,
        f = e.cursorPixelsCount !== void 0,
        T = c || d || u || f,
        m = c && d && u && f;
      let x = !0;
      return T && (x = m && Number.isFinite(e.cursorTs) && Number.isInteger(e.cursorTs) && e.cursorTs >= 0 && e.cursorTs <= e.timestamp && Number.isFinite(e.cursorUserId) && Number.isInteger(e.cursorUserId) && e.cursorUserId >= 0 && Number.isFinite(e.cursorAllianceId) && Number.isInteger(e.cursorAllianceId) && e.cursorAllianceId >= 0 && Number.isFinite(e.cursorPixelsCount) && Number.isInteger(e.cursorPixelsCount) && e.cursorPixelsCount >= 0), !(!r || !s || !o || !t || !x)
    }
    getSafeWaybackInput(e) {
      return e.season = Math.trunc(e.season), e.limit = Math.trunc(e.limit), e.timestamp = Math.trunc(e.timestamp), e.tileX = Math.trunc(e.tileX), e.tileY = Math.trunc(e.tileY), e.cursorTs !== void 0 && (e.cursorTs = Math.trunc(e.cursorTs)), e.cursorUserId !== void 0 && (e.cursorUserId = Math.trunc(e.cursorUserId)), e.cursorAllianceId !== void 0 && (e.cursorAllianceId = Math.trunc(e.cursorAllianceId)), e.cursorPixelsCount !== void 0 && (e.cursorPixelsCount = Math.trunc(e.cursorPixelsCount)), e
    }
    async getWaybackEvents(e) {
      if (!this.validWaybackInput(e)) throw new Error("Invalid query params");
      e = this.getSafeWaybackInput(e);
      const t = new URLSearchParams;
      e.cursorTs !== void 0 && t.set("cursorTs", String(e.cursorTs)), e.cursorUserId !== void 0 && t.set("cursorUserId", String(e.cursorUserId)), e.cursorAllianceId !== void 0 && t.set("cursorAllianceId", String(e.cursorAllianceId)), e.cursorPixelsCount !== void 0 && t.set("cursorPixelsCount", String(e.cursorPixelsCount));
      const r = `/staff/tools/wayback/s${e.season}/l${e.limit}/x${e.tileX}/y${e.tileY}/t${e.timestamp}`,
        s = t.toString(),
        o = await this.request(s.length > 0 ? `${r}?${s}` : r, {
          method: "GET",
          credentials: "include"
        });
      if (o.status === i.FORBIDDEN) throw new Error("Access denied");
      if (o.status !== i.OK) throw new Error("Failed to fetch wayback events");
      return o.json()
    }
  }
}
class xn extends $r(Hr(fn(hn(_n(wn(gn(pn(En(bn(vn(Tn(Nn(Rn(jr)))))))))))))) {}
const F = new xn(ut);
typeof window < "u" && Rt(() => {
  let n = F.online;
  xt(() => {
    const e = F.online;
    e && !n && window.dispatchEvent(new CustomEvent("wplace:online")), n = e
  })
});

function pt(n, e) {
  if (!(n != null && n.length)) return !1;
  for (const t of n)
    if (t === e) return !0;
  return !1
}

function Pn(n, e) {
  for (const t of e)
    if (pt(n, t)) return !0;
  return !1
}

function yt(n) {
  const e = atob(n),
    t = new Uint8Array(e.length);
  for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
  return t
}

function Dn(n) {
  if (typeof Buffer < "u") return Buffer.from(n).toString("base64");
  let e = "";
  for (let t = 0; t < n.length; t++) e += String.fromCharCode(n[t]);
  return btoa(e)
}
class qn {
  constructor(e) {
    g(this, "bytes");
    this.bytes = e ?? new Uint8Array
  }
  set(e, t) {
    const r = Math.floor(e / 8),
      s = e % 8;
    if (r >= this.bytes.length) {
      const c = new Uint8Array(r + 1),
        d = c.length - this.bytes.length;
      for (let u = 0; u < this.bytes.length; u++) c[u + d] = this.bytes[u];
      this.bytes = c
    }
    const o = this.bytes.length - 1 - r;
    t ? this.bytes[o] = this.bytes[o] | 1 << s : this.bytes[o] = this.bytes[o] & ~(1 << s)
  }
  get(e) {
    const t = Math.floor(e / 8),
      r = e % 8,
      s = this.bytes.length;
    return t > s ? !1 : (this.bytes[s - 1 - t] & 1 << r) !== 0
  }
}

function Ns(n) {
  return new Promise((e, t) => {
    const r = new FileReader;
    r.onload = () => {
      const s = r.result;
      if (!s || typeof s != "string") {
        t(new Error("Could not read blob as data URL"));
        return
      }
      e(s.substring(s.indexOf(",") + 1))
    }, r.readAsDataURL(n)
  })
}

function Rs(n) {
  if (typeof FileReader > "u") {
    const e = n.type || "application/octet-stream";
    return n.arrayBuffer().then(t => `data:${e};base64,${Dn(new Uint8Array(t))}`)
  }
  return new Promise((e, t) => {
    const r = new FileReader;
    r.onloadend = () => {
      const s = r.result;
      if (typeof s != "string") {
        t(new Error("Could not read blob as data URL"));
        return
      }
      e(s)
    }, r.onerror = t, r.readAsDataURL(n)
  })
}

function xs(n) {
  if (!n.startsWith("data:")) throw new Error("Could not parse data URL");
  const e = n.indexOf(",");
  if (e === -1) throw new Error("Could not parse data URL");
  const t = n.slice(5, e),
    r = n.slice(e + 1),
    s = t.indexOf(";base64"),
    o = (s === -1 ? t : t.slice(0, s)) || "text/plain";
  if (s !== -1) {
    const c = yt(r),
      d = new Uint8Array(c.byteLength);
    return d.set(c), new Blob([d], {
      type: o
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: o
  })
}

function Ps(...n) {
  return n.filter(Boolean).join(" ")
}
const Un = typeof document < "u";
let dt = 0;
var Ee, be, Oe;
class Ln {
  constructor() {
    y(this, Ee, A(Me([])));
    y(this, be, A(Me([])));
    y(this, Oe, e => {
      const t = this.toasts.findIndex(r => r.id === e);
      return t === -1 ? null : t
    });
    g(this, "addToast", e => {
      Un && this.toasts.unshift(e)
    });
    g(this, "updateToast", ({
      id: e,
      data: t,
      type: r,
      message: s
    }) => {
      const o = this.toasts.findIndex(d => d.id === e),
        c = this.toasts[o];
      this.toasts[o] = {
        ...c,
        ...t,
        id: e,
        title: s,
        type: r,
        updated: !0
      }
    });
    g(this, "create", e => {
      var d;
      const {
        message: t,
        ...r
      } = e, s = typeof(e == null ? void 0 : e.id) == "number" || e.id && ((d = e.id) == null ? void 0 : d.length) > 0 ? e.id : dt++, o = e.dismissable === void 0 ? !0 : e.dismissable, c = e.type === void 0 ? "default" : e.type;
      return tt(() => {
        this.toasts.find(f => f.id === s) ? this.updateToast({
          id: s,
          data: e,
          type: c,
          message: t,
          dismissable: o
        }) : this.addToast({
          ...r,
          id: s,
          title: t,
          dismissable: o,
          type: c
        })
      }), s
    });
    g(this, "dismiss", e => (tt(() => {
      if (e === void 0) {
        this.toasts = this.toasts.map(r => ({
          ...r,
          dismiss: !0
        }));
        return
      }
      const t = this.toasts.findIndex(r => r.id === e);
      this.toasts[t] && (this.toasts[t] = {
        ...this.toasts[t],
        dismiss: !0
      })
    }), e));
    g(this, "remove", e => {
      if (e === void 0) {
        this.toasts = [];
        return
      }
      const t = h(this, Oe).call(this, e);
      if (t !== null) return this.toasts.splice(t, 1), e
    });
    g(this, "message", (e, t) => this.create({
      ...t,
      type: "default",
      message: e
    }));
    g(this, "error", (e, t) => this.create({
      ...t,
      type: "error",
      message: e
    }));
    g(this, "success", (e, t) => this.create({
      ...t,
      type: "success",
      message: e
    }));
    g(this, "info", (e, t) => this.create({
      ...t,
      type: "info",
      message: e
    }));
    g(this, "warning", (e, t) => this.create({
      ...t,
      type: "warning",
      message: e
    }));
    g(this, "loading", (e, t) => this.create({
      ...t,
      type: "loading",
      message: e
    }));
    g(this, "promise", (e, t) => {
      if (!t) return;
      let r;
      t.loading !== void 0 && (r = this.create({
        ...t,
        promise: e,
        type: "loading",
        message: typeof t.loading == "string" ? t.loading : t.loading()
      }));
      const s = e instanceof Promise ? e : e();
      let o = r !== void 0;
      return s.then(c => {
        if (typeof c == "object" && c && "ok" in c && typeof c.ok == "boolean" && !c.ok) {
          o = !1;
          const d = Cn(c);
          this.create({
            id: r,
            type: "error",
            message: d
          })
        } else if (t.success !== void 0) {
          o = !1;
          const d = typeof t.success == "function" ? t.success(c) : t.success;
          this.create({
            id: r,
            type: "success",
            message: d
          })
        }
      }).catch(c => {
        if (t.error !== void 0) {
          o = !1;
          const d = typeof t.error == "function" ? t.error(c) : t.error;
          this.create({
            id: r,
            type: "error",
            message: d
          })
        }
      }).finally(() => {
        var c;
        o && (this.dismiss(r), r = void 0), (c = t.finally) == null || c.call(t)
      }), r
    });
    g(this, "custom", (e, t) => {
      const r = (t == null ? void 0 : t.id) || dt++;
      return this.create({
        component: e,
        id: r,
        ...t
      }), r
    });
    g(this, "removeHeight", e => {
      this.heights = this.heights.filter(t => t.toastId !== e)
    });
    g(this, "setHeight", e => {
      const t = h(this, Oe).call(this, e.toastId);
      if (t === null) {
        this.heights.push(e);
        return
      }
      this.heights[t] = e
    });
    g(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return E(h(this, Ee))
  }
  set toasts(e) {
    O(h(this, Ee), e, !0)
  }
  get heights() {
    return E(h(this, be))
  }
  set heights(e) {
    O(h(this, be), e, !0)
  }
}
Ee = new WeakMap, be = new WeakMap, Oe = new WeakMap;

function Cn(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const P = new Ln;

function kn(n, e) {
  return P.create({
    message: n,
    ...e
  })
}
var $e;
class Ds {
  constructor() {
    y(this, $e, z(() => P.toasts.filter(e => !e.dismiss)))
  }
  get toasts() {
    return E(h(this, $e))
  }
}
$e = new WeakMap;
const Mn = kn,
  Kn = Object.assign(Mn, {
    success: P.success,
    info: P.info,
    warning: P.warning,
    error: P.error,
    custom: P.custom,
    message: P.message,
    promise: P.promise,
    dismiss: P.dismiss,
    loading: P.loading,
    getActiveToasts: () => P.toasts.filter(n => !n.dismiss)
  });
var ve, Te, Ae, Se, Ie, Ne, Re, xe;
class Bn {
  constructor() {
    g(this, "channel", new BroadcastChannel("user-channel"));
    y(this, ve, A());
    y(this, Te, A(!0));
    y(this, Ae, A());
    y(this, Se, A(Date.now()));
    y(this, Ie, z(() => {
      if (!this.data) return;
      const e = this.data.charges;
      if (e.count > e.max) return e.count;
      const t = e.count + Math.max((We.now - this.lastFetch) / e.cooldownMs, 0);
      return Math.min(e.max, t)
    }));
    y(this, Ne, z(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    y(this, Re, z(() => {
      var e;
      return new qn(yt(((e = this.data) == null ? void 0 : e.flagsBitmap) ?? "AA=="))
    }));
    y(this, xe, z(() => {
      var r;
      if (!((r = this.data) != null && r.timeoutUntil)) return;
      const e = new Date(this.data.timeoutUntil),
        t = e.getTime();
      if (!(!Number.isFinite(t) || t <= We.now)) return e
    }));
    this.channel && (this.channel.onmessage = e => {
      const t = JSON.parse(e.data);
      t.type === "refresh" ? (this.data = t.data, this.lastFetch = Date.now()) : t.type === "logout" && (this.data = void 0)
    })
  }
  get data() {
    return E(h(this, ve))
  }
  set data(e) {
    O(h(this, ve), e, !0)
  }
  get loading() {
    return E(h(this, Te))
  }
  set loading(e) {
    O(h(this, Te), e, !0)
  }
  get notificationCount() {
    return E(h(this, Ae))
  }
  set notificationCount(e) {
    O(h(this, Ae), e, !0)
  }
  get lastFetch() {
    return E(h(this, Se))
  }
  set lastFetch(e) {
    O(h(this, Se), e)
  }
  get charges() {
    return E(h(this, Ie))
  }
  set charges(e) {
    O(h(this, Ie), e)
  }
  get cooldown() {
    return E(h(this, Ne))
  }
  set cooldown(e) {
    O(h(this, Ne), e)
  }
  get flagsBitmap() {
    return E(h(this, Re))
  }
  set flagsBitmap(e) {
    O(h(this, Re), e)
  }
  get timeoutUntil() {
    return E(h(this, xe))
  }
  set timeoutUntil(e) {
    O(h(this, xe), e)
  }
  async refresh() {
    var e, t;
    try {
      return this.loading = !0, this.data = await F.me(), this.lastFetch = Date.now(), (e = this.channel) == null || e.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && F.getNotificationCount().then(r => {
        this.notificationCount = r
      }).catch(r => {
        console.error("Failed to refresh notification count:", r)
      }), (t = this.data) != null && t.id && j.setUserId(this.data.id), !0
    } catch (r) {
      return console.error(r), Kn.warning(a.no_internet_access(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var e;
    await F.logout(), (e = this.channel) == null || e.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(e) {
    var r;
    return e < 32 ? !0 : ((((r = this.data) == null ? void 0 : r.extraColorsBitmap) ?? 0) & 1 << e - 32) !== 0
  }
  hasPermission(e) {
    var t;
    return pt((t = this.data) == null ? void 0 : t.permissions, e)
  }
  hasAnyPermission(e) {
    var t;
    return Pn((t = this.data) == null ? void 0 : t.permissions, e)
  }
}
ve = new WeakMap, Te = new WeakMap, Ae = new WeakMap, Se = new WeakMap, Ie = new WeakMap, Ne = new WeakMap, Re = new WeakMap, xe = new WeakMap;
const J = new Bn;
let p;
const L = new Array(128).fill(void 0);
L.push(void 0, null, !0, !1);

function w(n) {
  return L[n]
}
let re = L.length;

function v(n) {
  re === L.length && L.push(L.length + 1);
  const e = re;
  return re = L[e], L[e] = n, e
}

function k(n, e) {
  try {
    return n.apply(this, e)
  } catch (t) {
    p.__wbindgen_export_0(v(t))
  }
}

function H(n) {
  return n == null
}
const Et = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && Et.decode();
let ee = null;

function Le() {
  return (ee === null || ee.byteLength === 0) && (ee = new Uint8Array(p.memory.buffer)), ee
}

function Ce(n, e) {
  return n = n >>> 0, Et.decode(Le().subarray(n, n + e))
}

function Fn(n) {
  n < 132 || (L[n] = re, re = n)
}

function lt(n) {
  const e = w(n);
  return Fn(n), e
}
let G = null;

function Fe() {
  return (G === null || G.buffer.detached === !0 || G.buffer.detached === void 0 && G.buffer !== p.memory.buffer) && (G = new DataView(p.memory.buffer)), G
}
let W = 0;
const ke = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  jn = typeof ke.encodeInto == "function" ? function(n, e) {
    return ke.encodeInto(n, e)
  } : function(n, e) {
    const t = ke.encode(n);
    return e.set(t), {
      read: n.length,
      written: t.length
    }
  };

function Pe(n, e, t) {
  if (t === void 0) {
    const d = ke.encode(n),
      u = e(d.length, 1) >>> 0;
    return Le().subarray(u, u + d.length).set(d), W = d.length, u
  }
  let r = n.length,
    s = e(r, 1) >>> 0;
  const o = Le();
  let c = 0;
  for (; c < r; c++) {
    const d = n.charCodeAt(c);
    if (d > 127) break;
    o[s + c] = d
  }
  if (c !== r) {
    c !== 0 && (n = n.slice(c)), s = t(s, r, r = c + n.length * 3, 1) >>> 0;
    const d = Le().subarray(s + c, s + r),
      u = jn(n, d);
    c += u.written, s = t(s, r, c, 1) >>> 0
  }
  return W = c, s
}

function $n(n) {
  const e = Pe(n, p.__wbindgen_export_1, p.__wbindgen_export_2),
    t = W;
  p.set_discord_id(e, t)
}

function Hn(n) {
  const e = Pe(n, p.__wbindgen_export_1, p.__wbindgen_export_2),
    t = W;
  p.set_fingerprint(e, t)
}

function Gn(n) {
  const e = Pe(n, p.__wbindgen_export_1, p.__wbindgen_export_2),
    t = W;
  p.set_detected_bot(e, t)
}

function Jn(n) {
  let e, t;
  try {
    const o = p.__wbindgen_add_to_stack_pointer(-16),
      c = Pe(n, p.__wbindgen_export_1, p.__wbindgen_export_2),
      d = W;
    p.get_pawtected_endpoint_payload(o, c, d);
    var r = Fe().getInt32(o + 0, !0),
      s = Fe().getInt32(o + 4, !0);
    return e = r, t = s, Ce(r, s)
  } finally {
    p.__wbindgen_add_to_stack_pointer(16), p.__wbindgen_export_3(e, t, 1)
  }
}

function Ge(n) {
  p.set_user_id(n)
}

function Yn(n) {
  p.set_cf_likely_automated(n)
}

function Wn(n) {
  p.set_automated_clicks(n)
}

function Vn(n) {
  const e = Pe(n, p.__wbindgen_export_1, p.__wbindgen_export_2),
    t = W;
  p.request_url(e, t)
}

function Qn(n) {
  p.set_automated_browser(n)
}
async function Xn(n, e) {
  if (typeof Response == "function" && n instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(n, e)
    } catch (r) {
      if (n.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r
    }
    const t = await n.arrayBuffer();
    return await WebAssembly.instantiate(t, e)
  } else {
    const t = await WebAssembly.instantiate(n, e);
    return t instanceof WebAssembly.Instance ? {
      instance: t,
      module: n
    } : t
  }
}

function zn() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbg_buffer_609cc3eee51ed158 = function(e) {
    const t = w(e).buffer;
    return v(t)
  }, n.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return k(function(e, t) {
      const r = w(e).call(w(t));
      return v(r)
    }, arguments)
  }, n.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return k(function(e, t, r) {
      const s = w(e).call(w(t), w(r));
      return v(s)
    }, arguments)
  }, n.wbg.__wbg_crypto_574e78ad8b13b65f = function(e) {
    const t = w(e).crypto;
    return v(t)
  }, n.wbg.__wbg_document_d249400bd7bd996d = function(e) {
    const t = w(e).document;
    return H(t) ? 0 : v(t)
  }, n.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return k(function(e, t) {
      w(e).getRandomValues(w(t))
    }, arguments)
  }, n.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return k(function(e, t) {
      const r = Reflect.get(w(e), w(t));
      return v(r)
    }, arguments)
  }, n.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return k(function(e) {
      return w(e).hasFocus()
    }, arguments)
  }, n.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return k(function(e) {
      const t = w(e).innerWidth;
      return v(t)
    }, arguments)
  }, n.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(e) {
    let t;
    try {
      t = w(e) instanceof Window
    } catch {
      t = !1
    }
    return t
  }, n.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(e) {
    const t = w(e).msCrypto;
    return v(t)
  }, n.wbg.__wbg_navigator_1577371c070c8947 = function(e) {
    const t = w(e).navigator;
    return v(t)
  }, n.wbg.__wbg_new_a12002a7f91c75be = function(e) {
    const t = new Uint8Array(w(e));
    return v(t)
  }, n.wbg.__wbg_newnoargs_105ed471475aaf50 = function(e, t) {
    const r = new Function(Ce(e, t));
    return v(r)
  }, n.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(e, t, r) {
    const s = new Uint8Array(w(e), t >>> 0, r >>> 0);
    return v(s)
  }, n.wbg.__wbg_newwithlength_a381634e90c276d4 = function(e) {
    const t = new Uint8Array(e >>> 0);
    return v(t)
  }, n.wbg.__wbg_node_905d3e251edff8a2 = function(e) {
    const t = w(e).node;
    return v(t)
  }, n.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, n.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(e) {
    const t = w(e).process;
    return v(t)
  }, n.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return k(function(e, t) {
      w(e).randomFillSync(lt(t))
    }, arguments)
  }, n.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return k(function() {
      const e = module.require;
      return v(e)
    }, arguments)
  }, n.wbg.__wbg_set_65595bdd868b3009 = function(e, t, r) {
    w(e).set(w(t), r >>> 0)
  }, n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const e = typeof global > "u" ? null : global;
    return H(e) ? 0 : v(e)
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return H(e) ? 0 : v(e)
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const e = typeof self > "u" ? null : self;
    return H(e) ? 0 : v(e)
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const e = typeof window > "u" ? null : window;
    return H(e) ? 0 : v(e)
  }, n.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(e, t, r) {
    const s = w(e).subarray(t >>> 0, r >>> 0);
    return v(s)
  }, n.wbg.__wbg_versions_c01dfd4722a88165 = function(e) {
    const t = w(e).versions;
    return v(t)
  }, n.wbg.__wbindgen_boolean_get = function(e) {
    const t = w(e);
    return typeof t == "boolean" ? t ? 1 : 0 : 2
  }, n.wbg.__wbindgen_is_function = function(e) {
    return typeof w(e) == "function"
  }, n.wbg.__wbindgen_is_null = function(e) {
    return w(e) === null
  }, n.wbg.__wbindgen_is_object = function(e) {
    const t = w(e);
    return typeof t == "object" && t !== null
  }, n.wbg.__wbindgen_is_string = function(e) {
    return typeof w(e) == "string"
  }, n.wbg.__wbindgen_is_undefined = function(e) {
    return w(e) === void 0
  }, n.wbg.__wbindgen_memory = function() {
    const e = p.memory;
    return v(e)
  }, n.wbg.__wbindgen_number_get = function(e, t) {
    const r = w(t),
      s = typeof r == "number" ? r : void 0;
    Fe().setFloat64(e + 8, H(s) ? 0 : s, !0), Fe().setInt32(e + 0, !H(s), !0)
  }, n.wbg.__wbindgen_object_clone_ref = function(e) {
    const t = w(e);
    return v(t)
  }, n.wbg.__wbindgen_object_drop_ref = function(e) {
    lt(e)
  }, n.wbg.__wbindgen_string_new = function(e, t) {
    const r = Ce(e, t);
    return v(r)
  }, n.wbg.__wbindgen_throw = function(e, t) {
    throw new Error(Ce(e, t))
  }, n
}

function Zn(n, e) {
  return p = n.exports, bt.__wbindgen_wasm_module = e, G = null, ee = null, p
}
async function bt(n) {
  if (p !== void 0) return p;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const e = zn();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: t,
    module: r
  } = await Xn(await n, e);
  return Zn(t, r)
}
class es {
  constructor() {
    g(this, "interval");
    g(this, "storagesEmpty", !1);
    g(this, "storages", [new je, new Qe, new Xe, new rs]);
    g(this, "pawtectLoaded");
    g(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!J.data || this.storagesEmpty || localStorage.getItem(je.KEY))) {
        for (const t of this.storages) {
          const r = t.get();
          if (r) {
            for (const s of this.storages) s.set(r);
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
  isMultiAccounting(e) {
    const t = B.day;
    for (const s of this.storages) {
      const o = s.get();
      if (o && !(o.timestamp + t < Date.now()) && o.userId !== e) return !0
    }
    const r = {
      userId: e,
      timestamp: Date.now()
    };
    for (const s of this.storages) s.set(r);
    return this.storagesEmpty = !1, !1
  }
  loadPawtect() {
    return this.pawtectLoaded || (this.pawtectLoaded = (async () => {
      var e;
      try {
        await bt(Pt), (e = J.data) != null && e.id && Ge(J.data.id);
        const t = fetch;
        return Object.assign(window, {
          fetch: ts((r, s) => {
            let o = null;
            return r instanceof Request ? o = r.url : r instanceof URL ? o = r.href : typeof r == "string" && (o = r), o !== null && !o.startsWith("/") && Vn(o), t.call(window, r, s)
          })
        }), !0
      } catch (t) {
        return console.error("Error loading Pawtect WASM:", t), this.pawtectError = t, this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(e) {
    await this.loadPawtect(), Ge(e)
  }
  async setCfLikelyAutomated(e) {
    await this.loadPawtect(), Yn(e)
  }
  isPawtectReady() {
    return this.pawtectLoaded ?? Promise.resolve(!1)
  }
  getPawtectError() {
    return this.pawtectError
  }
  async getHeaders(e) {
    return {
      "x-pawtect-token": await this.getPawtectedEndpointPayload(e)
    }
  }
  async getPawtectedEndpointPayload(e) {
    if (!await this.loadPawtect()) throw new Error(a.wasm_error());
    const r = navigator.webdriver,
      [s, o] = await Promise.all([ze(), Nr().catch(c => (console.error(c), {
        bot: !1
      }))]);
    return Ge(J.data.id), $n(J.data.discordId ?? ""), Hn(s), Qn(r), Wn(We.automatedClicks), o.bot && Gn(o.botKind ?? "unknown"), Jn(e)
  }
}

function ts(n) {
  return n.bind().bind()
}
const M = class M {
  static codec(e) {
    const t = new TextEncoder().encode(this.XOR_KEY),
      r = new Uint8Array(e.length);
    for (let s = 0; s < e.length; s++) r[s] = e[s] ^ t[s % t.length];
    return r
  }
  get() {
    try {
      const e = localStorage.getItem(M.KEY);
      if (!e) return;
      const t = Uint8Array.from(atob(e), s => s.charCodeAt(0)),
        r = new TextDecoder().decode(M.codec(t));
      return JSON.parse(r)
    } catch {
      return
    }
  }
  set(e) {
    const t = new TextEncoder().encode(JSON.stringify(e)),
      r = M.codec(t);
    localStorage.setItem(M.KEY, btoa(String.fromCharCode(...r)))
  }
};
g(M, "KEY", "ui_layout_v3"), g(M, "XOR_KEY", "wplace-prefs");
let je = M;
const K = class K {
  get() {
    try {
      const e = sessionStorage.getItem(K.KEY);
      if (!e) return;
      let t = "";
      for (let r = 0; r < e.length; r += 4) {
        const s = parseInt(e.slice(r, r + 4), 16);
        t += String.fromCharCode(s - K.SHIFT & 65535)
      }
      return JSON.parse(t)
    } catch {
      return
    }
  }
  set(e) {
    const t = JSON.stringify(e);
    let r = "";
    for (const s of t) {
      const o = s.charCodeAt(0) + K.SHIFT & 65535;
      r += o.toString(16).padStart(4, "0")
    }
    sessionStorage.setItem(K.KEY, r)
  }
};
g(K, "KEY", "nav.cursor"), g(K, "SHIFT", 13);
let Qe = K;
const Y = class Y {
  get() {
    const e = document.cookie.match(new RegExp("(?:^|; )" + Y.KEY + "=([^;]*)"));
    if (e) try {
      const [t, r] = decodeURIComponent(e[1]).split("."), s = parseInt(t, 36), o = parseInt(r, 36);
      return !Number.isFinite(s) || !Number.isFinite(o) ? void 0 : {
        userId: s,
        timestamp: o
      }
    } catch {
      return
    }
  }
  set(e) {
    const t = `${e.userId.toString(36)}.${e.timestamp.toString(36)}`;
    document.cookie = `${Y.KEY}=${encodeURIComponent(t)};path=/;max-age=${Y.MAX_AGE};SameSite=Lax`
  }
};
g(Y, "KEY", "_pf_uid"), g(Y, "MAX_AGE", 3600 * 24 * 365);
let Xe = Y;
class rs {
  constructor() {
    g(this, "packed")
  }
  get() {
    if (this.packed === void 0) return;
    const e = Number(this.packed & 0xffffffffn),
      t = Number(this.packed >> 32n);
    return {
      userId: e,
      timestamp: t
    }
  }
  set(e) {
    this.packed = BigInt(e.timestamp) << 32n | BigInt(e.userId) & 0xffffffffn
  }
}
const j = new es;
export {
  on as A, ls as B, wt as C, xr as D, Rs as E, xs as F, ms as G, an as H, Ts as I, As as J, Z as K, l as L, ys as M, qn as N, yt as O, hs as P, bs as Q, vs as R, Ke as S, B as T, Is as U, fs as W, F as a, ot as b, Os as c, _s as d, i as e, ws as f, We as g, j as h, ht as i, Ns as j, mt as k, gs as l, Ss as m, Ve as n, P as o, Ps as p, Ds as q, ps as r, Es as s, Kn as t, J as u, te as v, us as w, R as x, ds as y, cs as z
};