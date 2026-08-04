var Xt = Object.defineProperty;
var it = r => {
  throw TypeError(r)
};
var Zt = (r, t, e) => t in r ? Xt(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var w = (r, t, e) => Zt(r, typeof t != "symbol" ? t + "" : t, e),
  er = (r, t, e) => t.has(r) || it("Cannot " + e);
var h = (r, t, e) => (er(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  v = (r, t, e) => t.has(r) ? it("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e);
import {
  j as tr,
  P as xt,
  g as nt,
  k as Qe
} from "./CftFOTTa.js";
import {
  e as S,
  i as E,
  h as k,
  g as Ke,
  bP as rr,
  y as nr,
  B as st,
  u as ne
} from "./DUZ_qUVk.js";
import {
  g as _
} from "./BhCkpOlh.js";
const ar = "" + new URL("../assets/pawtect_wasm_bg.8VPqYlMZ.wasm", import.meta.url).href;
var ir = "2.0.0";
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

function sr(r, t) {
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
async function or(r) {
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

function cr({
  appVersion: r
}) {
  if (r.state !== 0) return !1;
  if (/headless/i.test(r.value)) return p.HeadlessChrome;
  if (/electron/i.test(r.value)) return p.Electron;
  if (/slimerjs/i.test(r.value)) return p.SlimerJS
}

function Ue(r, t) {
  return r.indexOf(t) !== -1
}

function z(r, t) {
  return r.indexOf(t) !== -1
}

function ur(r, t) {
  if ("find" in r) return r.find(t);
  for (let e = 0; e < r.length; e++)
    if (t(r[e], e, r)) return r[e]
}

function ot(r) {
  return Object.getOwnPropertyNames(r)
}

function Xe(r, ...t) {
  for (const e of t)
    if (typeof e == "string") {
      if (Ue(r, e)) return !0
    } else if (ur(r, a => e.test(a)) != null) return !0;
  return !1
}

function X(r) {
  return r.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function lr({
  documentElementKeys: r
}) {
  if (r.state !== 0) return !1;
  if (Xe(r.value, "selenium", "webdriver", "driver")) return p.Selenium
}

function _r({
  errorTrace: r
}) {
  if (r.state !== 0) return !1;
  if (/PhantomJS/i.test(r.value)) return p.PhantomJS
}

function dr({
  evalLength: r,
  browserKind: t,
  browserEngineKind: e
}) {
  if (r.state !== 0 || t.state !== 0 || e.state !== 0) return;
  const n = r.value;
  return e.value === "unknown" ? !1 : n === 37 && !Ue(["webkit", "gecko"], e.value) || n === 39 && !Ue(["internet_explorer"], t.value) || n === 33 && !Ue(["chromium"], e.value)
}

function fr({
  functionBind: r
}) {
  if (r.state === -2) return p.PhantomJS
}

function hr({
  languages: r
}) {
  if (r.state === 0 && r.value.length === 0) return p.HeadlessChrome
}

function pr({
  mimeTypesConsistent: r
}) {
  if (r.state === 0 && !r.value) return p.Unknown
}

function mr({
  notificationPermissions: r,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== "chrome") return !1;
  if (r.state === 0 && r.value) return p.HeadlessChrome
}

function gr({
  pluginsArray: r
}) {
  if (r.state === 0 && !r.value) return p.HeadlessChrome
}

function wr({
  pluginsLength: r,
  android: t,
  browserKind: e,
  browserEngineKind: n
}) {
  if (!(r.state !== 0 || t.state !== 0 || e.state !== 0 || n.state !== 0) && !(e.value !== "chrome" || t.value || n.value !== "chromium") && r.value === 0) return p.HeadlessChrome
}

function yr({
  process: r
}) {
  var t;
  if (r.state !== 0) return !1;
  if (r.value.type === "renderer" || ((t = r.value.versions) === null || t === void 0 ? void 0 : t.electron) != null) return p.Electron
}

function vr({
  productSub: r,
  browserKind: t
}) {
  if (r.state !== 0 || t.state !== 0) return !1;
  if ((t.value === "chrome" || t.value === "safari" || t.value === "opera" || t.value === "wechat") && r.value !== "20030107") return p.Unknown
}

function br({
  userAgent: r
}) {
  if (r.state !== 0) return !1;
  if (/PhantomJS/i.test(r.value)) return p.PhantomJS;
  if (/Headless/i.test(r.value)) return p.HeadlessChrome;
  if (/Electron/i.test(r.value)) return p.Electron;
  if (/slimerjs/i.test(r.value)) return p.SlimerJS
}

function Er({
  webDriver: r
}) {
  if (r.state === 0 && r.value) return p.HeadlessChrome
}

function Or({
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

function Tr({
  windowExternal: r
}) {
  if (r.state !== 0) return !1;
  if (/Sequentum/i.test(r.value)) return p.Sequentum
}

function kr({
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

function qr({
  distinctiveProps: r
}) {
  if (r.state !== 0) return !1;
  const t = r.value;
  let e;
  for (e in t)
    if (t[e]) return e
}
const Ar = {
  detectAppVersion: cr,
  detectDocumentAttributes: lr,
  detectErrorTrace: _r,
  detectEvalLengthInconsistency: dr,
  detectFunctionBind: fr,
  detectLanguagesLengthInconsistency: hr,
  detectNotificationPermissions: mr,
  detectPluginsArray: gr,
  detectPluginsLengthInconsistency: wr,
  detectProcess: yr,
  detectUserAgent: br,
  detectWebDriver: Er,
  detectWebGL: Or,
  detectWindowExternal: Tr,
  detectWindowSize: kr,
  detectMimeTypesConsistent: pr,
  detectProductSub: vr,
  detectDistinctiveProperties: qr
};

function Sr() {
  const r = navigator.appVersion;
  if (r == null) throw new b(-1, "navigator.appVersion is undefined");
  return r
}

function Nr() {
  if (document.documentElement === void 0) throw new b(-1, "document.documentElement is undefined");
  const {
    documentElement: r
  } = document;
  if (typeof r.getAttributeNames != "function") throw new b(-2, "document.documentElement.getAttributeNames is not a function");
  return r.getAttributeNames()
}

function Ir() {
  try {
    null[0]()
  } catch (r) {
    if (r instanceof Error && r.stack != null) return r.stack.toString()
  }
  throw new b(-3, "errorTrace signal unexpected behaviour")
}

function Rr() {
  return eval.toString().length
}

function Dr() {
  if (Function.prototype.bind === void 0) throw new b(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function at() {
  var r, t;
  const e = window,
    n = navigator;
  return X(["webkitPersistentStorage" in n, "webkitTemporaryStorage" in n, n.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : X(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, n.vendor.indexOf("Apple") === 0, "getStorageUpdates" in n, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : X(["buildID" in navigator, "MozAppearance" in ((t = (r = document.documentElement) === null || r === void 0 ? void 0 : r.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function Pr() {
  var r;
  const t = (r = navigator.userAgent) === null || r === void 0 ? void 0 : r.toLowerCase();
  return z(t, "edg/") ? "edge" : z(t, "trident") || z(t, "msie") ? "internet_explorer" : z(t, "wechat") ? "wechat" : z(t, "firefox") ? "firefox" : z(t, "opera") || z(t, "opr") ? "opera" : z(t, "chrome") ? "chrome" : z(t, "safari") ? "safari" : "unknown"
}

function xr() {
  const r = at(),
    t = r === "chromium",
    e = r === "gecko",
    n = window,
    a = navigator,
    s = "connection";
  return t ? X([!("SharedWorker" in n), a[s] && "ontypechange" in a[s], !("sinkId" in new Audio)]) >= 2 : e ? X(["onorientationchange" in n, "orientation" in n, /android/i.test(a.appVersion)]) >= 2 : !1
}

function jr() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function zr() {
  const r = window;
  return X([!("MediaSettingsRange" in r), "RTCEncodedAudioFrame" in r, "" + r.Intl == "[object Intl]", "" + r.Reflect == "[object Reflect]"]) >= 3
}

function Lr() {
  const r = navigator,
    t = [],
    e = r.language || r.userLanguage || r.browserLanguage || r.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(r.languages)) at() === "chromium" && zr() || t.push(r.languages);
  else if (typeof r.languages == "string") {
    const n = r.languages;
    n && t.push(n.split(","))
  }
  return t
}

function Ur() {
  if (navigator.mimeTypes === void 0) throw new b(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: r
  } = navigator;
  let t = Object.getPrototypeOf(r) === MimeTypeArray.prototype;
  for (let e = 0; e < r.length; e++) t && (t = Object.getPrototypeOf(r[e]) === MimeType.prototype);
  return t
}
async function Cr() {
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

function Mr() {
  if (navigator.plugins === void 0) throw new b(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new b(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function Br() {
  if (navigator.plugins === void 0) throw new b(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new b(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function Kr() {
  const {
    process: r
  } = window, t = "window.process is";
  if (r === void 0) throw new b(-1, `${t} undefined`);
  if (r && typeof r != "object") throw new b(-3, `${t} not an object`);
  return r
}

function $r() {
  const {
    productSub: r
  } = navigator;
  if (r === void 0) throw new b(-1, "navigator.productSub is undefined");
  return r
}

function Fr() {
  if (navigator.connection === void 0) throw new b(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new b(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function Hr() {
  return navigator.userAgent
}

function Gr() {
  if (navigator.webdriver == null) throw new b(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function Vr() {
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

function Wr() {
  if (window.external === void 0) throw new b(-1, "window.external is undefined");
  const {
    external: r
  } = window;
  if (typeof r.toString != "function") throw new b(-2, "window.external.toString is not a function");
  return r.toString()
}

function Yr() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function Jr() {
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
    n = ot(window);
  let a = [];
  window.document !== void 0 && (a = ot(window.document));
  for (t in r) {
    const s = r[t];
    if (s !== void 0) {
      const c = s.window === void 0 ? !1 : Xe(n, ...s.window),
        u = s.document === void 0 || !a.length ? !1 : Xe(a, ...s.document);
      e[t] = c || u
    }
  }
  return e
}
const Qr = {
  android: xr,
  browserKind: Pr,
  browserEngineKind: at,
  documentFocus: jr,
  userAgent: Hr,
  appVersion: Sr,
  rtt: Fr,
  windowSize: Yr,
  pluginsLength: Br,
  pluginsArray: Mr,
  errorTrace: Ir,
  productSub: $r,
  windowExternal: Wr,
  mimeTypesConsistent: Ur,
  evalLength: Rr,
  webGL: Vr,
  webDriver: Gr,
  languages: Lr,
  notificationPermissions: Cr,
  documentElementKeys: Nr,
  functionBind: Dr,
  process: Kr,
  distinctiveProps: Jr
};
class Xr {
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
    const [t, e] = sr(this.components, Ar);
    return this.detections = t, e
  }
  async collect() {
    return this.components = await or(Qr), this.components
  }
}

function Zr() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const r = new XMLHttpRequest;
    r.open("get", `https://m1.openfpcdn.io/botd/v${ir}/npm-monitoring`, !0), r.send()
  } catch (r) {
    console.error(r)
  }
}
async function en({
  monitoring: r = !0
} = {}) {
  r && Zr();
  const t = new Xr;
  return await t.collect(), t
}
let We = null;
async function tn() {
  return await rn() ? {
    bot: !1
  } : (await nn()).detect()
}
async function rn() {
  var e;
  const r = navigator;
  if (!((e = r.brave) != null && e.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(r.userAgent)) return !1;
  try {
    return await r.brave.isBrave()
  } catch {
    return !1
  }
}

function nn() {
  return We || (We = en({
    monitoring: !1
  })), We
}
const ct = "theme";
var ce, ue, le, _e, de, fe, he, pe, me, ge, we, ye;
class an {
  constructor() {
    v(this, ce, S(!1));
    v(this, ue, S(!1));
    v(this, le, S(!1));
    v(this, _e, S(!1));
    v(this, de, S(0));
    v(this, fe, S(!1));
    v(this, he, S(Ke(sn())));
    v(this, pe, S(null));
    v(this, me, S(!1));
    v(this, ge, S("custom-winter"));
    v(this, we, S(Ke(Date.now())));
    v(this, ye, S(void 0));
    setInterval(() => {
      k(h(this, we), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(ct), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return E(h(this, ce))
  }
  set dropletsDialogOpen(t) {
    k(h(this, ce), t, !0)
  }
  get accountConflictDialogOpen() {
    return E(h(this, ue))
  }
  set accountConflictDialogOpen(t) {
    k(h(this, ue), t, !0)
  }
  get pendingHistoryDialogOpen() {
    return E(h(this, le))
  }
  set pendingHistoryDialogOpen(t) {
    k(h(this, le), t, !0)
  }
  get storeDialogOpen() {
    return E(h(this, _e))
  }
  set storeDialogOpen(t) {
    k(h(this, _e), t, !0)
  }
  get storeTabIndex() {
    return E(h(this, de))
  }
  set storeTabIndex(t) {
    k(h(this, de), t, !0)
  }
  get muted() {
    return E(h(this, fe))
  }
  set muted(t) {
    k(h(this, fe), t, !0)
  }
  get language() {
    return E(h(this, he))
  }
  set language(t) {
    k(h(this, he), t, !0)
  }
  get map() {
    return E(h(this, pe))
  }
  set map(t) {
    k(h(this, pe), t)
  }
  get automatedClicks() {
    return E(h(this, me))
  }
  set automatedClicks(t) {
    k(h(this, me), t, !0)
  }
  get theme() {
    return E(h(this, ge))
  }
  set theme(t) {
    k(h(this, ge), t, !0), localStorage.setItem(ct, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return E(h(this, we))
  }
  get captcha() {
    return on ? E(h(this, ye)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    k(h(this, ye), t, !0)
  }
}
ce = new WeakMap, ue = new WeakMap, le = new WeakMap, _e = new WeakMap, de = new WeakMap, fe = new WeakMap, he = new WeakMap, pe = new WeakMap, me = new WeakMap, ge = new WeakMap, we = new WeakMap, ye = new WeakMap;
const Ze = new an;

function sn() {
  if (navigator.languages && navigator.languages.length > 0) {
    const r = navigator.languages.find(t => t.length === 2);
    if (r) return r
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const on = tr.toLowerCase() !== "false",
  cn = `
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
async function un() {
  try {
    const r = await fetch(`${xt}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!r.ok) return null;
    const t = await r.json(),
      e = await ln(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function ln(r, t) {
  return new Promise(e => {
    const n = new Blob([cn], {
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
const jt = 3;
var ve, be;
class _n {
  constructor() {
    v(this, ve, S(null));
    v(this, be, S(0))
  }
  get current() {
    return E(h(this, ve))
  }
  set current(t) {
    k(h(this, ve), t, !0)
  }
  get errorCount() {
    return E(h(this, be))
  }
  set errorCount(t) {
    k(h(this, be), t, !0)
  }
}
ve = new WeakMap, be = new WeakMap;
const R = new _n;
async function se(r) {
  if (r === 1) return dn();
  if (r === 2) {
    const t = await zt();
    return t ? ut("turnstile", t) : !1
  }
  if (r === 3) {
    const t = await fn();
    return t ? ut("hcaptcha", t) : !1
  }
  return r === 4 ? hn() : !1
}
async function dn() {
  for (let r = 0; r < jt; r++) try {
    const t = await un();
    if (!t) continue;
    return await $.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}
async function ut(r, t) {
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

function zt() {
  return Lt(2)
}

function fn() {
  return Lt(3)
}

function Lt(r) {
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

function hn() {
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

function DI(r) {
  const t = R.current;
  !t || t.tier === 4 || (t.resolve(r), R.current = null)
}

function PI() {
  const r = R.current;
  !r || r.tier === 4 || (R.errorCount += 1, R.errorCount >= jt && (r.resolve(void 0), R.current = null))
}

function xI() {
  const r = R.current;
  !r || r.tier !== 4 || (r.resolve(!0), R.current = null)
}

function jI() {
  const r = R.current;
  r && (r.tier === 4 ? r.resolve(!1) : r.resolve(void 0), R.current = null)
}
var i = (r => (r[r.CONTINUE = 100] = "CONTINUE", r[r.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", r[r.PROCESSING = 102] = "PROCESSING", r[r.EARLY_HINTS = 103] = "EARLY_HINTS", r[r.OK = 200] = "OK", r[r.CREATED = 201] = "CREATED", r[r.ACCEPTED = 202] = "ACCEPTED", r[r.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", r[r.NO_CONTENT = 204] = "NO_CONTENT", r[r.RESET_CONTENT = 205] = "RESET_CONTENT", r[r.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", r[r.MULTI_STATUS = 207] = "MULTI_STATUS", r[r.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", r[r.IM_USED = 226] = "IM_USED", r[r.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", r[r.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", r[r.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", r[r.FOUND = 302] = "FOUND", r[r.SEE_OTHER = 303] = "SEE_OTHER", r[r.NOT_MODIFIED = 304] = "NOT_MODIFIED", r[r.USE_PROXY = 305] = "USE_PROXY", r[r.SWITCH_PROXY = 306] = "SWITCH_PROXY", r[r.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", r[r.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", r[r.BAD_REQUEST = 400] = "BAD_REQUEST", r[r.UNAUTHORIZED = 401] = "UNAUTHORIZED", r[r.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", r[r.FORBIDDEN = 403] = "FORBIDDEN", r[r.NOT_FOUND = 404] = "NOT_FOUND", r[r.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", r[r.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", r[r.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", r[r.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", r[r.CONFLICT = 409] = "CONFLICT", r[r.GONE = 410] = "GONE", r[r.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", r[r.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", r[r.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", r[r.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", r[r.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", r[r.URI_TOO_LONG = 414] = "URI_TOO_LONG", r[r.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", r[r.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", r[r.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", r[r.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", r[r.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", r[r.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", r[r.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", r[r.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", r[r.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", r[r.LOCKED = 423] = "LOCKED", r[r.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", r[r.TOO_EARLY = 425] = "TOO_EARLY", r[r.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", r[r.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", r[r.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", r[r.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", r[r.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", r[r.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", r[r.BAD_GATEWAY = 502] = "BAD_GATEWAY", r[r.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", r[r.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", r[r.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", r[r.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", r[r.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", r[r.LOOP_DETECTED = 508] = "LOOP_DETECTED", r[r.NOT_EXTENDED = 510] = "NOT_EXTENDED", r[r.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", r[r.AWS_ELB_000 = 0] = "AWS_ELB_000", r[r.THIS_IS_FINE = 218] = "THIS_IS_FINE", r[r.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", r[r.METHOD_FAILURE = 420] = "METHOD_FAILURE", r[r.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", r[r.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", r[r.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", r[r.NO_RESPONSE = 444] = "NO_RESPONSE", r[r.RETRY_WITH = 449] = "RETRY_WITH", r[r.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", r[r.REDIRECT_IIS = 451] = "REDIRECT_IIS", r[r.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", r[r.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", r[r.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", r[r.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", r[r.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", r[r.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", r[r.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", r[r.INVALID_TOKEN = 498] = "INVALID_TOKEN", r[r.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", r[r.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", r[r.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", r[r.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", r[r.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", r[r.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", r[r.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", r[r.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", r[r.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", r[r.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", r[r.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", r[r.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", r[r.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", r[r.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", r[r.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", r[r.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", r[r.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", r[r.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", r[r.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", r[r.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", r[r.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", r[r.REQUEST_DENIED = 999] = "REQUEST_DENIED", r))(i || {});
class ae extends Error {}
const pn = () => "A punishment cache reload is already running",
  mn = () => "Um recarregamento do cache de punições já está em andamento",
  gn = () => "处罚缓存重新加载已在进行中",
  wn = () => "Ein Neuladen des Strafen-Caches läuft bereits",
  yn = () => "Ya hay una recarga de la caché de sanciones en curso",
  vn = () => "Un rechargement du cache des sanctions est déjà en cours",
  bn = () => "Un ricaricamento della cache delle sanzioni è già in corso",
  En = () => "処罰キャッシュの再読み込みは既に実行中です",
  On = () => "Przeładowanie pamięci kar już trwa",
  Tn = () => "Перезагрузка кэша наказаний уже выполняется",
  kn = () => "Перезавантаження кешу покарань уже виконується",
  qn = () => "Quá trình tải lại bộ nhớ đệm hình phạt đang chạy",
  An = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? pn() : e === "pt" ? mn() : e === "ch" ? gn() : e === "de" ? wn() : e === "es" ? yn() : e === "fr" ? vn() : e === "it" ? bn() : e === "jp" ? En() : e === "pl" ? On() : e === "ru" ? Tn() : e === "uk" ? kn() : qn()
  },
  Sn = () => "Your account has been suspended for breaking the rules",
  Nn = () => "Sua conta foi suspensa por quebrar as regras",
  In = () => "您的账号因违反规则已被暂停",
  Rn = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  Dn = () => "Tu cuenta ha sido suspendida por infringir las regras",
  Pn = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  xn = () => "Il tuo account è stato sospeso per aver infranto le regole",
  jn = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  zn = () => "Twoje konto zostało zawieszone za łamanie zasad",
  Ln = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Un = () => "Ваш обліковий запис було призупинено за порушення правил",
  Cn = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  lt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Sn() : e === "pt" ? Nn() : e === "ch" ? In() : e === "de" ? Rn() : e === "es" ? Dn() : e === "fr" ? Pn() : e === "it" ? xn() : e === "jp" ? jn() : e === "pl" ? zn() : e === "ru" ? Ln() : e === "uk" ? Un() : Cn()
  },
  Mn = () => "Alliance name already taken",
  Bn = () => "Já possui uma aliança com esse nome",
  Kn = () => "该联盟名称已被占用",
  $n = () => "Der Allianzname ist bereits vergeben",
  Fn = () => "Ese nombre de alianza ya está en uso",
  Hn = () => "Ce nom d’alliance est déjà pris",
  Gn = () => "Esiste già un'alleanza con questo nome",
  Vn = () => "このアライアンス名は既に使用されています。",
  Wn = () => "Nazwa sojuszu jest już zajęta",
  Yn = () => "Такое название альянса уже используется",
  Jn = () => "Назва альянсу вже зайнята",
  Qn = () => "Tên liên minh đã được sử dụng",
  _t = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Mn() : e === "pt" ? Bn() : e === "ch" ? Kn() : e === "de" ? $n() : e === "es" ? Fn() : e === "fr" ? Hn() : e === "it" ? Gn() : e === "jp" ? Vn() : e === "pl" ? Wn() : e === "ru" ? Yn() : e === "uk" ? Jn() : Qn()
  },
  Xn = () => "Alliance name exceeded the maximum number of characters",
  Zn = () => "O nome da aliança excedeu o número máximo de caracteres",
  ea = () => "联盟名称超过最大字符数限制",
  ta = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  ra = () => "El nombre de la alianza superó el número máximo de caracteres",
  na = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  aa = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  ia = () => "アライアンス名が最大文字数を超えています。",
  sa = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  oa = () => "Название альянса превышает максимальную длину",
  ca = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  ua = () => "Tên liên minh vượt quá số ký tự cho phép",
  dt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Xn() : e === "pt" ? Zn() : e === "ch" ? ea() : e === "de" ? ta() : e === "es" ? ra() : e === "fr" ? na() : e === "it" ? aa() : e === "jp" ? ia() : e === "pl" ? sa() : e === "ru" ? oa() : e === "uk" ? ca() : ua()
  },
  la = () => "Alliance with empty name",
  _a = () => "Aliança com nome vazio",
  da = () => "名称为空的联盟",
  fa = () => "Allianz mit leerem Namen",
  ha = () => "Alianza con nombre vacío",
  pa = () => "Alliance avec nom vide",
  ma = () => "Alleanza con nome vuoto",
  ga = () => "名前が空のアライアンスです。",
  wa = () => "Sojusz z pustą nazwą",
  ya = () => "Альянс с пустым названием",
  va = () => "Альянс із порожньою назвою",
  ba = () => "Liên minh không có tên",
  Ea = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? la() : e === "pt" ? _a() : e === "ch" ? da() : e === "de" ? fa() : e === "es" ? ha() : e === "fr" ? pa() : e === "it" ? ma() : e === "jp" ? ga() : e === "pl" ? wa() : e === "ru" ? ya() : e === "uk" ? va() : ba()
  },
  Oa = () => "Botting",
  Ta = () => "Uso de bots",
  ka = () => "脚本",
  qa = () => "Bot-Nutzung",
  Aa = () => "Botting",
  Sa = () => "Bots",
  Na = () => "Uso di bot",
  Ia = () => "ボット使用",
  Ra = () => "Botting",
  Da = () => "Боттинг",
  Pa = () => "Боти",
  xa = () => "Botting",
  ja = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Oa() : e === "pt" ? Ta() : e === "ch" ? ka() : e === "de" ? qa() : e === "es" ? Aa() : e === "fr" ? Sa() : e === "it" ? Na() : e === "jp" ? Ia() : e === "pl" ? Ra() : e === "ru" ? Da() : e === "uk" ? Pa() : xa()
  },
  za = () => "Use of software to completely automate painting",
  La = () => "Uso de software para pintar de forma completamente automatizada ",
  Ua = () => "使用软件完全自动化绘制",
  Ca = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  Ma = () => "Uso de software para automatizar completamente la pintura",
  Ba = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  Ka = () => "Uso di software per dipingere in modo completamente automatizzato",
  $a = () => "ペイントを完全に自動化するソフトウェアの使用",
  Fa = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  Ha = () => "Использование программ для полной автоматизации рисования",
  Ga = () => "Використання програм, які повністю автоматизують малювання",
  Va = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  Wa = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? za() : e === "pt" ? La() : e === "ch" ? Ua() : e === "de" ? Ca() : e === "es" ? Ma() : e === "fr" ? Ba() : e === "it" ? Ka() : e === "jp" ? $a() : e === "pl" ? Fa() : e === "ru" ? Ha() : e === "uk" ? Ga() : Va()
  },
  Ya = () => "Breaking the rules",
  Ja = () => "Quebrar as regras",
  Qa = () => "违反规则",
  Xa = () => "Regeln brechen",
  Za = () => "Romper las reglas",
  ei = () => "Violation des règles",
  ti = () => "Violazione delle regole",
  ri = () => "ルール違反",
  ni = () => "Łamanie zasad",
  ai = () => "Нарушение правил",
  ii = () => "Порушення правил",
  si = () => "Vi phạm luật",
  oi = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ya() : e === "pt" ? Ja() : e === "ch" ? Qa() : e === "de" ? Xa() : e === "es" ? Za() : e === "fr" ? ei() : e === "it" ? ti() : e === "jp" ? ri() : e === "pl" ? ni() : e === "ru" ? ai() : e === "uk" ? ii() : si()
  },
  ci = () => "You have broken one of Wplace's rules",
  ui = () => "Você quebrou uma das regras do Wplace",
  li = () => "你违反了 Wplace 的一项规则",
  _i = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  di = () => "Has infringido una de las reglas de Wplace",
  fi = () => "Vous avez enfreint l’une des règles de Wplace",
  hi = () => "Hai infranto una delle regole di Wplace",
  pi = () => "Wplaceのルールのいずれかに違反しました。",
  mi = () => "Złamałeś jedną z zasad Wplace",
  gi = () => "Вы нарушили одно из правил Wplace",
  wi = () => "Ви порушили одне з правил Wplace",
  yi = () => "Bạn đã vi phạm một trong các luật của Wplace",
  vi = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ci() : e === "pt" ? ui() : e === "ch" ? li() : e === "de" ? _i() : e === "es" ? di() : e === "fr" ? fi() : e === "it" ? hi() : e === "jp" ? pi() : e === "pl" ? mi() : e === "ru" ? gi() : e === "uk" ? wi() : yi()
  },
  bi = () => "You cannot paint over event pixels",
  Ei = () => "Você não pode pintar sobre pixels de eventos",
  Oi = () => "你不能覆盖活动像素",
  Ti = () => "Du kannst nicht über Event-Pixel malen",
  ki = () => "No puedes pintar sobre píxeles de evento",
  qi = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  Ai = () => "Non puoi dipingere sopra i pixel dell'evento",
  Si = () => "イベント用のピクセルの上には塗れません。",
  Ni = () => "Nie możesz malować po pikselach wydarzenia",
  Ii = () => "Вы не можете рисовать по пикселям события",
  Ri = () => "Ви не можете малювати поверх пікселів події",
  Di = () => "Bạn không thể tô lên pixel sự kiện",
  ft = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? bi() : e === "pt" ? Ei() : e === "ch" ? Oi() : e === "de" ? Ti() : e === "es" ? ki() : e === "fr" ? qi() : e === "it" ? Ai() : e === "jp" ? Si() : e === "pl" ? Ni() : e === "ru" ? Ii() : e === "uk" ? Ri() : Di()
  },
  Pi = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  xi = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  ji = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  zi = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  Li = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  Ui = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  Ci = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Mi = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Bi = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Ki = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  $i = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Fi = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Hi = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Pi() : e === "pt" ? xi() : e === "ch" ? ji() : e === "de" ? zi() : e === "es" ? Li() : e === "fr" ? Ui() : e === "it" ? Ci() : e === "jp" ? Mi() : e === "pl" ? Bi() : e === "ru" ? Ki() : e === "uk" ? $i() : Fi()
  },
  Gi = () => "Challenge verification not completed",
  Vi = () => "Verificação do desafio não concluída",
  Wi = () => "挑战验证未完成",
  Yi = () => "Herausforderungsverifizierung nicht abgeschlossen",
  Ji = () => "Verificación del desafío no completada",
  Qi = () => "Vérification du défi non terminée",
  Xi = () => "Verifica della sfida non completata",
  Zi = () => "チャレンジ検証が完了していません",
  es = () => "Weryfikacja wyzwania niezakończona",
  ts = () => "Верификация вызова не завершена",
  rs = () => "Перевірку виклику не завершено",
  ns = () => "Xác minh thử thách chưa hoàn thành",
  ee = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Gi() : e === "pt" ? Vi() : e === "ch" ? Wi() : e === "de" ? Yi() : e === "es" ? Ji() : e === "fr" ? Qi() : e === "it" ? Xi() : e === "jp" ? Zi() : e === "pl" ? es() : e === "ru" ? ts() : e === "uk" ? rs() : ns()
  },
  as = () => "Couldn't complete the purchase. This item does not exist.",
  is = () => "Não foi possível concluir a compra. Este item não existe.",
  ss = () => "无法完成购买。该物品不存在。",
  os = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  cs = () => "No se pudo completar la compra. Este ítem no existe.",
  us = () => "Achat impossible. Cet objet n’existe pas.",
  ls = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  _s = () => "購入を完了できませんでした。このアイテムは存在しません。",
  ds = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  fs = () => "Не удалось завершить покупку. Этот предмет не существует.",
  hs = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  ps = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  Ut = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? as() : e === "pt" ? is() : e === "ch" ? ss() : e === "de" ? os() : e === "es" ? cs() : e === "fr" ? us() : e === "it" ? ls() : e === "jp" ? _s() : e === "pl" ? ds() : e === "ru" ? fs() : e === "uk" ? hs() : ps()
  },
  ms = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  gs = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  ws = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  ys = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  vs = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  bs = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  Es = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  Os = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  Ts = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  ks = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  qs = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  As = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  Ss = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ms() : e === "pt" ? gs() : e === "ch" ? ws() : e === "de" ? ys() : e === "es" ? vs() : e === "fr" ? bs() : e === "it" ? Es() : e === "jp" ? Os() : e === "pl" ? Ts() : e === "ru" ? ks() : e === "uk" ? qs() : As()
  },
  Ns = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  Is = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  Rs = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  Ds = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  Ps = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  xs = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  js = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  zs = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  Ls = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  Us = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  Cs = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  Ms = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  ht = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ns() : e === "pt" ? Is() : e === "ch" ? Rs() : e === "de" ? Ds() : e === "es" ? Ps() : e === "fr" ? xs() : e === "it" ? js() : e === "jp" ? zs() : e === "pl" ? Ls() : e === "ru" ? Us() : e === "uk" ? Cs() : Ms()
  },
  Bs = () => "Doxxing",
  Ks = () => "Doxxing",
  $s = () => "人肉搜索",
  Fs = () => "Doxxing",
  Hs = () => "Doxxing",
  Gs = () => "Doxxing",
  Vs = () => "Doxxing",
  Ws = () => "ドックス（Doxxing）",
  Ys = () => "Doxxing",
  Js = () => "Докcинг",
  Qs = () => "Докcинг",
  Xs = () => "Doxxing",
  Zs = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Bs() : e === "pt" ? Ks() : e === "ch" ? $s() : e === "de" ? Fs() : e === "es" ? Hs() : e === "fr" ? Gs() : e === "it" ? Vs() : e === "jp" ? Ws() : e === "pl" ? Ys() : e === "ru" ? Js() : e === "uk" ? Qs() : Xs()
  },
  eo = () => "Released other's personal information without their consent",
  to = () => "Vazar informações pessoais de terceiros sem consentimento",
  ro = () => "在未获同意的情况下公开他人个人信息",
  no = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  ao = () => "Divulgó información personal de otra persona sin su consentimiento",
  io = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  so = () => "Diffusione di informazioni personali di terzi senza consenso",
  oo = () => "他人の個人情報を同意なく公開した。",
  co = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  uo = () => "Публикация личной информации других людей без их согласия",
  lo = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  _o = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  fo = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? eo() : e === "pt" ? to() : e === "ch" ? ro() : e === "de" ? no() : e === "es" ? ao() : e === "fr" ? io() : e === "it" ? so() : e === "jp" ? oo() : e === "pl" ? co() : e === "ru" ? uo() : e === "uk" ? lo() : _o()
  },
  ho = () => "This was already resolved. Reload the page to see your account.",
  po = () => "Isso já foi resolvido. Recarregue a página para ver sua conta.",
  mo = () => "此问题已解决。请刷新页面以查看您的账户。",
  go = () => "Dies wurde bereits gelöst. Laden Sie die Seite neu, um Ihr Konto zu sehen.",
  wo = () => "Esto ya está resuelto. Recarga la página para ver tu cuenta.",
  yo = () => "C'était déjà résolu. Rechargez la page pour voir votre compte.",
  vo = () => "Questo è stato già risolto. Ricarica la pagina per vedere il tuo account.",
  bo = () => "これはすでに解決済みです。アカウントを表示するには、ページを再読み込みしてください。",
  Eo = () => "Problem został już rozwiązany. Odśwież stronę, aby zobaczyć swoje konto.",
  Oo = () => "Это уже было решено. Перезагрузите страницу, чтобы увидеть свою учетную запись.",
  To = () => "Це вже було вирішено. Перезавантажте сторінку, щоб побачити свій обліковий запис.",
  ko = () => "Vấn đề này đã được giải quyết. Tải lại trang để xem tài khoản của bạn.",
  qo = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ho() : e === "pt" ? po() : e === "ch" ? mo() : e === "de" ? go() : e === "es" ? wo() : e === "fr" ? yo() : e === "it" ? vo() : e === "jp" ? bo() : e === "pl" ? Eo() : e === "ru" ? Oo() : e === "uk" ? To() : ko()
  },
  Ao = () => "These accounts can't be merged automatically. Contact us at contact@wplace.live and we'll sort it out.",
  So = () => "Estas contas não podem ser mescladas automaticamente. Entre em contato conosco em contact@wplace.live e resolveremos isso.",
  No = () => "这些账户无法自动合并。请发送邮件至 contact@wplace.live 联系我们，我们将妥善处理。",
  Io = () => "Diese Konten können nicht automatisch zusammengeführt werden. Kontaktieren Sie uns unter contact@wplace.live und wir kümmern uns darum.",
  Ro = () => "Estas cuentas no se pueden fusionar automáticamente. Contáctanos en contact@wplace.live y lo solucionaremos.",
  Do = () => "Ces comptes ne peuvent pas être fusionnés automatiquement. Contactez-nous à contact@wplace.live et nous nous en occuperons.",
  Po = () => "Questi account non possono essere uniti automaticamente. Contattaci a contact@wplace.live e sistemeremo tutto.",
  xo = () => "これらのアカウントは自動的に統合できません。contact@wplace.liveまでお問い合わせください。弊社が対応いたします。",
  jo = () => "Te konta nie mogą zostać automatycznie scalone. Skontaktuj się z nami pod adresem contact@wplace.live, a my się tym zajmiemy.",
  zo = () => "Эти аккаунты не могут быть объединены автоматически. Свяжитесь с нами по адресу contact@wplace.live, и мы разберемся.",
  Lo = () => "Ці облікові записи не можуть бути об'єднані автоматично. Зв'яжіться з нами за адресою contact@wplace.live, і ми все владнаємо.",
  Uo = () => "Các tài khoản này không thể hợp nhất tự động. Hãy liên hệ với chúng tôi tại contact@wplace.live và chúng tôi sẽ giải quyết.",
  Co = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ao() : e === "pt" ? So() : e === "ch" ? No() : e === "de" ? Io() : e === "es" ? Ro() : e === "fr" ? Do() : e === "it" ? Po() : e === "jp" ? xo() : e === "pl" ? jo() : e === "ru" ? zo() : e === "uk" ? Lo() : Uo()
  },
  Mo = () => "This email is already in use.",
  Bo = () => "Este e-mail já está em uso.",
  Ko = () => "This email is already in use.",
  $o = () => "This email is already in use.",
  Fo = () => "Este correo electrónico ya está en uso.",
  Ho = () => "This email is already in use.",
  Go = () => "Questa email è già in uso.",
  Vo = () => "This email is already in use.",
  Wo = () => "This email is already in use.",
  Yo = () => "This email is already in use.",
  Jo = () => "This email is already in use.",
  Qo = () => "This email is already in use.",
  Xo = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Mo() : e === "pt" ? Bo() : e === "ch" ? Ko() : e === "de" ? $o() : e === "es" ? Fo() : e === "fr" ? Ho() : e === "it" ? Go() : e === "jp" ? Vo() : e === "pl" ? Wo() : e === "ru" ? Yo() : e === "uk" ? Jo() : Qo()
  },
  Zo = r => `This email is already in use by user #${r.userId}.`,
  ec = r => `Este e-mail já está em uso pelo usuário #${r.userId}.`,
  tc = r => `This email is already in use by user #${r.userId}.`,
  rc = r => `This email is already in use by user #${r.userId}.`,
  nc = r => `Este correo electrónico ya está en uso por el usuario #${r.userId}.`,
  ac = r => `This email is already in use by user #${r.userId}.`,
  ic = r => `Questa email è già in uso dall'utente #${r.userId}.`,
  sc = r => `This email is already in use by user #${r.userId}.`,
  oc = r => `This email is already in use by user #${r.userId}.`,
  cc = r => `This email is already in use by user #${r.userId}.`,
  uc = r => `This email is already in use by user #${r.userId}.`,
  lc = r => `This email is already in use by user #${r.userId}.`,
  _c = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Zo(r) : e === "pt" ? ec(r) : e === "ch" ? tc(r) : e === "de" ? rc(r) : e === "es" ? nc(r) : e === "fr" ? ac(r) : e === "it" ? ic(r) : e === "jp" ? sc(r) : e === "pl" ? oc(r) : e === "ru" ? cc(r) : e === "uk" ? uc(r) : lc(r)
  },
  dc = () => "Enter a valid email address.",
  fc = () => "Informe um endereço de e-mail válido.",
  hc = () => "Enter a valid email address.",
  pc = () => "Enter a valid email address.",
  mc = () => "Introduce una dirección de correo electrónico válida.",
  gc = () => "Enter a valid email address.",
  wc = () => "Inserisci un indirizzo email valido.",
  yc = () => "Enter a valid email address.",
  vc = () => "Enter a valid email address.",
  bc = () => "Enter a valid email address.",
  Ec = () => "Enter a valid email address.",
  Oc = () => "Enter a valid email address.",
  Tc = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? dc() : e === "pt" ? fc() : e === "ch" ? hc() : e === "de" ? pc() : e === "es" ? mc() : e === "fr" ? gc() : e === "it" ? wc() : e === "jp" ? yc() : e === "pl" ? vc() : e === "ru" ? bc() : e === "uk" ? Ec() : Oc()
  },
  kc = r => `Error while painting: ${r.err}`,
  qc = r => `Erro enquanto pinta: ${r.err}`,
  Ac = r => `绘制时出错：${r.err}`,
  Sc = r => `Fehler beim Malen: ${r.err}`,
  Nc = r => `Error al pintar: ${r.err}`,
  Ic = r => `Erreur lors de la peinture : ${r.err}`,
  Rc = r => `Errore durante la pittura: ${r.err}`,
  Dc = r => `ペイント中にエラーが発生しました: ${r.err}`,
  Pc = r => `Błąd podczas malowania: ${r.err}`,
  xc = r => `Ошибка при рисовании: ${r.err}`,
  jc = r => `Помилка під час малювання: ${r.err}`,
  zc = r => `Lỗi khi tô: ${r.err}`,
  Lc = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? kc(r) : e === "pt" ? qc(r) : e === "ch" ? Ac(r) : e === "de" ? Sc(r) : e === "es" ? Nc(r) : e === "fr" ? Ic(r) : e === "it" ? Rc(r) : e === "jp" ? Dc(r) : e === "pl" ? Pc(r) : e === "ru" ? xc(r) : e === "uk" ? jc(r) : zc(r)
  },
  Uc = () => "Exceeded maximum number of characters",
  Cc = () => "Excedeu o número máximo de caracteres permitidos",
  Mc = () => "超出最大字符数",
  Bc = () => "Maximale Zeichenanzahl überschritten",
  Kc = () => "Se excedió el número máximo de caracteres",
  $c = () => "Nombre maximal de caractères dépassé",
  Fc = () => "Numero massimo di caratteri superato",
  Hc = () => "最大文字数を超過しました",
  Gc = () => "Przekroczono maksymalną liczbę znaków",
  Vc = () => "Превышено максимальное количество символов",
  Wc = () => "Перевищено максимальну кількість символів",
  Yc = () => "Đã vượt quá số ký tự tối đa",
  Jc = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Uc() : e === "pt" ? Cc() : e === "ch" ? Mc() : e === "de" ? Bc() : e === "es" ? Kc() : e === "fr" ? $c() : e === "it" ? Fc() : e === "jp" ? Hc() : e === "pl" ? Gc() : e === "ru" ? Vc() : e === "uk" ? Wc() : Yc()
  },
  Qc = () => "Verification code expired. Please request a new one.",
  Xc = () => "Código de verificação expirado. Por favor, solicite um novo.",
  Zc = () => "验证码已过期，请重新获取。",
  eu = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  tu = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  ru = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  nu = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  au = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  iu = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  su = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  ou = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  cu = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  uu = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Qc() : e === "pt" ? Xc() : e === "ch" ? Zc() : e === "de" ? eu() : e === "es" ? tu() : e === "fr" ? ru() : e === "it" ? nu() : e === "jp" ? au() : e === "pl" ? iu() : e === "ru" ? su() : e === "uk" ? ou() : cu()
  },
  lu = () => "Griefing",
  _u = () => "Griefing",
  du = () => "破坏行为",
  fu = () => "Griefing",
  hu = () => "Griefing",
  pu = () => "Griefing",
  mu = () => "Griefing",
  gu = () => "グリーフィング",
  wu = () => "Griefing",
  yu = () => "Гриферство",
  vu = () => "Гріфінг",
  bu = () => "Griefing",
  Eu = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? lu() : e === "pt" ? _u() : e === "ch" ? du() : e === "de" ? fu() : e === "es" ? hu() : e === "fr" ? pu() : e === "it" ? mu() : e === "jp" ? gu() : e === "pl" ? wu() : e === "ru" ? yu() : e === "uk" ? vu() : bu()
  },
  Ou = () => "Messed up with other's artworks",
  Tu = () => "Estragou os desenhos dos outros",
  ku = () => "破坏了他人的作品",
  qu = () => "Kunstwerke anderer beschädigt",
  Au = () => "Arruinó las obras de arte de otros",
  Su = () => "A abîmé les œuvres des autres",
  Nu = () => "Ha rovinato i disegni degli altri",
  Iu = () => "他人の作品を荒らした",
  Ru = () => "Zniszczył prace innych",
  Du = () => "Испортил чужие рисунки",
  Pu = () => "Зіпсував роботи інших",
  xu = () => "Phá hỏng tranh của người khác",
  ju = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ou() : e === "pt" ? Tu() : e === "ch" ? ku() : e === "de" ? qu() : e === "es" ? Au() : e === "fr" ? Su() : e === "it" ? Nu() : e === "jp" ? Iu() : e === "pl" ? Ru() : e === "ru" ? Du() : e === "uk" ? Pu() : xu()
  },
  zu = () => "Hate speech",
  Lu = () => "Discurso de Ódio",
  Uu = () => "仇恨言论",
  Cu = () => "Hassrede",
  Mu = () => "Discurso de odio",
  Bu = () => "Discours haineux",
  Ku = () => "Discorso d'odio",
  $u = () => "ヘイトスピーチ",
  Fu = () => "Mowa nienawiści",
  Hu = () => "Речь ненависти",
  Gu = () => "Мова ворожнечі",
  Vu = () => "Ngôn từ thù hằn",
  Wu = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? zu() : e === "pt" ? Lu() : e === "ch" ? Uu() : e === "de" ? Cu() : e === "es" ? Mu() : e === "fr" ? Bu() : e === "it" ? Ku() : e === "jp" ? $u() : e === "pl" ? Fu() : e === "ru" ? Hu() : e === "uk" ? Gu() : Vu()
  },
  Yu = () => "Racism, homophobia, hate symbols, etc",
  Ju = () => "Racismo, homofobia, símbolos de ódio, etc.",
  Qu = () => "种族主义、恐同、仇恨符号等",
  Xu = () => "Rassismus, Homophobie, Hasssymbole usw.",
  Zu = () => "Racismo, homofobia, símbolos de odio, etc.",
  el = () => "Racisme, homophobie, symboles haineux, etc.",
  tl = () => "Razzismo, omofobia, simboli d'odio, ecc.",
  rl = () => "人種差別、同性愛嫌悪、ヘイトシンボルなど",
  nl = () => "Rasizm, homofobia, symbole nienawiści itp.",
  al = () => "Расизм, гомофобия, символы ненависти и т. п.",
  il = () => "Расизм, гомофобія, символи ненависті тощо",
  sl = () => "Phân biệt chủng tộc, kỳ thị đồng tính, biểu tượng thù ghét, v.v.",
  ol = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Yu() : e === "pt" ? Ju() : e === "ch" ? Qu() : e === "de" ? Xu() : e === "es" ? Zu() : e === "fr" ? el() : e === "it" ? tl() : e === "jp" ? rl() : e === "pl" ? nl() : e === "ru" ? al() : e === "uk" ? il() : sl()
  },
  cl = () => "Inappropriate content",
  ul = () => "Conteúdo inapropriado",
  ll = () => "不当内容",
  _l = () => "Unangemessene Inhalte",
  dl = () => "Contenido inapropiado",
  fl = () => "Contenu inapproprié",
  hl = () => "Contenuto inappropriato",
  pl = () => "不適切なコンテンツ",
  ml = () => "Nieodpowiednie treści",
  gl = () => "Неприемлемый контент",
  wl = () => "Неприйнятний вміст",
  yl = () => "Nội dung không phù hợp",
  vl = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? cl() : e === "pt" ? ul() : e === "ch" ? ll() : e === "de" ? _l() : e === "es" ? dl() : e === "fr" ? fl() : e === "it" ? hl() : e === "jp" ? pl() : e === "pl" ? ml() : e === "ru" ? gl() : e === "uk" ? wl() : yl()
  },
  bl = () => "Explicit or illegal content, severe slurs",
  El = () => "Conteúdo explícito ou ilegal, insultos graves",
  Ol = () => "露骨或非法内容、严重的侮辱性言论",
  Tl = () => "Expliziter oder illegaler Inhalt, schwere Beleidigungen",
  kl = () => "Contenido explícito o ilegal, insultos graves",
  ql = () => "Contenu explicite ou illégal, insultes graves",
  Al = () => "Contenuto esplicito o illegale, insulti gravi",
  Sl = () => "露骨または違法なコンテンツ、ひどい侮辱・中傷",
  Nl = () => "Treści jawnie seksualne lub nielegalne, poważne obelgi",
  Il = () => "Откровенный или незаконный контент, грубые оскорбления",
  Rl = () => "Відвертий або незаконний вміст, грубі образи",
  Dl = () => "Nội dung phản cảm hoặc bất hợp pháp, lời lẽ lăng mạ nghiêm trọng",
  Pl = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? bl() : e === "pt" ? El() : e === "ch" ? Ol() : e === "de" ? Tl() : e === "es" ? kl() : e === "fr" ? ql() : e === "it" ? Al() : e === "jp" ? Sl() : e === "pl" ? Nl() : e === "ru" ? Il() : e === "uk" ? Rl() : Dl()
  },
  xl = () => "Invalid captcha. Please try again.",
  jl = () => "Captcha inválido. Por favor, tente novamente.",
  zl = () => "验证码无效，请重试。",
  Ll = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  Ul = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  Cl = () => "Captcha invalide. Veuillez réessayer.",
  Ml = () => "Captcha non valido. Riprova.",
  Bl = () => "キャプチャが無効です。もう一度お試しください。",
  Kl = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  $l = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  Fl = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Hl = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Gl = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? xl() : e === "pt" ? jl() : e === "ch" ? zl() : e === "de" ? Ll() : e === "es" ? Ul() : e === "fr" ? Cl() : e === "it" ? Ml() : e === "jp" ? Bl() : e === "pl" ? Kl() : e === "ru" ? $l() : e === "uk" ? Fl() : Hl()
  },
  Vl = () => "Invalid challenge response",
  Wl = () => "Resposta de desafio inválida",
  Yl = () => "质询响应无效",
  Jl = () => "Ungültige Challenge-Antwort",
  Ql = () => "Respuesta de desafío inválida",
  Xl = () => "Réponse au défi invalide",
  Zl = () => "Risposta alla sfida non valida",
  e_ = () => "無効なチャレンジ応答",
  t_ = () => "Nieprawidłowa odpowiedź na wyzwanie",
  r_ = () => "Неверный ответ на вызов",
  n_ = () => "Недійсна відповідь на виклик",
  a_ = () => "Phản hồi thử thách không hợp lệ",
  i_ = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Vl() : e === "pt" ? Wl() : e === "ch" ? Yl() : e === "de" ? Jl() : e === "es" ? Ql() : e === "fr" ? Xl() : e === "it" ? Zl() : e === "jp" ? e_() : e === "pl" ? t_() : e === "ru" ? r_() : e === "uk" ? n_() : a_()
  },
  s_ = () => "The verification code is incorrect. Please check it and try again.",
  o_ = () => "Código inválido",
  c_ = () => "验证码不正确。请检查后重试。",
  u_ = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  l_ = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  __ = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  d_ = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  f_ = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  h_ = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  p_ = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  m_ = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  g_ = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  w_ = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? s_() : e === "pt" ? o_() : e === "ch" ? c_() : e === "de" ? u_() : e === "es" ? l_() : e === "fr" ? __() : e === "it" ? d_() : e === "jp" ? f_() : e === "pl" ? h_() : e === "ru" ? p_() : e === "uk" ? m_() : g_()
  },
  y_ = () => "Invalid discord.",
  v_ = () => "Discord inválido.",
  b_ = () => "无效的 Discord。",
  E_ = () => "Ungültiger Discord.",
  O_ = () => "Discord inválido.",
  T_ = () => "Discord invalide.",
  k_ = () => "Discord non valido.",
  q_ = () => "無効なDiscordアカウントです。",
  A_ = () => "Nieprawidłowy Discord.",
  S_ = () => "Неверный Discord.",
  N_ = () => "Некоректний Discord.",
  I_ = () => "Discord không hợp lệ.",
  R_ = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? y_() : e === "pt" ? v_() : e === "ch" ? b_() : e === "de" ? E_() : e === "es" ? O_() : e === "fr" ? T_() : e === "it" ? k_() : e === "jp" ? q_() : e === "pl" ? A_() : e === "ru" ? S_() : e === "uk" ? N_() : I_()
  },
  D_ = () => "The name contains disallowed characters or words. Please choose a different name.",
  P_ = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  x_ = () => "名称包含禁止的字符或词语，请选择其他名称。",
  j_ = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  z_ = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  L_ = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  U_ = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  C_ = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  M_ = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  B_ = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  K_ = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  $_ = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  Ct = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? D_() : e === "pt" ? P_() : e === "ch" ? x_() : e === "de" ? j_() : e === "es" ? z_() : e === "fr" ? L_() : e === "it" ? U_() : e === "jp" ? C_() : e === "pl" ? M_() : e === "ru" ? B_() : e === "uk" ? K_() : $_()
  },
  F_ = () => "Please enter a valid phone number with country code.",
  H_ = () => "Insira um número de telefone válido com código do país.",
  G_ = () => "请输入带国家代码的有效电话号码。",
  V_ = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  W_ = () => "Introduce un número de teléfono válido con código de país.",
  Y_ = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  J_ = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  Q_ = () => "国番号付きの有効な電話番号を入力してください。",
  X_ = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  Z_ = () => "Введите действительный номер телефона с кодом страны.",
  ed = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  td = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  rd = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? F_() : e === "pt" ? H_() : e === "ch" ? G_() : e === "de" ? V_() : e === "es" ? W_() : e === "fr" ? Y_() : e === "it" ? J_() : e === "jp" ? Q_() : e === "pl" ? X_() : e === "ru" ? Z_() : e === "uk" ? ed() : td()
  },
  nd = () => "Phone number not supported. Please try another number.",
  ad = () => "Número de telefone não suportado. Por favor, tente outro número.",
  id = () => "不支持此电话号码。请尝试其他号码。",
  sd = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  od = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  cd = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  ud = () => "Numero di telefono non supportato. Prova con un altro numero.",
  ld = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  _d = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  dd = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  fd = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  hd = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  pd = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? nd() : e === "pt" ? ad() : e === "ch" ? id() : e === "de" ? sd() : e === "es" ? od() : e === "fr" ? cd() : e === "it" ? ud() : e === "jp" ? ld() : e === "pl" ? _d() : e === "ru" ? dd() : e === "uk" ? fd() : hd()
  },
  md = () => "The new leader must be a member of the alliance",
  gd = () => "O novo líder deve ser um membro da aliança",
  wd = () => "新盟主必须是联盟成员",
  yd = () => "Der neue Anführer muss Mitglied der Allianz sein",
  vd = () => "El nuevo líder debe ser miembro de la alianza",
  bd = () => "Le nouveau chef doit être membre de l’alliance",
  Ed = () => "Il nuovo leader deve essere un membro dell'alleanza",
  Od = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  Td = () => "Nowy lider musi być członkiem sojuszu",
  kd = () => "Новый лидер должен быть участником альянса",
  qd = () => "Новий лідер має бути учасником альянсу",
  Ad = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Sd = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? md() : e === "pt" ? gd() : e === "ch" ? wd() : e === "de" ? yd() : e === "es" ? vd() : e === "fr" ? bd() : e === "it" ? Ed() : e === "jp" ? Od() : e === "pl" ? Td() : e === "ru" ? kd() : e === "uk" ? qd() : Ad()
  },
  Nd = () => "Leaderboard is temporarily disabled",
  Id = () => "O ranking está temporariamente desativado",
  Rd = () => "排行榜已暂时停用",
  Dd = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Pd = () => "La clasificación está deshabilitada temporalmente",
  xd = () => "Le classement est temporairement désactivé",
  jd = () => "La classifica è temporaneamente disattivata",
  zd = () => "ランキングは一時的に無効になっています。",
  Ld = () => "Ranking jest tymczasowo wyłączony",
  Ud = () => "Таблица лидеров временно отключена",
  Cd = () => "Таблиця лідерів тимчасово вимкнена",
  Md = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  V = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Nd() : e === "pt" ? Id() : e === "ch" ? Rd() : e === "de" ? Dd() : e === "es" ? Pd() : e === "fr" ? xd() : e === "it" ? jd() : e === "jp" ? zd() : e === "pl" ? Ld() : e === "ru" ? Ud() : e === "uk" ? Cd() : Md()
  },
  Bd = () => "Location name is too big (max. 128 characters)",
  Kd = () => "Nome da localização é grande demais (max. 128 caracteres)",
  $d = () => "位置名称过长（最大 128 个字符）",
  Fd = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Hd = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Gd = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Vd = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Wd = () => "場所の名前が長すぎます（最大128文字）。",
  Yd = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  Jd = () => "Название локации слишком длинное (макс. 128 символов)",
  Qd = () => "Назва локації надто довга (макс. 128 символів)",
  Xd = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  Zd = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Bd() : e === "pt" ? Kd() : e === "ch" ? $d() : e === "de" ? Fd() : e === "es" ? Hd() : e === "fr" ? Gd() : e === "it" ? Vd() : e === "jp" ? Wd() : e === "pl" ? Yd() : e === "ru" ? Jd() : e === "uk" ? Qd() : Xd()
  },
  ef = () => "Multi-accounting",
  tf = () => "Múltiplas contas",
  rf = () => "多账号",
  nf = () => "Multi-Accounting",
  af = () => "Multi-cuentas",
  sf = () => "Multi-comptes",
  of = () => "Multi-account",
  cf = () => "複数アカウント使用",
  uf = () => "Multi-konta",
  lf = () => "Мультиаккаунт",
  _f = () => "Мультиакаунтинг",
  df = () => "Nhiều tài khoản",
  ff = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ef() : e === "pt" ? tf() : e === "ch" ? rf() : e === "de" ? nf() : e === "es" ? af() : e === "fr" ? sf() : e === "it" ? of() : e === "jp" ? cf() : e === "pl" ? uf() : e === "ru" ? lf() : e === "uk" ? _f() : df()
  },
  hf = () => "Paint with more than one account or using virtual machines, residential proxies, or multi-accounting browsers",
  pf = () => "Pintar com mais de uma conta ou usando máquinas virtuais, proxies residenciais ou navegadores multi-conta",
  mf = () => "使用多个账号绘制像素，或使用虚拟机、住宅代理或多账号浏览器",
  gf = () => "Mehr als ein Konto zum Malen verwenden oder virtuelle Maschinen, Residential-Proxys oder Multi-Accounting-Browser nutzen",
  wf = () => "Pintar con más de una cuenta o usar máquinas virtuales, proxies residenciales o navegadores multicuenta",
  yf = () => "Utiliser plus d’un compte pour peindre, ou utiliser des machines virtuelles, des proxys résidentiels ou des navigateurs multi-comptes",
  vf = () => "Usare più di un account per dipingere, oppure usare macchine virtuali, proxy residenziali o browser multi-account",
  bf = () => "複数のアカウントを使ってピクセルを塗る、または仮想マシン、住宅プロキシ、マルチアカウントブラウザを使用する",
  Ef = () => "Malowanie pikseli na więcej niż jednym koncie lub przy użyciu maszyn wirtualnych, proxy residential lub przeglądarek multi-kontowych",
  Of = () => "Рисование с более чем одного аккаунта или с использованием виртуальных машин, резидентных прокси или мультиаккаунт-браузеров",
  Tf = () => "Малювання з більш ніж одного акаунта або з використанням віртуальних машин, резидентних проксі чи мультиакаунт-браузерів",
  kf = () => "Vẽ pixel bằng nhiều hơn một tài khoản hoặc bằng máy ảo, proxy dân cư hoặc trình duyệt đa tài khoản",
  qf = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? hf() : e === "pt" ? pf() : e === "ch" ? mf() : e === "de" ? gf() : e === "es" ? wf() : e === "fr" ? yf() : e === "it" ? vf() : e === "jp" ? bf() : e === "pl" ? Ef() : e === "ru" ? Of() : e === "uk" ? Tf() : kf()
  },
  Af = r => `You can change your name again in ${r.days} days`,
  Sf = r => `Você pode alterar seu nome novamente em ${r.days} dias.`,
  Nf = r => `你可以在 ${r.days} 天后再次修改名称`,
  If = r => `Du kannst deinen Namen in ${r.days} Tagen erneut ändern`,
  Rf = r => `Podrás cambiar tu nombre de nuevo en ${r.days} días`,
  Df = r => `Vous pourrez changer votre nom à nouveau dans ${r.days} jours`,
  Pf = r => `Potrai cambiare di nuovo il tuo nome tra ${r.days} giorni.`,
  xf = r => `${r.days}日後に再び名前を変更できます。`,
  jf = r => `Następną zmianę nazwy możesz wykonać za ${r.days} dni`,
  zf = r => `Вы сможете изменить имя снова через ${r.days} дн.`,
  Lf = r => `Ви зможете змінити імʼя знову через ${r.days} днів`,
  Uf = r => `Bạn có thể đổi tên lại sau ${r.days} ngày`,
  Cf = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Af(r) : e === "pt" ? Sf(r) : e === "ch" ? Nf(r) : e === "de" ? If(r) : e === "es" ? Rf(r) : e === "fr" ? Df(r) : e === "it" ? Pf(r) : e === "jp" ? xf(r) : e === "pl" ? jf(r) : e === "ru" ? zf(r) : e === "uk" ? Lf(r) : Uf(r)
  },
  Mf = () => "No internet access or the servers are offline. Try again later.",
  Bf = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Kf = () => "没有网络连接或服务器已离线。请稍后重试。",
  $f = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Ff = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Hf = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Gf = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Vf = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Wf = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Yf = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Jf = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  Qf = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  Xf = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Mf() : e === "pt" ? Bf() : e === "ch" ? Kf() : e === "de" ? $f() : e === "es" ? Ff() : e === "fr" ? Hf() : e === "it" ? Gf() : e === "jp" ? Vf() : e === "pl" ? Wf() : e === "ru" ? Yf() : e === "uk" ? Jf() : Qf()
  },
  Zf = () => "You are not allowed to verify a phone number. Try refreshing the page",
  eh = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  th = () => "您无权验证电话号码。请尝试刷新页面。",
  rh = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  nh = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  ah = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  ih = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  sh = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  oh = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  ch = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  uh = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  lh = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  _h = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Zf() : e === "pt" ? eh() : e === "ch" ? th() : e === "de" ? rh() : e === "es" ? nh() : e === "fr" ? ah() : e === "it" ? ih() : e === "jp" ? sh() : e === "pl" ? oh() : e === "ru" ? ch() : e === "uk" ? uh() : lh()
  },
  dh = () => "Not enough Droplets",
  fh = () => "Droplets insuficientes",
  hh = () => "Droplets 数量不足",
  ph = () => "Nicht genug Droplets",
  mh = () => "No tienes suficientes Droplets",
  gh = () => "Pas assez de Droplets",
  wh = () => "Droplets insufficienti",
  yh = () => "Dropletsが足りません。",
  vh = () => "Za mało Droplets",
  bh = () => "Недостаточно Droplets",
  Eh = () => "Недостатньо Droplets",
  Oh = () => "Không đủ Droplets",
  pt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? dh() : e === "pt" ? fh() : e === "ch" ? hh() : e === "de" ? ph() : e === "es" ? mh() : e === "fr" ? gh() : e === "it" ? wh() : e === "jp" ? yh() : e === "pl" ? vh() : e === "ru" ? bh() : e === "uk" ? Eh() : Oh()
  },
  Th = () => "Operation not allowed. Maybe you have too many favorite locations.",
  kh = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  qh = () => "操作不被允许。你的收藏位置可能过多。",
  Ah = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  Sh = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  Nh = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  Ih = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  Rh = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  Dh = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  Ph = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  xh = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  jh = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  zh = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Th() : e === "pt" ? kh() : e === "ch" ? qh() : e === "de" ? Ah() : e === "es" ? Sh() : e === "fr" ? Nh() : e === "it" ? Ih() : e === "jp" ? Rh() : e === "pl" ? Dh() : e === "ru" ? Ph() : e === "uk" ? xh() : jh()
  },
  Lh = r => `Not enough charges: you have ${r.charges} but this overlay needs ${r.pixels}.`,
  Uh = r => `Cargas insuficientes: você tem ${r.charges}, mas esta sobreposição precisa de ${r.pixels}.`,
  Ch = r => `充能不足：你有 ${r.charges}，但此叠加层需要 ${r.pixels}。`,
  Mh = r => `Nicht genügend Ladungen: Du hast ${r.charges}, aber dieses Overlay benötigt ${r.pixels}.`,
  Bh = r => `Cargas insuficientes: tienes ${r.charges} pero esta superposición necesita ${r.pixels}.`,
  Kh = r => `Charges insuffisantes : vous avez ${r.charges} mais ce calque nécessite ${r.pixels}.`,
  $h = r => `Cariche insufficienti: ne hai ${r.charges} ma questo overlay ne richiede ${r.pixels}.`,
  Fh = r => `チャージが足りません：現在 ${r.charges} ですが、このオーバーレイには ${r.pixels} 必要です。`,
  Hh = r => `Za mało ładunków: masz ${r.charges}, ale ta nakładka wymaga ${r.pixels}.`,
  Gh = r => `Недостаточно зарядов: у вас ${r.charges}, но для этого слоя нужно ${r.pixels}.`,
  Vh = r => `Недостатньо зарядів: у вас ${r.charges}, але для цього шару потрібно ${r.pixels}.`,
  Wh = r => `Không đủ lượt sơn: bạn có ${r.charges} nhưng lớp phủ này cần ${r.pixels}.`,
  Yh = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Lh(r) : e === "pt" ? Uh(r) : e === "ch" ? Ch(r) : e === "de" ? Mh(r) : e === "es" ? Bh(r) : e === "fr" ? Kh(r) : e === "it" ? $h(r) : e === "jp" ? Fh(r) : e === "pl" ? Hh(r) : e === "ru" ? Gh(r) : e === "uk" ? Vh(r) : Wh(r)
  },
  Jh = () => "You are trying to paint with a color you do not own",
  Qh = () => "Você está tentando pintar com uma cor que não possui",
  Xh = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  Zh = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  ep = () => "Estás intentando pintar con un color que no posees",
  tp = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  rp = () => "Stai cercando di dipingere con un colore che non possiedi",
  np = () => "所持していない色で塗ろうとしています。",
  ap = () => "Próbujesz malować kolorem, którego nie posiadasz",
  ip = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  sp = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  op = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  mt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Jh() : e === "pt" ? Qh() : e === "ch" ? Xh() : e === "de" ? Zh() : e === "es" ? ep() : e === "fr" ? tp() : e === "it" ? rp() : e === "jp" ? np() : e === "pl" ? ap() : e === "ru" ? ip() : e === "uk" ? sp() : op()
  },
  cp = () => "Phone already used",
  up = () => "Telefone já usado",
  lp = () => "电话号码已被使用",
  _p = () => "Telefonnummer bereits verwendet",
  dp = () => "Teléfono ya utilizado",
  fp = () => "Téléphone déjà utilisé",
  hp = () => "Telefono già utilizzato",
  pp = () => "この電話番号は既に使用されています。",
  mp = () => "Numer telefonu jest już używany",
  gp = () => "Телефон уже используется",
  wp = () => "Номер телефону вже використовується",
  yp = () => "Số điện thoại đã được sử dụng",
  vp = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? cp() : e === "pt" ? up() : e === "ch" ? lp() : e === "de" ? _p() : e === "es" ? dp() : e === "fr" ? fp() : e === "it" ? hp() : e === "jp" ? pp() : e === "pl" ? mp() : e === "ru" ? gp() : e === "uk" ? wp() : yp()
  },
  bp = () => "This phone number's region is not supported",
  Ep = () => "A região deste número de telefone não é suportada",
  Op = () => "此电话号码的地区不受支持",
  Tp = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  kp = () => "La región de este número de teléfono no es compatible",
  qp = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  Ap = () => "La regione di questo numero di telefono non è supportata",
  Sp = () => "この電話番号の地域はサポートされていません",
  Np = () => "Region tego numeru telefonu nie jest obsługiwany",
  Ip = () => "Регион этого номера телефона не поддерживается",
  Rp = () => "Регіон цього номера телефону не підтримується",
  Dp = () => "Vùng của số điện thoại này không được hỗ trợ",
  Pp = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? bp() : e === "pt" ? Ep() : e === "ch" ? Op() : e === "de" ? Tp() : e === "es" ? kp() : e === "fr" ? qp() : e === "it" ? Ap() : e === "jp" ? Sp() : e === "pl" ? Np() : e === "ru" ? Ip() : e === "uk" ? Rp() : Dp()
  },
  xp = () => "Refresh your page to get the latest update",
  jp = () => "Recarregue sua página para obter as últimas atualizações",
  zp = () => "刷新页面以获取最新更新",
  Lp = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  Up = () => "Actualiza la página para obtener la última versión",
  Cp = () => "Actualisez la page pour obtenir les dernières mises à jour",
  Mp = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  Bp = () => "最新の状態にするにはページを再読み込みしてください。",
  Kp = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  $p = () => "Обновите страницу, чтобы получить последние изменения",
  Fp = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Hp = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  gt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? xp() : e === "pt" ? jp() : e === "ch" ? zp() : e === "de" ? Lp() : e === "es" ? Up() : e === "fr" ? Cp() : e === "it" ? Mp() : e === "jp" ? Bp() : e === "pl" ? Kp() : e === "ru" ? $p() : e === "uk" ? Fp() : Hp()
  },
  Gp = () => "Report failed. Please try again later",
  Vp = () => "Denúncia falhou. Por favor, tente novamente mais tarde",
  Wp = () => "举报失败，请稍后再试",
  Yp = () => "Meldung fehlgeschlagen. Bitte versuche es später erneut",
  Jp = () => "Error al enviar el reporte. Inténtalo de nuevo más tarde",
  Qp = () => "Échec du signalement. Veuillez réessayer plus tard",
  Xp = () => "Segnalazione fallita. Riprova più tardi",
  Zp = () => "通報に失敗しました。時間をおいて再度お試しください",
  em = () => "Zgłoszenie nie powiodło się. Spróbuj ponownie później",
  tm = () => "Не удалось отправить жалобу. Попробуйте позже.",
  rm = () => "Не вдалося відправити скаргу. Спробуйте пізніше.",
  nm = () => "Báo cáo thất bại. Vui lòng thử lại sau",
  am = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Gp() : e === "pt" ? Vp() : e === "ch" ? Wp() : e === "de" ? Yp() : e === "es" ? Jp() : e === "fr" ? Qp() : e === "it" ? Xp() : e === "jp" ? Zp() : e === "pl" ? em() : e === "ru" ? tm() : e === "uk" ? rm() : nm()
  },
  im = () => "The request timed out. Please try again.",
  sm = () => "A solicitação expirou. Por favor, tente novamente.",
  om = () => "请求超时。请重试。",
  cm = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  um = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  lm = () => "La requête a expiré. Veuillez réessayer.",
  _m = () => "La richiesta è scaduta. Riprova.",
  dm = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  fm = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  hm = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  pm = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  mm = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  gm = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? im() : e === "pt" ? sm() : e === "ch" ? om() : e === "de" ? cm() : e === "es" ? um() : e === "fr" ? lm() : e === "it" ? _m() : e === "jp" ? dm() : e === "pl" ? fm() : e === "ru" ? hm() : e === "uk" ? pm() : mm()
  },
  wm = () => "No modifications found for the selected pixels.",
  ym = () => "Nenhuma modificação encontrada para os pixels selecionados.",
  vm = () => "未找到所选像素的修改记录。",
  bm = () => "Keine Änderungen für die ausgewählten Pixel gefunden.",
  Em = () => "No se encontraron modificaciones para los píxeles seleccionados.",
  Om = () => "Aucune modification trouvée pour les pixels sélectionnés.",
  Tm = () => "Nessuna modifica trovata per i pixel selezionati.",
  km = () => "選択したピクセルの変更が見つかりませんでした。",
  qm = () => "Nie znaleziono modyfikacji dla wybranych pikseli.",
  Am = () => "Модификации для выбранных пикселей не найдены.",
  Sm = () => "Модифікації для вибраних пікселів не знайдено.",
  Nm = () => "Không tìm thấy thay đổi cho các pixel đã chọn.",
  Im = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? wm() : e === "pt" ? ym() : e === "ch" ? vm() : e === "de" ? bm() : e === "es" ? Em() : e === "fr" ? Om() : e === "it" ? Tm() : e === "jp" ? km() : e === "pl" ? qm() : e === "ru" ? Am() : e === "uk" ? Sm() : Nm()
  },
  Rm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Dm = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  Pm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  xm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  jm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  zm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Lm = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  Um = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Cm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Mm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Bm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Km = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  $m = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Rm() : e === "pt" ? Dm() : e === "ch" ? Pm() : e === "de" ? xm() : e === "es" ? jm() : e === "fr" ? zm() : e === "it" ? Lm() : e === "jp" ? Um() : e === "pl" ? Cm() : e === "ru" ? Mm() : e === "uk" ? Bm() : Km()
  },
  Fm = () => "The service is currently unavailable. Please try again later.",
  Hm = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  Gm = () => "服务当前不可用。请稍后再试。",
  Vm = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  Wm = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  Ym = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  Jm = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  Qm = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  Xm = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  Zm = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  eg = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  tg = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  rg = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Fm() : e === "pt" ? Hm() : e === "ch" ? Gm() : e === "de" ? Vm() : e === "es" ? Wm() : e === "fr" ? Ym() : e === "it" ? Jm() : e === "jp" ? Qm() : e === "pl" ? Xm() : e === "ru" ? Zm() : e === "uk" ? eg() : tg()
  },
  ng = () => "Too many attempts. Please try again later",
  ag = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  ig = () => "尝试次数过多，请稍后再试",
  sg = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  og = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  cg = () => "Trop de tentatives. Veuillez réessayer plus tard",
  ug = () => "Troppi tentativi. Riprova più tardi.",
  lg = () => "試行回数が多すぎます。後で再度お試しください。",
  _g = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  dg = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  fg = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  hg = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  wt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ng() : e === "pt" ? ag() : e === "ch" ? ig() : e === "de" ? sg() : e === "es" ? og() : e === "fr" ? cg() : e === "it" ? ug() : e === "jp" ? lg() : e === "pl" ? _g() : e === "ru" ? dg() : e === "uk" ? fg() : hg()
  },
  pg = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  mg = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  gg = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  wg = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  yg = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  vg = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  bg = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  Eg = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  Og = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  Tg = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  kg = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  qg = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  Ag = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? pg() : e === "pt" ? mg() : e === "ch" ? gg() : e === "de" ? wg() : e === "es" ? yg() : e === "fr" ? vg() : e === "it" ? bg() : e === "jp" ? Eg() : e === "pl" ? Og() : e === "ru" ? Tg() : e === "uk" ? kg() : qg()
  },
  Sg = () => "The typed username does not match your current username.",
  Ng = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Ig = () => "输入的用户名与当前用户名不匹配。",
  Rg = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Dg = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Pg = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  xg = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  jg = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  zg = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Lg = () => "Введённое имя пользователя не совпадает с текущим.",
  Ug = () => "Введене імʼя користувача не збігається з поточним.",
  Cg = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  Mg = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Sg() : e === "pt" ? Ng() : e === "ch" ? Ig() : e === "de" ? Rg() : e === "es" ? Dg() : e === "fr" ? Pg() : e === "it" ? xg() : e === "jp" ? jg() : e === "pl" ? zg() : e === "ru" ? Lg() : e === "uk" ? Ug() : Cg()
  },
  Bg = () => "Unexpected server error. Try again later.",
  Kg = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  $g = () => "服务器出现意外错误。请稍后再试。",
  Fg = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  Hg = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Gg = () => "Erreur serveur inattendue. Réessayez plus tard.",
  Vg = () => "Errore imprevisto del server. Riprova più tardi.",
  Wg = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  Yg = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  Jg = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  Qg = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  Xg = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  o = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Bg() : e === "pt" ? Kg() : e === "ch" ? $g() : e === "de" ? Fg() : e === "es" ? Hg() : e === "fr" ? Gg() : e === "it" ? Vg() : e === "jp" ? Wg() : e === "pl" ? Yg() : e === "ru" ? Jg() : e === "uk" ? Qg() : Xg()
  },
  Zg = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  ew = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  tw = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  rw = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  nw = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  aw = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  iw = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  sw = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  ow = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  cw = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  uw = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  lw = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  _w = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Zg() : e === "pt" ? ew() : e === "ch" ? tw() : e === "de" ? rw() : e === "es" ? nw() : e === "fr" ? aw() : e === "it" ? iw() : e === "jp" ? sw() : e === "pl" ? ow() : e === "ru" ? cw() : e === "uk" ? uw() : lw()
  },
  dw = () => "VPN or proxy detected. Please disable your VPN and try again.",
  fw = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  hw = () => "检测到VPN或代理。请关闭VPN后重试。",
  pw = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  mw = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  gw = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  ww = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  yw = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  vw = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  bw = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  Ew = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  Ow = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  Tw = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? dw() : e === "pt" ? fw() : e === "ch" ? hw() : e === "de" ? pw() : e === "es" ? mw() : e === "fr" ? gw() : e === "it" ? ww() : e === "jp" ? yw() : e === "pl" ? vw() : e === "ru" ? bw() : e === "uk" ? Ew() : Ow()
  },
  kw = () => "Failed to load WebAssembly module. Try to use another browser.",
  qw = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  Aw = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  Sw = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  Nw = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  Iw = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  Rw = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  Dw = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  Pw = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  xw = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  jw = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  zw = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  Lw = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? kw() : e === "pt" ? qw() : e === "ch" ? Aw() : e === "de" ? Sw() : e === "es" ? Nw() : e === "fr" ? Iw() : e === "it" ? Rw() : e === "jp" ? Dw() : e === "pl" ? Pw() : e === "ru" ? xw() : e === "uk" ? jw() : zw()
  },
  Uw = () => "You already have this item. Please refresh the page.",
  Cw = () => "Você já possui este item. Atualize a página.",
  Mw = () => "你已经拥有此物品。请刷新页面。",
  Bw = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  Kw = () => "Ya tienes este ítem. Actualiza la página.",
  $w = () => "Vous possédez déjà cet objet. Actualisez la page.",
  Fw = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  Hw = () => "このアイテムはすでに所持しています。ページを更新してください。",
  Gw = () => "Masz już ten przedmiot. Odśwież stronę.",
  Vw = () => "У вас уже есть этот предмет. Обновите страницу.",
  Ww = () => "У вас уже є цей предмет. Оновіть сторінку.",
  Yw = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  Mt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Uw() : e === "pt" ? Cw() : e === "ch" ? Mw() : e === "de" ? Bw() : e === "es" ? Kw() : e === "fr" ? $w() : e === "it" ? Fw() : e === "jp" ? Hw() : e === "pl" ? Gw() : e === "ru" ? Vw() : e === "uk" ? Ww() : Yw()
  },
  Jw = () => "You are already in an alliance",
  Qw = () => "Você já está em uma aliança",
  Xw = () => "你已经在一个联盟中",
  Zw = () => "Du bist bereits in einer Allianz",
  ey = () => "Ya estás en una alianza",
  ty = () => "Vous êtes déjà dans une alliance",
  ry = () => "Sei già in un'alleanza",
  ny = () => "すでにアライアンスに所属しています。",
  ay = () => "Jesteś już w sojuszu",
  iy = () => "Вы уже состоите в альянсе",
  sy = () => "Ви вже перебуваєте в альянсі",
  oy = () => "Bạn đã ở trong một liên minh",
  cy = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Jw() : e === "pt" ? Qw() : e === "ch" ? Xw() : e === "de" ? Zw() : e === "es" ? ey() : e === "fr" ? ty() : e === "it" ? ry() : e === "jp" ? ny() : e === "pl" ? ay() : e === "ru" ? iy() : e === "uk" ? sy() : oy()
  },
  uy = () => "You are not allowed to do this",
  ly = () => "Você não tem permissão para fazer isso",
  _y = () => "你无权执行此操作",
  dy = () => "Du bist dazu nicht berechtigt",
  fy = () => "No tienes permiso para hacer esto",
  hy = () => "Vous n’êtes pas autorisé à faire cela",
  py = () => "Non hai il permesso di farlo",
  my = () => "この操作を行う権限がありません。",
  gy = () => "Nie masz uprawnień, aby to zrobić",
  wy = () => "У вас нет прав для этого действия",
  yy = () => "Ви не маєте права це робити",
  vy = () => "Bạn không có quyền làm việc này",
  O = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? uy() : e === "pt" ? ly() : e === "ch" ? _y() : e === "de" ? dy() : e === "es" ? fy() : e === "fr" ? hy() : e === "it" ? py() : e === "jp" ? my() : e === "pl" ? gy() : e === "ru" ? wy() : e === "uk" ? yy() : vy()
  },
  by = () => "You do not have enough Droplets to buy this item.",
  Ey = () => "Você não tem Droplets suficientes para comprar este item.",
  Oy = () => "你的 Droplets 不足，无法购买此物品。",
  Ty = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  ky = () => "No tienes suficientes Droplets para comprar este ítem.",
  qy = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  Ay = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  Sy = () => "このアイテムを購入するのに十分なDropletsがありません。",
  Ny = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  Iy = () => "У вас недостаточно Droplets для покупки этого предмета.",
  Ry = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  Dy = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  Bt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? by() : e === "pt" ? Ey() : e === "ch" ? Oy() : e === "de" ? Ty() : e === "es" ? ky() : e === "fr" ? qy() : e === "it" ? Ay() : e === "jp" ? Sy() : e === "pl" ? Ny() : e === "ru" ? Iy() : e === "uk" ? Ry() : Dy()
  },
  Py = () => "You need to be logged in to paint",
  xy = () => "Você precisa estar conectado para pintar",
  jy = () => "你需要登录才能进行绘制",
  zy = () => "Du musst eingeloggt sein, um zu malen",
  Ly = () => "Debes iniciar sesión para pintar",
  Uy = () => "Vous devez être connecté pour peindre",
  Cy = () => "Devi avere effettuato l'accesso per dipingere",
  My = () => "ペイントするにはログインが必要です。",
  By = () => "Musisz być zalogowany, aby malować",
  Ky = () => "Чтобы рисовать, нужно войти в аккаунт",
  $y = () => "Щоб малювати, необхідно увійти в акаунт",
  Fy = () => "Bạn cần đăng nhập để tô",
  yt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Py() : e === "pt" ? xy() : e === "ch" ? jy() : e === "de" ? zy() : e === "es" ? Ly() : e === "fr" ? Uy() : e === "it" ? Cy() : e === "jp" ? My() : e === "pl" ? By() : e === "ru" ? Ky() : e === "uk" ? $y() : Fy()
  },
  Hy = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Gy = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  Vy = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  Wy = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  Yy = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  Jy = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  Qy = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  Xy = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  Zy = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  ev = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  tv = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  rv = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  nv = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Hy() : e === "pt" ? Gy() : e === "ch" ? Vy() : e === "de" ? Wy() : e === "es" ? Yy() : e === "fr" ? Jy() : e === "it" ? Qy() : e === "jp" ? Xy() : e === "pl" ? Zy() : e === "ru" ? ev() : e === "uk" ? tv() : rv()
  },
  av = r => `Your account has been suspended out until ${r.until}`,
  iv = r => `A sua conta está suspensa até ${r.until}`,
  sv = r => `你的账号已被暂停至 ${r.until}`,
  ov = r => `Dein Konto ist gesperrt bis ${r.until}`,
  cv = r => `Tu cuenta ha sido suspendida hasta ${r.until}`,
  uv = r => `Votre compte est suspendu jusqu’au ${r.until}`,
  lv = r => `Il tuo account è sospeso fino al ${r.until}`,
  _v = r => `あなたのアカウントは${r.until}まで一時停止されています。`,
  dv = r => `Twoje konto zostało zawieszone do ${r.until}`,
  fv = r => `Ваш аккаунт заблокирован до ${r.until}`,
  hv = r => `Ваш акаунт призупинено до ${r.until}`,
  pv = r => `Tài khoản của bạn đã bị đình chỉ đến ${r.until}`,
  vt = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? av(r) : e === "pt" ? iv(r) : e === "ch" ? sv(r) : e === "de" ? ov(r) : e === "es" ? cv(r) : e === "fr" ? uv(r) : e === "it" ? lv(r) : e === "jp" ? _v(r) : e === "pl" ? dv(r) : e === "ru" ? fv(r) : e === "uk" ? hv(r) : pv(r)
  },
  mv = () => "A correction is already pending for this ticket.",
  gv = () => "Já existe uma correção pendente para este ticket.",
  wv = () => "此工单已存在待审核的更正请求。",
  yv = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  vv = () => "Ya hay una corrección pendiente para este ticket.",
  bv = () => "Une correction est déjà en attente pour ce ticket.",
  Ev = () => "Una correzione è già in sospeso per questo ticket.",
  Ov = () => "このチケットには未処理の修正があります。",
  Tv = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  kv = () => "Для этого тикета уже есть запрос на исправление.",
  qv = () => "Для цього тікета вже є запит на перевірці.",
  Av = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  Sv = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? mv() : e === "pt" ? gv() : e === "ch" ? wv() : e === "de" ? yv() : e === "es" ? vv() : e === "fr" ? bv() : e === "it" ? Ev() : e === "jp" ? Ov() : e === "pl" ? Tv() : e === "ru" ? kv() : e === "uk" ? qv() : Av()
  },
  Nv = () => "You cannot review your own correction request.",
  Iv = () => "Você não pode revisar sua própria solicitação de correção.",
  Rv = () => "不能审核自己提交的更正请求。",
  Dv = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  Pv = () => "No puedes revisar tu propia solicitud de corrección.",
  xv = () => "Tu ne peux pas examiner ta propre demande de correction.",
  jv = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  zv = () => "自分のリクエストはレビューできません。",
  Lv = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  Uv = () => "Нельзя рассматривать собственный запрос.",
  Cv = () => "Не можна перевіряти власний запит.",
  Mv = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  Bv = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Nv() : e === "pt" ? Iv() : e === "ch" ? Rv() : e === "de" ? Dv() : e === "es" ? Pv() : e === "fr" ? xv() : e === "it" ? jv() : e === "jp" ? zv() : e === "pl" ? Lv() : e === "ru" ? Uv() : e === "uk" ? Cv() : Mv()
  },
  Kv = () => "This correction has already been reviewed.",
  $v = () => "Esta correção já foi revisada.",
  Fv = () => "此请求已被审核。",
  Hv = () => "Diese Korrektur wurde bereits geprüft.",
  Gv = () => "Esta corrección ya ha sido revisada.",
  Vv = () => "Cette correction a déjà été examinée.",
  Wv = () => "Questa correzione è già stata revisionata.",
  Yv = () => "このリクエストはすでにレビュー済みです。",
  Jv = () => "Ta prośba została już rozpatrzona.",
  Qv = () => "Этот запрос уже рассмотрен.",
  Xv = () => "Цей запит вже перевірено.",
  Zv = () => "Yêu cầu này đã được duyệt.",
  eb = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Kv() : e === "pt" ? $v() : e === "ch" ? Fv() : e === "de" ? Hv() : e === "es" ? Gv() : e === "fr" ? Vv() : e === "it" ? Wv() : e === "jp" ? Yv() : e === "pl" ? Jv() : e === "ru" ? Qv() : e === "uk" ? Xv() : Zv()
  },
  tb = () => "Alliance not found",
  rb = () => "Aliança não encontrada",
  nb = () => "未找到联盟",
  ab = () => "Allianz nicht gefunden",
  ib = () => "Alianza no encontrada",
  sb = () => "Alliance introuvable",
  ob = () => "Alleanza non trovata",
  cb = () => "アライアンスが見つかりません",
  ub = () => "Nie znaleziono sojuszu",
  lb = () => "Альянс не найден",
  _b = () => "Альянс не знайдено",
  db = () => "Không tìm thấy liên minh",
  fb = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? tb() : e === "pt" ? rb() : e === "ch" ? nb() : e === "de" ? ab() : e === "es" ? ib() : e === "fr" ? sb() : e === "it" ? ob() : e === "jp" ? cb() : e === "pl" ? ub() : e === "ru" ? lb() : e === "uk" ? _b() : db()
  },
  hb = () => "Invalid ID",
  pb = () => "ID inválido",
  mb = () => "无效的 ID",
  gb = () => "Ungültige ID",
  wb = () => "ID inválido",
  yb = () => "ID invalide",
  vb = () => "ID non valido",
  bb = () => "無効なIDです",
  Eb = () => "Nieprawidłowe ID",
  Ob = () => "Неверный ID",
  Tb = () => "Недійсний ID",
  kb = () => "ID không hợp lệ",
  qb = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? hb() : e === "pt" ? pb() : e === "ch" ? mb() : e === "de" ? gb() : e === "es" ? wb() : e === "fr" ? yb() : e === "it" ? vb() : e === "jp" ? bb() : e === "pl" ? Eb() : e === "ru" ? Ob() : e === "uk" ? Tb() : kb()
  },
  Ab = () => "This alliance already has the maximum number of active invites",
  Sb = () => "Esta aliança já tem o número máximo de convites ativos",
  Nb = () => "该联盟的有效邀请数量已达上限",
  Ib = () => "Diese Allianz hat bereits die maximale Anzahl aktiver Einladungen",
  Rb = () => "Esta alianza ya tiene el número máximo de invitaciones activas",
  Db = () => "Cette alliance a déjà le nombre maximal d'invitations actives",
  Pb = () => "Questa alleanza ha già il numero massimo di inviti attivi",
  xb = () => "このアライアンスは有効な招待の上限に達しています",
  jb = () => "Ten sojusz ma już maksymalną liczbę aktywnych zaproszeń",
  zb = () => "У этого альянса уже максимальное количество активных приглашений",
  Lb = () => "Цей альянс уже має максимальну кількість активних запрошень",
  Ub = () => "Liên minh này đã đạt số lời mời đang hoạt động tối đa",
  Cb = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ab() : e === "pt" ? Sb() : e === "ch" ? Nb() : e === "de" ? Ib() : e === "es" ? Rb() : e === "fr" ? Db() : e === "it" ? Pb() : e === "jp" ? xb() : e === "pl" ? jb() : e === "ru" ? zb() : e === "uk" ? Lb() : Ub()
  },
  Mb = () => "Enter a valid discord.gg or discord.com/invite link",
  Bb = () => "Informe um link válido de discord.gg ou discord.com/invite",
  Kb = () => "请输入有效的 discord.gg 或 discord.com/invite 链接",
  $b = () => "Gib einen gültigen discord.gg- oder discord.com/invite-Link ein",
  Fb = () => "Introduce un enlace válido de discord.gg o discord.com/invite",
  Hb = () => "Saisissez un lien discord.gg ou discord.com/invite valide",
  Gb = () => "Inserisci un link discord.gg o discord.com/invite valido",
  Vb = () => "有効な discord.gg または discord.com/invite のリンクを入力してください",
  Wb = () => "Podaj prawidłowy link discord.gg lub discord.com/invite",
  Yb = () => "Введите корректную ссылку discord.gg или discord.com/invite",
  Jb = () => "Введіть дійсне посилання discord.gg або discord.com/invite",
  Qb = () => "Nhập liên kết discord.gg hoặc discord.com/invite hợp lệ",
  Xb = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Mb() : e === "pt" ? Bb() : e === "ch" ? Kb() : e === "de" ? $b() : e === "es" ? Fb() : e === "fr" ? Hb() : e === "it" ? Gb() : e === "jp" ? Vb() : e === "pl" ? Wb() : e === "ru" ? Yb() : e === "uk" ? Jb() : Qb()
  },
  Zb = () => "Enter a positive multiple of the conversion rate",
  eE = () => "Informe um múltiplo positivo da taxa de conversão",
  tE = () => "请输入兑换比例的正整数倍",
  rE = () => "Gib ein positives Vielfaches des Umrechnungskurses ein",
  nE = () => "Introduce un múltiplo positivo de la tasa de conversión",
  aE = () => "Saisissez un multiple positif du taux de conversion",
  iE = () => "Inserisci un multiplo positivo del tasso di conversione",
  sE = () => "変換レートの正の倍数を入力してください",
  oE = () => "Podaj dodatnią wielokrotność kursu wymiany",
  cE = () => "Введите положительное число, кратное курсу обмена",
  uE = () => "Введіть додатне число, кратне курсу обміну",
  lE = () => "Nhập một bội số dương của tỷ lệ quy đổi",
  _E = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Zb() : e === "pt" ? eE() : e === "ch" ? tE() : e === "de" ? rE() : e === "es" ? nE() : e === "fr" ? aE() : e === "it" ? iE() : e === "jp" ? sE() : e === "pl" ? oE() : e === "ru" ? cE() : e === "uk" ? uE() : lE()
  },
  dE = () => "The alliance does not have enough Coins",
  fE = () => "A aliança não tem moedas suficientes",
  hE = () => "该联盟的金币不足",
  pE = () => "Die Allianz hat nicht genug Coins",
  mE = () => "La alianza no tiene suficientes Monedas",
  gE = () => "L'alliance n'a pas assez de Coins",
  wE = () => "L'alleanza non ha abbastanza Monete",
  yE = () => "アライアンスのCoinsが不足しています",
  vE = () => "Sojusz nie ma wystarczającej liczby Monet",
  bE = () => "У альянса недостаточно Монет",
  EE = () => "Альянсу не вистачає монет",
  OE = () => "Liên minh không có đủ Coins",
  re = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? dE() : e === "pt" ? fE() : e === "ch" ? hE() : e === "de" ? pE() : e === "es" ? mE() : e === "fr" ? gE() : e === "it" ? wE() : e === "jp" ? yE() : e === "pl" ? vE() : e === "ru" ? bE() : e === "uk" ? EE() : OE()
  },
  TE = () => "This capability is already unlocked",
  kE = () => "Este recurso já está desbloqueado",
  qE = () => "此功能已解锁",
  AE = () => "Diese Funktion ist bereits freigeschaltet",
  SE = () => "Esta función ya está desbloqueada",
  NE = () => "Cette fonctionnalité est déjà débloquée",
  IE = () => "Questa funzione è già sbloccata",
  RE = () => "この機能はすでにロック解除されています",
  DE = () => "Ta funkcja jest już odblokowana",
  PE = () => "Эта возможность уже разблокирована",
  xE = () => "Цю можливість уже розблоковано",
  jE = () => "Tính năng này đã được mở khóa",
  bt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? TE() : e === "pt" ? kE() : e === "ch" ? qE() : e === "de" ? AE() : e === "es" ? SE() : e === "fr" ? NE() : e === "it" ? IE() : e === "jp" ? RE() : e === "pl" ? DE() : e === "ru" ? PE() : e === "uk" ? xE() : jE()
  },
  zE = () => "This alliance color requires Better Pallet",
  LE = () => "Esta cor da aliança requer a Paleta melhorada",
  UE = () => "此联盟颜色需要高级调色板",
  CE = () => "Diese Allianzfarbe erfordert Bessere Palette",
  ME = () => "Este color de alianza requiere la Paleta mejorada",
  BE = () => "Cette couleur d'alliance nécessite la Palette améliorée",
  KE = () => "Questo colore dell'alleanza richiede la Tavolozza migliorata",
  $E = () => "このアライアンスカラーにはパレット強化が必要です",
  FE = () => "Ten kolor sojuszu wymaga Ulepszonej palety",
  HE = () => "Этот цвет альянса требует Улучшенную палитру",
  GE = () => "Цей колір альянсу потребує Покращеної палітри",
  VE = () => "Màu liên minh này cần Bảng màu nâng cao",
  Et = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? zE() : e === "pt" ? LE() : e === "ch" ? UE() : e === "de" ? CE() : e === "es" ? ME() : e === "fr" ? BE() : e === "it" ? KE() : e === "jp" ? $E() : e === "pl" ? FE() : e === "ru" ? HE() : e === "uk" ? GE() : VE()
  },
  WE = () => "Enter a different alliance name",
  YE = () => "Informe um nome diferente",
  JE = () => "请输入不同的联盟名称",
  QE = () => "Gib einen anderen Allianznamen ein",
  XE = () => "Introduce un nombre de alianza diferente",
  ZE = () => "Saisissez un nom d'alliance différent",
  eO = () => "Inserisci un nome diverso per l'alleanza",
  tO = () => "別のアライアンス名を入力してください",
  rO = () => "Podaj inną nazwę sojuszu",
  nO = () => "Введите другое название альянса",
  aO = () => "Введіть іншу назву альянсу",
  iO = () => "Nhập một tên liên minh khác",
  sO = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? WE() : e === "pt" ? YE() : e === "ch" ? JE() : e === "de" ? QE() : e === "es" ? XE() : e === "fr" ? ZE() : e === "it" ? eO() : e === "jp" ? tO() : e === "pl" ? rO() : e === "ru" ? nO() : e === "uk" ? aO() : iO()
  },
  oO = () => "A description change credit is required",
  cO = () => "É necessário um crédito de alteração da descrição",
  uO = () => "需要一次描述修改额度",
  lO = () => "Dafür wird ein Guthaben für Beschreibungsänderungen benötigt",
  _O = () => "Se necesita un crédito de cambio de descripción",
  dO = () => "Un crédit de modification de la description est requis",
  fO = () => "Serve un credito di modifica della descrizione",
  hO = () => "説明変更クレジットが必要です",
  pO = () => "Wymagany jest kredyt zmiany opisu",
  mO = () => "Нужен кредит на изменение описания",
  gO = () => "Потрібен кредит на зміну опису",
  wO = () => "Cần một lượt đổi mô tả",
  yO = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? oO() : e === "pt" ? cO() : e === "ch" ? uO() : e === "de" ? lO() : e === "es" ? _O() : e === "fr" ? dO() : e === "it" ? fO() : e === "jp" ? hO() : e === "pl" ? pO() : e === "ru" ? mO() : e === "uk" ? gO() : wO()
  },
  vO = () => "The description contains unsupported Markdown or an unsafe link",
  bO = () => "A descrição contém Markdown não suportado ou um link inseguro",
  EO = () => "描述中包含不受支持的 Markdown 或不安全的链接",
  OO = () => "Die Beschreibung enthält nicht unterstütztes Markdown oder einen unsicheren Link",
  TO = () => "La descripción contiene Markdown no compatible o un enlace inseguro",
  kO = () => "La description contient du Markdown non pris en charge ou un lien non sécurisé",
  qO = () => "La descrizione contiene Markdown non supportato o un link non sicuro",
  AO = () => "説明に未対応のMarkdownまたは安全でないリンクが含まれています",
  SO = () => "Opis zawiera nieobsługiwany Markdown lub niebezpieczny link",
  NO = () => "Описание содержит неподдерживаемый Markdown или небезопасную ссылку",
  IO = () => "Опис містить непідтримуваний Markdown або небезпечне посилання",
  RO = () => "Mô tả chứa Markdown không được hỗ trợ hoặc liên kết không an toàn",
  DO = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? vO() : e === "pt" ? bO() : e === "ch" ? EO() : e === "de" ? OO() : e === "es" ? TO() : e === "fr" ? kO() : e === "it" ? qO() : e === "jp" ? AO() : e === "pl" ? SO() : e === "ru" ? NO() : e === "uk" ? IO() : RO()
  },
  PO = () => "This member already has access to the draft",
  xO = () => "Este membro já tem acesso ao rascunho",
  jO = () => "该成员已拥有此草稿的权限",
  zO = () => "Dieses Mitglied hat bereits Zugriff auf den Entwurf",
  LO = () => "Este miembro ya tiene acceso al borrador",
  UO = () => "Ce membre a déjà accès au brouillon",
  CO = () => "Questo membro ha già accesso alla bozza",
  MO = () => "このメンバーはすでにこの下書きにアクセスできます",
  BO = () => "Ten członek ma już dostęp do szkicu",
  KO = () => "У этого участника уже есть доступ к черновику",
  $O = () => "Цей учасник уже має доступ до чернетки",
  FO = () => "Thành viên này đã có quyền truy cập bản nháp",
  HO = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? PO() : e === "pt" ? xO() : e === "ch" ? jO() : e === "de" ? zO() : e === "es" ? LO() : e === "fr" ? UO() : e === "it" ? CO() : e === "jp" ? MO() : e === "pl" ? BO() : e === "ru" ? KO() : e === "uk" ? $O() : FO()
  },
  GO = () => "Unequip this version before removing it",
  VO = () => "Desequipe esta versão antes de removê-la",
  WO = () => "移除前请先卸下此版本",
  YO = () => "Lege diese Version ab, bevor du sie entfernst",
  JO = () => "Desequipa esta versión antes de eliminarla",
  QO = () => "Déséquipez cette version avant de la retirer",
  XO = () => "Disequipaggia questa versione prima di rimuoverla",
  ZO = () => "削除する前に、このバージョンの装備を解除してください",
  eT = () => "Zdejmij tę wersję przed jej usunięciem",
  tT = () => "Снимите эту версию перед удалением",
  rT = () => "Зніміть цю версію перед видаленням",
  nT = () => "Hãy gỡ trang bị phiên bản này trước khi xóa",
  aT = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? GO() : e === "pt" ? VO() : e === "ch" ? WO() : e === "de" ? YO() : e === "es" ? JO() : e === "fr" ? QO() : e === "it" ? XO() : e === "jp" ? ZO() : e === "pl" ? eT() : e === "ru" ? tT() : e === "uk" ? rT() : nT()
  },
  iT = () => "You are painting too quickly. Wait a moment and try again.",
  sT = () => "Você está pintando rápido demais. Espere um momento e tente novamente.",
  oT = () => "你的绘制速度过快。请稍后再试。",
  cT = () => "Du malst zu schnell. Warte einen Moment und versuche es erneut.",
  uT = () => "Estás pintando demasiado rápido. Espera un momento e inténtalo de nuevo.",
  lT = () => "Vous peignez trop vite. Attendez un instant et réessayez.",
  _T = () => "Stai dipingendo troppo in fretta. Attendi un momento e riprova.",
  dT = () => "ペイントが速すぎます。少し待ってから再度お試しください。",
  fT = () => "Malujesz zbyt szybko. Odczekaj chwilę i spróbuj ponownie.",
  hT = () => "Вы рисуете слишком быстро. Подождите немного и попробуйте снова.",
  pT = () => "Ви малюєте занадто швидко. Зачекайте трохи і спробуйте ще раз.",
  mT = () => "Bạn đang tô quá nhanh. Hãy chờ một lát rồi thử lại.",
  Ot = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? iT() : e === "pt" ? sT() : e === "ch" ? oT() : e === "de" ? cT() : e === "es" ? uT() : e === "fr" ? lT() : e === "it" ? _T() : e === "jp" ? dT() : e === "pl" ? fT() : e === "ru" ? hT() : e === "uk" ? pT() : mT()
  },
  gT = () => "The alliance headquarters is not unlocked yet",
  wT = () => "A sede da aliança ainda não foi desbloqueada",
  yT = () => "该联盟总部尚未解锁",
  vT = () => "Das Hauptquartier der Allianz ist noch nicht freigeschaltet",
  bT = () => "El cuartel general de la alianza aún no está desbloqueado",
  ET = () => "Le quartier général de l'alliance n'est pas encore débloqué",
  OT = () => "Il quartier generale dell'alleanza non è ancora sbloccato",
  TT = () => "アライアンスの拠点はまだ解放されていません",
  kT = () => "Siedziba sojuszu nie została jeszcze odblokowana",
  qT = () => "Штаб-квартира альянса ещё не разблокирована",
  AT = () => "Штаб-квартиру альянсу ще не розблоковано",
  ST = () => "Trụ sở của liên minh chưa được mở khóa",
  Tt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? gT() : e === "pt" ? wT() : e === "ch" ? yT() : e === "de" ? vT() : e === "es" ? bT() : e === "fr" ? ET() : e === "it" ? OT() : e === "jp" ? TT() : e === "pl" ? kT() : e === "ru" ? qT() : e === "uk" ? AT() : ST()
  },
  NT = () => "Choose the headquarters location on the map first",
  IT = () => "Escolha primeiro o local da sede no mapa",
  RT = () => "请先在地图上选择总部位置",
  DT = () => "Wähle zuerst den Standort des Hauptquartiers auf der Karte",
  PT = () => "Elige primero la ubicación del cuartel general en el mapa",
  xT = () => "Choisissez d'abord l'emplacement du quartier général sur la carte",
  jT = () => "Scegli prima la posizione del quartier generale sulla mappa",
  zT = () => "先にマップ上で拠点の場所を選択してください",
  LT = () => "Najpierw wybierz lokalizację siedziby na mapie",
  UT = () => "Сначала выберите место штаб-квартиры на карте",
  CT = () => "Спершу виберіть розташування штаб-квартири на карті",
  MT = () => "Hãy chọn vị trí trụ sở trên bản đồ trước",
  BT = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? NT() : e === "pt" ? IT() : e === "ch" ? RT() : e === "de" ? DT() : e === "es" ? PT() : e === "fr" ? xT() : e === "it" ? jT() : e === "jp" ? zT() : e === "pl" ? LT() : e === "ru" ? UT() : e === "uk" ? CT() : MT()
  },
  KT = () => "Moving the headquarters requires a Change Headquarters credit",
  $T = () => "Mover a sede requer um crédito de Mudar Sede",
  FT = () => "移动总部需要一张“迁移总部”凭证",
  HT = () => 'Zum Verlegen des Hauptquartiers wird ein Gutschein "Hauptquartier verlegen" benötigt',
  GT = () => "Mover el cuartel general requiere un crédito de Cambiar cuartel general",
  VT = () => "Déplacer le quartier général nécessite un crédit Changement de quartier général",
  WT = () => "Spostare il quartier generale richiede un credito Cambia quartier generale",
  YT = () => "拠点の移動には「拠点の変更」クレジットが必要です",
  JT = () => "Przeniesienie siedziby wymaga kredytu Zmiana Siedziby",
  QT = () => 'Для переноса штаб-квартиры нужен купон "Смена штаб-квартиры"',
  XT = () => 'Щоб перемістити штаб-квартиру, потрібен кредит "Змінити штаб-квартиру"',
  ZT = () => "Di chuyển trụ sở cần một lượt Đổi Trụ sở",
  ek = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? KT() : e === "pt" ? $T() : e === "ch" ? FT() : e === "de" ? HT() : e === "es" ? GT() : e === "fr" ? VT() : e === "it" ? WT() : e === "jp" ? YT() : e === "pl" ? JT() : e === "ru" ? QT() : e === "uk" ? XT() : ZT()
  },
  tk = () => "Headquarters sizes must be unlocked in order",
  rk = () => "Os tamanhos da sede devem ser desbloqueados em ordem",
  nk = () => "总部尺寸必须按顺序解锁",
  ak = () => "Die Hauptquartier-Größen müssen der Reihe nach freigeschaltet werden",
  ik = () => "Los tamaños del cuartel general deben desbloquearse en orden",
  sk = () => "Les tailles du quartier général doivent être débloquées dans l'ordre",
  ok = () => "Le dimensioni del quartier generale devono essere sbloccate in ordine",
  ck = () => "拠点のサイズは順番に解放する必要があります",
  uk = () => "Rozmiary siedziby trzeba odblokowywać po kolei",
  lk = () => "Размеры штаб-квартиры нужно разблокировать по порядку",
  _k = () => "Розміри штаб-квартири потрібно розблоковувати по порядку",
  dk = () => "Các kích thước trụ sở phải được mở khóa theo thứ tự",
  fk = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? tk() : e === "pt" ? rk() : e === "ch" ? nk() : e === "de" ? ak() : e === "es" ? ik() : e === "fr" ? sk() : e === "it" ? ok() : e === "jp" ? ck() : e === "pl" ? uk() : e === "ru" ? lk() : e === "uk" ? _k() : dk()
  },
  hk = () => "Headquarters upgrades must be unlocked in order",
  pk = () => "As melhorias da sede devem ser desbloqueadas em ordem",
  mk = () => "总部升级必须按顺序解锁",
  gk = () => "Die Hauptquartier-Verbesserungen müssen der Reihe nach freigeschaltet werden",
  wk = () => "Las mejoras del cuartel general deben desbloquearse en orden",
  yk = () => "Les améliorations du quartier général doivent être débloquées dans l'ordre",
  vk = () => "I miglioramenti del quartier generale devono essere sbloccati in ordine",
  bk = () => "拠点のアップグレードは順番に解放する必要があります",
  Ek = () => "Ulepszenia siedziby trzeba odblokowywać po kolei",
  Ok = () => "Улучшения штаб-квартиры нужно разблокировать по порядку",
  Tk = () => "Покращення штаб-квартири потрібно розблоковувати по порядку",
  kk = () => "Các nâng cấp trụ sở phải được mở khóa theo thứ tự",
  qk = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? hk() : e === "pt" ? pk() : e === "ch" ? mk() : e === "de" ? gk() : e === "es" ? wk() : e === "fr" ? yk() : e === "it" ? vk() : e === "jp" ? bk() : e === "pl" ? Ek() : e === "ru" ? Ok() : e === "uk" ? Tk() : kk()
  },
  Ak = () => "Not enough headquarters charges",
  Sk = () => "Cargas da sede insuficientes",
  Nk = () => "总部充能不足",
  Ik = () => "Nicht genügend Hauptquartier-Ladungen",
  Rk = () => "Cargas del cuartel general insuficientes",
  Dk = () => "Charges du quartier général insuffisantes",
  Pk = () => "Cariche del quartier generale insufficienti",
  xk = () => "拠点のチャージが足りません",
  jk = () => "Za mało ładunków siedziby",
  zk = () => "Недостаточно зарядов штаб-квартиры",
  Lk = () => "Недостатньо зарядів штаб-квартири",
  Uk = () => "Không đủ lượt tô của trụ sở",
  Ck = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ak() : e === "pt" ? Sk() : e === "ch" ? Nk() : e === "de" ? Ik() : e === "es" ? Rk() : e === "fr" ? Dk() : e === "it" ? Pk() : e === "jp" ? xk() : e === "pl" ? jk() : e === "ru" ? zk() : e === "uk" ? Lk() : Uk()
  },
  Mk = () => "Nothing changed on the canvas",
  Bk = () => "Nada mudou no canvas",
  Kk = () => "画布没有任何改动",
  $k = () => "Auf dem Canvas hat sich nichts geändert",
  Fk = () => "No cambió nada en el lienzo",
  Hk = () => "Rien n'a changé sur le canvas",
  Gk = () => "Nulla è cambiato sul canvas",
  Vk = () => "キャンバスに変更はありません",
  Wk = () => "Nic się nie zmieniło na płótnie",
  Yk = () => "На холсте ничего не изменилось",
  Jk = () => "На полотні нічого не змінилося",
  Qk = () => "Không có gì thay đổi trên bảng vẽ",
  Xk = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Mk() : e === "pt" ? Bk() : e === "ch" ? Kk() : e === "de" ? $k() : e === "es" ? Fk() : e === "fr" ? Hk() : e === "it" ? Gk() : e === "jp" ? Vk() : e === "pl" ? Wk() : e === "ru" ? Yk() : e === "uk" ? Jk() : Qk()
  },
  Zk = () => "The headquarters canvas is locked by moderation",
  eq = () => "O canvas da sede está bloqueado pela moderação",
  tq = () => "总部画布已被审核锁定",
  rq = () => "Der Hauptquartier-Canvas ist von der Moderation gesperrt",
  nq = () => "El lienzo del cuartel general está bloqueado por la moderación",
  aq = () => "Le canvas du quartier général est verrouillé par la modération",
  iq = () => "Il canvas del quartier generale è bloccato dalla moderazione",
  sq = () => "拠点のキャンバスはモデレーションによりロックされています",
  oq = () => "Płótno siedziby zostało zablokowane przez moderację",
  cq = () => "Холст штаб-квартиры заблокирован модерацией",
  uq = () => "Полотно штаб-квартири заблоковано модерацією",
  lq = () => "Bảng vẽ trụ sở đang bị kiểm duyệt khóa",
  _q = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Zk() : e === "pt" ? eq() : e === "ch" ? tq() : e === "de" ? rq() : e === "es" ? nq() : e === "fr" ? aq() : e === "it" ? iq() : e === "jp" ? sq() : e === "pl" ? oq() : e === "ru" ? cq() : e === "uk" ? uq() : lq()
  },
  dq = () => "You are timed out from the headquarters canvas",
  fq = () => "Você está suspenso do canvas da sede",
  hq = () => "你已被禁言，无法在总部画布上绘制",
  pq = () => "Du hast einen Timeout für den Hauptquartier-Canvas",
  mq = () => "Estás suspendido del lienzo del cuartel general",
  gq = () => "Vous êtes suspendu du canvas du quartier général",
  wq = () => "Sei sospeso dal canvas del quartier generale",
  yq = () => "あなたは拠点のキャンバスからタイムアウトされています",
  vq = () => "Masz zawieszony dostęp do płótna siedziby",
  bq = () => "Вам выдан тайм-аут на холсте штаб-квартиры",
  Eq = () => "У вас тайм-аут на полотні штаб-квартири",
  Oq = () => "Bạn đang bị tạm khóa khỏi bảng vẽ trụ sở",
  Tq = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? dq() : e === "pt" ? fq() : e === "ch" ? hq() : e === "de" ? pq() : e === "es" ? mq() : e === "fr" ? gq() : e === "it" ? wq() : e === "jp" ? yq() : e === "pl" ? vq() : e === "ru" ? bq() : e === "uk" ? Eq() : Oq()
  },
  kq = () => "A reason is required",
  qq = () => "Um motivo é obrigatório",
  Aq = () => "必须填写原因",
  Sq = () => "Ein Grund ist erforderlich",
  Nq = () => "Se requiere un motivo",
  Iq = () => "Un motif est obligatoire",
  Rq = () => "Il motivo è obbligatorio",
  Dq = () => "理由は必須です",
  Pq = () => "Powód jest wymagany",
  xq = () => "Нужно указать причину",
  jq = () => "Потрібно вказати причину",
  zq = () => "Cần nhập lý do",
  kt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? kq() : e === "pt" ? qq() : e === "ch" ? Aq() : e === "de" ? Sq() : e === "es" ? Nq() : e === "fr" ? Iq() : e === "it" ? Rq() : e === "jp" ? Dq() : e === "pl" ? Pq() : e === "ru" ? xq() : e === "uk" ? jq() : zq()
  },
  Lq = () => "This member already has an active headquarters timeout",
  Uq = () => "Este membro já tem uma suspensão ativa da sede",
  Cq = () => "该成员已有生效中的总部禁言",
  Mq = () => "Dieses Mitglied hat bereits einen aktiven Hauptquartier-Timeout",
  Bq = () => "Este miembro ya tiene una suspensión activa del cuartel general",
  Kq = () => "Ce membre a déjà une suspension active du quartier général",
  $q = () => "Questo membro ha già una sospensione attiva dal quartier generale",
  Fq = () => "このメンバーにはすでに有効な拠点のタイムアウトがあります",
  Hq = () => "Ten członek ma już aktywne zawieszenie w siedzibie",
  Gq = () => "У этого участника уже есть активный тайм-аут штаб-квартиры",
  Vq = () => "Цей учасник уже має активний тайм-аут штаб-квартири",
  Wq = () => "Thành viên này đã có một lệnh tạm khóa trụ sở đang hiệu lực",
  Yq = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Lq() : e === "pt" ? Uq() : e === "ch" ? Cq() : e === "de" ? Mq() : e === "es" ? Bq() : e === "fr" ? Kq() : e === "it" ? $q() : e === "jp" ? Fq() : e === "pl" ? Hq() : e === "ru" ? Gq() : e === "uk" ? Vq() : Wq()
  },
  Jq = () => "This timeout is no longer active",
  Qq = () => "Esta suspensão não está mais ativa",
  Xq = () => "该禁言已不再生效",
  Zq = () => "Dieser Timeout ist nicht mehr aktiv",
  eA = () => "Esta suspensión ya no está activa",
  tA = () => "Cette suspension n'est plus active",
  rA = () => "Questa sospensione non è più attiva",
  nA = () => "このタイムアウトはすでに有効ではありません",
  aA = () => "To zawieszenie nie jest już aktywne",
  iA = () => "Этот тайм-аут больше не активен",
  sA = () => "Цей тайм-аут більше не активний",
  oA = () => "Lệnh tạm khóa này không còn hiệu lực",
  cA = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Jq() : e === "pt" ? Qq() : e === "ch" ? Xq() : e === "de" ? Zq() : e === "es" ? eA() : e === "fr" ? tA() : e === "it" ? rA() : e === "jp" ? nA() : e === "pl" ? aA() : e === "ru" ? iA() : e === "uk" ? sA() : oA()
  },
  uA = () => "That user already belongs to an alliance",
  lA = () => "Esse usuário já pertence a uma aliança",
  _A = () => "该用户已属于其他联盟",
  dA = () => "Dieser Nutzer gehört bereits einer Allianz an",
  fA = () => "Ese usuario ya pertenece a una alianza",
  hA = () => "Cet utilisateur appartient déjà à une alliance",
  pA = () => "Questo utente appartiene già a un'alleanza",
  mA = () => "そのユーザーはすでに別のアライアンスに所属しています",
  gA = () => "Ten użytkownik należy już do sojuszu",
  wA = () => "Этот пользователь уже состоит в альянсе",
  yA = () => "Цей користувач уже належить до альянсу",
  vA = () => "Người dùng đó đã thuộc một liên minh",
  bA = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? uA() : e === "pt" ? lA() : e === "ch" ? _A() : e === "de" ? dA() : e === "es" ? fA() : e === "fr" ? hA() : e === "it" ? pA() : e === "jp" ? mA() : e === "pl" ? gA() : e === "ru" ? wA() : e === "uk" ? yA() : vA()
  },
  EA = () => "The alliance is not archived",
  OA = () => "A aliança não está arquivada",
  TA = () => "该联盟未被归档",
  kA = () => "Die Allianz ist nicht archiviert",
  qA = () => "La alianza no está archivada",
  AA = () => "L'alliance n'est pas archivée",
  SA = () => "L'alleanza non è archiviata",
  NA = () => "このアライアンスはアーカイブされていません",
  IA = () => "Sojusz nie jest zarchiwizowany",
  RA = () => "Альянс не находится в архиве",
  DA = () => "Альянс не архівований",
  PA = () => "Liên minh này chưa được lưu trữ",
  xA = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? EA() : e === "pt" ? OA() : e === "ch" ? TA() : e === "de" ? kA() : e === "es" ? qA() : e === "fr" ? AA() : e === "it" ? SA() : e === "jp" ? NA() : e === "pl" ? IA() : e === "ru" ? RA() : e === "uk" ? DA() : PA()
  },
  jA = () => "The selected headquarters pixels have too much history to change at once. Select fewer pixels.",
  zA = () => "Os pixels selecionados têm histórico demais para alterar de uma vez. Selecione menos pixels.",
  LA = () => "所选总部像素的历史记录过多，无法一次性修改。请减少选择的像素。",
  UA = () => "Die ausgewählten Hauptquartier-Pixel haben zu viel Verlauf, um sie auf einmal zu ändern. Wähle weniger Pixel aus.",
  CA = () => "Los píxeles seleccionados del cuartel general tienen demasiado historial para cambiarlos de una vez. Selecciona menos píxeles.",
  MA = () => "Les pixels sélectionnés du quartier général ont trop d'historique pour être modifiés en une seule fois. Sélectionnez moins de pixels.",
  BA = () => "I pixel selezionati del quartier generale hanno troppa cronologià per essere modificati in una volta. Seleziona meno pixel.",
  KA = () => "選択した拠点のピクセルは履歴が多すぎて一度に変更できません。選択するピクセルを減らしてください。",
  $A = () => "Wybrane piksele siedziby mają zbyt dużo historii, aby zmienić je naraz. Wybierz mniej pikseli.",
  FA = () => "У выбранных пикселей штаб-квартиры слишком большая история, чтобы изменить всё сразу. Выберите меньше пикселей.",
  HA = () => "Вибрані пікселі штаб-квартири мають забагато історії, щоб змінити їх за один раз. Виберіть менше пікселів.",
  GA = () => "Các pixel trụ sở đã chọn có quá nhiều lịch sử để thay đổi cùng lúc. Hãy chọn ít pixel hơn.",
  VA = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? jA() : e === "pt" ? zA() : e === "ch" ? LA() : e === "de" ? UA() : e === "es" ? CA() : e === "fr" ? MA() : e === "it" ? BA() : e === "jp" ? KA() : e === "pl" ? $A() : e === "ru" ? FA() : e === "uk" ? HA() : GA()
  },
  WA = () => "This alliance has no headquarters",
  YA = () => "Esta aliança não tem sede",
  JA = () => "该联盟没有总部",
  QA = () => "Diese Allianz hat kein Hauptquartier",
  XA = () => "Esta alianza no tiene cuartel general",
  ZA = () => "Cette alliance n'a pas de quartier général",
  eS = () => "Questa alleanza non ha un quartier generale",
  tS = () => "このアライアンスには拠点がありません",
  rS = () => "Ten sojusz nie ma siedziby",
  nS = () => "У этого альянса нет штаб-квартиры",
  aS = () => "Цей альянс не має штаб-квартири",
  iS = () => "Liên minh này không có trụ sở",
  sS = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? WA() : e === "pt" ? YA() : e === "ch" ? JA() : e === "de" ? QA() : e === "es" ? XA() : e === "fr" ? ZA() : e === "it" ? eS() : e === "jp" ? tS() : e === "pl" ? rS() : e === "ru" ? nS() : e === "uk" ? aS() : iS()
  },
  oS = () => "Buy the previous overlay space upgrade first.",
  cS = () => "Compre primeiro a melhoria anterior de espaços para overlays.",
  uS = () => "请先购买上一级 Overlay 空间升级。",
  lS = () => "Kaufe zuerst die vorherige Overlay-Platz-Erweiterung.",
  _S = () => "Compra primero la mejora anterior de espacios de overlay.",
  dS = () => "Achetez d’abord l’amélioration précédente des emplacements d’overlay.",
  fS = () => "Acquista prima il precedente ampliamento degli spazi per overlay.",
  hS = () => "先に前段階のOverlay枠アップグレードを購入してください。",
  pS = () => "Najpierw kup poprzednie rozszerzenie miejsc na overlaye.",
  mS = () => "Сначала купите предыдущее расширение мест для Overlay.",
  gS = () => "Спочатку придбайте попереднє розширення місць для Overlay.",
  wS = () => "Hãy mua nâng cấp chỗ lưu overlay trước đó trước.",
  yS = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? oS() : e === "pt" ? cS() : e === "ch" ? uS() : e === "de" ? lS() : e === "es" ? _S() : e === "fr" ? dS() : e === "it" ? fS() : e === "jp" ? hS() : e === "pl" ? pS() : e === "ru" ? mS() : e === "uk" ? gS() : wS()
  },
  vS = () => "This alliance has no free overlay spaces.",
  bS = () => "Esta aliança não tem espaços para overlays livres.",
  ES = () => "此联盟没有可用的 Overlay 空间。",
  OS = () => "Diese Allianz hat keine freien Overlay-Plätze.",
  TS = () => "Esta alianza no tiene espacios de overlay libres.",
  kS = () => "Cette alliance n’a plus d’emplacement d’overlay libre.",
  qS = () => "Questa alleanza non ha spazi liberi per overlay.",
  AS = () => "この同盟には空きOverlay枠がありません。",
  SS = () => "Ten sojusz nie ma wolnych miejsc na overlaye.",
  NS = () => "У этого альянса нет свободных мест для Overlay.",
  IS = () => "Цей альянс не має вільних місць для Overlay.",
  RS = () => "Liên minh này không còn chỗ lưu overlay trống.",
  DS = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? vS() : e === "pt" ? bS() : e === "ch" ? ES() : e === "de" ? OS() : e === "es" ? TS() : e === "fr" ? kS() : e === "it" ? qS() : e === "jp" ? AS() : e === "pl" ? SS() : e === "ru" ? NS() : e === "uk" ? IS() : RS()
  },
  PS = () => "This alliance has reached its overlay storage limit. Delete an overlay or replace one with a smaller image.",
  xS = () => "Esta aliança atingiu o limite de armazenamento de overlays. Exclua um overlay ou substitua-o por uma imagem menor.",
  jS = () => "此联盟已达到 Overlay 存储上限。请删除一个 Overlay 或替换为更小的图片。",
  zS = () => "Diese Allianz hat ihr Speicherlimit für Overlays erreicht. Lösche ein Overlay oder ersetze es durch ein kleineres Bild.",
  LS = () => "Esta alianza alcanzó el límite de almacenamiento de overlays. Elimina un overlay o reemplázalo por una imagen más pequeña.",
  US = () => "Cette alliance a atteint sa limite de stockage d’overlays. Supprimez un overlay ou remplacez-le par une image plus petite.",
  CS = () => "Questa alleanza ha raggiunto il limite di archiviazione degli overlay. Elimina un overlay o sostituiscilo con un'immagine più piccola.",
  MS = () => "この同盟はOverlayの保存容量上限に達しました。Overlayを削除するか、より小さい画像に置き換えてください。",
  BS = () => "Ten sojusz osiągnął limit miejsca na overlaye. Usuń overlay lub zastąp go mniejszym obrazem.",
  KS = () => "Этот альянс достиг лимита хранилища Overlay. Удалите Overlay или замените его изображением меньшего размера.",
  $S = () => "Цей альянс досяг ліміту сховища Overlay. Видаліть Overlay або замініть його меншим зображенням.",
  FS = () => "Liên minh này đã đạt giới hạn lưu trữ overlay. Hãy xóa một overlay hoặc thay bằng hình ảnh nhỏ hơn.",
  qt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? PS() : e === "pt" ? xS() : e === "ch" ? jS() : e === "de" ? zS() : e === "es" ? LS() : e === "fr" ? US() : e === "it" ? CS() : e === "jp" ? MS() : e === "pl" ? BS() : e === "ru" ? KS() : e === "uk" ? $S() : FS()
  },
  HS = () => "Choose a valid image up to 8 MB.",
  GS = () => "Escolha uma imagem válida de até 8 MB.",
  VS = () => "请选择不超过 8 MB 的有效图片。",
  WS = () => "Wähle ein gültiges Bild bis zu 8 MB.",
  YS = () => "Elige una imagen válida de hasta 8 MB.",
  JS = () => "Choisissez une image valide de 8 Mo maximum.",
  QS = () => "Scegli un’immagine valida fino a 8 MB.",
  XS = () => "8 MB 以下の有効な画像を選択してください。",
  ZS = () => "Wybierz prawidłowy obraz o rozmiarze do 8 MB.",
  eN = () => "Выберите допустимое изображение размером до 8 МБ.",
  tN = () => "Виберіть дійсне зображення розміром до 8 МБ.",
  rN = () => "Chọn ảnh hợp lệ có dung lượng tối đa 8 MB.",
  At = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? HS() : e === "pt" ? GS() : e === "ch" ? VS() : e === "de" ? WS() : e === "es" ? YS() : e === "fr" ? JS() : e === "it" ? QS() : e === "jp" ? XS() : e === "pl" ? ZS() : e === "ru" ? eN() : e === "uk" ? tN() : rN()
  },
  nN = () => "Too many overlay changes are happening. Wait a moment and try again.",
  aN = () => "Muitas alterações de overlays estão acontecendo. Aguarde um momento e tente novamente.",
  iN = () => "正在进行的 Overlay 更改过多。请稍候再试。",
  sN = () => "Es werden gerade zu viele Overlays geändert. Warte einen Moment und versuche es erneut.",
  oN = () => "Se están realizando demasiados cambios en los overlays. Espera un momento e inténtalo de nuevo.",
  cN = () => "Trop de modifications d’overlays sont en cours. Attendez un instant et réessayez.",
  uN = () => "Sono in corso troppe modifiche agli overlay. Attendi un momento e riprova.",
  lN = () => "Overlayの変更が多すぎます。少し待ってからもう一度お試しください。",
  _N = () => "Trwa zbyt wiele zmian overlayów. Poczekaj chwilę i spróbuj ponownie.",
  dN = () => "Слишком много изменений Overlay. Немного подождите и попробуйте снова.",
  fN = () => "Зараз вноситься забагато змін до Overlay. Трохи зачекайте та спробуйте ще раз.",
  hN = () => "Đang có quá nhiều thay đổi overlay. Hãy chờ một lúc rồi thử lại.",
  Ye = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? nN() : e === "pt" ? aN() : e === "ch" ? iN() : e === "de" ? sN() : e === "es" ? oN() : e === "fr" ? cN() : e === "it" ? uN() : e === "jp" ? lN() : e === "pl" ? _N() : e === "ru" ? dN() : e === "uk" ? fN() : hN()
  };

function pN(r, t) {
  return (t == null ? void 0 : t.aborted) === !0 || typeof DOMException < "u" && r instanceof DOMException && r.name === "AbortError"
}
var Ee, Oe;
class mN {
  constructor(t) {
    v(this, Ee, S(!0));
    v(this, Oe, S(null));
    this.url = t
  }
  get online() {
    return E(h(this, Ee))
  }
  set online(t) {
    k(h(this, Ee), t, !0)
  }
  get serverTimeOffsetMs() {
    return E(h(this, Oe))
  }
  set serverTimeOffsetMs(t) {
    k(h(this, Oe), t, !0)
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
      throw pN(n, e == null ? void 0 : e.signal) ? n : (console.error("Fetch error:", n), this.online = !1, new Error(Hi()))
    }
  }
  async request(t, e) {
    var c;
    e = {
      credentials: "include",
      ...e
    };
    let n = await this.guardedFetch(t, e);
    if (n.status === i.FORBIDDEN && n.headers.get("x-block-reason") === "tor") throw new Error(Ag());
    const a = ((c = n.headers.get("cf-mitigated")) == null ? void 0 : c.toLowerCase()) === "challenge";
    if (n.status === 403 && a) {
      if (F.setCfLikelyAutomated(!0), !await zt()) throw new Error(ee());
      n = await this.guardedFetch(t, e)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (n.status === i.TOO_MANY_REQUESTS) throw new ae(nv());
      if (n.status === i.REQUEST_TIMEOUT) throw new Error(gm());
      if (n.status === i.SERVICE_UNAVAILABLE) throw new Error(rg())
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
class zI extends Error {}

function gN(r) {
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
      if (e.status === i.BAD_REQUEST) throw new Error(rd());
      if (e.status === i.CONFLICT) throw new Error(vp());
      if (e.status === i.FORBIDDEN) throw new Error(_h());
      if (e.status === i.TOO_MANY_REQUESTS) throw new Error(wt());
      if (e.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(Pp());
      if (e.status === i.LOCKED) throw new Error(_w());
      if (e.status === i.UNPROCESSABLE_ENTITY) throw new Error(pd());
      if (e.status === i.NOT_ACCEPTABLE) throw new Error(Tw());
      if (e.status === i.PRECONDITION_FAILED) throw new Error(Ss());
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
          "x-fp": await nt()
        }
      });
      if (t.type === "otp") {
        if (n.status === i.GONE) throw new Error(uu());
        if (n.status === i.BAD_REQUEST) throw new Error(w_());
        if (n.status === i.TOO_MANY_REQUESTS) throw new Error(wt());
        if (n.status !== i.OK) throw new Error(o())
      } else {
        if (n.status === i.BAD_REQUEST) throw new Error(i_());
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
        if (a === "invalid_name") throw new Error(Ct());
        if (a === "invalid_discord") throw new Error(R_());
        if (typeof a == "string" && a.startsWith("name_change_cooldown:")) {
          const s = parseInt(a.split(":")[1] ?? "0", 10);
          throw new Error(Cf({
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
      if (e.status === i.BAD_REQUEST) throw new Error(Mg());
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
      if (e.status === i.FORBIDDEN) throw new Error(zh());
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
      if (n.status === i.BAD_REQUEST) throw new Error(Zd());
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
          throw (await e.json()).error === "conflict_blocked" ? new Error(Co()) : new Error(qo());
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

function wN(r) {
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
        throw s === "invalid_name" ? new l(Ct(), i.BAD_REQUEST) : new l(typeof s == "string" && s ? s : o(), i.BAD_REQUEST)
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
        throw s === "email_required" || s === "invalid_email" ? new l(Tc(), i.BAD_REQUEST) : new l(typeof s == "string" && s ? s : o(), i.BAD_REQUEST)
      }
      if (n.status === i.CONFLICT) {
        const a = await n.json();
        if (((a == null ? void 0 : a.error) ?? "") === "email_already_in_use") {
          const c = new l(typeof(a == null ? void 0 : a.userId) == "number" ? _c({
            userId: a.userId
          }) : Xo(), i.CONFLICT);
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
      if (t.status === i.CONFLICT) throw new l(An(), t.status);
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
const yN = [{
    tileSize: 1e3,
    zoom: 11
  }],
  vN = 4,
  bN = 6e3,
  EN = [{
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
  ON = {
    needsPhoneVerification: "needs_phone_verification"
  },
  TN = {
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
  kN = {
    android: {
      googlePlayBilling: {
        price: 1.2
      },
      appName: "live.wplace.twa"
    }
  },
  qN = {
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
  AN = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  SN = {
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
  NN = {
    tools: {
      wayback: {
        limit: 1e4,
        hqLimit: 5e3
      }
    }
  },
  IN = {
    areaRadius: 250
  },
  RN = {
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
  H = {
    seasons: yN,
    regionSize: vN,
    refreshIntervalMs: bN,
    colors: EN,
    errors: ON,
    items: TN,
    platforms: kN,
    products: qN,
    countries: AN,
    permissions: SN,
    settings: NN,
    moderation: IN,
    alliance: RN
  },
  $e = H,
  DN = H.seasons,
  Kt = H.seasons.length - 1,
  LI = H.seasons[Kt].zoom,
  UI = H.seasons[Kt].tileSize,
  CI = H.permissions,
  $t = H.settings,
  PN = H.platforms.android,
  MI = PN.googlePlayBilling.price;

function BI(r) {
  return $e.countries[r - 1]
}

function et(r) {
  return et.map.get(r)
}(r => {
  r.sharedProducts = Object.entries($e.products).map(([t, e]) => ({
    ...e,
    productId: t
  })).filter(t => "lookupKey" in t), r.map = xN(r.sharedProducts, t => t.lookupKey)
})(et || (et = {}));

function xN(r, t) {
  const e = new Map;
  for (const n in r) {
    const a = Reflect.get(r, n),
      s = t(a, n, r);
    e.set(s, a)
  }
  return e
}
const Fe = 5e3,
  St = 4,
  U = 64,
  jN = 8;

function Le(r) {
  return {
    ...r,
    imageRevision: r.imageRevision ?? r.updatedAt,
    thumbnailRevision: r.thumbnailRevision ?? r.imageRevision ?? r.updatedAt,
    sizeBytes: r.sizeBytes ?? 0,
    audienceRoles: Array.isArray(r.audienceRoles) ? r.audienceRoles : r.audienceRole ? [r.audienceRole] : [],
    audienceDraftIds: Array.isArray(r.audienceDraftIds) ? r.audienceDraftIds : typeof r.audienceDraftId == "number" ? [r.audienceDraftId] : []
  }
}

function zN(r) {
  const t = r.maxX - r.minX + 1,
    e = r.maxY - r.minY + 1;
  if (t <= 0 || e <= 0) return [];
  const n = Math.min(t, Fe),
    a = Math.max(1, Math.floor(Fe / n)),
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

function LN(r) {
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

function Nt(r) {
  const t = (r == null ? void 0 : r.role) ?? (r == null ? void 0 : r.alliance_role);
  return t === "mod" || t === "admin" || t === "leader" ? t : "member"
}

function UN(r) {
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
        throw n.error === "max_characters" ? new l(dt(), e.status) : n.error === "name_taken" ? new l(_t(), e.status) : n.error == "empty_name" ? new l(Ea(), e.status) : new l(o(), e.status)
      } else throw e.status === i.FORBIDDEN ? (await e.json().catch(() => ({}))).error === "not_enough_droplets" ? new Error(pt()) : new Error(cy()) : new Error(o())
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
      if (e.status === i.FORBIDDEN) throw new Error(O());
      if (e.status === i.BAD_REQUEST) {
        const n = await e.json().catch(() => ({}));
        throw new Error(n.error === "invalid_markdown" ? DO() : Jc())
      } else throw e.status === i.CONFLICT ? new Error(yO()) : new Error(o())
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
      throw a.error === "not_enough_droplets" ? new Error(pt()) : a.error === "invalid_donation" ? new Error(_E()) : new Error(o())
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
      throw n.error === "not_enough_alliance_coins" ? new Error(re()) : n.error === "already_unlocked" ? new Error(bt()) : n.error === "headquarters_not_unlocked" ? new Error(Tt()) : n.error === "headquarters_upgrade_prerequisite" ? new Error(qk()) : n.error === "template_upgrade_prerequisite" ? new Error(yS()) : new Error(o())
    }
    async getAllianceTemplates() {
      const t = await this.request("/alliance/templates", {
        credentials: "include"
      });
      if (t.status === i.OK) {
        const e = await t.json();
        return {
          ...e,
          templates: (e.templates ?? []).map(Le),
          usedBytes: e.usedBytes ?? 0,
          byteLimit: e.byteLimit ?? 64 * 1024 * 1024,
          draftOptions: e.draftOptions ?? []
        }
      }
      throw new Error(o())
    }
    async createAllianceTemplate(t, e) {
      const n = new FormData;
      n.set("idempotencyKey", e), n.set("name", t.name), n.set("audience", t.audience), n.set("audienceRoles", JSON.stringify(t.audienceRoles ?? [])), n.set("audienceDraftIds", JSON.stringify(t.audienceDraftIds ?? [])), n.set("opacity", String(t.opacity)), n.set("colorMetric", t.colorMetric), n.set("dithering", String(t.dithering)), n.set("colorPaletteMode", t.colorPaletteMode), n.set("pixelMode", t.pixelMode), n.set("image", t.image, "alliance-template.png");
      const a = await this.request("/alliance/templates", {
        method: "POST",
        credentials: "include",
        body: n
      });
      if (a.status === i.CREATED || a.status === i.OK) return Le(await a.json());
      const s = await a.json().catch(() => ({}));
      throw s.error === "template_limit_reached" ? new Error(DS()) : s.error === "template_storage_limit_reached" ? new Error(qt()) : s.error === "invalid_template_image" ? new Error(At()) : s.error === "template_upload_rate_limited" ? new Error(Ye()) : a.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
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
      throw (await n.json().catch(() => ({}))).error === "template_upload_rate_limited" ? new Error(Ye()) : n.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
    }
    async updateAllianceTemplate(t, e) {
      const n = new FormData;
      n.set("name", e.name), n.set("audience", e.audience), n.set("audienceRoles", JSON.stringify(e.audienceRoles ?? [])), n.set("audienceDraftIds", JSON.stringify(e.audienceDraftIds ?? [])), n.set("opacity", String(e.opacity)), n.set("colorMetric", e.colorMetric), n.set("dithering", String(e.dithering)), n.set("colorPaletteMode", e.colorPaletteMode), n.set("pixelMode", e.pixelMode), n.set("image", e.image, "alliance-template.png");
      const a = await this.request(`/alliance/templates/${t}`, {
        method: "PUT",
        credentials: "include",
        body: n
      });
      if (a.status === i.OK) return Le(await a.json());
      const s = await a.json().catch(() => ({}));
      throw s.error === "template_storage_limit_reached" ? new Error(qt()) : s.error === "invalid_template_image" ? new Error(At()) : s.error === "template_upload_rate_limited" ? new Error(Ye()) : a.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
    }
    async deleteAllianceTemplate(t) {
      const e = await this.request(`/alliance/templates/${t}`, {
        method: "DELETE",
        credentials: "include"
      });
      if (e.status !== i.NO_CONTENT) throw e.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
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
      throw n.error === "not_enough_alliance_coins" ? new Error(re()) : n.error === "name_taken" ? new Error(_t()) : n.error === "name_unchanged" ? new Error(sO()) : n.error === "max_characters" ? new Error(dt()) : new Error(o())
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
          throw c instanceof ae ? new ae(Ot()) : c
        });
      if (a.status === i.OK) return a.json();
      const s = await a.json().catch(() => ({}));
      if (s.error === "challenge-required" && s.tier) {
        if (await se(s.tier)) return this.paintAllianceAsset(t, e);
        throw new Error(ee())
      }
      if (s.error === "verification-required") {
        const c = await Qe().get();
        if (!c.sealed_result) throw new Error(o());
        return await this.verifyAnticheat(c.sealed_result), this.paintAllianceAsset(t, e)
      }
      throw s.error === "color-not-owned" ? new Error(Et()) : new Error(o())
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
      if (e.status !== i.OK) throw (await e.json().catch(() => ({}))).error === "asset_version_selected" ? new Error(aT()) : new Error(o())
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
      if (n.status !== i.OK) throw (await n.json().catch(() => ({}))).error === "editor_already_granted" ? new Error(HO()) : new Error(o())
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
      if (n.status === i.FORBIDDEN) throw new Error(O());
      const a = await n.json().catch(() => ({}));
      throw a.error === "headquarters_credit_required" ? new Error(ek()) : a.error === "headquarters_not_unlocked" ? new Error(Tt()) : new Error(o())
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
      throw n.error === "not_enough_alliance_coins" ? new Error(re()) : n.error === "already_unlocked" ? new Error(bt()) : n.error === "headquarters_anchor_required" ? new Error(BT()) : new Error(o())
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
      throw n.error === "not_enough_alliance_coins" ? new Error(re()) : n.error === "headquarters_size_prerequisite" ? new Error(fk()) : new Error(o())
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
          throw c instanceof ae ? new ae(Ot()) : c
        });
      if (a.status === i.OK) return a.json();
      const s = await a.json().catch(() => ({}));
      if (s.error === "challenge-required" && s.tier) {
        if (await se(s.tier)) return this.paintAllianceHeadquarters(t, e);
        throw new Error(ee())
      }
      if (s.error === "verification-required") {
        const c = await Qe().get();
        if (!c.sealed_result) throw new Error(o());
        return await this.verifyAnticheat(c.sealed_result), this.paintAllianceHeadquarters(t, e)
      }
      throw s.error === "color-not-owned" ? new Error(Et()) : s.error === "not_enough_hq_charges" ? new Error(Ck()) : s.error === "headquarters_timed_out" ? new Error(Tq()) : s.error === "headquarters_locked" ? new Error(_q()) : s.error === "no_pixel_changes" ? new Error(Xk()) : new Error(o())
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
      if (a.status === i.FORBIDDEN) throw new Error(O());
      const s = await a.json().catch(() => ({}));
      throw s.error === "headquarters_timeout_active" ? new Error(Yq()) : s.error === "invalid_timeout_reason" ? new Error(kt()) : new Error(o())
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
      if (n.status === i.FORBIDDEN) throw new Error(O());
      const a = await n.json().catch(() => ({}));
      throw a.error === "headquarters_timeout_inactive" ? new Error(cA()) : a.error === "invalid_timeout_reason" ? new Error(kt()) : new Error(o())
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
      throw e.status === i.FORBIDDEN ? new Error(O()) : new Error(V())
    }
    async getAllianceInvites() {
      const t = await this.request("/alliance/invites", {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      throw t.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
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
      throw e.status === i.BAD_REQUEST ? (await e.json().catch(() => ({}))).error === "max_invites" ? new Error(Cb()) : new Error(o()) : e.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
    }
    async revokeAllianceInvite(t) {
      const e = await this.request(`/alliance/invites/${t}/revoke`, {
        method: "POST",
        credentials: "include"
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
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
      throw e.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
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
      throw n.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
    }
    async kickAllianceMember(t) {
      const e = await this.request("/alliance/kick", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          kickedUserId: t
        })
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
    }
    async removeAllianceAdmin(t) {
      const e = await this.request("/alliance/remove-admin", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          demotedUserId: t
        })
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
    }
    async setOwnAllianceMemberRole(t, e) {
      const n = await this.request(`/alliance/members/${t}/role`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          role: e
        })
      });
      if (n.status !== i.OK) throw n.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
    }
    async getAllianceRolePermissions() {
      const t = await this.request("/alliance/role-permissions", {
        credentials: "include"
      });
      if (t.status === i.OK) return t.json();
      throw t.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
    }
    async updateAllianceRolePermissions(t) {
      const e = await this.request("/alliance/role-permissions", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          roles: t
        })
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
    }
    async transferAllianceLeadership(t) {
      const e = await this.request("/alliance/transfer-leadership", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          newLeaderUserId: t
        })
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
    }
    async updateAllianceSettings(t) {
      const e = await this.request("/alliance/settings", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
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
          if (e.status === i.BAD_REQUEST) throw new Error(Xb());
          if (e.status === i.FORBIDDEN) throw new Error(O())
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
      throw n.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
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
      throw new Error(am())
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
      n.set("limit", String((e == null ? void 0 : e.limit) ?? $t.tools.wayback.hqLimit)), e != null && e.before && n.set("before", String(e.before)), e != null && e.area && (n.set("minX", String(e.area.minX)), n.set("minY", String(e.area.minY)), n.set("maxX", String(e.area.maxX)), n.set("maxY", String(e.area.maxY)));
      const a = await this.request(`/staff/dashboard/alliances/${t}/headquarters/events?${n.toString()}`, {
        credentials: "include"
      });
      if (a.status === i.NOT_FOUND) throw new Error(fb());
      if (a.status !== i.OK) throw new Error(o());
      return a.json()
    }
    async getAdminAllianceHqArea(t, e) {
      const n = zN(e);
      if (n.length === 0) throw new Error(o());
      const a = await this.getAdminAllianceHqAreaChunk(t, n[0]),
        s = [...a.pixels];
      for (let c = 1; c < n.length; c += St) {
        const u = await Promise.all(n.slice(c, c + St).map(d => this.getAdminAllianceHqAreaChunk(t, d, a.eventHwm)));
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
      const a = LN(e),
        s = new Array(a.length);
      let c = 0;
      const u = Array.from({
        length: Math.min(jN, a.length)
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
      for (let j = 0; j < u; j += 1) {
        const te = j * 13;
        f[j] = d.getUint32(te, !0), q[j] = d.getUint8(te + 4), g[j] = d.getBigUint64(te + 5, !0)
      }
      const D = s.headers.get("X-Alliance-Canvas-Anchor-Latitude"),
        x = s.headers.get("X-Alliance-Canvas-Anchor-Longitude"),
        A = Number(D),
        N = Number(x),
        I = D !== null && x !== null && Number.isFinite(A) && Number.isFinite(N) ? {
          latitude: A,
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
      for (let u = 0; u < e.length; u += Fe) {
        const d = await this.reverseAdminAllianceHqPixelChunk(t, e.slice(u, u + Fe), n, a);
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
      if (s.status === i.CONTENT_TOO_LARGE) throw new Error(VA());
      if (s.status === i.NOT_FOUND) throw new Error(Im());
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
          role: Nt(s),
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
          role: Nt(u),
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
        throw (a == null ? void 0 : a.error) === "user_not_in_alliance" ? new Error(Sd()) : new Error(o())
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
      if (a.status === i.NOT_FOUND) throw new Error(sS());
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
        throw (a == null ? void 0 : a.error) === "user_not_found" ? new Error(qb()) : (a == null ? void 0 : a.error) === "user_already_in_alliance" ? new Error(bA()) : (a == null ? void 0 : a.error) === "alliance_not_archived" ? new Error(xA()) : new Error(o())
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
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
    }
    async banAllianceUser(t) {
      const e = await this.request("/alliance/ban", {
        body: JSON.stringify({
          bannedUserId: t
        }),
        method: "POST",
        credentials: "include"
      });
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
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
      if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(O()) : new Error(o())
    }
  }
}

function CN(r) {
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

function MN(r) {
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

function BN(r) {
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
      if (e.status === i.NOT_FOUND) throw new Error(Ut());
      if (e.status === i.FORBIDDEN) throw new Error(Bt());
      if (e.status === i.CONFLICT) throw new Error(Mt());
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

function KI(r) {
  const t = Math.floor(r / K.hour);
  r -= t * K.hour;
  const e = Math.floor(r / K.minute);
  r -= e * K.minute;
  const a = Math.floor(r / K.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${a}` : `${e}:${a}`
}

function $I(r) {
  const t = r.getFullYear(),
    e = String(r.getMonth() + 1).padStart(2, "0"),
    n = String(r.getDate()).padStart(2, "0"),
    a = String(r.getHours()).padStart(2, "0"),
    s = String(r.getMinutes()).padStart(2, "0"),
    c = String(r.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${n} ${a}:${s}:${c}`
}
const KN = 30 * K.minute;

function $N(r) {
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
      Date.now() - this.lastHotspotRequestAt < KN || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
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

function FN(r) {
  return class extends r {
    async postCaptchaSession(t, e = "include") {
      const n = await this.request("/anticheat/captcha/session", {
        method: "POST",
        credentials: e,
        body: JSON.stringify(t),
        headers: {
          "x-fp": await nt()
        }
      });
      if (!n.ok) throw n.status === 500 ? new l(o(), n.status) : new l(Gl(), n.status);
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
const FI = {
    griefing: Eu(),
    "multi-accounting": ff(),
    "hate-speech": Wu(),
    bot: ja(),
    doxxing: Zs(),
    "inappropriate-content": vl(),
    other: oi()
  },
  HI = {
    doxxing: fo(),
    "hate-speech": ol(),
    griefing: ju(),
    "multi-accounting": qf(),
    bot: Wa(),
    "inappropriate-content": Pl(),
    other: vi()
  },
  GI = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  It = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  VI = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  HN = 365 * K.day;

function Ft(r) {
  if (!r) return null;
  const e = (r instanceof Date ? r : new Date(r)).getTime();
  return Number.isFinite(e) ? e : null
}

function WI(r, t = Date.now()) {
  const e = Ft(r);
  return e === null ? !1 : e - t >= HN
}

function YI(r, t = Date.now()) {
  const e = Ft(r);
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

function GN(r) {
  return class extends r {
    async getModeratorTickets() {
      const t = await this.request("/staff/tickets/get", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      const e = await t.json();
      for (const n of e.tickets) n.reports.sort((a, s) => It[a.reason] - It[s.reason]);
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
        throw (n == null ? void 0 : n.error) === "reversal_already_pending" ? new l(Sv(), i.CONFLICT) : new l(o(), i.CONFLICT)
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
      if (a.status === i.FORBIDDEN) throw new l(Bv(), i.FORBIDDEN);
      if (a.status === i.CONFLICT) throw new l(eb(), i.CONFLICT);
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

function VN(r) {
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

function WN(r) {
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
      if (e.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(lt());
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
      if (e.status !== i.OK) throw e.status === i.NOT_FOUND ? new Error(Ut()) : e.status === i.FORBIDDEN ? new Error(Bt()) : e.status === i.CONFLICT ? new Error(Mt()) : new Error(o())
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
      if (e.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(lt());
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

function Rt(r, t) {
  const e = {};
  for (const n of r) {
    const a = t(n),
      s = e[a];
    s ? s.push(n) : e[a] = [n]
  }
  return e
}

function JI(r, t) {
  const e = {};
  for (const n of r) {
    const a = t(n);
    e[a] = n
  }
  return e
}

function YN(r) {
  return class extends r {
    async paint(t) {
      const e = Rt(t, u => `t=(${u.tile[0]},${u.tile[1]}),s=${u.season}`),
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
        if (c.status === i.UNAUTHORIZED) throw new Error(yt());
        if (c.status === i.FORBIDDEN) {
          if (c.headers.get("cf-mitigated") === "challenge") throw new Error(ht());
          const u = await c.json();
          if ((u == null ? void 0 : u.error) === "timeout") {
            const d = new Date(Date.now() + ((u == null ? void 0 : u.durationMs) ?? 0));
            throw new Error(vt({
              until: d.toLocaleString()
            }))
          }
          if ((u == null ? void 0 : u.error) === "refresh") throw new Error(gt());
          if ((u == null ? void 0 : u.error) === "color-not-owned") throw new Error(mt());
          if ((u == null ? void 0 : u.error) === "event-pixel-present") throw new Error(ft());
          if ((u == null ? void 0 : u.error) === "challenge-required")
            if (u.tier) {
              if (await se(u.tier)) return this.paint(t);
              throw new Error(ee())
            } else console.error("Challenge required but no tier provided", u);
          if ((u == null ? void 0 : u.error) === "verification-required") {
            const f = (await Qe().get()).sealed_result;
            if (f) return await this.verifyAnticheat(f), this.paint(t);
            throw new Error(o())
          }
          Y.refresh()
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
        throw s === "timelapse_too_many_events" ? new l($m(), i.BAD_REQUEST) : new l(typeof s == "string" && s ? s : o(), i.BAD_REQUEST)
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
      const s = Rt(t, d => `t=(${d.tile[0]},${d.tile[1]}),s=${d.season}`),
        u = (await Promise.all(Object.values(s).map(async d => {
          const [f, q] = d[0].tile, g = d[0].season, D = {
            colors: d.map(I => I.colorIdx),
            coords: d.flatMap(I => I.pixel),
            csid: n
          }, x = JSON.stringify(D), A = e(g, f, q), N = await F.getHeaders(x);
          return this.request(A, {
            method: "POST",
            body: x,
            headers: N,
            credentials: "include"
          })
        }))).filter(d => d.status !== i.OK);
      if (u.length) {
        const d = u[0];
        if (d.status === i.UNAUTHORIZED) throw new Error(yt());
        if (d.status === i.FORBIDDEN) {
          if (d.headers.get("cf-mitigated") === "challenge") throw new Error(ht());
          const f = await d.json();
          if ((f == null ? void 0 : f.error) === "timeout") {
            const q = new Date(Date.now() + ((f == null ? void 0 : f.durationMs) ?? 0));
            throw new Error(vt({
              until: q.toLocaleString()
            }))
          }
          if ((f == null ? void 0 : f.error) === "refresh") throw new Error(gt());
          if ((f == null ? void 0 : f.error) === "color-not-owned") throw new Error(mt());
          if ((f == null ? void 0 : f.error) === "event-pixel-present") throw new Error(ft());
          Y.refresh()
        } else throw new Error(o())
      }
    }
    async adminAutoPainterPaint(t, e, n) {
      const a = JN(t),
        s = await QN(a),
        c = new FormData;
      c.append("fingerprint", e), c.append("season", a.season.toString()), c.append("px0", a.offsetX.toString()), c.append("py0", a.offsetY.toString()), c.append("width", a.width.toString()), c.append("height", a.height.toString()), c.append("pixels", t.length.toString()), c.append("bitmap", s, "auto-painter.png"), c.append("userId", n.toString());
      const u = await this.request("/staff/tools/auto-painter/paint", {
        method: "POST",
        body: c,
        credentials: "include"
      });
      if (u.status === i.FORBIDDEN) {
        const d = await u.json().catch(() => null);
        if (typeof(d == null ? void 0 : d.charges) == "number") throw new Error(Yh({
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
        throw new Error(Lc({
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
        const A = await d.text();
        throw console.error("Error while fetching pixel area info", A), new Error(o())
      }
      const f = await d.arrayBuffer(),
        q = new DataView(f),
        g = Math.floor(f.byteLength / 5),
        D = new Uint32Array(g),
        x = new Uint8Array(g);
      for (let A = 0; A < g; A++) {
        const N = A * 5;
        D[A] = q.getUint32(N, !0), x[A] = q.getUint8(N + 4)
      }
      return {
        paintedBy: D,
        colors: x
      }
    }
  }
}

function JN(r) {
  var D, x;
  if (!r.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = r[0].season;
  for (const A of r)
    if (A.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (D = $e.seasons) == null ? void 0 : D[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const n = e.tileSize;
  let a = Number.POSITIVE_INFINITY,
    s = Number.POSITIVE_INFINITY,
    c = Number.NEGATIVE_INFINITY,
    u = Number.NEGATIVE_INFINITY;
  const d = r.map(A => {
      const N = Math.round(A.tile[0] * n + A.pixel[0]),
        I = Math.round(A.tile[1] * n + A.pixel[1]);
      return N < a && (a = N), I < s && (s = I), N > c && (c = N), I > u && (u = I), {
        x: N,
        y: I,
        colorIdx: A.colorIdx
      }
    }),
    f = c - a + 1,
    q = u - s + 1;
  if (!Number.isFinite(f) || !Number.isFinite(q) || f <= 0 || q <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const g = new Uint8ClampedArray(f * q * 4);
  for (const {
      x: A,
      y: N,
      colorIdx: I
    }
    of d) {
    const j = (x = $e.colors) == null ? void 0 : x[I];
    if (!j) throw new Error(`Unknown palette color index: ${I}`);
    const te = A - a,
      ze = ((N - s) * f + te) * 4,
      [Yt, Jt, Qt] = j.rgb;
    g[ze] = Yt, g[ze + 1] = Jt, g[ze + 2] = Qt, g[ze + 3] = I === 0 ? 1 : 255
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
async function QN(r) {
  const t = XN(r.width, r.height),
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

function XN(r, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(r, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = r, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}

function ZN(r) {
  return class extends r {
    validWaybackInput(t) {
      const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
        n = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < DN.length,
        a = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= $t.tools.wayback.limit,
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
class eI extends gN(wN(UN(CN(MN(BN($N(FN(GN(VN(WN(YN(ZN(mN))))))))))))) {}
const $ = new eI(xt);
typeof window < "u" && rr(() => {
  let r = $.online;
  nr(() => {
    const t = $.online;
    t && !r && window.dispatchEvent(new CustomEvent("wplace:online")), r = t
  })
});

function Ht(r, t) {
  if (!(r != null && r.length)) return !1;
  for (const e of r)
    if (e === t) return !0;
  return !1
}

function tI(r, t) {
  for (const e of t)
    if (Ht(r, e)) return !0;
  return !1
}

function Gt(r) {
  const t = atob(r),
    e = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
  return e
}

function rI(r) {
  if (typeof Buffer < "u") return Buffer.from(r).toString("base64");
  let t = "";
  for (let e = 0; e < r.length; e++) t += String.fromCharCode(r[e]);
  return btoa(t)
}
class nI {
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

function QI(r) {
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

function XI(r) {
  if (typeof FileReader > "u") {
    const t = r.type || "application/octet-stream";
    return r.arrayBuffer().then(e => `data:${t};base64,${rI(new Uint8Array(e))}`)
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

function ZI(r) {
  if (!r.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = r.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = r.slice(5, t),
    n = r.slice(t + 1),
    a = e.indexOf(";base64"),
    s = (a === -1 ? e : e.slice(0, a)) || "text/plain";
  if (a !== -1) {
    const c = Gt(n),
      u = new Uint8Array(c.byteLength);
    return u.set(c), new Blob([u], {
      type: s
    })
  }
  return new Blob([decodeURIComponent(n)], {
    type: s
  })
}

function eR(...r) {
  return r.filter(Boolean).join(" ")
}
const aI = typeof document < "u";
let Dt = 0;
var Te, ke, qe;
class iI {
  constructor() {
    v(this, Te, S(Ke([])));
    v(this, ke, S(Ke([])));
    v(this, qe, t => {
      const e = this.toasts.findIndex(n => n.id === t);
      return e === -1 ? null : e
    });
    w(this, "addToast", t => {
      aI && this.toasts.unshift(t)
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
      } = t, a = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((u = t.id) == null ? void 0 : u.length) > 0 ? t.id : Dt++, s = t.dismissable === void 0 ? !0 : t.dismissable, c = t.type === void 0 ? "default" : t.type;
      return st(() => {
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
    w(this, "dismiss", t => (st(() => {
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
          const u = sI(c);
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
      const n = (e == null ? void 0 : e.id) || Dt++;
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
    k(h(this, Te), t, !0)
  }
  get heights() {
    return E(h(this, ke))
  }
  set heights(t) {
    k(h(this, ke), t, !0)
  }
}
Te = new WeakMap, ke = new WeakMap, qe = new WeakMap;

function sI(r) {
  return r && typeof r == "object" && "status" in r ? `HTTP error! Status: ${r.status}` : `Error! ${r}`
}
const P = new iI;

function oI(r, t) {
  return P.create({
    message: r,
    ...t
  })
}
var Ve;
class tR {
  constructor() {
    v(this, Ve, ne(() => P.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return E(h(this, Ve))
  }
}
Ve = new WeakMap;
const cI = oI,
  uI = Object.assign(cI, {
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
class lI {
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
      const e = t.count + Math.max((Ze.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    v(this, De, ne(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    v(this, Pe, ne(() => {
      var t;
      return new nI(Gt(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    v(this, xe, ne(() => {
      var n;
      if (!((n = this.data) != null && n.timeoutUntil)) return;
      const t = new Date(this.data.timeoutUntil),
        e = t.getTime();
      if (!(!Number.isFinite(e) || e <= Ze.now)) return t
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
    k(h(this, Ae), t, !0)
  }
  get loading() {
    return E(h(this, Se))
  }
  set loading(t) {
    k(h(this, Se), t, !0)
  }
  get notificationCount() {
    return E(h(this, Ne))
  }
  set notificationCount(t) {
    k(h(this, Ne), t, !0)
  }
  get lastFetch() {
    return E(h(this, Ie))
  }
  set lastFetch(t) {
    k(h(this, Ie), t)
  }
  get charges() {
    return E(h(this, Re))
  }
  set charges(t) {
    k(h(this, Re), t)
  }
  get cooldown() {
    return E(h(this, De))
  }
  set cooldown(t) {
    k(h(this, De), t)
  }
  get flagsBitmap() {
    return E(h(this, Pe))
  }
  set flagsBitmap(t) {
    k(h(this, Pe), t)
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
      return console.error(n), uI.warning(Xf(), {
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
    return Ht((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return tI((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
Ae = new WeakMap, Se = new WeakMap, Ne = new WeakMap, Ie = new WeakMap, Re = new WeakMap, De = new WeakMap, Pe = new WeakMap, xe = new WeakMap;
const Y = new lI;
let y;
const L = new Array(128).fill(void 0);
L.push(void 0, null, !0, !1);

function m(r) {
  return L[r]
}
let oe = L.length;

function T(r) {
  oe === L.length && L.push(L.length + 1);
  const t = oe;
  return oe = L[t], L[t] = r, t
}

function C(r, t) {
  try {
    return r.apply(this, t)
  } catch (e) {
    y.__wbindgen_export_0(T(e))
  }
}

function G(r) {
  return r == null
}
const Vt = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && Vt.decode();
let ie = null;

function Ce() {
  return (ie === null || ie.byteLength === 0) && (ie = new Uint8Array(y.memory.buffer)), ie
}

function Me(r, t) {
  return r = r >>> 0, Vt.decode(Ce().subarray(r, r + t))
}

function _I(r) {
  r < 132 || (L[r] = oe, oe = r)
}

function Pt(r) {
  const t = m(r);
  return _I(r), t
}
let W = null;

function He() {
  return (W === null || W.buffer.detached === !0 || W.buffer.detached === void 0 && W.buffer !== y.memory.buffer) && (W = new DataView(y.memory.buffer)), W
}
let Q = 0;
const Be = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  dI = typeof Be.encodeInto == "function" ? function(r, t) {
    return Be.encodeInto(r, t)
  } : function(r, t) {
    const e = Be.encode(r);
    return t.set(e), {
      read: r.length,
      written: e.length
    }
  };

function je(r, t, e) {
  if (e === void 0) {
    const u = Be.encode(r),
      d = t(u.length, 1) >>> 0;
    return Ce().subarray(d, d + u.length).set(u), Q = u.length, d
  }
  let n = r.length,
    a = t(n, 1) >>> 0;
  const s = Ce();
  let c = 0;
  for (; c < n; c++) {
    const u = r.charCodeAt(c);
    if (u > 127) break;
    s[a + c] = u
  }
  if (c !== n) {
    c !== 0 && (r = r.slice(c)), a = e(a, n, n = c + r.length * 3, 1) >>> 0;
    const u = Ce().subarray(a + c, a + n),
      d = dI(r, u);
    c += d.written, a = e(a, n, c, 1) >>> 0
  }
  return Q = c, a
}

function fI(r) {
  const t = je(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = Q;
  y.set_discord_id(t, e)
}

function hI(r) {
  const t = je(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = Q;
  y.set_fingerprint(t, e)
}

function pI(r) {
  const t = je(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = Q;
  y.set_detected_bot(t, e)
}

function mI(r) {
  let t, e;
  try {
    const s = y.__wbindgen_add_to_stack_pointer(-16),
      c = je(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
      u = Q;
    y.get_pawtected_endpoint_payload(s, c, u);
    var n = He().getInt32(s + 0, !0),
      a = He().getInt32(s + 4, !0);
    return t = n, e = a, Me(n, a)
  } finally {
    y.__wbindgen_add_to_stack_pointer(16), y.__wbindgen_export_3(t, e, 1)
  }
}

function Je(r) {
  y.set_user_id(r)
}

function gI(r) {
  y.set_cf_likely_automated(r)
}

function wI(r) {
  y.set_automated_clicks(r)
}

function yI(r) {
  const t = je(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = Q;
  y.request_url(t, e)
}

function vI(r) {
  y.set_automated_browser(r)
}
async function bI(r, t) {
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

function EI() {
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
    return G(e) ? 0 : T(e)
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
    const n = new Function(Me(t, e));
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
      m(t).randomFillSync(Pt(e))
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
    return G(t) ? 0 : T(t)
  }, r.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return G(t) ? 0 : T(t)
  }, r.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return G(t) ? 0 : T(t)
  }, r.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return G(t) ? 0 : T(t)
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
    He().setFloat64(t + 8, G(a) ? 0 : a, !0), He().setInt32(t + 0, !G(a), !0)
  }, r.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = m(t);
    return T(e)
  }, r.wbg.__wbindgen_object_drop_ref = function(t) {
    Pt(t)
  }, r.wbg.__wbindgen_string_new = function(t, e) {
    const n = Me(t, e);
    return T(n)
  }, r.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(Me(t, e))
  }, r
}

function OI(r, t) {
  return y = r.exports, Wt.__wbindgen_wasm_module = t, W = null, ie = null, y
}
async function Wt(r) {
  if (y !== void 0) return y;
  typeof r < "u" && (Object.getPrototypeOf(r) === Object.prototype ? {
    module_or_path: r
  } = r : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof r > "u" && (r = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = EI();
  (typeof r == "string" || typeof Request == "function" && r instanceof Request || typeof URL == "function" && r instanceof URL) && (r = fetch(r));
  const {
    instance: e,
    module: n
  } = await bI(await r, t);
  return OI(e, n)
}
class TI {
  constructor() {
    w(this, "interval");
    w(this, "storagesEmpty", !1);
    w(this, "storages", [new Ge, new tt, new rt, new qI]);
    w(this, "pawtectLoaded");
    w(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!Y.data || this.storagesEmpty || localStorage.getItem(Ge.KEY))) {
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
        await Wt(ar), (t = Y.data) != null && t.id && Je(Y.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: kI((n, a) => {
            let s = null;
            return n instanceof Request ? s = n.url : n instanceof URL ? s = n.href : typeof n == "string" && (s = n), s !== null && !s.startsWith("/") && yI(s), e.call(window, n, a)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(t) {
    await this.loadPawtect(), Je(t)
  }
  async setCfLikelyAutomated(t) {
    await this.loadPawtect(), gI(t)
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
    if (!await this.loadPawtect()) throw new Error(Lw());
    const n = navigator.webdriver,
      [a, s] = await Promise.all([nt(), tn().catch(c => (console.error(c), {
        bot: !1
      }))]);
    return Je(Y.data.id), fI(Y.data.discordId ?? ""), hI(a), vI(n), wI(Ze.automatedClicks), s.bot && pI(s.botKind ?? "unknown"), mI(t)
  }
}

function kI(r) {
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
let tt = B;
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
let rt = J;
class qI {
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
const F = new TI;
export {
  BI as $, Wa as A, ja as B, ff as C, It as D, et as E, PN as F, MI as G, Bv as H, P as I, eR as J, tR as K, KI as L, jI as M, R as N, PI as O, LI as P, DI as Q, xI as R, CI as S, K as T, nn as U, Im as V, zI as W, Kt as X, $t as Y, fb as Z, qb as _, FI as a, Tc as a0, DN as a1, XI as a2, ZI as a3, WI as a4, YI as a5, At as a6, ae as a7, l as a8, _q as a9, sO as aa, _E as ab, $I as ac, nI as ad, Gt as ae, Lw as af, Mg as ag, HI as ah, VI as ai, JI as aj, Gl as ak, lt as al, $ as b, UI as c, $e as d, i as e, o as f, Ze as g, pt as h, F as i, zt as j, ee as k, QI as l, ju as m, Xf as n, Eu as o, Pl as p, vl as q, am as r, GI as s, uI as t, Y as u, se as v, ol as w, Wu as x, fo as y, Zs as z
};