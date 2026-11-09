const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./BItM99zw.js", "./DXDHrD2o.js", "./DDhO7ley.js", "./pKOrQQBa.js", "./MIjkXV5b.js"]))) => i.map(i => d[i]);
import {
  Bt as e,
  Ft as t,
  Lt as n,
  Nt as r,
  Vt as i,
  Wt as a,
  pt as o,
  un as s,
  wt as c,
  xt as l
} from "./DXDHrD2o.js";
import {
  a as u
} from "./DDhO7ley.js";
import {
  n as d,
  t as f
} from "./a7QZC4SB.js";
import {
  n as p
} from "./DwvdnolT.js";
import {
  t as m
} from "./B1ShvYww.js";
import {
  n as ee,
  o as te,
  t as ne
} from "./pKOrQQBa.js";
import {
  r as re,
  t as ie
} from "./MIjkXV5b.js";
import {
  c as ae,
  n as oe,
  s as se
} from "./FnlLczIa.js";
var ce = `` + new URL(`../assets/pawtect_wasm_bg.Cd8ln05J.wasm`, import.meta.url).href,
  le = {
    UntrustedPaintHold: 1,
    UntrustedPointer: 2,
    UntrustedPalette: 4,
    UntrustedPaintSubmit: 8,
    TamperedResponse: 16,
    TamperedProfileLimits: 32
  },
  ue = 0;

function de(e) {
  ue |= e
}

function fe(e, t) {
  e.isTrusted || (ue |= t)
}

function pe(e) {
  try {
    let t = Object.prototype.hasOwnProperty;
    (t.call(e, `json`) || t.call(e, `text`)) && (ue |= le.TamperedResponse)
  } catch {
    ue |= le.TamperedResponse
  }
}

function me(e) {
  let t = ue;
  return e && Math.abs(e.maxFavoriteLocations) === 1 / 0 && (t |= le.TamperedProfileLimits), t
}
var he = `2.0.0`,
  h = {
    Awesomium: `awesomium`,
    Cef: `cef`,
    CefSharp: `cefsharp`,
    CoachJS: `coachjs`,
    Electron: `electron`,
    FMiner: `fminer`,
    Geb: `geb`,
    NightmareJS: `nightmarejs`,
    Phantomas: `phantomas`,
    PhantomJS: `phantomjs`,
    Rhino: `rhino`,
    Selenium: `selenium`,
    Sequentum: `sequentum`,
    SlimerJS: `slimerjs`,
    WebDriverIO: `webdriverio`,
    WebDriver: `webdriver`,
    HeadlessChrome: `headless_chrome`,
    Unknown: `unknown`
  },
  g = class e extends Error {
    constructor(t, n) {
      super(n), this.state = t, this.name = `BotdError`, Object.setPrototypeOf(this, e.prototype)
    }
  };

function ge(e, t) {
  let n = {},
    r = {
      bot: !1
    };
  for (let i in t) {
    let a = t[i],
      o = a(e),
      s = {
        bot: !1
      };
    typeof o == `string` ? s = {
      bot: !0,
      botKind: o
    } : o && (s = {
      bot: !0,
      botKind: h.Unknown
    }), n[i] = s, s.bot && (r = s)
  }
  return [n, r]
}
async function _e(e) {
  let t = {},
    n = Object.keys(e);
  return await Promise.all(n.map(async n => {
    let r = e[n];
    try {
      t[n] = {
        value: await r(),
        state: 0
      }
    } catch (e) {
      e instanceof g ? t[n] = {
        state: e.state,
        error: `${e.name}: ${e.message}`
      } : t[n] = {
        state: -3,
        error: e instanceof Error ? `${e.name}: ${e.message}` : String(e)
      }
    }
  })), t
}

function ve({
  appVersion: e
}) {
  if (e.state !== 0) return !1;
  if (/headless/i.test(e.value)) return h.HeadlessChrome;
  if (/electron/i.test(e.value)) return h.Electron;
  if (/slimerjs/i.test(e.value)) return h.SlimerJS
}

function ye(e, t) {
  return e.indexOf(t) !== -1
}

function _(e, t) {
  return e.indexOf(t) !== -1
}

function be(e, t) {
  if (`find` in e) return e.find(t);
  for (let n = 0; n < e.length; n++)
    if (t(e[n], n, e)) return e[n]
}

function xe(e) {
  return Object.getOwnPropertyNames(e)
}

function Se(e, ...t) {
  for (let n of t)
    if (typeof n == `string`) {
      if (ye(e, n)) return !0
    } else if (be(e, e => n.test(e)) != null) return !0;
  return !1
}

function Ce(e) {
  return e.reduce((e, t) => e + +!!t, 0)
}

function we({
  documentElementKeys: e
}) {
  if (e.state !== 0) return !1;
  if (Se(e.value, `selenium`, `webdriver`, `driver`)) return h.Selenium
}

function Te({
  errorTrace: e
}) {
  if (e.state !== 0) return !1;
  if (/PhantomJS/i.test(e.value)) return h.PhantomJS
}

function Ee({
  evalLength: e,
  browserKind: t,
  browserEngineKind: n
}) {
  if (e.state !== 0 || t.state !== 0 || n.state !== 0) return;
  let r = e.value;
  return n.value === `unknown` ? !1 : r === 37 && !ye([`webkit`, `gecko`], n.value) || r === 39 && !ye([`internet_explorer`], t.value) || r === 33 && !ye([`chromium`], n.value)
}

function De({
  functionBind: e
}) {
  if (e.state === -2) return h.PhantomJS
}

function Oe({
  languages: e
}) {
  if (e.state === 0 && e.value.length === 0) return h.HeadlessChrome
}

function ke({
  mimeTypesConsistent: e
}) {
  if (e.state === 0 && !e.value) return h.Unknown
}

function Ae({
  notificationPermissions: e,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== `chrome`) return !1;
  if (e.state === 0 && e.value) return h.HeadlessChrome
}

function je({
  pluginsArray: e
}) {
  if (e.state === 0 && !e.value) return h.HeadlessChrome
}

function Me({
  pluginsLength: e,
  android: t,
  browserKind: n,
  browserEngineKind: r
}) {
  if (e.state === 0 && t.state === 0 && n.state === 0 && r.state === 0 && !(n.value !== `chrome` || t.value || r.value !== `chromium`) && e.value === 0) return h.HeadlessChrome
}

function Ne({
  process: e
}) {
  var t;
  if (e.state !== 0) return !1;
  if (e.value.type === `renderer` || ((t = e.value.versions) == null ? void 0 : t.electron) != null) return h.Electron
}

function Pe({
  productSub: e,
  browserKind: t
}) {
  if (e.state !== 0 || t.state !== 0) return !1;
  if ((t.value === `chrome` || t.value === `safari` || t.value === `opera` || t.value === `wechat`) && e.value !== `20030107`) return h.Unknown
}

function Fe({
  userAgent: e
}) {
  if (e.state !== 0) return !1;
  if (/PhantomJS/i.test(e.value)) return h.PhantomJS;
  if (/Headless/i.test(e.value)) return h.HeadlessChrome;
  if (/Electron/i.test(e.value)) return h.Electron;
  if (/slimerjs/i.test(e.value)) return h.SlimerJS
}

function Ie({
  webDriver: e
}) {
  if (e.state === 0 && e.value) return h.HeadlessChrome
}

function Le({
  webGL: e
}) {
  if (e.state === 0) {
    let {
      vendor: t,
      renderer: n
    } = e.value;
    if (t == `Brian Paul` && n == `Mesa OffScreen`) return h.HeadlessChrome
  }
}

function Re({
  windowExternal: e
}) {
  if (e.state !== 0) return !1;
  if (/Sequentum/i.test(e.value)) return h.Sequentum
}

function ze({
  windowSize: e,
  documentFocus: t
}) {
  if (e.state !== 0 || t.state !== 0) return !1;
  let {
    outerWidth: n,
    outerHeight: r
  } = e.value;
  if (t.value && n === 0 && r === 0) return h.HeadlessChrome
}

function Be({
  distinctiveProps: e
}) {
  if (e.state !== 0) return !1;
  let t = e.value,
    n;
  for (n in t)
    if (t[n]) return n
}
var Ve = {
  detectAppVersion: ve,
  detectDocumentAttributes: we,
  detectErrorTrace: Te,
  detectEvalLengthInconsistency: Ee,
  detectFunctionBind: De,
  detectLanguagesLengthInconsistency: Oe,
  detectNotificationPermissions: Ae,
  detectPluginsArray: je,
  detectPluginsLengthInconsistency: Me,
  detectProcess: Ne,
  detectUserAgent: Fe,
  detectWebDriver: Ie,
  detectWebGL: Le,
  detectWindowExternal: Re,
  detectWindowSize: ze,
  detectMimeTypesConsistent: ke,
  detectProductSub: Pe,
  detectDistinctiveProperties: Be
};

function He() {
  let e = navigator.appVersion;
  if (e == null) throw new g(-1, `navigator.appVersion is undefined`);
  return e
}

function Ue() {
  if (document.documentElement === void 0) throw new g(-1, `document.documentElement is undefined`);
  let {
    documentElement: e
  } = document;
  if (typeof e.getAttributeNames != `function`) throw new g(-2, `document.documentElement.getAttributeNames is not a function`);
  return e.getAttributeNames()
}

function We() {
  try {
    null[0]()
  } catch (e) {
    if (e instanceof Error && e.stack != null) return e.stack.toString()
  }
  throw new g(-3, `errorTrace signal unexpected behaviour`)
}

function Ge() {
  return eval.toString().length
}

function Ke() {
  if (Function.prototype.bind === void 0) throw new g(-2, `Function.prototype.bind is undefined`);
  return Function.prototype.bind.toString()
}

function qe() {
  var e;
  let t = window,
    n = navigator;
  return Ce([`webkitPersistentStorage` in n, `webkitTemporaryStorage` in n, n.vendor.indexOf(`Google`) === 0, `webkitResolveLocalFileSystemURL` in t, `BatteryManager` in t, `webkitMediaStream` in t, `webkitSpeechGrammar` in t]) >= 5 ? `chromium` : Ce([`ApplePayError` in t, `CSSPrimitiveValue` in t, `Counter` in t, n.vendor.indexOf(`Apple`) === 0, `getStorageUpdates` in n, `WebKitMediaKeys` in t]) >= 4 ? `webkit` : Ce([`buildID` in navigator, `MozAppearance` in (((e = document.documentElement) == null ? void 0 : e.style) ?? {}), `onmozfullscreenchange` in t, `mozInnerScreenX` in t, `CSSMozDocumentRule` in t, `CanvasCaptureMediaStream` in t]) >= 4 ? `gecko` : `unknown`
}

function Je() {
  var e;
  let t = (e = navigator.userAgent) == null ? void 0 : e.toLowerCase();
  return _(t, `edg/`) ? `edge` : _(t, `trident`) || _(t, `msie`) ? `internet_explorer` : _(t, `wechat`) ? `wechat` : _(t, `firefox`) ? `firefox` : _(t, `opera`) || _(t, `opr`) ? `opera` : _(t, `chrome`) ? `chrome` : _(t, `safari`) ? `safari` : `unknown`
}

function Ye() {
  let e = qe(),
    t = e === `chromium`,
    n = e === `gecko`,
    r = window,
    i = navigator,
    a = `connection`;
  return t ? Ce([!(`SharedWorker` in r), i[a] && `ontypechange` in i[a], !(`sinkId` in new Audio)]) >= 2 : n ? Ce([`onorientationchange` in r, `orientation` in r, /android/i.test(i.appVersion)]) >= 2 : !1
}

function Xe() {
  return document.hasFocus !== void 0 && document.hasFocus()
}

function Ze() {
  let e = window;
  return Ce([!(`MediaSettingsRange` in e), `RTCEncodedAudioFrame` in e, `` + e.Intl == `[object Intl]`, `` + e.Reflect == `[object Reflect]`]) >= 3
}

function Qe() {
  let e = navigator,
    t = [],
    n = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if (n !== void 0 && t.push([n]), Array.isArray(e.languages)) qe() === `chromium` && Ze() || t.push(e.languages);
  else if (typeof e.languages == `string`) {
    let n = e.languages;
    n && t.push(n.split(`,`))
  }
  return t
}

function $e() {
  if (navigator.mimeTypes === void 0) throw new g(-1, `navigator.mimeTypes is undefined`);
  let {
    mimeTypes: e
  } = navigator, t = Object.getPrototypeOf(e) === MimeTypeArray.prototype;
  for (let n = 0; n < e.length; n++) t && (t = Object.getPrototypeOf(e[n]) === MimeType.prototype);
  return t
}
async function et() {
  if (window.Notification === void 0) throw new g(-1, `window.Notification is undefined`);
  if (navigator.permissions === void 0) throw new g(-1, `navigator.permissions is undefined`);
  let {
    permissions: e
  } = navigator;
  if (typeof e.query != `function`) throw new g(-2, `navigator.permissions.query is not a function`);
  try {
    let t = await e.query({
      name: `notifications`
    });
    return window.Notification.permission === `denied` && t.state === `prompt`
  } catch {
    throw new g(-3, `notificationPermissions signal unexpected behaviour`)
  }
}

function tt() {
  if (navigator.plugins === void 0) throw new g(-1, `navigator.plugins is undefined`);
  if (window.PluginArray === void 0) throw new g(-1, `window.PluginArray is undefined`);
  return navigator.plugins instanceof PluginArray
}

function nt() {
  if (navigator.plugins === void 0) throw new g(-1, `navigator.plugins is undefined`);
  if (navigator.plugins.length === void 0) throw new g(-3, `navigator.plugins.length is undefined`);
  return navigator.plugins.length
}

function rt() {
  let {
    process: e
  } = window, t = `window.process is`;
  if (e === void 0) throw new g(-1, `${t} undefined`);
  if (e && typeof e != `object`) throw new g(-3, `${t} not an object`);
  return e
}

function it() {
  let {
    productSub: e
  } = navigator;
  if (e === void 0) throw new g(-1, `navigator.productSub is undefined`);
  return e
}

function at() {
  if (navigator.connection === void 0) throw new g(-1, `navigator.connection is undefined`);
  if (navigator.connection.rtt === void 0) throw new g(-1, `navigator.connection.rtt is undefined`);
  return navigator.connection.rtt
}

function ot() {
  return navigator.userAgent
}

function st() {
  if (navigator.webdriver == null) throw new g(-1, `navigator.webdriver is undefined`);
  return navigator.webdriver
}

function ct() {
  let e = document.createElement(`canvas`);
  if (typeof e.getContext != `function`) throw new g(-2, `HTMLCanvasElement.getContext is not a function`);
  let t = e.getContext(`webgl`);
  if (t === null) throw new g(-4, `WebGLRenderingContext is null`);
  if (typeof t.getParameter != `function`) throw new g(-2, `WebGLRenderingContext.getParameter is not a function`);
  return {
    vendor: t.getParameter(t.VENDOR),
    renderer: t.getParameter(t.RENDERER)
  }
}

function lt() {
  if (window.external === void 0) throw new g(-1, `window.external is undefined`);
  let {
    external: e
  } = window;
  if (typeof e.toString != `function`) throw new g(-2, `window.external.toString is not a function`);
  return e.toString()
}

function ut() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function dt() {
  let e = {
      [h.Awesomium]: {
        window: [`awesomium`]
      },
      [h.Cef]: {
        window: [`RunPerfTest`]
      },
      [h.CefSharp]: {
        window: [`CefSharp`]
      },
      [h.CoachJS]: {
        window: [`emit`]
      },
      [h.FMiner]: {
        window: [`fmget_targets`]
      },
      [h.Geb]: {
        window: [`geb`]
      },
      [h.NightmareJS]: {
        window: [`__nightmare`, `nightmare`]
      },
      [h.Phantomas]: {
        window: [`__phantomas`]
      },
      [h.PhantomJS]: {
        window: [`callPhantom`, `_phantom`]
      },
      [h.Rhino]: {
        window: [`spawn`]
      },
      [h.Selenium]: {
        window: [`_Selenium_IDE_Recorder`, `_selenium`, `calledSelenium`, /^([a-z]){3}_.*_(Array|Promise|Symbol)$/],
        document: [`__selenium_evaluate`, `selenium-evaluate`, `__selenium_unwrapped`]
      },
      [h.WebDriverIO]: {
        window: [`wdioElectron`]
      },
      [h.WebDriver]: {
        window: [`webdriver`, `__webdriverFunc`, `__lastWatirAlert`, `__lastWatirConfirm`, `__lastWatirPrompt`, `_WEBDRIVER_ELEM_CACHE`, `ChromeDriverw`],
        document: [`__webdriver_script_fn`, `__driver_evaluate`, `__webdriver_evaluate`, `__fxdriver_evaluate`, `__driver_unwrapped`, `__webdriver_unwrapped`, `__fxdriver_unwrapped`, `__webdriver_script_fn`, `__webdriver_script_func`, `__webdriver_script_function`, `$cdc_asdjflasutopfhvcZLmcf`, `$cdc_asdjflasutopfhvcZLmcfl_`, `$chrome_asyncScriptInfo`, `__$webdriverAsyncExecutor`]
      },
      [h.HeadlessChrome]: {
        window: [`domAutomation`, `domAutomationController`]
      }
    },
    t, n = {},
    r = xe(window),
    i = [];
  for (t in window.document !== void 0 && (i = xe(window.document)), e) {
    let a = e[t];
    if (a !== void 0) {
      let e = a.window !== void 0 && Se(r, ...a.window),
        o = a.document === void 0 || !i.length ? !1 : Se(i, ...a.document);
      n[t] = e || o
    }
  }
  return n
}
var ft = {
    android: Ye,
    browserKind: Je,
    browserEngineKind: qe,
    documentFocus: Xe,
    userAgent: ot,
    appVersion: He,
    rtt: at,
    windowSize: ut,
    pluginsLength: nt,
    pluginsArray: tt,
    errorTrace: We,
    productSub: it,
    windowExternal: lt,
    mimeTypesConsistent: $e,
    evalLength: Ge,
    webGL: ct,
    webDriver: st,
    languages: Qe,
    notificationPermissions: et,
    documentElementKeys: Ue,
    functionBind: Ke,
    process: rt,
    distinctiveProps: dt
  },
  pt = class {
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
      if (this.components === void 0) throw Error(`BotDetector.detect can't be called before BotDetector.collect`);
      let [e, t] = ge(this.components, Ve);
      return this.detections = e, t
    }
    async collect() {
      return this.components = await _e(ft), this.components
    }
  };

function mt() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    let e = new XMLHttpRequest;
    e.open(`get`, `https://m1.openfpcdn.io/botd/v${he}/npm-monitoring`, !0), e.send()
  } catch (e) {
    console.error(e)
  }
}
async function ht({
  monitoring: e = !0
} = {}) {
  e && mt();
  let t = new pt;
  return await t.collect(), t
}
var gt = null;
async function _t() {
  return await vt() ? {
    bot: !1
  } : (await yt()).detect()
}
async function vt() {
  var e;
  let t = navigator;
  if (!((e = t.brave) != null && e.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(t.userAgent)) return !1;
  try {
    return await t.brave.isBrave()
  } catch {
    return !1
  }
}

function yt() {
  return gt || (gt = ht({
    monitoring: !1
  })), gt
}
bt.listeners = [], bt.createListener = e => () => {
  let t = e(),
    n = {};
  for (let e in t) n[e] = t[e]();
  Object.assign(window, n)
}, bt.init = () => bt.listeners.forEach(e => e());

function bt(e) {}
var xt = /; wv\)|FBAN|FBAV|Instagram|BytedanceWebview|musical_ly|Line\/|Snapchat|Twitter|MicroMessenger/i;

function St() {
  return !Ct() && xt.test(navigator.userAgent)
}

function Ct() {
  var e, t;
  return !!((e = window.Capacitor) != null && (t = e.isNativePlatform) != null && t.call(e))
}

function wt(e = void 0) {
  let t = (e == null ? void 0 : e.userAgent) ?? navigator.userAgent,
    n = (e == null ? void 0 : e.vendor) ?? navigator.vendor;
  return `brave` in navigator ? `Brave` : /\bEdg(?:e|A|iOS)?\//.test(t) ? `Edge` : /\bOPR\/|\bOpera\//.test(t) ? `Opera` : /\bVivaldi\//.test(t) ? `Vivaldi` : /\bYaBrowser\//.test(t) ? `Yandex` : /\bSamsungBrowser\//.test(t) ? `Samsung Internet` : /\bUCBrowser\/|\bUCWEB\//.test(t) ? `UC Browser` : /\bDuckDuckGo\/|\bDdg\//.test(t) ? `DuckDuckGo` : getComputedStyle(document.documentElement).getPropertyValue(`--arc-palette-title`) ? `Arc` : /Firefox\/|FxiOS\//.test(t) ? `Firefox` : /Chrome\/|CriOS\//.test(t) && /google/i.test(n) ? `Chrome` : /Safari\//.test(t) && /apple/i.test(n) ? `Safari` : `Unknown`
}
var Tt = void 0;

function Et() {
  return Tt || (Tt = Dt()), Tt
}

function Dt() {
  let e = 0,
    t = [].constructor;
  try {
    (-1).toFixed(-1)
  } catch (n) {
    e = (n instanceof Error ? n.message : String(n)).length + (t + ``).split(t.name).join(``).length
  }
  switch (e) {
    case 80:
      return `Blink`;
    case 58:
      return `Gecko`;
    case 77:
      return `WebKit`;
    default:
      return `Unknown`
  }
}
async function Ot() {
  let e;
  try {
    e = document.createElement(`canvas`);
    let t = e.getContext(`2d`, {
      willReadFrequently: !1
    });
    if (!t) throw Error(`canvas context blocked`);
    let n = At.replace(/!important/gm, ``);
    jt({
      canvas: e,
      context: t,
      area: {
        width: 75,
        height: 75
      }
    });
    let r = e.toDataURL();
    e.width = 50, e.height = 50, t.font = `50px ${n}`, t.fillText(`A`, 7, 37);
    let i = e.toDataURL();
    return e.width = 50, e.height = 50, t.font = `35px ${n}`, t.fillText(`👾`, 0, 37), {
      paintURI: r,
      textURI: i,
      emojiURI: e.toDataURL()
    }
  } catch (e) {
    console.error(e);
    return
  } finally {
    kt(e)
  }
}

function kt(e) {
  e && (e.width = 0, e.height = 0, e.remove())
}
var At = `
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
  jt = ({
    canvas: e,
    context: t,
    strokeText: n = !1,
    cssFontFamily: r = ``,
    area: i = {
      width: 50,
      height: 50
    },
    rounds: a = 10,
    maxShadowBlur: o = 50,
    seed: s = 500,
    offset: c = 2001000001,
    multiplier: l = 15e3
  }) => {
    if (!t) return;
    t.clearRect(0, 0, e.width, e.height), e.width = i.width, e.height = i.height, e.style && (e.style.display = `none`);
    let {
      getNextSeed: u
    } = (({
      seed: e,
      offset: t,
      multiplier: n
    }) => {
      let r = Number(e) % Number(t);
      return {
        getNextSeed: () => (r = Number(n) * r % Number(t), r)
      }
    })({
      seed: s,
      offset: c,
      multiplier: l
    }), d = (e, t, n, r) => {
      let i = (e - 1) / t * (n || 1) || 0;
      return r ? i : Math.floor(i)
    }, f = (e, t, n, r, i) => {
      let {
        width: a,
        height: o
      } = n, s = e.createRadialGradient(d(i(), t, a), d(i(), t, o), d(i(), t, a), d(i(), t, a), d(i(), t, o), d(i(), t, a));
      s.addColorStop(0, r[d(i(), t, r.length)]), s.addColorStop(1, r[d(i(), t, r.length)]), e.fillStyle = s
    }, p = `#FF6633.#FFB399.#FF33FF.#FFFF99.#00B3E6.#E6B333.#3366E6.#999966.#99FF99.#B34D4D.#80B300.#809900.#E6B3B3.#6680B3.#66991A.#FF99E6.#CCFF1A.#FF1A66.#E6331A.#33FFCC.#66994D.#B366CC.#4D8000.#B33300.#CC80CC.#66664D.#991AFF.#E666FF.#4DB3FF.#1AB399.#E666B3.#33991A.#CC9999.#B3B31A.#00E680.#4D8066.#809980.#E6FF80.#1AFF33.#999933.#FF3380.#CCCC00.#66E64D.#4D80CC.#9900B3.#E64D66.#4DB380.#FF4D4D.#99E6E6.#6666FF`.split(`.`), m = (e, t, n, i) => {
      let {
        width: a,
        height: o
      } = n;
      e.font = `${o/2.99}px ${r.replace(/!important/gm,``)}`, e.strokeText(`👾A`, d(i(), t, a), d(i(), t, o), d(i(), t, a))
    }, ee = (e, t, n, r) => {
      let {
        width: i,
        height: a
      } = n;
      e.beginPath(), e.arc(d(r(), t, i), d(r(), t, a), d(r(), t, Math.min(i, a)), d(r(), t, 2 * Math.PI, !0), d(r(), t, 2 * Math.PI, !0)), e.stroke()
    }, te = (e, t, n, r) => {
      let {
        width: i,
        height: a
      } = n;
      e.beginPath(), e.moveTo(d(r(), t, i), d(r(), t, a)), e.bezierCurveTo(d(r(), t, i), d(r(), t, a), d(r(), t, i), d(r(), t, a), d(r(), t, i), d(r(), t, a)), e.stroke()
    }, ne = (e, t, n, r) => {
      let {
        width: i,
        height: a
      } = n;
      e.beginPath(), e.moveTo(d(r(), t, i), d(r(), t, a)), e.quadraticCurveTo(d(r(), t, i), d(r(), t, a), d(r(), t, i), d(r(), t, a)), e.stroke()
    }, re = (e, t, n, r) => {
      if (!(`ellipse` in e)) return;
      let {
        width: i,
        height: a
      } = n;
      e.beginPath(), e.ellipse(d(r(), t, i), d(r(), t, a), d(r(), t, Math.floor(i / 2)), d(r(), t, Math.floor(a / 2)), d(r(), t, 2 * Math.PI, !0), d(r(), t, 2 * Math.PI, !0), d(r(), t, 2 * Math.PI, !0)), e.stroke()
    }, ie = [ee, te, ne];
    Et() !== `WebKit` && ie.push(re), n && ie.push(m), [...Array(a)].forEach(e => {
      f(t, c, i, p, u), t.shadowBlur = d(u(), c, o, !0), t.shadowColor = p[d(u(), c, p.length)];
      let n = ie[d(u(), c, ie.length)];
      n(t, c, i, u), t.fill()
    })
  },
  Mt = {
    7: [`Cambria Math`, `Lucida Console`],
    8: [`Aldhabi`, `Gadugi`, `Myanmar Text`, `Nirmala UI`],
    "8.1": [`Leelawadee UI`, `Javanese Text`, `Segoe UI Emoji`],
    10: [`HoloLens MDL2 Assets`, `Segoe MDL2 Assets`, `Bahnschrift`, `Ink Free`],
    11: [`Segoe Fluent Icons`]
  },
  Nt = {
    "10.9": [`Helvetica Neue`, `Geneva`],
    "10.10": [`Kohinoor Devanagari Medium`, `Luminari`],
    "10.11": [`PingFang HK Light`],
    "10.12": [`American Typewriter Semibold`, `Futura Bold`, `SignPainter-HouseScript Semibold`],
    "10.13-10.14": [`InaiMathi Bold`],
    "10.15-11": [`Galvji`, `MuktaMahee Regular`],
    12: [`Noto Sans Gunjala Gondi Regular`, `Noto Sans Masaram Gondi Regular`, `Noto Serif Yezidi Regular`],
    13: [`Apple SD Gothic Neo ExtraBold`, `STIX Two Math Regular`, `STIX Two Text Regular`, `Noto Sans Canadian Aboriginal Regular`]
  },
  Pt = {
    "Microsoft Outlook": [`MS Outlook`],
    "Adobe Acrobat": [`ZWAdobeF`],
    LibreOffice: [`Amiri`, `KACSTOffice`, `Liberation Mono`, `Source Code Pro`],
    OpenOffice: [`DejaVu Sans`, `Gentium Book Basic`, `OpenSymbol`]
  },
  Ft = Object.keys(Nt).map(e => Nt[e]).flat(),
  It = Object.keys(Mt).map(e => Mt[e]).flat(),
  Lt = Object.keys(Pt).map(e => Pt[e]).flat(),
  Rt = [`Arimo`, `Chilanka`, `Cousine`, `Jomolhari`, `MONO`, `Noto Color Emoji`, `Ubuntu`],
  zt = [`Dancing Script`, `Droid Sans Mono`, `Roboto`],
  Bt = [...Ft, ...It, ...Rt, ...zt, ...Lt].sort();
async function Vt() {
  return await (async e => {
    try {
      let t = [];
      document.fonts.check(`0px "${Ht()}"`) || (t = e.reduce((e, t) => (document.fonts.check(`0px "${t}"`) && e.push(t), e), []));
      let n = e.map(e => new FontFace(e, `local("${e}")`)),
        r = (await Promise.allSettled(n.map(e => e.load()))).reduce((e, t) => (t.status == `fulfilled` && e.push(t.value.family), e), []);
      return [...new Set([...t, ...r])].sort()
    } catch {
      return []
    }
  })(Bt)
}

function Ht() {
  return String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7)
}
var Ut = `ALIASED_POINT_SIZE_RANGE.ALIASED_LINE_WIDTH_RANGE.STENCIL_VALUE_MASK.STENCIL_WRITEMASK.STENCIL_BACK_VALUE_MASK.STENCIL_BACK_WRITEMASK.MAX_TEXTURE_SIZE.MAX_VIEWPORT_DIMS.SUBPIXEL_BITS.MAX_VERTEX_ATTRIBS.MAX_VERTEX_UNIFORM_VECTORS.MAX_VARYING_VECTORS.MAX_COMBINED_TEXTURE_IMAGE_UNITS.MAX_VERTEX_TEXTURE_IMAGE_UNITS.MAX_TEXTURE_IMAGE_UNITS.MAX_FRAGMENT_UNIFORM_VECTORS.SHADING_LANGUAGE_VERSION.VENDOR.RENDERER.VERSION.MAX_CUBE_MAP_TEXTURE_SIZE.MAX_RENDERBUFFER_SIZE.MAX_3D_TEXTURE_SIZE.MAX_ELEMENTS_VERTICES.MAX_ELEMENTS_INDICES.MAX_TEXTURE_LOD_BIAS.MAX_DRAW_BUFFERS.MAX_FRAGMENT_UNIFORM_COMPONENTS.MAX_VERTEX_UNIFORM_COMPONENTS.MAX_ARRAY_TEXTURE_LAYERS.MAX_PROGRAM_TEXEL_OFFSET.MAX_VARYING_COMPONENTS.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS.MAX_COLOR_ATTACHMENTS.MAX_SAMPLES.MAX_VERTEX_UNIFORM_BLOCKS.MAX_FRAGMENT_UNIFORM_BLOCKS.MAX_COMBINED_UNIFORM_BLOCKS.MAX_UNIFORM_BUFFER_BINDINGS.MAX_UNIFORM_BLOCK_SIZE.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS.MAX_VERTEX_OUTPUT_COMPONENTS.MAX_FRAGMENT_INPUT_COMPONENTS.MAX_SERVER_WAIT_TIMEOUT.MAX_ELEMENT_INDEX.MAX_CLIENT_WAIT_TIMEOUT_WEBGL`.split(`.`).sort(),
  Wt = {
    EXT_clip_control: [`CLIP_DEPTH_MODE_EXT`, `CLIP_ORIGIN_EXT`, `LOWER_LEFT_EXT`, `UPPER_LEFT_EXT`, `NEGATIVE_ONE_TO_ONE_EXT`, `ZERO_TO_ONE_EXT`],
    EXT_color_buffer_half_float: [`RGB16F_EXT`, `RGBA16F_EXT`, `FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT`, `UNSIGNED_NORMALIZED_EXT`],
    EXT_depth_clamp: [`DEPTH_CLAMP_EXT`],
    EXT_disjoint_timer_query: [`CURRENT_QUERY_EXT`, `GPU_DISJOINT_EXT`, `QUERY_COUNTER_BITS_EXT`, `QUERY_RESULT_AVAILABLE_EXT`, `QUERY_RESULT_EXT`, `TIMESTAMP_EXT`, `TIME_ELAPSED_EXT`],
    EXT_polygon_offset_clamp: [`POLYGON_OFFSET_CLAMP_EXT`],
    EXT_sRGB: [`SRGB8_ALPHA8_EXT`, `SRGB_ALPHA_EXT`, `SRGB_EXT`, `FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT`],
    EXT_texture_compression_bptc: [`COMPRESSED_RGBA_BPTC_UNORM_EXT`, `COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT`, `COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT`, `COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT`],
    EXT_texture_compression_rgtc: [`COMPRESSED_RED_GREEN_RGTC2_EXT`, `COMPRESSED_RED_RGTC1_EXT`, `COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT`, `COMPRESSED_SIGNED_RED_RGTC1_EXT`],
    EXT_texture_filter_anisotropic: [`MAX_TEXTURE_MAX_ANISOTROPY_EXT`, `TEXTURE_MAX_ANISOTROPY_EXT`],
    EXT_texture_mirror_clamp_to_edge: [`MIRROR_CLAMP_TO_EDGE_EXT`],
    KHR_parallel_shader_compile: [`COMPLETION_STATUS_KHR`],
    OES_standard_derivatives: [`FRAGMENT_SHADER_DERIVATIVE_HINT_OES`],
    OES_texture_half_float: [`HALF_FLOAT_OES`],
    OES_vertex_array_object: [`VERTEX_ARRAY_BINDING_OES`],
    WEBGL_blend_func_extended: [`ONE_MINUS_SRC1_ALPHA_WEBGL`, `ONE_MINUS_SRC1_COLOR_WEBGL`, `SRC1_ALPHA_WEBGL`, `SRC1_COLOR_WEBGL`, `MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL`],
    WEBGL_color_buffer_float: [`RGBA32F_EXT`],
    WEBGL_compressed_texture_s3tc: [`COMPRESSED_RGBA_S3TC_DXT1_EXT`, `COMPRESSED_RGBA_S3TC_DXT3_EXT`, `COMPRESSED_RGBA_S3TC_DXT5_EXT`, `COMPRESSED_RGB_S3TC_DXT1_EXT`],
    WEBGL_compressed_texture_s3tc_srgb: [`COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT`, `COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT`, `COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT`, `COMPRESSED_SRGB_S3TC_DXT1_EXT`],
    WEBGL_debug_renderer_info: [`UNMASKED_RENDERER_WEBGL`, `UNMASKED_VENDOR_WEBGL`],
    WEBGL_depth_texture: [`UNSIGNED_INT_24_8_WEBGL`],
    WEBGL_draw_buffers: `COLOR_ATTACHMENT0_WEBGL.COLOR_ATTACHMENT1_WEBGL.COLOR_ATTACHMENT2_WEBGL.COLOR_ATTACHMENT3_WEBGL.COLOR_ATTACHMENT4_WEBGL.COLOR_ATTACHMENT5_WEBGL.COLOR_ATTACHMENT6_WEBGL.COLOR_ATTACHMENT7_WEBGL.COLOR_ATTACHMENT8_WEBGL.COLOR_ATTACHMENT9_WEBGL.COLOR_ATTACHMENT10_WEBGL.COLOR_ATTACHMENT11_WEBGL.COLOR_ATTACHMENT12_WEBGL.COLOR_ATTACHMENT13_WEBGL.COLOR_ATTACHMENT14_WEBGL.COLOR_ATTACHMENT15_WEBGL.DRAW_BUFFER0_WEBGL.DRAW_BUFFER1_WEBGL.DRAW_BUFFER2_WEBGL.DRAW_BUFFER3_WEBGL.DRAW_BUFFER4_WEBGL.DRAW_BUFFER5_WEBGL.DRAW_BUFFER6_WEBGL.DRAW_BUFFER7_WEBGL.DRAW_BUFFER8_WEBGL.DRAW_BUFFER9_WEBGL.DRAW_BUFFER10_WEBGL.DRAW_BUFFER11_WEBGL.DRAW_BUFFER12_WEBGL.DRAW_BUFFER13_WEBGL.DRAW_BUFFER14_WEBGL.DRAW_BUFFER15_WEBGL.MAX_COLOR_ATTACHMENTS_WEBGL.MAX_DRAW_BUFFERS_WEBGL`.split(`.`),
    ANGLE_instanced_arrays: [`VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE`],
    EXT_blend_minmax: [`MIN_EXT`, `MAX_EXT`]
  },
  Gt = new Set([`CLIP_DEPTH_MODE_EXT`, `CLIP_ORIGIN_EXT`, `DEPTH_CLAMP_EXT`, `GPU_DISJOINT_EXT`, `POLYGON_OFFSET_CLAMP_EXT`, `MAX_TEXTURE_MAX_ANISOTROPY_EXT`, `FRAGMENT_SHADER_DERIVATIVE_HINT_OES`, `VERTEX_ARRAY_BINDING_OES`, `MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL`, `UNMASKED_RENDERER_WEBGL`, `UNMASKED_VENDOR_WEBGL`, `MAX_COLOR_ATTACHMENTS_WEBGL`, `MAX_DRAW_BUFFERS_WEBGL`]);
async function Kt() {
  let e, t, n, r;
  try {
    let i = window,
      a = i.document;
    `OffscreenCanvas` in window ? (e = new i.OffscreenCanvas(256, 256), t = new i.OffscreenCanvas(256, 256)) : (e = a.createElement(`canvas`), t = a.createElement(`canvas`));
    let o = Jt(e, `webgl`),
      s = Jt(t, `webgl2`);
    if (n = o, r = s, !o) return;
    let c = (e, t) => {
        if (e) return {
          LOW_FLOAT: v(() => e.getShaderPrecisionFormat(e[t], e.LOW_FLOAT)),
          MEDIUM_FLOAT: v(() => e.getShaderPrecisionFormat(e[t], e.MEDIUM_FLOAT)),
          HIGH_FLOAT: v(() => e.getShaderPrecisionFormat(e[t], e.HIGH_FLOAT)),
          HIGH_INT: v(() => e.getShaderPrecisionFormat(e[t], e.HIGH_INT))
        }
      },
      l = (e, t) => {
        let n = {};
        if (!t) return n;
        for (let r in t) {
          let i = t[r];
          n[e + `.` + r + `.precision`] = i ? v(() => i.precision) : void 0, n[e + `.` + r + `.rangeMax`] = i ? v(() => i.rangeMax) : void 0, n[e + `.` + r + `.rangeMin`] = i ? v(() => i.rangeMin) : void 0
        }
        return n
      },
      u = e => {
        let t = {};
        if (!e) return t;
        let n = e;
        for (let r of Ut) {
          let i = n[r];
          if (i === void 0) continue;
          let a = e.getParameter(i);
          t[r] = a && ArrayBuffer.isView(a) ? Array.from(a) : a
        }
        return t
      },
      d = e => {
        if (!e) return [];
        let t = v(() => e.getContextAttributes());
        return t ? Object.keys(t).sort().map(e => `${e}=${t[e]}`) : []
      },
      f = e => {
        if (!e) return [];
        let t = [];
        for (let [n, r] of Object.entries(Wt)) {
          let i = v(() => e.getExtension(n));
          if (i)
            for (let n of r) {
              let r = i[n];
              if (typeof r != `number`) continue;
              if (!Gt.has(n)) {
                t.push(`${n}=${r}`);
                continue
              }
              let a = v(() => e.getParameter(r));
              a == null ? t.push(`${n}=${r}`) : typeof a == `object` && `length` in a ? t.push(`${n}=${r}=${Array.from(a).join(`,`)}`) : t.push(`${n}=${r}=${a}`)
            }
        }
        return t.sort()
      },
      p = e => {
        let t = e ? e.getExtension(`WEBGL_debug_renderer_info`) : null;
        return !t || !e ? {} : {
          UNMASKED_VENDOR_WEBGL: e.getParameter(t.UNMASKED_VENDOR_WEBGL),
          UNMASKED_RENDERER_WEBGL: e.getParameter(t.UNMASKED_RENDERER_WEBGL)
        }
      },
      m = e => e && v(() => e.getSupportedExtensions()) || [],
      ee = {
        ...u(o),
        ...p(o)
      },
      te = {
        ...u(s),
        ...p(s)
      };
    return {
      extensions: [...m(o), ...m(s)],
      contextAttributes: d(o),
      contextAttributes2: d(s),
      extensionParameters: f(o),
      extensionParameters2: f(s),
      parameters: {
        ...ee,
        ...te,
        ...l(`VERTEX_SHADER`, c(o, `VERTEX_SHADER`)),
        ...l(`FRAGMENT_SHADER`, c(o, `FRAGMENT_SHADER`))
      }
    }
  } catch (e) {
    console.log(e);
    return
  } finally {
    qt(e, n), qt(t, r)
  }
}

function v(e) {
  try {
    return e()
  } catch {
    return
  }
}

function qt(e, t) {
  if (e) {
    try {
      var n;
      t == null || (n = t.getExtension(`WEBGL_lose_context`)) == null || n.loseContext()
    } catch {}
    e.width = 0, e.height = 0, e instanceof HTMLCanvasElement && e.remove()
  }
}

function Jt(e, t) {
  try {
    if (t == `webgl2`) {
      let t = e.getContext(`webgl2`);
      return t || !(e instanceof HTMLCanvasElement) ? t : e.getContext(`experimental-webgl2`)
    }
    let n = e.getContext(`webgl`);
    return n || !(e instanceof HTMLCanvasElement) ? n : e.getContext(`experimental-webgl`) ?? e.getContext(`moz-webgl`) ?? e.getContext(`webkit-3d`)
  } catch (e) {
    console.error(`Error while getting canvas context:`, e);
    return
  }
}
var Yt = `client_timeout`,
  Xt = `network_connection`,
  Zt = `network_abort`,
  Qt = `csp_block`,
  $t = `invalid_endpoint`,
  en = `handle_agent_data`,
  tn = `script_load_fail`,
  nn = `bad_response_format`,
  rn = `api_key_missing`,
  an = `api_key_invalid`,
  on = `cache_misconfigured`,
  sn = `endpoints_misconfigured`,
  cn = `wrong_worker_option`,
  ln = `worker_initialization_failed`,
  un = `sandboxed_iframe`,
  dn = `bundle_not_defined`,
  y = {
    [Yt]: `Client timeout`,
    [Xt]: `Network connection error`,
    [Zt]: `Network request aborted`,
    [Qt]: `Blocked by CSP`,
    [$t]: `The provided endpoint in "endpoints" parameter is not a valid URL`,
    [en]: `Handle on demand agent data error`,
    [tn]: `Failed to load the JS script of the agent`,
    [dn]: `9319`,
    [nn]: `Can't parse the backend response. Make sure the proper endpoints are used.`,
    [rn]: "The `apiKey` option is not provided",
    [an]: "The `apiKey` option is not a string",
    [on]: "The `cache` option is misconfigured",
    [sn]: "The `endpoints` option is misconfigured",
    [cn]: "Wrong `worker` option, it should be a Worker instance",
    [ln]: `Web Worker initialization failed`,
    [un]: `Running inside sandboxed iframes is not supported`
  },
  b = class extends Error {
    constructor(e, t) {
      super(e), this.name = `FingerprintError`, this.event_id = null, this.code = t
    }
  };

function fn(e) {
  let t = function(e) {
      let t = atob(e),
        n = t.length,
        r = new Uint8Array(n);
      for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
      return r
    }(e),
    n = t;
  try {
    n = function(e, t, n) {
      let r = () => {
          throw Error(`Invalid data`)
        },
        i = Sn(e);
      i.length < t.length + 2 && r();
      for (let e = 0; e < t.length; ++e) Cr(i[1 + e], i[0]) !== t[e] && r();
      let a = 1 + t.length,
        o = Cr(i[a], i[0]);
      i.length < a + 1 + o + n && r();
      let s = a + 1 + o,
        c = s + n,
        l = new ArrayBuffer(i.length - c),
        u = new Uint8Array(l);
      for (let e = 0; e < u.length; ++e) u[e] = i[c + e] ^ i[s + e % n];
      return l
    }(t, br, xr)
  } catch {}
  try {
    return function(e) {
      let t = {
          len: 0,
          arr: new Uint8Array(128)
        },
        n = Sn(e),
        r = 0,
        i = () => (l(), n[r] === Wn ? a() : pn(n[r]) ? o() : u(lr) ? (r += lr.length, null) : u(ur) ? (r += ur.length, !0) : u(dr) ? (r += dr.length, !1) : n[r] === ar ? s() : n[r] === sr ? c() : d()),
        a = () => {
          for (t.len = 0; r++, n[r] !== Wn;) {
            if (n[r] === Zn) {
              if (r++, n[r] === er) {
                let e = parseInt(On(n.subarray(r + 1, r + 5)), 16);
                Sr(t, wn(String.fromCharCode(e))), r += 4;
                continue
              }
              let e = pr[n[r]];
              if (e) {
                bn(t, e);
                continue
              }
              return d()
            }
            if (n[r] === void 0) return d();
            bn(t, n[r])
          }
          return r++, On(function(e) {
            return e.arr.subarray(0, e.len)
          }(t))
        },
        o = () => {
          let e = r;
          for (; n[r] === ir || n[r] === $n || n[r] === tr || n[r] === nr || pn(n[r]);) r++;
          return Number(On(n.subarray(e, r)))
        },
        s = () => {
          let e = [];
          for (r++;;) {
            if (l(), n[r] === or) {
              r++;
              break
            }
            if (e.length) {
              if (n[r] !== Gn) return d();
              r++
            }
            e.push(i())
          }
          return e
        },
        c = () => {
          let e = {},
            t = !0;
          for (r++;;) {
            if (l(), n[r] === cr) {
              r++;
              break
            }
            if (!t) {
              if (n[r] !== Gn) return d();
              r++, l()
            }
            if (n[r] !== Wn) return d();
            let o = a();
            if (l(), n[r] !== Kn) return d();
            r++, Object.defineProperty(e, o, {
              value: i(),
              configurable: !0,
              enumerable: !0,
              writable: !0
            }), t = !1
          }
          return e
        },
        l = () => {
          for (; n[r] === qn || n[r] === Xn || n[r] === Yn || n[r] === Jn;) r++
        },
        u = e => {
          for (let t = 0; t < e.length; t++)
            if (n[r + t] !== e[t]) return !1;
          return !0
        },
        d = () => {
          throw SyntaxError(`Unexpected ` + (r < n.length ? `byte ${r}` : `end`))
        },
        f = i();
      return l(), n[r] !== void 0 && d(), f
    }(n)
  } catch {}
  return null
}

function pn(e) {
  return e >= Qn && e < Qn + 10 || e === rr
}

function mn(e, t) {
  if (e.length === 0) return Promise.reject(TypeError(`The list of script URL patterns is empty`));
  let n = [],
    r = function(e, t, n, r, i = {}) {
      let {
        maxAttemptCount: a = 5,
        backoffBase: o = 200,
        backoffCap: s = 1e4,
        abort: c
      } = i, l = {
        failedAttempts: []
      }, [u, d] = function(e, t, n, r) {
        let i = function(e) {
            let t = [...e];
            return {
              current: () => t[0],
              postpone() {
                let e = t.shift();
                e !== void 0 && t.push(e)
              },
              exclude() {
                t.shift()
              }
            }
          }(e),
          a = function(e, t) {
            let n = 0;
            return () => Math.random() * Math.min(t, e * 2 ** n++)
          }(n, r),
          o = new Set;
        return [i.current(), (e, n, r) => {
          let s = t(e, n, r);
          s.action === `exclude` ? i.exclude() : i.postpone();
          let c = () => Math.max(0, e.getTime() + a() - Date.now()),
            l;
          l = typeof s.delay == `number` ? s.delay : c();
          let u = i.current();
          return l === 0 && u && Date.now() - e.getTime() < 50 && (o.has(u) ? l = c() : o.add(u)), u === void 0 ? void 0 : [u, l]
        }]
      }(e, r, o, s), f = (p = [c == null ? void 0 : c.then(e => l.aborted = {
        resolve: !0,
        value: e
      }, e => l.aborted = {
        resolve: !1,
        error: e
      }), hr(u, a, t, n, d, l, c)], Promise.race(p.filter(e => !!e))).then(() => l);
      var p;
      return {
        then: f.then.bind(f),
        current: l
      }
    }(e, async e => {
      let r = new Date;
      try {
        let i = await t(e);
        return n.push({
          url: e,
          startedAt: r,
          finishedAt: new Date,
          error: void 0
        }), i
      } catch (t) {
        throw n.push({
          url: e,
          startedAt: r,
          finishedAt: new Date,
          error: t
        }), t
      }
    }, e => ({
      result: e
    }), Pn, {
      maxAttemptCount: 5,
      backoffBase: 100,
      backoffCap: 3e3
    });
  return new Promise((e, t) => {
    Promise.resolve(r).then(r => {
      if (r.result !== void 0) e([r.result, n]);
      else {
        let e = r.failedAttempts[0];
        t(e ? e.error : Error(`No attempts were made`))
      }
    }).catch(t)
  })
}

function hn(e) {
  return {
    __type__: Tn,
    value: e
  }
}

function gn(e) {
  return function(e) {
    let t = Sn(e);
    _n = _n || function() {
      let e, t = new Uint32Array(256);
      for (let n = 0; n < 256; n++) {
        e = n;
        for (let t = 0; t < 8; t++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
        t[n] = e
      }
      return t
    }();
    let n = -1;
    for (let e = 0; e < t.length; e++) n = n >>> 8 ^ _n[255 & (n ^ t[e])];
    return (-1 ^ n) >>> 0
  }(wn(e))
}
var _n;

function vn(e, t) {
  return new Promise(n => function(e, t, ...n) {
    let r = Date.now() + t,
      i = 0,
      a = () => {
        i = setTimeout(() => {
          Date.now() < r ? a() : e(...n)
        }, r - Date.now())
      };
    return a(), () => clearTimeout(i)
  }(n, e, t))
}

function yn(e) {
  return typeof e == `object` && !!e && `name` in e && e.name === `FingerprintError` && `code` in e
}

function bn(e, t) {
  gr(e, e.len + 1), e.arr[e.len++] = t
}
var xn = Array.isArray;

function Sn(e) {
  return e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
}

function Cn({
  level: e,
  message: t
}) {
  e === `error` ? console.error(t) : e === `warning` ? console.warn(t) : console.log(t)
}

function wn(e) {
  let t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (r > 127) return new TextEncoder().encode(e);
    t[n] = r
  }
  return t
}
var Tn = `withoutDefault`,
  En = `_vid_`;

function Dn(e) {
  return e instanceof Error && e.name === `TypeError`
}

function On(e) {
  if (typeof TextDecoder == `function`) {
    let t = new TextDecoder().decode(e);
    if (t) return t
  }
  let t = Sn(e);
  return decodeURIComponent(escape(String.fromCharCode.apply(null, t)))
}

function kn(e = Fn) {
  return function(t) {
    let n, r, {
        picked: i,
        rest: a
      } = function(e, t) {
        let n = {},
          r = {};
        for (let [i, a] of Object.entries(e)) t.includes(i) ? n[i] = a : r[i] = a;
        return {
          picked: n,
          rest: r
        }
      }(t, [`apiKey`]),
      {
        apiKey: o
      } = i;
    if (!o) throw new b(y[rn], rn);
    if (typeof o != `string`) throw new b(y[an], an);
    let s = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }(c = t, l = `endpoints`) ? c[l] : void 0;
    var c, l;
    let d = function(e, t, n) {
        let r = e.prepareScriptEndpoints(t, `https://fpnpmcdn.net/`);
        if (r === null) throw new b(y[sn], sn);
        return r.map(e => function(e, t) {
          let n = new URL(e, window.location.href),
            r = n.pathname;
          return n.pathname = `${r}${r.endsWith(`/`)?``:`/`}v4/${encodeURIComponent(t)}`, n.search = `?ci=jsl/${encodeURIComponent(Nn)}`, n.href
        }(e, n))
      }(e, s, o),
      [f, p] = function() {
        let e = [],
          t = () => {
            e.push({
              time: new Date,
              state: document.visibilityState
            })
          },
          n = (r = document, i = `visibilitychange`, a = t, r.addEventListener(i, a, o), () => r.removeEventListener(i, a, o));
        var r, i, a, o;
        return t(), [e, n]
      }(),
      m = async function() {
        try {
          let [t, r] = await mn(d, t => function(e, t) {
            return e.withCspViolationWatch(t, async () => {
              if (function(e) {
                  if (URL.prototype) try {
                    return new URL(e, location.href), !1
                  } catch (e) {
                    if (Dn(e)) return !0;
                    throw e
                  }
                }(t)) throw new b(y[$t], $t);
              try {
                return await u(() => import(t), [], import.meta.url)
              } catch {
                throw new b(y[tn], tn)
              }
            }, () => {
              throw new b(y[Qt], Qt)
            }).then(e => {
              if (typeof(e == null ? void 0 : e.start) != `function`) throw new b(y[dn], dn);
              return e
            })
          }(e, t)), i = await t.start({
            ...a,
            ldi: {
              attempts: r,
              visibilityStates: f
            }
          });
          return n = i, i
        } catch (e) {
          throw r = function(e) {
            return e instanceof b && e.code === dn ? new b(y[tn], tn) : e
          }(e), r
        } finally {
          p()
        }
      }();
    return {
      async get(e) {
        if (n) return n.get(e);
        if (r) throw r;
        return (await m).get(e)
      },
      async collect(e) {
        if (n) return n.collect(e);
        if (r) throw r;
        return (await m).collect(e)
      }
    }
  }
}

function An(e, t, n, r) {
  Ln(() => {
    let i = `${e}=${t}`,
      a = `expires=${new Date(Date.now()+24*n*60*60*1e3).toUTCString()}`,
      o = r ? `domain=${r}` : ``;
    document.cookie = [i, `path=/`, a, o, `SameSite=Lax`].join(`; `)
  }, void 0)
}

function jn(e, t) {
  try {
    return new window.URL(e, window.location.href)
  } catch (n) {
    if (Dn(n)) return console.warn(`Ignoring an invalid '${t}' value: "${e}"`), null;
    throw n
  }
}

function Mn(e) {
  let t = location.hostname,
    n = function() {
      var e;
      let t = window;
      return [`buildID` in navigator, `MozAppearance` in (((e = document.documentElement) == null ? void 0 : e.style) ?? {}), `onmozfullscreenchange` in t, `mozInnerScreenX` in t, `CSSMozDocumentRule` in t, `CanvasCaptureMediaStream` in t].reduce((e, t) => e + +!!t, 0) >= 4
    }();
  (function(e, t) {
    let n = e.length - +(e.slice(-1) === `.`);
    do
      if (n = n > 0 ? e.lastIndexOf(`.`, n - 1) : -1, !0 === t(e.slice(n + 1))) return !0; while (n >= 0);
    return !1
  })(t, r => {
    if (!n || !/^([^.]{1,3}\.)*[^.]+\.?$/.test(r) || r === t) return e(r)
  }) || e()
}
var Nn = `4.1.1`;

function Pn(e, t, n) {
  let r = n instanceof b ? n.code : null;
  return r === Qt || r === $t ? {
    action: `exclude`,
    delay: 0
  } : r === dn ? {
    action: `exclude`,
    delay: `backoff`
  } : r === tn ? {
    action: `postpone`,
    delay: Date.now() - e.getTime() < 50 ? 0 : `backoff`
  } : {
    action: `postpone`,
    delay: `backoff`
  }
}
var Fn = {
    prepareScriptEndpoints: function(e, t) {
      return e === void 0 ? [t] : Un(e) ? function(e, t) {
        let n, r = !1;
        Hn(e) ? (r = !0, n = Rn(e.value)) : n = Rn(e);
        let i = [];
        for (let e of n) {
          let t = jn(e, `endpoints`);
          t && i.push(mr(t))
        }
        return r || i.push(t), i
      }(e, t) : function(e) {
        if (!e || typeof e != `object`) return !1;
        let t = e;
        return typeof t.__type__ == `string` && gn(t.__type__) === 694409711 && (t.script === void 0 || Un(t.script)) && (t.helper === void 0 || Un(t.helper)) && (t.ingress === void 0 || Un(t.ingress))
      }(e) ? function(e, t, n) {
        if (e === void 0) return [t];
        let r, i = !1;
        Hn(e) ? (i = !0, r = Rn(e.value)) : r = Rn(e);
        let a = [];
        for (let e of r) {
          let t = jn(e, n);
          t && a.push(t.href)
        }
        return i || a.push(t), a
      }(e.script, t, `script`) : null
    },
    withCspViolationWatch: function(e, t, n, r) {
      let i = document,
        a = `securitypolicyviolation`,
        o, s = t => {
          let n = new URL(e, location.href),
            {
              blockedURI: r
            } = t;
          r !== n.href && r !== n.protocol.slice(0, -1) && r !== n.origin || (o = t, c())
        };
      i.addEventListener(a, s);
      let c = () => i.removeEventListener(a, s);
      return r == null || r.then(c, c), Promise.resolve().then(t).then(e => (c(), e), e => new Promise(e => {
        let t = new MessageChannel;
        t.port1.onmessage = () => e(), t.port2.postMessage(null)
      }).then(() => {
        if (c(), o) return n(o);
        throw e
      }))
    }
  },
  In = kn();

function Ln(e, t) {
  try {
    document.cookie
  } catch (e) {
    if (function(e) {
        if (!(e instanceof DOMException)) return !1;
        let t = e.message;
        return zn.test(t) || Bn.test(t) || Vn.test(t)
      }(e)) return t;
    throw e
  }
  return e()
}

function Rn(e) {
  return xn(e) ? e : [e]
}
var zn = /The document is sandboxed and lacks the 'allow-same-origin' flag/,
  Bn = /The operation is insecure/,
  Vn = /Forbidden in a sandboxed document without the 'allow-same-origin' flag/;

function Hn(e) {
  return !!e && e.__type__ === Tn
}

function Un(e) {
  return Hn(e) ? vr(e.value) : vr(e)
}
var Wn = 34,
  Gn = 44,
  Kn = 58,
  qn = 32,
  Jn = 9,
  Yn = 13,
  Xn = 10,
  Zn = 92,
  Qn = 48,
  $n = 101,
  er = 117,
  tr = 69,
  nr = 43,
  rr = 45,
  ir = 46,
  ar = 91,
  or = 93,
  sr = 123,
  cr = 125,
  lr = new Uint8Array([110, er, 108, 108]),
  ur = new Uint8Array([116, 114, er, $n]),
  dr = new Uint8Array([102, 97, 108, 115, $n]),
  fr = {
    '"': `"`,
    "\\": `\\`,
    "\b": `b`,
    "\f": `f`,
    "\n": `n`,
    "\r": `r`,
    "	": `t`
  },
  pr = (() => {
    let e = new Uint8Array(128);
    for (let [t, n] of Object.entries(fr)) e[n.charCodeAt(0)] = t.charCodeAt(0);
    return e
  })();

function mr(e) {
  return `${e.origin}${e.pathname.endsWith(`/`)?e.pathname:`${e.pathname}/`}web/`
}
async function hr(e, t, n, r, i, a, o) {
  if (e === void 0) return;
  let s = e;
  for (let e = 0; e < t; ++e) {
    let t = new Date,
      c, l;
    try {
      c = await yr(() => n(s, e, o), o)
    } catch (e) {
      l = e, a.failedAttempts.push({
        level: 0,
        endpoint: s,
        error: e
      })
    }
    if (c) {
      let e = r(c);
      if (`result` in e) {
        a.result = e.result;
        break
      }
      if (a.failedAttempts.push({
          level: 1,
          endpoint: s,
          error: e.error
        }), e.stop) break
    }
    let u = i(t, c, l);
    if (!u) break;
    await yr(vn(u[1]), o), s = u[0]
  }
}

function gr(e, t) {
  if (e.arr.length < t) {
    let n = new Uint8Array(Math.max(2 * e.arr.length, t));
    n.set(e.arr), e.arr = n
  }
}

function _r(e, t, ...n) {
  e && async function(e, t) {
    try {
      return await e()
    } catch (e) {
      return console.error(e), t
    }
  }(() => {
    let r = t(...n);
    r !== void 0 && e(r)
  })
}

function vr(e) {
  return typeof e == `string` || Array.isArray(e) && e.every(e => typeof e == `string`)
}

function yr(e, t) {
  return new Promise((n, r) => {
    let i = !1;
    t == null || t.then(() => i = !0, () => i = !0), (typeof e == `function` ? yr(Promise.resolve(), t).then(e) : e).then(e => {
      i || n(e)
    }, e => {
      i || r(e)
    })
  })
}
var br = [3, 13],
  xr = 9;

function Sr(e, t) {
  gr(e, e.len + t.length), e.arr.set(t, e.len), e.len += t.length
}

function Cr(e, t) {
  return (e - t + 256) % 256
}
var wr = {
    start: In,
    handleAgentData: function(e, t = {}) {
      let {
        storageKeyPrefix: n = En,
        do: r
      } = t;
      try {
        let t = fn(e);
        t === null ? _r(r, () => ({
          e: 25,
          result: {
            error: Error(`Failed to decode response`)
          }
        })) : (t.visitorToken && (s = t.visitorToken, i = c = `${n}t`, a = s, o = 365, Mn(e => {
          (function(e, t) {
            An(e, ``, -1, t)
          })(i, e)
        }), o < 0 || Mn(e => (An(i, a, o, e), function(e) {
          return Ln(() => {
            let t = `${e}=`;
            for (let e of document.cookie.split(`;`)) {
              let n = 0;
              for (; e[n] === ` ` && n < e.length;) ++n;
              if (e.indexOf(t) === n) return e.slice(n + t.length)
            }
          }, void 0)
        }(i) === a)), function(e, t) {
          var n;
          try {
            (n = localStorage == null ? void 0 : localStorage.setItem) == null || n.call(localStorage, e, t)
          } catch {}
        }(c, s)), t.notifications.forEach(Cn), _r(r, () => ({
          e: 25,
          result: {
            response: t
          }
        })))
      } catch (e) {
        throw _r(r, () => ({
          e: 25,
          result: {
            error: e instanceof Error ? e : Error(String(e))
          }
        })), new b(y[en], en)
      }
      var i, a, o, s, c
    },
    isFingerprintError: yn,
    withoutDefault: hn
  },
  Tr = `5.2.0`;

function Er(e, t) {
  return new Promise(n => setTimeout(n, e, t))
}

function Dr() {
  return new Promise(e => {
    let t = new MessageChannel;
    t.port1.onmessage = () => e(), t.port2.postMessage(null)
  })
}

function Or(e, t = 1 / 0) {
  let {
    requestIdleCallback: n
  } = window;
  return n ? new Promise(e => n.call(window, () => e(), {
    timeout: t
  })) : Er(Math.min(e, t))
}

function kr(e) {
  return !!e && typeof e.then == `function`
}

function Ar(e, t) {
  try {
    let n = e();
    kr(n) ? n.then(e => t(!0, e), e => t(!1, e)) : t(!0, n)
  } catch (e) {
    t(!1, e)
  }
}
async function jr(e, t, n = 16) {
  let r = Array(e.length),
    i = Date.now();
  for (let a = 0; a < e.length; ++a) {
    r[a] = t(e[a], a);
    let o = Date.now();
    o >= i + n && (i = o, await Dr())
  }
  return r
}

function Mr(e) {
  return e.then(void 0, () => void 0), e
}

function Nr(e, t) {
  for (let n = 0, r = e.length; n < r; ++n)
    if (e[n] === t) return !0;
  return !1
}

function Pr(e, t) {
  return !Nr(e, t)
}

function Fr(e) {
  return parseInt(e)
}

function x(e) {
  return parseFloat(e)
}

function S(e, t) {
  return typeof e == `number` && isNaN(e) ? t : e
}

function C(e) {
  return e.reduce((e, t) => e + +!!t, 0)
}

function Ir(e, t = 1) {
  if (Math.abs(t) >= 1) return Math.round(e / t) * t;
  {
    let n = 1 / t;
    return Math.round(e * n) / n
  }
}

function Lr(e) {
  let t = `Unexpected syntax '${e}'`,
    n = /^\s*([a-z-]*)(.*)$/i.exec(e),
    r = n[1] || void 0,
    i = {},
    a = /([.:#][\w-]+|\[.+?\])/gi,
    o = (e, t) => {
      i[e] = i[e] || [], i[e].push(t)
    };
  for (;;) {
    let e = a.exec(n[2]);
    if (!e) break;
    let r = e[0];
    switch (r[0]) {
      case `.`:
        o(`class`, r.slice(1));
        break;
      case `#`:
        o(`id`, r.slice(1));
        break;
      case `[`: {
        let e = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(r);
        if (e) o(e[1], e[4] ?? e[5] ?? ``);
        else throw Error(t);
        break
      }
      default:
        throw Error(t)
    }
  }
  return [r, i]
}

function Rr(e) {
  let t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (r > 127) return new TextEncoder().encode(e);
    t[n] = r
  }
  return t
}

function w(e, t) {
  let n = e[0] >>> 16,
    r = e[0] & 65535,
    i = e[1] >>> 16,
    a = e[1] & 65535,
    o = t[0] >>> 16,
    s = t[0] & 65535,
    c = t[1] >>> 16,
    l = t[1] & 65535,
    u = 0,
    d = 0,
    f = 0,
    p = 0;
  p += a + l, f += p >>> 16, p &= 65535, f += i + c, d += f >>> 16, f &= 65535, d += r + s, u += d >>> 16, d &= 65535, u += n + o, u &= 65535, e[0] = u << 16 | d, e[1] = f << 16 | p
}

function T(e, t) {
  let n = e[0] >>> 16,
    r = e[0] & 65535,
    i = e[1] >>> 16,
    a = e[1] & 65535,
    o = t[0] >>> 16,
    s = t[0] & 65535,
    c = t[1] >>> 16,
    l = t[1] & 65535,
    u = 0,
    d = 0,
    f = 0,
    p = 0;
  p += a * l, f += p >>> 16, p &= 65535, f += i * l, d += f >>> 16, f &= 65535, f += a * c, d += f >>> 16, f &= 65535, d += r * l, u += d >>> 16, d &= 65535, d += i * c, u += d >>> 16, d &= 65535, d += a * s, u += d >>> 16, d &= 65535, u += n * l + r * c + i * s + a * o, u &= 65535, e[0] = u << 16 | d, e[1] = f << 16 | p
}

function zr(e, t) {
  let n = e[0];
  t %= 64, t === 32 ? (e[0] = e[1], e[1] = n) : t < 32 ? (e[0] = n << t | e[1] >>> 32 - t, e[1] = e[1] << t | n >>> 32 - t) : (t -= 32, e[0] = e[1] << t | n >>> 32 - t, e[1] = n << t | e[1] >>> 32 - t)
}

function E(e, t) {
  t %= 64, t !== 0 && (t < 32 ? (e[0] = e[1] >>> 32 - t, e[1] <<= t) : (e[0] = e[1] << t - 32, e[1] = 0))
}

function D(e, t) {
  e[0] ^= t[0], e[1] ^= t[1]
}
var Br = [4283543511, 3981806797],
  Vr = [3301882366, 444984403];

function Hr(e) {
  let t = [0, e[0] >>> 1];
  D(e, t), T(e, Br), t[1] = e[0] >>> 1, D(e, t), T(e, Vr), t[1] = e[0] >>> 1, D(e, t)
}
var Ur = [2277735313, 289559509],
  Wr = [1291169091, 658871167],
  Gr = [0, 5],
  Kr = [0, 1390208809],
  qr = [0, 944331445];

function Jr(e, t) {
  let n = Rr(e);
  t = t || 0;
  let r = [0, n.length],
    i = r[1] % 16,
    a = r[1] - i,
    o = [0, t],
    s = [0, t],
    c = [0, 0],
    l = [0, 0],
    u;
  for (u = 0; u < a; u += 16) c[0] = n[u + 4] | n[u + 5] << 8 | n[u + 6] << 16 | n[u + 7] << 24, c[1] = n[u] | n[u + 1] << 8 | n[u + 2] << 16 | n[u + 3] << 24, l[0] = n[u + 12] | n[u + 13] << 8 | n[u + 14] << 16 | n[u + 15] << 24, l[1] = n[u + 8] | n[u + 9] << 8 | n[u + 10] << 16 | n[u + 11] << 24, T(c, Ur), zr(c, 31), T(c, Wr), D(o, c), zr(o, 27), w(o, s), T(o, Gr), w(o, Kr), T(l, Wr), zr(l, 33), T(l, Ur), D(s, l), zr(s, 31), w(s, o), T(s, Gr), w(s, qr);
  c[0] = 0, c[1] = 0, l[0] = 0, l[1] = 0;
  let d = [0, 0];
  switch (i) {
    case 15:
      d[1] = n[u + 14], E(d, 48), D(l, d);
    case 14:
      d[1] = n[u + 13], E(d, 40), D(l, d);
    case 13:
      d[1] = n[u + 12], E(d, 32), D(l, d);
    case 12:
      d[1] = n[u + 11], E(d, 24), D(l, d);
    case 11:
      d[1] = n[u + 10], E(d, 16), D(l, d);
    case 10:
      d[1] = n[u + 9], E(d, 8), D(l, d);
    case 9:
      d[1] = n[u + 8], D(l, d), T(l, Wr), zr(l, 33), T(l, Ur), D(s, l);
    case 8:
      d[1] = n[u + 7], E(d, 56), D(c, d);
    case 7:
      d[1] = n[u + 6], E(d, 48), D(c, d);
    case 6:
      d[1] = n[u + 5], E(d, 40), D(c, d);
    case 5:
      d[1] = n[u + 4], E(d, 32), D(c, d);
    case 4:
      d[1] = n[u + 3], E(d, 24), D(c, d);
    case 3:
      d[1] = n[u + 2], E(d, 16), D(c, d);
    case 2:
      d[1] = n[u + 1], E(d, 8), D(c, d);
    case 1:
      d[1] = n[u], D(c, d), T(c, Ur), zr(c, 31), T(c, Wr), D(o, c)
  }
  return D(o, r), D(s, r), w(o, s), w(s, o), Hr(o), Hr(s), w(o, s), w(s, o), (`00000000` + (o[0] >>> 0).toString(16)).slice(-8) + (`00000000` + (o[1] >>> 0).toString(16)).slice(-8) + (`00000000` + (s[0] >>> 0).toString(16)).slice(-8) + (`00000000` + (s[1] >>> 0).toString(16)).slice(-8)
}

function Yr(e) {
  var t;
  return {
    name: e.name,
    message: e.message,
    stack: (t = e.stack) == null ? void 0 : t.split(`
`),
    ...e
  }
}

function Xr(e) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e))
}

function Zr(e) {
  return typeof e != `function`
}

function Qr(e, t) {
  let n = Mr(new Promise(n => {
    let r = Date.now();
    Ar(e.bind(null, t), (...e) => {
      let t = Date.now() - r;
      if (!e[0]) return n(() => ({
        error: e[1],
        duration: t
      }));
      let i = e[1];
      if (Zr(i)) return n(() => ({
        value: i,
        duration: t
      }));
      n(() => new Promise(e => {
        let n = Date.now();
        Ar(i, (...r) => {
          let i = t + Date.now() - n;
          if (!r[0]) return e({
            error: r[1],
            duration: i
          });
          e({
            value: r[1],
            duration: i
          })
        })
      }))
    })
  }));
  return function() {
    return n.then(e => e())
  }
}

function $r(e, t, n, r) {
  let i = Object.keys(e).filter(e => Pr(n, e)),
    a = Mr(jr(i, n => Qr(e[n], t), r));
  return async function() {
    let e = await jr(await a, e => Mr(e()), r),
      t = await Promise.all(e),
      n = {};
    for (let e = 0; e < i.length; ++e) n[i[e]] = t[e];
    return n
  }
}

function ei() {
  let e = window,
    t = navigator;
  return C([`MSCSSMatrix` in e, `msSetImmediate` in e, `msIndexedDB` in e, `msMaxTouchPoints` in t, `msPointerEnabled` in t]) >= 4
}

function ti() {
  let e = window,
    t = navigator;
  return C([`msWriteProfilerMark` in e, `MSStream` in e, `msLaunchUri` in t, `msSaveBlob` in t]) >= 3 && !ei()
}

function ni() {
  let e = window,
    t = navigator;
  return C([`webkitPersistentStorage` in t, `webkitTemporaryStorage` in t, (t.vendor || ``).indexOf(`Google`) === 0, `webkitResolveLocalFileSystemURL` in e, `BatteryManager` in e, `webkitMediaStream` in e, `webkitSpeechGrammar` in e]) >= 5
}

function O() {
  let e = window,
    t = navigator;
  return C([`ApplePayError` in e, `CSSPrimitiveValue` in e, `Counter` in e, t.vendor.indexOf(`Apple`) === 0, `RGBColor` in e, `WebKitMediaKeys` in e]) >= 4
}

function ri() {
  let e = window,
    {
      HTMLElement: t,
      Document: n
    } = e;
  return C([`safari` in e, !(`ongestureend` in e), !(`TouchEvent` in e), !(`orientation` in e), t && !(`autocapitalize` in t.prototype), n && `pointerLockElement` in n.prototype]) >= 4
}

function ii() {
  let e = window;
  return Xr(e.print) && String(e.browser) === `[object WebPageNamespace]`
}

function ai() {
  var e;
  let t = window;
  return C([`buildID` in navigator, `MozAppearance` in (((e = document.documentElement) == null ? void 0 : e.style) ?? {}), `onmozfullscreenchange` in t, `mozInnerScreenX` in t, `CSSMozDocumentRule` in t, `CanvasCaptureMediaStream` in t]) >= 4
}

function oi() {
  let e = window,
    t = navigator,
    {
      CSS: n
    } = e;
  return C([`userActivation` in t, n.supports(`color`, `light-dark(#000, #fff)`), n.supports(`height`, `1lh`), `globalPrivacyControl` in t]) >= 3
}

function si() {
  let {
    CSS: e
  } = window;
  return C([e.supports(`selector(::details-content)`), e.supports(`selector(::before::marker)`), e.supports(`selector(::after::marker)`), !(`locale` in CompositionEvent.prototype)]) >= 3
}

function ci() {
  let e = window;
  return C([!(`MediaSettingsRange` in e), `RTCEncodedAudioFrame` in e, `` + e.Intl == `[object Intl]`, `` + e.Reflect == `[object Reflect]`]) >= 3
}

function li() {
  let e = window,
    {
      URLPattern: t
    } = e;
  return C([`union` in Set.prototype, `Iterator` in e, t && `hasRegExpGroups` in t.prototype, `RGB8` in WebGLRenderingContext.prototype]) >= 3
}

function ui() {
  let e = window,
    t = document,
    {
      CSS: n,
      Promise: r,
      AudioContext: i
    } = e;
  return C([r && `try` in r, `caretPositionFromPoint` in t, i && `onerror` in i.prototype, n.supports(`ruby-align`, `space-around`)]) >= 3
}

function di() {
  let e = window;
  return C([`DOMRectList` in e, `RTCPeerConnectionIceEvent` in e, `SVGGeometryElement` in e, `ontransitioncancel` in e]) >= 3
}

function fi() {
  let e = window,
    t = navigator,
    {
      CSS: n,
      HTMLButtonElement: r
    } = e;
  return C([!(`getStorageUpdates` in t), r && `popover` in r.prototype, `CSSCounterStyleRule` in e, n.supports(`font-size-adjust: ex-height 0.5`), n.supports(`text-transform: full-width`)]) >= 4
}

function pi() {
  if (navigator.platform === `iPad`) return !0;
  let e = screen,
    t = e.width / e.height;
  return C([`MediaSource` in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
}

function mi() {
  let e = document;
  return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
}

function hi() {
  let e = document;
  return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e)
}

function gi() {
  let e = ni(),
    t = ai(),
    n = window,
    r = navigator,
    i = `connection`;
  return e ? C([!(`SharedWorker` in n), r[i] && `ontypechange` in r[i], !(`sinkId` in new Audio)]) >= 2 : t ? C([`onorientationchange` in n, `orientation` in n, /android/i.test(r.appVersion)]) >= 2 : !1
}

function _i() {
  let e = navigator,
    t = window,
    n = Audio.prototype,
    {
      visualViewport: r
    } = t;
  return C([`srLatency` in n, `srChannelCount` in n, `devicePosture` in e, r && `segments` in r, `getTextInformation` in Image.prototype]) >= 3
}

function vi() {
  return xi() ? -4 : yi()
}

function yi() {
  let e = window,
    t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
  if (!t) return -2;
  if (bi()) return -1;
  let n = new t(1, 5e3, 44100),
    r = n.createOscillator();
  r.type = `triangle`, r.frequency.value = 1e4;
  let i = n.createDynamicsCompressor();
  i.threshold.value = -50, i.knee.value = 40, i.ratio.value = 12, i.attack.value = 0, i.release.value = .25, r.connect(i), i.connect(n.destination), r.start(0);
  let [a, o] = Si(n), s = Mr(a.then(e => Ci(e.getChannelData(0).subarray(4500)), e => {
    if (e.name === `timeout` || e.name === `suspended`) return -3;
    throw e
  }));
  return () => (o(), s)
}

function bi() {
  return O() && !ri() && !di()
}

function xi() {
  return O() && fi() && ii() || ni() && _i() && li()
}

function Si(e) {
  let t = () => void 0;
  return [new Promise((n, r) => {
    let i = !1,
      a = 0,
      o = 0;
    e.oncomplete = e => n(e.renderedBuffer);
    let s = () => {
        setTimeout(() => r(wi(`timeout`)), Math.min(500, o + 5e3 - Date.now()))
      },
      c = () => {
        try {
          let t = e.startRendering();
          switch (kr(t) && Mr(t), e.state) {
            case `running`:
              o = Date.now(), i && s();
              break;
            case `suspended`:
              document.hidden || a++, i && a >= 3 ? r(wi(`suspended`)) : setTimeout(c, 500)
          }
        } catch (e) {
          r(e)
        }
      };
    c(), t = () => {
      i || (i = !0, o > 0 && s())
    }
  }), t]
}

function Ci(e) {
  let t = 0;
  for (let n = 0; n < e.length; ++n) t += Math.abs(e[n]);
  return t
}

function wi(e) {
  let t = Error(e);
  return t.name = e, t
}
async function Ti(e, t, n = 50) {
  var r, i, a;
  let o = document;
  for (; !o.body;) await Er(n);
  let s = o.createElement(`iframe`);
  try {
    for (await new Promise((e, n) => {
        let r = !1,
          i = () => {
            r = !0, e()
          };
        s.onload = i, s.onerror = e => {
          r = !0, n(e)
        };
        let {
          style: a
        } = s;
        a.setProperty(`display`, `block`, `important`), a.position = `absolute`, a.top = `0`, a.left = `0`, a.visibility = `hidden`, t && `srcdoc` in s ? s.srcdoc = t : s.src = `about:blank`, o.body.appendChild(s);
        let c = () => {
          var e, t;
          r || (((t = (e = s.contentWindow) == null ? void 0 : e.document) == null ? void 0 : t.readyState) === `complete` ? i() : setTimeout(c, 10))
        };
        c()
      }); !((i = (r = s.contentWindow) == null ? void 0 : r.document) != null && i.body);) await Er(n);
    return await e(s, s.contentWindow)
  } finally {
    (a = s.parentNode) == null || a.removeChild(s)
  }
}

function Ei(e) {
  let [t, n] = Lr(e), r = document.createElement(t ?? `div`);
  for (let e of Object.keys(n)) {
    let t = n[e].join(` `);
    e === `style` ? Di(r.style, t) : r.setAttribute(e, t)
  }
  return r
}

function Di(e, t) {
  for (let n of t.split(`;`)) {
    let t = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(n);
    if (t) {
      let [, n, r, , i] = t;
      e.setProperty(n, r, i || ``)
    }
  }
}

function Oi() {
  let e = window;
  for (;;) {
    let t = e.parent;
    if (!t || t === e) return !1;
    try {
      if (t.location.origin !== e.location.origin) return !0
    } catch (e) {
      if (e instanceof Error && e.name === `SecurityError`) return !0;
      throw e
    }
    e = t
  }
}
var ki = `mmMwWLliI0O&1`,
  Ai = `48px`,
  ji = [`monospace`, `sans-serif`, `serif`],
  Mi = `sans-serif-thin.ARNO PRO.Agency FB.Arabic Typesetting.Arial Unicode MS.AvantGarde Bk BT.BankGothic Md BT.Batang.Bitstream Vera Sans Mono.Calibri.Century.Century Gothic.Clarendon.EUROSTILE.Franklin Gothic.Futura Bk BT.Futura Md BT.GOTHAM.Gill Sans.HELV.Haettenschweiler.Helvetica Neue.Humanst521 BT.Leelawadee.Letter Gothic.Levenim MT.Lucida Bright.Lucida Sans.Menlo.MS Mincho.MS Outlook.MS Reference Specialty.MS UI Gothic.MT Extra.MYRIAD PRO.Marlett.Meiryo UI.Microsoft Uighur.Minion Pro.Monotype Corsiva.PMingLiU.Pristina.SCRIPTINA.Segoe UI Light.Serifa.SimHei.Small Fonts.Staccato222 BT.TRAJAN PRO.Univers CE 55 Medium.Vrinda.ZWAdobeF`.split(`.`);

function Ni() {
  return Ti(async (e, {
    document: t
  }) => {
    let n = t.body;
    n.style.fontSize = Ai;
    let r = t.createElement(`div`);
    r.style.setProperty(`visibility`, `hidden`, `important`);
    let i = {},
      a = {},
      o = e => {
        let n = t.createElement(`span`),
          {
            style: i
          } = n;
        return i.position = `absolute`, i.top = `0`, i.left = `0`, i.fontFamily = e, n.textContent = ki, r.appendChild(n), n
      },
      s = (e, t) => o(`'${e}',${t}`),
      c = () => ji.map(o),
      l = () => {
        let e = {};
        for (let t of Mi) e[t] = ji.map(e => s(t, e));
        return e
      },
      u = e => ji.some((t, n) => e[n].offsetWidth !== i[t] || e[n].offsetHeight !== a[t]),
      d = c(),
      f = l();
    n.appendChild(r);
    for (let e = 0; e < ji.length; e++) i[ji[e]] = d[e].offsetWidth, a[ji[e]] = d[e].offsetHeight;
    return Mi.filter(e => u(f[e]))
  })
}

function Pi() {
  let e = navigator.plugins;
  if (!e) return;
  let t = [];
  for (let n = 0; n < e.length; ++n) {
    let r = e[n];
    if (!r) continue;
    let i = [];
    for (let e = 0; e < r.length; ++e) {
      let t = r[e];
      i.push({
        type: t.type,
        suffixes: t.suffixes
      })
    }
    t.push({
      name: r.name,
      description: r.description,
      mimeTypes: i
    })
  }
  return t
}

function Fi() {
  return Ii(Wi())
}

function Ii(e) {
  let t = !1,
    n, r, [i, a] = Li();
  return Ri(i, a) ? (t = zi(a), e ? n = r = `skipped` : [n, r] = Bi(i, a)) : n = r = `unsupported`, {
    winding: t,
    geometry: n,
    text: r
  }
}

function Li() {
  let e = document.createElement(`canvas`);
  return e.width = 1, e.height = 1, [e, e.getContext(`2d`)]
}

function Ri(e, t) {
  return !!(t && e.toDataURL)
}

function zi(e) {
  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, `evenodd`)
}

function Bi(e, t) {
  Vi(e, t);
  let n = Ui(e);
  return n === Ui(e) ? (Hi(e, t), [Ui(e), n]) : [`unstable`, `unstable`]
}

function Vi(e, t) {
  e.width = 240, e.height = 60, t.textBaseline = `alphabetic`, t.fillStyle = `#f60`, t.fillRect(100, 1, 62, 20), t.fillStyle = `#069`, t.font = `11pt "Times New Roman"`;
  let n = `Cwm fjordbank gly ${String.fromCharCode(55357,56835)}`;
  t.fillText(n, 2, 15), t.fillStyle = `rgba(102, 204, 0, 0.2)`, t.font = `18pt Arial`, t.fillText(n, 4, 45)
}

function Hi(e, t) {
  e.width = 122, e.height = 110, t.globalCompositeOperation = `multiply`;
  for (let [e, n, r] of [
      [`#f2f`, 40, 40],
      [`#2ff`, 80, 40],
      [`#ff2`, 60, 80]
    ]) t.fillStyle = e, t.beginPath(), t.arc(n, r, 40, 0, Math.PI * 2, !0), t.closePath(), t.fill();
  t.fillStyle = `#f9c`, t.arc(60, 60, 60, 0, Math.PI * 2, !0), t.arc(60, 60, 20, 0, Math.PI * 2, !0), t.fill(`evenodd`)
}

function Ui(e) {
  return e.toDataURL()
}

function Wi() {
  let e = O() && fi() && ii(),
    t = ai() && oi();
  return e || t
}

function Gi() {
  let e = navigator,
    t = 0,
    n;
  e.maxTouchPoints === void 0 ? e.msMaxTouchPoints !== void 0 && (t = e.msMaxTouchPoints) : t = Fr(e.maxTouchPoints);
  try {
    document.createEvent(`TouchEvent`), n = !0
  } catch {
    n = !1
  }
  let r = `ontouchstart` in window;
  return {
    maxTouchPoints: t,
    touchEvent: n,
    touchStart: r
  }
}

function Ki() {
  return navigator.oscpu
}

function qi() {
  let e = navigator,
    t = [],
    n = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if (n !== void 0 && t.push([n]), Array.isArray(e.languages)) ni() && ci() || t.push(e.languages);
  else if (typeof e.languages == `string`) {
    let n = e.languages;
    n && t.push(n.split(`,`))
  }
  return t
}

function Ji() {
  return window.screen.colorDepth
}

function Yi() {
  return S(x(navigator.deviceMemory), void 0)
}

function Xi() {
  if (!(O() && fi() && ii())) return Zi()
}

function Zi() {
  let e = screen,
    t = e => S(Fr(e), null),
    n = [t(e.width), t(e.height)];
  return n.sort().reverse(), n
}
var Qi = 2500,
  $i = 10,
  ea, ta;

function na() {
  if (ta !== void 0) return;
  let e = () => {
    let t = aa();
    oa(t) ? ta = setTimeout(e, Qi) : (ea = t, ta = void 0)
  };
  e()
}

function ra() {
  return na(), async () => {
    let e = aa();
    if (oa(e)) {
      if (ea) return [...ea];
      mi() && (await hi(), e = aa())
    }
    return oa(e) || (ea = e), e
  }
}

function ia() {
  let e = O() && fi() && ii(),
    t = ai() && si();
  if (e || t) return () => Promise.resolve(void 0);
  let n = ra();
  return async () => {
    let e = await n(),
      t = e => e === null ? null : Ir(e, $i);
    return [t(e[0]), t(e[1]), t(e[2]), t(e[3])]
  }
}

function aa() {
  let e = screen;
  return [S(x(e.availTop), null), S(x(e.width) - x(e.availWidth) - S(x(e.availLeft), 0), null), S(x(e.height) - x(e.availHeight) - S(x(e.availTop), 0), null), S(x(e.availLeft), null)]
}

function oa(e) {
  for (let t = 0; t < 4; ++t)
    if (e[t]) return !1;
  return !0
}

function sa() {
  let e = ca();
  return e !== void 0 && ai() && si() ? e >= 8 ? 8 : 4 : e
}

function ca() {
  return S(Fr(navigator.hardwareConcurrency), void 0)
}

function la() {
  var e;
  let t = (e = window.Intl) == null ? void 0 : e.DateTimeFormat;
  if (t) {
    let e = new t().resolvedOptions().timeZone;
    if (e) return e
  }
  let n = -ua();
  return `UTC${n>=0?`+`:``}${n}`
}

function ua() {
  let e = new Date().getFullYear();
  return Math.max(x(new Date(e, 0, 1).getTimezoneOffset()), x(new Date(e, 6, 1).getTimezoneOffset()))
}

function da() {
  try {
    return !!window.sessionStorage
  } catch {
    return !0
  }
}

function fa() {
  try {
    return !!window.localStorage
  } catch {
    return !0
  }
}

function pa() {
  if (!(ei() || ti())) try {
    return !!window.indexedDB
  } catch {
    return !0
  }
}

function ma() {
  return !!window.openDatabase
}

function ha() {
  return navigator.cpuClass
}

function ga() {
  let {
    platform: e
  } = navigator;
  return e === `MacIntel` && O() && !ri() ? pi() ? `iPad` : `iPhone` : e
}

function _a() {
  return navigator.vendor || ``
}

function va() {
  let e = [];
  for (let t of [`chrome`, `safari`, `__crWeb`, `__gCrWeb`, `yandex`, `__yb`, `__ybro`, `__firefox__`, `__edgeTrackingPreventionStatistics`, `webkit`, `oprt`, `samsungAr`, `ucweb`, `UCShellJava`, `puffinDevice`]) {
    let n = window[t];
    n && typeof n == `object` && e.push(t)
  }
  return e.sort()
}

function ya() {
  let e = document;
  try {
    e.cookie = `cookietest=1; SameSite=Strict;`;
    let t = e.cookie.indexOf(`cookietest=`) !== -1;
    return e.cookie = `cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT`, t
  } catch {
    return !1
  }
}

function ba() {
  let e = atob;
  return {
    abpIndo: [`#Iklan-Melayang`, `#Kolom-Iklan-728`, `#SidebarIklan-wrapper`, `[title="ALIENBOLA" i]`, e(`I0JveC1CYW5uZXItYWRz`)],
    abpvn: [`.quangcao`, `#mobileCatfish`, e(`LmNsb3NlLWFkcw==`), `[id^="bn_bottom_fixed_"]`, `#pmadv`],
    adBlockFinland: [`.mainostila`, e(`LnNwb25zb3JpdA==`), `.ylamainos`, e(`YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd`), e(`YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd`)],
    adBlockPersian: [`#navbar_notice_50`, `.kadr`, `TABLE[width="140px"]`, `#divAgahi`, e(`YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd`)],
    adBlockWarningRemoval: [`#adblock-honeypot`, `.adblocker-root`, `.wp_adblock_detect`, e(`LmhlYWRlci1ibG9ja2VkLWFk`), e(`I2FkX2Jsb2NrZXI=`)],
    adGuardAnnoyances: [`.hs-sosyal`, `#cookieconsentdiv`, `div[class^="app_gdpr"]`, `.as-oil`, `[data-cypress="soft-push-notification-modal"]`],
    adGuardBase: [`.BetterJsPopOverlay`, e(`I2FkXzMwMFgyNTA=`), e(`I2Jhbm5lcmZsb2F0MjI=`), e(`I2NhbXBhaWduLWJhbm5lcg==`), e(`I0FkLUNvbnRlbnQ=`)],
    adGuardChinese: [e(`LlppX2FkX2FfSA==`), e(`YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd`), `#widget-quan`, e(`YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd`), e(`YVtocmVmKj0iLjE5NTZobC5jb20vIl0=`)],
    adGuardFrench: [`#pavePub`, e(`LmFkLWRlc2t0b3AtcmVjdGFuZ2xl`), `.mobile_adhesion`, `.widgetadv`, e(`LmFkc19iYW4=`)],
    adGuardGerman: [`aside[data-portal-id="leaderboard"]`],
    adGuardJapanese: [`#kauli_yad_1`, e(`YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0=`), e(`Ll9wb3BJbl9pbmZpbml0ZV9hZA==`), e(`LmFkZ29vZ2xl`), e(`Ll9faXNib29zdFJldHVybkFk`)],
    adGuardMobile: [e(`YW1wLWF1dG8tYWRz`), e(`LmFtcF9hZA==`), `amp-embed[type="24smi"]`, `#mgid_iframe1`, e(`I2FkX2ludmlld19hcmVh`)],
    adGuardRussian: [e(`YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0=`), e(`LnJlY2xhbWE=`), `div[id^="smi2adblock"]`, e(`ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd`), `#psyduckpockeball`],
    adGuardSocial: [e(`YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0=`), e(`YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0=`), `.etsy-tweet`, `#inlineShare`, `.popup-social`],
    adGuardSpanishPortuguese: [`#barraPublicidade`, `#Publicidade`, `#publiEspecial`, `#queTooltip`, `.cnt-publi`],
    adGuardTrackingProtection: [`#qoo-counter`, e(`YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ==`), e(`YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0=`), e(`YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ==`), `#top100counter`],
    adGuardTurkish: [`#backkapat`, e(`I3Jla2xhbWk=`), e(`YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0=`), e(`YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd`), e(`YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==`)],
    bulgarian: [e(`dGQjZnJlZW5ldF90YWJsZV9hZHM=`), `#ea_intext_div`, `.lapni-pop-over`, `#xenium_hot_offers`],
    easyList: [`.yb-floorad`, e(`LndpZGdldF9wb19hZHNfd2lkZ2V0`), e(`LnRyYWZmaWNqdW5reS1hZA==`), `.textad_headline`, e(`LnNwb25zb3JlZC10ZXh0LWxpbmtz`)],
    easyListChina: [e(`LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ==`), e(`LmZyb250cGFnZUFkdk0=`), `#taotaole`, `#aafoot.top_box`, `.cfa_popup`],
    easyListCookie: [`.ezmob-footer`, `.cc-CookieWarning`, `[data-cookie-number]`, e(`LmF3LWNvb2tpZS1iYW5uZXI=`), `.sygnal24-gdpr-modal-wrap`],
    easyListCzechSlovak: [`#onlajny-stickers`, e(`I3Jla2xhbW5pLWJveA==`), e(`LnJla2xhbWEtbWVnYWJvYXJk`), `.sklik`, e(`W2lkXj0ic2tsaWtSZWtsYW1hIl0=`)],
    easyListDutch: [e(`I2FkdmVydGVudGll`), e(`I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw==`), `.adstekst`, e(`YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0=`), `#semilo-lrectangle`],
    easyListGermany: [`#SSpotIMPopSlider`, e(`LnNwb25zb3JsaW5rZ3J1ZW4=`), e(`I3dlcmJ1bmdza3k=`), e(`I3Jla2xhbWUtcmVjaHRzLW1pdHRl`), e(`YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=`)],
    easyListItaly: [e(`LmJveF9hZHZfYW5udW5jaQ==`), `.sb-box-pubbliredazionale`, e(`YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd`), e(`YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd`), e(`YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==`)],
    easyListLithuania: [e(`LnJla2xhbW9zX3RhcnBhcw==`), e(`LnJla2xhbW9zX251b3JvZG9z`), e(`aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd`), e(`aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd`), e(`aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd`)],
    estonian: [e(`QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==`)],
    fanboyAnnoyances: [`#ac-lre-player`, `.navigate-to-top`, `#subscribe_popup`, `.newsletter_holder`, `#back-top`],
    fanboyAntiFacebook: [`.util-bar-module-firefly-visible`],
    fanboyEnhancedTrackers: [`.open.pushModal`, `#issuem-leaky-paywall-articles-zero-remaining-nag`, `#sovrn_container`, `div[class$="-hide"][zoompage-fontsize][style="display: block;"]`, `.BlockNag__Card`],
    fanboySocial: [`#FollowUs`, `#meteored_share`, `#social_follow`, `.article-sharer`, `.community__social-desc`],
    frellwitSwedish: [e(`YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ==`), e(`YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ==`), `article.category-samarbete`, e(`ZGl2LmhvbGlkQWRz`), `ul.adsmodern`],
    greekAdBlock: [e(`QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd`), e(`QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ==`), e(`QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd`), `DIV.agores300`, `TABLE.advright`],
    hungarian: [`#cemp_doboz`, `.optimonk-iframe-container`, e(`LmFkX19tYWlu`), e(`W2NsYXNzKj0iR29vZ2xlQWRzIl0=`), `#hirdetesek_box`],
    iDontCareAboutCookies: [`.alert-info[data-block-track*="CookieNotice"]`, `.ModuleTemplateCookieIndicator`, `.o--cookies--container`, `#cookies-policy-sticky`, `#stickyCookieBar`],
    icelandicAbp: [e(`QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==`)],
    latvian: [e(`YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0=`), e(`YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==`)],
    listKr: [e(`YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0=`), e(`I2xpdmVyZUFkV3JhcHBlcg==`), e(`YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ==`), e(`aW5zLmZhc3R2aWV3LWFk`), `.revenue_unit_item.dable`],
    listeAr: [e(`LmdlbWluaUxCMUFk`), `.right-and-left-sponsers`, e(`YVtocmVmKj0iLmFmbGFtLmluZm8iXQ==`), e(`YVtocmVmKj0iYm9vcmFxLm9yZyJd`), e(`YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd`)],
    listeFr: [e(`YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ==`), e(`I2FkY29udGFpbmVyX3JlY2hlcmNoZQ==`), e(`YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0=`), `.site-pub-interstitiel`, `div[id^="crt-"][data-criteo-id]`],
    officialPolish: [`#ceneo-placeholder-ceneo-12`, e(`W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd`), e(`YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ==`), e(`YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ==`), e(`ZGl2I3NrYXBpZWNfYWQ=`)],
    ro: [e(`YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd`), e(`YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd`), e(`YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0=`), e(`YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd`), `a[href^="/url/"]`],
    ruAd: [e(`YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd`), e(`YVtocmVmKj0iLy91dGltZy5ydS8iXQ==`), e(`YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0=`), `#pgeldiz`, `.yandex-rtb-block`],
    thaiAds: [`a[href*=macau-uta-popup]`, e(`I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA==`), e(`LmFkczMwMHM=`), `.bumq`, `.img-kosana`],
    webAnnoyancesUltralist: [`#mod-social-share-2`, `#social-tools`, e(`LmN0cGwtZnVsbGJhbm5lcg==`), `.zergnet-recommend`, `.yt.btn-link.btn-md.btn`]
  }
}
async function xa({
  debug: e
} = {}) {
  if (!Sa()) return;
  let t = ba(),
    n = Object.keys(t),
    r = await Ca([].concat(...n.map(e => t[e])));
  e && Ta(t, r);
  let i = n.filter(e => {
    let n = t[e];
    return C(n.map(e => r[e])) > n.length * .6
  });
  return i.sort(), i
}

function Sa() {
  return O() || gi()
}
async function Ca(e) {
  var t;
  let n = document,
    r = n.createElement(`div`),
    i = Array(e.length),
    a = {};
  wa(r);
  for (let t = 0; t < e.length; ++t) {
    let a = Ei(e[t]);
    a.tagName === `DIALOG` && a.show();
    let o = n.createElement(`div`);
    wa(o), o.appendChild(a), r.appendChild(o), i[t] = a
  }
  for (; !n.body;) await Er(50);
  n.body.appendChild(r);
  try {
    for (let t = 0; t < e.length; ++t) i[t].offsetParent || (a[e[t]] = !0)
  } finally {
    (t = r.parentNode) == null || t.removeChild(r)
  }
  return a
}

function wa(e) {
  e.style.setProperty(`visibility`, `hidden`, `important`), e.style.setProperty(`display`, `block`, `important`)
}

function Ta(e, t) {
  let n = "DOM blockers debug:\n```";
  for (let r of Object.keys(e)) {
    n += `\n${r}:`;
    for (let i of e[r]) n += `\n  ${t[i]?`🚫`:`➡️`} ${i}`
  }
  console.log(`${n}\n\`\`\``)
}

function Ea() {
  for (let e of [`rec2020`, `p3`, `srgb`])
    if (matchMedia(`(color-gamut: ${e})`).matches) return e
}

function Da() {
  if (Oa(`inverted`)) return !0;
  if (Oa(`none`)) return !1
}

function Oa(e) {
  return matchMedia(`(inverted-colors: ${e})`).matches
}

function ka() {
  if (Aa(`active`)) return !0;
  if (Aa(`none`)) return !1
}

function Aa(e) {
  return matchMedia(`(forced-colors: ${e})`).matches
}
var ja = 100;

function Ma() {
  if (matchMedia(`(min-monochrome: 0)`).matches) {
    for (let e = 0; e <= ja; ++e)
      if (matchMedia(`(max-monochrome: ${e})`).matches) return e;
    throw Error(`Too high value`)
  }
}

function Na() {
  if (Pa(`no-preference`)) return 0;
  if (Pa(`high`) || Pa(`more`)) return 1;
  if (Pa(`low`) || Pa(`less`)) return -1;
  if (Pa(`forced`)) return 10
}

function Pa(e) {
  return matchMedia(`(prefers-contrast: ${e})`).matches
}

function Fa() {
  if (Ia(`reduce`)) return !0;
  if (Ia(`no-preference`)) return !1
}

function Ia(e) {
  return matchMedia(`(prefers-reduced-motion: ${e})`).matches
}

function La() {
  if (Ra(`reduce`)) return !0;
  if (Ra(`no-preference`)) return !1
}

function Ra(e) {
  return matchMedia(`(prefers-reduced-transparency: ${e})`).matches
}

function za() {
  if (Ba(`high`)) return !0;
  if (Ba(`standard`)) return !1
}

function Ba(e) {
  return matchMedia(`(dynamic-range: ${e})`).matches
}
var k = Math,
  A = () => 0;

function Va() {
  let e = k.acos || A,
    t = k.acosh || A,
    n = k.asin || A,
    r = k.asinh || A,
    i = k.atanh || A,
    a = k.atan || A,
    o = k.sin || A,
    s = k.sinh || A,
    c = k.cos || A,
    l = k.cosh || A,
    u = k.tan || A,
    d = k.tanh || A,
    f = k.exp || A,
    p = k.expm1 || A,
    m = k.log1p || A;
  return {
    acos: e(.12312423423423424),
    acosh: t(1e308),
    acoshPf: (e => k.log(e + k.sqrt(e * e - 1)))(1e154),
    asin: n(.12312423423423424),
    asinh: r(1),
    asinhPf: (e => k.log(e + k.sqrt(e * e + 1)))(1),
    atanh: i(.5),
    atanhPf: (e => k.log((1 + e) / (1 - e)) / 2)(.5),
    atan: a(.5),
    sin: o(-1e300),
    sinh: s(1),
    sinhPf: (e => k.exp(e) - 1 / k.exp(e) / 2)(1),
    cos: c(10.000000000123),
    cosh: l(1),
    coshPf: (e => (k.exp(e) + 1 / k.exp(e)) / 2)(1),
    tan: u(-1e300),
    tanh: d(1),
    tanhPf: (e => (k.exp(2 * e) - 1) / (k.exp(2 * e) + 1))(1),
    exp: f(1),
    expm1: p(1),
    expm1Pf: (e => k.exp(e) - 1)(1),
    log1p: m(10),
    log1pPf: (e => k.log(1 + e))(10),
    powPI: (e => k.pow(k.PI, e))(-100)
  }
}
var Ha = `mmMwWLliI0fiflO&1`,
  Ua = {
    default: [],
    apple: [{
      font: `-apple-system-body`
    }],
    serif: [{
      fontFamily: `serif`
    }],
    sans: [{
      fontFamily: `sans-serif`
    }],
    mono: [{
      fontFamily: `monospace`
    }],
    min: [{
      fontSize: `1px`
    }],
    system: [{
      fontFamily: `system-ui`
    }]
  };

function Wa() {
  return Ka((e, t, n) => {
    let r = {},
      i = {};
    for (let n of Object.keys(Ua)) {
      let [i = {}, a = Ha] = Ua[n], o = e.createElement(`span`);
      o.textContent = a, o.style.whiteSpace = `nowrap`;
      for (let e of Object.keys(i)) {
        let t = i[e];
        t !== void 0 && (o.style[e] = t)
      }
      r[n] = o, t.append(e.createElement(`br`), o)
    }
    let a = ni() && ui();
    for (let e of Object.keys(Ua)) {
      let t = r[e].getBoundingClientRect().width;
      i[e] = a ? Ga(t * n.devicePixelRatio) : t
    }
    return i
  })
}

function Ga(e) {
  let t = 10 ** (gi() ? 0 : 3);
  return Math.floor(e * t) / t
}

function Ka(e, t = 4e3) {
  return Ti((n, r) => {
    let i = r.document,
      a = i.body,
      o = a.style;
    o.width = `${t}px`, o.webkitTextSizeAdjust = o.textSizeAdjust = `none`, ni() ? a.style.zoom = `${1/r.devicePixelRatio}` : O() && (a.style.zoom = `reset`);
    let s = i.createElement(`div`);
    return s.textContent = [...Array(t / 20 << 0)].map(() => `word`).join(` `), a.appendChild(s), e(i, a, r)
  }, `<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">`)
}

function qa() {
  return navigator.pdfViewerEnabled
}

function Ja() {
  let e = new Float32Array(1),
    t = new Uint8Array(e.buffer);
  return e[0] = 1 / 0, e[0] -= e[0], t[3]
}

function Ya() {
  let {
    ApplePaySession: e
  } = window;
  if (typeof(e == null ? void 0 : e.canMakePayments) != `function`) return -1;
  if (Xa()) return -3;
  try {
    return +!!e.canMakePayments()
  } catch (e) {
    return Za(e)
  }
}
var Xa = Oi;

function Za(e) {
  if (e instanceof Error && e.name === `InvalidAccessError` && /\bfrom\b.*\binsecure\b/i.test(e.message)) return -2;
  throw e
}

function Qa() {
  let e = document.createElement(`a`),
    t = e.attributionSourceId ?? e.attributionsourceid;
  return t === void 0 ? void 0 : String(t)
}
var $a = -1,
  eo = -2,
  to = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
  no = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  ro = [`FRAGMENT_SHADER`, `VERTEX_SHADER`],
  io = [`LOW_FLOAT`, `MEDIUM_FLOAT`, `HIGH_FLOAT`, `LOW_INT`, `MEDIUM_INT`, `HIGH_INT`],
  ao = `WEBGL_debug_renderer_info`,
  oo = `WEBGL_polygon_mode`;

function so({
  cache: e
}) {
  var t, n, r, i, a, o;
  let s = lo(e);
  if (!s) return $a;
  if (!go(s)) return eo;
  let c = mo() ? null : s.getExtension(ao);
  return {
    version: ((t = s.getParameter(s.VERSION)) == null ? void 0 : t.toString()) || ``,
    vendor: ((n = s.getParameter(s.VENDOR)) == null ? void 0 : n.toString()) || ``,
    vendorUnmasked: c ? (r = s.getParameter(c.UNMASKED_VENDOR_WEBGL)) == null ? void 0 : r.toString() : ``,
    renderer: ((i = s.getParameter(s.RENDERER)) == null ? void 0 : i.toString()) || ``,
    rendererUnmasked: c ? (a = s.getParameter(c.UNMASKED_RENDERER_WEBGL)) == null ? void 0 : a.toString() : ``,
    shadingLanguageVersion: ((o = s.getParameter(s.SHADING_LANGUAGE_VERSION)) == null ? void 0 : o.toString()) || ``
  }
}

function co({
  cache: e
}) {
  let t = lo(e);
  if (!t) return $a;
  if (!go(t)) return eo;
  let n = t.getSupportedExtensions(),
    r = t.getContextAttributes(),
    i = [],
    a = [],
    o = [],
    s = [],
    c = [];
  if (r)
    for (let e of Object.keys(r)) a.push(`${e}=${r[e]}`);
  let l = fo(t);
  for (let e of l) {
    let n = t[e];
    o.push(`${e}=${n}${to.has(n)?`=${t.getParameter(n)}`:``}`)
  }
  if (n)
    for (let e of n) {
      if (e === ao && mo() || e === oo && ho()) continue;
      let n = t.getExtension(e);
      if (!n) {
        i.push(e);
        continue
      }
      for (let e of fo(n)) {
        let r = n[e];
        s.push(`${e}=${r}${no.has(r)?`=${t.getParameter(r)}`:``}`)
      }
    }
  for (let e of ro)
    for (let n of io) {
      let r = uo(t, e, n);
      c.push(`${e}.${n}=${r.join(`,`)}`)
    }
  return s.sort(), o.sort(), {
    contextAttributes: a,
    parameters: o,
    shaderPrecisions: c,
    extensions: n,
    extensionParameters: s,
    unsupportedExtensions: i
  }
}

function lo(e) {
  if (e.webgl) return e.webgl.context;
  let t = document.createElement(`canvas`),
    n;
  t.addEventListener(`webglCreateContextError`, () => n = void 0);
  for (let e of [`webgl`, `experimental-webgl`]) {
    try {
      n = t.getContext(e)
    } catch {}
    if (n) break
  }
  return e.webgl = {
    context: n
  }, n
}

function uo(e, t, n) {
  let r = e.getShaderPrecisionFormat(e[t], e[n]);
  return r ? [r.rangeMin, r.rangeMax, r.precision] : []
}

function fo(e) {
  return Object.keys(e.__proto__).filter(po)
}

function po(e) {
  return typeof e == `string` && !e.match(/[^A-Z0-9_x]/)
}

function mo() {
  return ai()
}

function ho() {
  return ni() || O()
}

function go(e) {
  return typeof e.getParameter == `function`
}

function _o() {
  if (!(gi() || O())) return -2;
  if (!window.AudioContext) return -1;
  let e = new AudioContext().baseLatency;
  return e == null ? -1 : isFinite(e) ? e : -3
}

function vo() {
  if (!window.Intl) return -1;
  let e = window.Intl.DateTimeFormat;
  if (!e) return -2;
  let t = e().resolvedOptions().locale;
  return !t && t !== `` ? -3 : t
}

function yo(e) {
  return /not/i.test(e)
}
async function bo() {
  let e = navigator.userAgentData;
  if (!e) return;
  let t = e.brands.filter(({
      brand: e
    }) => !yo(e)).map(({
      brand: e
    }) => e),
    n = {
      brands: t.length > 1 ? t.filter(e => e !== `Chromium`) : t,
      mobile: e.mobile,
      platform: e.platform
    };
  if (e.getHighEntropyValues) try {
    let t = await e.getHighEntropyValues([`architecture`, `bitness`, `model`, `platformVersion`]);
    n.architecture = t.architecture, n.bitness = t.bitness, n.model = t.model, n.platformVersion = t.platformVersion
  } catch (e) {
    if (e instanceof DOMException && e.name === `NotAllowedError`) n.highEntropyStatus = `not_allowed`;
    else throw e
  }
  return n
}
var xo = {
  userAgentData: bo,
  fonts: Ni,
  domBlockers: xa,
  fontPreferences: Wa,
  audio: vi,
  screenFrame: ia,
  canvas: Fi,
  osCpu: Ki,
  languages: qi,
  colorDepth: Ji,
  deviceMemory: Yi,
  screenResolution: Xi,
  hardwareConcurrency: sa,
  timezone: la,
  sessionStorage: da,
  localStorage: fa,
  indexedDB: pa,
  openDatabase: ma,
  cpuClass: ha,
  platform: ga,
  plugins: Pi,
  touchSupport: Gi,
  vendor: _a,
  vendorFlavors: va,
  cookiesEnabled: ya,
  colorGamut: Ea,
  invertedColors: Da,
  forcedColors: ka,
  monochrome: Ma,
  contrast: Na,
  reducedMotion: Fa,
  reducedTransparency: La,
  hdr: za,
  math: Va,
  pdfViewerEnabled: qa,
  architecture: Ja,
  applePay: Ya,
  privateClickMeasurement: Qa,
  audioBaseLatency: _o,
  dateTimeLocale: vo,
  webGlBasics: so,
  webGlExtensions: co
};

function So(e) {
  return $r(xo, e, [])
}
var Co = `$ if upgrade to Pro: https://fingerprint.com/github/?utm_source=oss&utm_medium=referral&utm_campaign=confidence_score`;

function wo(e) {
  let t = To(e),
    n = Eo(t);
  return {
    score: t,
    comment: Co.replace(/\$/g, `${n}`)
  }
}

function To(e) {
  if (gi()) return .4;
  if (O()) return ri() && !(fi() && ii()) ? .5 : .3;
  let t = `value` in e.platform ? e.platform.value : ``;
  return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
}

function Eo(e) {
  return Ir(.99 + .01 * e, 1e-4)
}

function Do(e) {
  let t = ``;
  for (let n of Object.keys(e).sort()) {
    let r = e[n],
      i = `error` in r ? `error` : JSON.stringify(r.value);
    t += `${t?`|`:``}${n.replace(/([:|\\])/g,`\\$1`)}:${i}`
  }
  return t
}

function Oo(e) {
  return JSON.stringify(e, (e, t) => t instanceof Error ? Yr(t) : t, 2)
}

function ko(e) {
  return Jr(Do(e))
}

function Ao(e) {
  let t;
  return {
    get visitorId() {
      return t === void 0 && (t = ko(this.components)), t
    },
    set visitorId(e) {
      t = e
    },
    confidence: wo(e),
    components: e,
    version: Tr
  }
}

function jo(e = 50) {
  return Or(e, e * 2)
}

function Mo(e, t) {
  let n = Date.now();
  return {
    async get(r) {
      let i = Date.now(),
        a = await e(),
        o = Ao(a);
      return (t || r != null && r.debug) && console.log(`Copy the text below to get the debug data:

\`\`\`
version: ${o.version}
userAgent: ${navigator.userAgent}
timeBetweenLoadAndGet: ${i-n}
visitorId: ${o.visitorId}
components: ${Oo(a)}
\`\`\``), o
    }
  }
}

function No() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    let e = new XMLHttpRequest;
    e.open(`get`, `https://m1.openfpcdn.io/fingerprintjs/v${Tr}/npm-monitoring`, !0), e.send()
  } catch (e) {
    console.error(e)
  }
}
async function Po(e = {}) {
  let {
    delayFallback: t,
    debug: n,
    monitoring: r = !0
  } = e;
  return r && No(), await jo(t), Mo(So({
    cache: {},
    debug: n
  }), n)
}
var Fo = {
    load: Po,
    hashComponents: ko,
    componentsToDebugString: Oo
  },
  Io = null;
async function Lo() {
  return Io || (Io = Fo.load()), Io
}
async function Ro() {
  return zo().then(e => e.visitorId)
}
async function zo() {
  let e = await (await Lo()).get(),
    t = e.components,
    n = wt(),
    r = navigator.userAgent.toLowerCase(),
    i = r.includes(`iphone`),
    a = r.includes(`macintosh`),
    o = i || a,
    s = r.includes(`android`);
  if (o) t = e.components;
  else if (n === `Chrome`) {
    let {
      languages: n,
      ...r
    } = e.components;
    t = r
  } else if (n === `Firefox`) {
    let {
      languages: n,
      dateTimeLocale: r,
      ...i
    } = e.components;
    t = i
  } else if (n === `Brave`) {
    let {
      fonts: n,
      audio: r,
      canvas: i,
      hardwareConcurrency: a,
      plugins: o,
      deviceMemory: s,
      languages: c,
      dateTimeLocale: l,
      ...u
    } = e.components;
    t = u
  } else {
    let {
      languages: n,
      ...r
    } = e.components;
    t = r
  }
  if ((n === `Safari` || s) && (t = {
      userAgent: {
        value: navigator.userAgent,
        duration: 0
      },
      ...t
    }), n === `Safari` && (t = {
      canvas2d: {
        value: await Ot(),
        duration: 0
      },
      canvasWebgl: {
        value: await Kt(),
        duration: 0
      },
      ...t
    }), n === `Firefox`) {
    var c;
    t = {
      ...t,
      fonts: {
        value: [(c = t.fonts) == null ? void 0 : c.value, await Vt()],
        duration: t.fonts.duration
      }
    }
  }
  s && (t = {
    canvas2d: {
      value: await Ot(),
      duration: 0
    },
    ...t
  });
  let l = Fo.hashComponents(t),
    u = l.length,
    d = u >> 2 | 2;
  return {
    visitorId: l.slice(0, d) + (u * 5).toString(16) + l.slice(d + (u >> 4)),
    components: t
  }
}

function Bo() {
  return wr.start({
    apiKey: te,
    endpoints: [`https://wplace.live/7eskSe93usV8ENxB/?region=eu`],
    region: `eu`
  })
}
var Vo = new WeakMap,
  Ho = new WeakMap,
  Uo = new WeakMap,
  Wo = new WeakMap,
  Go = new WeakMap,
  Ko = new WeakMap,
  qo = new WeakMap,
  Jo = new WeakMap,
  Yo = new WeakMap,
  Xo = new WeakMap,
  Zo = new WeakMap,
  Qo = new WeakMap,
  $o = new WeakMap,
  es = new WeakMap,
  ts = new WeakMap,
  ns = new WeakMap,
  rs = new WeakMap,
  j = new class {
    get playerSettingsOpen() {
      return o(i(Vo, this))
    }
    set playerSettingsOpen(e) {
      t(i(Vo, this), e, !0)
    }
    get playerSettingsTab() {
      return o(i(Ho, this))
    }
    set playerSettingsTab(e) {
      t(i(Ho, this), e, !0)
    }
    get dropletsDialogOpen() {
      return o(i(Uo, this))
    }
    set dropletsDialogOpen(e) {
      t(i(Uo, this), e, !0)
    }
    get prismDialogOpen() {
      return o(i(Wo, this))
    }
    set prismDialogOpen(e) {
      t(i(Wo, this), e, !0)
    }
    get accountConflictDialogOpen() {
      return o(i(Go, this))
    }
    set accountConflictDialogOpen(e) {
      t(i(Go, this), e, !0)
    }
    get pendingHistoryDialogOpen() {
      return o(i(Ko, this))
    }
    set pendingHistoryDialogOpen(e) {
      t(i(Ko, this), e, !0)
    }
    get paymentHistoryDialogOpen() {
      return o(i(qo, this))
    }
    set paymentHistoryDialogOpen(e) {
      t(i(qo, this), e, !0)
    }
    get storeDialogOpen() {
      return o(i(Jo, this))
    }
    set storeDialogOpen(e) {
      t(i(Jo, this), e, !0)
    }
    get storeTabIndex() {
      return o(i(Yo, this))
    }
    set storeTabIndex(e) {
      t(i(Yo, this), e, !0)
    }
    get muted() {
      return o(i(Xo, this))
    }
    set muted(e) {
      t(i(Xo, this), e, !0)
    }
    get haptics() {
      return o(i(Zo, this))
    }
    set haptics(e) {
      t(i(Zo, this), e, !0)
    }
    get language() {
      return o(i(Qo, this))
    }
    set language(e) {
      t(i(Qo, this), e, !0)
    }
    get map() {
      return o(i($o, this))
    }
    set map(e) {
      t(i($o, this), e)
    }
    get automatedClicks() {
      return o(i(es, this))
    }
    set automatedClicks(e) {
      t(i(es, this), e, !0)
    }
    get theme() {
      return o(i(ts, this))
    }
    set theme(e) {
      t(i(ts, this), e, !0), f(e)
    }
    get now() {
      return o(i(ns, this))
    }
    get captcha() {
      return as ? o(i(rs, this)) : {
        token: `turnstile-disabled`,
        time: Date.now()
      }
    }
    set captcha(e) {
      t(i(rs, this), e, !0)
    }
    constructor() {
      a(this, Vo, n(!1)), a(this, Ho, n(`interface`)), a(this, Uo, n(!1)), a(this, Wo, n(!1)), a(this, Go, n(!1)), a(this, Ko, n(!1)), a(this, qo, n(!1)), a(this, Jo, n(!1)), a(this, Yo, n(0)), a(this, Xo, n(!1)), a(this, Zo, n(!0)), a(this, Qo, n(r(is()))), a(this, $o, n(null)), a(this, es, n(!1)), a(this, ts, n(`custom-winter`)), a(this, ns, n(r(Date.now()))), a(this, rs, n(void 0)), setInterval(() => {
        t(i(ns, this), Date.now(), !0)
      }, 500), this.theme = d()
    }
  };

function is() {
  if (navigator.languages && navigator.languages.length > 0) {
    let e = navigator.languages.find(e => e.length === 2);
    if (e) return e
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || `en`).substring(0, 2)
}
var as = ne.toLowerCase() !== `false`,
  os = `
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
async function ss() {
  try {
    let e = await fetch(`${ee}/anticheat/pow/challenge`, {
      credentials: `include`
    });
    if (!e.ok) return null;
    let t = await e.json(),
      n = await cs(t.prefix, t.difficulty);
    return n ? {
      ...t,
      nonce: n
    } : null
  } catch {
    return null
  }
}
async function cs(e, t) {
  return new Promise(n => {
    let r = new Blob([os], {
        type: `application/javascript`
      }),
      i = URL.createObjectURL(r),
      a = new Worker(i),
      o = setTimeout(() => {
        a.terminate(), URL.revokeObjectURL(i), n(null)
      }, 12e4);
    a.onmessage = e => {
      clearTimeout(o), a.terminate(), URL.revokeObjectURL(i), e.data.error ? n(null) : n(e.data.nonce)
    }, a.onerror = () => {
      clearTimeout(o), a.terminate(), URL.revokeObjectURL(i), n(null)
    }, a.postMessage({
      prefix: e,
      difficulty: t
    })
  })
}
var ls = 3,
  us = new WeakMap,
  ds = new WeakMap,
  M = new class {
    constructor() {
      a(this, us, n(null)), a(this, ds, n(0))
    }
    get current() {
      return o(i(us, this))
    }
    set current(e) {
      t(i(us, this), e, !0)
    }
    get errorCount() {
      return o(i(ds, this))
    }
    set errorCount(e) {
      t(i(ds, this), e, !0)
    }
  };
async function fs(e) {
  if (e === 1) return ps();
  if (e === 2) {
    let e = await gs();
    return e ? ms(`turnstile`, e) : !1
  }
  if (e === 3) {
    let e = await _s();
    return e ? ms(`hcaptcha`, e) : !1
  }
  return e === 4 && ys()
}
async function ps() {
  for (let e = 0; e < ls; e++) try {
    let e = await ss();
    if (!e) continue;
    return await z.verifyChallenge({
      type: `pow`,
      challengeId: e.challengeId,
      nonce: e.nonce
    }), !0
  } catch {}
  return !1
}
async function ms(e, t) {
  try {
    let n = await z.postCaptchaSession({
      provider: e,
      token: t
    });
    return await z.verifyChallenge({
      type: `captcha`,
      sessionId: n.sessionId
    }), !0
  } catch {
    return !1
  }
}
var hs = {};

function gs() {
  return vs(2)
}

function _s() {
  return vs(3)
}

function vs(e) {
  let t = hs[e];
  if (t) return t;
  let n = new Promise(t => {
    M.errorCount = 0, M.current = {
      tier: e,
      resolve: n => {
        delete hs[e], t(n)
      }
    }
  });
  return hs[e] = n, n
}

function ys() {
  let e = hs[4];
  if (e) return e;
  let t = new Promise(e => {
    M.errorCount = 0, M.current = {
      tier: 4,
      resolve: t => {
        delete hs[4], e(t)
      }
    }
  });
  return hs[4] = t, t
}

function bs(e) {
  let t = M.current;
  !t || t.tier === 4 || (t.resolve(e), M.current = null)
}

function xs() {
  let e = M.current;
  !e || e.tier === 4 || (M.errorCount += 1, M.errorCount >= ls && (e.resolve(void 0), M.current = null))
}

function Ss() {
  let e = M.current;
  !e || e.tier !== 4 || (e.resolve(!0), M.current = null)
}

function Cs() {
  let e = M.current;
  e && (e.tier === 4 ? e.resolve(!1) : e.resolve(void 0), M.current = null)
}
var ws = re(`DeviceAttest`);

function Ts() {
  return ie.isNativePlatform() && ie.isPluginAvailable(`DeviceAttest`)
}
async function Es(e) {
  let t = await crypto.subtle.digest(`SHA-256`, new TextEncoder().encode(e));
  return [...new Uint8Array(t)].map(e => e.toString(16).padStart(2, `0`)).join(``)
}
async function Ds(e, t, n) {
  return `${e.toUpperCase()} ${t} ${await Es(n)}`
}
async function Os(e) {
  return ws.attest({
    challenge: e
  })
}
async function ks(e) {
  return ws.commitKey({
    keyId: e
  })
}
async function As(e) {
  if (Ts()) return ws.assert({
    clientData: e
  }).catch(e => {
    if ((e == null ? void 0 : e.code) !== `NO_KEY`) throw e
  })
}
async function js() {
  if (Ts()) return ws.deviceToken().then(({
    token: e
  }) => e).catch(() => void 0)
}
async function Ms() {
  return Ts() ? ws.isSupported().catch(() => ({
    supported: !1,
    hasKey: !1
  })) : {
    supported: !1,
    hasKey: !1
  }
}
var Ns = new Set([`/paint`, `/payment/appstore/account-token`, `/payment/appstore/verify`]);
async function Ps(e, t, n) {
  if (!Ns.has(t) || !Ts() || n != null && typeof n != `string`) return;
  let r = await Ds(e, t, n ?? ``),
    i = () => ws.assert({
      clientData: r
    });
  try {
    let {
      assertion: e,
      keyId: t
    } = await i().catch(e => {
      if ((e == null ? void 0 : e.code) === `NO_KEY`) throw e;
      return i()
    });
    return {
      "x-device-key-id": t,
      "x-device-assertion": e
    }
  } catch {
    return
  }
}
var N = function(e) {
    return e[e.CONTINUE = 100] = `CONTINUE`, e[e.SWITCHING_PROTOCOLS = 101] = `SWITCHING_PROTOCOLS`, e[e.PROCESSING = 102] = `PROCESSING`, e[e.EARLY_HINTS = 103] = `EARLY_HINTS`, e[e.OK = 200] = `OK`, e[e.CREATED = 201] = `CREATED`, e[e.ACCEPTED = 202] = `ACCEPTED`, e[e.NON_AUTHORITATIVE_INFORMATION = 203] = `NON_AUTHORITATIVE_INFORMATION`, e[e.NO_CONTENT = 204] = `NO_CONTENT`, e[e.RESET_CONTENT = 205] = `RESET_CONTENT`, e[e.PARTIAL_CONTENT = 206] = `PARTIAL_CONTENT`, e[e.MULTI_STATUS = 207] = `MULTI_STATUS`, e[e.ALREADY_REPORTED = 208] = `ALREADY_REPORTED`, e[e.IM_USED = 226] = `IM_USED`, e[e.MULTIPLE_CHOICES = 300] = `MULTIPLE_CHOICES`, e[e.MOVED_PERMANENTLY = 301] = `MOVED_PERMANENTLY`, e[e.MOVED_TEMPORARILY = 302] = `MOVED_TEMPORARILY`, e[e.FOUND = 302] = `FOUND`, e[e.SEE_OTHER = 303] = `SEE_OTHER`, e[e.NOT_MODIFIED = 304] = `NOT_MODIFIED`, e[e.USE_PROXY = 305] = `USE_PROXY`, e[e.SWITCH_PROXY = 306] = `SWITCH_PROXY`, e[e.TEMPORARY_REDIRECT = 307] = `TEMPORARY_REDIRECT`, e[e.PERMANENT_REDIRECT = 308] = `PERMANENT_REDIRECT`, e[e.BAD_REQUEST = 400] = `BAD_REQUEST`, e[e.UNAUTHORIZED = 401] = `UNAUTHORIZED`, e[e.PAYMENT_REQUIRED = 402] = `PAYMENT_REQUIRED`, e[e.FORBIDDEN = 403] = `FORBIDDEN`, e[e.NOT_FOUND = 404] = `NOT_FOUND`, e[e.METHOD_NOT_ALLOWED = 405] = `METHOD_NOT_ALLOWED`, e[e.NOT_ACCEPTABLE = 406] = `NOT_ACCEPTABLE`, e[e.PROXY_AUTHENTICATION_REQUIRED = 407] = `PROXY_AUTHENTICATION_REQUIRED`, e[e.REQUEST_TIMEOUT = 408] = `REQUEST_TIMEOUT`, e[e.CONFLICT = 409] = `CONFLICT`, e[e.GONE = 410] = `GONE`, e[e.LENGTH_REQUIRED = 411] = `LENGTH_REQUIRED`, e[e.PRECONDITION_FAILED = 412] = `PRECONDITION_FAILED`, e[e.REQUEST_TOO_LONG = 413] = `REQUEST_TOO_LONG`, e[e.CONTENT_TOO_LARGE = 413] = `CONTENT_TOO_LARGE`, e[e.REQUEST_URI_TOO_LONG = 414] = `REQUEST_URI_TOO_LONG`, e[e.URI_TOO_LONG = 414] = `URI_TOO_LONG`, e[e.UNSUPPORTED_MEDIA_TYPE = 415] = `UNSUPPORTED_MEDIA_TYPE`, e[e.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = `REQUESTED_RANGE_NOT_SATISFIABLE`, e[e.RANGE_NOT_SATISFIABLE = 416] = `RANGE_NOT_SATISFIABLE`, e[e.EXPECTATION_FAILED = 417] = `EXPECTATION_FAILED`, e[e.IM_A_TEAPOT = 418] = `IM_A_TEAPOT`, e[e.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = `INSUFFICIENT_SPACE_ON_RESOURCE`, e[e.MISDIRECTED_REQUEST = 421] = `MISDIRECTED_REQUEST`, e[e.UNPROCESSABLE_ENTITY = 422] = `UNPROCESSABLE_ENTITY`, e[e.UNPROCESSABLE_CONTENT = 422] = `UNPROCESSABLE_CONTENT`, e[e.LOCKED = 423] = `LOCKED`, e[e.FAILED_DEPENDENCY = 424] = `FAILED_DEPENDENCY`, e[e.TOO_EARLY = 425] = `TOO_EARLY`, e[e.UPGRADE_REQUIRED = 426] = `UPGRADE_REQUIRED`, e[e.PRECONDITION_REQUIRED = 428] = `PRECONDITION_REQUIRED`, e[e.TOO_MANY_REQUESTS = 429] = `TOO_MANY_REQUESTS`, e[e.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = `REQUEST_HEADER_FIELDS_TOO_LARGE`, e[e.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = `UNAVAILABLE_FOR_LEGAL_REASONS`, e[e.INTERNAL_SERVER_ERROR = 500] = `INTERNAL_SERVER_ERROR`, e[e.NOT_IMPLEMENTED = 501] = `NOT_IMPLEMENTED`, e[e.BAD_GATEWAY = 502] = `BAD_GATEWAY`, e[e.SERVICE_UNAVAILABLE = 503] = `SERVICE_UNAVAILABLE`, e[e.GATEWAY_TIMEOUT = 504] = `GATEWAY_TIMEOUT`, e[e.HTTP_VERSION_NOT_SUPPORTED = 505] = `HTTP_VERSION_NOT_SUPPORTED`, e[e.VARIANT_ALSO_NEGOTIATES = 506] = `VARIANT_ALSO_NEGOTIATES`, e[e.INSUFFICIENT_STORAGE = 507] = `INSUFFICIENT_STORAGE`, e[e.LOOP_DETECTED = 508] = `LOOP_DETECTED`, e[e.NOT_EXTENDED = 510] = `NOT_EXTENDED`, e[e.NETWORK_AUTHENTICATION_REQUIRED = 511] = `NETWORK_AUTHENTICATION_REQUIRED`, e[e.AWS_ELB_000 = 0] = `AWS_ELB_000`, e[e.THIS_IS_FINE = 218] = `THIS_IS_FINE`, e[e.PAGE_EXPIRED = 419] = `PAGE_EXPIRED`, e[e.METHOD_FAILURE = 420] = `METHOD_FAILURE`, e[e.ENHANCE_YOUR_CALM = 420] = `ENHANCE_YOUR_CALM`, e[e.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = `REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY`, e[e.SHOPIFY_SECURITY_REJECTION = 430] = `SHOPIFY_SECURITY_REJECTION`, e[e.LOGIN_TIME_OUT = 440] = `LOGIN_TIME_OUT`, e[e.NO_RESPONSE = 444] = `NO_RESPONSE`, e[e.RETRY_WITH = 449] = `RETRY_WITH`, e[e.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = `BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS`, e[e.REDIRECT_IIS = 451] = `REDIRECT_IIS`, e[e.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = `CLIENT_CLOSED_CONNECTION_AWS_ELB`, e[e.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = `X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB`, e[e.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = `INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB`, e[e.REQUEST_HEADER_TOO_LARGE = 494] = `REQUEST_HEADER_TOO_LARGE`, e[e.SSL_CERTIFICATE_ERROR = 495] = `SSL_CERTIFICATE_ERROR`, e[e.SSL_CERTIFICATE_REQUIRED = 496] = `SSL_CERTIFICATE_REQUIRED`, e[e.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = `HTTP_REQUEST_SENT_TO_HTTPS_PORT`, e[e.INVALID_TOKEN = 498] = `INVALID_TOKEN`, e[e.CLIENT_CLOSED_REQUEST = 499] = `CLIENT_CLOSED_REQUEST`, e[e.TOKEN_REQUIRED = 499] = `TOKEN_REQUIRED`, e[e.BANDWIDTH_LIMIT_EXCEEDED = 509] = `BANDWIDTH_LIMIT_EXCEEDED`, e[e.RESOURCE_LIMIT_IS_REACHED = 508] = `RESOURCE_LIMIT_IS_REACHED`, e[e.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = `WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR`, e[e.WEB_SERVER_IS_DOWN = 521] = `WEB_SERVER_IS_DOWN`, e[e.CONNECTION_TIMED_OUT = 522] = `CONNECTION_TIMED_OUT`, e[e.ORIGIN_IS_UNREACHABLE = 523] = `ORIGIN_IS_UNREACHABLE`, e[e.A_TIMEOUT_OCCURRED = 524] = `A_TIMEOUT_OCCURRED`, e[e.SSL_HANDSHAKE_FAILED = 525] = `SSL_HANDSHAKE_FAILED`, e[e.INVALID_SSL_CERTIFICATE = 526] = `INVALID_SSL_CERTIFICATE`, e[e.RAILGUN_ERROR = 527] = `RAILGUN_ERROR`, e[e.SITE_IS_OVERLOADED = 529] = `SITE_IS_OVERLOADED`, e[e.ORIGIN_UNAVAILABLE = 530] = `ORIGIN_UNAVAILABLE`, e[e.ORIGIN_DNS_ERROR = 530] = `ORIGIN_DNS_ERROR`, e[e.SITE_IS_FROZEN = 530] = `SITE_IS_FROZEN`, e[e.TEMPORARILY_DISABLED = 540] = `TEMPORARILY_DISABLED`, e[e.UNAUTHORIZED_AWS_ELB = 561] = `UNAUTHORIZED_AWS_ELB`, e[e.NETWORK_READ_TIMEOUT_ERROR = 598] = `NETWORK_READ_TIMEOUT_ERROR`, e[e.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = `NETWORK_CONNECT_TIMEOUT_ERROR`, e[e.UNEXPECTED_TOKEN = 783] = `UNEXPECTED_TOKEN`, e[e.REQUEST_DENIED = 999] = `REQUEST_DENIED`, e
  }({}),
  P = class extends Error {},
  Fs = class extends Error {},
  Is = class extends Error {},
  Ls = {
    maintenance: () => m.protection_message_maintenance(),
    restoration: () => m.protection_message_restoration(),
    event: () => m.protection_message_event(),
    community: () => m.protection_message_community(),
    memorial: () => m.protection_message_memorial(),
    historical: () => m.protection_message_historical(),
    contest: () => m.protection_message_contest(),
    collaboration: () => m.protection_message_collaboration(),
    review: () => m.protection_message_review(),
    safety: () => m.protection_message_safety(),
    reserved: () => m.protection_message_reserved(),
    temporary: () => m.protection_message_temporary()
  };

function Rs(e) {
  return Object.prototype.hasOwnProperty.call(Ls, e) ? Ls[e]() : Ls.temporary()
}

function zs(e, t) {
  return t >= Date.parse(e.endsAt) ? `ended` : e.paused ? `paused` : t < Date.parse(e.startsAt) ? `scheduled` : `active`
}
var Bs = {
  scheduled: () => m.protection_scheduled(),
  active: () => m.protection_active(),
  paused: () => m.protection_paused(),
  ended: () => m.protection_ended()
};

function Vs(e) {
  if (!e.trim()) return [];
  let t = e.trim().split(/[\s,;]+/);
  return t.length > 1e3 || t.some(e => !/^[1-9]\d*$/.test(e) || Number(e) > 2147483647) ? null : [...new Set(t.map(Number))].sort((e, t) => e - t)
}

function Hs(e) {
  let t = new Date(e);
  return new Date(t.getTime() - t.getTimezoneOffset() * 6e4).toISOString().slice(0, 16)
}

function Us(e, t) {
  return (t == null ? void 0 : t.aborted) === !0 || typeof DOMException < `u` && e instanceof DOMException && e.name === `AbortError`
}
var Ws = 6e3,
  Gs = new WeakMap,
  Ks = new WeakMap,
  qs = class {
    get online() {
      return o(i(Gs, this))
    }
    set online(e) {
      t(i(Gs, this), e, !0)
    }
    get serverTimeOffsetMs() {
      return o(i(Ks, this))
    }
    set serverTimeOffsetMs(e) {
      t(i(Ks, this), e, !0)
    }
    constructor(e) {
      s(this, `url`, void 0), a(this, Gs, n(!0)), s(this, `probe`, null), a(this, Ks, n(null)), this.url = e
    }
    checkConnection() {
      if (this.probe) return this.probe;
      let e = new AbortController,
        t = setTimeout(() => e.abort(), Ws);
      return this.probe = fetch(`${this.url}/health`, {
        cache: `no-store`,
        signal: e.signal
      }).then(() => !0).catch(() => !1).then(e => (clearTimeout(t), this.online = e, this.probe = null, e)), this.probe
    }
    hasServerTimeEstimate() {
      return this.serverTimeOffsetMs !== null
    }
    getEstimatedServerNowMs() {
      let e = Date.now();
      return this.serverTimeOffsetMs === null ? e - 6e4 : e + this.serverTimeOffsetMs
    }
    clampWaybackTimestamp(e) {
      if (!Number.isFinite(e)) return 0;
      let t = Math.trunc(e);
      if (t <= 0) return 0;
      let n = Math.trunc(this.getEstimatedServerNowMs());
      return t > n ? n : t
    }
    updateServerTimeEstimate(e) {
      let t = e.headers.get(`date`);
      if (!t) return;
      let n = new Date(t).getTime();
      Number.isFinite(n) && (this.serverTimeOffsetMs = n - Date.now())
    }
    async verifyAnticheat(e) {
      if ((await this.request(`/anticheat/verify`, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify({
            sealedResults: e.base64()
          })
        })).status !== N.OK) throw Error(m.unexpected_server_error())
    }
    async guardedFetch(e, t) {
      try {
        let n = await fetch(`${this.url}${e}`, t);
        return pe(n), this.online = !0, this.updateServerTimeEstimate(n), n
      } catch (e) {
        throw Us(e, t == null ? void 0 : t.signal) ? e : (console.error(`Fetch error:`, e), this.checkConnection(), Error(m.cant_reach_the_server()))
      }
    }
    async request(e, t) {
      var n, r;
      t = {
        credentials: `include`,
        ...t
      };
      let i = e.split(`?`)[0],
        a = async () => {
          let e = await Ps(t.method ?? `GET`, i, t.body);
          if (!e) return t;
          let n = new Headers(t.headers);
          for (let [t, r] of Object.entries(e)) n.set(t, r);
          return {
            ...t,
            headers: n
          }
        }, o = await this.guardedFetch(e, await a());
      if (o.headers.get(`x-device-reattest`) && u(() => import(`./BItM99zw.js`).then(e => e.n).then(e => e.IOSAppServices.reattest()), __vite__mapDeps([0, 1, 2, 3, 4]), import.meta.url), o.status === N.FORBIDDEN && o.headers.get(`x-block-reason`) === `tor`) throw Error(m.tor_blocked());
      if (o.status === N.FORBIDDEN && o.headers.get(`x-block-reason`) === `integrity`) throw Error(m.request_integrity_blocked());
      let s = ((n = o.headers.get(`cf-mitigated`)) == null ? void 0 : n.toLowerCase()) === `challenge`;
      if (o.status === 403 && s) {
        if ($.setCfLikelyAutomated(!0), !await gs()) throw Error(m.challenge_verification_not_completed());
        o = await this.guardedFetch(e, await a())
      }
      if ((t == null ? void 0 : t.throwOnStatus) ?? !0) {
        if (o.status === N.TOO_MANY_REQUESTS) throw new P(m.you_or_someone_in_your_network_is_making_a_lot_of_requests_to_the_server());
        if (o.status === N.REQUEST_TIMEOUT) throw Error(m.request_timeout());
        if (o.status === N.SERVICE_UNAVAILABLE) throw Error(m.service_unavailable())
      }
      if (o.status === N.FORBIDDEN && (r = o.headers.get(`content-type`)) != null && r.includes(`application/json`)) {
        let e = await o.clone().json().catch(() => null);
        if ((e == null ? void 0 : e.error) === `pixel-protected`) throw Error(Rs(e.messageKey))
      }
      return o
    }
  },
  F = class extends Error {
    constructor(e, t) {
      super(e), s(this, `message`, void 0), s(this, `status`, void 0), this.message = e, this.status = t
    }
  },
  Js = class extends Error {};

function Ys(e) {
  return class extends e {
    async me() {
      let e = await this.request(`/me`, {
        credentials: `include`,
        throwOnStatus: !1
      });
      if (e.status === N.OK) return await e.json();
      if (e.status !== N.UNAUTHORIZED) throw new F(m.unexpected_server_error(), e.status)
    }
    async meEmail() {
      let e = await this.request(`/me/email`, {
        credentials: `include`
      });
      if (e.status === N.OK) return (await e.json()).email
    }
    async logout() {
      let e = await this.request(`/auth/logout`, {
        method: `POST`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw Error(await e.text());
      return await e.json()
    }
    async getOtpCooldown() {
      let e = await this.request(`/anticheat/otp/cooldown`, {
        credentials: `include`
      });
      if (e.status !== N.OK) throw Error(m.unexpected_server_error());
      return await e.json()
    }
    async sendOtp(e) {
      let t = await this.request(`/anticheat/otp/send`, {
        method: `POST`,
        credentials: `include`,
        headers: {
          "Content-Type": `application/json`
        },
        body: JSON.stringify({
          phone: e
        }),
        throwOnStatus: !1
      });
      if (t.status === N.BAD_REQUEST) throw Error(m.invalid_phone_number());
      if (t.status === N.CONFLICT) throw Error(m.phone_already_used());
      if (t.status === N.FORBIDDEN) throw Error(m.not_allowed_to_verify());
      if (t.status === N.TOO_MANY_REQUESTS) throw Error(m.too_many_attempts());
      if (t.status === N.UNAVAILABLE_FOR_LEGAL_REASONS) throw Error(m.phone_region_not_supported());
      if (t.status === N.LOCKED) throw Error(m.unsubscribed_from_sms());
      if (t.status === N.UNPROCESSABLE_ENTITY) throw Error(m.phone_not_supported());
      if (t.status === N.NOT_ACCEPTABLE) throw Error(m.vpn_not_allowed());
      if (t.status === N.PRECONDITION_FAILED) throw Error(m.country_mismatch());
      if (t.status !== N.OK) throw Error(m.unexpected_server_error());
      return await t.json()
    }
    async verifyChallenge(e) {
      let t;
      switch (e.type) {
        case `pow`:
          t = {
            code: e.challengeId,
            nonce: e.nonce
          };
          break;
        case `captcha`:
          t = {
            code: e.sessionId
          };
          break;
        case `otp`:
          t = {
            code: e.code
          }
      }
      let n = await this.request(`/anticheat/challenge/verify`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(t),
        headers: {
          "x-fp": await Ro()
        }
      });
      if (e.type === `otp`) {
        if (n.status === N.GONE) throw Error(m.expired_code());
        if (n.status === N.BAD_REQUEST) throw Error(m.invalid_code());
        if (n.status === N.TOO_MANY_REQUESTS) throw Error(m.too_many_attempts());
        if (n.status !== N.OK) throw Error(m.unexpected_server_error())
      } else if (n.status === N.BAD_REQUEST) throw Error(m.invalid_challenge_response());
      else if (n.status !== N.OK) throw Error(m.unexpected_server_error())
    }
    async updateMe(e) {
      let t = await this.request(`/me/update`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status === N.BAD_REQUEST) {
        let e = await t.json(),
          n = (e == null ? void 0 : e.error) ?? ``;
        if (n === `invalid_name`) throw Error(m.invalid_name());
        if (n === `invalid_discord`) throw Error(m.invalid_discord());
        if (typeof n == `string` && n.startsWith(`name_change_cooldown:`)) {
          let e = parseInt(n.split(`:`)[1] ?? `0`, 10);
          throw Error(m.name_change_cooldown_days({
            days: e
          }))
        }
        throw Error(e == null ? void 0 : e.error)
      }
      if (t.status !== N.OK) throw Error(m.unexpected_server_error())
    }
    async deleteMe(e) {
      let t = await this.request(`/me`, {
        method: `DELETE`,
        credentials: `include`,
        body: JSON.stringify({
          confirmText: e
        })
      });
      if (t.status === N.BAD_REQUEST) throw Error(m.typed_username_does_not_match());
      if (t.status !== N.OK) throw Error(m.unexpected_server_error())
    }
    async favoriteLocation(e, t = 15) {
      let n = await this.request(`/favorite-location`, {
        method: `POST`,
        body: JSON.stringify({
          latitude: e[0],
          longitude: e[1],
          zoom: t
        }),
        credentials: `include`
      });
      if (n.status === N.FORBIDDEN) throw Error(m.operation_not_allowed_maybe_you_have_too_many_favorite_locations());
      if (n.status !== N.OK) throw Error(m.unexpected_server_error());
      return n.json()
    }
    async deleteFavoriteLocation(e) {
      if ((await this.request(`/favorite-location/delete`, {
          method: `POST`,
          body: JSON.stringify({
            id: e
          }),
          credentials: `include`
        })).status !== N.OK) throw Error(m.unexpected_server_error())
    }
    async updateFavoriteLocation(e, t) {
      let n = await this.request(`/favorite-location/update`, {
        method: `POST`,
        body: JSON.stringify({
          ...t,
          id: e,
          ...t.folderId === null ? {
            folderId: 0
          } : {}
        }),
        credentials: `include`
      });
      if (n.status === N.BAD_REQUEST) throw Error(m.favorite_invalid_details());
      if (n.status === N.NOT_FOUND) throw Error(m.favorite_not_found());
      if (n.status !== N.OK) throw Error(m.unexpected_server_error());
      return n.json()
    }
    async organizeFavorites(e) {
      let t = await this.request(`/favorite-location/organize`, {
        method: `POST`,
        body: JSON.stringify(e),
        credentials: `include`
      });
      if (t.status !== N.OK) throw Error(m.unexpected_server_error());
      return t.json()
    }
    async getMyProfilePictures() {
      let e = await this.request(`/me/profile-pictures`, {
        credentials: `include`
      });
      if (e.status !== N.OK) throw Error(m.unexpected_server_error());
      return e.json()
    }
    async changeProfilePicture(e) {
      if ((await this.request(`/me/profile-picture/change`, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify({
            pictureId: e
          })
        })).status !== N.OK) throw Error(m.unexpected_server_error())
    }
    async unlinkDiscord() {
      let e = await this.request(`/discord/unlink`, {
        method: `POST`,
        credentials: `include`
      });
      if (e.status !== N.NO_CONTENT) throw new F(m.unexpected_server_error(), e.status)
    }
    async deleteSessions() {
      let e = await this.request(`/me/sessions`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status)
    }
    async deleteAllUserSessions(e) {
      let t = await this.request(`/staff/dashboard/users/${e}/sessions`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status)
    }
    async getMySuspensionDetails() {
      let e = await this.request(`/me/suspension`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      let t = await e.json();
      return !(t != null && t.active) || !Array.isArray(t == null ? void 0 : t.punishments) ? null : {
        punishments: t.punishments.map(e => ({
          kind: (e == null ? void 0 : e.kind) === `ban` ? `ban` : `timeout`,
          reason: e == null ? void 0 : e.reason,
          timeoutUntil: typeof(e == null ? void 0 : e.timeoutUntil) == `string` ? e.timeoutUntil : void 0,
          reportedLatitude: typeof(e == null ? void 0 : e.reportedLatitude) == `number` ? e.reportedLatitude : void 0,
          reportedLongitude: typeof(e == null ? void 0 : e.reportedLongitude) == `number` ? e.reportedLongitude : void 0,
          zoom: typeof(e == null ? void 0 : e.zoom) == `number` ? e.zoom : void 0,
          appealSubmitted: (e == null ? void 0 : e.appealSubmitted) === !0,
          supportAppealId: typeof(e == null ? void 0 : e.supportAppealId) == `string` && /^[1-9][0-9]*$/.test(e.supportAppealId) ? e.supportAppealId : void 0,
          ticketId: typeof(e == null ? void 0 : e.ticketId) == `string` ? e.ticketId : void 0
        }))
      }
    }
    async getUserPixelsPaintedToday() {
      let e = await this.request(`/me/pixels-painted-today`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      let t = await e.json();
      return (t == null ? void 0 : t.paintedToday) ?? 0
    }
    async accountConflict() {
      let e = await this.request(`/me/account-conflict`, {
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      return await e.json()
    }
    async resolveAccountConflict(e) {
      let t = await this.request(`/me/account-conflict/resolve`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          keepUserId: e
        })
      });
      switch (t.status) {
        case N.OK:
          return (await t.json()).keptUserId;
        case N.CONFLICT:
          throw (await t.json()).error === `conflict_blocked` ? Error(m.duplicate_account_blocked()) : Error(m.duplicate_account_already_resolved());
        default:
          throw new F(m.unexpected_server_error(), t.status)
      }
    }
    async markRulesAsRead() {
      return (await this.request(`/me/rules/read`, {
        method: `POST`,
        credentials: `include`
      })).status === N.OK
    }
    async markStoreSeen() {
      return (await this.request(`/me/store/seen`, {
        method: `POST`,
        credentials: `include`
      })).status === N.OK
    }
  }
}

function Xs(e) {
  return class extends e {
    async getAdminB2BBusinesses(e = ``, t = 0) {
      let n = new URLSearchParams({
          query: e,
          page: String(t)
        }),
        r = await this.request(`/staff/dashboard/businesses?${n.toString()}`, {
          credentials: `include`
        });
      if (r.status !== N.OK) throw new F(m.b2b_load_failed(), r.status);
      return r.json()
    }
    async getAdminB2BBusiness(e) {
      let t = await this.request(`/staff/dashboard/businesses/${e}`, {
        credentials: `include`
      });
      if (t.status === N.NOT_FOUND) throw new F(m.b2b_business_not_found(), t.status);
      if (t.status !== N.OK) throw new F(m.b2b_load_business_failed(), t.status);
      return t.json()
    }
    async convertAdminB2BBusiness(e) {
      let t = await this.request(`/staff/dashboard/businesses/${e}/convert`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status === N.CONFLICT || t.status === N.BAD_REQUEST) {
        let e = await t.json().catch(() => null);
        if ((e == null ? void 0 : e.error) === `business_account_is_employee`) throw new F(m.b2b_error_business_is_employee(), t.status)
      }
      if (t.status === N.NOT_FOUND) throw new F(m.b2b_user_not_found(), t.status);
      if (t.status !== N.NO_CONTENT) throw new F(m.b2b_convert_failed(), t.status)
    }
    async setAdminB2BInfiniteCharges(e, t) {
      let n = await this.request(`/staff/dashboard/businesses/${e}/charges`, {
        method: `PATCH`,
        credentials: `include`,
        body: JSON.stringify({
          infinite: t
        })
      });
      if (n.status !== N.OK) throw new F(m.b2b_update_charges_failed(), n.status);
      return (await n.json()).infinite
    }
    async setAdminB2BPaintRestrictions(e, t) {
      let n = await this.request(`/staff/dashboard/businesses/${e}/paint-restrictions`, {
        method: `PATCH`,
        credentials: `include`,
        body: JSON.stringify(t)
      });
      if (n.status !== N.OK) throw new F(m.b2b_update_paint_restrictions_failed(), n.status);
      return n.json()
    }
    async assignAdminB2BEmployee(e, t) {
      let n = await this.request(`/staff/dashboard/businesses/${e}/employees`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          employeeUserId: t
        })
      });
      if (n.status === N.CONFLICT || n.status === N.BAD_REQUEST) {
        var r;
        let e = await n.json().catch(() => null),
          t = {
            business_account_is_employee: m.b2b_error_business_is_employee,
            employee_account_is_business: m.b2b_error_employee_is_business,
            business_cannot_be_its_own_employee: m.b2b_error_same_account
          };
        throw new F(((r = t[(e == null ? void 0 : e.error) ?? ``]) == null ? void 0 : r.call(t)) ?? m.b2b_assign_failed(), n.status)
      }
      if (n.status === N.NOT_FOUND) throw new F(m.b2b_user_not_found(), n.status);
      if (n.status !== N.NO_CONTENT) throw new F(m.b2b_assign_failed(), n.status)
    }
    async removeAdminB2BEmployee(e, t) {
      let n = await this.request(`/staff/dashboard/businesses/${e}/employees/${t}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (n.status === N.CONFLICT) throw new F(m.b2b_employee_not_assigned(), n.status);
      if (n.status !== N.NO_CONTENT) throw new F(m.b2b_remove_failed(), n.status)
    }
    async health() {
      return (await this.request(`/health`)).json()
    }
    async postAdjustUserDroplets(e, t) {
      let n = await this.request(`/staff/dashboard/users/adjust-user-droplets`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userId: e,
          delta: t
        })
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return (await n.json()).droplets
    }
    async postAdjustUserPrism(e, t) {
      let n = await this.request(`/staff/dashboard/users/adjust-user-prism`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userId: e,
          delta: t
        })
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return (await n.json()).prism
    }
    async getAdminUserCosmetics(e) {
      let t = await this.request(`/staff/dashboard/users/cosmetics?userId=${encodeURIComponent(e)}`, {
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.user_cosmetics_load_failed(), t.status);
      return t.json()
    }
    async getAdminUserCosmeticCatalog() {
      let e = await this.request(`/staff/dashboard/users/cosmetics/catalog`, {
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.user_cosmetics_catalog_failed(), e.status);
      return e.json()
    }
    async postAdminUserCosmeticAction(e, t) {
      var n;
      let r = await this.request(`/staff/dashboard/users/${e}`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(t)
      });
      if (r.status === N.OK) return r.json();
      switch ((n = await r.json().catch(() => null)) == null ? void 0 : n.error) {
        case `already_owned`:
          throw new F(m.user_cosmetics_already_owned(), r.status);
        case `not_owned`:
          throw new F(m.user_cosmetics_not_owned(), r.status);
        case `not_refundable`:
          throw new F(m.user_cosmetics_not_refundable(), r.status);
        case `user_not_found`:
          throw new F(m.user_not_found(), r.status);
        default:
          throw new F(m.user_cosmetics_action_failed(), r.status)
      }
    }
    async postAdminRenameUser(e, t) {
      let n = await this.request(`/staff/dashboard/users/rename`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userId: e,
          newName: t
        })
      });
      if (n.status === N.BAD_REQUEST) {
        let e = await n.json(),
          t = (e == null ? void 0 : e.error) ?? ``;
        throw t === `invalid_name` ? new F(m.invalid_name(), N.BAD_REQUEST) : new F(typeof t == `string` && t ? t : m.unexpected_server_error(), N.BAD_REQUEST)
      }
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status)
    }
    async postAdminChangeUserEmail(e, t) {
      let n = await this.request(`/staff/dashboard/users/email`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userId: e,
          email: t
        })
      });
      if (n.status === N.BAD_REQUEST) {
        let e = await n.json(),
          t = (e == null ? void 0 : e.error) ?? ``;
        throw t === `email_required` || t === `invalid_email` ? new F(m.enter_valid_email_address(), N.BAD_REQUEST) : new F(typeof t == `string` && t ? t : m.unexpected_server_error(), N.BAD_REQUEST)
      }
      if (n.status === N.CONFLICT) {
        let e = await n.json();
        if (((e == null ? void 0 : e.error) ?? ``) === `email_already_in_use`) {
          let t = new F(typeof(e == null ? void 0 : e.userId) == `number` ? m.email_already_in_use_by_user({
            userId: e.userId
          }) : m.email_already_in_use(), N.CONFLICT);
          throw typeof(e == null ? void 0 : e.userId) == `number` && (t.userId = e.userId), t
        }
        throw new F(m.unexpected_server_error(), N.CONFLICT)
      }
      if (n.status === N.NOT_FOUND) throw new F(`User not found.`, N.NOT_FOUND);
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status)
    }
    async getAdminUserProfilePictures(e) {
      let t = await this.request(`/staff/dashboard/users/profile-pictures?userId=${e}`, {
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
    async postAdminRemoveUserPicture(e) {
      let t = await this.request(`/staff/dashboard/users/remove-picture`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          pictureId: e
        })
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status)
    }
    async postAdminRerollUserAvatar(e) {
      let t = await this.request(`/staff/dashboard/users/reroll-avatar`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userId: e
        })
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
    async banUsers(e, t, n) {
      let r = await this.request(`/staff/dashboard/summary/users/ban`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userIds: e,
          reason: t,
          notes: n
        })
      });
      if (r.status !== N.OK) throw new F(m.unexpected_server_error(), r.status)
    }
    async timeoutUsers(e, t, n) {
      let r = await this.request(`/staff/dashboard/summary/users/timeout`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userIds: e,
          reason: t,
          notes: n
        })
      });
      if (r.status !== N.OK) throw new F(m.unexpected_server_error(), r.status)
    }
    async incrementUsersDroplets(e, t, n) {
      let r = await this.request(`/staff/dashboard/summary/users/increment-droplet`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userIds: e,
          delta: t,
          notes: n
        })
      });
      if (r.status !== N.OK) throw new F(m.unexpected_server_error(), r.status)
    }
    async reloadPunishmentCache() {
      let e = await this.request(`/staff/dashboard/summary/reload-punishment-cache`, {
        method: `POST`,
        credentials: `include`
      });
      if (e.status === N.CONFLICT) throw new F(m.punishment_cache_reload_already_running(), e.status);
      if (e.status !== N.OK && e.status !== N.ACCEPTED) throw new F(m.unexpected_server_error(), e.status)
    }
    async postUnbanUsers(e, t) {
      let n = await this.request(`/staff/dashboard/summary/users/unban`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userIds: e,
          notes: t
        })
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status)
    }
    async postAnticheatUnbanUsers(e, t) {
      let n = await this.request(`/staff/dashboard/anticheat/unban`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userIds: e,
          notes: t
        })
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status)
    }
    async postAnticheatBanUsers(e, t, n) {
      let r = await this.request(`/staff/dashboard/anticheat/ban`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userIds: e,
          notes: t,
          reason: n
        })
      });
      if (r.status !== N.OK) throw new F(m.unexpected_server_error(), r.status)
    }
    async postBulkPhoneVerification(e, t) {
      let n = await this.request(`/staff/dashboard/summary/users/phone-verification`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userIds: e,
          notes: t
        })
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return await n.json()
    }
    async getAuditLogs(e) {
      let t = new URLSearchParams;
      e.query && t.set(`query`, e.query), e.actorUserId !== void 0 && t.set(`actorUserId`, String(e.actorUserId)), e.targetUserId !== void 0 && t.set(`targetUserId`, String(e.targetUserId)), e.targetType && t.set(`targetType`, e.targetType), e.targetId && t.set(`targetId`, e.targetId), e.action && t.set(`action`, e.action), e.outcome && t.set(`outcome`, e.outcome), e.actorRole && t.set(`actorRole`, e.actorRole), e.from && t.set(`from`, e.from), e.to && t.set(`to`, e.to), e.sortKey && t.set(`sortKey`, e.sortKey), e.sortDir && t.set(`sortDir`, e.sortDir), t.set(`limit`, String(e.limit)), t.set(`offset`, String(e.offset));
      let n = await this.request(`/staff/dashboard/audit-logs/see?${t.toString()}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      let r = await n.json();
      return (Array.isArray(r) ? r : []).map(e => {
        let t = e && typeof e == `object` ? e : {};
        return {
          ...t,
          actorRole: t.actorRole ?? `unknown`,
          targetUserId: t.targetUserId ?? [],
          targetAvatarSeeds: t.targetAvatarSeeds ?? [],
          targetType: t.targetType ?? `user`,
          targetIds: t.targetIds ?? []
        }
      })
    }
    async postUsersSuspend(e, t, n) {
      let r;
      switch (t) {
        case `dashboard`:
          r = `/staff/dashboard/users/${n}`;
          break;
        case `summary`:
          r = `/staff/dashboard/summary/users/${n}`;
          break;
        case `select-area`:
          r = `/staff/tools/select-area/${n}`;
          break;
        default:
          r = `/staff/tools/select-pixel/${n}`
      }
      if ((await this.request(r, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify(e)
        })).status !== N.OK) throw Error(m.unexpected_server_error())
    }
    async postSelectAreaPhoneVerification(e, t = ``) {
      let n = await this.request(`/staff/tools/select-area/phone-verification`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userIds: e,
          notes: t
        })
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return await n.json()
    }
    async postDashboardUserPhoneVerification(e, t = ``) {
      let n = await this.request(`/staff/dashboard/users/phone-verification`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userIds: [e],
          notes: t
        })
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return await n.json()
    }
    async postReportUserName(e) {
      let t = await this.request(`/report/user/name`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userId: e
        })
      });
      if (t.status !== N.OK) throw new F(m.report_failed(), t.status);
      let n = await t.json();
      if (n.reason === `target_cooldown`) throw Error(m.profile_report_cooldown());
      if (n.success !== !0 || n.reason) throw Error(m.report_failed())
    }
    async postReportUserProfile(e) {
      let t = await this.request(`/report/user/profile`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status === 409) throw new F(m.profile_report_content_changed(), t.status);
      if (t.status !== N.OK) throw new F(m.report_failed(), t.status);
      let n = await t.json();
      switch (n.reason) {
        case `target_cooldown`:
          throw Error(m.profile_report_cooldown());
        case `reporter_banned`:
          throw Error(m.reporter_banned());
        case `min_pixels_painted`:
          throw Error(m.min_pixels_painted());
        case `max_report_per_hour`:
          throw Error(m.max_report_per_hour())
      }
      if (n.success !== !0 || n.reason) throw Error(m.report_failed())
    }
    async removeReportedUserPicture(e, t) {
      let n = await this.request(`/staff/tickets/remove-picture`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          ticketId: e,
          reportId: t
        })
      });
      if (n.status === 409) throw new F(m.profile_report_content_changed(), n.status);
      if (n.status !== N.OK) throw new F(m.failed_to_remove_profile_picture(), n.status);
      return n.json()
    }
    async resetReportedUserName(e, t) {
      let n = await this.request(`/staff/tickets/reset-name`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          ticketId: e,
          reportId: t
        })
      });
      if (n.status === 409) throw new F(m.profile_report_content_changed(), n.status);
      if (n.status !== N.OK) throw new F(m.failed_to_change_username(), n.status);
      return n.json()
    }
    async postReportAllianceName(e) {
      let t = await this.request(`/report/alliance/name`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          allianceId: e
        })
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
  }
}
var I = {
    seasons: [{
      tileSize: 1e3,
      zoom: 11
    }],
    regionSize: 4,
    refreshIntervalMs: 6e3,
    colors: [{
      name: `Transparent`,
      rgb: [0, 0, 0]
    }, {
      name: `Black`,
      rgb: [0, 0, 0]
    }, {
      name: `Dark Gray`,
      rgb: [60, 60, 60]
    }, {
      name: `Gray`,
      rgb: [120, 120, 120]
    }, {
      name: `Light Gray`,
      rgb: [210, 210, 210]
    }, {
      name: `White`,
      rgb: [255, 255, 255]
    }, {
      name: `Deep Red`,
      rgb: [96, 0, 24]
    }, {
      name: `Red`,
      rgb: [237, 28, 36]
    }, {
      name: `Orange`,
      rgb: [255, 127, 39]
    }, {
      name: `Gold`,
      rgb: [246, 170, 9]
    }, {
      name: `Yellow`,
      rgb: [249, 221, 59]
    }, {
      name: `Light Yellow`,
      rgb: [255, 250, 188]
    }, {
      name: `Dark Green`,
      rgb: [14, 185, 104]
    }, {
      name: `Green`,
      rgb: [19, 230, 123]
    }, {
      name: `Light Green`,
      rgb: [135, 255, 94]
    }, {
      name: `Dark Teal`,
      rgb: [12, 129, 110]
    }, {
      name: `Teal`,
      rgb: [16, 174, 166]
    }, {
      name: `Light Teal`,
      rgb: [19, 225, 190]
    }, {
      name: `Dark Blue`,
      rgb: [40, 80, 158]
    }, {
      name: `Blue`,
      rgb: [64, 147, 228]
    }, {
      name: `Cyan`,
      rgb: [96, 247, 242]
    }, {
      name: `Indigo`,
      rgb: [107, 80, 246]
    }, {
      name: `Light Indigo`,
      rgb: [153, 177, 251]
    }, {
      name: `Dark Purple`,
      rgb: [120, 12, 153]
    }, {
      name: `Purple`,
      rgb: [170, 56, 185]
    }, {
      name: `Light Purple`,
      rgb: [224, 159, 249]
    }, {
      name: `Dark Pink`,
      rgb: [203, 0, 122]
    }, {
      name: `Pink`,
      rgb: [236, 31, 128]
    }, {
      name: `Light Pink`,
      rgb: [243, 141, 169]
    }, {
      name: `Dark Brown`,
      rgb: [104, 70, 52]
    }, {
      name: `Brown`,
      rgb: [149, 104, 42]
    }, {
      name: `Beige`,
      rgb: [248, 178, 119]
    }, {
      name: `Medium Gray`,
      rgb: [170, 170, 170]
    }, {
      name: `Dark Red`,
      rgb: [165, 14, 30]
    }, {
      name: `Light Red`,
      rgb: [250, 128, 114]
    }, {
      name: `Dark Orange`,
      rgb: [228, 92, 26]
    }, {
      name: `Light Tan`,
      rgb: [214, 181, 148]
    }, {
      name: `Dark Goldenrod`,
      rgb: [156, 132, 49]
    }, {
      name: `Goldenrod`,
      rgb: [197, 173, 49]
    }, {
      name: `Light Goldenrod`,
      rgb: [232, 212, 95]
    }, {
      name: `Dark Olive`,
      rgb: [74, 107, 58]
    }, {
      name: `Olive`,
      rgb: [90, 148, 74]
    }, {
      name: `Light Olive`,
      rgb: [132, 197, 115]
    }, {
      name: `Dark Cyan`,
      rgb: [15, 121, 159]
    }, {
      name: `Light Cyan`,
      rgb: [187, 250, 242]
    }, {
      name: `Light Blue`,
      rgb: [125, 199, 255]
    }, {
      name: `Dark Indigo`,
      rgb: [77, 49, 184]
    }, {
      name: `Dark Slate Blue`,
      rgb: [74, 66, 132]
    }, {
      name: `Slate Blue`,
      rgb: [122, 113, 196]
    }, {
      name: `Light Slate Blue`,
      rgb: [181, 174, 241]
    }, {
      name: `Light Brown`,
      rgb: [219, 164, 99]
    }, {
      name: `Dark Beige`,
      rgb: [209, 128, 81]
    }, {
      name: `Light Beige`,
      rgb: [255, 197, 165]
    }, {
      name: `Dark Peach`,
      rgb: [155, 82, 73]
    }, {
      name: `Peach`,
      rgb: [209, 128, 120]
    }, {
      name: `Light Peach`,
      rgb: [250, 182, 164]
    }, {
      name: `Dark Tan`,
      rgb: [123, 99, 82]
    }, {
      name: `Tan`,
      rgb: [156, 132, 107]
    }, {
      name: `Dark Slate`,
      rgb: [51, 57, 65]
    }, {
      name: `Slate`,
      rgb: [109, 117, 141]
    }, {
      name: `Light Slate`,
      rgb: [179, 185, 209]
    }, {
      name: `Dark Stone`,
      rgb: [109, 100, 63]
    }, {
      name: `Stone`,
      rgb: [148, 140, 107]
    }, {
      name: `Light Stone`,
      rgb: [205, 197, 158]
    }],
    errors: {
      needsPhoneVerification: `needs_phone_verification`
    },
    items: {
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
    platforms: {
      android: {
        googlePlayBilling: {
          price: 1
        },
        appName: `live.wplace.twa`
      }
    },
    products: {
      10: {
        name: `25,000 Droplets`,
        price: 500,
        priceCurrency: `fiat`,
        lookupKey: `droplets_5`,
        items: [{
          name: `Droplet`,
          amount: 25e3
        }]
      },
      20: {
        name: `78,750 Droplets`,
        price: 1500,
        priceCurrency: `fiat`,
        lookupKey: `droplets_15`,
        items: [{
          name: `Droplet`,
          amount: 78750
        }]
      },
      30: {
        name: `165,000 Droplets`,
        price: 3e3,
        priceCurrency: `fiat`,
        lookupKey: `droplets_30`,
        items: [{
          name: `Droplet`,
          amount: 165e3
        }]
      },
      40: {
        name: `287,500 Droplets`,
        price: 5e3,
        priceCurrency: `fiat`,
        lookupKey: `droplets_50`,
        items: [{
          name: `Droplet`,
          amount: 287500
        }]
      },
      50: {
        name: `450,000 Droplets`,
        price: 7500,
        priceCurrency: `fiat`,
        lookupKey: `droplets_75`,
        items: [{
          name: `Droplet`,
          amount: 45e4
        }]
      },
      60: {
        name: `625,000 Droplets`,
        price: 1e4,
        priceCurrency: `fiat`,
        lookupKey: `droplets_100`,
        items: [{
          name: `Droplet`,
          amount: 625e3
        }]
      },
      70: {
        name: `+5 Max. Charges`,
        price: 500,
        priceCurrency: `droplets`,
        items: [{
          name: `Max. Charge`,
          amount: 5
        }]
      },
      80: {
        name: `+30 Paint Charges`,
        price: 500,
        priceCurrency: `droplets`,
        items: [{
          name: `Paint Charge`,
          amount: 30
        }]
      },
      100: {
        name: `Unlock Color`,
        price: 2e3,
        priceCurrency: `droplets`,
        items: [{
          name: `Color`,
          amount: 1
        }]
      },
      110: {
        name: `Flag`,
        price: 2e4,
        priceCurrency: `droplets`,
        items: [{
          name: `Flag`,
          amount: 1
        }]
      },
      120: {
        name: `Profile Picture`,
        price: 2e4,
        priceCurrency: `droplets`,
        items: [{
          name: `Profile Picture`,
          amount: 1
        }]
      },
      130: {
        name: `FRAME`,
        priceCurrency: `droplets`,
        items: [{
          name: `FRAME`,
          amount: 1
        }]
      },
      140: {
        name: `Custom Name Font`,
        priceCurrency: `droplets`,
        items: [{
          name: `Custom Name Font`,
          amount: 1
        }]
      },
      150: {
        name: `Custom Name Style`,
        priceCurrency: `droplets`,
        items: [{
          name: `Custom Name Style`,
          amount: 1
        }]
      },
      160: {
        name: `20 Prism`,
        price: 1e3,
        priceCurrency: `fiat`,
        lookupKey: `prism_10`,
        items: [{
          name: `Prism`,
          amount: 20
        }]
      },
      161: {
        name: `44 Prism`,
        price: 2e3,
        priceCurrency: `fiat`,
        lookupKey: `prism_20`,
        items: [{
          name: `Prism`,
          amount: 44
        }]
      },
      162: {
        name: `72 Prism`,
        price: 3e3,
        priceCurrency: `fiat`,
        lookupKey: `prism_30`,
        items: [{
          name: `Prism`,
          amount: 72
        }]
      },
      163: {
        name: `124 Prism`,
        price: 5e3,
        priceCurrency: `fiat`,
        lookupKey: `prism_50`,
        items: [{
          name: `Prism`,
          amount: 124
        }]
      },
      164: {
        name: `194 Prism`,
        price: 7500,
        priceCurrency: `fiat`,
        lookupKey: `prism_75`,
        items: [{
          name: `Prism`,
          amount: 194
        }]
      },
      165: {
        name: `270 Prism`,
        price: 1e4,
        priceCurrency: `fiat`,
        lookupKey: `prism_100`,
        items: [{
          name: `Prism`,
          amount: 270
        }]
      }
    },
    countries: [{
      id: 1,
      name: `Afghanistan`,
      code: `AF`,
      flag: `🇦🇫`
    }, {
      id: 2,
      name: `Albania`,
      code: `AL`,
      flag: `🇦🇱`
    }, {
      id: 3,
      name: `Algeria`,
      code: `DZ`,
      flag: `🇩🇿`
    }, {
      id: 4,
      name: `American Samoa`,
      code: `AS`,
      flag: `🇦🇸`
    }, {
      id: 5,
      name: `Andorra`,
      code: `AD`,
      flag: `🇦🇩`
    }, {
      id: 6,
      name: `Angola`,
      code: `AO`,
      flag: `🇦🇴`
    }, {
      id: 7,
      name: `Anguilla`,
      code: `AI`,
      flag: `🇦🇮`
    }, {
      id: 8,
      name: `Antarctica`,
      code: `AQ`,
      flag: `🇦🇶`
    }, {
      id: 9,
      name: `Antigua and Barbuda`,
      code: `AG`,
      flag: `🇦🇬`
    }, {
      id: 10,
      name: `Argentina`,
      code: `AR`,
      flag: `🇦🇷`
    }, {
      id: 11,
      name: `Armenia`,
      code: `AM`,
      flag: `🇦🇲`
    }, {
      id: 12,
      name: `Aruba`,
      code: `AW`,
      flag: `🇦🇼`
    }, {
      id: 13,
      name: `Australia`,
      code: `AU`,
      flag: `🇦🇺`
    }, {
      id: 14,
      name: `Austria`,
      code: `AT`,
      flag: `🇦🇹`
    }, {
      id: 15,
      name: `Azerbaijan`,
      code: `AZ`,
      flag: `🇦🇿`
    }, {
      id: 16,
      name: `Bahamas`,
      code: `BS`,
      flag: `🇧🇸`
    }, {
      id: 17,
      name: `Bahrain`,
      code: `BH`,
      flag: `🇧🇭`
    }, {
      id: 18,
      name: `Bangladesh`,
      code: `BD`,
      flag: `🇧🇩`
    }, {
      id: 19,
      name: `Barbados`,
      code: `BB`,
      flag: `🇧🇧`
    }, {
      id: 20,
      name: `Belarus`,
      code: `BY`,
      flag: `🇧🇾`
    }, {
      id: 21,
      name: `Belgium`,
      code: `BE`,
      flag: `🇧🇪`
    }, {
      id: 22,
      name: `Belize`,
      code: `BZ`,
      flag: `🇧🇿`
    }, {
      id: 23,
      name: `Benin`,
      code: `BJ`,
      flag: `🇧🇯`
    }, {
      id: 24,
      name: `Bermuda`,
      code: `BM`,
      flag: `🇧🇲`
    }, {
      id: 25,
      name: `Bhutan`,
      code: `BT`,
      flag: `🇧🇹`
    }, {
      id: 26,
      name: `Bolivia`,
      code: `BO`,
      flag: `🇧🇴`
    }, {
      id: 27,
      name: `Bonaire`,
      code: `BQ`,
      flag: `🇧🇶`
    }, {
      id: 28,
      name: `Bosnia and Herzegovina`,
      code: `BA`,
      flag: `🇧🇦`
    }, {
      id: 29,
      name: `Botswana`,
      code: `BW`,
      flag: `🇧🇼`
    }, {
      id: 30,
      name: `Bouvet Island`,
      code: `BV`,
      flag: `🇧🇻`
    }, {
      id: 31,
      name: `Brazil`,
      code: `BR`,
      flag: `🇧🇷`
    }, {
      id: 32,
      name: `British Indian Ocean Territory`,
      code: `IO`,
      flag: `🇮🇴`
    }, {
      id: 33,
      name: `Brunei Darussalam`,
      code: `BN`,
      flag: `🇧🇳`
    }, {
      id: 34,
      name: `Bulgaria`,
      code: `BG`,
      flag: `🇧🇬`
    }, {
      id: 35,
      name: `Burkina Faso`,
      code: `BF`,
      flag: `🇧🇫`
    }, {
      id: 36,
      name: `Burundi`,
      code: `BI`,
      flag: `🇧🇮`
    }, {
      id: 37,
      name: `Cabo Verde`,
      code: `CV`,
      flag: `🇨🇻`
    }, {
      id: 38,
      name: `Cambodia`,
      code: `KH`,
      flag: `🇰🇭`
    }, {
      id: 39,
      name: `Cameroon`,
      code: `CM`,
      flag: `🇨🇲`
    }, {
      id: 40,
      name: `Canada`,
      code: `CA`,
      flag: `🇨🇦`
    }, {
      id: 41,
      name: `Cayman Islands`,
      code: `KY`,
      flag: `🇰🇾`
    }, {
      id: 42,
      name: `Central African Republic`,
      code: `CF`,
      flag: `🇨🇫`
    }, {
      id: 43,
      name: `Chad`,
      code: `TD`,
      flag: `🇹🇩`
    }, {
      id: 44,
      name: `Chile`,
      code: `CL`,
      flag: `🇨🇱`
    }, {
      id: 45,
      name: `China`,
      code: `CN`,
      flag: `🇨🇳`
    }, {
      id: 46,
      name: `Christmas Island`,
      code: `CX`,
      flag: `🇨🇽`
    }, {
      id: 47,
      name: `Cocos (Keeling) Islands`,
      code: `CC`,
      flag: `🇨🇨`
    }, {
      id: 48,
      name: `Colombia`,
      code: `CO`,
      flag: `🇨🇴`
    }, {
      id: 49,
      name: `Comoros`,
      code: `KM`,
      flag: `🇰🇲`
    }, {
      id: 50,
      name: `Congo`,
      code: `CG`,
      flag: `🇨🇬`
    }, {
      id: 51,
      name: `Cook Islands`,
      code: `CK`,
      flag: `🇨🇰`
    }, {
      id: 52,
      name: `Costa Rica`,
      code: `CR`,
      flag: `🇨🇷`
    }, {
      id: 53,
      name: `Croatia`,
      code: `HR`,
      flag: `🇭🇷`
    }, {
      id: 54,
      name: `Cuba`,
      code: `CU`,
      flag: `🇨🇺`
    }, {
      id: 55,
      name: `Curaçao`,
      code: `CW`,
      flag: `🇨🇼`
    }, {
      id: 56,
      name: `Cyprus`,
      code: `CY`,
      flag: `🇨🇾`
    }, {
      id: 57,
      name: `Czechia`,
      code: `CZ`,
      flag: `🇨🇿`
    }, {
      id: 58,
      name: `Côte d'Ivoire`,
      code: `CI`,
      flag: `🇨🇮`
    }, {
      id: 59,
      name: `Denmark`,
      code: `DK`,
      flag: `🇩🇰`
    }, {
      id: 60,
      name: `Djibouti`,
      code: `DJ`,
      flag: `🇩🇯`
    }, {
      id: 61,
      name: `Dominica`,
      code: `DM`,
      flag: `🇩🇲`
    }, {
      id: 62,
      name: `Dominican Republic`,
      code: `DO`,
      flag: `🇩🇴`
    }, {
      id: 63,
      name: `Ecuador`,
      code: `EC`,
      flag: `🇪🇨`
    }, {
      id: 64,
      name: `Egypt`,
      code: `EG`,
      flag: `🇪🇬`
    }, {
      id: 65,
      name: `El Salvador`,
      code: `SV`,
      flag: `🇸🇻`
    }, {
      id: 66,
      name: `Equatorial Guinea`,
      code: `GQ`,
      flag: `🇬🇶`
    }, {
      id: 67,
      name: `Eritrea`,
      code: `ER`,
      flag: `🇪🇷`
    }, {
      id: 68,
      name: `Estonia`,
      code: `EE`,
      flag: `🇪🇪`
    }, {
      id: 69,
      name: `Eswatini`,
      code: `SZ`,
      flag: `🇸🇿`
    }, {
      id: 70,
      name: `Ethiopia`,
      code: `ET`,
      flag: `🇪🇹`
    }, {
      id: 71,
      name: `Falkland Islands (Malvinas)`,
      code: `FK`,
      flag: `🇫🇰`
    }, {
      id: 72,
      name: `Faroe Islands`,
      code: `FO`,
      flag: `🇫🇴`
    }, {
      id: 73,
      name: `Fiji`,
      code: `FJ`,
      flag: `🇫🇯`
    }, {
      id: 74,
      name: `Finland`,
      code: `FI`,
      flag: `🇫🇮`
    }, {
      id: 75,
      name: `France`,
      code: `FR`,
      flag: `🇫🇷`
    }, {
      id: 76,
      name: `French Guiana`,
      code: `GF`,
      flag: `🇬🇫`
    }, {
      id: 77,
      name: `French Polynesia`,
      code: `PF`,
      flag: `🇵🇫`
    }, {
      id: 78,
      name: `French Southern Territories`,
      code: `TF`,
      flag: `🇹🇫`
    }, {
      id: 79,
      name: `Gabon`,
      code: `GA`,
      flag: `🇬🇦`
    }, {
      id: 80,
      name: `Gambia`,
      code: `GM`,
      flag: `🇬🇲`
    }, {
      id: 81,
      name: `Georgia`,
      code: `GE`,
      flag: `🇬🇪`
    }, {
      id: 82,
      name: `Germany`,
      code: `DE`,
      flag: `🇩🇪`
    }, {
      id: 83,
      name: `Ghana`,
      code: `GH`,
      flag: `🇬🇭`
    }, {
      id: 84,
      name: `Gibraltar`,
      code: `GI`,
      flag: `🇬🇮`
    }, {
      id: 85,
      name: `Greece`,
      code: `GR`,
      flag: `🇬🇷`
    }, {
      id: 86,
      name: `Greenland`,
      code: `GL`,
      flag: `🇬🇱`
    }, {
      id: 87,
      name: `Grenada`,
      code: `GD`,
      flag: `🇬🇩`
    }, {
      id: 88,
      name: `Guadeloupe`,
      code: `GP`,
      flag: `🇬🇵`
    }, {
      id: 89,
      name: `Guam`,
      code: `GU`,
      flag: `🇬🇺`
    }, {
      id: 90,
      name: `Guatemala`,
      code: `GT`,
      flag: `🇬🇹`
    }, {
      id: 91,
      name: `Guernsey`,
      code: `GG`,
      flag: `🇬🇬`
    }, {
      id: 92,
      name: `Guinea`,
      code: `GN`,
      flag: `🇬🇳`
    }, {
      id: 93,
      name: `Guinea-Bissau`,
      code: `GW`,
      flag: `🇬🇼`
    }, {
      id: 94,
      name: `Guyana`,
      code: `GY`,
      flag: `🇬🇾`
    }, {
      id: 95,
      name: `Haiti`,
      code: `HT`,
      flag: `🇭🇹`
    }, {
      id: 96,
      name: `Heard Island and McDonald Islands`,
      code: `HM`,
      flag: `🇭🇲`
    }, {
      id: 97,
      name: `Honduras`,
      code: `HN`,
      flag: `🇭🇳`
    }, {
      id: 98,
      name: `Hong Kong`,
      code: `HK`,
      flag: `🇭🇰`
    }, {
      id: 99,
      name: `Hungary`,
      code: `HU`,
      flag: `🇭🇺`
    }, {
      id: 100,
      name: `Iceland`,
      code: `IS`,
      flag: `🇮🇸`
    }, {
      id: 101,
      name: `India`,
      code: `IN`,
      flag: `🇮🇳`
    }, {
      id: 102,
      name: `Indonesia`,
      code: `ID`,
      flag: `🇮🇩`
    }, {
      id: 103,
      name: `Iran`,
      code: `IR`,
      flag: `🇮🇷`
    }, {
      id: 104,
      name: `Iraq`,
      code: `IQ`,
      flag: `🇮🇶`
    }, {
      id: 105,
      name: `Ireland`,
      code: `IE`,
      flag: `🇮🇪`
    }, {
      id: 106,
      name: `Isle of Man`,
      code: `IM`,
      flag: `🇮🇲`
    }, {
      id: 107,
      name: `Israel`,
      code: `IL`,
      flag: `🇮🇱`
    }, {
      id: 108,
      name: `Italy`,
      code: `IT`,
      flag: `🇮🇹`
    }, {
      id: 109,
      name: `Jamaica`,
      code: `JM`,
      flag: `🇯🇲`
    }, {
      id: 110,
      name: `Japan`,
      code: `JP`,
      flag: `🇯🇵`
    }, {
      id: 111,
      name: `Jersey`,
      code: `JE`,
      flag: `🇯🇪`
    }, {
      id: 112,
      name: `Jordan`,
      code: `JO`,
      flag: `🇯🇴`
    }, {
      id: 113,
      name: `Kazakhstan`,
      code: `KZ`,
      flag: `🇰🇿`
    }, {
      id: 114,
      name: `Kenya`,
      code: `KE`,
      flag: `🇰🇪`
    }, {
      id: 115,
      name: `Kiribati`,
      code: `KI`,
      flag: `🇰🇮`
    }, {
      id: 116,
      name: `Kosovo`,
      code: `XK`,
      flag: `🇽🇰`
    }, {
      id: 117,
      name: `Kuwait`,
      code: `KW`,
      flag: `🇰🇼`
    }, {
      id: 118,
      name: `Kyrgyzstan`,
      code: `KG`,
      flag: `🇰🇬`
    }, {
      id: 119,
      name: `Laos`,
      code: `LA`,
      flag: `🇱🇦`
    }, {
      id: 120,
      name: `Latvia`,
      code: `LV`,
      flag: `🇱🇻`
    }, {
      id: 121,
      name: `Lebanon`,
      code: `LB`,
      flag: `🇱🇧`
    }, {
      id: 122,
      name: `Lesotho`,
      code: `LS`,
      flag: `🇱🇸`
    }, {
      id: 123,
      name: `Liberia`,
      code: `LR`,
      flag: `🇱🇷`
    }, {
      id: 124,
      name: `Libya`,
      code: `LY`,
      flag: `🇱🇾`
    }, {
      id: 125,
      name: `Liechtenstein`,
      code: `LI`,
      flag: `🇱🇮`
    }, {
      id: 126,
      name: `Lithuania`,
      code: `LT`,
      flag: `🇱🇹`
    }, {
      id: 127,
      name: `Luxembourg`,
      code: `LU`,
      flag: `🇱🇺`
    }, {
      id: 128,
      name: `Macao`,
      code: `MO`,
      flag: `🇲🇴`
    }, {
      id: 129,
      name: `Madagascar`,
      code: `MG`,
      flag: `🇲🇬`
    }, {
      id: 130,
      name: `Malawi`,
      code: `MW`,
      flag: `🇲🇼`
    }, {
      id: 131,
      name: `Malaysia`,
      code: `MY`,
      flag: `🇲🇾`
    }, {
      id: 132,
      name: `Maldives`,
      code: `MV`,
      flag: `🇲🇻`
    }, {
      id: 133,
      name: `Mali`,
      code: `ML`,
      flag: `🇲🇱`
    }, {
      id: 134,
      name: `Malta`,
      code: `MT`,
      flag: `🇲🇹`
    }, {
      id: 135,
      name: `Marshall Islands`,
      code: `MH`,
      flag: `🇲🇭`
    }, {
      id: 136,
      name: `Martinique`,
      code: `MQ`,
      flag: `🇲🇶`
    }, {
      id: 137,
      name: `Mauritania`,
      code: `MR`,
      flag: `🇲🇷`
    }, {
      id: 138,
      name: `Mauritius`,
      code: `MU`,
      flag: `🇲🇺`
    }, {
      id: 139,
      name: `Mayotte`,
      code: `YT`,
      flag: `🇾🇹`
    }, {
      id: 140,
      name: `Mexico`,
      code: `MX`,
      flag: `🇲🇽`
    }, {
      id: 141,
      name: `Micronesia`,
      code: `FM`,
      flag: `🇫🇲`
    }, {
      id: 142,
      name: `Moldova`,
      code: `MD`,
      flag: `🇲🇩`
    }, {
      id: 143,
      name: `Monaco`,
      code: `MC`,
      flag: `🇲🇨`
    }, {
      id: 144,
      name: `Mongolia`,
      code: `MN`,
      flag: `🇲🇳`
    }, {
      id: 145,
      name: `Montenegro`,
      code: `ME`,
      flag: `🇲🇪`
    }, {
      id: 146,
      name: `Montserrat`,
      code: `MS`,
      flag: `🇲🇸`
    }, {
      id: 147,
      name: `Morocco`,
      code: `MA`,
      flag: `🇲🇦`
    }, {
      id: 148,
      name: `Mozambique`,
      code: `MZ`,
      flag: `🇲🇿`
    }, {
      id: 149,
      name: `Myanmar`,
      code: `MM`,
      flag: `🇲🇲`
    }, {
      id: 150,
      name: `Namibia`,
      code: `NA`,
      flag: `🇳🇦`
    }, {
      id: 151,
      name: `Nauru`,
      code: `NR`,
      flag: `🇳🇷`
    }, {
      id: 152,
      name: `Nepal`,
      code: `NP`,
      flag: `🇳🇵`
    }, {
      id: 153,
      name: `Netherlands`,
      code: `NL`,
      flag: `🇳🇱`
    }, {
      id: 154,
      name: `New Caledonia`,
      code: `NC`,
      flag: `🇳🇨`
    }, {
      id: 155,
      name: `New Zealand`,
      code: `NZ`,
      flag: `🇳🇿`
    }, {
      id: 156,
      name: `Nicaragua`,
      code: `NI`,
      flag: `🇳🇮`
    }, {
      id: 157,
      name: `Niger`,
      code: `NE`,
      flag: `🇳🇪`
    }, {
      id: 158,
      name: `Nigeria`,
      code: `NG`,
      flag: `🇳🇬`
    }, {
      id: 159,
      name: `Niue`,
      code: `NU`,
      flag: `🇳🇺`
    }, {
      id: 160,
      name: `Norfolk Island`,
      code: `NF`,
      flag: `🇳🇫`
    }, {
      id: 161,
      name: `North Korea`,
      code: `KP`,
      flag: `🇰🇵`
    }, {
      id: 162,
      name: `North Macedonia`,
      code: `MK`,
      flag: `🇲🇰`
    }, {
      id: 163,
      name: `Northern Mariana Islands`,
      code: `MP`,
      flag: `🇲🇵`
    }, {
      id: 164,
      name: `Norway`,
      code: `NO`,
      flag: `🇳🇴`
    }, {
      id: 165,
      name: `Oman`,
      code: `OM`,
      flag: `🇴🇲`
    }, {
      id: 166,
      name: `Pakistan`,
      code: `PK`,
      flag: `🇵🇰`
    }, {
      id: 167,
      name: `Palau`,
      code: `PW`,
      flag: `🇵🇼`
    }, {
      id: 168,
      name: `Palestine`,
      code: `PS`,
      flag: `🇵🇸`
    }, {
      id: 169,
      name: `Panama`,
      code: `PA`,
      flag: `🇵🇦`
    }, {
      id: 170,
      name: `Papua New Guinea`,
      code: `PG`,
      flag: `🇵🇬`
    }, {
      id: 171,
      name: `Paraguay`,
      code: `PY`,
      flag: `🇵🇾`
    }, {
      id: 172,
      name: `Peru`,
      code: `PE`,
      flag: `🇵🇪`
    }, {
      id: 173,
      name: `Philippines`,
      code: `PH`,
      flag: `🇵🇭`
    }, {
      id: 174,
      name: `Pitcairn`,
      code: `PN`,
      flag: `🇵🇳`
    }, {
      id: 175,
      name: `Poland`,
      code: `PL`,
      flag: `🇵🇱`
    }, {
      id: 176,
      name: `Portugal`,
      code: `PT`,
      flag: `🇵🇹`
    }, {
      id: 177,
      name: `Puerto Rico`,
      code: `PR`,
      flag: `🇵🇷`
    }, {
      id: 178,
      name: `Qatar`,
      code: `QA`,
      flag: `🇶🇦`
    }, {
      id: 179,
      name: `Republic of the Congo`,
      code: `CD`,
      flag: `🇨🇩`
    }, {
      id: 180,
      name: `Romania`,
      code: `RO`,
      flag: `🇷🇴`
    }, {
      id: 181,
      name: `Russia`,
      code: `RU`,
      flag: `🇷🇺`
    }, {
      id: 182,
      name: `Rwanda`,
      code: `RW`,
      flag: `🇷🇼`
    }, {
      id: 183,
      name: `Réunion`,
      code: `RE`,
      flag: `🇷🇪`
    }, {
      id: 184,
      name: `Saint Barthélemy`,
      code: `BL`,
      flag: `🇧🇱`
    }, {
      id: 185,
      name: `Saint Helena`,
      code: `SH`,
      flag: `🇸🇭`
    }, {
      id: 186,
      name: `Saint Kitts and Nevis`,
      code: `KN`,
      flag: `🇰🇳`
    }, {
      id: 187,
      name: `Saint Lucia`,
      code: `LC`,
      flag: `🇱🇨`
    }, {
      id: 188,
      name: `Saint Martin (French part)`,
      code: `MF`,
      flag: `🇲🇫`
    }, {
      id: 189,
      name: `Saint Pierre and Miquelon`,
      code: `PM`,
      flag: `🇵🇲`
    }, {
      id: 190,
      name: `Saint Vincent and the Grenadines`,
      code: `VC`,
      flag: `🇻🇨`
    }, {
      id: 191,
      name: `Samoa`,
      code: `WS`,
      flag: `🇼🇸`
    }, {
      id: 192,
      name: `San Marino`,
      code: `SM`,
      flag: `🇸🇲`
    }, {
      id: 193,
      name: `Sao Tome and Principe`,
      code: `ST`,
      flag: `🇸🇹`
    }, {
      id: 194,
      name: `Saudi Arabia`,
      code: `SA`,
      flag: `🇸🇦`
    }, {
      id: 195,
      name: `Senegal`,
      code: `SN`,
      flag: `🇸🇳`
    }, {
      id: 196,
      name: `Serbia`,
      code: `RS`,
      flag: `🇷🇸`
    }, {
      id: 197,
      name: `Seychelles`,
      code: `SC`,
      flag: `🇸🇨`
    }, {
      id: 198,
      name: `Sierra Leone`,
      code: `SL`,
      flag: `🇸🇱`
    }, {
      id: 199,
      name: `Singapore`,
      code: `SG`,
      flag: `🇸🇬`
    }, {
      id: 200,
      name: `Sint Maarten (Dutch part)`,
      code: `SX`,
      flag: `🇸🇽`
    }, {
      id: 201,
      name: `Slovakia`,
      code: `SK`,
      flag: `🇸🇰`
    }, {
      id: 202,
      name: `Slovenia`,
      code: `SI`,
      flag: `🇸🇮`
    }, {
      id: 203,
      name: `Solomon Islands`,
      code: `SB`,
      flag: `🇸🇧`
    }, {
      id: 204,
      name: `Somalia`,
      code: `SO`,
      flag: `🇸🇴`
    }, {
      id: 205,
      name: `South Africa`,
      code: `ZA`,
      flag: `🇿🇦`
    }, {
      id: 206,
      name: `South Georgia and the South Sandwich Islands`,
      code: `GS`,
      flag: `🇬🇸`
    }, {
      id: 207,
      name: `South Korea`,
      code: `KR`,
      flag: `🇰🇷`
    }, {
      id: 208,
      name: `South Sudan`,
      code: `SS`,
      flag: `🇸🇸`
    }, {
      id: 209,
      name: `Spain`,
      code: `ES`,
      flag: `🇪🇸`
    }, {
      id: 210,
      name: `Sri Lanka`,
      code: `LK`,
      flag: `🇱🇰`
    }, {
      id: 211,
      name: `Sudan`,
      code: `SD`,
      flag: `🇸🇩`
    }, {
      id: 212,
      name: `Suriname`,
      code: `SR`,
      flag: `🇸🇷`
    }, {
      id: 213,
      name: `Svalbard and Jan Mayen`,
      code: `SJ`,
      flag: `🇸🇯`
    }, {
      id: 214,
      name: `Sweden`,
      code: `SE`,
      flag: `🇸🇪`
    }, {
      id: 215,
      name: `Switzerland`,
      code: `CH`,
      flag: `🇨🇭`
    }, {
      id: 216,
      name: `Syrian Arab Republic`,
      code: `SY`,
      flag: `🇸🇾`
    }, {
      id: 217,
      name: `Taiwan`,
      code: `TW`,
      flag: `🇹🇼`
    }, {
      id: 218,
      name: `Tajikistan`,
      code: `TJ`,
      flag: `🇹🇯`
    }, {
      id: 219,
      name: `Tanzania`,
      code: `TZ`,
      flag: `🇹🇿`
    }, {
      id: 220,
      name: `Thailand`,
      code: `TH`,
      flag: `🇹🇭`
    }, {
      id: 221,
      name: `Timor-Leste`,
      code: `TL`,
      flag: `🇹🇱`
    }, {
      id: 222,
      name: `Togo`,
      code: `TG`,
      flag: `🇹🇬`
    }, {
      id: 223,
      name: `Tokelau`,
      code: `TK`,
      flag: `🇹🇰`
    }, {
      id: 224,
      name: `Tonga`,
      code: `TO`,
      flag: `🇹🇴`
    }, {
      id: 225,
      name: `Trinidad and Tobago`,
      code: `TT`,
      flag: `🇹🇹`
    }, {
      id: 226,
      name: `Tunisia`,
      code: `TN`,
      flag: `🇹🇳`
    }, {
      id: 227,
      name: `Turkmenistan`,
      code: `TM`,
      flag: `🇹🇲`
    }, {
      id: 228,
      name: `Turks and Caicos Islands`,
      code: `TC`,
      flag: `🇹🇨`
    }, {
      id: 229,
      name: `Tuvalu`,
      code: `TV`,
      flag: `🇹🇻`
    }, {
      id: 230,
      name: `Türkiye`,
      code: `TR`,
      flag: `🇹🇷`
    }, {
      id: 231,
      name: `Uganda`,
      code: `UG`,
      flag: `🇺🇬`
    }, {
      id: 232,
      name: `Ukraine`,
      code: `UA`,
      flag: `🇺🇦`
    }, {
      id: 233,
      name: `United Arab Emirates`,
      code: `AE`,
      flag: `🇦🇪`
    }, {
      id: 234,
      name: `United Kingdom`,
      code: `GB`,
      flag: `🇬🇧`
    }, {
      id: 235,
      name: `United States`,
      code: `US`,
      flag: `🇺🇸`
    }, {
      id: 236,
      name: `United States Minor Outlying Islands`,
      code: `UM`,
      flag: `🇺🇲`
    }, {
      id: 237,
      name: `Uruguay`,
      code: `UY`,
      flag: `🇺🇾`
    }, {
      id: 238,
      name: `Uzbekistan`,
      code: `UZ`,
      flag: `🇺🇿`
    }, {
      id: 239,
      name: `Vanuatu`,
      code: `VU`,
      flag: `🇻🇺`
    }, {
      id: 240,
      name: `Vatican City`,
      code: `VA`,
      flag: `🇻🇦`
    }, {
      id: 241,
      name: `Venezuela`,
      code: `VE`,
      flag: `🇻🇪`
    }, {
      id: 242,
      name: `Viet Nam`,
      code: `VN`,
      flag: `🇻🇳`
    }, {
      id: 243,
      name: `Virgin Islands`,
      code: `VG`,
      flag: `🇻🇬`
    }, {
      id: 244,
      name: `Virgin Islands`,
      code: `VI`,
      flag: `🇻🇮`
    }, {
      id: 245,
      name: `Wallis and Futuna`,
      code: `WF`,
      flag: `🇼🇫`
    }, {
      id: 246,
      name: `Western Sahara`,
      code: `EH`,
      flag: `🇪🇭`
    }, {
      id: 247,
      name: `Yemen`,
      code: `YE`,
      flag: `🇾🇪`
    }, {
      id: 248,
      name: `Zambia`,
      code: `ZM`,
      flag: `🇿🇲`
    }, {
      id: 249,
      name: `Zimbabwe`,
      code: `ZW`,
      flag: `🇿🇼`
    }, {
      id: 250,
      name: `Åland Islands`,
      code: `AX`,
      flag: `🇦🇽`
    }, {
      id: 251,
      name: `Canary Islands`,
      code: `IC`,
      flag: `🇮🇨`
    }],
    permissions: JSON.parse(`{"support":{"view":{"feedback":{"interface":"staff.support.view.feedback.interface","painting":"staff.support.view.feedback.painting","overlays":"staff.support.view.feedback.overlays","alliances":"staff.support.view.feedback.alliances","profile":"staff.support.view.feedback.profile","store":"staff.support.view.feedback.store","notifications":"staff.support.view.feedback.notifications","rules":"staff.support.view.feedback.rules","events":"staff.support.view.feedback.events","other":"staff.support.view.feedback.other","unsure":"staff.support.view.feedback.unsure"},"bug":{"interface":"staff.support.view.bug.interface","painting":"staff.support.view.bug.painting","overlays":"staff.support.view.bug.overlays","alliances":"staff.support.view.bug.alliances","profile":"staff.support.view.bug.profile","store":"staff.support.view.bug.store","notifications":"staff.support.view.bug.notifications","rules":"staff.support.view.bug.rules","events":"staff.support.view.bug.events","other":"staff.support.view.bug.other","unsure":"staff.support.view.bug.unsure"},"staff":{"game":"staff.support.view.staff.game","discord":"staff.support.view.staff.discord","reddit":"staff.support.view.staff.reddit","email":"staff.support.view.staff.email","support":"staff.support.view.staff.support","social":"staff.support.view.staff.social","other":"staff.support.view.staff.other","unsure":"staff.support.view.staff.unsure"},"general":{"account":"staff.support.view.general.account","purchases":"staff.support.view.general.purchases","rules":"staff.support.view.general.rules","doxxing":"staff.support.view.general.doxxing","harassment":"staff.support.view.general.harassment","privacy":"staff.support.view.general.privacy","legal":"staff.support.view.general.legal","copyright":"staff.support.view.general.copyright","security":"staff.support.view.general.security","general":"staff.support.view.general.general","other":"staff.support.view.general.other","appeal":"staff.support.view.general.appeal","dismissed_report":"staff.support.view.general.dismissed_report"}},"act":{"feedback":{"interface":"staff.support.act.feedback.interface","painting":"staff.support.act.feedback.painting","overlays":"staff.support.act.feedback.overlays","alliances":"staff.support.act.feedback.alliances","profile":"staff.support.act.feedback.profile","store":"staff.support.act.feedback.store","notifications":"staff.support.act.feedback.notifications","rules":"staff.support.act.feedback.rules","events":"staff.support.act.feedback.events","other":"staff.support.act.feedback.other","unsure":"staff.support.act.feedback.unsure"},"bug":{"interface":"staff.support.act.bug.interface","painting":"staff.support.act.bug.painting","overlays":"staff.support.act.bug.overlays","alliances":"staff.support.act.bug.alliances","profile":"staff.support.act.bug.profile","store":"staff.support.act.bug.store","notifications":"staff.support.act.bug.notifications","rules":"staff.support.act.bug.rules","events":"staff.support.act.bug.events","other":"staff.support.act.bug.other","unsure":"staff.support.act.bug.unsure"},"staff":{"game":"staff.support.act.staff.game","discord":"staff.support.act.staff.discord","reddit":"staff.support.act.staff.reddit","email":"staff.support.act.staff.email","support":"staff.support.act.staff.support","social":"staff.support.act.staff.social","other":"staff.support.act.staff.other","unsure":"staff.support.act.staff.unsure"},"general":{"account":"staff.support.act.general.account","purchases":"staff.support.act.general.purchases","rules":"staff.support.act.general.rules","doxxing":"staff.support.act.general.doxxing","harassment":"staff.support.act.general.harassment","privacy":"staff.support.act.general.privacy","legal":"staff.support.act.general.legal","copyright":"staff.support.act.general.copyright","security":"staff.support.act.general.security","general":"staff.support.act.general.general","other":"staff.support.act.general.other","appeal":"staff.support.act.general.appeal","dismissed_report":"staff.support.act.general.dismissed_report"}},"audit":"staff.support.audit","reward":"staff.support.reward","compensation":"staff.support.compensation","escalate":"staff.support.escalate","deescalate":"staff.support.deescalate","reopen":"staff.support.reopen","config":"staff.support.config","recover":"staff.support.recover","manage_levels":"staff.support.manage_levels","review_staff_reports":"staff.support.review_staff_reports","escalation":"staff.support.escalation"},"dashboard":{"summary":{"counters":{"tickets":"staff.dashboard.summary.counters.tickets","reports":"staff.dashboard.summary.counters.reports"},"events":{"status":"staff.dashboard.summary.events.status","start":"staff.dashboard.summary.events.start","stop":"staff.dashboard.summary.events.stop","anchors":"staff.dashboard.summary.events.anchors"},"users":{"ban":"staff.dashboard.summary.users.ban","timeout":"staff.dashboard.summary.users.timeout","unban":"staff.dashboard.summary.users.unban","incrementDroplets":"staff.dashboard.summary.users.increment_droplets","phoneVerification":"staff.dashboard.summary.users.phone_verification"},"reloadPunishmentCache":"staff.dashboard.summary.reload_punishment_cache"},"team":{"tickets":"staff.dashboard.team.tickets","reports":"staff.dashboard.team.reports"},"users":{"info":"staff.dashboard.users.info","rename":"staff.dashboard.users.rename","notesGet":"staff.dashboard.users.notes_get","notesSet":"staff.dashboard.users.notes_set","purchases":"staff.dashboard.users.purchases","ticketsHistory":"staff.dashboard.users.tickets_history","ticketsStats":"staff.dashboard.users.tickets_stats","appealsHistory":"staff.dashboard.users.appeals_history","timeout":"staff.dashboard.users.timeout","removeTimeout":"staff.dashboard.users.remove_timeout","ban":"staff.dashboard.users.ban","removeBan":"staff.dashboard.users.remove_ban","autoReviewBan":"staff.dashboard.users.auto_review_ban","personalInformation":"staff.dashboard.users.personal_information","editEmail":"staff.dashboard.users.edit_email","disconnect":"staff.dashboard.users.disconnect","setDroplets":"staff.dashboard.users.set_droplets","setPrism":"staff.dashboard.users.set_prism","cosmeticsSee":"staff.dashboard.users.cosmetics_see","cosmeticsGrant":"staff.dashboard.users.cosmetics_grant","cosmeticsRemove":"staff.dashboard.users.cosmetics_remove","cosmeticsRefund":"staff.dashboard.users.cosmetics_refund","phoneVerification":"staff.dashboard.users.phone_verification","removePicture":"staff.dashboard.users.remove_picture"},"businesses":{"see":"staff.dashboard.businesses.see","manage":"staff.dashboard.businesses.manage"},"permissions":{"get":"staff.dashboard.permissions.get","set":"staff.dashboard.permissions.set"},"alliances":{"search":"staff.dashboard.alliances.search","details":"staff.dashboard.alliances.details","members":"staff.dashboard.alliances.members","rename":"staff.dashboard.alliances.rename","description":"staff.dashboard.alliances.description","leader":"staff.dashboard.alliances.leader","banAll":"staff.dashboard.alliances.ban_all","role":"staff.dashboard.alliances.role","removeMember":"staff.dashboard.alliances.remove_member","restore":"staff.dashboard.alliances.restore","moderate":"staff.dashboard.alliances.moderate","punish":"staff.dashboard.alliances.punish"},"protections":{"view":"staff.dashboard.protections.view","manage":"staff.dashboard.protections.manage"},"auditLogs":{"see":"staff.dashboard.audit_logs.see","events":{"timeout":"staff.dashboard.audit_logs.events.timeout","ban":"staff.dashboard.audit_logs.events.ban","changeDroplets":"staff.dashboard.audit_logs.events.change_droplets","changePrism":"staff.dashboard.audit_logs.events.change_prism","removeTimeout":"staff.dashboard.audit_logs.events.remove_timeout","removeBan":"staff.dashboard.audit_logs.events.remove_ban","manualTimeout":"staff.dashboard.audit_logs.events.manual_timeout","manualBan":"staff.dashboard.audit_logs.events.manual_ban","manualChangeDroplets":"staff.dashboard.audit_logs.events.manual_change_droplets","manualRemoveBan":"staff.dashboard.audit_logs.events.manual_remove_ban","manualPhoneVerification":"staff.dashboard.audit_logs.events.manual_phone_verification","anticheatBan":"staff.dashboard.audit_logs.events.anticheat_ban","anticheatRemoveBan":"staff.dashboard.audit_logs.events.anticheat_remove_ban","deleteAllSessions":"staff.dashboard.audit_logs.events.delete_all_sessions","permissionsUpdate":"staff.dashboard.audit_logs.events.permissions_update","changeUsername":"staff.dashboard.audit_logs.events.change_username","banWave":"staff.dashboard.audit_logs.events.ban_wave","changeEmail":"staff.dashboard.audit_logs.events.change_email","acceptAppeal":"staff.dashboard.audit_logs.events.accept_appeal","denyAppeal":"staff.dashboard.audit_logs.events.deny_appeal","revertTicketRequest":"staff.dashboard.audit_logs.events.revert_ticket_request","revertTicketApprove":"staff.dashboard.audit_logs.events.revert_ticket_approve","revertTicketDeny":"staff.dashboard.audit_logs.events.revert_ticket_deny","removePicture":"staff.dashboard.audit_logs.events.remove_picture","rerollAvatar":"staff.dashboard.audit_logs.events.reroll_avatar","resolveTicket":"staff.dashboard.audit_logs.events.re_solve_ticket","reviewTicket":"staff.dashboard.audit_logs.events.review_ticket","autoReviewBanRemoveBan":"staff.dashboard.audit_logs.events.auto_review_ban_remove_ban","resolveAccountConflict":"staff.dashboard.audit_logs.events.resolve_account_conflict","allianceModeration":"staff.dashboard.audit_logs.events.alliance_moderation","userNoteCreated":"staff.dashboard.audit_logs.events.user_note_created","ticketAssigned":"staff.dashboard.audit_logs.events.ticket_assigned","ticketResolved":"staff.dashboard.audit_logs.events.ticket_resolved","appealAssigned":"staff.dashboard.audit_logs.events.appeal_assigned","punishmentCacheReloadRequested":"staff.dashboard.audit_logs.events.punishment_cache_reload_requested","canvasPixelBatchQueued":"staff.dashboard.audit_logs.events.canvas_pixel_batch_queued","canvasAreaReversed":"staff.dashboard.audit_logs.events.canvas_area_reversed","pixelProtectionChanged":"staff.dashboard.audit_logs.events.pixel_protection_changed","canvasAutoPaintQueued":"staff.dashboard.audit_logs.events.canvas_auto_paint_queued","cosmeticCreated":"staff.dashboard.audit_logs.events.cosmetic_created","cosmeticUpdated":"staff.dashboard.audit_logs.events.cosmetic_updated","cosmeticDeleted":"staff.dashboard.audit_logs.events.cosmetic_deleted","badgeCreated":"staff.dashboard.audit_logs.events.badge_created","badgeUpdated":"staff.dashboard.audit_logs.events.badge_updated","badgeDeleted":"staff.dashboard.audit_logs.events.badge_deleted","storeImageUploaded":"staff.dashboard.audit_logs.events.store_image_uploaded","storeImageDeleted":"staff.dashboard.audit_logs.events.store_image_deleted","businessInfiniteChargesUpdated":"staff.dashboard.audit_logs.events.business_infinite_charges_updated","businessMembershipUpdated":"staff.dashboard.audit_logs.events.business_membership_updated","businessPaintRestrictionsUpdated":"staff.dashboard.audit_logs.events.business_paint_restrictions_updated","userCosmeticGranted":"staff.dashboard.audit_logs.events.user_cosmetic_granted","userCosmeticRemoved":"staff.dashboard.audit_logs.events.user_cosmetic_removed","userCosmeticRefunded":"staff.dashboard.audit_logs.events.user_cosmetic_refunded","userBadgeGranted":"staff.dashboard.audit_logs.events.user_badge_granted","userBadgeRemoved":"staff.dashboard.audit_logs.events.user_badge_removed"}},"banAppeals":{"see":"staff.dashboard.ban_appeals.see"},"kpi":{"tickets":"staff.dashboard.kpi.tickets","onboarding":"staff.dashboard.kpi.onboarding"},"allTickets":{"see":"staff.dashboard.all_tickets.see","review":"staff.dashboard.all_tickets.review"},"storeManager":{"frames":"staff.dashboard.store_manager.frames","fonts":"staff.dashboard.store_manager.fonts","styles":"staff.dashboard.store_manager.styles","badges":"staff.dashboard.store_manager.badges"},"anticheat":{"see":"staff.dashboard.anticheat.see","unban":"staff.dashboard.anticheat.unban","ban":"staff.dashboard.anticheat.ban"}},"tickets":{"assign":"staff.tickets.assign","closedToday":"staff.tickets.closed_today","openCount":"staff.tickets.open_count","translate":"staff.tickets.translate","setStatus":"staff.tickets.set_status","revert":"staff.tickets.revert","revertReview":"staff.tickets.revert_review","reSolve":"staff.tickets.re_solve"},"appeals":{"assign":"staff.appeals.assign","openCount":"staff.appeals.open_count","ticketsHistory":"staff.appeals.tickets_history","notes_get":"staff.appeals.notes_get","notes_set":"staff.appeals.notes_set","translate":"staff.appeals.translate","solve":"staff.appeals.solve"},"tools":{"selectArea":{"timeout":"staff.tools.select_area.timeout","ban":"staff.tools.select_area.ban","clear":"staff.tools.select_area.clear","info":"staff.tools.select_area.info","phoneVerification":"staff.tools.select_area.phone_verification","reverse":"staff.tools.select_area.reverse","timelapse":"staff.tools.select_area.timelapse"},"selectPixel":{"timeout":"staff.tools.select_pixel.timeout","ban":"staff.tools.select_pixel.ban","seeRole":"staff.tools.select_pixel.see_role","seePunishment":"staff.tools.select_pixel.see_punishment"},"autoPainter":{"paint":"staff.tools.auto_painter.paint","missing":"staff.tools.auto_painter.missing","incorrect":"staff.tools.auto_painter.incorrect","showOnLeaderboard":"staff.tools.auto_painter.show_on_leaderboard","transparent":"staff.tools.auto_painter.transparent","noCharges":"staff.tools.auto_painter.no_charges","asUser":"staff.tools.auto_painter.as_user","noSizeLimit":"staff.tools.auto_painter.no_size_limit"},"wayback":"staff.tools.wayback"},"ui":{"themeDarkMode":"staff.ui.theme.dark_mode","tooglePixelArt":"staff.ui.toggle_pixel_art"},"cosmetics":{"viewCosmetics":"staff.cosmetics.view_cosmetics","manageCosmetics":"staff.cosmetics.manage_cosmetics","assignCosmetics":"staff.cosmetics.assign_cosmetics"},"payments":{"switchCheckoutProvider":"staff.payments.switch_checkout_provider"}}`),
    settings: {
      tools: {
        wayback: {
          limit: 1e4,
          hqLimit: 5e3
        }
      }
    },
    moderation: {
      areaRadius: 250
    },
    alliance: {
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
      headquartersMaxChargeCostCoins: [5, 5, 5, 10, 10, 10, 15, 15, 15, 30, 30, 30, 50],
      headquartersChargeCooldownCostCoins: [10, 10, 15, 15, 25, 50, 100],
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
    }
  },
  Zs = I,
  Qs = I.seasons,
  $s = I.seasons.length - 1,
  ec = I.seasons[$s].zoom,
  tc = I.seasons[$s].tileSize,
  nc = I.permissions,
  rc = I.settings,
  ic = I.platforms.android,
  ac = ic.googlePlayBilling.price;

function oc(e) {
  return Zs.countries[e - 1]
}

function sc(e) {
  return sc.map.get(e)
}(function(e) {
  e.map = cc(e.sharedProducts = Object.entries(Zs.products).map(([e, t]) => ({
    ...t,
    productId: e
  })).filter(e => `lookupKey` in e), e => e.lookupKey)
})(sc || (sc = {}));

function cc(e, t) {
  let n = new Map;
  for (let r in e) {
    let i = Reflect.get(e, r),
      a = t(i, r, e);
    n.set(a, i)
  }
  return n
}
var lc = 5e3,
  uc = 4,
  L = 64,
  dc = 8;

function fc(e) {
  let t = Array.isArray(e.locations) ? e.locations.map(t => ({
    ...t,
    opacity: t.opacity ?? e.opacity,
    colorMetric: t.colorMetric ?? e.colorMetric,
    dithering: t.dithering ?? e.dithering,
    colorPaletteMode: t.colorPaletteMode ?? e.colorPaletteMode,
    pixelMode: t.pixelMode ?? e.pixelMode
  })) : [];
  return {
    ...e,
    imageRevision: e.imageRevision ?? e.updatedAt,
    thumbnailRevision: e.thumbnailRevision ?? e.imageRevision ?? e.updatedAt,
    sizeBytes: e.sizeBytes ?? 0,
    audienceRoles: Array.isArray(e.audienceRoles) ? e.audienceRoles : e.audienceRole ? [e.audienceRole] : [],
    audienceUserIds: Array.isArray(e.audienceUserIds) ? e.audienceUserIds : [],
    locations: t
  }
}

function pc(e) {
  let t = e.maxX - e.minX + 1,
    n = e.maxY - e.minY + 1;
  if (t <= 0 || n <= 0) return [];
  let r = Math.min(t, lc),
    i = Math.max(1, Math.floor(lc / r)),
    a = [];
  for (let t = e.minY; t <= e.maxY; t += i)
    for (let n = e.minX; n <= e.maxX; n += r) a.push({
      minX: n,
      minY: t,
      maxX: Math.min(e.maxX, n + r - 1),
      maxY: Math.min(e.maxY, t + i - 1)
    });
  return a
}

function mc(e) {
  let t = [],
    n = Math.floor(e.minX / L),
    r = Math.floor(e.maxX / L),
    i = Math.floor(e.minY / L),
    a = Math.floor(e.maxY / L);
  for (let o = i; o <= a; o += 1)
    for (let i = n; i <= r; i += 1) t.push({
      minX: Math.max(e.minX, i * L),
      minY: Math.max(e.minY, o * L),
      maxX: Math.min(e.maxX, (i + 1) * L - 1),
      maxY: Math.min(e.maxY, (o + 1) * L - 1)
    });
  return t
}

function hc(e) {
  let t = (e == null ? void 0 : e.role) ?? (e == null ? void 0 : e.alliance_role);
  return t === `mod` || t === `admin` || t === `leader` ? t : `member`
}

function gc(e) {
  return class extends e {
    async getAlliance() {
      let e = await this.request(`/alliance`, {
        credentials: `include`
      });
      if (e.status === N.OK) return e.json();
      if (e.status !== N.NOT_FOUND) throw Error(m.unexpected_server_error())
    }
    async createAlliance(e) {
      let t = await this.request(`/alliance`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          name: e
        })
      });
      if (t.status === N.OK) return t.json();
      if (t.status === N.BAD_REQUEST) {
        let e = await t.json();
        throw e.error === `max_characters` ? new F(m.alliance_name_exceeded_the_maximum_number_of_characters(), t.status) : e.error === `invalid_name` ? new F(m.invalid_name(), t.status) : e.error === `name_taken` ? new F(m.alliance_name_already_taken(), t.status) : e.error == `empty_name` ? new F(m.alliance_with_empty_name(), t.status) : new F(m.unexpected_server_error(), t.status)
      }
      throw t.status === N.FORBIDDEN ? (await t.json().catch(() => ({}))).error === `not_enough_droplets` ? Error(m.not_enough_droplets()) : Error(m.you_are_already_in_an_alliance()) : Error(m.unexpected_server_error())
    }
    async leaveAlliance() {
      if ((await this.request(`/alliance/leave`, {
          method: `POST`,
          credentials: `include`
        })).status !== N.OK) throw Error(m.unexpected_server_error())
    }
    async updateAllianceDescription(e) {
      let t = await this.request(`/alliance/update-description`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          description: e
        })
      });
      if (t.status === N.OK) return t.json();
      if (t.status === N.FORBIDDEN) throw Error(m.you_are_not_allowed_to_do_this());
      if (t.status === N.BAD_REQUEST) {
        let e = await t.json().catch(() => ({}));
        throw Error(e.error === `invalid_markdown` ? m.alliance_description_invalid_markdown() : m.exceeded_max_chars())
      }
      throw t.status === N.CONFLICT ? Error(m.alliance_description_credit_required()) : Error(m.unexpected_server_error())
    }
    async getAllianceStore() {
      let e = await this.request(`/alliance/store`, {
        credentials: `include`
      });
      if (e.status === N.OK) return e.json();
      throw Error(m.unexpected_server_error())
    }
    async getAllianceCoinLedger(e) {
      let t = e ? `?before=${e}` : ``,
        n = await this.request(`/alliance/economy/ledger${t}`, {
          credentials: `include`
        });
      if (n.status === N.OK) return n.json();
      throw Error(m.unexpected_server_error())
    }
    async donateToAlliance(e, t) {
      let n = await this.request(`/alliance/economy/donate`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          droplets: e,
          idempotencyKey: t
        })
      });
      if (n.status === N.OK) return n.json();
      let r = await n.json().catch(() => ({}));
      throw r.error === `not_enough_droplets` ? Error(m.not_enough_droplets()) : r.error === `invalid_donation` ? Error(m.alliance_donation_invalid()) : Error(m.unexpected_server_error())
    }
    async purchaseAllianceItem(e) {
      let t = await this.request(`/alliance/economy/purchase`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          itemKey: e,
          idempotencyKey: crypto.randomUUID()
        })
      });
      if (t.status === N.OK) return t.json();
      let n = await t.json().catch(() => ({}));
      throw n.error === `not_enough_alliance_coins` ? Error(m.alliance_not_enough_coins()) : n.error === `already_unlocked` ? Error(m.alliance_already_unlocked()) : n.error === `headquarters_not_unlocked` ? Error(m.alliance_hq_not_unlocked()) : n.error === `headquarters_upgrade_prerequisite` ? Error(m.alliance_hq_upgrade_prerequisite()) : n.error === `template_upgrade_prerequisite` ? Error(m.alliance_template_upgrade_prerequisite()) : Error(m.unexpected_server_error())
    }
    async getAllianceTemplates(e) {
      let t = new URLSearchParams;
      e && (t.set(`target`, e.target), e.draftId !== void 0 && t.set(`draftId`, String(e.draftId)));
      let n = await this.request(`/alliance/templates${t.size?`?${t}`:``}`, {
        credentials: `include`
      });
      if (n.status === N.OK) {
        let e = await n.json();
        return {
          ...e,
          templates: (e.templates ?? []).map(fc),
          usedBytes: e.usedBytes ?? 0,
          byteLimit: e.byteLimit ?? 67108864,
          draftOptions: e.draftOptions ?? []
        }
      }
      throw Error(m.unexpected_server_error())
    }
    async createAllianceTemplate(e, t) {
      let n = new FormData;
      n.set(`idempotencyKey`, t), n.set(`name`, e.name), n.set(`audienceAllMembers`, String(e.audienceAllMembers)), n.set(`audienceRoles`, JSON.stringify(e.audienceRoles ?? [])), n.set(`audienceUserIds`, JSON.stringify(e.audienceUserIds ?? [])), n.set(`locations`, JSON.stringify(e.locations)), n.set(`opacity`, String(e.opacity)), n.set(`colorMetric`, e.colorMetric), n.set(`dithering`, String(e.dithering)), n.set(`colorPaletteMode`, e.colorPaletteMode), n.set(`pixelMode`, e.pixelMode), n.set(`image`, e.image, `alliance-template.png`);
      let r = await this.request(`/alliance/templates`, {
        method: `POST`,
        credentials: `include`,
        body: n
      });
      if (r.status === N.CREATED || r.status === N.OK) return fc(await r.json());
      let i = await r.json().catch(() => ({}));
      throw i.error === `template_limit_reached` ? Error(m.alliance_template_limit_reached()) : i.error === `template_storage_limit_reached` ? Error(m.alliance_template_storage_limit_reached()) : i.error === `invalid_template_image` ? Error(m.alliance_template_invalid_image()) : i.error === `template_upload_rate_limited` ? Error(m.alliance_template_upload_rate_limited()) : r.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async patchAllianceTemplateMetadata(e, t) {
      let n = await this.request(`/alliance/templates/${e}`, {
        method: `PATCH`,
        credentials: `include`,
        headers: {
          "Content-Type": `application/json`
        },
        body: JSON.stringify(t)
      });
      if (n.status === N.OK) return fc(await n.json());
      throw (await n.json().catch(() => ({}))).error === `template_upload_rate_limited` ? Error(m.alliance_template_upload_rate_limited()) : n.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async patchAllianceTemplatePlacement(e, t) {
      let n = await this.request(`/alliance/templates/${e}/placement`, {
        method: `PATCH`,
        credentials: `include`,
        headers: {
          "Content-Type": `application/json`
        },
        body: JSON.stringify(t)
      });
      if (n.status === N.OK) return n.json();
      let r = await n.json().catch(() => ({}));
      throw r.error === `invalid_template_placement` ? Error(m.alliance_template_invalid_placement()) : r.error === `template_location_not_selected` ? Error(m.alliance_template_location_not_selected()) : n.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async updateAllianceTemplate(e, t) {
      let n = new FormData;
      n.set(`name`, t.name), n.set(`audienceAllMembers`, String(t.audienceAllMembers)), n.set(`audienceRoles`, JSON.stringify(t.audienceRoles ?? [])), n.set(`audienceUserIds`, JSON.stringify(t.audienceUserIds ?? [])), n.set(`locations`, JSON.stringify(t.locations)), n.set(`opacity`, String(t.opacity)), n.set(`colorMetric`, t.colorMetric), n.set(`dithering`, String(t.dithering)), n.set(`colorPaletteMode`, t.colorPaletteMode), n.set(`pixelMode`, t.pixelMode), n.set(`image`, t.image, `alliance-template.png`), t.expectedImageRevision && n.set(`expectedImageRevision`, t.expectedImageRevision), t.expectedUpdatedAt && n.set(`expectedUpdatedAt`, t.expectedUpdatedAt);
      let r = await this.request(`/alliance/templates/${e}`, {
        method: `PUT`,
        credentials: `include`,
        body: n
      });
      if (r.status === N.OK) return fc(await r.json());
      let i = await r.json().catch(() => ({}));
      throw i.error === `template_image_changed` ? Error(m.alliance_template_image_changed()) : i.error === `template_storage_limit_reached` ? Error(m.alliance_template_storage_limit_reached()) : i.error === `invalid_template_image` ? Error(m.alliance_template_invalid_image()) : i.error === `template_upload_rate_limited` ? Error(m.alliance_template_upload_rate_limited()) : r.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async deleteAllianceTemplate(e) {
      let t = await this.request(`/alliance/templates/${e}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== N.NO_CONTENT) throw t.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async renameOwnAlliance(e) {
      let t = await this.request(`/alliance/rename`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          name: e,
          idempotencyKey: crypto.randomUUID()
        })
      });
      if (t.status === N.OK) return t.json();
      let n = await t.json().catch(() => ({}));
      throw n.error === `not_enough_alliance_coins` ? Error(m.alliance_not_enough_coins()) : n.error === `invalid_name` ? Error(m.invalid_name()) : n.error === `name_taken` ? Error(m.alliance_name_already_taken()) : n.error === `name_unchanged` ? Error(m.alliance_name_unchanged()) : n.error === `max_characters` ? Error(m.alliance_name_exceeded_the_maximum_number_of_characters()) : Error(m.unexpected_server_error())
    }
    async getAllianceAssets(e) {
      let t = await this.request(`/alliance/assets/${e}`, {
        credentials: `include`
      });
      if (t.status === N.OK) return t.json();
      throw Error(m.unexpected_server_error())
    }
    async createAllianceAssetDraft(e, t) {
      let n = await this.request(`/alliance/assets/${e}/drafts`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          idempotencyKey: crypto.randomUUID(),
          ...t ? {
            sourceVersionId: t
          } : {}
        })
      });
      if (n.status === N.OK) return n.json();
      throw (await n.json().catch(() => ({}))).error === `not_enough_alliance_coins` ? Error(m.alliance_not_enough_coins()) : Error(m.unexpected_server_error())
    }
    async getAllianceAssetCanvas(e) {
      let t = await this.request(`/alliance/assets/drafts/${e}/canvas`, {
        credentials: `include`
      });
      if (t.status === N.OK) return t.json();
      throw Error(m.unexpected_server_error())
    }
    async getAllianceAssetRevision(e) {
      let t = await this.request(`/alliance/assets/drafts/${e}/canvas?metadataOnly=true`, {
        credentials: `include`
      });
      if (t.status === N.OK) return t.json();
      if (t.status !== N.FORBIDDEN && t.status !== N.NOT_FOUND) throw Error(m.unexpected_server_error())
    }
    async paintAllianceAsset(e, t) {
      let n = JSON.stringify({
          pixels: t
        }),
        r = await this.request(`/alliance/assets/drafts/${e}/paint`, {
          method: `POST`,
          credentials: `include`,
          headers: await $.getHeaders(n),
          body: n
        }).catch(e => {
          throw e instanceof P ? new P(m.alliance_asset_paint_rate_limited()) : e
        });
      if (r.status === N.OK) return r.json();
      let i = await r.json().catch(() => ({}));
      if (i.error === `challenge-required` && i.tier) {
        if (await fs(i.tier)) return this.paintAllianceAsset(e, t);
        throw Error(m.challenge_verification_not_completed())
      }
      if (i.error === `verification-required`) {
        let n = await Bo().get();
        if (!n.sealed_result) throw Error(m.unexpected_server_error());
        return await this.verifyAnticheat(n.sealed_result), this.paintAllianceAsset(e, t)
      }
      throw i.error === `color-not-owned` ? Error(m.alliance_better_pallet_required()) : Error(m.unexpected_server_error())
    }
    async finishAllianceAssetDraft(e, t) {
      let n = await this.request(`/alliance/assets/drafts/${e}/finish`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          publish: t
        })
      });
      if (n.status === N.OK) return n.json();
      throw Error(m.unexpected_server_error())
    }
    async equipAllianceAssetVersion(e) {
      if ((await this.request(`/alliance/assets/versions/${e}/select`, {
          method: `POST`,
          credentials: `include`
        })).status !== N.OK) throw Error(m.unexpected_server_error())
    }
    async unequipAllianceAsset(e) {
      if ((await this.request(`/alliance/assets/${e}/unpublish`, {
          method: `POST`,
          credentials: `include`
        })).status !== N.OK) throw Error(m.unexpected_server_error())
    }
    async deleteAllianceAssetVersion(e) {
      let t = await this.request(`/alliance/assets/versions/${e}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw (await t.json().catch(() => ({}))).error === `asset_version_selected` ? Error(m.alliance_asset_unequip_before_delete()) : Error(m.unexpected_server_error())
    }
    async getAllianceAssetEditors(e) {
      let t = await this.request(`/alliance/assets/drafts/${e}/editors`, {
        credentials: `include`
      });
      if (t.status === N.OK) return t.json();
      throw Error(m.unexpected_server_error())
    }
    async grantAllianceAssetEditor(e, t) {
      let n = await this.request(`/alliance/assets/drafts/${e}/editors`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userId: t
        })
      });
      if (n.status !== N.OK) throw (await n.json().catch(() => ({}))).error === `editor_already_granted` ? Error(m.alliance_asset_editor_already_added()) : Error(m.unexpected_server_error())
    }
    async revokeAllianceAssetEditor(e, t) {
      if ((await this.request(`/alliance/assets/drafts/${e}/editors/${t}`, {
          method: `DELETE`,
          credentials: `include`
        })).status !== N.OK) throw Error(m.unexpected_server_error())
    }
    async copyAllianceAssetEditors(e, t) {
      let n = await this.request(`/alliance/assets/drafts/${e}/editors/copy`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          sourceDraftId: t
        })
      });
      if (n.status === N.OK) return n.json();
      throw Error(m.unexpected_server_error())
    }
    async getAllianceAwards(e, t = 0) {
      let n = await this.request(`/alliances/${e}/awards?page=${t}`, {});
      if (n.status === N.OK) return n.json();
      throw Error(m.unexpected_server_error())
    }
    async setAllianceFeaturedAwards(e) {
      if ((await this.request(`/alliance/awards/featured`, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify({
            awardKeys: e
          })
        })).status !== N.OK) throw Error(m.unexpected_server_error())
    }
    async updateAllianceHeadquarters(e, t) {
      let n = await this.request(`/alliance/update-headquarters`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          latitude: e,
          longitude: t
        })
      });
      if (n.status === N.OK) return;
      if (n.status === N.FORBIDDEN) throw Error(m.you_are_not_allowed_to_do_this());
      let r = await n.json().catch(() => ({}));
      throw r.error === `headquarters_credit_required` ? Error(m.alliance_hq_credit_required()) : r.error === `headquarters_not_unlocked` ? Error(m.alliance_hq_not_unlocked()) : r.error === `seven_seals_area` ? Error(m.alliance_hq_seven_seals_area()) : r.error === `headquarters_locked` ? Error(m.alliance_hq_locked()) : Error(m.unexpected_server_error())
    }
    async getAllianceHeadquarters() {
      let e = await this.request(`/alliance/headquarters`, {
        credentials: `include`
      });
      if (e.status === N.OK) return e.json();
      throw Error(m.unexpected_server_error())
    }
    async getAllianceHeadquartersCanvas(e = {}) {
      let t = new URLSearchParams;
      e.metadataOnly && t.set(`metadataOnly`, `true`), e.viewport && (t.set(`minX`, String(e.viewport.minX)), t.set(`minY`, String(e.viewport.minY)), t.set(`maxX`, String(e.viewport.maxX)), t.set(`maxY`, String(e.viewport.maxY)));
      let n = t.size > 0 ? `?${t}` : ``,
        r = await this.request(`/alliance/headquarters/canvas${n}`, {
          credentials: `include`,
          signal: e.signal
        });
      if (r.status === N.OK) return r.json();
      throw Error(m.unexpected_server_error())
    }
    async getAllianceHeadquartersManifest(e = {}) {
      return this.getAllianceHeadquartersManifestAt(`/alliance/headquarters/manifest`, e)
    }
    async getPublicAllianceHeadquartersManifest(e, t = {}) {
      return this.getAllianceHeadquartersManifestAt(`/alliances/${e}/headquarters/manifest`, t)
    }
    async getAllianceHeadquartersManifestAt(e, t) {
      let n = new URLSearchParams;
      t.metadataOnly && n.set(`metadataOnly`, `true`), t.viewport && (n.set(`minX`, String(t.viewport.minX)), n.set(`minY`, String(t.viewport.minY)), n.set(`maxX`, String(t.viewport.maxX)), n.set(`maxY`, String(t.viewport.maxY)));
      let r = n.size > 0 ? `?${n}` : ``,
        i = await this.request(`${e}${r}`, {
          credentials: `include`,
          signal: t.signal
        });
      if (i.status === N.OK) return i.json();
      throw new F(m.unexpected_server_error(), i.status)
    }
    async getAllianceHeadquartersSnapshot(e, t, n) {
      return this.getAllianceHeadquartersSnapshotAt(`/alliance/headquarters/snapshot`, e, t, `include`, n)
    }
    async getPublicAllianceHeadquartersSnapshot(e, t, n, r) {
      return this.getAllianceHeadquartersSnapshotAt(`/alliances/${e}/headquarters/snapshot`, t, n, `omit`, r)
    }
    async getAllianceHeadquartersSnapshotAt(e, t, n, r, i) {
      let a = await this.request(e, {
        method: `POST`,
        credentials: r,
        headers: {
          "Content-Type": `application/json`
        },
        body: JSON.stringify({
          ...t,
          knownTiles: n
        }),
        signal: i
      });
      if (a.status === N.OK) return a.arrayBuffer();
      throw new F(m.unexpected_server_error(), a.status)
    }
    async unlockAllianceHeadquarters(e) {
      let t = await this.request(`/alliance/headquarters/unlock`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          idempotencyKey: crypto.randomUUID(),
          ...e ?? {}
        })
      });
      if (t.status === N.OK) return t.json();
      let n = await t.json().catch(() => ({}));
      throw n.error === `not_enough_alliance_coins` ? Error(m.alliance_not_enough_coins()) : n.error === `already_unlocked` ? Error(m.alliance_already_unlocked()) : n.error === `headquarters_anchor_required` ? Error(m.alliance_hq_anchor_required()) : n.error === `seven_seals_area` ? Error(m.alliance_hq_seven_seals_area()) : Error(m.unexpected_server_error())
    }
    async expandAllianceHeadquarters(e) {
      let t = await this.request(`/alliance/headquarters/expand`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          idempotencyKey: crypto.randomUUID(),
          size: e
        })
      });
      if (t.status === N.OK) return t.json();
      let n = await t.json().catch(() => ({}));
      throw n.error === `not_enough_alliance_coins` ? Error(m.alliance_not_enough_coins()) : n.error === `headquarters_size_prerequisite` ? Error(m.alliance_hq_size_prerequisite()) : Error(m.unexpected_server_error())
    }
    async paintAllianceHeadquarters(e, t = crypto.randomUUID()) {
      let n = JSON.stringify({
          batchId: t,
          pixels: e
        }),
        r = await this.request(`/alliance/headquarters/paint`, {
          method: `POST`,
          credentials: `include`,
          headers: await $.getHeaders(n),
          body: n
        }).catch(e => {
          throw e instanceof P ? new P(m.alliance_asset_paint_rate_limited()) : e
        });
      if (r.status === N.OK) return r.json();
      let i = await r.json().catch(() => ({}));
      if (i.error === `challenge-required` && i.tier) {
        if (await fs(i.tier)) return this.paintAllianceHeadquarters(e, t);
        throw Error(m.challenge_verification_not_completed())
      }
      if (i.error === `verification-required`) {
        let n = await Bo().get();
        if (!n.sealed_result) throw Error(m.unexpected_server_error());
        return await this.verifyAnticheat(n.sealed_result), this.paintAllianceHeadquarters(e, t)
      }
      throw i.error === `color-not-owned` ? Error(m.alliance_better_pallet_required()) : i.error === `not_enough_hq_charges` ? Error(m.alliance_hq_not_enough_charges()) : i.error === `headquarters_timed_out` ? Error(m.alliance_hq_timed_out_error()) : i.error === `headquarters_locked` ? Error(m.alliance_hq_locked()) : i.error === `no_pixel_changes` ? Error(m.alliance_hq_no_pixel_changes()) : Error(m.unexpected_server_error())
    }
    async getAllianceHqPixelInfo(e, t) {
      let n = await this.request(`/alliance/headquarters/pixel?x=${e}&y=${t}`, {
        credentials: `include`
      });
      if (n.status === N.OK) return n.json();
      throw Error(m.unexpected_server_error())
    }
    async getAllianceHqLeaderboard(e) {
      let t = await this.request(`/alliance/headquarters/leaderboard/${e}`, {
        credentials: `include`
      });
      if (t.status === N.OK) return t.json();
      throw t.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.alliance_hq_leaderboard_load_failed())
    }
    async getAllianceHqTimeouts(e) {
      let t = e ? `?before=${e}` : ``,
        n = await this.request(`/alliance/headquarters/timeouts${t}`, {
          credentials: `include`
        });
      if (n.status === N.OK) return n.json();
      throw Error(m.unexpected_server_error())
    }
    async createAllianceHqTimeout(e, t, n) {
      let r = await this.request(`/alliance/headquarters/timeouts`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userId: e,
          duration: t,
          reason: n
        })
      });
      if (r.status === N.OK) return r.json();
      if (r.status === N.FORBIDDEN) throw Error(m.you_are_not_allowed_to_do_this());
      let i = await r.json().catch(() => ({}));
      throw i.error === `headquarters_timeout_active` ? Error(m.alliance_hq_timeout_already_active()) : i.error === `invalid_timeout_reason` ? Error(m.alliance_hq_timeout_reason_required()) : Error(m.unexpected_server_error())
    }
    async revokeAllianceHqTimeout(e, t) {
      let n = await this.request(`/alliance/headquarters/timeouts/${e}`, {
        method: `DELETE`,
        credentials: `include`,
        body: JSON.stringify({
          reason: t
        })
      });
      if (n.status === N.OK) return;
      if (n.status === N.FORBIDDEN) throw Error(m.you_are_not_allowed_to_do_this());
      let r = await n.json().catch(() => ({}));
      throw r.error === `headquarters_timeout_inactive` ? Error(m.alliance_hq_timeout_inactive()) : r.error === `invalid_timeout_reason` ? Error(m.alliance_hq_timeout_reason_required()) : Error(m.unexpected_server_error())
    }
    async getPublicAllianceHeadquarters(e) {
      let t = await this.request(`/alliances/${e}/headquarters`, {});
      if (t.status === N.OK) return t.json();
      if (t.status !== N.NOT_FOUND) throw Error(m.unexpected_server_error())
    }
    async allianceLeaderboard(e) {
      let t = await this.request(`/alliance/leaderboard/${e}`, {
        credentials: `include`
      });
      if (t.status === N.OK) return t.json();
      throw t.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.leaderboard_disabled_temporarily())
    }
    async getAllianceInvites() {
      let e = await this.request(`/alliance/invites`, {
        credentials: `include`
      });
      if (e.status === N.OK) return e.json();
      throw e.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async createAllianceInvite(e) {
      let t = await this.request(`/alliance/invites`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          durationDays: e.durationDays,
          maxUses: e.maxUses ?? null
        })
      });
      if (t.status === N.OK) return t.json();
      throw t.status === N.BAD_REQUEST ? (await t.json().catch(() => ({}))).error === `max_invites` ? Error(m.alliance_invite_limit_reached()) : Error(m.unexpected_server_error()) : t.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async revokeAllianceInvite(e) {
      let t = await this.request(`/alliance/invites/${e}/revoke`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw t.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async getAllianceGallery(e) {
      let t = new URLSearchParams({
        sort: e.sort,
        page: String(e.page)
      });
      e.query && t.set(`q`, e.query), e.joinPolicy && t.set(`joinPolicy`, e.joinPolicy);
      let n = await this.request(`/alliances?${t.toString()}`, {});
      if (n.status === N.OK) return n.json();
      throw Error(m.unexpected_server_error())
    }
    async getPublicAllianceHeadquartersPins(e) {
      let t = new URLSearchParams({
          minLat: e.minLat.toFixed(5),
          maxLat: e.maxLat.toFixed(5),
          minLng: e.minLng.toFixed(5),
          maxLng: e.maxLng.toFixed(5)
        }),
        n = await this.request(`/alliances/headquarters/pins?${t.toString()}`, {});
      if (n.status === N.OK) return n.json();
      throw Error(m.unexpected_server_error())
    }
    async getPublicAlliance(e) {
      let t = await this.request(`/alliances/${e}`, {});
      if (t.status === N.OK) return t.json();
      if (t.status !== N.NOT_FOUND) throw Error(m.unexpected_server_error())
    }
    async getPublicAllianceMembers(e, t) {
      let n = new URLSearchParams({
        page: String(t.page),
        role: t.role,
        sort: t.sort
      });
      t.query && n.set(`q`, t.query);
      let r = await this.request(`/alliances/${e}/members?${n.toString()}`, {});
      if (r.status === N.OK) return r.json();
      throw Error(m.unexpected_server_error())
    }
    async getAllianceViewerState(e) {
      let t = await this.request(`/alliances/${e}/viewer`, {
        credentials: `include`
      });
      if (t.status === N.OK) return t.json();
      if (t.status !== N.UNAUTHORIZED) throw Error(m.unexpected_server_error())
    }
    async directJoinAlliance(e) {
      let t = await this.request(`/alliances/${e}/join`, {
        method: `POST`,
        credentials: `include`
      });
      return this.mapJoinOutcome(t)
    }
    async requestJoinAlliance(e) {
      let t = await this.request(`/alliances/${e}/request`, {
        method: `POST`,
        credentials: `include`
      });
      return t.status === N.TOO_MANY_REQUESTS ? `cooldown` : this.mapJoinOutcome(t)
    }
    async mapJoinOutcome(e) {
      switch (e.status) {
        case N.OK:
          return `success`;
        case N.FORBIDDEN:
          return (await e.json().catch(() => ({}))).error === `banned` ? `banned` : `policy`;
        case N.CONFLICT:
          return `in-alliance`;
        case N.NOT_FOUND:
          return `not-found`;
        default:
          return `error`
      }
    }
    async cancelAllianceJoinRequest(e) {
      let t = await this.request(`/alliance/join-requests/${e}/cancel`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== N.OK && t.status !== N.CONFLICT) throw Error(m.unexpected_server_error())
    }
    async getAllianceJoinRequests(e) {
      let t = await this.request(`/alliance/join-requests?page=${e}`, {
        credentials: `include`
      });
      if (t.status === N.OK) return t.json();
      throw t.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async reviewAllianceJoinRequest(e, t) {
      let n = await this.request(`/alliance/join-requests/${e}/review`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          accept: t
        })
      });
      if (n.status === N.OK) return `success`;
      if (n.status === N.CONFLICT) return `stale`;
      throw n.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async kickAllianceMember(e) {
      let t = await this.request(`/alliance/kick`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          kickedUserId: e
        })
      });
      if (t.status !== N.OK) throw t.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async removeAllianceAdmin(e) {
      let t = await this.request(`/alliance/remove-admin`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          demotedUserId: e
        })
      });
      if (t.status !== N.OK) throw t.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async setOwnAllianceMemberRole(e, t) {
      let n = await this.request(`/alliance/members/${e}/role`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          role: t
        })
      });
      if (n.status !== N.OK) throw n.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async getAllianceRolePermissions() {
      let e = await this.request(`/alliance/role-permissions`, {
        credentials: `include`
      });
      if (e.status === N.OK) return e.json();
      throw e.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async updateAllianceRolePermissions(e) {
      let t = await this.request(`/alliance/role-permissions`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          roles: e
        })
      });
      if (t.status !== N.OK) throw t.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async transferAllianceLeadership(e) {
      let t = await this.request(`/alliance/transfer-leadership`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          newLeaderUserId: e
        })
      });
      if (t.status !== N.OK) throw t.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async updateAllianceSettings(e) {
      let t = await this.request(`/alliance/settings`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== N.OK) throw t.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async setAllianceDiscordInvite(e) {
      let t = await this.request(`/alliance/discord-invite`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          url: e
        })
      });
      if (t.status !== N.OK) throw t.status === N.BAD_REQUEST ? Error(m.alliance_discord_invite_invalid()) : t.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async getAllianceActivity(e) {
      let t = e ? `?cursor=${e}` : ``,
        n = await this.request(`/alliance/activity${t}`, {
          credentials: `include`
        });
      if (n.status === N.OK) return n.json();
      throw n.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async reportAlliance(e) {
      let t = JSON.stringify({
          allianceId: e.allianceId,
          target: e.target,
          targetId: e.targetId ?? 0,
          eventHwm: e.eventHwm,
          area: e.area,
          zoom: e.zoom,
          viewport: e.viewport,
          reason: e.reason,
          notes: e.notes ?? ``
        }),
        n = await this.request(`/report/alliance`, {
          method: `POST`,
          credentials: `include`,
          headers: await $.getHeaders(t),
          body: t
        });
      if (n.status === N.OK || n.status === N.FORBIDDEN) {
        let t = await n.json().catch(() => ({}));
        if ((t == null ? void 0 : t.reason) === `target_cooldown`) throw Error(m.alliance_report_cooldown());
        if (n.status === N.OK && typeof(t == null ? void 0 : t.success) == `boolean`) return t;
        if (n.status === N.FORBIDDEN && (t == null ? void 0 : t.error) === `challenge-required` && t.tier) {
          if (await fs(t.tier)) return this.reportAlliance(e);
          throw Error(m.challenge_verification_not_completed())
        }
      }
      throw Error(m.report_failed())
    }
    async joinAlliance(e) {
      switch ((await this.request(`/alliance/join/${e}`, {
          method: `POST`,
          credentials: `include`
        })).status) {
        case N.OK:
          return `success`;
        case N.ALREADY_REPORTED:
          return `in-another-alliance`;
        case N.UNAUTHORIZED:
          return `not-logged-in`;
        case N.FORBIDDEN:
          return `banned`;
        case N.BAD_REQUEST:
        case N.NOT_FOUND:
          return `invalid-invite`;
        default:
          return `error`
      }
    }
    async getAllianceMembers(e) {
      let t = new URLSearchParams({
        role: e.role,
        sort: e.sort
      });
      e.query && t.set(`q`, e.query);
      let n = await this.request(`/alliance/members/${e.page}?${t.toString()}`, {
        credentials: `include`
      });
      if (n.status === N.OK) return n.json();
      throw Error(m.unexpected_server_error())
    }
    async getAllianceBannedMembers(e) {
      let t = new URLSearchParams({
        sort: e.sort
      });
      e.query && t.set(`q`, e.query);
      let n = await this.request(`/alliance/members/banned/${e.page}?${t.toString()}`, {
        credentials: `include`
      });
      if (n.status === N.OK) return n.json();
      throw Error(m.unexpected_server_error())
    }
    async getAllianceById(e) {
      let t = await this.request(`/staff/dashboard/alliances/${e}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status === N.NOT_FOUND) return;
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      let n = await t.json();
      return {
        id: Number(n.id),
        name: String(n.name),
        avatarSeed: (n == null ? void 0 : n.avatarSeed) || void 0,
        pictureVersionId: (n == null ? void 0 : n.pictureVersionId) ?? void 0,
        pixelsPainted: Number((n == null ? void 0 : n.pixels_painted) ?? 0)
      }
    }
    async searchAlliance(e) {
      let t = new URLSearchParams({
          q: e
        }),
        n = await this.request(`/staff/dashboard/alliances/search?${t.toString()}`, {
          method: `GET`,
          credentials: `include`
        });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      let r = await n.json();
      return (Array.isArray(r) ? r : []).map(e => ({
        id: Number(e.id),
        name: String(e.name ?? ``),
        avatarSeed: (e == null ? void 0 : e.avatarSeed) || void 0,
        pictureVersionId: (e == null ? void 0 : e.pictureVersionId) ?? void 0,
        pixelsPainted: Number((e == null ? void 0 : e.pixels_painted) ?? 0)
      }))
    }
    async searchAlliances(e) {
      return this.searchAlliance(e)
    }
    async getAdminAllianceAwards(e) {
      let t = await this.request(`/staff/dashboard/alliances/${e}/awards`, {
        credentials: `include`
      });
      if (t.status === N.OK) return t.json();
      throw Error(m.unexpected_server_error())
    }
    async getAdminAllianceTemplates(e) {
      let t = await this.request(`/staff/dashboard/alliances/${e}/templates`, {
        credentials: `include`
      });
      if (t.status === N.OK) return t.json();
      throw new F(m.unexpected_server_error(), t.status)
    }
    async getAdminAllianceAssets(e) {
      let t = await this.request(`/staff/dashboard/alliances/${e}/assets`, {
        credentials: `include`
      });
      if (t.status === N.OK) return t.json();
      throw Error(m.unexpected_server_error())
    }
    async getAdminAllianceAssetEvents(e, t, n) {
      let r = n ? `?before=${n}` : ``,
        i = await this.request(`/staff/dashboard/alliances/${e}/assets/drafts/${t}/events${r}`, {
          credentials: `include`
        });
      if (i.status === N.OK) return i.json();
      throw Error(m.unexpected_server_error())
    }
    async moderateAdminAllianceAssetVersion(e, t, n, r) {
      if ((await this.request(`/staff/dashboard/alliances/${e}/assets/versions/${t}/moderation`, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify({
            ...n,
            reason: r
          })
        })).status !== N.OK) throw Error(m.unexpected_server_error())
    }
    async moderateAdminAllianceAssetDraft(e, t, n, r) {
      if ((await this.request(`/staff/dashboard/alliances/${e}/assets/drafts/${t}/moderation`, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify({
            ...n,
            reason: r
          })
        })).status !== N.OK) throw Error(m.unexpected_server_error())
    }
    async getAllianceHqWaybackEvents(e, t) {
      let n = new URLSearchParams;
      n.set(`limit`, String((t == null ? void 0 : t.limit) ?? rc.tools.wayback.hqLimit)), t != null && t.before && n.set(`before`, String(t.before)), t != null && t.area && (n.set(`minX`, String(t.area.minX)), n.set(`minY`, String(t.area.minY)), n.set(`maxX`, String(t.area.maxX)), n.set(`maxY`, String(t.area.maxY)));
      let r = await this.request(`/staff/dashboard/alliances/${e}/headquarters/events?${n.toString()}`, {
        credentials: `include`
      });
      if (r.status === N.NOT_FOUND) throw Error(m.alliances_not_found());
      if (r.status !== N.OK) throw Error(m.unexpected_server_error());
      return r.json()
    }
    async getAdminAllianceHqArea(e, t) {
      let n = pc(t);
      if (n.length === 0) throw Error(m.unexpected_server_error());
      let r = await this.getAdminAllianceHqAreaChunk(e, n[0]),
        i = [...r.pixels];
      for (let t = 1; t < n.length; t += uc) {
        let a = await Promise.all(n.slice(t, t + uc).map(t => this.getAdminAllianceHqAreaChunk(e, t, r.eventHwm)));
        for (let e of a) i.push(...e.pixels)
      }
      return {
        ...r,
        bounds: t,
        pixels: i
      }
    }
    async getAdminAllianceHqSelectArea(e, t, n) {
      var r;
      let i = mc(t),
        a = Array(i.length),
        o = 0,
        s = Array.from({
          length: Math.min(dc, i.length)
        }, async () => {
          for (; o < i.length;) {
            let t = o;
            o += 1, a[t] = await this.getAdminAllianceHqSelectAreaChunk(e, i[t], n)
          }
        });
      return await Promise.all(s), {
        bounds: t,
        eventHwm: n,
        anchor: (r = a[0]) == null ? void 0 : r.anchor,
        chunks: a
      }
    }
    async getAdminAllianceHqSelectAreaChunk(e, t, n) {
      let r = new URLSearchParams({
          minX: String(t.minX),
          minY: String(t.minY),
          maxX: String(t.maxX),
          maxY: String(t.maxY),
          eventHwm: String(n),
          format: `compact`
        }),
        i = await this.request(`/staff/dashboard/alliances/${e}/headquarters/area?${r.toString()}`, {
          credentials: `include`
        });
      if (i.status !== N.OK) throw Error(m.unexpected_server_error());
      let a = await i.arrayBuffer(),
        o = (t.maxX - t.minX + 1) * (t.maxY - t.minY + 1);
      if (a.byteLength !== o * 13) throw Error(m.unexpected_server_error());
      let s = new DataView(a),
        c = new Uint32Array(o),
        l = new Uint8Array(o),
        u = new BigUint64Array(o);
      for (let e = 0; e < o; e += 1) {
        let t = e * 13;
        c[e] = s.getUint32(t, !0), l[e] = s.getUint8(t + 4), u[e] = s.getBigUint64(t + 5, !0)
      }
      let d = i.headers.get(`X-Alliance-Canvas-Anchor-Latitude`),
        f = i.headers.get(`X-Alliance-Canvas-Anchor-Longitude`),
        p = Number(d),
        ee = Number(f);
      return {
        bounds: t,
        paintedBy: c,
        colors: l,
        eventIds: u,
        anchor: d !== null && f !== null && Number.isFinite(p) && Number.isFinite(ee) ? {
          latitude: p,
          longitude: ee
        } : void 0
      }
    }
    async getAdminAllianceHqAreaChunk(e, t, n) {
      let r = new URLSearchParams({
        minX: String(t.minX),
        minY: String(t.minY),
        maxX: String(t.maxX),
        maxY: String(t.maxY)
      });
      n !== void 0 && r.set(`eventHwm`, String(n));
      let i = await this.request(`/staff/dashboard/alliances/${e}/headquarters/area?${r.toString()}`, {
        credentials: `include`
      });
      if (i.status === N.CONTENT_TOO_LARGE || i.status !== N.OK) throw Error(m.unexpected_server_error());
      return i.json()
    }
    async reverseAdminAllianceHqPixels(e, t, n, r = !1) {
      let i = 0,
        a = 0;
      for (let o = 0; o < t.length; o += lc) {
        let s = await this.reverseAdminAllianceHqPixelChunk(e, t.slice(o, o + lc), n, r);
        i += s.reversed, a = s.eventHwm
      }
      return {
        reversed: i,
        cleared: r,
        eventHwm: a
      }
    }
    async reverseAdminAllianceHqPixelChunk(e, t, n, r) {
      let i = await this.request(`/staff/dashboard/alliances/${e}/headquarters/reverse`, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify({
            pixels: t,
            reason: n,
            clear: r
          })
        }),
        a = await i.json().catch(() => ({}));
      if (i.status === N.CONTENT_TOO_LARGE) throw Error(m.alliance_hq_select_area_history_too_large());
      if (i.status === N.NOT_FOUND) throw Error(m.reverse_no_modifications());
      if (i.status !== N.OK) throw Error(m.unexpected_server_error());
      return a
    }
    async getAllianceFull(e) {
      let t = await this.request(`/staff/dashboard/alliances/${e}/full`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status === N.NOT_FOUND) return null;
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      let n = await t.json(),
        r = Array.isArray(n == null ? void 0 : n.members) ? n.members : [];
      return {
        rolePermissions: (n == null ? void 0 : n.rolePermissions) ?? void 0,
        id: Number(n == null ? void 0 : n.id),
        name: String((n == null ? void 0 : n.name) ?? ``),
        status: (n == null ? void 0 : n.status) === `archived` ? `archived` : `active`,
        createdAt: (n == null ? void 0 : n.createdAt) ?? null,
        archivedAt: (n == null ? void 0 : n.archivedAt) ?? null,
        activeSince: (n == null ? void 0 : n.activeSince) ?? null,
        lastActivityAt: (n == null ? void 0 : n.lastActivityAt) ?? null,
        description: (n == null ? void 0 : n.description) ?? null,
        descriptionMode: (n == null ? void 0 : n.descriptionMode) === `markdown` ? `markdown` : `plain`,
        avatarSeed: (n == null ? void 0 : n.avatarSeed) ?? void 0,
        discoverability: (n == null ? void 0 : n.discoverability) === `unlisted` ? `unlisted` : `public`,
        joinPolicy: (n == null ? void 0 : n.joinPolicy) === `open` || (n == null ? void 0 : n.joinPolicy) === `invite_only` ? n.joinPolicy : `request`,
        inviteMinRole: (n == null ? void 0 : n.inviteMinRole) === `member` || (n == null ? void 0 : n.inviteMinRole) === `leader` ? n.inviteMinRole : `admin`,
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
        membersCount: Number((n == null ? void 0 : n.membersCount) ?? r.length),
        coinBalance: Number((n == null ? void 0 : n.coinBalance) ?? 0),
        unlockKeys: Array.isArray(n == null ? void 0 : n.unlockKeys) ? n.unlockKeys.map(String) : [],
        currentPictureVersionId: (n == null ? void 0 : n.currentPictureVersionId) ?? null,
        currentBannerVersionId: (n == null ? void 0 : n.currentBannerVersionId) ?? null,
        discordInviteRevisionId: (n == null ? void 0 : n.discordInviteRevisionId) ?? null,
        discordInviteUrl: (n == null ? void 0 : n.discordInviteUrl) ?? null,
        discordInviteModerationState: (n == null ? void 0 : n.discordInviteModerationState) ?? null,
        members: r.map(e => ({
          id: Number(e == null ? void 0 : e.id),
          name: String((e == null ? void 0 : e.name) ?? `#${e==null?void 0:e.id}`),
          picture: (e == null ? void 0 : e.picture) ?? null,
          avatarSeed: (e == null ? void 0 : e.avatarSeed) ?? void 0,
          pixelsPainted: Number((e == null ? void 0 : e.pixelsPainted) ?? (e == null ? void 0 : e.pixels_painted) ?? 0),
          lastPixelLatitude: (e == null ? void 0 : e.lastPixelLatitude) ?? null,
          lastPixelLongitude: (e == null ? void 0 : e.lastPixelLongitude) ?? null,
          role: hc(e),
          timedOut: !!(e != null && e.timedOut),
          banned: !!(e != null && e.banned)
        }))
      }
    }
    async getAdminAllianceMembers(e, t) {
      let n = new URLSearchParams({
        page: String(t.page),
        pageSize: String(t.pageSize),
        role: t.role,
        status: t.status,
        sort: t.sort
      });
      t.query && n.set(`q`, t.query);
      let r = await this.request(`/staff/dashboard/alliances/${e}/members?${n.toString()}`, {
        method: `GET`,
        credentials: `include`
      });
      if (r.status === N.NOT_FOUND) return {
        members: [],
        total: 0,
        filteredTotal: 0
      };
      if (r.status !== N.OK) throw new F(m.unexpected_server_error(), r.status);
      let i = await r.json(),
        a = Array.isArray(i == null ? void 0 : i.members) ? i.members : [];
      return {
        members: a.map(e => ({
          id: Number(e == null ? void 0 : e.id),
          name: String((e == null ? void 0 : e.name) ?? `#${e==null?void 0:e.id}`),
          picture: (e == null ? void 0 : e.picture) ?? null,
          avatarSeed: (e == null ? void 0 : e.avatarSeed) ?? void 0,
          pixelsPainted: Number((e == null ? void 0 : e.pixelsPainted) ?? (e == null ? void 0 : e.pixels_painted) ?? 0),
          lastPixelLatitude: (e == null ? void 0 : e.lastPixelLatitude) ?? null,
          lastPixelLongitude: (e == null ? void 0 : e.lastPixelLongitude) ?? null,
          role: hc(e),
          timedOut: !!(e != null && e.timedOut),
          banned: !!(e != null && e.banned)
        })),
        total: Number((i == null ? void 0 : i.total) ?? a.length),
        filteredTotal: Number((i == null ? void 0 : i.filteredTotal) ?? (i == null ? void 0 : i.total) ?? a.length)
      }
    }
    async renameAlliance(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/rename`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          name: t
        })
      });
      if (n.status === N.BAD_REQUEST || n.status === N.CONFLICT) {
        let e = await n.json().catch(() => ({}));
        switch (e == null ? void 0 : e.error) {
          case `invalid_name`:
            throw Error(m.invalid_name());
          case `name_taken`:
            throw Error(m.alliance_name_already_taken());
          case `name_unchanged`:
            throw Error(m.alliance_name_unchanged());
          case `max_characters`:
            throw Error(m.alliance_name_exceeded_the_maximum_number_of_characters());
          case `empty_name`:
            throw Error(m.alliance_with_empty_name());
          default:
            throw Error(m.unexpected_server_error())
        }
      } else if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status)
    }
    async updateAdminAllianceDescription(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/description`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          description: t
        })
      });
      if (n.status === N.OK) return n.json();
      if (n.status === N.BAD_REQUEST) {
        let e = await n.json().catch(() => ({}));
        throw Error(e.error === `invalid_markdown` ? m.alliance_description_invalid_markdown() : m.exceeded_max_chars())
      }
      throw new F(m.unexpected_server_error(), n.status)
    }
    async changeAllianceLeader(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/leader`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          newLeaderUserId: t
        })
      });
      if (n.status === N.BAD_REQUEST) {
        let e = await n.json();
        throw (e == null ? void 0 : e.error) === `user_not_in_alliance` ? Error(m.leader_must_be_in_alliance()) : Error(m.unexpected_server_error())
      }
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status)
    }
    async getAllianceBanTargets(e) {
      let t = await this.request(`/staff/dashboard/alliances/${e}/ban-targets`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
    async banAllAllianceMembers(e, t, n) {
      let r = await this.request(`/staff/dashboard/alliances/${e}/ban-all`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          reason: t,
          notes: n
        })
      });
      if (r.status !== N.OK) throw new F(m.unexpected_server_error(), r.status)
    }
    async setAllianceMemberRole(e, t, n) {
      let r = await this.request(`/staff/dashboard/alliances/${e}/members/${t}/role`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          role: n
        })
      });
      if (r.status !== N.OK) throw new F(m.unexpected_server_error(), r.status)
    }
    async removeAllianceMember(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/members/${t}/remove`, {
        method: `POST`,
        credentials: `include`
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status)
    }
    async getAdminAllianceRevisions(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/revisions?kind=${t}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return n.json()
    }
    async hideAdminAllianceRevision(e, t, n) {
      let r = await this.request(`/staff/dashboard/alliances/${e}/revisions/hide`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          kind: t,
          revisionId: n
        })
      });
      if (r.status !== N.OK) throw new F(m.unexpected_server_error(), r.status)
    }
    async suspendAdminAllianceVisibility(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/suspend-visibility`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          discoverability: t
        })
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status)
    }
    async moderateAdminAllianceHeadquarters(e, t, n) {
      let r = await this.request(`/staff/dashboard/alliances/${e}/headquarters/moderation`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          locked: t,
          reason: n
        })
      });
      if (r.status === N.NOT_FOUND) throw Error(m.alliance_ticket_no_headquarters());
      if (r.status !== N.OK) throw new F(m.unexpected_server_error(), r.status)
    }
    async restoreAdminAlliance(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/restore`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          newLeaderUserId: t
        })
      });
      if (n.status === N.BAD_REQUEST) {
        let e = await n.json().catch(() => ({}));
        throw (e == null ? void 0 : e.error) === `user_not_found` ? Error(m.alliances_invalid_id()) : (e == null ? void 0 : e.error) === `user_already_in_alliance` ? Error(m.alliance_staff_restore_leader_in_alliance()) : (e == null ? void 0 : e.error) === `alliance_not_archived` ? Error(m.alliance_staff_restore_not_archived()) : Error(m.unexpected_server_error())
      }
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status)
    }
    async archiveAdminAlliance(e) {
      let t = await this.request(`/staff/dashboard/alliances/${e}/archive`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status)
    }
    async punishAdminAllianceMembers(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/punish-members`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userIds: t.userIds,
          punishmentType: t.punishmentType,
          reason: t.reason,
          ticketId: t.ticketId ?? ``,
          notes: t.notes ?? ``
        })
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status)
    }
    async giveAllianceAdmin(e) {
      let t = await this.request(`/alliance/give-admin`, {
        body: JSON.stringify({
          promotedUserId: e
        }),
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw t.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async banAllianceUser(e) {
      let t = await this.request(`/alliance/ban`, {
        body: JSON.stringify({
          bannedUserId: e
        }),
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw t.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
    async equipFlag(e) {
      if ((await this.request(`/flag/equip/${e}`, {
          method: `POST`,
          credentials: `include`
        })).status !== N.OK) throw Error(m.unexpected_server_error())
    }
    async unbanAllianceUser(e) {
      let t = await this.request(`/alliance/unban`, {
        body: JSON.stringify({
          unbannedUserId: e
        }),
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw t.status === N.FORBIDDEN ? Error(m.you_are_not_allowed_to_do_this()) : Error(m.unexpected_server_error())
    }
  }
}
var _c = [`None`, `PoW`, `Turnstile`, `hCaptcha`, `OTP`];

function vc(e) {
  return class extends e {
    async getUserAnticheat(e) {
      let t = await this.request(`/staff/dashboard/users/anticheat?id=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return await t.json()
    }
    async getAnticheatStats(e, t) {
      let n = await this.request(`/staff/dashboard/anticheat/stats?from=${e}&to=${t}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return n.json()
    }
    async getAnticheatSignals(e, t) {
      let n = await this.request(`/staff/dashboard/anticheat/signals?from=${e}&to=${t}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return n.json()
    }
    async getAnticheatUserJourney(e, t, n) {
      let r = await this.request(`/staff/dashboard/anticheat/user/${e}?from=${t}&to=${n}`, {
        method: `GET`,
        credentials: `include`
      });
      if (r.status !== N.OK) throw new F(m.unexpected_server_error(), r.status);
      return r.json()
    }
    async getAnticheatLive() {
      let e = await this.request(`/staff/dashboard/anticheat/live`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      return e.json()
    }
    async getAnticheatShadow(e, t) {
      let n = await this.request(`/staff/dashboard/anticheat/shadow?from=${encodeURIComponent(e)}&to=${encodeURIComponent(t)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return n.json()
    }
    async getAnticheatSignalAnalysis(e, t, n) {
      let r = await this.request(`/staff/dashboard/anticheat/signal/${encodeURIComponent(e)}?from=${encodeURIComponent(t)}&to=${encodeURIComponent(n)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (r.status !== N.OK) throw new F(m.unexpected_server_error(), r.status);
      return r.json()
    }
    async getAnticheatJson(e, t = {}) {
      let n = new URLSearchParams(t).toString(),
        r = await this.request(`/staff/dashboard/anticheat/${e}${n?`?${n}`:``}`, {
          method: `GET`,
          credentials: `include`
        });
      if (r.status !== N.OK) throw new F(m.unexpected_server_error(), r.status);
      return r.json()
    }
    getAnticheatHealth() {
      return this.getAnticheatJson(`health`)
    }
    getAnticheatDrift() {
      return this.getAnticheatJson(`drift`)
    }
    getAnticheatOutcomes(e, t) {
      return this.getAnticheatJson(`outcomes`, {
        from: e,
        to: t
      })
    }
    getAnticheatBots(e, t) {
      return this.getAnticheatJson(`bots`, {
        from: e,
        to: t
      })
    }
    getAnticheatNetwork(e, t) {
      return this.getAnticheatJson(`network`, {
        from: e,
        to: t
      })
    }
    getAnticheatAutoBans(e, t, n) {
      let r = {
        from: e,
        to: t,
        status: n.status,
        phone: n.phone
      };
      return n.any.length > 0 && (r.any = n.any.join(`,`)), n.none.length > 0 && (r.none = n.none.join(`,`)), n.only.length > 0 && (r.only = n.only.join(`,`)), n.maxSignals != null && (r.maxSignals = String(n.maxSignals)), n.minSpend != null && (r.minSpend = String(n.minSpend)), n.maxSpend != null && (r.maxSpend = String(n.maxSpend)), this.getAnticheatJson(`autobans`, r)
    }
    async postAnticheatTuning(e) {
      let t = await this.request(`/staff/dashboard/anticheat/tuning`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
  }
}

function yc(e) {
  return class extends e {
    async autoReviewBan(e) {
      let t = await this.request(`/staff/dashboard/users/auto-review-ban`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userId: e
        })
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return await t.json()
    }
    async getUserAppeals(e) {
      let t = new URLSearchParams;
      t.set(`userId`, String(e.userId)), t.set(`kind`, e.kind), e.page !== void 0 && t.set(`page`, String(e.page)), e.pageSize !== void 0 && t.set(`pageSize`, String(e.pageSize)), e.sortBy && t.set(`sortBy`, e.sortBy), e.sortDir && t.set(`sortDir`, e.sortDir);
      let n = await this.request(`/staff/dashboard/users/appeals?${t.toString()}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      let r = await n.json(),
        i = Array.isArray(r == null ? void 0 : r.appeals) ? r.appeals : [];
      return {
        appeals: i,
        total: typeof(r == null ? void 0 : r.total) == `number` ? r.total : i.length
      }
    }
    async submitBanAppeal(e, t) {
      let n = JSON.stringify(t ? {
          message: e,
          ticketId: t
        } : {
          message: e
        }),
        r = await $.getHeaders(n),
        i = await this.request(`/report/appeal`, {
          method: `POST`,
          credentials: `include`,
          body: n,
          headers: r
        });
      if (i.status === N.FORBIDDEN) {
        let n = await i.json();
        if ((n == null ? void 0 : n.error) === `challenge-required` && n.tier) {
          if (await fs(n.tier)) return this.submitBanAppeal(e, t);
          throw new F(m.challenge_verification_not_completed(), i.status)
        }
      }
      if (i.status !== N.OK && i.status !== N.ALREADY_REPORTED) throw new F(m.unexpected_server_error(), i.status);
      return i.status
    }
    async getOpenAppeals() {
      let e = await this.request(`/staff/appeals/get`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      return e.json()
    }
    async postSolveAppeal(e, t) {
      let n = await this.request(`/staff/appeals/${e}/handle`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          approved: t
        })
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return await n.json()
    }
    async getUserLastAppeal() {
      let e = await this.request(`/me/last-appeal`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      let t = await e.json();
      return (t == null ? void 0 : t.appealDate) ?? null
    }
    async assignAppeals() {
      let e = await this.request(`/staff/appeals/assign`, {
        method: `POST`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      return await e.json()
    }
    async getPendingAppealsCount() {
      let e = await this.request(`/staff/appeals/open_count`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      let t = await e.json();
      return (t == null ? void 0 : t.appeals) ?? 0
    }
  }
}

function bc(e) {
  return class extends e {
    async getDeviceAttestChallenge() {
      let e = await this.request(`/device/attest/challenge`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      return (await e.json()).challenge
    }
    async postDeviceAttest(e, t) {
      let n = await this.request(`/device/attest`, {
        method: `POST`,
        credentials: `include`,
        headers: {
          "Content-Type": `application/json`
        },
        body: JSON.stringify({
          challenge: e,
          attestation: t
        })
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status)
    }
    async getDevicePreauthChallenge() {
      let e = await this.request(`/device/preauth/challenge`, {
        method: `GET`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      return (await e.json()).challenge
    }
    async postDevicePreauth(e) {
      let t = await this.request(`/device/preauth`, {
        method: `POST`,
        headers: {
          "Content-Type": `application/json`
        },
        body: JSON.stringify(e)
      });
      if (t.status !== N.OK) throw new F(await t.json().then(e => e.error).catch(() => void 0) ?? m.unexpected_server_error(), t.status);
      return (await t.json()).ticket
    }
    async postDeviceCheck(e) {
      let t = await this.request(`/device/check`, {
        method: `POST`,
        credentials: `include`,
        headers: {
          "Content-Type": `application/json`
        },
        body: JSON.stringify({
          token: e
        })
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status)
    }
    async getAppStoreAccountToken(e) {
      let t = await this.request(`/payment/appstore/account-token`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          challenge: e
        })
      });
      if (t.status !== N.OK) throw Error(m.unexpected_server_error());
      return (await t.json()).token
    }
    async getAppStoreConsumptionConsent(e) {
      let t = await this.request(`/payment/appstore/consumption-consent`, {
        method: `GET`,
        credentials: `include`,
        signal: e
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
    async setAppStoreConsumptionConsent(e) {
      let t = await this.request(`/payment/appstore/consumption-consent`, {
        method: `POST`,
        credentials: `include`,
        headers: {
          "Content-Type": `application/json`
        },
        body: JSON.stringify({
          granted: e,
          version: `1`
        })
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
    async verifyAppStorePurchase(e) {
      let t = await this.request(`/payment/appstore/verify`, {
        method: `POST`,
        credentials: `include`,
        headers: {
          "Content-Type": `application/json`
        },
        body: JSON.stringify({
          transactionId: e
        })
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
  }
}
async function xc(e) {
  let t = await e.json().catch(() => null);
  return new F((t == null ? void 0 : t.error) === `cosmetic_tag_exists` ? m.store_mgr_tag_exists() : (t == null ? void 0 : t.error) === `invalid_cosmetic_tag` ? m.store_mgr_tag_invalid() : (t == null ? void 0 : t.error) === `cosmetic_tag_immutable` ? m.store_mgr_tag_immutable() : m.unexpected_server_error(), e.status)
}

function Sc(e) {
  return class extends e {
    async getUserFrames() {
      let e = await this.request(`/me/frames`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      return e.json()
    }
    async postEquipUserFrame(e) {
      let t = await this.request(`/me/frames/equip/${e}`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status)
    }
    async getUserBadges() {
      let e = await this.request(`/me/badges`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      return e.json()
    }
    async postEquipUserBadge(e) {
      let t = await this.request(`/me/badges/equip`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status)
    }
    async getStoreFrames() {
      let e = await this.request(`/store/frames`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      return e.json()
    }
    async postBuyUserFrame(e) {
      let t = await this.request(`/store/frames/buy/${e}`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status === N.NOT_FOUND) throw Error(m.couldnt_complete_the_purchase_this_item_doesnt_exist());
      if (t.status === N.FORBIDDEN) throw Error(m.you_do_not_have_enough_droplets_to_buy_this_item());
      if (t.status === N.CONFLICT) throw Error(m.you_already_have_this_item());
      if (t.status !== N.OK) throw Error(m.unexpected_server_error())
    }
    async postEquipCosmetics(e) {
      let t = await this.request(`/me/cosmetic/equip`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status)
    }
    async getStoreNameCosmetics() {
      let e = await this.request(`/store/name`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      return await e.json()
    }
    async postBuyCosmetic(e) {
      let t = await this.request(`/store/name/buy/${e}`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status)
    }
    async getMyNameCosmetics() {
      let e = await this.request(`/me/cosmetics/name`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      return await e.json()
    }
    async postCreateFrame(e) {
      let t = new FormData;
      t.append(`name`, e.name), t.append(`tag`, e.tag), e.image && t.append(`image`, e.image), e.assetKey && t.append(`assetKey`, e.assetKey), t.append(`description`, e.description), t.append(`rarity`, e.rarity), t.append(`priceCurrency`, e.priceCurrency), t.append(`purchasable`, e.purchasable.toString()), t.append(`allowedRoles`, JSON.stringify(e.allowedRoles));
      let n = await this.request(`/staff/store-manager/frames`, {
        method: `POST`,
        credentials: `include`,
        body: t
      });
      if (n.status !== N.OK) throw await xc(n);
      return n.json()
    }
    async postCreateFont(e) {
      let t = await this.request(`/staff/store-manager/fonts`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== N.OK) throw await xc(t);
      return t.json()
    }
    async postCreateStyle(e) {
      let t = await this.request(`/staff/store-manager/styles`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== N.OK) throw await xc(t);
      return t.json()
    }
    async getAdminCosmetics(e) {
      let t = new URLSearchParams({
        page: String(e.page),
        pageSize: String(e.pageSize)
      });
      e.type && t.set(`type`, e.type), e.search && t.set(`search`, e.search), e.visibility && t.set(`visibility`, e.visibility);
      let n = await this.request(`/staff/store-manager/cosmetics?${t.toString()}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return n.json()
    }
    async putAdminCosmetic(e, t) {
      let n = await this.request(`/staff/store-manager/cosmetics/${e}`, {
        method: `PUT`,
        credentials: `include`,
        body: JSON.stringify(t)
      });
      if (n.status !== N.OK) throw await xc(n);
      return n.json()
    }
    async deleteAdminCosmetic(e) {
      let t = await this.request(`/staff/store-manager/cosmetics/${e}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status)
    }
    async getAdminBadges(e) {
      let t = new URLSearchParams;
      e && t.set(`search`, e);
      let n = t.size ? `?${t.toString()}` : ``,
        r = await this.request(`/staff/store-manager/badges${n}`, {
          method: `GET`,
          credentials: `include`
        });
      if (r.status !== N.OK) throw new F(m.unexpected_server_error(), r.status);
      return r.json()
    }
    async postAdminBadge(e) {
      let t = await this.request(`/staff/store-manager/badges`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
    async putAdminBadge(e, t) {
      let n = await this.request(`/staff/store-manager/badges/${e}`, {
        method: `PUT`,
        credentials: `include`,
        body: JSON.stringify(t)
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return n.json()
    }
    async deleteAdminBadge(e) {
      let t = await this.request(`/staff/store-manager/badges/${e}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status)
    }
    async getR2Images(e) {
      let t = new URLSearchParams({
          page: String(e.page),
          pageSize: String(e.pageSize)
        }),
        n = await this.request(`/staff/store-manager/images?${t.toString()}`, {
          method: `GET`,
          credentials: `include`
        });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return n.json()
    }
    async postUploadR2Image(e) {
      let t = new FormData;
      e.name && t.append(`name`, e.name), t.append(`image`, e.image);
      let n = await this.request(`/staff/store-manager/images`, {
        method: `POST`,
        credentials: `include`,
        body: t
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return n.json()
    }
    async deleteR2Image(e) {
      let t = await this.request(`/staff/store-manager/images/${e}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status)
    }
  }
}
var R = {
  day: 864e5,
  hour: 36e5,
  minute: 6e4,
  second: 1e3,
  millisecond: 1
};

function Cc(e) {
  let t = Math.floor(e / R.hour);
  e -= t * R.hour;
  let n = Math.floor(e / R.minute);
  e -= n * R.minute;
  let r = Math.floor(e / R.second).toString().padStart(2, `0`);
  return t > 0 ? `${t}:${n.toString().padStart(2,`0`)}:${r}` : `${n}:${r}`
}

function wc(e) {
  return `${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)} ${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}:${String(e.getSeconds()).padStart(2,`0`)}`
}
var Tc = 30 * R.minute;

function Ec(e) {
  return class extends e {
    constructor(...e) {
      super(...e), s(this, `lastHotspotRequestAt`, 0)
    }
    async leaderboardPlayers(e, t = 0, n = 0) {
      let r = new URLSearchParams;
      t && r.set(`country`, String(t)), n && r.set(`region`, String(n));
      let i = await this.request(`/leaderboard/player/${e}${r.size?`?${r}`:``}`);
      if (i.status !== N.OK) throw Error(m.leaderboard_disabled_temporarily());
      return i.json()
    }
    async leaderboardPlayerRegions(e, t = ``, n = 0, r) {
      let i = new URLSearchParams({
          country: String(e),
          search: t,
          offset: String(n)
        }),
        a = await this.request(`/leaderboard/player-regions?${i}`, {
          signal: r
        });
      if (a.status !== N.OK) throw Error(m.leaderboard_disabled_temporarily());
      return a.json()
    }
    async leaderboardAlliances(e) {
      let t = await this.request(`/leaderboard/alliance/${e}`);
      if (t.status !== N.OK) throw Error(m.leaderboard_disabled_temporarily());
      return t.json()
    }
    async leaderboardRegions(e, t = 0) {
      let n = await this.request(`/leaderboard/region/${e}/${t}`);
      if (n.status === N.OK) return n.json();
      throw Error(m.leaderboard_disabled_temporarily())
    }
    async leaderboardRegionPlayers(e, t) {
      let n = await this.request(`/leaderboard/region/players/${e}/${t}`);
      if (n.status === N.OK) return n.json();
      throw Error(m.leaderboard_disabled_temporarily())
    }
    async leaderboardRegionAlliances(e, t) {
      let n = await this.request(`/leaderboard/region/alliances/${e}/${t}`);
      if (n.status === N.OK) return n.json();
      throw Error(m.leaderboard_disabled_temporarily())
    }
    async leaderboardCountries(e) {
      let t = await this.request(`/leaderboard/country/${e}`, {
        credentials: `include`
      });
      if (t.status === N.OK) return t.json();
      throw Error(m.leaderboard_disabled_temporarily())
    }
    refreshHotspotsIfStale() {
      Date.now() - this.lastHotspotRequestAt < Tc || (this.lastHotspotRequestAt = Date.now(), this.request(`/map/hotspots`, {
        credentials: `include`,
        keepalive: !0,
        throwOnStatus: !1
      }).catch(() => {
        this.lastHotspotRequestAt = 0
      }))
    }
    async getMapHotspots() {
      let e = await this.request(`/map/hotspots`, {
        credentials: `include`
      });
      return e.status === 200 ? (this.lastHotspotRequestAt = Date.now(), e.json()) : []
    }
    async getRandomTile(e) {
      let t = await this.request(`/s${e}/tile/random`);
      if (t.status !== N.OK) throw Error(m.unexpected_server_error());
      return t.json()
    }
  }
}

function Dc(e) {
  return class extends e {
    async postCaptchaSession(e, t = `include`) {
      let n = await this.request(`/anticheat/captcha/session`, {
        method: `POST`,
        credentials: t,
        body: JSON.stringify(e),
        headers: {
          "x-fp": await Ro()
        }
      });
      if (!n.ok) throw n.status === 500 ? new F(m.unexpected_server_error(), n.status) : new F(m.invalid_captcha(), n.status);
      return n.json()
    }
    postOnboardingExperimentEvent(e) {
      return fetch(`${this.url}/onboarding/experiment/events`, {
        method: `POST`,
        credentials: `include`,
        keepalive: !0,
        body: JSON.stringify(e)
      }).catch(() => void 0)
    }
    async postTelemetry(e, t) {
      return (await this.request(`/frontend/telemetry`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          event: e,
          data: t
        })
      })).status === N.OK
    }
  }
}
var Oc = {
    griefing: m.griefing(),
    "multi-accounting": m.multi_accounting(),
    "hate-speech": m.hate_speech(),
    bot: m.bot(),
    doxxing: m.doxxing(),
    "inappropriate-content": m.inappropriate_content(),
    other: m.breaking_the_rules()
  },
  kc = {
    doxxing: m.doxxing_description(),
    "hate-speech": m.hate_speech_description(),
    griefing: m.griefing_description(),
    "multi-accounting": m.multi_accounting_description(),
    bot: m.bot_description(),
    "inappropriate-content": m.inappropriate_content_description(),
    other: m.breaking_the_rules_description()
  },
  Ac = {
    doxxing: `text-red-600`,
    "hate-speech": `text-red-400`,
    "inappropriate-content": `text-amber-500`,
    "multi-accounting": `text-amber-300`,
    bot: `text-amber-600`,
    griefing: `text-amber-200`,
    other: `text-cyan-600`
  },
  jc = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  Mc = {
    griefing: `topic-2`,
    "inappropriate-content": `topic-1`,
    bot: `topic-3`,
    "multi-accounting": `topic-3`,
    "hate-speech": `topic-1`,
    doxxing: `topic-1`,
    other: ``
  },
  Nc = 365 * R.day;

function Pc(e) {
  if (!e) return null;
  let t = (e instanceof Date ? e : new Date(e)).getTime();
  return Number.isFinite(t) ? t : null
}

function Fc(e, t = Date.now()) {
  let n = Pc(e);
  return n !== null && n - t >= Nc
}

function Ic(e, t = Date.now()) {
  let n = Pc(e);
  if (n === null || n <= t) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  let r = Math.max(0, Math.ceil((n - t) / 6e4));
  return {
    days: Math.floor(r / 1440),
    hours: Math.floor(r % 1440 / 60),
    minutes: r % 60
  }
}
var Lc = [{
  key: `email`,
  example: `email:carlos*`
}, {
  key: `name`,
  example: `name:"Big Ainz"`
}, {
  key: `id`,
  example: `id:42`
}, {
  key: `discord`,
  example: `discord:ainz*`
}, {
  key: `discordid`,
  example: `discordid:298965117994008579`
}, {
  key: `alliance`,
  example: `alliance:pixel*`
}, {
  key: `role`,
  example: `role:admin`
}, {
  key: `provider`,
  example: `provider:google`
}, {
  key: `stripe`,
  example: `stripe:cus_ABC123`
}];

function Rc(e, t) {
  let n = t ?? ``;
  switch (e) {
    case `search_empty`:
      return m.user_search_error_empty();
    case `search_term_too_short`:
      return m.user_search_error_too_short();
    case `search_empty_value`:
      return m.user_search_error_empty_value({
        filter: n
      });
    case `search_unknown_filter`:
      return m.user_search_error_unknown_filter({
        filter: n,
        filters: Lc.map(e => e.key).join(`, `)
      });
    case `search_invalid_value`:
      return m.user_search_error_invalid_value({
        filter: n
      });
    case `search_wildcard_unsupported`:
      return m.user_search_error_wildcard({
        filter: n
      });
    case `search_duplicate_filter`:
      return m.user_search_error_duplicate({
        filter: n
      });
    case `search_too_broad`:
      return m.user_search_error_too_broad();
    case `search_too_long`:
      return m.user_search_error_too_long();
    default:
      return m.unexpected_server_error()
  }
}

function zc(e) {
  return class extends e {
    async getModeratorTickets() {
      let e = await this.request(`/staff/tickets/get`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      let t = await e.json();
      for (let e of t.tickets) e.reports.sort((e, t) => jc[e.reason] - jc[t.reason]);
      return t
    }
    async countMyTicketsClosedToday() {
      let e = await this.request(`/staff/tickets/closed-today`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      return e.json()
    }
    async getOpenTicketsCount() {
      let e = await this.request(`/staff/tickets/open_count`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      let {
        tickets: t
      } = await e.json();
      return t
    }
    async assignNewTickets() {
      let e = await this.request(`/staff/tickets/assign`, {
        method: `POST`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      return e.json()
    }
    async setTicketStatus(e, t, n, r, i) {
      let a = await this.request(`/staff/tickets/set-status`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          ticketId: e,
          status: t,
          selectedReportId: n ?? void 0,
          assignedReason: r,
          ignoreReason: i
        })
      });
      if (a.status !== N.OK && a.status !== N.BAD_REQUEST) throw new F(m.unexpected_server_error(), a.status)
    }
    async getLastResolvedTicket() {
      let e = await this.request(`/staff/tickets/reversals/last-resolved`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      return (await e.json()).ticket
    }
    async getTicketReversalTicketInfo(e) {
      let t = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return (await t.json()).ticket
    }
    async getReporterReportHistory(e, t) {
      let n = await this.request(`/staff/tickets/reporter-history?ticketId=${encodeURIComponent(e)}&reporterId=${t}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return (await n.json()).reports
    }
    async createTicketReversal(e) {
      let t = await this.request(`/staff/tickets/reversals`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status === N.CONFLICT) {
        let e = await t.json().catch(() => ({}));
        throw (e == null ? void 0 : e.error) === `reversal_already_pending` ? new F(m.ticket_reversal_already_pending(), N.CONFLICT) : new F(m.unexpected_server_error(), N.CONFLICT)
      }
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
    async markTicketImproperlySolved(e) {
      let t = await this.request(`/staff/tickets/mark-improperly-solved`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          ticketId: e
        })
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
    async reSolveTicket(e) {
      let t = await this.request(`/staff/tickets/re-solve`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
    async listTicketReversals(e = {}) {
      let t = new URLSearchParams;
      e.status && t.set(`status`, e.status), e.page != null && t.set(`page`, String(e.page)), e.pageSize != null && t.set(`pageSize`, String(e.pageSize));
      let n = `/staff/tickets/reversals${t.toString()?`?${t.toString()}`:``}`,
        r = await this.request(n, {
          method: `GET`,
          credentials: `include`
        });
      if (r.status !== N.OK) throw new F(m.unexpected_server_error(), r.status);
      return (await r.json()).reversals ?? []
    }
    async getTicketReversal(e) {
      let t = await this.request(`/staff/tickets/reversals/${e}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return (await t.json()).reversal
    }
    async reviewTicketReversal(e, t, n) {
      let r = await this.request(`/staff/tickets/reversals/${e}/review`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          decision: t,
          notes: n
        })
      });
      if (r.status === N.FORBIDDEN) throw new F(m.ticket_reversal_cannot_self_review(), N.FORBIDDEN);
      if (r.status === N.CONFLICT) throw new F(m.ticket_reversal_already_reviewed(), N.CONFLICT);
      if (r.status !== N.OK) throw new F(m.unexpected_server_error(), r.status)
    }
    async getOpenTicketsSummary() {
      let e = await this.request(`/staff/dashboard/summary/counters/tickets`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      return e.json()
    }
    async getOpenReportsSummary() {
      let e = await this.request(`/staff/dashboard/summary/counters/reports`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw new F(m.unexpected_server_error(), e.status);
      return e.json()
    }
    async getBanAppealStats(e, t) {
      let n = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(e)}&end=${encodeURIComponent(t)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      let r = await n.json();
      return {
        items: r.items ?? [],
        globals: r.globals
      }
    }
    async getClosedTicketsByMod(e, t) {
      let n = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(e)}&end=${encodeURIComponent(t)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return (await n.json()).items.map(e => ({
        ...e,
        suspensionRate: (e.ban + e.timeout) / e.total
      }))
    }
    async getClosedReportsByMod(e, t) {
      let n = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(e)}&end=${encodeURIComponent(t)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return (await n.json()).items.map(e => ({
        ...e,
        suspensionRate: (e.ban + e.timeout) / e.total
      }))
    }
    async getMultipleUsersInfoById(e) {
      let t = await this.request(`/staff/tools/select-area/users`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userIds: e
        })
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
    async getUserInfoFull(e) {
      let t = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== N.NOT_FOUND) {
        if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
        return t.json()
      }
    }
    async getUsersReportInfo(e) {
      let t = e.filter(e => Number.isFinite(e) && e > 0);
      if (t.length === 0) return [];
      let n = await this.request(`/staff/dashboard/users/info-batch?ids=${encodeURIComponent(t.join(`,`))}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return n.json()
    }
    async searchUsers(e) {
      let t = await this.request(`/staff/dashboard/users/search?q=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status === N.BAD_REQUEST || t.status === N.UNPROCESSABLE_ENTITY) {
        let e = await t.json().catch(() => null);
        throw new F(Rc(e == null ? void 0 : e.error, e == null ? void 0 : e.field), t.status)
      }
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
    async getUserPunishments(e) {
      let t = await this.request(`/staff/dashboard/users/punishments?userId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return (await t.json()).punishments ?? []
    }
    async getPunishmentTicket(e) {
      let t = await this.request(`/staff/dashboard/users/punishment-ticket?ticketId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return (await t.json()).ticket
    }
    async overturnPunishment(e) {
      let t = await this.request(`/staff/dashboard/users/overturn-punishment`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          punishmentId: e
        })
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status)
    }
    async getUserNotes(e, t) {
      let n = t == `dashboard` ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(e)}` : `/staff/appeals/notes?userId=${encodeURIComponent(e)}`,
        r = await this.request(n, {
          method: `GET`,
          credentials: `include`
        });
      if (r.status !== N.OK) throw new F(m.unexpected_server_error(), r.status);
      return r.json()
    }
    async addUserNote(e, t, n) {
      let r = n == `dashboard` ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(e)}` : `/staff/appeals/notes?userId=${encodeURIComponent(e)}`,
        i = await this.request(r, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify({
            userId: e,
            note: t
          })
        });
      if (i.status !== N.OK) throw new F(m.unexpected_server_error(), i.status)
    }
    async getUserPermissions(e) {
      let t = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
    async setUserPermissions(e, t) {
      let n = await this.request(`/staff/dashboard/permissions/set`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userId: e,
          permissions: Array.from(t)
        })
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      let r = await n.json();
      return Array.isArray(r == null ? void 0 : r.permissions) ? r.permissions : []
    }
    async getUserPurchases(e) {
      let t = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      let n = await t.json();
      return (Array.isArray(n == null ? void 0 : n.purchases) ? n.purchases : []).map(e => {
        let t = e.is_dollar ?? e.isDollar ?? e.currency ?? e.Currency ?? 0,
          n;
        if (typeof t == `string`) {
          let e = t.toLowerCase();
          n = e === `usd` || e === `dollar` || e === `true`
        } else n = typeof t == `number` ? t !== 0 : !!t;
        let r = typeof e.createdAt == `string` ? e.createdAt : e.CreatedAt ? new Date(e.CreatedAt).toISOString() : ``,
          i = e.product_variant ?? e.productVariant,
          a = i == null || i === `` ? null : Number(i);
        return {
          product_name: String(e.productName ?? e.product_name ?? ``),
          amount: Number(e.amount ?? 0),
          price: Number(e.price ?? 0),
          is_dollar: n,
          created_at: r,
          product_variant: Number.isInteger(a) ? a : null
        }
      })
    }
    async getUserTickets(e, t) {
      if (t === `appeals` && (e.appealId ?? 0) <= 0) throw Error(`Appeal id is required.`);
      let n = new URLSearchParams;
      n.set(`userId`, String(e.userId)), n.set(`kind`, String(e.kind)), n.set(`page`, String(e.page ?? 0)), n.set(`pageSize`, String(e.pageSize ?? 20)), e.sortBy && n.set(`sortBy`, e.sortBy), e.sortDir && n.set(`sortDir`, e.sortDir), e.status && n.set(`status`, e.status), e.reason && n.set(`reason`, e.reason), t === `appeals` && n.set(`appealId`, String(e.appealId));
      let r = t === `appeals` ? `/staff/appeals/tickets?${n.toString()}` : `/staff/dashboard/users/tickets?${n.toString()}`,
        i = await this.request(r, {
          method: `GET`,
          credentials: `include`
        });
      if (i.status !== N.OK) throw new F(m.unexpected_server_error(), i.status);
      let a = await i.json(),
        o = Array.isArray(a == null ? void 0 : a.tickets) ? a.tickets : [];
      return {
        tickets: o,
        total: typeof(a == null ? void 0 : a.total) == `number` ? a.total : o.length
      }
    }
    async getAllTickets(e) {
      let t = new URLSearchParams;
      t.set(`page`, String(e.page ?? 0)), t.set(`pageSize`, String(e.pageSize ?? 20)), e.modId && t.set(`modId`, String(e.modId)), e.sortBy && t.set(`sortBy`, e.sortBy), e.sortDir && t.set(`sortDir`, e.sortDir), e.status && t.set(`status`, e.status), e.reason && t.set(`reason`, e.reason), e.role && t.set(`role`, e.role), e.reviewed && t.set(`reviewed`, e.reviewed), e.reSolvedOnly && t.set(`reSolvedOnly`, `true`), e.hideSystem && t.set(`hideSystem`, `true`), e.dateFrom && t.set(`dateFrom`, e.dateFrom), e.dateTo && t.set(`dateTo`, e.dateTo);
      let n = await this.request(`/staff/dashboard/all-tickets?${t.toString()}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      let r = await n.json(),
        i = Array.isArray(r == null ? void 0 : r.tickets) ? r.tickets : [],
        a = typeof(r == null ? void 0 : r.total) == `number` ? r.total : i.length;
      return {
        tickets: i,
        total: a,
        matchedTotal: typeof(r == null ? void 0 : r.matchedTotal) == `number` ? r.matchedTotal : a,
        reviewedTotal: typeof(r == null ? void 0 : r.reviewedTotal) == `number` ? r.reviewedTotal : 0
      }
    }
    async reviewTicket(e) {
      let t = await this.request(`/staff/dashboard/all-tickets/review`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
    async getTicketOverturnInfo(e) {
      let t = await this.request(`/staff/dashboard/all-tickets/overturn-info?ticketId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
    async getModerationTranslate(e, t) {
      let n = `/staff/${t}/translate`,
        r = await this.request(n, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify({
            text: e
          })
        });
      if (r.status !== N.OK) throw new F(m.unexpected_server_error(), r.status);
      let i = await r.json();
      return i == null ? void 0 : i.translation
    }
    mapTicketsToReportRows(e, t) {
      let n = [];
      for (let s of e) {
        var r, i, a, o;
        let e = s.status ?? `open`;
        if (t === `received`) {
          for (let t of s.reports) n.push({
            id: String(t.id),
            ticketId: String(s.id),
            createdAt: t.createdAt ?? s.createdAt,
            byUser: {
              id: Number(t.reportedBy),
              name: String(t.reportedByName ?? t.reportedBy),
              picture: t.reportedByPicture ?? null
            },
            reason: String(t.reason),
            status: e
          });
          continue
        }
        if (t === `sent`) {
          for (let t of s.reports) s.reportedUser && n.push({
            id: String(t.id),
            ticketId: String(s.id),
            createdAt: t.createdAt ?? s.createdAt,
            toUser: {
              id: Number(s.reportedUser.id),
              name: String(s.reportedUser.name),
              picture: s.reportedUser.picture ?? null
            },
            reason: String(t.reason),
            status: e
          });
          continue
        }
        n.push({
          id: String(s.id),
          ticketId: String(s.id),
          createdAt: s.createdAt,
          handledBy: s.status && s.status !== `open` ? {
            id: ((r = s.handledBy) == null ? void 0 : r.id) ?? 0,
            name: ((i = s.handledBy) == null ? void 0 : i.name) ?? `Moderator`,
            picture: ((a = s.handledBy) == null ? void 0 : a.picture) ?? null
          } : {
            id: 0,
            name: `—`,
            picture: null
          },
          reason: String(((o = s.reports) == null || (o = o[0]) == null ? void 0 : o.reason) ?? `other`),
          status: e
        })
      }
      return n.sort((e, t) => new Date(t.createdAt).getTime() - new Date(e.createdAt).getTime()), n
    }
    async getModeratorClosedTicketStats(e) {
      let t = new URLSearchParams({
          id: String(e)
        }).toString(),
        n = await this.request(`/staff/dashboard/users/tickets/stats?${t}`, {
          method: `GET`,
          credentials: `include`
        });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return n.json()
    }
    async getTicketsKpi(e) {
      let t = new URLSearchParams;
      t.set(`start`, e.startIso), t.set(`end`, e.endIso), e.compare && t.set(`compare`, `1`), e.userId != null && t.set(`userId`, String(e.userId)), e.allianceId != null && t.set(`allianceId`, String(e.allianceId)), e.reason != null && t.set(`reason`, e.reason), e.punishment != null && t.set(`punishment`, e.punishment), e.granularity != null && t.set(`granularity`, e.granularity);
      let n = await this.request(`/staff/dashboard/kpi/tickets?${t.toString()}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return n.json()
    }
    async getOnboardingKpi(e) {
      let t = new URLSearchParams({
        start: e.startIso,
        end: e.endIso,
        granularity: e.granularity
      });
      e.experiment && t.set(`experiment`, e.experiment);
      let n = await this.request(`/staff/dashboard/kpi/onboarding?${t.toString()}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return n.json()
    }
  }
}

function Bc(e) {
  return class extends e {
    async notificationJSON(e, t = {}) {
      var n, r;
      let i = new AbortController,
        a, o = new Promise((e, t) => {
          a = t
        }),
        s = () => {
          var e;
          let n = ((e = t.signal) == null ? void 0 : e.reason) ?? new DOMException(`Aborted`, `AbortError`);
          i.abort(n), a(n)
        },
        c = setTimeout(() => {
          let e = Error(m.request_timeout());
          i.abort(e), a(e)
        }, 15e3);
      (n = t.signal) == null || n.addEventListener(`abort`, s, {
        once: !0
      }), (r = t.signal) != null && r.aborted && s();
      try {
        return await Promise.race([(async () => {
          let n = await this.request(e, {
            ...t,
            credentials: `include`,
            cache: `no-store`,
            signal: i.signal
          });
          if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
          return await n.json()
        })(), o])
      } finally {
        var l;
        clearTimeout(c), (l = t.signal) == null || l.removeEventListener(`abort`, s)
      }
    }
    getAllianceNotificationPreferences(e) {
      return this.notificationJSON(`/alliance/notification-preferences`, {
        signal: e
      })
    }
    setAllianceNotificationPreference(e, t) {
      return this.notificationJSON(`/alliance/notification-preferences`, {
        method: `POST`,
        body: JSON.stringify({
          category: e,
          enabled: t
        })
      })
    }
    getNotificationPreferences(e) {
      return this.notificationJSON(`/notification/preferences`, {
        signal: e
      })
    }
    setNotificationPreference(e, t, n) {
      return this.notificationJSON(`/notification/preferences`, {
        method: `POST`,
        body: JSON.stringify({
          type: e,
          enabled: t
        }),
        signal: n
      })
    }
    updatePrivacy(e, t) {
      return this.notificationJSON(`/me/privacy`, {
        method: `POST`,
        body: JSON.stringify(e),
        signal: t
      })
    }
    getControlBindings(e) {
      return this.notificationJSON(`/me/controls`, {
        signal: e
      })
    }
    saveControlBindings(e, t = !1) {
      return this.notificationJSON(`/me/controls`, {
        method: `POST`,
        body: JSON.stringify({
          bindings: e
        }),
        keepalive: t
      })
    }
    getNotificationPushConfig(e) {
      return this.notificationJSON(`/notification/push/config`, {
        signal: e
      })
    }
    getNotificationPushStatus(e, t) {
      return this.notificationJSON(`/notification/push/status`, {
        method: `POST`,
        body: JSON.stringify({
          endpoint: e
        }),
        signal: t
      })
    }
    subscribeNotificationPush(e, t, n, r, i) {
      return this.notificationJSON(`/notification/push/subscribe`, {
        method: `POST`,
        body: JSON.stringify({
          ...e,
          body: t,
          silent: n,
          chargesFullBody: r
        }),
        signal: i
      })
    }
    updateNotificationPushPreferences(e, t, n, r, i) {
      return this.notificationJSON(`/notification/push/preferences`, {
        method: `POST`,
        body: JSON.stringify({
          endpoint: e,
          body: t,
          silent: n,
          chargesFullBody: r
        }),
        signal: i
      })
    }
    unsubscribeNotificationPush(e, t) {
      return this.notificationJSON(`/notification/push/unsubscribe`, {
        method: `POST`,
        body: JSON.stringify({
          endpoint: e
        }),
        signal: t
      })
    }
    async getNotificationCount(e) {
      let {
        count: t
      } = await this.notificationJSON(`/notification/count`, {
        signal: e
      });
      return t
    }
    getNotificationPage(e, t) {
      let n = e === void 0 ? `` : `?cursor=${encodeURIComponent(e)}`;
      return this.notificationJSON(`/notification/page${n}`, {
        signal: t
      })
    }
    getNotificationChanges(e, t) {
      return this.notificationJSON(`/notification/changes`, {
        method: `POST`,
        signal: t,
        body: JSON.stringify({
          notificationIds: e
        })
      })
    }
    postNotificationMarkRead(e, t) {
      return this.notificationJSON(`/notification/mark-read`, {
        method: `POST`,
        signal: t,
        body: JSON.stringify({
          notificationIds: e
        })
      })
    }
    postNotificationMarkReadAll(e) {
      return this.notificationJSON(`/notification/mark-read/all`, {
        method: `POST`,
        signal: e
      })
    }
  }
}
var Vc = [`droplets`, `prism`];

function Hc(e) {
  return Vc.map(t => ({
    currency: t,
    amount: e.reduce((e, n) => e + (n.currency === t ? n.amount : 0), 0)
  })).filter(e => e.amount > 0)
}

function Uc(e) {
  return class extends e {
    async driveStatus() {
      let e = await this.request(`/drive/status`, {
        credentials: `include`
      });
      return e.status === N.OK && !!(await e.json()).connected
    }
    async driveConnect(e) {
      let t = await this.request(`/drive/connect`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          code: e
        })
      });
      if (t.status !== N.OK) throw Error(`drive connect failed: ${t.status}`);
      return t.json()
    }
    async driveToken() {
      let e = await this.request(`/drive/token`, {
        credentials: `include`,
        throwOnStatus: !1
      });
      if (e.status === N.CONFLICT) return null;
      if (e.status !== N.OK) throw Error(`drive token failed: ${e.status}`);
      return e.json()
    }
    async driveDisconnect() {
      await this.request(`/drive/disconnect`, {
        method: `POST`,
        credentials: `include`,
        throwOnStatus: !1
      })
    }
    async createEmbeddedCheckout(e) {
      let t = await this.request(`/payment/create-checkout-session`, {
        method: `POST`,
        credentials: `include`,
        throwOnStatus: !1,
        body: JSON.stringify({
          lookup_key: e
        })
      });
      if (t.status === N.TOO_MANY_REQUESTS) throw new P(m.you_or_someone_in_your_network_is_making_a_lot_of_requests_to_the_server());
      if (t.status === N.UNAUTHORIZED) throw Error(m.you_are_not_logged_in());
      if (t.status === N.UNAVAILABLE_FOR_LEGAL_REASONS) throw Error(m.account_suspended_message());
      if (t.status !== N.OK) throw t.status >= 500 || t.status === N.REQUEST_TIMEOUT ? new Is(m.payment_checkout_failed()) : Error(m.payment_checkout_failed());
      return t.json()
    }
    async refreshStripeSession(e) {
      return {
        credited: (await this.request(`/payment/refresh-session/${e}`, {
          method: `POST`,
          credentials: `include`,
          throwOnStatus: !1
        })).ok
      }
    }
    async createFastspringSession(e, t = !1) {
      let n = await this.request(`/payment/fastspring/session`, {
        method: `POST`,
        credentials: `include`,
        throwOnStatus: !1,
        body: JSON.stringify({
          lookup_key: e,
          dark: t
        })
      });
      if (n.status === N.TOO_MANY_REQUESTS) throw new P(m.you_or_someone_in_your_network_is_making_a_lot_of_requests_to_the_server());
      if (n.status === N.UNAUTHORIZED) throw Error(m.you_are_not_logged_in());
      if (n.status !== N.OK) {
        if (n.status === N.FORBIDDEN) {
          let e = await n.json().catch(() => null);
          if ((e == null ? void 0 : e.code) === `payment_country_restricted`) throw new Fs(m.payment_country_restricted())
        }
        throw n.status >= 500 || n.status === N.REQUEST_TIMEOUT ? new Is(m.payment_checkout_failed()) : Error(m.payment_checkout_failed())
      }
      return await n.json()
    }
    async refreshFastspringOrder(e) {
      let t = await this.request(`/payment/fastspring/refresh-order/${e}`, {
        method: `POST`,
        credentials: `include`
      });
      if (!t.ok) throw Error(`fastspring refresh failed: ${t.status}`);
      return await t.json()
    }
    async getLastFastspringOrder() {
      let e = await this.request(`/payment/fastspring/orders/last`, {
        credentials: `include`
      });
      if (e.status === N.NOT_FOUND) return null;
      if (!e.ok) throw Error(`Failed to get last FastSpring order: ${e.status} ${e.statusText}`);
      return await e.json()
    }
    async markFastspringOrderAsRead(e) {
      let t = await this.request(`/payment/fastspring/orders/${e}/mark-as-read`, {
        method: `PATCH`,
        credentials: `include`
      });
      if (!t.ok) throw Error(`Failed to update FastSpring order: ${t.status} ${t.statusText}`)
    }
    async purchase(e) {
      let t = await this.request(`/purchase`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          product: e
        })
      });
      if (t.status !== N.OK) throw t.status === N.NOT_FOUND ? Error(m.couldnt_complete_the_purchase_this_item_doesnt_exist()) : t.status === N.FORBIDDEN ? Error(m.you_do_not_have_enough_droplets_to_buy_this_item()) : t.status === N.CONFLICT ? Error(m.you_already_have_this_item()) : Error(m.unexpected_server_error())
    }
    async getPlayAccountId() {
      let e = await this.request(`/payment/play/account-id`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw Error(m.unexpected_server_error());
      return e.json()
    }
    async verifyPlayPurchase(e) {
      let t = await this.request(`/payment/play/verify`, {
        method: `POST`,
        credentials: `include`,
        headers: {
          "Content-Type": `application/json`
        },
        body: JSON.stringify(e)
      });
      if (t.status === N.BAD_REQUEST) {
        let e = await t.json().catch(() => ({}));
        throw Error((e == null ? void 0 : e.error) ?? `Invalid Play purchase`)
      }
      if (t.status === N.UNAVAILABLE_FOR_LEGAL_REASONS) throw Error(m.account_suspended_message());
      if (t.status !== N.OK) throw Error(m.unexpected_server_error());
      return t.json()
    }
    async verifyPendingPlayPurchases() {
      let e = await this.request(`/payment/play/verify-pending`, {
        method: `POST`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw Error(m.unexpected_server_error());
      return e.json()
    }
    async getPlayClaimStatus(e) {
      let t = await this.request(`/payment/play/claim/${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status === N.NOT_FOUND) return {
        status: `unknown`,
        grant: {
          currency: `droplets`,
          amount: 0
        }
      };
      if (t.status !== N.OK) throw Error(m.unexpected_server_error());
      return t.json()
    }
    async listPaymentHistory(e) {
      let t = e ? `?before=${encodeURIComponent(e)}` : ``,
        n = await this.request(`/payment/history${t}`, {
          credentials: `include`
        });
      if (n.status !== N.OK) throw Error(m.unexpected_server_error());
      return n.json()
    }
    async listPlayPurchaseHistory() {
      let e = await this.request(`/payment/play/history`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== N.OK) throw Error(m.unexpected_server_error());
      return e.json()
    }
  }
}

function Wc(e, t) {
  let n = {};
  for (let r of e) {
    let e = t(r),
      i = n[e];
    i ? i.push(r) : n[e] = [r]
  }
  return n
}

function Gc(e, t) {
  let n = {};
  for (let r of e) {
    let e = t(r);
    n[e] = r
  }
  return n
}

function Kc(e) {
  return class extends e {
    async paint(e) {
      let t = Wc(e, e => `t=(${e.tile[0]},${e.tile[1]}),s=${e.season}`),
        n = {
          season: e[0].season,
          tiles: Object.values(t).map(e => ({
            x: e[0].tile[0],
            y: e[0].tile[1],
            pixels: {
              x: e.map(e => e.pixel[0]),
              y: e.map(e => e.pixel[1]),
              colors: e.map(e => e.colorIdx)
            }
          }))
        },
        r = JSON.stringify(n),
        i = await $.getHeaders(r),
        a = await this.request(`/paint`, {
          method: `POST`,
          body: r,
          headers: i,
          credentials: `include`
        });
      if (a.status === N.OK) return await a.json().catch(() => ({}));
      if (a.status === N.UNAUTHORIZED) throw Error(m.you_need_to_be_logged_in_to_paint());
      if (a.status === N.FORBIDDEN) {
        if (a.headers.get(`cf-mitigated`) === `challenge`) throw Error(m.ddos_message());
        let t = await a.json().catch(() => ({}));
        switch (t == null ? void 0 : t.error) {
          case `timeout`: {
            let e = new Date(Date.now() + ((t == null ? void 0 : t.durationMs) ?? 0));
            throw Error(m.your_account_was_suspended_until({
              until: e.toLocaleString()
            }))
          }
          case `refresh`:
            throw Error(m.refresh_page());
          case `color-not-owned`:
            throw Error(m.paint_color_not_owned());
          case `company-paint-outside-allowed-area`:
            throw Error(m.company_paint_outside_allowed_area());
          case `event-pixel-present`:
            throw Error(m.cannot_paint_over_event_pixel());
          case `challenge-required`:
            if (t.tier) {
              if (await fs(t.tier)) return this.paint(e);
              throw Error(m.challenge_verification_not_completed())
            }
            throw console.error(`Challenge required but no tier provided`, t), Error(m.unexpected_server_error());
          case `verification-required`: {
            let t = (await Bo().get()).sealed_result;
            if (!t) throw Error(m.unexpected_server_error());
            return await this.verifyAnticheat(t), this.paint(e)
          }
        }
        throw await K.refresh(), typeof(t == null ? void 0 : t.charges) == `number` ? Error(m.you_do_not_have_enough_charges_to_paint()) : Error(m.unexpected_server_error())
      }
      throw Error(m.unexpected_server_error())
    }
    async selectAreaClear(e, t) {
      return this.sendPaintRequests(e, (e, t, n) => `/staff/tools/select-area/clear/s${e}/pixel/${t}/${n}`, t)
    }
    async createReverseSession(e) {
      let t = await this.request(`/staff/tools/select-area/reverse/session`, {
        method: `POST`,
        body: e.buffer,
        headers: {
          "Content-Type": `application/octet-stream`
        },
        credentials: `include`
      });
      if (t.status !== N.OK) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
    async getReverseTimestamps(e, t = {}) {
      let {
        mode: n = `depth`,
        beforeDepth: r,
        beforeTimestamp: i
      } = t, a = await this.request(`/staff/tools/select-area/reverse/timestamps`, {
        method: `POST`,
        body: JSON.stringify({
          sessionId: e,
          mode: n,
          beforeDepth: r,
          beforeTimestamp: i
        }),
        headers: {
          "Content-Type": `application/json`
        },
        credentials: `include`
      });
      if (a.status !== N.OK) throw new F(m.unexpected_server_error(), a.status);
      return a.json()
    }
    async getReversePreview(e, t) {
      let {
        mode: n = `depth`,
        snapshotDepth: r,
        timestamp: i
      } = t, a = await this.request(`/staff/tools/select-area/reverse/preview`, {
        method: `POST`,
        body: JSON.stringify({
          sessionId: e,
          mode: n,
          snapshotDepth: r,
          timestamp: i
        }),
        headers: {
          "Content-Type": `application/json`
        },
        credentials: `include`
      });
      if (a.status !== N.OK) throw new F(m.unexpected_server_error(), a.status);
      return a.json()
    }
    async getReverseTimelapse(e, t) {
      let n = await this.request(`/staff/tools/select-area/reverse/timelapse`, {
        method: `POST`,
        body: JSON.stringify({
          sessionId: e,
          paceMode: t.paceMode,
          fps: t.fps,
          durationSeconds: t.durationSeconds,
          maxFrameCount: t.maxFrameCount,
          beforeTimestamp: t.beforeTimestamp ?? 0
        }),
        headers: {
          "Content-Type": `application/json`
        },
        credentials: `include`
      });
      if (n.status === N.BAD_REQUEST) {
        let e = await n.json(),
          t = (e == null ? void 0 : e.error) ?? ``;
        throw t === `timelapse_too_many_events` ? new F(m.select_area_timelapse_history_too_large(), N.BAD_REQUEST) : new F(typeof t == `string` && t ? t : m.unexpected_server_error(), N.BAD_REQUEST)
      }
      if (n.status !== N.OK) throw new F(m.unexpected_server_error(), n.status);
      return n.arrayBuffer()
    }
    async applyReverse(e, t) {
      let {
        mode: n = `depth`,
        snapshotDepth: r,
        timestamp: i
      } = t, a = await this.request(`/staff/tools/select-area/reverse/apply`, {
        method: `POST`,
        body: JSON.stringify({
          sessionId: e,
          mode: n,
          snapshotDepth: r,
          timestamp: i
        }),
        headers: {
          "Content-Type": `application/json`
        },
        credentials: `include`
      });
      if (a.status !== N.OK) throw new F(m.unexpected_server_error(), a.status);
      return a.json()
    }
    async sendPaintRequests(e, t, n, r) {
      let i = Wc(e, e => `t=(${e.tile[0]},${e.tile[1]}),s=${e.season}`),
        a = (await Promise.all(Object.values(i).map(async e => {
          let [r, i] = e[0].tile, a = e[0].season, o = {
            colors: e.map(e => e.colorIdx),
            coords: e.flatMap(e => e.pixel),
            csid: n
          }, s = JSON.stringify(o), c = t(a, r, i), l = await $.getHeaders(s);
          return this.request(c, {
            method: `POST`,
            body: s,
            headers: l,
            credentials: `include`
          })
        }))).filter(e => e.status !== N.OK);
      if (a.length) {
        let e = a[0];
        if (e.status === N.UNAUTHORIZED) throw Error(m.you_need_to_be_logged_in_to_paint());
        if (e.status === N.FORBIDDEN) {
          if (e.headers.get(`cf-mitigated`) === `challenge`) throw Error(m.ddos_message());
          let t = await e.json().catch(() => ({}));
          switch (t == null ? void 0 : t.error) {
            case `timeout`: {
              let e = new Date(Date.now() + ((t == null ? void 0 : t.durationMs) ?? 0));
              throw Error(m.your_account_was_suspended_until({
                until: e.toLocaleString()
              }))
            }
            case `refresh`:
              throw Error(m.refresh_page());
            case `color-not-owned`:
              throw Error(m.paint_color_not_owned());
            case `event-pixel-present`:
              throw Error(m.cannot_paint_over_event_pixel())
          }
          throw await K.refresh(), typeof(t == null ? void 0 : t.charges) == `number` ? Error(m.you_do_not_have_enough_charges_to_paint()) : Error(m.unexpected_server_error())
        }
        throw Error(m.unexpected_server_error())
      }
    }
    async adminAutoPainterPaint(e, t, n, r = {}) {
      let i = qc(e),
        a = await Jc(i),
        o = new FormData;
      o.append(`fingerprint`, t), o.append(`season`, i.season.toString()), o.append(`px0`, i.offsetX.toString()), o.append(`py0`, i.offsetY.toString()), o.append(`width`, i.width.toString()), o.append(`height`, i.height.toString()), o.append(`pixels`, e.length.toString()), o.append(`bitmap`, a, `auto-painter.png`), o.append(`userId`, n.toString()), o.append(`missing`, String(r.missing ?? !1)), o.append(`incorrect`, String(r.incorrect ?? !1)), o.append(`showOnLeaderboard`, String(r.showOnLeaderboard ?? !1));
      let s = await this.request(`/staff/tools/auto-painter/paint`, {
        method: `POST`,
        body: o,
        credentials: `include`
      });
      if (s.status === N.FORBIDDEN) {
        let t = await s.json().catch(() => null);
        if (typeof(t == null ? void 0 : t.charges) == `number`) throw Error(m.overlay_auto_paint_not_enough_charges({
          charges: Math.floor(t.charges),
          pixels: e.length
        }));
        let n = typeof(t == null ? void 0 : t.error) == `string` ? t.error.trim() : ``;
        throw Error(n && n !== `Forbidden` ? n : `Auto painter is restricted to administrators.`)
      }
      if (s.status !== N.OK) throw Error(m.unexpected_server_error());
      return s.json()
    }
    async getPixelInfo({
      season: e,
      tile: [t, n],
      pixel: [r, i]
    }) {
      let a = new URLSearchParams;
      a.set(`x`, String(r)), a.set(`y`, String(i));
      let o = await this.request(`/s${e}/pixel/${t}/${n}?${a.toString()}`, {
        credentials: `include`
      });
      if (o.status !== N.OK) {
        let e = await o.text();
        throw Error(m.error_while_painting({
          err: e
        }))
      }
      return o.json()
    }
    async getPixelAreaInfo({
      season: e,
      tile: [t, n],
      p0: [r, i],
      p1: [a, o]
    }) {
      let s = await this.request(`/staff/tools/select-area/s${e}/${t}/${n}?x0=${r}&y0=${i}&x1=${a}&y1=${o}`, {
        credentials: `include`
      });
      if (s.status !== N.OK) {
        let e = await s.text();
        throw console.error(`Error while fetching pixel area info`, e), Error(m.unexpected_server_error())
      }
      let c = await s.arrayBuffer(),
        l = new DataView(c),
        u = Math.floor(c.byteLength / 5),
        d = new Uint32Array(u),
        f = new Uint8Array(u);
      for (let e = 0; e < u; e++) {
        let t = e * 5;
        d[e] = l.getUint32(t, !0), f[e] = l.getUint8(t + 4)
      }
      return {
        paintedBy: d,
        colors: f
      }
    }
  }
}

function qc(e) {
  var t;
  if (!e.length) throw Error(`Auto painter request does not contain any pixels.`);
  let n = e[0].season;
  for (let t of e)
    if (t.season !== n) throw Error(`Auto painter requests cannot mix seasons.`);
  let r = (t = Zs.seasons) == null ? void 0 : t[n];
  if (!r) throw Error(`Invalid season selected for auto painter request.`);
  let i = r.tileSize,
    a = 1 / 0,
    o = 1 / 0,
    s = -1 / 0,
    c = -1 / 0,
    l = e.map(e => {
      let t = Math.round(e.tile[0] * i + e.pixel[0]),
        n = Math.round(e.tile[1] * i + e.pixel[1]);
      return t < a && (a = t), n < o && (o = n), t > s && (s = t), n > c && (c = n), {
        x: t,
        y: n,
        colorIdx: e.colorIdx
      }
    }),
    u = s - a + 1,
    d = c - o + 1;
  if (!Number.isFinite(u) || !Number.isFinite(d) || u <= 0 || d <= 0) throw Error(`Failed to compute image bounds for auto painter payload.`);
  let f = new Uint8ClampedArray(u * d * 4);
  for (let {
      x: e,
      y: t,
      colorIdx: n
    }
    of l) {
    var p;
    let r = (p = Zs.colors) == null ? void 0 : p[n];
    if (!r) throw Error(`Unknown palette color index: ${n}`);
    let i = e - a,
      s = ((t - o) * u + i) * 4,
      [c, l, d] = r.rgb;
    f[s] = c, f[s + 1] = l, f[s + 2] = d, f[s + 3] = n === 0 ? 1 : 255
  }
  return {
    data: f,
    width: u,
    height: d,
    offsetX: a,
    offsetY: o,
    season: n
  }
}
async function Jc(e) {
  let t = Yc(e.width, e.height),
    n = t.getContext(`2d`);
  if (!n) throw Error(`Canvas API is not available to encode auto painter bitmap.`);
  let r = n.createImageData(e.width, e.height);
  return r.data.set(e.data), n.putImageData(r, 0, 0), `convertToBlob` in t ? t.convertToBlob({
    type: `image/png`
  }) : new Promise((e, n) => {
    t.toBlob(t => {
      if (!t) {
        n(Error(`Failed to encode auto painter bitmap.`));
        return
      }
      e(t)
    }, `image/png`)
  })
}

function Yc(e, t) {
  if (typeof OffscreenCanvas < `u`) return new OffscreenCanvas(e, t);
  if (typeof document < `u`) {
    let n = document.createElement(`canvas`);
    return n.width = e, n.height = t, n
  }
  throw Error(`Canvas API is not available in the current environment.`)
}

function Xc(e) {
  return class extends e {
    async protectionRequest(e, t) {
      let n = await this.request(`/staff/dashboard/protections${e}`, t);
      if (!n.ok) {
        let e = await n.json().catch(() => ({}));
        throw new F(n.status === 409 ? m.protection_conflict() : e.error === `protection_bypass_user` ? m.protection_bypass_invalid() : n.status === 400 ? m.protection_invalid() : m.protection_failed(), n.status)
      }
      return n
    }
    async getProtections(e = ``, t = 0) {
      return (await this.protectionRequest(`?${new URLSearchParams({query:e,page:String(t)})}`)).json()
    }
    async getProtection(e) {
      return (await this.protectionRequest(`/${e}`)).json()
    }
    async saveProtection(e, t) {
      return (await this.protectionRequest(t ? `/${t}` : ``, {
        method: t ? `PUT` : `POST`,
        headers: {
          "Content-Type": `application/json`
        },
        body: JSON.stringify(e)
      })).json()
    }
    async deleteProtection(e, t) {
      await this.protectionRequest(`/${e}?revision=${t}`, {
        method: `DELETE`
      })
    }
  }
}

function Zc(e) {
  return class extends e {
    async getSevenSeals() {
      let e = await this.request(`/seven-seals`, {
        method: `GET`,
        credentials: `include`
      });
      if (!e.ok) throw new F(m.unexpected_server_error(), e.status);
      return e.json()
    }
    async claimSevenSeals(e) {
      let t = await this.request(`/seven-seals/claim`, {
        method: `POST`,
        body: JSON.stringify({
          reward: e
        }),
        credentials: `include`
      });
      if (!t.ok) throw new F(m.unexpected_server_error(), t.status);
      return t.json()
    }
  }
}

function Qc(e) {
  return class extends e {
    validWaybackInput(e) {
      let t = Number.isFinite(e.timestamp) && Number.isInteger(e.timestamp) && e.timestamp >= 0 && e.timestamp <= this.getEstimatedServerNowMs(),
        n = Number.isFinite(e.season) && Number.isInteger(e.season) && e.season >= 0 && e.season < Qs.length,
        r = Number.isFinite(e.limit) && Number.isInteger(e.limit) && e.limit > 0 && e.limit <= rc.tools.wayback.limit,
        i = Number.isFinite(e.tileX) && Number.isFinite(e.tileY) && Number.isInteger(e.tileX) && Number.isInteger(e.tileY) && e.tileX >= 0 && e.tileY >= 0,
        a = e.cursorTs !== void 0,
        o = e.cursorUserId !== void 0,
        s = e.cursorAllianceId !== void 0,
        c = e.cursorPixelsCount !== void 0,
        l = a || o || s || c,
        u = a && o && s && c,
        d = !0;
      return l && (d = u && Number.isFinite(e.cursorTs) && Number.isInteger(e.cursorTs) && e.cursorTs >= 0 && e.cursorTs <= e.timestamp && Number.isFinite(e.cursorUserId) && Number.isInteger(e.cursorUserId) && e.cursorUserId >= 0 && Number.isFinite(e.cursorAllianceId) && Number.isInteger(e.cursorAllianceId) && e.cursorAllianceId >= 0 && Number.isFinite(e.cursorPixelsCount) && Number.isInteger(e.cursorPixelsCount) && e.cursorPixelsCount >= 0), !(!n || !r || !i || !t || !d)
    }
    getSafeWaybackInput(e) {
      return e.season = Math.trunc(e.season), e.limit = Math.trunc(e.limit), e.timestamp = Math.trunc(e.timestamp), e.tileX = Math.trunc(e.tileX), e.tileY = Math.trunc(e.tileY), e.cursorTs !== void 0 && (e.cursorTs = Math.trunc(e.cursorTs)), e.cursorUserId !== void 0 && (e.cursorUserId = Math.trunc(e.cursorUserId)), e.cursorAllianceId !== void 0 && (e.cursorAllianceId = Math.trunc(e.cursorAllianceId)), e.cursorPixelsCount !== void 0 && (e.cursorPixelsCount = Math.trunc(e.cursorPixelsCount)), e
    }
    async getWaybackEvents(e) {
      if (!this.validWaybackInput(e)) throw Error(`Invalid query params`);
      e = this.getSafeWaybackInput(e);
      let t = new URLSearchParams;
      e.cursorTs !== void 0 && t.set(`cursorTs`, String(e.cursorTs)), e.cursorUserId !== void 0 && t.set(`cursorUserId`, String(e.cursorUserId)), e.cursorAllianceId !== void 0 && t.set(`cursorAllianceId`, String(e.cursorAllianceId)), e.cursorPixelsCount !== void 0 && t.set(`cursorPixelsCount`, String(e.cursorPixelsCount));
      let n = `/staff/tools/wayback/s${e.season}/l${e.limit}/x${e.tileX}/y${e.tileY}/t${e.timestamp}`,
        r = t.toString(),
        i = await this.request(r.length > 0 ? `${n}?${r}` : n, {
          method: `GET`,
          credentials: `include`
        });
      if (i.status === N.FORBIDDEN) throw Error(`Access denied`);
      if (i.status !== N.OK) throw Error(`Failed to fetch wayback events`);
      return i.json()
    }
  }
}
var z = new class extends Xc(Ys(Xs(gc(vc(yc(bc(Sc(Ec(Dc(zc(Bc(Uc(Kc(Zc(Qc(qs)))))))))))))))) {}(ee);
typeof window < `u` && l(() => {
  let e = z.online;
  c(() => {
    let t = z.online;
    t && !e && window.dispatchEvent(new CustomEvent(`wplace:online`)), e = t
  })
});
var $c = `data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAEAAAHPAB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn6pqampqampqampqampqampqampqampqamp29vb29vb29vb29vb29vb29vb29vb29vb2/////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJANgAAAAAAAABzxmm4psAAAAAAD/+8DEAAAF7A1FtDAAIzil6D87kgAAAktuqNu7gOcCAAgEATB8HzcHwfB8+DgIROD4ABAEAQOeCH/iAMXLB9//BB3Lg+AAIgJwBCSoyQ0QES1dNwAYhicYDAiarL8aXE4ZXwYe9BkCgLS/Dg4MKQDMkgCjAiAxujyCQPmFYGBApKtkawq2qi9GqTYgLTpFiGdI9O1D5NmvVykb4Q0iC3QOU5rUBLCQ9IoJWFutwdm2v5UmUWmoy2K9QxuXw5RxuOwA2j2ytp2dZrWp2A2/kMupbmC5HKc2et0mbjSyeld35/luxXs97SW4/JJiln38v54TdWITN+nq3a1Pq93WW/3/vNLLf/////K6sDGP////6PvWxQBFoFJABHMZRCBoQGHo/GW6NG17vGW1Zm25xgoZkkHEXiCgHb9v4bi8evlnFw5BStnezI76WTtDaVvOnLL8s9+1t95y7trVqdf0zfXXtpb2dzNrj94XquvZ0M/NLX6l+vktgwC4jICYwfNAuho0IiQuj////9r102AEMKOmGkMYagJIsBaYDIChgOgJiENow+wojIdUMMSQEYSBUTMZQb0o8Sk0SAjR1t5HOrfQNex7cq0ENSD4pyGX7X0xZTZxIYcKtF3mZptVyMvMJudNbJV6UKXY/pfr32nNn0c5rcEZq6nJYnCORDbENctTk5KWZdS63RUTWFzZVbMV3mt6vHJyziusGx5zczaCWWIN////qcOYSSNcFwyUIAAjtY6tsg5hoaQgzCTEAExUCDBozfYO8qSY3T3MLBgMXFAyoIjSiUtF/0DIhCIBgG52VxKVSh3n1s08dh16HvYXJ8JdlBMxTY839i3jR8vtSlsKfeK0NnC/nM0tLW7FK8/Tyq3KYLswxTDQEYZQZBHdQsioRGajdWcNkfpNOahWTpUJEDyc9LCQ0gcfR2T8/////////2zGWVnTPOpjElOJxIKDcdxGcttHMdDk5//7cMTkAA8Uz0Nd1gAigaJm6eyxPIZMDGR0PEgIGrR49MVAZAmYoKJjqJJImBhKP02+o9Jznif5eVT2eHC0ysbdDWHcRBDdQtNsGHz5fw8l282p0U6XSlewoyfTz751qsNZZnm32XJ+unFUNjmoX7ZOpHcZdMd7QbwNu3WpMQZplTGVCmaoMR34247bm1mKtcK2aK+iQ4ivzjUezP///5geOSUMiJ4hUgCgC0K1WiCQN8vbLG0AQADBIlTNsRCYEzAEsjEodxELxqxP5Q/JrC1wBDIwZKExnLAxQW8x7DEIOswwBYw/DkUH4DcJwDDAHaJgbsOBr7QGlBha6NwBiCDcgQQAxYAIUQGBKBYuBJEAcWJEnQDE4pIly4MoYoqAEDCUAPQRAxqkAJ5GoBgyB4RikbLIcbhtIX7/+4DE6YAUZaM7rZheonoiZ3a28ASIsGAgt7D+AWIjkDSGWD0hfqSddyAgLAQ5QaQn8QDHWOoB4AMjh6g6BZYagtVSTqMjpBSeF6RccsrkVJwiZEC0VjA1cjv+xgbI/0TEwQN0GdBn///9q1N/9v//0/VsitLemubODxzX2KfBVKuK49NlTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7YMT0gCAhwyP52gAIAAA/w4AABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==`,
  el = `data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAGAAAMOQBTU1NTU1NTU1NTU1NTU1NTj4+Pj4+Pj4+Pj4+Pj4+Pj4+xsbGxsbGxsbGxsbGxsbGx09PT09PT09PT09PT09PT09Px8fHx8fHx8fHx8fHx8fHx8f////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAUCAAAAAAAADDmA9uH8AAAAAAD/+9DEAAAGFANhtBAAJCSzLP89oJggAALb/tFAHjUCAYWGC58oo4CEuCAIOg4GP5fRBB15d/B8//BD/8oc4P+IDnJ//+D6gBACgHGGMmGGAYEAiEB0ibwcAGYcgfRhlAyGKWf0bXgNSIiUpgJg3mBeAkYsQk5hPADlmkJZgCgFBwUTEzBIAxEJQCATNDF2H2BixBVlEwlzUKFrGHDQ4nWyRnNV/JBAF1sDEsMohzGgb1m1JVzYdFHSaE+z0sgpe0s1EHDlczHIpHJOmtL6zKoYHgNBIYtd3lSww5V7OX45QY8sij7/LrY1GYxP03P1apXhgahit65dpdyplb2v7z7ucliN6mqU12tNv5LZV38sssdxGi1lXqZdmKamks5j8TpqXDHX63h3LH/h2U1L9zvftRHeOH/Py6bpM6lW/25d3y5z//7sqvZz3YGGIslXoQAHIFYzMVUYY9rMbh+/5sjC/CwNSMXUxAQnzJeWbMYkawxUCtzUoDaMEwMM0fxPzAdAuPZcmMwegmDAmBMMA8BgSBpMFkFQwXwCzAzABCQh40ymzMFK6DaBdtCcQIjSzGERXtMBEDDDSpcseAQEhixEHPYg6NDZwXRTdTCUwLOBYhlLW4WFgkbE7CgteafKb7vQa6DYlbENXIfIFCvkjkWkdR7769xUFK9KZHhoFVuiCNprTXJRpaoyJRYiET9UWY8+NuRNZLuP4x5KyHs4xBTdFlhhEcaW2q9IuwaTPsXudBEZLpy1XvE+qaqyIJa61KPTcDJaNWd5uzE24qnctYsd0no78+X/bZMhpjju4rljKjzGl415+7TzVy7T1ZXLu1r16IXZBQ41qe5Yq1p61S7q3pZR1LEssXJ/H696Uf//////z////////////////////9/+////v//1LFjuNy5nnnL7/K9/Dus7VzocWTAKABqutOI9GcW+3l4CgFOmDMDYYN4p4OCIBgV4YBiYAwFpq3hZDALhgJheGG2D6YKoYZg5gwGEgBkYNYFphwg6mA+AMYlIK4CFoVGGIjshzRKgYzTWXYlEJDkBhliAGCiAMloYkENCHeTEfJPsMAiEWY0DBKVRQGMQrCBiAdCsOAiMKbZE//vAxPoALdY1PfnsgE4Yxut/PaRBBkBQHBwyEGzhMscp7WbLObyLCAEzgto46sDc0rgggEBIxDipkdkxXZrtwett4ObmoG7jE2pw9G3QXC9jsuymLPw8+Dp08zJVtJWLBQJG3nrSxgCARXBfwsgoJJakNPUmFAz6ymVOgwSNwc6ag6cDI37WpSsgXpTpiTbQy8CvHbLKIKUt7T7MqL/QzSvVejWbO3fp6S7ZsVZRKOxuxRqQUoWJXZJJY21x/IELxq7kdLLy/1DNU1VlTQoJb1RVFZiXHpf6rq7239u7fuX62GX9y/8uf////2gdh+JHSWIYfycuSiWW99lD+SyX9+URic7/5XMu5frePP1lvGtj/PytbBWbABr+NiRItGCIZg4OGBEwWGCIWpNDACG7UImORRmNIaDwrs7AwMkQArQS6k8HiYGkkirYXFQmGxR5kKSL1vXKtUyFx4T5jhQmF+whaQHE6XGvt7M9GafHhRoOvuW1IDkdKMUZ5eBrb7dJoN6amnbmZvm+3j6HmLq2q4hRrPoisU5yqSPBmgtVsTXziNa2d7hPoVaZjRoi6ngsbErm9SqVxgVVm4VXr2C2q3dv/r/61mta1rW1vujknTRQ19msXVc7hV1Xdc11aLCBo2Cp271Uf/UywAnCzbS32pPGamAsBpzmFioQBhg2Kjh0LkBkdooCME6gqEIgGAhqxojES6MTe1pYSgiSBzhgqHpfxOpePB/UvWXorrSCCQqGUqVy0uO846vZssTbWJ/YawtY0CQrcgrcQnVkStzrDmSplOcGO38lU/mpJn4sku6RNJMm2k1Yqwa8rusvFCZaRw0KBUhgtU8YCxh95G8mz///6377jVbFW1Y56omg1G6bnd/2Vr59WaV2YBZ5qm2v+m3BwJkYsxMtgywTOKITz+fIw9AMyzAYcvSgJRZWuTBZq4azK6gjFhyJxe0dgFKx8IRmfJPW6u08V2P/+5DE4oAaRaNFvdeAAsG0ab22JiTl7NF5XJKE5dsm4vPXm6Vp3rDpGjOBKkSFe3tNFtG6rZ1o6etaX9rzx9mPbrMUFLulWK9+1DLhBufN1vOx3rNmWqypHsrBeU3SiTDox81vMIlVgiXRUa9Dgpk2nfyuz9XPvl6u1c3cpk/A/gWXVdXsKZXBVmZidJ7U7lfGRISlEwhspJOroN5MDRCFozSo4PRp7DISWzyrHd1z3RgefpIcgdcsShprMD4hP+0MVsLDjcJXKys6Ga7Vdl7WiCjaHxrG/heggmYMOVOzOrqmMWnJZWBYrE0hI1GiJhaLOom6fm+kSVXFl6GtlQOAiiaue/E3/uv7FWa7Ti8ANAywuHoKNr8jKF2IrBWEc850vaXja818T1SdxbQ5WtPQYaQOvHXB2UzZMnh3YGV4h11mtblaifpokQYKBhDoBSUA2QTWiIrygwiGBx7J7jE1bVtsyV4wd1WRHHsgERdqbejj9ZEPb1I1syno5xVYyItSRXNgmUjk6XaXP9RFIvQduMPeLKNpCYqKmTSaO1xS2vX/+5DE5wAWWYdL7OGHKtS0aD2WJpwoC6Vo3TPtsVJqLczSJW6nLWe+RU8BTMSrJkUQEdHH9dqd1O0OpFJOKgqiZTKguYTbSEZ99rpKJJtnm3TjjbEvBH4psoYppbHqapsFc3ZS/hfzUowoBRmADiGVLXY2VAdYfAY/sMWgT8XeFZEk1KwhLVgEpQ9PRt0vWswHOP82Jw7zyycVBYBRrQFUJoI5rUTRhNc4RDYMNCsEDQypQrQMKn0GqqG0mR4lFJMphLFERHUXhkUMcg955lJulY9lCeExa4xrbRdNmgCwQrKGs07zWarceJ+Go4kpwak1mqmoCi1NiZk92yHqaq4LpwY8gfZBMxcgV2VVI7klXnve3r7CxdUjIhOIY0jCclaBBxgQeIwRQgNrirEfKZTIFFHkKTagty/jclnF1Wc0TpHMznSpnMAvJECHAqiV61TJyRqvMEjVErnTUTkjVVVXlGwkbGV5bTcrDkiKgZMiVlPh1osSFHo1//+2yyRsV/VkTlkYROLMTROeJZIFMDhIMB3LbLbjSdaNDwEROyQUeLD/+4DE+QAXeZc97L0xaq2z5v2Emn0yAiJIKjB3X////9aSZKVLFkxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7QMTxA9NhPR3sPM5AAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV`,
  tl = `` + new URL(`../assets/notification.CPyrWqU1.mp3`, import.meta.url).href,
  nl = `data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAHAAAPwAA8PDw8PDw8PDw8PDw8PGFhYWFhYWFhYWFhYWFhgICAgICAgICAgICAgICwsLCwsLCwsLCwsLCwsLDJycnJycnJycnJycnJyfn5+fn5+fn5+fn5+fn5//////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAVzAAAAAAAAD8D/1/k8//vUZAAAAiEJ3O0MQAgjgAm9oAABHXFJY/nchID1Dij/MNAArYAAA5FSnt6JERN3AAAAAABK7iAQDE5OYOBj4IHPg+H/qBAHwfB8/wQdh//ygIAgCAIA+D4Pg+DgIAgCH8oCAYB8Hw+0iACZbN8AAAQBAMLBwEAQDEEABKAmD4Py4Y5cP/UGCjuCAIYaAAAAIT0jmCa+4aT6+ToGA4MGKwDmAwJGKpEF1TBMHhQATAEVguChhJnwGAEw71gDGSNACdyFqYBAUaRC+lEBCwcaZpwkaD2T1IMgEoOMqEOCCyI0IdY5dEwg0wSI2Uhc4JVe4Gyk1pQMoCqs37GWBKWkpxEkiUMCNIUIGoxCMp92gxd6n6p/Eikq0BKdTS17TBEZHb3/Lqa7TNamaWgaz7k/QzsA0U1R15DlDuFaVVaCxdZFZydqYEIC2HDrawzjDoOdD0ZhmtTd/mW6Wd1zW6uNW1v9/+Gf7x+U6rSrm6WtLoapaWU1alMPAWAAAAApKbgAWRgWwAAAAfupeEim9ONNabpwYVM5zG36lhpFYjl+7KemmXSu19Tu6u6btpT7A9u219uPXQr6gABukNJycAYKtBQmqAwUgGQeQlJxgkDGFRkZhixw1LgYOuEpczqLMqdfPp5YTxXQYtIOpVawkxE+xC9N5rditCa581g4+Lbsih1lbm0mN43/h47xjf/+cWxD7C2xvTf+auf+f/6brAYY1Xr3EGbV8w2auN////W9f/PxnUGrD0eedxK06pAAyqAQbfgbxKqSfA3YzdbEYsr19rbAfGA4liuR/d6qV54NL6nO6nfLKpqY+QIXtqwATK9Wd+4BoeXROYgEkmWcGAki008yIaeBgMXHNSsJBt7HbZJK5ltspVSVZbzd+xLq+VqD3LXuonjl+X/tg5GjCB5usxCtIwORVYKFn4mmDB3+3s+PKsOQLOLVlgYQI93PE3ayVQuasrQmeRoKRcw4O1KWkurABIi+27zAa1D9mOQdfiMFOXKR2xRCN6Md47P5IquF//u0ZKWABCFI029x4AgwQVqv55wBDrD5TexxCeGFnaj9h6G9jVN+BeP0PQwnjWBkCQb+9fEv066lziNrdvfeLHao1ZYJRCbSOqP5uK++CaQoVJOfutR3/99POi9+dCJxTnPc6iqbV5ACNEBk/vALXqzsMMMaFiIEihHgxokAEF3iq+YtBEDke6FIQe0R7BUMWPXdZrf70u3iFNP+LfwdQdKqDhzpCb9+9WkO50uagqAw8uzmSPi221CHz4uh8CUpFDDepqSKObOoxdkcSuK//e/iFA9A7/93T76t0MAETYpr6sAzhVnLwGFUZBESsCcSoBQafwrZNbARpgdDBGNg3iKEEb5hYpu36btnI6gcVT+12cm+LmO5rJp9d4qr2PHg6jdW7yVUz9LR7X5utqzBVc3tMt9UJVf/6cy7OkI5lvuJiHcwAEIwEfEAAkph7AwsG4IVFChKaylAKEZoAiBSkVFbO6sjcBSOYvtCJZbLcsxNduWoLhEetM7k9dIyjzeXfa8ztUEMl2Hw9AdZmN9kRpXOj7P9T5fn5sjWRdBJ8eUW5IFNwI2ZMKAKhtFX9eACySFagYoAbgSCTCA1Km4oswYOISjakxGmFSpppwEQd5msbk8+dTVmlk0SQJRJTnOutyBoo5U9DO7i8oVLyTaqpq2mIHidH1HW58K1oG18xHWf6d1fxHbN13m2t/+st/6lV4VCIAAAT0cILQdDgGFi8wIlMdDBAWgwNFRowcDMr7lSGHOhkxAauJmRghgBKa+e//ukRO2AA6ZC0PsvS3hnRsofY0xDTJy3OfWWACmnIWh+tLAEhhEYaUG1IgUBmwgAkabEGA6RvAphjRlDQKUHsUFQHB5k5Y/oNuvccWKRceCKkkR4UJN4NK1Wwo2udxBUELBFD3ejruGrFg4KZEW0KSJ2mKLMgVIpaHBHbjLB2toryxciKCNawighu0tFGIPof+ihl+5hsm37umlDsnaY/k07D8f//8Zjf3P+9fvUlLOJ9u/HGbuW1MwwqMUVD/0P/RfJ/k1PfvXopFKUBDJty5PZeeG37aQ5H0f///////23nn/M+Z9pOeigpNFOLq4cBWlyW7L9X6JOC0BmAAAEBFXVkEAAAABA6MtO4nKhgYQGG20YCHBhJbKPGDxIfZExaU1uLlTO5ThieGJqmGUEfDpnTtCFqxJyiFiYqRmzxP4RQCmATguFcdpGl5G7Vh/QTwi8hpcDcjTGaIiX61/LJYLctfzv////+WdnMRSAAAAFAANvK53KFDzOsBp6ZMEMGDLCjTnBhGOBitUHCgNBUpM/SGm5lCBh0IVJGBcBqYXQoY4AUYCwaBgBAEGIkhYZpwZgXACMDEBozUBJTBeBtGgCjYjM7MTAHIwkwGgMAOJAClsVyKhZWDAVzAcAXMAw//vUZPYACBtd0e5vSIByZ6qfzkWgJsFbR7mvAElDEqo/NtBAAQwCgAVlKxNDVKAQB08bzDlzCwDz/NIUyhl1VtrwYMDQQDAkAQzbCnzIC5QUAPddW0IA9ecwFgFTAVA0MDMDAwCQClkhQAUwAADVlFUAQAAFCEAKaj8EOpNGAQAwRAhq0NlRQEgDV3T0qjSwz6vK0djUfk9nDC06JIABJqCHOfQNOEAAUbcV0mHMShlrL85Q6yi5SxCluRaIRW8VgBXvvxa79ym92YKjThdoXJmGvNeov+/9+JXb3012m/sugknyBl6S3kAAAAQLSoOigAAACgt4WpTEG6DoMYKCBiVdaIDwRpJmgCCBZdAOB52CdnRYsjCdiMFgXAxZXZBTXU6nTL5gkimlZdWt6n0VM8zD/Oa17oqYhQAAagIuCNQpUUAAaESxEIRQ4RhkTC6rEhAFR6Z+51qB1ymQ5wfsFzwj4BoLgctKQGLxYBhkKA2SIKjwM4QrsXVj6HOJ42IeWiZseNS6XXNVJKRUkglnReFRFkTF3SPgPBJFTx50kv//Wigt9Jbf5w3dakyHEeWn//6jlN1GJqo77ZFckzZGbZbZjEACzH4A7nVvb/ulFnOd5KYHHq47xxqeG0D5YdDpJ03xKEBX57zAoeuzP9/03c1LsggAmY8fAjFQqJhBC0YwoDfx9QqEGFBN9HthjfMqbPFomktTT7L2YpbCjmfgMBgO+sBPm10SE2yaRk6JyJeKhohGRCoadWwl/9xWpIkPTWoxJYEFjRc1eVSaUZrdWkbHiwZlA2SWYqUip62/zIxMUDU6fFImhj/2/2tMjYOyXS24eZlZMA0kHyAq5a/fJqrcl72AJw2LL2p2br97LI+RAtip1An6nVDT3sgz2ys9rpb+rKM388QWhUNUxA2l9n3dKsrM5XUQAzxf0BC4RDbwhEHKSARSR0yQ4NsxlDKVNKuTbRETQZIwJMCQ0DAORRxBxDyyRIvnmZGVjW6RiyJizFNBJZoltuhQMzZmc6ik//uUZOWABE5J1P9qoAowYaqv7CwBEF0nTe2mVOEBkqo9h4mkUyKiMSJGCCM0c4VUn87dna5mpFJaktq93qSQI4tOTZqbjet1HTVWrmAAJovoANlGBOp4hEQOXIXqgxdqga5kJzCYopdp/ngsP6/0OO8HSnp2l8s597L/T/O4buzVn+XMcu4541dZ1r/87/dZfjT4W8cO51eymcR1eLK134pPzk7Td1rHu+dsfvvauuZa7rm/3/7/+aywgql5T0tvbPRvINJBQBRrO/EoqFAYABlIcTGxkouYCEGURJ30uBhIwYPM0HDGxYgZDIj8rAleGVASgINfDy+wLAQZGjCgwFglM1WeNUwfOsSuKoPRkKhMq9XhtBLJjMZpkQHhgMBCv6ZpIGABkJkiWRgWHxiyIBWAbFExWzRIHB2BABBwFt0CADIQRQyKgCmCQLiABaaDL1xRImAyClyRJ1JIkigqjtKV9AUAEJ1P//d/1j23LjT8RZ/JG1mrGcKuH///9BQz//vURNSAA4s9Uv1igAh4B7o/rOQBIIVpOfm+kEMbnia/N8AIr+TMbjMbjTh02Vret0tX//////5ReuWe3rt+b+zW/LLLtXeP////////4d1+H5/3+65zf1hE0Skj3//kENa7/8OkQmEsh3Z2SACQCGR/MnNQmAAADjUY2NAMiMgQJgEmM9KjEwoEGBjo2BAsGHpgIMRDxhQgYGCoyGLM5yE60YCmxOsClw2lRTEUSBz3UgxcFLZsbNjSZLAgvM0H9BuIp2gYEI1I8GOAGYADYYHBoBMygbrqNmU0ZCtduJhUTCEDGDwEMAmNZyX6VuBbx/3dedqgwAjBAFZCmKqqqEAhBAUy371+lv36Wmu0+EvpKOz+8d83//jq5VvXLPb1Pal+X5ZZdq4nvd4C1//9VUxBTUUzLjEwMFVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sUZOGP8AAAf4cAAAgAAA/w4AABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV`,
  rl = `data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAADAAAHVgCKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioru7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7///////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAUQAAAAAAAAB1ZvGw9zAAAAAAD/+9DEAAAGgANNtBAAJL5DKPc9kEkIAKVy6ZvTvjNiAEAQA4fwcOKBAED85LicHw/BAEHfg+D4f/B8Hwf/Ococ/lz//4P//lwfAAAQCzgEApUAchBICAMDwGwwpg3jDHA2MWkaAxCQqDAjBQMMoFYwVgLDCrX1NfwPQxajfTO/VkEYD4sAuYOwYBgPgBGmQOAYIgDoKER8AN4KNYgISnpehHt0X2WsksoO27zM1duB3IgimTpnXNwTefFr9ly4HYK1lgtE8a3uVY23SCpDEpz4xL3DZVTV8ZygdeB4X+GuX6sTh9sVNAzuwVTIUztBdnLL60VnPsrt8f+fw/LCUy2caLDNmzuzGatmcu97UsVIYilyxqUcpaSPSW63KzZucjnakuzw+zlc5nD7yfL5zPv59z7/dQ9EolEu9pf5V1Y1+7Eayl1qkt8rXLGdi5nz//////////////////9/r9dw1l39/+P73/7////rWr1PdwxvJCIEbNPJ1QmAABaCxKJEmLpurTGDFSAYMB0FQxfggyqAeYtYSphnAwmFmBIYTATyaZhFiAGFIEqY0hJ5wAIxmFKCgaFaihh9A1GSlMSJYunOGWWB6pdsMvN5kqIig49MYApkLhJxyjmgkA1gIGDp1/CEIOLNkht0Ag8+NWKWQOW+aivhGVsj00TCW4CiJWJKkYRECshrDX0vHCHosi1cqERxakomvtDHA2TIAyjt52yUsMz8EMpZDLYdbq3V0XSRtfmhWkyaFM+YpBSrxQBAx03pQHPND6exc0OKEQq3lvKqM9hSCVHlv0yVdJhNZf+1Nx2GYZbqxt2qLJ9GC00ETr2vY+tmMTrOqWWTEkkUeh27PYQFIWX0rcGmtAswPXlLzWp6IVZe/ssk8FZ02r16Xdz3hTwPHJu3DEos63dr2927GPfz3+sM+93/63n3u//D///3nv9/rX71v97/PHuGWv7z/1Uo+X7tNTZ91XyoaWnob1bs9Yp86oQUCZIAAwEB7VQIuyrSQANCQ2GhZMQQ4MOCHMFxAMRwkMAxlMHzDM9QQMAxabsYLC+aWdScYCCZCoabxBOZSGWZcE2FB0xAuPp4zhWswUOJAsxAQMFDR4qN//vAxOUALmI5MbnsgE1xwGT3O7ABhADArk1MFMSD0qUALTCIVTNZ6aumhCoZWXmZixYEi2Kiy35BH02oFLPGCg7rCgQDQYw4ZYE5yE1rTPX1YekYKAYsD1hgHKA0ZBWZkQVFFhX2gNE3fFvt411kDPlAE5BAAMrWnKUzkdUQ4GcKFNJrQ1beZZDA2TyBhzsLNlCcxIeBUAMBCRkBamhsy15MFpJFZV1ovs/V/u78Uh+bo5dMT3L0lpqC3Wi9mVXpPlvn5TNa1Vyq409e/b1XvY/9bHmF3O1dwt2u5ZY444Y8q2a2Ou5Zd/GzvHV7tu/cx5fzv587Xua5ewz1n3+91X/LPesO2M9Zb7c5n3eOHcb+5KDXnf0F87HySsMMMAEIAAAwaBkBfgCqAAS3goeAwxXwM3QBieI+IEf/E3Ckh6ID/mLENJk99YSErPrb/4uVDX/7Vo/+KKI1///VTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+yDE4AAIHGcJGUmAAAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV`,
  il = `data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAEAAAI3QBycnJycnJycnJycnJycnJycnJycnJycnK5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm59PT09PT09PT09PT09PT09PT09PT09PT09P////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAXYAAAAAAAACN2ptdwzAAAAAAD/+9DEAAAJjBddVDAAJStFZ/c3oAHsAAAv9gAXd3P0QDAw+CAIAmHxACAYiAEAxBAEAQ4gBAEz+kEInB/+CBz/xOD7ygPh/Lg++oHz+CYPwQcCAIAhEgIAhLggc/6jmUBBwYDgAAgBIGrmoUBoJAAQCBUMBBWGDoGBmKGKhhhpMhMQGoBioGGvvxvwgy04N6IQUmdDBQDvnjHlG+JAoUAmwMmCTHbmuEKgBQW7jclMhQWZAcv9dIGSmGMsSgRd0VUBU1RmMOAWHeKMtGa4y94rTlMBmpHGIAbuji3JwZDMx2lj0pqs4YY9lA/kh/uUft5ZY5W6WbltFbn8bcH2pjLr1JUodk1lbljO9+ssorGatFjfrSqo50VlkalfGlLqgJhzXoIMCCEJEtEijzLX4YVJetWGbmGNzC7fkcE42LSWqwyGKoXZay/sdorjcmJLBqBM6m7tfP+zNNKrdNKZbEYzhqnv38ufv8M9z9xNtIp31baCO0VLjciMtkjAWSsiUxfJlTcXtmoBfnW/+dpcJVjz///3rX4awyx/W////eWeX7+X3L16V28+W8iO0CqjViUAAANAi1nT82Ac3hwMDCwHAwZAaUAJAVGkwYXCoXBBgIMkAEDh+BQuYhBJgypmiLAYQc4R9TGAEfDUSzPBzAJ2YhBAMBr3BQnSpR4wYAIPAlpAoGYMC66Gj4sFlpd+Lw03N/5+rH33lUXYDLo/l2ETkCO23jd4fL4QTGbmVagdqkz7P3aapEHYdxU6K7J3K7g0oYAhwCXa5vCbd2kQogO07kOWH7wscpolKal/LszZr2aaez336enl7uV4Mh6VzW9dq0uVZ9pTLZTWl3/vfLmFFR43/qWKSXxu3LPzzr2n0pO/zGrLaufc61Ncq7qcztX8KXVX6meWW+fhzuGFPT53uflhhbz/eee6/f/8f+mmZSwFpT/Qa0pYyXzou7LH1cl3cdy3GVWv/+f+/+pyzHdSP1qiUiHMAAUekYSBMSDYxOMEjjCoBMRgUVAJhkIKblA/AIFT3AAPMCBExIJTP0XNQDEyENQEBQMcAtCC54ZQrCeRmRwkVGOTJkmBRidHNLhIDMiukUTNSMNCRKypesdImZGp//uwxMsAJrobW/nNAkvDvKe/uTAEbTSIwhySikgs6zkyaLPF4jRmS4RxeNzhkSSklqMj58wMi6RUujKkFOPPlw2IuQ0mzUiZiXDUulA2L6JgXbGqBus8tFBNF1LNjqzV0kjqJdNi8RY1POTRkTxsaIoWU6F0XdI2aia1qROosjSuamSSWa1OpKgZmqR0wfdaS29G3oo0aqkmajXpVG0MCU6jVv1cleeYfgQkb/+N60xMwRCUEZowyxDJigoNEAgZCI+NxMYB9nQJGDIZYqxxJAaQyyCxdGJxQ+XEqMMlJ28V0pgPCgvpUmro0i1ovnb0Y/uxLUqpctk8XMK2u29vW0W1vXkfbS02mNmtWHUq3+iswmo0kf2C3Qw58N7rLzC/zlkvWXOz9bM86er1sEK5i5T6zrdXVPwR13mbd1qd0E1ZrHWk0tfa3il6ftfna9lJnkJllh4OErkLOEADkKoRmSkSwEhAAAAGmU2ZtKoICpiIN00MmJD2ZfIg4EjBw/EYCRuApBOmSAy8WQwiM2aScPORlMJDAFEgq+s4ZkDoMBhhEMgEFN2Lld/ygAlULhcBDwCZumkj8MAOrjqqUBMSAbgCQQLxsCYlFmBNOx5v/BAMBgIRjDAUPARAND0yuVmr60X///6n4/aUCSBDg+xCAnZkzStVXq////8wYAEdygAlxlFE7WyS1uUSkUA0190X2i0R//////lNeNtBcCtJcnGrRWmzvVaWpKZbAUMzv///////JfjVeXRqHI088fxjl1ntWVVddmoah6al13K7DNbv/////////8vwl1uble3za5edmHotWgqKW2z0dLMy+Jb/+6DE5gAWNZNF9aYALOJBI385wADsSvlLqrZuVeSqI0j/Vo1amo1biU9EZValP48qy24qTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xDE1gPAAAGkHAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==`,
  al = `data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAE/gDLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//////////////////////////////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAOoAAAAAAAABP6u4u+sAAAAAAD/+9DEAAAGhC1UdGMAJM1C6nc34FFSaWP+7vYBAAEOAAiHPJp6YAwtNgQl3qDHKBgo4Th/wf/Lh/8H35R3/4IAg7//gh/+UOcPgABgAAAB0YnM2TIZDUkAGYOFBdqBQkadAmEAgiDTKD1BYUFTGA4LixoJUcUsGkDJrfwYKEmBDRg+gZmBSBeYUQyJj2B9mAOAkYXINwOA3cdvzIrBtMDwFYOAEMZhFcyRwWTDiAGWo/LzSFp7vtDTSQ3bHKocXbPR6kg2U07Vs4KcJaDIIGTHZxDsSjEMyhPing6w8PSYAlwHfdtbFq3lAc1qmqzPxFFV1cbUkrP9GG/cbKIyivlRWq1mzvHDWNad73eE7q3JYPnIerXqKJTtzV3DmUzLZZFM7sv1z9U8czh5wVG4G3nru8cfyy+rhT5TtHTb7jzd3eWO6Wmy3R3e6/DW9b5l/b9e5///87///eY////9///////Df7/8vx/Xf///9f///52O6s3rZINILq82aqo6x1TAYDoYGInIIhASA++E8wYSIkIBd0NdJXDHQL2vFAR4YOsgwGFK6QQiPQDhcITBl4MWgDBEAosgZUgoDGkAwGFAMCCEDEQVAwaOgMChwEQXAwUBg5MTgJcAwARZxBj4Ng0LAigBGYdKKwKBIeIQDHCyhWxMlUmTx0xUCgJFBjnkGFkpk0ZF4gSLLRZJKGARbBQAsZDCCFAhxianDEuspVXRkOUWCGGCYsxZiXa0Ukl/8XOS4vxxjrDJR7RLyeiisxJn//y+11pJqNycOJkgiapIoo0UdS0dL//sUjzHxMgBgMUtVdLRYGrKTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tgxOMAHVGjN7magIAAADSDgAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq`,
  ol = Dl(),
  B, sl, V, cl = !1,
  ll, ul;

function dl() {
  if (typeof AudioContext > `u`) return () => {};
  let e = () => {
      try {
        B ?? (B = new AudioContext);
        let e = B;
        if (e.state !== `running` && e.resume().catch(() => {}), !sl) {
          let t = new AbortController;
          ul = t;
          let n = setTimeout(() => t.abort(), 1e4);
          sl = fetch(nl, {
            signal: t.signal
          }).then(async t => {
            if (!t.ok) throw Error(`Notification audio unavailable`);
            return e.decodeAudioData(await t.arrayBuffer())
          }).catch(() => {
            B === e && (sl = void 0)
          }).finally(() => clearTimeout(n))
        }
      } catch {}
    },
    t = [`pointerdown`, `pointerup`, `touchend`, `keydown`];
  for (let n of t) document.addEventListener(n, e, {
    capture: !0,
    passive: !0
  });
  return () => {
    for (let n of t) document.removeEventListener(n, e, !0);
    ul == null || ul.abort(), V == null || V.stop(), V = void 0, ll = void 0, B == null || B.close().catch(() => {}), B = void 0, sl = void 0
  }
}

function fl() {
  (j.muted || p.sounds.playerNotification === 0) && (V == null || V.stop())
}
async function pl() {
  if (j.muted || p.sounds.playerNotification === 0) return;
  let e = B;
  if ((e == null ? void 0 : e.state) === `running` && sl) {
    if (V || cl) return;
    cl = !0;
    let t;
    try {
      let n = await Promise.race([sl, new Promise(e => {
        t = setTimeout(() => e(void 0), 1e3)
      })]);
      if (!n || j.muted || p.sounds.playerNotification === 0 || B !== e || e.state !== `running`) return;
      let r = e.createBufferSource(),
        i = e.createGain();
      i.gain.value = ol.playerNotification.volume, r.buffer = n, r.connect(i).connect(e.destination), r.onended = () => {
        r.disconnect(), i.disconnect(), V === r && (V = void 0, ll = void 0)
      }, r.start(), V = r, ll = i
    } catch {} finally {
      clearTimeout(t), cl = !1
    }
    return
  }
  let t = ol.playerNotification;
  if (t.paused) try {
    t.currentTime = 0, await t.play()
  } catch {}
}
var ml, hl = new se;
async function H() {
  ml ?? (ml = new AudioContext);
  let e = ml;
  return e.state !== `running` && await Promise.race([e.resume().catch(() => {}), new Promise(e => setTimeout(e, 150))]), e.state === `running` ? e : void 0
}

function gl() {
  H()
}

function U(e, t, n, r = !1, i = 1500) {
  let a = new GainNode(e, {
    gain: t * p.sounds[n] / 50
  });
  hl.set(a, {
    id: n,
    base: t
  }), r && jl.add(a);
  let o = new BiquadFilterNode(e, {
    type: `lowpass`,
    frequency: 5e3
  });
  return a.connect(o).connect(e.destination), setTimeout(() => {
    hl.delete(a), jl.delete(a), a.disconnect(), o.disconnect()
  }, i), a
}

function W(e, t, n, r, i, a, o) {
  let s = new OscillatorNode(e, {
    type: `triangle`,
    frequency: n
  });
  o && (s.frequency.setValueAtTime(n, r), s.frequency.exponentialRampToValueAtTime(o, r + i));
  let c = new GainNode(e);
  c.gain.setValueAtTime(0, r), c.gain.linearRampToValueAtTime(a, r + .008), c.gain.exponentialRampToValueAtTime(.001, r + i), s.connect(c).connect(t), s.start(r), s.stop(r + i + .05)
}
async function _l(e) {
  if (j.muted) return !0;
  let t = await H();
  if (!t || e !== void 0 && e !== G) return !1;
  if (j.muted || p.sounds.purchaseSuccess === 0) return !0;
  let n = U(t, .25, `purchaseSuccess`, e !== void 0),
    r = t.currentTime + .03;
  return W(t, n, 523.25, r, .12, .5), W(t, n, 659.25, r + .085, .12, .55), W(t, n, 783.99, r + .17, .12, .6), W(t, n, 1046.5, r + .255, .55, .7), W(t, n, 1318.51, r + .255, .55, .25), W(t, n, 2093, r + .33, .4, .1), !0
}
async function vl() {
  if (j.muted) return !0;
  let e = await H();
  if (!e) return !1;
  if (p.sounds.plop === 0) return !0;
  let t = U(e, .18, `plop`),
    n = e.currentTime + .02;
  return W(e, t, 330, n, .28, .5, 1320), W(e, t, 1760, n + .22, .25, .2), W(e, t, 2637, n + .3, .2, .1), !0
}
var yl;

function bl(e) {
  return yl ?? (yl = fetch(`data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAADAAAHVgCKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioru7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7///////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAUQAAAAAAAAB1ZvGw9zAAAAAAD/+9DEAAAGgANNtBAAJL5DKPc9kEkIAKVy6ZvTvjNiAEAQA4fwcOKBAED85LicHw/BAEHfg+D4f/B8Hwf/Ococ/lz//4P//lwfAAAQCzgEApUAchBICAMDwGwwpg3jDHA2MWkaAxCQqDAjBQMMoFYwVgLDCrX1NfwPQxajfTO/VkEYD4sAuYOwYBgPgBGmQOAYIgDoKER8AN4KNYgISnpehHt0X2WsksoO27zM1duB3IgimTpnXNwTefFr9ly4HYK1lgtE8a3uVY23SCpDEpz4xL3DZVTV8ZygdeB4X+GuX6sTh9sVNAzuwVTIUztBdnLL60VnPsrt8f+fw/LCUy2caLDNmzuzGatmcu97UsVIYilyxqUcpaSPSW63KzZucjnakuzw+zlc5nD7yfL5zPv59z7/dQ9EolEu9pf5V1Y1+7Eayl1qkt8rXLGdi5nz//////////////////9/r9dw1l39/+P73/7////rWr1PdwxvJCIEbNPJ1QmAABaCxKJEmLpurTGDFSAYMB0FQxfggyqAeYtYSphnAwmFmBIYTATyaZhFiAGFIEqY0hJ5wAIxmFKCgaFaihh9A1GSlMSJYunOGWWB6pdsMvN5kqIig49MYApkLhJxyjmgkA1gIGDp1/CEIOLNkht0Ag8+NWKWQOW+aivhGVsj00TCW4CiJWJKkYRECshrDX0vHCHosi1cqERxakomvtDHA2TIAyjt52yUsMz8EMpZDLYdbq3V0XSRtfmhWkyaFM+YpBSrxQBAx03pQHPND6exc0OKEQq3lvKqM9hSCVHlv0yVdJhNZf+1Nx2GYZbqxt2qLJ9GC00ETr2vY+tmMTrOqWWTEkkUeh27PYQFIWX0rcGmtAswPXlLzWp6IVZe/ssk8FZ02r16Xdz3hTwPHJu3DEos63dr2927GPfz3+sM+93/63n3u//D///3nv9/rX71v97/PHuGWv7z/1Uo+X7tNTZ91XyoaWnob1bs9Yp86oQUCZIAAwEB7VQIuyrSQANCQ2GhZMQQ4MOCHMFxAMRwkMAxlMHzDM9QQMAxabsYLC+aWdScYCCZCoabxBOZSGWZcE2FB0xAuPp4zhWswUOJAsxAQMFDR4qN//vAxOUALmI5MbnsgE1xwGT3O7ABhADArk1MFMSD0qUALTCIVTNZ6aumhCoZWXmZixYEi2Kiy35BH02oFLPGCg7rCgQDQYw4ZYE5yE1rTPX1YekYKAYsD1hgHKA0ZBWZkQVFFhX2gNE3fFvt411kDPlAE5BAAMrWnKUzkdUQ4GcKFNJrQ1beZZDA2TyBhzsLNlCcxIeBUAMBCRkBamhsy15MFpJFZV1ovs/V/u78Uh+bo5dMT3L0lpqC3Wi9mVXpPlvn5TNa1Vyq409e/b1XvY/9bHmF3O1dwt2u5ZY444Y8q2a2Ou5Zd/GzvHV7tu/cx5fzv587Xua5ewz1n3+91X/LPesO2M9Zb7c5n3eOHcb+5KDXnf0F87HySsMMMAEIAAAwaBkBfgCqAAS3goeAwxXwM3QBieI+IEf/E3Ckh6ID/mLENJk99YSErPrb/4uVDX/7Vo/+KKI1///VTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+yDE4AAIHGcJGUmAAAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV`).then(async t => e.decodeAudioData(await t.arrayBuffer())).catch(() => void 0))
}
var xl = 20;
async function Sl(e) {
  if (j.muted || e <= 0) return !0;
  let t = await H();
  if (!t) return !1;
  if (p.sounds.plop === 0) return !0;
  let n = await bl(t);
  if (!n) return !1;
  let r = Math.min(e, xl),
    i = Math.max(.045, Math.min(.09, .9 / r)),
    a = U(t, .3, `plop`, !1, 3e3),
    o = t.currentTime + .2;
  for (let e = 0; e < r; e++) {
    let s = new AudioBufferSourceNode(t, {
      buffer: n,
      playbackRate: 1 + e / r * .5
    });
    s.connect(a), s.start(o + e * i)
  }
  return !0
}
async function Cl() {
  if (j.muted) return !0;
  let e = await H();
  if (!e) return !1;
  if (p.sounds.purchaseSuccess === 0) return !0;
  let t = U(e, .25, `purchaseSuccess`),
    n = e.currentTime + .03;
  return W(e, t, 392, n, .1, .45), W(e, t, 523.25, n + .09, .1, .5), W(e, t, 659.25, n + .18, .1, .55), W(e, t, 783.99, n + .27, .1, .55), W(e, t, 1046.5, n + .38, .7, .7), W(e, t, 1318.51, n + .38, .7, .35), W(e, t, 1567.98, n + .38, .7, .25), W(e, t, 2093, n + .5, .5, .12), !0
}
async function wl() {
  if (j.muted) return !0;
  let e = await H();
  if (!e) return !1;
  if (p.sounds.purchaseSuccess === 0) return !0;
  let t = U(e, .25, `purchaseSuccess`),
    n = e.currentTime + .03;
  return W(e, t, 440, n, .11, .5), W(e, t, 523.25, n + .08, .11, .5), W(e, t, 659.25, n + .16, .11, .55), W(e, t, 830.61, n + .24, .11, .55), W(e, t, 880, n + .33, .5, .7), W(e, t, 1318.51, n + .33, .5, .3), W(e, t, 1760, n + .42, .4, .12), !0
}
async function Tl() {
  if (j.muted) return !0;
  let e = await H();
  if (!e) return !1;
  if (p.sounds.purchaseSuccess === 0) return !0;
  let t = U(e, .28, `purchaseSuccess`),
    n = e.currentTime + .03;
  return W(e, t, 440, n, .09, .4), W(e, t, 554.37, n + .07, .09, .45), W(e, t, 659.25, n + .14, .09, .5), W(e, t, 880, n + .21, .09, .55), W(e, t, 1108.73, n + .28, .09, .55), W(e, t, 1318.51, n + .36, .8, .7), W(e, t, 880, n + .36, .8, .45), W(e, t, 1760, n + .36, .8, .3), W(e, t, 2637.02, n + .5, .5, .14), W(e, t, 3520, n + .62, .45, .08), !0
}
async function El(e) {
  if (j.muted) return !0;
  let t = await H();
  if (!t || e !== void 0 && e !== G) return !1;
  if (j.muted || p.sounds.purchaseFail === 0) return !0;
  let n = U(t, .22, `purchaseFail`, e !== void 0),
    r = t.currentTime + .03;
  return W(t, n, 329.63, r, .16, .55), W(t, n, 261.63, r + .15, .5, .6, 233.08), !0
}

function Dl() {
  let e = {
    plop: new Audio(rl),
    smallPlop: new Audio(al),
    bigPlop: new Audio($c),
    smallDropplet: new Audio(il),
    droppletAndPlop: new Audio(el),
    notification1: new Audio(tl),
    playerNotification: new Audio(nl)
  };
  for (let [t, n] of Object.entries(e)) n.preload = `auto`, n.volume = .3 * p.sounds[t] / 50;
  return e
}

function Ol() {
  j.muted && Ml(), kl && Al && (kl.volume = .3 * p.sounds[Al] / 50);
  for (let [e, t] of Object.entries(ol)) t.volume = .3 * p.sounds[e] / 50;
  ll && (ll.gain.value = ol.playerNotification.volume);
  for (let [e, {
      id: t,
      base: n
    }] of hl) e.gain.value = j.muted ? 0 : n * p.sounds[t] / 50;
  fl()
}
var kl, Al, jl = new ae,
  G = 0;

function Ml() {
  G++, kl == null || kl.pause(), kl = void 0, Al = void 0;
  for (let e of jl) e.disconnect(), hl.delete(e);
  jl.clear()
}
async function Nl(e) {
  Ml();
  let t = G;
  if (j.muted || p.sounds[e] === 0) return !1;
  try {
    if (e === `purchaseSuccess` || e === `purchaseFail`) {
      let n = await (e === `purchaseSuccess` ? _l(t) : El(t));
      return t === G && n
    }
    let n = new Audio(ol[e].src);
    n.volume = .3 * p.sounds[e] / 50, kl = n, Al = e;
    let r;
    try {
      return await Promise.race([n.play(), new Promise((e, t) => {
        r = setTimeout(() => t(Error(`Sound preview timed out`)), 5e3)
      })]), t === G
    } finally {
      clearTimeout(r)
    }
  } catch {
    return t === G && Ml(), !1
  }
}
var Pl = new WeakMap,
  Fl = new WeakMap,
  Il = new WeakMap,
  Ll = new WeakMap,
  Rl = new WeakMap,
  zl = new class {
    get count() {
      return o(i(Pl, this))
    }
    set count(e) {
      t(i(Pl, this), e, !0)
    }
    get items() {
      return o(i(Fl, this))
    }
    set items(e) {
      t(i(Fl, this), e, !0)
    }
    get nextCursor() {
      return o(i(Il, this))
    }
    set nextCursor(e) {
      t(i(Il, this), e, !0)
    }
    get loading() {
      return o(i(Ll, this))
    }
    set loading(e) {
      t(i(Ll, this), e, !0)
    }
    get markingAll() {
      return o(i(Rl, this))
    }
    set markingAll(e) {
      t(i(Rl, this), e, !0)
    }
    constructor(e) {
      s(this, `apiClient`, void 0), a(this, Pl, n()), a(this, Fl, n()), a(this, Il, n()), a(this, Ll, n(!1)), a(this, Rl, n(!1)), s(this, `open`, !1), s(this, `controller`, void 0), s(this, `running`, !1), s(this, `pending`, !1), s(this, `append`, !1), s(this, `markAll`, !1), s(this, `retry`, void 0), s(this, `onError`, void 0), s(this, `errorReported`, !1), s(this, `fullRefresh`, !0), s(this, `changedIDs`, new ae), s(this, `failures`, 0), this.apiClient = e
    }
    get client() {
      return this.apiClient ?? z
    }
    start(e) {
      if (this.count = void 0, this.items = void 0, this.nextCursor = void 0, this.loading = !1, this.markingAll = !1, this.running = !1, this.pending = !1, this.append = !1, this.markAll = !1, this.errorReported = !1, this.fullRefresh = !0, this.changedIDs.clear(), this.failures = 0, e === void 0) return;
      let t = new AbortController;
      this.controller = t;
      let n, r = !1,
        i = 0,
        a, o, s, c = () => document.visibilityState !== `hidden` && navigator.onLine,
        l = () => {
          n == null || n.close(), n = void 0, r = !1, clearTimeout(o)
        },
        u = () => {
          if (l(), t.signal.aborted || !navigator.onLine || a !== void 0) return;
          let e = Math.min(6e4, 2e3 * 2 ** Math.min(i++, 5));
          a = setTimeout(() => {
            a = void 0, f()
          }, e * (.5 + Math.random() / 2))
        },
        d = () => {
          r = !0, clearTimeout(o), o = setTimeout(u, 55e3)
        },
        f = () => {
          if (t.signal.aborted || !navigator.onLine || n || a !== void 0 || typeof EventSource > `u`) return;
          let e = new EventSource(`${this.client.url}/notification/stream`, {
            withCredentials: !0
          });
          n = e, o = setTimeout(u, 55e3), e.addEventListener(`heartbeat`, () => {
            n === e && (i = 0, d())
          }), e.addEventListener(`notifications`, t => {
            if (n !== e) return;
            d();
            let r = !0,
              i = !1;
            try {
              let e = JSON.parse(t.data);
              if (i = e.created === !0, e.reset !== !0 && Array.isArray(e.ids) && e.ids.length > 0 && e.ids.length <= 100 && e.ids.every(e => typeof e == `number` && Number.isSafeInteger(e) && e > 0)) {
                for (let t of e.ids) this.changedIDs.add(t);
                r = this.changedIDs.size > 100
              }
            } catch {}
            this.refresh(r), i && navigator.onLine && pl()
          }), e.onerror = () => {
            n === e && u()
          }
        },
        p = () => {
          c() && !r && this.refresh(), s = setTimeout(p, 25e3 + Math.random() * 1e4)
        },
        m = () => {
          if (!navigator.onLine) {
            clearTimeout(a), a = void 0, l();
            return
          }
          f(), this.refresh()
        };
      return document.addEventListener(`visibilitychange`, m), window.addEventListener(`online`, m), window.addEventListener(`offline`, m), s = setTimeout(p, 25e3 + Math.random() * 1e4), m(), () => {
        t.abort(), this.controller = void 0, clearTimeout(this.retry), clearTimeout(s), clearTimeout(a), l(), document.removeEventListener(`visibilitychange`, m), window.removeEventListener(`online`, m), window.removeEventListener(`offline`, m)
      }
    }
    setOpen(e, t) {
      this.open = e, this.onError = t, e && this.refresh()
    }
    refresh(e = !0) {
      e && (this.fullRefresh = !0, this.changedIDs.clear()), this.pending = !0, !(document.visibilityState === `hidden` || !navigator.onLine) && this.flush()
    }
    loadMore() {
      this.loading || this.nextCursor === void 0 || (this.append = !0, this.refresh(!1))
    }
    markAllRead() {
      this.markingAll || (this.markingAll = !0, this.markAll = !0, this.refresh(!1))
    }
    async flush() {
      let e = this.controller;
      if (!e || this.running) return;
      let {
        signal: t
      } = e;
      this.running = !0, clearTimeout(this.retry);
      try {
        for (; this.pending && !t.aborted && document.visibilityState !== `hidden` && navigator.onLine;) {
          this.pending = !1, this.loading = this.open;
          let e = this.fullRefresh || this.items === void 0,
            i = [...this.changedIDs];
          this.fullRefresh = !1, this.changedIDs.clear();
          let a = this.append,
            o = this.markAll;
          if (this.append = !1, this.markAll = !1, o) {
            var n;
            if (await this.client.postNotificationMarkReadAll(t), t.aborted) return;
            this.items = (n = this.items) == null ? void 0 : n.map(e => ({
              ...e,
              read: !0
            })), this.markingAll = !1
          }
          let s = await this.client.getNotificationCount(t);
          if (t.aborted) return;
          if (this.count = s, this.open) {
            var r;
            this.loading = !0;
            let n = (r = this.items) == null || (r = r.at(-1)) == null ? void 0 : r.id,
              o = this.items ?? [],
              c = this.nextCursor;
            if (e) {
              o = [], c = void 0;
              do {
                let e = await this.client.getNotificationPage(c, t);
                if (t.aborted) return;
                o.push(...e.notifications), c = e.nextCursor
              } while (c !== void 0 && n !== void 0 && c > n)
            } else if (i.length > 0) {
              let e = await this.client.getNotificationChanges(i, t);
              if (t.aborted) return;
              let r = new se(o.map(e => [e.id, e]));
              for (let e of i) r.delete(e);
              for (let t of e.notifications)(c === void 0 || n === void 0 || t.id >= n) && r.set(t.id, t);
              o = [...r.values()].sort((e, t) => t.id - e.id)
            }
            if (a && c !== void 0) {
              let e = await this.client.getNotificationPage(c, t);
              if (t.aborted) return;
              let n = new se(o.map(e => [e.id, e]));
              for (let t of e.notifications) n.set(t.id, t);
              o = [...n.values()].sort((e, t) => t.id - e.id), c = e.nextCursor
            }
            this.items = o, this.nextCursor = c;
            let l = o.filter(e => !e.read).map(e => e.id);
            if (this.open && document.visibilityState === `visible` && l.length > 0 && (await this.client.postNotificationMarkRead(l, t), t.aborted || (s = await this.client.getNotificationCount(t), t.aborted))) return
          }
          this.count = s, this.loading = !1, this.errorReported = !1, this.failures = 0
        }
      } catch (e) {
        if (!t.aborted) {
          var i;
          this.open && !this.errorReported && ((i = this.onError) == null || i.call(this, e)), this.errorReported = !0;
          let t = Math.min(3e4, 5e3 * 2 ** Math.min(this.failures++, 3));
          this.retry = setTimeout(() => this.refresh(), t * (1 + Math.random()))
        }
      } finally {
        t.aborted || (this.running = !1, this.loading = !1, this.markingAll = !1)
      }
    }
  };

function Bl(e, t) {
  if (!(e != null && e.length)) return !1;
  for (let n of e)
    if (n === t) return !0;
  return !1
}

function Vl(e, t) {
  for (let n of t)
    if (Bl(e, n)) return !0;
  return !1
}

function Hl(e) {
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
  return n
}

function Ul(e) {
  if (typeof Buffer < `u`) return Buffer.from(e).toString(`base64`);
  let t = ``;
  for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
  return btoa(t)
}
var Wl = class {
  constructor(e) {
    s(this, `bytes`, void 0), this.bytes = e ?? new Uint8Array
  }
  set(e, t) {
    let n = Math.floor(e / 8),
      r = e % 8;
    if (n >= this.bytes.length) {
      let e = new Uint8Array(n + 1),
        t = e.length - this.bytes.length;
      for (let n = 0; n < this.bytes.length; n++) e[n + t] = this.bytes[n];
      this.bytes = e
    }
    let i = this.bytes.length - 1 - n;
    t ? this.bytes[i] = this.bytes[i] | 1 << r : this.bytes[i] = this.bytes[i] & ~(1 << r)
  }
  get(e) {
    let t = Math.floor(e / 8),
      n = e % 8,
      r = this.bytes.length;
    return t > r ? !1 : !!(this.bytes[r - 1 - t] & 1 << n)
  }
};

function Gl(e) {
  return new Promise((t, n) => {
    let r = new FileReader;
    r.onload = () => {
      let e = r.result;
      if (!e || typeof e != `string`) {
        n(Error(`Could not read blob as data URL`));
        return
      }
      t(e.substring(e.indexOf(`,`) + 1))
    }, r.readAsDataURL(e)
  })
}

function Kl(e) {
  if (typeof FileReader > `u`) {
    let t = e.type || `application/octet-stream`;
    return e.arrayBuffer().then(e => `data:${t};base64,${Ul(new Uint8Array(e))}`)
  }
  return new Promise((t, n) => {
    let r = new FileReader;
    r.onloadend = () => {
      let e = r.result;
      if (typeof e != `string`) {
        n(Error(`Could not read blob as data URL`));
        return
      }
      t(e)
    }, r.onerror = n, r.readAsDataURL(e)
  })
}

function ql(e) {
  if (!e.startsWith(`data:`)) throw Error(`Could not parse data URL`);
  let t = e.indexOf(`,`);
  if (t === -1) throw Error(`Could not parse data URL`);
  let n = e.slice(5, t),
    r = e.slice(t + 1),
    i = n.indexOf(`;base64`),
    a = (i === -1 ? n : n.slice(0, i)) || `text/plain`;
  if (i !== -1) {
    let e = Hl(r),
      t = new Uint8Array(e.byteLength);
    return t.set(e), new Blob([t], {
      type: a
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: a
  })
}
var Jl = new WeakMap,
  Yl = new WeakMap,
  Xl = new WeakMap,
  Zl = new WeakMap,
  Ql = new WeakMap,
  $l = new WeakMap,
  eu = new WeakMap,
  tu = new WeakMap,
  K = new class {
    get data() {
      return o(i(Jl, this))
    }
    set data(e) {
      t(i(Jl, this), e, !0)
    }
    get loading() {
      return o(i(Yl, this))
    }
    set loading(e) {
      t(i(Yl, this), e, !0)
    }
    get notificationCount() {
      return o(i(Xl, this))
    }
    set notificationCount(e) {
      t(i(Xl, this), e)
    }
    get lastFetch() {
      return o(i(Zl, this))
    }
    set lastFetch(e) {
      t(i(Zl, this), e)
    }
    get charges() {
      return o(i(Ql, this))
    }
    set charges(e) {
      t(i(Ql, this), e)
    }
    get cooldown() {
      return o(i($l, this))
    }
    set cooldown(e) {
      t(i($l, this), e)
    }
    get flagsBitmap() {
      return o(i(eu, this))
    }
    set flagsBitmap(e) {
      t(i(eu, this), e)
    }
    get timeoutUntil() {
      return o(i(tu, this))
    }
    set timeoutUntil(e) {
      t(i(tu, this), e)
    }
    constructor() {
      s(this, `channel`, new BroadcastChannel(`user-channel`)), a(this, Jl, n()), a(this, Yl, n(!0)), a(this, Xl, e(() => zl.count)), a(this, Zl, n(Date.now())), a(this, Ql, e(() => {
        if (!this.data) return;
        let e = this.data.charges;
        if (e.infinite) return 1 / 0;
        if (e.count > e.max) return e.count;
        let t = e.count + Math.max((j.now - this.lastFetch) / e.cooldownMs, 0);
        return Math.min(e.max, t)
      })), a(this, $l, e(() => this.charges !== void 0 && this.data && !this.data.charges.infinite ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0)), a(this, eu, e(() => {
        var e;
        return new Wl(Hl(((e = this.data) == null ? void 0 : e.flagsBitmap) ?? `AA==`))
      })), a(this, tu, e(() => {
        var e;
        if (!((e = this.data) != null && e.timeoutUntil)) return;
        let t = new Date(this.data.timeoutUntil),
          n = t.getTime();
        if (!(!Number.isFinite(n) || n <= j.now)) return t
      })), this.channel && (this.channel.onmessage = e => {
        let t = JSON.parse(e.data);
        t.type === `refresh` ? (this.data = t.data, this.lastFetch = Date.now()) : t.type === `logout` && (this.data = void 0)
      })
    }
    async refresh() {
      try {
        var e, t;
        return this.loading = !0, this.data = await z.me(), this.lastFetch = Date.now(), (e = this.channel) == null || e.postMessage(JSON.stringify({
          type: `refresh`,
          data: this.data
        })), (t = this.data) != null && t.id && $.setUserId(this.data.id), !0
      } catch (e) {
        return console.error(e), oe.warning(m.no_internet_access(), {
          duration: 1e4
        }), !1
      } finally {
        this.loading = !1
      }
    }
    async logout() {
      var e;
      await z.logout(), (e = this.channel) == null || e.postMessage(JSON.stringify({
        type: `logout`
      })), this.data = void 0
    }
    hasColor(e) {
      var t;
      return e < 32 || !!((((t = this.data) == null ? void 0 : t.extraColorsBitmap) ?? 0) & 1 << e - 32)
    }
    hasPermission(e) {
      var t;
      return Bl((t = this.data) == null ? void 0 : t.permissions, e)
    }
    hasAnyPermission(e) {
      var t;
      return Vl((t = this.data) == null ? void 0 : t.permissions, e)
    }
  },
  q, J = Array(128).fill(void 0);
J.push(void 0, null, !0, !1);

function Y(e) {
  return J[e]
}
var nu = J.length;

function X(e) {
  nu === J.length && J.push(J.length + 1);
  let t = nu;
  return nu = J[t], J[t] = e, t
}

function Z(e, t) {
  try {
    return e.apply(this, t)
  } catch (e) {
    q.__wbindgen_export_0(X(e))
  }
}

function Q(e) {
  return e == null
}
var ru = typeof TextDecoder < `u` ? new TextDecoder(`utf-8`, {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error(`TextDecoder not available`)
  }
};
typeof TextDecoder < `u` && ru.decode();
var iu = null;

function au() {
  return (iu === null || iu.byteLength === 0) && (iu = new Uint8Array(q.memory.buffer)), iu
}

function ou(e, t) {
  return e >>>= 0, ru.decode(au().subarray(e, e + t))
}

function su(e) {
  e < 132 || (J[e] = nu, nu = e)
}

function cu(e) {
  let t = Y(e);
  return su(e), t
}
var lu = null;

function uu() {
  return (lu === null || lu.buffer.detached === !0 || lu.buffer.detached === void 0 && lu.buffer !== q.memory.buffer) && (lu = new DataView(q.memory.buffer)), lu
}

function du(e) {
  q.set_automated_clicks(e)
}

function fu(e) {
  q.set_integrity_flags(e)
}
var pu = 0,
  mu = typeof TextEncoder < `u` ? new TextEncoder(`utf-8`) : {
    encode: () => {
      throw Error(`TextEncoder not available`)
    }
  },
  hu = typeof mu.encodeInto == `function` ? function(e, t) {
    return mu.encodeInto(e, t)
  } : function(e, t) {
    let n = mu.encode(e);
    return t.set(n), {
      read: e.length,
      written: n.length
    }
  };

function gu(e, t, n) {
  if (n === void 0) {
    let n = mu.encode(e),
      r = t(n.length, 1) >>> 0;
    return au().subarray(r, r + n.length).set(n), pu = n.length, r
  }
  let r = e.length,
    i = t(r, 1) >>> 0,
    a = au(),
    o = 0;
  for (; o < r; o++) {
    let t = e.charCodeAt(o);
    if (t > 127) break;
    a[i + o] = t
  }
  if (o !== r) {
    o !== 0 && (e = e.slice(o)), i = n(i, r, r = o + e.length * 3, 1) >>> 0;
    let t = au().subarray(i + o, i + r),
      a = hu(e, t);
    o += a.written, i = n(i, r, o, 1) >>> 0
  }
  return pu = o, i
}

function _u(e) {
  let t = gu(e, q.__wbindgen_export_1, q.__wbindgen_export_2),
    n = pu;
  q.set_detected_bot(t, n)
}

function vu(e) {
  let t = gu(e, q.__wbindgen_export_1, q.__wbindgen_export_2),
    n = pu;
  q.set_fingerprint(t, n)
}

function yu(e) {
  let t, n;
  try {
    let a = q.__wbindgen_add_to_stack_pointer(-16),
      o = gu(e, q.__wbindgen_export_1, q.__wbindgen_export_2),
      s = pu;
    q.get_pawtected_endpoint_payload(a, o, s);
    var r = uu().getInt32(a + 0, !0),
      i = uu().getInt32(a + 4, !0);
    return t = r, n = i, ou(r, i)
  } finally {
    q.__wbindgen_add_to_stack_pointer(16), q.__wbindgen_export_3(t, n, 1)
  }
}

function bu(e) {
  q.set_cf_likely_automated(e)
}

function xu(e) {
  let t = gu(e, q.__wbindgen_export_1, q.__wbindgen_export_2),
    n = pu;
  q.request_url(t, n)
}

function Su(e) {
  q.set_user_id(e)
}

function Cu(e) {
  let t = gu(e, q.__wbindgen_export_1, q.__wbindgen_export_2),
    n = pu;
  q.set_discord_id(t, n)
}

function wu(e) {
  q.set_automated_browser(e)
}
async function Tu(e, t) {
  if (typeof Response == `function` && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == `function`) try {
      return await WebAssembly.instantiateStreaming(e, t)
    } catch (t) {
      if (e.headers.get(`Content-Type`) != `application/wasm`) console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", t);
      else throw t
    }
    let n = await e.arrayBuffer();
    return await WebAssembly.instantiate(n, t)
  } {
    let n = await WebAssembly.instantiate(e, t);
    return n instanceof WebAssembly.Instance ? {
      instance: n,
      module: e
    } : n
  }
}

function Eu() {
  let e = {};
  return e.wbg = {}, e.wbg.__wbg_buffer_609cc3eee51ed158 = function(e) {
    let t = Y(e).buffer;
    return X(t)
  }, e.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return Z(function(e, t) {
      return X(Y(e).call(Y(t)))
    }, arguments)
  }, e.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return Z(function(e, t, n) {
      return X(Y(e).call(Y(t), Y(n)))
    }, arguments)
  }, e.wbg.__wbg_crypto_574e78ad8b13b65f = function(e) {
    let t = Y(e).crypto;
    return X(t)
  }, e.wbg.__wbg_document_d249400bd7bd996d = function(e) {
    let t = Y(e).document;
    return Q(t) ? 0 : X(t)
  }, e.wbg.__wbg_getOwnPropertyDescriptor_5e8ddf002549cc1f = function() {
    return Z(function(e, t) {
      return X(Reflect.getOwnPropertyDescriptor(Y(e), Y(t)))
    }, arguments)
  }, e.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return Z(function(e, t) {
      Y(e).getRandomValues(Y(t))
    }, arguments)
  }, e.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return Z(function(e, t) {
      return X(Reflect.get(Y(e), Y(t)))
    }, arguments)
  }, e.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return Z(function(e) {
      return Y(e).hasFocus()
    }, arguments)
  }, e.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return Z(function(e) {
      let t = Y(e).innerWidth;
      return X(t)
    }, arguments)
  }, e.wbg.__wbg_instanceof_Object_7f2dcef8f78644a4 = function(e) {
    let t;
    try {
      t = Y(e) instanceof Object
    } catch {
      t = !1
    }
    return t
  }, e.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(e) {
    let t;
    try {
      t = Y(e) instanceof Window
    } catch {
      t = !1
    }
    return t
  }, e.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(e) {
    let t = Y(e).msCrypto;
    return X(t)
  }, e.wbg.__wbg_navigator_1577371c070c8947 = function(e) {
    let t = Y(e).navigator;
    return X(t)
  }, e.wbg.__wbg_new_a12002a7f91c75be = function(e) {
    return X(new Uint8Array(Y(e)))
  }, e.wbg.__wbg_newnoargs_105ed471475aaf50 = function(e, t) {
    return X(Function(ou(e, t)))
  }, e.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(e, t, n) {
    return X(new Uint8Array(Y(e), t >>> 0, n >>> 0))
  }, e.wbg.__wbg_newwithlength_a381634e90c276d4 = function(e) {
    return X(new Uint8Array(e >>> 0))
  }, e.wbg.__wbg_node_905d3e251edff8a2 = function(e) {
    let t = Y(e).node;
    return X(t)
  }, e.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, e.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(e) {
    let t = Y(e).process;
    return X(t)
  }, e.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return Z(function(e, t) {
      Y(e).randomFillSync(cu(t))
    }, arguments)
  }, e.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return Z(function() {
      let e = module.require;
      return X(e)
    }, arguments)
  }, e.wbg.__wbg_set_65595bdd868b3009 = function(e, t, n) {
    Y(e).set(Y(t), n >>> 0)
  }, e.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    let e = typeof global > `u` ? null : global;
    return Q(e) ? 0 : X(e)
  }, e.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    let e = typeof globalThis > `u` ? null : globalThis;
    return Q(e) ? 0 : X(e)
  }, e.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    let e = typeof self > `u` ? null : self;
    return Q(e) ? 0 : X(e)
  }, e.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    let e = typeof window > `u` ? null : window;
    return Q(e) ? 0 : X(e)
  }, e.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(e, t, n) {
    return X(Y(e).subarray(t >>> 0, n >>> 0))
  }, e.wbg.__wbg_versions_c01dfd4722a88165 = function(e) {
    let t = Y(e).versions;
    return X(t)
  }, e.wbg.__wbindgen_boolean_get = function(e) {
    let t = Y(e);
    return typeof t == `boolean` ? +!!t : 2
  }, e.wbg.__wbindgen_is_function = function(e) {
    return typeof Y(e) == `function`
  }, e.wbg.__wbindgen_is_null = function(e) {
    return Y(e) === null
  }, e.wbg.__wbindgen_is_object = function(e) {
    let t = Y(e);
    return typeof t == `object` && !!t
  }, e.wbg.__wbindgen_is_string = function(e) {
    return typeof Y(e) == `string`
  }, e.wbg.__wbindgen_is_undefined = function(e) {
    return Y(e) === void 0
  }, e.wbg.__wbindgen_memory = function() {
    let e = q.memory;
    return X(e)
  }, e.wbg.__wbindgen_number_get = function(e, t) {
    let n = Y(t),
      r = typeof n == `number` ? n : void 0;
    uu().setFloat64(e + 8, Q(r) ? 0 : r, !0), uu().setInt32(e + 0, !Q(r), !0)
  }, e.wbg.__wbindgen_object_clone_ref = function(e) {
    return X(Y(e))
  }, e.wbg.__wbindgen_object_drop_ref = function(e) {
    cu(e)
  }, e.wbg.__wbindgen_string_new = function(e, t) {
    return X(ou(e, t))
  }, e.wbg.__wbindgen_throw = function(e, t) {
    throw Error(ou(e, t))
  }, e
}

function Du(e, t) {
  return q = e.exports, Ou.__wbindgen_wasm_module = t, lu = null, iu = null, q
}
async function Ou(e) {
  if (q !== void 0) return q;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? {
    module_or_path: e
  } = e : console.warn(`using deprecated parameters for the initialization function; pass a single object instead`)), e === void 0 && (e = new URL(`pawtect_wasm_bg.wasm`, `` + import.meta.url));
  let t = Eu();
  (typeof e == `string` || typeof Request == `function` && e instanceof Request || typeof URL == `function` && e instanceof URL) && (e = fetch(e));
  let {
    instance: n,
    module: r
  } = await Tu(await e, t);
  return Du(n, r)
}
var ku = class {
  constructor() {
    s(this, `interval`, void 0), s(this, `storagesEmpty`, !1), s(this, `storages`, [new ju, new Mu, new Nu, new Pu]), s(this, `pawtectLoaded`, void 0), s(this, `pawtectError`, void 0)
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!K.data || this.storagesEmpty) && !localStorage.getItem(ju.KEY)) {
        for (let e of this.storages) {
          let t = e.get();
          if (t) {
            for (let e of this.storages) e.set(t);
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
    let t = R.day;
    for (let n of this.storages) {
      let r = n.get();
      if (r && !(r.timestamp + t < Date.now()) && r.userId !== e) return !0
    }
    let n = {
      userId: e,
      timestamp: Date.now()
    };
    for (let e of this.storages) e.set(n);
    return this.storagesEmpty = !1, !1
  }
  loadPawtect() {
    return this.pawtectLoaded || (this.pawtectLoaded = (async () => {
      try {
        var e;
        await Ou(ce), (e = K.data) != null && e.id && Su(K.data.id);
        let t = fetch;
        return Object.assign(window, {
          fetch: Au((e, n) => {
            let r = null;
            return e instanceof Request ? r = e.url : e instanceof URL ? r = e.href : typeof e == `string` && (r = e), r !== null && !r.startsWith(`/`) && xu(r), t.call(window, e, n)
          })
        }), !0
      } catch (e) {
        return console.error(`Error loading Pawtect WASM:`, e), this.pawtectError = e, this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(e) {
    await this.loadPawtect(), Su(e)
  }
  async setCfLikelyAutomated(e) {
    await this.loadPawtect(), bu(e)
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
    if (!await this.loadPawtect()) throw Error(m.wasm_error());
    let t = navigator.webdriver,
      [n, r] = await Promise.all([Ro(), _t().catch(e => (console.error(e), {
        bot: !1
      }))]);
    return Su(K.data.id), Cu(K.data.discordId ?? ``), vu(n), wu(t), du(j.automatedClicks), fu(me(K.data)), r.bot && _u(r.botKind ?? `unknown`), yu(e)
  }
};

function Au(e) {
  return e.bind().bind()
}
var ju = class e {
  static codec(e) {
    let t = new TextEncoder().encode(this.XOR_KEY),
      n = new Uint8Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = e[r] ^ t[r % t.length];
    return n
  }
  get() {
    try {
      let t = localStorage.getItem(e.KEY);
      if (!t) return;
      let n = Uint8Array.from(atob(t), e => e.charCodeAt(0)),
        r = new TextDecoder().decode(e.codec(n));
      return JSON.parse(r)
    } catch {
      return
    }
  }
  set(t) {
    let n = new TextEncoder().encode(JSON.stringify(t)),
      r = e.codec(n);
    localStorage.setItem(e.KEY, btoa(String.fromCharCode(...r)))
  }
};
s(ju, `KEY`, `ui_layout_v3`), s(ju, `XOR_KEY`, `wplace-prefs`);
var Mu = class e {
  get() {
    try {
      let t = sessionStorage.getItem(e.KEY);
      if (!t) return;
      let n = ``;
      for (let r = 0; r < t.length; r += 4) {
        let i = parseInt(t.slice(r, r + 4), 16);
        n += String.fromCharCode(i - e.SHIFT & 65535)
      }
      return JSON.parse(n)
    } catch {
      return
    }
  }
  set(t) {
    let n = JSON.stringify(t),
      r = ``;
    for (let t of n) {
      let n = t.charCodeAt(0) + e.SHIFT & 65535;
      r += n.toString(16).padStart(4, `0`)
    }
    sessionStorage.setItem(e.KEY, r)
  }
};
s(Mu, `KEY`, `nav.cursor`), s(Mu, `SHIFT`, 13);
var Nu = class e {
  get() {
    let t = document.cookie.match(RegExp(`(?:^|; )` + e.KEY + `=([^;]*)`));
    if (t) try {
      let [e, n] = decodeURIComponent(t[1]).split(`.`), r = parseInt(e, 36), i = parseInt(n, 36);
      return !Number.isFinite(r) || !Number.isFinite(i) ? void 0 : {
        userId: r,
        timestamp: i
      }
    } catch {
      return
    }
  }
  set(t) {
    let n = `${t.userId.toString(36)}.${t.timestamp.toString(36)}`;
    document.cookie = `${e.KEY}=${encodeURIComponent(n)};path=/;max-age=${e.MAX_AGE};SameSite=Lax`
  }
};
s(Nu, `KEY`, `_pf_uid`), s(Nu, `MAX_AGE`, 31536e3);
var Pu = class {
    constructor() {
      s(this, `packed`, void 0)
    }
    get() {
      if (this.packed !== void 0) return {
        userId: Number(this.packed & 4294967295n),
        timestamp: Number(this.packed >> 32n)
      }
    }
    set(e) {
      this.packed = BigInt(e.timestamp) << 32n | BigInt(e.userId) & 4294967295n
    }
  },
  $ = new ku;
export {
  Rs as $, Ac as A, ac as B, z as C, St as Ct, Ic as D, de as Dt, Lc as E, le as Et, Cc as F, Zs as G, ec as H, wc as I, oc as J, nc as K, _c as L, Oc as M, jc as N, Fc as O, fe as Ot, R as P, Vs as Q, ic as R, gl as S, Ct as St, Hc as T, yt as Tt, Qs as U, tc as V, rc as W, Js as X, F as Y, Hs as Z, Cl as _, Ss as _t, Kl as a, P as at, fl as b, Ro as bt, zl as c, ks as ct, El as d, As as dt, Ls as et, _l as f, gs as ft, Sl as g, bs as gt, vl as h, xs as ht, Gl as i, Is as it, kc as j, Mc as k, ol as l, Ms as lt, wl as m, Cs as mt, K as n, Bs as nt, ql as o, N as ot, Tl as p, M as pt, sc as q, Wl as r, Fs as rt, Hl as s, Os as st, $ as t, zs as tt, dl as u, js as ut, Nl as v, fs as vt, Gc as w, bt as wt, Ol as x, wt as xt, Ml as y, j as yt, $s as z
};