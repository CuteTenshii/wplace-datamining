var er = Object.defineProperty;
var st = r => {
  throw TypeError(r)
};
var tr = (r, t, e) => t in r ? er(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var w = (r, t, e) => tr(r, typeof t != "symbol" ? t + "" : t, e),
  rr = (r, t, e) => t.has(r) || st("Cannot " + e);
var h = (r, t, e) => (rr(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  v = (r, t, e) => t.has(r) ? st("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e);
import {
  j as nr,
  P as zt,
  g as at,
  k as Xe
} from "./CftFOTTa.js";
import {
  e as A,
  i as E,
  h as k,
  g as $e,
  bT as ar,
  y as ir,
  B as ot,
  u as ne
} from "./B20EPEO9.js";
import {
  g as _
} from "./BhCkpOlh.js";
const sr = "" + new URL("../assets/pawtect_wasm_bg.8VPqYlMZ.wasm", import.meta.url).href;
var or = "2.0.0";
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
class O extends Error {
  constructor(t, e) {
    super(e), this.state = t, this.name = "BotdError", Object.setPrototypeOf(this, O.prototype)
  }
}

function cr(r, t) {
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
async function ur(r) {
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
      s instanceof O ? t[n] = {
        state: s.state,
        error: `${s.name}: ${s.message}`
      } : t[n] = {
        state: -3,
        error: s instanceof Error ? `${s.name}: ${s.message}` : String(s)
      }
    }
  })), t
}

function lr({
  appVersion: r
}) {
  if (r.state !== 0) return !1;
  if (/headless/i.test(r.value)) return p.HeadlessChrome;
  if (/electron/i.test(r.value)) return p.Electron;
  if (/slimerjs/i.test(r.value)) return p.SlimerJS
}

function Ce(r, t) {
  return r.indexOf(t) !== -1
}

function z(r, t) {
  return r.indexOf(t) !== -1
}

function _r(r, t) {
  if ("find" in r) return r.find(t);
  for (let e = 0; e < r.length; e++)
    if (t(r[e], e, r)) return r[e]
}

function ct(r) {
  return Object.getOwnPropertyNames(r)
}

function Ze(r, ...t) {
  for (const e of t)
    if (typeof e == "string") {
      if (Ce(r, e)) return !0
    } else if (_r(r, a => e.test(a)) != null) return !0;
  return !1
}

function X(r) {
  return r.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function dr({
  documentElementKeys: r
}) {
  if (r.state !== 0) return !1;
  if (Ze(r.value, "selenium", "webdriver", "driver")) return p.Selenium
}

function fr({
  errorTrace: r
}) {
  if (r.state !== 0) return !1;
  if (/PhantomJS/i.test(r.value)) return p.PhantomJS
}

function hr({
  evalLength: r,
  browserKind: t,
  browserEngineKind: e
}) {
  if (r.state !== 0 || t.state !== 0 || e.state !== 0) return;
  const n = r.value;
  return e.value === "unknown" ? !1 : n === 37 && !Ce(["webkit", "gecko"], e.value) || n === 39 && !Ce(["internet_explorer"], t.value) || n === 33 && !Ce(["chromium"], e.value)
}

function pr({
  functionBind: r
}) {
  if (r.state === -2) return p.PhantomJS
}

function mr({
  languages: r
}) {
  if (r.state === 0 && r.value.length === 0) return p.HeadlessChrome
}

function gr({
  mimeTypesConsistent: r
}) {
  if (r.state === 0 && !r.value) return p.Unknown
}

function wr({
  notificationPermissions: r,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== "chrome") return !1;
  if (r.state === 0 && r.value) return p.HeadlessChrome
}

function yr({
  pluginsArray: r
}) {
  if (r.state === 0 && !r.value) return p.HeadlessChrome
}

function vr({
  pluginsLength: r,
  android: t,
  browserKind: e,
  browserEngineKind: n
}) {
  if (!(r.state !== 0 || t.state !== 0 || e.state !== 0 || n.state !== 0) && !(e.value !== "chrome" || t.value || n.value !== "chromium") && r.value === 0) return p.HeadlessChrome
}

function br({
  process: r
}) {
  var t;
  if (r.state !== 0) return !1;
  if (r.value.type === "renderer" || ((t = r.value.versions) === null || t === void 0 ? void 0 : t.electron) != null) return p.Electron
}

function Er({
  productSub: r,
  browserKind: t
}) {
  if (r.state !== 0 || t.state !== 0) return !1;
  if ((t.value === "chrome" || t.value === "safari" || t.value === "opera" || t.value === "wechat") && r.value !== "20030107") return p.Unknown
}

function Or({
  userAgent: r
}) {
  if (r.state !== 0) return !1;
  if (/PhantomJS/i.test(r.value)) return p.PhantomJS;
  if (/Headless/i.test(r.value)) return p.HeadlessChrome;
  if (/Electron/i.test(r.value)) return p.Electron;
  if (/slimerjs/i.test(r.value)) return p.SlimerJS
}

function kr({
  webDriver: r
}) {
  if (r.state === 0 && r.value) return p.HeadlessChrome
}

function Tr({
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

function qr({
  windowExternal: r
}) {
  if (r.state !== 0) return !1;
  if (/Sequentum/i.test(r.value)) return p.Sequentum
}

function Ar({
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

function Sr({
  distinctiveProps: r
}) {
  if (r.state !== 0) return !1;
  const t = r.value;
  let e;
  for (e in t)
    if (t[e]) return e
}
const Nr = {
  detectAppVersion: lr,
  detectDocumentAttributes: dr,
  detectErrorTrace: fr,
  detectEvalLengthInconsistency: hr,
  detectFunctionBind: pr,
  detectLanguagesLengthInconsistency: mr,
  detectNotificationPermissions: wr,
  detectPluginsArray: yr,
  detectPluginsLengthInconsistency: vr,
  detectProcess: br,
  detectUserAgent: Or,
  detectWebDriver: kr,
  detectWebGL: Tr,
  detectWindowExternal: qr,
  detectWindowSize: Ar,
  detectMimeTypesConsistent: gr,
  detectProductSub: Er,
  detectDistinctiveProperties: Sr
};

function Ir() {
  const r = navigator.appVersion;
  if (r == null) throw new O(-1, "navigator.appVersion is undefined");
  return r
}

function Rr() {
  if (document.documentElement === void 0) throw new O(-1, "document.documentElement is undefined");
  const {
    documentElement: r
  } = document;
  if (typeof r.getAttributeNames != "function") throw new O(-2, "document.documentElement.getAttributeNames is not a function");
  return r.getAttributeNames()
}

function Dr() {
  try {
    null[0]()
  } catch (r) {
    if (r instanceof Error && r.stack != null) return r.stack.toString()
  }
  throw new O(-3, "errorTrace signal unexpected behaviour")
}

function Pr() {
  return eval.toString().length
}

function jr() {
  if (Function.prototype.bind === void 0) throw new O(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function it() {
  var r, t;
  const e = window,
    n = navigator;
  return X(["webkitPersistentStorage" in n, "webkitTemporaryStorage" in n, n.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : X(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, n.vendor.indexOf("Apple") === 0, "getStorageUpdates" in n, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : X(["buildID" in navigator, "MozAppearance" in ((t = (r = document.documentElement) === null || r === void 0 ? void 0 : r.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function xr() {
  var r;
  const t = (r = navigator.userAgent) === null || r === void 0 ? void 0 : r.toLowerCase();
  return z(t, "edg/") ? "edge" : z(t, "trident") || z(t, "msie") ? "internet_explorer" : z(t, "wechat") ? "wechat" : z(t, "firefox") ? "firefox" : z(t, "opera") || z(t, "opr") ? "opera" : z(t, "chrome") ? "chrome" : z(t, "safari") ? "safari" : "unknown"
}

function zr() {
  const r = it(),
    t = r === "chromium",
    e = r === "gecko",
    n = window,
    a = navigator,
    s = "connection";
  return t ? X([!("SharedWorker" in n), a[s] && "ontypechange" in a[s], !("sinkId" in new Audio)]) >= 2 : e ? X(["onorientationchange" in n, "orientation" in n, /android/i.test(a.appVersion)]) >= 2 : !1
}

function Ur() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function Lr() {
  const r = window;
  return X([!("MediaSettingsRange" in r), "RTCEncodedAudioFrame" in r, "" + r.Intl == "[object Intl]", "" + r.Reflect == "[object Reflect]"]) >= 3
}

function Cr() {
  const r = navigator,
    t = [],
    e = r.language || r.userLanguage || r.browserLanguage || r.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(r.languages)) it() === "chromium" && Lr() || t.push(r.languages);
  else if (typeof r.languages == "string") {
    const n = r.languages;
    n && t.push(n.split(","))
  }
  return t
}

function Mr() {
  if (navigator.mimeTypes === void 0) throw new O(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: r
  } = navigator;
  let t = Object.getPrototypeOf(r) === MimeTypeArray.prototype;
  for (let e = 0; e < r.length; e++) t && (t = Object.getPrototypeOf(r[e]) === MimeType.prototype);
  return t
}
async function Br() {
  if (window.Notification === void 0) throw new O(-1, "window.Notification is undefined");
  if (navigator.permissions === void 0) throw new O(-1, "navigator.permissions is undefined");
  const {
    permissions: r
  } = navigator;
  if (typeof r.query != "function") throw new O(-2, "navigator.permissions.query is not a function");
  try {
    const t = await r.query({
      name: "notifications"
    });
    return window.Notification.permission === "denied" && t.state === "prompt"
  } catch {
    throw new O(-3, "notificationPermissions signal unexpected behaviour")
  }
}

function Kr() {
  if (navigator.plugins === void 0) throw new O(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new O(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function $r() {
  if (navigator.plugins === void 0) throw new O(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new O(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function Fr() {
  const {
    process: r
  } = window, t = "window.process is";
  if (r === void 0) throw new O(-1, `${t} undefined`);
  if (r && typeof r != "object") throw new O(-3, `${t} not an object`);
  return r
}

function Hr() {
  const {
    productSub: r
  } = navigator;
  if (r === void 0) throw new O(-1, "navigator.productSub is undefined");
  return r
}

function Vr() {
  if (navigator.connection === void 0) throw new O(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new O(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function Gr() {
  return navigator.userAgent
}

function Yr() {
  if (navigator.webdriver == null) throw new O(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function Jr() {
  const r = document.createElement("canvas");
  if (typeof r.getContext != "function") throw new O(-2, "HTMLCanvasElement.getContext is not a function");
  const t = r.getContext("webgl");
  if (t === null) throw new O(-4, "WebGLRenderingContext is null");
  if (typeof t.getParameter != "function") throw new O(-2, "WebGLRenderingContext.getParameter is not a function");
  const e = t.getParameter(t.VENDOR),
    n = t.getParameter(t.RENDERER);
  return {
    vendor: e,
    renderer: n
  }
}

function Wr() {
  if (window.external === void 0) throw new O(-1, "window.external is undefined");
  const {
    external: r
  } = window;
  if (typeof r.toString != "function") throw new O(-2, "window.external.toString is not a function");
  return r.toString()
}

function Qr() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function Xr() {
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
    n = ct(window);
  let a = [];
  window.document !== void 0 && (a = ct(window.document));
  for (t in r) {
    const s = r[t];
    if (s !== void 0) {
      const c = s.window === void 0 ? !1 : Ze(n, ...s.window),
        u = s.document === void 0 || !a.length ? !1 : Ze(a, ...s.document);
      e[t] = c || u
    }
  }
  return e
}
const Zr = {
  android: zr,
  browserKind: xr,
  browserEngineKind: it,
  documentFocus: Ur,
  userAgent: Gr,
  appVersion: Ir,
  rtt: Vr,
  windowSize: Qr,
  pluginsLength: $r,
  pluginsArray: Kr,
  errorTrace: Dr,
  productSub: Hr,
  windowExternal: Wr,
  mimeTypesConsistent: Mr,
  evalLength: Pr,
  webGL: Jr,
  webDriver: Yr,
  languages: Cr,
  notificationPermissions: Br,
  documentElementKeys: Rr,
  functionBind: jr,
  process: Fr,
  distinctiveProps: Xr
};
class en {
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
    const [t, e] = cr(this.components, Nr);
    return this.detections = t, e
  }
  async collect() {
    return this.components = await ur(Zr), this.components
  }
}

function tn() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const r = new XMLHttpRequest;
    r.open("get", `https://m1.openfpcdn.io/botd/v${or}/npm-monitoring`, !0), r.send()
  } catch (r) {
    console.error(r)
  }
}
async function rn({
  monitoring: r = !0
} = {}) {
  r && tn();
  const t = new en;
  return await t.collect(), t
}
let Je = null;
async function nn() {
  return await an() ? {
    bot: !1
  } : (await sn()).detect()
}
async function an() {
  var e;
  const r = navigator;
  if (!((e = r.brave) != null && e.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(r.userAgent)) return !1;
  try {
    return await r.brave.isBrave()
  } catch {
    return !1
  }
}

function sn() {
  return Je || (Je = rn({
    monitoring: !1
  })), Je
}
const ut = "theme";
var ce, ue, le, _e, de, fe, he, pe, me, ge, we, ye, ve;
class on {
  constructor() {
    v(this, ce, A(!1));
    v(this, ue, A(!1));
    v(this, le, A(!1));
    v(this, _e, A(!1));
    v(this, de, A(!1));
    v(this, fe, A(0));
    v(this, he, A(!1));
    v(this, pe, A($e(cn())));
    v(this, me, A(null));
    v(this, ge, A(!1));
    v(this, we, A("custom-winter"));
    v(this, ye, A($e(Date.now())));
    v(this, ve, A(void 0));
    setInterval(() => {
      k(h(this, ye), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(ut), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return E(h(this, ce))
  }
  set dropletsDialogOpen(t) {
    k(h(this, ce), t, !0)
  }
  get prismDialogOpen() {
    return E(h(this, ue))
  }
  set prismDialogOpen(t) {
    k(h(this, ue), t, !0)
  }
  get accountConflictDialogOpen() {
    return E(h(this, le))
  }
  set accountConflictDialogOpen(t) {
    k(h(this, le), t, !0)
  }
  get pendingHistoryDialogOpen() {
    return E(h(this, _e))
  }
  set pendingHistoryDialogOpen(t) {
    k(h(this, _e), t, !0)
  }
  get storeDialogOpen() {
    return E(h(this, de))
  }
  set storeDialogOpen(t) {
    k(h(this, de), t, !0)
  }
  get storeTabIndex() {
    return E(h(this, fe))
  }
  set storeTabIndex(t) {
    k(h(this, fe), t, !0)
  }
  get muted() {
    return E(h(this, he))
  }
  set muted(t) {
    k(h(this, he), t, !0)
  }
  get language() {
    return E(h(this, pe))
  }
  set language(t) {
    k(h(this, pe), t, !0)
  }
  get map() {
    return E(h(this, me))
  }
  set map(t) {
    k(h(this, me), t)
  }
  get automatedClicks() {
    return E(h(this, ge))
  }
  set automatedClicks(t) {
    k(h(this, ge), t, !0)
  }
  get theme() {
    return E(h(this, we))
  }
  set theme(t) {
    k(h(this, we), t, !0), localStorage.setItem(ut, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return E(h(this, ye))
  }
  get captcha() {
    return un ? E(h(this, ve)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    k(h(this, ve), t, !0)
  }
}
ce = new WeakMap, ue = new WeakMap, le = new WeakMap, _e = new WeakMap, de = new WeakMap, fe = new WeakMap, he = new WeakMap, pe = new WeakMap, me = new WeakMap, ge = new WeakMap, we = new WeakMap, ye = new WeakMap, ve = new WeakMap;
const et = new on;

function cn() {
  if (navigator.languages && navigator.languages.length > 0) {
    const r = navigator.languages.find(t => t.length === 2);
    if (r) return r
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const un = nr.toLowerCase() !== "false",
  ln = `
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
async function _n() {
  try {
    const r = await fetch(`${zt}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!r.ok) return null;
    const t = await r.json(),
      e = await dn(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function dn(r, t) {
  return new Promise(e => {
    const n = new Blob([ln], {
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
const Ut = 3;
var be, Ee;
class fn {
  constructor() {
    v(this, be, A(null));
    v(this, Ee, A(0))
  }
  get current() {
    return E(h(this, be))
  }
  set current(t) {
    k(h(this, be), t, !0)
  }
  get errorCount() {
    return E(h(this, Ee))
  }
  set errorCount(t) {
    k(h(this, Ee), t, !0)
  }
}
be = new WeakMap, Ee = new WeakMap;
const R = new fn;
async function se(r) {
  if (r === 1) return hn();
  if (r === 2) {
    const t = await Lt();
    return t ? lt("turnstile", t) : !1
  }
  if (r === 3) {
    const t = await pn();
    return t ? lt("hcaptcha", t) : !1
  }
  return r === 4 ? mn() : !1
}
async function hn() {
  for (let r = 0; r < Ut; r++) try {
    const t = await _n();
    if (!t) continue;
    return await $.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}
async function lt(r, t) {
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

function Lt() {
  return Ct(2)
}

function pn() {
  return Ct(3)
}

function Ct(r) {
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

function mn() {
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

function DR(r) {
  const t = R.current;
  !t || t.tier === 4 || (t.resolve(r), R.current = null)
}

function PR() {
  const r = R.current;
  !r || r.tier === 4 || (R.errorCount += 1, R.errorCount >= Ut && (r.resolve(void 0), R.current = null))
}

function jR() {
  const r = R.current;
  !r || r.tier !== 4 || (r.resolve(!0), R.current = null)
}

function xR() {
  const r = R.current;
  r && (r.tier === 4 ? r.resolve(!1) : r.resolve(void 0), R.current = null)
}
var i = (r => (r[r.CONTINUE = 100] = "CONTINUE", r[r.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", r[r.PROCESSING = 102] = "PROCESSING", r[r.EARLY_HINTS = 103] = "EARLY_HINTS", r[r.OK = 200] = "OK", r[r.CREATED = 201] = "CREATED", r[r.ACCEPTED = 202] = "ACCEPTED", r[r.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", r[r.NO_CONTENT = 204] = "NO_CONTENT", r[r.RESET_CONTENT = 205] = "RESET_CONTENT", r[r.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", r[r.MULTI_STATUS = 207] = "MULTI_STATUS", r[r.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", r[r.IM_USED = 226] = "IM_USED", r[r.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", r[r.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", r[r.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", r[r.FOUND = 302] = "FOUND", r[r.SEE_OTHER = 303] = "SEE_OTHER", r[r.NOT_MODIFIED = 304] = "NOT_MODIFIED", r[r.USE_PROXY = 305] = "USE_PROXY", r[r.SWITCH_PROXY = 306] = "SWITCH_PROXY", r[r.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", r[r.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", r[r.BAD_REQUEST = 400] = "BAD_REQUEST", r[r.UNAUTHORIZED = 401] = "UNAUTHORIZED", r[r.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", r[r.FORBIDDEN = 403] = "FORBIDDEN", r[r.NOT_FOUND = 404] = "NOT_FOUND", r[r.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", r[r.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", r[r.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", r[r.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", r[r.CONFLICT = 409] = "CONFLICT", r[r.GONE = 410] = "GONE", r[r.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", r[r.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", r[r.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", r[r.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", r[r.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", r[r.URI_TOO_LONG = 414] = "URI_TOO_LONG", r[r.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", r[r.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", r[r.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", r[r.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", r[r.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", r[r.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", r[r.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", r[r.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", r[r.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", r[r.LOCKED = 423] = "LOCKED", r[r.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", r[r.TOO_EARLY = 425] = "TOO_EARLY", r[r.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", r[r.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", r[r.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", r[r.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", r[r.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", r[r.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", r[r.BAD_GATEWAY = 502] = "BAD_GATEWAY", r[r.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", r[r.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", r[r.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", r[r.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", r[r.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", r[r.LOOP_DETECTED = 508] = "LOOP_DETECTED", r[r.NOT_EXTENDED = 510] = "NOT_EXTENDED", r[r.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", r[r.AWS_ELB_000 = 0] = "AWS_ELB_000", r[r.THIS_IS_FINE = 218] = "THIS_IS_FINE", r[r.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", r[r.METHOD_FAILURE = 420] = "METHOD_FAILURE", r[r.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", r[r.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", r[r.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", r[r.NO_RESPONSE = 444] = "NO_RESPONSE", r[r.RETRY_WITH = 449] = "RETRY_WITH", r[r.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", r[r.REDIRECT_IIS = 451] = "REDIRECT_IIS", r[r.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", r[r.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", r[r.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", r[r.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", r[r.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", r[r.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", r[r.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", r[r.INVALID_TOKEN = 498] = "INVALID_TOKEN", r[r.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", r[r.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", r[r.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", r[r.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", r[r.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", r[r.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", r[r.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", r[r.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", r[r.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", r[r.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", r[r.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", r[r.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", r[r.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", r[r.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", r[r.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", r[r.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", r[r.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", r[r.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", r[r.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", r[r.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", r[r.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", r[r.REQUEST_DENIED = 999] = "REQUEST_DENIED", r))(i || {});
class ae extends Error {}
const gn = () => "A punishment cache reload is already running",
  wn = () => "Um recarregamento do cache de punições já está em andamento",
  yn = () => "处罚缓存重新加载已在进行中",
  vn = () => "Ein Neuladen des Strafen-Caches läuft bereits",
  bn = () => "Ya hay una recarga de la caché de sanciones en curso",
  En = () => "Un rechargement du cache des sanctions est déjà en cours",
  On = () => "Un ricaricamento della cache delle sanzioni è già in corso",
  kn = () => "処罰キャッシュの再読み込みは既に実行中です",
  Tn = () => "Przeładowanie pamięci kar już trwa",
  qn = () => "Перезагрузка кэша наказаний уже выполняется",
  An = () => "Перезавантаження кешу покарань уже виконується",
  Sn = () => "Quá trình tải lại bộ nhớ đệm hình phạt đang chạy",
  Nn = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? gn() : e === "pt" ? wn() : e === "ch" ? yn() : e === "de" ? vn() : e === "es" ? bn() : e === "fr" ? En() : e === "it" ? On() : e === "jp" ? kn() : e === "pl" ? Tn() : e === "ru" ? qn() : e === "uk" ? An() : Sn()
  },
  In = () => "Your account has been suspended for breaking the rules",
  Rn = () => "Sua conta foi suspensa por quebrar as regras",
  Dn = () => "您的账号因违反规则已被暂停",
  Pn = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  jn = () => "Tu cuenta ha sido suspendida por infringir las regras",
  xn = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  zn = () => "Il tuo account è stato sospeso per aver infranto le regole",
  Un = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  Ln = () => "Twoje konto zostało zawieszone za łamanie zasad",
  Cn = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Mn = () => "Ваш обліковий запис було призупинено за порушення правил",
  Bn = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  _t = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? In() : e === "pt" ? Rn() : e === "ch" ? Dn() : e === "de" ? Pn() : e === "es" ? jn() : e === "fr" ? xn() : e === "it" ? zn() : e === "jp" ? Un() : e === "pl" ? Ln() : e === "ru" ? Cn() : e === "uk" ? Mn() : Bn()
  },
  Kn = () => "Alliance name already taken",
  $n = () => "Já possui uma aliança com esse nome",
  Fn = () => "该联盟名称已被占用",
  Hn = () => "Der Allianzname ist bereits vergeben",
  Vn = () => "Ese nombre de alianza ya está en uso",
  Gn = () => "Ce nom d’alliance est déjà pris",
  Yn = () => "Esiste già un'alleanza con questo nome",
  Jn = () => "このアライアンス名は既に使用されています。",
  Wn = () => "Nazwa sojuszu jest już zajęta",
  Qn = () => "Такое название альянса уже используется",
  Xn = () => "Назва альянсу вже зайнята",
  Zn = () => "Tên liên minh đã được sử dụng",
  dt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Kn() : e === "pt" ? $n() : e === "ch" ? Fn() : e === "de" ? Hn() : e === "es" ? Vn() : e === "fr" ? Gn() : e === "it" ? Yn() : e === "jp" ? Jn() : e === "pl" ? Wn() : e === "ru" ? Qn() : e === "uk" ? Xn() : Zn()
  },
  ea = () => "Alliance name exceeded the maximum number of characters",
  ta = () => "O nome da aliança excedeu o número máximo de caracteres",
  ra = () => "联盟名称超过最大字符数限制",
  na = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  aa = () => "El nombre de la alianza superó el número máximo de caracteres",
  ia = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  sa = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  oa = () => "アライアンス名が最大文字数を超えています。",
  ca = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  ua = () => "Название альянса превышает максимальную длину",
  la = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  _a = () => "Tên liên minh vượt quá số ký tự cho phép",
  ft = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ea() : e === "pt" ? ta() : e === "ch" ? ra() : e === "de" ? na() : e === "es" ? aa() : e === "fr" ? ia() : e === "it" ? sa() : e === "jp" ? oa() : e === "pl" ? ca() : e === "ru" ? ua() : e === "uk" ? la() : _a()
  },
  da = () => "Alliance with empty name",
  fa = () => "Aliança com nome vazio",
  ha = () => "名称为空的联盟",
  pa = () => "Allianz mit leerem Namen",
  ma = () => "Alianza con nombre vacío",
  ga = () => "Alliance avec nom vide",
  wa = () => "Alleanza con nome vuoto",
  ya = () => "名前が空のアライアンスです。",
  va = () => "Sojusz z pustą nazwą",
  ba = () => "Альянс с пустым названием",
  Ea = () => "Альянс із порожньою назвою",
  Oa = () => "Liên minh không có tên",
  ka = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? da() : e === "pt" ? fa() : e === "ch" ? ha() : e === "de" ? pa() : e === "es" ? ma() : e === "fr" ? ga() : e === "it" ? wa() : e === "jp" ? ya() : e === "pl" ? va() : e === "ru" ? ba() : e === "uk" ? Ea() : Oa()
  },
  Ta = () => "Botting",
  qa = () => "Uso de bots",
  Aa = () => "脚本",
  Sa = () => "Bot-Nutzung",
  Na = () => "Botting",
  Ia = () => "Bots",
  Ra = () => "Uso di bot",
  Da = () => "ボット使用",
  Pa = () => "Botting",
  ja = () => "Боттинг",
  xa = () => "Боти",
  za = () => "Botting",
  Ua = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ta() : e === "pt" ? qa() : e === "ch" ? Aa() : e === "de" ? Sa() : e === "es" ? Na() : e === "fr" ? Ia() : e === "it" ? Ra() : e === "jp" ? Da() : e === "pl" ? Pa() : e === "ru" ? ja() : e === "uk" ? xa() : za()
  },
  La = () => "Use of software to completely automate painting",
  Ca = () => "Uso de software para pintar de forma completamente automatizada ",
  Ma = () => "使用软件完全自动化绘制",
  Ba = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  Ka = () => "Uso de software para automatizar completamente la pintura",
  $a = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  Fa = () => "Uso di software per dipingere in modo completamente automatizzato",
  Ha = () => "ペイントを完全に自動化するソフトウェアの使用",
  Va = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  Ga = () => "Использование программ для полной автоматизации рисования",
  Ya = () => "Використання програм, які повністю автоматизують малювання",
  Ja = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  Wa = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? La() : e === "pt" ? Ca() : e === "ch" ? Ma() : e === "de" ? Ba() : e === "es" ? Ka() : e === "fr" ? $a() : e === "it" ? Fa() : e === "jp" ? Ha() : e === "pl" ? Va() : e === "ru" ? Ga() : e === "uk" ? Ya() : Ja()
  },
  Qa = () => "Breaking the rules",
  Xa = () => "Quebrar as regras",
  Za = () => "违反规则",
  ei = () => "Regeln brechen",
  ti = () => "Romper las reglas",
  ri = () => "Violation des règles",
  ni = () => "Violazione delle regole",
  ai = () => "ルール違反",
  ii = () => "Łamanie zasad",
  si = () => "Нарушение правил",
  oi = () => "Порушення правил",
  ci = () => "Vi phạm luật",
  ui = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Qa() : e === "pt" ? Xa() : e === "ch" ? Za() : e === "de" ? ei() : e === "es" ? ti() : e === "fr" ? ri() : e === "it" ? ni() : e === "jp" ? ai() : e === "pl" ? ii() : e === "ru" ? si() : e === "uk" ? oi() : ci()
  },
  li = () => "You have broken one of Wplace's rules",
  _i = () => "Você quebrou uma das regras do Wplace",
  di = () => "你违反了 Wplace 的一项规则",
  fi = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  hi = () => "Has infringido una de las reglas de Wplace",
  pi = () => "Vous avez enfreint l’une des règles de Wplace",
  mi = () => "Hai infranto una delle regole di Wplace",
  gi = () => "Wplaceのルールのいずれかに違反しました。",
  wi = () => "Złamałeś jedną z zasad Wplace",
  yi = () => "Вы нарушили одно из правил Wplace",
  vi = () => "Ви порушили одне з правил Wplace",
  bi = () => "Bạn đã vi phạm một trong các luật của Wplace",
  Ei = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? li() : e === "pt" ? _i() : e === "ch" ? di() : e === "de" ? fi() : e === "es" ? hi() : e === "fr" ? pi() : e === "it" ? mi() : e === "jp" ? gi() : e === "pl" ? wi() : e === "ru" ? yi() : e === "uk" ? vi() : bi()
  },
  Oi = () => "You cannot paint over event pixels",
  ki = () => "Você não pode pintar sobre pixels de eventos",
  Ti = () => "你不能覆盖活动像素",
  qi = () => "Du kannst nicht über Event-Pixel malen",
  Ai = () => "No puedes pintar sobre píxeles de evento",
  Si = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  Ni = () => "Non puoi dipingere sopra i pixel dell'evento",
  Ii = () => "イベント用のピクセルの上には塗れません。",
  Ri = () => "Nie możesz malować po pikselach wydarzenia",
  Di = () => "Вы не можете рисовать по пикселям события",
  Pi = () => "Ви не можете малювати поверх пікселів події",
  ji = () => "Bạn không thể tô lên pixel sự kiện",
  ht = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Oi() : e === "pt" ? ki() : e === "ch" ? Ti() : e === "de" ? qi() : e === "es" ? Ai() : e === "fr" ? Si() : e === "it" ? Ni() : e === "jp" ? Ii() : e === "pl" ? Ri() : e === "ru" ? Di() : e === "uk" ? Pi() : ji()
  },
  xi = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  zi = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Ui = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  Li = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  Ci = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  Mi = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  Bi = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Ki = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  $i = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Fi = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  Hi = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Vi = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Gi = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? xi() : e === "pt" ? zi() : e === "ch" ? Ui() : e === "de" ? Li() : e === "es" ? Ci() : e === "fr" ? Mi() : e === "it" ? Bi() : e === "jp" ? Ki() : e === "pl" ? $i() : e === "ru" ? Fi() : e === "uk" ? Hi() : Vi()
  },
  Yi = () => "Challenge verification not completed",
  Ji = () => "Verificação do desafio não concluída",
  Wi = () => "挑战验证未完成",
  Qi = () => "Herausforderungsverifizierung nicht abgeschlossen",
  Xi = () => "Verificación del desafío no completada",
  Zi = () => "Vérification du défi non terminée",
  es = () => "Verifica della sfida non completata",
  ts = () => "チャレンジ検証が完了していません",
  rs = () => "Weryfikacja wyzwania niezakończona",
  ns = () => "Верификация вызова не завершена",
  as = () => "Перевірку виклику не завершено",
  is = () => "Xác minh thử thách chưa hoàn thành",
  ee = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Yi() : e === "pt" ? Ji() : e === "ch" ? Wi() : e === "de" ? Qi() : e === "es" ? Xi() : e === "fr" ? Zi() : e === "it" ? es() : e === "jp" ? ts() : e === "pl" ? rs() : e === "ru" ? ns() : e === "uk" ? as() : is()
  },
  ss = () => "Couldn't complete the purchase. This item does not exist.",
  os = () => "Não foi possível concluir a compra. Este item não existe.",
  cs = () => "无法完成购买。该物品不存在。",
  us = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  ls = () => "No se pudo completar la compra. Este ítem no existe.",
  _s = () => "Achat impossible. Cet objet n’existe pas.",
  ds = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  fs = () => "購入を完了できませんでした。このアイテムは存在しません。",
  hs = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  ps = () => "Не удалось завершить покупку. Этот предмет не существует.",
  ms = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  gs = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  Mt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ss() : e === "pt" ? os() : e === "ch" ? cs() : e === "de" ? us() : e === "es" ? ls() : e === "fr" ? _s() : e === "it" ? ds() : e === "jp" ? fs() : e === "pl" ? hs() : e === "ru" ? ps() : e === "uk" ? ms() : gs()
  },
  ws = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  ys = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  vs = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  bs = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  Es = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  Os = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  ks = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  Ts = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  qs = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  As = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  Ss = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  Ns = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  Is = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ws() : e === "pt" ? ys() : e === "ch" ? vs() : e === "de" ? bs() : e === "es" ? Es() : e === "fr" ? Os() : e === "it" ? ks() : e === "jp" ? Ts() : e === "pl" ? qs() : e === "ru" ? As() : e === "uk" ? Ss() : Ns()
  },
  Rs = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  Ds = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  Ps = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  js = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  xs = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  zs = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  Us = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  Ls = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  Cs = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  Ms = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  Bs = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  Ks = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  pt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Rs() : e === "pt" ? Ds() : e === "ch" ? Ps() : e === "de" ? js() : e === "es" ? xs() : e === "fr" ? zs() : e === "it" ? Us() : e === "jp" ? Ls() : e === "pl" ? Cs() : e === "ru" ? Ms() : e === "uk" ? Bs() : Ks()
  },
  $s = () => "Doxxing",
  Fs = () => "Doxxing",
  Hs = () => "人肉搜索",
  Vs = () => "Doxxing",
  Gs = () => "Doxxing",
  Ys = () => "Doxxing",
  Js = () => "Doxxing",
  Ws = () => "ドックス（Doxxing）",
  Qs = () => "Doxxing",
  Xs = () => "Докcинг",
  Zs = () => "Докcинг",
  eo = () => "Doxxing",
  to = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? $s() : e === "pt" ? Fs() : e === "ch" ? Hs() : e === "de" ? Vs() : e === "es" ? Gs() : e === "fr" ? Ys() : e === "it" ? Js() : e === "jp" ? Ws() : e === "pl" ? Qs() : e === "ru" ? Xs() : e === "uk" ? Zs() : eo()
  },
  ro = () => "Released other's personal information without their consent",
  no = () => "Vazar informações pessoais de terceiros sem consentimento",
  ao = () => "在未获同意的情况下公开他人个人信息",
  io = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  so = () => "Divulgó información personal de otra persona sin su consentimiento",
  oo = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  co = () => "Diffusione di informazioni personali di terzi senza consenso",
  uo = () => "他人の個人情報を同意なく公開した。",
  lo = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  _o = () => "Публикация личной информации других людей без их согласия",
  fo = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  ho = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  po = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ro() : e === "pt" ? no() : e === "ch" ? ao() : e === "de" ? io() : e === "es" ? so() : e === "fr" ? oo() : e === "it" ? co() : e === "jp" ? uo() : e === "pl" ? lo() : e === "ru" ? _o() : e === "uk" ? fo() : ho()
  },
  mo = () => "This was already resolved. Reload the page to see your account.",
  go = () => "Isso já foi resolvido. Recarregue a página para ver sua conta.",
  wo = () => "此问题已解决。请刷新页面以查看您的账户。",
  yo = () => "Dies wurde bereits gelöst. Laden Sie die Seite neu, um Ihr Konto zu sehen.",
  vo = () => "Esto ya está resuelto. Recarga la página para ver tu cuenta.",
  bo = () => "C'était déjà résolu. Rechargez la page pour voir votre compte.",
  Eo = () => "Questo è stato già risolto. Ricarica la pagina per vedere il tuo account.",
  Oo = () => "これはすでに解決済みです。アカウントを表示するには、ページを再読み込みしてください。",
  ko = () => "Problem został już rozwiązany. Odśwież stronę, aby zobaczyć swoje konto.",
  To = () => "Это уже было решено. Перезагрузите страницу, чтобы увидеть свою учетную запись.",
  qo = () => "Це вже було вирішено. Перезавантажте сторінку, щоб побачити свій обліковий запис.",
  Ao = () => "Vấn đề này đã được giải quyết. Tải lại trang để xem tài khoản của bạn.",
  So = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? mo() : e === "pt" ? go() : e === "ch" ? wo() : e === "de" ? yo() : e === "es" ? vo() : e === "fr" ? bo() : e === "it" ? Eo() : e === "jp" ? Oo() : e === "pl" ? ko() : e === "ru" ? To() : e === "uk" ? qo() : Ao()
  },
  No = () => "These accounts can't be merged automatically. Contact us at contact@wplace.live and we'll sort it out.",
  Io = () => "Estas contas não podem ser mescladas automaticamente. Entre em contato conosco em contact@wplace.live e resolveremos isso.",
  Ro = () => "这些账户无法自动合并。请发送邮件至 contact@wplace.live 联系我们，我们将妥善处理。",
  Do = () => "Diese Konten können nicht automatisch zusammengeführt werden. Kontaktieren Sie uns unter contact@wplace.live und wir kümmern uns darum.",
  Po = () => "Estas cuentas no se pueden fusionar automáticamente. Contáctanos en contact@wplace.live y lo solucionaremos.",
  jo = () => "Ces comptes ne peuvent pas être fusionnés automatiquement. Contactez-nous à contact@wplace.live et nous nous en occuperons.",
  xo = () => "Questi account non possono essere uniti automaticamente. Contattaci a contact@wplace.live e sistemeremo tutto.",
  zo = () => "これらのアカウントは自動的に統合できません。contact@wplace.liveまでお問い合わせください。弊社が対応いたします。",
  Uo = () => "Te konta nie mogą zostać automatycznie scalone. Skontaktuj się z nami pod adresem contact@wplace.live, a my się tym zajmiemy.",
  Lo = () => "Эти аккаунты не могут быть объединены автоматически. Свяжитесь с нами по адресу contact@wplace.live, и мы разберемся.",
  Co = () => "Ці облікові записи не можуть бути об'єднані автоматично. Зв'яжіться з нами за адресою contact@wplace.live, і ми все владнаємо.",
  Mo = () => "Các tài khoản này không thể hợp nhất tự động. Hãy liên hệ với chúng tôi tại contact@wplace.live và chúng tôi sẽ giải quyết.",
  Bo = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? No() : e === "pt" ? Io() : e === "ch" ? Ro() : e === "de" ? Do() : e === "es" ? Po() : e === "fr" ? jo() : e === "it" ? xo() : e === "jp" ? zo() : e === "pl" ? Uo() : e === "ru" ? Lo() : e === "uk" ? Co() : Mo()
  },
  Ko = () => "This email is already in use.",
  $o = () => "Este e-mail já está em uso.",
  Fo = () => "This email is already in use.",
  Ho = () => "This email is already in use.",
  Vo = () => "Este correo electrónico ya está en uso.",
  Go = () => "This email is already in use.",
  Yo = () => "Questa email è già in uso.",
  Jo = () => "This email is already in use.",
  Wo = () => "This email is already in use.",
  Qo = () => "This email is already in use.",
  Xo = () => "This email is already in use.",
  Zo = () => "This email is already in use.",
  ec = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ko() : e === "pt" ? $o() : e === "ch" ? Fo() : e === "de" ? Ho() : e === "es" ? Vo() : e === "fr" ? Go() : e === "it" ? Yo() : e === "jp" ? Jo() : e === "pl" ? Wo() : e === "ru" ? Qo() : e === "uk" ? Xo() : Zo()
  },
  tc = r => `This email is already in use by user #${r.userId}.`,
  rc = r => `Este e-mail já está em uso pelo usuário #${r.userId}.`,
  nc = r => `This email is already in use by user #${r.userId}.`,
  ac = r => `This email is already in use by user #${r.userId}.`,
  ic = r => `Este correo electrónico ya está en uso por el usuario #${r.userId}.`,
  sc = r => `This email is already in use by user #${r.userId}.`,
  oc = r => `Questa email è già in uso dall'utente #${r.userId}.`,
  cc = r => `This email is already in use by user #${r.userId}.`,
  uc = r => `This email is already in use by user #${r.userId}.`,
  lc = r => `This email is already in use by user #${r.userId}.`,
  _c = r => `This email is already in use by user #${r.userId}.`,
  dc = r => `This email is already in use by user #${r.userId}.`,
  fc = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? tc(r) : e === "pt" ? rc(r) : e === "ch" ? nc(r) : e === "de" ? ac(r) : e === "es" ? ic(r) : e === "fr" ? sc(r) : e === "it" ? oc(r) : e === "jp" ? cc(r) : e === "pl" ? uc(r) : e === "ru" ? lc(r) : e === "uk" ? _c(r) : dc(r)
  },
  hc = () => "Enter a valid email address.",
  pc = () => "Informe um endereço de e-mail válido.",
  mc = () => "Enter a valid email address.",
  gc = () => "Enter a valid email address.",
  wc = () => "Introduce una dirección de correo electrónico válida.",
  yc = () => "Enter a valid email address.",
  vc = () => "Inserisci un indirizzo email valido.",
  bc = () => "Enter a valid email address.",
  Ec = () => "Enter a valid email address.",
  Oc = () => "Enter a valid email address.",
  kc = () => "Enter a valid email address.",
  Tc = () => "Enter a valid email address.",
  qc = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? hc() : e === "pt" ? pc() : e === "ch" ? mc() : e === "de" ? gc() : e === "es" ? wc() : e === "fr" ? yc() : e === "it" ? vc() : e === "jp" ? bc() : e === "pl" ? Ec() : e === "ru" ? Oc() : e === "uk" ? kc() : Tc()
  },
  Ac = r => `Error while painting: ${r.err}`,
  Sc = r => `Erro enquanto pinta: ${r.err}`,
  Nc = r => `绘制时出错：${r.err}`,
  Ic = r => `Fehler beim Malen: ${r.err}`,
  Rc = r => `Error al pintar: ${r.err}`,
  Dc = r => `Erreur lors de la peinture : ${r.err}`,
  Pc = r => `Errore durante la pittura: ${r.err}`,
  jc = r => `ペイント中にエラーが発生しました: ${r.err}`,
  xc = r => `Błąd podczas malowania: ${r.err}`,
  zc = r => `Ошибка при рисовании: ${r.err}`,
  Uc = r => `Помилка під час малювання: ${r.err}`,
  Lc = r => `Lỗi khi tô: ${r.err}`,
  Cc = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ac(r) : e === "pt" ? Sc(r) : e === "ch" ? Nc(r) : e === "de" ? Ic(r) : e === "es" ? Rc(r) : e === "fr" ? Dc(r) : e === "it" ? Pc(r) : e === "jp" ? jc(r) : e === "pl" ? xc(r) : e === "ru" ? zc(r) : e === "uk" ? Uc(r) : Lc(r)
  },
  Mc = () => "Exceeded maximum number of characters",
  Bc = () => "Excedeu o número máximo de caracteres permitidos",
  Kc = () => "超出最大字符数",
  $c = () => "Maximale Zeichenanzahl überschritten",
  Fc = () => "Se excedió el número máximo de caracteres",
  Hc = () => "Nombre maximal de caractères dépassé",
  Vc = () => "Numero massimo di caratteri superato",
  Gc = () => "最大文字数を超過しました",
  Yc = () => "Przekroczono maksymalną liczbę znaków",
  Jc = () => "Превышено максимальное количество символов",
  Wc = () => "Перевищено максимальну кількість символів",
  Qc = () => "Đã vượt quá số ký tự tối đa",
  Xc = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Mc() : e === "pt" ? Bc() : e === "ch" ? Kc() : e === "de" ? $c() : e === "es" ? Fc() : e === "fr" ? Hc() : e === "it" ? Vc() : e === "jp" ? Gc() : e === "pl" ? Yc() : e === "ru" ? Jc() : e === "uk" ? Wc() : Qc()
  },
  Zc = () => "Verification code expired. Please request a new one.",
  eu = () => "Código de verificação expirado. Por favor, solicite um novo.",
  tu = () => "验证码已过期，请重新获取。",
  ru = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  nu = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  au = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  iu = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  su = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  ou = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  cu = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  uu = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  lu = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  _u = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Zc() : e === "pt" ? eu() : e === "ch" ? tu() : e === "de" ? ru() : e === "es" ? nu() : e === "fr" ? au() : e === "it" ? iu() : e === "jp" ? su() : e === "pl" ? ou() : e === "ru" ? cu() : e === "uk" ? uu() : lu()
  },
  du = () => "Griefing",
  fu = () => "Griefing",
  hu = () => "破坏行为",
  pu = () => "Griefing",
  mu = () => "Griefing",
  gu = () => "Griefing",
  wu = () => "Griefing",
  yu = () => "グリーフィング",
  vu = () => "Griefing",
  bu = () => "Гриферство",
  Eu = () => "Гріфінг",
  Ou = () => "Griefing",
  ku = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? du() : e === "pt" ? fu() : e === "ch" ? hu() : e === "de" ? pu() : e === "es" ? mu() : e === "fr" ? gu() : e === "it" ? wu() : e === "jp" ? yu() : e === "pl" ? vu() : e === "ru" ? bu() : e === "uk" ? Eu() : Ou()
  },
  Tu = () => "Messed up with other's artworks",
  qu = () => "Estragou os desenhos dos outros",
  Au = () => "破坏了他人的作品",
  Su = () => "Kunstwerke anderer beschädigt",
  Nu = () => "Arruinó las obras de arte de otros",
  Iu = () => "A abîmé les œuvres des autres",
  Ru = () => "Ha rovinato i disegni degli altri",
  Du = () => "他人の作品を荒らした",
  Pu = () => "Zniszczył prace innych",
  ju = () => "Испортил чужие рисунки",
  xu = () => "Зіпсував роботи інших",
  zu = () => "Phá hỏng tranh của người khác",
  Uu = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Tu() : e === "pt" ? qu() : e === "ch" ? Au() : e === "de" ? Su() : e === "es" ? Nu() : e === "fr" ? Iu() : e === "it" ? Ru() : e === "jp" ? Du() : e === "pl" ? Pu() : e === "ru" ? ju() : e === "uk" ? xu() : zu()
  },
  Lu = () => "Hate speech",
  Cu = () => "Discurso de Ódio",
  Mu = () => "仇恨言论",
  Bu = () => "Hassrede",
  Ku = () => "Discurso de odio",
  $u = () => "Discours haineux",
  Fu = () => "Discorso d'odio",
  Hu = () => "ヘイトスピーチ",
  Vu = () => "Mowa nienawiści",
  Gu = () => "Речь ненависти",
  Yu = () => "Мова ворожнечі",
  Ju = () => "Ngôn từ thù hằn",
  Wu = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Lu() : e === "pt" ? Cu() : e === "ch" ? Mu() : e === "de" ? Bu() : e === "es" ? Ku() : e === "fr" ? $u() : e === "it" ? Fu() : e === "jp" ? Hu() : e === "pl" ? Vu() : e === "ru" ? Gu() : e === "uk" ? Yu() : Ju()
  },
  Qu = () => "Racism, homophobia, hate symbols, etc",
  Xu = () => "Racismo, homofobia, símbolos de ódio, etc.",
  Zu = () => "种族主义、恐同、仇恨符号等",
  el = () => "Rassismus, Homophobie, Hasssymbole usw.",
  tl = () => "Racismo, homofobia, símbolos de odio, etc.",
  rl = () => "Racisme, homophobie, symboles haineux, etc.",
  nl = () => "Razzismo, omofobia, simboli d'odio, ecc.",
  al = () => "人種差別、同性愛嫌悪、ヘイトシンボルなど",
  il = () => "Rasizm, homofobia, symbole nienawiści itp.",
  sl = () => "Расизм, гомофобия, символы ненависти и т. п.",
  ol = () => "Расизм, гомофобія, символи ненависті тощо",
  cl = () => "Phân biệt chủng tộc, kỳ thị đồng tính, biểu tượng thù ghét, v.v.",
  ul = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Qu() : e === "pt" ? Xu() : e === "ch" ? Zu() : e === "de" ? el() : e === "es" ? tl() : e === "fr" ? rl() : e === "it" ? nl() : e === "jp" ? al() : e === "pl" ? il() : e === "ru" ? sl() : e === "uk" ? ol() : cl()
  },
  ll = () => "Inappropriate content",
  _l = () => "Conteúdo inapropriado",
  dl = () => "不当内容",
  fl = () => "Unangemessene Inhalte",
  hl = () => "Contenido inapropiado",
  pl = () => "Contenu inapproprié",
  ml = () => "Contenuto inappropriato",
  gl = () => "不適切なコンテンツ",
  wl = () => "Nieodpowiednie treści",
  yl = () => "Неприемлемый контент",
  vl = () => "Неприйнятний вміст",
  bl = () => "Nội dung không phù hợp",
  El = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ll() : e === "pt" ? _l() : e === "ch" ? dl() : e === "de" ? fl() : e === "es" ? hl() : e === "fr" ? pl() : e === "it" ? ml() : e === "jp" ? gl() : e === "pl" ? wl() : e === "ru" ? yl() : e === "uk" ? vl() : bl()
  },
  Ol = () => "Explicit or illegal content, severe slurs",
  kl = () => "Conteúdo explícito ou ilegal, insultos graves",
  Tl = () => "露骨或非法内容、严重的侮辱性言论",
  ql = () => "Expliziter oder illegaler Inhalt, schwere Beleidigungen",
  Al = () => "Contenido explícito o ilegal, insultos graves",
  Sl = () => "Contenu explicite ou illégal, insultes graves",
  Nl = () => "Contenuto esplicito o illegale, insulti gravi",
  Il = () => "露骨または違法なコンテンツ、ひどい侮辱・中傷",
  Rl = () => "Treści jawnie seksualne lub nielegalne, poważne obelgi",
  Dl = () => "Откровенный или незаконный контент, грубые оскорбления",
  Pl = () => "Відвертий або незаконний вміст, грубі образи",
  jl = () => "Nội dung phản cảm hoặc bất hợp pháp, lời lẽ lăng mạ nghiêm trọng",
  xl = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ol() : e === "pt" ? kl() : e === "ch" ? Tl() : e === "de" ? ql() : e === "es" ? Al() : e === "fr" ? Sl() : e === "it" ? Nl() : e === "jp" ? Il() : e === "pl" ? Rl() : e === "ru" ? Dl() : e === "uk" ? Pl() : jl()
  },
  zl = () => "Invalid captcha. Please try again.",
  Ul = () => "Captcha inválido. Por favor, tente novamente.",
  Ll = () => "验证码无效，请重试。",
  Cl = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  Ml = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  Bl = () => "Captcha invalide. Veuillez réessayer.",
  Kl = () => "Captcha non valido. Riprova.",
  $l = () => "キャプチャが無効です。もう一度お試しください。",
  Fl = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  Hl = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  Vl = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Gl = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Yl = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? zl() : e === "pt" ? Ul() : e === "ch" ? Ll() : e === "de" ? Cl() : e === "es" ? Ml() : e === "fr" ? Bl() : e === "it" ? Kl() : e === "jp" ? $l() : e === "pl" ? Fl() : e === "ru" ? Hl() : e === "uk" ? Vl() : Gl()
  },
  Jl = () => "Invalid challenge response",
  Wl = () => "Resposta de desafio inválida",
  Ql = () => "质询响应无效",
  Xl = () => "Ungültige Challenge-Antwort",
  Zl = () => "Respuesta de desafío inválida",
  e_ = () => "Réponse au défi invalide",
  t_ = () => "Risposta alla sfida non valida",
  r_ = () => "無効なチャレンジ応答",
  n_ = () => "Nieprawidłowa odpowiedź na wyzwanie",
  a_ = () => "Неверный ответ на вызов",
  i_ = () => "Недійсна відповідь на виклик",
  s_ = () => "Phản hồi thử thách không hợp lệ",
  o_ = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Jl() : e === "pt" ? Wl() : e === "ch" ? Ql() : e === "de" ? Xl() : e === "es" ? Zl() : e === "fr" ? e_() : e === "it" ? t_() : e === "jp" ? r_() : e === "pl" ? n_() : e === "ru" ? a_() : e === "uk" ? i_() : s_()
  },
  c_ = () => "The verification code is incorrect. Please check it and try again.",
  u_ = () => "Código inválido",
  l_ = () => "验证码不正确。请检查后重试。",
  __ = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  d_ = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  f_ = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  h_ = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  p_ = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  m_ = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  g_ = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  w_ = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  y_ = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  v_ = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? c_() : e === "pt" ? u_() : e === "ch" ? l_() : e === "de" ? __() : e === "es" ? d_() : e === "fr" ? f_() : e === "it" ? h_() : e === "jp" ? p_() : e === "pl" ? m_() : e === "ru" ? g_() : e === "uk" ? w_() : y_()
  },
  b_ = () => "Invalid discord.",
  E_ = () => "Discord inválido.",
  O_ = () => "无效的 Discord。",
  k_ = () => "Ungültiger Discord.",
  T_ = () => "Discord inválido.",
  q_ = () => "Discord invalide.",
  A_ = () => "Discord non valido.",
  S_ = () => "無効なDiscordアカウントです。",
  N_ = () => "Nieprawidłowy Discord.",
  I_ = () => "Неверный Discord.",
  R_ = () => "Некоректний Discord.",
  D_ = () => "Discord không hợp lệ.",
  P_ = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? b_() : e === "pt" ? E_() : e === "ch" ? O_() : e === "de" ? k_() : e === "es" ? T_() : e === "fr" ? q_() : e === "it" ? A_() : e === "jp" ? S_() : e === "pl" ? N_() : e === "ru" ? I_() : e === "uk" ? R_() : D_()
  },
  j_ = () => "The name contains disallowed characters or words. Please choose a different name.",
  x_ = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  z_ = () => "名称包含禁止的字符或词语，请选择其他名称。",
  U_ = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  L_ = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  C_ = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  M_ = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  B_ = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  K_ = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  $_ = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  F_ = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  H_ = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  Bt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? j_() : e === "pt" ? x_() : e === "ch" ? z_() : e === "de" ? U_() : e === "es" ? L_() : e === "fr" ? C_() : e === "it" ? M_() : e === "jp" ? B_() : e === "pl" ? K_() : e === "ru" ? $_() : e === "uk" ? F_() : H_()
  },
  V_ = () => "Please enter a valid phone number with country code.",
  G_ = () => "Insira um número de telefone válido com código do país.",
  Y_ = () => "请输入带国家代码的有效电话号码。",
  J_ = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  W_ = () => "Introduce un número de teléfono válido con código de país.",
  Q_ = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  X_ = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  Z_ = () => "国番号付きの有効な電話番号を入力してください。",
  ed = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  td = () => "Введите действительный номер телефона с кодом страны.",
  rd = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  nd = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  ad = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? V_() : e === "pt" ? G_() : e === "ch" ? Y_() : e === "de" ? J_() : e === "es" ? W_() : e === "fr" ? Q_() : e === "it" ? X_() : e === "jp" ? Z_() : e === "pl" ? ed() : e === "ru" ? td() : e === "uk" ? rd() : nd()
  },
  id = () => "Phone number not supported. Please try another number.",
  sd = () => "Número de telefone não suportado. Por favor, tente outro número.",
  od = () => "不支持此电话号码。请尝试其他号码。",
  cd = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  ud = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  ld = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  _d = () => "Numero di telefono non supportato. Prova con un altro numero.",
  dd = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  fd = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  hd = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  pd = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  md = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  gd = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? id() : e === "pt" ? sd() : e === "ch" ? od() : e === "de" ? cd() : e === "es" ? ud() : e === "fr" ? ld() : e === "it" ? _d() : e === "jp" ? dd() : e === "pl" ? fd() : e === "ru" ? hd() : e === "uk" ? pd() : md()
  },
  wd = () => "The new leader must be a member of the alliance",
  yd = () => "O novo líder deve ser um membro da aliança",
  vd = () => "新盟主必须是联盟成员",
  bd = () => "Der neue Anführer muss Mitglied der Allianz sein",
  Ed = () => "El nuevo líder debe ser miembro de la alianza",
  Od = () => "Le nouveau chef doit être membre de l’alliance",
  kd = () => "Il nuovo leader deve essere un membro dell'alleanza",
  Td = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  qd = () => "Nowy lider musi być członkiem sojuszu",
  Ad = () => "Новый лидер должен быть участником альянса",
  Sd = () => "Новий лідер має бути учасником альянсу",
  Nd = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Id = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? wd() : e === "pt" ? yd() : e === "ch" ? vd() : e === "de" ? bd() : e === "es" ? Ed() : e === "fr" ? Od() : e === "it" ? kd() : e === "jp" ? Td() : e === "pl" ? qd() : e === "ru" ? Ad() : e === "uk" ? Sd() : Nd()
  },
  Rd = () => "Leaderboard is temporarily disabled",
  Dd = () => "O ranking está temporariamente desativado",
  Pd = () => "排行榜已暂时停用",
  jd = () => "Die Bestenliste ist vorübergehend deaktiviert",
  xd = () => "La clasificación está deshabilitada temporalmente",
  zd = () => "Le classement est temporairement désactivé",
  Ud = () => "La classifica è temporaneamente disattivata",
  Ld = () => "ランキングは一時的に無効になっています。",
  Cd = () => "Ranking jest tymczasowo wyłączony",
  Md = () => "Таблица лидеров временно отключена",
  Bd = () => "Таблиця лідерів тимчасово вимкнена",
  Kd = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  G = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Rd() : e === "pt" ? Dd() : e === "ch" ? Pd() : e === "de" ? jd() : e === "es" ? xd() : e === "fr" ? zd() : e === "it" ? Ud() : e === "jp" ? Ld() : e === "pl" ? Cd() : e === "ru" ? Md() : e === "uk" ? Bd() : Kd()
  },
  $d = () => "Location name is too big (max. 128 characters)",
  Fd = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Hd = () => "位置名称过长（最大 128 个字符）",
  Vd = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Gd = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Yd = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Jd = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Wd = () => "場所の名前が長すぎます（最大128文字）。",
  Qd = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  Xd = () => "Название локации слишком длинное (макс. 128 символов)",
  Zd = () => "Назва локації надто довга (макс. 128 символів)",
  ef = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  tf = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? $d() : e === "pt" ? Fd() : e === "ch" ? Hd() : e === "de" ? Vd() : e === "es" ? Gd() : e === "fr" ? Yd() : e === "it" ? Jd() : e === "jp" ? Wd() : e === "pl" ? Qd() : e === "ru" ? Xd() : e === "uk" ? Zd() : ef()
  },
  rf = () => "Multi-accounting",
  nf = () => "Múltiplas contas",
  af = () => "多账号",
  sf = () => "Multi-Accounting",
  of = () => "Multi-cuentas",
  cf = () => "Multi-comptes",
  uf = () => "Multi-account",
  lf = () => "複数アカウント使用",
  _f = () => "Multi-konta",
  df = () => "Мультиаккаунт",
  ff = () => "Мультиакаунтинг",
  hf = () => "Nhiều tài khoản",
  pf = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? rf() : e === "pt" ? nf() : e === "ch" ? af() : e === "de" ? sf() : e === "es" ? of() : e === "fr" ? cf() : e === "it" ? uf() : e === "jp" ? lf() : e === "pl" ? _f() : e === "ru" ? df() : e === "uk" ? ff() : hf()
  },
  mf = () => "Paint with more than one account or using virtual machines, residential proxies, or multi-accounting browsers",
  gf = () => "Pintar com mais de uma conta ou usando máquinas virtuais, proxies residenciais ou navegadores multi-conta",
  wf = () => "使用多个账号绘制像素，或使用虚拟机、住宅代理或多账号浏览器",
  yf = () => "Mehr als ein Konto zum Malen verwenden oder virtuelle Maschinen, Residential-Proxys oder Multi-Accounting-Browser nutzen",
  vf = () => "Pintar con más de una cuenta o usar máquinas virtuales, proxies residenciales o navegadores multicuenta",
  bf = () => "Utiliser plus d’un compte pour peindre, ou utiliser des machines virtuelles, des proxys résidentiels ou des navigateurs multi-comptes",
  Ef = () => "Usare più di un account per dipingere, oppure usare macchine virtuali, proxy residenziali o browser multi-account",
  Of = () => "複数のアカウントを使ってピクセルを塗る、または仮想マシン、住宅プロキシ、マルチアカウントブラウザを使用する",
  kf = () => "Malowanie pikseli na więcej niż jednym koncie lub przy użyciu maszyn wirtualnych, proxy residential lub przeglądarek multi-kontowych",
  Tf = () => "Рисование с более чем одного аккаунта или с использованием виртуальных машин, резидентных прокси или мультиаккаунт-браузеров",
  qf = () => "Малювання з більш ніж одного акаунта або з використанням віртуальних машин, резидентних проксі чи мультиакаунт-браузерів",
  Af = () => "Vẽ pixel bằng nhiều hơn một tài khoản hoặc bằng máy ảo, proxy dân cư hoặc trình duyệt đa tài khoản",
  Sf = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? mf() : e === "pt" ? gf() : e === "ch" ? wf() : e === "de" ? yf() : e === "es" ? vf() : e === "fr" ? bf() : e === "it" ? Ef() : e === "jp" ? Of() : e === "pl" ? kf() : e === "ru" ? Tf() : e === "uk" ? qf() : Af()
  },
  Nf = r => `You can change your name again in ${r.days} days`,
  If = r => `Você pode alterar seu nome novamente em ${r.days} dias.`,
  Rf = r => `你可以在 ${r.days} 天后再次修改名称`,
  Df = r => `Du kannst deinen Namen in ${r.days} Tagen erneut ändern`,
  Pf = r => `Podrás cambiar tu nombre de nuevo en ${r.days} días`,
  jf = r => `Vous pourrez changer votre nom à nouveau dans ${r.days} jours`,
  xf = r => `Potrai cambiare di nuovo il tuo nome tra ${r.days} giorni.`,
  zf = r => `${r.days}日後に再び名前を変更できます。`,
  Uf = r => `Następną zmianę nazwy możesz wykonać za ${r.days} dni`,
  Lf = r => `Вы сможете изменить имя снова через ${r.days} дн.`,
  Cf = r => `Ви зможете змінити імʼя знову через ${r.days} днів`,
  Mf = r => `Bạn có thể đổi tên lại sau ${r.days} ngày`,
  Bf = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Nf(r) : e === "pt" ? If(r) : e === "ch" ? Rf(r) : e === "de" ? Df(r) : e === "es" ? Pf(r) : e === "fr" ? jf(r) : e === "it" ? xf(r) : e === "jp" ? zf(r) : e === "pl" ? Uf(r) : e === "ru" ? Lf(r) : e === "uk" ? Cf(r) : Mf(r)
  },
  Kf = () => "No internet access or the servers are offline. Try again later.",
  $f = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Ff = () => "没有网络连接或服务器已离线。请稍后重试。",
  Hf = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Vf = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Gf = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Yf = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Jf = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Wf = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Qf = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Xf = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  Zf = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  eh = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Kf() : e === "pt" ? $f() : e === "ch" ? Ff() : e === "de" ? Hf() : e === "es" ? Vf() : e === "fr" ? Gf() : e === "it" ? Yf() : e === "jp" ? Jf() : e === "pl" ? Wf() : e === "ru" ? Qf() : e === "uk" ? Xf() : Zf()
  },
  th = () => "You are not allowed to verify a phone number. Try refreshing the page",
  rh = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  nh = () => "您无权验证电话号码。请尝试刷新页面。",
  ah = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  ih = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  sh = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  oh = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  ch = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  uh = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  lh = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  _h = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  dh = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  fh = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? th() : e === "pt" ? rh() : e === "ch" ? nh() : e === "de" ? ah() : e === "es" ? ih() : e === "fr" ? sh() : e === "it" ? oh() : e === "jp" ? ch() : e === "pl" ? uh() : e === "ru" ? lh() : e === "uk" ? _h() : dh()
  },
  hh = () => "Not enough Droplets",
  ph = () => "Droplets insuficientes",
  mh = () => "Droplets 数量不足",
  gh = () => "Nicht genug Droplets",
  wh = () => "No tienes suficientes Droplets",
  yh = () => "Pas assez de Droplets",
  vh = () => "Droplets insufficienti",
  bh = () => "Dropletsが足りません。",
  Eh = () => "Za mało Droplets",
  Oh = () => "Недостаточно Droplets",
  kh = () => "Недостатньо Droplets",
  Th = () => "Không đủ Droplets",
  mt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? hh() : e === "pt" ? ph() : e === "ch" ? mh() : e === "de" ? gh() : e === "es" ? wh() : e === "fr" ? yh() : e === "it" ? vh() : e === "jp" ? bh() : e === "pl" ? Eh() : e === "ru" ? Oh() : e === "uk" ? kh() : Th()
  },
  qh = () => "Operation not allowed. Maybe you have too many favorite locations.",
  Ah = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Sh = () => "操作不被允许。你的收藏位置可能过多。",
  Nh = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  Ih = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  Rh = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  Dh = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  Ph = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  jh = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  xh = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  zh = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  Uh = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  Lh = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? qh() : e === "pt" ? Ah() : e === "ch" ? Sh() : e === "de" ? Nh() : e === "es" ? Ih() : e === "fr" ? Rh() : e === "it" ? Dh() : e === "jp" ? Ph() : e === "pl" ? jh() : e === "ru" ? xh() : e === "uk" ? zh() : Uh()
  },
  Ch = r => `Not enough charges: you have ${r.charges} but this overlay needs ${r.pixels}.`,
  Mh = r => `Cargas insuficientes: você tem ${r.charges}, mas esta sobreposição precisa de ${r.pixels}.`,
  Bh = r => `充能不足：你有 ${r.charges}，但此叠加层需要 ${r.pixels}。`,
  Kh = r => `Nicht genügend Ladungen: Du hast ${r.charges}, aber dieses Overlay benötigt ${r.pixels}.`,
  $h = r => `Cargas insuficientes: tienes ${r.charges} pero esta superposición necesita ${r.pixels}.`,
  Fh = r => `Charges insuffisantes : vous avez ${r.charges} mais ce calque nécessite ${r.pixels}.`,
  Hh = r => `Cariche insufficienti: ne hai ${r.charges} ma questo overlay ne richiede ${r.pixels}.`,
  Vh = r => `チャージが足りません：現在 ${r.charges} ですが、このオーバーレイには ${r.pixels} 必要です。`,
  Gh = r => `Za mało ładunków: masz ${r.charges}, ale ta nakładka wymaga ${r.pixels}.`,
  Yh = r => `Недостаточно зарядов: у вас ${r.charges}, но для этого слоя нужно ${r.pixels}.`,
  Jh = r => `Недостатньо зарядів: у вас ${r.charges}, але для цього шару потрібно ${r.pixels}.`,
  Wh = r => `Không đủ lượt sơn: bạn có ${r.charges} nhưng lớp phủ này cần ${r.pixels}.`,
  Qh = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ch(r) : e === "pt" ? Mh(r) : e === "ch" ? Bh(r) : e === "de" ? Kh(r) : e === "es" ? $h(r) : e === "fr" ? Fh(r) : e === "it" ? Hh(r) : e === "jp" ? Vh(r) : e === "pl" ? Gh(r) : e === "ru" ? Yh(r) : e === "uk" ? Jh(r) : Wh(r)
  },
  Xh = () => "You are trying to paint with a color you do not own",
  Zh = () => "Você está tentando pintar com uma cor que não possui",
  ep = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  tp = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  rp = () => "Estás intentando pintar con un color que no posees",
  np = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  ap = () => "Stai cercando di dipingere con un colore che non possiedi",
  ip = () => "所持していない色で塗ろうとしています。",
  sp = () => "Próbujesz malować kolorem, którego nie posiadasz",
  op = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  cp = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  up = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  gt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Xh() : e === "pt" ? Zh() : e === "ch" ? ep() : e === "de" ? tp() : e === "es" ? rp() : e === "fr" ? np() : e === "it" ? ap() : e === "jp" ? ip() : e === "pl" ? sp() : e === "ru" ? op() : e === "uk" ? cp() : up()
  },
  lp = () => "Phone already used",
  _p = () => "Telefone já usado",
  dp = () => "电话号码已被使用",
  fp = () => "Telefonnummer bereits verwendet",
  hp = () => "Teléfono ya utilizado",
  pp = () => "Téléphone déjà utilisé",
  mp = () => "Telefono già utilizzato",
  gp = () => "この電話番号は既に使用されています。",
  wp = () => "Numer telefonu jest już używany",
  yp = () => "Телефон уже используется",
  vp = () => "Номер телефону вже використовується",
  bp = () => "Số điện thoại đã được sử dụng",
  Ep = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? lp() : e === "pt" ? _p() : e === "ch" ? dp() : e === "de" ? fp() : e === "es" ? hp() : e === "fr" ? pp() : e === "it" ? mp() : e === "jp" ? gp() : e === "pl" ? wp() : e === "ru" ? yp() : e === "uk" ? vp() : bp()
  },
  Op = () => "This phone number's region is not supported",
  kp = () => "A região deste número de telefone não é suportada",
  Tp = () => "此电话号码的地区不受支持",
  qp = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  Ap = () => "La región de este número de teléfono no es compatible",
  Sp = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  Np = () => "La regione di questo numero di telefono non è supportata",
  Ip = () => "この電話番号の地域はサポートされていません",
  Rp = () => "Region tego numeru telefonu nie jest obsługiwany",
  Dp = () => "Регион этого номера телефона не поддерживается",
  Pp = () => "Регіон цього номера телефону не підтримується",
  jp = () => "Vùng của số điện thoại này không được hỗ trợ",
  xp = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Op() : e === "pt" ? kp() : e === "ch" ? Tp() : e === "de" ? qp() : e === "es" ? Ap() : e === "fr" ? Sp() : e === "it" ? Np() : e === "jp" ? Ip() : e === "pl" ? Rp() : e === "ru" ? Dp() : e === "uk" ? Pp() : jp()
  },
  zp = () => "Refresh your page to get the latest update",
  Up = () => "Recarregue sua página para obter as últimas atualizações",
  Lp = () => "刷新页面以获取最新更新",
  Cp = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  Mp = () => "Actualiza la página para obtener la última versión",
  Bp = () => "Actualisez la page pour obtenir les dernières mises à jour",
  Kp = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  $p = () => "最新の状態にするにはページを再読み込みしてください。",
  Fp = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  Hp = () => "Обновите страницу, чтобы получить последние изменения",
  Vp = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Gp = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  wt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? zp() : e === "pt" ? Up() : e === "ch" ? Lp() : e === "de" ? Cp() : e === "es" ? Mp() : e === "fr" ? Bp() : e === "it" ? Kp() : e === "jp" ? $p() : e === "pl" ? Fp() : e === "ru" ? Hp() : e === "uk" ? Vp() : Gp()
  },
  Yp = () => "Report failed. Please try again later",
  Jp = () => "Denúncia falhou. Por favor, tente novamente mais tarde",
  Wp = () => "举报失败，请稍后再试",
  Qp = () => "Meldung fehlgeschlagen. Bitte versuche es später erneut",
  Xp = () => "Error al enviar el reporte. Inténtalo de nuevo más tarde",
  Zp = () => "Échec du signalement. Veuillez réessayer plus tard",
  em = () => "Segnalazione fallita. Riprova più tardi",
  tm = () => "通報に失敗しました。時間をおいて再度お試しください",
  rm = () => "Zgłoszenie nie powiodło się. Spróbuj ponownie później",
  nm = () => "Не удалось отправить жалобу. Попробуйте позже.",
  am = () => "Не вдалося відправити скаргу. Спробуйте пізніше.",
  im = () => "Báo cáo thất bại. Vui lòng thử lại sau",
  sm = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Yp() : e === "pt" ? Jp() : e === "ch" ? Wp() : e === "de" ? Qp() : e === "es" ? Xp() : e === "fr" ? Zp() : e === "it" ? em() : e === "jp" ? tm() : e === "pl" ? rm() : e === "ru" ? nm() : e === "uk" ? am() : im()
  },
  om = () => "The request timed out. Please try again.",
  cm = () => "A solicitação expirou. Por favor, tente novamente.",
  um = () => "请求超时。请重试。",
  lm = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  _m = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  dm = () => "La requête a expiré. Veuillez réessayer.",
  fm = () => "La richiesta è scaduta. Riprova.",
  hm = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  pm = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  mm = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  gm = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  wm = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  ym = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? om() : e === "pt" ? cm() : e === "ch" ? um() : e === "de" ? lm() : e === "es" ? _m() : e === "fr" ? dm() : e === "it" ? fm() : e === "jp" ? hm() : e === "pl" ? pm() : e === "ru" ? mm() : e === "uk" ? gm() : wm()
  },
  vm = () => "No modifications found for the selected pixels.",
  bm = () => "Nenhuma modificação encontrada para os pixels selecionados.",
  Em = () => "未找到所选像素的修改记录。",
  Om = () => "Keine Änderungen für die ausgewählten Pixel gefunden.",
  km = () => "No se encontraron modificaciones para los píxeles seleccionados.",
  Tm = () => "Aucune modification trouvée pour les pixels sélectionnés.",
  qm = () => "Nessuna modifica trovata per i pixel selezionati.",
  Am = () => "選択したピクセルの変更が見つかりませんでした。",
  Sm = () => "Nie znaleziono modyfikacji dla wybranych pikseli.",
  Nm = () => "Модификации для выбранных пикселей не найдены.",
  Im = () => "Модифікації для вибраних пікселів не знайдено.",
  Rm = () => "Không tìm thấy thay đổi cho các pixel đã chọn.",
  Dm = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? vm() : e === "pt" ? bm() : e === "ch" ? Em() : e === "de" ? Om() : e === "es" ? km() : e === "fr" ? Tm() : e === "it" ? qm() : e === "jp" ? Am() : e === "pl" ? Sm() : e === "ru" ? Nm() : e === "uk" ? Im() : Rm()
  },
  Pm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  jm = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  xm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  zm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Um = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Lm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Cm = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  Mm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Bm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Km = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  $m = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Fm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Hm = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Pm() : e === "pt" ? jm() : e === "ch" ? xm() : e === "de" ? zm() : e === "es" ? Um() : e === "fr" ? Lm() : e === "it" ? Cm() : e === "jp" ? Mm() : e === "pl" ? Bm() : e === "ru" ? Km() : e === "uk" ? $m() : Fm()
  },
  Vm = () => "The service is currently unavailable. Please try again later.",
  Gm = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  Ym = () => "服务当前不可用。请稍后再试。",
  Jm = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  Wm = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  Qm = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  Xm = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  Zm = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  eg = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  tg = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  rg = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  ng = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  ag = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Vm() : e === "pt" ? Gm() : e === "ch" ? Ym() : e === "de" ? Jm() : e === "es" ? Wm() : e === "fr" ? Qm() : e === "it" ? Xm() : e === "jp" ? Zm() : e === "pl" ? eg() : e === "ru" ? tg() : e === "uk" ? rg() : ng()
  },
  ig = () => "Too many attempts. Please try again later",
  sg = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  og = () => "尝试次数过多，请稍后再试",
  cg = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  ug = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  lg = () => "Trop de tentatives. Veuillez réessayer plus tard",
  _g = () => "Troppi tentativi. Riprova più tardi.",
  dg = () => "試行回数が多すぎます。後で再度お試しください。",
  fg = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  hg = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  pg = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  mg = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  yt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ig() : e === "pt" ? sg() : e === "ch" ? og() : e === "de" ? cg() : e === "es" ? ug() : e === "fr" ? lg() : e === "it" ? _g() : e === "jp" ? dg() : e === "pl" ? fg() : e === "ru" ? hg() : e === "uk" ? pg() : mg()
  },
  gg = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  wg = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  yg = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  vg = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  bg = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  Eg = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  Og = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  kg = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  Tg = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  qg = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  Ag = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  Sg = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  Ng = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? gg() : e === "pt" ? wg() : e === "ch" ? yg() : e === "de" ? vg() : e === "es" ? bg() : e === "fr" ? Eg() : e === "it" ? Og() : e === "jp" ? kg() : e === "pl" ? Tg() : e === "ru" ? qg() : e === "uk" ? Ag() : Sg()
  },
  Ig = () => "Your request couldn't be verified and was blocked for security reasons. Please refresh the page and try again.",
  Rg = () => "Não foi possível verificar a sua solicitação e ela foi bloqueada por motivos de segurança. Atualize a página e tente novamente.",
  Dg = () => "无法验证您的请求，出于安全原因已被拦截。请刷新页面后重试。",
  Pg = () => "Deine Anfrage konnte nicht verifiziert werden und wurde aus Sicherheitsgründen blockiert. Bitte lade die Seite neu und versuche es erneut.",
  jg = () => "No se pudo verificar tu solicitud y fue bloqueada por motivos de seguridad. Por favor, actualiza la página e inténtalo de nuevo.",
  xg = () => "Votre requête n'a pas pu être vérifiée et a été bloquée pour des raisons de sécurité. Veuillez actualiser la page et réessayer.",
  zg = () => "Non è stato possibile verificare la tua richiesta ed è stata bloccata per motivi di sicurezza. Aggiorna la pagina e riprova.",
  Ug = () => "リクエストを検証できなかったため、セキュリティ上の理由でブロックされました。ページを再読み込みしてもう一度お試しください。",
  Lg = () => "Nie udało się zweryfikować Twojego żądania i zostało ono zablokowane ze względów bezpieczeństwa. Odśwież stronę i spróbuj ponownie.",
  Cg = () => "Не удалось проверить ваш запрос, и он был заблокирован из соображений безопасности. Обновите страницу и попробуйте снова.",
  Mg = () => "Не вдалося перевірити ваш запит, і його було заблоковано з міркувань безпеки. Оновіть сторінку та спробуйте ще раз.",
  Bg = () => "Không thể xác minh yêu cầu của bạn và nó đã bị chặn vì lý do bảo mật. Vui lòng tải lại trang và thử lại.",
  Kg = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ig() : e === "pt" ? Rg() : e === "ch" ? Dg() : e === "de" ? Pg() : e === "es" ? jg() : e === "fr" ? xg() : e === "it" ? zg() : e === "jp" ? Ug() : e === "pl" ? Lg() : e === "ru" ? Cg() : e === "uk" ? Mg() : Bg()
  },
  $g = () => "The typed username does not match your current username.",
  Fg = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Hg = () => "输入的用户名与当前用户名不匹配。",
  Vg = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Gg = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Yg = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  Jg = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  Wg = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  Qg = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Xg = () => "Введённое имя пользователя не совпадает с текущим.",
  Zg = () => "Введене імʼя користувача не збігається з поточним.",
  ew = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  tw = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? $g() : e === "pt" ? Fg() : e === "ch" ? Hg() : e === "de" ? Vg() : e === "es" ? Gg() : e === "fr" ? Yg() : e === "it" ? Jg() : e === "jp" ? Wg() : e === "pl" ? Qg() : e === "ru" ? Xg() : e === "uk" ? Zg() : ew()
  },
  rw = () => "Unexpected server error. Try again later.",
  nw = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  aw = () => "服务器出现意外错误。请稍后再试。",
  iw = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  sw = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  ow = () => "Erreur serveur inattendue. Réessayez plus tard.",
  cw = () => "Errore imprevisto del server. Riprova più tardi.",
  uw = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  lw = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  _w = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  dw = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  fw = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  o = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? rw() : e === "pt" ? nw() : e === "ch" ? aw() : e === "de" ? iw() : e === "es" ? sw() : e === "fr" ? ow() : e === "it" ? cw() : e === "jp" ? uw() : e === "pl" ? lw() : e === "ru" ? _w() : e === "uk" ? dw() : fw()
  },
  hw = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  pw = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  mw = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  gw = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  ww = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  yw = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  vw = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  bw = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  Ew = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  Ow = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  kw = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  Tw = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  qw = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? hw() : e === "pt" ? pw() : e === "ch" ? mw() : e === "de" ? gw() : e === "es" ? ww() : e === "fr" ? yw() : e === "it" ? vw() : e === "jp" ? bw() : e === "pl" ? Ew() : e === "ru" ? Ow() : e === "uk" ? kw() : Tw()
  },
  Aw = () => "You already picked a side",
  Sw = () => "Você já escolheu um lado",
  Nw = () => "你已经选择了一方",
  Iw = () => "Du hast bereits eine Seite gewählt",
  Rw = () => "Ya elegiste un bando",
  Dw = () => "Vous avez déjà choisi un camp",
  Pw = () => "Hai già scelto una fazione",
  jw = () => "すでに陣営を選択しています",
  xw = () => "Już wybrałeś stronę",
  zw = () => "Вы уже выбрали сторону",
  Uw = () => "Ви вже обрали сторону",
  Lw = () => "Bạn đã chọn phe rồi",
  Cw = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Aw() : e === "pt" ? Sw() : e === "ch" ? Nw() : e === "de" ? Iw() : e === "es" ? Rw() : e === "fr" ? Dw() : e === "it" ? Pw() : e === "jp" ? jw() : e === "pl" ? xw() : e === "ru" ? zw() : e === "uk" ? Uw() : Lw()
  },
  Mw = () => "You do not have enough Droplets to pick this side",
  Bw = () => "Você não tem Droplets suficientes para escolher esse lado",
  Kw = () => "你的 Droplets 不足，无法选择这一方",
  $w = () => "Du hast nicht genügend Droplets, um diese Seite zu wählen",
  Fw = () => "No tienes suficientes Droplets para elegir este bando",
  Hw = () => "Vous n'avez pas assez de Droplets pour choisir ce camp",
  Vw = () => "Non hai abbastanza Droplets per scegliere questa fazione",
  Gw = () => "この陣営を選ぶのに十分な Droplets がありません",
  Yw = () => "Nie masz wystarczająco Droplets, aby wybrać tę stronę",
  Jw = () => "У вас недостаточно Droplets, чтобы выбрать эту сторону",
  Ww = () => "У вас недостатньо Droplets, щоб обрати цю сторону",
  Qw = () => "Bạn không có đủ Droplets để chọn phe này",
  Xw = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Mw() : e === "pt" ? Bw() : e === "ch" ? Kw() : e === "de" ? $w() : e === "es" ? Fw() : e === "fr" ? Hw() : e === "it" ? Vw() : e === "jp" ? Gw() : e === "pl" ? Yw() : e === "ru" ? Jw() : e === "uk" ? Ww() : Qw()
  },
  Zw = () => "VPN or proxy detected. Please disable your VPN and try again.",
  ey = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  ty = () => "检测到VPN或代理。请关闭VPN后重试。",
  ry = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  ny = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  ay = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  iy = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  sy = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  oy = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  cy = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  uy = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  ly = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  _y = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Zw() : e === "pt" ? ey() : e === "ch" ? ty() : e === "de" ? ry() : e === "es" ? ny() : e === "fr" ? ay() : e === "it" ? iy() : e === "jp" ? sy() : e === "pl" ? oy() : e === "ru" ? cy() : e === "uk" ? uy() : ly()
  },
  dy = () => "Failed to load WebAssembly module. Try to use another browser.",
  fy = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  hy = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  py = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  my = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  gy = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  wy = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  yy = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  vy = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  by = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  Ey = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  Oy = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  ky = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? dy() : e === "pt" ? fy() : e === "ch" ? hy() : e === "de" ? py() : e === "es" ? my() : e === "fr" ? gy() : e === "it" ? wy() : e === "jp" ? yy() : e === "pl" ? vy() : e === "ru" ? by() : e === "uk" ? Ey() : Oy()
  },
  Ty = () => "You already have this item. Please refresh the page.",
  qy = () => "Você já possui este item. Atualize a página.",
  Ay = () => "你已经拥有此物品。请刷新页面。",
  Sy = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  Ny = () => "Ya tienes este ítem. Actualiza la página.",
  Iy = () => "Vous possédez déjà cet objet. Actualisez la page.",
  Ry = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  Dy = () => "このアイテムはすでに所持しています。ページを更新してください。",
  Py = () => "Masz już ten przedmiot. Odśwież stronę.",
  jy = () => "У вас уже есть этот предмет. Обновите страницу.",
  xy = () => "У вас уже є цей предмет. Оновіть сторінку.",
  zy = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  Kt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ty() : e === "pt" ? qy() : e === "ch" ? Ay() : e === "de" ? Sy() : e === "es" ? Ny() : e === "fr" ? Iy() : e === "it" ? Ry() : e === "jp" ? Dy() : e === "pl" ? Py() : e === "ru" ? jy() : e === "uk" ? xy() : zy()
  },
  Uy = () => "You are already in an alliance",
  Ly = () => "Você já está em uma aliança",
  Cy = () => "你已经在一个联盟中",
  My = () => "Du bist bereits in einer Allianz",
  By = () => "Ya estás en una alianza",
  Ky = () => "Vous êtes déjà dans une alliance",
  $y = () => "Sei già in un'alleanza",
  Fy = () => "すでにアライアンスに所属しています。",
  Hy = () => "Jesteś już w sojuszu",
  Vy = () => "Вы уже состоите в альянсе",
  Gy = () => "Ви вже перебуваєте в альянсі",
  Yy = () => "Bạn đã ở trong một liên minh",
  Jy = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Uy() : e === "pt" ? Ly() : e === "ch" ? Cy() : e === "de" ? My() : e === "es" ? By() : e === "fr" ? Ky() : e === "it" ? $y() : e === "jp" ? Fy() : e === "pl" ? Hy() : e === "ru" ? Vy() : e === "uk" ? Gy() : Yy()
  },
  Wy = () => "You are not allowed to do this",
  Qy = () => "Você não tem permissão para fazer isso",
  Xy = () => "你无权执行此操作",
  Zy = () => "Du bist dazu nicht berechtigt",
  ev = () => "No tienes permiso para hacer esto",
  tv = () => "Vous n’êtes pas autorisé à faire cela",
  rv = () => "Non hai il permesso di farlo",
  nv = () => "この操作を行う権限がありません。",
  av = () => "Nie masz uprawnień, aby to zrobić",
  iv = () => "У вас нет прав для этого действия",
  sv = () => "Ви не маєте права це робити",
  ov = () => "Bạn không có quyền làm việc này",
  b = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Wy() : e === "pt" ? Qy() : e === "ch" ? Xy() : e === "de" ? Zy() : e === "es" ? ev() : e === "fr" ? tv() : e === "it" ? rv() : e === "jp" ? nv() : e === "pl" ? av() : e === "ru" ? iv() : e === "uk" ? sv() : ov()
  },
  cv = () => "You are not logged in",
  uv = () => "Você não está logado",
  lv = () => "你尚未登录",
  _v = () => "Du bist nicht eingeloggt",
  dv = () => "No has iniciado sesión",
  fv = () => "Vous n’êtes pas connecté",
  hv = () => "Non hai effettuato l'accesso",
  pv = () => "ログインしていません。",
  mv = () => "Nie jesteś zalogowany",
  gv = () => "Вы не авторизованы",
  wv = () => "Ви не ввійшли в акаунт",
  yv = () => "Bạn chưa đăng nhập",
  vv = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? cv() : e === "pt" ? uv() : e === "ch" ? lv() : e === "de" ? _v() : e === "es" ? dv() : e === "fr" ? fv() : e === "it" ? hv() : e === "jp" ? pv() : e === "pl" ? mv() : e === "ru" ? gv() : e === "uk" ? wv() : yv()
  },
  bv = () => "You do not have enough charges to paint. Erase some pixels.",
  Ev = () => "Você não possui tinta suficiente para pintar. Apague alguns pixeis.",
  Ov = () => "你的充能不足，无法绘制。请先擦除一些像素。",
  kv = () => "Du hast nicht genug Ladungen zum Malen. Lösche einige Pixel.",
  Tv = () => "No tienes suficientes cargas para pintar. Borra algunos píxeles.",
  qv = () => "Vous n’avez pas assez de charges pour peindre. Effacez quelques pixels.",
  Av = () => "Non hai abbastanza vernice per dipingere. Cancella alcuni pixel.",
  Sv = () => "ペイントするためのチャージが足りません。いくつかピクセルを消してください。",
  Nv = () => "Nie masz wystarczającej liczby ładunków, aby malować. Usuń kilka pikseli.",
  Iv = () => "У вас недостаточно зарядов, чтобы рисовать. Сотрите несколько пикселей.",
  Rv = () => "У вас недостатньо зарядів, щоб малювати. Видаліть кілька пікселів.",
  Dv = () => "Bạn không có đủ lượt tô để vẽ. Hãy xóa một số pixel.",
  vt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? bv() : e === "pt" ? Ev() : e === "ch" ? Ov() : e === "de" ? kv() : e === "es" ? Tv() : e === "fr" ? qv() : e === "it" ? Av() : e === "jp" ? Sv() : e === "pl" ? Nv() : e === "ru" ? Iv() : e === "uk" ? Rv() : Dv()
  },
  Pv = () => "You do not have enough Droplets to buy this item.",
  jv = () => "Você não tem Droplets suficientes para comprar este item.",
  xv = () => "你的 Droplets 不足，无法购买此物品。",
  zv = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  Uv = () => "No tienes suficientes Droplets para comprar este ítem.",
  Lv = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  Cv = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  Mv = () => "このアイテムを購入するのに十分なDropletsがありません。",
  Bv = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  Kv = () => "У вас недостаточно Droplets для покупки этого предмета.",
  $v = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  Fv = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  $t = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Pv() : e === "pt" ? jv() : e === "ch" ? xv() : e === "de" ? zv() : e === "es" ? Uv() : e === "fr" ? Lv() : e === "it" ? Cv() : e === "jp" ? Mv() : e === "pl" ? Bv() : e === "ru" ? Kv() : e === "uk" ? $v() : Fv()
  },
  Hv = () => "You need to be logged in to paint",
  Vv = () => "Você precisa estar conectado para pintar",
  Gv = () => "你需要登录才能进行绘制",
  Yv = () => "Du musst eingeloggt sein, um zu malen",
  Jv = () => "Debes iniciar sesión para pintar",
  Wv = () => "Vous devez être connecté pour peindre",
  Qv = () => "Devi avere effettuato l'accesso per dipingere",
  Xv = () => "ペイントするにはログインが必要です。",
  Zv = () => "Musisz być zalogowany, aby malować",
  eb = () => "Чтобы рисовать, нужно войти в аккаунт",
  tb = () => "Щоб малювати, необхідно увійти в акаунт",
  rb = () => "Bạn cần đăng nhập để tô",
  bt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Hv() : e === "pt" ? Vv() : e === "ch" ? Gv() : e === "de" ? Yv() : e === "es" ? Jv() : e === "fr" ? Wv() : e === "it" ? Qv() : e === "jp" ? Xv() : e === "pl" ? Zv() : e === "ru" ? eb() : e === "uk" ? tb() : rb()
  },
  nb = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  ab = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  ib = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  sb = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  ob = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  cb = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  ub = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  lb = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  _b = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  db = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  fb = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  hb = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  pb = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? nb() : e === "pt" ? ab() : e === "ch" ? ib() : e === "de" ? sb() : e === "es" ? ob() : e === "fr" ? cb() : e === "it" ? ub() : e === "jp" ? lb() : e === "pl" ? _b() : e === "ru" ? db() : e === "uk" ? fb() : hb()
  },
  mb = r => `Your account has been suspended out until ${r.until}`,
  gb = r => `A sua conta está suspensa até ${r.until}`,
  wb = r => `你的账号已被暂停至 ${r.until}`,
  yb = r => `Dein Konto ist gesperrt bis ${r.until}`,
  vb = r => `Tu cuenta ha sido suspendida hasta ${r.until}`,
  bb = r => `Votre compte est suspendu jusqu’au ${r.until}`,
  Eb = r => `Il tuo account è sospeso fino al ${r.until}`,
  Ob = r => `あなたのアカウントは${r.until}まで一時停止されています。`,
  kb = r => `Twoje konto zostało zawieszone do ${r.until}`,
  Tb = r => `Ваш аккаунт заблокирован до ${r.until}`,
  qb = r => `Ваш акаунт призупинено до ${r.until}`,
  Ab = r => `Tài khoản của bạn đã bị đình chỉ đến ${r.until}`,
  Et = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? mb(r) : e === "pt" ? gb(r) : e === "ch" ? wb(r) : e === "de" ? yb(r) : e === "es" ? vb(r) : e === "fr" ? bb(r) : e === "it" ? Eb(r) : e === "jp" ? Ob(r) : e === "pl" ? kb(r) : e === "ru" ? Tb(r) : e === "uk" ? qb(r) : Ab(r)
  },
  Sb = () => "A correction is already pending for this ticket.",
  Nb = () => "Já existe uma correção pendente para este ticket.",
  Ib = () => "此工单已存在待审核的更正请求。",
  Rb = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  Db = () => "Ya hay una corrección pendiente para este ticket.",
  Pb = () => "Une correction est déjà en attente pour ce ticket.",
  jb = () => "Una correzione è già in sospeso per questo ticket.",
  xb = () => "このチケットには未処理の修正があります。",
  zb = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  Ub = () => "Для этого тикета уже есть запрос на исправление.",
  Lb = () => "Для цього тікета вже є запит на перевірці.",
  Cb = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  Mb = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Sb() : e === "pt" ? Nb() : e === "ch" ? Ib() : e === "de" ? Rb() : e === "es" ? Db() : e === "fr" ? Pb() : e === "it" ? jb() : e === "jp" ? xb() : e === "pl" ? zb() : e === "ru" ? Ub() : e === "uk" ? Lb() : Cb()
  },
  Bb = () => "You cannot review your own correction request.",
  Kb = () => "Você não pode revisar sua própria solicitação de correção.",
  $b = () => "不能审核自己提交的更正请求。",
  Fb = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  Hb = () => "No puedes revisar tu propia solicitud de corrección.",
  Vb = () => "Tu ne peux pas examiner ta propre demande de correction.",
  Gb = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  Yb = () => "自分のリクエストはレビューできません。",
  Jb = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  Wb = () => "Нельзя рассматривать собственный запрос.",
  Qb = () => "Не можна перевіряти власний запит.",
  Xb = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  Zb = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Bb() : e === "pt" ? Kb() : e === "ch" ? $b() : e === "de" ? Fb() : e === "es" ? Hb() : e === "fr" ? Vb() : e === "it" ? Gb() : e === "jp" ? Yb() : e === "pl" ? Jb() : e === "ru" ? Wb() : e === "uk" ? Qb() : Xb()
  },
  eE = () => "This correction has already been reviewed.",
  tE = () => "Esta correção já foi revisada.",
  rE = () => "此请求已被审核。",
  nE = () => "Diese Korrektur wurde bereits geprüft.",
  aE = () => "Esta corrección ya ha sido revisada.",
  iE = () => "Cette correction a déjà été examinée.",
  sE = () => "Questa correzione è già stata revisionata.",
  oE = () => "このリクエストはすでにレビュー済みです。",
  cE = () => "Ta prośba została już rozpatrzona.",
  uE = () => "Этот запрос уже рассмотрен.",
  lE = () => "Цей запит вже перевірено.",
  _E = () => "Yêu cầu này đã được duyệt.",
  dE = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? eE() : e === "pt" ? tE() : e === "ch" ? rE() : e === "de" ? nE() : e === "es" ? aE() : e === "fr" ? iE() : e === "it" ? sE() : e === "jp" ? oE() : e === "pl" ? cE() : e === "ru" ? uE() : e === "uk" ? lE() : _E()
  },
  fE = () => "Alliance not found",
  hE = () => "Aliança não encontrada",
  pE = () => "未找到联盟",
  mE = () => "Allianz nicht gefunden",
  gE = () => "Alianza no encontrada",
  wE = () => "Alliance introuvable",
  yE = () => "Alleanza non trovata",
  vE = () => "アライアンスが見つかりません",
  bE = () => "Nie znaleziono sojuszu",
  EE = () => "Альянс не найден",
  OE = () => "Альянс не знайдено",
  kE = () => "Không tìm thấy liên minh",
  TE = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? fE() : e === "pt" ? hE() : e === "ch" ? pE() : e === "de" ? mE() : e === "es" ? gE() : e === "fr" ? wE() : e === "it" ? yE() : e === "jp" ? vE() : e === "pl" ? bE() : e === "ru" ? EE() : e === "uk" ? OE() : kE()
  },
  qE = () => "Invalid ID",
  AE = () => "ID inválido",
  SE = () => "无效的 ID",
  NE = () => "Ungültige ID",
  IE = () => "ID inválido",
  RE = () => "ID invalide",
  DE = () => "ID non valido",
  PE = () => "無効なIDです",
  jE = () => "Nieprawidłowe ID",
  xE = () => "Неверный ID",
  zE = () => "Недійсний ID",
  UE = () => "ID không hợp lệ",
  LE = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? qE() : e === "pt" ? AE() : e === "ch" ? SE() : e === "de" ? NE() : e === "es" ? IE() : e === "fr" ? RE() : e === "it" ? DE() : e === "jp" ? PE() : e === "pl" ? jE() : e === "ru" ? xE() : e === "uk" ? zE() : UE()
  },
  CE = () => "This alliance already has the maximum number of active invites",
  ME = () => "Esta aliança já tem o número máximo de convites ativos",
  BE = () => "该联盟的有效邀请数量已达上限",
  KE = () => "Diese Allianz hat bereits die maximale Anzahl aktiver Einladungen",
  $E = () => "Esta alianza ya tiene el número máximo de invitaciones activas",
  FE = () => "Cette alliance a déjà le nombre maximal d'invitations actives",
  HE = () => "Questa alleanza ha già il numero massimo di inviti attivi",
  VE = () => "このアライアンスは有効な招待の上限に達しています",
  GE = () => "Ten sojusz ma już maksymalną liczbę aktywnych zaproszeń",
  YE = () => "У этого альянса уже максимальное количество активных приглашений",
  JE = () => "Цей альянс уже має максимальну кількість активних запрошень",
  WE = () => "Liên minh này đã đạt số lời mời đang hoạt động tối đa",
  QE = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? CE() : e === "pt" ? ME() : e === "ch" ? BE() : e === "de" ? KE() : e === "es" ? $E() : e === "fr" ? FE() : e === "it" ? HE() : e === "jp" ? VE() : e === "pl" ? GE() : e === "ru" ? YE() : e === "uk" ? JE() : WE()
  },
  XE = () => "Enter a valid discord.gg or discord.com/invite link",
  ZE = () => "Informe um link válido de discord.gg ou discord.com/invite",
  eO = () => "请输入有效的 discord.gg 或 discord.com/invite 链接",
  tO = () => "Gib einen gültigen discord.gg- oder discord.com/invite-Link ein",
  rO = () => "Introduce un enlace válido de discord.gg o discord.com/invite",
  nO = () => "Saisissez un lien discord.gg ou discord.com/invite valide",
  aO = () => "Inserisci un link discord.gg o discord.com/invite valido",
  iO = () => "有効な discord.gg または discord.com/invite のリンクを入力してください",
  sO = () => "Podaj prawidłowy link discord.gg lub discord.com/invite",
  oO = () => "Введите корректную ссылку discord.gg или discord.com/invite",
  cO = () => "Введіть дійсне посилання discord.gg або discord.com/invite",
  uO = () => "Nhập liên kết discord.gg hoặc discord.com/invite hợp lệ",
  lO = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? XE() : e === "pt" ? ZE() : e === "ch" ? eO() : e === "de" ? tO() : e === "es" ? rO() : e === "fr" ? nO() : e === "it" ? aO() : e === "jp" ? iO() : e === "pl" ? sO() : e === "ru" ? oO() : e === "uk" ? cO() : uO()
  },
  _O = () => "Enter a positive multiple of the conversion rate",
  dO = () => "Informe um múltiplo positivo da taxa de conversão",
  fO = () => "请输入兑换比例的正整数倍",
  hO = () => "Gib ein positives Vielfaches des Umrechnungskurses ein",
  pO = () => "Introduce un múltiplo positivo de la tasa de conversión",
  mO = () => "Saisissez un multiple positif du taux de conversion",
  gO = () => "Inserisci un multiplo positivo del tasso di conversione",
  wO = () => "変換レートの正の倍数を入力してください",
  yO = () => "Podaj dodatnią wielokrotność kursu wymiany",
  vO = () => "Введите положительное число, кратное курсу обмена",
  bO = () => "Введіть додатне число, кратне курсу обміну",
  EO = () => "Nhập một bội số dương của tỷ lệ quy đổi",
  OO = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? _O() : e === "pt" ? dO() : e === "ch" ? fO() : e === "de" ? hO() : e === "es" ? pO() : e === "fr" ? mO() : e === "it" ? gO() : e === "jp" ? wO() : e === "pl" ? yO() : e === "ru" ? vO() : e === "uk" ? bO() : EO()
  },
  kO = () => "The alliance does not have enough Coins",
  TO = () => "A aliança não tem moedas suficientes",
  qO = () => "该联盟的金币不足",
  AO = () => "Die Allianz hat nicht genug Coins",
  SO = () => "La alianza no tiene suficientes Monedas",
  NO = () => "L'alliance n'a pas assez de Coins",
  IO = () => "L'alleanza non ha abbastanza Monete",
  RO = () => "アライアンスのCoinsが不足しています",
  DO = () => "Sojusz nie ma wystarczającej liczby Monet",
  PO = () => "У альянса недостаточно Монет",
  jO = () => "Альянсу не вистачає монет",
  xO = () => "Liên minh không có đủ Coins",
  re = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? kO() : e === "pt" ? TO() : e === "ch" ? qO() : e === "de" ? AO() : e === "es" ? SO() : e === "fr" ? NO() : e === "it" ? IO() : e === "jp" ? RO() : e === "pl" ? DO() : e === "ru" ? PO() : e === "uk" ? jO() : xO()
  },
  zO = () => "This capability is already unlocked",
  UO = () => "Este recurso já está desbloqueado",
  LO = () => "此功能已解锁",
  CO = () => "Diese Funktion ist bereits freigeschaltet",
  MO = () => "Esta función ya está desbloqueada",
  BO = () => "Cette fonctionnalité est déjà débloquée",
  KO = () => "Questa funzione è già sbloccata",
  $O = () => "この機能はすでにロック解除されています",
  FO = () => "Ta funkcja jest już odblokowana",
  HO = () => "Эта возможность уже разблокирована",
  VO = () => "Цю можливість уже розблоковано",
  GO = () => "Tính năng này đã được mở khóa",
  Ot = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? zO() : e === "pt" ? UO() : e === "ch" ? LO() : e === "de" ? CO() : e === "es" ? MO() : e === "fr" ? BO() : e === "it" ? KO() : e === "jp" ? $O() : e === "pl" ? FO() : e === "ru" ? HO() : e === "uk" ? VO() : GO()
  },
  YO = () => "This alliance color requires Better Pallet",
  JO = () => "Esta cor da aliança requer a Paleta melhorada",
  WO = () => "此联盟颜色需要高级调色板",
  QO = () => "Diese Allianzfarbe erfordert Bessere Palette",
  XO = () => "Este color de alianza requiere la Paleta mejorada",
  ZO = () => "Cette couleur d'alliance nécessite la Palette améliorée",
  ek = () => "Questo colore dell'alleanza richiede la Tavolozza migliorata",
  tk = () => "このアライアンスカラーにはパレット強化が必要です",
  rk = () => "Ten kolor sojuszu wymaga Ulepszonej palety",
  nk = () => "Этот цвет альянса требует Улучшенную палитру",
  ak = () => "Цей колір альянсу потребує Покращеної палітри",
  ik = () => "Màu liên minh này cần Bảng màu nâng cao",
  kt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? YO() : e === "pt" ? JO() : e === "ch" ? WO() : e === "de" ? QO() : e === "es" ? XO() : e === "fr" ? ZO() : e === "it" ? ek() : e === "jp" ? tk() : e === "pl" ? rk() : e === "ru" ? nk() : e === "uk" ? ak() : ik()
  },
  sk = () => "Enter a different alliance name",
  ok = () => "Informe um nome diferente",
  ck = () => "请输入不同的联盟名称",
  uk = () => "Gib einen anderen Allianznamen ein",
  lk = () => "Introduce un nombre de alianza diferente",
  _k = () => "Saisissez un nom d'alliance différent",
  dk = () => "Inserisci un nome diverso per l'alleanza",
  fk = () => "別のアライアンス名を入力してください",
  hk = () => "Podaj inną nazwę sojuszu",
  pk = () => "Введите другое название альянса",
  mk = () => "Введіть іншу назву альянсу",
  gk = () => "Nhập một tên liên minh khác",
  wk = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? sk() : e === "pt" ? ok() : e === "ch" ? ck() : e === "de" ? uk() : e === "es" ? lk() : e === "fr" ? _k() : e === "it" ? dk() : e === "jp" ? fk() : e === "pl" ? hk() : e === "ru" ? pk() : e === "uk" ? mk() : gk()
  },
  yk = () => "A description change credit is required",
  vk = () => "É necessário um crédito de alteração da descrição",
  bk = () => "需要一次描述修改额度",
  Ek = () => "Dafür wird ein Guthaben für Beschreibungsänderungen benötigt",
  Ok = () => "Se necesita un crédito de cambio de descripción",
  kk = () => "Un crédit de modification de la description est requis",
  Tk = () => "Serve un credito di modifica della descrizione",
  qk = () => "説明変更クレジットが必要です",
  Ak = () => "Wymagany jest kredyt zmiany opisu",
  Sk = () => "Нужен кредит на изменение описания",
  Nk = () => "Потрібен кредит на зміну опису",
  Ik = () => "Cần một lượt đổi mô tả",
  Rk = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? yk() : e === "pt" ? vk() : e === "ch" ? bk() : e === "de" ? Ek() : e === "es" ? Ok() : e === "fr" ? kk() : e === "it" ? Tk() : e === "jp" ? qk() : e === "pl" ? Ak() : e === "ru" ? Sk() : e === "uk" ? Nk() : Ik()
  },
  Dk = () => "The description contains unsupported Markdown or an unsafe link",
  Pk = () => "A descrição contém Markdown não suportado ou um link inseguro",
  jk = () => "描述中包含不受支持的 Markdown 或不安全的链接",
  xk = () => "Die Beschreibung enthält nicht unterstütztes Markdown oder einen unsicheren Link",
  zk = () => "La descripción contiene Markdown no compatible o un enlace inseguro",
  Uk = () => "La description contient du Markdown non pris en charge ou un lien non sécurisé",
  Lk = () => "La descrizione contiene Markdown non supportato o un link non sicuro",
  Ck = () => "説明に未対応のMarkdownまたは安全でないリンクが含まれています",
  Mk = () => "Opis zawiera nieobsługiwany Markdown lub niebezpieczny link",
  Bk = () => "Описание содержит неподдерживаемый Markdown или небезопасную ссылку",
  Kk = () => "Опис містить непідтримуваний Markdown або небезпечне посилання",
  $k = () => "Mô tả chứa Markdown không được hỗ trợ hoặc liên kết không an toàn",
  Fk = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Dk() : e === "pt" ? Pk() : e === "ch" ? jk() : e === "de" ? xk() : e === "es" ? zk() : e === "fr" ? Uk() : e === "it" ? Lk() : e === "jp" ? Ck() : e === "pl" ? Mk() : e === "ru" ? Bk() : e === "uk" ? Kk() : $k()
  },
  Hk = () => "This member already has access to the draft",
  Vk = () => "Este membro já tem acesso ao rascunho",
  Gk = () => "该成员已拥有此草稿的权限",
  Yk = () => "Dieses Mitglied hat bereits Zugriff auf den Entwurf",
  Jk = () => "Este miembro ya tiene acceso al borrador",
  Wk = () => "Ce membre a déjà accès au brouillon",
  Qk = () => "Questo membro ha già accesso alla bozza",
  Xk = () => "このメンバーはすでにこの下書きにアクセスできます",
  Zk = () => "Ten członek ma już dostęp do szkicu",
  eT = () => "У этого участника уже есть доступ к черновику",
  tT = () => "Цей учасник уже має доступ до чернетки",
  rT = () => "Thành viên này đã có quyền truy cập bản nháp",
  nT = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Hk() : e === "pt" ? Vk() : e === "ch" ? Gk() : e === "de" ? Yk() : e === "es" ? Jk() : e === "fr" ? Wk() : e === "it" ? Qk() : e === "jp" ? Xk() : e === "pl" ? Zk() : e === "ru" ? eT() : e === "uk" ? tT() : rT()
  },
  aT = () => "Unequip this version before removing it",
  iT = () => "Desequipe esta versão antes de removê-la",
  sT = () => "移除前请先卸下此版本",
  oT = () => "Lege diese Version ab, bevor du sie entfernst",
  cT = () => "Desequipa esta versión antes de eliminarla",
  uT = () => "Déséquipez cette version avant de la retirer",
  lT = () => "Disequipaggia questa versione prima di rimuoverla",
  _T = () => "削除する前に、このバージョンの装備を解除してください",
  dT = () => "Zdejmij tę wersję przed jej usunięciem",
  fT = () => "Снимите эту версию перед удалением",
  hT = () => "Зніміть цю версію перед видаленням",
  pT = () => "Hãy gỡ trang bị phiên bản này trước khi xóa",
  mT = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? aT() : e === "pt" ? iT() : e === "ch" ? sT() : e === "de" ? oT() : e === "es" ? cT() : e === "fr" ? uT() : e === "it" ? lT() : e === "jp" ? _T() : e === "pl" ? dT() : e === "ru" ? fT() : e === "uk" ? hT() : pT()
  },
  gT = () => "You are painting too quickly. Wait a moment and try again.",
  wT = () => "Você está pintando rápido demais. Espere um momento e tente novamente.",
  yT = () => "你的绘制速度过快。请稍后再试。",
  vT = () => "Du malst zu schnell. Warte einen Moment und versuche es erneut.",
  bT = () => "Estás pintando demasiado rápido. Espera un momento e inténtalo de nuevo.",
  ET = () => "Vous peignez trop vite. Attendez un instant et réessayez.",
  OT = () => "Stai dipingendo troppo in fretta. Attendi un momento e riprova.",
  kT = () => "ペイントが速すぎます。少し待ってから再度お試しください。",
  TT = () => "Malujesz zbyt szybko. Odczekaj chwilę i spróbuj ponownie.",
  qT = () => "Вы рисуете слишком быстро. Подождите немного и попробуйте снова.",
  AT = () => "Ви малюєте занадто швидко. Зачекайте трохи і спробуйте ще раз.",
  ST = () => "Bạn đang tô quá nhanh. Hãy chờ một lát rồi thử lại.",
  Tt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? gT() : e === "pt" ? wT() : e === "ch" ? yT() : e === "de" ? vT() : e === "es" ? bT() : e === "fr" ? ET() : e === "it" ? OT() : e === "jp" ? kT() : e === "pl" ? TT() : e === "ru" ? qT() : e === "uk" ? AT() : ST()
  },
  NT = () => "The alliance headquarters is not unlocked yet",
  IT = () => "A sede da aliança ainda não foi desbloqueada",
  RT = () => "该联盟总部尚未解锁",
  DT = () => "Das Hauptquartier der Allianz ist noch nicht freigeschaltet",
  PT = () => "El cuartel general de la alianza aún no está desbloqueado",
  jT = () => "Le quartier général de l'alliance n'est pas encore débloqué",
  xT = () => "Il quartier generale dell'alleanza non è ancora sbloccato",
  zT = () => "アライアンスの拠点はまだ解放されていません",
  UT = () => "Siedziba sojuszu nie została jeszcze odblokowana",
  LT = () => "Штаб-квартира альянса ещё не разблокирована",
  CT = () => "Штаб-квартиру альянсу ще не розблоковано",
  MT = () => "Trụ sở của liên minh chưa được mở khóa",
  qt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? NT() : e === "pt" ? IT() : e === "ch" ? RT() : e === "de" ? DT() : e === "es" ? PT() : e === "fr" ? jT() : e === "it" ? xT() : e === "jp" ? zT() : e === "pl" ? UT() : e === "ru" ? LT() : e === "uk" ? CT() : MT()
  },
  BT = () => "Choose the headquarters location on the map first",
  KT = () => "Escolha primeiro o local da sede no mapa",
  $T = () => "请先在地图上选择总部位置",
  FT = () => "Wähle zuerst den Standort des Hauptquartiers auf der Karte",
  HT = () => "Elige primero la ubicación del cuartel general en el mapa",
  VT = () => "Choisissez d'abord l'emplacement du quartier général sur la carte",
  GT = () => "Scegli prima la posizione del quartier generale sulla mappa",
  YT = () => "先にマップ上で拠点の場所を選択してください",
  JT = () => "Najpierw wybierz lokalizację siedziby na mapie",
  WT = () => "Сначала выберите место штаб-квартиры на карте",
  QT = () => "Спершу виберіть розташування штаб-квартири на карті",
  XT = () => "Hãy chọn vị trí trụ sở trên bản đồ trước",
  ZT = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? BT() : e === "pt" ? KT() : e === "ch" ? $T() : e === "de" ? FT() : e === "es" ? HT() : e === "fr" ? VT() : e === "it" ? GT() : e === "jp" ? YT() : e === "pl" ? JT() : e === "ru" ? WT() : e === "uk" ? QT() : XT()
  },
  eq = () => "Moving the headquarters requires a Change Headquarters credit",
  tq = () => "Mover a sede requer um crédito de Mudar Sede",
  rq = () => "移动总部需要一张“迁移总部”凭证",
  nq = () => 'Zum Verlegen des Hauptquartiers wird ein Gutschein "Hauptquartier verlegen" benötigt',
  aq = () => "Mover el cuartel general requiere un crédito de Cambiar cuartel general",
  iq = () => "Déplacer le quartier général nécessite un crédit Changement de quartier général",
  sq = () => "Spostare il quartier generale richiede un credito Cambia quartier generale",
  oq = () => "拠点の移動には「拠点の変更」クレジットが必要です",
  cq = () => "Przeniesienie siedziby wymaga kredytu Zmiana Siedziby",
  uq = () => 'Для переноса штаб-квартиры нужен купон "Смена штаб-квартиры"',
  lq = () => 'Щоб перемістити штаб-квартиру, потрібен кредит "Змінити штаб-квартиру"',
  _q = () => "Di chuyển trụ sở cần một lượt Đổi Trụ sở",
  dq = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? eq() : e === "pt" ? tq() : e === "ch" ? rq() : e === "de" ? nq() : e === "es" ? aq() : e === "fr" ? iq() : e === "it" ? sq() : e === "jp" ? oq() : e === "pl" ? cq() : e === "ru" ? uq() : e === "uk" ? lq() : _q()
  },
  fq = () => "Headquarters sizes must be unlocked in order",
  hq = () => "Os tamanhos da sede devem ser desbloqueados em ordem",
  pq = () => "总部尺寸必须按顺序解锁",
  mq = () => "Die Hauptquartier-Größen müssen der Reihe nach freigeschaltet werden",
  gq = () => "Los tamaños del cuartel general deben desbloquearse en orden",
  wq = () => "Les tailles du quartier général doivent être débloquées dans l'ordre",
  yq = () => "Le dimensioni del quartier generale devono essere sbloccate in ordine",
  vq = () => "拠点のサイズは順番に解放する必要があります",
  bq = () => "Rozmiary siedziby trzeba odblokowywać po kolei",
  Eq = () => "Размеры штаб-квартиры нужно разблокировать по порядку",
  Oq = () => "Розміри штаб-квартири потрібно розблоковувати по порядку",
  kq = () => "Các kích thước trụ sở phải được mở khóa theo thứ tự",
  Tq = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? fq() : e === "pt" ? hq() : e === "ch" ? pq() : e === "de" ? mq() : e === "es" ? gq() : e === "fr" ? wq() : e === "it" ? yq() : e === "jp" ? vq() : e === "pl" ? bq() : e === "ru" ? Eq() : e === "uk" ? Oq() : kq()
  },
  qq = () => "Headquarters upgrades must be unlocked in order",
  Aq = () => "As melhorias da sede devem ser desbloqueadas em ordem",
  Sq = () => "总部升级必须按顺序解锁",
  Nq = () => "Die Hauptquartier-Verbesserungen müssen der Reihe nach freigeschaltet werden",
  Iq = () => "Las mejoras del cuartel general deben desbloquearse en orden",
  Rq = () => "Les améliorations du quartier général doivent être débloquées dans l'ordre",
  Dq = () => "I miglioramenti del quartier generale devono essere sbloccati in ordine",
  Pq = () => "拠点のアップグレードは順番に解放する必要があります",
  jq = () => "Ulepszenia siedziby trzeba odblokowywać po kolei",
  xq = () => "Улучшения штаб-квартиры нужно разблокировать по порядку",
  zq = () => "Покращення штаб-квартири потрібно розблоковувати по порядку",
  Uq = () => "Các nâng cấp trụ sở phải được mở khóa theo thứ tự",
  Lq = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? qq() : e === "pt" ? Aq() : e === "ch" ? Sq() : e === "de" ? Nq() : e === "es" ? Iq() : e === "fr" ? Rq() : e === "it" ? Dq() : e === "jp" ? Pq() : e === "pl" ? jq() : e === "ru" ? xq() : e === "uk" ? zq() : Uq()
  },
  Cq = () => "Could not load the headquarters leaderboard",
  Mq = () => "Não foi possível carregar o ranking da sede",
  Bq = () => "无法加载总部排行榜",
  Kq = () => "Die Rangliste des Hauptquartiers konnte nicht geladen werden",
  $q = () => "No se pudo cargar la clasificación del cuartel general",
  Fq = () => "Impossible de charger le classement du quartier général",
  Hq = () => "Impossibile caricare la classifica del quartier generale",
  Vq = () => "拠点ランキングを読み込めませんでした",
  Gq = () => "Nie udało się wczytać rankingu siedziby",
  Yq = () => "Не удалось загрузить рейтинг штаб-квартиры",
  Jq = () => "Не вдалося завантажити рейтинг штаб-квартири",
  Wq = () => "Không thể tải bảng xếp hạng trụ sở",
  Qq = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Cq() : e === "pt" ? Mq() : e === "ch" ? Bq() : e === "de" ? Kq() : e === "es" ? $q() : e === "fr" ? Fq() : e === "it" ? Hq() : e === "jp" ? Vq() : e === "pl" ? Gq() : e === "ru" ? Yq() : e === "uk" ? Jq() : Wq()
  },
  Xq = () => "Not enough headquarters charges",
  Zq = () => "Cargas da sede insuficientes",
  eA = () => "总部充能不足",
  tA = () => "Nicht genügend Hauptquartier-Ladungen",
  rA = () => "Cargas del cuartel general insuficientes",
  nA = () => "Charges du quartier général insuffisantes",
  aA = () => "Cariche del quartier generale insufficienti",
  iA = () => "拠点のチャージが足りません",
  sA = () => "Za mało ładunków siedziby",
  oA = () => "Недостаточно зарядов штаб-квартиры",
  cA = () => "Недостатньо зарядів штаб-квартири",
  uA = () => "Không đủ lượt tô của trụ sở",
  lA = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Xq() : e === "pt" ? Zq() : e === "ch" ? eA() : e === "de" ? tA() : e === "es" ? rA() : e === "fr" ? nA() : e === "it" ? aA() : e === "jp" ? iA() : e === "pl" ? sA() : e === "ru" ? oA() : e === "uk" ? cA() : uA()
  },
  _A = () => "Nothing changed on the canvas",
  dA = () => "Nada mudou no canvas",
  fA = () => "画布没有任何改动",
  hA = () => "Auf dem Canvas hat sich nichts geändert",
  pA = () => "No cambió nada en el lienzo",
  mA = () => "Rien n'a changé sur le canvas",
  gA = () => "Nulla è cambiato sul canvas",
  wA = () => "キャンバスに変更はありません",
  yA = () => "Nic się nie zmieniło na płótnie",
  vA = () => "На холсте ничего не изменилось",
  bA = () => "На полотні нічого не змінилося",
  EA = () => "Không có gì thay đổi trên bảng vẽ",
  OA = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? _A() : e === "pt" ? dA() : e === "ch" ? fA() : e === "de" ? hA() : e === "es" ? pA() : e === "fr" ? mA() : e === "it" ? gA() : e === "jp" ? wA() : e === "pl" ? yA() : e === "ru" ? vA() : e === "uk" ? bA() : EA()
  },
  kA = () => "The headquarters canvas is locked by moderation",
  TA = () => "O canvas da sede está bloqueado pela moderação",
  qA = () => "总部画布已被审核锁定",
  AA = () => "Der Hauptquartier-Canvas ist von der Moderation gesperrt",
  SA = () => "El lienzo del cuartel general está bloqueado por la moderación",
  NA = () => "Le canvas du quartier général est verrouillé par la modération",
  IA = () => "Il canvas del quartier generale è bloccato dalla moderazione",
  RA = () => "拠点のキャンバスはモデレーションによりロックされています",
  DA = () => "Płótno siedziby zostało zablokowane przez moderację",
  PA = () => "Холст штаб-квартиры заблокирован модерацией",
  jA = () => "Полотно штаб-квартири заблоковано модерацією",
  xA = () => "Bảng vẽ trụ sở đang bị kiểm duyệt khóa",
  zA = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? kA() : e === "pt" ? TA() : e === "ch" ? qA() : e === "de" ? AA() : e === "es" ? SA() : e === "fr" ? NA() : e === "it" ? IA() : e === "jp" ? RA() : e === "pl" ? DA() : e === "ru" ? PA() : e === "uk" ? jA() : xA()
  },
  UA = () => "You are timed out from the headquarters canvas",
  LA = () => "Você está suspenso do canvas da sede",
  CA = () => "你已被禁言，无法在总部画布上绘制",
  MA = () => "Du hast einen Timeout für den Hauptquartier-Canvas",
  BA = () => "Estás suspendido del lienzo del cuartel general",
  KA = () => "Vous êtes suspendu du canvas du quartier général",
  $A = () => "Sei sospeso dal canvas del quartier generale",
  FA = () => "あなたは拠点のキャンバスからタイムアウトされています",
  HA = () => "Masz zawieszony dostęp do płótna siedziby",
  VA = () => "Вам выдан тайм-аут на холсте штаб-квартиры",
  GA = () => "У вас тайм-аут на полотні штаб-квартири",
  YA = () => "Bạn đang bị tạm khóa khỏi bảng vẽ trụ sở",
  JA = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? UA() : e === "pt" ? LA() : e === "ch" ? CA() : e === "de" ? MA() : e === "es" ? BA() : e === "fr" ? KA() : e === "it" ? $A() : e === "jp" ? FA() : e === "pl" ? HA() : e === "ru" ? VA() : e === "uk" ? GA() : YA()
  },
  WA = () => "A reason is required",
  QA = () => "Um motivo é obrigatório",
  XA = () => "必须填写原因",
  ZA = () => "Ein Grund ist erforderlich",
  eS = () => "Se requiere un motivo",
  tS = () => "Un motif est obligatoire",
  rS = () => "Il motivo è obbligatorio",
  nS = () => "理由は必須です",
  aS = () => "Powód jest wymagany",
  iS = () => "Нужно указать причину",
  sS = () => "Потрібно вказати причину",
  oS = () => "Cần nhập lý do",
  At = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? WA() : e === "pt" ? QA() : e === "ch" ? XA() : e === "de" ? ZA() : e === "es" ? eS() : e === "fr" ? tS() : e === "it" ? rS() : e === "jp" ? nS() : e === "pl" ? aS() : e === "ru" ? iS() : e === "uk" ? sS() : oS()
  },
  cS = () => "This member already has an active headquarters timeout",
  uS = () => "Este membro já tem uma suspensão ativa da sede",
  lS = () => "该成员已有生效中的总部禁言",
  _S = () => "Dieses Mitglied hat bereits einen aktiven Hauptquartier-Timeout",
  dS = () => "Este miembro ya tiene una suspensión activa del cuartel general",
  fS = () => "Ce membre a déjà une suspension active du quartier général",
  hS = () => "Questo membro ha già una sospensione attiva dal quartier generale",
  pS = () => "このメンバーにはすでに有効な拠点のタイムアウトがあります",
  mS = () => "Ten członek ma już aktywne zawieszenie w siedzibie",
  gS = () => "У этого участника уже есть активный тайм-аут штаб-квартиры",
  wS = () => "Цей учасник уже має активний тайм-аут штаб-квартири",
  yS = () => "Thành viên này đã có một lệnh tạm khóa trụ sở đang hiệu lực",
  vS = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? cS() : e === "pt" ? uS() : e === "ch" ? lS() : e === "de" ? _S() : e === "es" ? dS() : e === "fr" ? fS() : e === "it" ? hS() : e === "jp" ? pS() : e === "pl" ? mS() : e === "ru" ? gS() : e === "uk" ? wS() : yS()
  },
  bS = () => "This timeout is no longer active",
  ES = () => "Esta suspensão não está mais ativa",
  OS = () => "该禁言已不再生效",
  kS = () => "Dieser Timeout ist nicht mehr aktiv",
  TS = () => "Esta suspensión ya no está activa",
  qS = () => "Cette suspension n'est plus active",
  AS = () => "Questa sospensione non è più attiva",
  SS = () => "このタイムアウトはすでに有効ではありません",
  NS = () => "To zawieszenie nie jest już aktywne",
  IS = () => "Этот тайм-аут больше не активен",
  RS = () => "Цей тайм-аут більше не активний",
  DS = () => "Lệnh tạm khóa này không còn hiệu lực",
  PS = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? bS() : e === "pt" ? ES() : e === "ch" ? OS() : e === "de" ? kS() : e === "es" ? TS() : e === "fr" ? qS() : e === "it" ? AS() : e === "jp" ? SS() : e === "pl" ? NS() : e === "ru" ? IS() : e === "uk" ? RS() : DS()
  },
  jS = () => "That user already belongs to an alliance",
  xS = () => "Esse usuário já pertence a uma aliança",
  zS = () => "该用户已属于其他联盟",
  US = () => "Dieser Nutzer gehört bereits einer Allianz an",
  LS = () => "Ese usuario ya pertenece a una alianza",
  CS = () => "Cet utilisateur appartient déjà à une alliance",
  MS = () => "Questo utente appartiene già a un'alleanza",
  BS = () => "そのユーザーはすでに別のアライアンスに所属しています",
  KS = () => "Ten użytkownik należy już do sojuszu",
  $S = () => "Этот пользователь уже состоит в альянсе",
  FS = () => "Цей користувач уже належить до альянсу",
  HS = () => "Người dùng đó đã thuộc một liên minh",
  VS = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? jS() : e === "pt" ? xS() : e === "ch" ? zS() : e === "de" ? US() : e === "es" ? LS() : e === "fr" ? CS() : e === "it" ? MS() : e === "jp" ? BS() : e === "pl" ? KS() : e === "ru" ? $S() : e === "uk" ? FS() : HS()
  },
  GS = () => "The alliance is not archived",
  YS = () => "A aliança não está arquivada",
  JS = () => "该联盟未被归档",
  WS = () => "Die Allianz ist nicht archiviert",
  QS = () => "La alianza no está archivada",
  XS = () => "L'alliance n'est pas archivée",
  ZS = () => "L'alleanza non è archiviata",
  eN = () => "このアライアンスはアーカイブされていません",
  tN = () => "Sojusz nie jest zarchiwizowany",
  rN = () => "Альянс не находится в архиве",
  nN = () => "Альянс не архівований",
  aN = () => "Liên minh này chưa được lưu trữ",
  iN = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? GS() : e === "pt" ? YS() : e === "ch" ? JS() : e === "de" ? WS() : e === "es" ? QS() : e === "fr" ? XS() : e === "it" ? ZS() : e === "jp" ? eN() : e === "pl" ? tN() : e === "ru" ? rN() : e === "uk" ? nN() : aN()
  },
  sN = () => "The selected headquarters pixels have too much history to change at once. Select fewer pixels.",
  oN = () => "Os pixels selecionados têm histórico demais para alterar de uma vez. Selecione menos pixels.",
  cN = () => "所选总部像素的历史记录过多，无法一次性修改。请减少选择的像素。",
  uN = () => "Die ausgewählten Hauptquartier-Pixel haben zu viel Verlauf, um sie auf einmal zu ändern. Wähle weniger Pixel aus.",
  lN = () => "Los píxeles seleccionados del cuartel general tienen demasiado historial para cambiarlos de una vez. Selecciona menos píxeles.",
  _N = () => "Les pixels sélectionnés du quartier général ont trop d'historique pour être modifiés en une seule fois. Sélectionnez moins de pixels.",
  dN = () => "I pixel selezionati del quartier generale hanno troppa cronologià per essere modificati in una volta. Seleziona meno pixel.",
  fN = () => "選択した拠点のピクセルは履歴が多すぎて一度に変更できません。選択するピクセルを減らしてください。",
  hN = () => "Wybrane piksele siedziby mają zbyt dużo historii, aby zmienić je naraz. Wybierz mniej pikseli.",
  pN = () => "У выбранных пикселей штаб-квартиры слишком большая история, чтобы изменить всё сразу. Выберите меньше пикселей.",
  mN = () => "Вибрані пікселі штаб-квартири мають забагато історії, щоб змінити їх за один раз. Виберіть менше пікселів.",
  gN = () => "Các pixel trụ sở đã chọn có quá nhiều lịch sử để thay đổi cùng lúc. Hãy chọn ít pixel hơn.",
  wN = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? sN() : e === "pt" ? oN() : e === "ch" ? cN() : e === "de" ? uN() : e === "es" ? lN() : e === "fr" ? _N() : e === "it" ? dN() : e === "jp" ? fN() : e === "pl" ? hN() : e === "ru" ? pN() : e === "uk" ? mN() : gN()
  },
  yN = () => "This alliance has no headquarters",
  vN = () => "Esta aliança não tem sede",
  bN = () => "该联盟没有总部",
  EN = () => "Diese Allianz hat kein Hauptquartier",
  ON = () => "Esta alianza no tiene cuartel general",
  kN = () => "Cette alliance n'a pas de quartier général",
  TN = () => "Questa alleanza non ha un quartier generale",
  qN = () => "このアライアンスには拠点がありません",
  AN = () => "Ten sojusz nie ma siedziby",
  SN = () => "У этого альянса нет штаб-квартиры",
  NN = () => "Цей альянс не має штаб-квартири",
  IN = () => "Liên minh này không có trụ sở",
  RN = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? yN() : e === "pt" ? vN() : e === "ch" ? bN() : e === "de" ? EN() : e === "es" ? ON() : e === "fr" ? kN() : e === "it" ? TN() : e === "jp" ? qN() : e === "pl" ? AN() : e === "ru" ? SN() : e === "uk" ? NN() : IN()
  },
  DN = () => "Buy the previous overlay space upgrade first.",
  PN = () => "Compre primeiro a melhoria anterior de espaços para overlays.",
  jN = () => "请先购买上一级 Overlay 空间升级。",
  xN = () => "Kaufe zuerst die vorherige Overlay-Platz-Erweiterung.",
  zN = () => "Compra primero la mejora anterior de espacios de overlay.",
  UN = () => "Achetez d’abord l’amélioration précédente des emplacements d’overlay.",
  LN = () => "Acquista prima il precedente ampliamento degli spazi per overlay.",
  CN = () => "先に前段階のOverlay枠アップグレードを購入してください。",
  MN = () => "Najpierw kup poprzednie rozszerzenie miejsc na overlaye.",
  BN = () => "Сначала купите предыдущее расширение мест для Overlay.",
  KN = () => "Спочатку придбайте попереднє розширення місць для Overlay.",
  $N = () => "Hãy mua nâng cấp chỗ lưu overlay trước đó trước.",
  FN = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? DN() : e === "pt" ? PN() : e === "ch" ? jN() : e === "de" ? xN() : e === "es" ? zN() : e === "fr" ? UN() : e === "it" ? LN() : e === "jp" ? CN() : e === "pl" ? MN() : e === "ru" ? BN() : e === "uk" ? KN() : $N()
  },
  HN = () => "This alliance has no free overlay spaces.",
  VN = () => "Esta aliança não tem espaços para overlays livres.",
  GN = () => "此联盟没有可用的 Overlay 空间。",
  YN = () => "Diese Allianz hat keine freien Overlay-Plätze.",
  JN = () => "Esta alianza no tiene espacios de overlay libres.",
  WN = () => "Cette alliance n’a plus d’emplacement d’overlay libre.",
  QN = () => "Questa alleanza non ha spazi liberi per overlay.",
  XN = () => "この同盟には空きOverlay枠がありません。",
  ZN = () => "Ten sojusz nie ma wolnych miejsc na overlaye.",
  eI = () => "У этого альянса нет свободных мест для Overlay.",
  tI = () => "Цей альянс не має вільних місць для Overlay.",
  rI = () => "Liên minh này không còn chỗ lưu overlay trống.",
  nI = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? HN() : e === "pt" ? VN() : e === "ch" ? GN() : e === "de" ? YN() : e === "es" ? JN() : e === "fr" ? WN() : e === "it" ? QN() : e === "jp" ? XN() : e === "pl" ? ZN() : e === "ru" ? eI() : e === "uk" ? tI() : rI()
  },
  aI = () => "This alliance has reached its overlay storage limit. Delete an overlay or replace one with a smaller image.",
  iI = () => "Esta aliança atingiu o limite de armazenamento de overlays. Exclua um overlay ou substitua-o por uma imagem menor.",
  sI = () => "此联盟已达到 Overlay 存储上限。请删除一个 Overlay 或替换为更小的图片。",
  oI = () => "Diese Allianz hat ihr Speicherlimit für Overlays erreicht. Lösche ein Overlay oder ersetze es durch ein kleineres Bild.",
  cI = () => "Esta alianza alcanzó el límite de almacenamiento de overlays. Elimina un overlay o reemplázalo por una imagen más pequeña.",
  uI = () => "Cette alliance a atteint sa limite de stockage d’overlays. Supprimez un overlay ou remplacez-le par une image plus petite.",
  lI = () => "Questa alleanza ha raggiunto il limite di archiviazione degli overlay. Elimina un overlay o sostituiscilo con un'immagine più piccola.",
  _I = () => "この同盟はOverlayの保存容量上限に達しました。Overlayを削除するか、より小さい画像に置き換えてください。",
  dI = () => "Ten sojusz osiągnął limit miejsca na overlaye. Usuń overlay lub zastąp go mniejszym obrazem.",
  fI = () => "Этот альянс достиг лимита хранилища Overlay. Удалите Overlay или замените его изображением меньшего размера.",
  hI = () => "Цей альянс досяг ліміту сховища Overlay. Видаліть Overlay або замініть його меншим зображенням.",
  pI = () => "Liên minh này đã đạt giới hạn lưu trữ overlay. Hãy xóa một overlay hoặc thay bằng hình ảnh nhỏ hơn.",
  St = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? aI() : e === "pt" ? iI() : e === "ch" ? sI() : e === "de" ? oI() : e === "es" ? cI() : e === "fr" ? uI() : e === "it" ? lI() : e === "jp" ? _I() : e === "pl" ? dI() : e === "ru" ? fI() : e === "uk" ? hI() : pI()
  },
  mI = () => "Choose a valid image up to 8 MB.",
  gI = () => "Escolha uma imagem válida de até 8 MB.",
  wI = () => "请选择不超过 8 MB 的有效图片。",
  yI = () => "Wähle ein gültiges Bild bis zu 8 MB.",
  vI = () => "Elige una imagen válida de hasta 8 MB.",
  bI = () => "Choisissez une image valide de 8 Mo maximum.",
  EI = () => "Scegli un’immagine valida fino a 8 MB.",
  OI = () => "8 MB 以下の有効な画像を選択してください。",
  kI = () => "Wybierz prawidłowy obraz o rozmiarze do 8 MB.",
  TI = () => "Выберите допустимое изображение размером до 8 МБ.",
  qI = () => "Виберіть дійсне зображення розміром до 8 МБ.",
  AI = () => "Chọn ảnh hợp lệ có dung lượng tối đa 8 MB.",
  Nt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? mI() : e === "pt" ? gI() : e === "ch" ? wI() : e === "de" ? yI() : e === "es" ? vI() : e === "fr" ? bI() : e === "it" ? EI() : e === "jp" ? OI() : e === "pl" ? kI() : e === "ru" ? TI() : e === "uk" ? qI() : AI()
  },
  SI = () => "Too many overlay changes are happening. Wait a moment and try again.",
  NI = () => "Muitas alterações de overlays estão acontecendo. Aguarde um momento e tente novamente.",
  II = () => "正在进行的 Overlay 更改过多。请稍候再试。",
  RI = () => "Es werden gerade zu viele Overlays geändert. Warte einen Moment und versuche es erneut.",
  DI = () => "Se están realizando demasiados cambios en los overlays. Espera un momento e inténtalo de nuevo.",
  PI = () => "Trop de modifications d’overlays sont en cours. Attendez un instant et réessayez.",
  jI = () => "Sono in corso troppe modifiche agli overlay. Attendi un momento e riprova.",
  xI = () => "Overlayの変更が多すぎます。少し待ってからもう一度お試しください。",
  zI = () => "Trwa zbyt wiele zmian overlayów. Poczekaj chwilę i spróbuj ponownie.",
  UI = () => "Слишком много изменений Overlay. Немного подождите и попробуйте снова.",
  LI = () => "Зараз вноситься забагато змін до Overlay. Трохи зачекайте та спробуйте ще раз.",
  CI = () => "Đang có quá nhiều thay đổi overlay. Hãy chờ một lúc rồi thử lại.",
  We = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? SI() : e === "pt" ? NI() : e === "ch" ? II() : e === "de" ? RI() : e === "es" ? DI() : e === "fr" ? PI() : e === "it" ? jI() : e === "jp" ? xI() : e === "pl" ? zI() : e === "ru" ? UI() : e === "uk" ? LI() : CI()
  },
  MI = () => "The overlay position is outside this canvas.",
  BI = () => "The overlay position is outside this canvas.",
  KI = () => "The overlay position is outside this canvas.",
  $I = () => "The overlay position is outside this canvas.",
  FI = () => "The overlay position is outside this canvas.",
  HI = () => "The overlay position is outside this canvas.",
  VI = () => "The overlay position is outside this canvas.",
  GI = () => "The overlay position is outside this canvas.",
  YI = () => "The overlay position is outside this canvas.",
  JI = () => "The overlay position is outside this canvas.",
  WI = () => "The overlay position is outside this canvas.",
  QI = () => "The overlay position is outside this canvas.",
  XI = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? MI() : e === "pt" ? BI() : e === "ch" ? KI() : e === "de" ? $I() : e === "es" ? FI() : e === "fr" ? HI() : e === "it" ? VI() : e === "jp" ? GI() : e === "pl" ? YI() : e === "ru" ? JI() : e === "uk" ? WI() : QI()
  },
  ZI = () => "Select this location before setting its position.",
  e0 = () => "Select this location before setting its position.",
  t0 = () => "Select this location before setting its position.",
  r0 = () => "Select this location before setting its position.",
  n0 = () => "Select this location before setting its position.",
  a0 = () => "Select this location before setting its position.",
  i0 = () => "Select this location before setting its position.",
  s0 = () => "Select this location before setting its position.",
  o0 = () => "Select this location before setting its position.",
  c0 = () => "Select this location before setting its position.",
  u0 = () => "Select this location before setting its position.",
  l0 = () => "Select this location before setting its position.",
  _0 = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ZI() : e === "pt" ? e0() : e === "ch" ? t0() : e === "de" ? r0() : e === "es" ? n0() : e === "fr" ? a0() : e === "it" ? i0() : e === "jp" ? s0() : e === "pl" ? o0() : e === "ru" ? c0() : e === "uk" ? u0() : l0()
  };

function d0(r, t) {
  return (t == null ? void 0 : t.aborted) === !0 || typeof DOMException < "u" && r instanceof DOMException && r.name === "AbortError"
}
var Oe, ke;
class f0 {
  constructor(t) {
    v(this, Oe, A(!0));
    v(this, ke, A(null));
    this.url = t
  }
  get online() {
    return E(h(this, Oe))
  }
  set online(t) {
    k(h(this, Oe), t, !0)
  }
  get serverTimeOffsetMs() {
    return E(h(this, ke))
  }
  set serverTimeOffsetMs(t) {
    k(h(this, ke), t, !0)
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
      throw d0(n, e == null ? void 0 : e.signal) ? n : (console.error("Fetch error:", n), this.online = !1, new Error(Gi()))
    }
  }
  async request(t, e) {
    var c;
    e = {
      credentials: "include",
      ...e
    };
    let n = await this.guardedFetch(t, e);
    if (n.status === i.FORBIDDEN && n.headers.get("x-block-reason") === "tor") throw new Error(Ng());
    if (n.status === i.FORBIDDEN && n.headers.get("x-block-reason") === "integrity") throw new Error(Kg());
    const a = ((c = n.headers.get("cf-mitigated")) == null ? void 0 : c.toLowerCase()) === "challenge";
    if (n.status === 403 && a) {
      if (F.setCfLikelyAutomated(!0), !await Lt()) throw new Error(ee());
      n = await this.guardedFetch(t, e)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (n.status === i.TOO_MANY_REQUESTS) throw new ae(pb());
      if (n.status === i.REQUEST_TIMEOUT) throw new Error(ym());
      if (n.status === i.SERVICE_UNAVAILABLE) throw new Error(ag())
    }
    return n
  }
}
Oe = new WeakMap, ke = new WeakMap;
class l extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}
class zR extends Error {}

function h0(r) {
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
      if (e.status === i.BAD_REQUEST) throw new Error(ad());
      if (e.status === i.CONFLICT) throw new Error(Ep());
      if (e.status === i.FORBIDDEN) throw new Error(fh());
      if (e.status === i.TOO_MANY_REQUESTS) throw new Error(yt());
      if (e.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(xp());
      if (e.status === i.LOCKED) throw new Error(qw());
      if (e.status === i.UNPROCESSABLE_ENTITY) throw new Error(gd());
      if (e.status === i.NOT_ACCEPTABLE) throw new Error(_y());
      if (e.status === i.PRECONDITION_FAILED) throw new Error(Is());
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
          "x-fp": await at()
        }
      });
      if (t.type === "otp") {
        if (n.status === i.GONE) throw new Error(_u());
        if (n.status === i.BAD_REQUEST) throw new Error(v_());
        if (n.status === i.TOO_MANY_REQUESTS) throw new Error(yt());
        if (n.status !== i.OK) throw new Error(o())
      } else {
        if (n.status === i.BAD_REQUEST) throw new Error(o_());
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
        if (a === "invalid_name") throw new Error(Bt());
        if (a === "invalid_discord") throw new Error(P_());
        if (typeof a == "string" && a.startsWith("name_change_cooldown:")) {
          const s = parseInt(a.split(":")[1] ?? "0", 10);
          throw new Error(Bf({
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
      if (e.status === i.BAD_REQUEST) throw new Error(tw());
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
      if (e.status === i.FORBIDDEN) throw new Error(Lh());
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
      if (n.status === i.BAD_REQUEST) throw new Error(tf());
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
          throw (await e.json()).error === "conflict_blocked" ? new Error(Bo()) : new Error(So());
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

function p0(r) {
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
    async postAdjustUserPrism(t, e) {
      const n = await this.request("/staff/dashboard/users/adjust-user-prism", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          delta: e
        })
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return (await n.json()).prism
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
        throw s === "invalid_name" ? new l(Bt(), i.BAD_REQUEST) : new l(typeof s == "string" && s ? s : o(), i.BAD_REQUEST)
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
        throw s === "email_required" || s === "invalid_email" ? new l(qc(), i.BAD_REQUEST) : new l(typeof s == "string" && s ? s : o(), i.BAD_REQUEST)
      }
      if (n.status === i.CONFLICT) {
        const a = await n.json();
        if (((a == null ? void 0 : a.error) ?? "") === "email_already_in_use") {
          const c = new l(typeof(a == null ? void 0 : a.userId) == "number" ? fc({
            userId: a.userId
          }) : ec(), i.CONFLICT);
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
      if (t.status === i.CONFLICT) throw new l(Nn(), t.status);
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
      t.query && e.set("query", t.query), t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.targetType && e.set("targetType", t.targetType), t.targetId && e.set("targetId", t.targetId), t.action && e.set("action", t.action), t.outcome && e.set("outcome", t.outcome), t.actorRole && e.set("actorRole", t.actorRole), t.from && e.set("from", t.from), t.to && e.set("to", t.to), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
      const n = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      const a = await n.json();
      return (Array.isArray(a) ? a : []).map(s => {
        const c = s && typeof s == "object" ? s : {};
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
const m0 = [{
    tileSize: 1e3,
    zoom: 11
  }],
  g0 = 4,
  w0 = 6e3,
  y0 = [{
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
  v0 = {
    needsPhoneVerification: "needs_phone_verification"
  },
  b0 = {
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
  E0 = {
    android: {
      googlePlayBilling: {
        price: 1
      },
      appName: "live.wplace.twa"
    }
  },
  O0 = {
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
  k0 = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  T0 = {
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
  q0 = {
    tools: {
      wayback: {
        limit: 1e4,
        hqLimit: 5e3
      }
    }
  },
  A0 = {
    areaRadius: 250
  },
  S0 = {
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
  N0 = {
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
  H = {
    seasons: m0,
    regionSize: g0,
    refreshIntervalMs: w0,
    colors: y0,
    errors: v0,
    items: b0,
    platforms: E0,
    products: O0,
    countries: k0,
    permissions: T0,
    settings: q0,
    moderation: A0,
    alliance: S0,
    voidEvent: N0
  },
  Fe = H,
  I0 = H.seasons,
  Ft = H.seasons.length - 1,
  UR = H.seasons[Ft].zoom,
  LR = H.seasons[Ft].tileSize,
  CR = H.permissions,
  Ht = H.settings,
  R0 = H.platforms.android,
  MR = R0.googlePlayBilling.price;

function BR(r) {
  return Fe.countries[r - 1]
}

function tt(r) {
  return tt.map.get(r)
}(r => {
  r.sharedProducts = Object.entries(Fe.products).map(([t, e]) => ({
    ...e,
    productId: t
  })).filter(t => "lookupKey" in t), r.map = D0(r.sharedProducts, t => t.lookupKey)
})(tt || (tt = {}));

function D0(r, t) {
  const e = new Map;
  for (const n in r) {
    const a = Reflect.get(r, n),
      s = t(a, n, r);
    e.set(s, a)
  }
  return e
}
const He = 5e3,
  It = 4,
  L = 64,
  P0 = 8;

function Le(r) {
  const t = Array.isArray(r.locations) ? r.locations.map(e => ({
    ...e,
    opacity: e.opacity ?? r.opacity,
    colorMetric: e.colorMetric ?? r.colorMetric,
    dithering: e.dithering ?? r.dithering,
    colorPaletteMode: e.colorPaletteMode ?? r.colorPaletteMode,
    pixelMode: e.pixelMode ?? r.pixelMode
  })) : [];
  return {
    ...r,
    imageRevision: r.imageRevision ?? r.updatedAt,
    thumbnailRevision: r.thumbnailRevision ?? r.imageRevision ?? r.updatedAt,
    sizeBytes: r.sizeBytes ?? 0,
    audienceRoles: Array.isArray(r.audienceRoles) ? r.audienceRoles : r.audienceRole ? [r.audienceRole] : [],
    audienceUserIds: Array.isArray(r.audienceUserIds) ? r.audienceUserIds : [],
    locations: t
  }
}

function j0(r) {
  const t = r.maxX - r.minX + 1,
    e = r.maxY - r.minY + 1;
  if (t <= 0 || e <= 0) return [];
  const n = Math.min(t, He),
    a = Math.max(1, Math.floor(He / n)),
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

function x0(r) {
  const t = [],
    e = Math.floor(r.minX / L),
    n = Math.floor(r.maxX / L),
    a = Math.floor(r.minY / L),
    s = Math.floor(r.maxY / L);
  for (let c = a; c <= s; c += 1)
    for (let u = e; u <= n; u += 1) t.push({
      minX: Math.max(r.minX, u * L),
      minY: Math.max(r.minY, c * L),
      maxX: Math.min(r.maxX, (u + 1) * L - 1),
      maxY: Math.min(r.maxY, (c + 1) * L - 1)
    });
  return t
}

function Rt(r) {
  const t = (r == null ? void 0 : r.role) ?? (r == null ? void 0 : r.alliance_role);
  return t === "mod" || t === "admin" || t === "leader" ? t : "member"
}

function z0(r) {
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
        throw n.error === "max_characters" ? new l(ft(), e.status) : n.error === "name_taken" ? new l(dt(), e.status) : n.error == "empty_name" ? new l(ka(), e.status) : new l(o(), e.status)
      } else throw e.status === i.FORBIDDEN ? (await e.json().catch(() => ({}))).error === "not_enough_droplets" ? new Error(mt()) : new Error(Jy()) : new Error(o())
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
      if (e.status === i.FORBIDDEN) throw new Error(b());
      if (e.status === i.BAD_REQUEST) {
        const n = await e.json().catch(() => ({}));
        throw new Error(n.error === "invalid_markdown" ? Fk() : Xc())
      } else throw e.status === i.CONFLICT ? new Error(Rk()) : new Error(o())
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
      throw a.error === "not_enough_droplets" ? new Error(mt()) : a.error === "invalid_donation" ? new Error(OO()) : new Error(o())
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
      throw n.error === "not_enough_alliance_coins" ? new Error(re()) : n.error === "already_unlocked" ? new Error(Ot()) : n.error === "headquarters_not_unlocked" ? new Error(qt()) : n.error === "headquarters_upgrade_prerequisite" ? new Error(Lq()) : n.error === "template_upgrade_prerequisite" ? new Error(FN()) : new Error(o())
    }
    async getAllianceTemplates(t) {
      const e = new URLSearchParams;
      t && (e.set("target", t.target), t.draftId !== void 0 && e.set("draftId", String(t.draftId)));
      const n = await this.request(`/alliance/templates${e.size?`?${e}`:""}`, {
        credentials: "include"
      });
      if (n.status === i.OK) {
        const a = await n.json();
        return {
          ...a,
          templates: (a.templates ?? []).map(Le),
          usedBytes: a.usedBytes ?? 0,
          byteLimit: a.byteLimit ?? 64 * 1024 * 1024,
          draftOptions: a.draftOptions ?? []
        }
      }
      throw new Error(o())
    }
    async createAllianceTemplate(t, e) {
      const n = new FormData;
      n.set("idempotencyKey", e), n.set("name", t.name), n.set("audienceAllMembers", String(t.audienceAllMembers)), n.set("audienceRoles", JSON.stringify(t.audienceRoles ?? [])), n.set("audienceUserIds", JSON.stringify(t.audienceUserIds ?? [])), n.set("locations", JSON.stringify(t.locations)), n.set("opacity", String(t.opacity)), n.set("colorMetric", t.colorMetric), n.set("dithering", String(t.dithering)), n.set("colorPaletteMode", t.colorPaletteMode), n.set("pixelMode", t.pixelMode), n.set("image", t.image, "alliance-template.png");
      const a = await this.request("/alliance/templates", {
        method: "POST",
        credentials: "include",
        body: n
      });
      if (a.status === i.CREATED || a.status === i.OK) return Le(await a.json());
      const s = await a.json().catch(() => ({}));
      throw s.error === "template_limit_reached" ? new Error(nI()) : s.error === "template_storage_limit_reached" ? new Error(St()) : s.error === "invalid_template_image" ? new Error(Nt()) : s.error === "template_upload_rate_limited" ? new Error(We()) : a.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
    }
    async patchAllianceTemplateMetadata(t, e) {
      const n = await this.request(`/alliance/templates/${t}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(e)
      });
      if (n.status === i.OK) return Le(await n.json());
      throw (await n.json().catch(() => ({}))).error === "template_upload_rate_limited" ? new Error(We()) : n.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
    }
    async patchAllianceTemplatePlacement(t, e) {
      const n = await this.request(`/alliance/templates/${t}/placement`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(e)
      });
      if (n.status === i.OK) return n.json();
      const a = await n.json().catch(() => ({}));
      throw a.error === "invalid_template_placement" ? new Error(XI()) : a.error === "template_location_not_selected" ? new Error(_0()) : n.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
    }
    async updateAllianceTemplate(t, e) {
      const n = new FormData;
      n.set("name", e.name), n.set("audienceAllMembers", String(e.audienceAllMembers)), n.set("audienceRoles", JSON.stringify(e.audienceRoles ?? [])), n.set("audienceUserIds", JSON.stringify(e.audienceUserIds ?? [])), n.set("locations", JSON.stringify(e.locations)), n.set("opacity", String(e.opacity)), n.set("colorMetric", e.colorMetric), n.set("dithering", String(e.dithering)), n.set("colorPaletteMode", e.colorPaletteMode), n.set("pixelMode", e.pixelMode), n.set("image", e.image, "alliance-template.png");
      const a = await this.request(`/alliance/templates/${t}`, {
        method: "PUT",
        credentials: "include",
        body: n
      });
      if (a.status === i.OK) return Le(await a.json());
      const s = await a.json().catch(() => ({}));
      throw s.error === "template_storage_limit_reached" ? new Error(St()) : s.error === "invalid_template_image" ? new Error(Nt()) : s.error === "template_upload_rate_limited" ? new Error(We()) : a.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
    }
    async deleteAllianceTemplate(t) {
      const e = await this.request(`/alliance/templates/${t}`, {
        method: "DELETE",
        credentials: "include"
      });
      if (e.status !== i.NO_CONTENT) throw e.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
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
      throw n.error === "not_enough_alliance_coins" ? new Error(re()) : n.error === "name_taken" ? new Error(dt()) : n.error === "name_unchanged" ? new Error(wk()) : n.error === "max_characters" ? new Error(ft()) : new Error(o())
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
          throw c instanceof ae ? new ae(Tt()) : c
        });
      if (a.status === i.OK) return a.json();
      const s = await a.json().catch(() => ({}));
      if (s.error === "challenge-required" && s.tier) {
        if (await se(s.tier)) return this.paintAllianceAsset(t, e);
        throw new Error(ee())
      }
      if (s.error === "verification-required") {
        const c = await Xe().get();
        if (!c.sealed_result) throw new Error(o());
        return await this.verifyAnticheat(c.sealed_result), this.paintAllianceAsset(t, e)
      }
      throw s.error === "color-not-owned" ? new Error(kt()) : new Error(o())
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
      if (e.status !== i.OK) throw (await e.json().catch(() => ({}))).error === "asset_version_selected" ? new Error(mT()) : new Error(o())
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
      if (n.status !== i.OK) throw (await n.json().catch(() => ({}))).error === "editor_already_granted" ? new Error(nT()) : new Error(o())
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
      if (n.status === i.FORBIDDEN) throw new Error(b());
      const a = await n.json().catch(() => ({}));
      throw a.error === "headquarters_credit_required" ? new Error(dq()) : a.error === "headquarters_not_unlocked" ? new Error(qt()) : new Error(o())
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
      throw n.error === "not_enough_alliance_coins" ? new Error(re()) : n.error === "already_unlocked" ? new Error(Ot()) : n.error === "headquarters_anchor_required" ? new Error(ZT()) : new Error(o())
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
      throw n.error === "not_enough_alliance_coins" ? new Error(re()) : n.error === "headquarters_size_prerequisite" ? new Error(Tq()) : new Error(o())
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
          throw c instanceof ae ? new ae(Tt()) : c
        });
      if (a.status === i.OK) return a.json();
      const s = await a.json().catch(() => ({}));
      if (s.error === "challenge-required" && s.tier) {
        if (await se(s.tier)) return this.paintAllianceHeadquarters(t, e);
        throw new Error(ee())
      }
      if (s.error === "verification-required") {
        const c = await Xe().get();
        if (!c.sealed_result) throw new Error(o());
        return await this.verifyAnticheat(c.sealed_result), this.paintAllianceHeadquarters(t, e)
      }
      throw s.error === "color-not-owned" ? new Error(kt()) : s.error === "not_enough_hq_charges" ? new Error(lA()) : s.error === "headquarters_timed_out" ? new Error(JA()) : s.error === "headquarters_locked" ? new Error(zA()) : s.error === "no_pixel_changes" ? new Error(OA()) : new Error(o())
    }
    async getAllianceHqPixelInfo(t, e) {
      const n = await this.request(`/alliance/headquarters/pixel?x=${t}&y=${e}`, {
        credentials: "include"
      });
      if (n.status === i.OK) return n.json();
      throw new Error(o())
    }
    async getAllianceHqLeaderboard(t) {
      const e = await this.request(`/alliance/headquarters/leaderboard/${t}`, {
        credentials: "include"
      });
      if (e.status === i.OK) return e.json();
      throw e.status === i.FORBIDDEN ? new Error(b()) : new Error(Qq())
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
      if (a.status === i.FORBIDDEN) throw new Error(b());
      const s = await a.json().catch(() => ({}));
      throw s.error === "headquarters_timeout_active" ? new Error(vS()) : s.error === "invalid_timeout_reason" ? new Error(At()) : new Error(o())
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
      if (n.status === i.FORBIDDEN) throw new Error(b());
      const a = await n.json().catch(() => ({}));
      throw a.error === "headquarters_timeout_inactive" ? new Error(PS()) : a.error === "invalid_timeout_reason" ? new Error(At()) : new Error(o())
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
      throw e.status === i.FORBIDDEN ? new Error(b()) : new Error(G())
    }
    async getAllianceInvites() {
      const t = await this.request("/alliance/invites", {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      throw t.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
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
      throw e.status === i.BAD_REQUEST ? (await e.json().catch(() => ({}))).error === "max_invites" ? new Error(QE()) : new Error(o()) : e.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
    }
    async revokeAllianceInvite(t) {
      const e = await this.request(`/alliance/invites/${t}/revoke`, {
        method: "POST",
        credentials: "include"
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
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
      throw e.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
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
      throw n.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
    }
    async kickAllianceMember(t) {
      const e = await this.request("/alliance/kick", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          kickedUserId: t
        })
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
    }
    async removeAllianceAdmin(t) {
      const e = await this.request("/alliance/remove-admin", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          demotedUserId: t
        })
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
    }
    async setOwnAllianceMemberRole(t, e) {
      const n = await this.request(`/alliance/members/${t}/role`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          role: e
        })
      });
      if (n.status !== i.OK) throw n.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
    }
    async getAllianceRolePermissions() {
      const t = await this.request("/alliance/role-permissions", {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      throw t.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
    }
    async updateAllianceRolePermissions(t) {
      const e = await this.request("/alliance/role-permissions", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          roles: t
        })
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
    }
    async transferAllianceLeadership(t) {
      const e = await this.request("/alliance/transfer-leadership", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          newLeaderUserId: t
        })
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
    }
    async updateAllianceSettings(t) {
      const e = await this.request("/alliance/settings", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
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
          if (e.status === i.BAD_REQUEST) throw new Error(lO());
          if (e.status === i.FORBIDDEN) throw new Error(b())
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
      throw n.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
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
      throw new Error(sm())
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
      n.set("limit", String((e == null ? void 0 : e.limit) ?? Ht.tools.wayback.hqLimit)), e != null && e.before && n.set("before", String(e.before)), e != null && e.area && (n.set("minX", String(e.area.minX)), n.set("minY", String(e.area.minY)), n.set("maxX", String(e.area.maxX)), n.set("maxY", String(e.area.maxY)));
      const a = await this.request(`/staff/dashboard/alliances/${t}/headquarters/events?${n.toString()}`, {
        credentials: "include"
      });
      if (a.status === i.NOT_FOUND) throw new Error(TE());
      if (a.status !== i.OK) throw new Error(o());
      return a.json()
    }
    async getAdminAllianceHqArea(t, e) {
      const n = j0(e);
      if (n.length === 0) throw new Error(o());
      const a = await this.getAdminAllianceHqAreaChunk(t, n[0]),
        s = [...a.pixels];
      for (let c = 1; c < n.length; c += It) {
        const u = await Promise.all(n.slice(c, c + It).map(d => this.getAdminAllianceHqAreaChunk(t, d, a.eventHwm)));
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
      const a = x0(e),
        s = new Array(a.length);
      let c = 0;
      const u = Array.from({
        length: Math.min(P0, a.length)
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
        q = new Uint8Array(u),
        g = new BigUint64Array(u);
      for (let x = 0; x < u; x += 1) {
        const te = x * 13;
        f[x] = d.getUint32(te, !0), q[x] = d.getUint8(te + 4), g[x] = d.getBigUint64(te + 5, !0)
      }
      const D = s.headers.get("X-Alliance-Canvas-Anchor-Latitude"),
        j = s.headers.get("X-Alliance-Canvas-Anchor-Longitude"),
        S = Number(D),
        N = Number(j),
        I = D !== null && j !== null && Number.isFinite(S) && Number.isFinite(N) ? {
          latitude: S,
          longitude: N
        } : void 0;
      return {
        bounds: e,
        paintedBy: f,
        colors: q,
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
      for (let u = 0; u < e.length; u += He) {
        const d = await this.reverseAdminAllianceHqPixelChunk(t, e.slice(u, u + He), n, a);
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
      if (s.status === i.CONTENT_TOO_LARGE) throw new Error(wN());
      if (s.status === i.NOT_FOUND) throw new Error(Dm());
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
          role: Rt(s),
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
          role: Rt(u),
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
        throw (a == null ? void 0 : a.error) === "user_not_in_alliance" ? new Error(Id()) : new Error(o())
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
      if (a.status === i.NOT_FOUND) throw new Error(RN());
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
        throw (a == null ? void 0 : a.error) === "user_not_found" ? new Error(LE()) : (a == null ? void 0 : a.error) === "user_already_in_alliance" ? new Error(VS()) : (a == null ? void 0 : a.error) === "alliance_not_archived" ? new Error(iN()) : new Error(o())
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
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
    }
    async banAllianceUser(t) {
      const e = await this.request("/alliance/ban", {
        body: JSON.stringify({
          bannedUserId: t
        }),
        method: "POST",
        credentials: "include"
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
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
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
    }
  }
}

function U0(r) {
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

function L0(r) {
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

function C0(r) {
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
      if (e.status === i.NOT_FOUND) throw new Error(Mt());
      if (e.status === i.FORBIDDEN) throw new Error($t());
      if (e.status === i.CONFLICT) throw new Error(Kt());
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
      e.append("name", t.name), t.image && e.append("image", t.image), t.assetKey && e.append("assetKey", t.assetKey), e.append("description", t.description), e.append("rarity", t.rarity), e.append("priceCurrency", t.priceCurrency), e.append("purchasable", t.purchasable.toString()), e.append("allowedRoles", JSON.stringify(t.allowedRoles));
      const n = await this.request("/staff/store-manager/frames", {
        method: "POST",
        credentials: "include",
        body: e
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return n.json()
    }
    async postCreateFont(t) {
      const e = await this.request("/staff/store-manager/fonts", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
      return e.json()
    }
    async postCreateStyle(t) {
      const e = await this.request("/staff/store-manager/styles", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
      return e.json()
    }
    async getAdminCosmetics(t) {
      const e = new URLSearchParams({
        page: String(t.page),
        pageSize: String(t.pageSize)
      });
      t.type && e.set("type", t.type), t.search && e.set("search", t.search), t.visibility && e.set("visibility", t.visibility);
      const n = await this.request(`/staff/store-manager/cosmetics?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return n.json()
    }
    async putAdminCosmetic(t, e) {
      const n = await this.request(`/staff/store-manager/cosmetics/${t}`, {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(e)
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return n.json()
    }
    async deleteAdminCosmetic(t) {
      const e = await this.request(`/staff/store-manager/cosmetics/${t}`, {
        method: "DELETE",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(o(), e.status)
    }
    async getAdminBadges(t) {
      const e = new URLSearchParams;
      t && e.set("search", t);
      const n = e.size ? `?${e.toString()}` : "",
        a = await this.request(`/staff/store-manager/badges${n}`, {
          method: "GET",
          credentials: "include"
        });
      if (a.status !== i.OK) throw new l(o(), a.status);
      return a.json()
    }
    async postAdminBadge(t) {
      const e = await this.request("/staff/store-manager/badges", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
      return e.json()
    }
    async putAdminBadge(t, e) {
      const n = await this.request(`/staff/store-manager/badges/${t}`, {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(e)
      });
      if (n.status !== i.OK) throw new l(o(), n.status);
      return n.json()
    }
    async deleteAdminBadge(t) {
      const e = await this.request(`/staff/store-manager/badges/${t}`, {
        method: "DELETE",
        credentials: "include"
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

function KR(r) {
  const t = Math.floor(r / K.hour);
  r -= t * K.hour;
  const e = Math.floor(r / K.minute);
  r -= e * K.minute;
  const a = Math.floor(r / K.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${a}` : `${e}:${a}`
}

function $R(r) {
  const t = r.getFullYear(),
    e = String(r.getMonth() + 1).padStart(2, "0"),
    n = String(r.getDate()).padStart(2, "0"),
    a = String(r.getHours()).padStart(2, "0"),
    s = String(r.getMinutes()).padStart(2, "0"),
    c = String(r.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${n} ${a}:${s}:${c}`
}
const M0 = 30 * K.minute;

function B0(r) {
  return class extends r {
    constructor() {
      super(...arguments);
      w(this, "lastHotspotRequestAt", 0)
    }
    async leaderboardPlayers(e) {
      const n = await this.request(`/leaderboard/player/${e}`);
      if (n.status !== i.OK) throw new Error(G());
      return n.json()
    }
    async leaderboardAlliances(e) {
      const n = await this.request(`/leaderboard/alliance/${e}`);
      if (n.status !== i.OK) throw new Error(G());
      return n.json()
    }
    async leaderboardRegions(e, n = 0) {
      const a = await this.request(`/leaderboard/region/${e}/${n}`);
      if (a.status === i.OK) return a.json();
      throw new Error(G())
    }
    async leaderboardRegionPlayers(e, n) {
      const a = await this.request(`/leaderboard/region/players/${e}/${n}`);
      if (a.status === i.OK) return a.json();
      throw new Error(G())
    }
    async leaderboardRegionAlliances(e, n) {
      const a = await this.request(`/leaderboard/region/alliances/${e}/${n}`);
      if (a.status === i.OK) return a.json();
      throw new Error(G())
    }
    async leaderboardCountries(e) {
      const n = await this.request(`/leaderboard/country/${e}`, {
        credentials: "include"
      });
      if (n.status === i.OK) return n.json();
      throw new Error(G())
    }
    refreshHotspotsIfStale() {
      Date.now() - this.lastHotspotRequestAt < M0 || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
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

function K0(r) {
  return class extends r {
    async postCaptchaSession(t, e = "include") {
      const n = await this.request("/anticheat/captcha/session", {
        method: "POST",
        credentials: e,
        body: JSON.stringify(t),
        headers: {
          "x-fp": await at()
        }
      });
      if (!n.ok) throw n.status === 500 ? new l(o(), n.status) : new l(Yl(), n.status);
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
const FR = {
    griefing: ku(),
    "multi-accounting": pf(),
    "hate-speech": Wu(),
    bot: Ua(),
    doxxing: to(),
    "inappropriate-content": El(),
    other: ui()
  },
  HR = {
    doxxing: po(),
    "hate-speech": ul(),
    griefing: Uu(),
    "multi-accounting": Sf(),
    bot: Wa(),
    "inappropriate-content": xl(),
    other: Ei()
  },
  VR = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  Dt = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  GR = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  $0 = 365 * K.day;

function Vt(r) {
  if (!r) return null;
  const e = (r instanceof Date ? r : new Date(r)).getTime();
  return Number.isFinite(e) ? e : null
}

function YR(r, t = Date.now()) {
  const e = Vt(r);
  return e === null ? !1 : e - t >= $0
}

function JR(r, t = Date.now()) {
  const e = Vt(r);
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

function F0(r) {
  return class extends r {
    async getModeratorTickets() {
      const t = await this.request("/staff/tickets/get", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      const e = await t.json();
      for (const n of e.tickets) n.reports.sort((a, s) => Dt[a.reason] - Dt[s.reason]);
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
        throw (n == null ? void 0 : n.error) === "reversal_already_pending" ? new l(Mb(), i.CONFLICT) : new l(o(), i.CONFLICT)
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
      if (a.status === i.FORBIDDEN) throw new l(Zb(), i.FORBIDDEN);
      if (a.status === i.CONFLICT) throw new l(dE(), i.CONFLICT);
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
          q = f == null || f === "" ? null : Number(f);
        return {
          product_name: String(s.productName ?? s.product_name ?? ""),
          amount: Number(s.amount ?? 0),
          price: Number(s.price ?? 0),
          is_dollar: u,
          created_at: d,
          product_variant: Number.isInteger(q) ? q : null
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
        const q = f.status ?? "open";
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
            status: q
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
            status: q
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
          status: q
        })
      }
      return n.sort((f, q) => new Date(q.createdAt).getTime() - new Date(f.createdAt).getTime()), n
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

function H0(r) {
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
const V0 = ["droplets", "prism"];

function WR(r) {
  return V0.map(t => ({
    currency: t,
    amount: r.reduce((e, n) => e + (n.currency === t ? n.amount : 0), 0)
  })).filter(t => t.amount > 0)
}

function G0(r) {
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
      if (e.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(_t());
      if (e.status !== i.OK) throw new Error(await e.text());
      return e.json()
    }
    async refreshStripeSession(t) {
      return {
        credited: (await this.request(`/payment/refresh-session/${t}`, {
          method: "POST",
          credentials: "include",
          throwOnStatus: !1
        })).ok
      }
    }
    async createFastspringSession(t) {
      const e = await this.request("/payment/fastspring/session", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          lookup_key: t
        })
      });
      if (e.status !== i.OK) throw new Error(`fastspring session failed: ${e.status}`);
      return await e.json()
    }
    async refreshFastspringOrder(t) {
      const e = await this.request(`/payment/fastspring/refresh-order/${t}`, {
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
    async purchase(t) {
      const e = await this.request("/purchase", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          product: t
        })
      });
      if (e.status !== i.OK) throw e.status === i.NOT_FOUND ? new Error(Mt()) : e.status === i.FORBIDDEN ? new Error($t()) : e.status === i.CONFLICT ? new Error(Kt()) : new Error(o())
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
      if (e.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(_t());
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
        grant: {
          currency: "droplets",
          amount: 0
        }
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

function Pt(r, t) {
  const e = {};
  for (const n of r) {
    const a = t(n),
      s = e[a];
    s ? s.push(n) : e[a] = [n]
  }
  return e
}

function QR(r, t) {
  const e = {};
  for (const n of r) {
    const a = t(n);
    e[a] = n
  }
  return e
}

function Y0(r) {
  return class extends r {
    async paint(t) {
      const e = Pt(t, u => `t=(${u.tile[0]},${u.tile[1]}),s=${u.season}`),
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
      if (c.status !== i.OK) {
        if (c.status === i.UNAUTHORIZED) throw new Error(bt());
        if (c.status === i.FORBIDDEN) {
          if (c.headers.get("cf-mitigated") === "challenge") throw new Error(pt());
          const u = await c.json().catch(() => ({}));
          switch (u == null ? void 0 : u.error) {
            case "timeout": {
              const d = new Date(Date.now() + ((u == null ? void 0 : u.durationMs) ?? 0));
              throw new Error(Et({
                until: d.toLocaleString()
              }))
            }
            case "refresh":
              throw new Error(wt());
            case "color-not-owned":
              throw new Error(gt());
            case "event-pixel-present":
              throw new Error(ht());
            case "challenge-required": {
              if (u.tier) {
                if (await se(u.tier)) return this.paint(t);
                throw new Error(ee())
              }
              throw console.error("Challenge required but no tier provided", u), new Error(o())
            }
            case "verification-required": {
              const f = (await Xe().get()).sealed_result;
              if (!f) throw new Error(o());
              return await this.verifyAnticheat(f), this.paint(t)
            }
          }
          throw await J.refresh(), typeof(u == null ? void 0 : u.charges) == "number" ? new Error(vt()) : new Error(o())
        }
        throw new Error(o())
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
        throw s === "timelapse_too_many_events" ? new l(Hm(), i.BAD_REQUEST) : new l(typeof s == "string" && s ? s : o(), i.BAD_REQUEST)
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
      const s = Pt(t, d => `t=(${d.tile[0]},${d.tile[1]}),s=${d.season}`),
        u = (await Promise.all(Object.values(s).map(async d => {
          const [f, q] = d[0].tile, g = d[0].season, D = {
            colors: d.map(I => I.colorIdx),
            coords: d.flatMap(I => I.pixel),
            csid: n
          }, j = JSON.stringify(D), S = e(g, f, q), N = await F.getHeaders(j);
          return this.request(S, {
            method: "POST",
            body: j,
            headers: N,
            credentials: "include"
          })
        }))).filter(d => d.status !== i.OK);
      if (u.length) {
        const d = u[0];
        if (d.status === i.UNAUTHORIZED) throw new Error(bt());
        if (d.status === i.FORBIDDEN) {
          if (d.headers.get("cf-mitigated") === "challenge") throw new Error(pt());
          const f = await d.json().catch(() => ({}));
          switch (f == null ? void 0 : f.error) {
            case "timeout": {
              const q = new Date(Date.now() + ((f == null ? void 0 : f.durationMs) ?? 0));
              throw new Error(Et({
                until: q.toLocaleString()
              }))
            }
            case "refresh":
              throw new Error(wt());
            case "color-not-owned":
              throw new Error(gt());
            case "event-pixel-present":
              throw new Error(ht())
          }
          throw await J.refresh(), typeof(f == null ? void 0 : f.charges) == "number" ? new Error(vt()) : new Error(o())
        } else throw new Error(o())
      }
    }
    async adminAutoPainterPaint(t, e, n) {
      const a = J0(t),
        s = await W0(a),
        c = new FormData;
      c.append("fingerprint", e), c.append("season", a.season.toString()), c.append("px0", a.offsetX.toString()), c.append("py0", a.offsetY.toString()), c.append("width", a.width.toString()), c.append("height", a.height.toString()), c.append("pixels", t.length.toString()), c.append("bitmap", s, "auto-painter.png"), c.append("userId", n.toString());
      const u = await this.request("/staff/tools/auto-painter/paint", {
        method: "POST",
        body: c,
        credentials: "include"
      });
      if (u.status === i.FORBIDDEN) {
        const d = await u.json().catch(() => null);
        if (typeof(d == null ? void 0 : d.charges) == "number") throw new Error(Qh({
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
        throw new Error(Cc({
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
        const S = await d.text();
        throw console.error("Error while fetching pixel area info", S), new Error(o())
      }
      const f = await d.arrayBuffer(),
        q = new DataView(f),
        g = Math.floor(f.byteLength / 5),
        D = new Uint32Array(g),
        j = new Uint8Array(g);
      for (let S = 0; S < g; S++) {
        const N = S * 5;
        D[S] = q.getUint32(N, !0), j[S] = q.getUint8(N + 4)
      }
      return {
        paintedBy: D,
        colors: j
      }
    }
  }
}

function J0(r) {
  var D, j;
  if (!r.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = r[0].season;
  for (const S of r)
    if (S.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (D = Fe.seasons) == null ? void 0 : D[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const n = e.tileSize;
  let a = Number.POSITIVE_INFINITY,
    s = Number.POSITIVE_INFINITY,
    c = Number.NEGATIVE_INFINITY,
    u = Number.NEGATIVE_INFINITY;
  const d = r.map(S => {
      const N = Math.round(S.tile[0] * n + S.pixel[0]),
        I = Math.round(S.tile[1] * n + S.pixel[1]);
      return N < a && (a = N), I < s && (s = I), N > c && (c = N), I > u && (u = I), {
        x: N,
        y: I,
        colorIdx: S.colorIdx
      }
    }),
    f = c - a + 1,
    q = u - s + 1;
  if (!Number.isFinite(f) || !Number.isFinite(q) || f <= 0 || q <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const g = new Uint8ClampedArray(f * q * 4);
  for (const {
      x: S,
      y: N,
      colorIdx: I
    }
    of d) {
    const x = (j = Fe.colors) == null ? void 0 : j[I];
    if (!x) throw new Error(`Unknown palette color index: ${I}`);
    const te = S - a,
      Ue = ((N - s) * f + te) * 4,
      [Qt, Xt, Zt] = x.rgb;
    g[Ue] = Qt, g[Ue + 1] = Xt, g[Ue + 2] = Zt, g[Ue + 3] = I === 0 ? 1 : 255
  }
  return {
    data: g,
    width: f,
    height: q,
    offsetX: a,
    offsetY: s,
    season: t
  }
}
async function W0(r) {
  const t = Q0(r.width, r.height),
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

function Q0(r, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(r, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = r, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}

function X0(r) {
  return class extends r {
    async getVoidEvent() {
      const t = await this.request("/void-event", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      return t.json()
    }
    async getVoidEventRewards() {
      const t = await this.request("/void-event/rewards", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      return t.json()
    }
    async getVoidEventTileConquerors(t) {
      const e = await this.request(`/void-event/tile/${t}/conquerors`, {
        method: "GET",
        credentials: "include"
      });
      if (e.status !== i.OK) throw new l(o(), e.status);
      return e.json()
    }
    async postVoidEventPick(t) {
      const e = await this.request("/void-event/pick", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          team: t
        })
      });
      if (e.status === i.OK) return e.json();
      throw e.status === i.UNAUTHORIZED ? new Error(vv()) : e.status === i.FORBIDDEN ? new Error(Xw()) : e.status === i.CONFLICT ? new Error(Cw()) : new Error(o())
    }
  }
}

function Z0(r) {
  return class extends r {
    validWaybackInput(t) {
      const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
        n = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < I0.length,
        a = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= Ht.tools.wayback.limit,
        s = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
        c = t.cursorTs !== void 0,
        u = t.cursorUserId !== void 0,
        d = t.cursorAllianceId !== void 0,
        f = t.cursorPixelsCount !== void 0,
        q = c || u || d || f,
        g = c && u && d && f;
      let D = !0;
      return q && (D = g && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!n || !a || !s || !e || !D)
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
class eR extends h0(p0(z0(U0(L0(C0(B0(K0(F0(H0(G0(Y0(X0(Z0(f0)))))))))))))) {}
const $ = new eR(zt);
typeof window < "u" && ar(() => {
  let r = $.online;
  ir(() => {
    const t = $.online;
    t && !r && window.dispatchEvent(new CustomEvent("wplace:online")), r = t
  })
});

function Gt(r, t) {
  if (!(r != null && r.length)) return !1;
  for (const e of r)
    if (e === t) return !0;
  return !1
}

function tR(r, t) {
  for (const e of t)
    if (Gt(r, e)) return !0;
  return !1
}

function Yt(r) {
  const t = atob(r),
    e = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
  return e
}

function rR(r) {
  if (typeof Buffer < "u") return Buffer.from(r).toString("base64");
  let t = "";
  for (let e = 0; e < r.length; e++) t += String.fromCharCode(r[e]);
  return btoa(t)
}
class nR {
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

function XR(r) {
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

function ZR(r) {
  if (typeof FileReader > "u") {
    const t = r.type || "application/octet-stream";
    return r.arrayBuffer().then(e => `data:${t};base64,${rR(new Uint8Array(e))}`)
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

function eD(r) {
  if (!r.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = r.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = r.slice(5, t),
    n = r.slice(t + 1),
    a = e.indexOf(";base64"),
    s = (a === -1 ? e : e.slice(0, a)) || "text/plain";
  if (a !== -1) {
    const c = Yt(n),
      u = new Uint8Array(c.byteLength);
    return u.set(c), new Blob([u], {
      type: s
    })
  }
  return new Blob([decodeURIComponent(n)], {
    type: s
  })
}

function tD(...r) {
  return r.filter(Boolean).join(" ")
}
const aR = typeof document < "u";
let jt = 0;
var Te, qe, Ae;
class iR {
  constructor() {
    v(this, Te, A($e([])));
    v(this, qe, A($e([])));
    v(this, Ae, t => {
      const e = this.toasts.findIndex(n => n.id === t);
      return e === -1 ? null : e
    });
    w(this, "addToast", t => {
      aR && this.toasts.unshift(t)
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
      } = t, a = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((u = t.id) == null ? void 0 : u.length) > 0 ? t.id : jt++, s = t.dismissable === void 0 ? !0 : t.dismissable, c = t.type === void 0 ? "default" : t.type;
      return ot(() => {
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
    w(this, "dismiss", t => (ot(() => {
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
      const e = h(this, Ae).call(this, t);
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
          const u = sR(c);
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
      const n = (e == null ? void 0 : e.id) || jt++;
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
      const e = h(this, Ae).call(this, t.toastId);
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
    k(h(this, Te), t, !0)
  }
  get heights() {
    return E(h(this, qe))
  }
  set heights(t) {
    k(h(this, qe), t, !0)
  }
}
Te = new WeakMap, qe = new WeakMap, Ae = new WeakMap;

function sR(r) {
  return r && typeof r == "object" && "status" in r ? `HTTP error! Status: ${r.status}` : `Error! ${r}`
}
const P = new iR;

function oR(r, t) {
  return P.create({
    message: r,
    ...t
  })
}
var Ye;
class rD {
  constructor() {
    v(this, Ye, ne(() => P.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return E(h(this, Ye))
  }
}
Ye = new WeakMap;
const cR = oR,
  uR = Object.assign(cR, {
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
var Se, Ne, Ie, Re, De, Pe, je, xe;
class lR {
  constructor() {
    w(this, "channel", new BroadcastChannel("user-channel"));
    v(this, Se, A());
    v(this, Ne, A(!0));
    v(this, Ie, A());
    v(this, Re, A(Date.now()));
    v(this, De, ne(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((et.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    v(this, Pe, ne(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    v(this, je, ne(() => {
      var t;
      return new nR(Yt(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    v(this, xe, ne(() => {
      var n;
      if (!((n = this.data) != null && n.timeoutUntil)) return;
      const t = new Date(this.data.timeoutUntil),
        e = t.getTime();
      if (!(!Number.isFinite(e) || e <= et.now)) return t
    }));
    this.channel && (this.channel.onmessage = t => {
      const e = JSON.parse(t.data);
      e.type === "refresh" ? (this.data = e.data, this.lastFetch = Date.now()) : e.type === "logout" && (this.data = void 0)
    })
  }
  get data() {
    return E(h(this, Se))
  }
  set data(t) {
    k(h(this, Se), t, !0)
  }
  get loading() {
    return E(h(this, Ne))
  }
  set loading(t) {
    k(h(this, Ne), t, !0)
  }
  get notificationCount() {
    return E(h(this, Ie))
  }
  set notificationCount(t) {
    k(h(this, Ie), t, !0)
  }
  get lastFetch() {
    return E(h(this, Re))
  }
  set lastFetch(t) {
    k(h(this, Re), t)
  }
  get charges() {
    return E(h(this, De))
  }
  set charges(t) {
    k(h(this, De), t)
  }
  get cooldown() {
    return E(h(this, Pe))
  }
  set cooldown(t) {
    k(h(this, Pe), t)
  }
  get flagsBitmap() {
    return E(h(this, je))
  }
  set flagsBitmap(t) {
    k(h(this, je), t)
  }
  get timeoutUntil() {
    return E(h(this, xe))
  }
  set timeoutUntil(t) {
    k(h(this, xe), t)
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
      return console.error(n), uR.warning(eh(), {
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
    return Gt((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return tR((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
Se = new WeakMap, Ne = new WeakMap, Ie = new WeakMap, Re = new WeakMap, De = new WeakMap, Pe = new WeakMap, je = new WeakMap, xe = new WeakMap;
const J = new lR;
let y;
const U = new Array(128).fill(void 0);
U.push(void 0, null, !0, !1);

function m(r) {
  return U[r]
}
let oe = U.length;

function T(r) {
  oe === U.length && U.push(U.length + 1);
  const t = oe;
  return oe = U[t], U[t] = r, t
}

function C(r, t) {
  try {
    return r.apply(this, t)
  } catch (e) {
    y.__wbindgen_export_0(T(e))
  }
}

function V(r) {
  return r == null
}
const Jt = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && Jt.decode();
let ie = null;

function Me() {
  return (ie === null || ie.byteLength === 0) && (ie = new Uint8Array(y.memory.buffer)), ie
}

function Be(r, t) {
  return r = r >>> 0, Jt.decode(Me().subarray(r, r + t))
}

function _R(r) {
  r < 132 || (U[r] = oe, oe = r)
}

function xt(r) {
  const t = m(r);
  return _R(r), t
}
let Y = null;

function Ve() {
  return (Y === null || Y.buffer.detached === !0 || Y.buffer.detached === void 0 && Y.buffer !== y.memory.buffer) && (Y = new DataView(y.memory.buffer)), Y
}
let Q = 0;
const Ke = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  dR = typeof Ke.encodeInto == "function" ? function(r, t) {
    return Ke.encodeInto(r, t)
  } : function(r, t) {
    const e = Ke.encode(r);
    return t.set(e), {
      read: r.length,
      written: e.length
    }
  };

function ze(r, t, e) {
  if (e === void 0) {
    const u = Ke.encode(r),
      d = t(u.length, 1) >>> 0;
    return Me().subarray(d, d + u.length).set(u), Q = u.length, d
  }
  let n = r.length,
    a = t(n, 1) >>> 0;
  const s = Me();
  let c = 0;
  for (; c < n; c++) {
    const u = r.charCodeAt(c);
    if (u > 127) break;
    s[a + c] = u
  }
  if (c !== n) {
    c !== 0 && (r = r.slice(c)), a = e(a, n, n = c + r.length * 3, 1) >>> 0;
    const u = Me().subarray(a + c, a + n),
      d = dR(r, u);
    c += d.written, a = e(a, n, c, 1) >>> 0
  }
  return Q = c, a
}

function fR(r) {
  const t = ze(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = Q;
  y.set_discord_id(t, e)
}

function hR(r) {
  const t = ze(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = Q;
  y.set_fingerprint(t, e)
}

function pR(r) {
  const t = ze(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = Q;
  y.set_detected_bot(t, e)
}

function mR(r) {
  let t, e;
  try {
    const s = y.__wbindgen_add_to_stack_pointer(-16),
      c = ze(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
      u = Q;
    y.get_pawtected_endpoint_payload(s, c, u);
    var n = Ve().getInt32(s + 0, !0),
      a = Ve().getInt32(s + 4, !0);
    return t = n, e = a, Be(n, a)
  } finally {
    y.__wbindgen_add_to_stack_pointer(16), y.__wbindgen_export_3(t, e, 1)
  }
}

function Qe(r) {
  y.set_user_id(r)
}

function gR(r) {
  y.set_cf_likely_automated(r)
}

function wR(r) {
  y.set_automated_clicks(r)
}

function yR(r) {
  const t = ze(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = Q;
  y.request_url(t, e)
}

function vR(r) {
  y.set_automated_browser(r)
}
async function bR(r, t) {
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

function ER() {
  const r = {};
  return r.wbg = {}, r.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    const e = m(t).buffer;
    return T(e)
  }, r.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return C(function(t, e) {
      const n = m(t).call(m(e));
      return T(n)
    }, arguments)
  }, r.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return C(function(t, e, n) {
      const a = m(t).call(m(e), m(n));
      return T(a)
    }, arguments)
  }, r.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    const e = m(t).crypto;
    return T(e)
  }, r.wbg.__wbg_document_d249400bd7bd996d = function(t) {
    const e = m(t).document;
    return V(e) ? 0 : T(e)
  }, r.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return C(function(t, e) {
      m(t).getRandomValues(m(e))
    }, arguments)
  }, r.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return C(function(t, e) {
      const n = Reflect.get(m(t), m(e));
      return T(n)
    }, arguments)
  }, r.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return C(function(t) {
      return m(t).hasFocus()
    }, arguments)
  }, r.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return C(function(t) {
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
    const n = new Function(Be(t, e));
    return T(n)
  }, r.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, n) {
    const a = new Uint8Array(m(t), e >>> 0, n >>> 0);
    return T(a)
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
    return C(function(t, e) {
      m(t).randomFillSync(xt(e))
    }, arguments)
  }, r.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return C(function() {
      const t = module.require;
      return T(t)
    }, arguments)
  }, r.wbg.__wbg_set_65595bdd868b3009 = function(t, e, n) {
    m(t).set(m(e), n >>> 0)
  }, r.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return V(t) ? 0 : T(t)
  }, r.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return V(t) ? 0 : T(t)
  }, r.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return V(t) ? 0 : T(t)
  }, r.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return V(t) ? 0 : T(t)
  }, r.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, n) {
    const a = m(t).subarray(e >>> 0, n >>> 0);
    return T(a)
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
    const t = y.memory;
    return T(t)
  }, r.wbg.__wbindgen_number_get = function(t, e) {
    const n = m(e),
      a = typeof n == "number" ? n : void 0;
    Ve().setFloat64(t + 8, V(a) ? 0 : a, !0), Ve().setInt32(t + 0, !V(a), !0)
  }, r.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = m(t);
    return T(e)
  }, r.wbg.__wbindgen_object_drop_ref = function(t) {
    xt(t)
  }, r.wbg.__wbindgen_string_new = function(t, e) {
    const n = Be(t, e);
    return T(n)
  }, r.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(Be(t, e))
  }, r
}

function OR(r, t) {
  return y = r.exports, Wt.__wbindgen_wasm_module = t, Y = null, ie = null, y
}
async function Wt(r) {
  if (y !== void 0) return y;
  typeof r < "u" && (Object.getPrototypeOf(r) === Object.prototype ? {
    module_or_path: r
  } = r : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof r > "u" && (r = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = ER();
  (typeof r == "string" || typeof Request == "function" && r instanceof Request || typeof URL == "function" && r instanceof URL) && (r = fetch(r));
  const {
    instance: e,
    module: n
  } = await bR(await r, t);
  return OR(e, n)
}
class kR {
  constructor() {
    w(this, "interval");
    w(this, "storagesEmpty", !1);
    w(this, "storages", [new Ge, new rt, new nt, new qR]);
    w(this, "pawtectLoaded");
    w(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!J.data || this.storagesEmpty || localStorage.getItem(Ge.KEY))) {
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
        await Wt(sr), (t = J.data) != null && t.id && Qe(J.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: TR((n, a) => {
            let s = null;
            return n instanceof Request ? s = n.url : n instanceof URL ? s = n.href : typeof n == "string" && (s = n), s !== null && !s.startsWith("/") && yR(s), e.call(window, n, a)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(t) {
    await this.loadPawtect(), Qe(t)
  }
  async setCfLikelyAutomated(t) {
    await this.loadPawtect(), gR(t)
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
    if (!await this.loadPawtect()) throw new Error(ky());
    const n = navigator.webdriver,
      [a, s] = await Promise.all([at(), nn().catch(c => (console.error(c), {
        bot: !1
      }))]);
    return Qe(J.data.id), fR(J.data.discordId ?? ""), hR(a), vR(n), wR(et.automatedClicks), s.bot && pR(s.botKind ?? "unknown"), mR(t)
  }
}

function TR(r) {
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
let Ge = M;
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
let rt = B;
const W = class W {
  get() {
    const t = document.cookie.match(new RegExp("(?:^|; )" + W.KEY + "=([^;]*)"));
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
    document.cookie = `${W.KEY}=${encodeURIComponent(e)};path=/;max-age=${W.MAX_AGE};SameSite=Lax`
  }
};
w(W, "KEY", "_pf_uid"), w(W, "MAX_AGE", 3600 * 24 * 365);
let nt = W;
class qR {
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
const F = new kR;
export {
  TE as $, xl as A, ul as B, po as C, Wa as D, pf as E, Dt as F, WR as G, tt as H, R0 as I, MR as J, P as K, tD as L, rD as M, KR as N, xR as O, UR as P, R as Q, PR as R, CR as S, K as T, DR as U, jR as V, zR as W, sn as X, Ht as Y, Ft as Z, Dm as _, FR as a, LE as a0, BR as a1, qc as a2, ZR as a3, eD as a4, I0 as a5, YR as a6, JR as a7, ae as a8, Qq as a9, l as aa, zA as ab, wk as ac, OO as ad, Nt as ae, $R as af, nR as ag, Yt as ah, ky as ai, tw as aj, HR as ak, GR as al, QR as am, Yl as an, _t as ao, $ as b, LR as c, Fe as d, o as e, i as f, et as g, mt as h, to as i, El as j, Wu as k, Ua as l, ku as m, eh as n, Zb as o, F as p, Lt as q, sm as r, VR as s, uR as t, J as u, ee as v, se as w, XR as x, vv as y, Uu as z
};