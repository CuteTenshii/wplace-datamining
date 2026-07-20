var Dt = Object.defineProperty;
var Ye = r => {
  throw TypeError(r)
};
var Pt = (r, t, e) => t in r ? Dt(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var g = (r, t, e) => Pt(r, typeof t != "symbol" ? t + "" : t, e),
  xt = (r, t, e) => t.has(r) || Ye("Cannot " + e);
var p = (r, t, e) => (xt(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  b = (r, t, e) => t.has(r) ? Ye("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e);
import {
  h as Ut,
  P as _t,
  g as Ge,
  j as jt
} from "./DzBCW1Dp.js";
import {
  e as I,
  i as T,
  h as O,
  g as xe,
  bL as Lt,
  y as Mt,
  B as Je,
  u as Q
} from "./BKnGt6Ki.js";
import {
  g as d
} from "./BhCkpOlh.js";
const Bt = "" + new URL("../assets/pawtect_wasm_bg.8VPqYlMZ.wasm", import.meta.url).href;
var qt = "2.0.0";
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

function Ct(r, t) {
  const e = {};
  let n = {
    bot: !1
  };
  for (const s in t) {
    const i = t[s],
      u = i(r);
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
async function zt(r) {
  const t = {},
    e = Object.keys(r);
  return await Promise.all(e.map(async n => {
    const s = r[n];
    try {
      t[n] = {
        value: await s(),
        state: 0
      }
    } catch (i) {
      i instanceof v ? t[n] = {
        state: i.state,
        error: `${i.name}: ${i.message}`
      } : t[n] = {
        state: -3,
        error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
      }
    }
  })), t
}

function Kt({
  appVersion: r
}) {
  if (r.state !== 0) return !1;
  if (/headless/i.test(r.value)) return h.HeadlessChrome;
  if (/electron/i.test(r.value)) return h.Electron;
  if (/slimerjs/i.test(r.value)) return h.SlimerJS
}

function Ae(r, t) {
  return r.indexOf(t) !== -1
}

function x(r, t) {
  return r.indexOf(t) !== -1
}

function Ft(r, t) {
  if ("find" in r) return r.find(t);
  for (let e = 0; e < r.length; e++)
    if (t(r[e], e, r)) return r[e]
}

function Qe(r) {
  return Object.getOwnPropertyNames(r)
}

function Ce(r, ...t) {
  for (const e of t)
    if (typeof e == "string") {
      if (Ae(r, e)) return !0
    } else if (Ft(r, s => e.test(s)) != null) return !0;
  return !1
}

function Y(r) {
  return r.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function $t({
  documentElementKeys: r
}) {
  if (r.state !== 0) return !1;
  if (Ce(r.value, "selenium", "webdriver", "driver")) return h.Selenium
}

function Gt({
  errorTrace: r
}) {
  if (r.state !== 0) return !1;
  if (/PhantomJS/i.test(r.value)) return h.PhantomJS
}

function Vt({
  evalLength: r,
  browserKind: t,
  browserEngineKind: e
}) {
  if (r.state !== 0 || t.state !== 0 || e.state !== 0) return;
  const n = r.value;
  return e.value === "unknown" ? !1 : n === 37 && !Ae(["webkit", "gecko"], e.value) || n === 39 && !Ae(["internet_explorer"], t.value) || n === 33 && !Ae(["chromium"], e.value)
}

function Ht({
  functionBind: r
}) {
  if (r.state === -2) return h.PhantomJS
}

function Wt({
  languages: r
}) {
  if (r.state === 0 && r.value.length === 0) return h.HeadlessChrome
}

function Yt({
  mimeTypesConsistent: r
}) {
  if (r.state === 0 && !r.value) return h.Unknown
}

function Jt({
  notificationPermissions: r,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== "chrome") return !1;
  if (r.state === 0 && r.value) return h.HeadlessChrome
}

function Qt({
  pluginsArray: r
}) {
  if (r.state === 0 && !r.value) return h.HeadlessChrome
}

function Xt({
  pluginsLength: r,
  android: t,
  browserKind: e,
  browserEngineKind: n
}) {
  if (!(r.state !== 0 || t.state !== 0 || e.state !== 0 || n.state !== 0) && !(e.value !== "chrome" || t.value || n.value !== "chromium") && r.value === 0) return h.HeadlessChrome
}

function Zt({
  process: r
}) {
  var t;
  if (r.state !== 0) return !1;
  if (r.value.type === "renderer" || ((t = r.value.versions) === null || t === void 0 ? void 0 : t.electron) != null) return h.Electron
}

function er({
  productSub: r,
  browserKind: t
}) {
  if (r.state !== 0 || t.state !== 0) return !1;
  if ((t.value === "chrome" || t.value === "safari" || t.value === "opera" || t.value === "wechat") && r.value !== "20030107") return h.Unknown
}

function tr({
  userAgent: r
}) {
  if (r.state !== 0) return !1;
  if (/PhantomJS/i.test(r.value)) return h.PhantomJS;
  if (/Headless/i.test(r.value)) return h.HeadlessChrome;
  if (/Electron/i.test(r.value)) return h.Electron;
  if (/slimerjs/i.test(r.value)) return h.SlimerJS
}

function rr({
  webDriver: r
}) {
  if (r.state === 0 && r.value) return h.HeadlessChrome
}

function nr({
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

function sr({
  windowExternal: r
}) {
  if (r.state !== 0) return !1;
  if (/Sequentum/i.test(r.value)) return h.Sequentum
}

function ar({
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
const or = {
  detectAppVersion: Kt,
  detectDocumentAttributes: $t,
  detectErrorTrace: Gt,
  detectEvalLengthInconsistency: Vt,
  detectFunctionBind: Ht,
  detectLanguagesLengthInconsistency: Wt,
  detectNotificationPermissions: Jt,
  detectPluginsArray: Qt,
  detectPluginsLengthInconsistency: Xt,
  detectProcess: Zt,
  detectUserAgent: tr,
  detectWebDriver: rr,
  detectWebGL: nr,
  detectWindowExternal: sr,
  detectWindowSize: ar,
  detectMimeTypesConsistent: Yt,
  detectProductSub: er,
  detectDistinctiveProperties: ir
};

function cr() {
  const r = navigator.appVersion;
  if (r == null) throw new v(-1, "navigator.appVersion is undefined");
  return r
}

function ur() {
  if (document.documentElement === void 0) throw new v(-1, "document.documentElement is undefined");
  const {
    documentElement: r
  } = document;
  if (typeof r.getAttributeNames != "function") throw new v(-2, "document.documentElement.getAttributeNames is not a function");
  return r.getAttributeNames()
}

function lr() {
  try {
    null[0]()
  } catch (r) {
    if (r instanceof Error && r.stack != null) return r.stack.toString()
  }
  throw new v(-3, "errorTrace signal unexpected behaviour")
}

function dr() {
  return eval.toString().length
}

function _r() {
  if (Function.prototype.bind === void 0) throw new v(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function Ve() {
  var r, t;
  const e = window,
    n = navigator;
  return Y(["webkitPersistentStorage" in n, "webkitTemporaryStorage" in n, n.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : Y(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, n.vendor.indexOf("Apple") === 0, "getStorageUpdates" in n, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : Y(["buildID" in navigator, "MozAppearance" in ((t = (r = document.documentElement) === null || r === void 0 ? void 0 : r.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function fr() {
  var r;
  const t = (r = navigator.userAgent) === null || r === void 0 ? void 0 : r.toLowerCase();
  return x(t, "edg/") ? "edge" : x(t, "trident") || x(t, "msie") ? "internet_explorer" : x(t, "wechat") ? "wechat" : x(t, "firefox") ? "firefox" : x(t, "opera") || x(t, "opr") ? "opera" : x(t, "chrome") ? "chrome" : x(t, "safari") ? "safari" : "unknown"
}

function pr() {
  const r = Ve(),
    t = r === "chromium",
    e = r === "gecko",
    n = window,
    s = navigator,
    i = "connection";
  return t ? Y([!("SharedWorker" in n), s[i] && "ontypechange" in s[i], !("sinkId" in new Audio)]) >= 2 : e ? Y(["onorientationchange" in n, "orientation" in n, /android/i.test(s.appVersion)]) >= 2 : !1
}

function hr() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function mr() {
  const r = window;
  return Y([!("MediaSettingsRange" in r), "RTCEncodedAudioFrame" in r, "" + r.Intl == "[object Intl]", "" + r.Reflect == "[object Reflect]"]) >= 3
}

function gr() {
  const r = navigator,
    t = [],
    e = r.language || r.userLanguage || r.browserLanguage || r.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(r.languages)) Ve() === "chromium" && mr() || t.push(r.languages);
  else if (typeof r.languages == "string") {
    const n = r.languages;
    n && t.push(n.split(","))
  }
  return t
}

function wr() {
  if (navigator.mimeTypes === void 0) throw new v(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: r
  } = navigator;
  let t = Object.getPrototypeOf(r) === MimeTypeArray.prototype;
  for (let e = 0; e < r.length; e++) t && (t = Object.getPrototypeOf(r[e]) === MimeType.prototype);
  return t
}
async function yr() {
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

function br() {
  if (navigator.plugins === void 0) throw new v(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new v(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function vr() {
  if (navigator.plugins === void 0) throw new v(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new v(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function Er() {
  const {
    process: r
  } = window, t = "window.process is";
  if (r === void 0) throw new v(-1, `${t} undefined`);
  if (r && typeof r != "object") throw new v(-3, `${t} not an object`);
  return r
}

function Tr() {
  const {
    productSub: r
  } = navigator;
  if (r === void 0) throw new v(-1, "navigator.productSub is undefined");
  return r
}

function Or() {
  if (navigator.connection === void 0) throw new v(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new v(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function kr() {
  return navigator.userAgent
}

function Ir() {
  if (navigator.webdriver == null) throw new v(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function Nr() {
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

function Sr() {
  if (window.external === void 0) throw new v(-1, "window.external is undefined");
  const {
    external: r
  } = window;
  if (typeof r.toString != "function") throw new v(-2, "window.external.toString is not a function");
  return r.toString()
}

function Ar() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function Rr() {
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
    n = Qe(window);
  let s = [];
  window.document !== void 0 && (s = Qe(window.document));
  for (t in r) {
    const i = r[t];
    if (i !== void 0) {
      const u = i.window === void 0 ? !1 : Ce(n, ...i.window),
        c = i.document === void 0 || !s.length ? !1 : Ce(s, ...i.document);
      e[t] = u || c
    }
  }
  return e
}
const Dr = {
  android: pr,
  browserKind: fr,
  browserEngineKind: Ve,
  documentFocus: hr,
  userAgent: kr,
  appVersion: cr,
  rtt: Or,
  windowSize: Ar,
  pluginsLength: vr,
  pluginsArray: br,
  errorTrace: lr,
  productSub: Tr,
  windowExternal: Sr,
  mimeTypesConsistent: wr,
  evalLength: dr,
  webGL: Nr,
  webDriver: Ir,
  languages: gr,
  notificationPermissions: yr,
  documentElementKeys: ur,
  functionBind: _r,
  process: Er,
  distinctiveProps: Rr
};
class Pr {
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
    const [t, e] = Ct(this.components, or);
    return this.detections = t, e
  }
  async collect() {
    return this.components = await zt(Dr), this.components
  }
}

function xr() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const r = new XMLHttpRequest;
    r.open("get", `https://m1.openfpcdn.io/botd/v${qt}/npm-monitoring`, !0), r.send()
  } catch (r) {
    console.error(r)
  }
}
async function Ur({
  monitoring: r = !0
} = {}) {
  r && xr();
  const t = new Pr;
  return await t.collect(), t
}
let Be = null;
async function jr() {
  return await Lr() ? {
    bot: !1
  } : (await Mr()).detect()
}
async function Lr() {
  var e;
  const r = navigator;
  if (!((e = r.brave) != null && e.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(r.userAgent)) return !1;
  try {
    return await r.brave.isBrave()
  } catch {
    return !1
  }
}

function Mr() {
  return Be || (Be = Ur({
    monitoring: !1
  })), Be
}
const Xe = "theme";
var te, re, ne, se, ae, ie, oe, ce, ue, le, de;
class Br {
  constructor() {
    b(this, te, I(!1));
    b(this, re, I(!1));
    b(this, ne, I(!1));
    b(this, se, I(0));
    b(this, ae, I(!1));
    b(this, ie, I(xe(qr())));
    b(this, oe, I(null));
    b(this, ce, I(!1));
    b(this, ue, I("custom-winter"));
    b(this, le, I(xe(Date.now())));
    b(this, de, I(void 0));
    setInterval(() => {
      O(p(this, le), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(Xe), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return T(p(this, te))
  }
  set dropletsDialogOpen(t) {
    O(p(this, te), t, !0)
  }
  get pendingHistoryDialogOpen() {
    return T(p(this, re))
  }
  set pendingHistoryDialogOpen(t) {
    O(p(this, re), t, !0)
  }
  get storeDialogOpen() {
    return T(p(this, ne))
  }
  set storeDialogOpen(t) {
    O(p(this, ne), t, !0)
  }
  get storeTabIndex() {
    return T(p(this, se))
  }
  set storeTabIndex(t) {
    O(p(this, se), t, !0)
  }
  get muted() {
    return T(p(this, ae))
  }
  set muted(t) {
    O(p(this, ae), t, !0)
  }
  get language() {
    return T(p(this, ie))
  }
  set language(t) {
    O(p(this, ie), t, !0)
  }
  get map() {
    return T(p(this, oe))
  }
  set map(t) {
    O(p(this, oe), t)
  }
  get automatedClicks() {
    return T(p(this, ce))
  }
  set automatedClicks(t) {
    O(p(this, ce), t, !0)
  }
  get theme() {
    return T(p(this, ue))
  }
  set theme(t) {
    O(p(this, ue), t, !0), localStorage.setItem(Xe, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return T(p(this, le))
  }
  get captcha() {
    return Cr ? T(p(this, de)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    O(p(this, de), t, !0)
  }
}
te = new WeakMap, re = new WeakMap, ne = new WeakMap, se = new WeakMap, ae = new WeakMap, ie = new WeakMap, oe = new WeakMap, ce = new WeakMap, ue = new WeakMap, le = new WeakMap, de = new WeakMap;
const ze = new Br;

function qr() {
  if (navigator.languages && navigator.languages.length > 0) {
    const r = navigator.languages.find(t => t.length === 2);
    if (r) return r
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const Cr = Ut.toLowerCase() !== "false",
  zr = `
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
async function Kr() {
  try {
    const r = await fetch(`${_t}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!r.ok) return null;
    const t = await r.json(),
      e = await Fr(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function Fr(r, t) {
  return new Promise(e => {
    const n = new Blob([zr], {
        type: "application/javascript"
      }),
      s = URL.createObjectURL(n),
      i = new Worker(s),
      u = setTimeout(() => {
        i.terminate(), URL.revokeObjectURL(s), e(null)
      }, 12e4);
    i.onmessage = c => {
      clearTimeout(u), i.terminate(), URL.revokeObjectURL(s), c.data.error ? e(null) : e(c.data.nonce)
    }, i.onerror = () => {
      clearTimeout(u), i.terminate(), URL.revokeObjectURL(s), e(null)
    }, i.postMessage({
      prefix: r,
      difficulty: t
    })
  })
}
const ft = 3;
var _e, fe;
class $r {
  constructor() {
    b(this, _e, I(null));
    b(this, fe, I(0))
  }
  get current() {
    return T(p(this, _e))
  }
  set current(t) {
    O(p(this, _e), t, !0)
  }
  get errorCount() {
    return T(p(this, fe))
  }
  set errorCount(t) {
    O(p(this, fe), t, !0)
  }
}
_e = new WeakMap, fe = new WeakMap;
const S = new $r;
async function pt(r) {
  if (r === 1) return Gr();
  if (r === 2) {
    const t = await ht();
    return t ? Ze("turnstile", t) : !1
  }
  if (r === 3) {
    const t = await Vr();
    return t ? Ze("hcaptcha", t) : !1
  }
  return r === 4 ? Hr() : !1
}
async function Gr() {
  for (let r = 0; r < ft; r++) try {
    const t = await Kr();
    if (!t) continue;
    return await z.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}
async function Ze(r, t) {
  try {
    const e = await z.postCaptchaSession({
      provider: r,
      token: t
    });
    return await z.verifyChallenge({
      type: "captcha",
      sessionId: e.sessionId
    }), !0
  } catch {
    return !1
  }
}
const J = {};

function ht() {
  return mt(2)
}

function Vr() {
  return mt(3)
}

function mt(r) {
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

function Hr() {
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

function qb(r) {
  const t = S.current;
  !t || t.tier === 4 || (t.resolve(r), S.current = null)
}

function Cb() {
  const r = S.current;
  !r || r.tier === 4 || (S.errorCount += 1, S.errorCount >= ft && (r.resolve(void 0), S.current = null))
}

function zb() {
  const r = S.current;
  !r || r.tier !== 4 || (r.resolve(!0), S.current = null)
}

function Kb() {
  const r = S.current;
  r && (r.tier === 4 ? r.resolve(!1) : r.resolve(void 0), S.current = null)
}
var a = (r => (r[r.CONTINUE = 100] = "CONTINUE", r[r.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", r[r.PROCESSING = 102] = "PROCESSING", r[r.EARLY_HINTS = 103] = "EARLY_HINTS", r[r.OK = 200] = "OK", r[r.CREATED = 201] = "CREATED", r[r.ACCEPTED = 202] = "ACCEPTED", r[r.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", r[r.NO_CONTENT = 204] = "NO_CONTENT", r[r.RESET_CONTENT = 205] = "RESET_CONTENT", r[r.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", r[r.MULTI_STATUS = 207] = "MULTI_STATUS", r[r.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", r[r.IM_USED = 226] = "IM_USED", r[r.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", r[r.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", r[r.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", r[r.FOUND = 302] = "FOUND", r[r.SEE_OTHER = 303] = "SEE_OTHER", r[r.NOT_MODIFIED = 304] = "NOT_MODIFIED", r[r.USE_PROXY = 305] = "USE_PROXY", r[r.SWITCH_PROXY = 306] = "SWITCH_PROXY", r[r.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", r[r.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", r[r.BAD_REQUEST = 400] = "BAD_REQUEST", r[r.UNAUTHORIZED = 401] = "UNAUTHORIZED", r[r.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", r[r.FORBIDDEN = 403] = "FORBIDDEN", r[r.NOT_FOUND = 404] = "NOT_FOUND", r[r.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", r[r.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", r[r.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", r[r.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", r[r.CONFLICT = 409] = "CONFLICT", r[r.GONE = 410] = "GONE", r[r.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", r[r.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", r[r.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", r[r.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", r[r.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", r[r.URI_TOO_LONG = 414] = "URI_TOO_LONG", r[r.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", r[r.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", r[r.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", r[r.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", r[r.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", r[r.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", r[r.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", r[r.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", r[r.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", r[r.LOCKED = 423] = "LOCKED", r[r.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", r[r.TOO_EARLY = 425] = "TOO_EARLY", r[r.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", r[r.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", r[r.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", r[r.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", r[r.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", r[r.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", r[r.BAD_GATEWAY = 502] = "BAD_GATEWAY", r[r.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", r[r.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", r[r.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", r[r.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", r[r.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", r[r.LOOP_DETECTED = 508] = "LOOP_DETECTED", r[r.NOT_EXTENDED = 510] = "NOT_EXTENDED", r[r.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", r[r.AWS_ELB_000 = 0] = "AWS_ELB_000", r[r.THIS_IS_FINE = 218] = "THIS_IS_FINE", r[r.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", r[r.METHOD_FAILURE = 420] = "METHOD_FAILURE", r[r.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", r[r.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", r[r.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", r[r.NO_RESPONSE = 444] = "NO_RESPONSE", r[r.RETRY_WITH = 449] = "RETRY_WITH", r[r.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", r[r.REDIRECT_IIS = 451] = "REDIRECT_IIS", r[r.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", r[r.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", r[r.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", r[r.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", r[r.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", r[r.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", r[r.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", r[r.INVALID_TOKEN = 498] = "INVALID_TOKEN", r[r.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", r[r.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", r[r.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", r[r.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", r[r.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", r[r.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", r[r.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", r[r.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", r[r.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", r[r.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", r[r.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", r[r.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", r[r.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", r[r.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", r[r.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", r[r.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", r[r.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", r[r.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", r[r.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", r[r.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", r[r.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", r[r.REQUEST_DENIED = 999] = "REQUEST_DENIED", r))(a || {});
const Wr = () => "A punishment cache reload is already running",
  Yr = () => "Um recarregamento do cache de punições já está em andamento",
  Jr = () => "处罚缓存重新加载已在进行中",
  Qr = () => "Ein Neuladen des Strafen-Caches läuft bereits",
  Xr = () => "Ya hay una recarga de la caché de sanciones en curso",
  Zr = () => "Un rechargement du cache des sanctions est déjà en cours",
  en = () => "Un ricaricamento della cache delle sanzioni è già in corso",
  tn = () => "処罰キャッシュの再読み込みは既に実行中です",
  rn = () => "Przeładowanie pamięci kar już trwa",
  nn = () => "Перезагрузка кэша наказаний уже выполняется",
  sn = () => "Перезавантаження кешу покарань уже виконується",
  an = () => "Quá trình tải lại bộ nhớ đệm hình phạt đang chạy",
  on = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Wr() : e === "pt" ? Yr() : e === "ch" ? Jr() : e === "de" ? Qr() : e === "es" ? Xr() : e === "fr" ? Zr() : e === "it" ? en() : e === "jp" ? tn() : e === "pl" ? rn() : e === "ru" ? nn() : e === "uk" ? sn() : an()
  },
  cn = () => "Your account has been suspended for breaking the rules",
  un = () => "Sua conta foi suspensa por quebrar as regras",
  ln = () => "您的账号因违反规则已被暂停",
  dn = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  _n = () => "Tu cuenta ha sido suspendida por infringir las regras",
  fn = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  pn = () => "Il tuo account è stato sospeso per aver infranto le regole",
  hn = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  mn = () => "Twoje konto zostało zawieszone za łamanie zasad",
  gn = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  wn = () => "Ваш обліковий запис було призупинено за порушення правил",
  yn = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  et = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? cn() : e === "pt" ? un() : e === "ch" ? ln() : e === "de" ? dn() : e === "es" ? _n() : e === "fr" ? fn() : e === "it" ? pn() : e === "jp" ? hn() : e === "pl" ? mn() : e === "ru" ? gn() : e === "uk" ? wn() : yn()
  },
  bn = () => "Alliance name already taken",
  vn = () => "Já possui uma aliança com esse nome",
  En = () => "该联盟名称已被占用",
  Tn = () => "Der Allianzname ist bereits vergeben",
  On = () => "Ese nombre de alianza ya está en uso",
  kn = () => "Ce nom d’alliance est déjà pris",
  In = () => "Esiste già un'alleanza con questo nome",
  Nn = () => "このアライアンス名は既に使用されています。",
  Sn = () => "Nazwa sojuszu jest już zajęta",
  An = () => "Такое название альянса уже используется",
  Rn = () => "Назва альянсу вже зайнята",
  Dn = () => "Tên liên minh đã được sử dụng",
  Pn = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? bn() : e === "pt" ? vn() : e === "ch" ? En() : e === "de" ? Tn() : e === "es" ? On() : e === "fr" ? kn() : e === "it" ? In() : e === "jp" ? Nn() : e === "pl" ? Sn() : e === "ru" ? An() : e === "uk" ? Rn() : Dn()
  },
  xn = () => "Alliance name exceeded the maximum number of characters",
  Un = () => "O nome da aliança excedeu o número máximo de caracteres",
  jn = () => "联盟名称超过最大字符数限制",
  Ln = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  Mn = () => "El nombre de la alianza superó el número máximo de caracteres",
  Bn = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  qn = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  Cn = () => "アライアンス名が最大文字数を超えています。",
  zn = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  Kn = () => "Название альянса превышает максимальную длину",
  Fn = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  $n = () => "Tên liên minh vượt quá số ký tự cho phép",
  Gn = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? xn() : e === "pt" ? Un() : e === "ch" ? jn() : e === "de" ? Ln() : e === "es" ? Mn() : e === "fr" ? Bn() : e === "it" ? qn() : e === "jp" ? Cn() : e === "pl" ? zn() : e === "ru" ? Kn() : e === "uk" ? Fn() : $n()
  },
  Vn = () => "Alliance with empty name",
  Hn = () => "Aliança com nome vazio",
  Wn = () => "名称为空的联盟",
  Yn = () => "Allianz mit leerem Namen",
  Jn = () => "Alianza con nombre vacío",
  Qn = () => "Alliance avec nom vide",
  Xn = () => "Alleanza con nome vuoto",
  Zn = () => "名前が空のアライアンスです。",
  es = () => "Sojusz z pustą nazwą",
  ts = () => "Альянс с пустым названием",
  rs = () => "Альянс із порожньою назвою",
  ns = () => "Liên minh không có tên",
  ss = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Vn() : e === "pt" ? Hn() : e === "ch" ? Wn() : e === "de" ? Yn() : e === "es" ? Jn() : e === "fr" ? Qn() : e === "it" ? Xn() : e === "jp" ? Zn() : e === "pl" ? es() : e === "ru" ? ts() : e === "uk" ? rs() : ns()
  },
  as = () => "Botting",
  is = () => "Uso de bots",
  os = () => "脚本",
  cs = () => "Bot-Nutzung",
  us = () => "Botting",
  ls = () => "Bots",
  ds = () => "Uso di bot",
  _s = () => "ボット使用",
  fs = () => "Botting",
  ps = () => "Боттинг",
  hs = () => "Боти",
  ms = () => "Botting",
  gs = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? as() : e === "pt" ? is() : e === "ch" ? os() : e === "de" ? cs() : e === "es" ? us() : e === "fr" ? ls() : e === "it" ? ds() : e === "jp" ? _s() : e === "pl" ? fs() : e === "ru" ? ps() : e === "uk" ? hs() : ms()
  },
  ws = () => "Use of software to completely automate painting",
  ys = () => "Uso de software para pintar de forma completamente automatizada ",
  bs = () => "使用软件完全自动化绘制",
  vs = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  Es = () => "Uso de software para automatizar completamente la pintura",
  Ts = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  Os = () => "Uso di software per dipingere in modo completamente automatizzato",
  ks = () => "ペイントを完全に自動化するソフトウェアの使用",
  Is = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  Ns = () => "Использование программ для полной автоматизации рисования",
  Ss = () => "Використання програм, які повністю автоматизують малювання",
  As = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  Rs = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ws() : e === "pt" ? ys() : e === "ch" ? bs() : e === "de" ? vs() : e === "es" ? Es() : e === "fr" ? Ts() : e === "it" ? Os() : e === "jp" ? ks() : e === "pl" ? Is() : e === "ru" ? Ns() : e === "uk" ? Ss() : As()
  },
  Ds = () => "Breaking the rules",
  Ps = () => "Quebrar as regras",
  xs = () => "违反规则",
  Us = () => "Regeln brechen",
  js = () => "Romper las reglas",
  Ls = () => "Violation des règles",
  Ms = () => "Violazione delle regole",
  Bs = () => "ルール違反",
  qs = () => "Łamanie zasad",
  Cs = () => "Нарушение правил",
  zs = () => "Порушення правил",
  Ks = () => "Vi phạm luật",
  Fs = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ds() : e === "pt" ? Ps() : e === "ch" ? xs() : e === "de" ? Us() : e === "es" ? js() : e === "fr" ? Ls() : e === "it" ? Ms() : e === "jp" ? Bs() : e === "pl" ? qs() : e === "ru" ? Cs() : e === "uk" ? zs() : Ks()
  },
  $s = () => "You have broken one of Wplace's rules",
  Gs = () => "Você quebrou uma das regras do Wplace",
  Vs = () => "你违反了 Wplace 的一项规则",
  Hs = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  Ws = () => "Has infringido una de las reglas de Wplace",
  Ys = () => "Vous avez enfreint l’une des règles de Wplace",
  Js = () => "Hai infranto una delle regole di Wplace",
  Qs = () => "Wplaceのルールのいずれかに違反しました。",
  Xs = () => "Złamałeś jedną z zasad Wplace",
  Zs = () => "Вы нарушили одно из правил Wplace",
  ea = () => "Ви порушили одне з правил Wplace",
  ta = () => "Bạn đã vi phạm một trong các luật của Wplace",
  ra = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? $s() : e === "pt" ? Gs() : e === "ch" ? Vs() : e === "de" ? Hs() : e === "es" ? Ws() : e === "fr" ? Ys() : e === "it" ? Js() : e === "jp" ? Qs() : e === "pl" ? Xs() : e === "ru" ? Zs() : e === "uk" ? ea() : ta()
  },
  na = () => "You cannot paint over event pixels",
  sa = () => "Você não pode pintar sobre pixels de eventos",
  aa = () => "你不能覆盖活动像素",
  ia = () => "Du kannst nicht über Event-Pixel malen",
  oa = () => "No puedes pintar sobre píxeles de evento",
  ca = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  ua = () => "Non puoi dipingere sopra i pixel dell'evento",
  la = () => "イベント用のピクセルの上には塗れません。",
  da = () => "Nie możesz malować po pikselach wydarzenia",
  _a = () => "Вы не можете рисовать по пикселям события",
  fa = () => "Ви не можете малювати поверх пікселів події",
  pa = () => "Bạn không thể tô lên pixel sự kiện",
  tt = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? na() : e === "pt" ? sa() : e === "ch" ? aa() : e === "de" ? ia() : e === "es" ? oa() : e === "fr" ? ca() : e === "it" ? ua() : e === "jp" ? la() : e === "pl" ? da() : e === "ru" ? _a() : e === "uk" ? fa() : pa()
  },
  ha = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  ma = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  ga = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  wa = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  ya = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  ba = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  va = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Ea = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Ta = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Oa = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  ka = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Ia = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Na = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ha() : e === "pt" ? ma() : e === "ch" ? ga() : e === "de" ? wa() : e === "es" ? ya() : e === "fr" ? ba() : e === "it" ? va() : e === "jp" ? Ea() : e === "pl" ? Ta() : e === "ru" ? Oa() : e === "uk" ? ka() : Ia()
  },
  Sa = () => "Challenge verification not completed",
  Aa = () => "Verificação do desafio não concluída",
  Ra = () => "挑战验证未完成",
  Da = () => "Herausforderungsverifizierung nicht abgeschlossen",
  Pa = () => "Verificación del desafío no completada",
  xa = () => "Vérification du défi non terminée",
  Ua = () => "Verifica della sfida non completata",
  ja = () => "チャレンジ検証が完了していません",
  La = () => "Weryfikacja wyzwania niezakończona",
  Ma = () => "Верификация вызова не завершена",
  Ba = () => "Перевірку виклику не завершено",
  qa = () => "Xác minh thử thách chưa hoàn thành",
  He = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Sa() : e === "pt" ? Aa() : e === "ch" ? Ra() : e === "de" ? Da() : e === "es" ? Pa() : e === "fr" ? xa() : e === "it" ? Ua() : e === "jp" ? ja() : e === "pl" ? La() : e === "ru" ? Ma() : e === "uk" ? Ba() : qa()
  },
  Ca = () => "Couldn't complete the purchase. This item does not exist.",
  za = () => "Não foi possível concluir a compra. Este item não existe.",
  Ka = () => "无法完成购买。该物品不存在。",
  Fa = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  $a = () => "No se pudo completar la compra. Este ítem no existe.",
  Ga = () => "Achat impossible. Cet objet n’existe pas.",
  Va = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  Ha = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Wa = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Ya = () => "Не удалось завершить покупку. Этот предмет не существует.",
  Ja = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  Qa = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  gt = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ca() : e === "pt" ? za() : e === "ch" ? Ka() : e === "de" ? Fa() : e === "es" ? $a() : e === "fr" ? Ga() : e === "it" ? Va() : e === "jp" ? Ha() : e === "pl" ? Wa() : e === "ru" ? Ya() : e === "uk" ? Ja() : Qa()
  },
  Xa = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  Za = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  ei = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  ti = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  ri = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  ni = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  si = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  ai = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  ii = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  oi = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  ci = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  ui = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  li = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Xa() : e === "pt" ? Za() : e === "ch" ? ei() : e === "de" ? ti() : e === "es" ? ri() : e === "fr" ? ni() : e === "it" ? si() : e === "jp" ? ai() : e === "pl" ? ii() : e === "ru" ? oi() : e === "uk" ? ci() : ui()
  },
  di = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  _i = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  fi = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  pi = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  hi = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  mi = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  gi = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  wi = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  yi = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  bi = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  vi = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  Ei = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  rt = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? di() : e === "pt" ? _i() : e === "ch" ? fi() : e === "de" ? pi() : e === "es" ? hi() : e === "fr" ? mi() : e === "it" ? gi() : e === "jp" ? wi() : e === "pl" ? yi() : e === "ru" ? bi() : e === "uk" ? vi() : Ei()
  },
  Ti = () => "Doxxing",
  Oi = () => "Doxxing",
  ki = () => "人肉搜索",
  Ii = () => "Doxxing",
  Ni = () => "Doxxing",
  Si = () => "Doxxing",
  Ai = () => "Doxxing",
  Ri = () => "ドックス（Doxxing）",
  Di = () => "Doxxing",
  Pi = () => "Докcинг",
  xi = () => "Докcинг",
  Ui = () => "Doxxing",
  ji = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ti() : e === "pt" ? Oi() : e === "ch" ? ki() : e === "de" ? Ii() : e === "es" ? Ni() : e === "fr" ? Si() : e === "it" ? Ai() : e === "jp" ? Ri() : e === "pl" ? Di() : e === "ru" ? Pi() : e === "uk" ? xi() : Ui()
  },
  Li = () => "Released other's personal information without their consent",
  Mi = () => "Vazar informações pessoais de terceiros sem consentimento",
  Bi = () => "在未获同意的情况下公开他人个人信息",
  qi = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  Ci = () => "Divulgó información personal de otra persona sin su consentimiento",
  zi = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  Ki = () => "Diffusione di informazioni personali di terzi senza consenso",
  Fi = () => "他人の個人情報を同意なく公開した。",
  $i = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  Gi = () => "Публикация личной информации других людей без их согласия",
  Vi = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  Hi = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  Wi = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Li() : e === "pt" ? Mi() : e === "ch" ? Bi() : e === "de" ? qi() : e === "es" ? Ci() : e === "fr" ? zi() : e === "it" ? Ki() : e === "jp" ? Fi() : e === "pl" ? $i() : e === "ru" ? Gi() : e === "uk" ? Vi() : Hi()
  },
  Yi = () => "This email is already in use.",
  Ji = () => "Este e-mail já está em uso.",
  Qi = () => "This email is already in use.",
  Xi = () => "This email is already in use.",
  Zi = () => "Este correo electrónico ya está en uso.",
  eo = () => "This email is already in use.",
  to = () => "Questa email è già in uso.",
  ro = () => "This email is already in use.",
  no = () => "This email is already in use.",
  so = () => "This email is already in use.",
  ao = () => "This email is already in use.",
  io = () => "This email is already in use.",
  oo = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Yi() : e === "pt" ? Ji() : e === "ch" ? Qi() : e === "de" ? Xi() : e === "es" ? Zi() : e === "fr" ? eo() : e === "it" ? to() : e === "jp" ? ro() : e === "pl" ? no() : e === "ru" ? so() : e === "uk" ? ao() : io()
  },
  co = r => `This email is already in use by user #${r.userId}.`,
  uo = r => `Este e-mail já está em uso pelo usuário #${r.userId}.`,
  lo = r => `This email is already in use by user #${r.userId}.`,
  _o = r => `This email is already in use by user #${r.userId}.`,
  fo = r => `Este correo electrónico ya está en uso por el usuario #${r.userId}.`,
  po = r => `This email is already in use by user #${r.userId}.`,
  ho = r => `Questa email è già in uso dall'utente #${r.userId}.`,
  mo = r => `This email is already in use by user #${r.userId}.`,
  go = r => `This email is already in use by user #${r.userId}.`,
  wo = r => `This email is already in use by user #${r.userId}.`,
  yo = r => `This email is already in use by user #${r.userId}.`,
  bo = r => `This email is already in use by user #${r.userId}.`,
  vo = (r, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? co(r) : e === "pt" ? uo(r) : e === "ch" ? lo(r) : e === "de" ? _o(r) : e === "es" ? fo(r) : e === "fr" ? po(r) : e === "it" ? ho(r) : e === "jp" ? mo(r) : e === "pl" ? go(r) : e === "ru" ? wo(r) : e === "uk" ? yo(r) : bo(r)
  },
  Eo = () => "Enter a valid email address.",
  To = () => "Informe um endereço de e-mail válido.",
  Oo = () => "Enter a valid email address.",
  ko = () => "Enter a valid email address.",
  Io = () => "Introduce una dirección de correo electrónico válida.",
  No = () => "Enter a valid email address.",
  So = () => "Inserisci un indirizzo email valido.",
  Ao = () => "Enter a valid email address.",
  Ro = () => "Enter a valid email address.",
  Do = () => "Enter a valid email address.",
  Po = () => "Enter a valid email address.",
  xo = () => "Enter a valid email address.",
  Uo = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Eo() : e === "pt" ? To() : e === "ch" ? Oo() : e === "de" ? ko() : e === "es" ? Io() : e === "fr" ? No() : e === "it" ? So() : e === "jp" ? Ao() : e === "pl" ? Ro() : e === "ru" ? Do() : e === "uk" ? Po() : xo()
  },
  jo = r => `Error while painting: ${r.err}`,
  Lo = r => `Erro enquanto pinta: ${r.err}`,
  Mo = r => `绘制时出错：${r.err}`,
  Bo = r => `Fehler beim Malen: ${r.err}`,
  qo = r => `Error al pintar: ${r.err}`,
  Co = r => `Erreur lors de la peinture : ${r.err}`,
  zo = r => `Errore durante la pittura: ${r.err}`,
  Ko = r => `ペイント中にエラーが発生しました: ${r.err}`,
  Fo = r => `Błąd podczas malowania: ${r.err}`,
  $o = r => `Ошибка при рисовании: ${r.err}`,
  Go = r => `Помилка під час малювання: ${r.err}`,
  Vo = r => `Lỗi khi tô: ${r.err}`,
  Ho = (r, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? jo(r) : e === "pt" ? Lo(r) : e === "ch" ? Mo(r) : e === "de" ? Bo(r) : e === "es" ? qo(r) : e === "fr" ? Co(r) : e === "it" ? zo(r) : e === "jp" ? Ko(r) : e === "pl" ? Fo(r) : e === "ru" ? $o(r) : e === "uk" ? Go(r) : Vo(r)
  },
  Wo = () => "Exceeded maximum number of characters",
  Yo = () => "Excedeu o número máximo de caracteres permitidos",
  Jo = () => "超出最大字符数",
  Qo = () => "Maximale Zeichenanzahl überschritten",
  Xo = () => "Se excedió el número máximo de caracteres",
  Zo = () => "Nombre maximal de caractères dépassé",
  ec = () => "Numero massimo di caratteri superato",
  tc = () => "最大文字数を超過しました",
  rc = () => "Przekroczono maksymalną liczbę znaków",
  nc = () => "Превышено максимальное количество символов",
  sc = () => "Перевищено максимальну кількість символів",
  ac = () => "Đã vượt quá số ký tự tối đa",
  ic = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Wo() : e === "pt" ? Yo() : e === "ch" ? Jo() : e === "de" ? Qo() : e === "es" ? Xo() : e === "fr" ? Zo() : e === "it" ? ec() : e === "jp" ? tc() : e === "pl" ? rc() : e === "ru" ? nc() : e === "uk" ? sc() : ac()
  },
  oc = () => "Verification code expired. Please request a new one.",
  cc = () => "Código de verificação expirado. Por favor, solicite um novo.",
  uc = () => "验证码已过期，请重新获取。",
  lc = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  dc = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  _c = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  fc = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  pc = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  hc = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  mc = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  gc = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  wc = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  yc = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? oc() : e === "pt" ? cc() : e === "ch" ? uc() : e === "de" ? lc() : e === "es" ? dc() : e === "fr" ? _c() : e === "it" ? fc() : e === "jp" ? pc() : e === "pl" ? hc() : e === "ru" ? mc() : e === "uk" ? gc() : wc()
  },
  bc = () => "Griefing",
  vc = () => "Griefing",
  Ec = () => "破坏行为",
  Tc = () => "Griefing",
  Oc = () => "Griefing",
  kc = () => "Griefing",
  Ic = () => "Griefing",
  Nc = () => "グリーフィング",
  Sc = () => "Griefing",
  Ac = () => "Гриферство",
  Rc = () => "Гріфінг",
  Dc = () => "Griefing",
  Pc = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? bc() : e === "pt" ? vc() : e === "ch" ? Ec() : e === "de" ? Tc() : e === "es" ? Oc() : e === "fr" ? kc() : e === "it" ? Ic() : e === "jp" ? Nc() : e === "pl" ? Sc() : e === "ru" ? Ac() : e === "uk" ? Rc() : Dc()
  },
  xc = () => "Messed up with other's artworks",
  Uc = () => "Estragou os desenhos dos outros",
  jc = () => "破坏了他人的作品",
  Lc = () => "Kunstwerke anderer beschädigt",
  Mc = () => "Arruinó las obras de arte de otros",
  Bc = () => "A abîmé les œuvres des autres",
  qc = () => "Ha rovinato i disegni degli altri",
  Cc = () => "他人の作品を荒らした",
  zc = () => "Zniszczył prace innych",
  Kc = () => "Испортил чужие рисунки",
  Fc = () => "Зіпсував роботи інших",
  $c = () => "Phá hỏng tranh của người khác",
  Gc = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? xc() : e === "pt" ? Uc() : e === "ch" ? jc() : e === "de" ? Lc() : e === "es" ? Mc() : e === "fr" ? Bc() : e === "it" ? qc() : e === "jp" ? Cc() : e === "pl" ? zc() : e === "ru" ? Kc() : e === "uk" ? Fc() : $c()
  },
  Vc = () => "Hate speech",
  Hc = () => "Discurso de Ódio",
  Wc = () => "仇恨言论",
  Yc = () => "Hassrede",
  Jc = () => "Discurso de odio",
  Qc = () => "Discours haineux",
  Xc = () => "Discorso d'odio",
  Zc = () => "ヘイトスピーチ",
  eu = () => "Mowa nienawiści",
  tu = () => "Речь ненависти",
  ru = () => "Мова ворожнечі",
  nu = () => "Ngôn từ thù hằn",
  su = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Vc() : e === "pt" ? Hc() : e === "ch" ? Wc() : e === "de" ? Yc() : e === "es" ? Jc() : e === "fr" ? Qc() : e === "it" ? Xc() : e === "jp" ? Zc() : e === "pl" ? eu() : e === "ru" ? tu() : e === "uk" ? ru() : nu()
  },
  au = () => "Racism, homophobia, hate symbols, etc",
  iu = () => "Racismo, homofobia, símbolos de ódio, etc.",
  ou = () => "种族主义、恐同、仇恨符号等",
  cu = () => "Rassismus, Homophobie, Hasssymbole usw.",
  uu = () => "Racismo, homofobia, símbolos de odio, etc.",
  lu = () => "Racisme, homophobie, symboles haineux, etc.",
  du = () => "Razzismo, omofobia, simboli d'odio, ecc.",
  _u = () => "人種差別、同性愛嫌悪、ヘイトシンボルなど",
  fu = () => "Rasizm, homofobia, symbole nienawiści itp.",
  pu = () => "Расизм, гомофобия, символы ненависти и т. п.",
  hu = () => "Расизм, гомофобія, символи ненависті тощо",
  mu = () => "Phân biệt chủng tộc, kỳ thị đồng tính, biểu tượng thù ghét, v.v.",
  gu = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? au() : e === "pt" ? iu() : e === "ch" ? ou() : e === "de" ? cu() : e === "es" ? uu() : e === "fr" ? lu() : e === "it" ? du() : e === "jp" ? _u() : e === "pl" ? fu() : e === "ru" ? pu() : e === "uk" ? hu() : mu()
  },
  wu = () => "Inappropriate content",
  yu = () => "Conteúdo inapropriado",
  bu = () => "不当内容",
  vu = () => "Unangemessene Inhalte",
  Eu = () => "Contenido inapropiado",
  Tu = () => "Contenu inapproprié",
  Ou = () => "Contenuto inappropriato",
  ku = () => "不適切なコンテンツ",
  Iu = () => "Nieodpowiednie treści",
  Nu = () => "Неприемлемый контент",
  Su = () => "Неприйнятний вміст",
  Au = () => "Nội dung không phù hợp",
  Ru = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? wu() : e === "pt" ? yu() : e === "ch" ? bu() : e === "de" ? vu() : e === "es" ? Eu() : e === "fr" ? Tu() : e === "it" ? Ou() : e === "jp" ? ku() : e === "pl" ? Iu() : e === "ru" ? Nu() : e === "uk" ? Su() : Au()
  },
  Du = () => "Explicit or illegal content, severe slurs",
  Pu = () => "Conteúdo explícito ou ilegal, insultos graves",
  xu = () => "露骨或非法内容、严重的侮辱性言论",
  Uu = () => "Expliziter oder illegaler Inhalt, schwere Beleidigungen",
  ju = () => "Contenido explícito o ilegal, insultos graves",
  Lu = () => "Contenu explicite ou illégal, insultes graves",
  Mu = () => "Contenuto esplicito o illegale, insulti gravi",
  Bu = () => "露骨または違法なコンテンツ、ひどい侮辱・中傷",
  qu = () => "Treści jawnie seksualne lub nielegalne, poważne obelgi",
  Cu = () => "Откровенный или незаконный контент, грубые оскорбления",
  zu = () => "Відвертий або незаконний вміст, грубі образи",
  Ku = () => "Nội dung phản cảm hoặc bất hợp pháp, lời lẽ lăng mạ nghiêm trọng",
  Fu = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Du() : e === "pt" ? Pu() : e === "ch" ? xu() : e === "de" ? Uu() : e === "es" ? ju() : e === "fr" ? Lu() : e === "it" ? Mu() : e === "jp" ? Bu() : e === "pl" ? qu() : e === "ru" ? Cu() : e === "uk" ? zu() : Ku()
  },
  $u = () => "Invalid captcha. Please try again.",
  Gu = () => "Captcha inválido. Por favor, tente novamente.",
  Vu = () => "验证码无效，请重试。",
  Hu = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  Wu = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  Yu = () => "Captcha invalide. Veuillez réessayer.",
  Ju = () => "Captcha non valido. Riprova.",
  Qu = () => "キャプチャが無効です。もう一度お試しください。",
  Xu = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  Zu = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  el = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  tl = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  rl = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? $u() : e === "pt" ? Gu() : e === "ch" ? Vu() : e === "de" ? Hu() : e === "es" ? Wu() : e === "fr" ? Yu() : e === "it" ? Ju() : e === "jp" ? Qu() : e === "pl" ? Xu() : e === "ru" ? Zu() : e === "uk" ? el() : tl()
  },
  nl = () => "Invalid challenge response",
  sl = () => "Resposta de desafio inválida",
  al = () => "质询响应无效",
  il = () => "Ungültige Challenge-Antwort",
  ol = () => "Respuesta de desafío inválida",
  cl = () => "Réponse au défi invalide",
  ul = () => "Risposta alla sfida non valida",
  ll = () => "無効なチャレンジ応答",
  dl = () => "Nieprawidłowa odpowiedź na wyzwanie",
  _l = () => "Неверный ответ на вызов",
  fl = () => "Недійсна відповідь на виклик",
  pl = () => "Phản hồi thử thách không hợp lệ",
  hl = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? nl() : e === "pt" ? sl() : e === "ch" ? al() : e === "de" ? il() : e === "es" ? ol() : e === "fr" ? cl() : e === "it" ? ul() : e === "jp" ? ll() : e === "pl" ? dl() : e === "ru" ? _l() : e === "uk" ? fl() : pl()
  },
  ml = () => "The verification code is incorrect. Please check it and try again.",
  gl = () => "Código inválido",
  wl = () => "验证码不正确。请检查后重试。",
  yl = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  bl = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  vl = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  El = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  Tl = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  Ol = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  kl = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  Il = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  Nl = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  Sl = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ml() : e === "pt" ? gl() : e === "ch" ? wl() : e === "de" ? yl() : e === "es" ? bl() : e === "fr" ? vl() : e === "it" ? El() : e === "jp" ? Tl() : e === "pl" ? Ol() : e === "ru" ? kl() : e === "uk" ? Il() : Nl()
  },
  Al = () => "Invalid discord.",
  Rl = () => "Discord inválido.",
  Dl = () => "无效的 Discord。",
  Pl = () => "Ungültiger Discord.",
  xl = () => "Discord inválido.",
  Ul = () => "Discord invalide.",
  jl = () => "Discord non valido.",
  Ll = () => "無効なDiscordアカウントです。",
  Ml = () => "Nieprawidłowy Discord.",
  Bl = () => "Неверный Discord.",
  ql = () => "Некоректний Discord.",
  Cl = () => "Discord không hợp lệ.",
  zl = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Al() : e === "pt" ? Rl() : e === "ch" ? Dl() : e === "de" ? Pl() : e === "es" ? xl() : e === "fr" ? Ul() : e === "it" ? jl() : e === "jp" ? Ll() : e === "pl" ? Ml() : e === "ru" ? Bl() : e === "uk" ? ql() : Cl()
  },
  Kl = () => "The name contains disallowed characters or words. Please choose a different name.",
  Fl = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  $l = () => "名称包含禁止的字符或词语，请选择其他名称。",
  Gl = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  Vl = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  Hl = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  Wl = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  Yl = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  Jl = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  Ql = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  Xl = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  Zl = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  wt = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Kl() : e === "pt" ? Fl() : e === "ch" ? $l() : e === "de" ? Gl() : e === "es" ? Vl() : e === "fr" ? Hl() : e === "it" ? Wl() : e === "jp" ? Yl() : e === "pl" ? Jl() : e === "ru" ? Ql() : e === "uk" ? Xl() : Zl()
  },
  ed = () => "Please enter a valid phone number with country code.",
  td = () => "Insira um número de telefone válido com código do país.",
  rd = () => "请输入带国家代码的有效电话号码。",
  nd = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  sd = () => "Introduce un número de teléfono válido con código de país.",
  ad = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  id = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  od = () => "国番号付きの有効な電話番号を入力してください。",
  cd = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  ud = () => "Введите действительный номер телефона с кодом страны.",
  ld = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  dd = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  _d = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ed() : e === "pt" ? td() : e === "ch" ? rd() : e === "de" ? nd() : e === "es" ? sd() : e === "fr" ? ad() : e === "it" ? id() : e === "jp" ? od() : e === "pl" ? cd() : e === "ru" ? ud() : e === "uk" ? ld() : dd()
  },
  fd = () => "Phone number not supported. Please try another number.",
  pd = () => "Número de telefone não suportado. Por favor, tente outro número.",
  hd = () => "不支持此电话号码。请尝试其他号码。",
  md = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  gd = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  wd = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  yd = () => "Numero di telefono non supportato. Prova con un altro numero.",
  bd = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  vd = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  Ed = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  Td = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  Od = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  kd = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? fd() : e === "pt" ? pd() : e === "ch" ? hd() : e === "de" ? md() : e === "es" ? gd() : e === "fr" ? wd() : e === "it" ? yd() : e === "jp" ? bd() : e === "pl" ? vd() : e === "ru" ? Ed() : e === "uk" ? Td() : Od()
  },
  Id = () => "The new leader must be a member of the alliance",
  Nd = () => "O novo líder deve ser um membro da aliança",
  Sd = () => "新盟主必须是联盟成员",
  Ad = () => "Der neue Anführer muss Mitglied der Allianz sein",
  Rd = () => "El nuevo líder debe ser miembro de la alianza",
  Dd = () => "Le nouveau chef doit être membre de l’alliance",
  Pd = () => "Il nuovo leader deve essere un membro dell'alleanza",
  xd = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  Ud = () => "Nowy lider musi być członkiem sojuszu",
  jd = () => "Новый лидер должен быть участником альянса",
  Ld = () => "Новий лідер має бути учасником альянсу",
  Md = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Bd = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Id() : e === "pt" ? Nd() : e === "ch" ? Sd() : e === "de" ? Ad() : e === "es" ? Rd() : e === "fr" ? Dd() : e === "it" ? Pd() : e === "jp" ? xd() : e === "pl" ? Ud() : e === "ru" ? jd() : e === "uk" ? Ld() : Md()
  },
  qd = () => "Leaderboard is temporarily disabled",
  Cd = () => "O ranking está temporariamente desativado",
  zd = () => "排行榜已暂时停用",
  Kd = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Fd = () => "La clasificación está deshabilitada temporalmente",
  $d = () => "Le classement est temporairement désactivé",
  Gd = () => "La classifica è temporaneamente disattivata",
  Vd = () => "ランキングは一時的に無効になっています。",
  Hd = () => "Ranking jest tymczasowo wyłączony",
  Wd = () => "Таблица лидеров временно отключена",
  Yd = () => "Таблиця лідерів тимчасово вимкнена",
  Jd = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  $ = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? qd() : e === "pt" ? Cd() : e === "ch" ? zd() : e === "de" ? Kd() : e === "es" ? Fd() : e === "fr" ? $d() : e === "it" ? Gd() : e === "jp" ? Vd() : e === "pl" ? Hd() : e === "ru" ? Wd() : e === "uk" ? Yd() : Jd()
  },
  Qd = () => "Location name is too big (max. 128 characters)",
  Xd = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Zd = () => "位置名称过长（最大 128 个字符）",
  e_ = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  t_ = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  r_ = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  n_ = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  s_ = () => "場所の名前が長すぎます（最大128文字）。",
  a_ = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  i_ = () => "Название локации слишком длинное (макс. 128 символов)",
  o_ = () => "Назва локації надто довга (макс. 128 символів)",
  c_ = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  u_ = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Qd() : e === "pt" ? Xd() : e === "ch" ? Zd() : e === "de" ? e_() : e === "es" ? t_() : e === "fr" ? r_() : e === "it" ? n_() : e === "jp" ? s_() : e === "pl" ? a_() : e === "ru" ? i_() : e === "uk" ? o_() : c_()
  },
  l_ = () => "Multi-accounting",
  d_ = () => "Múltiplas contas",
  __ = () => "多账号",
  f_ = () => "Multi-Accounting",
  p_ = () => "Multi-cuentas",
  h_ = () => "Multi-comptes",
  m_ = () => "Multi-account",
  g_ = () => "複数アカウント使用",
  w_ = () => "Multi-konta",
  y_ = () => "Мультиаккаунт",
  b_ = () => "Мультиакаунтинг",
  v_ = () => "Nhiều tài khoản",
  E_ = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? l_() : e === "pt" ? d_() : e === "ch" ? __() : e === "de" ? f_() : e === "es" ? p_() : e === "fr" ? h_() : e === "it" ? m_() : e === "jp" ? g_() : e === "pl" ? w_() : e === "ru" ? y_() : e === "uk" ? b_() : v_()
  },
  T_ = () => "Paint with more than one account or using virtual machines, residential proxies, or multi-accounting browsers",
  O_ = () => "Pintar com mais de uma conta ou usando máquinas virtuais, proxies residenciais ou navegadores multi-conta",
  k_ = () => "使用多个账号绘制像素，或使用虚拟机、住宅代理或多账号浏览器",
  I_ = () => "Mehr als ein Konto zum Malen verwenden oder virtuelle Maschinen, Residential-Proxys oder Multi-Accounting-Browser nutzen",
  N_ = () => "Pintar con más de una cuenta o usar máquinas virtuales, proxies residenciales o navegadores multicuenta",
  S_ = () => "Utiliser plus d’un compte pour peindre, ou utiliser des machines virtuelles, des proxys résidentiels ou des navigateurs multi-comptes",
  A_ = () => "Usare più di un account per dipingere, oppure usare macchine virtuali, proxy residenziali o browser multi-account",
  R_ = () => "複数のアカウントを使ってピクセルを塗る、または仮想マシン、住宅プロキシ、マルチアカウントブラウザを使用する",
  D_ = () => "Malowanie pikseli na więcej niż jednym koncie lub przy użyciu maszyn wirtualnych, proxy residential lub przeglądarek multi-kontowych",
  P_ = () => "Рисование с более чем одного аккаунта или с использованием виртуальных машин, резидентных прокси или мультиаккаунт-браузеров",
  x_ = () => "Малювання з більш ніж одного акаунта або з використанням віртуальних машин, резидентних проксі чи мультиакаунт-браузерів",
  U_ = () => "Vẽ pixel bằng nhiều hơn một tài khoản hoặc bằng máy ảo, proxy dân cư hoặc trình duyệt đa tài khoản",
  j_ = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? T_() : e === "pt" ? O_() : e === "ch" ? k_() : e === "de" ? I_() : e === "es" ? N_() : e === "fr" ? S_() : e === "it" ? A_() : e === "jp" ? R_() : e === "pl" ? D_() : e === "ru" ? P_() : e === "uk" ? x_() : U_()
  },
  L_ = r => `You can change your name again in ${r.days} days`,
  M_ = r => `Você pode alterar seu nome novamente em ${r.days} dias.`,
  B_ = r => `你可以在 ${r.days} 天后再次修改名称`,
  q_ = r => `Du kannst deinen Namen in ${r.days} Tagen erneut ändern`,
  C_ = r => `Podrás cambiar tu nombre de nuevo en ${r.days} días`,
  z_ = r => `Vous pourrez changer votre nom à nouveau dans ${r.days} jours`,
  K_ = r => `Potrai cambiare di nuovo il tuo nome tra ${r.days} giorni.`,
  F_ = r => `${r.days}日後に再び名前を変更できます。`,
  $_ = r => `Następną zmianę nazwy możesz wykonać za ${r.days} dni`,
  G_ = r => `Вы сможете изменить имя снова через ${r.days} дн.`,
  V_ = r => `Ви зможете змінити імʼя знову через ${r.days} днів`,
  H_ = r => `Bạn có thể đổi tên lại sau ${r.days} ngày`,
  W_ = (r, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? L_(r) : e === "pt" ? M_(r) : e === "ch" ? B_(r) : e === "de" ? q_(r) : e === "es" ? C_(r) : e === "fr" ? z_(r) : e === "it" ? K_(r) : e === "jp" ? F_(r) : e === "pl" ? $_(r) : e === "ru" ? G_(r) : e === "uk" ? V_(r) : H_(r)
  },
  Y_ = () => "No internet access or the servers are offline. Try again later.",
  J_ = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Q_ = () => "没有网络连接或服务器已离线。请稍后重试。",
  X_ = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Z_ = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  ef = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  tf = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  rf = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  nf = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  sf = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  af = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  of = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  cf = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Y_() : e === "pt" ? J_() : e === "ch" ? Q_() : e === "de" ? X_() : e === "es" ? Z_() : e === "fr" ? ef() : e === "it" ? tf() : e === "jp" ? rf() : e === "pl" ? nf() : e === "ru" ? sf() : e === "uk" ? af() : of()
  },
  uf = () => "You are not allowed to verify a phone number. Try refreshing the page",
  lf = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  df = () => "您无权验证电话号码。请尝试刷新页面。",
  _f = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  ff = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  pf = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  hf = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  mf = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  gf = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  wf = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  yf = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  bf = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  vf = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? uf() : e === "pt" ? lf() : e === "ch" ? df() : e === "de" ? _f() : e === "es" ? ff() : e === "fr" ? pf() : e === "it" ? hf() : e === "jp" ? mf() : e === "pl" ? gf() : e === "ru" ? wf() : e === "uk" ? yf() : bf()
  },
  Ef = () => "Operation not allowed. Maybe you have too many favorite locations.",
  Tf = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Of = () => "操作不被允许。你的收藏位置可能过多。",
  kf = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  If = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  Nf = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  Sf = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  Af = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  Rf = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  Df = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  Pf = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  xf = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  Uf = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ef() : e === "pt" ? Tf() : e === "ch" ? Of() : e === "de" ? kf() : e === "es" ? If() : e === "fr" ? Nf() : e === "it" ? Sf() : e === "jp" ? Af() : e === "pl" ? Rf() : e === "ru" ? Df() : e === "uk" ? Pf() : xf()
  },
  jf = r => `Not enough charges: you have ${r.charges} but this overlay needs ${r.pixels}.`,
  Lf = r => `Cargas insuficientes: você tem ${r.charges}, mas esta sobreposição precisa de ${r.pixels}.`,
  Mf = r => `充能不足：你有 ${r.charges}，但此叠加层需要 ${r.pixels}。`,
  Bf = r => `Nicht genügend Ladungen: Du hast ${r.charges}, aber dieses Overlay benötigt ${r.pixels}.`,
  qf = r => `Cargas insuficientes: tienes ${r.charges} pero esta superposición necesita ${r.pixels}.`,
  Cf = r => `Charges insuffisantes : vous avez ${r.charges} mais ce calque nécessite ${r.pixels}.`,
  zf = r => `Cariche insufficienti: ne hai ${r.charges} ma questo overlay ne richiede ${r.pixels}.`,
  Kf = r => `チャージが足りません：現在 ${r.charges} ですが、このオーバーレイには ${r.pixels} 必要です。`,
  Ff = r => `Za mało ładunków: masz ${r.charges}, ale ta nakładka wymaga ${r.pixels}.`,
  $f = r => `Недостаточно зарядов: у вас ${r.charges}, но для этого слоя нужно ${r.pixels}.`,
  Gf = r => `Недостатньо зарядів: у вас ${r.charges}, але для цього шару потрібно ${r.pixels}.`,
  Vf = r => `Không đủ lượt sơn: bạn có ${r.charges} nhưng lớp phủ này cần ${r.pixels}.`,
  Hf = (r, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? jf(r) : e === "pt" ? Lf(r) : e === "ch" ? Mf(r) : e === "de" ? Bf(r) : e === "es" ? qf(r) : e === "fr" ? Cf(r) : e === "it" ? zf(r) : e === "jp" ? Kf(r) : e === "pl" ? Ff(r) : e === "ru" ? $f(r) : e === "uk" ? Gf(r) : Vf(r)
  },
  Wf = () => "You are trying to paint with a color you do not own",
  Yf = () => "Você está tentando pintar com uma cor que não possui",
  Jf = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  Qf = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  Xf = () => "Estás intentando pintar con un color que no posees",
  Zf = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  ep = () => "Stai cercando di dipingere con un colore che non possiedi",
  tp = () => "所持していない色で塗ろうとしています。",
  rp = () => "Próbujesz malować kolorem, którego nie posiadasz",
  np = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  sp = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  ap = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  nt = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Wf() : e === "pt" ? Yf() : e === "ch" ? Jf() : e === "de" ? Qf() : e === "es" ? Xf() : e === "fr" ? Zf() : e === "it" ? ep() : e === "jp" ? tp() : e === "pl" ? rp() : e === "ru" ? np() : e === "uk" ? sp() : ap()
  },
  ip = () => "Phone already used",
  op = () => "Telefone já usado",
  cp = () => "电话号码已被使用",
  up = () => "Telefonnummer bereits verwendet",
  lp = () => "Teléfono ya utilizado",
  dp = () => "Téléphone déjà utilisé",
  _p = () => "Telefono già utilizzato",
  fp = () => "この電話番号は既に使用されています。",
  pp = () => "Numer telefonu jest już używany",
  hp = () => "Телефон уже используется",
  mp = () => "Номер телефону вже використовується",
  gp = () => "Số điện thoại đã được sử dụng",
  wp = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ip() : e === "pt" ? op() : e === "ch" ? cp() : e === "de" ? up() : e === "es" ? lp() : e === "fr" ? dp() : e === "it" ? _p() : e === "jp" ? fp() : e === "pl" ? pp() : e === "ru" ? hp() : e === "uk" ? mp() : gp()
  },
  yp = () => "This phone number's region is not supported",
  bp = () => "A região deste número de telefone não é suportada",
  vp = () => "此电话号码的地区不受支持",
  Ep = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  Tp = () => "La región de este número de teléfono no es compatible",
  Op = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  kp = () => "La regione di questo numero di telefono non è supportata",
  Ip = () => "この電話番号の地域はサポートされていません",
  Np = () => "Region tego numeru telefonu nie jest obsługiwany",
  Sp = () => "Регион этого номера телефона не поддерживается",
  Ap = () => "Регіон цього номера телефону не підтримується",
  Rp = () => "Vùng của số điện thoại này không được hỗ trợ",
  Dp = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? yp() : e === "pt" ? bp() : e === "ch" ? vp() : e === "de" ? Ep() : e === "es" ? Tp() : e === "fr" ? Op() : e === "it" ? kp() : e === "jp" ? Ip() : e === "pl" ? Np() : e === "ru" ? Sp() : e === "uk" ? Ap() : Rp()
  },
  Pp = () => "Refresh your page to get the latest update",
  xp = () => "Recarregue sua página para obter as últimas atualizações",
  Up = () => "刷新页面以获取最新更新",
  jp = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  Lp = () => "Actualiza la página para obtener la última versión",
  Mp = () => "Actualisez la page pour obtenir les dernières mises à jour",
  Bp = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  qp = () => "最新の状態にするにはページを再読み込みしてください。",
  Cp = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  zp = () => "Обновите страницу, чтобы получить последние изменения",
  Kp = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Fp = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  st = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Pp() : e === "pt" ? xp() : e === "ch" ? Up() : e === "de" ? jp() : e === "es" ? Lp() : e === "fr" ? Mp() : e === "it" ? Bp() : e === "jp" ? qp() : e === "pl" ? Cp() : e === "ru" ? zp() : e === "uk" ? Kp() : Fp()
  },
  $p = () => "The request timed out. Please try again.",
  Gp = () => "A solicitação expirou. Por favor, tente novamente.",
  Vp = () => "请求超时。请重试。",
  Hp = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  Wp = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  Yp = () => "La requête a expiré. Veuillez réessayer.",
  Jp = () => "La richiesta è scaduta. Riprova.",
  Qp = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  Xp = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  Zp = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  eh = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  th = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  rh = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? $p() : e === "pt" ? Gp() : e === "ch" ? Vp() : e === "de" ? Hp() : e === "es" ? Wp() : e === "fr" ? Yp() : e === "it" ? Jp() : e === "jp" ? Qp() : e === "pl" ? Xp() : e === "ru" ? Zp() : e === "uk" ? eh() : th()
  },
  nh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  sh = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  ah = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  ih = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  oh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  ch = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  uh = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  lh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  dh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  _h = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  fh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  ph = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  hh = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? nh() : e === "pt" ? sh() : e === "ch" ? ah() : e === "de" ? ih() : e === "es" ? oh() : e === "fr" ? ch() : e === "it" ? uh() : e === "jp" ? lh() : e === "pl" ? dh() : e === "ru" ? _h() : e === "uk" ? fh() : ph()
  },
  mh = () => "The service is currently unavailable. Please try again later.",
  gh = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  wh = () => "服务当前不可用。请稍后再试。",
  yh = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  bh = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  vh = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  Eh = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  Th = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  Oh = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  kh = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  Ih = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  Nh = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  Sh = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? mh() : e === "pt" ? gh() : e === "ch" ? wh() : e === "de" ? yh() : e === "es" ? bh() : e === "fr" ? vh() : e === "it" ? Eh() : e === "jp" ? Th() : e === "pl" ? Oh() : e === "ru" ? kh() : e === "uk" ? Ih() : Nh()
  },
  Ah = () => "Too many attempts. Please try again later",
  Rh = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  Dh = () => "尝试次数过多，请稍后再试",
  Ph = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  xh = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  Uh = () => "Trop de tentatives. Veuillez réessayer plus tard",
  jh = () => "Troppi tentativi. Riprova più tardi.",
  Lh = () => "試行回数が多すぎます。後で再度お試しください。",
  Mh = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  Bh = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  qh = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  Ch = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  at = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ah() : e === "pt" ? Rh() : e === "ch" ? Dh() : e === "de" ? Ph() : e === "es" ? xh() : e === "fr" ? Uh() : e === "it" ? jh() : e === "jp" ? Lh() : e === "pl" ? Mh() : e === "ru" ? Bh() : e === "uk" ? qh() : Ch()
  },
  zh = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  Kh = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  Fh = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  $h = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  Gh = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  Vh = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  Hh = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  Wh = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  Yh = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  Jh = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  Qh = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  Xh = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  Zh = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? zh() : e === "pt" ? Kh() : e === "ch" ? Fh() : e === "de" ? $h() : e === "es" ? Gh() : e === "fr" ? Vh() : e === "it" ? Hh() : e === "jp" ? Wh() : e === "pl" ? Yh() : e === "ru" ? Jh() : e === "uk" ? Qh() : Xh()
  },
  em = () => "The typed username does not match your current username.",
  tm = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  rm = () => "输入的用户名与当前用户名不匹配。",
  nm = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  sm = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  am = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  im = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  om = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  cm = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  um = () => "Введённое имя пользователя не совпадает с текущим.",
  lm = () => "Введене імʼя користувача не збігається з поточним.",
  dm = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  _m = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? em() : e === "pt" ? tm() : e === "ch" ? rm() : e === "de" ? nm() : e === "es" ? sm() : e === "fr" ? am() : e === "it" ? im() : e === "jp" ? om() : e === "pl" ? cm() : e === "ru" ? um() : e === "uk" ? lm() : dm()
  },
  fm = () => "Unexpected server error. Try again later.",
  pm = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  hm = () => "服务器出现意外错误。请稍后再试。",
  mm = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  gm = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  wm = () => "Erreur serveur inattendue. Réessayez plus tard.",
  ym = () => "Errore imprevisto del server. Riprova più tardi.",
  bm = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  vm = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  Em = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  Tm = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  Om = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  o = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? fm() : e === "pt" ? pm() : e === "ch" ? hm() : e === "de" ? mm() : e === "es" ? gm() : e === "fr" ? wm() : e === "it" ? ym() : e === "jp" ? bm() : e === "pl" ? vm() : e === "ru" ? Em() : e === "uk" ? Tm() : Om()
  },
  km = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  Im = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  Nm = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  Sm = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  Am = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  Rm = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  Dm = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  Pm = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  xm = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  Um = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  jm = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  Lm = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  Mm = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? km() : e === "pt" ? Im() : e === "ch" ? Nm() : e === "de" ? Sm() : e === "es" ? Am() : e === "fr" ? Rm() : e === "it" ? Dm() : e === "jp" ? Pm() : e === "pl" ? xm() : e === "ru" ? Um() : e === "uk" ? jm() : Lm()
  },
  Bm = () => "VPN or proxy detected. Please disable your VPN and try again.",
  qm = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  Cm = () => "检测到VPN或代理。请关闭VPN后重试。",
  zm = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  Km = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  Fm = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  $m = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  Gm = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  Vm = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  Hm = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  Wm = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  Ym = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  Jm = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Bm() : e === "pt" ? qm() : e === "ch" ? Cm() : e === "de" ? zm() : e === "es" ? Km() : e === "fr" ? Fm() : e === "it" ? $m() : e === "jp" ? Gm() : e === "pl" ? Vm() : e === "ru" ? Hm() : e === "uk" ? Wm() : Ym()
  },
  Qm = () => "Failed to load WebAssembly module. Try to use another browser.",
  Xm = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  Zm = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  eg = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  tg = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  rg = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  ng = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  sg = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  ag = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  ig = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  og = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  cg = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  ug = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Qm() : e === "pt" ? Xm() : e === "ch" ? Zm() : e === "de" ? eg() : e === "es" ? tg() : e === "fr" ? rg() : e === "it" ? ng() : e === "jp" ? sg() : e === "pl" ? ag() : e === "ru" ? ig() : e === "uk" ? og() : cg()
  },
  lg = () => "You already have this item. Please refresh the page.",
  dg = () => "Você já possui este item. Atualize a página.",
  _g = () => "你已经拥有此物品。请刷新页面。",
  fg = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  pg = () => "Ya tienes este ítem. Actualiza la página.",
  hg = () => "Vous possédez déjà cet objet. Actualisez la page.",
  mg = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  gg = () => "このアイテムはすでに所持しています。ページを更新してください。",
  wg = () => "Masz już ten przedmiot. Odśwież stronę.",
  yg = () => "У вас уже есть этот предмет. Обновите страницу.",
  bg = () => "У вас уже є цей предмет. Оновіть сторінку.",
  vg = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  yt = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? lg() : e === "pt" ? dg() : e === "ch" ? _g() : e === "de" ? fg() : e === "es" ? pg() : e === "fr" ? hg() : e === "it" ? mg() : e === "jp" ? gg() : e === "pl" ? wg() : e === "ru" ? yg() : e === "uk" ? bg() : vg()
  },
  Eg = () => "You are already in an alliance",
  Tg = () => "Você já está em uma aliança",
  Og = () => "你已经在一个联盟中",
  kg = () => "Du bist bereits in einer Allianz",
  Ig = () => "Ya estás en una alianza",
  Ng = () => "Vous êtes déjà dans une alliance",
  Sg = () => "Sei già in un'alleanza",
  Ag = () => "すでにアライアンスに所属しています。",
  Rg = () => "Jesteś już w sojuszu",
  Dg = () => "Вы уже состоите в альянсе",
  Pg = () => "Ви вже перебуваєте в альянсі",
  xg = () => "Bạn đã ở trong một liên minh",
  Ug = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Eg() : e === "pt" ? Tg() : e === "ch" ? Og() : e === "de" ? kg() : e === "es" ? Ig() : e === "fr" ? Ng() : e === "it" ? Sg() : e === "jp" ? Ag() : e === "pl" ? Rg() : e === "ru" ? Dg() : e === "uk" ? Pg() : xg()
  },
  jg = () => "You are not allowed to do this",
  Lg = () => "Você não tem permissão para fazer isso",
  Mg = () => "你无权执行此操作",
  Bg = () => "Du bist dazu nicht berechtigt",
  qg = () => "No tienes permiso para hacer esto",
  Cg = () => "Vous n’êtes pas autorisé à faire cela",
  zg = () => "Non hai il permesso di farlo",
  Kg = () => "この操作を行う権限がありません。",
  Fg = () => "Nie masz uprawnień, aby to zrobić",
  $g = () => "У вас нет прав для этого действия",
  Gg = () => "Ви не маєте права це робити",
  Vg = () => "Bạn không có quyền làm việc này",
  K = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? jg() : e === "pt" ? Lg() : e === "ch" ? Mg() : e === "de" ? Bg() : e === "es" ? qg() : e === "fr" ? Cg() : e === "it" ? zg() : e === "jp" ? Kg() : e === "pl" ? Fg() : e === "ru" ? $g() : e === "uk" ? Gg() : Vg()
  },
  Hg = () => "You do not have enough Droplets to buy this item.",
  Wg = () => "Você não tem Droplets suficientes para comprar este item.",
  Yg = () => "你的 Droplets 不足，无法购买此物品。",
  Jg = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  Qg = () => "No tienes suficientes Droplets para comprar este ítem.",
  Xg = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  Zg = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  ew = () => "このアイテムを購入するのに十分なDropletsがありません。",
  tw = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  rw = () => "У вас недостаточно Droplets для покупки этого предмета.",
  nw = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  sw = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  bt = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Hg() : e === "pt" ? Wg() : e === "ch" ? Yg() : e === "de" ? Jg() : e === "es" ? Qg() : e === "fr" ? Xg() : e === "it" ? Zg() : e === "jp" ? ew() : e === "pl" ? tw() : e === "ru" ? rw() : e === "uk" ? nw() : sw()
  },
  aw = () => "You need to be logged in to paint",
  iw = () => "Você precisa estar conectado para pintar",
  ow = () => "你需要登录才能进行绘制",
  cw = () => "Du musst eingeloggt sein, um zu malen",
  uw = () => "Debes iniciar sesión para pintar",
  lw = () => "Vous devez être connecté pour peindre",
  dw = () => "Devi avere effettuato l'accesso per dipingere",
  _w = () => "ペイントするにはログインが必要です。",
  fw = () => "Musisz być zalogowany, aby malować",
  pw = () => "Чтобы рисовать, нужно войти в аккаунт",
  hw = () => "Щоб малювати, необхідно увійти в акаунт",
  mw = () => "Bạn cần đăng nhập để tô",
  it = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? aw() : e === "pt" ? iw() : e === "ch" ? ow() : e === "de" ? cw() : e === "es" ? uw() : e === "fr" ? lw() : e === "it" ? dw() : e === "jp" ? _w() : e === "pl" ? fw() : e === "ru" ? pw() : e === "uk" ? hw() : mw()
  },
  gw = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  ww = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  yw = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  bw = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  vw = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  Ew = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  Tw = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  Ow = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  kw = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  Iw = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  Nw = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  Sw = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  Aw = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? gw() : e === "pt" ? ww() : e === "ch" ? yw() : e === "de" ? bw() : e === "es" ? vw() : e === "fr" ? Ew() : e === "it" ? Tw() : e === "jp" ? Ow() : e === "pl" ? kw() : e === "ru" ? Iw() : e === "uk" ? Nw() : Sw()
  },
  Rw = r => `Your account has been suspended out until ${r.until}`,
  Dw = r => `A sua conta está suspensa até ${r.until}`,
  Pw = r => `你的账号已被暂停至 ${r.until}`,
  xw = r => `Dein Konto ist gesperrt bis ${r.until}`,
  Uw = r => `Tu cuenta ha sido suspendida hasta ${r.until}`,
  jw = r => `Votre compte est suspendu jusqu’au ${r.until}`,
  Lw = r => `Il tuo account è sospeso fino al ${r.until}`,
  Mw = r => `あなたのアカウントは${r.until}まで一時停止されています。`,
  Bw = r => `Twoje konto zostało zawieszone do ${r.until}`,
  qw = r => `Ваш аккаунт заблокирован до ${r.until}`,
  Cw = r => `Ваш акаунт призупинено до ${r.until}`,
  zw = r => `Tài khoản của bạn đã bị đình chỉ đến ${r.until}`,
  ot = (r, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Rw(r) : e === "pt" ? Dw(r) : e === "ch" ? Pw(r) : e === "de" ? xw(r) : e === "es" ? Uw(r) : e === "fr" ? jw(r) : e === "it" ? Lw(r) : e === "jp" ? Mw(r) : e === "pl" ? Bw(r) : e === "ru" ? qw(r) : e === "uk" ? Cw(r) : zw(r)
  },
  Kw = () => "A correction is already pending for this ticket.",
  Fw = () => "Já existe uma correção pendente para este ticket.",
  $w = () => "此工单已存在待审核的更正请求。",
  Gw = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  Vw = () => "Ya hay una corrección pendiente para este ticket.",
  Hw = () => "Une correction est déjà en attente pour ce ticket.",
  Ww = () => "Una correzione è già in sospeso per questo ticket.",
  Yw = () => "このチケットには未処理の修正があります。",
  Jw = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  Qw = () => "Для этого тикета уже есть запрос на исправление.",
  Xw = () => "Для цього тікета вже є запит на перевірці.",
  Zw = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  ey = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Kw() : e === "pt" ? Fw() : e === "ch" ? $w() : e === "de" ? Gw() : e === "es" ? Vw() : e === "fr" ? Hw() : e === "it" ? Ww() : e === "jp" ? Yw() : e === "pl" ? Jw() : e === "ru" ? Qw() : e === "uk" ? Xw() : Zw()
  },
  ty = () => "You cannot review your own correction request.",
  ry = () => "Você não pode revisar sua própria solicitação de correção.",
  ny = () => "不能审核自己提交的更正请求。",
  sy = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  ay = () => "No puedes revisar tu propia solicitud de corrección.",
  iy = () => "Tu ne peux pas examiner ta propre demande de correction.",
  oy = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  cy = () => "自分のリクエストはレビューできません。",
  uy = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  ly = () => "Нельзя рассматривать собственный запрос.",
  dy = () => "Не можна перевіряти власний запит.",
  _y = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  fy = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ty() : e === "pt" ? ry() : e === "ch" ? ny() : e === "de" ? sy() : e === "es" ? ay() : e === "fr" ? iy() : e === "it" ? oy() : e === "jp" ? cy() : e === "pl" ? uy() : e === "ru" ? ly() : e === "uk" ? dy() : _y()
  },
  py = () => "This correction has already been reviewed.",
  hy = () => "Esta correção já foi revisada.",
  my = () => "此请求已被审核。",
  gy = () => "Diese Korrektur wurde bereits geprüft.",
  wy = () => "Esta corrección ya ha sido revisada.",
  yy = () => "Cette correction a déjà été examinée.",
  by = () => "Questa correzione è già stata revisionata.",
  vy = () => "このリクエストはすでにレビュー済みです。",
  Ey = () => "Ta prośba została już rozpatrzona.",
  Ty = () => "Этот запрос уже рассмотрен.",
  Oy = () => "Цей запит вже перевірено.",
  ky = () => "Yêu cầu này đã được duyệt.",
  Iy = (r = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? py() : e === "pt" ? hy() : e === "ch" ? my() : e === "de" ? gy() : e === "es" ? wy() : e === "fr" ? yy() : e === "it" ? by() : e === "jp" ? vy() : e === "pl" ? Ey() : e === "ru" ? Ty() : e === "uk" ? Oy() : ky()
  };
var pe, he;
class Ny {
  constructor(t) {
    b(this, pe, I(!0));
    b(this, he, I(null));
    this.url = t
  }
  get online() {
    return T(p(this, pe))
  }
  set online(t) {
    O(p(this, pe), t, !0)
  }
  get serverTimeOffsetMs() {
    return T(p(this, he))
  }
  set serverTimeOffsetMs(t) {
    O(p(this, he), t, !0)
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
      })).status !== a.OK) throw new Error(o())
  }
  async guardedFetch(t, e) {
    try {
      const n = await fetch(`${this.url}${t}`, e);
      return this.online = !0, this.updateServerTimeEstimate(n), n
    } catch (n) {
      throw console.error("Fetch error:", n), this.online = !1, new Error(Na())
    }
  }
  async request(t, e) {
    var u;
    e = {
      credentials: "include",
      ...e
    };
    let n = await this.guardedFetch(t, e);
    if (n.status === a.FORBIDDEN && n.headers.get("x-block-reason") === "tor") throw new Error(Zh());
    const s = ((u = n.headers.get("cf-mitigated")) == null ? void 0 : u.toLowerCase()) === "challenge";
    if (n.status === 403 && s) {
      if (ee.setCfLikelyAutomated(!0), !await ht()) throw new Error(He());
      n = await this.guardedFetch(t, e)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (n.status === a.TOO_MANY_REQUESTS) throw new Error(Aw());
      if (n.status === a.REQUEST_TIMEOUT) throw new Error(rh());
      if (n.status === a.SERVICE_UNAVAILABLE) throw new Error(Sh())
    }
    return n
  }
}
pe = new WeakMap, he = new WeakMap;
class l extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}
class Fb extends Error {}

function Sy(r) {
  return class extends r {
    async me() {
      const t = await this.request("/me", {
        credentials: "include",
        throwOnStatus: !1
      });
      if (t.status === a.OK) return await t.json();
      if (t.status !== a.UNAUTHORIZED) throw new l(o(), t.status)
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
      if (t.status !== a.OK) throw new Error(o());
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
      if (e.status === a.BAD_REQUEST) throw new Error(_d());
      if (e.status === a.CONFLICT) throw new Error(wp());
      if (e.status === a.FORBIDDEN) throw new Error(vf());
      if (e.status === a.TOO_MANY_REQUESTS) throw new Error(at());
      if (e.status === a.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(Dp());
      if (e.status === a.LOCKED) throw new Error(Mm());
      if (e.status === a.UNPROCESSABLE_ENTITY) throw new Error(kd());
      if (e.status === a.NOT_ACCEPTABLE) throw new Error(Jm());
      if (e.status === a.PRECONDITION_FAILED) throw new Error(li());
      if (e.status !== a.OK) throw new Error(o());
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
          "x-fp": await Ge()
        }
      });
      if (t.type === "otp") {
        if (n.status === a.GONE) throw new Error(yc());
        if (n.status === a.BAD_REQUEST) throw new Error(Sl());
        if (n.status === a.TOO_MANY_REQUESTS) throw new Error(at());
        if (n.status !== a.OK) throw new Error(o())
      } else {
        if (n.status === a.BAD_REQUEST) throw new Error(hl());
        if (n.status !== a.OK) throw new Error(o())
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
        if (s === "invalid_name") throw new Error(wt());
        if (s === "invalid_discord") throw new Error(zl());
        if (typeof s == "string" && s.startsWith("name_change_cooldown:")) {
          const i = parseInt(s.split(":")[1] ?? "0", 10);
          throw new Error(W_({
            days: i
          }))
        }
        throw new Error(n == null ? void 0 : n.error)
      } else if (e.status !== a.OK) throw new Error(o())
    }
    async deleteMe(t) {
      const e = await this.request("/me", {
        method: "DELETE",
        credentials: "include",
        body: JSON.stringify({
          confirmText: t
        })
      });
      if (e.status === a.BAD_REQUEST) throw new Error(_m());
      if (e.status !== a.OK) throw new Error(o())
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
      if (e.status === a.FORBIDDEN) throw new Error(Uf());
      if (e.status !== a.OK) throw new Error(o())
    }
    async deleteFavoriteLocation(t) {
      if ((await this.request("/favorite-location/delete", {
          method: "POST",
          body: JSON.stringify({
            id: t
          }),
          credentials: "include"
        })).status !== a.OK) throw new Error(o())
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
      if (n.status === a.BAD_REQUEST) throw new Error(u_());
      if (n.status !== a.OK) throw new Error(o())
    }
    async getMyProfilePictures() {
      const t = await this.request("/me/profile-pictures", {
        credentials: "include"
      });
      if (t.status !== a.OK) throw new Error(o());
      return t.json()
    }
    async changeProfilePicture(t) {
      if ((await this.request("/me/profile-picture/change", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            pictureId: t
          })
        })).status !== a.OK) throw new Error(o())
    }
    async unlinkDiscord() {
      const t = await this.request("/discord/unlink", {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== a.NO_CONTENT) throw new l(o(), t.status)
    }
    async deleteSessions() {
      const t = await this.request("/me/sessions", {
        method: "DELETE",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status)
    }
    async deleteAllUserSessions(t) {
      const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
        method: "DELETE",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(o(), e.status)
    }
    async getMySuspensionDetails() {
      const t = await this.request("/me/suspension", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
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
      if (t.status !== a.OK) throw new l(o(), t.status);
      const e = await t.json();
      return (e == null ? void 0 : e.paintedToday) ?? 0
    }
    async markRulesAsRead() {
      return (await this.request("/me/rules/read", {
        method: "POST",
        credentials: "include"
      })).status === a.OK
    }
  }
}

function Ay(r) {
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
      if (n.status !== a.OK) throw new l(o(), n.status);
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
          i = (s == null ? void 0 : s.error) ?? "";
        throw i === "invalid_name" ? new l(wt(), a.BAD_REQUEST) : new l(typeof i == "string" && i ? i : o(), a.BAD_REQUEST)
      }
      if (n.status !== a.OK) throw new l(o(), n.status)
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
          i = (s == null ? void 0 : s.error) ?? "";
        throw i === "email_required" || i === "invalid_email" ? new l(Uo(), a.BAD_REQUEST) : new l(typeof i == "string" && i ? i : o(), a.BAD_REQUEST)
      }
      if (n.status === a.CONFLICT) {
        const s = await n.json();
        if (((s == null ? void 0 : s.error) ?? "") === "email_already_in_use") {
          const u = new l(typeof(s == null ? void 0 : s.userId) == "number" ? vo({
            userId: s.userId
          }) : oo(), a.CONFLICT);
          throw typeof(s == null ? void 0 : s.userId) == "number" && (u.userId = s.userId), u
        }
        throw new l(o(), a.CONFLICT)
      }
      if (n.status === a.NOT_FOUND) throw new l("User not found.", a.NOT_FOUND);
      if (n.status !== a.OK) throw new l(o(), n.status)
    }
    async getAdminUserProfilePictures(t) {
      const e = await this.request(`/staff/dashboard/users/profile-pictures?userId=${t}`, {
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(o(), e.status);
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
      if (e.status !== a.OK) throw new l(o(), e.status)
    }
    async postAdminRerollUserAvatar(t) {
      const e = await this.request("/staff/dashboard/users/reroll-avatar", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
      if (e.status !== a.OK) throw new l(o(), e.status);
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
      if (s.status !== a.OK) throw new l(o(), s.status)
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
      if (s.status !== a.OK) throw new l(o(), s.status)
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
      if (s.status !== a.OK) throw new l(o(), s.status)
    }
    async reloadPunishmentCache() {
      const t = await this.request("/staff/dashboard/summary/reload-punishment-cache", {
        method: "POST",
        credentials: "include"
      });
      if (t.status === a.CONFLICT) throw new l(on(), t.status);
      if (t.status !== a.OK && t.status !== a.ACCEPTED) throw new l(o(), t.status)
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
      if (n.status !== a.OK) throw new l(o(), n.status)
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
      if (n.status !== a.OK) throw new l(o(), n.status)
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
      if (s.status !== a.OK) throw new l(o(), s.status)
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
      if (n.status !== a.OK) throw new l(o(), n.status);
      return await n.json()
    }
    async getAuditLogs(t) {
      const e = new URLSearchParams;
      t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
      const n = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(o(), n.status);
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
        })).status !== a.OK) throw new Error(o())
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
      if (n.status !== a.OK) throw new l(o(), n.status);
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
      if (n.status !== a.OK) throw new l(o(), n.status);
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
      if (e.status !== a.OK) throw new l(o(), e.status)
    }
    async postReportAllianceName(t) {
      const e = await this.request("/report/alliance/name", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          allianceId: t
        })
      });
      if (e.status !== a.OK) throw new l(o(), e.status);
      return e.json()
    }
  }
}

function Ry(r) {
  return class extends r {
    async getAlliance() {
      const t = await this.request("/alliance", {
        credentials: "include"
      });
      if (t.status === a.OK) return t.json();
      if (t.status === a.NOT_FOUND) return;
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
      if (e.status === a.OK) return e.json();
      if (e.status === a.BAD_REQUEST) {
        const n = await e.json();
        throw n.error === "max_characters" ? new Error(Gn()) : n.error === "name_taken" ? new Error(Pn()) : n.error == "empty_name" ? new Error(ss()) : new Error(o())
      } else throw e.status === a.FORBIDDEN ? new Error(Ug()) : new Error(o())
    }
    async leaveAlliance() {
      if ((await this.request("/alliance/leave", {
          method: "POST",
          credentials: "include"
        })).status !== a.OK) throw new Error(o())
    }
    async updateAllianceDescription(t) {
      const e = await this.request("/alliance/update-description", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          description: t
        })
      });
      if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error(K()) : e.status === a.BAD_REQUEST ? new Error(ic()) : new Error(o())
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
      if (n.status !== a.OK) throw n.status === a.FORBIDDEN ? new Error(K()) : new Error(o())
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
      throw t.status === a.FORBIDDEN ? new Error(K()) : new Error(o())
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
      throw new Error(o())
    }
    async getAllianceBannedMembers(t) {
      const e = await this.request(`/alliance/members/banned/${t}`, {
        credentials: "include"
      });
      if (e.status === a.OK) return e.json();
      throw new Error(o())
    }
    async getAllianceById(t) {
      const e = await this.request(`/staff/dashboard/alliances/${t}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status === a.NOT_FOUND) return;
      if (e.status !== a.OK) throw new l(o(), e.status);
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
      if (n.status !== a.OK) throw new l(o(), n.status);
      const s = await n.json();
      return (Array.isArray(s) ? s : []).map(i => ({
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
      if (e.status === a.NOT_FOUND) return null;
      if (e.status !== a.OK) throw new l(o(), e.status);
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
        members: s.map(i => ({
          id: Number(i == null ? void 0 : i.id),
          name: String((i == null ? void 0 : i.name) ?? `#${i==null?void 0:i.id}`),
          picture: (i == null ? void 0 : i.picture) ?? null,
          pixelsPainted: Number((i == null ? void 0 : i.pixelsPainted) ?? (i == null ? void 0 : i.pixels_painted) ?? 0),
          lastPixelLatitude: (i == null ? void 0 : i.lastPixelLatitude) ?? null,
          lastPixelLongitude: (i == null ? void 0 : i.lastPixelLongitude) ?? null,
          role: (i == null ? void 0 : i.alliance_role) === "admin" || (i == null ? void 0 : i.role) === "admin" ? "admin" : "member",
          timedOut: !!(i != null && i.timedOut),
          banned: !!(i != null && i.banned)
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
      if (s.status !== a.OK) throw new l(o(), s.status);
      const i = await s.json(),
        u = Array.isArray(i == null ? void 0 : i.members) ? i.members : [];
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
        total: Number((i == null ? void 0 : i.total) ?? u.length)
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
        throw new Error((s == null ? void 0 : s.error) ?? o())
      } else if (n.status !== a.OK) throw new l(o(), n.status)
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
        throw (s == null ? void 0 : s.error) === "user_not_in_alliance" ? new Error(Bd()) : new Error(o())
      } else if (n.status !== a.OK) throw new l(o(), n.status)
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
      if (s.status !== a.OK) throw new l(o(), s.status)
    }
    async setAllianceMemberRole(t, e, n) {
      const s = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          role: n
        })
      });
      if (s.status !== a.OK) throw new l(o(), s.status)
    }
    async removeAllianceMember(t, e) {
      const n = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
        method: "POST",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(o(), n.status)
    }
    async giveAllianceAdmin(t) {
      const e = await this.request("/alliance/give-admin", {
        body: JSON.stringify({
          promotedUserId: t
        }),
        method: "POST",
        credentials: "include"
      });
      if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error(K()) : new Error(o())
    }
    async banAllianceUser(t) {
      const e = await this.request("/alliance/ban", {
        body: JSON.stringify({
          bannedUserId: t
        }),
        method: "POST",
        credentials: "include"
      });
      if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error(K()) : new Error(o())
    }
    async equipFlag(t) {
      if ((await this.request(`/flag/equip/${t}`, {
          method: "POST",
          credentials: "include"
        })).status !== a.OK) throw new Error(o())
    }
    async unbanAllianceUser(t) {
      const e = await this.request("/alliance/unban", {
        body: JSON.stringify({
          unbannedUserId: t
        }),
        method: "POST",
        credentials: "include"
      });
      if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error(K()) : new Error(o())
    }
  }
}

function Dy(r) {
  return class extends r {
    async getUserAnticheat(t) {
      const e = await this.request(`/staff/dashboard/users/anticheat?id=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(o(), e.status);
      return await e.json()
    }
    async getAnticheatStats(t, e) {
      const n = await this.request(`/staff/dashboard/anticheat/stats?from=${t}&to=${e}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(o(), n.status);
      return n.json()
    }
    async getAnticheatSignals(t, e) {
      const n = await this.request(`/staff/dashboard/anticheat/signals?from=${t}&to=${e}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(o(), n.status);
      return n.json()
    }
    async getAnticheatUserJourney(t, e, n) {
      const s = await this.request(`/staff/dashboard/anticheat/user/${t}?from=${e}&to=${n}`, {
        method: "GET",
        credentials: "include"
      });
      if (s.status !== a.OK) throw new l(o(), s.status);
      return s.json()
    }
    async getAnticheatSignalAnalysis(t, e, n) {
      const s = await this.request(`/staff/dashboard/anticheat/signal/${encodeURIComponent(t)}?from=${encodeURIComponent(e)}&to=${encodeURIComponent(n)}`, {
        method: "GET",
        credentials: "include"
      });
      if (s.status !== a.OK) throw new l(o(), s.status);
      return s.json()
    }
  }
}

function Py(r) {
  return class extends r {
    async autoReviewBan(t) {
      const e = await this.request("/staff/dashboard/users/auto-review-ban", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
      if (e.status !== a.OK) throw new l(o(), e.status);
      return await e.json()
    }
    async getUserAppeals(t) {
      const e = new URLSearchParams;
      e.set("userId", String(t.userId)), e.set("kind", t.kind), t.page !== void 0 && e.set("page", String(t.page)), t.pageSize !== void 0 && e.set("pageSize", String(t.pageSize)), t.sortBy && e.set("sortBy", t.sortBy), t.sortDir && e.set("sortDir", t.sortDir);
      const n = await this.request(`/staff/dashboard/users/appeals?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(o(), n.status);
      const s = await n.json(),
        i = Array.isArray(s == null ? void 0 : s.appeals) ? s.appeals : [],
        u = typeof(s == null ? void 0 : s.total) == "number" ? s.total : i.length;
      return {
        appeals: i,
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
        i = await this.request("/report/appeal", {
          method: "POST",
          credentials: "include",
          body: n,
          headers: s
        });
      if (i.status === a.FORBIDDEN) {
        const u = await i.json();
        if ((u == null ? void 0 : u.error) === "challenge-required" && u.tier) {
          if (await pt(u.tier)) return this.submitBanAppeal(t, e);
          throw new l(He(), i.status)
        }
      }
      if (i.status !== a.OK && i.status !== a.ALREADY_REPORTED) throw new l(o(), i.status);
      return i.status
    }
    async getOpenAppeals() {
      const t = await this.request("/staff/appeals/get", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
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
      if (n.status !== a.OK) throw new l(o(), n.status);
      return await n.json()
    }
    async getUserLastAppeal() {
      const t = await this.request("/me/last-appeal", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
      const e = await t.json();
      return (e == null ? void 0 : e.appealDate) ?? null
    }
    async assignAppeals() {
      const t = await this.request("/staff/appeals/assign", {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
      return await t.json()
    }
    async getPendingAppealsCount() {
      const t = await this.request("/staff/appeals/open_count", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
      const e = await t.json();
      return (e == null ? void 0 : e.appeals) ?? 0
    }
  }
}

function xy(r) {
  return class extends r {
    async getUserFrames() {
      const t = await this.request("/me/frames", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
      return t.json()
    }
    async postEquipUserFrame(t) {
      const e = await this.request(`/me/frames/equip/${t}`, {
        method: "POST",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(o(), e.status)
    }
    async getUserBadges() {
      const t = await this.request("/me/badges", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
      return t.json()
    }
    async postEquipUserBadge(t) {
      const e = await this.request("/me/badges/equip", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== a.OK) throw new l(o(), e.status)
    }
    async getStoreFrames() {
      const t = await this.request("/store/frames", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
      return t.json()
    }
    async postBuyUserFrame(t) {
      const e = await this.request(`/store/frames/buy/${t}`, {
        method: "POST",
        credentials: "include"
      });
      if (e.status === a.NOT_FOUND) throw new Error(gt());
      if (e.status === a.FORBIDDEN) throw new Error(bt());
      if (e.status === a.CONFLICT) throw new Error(yt());
      if (e.status !== a.OK) throw new Error(o())
    }
    async postEquipCosmetics(t) {
      const e = await this.request("/me/cosmetic/equip", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== a.OK) throw new l(o(), e.status)
    }
    async getStoreNameCosmetics() {
      const t = await this.request("/store/name", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
      return await t.json()
    }
    async postBuyCosmetic(t) {
      const e = await this.request(`/store/name/buy/${t}`, {
        method: "POST",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(o(), e.status)
    }
    async getMyNameCosmetics() {
      const t = await this.request("/me/cosmetics/name", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
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
      if (n.status !== a.OK) throw new l(o(), n.status)
    }
    async postCreateFont(t) {
      const e = await this.request("/staff/store-manager/fonts", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== a.OK) throw new l(o(), e.status)
    }
    async postCreateStyle(t) {
      const e = await this.request("/staff/store-manager/styles", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== a.OK) throw new l(o(), e.status)
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
      if (n.status !== a.OK) throw new l(o(), n.status);
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
      if (n.status !== a.OK) throw new l(o(), n.status);
      return n.json()
    }
    async deleteR2Image(t) {
      const e = await this.request(`/staff/store-manager/images/${t}`, {
        method: "DELETE",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(o(), e.status)
    }
  }
}
const C = {
  day: 1440 * 60 * 1e3,
  hour: 3600 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
};

function $b(r) {
  const t = Math.floor(r / C.hour);
  r -= t * C.hour;
  const e = Math.floor(r / C.minute);
  r -= e * C.minute;
  const s = Math.floor(r / C.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${s}` : `${e}:${s}`
}

function Gb(r) {
  const t = r.getFullYear(),
    e = String(r.getMonth() + 1).padStart(2, "0"),
    n = String(r.getDate()).padStart(2, "0"),
    s = String(r.getHours()).padStart(2, "0"),
    i = String(r.getMinutes()).padStart(2, "0"),
    u = String(r.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${n} ${s}:${i}:${u}`
}
const Uy = 30 * C.minute;

function jy(r) {
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
      Date.now() - this.lastHotspotRequestAt < Uy || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
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
      if (n.status !== a.OK) throw new Error(o());
      return n.json()
    }
  }
}

function Ly(r) {
  return class extends r {
    async postCaptchaSession(t, e = "include") {
      const n = await this.request("/anticheat/captcha/session", {
        method: "POST",
        credentials: e,
        body: JSON.stringify(t),
        headers: {
          "x-fp": await Ge()
        }
      });
      if (!n.ok) throw n.status === 500 ? new l(o(), n.status) : new l(rl(), n.status);
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
const Vb = {
    griefing: Pc(),
    "multi-accounting": E_(),
    "hate-speech": su(),
    bot: gs(),
    doxxing: ji(),
    "inappropriate-content": Ru(),
    other: Fs()
  },
  Hb = {
    doxxing: Wi(),
    "hate-speech": gu(),
    griefing: Gc(),
    "multi-accounting": j_(),
    bot: Rs(),
    "inappropriate-content": Fu(),
    other: ra()
  },
  Wb = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  ct = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  Yb = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  My = 365 * C.day;

function vt(r) {
  if (!r) return null;
  const e = (r instanceof Date ? r : new Date(r)).getTime();
  return Number.isFinite(e) ? e : null
}

function Jb(r, t = Date.now()) {
  const e = vt(r);
  return e === null ? !1 : e - t >= My
}

function Qb(r, t = Date.now()) {
  const e = vt(r);
  if (e === null || e <= t) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const n = Math.max(0, Math.ceil((e - t) / 6e4)),
    s = Math.floor(n / 1440),
    i = Math.floor(n % 1440 / 60),
    u = n % 60;
  return {
    days: s,
    hours: i,
    minutes: u
  }
}

function By(r) {
  return class extends r {
    async getModeratorTickets() {
      const t = await this.request("/staff/tickets/get", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
      const e = await t.json();
      for (const n of e.tickets) n.reports.sort((s, i) => ct[s.reason] - ct[i.reason]);
      return e
    }
    async countMyTicketsClosedToday() {
      const t = await this.request("/staff/tickets/closed-today", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
      return t.json()
    }
    async getOpenTicketsCount() {
      const t = await this.request("/staff/tickets/open_count", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
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
      if (t.status !== a.OK) throw new l(o(), t.status);
      return t.json()
    }
    async setTicketStatus(t, e, n, s, i) {
      const u = await this.request("/staff/tickets/set-status", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          ticketId: t,
          status: e,
          selectedReportId: n,
          assignedReason: s,
          ignoreReason: i
        })
      });
      if (u.status !== a.OK && u.status !== a.BAD_REQUEST) throw new l(o(), u.status)
    }
    async getLastResolvedTicket() {
      const t = await this.request("/staff/tickets/reversals/last-resolved", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
      return (await t.json()).ticket
    }
    async getTicketReversalTicketInfo(t) {
      const e = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(o(), e.status);
      return (await e.json()).ticket
    }
    async getReporterReportHistory(t, e) {
      const n = await this.request(`/staff/tickets/reporter-history?ticketId=${encodeURIComponent(t)}&reporterId=${e}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(o(), n.status);
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
        throw (n == null ? void 0 : n.error) === "reversal_already_pending" ? new l(ey(), a.CONFLICT) : new l(o(), a.CONFLICT)
      }
      if (e.status !== a.OK) throw new l(o(), e.status);
      return e.json()
    }
    async reSolveTicket(t) {
      const e = await this.request("/staff/tickets/re-solve", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== a.OK) throw new l(o(), e.status);
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
      if (s.status !== a.OK) throw new l(o(), s.status);
      return (await s.json()).reversals ?? []
    }
    async getTicketReversal(t) {
      const e = await this.request(`/staff/tickets/reversals/${t}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(o(), e.status);
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
      if (s.status === a.FORBIDDEN) throw new l(fy(), a.FORBIDDEN);
      if (s.status === a.CONFLICT) throw new l(Iy(), a.CONFLICT);
      if (s.status !== a.OK) throw new l(o(), s.status)
    }
    async getOpenTicketsSummary() {
      const t = await this.request("/staff/dashboard/summary/counters/tickets", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
      return t.json()
    }
    async getOpenReportsSummary() {
      const t = await this.request("/staff/dashboard/summary/counters/reports", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
      return t.json()
    }
    async getBanAppealStats(t, e) {
      const n = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(o(), n.status);
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
      if (n.status !== a.OK) throw new l(o(), n.status);
      return (await n.json()).items.map(i => ({
        ...i,
        suspensionRate: (i.ban + i.timeout) / i.total
      }))
    }
    async getClosedReportsByMod(t, e) {
      const n = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(o(), n.status);
      return (await n.json()).items.map(i => ({
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
      if (e.status !== a.OK) throw new l(o(), e.status);
      return e.json()
    }
    async getUserInfoFull(t) {
      const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.NOT_FOUND) {
        if (e.status !== a.OK) throw new l(o(), e.status);
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
      if (n.status !== a.OK) throw new l(o(), n.status);
      return n.json()
    }
    async getUserInfoByEmail(t) {
      const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.NOT_FOUND) {
        if (e.status !== a.OK) throw new l(o(), e.status);
        return e.json()
      }
    }
    async getUserPunishments(t) {
      const e = await this.request(`/staff/dashboard/users/punishments?userId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(o(), e.status);
      return (await e.json()).punishments ?? []
    }
    async getPunishmentTicket(t) {
      const e = await this.request(`/staff/dashboard/users/punishment-ticket?ticketId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(o(), e.status);
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
      if (e.status !== a.OK) throw new l(o(), e.status)
    }
    async getUserNotes(t, e) {
      const n = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
        s = await this.request(n, {
          method: "GET",
          credentials: "include"
        });
      if (s.status !== a.OK) throw new l(o(), s.status);
      return s.json()
    }
    async addUserNote(t, e, n) {
      const s = n == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
        i = await this.request(s, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            userId: t,
            note: e
          })
        });
      if (i.status !== a.OK) throw new l(o(), i.status)
    }
    async getUserPermissions(t) {
      const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(o(), e.status);
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
      if (n.status !== a.OK) throw new l(o(), n.status);
      const s = await n.json();
      return Array.isArray(s == null ? void 0 : s.permissions) ? s.permissions : []
    }
    async getUserPurchases(t) {
      const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(o(), e.status);
      const n = await e.json();
      return (Array.isArray(n == null ? void 0 : n.purchases) ? n.purchases : []).map(i => {
        const u = i.is_dollar ?? i.isDollar ?? i.currency ?? i.Currency ?? 0;
        let c;
        if (typeof u == "string") {
          const y = u.toLowerCase();
          c = y === "usd" || y === "dollar" || y === "true"
        } else typeof u == "number" ? c = u !== 0 : c = !!u;
        const _ = typeof i.createdAt == "string" ? i.createdAt : i.CreatedAt ? new Date(i.CreatedAt).toISOString() : "",
          f = i.product_variant ?? i.productVariant,
          k = f == null || f === "" ? null : Number(f);
        return {
          product_name: String(i.productName ?? i.product_name ?? ""),
          amount: Number(i.amount ?? 0),
          price: Number(i.price ?? 0),
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
        i = await this.request(s, {
          method: "GET",
          credentials: "include"
        });
      if (i.status !== a.OK) throw new l(o(), i.status);
      const u = await i.json(),
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
      if (n.status !== a.OK) throw new l(o(), n.status);
      const s = await n.json(),
        i = Array.isArray(s == null ? void 0 : s.tickets) ? s.tickets : [],
        u = typeof(s == null ? void 0 : s.total) == "number" ? s.total : i.length,
        c = typeof(s == null ? void 0 : s.matchedTotal) == "number" ? s.matchedTotal : u,
        _ = typeof(s == null ? void 0 : s.reviewedTotal) == "number" ? s.reviewedTotal : 0;
      return {
        tickets: i,
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
      if (e.status !== a.OK) throw new l(o(), e.status);
      return e.json()
    }
    async getTicketOverturnInfo(t) {
      const e = await this.request(`/staff/dashboard/all-tickets/overturn-info?ticketId=${encodeURIComponent(t)}`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== a.OK) throw new l(o(), e.status);
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
      if (s.status !== a.OK) throw new l(o(), s.status);
      const i = await s.json();
      return i == null ? void 0 : i.translation
    }
    mapTicketsToReportRows(t, e) {
      var s, i, u, c, _;
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
            name: ((i = f.handledBy) == null ? void 0 : i.name) ?? "Moderator",
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
      if (n.status !== a.OK) throw new l(o(), n.status);
      return n.json()
    }
    async getTicketsKpi(t) {
      const e = new URLSearchParams;
      e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
      const n = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== a.OK) throw new l(o(), n.status);
      return n.json()
    }
  }
}

function qy(r) {
  return class extends r {
    async getNotificationCount() {
      const t = await this.request("/notification/count", {
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
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
      if (s.status !== a.OK) throw new l(o(), s.status);
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
      if (e.status !== a.OK) throw new l(o(), e.status);
      return e.json()
    }
    async postNotificationMarkReadAll() {
      const t = await this.request("/notification/mark-read/all", {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new l(o(), t.status);
      return t.json()
    }
  }
}

function Cy(r) {
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
      if (e.status === a.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(et());
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
      if (e.status !== a.OK) throw e.status === a.NOT_FOUND ? new Error(gt()) : e.status === a.FORBIDDEN ? new Error(bt()) : e.status === a.CONFLICT ? new Error(yt()) : new Error(o())
    }
    async getPlayAccountId() {
      const t = await this.request("/payment/play/account-id", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new Error(o());
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
      if (e.status === a.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(et());
      if (e.status !== a.OK) throw new Error(o());
      return e.json()
    }
    async verifyPendingPlayPurchases() {
      const t = await this.request("/payment/play/verify-pending", {
        method: "POST",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new Error(o());
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
      if (e.status !== a.OK) throw new Error(o());
      return e.json()
    }
    async listPlayPurchaseHistory() {
      const t = await this.request("/payment/play/history", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== a.OK) throw new Error(o());
      return t.json()
    }
  }
}
const zy = [{
    tileSize: 1e3,
    zoom: 11
  }],
  Ky = 4,
  Fy = 6e3,
  $y = [{
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
  Gy = {
    android: {
      googlePlayBilling: {
        price: 1.2
      },
      appName: "live.wplace.twa"
    }
  },
  Vy = {
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
  Hy = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  Wy = {
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
  Yy = {
    tools: {
      wayback: {
        limit: 1e4
      }
    }
  },
  Jy = [{
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
  Qy = {
    areaRadius: 250
  },
  j = {
    seasons: zy,
    regionSize: Ky,
    refreshIntervalMs: Fy,
    colors: $y,
    platforms: Gy,
    products: Vy,
    countries: Hy,
    permissions: Wy,
    settings: Yy,
    worldCupStore: Jy,
    moderation: Qy
  },
  Ue = j,
  Xy = j.seasons,
  Et = j.seasons.length - 1,
  Xb = j.seasons[Et].zoom,
  Zb = j.seasons[Et].tileSize,
  ev = j.permissions,
  Zy = j.settings,
  eb = j.platforms.android,
  tv = eb.googlePlayBilling.price,
  rv = j.worldCupStore;

function nv(r) {
  return Ue.countries[r - 1]
}

function Ke(r) {
  return Ke.map.get(r)
}(r => {
  r.sharedProducts = Object.entries(Ue.products).map(([t, e]) => ({
    ...e,
    productId: t
  })).filter(t => "lookupKey" in t), r.map = tb(r.sharedProducts, t => t.lookupKey)
})(Ke || (Ke = {}));

function tb(r, t) {
  const e = new Map;
  for (const n in r) {
    const s = Reflect.get(r, n),
      i = t(s, n, r);
    e.set(i, s)
  }
  return e
}

function ut(r, t) {
  const e = {};
  for (const n of r) {
    const s = t(n),
      i = e[s];
    i ? i.push(n) : e[s] = [n]
  }
  return e
}

function sv(r, t) {
  const e = {};
  for (const n of r) {
    const s = t(n);
    e[s] = n
  }
  return e
}

function rb(r) {
  return class extends r {
    async paint(t) {
      const e = ut(t, c => `t=(${c.tile[0]},${c.tile[1]}),s=${c.season}`),
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
        i = await ee.getHeaders(s),
        u = await this.request("/paint", {
          method: "POST",
          body: s,
          headers: i,
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
          if (u.headers.get("cf-mitigated") === "challenge") throw new Error(rt());
          const c = await u.json();
          if ((c == null ? void 0 : c.error) === "timeout") {
            const _ = new Date(Date.now() + ((c == null ? void 0 : c.durationMs) ?? 0));
            throw new Error(ot({
              until: _.toLocaleString()
            }))
          }
          if ((c == null ? void 0 : c.error) === "refresh") throw new Error(st());
          if ((c == null ? void 0 : c.error) === "color-not-owned") throw new Error(nt());
          if ((c == null ? void 0 : c.error) === "event-pixel-present") throw new Error(tt());
          if ((c == null ? void 0 : c.error) === "challenge-required")
            if (c.tier) {
              if (await pt(c.tier)) return this.paint(t);
              throw new Error(He())
            } else console.error("Challenge required but no tier provided", c);
          if ((c == null ? void 0 : c.error) === "verification-required") {
            const f = (await jt().get()).sealed_result;
            if (f) return await this.verifyAnticheat(f), this.paint(t);
            throw new Error(o())
          }
          V.refresh()
        } else throw new Error(o())
      }
      return {
        worldCupQuestCompleted: !1
      }
    }
    async selectAreaClear(t, e) {
      return this.sendPaintRequests(t, (n, s, i) => `/staff/tools/select-area/clear/s${n}/pixel/${s}/${i}`, e)
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
      if (e.status !== a.OK) throw new l(o(), e.status);
      return e.json()
    }
    async getReverseTimestamps(t, e = {}) {
      const {
        mode: n = "depth",
        beforeDepth: s,
        beforeTimestamp: i
      } = e, u = await this.request("/staff/tools/select-area/reverse/timestamps", {
        method: "POST",
        body: JSON.stringify({
          sessionId: t,
          mode: n,
          beforeDepth: s,
          beforeTimestamp: i
        }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (u.status !== a.OK) throw new l(o(), u.status);
      return u.json()
    }
    async getReversePreview(t, e) {
      const {
        mode: n = "depth",
        snapshotDepth: s,
        timestamp: i
      } = e, u = await this.request("/staff/tools/select-area/reverse/preview", {
        method: "POST",
        body: JSON.stringify({
          sessionId: t,
          mode: n,
          snapshotDepth: s,
          timestamp: i
        }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (u.status !== a.OK) throw new l(o(), u.status);
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
          i = (s == null ? void 0 : s.error) ?? "";
        throw i === "timelapse_too_many_events" ? new l(hh(), a.BAD_REQUEST) : new l(typeof i == "string" && i ? i : o(), a.BAD_REQUEST)
      }
      if (n.status !== a.OK) throw new l(o(), n.status);
      return n.arrayBuffer()
    }
    async applyReverse(t, e) {
      const {
        mode: n = "depth",
        snapshotDepth: s,
        timestamp: i
      } = e, u = await this.request("/staff/tools/select-area/reverse/apply", {
        method: "POST",
        body: JSON.stringify({
          sessionId: t,
          mode: n,
          snapshotDepth: s,
          timestamp: i
        }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (u.status !== a.OK) throw new l(o(), u.status);
      return u.json()
    }
    async sendPaintRequests(t, e, n, s) {
      const i = ut(t, _ => `t=(${_.tile[0]},${_.tile[1]}),s=${_.season}`),
        c = (await Promise.all(Object.values(i).map(async _ => {
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
          if (_.headers.get("cf-mitigated") === "challenge") throw new Error(rt());
          const f = await _.json();
          if ((f == null ? void 0 : f.error) === "timeout") {
            const k = new Date(Date.now() + ((f == null ? void 0 : f.durationMs) ?? 0));
            throw new Error(ot({
              until: k.toLocaleString()
            }))
          }
          if ((f == null ? void 0 : f.error) === "refresh") throw new Error(st());
          if ((f == null ? void 0 : f.error) === "color-not-owned") throw new Error(nt());
          if ((f == null ? void 0 : f.error) === "event-pixel-present") throw new Error(tt());
          V.refresh()
        } else throw new Error(o())
      }
    }
    async adminAutoPainterPaint(t, e, n) {
      const s = nb(t),
        i = await sb(s),
        u = new FormData;
      u.append("fingerprint", e), u.append("season", s.season.toString()), u.append("px0", s.offsetX.toString()), u.append("py0", s.offsetY.toString()), u.append("width", s.width.toString()), u.append("height", s.height.toString()), u.append("pixels", t.length.toString()), u.append("bitmap", i, "auto-painter.png"), u.append("userId", n.toString());
      const c = await this.request("/staff/tools/auto-painter/paint", {
        method: "POST",
        body: u,
        credentials: "include"
      });
      if (c.status === a.FORBIDDEN) {
        const _ = await c.json().catch(() => null);
        if (typeof(_ == null ? void 0 : _.charges) == "number") throw new Error(Hf({
          charges: Math.floor(_.charges),
          pixels: t.length
        }));
        const f = typeof(_ == null ? void 0 : _.error) == "string" ? _.error.trim() : "";
        throw f && f !== "Forbidden" ? new Error(f) : new Error("Auto painter is restricted to administrators.")
      }
      if (c.status !== a.OK) throw new Error(o());
      return c.json()
    }
    async getPixelInfo({
      season: t,
      tile: [e, n],
      pixel: [s, i]
    }) {
      const u = new URLSearchParams;
      u.set("x", String(s)), u.set("y", String(i));
      const c = await this.request(`/s${t}/pixel/${e}/${n}?${u.toString()}`, {
        credentials: "include"
      });
      if (c.status !== a.OK) {
        const _ = await c.text();
        throw new Error(Ho({
          err: _
        }))
      }
      return c.json()
    }
    async getPixelAreaInfo({
      season: t,
      tile: [e, n],
      p0: [s, i],
      p1: [u, c]
    }) {
      const _ = await this.request(`/staff/tools/select-area/s${t}/${e}/${n}?x0=${s}&y0=${i}&x1=${u}&y1=${c}`, {
        credentials: "include"
      });
      if (_.status !== a.OK) {
        const N = await _.text();
        throw console.error("Error while fetching pixel area info", N), new Error(o())
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

function nb(r) {
  var P, L;
  if (!r.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = r[0].season;
  for (const N of r)
    if (N.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (P = Ue.seasons) == null ? void 0 : P[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const n = e.tileSize;
  let s = Number.POSITIVE_INFINITY,
    i = Number.POSITIVE_INFINITY,
    u = Number.NEGATIVE_INFINITY,
    c = Number.NEGATIVE_INFINITY;
  const _ = r.map(N => {
      const R = Math.round(N.tile[0] * n + N.pixel[0]),
        A = Math.round(N.tile[1] * n + N.pixel[1]);
      return R < s && (s = R), A < i && (i = A), R > u && (u = R), A > c && (c = A), {
        x: R,
        y: A,
        colorIdx: N.colorIdx
      }
    }),
    f = u - s + 1,
    k = c - i + 1;
  if (!Number.isFinite(f) || !Number.isFinite(k) || f <= 0 || k <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const y = new Uint8ClampedArray(f * k * 4);
  for (const {
      x: N,
      y: R,
      colorIdx: A
    }
    of _) {
    const We = (L = Ue.colors) == null ? void 0 : L[A];
    if (!We) throw new Error(`Unknown palette color index: ${A}`);
    const Nt = N - s,
      Se = ((R - i) * f + Nt) * 4,
      [St, At, Rt] = We.rgb;
    y[Se] = St, y[Se + 1] = At, y[Se + 2] = Rt, y[Se + 3] = A === 0 ? 1 : 255
  }
  return {
    data: y,
    width: f,
    height: k,
    offsetX: s,
    offsetY: i,
    season: t
  }
}
async function sb(r) {
  const t = ab(r.width, r.height),
    e = t.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const n = e.createImageData(r.width, r.height);
  return n.data.set(r.data), e.putImageData(n, 0, 0), "convertToBlob" in t ? t.convertToBlob({
    type: "image/png"
  }) : new Promise((s, i) => {
    t.toBlob(u => {
      if (!u) {
        i(new Error("Failed to encode auto painter bitmap."));
        return
      }
      s(u)
    }, "image/png")
  })
}

function ab(r, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(r, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = r, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}

function ib(r) {
  return class extends r {
    validWaybackInput(t) {
      const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
        n = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < Xy.length,
        s = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= Zy.tools.wayback.limit,
        i = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
        u = t.cursorTs !== void 0,
        c = t.cursorUserId !== void 0,
        _ = t.cursorAllianceId !== void 0,
        f = t.cursorPixelsCount !== void 0,
        k = u || c || _ || f,
        y = u && c && _ && f;
      let P = !0;
      return k && (P = y && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!n || !s || !i || !e || !P)
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
        i = await this.request(s.length > 0 ? `${n}?${s}` : n, {
          method: "GET",
          credentials: "include"
        });
      if (i.status === a.FORBIDDEN) throw new Error("Access denied");
      if (i.status !== a.OK) throw new Error("Failed to fetch wayback events");
      return i.json()
    }
  }
}
class ob extends Sy(Ay(Ry(Dy(Py(xy(jy(Ly(By(qy(Cy(rb(ib(Ny))))))))))))) {}
const z = new ob(_t);
typeof window < "u" && Lt(() => {
  let r = z.online;
  Mt(() => {
    const t = z.online;
    t && !r && window.dispatchEvent(new CustomEvent("wplace:online")), r = t
  })
});

function Tt(r, t) {
  if (!(r != null && r.length)) return !1;
  for (const e of r)
    if (e === t) return !0;
  return !1
}

function cb(r, t) {
  for (const e of t)
    if (Tt(r, e)) return !0;
  return !1
}

function Ot(r) {
  const t = atob(r),
    e = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
  return e
}

function ub(r) {
  if (typeof Buffer < "u") return Buffer.from(r).toString("base64");
  let t = "";
  for (let e = 0; e < r.length; e++) t += String.fromCharCode(r[e]);
  return btoa(t)
}
class lb {
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
    const i = this.bytes.length - 1 - n;
    e ? this.bytes[i] = this.bytes[i] | 1 << s : this.bytes[i] = this.bytes[i] & ~(1 << s)
  }
  get(t) {
    const e = Math.floor(t / 8),
      n = t % 8,
      s = this.bytes.length;
    return e > s ? !1 : (this.bytes[s - 1 - e] & 1 << n) !== 0
  }
}

function av(r) {
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

function iv(r) {
  if (typeof FileReader > "u") {
    const t = r.type || "application/octet-stream";
    return r.arrayBuffer().then(e => `data:${t};base64,${ub(new Uint8Array(e))}`)
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

function ov(r) {
  if (!r.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = r.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = r.slice(5, t),
    n = r.slice(t + 1),
    s = e.indexOf(";base64"),
    i = (s === -1 ? e : e.slice(0, s)) || "text/plain";
  if (s !== -1) {
    const u = Ot(n),
      c = new Uint8Array(u.byteLength);
    return c.set(u), new Blob([c], {
      type: i
    })
  }
  return new Blob([decodeURIComponent(n)], {
    type: i
  })
}

function cv(...r) {
  return r.filter(Boolean).join(" ")
}
const db = typeof document < "u";
let lt = 0;
var me, ge, we;
class _b {
  constructor() {
    b(this, me, I(xe([])));
    b(this, ge, I(xe([])));
    b(this, we, t => {
      const e = this.toasts.findIndex(n => n.id === t);
      return e === -1 ? null : e
    });
    g(this, "addToast", t => {
      db && this.toasts.unshift(t)
    });
    g(this, "updateToast", ({
      id: t,
      data: e,
      type: n,
      message: s
    }) => {
      const i = this.toasts.findIndex(c => c.id === t),
        u = this.toasts[i];
      this.toasts[i] = {
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
      } = t, s = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((c = t.id) == null ? void 0 : c.length) > 0 ? t.id : lt++, i = t.dismissable === void 0 ? !0 : t.dismissable, u = t.type === void 0 ? "default" : t.type;
      return Je(() => {
        this.toasts.find(f => f.id === s) ? this.updateToast({
          id: s,
          data: t,
          type: u,
          message: e,
          dismissable: i
        }) : this.addToast({
          ...n,
          id: s,
          title: e,
          dismissable: i,
          type: u
        })
      }), s
    });
    g(this, "dismiss", t => (Je(() => {
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
      let n;
      e.loading !== void 0 && (n = this.create({
        ...e,
        promise: t,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const s = t instanceof Promise ? t : t();
      let i = n !== void 0;
      return s.then(u => {
        if (typeof u == "object" && u && "ok" in u && typeof u.ok == "boolean" && !u.ok) {
          i = !1;
          const c = fb(u);
          this.create({
            id: n,
            type: "error",
            message: c
          })
        } else if (e.success !== void 0) {
          i = !1;
          const c = typeof e.success == "function" ? e.success(u) : e.success;
          this.create({
            id: n,
            type: "success",
            message: c
          })
        }
      }).catch(u => {
        if (e.error !== void 0) {
          i = !1;
          const c = typeof e.error == "function" ? e.error(u) : e.error;
          this.create({
            id: n,
            type: "error",
            message: c
          })
        }
      }).finally(() => {
        var u;
        i && (this.dismiss(n), n = void 0), (u = e.finally) == null || u.call(e)
      }), n
    });
    g(this, "custom", (t, e) => {
      const n = (e == null ? void 0 : e.id) || lt++;
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
    return T(p(this, me))
  }
  set toasts(t) {
    O(p(this, me), t, !0)
  }
  get heights() {
    return T(p(this, ge))
  }
  set heights(t) {
    O(p(this, ge), t, !0)
  }
}
me = new WeakMap, ge = new WeakMap, we = new WeakMap;

function fb(r) {
  return r && typeof r == "object" && "status" in r ? `HTTP error! Status: ${r.status}` : `Error! ${r}`
}
const D = new _b;

function pb(r, t) {
  return D.create({
    message: r,
    ...t
  })
}
var Me;
class uv {
  constructor() {
    b(this, Me, Q(() => D.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return T(p(this, Me))
  }
}
Me = new WeakMap;
const hb = pb,
  mb = Object.assign(hb, {
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
var ye, be, ve, Ee, Te, Oe, ke, Ie;
class gb {
  constructor() {
    g(this, "channel", new BroadcastChannel("user-channel"));
    b(this, ye, I());
    b(this, be, I(!0));
    b(this, ve, I());
    b(this, Ee, I(Date.now()));
    b(this, Te, Q(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((ze.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    b(this, Oe, Q(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    b(this, ke, Q(() => {
      var t;
      return new lb(Ot(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    b(this, Ie, Q(() => {
      var n;
      if (!((n = this.data) != null && n.timeoutUntil)) return;
      const t = new Date(this.data.timeoutUntil),
        e = t.getTime();
      if (!(!Number.isFinite(e) || e <= ze.now)) return t
    }));
    this.channel && (this.channel.onmessage = t => {
      const e = JSON.parse(t.data);
      e.type === "refresh" ? (this.data = e.data, this.lastFetch = Date.now()) : e.type === "logout" && (this.data = void 0)
    })
  }
  get data() {
    return T(p(this, ye))
  }
  set data(t) {
    O(p(this, ye), t, !0)
  }
  get loading() {
    return T(p(this, be))
  }
  set loading(t) {
    O(p(this, be), t, !0)
  }
  get notificationCount() {
    return T(p(this, ve))
  }
  set notificationCount(t) {
    O(p(this, ve), t, !0)
  }
  get lastFetch() {
    return T(p(this, Ee))
  }
  set lastFetch(t) {
    O(p(this, Ee), t)
  }
  get charges() {
    return T(p(this, Te))
  }
  set charges(t) {
    O(p(this, Te), t)
  }
  get cooldown() {
    return T(p(this, Oe))
  }
  set cooldown(t) {
    O(p(this, Oe), t)
  }
  get flagsBitmap() {
    return T(p(this, ke))
  }
  set flagsBitmap(t) {
    O(p(this, ke), t)
  }
  get timeoutUntil() {
    return T(p(this, Ie))
  }
  set timeoutUntil(t) {
    O(p(this, Ie), t)
  }
  async refresh() {
    var t, e;
    try {
      return this.loading = !0, this.data = await z.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && z.getNotificationCount().then(n => {
        this.notificationCount = n
      }).catch(n => {
        console.error("Failed to refresh notification count:", n)
      }), (e = this.data) != null && e.id && ee.setUserId(this.data.id), !0
    } catch (n) {
      return console.error(n), mb.warning(cf(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var t;
    await z.logout(), (t = this.channel) == null || t.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(t) {
    var n;
    return t < 32 ? !0 : ((((n = this.data) == null ? void 0 : n.extraColorsBitmap) ?? 0) & 1 << t - 32) !== 0
  }
  hasPermission(t) {
    var e;
    return Tt((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return cb((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
ye = new WeakMap, be = new WeakMap, ve = new WeakMap, Ee = new WeakMap, Te = new WeakMap, Oe = new WeakMap, ke = new WeakMap, Ie = new WeakMap;
const V = new gb;
let w;
const U = new Array(128).fill(void 0);
U.push(void 0, null, !0, !1);

function m(r) {
  return U[r]
}
let Z = U.length;

function E(r) {
  Z === U.length && U.push(U.length + 1);
  const t = Z;
  return Z = U[t], U[t] = r, t
}

function M(r, t) {
  try {
    return r.apply(this, t)
  } catch (e) {
    w.__wbindgen_export_0(E(e))
  }
}

function F(r) {
  return r == null
}
const kt = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && kt.decode();
let X = null;

function Re() {
  return (X === null || X.byteLength === 0) && (X = new Uint8Array(w.memory.buffer)), X
}

function De(r, t) {
  return r = r >>> 0, kt.decode(Re().subarray(r, r + t))
}

function wb(r) {
  r < 132 || (U[r] = Z, Z = r)
}

function dt(r) {
  const t = m(r);
  return wb(r), t
}
let G = null;

function je() {
  return (G === null || G.buffer.detached === !0 || G.buffer.detached === void 0 && G.buffer !== w.memory.buffer) && (G = new DataView(w.memory.buffer)), G
}
let W = 0;
const Pe = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  yb = typeof Pe.encodeInto == "function" ? function(r, t) {
    return Pe.encodeInto(r, t)
  } : function(r, t) {
    const e = Pe.encode(r);
    return t.set(e), {
      read: r.length,
      written: e.length
    }
  };

function Ne(r, t, e) {
  if (e === void 0) {
    const c = Pe.encode(r),
      _ = t(c.length, 1) >>> 0;
    return Re().subarray(_, _ + c.length).set(c), W = c.length, _
  }
  let n = r.length,
    s = t(n, 1) >>> 0;
  const i = Re();
  let u = 0;
  for (; u < n; u++) {
    const c = r.charCodeAt(u);
    if (c > 127) break;
    i[s + u] = c
  }
  if (u !== n) {
    u !== 0 && (r = r.slice(u)), s = e(s, n, n = u + r.length * 3, 1) >>> 0;
    const c = Re().subarray(s + u, s + n),
      _ = yb(r, c);
    u += _.written, s = e(s, n, u, 1) >>> 0
  }
  return W = u, s
}

function bb(r) {
  const t = Ne(r, w.__wbindgen_export_1, w.__wbindgen_export_2),
    e = W;
  w.set_discord_id(t, e)
}

function vb(r) {
  const t = Ne(r, w.__wbindgen_export_1, w.__wbindgen_export_2),
    e = W;
  w.set_fingerprint(t, e)
}

function Eb(r) {
  const t = Ne(r, w.__wbindgen_export_1, w.__wbindgen_export_2),
    e = W;
  w.set_detected_bot(t, e)
}

function Tb(r) {
  let t, e;
  try {
    const i = w.__wbindgen_add_to_stack_pointer(-16),
      u = Ne(r, w.__wbindgen_export_1, w.__wbindgen_export_2),
      c = W;
    w.get_pawtected_endpoint_payload(i, u, c);
    var n = je().getInt32(i + 0, !0),
      s = je().getInt32(i + 4, !0);
    return t = n, e = s, De(n, s)
  } finally {
    w.__wbindgen_add_to_stack_pointer(16), w.__wbindgen_export_3(t, e, 1)
  }
}

function qe(r) {
  w.set_user_id(r)
}

function Ob(r) {
  w.set_cf_likely_automated(r)
}

function kb(r) {
  w.set_automated_clicks(r)
}

function Ib(r) {
  const t = Ne(r, w.__wbindgen_export_1, w.__wbindgen_export_2),
    e = W;
  w.request_url(t, e)
}

function Nb(r) {
  w.set_automated_browser(r)
}
async function Sb(r, t) {
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

function Ab() {
  const r = {};
  return r.wbg = {}, r.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    const e = m(t).buffer;
    return E(e)
  }, r.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return M(function(t, e) {
      const n = m(t).call(m(e));
      return E(n)
    }, arguments)
  }, r.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return M(function(t, e, n) {
      const s = m(t).call(m(e), m(n));
      return E(s)
    }, arguments)
  }, r.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    const e = m(t).crypto;
    return E(e)
  }, r.wbg.__wbg_document_d249400bd7bd996d = function(t) {
    const e = m(t).document;
    return F(e) ? 0 : E(e)
  }, r.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return M(function(t, e) {
      m(t).getRandomValues(m(e))
    }, arguments)
  }, r.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return M(function(t, e) {
      const n = Reflect.get(m(t), m(e));
      return E(n)
    }, arguments)
  }, r.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return M(function(t) {
      return m(t).hasFocus()
    }, arguments)
  }, r.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return M(function(t) {
      const e = m(t).innerWidth;
      return E(e)
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
    return E(e)
  }, r.wbg.__wbg_navigator_1577371c070c8947 = function(t) {
    const e = m(t).navigator;
    return E(e)
  }, r.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    const e = new Uint8Array(m(t));
    return E(e)
  }, r.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    const n = new Function(De(t, e));
    return E(n)
  }, r.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, n) {
    const s = new Uint8Array(m(t), e >>> 0, n >>> 0);
    return E(s)
  }, r.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return E(e)
  }, r.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    const e = m(t).node;
    return E(e)
  }, r.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, r.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    const e = m(t).process;
    return E(e)
  }, r.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return M(function(t, e) {
      m(t).randomFillSync(dt(e))
    }, arguments)
  }, r.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return M(function() {
      const t = module.require;
      return E(t)
    }, arguments)
  }, r.wbg.__wbg_set_65595bdd868b3009 = function(t, e, n) {
    m(t).set(m(e), n >>> 0)
  }, r.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return F(t) ? 0 : E(t)
  }, r.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return F(t) ? 0 : E(t)
  }, r.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return F(t) ? 0 : E(t)
  }, r.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return F(t) ? 0 : E(t)
  }, r.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, n) {
    const s = m(t).subarray(e >>> 0, n >>> 0);
    return E(s)
  }, r.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    const e = m(t).versions;
    return E(e)
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
    return E(t)
  }, r.wbg.__wbindgen_number_get = function(t, e) {
    const n = m(e),
      s = typeof n == "number" ? n : void 0;
    je().setFloat64(t + 8, F(s) ? 0 : s, !0), je().setInt32(t + 0, !F(s), !0)
  }, r.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = m(t);
    return E(e)
  }, r.wbg.__wbindgen_object_drop_ref = function(t) {
    dt(t)
  }, r.wbg.__wbindgen_string_new = function(t, e) {
    const n = De(t, e);
    return E(n)
  }, r.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(De(t, e))
  }, r
}

function Rb(r, t) {
  return w = r.exports, It.__wbindgen_wasm_module = t, G = null, X = null, w
}
async function It(r) {
  if (w !== void 0) return w;
  typeof r < "u" && (Object.getPrototypeOf(r) === Object.prototype ? {
    module_or_path: r
  } = r : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof r > "u" && (r = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = Ab();
  (typeof r == "string" || typeof Request == "function" && r instanceof Request || typeof URL == "function" && r instanceof URL) && (r = fetch(r));
  const {
    instance: e,
    module: n
  } = await Sb(await r, t);
  return Rb(e, n)
}
class Db {
  constructor() {
    g(this, "interval");
    g(this, "storagesEmpty", !1);
    g(this, "storages", [new Le, new Fe, new $e, new xb]);
    g(this, "pawtectLoaded");
    g(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!V.data || this.storagesEmpty || localStorage.getItem(Le.KEY))) {
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
    const e = C.day;
    for (const s of this.storages) {
      const i = s.get();
      if (i && !(i.timestamp + e < Date.now()) && i.userId !== t) return !0
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
        await It(Bt), (t = V.data) != null && t.id && qe(V.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: Pb((n, s) => {
            let i = null;
            return n instanceof Request ? i = n.url : n instanceof URL ? i = n.href : typeof n == "string" && (i = n), i !== null && !i.startsWith("/") && Ib(i), e.call(window, n, s)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(t) {
    await this.loadPawtect(), qe(t)
  }
  async setCfLikelyAutomated(t) {
    await this.loadPawtect(), Ob(t)
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
    if (!await this.loadPawtect()) throw new Error(ug());
    const n = navigator.webdriver,
      [s, i] = await Promise.all([Ge(), jr().catch(u => (console.error(u), {
        bot: !1
      }))]);
    return qe(V.data.id), bb(V.data.discordId ?? ""), vb(s), Nb(n), kb(ze.automatedClicks), i.bot && Eb(i.botKind ?? "unknown"), Tb(t)
  }
}

function Pb(r) {
  return r.bind().bind()
}
const B = class B {
  static codec(t) {
    const e = new TextEncoder().encode(this.XOR_KEY),
      n = new Uint8Array(t.length);
    for (let s = 0; s < t.length; s++) n[s] = t[s] ^ e[s % e.length];
    return n
  }
  get() {
    try {
      const t = localStorage.getItem(B.KEY);
      if (!t) return;
      const e = Uint8Array.from(atob(t), s => s.charCodeAt(0)),
        n = new TextDecoder().decode(B.codec(e));
      return JSON.parse(n)
    } catch {
      return
    }
  }
  set(t) {
    const e = new TextEncoder().encode(JSON.stringify(t)),
      n = B.codec(e);
    localStorage.setItem(B.KEY, btoa(String.fromCharCode(...n)))
  }
};
g(B, "KEY", "ui_layout_v3"), g(B, "XOR_KEY", "wplace-prefs");
let Le = B;
const q = class q {
  get() {
    try {
      const t = sessionStorage.getItem(q.KEY);
      if (!t) return;
      let e = "";
      for (let n = 0; n < t.length; n += 4) {
        const s = parseInt(t.slice(n, n + 4), 16);
        e += String.fromCharCode(s - q.SHIFT & 65535)
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
      const i = s.charCodeAt(0) + q.SHIFT & 65535;
      n += i.toString(16).padStart(4, "0")
    }
    sessionStorage.setItem(q.KEY, n)
  }
};
g(q, "KEY", "nav.cursor"), g(q, "SHIFT", 13);
let Fe = q;
const H = class H {
  get() {
    const t = document.cookie.match(new RegExp("(?:^|; )" + H.KEY + "=([^;]*)"));
    if (t) try {
      const [e, n] = decodeURIComponent(t[1]).split("."), s = parseInt(e, 36), i = parseInt(n, 36);
      return !Number.isFinite(s) || !Number.isFinite(i) ? void 0 : {
        userId: s,
        timestamp: i
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
let $e = H;
class xb {
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
const ee = new Db;
export {
  Gb as $, E_ as A, ct as B, fy as C, Ke as D, eb as E, D as F, tv as G, cv as H, uv as I, $b as J, Kb as K, S as L, Cb as M, qb as N, zb as O, Xb as P, Mr as Q, Zy as R, ev as S, C as T, Et as U, nv as V, Fb as W, Uo as X, Xy as Y, iv as Z, ov as _, Vb as a, Jb as a0, Qb as a1, ug as a2, _m as a3, Hb as a4, Yb as a5, sv as a6, rv as a7, rl as a8, et as a9, z as b, Zb as c, Ue as d, a as e, o as f, ze as g, ji as h, Ru as i, su as j, gs as k, Pc as l, ee as m, cf as n, ht as o, He as p, av as q, Gc as r, Wb as s, mb as t, V as u, pt as v, Fu as w, gu as x, Wi as y, Rs as z
};