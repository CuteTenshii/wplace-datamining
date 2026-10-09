const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./CCTyltoX.js", "./D2z8HFb7.js", "./B4266N1A.js", "./pKOrQQBa.js"]))) => i.map(i => d[i]);
import {
  Bt as e,
  It as t,
  Lt as n,
  Nt as r,
  jt as i,
  kt as a,
  mt as o,
  on as s,
  ut as c,
  vt as l,
  xt as u
} from "./D2z8HFb7.js";
import {
  a as d
} from "./B4266N1A.js";
import {
  n as f,
  t as p
} from "./a7QZC4SB.js";
import {
  n as m
} from "./16AH6ZqH.js";
import {
  t as h
} from "./D3UrmB6s.js";
import {
  n as ee,
  o as te,
  t as ne
} from "./pKOrQQBa.js";
import {
  i as re,
  r as ie
} from "./DOmS4MBC.js";
var ae = `` + new URL(`../assets/pawtect_wasm_bg.8VPqYlMZ.wasm`, import.meta.url).href,
  oe = `2.0.0`,
  g = {
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
  _ = class e extends Error {
    constructor(t, n) {
      super(n), this.state = t, this.name = `BotdError`, Object.setPrototypeOf(this, e.prototype)
    }
  };

function se(e, t) {
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
      botKind: g.Unknown
    }), n[i] = s, s.bot && (r = s)
  }
  return [n, r]
}
async function ce(e) {
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
      e instanceof _ ? t[n] = {
        state: e.state,
        error: `${e.name}: ${e.message}`
      } : t[n] = {
        state: -3,
        error: e instanceof Error ? `${e.name}: ${e.message}` : String(e)
      }
    }
  })), t
}

function le({
  appVersion: e
}) {
  if (e.state !== 0) return !1;
  if (/headless/i.test(e.value)) return g.HeadlessChrome;
  if (/electron/i.test(e.value)) return g.Electron;
  if (/slimerjs/i.test(e.value)) return g.SlimerJS
}

function ue(e, t) {
  return e.indexOf(t) !== -1
}

function v(e, t) {
  return e.indexOf(t) !== -1
}

function de(e, t) {
  if (`find` in e) return e.find(t);
  for (let n = 0; n < e.length; n++)
    if (t(e[n], n, e)) return e[n]
}

function fe(e) {
  return Object.getOwnPropertyNames(e)
}

function pe(e, ...t) {
  for (let n of t)
    if (typeof n == `string`) {
      if (ue(e, n)) return !0
    } else if (de(e, e => n.test(e)) != null) return !0;
  return !1
}

function me(e) {
  return e.reduce((e, t) => e + +!!t, 0)
}

function he({
  documentElementKeys: e
}) {
  if (e.state !== 0) return !1;
  if (pe(e.value, `selenium`, `webdriver`, `driver`)) return g.Selenium
}

function ge({
  errorTrace: e
}) {
  if (e.state !== 0) return !1;
  if (/PhantomJS/i.test(e.value)) return g.PhantomJS
}

function _e({
  evalLength: e,
  browserKind: t,
  browserEngineKind: n
}) {
  if (e.state !== 0 || t.state !== 0 || n.state !== 0) return;
  let r = e.value;
  return n.value === `unknown` ? !1 : r === 37 && !ue([`webkit`, `gecko`], n.value) || r === 39 && !ue([`internet_explorer`], t.value) || r === 33 && !ue([`chromium`], n.value)
}

function ve({
  functionBind: e
}) {
  if (e.state === -2) return g.PhantomJS
}

function ye({
  languages: e
}) {
  if (e.state === 0 && e.value.length === 0) return g.HeadlessChrome
}

function be({
  mimeTypesConsistent: e
}) {
  if (e.state === 0 && !e.value) return g.Unknown
}

function xe({
  notificationPermissions: e,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== `chrome`) return !1;
  if (e.state === 0 && e.value) return g.HeadlessChrome
}

function Se({
  pluginsArray: e
}) {
  if (e.state === 0 && !e.value) return g.HeadlessChrome
}

function Ce({
  pluginsLength: e,
  android: t,
  browserKind: n,
  browserEngineKind: r
}) {
  if (e.state === 0 && t.state === 0 && n.state === 0 && r.state === 0 && !(n.value !== `chrome` || t.value || r.value !== `chromium`) && e.value === 0) return g.HeadlessChrome
}

function we({
  process: e
}) {
  var t;
  if (e.state !== 0) return !1;
  if (e.value.type === `renderer` || ((t = e.value.versions) == null ? void 0 : t.electron) != null) return g.Electron
}

function Te({
  productSub: e,
  browserKind: t
}) {
  if (e.state !== 0 || t.state !== 0) return !1;
  if ((t.value === `chrome` || t.value === `safari` || t.value === `opera` || t.value === `wechat`) && e.value !== `20030107`) return g.Unknown
}

function Ee({
  userAgent: e
}) {
  if (e.state !== 0) return !1;
  if (/PhantomJS/i.test(e.value)) return g.PhantomJS;
  if (/Headless/i.test(e.value)) return g.HeadlessChrome;
  if (/Electron/i.test(e.value)) return g.Electron;
  if (/slimerjs/i.test(e.value)) return g.SlimerJS
}

function De({
  webDriver: e
}) {
  if (e.state === 0 && e.value) return g.HeadlessChrome
}

function Oe({
  webGL: e
}) {
  if (e.state === 0) {
    let {
      vendor: t,
      renderer: n
    } = e.value;
    if (t == `Brian Paul` && n == `Mesa OffScreen`) return g.HeadlessChrome
  }
}

function ke({
  windowExternal: e
}) {
  if (e.state !== 0) return !1;
  if (/Sequentum/i.test(e.value)) return g.Sequentum
}

function Ae({
  windowSize: e,
  documentFocus: t
}) {
  if (e.state !== 0 || t.state !== 0) return !1;
  let {
    outerWidth: n,
    outerHeight: r
  } = e.value;
  if (t.value && n === 0 && r === 0) return g.HeadlessChrome
}

function je({
  distinctiveProps: e
}) {
  if (e.state !== 0) return !1;
  let t = e.value,
    n;
  for (n in t)
    if (t[n]) return n
}
var Me = {
  detectAppVersion: le,
  detectDocumentAttributes: he,
  detectErrorTrace: ge,
  detectEvalLengthInconsistency: _e,
  detectFunctionBind: ve,
  detectLanguagesLengthInconsistency: ye,
  detectNotificationPermissions: xe,
  detectPluginsArray: Se,
  detectPluginsLengthInconsistency: Ce,
  detectProcess: we,
  detectUserAgent: Ee,
  detectWebDriver: De,
  detectWebGL: Oe,
  detectWindowExternal: ke,
  detectWindowSize: Ae,
  detectMimeTypesConsistent: be,
  detectProductSub: Te,
  detectDistinctiveProperties: je
};

function Ne() {
  let e = navigator.appVersion;
  if (e == null) throw new _(-1, `navigator.appVersion is undefined`);
  return e
}

function Pe() {
  if (document.documentElement === void 0) throw new _(-1, `document.documentElement is undefined`);
  let {
    documentElement: e
  } = document;
  if (typeof e.getAttributeNames != `function`) throw new _(-2, `document.documentElement.getAttributeNames is not a function`);
  return e.getAttributeNames()
}

function Fe() {
  try {
    null[0]()
  } catch (e) {
    if (e instanceof Error && e.stack != null) return e.stack.toString()
  }
  throw new _(-3, `errorTrace signal unexpected behaviour`)
}

function Ie() {
  return eval.toString().length
}

function Le() {
  if (Function.prototype.bind === void 0) throw new _(-2, `Function.prototype.bind is undefined`);
  return Function.prototype.bind.toString()
}

function Re() {
  var e;
  let t = window,
    n = navigator;
  return me([`webkitPersistentStorage` in n, `webkitTemporaryStorage` in n, n.vendor.indexOf(`Google`) === 0, `webkitResolveLocalFileSystemURL` in t, `BatteryManager` in t, `webkitMediaStream` in t, `webkitSpeechGrammar` in t]) >= 5 ? `chromium` : me([`ApplePayError` in t, `CSSPrimitiveValue` in t, `Counter` in t, n.vendor.indexOf(`Apple`) === 0, `getStorageUpdates` in n, `WebKitMediaKeys` in t]) >= 4 ? `webkit` : me([`buildID` in navigator, `MozAppearance` in (((e = document.documentElement) == null ? void 0 : e.style) ?? {}), `onmozfullscreenchange` in t, `mozInnerScreenX` in t, `CSSMozDocumentRule` in t, `CanvasCaptureMediaStream` in t]) >= 4 ? `gecko` : `unknown`
}

function ze() {
  var e;
  let t = (e = navigator.userAgent) == null ? void 0 : e.toLowerCase();
  return v(t, `edg/`) ? `edge` : v(t, `trident`) || v(t, `msie`) ? `internet_explorer` : v(t, `wechat`) ? `wechat` : v(t, `firefox`) ? `firefox` : v(t, `opera`) || v(t, `opr`) ? `opera` : v(t, `chrome`) ? `chrome` : v(t, `safari`) ? `safari` : `unknown`
}

function Be() {
  let e = Re(),
    t = e === `chromium`,
    n = e === `gecko`,
    r = window,
    i = navigator,
    a = `connection`;
  return t ? me([!(`SharedWorker` in r), i[a] && `ontypechange` in i[a], !(`sinkId` in new Audio)]) >= 2 : n ? me([`onorientationchange` in r, `orientation` in r, /android/i.test(i.appVersion)]) >= 2 : !1
}

function Ve() {
  return document.hasFocus !== void 0 && document.hasFocus()
}

function He() {
  let e = window;
  return me([!(`MediaSettingsRange` in e), `RTCEncodedAudioFrame` in e, `` + e.Intl == `[object Intl]`, `` + e.Reflect == `[object Reflect]`]) >= 3
}

function Ue() {
  let e = navigator,
    t = [],
    n = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if (n !== void 0 && t.push([n]), Array.isArray(e.languages)) Re() === `chromium` && He() || t.push(e.languages);
  else if (typeof e.languages == `string`) {
    let n = e.languages;
    n && t.push(n.split(`,`))
  }
  return t
}

function We() {
  if (navigator.mimeTypes === void 0) throw new _(-1, `navigator.mimeTypes is undefined`);
  let {
    mimeTypes: e
  } = navigator, t = Object.getPrototypeOf(e) === MimeTypeArray.prototype;
  for (let n = 0; n < e.length; n++) t && (t = Object.getPrototypeOf(e[n]) === MimeType.prototype);
  return t
}
async function Ge() {
  if (window.Notification === void 0) throw new _(-1, `window.Notification is undefined`);
  if (navigator.permissions === void 0) throw new _(-1, `navigator.permissions is undefined`);
  let {
    permissions: e
  } = navigator;
  if (typeof e.query != `function`) throw new _(-2, `navigator.permissions.query is not a function`);
  try {
    let t = await e.query({
      name: `notifications`
    });
    return window.Notification.permission === `denied` && t.state === `prompt`
  } catch {
    throw new _(-3, `notificationPermissions signal unexpected behaviour`)
  }
}

function Ke() {
  if (navigator.plugins === void 0) throw new _(-1, `navigator.plugins is undefined`);
  if (window.PluginArray === void 0) throw new _(-1, `window.PluginArray is undefined`);
  return navigator.plugins instanceof PluginArray
}

function qe() {
  if (navigator.plugins === void 0) throw new _(-1, `navigator.plugins is undefined`);
  if (navigator.plugins.length === void 0) throw new _(-3, `navigator.plugins.length is undefined`);
  return navigator.plugins.length
}

function Je() {
  let {
    process: e
  } = window, t = `window.process is`;
  if (e === void 0) throw new _(-1, `${t} undefined`);
  if (e && typeof e != `object`) throw new _(-3, `${t} not an object`);
  return e
}

function Ye() {
  let {
    productSub: e
  } = navigator;
  if (e === void 0) throw new _(-1, `navigator.productSub is undefined`);
  return e
}

function Xe() {
  if (navigator.connection === void 0) throw new _(-1, `navigator.connection is undefined`);
  if (navigator.connection.rtt === void 0) throw new _(-1, `navigator.connection.rtt is undefined`);
  return navigator.connection.rtt
}

function Ze() {
  return navigator.userAgent
}

function Qe() {
  if (navigator.webdriver == null) throw new _(-1, `navigator.webdriver is undefined`);
  return navigator.webdriver
}

function $e() {
  let e = document.createElement(`canvas`);
  if (typeof e.getContext != `function`) throw new _(-2, `HTMLCanvasElement.getContext is not a function`);
  let t = e.getContext(`webgl`);
  if (t === null) throw new _(-4, `WebGLRenderingContext is null`);
  if (typeof t.getParameter != `function`) throw new _(-2, `WebGLRenderingContext.getParameter is not a function`);
  return {
    vendor: t.getParameter(t.VENDOR),
    renderer: t.getParameter(t.RENDERER)
  }
}

function et() {
  if (window.external === void 0) throw new _(-1, `window.external is undefined`);
  let {
    external: e
  } = window;
  if (typeof e.toString != `function`) throw new _(-2, `window.external.toString is not a function`);
  return e.toString()
}

function tt() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function nt() {
  let e = {
      [g.Awesomium]: {
        window: [`awesomium`]
      },
      [g.Cef]: {
        window: [`RunPerfTest`]
      },
      [g.CefSharp]: {
        window: [`CefSharp`]
      },
      [g.CoachJS]: {
        window: [`emit`]
      },
      [g.FMiner]: {
        window: [`fmget_targets`]
      },
      [g.Geb]: {
        window: [`geb`]
      },
      [g.NightmareJS]: {
        window: [`__nightmare`, `nightmare`]
      },
      [g.Phantomas]: {
        window: [`__phantomas`]
      },
      [g.PhantomJS]: {
        window: [`callPhantom`, `_phantom`]
      },
      [g.Rhino]: {
        window: [`spawn`]
      },
      [g.Selenium]: {
        window: [`_Selenium_IDE_Recorder`, `_selenium`, `calledSelenium`, /^([a-z]){3}_.*_(Array|Promise|Symbol)$/],
        document: [`__selenium_evaluate`, `selenium-evaluate`, `__selenium_unwrapped`]
      },
      [g.WebDriverIO]: {
        window: [`wdioElectron`]
      },
      [g.WebDriver]: {
        window: [`webdriver`, `__webdriverFunc`, `__lastWatirAlert`, `__lastWatirConfirm`, `__lastWatirPrompt`, `_WEBDRIVER_ELEM_CACHE`, `ChromeDriverw`],
        document: [`__webdriver_script_fn`, `__driver_evaluate`, `__webdriver_evaluate`, `__fxdriver_evaluate`, `__driver_unwrapped`, `__webdriver_unwrapped`, `__fxdriver_unwrapped`, `__webdriver_script_fn`, `__webdriver_script_func`, `__webdriver_script_function`, `$cdc_asdjflasutopfhvcZLmcf`, `$cdc_asdjflasutopfhvcZLmcfl_`, `$chrome_asyncScriptInfo`, `__$webdriverAsyncExecutor`]
      },
      [g.HeadlessChrome]: {
        window: [`domAutomation`, `domAutomationController`]
      }
    },
    t, n = {},
    r = fe(window),
    i = [];
  for (t in window.document !== void 0 && (i = fe(window.document)), e) {
    let a = e[t];
    if (a !== void 0) {
      let e = a.window !== void 0 && pe(r, ...a.window),
        o = a.document === void 0 || !i.length ? !1 : pe(i, ...a.document);
      n[t] = e || o
    }
  }
  return n
}
var rt = {
    android: Be,
    browserKind: ze,
    browserEngineKind: Re,
    documentFocus: Ve,
    userAgent: Ze,
    appVersion: Ne,
    rtt: Xe,
    windowSize: tt,
    pluginsLength: qe,
    pluginsArray: Ke,
    errorTrace: Fe,
    productSub: Ye,
    windowExternal: et,
    mimeTypesConsistent: We,
    evalLength: Ie,
    webGL: $e,
    webDriver: Qe,
    languages: Ue,
    notificationPermissions: Ge,
    documentElementKeys: Pe,
    functionBind: Le,
    process: Je,
    distinctiveProps: nt
  },
  it = class {
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
      let [e, t] = se(this.components, Me);
      return this.detections = e, t
    }
    async collect() {
      return this.components = await ce(rt), this.components
    }
  };

function at() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    let e = new XMLHttpRequest;
    e.open(`get`, `https://m1.openfpcdn.io/botd/v${oe}/npm-monitoring`, !0), e.send()
  } catch (e) {
    console.error(e)
  }
}
async function ot({
  monitoring: e = !0
} = {}) {
  e && at();
  let t = new it;
  return await t.collect(), t
}
var st = null;
async function ct() {
  return await lt() ? {
    bot: !1
  } : (await ut()).detect()
}
async function lt() {
  var e;
  let t = navigator;
  if (!((e = t.brave) != null && e.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(t.userAgent)) return !1;
  try {
    return await t.brave.isBrave()
  } catch {
    return !1
  }
}

function ut() {
  return st || (st = ot({
    monitoring: !1
  })), st
}
dt.listeners = [], dt.createListener = e => () => {
  let t = e(),
    n = {};
  for (let e in t) n[e] = t[e]();
  Object.assign(window, n)
}, dt.init = () => dt.listeners.forEach(e => e());

function dt(e) {}
var ft = /; wv\)|FBAN|FBAV|Instagram|BytedanceWebview|musical_ly|Line\/|Snapchat|Twitter|MicroMessenger/i;

function pt() {
  return !mt() && ft.test(navigator.userAgent)
}

function mt() {
  var e, t;
  return !!((e = window.Capacitor) != null && (t = e.isNativePlatform) != null && t.call(e))
}

function ht(e = void 0) {
  let t = (e == null ? void 0 : e.userAgent) ?? navigator.userAgent,
    n = (e == null ? void 0 : e.vendor) ?? navigator.vendor;
  return `brave` in navigator ? `Brave` : /\bEdg(?:e|A|iOS)?\//.test(t) ? `Edge` : /\bOPR\/|\bOpera\//.test(t) ? `Opera` : /\bVivaldi\//.test(t) ? `Vivaldi` : /\bYaBrowser\//.test(t) ? `Yandex` : /\bSamsungBrowser\//.test(t) ? `Samsung Internet` : /\bUCBrowser\/|\bUCWEB\//.test(t) ? `UC Browser` : /\bDuckDuckGo\/|\bDdg\//.test(t) ? `DuckDuckGo` : getComputedStyle(document.documentElement).getPropertyValue(`--arc-palette-title`) ? `Arc` : /Firefox\/|FxiOS\//.test(t) ? `Firefox` : /Chrome\/|CriOS\//.test(t) && /google/i.test(n) ? `Chrome` : /Safari\//.test(t) && /apple/i.test(n) ? `Safari` : `Unknown`
}
var gt = void 0;

function _t() {
  return gt || (gt = vt()), gt
}

function vt() {
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
async function yt() {
  let e;
  try {
    e = document.createElement(`canvas`);
    let t = e.getContext(`2d`, {
      willReadFrequently: !1
    });
    if (!t) throw Error(`canvas context blocked`);
    let n = xt.replace(/!important/gm, ``);
    St({
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
    bt(e)
  }
}

function bt(e) {
  e && (e.width = 0, e.height = 0, e.remove())
}
var xt = `
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
  St = ({
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
    }, h = (e, t, n, r) => {
      let {
        width: i,
        height: a
      } = n;
      e.beginPath(), e.arc(d(r(), t, i), d(r(), t, a), d(r(), t, Math.min(i, a)), d(r(), t, 2 * Math.PI, !0), d(r(), t, 2 * Math.PI, !0)), e.stroke()
    }, ee = (e, t, n, r) => {
      let {
        width: i,
        height: a
      } = n;
      e.beginPath(), e.moveTo(d(r(), t, i), d(r(), t, a)), e.bezierCurveTo(d(r(), t, i), d(r(), t, a), d(r(), t, i), d(r(), t, a), d(r(), t, i), d(r(), t, a)), e.stroke()
    }, te = (e, t, n, r) => {
      let {
        width: i,
        height: a
      } = n;
      e.beginPath(), e.moveTo(d(r(), t, i), d(r(), t, a)), e.quadraticCurveTo(d(r(), t, i), d(r(), t, a), d(r(), t, i), d(r(), t, a)), e.stroke()
    }, ne = (e, t, n, r) => {
      if (!(`ellipse` in e)) return;
      let {
        width: i,
        height: a
      } = n;
      e.beginPath(), e.ellipse(d(r(), t, i), d(r(), t, a), d(r(), t, Math.floor(i / 2)), d(r(), t, Math.floor(a / 2)), d(r(), t, 2 * Math.PI, !0), d(r(), t, 2 * Math.PI, !0), d(r(), t, 2 * Math.PI, !0)), e.stroke()
    }, re = [h, ee, te];
    _t() !== `WebKit` && re.push(ne), n && re.push(m), [...Array(a)].forEach(e => {
      f(t, c, i, p, u), t.shadowBlur = d(u(), c, o, !0), t.shadowColor = p[d(u(), c, p.length)];
      let n = re[d(u(), c, re.length)];
      n(t, c, i, u), t.fill()
    })
  },
  Ct = {
    7: [`Cambria Math`, `Lucida Console`],
    8: [`Aldhabi`, `Gadugi`, `Myanmar Text`, `Nirmala UI`],
    "8.1": [`Leelawadee UI`, `Javanese Text`, `Segoe UI Emoji`],
    10: [`HoloLens MDL2 Assets`, `Segoe MDL2 Assets`, `Bahnschrift`, `Ink Free`],
    11: [`Segoe Fluent Icons`]
  },
  wt = {
    "10.9": [`Helvetica Neue`, `Geneva`],
    "10.10": [`Kohinoor Devanagari Medium`, `Luminari`],
    "10.11": [`PingFang HK Light`],
    "10.12": [`American Typewriter Semibold`, `Futura Bold`, `SignPainter-HouseScript Semibold`],
    "10.13-10.14": [`InaiMathi Bold`],
    "10.15-11": [`Galvji`, `MuktaMahee Regular`],
    12: [`Noto Sans Gunjala Gondi Regular`, `Noto Sans Masaram Gondi Regular`, `Noto Serif Yezidi Regular`],
    13: [`Apple SD Gothic Neo ExtraBold`, `STIX Two Math Regular`, `STIX Two Text Regular`, `Noto Sans Canadian Aboriginal Regular`]
  },
  Tt = {
    "Microsoft Outlook": [`MS Outlook`],
    "Adobe Acrobat": [`ZWAdobeF`],
    LibreOffice: [`Amiri`, `KACSTOffice`, `Liberation Mono`, `Source Code Pro`],
    OpenOffice: [`DejaVu Sans`, `Gentium Book Basic`, `OpenSymbol`]
  },
  Et = Object.keys(wt).map(e => wt[e]).flat(),
  Dt = Object.keys(Ct).map(e => Ct[e]).flat(),
  Ot = Object.keys(Tt).map(e => Tt[e]).flat(),
  kt = [`Arimo`, `Chilanka`, `Cousine`, `Jomolhari`, `MONO`, `Noto Color Emoji`, `Ubuntu`],
  At = [`Dancing Script`, `Droid Sans Mono`, `Roboto`],
  jt = [...Et, ...Dt, ...kt, ...At, ...Ot].sort();
async function Mt() {
  return await (async e => {
    try {
      let t = [];
      document.fonts.check(`0px "${Nt()}"`) || (t = e.reduce((e, t) => (document.fonts.check(`0px "${t}"`) && e.push(t), e), []));
      let n = e.map(e => new FontFace(e, `local("${e}")`)),
        r = (await Promise.allSettled(n.map(e => e.load()))).reduce((e, t) => (t.status == `fulfilled` && e.push(t.value.family), e), []);
      return [...new Set([...t, ...r])].sort()
    } catch {
      return []
    }
  })(jt)
}

function Nt() {
  return String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7)
}
var Pt = `ALIASED_POINT_SIZE_RANGE.ALIASED_LINE_WIDTH_RANGE.STENCIL_VALUE_MASK.STENCIL_WRITEMASK.STENCIL_BACK_VALUE_MASK.STENCIL_BACK_WRITEMASK.MAX_TEXTURE_SIZE.MAX_VIEWPORT_DIMS.SUBPIXEL_BITS.MAX_VERTEX_ATTRIBS.MAX_VERTEX_UNIFORM_VECTORS.MAX_VARYING_VECTORS.MAX_COMBINED_TEXTURE_IMAGE_UNITS.MAX_VERTEX_TEXTURE_IMAGE_UNITS.MAX_TEXTURE_IMAGE_UNITS.MAX_FRAGMENT_UNIFORM_VECTORS.SHADING_LANGUAGE_VERSION.VENDOR.RENDERER.VERSION.MAX_CUBE_MAP_TEXTURE_SIZE.MAX_RENDERBUFFER_SIZE.MAX_3D_TEXTURE_SIZE.MAX_ELEMENTS_VERTICES.MAX_ELEMENTS_INDICES.MAX_TEXTURE_LOD_BIAS.MAX_DRAW_BUFFERS.MAX_FRAGMENT_UNIFORM_COMPONENTS.MAX_VERTEX_UNIFORM_COMPONENTS.MAX_ARRAY_TEXTURE_LAYERS.MAX_PROGRAM_TEXEL_OFFSET.MAX_VARYING_COMPONENTS.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS.MAX_COLOR_ATTACHMENTS.MAX_SAMPLES.MAX_VERTEX_UNIFORM_BLOCKS.MAX_FRAGMENT_UNIFORM_BLOCKS.MAX_COMBINED_UNIFORM_BLOCKS.MAX_UNIFORM_BUFFER_BINDINGS.MAX_UNIFORM_BLOCK_SIZE.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS.MAX_VERTEX_OUTPUT_COMPONENTS.MAX_FRAGMENT_INPUT_COMPONENTS.MAX_SERVER_WAIT_TIMEOUT.MAX_ELEMENT_INDEX.MAX_CLIENT_WAIT_TIMEOUT_WEBGL`.split(`.`).sort(),
  Ft = {
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
  It = new Set([`CLIP_DEPTH_MODE_EXT`, `CLIP_ORIGIN_EXT`, `DEPTH_CLAMP_EXT`, `GPU_DISJOINT_EXT`, `POLYGON_OFFSET_CLAMP_EXT`, `MAX_TEXTURE_MAX_ANISOTROPY_EXT`, `FRAGMENT_SHADER_DERIVATIVE_HINT_OES`, `VERTEX_ARRAY_BINDING_OES`, `MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL`, `UNMASKED_RENDERER_WEBGL`, `UNMASKED_VENDOR_WEBGL`, `MAX_COLOR_ATTACHMENTS_WEBGL`, `MAX_DRAW_BUFFERS_WEBGL`]);
async function Lt() {
  let e, t, n, r;
  try {
    let i = window,
      a = i.document;
    `OffscreenCanvas` in window ? (e = new i.OffscreenCanvas(256, 256), t = new i.OffscreenCanvas(256, 256)) : (e = a.createElement(`canvas`), t = a.createElement(`canvas`));
    let o = zt(e, `webgl`),
      s = zt(t, `webgl2`);
    if (n = o, r = s, !o) return;
    let c = (e, t) => {
        if (e) return {
          LOW_FLOAT: y(() => e.getShaderPrecisionFormat(e[t], e.LOW_FLOAT)),
          MEDIUM_FLOAT: y(() => e.getShaderPrecisionFormat(e[t], e.MEDIUM_FLOAT)),
          HIGH_FLOAT: y(() => e.getShaderPrecisionFormat(e[t], e.HIGH_FLOAT)),
          HIGH_INT: y(() => e.getShaderPrecisionFormat(e[t], e.HIGH_INT))
        }
      },
      l = (e, t) => {
        let n = {};
        if (!t) return n;
        for (let r in t) {
          let i = t[r];
          n[e + `.` + r + `.precision`] = i ? y(() => i.precision) : void 0, n[e + `.` + r + `.rangeMax`] = i ? y(() => i.rangeMax) : void 0, n[e + `.` + r + `.rangeMin`] = i ? y(() => i.rangeMin) : void 0
        }
        return n
      },
      u = e => {
        let t = {};
        if (!e) return t;
        let n = e;
        for (let r of Pt) {
          let i = n[r];
          if (i === void 0) continue;
          let a = e.getParameter(i);
          t[r] = a && ArrayBuffer.isView(a) ? Array.from(a) : a
        }
        return t
      },
      d = e => {
        if (!e) return [];
        let t = y(() => e.getContextAttributes());
        return t ? Object.keys(t).sort().map(e => `${e}=${t[e]}`) : []
      },
      f = e => {
        if (!e) return [];
        let t = [];
        for (let [n, r] of Object.entries(Ft)) {
          let i = y(() => e.getExtension(n));
          if (i)
            for (let n of r) {
              let r = i[n];
              if (typeof r != `number`) continue;
              if (!It.has(n)) {
                t.push(`${n}=${r}`);
                continue
              }
              let a = y(() => e.getParameter(r));
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
      m = e => e && y(() => e.getSupportedExtensions()) || [],
      h = {
        ...u(o),
        ...p(o)
      },
      ee = {
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
        ...h,
        ...ee,
        ...l(`VERTEX_SHADER`, c(o, `VERTEX_SHADER`)),
        ...l(`FRAGMENT_SHADER`, c(o, `FRAGMENT_SHADER`))
      }
    }
  } catch (e) {
    console.log(e);
    return
  } finally {
    Rt(e, n), Rt(t, r)
  }
}

function y(e) {
  try {
    return e()
  } catch {
    return
  }
}

function Rt(e, t) {
  if (e) {
    try {
      var n;
      t == null || (n = t.getExtension(`WEBGL_lose_context`)) == null || n.loseContext()
    } catch {}
    e.width = 0, e.height = 0, e instanceof HTMLCanvasElement && e.remove()
  }
}

function zt(e, t) {
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
var Bt = `client_timeout`,
  Vt = `network_connection`,
  Ht = `network_abort`,
  Ut = `csp_block`,
  Wt = `invalid_endpoint`,
  Gt = `handle_agent_data`,
  Kt = `script_load_fail`,
  qt = `bad_response_format`,
  Jt = `api_key_missing`,
  Yt = `api_key_invalid`,
  Xt = `cache_misconfigured`,
  Zt = `endpoints_misconfigured`,
  Qt = `wrong_worker_option`,
  $t = `worker_initialization_failed`,
  en = `sandboxed_iframe`,
  tn = `bundle_not_defined`,
  b = {
    [Bt]: `Client timeout`,
    [Vt]: `Network connection error`,
    [Ht]: `Network request aborted`,
    [Ut]: `Blocked by CSP`,
    [Wt]: `The provided endpoint in "endpoints" parameter is not a valid URL`,
    [Gt]: `Handle on demand agent data error`,
    [Kt]: `Failed to load the JS script of the agent`,
    [tn]: `9319`,
    [qt]: `Can't parse the backend response. Make sure the proper endpoints are used.`,
    [Jt]: "The `apiKey` option is not provided",
    [Yt]: "The `apiKey` option is not a string",
    [Xt]: "The `cache` option is misconfigured",
    [Zt]: "The `endpoints` option is misconfigured",
    [Qt]: "Wrong `worker` option, it should be a Worker instance",
    [$t]: `Web Worker initialization failed`,
    [en]: `Running inside sandboxed iframes is not supported`
  },
  x = class extends Error {
    constructor(e, t) {
      super(e), this.name = `FingerprintError`, this.event_id = null, this.code = t
    }
  };

function nn(e) {
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
        i = pn(e);
      i.length < t.length + 2 && r();
      for (let e = 0; e < t.length; ++e) mr(i[1 + e], i[0]) !== t[e] && r();
      let a = 1 + t.length,
        o = mr(i[a], i[0]);
      i.length < a + 1 + o + n && r();
      let s = a + 1 + o,
        c = s + n,
        l = new ArrayBuffer(i.length - c),
        u = new Uint8Array(l);
      for (let e = 0; e < u.length; ++e) u[e] = i[c + e] ^ i[s + e % n];
      return l
    }(t, dr, fr)
  } catch {}
  try {
    return function(e) {
      let t = {
          len: 0,
          arr: new Uint8Array(128)
        },
        n = pn(e),
        r = 0,
        i = () => (l(), n[r] === Fn ? a() : rn(n[r]) ? o() : u(er) ? (r += er.length, null) : u(tr) ? (r += tr.length, !0) : u(nr) ? (r += nr.length, !1) : n[r] === Xn ? s() : n[r] === Qn ? c() : d()),
        a = () => {
          for (t.len = 0; r++, n[r] !== Fn;) {
            if (n[r] === Hn) {
              if (r++, n[r] === Gn) {
                let e = parseInt(yn(n.subarray(r + 1, r + 5)), 16);
                pr(t, hn(String.fromCharCode(e))), r += 4;
                continue
              }
              let e = ir[n[r]];
              if (e) {
                dn(t, e);
                continue
              }
              return d()
            }
            if (n[r] === void 0) return d();
            dn(t, n[r])
          }
          return r++, yn(function(e) {
            return e.arr.subarray(0, e.len)
          }(t))
        },
        o = () => {
          let e = r;
          for (; n[r] === Yn || n[r] === Wn || n[r] === Kn || n[r] === qn || rn(n[r]);) r++;
          return Number(yn(n.subarray(e, r)))
        },
        s = () => {
          let e = [];
          for (r++;;) {
            if (l(), n[r] === Zn) {
              r++;
              break
            }
            if (e.length) {
              if (n[r] !== In) return d();
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
            if (l(), n[r] === $n) {
              r++;
              break
            }
            if (!t) {
              if (n[r] !== In) return d();
              r++, l()
            }
            if (n[r] !== Fn) return d();
            let o = a();
            if (l(), n[r] !== Ln) return d();
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
          for (; n[r] === Rn || n[r] === Vn || n[r] === Bn || n[r] === zn;) r++
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

function rn(e) {
  return e >= Un && e < Un + 10 || e === Jn
}

function an(e, t) {
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
      }), or(u, a, t, n, d, l, c)], Promise.race(p.filter(e => !!e))).then(() => l);
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
    }), Tn, {
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

function on(e) {
  return {
    __type__: gn,
    value: e
  }
}

function sn(e) {
  return function(e) {
    let t = pn(e);
    cn = cn || function() {
      let e, t = new Uint32Array(256);
      for (let n = 0; n < 256; n++) {
        e = n;
        for (let t = 0; t < 8; t++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
        t[n] = e
      }
      return t
    }();
    let n = -1;
    for (let e = 0; e < t.length; e++) n = n >>> 8 ^ cn[255 & (n ^ t[e])];
    return (-1 ^ n) >>> 0
  }(hn(e))
}
var cn;

function ln(e, t) {
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

function un(e) {
  return typeof e == `object` && !!e && `name` in e && e.name === `FingerprintError` && `code` in e
}

function dn(e, t) {
  sr(e, e.len + 1), e.arr[e.len++] = t
}
var fn = Array.isArray;

function pn(e) {
  return e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
}

function mn({
  level: e,
  message: t
}) {
  e === `error` ? console.error(t) : e === `warning` ? console.warn(t) : console.log(t)
}

function hn(e) {
  let t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (r > 127) return new TextEncoder().encode(e);
    t[n] = r
  }
  return t
}
var gn = `withoutDefault`,
  _n = `_vid_`;

function vn(e) {
  return e instanceof Error && e.name === `TypeError`
}

function yn(e) {
  if (typeof TextDecoder == `function`) {
    let t = new TextDecoder().decode(e);
    if (t) return t
  }
  let t = pn(e);
  return decodeURIComponent(escape(String.fromCharCode.apply(null, t)))
}

function bn(e = En) {
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
    if (!o) throw new x(b[Jt], Jt);
    if (typeof o != `string`) throw new x(b[Yt], Yt);
    let s = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }(c = t, l = `endpoints`) ? c[l] : void 0;
    var c, l;
    let u = function(e, t, n) {
        let r = e.prepareScriptEndpoints(t, `https://fpnpmcdn.net/`);
        if (r === null) throw new x(b[Zt], Zt);
        return r.map(e => function(e, t) {
          let n = new URL(e, window.location.href),
            r = n.pathname;
          return n.pathname = `${r}${r.endsWith(`/`)?``:`/`}v4/${encodeURIComponent(t)}`, n.search = `?ci=jsl/${encodeURIComponent(wn)}`, n.href
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
          let [t, r] = await an(u, t => function(e, t) {
            return e.withCspViolationWatch(t, async () => {
              if (function(e) {
                  if (URL.prototype) try {
                    return new URL(e, location.href), !1
                  } catch (e) {
                    if (vn(e)) return !0;
                    throw e
                  }
                }(t)) throw new x(b[Wt], Wt);
              try {
                return await d(() => import(t), [], import.meta.url)
              } catch {
                throw new x(b[Kt], Kt)
              }
            }, () => {
              throw new x(b[Ut], Ut)
            }).then(e => {
              if (typeof(e == null ? void 0 : e.start) != `function`) throw new x(b[tn], tn);
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
            return e instanceof x && e.code === tn ? new x(b[Kt], Kt) : e
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

function xn(e, t, n, r) {
  On(() => {
    let i = `${e}=${t}`,
      a = `expires=${new Date(Date.now()+24*n*60*60*1e3).toUTCString()}`,
      o = r ? `domain=${r}` : ``;
    document.cookie = [i, `path=/`, a, o, `SameSite=Lax`].join(`; `)
  }, void 0)
}

function Sn(e, t) {
  try {
    return new window.URL(e, window.location.href)
  } catch (n) {
    if (vn(n)) return console.warn(`Ignoring an invalid '${t}' value: "${e}"`), null;
    throw n
  }
}

function Cn(e) {
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
var wn = `4.1.1`;

function Tn(e, t, n) {
  let r = n instanceof x ? n.code : null;
  return r === Ut || r === Wt ? {
    action: `exclude`,
    delay: 0
  } : r === tn ? {
    action: `exclude`,
    delay: `backoff`
  } : r === Kt ? {
    action: `postpone`,
    delay: Date.now() - e.getTime() < 50 ? 0 : `backoff`
  } : {
    action: `postpone`,
    delay: `backoff`
  }
}
var En = {
    prepareScriptEndpoints: function(e, t) {
      return e === void 0 ? [t] : Pn(e) ? function(e, t) {
        let n, r = !1;
        Nn(e) ? (r = !0, n = kn(e.value)) : n = kn(e);
        let i = [];
        for (let e of n) {
          let t = Sn(e, `endpoints`);
          t && i.push(ar(t))
        }
        return r || i.push(t), i
      }(e, t) : function(e) {
        if (!e || typeof e != `object`) return !1;
        let t = e;
        return typeof t.__type__ == `string` && sn(t.__type__) === 694409711 && (t.script === void 0 || Pn(t.script)) && (t.helper === void 0 || Pn(t.helper)) && (t.ingress === void 0 || Pn(t.ingress))
      }(e) ? function(e, t, n) {
        if (e === void 0) return [t];
        let r, i = !1;
        Nn(e) ? (i = !0, r = kn(e.value)) : r = kn(e);
        let a = [];
        for (let e of r) {
          let t = Sn(e, n);
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
  Dn = bn();

function On(e, t) {
  try {
    document.cookie
  } catch (e) {
    if (function(e) {
        if (!(e instanceof DOMException)) return !1;
        let t = e.message;
        return An.test(t) || jn.test(t) || Mn.test(t)
      }(e)) return t;
    throw e
  }
  return e()
}

function kn(e) {
  return fn(e) ? e : [e]
}
var An = /The document is sandboxed and lacks the 'allow-same-origin' flag/,
  jn = /The operation is insecure/,
  Mn = /Forbidden in a sandboxed document without the 'allow-same-origin' flag/;

function Nn(e) {
  return !!e && e.__type__ === gn
}

function Pn(e) {
  return Nn(e) ? lr(e.value) : lr(e)
}
var Fn = 34,
  In = 44,
  Ln = 58,
  Rn = 32,
  zn = 9,
  Bn = 13,
  Vn = 10,
  Hn = 92,
  Un = 48,
  Wn = 101,
  Gn = 117,
  Kn = 69,
  qn = 43,
  Jn = 45,
  Yn = 46,
  Xn = 91,
  Zn = 93,
  Qn = 123,
  $n = 125,
  er = new Uint8Array([110, Gn, 108, 108]),
  tr = new Uint8Array([116, 114, Gn, Wn]),
  nr = new Uint8Array([102, 97, 108, 115, Wn]),
  rr = {
    '"': `"`,
    "\\": `\\`,
    "\b": `b`,
    "\f": `f`,
    "\n": `n`,
    "\r": `r`,
    "	": `t`
  },
  ir = (() => {
    let e = new Uint8Array(128);
    for (let [t, n] of Object.entries(rr)) e[n.charCodeAt(0)] = t.charCodeAt(0);
    return e
  })();

function ar(e) {
  return `${e.origin}${e.pathname.endsWith(`/`)?e.pathname:`${e.pathname}/`}web/`
}
async function or(e, t, n, r, i, a, o) {
  if (e === void 0) return;
  let s = e;
  for (let e = 0; e < t; ++e) {
    let t = new Date,
      c, l;
    try {
      c = await ur(() => n(s, e, o), o)
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
    await ur(ln(u[1]), o), s = u[0]
  }
}

function sr(e, t) {
  if (e.arr.length < t) {
    let n = new Uint8Array(Math.max(2 * e.arr.length, t));
    n.set(e.arr), e.arr = n
  }
}

function cr(e, t, ...n) {
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

function lr(e) {
  return typeof e == `string` || Array.isArray(e) && e.every(e => typeof e == `string`)
}

function ur(e, t) {
  return new Promise((n, r) => {
    let i = !1;
    t == null || t.then(() => i = !0, () => i = !0), (typeof e == `function` ? ur(Promise.resolve(), t).then(e) : e).then(e => {
      i || n(e)
    }, e => {
      i || r(e)
    })
  })
}
var dr = [3, 13],
  fr = 9;

function pr(e, t) {
  sr(e, e.len + t.length), e.arr.set(t, e.len), e.len += t.length
}

function mr(e, t) {
  return (e - t + 256) % 256
}
var hr = {
    start: Dn,
    handleAgentData: function(e, t = {}) {
      let {
        storageKeyPrefix: n = _n,
        do: r
      } = t;
      try {
        let t = nn(e);
        t === null ? cr(r, () => ({
          e: 25,
          result: {
            error: Error(`Failed to decode response`)
          }
        })) : (t.visitorToken && (s = t.visitorToken, i = c = `${n}t`, a = s, o = 365, Cn(e => {
          (function(e, t) {
            xn(e, ``, -1, t)
          })(i, e)
        }), o < 0 || Cn(e => (xn(i, a, o, e), function(e) {
          return On(() => {
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
        }(c, s)), t.notifications.forEach(mn), cr(r, () => ({
          e: 25,
          result: {
            response: t
          }
        })))
      } catch (e) {
        throw cr(r, () => ({
          e: 25,
          result: {
            error: e instanceof Error ? e : Error(String(e))
          }
        })), new x(b[Gt], Gt)
      }
      var i, a, o, s, c
    },
    isFingerprintError: un,
    withoutDefault: on
  },
  gr = `5.2.0`;

function _r(e, t) {
  return new Promise(n => setTimeout(n, e, t))
}

function vr() {
  return new Promise(e => {
    let t = new MessageChannel;
    t.port1.onmessage = () => e(), t.port2.postMessage(null)
  })
}

function yr(e, t = 1 / 0) {
  let {
    requestIdleCallback: n
  } = window;
  return n ? new Promise(e => n.call(window, () => e(), {
    timeout: t
  })) : _r(Math.min(e, t))
}

function br(e) {
  return !!e && typeof e.then == `function`
}

function xr(e, t) {
  try {
    let n = e();
    br(n) ? n.then(e => t(!0, e), e => t(!1, e)) : t(!0, n)
  } catch (e) {
    t(!1, e)
  }
}
async function Sr(e, t, n = 16) {
  let r = Array(e.length),
    i = Date.now();
  for (let a = 0; a < e.length; ++a) {
    r[a] = t(e[a], a);
    let o = Date.now();
    o >= i + n && (i = o, await vr())
  }
  return r
}

function Cr(e) {
  return e.then(void 0, () => void 0), e
}

function wr(e, t) {
  for (let n = 0, r = e.length; n < r; ++n)
    if (e[n] === t) return !0;
  return !1
}

function Tr(e, t) {
  return !wr(e, t)
}

function Er(e) {
  return parseInt(e)
}

function S(e) {
  return parseFloat(e)
}

function C(e, t) {
  return typeof e == `number` && isNaN(e) ? t : e
}

function w(e) {
  return e.reduce((e, t) => e + +!!t, 0)
}

function Dr(e, t = 1) {
  if (Math.abs(t) >= 1) return Math.round(e / t) * t;
  {
    let n = 1 / t;
    return Math.round(e * n) / n
  }
}

function Or(e) {
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

function kr(e) {
  let t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (r > 127) return new TextEncoder().encode(e);
    t[n] = r
  }
  return t
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
  p += a + l, f += p >>> 16, p &= 65535, f += i + c, d += f >>> 16, f &= 65535, d += r + s, u += d >>> 16, d &= 65535, u += n + o, u &= 65535, e[0] = u << 16 | d, e[1] = f << 16 | p
}

function E(e, t) {
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

function Ar(e, t) {
  let n = e[0];
  t %= 64, t === 32 ? (e[0] = e[1], e[1] = n) : t < 32 ? (e[0] = n << t | e[1] >>> 32 - t, e[1] = e[1] << t | n >>> 32 - t) : (t -= 32, e[0] = e[1] << t | n >>> 32 - t, e[1] = n << t | e[1] >>> 32 - t)
}

function D(e, t) {
  t %= 64, t !== 0 && (t < 32 ? (e[0] = e[1] >>> 32 - t, e[1] <<= t) : (e[0] = e[1] << t - 32, e[1] = 0))
}

function O(e, t) {
  e[0] ^= t[0], e[1] ^= t[1]
}
var jr = [4283543511, 3981806797],
  Mr = [3301882366, 444984403];

function Nr(e) {
  let t = [0, e[0] >>> 1];
  O(e, t), E(e, jr), t[1] = e[0] >>> 1, O(e, t), E(e, Mr), t[1] = e[0] >>> 1, O(e, t)
}
var Pr = [2277735313, 289559509],
  Fr = [1291169091, 658871167],
  Ir = [0, 5],
  Lr = [0, 1390208809],
  Rr = [0, 944331445];

function zr(e, t) {
  let n = kr(e);
  t = t || 0;
  let r = [0, n.length],
    i = r[1] % 16,
    a = r[1] - i,
    o = [0, t],
    s = [0, t],
    c = [0, 0],
    l = [0, 0],
    u;
  for (u = 0; u < a; u += 16) c[0] = n[u + 4] | n[u + 5] << 8 | n[u + 6] << 16 | n[u + 7] << 24, c[1] = n[u] | n[u + 1] << 8 | n[u + 2] << 16 | n[u + 3] << 24, l[0] = n[u + 12] | n[u + 13] << 8 | n[u + 14] << 16 | n[u + 15] << 24, l[1] = n[u + 8] | n[u + 9] << 8 | n[u + 10] << 16 | n[u + 11] << 24, E(c, Pr), Ar(c, 31), E(c, Fr), O(o, c), Ar(o, 27), T(o, s), E(o, Ir), T(o, Lr), E(l, Fr), Ar(l, 33), E(l, Pr), O(s, l), Ar(s, 31), T(s, o), E(s, Ir), T(s, Rr);
  c[0] = 0, c[1] = 0, l[0] = 0, l[1] = 0;
  let d = [0, 0];
  switch (i) {
    case 15:
      d[1] = n[u + 14], D(d, 48), O(l, d);
    case 14:
      d[1] = n[u + 13], D(d, 40), O(l, d);
    case 13:
      d[1] = n[u + 12], D(d, 32), O(l, d);
    case 12:
      d[1] = n[u + 11], D(d, 24), O(l, d);
    case 11:
      d[1] = n[u + 10], D(d, 16), O(l, d);
    case 10:
      d[1] = n[u + 9], D(d, 8), O(l, d);
    case 9:
      d[1] = n[u + 8], O(l, d), E(l, Fr), Ar(l, 33), E(l, Pr), O(s, l);
    case 8:
      d[1] = n[u + 7], D(d, 56), O(c, d);
    case 7:
      d[1] = n[u + 6], D(d, 48), O(c, d);
    case 6:
      d[1] = n[u + 5], D(d, 40), O(c, d);
    case 5:
      d[1] = n[u + 4], D(d, 32), O(c, d);
    case 4:
      d[1] = n[u + 3], D(d, 24), O(c, d);
    case 3:
      d[1] = n[u + 2], D(d, 16), O(c, d);
    case 2:
      d[1] = n[u + 1], D(d, 8), O(c, d);
    case 1:
      d[1] = n[u], O(c, d), E(c, Pr), Ar(c, 31), E(c, Fr), O(o, c)
  }
  return O(o, r), O(s, r), T(o, s), T(s, o), Nr(o), Nr(s), T(o, s), T(s, o), (`00000000` + (o[0] >>> 0).toString(16)).slice(-8) + (`00000000` + (o[1] >>> 0).toString(16)).slice(-8) + (`00000000` + (s[0] >>> 0).toString(16)).slice(-8) + (`00000000` + (s[1] >>> 0).toString(16)).slice(-8)
}

function Br(e) {
  var t;
  return {
    name: e.name,
    message: e.message,
    stack: (t = e.stack) == null ? void 0 : t.split(`
`),
    ...e
  }
}

function Vr(e) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e))
}

function Hr(e) {
  return typeof e != `function`
}

function Ur(e, t) {
  let n = Cr(new Promise(n => {
    let r = Date.now();
    xr(e.bind(null, t), (...e) => {
      let t = Date.now() - r;
      if (!e[0]) return n(() => ({
        error: e[1],
        duration: t
      }));
      let i = e[1];
      if (Hr(i)) return n(() => ({
        value: i,
        duration: t
      }));
      n(() => new Promise(e => {
        let n = Date.now();
        xr(i, (...r) => {
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

function Wr(e, t, n, r) {
  let i = Object.keys(e).filter(e => Tr(n, e)),
    a = Cr(Sr(i, n => Ur(e[n], t), r));
  return async function() {
    let e = await Sr(await a, e => Cr(e()), r),
      t = await Promise.all(e),
      n = {};
    for (let e = 0; e < i.length; ++e) n[i[e]] = t[e];
    return n
  }
}

function Gr() {
  let e = window,
    t = navigator;
  return w([`MSCSSMatrix` in e, `msSetImmediate` in e, `msIndexedDB` in e, `msMaxTouchPoints` in t, `msPointerEnabled` in t]) >= 4
}

function Kr() {
  let e = window,
    t = navigator;
  return w([`msWriteProfilerMark` in e, `MSStream` in e, `msLaunchUri` in t, `msSaveBlob` in t]) >= 3 && !Gr()
}

function qr() {
  let e = window,
    t = navigator;
  return w([`webkitPersistentStorage` in t, `webkitTemporaryStorage` in t, (t.vendor || ``).indexOf(`Google`) === 0, `webkitResolveLocalFileSystemURL` in e, `BatteryManager` in e, `webkitMediaStream` in e, `webkitSpeechGrammar` in e]) >= 5
}

function k() {
  let e = window,
    t = navigator;
  return w([`ApplePayError` in e, `CSSPrimitiveValue` in e, `Counter` in e, t.vendor.indexOf(`Apple`) === 0, `RGBColor` in e, `WebKitMediaKeys` in e]) >= 4
}

function Jr() {
  let e = window,
    {
      HTMLElement: t,
      Document: n
    } = e;
  return w([`safari` in e, !(`ongestureend` in e), !(`TouchEvent` in e), !(`orientation` in e), t && !(`autocapitalize` in t.prototype), n && `pointerLockElement` in n.prototype]) >= 4
}

function Yr() {
  let e = window;
  return Vr(e.print) && String(e.browser) === `[object WebPageNamespace]`
}

function Xr() {
  var e;
  let t = window;
  return w([`buildID` in navigator, `MozAppearance` in (((e = document.documentElement) == null ? void 0 : e.style) ?? {}), `onmozfullscreenchange` in t, `mozInnerScreenX` in t, `CSSMozDocumentRule` in t, `CanvasCaptureMediaStream` in t]) >= 4
}

function Zr() {
  let e = window,
    t = navigator,
    {
      CSS: n
    } = e;
  return w([`userActivation` in t, n.supports(`color`, `light-dark(#000, #fff)`), n.supports(`height`, `1lh`), `globalPrivacyControl` in t]) >= 3
}

function Qr() {
  let {
    CSS: e
  } = window;
  return w([e.supports(`selector(::details-content)`), e.supports(`selector(::before::marker)`), e.supports(`selector(::after::marker)`), !(`locale` in CompositionEvent.prototype)]) >= 3
}

function $r() {
  let e = window;
  return w([!(`MediaSettingsRange` in e), `RTCEncodedAudioFrame` in e, `` + e.Intl == `[object Intl]`, `` + e.Reflect == `[object Reflect]`]) >= 3
}

function ei() {
  let e = window,
    {
      URLPattern: t
    } = e;
  return w([`union` in Set.prototype, `Iterator` in e, t && `hasRegExpGroups` in t.prototype, `RGB8` in WebGLRenderingContext.prototype]) >= 3
}

function ti() {
  let e = window,
    t = document,
    {
      CSS: n,
      Promise: r,
      AudioContext: i
    } = e;
  return w([r && `try` in r, `caretPositionFromPoint` in t, i && `onerror` in i.prototype, n.supports(`ruby-align`, `space-around`)]) >= 3
}

function ni() {
  let e = window;
  return w([`DOMRectList` in e, `RTCPeerConnectionIceEvent` in e, `SVGGeometryElement` in e, `ontransitioncancel` in e]) >= 3
}

function ri() {
  let e = window,
    t = navigator,
    {
      CSS: n,
      HTMLButtonElement: r
    } = e;
  return w([!(`getStorageUpdates` in t), r && `popover` in r.prototype, `CSSCounterStyleRule` in e, n.supports(`font-size-adjust: ex-height 0.5`), n.supports(`text-transform: full-width`)]) >= 4
}

function ii() {
  if (navigator.platform === `iPad`) return !0;
  let e = screen,
    t = e.width / e.height;
  return w([`MediaSource` in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
}

function ai() {
  let e = document;
  return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
}

function oi() {
  let e = document;
  return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e)
}

function si() {
  let e = qr(),
    t = Xr(),
    n = window,
    r = navigator,
    i = `connection`;
  return e ? w([!(`SharedWorker` in n), r[i] && `ontypechange` in r[i], !(`sinkId` in new Audio)]) >= 2 : t ? w([`onorientationchange` in n, `orientation` in n, /android/i.test(r.appVersion)]) >= 2 : !1
}

function ci() {
  let e = navigator,
    t = window,
    n = Audio.prototype,
    {
      visualViewport: r
    } = t;
  return w([`srLatency` in n, `srChannelCount` in n, `devicePosture` in e, r && `segments` in r, `getTextInformation` in Image.prototype]) >= 3
}

function li() {
  return fi() ? -4 : ui()
}

function ui() {
  let e = window,
    t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
  if (!t) return -2;
  if (di()) return -1;
  let n = new t(1, 5e3, 44100),
    r = n.createOscillator();
  r.type = `triangle`, r.frequency.value = 1e4;
  let i = n.createDynamicsCompressor();
  i.threshold.value = -50, i.knee.value = 40, i.ratio.value = 12, i.attack.value = 0, i.release.value = .25, r.connect(i), i.connect(n.destination), r.start(0);
  let [a, o] = pi(n), s = Cr(a.then(e => mi(e.getChannelData(0).subarray(4500)), e => {
    if (e.name === `timeout` || e.name === `suspended`) return -3;
    throw e
  }));
  return () => (o(), s)
}

function di() {
  return k() && !Jr() && !ni()
}

function fi() {
  return k() && ri() && Yr() || qr() && ci() && ei()
}

function pi(e) {
  let t = () => void 0;
  return [new Promise((n, r) => {
    let i = !1,
      a = 0,
      o = 0;
    e.oncomplete = e => n(e.renderedBuffer);
    let s = () => {
        setTimeout(() => r(hi(`timeout`)), Math.min(500, o + 5e3 - Date.now()))
      },
      c = () => {
        try {
          let t = e.startRendering();
          switch (br(t) && Cr(t), e.state) {
            case `running`:
              o = Date.now(), i && s();
              break;
            case `suspended`:
              document.hidden || a++, i && a >= 3 ? r(hi(`suspended`)) : setTimeout(c, 500)
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

function mi(e) {
  let t = 0;
  for (let n = 0; n < e.length; ++n) t += Math.abs(e[n]);
  return t
}

function hi(e) {
  let t = Error(e);
  return t.name = e, t
}
async function gi(e, t, n = 50) {
  var r, i, a;
  let o = document;
  for (; !o.body;) await _r(n);
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
      }); !((i = (r = s.contentWindow) == null ? void 0 : r.document) != null && i.body);) await _r(n);
    return await e(s, s.contentWindow)
  } finally {
    (a = s.parentNode) == null || a.removeChild(s)
  }
}

function _i(e) {
  let [t, n] = Or(e), r = document.createElement(t ?? `div`);
  for (let e of Object.keys(n)) {
    let t = n[e].join(` `);
    e === `style` ? vi(r.style, t) : r.setAttribute(e, t)
  }
  return r
}

function vi(e, t) {
  for (let n of t.split(`;`)) {
    let t = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(n);
    if (t) {
      let [, n, r, , i] = t;
      e.setProperty(n, r, i || ``)
    }
  }
}

function yi() {
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
var bi = `mmMwWLliI0O&1`,
  xi = `48px`,
  Si = [`monospace`, `sans-serif`, `serif`],
  Ci = `sans-serif-thin.ARNO PRO.Agency FB.Arabic Typesetting.Arial Unicode MS.AvantGarde Bk BT.BankGothic Md BT.Batang.Bitstream Vera Sans Mono.Calibri.Century.Century Gothic.Clarendon.EUROSTILE.Franklin Gothic.Futura Bk BT.Futura Md BT.GOTHAM.Gill Sans.HELV.Haettenschweiler.Helvetica Neue.Humanst521 BT.Leelawadee.Letter Gothic.Levenim MT.Lucida Bright.Lucida Sans.Menlo.MS Mincho.MS Outlook.MS Reference Specialty.MS UI Gothic.MT Extra.MYRIAD PRO.Marlett.Meiryo UI.Microsoft Uighur.Minion Pro.Monotype Corsiva.PMingLiU.Pristina.SCRIPTINA.Segoe UI Light.Serifa.SimHei.Small Fonts.Staccato222 BT.TRAJAN PRO.Univers CE 55 Medium.Vrinda.ZWAdobeF`.split(`.`);

function wi() {
  return gi(async (e, {
    document: t
  }) => {
    let n = t.body;
    n.style.fontSize = xi;
    let r = t.createElement(`div`);
    r.style.setProperty(`visibility`, `hidden`, `important`);
    let i = {},
      a = {},
      o = e => {
        let n = t.createElement(`span`),
          {
            style: i
          } = n;
        return i.position = `absolute`, i.top = `0`, i.left = `0`, i.fontFamily = e, n.textContent = bi, r.appendChild(n), n
      },
      s = (e, t) => o(`'${e}',${t}`),
      c = () => Si.map(o),
      l = () => {
        let e = {};
        for (let t of Ci) e[t] = Si.map(e => s(t, e));
        return e
      },
      u = e => Si.some((t, n) => e[n].offsetWidth !== i[t] || e[n].offsetHeight !== a[t]),
      d = c(),
      f = l();
    n.appendChild(r);
    for (let e = 0; e < Si.length; e++) i[Si[e]] = d[e].offsetWidth, a[Si[e]] = d[e].offsetHeight;
    return Ci.filter(e => u(f[e]))
  })
}

function Ti() {
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

function Ei() {
  return Di(Fi())
}

function Di(e) {
  let t = !1,
    n, r, [i, a] = Oi();
  return ki(i, a) ? (t = Ai(a), e ? n = r = `skipped` : [n, r] = ji(i, a)) : n = r = `unsupported`, {
    winding: t,
    geometry: n,
    text: r
  }
}

function Oi() {
  let e = document.createElement(`canvas`);
  return e.width = 1, e.height = 1, [e, e.getContext(`2d`)]
}

function ki(e, t) {
  return !!(t && e.toDataURL)
}

function Ai(e) {
  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, `evenodd`)
}

function ji(e, t) {
  Mi(e, t);
  let n = Pi(e);
  return n === Pi(e) ? (Ni(e, t), [Pi(e), n]) : [`unstable`, `unstable`]
}

function Mi(e, t) {
  e.width = 240, e.height = 60, t.textBaseline = `alphabetic`, t.fillStyle = `#f60`, t.fillRect(100, 1, 62, 20), t.fillStyle = `#069`, t.font = `11pt "Times New Roman"`;
  let n = `Cwm fjordbank gly ${String.fromCharCode(55357,56835)}`;
  t.fillText(n, 2, 15), t.fillStyle = `rgba(102, 204, 0, 0.2)`, t.font = `18pt Arial`, t.fillText(n, 4, 45)
}

function Ni(e, t) {
  e.width = 122, e.height = 110, t.globalCompositeOperation = `multiply`;
  for (let [e, n, r] of [
      [`#f2f`, 40, 40],
      [`#2ff`, 80, 40],
      [`#ff2`, 60, 80]
    ]) t.fillStyle = e, t.beginPath(), t.arc(n, r, 40, 0, Math.PI * 2, !0), t.closePath(), t.fill();
  t.fillStyle = `#f9c`, t.arc(60, 60, 60, 0, Math.PI * 2, !0), t.arc(60, 60, 20, 0, Math.PI * 2, !0), t.fill(`evenodd`)
}

function Pi(e) {
  return e.toDataURL()
}

function Fi() {
  let e = k() && ri() && Yr(),
    t = Xr() && Zr();
  return e || t
}

function Ii() {
  let e = navigator,
    t = 0,
    n;
  e.maxTouchPoints === void 0 ? e.msMaxTouchPoints !== void 0 && (t = e.msMaxTouchPoints) : t = Er(e.maxTouchPoints);
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

function Li() {
  return navigator.oscpu
}

function Ri() {
  let e = navigator,
    t = [],
    n = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if (n !== void 0 && t.push([n]), Array.isArray(e.languages)) qr() && $r() || t.push(e.languages);
  else if (typeof e.languages == `string`) {
    let n = e.languages;
    n && t.push(n.split(`,`))
  }
  return t
}

function zi() {
  return window.screen.colorDepth
}

function Bi() {
  return C(S(navigator.deviceMemory), void 0)
}

function Vi() {
  if (!(k() && ri() && Yr())) return Hi()
}

function Hi() {
  let e = screen,
    t = e => C(Er(e), null),
    n = [t(e.width), t(e.height)];
  return n.sort().reverse(), n
}
var Ui = 2500,
  Wi = 10,
  Gi, Ki;

function qi() {
  if (Ki !== void 0) return;
  let e = () => {
    let t = Xi();
    Zi(t) ? Ki = setTimeout(e, Ui) : (Gi = t, Ki = void 0)
  };
  e()
}

function Ji() {
  return qi(), async () => {
    let e = Xi();
    if (Zi(e)) {
      if (Gi) return [...Gi];
      ai() && (await oi(), e = Xi())
    }
    return Zi(e) || (Gi = e), e
  }
}

function Yi() {
  let e = k() && ri() && Yr(),
    t = Xr() && Qr();
  if (e || t) return () => Promise.resolve(void 0);
  let n = Ji();
  return async () => {
    let e = await n(),
      t = e => e === null ? null : Dr(e, Wi);
    return [t(e[0]), t(e[1]), t(e[2]), t(e[3])]
  }
}

function Xi() {
  let e = screen;
  return [C(S(e.availTop), null), C(S(e.width) - S(e.availWidth) - C(S(e.availLeft), 0), null), C(S(e.height) - S(e.availHeight) - C(S(e.availTop), 0), null), C(S(e.availLeft), null)]
}

function Zi(e) {
  for (let t = 0; t < 4; ++t)
    if (e[t]) return !1;
  return !0
}

function Qi() {
  let e = $i();
  return e !== void 0 && Xr() && Qr() ? e >= 8 ? 8 : 4 : e
}

function $i() {
  return C(Er(navigator.hardwareConcurrency), void 0)
}

function ea() {
  var e;
  let t = (e = window.Intl) == null ? void 0 : e.DateTimeFormat;
  if (t) {
    let e = new t().resolvedOptions().timeZone;
    if (e) return e
  }
  let n = -ta();
  return `UTC${n>=0?`+`:``}${n}`
}

function ta() {
  let e = new Date().getFullYear();
  return Math.max(S(new Date(e, 0, 1).getTimezoneOffset()), S(new Date(e, 6, 1).getTimezoneOffset()))
}

function na() {
  try {
    return !!window.sessionStorage
  } catch {
    return !0
  }
}

function ra() {
  try {
    return !!window.localStorage
  } catch {
    return !0
  }
}

function ia() {
  if (!(Gr() || Kr())) try {
    return !!window.indexedDB
  } catch {
    return !0
  }
}

function aa() {
  return !!window.openDatabase
}

function oa() {
  return navigator.cpuClass
}

function sa() {
  let {
    platform: e
  } = navigator;
  return e === `MacIntel` && k() && !Jr() ? ii() ? `iPad` : `iPhone` : e
}

function ca() {
  return navigator.vendor || ``
}

function la() {
  let e = [];
  for (let t of [`chrome`, `safari`, `__crWeb`, `__gCrWeb`, `yandex`, `__yb`, `__ybro`, `__firefox__`, `__edgeTrackingPreventionStatistics`, `webkit`, `oprt`, `samsungAr`, `ucweb`, `UCShellJava`, `puffinDevice`]) {
    let n = window[t];
    n && typeof n == `object` && e.push(t)
  }
  return e.sort()
}

function ua() {
  let e = document;
  try {
    e.cookie = `cookietest=1; SameSite=Strict;`;
    let t = e.cookie.indexOf(`cookietest=`) !== -1;
    return e.cookie = `cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT`, t
  } catch {
    return !1
  }
}

function da() {
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
async function fa({
  debug: e
} = {}) {
  if (!pa()) return;
  let t = da(),
    n = Object.keys(t),
    r = await ma([].concat(...n.map(e => t[e])));
  e && ga(t, r);
  let i = n.filter(e => {
    let n = t[e];
    return w(n.map(e => r[e])) > n.length * .6
  });
  return i.sort(), i
}

function pa() {
  return k() || si()
}
async function ma(e) {
  var t;
  let n = document,
    r = n.createElement(`div`),
    i = Array(e.length),
    a = {};
  ha(r);
  for (let t = 0; t < e.length; ++t) {
    let a = _i(e[t]);
    a.tagName === `DIALOG` && a.show();
    let o = n.createElement(`div`);
    ha(o), o.appendChild(a), r.appendChild(o), i[t] = a
  }
  for (; !n.body;) await _r(50);
  n.body.appendChild(r);
  try {
    for (let t = 0; t < e.length; ++t) i[t].offsetParent || (a[e[t]] = !0)
  } finally {
    (t = r.parentNode) == null || t.removeChild(r)
  }
  return a
}

function ha(e) {
  e.style.setProperty(`visibility`, `hidden`, `important`), e.style.setProperty(`display`, `block`, `important`)
}

function ga(e, t) {
  let n = "DOM blockers debug:\n```";
  for (let r of Object.keys(e)) {
    n += `\n${r}:`;
    for (let i of e[r]) n += `\n  ${t[i]?`🚫`:`➡️`} ${i}`
  }
  console.log(`${n}\n\`\`\``)
}

function _a() {
  for (let e of [`rec2020`, `p3`, `srgb`])
    if (matchMedia(`(color-gamut: ${e})`).matches) return e
}

function va() {
  if (ya(`inverted`)) return !0;
  if (ya(`none`)) return !1
}

function ya(e) {
  return matchMedia(`(inverted-colors: ${e})`).matches
}

function ba() {
  if (xa(`active`)) return !0;
  if (xa(`none`)) return !1
}

function xa(e) {
  return matchMedia(`(forced-colors: ${e})`).matches
}
var Sa = 100;

function Ca() {
  if (matchMedia(`(min-monochrome: 0)`).matches) {
    for (let e = 0; e <= Sa; ++e)
      if (matchMedia(`(max-monochrome: ${e})`).matches) return e;
    throw Error(`Too high value`)
  }
}

function wa() {
  if (Ta(`no-preference`)) return 0;
  if (Ta(`high`) || Ta(`more`)) return 1;
  if (Ta(`low`) || Ta(`less`)) return -1;
  if (Ta(`forced`)) return 10
}

function Ta(e) {
  return matchMedia(`(prefers-contrast: ${e})`).matches
}

function Ea() {
  if (Da(`reduce`)) return !0;
  if (Da(`no-preference`)) return !1
}

function Da(e) {
  return matchMedia(`(prefers-reduced-motion: ${e})`).matches
}

function Oa() {
  if (ka(`reduce`)) return !0;
  if (ka(`no-preference`)) return !1
}

function ka(e) {
  return matchMedia(`(prefers-reduced-transparency: ${e})`).matches
}

function Aa() {
  if (ja(`high`)) return !0;
  if (ja(`standard`)) return !1
}

function ja(e) {
  return matchMedia(`(dynamic-range: ${e})`).matches
}
var A = Math,
  j = () => 0;

function Ma() {
  let e = A.acos || j,
    t = A.acosh || j,
    n = A.asin || j,
    r = A.asinh || j,
    i = A.atanh || j,
    a = A.atan || j,
    o = A.sin || j,
    s = A.sinh || j,
    c = A.cos || j,
    l = A.cosh || j,
    u = A.tan || j,
    d = A.tanh || j,
    f = A.exp || j,
    p = A.expm1 || j,
    m = A.log1p || j;
  return {
    acos: e(.12312423423423424),
    acosh: t(1e308),
    acoshPf: (e => A.log(e + A.sqrt(e * e - 1)))(1e154),
    asin: n(.12312423423423424),
    asinh: r(1),
    asinhPf: (e => A.log(e + A.sqrt(e * e + 1)))(1),
    atanh: i(.5),
    atanhPf: (e => A.log((1 + e) / (1 - e)) / 2)(.5),
    atan: a(.5),
    sin: o(-1e300),
    sinh: s(1),
    sinhPf: (e => A.exp(e) - 1 / A.exp(e) / 2)(1),
    cos: c(10.000000000123),
    cosh: l(1),
    coshPf: (e => (A.exp(e) + 1 / A.exp(e)) / 2)(1),
    tan: u(-1e300),
    tanh: d(1),
    tanhPf: (e => (A.exp(2 * e) - 1) / (A.exp(2 * e) + 1))(1),
    exp: f(1),
    expm1: p(1),
    expm1Pf: (e => A.exp(e) - 1)(1),
    log1p: m(10),
    log1pPf: (e => A.log(1 + e))(10),
    powPI: (e => A.pow(A.PI, e))(-100)
  }
}
var Na = `mmMwWLliI0fiflO&1`,
  Pa = {
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

function Fa() {
  return La((e, t, n) => {
    let r = {},
      i = {};
    for (let n of Object.keys(Pa)) {
      let [i = {}, a = Na] = Pa[n], o = e.createElement(`span`);
      o.textContent = a, o.style.whiteSpace = `nowrap`;
      for (let e of Object.keys(i)) {
        let t = i[e];
        t !== void 0 && (o.style[e] = t)
      }
      r[n] = o, t.append(e.createElement(`br`), o)
    }
    let a = qr() && ti();
    for (let e of Object.keys(Pa)) {
      let t = r[e].getBoundingClientRect().width;
      i[e] = a ? Ia(t * n.devicePixelRatio) : t
    }
    return i
  })
}

function Ia(e) {
  let t = 10 ** (si() ? 0 : 3);
  return Math.floor(e * t) / t
}

function La(e, t = 4e3) {
  return gi((n, r) => {
    let i = r.document,
      a = i.body,
      o = a.style;
    o.width = `${t}px`, o.webkitTextSizeAdjust = o.textSizeAdjust = `none`, qr() ? a.style.zoom = `${1/r.devicePixelRatio}` : k() && (a.style.zoom = `reset`);
    let s = i.createElement(`div`);
    return s.textContent = [...Array(t / 20 << 0)].map(() => `word`).join(` `), a.appendChild(s), e(i, a, r)
  }, `<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">`)
}

function Ra() {
  return navigator.pdfViewerEnabled
}

function za() {
  let e = new Float32Array(1),
    t = new Uint8Array(e.buffer);
  return e[0] = 1 / 0, e[0] -= e[0], t[3]
}

function Ba() {
  let {
    ApplePaySession: e
  } = window;
  if (typeof(e == null ? void 0 : e.canMakePayments) != `function`) return -1;
  if (Va()) return -3;
  try {
    return +!!e.canMakePayments()
  } catch (e) {
    return Ha(e)
  }
}
var Va = yi;

function Ha(e) {
  if (e instanceof Error && e.name === `InvalidAccessError` && /\bfrom\b.*\binsecure\b/i.test(e.message)) return -2;
  throw e
}

function Ua() {
  let e = document.createElement(`a`),
    t = e.attributionSourceId ?? e.attributionsourceid;
  return t === void 0 ? void 0 : String(t)
}
var Wa = -1,
  Ga = -2,
  Ka = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
  qa = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  Ja = [`FRAGMENT_SHADER`, `VERTEX_SHADER`],
  Ya = [`LOW_FLOAT`, `MEDIUM_FLOAT`, `HIGH_FLOAT`, `LOW_INT`, `MEDIUM_INT`, `HIGH_INT`],
  Xa = `WEBGL_debug_renderer_info`,
  Za = `WEBGL_polygon_mode`;

function Qa({
  cache: e
}) {
  var t, n, r, i, a, o;
  let s = eo(e);
  if (!s) return Wa;
  if (!oo(s)) return Ga;
  let c = io() ? null : s.getExtension(Xa);
  return {
    version: ((t = s.getParameter(s.VERSION)) == null ? void 0 : t.toString()) || ``,
    vendor: ((n = s.getParameter(s.VENDOR)) == null ? void 0 : n.toString()) || ``,
    vendorUnmasked: c ? (r = s.getParameter(c.UNMASKED_VENDOR_WEBGL)) == null ? void 0 : r.toString() : ``,
    renderer: ((i = s.getParameter(s.RENDERER)) == null ? void 0 : i.toString()) || ``,
    rendererUnmasked: c ? (a = s.getParameter(c.UNMASKED_RENDERER_WEBGL)) == null ? void 0 : a.toString() : ``,
    shadingLanguageVersion: ((o = s.getParameter(s.SHADING_LANGUAGE_VERSION)) == null ? void 0 : o.toString()) || ``
  }
}

function $a({
  cache: e
}) {
  let t = eo(e);
  if (!t) return Wa;
  if (!oo(t)) return Ga;
  let n = t.getSupportedExtensions(),
    r = t.getContextAttributes(),
    i = [],
    a = [],
    o = [],
    s = [],
    c = [];
  if (r)
    for (let e of Object.keys(r)) a.push(`${e}=${r[e]}`);
  let l = no(t);
  for (let e of l) {
    let n = t[e];
    o.push(`${e}=${n}${Ka.has(n)?`=${t.getParameter(n)}`:``}`)
  }
  if (n)
    for (let e of n) {
      if (e === Xa && io() || e === Za && ao()) continue;
      let n = t.getExtension(e);
      if (!n) {
        i.push(e);
        continue
      }
      for (let e of no(n)) {
        let r = n[e];
        s.push(`${e}=${r}${qa.has(r)?`=${t.getParameter(r)}`:``}`)
      }
    }
  for (let e of Ja)
    for (let n of Ya) {
      let r = to(t, e, n);
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

function eo(e) {
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

function to(e, t, n) {
  let r = e.getShaderPrecisionFormat(e[t], e[n]);
  return r ? [r.rangeMin, r.rangeMax, r.precision] : []
}

function no(e) {
  return Object.keys(e.__proto__).filter(ro)
}

function ro(e) {
  return typeof e == `string` && !e.match(/[^A-Z0-9_x]/)
}

function io() {
  return Xr()
}

function ao() {
  return qr() || k()
}

function oo(e) {
  return typeof e.getParameter == `function`
}

function so() {
  if (!(si() || k())) return -2;
  if (!window.AudioContext) return -1;
  let e = new AudioContext().baseLatency;
  return e == null ? -1 : isFinite(e) ? e : -3
}

function co() {
  if (!window.Intl) return -1;
  let e = window.Intl.DateTimeFormat;
  if (!e) return -2;
  let t = e().resolvedOptions().locale;
  return !t && t !== `` ? -3 : t
}

function lo(e) {
  return /not/i.test(e)
}
async function uo() {
  let e = navigator.userAgentData;
  if (!e) return;
  let t = e.brands.filter(({
      brand: e
    }) => !lo(e)).map(({
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
var fo = {
  userAgentData: uo,
  fonts: wi,
  domBlockers: fa,
  fontPreferences: Fa,
  audio: li,
  screenFrame: Yi,
  canvas: Ei,
  osCpu: Li,
  languages: Ri,
  colorDepth: zi,
  deviceMemory: Bi,
  screenResolution: Vi,
  hardwareConcurrency: Qi,
  timezone: ea,
  sessionStorage: na,
  localStorage: ra,
  indexedDB: ia,
  openDatabase: aa,
  cpuClass: oa,
  platform: sa,
  plugins: Ti,
  touchSupport: Ii,
  vendor: ca,
  vendorFlavors: la,
  cookiesEnabled: ua,
  colorGamut: _a,
  invertedColors: va,
  forcedColors: ba,
  monochrome: Ca,
  contrast: wa,
  reducedMotion: Ea,
  reducedTransparency: Oa,
  hdr: Aa,
  math: Ma,
  pdfViewerEnabled: Ra,
  architecture: za,
  applePay: Ba,
  privateClickMeasurement: Ua,
  audioBaseLatency: so,
  dateTimeLocale: co,
  webGlBasics: Qa,
  webGlExtensions: $a
};

function po(e) {
  return Wr(fo, e, [])
}
var mo = `$ if upgrade to Pro: https://fingerprint.com/github/?utm_source=oss&utm_medium=referral&utm_campaign=confidence_score`;

function ho(e) {
  let t = go(e),
    n = _o(t);
  return {
    score: t,
    comment: mo.replace(/\$/g, `${n}`)
  }
}

function go(e) {
  if (si()) return .4;
  if (k()) return Jr() && !(ri() && Yr()) ? .5 : .3;
  let t = `value` in e.platform ? e.platform.value : ``;
  return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
}

function _o(e) {
  return Dr(.99 + .01 * e, 1e-4)
}

function vo(e) {
  let t = ``;
  for (let n of Object.keys(e).sort()) {
    let r = e[n],
      i = `error` in r ? `error` : JSON.stringify(r.value);
    t += `${t?`|`:``}${n.replace(/([:|\\])/g,`\\$1`)}:${i}`
  }
  return t
}

function yo(e) {
  return JSON.stringify(e, (e, t) => t instanceof Error ? Br(t) : t, 2)
}

function bo(e) {
  return zr(vo(e))
}

function xo(e) {
  let t;
  return {
    get visitorId() {
      return t === void 0 && (t = bo(this.components)), t
    },
    set visitorId(e) {
      t = e
    },
    confidence: ho(e),
    components: e,
    version: gr
  }
}

function So(e = 50) {
  return yr(e, e * 2)
}

function Co(e, t) {
  let n = Date.now();
  return {
    async get(r) {
      let i = Date.now(),
        a = await e(),
        o = xo(a);
      return (t || r != null && r.debug) && console.log(`Copy the text below to get the debug data:

\`\`\`
version: ${o.version}
userAgent: ${navigator.userAgent}
timeBetweenLoadAndGet: ${i-n}
visitorId: ${o.visitorId}
components: ${yo(a)}
\`\`\``), o
    }
  }
}

function wo() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    let e = new XMLHttpRequest;
    e.open(`get`, `https://m1.openfpcdn.io/fingerprintjs/v${gr}/npm-monitoring`, !0), e.send()
  } catch (e) {
    console.error(e)
  }
}
async function To(e = {}) {
  let {
    delayFallback: t,
    debug: n,
    monitoring: r = !0
  } = e;
  return r && wo(), await So(t), Co(po({
    cache: {},
    debug: n
  }), n)
}
var Eo = {
    load: To,
    hashComponents: bo,
    componentsToDebugString: yo
  },
  Do = null;
async function Oo() {
  return Do || (Do = Eo.load()), Do
}
async function ko() {
  return Ao().then(e => e.visitorId)
}
async function Ao() {
  let e = await (await Oo()).get(),
    t = e.components,
    n = ht(),
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
        value: await yt(),
        duration: 0
      },
      canvasWebgl: {
        value: await Lt(),
        duration: 0
      },
      ...t
    }), n === `Firefox`) {
    var c;
    t = {
      ...t,
      fonts: {
        value: [(c = t.fonts) == null ? void 0 : c.value, await Mt()],
        duration: t.fonts.duration
      }
    }
  }
  s && (t = {
    canvas2d: {
      value: await yt(),
      duration: 0
    },
    ...t
  });
  let l = Eo.hashComponents(t),
    u = l.length,
    d = u >> 2 | 2;
  return {
    visitorId: l.slice(0, d) + (u * 5).toString(16) + l.slice(d + (u >> 4)),
    components: t
  }
}

function jo() {
  return hr.start({
    apiKey: te,
    endpoints: [`https://wplace.live/7eskSe93usV8ENxB/?region=eu`],
    region: `eu`
  })
}
var Mo = new WeakMap,
  No = new WeakMap,
  Po = new WeakMap,
  Fo = new WeakMap,
  Io = new WeakMap,
  Lo = new WeakMap,
  Ro = new WeakMap,
  zo = new WeakMap,
  Bo = new WeakMap,
  Vo = new WeakMap,
  Ho = new WeakMap,
  Uo = new WeakMap,
  Wo = new WeakMap,
  Go = new WeakMap,
  Ko = new WeakMap,
  qo = new WeakMap,
  Jo = new WeakMap,
  M = new class {
    get playerSettingsOpen() {
      return c(n(Mo, this))
    }
    set playerSettingsOpen(e) {
      i(n(Mo, this), e, !0)
    }
    get playerSettingsTab() {
      return c(n(No, this))
    }
    set playerSettingsTab(e) {
      i(n(No, this), e, !0)
    }
    get dropletsDialogOpen() {
      return c(n(Po, this))
    }
    set dropletsDialogOpen(e) {
      i(n(Po, this), e, !0)
    }
    get prismDialogOpen() {
      return c(n(Fo, this))
    }
    set prismDialogOpen(e) {
      i(n(Fo, this), e, !0)
    }
    get accountConflictDialogOpen() {
      return c(n(Io, this))
    }
    set accountConflictDialogOpen(e) {
      i(n(Io, this), e, !0)
    }
    get pendingHistoryDialogOpen() {
      return c(n(Lo, this))
    }
    set pendingHistoryDialogOpen(e) {
      i(n(Lo, this), e, !0)
    }
    get paymentHistoryDialogOpen() {
      return c(n(Ro, this))
    }
    set paymentHistoryDialogOpen(e) {
      i(n(Ro, this), e, !0)
    }
    get storeDialogOpen() {
      return c(n(zo, this))
    }
    set storeDialogOpen(e) {
      i(n(zo, this), e, !0)
    }
    get storeTabIndex() {
      return c(n(Bo, this))
    }
    set storeTabIndex(e) {
      i(n(Bo, this), e, !0)
    }
    get muted() {
      return c(n(Vo, this))
    }
    set muted(e) {
      i(n(Vo, this), e, !0)
    }
    get haptics() {
      return c(n(Ho, this))
    }
    set haptics(e) {
      i(n(Ho, this), e, !0)
    }
    get language() {
      return c(n(Uo, this))
    }
    set language(e) {
      i(n(Uo, this), e, !0)
    }
    get map() {
      return c(n(Wo, this))
    }
    set map(e) {
      i(n(Wo, this), e)
    }
    get automatedClicks() {
      return c(n(Go, this))
    }
    set automatedClicks(e) {
      i(n(Go, this), e, !0)
    }
    get theme() {
      return c(n(Ko, this))
    }
    set theme(e) {
      i(n(Ko, this), e, !0), p(e)
    }
    get now() {
      return c(n(qo, this))
    }
    get captcha() {
      return Xo ? c(n(Jo, this)) : {
        token: `turnstile-disabled`,
        time: Date.now()
      }
    }
    set captcha(e) {
      i(n(Jo, this), e, !0)
    }
    constructor() {
      e(this, Mo, r(!1)), e(this, No, r(`interface`)), e(this, Po, r(!1)), e(this, Fo, r(!1)), e(this, Io, r(!1)), e(this, Lo, r(!1)), e(this, Ro, r(!1)), e(this, zo, r(!1)), e(this, Bo, r(0)), e(this, Vo, r(!1)), e(this, Ho, r(!0)), e(this, Uo, r(a(Yo()))), e(this, Wo, r(null)), e(this, Go, r(!1)), e(this, Ko, r(`custom-winter`)), e(this, qo, r(a(Date.now()))), e(this, Jo, r(void 0)), setInterval(() => {
        i(n(qo, this), Date.now(), !0)
      }, 500), this.theme = f()
    }
  };

function Yo() {
  if (navigator.languages && navigator.languages.length > 0) {
    let e = navigator.languages.find(e => e.length === 2);
    if (e) return e
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || `en`).substring(0, 2)
}
var Xo = ne.toLowerCase() !== `false`,
  Zo = `
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
async function Qo() {
  try {
    let e = await fetch(`${ee}/anticheat/pow/challenge`, {
      credentials: `include`
    });
    if (!e.ok) return null;
    let t = await e.json(),
      n = await $o(t.prefix, t.difficulty);
    return n ? {
      ...t,
      nonce: n
    } : null
  } catch {
    return null
  }
}
async function $o(e, t) {
  return new Promise(n => {
    let r = new Blob([Zo], {
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
var es = 3,
  ts = new WeakMap,
  ns = new WeakMap,
  N = new class {
    constructor() {
      e(this, ts, r(null)), e(this, ns, r(0))
    }
    get current() {
      return c(n(ts, this))
    }
    set current(e) {
      i(n(ts, this), e, !0)
    }
    get errorCount() {
      return c(n(ns, this))
    }
    set errorCount(e) {
      i(n(ns, this), e, !0)
    }
  };
async function rs(e) {
  if (e === 1) return is();
  if (e === 2) {
    let e = await ss();
    return e ? as(`turnstile`, e) : !1
  }
  if (e === 3) {
    let e = await cs();
    return e ? as(`hcaptcha`, e) : !1
  }
  return e === 4 && us()
}
async function is() {
  for (let e = 0; e < es; e++) try {
    let e = await Qo();
    if (!e) continue;
    return await B.verifyChallenge({
      type: `pow`,
      challengeId: e.challengeId,
      nonce: e.nonce
    }), !0
  } catch {}
  return !1
}
async function as(e, t) {
  try {
    let n = await B.postCaptchaSession({
      provider: e,
      token: t
    });
    return await B.verifyChallenge({
      type: `captcha`,
      sessionId: n.sessionId
    }), !0
  } catch {
    return !1
  }
}
var os = {};

function ss() {
  return ls(2)
}

function cs() {
  return ls(3)
}

function ls(e) {
  let t = os[e];
  if (t) return t;
  let n = new Promise(t => {
    N.errorCount = 0, N.current = {
      tier: e,
      resolve: n => {
        delete os[e], t(n)
      }
    }
  });
  return os[e] = n, n
}

function us() {
  let e = os[4];
  if (e) return e;
  let t = new Promise(e => {
    N.errorCount = 0, N.current = {
      tier: 4,
      resolve: t => {
        delete os[4], e(t)
      }
    }
  });
  return os[4] = t, t
}

function ds(e) {
  let t = N.current;
  !t || t.tier === 4 || (t.resolve(e), N.current = null)
}

function fs() {
  let e = N.current;
  !e || e.tier === 4 || (N.errorCount += 1, N.errorCount >= es && (e.resolve(void 0), N.current = null))
}

function ps() {
  let e = N.current;
  !e || e.tier !== 4 || (e.resolve(!0), N.current = null)
}

function ms() {
  let e = N.current;
  e && (e.tier === 4 ? e.resolve(!1) : e.resolve(void 0), N.current = null)
}
var hs;
(function(e) {
  e.Unimplemented = `UNIMPLEMENTED`, e.Unavailable = `UNAVAILABLE`
})(hs || (hs = {}));
var gs = class extends Error {
    constructor(e, t, n) {
      super(e), this.message = e, this.code = t, this.data = n
    }
  },
  _s = e => {
    var t, n;
    return e != null && e.androidBridge ? `android` : (n = (t = e == null ? void 0 : e.webkit) == null ? void 0 : t.messageHandlers) != null && n.bridge ? `ios` : `web`
  },
  vs = e => {
    let t = e.CapacitorCustomPlatform || null,
      n = e.Capacitor || {},
      r = n.Plugins = n.Plugins || {},
      i = () => t === null ? _s(e) : t.name,
      a = () => i() !== `web`,
      o = e => {
        let t = l.get(e);
        return !!(t != null && t.platforms.has(i()) || s(e))
      },
      s = e => {
        var t;
        return (t = n.PluginHeaders) == null ? void 0 : t.find(t => t.name === e)
      },
      c = t => e.console.error(t),
      l = new Map;
    return n.convertFileSrc || (n.convertFileSrc = e => e), n.getPlatform = i, n.handleError = c, n.isNativePlatform = a, n.isPluginAvailable = o, n.registerPlugin = (e, a = {}) => {
      let o = l.get(e);
      if (o) return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`), o.proxy;
      let c = i(),
        u = s(e),
        d, f = async () => (!d && c in a ? d = d = typeof a[c] == `function` ? await a[c]() : a[c] : t !== null && !d && `web` in a && (d = d = typeof a.web == `function` ? await a.web() : a.web), d), p = (t, r) => {
          var i, a;
          if (u) {
            let a = u == null ? void 0 : u.methods.find(e => r === e.name);
            if (a) return a.rtype === `promise` ? t => n.nativePromise(e, r.toString(), t) : (t, i) => n.nativeCallback(e, r.toString(), t, i);
            if (t) return (i = t[r]) == null ? void 0 : i.bind(t)
          } else if (t) return (a = t[r]) == null ? void 0 : a.bind(t);
          else throw new gs(`"${e}" plugin is not implemented on ${c}`, hs.Unimplemented)
        }, m = t => {
          let n, r = (...r) => {
            let i = f().then(i => {
              let a = p(i, t);
              if (a) {
                let e = a(...r);
                return n = e == null ? void 0 : e.remove, e
              }
              throw new gs(`"${e}.${t}()" is not implemented on ${c}`, hs.Unimplemented)
            });
            return t === `addListener` && (i.remove = async () => n()), i
          };
          return r.toString = () => `${t.toString()}() { [capacitor code] }`, Object.defineProperty(r, "name", {
            value: t,
            writable: !1,
            configurable: !1
          }), r
        }, h = m(`addListener`), ee = m(`removeListener`), te = (e, t) => {
          let n = h({
              eventName: e
            }, t),
            r = async () => {
              let r = await n;
              ee({
                eventName: e,
                callbackId: r
              }, t)
            }, i = new Promise(e => n.then(() => e({
              remove: r
            })));
          return i.remove = async () => {
            console.warn(`Using addListener() without 'await' is deprecated.`), await r()
          }, i
        }, ne = new Proxy({}, {
          get(e, t) {
            switch (t) {
              case `$$typeof`:
                return;
              case `toJSON`:
                return () => ({});
              case `addListener`:
                return u ? te : h;
              case `removeListener`:
                return ee;
              default:
                return m(t)
            }
          }
        });
      return r[e] = ne, l.set(e, {
        name: e,
        proxy: ne,
        platforms: new Set([...Object.keys(a), ...u ? [c] : []])
      }), ne
    }, n.Exception = gs, n.DEBUG = !!n.DEBUG, n.isLoggingEnabled = !!n.isLoggingEnabled, n
  },
  ys = (e => e.Capacitor = vs(e))(typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : typeof window < `u` ? window : typeof global < `u` ? global : {}),
  bs = ys.registerPlugin,
  xs = class {
    constructor() {
      this.listeners = {}, this.retainedEventArguments = {}, this.windowListeners = {}
    }
    addListener(e, t) {
      let n = !1;
      this.listeners[e] || (this.listeners[e] = [], n = !0), this.listeners[e].push(t);
      let r = this.windowListeners[e];
      return r && !r.registered && this.addWindowListener(r), n && this.sendRetainedArgumentsForEvent(e), Promise.resolve({
        remove: async () => this.removeListener(e, t)
      })
    }
    async removeAllListeners() {
      this.listeners = {};
      for (let e in this.windowListeners) this.removeWindowListener(this.windowListeners[e]);
      this.windowListeners = {}
    }
    notifyListeners(e, t, n) {
      let r = this.listeners[e];
      if (!r) {
        if (n) {
          let n = this.retainedEventArguments[e];
          n || (n = []), n.push(t), this.retainedEventArguments[e] = n
        }
        return
      }
      r.forEach(e => e(t))
    }
    hasListeners(e) {
      var t;
      return !!((t = this.listeners[e]) != null && t.length)
    }
    registerWindowListener(e, t) {
      this.windowListeners[t] = {
        registered: !1,
        windowEventName: e,
        pluginEventName: t,
        handler: e => {
          this.notifyListeners(t, e)
        }
      }
    }
    unimplemented(e = `not implemented`) {
      return new ys.Exception(e, hs.Unimplemented)
    }
    unavailable(e = `not available`) {
      return new ys.Exception(e, hs.Unavailable)
    }
    async removeListener(e, t) {
      let n = this.listeners[e];
      if (!n) return;
      let r = n.indexOf(t);
      this.listeners[e].splice(r, 1), this.listeners[e].length || this.removeWindowListener(this.windowListeners[e])
    }
    addWindowListener(e) {
      window.addEventListener(e.windowEventName, e.handler), e.registered = !0
    }
    removeWindowListener(e) {
      e && (window.removeEventListener(e.windowEventName, e.handler), e.registered = !1)
    }
    sendRetainedArgumentsForEvent(e) {
      let t = this.retainedEventArguments[e];
      t && (delete this.retainedEventArguments[e], t.forEach(t => {
        this.notifyListeners(e, t)
      }))
    }
  },
  Ss = e => encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape),
  Cs = e => e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent),
  ws = class extends xs {
    async getCookies() {
      let e = document.cookie,
        t = {};
      return e.split(`;`).forEach(e => {
        if (e.length <= 0) return;
        let [n, r] = e.replace(/=/, `CAP_COOKIE`).split(`CAP_COOKIE`);
        n = Cs(n).trim(), r = Cs(r).trim(), t[n] = r
      }), t
    }
    async setCookie(e) {
      try {
        let t = Ss(e.key),
          n = Ss(e.value),
          r = e.expires ? `; expires=${e.expires.replace(`expires=`,``)}` : ``,
          i = (e.path || `/`).replace(`path=`, ``),
          a = e.url != null && e.url.length > 0 ? `domain=${e.url}` : ``;
        document.cookie = `${t}=${n||``}${r}; path=${i}; ${a};`
      } catch (e) {
        return Promise.reject(e)
      }
    }
    async deleteCookie(e) {
      try {
        document.cookie = `${e.key}=; Max-Age=0`
      } catch (e) {
        return Promise.reject(e)
      }
    }
    async clearCookies() {
      try {
        let e = document.cookie.split(`;`) || [];
        for (let t of e) document.cookie = t.replace(/^ +/, ``).replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)
      } catch (e) {
        return Promise.reject(e)
      }
    }
    async clearAllCookies() {
      try {
        await this.clearCookies()
      } catch (e) {
        return Promise.reject(e)
      }
    }
  };
bs(`CapacitorCookies`, {
  web: () => new ws
});
var Ts = async e => new Promise((t, n) => {
  let r = new FileReader;
  r.onload = () => {
    let e = r.result;
    t(e.indexOf(`,`) >= 0 ? e.split(`,`)[1] : e)
  }, r.onerror = e => n(e), r.readAsDataURL(e)
}), Es = (e = {}) => {
  let t = Object.keys(e);
  return Object.keys(e).map(e => e.toLocaleLowerCase()).reduce((n, r, i) => (n[r] = e[t[i]], n), {})
}, Ds = (e, t = !0) => e ? Object.entries(e).reduce((e, n) => {
  let [r, i] = n, a, o;
  return Array.isArray(i) ? (o = ``, i.forEach(e => {
    a = t ? encodeURIComponent(e) : e, o += `${r}=${a}&`
  }), o.slice(0, -1)) : (a = t ? encodeURIComponent(i) : i, o = `${r}=${a}`), `${e}&${o}`
}, ``).substr(1) : null, Os = (e, t = {}) => {
  let n = Object.assign({
      method: e.method || `GET`,
      headers: e.headers
    }, t),
    r = Es(e.headers)[`content-type`] || ``;
  if (typeof e.data == `string`) n.body = e.data;
  else if (r.includes(`application/x-www-form-urlencoded`)) {
    let t = new URLSearchParams;
    for (let [n, r] of Object.entries(e.data || {})) t.set(n, r);
    n.body = t.toString()
  } else if (r.includes(`multipart/form-data`) || e.data instanceof FormData) {
    let t = new FormData;
    if (e.data instanceof FormData) e.data.forEach((e, n) => {
      t.append(n, e)
    });
    else
      for (let n of Object.keys(e.data)) t.append(n, e.data[n]);
    n.body = t;
    let r = new Headers(n.headers);
    r.delete(`content-type`), n.headers = r
  } else(r.includes(`application/json`) || typeof e.data == `object`) && (n.body = JSON.stringify(e.data));
  return n
}, ks = class extends xs {
  async request(e) {
    let t = Os(e, e.webFetchExtra),
      n = Ds(e.params, e.shouldEncodeUrlParams),
      r = n ? `${e.url}?${n}` : e.url,
      i = await fetch(r, t),
      a = i.headers.get(`content-type`) || ``,
      {
        responseType: o = `text`
      } = i.ok ? e : {};
    a.includes(`application/json`) && (o = `json`);
    let s, c;
    switch (o) {
      case `arraybuffer`:
      case `blob`:
        c = await i.blob(), s = await Ts(c);
        break;
      case `json`:
        s = await i.json();
        break;
      default:
        s = await i.text()
    }
    let l = {};
    return i.headers.forEach((e, t) => {
      l[t] = e
    }), {
      data: s,
      headers: l,
      status: i.status,
      url: i.url
    }
  }
  async get(e) {
    return this.request(Object.assign(Object.assign({}, e), {
      method: `GET`
    }))
  }
  async post(e) {
    return this.request(Object.assign(Object.assign({}, e), {
      method: `POST`
    }))
  }
  async put(e) {
    return this.request(Object.assign(Object.assign({}, e), {
      method: `PUT`
    }))
  }
  async patch(e) {
    return this.request(Object.assign(Object.assign({}, e), {
      method: `PATCH`
    }))
  }
  async delete(e) {
    return this.request(Object.assign(Object.assign({}, e), {
      method: `DELETE`
    }))
  }
};
bs(`CapacitorHttp`, {
  web: () => new ks
});
var As;
(function(e) {
  e.Dark = `DARK`, e.Light = `LIGHT`, e.Default = `DEFAULT`
})(As || (As = {}));
var js;
(function(e) {
  e.StatusBar = `StatusBar`, e.NavigationBar = `NavigationBar`
})(js || (js = {}));
var Ms = class extends xs {
  async setStyle() {
    this.unavailable(`not available for web`)
  }
  async setAnimation() {
    this.unavailable(`not available for web`)
  }
  async show() {
    this.unavailable(`not available for web`)
  }
  async hide() {
    this.unavailable(`not available for web`)
  }
};
bs(`SystemBars`, {
  web: () => new Ms
});
var Ns = bs(`DeviceAttest`);

function Ps() {
  return ys.isNativePlatform() && ys.isPluginAvailable(`DeviceAttest`)
}
async function Fs(e) {
  let t = await crypto.subtle.digest(`SHA-256`, new TextEncoder().encode(e));
  return [...new Uint8Array(t)].map(e => e.toString(16).padStart(2, `0`)).join(``)
}
async function Is(e, t, n) {
  return `${e.toUpperCase()} ${t} ${await Fs(n)}`
}
async function Ls(e) {
  return Ns.attest({
    challenge: e
  })
}
async function Rs(e) {
  return Ns.commitKey({
    keyId: e
  })
}
async function zs(e) {
  if (Ps()) return Ns.assert({
    clientData: e
  }).catch(e => {
    if ((e == null ? void 0 : e.code) !== `NO_KEY`) throw e
  })
}
async function Bs() {
  if (Ps()) return Ns.deviceToken().then(({
    token: e
  }) => e).catch(() => void 0)
}
async function Vs() {
  return Ps() ? Ns.isSupported().catch(() => ({
    supported: !1,
    hasKey: !1
  })) : {
    supported: !1,
    hasKey: !1
  }
}
var Hs = new Set([`/paint`, `/payment/appstore/account-token`, `/payment/appstore/verify`]);
async function Us(e, t, n) {
  if (!Hs.has(t) || !Ps() || n != null && typeof n != `string`) return;
  let r = await Is(e, t, n ?? ``),
    i = () => Ns.assert({
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
var P = function(e) {
    return e[e.CONTINUE = 100] = `CONTINUE`, e[e.SWITCHING_PROTOCOLS = 101] = `SWITCHING_PROTOCOLS`, e[e.PROCESSING = 102] = `PROCESSING`, e[e.EARLY_HINTS = 103] = `EARLY_HINTS`, e[e.OK = 200] = `OK`, e[e.CREATED = 201] = `CREATED`, e[e.ACCEPTED = 202] = `ACCEPTED`, e[e.NON_AUTHORITATIVE_INFORMATION = 203] = `NON_AUTHORITATIVE_INFORMATION`, e[e.NO_CONTENT = 204] = `NO_CONTENT`, e[e.RESET_CONTENT = 205] = `RESET_CONTENT`, e[e.PARTIAL_CONTENT = 206] = `PARTIAL_CONTENT`, e[e.MULTI_STATUS = 207] = `MULTI_STATUS`, e[e.ALREADY_REPORTED = 208] = `ALREADY_REPORTED`, e[e.IM_USED = 226] = `IM_USED`, e[e.MULTIPLE_CHOICES = 300] = `MULTIPLE_CHOICES`, e[e.MOVED_PERMANENTLY = 301] = `MOVED_PERMANENTLY`, e[e.MOVED_TEMPORARILY = 302] = `MOVED_TEMPORARILY`, e[e.FOUND = 302] = `FOUND`, e[e.SEE_OTHER = 303] = `SEE_OTHER`, e[e.NOT_MODIFIED = 304] = `NOT_MODIFIED`, e[e.USE_PROXY = 305] = `USE_PROXY`, e[e.SWITCH_PROXY = 306] = `SWITCH_PROXY`, e[e.TEMPORARY_REDIRECT = 307] = `TEMPORARY_REDIRECT`, e[e.PERMANENT_REDIRECT = 308] = `PERMANENT_REDIRECT`, e[e.BAD_REQUEST = 400] = `BAD_REQUEST`, e[e.UNAUTHORIZED = 401] = `UNAUTHORIZED`, e[e.PAYMENT_REQUIRED = 402] = `PAYMENT_REQUIRED`, e[e.FORBIDDEN = 403] = `FORBIDDEN`, e[e.NOT_FOUND = 404] = `NOT_FOUND`, e[e.METHOD_NOT_ALLOWED = 405] = `METHOD_NOT_ALLOWED`, e[e.NOT_ACCEPTABLE = 406] = `NOT_ACCEPTABLE`, e[e.PROXY_AUTHENTICATION_REQUIRED = 407] = `PROXY_AUTHENTICATION_REQUIRED`, e[e.REQUEST_TIMEOUT = 408] = `REQUEST_TIMEOUT`, e[e.CONFLICT = 409] = `CONFLICT`, e[e.GONE = 410] = `GONE`, e[e.LENGTH_REQUIRED = 411] = `LENGTH_REQUIRED`, e[e.PRECONDITION_FAILED = 412] = `PRECONDITION_FAILED`, e[e.REQUEST_TOO_LONG = 413] = `REQUEST_TOO_LONG`, e[e.CONTENT_TOO_LARGE = 413] = `CONTENT_TOO_LARGE`, e[e.REQUEST_URI_TOO_LONG = 414] = `REQUEST_URI_TOO_LONG`, e[e.URI_TOO_LONG = 414] = `URI_TOO_LONG`, e[e.UNSUPPORTED_MEDIA_TYPE = 415] = `UNSUPPORTED_MEDIA_TYPE`, e[e.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = `REQUESTED_RANGE_NOT_SATISFIABLE`, e[e.RANGE_NOT_SATISFIABLE = 416] = `RANGE_NOT_SATISFIABLE`, e[e.EXPECTATION_FAILED = 417] = `EXPECTATION_FAILED`, e[e.IM_A_TEAPOT = 418] = `IM_A_TEAPOT`, e[e.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = `INSUFFICIENT_SPACE_ON_RESOURCE`, e[e.MISDIRECTED_REQUEST = 421] = `MISDIRECTED_REQUEST`, e[e.UNPROCESSABLE_ENTITY = 422] = `UNPROCESSABLE_ENTITY`, e[e.UNPROCESSABLE_CONTENT = 422] = `UNPROCESSABLE_CONTENT`, e[e.LOCKED = 423] = `LOCKED`, e[e.FAILED_DEPENDENCY = 424] = `FAILED_DEPENDENCY`, e[e.TOO_EARLY = 425] = `TOO_EARLY`, e[e.UPGRADE_REQUIRED = 426] = `UPGRADE_REQUIRED`, e[e.PRECONDITION_REQUIRED = 428] = `PRECONDITION_REQUIRED`, e[e.TOO_MANY_REQUESTS = 429] = `TOO_MANY_REQUESTS`, e[e.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = `REQUEST_HEADER_FIELDS_TOO_LARGE`, e[e.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = `UNAVAILABLE_FOR_LEGAL_REASONS`, e[e.INTERNAL_SERVER_ERROR = 500] = `INTERNAL_SERVER_ERROR`, e[e.NOT_IMPLEMENTED = 501] = `NOT_IMPLEMENTED`, e[e.BAD_GATEWAY = 502] = `BAD_GATEWAY`, e[e.SERVICE_UNAVAILABLE = 503] = `SERVICE_UNAVAILABLE`, e[e.GATEWAY_TIMEOUT = 504] = `GATEWAY_TIMEOUT`, e[e.HTTP_VERSION_NOT_SUPPORTED = 505] = `HTTP_VERSION_NOT_SUPPORTED`, e[e.VARIANT_ALSO_NEGOTIATES = 506] = `VARIANT_ALSO_NEGOTIATES`, e[e.INSUFFICIENT_STORAGE = 507] = `INSUFFICIENT_STORAGE`, e[e.LOOP_DETECTED = 508] = `LOOP_DETECTED`, e[e.NOT_EXTENDED = 510] = `NOT_EXTENDED`, e[e.NETWORK_AUTHENTICATION_REQUIRED = 511] = `NETWORK_AUTHENTICATION_REQUIRED`, e[e.AWS_ELB_000 = 0] = `AWS_ELB_000`, e[e.THIS_IS_FINE = 218] = `THIS_IS_FINE`, e[e.PAGE_EXPIRED = 419] = `PAGE_EXPIRED`, e[e.METHOD_FAILURE = 420] = `METHOD_FAILURE`, e[e.ENHANCE_YOUR_CALM = 420] = `ENHANCE_YOUR_CALM`, e[e.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = `REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY`, e[e.SHOPIFY_SECURITY_REJECTION = 430] = `SHOPIFY_SECURITY_REJECTION`, e[e.LOGIN_TIME_OUT = 440] = `LOGIN_TIME_OUT`, e[e.NO_RESPONSE = 444] = `NO_RESPONSE`, e[e.RETRY_WITH = 449] = `RETRY_WITH`, e[e.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = `BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS`, e[e.REDIRECT_IIS = 451] = `REDIRECT_IIS`, e[e.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = `CLIENT_CLOSED_CONNECTION_AWS_ELB`, e[e.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = `X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB`, e[e.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = `INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB`, e[e.REQUEST_HEADER_TOO_LARGE = 494] = `REQUEST_HEADER_TOO_LARGE`, e[e.SSL_CERTIFICATE_ERROR = 495] = `SSL_CERTIFICATE_ERROR`, e[e.SSL_CERTIFICATE_REQUIRED = 496] = `SSL_CERTIFICATE_REQUIRED`, e[e.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = `HTTP_REQUEST_SENT_TO_HTTPS_PORT`, e[e.INVALID_TOKEN = 498] = `INVALID_TOKEN`, e[e.CLIENT_CLOSED_REQUEST = 499] = `CLIENT_CLOSED_REQUEST`, e[e.TOKEN_REQUIRED = 499] = `TOKEN_REQUIRED`, e[e.BANDWIDTH_LIMIT_EXCEEDED = 509] = `BANDWIDTH_LIMIT_EXCEEDED`, e[e.RESOURCE_LIMIT_IS_REACHED = 508] = `RESOURCE_LIMIT_IS_REACHED`, e[e.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = `WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR`, e[e.WEB_SERVER_IS_DOWN = 521] = `WEB_SERVER_IS_DOWN`, e[e.CONNECTION_TIMED_OUT = 522] = `CONNECTION_TIMED_OUT`, e[e.ORIGIN_IS_UNREACHABLE = 523] = `ORIGIN_IS_UNREACHABLE`, e[e.A_TIMEOUT_OCCURRED = 524] = `A_TIMEOUT_OCCURRED`, e[e.SSL_HANDSHAKE_FAILED = 525] = `SSL_HANDSHAKE_FAILED`, e[e.INVALID_SSL_CERTIFICATE = 526] = `INVALID_SSL_CERTIFICATE`, e[e.RAILGUN_ERROR = 527] = `RAILGUN_ERROR`, e[e.SITE_IS_OVERLOADED = 529] = `SITE_IS_OVERLOADED`, e[e.ORIGIN_UNAVAILABLE = 530] = `ORIGIN_UNAVAILABLE`, e[e.ORIGIN_DNS_ERROR = 530] = `ORIGIN_DNS_ERROR`, e[e.SITE_IS_FROZEN = 530] = `SITE_IS_FROZEN`, e[e.TEMPORARILY_DISABLED = 540] = `TEMPORARILY_DISABLED`, e[e.UNAUTHORIZED_AWS_ELB = 561] = `UNAUTHORIZED_AWS_ELB`, e[e.NETWORK_READ_TIMEOUT_ERROR = 598] = `NETWORK_READ_TIMEOUT_ERROR`, e[e.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = `NETWORK_CONNECT_TIMEOUT_ERROR`, e[e.UNEXPECTED_TOKEN = 783] = `UNEXPECTED_TOKEN`, e[e.REQUEST_DENIED = 999] = `REQUEST_DENIED`, e
  }({}),
  F = class extends Error {},
  Ws = class extends Error {},
  Gs = class extends Error {},
  Ks = {
    maintenance: () => h.protection_message_maintenance(),
    restoration: () => h.protection_message_restoration(),
    event: () => h.protection_message_event(),
    community: () => h.protection_message_community(),
    memorial: () => h.protection_message_memorial(),
    historical: () => h.protection_message_historical(),
    contest: () => h.protection_message_contest(),
    collaboration: () => h.protection_message_collaboration(),
    review: () => h.protection_message_review(),
    safety: () => h.protection_message_safety(),
    reserved: () => h.protection_message_reserved(),
    temporary: () => h.protection_message_temporary()
  };

function qs(e) {
  return Object.prototype.hasOwnProperty.call(Ks, e) ? Ks[e]() : Ks.temporary()
}

function Js(e, t) {
  return t >= Date.parse(e.endsAt) ? `ended` : e.paused ? `paused` : t < Date.parse(e.startsAt) ? `scheduled` : `active`
}
var Ys = {
  scheduled: () => h.protection_scheduled(),
  active: () => h.protection_active(),
  paused: () => h.protection_paused(),
  ended: () => h.protection_ended()
};

function Xs(e) {
  if (!e.trim()) return [];
  let t = e.trim().split(/[\s,;]+/);
  return t.length > 1e3 || t.some(e => !/^[1-9]\d*$/.test(e) || Number(e) > 2147483647) ? null : [...new Set(t.map(Number))].sort((e, t) => e - t)
}

function Zs(e) {
  let t = new Date(e);
  return new Date(t.getTime() - t.getTimezoneOffset() * 6e4).toISOString().slice(0, 16)
}

function Qs(e, t) {
  return (t == null ? void 0 : t.aborted) === !0 || typeof DOMException < `u` && e instanceof DOMException && e.name === `AbortError`
}
var $s = 6e3,
  ec = new WeakMap,
  tc = new WeakMap,
  nc = class {
    get online() {
      return c(n(ec, this))
    }
    set online(e) {
      i(n(ec, this), e, !0)
    }
    get serverTimeOffsetMs() {
      return c(n(tc, this))
    }
    set serverTimeOffsetMs(e) {
      i(n(tc, this), e, !0)
    }
    constructor(t) {
      s(this, `url`, void 0), e(this, ec, r(!0)), s(this, `probe`, null), e(this, tc, r(null)), this.url = t
    }
    checkConnection() {
      if (this.probe) return this.probe;
      let e = new AbortController,
        t = setTimeout(() => e.abort(), $s);
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
        })).status !== P.OK) throw Error(h.unexpected_server_error())
    }
    async guardedFetch(e, t) {
      try {
        let n = await fetch(`${this.url}${e}`, t);
        return this.online = !0, this.updateServerTimeEstimate(n), n
      } catch (e) {
        throw Qs(e, t == null ? void 0 : t.signal) ? e : (console.error(`Fetch error:`, e), this.checkConnection(), Error(h.cant_reach_the_server()))
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
          let e = await Us(t.method ?? `GET`, i, t.body);
          if (!e) return t;
          let n = new Headers(t.headers);
          for (let [t, r] of Object.entries(e)) n.set(t, r);
          return {
            ...t,
            headers: n
          }
        }, o = await this.guardedFetch(e, await a());
      if (o.headers.get(`x-device-reattest`) && d(() => import(`./CCTyltoX.js`).then(e => e.n).then(e => e.IOSAppServices.reattest()), __vite__mapDeps([0, 1, 2, 3]), import.meta.url), o.status === P.FORBIDDEN && o.headers.get(`x-block-reason`) === `tor`) throw Error(h.tor_blocked());
      if (o.status === P.FORBIDDEN && o.headers.get(`x-block-reason`) === `integrity`) throw Error(h.request_integrity_blocked());
      let s = ((n = o.headers.get(`cf-mitigated`)) == null ? void 0 : n.toLowerCase()) === `challenge`;
      if (o.status === 403 && s) {
        if ($.setCfLikelyAutomated(!0), !await ss()) throw Error(h.challenge_verification_not_completed());
        o = await this.guardedFetch(e, await a())
      }
      if ((t == null ? void 0 : t.throwOnStatus) ?? !0) {
        if (o.status === P.TOO_MANY_REQUESTS) throw new F(h.you_or_someone_in_your_network_is_making_a_lot_of_requests_to_the_server());
        if (o.status === P.REQUEST_TIMEOUT) throw Error(h.request_timeout());
        if (o.status === P.SERVICE_UNAVAILABLE) throw Error(h.service_unavailable())
      }
      if (o.status === P.FORBIDDEN && (r = o.headers.get(`content-type`)) != null && r.includes(`application/json`)) {
        let e = await o.clone().json().catch(() => null);
        if ((e == null ? void 0 : e.error) === `pixel-protected`) throw Error(qs(e.messageKey))
      }
      return o
    }
  },
  I = class extends Error {
    constructor(e, t) {
      super(e), s(this, `message`, void 0), s(this, `status`, void 0), this.message = e, this.status = t
    }
  },
  rc = class extends Error {};

function ic(e) {
  return class extends e {
    async me() {
      let e = await this.request(`/me`, {
        credentials: `include`,
        throwOnStatus: !1
      });
      if (e.status === P.OK) return await e.json();
      if (e.status !== P.UNAUTHORIZED) throw new I(h.unexpected_server_error(), e.status)
    }
    async meEmail() {
      let e = await this.request(`/me/email`, {
        credentials: `include`
      });
      if (e.status === P.OK) return (await e.json()).email
    }
    async logout() {
      let e = await this.request(`/auth/logout`, {
        method: `POST`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw Error(await e.text());
      return await e.json()
    }
    async getOtpCooldown() {
      let e = await this.request(`/anticheat/otp/cooldown`, {
        credentials: `include`
      });
      if (e.status !== P.OK) throw Error(h.unexpected_server_error());
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
      if (t.status === P.BAD_REQUEST) throw Error(h.invalid_phone_number());
      if (t.status === P.CONFLICT) throw Error(h.phone_already_used());
      if (t.status === P.FORBIDDEN) throw Error(h.not_allowed_to_verify());
      if (t.status === P.TOO_MANY_REQUESTS) throw Error(h.too_many_attempts());
      if (t.status === P.UNAVAILABLE_FOR_LEGAL_REASONS) throw Error(h.phone_region_not_supported());
      if (t.status === P.LOCKED) throw Error(h.unsubscribed_from_sms());
      if (t.status === P.UNPROCESSABLE_ENTITY) throw Error(h.phone_not_supported());
      if (t.status === P.NOT_ACCEPTABLE) throw Error(h.vpn_not_allowed());
      if (t.status === P.PRECONDITION_FAILED) throw Error(h.country_mismatch());
      if (t.status !== P.OK) throw Error(h.unexpected_server_error());
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
          "x-fp": await ko()
        }
      });
      if (e.type === `otp`) {
        if (n.status === P.GONE) throw Error(h.expired_code());
        if (n.status === P.BAD_REQUEST) throw Error(h.invalid_code());
        if (n.status === P.TOO_MANY_REQUESTS) throw Error(h.too_many_attempts());
        if (n.status !== P.OK) throw Error(h.unexpected_server_error())
      } else if (n.status === P.BAD_REQUEST) throw Error(h.invalid_challenge_response());
      else if (n.status !== P.OK) throw Error(h.unexpected_server_error())
    }
    async updateMe(e) {
      let t = await this.request(`/me/update`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status === P.BAD_REQUEST) {
        let e = await t.json(),
          n = (e == null ? void 0 : e.error) ?? ``;
        if (n === `invalid_name`) throw Error(h.invalid_name());
        if (n === `invalid_discord`) throw Error(h.invalid_discord());
        if (typeof n == `string` && n.startsWith(`name_change_cooldown:`)) {
          let e = parseInt(n.split(`:`)[1] ?? `0`, 10);
          throw Error(h.name_change_cooldown_days({
            days: e
          }))
        }
        throw Error(e == null ? void 0 : e.error)
      }
      if (t.status !== P.OK) throw Error(h.unexpected_server_error())
    }
    async deleteMe(e) {
      let t = await this.request(`/me`, {
        method: `DELETE`,
        credentials: `include`,
        body: JSON.stringify({
          confirmText: e
        })
      });
      if (t.status === P.BAD_REQUEST) throw Error(h.typed_username_does_not_match());
      if (t.status !== P.OK) throw Error(h.unexpected_server_error())
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
      if (n.status === P.FORBIDDEN) throw Error(h.operation_not_allowed_maybe_you_have_too_many_favorite_locations());
      if (n.status !== P.OK) throw Error(h.unexpected_server_error());
      return n.json()
    }
    async deleteFavoriteLocation(e) {
      if ((await this.request(`/favorite-location/delete`, {
          method: `POST`,
          body: JSON.stringify({
            id: e
          }),
          credentials: `include`
        })).status !== P.OK) throw Error(h.unexpected_server_error())
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
      if (n.status === P.BAD_REQUEST) throw Error(h.favorite_invalid_details());
      if (n.status === P.NOT_FOUND) throw Error(h.favorite_not_found());
      if (n.status !== P.OK) throw Error(h.unexpected_server_error());
      return n.json()
    }
    async organizeFavorites(e) {
      let t = await this.request(`/favorite-location/organize`, {
        method: `POST`,
        body: JSON.stringify(e),
        credentials: `include`
      });
      if (t.status !== P.OK) throw Error(h.unexpected_server_error());
      return t.json()
    }
    async getMyProfilePictures() {
      let e = await this.request(`/me/profile-pictures`, {
        credentials: `include`
      });
      if (e.status !== P.OK) throw Error(h.unexpected_server_error());
      return e.json()
    }
    async changeProfilePicture(e) {
      if ((await this.request(`/me/profile-picture/change`, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify({
            pictureId: e
          })
        })).status !== P.OK) throw Error(h.unexpected_server_error())
    }
    async unlinkDiscord() {
      let e = await this.request(`/discord/unlink`, {
        method: `POST`,
        credentials: `include`
      });
      if (e.status !== P.NO_CONTENT) throw new I(h.unexpected_server_error(), e.status)
    }
    async deleteSessions() {
      let e = await this.request(`/me/sessions`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status)
    }
    async deleteAllUserSessions(e) {
      let t = await this.request(`/staff/dashboard/users/${e}/sessions`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status)
    }
    async getMySuspensionDetails() {
      let e = await this.request(`/me/suspension`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
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
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
      let t = await e.json();
      return (t == null ? void 0 : t.paintedToday) ?? 0
    }
    async accountConflict() {
      let e = await this.request(`/me/account-conflict`, {
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
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
        case P.OK:
          return (await t.json()).keptUserId;
        case P.CONFLICT:
          throw (await t.json()).error === `conflict_blocked` ? Error(h.duplicate_account_blocked()) : Error(h.duplicate_account_already_resolved());
        default:
          throw new I(h.unexpected_server_error(), t.status)
      }
    }
    async markRulesAsRead() {
      return (await this.request(`/me/rules/read`, {
        method: `POST`,
        credentials: `include`
      })).status === P.OK
    }
  }
}

function ac(e) {
  return class extends e {
    async getAdminB2BBusinesses(e = ``, t = 0) {
      let n = new URLSearchParams({
          query: e,
          page: String(t)
        }),
        r = await this.request(`/staff/dashboard/businesses?${n.toString()}`, {
          credentials: `include`
        });
      if (r.status !== P.OK) throw new I(h.b2b_load_failed(), r.status);
      return r.json()
    }
    async getAdminB2BBusiness(e) {
      let t = await this.request(`/staff/dashboard/businesses/${e}`, {
        credentials: `include`
      });
      if (t.status === P.NOT_FOUND) throw new I(h.b2b_business_not_found(), t.status);
      if (t.status !== P.OK) throw new I(h.b2b_load_business_failed(), t.status);
      return t.json()
    }
    async convertAdminB2BBusiness(e) {
      let t = await this.request(`/staff/dashboard/businesses/${e}/convert`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status === P.CONFLICT || t.status === P.BAD_REQUEST) {
        let e = await t.json().catch(() => null);
        if ((e == null ? void 0 : e.error) === `business_account_is_employee`) throw new I(h.b2b_error_business_is_employee(), t.status)
      }
      if (t.status === P.NOT_FOUND) throw new I(h.b2b_user_not_found(), t.status);
      if (t.status !== P.NO_CONTENT) throw new I(h.b2b_convert_failed(), t.status)
    }
    async setAdminB2BInfiniteCharges(e, t) {
      let n = await this.request(`/staff/dashboard/businesses/${e}/charges`, {
        method: `PATCH`,
        credentials: `include`,
        body: JSON.stringify({
          infinite: t
        })
      });
      if (n.status !== P.OK) throw new I(h.b2b_update_charges_failed(), n.status);
      return (await n.json()).infinite
    }
    async setAdminB2BPaintRestrictions(e, t) {
      let n = await this.request(`/staff/dashboard/businesses/${e}/paint-restrictions`, {
        method: `PATCH`,
        credentials: `include`,
        body: JSON.stringify(t)
      });
      if (n.status !== P.OK) throw new I(h.b2b_update_paint_restrictions_failed(), n.status);
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
      if (n.status === P.CONFLICT || n.status === P.BAD_REQUEST) {
        var r;
        let e = await n.json().catch(() => null),
          t = {
            business_account_is_employee: h.b2b_error_business_is_employee,
            employee_account_is_business: h.b2b_error_employee_is_business,
            business_cannot_be_its_own_employee: h.b2b_error_same_account
          };
        throw new I(((r = t[(e == null ? void 0 : e.error) ?? ``]) == null ? void 0 : r.call(t)) ?? h.b2b_assign_failed(), n.status)
      }
      if (n.status === P.NOT_FOUND) throw new I(h.b2b_user_not_found(), n.status);
      if (n.status !== P.NO_CONTENT) throw new I(h.b2b_assign_failed(), n.status)
    }
    async removeAdminB2BEmployee(e, t) {
      let n = await this.request(`/staff/dashboard/businesses/${e}/employees/${t}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (n.status === P.CONFLICT) throw new I(h.b2b_employee_not_assigned(), n.status);
      if (n.status !== P.NO_CONTENT) throw new I(h.b2b_remove_failed(), n.status)
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
      return (await n.json()).prism
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
      if (n.status === P.BAD_REQUEST) {
        let e = await n.json(),
          t = (e == null ? void 0 : e.error) ?? ``;
        throw t === `invalid_name` ? new I(h.invalid_name(), P.BAD_REQUEST) : new I(typeof t == `string` && t ? t : h.unexpected_server_error(), P.BAD_REQUEST)
      }
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status)
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
      if (n.status === P.BAD_REQUEST) {
        let e = await n.json(),
          t = (e == null ? void 0 : e.error) ?? ``;
        throw t === `email_required` || t === `invalid_email` ? new I(h.enter_valid_email_address(), P.BAD_REQUEST) : new I(typeof t == `string` && t ? t : h.unexpected_server_error(), P.BAD_REQUEST)
      }
      if (n.status === P.CONFLICT) {
        let e = await n.json();
        if (((e == null ? void 0 : e.error) ?? ``) === `email_already_in_use`) {
          let t = new I(typeof(e == null ? void 0 : e.userId) == `number` ? h.email_already_in_use_by_user({
            userId: e.userId
          }) : h.email_already_in_use(), P.CONFLICT);
          throw typeof(e == null ? void 0 : e.userId) == `number` && (t.userId = e.userId), t
        }
        throw new I(h.unexpected_server_error(), P.CONFLICT)
      }
      if (n.status === P.NOT_FOUND) throw new I(`User not found.`, P.NOT_FOUND);
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status)
    }
    async getAdminUserProfilePictures(e) {
      let t = await this.request(`/staff/dashboard/users/profile-pictures?userId=${e}`, {
        credentials: `include`
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
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
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status)
    }
    async postAdminRerollUserAvatar(e) {
      let t = await this.request(`/staff/dashboard/users/reroll-avatar`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userId: e
        })
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
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
      if (r.status !== P.OK) throw new I(h.unexpected_server_error(), r.status)
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
      if (r.status !== P.OK) throw new I(h.unexpected_server_error(), r.status)
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
      if (r.status !== P.OK) throw new I(h.unexpected_server_error(), r.status)
    }
    async reloadPunishmentCache() {
      let e = await this.request(`/staff/dashboard/summary/reload-punishment-cache`, {
        method: `POST`,
        credentials: `include`
      });
      if (e.status === P.CONFLICT) throw new I(h.punishment_cache_reload_already_running(), e.status);
      if (e.status !== P.OK && e.status !== P.ACCEPTED) throw new I(h.unexpected_server_error(), e.status)
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status)
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status)
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
      if (r.status !== P.OK) throw new I(h.unexpected_server_error(), r.status)
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
      return await n.json()
    }
    async getAuditLogs(e) {
      let t = new URLSearchParams;
      e.query && t.set(`query`, e.query), e.actorUserId !== void 0 && t.set(`actorUserId`, String(e.actorUserId)), e.targetUserId !== void 0 && t.set(`targetUserId`, String(e.targetUserId)), e.targetType && t.set(`targetType`, e.targetType), e.targetId && t.set(`targetId`, e.targetId), e.action && t.set(`action`, e.action), e.outcome && t.set(`outcome`, e.outcome), e.actorRole && t.set(`actorRole`, e.actorRole), e.from && t.set(`from`, e.from), e.to && t.set(`to`, e.to), e.sortKey && t.set(`sortKey`, e.sortKey), e.sortDir && t.set(`sortDir`, e.sortDir), t.set(`limit`, String(e.limit)), t.set(`offset`, String(e.offset));
      let n = await this.request(`/staff/dashboard/audit-logs/see?${t.toString()}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
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
        })).status !== P.OK) throw Error(h.unexpected_server_error())
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
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
      if (t.status !== P.OK) throw new I(h.report_failed(), t.status);
      let n = await t.json();
      if (n.reason === `target_cooldown`) throw Error(h.profile_report_cooldown());
      if (n.success !== !0 || n.reason) throw Error(h.report_failed())
    }
    async postReportUserProfile(e) {
      let t = await this.request(`/report/user/profile`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status === 409) throw new I(h.profile_report_content_changed(), t.status);
      if (t.status !== P.OK) throw new I(h.report_failed(), t.status);
      let n = await t.json();
      switch (n.reason) {
        case `target_cooldown`:
          throw Error(h.profile_report_cooldown());
        case `reporter_banned`:
          throw Error(h.reporter_banned());
        case `min_pixels_painted`:
          throw Error(h.min_pixels_painted());
        case `max_report_per_hour`:
          throw Error(h.max_report_per_hour())
      }
      if (n.success !== !0 || n.reason) throw Error(h.report_failed())
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
      if (n.status === 409) throw new I(h.profile_report_content_changed(), n.status);
      if (n.status !== P.OK) throw new I(h.failed_to_remove_profile_picture(), n.status);
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
      if (n.status === 409) throw new I(h.profile_report_content_changed(), n.status);
      if (n.status !== P.OK) throw new I(h.failed_to_change_username(), n.status);
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
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
      return t.json()
    }
  }
}
var L = {
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
    permissions: JSON.parse(`{"support":{"view":{"feedback":{"interface":"staff.support.view.feedback.interface","painting":"staff.support.view.feedback.painting","overlays":"staff.support.view.feedback.overlays","alliances":"staff.support.view.feedback.alliances","profile":"staff.support.view.feedback.profile","store":"staff.support.view.feedback.store","notifications":"staff.support.view.feedback.notifications","rules":"staff.support.view.feedback.rules","events":"staff.support.view.feedback.events","other":"staff.support.view.feedback.other","unsure":"staff.support.view.feedback.unsure"},"bug":{"interface":"staff.support.view.bug.interface","painting":"staff.support.view.bug.painting","overlays":"staff.support.view.bug.overlays","alliances":"staff.support.view.bug.alliances","profile":"staff.support.view.bug.profile","store":"staff.support.view.bug.store","notifications":"staff.support.view.bug.notifications","rules":"staff.support.view.bug.rules","events":"staff.support.view.bug.events","other":"staff.support.view.bug.other","unsure":"staff.support.view.bug.unsure"},"staff":{"game":"staff.support.view.staff.game","discord":"staff.support.view.staff.discord","reddit":"staff.support.view.staff.reddit","email":"staff.support.view.staff.email","support":"staff.support.view.staff.support","social":"staff.support.view.staff.social","other":"staff.support.view.staff.other","unsure":"staff.support.view.staff.unsure"},"general":{"account":"staff.support.view.general.account","purchases":"staff.support.view.general.purchases","rules":"staff.support.view.general.rules","doxxing":"staff.support.view.general.doxxing","harassment":"staff.support.view.general.harassment","privacy":"staff.support.view.general.privacy","legal":"staff.support.view.general.legal","copyright":"staff.support.view.general.copyright","security":"staff.support.view.general.security","general":"staff.support.view.general.general","other":"staff.support.view.general.other","appeal":"staff.support.view.general.appeal","dismissed_report":"staff.support.view.general.dismissed_report"}},"act":{"feedback":{"interface":"staff.support.act.feedback.interface","painting":"staff.support.act.feedback.painting","overlays":"staff.support.act.feedback.overlays","alliances":"staff.support.act.feedback.alliances","profile":"staff.support.act.feedback.profile","store":"staff.support.act.feedback.store","notifications":"staff.support.act.feedback.notifications","rules":"staff.support.act.feedback.rules","events":"staff.support.act.feedback.events","other":"staff.support.act.feedback.other","unsure":"staff.support.act.feedback.unsure"},"bug":{"interface":"staff.support.act.bug.interface","painting":"staff.support.act.bug.painting","overlays":"staff.support.act.bug.overlays","alliances":"staff.support.act.bug.alliances","profile":"staff.support.act.bug.profile","store":"staff.support.act.bug.store","notifications":"staff.support.act.bug.notifications","rules":"staff.support.act.bug.rules","events":"staff.support.act.bug.events","other":"staff.support.act.bug.other","unsure":"staff.support.act.bug.unsure"},"staff":{"game":"staff.support.act.staff.game","discord":"staff.support.act.staff.discord","reddit":"staff.support.act.staff.reddit","email":"staff.support.act.staff.email","support":"staff.support.act.staff.support","social":"staff.support.act.staff.social","other":"staff.support.act.staff.other","unsure":"staff.support.act.staff.unsure"},"general":{"account":"staff.support.act.general.account","purchases":"staff.support.act.general.purchases","rules":"staff.support.act.general.rules","doxxing":"staff.support.act.general.doxxing","harassment":"staff.support.act.general.harassment","privacy":"staff.support.act.general.privacy","legal":"staff.support.act.general.legal","copyright":"staff.support.act.general.copyright","security":"staff.support.act.general.security","general":"staff.support.act.general.general","other":"staff.support.act.general.other","appeal":"staff.support.act.general.appeal","dismissed_report":"staff.support.act.general.dismissed_report"}},"audit":"staff.support.audit","reward":"staff.support.reward","compensation":"staff.support.compensation","escalate":"staff.support.escalate","deescalate":"staff.support.deescalate","reopen":"staff.support.reopen","config":"staff.support.config","recover":"staff.support.recover","manage_levels":"staff.support.manage_levels","review_staff_reports":"staff.support.review_staff_reports","escalation":"staff.support.escalation"},"dashboard":{"summary":{"counters":{"tickets":"staff.dashboard.summary.counters.tickets","reports":"staff.dashboard.summary.counters.reports"},"events":{"status":"staff.dashboard.summary.events.status","start":"staff.dashboard.summary.events.start","stop":"staff.dashboard.summary.events.stop","anchors":"staff.dashboard.summary.events.anchors"},"users":{"ban":"staff.dashboard.summary.users.ban","timeout":"staff.dashboard.summary.users.timeout","unban":"staff.dashboard.summary.users.unban","incrementDroplets":"staff.dashboard.summary.users.increment_droplets","phoneVerification":"staff.dashboard.summary.users.phone_verification"},"reloadPunishmentCache":"staff.dashboard.summary.reload_punishment_cache"},"team":{"tickets":"staff.dashboard.team.tickets","reports":"staff.dashboard.team.reports"},"users":{"info":"staff.dashboard.users.info","rename":"staff.dashboard.users.rename","notesGet":"staff.dashboard.users.notes_get","notesSet":"staff.dashboard.users.notes_set","purchases":"staff.dashboard.users.purchases","ticketsHistory":"staff.dashboard.users.tickets_history","ticketsStats":"staff.dashboard.users.tickets_stats","appealsHistory":"staff.dashboard.users.appeals_history","timeout":"staff.dashboard.users.timeout","removeTimeout":"staff.dashboard.users.remove_timeout","ban":"staff.dashboard.users.ban","removeBan":"staff.dashboard.users.remove_ban","autoReviewBan":"staff.dashboard.users.auto_review_ban","personalInformation":"staff.dashboard.users.personal_information","editEmail":"staff.dashboard.users.edit_email","disconnect":"staff.dashboard.users.disconnect","setDroplets":"staff.dashboard.users.set_droplets","setPrism":"staff.dashboard.users.set_prism","phoneVerification":"staff.dashboard.users.phone_verification","removePicture":"staff.dashboard.users.remove_picture"},"businesses":{"see":"staff.dashboard.businesses.see","manage":"staff.dashboard.businesses.manage"},"permissions":{"get":"staff.dashboard.permissions.get","set":"staff.dashboard.permissions.set"},"alliances":{"search":"staff.dashboard.alliances.search","details":"staff.dashboard.alliances.details","members":"staff.dashboard.alliances.members","rename":"staff.dashboard.alliances.rename","description":"staff.dashboard.alliances.description","leader":"staff.dashboard.alliances.leader","banAll":"staff.dashboard.alliances.ban_all","role":"staff.dashboard.alliances.role","removeMember":"staff.dashboard.alliances.remove_member","restore":"staff.dashboard.alliances.restore","moderate":"staff.dashboard.alliances.moderate","punish":"staff.dashboard.alliances.punish"},"protections":{"view":"staff.dashboard.protections.view","manage":"staff.dashboard.protections.manage"},"auditLogs":{"see":"staff.dashboard.audit_logs.see","events":{"timeout":"staff.dashboard.audit_logs.events.timeout","ban":"staff.dashboard.audit_logs.events.ban","changeDroplets":"staff.dashboard.audit_logs.events.change_droplets","changePrism":"staff.dashboard.audit_logs.events.change_prism","removeTimeout":"staff.dashboard.audit_logs.events.remove_timeout","removeBan":"staff.dashboard.audit_logs.events.remove_ban","manualTimeout":"staff.dashboard.audit_logs.events.manual_timeout","manualBan":"staff.dashboard.audit_logs.events.manual_ban","manualChangeDroplets":"staff.dashboard.audit_logs.events.manual_change_droplets","manualRemoveBan":"staff.dashboard.audit_logs.events.manual_remove_ban","manualPhoneVerification":"staff.dashboard.audit_logs.events.manual_phone_verification","anticheatBan":"staff.dashboard.audit_logs.events.anticheat_ban","anticheatRemoveBan":"staff.dashboard.audit_logs.events.anticheat_remove_ban","deleteAllSessions":"staff.dashboard.audit_logs.events.delete_all_sessions","permissionsUpdate":"staff.dashboard.audit_logs.events.permissions_update","changeUsername":"staff.dashboard.audit_logs.events.change_username","banWave":"staff.dashboard.audit_logs.events.ban_wave","changeEmail":"staff.dashboard.audit_logs.events.change_email","acceptAppeal":"staff.dashboard.audit_logs.events.accept_appeal","denyAppeal":"staff.dashboard.audit_logs.events.deny_appeal","revertTicketRequest":"staff.dashboard.audit_logs.events.revert_ticket_request","revertTicketApprove":"staff.dashboard.audit_logs.events.revert_ticket_approve","revertTicketDeny":"staff.dashboard.audit_logs.events.revert_ticket_deny","removePicture":"staff.dashboard.audit_logs.events.remove_picture","rerollAvatar":"staff.dashboard.audit_logs.events.reroll_avatar","resolveTicket":"staff.dashboard.audit_logs.events.re_solve_ticket","reviewTicket":"staff.dashboard.audit_logs.events.review_ticket","autoReviewBanRemoveBan":"staff.dashboard.audit_logs.events.auto_review_ban_remove_ban","resolveAccountConflict":"staff.dashboard.audit_logs.events.resolve_account_conflict","allianceModeration":"staff.dashboard.audit_logs.events.alliance_moderation","userNoteCreated":"staff.dashboard.audit_logs.events.user_note_created","ticketAssigned":"staff.dashboard.audit_logs.events.ticket_assigned","ticketResolved":"staff.dashboard.audit_logs.events.ticket_resolved","appealAssigned":"staff.dashboard.audit_logs.events.appeal_assigned","punishmentCacheReloadRequested":"staff.dashboard.audit_logs.events.punishment_cache_reload_requested","canvasPixelBatchQueued":"staff.dashboard.audit_logs.events.canvas_pixel_batch_queued","canvasAreaReversed":"staff.dashboard.audit_logs.events.canvas_area_reversed","pixelProtectionChanged":"staff.dashboard.audit_logs.events.pixel_protection_changed","canvasAutoPaintQueued":"staff.dashboard.audit_logs.events.canvas_auto_paint_queued","cosmeticCreated":"staff.dashboard.audit_logs.events.cosmetic_created","cosmeticUpdated":"staff.dashboard.audit_logs.events.cosmetic_updated","cosmeticDeleted":"staff.dashboard.audit_logs.events.cosmetic_deleted","badgeCreated":"staff.dashboard.audit_logs.events.badge_created","badgeUpdated":"staff.dashboard.audit_logs.events.badge_updated","badgeDeleted":"staff.dashboard.audit_logs.events.badge_deleted","storeImageUploaded":"staff.dashboard.audit_logs.events.store_image_uploaded","storeImageDeleted":"staff.dashboard.audit_logs.events.store_image_deleted","businessInfiniteChargesUpdated":"staff.dashboard.audit_logs.events.business_infinite_charges_updated","businessMembershipUpdated":"staff.dashboard.audit_logs.events.business_membership_updated","businessPaintRestrictionsUpdated":"staff.dashboard.audit_logs.events.business_paint_restrictions_updated"}},"banAppeals":{"see":"staff.dashboard.ban_appeals.see"},"kpi":{"tickets":"staff.dashboard.kpi.tickets"},"allTickets":{"see":"staff.dashboard.all_tickets.see","review":"staff.dashboard.all_tickets.review"},"storeManager":{"frames":"staff.dashboard.store_manager.frames","fonts":"staff.dashboard.store_manager.fonts","styles":"staff.dashboard.store_manager.styles","badges":"staff.dashboard.store_manager.badges"},"anticheat":{"see":"staff.dashboard.anticheat.see","unban":"staff.dashboard.anticheat.unban","ban":"staff.dashboard.anticheat.ban"}},"tickets":{"assign":"staff.tickets.assign","closedToday":"staff.tickets.closed_today","openCount":"staff.tickets.open_count","translate":"staff.tickets.translate","setStatus":"staff.tickets.set_status","revert":"staff.tickets.revert","revertReview":"staff.tickets.revert_review","reSolve":"staff.tickets.re_solve"},"appeals":{"assign":"staff.appeals.assign","openCount":"staff.appeals.open_count","ticketsHistory":"staff.appeals.tickets_history","notes_get":"staff.appeals.notes_get","notes_set":"staff.appeals.notes_set","translate":"staff.appeals.translate","solve":"staff.appeals.solve"},"tools":{"selectArea":{"timeout":"staff.tools.select_area.timeout","ban":"staff.tools.select_area.ban","clear":"staff.tools.select_area.clear","info":"staff.tools.select_area.info","phoneVerification":"staff.tools.select_area.phone_verification","reverse":"staff.tools.select_area.reverse","timelapse":"staff.tools.select_area.timelapse"},"selectPixel":{"timeout":"staff.tools.select_pixel.timeout","ban":"staff.tools.select_pixel.ban","seeRole":"staff.tools.select_pixel.see_role","seePunishment":"staff.tools.select_pixel.see_punishment"},"autoPainter":{"paint":"staff.tools.auto_painter.paint","missing":"staff.tools.auto_painter.missing","incorrect":"staff.tools.auto_painter.incorrect","showOnLeaderboard":"staff.tools.auto_painter.show_on_leaderboard","transparent":"staff.tools.auto_painter.transparent","noCharges":"staff.tools.auto_painter.no_charges","asUser":"staff.tools.auto_painter.as_user","noSizeLimit":"staff.tools.auto_painter.no_size_limit"},"wayback":"staff.tools.wayback"},"ui":{"themeDarkMode":"staff.ui.theme.dark_mode","tooglePixelArt":"staff.ui.toggle_pixel_art"},"cosmetics":{"viewCosmetics":"staff.cosmetics.view_cosmetics","manageCosmetics":"staff.cosmetics.manage_cosmetics","assignCosmetics":"staff.cosmetics.assign_cosmetics"}}`),
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
  oc = L,
  sc = L.seasons,
  cc = L.seasons.length - 1,
  lc = L.seasons[cc].zoom,
  uc = L.seasons[cc].tileSize,
  dc = L.permissions,
  fc = L.settings,
  pc = L.platforms.android,
  mc = pc.googlePlayBilling.price;

function hc(e) {
  return oc.countries[e - 1]
}

function gc(e) {
  return gc.map.get(e)
}(function(e) {
  e.map = _c(e.sharedProducts = Object.entries(oc.products).map(([e, t]) => ({
    ...t,
    productId: e
  })).filter(e => `lookupKey` in e), e => e.lookupKey)
})(gc || (gc = {}));

function _c(e, t) {
  let n = new Map;
  for (let r in e) {
    let i = Reflect.get(e, r),
      a = t(i, r, e);
    n.set(a, i)
  }
  return n
}
var vc = 5e3,
  yc = 4,
  R = 64,
  bc = 8;

function xc(e) {
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

function Sc(e) {
  let t = e.maxX - e.minX + 1,
    n = e.maxY - e.minY + 1;
  if (t <= 0 || n <= 0) return [];
  let r = Math.min(t, vc),
    i = Math.max(1, Math.floor(vc / r)),
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

function Cc(e) {
  let t = [],
    n = Math.floor(e.minX / R),
    r = Math.floor(e.maxX / R),
    i = Math.floor(e.minY / R),
    a = Math.floor(e.maxY / R);
  for (let o = i; o <= a; o += 1)
    for (let i = n; i <= r; i += 1) t.push({
      minX: Math.max(e.minX, i * R),
      minY: Math.max(e.minY, o * R),
      maxX: Math.min(e.maxX, (i + 1) * R - 1),
      maxY: Math.min(e.maxY, (o + 1) * R - 1)
    });
  return t
}

function wc(e) {
  let t = (e == null ? void 0 : e.role) ?? (e == null ? void 0 : e.alliance_role);
  return t === `mod` || t === `admin` || t === `leader` ? t : `member`
}

function Tc(e) {
  return class extends e {
    async getAlliance() {
      let e = await this.request(`/alliance`, {
        credentials: `include`
      });
      if (e.status === P.OK) return e.json();
      if (e.status !== P.NOT_FOUND) throw Error(h.unexpected_server_error())
    }
    async createAlliance(e) {
      let t = await this.request(`/alliance`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          name: e
        })
      });
      if (t.status === P.OK) return t.json();
      if (t.status === P.BAD_REQUEST) {
        let e = await t.json();
        throw e.error === `max_characters` ? new I(h.alliance_name_exceeded_the_maximum_number_of_characters(), t.status) : e.error === `name_taken` ? new I(h.alliance_name_already_taken(), t.status) : e.error == `empty_name` ? new I(h.alliance_with_empty_name(), t.status) : new I(h.unexpected_server_error(), t.status)
      }
      throw t.status === P.FORBIDDEN ? (await t.json().catch(() => ({}))).error === `not_enough_droplets` ? Error(h.not_enough_droplets()) : Error(h.you_are_already_in_an_alliance()) : Error(h.unexpected_server_error())
    }
    async leaveAlliance() {
      if ((await this.request(`/alliance/leave`, {
          method: `POST`,
          credentials: `include`
        })).status !== P.OK) throw Error(h.unexpected_server_error())
    }
    async updateAllianceDescription(e) {
      let t = await this.request(`/alliance/update-description`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          description: e
        })
      });
      if (t.status === P.OK) return t.json();
      if (t.status === P.FORBIDDEN) throw Error(h.you_are_not_allowed_to_do_this());
      if (t.status === P.BAD_REQUEST) {
        let e = await t.json().catch(() => ({}));
        throw Error(e.error === `invalid_markdown` ? h.alliance_description_invalid_markdown() : h.exceeded_max_chars())
      }
      throw t.status === P.CONFLICT ? Error(h.alliance_description_credit_required()) : Error(h.unexpected_server_error())
    }
    async getAllianceStore() {
      let e = await this.request(`/alliance/store`, {
        credentials: `include`
      });
      if (e.status === P.OK) return e.json();
      throw Error(h.unexpected_server_error())
    }
    async getAllianceCoinLedger(e) {
      let t = e ? `?before=${e}` : ``,
        n = await this.request(`/alliance/economy/ledger${t}`, {
          credentials: `include`
        });
      if (n.status === P.OK) return n.json();
      throw Error(h.unexpected_server_error())
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
      if (n.status === P.OK) return n.json();
      let r = await n.json().catch(() => ({}));
      throw r.error === `not_enough_droplets` ? Error(h.not_enough_droplets()) : r.error === `invalid_donation` ? Error(h.alliance_donation_invalid()) : Error(h.unexpected_server_error())
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
      if (t.status === P.OK) return t.json();
      let n = await t.json().catch(() => ({}));
      throw n.error === `not_enough_alliance_coins` ? Error(h.alliance_not_enough_coins()) : n.error === `already_unlocked` ? Error(h.alliance_already_unlocked()) : n.error === `headquarters_not_unlocked` ? Error(h.alliance_hq_not_unlocked()) : n.error === `headquarters_upgrade_prerequisite` ? Error(h.alliance_hq_upgrade_prerequisite()) : n.error === `template_upgrade_prerequisite` ? Error(h.alliance_template_upgrade_prerequisite()) : Error(h.unexpected_server_error())
    }
    async getAllianceTemplates(e) {
      let t = new URLSearchParams;
      e && (t.set(`target`, e.target), e.draftId !== void 0 && t.set(`draftId`, String(e.draftId)));
      let n = await this.request(`/alliance/templates${t.size?`?${t}`:``}`, {
        credentials: `include`
      });
      if (n.status === P.OK) {
        let e = await n.json();
        return {
          ...e,
          templates: (e.templates ?? []).map(xc),
          usedBytes: e.usedBytes ?? 0,
          byteLimit: e.byteLimit ?? 67108864,
          draftOptions: e.draftOptions ?? []
        }
      }
      throw Error(h.unexpected_server_error())
    }
    async createAllianceTemplate(e, t) {
      let n = new FormData;
      n.set(`idempotencyKey`, t), n.set(`name`, e.name), n.set(`audienceAllMembers`, String(e.audienceAllMembers)), n.set(`audienceRoles`, JSON.stringify(e.audienceRoles ?? [])), n.set(`audienceUserIds`, JSON.stringify(e.audienceUserIds ?? [])), n.set(`locations`, JSON.stringify(e.locations)), n.set(`opacity`, String(e.opacity)), n.set(`colorMetric`, e.colorMetric), n.set(`dithering`, String(e.dithering)), n.set(`colorPaletteMode`, e.colorPaletteMode), n.set(`pixelMode`, e.pixelMode), n.set(`image`, e.image, `alliance-template.png`);
      let r = await this.request(`/alliance/templates`, {
        method: `POST`,
        credentials: `include`,
        body: n
      });
      if (r.status === P.CREATED || r.status === P.OK) return xc(await r.json());
      let i = await r.json().catch(() => ({}));
      throw i.error === `template_limit_reached` ? Error(h.alliance_template_limit_reached()) : i.error === `template_storage_limit_reached` ? Error(h.alliance_template_storage_limit_reached()) : i.error === `invalid_template_image` ? Error(h.alliance_template_invalid_image()) : i.error === `template_upload_rate_limited` ? Error(h.alliance_template_upload_rate_limited()) : r.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
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
      if (n.status === P.OK) return xc(await n.json());
      throw (await n.json().catch(() => ({}))).error === `template_upload_rate_limited` ? Error(h.alliance_template_upload_rate_limited()) : n.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
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
      if (n.status === P.OK) return n.json();
      let r = await n.json().catch(() => ({}));
      throw r.error === `invalid_template_placement` ? Error(h.alliance_template_invalid_placement()) : r.error === `template_location_not_selected` ? Error(h.alliance_template_location_not_selected()) : n.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async updateAllianceTemplate(e, t) {
      let n = new FormData;
      n.set(`name`, t.name), n.set(`audienceAllMembers`, String(t.audienceAllMembers)), n.set(`audienceRoles`, JSON.stringify(t.audienceRoles ?? [])), n.set(`audienceUserIds`, JSON.stringify(t.audienceUserIds ?? [])), n.set(`locations`, JSON.stringify(t.locations)), n.set(`opacity`, String(t.opacity)), n.set(`colorMetric`, t.colorMetric), n.set(`dithering`, String(t.dithering)), n.set(`colorPaletteMode`, t.colorPaletteMode), n.set(`pixelMode`, t.pixelMode), n.set(`image`, t.image, `alliance-template.png`), t.expectedImageRevision && n.set(`expectedImageRevision`, t.expectedImageRevision), t.expectedUpdatedAt && n.set(`expectedUpdatedAt`, t.expectedUpdatedAt);
      let r = await this.request(`/alliance/templates/${e}`, {
        method: `PUT`,
        credentials: `include`,
        body: n
      });
      if (r.status === P.OK) return xc(await r.json());
      let i = await r.json().catch(() => ({}));
      throw i.error === `template_image_changed` ? Error(h.alliance_template_image_changed()) : i.error === `template_storage_limit_reached` ? Error(h.alliance_template_storage_limit_reached()) : i.error === `invalid_template_image` ? Error(h.alliance_template_invalid_image()) : i.error === `template_upload_rate_limited` ? Error(h.alliance_template_upload_rate_limited()) : r.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async deleteAllianceTemplate(e) {
      let t = await this.request(`/alliance/templates/${e}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== P.NO_CONTENT) throw t.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
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
      if (t.status === P.OK) return t.json();
      let n = await t.json().catch(() => ({}));
      throw n.error === `not_enough_alliance_coins` ? Error(h.alliance_not_enough_coins()) : n.error === `name_taken` ? Error(h.alliance_name_already_taken()) : n.error === `name_unchanged` ? Error(h.alliance_name_unchanged()) : n.error === `max_characters` ? Error(h.alliance_name_exceeded_the_maximum_number_of_characters()) : Error(h.unexpected_server_error())
    }
    async getAllianceAssets(e) {
      let t = await this.request(`/alliance/assets/${e}`, {
        credentials: `include`
      });
      if (t.status === P.OK) return t.json();
      throw Error(h.unexpected_server_error())
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
      if (n.status === P.OK) return n.json();
      throw (await n.json().catch(() => ({}))).error === `not_enough_alliance_coins` ? Error(h.alliance_not_enough_coins()) : Error(h.unexpected_server_error())
    }
    async getAllianceAssetCanvas(e) {
      let t = await this.request(`/alliance/assets/drafts/${e}/canvas`, {
        credentials: `include`
      });
      if (t.status === P.OK) return t.json();
      throw Error(h.unexpected_server_error())
    }
    async getAllianceAssetRevision(e) {
      let t = await this.request(`/alliance/assets/drafts/${e}/canvas?metadataOnly=true`, {
        credentials: `include`
      });
      if (t.status === P.OK) return t.json();
      if (t.status !== P.FORBIDDEN && t.status !== P.NOT_FOUND) throw Error(h.unexpected_server_error())
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
          throw e instanceof F ? new F(h.alliance_asset_paint_rate_limited()) : e
        });
      if (r.status === P.OK) return r.json();
      let i = await r.json().catch(() => ({}));
      if (i.error === `challenge-required` && i.tier) {
        if (await rs(i.tier)) return this.paintAllianceAsset(e, t);
        throw Error(h.challenge_verification_not_completed())
      }
      if (i.error === `verification-required`) {
        let n = await jo().get();
        if (!n.sealed_result) throw Error(h.unexpected_server_error());
        return await this.verifyAnticheat(n.sealed_result), this.paintAllianceAsset(e, t)
      }
      throw i.error === `color-not-owned` ? Error(h.alliance_better_pallet_required()) : Error(h.unexpected_server_error())
    }
    async finishAllianceAssetDraft(e, t) {
      let n = await this.request(`/alliance/assets/drafts/${e}/finish`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          publish: t
        })
      });
      if (n.status === P.OK) return n.json();
      throw Error(h.unexpected_server_error())
    }
    async equipAllianceAssetVersion(e) {
      if ((await this.request(`/alliance/assets/versions/${e}/select`, {
          method: `POST`,
          credentials: `include`
        })).status !== P.OK) throw Error(h.unexpected_server_error())
    }
    async unequipAllianceAsset(e) {
      if ((await this.request(`/alliance/assets/${e}/unpublish`, {
          method: `POST`,
          credentials: `include`
        })).status !== P.OK) throw Error(h.unexpected_server_error())
    }
    async deleteAllianceAssetVersion(e) {
      let t = await this.request(`/alliance/assets/versions/${e}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw (await t.json().catch(() => ({}))).error === `asset_version_selected` ? Error(h.alliance_asset_unequip_before_delete()) : Error(h.unexpected_server_error())
    }
    async getAllianceAssetEditors(e) {
      let t = await this.request(`/alliance/assets/drafts/${e}/editors`, {
        credentials: `include`
      });
      if (t.status === P.OK) return t.json();
      throw Error(h.unexpected_server_error())
    }
    async grantAllianceAssetEditor(e, t) {
      let n = await this.request(`/alliance/assets/drafts/${e}/editors`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userId: t
        })
      });
      if (n.status !== P.OK) throw (await n.json().catch(() => ({}))).error === `editor_already_granted` ? Error(h.alliance_asset_editor_already_added()) : Error(h.unexpected_server_error())
    }
    async revokeAllianceAssetEditor(e, t) {
      if ((await this.request(`/alliance/assets/drafts/${e}/editors/${t}`, {
          method: `DELETE`,
          credentials: `include`
        })).status !== P.OK) throw Error(h.unexpected_server_error())
    }
    async copyAllianceAssetEditors(e, t) {
      let n = await this.request(`/alliance/assets/drafts/${e}/editors/copy`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          sourceDraftId: t
        })
      });
      if (n.status === P.OK) return n.json();
      throw Error(h.unexpected_server_error())
    }
    async getAllianceAwards(e, t = 0) {
      let n = await this.request(`/alliances/${e}/awards?page=${t}`, {});
      if (n.status === P.OK) return n.json();
      throw Error(h.unexpected_server_error())
    }
    async setAllianceFeaturedAwards(e) {
      if ((await this.request(`/alliance/awards/featured`, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify({
            awardKeys: e
          })
        })).status !== P.OK) throw Error(h.unexpected_server_error())
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
      if (n.status === P.OK) return;
      if (n.status === P.FORBIDDEN) throw Error(h.you_are_not_allowed_to_do_this());
      let r = await n.json().catch(() => ({}));
      throw r.error === `headquarters_credit_required` ? Error(h.alliance_hq_credit_required()) : r.error === `headquarters_not_unlocked` ? Error(h.alliance_hq_not_unlocked()) : Error(h.unexpected_server_error())
    }
    async getAllianceHeadquarters() {
      let e = await this.request(`/alliance/headquarters`, {
        credentials: `include`
      });
      if (e.status === P.OK) return e.json();
      throw Error(h.unexpected_server_error())
    }
    async getAllianceHeadquartersCanvas(e = {}) {
      let t = new URLSearchParams;
      e.metadataOnly && t.set(`metadataOnly`, `true`), e.viewport && (t.set(`minX`, String(e.viewport.minX)), t.set(`minY`, String(e.viewport.minY)), t.set(`maxX`, String(e.viewport.maxX)), t.set(`maxY`, String(e.viewport.maxY)));
      let n = t.size > 0 ? `?${t}` : ``,
        r = await this.request(`/alliance/headquarters/canvas${n}`, {
          credentials: `include`,
          signal: e.signal
        });
      if (r.status === P.OK) return r.json();
      throw Error(h.unexpected_server_error())
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
      if (i.status === P.OK) return i.json();
      throw new I(h.unexpected_server_error(), i.status)
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
      if (a.status === P.OK) return a.arrayBuffer();
      throw new I(h.unexpected_server_error(), a.status)
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
      if (t.status === P.OK) return t.json();
      let n = await t.json().catch(() => ({}));
      throw n.error === `not_enough_alliance_coins` ? Error(h.alliance_not_enough_coins()) : n.error === `already_unlocked` ? Error(h.alliance_already_unlocked()) : n.error === `headquarters_anchor_required` ? Error(h.alliance_hq_anchor_required()) : Error(h.unexpected_server_error())
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
      if (t.status === P.OK) return t.json();
      let n = await t.json().catch(() => ({}));
      throw n.error === `not_enough_alliance_coins` ? Error(h.alliance_not_enough_coins()) : n.error === `headquarters_size_prerequisite` ? Error(h.alliance_hq_size_prerequisite()) : Error(h.unexpected_server_error())
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
          throw e instanceof F ? new F(h.alliance_asset_paint_rate_limited()) : e
        });
      if (r.status === P.OK) return r.json();
      let i = await r.json().catch(() => ({}));
      if (i.error === `challenge-required` && i.tier) {
        if (await rs(i.tier)) return this.paintAllianceHeadquarters(e, t);
        throw Error(h.challenge_verification_not_completed())
      }
      if (i.error === `verification-required`) {
        let n = await jo().get();
        if (!n.sealed_result) throw Error(h.unexpected_server_error());
        return await this.verifyAnticheat(n.sealed_result), this.paintAllianceHeadquarters(e, t)
      }
      throw i.error === `color-not-owned` ? Error(h.alliance_better_pallet_required()) : i.error === `not_enough_hq_charges` ? Error(h.alliance_hq_not_enough_charges()) : i.error === `headquarters_timed_out` ? Error(h.alliance_hq_timed_out_error()) : i.error === `headquarters_locked` ? Error(h.alliance_hq_locked()) : i.error === `no_pixel_changes` ? Error(h.alliance_hq_no_pixel_changes()) : Error(h.unexpected_server_error())
    }
    async getAllianceHqPixelInfo(e, t) {
      let n = await this.request(`/alliance/headquarters/pixel?x=${e}&y=${t}`, {
        credentials: `include`
      });
      if (n.status === P.OK) return n.json();
      throw Error(h.unexpected_server_error())
    }
    async getAllianceHqLeaderboard(e) {
      let t = await this.request(`/alliance/headquarters/leaderboard/${e}`, {
        credentials: `include`
      });
      if (t.status === P.OK) return t.json();
      throw t.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.alliance_hq_leaderboard_load_failed())
    }
    async getAllianceHqTimeouts(e) {
      let t = e ? `?before=${e}` : ``,
        n = await this.request(`/alliance/headquarters/timeouts${t}`, {
          credentials: `include`
        });
      if (n.status === P.OK) return n.json();
      throw Error(h.unexpected_server_error())
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
      if (r.status === P.OK) return r.json();
      if (r.status === P.FORBIDDEN) throw Error(h.you_are_not_allowed_to_do_this());
      let i = await r.json().catch(() => ({}));
      throw i.error === `headquarters_timeout_active` ? Error(h.alliance_hq_timeout_already_active()) : i.error === `invalid_timeout_reason` ? Error(h.alliance_hq_timeout_reason_required()) : Error(h.unexpected_server_error())
    }
    async revokeAllianceHqTimeout(e, t) {
      let n = await this.request(`/alliance/headquarters/timeouts/${e}`, {
        method: `DELETE`,
        credentials: `include`,
        body: JSON.stringify({
          reason: t
        })
      });
      if (n.status === P.OK) return;
      if (n.status === P.FORBIDDEN) throw Error(h.you_are_not_allowed_to_do_this());
      let r = await n.json().catch(() => ({}));
      throw r.error === `headquarters_timeout_inactive` ? Error(h.alliance_hq_timeout_inactive()) : r.error === `invalid_timeout_reason` ? Error(h.alliance_hq_timeout_reason_required()) : Error(h.unexpected_server_error())
    }
    async getPublicAllianceHeadquarters(e) {
      let t = await this.request(`/alliances/${e}/headquarters`, {});
      if (t.status === P.OK) return t.json();
      if (t.status !== P.NOT_FOUND) throw Error(h.unexpected_server_error())
    }
    async allianceLeaderboard(e) {
      let t = await this.request(`/alliance/leaderboard/${e}`, {
        credentials: `include`
      });
      if (t.status === P.OK) return t.json();
      throw t.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.leaderboard_disabled_temporarily())
    }
    async getAllianceInvites() {
      let e = await this.request(`/alliance/invites`, {
        credentials: `include`
      });
      if (e.status === P.OK) return e.json();
      throw e.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
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
      if (t.status === P.OK) return t.json();
      throw t.status === P.BAD_REQUEST ? (await t.json().catch(() => ({}))).error === `max_invites` ? Error(h.alliance_invite_limit_reached()) : Error(h.unexpected_server_error()) : t.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async revokeAllianceInvite(e) {
      let t = await this.request(`/alliance/invites/${e}/revoke`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw t.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async getAllianceGallery(e) {
      let t = new URLSearchParams({
        sort: e.sort,
        page: String(e.page)
      });
      e.query && t.set(`q`, e.query), e.joinPolicy && t.set(`joinPolicy`, e.joinPolicy);
      let n = await this.request(`/alliances?${t.toString()}`, {});
      if (n.status === P.OK) return n.json();
      throw Error(h.unexpected_server_error())
    }
    async getPublicAllianceHeadquartersPins(e) {
      let t = new URLSearchParams({
          minLat: e.minLat.toFixed(5),
          maxLat: e.maxLat.toFixed(5),
          minLng: e.minLng.toFixed(5),
          maxLng: e.maxLng.toFixed(5)
        }),
        n = await this.request(`/alliances/headquarters/pins?${t.toString()}`, {});
      if (n.status === P.OK) return n.json();
      throw Error(h.unexpected_server_error())
    }
    async getPublicAlliance(e) {
      let t = await this.request(`/alliances/${e}`, {});
      if (t.status === P.OK) return t.json();
      if (t.status !== P.NOT_FOUND) throw Error(h.unexpected_server_error())
    }
    async getPublicAllianceMembers(e, t) {
      let n = new URLSearchParams({
        page: String(t.page),
        role: t.role,
        sort: t.sort
      });
      t.query && n.set(`q`, t.query);
      let r = await this.request(`/alliances/${e}/members?${n.toString()}`, {});
      if (r.status === P.OK) return r.json();
      throw Error(h.unexpected_server_error())
    }
    async getAllianceViewerState(e) {
      let t = await this.request(`/alliances/${e}/viewer`, {
        credentials: `include`
      });
      if (t.status === P.OK) return t.json();
      if (t.status !== P.UNAUTHORIZED) throw Error(h.unexpected_server_error())
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
      return t.status === P.TOO_MANY_REQUESTS ? `cooldown` : this.mapJoinOutcome(t)
    }
    async mapJoinOutcome(e) {
      switch (e.status) {
        case P.OK:
          return `success`;
        case P.FORBIDDEN:
          return (await e.json().catch(() => ({}))).error === `banned` ? `banned` : `policy`;
        case P.CONFLICT:
          return `in-alliance`;
        case P.NOT_FOUND:
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
      if (t.status !== P.OK && t.status !== P.CONFLICT) throw Error(h.unexpected_server_error())
    }
    async getAllianceJoinRequests(e) {
      let t = await this.request(`/alliance/join-requests?page=${e}`, {
        credentials: `include`
      });
      if (t.status === P.OK) return t.json();
      throw t.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async reviewAllianceJoinRequest(e, t) {
      let n = await this.request(`/alliance/join-requests/${e}/review`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          accept: t
        })
      });
      if (n.status === P.OK) return `success`;
      if (n.status === P.CONFLICT) return `stale`;
      throw n.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async kickAllianceMember(e) {
      let t = await this.request(`/alliance/kick`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          kickedUserId: e
        })
      });
      if (t.status !== P.OK) throw t.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async removeAllianceAdmin(e) {
      let t = await this.request(`/alliance/remove-admin`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          demotedUserId: e
        })
      });
      if (t.status !== P.OK) throw t.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async setOwnAllianceMemberRole(e, t) {
      let n = await this.request(`/alliance/members/${e}/role`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          role: t
        })
      });
      if (n.status !== P.OK) throw n.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async getAllianceRolePermissions() {
      let e = await this.request(`/alliance/role-permissions`, {
        credentials: `include`
      });
      if (e.status === P.OK) return e.json();
      throw e.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async updateAllianceRolePermissions(e) {
      let t = await this.request(`/alliance/role-permissions`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          roles: e
        })
      });
      if (t.status !== P.OK) throw t.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async transferAllianceLeadership(e) {
      let t = await this.request(`/alliance/transfer-leadership`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          newLeaderUserId: e
        })
      });
      if (t.status !== P.OK) throw t.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async updateAllianceSettings(e) {
      let t = await this.request(`/alliance/settings`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== P.OK) throw t.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async setAllianceDiscordInvite(e) {
      let t = await this.request(`/alliance/discord-invite`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          url: e
        })
      });
      if (t.status !== P.OK) throw t.status === P.BAD_REQUEST ? Error(h.alliance_discord_invite_invalid()) : t.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async getAllianceActivity(e) {
      let t = e ? `?cursor=${e}` : ``,
        n = await this.request(`/alliance/activity${t}`, {
          credentials: `include`
        });
      if (n.status === P.OK) return n.json();
      throw n.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
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
      if (n.status === P.OK || n.status === P.FORBIDDEN) {
        let t = await n.json().catch(() => ({}));
        if ((t == null ? void 0 : t.reason) === `target_cooldown`) throw Error(h.alliance_report_cooldown());
        if (n.status === P.OK && typeof(t == null ? void 0 : t.success) == `boolean`) return t;
        if (n.status === P.FORBIDDEN && (t == null ? void 0 : t.error) === `challenge-required` && t.tier) {
          if (await rs(t.tier)) return this.reportAlliance(e);
          throw Error(h.challenge_verification_not_completed())
        }
      }
      throw Error(h.report_failed())
    }
    async joinAlliance(e) {
      switch ((await this.request(`/alliance/join/${e}`, {
          method: `POST`,
          credentials: `include`
        })).status) {
        case P.OK:
          return `success`;
        case P.ALREADY_REPORTED:
          return `in-another-alliance`;
        case P.UNAUTHORIZED:
          return `not-logged-in`;
        case P.FORBIDDEN:
          return `banned`;
        case P.BAD_REQUEST:
        case P.NOT_FOUND:
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
      if (n.status === P.OK) return n.json();
      throw Error(h.unexpected_server_error())
    }
    async getAllianceBannedMembers(e) {
      let t = new URLSearchParams({
        sort: e.sort
      });
      e.query && t.set(`q`, e.query);
      let n = await this.request(`/alliance/members/banned/${e.page}?${t.toString()}`, {
        credentials: `include`
      });
      if (n.status === P.OK) return n.json();
      throw Error(h.unexpected_server_error())
    }
    async getAllianceById(e) {
      let t = await this.request(`/staff/dashboard/alliances/${e}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status === P.NOT_FOUND) return;
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
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
      if (t.status === P.OK) return t.json();
      throw Error(h.unexpected_server_error())
    }
    async getAdminAllianceTemplates(e) {
      let t = await this.request(`/staff/dashboard/alliances/${e}/templates`, {
        credentials: `include`
      });
      if (t.status === P.OK) return t.json();
      throw new I(h.unexpected_server_error(), t.status)
    }
    async getAdminAllianceAssets(e) {
      let t = await this.request(`/staff/dashboard/alliances/${e}/assets`, {
        credentials: `include`
      });
      if (t.status === P.OK) return t.json();
      throw Error(h.unexpected_server_error())
    }
    async getAdminAllianceAssetEvents(e, t, n) {
      let r = n ? `?before=${n}` : ``,
        i = await this.request(`/staff/dashboard/alliances/${e}/assets/drafts/${t}/events${r}`, {
          credentials: `include`
        });
      if (i.status === P.OK) return i.json();
      throw Error(h.unexpected_server_error())
    }
    async moderateAdminAllianceAssetVersion(e, t, n, r) {
      if ((await this.request(`/staff/dashboard/alliances/${e}/assets/versions/${t}/moderation`, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify({
            ...n,
            reason: r
          })
        })).status !== P.OK) throw Error(h.unexpected_server_error())
    }
    async moderateAdminAllianceAssetDraft(e, t, n, r) {
      if ((await this.request(`/staff/dashboard/alliances/${e}/assets/drafts/${t}/moderation`, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify({
            ...n,
            reason: r
          })
        })).status !== P.OK) throw Error(h.unexpected_server_error())
    }
    async getAllianceHqWaybackEvents(e, t) {
      let n = new URLSearchParams;
      n.set(`limit`, String((t == null ? void 0 : t.limit) ?? fc.tools.wayback.hqLimit)), t != null && t.before && n.set(`before`, String(t.before)), t != null && t.area && (n.set(`minX`, String(t.area.minX)), n.set(`minY`, String(t.area.minY)), n.set(`maxX`, String(t.area.maxX)), n.set(`maxY`, String(t.area.maxY)));
      let r = await this.request(`/staff/dashboard/alliances/${e}/headquarters/events?${n.toString()}`, {
        credentials: `include`
      });
      if (r.status === P.NOT_FOUND) throw Error(h.alliances_not_found());
      if (r.status !== P.OK) throw Error(h.unexpected_server_error());
      return r.json()
    }
    async getAdminAllianceHqArea(e, t) {
      let n = Sc(t);
      if (n.length === 0) throw Error(h.unexpected_server_error());
      let r = await this.getAdminAllianceHqAreaChunk(e, n[0]),
        i = [...r.pixels];
      for (let t = 1; t < n.length; t += yc) {
        let a = await Promise.all(n.slice(t, t + yc).map(t => this.getAdminAllianceHqAreaChunk(e, t, r.eventHwm)));
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
      let i = Cc(t),
        a = Array(i.length),
        o = 0,
        s = Array.from({
          length: Math.min(bc, i.length)
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
      if (i.status !== P.OK) throw Error(h.unexpected_server_error());
      let a = await i.arrayBuffer(),
        o = (t.maxX - t.minX + 1) * (t.maxY - t.minY + 1);
      if (a.byteLength !== o * 13) throw Error(h.unexpected_server_error());
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
        m = Number(f);
      return {
        bounds: t,
        paintedBy: c,
        colors: l,
        eventIds: u,
        anchor: d !== null && f !== null && Number.isFinite(p) && Number.isFinite(m) ? {
          latitude: p,
          longitude: m
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
      if (i.status === P.CONTENT_TOO_LARGE || i.status !== P.OK) throw Error(h.unexpected_server_error());
      return i.json()
    }
    async reverseAdminAllianceHqPixels(e, t, n, r = !1) {
      let i = 0,
        a = 0;
      for (let o = 0; o < t.length; o += vc) {
        let s = await this.reverseAdminAllianceHqPixelChunk(e, t.slice(o, o + vc), n, r);
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
      if (i.status === P.CONTENT_TOO_LARGE) throw Error(h.alliance_hq_select_area_history_too_large());
      if (i.status === P.NOT_FOUND) throw Error(h.reverse_no_modifications());
      if (i.status !== P.OK) throw Error(h.unexpected_server_error());
      return a
    }
    async getAllianceFull(e) {
      let t = await this.request(`/staff/dashboard/alliances/${e}/full`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status === P.NOT_FOUND) return null;
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
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
          role: wc(e),
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
      if (r.status === P.NOT_FOUND) return {
        members: [],
        total: 0,
        filteredTotal: 0
      };
      if (r.status !== P.OK) throw new I(h.unexpected_server_error(), r.status);
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
          role: wc(e),
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
      if (n.status === P.BAD_REQUEST) {
        let e = await n.json().catch(() => ({}));
        throw Error((e == null ? void 0 : e.error) ?? h.unexpected_server_error())
      }
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status)
    }
    async updateAdminAllianceDescription(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/description`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          description: t
        })
      });
      if (n.status === P.OK) return n.json();
      if (n.status === P.BAD_REQUEST) {
        let e = await n.json().catch(() => ({}));
        throw Error(e.error === `invalid_markdown` ? h.alliance_description_invalid_markdown() : h.exceeded_max_chars())
      }
      throw new I(h.unexpected_server_error(), n.status)
    }
    async changeAllianceLeader(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/leader`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          newLeaderUserId: t
        })
      });
      if (n.status === P.BAD_REQUEST) {
        let e = await n.json();
        throw (e == null ? void 0 : e.error) === `user_not_in_alliance` ? Error(h.leader_must_be_in_alliance()) : Error(h.unexpected_server_error())
      }
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status)
    }
    async getAllianceBanTargets(e) {
      let t = await this.request(`/staff/dashboard/alliances/${e}/ban-targets`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
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
      if (r.status !== P.OK) throw new I(h.unexpected_server_error(), r.status)
    }
    async setAllianceMemberRole(e, t, n) {
      let r = await this.request(`/staff/dashboard/alliances/${e}/members/${t}/role`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          role: n
        })
      });
      if (r.status !== P.OK) throw new I(h.unexpected_server_error(), r.status)
    }
    async removeAllianceMember(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/members/${t}/remove`, {
        method: `POST`,
        credentials: `include`
      });
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status)
    }
    async getAdminAllianceRevisions(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/revisions?kind=${t}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
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
      if (r.status !== P.OK) throw new I(h.unexpected_server_error(), r.status)
    }
    async suspendAdminAllianceVisibility(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/suspend-visibility`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          discoverability: t
        })
      });
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status)
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
      if (r.status === P.NOT_FOUND) throw Error(h.alliance_ticket_no_headquarters());
      if (r.status !== P.OK) throw new I(h.unexpected_server_error(), r.status)
    }
    async restoreAdminAlliance(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/restore`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          newLeaderUserId: t
        })
      });
      if (n.status === P.BAD_REQUEST) {
        let e = await n.json().catch(() => ({}));
        throw (e == null ? void 0 : e.error) === `user_not_found` ? Error(h.alliances_invalid_id()) : (e == null ? void 0 : e.error) === `user_already_in_alliance` ? Error(h.alliance_staff_restore_leader_in_alliance()) : (e == null ? void 0 : e.error) === `alliance_not_archived` ? Error(h.alliance_staff_restore_not_archived()) : Error(h.unexpected_server_error())
      }
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status)
    }
    async archiveAdminAlliance(e) {
      let t = await this.request(`/staff/dashboard/alliances/${e}/archive`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status)
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status)
    }
    async giveAllianceAdmin(e) {
      let t = await this.request(`/alliance/give-admin`, {
        body: JSON.stringify({
          promotedUserId: e
        }),
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw t.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async banAllianceUser(e) {
      let t = await this.request(`/alliance/ban`, {
        body: JSON.stringify({
          bannedUserId: e
        }),
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw t.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async equipFlag(e) {
      if ((await this.request(`/flag/equip/${e}`, {
          method: `POST`,
          credentials: `include`
        })).status !== P.OK) throw Error(h.unexpected_server_error())
    }
    async unbanAllianceUser(e) {
      let t = await this.request(`/alliance/unban`, {
        body: JSON.stringify({
          unbannedUserId: e
        }),
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw t.status === P.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
  }
}

function Ec(e) {
  return class extends e {
    async getUserAnticheat(e) {
      let t = await this.request(`/staff/dashboard/users/anticheat?id=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
      return await t.json()
    }
    async getAnticheatStats(e, t) {
      let n = await this.request(`/staff/dashboard/anticheat/stats?from=${e}&to=${t}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
      return n.json()
    }
    async getAnticheatSignals(e, t) {
      let n = await this.request(`/staff/dashboard/anticheat/signals?from=${e}&to=${t}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
      return n.json()
    }
    async getAnticheatUserJourney(e, t, n) {
      let r = await this.request(`/staff/dashboard/anticheat/user/${e}?from=${t}&to=${n}`, {
        method: `GET`,
        credentials: `include`
      });
      if (r.status !== P.OK) throw new I(h.unexpected_server_error(), r.status);
      return r.json()
    }
    async getAnticheatSignalAnalysis(e, t, n) {
      let r = await this.request(`/staff/dashboard/anticheat/signal/${encodeURIComponent(e)}?from=${encodeURIComponent(t)}&to=${encodeURIComponent(n)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (r.status !== P.OK) throw new I(h.unexpected_server_error(), r.status);
      return r.json()
    }
  }
}

function Dc(e) {
  return class extends e {
    async autoReviewBan(e) {
      let t = await this.request(`/staff/dashboard/users/auto-review-ban`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userId: e
        })
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
      return await t.json()
    }
    async getUserAppeals(e) {
      let t = new URLSearchParams;
      t.set(`userId`, String(e.userId)), t.set(`kind`, e.kind), e.page !== void 0 && t.set(`page`, String(e.page)), e.pageSize !== void 0 && t.set(`pageSize`, String(e.pageSize)), e.sortBy && t.set(`sortBy`, e.sortBy), e.sortDir && t.set(`sortDir`, e.sortDir);
      let n = await this.request(`/staff/dashboard/users/appeals?${t.toString()}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
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
      if (i.status === P.FORBIDDEN) {
        let n = await i.json();
        if ((n == null ? void 0 : n.error) === `challenge-required` && n.tier) {
          if (await rs(n.tier)) return this.submitBanAppeal(e, t);
          throw new I(h.challenge_verification_not_completed(), i.status)
        }
      }
      if (i.status !== P.OK && i.status !== P.ALREADY_REPORTED) throw new I(h.unexpected_server_error(), i.status);
      return i.status
    }
    async getOpenAppeals() {
      let e = await this.request(`/staff/appeals/get`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
      return await n.json()
    }
    async getUserLastAppeal() {
      let e = await this.request(`/me/last-appeal`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
      let t = await e.json();
      return (t == null ? void 0 : t.appealDate) ?? null
    }
    async assignAppeals() {
      let e = await this.request(`/staff/appeals/assign`, {
        method: `POST`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
      return await e.json()
    }
    async getPendingAppealsCount() {
      let e = await this.request(`/staff/appeals/open_count`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
      let t = await e.json();
      return (t == null ? void 0 : t.appeals) ?? 0
    }
  }
}

function Oc(e) {
  return class extends e {
    async getDeviceAttestChallenge() {
      let e = await this.request(`/device/attest/challenge`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status)
    }
    async getDevicePreauthChallenge() {
      let e = await this.request(`/device/preauth/challenge`, {
        method: `GET`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
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
      if (t.status !== P.OK) throw new I(await t.json().then(e => e.error).catch(() => void 0) ?? h.unexpected_server_error(), t.status);
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
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status)
    }
    async getAppStoreAccountToken(e) {
      let t = await this.request(`/payment/appstore/account-token`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          challenge: e
        })
      });
      if (t.status !== P.OK) throw Error(h.unexpected_server_error());
      return (await t.json()).token
    }
    async getAppStoreConsumptionConsent(e) {
      let t = await this.request(`/payment/appstore/consumption-consent`, {
        method: `GET`,
        credentials: `include`,
        signal: e
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
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
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
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
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
      return t.json()
    }
  }
}
async function kc(e) {
  let t = await e.json().catch(() => null);
  return new I((t == null ? void 0 : t.error) === `cosmetic_tag_exists` ? h.store_mgr_tag_exists() : (t == null ? void 0 : t.error) === `invalid_cosmetic_tag` ? h.store_mgr_tag_invalid() : (t == null ? void 0 : t.error) === `cosmetic_tag_immutable` ? h.store_mgr_tag_immutable() : h.unexpected_server_error(), e.status)
}

function Ac(e) {
  return class extends e {
    async getUserFrames() {
      let e = await this.request(`/me/frames`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
      return e.json()
    }
    async postEquipUserFrame(e) {
      let t = await this.request(`/me/frames/equip/${e}`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status)
    }
    async getUserBadges() {
      let e = await this.request(`/me/badges`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
      return e.json()
    }
    async postEquipUserBadge(e) {
      let t = await this.request(`/me/badges/equip`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status)
    }
    async getStoreFrames() {
      let e = await this.request(`/store/frames`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
      return e.json()
    }
    async postBuyUserFrame(e) {
      let t = await this.request(`/store/frames/buy/${e}`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status === P.NOT_FOUND) throw Error(h.couldnt_complete_the_purchase_this_item_doesnt_exist());
      if (t.status === P.FORBIDDEN) throw Error(h.you_do_not_have_enough_droplets_to_buy_this_item());
      if (t.status === P.CONFLICT) throw Error(h.you_already_have_this_item());
      if (t.status !== P.OK) throw Error(h.unexpected_server_error())
    }
    async postEquipCosmetics(e) {
      let t = await this.request(`/me/cosmetic/equip`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status)
    }
    async getStoreNameCosmetics() {
      let e = await this.request(`/store/name`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
      return await e.json()
    }
    async postBuyCosmetic(e) {
      let t = await this.request(`/store/name/buy/${e}`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status)
    }
    async getMyNameCosmetics() {
      let e = await this.request(`/me/cosmetics/name`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
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
      if (n.status !== P.OK) throw await kc(n);
      return n.json()
    }
    async postCreateFont(e) {
      let t = await this.request(`/staff/store-manager/fonts`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== P.OK) throw await kc(t);
      return t.json()
    }
    async postCreateStyle(e) {
      let t = await this.request(`/staff/store-manager/styles`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== P.OK) throw await kc(t);
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
      return n.json()
    }
    async putAdminCosmetic(e, t) {
      let n = await this.request(`/staff/store-manager/cosmetics/${e}`, {
        method: `PUT`,
        credentials: `include`,
        body: JSON.stringify(t)
      });
      if (n.status !== P.OK) throw await kc(n);
      return n.json()
    }
    async deleteAdminCosmetic(e) {
      let t = await this.request(`/staff/store-manager/cosmetics/${e}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status)
    }
    async getAdminBadges(e) {
      let t = new URLSearchParams;
      e && t.set(`search`, e);
      let n = t.size ? `?${t.toString()}` : ``,
        r = await this.request(`/staff/store-manager/badges${n}`, {
          method: `GET`,
          credentials: `include`
        });
      if (r.status !== P.OK) throw new I(h.unexpected_server_error(), r.status);
      return r.json()
    }
    async postAdminBadge(e) {
      let t = await this.request(`/staff/store-manager/badges`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
      return t.json()
    }
    async putAdminBadge(e, t) {
      let n = await this.request(`/staff/store-manager/badges/${e}`, {
        method: `PUT`,
        credentials: `include`,
        body: JSON.stringify(t)
      });
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
      return n.json()
    }
    async deleteAdminBadge(e) {
      let t = await this.request(`/staff/store-manager/badges/${e}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status)
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
      return n.json()
    }
    async deleteR2Image(e) {
      let t = await this.request(`/staff/store-manager/images/${e}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status)
    }
  }
}
var z = {
  day: 864e5,
  hour: 36e5,
  minute: 6e4,
  second: 1e3,
  millisecond: 1
};

function jc(e) {
  let t = Math.floor(e / z.hour);
  e -= t * z.hour;
  let n = Math.floor(e / z.minute);
  e -= n * z.minute;
  let r = Math.floor(e / z.second).toString().padStart(2, `0`);
  return t > 0 ? `${t}:${n.toString().padStart(2,`0`)}:${r}` : `${n}:${r}`
}

function Mc(e) {
  return `${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)} ${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}:${String(e.getSeconds()).padStart(2,`0`)}`
}
var Nc = 30 * z.minute;

function Pc(e) {
  return class extends e {
    constructor(...e) {
      super(...e), s(this, `lastHotspotRequestAt`, 0)
    }
    async leaderboardPlayers(e) {
      let t = await this.request(`/leaderboard/player/${e}`);
      if (t.status !== P.OK) throw Error(h.leaderboard_disabled_temporarily());
      return t.json()
    }
    async leaderboardAlliances(e) {
      let t = await this.request(`/leaderboard/alliance/${e}`);
      if (t.status !== P.OK) throw Error(h.leaderboard_disabled_temporarily());
      return t.json()
    }
    async leaderboardRegions(e, t = 0) {
      let n = await this.request(`/leaderboard/region/${e}/${t}`);
      if (n.status === P.OK) return n.json();
      throw Error(h.leaderboard_disabled_temporarily())
    }
    async leaderboardRegionPlayers(e, t) {
      let n = await this.request(`/leaderboard/region/players/${e}/${t}`);
      if (n.status === P.OK) return n.json();
      throw Error(h.leaderboard_disabled_temporarily())
    }
    async leaderboardRegionAlliances(e, t) {
      let n = await this.request(`/leaderboard/region/alliances/${e}/${t}`);
      if (n.status === P.OK) return n.json();
      throw Error(h.leaderboard_disabled_temporarily())
    }
    async leaderboardCountries(e) {
      let t = await this.request(`/leaderboard/country/${e}`, {
        credentials: `include`
      });
      if (t.status === P.OK) return t.json();
      throw Error(h.leaderboard_disabled_temporarily())
    }
    refreshHotspotsIfStale() {
      Date.now() - this.lastHotspotRequestAt < Nc || (this.lastHotspotRequestAt = Date.now(), this.request(`/map/hotspots`, {
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
      if (t.status !== P.OK) throw Error(h.unexpected_server_error());
      return t.json()
    }
  }
}

function Fc(e) {
  return class extends e {
    async postCaptchaSession(e, t = `include`) {
      let n = await this.request(`/anticheat/captcha/session`, {
        method: `POST`,
        credentials: t,
        body: JSON.stringify(e),
        headers: {
          "x-fp": await ko()
        }
      });
      if (!n.ok) throw n.status === 500 ? new I(h.unexpected_server_error(), n.status) : new I(h.invalid_captcha(), n.status);
      return n.json()
    }
    async postTelemetry(e, t) {
      return (await this.request(`/frontend/telemetry`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          event: e,
          data: t
        })
      })).status === P.OK
    }
  }
}
var Ic = {
    griefing: h.griefing(),
    "multi-accounting": h.multi_accounting(),
    "hate-speech": h.hate_speech(),
    bot: h.bot(),
    doxxing: h.doxxing(),
    "inappropriate-content": h.inappropriate_content(),
    other: h.breaking_the_rules()
  },
  Lc = {
    doxxing: h.doxxing_description(),
    "hate-speech": h.hate_speech_description(),
    griefing: h.griefing_description(),
    "multi-accounting": h.multi_accounting_description(),
    bot: h.bot_description(),
    "inappropriate-content": h.inappropriate_content_description(),
    other: h.breaking_the_rules_description()
  },
  Rc = {
    doxxing: `text-red-600`,
    "hate-speech": `text-red-400`,
    "inappropriate-content": `text-amber-500`,
    "multi-accounting": `text-amber-300`,
    bot: `text-amber-600`,
    griefing: `text-amber-200`,
    other: `text-cyan-600`
  },
  zc = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  Bc = {
    griefing: `topic-2`,
    "inappropriate-content": `topic-1`,
    bot: `topic-3`,
    "multi-accounting": `topic-3`,
    "hate-speech": `topic-1`,
    doxxing: `topic-1`,
    other: ``
  },
  Vc = 365 * z.day;

function Hc(e) {
  if (!e) return null;
  let t = (e instanceof Date ? e : new Date(e)).getTime();
  return Number.isFinite(t) ? t : null
}

function Uc(e, t = Date.now()) {
  let n = Hc(e);
  return n !== null && n - t >= Vc
}

function Wc(e, t = Date.now()) {
  let n = Hc(e);
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

function Gc(e) {
  return class extends e {
    async getModeratorTickets() {
      let e = await this.request(`/staff/tickets/get`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
      let t = await e.json();
      for (let e of t.tickets) e.reports.sort((e, t) => zc[e.reason] - zc[t.reason]);
      return t
    }
    async countMyTicketsClosedToday() {
      let e = await this.request(`/staff/tickets/closed-today`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
      return e.json()
    }
    async getOpenTicketsCount() {
      let e = await this.request(`/staff/tickets/open_count`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
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
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
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
      if (a.status !== P.OK && a.status !== P.BAD_REQUEST) throw new I(h.unexpected_server_error(), a.status)
    }
    async getLastResolvedTicket() {
      let e = await this.request(`/staff/tickets/reversals/last-resolved`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
      return (await e.json()).ticket
    }
    async getTicketReversalTicketInfo(e) {
      let t = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
      return (await t.json()).ticket
    }
    async getReporterReportHistory(e, t) {
      let n = await this.request(`/staff/tickets/reporter-history?ticketId=${encodeURIComponent(e)}&reporterId=${t}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
      return (await n.json()).reports
    }
    async createTicketReversal(e) {
      let t = await this.request(`/staff/tickets/reversals`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status === P.CONFLICT) {
        let e = await t.json().catch(() => ({}));
        throw (e == null ? void 0 : e.error) === `reversal_already_pending` ? new I(h.ticket_reversal_already_pending(), P.CONFLICT) : new I(h.unexpected_server_error(), P.CONFLICT)
      }
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
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
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
      return t.json()
    }
    async reSolveTicket(e) {
      let t = await this.request(`/staff/tickets/re-solve`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
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
      if (r.status !== P.OK) throw new I(h.unexpected_server_error(), r.status);
      return (await r.json()).reversals ?? []
    }
    async getTicketReversal(e) {
      let t = await this.request(`/staff/tickets/reversals/${e}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
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
      if (r.status === P.FORBIDDEN) throw new I(h.ticket_reversal_cannot_self_review(), P.FORBIDDEN);
      if (r.status === P.CONFLICT) throw new I(h.ticket_reversal_already_reviewed(), P.CONFLICT);
      if (r.status !== P.OK) throw new I(h.unexpected_server_error(), r.status)
    }
    async getOpenTicketsSummary() {
      let e = await this.request(`/staff/dashboard/summary/counters/tickets`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
      return e.json()
    }
    async getOpenReportsSummary() {
      let e = await this.request(`/staff/dashboard/summary/counters/reports`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw new I(h.unexpected_server_error(), e.status);
      return e.json()
    }
    async getBanAppealStats(e, t) {
      let n = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(e)}&end=${encodeURIComponent(t)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
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
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
      return t.json()
    }
    async getUserInfoFull(e) {
      let t = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== P.NOT_FOUND) {
        if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
      return n.json()
    }
    async getUserInfoByEmail(e) {
      let t = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== P.NOT_FOUND) {
        if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
        return t.json()
      }
    }
    async getUserPunishments(e) {
      let t = await this.request(`/staff/dashboard/users/punishments?userId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
      return (await t.json()).punishments ?? []
    }
    async getPunishmentTicket(e) {
      let t = await this.request(`/staff/dashboard/users/punishment-ticket?ticketId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
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
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status)
    }
    async getUserNotes(e, t) {
      let n = t == `dashboard` ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(e)}` : `/staff/appeals/notes?userId=${encodeURIComponent(e)}`,
        r = await this.request(n, {
          method: `GET`,
          credentials: `include`
        });
      if (r.status !== P.OK) throw new I(h.unexpected_server_error(), r.status);
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
      if (i.status !== P.OK) throw new I(h.unexpected_server_error(), i.status)
    }
    async getUserPermissions(e) {
      let t = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
      let r = await n.json();
      return Array.isArray(r == null ? void 0 : r.permissions) ? r.permissions : []
    }
    async getUserPurchases(e) {
      let t = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
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
      if (i.status !== P.OK) throw new I(h.unexpected_server_error(), i.status);
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
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
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
      return t.json()
    }
    async getTicketOverturnInfo(e) {
      let t = await this.request(`/staff/dashboard/all-tickets/overturn-info?ticketId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
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
      if (r.status !== P.OK) throw new I(h.unexpected_server_error(), r.status);
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
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
      return n.json()
    }
    async getTicketsKpi(e) {
      let t = new URLSearchParams;
      t.set(`start`, e.startIso), t.set(`end`, e.endIso), e.compare && t.set(`compare`, `1`), e.userId != null && t.set(`userId`, String(e.userId)), e.allianceId != null && t.set(`allianceId`, String(e.allianceId)), e.reason != null && t.set(`reason`, e.reason), e.punishment != null && t.set(`punishment`, e.punishment), e.granularity != null && t.set(`granularity`, e.granularity);
      let n = await this.request(`/staff/dashboard/kpi/tickets?${t.toString()}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
      return n.json()
    }
  }
}

function Kc(e) {
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
          let e = Error(h.request_timeout());
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
          if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
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
var qc = [`droplets`, `prism`];

function Jc(e) {
  return qc.map(t => ({
    currency: t,
    amount: e.reduce((e, n) => e + (n.currency === t ? n.amount : 0), 0)
  })).filter(e => e.amount > 0)
}

function Yc(e) {
  return class extends e {
    async driveStatus() {
      let e = await this.request(`/drive/status`, {
        credentials: `include`
      });
      return e.status === P.OK && !!(await e.json()).connected
    }
    async driveConnect(e) {
      let t = await this.request(`/drive/connect`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          code: e
        })
      });
      if (t.status !== P.OK) throw Error(`drive connect failed: ${t.status}`);
      return t.json()
    }
    async driveToken() {
      let e = await this.request(`/drive/token`, {
        credentials: `include`,
        throwOnStatus: !1
      });
      if (e.status === P.CONFLICT) return null;
      if (e.status !== P.OK) throw Error(`drive token failed: ${e.status}`);
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
      if (t.status === P.TOO_MANY_REQUESTS) throw new F(h.you_or_someone_in_your_network_is_making_a_lot_of_requests_to_the_server());
      if (t.status === P.UNAUTHORIZED) throw Error(h.you_are_not_logged_in());
      if (t.status === P.UNAVAILABLE_FOR_LEGAL_REASONS) throw Error(h.account_suspended_message());
      if (t.status !== P.OK) throw t.status >= 500 || t.status === P.REQUEST_TIMEOUT ? new Gs(h.payment_checkout_failed()) : Error(h.payment_checkout_failed());
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
    async createFastspringSession(e) {
      let t = await this.request(`/payment/fastspring/session`, {
        method: `POST`,
        credentials: `include`,
        throwOnStatus: !1,
        body: JSON.stringify({
          lookup_key: e
        })
      });
      if (t.status === P.TOO_MANY_REQUESTS) throw new F(h.you_or_someone_in_your_network_is_making_a_lot_of_requests_to_the_server());
      if (t.status === P.UNAUTHORIZED) throw Error(h.you_are_not_logged_in());
      if (t.status !== P.OK) {
        if (t.status === P.FORBIDDEN) {
          let e = await t.json().catch(() => null);
          if ((e == null ? void 0 : e.code) === `payment_country_restricted`) throw new Ws(h.payment_country_restricted())
        }
        throw t.status >= 500 || t.status === P.REQUEST_TIMEOUT ? new Gs(h.payment_checkout_failed()) : Error(h.payment_checkout_failed())
      }
      return await t.json()
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
      if (e.status === P.NOT_FOUND) return null;
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
      if (t.status !== P.OK) throw t.status === P.NOT_FOUND ? Error(h.couldnt_complete_the_purchase_this_item_doesnt_exist()) : t.status === P.FORBIDDEN ? Error(h.you_do_not_have_enough_droplets_to_buy_this_item()) : t.status === P.CONFLICT ? Error(h.you_already_have_this_item()) : Error(h.unexpected_server_error())
    }
    async getPlayAccountId() {
      let e = await this.request(`/payment/play/account-id`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw Error(h.unexpected_server_error());
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
      if (t.status === P.BAD_REQUEST) {
        let e = await t.json().catch(() => ({}));
        throw Error((e == null ? void 0 : e.error) ?? `Invalid Play purchase`)
      }
      if (t.status === P.UNAVAILABLE_FOR_LEGAL_REASONS) throw Error(h.account_suspended_message());
      if (t.status !== P.OK) throw Error(h.unexpected_server_error());
      return t.json()
    }
    async verifyPendingPlayPurchases() {
      let e = await this.request(`/payment/play/verify-pending`, {
        method: `POST`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw Error(h.unexpected_server_error());
      return e.json()
    }
    async getPlayClaimStatus(e) {
      let t = await this.request(`/payment/play/claim/${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status === P.NOT_FOUND) return {
        status: `unknown`,
        grant: {
          currency: `droplets`,
          amount: 0
        }
      };
      if (t.status !== P.OK) throw Error(h.unexpected_server_error());
      return t.json()
    }
    async listPaymentHistory(e) {
      let t = e ? `?before=${encodeURIComponent(e)}` : ``,
        n = await this.request(`/payment/history${t}`, {
          credentials: `include`
        });
      if (n.status !== P.OK) throw Error(h.unexpected_server_error());
      return n.json()
    }
    async listPlayPurchaseHistory() {
      let e = await this.request(`/payment/play/history`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== P.OK) throw Error(h.unexpected_server_error());
      return e.json()
    }
  }
}

function Xc(e, t) {
  let n = {};
  for (let r of e) {
    let e = t(r),
      i = n[e];
    i ? i.push(r) : n[e] = [r]
  }
  return n
}

function Zc(e, t) {
  let n = {};
  for (let r of e) {
    let e = t(r);
    n[e] = r
  }
  return n
}

function Qc(e) {
  return class extends e {
    async paint(e) {
      let t = Xc(e, e => `t=(${e.tile[0]},${e.tile[1]}),s=${e.season}`),
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
      if (a.status === P.OK) return await a.json().catch(() => ({}));
      if (a.status === P.UNAUTHORIZED) throw Error(h.you_need_to_be_logged_in_to_paint());
      if (a.status === P.FORBIDDEN) {
        if (a.headers.get(`cf-mitigated`) === `challenge`) throw Error(h.ddos_message());
        let t = await a.json().catch(() => ({}));
        switch (t == null ? void 0 : t.error) {
          case `timeout`: {
            let e = new Date(Date.now() + ((t == null ? void 0 : t.durationMs) ?? 0));
            throw Error(h.your_account_was_suspended_until({
              until: e.toLocaleString()
            }))
          }
          case `refresh`:
            throw Error(h.refresh_page());
          case `color-not-owned`:
            throw Error(h.paint_color_not_owned());
          case `company-paint-outside-allowed-area`:
            throw Error(h.company_paint_outside_allowed_area());
          case `event-pixel-present`:
            throw Error(h.cannot_paint_over_event_pixel());
          case `challenge-required`:
            if (t.tier) {
              if (await rs(t.tier)) return this.paint(e);
              throw Error(h.challenge_verification_not_completed())
            }
            throw console.error(`Challenge required but no tier provided`, t), Error(h.unexpected_server_error());
          case `verification-required`: {
            let t = (await jo().get()).sealed_result;
            if (!t) throw Error(h.unexpected_server_error());
            return await this.verifyAnticheat(t), this.paint(e)
          }
        }
        throw await K.refresh(), typeof(t == null ? void 0 : t.charges) == `number` ? Error(h.you_do_not_have_enough_charges_to_paint()) : Error(h.unexpected_server_error())
      }
      throw Error(h.unexpected_server_error())
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
      if (t.status !== P.OK) throw new I(h.unexpected_server_error(), t.status);
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
      if (a.status !== P.OK) throw new I(h.unexpected_server_error(), a.status);
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
      if (a.status !== P.OK) throw new I(h.unexpected_server_error(), a.status);
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
      if (n.status === P.BAD_REQUEST) {
        let e = await n.json(),
          t = (e == null ? void 0 : e.error) ?? ``;
        throw t === `timelapse_too_many_events` ? new I(h.select_area_timelapse_history_too_large(), P.BAD_REQUEST) : new I(typeof t == `string` && t ? t : h.unexpected_server_error(), P.BAD_REQUEST)
      }
      if (n.status !== P.OK) throw new I(h.unexpected_server_error(), n.status);
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
      if (a.status !== P.OK) throw new I(h.unexpected_server_error(), a.status);
      return a.json()
    }
    async sendPaintRequests(e, t, n, r) {
      let i = Xc(e, e => `t=(${e.tile[0]},${e.tile[1]}),s=${e.season}`),
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
        }))).filter(e => e.status !== P.OK);
      if (a.length) {
        let e = a[0];
        if (e.status === P.UNAUTHORIZED) throw Error(h.you_need_to_be_logged_in_to_paint());
        if (e.status === P.FORBIDDEN) {
          if (e.headers.get(`cf-mitigated`) === `challenge`) throw Error(h.ddos_message());
          let t = await e.json().catch(() => ({}));
          switch (t == null ? void 0 : t.error) {
            case `timeout`: {
              let e = new Date(Date.now() + ((t == null ? void 0 : t.durationMs) ?? 0));
              throw Error(h.your_account_was_suspended_until({
                until: e.toLocaleString()
              }))
            }
            case `refresh`:
              throw Error(h.refresh_page());
            case `color-not-owned`:
              throw Error(h.paint_color_not_owned());
            case `event-pixel-present`:
              throw Error(h.cannot_paint_over_event_pixel())
          }
          throw await K.refresh(), typeof(t == null ? void 0 : t.charges) == `number` ? Error(h.you_do_not_have_enough_charges_to_paint()) : Error(h.unexpected_server_error())
        }
        throw Error(h.unexpected_server_error())
      }
    }
    async adminAutoPainterPaint(e, t, n, r = {}) {
      let i = $c(e),
        a = await el(i),
        o = new FormData;
      o.append(`fingerprint`, t), o.append(`season`, i.season.toString()), o.append(`px0`, i.offsetX.toString()), o.append(`py0`, i.offsetY.toString()), o.append(`width`, i.width.toString()), o.append(`height`, i.height.toString()), o.append(`pixels`, e.length.toString()), o.append(`bitmap`, a, `auto-painter.png`), o.append(`userId`, n.toString()), o.append(`missing`, String(r.missing ?? !1)), o.append(`incorrect`, String(r.incorrect ?? !1)), o.append(`showOnLeaderboard`, String(r.showOnLeaderboard ?? !1));
      let s = await this.request(`/staff/tools/auto-painter/paint`, {
        method: `POST`,
        body: o,
        credentials: `include`
      });
      if (s.status === P.FORBIDDEN) {
        let t = await s.json().catch(() => null);
        if (typeof(t == null ? void 0 : t.charges) == `number`) throw Error(h.overlay_auto_paint_not_enough_charges({
          charges: Math.floor(t.charges),
          pixels: e.length
        }));
        let n = typeof(t == null ? void 0 : t.error) == `string` ? t.error.trim() : ``;
        throw Error(n && n !== `Forbidden` ? n : `Auto painter is restricted to administrators.`)
      }
      if (s.status !== P.OK) throw Error(h.unexpected_server_error());
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
      if (o.status !== P.OK) {
        let e = await o.text();
        throw Error(h.error_while_painting({
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
      if (s.status !== P.OK) {
        let e = await s.text();
        throw console.error(`Error while fetching pixel area info`, e), Error(h.unexpected_server_error())
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

function $c(e) {
  var t;
  if (!e.length) throw Error(`Auto painter request does not contain any pixels.`);
  let n = e[0].season;
  for (let t of e)
    if (t.season !== n) throw Error(`Auto painter requests cannot mix seasons.`);
  let r = (t = oc.seasons) == null ? void 0 : t[n];
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
    let r = (p = oc.colors) == null ? void 0 : p[n];
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
async function el(e) {
  let t = tl(e.width, e.height),
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

function tl(e, t) {
  if (typeof OffscreenCanvas < `u`) return new OffscreenCanvas(e, t);
  if (typeof document < `u`) {
    let n = document.createElement(`canvas`);
    return n.width = e, n.height = t, n
  }
  throw Error(`Canvas API is not available in the current environment.`)
}

function nl(e) {
  return class extends e {
    async protectionRequest(e, t) {
      let n = await this.request(`/staff/dashboard/protections${e}`, t);
      if (!n.ok) {
        let e = await n.json().catch(() => ({}));
        throw new I(n.status === 409 ? h.protection_conflict() : e.error === `protection_bypass_user` ? h.protection_bypass_invalid() : n.status === 400 ? h.protection_invalid() : h.protection_failed(), n.status)
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

function rl(e) {
  return class extends e {
    validWaybackInput(e) {
      let t = Number.isFinite(e.timestamp) && Number.isInteger(e.timestamp) && e.timestamp >= 0 && e.timestamp <= this.getEstimatedServerNowMs(),
        n = Number.isFinite(e.season) && Number.isInteger(e.season) && e.season >= 0 && e.season < sc.length,
        r = Number.isFinite(e.limit) && Number.isInteger(e.limit) && e.limit > 0 && e.limit <= fc.tools.wayback.limit,
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
      if (i.status === P.FORBIDDEN) throw Error(`Access denied`);
      if (i.status !== P.OK) throw Error(`Failed to fetch wayback events`);
      return i.json()
    }
  }
}
var B = new class extends nl(ic(ac(Tc(Ec(Dc(Oc(Ac(Pc(Fc(Gc(Kc(Yc(Qc(rl(nc))))))))))))))) {}(ee);
typeof window < `u` && l(() => {
  let e = B.online;
  u(() => {
    let t = B.online;
    t && !e && window.dispatchEvent(new CustomEvent(`wplace:online`)), e = t
  })
});
var il = `data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAEAAAHPAB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn6pqampqampqampqampqampqampqampqamp29vb29vb29vb29vb29vb29vb29vb29vb2/////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJANgAAAAAAAABzxmm4psAAAAAAD/+8DEAAAF7A1FtDAAIzil6D87kgAAAktuqNu7gOcCAAgEATB8HzcHwfB8+DgIROD4ABAEAQOeCH/iAMXLB9//BB3Lg+AAIgJwBCSoyQ0QES1dNwAYhicYDAiarL8aXE4ZXwYe9BkCgLS/Dg4MKQDMkgCjAiAxujyCQPmFYGBApKtkawq2qi9GqTYgLTpFiGdI9O1D5NmvVykb4Q0iC3QOU5rUBLCQ9IoJWFutwdm2v5UmUWmoy2K9QxuXw5RxuOwA2j2ytp2dZrWp2A2/kMupbmC5HKc2et0mbjSyeld35/luxXs97SW4/JJiln38v54TdWITN+nq3a1Pq93WW/3/vNLLf/////K6sDGP////6PvWxQBFoFJABHMZRCBoQGHo/GW6NG17vGW1Zm25xgoZkkHEXiCgHb9v4bi8evlnFw5BStnezI76WTtDaVvOnLL8s9+1t95y7trVqdf0zfXXtpb2dzNrj94XquvZ0M/NLX6l+vktgwC4jICYwfNAuho0IiQuj////9r102AEMKOmGkMYagJIsBaYDIChgOgJiENow+wojIdUMMSQEYSBUTMZQb0o8Sk0SAjR1t5HOrfQNex7cq0ENSD4pyGX7X0xZTZxIYcKtF3mZptVyMvMJudNbJV6UKXY/pfr32nNn0c5rcEZq6nJYnCORDbENctTk5KWZdS63RUTWFzZVbMV3mt6vHJyziusGx5zczaCWWIN////qcOYSSNcFwyUIAAjtY6tsg5hoaQgzCTEAExUCDBozfYO8qSY3T3MLBgMXFAyoIjSiUtF/0DIhCIBgG52VxKVSh3n1s08dh16HvYXJ8JdlBMxTY839i3jR8vtSlsKfeK0NnC/nM0tLW7FK8/Tyq3KYLswxTDQEYZQZBHdQsioRGajdWcNkfpNOahWTpUJEDyc9LCQ0gcfR2T8/////////2zGWVnTPOpjElOJxIKDcdxGcttHMdDk5//7cMTkAA8Uz0Nd1gAigaJm6eyxPIZMDGR0PEgIGrR49MVAZAmYoKJjqJJImBhKP02+o9Jznif5eVT2eHC0ysbdDWHcRBDdQtNsGHz5fw8l282p0U6XSlewoyfTz751qsNZZnm32XJ+unFUNjmoX7ZOpHcZdMd7QbwNu3WpMQZplTGVCmaoMR34247bm1mKtcK2aK+iQ4ivzjUezP///5geOSUMiJ4hUgCgC0K1WiCQN8vbLG0AQADBIlTNsRCYEzAEsjEodxELxqxP5Q/JrC1wBDIwZKExnLAxQW8x7DEIOswwBYw/DkUH4DcJwDDAHaJgbsOBr7QGlBha6NwBiCDcgQQAxYAIUQGBKBYuBJEAcWJEnQDE4pIly4MoYoqAEDCUAPQRAxqkAJ5GoBgyB4RikbLIcbhtIX7/+4DE6YAUZaM7rZheonoiZ3a28ASIsGAgt7D+AWIjkDSGWD0hfqSddyAgLAQ5QaQn8QDHWOoB4AMjh6g6BZYagtVSTqMjpBSeF6RccsrkVJwiZEC0VjA1cjv+xgbI/0TEwQN0GdBn///9q1N/9v//0/VsitLemubODxzX2KfBVKuK49NlTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7YMT0gCAhwyP52gAIAAA/w4AABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==`,
  al = `data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAGAAAMOQBTU1NTU1NTU1NTU1NTU1NTj4+Pj4+Pj4+Pj4+Pj4+Pj4+xsbGxsbGxsbGxsbGxsbGx09PT09PT09PT09PT09PT09Px8fHx8fHx8fHx8fHx8fHx8f////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAUCAAAAAAAADDmA9uH8AAAAAAD/+9DEAAAGFANhtBAAJCSzLP89oJggAALb/tFAHjUCAYWGC58oo4CEuCAIOg4GP5fRBB15d/B8//BD/8oc4P+IDnJ//+D6gBACgHGGMmGGAYEAiEB0ibwcAGYcgfRhlAyGKWf0bXgNSIiUpgJg3mBeAkYsQk5hPADlmkJZgCgFBwUTEzBIAxEJQCATNDF2H2BixBVlEwlzUKFrGHDQ4nWyRnNV/JBAF1sDEsMohzGgb1m1JVzYdFHSaE+z0sgpe0s1EHDlczHIpHJOmtL6zKoYHgNBIYtd3lSww5V7OX45QY8sij7/LrY1GYxP03P1apXhgahit65dpdyplb2v7z7ucliN6mqU12tNv5LZV38sssdxGi1lXqZdmKamks5j8TpqXDHX63h3LH/h2U1L9zvftRHeOH/Py6bpM6lW/25d3y5z//7sqvZz3YGGIslXoQAHIFYzMVUYY9rMbh+/5sjC/CwNSMXUxAQnzJeWbMYkawxUCtzUoDaMEwMM0fxPzAdAuPZcmMwegmDAmBMMA8BgSBpMFkFQwXwCzAzABCQh40ymzMFK6DaBdtCcQIjSzGERXtMBEDDDSpcseAQEhixEHPYg6NDZwXRTdTCUwLOBYhlLW4WFgkbE7CgteafKb7vQa6DYlbENXIfIFCvkjkWkdR7769xUFK9KZHhoFVuiCNprTXJRpaoyJRYiET9UWY8+NuRNZLuP4x5KyHs4xBTdFlhhEcaW2q9IuwaTPsXudBEZLpy1XvE+qaqyIJa61KPTcDJaNWd5uzE24qnctYsd0no78+X/bZMhpjju4rljKjzGl415+7TzVy7T1ZXLu1r16IXZBQ41qe5Yq1p61S7q3pZR1LEssXJ/H696Uf//////z////////////////////9/+////v//1LFjuNy5nnnL7/K9/Dus7VzocWTAKABqutOI9GcW+3l4CgFOmDMDYYN4p4OCIBgV4YBiYAwFpq3hZDALhgJheGG2D6YKoYZg5gwGEgBkYNYFphwg6mA+AMYlIK4CFoVGGIjshzRKgYzTWXYlEJDkBhliAGCiAMloYkENCHeTEfJPsMAiEWY0DBKVRQGMQrCBiAdCsOAiMKbZE//vAxPoALdY1PfnsgE4Yxut/PaRBBkBQHBwyEGzhMscp7WbLObyLCAEzgto46sDc0rgggEBIxDipkdkxXZrtwett4ObmoG7jE2pw9G3QXC9jsuymLPw8+Dp08zJVtJWLBQJG3nrSxgCARXBfwsgoJJakNPUmFAz6ymVOgwSNwc6ag6cDI37WpSsgXpTpiTbQy8CvHbLKIKUt7T7MqL/QzSvVejWbO3fp6S7ZsVZRKOxuxRqQUoWJXZJJY21x/IELxq7kdLLy/1DNU1VlTQoJb1RVFZiXHpf6rq7239u7fuX62GX9y/8uf////2gdh+JHSWIYfycuSiWW99lD+SyX9+URic7/5XMu5frePP1lvGtj/PytbBWbABr+NiRItGCIZg4OGBEwWGCIWpNDACG7UImORRmNIaDwrs7AwMkQArQS6k8HiYGkkirYXFQmGxR5kKSL1vXKtUyFx4T5jhQmF+whaQHE6XGvt7M9GafHhRoOvuW1IDkdKMUZ5eBrb7dJoN6amnbmZvm+3j6HmLq2q4hRrPoisU5yqSPBmgtVsTXziNa2d7hPoVaZjRoi6ngsbErm9SqVxgVVm4VXr2C2q3dv/r/61mta1rW1vujknTRQ19msXVc7hV1Xdc11aLCBo2Cp271Uf/UywAnCzbS32pPGamAsBpzmFioQBhg2Kjh0LkBkdooCME6gqEIgGAhqxojES6MTe1pYSgiSBzhgqHpfxOpePB/UvWXorrSCCQqGUqVy0uO846vZssTbWJ/YawtY0CQrcgrcQnVkStzrDmSplOcGO38lU/mpJn4sku6RNJMm2k1Yqwa8rusvFCZaRw0KBUhgtU8YCxh95G8mz///6377jVbFW1Y56omg1G6bnd/2Vr59WaV2YBZ5qm2v+m3BwJkYsxMtgywTOKITz+fIw9AMyzAYcvSgJRZWuTBZq4azK6gjFhyJxe0dgFKx8IRmfJPW6u08V2P/+5DE4oAaRaNFvdeAAsG0ab22JiTl7NF5XJKE5dsm4vPXm6Vp3rDpGjOBKkSFe3tNFtG6rZ1o6etaX9rzx9mPbrMUFLulWK9+1DLhBufN1vOx3rNmWqypHsrBeU3SiTDox81vMIlVgiXRUa9Dgpk2nfyuz9XPvl6u1c3cpk/A/gWXVdXsKZXBVmZidJ7U7lfGRISlEwhspJOroN5MDRCFozSo4PRp7DISWzyrHd1z3RgefpIcgdcsShprMD4hP+0MVsLDjcJXKys6Ga7Vdl7WiCjaHxrG/heggmYMOVOzOrqmMWnJZWBYrE0hI1GiJhaLOom6fm+kSVXFl6GtlQOAiiaue/E3/uv7FWa7Ti8ANAywuHoKNr8jKF2IrBWEc850vaXja818T1SdxbQ5WtPQYaQOvHXB2UzZMnh3YGV4h11mtblaifpokQYKBhDoBSUA2QTWiIrygwiGBx7J7jE1bVtsyV4wd1WRHHsgERdqbejj9ZEPb1I1syno5xVYyItSRXNgmUjk6XaXP9RFIvQduMPeLKNpCYqKmTSaO1xS2vX/+5DE5wAWWYdL7OGHKtS0aD2WJpwoC6Vo3TPtsVJqLczSJW6nLWe+RU8BTMSrJkUQEdHH9dqd1O0OpFJOKgqiZTKguYTbSEZ99rpKJJtnm3TjjbEvBH4psoYppbHqapsFc3ZS/hfzUowoBRmADiGVLXY2VAdYfAY/sMWgT8XeFZEk1KwhLVgEpQ9PRt0vWswHOP82Jw7zyycVBYBRrQFUJoI5rUTRhNc4RDYMNCsEDQypQrQMKn0GqqG0mR4lFJMphLFERHUXhkUMcg955lJulY9lCeExa4xrbRdNmgCwQrKGs07zWarceJ+Go4kpwak1mqmoCi1NiZk92yHqaq4LpwY8gfZBMxcgV2VVI7klXnve3r7CxdUjIhOIY0jCclaBBxgQeIwRQgNrirEfKZTIFFHkKTagty/jclnF1Wc0TpHMznSpnMAvJECHAqiV61TJyRqvMEjVErnTUTkjVVVXlGwkbGV5bTcrDkiKgZMiVlPh1osSFHo1//+2yyRsV/VkTlkYROLMTROeJZIFMDhIMB3LbLbjSdaNDwEROyQUeLD/+4DE+QAXeZc97L0xaq2z5v2Emn0yAiJIKjB3X////9aSZKVLFkxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7QMTxA9NhPR3sPM5AAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV`,
  ol = `` + new URL(`../assets/notification.CPyrWqU1.mp3`, import.meta.url).href,
  sl = `data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAHAAAPwAA8PDw8PDw8PDw8PDw8PGFhYWFhYWFhYWFhYWFhgICAgICAgICAgICAgICwsLCwsLCwsLCwsLCwsLDJycnJycnJycnJycnJyfn5+fn5+fn5+fn5+fn5//////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAVzAAAAAAAAD8D/1/k8//vUZAAAAiEJ3O0MQAgjgAm9oAABHXFJY/nchID1Dij/MNAArYAAA5FSnt6JERN3AAAAAABK7iAQDE5OYOBj4IHPg+H/qBAHwfB8/wQdh//ygIAgCAIA+D4Pg+DgIAgCH8oCAYB8Hw+0iACZbN8AAAQBAMLBwEAQDEEABKAmD4Py4Y5cP/UGCjuCAIYaAAAAIT0jmCa+4aT6+ToGA4MGKwDmAwJGKpEF1TBMHhQATAEVguChhJnwGAEw71gDGSNACdyFqYBAUaRC+lEBCwcaZpwkaD2T1IMgEoOMqEOCCyI0IdY5dEwg0wSI2Uhc4JVe4Gyk1pQMoCqs37GWBKWkpxEkiUMCNIUIGoxCMp92gxd6n6p/Eikq0BKdTS17TBEZHb3/Lqa7TNamaWgaz7k/QzsA0U1R15DlDuFaVVaCxdZFZydqYEIC2HDrawzjDoOdD0ZhmtTd/mW6Wd1zW6uNW1v9/+Gf7x+U6rSrm6WtLoapaWU1alMPAWAAAAApKbgAWRgWwAAAAfupeEim9ONNabpwYVM5zG36lhpFYjl+7KemmXSu19Tu6u6btpT7A9u219uPXQr6gABukNJycAYKtBQmqAwUgGQeQlJxgkDGFRkZhixw1LgYOuEpczqLMqdfPp5YTxXQYtIOpVawkxE+xC9N5rditCa581g4+Lbsih1lbm0mN43/h47xjf/+cWxD7C2xvTf+auf+f/6brAYY1Xr3EGbV8w2auN////W9f/PxnUGrD0eedxK06pAAyqAQbfgbxKqSfA3YzdbEYsr19rbAfGA4liuR/d6qV54NL6nO6nfLKpqY+QIXtqwATK9Wd+4BoeXROYgEkmWcGAki008yIaeBgMXHNSsJBt7HbZJK5ltspVSVZbzd+xLq+VqD3LXuonjl+X/tg5GjCB5usxCtIwORVYKFn4mmDB3+3s+PKsOQLOLVlgYQI93PE3ayVQuasrQmeRoKRcw4O1KWkurABIi+27zAa1D9mOQdfiMFOXKR2xRCN6Md47P5IquF//u0ZKWABCFI029x4AgwQVqv55wBDrD5TexxCeGFnaj9h6G9jVN+BeP0PQwnjWBkCQb+9fEv066lziNrdvfeLHao1ZYJRCbSOqP5uK++CaQoVJOfutR3/99POi9+dCJxTnPc6iqbV5ACNEBk/vALXqzsMMMaFiIEihHgxokAEF3iq+YtBEDke6FIQe0R7BUMWPXdZrf70u3iFNP+LfwdQdKqDhzpCb9+9WkO50uagqAw8uzmSPi221CHz4uh8CUpFDDepqSKObOoxdkcSuK//e/iFA9A7/93T76t0MAETYpr6sAzhVnLwGFUZBESsCcSoBQafwrZNbARpgdDBGNg3iKEEb5hYpu36btnI6gcVT+12cm+LmO5rJp9d4qr2PHg6jdW7yVUz9LR7X5utqzBVc3tMt9UJVf/6cy7OkI5lvuJiHcwAEIwEfEAAkph7AwsG4IVFChKaylAKEZoAiBSkVFbO6sjcBSOYvtCJZbLcsxNduWoLhEetM7k9dIyjzeXfa8ztUEMl2Hw9AdZmN9kRpXOj7P9T5fn5sjWRdBJ8eUW5IFNwI2ZMKAKhtFX9eACySFagYoAbgSCTCA1Km4oswYOISjakxGmFSpppwEQd5msbk8+dTVmlk0SQJRJTnOutyBoo5U9DO7i8oVLyTaqpq2mIHidH1HW58K1oG18xHWf6d1fxHbN13m2t/+st/6lV4VCIAAAT0cILQdDgGFi8wIlMdDBAWgwNFRowcDMr7lSGHOhkxAauJmRghgBKa+e//ukRO2AA6ZC0PsvS3hnRsofY0xDTJy3OfWWACmnIWh+tLAEhhEYaUG1IgUBmwgAkabEGA6RvAphjRlDQKUHsUFQHB5k5Y/oNuvccWKRceCKkkR4UJN4NK1Wwo2udxBUELBFD3ejruGrFg4KZEW0KSJ2mKLMgVIpaHBHbjLB2toryxciKCNawighu0tFGIPof+ihl+5hsm37umlDsnaY/k07D8f//8Zjf3P+9fvUlLOJ9u/HGbuW1MwwqMUVD/0P/RfJ/k1PfvXopFKUBDJty5PZeeG37aQ5H0f///////23nn/M+Z9pOeigpNFOLq4cBWlyW7L9X6JOC0BmAAAEBFXVkEAAAABA6MtO4nKhgYQGG20YCHBhJbKPGDxIfZExaU1uLlTO5ThieGJqmGUEfDpnTtCFqxJyiFiYqRmzxP4RQCmATguFcdpGl5G7Vh/QTwi8hpcDcjTGaIiX61/LJYLctfzv////+WdnMRSAAAAFAANvK53KFDzOsBp6ZMEMGDLCjTnBhGOBitUHCgNBUpM/SGm5lCBh0IVJGBcBqYXQoY4AUYCwaBgBAEGIkhYZpwZgXACMDEBozUBJTBeBtGgCjYjM7MTAHIwkwGgMAOJAClsVyKhZWDAVzAcAXMAw//vUZPYACBtd0e5vSIByZ6qfzkWgJsFbR7mvAElDEqo/NtBAAQwCgAVlKxNDVKAQB08bzDlzCwDz/NIUyhl1VtrwYMDQQDAkAQzbCnzIC5QUAPddW0IA9ecwFgFTAVA0MDMDAwCQClkhQAUwAADVlFUAQAAFCEAKaj8EOpNGAQAwRAhq0NlRQEgDV3T0qjSwz6vK0djUfk9nDC06JIABJqCHOfQNOEAAUbcV0mHMShlrL85Q6yi5SxCluRaIRW8VgBXvvxa79ym92YKjThdoXJmGvNeov+/9+JXb3012m/sugknyBl6S3kAAAAQLSoOigAAACgt4WpTEG6DoMYKCBiVdaIDwRpJmgCCBZdAOB52CdnRYsjCdiMFgXAxZXZBTXU6nTL5gkimlZdWt6n0VM8zD/Oa17oqYhQAAagIuCNQpUUAAaESxEIRQ4RhkTC6rEhAFR6Z+51qB1ymQ5wfsFzwj4BoLgctKQGLxYBhkKA2SIKjwM4QrsXVj6HOJ42IeWiZseNS6XXNVJKRUkglnReFRFkTF3SPgPBJFTx50kv//Wigt9Jbf5w3dakyHEeWn//6jlN1GJqo77ZFckzZGbZbZjEACzH4A7nVvb/ulFnOd5KYHHq47xxqeG0D5YdDpJ03xKEBX57zAoeuzP9/03c1LsggAmY8fAjFQqJhBC0YwoDfx9QqEGFBN9HthjfMqbPFomktTT7L2YpbCjmfgMBgO+sBPm10SE2yaRk6JyJeKhohGRCoadWwl/9xWpIkPTWoxJYEFjRc1eVSaUZrdWkbHiwZlA2SWYqUip62/zIxMUDU6fFImhj/2/2tMjYOyXS24eZlZMA0kHyAq5a/fJqrcl72AJw2LL2p2br97LI+RAtip1An6nVDT3sgz2ys9rpb+rKM388QWhUNUxA2l9n3dKsrM5XUQAzxf0BC4RDbwhEHKSARSR0yQ4NsxlDKVNKuTbRETQZIwJMCQ0DAORRxBxDyyRIvnmZGVjW6RiyJizFNBJZoltuhQMzZmc6ik//uUZOWABE5J1P9qoAowYaqv7CwBEF0nTe2mVOEBkqo9h4mkUyKiMSJGCCM0c4VUn87dna5mpFJaktq93qSQI4tOTZqbjet1HTVWrmAAJovoANlGBOp4hEQOXIXqgxdqga5kJzCYopdp/ngsP6/0OO8HSnp2l8s597L/T/O4buzVn+XMcu4541dZ1r/87/dZfjT4W8cO51eymcR1eLK134pPzk7Td1rHu+dsfvvauuZa7rm/3/7/+aywgql5T0tvbPRvINJBQBRrO/EoqFAYABlIcTGxkouYCEGURJ30uBhIwYPM0HDGxYgZDIj8rAleGVASgINfDy+wLAQZGjCgwFglM1WeNUwfOsSuKoPRkKhMq9XhtBLJjMZpkQHhgMBCv6ZpIGABkJkiWRgWHxiyIBWAbFExWzRIHB2BABBwFt0CADIQRQyKgCmCQLiABaaDL1xRImAyClyRJ1JIkigqjtKV9AUAEJ1P//d/1j23LjT8RZ/JG1mrGcKuH///9BQz//vURNSAA4s9Uv1igAh4B7o/rOQBIIVpOfm+kEMbnia/N8AIr+TMbjMbjTh02Vret0tX//////5ReuWe3rt+b+zW/LLLtXeP////////4d1+H5/3+65zf1hE0Skj3//kENa7/8OkQmEsh3Z2SACQCGR/MnNQmAAADjUY2NAMiMgQJgEmM9KjEwoEGBjo2BAsGHpgIMRDxhQgYGCoyGLM5yE60YCmxOsClw2lRTEUSBz3UgxcFLZsbNjSZLAgvM0H9BuIp2gYEI1I8GOAGYADYYHBoBMygbrqNmU0ZCtduJhUTCEDGDwEMAmNZyX6VuBbx/3dedqgwAjBAFZCmKqqqEAhBAUy371+lv36Wmu0+EvpKOz+8d83//jq5VvXLPb1Pal+X5ZZdq4nvd4C1//9VUxBTUUzLjEwMFVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sUZOGP8AAAf4cAAAgAAA/w4AABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV`,
  cl = `data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAADAAAHVgCKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioru7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7///////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAUQAAAAAAAAB1ZvGw9zAAAAAAD/+9DEAAAGgANNtBAAJL5DKPc9kEkIAKVy6ZvTvjNiAEAQA4fwcOKBAED85LicHw/BAEHfg+D4f/B8Hwf/Ococ/lz//4P//lwfAAAQCzgEApUAchBICAMDwGwwpg3jDHA2MWkaAxCQqDAjBQMMoFYwVgLDCrX1NfwPQxajfTO/VkEYD4sAuYOwYBgPgBGmQOAYIgDoKER8AN4KNYgISnpehHt0X2WsksoO27zM1duB3IgimTpnXNwTefFr9ly4HYK1lgtE8a3uVY23SCpDEpz4xL3DZVTV8ZygdeB4X+GuX6sTh9sVNAzuwVTIUztBdnLL60VnPsrt8f+fw/LCUy2caLDNmzuzGatmcu97UsVIYilyxqUcpaSPSW63KzZucjnakuzw+zlc5nD7yfL5zPv59z7/dQ9EolEu9pf5V1Y1+7Eayl1qkt8rXLGdi5nz//////////////////9/r9dw1l39/+P73/7////rWr1PdwxvJCIEbNPJ1QmAABaCxKJEmLpurTGDFSAYMB0FQxfggyqAeYtYSphnAwmFmBIYTATyaZhFiAGFIEqY0hJ5wAIxmFKCgaFaihh9A1GSlMSJYunOGWWB6pdsMvN5kqIig49MYApkLhJxyjmgkA1gIGDp1/CEIOLNkht0Ag8+NWKWQOW+aivhGVsj00TCW4CiJWJKkYRECshrDX0vHCHosi1cqERxakomvtDHA2TIAyjt52yUsMz8EMpZDLYdbq3V0XSRtfmhWkyaFM+YpBSrxQBAx03pQHPND6exc0OKEQq3lvKqM9hSCVHlv0yVdJhNZf+1Nx2GYZbqxt2qLJ9GC00ETr2vY+tmMTrOqWWTEkkUeh27PYQFIWX0rcGmtAswPXlLzWp6IVZe/ssk8FZ02r16Xdz3hTwPHJu3DEos63dr2927GPfz3+sM+93/63n3u//D///3nv9/rX71v97/PHuGWv7z/1Uo+X7tNTZ91XyoaWnob1bs9Yp86oQUCZIAAwEB7VQIuyrSQANCQ2GhZMQQ4MOCHMFxAMRwkMAxlMHzDM9QQMAxabsYLC+aWdScYCCZCoabxBOZSGWZcE2FB0xAuPp4zhWswUOJAsxAQMFDR4qN//vAxOUALmI5MbnsgE1xwGT3O7ABhADArk1MFMSD0qUALTCIVTNZ6aumhCoZWXmZixYEi2Kiy35BH02oFLPGCg7rCgQDQYw4ZYE5yE1rTPX1YekYKAYsD1hgHKA0ZBWZkQVFFhX2gNE3fFvt411kDPlAE5BAAMrWnKUzkdUQ4GcKFNJrQ1beZZDA2TyBhzsLNlCcxIeBUAMBCRkBamhsy15MFpJFZV1ovs/V/u78Uh+bo5dMT3L0lpqC3Wi9mVXpPlvn5TNa1Vyq409e/b1XvY/9bHmF3O1dwt2u5ZY444Y8q2a2Ou5Zd/GzvHV7tu/cx5fzv587Xua5ewz1n3+91X/LPesO2M9Zb7c5n3eOHcb+5KDXnf0F87HySsMMMAEIAAAwaBkBfgCqAAS3goeAwxXwM3QBieI+IEf/E3Ckh6ID/mLENJk99YSErPrb/4uVDX/7Vo/+KKI1///VTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+yDE4AAIHGcJGUmAAAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV`,
  ll = `data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAEAAAI3QBycnJycnJycnJycnJycnJycnJycnJycnK5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm59PT09PT09PT09PT09PT09PT09PT09PT09P////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAXYAAAAAAAACN2ptdwzAAAAAAD/+9DEAAAJjBddVDAAJStFZ/c3oAHsAAAv9gAXd3P0QDAw+CAIAmHxACAYiAEAxBAEAQ4gBAEz+kEInB/+CBz/xOD7ygPh/Lg++oHz+CYPwQcCAIAhEgIAhLggc/6jmUBBwYDgAAgBIGrmoUBoJAAQCBUMBBWGDoGBmKGKhhhpMhMQGoBioGGvvxvwgy04N6IQUmdDBQDvnjHlG+JAoUAmwMmCTHbmuEKgBQW7jclMhQWZAcv9dIGSmGMsSgRd0VUBU1RmMOAWHeKMtGa4y94rTlMBmpHGIAbuji3JwZDMx2lj0pqs4YY9lA/kh/uUft5ZY5W6WbltFbn8bcH2pjLr1JUodk1lbljO9+ssorGatFjfrSqo50VlkalfGlLqgJhzXoIMCCEJEtEijzLX4YVJetWGbmGNzC7fkcE42LSWqwyGKoXZay/sdorjcmJLBqBM6m7tfP+zNNKrdNKZbEYzhqnv38ufv8M9z9xNtIp31baCO0VLjciMtkjAWSsiUxfJlTcXtmoBfnW/+dpcJVjz///3rX4awyx/W////eWeX7+X3L16V28+W8iO0CqjViUAAANAi1nT82Ac3hwMDCwHAwZAaUAJAVGkwYXCoXBBgIMkAEDh+BQuYhBJgypmiLAYQc4R9TGAEfDUSzPBzAJ2YhBAMBr3BQnSpR4wYAIPAlpAoGYMC66Gj4sFlpd+Lw03N/5+rH33lUXYDLo/l2ETkCO23jd4fL4QTGbmVagdqkz7P3aapEHYdxU6K7J3K7g0oYAhwCXa5vCbd2kQogO07kOWH7wscpolKal/LszZr2aaez336enl7uV4Mh6VzW9dq0uVZ9pTLZTWl3/vfLmFFR43/qWKSXxu3LPzzr2n0pO/zGrLaufc61Ncq7qcztX8KXVX6meWW+fhzuGFPT53uflhhbz/eee6/f/8f+mmZSwFpT/Qa0pYyXzou7LH1cl3cdy3GVWv/+f+/+pyzHdSP1qiUiHMAAUekYSBMSDYxOMEjjCoBMRgUVAJhkIKblA/AIFT3AAPMCBExIJTP0XNQDEyENQEBQMcAtCC54ZQrCeRmRwkVGOTJkmBRidHNLhIDMiukUTNSMNCRKypesdImZGp//uwxMsAJrobW/nNAkvDvKe/uTAEbTSIwhySikgs6zkyaLPF4jRmS4RxeNzhkSSklqMj58wMi6RUujKkFOPPlw2IuQ0mzUiZiXDUulA2L6JgXbGqBus8tFBNF1LNjqzV0kjqJdNi8RY1POTRkTxsaIoWU6F0XdI2aia1qROosjSuamSSWa1OpKgZmqR0wfdaS29G3oo0aqkmajXpVG0MCU6jVv1cleeYfgQkb/+N60xMwRCUEZowyxDJigoNEAgZCI+NxMYB9nQJGDIZYqxxJAaQyyCxdGJxQ+XEqMMlJ28V0pgPCgvpUmro0i1ovnb0Y/uxLUqpctk8XMK2u29vW0W1vXkfbS02mNmtWHUq3+iswmo0kf2C3Qw58N7rLzC/zlkvWXOz9bM86er1sEK5i5T6zrdXVPwR13mbd1qd0E1ZrHWk0tfa3il6ftfna9lJnkJllh4OErkLOEADkKoRmSkSwEhAAAAGmU2ZtKoICpiIN00MmJD2ZfIg4EjBw/EYCRuApBOmSAy8WQwiM2aScPORlMJDAFEgq+s4ZkDoMBhhEMgEFN2Lld/ygAlULhcBDwCZumkj8MAOrjqqUBMSAbgCQQLxsCYlFmBNOx5v/BAMBgIRjDAUPARAND0yuVmr60X///6n4/aUCSBDg+xCAnZkzStVXq////8wYAEdygAlxlFE7WyS1uUSkUA0190X2i0R//////lNeNtBcCtJcnGrRWmzvVaWpKZbAUMzv///////JfjVeXRqHI088fxjl1ntWVVddmoah6al13K7DNbv/////////8vwl1uble3za5edmHotWgqKW2z0dLMy+Jb/+6DE5gAWNZNF9aYALOJBI385wADsSvlLqrZuVeSqI0j/Vo1amo1biU9EZValP48qy24qTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xDE1gPAAAGkHAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==`,
  ul = `data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAE/gDLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//////////////////////////////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAOoAAAAAAAABP6u4u+sAAAAAAD/+9DEAAAGhC1UdGMAJM1C6nc34FFSaWP+7vYBAAEOAAiHPJp6YAwtNgQl3qDHKBgo4Th/wf/Lh/8H35R3/4IAg7//gh/+UOcPgABgAAAB0YnM2TIZDUkAGYOFBdqBQkadAmEAgiDTKD1BYUFTGA4LixoJUcUsGkDJrfwYKEmBDRg+gZmBSBeYUQyJj2B9mAOAkYXINwOA3cdvzIrBtMDwFYOAEMZhFcyRwWTDiAGWo/LzSFp7vtDTSQ3bHKocXbPR6kg2U07Vs4KcJaDIIGTHZxDsSjEMyhPing6w8PSYAlwHfdtbFq3lAc1qmqzPxFFV1cbUkrP9GG/cbKIyivlRWq1mzvHDWNad73eE7q3JYPnIerXqKJTtzV3DmUzLZZFM7sv1z9U8czh5wVG4G3nru8cfyy+rhT5TtHTb7jzd3eWO6Wmy3R3e6/DW9b5l/b9e5///87///eY////9///////Df7/8vx/Xf///9f///52O6s3rZINILq82aqo6x1TAYDoYGInIIhASA++E8wYSIkIBd0NdJXDHQL2vFAR4YOsgwGFK6QQiPQDhcITBl4MWgDBEAosgZUgoDGkAwGFAMCCEDEQVAwaOgMChwEQXAwUBg5MTgJcAwARZxBj4Ng0LAigBGYdKKwKBIeIQDHCyhWxMlUmTx0xUCgJFBjnkGFkpk0ZF4gSLLRZJKGARbBQAsZDCCFAhxianDEuspVXRkOUWCGGCYsxZiXa0Ukl/8XOS4vxxjrDJR7RLyeiisxJn//y+11pJqNycOJkgiapIoo0UdS0dL//sUjzHxMgBgMUtVdLRYGrKTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tgxOMAHVGjN7magIAAADSDgAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq`,
  dl = El(),
  V, fl, H, pl = !1,
  ml, hl;

function gl() {
  if (typeof AudioContext > `u`) return () => {};
  let e = () => {
      try {
        V ?? (V = new AudioContext);
        let e = V;
        if (e.state !== `running` && e.resume().catch(() => {}), !fl) {
          let t = new AbortController;
          hl = t;
          let n = setTimeout(() => t.abort(), 1e4);
          fl = fetch(sl, {
            signal: t.signal
          }).then(async t => {
            if (!t.ok) throw Error(`Notification audio unavailable`);
            return e.decodeAudioData(await t.arrayBuffer())
          }).catch(() => {
            V === e && (fl = void 0)
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
    hl == null || hl.abort(), H == null || H.stop(), H = void 0, ml = void 0, V == null || V.close().catch(() => {}), V = void 0, fl = void 0
  }
}

function _l() {
  (M.muted || m.sounds.playerNotification === 0) && (H == null || H.stop())
}
async function vl() {
  if (M.muted || m.sounds.playerNotification === 0) return;
  let e = V;
  if ((e == null ? void 0 : e.state) === `running` && fl) {
    if (H || pl) return;
    pl = !0;
    let t;
    try {
      let n = await Promise.race([fl, new Promise(e => {
        t = setTimeout(() => e(void 0), 1e3)
      })]);
      if (!n || M.muted || m.sounds.playerNotification === 0 || V !== e || e.state !== `running`) return;
      let r = e.createBufferSource(),
        i = e.createGain();
      i.gain.value = dl.playerNotification.volume, r.buffer = n, r.connect(i).connect(e.destination), r.onended = () => {
        r.disconnect(), i.disconnect(), H === r && (H = void 0, ml = void 0)
      }, r.start(), H = r, ml = i
    } catch {} finally {
      clearTimeout(t), pl = !1
    }
    return
  }
  let t = dl.playerNotification;
  if (t.paused) try {
    t.currentTime = 0, await t.play()
  } catch {}
}
var yl, bl = new ie;
async function xl() {
  yl ?? (yl = new AudioContext);
  let e = yl;
  return e.state !== `running` && await Promise.race([e.resume().catch(() => {}), new Promise(e => setTimeout(e, 150))]), e.state === `running` ? e : void 0
}

function Sl() {
  xl()
}

function Cl(e, t, n, r = !1) {
  let i = new GainNode(e, {
    gain: t * m.sounds[n] / 50
  });
  bl.set(i, {
    id: n,
    base: t
  }), r && Al.add(i);
  let a = new BiquadFilterNode(e, {
    type: `lowpass`,
    frequency: 5e3
  });
  return i.connect(a).connect(e.destination), setTimeout(() => {
    bl.delete(i), Al.delete(i), i.disconnect(), a.disconnect()
  }, 1500), i
}

function U(e, t, n, r, i, a, o) {
  let s = new OscillatorNode(e, {
    type: `triangle`,
    frequency: n
  });
  o && (s.frequency.setValueAtTime(n, r), s.frequency.exponentialRampToValueAtTime(o, r + i));
  let c = new GainNode(e);
  c.gain.setValueAtTime(0, r), c.gain.linearRampToValueAtTime(a, r + .008), c.gain.exponentialRampToValueAtTime(.001, r + i), s.connect(c).connect(t), s.start(r), s.stop(r + i + .05)
}
async function wl(e) {
  if (M.muted) return !0;
  let t = await xl();
  if (!t || e !== void 0 && e !== W) return !1;
  if (M.muted || m.sounds.purchaseSuccess === 0) return !0;
  let n = Cl(t, .25, `purchaseSuccess`, e !== void 0),
    r = t.currentTime + .03;
  return U(t, n, 523.25, r, .12, .5), U(t, n, 659.25, r + .085, .12, .55), U(t, n, 783.99, r + .17, .12, .6), U(t, n, 1046.5, r + .255, .55, .7), U(t, n, 1318.51, r + .255, .55, .25), U(t, n, 2093, r + .33, .4, .1), !0
}
async function Tl(e) {
  if (M.muted) return !0;
  let t = await xl();
  if (!t || e !== void 0 && e !== W) return !1;
  if (M.muted || m.sounds.purchaseFail === 0) return !0;
  let n = Cl(t, .22, `purchaseFail`, e !== void 0),
    r = t.currentTime + .03;
  return U(t, n, 329.63, r, .16, .55), U(t, n, 261.63, r + .15, .5, .6, 233.08), !0
}

function El() {
  let e = {
    plop: new Audio(cl),
    smallPlop: new Audio(ul),
    bigPlop: new Audio(il),
    smallDropplet: new Audio(ll),
    droppletAndPlop: new Audio(al),
    notification1: new Audio(ol),
    playerNotification: new Audio(sl)
  };
  for (let [t, n] of Object.entries(e)) n.preload = `auto`, n.volume = .3 * m.sounds[t] / 50;
  return e
}

function Dl() {
  M.muted && jl(), Ol && kl && (Ol.volume = .3 * m.sounds[kl] / 50);
  for (let [e, t] of Object.entries(dl)) t.volume = .3 * m.sounds[e] / 50;
  ml && (ml.gain.value = dl.playerNotification.volume);
  for (let [e, {
      id: t,
      base: n
    }] of bl) e.gain.value = M.muted ? 0 : n * m.sounds[t] / 50;
  _l()
}
var Ol, kl, Al = new re,
  W = 0;

function jl() {
  W++, Ol == null || Ol.pause(), Ol = void 0, kl = void 0;
  for (let e of Al) e.disconnect(), bl.delete(e);
  Al.clear()
}
async function Ml(e) {
  jl();
  let t = W;
  if (M.muted || m.sounds[e] === 0) return !1;
  try {
    if (e === `purchaseSuccess` || e === `purchaseFail`) {
      let n = await (e === `purchaseSuccess` ? wl(t) : Tl(t));
      return t === W && n
    }
    let n = new Audio(dl[e].src);
    n.volume = .3 * m.sounds[e] / 50, Ol = n, kl = e;
    let r;
    try {
      return await Promise.race([n.play(), new Promise((e, t) => {
        r = setTimeout(() => t(Error(`Sound preview timed out`)), 5e3)
      })]), t === W
    } finally {
      clearTimeout(r)
    }
  } catch {
    return t === W && jl(), !1
  }
}
var Nl = new WeakMap,
  Pl = new WeakMap,
  Fl = new WeakMap,
  Il = new WeakMap,
  Ll = new WeakMap,
  Rl = new class {
    get count() {
      return c(n(Nl, this))
    }
    set count(e) {
      i(n(Nl, this), e, !0)
    }
    get items() {
      return c(n(Pl, this))
    }
    set items(e) {
      i(n(Pl, this), e, !0)
    }
    get nextCursor() {
      return c(n(Fl, this))
    }
    set nextCursor(e) {
      i(n(Fl, this), e, !0)
    }
    get loading() {
      return c(n(Il, this))
    }
    set loading(e) {
      i(n(Il, this), e, !0)
    }
    get markingAll() {
      return c(n(Ll, this))
    }
    set markingAll(e) {
      i(n(Ll, this), e, !0)
    }
    constructor(t) {
      s(this, `apiClient`, void 0), e(this, Nl, r()), e(this, Pl, r()), e(this, Fl, r()), e(this, Il, r(!1)), e(this, Ll, r(!1)), s(this, `open`, !1), s(this, `controller`, void 0), s(this, `running`, !1), s(this, `pending`, !1), s(this, `append`, !1), s(this, `markAll`, !1), s(this, `retry`, void 0), s(this, `onError`, void 0), s(this, `errorReported`, !1), s(this, `fullRefresh`, !0), s(this, `changedIDs`, new re), s(this, `failures`, 0), this.apiClient = t
    }
    get client() {
      return this.apiClient ?? B
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
            this.refresh(r), i && navigator.onLine && vl()
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
              let r = new ie(o.map(e => [e.id, e]));
              for (let e of i) r.delete(e);
              for (let t of e.notifications)(c === void 0 || n === void 0 || t.id >= n) && r.set(t.id, t);
              o = [...r.values()].sort((e, t) => t.id - e.id)
            }
            if (a && c !== void 0) {
              let e = await this.client.getNotificationPage(c, t);
              if (t.aborted) return;
              let n = new ie(o.map(e => [e.id, e]));
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

function zl(e, t) {
  if (!(e != null && e.length)) return !1;
  for (let n of e)
    if (n === t) return !0;
  return !1
}

function Bl(e, t) {
  for (let n of t)
    if (zl(e, n)) return !0;
  return !1
}

function Vl(e) {
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
  return n
}

function Hl(e) {
  if (typeof Buffer < `u`) return Buffer.from(e).toString(`base64`);
  let t = ``;
  for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
  return btoa(t)
}
var Ul = class {
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

function Wl(e) {
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

function Gl(e) {
  if (typeof FileReader > `u`) {
    let t = e.type || `application/octet-stream`;
    return e.arrayBuffer().then(e => `data:${t};base64,${Hl(new Uint8Array(e))}`)
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

function Kl(e) {
  if (!e.startsWith(`data:`)) throw Error(`Could not parse data URL`);
  let t = e.indexOf(`,`);
  if (t === -1) throw Error(`Could not parse data URL`);
  let n = e.slice(5, t),
    r = e.slice(t + 1),
    i = n.indexOf(`;base64`),
    a = (i === -1 ? n : n.slice(0, i)) || `text/plain`;
  if (i !== -1) {
    let e = Vl(r),
      t = new Uint8Array(e.byteLength);
    return t.set(e), new Blob([t], {
      type: a
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: a
  })
}

function ql(...e) {
  return e.filter(Boolean).join(` `)
}
var Jl = typeof document < `u`,
  Yl = 0,
  Xl = new WeakMap,
  Zl = new WeakMap,
  Ql = new WeakMap,
  $l = class {
    constructor() {
      e(this, Xl, r(a([]))), e(this, Zl, r(a([]))), e(this, Ql, e => {
        let t = this.toasts.findIndex(t => t.id === e);
        return t === -1 ? null : t
      }), s(this, `addToast`, e => {
        Jl && this.toasts.unshift(e)
      }), s(this, `updateToast`, ({
        id: e,
        data: t,
        type: n,
        message: r
      }) => {
        let i = this.toasts.findIndex(t => t.id === e),
          a = this.toasts[i];
        this.toasts[i] = {
          ...a,
          ...t,
          id: e,
          title: r,
          type: n,
          updated: !0
        }
      }), s(this, `create`, e => {
        var t;
        let {
          message: n,
          ...r
        } = e, i = typeof(e == null ? void 0 : e.id) == `number` || e.id && ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Yl++, a = e.dismissable === void 0 || e.dismissable, s = e.type === void 0 ? `default` : e.type;
        return o(() => {
          this.toasts.find(e => e.id === i) ? this.updateToast({
            id: i,
            data: e,
            type: s,
            message: n,
            dismissable: a
          }) : this.addToast({
            ...r,
            id: i,
            title: n,
            dismissable: a,
            type: s
          })
        }), i
      }), s(this, `dismiss`, e => (o(() => {
        if (e === void 0) {
          this.toasts = this.toasts.map(e => ({
            ...e,
            dismiss: !0
          }));
          return
        }
        let t = this.toasts.findIndex(t => t.id === e);
        this.toasts[t] && (this.toasts[t] = {
          ...this.toasts[t],
          dismiss: !0
        })
      }), e)), s(this, `remove`, e => {
        if (e === void 0) {
          this.toasts = [];
          return
        }
        let t = n(Ql, this).call(this, e);
        if (t !== null) return this.toasts.splice(t, 1), e
      }), s(this, `message`, (e, t) => this.create({
        ...t,
        type: `default`,
        message: e
      })), s(this, `error`, (e, t) => this.create({
        ...t,
        type: `error`,
        message: e
      })), s(this, `success`, (e, t) => this.create({
        ...t,
        type: `success`,
        message: e
      })), s(this, `info`, (e, t) => this.create({
        ...t,
        type: `info`,
        message: e
      })), s(this, `warning`, (e, t) => this.create({
        ...t,
        type: `warning`,
        message: e
      })), s(this, `loading`, (e, t) => this.create({
        ...t,
        type: `loading`,
        message: e
      })), s(this, `promise`, (e, t) => {
        if (!t) return;
        let n;
        t.loading !== void 0 && (n = this.create({
          ...t,
          promise: e,
          type: `loading`,
          message: typeof t.loading == `string` ? t.loading : t.loading()
        }));
        let r = e instanceof Promise ? e : e(),
          i = n !== void 0;
        return r.then(e => {
          if (typeof e == `object` && e && `ok` in e && typeof e.ok == `boolean` && !e.ok) {
            i = !1;
            let t = eu(e);
            this.create({
              id: n,
              type: `error`,
              message: t
            })
          } else if (t.success !== void 0) {
            i = !1;
            let r = typeof t.success == `function` ? t.success(e) : t.success;
            this.create({
              id: n,
              type: `success`,
              message: r
            })
          }
        }).catch(e => {
          if (t.error !== void 0) {
            i = !1;
            let r = typeof t.error == `function` ? t.error(e) : t.error;
            this.create({
              id: n,
              type: `error`,
              message: r
            })
          }
        }).finally(() => {
          var e;
          i && (this.dismiss(n), n = void 0), (e = t.finally) == null || e.call(t)
        }), n
      }), s(this, `custom`, (e, t) => {
        let n = (t == null ? void 0 : t.id) || Yl++;
        return this.create({
          component: e,
          id: n,
          ...t
        }), n
      }), s(this, `removeHeight`, e => {
        this.heights = this.heights.filter(t => t.toastId !== e)
      }), s(this, `setHeight`, e => {
        let t = n(Ql, this).call(this, e.toastId);
        if (t === null) {
          this.heights.push(e);
          return
        }
        this.heights[t] = e
      }), s(this, `reset`, () => {
        this.toasts = [], this.heights = []
      })
    }
    get toasts() {
      return c(n(Xl, this))
    }
    set toasts(e) {
      i(n(Xl, this), e, !0)
    }
    get heights() {
      return c(n(Zl, this))
    }
    set heights(e) {
      i(n(Zl, this), e, !0)
    }
  };

function eu(e) {
  return e && typeof e == `object` && `status` in e ? `HTTP error! Status: ${e.status}` : `Error! ${e}`
}
var G = new $l;

function tu(e, t) {
  return G.create({
    message: e,
    ...t
  })
}
var nu = new WeakMap,
  ru = class {
    constructor() {
      e(this, nu, t(() => G.toasts.filter(e => !e.dismiss)))
    }
    get toasts() {
      return c(n(nu, this))
    }
  },
  iu = Object.assign(tu, {
    success: G.success,
    info: G.info,
    warning: G.warning,
    error: G.error,
    custom: G.custom,
    message: G.message,
    promise: G.promise,
    dismiss: G.dismiss,
    loading: G.loading,
    getActiveToasts: () => G.toasts.filter(e => !e.dismiss)
  }),
  au = new WeakMap,
  ou = new WeakMap,
  su = new WeakMap,
  cu = new WeakMap,
  lu = new WeakMap,
  uu = new WeakMap,
  du = new WeakMap,
  fu = new WeakMap,
  K = new class {
    get data() {
      return c(n(au, this))
    }
    set data(e) {
      i(n(au, this), e, !0)
    }
    get loading() {
      return c(n(ou, this))
    }
    set loading(e) {
      i(n(ou, this), e, !0)
    }
    get notificationCount() {
      return c(n(su, this))
    }
    set notificationCount(e) {
      i(n(su, this), e)
    }
    get lastFetch() {
      return c(n(cu, this))
    }
    set lastFetch(e) {
      i(n(cu, this), e)
    }
    get charges() {
      return c(n(lu, this))
    }
    set charges(e) {
      i(n(lu, this), e)
    }
    get cooldown() {
      return c(n(uu, this))
    }
    set cooldown(e) {
      i(n(uu, this), e)
    }
    get flagsBitmap() {
      return c(n(du, this))
    }
    set flagsBitmap(e) {
      i(n(du, this), e)
    }
    get timeoutUntil() {
      return c(n(fu, this))
    }
    set timeoutUntil(e) {
      i(n(fu, this), e)
    }
    constructor() {
      s(this, `channel`, new BroadcastChannel(`user-channel`)), e(this, au, r()), e(this, ou, r(!0)), e(this, su, t(() => Rl.count)), e(this, cu, r(Date.now())), e(this, lu, t(() => {
        if (!this.data) return;
        let e = this.data.charges;
        if (e.infinite) return 1 / 0;
        if (e.count > e.max) return e.count;
        let t = e.count + Math.max((M.now - this.lastFetch) / e.cooldownMs, 0);
        return Math.min(e.max, t)
      })), e(this, uu, t(() => this.charges !== void 0 && this.data && !this.data.charges.infinite ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0)), e(this, du, t(() => {
        var e;
        return new Ul(Vl(((e = this.data) == null ? void 0 : e.flagsBitmap) ?? `AA==`))
      })), e(this, fu, t(() => {
        var e;
        if (!((e = this.data) != null && e.timeoutUntil)) return;
        let t = new Date(this.data.timeoutUntil),
          n = t.getTime();
        if (!(!Number.isFinite(n) || n <= M.now)) return t
      })), this.channel && (this.channel.onmessage = e => {
        let t = JSON.parse(e.data);
        t.type === `refresh` ? (this.data = t.data, this.lastFetch = Date.now()) : t.type === `logout` && (this.data = void 0)
      })
    }
    async refresh() {
      try {
        var e, t;
        return this.loading = !0, this.data = await B.me(), this.lastFetch = Date.now(), (e = this.channel) == null || e.postMessage(JSON.stringify({
          type: `refresh`,
          data: this.data
        })), (t = this.data) != null && t.id && $.setUserId(this.data.id), !0
      } catch (e) {
        return console.error(e), iu.warning(h.no_internet_access(), {
          duration: 1e4
        }), !1
      } finally {
        this.loading = !1
      }
    }
    async logout() {
      var e;
      await B.logout(), (e = this.channel) == null || e.postMessage(JSON.stringify({
        type: `logout`
      })), this.data = void 0
    }
    hasColor(e) {
      var t;
      return e < 32 || !!((((t = this.data) == null ? void 0 : t.extraColorsBitmap) ?? 0) & 1 << e - 32)
    }
    hasPermission(e) {
      var t;
      return zl((t = this.data) == null ? void 0 : t.permissions, e)
    }
    hasAnyPermission(e) {
      var t;
      return Bl((t = this.data) == null ? void 0 : t.permissions, e)
    }
  },
  q, J = Array(128).fill(void 0);
J.push(void 0, null, !0, !1);

function Y(e) {
  return J[e]
}
var pu = J.length;

function X(e) {
  pu === J.length && J.push(J.length + 1);
  let t = pu;
  return pu = J[t], J[t] = e, t
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
var mu = typeof TextDecoder < `u` ? new TextDecoder(`utf-8`, {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error(`TextDecoder not available`)
  }
};
typeof TextDecoder < `u` && mu.decode();
var hu = null;

function gu() {
  return (hu === null || hu.byteLength === 0) && (hu = new Uint8Array(q.memory.buffer)), hu
}

function _u(e, t) {
  return e >>>= 0, mu.decode(gu().subarray(e, e + t))
}

function vu(e) {
  e < 132 || (J[e] = pu, pu = e)
}

function yu(e) {
  let t = Y(e);
  return vu(e), t
}
var bu = null;

function xu() {
  return (bu === null || bu.buffer.detached === !0 || bu.buffer.detached === void 0 && bu.buffer !== q.memory.buffer) && (bu = new DataView(q.memory.buffer)), bu
}
var Su = 0,
  Cu = typeof TextEncoder < `u` ? new TextEncoder(`utf-8`) : {
    encode: () => {
      throw Error(`TextEncoder not available`)
    }
  },
  wu = typeof Cu.encodeInto == `function` ? function(e, t) {
    return Cu.encodeInto(e, t)
  } : function(e, t) {
    let n = Cu.encode(e);
    return t.set(n), {
      read: e.length,
      written: n.length
    }
  };

function Tu(e, t, n) {
  if (n === void 0) {
    let n = Cu.encode(e),
      r = t(n.length, 1) >>> 0;
    return gu().subarray(r, r + n.length).set(n), Su = n.length, r
  }
  let r = e.length,
    i = t(r, 1) >>> 0,
    a = gu(),
    o = 0;
  for (; o < r; o++) {
    let t = e.charCodeAt(o);
    if (t > 127) break;
    a[i + o] = t
  }
  if (o !== r) {
    o !== 0 && (e = e.slice(o)), i = n(i, r, r = o + e.length * 3, 1) >>> 0;
    let t = gu().subarray(i + o, i + r),
      a = wu(e, t);
    o += a.written, i = n(i, r, o, 1) >>> 0
  }
  return Su = o, i
}

function Eu(e) {
  let t = Tu(e, q.__wbindgen_export_1, q.__wbindgen_export_2),
    n = Su;
  q.set_discord_id(t, n)
}

function Du(e) {
  let t = Tu(e, q.__wbindgen_export_1, q.__wbindgen_export_2),
    n = Su;
  q.set_fingerprint(t, n)
}

function Ou(e) {
  let t = Tu(e, q.__wbindgen_export_1, q.__wbindgen_export_2),
    n = Su;
  q.set_detected_bot(t, n)
}

function ku(e) {
  let t, n;
  try {
    let a = q.__wbindgen_add_to_stack_pointer(-16),
      o = Tu(e, q.__wbindgen_export_1, q.__wbindgen_export_2),
      s = Su;
    q.get_pawtected_endpoint_payload(a, o, s);
    var r = xu().getInt32(a + 0, !0),
      i = xu().getInt32(a + 4, !0);
    return t = r, n = i, _u(r, i)
  } finally {
    q.__wbindgen_add_to_stack_pointer(16), q.__wbindgen_export_3(t, n, 1)
  }
}

function Au(e) {
  q.set_user_id(e)
}

function ju(e) {
  q.set_cf_likely_automated(e)
}

function Mu(e) {
  q.set_automated_clicks(e)
}

function Nu(e) {
  let t = Tu(e, q.__wbindgen_export_1, q.__wbindgen_export_2),
    n = Su;
  q.request_url(t, n)
}

function Pu(e) {
  q.set_automated_browser(e)
}
async function Fu(e, t) {
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

function Iu() {
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
    return X(Function(_u(e, t)))
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
      Y(e).randomFillSync(yu(t))
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
    xu().setFloat64(e + 8, Q(r) ? 0 : r, !0), xu().setInt32(e + 0, !Q(r), !0)
  }, e.wbg.__wbindgen_object_clone_ref = function(e) {
    return X(Y(e))
  }, e.wbg.__wbindgen_object_drop_ref = function(e) {
    yu(e)
  }, e.wbg.__wbindgen_string_new = function(e, t) {
    return X(_u(e, t))
  }, e.wbg.__wbindgen_throw = function(e, t) {
    throw Error(_u(e, t))
  }, e
}

function Lu(e, t) {
  return q = e.exports, Ru.__wbindgen_wasm_module = t, bu = null, hu = null, q
}
async function Ru(e) {
  if (q !== void 0) return q;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? {
    module_or_path: e
  } = e : console.warn(`using deprecated parameters for the initialization function; pass a single object instead`)), e === void 0 && (e = new URL(`pawtect_wasm_bg.wasm`, `` + import.meta.url));
  let t = Iu();
  (typeof e == `string` || typeof Request == `function` && e instanceof Request || typeof URL == `function` && e instanceof URL) && (e = fetch(e));
  let {
    instance: n,
    module: r
  } = await Fu(await e, t);
  return Lu(n, r)
}
var zu = class {
  constructor() {
    s(this, `interval`, void 0), s(this, `storagesEmpty`, !1), s(this, `storages`, [new Vu, new Hu, new Uu, new Wu]), s(this, `pawtectLoaded`, void 0), s(this, `pawtectError`, void 0)
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!K.data || this.storagesEmpty) && !localStorage.getItem(Vu.KEY)) {
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
    let t = z.day;
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
        await Ru(ae), (e = K.data) != null && e.id && Au(K.data.id);
        let t = fetch;
        return Object.assign(window, {
          fetch: Bu((e, n) => {
            let r = null;
            return e instanceof Request ? r = e.url : e instanceof URL ? r = e.href : typeof e == `string` && (r = e), r !== null && !r.startsWith(`/`) && Nu(r), t.call(window, e, n)
          })
        }), !0
      } catch (e) {
        return console.error(`Error loading Pawtect WASM:`, e), this.pawtectError = e, this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(e) {
    await this.loadPawtect(), Au(e)
  }
  async setCfLikelyAutomated(e) {
    await this.loadPawtect(), ju(e)
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
    if (!await this.loadPawtect()) throw Error(h.wasm_error());
    let t = navigator.webdriver,
      [n, r] = await Promise.all([ko(), ct().catch(e => (console.error(e), {
        bot: !1
      }))]);
    return Au(K.data.id), Eu(K.data.discordId ?? ``), Du(n), Pu(t), Mu(M.automatedClicks), r.bot && Ou(r.botKind ?? `unknown`), ku(e)
  }
};

function Bu(e) {
  return e.bind().bind()
}
var Vu = class e {
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
s(Vu, `KEY`, `ui_layout_v3`), s(Vu, `XOR_KEY`, `wplace-prefs`);
var Hu = class e {
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
s(Hu, `KEY`, `nav.cursor`), s(Hu, `SHIFT`, 13);
var Uu = class e {
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
s(Uu, `KEY`, `_pf_uid`), s(Uu, `MAX_AGE`, 31536e3);
var Wu = class {
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
  $ = new zu;
export {
  Ys as $, Ic as A, sc as B, Zc as C, pt as Ct, Bc as D, Uc as E, pc as F, hc as G, oc as H, cc as I, Zs as J, I as K, mc as L, z as M, jc as N, Rc as O, Mc as P, Js as Q, uc as R, B as S, mt as St, Wc as T, ut as Tt, dc as U, fc as V, gc as W, qs as X, Xs as Y, Ks as Z, Ml as _, ps as _t, G as a, Rs as at, Dl as b, ko as bt, Wl as c, zs as ct, Vl as d, bs as dt, Ws as et, Rl as f, ss as ft, wl as g, ds as gt, Tl as h, fs as ht, iu as i, Ls as it, zc as j, Lc as k, Gl as l, ys as lt, gl as m, ms as mt, K as n, F as nt, ql as o, Vs as ot, dl as p, N as pt, rc as q, ru as r, P as rt, Ul as s, Bs as st, $ as t, Gs as tt, Kl as u, xs as ut, jl as v, rs as vt, Jc as w, dt as wt, Sl as x, ht as xt, _l as y, M as yt, lc as z
};