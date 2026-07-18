var Dt = Object.defineProperty;
var Qe = n => {
  throw TypeError(n)
};
var xt = (n, t, e) => t in n ? Dt(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : n[t] = e;
var g = (n, t, e) => xt(n, typeof t != "symbol" ? t + "" : t, e),
  jt = (n, t, e) => t.has(n) || Qe("Cannot " + e);
var p = (n, t, e) => (jt(n, t, "read from private field"), e ? e.call(n) : t.get(n)),
  b = (n, t, e) => t.has(n) ? Qe("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
import {
  h as Pt,
  P as We,
  j as qt,
  g as Ce
} from "./DzBCW1Dp.js";
import {
  e as I,
  i as k,
  h as T,
  g as xe,
  bL as Lt,
  y as Ut,
  B as Ze,
  u as Q
} from "./BKnGt6Ki.js";
import {
  g as d
} from "./BhCkpOlh.js";
const Mt = "" + new URL("../assets/pawtect_wasm_bg.8VPqYlMZ.wasm", import.meta.url).href;
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

function Ct(n, t) {
  const e = {};
  let r = {
    bot: !1
  };
  for (const o in t) {
    const a = t[o],
      c = a(n);
    let u = {
      bot: !1
    };
    typeof c == "string" ? u = {
      bot: !0,
      botKind: c
    } : c && (u = {
      bot: !0,
      botKind: h.Unknown
    }), e[o] = u, u.bot && (r = u)
  }
  return [e, r]
}
async function Kt(n) {
  const t = {},
    e = Object.keys(n);
  return await Promise.all(e.map(async r => {
    const o = n[r];
    try {
      t[r] = {
        value: await o(),
        state: 0
      }
    } catch (a) {
      a instanceof v ? t[r] = {
        state: a.state,
        error: `${a.name}: ${a.message}`
      } : t[r] = {
        state: -3,
        error: a instanceof Error ? `${a.name}: ${a.message}` : String(a)
      }
    }
  })), t
}

function Ft({
  appVersion: n
}) {
  if (n.state !== 0) return !1;
  if (/headless/i.test(n.value)) return h.HeadlessChrome;
  if (/electron/i.test(n.value)) return h.Electron;
  if (/slimerjs/i.test(n.value)) return h.SlimerJS
}

function ze(n, t) {
  return n.indexOf(t) !== -1
}

function x(n, t) {
  return n.indexOf(t) !== -1
}

function $t(n, t) {
  if ("find" in n) return n.find(t);
  for (let e = 0; e < n.length; e++)
    if (t(n[e], e, n)) return n[e]
}

function Xe(n) {
  return Object.getOwnPropertyNames(n)
}

function Ke(n, ...t) {
  for (const e of t)
    if (typeof e == "string") {
      if (ze(n, e)) return !0
    } else if ($t(n, o => e.test(o)) != null) return !0;
  return !1
}

function Y(n) {
  return n.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function Gt({
  documentElementKeys: n
}) {
  if (n.state !== 0) return !1;
  if (Ke(n.value, "selenium", "webdriver", "driver")) return h.Selenium
}

function Vt({
  errorTrace: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return h.PhantomJS
}

function Ht({
  evalLength: n,
  browserKind: t,
  browserEngineKind: e
}) {
  if (n.state !== 0 || t.state !== 0 || e.state !== 0) return;
  const r = n.value;
  return e.value === "unknown" ? !1 : r === 37 && !ze(["webkit", "gecko"], e.value) || r === 39 && !ze(["internet_explorer"], t.value) || r === 33 && !ze(["chromium"], e.value)
}

function Wt({
  functionBind: n
}) {
  if (n.state === -2) return h.PhantomJS
}

function Yt({
  languages: n
}) {
  if (n.state === 0 && n.value.length === 0) return h.HeadlessChrome
}

function Jt({
  mimeTypesConsistent: n
}) {
  if (n.state === 0 && !n.value) return h.Unknown
}

function Qt({
  notificationPermissions: n,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== "chrome") return !1;
  if (n.state === 0 && n.value) return h.HeadlessChrome
}

function Zt({
  pluginsArray: n
}) {
  if (n.state === 0 && !n.value) return h.HeadlessChrome
}

function Xt({
  pluginsLength: n,
  android: t,
  browserKind: e,
  browserEngineKind: r
}) {
  if (!(n.state !== 0 || t.state !== 0 || e.state !== 0 || r.state !== 0) && !(e.value !== "chrome" || t.value || r.value !== "chromium") && n.value === 0) return h.HeadlessChrome
}

function en({
  process: n
}) {
  var t;
  if (n.state !== 0) return !1;
  if (n.value.type === "renderer" || ((t = n.value.versions) === null || t === void 0 ? void 0 : t.electron) != null) return h.Electron
}

function tn({
  productSub: n,
  browserKind: t
}) {
  if (n.state !== 0 || t.state !== 0) return !1;
  if ((t.value === "chrome" || t.value === "safari" || t.value === "opera" || t.value === "wechat") && n.value !== "20030107") return h.Unknown
}

function nn({
  userAgent: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return h.PhantomJS;
  if (/Headless/i.test(n.value)) return h.HeadlessChrome;
  if (/Electron/i.test(n.value)) return h.Electron;
  if (/slimerjs/i.test(n.value)) return h.SlimerJS
}

function rn({
  webDriver: n
}) {
  if (n.state === 0 && n.value) return h.HeadlessChrome
}

function on({
  webGL: n
}) {
  if (n.state === 0) {
    const {
      vendor: t,
      renderer: e
    } = n.value;
    if (t == "Brian Paul" && e == "Mesa OffScreen") return h.HeadlessChrome
  }
}

function an({
  windowExternal: n
}) {
  if (n.state !== 0) return !1;
  if (/Sequentum/i.test(n.value)) return h.Sequentum
}

function sn({
  windowSize: n,
  documentFocus: t
}) {
  if (n.state !== 0 || t.state !== 0) return !1;
  const {
    outerWidth: e,
    outerHeight: r
  } = n.value;
  if (t.value && e === 0 && r === 0) return h.HeadlessChrome
}

function un({
  distinctiveProps: n
}) {
  if (n.state !== 0) return !1;
  const t = n.value;
  let e;
  for (e in t)
    if (t[e]) return e
}
const cn = {
  detectAppVersion: Ft,
  detectDocumentAttributes: Gt,
  detectErrorTrace: Vt,
  detectEvalLengthInconsistency: Ht,
  detectFunctionBind: Wt,
  detectLanguagesLengthInconsistency: Yt,
  detectNotificationPermissions: Qt,
  detectPluginsArray: Zt,
  detectPluginsLengthInconsistency: Xt,
  detectProcess: en,
  detectUserAgent: nn,
  detectWebDriver: rn,
  detectWebGL: on,
  detectWindowExternal: an,
  detectWindowSize: sn,
  detectMimeTypesConsistent: Jt,
  detectProductSub: tn,
  detectDistinctiveProperties: un
};

function ln() {
  const n = navigator.appVersion;
  if (n == null) throw new v(-1, "navigator.appVersion is undefined");
  return n
}

function dn() {
  if (document.documentElement === void 0) throw new v(-1, "document.documentElement is undefined");
  const {
    documentElement: n
  } = document;
  if (typeof n.getAttributeNames != "function") throw new v(-2, "document.documentElement.getAttributeNames is not a function");
  return n.getAttributeNames()
}

function _n() {
  try {
    null[0]()
  } catch (n) {
    if (n instanceof Error && n.stack != null) return n.stack.toString()
  }
  throw new v(-3, "errorTrace signal unexpected behaviour")
}

function fn() {
  return eval.toString().length
}

function pn() {
  if (Function.prototype.bind === void 0) throw new v(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function Ye() {
  var n, t;
  const e = window,
    r = navigator;
  return Y(["webkitPersistentStorage" in r, "webkitTemporaryStorage" in r, r.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : Y(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, r.vendor.indexOf("Apple") === 0, "getStorageUpdates" in r, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : Y(["buildID" in navigator, "MozAppearance" in ((t = (n = document.documentElement) === null || n === void 0 ? void 0 : n.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function hn() {
  var n;
  const t = (n = navigator.userAgent) === null || n === void 0 ? void 0 : n.toLowerCase();
  return x(t, "edg/") ? "edge" : x(t, "trident") || x(t, "msie") ? "internet_explorer" : x(t, "wechat") ? "wechat" : x(t, "firefox") ? "firefox" : x(t, "opera") || x(t, "opr") ? "opera" : x(t, "chrome") ? "chrome" : x(t, "safari") ? "safari" : "unknown"
}

function mn() {
  const n = Ye(),
    t = n === "chromium",
    e = n === "gecko",
    r = window,
    o = navigator,
    a = "connection";
  return t ? Y([!("SharedWorker" in r), o[a] && "ontypechange" in o[a], !("sinkId" in new Audio)]) >= 2 : e ? Y(["onorientationchange" in r, "orientation" in r, /android/i.test(o.appVersion)]) >= 2 : !1
}

function gn() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function wn() {
  const n = window;
  return Y([!("MediaSettingsRange" in n), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3
}

function yn() {
  const n = navigator,
    t = [],
    e = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(n.languages)) Ye() === "chromium" && wn() || t.push(n.languages);
  else if (typeof n.languages == "string") {
    const r = n.languages;
    r && t.push(r.split(","))
  }
  return t
}

function bn() {
  if (navigator.mimeTypes === void 0) throw new v(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: n
  } = navigator;
  let t = Object.getPrototypeOf(n) === MimeTypeArray.prototype;
  for (let e = 0; e < n.length; e++) t && (t = Object.getPrototypeOf(n[e]) === MimeType.prototype);
  return t
}
async function vn() {
  if (window.Notification === void 0) throw new v(-1, "window.Notification is undefined");
  if (navigator.permissions === void 0) throw new v(-1, "navigator.permissions is undefined");
  const {
    permissions: n
  } = navigator;
  if (typeof n.query != "function") throw new v(-2, "navigator.permissions.query is not a function");
  try {
    const t = await n.query({
      name: "notifications"
    });
    return window.Notification.permission === "denied" && t.state === "prompt"
  } catch {
    throw new v(-3, "notificationPermissions signal unexpected behaviour")
  }
}

function En() {
  if (navigator.plugins === void 0) throw new v(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new v(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function kn() {
  if (navigator.plugins === void 0) throw new v(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new v(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function Tn() {
  const {
    process: n
  } = window, t = "window.process is";
  if (n === void 0) throw new v(-1, `${t} undefined`);
  if (n && typeof n != "object") throw new v(-3, `${t} not an object`);
  return n
}

function On() {
  const {
    productSub: n
  } = navigator;
  if (n === void 0) throw new v(-1, "navigator.productSub is undefined");
  return n
}

function In() {
  if (navigator.connection === void 0) throw new v(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new v(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function Sn() {
  return navigator.userAgent
}

function Nn() {
  if (navigator.webdriver == null) throw new v(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function zn() {
  const n = document.createElement("canvas");
  if (typeof n.getContext != "function") throw new v(-2, "HTMLCanvasElement.getContext is not a function");
  const t = n.getContext("webgl");
  if (t === null) throw new v(-4, "WebGLRenderingContext is null");
  if (typeof t.getParameter != "function") throw new v(-2, "WebGLRenderingContext.getParameter is not a function");
  const e = t.getParameter(t.VENDOR),
    r = t.getParameter(t.RENDERER);
  return {
    vendor: e,
    renderer: r
  }
}

function An() {
  if (window.external === void 0) throw new v(-1, "window.external is undefined");
  const {
    external: n
  } = window;
  if (typeof n.toString != "function") throw new v(-2, "window.external.toString is not a function");
  return n.toString()
}

function Rn() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function Dn() {
  const n = {
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
    r = Xe(window);
  let o = [];
  window.document !== void 0 && (o = Xe(window.document));
  for (t in n) {
    const a = n[t];
    if (a !== void 0) {
      const c = a.window === void 0 ? !1 : Ke(r, ...a.window),
        u = a.document === void 0 || !o.length ? !1 : Ke(o, ...a.document);
      e[t] = c || u
    }
  }
  return e
}
const xn = {
  android: mn,
  browserKind: hn,
  browserEngineKind: Ye,
  documentFocus: gn,
  userAgent: Sn,
  appVersion: ln,
  rtt: In,
  windowSize: Rn,
  pluginsLength: kn,
  pluginsArray: En,
  errorTrace: _n,
  productSub: On,
  windowExternal: An,
  mimeTypesConsistent: bn,
  evalLength: fn,
  webGL: zn,
  webDriver: Nn,
  languages: yn,
  notificationPermissions: vn,
  documentElementKeys: dn,
  functionBind: pn,
  process: Tn,
  distinctiveProps: Dn
};
class jn {
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
    const [t, e] = Ct(this.components, cn);
    return this.detections = t, e
  }
  async collect() {
    return this.components = await Kt(xn), this.components
  }
}

function Pn() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const n = new XMLHttpRequest;
    n.open("get", `https://m1.openfpcdn.io/botd/v${Bt}/npm-monitoring`, !0), n.send()
  } catch (n) {
    console.error(n)
  }
}
async function qn({
  monitoring: n = !0
} = {}) {
  n && Pn();
  const t = new jn;
  return await t.collect(), t
}
let Ue = null;
async function Ln() {
  return await Un() ? {
    bot: !1
  } : (await Mn()).detect()
}
async function Un() {
  var e;
  const n = navigator;
  if (!((e = n.brave) != null && e.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(n.userAgent)) return !1;
  try {
    return await n.brave.isBrave()
  } catch {
    return !1
  }
}

function Mn() {
  return Ue || (Ue = qn({
    monitoring: !1
  })), Ue
}
const et = "theme";
var te, ne, re, oe, ie, ae, se, ue, ce, le, de;
class Bn {
  constructor() {
    b(this, te, I(!1));
    b(this, ne, I(!1));
    b(this, re, I(!1));
    b(this, oe, I(0));
    b(this, ie, I(!1));
    b(this, ae, I(xe(Cn())));
    b(this, se, I(null));
    b(this, ue, I(!1));
    b(this, ce, I("custom-winter"));
    b(this, le, I(xe(Date.now())));
    b(this, de, I(void 0));
    setInterval(() => {
      T(p(this, le), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(et), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return k(p(this, te))
  }
  set dropletsDialogOpen(t) {
    T(p(this, te), t, !0)
  }
  get pendingHistoryDialogOpen() {
    return k(p(this, ne))
  }
  set pendingHistoryDialogOpen(t) {
    T(p(this, ne), t, !0)
  }
  get storeDialogOpen() {
    return k(p(this, re))
  }
  set storeDialogOpen(t) {
    T(p(this, re), t, !0)
  }
  get storeTabIndex() {
    return k(p(this, oe))
  }
  set storeTabIndex(t) {
    T(p(this, oe), t, !0)
  }
  get muted() {
    return k(p(this, ie))
  }
  set muted(t) {
    T(p(this, ie), t, !0)
  }
  get language() {
    return k(p(this, ae))
  }
  set language(t) {
    T(p(this, ae), t, !0)
  }
  get map() {
    return k(p(this, se))
  }
  set map(t) {
    T(p(this, se), t)
  }
  get automatedClicks() {
    return k(p(this, ue))
  }
  set automatedClicks(t) {
    T(p(this, ue), t, !0)
  }
  get theme() {
    return k(p(this, ce))
  }
  set theme(t) {
    T(p(this, ce), t, !0), localStorage.setItem(et, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return k(p(this, le))
  }
  get captcha() {
    return Kn ? k(p(this, de)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    T(p(this, de), t, !0)
  }
}
te = new WeakMap, ne = new WeakMap, re = new WeakMap, oe = new WeakMap, ie = new WeakMap, ae = new WeakMap, se = new WeakMap, ue = new WeakMap, ce = new WeakMap, le = new WeakMap, de = new WeakMap;
const Fe = new Bn;

function Cn() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(t => t.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const Kn = Pt.toLowerCase() !== "false",
  Fn = `
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
async function $n() {
  try {
    const n = await fetch(`${We}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!n.ok) return null;
    const t = await n.json(),
      e = await Gn(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function Gn(n, t) {
  return new Promise(e => {
    const r = new Blob([Fn], {
        type: "application/javascript"
      }),
      o = URL.createObjectURL(r),
      a = new Worker(o),
      c = setTimeout(() => {
        a.terminate(), URL.revokeObjectURL(o), e(null)
      }, 12e4);
    a.onmessage = u => {
      clearTimeout(c), a.terminate(), URL.revokeObjectURL(o), u.data.error ? e(null) : e(u.data.nonce)
    }, a.onerror = () => {
      clearTimeout(c), a.terminate(), URL.revokeObjectURL(o), e(null)
    }, a.postMessage({
      prefix: n,
      difficulty: t
    })
  })
}
const yt = 3;
var _e, fe;
class Vn {
  constructor() {
    b(this, _e, I(null));
    b(this, fe, I(0))
  }
  get current() {
    return k(p(this, _e))
  }
  set current(t) {
    T(p(this, _e), t, !0)
  }
  get errorCount() {
    return k(p(this, fe))
  }
  set errorCount(t) {
    T(p(this, fe), t, !0)
  }
}
_e = new WeakMap, fe = new WeakMap;
const N = new Vn;
async function tt(n) {
  if (n === 1) return Hn();
  if (n === 2) {
    const t = await bt();
    return t ? nt("turnstile", t) : !1
  }
  if (n === 3) {
    const t = await Wn();
    return t ? nt("hcaptcha", t) : !1
  }
  return n === 4 ? Yn() : !1
}
async function Hn() {
  for (let n = 0; n < yt; n++) try {
    const t = await $n();
    if (!t) continue;
    return await C.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}
async function nt(n, t) {
  try {
    const e = await C.postCaptchaSession({
      provider: n,
      token: t
    });
    return await C.verifyChallenge({
      type: "captcha",
      sessionId: e.sessionId
    }), !0
  } catch {
    return !1
  }
}
const J = {};

function bt() {
  return vt(2)
}

function Wn() {
  return vt(3)
}

function vt(n) {
  const t = J[n];
  if (t) return t;
  const e = new Promise(r => {
    N.errorCount = 0, N.current = {
      tier: n,
      resolve: o => {
        delete J[n], r(o)
      }
    }
  });
  return J[n] = e, e
}

function Yn() {
  const n = J[4];
  if (n) return n;
  const t = new Promise(e => {
    N.errorCount = 0, N.current = {
      tier: 4,
      resolve: r => {
        delete J[4], e(r)
      }
    }
  });
  return J[4] = t, t
}

function wT(n) {
  const t = N.current;
  !t || t.tier === 4 || (t.resolve(n), N.current = null)
}

function yT() {
  const n = N.current;
  !n || n.tier === 4 || (N.errorCount += 1, N.errorCount >= yt && (n.resolve(void 0), N.current = null))
}

function bT() {
  const n = N.current;
  !n || n.tier !== 4 || (n.resolve(!0), N.current = null)
}

function vT() {
  const n = N.current;
  n && (n.tier === 4 ? n.resolve(!1) : n.resolve(void 0), N.current = null)
}
const Jn = () => "A punishment cache reload is already running",
  Qn = () => "Um recarregamento do cache de punições já está em andamento",
  Zn = () => "处罚缓存重新加载已在进行中",
  Xn = () => "Ein Neuladen des Strafen-Caches läuft bereits",
  er = () => "Ya hay una recarga de la caché de sanciones en curso",
  tr = () => "Un rechargement du cache des sanctions est déjà en cours",
  nr = () => "Un ricaricamento della cache delle sanzioni è già in corso",
  rr = () => "処罰キャッシュの再読み込みは既に実行中です",
  or = () => "Przeładowanie pamięci kar już trwa",
  ir = () => "Перезагрузка кэша наказаний уже выполняется",
  ar = () => "Перезавантаження кешу покарань уже виконується",
  sr = () => "Quá trình tải lại bộ nhớ đệm hình phạt đang chạy",
  ur = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Jn() : e === "pt" ? Qn() : e === "ch" ? Zn() : e === "de" ? Xn() : e === "es" ? er() : e === "fr" ? tr() : e === "it" ? nr() : e === "jp" ? rr() : e === "pl" ? or() : e === "ru" ? ir() : e === "uk" ? ar() : sr()
  },
  cr = () => "Your account has been suspended for breaking the rules",
  lr = () => "Sua conta foi suspensa por quebrar as regras",
  dr = () => "您的账号因违反规则已被暂停",
  _r = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  fr = () => "Tu cuenta ha sido suspendida por infringir las regras",
  pr = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  hr = () => "Il tuo account è stato sospeso per aver infranto le regole",
  mr = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  gr = () => "Twoje konto zostało zawieszone za łamanie zasad",
  wr = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  yr = () => "Ваш обліковий запис було призупинено за порушення правил",
  br = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  rt = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? cr() : e === "pt" ? lr() : e === "ch" ? dr() : e === "de" ? _r() : e === "es" ? fr() : e === "fr" ? pr() : e === "it" ? hr() : e === "jp" ? mr() : e === "pl" ? gr() : e === "ru" ? wr() : e === "uk" ? yr() : br()
  },
  vr = () => "Alliance name already taken",
  Er = () => "Já possui uma aliança com esse nome",
  kr = () => "该联盟名称已被占用",
  Tr = () => "Der Allianzname ist bereits vergeben",
  Or = () => "Ese nombre de alianza ya está en uso",
  Ir = () => "Ce nom d’alliance est déjà pris",
  Sr = () => "Esiste già un'alleanza con questo nome",
  Nr = () => "このアライアンス名は既に使用されています。",
  zr = () => "Nazwa sojuszu jest już zajęta",
  Ar = () => "Такое название альянса уже используется",
  Rr = () => "Назва альянсу вже зайнята",
  Dr = () => "Tên liên minh đã được sử dụng",
  xr = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? vr() : e === "pt" ? Er() : e === "ch" ? kr() : e === "de" ? Tr() : e === "es" ? Or() : e === "fr" ? Ir() : e === "it" ? Sr() : e === "jp" ? Nr() : e === "pl" ? zr() : e === "ru" ? Ar() : e === "uk" ? Rr() : Dr()
  },
  jr = () => "Alliance name exceeded the maximum number of characters",
  Pr = () => "O nome da aliança excedeu o número máximo de caracteres",
  qr = () => "联盟名称超过最大字符数限制",
  Lr = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  Ur = () => "El nombre de la alianza superó el número máximo de caracteres",
  Mr = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  Br = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  Cr = () => "アライアンス名が最大文字数を超えています。",
  Kr = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  Fr = () => "Название альянса превышает максимальную длину",
  $r = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  Gr = () => "Tên liên minh vượt quá số ký tự cho phép",
  Vr = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? jr() : e === "pt" ? Pr() : e === "ch" ? qr() : e === "de" ? Lr() : e === "es" ? Ur() : e === "fr" ? Mr() : e === "it" ? Br() : e === "jp" ? Cr() : e === "pl" ? Kr() : e === "ru" ? Fr() : e === "uk" ? $r() : Gr()
  },
  Hr = () => "Alliance with empty name",
  Wr = () => "Aliança com nome vazio",
  Yr = () => "名称为空的联盟",
  Jr = () => "Allianz mit leerem Namen",
  Qr = () => "Alianza con nombre vacío",
  Zr = () => "Alliance avec nom vide",
  Xr = () => "Alleanza con nome vuoto",
  eo = () => "名前が空のアライアンスです。",
  to = () => "Sojusz z pustą nazwą",
  no = () => "Альянс с пустым названием",
  ro = () => "Альянс із порожньою назвою",
  oo = () => "Liên minh không có tên",
  io = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Hr() : e === "pt" ? Wr() : e === "ch" ? Yr() : e === "de" ? Jr() : e === "es" ? Qr() : e === "fr" ? Zr() : e === "it" ? Xr() : e === "jp" ? eo() : e === "pl" ? to() : e === "ru" ? no() : e === "uk" ? ro() : oo()
  },
  ao = () => "Botting",
  so = () => "Uso de bots",
  uo = () => "脚本",
  co = () => "Bot-Nutzung",
  lo = () => "Botting",
  _o = () => "Bots",
  fo = () => "Uso di bot",
  po = () => "ボット使用",
  ho = () => "Botting",
  mo = () => "Боттинг",
  go = () => "Боти",
  wo = () => "Botting",
  yo = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ao() : e === "pt" ? so() : e === "ch" ? uo() : e === "de" ? co() : e === "es" ? lo() : e === "fr" ? _o() : e === "it" ? fo() : e === "jp" ? po() : e === "pl" ? ho() : e === "ru" ? mo() : e === "uk" ? go() : wo()
  },
  bo = () => "Use of software to completely automate painting",
  vo = () => "Uso de software para pintar de forma completamente automatizada ",
  Eo = () => "使用软件完全自动化绘制",
  ko = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  To = () => "Uso de software para automatizar completamente la pintura",
  Oo = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  Io = () => "Uso di software per dipingere in modo completamente automatizzato",
  So = () => "ペイントを完全に自動化するソフトウェアの使用",
  No = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  zo = () => "Использование программ для полной автоматизации рисования",
  Ao = () => "Використання програм, які повністю автоматизують малювання",
  Ro = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  Do = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? bo() : e === "pt" ? vo() : e === "ch" ? Eo() : e === "de" ? ko() : e === "es" ? To() : e === "fr" ? Oo() : e === "it" ? Io() : e === "jp" ? So() : e === "pl" ? No() : e === "ru" ? zo() : e === "uk" ? Ao() : Ro()
  },
  xo = () => "Breaking the rules",
  jo = () => "Quebrar as regras",
  Po = () => "违反规则",
  qo = () => "Regeln brechen",
  Lo = () => "Romper las reglas",
  Uo = () => "Violation des règles",
  Mo = () => "Violazione delle regole",
  Bo = () => "ルール違反",
  Co = () => "Łamanie zasad",
  Ko = () => "Нарушение правил",
  Fo = () => "Порушення правил",
  $o = () => "Vi phạm luật",
  Go = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? xo() : e === "pt" ? jo() : e === "ch" ? Po() : e === "de" ? qo() : e === "es" ? Lo() : e === "fr" ? Uo() : e === "it" ? Mo() : e === "jp" ? Bo() : e === "pl" ? Co() : e === "ru" ? Ko() : e === "uk" ? Fo() : $o()
  },
  Vo = () => "You have broken one of Wplace's rules",
  Ho = () => "Você quebrou uma das regras do Wplace",
  Wo = () => "你违反了 Wplace 的一项规则",
  Yo = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  Jo = () => "Has infringido una de las reglas de Wplace",
  Qo = () => "Vous avez enfreint l’une des règles de Wplace",
  Zo = () => "Hai infranto una delle regole di Wplace",
  Xo = () => "Wplaceのルールのいずれかに違反しました。",
  ei = () => "Złamałeś jedną z zasad Wplace",
  ti = () => "Вы нарушили одно из правил Wplace",
  ni = () => "Ви порушили одне з правил Wplace",
  ri = () => "Bạn đã vi phạm một trong các luật của Wplace",
  oi = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Vo() : e === "pt" ? Ho() : e === "ch" ? Wo() : e === "de" ? Yo() : e === "es" ? Jo() : e === "fr" ? Qo() : e === "it" ? Zo() : e === "jp" ? Xo() : e === "pl" ? ei() : e === "ru" ? ti() : e === "uk" ? ni() : ri()
  },
  ii = () => "You cannot paint over event pixels",
  ai = () => "Você não pode pintar sobre pixels de eventos",
  si = () => "你不能覆盖活动像素",
  ui = () => "Du kannst nicht über Event-Pixel malen",
  ci = () => "No puedes pintar sobre píxeles de evento",
  li = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  di = () => "Non puoi dipingere sopra i pixel dell'evento",
  _i = () => "イベント用のピクセルの上には塗れません。",
  fi = () => "Nie możesz malować po pikselach wydarzenia",
  pi = () => "Вы не можете рисовать по пикселям события",
  hi = () => "Ви не можете малювати поверх пікселів події",
  mi = () => "Bạn không thể tô lên pixel sự kiện",
  ot = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ii() : e === "pt" ? ai() : e === "ch" ? si() : e === "de" ? ui() : e === "es" ? ci() : e === "fr" ? li() : e === "it" ? di() : e === "jp" ? _i() : e === "pl" ? fi() : e === "ru" ? pi() : e === "uk" ? hi() : mi()
  },
  gi = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  wi = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  yi = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  bi = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  vi = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  Ei = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  ki = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Ti = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Oi = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Ii = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  Si = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Ni = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  zi = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? gi() : e === "pt" ? wi() : e === "ch" ? yi() : e === "de" ? bi() : e === "es" ? vi() : e === "fr" ? Ei() : e === "it" ? ki() : e === "jp" ? Ti() : e === "pl" ? Oi() : e === "ru" ? Ii() : e === "uk" ? Si() : Ni()
  },
  Ai = () => "Challenge verification not completed",
  Ri = () => "Verificação do desafio não concluída",
  Di = () => "挑战验证未完成",
  xi = () => "Herausforderungsverifizierung nicht abgeschlossen",
  ji = () => "Verificación del desafío no completada",
  Pi = () => "Vérification du défi non terminée",
  qi = () => "Verifica della sfida non completata",
  Li = () => "チャレンジ検証が完了していません",
  Ui = () => "Weryfikacja wyzwania niezakończona",
  Mi = () => "Верификация вызова не завершена",
  Bi = () => "Перевірку виклику не завершено",
  Ci = () => "Xác minh thử thách chưa hoàn thành",
  Me = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ai() : e === "pt" ? Ri() : e === "ch" ? Di() : e === "de" ? xi() : e === "es" ? ji() : e === "fr" ? Pi() : e === "it" ? qi() : e === "jp" ? Li() : e === "pl" ? Ui() : e === "ru" ? Mi() : e === "uk" ? Bi() : Ci()
  },
  Ki = () => "Couldn't complete the purchase. This item does not exist.",
  Fi = () => "Não foi possível concluir a compra. Este item não existe.",
  $i = () => "无法完成购买。该物品不存在。",
  Gi = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  Vi = () => "No se pudo completar la compra. Este ítem no existe.",
  Hi = () => "Achat impossible. Cet objet n’existe pas.",
  Wi = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  Yi = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Ji = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Qi = () => "Не удалось завершить покупку. Этот предмет не существует.",
  Zi = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  Xi = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  it = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ki() : e === "pt" ? Fi() : e === "ch" ? $i() : e === "de" ? Gi() : e === "es" ? Vi() : e === "fr" ? Hi() : e === "it" ? Wi() : e === "jp" ? Yi() : e === "pl" ? Ji() : e === "ru" ? Qi() : e === "uk" ? Zi() : Xi()
  },
  ea = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  ta = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  na = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  ra = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  oa = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  ia = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  aa = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  sa = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  ua = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  ca = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  la = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  da = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  _a = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ea() : e === "pt" ? ta() : e === "ch" ? na() : e === "de" ? ra() : e === "es" ? oa() : e === "fr" ? ia() : e === "it" ? aa() : e === "jp" ? sa() : e === "pl" ? ua() : e === "ru" ? ca() : e === "uk" ? la() : da()
  },
  fa = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  pa = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  ha = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  ma = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  ga = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  wa = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  ya = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  ba = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  va = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  Ea = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  ka = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  Ta = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  at = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? fa() : e === "pt" ? pa() : e === "ch" ? ha() : e === "de" ? ma() : e === "es" ? ga() : e === "fr" ? wa() : e === "it" ? ya() : e === "jp" ? ba() : e === "pl" ? va() : e === "ru" ? Ea() : e === "uk" ? ka() : Ta()
  },
  Oa = () => "Doxxing",
  Ia = () => "Doxxing",
  Sa = () => "人肉搜索",
  Na = () => "Doxxing",
  za = () => "Doxxing",
  Aa = () => "Doxxing",
  Ra = () => "Doxxing",
  Da = () => "ドックス（Doxxing）",
  xa = () => "Doxxing",
  ja = () => "Докcинг",
  Pa = () => "Докcинг",
  qa = () => "Doxxing",
  La = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Oa() : e === "pt" ? Ia() : e === "ch" ? Sa() : e === "de" ? Na() : e === "es" ? za() : e === "fr" ? Aa() : e === "it" ? Ra() : e === "jp" ? Da() : e === "pl" ? xa() : e === "ru" ? ja() : e === "uk" ? Pa() : qa()
  },
  Ua = () => "Released other's personal information without their consent",
  Ma = () => "Vazar informações pessoais de terceiros sem consentimento",
  Ba = () => "在未获同意的情况下公开他人个人信息",
  Ca = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  Ka = () => "Divulgó información personal de otra persona sin su consentimiento",
  Fa = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  $a = () => "Diffusione di informazioni personali di terzi senza consenso",
  Ga = () => "他人の個人情報を同意なく公開した。",
  Va = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  Ha = () => "Публикация личной информации других людей без их согласия",
  Wa = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  Ya = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  Ja = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ua() : e === "pt" ? Ma() : e === "ch" ? Ba() : e === "de" ? Ca() : e === "es" ? Ka() : e === "fr" ? Fa() : e === "it" ? $a() : e === "jp" ? Ga() : e === "pl" ? Va() : e === "ru" ? Ha() : e === "uk" ? Wa() : Ya()
  },
  Qa = () => "This email is already in use.",
  Za = () => "Este e-mail já está em uso.",
  Xa = () => "This email is already in use.",
  es = () => "This email is already in use.",
  ts = () => "Este correo electrónico ya está en uso.",
  ns = () => "This email is already in use.",
  rs = () => "Questa email è già in uso.",
  os = () => "This email is already in use.",
  is = () => "This email is already in use.",
  as = () => "This email is already in use.",
  ss = () => "This email is already in use.",
  us = () => "This email is already in use.",
  cs = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Qa() : e === "pt" ? Za() : e === "ch" ? Xa() : e === "de" ? es() : e === "es" ? ts() : e === "fr" ? ns() : e === "it" ? rs() : e === "jp" ? os() : e === "pl" ? is() : e === "ru" ? as() : e === "uk" ? ss() : us()
  },
  ls = n => `This email is already in use by user #${n.userId}.`,
  ds = n => `Este e-mail já está em uso pelo usuário #${n.userId}.`,
  _s = n => `This email is already in use by user #${n.userId}.`,
  fs = n => `This email is already in use by user #${n.userId}.`,
  ps = n => `Este correo electrónico ya está en uso por el usuario #${n.userId}.`,
  hs = n => `This email is already in use by user #${n.userId}.`,
  ms = n => `Questa email è già in uso dall'utente #${n.userId}.`,
  gs = n => `This email is already in use by user #${n.userId}.`,
  ws = n => `This email is already in use by user #${n.userId}.`,
  ys = n => `This email is already in use by user #${n.userId}.`,
  bs = n => `This email is already in use by user #${n.userId}.`,
  vs = n => `This email is already in use by user #${n.userId}.`,
  Es = (n, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ls(n) : e === "pt" ? ds(n) : e === "ch" ? _s(n) : e === "de" ? fs(n) : e === "es" ? ps(n) : e === "fr" ? hs(n) : e === "it" ? ms(n) : e === "jp" ? gs(n) : e === "pl" ? ws(n) : e === "ru" ? ys(n) : e === "uk" ? bs(n) : vs(n)
  },
  ks = () => "Enter a valid email address.",
  Ts = () => "Informe um endereço de e-mail válido.",
  Os = () => "Enter a valid email address.",
  Is = () => "Enter a valid email address.",
  Ss = () => "Introduce una dirección de correo electrónico válida.",
  Ns = () => "Enter a valid email address.",
  zs = () => "Inserisci un indirizzo email valido.",
  As = () => "Enter a valid email address.",
  Rs = () => "Enter a valid email address.",
  Ds = () => "Enter a valid email address.",
  xs = () => "Enter a valid email address.",
  js = () => "Enter a valid email address.",
  Ps = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ks() : e === "pt" ? Ts() : e === "ch" ? Os() : e === "de" ? Is() : e === "es" ? Ss() : e === "fr" ? Ns() : e === "it" ? zs() : e === "jp" ? As() : e === "pl" ? Rs() : e === "ru" ? Ds() : e === "uk" ? xs() : js()
  },
  qs = n => `Error while painting: ${n.err}`,
  Ls = n => `Erro enquanto pinta: ${n.err}`,
  Us = n => `绘制时出错：${n.err}`,
  Ms = n => `Fehler beim Malen: ${n.err}`,
  Bs = n => `Error al pintar: ${n.err}`,
  Cs = n => `Erreur lors de la peinture : ${n.err}`,
  Ks = n => `Errore durante la pittura: ${n.err}`,
  Fs = n => `ペイント中にエラーが発生しました: ${n.err}`,
  $s = n => `Błąd podczas malowania: ${n.err}`,
  Gs = n => `Ошибка при рисовании: ${n.err}`,
  Vs = n => `Помилка під час малювання: ${n.err}`,
  Hs = n => `Lỗi khi tô: ${n.err}`,
  Ws = (n, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? qs(n) : e === "pt" ? Ls(n) : e === "ch" ? Us(n) : e === "de" ? Ms(n) : e === "es" ? Bs(n) : e === "fr" ? Cs(n) : e === "it" ? Ks(n) : e === "jp" ? Fs(n) : e === "pl" ? $s(n) : e === "ru" ? Gs(n) : e === "uk" ? Vs(n) : Hs(n)
  },
  Ys = () => "Exceeded maximum number of characters",
  Js = () => "Excedeu o número máximo de caracteres permitidos",
  Qs = () => "超出最大字符数",
  Zs = () => "Maximale Zeichenanzahl überschritten",
  Xs = () => "Se excedió el número máximo de caracteres",
  eu = () => "Nombre maximal de caractères dépassé",
  tu = () => "Numero massimo di caratteri superato",
  nu = () => "最大文字数を超過しました",
  ru = () => "Przekroczono maksymalną liczbę znaków",
  ou = () => "Превышено максимальное количество символов",
  iu = () => "Перевищено максимальну кількість символів",
  au = () => "Đã vượt quá số ký tự tối đa",
  su = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ys() : e === "pt" ? Js() : e === "ch" ? Qs() : e === "de" ? Zs() : e === "es" ? Xs() : e === "fr" ? eu() : e === "it" ? tu() : e === "jp" ? nu() : e === "pl" ? ru() : e === "ru" ? ou() : e === "uk" ? iu() : au()
  },
  uu = () => "Verification code expired. Please request a new one.",
  cu = () => "Código de verificação expirado. Por favor, solicite um novo.",
  lu = () => "验证码已过期，请重新获取。",
  du = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  _u = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  fu = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  pu = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  hu = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  mu = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  gu = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  wu = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  yu = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  bu = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? uu() : e === "pt" ? cu() : e === "ch" ? lu() : e === "de" ? du() : e === "es" ? _u() : e === "fr" ? fu() : e === "it" ? pu() : e === "jp" ? hu() : e === "pl" ? mu() : e === "ru" ? gu() : e === "uk" ? wu() : yu()
  },
  vu = () => "Griefing",
  Eu = () => "Griefing",
  ku = () => "破坏行为",
  Tu = () => "Griefing",
  Ou = () => "Griefing",
  Iu = () => "Griefing",
  Su = () => "Griefing",
  Nu = () => "グリーフィング",
  zu = () => "Griefing",
  Au = () => "Гриферство",
  Ru = () => "Гріфінг",
  Du = () => "Griefing",
  xu = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? vu() : e === "pt" ? Eu() : e === "ch" ? ku() : e === "de" ? Tu() : e === "es" ? Ou() : e === "fr" ? Iu() : e === "it" ? Su() : e === "jp" ? Nu() : e === "pl" ? zu() : e === "ru" ? Au() : e === "uk" ? Ru() : Du()
  },
  ju = () => "Messed up with other's artworks",
  Pu = () => "Estragou os desenhos dos outros",
  qu = () => "破坏了他人的作品",
  Lu = () => "Kunstwerke anderer beschädigt",
  Uu = () => "Arruinó las obras de arte de otros",
  Mu = () => "A abîmé les œuvres des autres",
  Bu = () => "Ha rovinato i disegni degli altri",
  Cu = () => "他人の作品を荒らした",
  Ku = () => "Zniszczył prace innych",
  Fu = () => "Испортил чужие рисунки",
  $u = () => "Зіпсував роботи інших",
  Gu = () => "Phá hỏng tranh của người khác",
  Vu = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ju() : e === "pt" ? Pu() : e === "ch" ? qu() : e === "de" ? Lu() : e === "es" ? Uu() : e === "fr" ? Mu() : e === "it" ? Bu() : e === "jp" ? Cu() : e === "pl" ? Ku() : e === "ru" ? Fu() : e === "uk" ? $u() : Gu()
  },
  Hu = () => "Hate speech",
  Wu = () => "Discurso de Ódio",
  Yu = () => "仇恨言论",
  Ju = () => "Hassrede",
  Qu = () => "Discurso de odio",
  Zu = () => "Discours haineux",
  Xu = () => "Discorso d'odio",
  ec = () => "ヘイトスピーチ",
  tc = () => "Mowa nienawiści",
  nc = () => "Речь ненависти",
  rc = () => "Мова ворожнечі",
  oc = () => "Ngôn từ thù hằn",
  ic = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Hu() : e === "pt" ? Wu() : e === "ch" ? Yu() : e === "de" ? Ju() : e === "es" ? Qu() : e === "fr" ? Zu() : e === "it" ? Xu() : e === "jp" ? ec() : e === "pl" ? tc() : e === "ru" ? nc() : e === "uk" ? rc() : oc()
  },
  ac = () => "Racism, homophobia, hate symbols, etc",
  sc = () => "Racismo, homofobia, símbolos de ódio, etc.",
  uc = () => "种族主义、恐同、仇恨符号等",
  cc = () => "Rassismus, Homophobie, Hasssymbole usw.",
  lc = () => "Racismo, homofobia, símbolos de odio, etc.",
  dc = () => "Racisme, homophobie, symboles haineux, etc.",
  _c = () => "Razzismo, omofobia, simboli d'odio, ecc.",
  fc = () => "人種差別、同性愛嫌悪、ヘイトシンボルなど",
  pc = () => "Rasizm, homofobia, symbole nienawiści itp.",
  hc = () => "Расизм, гомофобия, символы ненависти и т. п.",
  mc = () => "Расизм, гомофобія, символи ненависті тощо",
  gc = () => "Phân biệt chủng tộc, kỳ thị đồng tính, biểu tượng thù ghét, v.v.",
  wc = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ac() : e === "pt" ? sc() : e === "ch" ? uc() : e === "de" ? cc() : e === "es" ? lc() : e === "fr" ? dc() : e === "it" ? _c() : e === "jp" ? fc() : e === "pl" ? pc() : e === "ru" ? hc() : e === "uk" ? mc() : gc()
  },
  yc = () => `This case has already been reviewed, resolved, or acted on by the moderation team.

The reported incident may have already resulted in a punishment, warning, previous decision, or internal review. Submitting the same case again without new evidence will not usually change the outcome.

If you have new and relevant evidence that was not included before, please submit a new report and clearly explain what new information is being provided.`,
  bc = () => `Este caso já foi analisado, resolvido ou tratado pela equipe de moderação.

O incidente denunciado pode já ter resultado em uma punição, advertência, decisão anterior ou revisão interna. Enviar o mesmo caso novamente sem novas evidências geralmente não altera o resultado.

Se você tiver evidências novas e relevantes que não foram incluídas antes, envie uma nova denúncia e explique claramente quais novas informações estão sendo fornecidas.`,
  vc = () => `此案件已由审核团队审查、解决或处理。

被举报的事件可能已经导致了处罚、警告、先前的裁决或内部审查。在没有新证据的情况下重复提交相同的案件通常不会改变结果。

如果您有此前未提供的、相关的新证据，请提交一份新的举报，并清楚说明所提供的新信息是什么。`,
  Ec = () => `Dieser Fall wurde vom Moderationsteam bereits überprüft, gelöst oder bearbeitet.

Der gemeldete Vorfall hat möglicherweise bereits zu einer Strafe, einer Verwarnung, einer früheren Entscheidung oder einer internen Überprüfung geführt. Denselben Fall ohne neue Beweise erneut einzureichen, ändert das Ergebnis in der Regel nicht.

Wenn du neue und relevante Beweise hast, die zuvor nicht enthalten waren, reiche bitte eine neue Meldung ein und erkläre klar, welche neuen Informationen vorliegen.`,
  kc = () => `Este caso ya ha sido revisado, resuelto o gestionado por el equipo de moderación.

El incidente reportado puede haber dado lugar ya a una sanción, una advertencia, una decisión previa o una revisión interna. Enviar el mismo caso de nuevo sin pruebas nuevas no suele cambiar el resultado.

Si tienes pruebas nuevas y relevantes que no se incluyeron antes, envía un nuevo reporte y explica claramente qué información nueva aportas.`,
  Tc = () => `Ce cas a déjà été examiné, résolu ou traité par l'équipe de modération.

L'incident signalé a peut-être déjà donné lieu à une sanction, un avertissement, une décision antérieure ou un examen interne. Soumettre à nouveau le même cas sans nouvelles preuves ne change généralement pas le résultat.

Si vous disposez de nouvelles preuves pertinentes qui n'avaient pas été incluses, veuillez soumettre un nouveau signalement et expliquer clairement quelles nouvelles informations vous apportez.`,
  Oc = () => `Questo caso è già stato esaminato, risolto o gestito dal team di moderazione.

L'incidente segnalato potrebbe aver già portato a una punizione, un avviso, una decisione precedente o una revisione interna. Inviare di nuovo lo stesso caso senza nuove prove di solito non cambia l'esito.

Se hai prove nuove e pertinenti non incluse in precedenza, invia una nuova segnalazione e spiega chiaramente quali nuove informazioni stai fornendo.`,
  Ic = () => `このケースはすでにモデレーションチームによって確認・解決・対応されています。

報告された事案は、すでに処分、警告、過去の判断、または内部審査につながっている可能性があります。新たな証拠なしに同じケースを再度提出しても、通常は結果は変わりません。

以前に含まれていなかった新しく関連性のある証拠がある場合は、新しい報告を提出し、どのような新しい情報を提供するのかを明確に説明してください。`,
  Sc = () => `Ta sprawa została już sprawdzona, rozstrzygnięta lub rozpatrzona przez zespół moderacji.

Zgłoszone zdarzenie mogło już skutkować karą, ostrzeżeniem, wcześniejszą decyzją lub wewnętrzną weryfikacją. Ponowne przesłanie tej samej sprawy bez nowych dowodów zwykle nie zmieni wyniku.

Jeśli masz nowe i istotne dowody, które nie zostały wcześniej dołączone, prześlij nowe zgłoszenie i jasno wyjaśnij, jakie nowe informacje przekazujesz.`,
  Nc = () => `Этот случай уже был рассмотрен, решён или обработан командой модерации.

Сообщённый инцидент мог уже привести к наказанию, предупреждению, ранее принятому решению или внутренней проверке. Повторная подача того же случая без новых доказательств обычно не меняет результат.

Если у вас есть новые и значимые доказательства, которые ранее не были предоставлены, отправьте новую жалобу и чётко объясните, какая новая информация предоставляется.`,
  zc = () => `Цю справу вже розглянуто, вирішено або опрацьовано командою модерації.

Повідомлений інцидент, можливо, вже призвів до покарання, попередження, попереднього рішення або внутрішньої перевірки. Повторне надсилання тієї самої справи без нових доказів зазвичай не змінює результату.

Якщо у вас є нові та важливі докази, які не були додані раніше, надішліть нову скаргу та чітко поясніть, яку нову інформацію ви надаєте.`,
  Ac = () => `Trường hợp này đã được đội ngũ kiểm duyệt xem xét, giải quyết hoặc xử lý.

Sự việc bị báo cáo có thể đã dẫn đến một hình phạt, cảnh cáo, quyết định trước đó hoặc một lần xem xét nội bộ. Việc gửi lại cùng một trường hợp mà không có bằng chứng mới thường sẽ không thay đổi kết quả.

Nếu bạn có bằng chứng mới và liên quan mà trước đây chưa được đưa vào, vui lòng gửi một báo cáo mới và giải thích rõ thông tin mới mà bạn cung cấp là gì.`,
  Rc = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? yc() : e === "pt" ? bc() : e === "ch" ? vc() : e === "de" ? Ec() : e === "es" ? kc() : e === "fr" ? Tc() : e === "it" ? Oc() : e === "jp" ? Ic() : e === "pl" ? Sc() : e === "ru" ? Nc() : e === "uk" ? zc() : Ac()
  },
  Dc = () => "Already Handled",
  xc = () => "Já tratado",
  jc = () => "已处理",
  Pc = () => "Bereits bearbeitet",
  qc = () => "Ya gestionado",
  Lc = () => "Déjà traité",
  Uc = () => "Già gestito",
  Mc = () => "対応済み",
  Bc = () => "Już rozpatrzone",
  Cc = () => "Уже рассмотрено",
  Kc = () => "Вже розглянуто",
  Fc = () => "Đã xử lý",
  $c = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Dc() : e === "pt" ? xc() : e === "ch" ? jc() : e === "de" ? Pc() : e === "es" ? qc() : e === "fr" ? Lc() : e === "it" ? Uc() : e === "jp" ? Mc() : e === "pl" ? Bc() : e === "ru" ? Cc() : e === "uk" ? Kc() : Fc()
  },
  Gc = () => `The reported action was allowed under the event rules or special conditions active at the time.

Some events, areas, game modes, or temporary rules may allow behavior that would normally be restricted elsewhere. Because the action was permitted in that specific context, no moderation action will be taken.

Please make sure to check the current event rules or special-area rules before submitting reports related to event gameplay.`,
  Vc = () => `A ação denunciada era permitida pelas regras do evento ou pelas condições especiais ativas no momento.

Alguns eventos, áreas, modos de jogo ou regras temporárias podem permitir comportamentos que normalmente seriam restritos em outros lugares. Como a ação era permitida nesse contexto específico, nenhuma ação de moderação será tomada.

Verifique as regras atuais do evento ou as regras de áreas especiais antes de enviar denúncias relacionadas à jogabilidade do evento.`,
  Hc = () => `被举报的行为在当时生效的活动规则或特殊条件下是被允许的。

某些活动、区域、游戏模式或临时规则可能允许在其他情况下通常会被限制的行为。由于该行为在特定情境下被允许，因此不会采取任何审核措施。

在提交与活动玩法相关的举报之前，请务必查看当前的活动规则或特殊区域规则。`,
  Wc = () => `Die gemeldete Aktion war nach den Event-Regeln oder den zu diesem Zeitpunkt geltenden Sonderbedingungen erlaubt.

Manche Events, Bereiche, Spielmodi oder temporäre Regeln können Verhalten erlauben, das anderswo normalerweise eingeschränkt wäre. Da die Aktion in diesem speziellen Kontext erlaubt war, wird keine Moderationsmaßnahme ergriffen.

Bitte prüfe die aktuellen Event-Regeln oder die Regeln für Sonderbereiche, bevor du Meldungen zum Event-Gameplay einreichst.`,
  Yc = () => `La acción reportada estaba permitida según las reglas del evento o las condiciones especiales activas en ese momento.

Algunos eventos, áreas, modos de juego o reglas temporales pueden permitir comportamientos que normalmente estarían restringidos en otros lugares. Dado que la acción estaba permitida en ese contexto específico, no se tomará ninguna medida de moderación.

Asegúrate de revisar las reglas actuales del evento o las reglas de áreas especiales antes de enviar reportes relacionados con la jugabilidad del evento.`,
  Jc = () => `L'action signalée était autorisée par les règles de l'événement ou par les conditions spéciales en vigueur à ce moment-là.

Certains événements, zones, modes de jeu ou règles temporaires peuvent autoriser des comportements qui seraient normalement restreints ailleurs. Comme l'action était autorisée dans ce contexte précis, aucune mesure de modération ne sera prise.

Veuillez vérifier les règles actuelles de l'événement ou les règles des zones spéciales avant de soumettre des signalements liés au gameplay d'un événement.`,
  Qc = () => `L'azione segnalata era consentita dalle regole dell'evento o dalle condizioni speciali attive in quel momento.

Alcuni eventi, aree, modalità di gioco o regole temporanee possono consentire comportamenti che altrove sarebbero normalmente vietati. Poiché l'azione era consentita in quel contesto specifico, non verrà presa alcuna azione di moderazione.

Assicurati di controllare le regole attuali dell'evento o le regole delle aree speciali prima di inviare segnalazioni relative al gameplay degli eventi.`,
  Zc = () => `報告された行為は、その時点で有効だったイベントのルールや特別な条件のもとで許可されていました。

一部のイベント、エリア、ゲームモード、または一時的なルールでは、通常なら他の場所で制限される行為が許可される場合があります。その特定の状況では行為が許可されていたため、モデレーションの措置は行われません。

イベントのプレイに関する報告を提出する前に、現在のイベントルールや特別エリアのルールを必ず確認してください。`,
  Xc = () => `Zgłoszone działanie było dozwolone zgodnie z zasadami wydarzenia lub specjalnymi warunkami obowiązującymi w tym czasie.

Niektóre wydarzenia, obszary, tryby gry lub zasady tymczasowe mogą zezwalać na zachowania, które gdzie indziej byłyby zwykle ograniczone. Ponieważ działanie było dozwolone w tym konkretnym kontekście, nie zostaną podjęte żadne działania moderacyjne.

Przed wysłaniem zgłoszeń dotyczących rozgrywki podczas wydarzenia sprawdź aktualne zasady wydarzenia lub zasady obszarów specjalnych.`,
  el = () => `Сообщённое действие было разрешено правилами события или особыми условиями, действовавшими в тот момент.

Некоторые события, зоны, режимы игры или временные правила могут разрешать поведение, которое обычно ограничено в других местах. Поскольку действие было разрешено в этом конкретном контексте, никаких мер модерации приниматься не будет.

Пожалуйста, проверяйте текущие правила события или правила особых зон, прежде чем отправлять жалобы, связанные с игровым процессом события.`,
  tl = () => `Повідомлена дія була дозволена правилами події або особливими умовами, що діяли на той момент.

Деякі події, зони, режими гри або тимчасові правила можуть дозволяти поведінку, яка зазвичай обмежена в інших місцях. Оскільки дія була дозволена в цьому конкретному контексті, жодних заходів модерації вжито не буде.

Будь ласка, перевіряйте чинні правила події або правила особливих зон, перш ніж надсилати скарги, пов'язані з ігровим процесом події.`,
  nl = () => `Hành động bị báo cáo được cho phép theo quy tắc sự kiện hoặc các điều kiện đặc biệt đang có hiệu lực vào thời điểm đó.

Một số sự kiện, khu vực, chế độ chơi hoặc quy tắc tạm thời có thể cho phép những hành vi mà ở nơi khác thường bị hạn chế. Vì hành động được cho phép trong bối cảnh cụ thể đó, sẽ không có biện pháp kiểm duyệt nào được áp dụng.

Vui lòng kiểm tra quy tắc sự kiện hiện hành hoặc quy tắc khu vực đặc biệt trước khi gửi báo cáo liên quan đến lối chơi trong sự kiện.`,
  rl = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Gc() : e === "pt" ? Vc() : e === "ch" ? Hc() : e === "de" ? Wc() : e === "es" ? Yc() : e === "fr" ? Jc() : e === "it" ? Qc() : e === "jp" ? Zc() : e === "pl" ? Xc() : e === "ru" ? el() : e === "uk" ? tl() : nl()
  },
  ol = () => "Allowed by Event or Special Rules",
  il = () => "Permitido por evento ou regras especiais",
  al = () => "活动或特殊规则允许",
  sl = () => "Durch Event oder Sonderregeln erlaubt",
  ul = () => "Permitido por evento o reglas especiales",
  cl = () => "Autorisé par un événement ou des règles spéciales",
  ll = () => "Consentito da evento o regole speciali",
  dl = () => "イベントまたは特別ルールにより許可",
  _l = () => "Dozwolone przez wydarzenie lub zasady specjalne",
  fl = () => "Разрешено событием или особыми правилами",
  pl = () => "Дозволено подією або особливими правилами",
  hl = () => "Được phép theo sự kiện hoặc quy tắc đặc biệt",
  ml = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ol() : e === "pt" ? il() : e === "ch" ? al() : e === "de" ? sl() : e === "es" ? ul() : e === "fr" ? cl() : e === "it" ? ll() : e === "jp" ? dl() : e === "pl" ? _l() : e === "ru" ? fl() : e === "uk" ? pl() : hl()
  },
  gl = () => `The reported issue appears to have been caused by a glitch, bug, lag, desync, or another technical problem.

Because the evidence suggests that the situation may not have been intentional player misconduct, we cannot treat it as a punishable rule violation.

If the issue continues, please report it as a bug or provide more evidence showing that a player intentionally abused the glitch.`,
  wl = () => `O problema denunciado parece ter sido causado por uma falha, bug, lag, dessincronização ou outro problema técnico.

Como as evidências sugerem que a situação pode não ter sido má conduta intencional de um jogador, não podemos tratá-la como uma violação de regras passível de punição.

Se o problema persistir, denuncie-o como um bug ou forneça mais evidências mostrando que um jogador abusou intencionalmente da falha.`,
  yl = () => `被举报的问题似乎是由故障、漏洞、延迟、不同步或其他技术问题导致的。

由于证据表明该情况可能并非玩家的故意不当行为，我们无法将其视为可处罚的违规行为。

如果问题持续存在，请将其作为漏洞举报，或提供更多证据，证明有玩家故意利用了该故障。`,
  bl = () => `Das gemeldete Problem scheint durch einen Glitch, Bug, Lag, eine Desynchronisation oder ein anderes technisches Problem verursacht worden zu sein.

Da die Beweise darauf hindeuten, dass es sich möglicherweise nicht um vorsätzliches Fehlverhalten eines Spielers handelte, können wir es nicht als strafbaren Regelverstoß behandeln.

Wenn das Problem weiterhin besteht, melde es bitte als Bug oder liefere weitere Beweise, die zeigen, dass ein Spieler den Glitch absichtlich ausgenutzt hat.`,
  vl = () => `El problema reportado parece haber sido causado por un fallo, un error, lag, desincronización u otro problema técnico.

Dado que las pruebas sugieren que la situación pudo no ser una mala conducta intencional de un jugador, no podemos tratarla como una violación de reglas sancionable.

Si el problema continúa, repórtalo como un error o aporta más pruebas que demuestren que un jugador abusó intencionalmente del fallo.`,
  El = () => `Le problème signalé semble avoir été causé par un bug, un glitch, du lag, une désynchronisation ou un autre problème technique.

Comme les preuves suggèrent que la situation n'était peut-être pas une faute intentionnelle d'un joueur, nous ne pouvons pas la traiter comme une infraction passible de sanction.

Si le problème persiste, veuillez le signaler en tant que bug ou fournir davantage de preuves montrant qu'un joueur a intentionnellement abusé du bug.`,
  kl = () => `Il problema segnalato sembra essere stato causato da un glitch, un bug, lag, desincronizzazione o un altro problema tecnico.

Poiché le prove suggeriscono che la situazione potrebbe non essere stata una cattiva condotta intenzionale di un giocatore, non possiamo trattarla come una violazione delle regole punibile.

Se il problema persiste, segnalalo come bug o fornisci ulteriori prove che mostrino che un giocatore ha abusato intenzionalmente del glitch.`,
  Tl = () => `報告された問題は、不具合、バグ、ラグ、同期ずれ、またはその他の技術的な問題によって引き起こされた可能性があります。

証拠からは、プレイヤーの意図的な不正行為ではなかった可能性が示唆されるため、処罰の対象となるルール違反として扱うことはできません。

問題が続く場合は、バグとして報告するか、プレイヤーが意図的に不具合を悪用したことを示すさらなる証拠を提出してください。`,
  Ol = () => `Zgłoszony problem prawdopodobnie został spowodowany usterką, błędem, lagiem, desynchronizacją lub innym problemem technicznym.

Ponieważ dowody sugerują, że sytuacja mogła nie być celowym niewłaściwym zachowaniem gracza, nie możemy potraktować jej jako karalnego naruszenia zasad.

Jeśli problem będzie się powtarzał, zgłoś go jako błąd lub dostarcz więcej dowodów pokazujących, że gracz celowo wykorzystał usterkę.`,
  Il = () => `Сообщённая проблема, по-видимому, была вызвана сбоем, багом, лагом, рассинхронизацией или другой технической неполадкой.

Поскольку доказательства указывают на то, что ситуация могла не быть умышленным нарушением со стороны игрока, мы не можем рассматривать её как наказуемое нарушение правил.

Если проблема сохраняется, сообщите о ней как об ошибке или предоставьте дополнительные доказательства того, что игрок умышленно воспользовался сбоем.`,
  Sl = () => `Повідомлена проблема, схоже, була спричинена збоєм, багом, лагом, розсинхронізацією або іншою технічною несправністю.

Оскільки докази свідчать, що ситуація могла не бути навмисною неправомірною поведінкою гравця, ми не можемо розглядати її як порушення правил, що карається.

Якщо проблема повторюється, повідомте про неї як про помилку або надайте додаткові докази того, що гравець навмисно скористався збоєм.`,
  Nl = () => `Vấn đề bị báo cáo có vẻ do một lỗi kỹ thuật, bug, lag, mất đồng bộ hoặc một sự cố kỹ thuật khác gây ra.

Vì bằng chứng cho thấy tình huống có thể không phải là hành vi sai phạm cố ý của người chơi, chúng tôi không thể xem đó là vi phạm quy tắc có thể bị xử phạt.

Nếu vấn đề vẫn tiếp diễn, vui lòng báo cáo dưới dạng lỗi hoặc cung cấp thêm bằng chứng cho thấy người chơi đã cố ý lợi dụng lỗi đó.`,
  zl = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? gl() : e === "pt" ? wl() : e === "ch" ? yl() : e === "de" ? bl() : e === "es" ? vl() : e === "fr" ? El() : e === "it" ? kl() : e === "jp" ? Tl() : e === "pl" ? Ol() : e === "ru" ? Il() : e === "uk" ? Sl() : Nl()
  },
  Al = () => "Caused by a Glitch",
  Rl = () => "Causado por uma falha",
  Dl = () => "由故障导致",
  xl = () => "Durch einen Glitch verursacht",
  jl = () => "Causado por un fallo",
  Pl = () => "Causé par un bug",
  ql = () => "Causato da un glitch",
  Ll = () => "不具合が原因",
  Ul = () => "Spowodowane usterką",
  Ml = () => "Вызвано сбоем",
  Bl = () => "Спричинено збоєм",
  Cl = () => "Do lỗi kỹ thuật gây ra",
  Kl = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Al() : e === "pt" ? Rl() : e === "ch" ? Dl() : e === "de" ? xl() : e === "es" ? jl() : e === "fr" ? Pl() : e === "it" ? ql() : e === "jp" ? Ll() : e === "pl" ? Ul() : e === "ru" ? Ml() : e === "uk" ? Bl() : Cl()
  },
  Fl = () => `We could not confirm what happened based on the information provided.

The report may show part of the situation, but it does not include enough context for the moderation team to understand the full incident, verify the sequence of events, or determine whether a rule was broken.

When submitting a report, please include clear evidence, relevant timestamps, location or coordinates when applicable, and enough surrounding context to help us understand what happened before and after the reported action.`,
  $l = () => `Não foi possível confirmar o que aconteceu com base nas informações fornecidas.

A denúncia pode mostrar parte da situação, mas não inclui contexto suficiente para que a equipe de moderação entenda o incidente completo, verifique a sequência dos eventos ou determine se uma regra foi violada.

Ao enviar uma denúncia, inclua evidências claras, registros de horário relevantes, localização ou coordenadas quando aplicável e contexto suficiente para nos ajudar a entender o que aconteceu antes e depois da ação denunciada.`,
  Gl = () => `根据所提供的信息，我们无法确认发生了什么。

该举报可能展示了部分情况，但没有包含足够的背景信息，使审核团队无法了解整个事件、核实事件的先后顺序，或判断是否违反了规则。

提交举报时，请附上清晰的证据、相关的时间戳、适用时的位置或坐标，以及足够的背景信息，帮助我们了解被举报行为前后发生了什么。`,
  Vl = () => `Anhand der bereitgestellten Informationen konnten wir nicht bestätigen, was passiert ist.

Die Meldung zeigt möglicherweise einen Teil der Situation, enthält aber nicht genug Kontext, damit das Moderationsteam den gesamten Vorfall verstehen, den Ablauf der Ereignisse überprüfen oder feststellen kann, ob eine Regel verletzt wurde.

Füge beim Einreichen einer Meldung bitte klare Beweise, relevante Zeitstempel, gegebenenfalls Ort oder Koordinaten sowie genügend Kontext hinzu, damit wir verstehen, was vor und nach der gemeldeten Aktion geschah.`,
  Hl = () => `No pudimos confirmar qué ocurrió con la información proporcionada.

El reporte puede mostrar parte de la situación, pero no incluye contexto suficiente para que el equipo de moderación entienda el incidente completo, verifique la secuencia de los hechos o determine si se infringió una regla.

Al enviar un reporte, incluye pruebas claras, marcas de tiempo relevantes, ubicación o coordenadas cuando corresponda y contexto suficiente para ayudarnos a entender qué ocurrió antes y después de la acción reportada.`,
  Wl = () => `Nous n'avons pas pu confirmer ce qui s'est passé sur la base des informations fournies.

Le signalement montre peut-être une partie de la situation, mais il ne fournit pas assez de contexte pour que l'équipe de modération comprenne l'incident dans son ensemble, vérifie le déroulement des événements ou détermine si une règle a été enfreinte.

Lorsque vous soumettez un signalement, veuillez inclure des preuves claires, les horodatages pertinents, l'emplacement ou les coordonnées le cas échéant, et suffisamment de contexte pour nous aider à comprendre ce qui s'est passé avant et après l'action signalée.`,
  Yl = () => `Non siamo riusciti a confermare cosa sia successo in base alle informazioni fornite.

La segnalazione può mostrare parte della situazione, ma non include abbastanza contesto per permettere al team di moderazione di comprendere l'intero incidente, verificare la sequenza degli eventi o stabilire se una regola sia stata violata.

Quando invii una segnalazione, includi prove chiare, marche temporali pertinenti, posizione o coordinate quando applicabile e contesto sufficiente per aiutarci a capire cosa è successo prima e dopo l'azione segnalata.`,
  Jl = () => `提供された情報からは、何が起きたのかを確認できませんでした。

この報告は状況の一部を示しているかもしれませんが、モデレーションチームが事案の全体像を把握し、出来事の流れを確認し、ルール違反があったかどうかを判断するのに十分な背景情報が含まれていません。

報告を提出する際は、明確な証拠、関連するタイムスタンプ、該当する場合は場所や座標、そして報告された行為の前後に何が起きたかを理解するのに十分な背景情報を含めてください。`,
  Ql = () => `Na podstawie podanych informacji nie mogliśmy potwierdzić, co się wydarzyło.

Zgłoszenie może pokazywać część sytuacji, ale nie zawiera wystarczającego kontekstu, aby zespół moderacji mógł zrozumieć całe zdarzenie, zweryfikować przebieg wydarzeń lub ustalić, czy doszło do naruszenia zasad.

Wysyłając zgłoszenie, dołącz wyraźne dowody, odpowiednie znaczniki czasu, lokalizację lub współrzędne, jeśli dotyczy, oraz wystarczający kontekst, który pomoże nam zrozumieć, co wydarzyło się przed zgłoszonym działaniem i po nim.`,
  Zl = () => `На основании предоставленной информации мы не смогли подтвердить, что произошло.

Жалоба может показывать часть ситуации, но в ней недостаточно контекста, чтобы команда модерации могла понять инцидент целиком, проверить последовательность событий или определить, было ли нарушено правило.

При отправке жалобы прилагайте чёткие доказательства, соответствующие временные метки, местоположение или координаты, если применимо, и достаточный контекст, чтобы помочь нам понять, что происходило до и после указанного действия.`,
  Xl = () => `На основі наданої інформації ми не змогли підтвердити, що сталося.

Скарга може показувати частину ситуації, але в ній недостатньо контексту, щоб команда модерації зрозуміла весь інцидент, перевірила послідовність подій або визначила, чи було порушено правило.

Надсилаючи скаргу, додавайте чіткі докази, відповідні позначки часу, місце або координати, якщо це доречно, і достатньо контексту, щоб допомогти нам зрозуміти, що відбувалося до та після зазначеної дії.`,
  ed = () => `Chúng tôi không thể xác nhận điều gì đã xảy ra dựa trên thông tin được cung cấp.

Báo cáo có thể cho thấy một phần tình huống, nhưng không bao gồm đủ bối cảnh để đội ngũ kiểm duyệt hiểu toàn bộ sự việc, xác minh trình tự các sự kiện hoặc xác định liệu có vi phạm quy tắc hay không.

Khi gửi báo cáo, vui lòng kèm theo bằng chứng rõ ràng, dấu thời gian liên quan, vị trí hoặc tọa độ khi cần, và đủ bối cảnh xung quanh để giúp chúng tôi hiểu điều gì đã xảy ra trước và sau hành động bị báo cáo.`,
  td = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Fl() : e === "pt" ? $l() : e === "ch" ? Gl() : e === "de" ? Vl() : e === "es" ? Hl() : e === "fr" ? Wl() : e === "it" ? Yl() : e === "jp" ? Jl() : e === "pl" ? Ql() : e === "ru" ? Zl() : e === "uk" ? Xl() : ed()
  },
  nd = () => "Insufficient Context",
  rd = () => "Contexto insuficiente",
  od = () => "背景信息不足",
  id = () => "Unzureichender Kontext",
  ad = () => "Contexto insuficiente",
  sd = () => "Contexte insuffisant",
  ud = () => "Contesto insufficiente",
  cd = () => "情報が不十分",
  ld = () => "Niewystarczający kontekst",
  dd = () => "Недостаточно контекста",
  _d = () => "Недостатньо контексту",
  fd = () => "Không đủ bối cảnh",
  pd = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? nd() : e === "pt" ? rd() : e === "ch" ? od() : e === "de" ? id() : e === "es" ? ad() : e === "fr" ? sd() : e === "it" ? ud() : e === "jp" ? cd() : e === "pl" ? ld() : e === "ru" ? dd() : e === "uk" ? _d() : fd()
  },
  hd = () => `The report contains incorrect, incomplete, inaccessible, or unusable information.

This can happen when the evidence does not match the report, the link is broken, or required details are missing.

Please review the information carefully before submitting a report. Make sure to report the correct player, make sure that it is an actual violation, and make sure to submit enough context details to help the moderation team investigate reports properly.`,
  md = () => `A denúncia contém informações incorretas, incompletas, inacessíveis ou inutilizáveis.

Isso pode acontecer quando as evidências não correspondem à denúncia, o link está quebrado ou detalhes obrigatórios estão faltando.

Revise as informações com atenção antes de enviar uma denúncia. Certifique-se de denunciar o jogador correto, de que se trata de uma violação real e de fornecer detalhes de contexto suficientes para ajudar a equipe de moderação a investigar as denúncias adequadamente.`,
  gd = () => `该举报包含不正确、不完整、无法访问或无法使用的信息。

这可能是因为证据与举报内容不符、链接失效，或缺少必要的细节。

提交举报前，请仔细核对信息。请确保举报的是正确的玩家、确实存在违规行为，并提供足够的背景细节，以帮助审核团队妥善调查举报。`,
  wd = () => `Die Meldung enthält falsche, unvollständige, nicht zugängliche oder unbrauchbare Informationen.

Das kann passieren, wenn die Beweise nicht zur Meldung passen, der Link defekt ist oder erforderliche Angaben fehlen.

Bitte überprüfe die Informationen sorgfältig, bevor du eine Meldung einreichst. Stelle sicher, dass du den richtigen Spieler meldest, dass es sich tatsächlich um einen Verstoß handelt und dass du genügend Kontextdetails angibst, damit das Moderationsteam Meldungen ordnungsgemäß untersuchen kann.`,
  yd = () => `El reporte contiene información incorrecta, incompleta, inaccesible o inservible.

Esto puede ocurrir cuando las pruebas no coinciden con el reporte, el enlace está roto o faltan datos necesarios.

Revisa la información con cuidado antes de enviar un reporte. Asegúrate de reportar al jugador correcto, de que se trata de una infracción real y de aportar suficientes detalles de contexto para ayudar al equipo de moderación a investigar los reportes adecuadamente.`,
  bd = () => `Le signalement contient des informations incorrectes, incomplètes, inaccessibles ou inutilisables.

Cela peut arriver lorsque les preuves ne correspondent pas au signalement, que le lien est rompu ou que des détails requis sont manquants.

Veuillez vérifier attentivement les informations avant de soumettre un signalement. Assurez-vous de signaler le bon joueur, qu'il s'agit bien d'une véritable infraction et de fournir suffisamment de détails de contexte pour aider l'équipe de modération à enquêter correctement sur les signalements.`,
  vd = () => `La segnalazione contiene informazioni errate, incomplete, inaccessibili o inutilizzabili.

Ciò può accadere quando le prove non corrispondono alla segnalazione, il link è interrotto o mancano dettagli obbligatori.

Controlla attentamente le informazioni prima di inviare una segnalazione. Assicurati di segnalare il giocatore corretto, che si tratti di una violazione reale e di fornire dettagli di contesto sufficienti per aiutare il team di moderazione a investigare correttamente le segnalazioni.`,
  Ed = () => `この報告には、誤った、不完全な、アクセスできない、または使用できない情報が含まれています。

これは、証拠が報告内容と一致しない、リンクが切れている、または必要な詳細が欠けている場合に起こり得ます。

報告を提出する前に、情報を注意深く確認してください。正しいプレイヤーを報告していること、実際に違反であること、そしてモデレーションチームが報告を適切に調査できるよう十分な背景情報を提出していることを確認してください。`,
  kd = () => `Zgłoszenie zawiera nieprawidłowe, niepełne, niedostępne lub nieprzydatne informacje.

Może się to zdarzyć, gdy dowody nie pasują do zgłoszenia, link jest nieaktywny lub brakuje wymaganych szczegółów.

Przed wysłaniem zgłoszenia dokładnie sprawdź informacje. Upewnij się, że zgłaszasz właściwego gracza, że jest to rzeczywiste naruszenie oraz że podajesz wystarczające szczegóły kontekstu, aby pomóc zespołowi moderacji prawidłowo zbadać zgłoszenia.`,
  Td = () => `Жалоба содержит неверную, неполную, недоступную или непригодную информацию.

Это может произойти, когда доказательства не соответствуют жалобе, ссылка не работает или отсутствуют необходимые сведения.

Внимательно проверьте информацию перед отправкой жалобы. Убедитесь, что вы жалуетесь на нужного игрока, что это действительно нарушение, и что вы предоставили достаточно контекстных деталей, чтобы помочь команде модерации правильно расследовать жалобы.`,
  Od = () => `Скарга містить неправильну, неповну, недоступну або непридатну інформацію.

Це може статися, коли докази не відповідають скарзі, посилання не працює або відсутні обов'язкові деталі.

Уважно перевірте інформацію перед надсиланням скарги. Переконайтеся, що ви скаржитеся на правильного гравця, що це справді порушення, і що ви надаєте достатньо контекстних деталей, щоб допомогти команді модерації належно розслідувати скарги.`,
  Id = () => `Báo cáo chứa thông tin không chính xác, không đầy đủ, không truy cập được hoặc không sử dụng được.

Điều này có thể xảy ra khi bằng chứng không khớp với báo cáo, liên kết bị hỏng hoặc thiếu các chi tiết bắt buộc.

Vui lòng xem lại thông tin cẩn thận trước khi gửi báo cáo. Hãy chắc chắn rằng bạn báo cáo đúng người chơi, rằng đó thực sự là một vi phạm, và cung cấp đủ chi tiết bối cảnh để giúp đội ngũ kiểm duyệt điều tra báo cáo một cách hợp lý.`,
  Sd = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? hd() : e === "pt" ? md() : e === "ch" ? gd() : e === "de" ? wd() : e === "es" ? yd() : e === "fr" ? bd() : e === "it" ? vd() : e === "jp" ? Ed() : e === "pl" ? kd() : e === "ru" ? Td() : e === "uk" ? Od() : Id()
  },
  Nd = () => "Invalid Information",
  zd = () => "Informação inválida",
  Ad = () => "信息无效",
  Rd = () => "Ungültige Informationen",
  Dd = () => "Información no válida",
  xd = () => "Informations non valides",
  jd = () => "Informazioni non valide",
  Pd = () => "無効な情報",
  qd = () => "Nieprawidłowe informacje",
  Ld = () => "Недействительная информация",
  Ud = () => "Недійсна інформація",
  Md = () => "Thông tin không hợp lệ",
  Bd = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Nd() : e === "pt" ? zd() : e === "ch" ? Ad() : e === "de" ? Rd() : e === "es" ? Dd() : e === "fr" ? xd() : e === "it" ? jd() : e === "jp" ? Pd() : e === "pl" ? qd() : e === "ru" ? Ld() : e === "uk" ? Ud() : Md()
  },
  Cd = () => `The reported behavior does not appear to violate the current rules.

The situation may have been frustrating, unwanted, or disruptive from your perspective, but based on the evidence provided, it does not meet the criteria for a rule violation.

Moderation actions are only taken when a report clearly shows behavior that breaks the rules. If you believe this decision is incorrect, please make sure future reports include enough context explaining why you believe that a rule was violated.`,
  Kd = () => `O comportamento denunciado não parece violar as regras atuais.

A situação pode ter sido frustrante, indesejada ou perturbadora do seu ponto de vista, mas, com base nas evidências fornecidas, ela não atende aos critérios de uma violação de regra.

Ações de moderação só são tomadas quando uma denúncia mostra claramente um comportamento que infringe as regras. Se você acredita que esta decisão está incorreta, certifique-se de que futuras denúncias incluam contexto suficiente explicando por que você acredita que uma regra foi violada.`,
  Fd = () => `被举报的行为似乎并未违反当前规则。

从您的角度看，这种情况可能令人沮丧、不受欢迎或具有干扰性，但根据所提供的证据，它并不符合违规的标准。

只有当举报清楚地显示出违反规则的行为时，才会采取审核措施。如果您认为此决定有误，请确保今后的举报包含足够的背景信息，说明您为何认为某条规则被违反。`,
  $d = () => `Das gemeldete Verhalten scheint nicht gegen die aktuellen Regeln zu verstoßen.

Die Situation mag aus deiner Sicht frustrierend, unerwünscht oder störend gewesen sein, aber auf Grundlage der vorgelegten Beweise erfüllt sie nicht die Kriterien für einen Regelverstoß.

Moderationsmaßnahmen werden nur ergriffen, wenn eine Meldung eindeutig ein Verhalten zeigt, das gegen die Regeln verstößt. Wenn du der Meinung bist, dass diese Entscheidung falsch ist, achte bitte darauf, dass künftige Meldungen genügend Kontext enthalten und erklären, warum du glaubst, dass eine Regel verletzt wurde.`,
  Gd = () => `El comportamiento reportado no parece infringir las reglas actuales.

La situación pudo haber sido frustrante, no deseada o molesta desde tu punto de vista, pero, según las pruebas aportadas, no cumple los criterios de una infracción de reglas.

Las acciones de moderación solo se toman cuando un reporte muestra claramente un comportamiento que rompe las reglas. Si crees que esta decisión es incorrecta, asegúrate de que los reportes futuros incluyan suficiente contexto que explique por qué consideras que se infringió una regla.`,
  Vd = () => `Le comportement signalé ne semble pas enfreindre les règles actuelles.

La situation a peut-être été frustrante, indésirable ou perturbante de votre point de vue, mais d'après les preuves fournies, elle ne remplit pas les critères d'une infraction aux règles.

Des mesures de modération ne sont prises que lorsqu'un signalement montre clairement un comportement qui enfreint les règles. Si vous pensez que cette décision est incorrecte, veillez à ce que vos futurs signalements incluent suffisamment de contexte expliquant pourquoi vous estimez qu'une règle a été enfreinte.`,
  Hd = () => `Il comportamento segnalato non sembra violare le regole attuali.

La situazione potrebbe essere stata frustrante, indesiderata o fastidiosa dal tuo punto di vista, ma in base alle prove fornite non soddisfa i criteri di una violazione delle regole.

Le azioni di moderazione vengono intraprese solo quando una segnalazione mostra chiaramente un comportamento che infrange le regole. Se ritieni che questa decisione sia errata, assicurati che le segnalazioni future includano contesto sufficiente a spiegare perché ritieni che una regola sia stata violata.`,
  Wd = () => `報告された行為は、現在のルールに違反していないようです。

その状況は、あなたの視点ではいら立たしく、望ましくなく、または迷惑なものだったかもしれませんが、提供された証拠に基づくと、ルール違反の基準を満たしていません。

モデレーションの措置は、報告が明確にルールを破る行為を示している場合にのみ行われます。この判断が誤っていると思われる場合は、今後の報告に、なぜルール違反だと考えるのかを説明する十分な背景情報を含めるようにしてください。`,
  Yd = () => `Zgłoszone zachowanie nie wydaje się naruszać obowiązujących zasad.

Sytuacja mogła być z twojej perspektywy frustrująca, niechciana lub uciążliwa, ale na podstawie dostarczonych dowodów nie spełnia kryteriów naruszenia zasad.

Działania moderacyjne są podejmowane tylko wtedy, gdy zgłoszenie wyraźnie pokazuje zachowanie łamiące zasady. Jeśli uważasz, że ta decyzja jest błędna, zadbaj o to, aby przyszłe zgłoszenia zawierały wystarczający kontekst wyjaśniający, dlaczego uważasz, że doszło do naruszenia zasad.`,
  Jd = () => `Указанное поведение, по-видимому, не нарушает действующих правил.

С вашей точки зрения ситуация могла быть неприятной, нежелательной или мешающей, но на основании предоставленных доказательств она не соответствует критериям нарушения правил.

Меры модерации принимаются только тогда, когда жалоба чётко показывает поведение, нарушающее правила. Если вы считаете, что это решение неверно, постарайтесь, чтобы будущие жалобы содержали достаточно контекста, объясняющего, почему вы считаете, что правило было нарушено.`,
  Qd = () => `Зазначена поведінка, схоже, не порушує чинних правил.

З вашого погляду ситуація могла бути неприємною, небажаною або такою, що заважає, але на основі наданих доказів вона не відповідає критеріям порушення правил.

Заходи модерації вживаються лише тоді, коли скарга чітко показує поведінку, що порушує правила. Якщо ви вважаєте, що це рішення неправильне, подбайте, щоб майбутні скарги містили достатньо контексту з поясненням, чому ви вважаєте, що правило було порушено.`,
  Zd = () => `Hành vi bị báo cáo dường như không vi phạm các quy tắc hiện hành.

Tình huống có thể gây bực bội, không mong muốn hoặc gây phiền toái từ góc nhìn của bạn, nhưng dựa trên bằng chứng được cung cấp, nó không đáp ứng tiêu chí của một vi phạm quy tắc.

Các biện pháp kiểm duyệt chỉ được áp dụng khi một báo cáo cho thấy rõ hành vi vi phạm quy tắc. Nếu bạn cho rằng quyết định này không đúng, hãy đảm bảo các báo cáo trong tương lai có đủ bối cảnh giải thích vì sao bạn tin rằng một quy tắc đã bị vi phạm.`,
  Xd = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Cd() : e === "pt" ? Kd() : e === "ch" ? Fd() : e === "de" ? $d() : e === "es" ? Gd() : e === "fr" ? Vd() : e === "it" ? Hd() : e === "jp" ? Wd() : e === "pl" ? Yd() : e === "ru" ? Jd() : e === "uk" ? Qd() : Zd()
  },
  e_ = () => "No Rule Violation",
  t_ = () => "Nenhuma violação de regra",
  n_ = () => "未违反规则",
  r_ = () => "Kein Regelverstoß",
  o_ = () => "Sin infracción de reglas",
  i_ = () => "Aucune infraction aux règles",
  a_ = () => "Nessuna violazione delle regole",
  s_ = () => "ルール違反なし",
  u_ = () => "Brak naruszenia zasad",
  c_ = () => "Нарушения правил нет",
  l_ = () => "Порушення правил немає",
  d_ = () => "Không vi phạm quy tắc",
  __ = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? e_() : e === "pt" ? t_() : e === "ch" ? n_() : e === "de" ? r_() : e === "es" ? o_() : e === "fr" ? i_() : e === "it" ? a_() : e === "jp" ? s_() : e === "pl" ? u_() : e === "ru" ? c_() : e === "uk" ? l_() : d_()
  },
  f_ = () => `The report shows behavior that may be questionable, but it is not severe or clear enough to justify a moderation action.

Some situations may be inappropriate, annoying, or borderline, but still not reach the threshold required for a punishment. In these cases, the moderation team may choose not to take formal action unless the behavior continues or becomes more serious.

If this happens again, please submit a new report with additional evidence showing a repeated pattern or a more serious violation.`,
  p_ = () => `A denúncia mostra um comportamento que pode ser questionável, mas não é grave nem claro o suficiente para justificar uma ação de moderação.

Algumas situações podem ser inadequadas, irritantes ou limítrofes, mas ainda assim não atingem o limite necessário para uma punição. Nesses casos, a equipe de moderação pode optar por não tomar uma ação formal, a menos que o comportamento continue ou se torne mais grave.

Se isso acontecer novamente, envie uma nova denúncia com evidências adicionais que mostrem um padrão repetido ou uma violação mais grave.`,
  h_ = () => `该举报显示的行为可能存在问题，但还不够严重或明确，不足以采取审核措施。

某些情况可能不恰当、令人厌烦或处于灰色地带，但仍未达到处罚所需的门槛。在这种情况下，除非该行为继续发生或变得更加严重，否则审核团队可能选择不采取正式行动。

如果此情况再次发生，请提交一份新的举报，并附上能显示重复行为模式或更严重违规的额外证据。`,
  m_ = () => `Die Meldung zeigt ein Verhalten, das fragwürdig sein mag, aber nicht schwerwiegend oder eindeutig genug ist, um eine Moderationsmaßnahme zu rechtfertigen.

Manche Situationen sind vielleicht unangemessen, störend oder grenzwertig, erreichen aber dennoch nicht die für eine Strafe erforderliche Schwelle. In solchen Fällen kann das Moderationsteam entscheiden, keine formelle Maßnahme zu ergreifen, sofern das Verhalten nicht anhält oder schwerwiegender wird.

Wenn dies erneut geschieht, reiche bitte eine neue Meldung mit zusätzlichen Beweisen ein, die ein wiederholtes Muster oder einen schwerwiegenderen Verstoß zeigen.`,
  g_ = () => `El reporte muestra un comportamiento que puede ser cuestionable, pero no es lo bastante grave ni claro como para justificar una acción de moderación.

Algunas situaciones pueden ser inapropiadas, molestas o estar en el límite, pero aun así no alcanzan el umbral necesario para una sanción. En estos casos, el equipo de moderación puede optar por no tomar medidas formales a menos que el comportamiento continúe o se agrave.

Si esto vuelve a ocurrir, envía un nuevo reporte con pruebas adicionales que muestren un patrón repetido o una infracción más grave.`,
  w_ = () => `Le signalement montre un comportement qui peut être discutable, mais qui n'est pas assez grave ou clair pour justifier une mesure de modération.

Certaines situations peuvent être inappropriées, agaçantes ou limites, sans pour autant atteindre le seuil requis pour une sanction. Dans ces cas, l'équipe de modération peut choisir de ne pas prendre de mesure formelle, sauf si le comportement persiste ou s'aggrave.

Si cela se reproduit, veuillez soumettre un nouveau signalement avec des preuves supplémentaires montrant un schéma répété ou une infraction plus grave.`,
  y_ = () => `La segnalazione mostra un comportamento che può essere discutibile, ma non è abbastanza grave o chiaro da giustificare un'azione di moderazione.

Alcune situazioni possono essere inappropriate, fastidiose o al limite, ma non raggiungono comunque la soglia richiesta per una punizione. In questi casi, il team di moderazione può scegliere di non intervenire formalmente, a meno che il comportamento non continui o diventi più grave.

Se dovesse ripetersi, invia una nuova segnalazione con prove aggiuntive che mostrino uno schema ripetuto o una violazione più grave.`,
  b_ = () => `この報告は、問題があるかもしれない行為を示していますが、モデレーションの措置を正当化するほど深刻でも明確でもありません。

一部の状況は不適切だったり、迷惑だったり、際どいものだったりするかもしれませんが、それでも処分に必要な基準には達していません。こうした場合、行為が続いたりより深刻になったりしない限り、モデレーションチームは正式な措置を取らないことを選ぶことがあります。

再び起きた場合は、繰り返しのパターンやより深刻な違反を示す追加の証拠を添えて、新しい報告を提出してください。`,
  v_ = () => `Zgłoszenie pokazuje zachowanie, które może budzić wątpliwości, ale nie jest na tyle poważne ani jednoznaczne, aby uzasadniać działanie moderacyjne.

Niektóre sytuacje mogą być nieodpowiednie, irytujące lub graniczne, a mimo to nie osiągają progu wymaganego do nałożenia kary. W takich przypadkach zespół moderacji może nie podjąć formalnych działań, chyba że zachowanie będzie się powtarzać lub stanie się poważniejsze.

Jeśli sytuacja się powtórzy, prześlij nowe zgłoszenie z dodatkowymi dowodami pokazującymi powtarzający się wzorzec lub poważniejsze naruszenie.`,
  E_ = () => `Жалоба показывает поведение, которое может вызывать сомнения, но оно недостаточно серьёзное или явное, чтобы оправдать меры модерации.

Некоторые ситуации могут быть неуместными, раздражающими или пограничными, но всё же не достигают порога, необходимого для наказания. В таких случаях команда модерации может решить не предпринимать официальных действий, если поведение не продолжится или не станет более серьёзным.

Если это повторится, отправьте новую жалобу с дополнительными доказательствами, показывающими повторяющийся характер или более серьёзное нарушение.`,
  k_ = () => `Скарга показує поведінку, яка може викликати сумніви, але вона недостатньо серйозна чи однозначна, щоб виправдати захід модерації.

Деякі ситуації можуть бути недоречними, дратівливими або межовими, але все ж не досягають порогу, потрібного для покарання. У таких випадках команда модерації може вирішити не вживати офіційних заходів, якщо поведінка не повторюватиметься або не стане серйознішою.

Якщо це повториться, надішліть нову скаргу з додатковими доказами, що показують повторюваний характер або серйозніше порушення.`,
  T_ = () => `Báo cáo cho thấy hành vi có thể đáng ngờ, nhưng chưa đủ nghiêm trọng hoặc rõ ràng để biện minh cho một biện pháp kiểm duyệt.

Một số tình huống có thể không phù hợp, gây khó chịu hoặc nằm ở ranh giới, nhưng vẫn chưa đạt đến mức cần thiết để xử phạt. Trong những trường hợp này, đội ngũ kiểm duyệt có thể chọn không hành động chính thức trừ khi hành vi tiếp diễn hoặc trở nên nghiêm trọng hơn.

Nếu điều này lại xảy ra, vui lòng gửi một báo cáo mới kèm bằng chứng bổ sung cho thấy một khuôn mẫu lặp lại hoặc một vi phạm nghiêm trọng hơn.`,
  O_ = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? f_() : e === "pt" ? p_() : e === "ch" ? h_() : e === "de" ? m_() : e === "es" ? g_() : e === "fr" ? w_() : e === "it" ? y_() : e === "jp" ? b_() : e === "pl" ? v_() : e === "ru" ? E_() : e === "uk" ? k_() : T_()
  },
  I_ = () => "Not Enough for Punishment",
  S_ = () => "Insuficiente para punição",
  N_ = () => "不足以处罚",
  z_ = () => "Nicht ausreichend für eine Strafe",
  A_ = () => "Insuficiente para una sanción",
  R_ = () => "Insuffisant pour une sanction",
  D_ = () => "Insufficiente per una punizione",
  x_ = () => "処分には不十分",
  j_ = () => "Niewystarczające do nałożenia kary",
  P_ = () => "Недостаточно для наказания",
  q_ = () => "Недостатньо для покарання",
  L_ = () => "Không đủ để xử phạt",
  U_ = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? I_() : e === "pt" ? S_() : e === "ch" ? N_() : e === "de" ? z_() : e === "es" ? A_() : e === "fr" ? R_() : e === "it" ? D_() : e === "jp" ? x_() : e === "pl" ? j_() : e === "ru" ? P_() : e === "uk" ? q_() : L_()
  },
  M_ = () => `This report is outside the scope of what the moderation team can act on through the report system.

This may include issues that happened outside the game, personal disputes, support requests, appeals, bug reports, or situations that are not covered by the current moderation rules.

Please use the correct support channel if your issue is related to technical problems, account issues, appeals, or other non-moderation matters.`,
  B_ = () => `Esta denúncia está fora do escopo daquilo que a equipe de moderação pode tratar pelo sistema de denúncias.

Isso pode incluir problemas que aconteceram fora do jogo, disputas pessoais, pedidos de suporte, apelos, relatos de bugs ou situações que não são abrangidas pelas regras de moderação atuais.

Use o canal de suporte correto se o seu problema estiver relacionado a problemas técnicos, questões de conta, apelos ou outros assuntos que não sejam de moderação.`,
  C_ = () => `此举报超出了审核团队通过举报系统能够处理的范围。

这可能包括发生在游戏之外的问题、个人纠纷、支持请求、申诉、漏洞报告，或当前审核规则未涵盖的情况。

如果您的问题与技术故障、账户问题、申诉或其他非审核事项有关，请使用正确的支持渠道。`,
  K_ = () => `Diese Meldung liegt außerhalb dessen, was das Moderationsteam über das Meldesystem bearbeiten kann.

Dazu können Probleme gehören, die außerhalb des Spiels aufgetreten sind, persönliche Streitigkeiten, Support-Anfragen, Einsprüche, Fehlerberichte oder Situationen, die nicht von den aktuellen Moderationsregeln abgedeckt sind.

Bitte nutze den richtigen Support-Kanal, wenn dein Anliegen technische Probleme, Kontoangelegenheiten, Einsprüche oder andere nicht zur Moderation gehörende Themen betrifft.`,
  F_ = () => `Este reporte está fuera del alcance de lo que el equipo de moderación puede gestionar a través del sistema de reportes.

Esto puede incluir problemas ocurridos fuera del juego, disputas personales, solicitudes de soporte, apelaciones, reportes de errores o situaciones que no están cubiertas por las reglas de moderación actuales.

Utiliza el canal de soporte correcto si tu problema está relacionado con problemas técnicos, asuntos de cuenta, apelaciones u otros temas ajenos a la moderación.`,
  $_ = () => `Ce signalement dépasse le champ d'action de l'équipe de modération via le système de signalement.

Cela peut inclure des problèmes survenus en dehors du jeu, des différends personnels, des demandes d'assistance, des recours, des rapports de bugs ou des situations qui ne sont pas couvertes par les règles de modération actuelles.

Veuillez utiliser le bon canal d'assistance si votre problème concerne des soucis techniques, des questions de compte, des recours ou d'autres sujets ne relevant pas de la modération.`,
  G_ = () => `Questa segnalazione esula da ciò che il team di moderazione può gestire tramite il sistema di segnalazione.

Può includere problemi avvenuti al di fuori del gioco, dispute personali, richieste di assistenza, ricorsi, segnalazioni di bug o situazioni non coperte dalle attuali regole di moderazione.

Utilizza il canale di assistenza corretto se il tuo problema riguarda questioni tecniche, problemi di account, ricorsi o altre questioni non legate alla moderazione.`,
  V_ = () => `この報告は、モデレーションチームが報告システムを通じて対応できる範囲を超えています。

これには、ゲーム外で起きた問題、個人的なトラブル、サポート依頼、異議申し立て、バグ報告、または現在のモデレーションルールでは扱えない状況が含まれる場合があります。

技術的な問題、アカウントの問題、異議申し立て、その他モデレーション以外の事項に関する場合は、適切なサポート窓口をご利用ください。`,
  H_ = () => `To zgłoszenie wykracza poza zakres tego, czym zespół moderacji może się zająć za pośrednictwem systemu zgłoszeń.

Może to obejmować problemy, które miały miejsce poza grą, spory osobiste, prośby o wsparcie, odwołania, zgłoszenia błędów lub sytuacje nieobjęte obecnymi zasadami moderacji.

Skorzystaj z właściwego kanału wsparcia, jeśli twój problem dotyczy kwestii technicznych, spraw związanych z kontem, odwołań lub innych zagadnień niezwiązanych z moderacją.`,
  W_ = () => `Эта жалоба выходит за рамки того, что команда модерации может рассматривать через систему жалоб.

Сюда могут относиться проблемы, возникшие вне игры, личные споры, обращения в поддержку, апелляции, сообщения об ошибках или ситуации, не охваченные действующими правилами модерации.

Пожалуйста, используйте подходящий канал поддержки, если ваш вопрос связан с техническими проблемами, вопросами учётной записи, апелляциями или другими темами, не относящимися к модерации.`,
  Y_ = () => `Ця скарга виходить за межі того, що команда модерації може розглядати через систему скарг.

Сюди можуть належати проблеми, що сталися поза грою, особисті суперечки, звернення до підтримки, апеляції, повідомлення про помилки або ситуації, не охоплені чинними правилами модерації.

Будь ласка, скористайтеся відповідним каналом підтримки, якщо ваше питання стосується технічних проблем, питань облікового запису, апеляцій або інших тем, не пов'язаних із модерацією.`,
  J_ = () => `Báo cáo này nằm ngoài phạm vi mà đội ngũ kiểm duyệt có thể xử lý qua hệ thống báo cáo.

Điều này có thể bao gồm các vấn đề xảy ra bên ngoài trò chơi, tranh chấp cá nhân, yêu cầu hỗ trợ, kháng cáo, báo cáo lỗi hoặc các tình huống không thuộc phạm vi các quy tắc kiểm duyệt hiện hành.

Vui lòng sử dụng kênh hỗ trợ phù hợp nếu vấn đề của bạn liên quan đến sự cố kỹ thuật, vấn đề tài khoản, kháng cáo hoặc các vấn đề khác không thuộc về kiểm duyệt.`,
  Q_ = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? M_() : e === "pt" ? B_() : e === "ch" ? C_() : e === "de" ? K_() : e === "es" ? F_() : e === "fr" ? $_() : e === "it" ? G_() : e === "jp" ? V_() : e === "pl" ? H_() : e === "ru" ? W_() : e === "uk" ? Y_() : J_()
  },
  Z_ = () => "Out of Scope",
  X_ = () => "Fora do escopo",
  ef = () => "超出处理范围",
  tf = () => "Außerhalb des Zuständigkeitsbereichs",
  nf = () => "Fuera del alcance",
  rf = () => "Hors du champ d'action",
  of = () => "Fuori ambito",
  af = () => "対応範囲外",
  sf = () => "Poza zakresem",
  uf = () => "Вне зоны ответственности",
  cf = () => "Поза межами компетенції",
  lf = () => "Ngoài phạm vi xử lý",
  df = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Z_() : e === "pt" ? X_() : e === "ch" ? ef() : e === "de" ? tf() : e === "es" ? nf() : e === "fr" ? rf() : e === "it" ? of() : e === "jp" ? af() : e === "pl" ? sf() : e === "ru" ? uf() : e === "uk" ? cf() : lf()
  },
  _f = () => "Inappropriate content",
  ff = () => "Conteúdo inapropriado",
  pf = () => "不当内容",
  hf = () => "Unangemessene Inhalte",
  mf = () => "Contenido inapropiado",
  gf = () => "Contenu inapproprié",
  wf = () => "Contenuto inappropriato",
  yf = () => "不適切なコンテンツ",
  bf = () => "Nieodpowiednie treści",
  vf = () => "Неприемлемый контент",
  Ef = () => "Неприйнятний вміст",
  kf = () => "Nội dung không phù hợp",
  Tf = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? _f() : e === "pt" ? ff() : e === "ch" ? pf() : e === "de" ? hf() : e === "es" ? mf() : e === "fr" ? gf() : e === "it" ? wf() : e === "jp" ? yf() : e === "pl" ? bf() : e === "ru" ? vf() : e === "uk" ? Ef() : kf()
  },
  Of = () => "Explicit or illegal content, severe slurs",
  If = () => "Conteúdo explícito ou ilegal, insultos graves",
  Sf = () => "露骨或非法内容、严重的侮辱性言论",
  Nf = () => "Expliziter oder illegaler Inhalt, schwere Beleidigungen",
  zf = () => "Contenido explícito o ilegal, insultos graves",
  Af = () => "Contenu explicite ou illégal, insultes graves",
  Rf = () => "Contenuto esplicito o illegale, insulti gravi",
  Df = () => "露骨または違法なコンテンツ、ひどい侮辱・中傷",
  xf = () => "Treści jawnie seksualne lub nielegalne, poważne obelgi",
  jf = () => "Откровенный или незаконный контент, грубые оскорбления",
  Pf = () => "Відвертий або незаконний вміст, грубі образи",
  qf = () => "Nội dung phản cảm hoặc bất hợp pháp, lời lẽ lăng mạ nghiêm trọng",
  Lf = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Of() : e === "pt" ? If() : e === "ch" ? Sf() : e === "de" ? Nf() : e === "es" ? zf() : e === "fr" ? Af() : e === "it" ? Rf() : e === "jp" ? Df() : e === "pl" ? xf() : e === "ru" ? jf() : e === "uk" ? Pf() : qf()
  },
  Uf = () => "Invalid captcha. Please try again.",
  Mf = () => "Captcha inválido. Por favor, tente novamente.",
  Bf = () => "验证码无效，请重试。",
  Cf = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  Kf = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  Ff = () => "Captcha invalide. Veuillez réessayer.",
  $f = () => "Captcha non valido. Riprova.",
  Gf = () => "キャプチャが無効です。もう一度お試しください。",
  Vf = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  Hf = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  Wf = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Yf = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Jf = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Uf() : e === "pt" ? Mf() : e === "ch" ? Bf() : e === "de" ? Cf() : e === "es" ? Kf() : e === "fr" ? Ff() : e === "it" ? $f() : e === "jp" ? Gf() : e === "pl" ? Vf() : e === "ru" ? Hf() : e === "uk" ? Wf() : Yf()
  },
  Qf = () => "Invalid challenge response",
  Zf = () => "Resposta de desafio inválida",
  Xf = () => "质询响应无效",
  ep = () => "Ungültige Challenge-Antwort",
  tp = () => "Respuesta de desafío inválida",
  np = () => "Réponse au défi invalide",
  rp = () => "Risposta alla sfida non valida",
  op = () => "無効なチャレンジ応答",
  ip = () => "Nieprawidłowa odpowiedź na wyzwanie",
  ap = () => "Неверный ответ на вызов",
  sp = () => "Недійсна відповідь на виклик",
  up = () => "Phản hồi thử thách không hợp lệ",
  cp = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Qf() : e === "pt" ? Zf() : e === "ch" ? Xf() : e === "de" ? ep() : e === "es" ? tp() : e === "fr" ? np() : e === "it" ? rp() : e === "jp" ? op() : e === "pl" ? ip() : e === "ru" ? ap() : e === "uk" ? sp() : up()
  },
  lp = () => "The verification code is incorrect. Please check it and try again.",
  dp = () => "Código inválido",
  _p = () => "验证码不正确。请检查后重试。",
  fp = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  pp = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  hp = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  mp = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  gp = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  wp = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  yp = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  bp = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  vp = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  Ep = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? lp() : e === "pt" ? dp() : e === "ch" ? _p() : e === "de" ? fp() : e === "es" ? pp() : e === "fr" ? hp() : e === "it" ? mp() : e === "jp" ? gp() : e === "pl" ? wp() : e === "ru" ? yp() : e === "uk" ? bp() : vp()
  },
  kp = () => "Invalid discord.",
  Tp = () => "Discord inválido.",
  Op = () => "无效的 Discord。",
  Ip = () => "Ungültiger Discord.",
  Sp = () => "Discord inválido.",
  Np = () => "Discord invalide.",
  zp = () => "Discord non valido.",
  Ap = () => "無効なDiscordアカウントです。",
  Rp = () => "Nieprawidłowy Discord.",
  Dp = () => "Неверный Discord.",
  xp = () => "Некоректний Discord.",
  jp = () => "Discord không hợp lệ.",
  Pp = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? kp() : e === "pt" ? Tp() : e === "ch" ? Op() : e === "de" ? Ip() : e === "es" ? Sp() : e === "fr" ? Np() : e === "it" ? zp() : e === "jp" ? Ap() : e === "pl" ? Rp() : e === "ru" ? Dp() : e === "uk" ? xp() : jp()
  },
  qp = () => "The name contains disallowed characters or words. Please choose a different name.",
  Lp = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  Up = () => "名称包含禁止的字符或词语，请选择其他名称。",
  Mp = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  Bp = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  Cp = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  Kp = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  Fp = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  $p = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  Gp = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  Vp = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  Hp = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  st = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? qp() : e === "pt" ? Lp() : e === "ch" ? Up() : e === "de" ? Mp() : e === "es" ? Bp() : e === "fr" ? Cp() : e === "it" ? Kp() : e === "jp" ? Fp() : e === "pl" ? $p() : e === "ru" ? Gp() : e === "uk" ? Vp() : Hp()
  },
  Wp = () => "Please enter a valid phone number with country code.",
  Yp = () => "Insira um número de telefone válido com código do país.",
  Jp = () => "请输入带国家代码的有效电话号码。",
  Qp = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  Zp = () => "Introduce un número de teléfono válido con código de país.",
  Xp = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  eh = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  th = () => "国番号付きの有効な電話番号を入力してください。",
  nh = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  rh = () => "Введите действительный номер телефона с кодом страны.",
  oh = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  ih = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  ah = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Wp() : e === "pt" ? Yp() : e === "ch" ? Jp() : e === "de" ? Qp() : e === "es" ? Zp() : e === "fr" ? Xp() : e === "it" ? eh() : e === "jp" ? th() : e === "pl" ? nh() : e === "ru" ? rh() : e === "uk" ? oh() : ih()
  },
  sh = () => "Phone number not supported. Please try another number.",
  uh = () => "Número de telefone não suportado. Por favor, tente outro número.",
  ch = () => "不支持此电话号码。请尝试其他号码。",
  lh = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  dh = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  _h = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  fh = () => "Numero di telefono non supportato. Prova con un altro numero.",
  ph = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  hh = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  mh = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  gh = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  wh = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  yh = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? sh() : e === "pt" ? uh() : e === "ch" ? ch() : e === "de" ? lh() : e === "es" ? dh() : e === "fr" ? _h() : e === "it" ? fh() : e === "jp" ? ph() : e === "pl" ? hh() : e === "ru" ? mh() : e === "uk" ? gh() : wh()
  },
  bh = () => "The new leader must be a member of the alliance",
  vh = () => "O novo líder deve ser um membro da aliança",
  Eh = () => "新盟主必须是联盟成员",
  kh = () => "Der neue Anführer muss Mitglied der Allianz sein",
  Th = () => "El nuevo líder debe ser miembro de la alianza",
  Oh = () => "Le nouveau chef doit être membre de l’alliance",
  Ih = () => "Il nuovo leader deve essere un membro dell'alleanza",
  Sh = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  Nh = () => "Nowy lider musi być członkiem sojuszu",
  zh = () => "Новый лидер должен быть участником альянса",
  Ah = () => "Новий лідер має бути учасником альянсу",
  Rh = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Dh = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? bh() : e === "pt" ? vh() : e === "ch" ? Eh() : e === "de" ? kh() : e === "es" ? Th() : e === "fr" ? Oh() : e === "it" ? Ih() : e === "jp" ? Sh() : e === "pl" ? Nh() : e === "ru" ? zh() : e === "uk" ? Ah() : Rh()
  },
  xh = () => "Leaderboard is temporarily disabled",
  jh = () => "O ranking está temporariamente desativado",
  Ph = () => "排行榜已暂时停用",
  qh = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Lh = () => "La clasificación está deshabilitada temporalmente",
  Uh = () => "Le classement est temporairement désactivé",
  Mh = () => "La classifica è temporaneamente disattivata",
  Bh = () => "ランキングは一時的に無効になっています。",
  Ch = () => "Ranking jest tymczasowo wyłączony",
  Kh = () => "Таблица лидеров временно отключена",
  Fh = () => "Таблиця лідерів тимчасово вимкнена",
  $h = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  K = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? xh() : e === "pt" ? jh() : e === "ch" ? Ph() : e === "de" ? qh() : e === "es" ? Lh() : e === "fr" ? Uh() : e === "it" ? Mh() : e === "jp" ? Bh() : e === "pl" ? Ch() : e === "ru" ? Kh() : e === "uk" ? Fh() : $h()
  },
  Gh = () => "Location name is too big (max. 128 characters)",
  Vh = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Hh = () => "位置名称过长（最大 128 个字符）",
  Wh = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Yh = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Jh = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Qh = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Zh = () => "場所の名前が長すぎます（最大128文字）。",
  Xh = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  em = () => "Название локации слишком длинное (макс. 128 символов)",
  tm = () => "Назва локації надто довга (макс. 128 символів)",
  nm = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  rm = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Gh() : e === "pt" ? Vh() : e === "ch" ? Hh() : e === "de" ? Wh() : e === "es" ? Yh() : e === "fr" ? Jh() : e === "it" ? Qh() : e === "jp" ? Zh() : e === "pl" ? Xh() : e === "ru" ? em() : e === "uk" ? tm() : nm()
  },
  om = () => "Multi-accounting",
  im = () => "Múltiplas contas",
  am = () => "多账号",
  sm = () => "Multi-Accounting",
  um = () => "Multi-cuentas",
  cm = () => "Multi-comptes",
  lm = () => "Multi-account",
  dm = () => "複数アカウント使用",
  _m = () => "Multi-konta",
  fm = () => "Мультиаккаунт",
  pm = () => "Мультиакаунтинг",
  hm = () => "Nhiều tài khoản",
  mm = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? om() : e === "pt" ? im() : e === "ch" ? am() : e === "de" ? sm() : e === "es" ? um() : e === "fr" ? cm() : e === "it" ? lm() : e === "jp" ? dm() : e === "pl" ? _m() : e === "ru" ? fm() : e === "uk" ? pm() : hm()
  },
  gm = () => "Paint with more than one account or using virtual machines, residential proxies, or multi-accounting browsers",
  wm = () => "Pintar com mais de uma conta ou usando máquinas virtuais, proxies residenciais ou navegadores multi-conta",
  ym = () => "使用多个账号绘制像素，或使用虚拟机、住宅代理或多账号浏览器",
  bm = () => "Mehr als ein Konto zum Malen verwenden oder virtuelle Maschinen, Residential-Proxys oder Multi-Accounting-Browser nutzen",
  vm = () => "Pintar con más de una cuenta o usar máquinas virtuales, proxies residenciales o navegadores multicuenta",
  Em = () => "Utiliser plus d’un compte pour peindre, ou utiliser des machines virtuelles, des proxys résidentiels ou des navigateurs multi-comptes",
  km = () => "Usare più di un account per dipingere, oppure usare macchine virtuali, proxy residenziali o browser multi-account",
  Tm = () => "複数のアカウントを使ってピクセルを塗る、または仮想マシン、住宅プロキシ、マルチアカウントブラウザを使用する",
  Om = () => "Malowanie pikseli na więcej niż jednym koncie lub przy użyciu maszyn wirtualnych, proxy residential lub przeglądarek multi-kontowych",
  Im = () => "Рисование с более чем одного аккаунта или с использованием виртуальных машин, резидентных прокси или мультиаккаунт-браузеров",
  Sm = () => "Малювання з більш ніж одного акаунта або з використанням віртуальних машин, резидентних проксі чи мультиакаунт-браузерів",
  Nm = () => "Vẽ pixel bằng nhiều hơn một tài khoản hoặc bằng máy ảo, proxy dân cư hoặc trình duyệt đa tài khoản",
  zm = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? gm() : e === "pt" ? wm() : e === "ch" ? ym() : e === "de" ? bm() : e === "es" ? vm() : e === "fr" ? Em() : e === "it" ? km() : e === "jp" ? Tm() : e === "pl" ? Om() : e === "ru" ? Im() : e === "uk" ? Sm() : Nm()
  },
  Am = n => `You can change your name again in ${n.days} days`,
  Rm = n => `Você pode alterar seu nome novamente em ${n.days} dias.`,
  Dm = n => `你可以在 ${n.days} 天后再次修改名称`,
  xm = n => `Du kannst deinen Namen in ${n.days} Tagen erneut ändern`,
  jm = n => `Podrás cambiar tu nombre de nuevo en ${n.days} días`,
  Pm = n => `Vous pourrez changer votre nom à nouveau dans ${n.days} jours`,
  qm = n => `Potrai cambiare di nuovo il tuo nome tra ${n.days} giorni.`,
  Lm = n => `${n.days}日後に再び名前を変更できます。`,
  Um = n => `Następną zmianę nazwy możesz wykonać za ${n.days} dni`,
  Mm = n => `Вы сможете изменить имя снова через ${n.days} дн.`,
  Bm = n => `Ви зможете змінити імʼя знову через ${n.days} днів`,
  Cm = n => `Bạn có thể đổi tên lại sau ${n.days} ngày`,
  Km = (n, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Am(n) : e === "pt" ? Rm(n) : e === "ch" ? Dm(n) : e === "de" ? xm(n) : e === "es" ? jm(n) : e === "fr" ? Pm(n) : e === "it" ? qm(n) : e === "jp" ? Lm(n) : e === "pl" ? Um(n) : e === "ru" ? Mm(n) : e === "uk" ? Bm(n) : Cm(n)
  },
  Fm = () => "No internet access or the servers are offline. Try again later.",
  $m = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Gm = () => "没有网络连接或服务器已离线。请稍后重试。",
  Vm = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Hm = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Wm = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Ym = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Jm = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Qm = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Zm = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Xm = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  eg = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  tg = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Fm() : e === "pt" ? $m() : e === "ch" ? Gm() : e === "de" ? Vm() : e === "es" ? Hm() : e === "fr" ? Wm() : e === "it" ? Ym() : e === "jp" ? Jm() : e === "pl" ? Qm() : e === "ru" ? Zm() : e === "uk" ? Xm() : eg()
  },
  ng = () => "You are not allowed to verify a phone number. Try refreshing the page",
  rg = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  og = () => "您无权验证电话号码。请尝试刷新页面。",
  ig = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  ag = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  sg = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  ug = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  cg = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  lg = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  dg = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  _g = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  fg = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  pg = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ng() : e === "pt" ? rg() : e === "ch" ? og() : e === "de" ? ig() : e === "es" ? ag() : e === "fr" ? sg() : e === "it" ? ug() : e === "jp" ? cg() : e === "pl" ? lg() : e === "ru" ? dg() : e === "uk" ? _g() : fg()
  },
  hg = () => "Operation not allowed. Maybe you have too many favorite locations.",
  mg = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  gg = () => "操作不被允许。你的收藏位置可能过多。",
  wg = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  yg = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  bg = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  vg = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  Eg = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  kg = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  Tg = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  Og = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  Ig = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  Sg = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? hg() : e === "pt" ? mg() : e === "ch" ? gg() : e === "de" ? wg() : e === "es" ? yg() : e === "fr" ? bg() : e === "it" ? vg() : e === "jp" ? Eg() : e === "pl" ? kg() : e === "ru" ? Tg() : e === "uk" ? Og() : Ig()
  },
  Ng = n => `Not enough charges: you have ${n.charges} but this overlay needs ${n.pixels}.`,
  zg = n => `Cargas insuficientes: você tem ${n.charges}, mas esta sobreposição precisa de ${n.pixels}.`,
  Ag = n => `充能不足：你有 ${n.charges}，但此叠加层需要 ${n.pixels}。`,
  Rg = n => `Nicht genügend Ladungen: Du hast ${n.charges}, aber dieses Overlay benötigt ${n.pixels}.`,
  Dg = n => `Cargas insuficientes: tienes ${n.charges} pero esta superposición necesita ${n.pixels}.`,
  xg = n => `Charges insuffisantes : vous avez ${n.charges} mais ce calque nécessite ${n.pixels}.`,
  jg = n => `Cariche insufficienti: ne hai ${n.charges} ma questo overlay ne richiede ${n.pixels}.`,
  Pg = n => `チャージが足りません：現在 ${n.charges} ですが、このオーバーレイには ${n.pixels} 必要です。`,
  qg = n => `Za mało ładunków: masz ${n.charges}, ale ta nakładka wymaga ${n.pixels}.`,
  Lg = n => `Недостаточно зарядов: у вас ${n.charges}, но для этого слоя нужно ${n.pixels}.`,
  Ug = n => `Недостатньо зарядів: у вас ${n.charges}, але для цього шару потрібно ${n.pixels}.`,
  Mg = n => `Không đủ lượt sơn: bạn có ${n.charges} nhưng lớp phủ này cần ${n.pixels}.`,
  Bg = (n, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ng(n) : e === "pt" ? zg(n) : e === "ch" ? Ag(n) : e === "de" ? Rg(n) : e === "es" ? Dg(n) : e === "fr" ? xg(n) : e === "it" ? jg(n) : e === "jp" ? Pg(n) : e === "pl" ? qg(n) : e === "ru" ? Lg(n) : e === "uk" ? Ug(n) : Mg(n)
  },
  Cg = () => "You are trying to paint with a color you do not own",
  Kg = () => "Você está tentando pintar com uma cor que não possui",
  Fg = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  $g = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  Gg = () => "Estás intentando pintar con un color que no posees",
  Vg = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  Hg = () => "Stai cercando di dipingere con un colore che non possiedi",
  Wg = () => "所持していない色で塗ろうとしています。",
  Yg = () => "Próbujesz malować kolorem, którego nie posiadasz",
  Jg = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  Qg = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  Zg = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  ut = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Cg() : e === "pt" ? Kg() : e === "ch" ? Fg() : e === "de" ? $g() : e === "es" ? Gg() : e === "fr" ? Vg() : e === "it" ? Hg() : e === "jp" ? Wg() : e === "pl" ? Yg() : e === "ru" ? Jg() : e === "uk" ? Qg() : Zg()
  },
  Xg = () => "Phone already used",
  ew = () => "Telefone já usado",
  tw = () => "电话号码已被使用",
  nw = () => "Telefonnummer bereits verwendet",
  rw = () => "Teléfono ya utilizado",
  ow = () => "Téléphone déjà utilisé",
  iw = () => "Telefono già utilizzato",
  aw = () => "この電話番号は既に使用されています。",
  sw = () => "Numer telefonu jest już używany",
  uw = () => "Телефон уже используется",
  cw = () => "Номер телефону вже використовується",
  lw = () => "Số điện thoại đã được sử dụng",
  dw = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Xg() : e === "pt" ? ew() : e === "ch" ? tw() : e === "de" ? nw() : e === "es" ? rw() : e === "fr" ? ow() : e === "it" ? iw() : e === "jp" ? aw() : e === "pl" ? sw() : e === "ru" ? uw() : e === "uk" ? cw() : lw()
  },
  _w = () => "This phone number's region is not supported",
  fw = () => "A região deste número de telefone não é suportada",
  pw = () => "此电话号码的地区不受支持",
  hw = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  mw = () => "La región de este número de teléfono no es compatible",
  gw = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  ww = () => "La regione di questo numero di telefono non è supportata",
  yw = () => "この電話番号の地域はサポートされていません",
  bw = () => "Region tego numeru telefonu nie jest obsługiwany",
  vw = () => "Регион этого номера телефона не поддерживается",
  Ew = () => "Регіон цього номера телефону не підтримується",
  kw = () => "Vùng của số điện thoại này không được hỗ trợ",
  Tw = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? _w() : e === "pt" ? fw() : e === "ch" ? pw() : e === "de" ? hw() : e === "es" ? mw() : e === "fr" ? gw() : e === "it" ? ww() : e === "jp" ? yw() : e === "pl" ? bw() : e === "ru" ? vw() : e === "uk" ? Ew() : kw()
  },
  Ow = () => "Refresh your page to get the latest update",
  Iw = () => "Recarregue sua página para obter as últimas atualizações",
  Sw = () => "刷新页面以获取最新更新",
  Nw = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  zw = () => "Actualiza la página para obtener la última versión",
  Aw = () => "Actualisez la page pour obtenir les dernières mises à jour",
  Rw = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  Dw = () => "最新の状態にするにはページを再読み込みしてください。",
  xw = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  jw = () => "Обновите страницу, чтобы получить последние изменения",
  Pw = () => "Оновіть сторінку, щоб отримати останні оновлення",
  qw = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  ct = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ow() : e === "pt" ? Iw() : e === "ch" ? Sw() : e === "de" ? Nw() : e === "es" ? zw() : e === "fr" ? Aw() : e === "it" ? Rw() : e === "jp" ? Dw() : e === "pl" ? xw() : e === "ru" ? jw() : e === "uk" ? Pw() : qw()
  },
  Lw = () => "The request timed out. Please try again.",
  Uw = () => "A solicitação expirou. Por favor, tente novamente.",
  Mw = () => "请求超时。请重试。",
  Bw = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  Cw = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  Kw = () => "La requête a expiré. Veuillez réessayer.",
  Fw = () => "La richiesta è scaduta. Riprova.",
  $w = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  Gw = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  Vw = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  Hw = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  Ww = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  Yw = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Lw() : e === "pt" ? Uw() : e === "ch" ? Mw() : e === "de" ? Bw() : e === "es" ? Cw() : e === "fr" ? Kw() : e === "it" ? Fw() : e === "jp" ? $w() : e === "pl" ? Gw() : e === "ru" ? Vw() : e === "uk" ? Hw() : Ww()
  },
  Jw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Qw = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  Zw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Xw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  ey = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  ty = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  ny = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  ry = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  oy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  iy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  ay = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  sy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  uy = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Jw() : e === "pt" ? Qw() : e === "ch" ? Zw() : e === "de" ? Xw() : e === "es" ? ey() : e === "fr" ? ty() : e === "it" ? ny() : e === "jp" ? ry() : e === "pl" ? oy() : e === "ru" ? iy() : e === "uk" ? ay() : sy()
  },
  cy = () => "The service is currently unavailable. Please try again later.",
  ly = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  dy = () => "服务当前不可用。请稍后再试。",
  _y = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  fy = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  py = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  hy = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  my = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  gy = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  wy = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  yy = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  by = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  vy = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? cy() : e === "pt" ? ly() : e === "ch" ? dy() : e === "de" ? _y() : e === "es" ? fy() : e === "fr" ? py() : e === "it" ? hy() : e === "jp" ? my() : e === "pl" ? gy() : e === "ru" ? wy() : e === "uk" ? yy() : by()
  },
  Ey = () => "Too many attempts. Please try again later",
  ky = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  Ty = () => "尝试次数过多，请稍后再试",
  Oy = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  Iy = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  Sy = () => "Trop de tentatives. Veuillez réessayer plus tard",
  Ny = () => "Troppi tentativi. Riprova più tardi.",
  zy = () => "試行回数が多すぎます。後で再度お試しください。",
  Ay = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  Ry = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  Dy = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  xy = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  lt = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ey() : e === "pt" ? ky() : e === "ch" ? Ty() : e === "de" ? Oy() : e === "es" ? Iy() : e === "fr" ? Sy() : e === "it" ? Ny() : e === "jp" ? zy() : e === "pl" ? Ay() : e === "ru" ? Ry() : e === "uk" ? Dy() : xy()
  },
  jy = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  Py = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  qy = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  Ly = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  Uy = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  My = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  By = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  Cy = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  Ky = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  Fy = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  $y = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  Gy = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  Vy = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? jy() : e === "pt" ? Py() : e === "ch" ? qy() : e === "de" ? Ly() : e === "es" ? Uy() : e === "fr" ? My() : e === "it" ? By() : e === "jp" ? Cy() : e === "pl" ? Ky() : e === "ru" ? Fy() : e === "uk" ? $y() : Gy()
  },
  Hy = () => "The typed username does not match your current username.",
  Wy = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Yy = () => "输入的用户名与当前用户名不匹配。",
  Jy = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Qy = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Zy = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  Xy = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  eb = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  tb = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  nb = () => "Введённое имя пользователя не совпадает с текущим.",
  rb = () => "Введене імʼя користувача не збігається з поточним.",
  ob = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  ib = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Hy() : e === "pt" ? Wy() : e === "ch" ? Yy() : e === "de" ? Jy() : e === "es" ? Qy() : e === "fr" ? Zy() : e === "it" ? Xy() : e === "jp" ? eb() : e === "pl" ? tb() : e === "ru" ? nb() : e === "uk" ? rb() : ob()
  },
  ab = () => "Unexpected server error. Try again later.",
  sb = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  ub = () => "服务器出现意外错误。请稍后再试。",
  cb = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  lb = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  db = () => "Erreur serveur inattendue. Réessayez plus tard.",
  _b = () => "Errore imprevisto del server. Riprova più tardi.",
  fb = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  pb = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  hb = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  mb = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  gb = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  s = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ab() : e === "pt" ? sb() : e === "ch" ? ub() : e === "de" ? cb() : e === "es" ? lb() : e === "fr" ? db() : e === "it" ? _b() : e === "jp" ? fb() : e === "pl" ? pb() : e === "ru" ? hb() : e === "uk" ? mb() : gb()
  },
  wb = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  yb = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  bb = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  vb = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  Eb = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  kb = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  Tb = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  Ob = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  Ib = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  Sb = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  Nb = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  zb = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  Ab = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? wb() : e === "pt" ? yb() : e === "ch" ? bb() : e === "de" ? vb() : e === "es" ? Eb() : e === "fr" ? kb() : e === "it" ? Tb() : e === "jp" ? Ob() : e === "pl" ? Ib() : e === "ru" ? Sb() : e === "uk" ? Nb() : zb()
  },
  Rb = () => "VPN or proxy detected. Please disable your VPN and try again.",
  Db = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  xb = () => "检测到VPN或代理。请关闭VPN后重试。",
  jb = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  Pb = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  qb = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  Lb = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  Ub = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  Mb = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  Bb = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  Cb = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  Kb = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  Fb = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Rb() : e === "pt" ? Db() : e === "ch" ? xb() : e === "de" ? jb() : e === "es" ? Pb() : e === "fr" ? qb() : e === "it" ? Lb() : e === "jp" ? Ub() : e === "pl" ? Mb() : e === "ru" ? Bb() : e === "uk" ? Cb() : Kb()
  },
  $b = () => "Failed to load WebAssembly module. Try to use another browser.",
  Gb = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  Vb = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  Hb = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  Wb = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  Yb = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  Jb = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  Qb = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  Zb = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  Xb = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  ev = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  tv = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  nv = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? $b() : e === "pt" ? Gb() : e === "ch" ? Vb() : e === "de" ? Hb() : e === "es" ? Wb() : e === "fr" ? Yb() : e === "it" ? Jb() : e === "jp" ? Qb() : e === "pl" ? Zb() : e === "ru" ? Xb() : e === "uk" ? ev() : tv()
  },
  rv = () => "You already have this item. Please refresh the page.",
  ov = () => "Você já possui este item. Atualize a página.",
  iv = () => "你已经拥有此物品。请刷新页面。",
  av = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  sv = () => "Ya tienes este ítem. Actualiza la página.",
  uv = () => "Vous possédez déjà cet objet. Actualisez la page.",
  cv = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  lv = () => "このアイテムはすでに所持しています。ページを更新してください。",
  dv = () => "Masz już ten przedmiot. Odśwież stronę.",
  _v = () => "У вас уже есть этот предмет. Обновите страницу.",
  fv = () => "У вас уже є цей предмет. Оновіть сторінку.",
  pv = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  dt = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? rv() : e === "pt" ? ov() : e === "ch" ? iv() : e === "de" ? av() : e === "es" ? sv() : e === "fr" ? uv() : e === "it" ? cv() : e === "jp" ? lv() : e === "pl" ? dv() : e === "ru" ? _v() : e === "uk" ? fv() : pv()
  },
  hv = () => "You are already in an alliance",
  mv = () => "Você já está em uma aliança",
  gv = () => "你已经在一个联盟中",
  wv = () => "Du bist bereits in einer Allianz",
  yv = () => "Ya estás en una alianza",
  bv = () => "Vous êtes déjà dans une alliance",
  vv = () => "Sei già in un'alleanza",
  Ev = () => "すでにアライアンスに所属しています。",
  kv = () => "Jesteś już w sojuszu",
  Tv = () => "Вы уже состоите в альянсе",
  Ov = () => "Ви вже перебуваєте в альянсі",
  Iv = () => "Bạn đã ở trong một liên minh",
  Sv = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? hv() : e === "pt" ? mv() : e === "ch" ? gv() : e === "de" ? wv() : e === "es" ? yv() : e === "fr" ? bv() : e === "it" ? vv() : e === "jp" ? Ev() : e === "pl" ? kv() : e === "ru" ? Tv() : e === "uk" ? Ov() : Iv()
  },
  Nv = () => "You are not allowed to do this",
  zv = () => "Você não tem permissão para fazer isso",
  Av = () => "你无权执行此操作",
  Rv = () => "Du bist dazu nicht berechtigt",
  Dv = () => "No tienes permiso para hacer esto",
  xv = () => "Vous n’êtes pas autorisé à faire cela",
  jv = () => "Non hai il permesso di farlo",
  Pv = () => "この操作を行う権限がありません。",
  qv = () => "Nie masz uprawnień, aby to zrobić",
  Lv = () => "У вас нет прав для этого действия",
  Uv = () => "Ви не маєте права це робити",
  Mv = () => "Bạn không có quyền làm việc này",
  F = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Nv() : e === "pt" ? zv() : e === "ch" ? Av() : e === "de" ? Rv() : e === "es" ? Dv() : e === "fr" ? xv() : e === "it" ? jv() : e === "jp" ? Pv() : e === "pl" ? qv() : e === "ru" ? Lv() : e === "uk" ? Uv() : Mv()
  },
  Bv = () => "You do not have enough Droplets to buy this item.",
  Cv = () => "Você não tem Droplets suficientes para comprar este item.",
  Kv = () => "你的 Droplets 不足，无法购买此物品。",
  Fv = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  $v = () => "No tienes suficientes Droplets para comprar este ítem.",
  Gv = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  Vv = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  Hv = () => "このアイテムを購入するのに十分なDropletsがありません。",
  Wv = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  Yv = () => "У вас недостаточно Droplets для покупки этого предмета.",
  Jv = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  Qv = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  _t = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Bv() : e === "pt" ? Cv() : e === "ch" ? Kv() : e === "de" ? Fv() : e === "es" ? $v() : e === "fr" ? Gv() : e === "it" ? Vv() : e === "jp" ? Hv() : e === "pl" ? Wv() : e === "ru" ? Yv() : e === "uk" ? Jv() : Qv()
  },
  Zv = () => "You need to be logged in to paint",
  Xv = () => "Você precisa estar conectado para pintar",
  eE = () => "你需要登录才能进行绘制",
  tE = () => "Du musst eingeloggt sein, um zu malen",
  nE = () => "Debes iniciar sesión para pintar",
  rE = () => "Vous devez être connecté pour peindre",
  oE = () => "Devi avere effettuato l'accesso per dipingere",
  iE = () => "ペイントするにはログインが必要です。",
  aE = () => "Musisz być zalogowany, aby malować",
  sE = () => "Чтобы рисовать, нужно войти в аккаунт",
  uE = () => "Щоб малювати, необхідно увійти в акаунт",
  cE = () => "Bạn cần đăng nhập để tô",
  ft = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Zv() : e === "pt" ? Xv() : e === "ch" ? eE() : e === "de" ? tE() : e === "es" ? nE() : e === "fr" ? rE() : e === "it" ? oE() : e === "jp" ? iE() : e === "pl" ? aE() : e === "ru" ? sE() : e === "uk" ? uE() : cE()
  },
  lE = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  dE = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  _E = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  fE = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  pE = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  hE = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  mE = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  gE = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  wE = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  yE = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  bE = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  vE = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  EE = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? lE() : e === "pt" ? dE() : e === "ch" ? _E() : e === "de" ? fE() : e === "es" ? pE() : e === "fr" ? hE() : e === "it" ? mE() : e === "jp" ? gE() : e === "pl" ? wE() : e === "ru" ? yE() : e === "uk" ? bE() : vE()
  },
  kE = n => `Your account has been suspended out until ${n.until}`,
  TE = n => `A sua conta está suspensa até ${n.until}`,
  OE = n => `你的账号已被暂停至 ${n.until}`,
  IE = n => `Dein Konto ist gesperrt bis ${n.until}`,
  SE = n => `Tu cuenta ha sido suspendida hasta ${n.until}`,
  NE = n => `Votre compte est suspendu jusqu’au ${n.until}`,
  zE = n => `Il tuo account è sospeso fino al ${n.until}`,
  AE = n => `あなたのアカウントは${n.until}まで一時停止されています。`,
  RE = n => `Twoje konto zostało zawieszone do ${n.until}`,
  DE = n => `Ваш аккаунт заблокирован до ${n.until}`,
  xE = n => `Ваш акаунт призупинено до ${n.until}`,
  jE = n => `Tài khoản của bạn đã bị đình chỉ đến ${n.until}`,
  pt = (n, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? kE(n) : e === "pt" ? TE(n) : e === "ch" ? OE(n) : e === "de" ? IE(n) : e === "es" ? SE(n) : e === "fr" ? NE(n) : e === "it" ? zE(n) : e === "jp" ? AE(n) : e === "pl" ? RE(n) : e === "ru" ? DE(n) : e === "uk" ? xE(n) : jE(n)
  },
  PE = () => "A correction is already pending for this ticket.",
  qE = () => "Já existe uma correção pendente para este ticket.",
  LE = () => "此工单已存在待审核的更正请求。",
  UE = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  ME = () => "Ya hay una corrección pendiente para este ticket.",
  BE = () => "Une correction est déjà en attente pour ce ticket.",
  CE = () => "Una correzione è già in sospeso per questo ticket.",
  KE = () => "このチケットには未処理の修正があります。",
  FE = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  $E = () => "Для этого тикета уже есть запрос на исправление.",
  GE = () => "Для цього тікета вже є запит на перевірці.",
  VE = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  HE = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? PE() : e === "pt" ? qE() : e === "ch" ? LE() : e === "de" ? UE() : e === "es" ? ME() : e === "fr" ? BE() : e === "it" ? CE() : e === "jp" ? KE() : e === "pl" ? FE() : e === "ru" ? $E() : e === "uk" ? GE() : VE()
  },
  WE = () => "You cannot review your own correction request.",
  YE = () => "Você não pode revisar sua própria solicitação de correção.",
  JE = () => "不能审核自己提交的更正请求。",
  QE = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  ZE = () => "No puedes revisar tu propia solicitud de corrección.",
  XE = () => "Tu ne peux pas examiner ta propre demande de correction.",
  ek = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  tk = () => "自分のリクエストはレビューできません。",
  nk = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  rk = () => "Нельзя рассматривать собственный запрос.",
  ok = () => "Не можна перевіряти власний запит.",
  ik = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  ak = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? WE() : e === "pt" ? YE() : e === "ch" ? JE() : e === "de" ? QE() : e === "es" ? ZE() : e === "fr" ? XE() : e === "it" ? ek() : e === "jp" ? tk() : e === "pl" ? nk() : e === "ru" ? rk() : e === "uk" ? ok() : ik()
  },
  sk = () => "This correction has already been reviewed.",
  uk = () => "Esta correção já foi revisada.",
  ck = () => "此请求已被审核。",
  lk = () => "Diese Korrektur wurde bereits geprüft.",
  dk = () => "Esta corrección ya ha sido revisada.",
  _k = () => "Cette correction a déjà été examinée.",
  fk = () => "Questa correzione è già stata revisionata.",
  pk = () => "このリクエストはすでにレビュー済みです。",
  hk = () => "Ta prośba została już rozpatrzona.",
  mk = () => "Этот запрос уже рассмотрен.",
  gk = () => "Цей запит вже перевірено.",
  wk = () => "Yêu cầu này đã được duyệt.",
  yk = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? sk() : e === "pt" ? uk() : e === "ch" ? ck() : e === "de" ? lk() : e === "es" ? dk() : e === "fr" ? _k() : e === "it" ? fk() : e === "jp" ? pk() : e === "pl" ? hk() : e === "ru" ? mk() : e === "uk" ? gk() : wk()
  },
  $e = {
    insufficient_context: pd(),
    no_rule_violation: __(),
    not_enough_for_punishment: U_(),
    caused_by_glitch: Kl(),
    out_of_scope: df(),
    invalid_information: Bd(),
    allowed_by_event: ml(),
    already_handled: $c()
  },
  ET = {
    insufficient_context: td(),
    no_rule_violation: Xd(),
    not_enough_for_punishment: O_(),
    caused_by_glitch: zl(),
    out_of_scope: Q_(),
    invalid_information: Sd(),
    allowed_by_event: rl(),
    already_handled: Rc()
  },
  kT = Object.keys($e).map(n => ({
    value: n,
    label: $e[n]
  }));

function TT(n) {
  return n in $e
}
var i = (n => (n[n.CONTINUE = 100] = "CONTINUE", n[n.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", n[n.PROCESSING = 102] = "PROCESSING", n[n.EARLY_HINTS = 103] = "EARLY_HINTS", n[n.OK = 200] = "OK", n[n.CREATED = 201] = "CREATED", n[n.ACCEPTED = 202] = "ACCEPTED", n[n.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", n[n.NO_CONTENT = 204] = "NO_CONTENT", n[n.RESET_CONTENT = 205] = "RESET_CONTENT", n[n.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", n[n.MULTI_STATUS = 207] = "MULTI_STATUS", n[n.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", n[n.IM_USED = 226] = "IM_USED", n[n.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", n[n.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", n[n.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", n[n.FOUND = 302] = "FOUND", n[n.SEE_OTHER = 303] = "SEE_OTHER", n[n.NOT_MODIFIED = 304] = "NOT_MODIFIED", n[n.USE_PROXY = 305] = "USE_PROXY", n[n.SWITCH_PROXY = 306] = "SWITCH_PROXY", n[n.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", n[n.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", n[n.BAD_REQUEST = 400] = "BAD_REQUEST", n[n.UNAUTHORIZED = 401] = "UNAUTHORIZED", n[n.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", n[n.FORBIDDEN = 403] = "FORBIDDEN", n[n.NOT_FOUND = 404] = "NOT_FOUND", n[n.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", n[n.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", n[n.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", n[n.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", n[n.CONFLICT = 409] = "CONFLICT", n[n.GONE = 410] = "GONE", n[n.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", n[n.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", n[n.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", n[n.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", n[n.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", n[n.URI_TOO_LONG = 414] = "URI_TOO_LONG", n[n.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", n[n.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", n[n.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", n[n.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", n[n.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", n[n.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", n[n.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", n[n.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", n[n.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", n[n.LOCKED = 423] = "LOCKED", n[n.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", n[n.TOO_EARLY = 425] = "TOO_EARLY", n[n.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", n[n.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", n[n.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", n[n.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", n[n.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", n[n.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", n[n.BAD_GATEWAY = 502] = "BAD_GATEWAY", n[n.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", n[n.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", n[n.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", n[n.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", n[n.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", n[n.LOOP_DETECTED = 508] = "LOOP_DETECTED", n[n.NOT_EXTENDED = 510] = "NOT_EXTENDED", n[n.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", n[n.AWS_ELB_000 = 0] = "AWS_ELB_000", n[n.THIS_IS_FINE = 218] = "THIS_IS_FINE", n[n.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", n[n.METHOD_FAILURE = 420] = "METHOD_FAILURE", n[n.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", n[n.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", n[n.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", n[n.NO_RESPONSE = 444] = "NO_RESPONSE", n[n.RETRY_WITH = 449] = "RETRY_WITH", n[n.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", n[n.REDIRECT_IIS = 451] = "REDIRECT_IIS", n[n.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", n[n.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", n[n.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", n[n.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", n[n.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", n[n.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", n[n.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", n[n.INVALID_TOKEN = 498] = "INVALID_TOKEN", n[n.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", n[n.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", n[n.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", n[n.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", n[n.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", n[n.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", n[n.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", n[n.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", n[n.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", n[n.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", n[n.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", n[n.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", n[n.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", n[n.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", n[n.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", n[n.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", n[n.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", n[n.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", n[n.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", n[n.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", n[n.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", n[n.REQUEST_DENIED = 999] = "REQUEST_DENIED", n))(i || {});
const B = {
  day: 1440 * 60 * 1e3,
  hour: 3600 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
};

function OT(n) {
  const t = Math.floor(n / B.hour);
  n -= t * B.hour;
  const e = Math.floor(n / B.minute);
  n -= e * B.minute;
  const o = Math.floor(n / B.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${o}` : `${e}:${o}`
}

function IT(n) {
  const t = n.getFullYear(),
    e = String(n.getMonth() + 1).padStart(2, "0"),
    r = String(n.getDate()).padStart(2, "0"),
    o = String(n.getHours()).padStart(2, "0"),
    a = String(n.getMinutes()).padStart(2, "0"),
    c = String(n.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${r} ${o}:${a}:${c}`
}
const ST = {
    griefing: xu(),
    "multi-accounting": mm(),
    "hate-speech": ic(),
    bot: yo(),
    doxxing: La(),
    "inappropriate-content": Tf(),
    other: Go()
  },
  NT = {
    doxxing: Ja(),
    "hate-speech": wc(),
    griefing: Vu(),
    "multi-accounting": zm(),
    bot: Do(),
    "inappropriate-content": Lf(),
    other: oi()
  },
  zT = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  ht = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  AT = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  bk = 365 * B.day;

function Et(n) {
  if (!n) return null;
  const e = (n instanceof Date ? n : new Date(n)).getTime();
  return Number.isFinite(e) ? e : null
}

function RT(n, t = Date.now()) {
  const e = Et(n);
  return e === null ? !1 : e - t >= bk
}

function DT(n, t = Date.now()) {
  const e = Et(n);
  if (e === null || e <= t) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const r = Math.max(0, Math.ceil((e - t) / 6e4)),
    o = Math.floor(r / 1440),
    a = Math.floor(r % 1440 / 60),
    c = r % 60;
  return {
    days: o,
    hours: a,
    minutes: c
  }
}
const vk = [{
    tileSize: 1e3,
    zoom: 11
  }],
  Ek = 4,
  kk = 6e3,
  Tk = [{
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
  Ok = {
    android: {
      googlePlayBilling: {
        price: 1.2
      },
      appName: "live.wplace.twa"
    }
  },
  Ik = {
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
  Sk = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  Nk = {
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
  zk = {
    tools: {
      wayback: {
        limit: 1e4
      }
    }
  },
  Ak = [{
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
  Rk = {
    areaRadius: 250
  },
  P = {
    seasons: vk,
    regionSize: Ek,
    refreshIntervalMs: kk,
    colors: Tk,
    platforms: Ok,
    products: Ik,
    countries: Sk,
    permissions: Nk,
    settings: zk,
    worldCupStore: Ak,
    moderation: Rk
  },
  je = P,
  Dk = P.seasons,
  kt = P.seasons.length - 1,
  xT = P.seasons[kt].zoom,
  jT = P.seasons[kt].tileSize,
  PT = P.permissions,
  xk = P.settings,
  jk = P.platforms.android,
  qT = jk.googlePlayBilling.price,
  LT = P.worldCupStore;

function UT(n) {
  return je.countries[n - 1]
}

function Ge(n) {
  return Ge.map.get(n)
}(n => {
  n.sharedProducts = Object.entries(je.products).map(([t, e]) => ({
    ...e,
    productId: t
  })).filter(t => "lookupKey" in t), n.map = Pk(n.sharedProducts, t => t.lookupKey)
})(Ge || (Ge = {}));

function Pk(n, t) {
  const e = new Map;
  for (const r in n) {
    const o = Reflect.get(n, r),
      a = t(o, r, n);
    e.set(a, o)
  }
  return e
}
class l extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}
class MT extends Error {}

function mt(n, t) {
  const e = {};
  for (const r of n) {
    const o = t(r);
    let a = e[o];
    a ? a.push(r) : e[o] = [r]
  }
  return e
}

function BT(n, t) {
  const e = {};
  for (const r of n) {
    const o = t(r);
    e[o] = r
  }
  return e
}
const qk = 30 * B.minute;
var pe, he;
class Lk {
  constructor(t) {
    b(this, pe, I(!0));
    b(this, he, I(null));
    g(this, "lastHotspotRequestAt", 0);
    this.url = t
  }
  get online() {
    return k(p(this, pe))
  }
  set online(t) {
    T(p(this, pe), t, !0)
  }
  get serverTimeOffsetMs() {
    return k(p(this, he))
  }
  set serverTimeOffsetMs(t) {
    T(p(this, he), t, !0)
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
    const e = mt(t, u => `t=(${u.tile[0]},${u.tile[1]}),s=${u.season}`),
      r = {
        season: t[0].season,
        tiles: Object.values(e).map(u => ({
          x: u[0].tile[0],
          y: u[0].tile[1],
          pixels: {
            x: u.map(_ => _.pixel[0]),
            y: u.map(_ => _.pixel[1]),
            colors: u.map(_ => _.colorIdx)
          }
        }))
      },
      o = JSON.stringify(r),
      a = await X.getHeaders(o),
      c = await this.request("/paint", {
        method: "POST",
        body: o,
        headers: a,
        credentials: "include"
      });
    if (c.status === i.OK) {
      const u = await c.json().catch(() => ({}));
      return {
        worldCupQuestCompleted: !!(u != null && u.worldCupQuestCompleted)
      }
    }
    if (c.status !== i.OK) {
      if (c.status === i.UNAUTHORIZED) throw new Error(ft());
      if (c.status === i.FORBIDDEN) {
        if (c.headers.get("cf-mitigated") === "challenge") throw new Error(at());
        const u = await c.json();
        if ((u == null ? void 0 : u.error) === "timeout") {
          const _ = new Date(Date.now() + ((u == null ? void 0 : u.durationMs) ?? 0));
          throw new Error(pt({
            until: _.toLocaleString()
          }))
        }
        if ((u == null ? void 0 : u.error) === "refresh") throw new Error(ct());
        if ((u == null ? void 0 : u.error) === "color-not-owned") throw new Error(ut());
        if ((u == null ? void 0 : u.error) === "event-pixel-present") throw new Error(ot());
        if ((u == null ? void 0 : u.error) === "challenge-required")
          if (u.tier) {
            if (await tt(u.tier)) return this.paint(t);
            throw new Error(Me())
          } else console.error("Challenge required but no tier provided", u);
        if ((u == null ? void 0 : u.error) === "verification-required") {
          const f = (await qt().get()).sealed_result;
          if (f) return await this.verifyAnticheat(f), this.paint(t);
          throw new Error(s())
        }
        V.refresh()
      } else throw new Error(s())
    }
    return {
      worldCupQuestCompleted: !1
    }
  }
  async selectAreaClear(t, e) {
    return this.sendPaintRequests(t, (r, o, a) => `/staff/tools/select-area/clear/s${r}/pixel/${o}/${a}`, e)
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
    if (e.status !== i.OK) throw new l(s(), e.status);
    return e.json()
  }
  async getReverseTimestamps(t, e = {}) {
    const {
      mode: r = "depth",
      beforeDepth: o,
      beforeTimestamp: a
    } = e, c = await this.request("/staff/tools/select-area/reverse/timestamps", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        beforeDepth: o,
        beforeTimestamp: a
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (c.status !== i.OK) throw new l(s(), c.status);
    return c.json()
  }
  async getReversePreview(t, e) {
    const {
      mode: r = "depth",
      snapshotDepth: o,
      timestamp: a
    } = e, c = await this.request("/staff/tools/select-area/reverse/preview", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        snapshotDepth: o,
        timestamp: a
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (c.status !== i.OK) throw new l(s(), c.status);
    return c.json()
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
    if (r.status === i.BAD_REQUEST) {
      const o = await r.json(),
        a = (o == null ? void 0 : o.error) ?? "";
      throw a === "timelapse_too_many_events" ? new l(uy(), i.BAD_REQUEST) : new l(typeof a == "string" && a ? a : s(), i.BAD_REQUEST)
    }
    if (r.status !== i.OK) throw new l(s(), r.status);
    return r.arrayBuffer()
  }
  async applyReverse(t, e) {
    const {
      mode: r = "depth",
      snapshotDepth: o,
      timestamp: a
    } = e, c = await this.request("/staff/tools/select-area/reverse/apply", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        snapshotDepth: o,
        timestamp: a
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (c.status !== i.OK) throw new l(s(), c.status);
    return c.json()
  }
  async sendPaintRequests(t, e, r, o) {
    const a = mt(t, _ => `t=(${_.tile[0]},${_.tile[1]}),s=${_.season}`),
      u = (await Promise.all(Object.values(a).map(async _ => {
        const [f, O] = _[0].tile, y = _[0].season, D = {
          colors: _.map(z => z.colorIdx),
          coords: _.flatMap(z => z.pixel),
          csid: r
        }, q = JSON.stringify(D), S = e(y, f, O), A = await X.getHeaders(q);
        return this.request(S, {
          method: "POST",
          body: q,
          headers: A,
          credentials: "include"
        })
      }))).filter(_ => _.status !== i.OK);
    if (u.length) {
      const _ = u[0];
      if (_.status === i.UNAUTHORIZED) throw new Error(ft());
      if (_.status === i.FORBIDDEN) {
        if (_.headers.get("cf-mitigated") === "challenge") throw new Error(at());
        const f = await _.json();
        if ((f == null ? void 0 : f.error) === "timeout") {
          const O = new Date(Date.now() + ((f == null ? void 0 : f.durationMs) ?? 0));
          throw new Error(pt({
            until: O.toLocaleString()
          }))
        }
        if ((f == null ? void 0 : f.error) === "refresh") throw new Error(ct());
        if ((f == null ? void 0 : f.error) === "color-not-owned") throw new Error(ut());
        if ((f == null ? void 0 : f.error) === "event-pixel-present") throw new Error(ot());
        V.refresh()
      } else throw new Error(s())
    }
  }
  async adminAutoPainterPaint(t, e, r) {
    const o = Uk(t),
      a = await Mk(o),
      c = new FormData;
    c.append("fingerprint", e), c.append("season", o.season.toString()), c.append("px0", o.offsetX.toString()), c.append("py0", o.offsetY.toString()), c.append("width", o.width.toString()), c.append("height", o.height.toString()), c.append("pixels", t.length.toString()), c.append("bitmap", a, "auto-painter.png"), c.append("userId", r.toString());
    const u = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: c,
      credentials: "include"
    });
    if (u.status === i.FORBIDDEN) {
      const _ = await u.json().catch(() => null);
      if (typeof(_ == null ? void 0 : _.charges) == "number") throw new Error(Bg({
        charges: Math.floor(_.charges),
        pixels: t.length
      }));
      const f = typeof(_ == null ? void 0 : _.error) == "string" ? _.error.trim() : "";
      throw f && f !== "Forbidden" ? new Error(f) : new Error("Auto painter is restricted to administrators.")
    }
    if (u.status !== i.OK) throw new Error(s());
    return u.json()
  }
  async getPixelInfo({
    season: t,
    tile: [e, r],
    pixel: [o, a]
  }) {
    const c = new URLSearchParams;
    c.set("x", String(o)), c.set("y", String(a));
    const u = await this.request(`/s${t}/pixel/${e}/${r}?${c.toString()}`, {
      credentials: "include"
    });
    if (u.status !== i.OK) {
      const _ = await u.text();
      throw new Error(Ws({
        err: _
      }))
    }
    return u.json()
  }
  async getPixelAreaInfo({
    season: t,
    tile: [e, r],
    p0: [o, a],
    p1: [c, u]
  }) {
    const _ = await this.request(`/staff/tools/select-area/s${t}/${e}/${r}?x0=${o}&y0=${a}&x1=${c}&y1=${u}`, {
      credentials: "include"
    });
    if (_.status !== i.OK) {
      const S = await _.text();
      throw console.error("Error while fetching pixel area info", S), new Error(s())
    }
    const f = await _.arrayBuffer(),
      O = new DataView(f),
      y = Math.floor(f.byteLength / 5),
      D = new Uint32Array(y),
      q = new Uint8Array(y);
    for (let S = 0; S < y; S++) {
      const A = S * 5;
      D[S] = O.getUint32(A, !0), q[S] = O.getUint8(A + 4)
    }
    return {
      paintedBy: D,
      colors: q
    }
  }
  async me() {
    const t = await this.request("/me", {
      credentials: "include",
      throwOnStatus: !1
    });
    if (t.status === i.OK) return await t.json();
    if (t.status !== i.UNAUTHORIZED) throw new l(s(), t.status)
  }
  async meEmail() {
    const t = await this.request("/me/email", {
      credentials: "include"
    });
    if (t.status === i.OK) return (await t.json()).email
  }
  async exchangeForCupCoins(t) {
    return (await this.request("/world-cup/coins/exchange", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        batches: t
      }),
      throwOnStatus: !1
    })).status === i.OK
  }
  async getOwnedWorldCupItems() {
    const t = await this.request("/world-cup/items/owned", {
      credentials: "include",
      throwOnStatus: !1
    });
    return t.status !== i.OK ? {
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
    })).status === i.OK
  }
  async getWorldCupPredictions() {
    const t = await this.request("/world-cup/predictions", {
      credentials: "omit",
      throwOnStatus: !1
    });
    return t.status !== i.OK ? [] : (await t.json()).predictions ?? []
  }
  async getMyWorldCupPredictions() {
    const t = await this.request("/world-cup/predictions/mine", {
      credentials: "include",
      throwOnStatus: !1
    });
    return t.status !== i.OK ? [] : (await t.json()).predictions ?? []
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
    return r.status !== i.OK ? {
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
    if (t.status !== i.OK) throw new Error(await t.text());
    return await t.json()
  }
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
    if (e.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(rt());
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
  async getOtpCooldown() {
    const t = await this.request("/anticheat/otp/cooldown", {
      credentials: "include"
    });
    if (t.status !== i.OK) throw new Error(s());
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
    if (e.status === i.BAD_REQUEST) throw new Error(ah());
    if (e.status === i.CONFLICT) throw new Error(dw());
    if (e.status === i.FORBIDDEN) throw new Error(pg());
    if (e.status === i.TOO_MANY_REQUESTS) throw new Error(lt());
    if (e.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(Tw());
    if (e.status === i.LOCKED) throw new Error(Ab());
    if (e.status === i.UNPROCESSABLE_ENTITY) throw new Error(yh());
    if (e.status === i.NOT_ACCEPTABLE) throw new Error(Fb());
    if (e.status === i.PRECONDITION_FAILED) throw new Error(_a());
    if (e.status !== i.OK) throw new Error(s());
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
        "x-fp": await Ce()
      }
    });
    if (t.type === "otp") {
      if (r.status === i.GONE) throw new Error(bu());
      if (r.status === i.BAD_REQUEST) throw new Error(Ep());
      if (r.status === i.TOO_MANY_REQUESTS) throw new Error(lt());
      if (r.status !== i.OK) throw new Error(s())
    } else {
      if (r.status === i.BAD_REQUEST) throw new Error(cp());
      if (r.status !== i.OK) throw new Error(s())
    }
  }
  async verifyAnticheat(t) {
    if ((await this.request("/anticheat/verify", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          sealedResults: t.base64()
        })
      })).status !== i.OK) throw new Error(s())
  }
  async updateMe(t) {
    const e = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === i.BAD_REQUEST) {
      const r = await e.json(),
        o = (r == null ? void 0 : r.error) ?? "";
      if (o === "invalid_name") throw new Error(st());
      if (o === "invalid_discord") throw new Error(Pp());
      if (typeof o == "string" && o.startsWith("name_change_cooldown:")) {
        const a = parseInt(o.split(":")[1] ?? "0", 10);
        throw new Error(Km({
          days: a
        }))
      }
      throw new Error(r == null ? void 0 : r.error)
    } else if (e.status !== i.OK) throw new Error(s())
  }
  async deleteMe(t) {
    const e = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: t
      })
    });
    if (e.status === i.BAD_REQUEST) throw new Error(ib());
    if (e.status !== i.OK) throw new Error(s())
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
    if (e.status === i.FORBIDDEN) throw new Error(Sg());
    if (e.status !== i.OK) throw new Error(s())
  }
  async deleteFavoriteLocation(t) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: t
        }),
        credentials: "include"
      })).status !== i.OK) throw new Error(s())
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
    if (r.status === i.BAD_REQUEST) throw new Error(rm());
    if (r.status !== i.OK) throw new Error(s())
  }
  async leaderboardPlayers(t) {
    const e = await this.request(`/leaderboard/player/${t}`);
    if (e.status !== i.OK) throw new Error(K());
    return e.json()
  }
  async leaderboardAlliances(t) {
    const e = await this.request(`/leaderboard/alliance/${t}`);
    if (e.status !== i.OK) throw new Error(K());
    return e.json()
  }
  async leaderboardRegions(t, e = 0) {
    const r = await this.request(`/leaderboard/region/${t}/${e}`);
    if (r.status === i.OK) return r.json();
    throw new Error(K())
  }
  async leaderboardRegionPlayers(t, e) {
    const r = await this.request(`/leaderboard/region/players/${t}/${e}`);
    if (r.status === i.OK) return r.json();
    throw new Error(K())
  }
  async leaderboardRegionAlliances(t, e) {
    const r = await this.request(`/leaderboard/region/alliances/${t}/${e}`);
    if (r.status === i.OK) return r.json();
    throw new Error(K())
  }
  async leaderboardCountries(t) {
    const e = await this.request(`/leaderboard/country/${t}`, {
      credentials: "include"
    });
    if (e.status === i.OK) return e.json();
    throw new Error(K())
  }
  refreshHotspotsIfStale() {
    Date.now() - this.lastHotspotRequestAt < qk || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
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
    if (e.status !== i.OK) throw new Error(s());
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
    if (e.status !== i.OK) throw e.status === i.NOT_FOUND ? new Error(it()) : e.status === i.FORBIDDEN ? new Error(_t()) : e.status === i.CONFLICT ? new Error(dt()) : new Error(s())
  }
  async getAlliance() {
    const t = await this.request("/alliance", {
      credentials: "include"
    });
    if (t.status === i.OK) return t.json();
    if (t.status === i.NOT_FOUND) return;
    throw new Error(s())
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
      const r = await e.json();
      throw r.error === "max_characters" ? new Error(Vr()) : r.error === "name_taken" ? new Error(xr()) : r.error == "empty_name" ? new Error(io()) : new Error(s())
    } else throw e.status === i.FORBIDDEN ? new Error(Sv()) : new Error(s())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== i.OK) throw new Error(s())
  }
  async updateAllianceDescription(t) {
    const e = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: t
      })
    });
    if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(F()) : e.status === i.BAD_REQUEST ? new Error(su()) : new Error(s())
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
    if (r.status !== i.OK) throw r.status === i.FORBIDDEN ? new Error(F()) : new Error(s())
  }
  async allianceLeaderboard(t) {
    const e = await this.request(`/alliance/leaderboard/${t}`, {
      credentials: "include"
    });
    if (e.status === i.OK) return e.json();
    throw e.status === i.FORBIDDEN ? new Error(F()) : new Error(K())
  }
  async getAllianceInvites() {
    const t = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (t.status === i.OK) return t.json();
    throw t.status === i.FORBIDDEN ? new Error(F()) : new Error(s())
  }
  async joinAlliance(t) {
    switch ((await this.request(`/alliance/join/${t}`, {
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
    const e = await this.request(`/alliance/members/${t}`, {
      credentials: "include"
    });
    if (e.status === i.OK) return e.json();
    throw new Error(s())
  }
  async getAllianceBannedMembers(t) {
    const e = await this.request(`/alliance/members/banned/${t}`, {
      credentials: "include"
    });
    if (e.status === i.OK) return e.json();
    throw new Error(s())
  }
  async getAllianceById(t) {
    const e = await this.request(`/staff/dashboard/alliances/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === i.NOT_FOUND) return;
    if (e.status !== i.OK) throw new l(s(), e.status);
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
    if (r.status !== i.OK) throw new l(s(), r.status);
    const o = await r.json();
    return (Array.isArray(o) ? o : []).map(a => ({
      id: Number(a.id),
      name: String(a.name ?? ""),
      pixelsPainted: Number((a == null ? void 0 : a.pixels_painted) ?? 0)
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
    if (e.status === i.NOT_FOUND) return null;
    if (e.status !== i.OK) throw new l(s(), e.status);
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
      members: o.map(a => ({
        id: Number(a == null ? void 0 : a.id),
        name: String((a == null ? void 0 : a.name) ?? `#${a==null?void 0:a.id}`),
        picture: (a == null ? void 0 : a.picture) ?? null,
        pixelsPainted: Number((a == null ? void 0 : a.pixelsPainted) ?? (a == null ? void 0 : a.pixels_painted) ?? 0),
        lastPixelLatitude: (a == null ? void 0 : a.lastPixelLatitude) ?? null,
        lastPixelLongitude: (a == null ? void 0 : a.lastPixelLongitude) ?? null,
        role: (a == null ? void 0 : a.alliance_role) === "admin" || (a == null ? void 0 : a.role) === "admin" ? "admin" : "member",
        timedOut: !!(a != null && a.timedOut),
        banned: !!(a != null && a.banned)
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
    if (o.status === i.NOT_FOUND) return {
      members: [],
      total: 0
    };
    if (o.status !== i.OK) throw new l(s(), o.status);
    const a = await o.json(),
      c = Array.isArray(a == null ? void 0 : a.members) ? a.members : [];
    return {
      members: c.map(u => ({
        id: Number(u == null ? void 0 : u.id),
        name: String((u == null ? void 0 : u.name) ?? `#${u==null?void 0:u.id}`),
        picture: (u == null ? void 0 : u.picture) ?? null,
        pixelsPainted: Number((u == null ? void 0 : u.pixelsPainted) ?? (u == null ? void 0 : u.pixels_painted) ?? 0),
        lastPixelLatitude: (u == null ? void 0 : u.lastPixelLatitude) ?? null,
        lastPixelLongitude: (u == null ? void 0 : u.lastPixelLongitude) ?? null,
        role: (u == null ? void 0 : u.alliance_role) === "admin" || (u == null ? void 0 : u.role) === "admin" ? "admin" : "member",
        timedOut: !!(u != null && u.timedOut),
        banned: !!(u != null && u.banned)
      })),
      total: Number((a == null ? void 0 : a.total) ?? c.length)
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
    if (r.status === i.BAD_REQUEST) {
      const o = await r.json().catch(() => ({}));
      throw new Error((o == null ? void 0 : o.error) ?? s())
    } else if (r.status !== i.OK) throw new l(s(), r.status)
  }
  async changeAllianceLeader(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/leader`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        newLeaderUserId: e
      })
    });
    if (r.status === i.BAD_REQUEST) {
      const o = await r.json();
      throw (o == null ? void 0 : o.error) === "user_not_in_alliance" ? new Error(Dh()) : new Error(s())
    } else if (r.status !== i.OK) throw new l(s(), r.status)
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
    if (o.status !== i.OK) throw new l(s(), o.status)
  }
  async setAllianceMemberRole(t, e, r) {
    const o = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: r
      })
    });
    if (o.status !== i.OK) throw new l(s(), o.status)
  }
  async removeAllianceMember(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(s(), r.status)
  }
  async giveAllianceAdmin(t) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(F()) : new Error(s())
  }
  async banAllianceUser(t) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(F()) : new Error(s())
  }
  async equipFlag(t) {
    if ((await this.request(`/flag/equip/${t}`, {
        method: "POST",
        credentials: "include"
      })).status !== i.OK) throw new Error(s())
  }
  async getMyProfilePictures() {
    const t = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (t.status !== i.OK) throw new Error(s());
    return t.json()
  }
  async changeProfilePicture(t) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: t
        })
      })).status !== i.OK) throw new Error(s())
  }
  async unbanAllianceUser(t) {
    const e = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(F()) : new Error(s())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async getPlayAccountId() {
    const t = await this.request("/payment/play/account-id", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new Error(s());
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
      const r = await e.json().catch(() => ({}));
      throw new Error((r == null ? void 0 : r.error) ?? "Invalid Play purchase")
    }
    if (e.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(rt());
    if (e.status !== i.OK) throw new Error(s());
    return e.json()
  }
  async verifyPendingPlayPurchases() {
    const t = await this.request("/payment/play/verify-pending", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new Error(s());
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
    if (e.status !== i.OK) throw new Error(s());
    return e.json()
  }
  async listPlayPurchaseHistory() {
    const t = await this.request("/payment/play/history", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new Error(s());
    return t.json()
  }
  async getModeratorTickets() {
    const t = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
    const e = await t.json();
    for (const r of e.tickets) r.reports.sort((o, a) => ht[o.reason] - ht[a.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const t = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
    return t.json()
  }
  async getOpenTicketsCount() {
    const t = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
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
    if (t.status !== i.OK) throw new l(s(), t.status);
    return t.json()
  }
  async setTicketStatus(t, e, r, o, a) {
    const c = await this.request("/staff/tickets/set-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: t,
        status: e,
        selectedReportId: r,
        assignedReason: o,
        ignoreReason: a
      })
    });
    if (c.status !== i.OK && c.status !== i.BAD_REQUEST) throw new l(s(), c.status)
  }
  async getLastResolvedTicket() {
    const t = await this.request("/staff/tickets/reversals/last-resolved", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
    return (await t.json()).ticket
  }
  async getTicketReversalTicketInfo(t) {
    const e = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(s(), e.status);
    return (await e.json()).ticket
  }
  async getReporterReportHistory(t, e) {
    const r = await this.request(`/staff/tickets/reporter-history?ticketId=${encodeURIComponent(t)}&reporterId=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(s(), r.status);
    return (await r.json()).reports
  }
  async createTicketReversal(t) {
    const e = await this.request("/staff/tickets/reversals", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === i.CONFLICT) {
      const r = await e.json().catch(() => ({}));
      throw (r == null ? void 0 : r.error) === "reversal_already_pending" ? new l(HE(), i.CONFLICT) : new l(s(), i.CONFLICT)
    }
    if (e.status !== i.OK) throw new l(s(), e.status);
    return e.json()
  }
  async reSolveTicket(t) {
    const e = await this.request("/staff/tickets/re-solve", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== i.OK) throw new l(s(), e.status);
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
    if (o.status !== i.OK) throw new l(s(), o.status);
    return (await o.json()).reversals ?? []
  }
  async getTicketReversal(t) {
    const e = await this.request(`/staff/tickets/reversals/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(s(), e.status);
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
    if (o.status === i.FORBIDDEN) throw new l(ak(), i.FORBIDDEN);
    if (o.status === i.CONFLICT) throw new l(yk(), i.CONFLICT);
    if (o.status !== i.OK) throw new l(s(), o.status)
  }
  async guardedFetch(t, e) {
    try {
      const r = await fetch(`${this.url}${t}`, e);
      return this.online = !0, this.updateServerTimeEstimate(r), r
    } catch (r) {
      throw console.error("Fetch error:", r), this.online = !1, new Error(zi())
    }
  }
  async request(t, e) {
    var c;
    e = {
      credentials: "include",
      ...e
    };
    let r = await this.guardedFetch(t, e);
    if (r.status === i.FORBIDDEN && r.headers.get("x-block-reason") === "tor") throw new Error(Vy());
    const o = ((c = r.headers.get("cf-mitigated")) == null ? void 0 : c.toLowerCase()) === "challenge";
    if (r.status === 403 && o) {
      if (X.setCfLikelyAutomated(!0), !await bt()) throw new Error(Me());
      r = await this.guardedFetch(t, e)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === i.TOO_MANY_REQUESTS) throw new Error(EE());
      if (r.status === i.REQUEST_TIMEOUT) throw new Error(Yw());
      if (r.status === i.SERVICE_UNAVAILABLE) throw new Error(vy())
    }
    return r
  }
  async getOpenTicketsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
    return t.json()
  }
  async getOpenReportsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
    return t.json()
  }
  async getBanAppealStats(t, e) {
    const r = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(s(), r.status);
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
    if (r.status !== i.OK) throw new l(s(), r.status);
    return (await r.json()).items.map(a => ({
      ...a,
      suspensionRate: (a.ban + a.timeout) / a.total
    }))
  }
  async getClosedReportsByMod(t, e) {
    const r = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(s(), r.status);
    return (await r.json()).items.map(a => ({
      ...a,
      suspensionRate: (a.ban + a.timeout) / a.total
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
    if (e.status !== i.OK) throw new l(s(), e.status);
    return e.json()
  }
  async getUserInfoFull(t) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== i.NOT_FOUND) {
      if (e.status !== i.OK) throw new l(s(), e.status);
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
    if (r.status !== i.OK) throw new l(s(), r.status);
    return r.json()
  }
  async getUserInfoByEmail(t) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== i.NOT_FOUND) {
      if (e.status !== i.OK) throw new l(s(), e.status);
      return e.json()
    }
  }
  async getUserPunishments(t) {
    const e = await this.request(`/staff/dashboard/users/punishments?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(s(), e.status);
    return (await e.json()).punishments ?? []
  }
  async getUserAnticheat(t) {
    const e = await this.request(`/staff/dashboard/users/anticheat?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(s(), e.status);
    return await e.json()
  }
  async getPunishmentTicket(t) {
    const e = await this.request(`/staff/dashboard/users/punishment-ticket?ticketId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(s(), e.status);
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
    if (e.status !== i.OK) throw new l(s(), e.status)
  }
  async autoReviewBan(t) {
    const e = await this.request("/staff/dashboard/users/auto-review-ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t
      })
    });
    if (e.status !== i.OK) throw new l(s(), e.status);
    return await e.json()
  }
  async getUserNotes(t, e) {
    const r = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      o = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (o.status !== i.OK) throw new l(s(), o.status);
    return o.json()
  }
  async addUserNote(t, e, r) {
    const o = r == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      a = await this.request(o, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          note: e
        })
      });
    if (a.status !== i.OK) throw new l(s(), a.status)
  }
  async getUserPermissions(t) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(s(), e.status);
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
    if (r.status !== i.OK) throw new l(s(), r.status);
    const o = await r.json();
    return Array.isArray(o == null ? void 0 : o.permissions) ? o.permissions : []
  }
  async getUserPurchases(t) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(s(), e.status);
    const r = await e.json();
    return (Array.isArray(r == null ? void 0 : r.purchases) ? r.purchases : []).map(a => {
      const c = a.is_dollar ?? a.isDollar ?? a.currency ?? a.Currency ?? 0;
      let u;
      if (typeof c == "string") {
        const y = c.toLowerCase();
        u = y === "usd" || y === "dollar" || y === "true"
      } else typeof c == "number" ? u = c !== 0 : u = !!c;
      const _ = typeof a.createdAt == "string" ? a.createdAt : a.CreatedAt ? new Date(a.CreatedAt).toISOString() : "",
        f = a.product_variant ?? a.productVariant,
        O = f == null || f === "" ? null : Number(f);
      return {
        product_name: String(a.productName ?? a.product_name ?? ""),
        amount: Number(a.amount ?? 0),
        price: Number(a.price ?? 0),
        is_dollar: u,
        created_at: _,
        product_variant: Number.isInteger(O) ? O : null
      }
    })
  }
  async postAdjustUserDroplets(t, e) {
    const r = await this.request("/staff/dashboard/users/adjust-user-droplets", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        delta: e
      })
    });
    if (r.status !== i.OK) throw new l(s(), r.status);
    return (await r.json()).droplets
  }
  async postAdminRenameUser(t, e) {
    const r = await this.request("/staff/dashboard/users/rename", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        newName: e
      })
    });
    if (r.status === i.BAD_REQUEST) {
      const o = await r.json(),
        a = (o == null ? void 0 : o.error) ?? "";
      throw a === "invalid_name" ? new l(st(), i.BAD_REQUEST) : new l(typeof a == "string" && a ? a : s(), i.BAD_REQUEST)
    }
    if (r.status !== i.OK) throw new l(s(), r.status)
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
    if (r.status === i.BAD_REQUEST) {
      const o = await r.json(),
        a = (o == null ? void 0 : o.error) ?? "";
      throw a === "email_required" || a === "invalid_email" ? new l(Ps(), i.BAD_REQUEST) : new l(typeof a == "string" && a ? a : s(), i.BAD_REQUEST)
    }
    if (r.status === i.CONFLICT) {
      const o = await r.json();
      if (((o == null ? void 0 : o.error) ?? "") === "email_already_in_use") {
        const c = new l(typeof(o == null ? void 0 : o.userId) == "number" ? Es({
          userId: o.userId
        }) : cs(), i.CONFLICT);
        throw typeof(o == null ? void 0 : o.userId) == "number" && (c.userId = o.userId), c
      }
      throw new l(s(), i.CONFLICT)
    }
    if (r.status === i.NOT_FOUND) throw new l("User not found.", i.NOT_FOUND);
    if (r.status !== i.OK) throw new l(s(), r.status)
  }
  async getAdminUserProfilePictures(t) {
    const e = await this.request(`/staff/dashboard/users/profile-pictures?userId=${t}`, {
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(s(), e.status);
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
    if (e.status !== i.OK) throw new l(s(), e.status)
  }
  async postAdminRerollUserAvatar(t) {
    const e = await this.request("/staff/dashboard/users/reroll-avatar", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t
      })
    });
    if (e.status !== i.OK) throw new l(s(), e.status);
    return e.json()
  }
  async getUserTickets(t, e) {
    if (e === "appeals" && (t.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
    const r = new URLSearchParams;
    r.set("userId", String(t.userId)), r.set("kind", String(t.kind)), r.set("page", String(t.page ?? 0)), r.set("pageSize", String(t.pageSize ?? 20)), t.sortBy && r.set("sortBy", t.sortBy), t.sortDir && r.set("sortDir", t.sortDir), t.status && r.set("status", t.status), t.reason && r.set("reason", t.reason), e === "appeals" && r.set("appealId", String(t.appealId));
    const o = e === "appeals" ? `/staff/appeals/tickets?${r.toString()}` : `/staff/dashboard/users/tickets?${r.toString()}`,
      a = await this.request(o, {
        method: "GET",
        credentials: "include"
      });
    if (a.status !== i.OK) throw new l(s(), a.status);
    const c = await a.json(),
      u = Array.isArray(c == null ? void 0 : c.tickets) ? c.tickets : [],
      _ = typeof(c == null ? void 0 : c.total) == "number" ? c.total : u.length;
    return {
      tickets: u,
      total: _
    }
  }
  async getAllTickets(t) {
    const e = new URLSearchParams;
    e.set("page", String(t.page ?? 0)), e.set("pageSize", String(t.pageSize ?? 20)), t.modId && e.set("modId", String(t.modId)), t.sortBy && e.set("sortBy", t.sortBy), t.sortDir && e.set("sortDir", t.sortDir), t.status && e.set("status", t.status), t.reason && e.set("reason", t.reason), t.role && e.set("role", t.role), t.reviewed && e.set("reviewed", t.reviewed), t.reSolvedOnly && e.set("reSolvedOnly", "true"), t.hideSystem && e.set("hideSystem", "true"), t.dateFrom && e.set("dateFrom", t.dateFrom), t.dateTo && e.set("dateTo", t.dateTo);
    const r = await this.request(`/staff/dashboard/all-tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(s(), r.status);
    const o = await r.json(),
      a = Array.isArray(o == null ? void 0 : o.tickets) ? o.tickets : [],
      c = typeof(o == null ? void 0 : o.total) == "number" ? o.total : a.length,
      u = typeof(o == null ? void 0 : o.matchedTotal) == "number" ? o.matchedTotal : c,
      _ = typeof(o == null ? void 0 : o.reviewedTotal) == "number" ? o.reviewedTotal : 0;
    return {
      tickets: a,
      total: c,
      matchedTotal: u,
      reviewedTotal: _
    }
  }
  async reviewTicket(t) {
    const e = await this.request("/staff/dashboard/all-tickets/review", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== i.OK) throw new l(s(), e.status);
    return e.json()
  }
  async getTicketOverturnInfo(t) {
    const e = await this.request(`/staff/dashboard/all-tickets/overturn-info?ticketId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(s(), e.status);
    return e.json()
  }
  async getUserAppeals(t) {
    const e = new URLSearchParams;
    e.set("userId", String(t.userId)), e.set("kind", t.kind), t.page !== void 0 && e.set("page", String(t.page)), t.pageSize !== void 0 && e.set("pageSize", String(t.pageSize)), t.sortBy && e.set("sortBy", t.sortBy), t.sortDir && e.set("sortDir", t.sortDir);
    const r = await this.request(`/staff/dashboard/users/appeals?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(s(), r.status);
    const o = await r.json(),
      a = Array.isArray(o == null ? void 0 : o.appeals) ? o.appeals : [],
      c = typeof(o == null ? void 0 : o.total) == "number" ? o.total : a.length;
    return {
      appeals: a,
      total: c
    }
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
    if (o.status !== i.OK) throw new l(s(), o.status);
    const a = await o.json();
    return a == null ? void 0 : a.translation
  }
  mapTicketsToReportRows(t, e) {
    var o, a, c, u, _;
    const r = [];
    for (const f of t) {
      const O = f.status ?? "open";
      if (e === "received") {
        for (const y of f.reports) r.push({
          id: String(y.id),
          ticketId: String(f.id),
          createdAt: y.createdAt ?? f.createdAt,
          byUser: {
            id: Number(y.reportedBy),
            name: String(y.reportedByName ?? y.reportedBy),
            picture: y.reportedByPicture ?? null
          },
          reason: String(y.reason),
          status: O
        });
        continue
      }
      if (e === "sent") {
        for (const y of f.reports) r.push({
          id: String(y.id),
          ticketId: String(f.id),
          createdAt: y.createdAt ?? f.createdAt,
          toUser: {
            id: Number(f.reportedUser.id),
            name: String(f.reportedUser.name),
            picture: f.reportedUser.picture ?? null
          },
          reason: String(y.reason),
          status: O
        });
        continue
      }
      r.push({
        id: String(f.id),
        ticketId: String(f.id),
        createdAt: f.createdAt,
        handledBy: f.status && f.status !== "open" ? {
          id: ((o = f.handledBy) == null ? void 0 : o.id) ?? 0,
          name: ((a = f.handledBy) == null ? void 0 : a.name) ?? "Moderator",
          picture: ((c = f.handledBy) == null ? void 0 : c.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((_ = (u = f.reports) == null ? void 0 : u[0]) == null ? void 0 : _.reason) ?? "other"),
        status: O
      })
    }
    return r.sort((f, O) => new Date(O.createdAt).getTime() - new Date(f.createdAt).getTime()), r
  }
  async getModeratorClosedTicketStats(t) {
    const e = new URLSearchParams({
        id: String(t)
      }).toString(),
      r = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== i.OK) throw new l(s(), r.status);
    return r.json()
  }
  async unlinkDiscord() {
    const t = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== i.NO_CONTENT) throw new l(s(), t.status)
  }
  async deleteSessions() {
    const t = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status)
  }
  async deleteAllUserSessions(t) {
    const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(s(), e.status)
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
    if (o.status !== i.OK) throw new l(s(), o.status)
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
    if (o.status !== i.OK) throw new l(s(), o.status)
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
    if (o.status !== i.OK) throw new l(s(), o.status)
  }
  async reloadPunishmentCache() {
    const t = await this.request("/staff/dashboard/summary/reload-punishment-cache", {
      method: "POST",
      credentials: "include"
    });
    if (t.status === i.CONFLICT) throw new l(ur(), t.status);
    if (t.status !== i.OK && t.status !== i.ACCEPTED) throw new l(s(), t.status)
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
    if (r.status !== i.OK) throw new l(s(), r.status)
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
    if (r.status !== i.OK) throw new l(s(), r.status)
  }
  async postAnticheatBanUsers(t, e, r) {
    const o = await this.request("/staff/dashboard/anticheat/ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        notes: e,
        reason: r
      })
    });
    if (o.status !== i.OK) throw new l(s(), o.status)
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
    if (r.status !== i.OK) throw new l(s(), r.status);
    return await r.json()
  }
  async getAuditLogs(t) {
    const e = new URLSearchParams;
    t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
    const r = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(s(), r.status);
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
      })).status !== i.OK) throw new Error(s())
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
    if (r.status !== i.OK) throw new l(s(), r.status);
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
    if (r.status !== i.OK) throw new l(s(), r.status);
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
    if (e.status !== i.OK) throw new l(s(), e.status)
  }
  async postReportAllianceName(t) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: t
      })
    });
    if (e.status !== i.OK) throw new l(s(), e.status);
    return e.json()
  }
  async submitBanAppeal(t, e) {
    const r = JSON.stringify(e ? {
        message: t,
        ticketId: e
      } : {
        message: t
      }),
      o = await X.getHeaders(r),
      a = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: r,
        headers: o
      });
    if (a.status === i.FORBIDDEN) {
      const c = await a.json();
      if ((c == null ? void 0 : c.error) === "challenge-required" && c.tier) {
        if (await tt(c.tier)) return this.submitBanAppeal(t, e);
        throw new l(Me(), a.status)
      }
    }
    if (a.status !== i.OK && a.status !== i.ALREADY_REPORTED) throw new l(s(), a.status);
    return a.status
  }
  async getOpenAppeals() {
    const t = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
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
    if (r.status !== i.OK) throw new l(s(), r.status);
    return await r.json()
  }
  async getUserLastAppeal() {
    const t = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async getMySuspensionDetails() {
    const t = await this.request("/me/suspension", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
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
    if (t.status !== i.OK) throw new l(s(), t.status);
    return await t.json()
  }
  async getNotificationCount() {
    const t = await this.request("/notification/count", {
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
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
    if (o.status !== i.OK) throw new l(s(), o.status);
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
    if (e.status !== i.OK) throw new l(s(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const t = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
    return t.json()
  }
  async getAnticheatStats(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/stats?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(s(), r.status);
    return r.json()
  }
  async getAnticheatSignals(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/signals?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(s(), r.status);
    return r.json()
  }
  async getAnticheatUserJourney(t, e, r) {
    const o = await this.request(`/staff/dashboard/anticheat/user/${t}?from=${e}&to=${r}`, {
      method: "GET",
      credentials: "include"
    });
    if (o.status !== i.OK) throw new l(s(), o.status);
    return o.json()
  }
  async getAnticheatSignalAnalysis(t, e, r) {
    const o = await this.request(`/staff/dashboard/anticheat/signal/${encodeURIComponent(t)}?from=${encodeURIComponent(e)}&to=${encodeURIComponent(r)}`, {
      method: "GET",
      credentials: "include"
    });
    if (o.status !== i.OK) throw new l(s(), o.status);
    return o.json()
  }
  async getPendingAppealsCount() {
    const t = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async getUserPixelsPaintedToday() {
    const t = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const t = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
    return t.json()
  }
  async postEquipUserFrame(t) {
    const e = await this.request(`/me/frames/equip/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(s(), e.status)
  }
  async getUserBadges() {
    const t = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
    return t.json()
  }
  async postEquipUserBadge(t) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== i.OK) throw new l(s(), e.status)
  }
  async postCaptchaSession(t, e = "include") {
    const r = await this.request("/anticheat/captcha/session", {
      method: "POST",
      credentials: e,
      body: JSON.stringify(t),
      headers: {
        "x-fp": await Ce()
      }
    });
    if (!r.ok) throw r.status === 500 ? new l(s(), r.status) : new l(Jf(), r.status);
    return r.json()
  }
  validWaybackInput(t) {
    const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < Dk.length,
      o = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= xk.tools.wayback.limit,
      a = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
      c = t.cursorTs !== void 0,
      u = t.cursorUserId !== void 0,
      _ = t.cursorAllianceId !== void 0,
      f = t.cursorPixelsCount !== void 0,
      O = c || u || _ || f,
      y = c && u && _ && f;
    let D = !0;
    return O && (D = y && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!r || !o || !a || !e || !D)
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
      a = await this.request(o.length > 0 ? `${r}?${o}` : r, {
        method: "GET",
        credentials: "include"
      });
    if (a.status === i.FORBIDDEN) throw new Error("Access denied");
    if (a.status !== i.OK) throw new Error("Failed to fetch wayback events");
    return a.json()
  }
  async getStoreFrames() {
    const t = await this.request("/store/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
    return t.json()
  }
  async postBuyUserFrame(t) {
    const e = await this.request(`/store/frames/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === i.NOT_FOUND) throw new Error(it());
    if (e.status === i.FORBIDDEN) throw new Error(_t());
    if (e.status === i.CONFLICT) throw new Error(dt());
    if (e.status !== i.OK) throw new Error(s())
  }
  async postEquipCosmetics(t) {
    const e = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== i.OK) throw new l(s(), e.status)
  }
  async getStoreNameCosmetics() {
    const t = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
    return await t.json()
  }
  async postBuyCosmetic(t) {
    const e = await this.request(`/store/name/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(s(), e.status)
  }
  async getMyNameCosmetics() {
    const t = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(s(), t.status);
    return await t.json()
  }
  async getTicketsKpi(t) {
    const e = new URLSearchParams;
    e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
    const r = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(s(), r.status);
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
    if (r.status !== i.OK) throw new l(s(), r.status)
  }
  async postCreateFont(t) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== i.OK) throw new l(s(), e.status)
  }
  async postCreateStyle(t) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== i.OK) throw new l(s(), e.status)
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
    if (r.status !== i.OK) throw new l(s(), r.status);
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
    if (r.status !== i.OK) throw new l(s(), r.status);
    return r.json()
  }
  async deleteR2Image(t) {
    const e = await this.request(`/staff/store-manager/images/${t}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(s(), e.status)
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
  async markRulesAsRead() {
    return (await this.request("/me/rules/read", {
      method: "POST",
      credentials: "include"
    })).status === i.OK
  }
}
pe = new WeakMap, he = new WeakMap;

function Uk(n) {
  var D, q;
  if (!n.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = n[0].season;
  for (const S of n)
    if (S.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (D = je.seasons) == null ? void 0 : D[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const r = e.tileSize;
  let o = Number.POSITIVE_INFINITY,
    a = Number.POSITIVE_INFINITY,
    c = Number.NEGATIVE_INFINITY,
    u = Number.NEGATIVE_INFINITY;
  const _ = n.map(S => {
      const A = Math.round(S.tile[0] * r + S.pixel[0]),
        z = Math.round(S.tile[1] * r + S.pixel[1]);
      return A < o && (o = A), z < a && (a = z), A > c && (c = A), z > u && (u = z), {
        x: A,
        y: z,
        colorIdx: S.colorIdx
      }
    }),
    f = c - o + 1,
    O = u - a + 1;
  if (!Number.isFinite(f) || !Number.isFinite(O) || f <= 0 || O <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const y = new Uint8ClampedArray(f * O * 4);
  for (const {
      x: S,
      y: A,
      colorIdx: z
    }
    of _) {
    const Je = (q = je.colors) == null ? void 0 : q[z];
    if (!Je) throw new Error(`Unknown palette color index: ${z}`);
    const Nt = S - o,
      Ne = ((A - a) * f + Nt) * 4,
      [zt, At, Rt] = Je.rgb;
    y[Ne] = zt, y[Ne + 1] = At, y[Ne + 2] = Rt, y[Ne + 3] = z === 0 ? 1 : 255
  }
  return {
    data: y,
    width: f,
    height: O,
    offsetX: o,
    offsetY: a,
    season: t
  }
}
async function Mk(n) {
  const t = Bk(n.width, n.height),
    e = t.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const r = e.createImageData(n.width, n.height);
  return r.data.set(n.data), e.putImageData(r, 0, 0), "convertToBlob" in t ? t.convertToBlob({
    type: "image/png"
  }) : new Promise((o, a) => {
    t.toBlob(c => {
      if (!c) {
        a(new Error("Failed to encode auto painter bitmap."));
        return
      }
      o(c)
    }, "image/png")
  })
}

function Bk(n, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = n, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let C = new Lk(We);
typeof window < "u" && Lt(() => {
  let n = C.online;
  Ut(() => {
    const t = C.online;
    t && !n && window.dispatchEvent(new CustomEvent("wplace:online")), n = t
  })
});
const CT = n => new URL(n, We).toString();

function Tt(n, t) {
  if (!(n != null && n.length)) return !1;
  for (const e of n)
    if (e === t) return !0;
  return !1
}

function Ck(n, t) {
  for (const e of t)
    if (Tt(n, e)) return !0;
  return !1
}

function Ot(n) {
  const t = atob(n),
    e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
  return e
}

function Kk(n) {
  if (typeof Buffer < "u") return Buffer.from(n).toString("base64");
  let t = "";
  for (let e = 0; e < n.length; e++) t += String.fromCharCode(n[e]);
  return btoa(t)
}
class Fk {
  constructor(t) {
    g(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const r = Math.floor(t / 8),
      o = t % 8;
    if (r >= this.bytes.length) {
      const c = new Uint8Array(r + 1),
        u = c.length - this.bytes.length;
      for (let _ = 0; _ < this.bytes.length; _++) c[_ + u] = this.bytes[_];
      this.bytes = c
    }
    const a = this.bytes.length - 1 - r;
    e ? this.bytes[a] = this.bytes[a] | 1 << o : this.bytes[a] = this.bytes[a] & ~(1 << o)
  }
  get(t) {
    const e = Math.floor(t / 8),
      r = t % 8,
      o = this.bytes.length;
    return e > o ? !1 : (this.bytes[o - 1 - e] & 1 << r) !== 0
  }
}

function KT(n) {
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

function FT(n) {
  if (typeof FileReader > "u") {
    const t = n.type || "application/octet-stream";
    return n.arrayBuffer().then(e => `data:${t};base64,${Kk(new Uint8Array(e))}`)
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

function $T(n) {
  if (!n.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = n.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = n.slice(5, t),
    r = n.slice(t + 1),
    o = e.indexOf(";base64"),
    a = (o === -1 ? e : e.slice(0, o)) || "text/plain";
  if (o !== -1) {
    const c = Ot(r),
      u = new Uint8Array(c.byteLength);
    return u.set(c), new Blob([u], {
      type: a
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: a
  })
}

function GT(...n) {
  return n.filter(Boolean).join(" ")
}
const $k = typeof document < "u";
let gt = 0;
var me, ge, we;
class Gk {
  constructor() {
    b(this, me, I(xe([])));
    b(this, ge, I(xe([])));
    b(this, we, t => {
      const e = this.toasts.findIndex(r => r.id === t);
      return e === -1 ? null : e
    });
    g(this, "addToast", t => {
      $k && this.toasts.unshift(t)
    });
    g(this, "updateToast", ({
      id: t,
      data: e,
      type: r,
      message: o
    }) => {
      const a = this.toasts.findIndex(u => u.id === t),
        c = this.toasts[a];
      this.toasts[a] = {
        ...c,
        ...e,
        id: t,
        title: o,
        type: r,
        updated: !0
      }
    });
    g(this, "create", t => {
      var u;
      const {
        message: e,
        ...r
      } = t, o = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((u = t.id) == null ? void 0 : u.length) > 0 ? t.id : gt++, a = t.dismissable === void 0 ? !0 : t.dismissable, c = t.type === void 0 ? "default" : t.type;
      return Ze(() => {
        this.toasts.find(f => f.id === o) ? this.updateToast({
          id: o,
          data: t,
          type: c,
          message: e,
          dismissable: a
        }) : this.addToast({
          ...r,
          id: o,
          title: e,
          dismissable: a,
          type: c
        })
      }), o
    });
    g(this, "dismiss", t => (Ze(() => {
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
    g(this, "remove", t => {
      if (t === void 0) {
        this.toasts = [];
        return
      }
      const e = p(this, we).call(this, t);
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
      let r;
      e.loading !== void 0 && (r = this.create({
        ...e,
        promise: t,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const o = t instanceof Promise ? t : t();
      let a = r !== void 0;
      return o.then(c => {
        if (typeof c == "object" && c && "ok" in c && typeof c.ok == "boolean" && !c.ok) {
          a = !1;
          const u = Vk(c);
          this.create({
            id: r,
            type: "error",
            message: u
          })
        } else if (e.success !== void 0) {
          a = !1;
          const u = typeof e.success == "function" ? e.success(c) : e.success;
          this.create({
            id: r,
            type: "success",
            message: u
          })
        }
      }).catch(c => {
        if (e.error !== void 0) {
          a = !1;
          const u = typeof e.error == "function" ? e.error(c) : e.error;
          this.create({
            id: r,
            type: "error",
            message: u
          })
        }
      }).finally(() => {
        var c;
        a && (this.dismiss(r), r = void 0), (c = e.finally) == null || c.call(e)
      }), r
    });
    g(this, "custom", (t, e) => {
      const r = (e == null ? void 0 : e.id) || gt++;
      return this.create({
        component: t,
        id: r,
        ...e
      }), r
    });
    g(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    g(this, "setHeight", t => {
      const e = p(this, we).call(this, t.toastId);
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
    return k(p(this, me))
  }
  set toasts(t) {
    T(p(this, me), t, !0)
  }
  get heights() {
    return k(p(this, ge))
  }
  set heights(t) {
    T(p(this, ge), t, !0)
  }
}
me = new WeakMap, ge = new WeakMap, we = new WeakMap;

function Vk(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const R = new Gk;

function Hk(n, t) {
  return R.create({
    message: n,
    ...t
  })
}
var Le;
class VT {
  constructor() {
    b(this, Le, Q(() => R.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return k(p(this, Le))
  }
}
Le = new WeakMap;
const Wk = Hk,
  Yk = Object.assign(Wk, {
    success: R.success,
    info: R.info,
    warning: R.warning,
    error: R.error,
    custom: R.custom,
    message: R.message,
    promise: R.promise,
    dismiss: R.dismiss,
    loading: R.loading,
    getActiveToasts: () => R.toasts.filter(n => !n.dismiss)
  });
var ye, be, ve, Ee, ke, Te, Oe, Ie;
class Jk {
  constructor() {
    g(this, "channel", new BroadcastChannel("user-channel"));
    b(this, ye, I());
    b(this, be, I(!0));
    b(this, ve, I());
    b(this, Ee, I(Date.now()));
    b(this, ke, Q(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((Fe.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    b(this, Te, Q(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    b(this, Oe, Q(() => {
      var t;
      return new Fk(Ot(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    b(this, Ie, Q(() => {
      var r;
      if (!((r = this.data) != null && r.timeoutUntil)) return;
      const t = new Date(this.data.timeoutUntil),
        e = t.getTime();
      if (!(!Number.isFinite(e) || e <= Fe.now)) return t
    }));
    this.channel && (this.channel.onmessage = t => {
      const e = JSON.parse(t.data);
      e.type === "refresh" ? (this.data = e.data, this.lastFetch = Date.now()) : e.type === "logout" && (this.data = void 0)
    })
  }
  get data() {
    return k(p(this, ye))
  }
  set data(t) {
    T(p(this, ye), t, !0)
  }
  get loading() {
    return k(p(this, be))
  }
  set loading(t) {
    T(p(this, be), t, !0)
  }
  get notificationCount() {
    return k(p(this, ve))
  }
  set notificationCount(t) {
    T(p(this, ve), t, !0)
  }
  get lastFetch() {
    return k(p(this, Ee))
  }
  set lastFetch(t) {
    T(p(this, Ee), t)
  }
  get charges() {
    return k(p(this, ke))
  }
  set charges(t) {
    T(p(this, ke), t)
  }
  get cooldown() {
    return k(p(this, Te))
  }
  set cooldown(t) {
    T(p(this, Te), t)
  }
  get flagsBitmap() {
    return k(p(this, Oe))
  }
  set flagsBitmap(t) {
    T(p(this, Oe), t)
  }
  get timeoutUntil() {
    return k(p(this, Ie))
  }
  set timeoutUntil(t) {
    T(p(this, Ie), t)
  }
  async refresh() {
    var t, e;
    try {
      return this.loading = !0, this.data = await C.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && C.getNotificationCount().then(r => {
        this.notificationCount = r
      }).catch(r => {
        console.error("Failed to refresh notification count:", r)
      }), (e = this.data) != null && e.id && X.setUserId(this.data.id), !0
    } catch (r) {
      return console.error(r), Yk.warning(tg(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var t;
    await C.logout(), (t = this.channel) == null || t.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(t) {
    var r;
    return t < 32 ? !0 : ((((r = this.data) == null ? void 0 : r.extraColorsBitmap) ?? 0) & 1 << t - 32) !== 0
  }
  hasPermission(t) {
    var e;
    return Tt((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return Ck((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
ye = new WeakMap, be = new WeakMap, ve = new WeakMap, Ee = new WeakMap, ke = new WeakMap, Te = new WeakMap, Oe = new WeakMap, Ie = new WeakMap;
const V = new Jk;
let w;
const j = new Array(128).fill(void 0);
j.push(void 0, null, !0, !1);

function m(n) {
  return j[n]
}
let ee = j.length;

function E(n) {
  ee === j.length && j.push(j.length + 1);
  const t = ee;
  return ee = j[t], j[t] = n, t
}

function L(n, t) {
  try {
    return n.apply(this, t)
  } catch (e) {
    w.__wbindgen_export_0(E(e))
  }
}

function $(n) {
  return n == null
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
let Z = null;

function Ae() {
  return (Z === null || Z.byteLength === 0) && (Z = new Uint8Array(w.memory.buffer)), Z
}

function Re(n, t) {
  return n = n >>> 0, It.decode(Ae().subarray(n, n + t))
}

function Qk(n) {
  n < 132 || (j[n] = ee, ee = n)
}

function wt(n) {
  const t = m(n);
  return Qk(n), t
}
let G = null;

function Pe() {
  return (G === null || G.buffer.detached === !0 || G.buffer.detached === void 0 && G.buffer !== w.memory.buffer) && (G = new DataView(w.memory.buffer)), G
}
let W = 0;
const De = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  Zk = typeof De.encodeInto == "function" ? function(n, t) {
    return De.encodeInto(n, t)
  } : function(n, t) {
    const e = De.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    }
  };

function Se(n, t, e) {
  if (e === void 0) {
    const u = De.encode(n),
      _ = t(u.length, 1) >>> 0;
    return Ae().subarray(_, _ + u.length).set(u), W = u.length, _
  }
  let r = n.length,
    o = t(r, 1) >>> 0;
  const a = Ae();
  let c = 0;
  for (; c < r; c++) {
    const u = n.charCodeAt(c);
    if (u > 127) break;
    a[o + c] = u
  }
  if (c !== r) {
    c !== 0 && (n = n.slice(c)), o = e(o, r, r = c + n.length * 3, 1) >>> 0;
    const u = Ae().subarray(o + c, o + r),
      _ = Zk(n, u);
    c += _.written, o = e(o, r, c, 1) >>> 0
  }
  return W = c, o
}

function Xk(n) {
  const t = Se(n, w.__wbindgen_export_1, w.__wbindgen_export_2),
    e = W;
  w.set_discord_id(t, e)
}

function eT(n) {
  const t = Se(n, w.__wbindgen_export_1, w.__wbindgen_export_2),
    e = W;
  w.set_fingerprint(t, e)
}

function tT(n) {
  const t = Se(n, w.__wbindgen_export_1, w.__wbindgen_export_2),
    e = W;
  w.set_detected_bot(t, e)
}

function nT(n) {
  let t, e;
  try {
    const a = w.__wbindgen_add_to_stack_pointer(-16),
      c = Se(n, w.__wbindgen_export_1, w.__wbindgen_export_2),
      u = W;
    w.get_pawtected_endpoint_payload(a, c, u);
    var r = Pe().getInt32(a + 0, !0),
      o = Pe().getInt32(a + 4, !0);
    return t = r, e = o, Re(r, o)
  } finally {
    w.__wbindgen_add_to_stack_pointer(16), w.__wbindgen_export_3(t, e, 1)
  }
}

function Be(n) {
  w.set_user_id(n)
}

function rT(n) {
  w.set_cf_likely_automated(n)
}

function oT(n) {
  w.set_automated_clicks(n)
}

function iT(n) {
  const t = Se(n, w.__wbindgen_export_1, w.__wbindgen_export_2),
    e = W;
  w.request_url(t, e)
}

function aT(n) {
  w.set_automated_browser(n)
}
async function sT(n, t) {
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

function uT() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    const e = m(t).buffer;
    return E(e)
  }, n.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return L(function(t, e) {
      const r = m(t).call(m(e));
      return E(r)
    }, arguments)
  }, n.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return L(function(t, e, r) {
      const o = m(t).call(m(e), m(r));
      return E(o)
    }, arguments)
  }, n.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    const e = m(t).crypto;
    return E(e)
  }, n.wbg.__wbg_document_d249400bd7bd996d = function(t) {
    const e = m(t).document;
    return $(e) ? 0 : E(e)
  }, n.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return L(function(t, e) {
      m(t).getRandomValues(m(e))
    }, arguments)
  }, n.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return L(function(t, e) {
      const r = Reflect.get(m(t), m(e));
      return E(r)
    }, arguments)
  }, n.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return L(function(t) {
      return m(t).hasFocus()
    }, arguments)
  }, n.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return L(function(t) {
      const e = m(t).innerWidth;
      return E(e)
    }, arguments)
  }, n.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(t) {
    let e;
    try {
      e = m(t) instanceof Window
    } catch {
      e = !1
    }
    return e
  }, n.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(t) {
    const e = m(t).msCrypto;
    return E(e)
  }, n.wbg.__wbg_navigator_1577371c070c8947 = function(t) {
    const e = m(t).navigator;
    return E(e)
  }, n.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    const e = new Uint8Array(m(t));
    return E(e)
  }, n.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    const r = new Function(Re(t, e));
    return E(r)
  }, n.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, r) {
    const o = new Uint8Array(m(t), e >>> 0, r >>> 0);
    return E(o)
  }, n.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return E(e)
  }, n.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    const e = m(t).node;
    return E(e)
  }, n.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, n.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    const e = m(t).process;
    return E(e)
  }, n.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return L(function(t, e) {
      m(t).randomFillSync(wt(e))
    }, arguments)
  }, n.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return L(function() {
      const t = module.require;
      return E(t)
    }, arguments)
  }, n.wbg.__wbg_set_65595bdd868b3009 = function(t, e, r) {
    m(t).set(m(e), r >>> 0)
  }, n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return $(t) ? 0 : E(t)
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return $(t) ? 0 : E(t)
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return $(t) ? 0 : E(t)
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return $(t) ? 0 : E(t)
  }, n.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, r) {
    const o = m(t).subarray(e >>> 0, r >>> 0);
    return E(o)
  }, n.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    const e = m(t).versions;
    return E(e)
  }, n.wbg.__wbindgen_boolean_get = function(t) {
    const e = m(t);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, n.wbg.__wbindgen_is_function = function(t) {
    return typeof m(t) == "function"
  }, n.wbg.__wbindgen_is_null = function(t) {
    return m(t) === null
  }, n.wbg.__wbindgen_is_object = function(t) {
    const e = m(t);
    return typeof e == "object" && e !== null
  }, n.wbg.__wbindgen_is_string = function(t) {
    return typeof m(t) == "string"
  }, n.wbg.__wbindgen_is_undefined = function(t) {
    return m(t) === void 0
  }, n.wbg.__wbindgen_memory = function() {
    const t = w.memory;
    return E(t)
  }, n.wbg.__wbindgen_number_get = function(t, e) {
    const r = m(e),
      o = typeof r == "number" ? r : void 0;
    Pe().setFloat64(t + 8, $(o) ? 0 : o, !0), Pe().setInt32(t + 0, !$(o), !0)
  }, n.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = m(t);
    return E(e)
  }, n.wbg.__wbindgen_object_drop_ref = function(t) {
    wt(t)
  }, n.wbg.__wbindgen_string_new = function(t, e) {
    const r = Re(t, e);
    return E(r)
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(Re(t, e))
  }, n
}

function cT(n, t) {
  return w = n.exports, St.__wbindgen_wasm_module = t, G = null, Z = null, w
}
async function St(n) {
  if (w !== void 0) return w;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = uT();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: r
  } = await sT(await n, t);
  return cT(e, r)
}
class lT {
  constructor() {
    g(this, "interval");
    g(this, "storagesEmpty", !1);
    g(this, "storages", [new qe, new Ve, new He, new _T]);
    g(this, "pawtectLoaded");
    g(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!V.data || this.storagesEmpty || localStorage.getItem(qe.KEY))) {
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
    const e = B.day;
    for (const o of this.storages) {
      const a = o.get();
      if (a && !(a.timestamp + e < Date.now()) && a.userId !== t) return !0
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
        await St(Mt), (t = V.data) != null && t.id && Be(V.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: dT((r, o) => {
            let a = null;
            return r instanceof Request ? a = r.url : r instanceof URL ? a = r.href : typeof r == "string" && (a = r), a !== null && !a.startsWith("/") && iT(a), e.call(window, r, o)
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
    await this.loadPawtect(), rT(t)
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
    if (!await this.loadPawtect()) throw new Error(nv());
    const r = navigator.webdriver,
      [o, a] = await Promise.all([Ce(), Ln().catch(c => (console.error(c), {
        bot: !1
      }))]);
    return Be(V.data.id), Xk(V.data.discordId ?? ""), eT(o), aT(r), oT(Fe.automatedClicks), a.bot && tT(a.botKind ?? "unknown"), nT(t)
  }
}

function dT(n) {
  return n.bind().bind()
}
const U = class U {
  static codec(t) {
    const e = new TextEncoder().encode(this.XOR_KEY),
      r = new Uint8Array(t.length);
    for (let o = 0; o < t.length; o++) r[o] = t[o] ^ e[o % e.length];
    return r
  }
  get() {
    try {
      const t = localStorage.getItem(U.KEY);
      if (!t) return;
      const e = Uint8Array.from(atob(t), o => o.charCodeAt(0)),
        r = new TextDecoder().decode(U.codec(e));
      return JSON.parse(r)
    } catch {
      return
    }
  }
  set(t) {
    const e = new TextEncoder().encode(JSON.stringify(t)),
      r = U.codec(e);
    localStorage.setItem(U.KEY, btoa(String.fromCharCode(...r)))
  }
};
g(U, "KEY", "ui_layout_v3"), g(U, "XOR_KEY", "wplace-prefs");
let qe = U;
const M = class M {
  get() {
    try {
      const t = sessionStorage.getItem(M.KEY);
      if (!t) return;
      let e = "";
      for (let r = 0; r < t.length; r += 4) {
        const o = parseInt(t.slice(r, r + 4), 16);
        e += String.fromCharCode(o - M.SHIFT & 65535)
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
      const a = o.charCodeAt(0) + M.SHIFT & 65535;
      r += a.toString(16).padStart(4, "0")
    }
    sessionStorage.setItem(M.KEY, r)
  }
};
g(M, "KEY", "nav.cursor"), g(M, "SHIFT", 13);
let Ve = M;
const H = class H {
  get() {
    const t = document.cookie.match(new RegExp("(?:^|; )" + H.KEY + "=([^;]*)"));
    if (t) try {
      const [e, r] = decodeURIComponent(t[1]).split("."), o = parseInt(e, 36), a = parseInt(r, 36);
      return !Number.isFinite(o) || !Number.isFinite(a) ? void 0 : {
        userId: o,
        timestamp: a
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
let He = H;
class _T {
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
const X = new lT;
export {
  Dk as $, kT as A, ET as B, ht as C, $e as D, TT as E, ak as F, Ge as G, jk as H, qT as I, R as J, GT as K, VT as L, OT as M, vT as N, N as O, xT as P, yT as Q, wT as R, PT as S, B as T, bT as U, Mn as V, MT as W, xk as X, kt as Y, UT as Z, Ps as _, ST as a, FT as a0, $T as a1, IT as a2, RT as a3, DT as a4, nv as a5, ib as a6, CT as a7, NT as a8, AT as a9, BT as aa, LT as ab, Jf as ac, C as b, jT as c, je as d, s as e, La as f, Fe as g, ic as h, Tf as i, yo as j, xu as k, X as l, bt as m, tg as n, Me as o, KT as p, Vu as q, Lf as r, zT as s, Yk as t, V as u, tt as v, wc as w, Ja as x, Do as y, mm as z
};