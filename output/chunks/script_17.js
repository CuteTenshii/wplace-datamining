var Zt = Object.defineProperty;
var st = r => {
  throw TypeError(r)
};
var er = (r, t, e) => t in r ? Zt(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var w = (r, t, e) => er(r, typeof t != "symbol" ? t + "" : t, e),
  tr = (r, t, e) => t.has(r) || st("Cannot " + e);
var h = (r, t, e) => (tr(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  v = (r, t, e) => t.has(r) ? st("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e);
import {
  j as rr,
  P as xt,
  g as at,
  k as Xe
} from "./CftFOTTa.js";
import {
  e as A,
  i as E,
  h as T,
  g as $e,
  bQ as nr,
  y as ar,
  B as ot,
  u as ne
} from "./m4hpPlb8.js";
import {
  g as _
} from "./BhCkpOlh.js";
const ir = "" + new URL("../assets/pawtect_wasm_bg.8VPqYlMZ.wasm", import.meta.url).href;
var sr = "2.0.0";
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

function or(r, t) {
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
async function cr(r) {
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

function ur({
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

function lr(r, t) {
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
    } else if (lr(r, a => e.test(a)) != null) return !0;
  return !1
}

function X(r) {
  return r.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function _r({
  documentElementKeys: r
}) {
  if (r.state !== 0) return !1;
  if (Ze(r.value, "selenium", "webdriver", "driver")) return p.Selenium
}

function dr({
  errorTrace: r
}) {
  if (r.state !== 0) return !1;
  if (/PhantomJS/i.test(r.value)) return p.PhantomJS
}

function fr({
  evalLength: r,
  browserKind: t,
  browserEngineKind: e
}) {
  if (r.state !== 0 || t.state !== 0 || e.state !== 0) return;
  const n = r.value;
  return e.value === "unknown" ? !1 : n === 37 && !Ce(["webkit", "gecko"], e.value) || n === 39 && !Ce(["internet_explorer"], t.value) || n === 33 && !Ce(["chromium"], e.value)
}

function hr({
  functionBind: r
}) {
  if (r.state === -2) return p.PhantomJS
}

function pr({
  languages: r
}) {
  if (r.state === 0 && r.value.length === 0) return p.HeadlessChrome
}

function mr({
  mimeTypesConsistent: r
}) {
  if (r.state === 0 && !r.value) return p.Unknown
}

function gr({
  notificationPermissions: r,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== "chrome") return !1;
  if (r.state === 0 && r.value) return p.HeadlessChrome
}

function wr({
  pluginsArray: r
}) {
  if (r.state === 0 && !r.value) return p.HeadlessChrome
}

function yr({
  pluginsLength: r,
  android: t,
  browserKind: e,
  browserEngineKind: n
}) {
  if (!(r.state !== 0 || t.state !== 0 || e.state !== 0 || n.state !== 0) && !(e.value !== "chrome" || t.value || n.value !== "chromium") && r.value === 0) return p.HeadlessChrome
}

function vr({
  process: r
}) {
  var t;
  if (r.state !== 0) return !1;
  if (r.value.type === "renderer" || ((t = r.value.versions) === null || t === void 0 ? void 0 : t.electron) != null) return p.Electron
}

function br({
  productSub: r,
  browserKind: t
}) {
  if (r.state !== 0 || t.state !== 0) return !1;
  if ((t.value === "chrome" || t.value === "safari" || t.value === "opera" || t.value === "wechat") && r.value !== "20030107") return p.Unknown
}

function Er({
  userAgent: r
}) {
  if (r.state !== 0) return !1;
  if (/PhantomJS/i.test(r.value)) return p.PhantomJS;
  if (/Headless/i.test(r.value)) return p.HeadlessChrome;
  if (/Electron/i.test(r.value)) return p.Electron;
  if (/slimerjs/i.test(r.value)) return p.SlimerJS
}

function Or({
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

function kr({
  windowExternal: r
}) {
  if (r.state !== 0) return !1;
  if (/Sequentum/i.test(r.value)) return p.Sequentum
}

function qr({
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

function Ar({
  distinctiveProps: r
}) {
  if (r.state !== 0) return !1;
  const t = r.value;
  let e;
  for (e in t)
    if (t[e]) return e
}
const Sr = {
  detectAppVersion: ur,
  detectDocumentAttributes: _r,
  detectErrorTrace: dr,
  detectEvalLengthInconsistency: fr,
  detectFunctionBind: hr,
  detectLanguagesLengthInconsistency: pr,
  detectNotificationPermissions: gr,
  detectPluginsArray: wr,
  detectPluginsLengthInconsistency: yr,
  detectProcess: vr,
  detectUserAgent: Er,
  detectWebDriver: Or,
  detectWebGL: Tr,
  detectWindowExternal: kr,
  detectWindowSize: qr,
  detectMimeTypesConsistent: mr,
  detectProductSub: br,
  detectDistinctiveProperties: Ar
};

function Nr() {
  const r = navigator.appVersion;
  if (r == null) throw new O(-1, "navigator.appVersion is undefined");
  return r
}

function Ir() {
  if (document.documentElement === void 0) throw new O(-1, "document.documentElement is undefined");
  const {
    documentElement: r
  } = document;
  if (typeof r.getAttributeNames != "function") throw new O(-2, "document.documentElement.getAttributeNames is not a function");
  return r.getAttributeNames()
}

function Rr() {
  try {
    null[0]()
  } catch (r) {
    if (r instanceof Error && r.stack != null) return r.stack.toString()
  }
  throw new O(-3, "errorTrace signal unexpected behaviour")
}

function Dr() {
  return eval.toString().length
}

function Pr() {
  if (Function.prototype.bind === void 0) throw new O(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function it() {
  var r, t;
  const e = window,
    n = navigator;
  return X(["webkitPersistentStorage" in n, "webkitTemporaryStorage" in n, n.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : X(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, n.vendor.indexOf("Apple") === 0, "getStorageUpdates" in n, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : X(["buildID" in navigator, "MozAppearance" in ((t = (r = document.documentElement) === null || r === void 0 ? void 0 : r.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function jr() {
  var r;
  const t = (r = navigator.userAgent) === null || r === void 0 ? void 0 : r.toLowerCase();
  return z(t, "edg/") ? "edge" : z(t, "trident") || z(t, "msie") ? "internet_explorer" : z(t, "wechat") ? "wechat" : z(t, "firefox") ? "firefox" : z(t, "opera") || z(t, "opr") ? "opera" : z(t, "chrome") ? "chrome" : z(t, "safari") ? "safari" : "unknown"
}

function xr() {
  const r = it(),
    t = r === "chromium",
    e = r === "gecko",
    n = window,
    a = navigator,
    s = "connection";
  return t ? X([!("SharedWorker" in n), a[s] && "ontypechange" in a[s], !("sinkId" in new Audio)]) >= 2 : e ? X(["onorientationchange" in n, "orientation" in n, /android/i.test(a.appVersion)]) >= 2 : !1
}

function zr() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function Ur() {
  const r = window;
  return X([!("MediaSettingsRange" in r), "RTCEncodedAudioFrame" in r, "" + r.Intl == "[object Intl]", "" + r.Reflect == "[object Reflect]"]) >= 3
}

function Lr() {
  const r = navigator,
    t = [],
    e = r.language || r.userLanguage || r.browserLanguage || r.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(r.languages)) it() === "chromium" && Ur() || t.push(r.languages);
  else if (typeof r.languages == "string") {
    const n = r.languages;
    n && t.push(n.split(","))
  }
  return t
}

function Cr() {
  if (navigator.mimeTypes === void 0) throw new O(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: r
  } = navigator;
  let t = Object.getPrototypeOf(r) === MimeTypeArray.prototype;
  for (let e = 0; e < r.length; e++) t && (t = Object.getPrototypeOf(r[e]) === MimeType.prototype);
  return t
}
async function Mr() {
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

function Br() {
  if (navigator.plugins === void 0) throw new O(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new O(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function Kr() {
  if (navigator.plugins === void 0) throw new O(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new O(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function $r() {
  const {
    process: r
  } = window, t = "window.process is";
  if (r === void 0) throw new O(-1, `${t} undefined`);
  if (r && typeof r != "object") throw new O(-3, `${t} not an object`);
  return r
}

function Fr() {
  const {
    productSub: r
  } = navigator;
  if (r === void 0) throw new O(-1, "navigator.productSub is undefined");
  return r
}

function Hr() {
  if (navigator.connection === void 0) throw new O(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new O(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function Vr() {
  return navigator.userAgent
}

function Gr() {
  if (navigator.webdriver == null) throw new O(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function Yr() {
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

function Jr() {
  if (window.external === void 0) throw new O(-1, "window.external is undefined");
  const {
    external: r
  } = window;
  if (typeof r.toString != "function") throw new O(-2, "window.external.toString is not a function");
  return r.toString()
}

function Wr() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function Qr() {
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
const Xr = {
  android: xr,
  browserKind: jr,
  browserEngineKind: it,
  documentFocus: zr,
  userAgent: Vr,
  appVersion: Nr,
  rtt: Hr,
  windowSize: Wr,
  pluginsLength: Kr,
  pluginsArray: Br,
  errorTrace: Rr,
  productSub: Fr,
  windowExternal: Jr,
  mimeTypesConsistent: Cr,
  evalLength: Dr,
  webGL: Yr,
  webDriver: Gr,
  languages: Lr,
  notificationPermissions: Mr,
  documentElementKeys: Ir,
  functionBind: Pr,
  process: $r,
  distinctiveProps: Qr
};
class Zr {
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
    const [t, e] = or(this.components, Sr);
    return this.detections = t, e
  }
  async collect() {
    return this.components = await cr(Xr), this.components
  }
}

function en() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const r = new XMLHttpRequest;
    r.open("get", `https://m1.openfpcdn.io/botd/v${sr}/npm-monitoring`, !0), r.send()
  } catch (r) {
    console.error(r)
  }
}
async function tn({
  monitoring: r = !0
} = {}) {
  r && en();
  const t = new Zr;
  return await t.collect(), t
}
let Je = null;
async function rn() {
  return await nn() ? {
    bot: !1
  } : (await an()).detect()
}
async function nn() {
  var e;
  const r = navigator;
  if (!((e = r.brave) != null && e.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(r.userAgent)) return !1;
  try {
    return await r.brave.isBrave()
  } catch {
    return !1
  }
}

function an() {
  return Je || (Je = tn({
    monitoring: !1
  })), Je
}
const ut = "theme";
var ce, ue, le, _e, de, fe, he, pe, me, ge, we, ye, ve;
class sn {
  constructor() {
    v(this, ce, A(!1));
    v(this, ue, A(!1));
    v(this, le, A(!1));
    v(this, _e, A(!1));
    v(this, de, A(!1));
    v(this, fe, A(0));
    v(this, he, A(!1));
    v(this, pe, A($e(on())));
    v(this, me, A(null));
    v(this, ge, A(!1));
    v(this, we, A("custom-winter"));
    v(this, ye, A($e(Date.now())));
    v(this, ve, A(void 0));
    setInterval(() => {
      T(h(this, ye), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(ut), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return E(h(this, ce))
  }
  set dropletsDialogOpen(t) {
    T(h(this, ce), t, !0)
  }
  get prismDialogOpen() {
    return E(h(this, ue))
  }
  set prismDialogOpen(t) {
    T(h(this, ue), t, !0)
  }
  get accountConflictDialogOpen() {
    return E(h(this, le))
  }
  set accountConflictDialogOpen(t) {
    T(h(this, le), t, !0)
  }
  get pendingHistoryDialogOpen() {
    return E(h(this, _e))
  }
  set pendingHistoryDialogOpen(t) {
    T(h(this, _e), t, !0)
  }
  get storeDialogOpen() {
    return E(h(this, de))
  }
  set storeDialogOpen(t) {
    T(h(this, de), t, !0)
  }
  get storeTabIndex() {
    return E(h(this, fe))
  }
  set storeTabIndex(t) {
    T(h(this, fe), t, !0)
  }
  get muted() {
    return E(h(this, he))
  }
  set muted(t) {
    T(h(this, he), t, !0)
  }
  get language() {
    return E(h(this, pe))
  }
  set language(t) {
    T(h(this, pe), t, !0)
  }
  get map() {
    return E(h(this, me))
  }
  set map(t) {
    T(h(this, me), t)
  }
  get automatedClicks() {
    return E(h(this, ge))
  }
  set automatedClicks(t) {
    T(h(this, ge), t, !0)
  }
  get theme() {
    return E(h(this, we))
  }
  set theme(t) {
    T(h(this, we), t, !0), localStorage.setItem(ut, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return E(h(this, ye))
  }
  get captcha() {
    return cn ? E(h(this, ve)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    T(h(this, ve), t, !0)
  }
}
ce = new WeakMap, ue = new WeakMap, le = new WeakMap, _e = new WeakMap, de = new WeakMap, fe = new WeakMap, he = new WeakMap, pe = new WeakMap, me = new WeakMap, ge = new WeakMap, we = new WeakMap, ye = new WeakMap, ve = new WeakMap;
const et = new sn;

function on() {
  if (navigator.languages && navigator.languages.length > 0) {
    const r = navigator.languages.find(t => t.length === 2);
    if (r) return r
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const cn = rr.toLowerCase() !== "false",
  un = `
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
async function ln() {
  try {
    const r = await fetch(`${xt}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!r.ok) return null;
    const t = await r.json(),
      e = await _n(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function _n(r, t) {
  return new Promise(e => {
    const n = new Blob([un], {
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
const zt = 3;
var be, Ee;
class dn {
  constructor() {
    v(this, be, A(null));
    v(this, Ee, A(0))
  }
  get current() {
    return E(h(this, be))
  }
  set current(t) {
    T(h(this, be), t, !0)
  }
  get errorCount() {
    return E(h(this, Ee))
  }
  set errorCount(t) {
    T(h(this, Ee), t, !0)
  }
}
be = new WeakMap, Ee = new WeakMap;
const R = new dn;
async function se(r) {
  if (r === 1) return fn();
  if (r === 2) {
    const t = await Ut();
    return t ? lt("turnstile", t) : !1
  }
  if (r === 3) {
    const t = await hn();
    return t ? lt("hcaptcha", t) : !1
  }
  return r === 4 ? pn() : !1
}
async function fn() {
  for (let r = 0; r < zt; r++) try {
    const t = await ln();
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

function Ut() {
  return Lt(2)
}

function hn() {
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

function pn() {
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

function sR(r) {
  const t = R.current;
  !t || t.tier === 4 || (t.resolve(r), R.current = null)
}

function oR() {
  const r = R.current;
  !r || r.tier === 4 || (R.errorCount += 1, R.errorCount >= zt && (r.resolve(void 0), R.current = null))
}

function cR() {
  const r = R.current;
  !r || r.tier !== 4 || (r.resolve(!0), R.current = null)
}

function uR() {
  const r = R.current;
  r && (r.tier === 4 ? r.resolve(!1) : r.resolve(void 0), R.current = null)
}
var i = (r => (r[r.CONTINUE = 100] = "CONTINUE", r[r.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", r[r.PROCESSING = 102] = "PROCESSING", r[r.EARLY_HINTS = 103] = "EARLY_HINTS", r[r.OK = 200] = "OK", r[r.CREATED = 201] = "CREATED", r[r.ACCEPTED = 202] = "ACCEPTED", r[r.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", r[r.NO_CONTENT = 204] = "NO_CONTENT", r[r.RESET_CONTENT = 205] = "RESET_CONTENT", r[r.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", r[r.MULTI_STATUS = 207] = "MULTI_STATUS", r[r.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", r[r.IM_USED = 226] = "IM_USED", r[r.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", r[r.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", r[r.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", r[r.FOUND = 302] = "FOUND", r[r.SEE_OTHER = 303] = "SEE_OTHER", r[r.NOT_MODIFIED = 304] = "NOT_MODIFIED", r[r.USE_PROXY = 305] = "USE_PROXY", r[r.SWITCH_PROXY = 306] = "SWITCH_PROXY", r[r.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", r[r.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", r[r.BAD_REQUEST = 400] = "BAD_REQUEST", r[r.UNAUTHORIZED = 401] = "UNAUTHORIZED", r[r.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", r[r.FORBIDDEN = 403] = "FORBIDDEN", r[r.NOT_FOUND = 404] = "NOT_FOUND", r[r.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", r[r.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", r[r.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", r[r.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", r[r.CONFLICT = 409] = "CONFLICT", r[r.GONE = 410] = "GONE", r[r.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", r[r.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", r[r.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", r[r.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", r[r.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", r[r.URI_TOO_LONG = 414] = "URI_TOO_LONG", r[r.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", r[r.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", r[r.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", r[r.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", r[r.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", r[r.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", r[r.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", r[r.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", r[r.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", r[r.LOCKED = 423] = "LOCKED", r[r.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", r[r.TOO_EARLY = 425] = "TOO_EARLY", r[r.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", r[r.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", r[r.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", r[r.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", r[r.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", r[r.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", r[r.BAD_GATEWAY = 502] = "BAD_GATEWAY", r[r.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", r[r.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", r[r.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", r[r.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", r[r.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", r[r.LOOP_DETECTED = 508] = "LOOP_DETECTED", r[r.NOT_EXTENDED = 510] = "NOT_EXTENDED", r[r.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", r[r.AWS_ELB_000 = 0] = "AWS_ELB_000", r[r.THIS_IS_FINE = 218] = "THIS_IS_FINE", r[r.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", r[r.METHOD_FAILURE = 420] = "METHOD_FAILURE", r[r.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", r[r.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", r[r.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", r[r.NO_RESPONSE = 444] = "NO_RESPONSE", r[r.RETRY_WITH = 449] = "RETRY_WITH", r[r.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", r[r.REDIRECT_IIS = 451] = "REDIRECT_IIS", r[r.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", r[r.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", r[r.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", r[r.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", r[r.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", r[r.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", r[r.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", r[r.INVALID_TOKEN = 498] = "INVALID_TOKEN", r[r.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", r[r.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", r[r.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", r[r.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", r[r.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", r[r.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", r[r.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", r[r.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", r[r.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", r[r.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", r[r.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", r[r.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", r[r.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", r[r.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", r[r.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", r[r.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", r[r.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", r[r.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", r[r.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", r[r.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", r[r.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", r[r.REQUEST_DENIED = 999] = "REQUEST_DENIED", r))(i || {});
class ae extends Error {}
const mn = () => "A punishment cache reload is already running",
  gn = () => "Um recarregamento do cache de punições já está em andamento",
  wn = () => "处罚缓存重新加载已在进行中",
  yn = () => "Ein Neuladen des Strafen-Caches läuft bereits",
  vn = () => "Ya hay una recarga de la caché de sanciones en curso",
  bn = () => "Un rechargement du cache des sanctions est déjà en cours",
  En = () => "Un ricaricamento della cache delle sanzioni è già in corso",
  On = () => "処罰キャッシュの再読み込みは既に実行中です",
  Tn = () => "Przeładowanie pamięci kar już trwa",
  kn = () => "Перезагрузка кэша наказаний уже выполняется",
  qn = () => "Перезавантаження кешу покарань уже виконується",
  An = () => "Quá trình tải lại bộ nhớ đệm hình phạt đang chạy",
  Sn = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? mn() : e === "pt" ? gn() : e === "ch" ? wn() : e === "de" ? yn() : e === "es" ? vn() : e === "fr" ? bn() : e === "it" ? En() : e === "jp" ? On() : e === "pl" ? Tn() : e === "ru" ? kn() : e === "uk" ? qn() : An()
  },
  Nn = () => "Your account has been suspended for breaking the rules",
  In = () => "Sua conta foi suspensa por quebrar as regras",
  Rn = () => "您的账号因违反规则已被暂停",
  Dn = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  Pn = () => "Tu cuenta ha sido suspendida por infringir las regras",
  jn = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  xn = () => "Il tuo account è stato sospeso per aver infranto le regole",
  zn = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  Un = () => "Twoje konto zostało zawieszone za łamanie zasad",
  Ln = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Cn = () => "Ваш обліковий запис було призупинено за порушення правил",
  Mn = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  _t = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Nn() : e === "pt" ? In() : e === "ch" ? Rn() : e === "de" ? Dn() : e === "es" ? Pn() : e === "fr" ? jn() : e === "it" ? xn() : e === "jp" ? zn() : e === "pl" ? Un() : e === "ru" ? Ln() : e === "uk" ? Cn() : Mn()
  },
  Bn = () => "Alliance name already taken",
  Kn = () => "Já possui uma aliança com esse nome",
  $n = () => "该联盟名称已被占用",
  Fn = () => "Der Allianzname ist bereits vergeben",
  Hn = () => "Ese nombre de alianza ya está en uso",
  Vn = () => "Ce nom d’alliance est déjà pris",
  Gn = () => "Esiste già un'alleanza con questo nome",
  Yn = () => "このアライアンス名は既に使用されています。",
  Jn = () => "Nazwa sojuszu jest już zajęta",
  Wn = () => "Такое название альянса уже используется",
  Qn = () => "Назва альянсу вже зайнята",
  Xn = () => "Tên liên minh đã được sử dụng",
  dt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Bn() : e === "pt" ? Kn() : e === "ch" ? $n() : e === "de" ? Fn() : e === "es" ? Hn() : e === "fr" ? Vn() : e === "it" ? Gn() : e === "jp" ? Yn() : e === "pl" ? Jn() : e === "ru" ? Wn() : e === "uk" ? Qn() : Xn()
  },
  Zn = () => "Alliance name exceeded the maximum number of characters",
  ea = () => "O nome da aliança excedeu o número máximo de caracteres",
  ta = () => "联盟名称超过最大字符数限制",
  ra = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  na = () => "El nombre de la alianza superó el número máximo de caracteres",
  aa = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  ia = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  sa = () => "アライアンス名が最大文字数を超えています。",
  oa = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  ca = () => "Название альянса превышает максимальную длину",
  ua = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  la = () => "Tên liên minh vượt quá số ký tự cho phép",
  ft = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Zn() : e === "pt" ? ea() : e === "ch" ? ta() : e === "de" ? ra() : e === "es" ? na() : e === "fr" ? aa() : e === "it" ? ia() : e === "jp" ? sa() : e === "pl" ? oa() : e === "ru" ? ca() : e === "uk" ? ua() : la()
  },
  _a = () => "Alliance with empty name",
  da = () => "Aliança com nome vazio",
  fa = () => "名称为空的联盟",
  ha = () => "Allianz mit leerem Namen",
  pa = () => "Alianza con nombre vacío",
  ma = () => "Alliance avec nom vide",
  ga = () => "Alleanza con nome vuoto",
  wa = () => "名前が空のアライアンスです。",
  ya = () => "Sojusz z pustą nazwą",
  va = () => "Альянс с пустым названием",
  ba = () => "Альянс із порожньою назвою",
  Ea = () => "Liên minh không có tên",
  Oa = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? _a() : e === "pt" ? da() : e === "ch" ? fa() : e === "de" ? ha() : e === "es" ? pa() : e === "fr" ? ma() : e === "it" ? ga() : e === "jp" ? wa() : e === "pl" ? ya() : e === "ru" ? va() : e === "uk" ? ba() : Ea()
  },
  Ta = () => "Botting",
  ka = () => "Uso de bots",
  qa = () => "脚本",
  Aa = () => "Bot-Nutzung",
  Sa = () => "Botting",
  Na = () => "Bots",
  Ia = () => "Uso di bot",
  Ra = () => "ボット使用",
  Da = () => "Botting",
  Pa = () => "Боттинг",
  ja = () => "Боти",
  xa = () => "Botting",
  za = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ta() : e === "pt" ? ka() : e === "ch" ? qa() : e === "de" ? Aa() : e === "es" ? Sa() : e === "fr" ? Na() : e === "it" ? Ia() : e === "jp" ? Ra() : e === "pl" ? Da() : e === "ru" ? Pa() : e === "uk" ? ja() : xa()
  },
  Ua = () => "Use of software to completely automate painting",
  La = () => "Uso de software para pintar de forma completamente automatizada ",
  Ca = () => "使用软件完全自动化绘制",
  Ma = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  Ba = () => "Uso de software para automatizar completamente la pintura",
  Ka = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  $a = () => "Uso di software per dipingere in modo completamente automatizzato",
  Fa = () => "ペイントを完全に自動化するソフトウェアの使用",
  Ha = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  Va = () => "Использование программ для полной автоматизации рисования",
  Ga = () => "Використання програм, які повністю автоматизують малювання",
  Ya = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  Ja = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ua() : e === "pt" ? La() : e === "ch" ? Ca() : e === "de" ? Ma() : e === "es" ? Ba() : e === "fr" ? Ka() : e === "it" ? $a() : e === "jp" ? Fa() : e === "pl" ? Ha() : e === "ru" ? Va() : e === "uk" ? Ga() : Ya()
  },
  Wa = () => "Breaking the rules",
  Qa = () => "Quebrar as regras",
  Xa = () => "违反规则",
  Za = () => "Regeln brechen",
  ei = () => "Romper las reglas",
  ti = () => "Violation des règles",
  ri = () => "Violazione delle regole",
  ni = () => "ルール違反",
  ai = () => "Łamanie zasad",
  ii = () => "Нарушение правил",
  si = () => "Порушення правил",
  oi = () => "Vi phạm luật",
  ci = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Wa() : e === "pt" ? Qa() : e === "ch" ? Xa() : e === "de" ? Za() : e === "es" ? ei() : e === "fr" ? ti() : e === "it" ? ri() : e === "jp" ? ni() : e === "pl" ? ai() : e === "ru" ? ii() : e === "uk" ? si() : oi()
  },
  ui = () => "You have broken one of Wplace's rules",
  li = () => "Você quebrou uma das regras do Wplace",
  _i = () => "你违反了 Wplace 的一项规则",
  di = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  fi = () => "Has infringido una de las reglas de Wplace",
  hi = () => "Vous avez enfreint l’une des règles de Wplace",
  pi = () => "Hai infranto una delle regole di Wplace",
  mi = () => "Wplaceのルールのいずれかに違反しました。",
  gi = () => "Złamałeś jedną z zasad Wplace",
  wi = () => "Вы нарушили одно из правил Wplace",
  yi = () => "Ви порушили одне з правил Wplace",
  vi = () => "Bạn đã vi phạm một trong các luật của Wplace",
  bi = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ui() : e === "pt" ? li() : e === "ch" ? _i() : e === "de" ? di() : e === "es" ? fi() : e === "fr" ? hi() : e === "it" ? pi() : e === "jp" ? mi() : e === "pl" ? gi() : e === "ru" ? wi() : e === "uk" ? yi() : vi()
  },
  Ei = () => "You cannot paint over event pixels",
  Oi = () => "Você não pode pintar sobre pixels de eventos",
  Ti = () => "你不能覆盖活动像素",
  ki = () => "Du kannst nicht über Event-Pixel malen",
  qi = () => "No puedes pintar sobre píxeles de evento",
  Ai = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  Si = () => "Non puoi dipingere sopra i pixel dell'evento",
  Ni = () => "イベント用のピクセルの上には塗れません。",
  Ii = () => "Nie możesz malować po pikselach wydarzenia",
  Ri = () => "Вы не можете рисовать по пикселям события",
  Di = () => "Ви не можете малювати поверх пікселів події",
  Pi = () => "Bạn không thể tô lên pixel sự kiện",
  ht = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ei() : e === "pt" ? Oi() : e === "ch" ? Ti() : e === "de" ? ki() : e === "es" ? qi() : e === "fr" ? Ai() : e === "it" ? Si() : e === "jp" ? Ni() : e === "pl" ? Ii() : e === "ru" ? Ri() : e === "uk" ? Di() : Pi()
  },
  ji = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  xi = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  zi = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  Ui = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  Li = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  Ci = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  Mi = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Bi = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Ki = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  $i = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  Fi = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Hi = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Vi = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ji() : e === "pt" ? xi() : e === "ch" ? zi() : e === "de" ? Ui() : e === "es" ? Li() : e === "fr" ? Ci() : e === "it" ? Mi() : e === "jp" ? Bi() : e === "pl" ? Ki() : e === "ru" ? $i() : e === "uk" ? Fi() : Hi()
  },
  Gi = () => "Challenge verification not completed",
  Yi = () => "Verificação do desafio não concluída",
  Ji = () => "挑战验证未完成",
  Wi = () => "Herausforderungsverifizierung nicht abgeschlossen",
  Qi = () => "Verificación del desafío no completada",
  Xi = () => "Vérification du défi non terminée",
  Zi = () => "Verifica della sfida non completata",
  es = () => "チャレンジ検証が完了していません",
  ts = () => "Weryfikacja wyzwania niezakończona",
  rs = () => "Верификация вызова не завершена",
  ns = () => "Перевірку виклику не завершено",
  as = () => "Xác minh thử thách chưa hoàn thành",
  ee = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Gi() : e === "pt" ? Yi() : e === "ch" ? Ji() : e === "de" ? Wi() : e === "es" ? Qi() : e === "fr" ? Xi() : e === "it" ? Zi() : e === "jp" ? es() : e === "pl" ? ts() : e === "ru" ? rs() : e === "uk" ? ns() : as()
  },
  is = () => "Couldn't complete the purchase. This item does not exist.",
  ss = () => "Não foi possível concluir a compra. Este item não existe.",
  os = () => "无法完成购买。该物品不存在。",
  cs = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  us = () => "No se pudo completar la compra. Este ítem no existe.",
  ls = () => "Achat impossible. Cet objet n’existe pas.",
  _s = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  ds = () => "購入を完了できませんでした。このアイテムは存在しません。",
  fs = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  hs = () => "Не удалось завершить покупку. Этот предмет не существует.",
  ps = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  ms = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  Ct = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? is() : e === "pt" ? ss() : e === "ch" ? os() : e === "de" ? cs() : e === "es" ? us() : e === "fr" ? ls() : e === "it" ? _s() : e === "jp" ? ds() : e === "pl" ? fs() : e === "ru" ? hs() : e === "uk" ? ps() : ms()
  },
  gs = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  ws = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  ys = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  vs = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  bs = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  Es = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  Os = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  Ts = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  ks = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  qs = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  As = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  Ss = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  Ns = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? gs() : e === "pt" ? ws() : e === "ch" ? ys() : e === "de" ? vs() : e === "es" ? bs() : e === "fr" ? Es() : e === "it" ? Os() : e === "jp" ? Ts() : e === "pl" ? ks() : e === "ru" ? qs() : e === "uk" ? As() : Ss()
  },
  Is = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  Rs = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  Ds = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  Ps = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  js = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  xs = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  zs = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  Us = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  Ls = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  Cs = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  Ms = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  Bs = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  pt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Is() : e === "pt" ? Rs() : e === "ch" ? Ds() : e === "de" ? Ps() : e === "es" ? js() : e === "fr" ? xs() : e === "it" ? zs() : e === "jp" ? Us() : e === "pl" ? Ls() : e === "ru" ? Cs() : e === "uk" ? Ms() : Bs()
  },
  Ks = () => "Doxxing",
  $s = () => "Doxxing",
  Fs = () => "人肉搜索",
  Hs = () => "Doxxing",
  Vs = () => "Doxxing",
  Gs = () => "Doxxing",
  Ys = () => "Doxxing",
  Js = () => "ドックス（Doxxing）",
  Ws = () => "Doxxing",
  Qs = () => "Докcинг",
  Xs = () => "Докcинг",
  Zs = () => "Doxxing",
  eo = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ks() : e === "pt" ? $s() : e === "ch" ? Fs() : e === "de" ? Hs() : e === "es" ? Vs() : e === "fr" ? Gs() : e === "it" ? Ys() : e === "jp" ? Js() : e === "pl" ? Ws() : e === "ru" ? Qs() : e === "uk" ? Xs() : Zs()
  },
  to = () => "Released other's personal information without their consent",
  ro = () => "Vazar informações pessoais de terceiros sem consentimento",
  no = () => "在未获同意的情况下公开他人个人信息",
  ao = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  io = () => "Divulgó información personal de otra persona sin su consentimiento",
  so = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  oo = () => "Diffusione di informazioni personali di terzi senza consenso",
  co = () => "他人の個人情報を同意なく公開した。",
  uo = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  lo = () => "Публикация личной информации других людей без их согласия",
  _o = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  fo = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  ho = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? to() : e === "pt" ? ro() : e === "ch" ? no() : e === "de" ? ao() : e === "es" ? io() : e === "fr" ? so() : e === "it" ? oo() : e === "jp" ? co() : e === "pl" ? uo() : e === "ru" ? lo() : e === "uk" ? _o() : fo()
  },
  po = () => "This was already resolved. Reload the page to see your account.",
  mo = () => "Isso já foi resolvido. Recarregue a página para ver sua conta.",
  go = () => "此问题已解决。请刷新页面以查看您的账户。",
  wo = () => "Dies wurde bereits gelöst. Laden Sie die Seite neu, um Ihr Konto zu sehen.",
  yo = () => "Esto ya está resuelto. Recarga la página para ver tu cuenta.",
  vo = () => "C'était déjà résolu. Rechargez la page pour voir votre compte.",
  bo = () => "Questo è stato già risolto. Ricarica la pagina per vedere il tuo account.",
  Eo = () => "これはすでに解決済みです。アカウントを表示するには、ページを再読み込みしてください。",
  Oo = () => "Problem został już rozwiązany. Odśwież stronę, aby zobaczyć swoje konto.",
  To = () => "Это уже было решено. Перезагрузите страницу, чтобы увидеть свою учетную запись.",
  ko = () => "Це вже було вирішено. Перезавантажте сторінку, щоб побачити свій обліковий запис.",
  qo = () => "Vấn đề này đã được giải quyết. Tải lại trang để xem tài khoản của bạn.",
  Ao = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? po() : e === "pt" ? mo() : e === "ch" ? go() : e === "de" ? wo() : e === "es" ? yo() : e === "fr" ? vo() : e === "it" ? bo() : e === "jp" ? Eo() : e === "pl" ? Oo() : e === "ru" ? To() : e === "uk" ? ko() : qo()
  },
  So = () => "These accounts can't be merged automatically. Contact us at contact@wplace.live and we'll sort it out.",
  No = () => "Estas contas não podem ser mescladas automaticamente. Entre em contato conosco em contact@wplace.live e resolveremos isso.",
  Io = () => "这些账户无法自动合并。请发送邮件至 contact@wplace.live 联系我们，我们将妥善处理。",
  Ro = () => "Diese Konten können nicht automatisch zusammengeführt werden. Kontaktieren Sie uns unter contact@wplace.live und wir kümmern uns darum.",
  Do = () => "Estas cuentas no se pueden fusionar automáticamente. Contáctanos en contact@wplace.live y lo solucionaremos.",
  Po = () => "Ces comptes ne peuvent pas être fusionnés automatiquement. Contactez-nous à contact@wplace.live et nous nous en occuperons.",
  jo = () => "Questi account non possono essere uniti automaticamente. Contattaci a contact@wplace.live e sistemeremo tutto.",
  xo = () => "これらのアカウントは自動的に統合できません。contact@wplace.liveまでお問い合わせください。弊社が対応いたします。",
  zo = () => "Te konta nie mogą zostać automatycznie scalone. Skontaktuj się z nami pod adresem contact@wplace.live, a my się tym zajmiemy.",
  Uo = () => "Эти аккаунты не могут быть объединены автоматически. Свяжитесь с нами по адресу contact@wplace.live, и мы разберемся.",
  Lo = () => "Ці облікові записи не можуть бути об'єднані автоматично. Зв'яжіться з нами за адресою contact@wplace.live, і ми все владнаємо.",
  Co = () => "Các tài khoản này không thể hợp nhất tự động. Hãy liên hệ với chúng tôi tại contact@wplace.live và chúng tôi sẽ giải quyết.",
  Mo = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? So() : e === "pt" ? No() : e === "ch" ? Io() : e === "de" ? Ro() : e === "es" ? Do() : e === "fr" ? Po() : e === "it" ? jo() : e === "jp" ? xo() : e === "pl" ? zo() : e === "ru" ? Uo() : e === "uk" ? Lo() : Co()
  },
  Bo = () => "This email is already in use.",
  Ko = () => "Este e-mail já está em uso.",
  $o = () => "This email is already in use.",
  Fo = () => "This email is already in use.",
  Ho = () => "Este correo electrónico ya está en uso.",
  Vo = () => "This email is already in use.",
  Go = () => "Questa email è già in uso.",
  Yo = () => "This email is already in use.",
  Jo = () => "This email is already in use.",
  Wo = () => "This email is already in use.",
  Qo = () => "This email is already in use.",
  Xo = () => "This email is already in use.",
  Zo = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Bo() : e === "pt" ? Ko() : e === "ch" ? $o() : e === "de" ? Fo() : e === "es" ? Ho() : e === "fr" ? Vo() : e === "it" ? Go() : e === "jp" ? Yo() : e === "pl" ? Jo() : e === "ru" ? Wo() : e === "uk" ? Qo() : Xo()
  },
  ec = r => `This email is already in use by user #${r.userId}.`,
  tc = r => `Este e-mail já está em uso pelo usuário #${r.userId}.`,
  rc = r => `This email is already in use by user #${r.userId}.`,
  nc = r => `This email is already in use by user #${r.userId}.`,
  ac = r => `Este correo electrónico ya está en uso por el usuario #${r.userId}.`,
  ic = r => `This email is already in use by user #${r.userId}.`,
  sc = r => `Questa email è già in uso dall'utente #${r.userId}.`,
  oc = r => `This email is already in use by user #${r.userId}.`,
  cc = r => `This email is already in use by user #${r.userId}.`,
  uc = r => `This email is already in use by user #${r.userId}.`,
  lc = r => `This email is already in use by user #${r.userId}.`,
  _c = r => `This email is already in use by user #${r.userId}.`,
  dc = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ec(r) : e === "pt" ? tc(r) : e === "ch" ? rc(r) : e === "de" ? nc(r) : e === "es" ? ac(r) : e === "fr" ? ic(r) : e === "it" ? sc(r) : e === "jp" ? oc(r) : e === "pl" ? cc(r) : e === "ru" ? uc(r) : e === "uk" ? lc(r) : _c(r)
  },
  fc = () => "Enter a valid email address.",
  hc = () => "Informe um endereço de e-mail válido.",
  pc = () => "Enter a valid email address.",
  mc = () => "Enter a valid email address.",
  gc = () => "Introduce una dirección de correo electrónico válida.",
  wc = () => "Enter a valid email address.",
  yc = () => "Inserisci un indirizzo email valido.",
  vc = () => "Enter a valid email address.",
  bc = () => "Enter a valid email address.",
  Ec = () => "Enter a valid email address.",
  Oc = () => "Enter a valid email address.",
  Tc = () => "Enter a valid email address.",
  kc = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? fc() : e === "pt" ? hc() : e === "ch" ? pc() : e === "de" ? mc() : e === "es" ? gc() : e === "fr" ? wc() : e === "it" ? yc() : e === "jp" ? vc() : e === "pl" ? bc() : e === "ru" ? Ec() : e === "uk" ? Oc() : Tc()
  },
  qc = r => `Error while painting: ${r.err}`,
  Ac = r => `Erro enquanto pinta: ${r.err}`,
  Sc = r => `绘制时出错：${r.err}`,
  Nc = r => `Fehler beim Malen: ${r.err}`,
  Ic = r => `Error al pintar: ${r.err}`,
  Rc = r => `Erreur lors de la peinture : ${r.err}`,
  Dc = r => `Errore durante la pittura: ${r.err}`,
  Pc = r => `ペイント中にエラーが発生しました: ${r.err}`,
  jc = r => `Błąd podczas malowania: ${r.err}`,
  xc = r => `Ошибка при рисовании: ${r.err}`,
  zc = r => `Помилка під час малювання: ${r.err}`,
  Uc = r => `Lỗi khi tô: ${r.err}`,
  Lc = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? qc(r) : e === "pt" ? Ac(r) : e === "ch" ? Sc(r) : e === "de" ? Nc(r) : e === "es" ? Ic(r) : e === "fr" ? Rc(r) : e === "it" ? Dc(r) : e === "jp" ? Pc(r) : e === "pl" ? jc(r) : e === "ru" ? xc(r) : e === "uk" ? zc(r) : Uc(r)
  },
  Cc = () => "Exceeded maximum number of characters",
  Mc = () => "Excedeu o número máximo de caracteres permitidos",
  Bc = () => "超出最大字符数",
  Kc = () => "Maximale Zeichenanzahl überschritten",
  $c = () => "Se excedió el número máximo de caracteres",
  Fc = () => "Nombre maximal de caractères dépassé",
  Hc = () => "Numero massimo di caratteri superato",
  Vc = () => "最大文字数を超過しました",
  Gc = () => "Przekroczono maksymalną liczbę znaków",
  Yc = () => "Превышено максимальное количество символов",
  Jc = () => "Перевищено максимальну кількість символів",
  Wc = () => "Đã vượt quá số ký tự tối đa",
  Qc = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Cc() : e === "pt" ? Mc() : e === "ch" ? Bc() : e === "de" ? Kc() : e === "es" ? $c() : e === "fr" ? Fc() : e === "it" ? Hc() : e === "jp" ? Vc() : e === "pl" ? Gc() : e === "ru" ? Yc() : e === "uk" ? Jc() : Wc()
  },
  Xc = () => "Verification code expired. Please request a new one.",
  Zc = () => "Código de verificação expirado. Por favor, solicite um novo.",
  eu = () => "验证码已过期，请重新获取。",
  tu = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  ru = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  nu = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  au = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  iu = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  su = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  ou = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  cu = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  uu = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  lu = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Xc() : e === "pt" ? Zc() : e === "ch" ? eu() : e === "de" ? tu() : e === "es" ? ru() : e === "fr" ? nu() : e === "it" ? au() : e === "jp" ? iu() : e === "pl" ? su() : e === "ru" ? ou() : e === "uk" ? cu() : uu()
  },
  _u = () => "Griefing",
  du = () => "Griefing",
  fu = () => "破坏行为",
  hu = () => "Griefing",
  pu = () => "Griefing",
  mu = () => "Griefing",
  gu = () => "Griefing",
  wu = () => "グリーフィング",
  yu = () => "Griefing",
  vu = () => "Гриферство",
  bu = () => "Гріфінг",
  Eu = () => "Griefing",
  Ou = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? _u() : e === "pt" ? du() : e === "ch" ? fu() : e === "de" ? hu() : e === "es" ? pu() : e === "fr" ? mu() : e === "it" ? gu() : e === "jp" ? wu() : e === "pl" ? yu() : e === "ru" ? vu() : e === "uk" ? bu() : Eu()
  },
  Tu = () => "Messed up with other's artworks",
  ku = () => "Estragou os desenhos dos outros",
  qu = () => "破坏了他人的作品",
  Au = () => "Kunstwerke anderer beschädigt",
  Su = () => "Arruinó las obras de arte de otros",
  Nu = () => "A abîmé les œuvres des autres",
  Iu = () => "Ha rovinato i disegni degli altri",
  Ru = () => "他人の作品を荒らした",
  Du = () => "Zniszczył prace innych",
  Pu = () => "Испортил чужие рисунки",
  ju = () => "Зіпсував роботи інших",
  xu = () => "Phá hỏng tranh của người khác",
  zu = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Tu() : e === "pt" ? ku() : e === "ch" ? qu() : e === "de" ? Au() : e === "es" ? Su() : e === "fr" ? Nu() : e === "it" ? Iu() : e === "jp" ? Ru() : e === "pl" ? Du() : e === "ru" ? Pu() : e === "uk" ? ju() : xu()
  },
  Uu = () => "Hate speech",
  Lu = () => "Discurso de Ódio",
  Cu = () => "仇恨言论",
  Mu = () => "Hassrede",
  Bu = () => "Discurso de odio",
  Ku = () => "Discours haineux",
  $u = () => "Discorso d'odio",
  Fu = () => "ヘイトスピーチ",
  Hu = () => "Mowa nienawiści",
  Vu = () => "Речь ненависти",
  Gu = () => "Мова ворожнечі",
  Yu = () => "Ngôn từ thù hằn",
  Ju = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Uu() : e === "pt" ? Lu() : e === "ch" ? Cu() : e === "de" ? Mu() : e === "es" ? Bu() : e === "fr" ? Ku() : e === "it" ? $u() : e === "jp" ? Fu() : e === "pl" ? Hu() : e === "ru" ? Vu() : e === "uk" ? Gu() : Yu()
  },
  Wu = () => "Racism, homophobia, hate symbols, etc",
  Qu = () => "Racismo, homofobia, símbolos de ódio, etc.",
  Xu = () => "种族主义、恐同、仇恨符号等",
  Zu = () => "Rassismus, Homophobie, Hasssymbole usw.",
  el = () => "Racismo, homofobia, símbolos de odio, etc.",
  tl = () => "Racisme, homophobie, symboles haineux, etc.",
  rl = () => "Razzismo, omofobia, simboli d'odio, ecc.",
  nl = () => "人種差別、同性愛嫌悪、ヘイトシンボルなど",
  al = () => "Rasizm, homofobia, symbole nienawiści itp.",
  il = () => "Расизм, гомофобия, символы ненависти и т. п.",
  sl = () => "Расизм, гомофобія, символи ненависті тощо",
  ol = () => "Phân biệt chủng tộc, kỳ thị đồng tính, biểu tượng thù ghét, v.v.",
  cl = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Wu() : e === "pt" ? Qu() : e === "ch" ? Xu() : e === "de" ? Zu() : e === "es" ? el() : e === "fr" ? tl() : e === "it" ? rl() : e === "jp" ? nl() : e === "pl" ? al() : e === "ru" ? il() : e === "uk" ? sl() : ol()
  },
  ul = () => "Inappropriate content",
  ll = () => "Conteúdo inapropriado",
  _l = () => "不当内容",
  dl = () => "Unangemessene Inhalte",
  fl = () => "Contenido inapropiado",
  hl = () => "Contenu inapproprié",
  pl = () => "Contenuto inappropriato",
  ml = () => "不適切なコンテンツ",
  gl = () => "Nieodpowiednie treści",
  wl = () => "Неприемлемый контент",
  yl = () => "Неприйнятний вміст",
  vl = () => "Nội dung không phù hợp",
  bl = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ul() : e === "pt" ? ll() : e === "ch" ? _l() : e === "de" ? dl() : e === "es" ? fl() : e === "fr" ? hl() : e === "it" ? pl() : e === "jp" ? ml() : e === "pl" ? gl() : e === "ru" ? wl() : e === "uk" ? yl() : vl()
  },
  El = () => "Explicit or illegal content, severe slurs",
  Ol = () => "Conteúdo explícito ou ilegal, insultos graves",
  Tl = () => "露骨或非法内容、严重的侮辱性言论",
  kl = () => "Expliziter oder illegaler Inhalt, schwere Beleidigungen",
  ql = () => "Contenido explícito o ilegal, insultos graves",
  Al = () => "Contenu explicite ou illégal, insultes graves",
  Sl = () => "Contenuto esplicito o illegale, insulti gravi",
  Nl = () => "露骨または違法なコンテンツ、ひどい侮辱・中傷",
  Il = () => "Treści jawnie seksualne lub nielegalne, poważne obelgi",
  Rl = () => "Откровенный или незаконный контент, грубые оскорбления",
  Dl = () => "Відвертий або незаконний вміст, грубі образи",
  Pl = () => "Nội dung phản cảm hoặc bất hợp pháp, lời lẽ lăng mạ nghiêm trọng",
  jl = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? El() : e === "pt" ? Ol() : e === "ch" ? Tl() : e === "de" ? kl() : e === "es" ? ql() : e === "fr" ? Al() : e === "it" ? Sl() : e === "jp" ? Nl() : e === "pl" ? Il() : e === "ru" ? Rl() : e === "uk" ? Dl() : Pl()
  },
  xl = () => "Invalid captcha. Please try again.",
  zl = () => "Captcha inválido. Por favor, tente novamente.",
  Ul = () => "验证码无效，请重试。",
  Ll = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  Cl = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  Ml = () => "Captcha invalide. Veuillez réessayer.",
  Bl = () => "Captcha non valido. Riprova.",
  Kl = () => "キャプチャが無効です。もう一度お試しください。",
  $l = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  Fl = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  Hl = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Vl = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Gl = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? xl() : e === "pt" ? zl() : e === "ch" ? Ul() : e === "de" ? Ll() : e === "es" ? Cl() : e === "fr" ? Ml() : e === "it" ? Bl() : e === "jp" ? Kl() : e === "pl" ? $l() : e === "ru" ? Fl() : e === "uk" ? Hl() : Vl()
  },
  Yl = () => "Invalid challenge response",
  Jl = () => "Resposta de desafio inválida",
  Wl = () => "质询响应无效",
  Ql = () => "Ungültige Challenge-Antwort",
  Xl = () => "Respuesta de desafío inválida",
  Zl = () => "Réponse au défi invalide",
  e_ = () => "Risposta alla sfida non valida",
  t_ = () => "無効なチャレンジ応答",
  r_ = () => "Nieprawidłowa odpowiedź na wyzwanie",
  n_ = () => "Неверный ответ на вызов",
  a_ = () => "Недійсна відповідь на виклик",
  i_ = () => "Phản hồi thử thách không hợp lệ",
  s_ = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Yl() : e === "pt" ? Jl() : e === "ch" ? Wl() : e === "de" ? Ql() : e === "es" ? Xl() : e === "fr" ? Zl() : e === "it" ? e_() : e === "jp" ? t_() : e === "pl" ? r_() : e === "ru" ? n_() : e === "uk" ? a_() : i_()
  },
  o_ = () => "The verification code is incorrect. Please check it and try again.",
  c_ = () => "Código inválido",
  u_ = () => "验证码不正确。请检查后重试。",
  l_ = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  __ = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  d_ = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  f_ = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  h_ = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  p_ = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  m_ = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  g_ = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  w_ = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  y_ = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? o_() : e === "pt" ? c_() : e === "ch" ? u_() : e === "de" ? l_() : e === "es" ? __() : e === "fr" ? d_() : e === "it" ? f_() : e === "jp" ? h_() : e === "pl" ? p_() : e === "ru" ? m_() : e === "uk" ? g_() : w_()
  },
  v_ = () => "Invalid discord.",
  b_ = () => "Discord inválido.",
  E_ = () => "无效的 Discord。",
  O_ = () => "Ungültiger Discord.",
  T_ = () => "Discord inválido.",
  k_ = () => "Discord invalide.",
  q_ = () => "Discord non valido.",
  A_ = () => "無効なDiscordアカウントです。",
  S_ = () => "Nieprawidłowy Discord.",
  N_ = () => "Неверный Discord.",
  I_ = () => "Некоректний Discord.",
  R_ = () => "Discord không hợp lệ.",
  D_ = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? v_() : e === "pt" ? b_() : e === "ch" ? E_() : e === "de" ? O_() : e === "es" ? T_() : e === "fr" ? k_() : e === "it" ? q_() : e === "jp" ? A_() : e === "pl" ? S_() : e === "ru" ? N_() : e === "uk" ? I_() : R_()
  },
  P_ = () => "The name contains disallowed characters or words. Please choose a different name.",
  j_ = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  x_ = () => "名称包含禁止的字符或词语，请选择其他名称。",
  z_ = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  U_ = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  L_ = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  C_ = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  M_ = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  B_ = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  K_ = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  $_ = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  F_ = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  Mt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? P_() : e === "pt" ? j_() : e === "ch" ? x_() : e === "de" ? z_() : e === "es" ? U_() : e === "fr" ? L_() : e === "it" ? C_() : e === "jp" ? M_() : e === "pl" ? B_() : e === "ru" ? K_() : e === "uk" ? $_() : F_()
  },
  H_ = () => "Please enter a valid phone number with country code.",
  V_ = () => "Insira um número de telefone válido com código do país.",
  G_ = () => "请输入带国家代码的有效电话号码。",
  Y_ = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  J_ = () => "Introduce un número de teléfono válido con código de país.",
  W_ = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  Q_ = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  X_ = () => "国番号付きの有効な電話番号を入力してください。",
  Z_ = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  ed = () => "Введите действительный номер телефона с кодом страны.",
  td = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  rd = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  nd = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? H_() : e === "pt" ? V_() : e === "ch" ? G_() : e === "de" ? Y_() : e === "es" ? J_() : e === "fr" ? W_() : e === "it" ? Q_() : e === "jp" ? X_() : e === "pl" ? Z_() : e === "ru" ? ed() : e === "uk" ? td() : rd()
  },
  ad = () => "Phone number not supported. Please try another number.",
  id = () => "Número de telefone não suportado. Por favor, tente outro número.",
  sd = () => "不支持此电话号码。请尝试其他号码。",
  od = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  cd = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  ud = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  ld = () => "Numero di telefono non supportato. Prova con un altro numero.",
  _d = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  dd = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  fd = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  hd = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  pd = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  md = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ad() : e === "pt" ? id() : e === "ch" ? sd() : e === "de" ? od() : e === "es" ? cd() : e === "fr" ? ud() : e === "it" ? ld() : e === "jp" ? _d() : e === "pl" ? dd() : e === "ru" ? fd() : e === "uk" ? hd() : pd()
  },
  gd = () => "The new leader must be a member of the alliance",
  wd = () => "O novo líder deve ser um membro da aliança",
  yd = () => "新盟主必须是联盟成员",
  vd = () => "Der neue Anführer muss Mitglied der Allianz sein",
  bd = () => "El nuevo líder debe ser miembro de la alianza",
  Ed = () => "Le nouveau chef doit être membre de l’alliance",
  Od = () => "Il nuovo leader deve essere un membro dell'alleanza",
  Td = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  kd = () => "Nowy lider musi być członkiem sojuszu",
  qd = () => "Новый лидер должен быть участником альянса",
  Ad = () => "Новий лідер має бути учасником альянсу",
  Sd = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Nd = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? gd() : e === "pt" ? wd() : e === "ch" ? yd() : e === "de" ? vd() : e === "es" ? bd() : e === "fr" ? Ed() : e === "it" ? Od() : e === "jp" ? Td() : e === "pl" ? kd() : e === "ru" ? qd() : e === "uk" ? Ad() : Sd()
  },
  Id = () => "Leaderboard is temporarily disabled",
  Rd = () => "O ranking está temporariamente desativado",
  Dd = () => "排行榜已暂时停用",
  Pd = () => "Die Bestenliste ist vorübergehend deaktiviert",
  jd = () => "La clasificación está deshabilitada temporalmente",
  xd = () => "Le classement est temporairement désactivé",
  zd = () => "La classifica è temporaneamente disattivata",
  Ud = () => "ランキングは一時的に無効になっています。",
  Ld = () => "Ranking jest tymczasowo wyłączony",
  Cd = () => "Таблица лидеров временно отключена",
  Md = () => "Таблиця лідерів тимчасово вимкнена",
  Bd = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  G = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Id() : e === "pt" ? Rd() : e === "ch" ? Dd() : e === "de" ? Pd() : e === "es" ? jd() : e === "fr" ? xd() : e === "it" ? zd() : e === "jp" ? Ud() : e === "pl" ? Ld() : e === "ru" ? Cd() : e === "uk" ? Md() : Bd()
  },
  Kd = () => "Location name is too big (max. 128 characters)",
  $d = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Fd = () => "位置名称过长（最大 128 个字符）",
  Hd = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Vd = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Gd = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Yd = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Jd = () => "場所の名前が長すぎます（最大128文字）。",
  Wd = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  Qd = () => "Название локации слишком длинное (макс. 128 символов)",
  Xd = () => "Назва локації надто довга (макс. 128 символів)",
  Zd = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  ef = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Kd() : e === "pt" ? $d() : e === "ch" ? Fd() : e === "de" ? Hd() : e === "es" ? Vd() : e === "fr" ? Gd() : e === "it" ? Yd() : e === "jp" ? Jd() : e === "pl" ? Wd() : e === "ru" ? Qd() : e === "uk" ? Xd() : Zd()
  },
  tf = () => "Multi-accounting",
  rf = () => "Múltiplas contas",
  nf = () => "多账号",
  af = () => "Multi-Accounting",
  sf = () => "Multi-cuentas",
  of = () => "Multi-comptes",
  cf = () => "Multi-account",
  uf = () => "複数アカウント使用",
  lf = () => "Multi-konta",
  _f = () => "Мультиаккаунт",
  df = () => "Мультиакаунтинг",
  ff = () => "Nhiều tài khoản",
  hf = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? tf() : e === "pt" ? rf() : e === "ch" ? nf() : e === "de" ? af() : e === "es" ? sf() : e === "fr" ? of() : e === "it" ? cf() : e === "jp" ? uf() : e === "pl" ? lf() : e === "ru" ? _f() : e === "uk" ? df() : ff()
  },
  pf = () => "Paint with more than one account or using virtual machines, residential proxies, or multi-accounting browsers",
  mf = () => "Pintar com mais de uma conta ou usando máquinas virtuais, proxies residenciais ou navegadores multi-conta",
  gf = () => "使用多个账号绘制像素，或使用虚拟机、住宅代理或多账号浏览器",
  wf = () => "Mehr als ein Konto zum Malen verwenden oder virtuelle Maschinen, Residential-Proxys oder Multi-Accounting-Browser nutzen",
  yf = () => "Pintar con más de una cuenta o usar máquinas virtuales, proxies residenciales o navegadores multicuenta",
  vf = () => "Utiliser plus d’un compte pour peindre, ou utiliser des machines virtuelles, des proxys résidentiels ou des navigateurs multi-comptes",
  bf = () => "Usare più di un account per dipingere, oppure usare macchine virtuali, proxy residenziali o browser multi-account",
  Ef = () => "複数のアカウントを使ってピクセルを塗る、または仮想マシン、住宅プロキシ、マルチアカウントブラウザを使用する",
  Of = () => "Malowanie pikseli na więcej niż jednym koncie lub przy użyciu maszyn wirtualnych, proxy residential lub przeglądarek multi-kontowych",
  Tf = () => "Рисование с более чем одного аккаунта или с использованием виртуальных машин, резидентных прокси или мультиаккаунт-браузеров",
  kf = () => "Малювання з більш ніж одного акаунта або з використанням віртуальних машин, резидентних проксі чи мультиакаунт-браузерів",
  qf = () => "Vẽ pixel bằng nhiều hơn một tài khoản hoặc bằng máy ảo, proxy dân cư hoặc trình duyệt đa tài khoản",
  Af = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? pf() : e === "pt" ? mf() : e === "ch" ? gf() : e === "de" ? wf() : e === "es" ? yf() : e === "fr" ? vf() : e === "it" ? bf() : e === "jp" ? Ef() : e === "pl" ? Of() : e === "ru" ? Tf() : e === "uk" ? kf() : qf()
  },
  Sf = r => `You can change your name again in ${r.days} days`,
  Nf = r => `Você pode alterar seu nome novamente em ${r.days} dias.`,
  If = r => `你可以在 ${r.days} 天后再次修改名称`,
  Rf = r => `Du kannst deinen Namen in ${r.days} Tagen erneut ändern`,
  Df = r => `Podrás cambiar tu nombre de nuevo en ${r.days} días`,
  Pf = r => `Vous pourrez changer votre nom à nouveau dans ${r.days} jours`,
  jf = r => `Potrai cambiare di nuovo il tuo nome tra ${r.days} giorni.`,
  xf = r => `${r.days}日後に再び名前を変更できます。`,
  zf = r => `Następną zmianę nazwy możesz wykonać za ${r.days} dni`,
  Uf = r => `Вы сможете изменить имя снова через ${r.days} дн.`,
  Lf = r => `Ви зможете змінити імʼя знову через ${r.days} днів`,
  Cf = r => `Bạn có thể đổi tên lại sau ${r.days} ngày`,
  Mf = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Sf(r) : e === "pt" ? Nf(r) : e === "ch" ? If(r) : e === "de" ? Rf(r) : e === "es" ? Df(r) : e === "fr" ? Pf(r) : e === "it" ? jf(r) : e === "jp" ? xf(r) : e === "pl" ? zf(r) : e === "ru" ? Uf(r) : e === "uk" ? Lf(r) : Cf(r)
  },
  Bf = () => "No internet access or the servers are offline. Try again later.",
  Kf = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  $f = () => "没有网络连接或服务器已离线。请稍后重试。",
  Ff = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Hf = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Vf = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Gf = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Yf = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Jf = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Wf = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Qf = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  Xf = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  Zf = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Bf() : e === "pt" ? Kf() : e === "ch" ? $f() : e === "de" ? Ff() : e === "es" ? Hf() : e === "fr" ? Vf() : e === "it" ? Gf() : e === "jp" ? Yf() : e === "pl" ? Jf() : e === "ru" ? Wf() : e === "uk" ? Qf() : Xf()
  },
  eh = () => "You are not allowed to verify a phone number. Try refreshing the page",
  th = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  rh = () => "您无权验证电话号码。请尝试刷新页面。",
  nh = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  ah = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  ih = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  sh = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  oh = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  ch = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  uh = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  lh = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  _h = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  dh = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? eh() : e === "pt" ? th() : e === "ch" ? rh() : e === "de" ? nh() : e === "es" ? ah() : e === "fr" ? ih() : e === "it" ? sh() : e === "jp" ? oh() : e === "pl" ? ch() : e === "ru" ? uh() : e === "uk" ? lh() : _h()
  },
  fh = () => "Not enough Droplets",
  hh = () => "Droplets insuficientes",
  ph = () => "Droplets 数量不足",
  mh = () => "Nicht genug Droplets",
  gh = () => "No tienes suficientes Droplets",
  wh = () => "Pas assez de Droplets",
  yh = () => "Droplets insufficienti",
  vh = () => "Dropletsが足りません。",
  bh = () => "Za mało Droplets",
  Eh = () => "Недостаточно Droplets",
  Oh = () => "Недостатньо Droplets",
  Th = () => "Không đủ Droplets",
  mt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? fh() : e === "pt" ? hh() : e === "ch" ? ph() : e === "de" ? mh() : e === "es" ? gh() : e === "fr" ? wh() : e === "it" ? yh() : e === "jp" ? vh() : e === "pl" ? bh() : e === "ru" ? Eh() : e === "uk" ? Oh() : Th()
  },
  kh = () => "Operation not allowed. Maybe you have too many favorite locations.",
  qh = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Ah = () => "操作不被允许。你的收藏位置可能过多。",
  Sh = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  Nh = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  Ih = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  Rh = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  Dh = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  Ph = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  jh = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  xh = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  zh = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  Uh = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? kh() : e === "pt" ? qh() : e === "ch" ? Ah() : e === "de" ? Sh() : e === "es" ? Nh() : e === "fr" ? Ih() : e === "it" ? Rh() : e === "jp" ? Dh() : e === "pl" ? Ph() : e === "ru" ? jh() : e === "uk" ? xh() : zh()
  },
  Lh = r => `Not enough charges: you have ${r.charges} but this overlay needs ${r.pixels}.`,
  Ch = r => `Cargas insuficientes: você tem ${r.charges}, mas esta sobreposição precisa de ${r.pixels}.`,
  Mh = r => `充能不足：你有 ${r.charges}，但此叠加层需要 ${r.pixels}。`,
  Bh = r => `Nicht genügend Ladungen: Du hast ${r.charges}, aber dieses Overlay benötigt ${r.pixels}.`,
  Kh = r => `Cargas insuficientes: tienes ${r.charges} pero esta superposición necesita ${r.pixels}.`,
  $h = r => `Charges insuffisantes : vous avez ${r.charges} mais ce calque nécessite ${r.pixels}.`,
  Fh = r => `Cariche insufficienti: ne hai ${r.charges} ma questo overlay ne richiede ${r.pixels}.`,
  Hh = r => `チャージが足りません：現在 ${r.charges} ですが、このオーバーレイには ${r.pixels} 必要です。`,
  Vh = r => `Za mało ładunków: masz ${r.charges}, ale ta nakładka wymaga ${r.pixels}.`,
  Gh = r => `Недостаточно зарядов: у вас ${r.charges}, но для этого слоя нужно ${r.pixels}.`,
  Yh = r => `Недостатньо зарядів: у вас ${r.charges}, але для цього шару потрібно ${r.pixels}.`,
  Jh = r => `Không đủ lượt sơn: bạn có ${r.charges} nhưng lớp phủ này cần ${r.pixels}.`,
  Wh = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Lh(r) : e === "pt" ? Ch(r) : e === "ch" ? Mh(r) : e === "de" ? Bh(r) : e === "es" ? Kh(r) : e === "fr" ? $h(r) : e === "it" ? Fh(r) : e === "jp" ? Hh(r) : e === "pl" ? Vh(r) : e === "ru" ? Gh(r) : e === "uk" ? Yh(r) : Jh(r)
  },
  Qh = () => "You are trying to paint with a color you do not own",
  Xh = () => "Você está tentando pintar com uma cor que não possui",
  Zh = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  ep = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  tp = () => "Estás intentando pintar con un color que no posees",
  rp = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  np = () => "Stai cercando di dipingere con un colore che non possiedi",
  ap = () => "所持していない色で塗ろうとしています。",
  ip = () => "Próbujesz malować kolorem, którego nie posiadasz",
  sp = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  op = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  cp = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  gt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Qh() : e === "pt" ? Xh() : e === "ch" ? Zh() : e === "de" ? ep() : e === "es" ? tp() : e === "fr" ? rp() : e === "it" ? np() : e === "jp" ? ap() : e === "pl" ? ip() : e === "ru" ? sp() : e === "uk" ? op() : cp()
  },
  up = () => "Phone already used",
  lp = () => "Telefone já usado",
  _p = () => "电话号码已被使用",
  dp = () => "Telefonnummer bereits verwendet",
  fp = () => "Teléfono ya utilizado",
  hp = () => "Téléphone déjà utilisé",
  pp = () => "Telefono già utilizzato",
  mp = () => "この電話番号は既に使用されています。",
  gp = () => "Numer telefonu jest już używany",
  wp = () => "Телефон уже используется",
  yp = () => "Номер телефону вже використовується",
  vp = () => "Số điện thoại đã được sử dụng",
  bp = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? up() : e === "pt" ? lp() : e === "ch" ? _p() : e === "de" ? dp() : e === "es" ? fp() : e === "fr" ? hp() : e === "it" ? pp() : e === "jp" ? mp() : e === "pl" ? gp() : e === "ru" ? wp() : e === "uk" ? yp() : vp()
  },
  Ep = () => "This phone number's region is not supported",
  Op = () => "A região deste número de telefone não é suportada",
  Tp = () => "此电话号码的地区不受支持",
  kp = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  qp = () => "La región de este número de teléfono no es compatible",
  Ap = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  Sp = () => "La regione di questo numero di telefono non è supportata",
  Np = () => "この電話番号の地域はサポートされていません",
  Ip = () => "Region tego numeru telefonu nie jest obsługiwany",
  Rp = () => "Регион этого номера телефона не поддерживается",
  Dp = () => "Регіон цього номера телефону не підтримується",
  Pp = () => "Vùng của số điện thoại này không được hỗ trợ",
  jp = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ep() : e === "pt" ? Op() : e === "ch" ? Tp() : e === "de" ? kp() : e === "es" ? qp() : e === "fr" ? Ap() : e === "it" ? Sp() : e === "jp" ? Np() : e === "pl" ? Ip() : e === "ru" ? Rp() : e === "uk" ? Dp() : Pp()
  },
  xp = () => "Refresh your page to get the latest update",
  zp = () => "Recarregue sua página para obter as últimas atualizações",
  Up = () => "刷新页面以获取最新更新",
  Lp = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  Cp = () => "Actualiza la página para obtener la última versión",
  Mp = () => "Actualisez la page pour obtenir les dernières mises à jour",
  Bp = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  Kp = () => "最新の状態にするにはページを再読み込みしてください。",
  $p = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  Fp = () => "Обновите страницу, чтобы получить последние изменения",
  Hp = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Vp = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  wt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? xp() : e === "pt" ? zp() : e === "ch" ? Up() : e === "de" ? Lp() : e === "es" ? Cp() : e === "fr" ? Mp() : e === "it" ? Bp() : e === "jp" ? Kp() : e === "pl" ? $p() : e === "ru" ? Fp() : e === "uk" ? Hp() : Vp()
  },
  Gp = () => "Report failed. Please try again later",
  Yp = () => "Denúncia falhou. Por favor, tente novamente mais tarde",
  Jp = () => "举报失败，请稍后再试",
  Wp = () => "Meldung fehlgeschlagen. Bitte versuche es später erneut",
  Qp = () => "Error al enviar el reporte. Inténtalo de nuevo más tarde",
  Xp = () => "Échec du signalement. Veuillez réessayer plus tard",
  Zp = () => "Segnalazione fallita. Riprova più tardi",
  em = () => "通報に失敗しました。時間をおいて再度お試しください",
  tm = () => "Zgłoszenie nie powiodło się. Spróbuj ponownie później",
  rm = () => "Не удалось отправить жалобу. Попробуйте позже.",
  nm = () => "Не вдалося відправити скаргу. Спробуйте пізніше.",
  am = () => "Báo cáo thất bại. Vui lòng thử lại sau",
  im = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Gp() : e === "pt" ? Yp() : e === "ch" ? Jp() : e === "de" ? Wp() : e === "es" ? Qp() : e === "fr" ? Xp() : e === "it" ? Zp() : e === "jp" ? em() : e === "pl" ? tm() : e === "ru" ? rm() : e === "uk" ? nm() : am()
  },
  sm = () => "The request timed out. Please try again.",
  om = () => "A solicitação expirou. Por favor, tente novamente.",
  cm = () => "请求超时。请重试。",
  um = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  lm = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  _m = () => "La requête a expiré. Veuillez réessayer.",
  dm = () => "La richiesta è scaduta. Riprova.",
  fm = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  hm = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  pm = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  mm = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  gm = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  wm = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? sm() : e === "pt" ? om() : e === "ch" ? cm() : e === "de" ? um() : e === "es" ? lm() : e === "fr" ? _m() : e === "it" ? dm() : e === "jp" ? fm() : e === "pl" ? hm() : e === "ru" ? pm() : e === "uk" ? mm() : gm()
  },
  ym = () => "No modifications found for the selected pixels.",
  vm = () => "Nenhuma modificação encontrada para os pixels selecionados.",
  bm = () => "未找到所选像素的修改记录。",
  Em = () => "Keine Änderungen für die ausgewählten Pixel gefunden.",
  Om = () => "No se encontraron modificaciones para los píxeles seleccionados.",
  Tm = () => "Aucune modification trouvée pour les pixels sélectionnés.",
  km = () => "Nessuna modifica trovata per i pixel selezionati.",
  qm = () => "選択したピクセルの変更が見つかりませんでした。",
  Am = () => "Nie znaleziono modyfikacji dla wybranych pikseli.",
  Sm = () => "Модификации для выбранных пикселей не найдены.",
  Nm = () => "Модифікації для вибраних пікселів не знайдено.",
  Im = () => "Không tìm thấy thay đổi cho các pixel đã chọn.",
  Rm = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ym() : e === "pt" ? vm() : e === "ch" ? bm() : e === "de" ? Em() : e === "es" ? Om() : e === "fr" ? Tm() : e === "it" ? km() : e === "jp" ? qm() : e === "pl" ? Am() : e === "ru" ? Sm() : e === "uk" ? Nm() : Im()
  },
  Dm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Pm = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  jm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  xm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  zm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Um = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Lm = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  Cm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Mm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Bm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Km = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  $m = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Fm = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Dm() : e === "pt" ? Pm() : e === "ch" ? jm() : e === "de" ? xm() : e === "es" ? zm() : e === "fr" ? Um() : e === "it" ? Lm() : e === "jp" ? Cm() : e === "pl" ? Mm() : e === "ru" ? Bm() : e === "uk" ? Km() : $m()
  },
  Hm = () => "The service is currently unavailable. Please try again later.",
  Vm = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  Gm = () => "服务当前不可用。请稍后再试。",
  Ym = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  Jm = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  Wm = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  Qm = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  Xm = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  Zm = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  eg = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  tg = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  rg = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  ng = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Hm() : e === "pt" ? Vm() : e === "ch" ? Gm() : e === "de" ? Ym() : e === "es" ? Jm() : e === "fr" ? Wm() : e === "it" ? Qm() : e === "jp" ? Xm() : e === "pl" ? Zm() : e === "ru" ? eg() : e === "uk" ? tg() : rg()
  },
  ag = () => "Too many attempts. Please try again later",
  ig = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  sg = () => "尝试次数过多，请稍后再试",
  og = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  cg = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  ug = () => "Trop de tentatives. Veuillez réessayer plus tard",
  lg = () => "Troppi tentativi. Riprova più tardi.",
  _g = () => "試行回数が多すぎます。後で再度お試しください。",
  dg = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  fg = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  hg = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  pg = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  yt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ag() : e === "pt" ? ig() : e === "ch" ? sg() : e === "de" ? og() : e === "es" ? cg() : e === "fr" ? ug() : e === "it" ? lg() : e === "jp" ? _g() : e === "pl" ? dg() : e === "ru" ? fg() : e === "uk" ? hg() : pg()
  },
  mg = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  gg = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  wg = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  yg = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  vg = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  bg = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  Eg = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  Og = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  Tg = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  kg = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  qg = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  Ag = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  Sg = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? mg() : e === "pt" ? gg() : e === "ch" ? wg() : e === "de" ? yg() : e === "es" ? vg() : e === "fr" ? bg() : e === "it" ? Eg() : e === "jp" ? Og() : e === "pl" ? Tg() : e === "ru" ? kg() : e === "uk" ? qg() : Ag()
  },
  Ng = () => "The typed username does not match your current username.",
  Ig = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Rg = () => "输入的用户名与当前用户名不匹配。",
  Dg = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Pg = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  jg = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  xg = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  zg = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  Ug = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Lg = () => "Введённое имя пользователя не совпадает с текущим.",
  Cg = () => "Введене імʼя користувача не збігається з поточним.",
  Mg = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  Bg = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ng() : e === "pt" ? Ig() : e === "ch" ? Rg() : e === "de" ? Dg() : e === "es" ? Pg() : e === "fr" ? jg() : e === "it" ? xg() : e === "jp" ? zg() : e === "pl" ? Ug() : e === "ru" ? Lg() : e === "uk" ? Cg() : Mg()
  },
  Kg = () => "Unexpected server error. Try again later.",
  $g = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  Fg = () => "服务器出现意外错误。请稍后再试。",
  Hg = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  Vg = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Gg = () => "Erreur serveur inattendue. Réessayez plus tard.",
  Yg = () => "Errore imprevisto del server. Riprova più tardi.",
  Jg = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  Wg = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  Qg = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  Xg = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  Zg = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  o = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Kg() : e === "pt" ? $g() : e === "ch" ? Fg() : e === "de" ? Hg() : e === "es" ? Vg() : e === "fr" ? Gg() : e === "it" ? Yg() : e === "jp" ? Jg() : e === "pl" ? Wg() : e === "ru" ? Qg() : e === "uk" ? Xg() : Zg()
  },
  ew = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  tw = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  rw = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  nw = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  aw = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  iw = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  sw = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  ow = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  cw = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  uw = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  lw = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  _w = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  dw = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ew() : e === "pt" ? tw() : e === "ch" ? rw() : e === "de" ? nw() : e === "es" ? aw() : e === "fr" ? iw() : e === "it" ? sw() : e === "jp" ? ow() : e === "pl" ? cw() : e === "ru" ? uw() : e === "uk" ? lw() : _w()
  },
  fw = () => "You already picked a side",
  hw = () => "Você já escolheu um lado",
  pw = () => "你已经选择了一方",
  mw = () => "Du hast bereits eine Seite gewählt",
  gw = () => "Ya elegiste un bando",
  ww = () => "Vous avez déjà choisi un camp",
  yw = () => "Hai già scelto una fazione",
  vw = () => "すでに陣営を選択しています",
  bw = () => "Już wybrałeś stronę",
  Ew = () => "Вы уже выбрали сторону",
  Ow = () => "Ви вже обрали сторону",
  Tw = () => "Bạn đã chọn phe rồi",
  kw = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? fw() : e === "pt" ? hw() : e === "ch" ? pw() : e === "de" ? mw() : e === "es" ? gw() : e === "fr" ? ww() : e === "it" ? yw() : e === "jp" ? vw() : e === "pl" ? bw() : e === "ru" ? Ew() : e === "uk" ? Ow() : Tw()
  },
  qw = () => "You do not have enough Droplets to pick this side",
  Aw = () => "Você não tem Droplets suficientes para escolher esse lado",
  Sw = () => "你的 Droplets 不足，无法选择这一方",
  Nw = () => "Du hast nicht genügend Droplets, um diese Seite zu wählen",
  Iw = () => "No tienes suficientes Droplets para elegir este bando",
  Rw = () => "Vous n'avez pas assez de Droplets pour choisir ce camp",
  Dw = () => "Non hai abbastanza Droplets per scegliere questa fazione",
  Pw = () => "この陣営を選ぶのに十分な Droplets がありません",
  jw = () => "Nie masz wystarczająco Droplets, aby wybrać tę stronę",
  xw = () => "У вас недостаточно Droplets, чтобы выбрать эту сторону",
  zw = () => "У вас недостатньо Droplets, щоб обрати цю сторону",
  Uw = () => "Bạn không có đủ Droplets để chọn phe này",
  Lw = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? qw() : e === "pt" ? Aw() : e === "ch" ? Sw() : e === "de" ? Nw() : e === "es" ? Iw() : e === "fr" ? Rw() : e === "it" ? Dw() : e === "jp" ? Pw() : e === "pl" ? jw() : e === "ru" ? xw() : e === "uk" ? zw() : Uw()
  },
  Cw = () => "VPN or proxy detected. Please disable your VPN and try again.",
  Mw = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  Bw = () => "检测到VPN或代理。请关闭VPN后重试。",
  Kw = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  $w = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  Fw = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  Hw = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  Vw = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  Gw = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  Yw = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  Jw = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  Ww = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  Qw = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Cw() : e === "pt" ? Mw() : e === "ch" ? Bw() : e === "de" ? Kw() : e === "es" ? $w() : e === "fr" ? Fw() : e === "it" ? Hw() : e === "jp" ? Vw() : e === "pl" ? Gw() : e === "ru" ? Yw() : e === "uk" ? Jw() : Ww()
  },
  Xw = () => "Failed to load WebAssembly module. Try to use another browser.",
  Zw = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  ey = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  ty = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  ry = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  ny = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  ay = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  iy = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  sy = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  oy = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  cy = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  uy = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  ly = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Xw() : e === "pt" ? Zw() : e === "ch" ? ey() : e === "de" ? ty() : e === "es" ? ry() : e === "fr" ? ny() : e === "it" ? ay() : e === "jp" ? iy() : e === "pl" ? sy() : e === "ru" ? oy() : e === "uk" ? cy() : uy()
  },
  _y = () => "You already have this item. Please refresh the page.",
  dy = () => "Você já possui este item. Atualize a página.",
  fy = () => "你已经拥有此物品。请刷新页面。",
  hy = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  py = () => "Ya tienes este ítem. Actualiza la página.",
  my = () => "Vous possédez déjà cet objet. Actualisez la page.",
  gy = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  wy = () => "このアイテムはすでに所持しています。ページを更新してください。",
  yy = () => "Masz już ten przedmiot. Odśwież stronę.",
  vy = () => "У вас уже есть этот предмет. Обновите страницу.",
  by = () => "У вас уже є цей предмет. Оновіть сторінку.",
  Ey = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  Bt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? _y() : e === "pt" ? dy() : e === "ch" ? fy() : e === "de" ? hy() : e === "es" ? py() : e === "fr" ? my() : e === "it" ? gy() : e === "jp" ? wy() : e === "pl" ? yy() : e === "ru" ? vy() : e === "uk" ? by() : Ey()
  },
  Oy = () => "You are already in an alliance",
  Ty = () => "Você já está em uma aliança",
  ky = () => "你已经在一个联盟中",
  qy = () => "Du bist bereits in einer Allianz",
  Ay = () => "Ya estás en una alianza",
  Sy = () => "Vous êtes déjà dans une alliance",
  Ny = () => "Sei già in un'alleanza",
  Iy = () => "すでにアライアンスに所属しています。",
  Ry = () => "Jesteś już w sojuszu",
  Dy = () => "Вы уже состоите в альянсе",
  Py = () => "Ви вже перебуваєте в альянсі",
  jy = () => "Bạn đã ở trong một liên minh",
  xy = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Oy() : e === "pt" ? Ty() : e === "ch" ? ky() : e === "de" ? qy() : e === "es" ? Ay() : e === "fr" ? Sy() : e === "it" ? Ny() : e === "jp" ? Iy() : e === "pl" ? Ry() : e === "ru" ? Dy() : e === "uk" ? Py() : jy()
  },
  zy = () => "You are not allowed to do this",
  Uy = () => "Você não tem permissão para fazer isso",
  Ly = () => "你无权执行此操作",
  Cy = () => "Du bist dazu nicht berechtigt",
  My = () => "No tienes permiso para hacer esto",
  By = () => "Vous n’êtes pas autorisé à faire cela",
  Ky = () => "Non hai il permesso di farlo",
  $y = () => "この操作を行う権限がありません。",
  Fy = () => "Nie masz uprawnień, aby to zrobić",
  Hy = () => "У вас нет прав для этого действия",
  Vy = () => "Ви не маєте права це робити",
  Gy = () => "Bạn không có quyền làm việc này",
  b = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? zy() : e === "pt" ? Uy() : e === "ch" ? Ly() : e === "de" ? Cy() : e === "es" ? My() : e === "fr" ? By() : e === "it" ? Ky() : e === "jp" ? $y() : e === "pl" ? Fy() : e === "ru" ? Hy() : e === "uk" ? Vy() : Gy()
  },
  Yy = () => "You are not logged in",
  Jy = () => "Você não está logado",
  Wy = () => "你尚未登录",
  Qy = () => "Du bist nicht eingeloggt",
  Xy = () => "No has iniciado sesión",
  Zy = () => "Vous n’êtes pas connecté",
  ev = () => "Non hai effettuato l'accesso",
  tv = () => "ログインしていません。",
  rv = () => "Nie jesteś zalogowany",
  nv = () => "Вы не авторизованы",
  av = () => "Ви не ввійшли в акаунт",
  iv = () => "Bạn chưa đăng nhập",
  sv = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Yy() : e === "pt" ? Jy() : e === "ch" ? Wy() : e === "de" ? Qy() : e === "es" ? Xy() : e === "fr" ? Zy() : e === "it" ? ev() : e === "jp" ? tv() : e === "pl" ? rv() : e === "ru" ? nv() : e === "uk" ? av() : iv()
  },
  ov = () => "You do not have enough Droplets to buy this item.",
  cv = () => "Você não tem Droplets suficientes para comprar este item.",
  uv = () => "你的 Droplets 不足，无法购买此物品。",
  lv = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  _v = () => "No tienes suficientes Droplets para comprar este ítem.",
  dv = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  fv = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  hv = () => "このアイテムを購入するのに十分なDropletsがありません。",
  pv = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  mv = () => "У вас недостаточно Droplets для покупки этого предмета.",
  gv = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  wv = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  Kt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ov() : e === "pt" ? cv() : e === "ch" ? uv() : e === "de" ? lv() : e === "es" ? _v() : e === "fr" ? dv() : e === "it" ? fv() : e === "jp" ? hv() : e === "pl" ? pv() : e === "ru" ? mv() : e === "uk" ? gv() : wv()
  },
  yv = () => "You need to be logged in to paint",
  vv = () => "Você precisa estar conectado para pintar",
  bv = () => "你需要登录才能进行绘制",
  Ev = () => "Du musst eingeloggt sein, um zu malen",
  Ov = () => "Debes iniciar sesión para pintar",
  Tv = () => "Vous devez être connecté pour peindre",
  kv = () => "Devi avere effettuato l'accesso per dipingere",
  qv = () => "ペイントするにはログインが必要です。",
  Av = () => "Musisz być zalogowany, aby malować",
  Sv = () => "Чтобы рисовать, нужно войти в аккаунт",
  Nv = () => "Щоб малювати, необхідно увійти в акаунт",
  Iv = () => "Bạn cần đăng nhập để tô",
  vt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? yv() : e === "pt" ? vv() : e === "ch" ? bv() : e === "de" ? Ev() : e === "es" ? Ov() : e === "fr" ? Tv() : e === "it" ? kv() : e === "jp" ? qv() : e === "pl" ? Av() : e === "ru" ? Sv() : e === "uk" ? Nv() : Iv()
  },
  Rv = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Dv = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  Pv = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  jv = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  xv = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  zv = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  Uv = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  Lv = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  Cv = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  Mv = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  Bv = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  Kv = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  $v = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Rv() : e === "pt" ? Dv() : e === "ch" ? Pv() : e === "de" ? jv() : e === "es" ? xv() : e === "fr" ? zv() : e === "it" ? Uv() : e === "jp" ? Lv() : e === "pl" ? Cv() : e === "ru" ? Mv() : e === "uk" ? Bv() : Kv()
  },
  Fv = r => `Your account has been suspended out until ${r.until}`,
  Hv = r => `A sua conta está suspensa até ${r.until}`,
  Vv = r => `你的账号已被暂停至 ${r.until}`,
  Gv = r => `Dein Konto ist gesperrt bis ${r.until}`,
  Yv = r => `Tu cuenta ha sido suspendida hasta ${r.until}`,
  Jv = r => `Votre compte est suspendu jusqu’au ${r.until}`,
  Wv = r => `Il tuo account è sospeso fino al ${r.until}`,
  Qv = r => `あなたのアカウントは${r.until}まで一時停止されています。`,
  Xv = r => `Twoje konto zostało zawieszone do ${r.until}`,
  Zv = r => `Ваш аккаунт заблокирован до ${r.until}`,
  eb = r => `Ваш акаунт призупинено до ${r.until}`,
  tb = r => `Tài khoản của bạn đã bị đình chỉ đến ${r.until}`,
  bt = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Fv(r) : e === "pt" ? Hv(r) : e === "ch" ? Vv(r) : e === "de" ? Gv(r) : e === "es" ? Yv(r) : e === "fr" ? Jv(r) : e === "it" ? Wv(r) : e === "jp" ? Qv(r) : e === "pl" ? Xv(r) : e === "ru" ? Zv(r) : e === "uk" ? eb(r) : tb(r)
  },
  rb = () => "A correction is already pending for this ticket.",
  nb = () => "Já existe uma correção pendente para este ticket.",
  ab = () => "此工单已存在待审核的更正请求。",
  ib = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  sb = () => "Ya hay una corrección pendiente para este ticket.",
  ob = () => "Une correction est déjà en attente pour ce ticket.",
  cb = () => "Una correzione è già in sospeso per questo ticket.",
  ub = () => "このチケットには未処理の修正があります。",
  lb = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  _b = () => "Для этого тикета уже есть запрос на исправление.",
  db = () => "Для цього тікета вже є запит на перевірці.",
  fb = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  hb = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? rb() : e === "pt" ? nb() : e === "ch" ? ab() : e === "de" ? ib() : e === "es" ? sb() : e === "fr" ? ob() : e === "it" ? cb() : e === "jp" ? ub() : e === "pl" ? lb() : e === "ru" ? _b() : e === "uk" ? db() : fb()
  },
  pb = () => "You cannot review your own correction request.",
  mb = () => "Você não pode revisar sua própria solicitação de correção.",
  gb = () => "不能审核自己提交的更正请求。",
  wb = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  yb = () => "No puedes revisar tu propia solicitud de corrección.",
  vb = () => "Tu ne peux pas examiner ta propre demande de correction.",
  bb = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  Eb = () => "自分のリクエストはレビューできません。",
  Ob = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  Tb = () => "Нельзя рассматривать собственный запрос.",
  kb = () => "Не можна перевіряти власний запит.",
  qb = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  Ab = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? pb() : e === "pt" ? mb() : e === "ch" ? gb() : e === "de" ? wb() : e === "es" ? yb() : e === "fr" ? vb() : e === "it" ? bb() : e === "jp" ? Eb() : e === "pl" ? Ob() : e === "ru" ? Tb() : e === "uk" ? kb() : qb()
  },
  Sb = () => "This correction has already been reviewed.",
  Nb = () => "Esta correção já foi revisada.",
  Ib = () => "此请求已被审核。",
  Rb = () => "Diese Korrektur wurde bereits geprüft.",
  Db = () => "Esta corrección ya ha sido revisada.",
  Pb = () => "Cette correction a déjà été examinée.",
  jb = () => "Questa correzione è già stata revisionata.",
  xb = () => "このリクエストはすでにレビュー済みです。",
  zb = () => "Ta prośba została już rozpatrzona.",
  Ub = () => "Этот запрос уже рассмотрен.",
  Lb = () => "Цей запит вже перевірено.",
  Cb = () => "Yêu cầu này đã được duyệt.",
  Mb = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Sb() : e === "pt" ? Nb() : e === "ch" ? Ib() : e === "de" ? Rb() : e === "es" ? Db() : e === "fr" ? Pb() : e === "it" ? jb() : e === "jp" ? xb() : e === "pl" ? zb() : e === "ru" ? Ub() : e === "uk" ? Lb() : Cb()
  },
  Bb = () => "Alliance not found",
  Kb = () => "Aliança não encontrada",
  $b = () => "未找到联盟",
  Fb = () => "Allianz nicht gefunden",
  Hb = () => "Alianza no encontrada",
  Vb = () => "Alliance introuvable",
  Gb = () => "Alleanza non trovata",
  Yb = () => "アライアンスが見つかりません",
  Jb = () => "Nie znaleziono sojuszu",
  Wb = () => "Альянс не найден",
  Qb = () => "Альянс не знайдено",
  Xb = () => "Không tìm thấy liên minh",
  Zb = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Bb() : e === "pt" ? Kb() : e === "ch" ? $b() : e === "de" ? Fb() : e === "es" ? Hb() : e === "fr" ? Vb() : e === "it" ? Gb() : e === "jp" ? Yb() : e === "pl" ? Jb() : e === "ru" ? Wb() : e === "uk" ? Qb() : Xb()
  },
  eE = () => "Invalid ID",
  tE = () => "ID inválido",
  rE = () => "无效的 ID",
  nE = () => "Ungültige ID",
  aE = () => "ID inválido",
  iE = () => "ID invalide",
  sE = () => "ID non valido",
  oE = () => "無効なIDです",
  cE = () => "Nieprawidłowe ID",
  uE = () => "Неверный ID",
  lE = () => "Недійсний ID",
  _E = () => "ID không hợp lệ",
  dE = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? eE() : e === "pt" ? tE() : e === "ch" ? rE() : e === "de" ? nE() : e === "es" ? aE() : e === "fr" ? iE() : e === "it" ? sE() : e === "jp" ? oE() : e === "pl" ? cE() : e === "ru" ? uE() : e === "uk" ? lE() : _E()
  },
  fE = () => "This alliance already has the maximum number of active invites",
  hE = () => "Esta aliança já tem o número máximo de convites ativos",
  pE = () => "该联盟的有效邀请数量已达上限",
  mE = () => "Diese Allianz hat bereits die maximale Anzahl aktiver Einladungen",
  gE = () => "Esta alianza ya tiene el número máximo de invitaciones activas",
  wE = () => "Cette alliance a déjà le nombre maximal d'invitations actives",
  yE = () => "Questa alleanza ha già il numero massimo di inviti attivi",
  vE = () => "このアライアンスは有効な招待の上限に達しています",
  bE = () => "Ten sojusz ma już maksymalną liczbę aktywnych zaproszeń",
  EE = () => "У этого альянса уже максимальное количество активных приглашений",
  OE = () => "Цей альянс уже має максимальну кількість активних запрошень",
  TE = () => "Liên minh này đã đạt số lời mời đang hoạt động tối đa",
  kE = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? fE() : e === "pt" ? hE() : e === "ch" ? pE() : e === "de" ? mE() : e === "es" ? gE() : e === "fr" ? wE() : e === "it" ? yE() : e === "jp" ? vE() : e === "pl" ? bE() : e === "ru" ? EE() : e === "uk" ? OE() : TE()
  },
  qE = () => "Enter a valid discord.gg or discord.com/invite link",
  AE = () => "Informe um link válido de discord.gg ou discord.com/invite",
  SE = () => "请输入有效的 discord.gg 或 discord.com/invite 链接",
  NE = () => "Gib einen gültigen discord.gg- oder discord.com/invite-Link ein",
  IE = () => "Introduce un enlace válido de discord.gg o discord.com/invite",
  RE = () => "Saisissez un lien discord.gg ou discord.com/invite valide",
  DE = () => "Inserisci un link discord.gg o discord.com/invite valido",
  PE = () => "有効な discord.gg または discord.com/invite のリンクを入力してください",
  jE = () => "Podaj prawidłowy link discord.gg lub discord.com/invite",
  xE = () => "Введите корректную ссылку discord.gg или discord.com/invite",
  zE = () => "Введіть дійсне посилання discord.gg або discord.com/invite",
  UE = () => "Nhập liên kết discord.gg hoặc discord.com/invite hợp lệ",
  LE = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? qE() : e === "pt" ? AE() : e === "ch" ? SE() : e === "de" ? NE() : e === "es" ? IE() : e === "fr" ? RE() : e === "it" ? DE() : e === "jp" ? PE() : e === "pl" ? jE() : e === "ru" ? xE() : e === "uk" ? zE() : UE()
  },
  CE = () => "Enter a positive multiple of the conversion rate",
  ME = () => "Informe um múltiplo positivo da taxa de conversão",
  BE = () => "请输入兑换比例的正整数倍",
  KE = () => "Gib ein positives Vielfaches des Umrechnungskurses ein",
  $E = () => "Introduce un múltiplo positivo de la tasa de conversión",
  FE = () => "Saisissez un multiple positif du taux de conversion",
  HE = () => "Inserisci un multiplo positivo del tasso di conversione",
  VE = () => "変換レートの正の倍数を入力してください",
  GE = () => "Podaj dodatnią wielokrotność kursu wymiany",
  YE = () => "Введите положительное число, кратное курсу обмена",
  JE = () => "Введіть додатне число, кратне курсу обміну",
  WE = () => "Nhập một bội số dương của tỷ lệ quy đổi",
  QE = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? CE() : e === "pt" ? ME() : e === "ch" ? BE() : e === "de" ? KE() : e === "es" ? $E() : e === "fr" ? FE() : e === "it" ? HE() : e === "jp" ? VE() : e === "pl" ? GE() : e === "ru" ? YE() : e === "uk" ? JE() : WE()
  },
  XE = () => "The alliance does not have enough Coins",
  ZE = () => "A aliança não tem moedas suficientes",
  eO = () => "该联盟的金币不足",
  tO = () => "Die Allianz hat nicht genug Coins",
  rO = () => "La alianza no tiene suficientes Monedas",
  nO = () => "L'alliance n'a pas assez de Coins",
  aO = () => "L'alleanza non ha abbastanza Monete",
  iO = () => "アライアンスのCoinsが不足しています",
  sO = () => "Sojusz nie ma wystarczającej liczby Monet",
  oO = () => "У альянса недостаточно Монет",
  cO = () => "Альянсу не вистачає монет",
  uO = () => "Liên minh không có đủ Coins",
  re = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? XE() : e === "pt" ? ZE() : e === "ch" ? eO() : e === "de" ? tO() : e === "es" ? rO() : e === "fr" ? nO() : e === "it" ? aO() : e === "jp" ? iO() : e === "pl" ? sO() : e === "ru" ? oO() : e === "uk" ? cO() : uO()
  },
  lO = () => "This capability is already unlocked",
  _O = () => "Este recurso já está desbloqueado",
  dO = () => "此功能已解锁",
  fO = () => "Diese Funktion ist bereits freigeschaltet",
  hO = () => "Esta función ya está desbloqueada",
  pO = () => "Cette fonctionnalité est déjà débloquée",
  mO = () => "Questa funzione è già sbloccata",
  gO = () => "この機能はすでにロック解除されています",
  wO = () => "Ta funkcja jest już odblokowana",
  yO = () => "Эта возможность уже разблокирована",
  vO = () => "Цю можливість уже розблоковано",
  bO = () => "Tính năng này đã được mở khóa",
  Et = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? lO() : e === "pt" ? _O() : e === "ch" ? dO() : e === "de" ? fO() : e === "es" ? hO() : e === "fr" ? pO() : e === "it" ? mO() : e === "jp" ? gO() : e === "pl" ? wO() : e === "ru" ? yO() : e === "uk" ? vO() : bO()
  },
  EO = () => "This alliance color requires Better Pallet",
  OO = () => "Esta cor da aliança requer a Paleta melhorada",
  TO = () => "此联盟颜色需要高级调色板",
  kO = () => "Diese Allianzfarbe erfordert Bessere Palette",
  qO = () => "Este color de alianza requiere la Paleta mejorada",
  AO = () => "Cette couleur d'alliance nécessite la Palette améliorée",
  SO = () => "Questo colore dell'alleanza richiede la Tavolozza migliorata",
  NO = () => "このアライアンスカラーにはパレット強化が必要です",
  IO = () => "Ten kolor sojuszu wymaga Ulepszonej palety",
  RO = () => "Этот цвет альянса требует Улучшенную палитру",
  DO = () => "Цей колір альянсу потребує Покращеної палітри",
  PO = () => "Màu liên minh này cần Bảng màu nâng cao",
  Ot = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? EO() : e === "pt" ? OO() : e === "ch" ? TO() : e === "de" ? kO() : e === "es" ? qO() : e === "fr" ? AO() : e === "it" ? SO() : e === "jp" ? NO() : e === "pl" ? IO() : e === "ru" ? RO() : e === "uk" ? DO() : PO()
  },
  jO = () => "Enter a different alliance name",
  xO = () => "Informe um nome diferente",
  zO = () => "请输入不同的联盟名称",
  UO = () => "Gib einen anderen Allianznamen ein",
  LO = () => "Introduce un nombre de alianza diferente",
  CO = () => "Saisissez un nom d'alliance différent",
  MO = () => "Inserisci un nome diverso per l'alleanza",
  BO = () => "別のアライアンス名を入力してください",
  KO = () => "Podaj inną nazwę sojuszu",
  $O = () => "Введите другое название альянса",
  FO = () => "Введіть іншу назву альянсу",
  HO = () => "Nhập một tên liên minh khác",
  VO = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? jO() : e === "pt" ? xO() : e === "ch" ? zO() : e === "de" ? UO() : e === "es" ? LO() : e === "fr" ? CO() : e === "it" ? MO() : e === "jp" ? BO() : e === "pl" ? KO() : e === "ru" ? $O() : e === "uk" ? FO() : HO()
  },
  GO = () => "A description change credit is required",
  YO = () => "É necessário um crédito de alteração da descrição",
  JO = () => "需要一次描述修改额度",
  WO = () => "Dafür wird ein Guthaben für Beschreibungsänderungen benötigt",
  QO = () => "Se necesita un crédito de cambio de descripción",
  XO = () => "Un crédit de modification de la description est requis",
  ZO = () => "Serve un credito di modifica della descrizione",
  eT = () => "説明変更クレジットが必要です",
  tT = () => "Wymagany jest kredyt zmiany opisu",
  rT = () => "Нужен кредит на изменение описания",
  nT = () => "Потрібен кредит на зміну опису",
  aT = () => "Cần một lượt đổi mô tả",
  iT = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? GO() : e === "pt" ? YO() : e === "ch" ? JO() : e === "de" ? WO() : e === "es" ? QO() : e === "fr" ? XO() : e === "it" ? ZO() : e === "jp" ? eT() : e === "pl" ? tT() : e === "ru" ? rT() : e === "uk" ? nT() : aT()
  },
  sT = () => "The description contains unsupported Markdown or an unsafe link",
  oT = () => "A descrição contém Markdown não suportado ou um link inseguro",
  cT = () => "描述中包含不受支持的 Markdown 或不安全的链接",
  uT = () => "Die Beschreibung enthält nicht unterstütztes Markdown oder einen unsicheren Link",
  lT = () => "La descripción contiene Markdown no compatible o un enlace inseguro",
  _T = () => "La description contient du Markdown non pris en charge ou un lien non sécurisé",
  dT = () => "La descrizione contiene Markdown non supportato o un link non sicuro",
  fT = () => "説明に未対応のMarkdownまたは安全でないリンクが含まれています",
  hT = () => "Opis zawiera nieobsługiwany Markdown lub niebezpieczny link",
  pT = () => "Описание содержит неподдерживаемый Markdown или небезопасную ссылку",
  mT = () => "Опис містить непідтримуваний Markdown або небезпечне посилання",
  gT = () => "Mô tả chứa Markdown không được hỗ trợ hoặc liên kết không an toàn",
  wT = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? sT() : e === "pt" ? oT() : e === "ch" ? cT() : e === "de" ? uT() : e === "es" ? lT() : e === "fr" ? _T() : e === "it" ? dT() : e === "jp" ? fT() : e === "pl" ? hT() : e === "ru" ? pT() : e === "uk" ? mT() : gT()
  },
  yT = () => "This member already has access to the draft",
  vT = () => "Este membro já tem acesso ao rascunho",
  bT = () => "该成员已拥有此草稿的权限",
  ET = () => "Dieses Mitglied hat bereits Zugriff auf den Entwurf",
  OT = () => "Este miembro ya tiene acceso al borrador",
  TT = () => "Ce membre a déjà accès au brouillon",
  kT = () => "Questo membro ha già accesso alla bozza",
  qT = () => "このメンバーはすでにこの下書きにアクセスできます",
  AT = () => "Ten członek ma już dostęp do szkicu",
  ST = () => "У этого участника уже есть доступ к черновику",
  NT = () => "Цей учасник уже має доступ до чернетки",
  IT = () => "Thành viên này đã có quyền truy cập bản nháp",
  RT = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? yT() : e === "pt" ? vT() : e === "ch" ? bT() : e === "de" ? ET() : e === "es" ? OT() : e === "fr" ? TT() : e === "it" ? kT() : e === "jp" ? qT() : e === "pl" ? AT() : e === "ru" ? ST() : e === "uk" ? NT() : IT()
  },
  DT = () => "Unequip this version before removing it",
  PT = () => "Desequipe esta versão antes de removê-la",
  jT = () => "移除前请先卸下此版本",
  xT = () => "Lege diese Version ab, bevor du sie entfernst",
  zT = () => "Desequipa esta versión antes de eliminarla",
  UT = () => "Déséquipez cette version avant de la retirer",
  LT = () => "Disequipaggia questa versione prima di rimuoverla",
  CT = () => "削除する前に、このバージョンの装備を解除してください",
  MT = () => "Zdejmij tę wersję przed jej usunięciem",
  BT = () => "Снимите эту версию перед удалением",
  KT = () => "Зніміть цю версію перед видаленням",
  $T = () => "Hãy gỡ trang bị phiên bản này trước khi xóa",
  FT = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? DT() : e === "pt" ? PT() : e === "ch" ? jT() : e === "de" ? xT() : e === "es" ? zT() : e === "fr" ? UT() : e === "it" ? LT() : e === "jp" ? CT() : e === "pl" ? MT() : e === "ru" ? BT() : e === "uk" ? KT() : $T()
  },
  HT = () => "You are painting too quickly. Wait a moment and try again.",
  VT = () => "Você está pintando rápido demais. Espere um momento e tente novamente.",
  GT = () => "你的绘制速度过快。请稍后再试。",
  YT = () => "Du malst zu schnell. Warte einen Moment und versuche es erneut.",
  JT = () => "Estás pintando demasiado rápido. Espera un momento e inténtalo de nuevo.",
  WT = () => "Vous peignez trop vite. Attendez un instant et réessayez.",
  QT = () => "Stai dipingendo troppo in fretta. Attendi un momento e riprova.",
  XT = () => "ペイントが速すぎます。少し待ってから再度お試しください。",
  ZT = () => "Malujesz zbyt szybko. Odczekaj chwilę i spróbuj ponownie.",
  ek = () => "Вы рисуете слишком быстро. Подождите немного и попробуйте снова.",
  tk = () => "Ви малюєте занадто швидко. Зачекайте трохи і спробуйте ще раз.",
  rk = () => "Bạn đang tô quá nhanh. Hãy chờ một lát rồi thử lại.",
  Tt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? HT() : e === "pt" ? VT() : e === "ch" ? GT() : e === "de" ? YT() : e === "es" ? JT() : e === "fr" ? WT() : e === "it" ? QT() : e === "jp" ? XT() : e === "pl" ? ZT() : e === "ru" ? ek() : e === "uk" ? tk() : rk()
  },
  nk = () => "The alliance headquarters is not unlocked yet",
  ak = () => "A sede da aliança ainda não foi desbloqueada",
  ik = () => "该联盟总部尚未解锁",
  sk = () => "Das Hauptquartier der Allianz ist noch nicht freigeschaltet",
  ok = () => "El cuartel general de la alianza aún no está desbloqueado",
  ck = () => "Le quartier général de l'alliance n'est pas encore débloqué",
  uk = () => "Il quartier generale dell'alleanza non è ancora sbloccato",
  lk = () => "アライアンスの拠点はまだ解放されていません",
  _k = () => "Siedziba sojuszu nie została jeszcze odblokowana",
  dk = () => "Штаб-квартира альянса ещё не разблокирована",
  fk = () => "Штаб-квартиру альянсу ще не розблоковано",
  hk = () => "Trụ sở của liên minh chưa được mở khóa",
  kt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? nk() : e === "pt" ? ak() : e === "ch" ? ik() : e === "de" ? sk() : e === "es" ? ok() : e === "fr" ? ck() : e === "it" ? uk() : e === "jp" ? lk() : e === "pl" ? _k() : e === "ru" ? dk() : e === "uk" ? fk() : hk()
  },
  pk = () => "Choose the headquarters location on the map first",
  mk = () => "Escolha primeiro o local da sede no mapa",
  gk = () => "请先在地图上选择总部位置",
  wk = () => "Wähle zuerst den Standort des Hauptquartiers auf der Karte",
  yk = () => "Elige primero la ubicación del cuartel general en el mapa",
  vk = () => "Choisissez d'abord l'emplacement du quartier général sur la carte",
  bk = () => "Scegli prima la posizione del quartier generale sulla mappa",
  Ek = () => "先にマップ上で拠点の場所を選択してください",
  Ok = () => "Najpierw wybierz lokalizację siedziby na mapie",
  Tk = () => "Сначала выберите место штаб-квартиры на карте",
  kk = () => "Спершу виберіть розташування штаб-квартири на карті",
  qk = () => "Hãy chọn vị trí trụ sở trên bản đồ trước",
  Ak = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? pk() : e === "pt" ? mk() : e === "ch" ? gk() : e === "de" ? wk() : e === "es" ? yk() : e === "fr" ? vk() : e === "it" ? bk() : e === "jp" ? Ek() : e === "pl" ? Ok() : e === "ru" ? Tk() : e === "uk" ? kk() : qk()
  },
  Sk = () => "Moving the headquarters requires a Change Headquarters credit",
  Nk = () => "Mover a sede requer um crédito de Mudar Sede",
  Ik = () => "移动总部需要一张“迁移总部”凭证",
  Rk = () => 'Zum Verlegen des Hauptquartiers wird ein Gutschein "Hauptquartier verlegen" benötigt',
  Dk = () => "Mover el cuartel general requiere un crédito de Cambiar cuartel general",
  Pk = () => "Déplacer le quartier général nécessite un crédit Changement de quartier général",
  jk = () => "Spostare il quartier generale richiede un credito Cambia quartier generale",
  xk = () => "拠点の移動には「拠点の変更」クレジットが必要です",
  zk = () => "Przeniesienie siedziby wymaga kredytu Zmiana Siedziby",
  Uk = () => 'Для переноса штаб-квартиры нужен купон "Смена штаб-квартиры"',
  Lk = () => 'Щоб перемістити штаб-квартиру, потрібен кредит "Змінити штаб-квартиру"',
  Ck = () => "Di chuyển trụ sở cần một lượt Đổi Trụ sở",
  Mk = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Sk() : e === "pt" ? Nk() : e === "ch" ? Ik() : e === "de" ? Rk() : e === "es" ? Dk() : e === "fr" ? Pk() : e === "it" ? jk() : e === "jp" ? xk() : e === "pl" ? zk() : e === "ru" ? Uk() : e === "uk" ? Lk() : Ck()
  },
  Bk = () => "Headquarters sizes must be unlocked in order",
  Kk = () => "Os tamanhos da sede devem ser desbloqueados em ordem",
  $k = () => "总部尺寸必须按顺序解锁",
  Fk = () => "Die Hauptquartier-Größen müssen der Reihe nach freigeschaltet werden",
  Hk = () => "Los tamaños del cuartel general deben desbloquearse en orden",
  Vk = () => "Les tailles du quartier général doivent être débloquées dans l'ordre",
  Gk = () => "Le dimensioni del quartier generale devono essere sbloccate in ordine",
  Yk = () => "拠点のサイズは順番に解放する必要があります",
  Jk = () => "Rozmiary siedziby trzeba odblokowywać po kolei",
  Wk = () => "Размеры штаб-квартиры нужно разблокировать по порядку",
  Qk = () => "Розміри штаб-квартири потрібно розблоковувати по порядку",
  Xk = () => "Các kích thước trụ sở phải được mở khóa theo thứ tự",
  Zk = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Bk() : e === "pt" ? Kk() : e === "ch" ? $k() : e === "de" ? Fk() : e === "es" ? Hk() : e === "fr" ? Vk() : e === "it" ? Gk() : e === "jp" ? Yk() : e === "pl" ? Jk() : e === "ru" ? Wk() : e === "uk" ? Qk() : Xk()
  },
  eq = () => "Headquarters upgrades must be unlocked in order",
  tq = () => "As melhorias da sede devem ser desbloqueadas em ordem",
  rq = () => "总部升级必须按顺序解锁",
  nq = () => "Die Hauptquartier-Verbesserungen müssen der Reihe nach freigeschaltet werden",
  aq = () => "Las mejoras del cuartel general deben desbloquearse en orden",
  iq = () => "Les améliorations du quartier général doivent être débloquées dans l'ordre",
  sq = () => "I miglioramenti del quartier generale devono essere sbloccati in ordine",
  oq = () => "拠点のアップグレードは順番に解放する必要があります",
  cq = () => "Ulepszenia siedziby trzeba odblokowywać po kolei",
  uq = () => "Улучшения штаб-квартиры нужно разблокировать по порядку",
  lq = () => "Покращення штаб-квартири потрібно розблоковувати по порядку",
  _q = () => "Các nâng cấp trụ sở phải được mở khóa theo thứ tự",
  dq = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? eq() : e === "pt" ? tq() : e === "ch" ? rq() : e === "de" ? nq() : e === "es" ? aq() : e === "fr" ? iq() : e === "it" ? sq() : e === "jp" ? oq() : e === "pl" ? cq() : e === "ru" ? uq() : e === "uk" ? lq() : _q()
  },
  fq = () => "Could not load the headquarters leaderboard",
  hq = () => "Não foi possível carregar o ranking da sede",
  pq = () => "无法加载总部排行榜",
  mq = () => "Die Rangliste des Hauptquartiers konnte nicht geladen werden",
  gq = () => "No se pudo cargar la clasificación del cuartel general",
  wq = () => "Impossible de charger le classement du quartier général",
  yq = () => "Impossibile caricare la classifica del quartier generale",
  vq = () => "拠点ランキングを読み込めませんでした",
  bq = () => "Nie udało się wczytać rankingu siedziby",
  Eq = () => "Не удалось загрузить рейтинг штаб-квартиры",
  Oq = () => "Не вдалося завантажити рейтинг штаб-квартири",
  Tq = () => "Không thể tải bảng xếp hạng trụ sở",
  kq = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? fq() : e === "pt" ? hq() : e === "ch" ? pq() : e === "de" ? mq() : e === "es" ? gq() : e === "fr" ? wq() : e === "it" ? yq() : e === "jp" ? vq() : e === "pl" ? bq() : e === "ru" ? Eq() : e === "uk" ? Oq() : Tq()
  },
  qq = () => "Not enough headquarters charges",
  Aq = () => "Cargas da sede insuficientes",
  Sq = () => "总部充能不足",
  Nq = () => "Nicht genügend Hauptquartier-Ladungen",
  Iq = () => "Cargas del cuartel general insuficientes",
  Rq = () => "Charges du quartier général insuffisantes",
  Dq = () => "Cariche del quartier generale insufficienti",
  Pq = () => "拠点のチャージが足りません",
  jq = () => "Za mało ładunków siedziby",
  xq = () => "Недостаточно зарядов штаб-квартиры",
  zq = () => "Недостатньо зарядів штаб-квартири",
  Uq = () => "Không đủ lượt tô của trụ sở",
  Lq = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? qq() : e === "pt" ? Aq() : e === "ch" ? Sq() : e === "de" ? Nq() : e === "es" ? Iq() : e === "fr" ? Rq() : e === "it" ? Dq() : e === "jp" ? Pq() : e === "pl" ? jq() : e === "ru" ? xq() : e === "uk" ? zq() : Uq()
  },
  Cq = () => "Nothing changed on the canvas",
  Mq = () => "Nada mudou no canvas",
  Bq = () => "画布没有任何改动",
  Kq = () => "Auf dem Canvas hat sich nichts geändert",
  $q = () => "No cambió nada en el lienzo",
  Fq = () => "Rien n'a changé sur le canvas",
  Hq = () => "Nulla è cambiato sul canvas",
  Vq = () => "キャンバスに変更はありません",
  Gq = () => "Nic się nie zmieniło na płótnie",
  Yq = () => "На холсте ничего не изменилось",
  Jq = () => "На полотні нічого не змінилося",
  Wq = () => "Không có gì thay đổi trên bảng vẽ",
  Qq = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Cq() : e === "pt" ? Mq() : e === "ch" ? Bq() : e === "de" ? Kq() : e === "es" ? $q() : e === "fr" ? Fq() : e === "it" ? Hq() : e === "jp" ? Vq() : e === "pl" ? Gq() : e === "ru" ? Yq() : e === "uk" ? Jq() : Wq()
  },
  Xq = () => "The headquarters canvas is locked by moderation",
  Zq = () => "O canvas da sede está bloqueado pela moderação",
  eA = () => "总部画布已被审核锁定",
  tA = () => "Der Hauptquartier-Canvas ist von der Moderation gesperrt",
  rA = () => "El lienzo del cuartel general está bloqueado por la moderación",
  nA = () => "Le canvas du quartier général est verrouillé par la modération",
  aA = () => "Il canvas del quartier generale è bloccato dalla moderazione",
  iA = () => "拠点のキャンバスはモデレーションによりロックされています",
  sA = () => "Płótno siedziby zostało zablokowane przez moderację",
  oA = () => "Холст штаб-квартиры заблокирован модерацией",
  cA = () => "Полотно штаб-квартири заблоковано модерацією",
  uA = () => "Bảng vẽ trụ sở đang bị kiểm duyệt khóa",
  lA = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Xq() : e === "pt" ? Zq() : e === "ch" ? eA() : e === "de" ? tA() : e === "es" ? rA() : e === "fr" ? nA() : e === "it" ? aA() : e === "jp" ? iA() : e === "pl" ? sA() : e === "ru" ? oA() : e === "uk" ? cA() : uA()
  },
  _A = () => "You are timed out from the headquarters canvas",
  dA = () => "Você está suspenso do canvas da sede",
  fA = () => "你已被禁言，无法在总部画布上绘制",
  hA = () => "Du hast einen Timeout für den Hauptquartier-Canvas",
  pA = () => "Estás suspendido del lienzo del cuartel general",
  mA = () => "Vous êtes suspendu du canvas du quartier général",
  gA = () => "Sei sospeso dal canvas del quartier generale",
  wA = () => "あなたは拠点のキャンバスからタイムアウトされています",
  yA = () => "Masz zawieszony dostęp do płótna siedziby",
  vA = () => "Вам выдан тайм-аут на холсте штаб-квартиры",
  bA = () => "У вас тайм-аут на полотні штаб-квартири",
  EA = () => "Bạn đang bị tạm khóa khỏi bảng vẽ trụ sở",
  OA = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? _A() : e === "pt" ? dA() : e === "ch" ? fA() : e === "de" ? hA() : e === "es" ? pA() : e === "fr" ? mA() : e === "it" ? gA() : e === "jp" ? wA() : e === "pl" ? yA() : e === "ru" ? vA() : e === "uk" ? bA() : EA()
  },
  TA = () => "A reason is required",
  kA = () => "Um motivo é obrigatório",
  qA = () => "必须填写原因",
  AA = () => "Ein Grund ist erforderlich",
  SA = () => "Se requiere un motivo",
  NA = () => "Un motif est obligatoire",
  IA = () => "Il motivo è obbligatorio",
  RA = () => "理由は必須です",
  DA = () => "Powód jest wymagany",
  PA = () => "Нужно указать причину",
  jA = () => "Потрібно вказати причину",
  xA = () => "Cần nhập lý do",
  qt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? TA() : e === "pt" ? kA() : e === "ch" ? qA() : e === "de" ? AA() : e === "es" ? SA() : e === "fr" ? NA() : e === "it" ? IA() : e === "jp" ? RA() : e === "pl" ? DA() : e === "ru" ? PA() : e === "uk" ? jA() : xA()
  },
  zA = () => "This member already has an active headquarters timeout",
  UA = () => "Este membro já tem uma suspensão ativa da sede",
  LA = () => "该成员已有生效中的总部禁言",
  CA = () => "Dieses Mitglied hat bereits einen aktiven Hauptquartier-Timeout",
  MA = () => "Este miembro ya tiene una suspensión activa del cuartel general",
  BA = () => "Ce membre a déjà une suspension active du quartier général",
  KA = () => "Questo membro ha già una sospensione attiva dal quartier generale",
  $A = () => "このメンバーにはすでに有効な拠点のタイムアウトがあります",
  FA = () => "Ten członek ma już aktywne zawieszenie w siedzibie",
  HA = () => "У этого участника уже есть активный тайм-аут штаб-квартиры",
  VA = () => "Цей учасник уже має активний тайм-аут штаб-квартири",
  GA = () => "Thành viên này đã có một lệnh tạm khóa trụ sở đang hiệu lực",
  YA = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? zA() : e === "pt" ? UA() : e === "ch" ? LA() : e === "de" ? CA() : e === "es" ? MA() : e === "fr" ? BA() : e === "it" ? KA() : e === "jp" ? $A() : e === "pl" ? FA() : e === "ru" ? HA() : e === "uk" ? VA() : GA()
  },
  JA = () => "This timeout is no longer active",
  WA = () => "Esta suspensão não está mais ativa",
  QA = () => "该禁言已不再生效",
  XA = () => "Dieser Timeout ist nicht mehr aktiv",
  ZA = () => "Esta suspensión ya no está activa",
  eS = () => "Cette suspension n'est plus active",
  tS = () => "Questa sospensione non è più attiva",
  rS = () => "このタイムアウトはすでに有効ではありません",
  nS = () => "To zawieszenie nie jest już aktywne",
  aS = () => "Этот тайм-аут больше не активен",
  iS = () => "Цей тайм-аут більше не активний",
  sS = () => "Lệnh tạm khóa này không còn hiệu lực",
  oS = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? JA() : e === "pt" ? WA() : e === "ch" ? QA() : e === "de" ? XA() : e === "es" ? ZA() : e === "fr" ? eS() : e === "it" ? tS() : e === "jp" ? rS() : e === "pl" ? nS() : e === "ru" ? aS() : e === "uk" ? iS() : sS()
  },
  cS = () => "That user already belongs to an alliance",
  uS = () => "Esse usuário já pertence a uma aliança",
  lS = () => "该用户已属于其他联盟",
  _S = () => "Dieser Nutzer gehört bereits einer Allianz an",
  dS = () => "Ese usuario ya pertenece a una alianza",
  fS = () => "Cet utilisateur appartient déjà à une alliance",
  hS = () => "Questo utente appartiene già a un'alleanza",
  pS = () => "そのユーザーはすでに別のアライアンスに所属しています",
  mS = () => "Ten użytkownik należy już do sojuszu",
  gS = () => "Этот пользователь уже состоит в альянсе",
  wS = () => "Цей користувач уже належить до альянсу",
  yS = () => "Người dùng đó đã thuộc một liên minh",
  vS = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? cS() : e === "pt" ? uS() : e === "ch" ? lS() : e === "de" ? _S() : e === "es" ? dS() : e === "fr" ? fS() : e === "it" ? hS() : e === "jp" ? pS() : e === "pl" ? mS() : e === "ru" ? gS() : e === "uk" ? wS() : yS()
  },
  bS = () => "The alliance is not archived",
  ES = () => "A aliança não está arquivada",
  OS = () => "该联盟未被归档",
  TS = () => "Die Allianz ist nicht archiviert",
  kS = () => "La alianza no está archivada",
  qS = () => "L'alliance n'est pas archivée",
  AS = () => "L'alleanza non è archiviata",
  SS = () => "このアライアンスはアーカイブされていません",
  NS = () => "Sojusz nie jest zarchiwizowany",
  IS = () => "Альянс не находится в архиве",
  RS = () => "Альянс не архівований",
  DS = () => "Liên minh này chưa được lưu trữ",
  PS = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? bS() : e === "pt" ? ES() : e === "ch" ? OS() : e === "de" ? TS() : e === "es" ? kS() : e === "fr" ? qS() : e === "it" ? AS() : e === "jp" ? SS() : e === "pl" ? NS() : e === "ru" ? IS() : e === "uk" ? RS() : DS()
  },
  jS = () => "The selected headquarters pixels have too much history to change at once. Select fewer pixels.",
  xS = () => "Os pixels selecionados têm histórico demais para alterar de uma vez. Selecione menos pixels.",
  zS = () => "所选总部像素的历史记录过多，无法一次性修改。请减少选择的像素。",
  US = () => "Die ausgewählten Hauptquartier-Pixel haben zu viel Verlauf, um sie auf einmal zu ändern. Wähle weniger Pixel aus.",
  LS = () => "Los píxeles seleccionados del cuartel general tienen demasiado historial para cambiarlos de una vez. Selecciona menos píxeles.",
  CS = () => "Les pixels sélectionnés du quartier général ont trop d'historique pour être modifiés en une seule fois. Sélectionnez moins de pixels.",
  MS = () => "I pixel selezionati del quartier generale hanno troppa cronologià per essere modificati in una volta. Seleziona meno pixel.",
  BS = () => "選択した拠点のピクセルは履歴が多すぎて一度に変更できません。選択するピクセルを減らしてください。",
  KS = () => "Wybrane piksele siedziby mają zbyt dużo historii, aby zmienić je naraz. Wybierz mniej pikseli.",
  $S = () => "У выбранных пикселей штаб-квартиры слишком большая история, чтобы изменить всё сразу. Выберите меньше пикселей.",
  FS = () => "Вибрані пікселі штаб-квартири мають забагато історії, щоб змінити їх за один раз. Виберіть менше пікселів.",
  HS = () => "Các pixel trụ sở đã chọn có quá nhiều lịch sử để thay đổi cùng lúc. Hãy chọn ít pixel hơn.",
  VS = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? jS() : e === "pt" ? xS() : e === "ch" ? zS() : e === "de" ? US() : e === "es" ? LS() : e === "fr" ? CS() : e === "it" ? MS() : e === "jp" ? BS() : e === "pl" ? KS() : e === "ru" ? $S() : e === "uk" ? FS() : HS()
  },
  GS = () => "This alliance has no headquarters",
  YS = () => "Esta aliança não tem sede",
  JS = () => "该联盟没有总部",
  WS = () => "Diese Allianz hat kein Hauptquartier",
  QS = () => "Esta alianza no tiene cuartel general",
  XS = () => "Cette alliance n'a pas de quartier général",
  ZS = () => "Questa alleanza non ha un quartier generale",
  eN = () => "このアライアンスには拠点がありません",
  tN = () => "Ten sojusz nie ma siedziby",
  rN = () => "У этого альянса нет штаб-квартиры",
  nN = () => "Цей альянс не має штаб-квартири",
  aN = () => "Liên minh này không có trụ sở",
  iN = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? GS() : e === "pt" ? YS() : e === "ch" ? JS() : e === "de" ? WS() : e === "es" ? QS() : e === "fr" ? XS() : e === "it" ? ZS() : e === "jp" ? eN() : e === "pl" ? tN() : e === "ru" ? rN() : e === "uk" ? nN() : aN()
  },
  sN = () => "Buy the previous overlay space upgrade first.",
  oN = () => "Compre primeiro a melhoria anterior de espaços para overlays.",
  cN = () => "请先购买上一级 Overlay 空间升级。",
  uN = () => "Kaufe zuerst die vorherige Overlay-Platz-Erweiterung.",
  lN = () => "Compra primero la mejora anterior de espacios de overlay.",
  _N = () => "Achetez d’abord l’amélioration précédente des emplacements d’overlay.",
  dN = () => "Acquista prima il precedente ampliamento degli spazi per overlay.",
  fN = () => "先に前段階のOverlay枠アップグレードを購入してください。",
  hN = () => "Najpierw kup poprzednie rozszerzenie miejsc na overlaye.",
  pN = () => "Сначала купите предыдущее расширение мест для Overlay.",
  mN = () => "Спочатку придбайте попереднє розширення місць для Overlay.",
  gN = () => "Hãy mua nâng cấp chỗ lưu overlay trước đó trước.",
  wN = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? sN() : e === "pt" ? oN() : e === "ch" ? cN() : e === "de" ? uN() : e === "es" ? lN() : e === "fr" ? _N() : e === "it" ? dN() : e === "jp" ? fN() : e === "pl" ? hN() : e === "ru" ? pN() : e === "uk" ? mN() : gN()
  },
  yN = () => "This alliance has no free overlay spaces.",
  vN = () => "Esta aliança não tem espaços para overlays livres.",
  bN = () => "此联盟没有可用的 Overlay 空间。",
  EN = () => "Diese Allianz hat keine freien Overlay-Plätze.",
  ON = () => "Esta alianza no tiene espacios de overlay libres.",
  TN = () => "Cette alliance n’a plus d’emplacement d’overlay libre.",
  kN = () => "Questa alleanza non ha spazi liberi per overlay.",
  qN = () => "この同盟には空きOverlay枠がありません。",
  AN = () => "Ten sojusz nie ma wolnych miejsc na overlaye.",
  SN = () => "У этого альянса нет свободных мест для Overlay.",
  NN = () => "Цей альянс не має вільних місць для Overlay.",
  IN = () => "Liên minh này không còn chỗ lưu overlay trống.",
  RN = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? yN() : e === "pt" ? vN() : e === "ch" ? bN() : e === "de" ? EN() : e === "es" ? ON() : e === "fr" ? TN() : e === "it" ? kN() : e === "jp" ? qN() : e === "pl" ? AN() : e === "ru" ? SN() : e === "uk" ? NN() : IN()
  },
  DN = () => "This alliance has reached its overlay storage limit. Delete an overlay or replace one with a smaller image.",
  PN = () => "Esta aliança atingiu o limite de armazenamento de overlays. Exclua um overlay ou substitua-o por uma imagem menor.",
  jN = () => "此联盟已达到 Overlay 存储上限。请删除一个 Overlay 或替换为更小的图片。",
  xN = () => "Diese Allianz hat ihr Speicherlimit für Overlays erreicht. Lösche ein Overlay oder ersetze es durch ein kleineres Bild.",
  zN = () => "Esta alianza alcanzó el límite de almacenamiento de overlays. Elimina un overlay o reemplázalo por una imagen más pequeña.",
  UN = () => "Cette alliance a atteint sa limite de stockage d’overlays. Supprimez un overlay ou remplacez-le par une image plus petite.",
  LN = () => "Questa alleanza ha raggiunto il limite di archiviazione degli overlay. Elimina un overlay o sostituiscilo con un'immagine più piccola.",
  CN = () => "この同盟はOverlayの保存容量上限に達しました。Overlayを削除するか、より小さい画像に置き換えてください。",
  MN = () => "Ten sojusz osiągnął limit miejsca na overlaye. Usuń overlay lub zastąp go mniejszym obrazem.",
  BN = () => "Этот альянс достиг лимита хранилища Overlay. Удалите Overlay или замените его изображением меньшего размера.",
  KN = () => "Цей альянс досяг ліміту сховища Overlay. Видаліть Overlay або замініть його меншим зображенням.",
  $N = () => "Liên minh này đã đạt giới hạn lưu trữ overlay. Hãy xóa một overlay hoặc thay bằng hình ảnh nhỏ hơn.",
  At = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? DN() : e === "pt" ? PN() : e === "ch" ? jN() : e === "de" ? xN() : e === "es" ? zN() : e === "fr" ? UN() : e === "it" ? LN() : e === "jp" ? CN() : e === "pl" ? MN() : e === "ru" ? BN() : e === "uk" ? KN() : $N()
  },
  FN = () => "Choose a valid image up to 8 MB.",
  HN = () => "Escolha uma imagem válida de até 8 MB.",
  VN = () => "请选择不超过 8 MB 的有效图片。",
  GN = () => "Wähle ein gültiges Bild bis zu 8 MB.",
  YN = () => "Elige una imagen válida de hasta 8 MB.",
  JN = () => "Choisissez une image valide de 8 Mo maximum.",
  WN = () => "Scegli un’immagine valida fino a 8 MB.",
  QN = () => "8 MB 以下の有効な画像を選択してください。",
  XN = () => "Wybierz prawidłowy obraz o rozmiarze do 8 MB.",
  ZN = () => "Выберите допустимое изображение размером до 8 МБ.",
  eI = () => "Виберіть дійсне зображення розміром до 8 МБ.",
  tI = () => "Chọn ảnh hợp lệ có dung lượng tối đa 8 MB.",
  St = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? FN() : e === "pt" ? HN() : e === "ch" ? VN() : e === "de" ? GN() : e === "es" ? YN() : e === "fr" ? JN() : e === "it" ? WN() : e === "jp" ? QN() : e === "pl" ? XN() : e === "ru" ? ZN() : e === "uk" ? eI() : tI()
  },
  rI = () => "Too many overlay changes are happening. Wait a moment and try again.",
  nI = () => "Muitas alterações de overlays estão acontecendo. Aguarde um momento e tente novamente.",
  aI = () => "正在进行的 Overlay 更改过多。请稍候再试。",
  iI = () => "Es werden gerade zu viele Overlays geändert. Warte einen Moment und versuche es erneut.",
  sI = () => "Se están realizando demasiados cambios en los overlays. Espera un momento e inténtalo de nuevo.",
  oI = () => "Trop de modifications d’overlays sont en cours. Attendez un instant et réessayez.",
  cI = () => "Sono in corso troppe modifiche agli overlay. Attendi un momento e riprova.",
  uI = () => "Overlayの変更が多すぎます。少し待ってからもう一度お試しください。",
  lI = () => "Trwa zbyt wiele zmian overlayów. Poczekaj chwilę i spróbuj ponownie.",
  _I = () => "Слишком много изменений Overlay. Немного подождите и попробуйте снова.",
  dI = () => "Зараз вноситься забагато змін до Overlay. Трохи зачекайте та спробуйте ще раз.",
  fI = () => "Đang có quá nhiều thay đổi overlay. Hãy chờ một lúc rồi thử lại.",
  We = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? rI() : e === "pt" ? nI() : e === "ch" ? aI() : e === "de" ? iI() : e === "es" ? sI() : e === "fr" ? oI() : e === "it" ? cI() : e === "jp" ? uI() : e === "pl" ? lI() : e === "ru" ? _I() : e === "uk" ? dI() : fI()
  },
  hI = () => "The overlay position is outside this canvas.",
  pI = () => "The overlay position is outside this canvas.",
  mI = () => "The overlay position is outside this canvas.",
  gI = () => "The overlay position is outside this canvas.",
  wI = () => "The overlay position is outside this canvas.",
  yI = () => "The overlay position is outside this canvas.",
  vI = () => "The overlay position is outside this canvas.",
  bI = () => "The overlay position is outside this canvas.",
  EI = () => "The overlay position is outside this canvas.",
  OI = () => "The overlay position is outside this canvas.",
  TI = () => "The overlay position is outside this canvas.",
  kI = () => "The overlay position is outside this canvas.",
  qI = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? hI() : e === "pt" ? pI() : e === "ch" ? mI() : e === "de" ? gI() : e === "es" ? wI() : e === "fr" ? yI() : e === "it" ? vI() : e === "jp" ? bI() : e === "pl" ? EI() : e === "ru" ? OI() : e === "uk" ? TI() : kI()
  },
  AI = () => "Select this location before setting its position.",
  SI = () => "Select this location before setting its position.",
  NI = () => "Select this location before setting its position.",
  II = () => "Select this location before setting its position.",
  RI = () => "Select this location before setting its position.",
  DI = () => "Select this location before setting its position.",
  PI = () => "Select this location before setting its position.",
  jI = () => "Select this location before setting its position.",
  xI = () => "Select this location before setting its position.",
  zI = () => "Select this location before setting its position.",
  UI = () => "Select this location before setting its position.",
  LI = () => "Select this location before setting its position.",
  CI = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? AI() : e === "pt" ? SI() : e === "ch" ? NI() : e === "de" ? II() : e === "es" ? RI() : e === "fr" ? DI() : e === "it" ? PI() : e === "jp" ? jI() : e === "pl" ? xI() : e === "ru" ? zI() : e === "uk" ? UI() : LI()
  };

function MI(r, t) {
  return (t == null ? void 0 : t.aborted) === !0 || typeof DOMException < "u" && r instanceof DOMException && r.name === "AbortError"
}
var Oe, Te;
class BI {
  constructor(t) {
    v(this, Oe, A(!0));
    v(this, Te, A(null));
    this.url = t
  }
  get online() {
    return E(h(this, Oe))
  }
  set online(t) {
    T(h(this, Oe), t, !0)
  }
  get serverTimeOffsetMs() {
    return E(h(this, Te))
  }
  set serverTimeOffsetMs(t) {
    T(h(this, Te), t, !0)
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
      throw MI(n, e == null ? void 0 : e.signal) ? n : (console.error("Fetch error:", n), this.online = !1, new Error(Vi()))
    }
  }
  async request(t, e) {
    var c;
    e = {
      credentials: "include",
      ...e
    };
    let n = await this.guardedFetch(t, e);
    if (n.status === i.FORBIDDEN && n.headers.get("x-block-reason") === "tor") throw new Error(Sg());
    const a = ((c = n.headers.get("cf-mitigated")) == null ? void 0 : c.toLowerCase()) === "challenge";
    if (n.status === 403 && a) {
      if (F.setCfLikelyAutomated(!0), !await Ut()) throw new Error(ee());
      n = await this.guardedFetch(t, e)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (n.status === i.TOO_MANY_REQUESTS) throw new ae($v());
      if (n.status === i.REQUEST_TIMEOUT) throw new Error(wm());
      if (n.status === i.SERVICE_UNAVAILABLE) throw new Error(ng())
    }
    return n
  }
}
Oe = new WeakMap, Te = new WeakMap;
class l extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}
class lR extends Error {}

function KI(r) {
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
      if (e.status === i.BAD_REQUEST) throw new Error(nd());
      if (e.status === i.CONFLICT) throw new Error(bp());
      if (e.status === i.FORBIDDEN) throw new Error(dh());
      if (e.status === i.TOO_MANY_REQUESTS) throw new Error(yt());
      if (e.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(jp());
      if (e.status === i.LOCKED) throw new Error(dw());
      if (e.status === i.UNPROCESSABLE_ENTITY) throw new Error(md());
      if (e.status === i.NOT_ACCEPTABLE) throw new Error(Qw());
      if (e.status === i.PRECONDITION_FAILED) throw new Error(Ns());
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
        if (n.status === i.GONE) throw new Error(lu());
        if (n.status === i.BAD_REQUEST) throw new Error(y_());
        if (n.status === i.TOO_MANY_REQUESTS) throw new Error(yt());
        if (n.status !== i.OK) throw new Error(o())
      } else {
        if (n.status === i.BAD_REQUEST) throw new Error(s_());
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
        if (a === "invalid_name") throw new Error(Mt());
        if (a === "invalid_discord") throw new Error(D_());
        if (typeof a == "string" && a.startsWith("name_change_cooldown:")) {
          const s = parseInt(a.split(":")[1] ?? "0", 10);
          throw new Error(Mf({
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
      if (e.status === i.BAD_REQUEST) throw new Error(Bg());
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
      if (e.status === i.FORBIDDEN) throw new Error(Uh());
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
      if (n.status === i.BAD_REQUEST) throw new Error(ef());
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
          throw (await e.json()).error === "conflict_blocked" ? new Error(Mo()) : new Error(Ao());
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

function $I(r) {
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
        throw s === "invalid_name" ? new l(Mt(), i.BAD_REQUEST) : new l(typeof s == "string" && s ? s : o(), i.BAD_REQUEST)
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
        throw s === "email_required" || s === "invalid_email" ? new l(kc(), i.BAD_REQUEST) : new l(typeof s == "string" && s ? s : o(), i.BAD_REQUEST)
      }
      if (n.status === i.CONFLICT) {
        const a = await n.json();
        if (((a == null ? void 0 : a.error) ?? "") === "email_already_in_use") {
          const c = new l(typeof(a == null ? void 0 : a.userId) == "number" ? dc({
            userId: a.userId
          }) : Zo(), i.CONFLICT);
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
      if (t.status === i.CONFLICT) throw new l(Sn(), t.status);
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
const FI = [{
    tileSize: 1e3,
    zoom: 11
  }],
  HI = 4,
  VI = 6e3,
  GI = [{
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
  YI = {
    needsPhoneVerification: "needs_phone_verification"
  },
  JI = {
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
  WI = {
    android: {
      googlePlayBilling: {
        price: 1
      },
      appName: "live.wplace.twa"
    }
  },
  QI = {
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
      name: "10 Prism",
      price: 1e3,
      priceCurrency: "fiat",
      lookupKey: "prism_10",
      items: [{
        name: "Prism",
        amount: 10
      }]
    },
    161: {
      name: "22 Prism",
      price: 2e3,
      priceCurrency: "fiat",
      lookupKey: "prism_20",
      items: [{
        name: "Prism",
        amount: 22
      }]
    },
    162: {
      name: "36 Prism",
      price: 3e3,
      priceCurrency: "fiat",
      lookupKey: "prism_30",
      items: [{
        name: "Prism",
        amount: 36
      }]
    },
    163: {
      name: "62 Prism",
      price: 5e3,
      priceCurrency: "fiat",
      lookupKey: "prism_50",
      items: [{
        name: "Prism",
        amount: 62
      }]
    },
    164: {
      name: "97 Prism",
      price: 7500,
      priceCurrency: "fiat",
      lookupKey: "prism_75",
      items: [{
        name: "Prism",
        amount: 97
      }]
    },
    165: {
      name: "135 Prism",
      price: 1e4,
      priceCurrency: "fiat",
      lookupKey: "prism_100",
      items: [{
        name: "Prism",
        amount: 135
      }]
    }
  },
  XI = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  ZI = {
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
  e0 = {
    tools: {
      wayback: {
        limit: 1e4,
        hqLimit: 5e3
      }
    }
  },
  t0 = {
    areaRadius: 250
  },
  r0 = {
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
  n0 = {
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
    seasons: FI,
    regionSize: HI,
    refreshIntervalMs: VI,
    colors: GI,
    errors: YI,
    items: JI,
    platforms: WI,
    products: QI,
    countries: XI,
    permissions: ZI,
    settings: e0,
    moderation: t0,
    alliance: r0,
    voidEvent: n0
  },
  Fe = H,
  a0 = H.seasons,
  $t = H.seasons.length - 1,
  _R = H.seasons[$t].zoom,
  dR = H.seasons[$t].tileSize,
  fR = H.permissions,
  Ft = H.settings,
  i0 = H.platforms.android,
  hR = i0.googlePlayBilling.price;

function pR(r) {
  return Fe.countries[r - 1]
}

function tt(r) {
  return tt.map.get(r)
}(r => {
  r.sharedProducts = Object.entries(Fe.products).map(([t, e]) => ({
    ...e,
    productId: t
  })).filter(t => "lookupKey" in t), r.map = s0(r.sharedProducts, t => t.lookupKey)
})(tt || (tt = {}));

function s0(r, t) {
  const e = new Map;
  for (const n in r) {
    const a = Reflect.get(r, n),
      s = t(a, n, r);
    e.set(s, a)
  }
  return e
}
const He = 5e3,
  Nt = 4,
  L = 64,
  o0 = 8;

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

function c0(r) {
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

function u0(r) {
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

function It(r) {
  const t = (r == null ? void 0 : r.role) ?? (r == null ? void 0 : r.alliance_role);
  return t === "mod" || t === "admin" || t === "leader" ? t : "member"
}

function l0(r) {
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
        throw n.error === "max_characters" ? new l(ft(), e.status) : n.error === "name_taken" ? new l(dt(), e.status) : n.error == "empty_name" ? new l(Oa(), e.status) : new l(o(), e.status)
      } else throw e.status === i.FORBIDDEN ? (await e.json().catch(() => ({}))).error === "not_enough_droplets" ? new Error(mt()) : new Error(xy()) : new Error(o())
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
        throw new Error(n.error === "invalid_markdown" ? wT() : Qc())
      } else throw e.status === i.CONFLICT ? new Error(iT()) : new Error(o())
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
      throw a.error === "not_enough_droplets" ? new Error(mt()) : a.error === "invalid_donation" ? new Error(QE()) : new Error(o())
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
      throw n.error === "not_enough_alliance_coins" ? new Error(re()) : n.error === "already_unlocked" ? new Error(Et()) : n.error === "headquarters_not_unlocked" ? new Error(kt()) : n.error === "headquarters_upgrade_prerequisite" ? new Error(dq()) : n.error === "template_upgrade_prerequisite" ? new Error(wN()) : new Error(o())
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
      throw s.error === "template_limit_reached" ? new Error(RN()) : s.error === "template_storage_limit_reached" ? new Error(At()) : s.error === "invalid_template_image" ? new Error(St()) : s.error === "template_upload_rate_limited" ? new Error(We()) : a.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
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
      throw a.error === "invalid_template_placement" ? new Error(qI()) : a.error === "template_location_not_selected" ? new Error(CI()) : n.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
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
      throw s.error === "template_storage_limit_reached" ? new Error(At()) : s.error === "invalid_template_image" ? new Error(St()) : s.error === "template_upload_rate_limited" ? new Error(We()) : a.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
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
      throw n.error === "not_enough_alliance_coins" ? new Error(re()) : n.error === "name_taken" ? new Error(dt()) : n.error === "name_unchanged" ? new Error(VO()) : n.error === "max_characters" ? new Error(ft()) : new Error(o())
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
      throw s.error === "color-not-owned" ? new Error(Ot()) : new Error(o())
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
      if (e.status !== i.OK) throw (await e.json().catch(() => ({}))).error === "asset_version_selected" ? new Error(FT()) : new Error(o())
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
      if (n.status !== i.OK) throw (await n.json().catch(() => ({}))).error === "editor_already_granted" ? new Error(RT()) : new Error(o())
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
      throw a.error === "headquarters_credit_required" ? new Error(Mk()) : a.error === "headquarters_not_unlocked" ? new Error(kt()) : new Error(o())
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
      throw n.error === "not_enough_alliance_coins" ? new Error(re()) : n.error === "already_unlocked" ? new Error(Et()) : n.error === "headquarters_anchor_required" ? new Error(Ak()) : new Error(o())
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
      throw n.error === "not_enough_alliance_coins" ? new Error(re()) : n.error === "headquarters_size_prerequisite" ? new Error(Zk()) : new Error(o())
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
      throw s.error === "color-not-owned" ? new Error(Ot()) : s.error === "not_enough_hq_charges" ? new Error(Lq()) : s.error === "headquarters_timed_out" ? new Error(OA()) : s.error === "headquarters_locked" ? new Error(lA()) : s.error === "no_pixel_changes" ? new Error(Qq()) : new Error(o())
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
      throw e.status === i.FORBIDDEN ? new Error(b()) : new Error(kq())
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
      throw s.error === "headquarters_timeout_active" ? new Error(YA()) : s.error === "invalid_timeout_reason" ? new Error(qt()) : new Error(o())
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
      throw a.error === "headquarters_timeout_inactive" ? new Error(oS()) : a.error === "invalid_timeout_reason" ? new Error(qt()) : new Error(o())
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
      throw e.status === i.BAD_REQUEST ? (await e.json().catch(() => ({}))).error === "max_invites" ? new Error(kE()) : new Error(o()) : e.status === i.FORBIDDEN ? new Error(b()) : new Error(o())
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
          if (e.status === i.BAD_REQUEST) throw new Error(LE());
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
      throw new Error(im())
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
      n.set("limit", String((e == null ? void 0 : e.limit) ?? Ft.tools.wayback.hqLimit)), e != null && e.before && n.set("before", String(e.before)), e != null && e.area && (n.set("minX", String(e.area.minX)), n.set("minY", String(e.area.minY)), n.set("maxX", String(e.area.maxX)), n.set("maxY", String(e.area.maxY)));
      const a = await this.request(`/staff/dashboard/alliances/${t}/headquarters/events?${n.toString()}`, {
        credentials: "include"
      });
      if (a.status === i.NOT_FOUND) throw new Error(Zb());
      if (a.status !== i.OK) throw new Error(o());
      return a.json()
    }
    async getAdminAllianceHqArea(t, e) {
      const n = c0(e);
      if (n.length === 0) throw new Error(o());
      const a = await this.getAdminAllianceHqAreaChunk(t, n[0]),
        s = [...a.pixels];
      for (let c = 1; c < n.length; c += Nt) {
        const u = await Promise.all(n.slice(c, c + Nt).map(d => this.getAdminAllianceHqAreaChunk(t, d, a.eventHwm)));
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
      const a = u0(e),
        s = new Array(a.length);
      let c = 0;
      const u = Array.from({
        length: Math.min(o0, a.length)
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
      if (s.status === i.CONTENT_TOO_LARGE) throw new Error(VS());
      if (s.status === i.NOT_FOUND) throw new Error(Rm());
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
          role: It(s),
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
          role: It(u),
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
        throw (a == null ? void 0 : a.error) === "user_not_in_alliance" ? new Error(Nd()) : new Error(o())
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
      if (a.status === i.NOT_FOUND) throw new Error(iN());
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
        throw (a == null ? void 0 : a.error) === "user_not_found" ? new Error(dE()) : (a == null ? void 0 : a.error) === "user_already_in_alliance" ? new Error(vS()) : (a == null ? void 0 : a.error) === "alliance_not_archived" ? new Error(PS()) : new Error(o())
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

function _0(r) {
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

function d0(r) {
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

function f0(r) {
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
      if (e.status === i.NOT_FOUND) throw new Error(Ct());
      if (e.status === i.FORBIDDEN) throw new Error(Kt());
      if (e.status === i.CONFLICT) throw new Error(Bt());
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

function mR(r) {
  const t = Math.floor(r / K.hour);
  r -= t * K.hour;
  const e = Math.floor(r / K.minute);
  r -= e * K.minute;
  const a = Math.floor(r / K.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${a}` : `${e}:${a}`
}

function gR(r) {
  const t = r.getFullYear(),
    e = String(r.getMonth() + 1).padStart(2, "0"),
    n = String(r.getDate()).padStart(2, "0"),
    a = String(r.getHours()).padStart(2, "0"),
    s = String(r.getMinutes()).padStart(2, "0"),
    c = String(r.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${n} ${a}:${s}:${c}`
}
const h0 = 30 * K.minute;

function p0(r) {
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
      Date.now() - this.lastHotspotRequestAt < h0 || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
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

function m0(r) {
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
const wR = {
    griefing: Ou(),
    "multi-accounting": hf(),
    "hate-speech": Ju(),
    bot: za(),
    doxxing: eo(),
    "inappropriate-content": bl(),
    other: ci()
  },
  yR = {
    doxxing: ho(),
    "hate-speech": cl(),
    griefing: zu(),
    "multi-accounting": Af(),
    bot: Ja(),
    "inappropriate-content": jl(),
    other: bi()
  },
  vR = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  Rt = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  bR = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  g0 = 365 * K.day;

function Ht(r) {
  if (!r) return null;
  const e = (r instanceof Date ? r : new Date(r)).getTime();
  return Number.isFinite(e) ? e : null
}

function ER(r, t = Date.now()) {
  const e = Ht(r);
  return e === null ? !1 : e - t >= g0
}

function OR(r, t = Date.now()) {
  const e = Ht(r);
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

function w0(r) {
  return class extends r {
    async getModeratorTickets() {
      const t = await this.request("/staff/tickets/get", {
        method: "GET",
        credentials: "include"
      });
      if (t.status !== i.OK) throw new l(o(), t.status);
      const e = await t.json();
      for (const n of e.tickets) n.reports.sort((a, s) => Rt[a.reason] - Rt[s.reason]);
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
        throw (n == null ? void 0 : n.error) === "reversal_already_pending" ? new l(hb(), i.CONFLICT) : new l(o(), i.CONFLICT)
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
      if (a.status === i.FORBIDDEN) throw new l(Ab(), i.FORBIDDEN);
      if (a.status === i.CONFLICT) throw new l(Mb(), i.CONFLICT);
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

function y0(r) {
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
const v0 = ["droplets", "prism"];

function TR(r) {
  return v0.map(t => ({
    currency: t,
    amount: r.reduce((e, n) => e + (n.currency === t ? n.amount : 0), 0)
  })).filter(t => t.amount > 0)
}

function b0(r) {
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
      if (e.status !== i.OK) throw e.status === i.NOT_FOUND ? new Error(Ct()) : e.status === i.FORBIDDEN ? new Error(Kt()) : e.status === i.CONFLICT ? new Error(Bt()) : new Error(o())
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

function Dt(r, t) {
  const e = {};
  for (const n of r) {
    const a = t(n),
      s = e[a];
    s ? s.push(n) : e[a] = [n]
  }
  return e
}

function kR(r, t) {
  const e = {};
  for (const n of r) {
    const a = t(n);
    e[a] = n
  }
  return e
}

function E0(r) {
  return class extends r {
    async paint(t) {
      const e = Dt(t, u => `t=(${u.tile[0]},${u.tile[1]}),s=${u.season}`),
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
        if (c.status === i.UNAUTHORIZED) throw new Error(vt());
        if (c.status === i.FORBIDDEN) {
          if (c.headers.get("cf-mitigated") === "challenge") throw new Error(pt());
          const u = await c.json();
          if ((u == null ? void 0 : u.error) === "timeout") {
            const d = new Date(Date.now() + ((u == null ? void 0 : u.durationMs) ?? 0));
            throw new Error(bt({
              until: d.toLocaleString()
            }))
          }
          if ((u == null ? void 0 : u.error) === "refresh") throw new Error(wt());
          if ((u == null ? void 0 : u.error) === "color-not-owned") throw new Error(gt());
          if ((u == null ? void 0 : u.error) === "event-pixel-present") throw new Error(ht());
          if ((u == null ? void 0 : u.error) === "challenge-required")
            if (u.tier) {
              if (await se(u.tier)) return this.paint(t);
              throw new Error(ee())
            } else console.error("Challenge required but no tier provided", u);
          if ((u == null ? void 0 : u.error) === "verification-required") {
            const f = (await Xe().get()).sealed_result;
            if (f) return await this.verifyAnticheat(f), this.paint(t);
            throw new Error(o())
          }
          J.refresh()
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
        throw s === "timelapse_too_many_events" ? new l(Fm(), i.BAD_REQUEST) : new l(typeof s == "string" && s ? s : o(), i.BAD_REQUEST)
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
      const s = Dt(t, d => `t=(${d.tile[0]},${d.tile[1]}),s=${d.season}`),
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
        if (d.status === i.UNAUTHORIZED) throw new Error(vt());
        if (d.status === i.FORBIDDEN) {
          if (d.headers.get("cf-mitigated") === "challenge") throw new Error(pt());
          const f = await d.json();
          if ((f == null ? void 0 : f.error) === "timeout") {
            const q = new Date(Date.now() + ((f == null ? void 0 : f.durationMs) ?? 0));
            throw new Error(bt({
              until: q.toLocaleString()
            }))
          }
          if ((f == null ? void 0 : f.error) === "refresh") throw new Error(wt());
          if ((f == null ? void 0 : f.error) === "color-not-owned") throw new Error(gt());
          if ((f == null ? void 0 : f.error) === "event-pixel-present") throw new Error(ht());
          J.refresh()
        } else throw new Error(o())
      }
    }
    async adminAutoPainterPaint(t, e, n) {
      const a = O0(t),
        s = await T0(a),
        c = new FormData;
      c.append("fingerprint", e), c.append("season", a.season.toString()), c.append("px0", a.offsetX.toString()), c.append("py0", a.offsetY.toString()), c.append("width", a.width.toString()), c.append("height", a.height.toString()), c.append("pixels", t.length.toString()), c.append("bitmap", s, "auto-painter.png"), c.append("userId", n.toString());
      const u = await this.request("/staff/tools/auto-painter/paint", {
        method: "POST",
        body: c,
        credentials: "include"
      });
      if (u.status === i.FORBIDDEN) {
        const d = await u.json().catch(() => null);
        if (typeof(d == null ? void 0 : d.charges) == "number") throw new Error(Wh({
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

function O0(r) {
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
      [Wt, Qt, Xt] = x.rgb;
    g[Ue] = Wt, g[Ue + 1] = Qt, g[Ue + 2] = Xt, g[Ue + 3] = I === 0 ? 1 : 255
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
async function T0(r) {
  const t = k0(r.width, r.height),
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

function k0(r, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(r, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = r, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}

function q0(r) {
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
      throw e.status === i.UNAUTHORIZED ? new Error(sv()) : e.status === i.FORBIDDEN ? new Error(Lw()) : e.status === i.CONFLICT ? new Error(kw()) : new Error(o())
    }
  }
}

function A0(r) {
  return class extends r {
    validWaybackInput(t) {
      const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
        n = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < a0.length,
        a = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= Ft.tools.wayback.limit,
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
class S0 extends KI($I(l0(_0(d0(f0(p0(m0(w0(y0(b0(E0(q0(A0(BI)))))))))))))) {}
const $ = new S0(xt);
typeof window < "u" && nr(() => {
  let r = $.online;
  ar(() => {
    const t = $.online;
    t && !r && window.dispatchEvent(new CustomEvent("wplace:online")), r = t
  })
});

function Vt(r, t) {
  if (!(r != null && r.length)) return !1;
  for (const e of r)
    if (e === t) return !0;
  return !1
}

function N0(r, t) {
  for (const e of t)
    if (Vt(r, e)) return !0;
  return !1
}

function Gt(r) {
  const t = atob(r),
    e = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
  return e
}

function I0(r) {
  if (typeof Buffer < "u") return Buffer.from(r).toString("base64");
  let t = "";
  for (let e = 0; e < r.length; e++) t += String.fromCharCode(r[e]);
  return btoa(t)
}
class R0 {
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

function qR(r) {
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

function AR(r) {
  if (typeof FileReader > "u") {
    const t = r.type || "application/octet-stream";
    return r.arrayBuffer().then(e => `data:${t};base64,${I0(new Uint8Array(e))}`)
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

function SR(r) {
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

function NR(...r) {
  return r.filter(Boolean).join(" ")
}
const D0 = typeof document < "u";
let Pt = 0;
var ke, qe, Ae;
class P0 {
  constructor() {
    v(this, ke, A($e([])));
    v(this, qe, A($e([])));
    v(this, Ae, t => {
      const e = this.toasts.findIndex(n => n.id === t);
      return e === -1 ? null : e
    });
    w(this, "addToast", t => {
      D0 && this.toasts.unshift(t)
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
      } = t, a = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((u = t.id) == null ? void 0 : u.length) > 0 ? t.id : Pt++, s = t.dismissable === void 0 ? !0 : t.dismissable, c = t.type === void 0 ? "default" : t.type;
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
          const u = j0(c);
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
      const n = (e == null ? void 0 : e.id) || Pt++;
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
    return E(h(this, ke))
  }
  set toasts(t) {
    T(h(this, ke), t, !0)
  }
  get heights() {
    return E(h(this, qe))
  }
  set heights(t) {
    T(h(this, qe), t, !0)
  }
}
ke = new WeakMap, qe = new WeakMap, Ae = new WeakMap;

function j0(r) {
  return r && typeof r == "object" && "status" in r ? `HTTP error! Status: ${r.status}` : `Error! ${r}`
}
const P = new P0;

function x0(r, t) {
  return P.create({
    message: r,
    ...t
  })
}
var Ye;
class IR {
  constructor() {
    v(this, Ye, ne(() => P.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return E(h(this, Ye))
  }
}
Ye = new WeakMap;
const z0 = x0,
  U0 = Object.assign(z0, {
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
class L0 {
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
      return new R0(Gt(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
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
    T(h(this, Se), t, !0)
  }
  get loading() {
    return E(h(this, Ne))
  }
  set loading(t) {
    T(h(this, Ne), t, !0)
  }
  get notificationCount() {
    return E(h(this, Ie))
  }
  set notificationCount(t) {
    T(h(this, Ie), t, !0)
  }
  get lastFetch() {
    return E(h(this, Re))
  }
  set lastFetch(t) {
    T(h(this, Re), t)
  }
  get charges() {
    return E(h(this, De))
  }
  set charges(t) {
    T(h(this, De), t)
  }
  get cooldown() {
    return E(h(this, Pe))
  }
  set cooldown(t) {
    T(h(this, Pe), t)
  }
  get flagsBitmap() {
    return E(h(this, je))
  }
  set flagsBitmap(t) {
    T(h(this, je), t)
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
      return console.error(n), U0.warning(Zf(), {
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
    return Vt((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return N0((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
Se = new WeakMap, Ne = new WeakMap, Ie = new WeakMap, Re = new WeakMap, De = new WeakMap, Pe = new WeakMap, je = new WeakMap, xe = new WeakMap;
const J = new L0;
let y;
const U = new Array(128).fill(void 0);
U.push(void 0, null, !0, !1);

function m(r) {
  return U[r]
}
let oe = U.length;

function k(r) {
  oe === U.length && U.push(U.length + 1);
  const t = oe;
  return oe = U[t], U[t] = r, t
}

function C(r, t) {
  try {
    return r.apply(this, t)
  } catch (e) {
    y.__wbindgen_export_0(k(e))
  }
}

function V(r) {
  return r == null
}
const Yt = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && Yt.decode();
let ie = null;

function Me() {
  return (ie === null || ie.byteLength === 0) && (ie = new Uint8Array(y.memory.buffer)), ie
}

function Be(r, t) {
  return r = r >>> 0, Yt.decode(Me().subarray(r, r + t))
}

function C0(r) {
  r < 132 || (U[r] = oe, oe = r)
}

function jt(r) {
  const t = m(r);
  return C0(r), t
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
  M0 = typeof Ke.encodeInto == "function" ? function(r, t) {
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
      d = M0(r, u);
    c += d.written, a = e(a, n, c, 1) >>> 0
  }
  return Q = c, a
}

function B0(r) {
  const t = ze(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = Q;
  y.set_discord_id(t, e)
}

function K0(r) {
  const t = ze(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = Q;
  y.set_fingerprint(t, e)
}

function $0(r) {
  const t = ze(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = Q;
  y.set_detected_bot(t, e)
}

function F0(r) {
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

function H0(r) {
  y.set_cf_likely_automated(r)
}

function V0(r) {
  y.set_automated_clicks(r)
}

function G0(r) {
  const t = ze(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = Q;
  y.request_url(t, e)
}

function Y0(r) {
  y.set_automated_browser(r)
}
async function J0(r, t) {
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

function W0() {
  const r = {};
  return r.wbg = {}, r.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    const e = m(t).buffer;
    return k(e)
  }, r.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return C(function(t, e) {
      const n = m(t).call(m(e));
      return k(n)
    }, arguments)
  }, r.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return C(function(t, e, n) {
      const a = m(t).call(m(e), m(n));
      return k(a)
    }, arguments)
  }, r.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    const e = m(t).crypto;
    return k(e)
  }, r.wbg.__wbg_document_d249400bd7bd996d = function(t) {
    const e = m(t).document;
    return V(e) ? 0 : k(e)
  }, r.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return C(function(t, e) {
      m(t).getRandomValues(m(e))
    }, arguments)
  }, r.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return C(function(t, e) {
      const n = Reflect.get(m(t), m(e));
      return k(n)
    }, arguments)
  }, r.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return C(function(t) {
      return m(t).hasFocus()
    }, arguments)
  }, r.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return C(function(t) {
      const e = m(t).innerWidth;
      return k(e)
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
    return k(e)
  }, r.wbg.__wbg_navigator_1577371c070c8947 = function(t) {
    const e = m(t).navigator;
    return k(e)
  }, r.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    const e = new Uint8Array(m(t));
    return k(e)
  }, r.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    const n = new Function(Be(t, e));
    return k(n)
  }, r.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, n) {
    const a = new Uint8Array(m(t), e >>> 0, n >>> 0);
    return k(a)
  }, r.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return k(e)
  }, r.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    const e = m(t).node;
    return k(e)
  }, r.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, r.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    const e = m(t).process;
    return k(e)
  }, r.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return C(function(t, e) {
      m(t).randomFillSync(jt(e))
    }, arguments)
  }, r.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return C(function() {
      const t = module.require;
      return k(t)
    }, arguments)
  }, r.wbg.__wbg_set_65595bdd868b3009 = function(t, e, n) {
    m(t).set(m(e), n >>> 0)
  }, r.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return V(t) ? 0 : k(t)
  }, r.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return V(t) ? 0 : k(t)
  }, r.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return V(t) ? 0 : k(t)
  }, r.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return V(t) ? 0 : k(t)
  }, r.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, n) {
    const a = m(t).subarray(e >>> 0, n >>> 0);
    return k(a)
  }, r.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    const e = m(t).versions;
    return k(e)
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
    return k(t)
  }, r.wbg.__wbindgen_number_get = function(t, e) {
    const n = m(e),
      a = typeof n == "number" ? n : void 0;
    Ve().setFloat64(t + 8, V(a) ? 0 : a, !0), Ve().setInt32(t + 0, !V(a), !0)
  }, r.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = m(t);
    return k(e)
  }, r.wbg.__wbindgen_object_drop_ref = function(t) {
    jt(t)
  }, r.wbg.__wbindgen_string_new = function(t, e) {
    const n = Be(t, e);
    return k(n)
  }, r.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(Be(t, e))
  }, r
}

function Q0(r, t) {
  return y = r.exports, Jt.__wbindgen_wasm_module = t, Y = null, ie = null, y
}
async function Jt(r) {
  if (y !== void 0) return y;
  typeof r < "u" && (Object.getPrototypeOf(r) === Object.prototype ? {
    module_or_path: r
  } = r : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof r > "u" && (r = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = W0();
  (typeof r == "string" || typeof Request == "function" && r instanceof Request || typeof URL == "function" && r instanceof URL) && (r = fetch(r));
  const {
    instance: e,
    module: n
  } = await J0(await r, t);
  return Q0(e, n)
}
class X0 {
  constructor() {
    w(this, "interval");
    w(this, "storagesEmpty", !1);
    w(this, "storages", [new Ge, new rt, new nt, new eR]);
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
        await Jt(ir), (t = J.data) != null && t.id && Qe(J.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: Z0((n, a) => {
            let s = null;
            return n instanceof Request ? s = n.url : n instanceof URL ? s = n.href : typeof n == "string" && (s = n), s !== null && !s.startsWith("/") && G0(s), e.call(window, n, a)
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
    await this.loadPawtect(), H0(t)
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
    if (!await this.loadPawtect()) throw new Error(ly());
    const n = navigator.webdriver,
      [a, s] = await Promise.all([at(), rn().catch(c => (console.error(c), {
        bot: !1
      }))]);
    return Qe(J.data.id), B0(J.data.discordId ?? ""), K0(a), Y0(n), V0(et.automatedClicks), s.bot && $0(s.botKind ?? "unknown"), F0(t)
  }
}

function Z0(r) {
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
class eR {
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
const F = new X0;
export {
  Zb as $, jl as A, cl as B, ho as C, Ja as D, hf as E, Rt as F, TR as G, tt as H, i0 as I, hR as J, P as K, NR as L, IR as M, mR as N, uR as O, _R as P, R as Q, oR as R, fR as S, K as T, sR as U, cR as V, lR as W, an as X, Ft as Y, $t as Z, Rm as _, wR as a, dE as a0, pR as a1, kc as a2, a0 as a3, AR as a4, SR as a5, ER as a6, OR as a7, ae as a8, kq as a9, l as aa, lA as ab, VO as ac, QE as ad, St as ae, gR as af, R0 as ag, Gt as ah, ly as ai, Bg as aj, yR as ak, bR as al, kR as am, Gl as an, _t as ao, $ as b, dR as c, Fe as d, o as e, i as f, et as g, mt as h, eo as i, bl as j, Ju as k, za as l, Ou as m, Zf as n, Ab as o, F as p, Ut as q, im as r, vR as s, U0 as t, J as u, ee as v, se as w, qR as x, sv as y, zu as z
};