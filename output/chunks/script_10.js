import {
  At as e,
  Ft as t,
  It as n,
  Mt as r,
  Ot as i,
  _t as a,
  an as o,
  bt as s,
  lt as c,
  pt as l,
  zt as u
} from "./CX37corp.js";
import {
  c as d,
  n as f,
  s as p,
  t as m
} from "./Dxrfux0V.js";
import {
  t as h
} from "./CrLCY2lS.js";
var ee = `` + new URL(`../assets/pawtect_wasm_bg.8VPqYlMZ.wasm`, import.meta.url).href,
  te = `2.0.0`,
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

function ne(e, t) {
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
async function re(e) {
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

function ie({
  appVersion: e
}) {
  if (e.state !== 0) return !1;
  if (/headless/i.test(e.value)) return g.HeadlessChrome;
  if (/electron/i.test(e.value)) return g.Electron;
  if (/slimerjs/i.test(e.value)) return g.SlimerJS
}

function v(e, t) {
  return e.indexOf(t) !== -1
}

function y(e, t) {
  return e.indexOf(t) !== -1
}

function ae(e, t) {
  if (`find` in e) return e.find(t);
  for (let n = 0; n < e.length; n++)
    if (t(e[n], n, e)) return e[n]
}

function oe(e) {
  return Object.getOwnPropertyNames(e)
}

function se(e, ...t) {
  for (let n of t)
    if (typeof n == `string`) {
      if (v(e, n)) return !0
    } else if (ae(e, e => n.test(e)) != null) return !0;
  return !1
}

function b(e) {
  return e.reduce((e, t) => e + +!!t, 0)
}

function ce({
  documentElementKeys: e
}) {
  if (e.state !== 0) return !1;
  if (se(e.value, `selenium`, `webdriver`, `driver`)) return g.Selenium
}

function le({
  errorTrace: e
}) {
  if (e.state !== 0) return !1;
  if (/PhantomJS/i.test(e.value)) return g.PhantomJS
}

function ue({
  evalLength: e,
  browserKind: t,
  browserEngineKind: n
}) {
  if (e.state !== 0 || t.state !== 0 || n.state !== 0) return;
  let r = e.value;
  return n.value === `unknown` ? !1 : r === 37 && !v([`webkit`, `gecko`], n.value) || r === 39 && !v([`internet_explorer`], t.value) || r === 33 && !v([`chromium`], n.value)
}

function de({
  functionBind: e
}) {
  if (e.state === -2) return g.PhantomJS
}

function fe({
  languages: e
}) {
  if (e.state === 0 && e.value.length === 0) return g.HeadlessChrome
}

function pe({
  mimeTypesConsistent: e
}) {
  if (e.state === 0 && !e.value) return g.Unknown
}

function me({
  notificationPermissions: e,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== `chrome`) return !1;
  if (e.state === 0 && e.value) return g.HeadlessChrome
}

function he({
  pluginsArray: e
}) {
  if (e.state === 0 && !e.value) return g.HeadlessChrome
}

function ge({
  pluginsLength: e,
  android: t,
  browserKind: n,
  browserEngineKind: r
}) {
  if (e.state === 0 && t.state === 0 && n.state === 0 && r.state === 0 && !(n.value !== `chrome` || t.value || r.value !== `chromium`) && e.value === 0) return g.HeadlessChrome
}

function _e({
  process: e
}) {
  var t;
  if (e.state !== 0) return !1;
  if (e.value.type === `renderer` || ((t = e.value.versions) == null ? void 0 : t.electron) != null) return g.Electron
}

function ve({
  productSub: e,
  browserKind: t
}) {
  if (e.state !== 0 || t.state !== 0) return !1;
  if ((t.value === `chrome` || t.value === `safari` || t.value === `opera` || t.value === `wechat`) && e.value !== `20030107`) return g.Unknown
}

function ye({
  userAgent: e
}) {
  if (e.state !== 0) return !1;
  if (/PhantomJS/i.test(e.value)) return g.PhantomJS;
  if (/Headless/i.test(e.value)) return g.HeadlessChrome;
  if (/Electron/i.test(e.value)) return g.Electron;
  if (/slimerjs/i.test(e.value)) return g.SlimerJS
}

function be({
  webDriver: e
}) {
  if (e.state === 0 && e.value) return g.HeadlessChrome
}

function xe({
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

function Se({
  windowExternal: e
}) {
  if (e.state !== 0) return !1;
  if (/Sequentum/i.test(e.value)) return g.Sequentum
}

function Ce({
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

function we({
  distinctiveProps: e
}) {
  if (e.state !== 0) return !1;
  let t = e.value,
    n;
  for (n in t)
    if (t[n]) return n
}
var Te = {
  detectAppVersion: ie,
  detectDocumentAttributes: ce,
  detectErrorTrace: le,
  detectEvalLengthInconsistency: ue,
  detectFunctionBind: de,
  detectLanguagesLengthInconsistency: fe,
  detectNotificationPermissions: me,
  detectPluginsArray: he,
  detectPluginsLengthInconsistency: ge,
  detectProcess: _e,
  detectUserAgent: ye,
  detectWebDriver: be,
  detectWebGL: xe,
  detectWindowExternal: Se,
  detectWindowSize: Ce,
  detectMimeTypesConsistent: pe,
  detectProductSub: ve,
  detectDistinctiveProperties: we
};

function Ee() {
  let e = navigator.appVersion;
  if (e == null) throw new _(-1, `navigator.appVersion is undefined`);
  return e
}

function De() {
  if (document.documentElement === void 0) throw new _(-1, `document.documentElement is undefined`);
  let {
    documentElement: e
  } = document;
  if (typeof e.getAttributeNames != `function`) throw new _(-2, `document.documentElement.getAttributeNames is not a function`);
  return e.getAttributeNames()
}

function Oe() {
  try {
    null[0]()
  } catch (e) {
    if (e instanceof Error && e.stack != null) return e.stack.toString()
  }
  throw new _(-3, `errorTrace signal unexpected behaviour`)
}

function ke() {
  return eval.toString().length
}

function Ae() {
  if (Function.prototype.bind === void 0) throw new _(-2, `Function.prototype.bind is undefined`);
  return Function.prototype.bind.toString()
}

function je() {
  var e;
  let t = window,
    n = navigator;
  return b([`webkitPersistentStorage` in n, `webkitTemporaryStorage` in n, n.vendor.indexOf(`Google`) === 0, `webkitResolveLocalFileSystemURL` in t, `BatteryManager` in t, `webkitMediaStream` in t, `webkitSpeechGrammar` in t]) >= 5 ? `chromium` : b([`ApplePayError` in t, `CSSPrimitiveValue` in t, `Counter` in t, n.vendor.indexOf(`Apple`) === 0, `getStorageUpdates` in n, `WebKitMediaKeys` in t]) >= 4 ? `webkit` : b([`buildID` in navigator, `MozAppearance` in (((e = document.documentElement) == null ? void 0 : e.style) ?? {}), `onmozfullscreenchange` in t, `mozInnerScreenX` in t, `CSSMozDocumentRule` in t, `CanvasCaptureMediaStream` in t]) >= 4 ? `gecko` : `unknown`
}

function Me() {
  var e;
  let t = (e = navigator.userAgent) == null ? void 0 : e.toLowerCase();
  return y(t, `edg/`) ? `edge` : y(t, `trident`) || y(t, `msie`) ? `internet_explorer` : y(t, `wechat`) ? `wechat` : y(t, `firefox`) ? `firefox` : y(t, `opera`) || y(t, `opr`) ? `opera` : y(t, `chrome`) ? `chrome` : y(t, `safari`) ? `safari` : `unknown`
}

function Ne() {
  let e = je(),
    t = e === `chromium`,
    n = e === `gecko`,
    r = window,
    i = navigator,
    a = `connection`;
  return t ? b([!(`SharedWorker` in r), i[a] && `ontypechange` in i[a], !(`sinkId` in new Audio)]) >= 2 : n ? b([`onorientationchange` in r, `orientation` in r, /android/i.test(i.appVersion)]) >= 2 : !1
}

function Pe() {
  return document.hasFocus !== void 0 && document.hasFocus()
}

function Fe() {
  let e = window;
  return b([!(`MediaSettingsRange` in e), `RTCEncodedAudioFrame` in e, `` + e.Intl == `[object Intl]`, `` + e.Reflect == `[object Reflect]`]) >= 3
}

function Ie() {
  let e = navigator,
    t = [],
    n = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if (n !== void 0 && t.push([n]), Array.isArray(e.languages)) je() === `chromium` && Fe() || t.push(e.languages);
  else if (typeof e.languages == `string`) {
    let n = e.languages;
    n && t.push(n.split(`,`))
  }
  return t
}

function Le() {
  if (navigator.mimeTypes === void 0) throw new _(-1, `navigator.mimeTypes is undefined`);
  let {
    mimeTypes: e
  } = navigator, t = Object.getPrototypeOf(e) === MimeTypeArray.prototype;
  for (let n = 0; n < e.length; n++) t && (t = Object.getPrototypeOf(e[n]) === MimeType.prototype);
  return t
}
async function Re() {
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

function ze() {
  if (navigator.plugins === void 0) throw new _(-1, `navigator.plugins is undefined`);
  if (window.PluginArray === void 0) throw new _(-1, `window.PluginArray is undefined`);
  return navigator.plugins instanceof PluginArray
}

function Be() {
  if (navigator.plugins === void 0) throw new _(-1, `navigator.plugins is undefined`);
  if (navigator.plugins.length === void 0) throw new _(-3, `navigator.plugins.length is undefined`);
  return navigator.plugins.length
}

function Ve() {
  let {
    process: e
  } = window, t = `window.process is`;
  if (e === void 0) throw new _(-1, `${t} undefined`);
  if (e && typeof e != `object`) throw new _(-3, `${t} not an object`);
  return e
}

function He() {
  let {
    productSub: e
  } = navigator;
  if (e === void 0) throw new _(-1, `navigator.productSub is undefined`);
  return e
}

function Ue() {
  if (navigator.connection === void 0) throw new _(-1, `navigator.connection is undefined`);
  if (navigator.connection.rtt === void 0) throw new _(-1, `navigator.connection.rtt is undefined`);
  return navigator.connection.rtt
}

function We() {
  return navigator.userAgent
}

function Ge() {
  if (navigator.webdriver == null) throw new _(-1, `navigator.webdriver is undefined`);
  return navigator.webdriver
}

function Ke() {
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

function qe() {
  if (window.external === void 0) throw new _(-1, `window.external is undefined`);
  let {
    external: e
  } = window;
  if (typeof e.toString != `function`) throw new _(-2, `window.external.toString is not a function`);
  return e.toString()
}

function Je() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function Ye() {
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
    r = oe(window),
    i = [];
  for (t in window.document !== void 0 && (i = oe(window.document)), e) {
    let a = e[t];
    if (a !== void 0) {
      let e = a.window !== void 0 && se(r, ...a.window),
        o = a.document === void 0 || !i.length ? !1 : se(i, ...a.document);
      n[t] = e || o
    }
  }
  return n
}
var Xe = {
    android: Ne,
    browserKind: Me,
    browserEngineKind: je,
    documentFocus: Pe,
    userAgent: We,
    appVersion: Ee,
    rtt: Ue,
    windowSize: Je,
    pluginsLength: Be,
    pluginsArray: ze,
    errorTrace: Oe,
    productSub: He,
    windowExternal: qe,
    mimeTypesConsistent: Le,
    evalLength: ke,
    webGL: Ke,
    webDriver: Ge,
    languages: Ie,
    notificationPermissions: Re,
    documentElementKeys: De,
    functionBind: Ae,
    process: Ve,
    distinctiveProps: Ye
  },
  Ze = class {
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
      let [e, t] = ne(this.components, Te);
      return this.detections = e, t
    }
    async collect() {
      return this.components = await re(Xe), this.components
    }
  };

function Qe() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    let e = new XMLHttpRequest;
    e.open(`get`, `https://m1.openfpcdn.io/botd/v${te}/npm-monitoring`, !0), e.send()
  } catch (e) {
    console.error(e)
  }
}
async function $e({
  monitoring: e = !0
} = {}) {
  e && Qe();
  let t = new Ze;
  return await t.collect(), t
}
var et = null;
async function tt() {
  return await nt() ? {
    bot: !1
  } : (await rt()).detect()
}
async function nt() {
  var e;
  let t = navigator;
  if (!((e = t.brave) != null && e.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(t.userAgent)) return !1;
  try {
    return await t.brave.isBrave()
  } catch {
    return !1
  }
}

function rt() {
  return et || (et = $e({
    monitoring: !1
  })), et
}
var it = `theme`,
  at = new WeakMap,
  ot = new WeakMap,
  st = new WeakMap,
  ct = new WeakMap,
  lt = new WeakMap,
  ut = new WeakMap,
  dt = new WeakMap,
  ft = new WeakMap,
  pt = new WeakMap,
  mt = new WeakMap,
  ht = new WeakMap,
  gt = new WeakMap,
  _t = new WeakMap,
  x = new class {
    get dropletsDialogOpen() {
      return c(n(at, this))
    }
    set dropletsDialogOpen(t) {
      e(n(at, this), t, !0)
    }
    get prismDialogOpen() {
      return c(n(ot, this))
    }
    set prismDialogOpen(t) {
      e(n(ot, this), t, !0)
    }
    get accountConflictDialogOpen() {
      return c(n(st, this))
    }
    set accountConflictDialogOpen(t) {
      e(n(st, this), t, !0)
    }
    get pendingHistoryDialogOpen() {
      return c(n(ct, this))
    }
    set pendingHistoryDialogOpen(t) {
      e(n(ct, this), t, !0)
    }
    get storeDialogOpen() {
      return c(n(lt, this))
    }
    set storeDialogOpen(t) {
      e(n(lt, this), t, !0)
    }
    get storeTabIndex() {
      return c(n(ut, this))
    }
    set storeTabIndex(t) {
      e(n(ut, this), t, !0)
    }
    get muted() {
      return c(n(dt, this))
    }
    set muted(t) {
      e(n(dt, this), t, !0)
    }
    get language() {
      return c(n(ft, this))
    }
    set language(t) {
      e(n(ft, this), t, !0)
    }
    get map() {
      return c(n(pt, this))
    }
    set map(t) {
      e(n(pt, this), t)
    }
    get automatedClicks() {
      return c(n(mt, this))
    }
    set automatedClicks(t) {
      e(n(mt, this), t, !0)
    }
    get theme() {
      return c(n(ht, this))
    }
    set theme(t) {
      e(n(ht, this), t, !0), localStorage.setItem(it, t), document.documentElement.setAttribute(`data-theme`, t)
    }
    get now() {
      return c(n(gt, this))
    }
    get captcha() {
      return yt ? c(n(_t, this)) : {
        token: `turnstile-disabled`,
        time: Date.now()
      }
    }
    set captcha(t) {
      e(n(_t, this), t, !0)
    }
    constructor() {
      u(this, at, r(!1)), u(this, ot, r(!1)), u(this, st, r(!1)), u(this, ct, r(!1)), u(this, lt, r(!1)), u(this, ut, r(0)), u(this, dt, r(!1)), u(this, ft, r(i(vt()))), u(this, pt, r(null)), u(this, mt, r(!1)), u(this, ht, r(`custom-winter`)), u(this, gt, r(i(Date.now()))), u(this, _t, r(void 0)), setInterval(() => {
        e(n(gt, this), Date.now(), !0)
      }, 500), this.theme = localStorage.getItem(it), this.theme !== `dark` && this.theme !== `custom-winter` && (this.theme = `custom-winter`)
    }
  };

function vt() {
  if (navigator.languages && navigator.languages.length > 0) {
    let e = navigator.languages.find(e => e.length === 2);
    if (e) return e
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || `en`).substring(0, 2)
}
var yt = p.toLowerCase() !== `false`,
  bt = `
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
async function xt() {
  try {
    let e = await fetch(`${d}/anticheat/pow/challenge`, {
      credentials: `include`
    });
    if (!e.ok) return null;
    let t = await e.json(),
      n = await St(t.prefix, t.difficulty);
    return n ? {
      ...t,
      nonce: n
    } : null
  } catch {
    return null
  }
}
async function St(e, t) {
  return new Promise(n => {
    let r = new Blob([bt], {
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
var Ct = 3,
  wt = new WeakMap,
  Tt = new WeakMap,
  S = new class {
    constructor() {
      u(this, wt, r(null)), u(this, Tt, r(0))
    }
    get current() {
      return c(n(wt, this))
    }
    set current(t) {
      e(n(wt, this), t, !0)
    }
    get errorCount() {
      return c(n(Tt, this))
    }
    set errorCount(t) {
      e(n(Tt, this), t, !0)
    }
  };
async function C(e) {
  if (e === 1) return Et();
  if (e === 2) {
    let e = await Ot();
    return e ? Dt(`turnstile`, e) : !1
  }
  if (e === 3) {
    let e = await kt();
    return e ? Dt(`hcaptcha`, e) : !1
  }
  return e === 4 && jt()
}
async function Et() {
  for (let e = 0; e < Ct; e++) try {
    let e = await xt();
    if (!e) continue;
    return await F.verifyChallenge({
      type: `pow`,
      challengeId: e.challengeId,
      nonce: e.nonce
    }), !0
  } catch {}
  return !1
}
async function Dt(e, t) {
  try {
    let n = await F.postCaptchaSession({
      provider: e,
      token: t
    });
    return await F.verifyChallenge({
      type: `captcha`,
      sessionId: n.sessionId
    }), !0
  } catch {
    return !1
  }
}
var w = {};

function Ot() {
  return At(2)
}

function kt() {
  return At(3)
}

function At(e) {
  let t = w[e];
  if (t) return t;
  let n = new Promise(t => {
    S.errorCount = 0, S.current = {
      tier: e,
      resolve: n => {
        delete w[e], t(n)
      }
    }
  });
  return w[e] = n, n
}

function jt() {
  let e = w[4];
  if (e) return e;
  let t = new Promise(e => {
    S.errorCount = 0, S.current = {
      tier: 4,
      resolve: t => {
        delete w[4], e(t)
      }
    }
  });
  return w[4] = t, t
}

function Mt(e) {
  let t = S.current;
  !t || t.tier === 4 || (t.resolve(e), S.current = null)
}

function Nt() {
  let e = S.current;
  !e || e.tier === 4 || (S.errorCount += 1, S.errorCount >= Ct && (e.resolve(void 0), S.current = null))
}

function Pt() {
  let e = S.current;
  !e || e.tier !== 4 || (e.resolve(!0), S.current = null)
}

function Ft() {
  let e = S.current;
  e && (e.tier === 4 ? e.resolve(!1) : e.resolve(void 0), S.current = null)
}
var T = function(e) {
    return e[e.CONTINUE = 100] = `CONTINUE`, e[e.SWITCHING_PROTOCOLS = 101] = `SWITCHING_PROTOCOLS`, e[e.PROCESSING = 102] = `PROCESSING`, e[e.EARLY_HINTS = 103] = `EARLY_HINTS`, e[e.OK = 200] = `OK`, e[e.CREATED = 201] = `CREATED`, e[e.ACCEPTED = 202] = `ACCEPTED`, e[e.NON_AUTHORITATIVE_INFORMATION = 203] = `NON_AUTHORITATIVE_INFORMATION`, e[e.NO_CONTENT = 204] = `NO_CONTENT`, e[e.RESET_CONTENT = 205] = `RESET_CONTENT`, e[e.PARTIAL_CONTENT = 206] = `PARTIAL_CONTENT`, e[e.MULTI_STATUS = 207] = `MULTI_STATUS`, e[e.ALREADY_REPORTED = 208] = `ALREADY_REPORTED`, e[e.IM_USED = 226] = `IM_USED`, e[e.MULTIPLE_CHOICES = 300] = `MULTIPLE_CHOICES`, e[e.MOVED_PERMANENTLY = 301] = `MOVED_PERMANENTLY`, e[e.MOVED_TEMPORARILY = 302] = `MOVED_TEMPORARILY`, e[e.FOUND = 302] = `FOUND`, e[e.SEE_OTHER = 303] = `SEE_OTHER`, e[e.NOT_MODIFIED = 304] = `NOT_MODIFIED`, e[e.USE_PROXY = 305] = `USE_PROXY`, e[e.SWITCH_PROXY = 306] = `SWITCH_PROXY`, e[e.TEMPORARY_REDIRECT = 307] = `TEMPORARY_REDIRECT`, e[e.PERMANENT_REDIRECT = 308] = `PERMANENT_REDIRECT`, e[e.BAD_REQUEST = 400] = `BAD_REQUEST`, e[e.UNAUTHORIZED = 401] = `UNAUTHORIZED`, e[e.PAYMENT_REQUIRED = 402] = `PAYMENT_REQUIRED`, e[e.FORBIDDEN = 403] = `FORBIDDEN`, e[e.NOT_FOUND = 404] = `NOT_FOUND`, e[e.METHOD_NOT_ALLOWED = 405] = `METHOD_NOT_ALLOWED`, e[e.NOT_ACCEPTABLE = 406] = `NOT_ACCEPTABLE`, e[e.PROXY_AUTHENTICATION_REQUIRED = 407] = `PROXY_AUTHENTICATION_REQUIRED`, e[e.REQUEST_TIMEOUT = 408] = `REQUEST_TIMEOUT`, e[e.CONFLICT = 409] = `CONFLICT`, e[e.GONE = 410] = `GONE`, e[e.LENGTH_REQUIRED = 411] = `LENGTH_REQUIRED`, e[e.PRECONDITION_FAILED = 412] = `PRECONDITION_FAILED`, e[e.REQUEST_TOO_LONG = 413] = `REQUEST_TOO_LONG`, e[e.CONTENT_TOO_LARGE = 413] = `CONTENT_TOO_LARGE`, e[e.REQUEST_URI_TOO_LONG = 414] = `REQUEST_URI_TOO_LONG`, e[e.URI_TOO_LONG = 414] = `URI_TOO_LONG`, e[e.UNSUPPORTED_MEDIA_TYPE = 415] = `UNSUPPORTED_MEDIA_TYPE`, e[e.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = `REQUESTED_RANGE_NOT_SATISFIABLE`, e[e.RANGE_NOT_SATISFIABLE = 416] = `RANGE_NOT_SATISFIABLE`, e[e.EXPECTATION_FAILED = 417] = `EXPECTATION_FAILED`, e[e.IM_A_TEAPOT = 418] = `IM_A_TEAPOT`, e[e.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = `INSUFFICIENT_SPACE_ON_RESOURCE`, e[e.MISDIRECTED_REQUEST = 421] = `MISDIRECTED_REQUEST`, e[e.UNPROCESSABLE_ENTITY = 422] = `UNPROCESSABLE_ENTITY`, e[e.UNPROCESSABLE_CONTENT = 422] = `UNPROCESSABLE_CONTENT`, e[e.LOCKED = 423] = `LOCKED`, e[e.FAILED_DEPENDENCY = 424] = `FAILED_DEPENDENCY`, e[e.TOO_EARLY = 425] = `TOO_EARLY`, e[e.UPGRADE_REQUIRED = 426] = `UPGRADE_REQUIRED`, e[e.PRECONDITION_REQUIRED = 428] = `PRECONDITION_REQUIRED`, e[e.TOO_MANY_REQUESTS = 429] = `TOO_MANY_REQUESTS`, e[e.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = `REQUEST_HEADER_FIELDS_TOO_LARGE`, e[e.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = `UNAVAILABLE_FOR_LEGAL_REASONS`, e[e.INTERNAL_SERVER_ERROR = 500] = `INTERNAL_SERVER_ERROR`, e[e.NOT_IMPLEMENTED = 501] = `NOT_IMPLEMENTED`, e[e.BAD_GATEWAY = 502] = `BAD_GATEWAY`, e[e.SERVICE_UNAVAILABLE = 503] = `SERVICE_UNAVAILABLE`, e[e.GATEWAY_TIMEOUT = 504] = `GATEWAY_TIMEOUT`, e[e.HTTP_VERSION_NOT_SUPPORTED = 505] = `HTTP_VERSION_NOT_SUPPORTED`, e[e.VARIANT_ALSO_NEGOTIATES = 506] = `VARIANT_ALSO_NEGOTIATES`, e[e.INSUFFICIENT_STORAGE = 507] = `INSUFFICIENT_STORAGE`, e[e.LOOP_DETECTED = 508] = `LOOP_DETECTED`, e[e.NOT_EXTENDED = 510] = `NOT_EXTENDED`, e[e.NETWORK_AUTHENTICATION_REQUIRED = 511] = `NETWORK_AUTHENTICATION_REQUIRED`, e[e.AWS_ELB_000 = 0] = `AWS_ELB_000`, e[e.THIS_IS_FINE = 218] = `THIS_IS_FINE`, e[e.PAGE_EXPIRED = 419] = `PAGE_EXPIRED`, e[e.METHOD_FAILURE = 420] = `METHOD_FAILURE`, e[e.ENHANCE_YOUR_CALM = 420] = `ENHANCE_YOUR_CALM`, e[e.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = `REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY`, e[e.SHOPIFY_SECURITY_REJECTION = 430] = `SHOPIFY_SECURITY_REJECTION`, e[e.LOGIN_TIME_OUT = 440] = `LOGIN_TIME_OUT`, e[e.NO_RESPONSE = 444] = `NO_RESPONSE`, e[e.RETRY_WITH = 449] = `RETRY_WITH`, e[e.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = `BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS`, e[e.REDIRECT_IIS = 451] = `REDIRECT_IIS`, e[e.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = `CLIENT_CLOSED_CONNECTION_AWS_ELB`, e[e.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = `X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB`, e[e.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = `INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB`, e[e.REQUEST_HEADER_TOO_LARGE = 494] = `REQUEST_HEADER_TOO_LARGE`, e[e.SSL_CERTIFICATE_ERROR = 495] = `SSL_CERTIFICATE_ERROR`, e[e.SSL_CERTIFICATE_REQUIRED = 496] = `SSL_CERTIFICATE_REQUIRED`, e[e.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = `HTTP_REQUEST_SENT_TO_HTTPS_PORT`, e[e.INVALID_TOKEN = 498] = `INVALID_TOKEN`, e[e.CLIENT_CLOSED_REQUEST = 499] = `CLIENT_CLOSED_REQUEST`, e[e.TOKEN_REQUIRED = 499] = `TOKEN_REQUIRED`, e[e.BANDWIDTH_LIMIT_EXCEEDED = 509] = `BANDWIDTH_LIMIT_EXCEEDED`, e[e.RESOURCE_LIMIT_IS_REACHED = 508] = `RESOURCE_LIMIT_IS_REACHED`, e[e.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = `WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR`, e[e.WEB_SERVER_IS_DOWN = 521] = `WEB_SERVER_IS_DOWN`, e[e.CONNECTION_TIMED_OUT = 522] = `CONNECTION_TIMED_OUT`, e[e.ORIGIN_IS_UNREACHABLE = 523] = `ORIGIN_IS_UNREACHABLE`, e[e.A_TIMEOUT_OCCURRED = 524] = `A_TIMEOUT_OCCURRED`, e[e.SSL_HANDSHAKE_FAILED = 525] = `SSL_HANDSHAKE_FAILED`, e[e.INVALID_SSL_CERTIFICATE = 526] = `INVALID_SSL_CERTIFICATE`, e[e.RAILGUN_ERROR = 527] = `RAILGUN_ERROR`, e[e.SITE_IS_OVERLOADED = 529] = `SITE_IS_OVERLOADED`, e[e.ORIGIN_UNAVAILABLE = 530] = `ORIGIN_UNAVAILABLE`, e[e.ORIGIN_DNS_ERROR = 530] = `ORIGIN_DNS_ERROR`, e[e.SITE_IS_FROZEN = 530] = `SITE_IS_FROZEN`, e[e.TEMPORARILY_DISABLED = 540] = `TEMPORARILY_DISABLED`, e[e.UNAUTHORIZED_AWS_ELB = 561] = `UNAUTHORIZED_AWS_ELB`, e[e.NETWORK_READ_TIMEOUT_ERROR = 598] = `NETWORK_READ_TIMEOUT_ERROR`, e[e.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = `NETWORK_CONNECT_TIMEOUT_ERROR`, e[e.UNEXPECTED_TOKEN = 783] = `UNEXPECTED_TOKEN`, e[e.REQUEST_DENIED = 999] = `REQUEST_DENIED`, e
  }({}),
  E = class extends Error {};

function It(e, t) {
  return (t == null ? void 0 : t.aborted) === !0 || typeof DOMException < `u` && e instanceof DOMException && e.name === `AbortError`
}
var Lt = new WeakMap,
  Rt = new WeakMap,
  zt = class {
    get online() {
      return c(n(Lt, this))
    }
    set online(t) {
      e(n(Lt, this), t, !0)
    }
    get serverTimeOffsetMs() {
      return c(n(Rt, this))
    }
    set serverTimeOffsetMs(t) {
      e(n(Rt, this), t, !0)
    }
    constructor(e) {
      o(this, `url`, void 0), u(this, Lt, r(!0)), u(this, Rt, r(null)), this.url = e
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
        })).status !== T.OK) throw Error(h.unexpected_server_error())
    }
    async guardedFetch(e, t) {
      try {
        let n = await fetch(`${this.url}${e}`, t);
        return this.online = !0, this.updateServerTimeEstimate(n), n
      } catch (e) {
        throw It(e, t == null ? void 0 : t.signal) ? e : (console.error(`Fetch error:`, e), this.online = !1, Error(h.cant_reach_the_server()))
      }
    }
    async request(e, t) {
      var n;
      t = {
        credentials: `include`,
        ...t
      };
      let r = await this.guardedFetch(e, t);
      if (r.status === T.FORBIDDEN && r.headers.get(`x-block-reason`) === `tor`) throw Error(h.tor_blocked());
      if (r.status === T.FORBIDDEN && r.headers.get(`x-block-reason`) === `integrity`) throw Error(h.request_integrity_blocked());
      let i = ((n = r.headers.get(`cf-mitigated`)) == null ? void 0 : n.toLowerCase()) === `challenge`;
      if (r.status === 403 && i) {
        if ($.setCfLikelyAutomated(!0), !await Ot()) throw Error(h.challenge_verification_not_completed());
        r = await this.guardedFetch(e, t)
      }
      if ((t == null ? void 0 : t.throwOnStatus) ?? !0) {
        if (r.status === T.TOO_MANY_REQUESTS) throw new E(h.you_or_someone_in_your_network_is_making_a_lot_of_requests_to_the_server());
        if (r.status === T.REQUEST_TIMEOUT) throw Error(h.request_timeout());
        if (r.status === T.SERVICE_UNAVAILABLE) throw Error(h.service_unavailable())
      }
      return r
    }
  },
  D = class extends Error {
    constructor(e, t) {
      super(e), o(this, `message`, void 0), o(this, `status`, void 0), this.message = e, this.status = t
    }
  },
  Bt = class extends Error {};

function Vt(e) {
  return class extends e {
    async me() {
      let e = await this.request(`/me`, {
        credentials: `include`,
        throwOnStatus: !1
      });
      if (e.status === T.OK) return await e.json();
      if (e.status !== T.UNAUTHORIZED) throw new D(h.unexpected_server_error(), e.status)
    }
    async meEmail() {
      let e = await this.request(`/me/email`, {
        credentials: `include`
      });
      if (e.status === T.OK) return (await e.json()).email
    }
    async logout() {
      let e = await this.request(`/auth/logout`, {
        method: `POST`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw Error(await e.text());
      return await e.json()
    }
    async getOtpCooldown() {
      let e = await this.request(`/anticheat/otp/cooldown`, {
        credentials: `include`
      });
      if (e.status !== T.OK) throw Error(h.unexpected_server_error());
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
      if (t.status === T.BAD_REQUEST) throw Error(h.invalid_phone_number());
      if (t.status === T.CONFLICT) throw Error(h.phone_already_used());
      if (t.status === T.FORBIDDEN) throw Error(h.not_allowed_to_verify());
      if (t.status === T.TOO_MANY_REQUESTS) throw Error(h.too_many_attempts());
      if (t.status === T.UNAVAILABLE_FOR_LEGAL_REASONS) throw Error(h.phone_region_not_supported());
      if (t.status === T.LOCKED) throw Error(h.unsubscribed_from_sms());
      if (t.status === T.UNPROCESSABLE_ENTITY) throw Error(h.phone_not_supported());
      if (t.status === T.NOT_ACCEPTABLE) throw Error(h.vpn_not_allowed());
      if (t.status === T.PRECONDITION_FAILED) throw Error(h.country_mismatch());
      if (t.status !== T.OK) throw Error(h.unexpected_server_error());
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
          "x-fp": await m()
        }
      });
      if (e.type === `otp`) {
        if (n.status === T.GONE) throw Error(h.expired_code());
        if (n.status === T.BAD_REQUEST) throw Error(h.invalid_code());
        if (n.status === T.TOO_MANY_REQUESTS) throw Error(h.too_many_attempts());
        if (n.status !== T.OK) throw Error(h.unexpected_server_error())
      } else if (n.status === T.BAD_REQUEST) throw Error(h.invalid_challenge_response());
      else if (n.status !== T.OK) throw Error(h.unexpected_server_error())
    }
    async updateMe(e) {
      let t = await this.request(`/me/update`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status === T.BAD_REQUEST) {
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
      if (t.status !== T.OK) throw Error(h.unexpected_server_error())
    }
    async deleteMe(e) {
      let t = await this.request(`/me`, {
        method: `DELETE`,
        credentials: `include`,
        body: JSON.stringify({
          confirmText: e
        })
      });
      if (t.status === T.BAD_REQUEST) throw Error(h.typed_username_does_not_match());
      if (t.status !== T.OK) throw Error(h.unexpected_server_error())
    }
    async favoriteLocation(e) {
      let t = await this.request(`/favorite-location`, {
        method: `POST`,
        body: JSON.stringify({
          latitude: e[0],
          longitude: e[1]
        }),
        credentials: `include`
      });
      if (t.status === T.FORBIDDEN) throw Error(h.operation_not_allowed_maybe_you_have_too_many_favorite_locations());
      if (t.status !== T.OK) throw Error(h.unexpected_server_error())
    }
    async deleteFavoriteLocation(e) {
      if ((await this.request(`/favorite-location/delete`, {
          method: `POST`,
          body: JSON.stringify({
            id: e
          }),
          credentials: `include`
        })).status !== T.OK) throw Error(h.unexpected_server_error())
    }
    async updateFavoriteLocation(e, t) {
      let n = await this.request(`/favorite-location/update`, {
        method: `POST`,
        body: JSON.stringify({
          id: e,
          name: t
        }),
        credentials: `include`
      });
      if (n.status === T.BAD_REQUEST) throw Error(h.location_name_is_too_big());
      if (n.status !== T.OK) throw Error(h.unexpected_server_error())
    }
    async getMyProfilePictures() {
      let e = await this.request(`/me/profile-pictures`, {
        credentials: `include`
      });
      if (e.status !== T.OK) throw Error(h.unexpected_server_error());
      return e.json()
    }
    async changeProfilePicture(e) {
      if ((await this.request(`/me/profile-picture/change`, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify({
            pictureId: e
          })
        })).status !== T.OK) throw Error(h.unexpected_server_error())
    }
    async unlinkDiscord() {
      let e = await this.request(`/discord/unlink`, {
        method: `POST`,
        credentials: `include`
      });
      if (e.status !== T.NO_CONTENT) throw new D(h.unexpected_server_error(), e.status)
    }
    async deleteSessions() {
      let e = await this.request(`/me/sessions`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status)
    }
    async deleteAllUserSessions(e) {
      let t = await this.request(`/staff/dashboard/users/${e}/sessions`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status)
    }
    async getMySuspensionDetails() {
      let e = await this.request(`/me/suspension`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
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
          ticketId: typeof(e == null ? void 0 : e.ticketId) == `string` ? e.ticketId : void 0
        }))
      }
    }
    async getUserPixelsPaintedToday() {
      let e = await this.request(`/me/pixels-painted-today`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      let t = await e.json();
      return (t == null ? void 0 : t.paintedToday) ?? 0
    }
    async accountConflict() {
      let e = await this.request(`/me/account-conflict`, {
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
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
        case T.OK:
          return (await t.json()).keptUserId;
        case T.CONFLICT:
          throw (await t.json()).error === `conflict_blocked` ? Error(h.duplicate_account_blocked()) : Error(h.duplicate_account_already_resolved());
        default:
          throw new D(h.unexpected_server_error(), t.status)
      }
    }
    async markRulesAsRead() {
      return (await this.request(`/me/rules/read`, {
        method: `POST`,
        credentials: `include`
      })).status === T.OK
    }
  }
}

function Ht(e) {
  return class extends e {
    async getAdminB2BBusinesses(e = ``, t = 0) {
      let n = new URLSearchParams({
          query: e,
          page: String(t)
        }),
        r = await this.request(`/staff/dashboard/businesses?${n.toString()}`, {
          credentials: `include`
        });
      if (r.status !== T.OK) throw new D(h.b2b_load_failed(), r.status);
      return r.json()
    }
    async getAdminB2BBusiness(e) {
      let t = await this.request(`/staff/dashboard/businesses/${e}`, {
        credentials: `include`
      });
      if (t.status === T.NOT_FOUND) throw new D(h.b2b_business_not_found(), t.status);
      if (t.status !== T.OK) throw new D(h.b2b_load_business_failed(), t.status);
      return t.json()
    }
    async convertAdminB2BBusiness(e) {
      let t = await this.request(`/staff/dashboard/businesses/${e}/convert`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status === T.CONFLICT || t.status === T.BAD_REQUEST) {
        let e = await t.json().catch(() => null);
        if ((e == null ? void 0 : e.error) === `business_account_is_employee`) throw new D(h.b2b_error_business_is_employee(), t.status)
      }
      if (t.status === T.NOT_FOUND) throw new D(h.b2b_user_not_found(), t.status);
      if (t.status !== T.NO_CONTENT) throw new D(h.b2b_convert_failed(), t.status)
    }
    async setAdminB2BInfiniteCharges(e, t) {
      let n = await this.request(`/staff/dashboard/businesses/${e}/charges`, {
        method: `PATCH`,
        credentials: `include`,
        body: JSON.stringify({
          infinite: t
        })
      });
      if (n.status !== T.OK) throw new D(h.b2b_update_charges_failed(), n.status);
      return (await n.json()).infinite
    }
    async setAdminB2BPaintRestrictions(e, t) {
      let n = await this.request(`/staff/dashboard/businesses/${e}/paint-restrictions`, {
        method: `PATCH`,
        credentials: `include`,
        body: JSON.stringify(t)
      });
      if (n.status !== T.OK) throw new D(h.b2b_update_paint_restrictions_failed(), n.status);
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
      if (n.status === T.CONFLICT || n.status === T.BAD_REQUEST) {
        var r;
        let e = await n.json().catch(() => null),
          t = {
            business_account_is_employee: h.b2b_error_business_is_employee,
            employee_account_is_business: h.b2b_error_employee_is_business,
            business_cannot_be_its_own_employee: h.b2b_error_same_account
          };
        throw new D(((r = t[(e == null ? void 0 : e.error) ?? ``]) == null ? void 0 : r.call(t)) ?? h.b2b_assign_failed(), n.status)
      }
      if (n.status === T.NOT_FOUND) throw new D(h.b2b_user_not_found(), n.status);
      if (n.status !== T.NO_CONTENT) throw new D(h.b2b_assign_failed(), n.status)
    }
    async removeAdminB2BEmployee(e, t) {
      let n = await this.request(`/staff/dashboard/businesses/${e}/employees/${t}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (n.status === T.CONFLICT) throw new D(h.b2b_employee_not_assigned(), n.status);
      if (n.status !== T.NO_CONTENT) throw new D(h.b2b_remove_failed(), n.status)
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
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
      if (n.status === T.BAD_REQUEST) {
        let e = await n.json(),
          t = (e == null ? void 0 : e.error) ?? ``;
        throw t === `invalid_name` ? new D(h.invalid_name(), T.BAD_REQUEST) : new D(typeof t == `string` && t ? t : h.unexpected_server_error(), T.BAD_REQUEST)
      }
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status)
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
      if (n.status === T.BAD_REQUEST) {
        let e = await n.json(),
          t = (e == null ? void 0 : e.error) ?? ``;
        throw t === `email_required` || t === `invalid_email` ? new D(h.enter_valid_email_address(), T.BAD_REQUEST) : new D(typeof t == `string` && t ? t : h.unexpected_server_error(), T.BAD_REQUEST)
      }
      if (n.status === T.CONFLICT) {
        let e = await n.json();
        if (((e == null ? void 0 : e.error) ?? ``) === `email_already_in_use`) {
          let t = new D(typeof(e == null ? void 0 : e.userId) == `number` ? h.email_already_in_use_by_user({
            userId: e.userId
          }) : h.email_already_in_use(), T.CONFLICT);
          throw typeof(e == null ? void 0 : e.userId) == `number` && (t.userId = e.userId), t
        }
        throw new D(h.unexpected_server_error(), T.CONFLICT)
      }
      if (n.status === T.NOT_FOUND) throw new D(`User not found.`, T.NOT_FOUND);
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status)
    }
    async getAdminUserProfilePictures(e) {
      let t = await this.request(`/staff/dashboard/users/profile-pictures?userId=${e}`, {
        credentials: `include`
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
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
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status)
    }
    async postAdminRerollUserAvatar(e) {
      let t = await this.request(`/staff/dashboard/users/reroll-avatar`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userId: e
        })
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
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
      if (r.status !== T.OK) throw new D(h.unexpected_server_error(), r.status)
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
      if (r.status !== T.OK) throw new D(h.unexpected_server_error(), r.status)
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
      if (r.status !== T.OK) throw new D(h.unexpected_server_error(), r.status)
    }
    async reloadPunishmentCache() {
      let e = await this.request(`/staff/dashboard/summary/reload-punishment-cache`, {
        method: `POST`,
        credentials: `include`
      });
      if (e.status === T.CONFLICT) throw new D(h.punishment_cache_reload_already_running(), e.status);
      if (e.status !== T.OK && e.status !== T.ACCEPTED) throw new D(h.unexpected_server_error(), e.status)
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status)
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status)
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
      if (r.status !== T.OK) throw new D(h.unexpected_server_error(), r.status)
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
      return await n.json()
    }
    async getAuditLogs(e) {
      let t = new URLSearchParams;
      e.query && t.set(`query`, e.query), e.actorUserId !== void 0 && t.set(`actorUserId`, String(e.actorUserId)), e.targetUserId !== void 0 && t.set(`targetUserId`, String(e.targetUserId)), e.targetType && t.set(`targetType`, e.targetType), e.targetId && t.set(`targetId`, e.targetId), e.action && t.set(`action`, e.action), e.outcome && t.set(`outcome`, e.outcome), e.actorRole && t.set(`actorRole`, e.actorRole), e.from && t.set(`from`, e.from), e.to && t.set(`to`, e.to), e.sortKey && t.set(`sortKey`, e.sortKey), e.sortDir && t.set(`sortDir`, e.sortDir), t.set(`limit`, String(e.limit)), t.set(`offset`, String(e.offset));
      let n = await this.request(`/staff/dashboard/audit-logs/see?${t.toString()}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
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
        })).status !== T.OK) throw Error(h.unexpected_server_error())
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
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
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status)
    }
    async postReportAllianceName(e) {
      let t = await this.request(`/report/alliance/name`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          allianceId: e
        })
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
      return t.json()
    }
  }
}
var O = {
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
    permissions: {
      dashboard: {
        summary: {
          counters: {
            tickets: `staff.dashboard.summary.counters.tickets`,
            reports: `staff.dashboard.summary.counters.reports`
          },
          events: {
            status: `staff.dashboard.summary.events.status`,
            start: `staff.dashboard.summary.events.start`,
            stop: `staff.dashboard.summary.events.stop`,
            anchors: `staff.dashboard.summary.events.anchors`
          },
          users: {
            ban: `staff.dashboard.summary.users.ban`,
            timeout: `staff.dashboard.summary.users.timeout`,
            unban: `staff.dashboard.summary.users.unban`,
            incrementDroplets: `staff.dashboard.summary.users.increment_droplets`,
            phoneVerification: `staff.dashboard.summary.users.phone_verification`
          },
          reloadPunishmentCache: `staff.dashboard.summary.reload_punishment_cache`
        },
        team: {
          tickets: `staff.dashboard.team.tickets`,
          reports: `staff.dashboard.team.reports`
        },
        users: {
          info: `staff.dashboard.users.info`,
          rename: `staff.dashboard.users.rename`,
          notesGet: `staff.dashboard.users.notes_get`,
          notesSet: `staff.dashboard.users.notes_set`,
          purchases: `staff.dashboard.users.purchases`,
          ticketsHistory: `staff.dashboard.users.tickets_history`,
          ticketsStats: `staff.dashboard.users.tickets_stats`,
          appealsHistory: `staff.dashboard.users.appeals_history`,
          timeout: `staff.dashboard.users.timeout`,
          removeTimeout: `staff.dashboard.users.remove_timeout`,
          ban: `staff.dashboard.users.ban`,
          removeBan: `staff.dashboard.users.remove_ban`,
          autoReviewBan: `staff.dashboard.users.auto_review_ban`,
          personalInformation: `staff.dashboard.users.personal_information`,
          editEmail: `staff.dashboard.users.edit_email`,
          disconnect: `staff.dashboard.users.disconnect`,
          setDroplets: `staff.dashboard.users.set_droplets`,
          setPrism: `staff.dashboard.users.set_prism`,
          phoneVerification: `staff.dashboard.users.phone_verification`,
          removePicture: `staff.dashboard.users.remove_picture`
        },
        businesses: {
          see: `staff.dashboard.businesses.see`,
          manage: `staff.dashboard.businesses.manage`
        },
        permissions: {
          get: `staff.dashboard.permissions.get`,
          set: `staff.dashboard.permissions.set`
        },
        alliances: {
          search: `staff.dashboard.alliances.search`,
          details: `staff.dashboard.alliances.details`,
          members: `staff.dashboard.alliances.members`,
          rename: `staff.dashboard.alliances.rename`,
          leader: `staff.dashboard.alliances.leader`,
          banAll: `staff.dashboard.alliances.ban_all`,
          role: `staff.dashboard.alliances.role`,
          removeMember: `staff.dashboard.alliances.remove_member`,
          restore: `staff.dashboard.alliances.restore`,
          moderate: `staff.dashboard.alliances.moderate`,
          punish: `staff.dashboard.alliances.punish`
        },
        auditLogs: {
          see: `staff.dashboard.audit_logs.see`,
          events: {
            timeout: `staff.dashboard.audit_logs.events.timeout`,
            ban: `staff.dashboard.audit_logs.events.ban`,
            changeDroplets: `staff.dashboard.audit_logs.events.change_droplets`,
            changePrism: `staff.dashboard.audit_logs.events.change_prism`,
            removeTimeout: `staff.dashboard.audit_logs.events.remove_timeout`,
            removeBan: `staff.dashboard.audit_logs.events.remove_ban`,
            manualTimeout: `staff.dashboard.audit_logs.events.manual_timeout`,
            manualBan: `staff.dashboard.audit_logs.events.manual_ban`,
            manualChangeDroplets: `staff.dashboard.audit_logs.events.manual_change_droplets`,
            manualRemoveBan: `staff.dashboard.audit_logs.events.manual_remove_ban`,
            manualPhoneVerification: `staff.dashboard.audit_logs.events.manual_phone_verification`,
            anticheatBan: `staff.dashboard.audit_logs.events.anticheat_ban`,
            anticheatRemoveBan: `staff.dashboard.audit_logs.events.anticheat_remove_ban`,
            deleteAllSessions: `staff.dashboard.audit_logs.events.delete_all_sessions`,
            permissionsUpdate: `staff.dashboard.audit_logs.events.permissions_update`,
            changeUsername: `staff.dashboard.audit_logs.events.change_username`,
            banWave: `staff.dashboard.audit_logs.events.ban_wave`,
            changeEmail: `staff.dashboard.audit_logs.events.change_email`,
            acceptAppeal: `staff.dashboard.audit_logs.events.accept_appeal`,
            denyAppeal: `staff.dashboard.audit_logs.events.deny_appeal`,
            revertTicketRequest: `staff.dashboard.audit_logs.events.revert_ticket_request`,
            revertTicketApprove: `staff.dashboard.audit_logs.events.revert_ticket_approve`,
            revertTicketDeny: `staff.dashboard.audit_logs.events.revert_ticket_deny`,
            removePicture: `staff.dashboard.audit_logs.events.remove_picture`,
            rerollAvatar: `staff.dashboard.audit_logs.events.reroll_avatar`,
            resolveTicket: `staff.dashboard.audit_logs.events.re_solve_ticket`,
            reviewTicket: `staff.dashboard.audit_logs.events.review_ticket`,
            autoReviewBanRemoveBan: `staff.dashboard.audit_logs.events.auto_review_ban_remove_ban`,
            resolveAccountConflict: `staff.dashboard.audit_logs.events.resolve_account_conflict`,
            allianceModeration: `staff.dashboard.audit_logs.events.alliance_moderation`,
            userNoteCreated: `staff.dashboard.audit_logs.events.user_note_created`,
            ticketAssigned: `staff.dashboard.audit_logs.events.ticket_assigned`,
            ticketResolved: `staff.dashboard.audit_logs.events.ticket_resolved`,
            appealAssigned: `staff.dashboard.audit_logs.events.appeal_assigned`,
            punishmentCacheReloadRequested: `staff.dashboard.audit_logs.events.punishment_cache_reload_requested`,
            canvasPixelBatchQueued: `staff.dashboard.audit_logs.events.canvas_pixel_batch_queued`,
            canvasAreaReversed: `staff.dashboard.audit_logs.events.canvas_area_reversed`,
            canvasAutoPaintQueued: `staff.dashboard.audit_logs.events.canvas_auto_paint_queued`,
            cosmeticCreated: `staff.dashboard.audit_logs.events.cosmetic_created`,
            cosmeticUpdated: `staff.dashboard.audit_logs.events.cosmetic_updated`,
            cosmeticDeleted: `staff.dashboard.audit_logs.events.cosmetic_deleted`,
            badgeCreated: `staff.dashboard.audit_logs.events.badge_created`,
            badgeUpdated: `staff.dashboard.audit_logs.events.badge_updated`,
            badgeDeleted: `staff.dashboard.audit_logs.events.badge_deleted`,
            storeImageUploaded: `staff.dashboard.audit_logs.events.store_image_uploaded`,
            storeImageDeleted: `staff.dashboard.audit_logs.events.store_image_deleted`,
            businessInfiniteChargesUpdated: `staff.dashboard.audit_logs.events.business_infinite_charges_updated`,
            businessMembershipUpdated: `staff.dashboard.audit_logs.events.business_membership_updated`,
            businessPaintRestrictionsUpdated: `staff.dashboard.audit_logs.events.business_paint_restrictions_updated`
          }
        },
        banAppeals: {
          see: `staff.dashboard.ban_appeals.see`
        },
        kpi: {
          tickets: `staff.dashboard.kpi.tickets`
        },
        allTickets: {
          see: `staff.dashboard.all_tickets.see`,
          review: `staff.dashboard.all_tickets.review`
        },
        storeManager: {
          frames: `staff.dashboard.store_manager.frames`,
          fonts: `staff.dashboard.store_manager.fonts`,
          styles: `staff.dashboard.store_manager.styles`,
          badges: `staff.dashboard.store_manager.badges`
        },
        anticheat: {
          see: `staff.dashboard.anticheat.see`,
          unban: `staff.dashboard.anticheat.unban`,
          ban: `staff.dashboard.anticheat.ban`
        }
      },
      tickets: {
        assign: `staff.tickets.assign`,
        closedToday: `staff.tickets.closed_today`,
        openCount: `staff.tickets.open_count`,
        translate: `staff.tickets.translate`,
        setStatus: `staff.tickets.set_status`,
        revert: `staff.tickets.revert`,
        revertReview: `staff.tickets.revert_review`,
        reSolve: `staff.tickets.re_solve`
      },
      appeals: {
        assign: `staff.appeals.assign`,
        openCount: `staff.appeals.open_count`,
        ticketsHistory: `staff.appeals.tickets_history`,
        notes_get: `staff.appeals.notes_get`,
        notes_set: `staff.appeals.notes_set`,
        translate: `staff.appeals.translate`,
        solve: `staff.appeals.solve`
      },
      tools: {
        selectArea: {
          timeout: `staff.tools.select_area.timeout`,
          ban: `staff.tools.select_area.ban`,
          clear: `staff.tools.select_area.clear`,
          info: `staff.tools.select_area.info`,
          phoneVerification: `staff.tools.select_area.phone_verification`,
          reverse: `staff.tools.select_area.reverse`,
          timelapse: `staff.tools.select_area.timelapse`
        },
        selectPixel: {
          timeout: `staff.tools.select_pixel.timeout`,
          ban: `staff.tools.select_pixel.ban`,
          seeRole: `staff.tools.select_pixel.see_role`,
          seePunishment: `staff.tools.select_pixel.see_punishment`
        },
        autoPainter: {
          paint: `staff.tools.auto_painter.paint`,
          transparent: `staff.tools.auto_painter.transparent`,
          noCharges: `staff.tools.auto_painter.no_charges`,
          asUser: `staff.tools.auto_painter.as_user`,
          noSizeLimit: `staff.tools.auto_painter.no_size_limit`
        },
        wayback: `staff.tools.wayback`
      },
      ui: {
        themeDarkMode: `staff.ui.theme.dark_mode`,
        tooglePixelArt: `staff.ui.toggle_pixel_art`
      },
      cosmetics: {
        viewCosmetics: `staff.cosmetics.view_cosmetics`,
        manageCosmetics: `staff.cosmetics.manage_cosmetics`,
        assignCosmetics: `staff.cosmetics.assign_cosmetics`
      }
    },
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
    voidEvent: {
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
    }
  },
  k = O,
  Ut = O.seasons,
  Wt = O.seasons.length - 1,
  Gt = O.seasons[Wt].zoom,
  Kt = O.seasons[Wt].tileSize,
  qt = O.permissions,
  Jt = O.settings,
  Yt = O.platforms.android,
  Xt = Yt.googlePlayBilling.price;

function Zt(e) {
  return k.countries[e - 1]
}

function A(e) {
  return A.map.get(e)
}(function(e) {
  e.map = Qt(e.sharedProducts = Object.entries(k.products).map(([e, t]) => ({
    ...t,
    productId: e
  })).filter(e => `lookupKey` in e), e => e.lookupKey)
})(A || (A = {}));

function Qt(e, t) {
  let n = new Map;
  for (let r in e) {
    let i = Reflect.get(e, r),
      a = t(i, r, e);
    n.set(a, i)
  }
  return n
}
var j = 5e3,
  $t = 4,
  M = 64,
  en = 8;

function N(e) {
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

function tn(e) {
  let t = e.maxX - e.minX + 1,
    n = e.maxY - e.minY + 1;
  if (t <= 0 || n <= 0) return [];
  let r = Math.min(t, j),
    i = Math.max(1, Math.floor(j / r)),
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

function nn(e) {
  let t = [],
    n = Math.floor(e.minX / M),
    r = Math.floor(e.maxX / M),
    i = Math.floor(e.minY / M),
    a = Math.floor(e.maxY / M);
  for (let o = i; o <= a; o += 1)
    for (let i = n; i <= r; i += 1) t.push({
      minX: Math.max(e.minX, i * M),
      minY: Math.max(e.minY, o * M),
      maxX: Math.min(e.maxX, (i + 1) * M - 1),
      maxY: Math.min(e.maxY, (o + 1) * M - 1)
    });
  return t
}

function rn(e) {
  let t = (e == null ? void 0 : e.role) ?? (e == null ? void 0 : e.alliance_role);
  return t === `mod` || t === `admin` || t === `leader` ? t : `member`
}

function an(e) {
  return class extends e {
    async getAlliance() {
      let e = await this.request(`/alliance`, {
        credentials: `include`
      });
      if (e.status === T.OK) return e.json();
      if (e.status !== T.NOT_FOUND) throw Error(h.unexpected_server_error())
    }
    async createAlliance(e) {
      let t = await this.request(`/alliance`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          name: e
        })
      });
      if (t.status === T.OK) return t.json();
      if (t.status === T.BAD_REQUEST) {
        let e = await t.json();
        throw e.error === `max_characters` ? new D(h.alliance_name_exceeded_the_maximum_number_of_characters(), t.status) : e.error === `name_taken` ? new D(h.alliance_name_already_taken(), t.status) : e.error == `empty_name` ? new D(h.alliance_with_empty_name(), t.status) : new D(h.unexpected_server_error(), t.status)
      }
      throw t.status === T.FORBIDDEN ? (await t.json().catch(() => ({}))).error === `not_enough_droplets` ? Error(h.not_enough_droplets()) : Error(h.you_are_already_in_an_alliance()) : Error(h.unexpected_server_error())
    }
    async leaveAlliance() {
      if ((await this.request(`/alliance/leave`, {
          method: `POST`,
          credentials: `include`
        })).status !== T.OK) throw Error(h.unexpected_server_error())
    }
    async updateAllianceDescription(e) {
      let t = await this.request(`/alliance/update-description`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          description: e
        })
      });
      if (t.status === T.OK) return t.json();
      if (t.status === T.FORBIDDEN) throw Error(h.you_are_not_allowed_to_do_this());
      if (t.status === T.BAD_REQUEST) {
        let e = await t.json().catch(() => ({}));
        throw Error(e.error === `invalid_markdown` ? h.alliance_description_invalid_markdown() : h.exceeded_max_chars())
      }
      throw t.status === T.CONFLICT ? Error(h.alliance_description_credit_required()) : Error(h.unexpected_server_error())
    }
    async getAllianceStore() {
      let e = await this.request(`/alliance/store`, {
        credentials: `include`
      });
      if (e.status === T.OK) return e.json();
      throw Error(h.unexpected_server_error())
    }
    async getAllianceCoinLedger(e) {
      let t = e ? `?before=${e}` : ``,
        n = await this.request(`/alliance/economy/ledger${t}`, {
          credentials: `include`
        });
      if (n.status === T.OK) return n.json();
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
      if (n.status === T.OK) return n.json();
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
      if (t.status === T.OK) return t.json();
      let n = await t.json().catch(() => ({}));
      throw n.error === `not_enough_alliance_coins` ? Error(h.alliance_not_enough_coins()) : n.error === `already_unlocked` ? Error(h.alliance_already_unlocked()) : n.error === `headquarters_not_unlocked` ? Error(h.alliance_hq_not_unlocked()) : n.error === `headquarters_upgrade_prerequisite` ? Error(h.alliance_hq_upgrade_prerequisite()) : n.error === `template_upgrade_prerequisite` ? Error(h.alliance_template_upgrade_prerequisite()) : Error(h.unexpected_server_error())
    }
    async getAllianceTemplates(e) {
      let t = new URLSearchParams;
      e && (t.set(`target`, e.target), e.draftId !== void 0 && t.set(`draftId`, String(e.draftId)));
      let n = await this.request(`/alliance/templates${t.size?`?${t}`:``}`, {
        credentials: `include`
      });
      if (n.status === T.OK) {
        let e = await n.json();
        return {
          ...e,
          templates: (e.templates ?? []).map(N),
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
      if (r.status === T.CREATED || r.status === T.OK) return N(await r.json());
      let i = await r.json().catch(() => ({}));
      throw i.error === `template_limit_reached` ? Error(h.alliance_template_limit_reached()) : i.error === `template_storage_limit_reached` ? Error(h.alliance_template_storage_limit_reached()) : i.error === `invalid_template_image` ? Error(h.alliance_template_invalid_image()) : i.error === `template_upload_rate_limited` ? Error(h.alliance_template_upload_rate_limited()) : r.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
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
      if (n.status === T.OK) return N(await n.json());
      throw (await n.json().catch(() => ({}))).error === `template_upload_rate_limited` ? Error(h.alliance_template_upload_rate_limited()) : n.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
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
      if (n.status === T.OK) return n.json();
      let r = await n.json().catch(() => ({}));
      throw r.error === `invalid_template_placement` ? Error(h.alliance_template_invalid_placement()) : r.error === `template_location_not_selected` ? Error(h.alliance_template_location_not_selected()) : n.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async updateAllianceTemplate(e, t) {
      let n = new FormData;
      n.set(`name`, t.name), n.set(`audienceAllMembers`, String(t.audienceAllMembers)), n.set(`audienceRoles`, JSON.stringify(t.audienceRoles ?? [])), n.set(`audienceUserIds`, JSON.stringify(t.audienceUserIds ?? [])), n.set(`locations`, JSON.stringify(t.locations)), n.set(`opacity`, String(t.opacity)), n.set(`colorMetric`, t.colorMetric), n.set(`dithering`, String(t.dithering)), n.set(`colorPaletteMode`, t.colorPaletteMode), n.set(`pixelMode`, t.pixelMode), n.set(`image`, t.image, `alliance-template.png`);
      let r = await this.request(`/alliance/templates/${e}`, {
        method: `PUT`,
        credentials: `include`,
        body: n
      });
      if (r.status === T.OK) return N(await r.json());
      let i = await r.json().catch(() => ({}));
      throw i.error === `template_storage_limit_reached` ? Error(h.alliance_template_storage_limit_reached()) : i.error === `invalid_template_image` ? Error(h.alliance_template_invalid_image()) : i.error === `template_upload_rate_limited` ? Error(h.alliance_template_upload_rate_limited()) : r.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async deleteAllianceTemplate(e) {
      let t = await this.request(`/alliance/templates/${e}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== T.NO_CONTENT) throw t.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
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
      if (t.status === T.OK) return t.json();
      let n = await t.json().catch(() => ({}));
      throw n.error === `not_enough_alliance_coins` ? Error(h.alliance_not_enough_coins()) : n.error === `name_taken` ? Error(h.alliance_name_already_taken()) : n.error === `name_unchanged` ? Error(h.alliance_name_unchanged()) : n.error === `max_characters` ? Error(h.alliance_name_exceeded_the_maximum_number_of_characters()) : Error(h.unexpected_server_error())
    }
    async getAllianceAssets(e) {
      let t = await this.request(`/alliance/assets/${e}`, {
        credentials: `include`
      });
      if (t.status === T.OK) return t.json();
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
      if (n.status === T.OK) return n.json();
      throw (await n.json().catch(() => ({}))).error === `not_enough_alliance_coins` ? Error(h.alliance_not_enough_coins()) : Error(h.unexpected_server_error())
    }
    async getAllianceAssetCanvas(e) {
      let t = await this.request(`/alliance/assets/drafts/${e}/canvas`, {
        credentials: `include`
      });
      if (t.status === T.OK) return t.json();
      throw Error(h.unexpected_server_error())
    }
    async getAllianceAssetRevision(e) {
      let t = await this.request(`/alliance/assets/drafts/${e}/canvas?metadataOnly=true`, {
        credentials: `include`
      });
      if (t.status === T.OK) return t.json();
      if (t.status !== T.FORBIDDEN && t.status !== T.NOT_FOUND) throw Error(h.unexpected_server_error())
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
          throw e instanceof E ? new E(h.alliance_asset_paint_rate_limited()) : e
        });
      if (r.status === T.OK) return r.json();
      let i = await r.json().catch(() => ({}));
      if (i.error === `challenge-required` && i.tier) {
        if (await C(i.tier)) return this.paintAllianceAsset(e, t);
        throw Error(h.challenge_verification_not_completed())
      }
      if (i.error === `verification-required`) {
        let n = await f().get();
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
      if (n.status === T.OK) return n.json();
      throw Error(h.unexpected_server_error())
    }
    async equipAllianceAssetVersion(e) {
      if ((await this.request(`/alliance/assets/versions/${e}/select`, {
          method: `POST`,
          credentials: `include`
        })).status !== T.OK) throw Error(h.unexpected_server_error())
    }
    async unequipAllianceAsset(e) {
      if ((await this.request(`/alliance/assets/${e}/unpublish`, {
          method: `POST`,
          credentials: `include`
        })).status !== T.OK) throw Error(h.unexpected_server_error())
    }
    async deleteAllianceAssetVersion(e) {
      let t = await this.request(`/alliance/assets/versions/${e}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw (await t.json().catch(() => ({}))).error === `asset_version_selected` ? Error(h.alliance_asset_unequip_before_delete()) : Error(h.unexpected_server_error())
    }
    async getAllianceAssetEditors(e) {
      let t = await this.request(`/alliance/assets/drafts/${e}/editors`, {
        credentials: `include`
      });
      if (t.status === T.OK) return t.json();
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
      if (n.status !== T.OK) throw (await n.json().catch(() => ({}))).error === `editor_already_granted` ? Error(h.alliance_asset_editor_already_added()) : Error(h.unexpected_server_error())
    }
    async revokeAllianceAssetEditor(e, t) {
      if ((await this.request(`/alliance/assets/drafts/${e}/editors/${t}`, {
          method: `DELETE`,
          credentials: `include`
        })).status !== T.OK) throw Error(h.unexpected_server_error())
    }
    async copyAllianceAssetEditors(e, t) {
      let n = await this.request(`/alliance/assets/drafts/${e}/editors/copy`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          sourceDraftId: t
        })
      });
      if (n.status === T.OK) return n.json();
      throw Error(h.unexpected_server_error())
    }
    async getAllianceAwards(e, t = 0) {
      let n = await this.request(`/alliances/${e}/awards?page=${t}`, {});
      if (n.status === T.OK) return n.json();
      throw Error(h.unexpected_server_error())
    }
    async setAllianceFeaturedAwards(e) {
      if ((await this.request(`/alliance/awards/featured`, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify({
            awardKeys: e
          })
        })).status !== T.OK) throw Error(h.unexpected_server_error())
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
      if (n.status === T.OK) return;
      if (n.status === T.FORBIDDEN) throw Error(h.you_are_not_allowed_to_do_this());
      let r = await n.json().catch(() => ({}));
      throw r.error === `headquarters_credit_required` ? Error(h.alliance_hq_credit_required()) : r.error === `headquarters_not_unlocked` ? Error(h.alliance_hq_not_unlocked()) : Error(h.unexpected_server_error())
    }
    async getAllianceHeadquarters() {
      let e = await this.request(`/alliance/headquarters`, {
        credentials: `include`
      });
      if (e.status === T.OK) return e.json();
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
      if (r.status === T.OK) return r.json();
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
      if (i.status === T.OK) return i.json();
      throw new D(h.unexpected_server_error(), i.status)
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
      if (a.status === T.OK) return a.arrayBuffer();
      throw new D(h.unexpected_server_error(), a.status)
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
      if (t.status === T.OK) return t.json();
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
      if (t.status === T.OK) return t.json();
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
          throw e instanceof E ? new E(h.alliance_asset_paint_rate_limited()) : e
        });
      if (r.status === T.OK) return r.json();
      let i = await r.json().catch(() => ({}));
      if (i.error === `challenge-required` && i.tier) {
        if (await C(i.tier)) return this.paintAllianceHeadquarters(e, t);
        throw Error(h.challenge_verification_not_completed())
      }
      if (i.error === `verification-required`) {
        let n = await f().get();
        if (!n.sealed_result) throw Error(h.unexpected_server_error());
        return await this.verifyAnticheat(n.sealed_result), this.paintAllianceHeadquarters(e, t)
      }
      throw i.error === `color-not-owned` ? Error(h.alliance_better_pallet_required()) : i.error === `not_enough_hq_charges` ? Error(h.alliance_hq_not_enough_charges()) : i.error === `headquarters_timed_out` ? Error(h.alliance_hq_timed_out_error()) : i.error === `headquarters_locked` ? Error(h.alliance_hq_locked()) : i.error === `no_pixel_changes` ? Error(h.alliance_hq_no_pixel_changes()) : Error(h.unexpected_server_error())
    }
    async getAllianceHqPixelInfo(e, t) {
      let n = await this.request(`/alliance/headquarters/pixel?x=${e}&y=${t}`, {
        credentials: `include`
      });
      if (n.status === T.OK) return n.json();
      throw Error(h.unexpected_server_error())
    }
    async getAllianceHqLeaderboard(e) {
      let t = await this.request(`/alliance/headquarters/leaderboard/${e}`, {
        credentials: `include`
      });
      if (t.status === T.OK) return t.json();
      throw t.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.alliance_hq_leaderboard_load_failed())
    }
    async getAllianceHqTimeouts(e) {
      let t = e ? `?before=${e}` : ``,
        n = await this.request(`/alliance/headquarters/timeouts${t}`, {
          credentials: `include`
        });
      if (n.status === T.OK) return n.json();
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
      if (r.status === T.OK) return r.json();
      if (r.status === T.FORBIDDEN) throw Error(h.you_are_not_allowed_to_do_this());
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
      if (n.status === T.OK) return;
      if (n.status === T.FORBIDDEN) throw Error(h.you_are_not_allowed_to_do_this());
      let r = await n.json().catch(() => ({}));
      throw r.error === `headquarters_timeout_inactive` ? Error(h.alliance_hq_timeout_inactive()) : r.error === `invalid_timeout_reason` ? Error(h.alliance_hq_timeout_reason_required()) : Error(h.unexpected_server_error())
    }
    async getPublicAllianceHeadquarters(e) {
      let t = await this.request(`/alliances/${e}/headquarters`, {});
      if (t.status === T.OK) return t.json();
      if (t.status !== T.NOT_FOUND) throw Error(h.unexpected_server_error())
    }
    async allianceLeaderboard(e) {
      let t = await this.request(`/alliance/leaderboard/${e}`, {
        credentials: `include`
      });
      if (t.status === T.OK) return t.json();
      throw t.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.leaderboard_disabled_temporarily())
    }
    async getAllianceInvites() {
      let e = await this.request(`/alliance/invites`, {
        credentials: `include`
      });
      if (e.status === T.OK) return e.json();
      throw e.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
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
      if (t.status === T.OK) return t.json();
      throw t.status === T.BAD_REQUEST ? (await t.json().catch(() => ({}))).error === `max_invites` ? Error(h.alliance_invite_limit_reached()) : Error(h.unexpected_server_error()) : t.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async revokeAllianceInvite(e) {
      let t = await this.request(`/alliance/invites/${e}/revoke`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw t.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async getAllianceGallery(e) {
      let t = new URLSearchParams({
        sort: e.sort,
        page: String(e.page)
      });
      e.query && t.set(`q`, e.query), e.joinPolicy && t.set(`joinPolicy`, e.joinPolicy);
      let n = await this.request(`/alliances?${t.toString()}`, {});
      if (n.status === T.OK) return n.json();
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
      if (n.status === T.OK) return n.json();
      throw Error(h.unexpected_server_error())
    }
    async getPublicAlliance(e) {
      let t = await this.request(`/alliances/${e}`, {});
      if (t.status === T.OK) return t.json();
      if (t.status !== T.NOT_FOUND) throw Error(h.unexpected_server_error())
    }
    async getPublicAllianceMembers(e, t) {
      let n = new URLSearchParams({
        page: String(t.page),
        role: t.role,
        sort: t.sort
      });
      t.query && n.set(`q`, t.query);
      let r = await this.request(`/alliances/${e}/members?${n.toString()}`, {});
      if (r.status === T.OK) return r.json();
      throw Error(h.unexpected_server_error())
    }
    async getAllianceViewerState(e) {
      let t = await this.request(`/alliances/${e}/viewer`, {
        credentials: `include`
      });
      if (t.status === T.OK) return t.json();
      if (t.status !== T.UNAUTHORIZED) throw Error(h.unexpected_server_error())
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
      return t.status === T.TOO_MANY_REQUESTS ? `cooldown` : this.mapJoinOutcome(t)
    }
    async mapJoinOutcome(e) {
      switch (e.status) {
        case T.OK:
          return `success`;
        case T.FORBIDDEN:
          return (await e.json().catch(() => ({}))).error === `banned` ? `banned` : `policy`;
        case T.CONFLICT:
          return `in-alliance`;
        case T.NOT_FOUND:
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
      if (t.status !== T.OK && t.status !== T.CONFLICT) throw Error(h.unexpected_server_error())
    }
    async getAllianceJoinRequests(e) {
      let t = await this.request(`/alliance/join-requests?page=${e}`, {
        credentials: `include`
      });
      if (t.status === T.OK) return t.json();
      throw t.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async reviewAllianceJoinRequest(e, t) {
      let n = await this.request(`/alliance/join-requests/${e}/review`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          accept: t
        })
      });
      if (n.status === T.OK) return `success`;
      if (n.status === T.CONFLICT) return `stale`;
      throw n.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async kickAllianceMember(e) {
      let t = await this.request(`/alliance/kick`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          kickedUserId: e
        })
      });
      if (t.status !== T.OK) throw t.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async removeAllianceAdmin(e) {
      let t = await this.request(`/alliance/remove-admin`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          demotedUserId: e
        })
      });
      if (t.status !== T.OK) throw t.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async setOwnAllianceMemberRole(e, t) {
      let n = await this.request(`/alliance/members/${e}/role`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          role: t
        })
      });
      if (n.status !== T.OK) throw n.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async getAllianceRolePermissions() {
      let e = await this.request(`/alliance/role-permissions`, {
        credentials: `include`
      });
      if (e.status === T.OK) return e.json();
      throw e.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async updateAllianceRolePermissions(e) {
      let t = await this.request(`/alliance/role-permissions`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          roles: e
        })
      });
      if (t.status !== T.OK) throw t.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async transferAllianceLeadership(e) {
      let t = await this.request(`/alliance/transfer-leadership`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          newLeaderUserId: e
        })
      });
      if (t.status !== T.OK) throw t.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async updateAllianceSettings(e) {
      let t = await this.request(`/alliance/settings`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== T.OK) throw t.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async setAllianceDiscordInvite(e) {
      let t = await this.request(`/alliance/discord-invite`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          url: e
        })
      });
      if (t.status !== T.OK) throw t.status === T.BAD_REQUEST ? Error(h.alliance_discord_invite_invalid()) : t.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async getAllianceActivity(e) {
      let t = e ? `?cursor=${e}` : ``,
        n = await this.request(`/alliance/activity${t}`, {
          credentials: `include`
        });
      if (n.status === T.OK) return n.json();
      throw n.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async getAllianceNotificationPreferences() {
      let e = await this.request(`/alliance/notification-preferences`, {
        credentials: `include`
      });
      if (e.status === T.OK) return e.json();
      throw Error(h.unexpected_server_error())
    }
    async setAllianceNotificationPreference(e, t) {
      if ((await this.request(`/alliance/notification-preferences`, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify({
            category: e,
            enabled: t
          })
        })).status !== T.OK) throw Error(h.unexpected_server_error())
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
      if (n.status === T.OK) return n.json();
      if (n.status === T.FORBIDDEN) {
        let t = await n.json().catch(() => ({}));
        if (t.error === `challenge-required` && t.tier) {
          if (await C(t.tier)) return this.reportAlliance(e);
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
        case T.OK:
          return `success`;
        case T.ALREADY_REPORTED:
          return `in-another-alliance`;
        case T.UNAUTHORIZED:
          return `not-logged-in`;
        case T.FORBIDDEN:
          return `banned`;
        case T.BAD_REQUEST:
        case T.NOT_FOUND:
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
      if (n.status === T.OK) return n.json();
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
      if (n.status === T.OK) return n.json();
      throw Error(h.unexpected_server_error())
    }
    async getAllianceById(e) {
      let t = await this.request(`/staff/dashboard/alliances/${e}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status === T.NOT_FOUND) return;
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
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
      if (t.status === T.OK) return t.json();
      throw Error(h.unexpected_server_error())
    }
    async getAdminAllianceAssets(e) {
      let t = await this.request(`/staff/dashboard/alliances/${e}/assets`, {
        credentials: `include`
      });
      if (t.status === T.OK) return t.json();
      throw Error(h.unexpected_server_error())
    }
    async getAdminAllianceAssetEvents(e, t, n) {
      let r = n ? `?before=${n}` : ``,
        i = await this.request(`/staff/dashboard/alliances/${e}/assets/drafts/${t}/events${r}`, {
          credentials: `include`
        });
      if (i.status === T.OK) return i.json();
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
        })).status !== T.OK) throw Error(h.unexpected_server_error())
    }
    async moderateAdminAllianceAssetDraft(e, t, n, r) {
      if ((await this.request(`/staff/dashboard/alliances/${e}/assets/drafts/${t}/moderation`, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify({
            ...n,
            reason: r
          })
        })).status !== T.OK) throw Error(h.unexpected_server_error())
    }
    async getAllianceHqWaybackEvents(e, t) {
      let n = new URLSearchParams;
      n.set(`limit`, String((t == null ? void 0 : t.limit) ?? Jt.tools.wayback.hqLimit)), t != null && t.before && n.set(`before`, String(t.before)), t != null && t.area && (n.set(`minX`, String(t.area.minX)), n.set(`minY`, String(t.area.minY)), n.set(`maxX`, String(t.area.maxX)), n.set(`maxY`, String(t.area.maxY)));
      let r = await this.request(`/staff/dashboard/alliances/${e}/headquarters/events?${n.toString()}`, {
        credentials: `include`
      });
      if (r.status === T.NOT_FOUND) throw Error(h.alliances_not_found());
      if (r.status !== T.OK) throw Error(h.unexpected_server_error());
      return r.json()
    }
    async getAdminAllianceHqArea(e, t) {
      let n = tn(t);
      if (n.length === 0) throw Error(h.unexpected_server_error());
      let r = await this.getAdminAllianceHqAreaChunk(e, n[0]),
        i = [...r.pixels];
      for (let t = 1; t < n.length; t += $t) {
        let a = await Promise.all(n.slice(t, t + $t).map(t => this.getAdminAllianceHqAreaChunk(e, t, r.eventHwm)));
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
      let i = nn(t),
        a = Array(i.length),
        o = 0,
        s = Array.from({
          length: Math.min(en, i.length)
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
      if (i.status !== T.OK) throw Error(h.unexpected_server_error());
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
      if (i.status === T.CONTENT_TOO_LARGE || i.status !== T.OK) throw Error(h.unexpected_server_error());
      return i.json()
    }
    async reverseAdminAllianceHqPixels(e, t, n, r = !1) {
      let i = 0,
        a = 0;
      for (let o = 0; o < t.length; o += j) {
        let s = await this.reverseAdminAllianceHqPixelChunk(e, t.slice(o, o + j), n, r);
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
      if (i.status === T.CONTENT_TOO_LARGE) throw Error(h.alliance_hq_select_area_history_too_large());
      if (i.status === T.NOT_FOUND) throw Error(h.reverse_no_modifications());
      if (i.status !== T.OK) throw Error(h.unexpected_server_error());
      return a
    }
    async getAllianceFull(e) {
      let t = await this.request(`/staff/dashboard/alliances/${e}/full`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status === T.NOT_FOUND) return null;
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
      let n = await t.json(),
        r = Array.isArray(n == null ? void 0 : n.members) ? n.members : [];
      return {
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
          role: rn(e),
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
      if (r.status === T.NOT_FOUND) return {
        members: [],
        total: 0,
        filteredTotal: 0
      };
      if (r.status !== T.OK) throw new D(h.unexpected_server_error(), r.status);
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
          role: rn(e),
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
      if (n.status === T.BAD_REQUEST) {
        let e = await n.json().catch(() => ({}));
        throw Error((e == null ? void 0 : e.error) ?? h.unexpected_server_error())
      }
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status)
    }
    async changeAllianceLeader(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/leader`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          newLeaderUserId: t
        })
      });
      if (n.status === T.BAD_REQUEST) {
        let e = await n.json();
        throw (e == null ? void 0 : e.error) === `user_not_in_alliance` ? Error(h.leader_must_be_in_alliance()) : Error(h.unexpected_server_error())
      }
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status)
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
      if (r.status !== T.OK) throw new D(h.unexpected_server_error(), r.status)
    }
    async setAllianceMemberRole(e, t, n) {
      let r = await this.request(`/staff/dashboard/alliances/${e}/members/${t}/role`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          role: n
        })
      });
      if (r.status !== T.OK) throw new D(h.unexpected_server_error(), r.status)
    }
    async removeAllianceMember(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/members/${t}/remove`, {
        method: `POST`,
        credentials: `include`
      });
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status)
    }
    async getAdminAllianceRevisions(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/revisions?kind=${t}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
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
      if (r.status !== T.OK) throw new D(h.unexpected_server_error(), r.status)
    }
    async suspendAdminAllianceVisibility(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/suspend-visibility`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          discoverability: t
        })
      });
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status)
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
      if (r.status === T.NOT_FOUND) throw Error(h.alliance_ticket_no_headquarters());
      if (r.status !== T.OK) throw new D(h.unexpected_server_error(), r.status)
    }
    async restoreAdminAlliance(e, t) {
      let n = await this.request(`/staff/dashboard/alliances/${e}/restore`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          newLeaderUserId: t
        })
      });
      if (n.status === T.BAD_REQUEST) {
        let e = await n.json().catch(() => ({}));
        throw (e == null ? void 0 : e.error) === `user_not_found` ? Error(h.alliances_invalid_id()) : (e == null ? void 0 : e.error) === `user_already_in_alliance` ? Error(h.alliance_staff_restore_leader_in_alliance()) : (e == null ? void 0 : e.error) === `alliance_not_archived` ? Error(h.alliance_staff_restore_not_archived()) : Error(h.unexpected_server_error())
      }
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status)
    }
    async archiveAdminAlliance(e) {
      let t = await this.request(`/staff/dashboard/alliances/${e}/archive`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status === T.CONFLICT) return `not-empty`;
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
      return `success`
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status)
    }
    async giveAllianceAdmin(e) {
      let t = await this.request(`/alliance/give-admin`, {
        body: JSON.stringify({
          promotedUserId: e
        }),
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw t.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async banAllianceUser(e) {
      let t = await this.request(`/alliance/ban`, {
        body: JSON.stringify({
          bannedUserId: e
        }),
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw t.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
    async equipFlag(e) {
      if ((await this.request(`/flag/equip/${e}`, {
          method: `POST`,
          credentials: `include`
        })).status !== T.OK) throw Error(h.unexpected_server_error())
    }
    async unbanAllianceUser(e) {
      let t = await this.request(`/alliance/unban`, {
        body: JSON.stringify({
          unbannedUserId: e
        }),
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw t.status === T.FORBIDDEN ? Error(h.you_are_not_allowed_to_do_this()) : Error(h.unexpected_server_error())
    }
  }
}

function on(e) {
  return class extends e {
    async getUserAnticheat(e) {
      let t = await this.request(`/staff/dashboard/users/anticheat?id=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
      return await t.json()
    }
    async getAnticheatStats(e, t) {
      let n = await this.request(`/staff/dashboard/anticheat/stats?from=${e}&to=${t}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
      return n.json()
    }
    async getAnticheatSignals(e, t) {
      let n = await this.request(`/staff/dashboard/anticheat/signals?from=${e}&to=${t}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
      return n.json()
    }
    async getAnticheatUserJourney(e, t, n) {
      let r = await this.request(`/staff/dashboard/anticheat/user/${e}?from=${t}&to=${n}`, {
        method: `GET`,
        credentials: `include`
      });
      if (r.status !== T.OK) throw new D(h.unexpected_server_error(), r.status);
      return r.json()
    }
    async getAnticheatSignalAnalysis(e, t, n) {
      let r = await this.request(`/staff/dashboard/anticheat/signal/${encodeURIComponent(e)}?from=${encodeURIComponent(t)}&to=${encodeURIComponent(n)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (r.status !== T.OK) throw new D(h.unexpected_server_error(), r.status);
      return r.json()
    }
  }
}

function sn(e) {
  return class extends e {
    async autoReviewBan(e) {
      let t = await this.request(`/staff/dashboard/users/auto-review-ban`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          userId: e
        })
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
      return await t.json()
    }
    async getUserAppeals(e) {
      let t = new URLSearchParams;
      t.set(`userId`, String(e.userId)), t.set(`kind`, e.kind), e.page !== void 0 && t.set(`page`, String(e.page)), e.pageSize !== void 0 && t.set(`pageSize`, String(e.pageSize)), e.sortBy && t.set(`sortBy`, e.sortBy), e.sortDir && t.set(`sortDir`, e.sortDir);
      let n = await this.request(`/staff/dashboard/users/appeals?${t.toString()}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
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
      if (i.status === T.FORBIDDEN) {
        let n = await i.json();
        if ((n == null ? void 0 : n.error) === `challenge-required` && n.tier) {
          if (await C(n.tier)) return this.submitBanAppeal(e, t);
          throw new D(h.challenge_verification_not_completed(), i.status)
        }
      }
      if (i.status !== T.OK && i.status !== T.ALREADY_REPORTED) throw new D(h.unexpected_server_error(), i.status);
      return i.status
    }
    async getOpenAppeals() {
      let e = await this.request(`/staff/appeals/get`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
      return await n.json()
    }
    async getUserLastAppeal() {
      let e = await this.request(`/me/last-appeal`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      let t = await e.json();
      return (t == null ? void 0 : t.appealDate) ?? null
    }
    async assignAppeals() {
      let e = await this.request(`/staff/appeals/assign`, {
        method: `POST`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      return await e.json()
    }
    async getPendingAppealsCount() {
      let e = await this.request(`/staff/appeals/open_count`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      let t = await e.json();
      return (t == null ? void 0 : t.appeals) ?? 0
    }
  }
}

function cn(e) {
  return class extends e {
    async getUserFrames() {
      let e = await this.request(`/me/frames`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      return e.json()
    }
    async postEquipUserFrame(e) {
      let t = await this.request(`/me/frames/equip/${e}`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status)
    }
    async getUserBadges() {
      let e = await this.request(`/me/badges`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      return e.json()
    }
    async postEquipUserBadge(e) {
      let t = await this.request(`/me/badges/equip`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status)
    }
    async getStoreFrames() {
      let e = await this.request(`/store/frames`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      return e.json()
    }
    async postBuyUserFrame(e) {
      let t = await this.request(`/store/frames/buy/${e}`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status === T.NOT_FOUND) throw Error(h.couldnt_complete_the_purchase_this_item_doesnt_exist());
      if (t.status === T.FORBIDDEN) throw Error(h.you_do_not_have_enough_droplets_to_buy_this_item());
      if (t.status === T.CONFLICT) throw Error(h.you_already_have_this_item());
      if (t.status !== T.OK) throw Error(h.unexpected_server_error())
    }
    async postEquipCosmetics(e) {
      let t = await this.request(`/me/cosmetic/equip`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status)
    }
    async getStoreNameCosmetics() {
      let e = await this.request(`/store/name`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      return await e.json()
    }
    async postBuyCosmetic(e) {
      let t = await this.request(`/store/name/buy/${e}`, {
        method: `POST`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status)
    }
    async getMyNameCosmetics() {
      let e = await this.request(`/me/cosmetics/name`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      return await e.json()
    }
    async postCreateFrame(e) {
      let t = new FormData;
      t.append(`name`, e.name), e.image && t.append(`image`, e.image), e.assetKey && t.append(`assetKey`, e.assetKey), t.append(`description`, e.description), t.append(`rarity`, e.rarity), t.append(`priceCurrency`, e.priceCurrency), t.append(`purchasable`, e.purchasable.toString()), t.append(`allowedRoles`, JSON.stringify(e.allowedRoles));
      let n = await this.request(`/staff/store-manager/frames`, {
        method: `POST`,
        credentials: `include`,
        body: t
      });
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
      return n.json()
    }
    async postCreateFont(e) {
      let t = await this.request(`/staff/store-manager/fonts`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
      return t.json()
    }
    async postCreateStyle(e) {
      let t = await this.request(`/staff/store-manager/styles`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
      return n.json()
    }
    async putAdminCosmetic(e, t) {
      let n = await this.request(`/staff/store-manager/cosmetics/${e}`, {
        method: `PUT`,
        credentials: `include`,
        body: JSON.stringify(t)
      });
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
      return n.json()
    }
    async deleteAdminCosmetic(e) {
      let t = await this.request(`/staff/store-manager/cosmetics/${e}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status)
    }
    async getAdminBadges(e) {
      let t = new URLSearchParams;
      e && t.set(`search`, e);
      let n = t.size ? `?${t.toString()}` : ``,
        r = await this.request(`/staff/store-manager/badges${n}`, {
          method: `GET`,
          credentials: `include`
        });
      if (r.status !== T.OK) throw new D(h.unexpected_server_error(), r.status);
      return r.json()
    }
    async postAdminBadge(e) {
      let t = await this.request(`/staff/store-manager/badges`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
      return t.json()
    }
    async putAdminBadge(e, t) {
      let n = await this.request(`/staff/store-manager/badges/${e}`, {
        method: `PUT`,
        credentials: `include`,
        body: JSON.stringify(t)
      });
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
      return n.json()
    }
    async deleteAdminBadge(e) {
      let t = await this.request(`/staff/store-manager/badges/${e}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status)
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
      return n.json()
    }
    async deleteR2Image(e) {
      let t = await this.request(`/staff/store-manager/images/${e}`, {
        method: `DELETE`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status)
    }
  }
}
var P = {
  day: 864e5,
  hour: 36e5,
  minute: 6e4,
  second: 1e3,
  millisecond: 1
};

function ln(e) {
  let t = Math.floor(e / P.hour);
  e -= t * P.hour;
  let n = Math.floor(e / P.minute);
  e -= n * P.minute;
  let r = Math.floor(e / P.second).toString().padStart(2, `0`);
  return t > 0 ? `${t}:${n.toString().padStart(2,`0`)}:${r}` : `${n}:${r}`
}

function un(e) {
  return `${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)} ${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}:${String(e.getSeconds()).padStart(2,`0`)}`
}
var dn = 30 * P.minute;

function fn(e) {
  return class extends e {
    constructor(...e) {
      super(...e), o(this, `lastHotspotRequestAt`, 0)
    }
    async leaderboardPlayers(e) {
      let t = await this.request(`/leaderboard/player/${e}`);
      if (t.status !== T.OK) throw Error(h.leaderboard_disabled_temporarily());
      return t.json()
    }
    async leaderboardAlliances(e) {
      let t = await this.request(`/leaderboard/alliance/${e}`);
      if (t.status !== T.OK) throw Error(h.leaderboard_disabled_temporarily());
      return t.json()
    }
    async leaderboardRegions(e, t = 0) {
      let n = await this.request(`/leaderboard/region/${e}/${t}`);
      if (n.status === T.OK) return n.json();
      throw Error(h.leaderboard_disabled_temporarily())
    }
    async leaderboardRegionPlayers(e, t) {
      let n = await this.request(`/leaderboard/region/players/${e}/${t}`);
      if (n.status === T.OK) return n.json();
      throw Error(h.leaderboard_disabled_temporarily())
    }
    async leaderboardRegionAlliances(e, t) {
      let n = await this.request(`/leaderboard/region/alliances/${e}/${t}`);
      if (n.status === T.OK) return n.json();
      throw Error(h.leaderboard_disabled_temporarily())
    }
    async leaderboardCountries(e) {
      let t = await this.request(`/leaderboard/country/${e}`, {
        credentials: `include`
      });
      if (t.status === T.OK) return t.json();
      throw Error(h.leaderboard_disabled_temporarily())
    }
    refreshHotspotsIfStale() {
      Date.now() - this.lastHotspotRequestAt < dn || (this.lastHotspotRequestAt = Date.now(), this.request(`/map/hotspots`, {
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
      if (t.status !== T.OK) throw Error(h.unexpected_server_error());
      return t.json()
    }
  }
}

function pn(e) {
  return class extends e {
    async postCaptchaSession(e, t = `include`) {
      let n = await this.request(`/anticheat/captcha/session`, {
        method: `POST`,
        credentials: t,
        body: JSON.stringify(e),
        headers: {
          "x-fp": await m()
        }
      });
      if (!n.ok) throw n.status === 500 ? new D(h.unexpected_server_error(), n.status) : new D(h.invalid_captcha(), n.status);
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
      })).status === T.OK
    }
  }
}
var mn = {
    griefing: h.griefing(),
    "multi-accounting": h.multi_accounting(),
    "hate-speech": h.hate_speech(),
    bot: h.bot(),
    doxxing: h.doxxing(),
    "inappropriate-content": h.inappropriate_content(),
    other: h.breaking_the_rules()
  },
  hn = {
    doxxing: h.doxxing_description(),
    "hate-speech": h.hate_speech_description(),
    griefing: h.griefing_description(),
    "multi-accounting": h.multi_accounting_description(),
    bot: h.bot_description(),
    "inappropriate-content": h.inappropriate_content_description(),
    other: h.breaking_the_rules_description()
  },
  gn = {
    doxxing: `text-red-600`,
    "hate-speech": `text-red-400`,
    "inappropriate-content": `text-amber-500`,
    "multi-accounting": `text-amber-300`,
    bot: `text-amber-600`,
    griefing: `text-amber-200`,
    other: `text-cyan-600`
  },
  _n = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  vn = {
    griefing: `topic-2`,
    "inappropriate-content": `topic-1`,
    bot: `topic-3`,
    "multi-accounting": `topic-3`,
    "hate-speech": `topic-1`,
    doxxing: `topic-1`,
    other: ``
  },
  yn = 365 * P.day;

function bn(e) {
  if (!e) return null;
  let t = (e instanceof Date ? e : new Date(e)).getTime();
  return Number.isFinite(t) ? t : null
}

function xn(e, t = Date.now()) {
  let n = bn(e);
  return n !== null && n - t >= yn
}

function Sn(e, t = Date.now()) {
  let n = bn(e);
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

function Cn(e) {
  return class extends e {
    async getModeratorTickets() {
      let e = await this.request(`/staff/tickets/get`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      let t = await e.json();
      for (let e of t.tickets) e.reports.sort((e, t) => _n[e.reason] - _n[t.reason]);
      return t
    }
    async countMyTicketsClosedToday() {
      let e = await this.request(`/staff/tickets/closed-today`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      return e.json()
    }
    async getOpenTicketsCount() {
      let e = await this.request(`/staff/tickets/open_count`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
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
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
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
      if (a.status !== T.OK && a.status !== T.BAD_REQUEST) throw new D(h.unexpected_server_error(), a.status)
    }
    async getLastResolvedTicket() {
      let e = await this.request(`/staff/tickets/reversals/last-resolved`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      return (await e.json()).ticket
    }
    async getTicketReversalTicketInfo(e) {
      let t = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
      return (await t.json()).ticket
    }
    async getReporterReportHistory(e, t) {
      let n = await this.request(`/staff/tickets/reporter-history?ticketId=${encodeURIComponent(e)}&reporterId=${t}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
      return (await n.json()).reports
    }
    async createTicketReversal(e) {
      let t = await this.request(`/staff/tickets/reversals`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status === T.CONFLICT) {
        let e = await t.json().catch(() => ({}));
        throw (e == null ? void 0 : e.error) === `reversal_already_pending` ? new D(h.ticket_reversal_already_pending(), T.CONFLICT) : new D(h.unexpected_server_error(), T.CONFLICT)
      }
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
      return t.json()
    }
    async reSolveTicket(e) {
      let t = await this.request(`/staff/tickets/re-solve`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify(e)
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
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
      if (r.status !== T.OK) throw new D(h.unexpected_server_error(), r.status);
      return (await r.json()).reversals ?? []
    }
    async getTicketReversal(e) {
      let t = await this.request(`/staff/tickets/reversals/${e}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
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
      if (r.status === T.FORBIDDEN) throw new D(h.ticket_reversal_cannot_self_review(), T.FORBIDDEN);
      if (r.status === T.CONFLICT) throw new D(h.ticket_reversal_already_reviewed(), T.CONFLICT);
      if (r.status !== T.OK) throw new D(h.unexpected_server_error(), r.status)
    }
    async getOpenTicketsSummary() {
      let e = await this.request(`/staff/dashboard/summary/counters/tickets`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      return e.json()
    }
    async getOpenReportsSummary() {
      let e = await this.request(`/staff/dashboard/summary/counters/reports`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      return e.json()
    }
    async getBanAppealStats(e, t) {
      let n = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(e)}&end=${encodeURIComponent(t)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
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
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
      return t.json()
    }
    async getUserInfoFull(e) {
      let t = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== T.NOT_FOUND) {
        if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
      return n.json()
    }
    async getUserInfoByEmail(e) {
      let t = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== T.NOT_FOUND) {
        if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
        return t.json()
      }
    }
    async getUserPunishments(e) {
      let t = await this.request(`/staff/dashboard/users/punishments?userId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
      return (await t.json()).punishments ?? []
    }
    async getPunishmentTicket(e) {
      let t = await this.request(`/staff/dashboard/users/punishment-ticket?ticketId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
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
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status)
    }
    async getUserNotes(e, t) {
      let n = t == `dashboard` ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(e)}` : `/staff/appeals/notes?userId=${encodeURIComponent(e)}`,
        r = await this.request(n, {
          method: `GET`,
          credentials: `include`
        });
      if (r.status !== T.OK) throw new D(h.unexpected_server_error(), r.status);
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
      if (i.status !== T.OK) throw new D(h.unexpected_server_error(), i.status)
    }
    async getUserPermissions(e) {
      let t = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
      let r = await n.json();
      return Array.isArray(r == null ? void 0 : r.permissions) ? r.permissions : []
    }
    async getUserPurchases(e) {
      let t = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
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
      if (i.status !== T.OK) throw new D(h.unexpected_server_error(), i.status);
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
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
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
      return t.json()
    }
    async getTicketOverturnInfo(e) {
      let t = await this.request(`/staff/dashboard/all-tickets/overturn-info?ticketId=${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
      return t.json()
    }
    async getModerationTranslate(e, t) {
      let n = t == `tickets` ? `/staff/tickets/translate` : `/staff/appeals/translate`,
        r = await this.request(n, {
          method: `POST`,
          credentials: `include`,
          body: JSON.stringify({
            text: e
          })
        });
      if (r.status !== T.OK) throw new D(h.unexpected_server_error(), r.status);
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
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
      return n.json()
    }
    async getTicketsKpi(e) {
      let t = new URLSearchParams;
      t.set(`start`, e.startIso), t.set(`end`, e.endIso), e.compare && t.set(`compare`, `1`), e.userId != null && t.set(`userId`, String(e.userId)), e.allianceId != null && t.set(`allianceId`, String(e.allianceId)), e.reason != null && t.set(`reason`, e.reason), e.punishment != null && t.set(`punishment`, e.punishment), e.granularity != null && t.set(`granularity`, e.granularity);
      let n = await this.request(`/staff/dashboard/kpi/tickets?${t.toString()}`, {
        method: `GET`,
        credentials: `include`
      });
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
      return n.json()
    }
  }
}

function wn(e) {
  return class extends e {
    async getNotificationCount() {
      let e = await this.request(`/notification/count`, {
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      let {
        count: t
      } = await e.json();
      return t
    }
    async getNotificationPage(e) {
      let t = `/notification/page${e===void 0?``:`?cursor=${encodeURIComponent(e)}`}`,
        n = await this.request(t, {
          credentials: `include`
        });
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
      return n.json()
    }
    async postNotificationMarkRead(e) {
      let t = await this.request(`/notification/mark-read`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          notificationIds: e
        })
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
      return t.json()
    }
    async postNotificationMarkReadAll() {
      let e = await this.request(`/notification/mark-read/all`, {
        method: `POST`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      return e.json()
    }
  }
}
var Tn = [`droplets`, `prism`];

function En(e) {
  return Tn.map(t => ({
    currency: t,
    amount: e.reduce((e, n) => e + (n.currency === t ? n.amount : 0), 0)
  })).filter(e => e.amount > 0)
}

function Dn(e) {
  return class extends e {
    async driveStatus() {
      let e = await this.request(`/drive/status`, {
        credentials: `include`
      });
      return e.status === T.OK && !!(await e.json()).connected
    }
    async driveConnect(e) {
      let t = await this.request(`/drive/connect`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          code: e
        })
      });
      if (t.status !== T.OK) throw Error(`drive connect failed: ${t.status}`);
      return t.json()
    }
    async driveToken() {
      let e = await this.request(`/drive/token`, {
        credentials: `include`,
        throwOnStatus: !1
      });
      if (e.status === T.CONFLICT) return null;
      if (e.status !== T.OK) throw Error(`drive token failed: ${e.status}`);
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
        body: JSON.stringify({
          lookup_key: e
        })
      });
      if (t.status === T.UNAVAILABLE_FOR_LEGAL_REASONS) throw Error(h.account_suspended_message());
      if (t.status !== T.OK) throw Error(await t.text());
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
        body: JSON.stringify({
          lookup_key: e
        })
      });
      if (t.status !== T.OK) throw Error(`fastspring session failed: ${t.status}`);
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
      if (e.status === T.NOT_FOUND) return null;
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
      if (t.status !== T.OK) throw t.status === T.NOT_FOUND ? Error(h.couldnt_complete_the_purchase_this_item_doesnt_exist()) : t.status === T.FORBIDDEN ? Error(h.you_do_not_have_enough_droplets_to_buy_this_item()) : t.status === T.CONFLICT ? Error(h.you_already_have_this_item()) : Error(h.unexpected_server_error())
    }
    async getPlayAccountId() {
      let e = await this.request(`/payment/play/account-id`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw Error(h.unexpected_server_error());
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
      if (t.status === T.BAD_REQUEST) {
        let e = await t.json().catch(() => ({}));
        throw Error((e == null ? void 0 : e.error) ?? `Invalid Play purchase`)
      }
      if (t.status === T.UNAVAILABLE_FOR_LEGAL_REASONS) throw Error(h.account_suspended_message());
      if (t.status !== T.OK) throw Error(h.unexpected_server_error());
      return t.json()
    }
    async verifyPendingPlayPurchases() {
      let e = await this.request(`/payment/play/verify-pending`, {
        method: `POST`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw Error(h.unexpected_server_error());
      return e.json()
    }
    async getPlayClaimStatus(e) {
      let t = await this.request(`/payment/play/claim/${encodeURIComponent(e)}`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status === T.NOT_FOUND) return {
        status: `unknown`,
        grant: {
          currency: `droplets`,
          amount: 0
        }
      };
      if (t.status !== T.OK) throw Error(h.unexpected_server_error());
      return t.json()
    }
    async listPlayPurchaseHistory() {
      let e = await this.request(`/payment/play/history`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw Error(h.unexpected_server_error());
      return e.json()
    }
  }
}

function On(e, t) {
  let n = {};
  for (let r of e) {
    let e = t(r),
      i = n[e];
    i ? i.push(r) : n[e] = [r]
  }
  return n
}

function kn(e, t) {
  let n = {};
  for (let r of e) {
    let e = t(r);
    n[e] = r
  }
  return n
}

function An(e) {
  return class extends e {
    async paint(e) {
      let t = On(e, e => `t=(${e.tile[0]},${e.tile[1]}),s=${e.season}`),
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
      if (a.status !== T.OK) {
        if (a.status === T.UNAUTHORIZED) throw Error(h.you_need_to_be_logged_in_to_paint());
        if (a.status === T.FORBIDDEN) {
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
                if (await C(t.tier)) return this.paint(e);
                throw Error(h.challenge_verification_not_completed())
              }
              throw console.error(`Challenge required but no tier provided`, t), Error(h.unexpected_server_error());
            case `verification-required`: {
              let t = (await f().get()).sealed_result;
              if (!t) throw Error(h.unexpected_server_error());
              return await this.verifyAnticheat(t), this.paint(e)
            }
          }
          throw await L.refresh(), typeof(t == null ? void 0 : t.charges) == `number` ? Error(h.you_do_not_have_enough_charges_to_paint()) : Error(h.unexpected_server_error())
        }
        throw Error(h.unexpected_server_error())
      }
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
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
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
      if (a.status !== T.OK) throw new D(h.unexpected_server_error(), a.status);
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
      if (a.status !== T.OK) throw new D(h.unexpected_server_error(), a.status);
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
      if (n.status === T.BAD_REQUEST) {
        let e = await n.json(),
          t = (e == null ? void 0 : e.error) ?? ``;
        throw t === `timelapse_too_many_events` ? new D(h.select_area_timelapse_history_too_large(), T.BAD_REQUEST) : new D(typeof t == `string` && t ? t : h.unexpected_server_error(), T.BAD_REQUEST)
      }
      if (n.status !== T.OK) throw new D(h.unexpected_server_error(), n.status);
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
      if (a.status !== T.OK) throw new D(h.unexpected_server_error(), a.status);
      return a.json()
    }
    async sendPaintRequests(e, t, n, r) {
      let i = On(e, e => `t=(${e.tile[0]},${e.tile[1]}),s=${e.season}`),
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
        }))).filter(e => e.status !== T.OK);
      if (a.length) {
        let e = a[0];
        if (e.status === T.UNAUTHORIZED) throw Error(h.you_need_to_be_logged_in_to_paint());
        if (e.status === T.FORBIDDEN) {
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
          throw await L.refresh(), typeof(t == null ? void 0 : t.charges) == `number` ? Error(h.you_do_not_have_enough_charges_to_paint()) : Error(h.unexpected_server_error())
        }
        throw Error(h.unexpected_server_error())
      }
    }
    async adminAutoPainterPaint(e, t, n) {
      let r = jn(e),
        i = await Mn(r),
        a = new FormData;
      a.append(`fingerprint`, t), a.append(`season`, r.season.toString()), a.append(`px0`, r.offsetX.toString()), a.append(`py0`, r.offsetY.toString()), a.append(`width`, r.width.toString()), a.append(`height`, r.height.toString()), a.append(`pixels`, e.length.toString()), a.append(`bitmap`, i, `auto-painter.png`), a.append(`userId`, n.toString());
      let o = await this.request(`/staff/tools/auto-painter/paint`, {
        method: `POST`,
        body: a,
        credentials: `include`
      });
      if (o.status === T.FORBIDDEN) {
        let t = await o.json().catch(() => null);
        if (typeof(t == null ? void 0 : t.charges) == `number`) throw Error(h.overlay_auto_paint_not_enough_charges({
          charges: Math.floor(t.charges),
          pixels: e.length
        }));
        let n = typeof(t == null ? void 0 : t.error) == `string` ? t.error.trim() : ``;
        throw Error(n && n !== `Forbidden` ? n : `Auto painter is restricted to administrators.`)
      }
      if (o.status !== T.OK) throw Error(h.unexpected_server_error());
      return o.json()
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
      if (o.status !== T.OK) {
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
      if (s.status !== T.OK) {
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

function jn(e) {
  var t;
  if (!e.length) throw Error(`Auto painter request does not contain any pixels.`);
  let n = e[0].season;
  for (let t of e)
    if (t.season !== n) throw Error(`Auto painter requests cannot mix seasons.`);
  let r = (t = k.seasons) == null ? void 0 : t[n];
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
    let r = (p = k.colors) == null ? void 0 : p[n];
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
async function Mn(e) {
  let t = Nn(e.width, e.height),
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

function Nn(e, t) {
  if (typeof OffscreenCanvas < `u`) return new OffscreenCanvas(e, t);
  if (typeof document < `u`) {
    let n = document.createElement(`canvas`);
    return n.width = e, n.height = t, n
  }
  throw Error(`Canvas API is not available in the current environment.`)
}

function Pn(e) {
  return class extends e {
    async getVoidEvent() {
      let e = await this.request(`/void-event`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      return e.json()
    }
    async getVoidEventRewards() {
      let e = await this.request(`/void-event/rewards`, {
        method: `GET`,
        credentials: `include`
      });
      if (e.status !== T.OK) throw new D(h.unexpected_server_error(), e.status);
      return e.json()
    }
    async getVoidEventTileConquerors(e) {
      let t = await this.request(`/void-event/tile/${e}/conquerors`, {
        method: `GET`,
        credentials: `include`
      });
      if (t.status !== T.OK) throw new D(h.unexpected_server_error(), t.status);
      return t.json()
    }
    async postVoidEventPick(e) {
      let t = await this.request(`/void-event/pick`, {
        method: `POST`,
        credentials: `include`,
        body: JSON.stringify({
          team: e
        })
      });
      if (t.status === T.OK) return t.json();
      throw t.status === T.UNAUTHORIZED ? Error(h.you_are_not_logged_in()) : t.status === T.FORBIDDEN ? Error(h.void_event_not_enough_droplets()) : t.status === T.CONFLICT ? Error(h.void_event_already_picked()) : Error(h.unexpected_server_error())
    }
  }
}

function Fn(e) {
  return class extends e {
    validWaybackInput(e) {
      let t = Number.isFinite(e.timestamp) && Number.isInteger(e.timestamp) && e.timestamp >= 0 && e.timestamp <= this.getEstimatedServerNowMs(),
        n = Number.isFinite(e.season) && Number.isInteger(e.season) && e.season >= 0 && e.season < Ut.length,
        r = Number.isFinite(e.limit) && Number.isInteger(e.limit) && e.limit > 0 && e.limit <= Jt.tools.wayback.limit,
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
      if (i.status === T.FORBIDDEN) throw Error(`Access denied`);
      if (i.status !== T.OK) throw Error(`Failed to fetch wayback events`);
      return i.json()
    }
  }
}
var F = new class extends Vt(Ht(an(on(sn(cn(fn(pn(Cn(wn(Dn(An(Pn(Fn(zt)))))))))))))) {}(d);
typeof window < `u` && a(() => {
  let e = F.online;
  s(() => {
    let t = F.online;
    t && !e && window.dispatchEvent(new CustomEvent(`wplace:online`)), e = t
  })
});

function In(e, t) {
  if (!(e != null && e.length)) return !1;
  for (let n of e)
    if (n === t) return !0;
  return !1
}

function Ln(e, t) {
  for (let n of t)
    if (In(e, n)) return !0;
  return !1
}

function Rn(e) {
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
  return n
}

function zn(e) {
  if (typeof Buffer < `u`) return Buffer.from(e).toString(`base64`);
  let t = ``;
  for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
  return btoa(t)
}
var Bn = class {
  constructor(e) {
    o(this, `bytes`, void 0), this.bytes = e ?? new Uint8Array
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

function Vn(e) {
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

function Hn(e) {
  if (typeof FileReader > `u`) {
    let t = e.type || `application/octet-stream`;
    return e.arrayBuffer().then(e => `data:${t};base64,${zn(new Uint8Array(e))}`)
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

function Un(e) {
  if (!e.startsWith(`data:`)) throw Error(`Could not parse data URL`);
  let t = e.indexOf(`,`);
  if (t === -1) throw Error(`Could not parse data URL`);
  let n = e.slice(5, t),
    r = e.slice(t + 1),
    i = n.indexOf(`;base64`),
    a = (i === -1 ? n : n.slice(0, i)) || `text/plain`;
  if (i !== -1) {
    let e = Rn(r),
      t = new Uint8Array(e.byteLength);
    return t.set(e), new Blob([t], {
      type: a
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: a
  })
}

function Wn(...e) {
  return e.filter(Boolean).join(` `)
}
var Gn = typeof document < `u`,
  Kn = 0,
  qn = new WeakMap,
  Jn = new WeakMap,
  Yn = new WeakMap,
  Xn = class {
    constructor() {
      u(this, qn, r(i([]))), u(this, Jn, r(i([]))), u(this, Yn, e => {
        let t = this.toasts.findIndex(t => t.id === e);
        return t === -1 ? null : t
      }), o(this, `addToast`, e => {
        Gn && this.toasts.unshift(e)
      }), o(this, `updateToast`, ({
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
      }), o(this, `create`, e => {
        var t;
        let {
          message: n,
          ...r
        } = e, i = typeof(e == null ? void 0 : e.id) == `number` || e.id && ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Kn++, a = e.dismissable === void 0 || e.dismissable, o = e.type === void 0 ? `default` : e.type;
        return l(() => {
          this.toasts.find(e => e.id === i) ? this.updateToast({
            id: i,
            data: e,
            type: o,
            message: n,
            dismissable: a
          }) : this.addToast({
            ...r,
            id: i,
            title: n,
            dismissable: a,
            type: o
          })
        }), i
      }), o(this, `dismiss`, e => (l(() => {
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
      }), e)), o(this, `remove`, e => {
        if (e === void 0) {
          this.toasts = [];
          return
        }
        let t = n(Yn, this).call(this, e);
        if (t !== null) return this.toasts.splice(t, 1), e
      }), o(this, `message`, (e, t) => this.create({
        ...t,
        type: `default`,
        message: e
      })), o(this, `error`, (e, t) => this.create({
        ...t,
        type: `error`,
        message: e
      })), o(this, `success`, (e, t) => this.create({
        ...t,
        type: `success`,
        message: e
      })), o(this, `info`, (e, t) => this.create({
        ...t,
        type: `info`,
        message: e
      })), o(this, `warning`, (e, t) => this.create({
        ...t,
        type: `warning`,
        message: e
      })), o(this, `loading`, (e, t) => this.create({
        ...t,
        type: `loading`,
        message: e
      })), o(this, `promise`, (e, t) => {
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
            let t = Zn(e);
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
      }), o(this, `custom`, (e, t) => {
        let n = (t == null ? void 0 : t.id) || Kn++;
        return this.create({
          component: e,
          id: n,
          ...t
        }), n
      }), o(this, `removeHeight`, e => {
        this.heights = this.heights.filter(t => t.toastId !== e)
      }), o(this, `setHeight`, e => {
        let t = n(Yn, this).call(this, e.toastId);
        if (t === null) {
          this.heights.push(e);
          return
        }
        this.heights[t] = e
      }), o(this, `reset`, () => {
        this.toasts = [], this.heights = []
      })
    }
    get toasts() {
      return c(n(qn, this))
    }
    set toasts(t) {
      e(n(qn, this), t, !0)
    }
    get heights() {
      return c(n(Jn, this))
    }
    set heights(t) {
      e(n(Jn, this), t, !0)
    }
  };

function Zn(e) {
  return e && typeof e == `object` && `status` in e ? `HTTP error! Status: ${e.status}` : `Error! ${e}`
}
var I = new Xn;

function Qn(e, t) {
  return I.create({
    message: e,
    ...t
  })
}
var $n = new WeakMap,
  er = class {
    constructor() {
      u(this, $n, t(() => I.toasts.filter(e => !e.dismiss)))
    }
    get toasts() {
      return c(n($n, this))
    }
  },
  tr = Object.assign(Qn, {
    success: I.success,
    info: I.info,
    warning: I.warning,
    error: I.error,
    custom: I.custom,
    message: I.message,
    promise: I.promise,
    dismiss: I.dismiss,
    loading: I.loading,
    getActiveToasts: () => I.toasts.filter(e => !e.dismiss)
  }),
  nr = new WeakMap,
  rr = new WeakMap,
  ir = new WeakMap,
  ar = new WeakMap,
  or = new WeakMap,
  sr = new WeakMap,
  cr = new WeakMap,
  lr = new WeakMap,
  L = new class {
    get data() {
      return c(n(nr, this))
    }
    set data(t) {
      e(n(nr, this), t, !0)
    }
    get loading() {
      return c(n(rr, this))
    }
    set loading(t) {
      e(n(rr, this), t, !0)
    }
    get notificationCount() {
      return c(n(ir, this))
    }
    set notificationCount(t) {
      e(n(ir, this), t, !0)
    }
    get lastFetch() {
      return c(n(ar, this))
    }
    set lastFetch(t) {
      e(n(ar, this), t)
    }
    get charges() {
      return c(n(or, this))
    }
    set charges(t) {
      e(n(or, this), t)
    }
    get cooldown() {
      return c(n(sr, this))
    }
    set cooldown(t) {
      e(n(sr, this), t)
    }
    get flagsBitmap() {
      return c(n(cr, this))
    }
    set flagsBitmap(t) {
      e(n(cr, this), t)
    }
    get timeoutUntil() {
      return c(n(lr, this))
    }
    set timeoutUntil(t) {
      e(n(lr, this), t)
    }
    constructor() {
      o(this, `channel`, new BroadcastChannel(`user-channel`)), u(this, nr, r()), u(this, rr, r(!0)), u(this, ir, r()), u(this, ar, r(Date.now())), u(this, or, t(() => {
        if (!this.data) return;
        let e = this.data.charges;
        if (e.infinite) return 1 / 0;
        if (e.count > e.max) return e.count;
        let t = e.count + Math.max((x.now - this.lastFetch) / e.cooldownMs, 0);
        return Math.min(e.max, t)
      })), u(this, sr, t(() => this.charges !== void 0 && this.data && !this.data.charges.infinite ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0)), u(this, cr, t(() => {
        var e;
        return new Bn(Rn(((e = this.data) == null ? void 0 : e.flagsBitmap) ?? `AA==`))
      })), u(this, lr, t(() => {
        var e;
        if (!((e = this.data) != null && e.timeoutUntil)) return;
        let t = new Date(this.data.timeoutUntil),
          n = t.getTime();
        if (!(!Number.isFinite(n) || n <= x.now)) return t
      })), this.channel && (this.channel.onmessage = e => {
        let t = JSON.parse(e.data);
        t.type === `refresh` ? (this.data = t.data, this.lastFetch = Date.now()) : t.type === `logout` && (this.data = void 0)
      })
    }
    async refresh() {
      try {
        var e, t;
        return this.loading = !0, this.data = await F.me(), this.lastFetch = Date.now(), (e = this.channel) == null || e.postMessage(JSON.stringify({
          type: `refresh`,
          data: this.data
        })), this.data && this.notificationCount === void 0 && F.getNotificationCount().then(e => {
          this.notificationCount = e
        }).catch(e => {
          console.error(`Failed to refresh notification count:`, e)
        }), (t = this.data) != null && t.id && $.setUserId(this.data.id), !0
      } catch (e) {
        return console.error(e), tr.warning(h.no_internet_access(), {
          duration: 1e4
        }), !1
      } finally {
        this.loading = !1
      }
    }
    async logout() {
      var e;
      await F.logout(), (e = this.channel) == null || e.postMessage(JSON.stringify({
        type: `logout`
      })), this.data = void 0
    }
    hasColor(e) {
      var t;
      return e < 32 || !!((((t = this.data) == null ? void 0 : t.extraColorsBitmap) ?? 0) & 1 << e - 32)
    }
    hasPermission(e) {
      var t;
      return In((t = this.data) == null ? void 0 : t.permissions, e)
    }
    hasAnyPermission(e) {
      var t;
      return Ln((t = this.data) == null ? void 0 : t.permissions, e)
    }
  },
  R, z = Array(128).fill(void 0);
z.push(void 0, null, !0, !1);

function B(e) {
  return z[e]
}
var V = z.length;

function H(e) {
  V === z.length && z.push(z.length + 1);
  let t = V;
  return V = z[t], z[t] = e, t
}

function U(e, t) {
  try {
    return e.apply(this, t)
  } catch (e) {
    R.__wbindgen_export_0(H(e))
  }
}

function W(e) {
  return e == null
}
var ur = typeof TextDecoder < `u` ? new TextDecoder(`utf-8`, {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error(`TextDecoder not available`)
  }
};
typeof TextDecoder < `u` && ur.decode();
var G = null;

function K() {
  return (G === null || G.byteLength === 0) && (G = new Uint8Array(R.memory.buffer)), G
}

function q(e, t) {
  return e >>>= 0, ur.decode(K().subarray(e, e + t))
}

function dr(e) {
  e < 132 || (z[e] = V, V = e)
}

function fr(e) {
  let t = B(e);
  return dr(e), t
}
var J = null;

function Y() {
  return (J === null || J.buffer.detached === !0 || J.buffer.detached === void 0 && J.buffer !== R.memory.buffer) && (J = new DataView(R.memory.buffer)), J
}
var X = 0,
  pr = typeof TextEncoder < `u` ? new TextEncoder(`utf-8`) : {
    encode: () => {
      throw Error(`TextEncoder not available`)
    }
  },
  mr = typeof pr.encodeInto == `function` ? function(e, t) {
    return pr.encodeInto(e, t)
  } : function(e, t) {
    let n = pr.encode(e);
    return t.set(n), {
      read: e.length,
      written: n.length
    }
  };

function Z(e, t, n) {
  if (n === void 0) {
    let n = pr.encode(e),
      r = t(n.length, 1) >>> 0;
    return K().subarray(r, r + n.length).set(n), X = n.length, r
  }
  let r = e.length,
    i = t(r, 1) >>> 0,
    a = K(),
    o = 0;
  for (; o < r; o++) {
    let t = e.charCodeAt(o);
    if (t > 127) break;
    a[i + o] = t
  }
  if (o !== r) {
    o !== 0 && (e = e.slice(o)), i = n(i, r, r = o + e.length * 3, 1) >>> 0;
    let t = K().subarray(i + o, i + r),
      a = mr(e, t);
    o += a.written, i = n(i, r, o, 1) >>> 0
  }
  return X = o, i
}

function hr(e) {
  let t = Z(e, R.__wbindgen_export_1, R.__wbindgen_export_2),
    n = X;
  R.set_discord_id(t, n)
}

function gr(e) {
  let t = Z(e, R.__wbindgen_export_1, R.__wbindgen_export_2),
    n = X;
  R.set_fingerprint(t, n)
}

function _r(e) {
  let t = Z(e, R.__wbindgen_export_1, R.__wbindgen_export_2),
    n = X;
  R.set_detected_bot(t, n)
}

function vr(e) {
  let t, n;
  try {
    let a = R.__wbindgen_add_to_stack_pointer(-16),
      o = Z(e, R.__wbindgen_export_1, R.__wbindgen_export_2),
      s = X;
    R.get_pawtected_endpoint_payload(a, o, s);
    var r = Y().getInt32(a + 0, !0),
      i = Y().getInt32(a + 4, !0);
    return t = r, n = i, q(r, i)
  } finally {
    R.__wbindgen_add_to_stack_pointer(16), R.__wbindgen_export_3(t, n, 1)
  }
}

function yr(e) {
  R.set_user_id(e)
}

function br(e) {
  R.set_cf_likely_automated(e)
}

function xr(e) {
  R.set_automated_clicks(e)
}

function Sr(e) {
  let t = Z(e, R.__wbindgen_export_1, R.__wbindgen_export_2),
    n = X;
  R.request_url(t, n)
}

function Cr(e) {
  R.set_automated_browser(e)
}
async function wr(e, t) {
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

function Tr() {
  let e = {};
  return e.wbg = {}, e.wbg.__wbg_buffer_609cc3eee51ed158 = function(e) {
    let t = B(e).buffer;
    return H(t)
  }, e.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return U(function(e, t) {
      return H(B(e).call(B(t)))
    }, arguments)
  }, e.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return U(function(e, t, n) {
      return H(B(e).call(B(t), B(n)))
    }, arguments)
  }, e.wbg.__wbg_crypto_574e78ad8b13b65f = function(e) {
    let t = B(e).crypto;
    return H(t)
  }, e.wbg.__wbg_document_d249400bd7bd996d = function(e) {
    let t = B(e).document;
    return W(t) ? 0 : H(t)
  }, e.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return U(function(e, t) {
      B(e).getRandomValues(B(t))
    }, arguments)
  }, e.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return U(function(e, t) {
      return H(Reflect.get(B(e), B(t)))
    }, arguments)
  }, e.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return U(function(e) {
      return B(e).hasFocus()
    }, arguments)
  }, e.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return U(function(e) {
      let t = B(e).innerWidth;
      return H(t)
    }, arguments)
  }, e.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(e) {
    let t;
    try {
      t = B(e) instanceof Window
    } catch {
      t = !1
    }
    return t
  }, e.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(e) {
    let t = B(e).msCrypto;
    return H(t)
  }, e.wbg.__wbg_navigator_1577371c070c8947 = function(e) {
    let t = B(e).navigator;
    return H(t)
  }, e.wbg.__wbg_new_a12002a7f91c75be = function(e) {
    return H(new Uint8Array(B(e)))
  }, e.wbg.__wbg_newnoargs_105ed471475aaf50 = function(e, t) {
    return H(Function(q(e, t)))
  }, e.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(e, t, n) {
    return H(new Uint8Array(B(e), t >>> 0, n >>> 0))
  }, e.wbg.__wbg_newwithlength_a381634e90c276d4 = function(e) {
    return H(new Uint8Array(e >>> 0))
  }, e.wbg.__wbg_node_905d3e251edff8a2 = function(e) {
    let t = B(e).node;
    return H(t)
  }, e.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, e.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(e) {
    let t = B(e).process;
    return H(t)
  }, e.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return U(function(e, t) {
      B(e).randomFillSync(fr(t))
    }, arguments)
  }, e.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return U(function() {
      let e = module.require;
      return H(e)
    }, arguments)
  }, e.wbg.__wbg_set_65595bdd868b3009 = function(e, t, n) {
    B(e).set(B(t), n >>> 0)
  }, e.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    let e = typeof global > `u` ? null : global;
    return W(e) ? 0 : H(e)
  }, e.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    let e = typeof globalThis > `u` ? null : globalThis;
    return W(e) ? 0 : H(e)
  }, e.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    let e = typeof self > `u` ? null : self;
    return W(e) ? 0 : H(e)
  }, e.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    let e = typeof window > `u` ? null : window;
    return W(e) ? 0 : H(e)
  }, e.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(e, t, n) {
    return H(B(e).subarray(t >>> 0, n >>> 0))
  }, e.wbg.__wbg_versions_c01dfd4722a88165 = function(e) {
    let t = B(e).versions;
    return H(t)
  }, e.wbg.__wbindgen_boolean_get = function(e) {
    let t = B(e);
    return typeof t == `boolean` ? +!!t : 2
  }, e.wbg.__wbindgen_is_function = function(e) {
    return typeof B(e) == `function`
  }, e.wbg.__wbindgen_is_null = function(e) {
    return B(e) === null
  }, e.wbg.__wbindgen_is_object = function(e) {
    let t = B(e);
    return typeof t == `object` && !!t
  }, e.wbg.__wbindgen_is_string = function(e) {
    return typeof B(e) == `string`
  }, e.wbg.__wbindgen_is_undefined = function(e) {
    return B(e) === void 0
  }, e.wbg.__wbindgen_memory = function() {
    let e = R.memory;
    return H(e)
  }, e.wbg.__wbindgen_number_get = function(e, t) {
    let n = B(t),
      r = typeof n == `number` ? n : void 0;
    Y().setFloat64(e + 8, W(r) ? 0 : r, !0), Y().setInt32(e + 0, !W(r), !0)
  }, e.wbg.__wbindgen_object_clone_ref = function(e) {
    return H(B(e))
  }, e.wbg.__wbindgen_object_drop_ref = function(e) {
    fr(e)
  }, e.wbg.__wbindgen_string_new = function(e, t) {
    return H(q(e, t))
  }, e.wbg.__wbindgen_throw = function(e, t) {
    throw Error(q(e, t))
  }, e
}

function Er(e, t) {
  return R = e.exports, Dr.__wbindgen_wasm_module = t, J = null, G = null, R
}
async function Dr(e) {
  if (R !== void 0) return R;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? {
    module_or_path: e
  } = e : console.warn(`using deprecated parameters for the initialization function; pass a single object instead`)), e === void 0 && (e = new URL(`pawtect_wasm_bg.wasm`, `` + import.meta.url));
  let t = Tr();
  (typeof e == `string` || typeof Request == `function` && e instanceof Request || typeof URL == `function` && e instanceof URL) && (e = fetch(e));
  let {
    instance: n,
    module: r
  } = await wr(await e, t);
  return Er(n, r)
}
var Or = class {
  constructor() {
    o(this, `interval`, void 0), o(this, `storagesEmpty`, !1), o(this, `storages`, [new Q, new Ar, new jr, new Mr]), o(this, `pawtectLoaded`, void 0), o(this, `pawtectError`, void 0)
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!L.data || this.storagesEmpty) && !localStorage.getItem(Q.KEY)) {
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
    let t = P.day;
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
        await Dr(ee), (e = L.data) != null && e.id && yr(L.data.id);
        let t = fetch;
        return Object.assign(window, {
          fetch: kr((e, n) => {
            let r = null;
            return e instanceof Request ? r = e.url : e instanceof URL ? r = e.href : typeof e == `string` && (r = e), r !== null && !r.startsWith(`/`) && Sr(r), t.call(window, e, n)
          })
        }), !0
      } catch (e) {
        return console.error(`Error loading Pawtect WASM:`, e), this.pawtectError = e, this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(e) {
    await this.loadPawtect(), yr(e)
  }
  async setCfLikelyAutomated(e) {
    await this.loadPawtect(), br(e)
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
      [n, r] = await Promise.all([m(), tt().catch(e => (console.error(e), {
        bot: !1
      }))]);
    return yr(L.data.id), hr(L.data.discordId ?? ``), gr(n), Cr(t), xr(x.automatedClicks), r.bot && _r(r.botKind ?? `unknown`), vr(e)
  }
};

function kr(e) {
  return e.bind().bind()
}
var Q = class e {
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
o(Q, `KEY`, `ui_layout_v3`), o(Q, `XOR_KEY`, `wplace-prefs`);
var Ar = class e {
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
o(Ar, `KEY`, `nav.cursor`), o(Ar, `SHIFT`, 13);
var jr = class e {
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
o(jr, `KEY`, `_pf_uid`), o(jr, `MAX_AGE`, 31536e3);
var Mr = class {
    constructor() {
      o(this, `packed`, void 0)
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
  $ = new Or;
export {
  Ut as A, Ot as B, ln as C, Xt as D, Wt as E, Zt as F, Pt as G, Ft as H, D as I, rt as J, C as K, Bt as L, k as M, qt as N, Kt as O, A as P, E as R, P as S, Yt as T, Nt as U, S as V, Mt as W, vn as _, I as a, mn as b, Vn as c, Rn as d, F as f, xn as g, Sn as h, tr as i, Jt as j, Gt as k, Hn as l, En as m, L as n, Wn as o, kn as p, x as q, er as r, Bn as s, $ as t, Un as u, gn as v, un as w, _n as x, hn as y, T as z
};