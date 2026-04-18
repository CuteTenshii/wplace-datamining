var Gn = Object.defineProperty;
var Rt = t => {
  throw TypeError(t)
};
var Wn = (t, n, e) => n in t ? Gn(t, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : t[n] = e;
var F = (t, n, e) => Wn(t, typeof n != "symbol" ? n + "" : n, e),
  qn = (t, n, e) => n.has(t) || Rt("Cannot " + e);
var T = (t, n, e) => (qn(t, n, "read from private field"), e ? e.call(t) : n.get(t)),
  D = (t, n, e) => n.has(t) ? Rt("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, e);
import {
  g as h
} from "./YjF1d-DF.js";
import {
  e as B,
  i as M,
  h as U,
  g as nt,
  x as Nt,
  u as we
} from "./Bpkf4F49.js";
import {
  s as Kn,
  c as Hn
} from "./aTcm4Cqv.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "8cde383e539e83c9bf370a8bc3de0b358fbc04c8"
    };
    var n = new t.Error().stack;
    n && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[n] = "57485651-6bce-4d48-9a69-fd974c200dec", t._sentryDebugIdIdentifier = "sentry-dbid-57485651-6bce-4d48-9a69-fd974c200dec")
  } catch {}
})();
const Xv = "https://maps.wplace.live",
  Qv = "8d582454-e5ec-4314-b1c2-89e460ac1d28",
  Yn = "true",
  eb = "0x4AAAAAABpHqZ-6i7uL0nmG",
  tb = "https://backend.wplace.live/files",
  yt = "https://backend.wplace.live",
  xt = "theme";
var Ie, Ae, ke, Re, Ne, xe, De, Le;
class Zn {
  constructor() {
    D(this, Ie, B(!1));
    D(this, Ae, B(!1));
    D(this, ke, B(0));
    D(this, Re, B(!1));
    D(this, Ne, B(nt(Jn())));
    D(this, xe, B("custom-winter"));
    D(this, De, B(nt(Date.now())));
    D(this, Le, B(void 0));
    setInterval(() => {
      U(T(this, De), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(xt), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return M(T(this, Ie))
  }
  set dropletsDialogOpen(n) {
    U(T(this, Ie), n, !0)
  }
  get storeDialogOpen() {
    return M(T(this, Ae))
  }
  set storeDialogOpen(n) {
    U(T(this, Ae), n, !0)
  }
  get storeTabIndex() {
    return M(T(this, ke))
  }
  set storeTabIndex(n) {
    U(T(this, ke), n, !0)
  }
  get muted() {
    return M(T(this, Re))
  }
  set muted(n) {
    U(T(this, Re), n, !0)
  }
  get language() {
    return M(T(this, Ne))
  }
  set language(n) {
    U(T(this, Ne), n, !0)
  }
  get theme() {
    return M(T(this, xe))
  }
  set theme(n) {
    U(T(this, xe), n, !0), localStorage.setItem(xt, n), document.documentElement.setAttribute("data-theme", n)
  }
  get now() {
    return M(T(this, De))
  }
  get captcha() {
    return Xn ? M(T(this, Le)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(n) {
    U(T(this, Le), n, !0)
  }
}
Ie = new WeakMap, Ae = new WeakMap, ke = new WeakMap, Re = new WeakMap, Ne = new WeakMap, xe = new WeakMap, De = new WeakMap, Le = new WeakMap;
const $n = new Zn;

function Jn() {
  if (navigator.languages && navigator.languages.length > 0) {
    const t = navigator.languages.find(n => n.length === 2);
    if (t) return t
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const Xn = Yn.toLowerCase() !== "false",
  Qn = "" + new URL("../assets/pawtect_wasm_bg.9gmZk8aU.wasm", import.meta.url).href;
var pt = function() {
  return pt = Object.assign || function(n) {
    for (var e, r = 1, a = arguments.length; r < a; r++) {
      e = arguments[r];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i])
    }
    return n
  }, pt.apply(this, arguments)
};

function Q(t, n, e, r) {
  function a(i) {
    return i instanceof e ? i : new e(function(o) {
      o(i)
    })
  }
  return new(e || (e = Promise))(function(i, o) {
    function s(_) {
      try {
        u(r.next(_))
      } catch (d) {
        o(d)
      }
    }

    function l(_) {
      try {
        u(r.throw(_))
      } catch (d) {
        o(d)
      }
    }

    function u(_) {
      _.done ? i(_.value) : a(_.value).then(s, l)
    }
    u((r = r.apply(t, n || [])).next())
  })
}

function ee(t, n) {
  var e = {
      label: 0,
      sent: function() {
        if (i[0] & 1) throw i[1];
        return i[1]
      },
      trys: [],
      ops: []
    },
    r, a, i, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this
  }), o;

  function s(u) {
    return function(_) {
      return l([u, _])
    }
  }

  function l(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (e = 0)), e;) try {
      if (r = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done) return i;
      switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
        case 0:
        case 1:
          i = u;
          break;
        case 4:
          return e.label++, {
            value: u[1],
            done: !1
          };
        case 5:
          e.label++, a = u[1], u = [0];
          continue;
        case 7:
          u = e.ops.pop(), e.trys.pop();
          continue;
        default:
          if (i = e.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            e = 0;
            continue
          }
          if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
            e.label = u[1];
            break
          }
          if (u[0] === 6 && e.label < i[1]) {
            e.label = i[1], i = u;
            break
          }
          if (i && e.label < i[2]) {
            e.label = i[2], e.ops.push(u);
            break
          }
          i[2] && e.ops.pop(), e.trys.pop();
          continue
      }
      u = n.call(t, e)
    } catch (_) {
      u = [6, _], a = 0
    } finally {
      r = i = 0
    }
    if (u[0] & 5) throw u[1];
    return {
      value: u[0] ? u[1] : void 0,
      done: !0
    }
  }
}

function fn(t, n, e) {
  if (e || arguments.length === 2)
    for (var r = 0, a = n.length, i; r < a; r++)(i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return t.concat(i || Array.prototype.slice.call(n))
}
var mn = "4.6.2";

function rt(t, n) {
  return new Promise(function(e) {
    return setTimeout(e, t, n)
  })
}

function er() {
  return new Promise(function(t) {
    var n = new MessageChannel;
    n.port1.onmessage = function() {
      return t()
    }, n.port2.postMessage(null)
  })
}

function tr(t, n) {
  n === void 0 && (n = 1 / 0);
  var e = window.requestIdleCallback;
  return e ? new Promise(function(r) {
    return e.call(window, function() {
      return r()
    }, {
      timeout: n
    })
  }) : rt(Math.min(t, n))
}

function pn(t) {
  return !!t && typeof t.then == "function"
}

function Dt(t, n) {
  try {
    var e = t();
    pn(e) ? e.then(function(r) {
      return n(!0, r)
    }, function(r) {
      return n(!1, r)
    }) : n(!0, e)
  } catch (r) {
    n(!1, r)
  }
}

function Lt(t, n, e) {
  return e === void 0 && (e = 16), Q(this, void 0, void 0, function() {
    var r, a, i, o;
    return ee(this, function(s) {
      switch (s.label) {
        case 0:
          r = Array(t.length), a = Date.now(), i = 0, s.label = 1;
        case 1:
          return i < t.length ? (r[i] = n(t[i], i), o = Date.now(), o >= a + e ? (a = o, [4, er()]) : [3, 3]) : [3, 4];
        case 2:
          s.sent(), s.label = 3;
        case 3:
          return ++i, [3, 1];
        case 4:
          return [2, r]
      }
    })
  })
}

function Oe(t) {
  return t.then(void 0, function() {}), t
}

function nr(t, n) {
  for (var e = 0, r = t.length; e < r; ++e)
    if (t[e] === n) return !0;
  return !1
}

function rr(t, n) {
  return !nr(t, n)
}

function vt(t) {
  return parseInt(t)
}

function J(t) {
  return parseFloat(t)
}

function re(t, n) {
  return typeof t == "number" && isNaN(t) ? n : t
}

function q(t) {
  return t.reduce(function(n, e) {
    return n + (e ? 1 : 0)
  }, 0)
}

function hn(t, n) {
  if (n === void 0 && (n = 1), Math.abs(n) >= 1) return Math.round(t / n) * n;
  var e = 1 / n;
  return Math.round(t * e) / e
}

function ar(t) {
  for (var n, e, r = "Unexpected syntax '".concat(t, "'"), a = /^\s*([a-z-]*)(.*)$/i.exec(t), i = a[1] || void 0, o = {}, s = /([.:#][\w-]+|\[.+?\])/gi, l = function(p, g) {
      o[p] = o[p] || [], o[p].push(g)
    };;) {
    var u = s.exec(a[2]);
    if (!u) break;
    var _ = u[0];
    switch (_[0]) {
      case ".":
        l("class", _.slice(1));
        break;
      case "#":
        l("id", _.slice(1));
        break;
      case "[": {
        var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(_);
        if (d) l(d[1], (e = (n = d[4]) !== null && n !== void 0 ? n : d[5]) !== null && e !== void 0 ? e : "");
        else throw new Error(r);
        break
      }
      default:
        throw new Error(r)
    }
  }
  return [i, o]
}

function ir(t) {
  for (var n = new Uint8Array(t.length), e = 0; e < t.length; e++) {
    var r = t.charCodeAt(e);
    if (r > 127) return new TextEncoder().encode(t);
    n[e] = r
  }
  return n
}

function ie(t, n) {
  var e = t[0] >>> 16,
    r = t[0] & 65535,
    a = t[1] >>> 16,
    i = t[1] & 65535,
    o = n[0] >>> 16,
    s = n[0] & 65535,
    l = n[1] >>> 16,
    u = n[1] & 65535,
    _ = 0,
    d = 0,
    p = 0,
    g = 0;
  g += i + u, p += g >>> 16, g &= 65535, p += a + l, d += p >>> 16, p &= 65535, d += r + s, _ += d >>> 16, d &= 65535, _ += e + o, _ &= 65535, t[0] = _ << 16 | d, t[1] = p << 16 | g
}

function Y(t, n) {
  var e = t[0] >>> 16,
    r = t[0] & 65535,
    a = t[1] >>> 16,
    i = t[1] & 65535,
    o = n[0] >>> 16,
    s = n[0] & 65535,
    l = n[1] >>> 16,
    u = n[1] & 65535,
    _ = 0,
    d = 0,
    p = 0,
    g = 0;
  g += i * u, p += g >>> 16, g &= 65535, p += a * u, d += p >>> 16, p &= 65535, p += i * l, d += p >>> 16, p &= 65535, d += r * u, _ += d >>> 16, d &= 65535, d += a * l, _ += d >>> 16, d &= 65535, d += i * s, _ += d >>> 16, d &= 65535, _ += e * u + r * l + a * s + i * o, _ &= 65535, t[0] = _ << 16 | d, t[1] = p << 16 | g
}

function me(t, n) {
  var e = t[0];
  n %= 64, n === 32 ? (t[0] = t[1], t[1] = e) : n < 32 ? (t[0] = e << n | t[1] >>> 32 - n, t[1] = t[1] << n | e >>> 32 - n) : (n -= 32, t[0] = t[1] << n | e >>> 32 - n, t[1] = e << n | t[1] >>> 32 - n)
}

function K(t, n) {
  n %= 64, n !== 0 && (n < 32 ? (t[0] = t[1] >>> 32 - n, t[1] = t[1] << n) : (t[0] = t[1] << n - 32, t[1] = 0))
}

function L(t, n) {
  t[0] ^= n[0], t[1] ^= n[1]
}
var or = [4283543511, 3981806797],
  sr = [3301882366, 444984403];

function Mt(t) {
  var n = [0, t[0] >>> 1];
  L(t, n), Y(t, or), n[1] = t[0] >>> 1, L(t, n), Y(t, sr), n[1] = t[0] >>> 1, L(t, n)
}
var Xe = [2277735313, 289559509],
  Qe = [1291169091, 658871167],
  Pt = [0, 5],
  cr = [0, 1390208809],
  ur = [0, 944331445];

function lr(t, n) {
  var e = ir(t);
  n = n || 0;
  var r = [0, e.length],
    a = r[1] % 16,
    i = r[1] - a,
    o = [0, n],
    s = [0, n],
    l = [0, 0],
    u = [0, 0],
    _;
  for (_ = 0; _ < i; _ = _ + 16) l[0] = e[_ + 4] | e[_ + 5] << 8 | e[_ + 6] << 16 | e[_ + 7] << 24, l[1] = e[_] | e[_ + 1] << 8 | e[_ + 2] << 16 | e[_ + 3] << 24, u[0] = e[_ + 12] | e[_ + 13] << 8 | e[_ + 14] << 16 | e[_ + 15] << 24, u[1] = e[_ + 8] | e[_ + 9] << 8 | e[_ + 10] << 16 | e[_ + 11] << 24, Y(l, Xe), me(l, 31), Y(l, Qe), L(o, l), me(o, 27), ie(o, s), Y(o, Pt), ie(o, cr), Y(u, Qe), me(u, 33), Y(u, Xe), L(s, u), me(s, 31), ie(s, o), Y(s, Pt), ie(s, ur);
  l[0] = 0, l[1] = 0, u[0] = 0, u[1] = 0;
  var d = [0, 0];
  switch (a) {
    case 15:
      d[1] = e[_ + 14], K(d, 48), L(u, d);
    case 14:
      d[1] = e[_ + 13], K(d, 40), L(u, d);
    case 13:
      d[1] = e[_ + 12], K(d, 32), L(u, d);
    case 12:
      d[1] = e[_ + 11], K(d, 24), L(u, d);
    case 11:
      d[1] = e[_ + 10], K(d, 16), L(u, d);
    case 10:
      d[1] = e[_ + 9], K(d, 8), L(u, d);
    case 9:
      d[1] = e[_ + 8], L(u, d), Y(u, Qe), me(u, 33), Y(u, Xe), L(s, u);
    case 8:
      d[1] = e[_ + 7], K(d, 56), L(l, d);
    case 7:
      d[1] = e[_ + 6], K(d, 48), L(l, d);
    case 6:
      d[1] = e[_ + 5], K(d, 40), L(l, d);
    case 5:
      d[1] = e[_ + 4], K(d, 32), L(l, d);
    case 4:
      d[1] = e[_ + 3], K(d, 24), L(l, d);
    case 3:
      d[1] = e[_ + 2], K(d, 16), L(l, d);
    case 2:
      d[1] = e[_ + 1], K(d, 8), L(l, d);
    case 1:
      d[1] = e[_], L(l, d), Y(l, Xe), me(l, 31), Y(l, Qe), L(o, l)
  }
  return L(o, r), L(s, r), ie(o, s), ie(s, o), Mt(o), Mt(s), ie(o, s), ie(s, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8)
}

function dr(t) {
  var n;
  return pt({
    name: t.name,
    message: t.message,
    stack: (n = t.stack) === null || n === void 0 ? void 0 : n.split(`
`)
  }, t)
}

function _r(t) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(t))
}

function fr(t) {
  return typeof t != "function"
}

function mr(t, n) {
  var e = Oe(new Promise(function(r) {
    var a = Date.now();
    Dt(t.bind(null, n), function() {
      for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
      var s = Date.now() - a;
      if (!i[0]) return r(function() {
        return {
          error: i[1],
          duration: s
        }
      });
      var l = i[1];
      if (fr(l)) return r(function() {
        return {
          value: l,
          duration: s
        }
      });
      r(function() {
        return new Promise(function(u) {
          var _ = Date.now();
          Dt(l, function() {
            for (var d = [], p = 0; p < arguments.length; p++) d[p] = arguments[p];
            var g = s + Date.now() - _;
            if (!d[0]) return u({
              error: d[1],
              duration: g
            });
            u({
              value: d[1],
              duration: g
            })
          })
        })
      })
    })
  }));
  return function() {
    return e.then(function(a) {
      return a()
    })
  }
}

function pr(t, n, e, r) {
  var a = Object.keys(t).filter(function(o) {
      return rr(e, o)
    }),
    i = Oe(Lt(a, function(o) {
      return mr(t[o], n)
    }, r));
  return function() {
    return Q(this, void 0, void 0, function() {
      var s, l, u, _, d;
      return ee(this, function(p) {
        switch (p.label) {
          case 0:
            return [4, i];
          case 1:
            return s = p.sent(), [4, Lt(s, function(g) {
              return Oe(g())
            }, r)];
          case 2:
            return l = p.sent(), [4, Promise.all(l)];
          case 3:
            for (u = p.sent(), _ = {}, d = 0; d < a.length; ++d) _[a[d]] = u[d];
            return [2, _]
        }
      })
    })
  }
}

function gn() {
  var t = window,
    n = navigator;
  return q(["MSCSSMatrix" in t, "msSetImmediate" in t, "msIndexedDB" in t, "msMaxTouchPoints" in n, "msPointerEnabled" in n]) >= 4
}

function hr() {
  var t = window,
    n = navigator;
  return q(["msWriteProfilerMark" in t, "MSStream" in t, "msLaunchUri" in n, "msSaveBlob" in n]) >= 3 && !gn()
}

function Ze() {
  var t = window,
    n = navigator;
  return q(["webkitPersistentStorage" in n, "webkitTemporaryStorage" in n, (n.vendor || "").indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in t, "BatteryManager" in t, "webkitMediaStream" in t, "webkitSpeechGrammar" in t]) >= 5
}

function X() {
  var t = window,
    n = navigator;
  return q(["ApplePayError" in t, "CSSPrimitiveValue" in t, "Counter" in t, n.vendor.indexOf("Apple") === 0, "RGBColor" in t, "WebKitMediaKeys" in t]) >= 4
}

function bt() {
  var t = window,
    n = t.HTMLElement,
    e = t.Document;
  return q(["safari" in t, !("ongestureend" in t), !("TouchEvent" in t), !("orientation" in t), n && !("autocapitalize" in n.prototype), e && "pointerLockElement" in e.prototype]) >= 4
}

function $e() {
  var t = window;
  return _r(t.print) && String(t.browser) === "[object WebPageNamespace]"
}

function wn() {
  var t, n, e = window;
  return q(["buildID" in navigator, "MozAppearance" in ((n = (t = document.documentElement) === null || t === void 0 ? void 0 : t.style) !== null && n !== void 0 ? n : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4
}

function gr() {
  var t = window;
  return q([!("MediaSettingsRange" in t), "RTCEncodedAudioFrame" in t, "" + t.Intl == "[object Intl]", "" + t.Reflect == "[object Reflect]"]) >= 3
}

function wr() {
  var t = window,
    n = t.URLPattern;
  return q(["union" in Set.prototype, "Iterator" in t, n && "hasRegExpGroups" in n.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3
}

function yr() {
  var t = window;
  return q(["DOMRectList" in t, "RTCPeerConnectionIceEvent" in t, "SVGGeometryElement" in t, "ontransitioncancel" in t]) >= 3
}

function Je() {
  var t = window,
    n = navigator,
    e = t.CSS,
    r = t.HTMLButtonElement;
  return q([!("getStorageUpdates" in n), r && "popover" in r.prototype, "CSSCounterStyleRule" in t, e.supports("font-size-adjust: ex-height 0.5"), e.supports("text-transform: full-width")]) >= 4
}

function vr() {
  if (navigator.platform === "iPad") return !0;
  var t = screen,
    n = t.width / t.height;
  return q(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, n > .65 && n < 1.53]) >= 2
}

function br() {
  var t = document;
  return t.fullscreenElement || t.msFullscreenElement || t.mozFullScreenElement || t.webkitFullscreenElement || null
}

function Er() {
  var t = document;
  return (t.exitFullscreen || t.msExitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen).call(t)
}

function Et() {
  var t = Ze(),
    n = wn(),
    e = window,
    r = navigator,
    a = "connection";
  return t ? q([!("SharedWorker" in e), r[a] && "ontypechange" in r[a], !("sinkId" in new Audio)]) >= 2 : n ? q(["onorientationchange" in e, "orientation" in e, /android/i.test(r.appVersion)]) >= 2 : !1
}

function Tr() {
  var t = navigator,
    n = window,
    e = Audio.prototype,
    r = n.visualViewport;
  return q(["srLatency" in e, "srChannelCount" in e, "devicePosture" in t, r && "segments" in r, "getTextInformation" in Image.prototype]) >= 3
}

function Or() {
  return Ar() ? -4 : Sr()
}

function Sr() {
  var t = window,
    n = t.OfflineAudioContext || t.webkitOfflineAudioContext;
  if (!n) return -2;
  if (Ir()) return -1;
  var e = 4500,
    r = 5e3,
    a = new n(1, r, 44100),
    i = a.createOscillator();
  i.type = "triangle", i.frequency.value = 1e4;
  var o = a.createDynamicsCompressor();
  o.threshold.value = -50, o.knee.value = 40, o.ratio.value = 12, o.attack.value = 0, o.release.value = .25, i.connect(o), o.connect(a.destination), i.start(0);
  var s = kr(a),
    l = s[0],
    u = s[1],
    _ = Oe(l.then(function(d) {
      return Rr(d.getChannelData(0).subarray(e))
    }, function(d) {
      if (d.name === "timeout" || d.name === "suspended") return -3;
      throw d
    }));
  return function() {
    return u(), _
  }
}

function Ir() {
  return X() && !bt() && !yr()
}

function Ar() {
  return X() && Je() && $e() || Ze() && Tr() && wr()
}

function kr(t) {
  var n = 3,
    e = 500,
    r = 500,
    a = 5e3,
    i = function() {},
    o = new Promise(function(s, l) {
      var u = !1,
        _ = 0,
        d = 0;
      t.oncomplete = function(b) {
        return s(b.renderedBuffer)
      };
      var p = function() {
          setTimeout(function() {
            return l(Ut("timeout"))
          }, Math.min(r, d + a - Date.now()))
        },
        g = function() {
          try {
            var b = t.startRendering();
            switch (pn(b) && Oe(b), t.state) {
              case "running":
                d = Date.now(), u && p();
                break;
              case "suspended":
                document.hidden || _++, u && _ >= n ? l(Ut("suspended")) : setTimeout(g, e);
                break
            }
          } catch (w) {
            l(w)
          }
        };
      g(), i = function() {
        u || (u = !0, d > 0 && p())
      }
    });
  return [o, i]
}

function Rr(t) {
  for (var n = 0, e = 0; e < t.length; ++e) n += Math.abs(t[e]);
  return n
}

function Ut(t) {
  var n = new Error(t);
  return n.name = t, n
}

function yn(t, n, e) {
  var r, a, i;
  return e === void 0 && (e = 50), Q(this, void 0, void 0, function() {
    var o, s;
    return ee(this, function(l) {
      switch (l.label) {
        case 0:
          o = document, l.label = 1;
        case 1:
          return o.body ? [3, 3] : [4, rt(e)];
        case 2:
          return l.sent(), [3, 1];
        case 3:
          s = o.createElement("iframe"), l.label = 4;
        case 4:
          return l.trys.push([4, , 10, 11]), [4, new Promise(function(u, _) {
            var d = !1,
              p = function() {
                d = !0, u()
              },
              g = function(E) {
                d = !0, _(E)
              };
            s.onload = p, s.onerror = g;
            var b = s.style;
            b.setProperty("display", "block", "important"), b.position = "absolute", b.top = "0", b.left = "0", b.visibility = "hidden", n && "srcdoc" in s ? s.srcdoc = n : s.src = "about:blank", o.body.appendChild(s);
            var w = function() {
              var E, S;
              d || (((S = (E = s.contentWindow) === null || E === void 0 ? void 0 : E.document) === null || S === void 0 ? void 0 : S.readyState) === "complete" ? p() : setTimeout(w, 10))
            };
            w()
          })];
        case 5:
          l.sent(), l.label = 6;
        case 6:
          return !((a = (r = s.contentWindow) === null || r === void 0 ? void 0 : r.document) === null || a === void 0) && a.body ? [3, 8] : [4, rt(e)];
        case 7:
          return l.sent(), [3, 6];
        case 8:
          return [4, t(s, s.contentWindow)];
        case 9:
          return [2, l.sent()];
        case 10:
          return (i = s.parentNode) === null || i === void 0 || i.removeChild(s), [7];
        case 11:
          return [2]
      }
    })
  })
}

function Nr(t) {
  for (var n = ar(t), e = n[0], r = n[1], a = document.createElement(e ?? "div"), i = 0, o = Object.keys(r); i < o.length; i++) {
    var s = o[i],
      l = r[s].join(" ");
    s === "style" ? xr(a.style, l) : a.setAttribute(s, l)
  }
  return a
}

function xr(t, n) {
  for (var e = 0, r = n.split(";"); e < r.length; e++) {
    var a = r[e],
      i = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(a);
    if (i) {
      var o = i[1],
        s = i[2],
        l = i[4];
      t.setProperty(o, s, l || "")
    }
  }
}

function Dr() {
  for (var t = window;;) {
    var n = t.parent;
    if (!n || n === t) return !1;
    try {
      if (n.location.origin !== t.location.origin) return !0
    } catch (e) {
      if (e instanceof Error && e.name === "SecurityError") return !0;
      throw e
    }
    t = n
  }
}
var Lr = "mmMwWLliI0O&1",
  Mr = "48px",
  pe = ["monospace", "sans-serif", "serif"],
  jt = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function Pr() {
  var t = this;
  return yn(function(n, e) {
    var r = e.document;
    return Q(t, void 0, void 0, function() {
      var a, i, o, s, l, u, _, d, p, g, b, w;
      return ee(this, function(E) {
        for (a = r.body, a.style.fontSize = Mr, i = r.createElement("div"), i.style.setProperty("visibility", "hidden", "important"), o = {}, s = {}, l = function(S) {
            var N = r.createElement("span"),
              j = N.style;
            return j.position = "absolute", j.top = "0", j.left = "0", j.fontFamily = S, N.textContent = Lr, i.appendChild(N), N
          }, u = function(S, N) {
            return l("'".concat(S, "',").concat(N))
          }, _ = function() {
            return pe.map(l)
          }, d = function() {
            for (var S = {}, N = function(y) {
                S[y] = pe.map(function(O) {
                  return u(y, O)
                })
              }, j = 0, C = jt; j < C.length; j++) {
              var H = C[j];
              N(H)
            }
            return S
          }, p = function(S) {
            return pe.some(function(N, j) {
              return S[j].offsetWidth !== o[N] || S[j].offsetHeight !== s[N]
            })
          }, g = _(), b = d(), a.appendChild(i), w = 0; w < pe.length; w++) o[pe[w]] = g[w].offsetWidth, s[pe[w]] = g[w].offsetHeight;
        return [2, jt.filter(function(S) {
          return p(b[S])
        })]
      })
    })
  })
}

function Ur() {
  var t = navigator.plugins;
  if (t) {
    for (var n = [], e = 0; e < t.length; ++e) {
      var r = t[e];
      if (r) {
        for (var a = [], i = 0; i < r.length; ++i) {
          var o = r[i];
          a.push({
            type: o.type,
            suffixes: o.suffixes
          })
        }
        n.push({
          name: r.name,
          description: r.description,
          mimeTypes: a
        })
      }
    }
    return n
  }
}

function jr() {
  return Cr(qr())
}

function Cr(t) {
  var n, e = !1,
    r, a, i = Fr(),
    o = i[0],
    s = i[1];
  return Br(o, s) ? (e = zr(s), t ? r = a = "skipped" : (n = Vr(o, s), r = n[0], a = n[1])) : r = a = "unsupported", {
    winding: e,
    geometry: r,
    text: a
  }
}

function Fr() {
  var t = document.createElement("canvas");
  return t.width = 1, t.height = 1, [t, t.getContext("2d")]
}

function Br(t, n) {
  return !!(n && t.toDataURL)
}

function zr(t) {
  return t.rect(0, 0, 10, 10), t.rect(2, 2, 6, 6), !t.isPointInPath(5, 5, "evenodd")
}

function Vr(t, n) {
  Gr(t, n);
  var e = lt(t),
    r = lt(t);
  if (e !== r) return ["unstable", "unstable"];
  Wr(t, n);
  var a = lt(t);
  return [a, e]
}

function Gr(t, n) {
  t.width = 240, t.height = 60, n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(100, 1, 62, 20), n.fillStyle = "#069", n.font = '11pt "Times New Roman"';
  var e = "Cwm fjordbank gly ".concat("😃");
  n.fillText(e, 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText(e, 4, 45)
}

function Wr(t, n) {
  t.width = 122, t.height = 110, n.globalCompositeOperation = "multiply";
  for (var e = 0, r = [
      ["#f2f", 40, 40],
      ["#2ff", 80, 40],
      ["#ff2", 60, 80]
    ]; e < r.length; e++) {
    var a = r[e],
      i = a[0],
      o = a[1],
      s = a[2];
    n.fillStyle = i, n.beginPath(), n.arc(o, s, 40, 0, Math.PI * 2, !0), n.closePath(), n.fill()
  }
  n.fillStyle = "#f9c", n.arc(60, 60, 60, 0, Math.PI * 2, !0), n.arc(60, 60, 20, 0, Math.PI * 2, !0), n.fill("evenodd")
}

function lt(t) {
  return t.toDataURL()
}

function qr() {
  return X() && Je() && $e()
}

function Kr() {
  var t = navigator,
    n = 0,
    e;
  t.maxTouchPoints !== void 0 ? n = vt(t.maxTouchPoints) : t.msMaxTouchPoints !== void 0 && (n = t.msMaxTouchPoints);
  try {
    document.createEvent("TouchEvent"), e = !0
  } catch {
    e = !1
  }
  var r = "ontouchstart" in window;
  return {
    maxTouchPoints: n,
    touchEvent: e,
    touchStart: r
  }
}

function Hr() {
  return navigator.oscpu
}

function Yr() {
  var t = navigator,
    n = [],
    e = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
  if (e !== void 0 && n.push([e]), Array.isArray(t.languages)) Ze() && gr() || n.push(t.languages);
  else if (typeof t.languages == "string") {
    var r = t.languages;
    r && n.push(r.split(","))
  }
  return n
}

function Zr() {
  return window.screen.colorDepth
}

function $r() {
  return re(J(navigator.deviceMemory), void 0)
}

function Jr() {
  if (!(X() && Je() && $e())) return Xr()
}

function Xr() {
  var t = screen,
    n = function(r) {
      return re(vt(r), null)
    },
    e = [n(t.width), n(t.height)];
  return e.sort().reverse(), e
}
var Qr = 2500,
  ea = 10,
  et, dt;

function ta() {
  if (dt === void 0) {
    var t = function() {
      var n = ht();
      gt(n) ? dt = setTimeout(t, Qr) : (et = n, dt = void 0)
    };
    t()
  }
}

function na() {
  var t = this;
  return ta(),
    function() {
      return Q(t, void 0, void 0, function() {
        var n;
        return ee(this, function(e) {
          switch (e.label) {
            case 0:
              return n = ht(), gt(n) ? et ? [2, fn([], et, !0)] : br() ? [4, Er()] : [3, 2] : [3, 2];
            case 1:
              e.sent(), n = ht(), e.label = 2;
            case 2:
              return gt(n) || (et = n), [2, n]
          }
        })
      })
    }
}

function ra() {
  var t = this;
  if (X() && Je() && $e()) return function() {
    return Promise.resolve(void 0)
  };
  var n = na();
  return function() {
    return Q(t, void 0, void 0, function() {
      var e, r;
      return ee(this, function(a) {
        switch (a.label) {
          case 0:
            return [4, n()];
          case 1:
            return e = a.sent(), r = function(i) {
              return i === null ? null : hn(i, ea)
            }, [2, [r(e[0]), r(e[1]), r(e[2]), r(e[3])]]
        }
      })
    })
  }
}

function ht() {
  var t = screen;
  return [re(J(t.availTop), null), re(J(t.width) - J(t.availWidth) - re(J(t.availLeft), 0), null), re(J(t.height) - J(t.availHeight) - re(J(t.availTop), 0), null), re(J(t.availLeft), null)]
}

function gt(t) {
  for (var n = 0; n < 4; ++n)
    if (t[n]) return !1;
  return !0
}

function aa() {
  return re(vt(navigator.hardwareConcurrency), void 0)
}

function ia() {
  var t, n = (t = window.Intl) === null || t === void 0 ? void 0 : t.DateTimeFormat;
  if (n) {
    var e = new n().resolvedOptions().timeZone;
    if (e) return e
  }
  var r = -oa();
  return "UTC".concat(r >= 0 ? "+" : "").concat(r)
}

function oa() {
  var t = new Date().getFullYear();
  return Math.max(J(new Date(t, 0, 1).getTimezoneOffset()), J(new Date(t, 6, 1).getTimezoneOffset()))
}

function sa() {
  try {
    return !!window.sessionStorage
  } catch {
    return !0
  }
}

function ca() {
  try {
    return !!window.localStorage
  } catch {
    return !0
  }
}

function ua() {
  if (!(gn() || hr())) try {
    return !!window.indexedDB
  } catch {
    return !0
  }
}

function la() {
  return !!window.openDatabase
}

function da() {
  return navigator.cpuClass
}

function _a() {
  var t = navigator.platform;
  return t === "MacIntel" && X() && !bt() ? vr() ? "iPad" : "iPhone" : t
}

function fa() {
  return navigator.vendor || ""
}

function ma() {
  for (var t = [], n = 0, e = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; n < e.length; n++) {
    var r = e[n],
      a = window[r];
    a && typeof a == "object" && t.push(r)
  }
  return t.sort()
}

function pa() {
  var t = document;
  try {
    t.cookie = "cookietest=1; SameSite=Strict;";
    var n = t.cookie.indexOf("cookietest=") !== -1;
    return t.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", n
  } catch {
    return !1
  }
}

function ha() {
  var t = atob;
  return {
    abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', t("I0JveC1CYW5uZXItYWRz")],
    abpvn: [".quangcao", "#mobileCatfish", t("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
    adBlockFinland: [".mainostila", t("LnNwb25zb3JpdA=="), ".ylamainos", t("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), t("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
    adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", t("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
    adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", t("LmhlYWRlci1ibG9ja2VkLWFk"), t("I2FkX2Jsb2NrZXI=")],
    adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
    adGuardBase: [".BetterJsPopOverlay", t("I2FkXzMwMFgyNTA="), t("I2Jhbm5lcmZsb2F0MjI="), t("I2NhbXBhaWduLWJhbm5lcg=="), t("I0FkLUNvbnRlbnQ=")],
    adGuardChinese: [t("LlppX2FkX2FfSA=="), t("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", t("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), t("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
    adGuardFrench: ["#pavePub", t("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", t("LmFkc19iYW4=")],
    adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
    adGuardJapanese: ["#kauli_yad_1", t("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), t("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), t("LmFkZ29vZ2xl"), t("Ll9faXNib29zdFJldHVybkFk")],
    adGuardMobile: [t("YW1wLWF1dG8tYWRz"), t("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", t("I2FkX2ludmlld19hcmVh")],
    adGuardRussian: [t("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), t("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', t("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
    adGuardSocial: [t("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), t("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
    adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
    adGuardTrackingProtection: ["#qoo-counter", t("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), t("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), t("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
    adGuardTurkish: ["#backkapat", t("I3Jla2xhbWk="), t("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), t("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), t("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
    bulgarian: [t("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
    easyList: [".yb-floorad", t("LndpZGdldF9wb19hZHNfd2lkZ2V0"), t("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", t("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
    easyListChina: [t("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), t("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
    easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", t("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
    easyListCzechSlovak: ["#onlajny-stickers", t("I3Jla2xhbW5pLWJveA=="), t("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", t("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
    easyListDutch: [t("I2FkdmVydGVudGll"), t("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", t("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
    easyListGermany: ["#SSpotIMPopSlider", t("LnNwb25zb3JsaW5rZ3J1ZW4="), t("I3dlcmJ1bmdza3k="), t("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), t("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
    easyListItaly: [t("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", t("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), t("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), t("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
    easyListLithuania: [t("LnJla2xhbW9zX3RhcnBhcw=="), t("LnJla2xhbW9zX251b3JvZG9z"), t("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), t("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), t("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
    estonian: [t("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
    fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
    fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
    fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
    fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
    frellwitSwedish: [t("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), t("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", t("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
    greekAdBlock: [t("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), t("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), t("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
    hungarian: ["#cemp_doboz", ".optimonk-iframe-container", t("LmFkX19tYWlu"), t("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
    iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
    icelandicAbp: [t("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
    latvian: [t("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), t("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
    listKr: [t("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), t("I2xpdmVyZUFkV3JhcHBlcg=="), t("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), t("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
    listeAr: [t("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", t("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), t("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), t("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
    listeFr: [t("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), t("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), t("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
    officialPolish: ["#ceneo-placeholder-ceneo-12", t("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), t("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), t("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), t("ZGl2I3NrYXBpZWNfYWQ=")],
    ro: [t("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), t("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), t("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), t("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
    ruAd: [t("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), t("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), t("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
    thaiAds: ["a[href*=macau-uta-popup]", t("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), t("LmFkczMwMHM="), ".bumq", ".img-kosana"],
    webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", t("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
  }
}

function ga(t) {
  var n = t === void 0 ? {} : t,
    e = n.debug;
  return Q(this, void 0, void 0, function() {
    var r, a, i, o, s, l;
    return ee(this, function(u) {
      switch (u.label) {
        case 0:
          return wa() ? (r = ha(), a = Object.keys(r), i = (l = []).concat.apply(l, a.map(function(_) {
            return r[_]
          })), [4, ya(i)]) : [2, void 0];
        case 1:
          return o = u.sent(), e && va(r, o), s = a.filter(function(_) {
            var d = r[_],
              p = q(d.map(function(g) {
                return o[g]
              }));
            return p > d.length * .6
          }), s.sort(), [2, s]
      }
    })
  })
}

function wa() {
  return X() || Et()
}

function ya(t) {
  var n;
  return Q(this, void 0, void 0, function() {
    var e, r, a, i, l, o, s, l;
    return ee(this, function(u) {
      switch (u.label) {
        case 0:
          for (e = document, r = e.createElement("div"), a = new Array(t.length), i = {}, Ct(r), l = 0; l < t.length; ++l) o = Nr(t[l]), o.tagName === "DIALOG" && o.show(), s = e.createElement("div"), Ct(s), s.appendChild(o), r.appendChild(s), a[l] = o;
          u.label = 1;
        case 1:
          return e.body ? [3, 3] : [4, rt(50)];
        case 2:
          return u.sent(), [3, 1];
        case 3:
          e.body.appendChild(r);
          try {
            for (l = 0; l < t.length; ++l) a[l].offsetParent || (i[t[l]] = !0)
          } finally {
            (n = r.parentNode) === null || n === void 0 || n.removeChild(r)
          }
          return [2, i]
      }
    })
  })
}

function Ct(t) {
  t.style.setProperty("visibility", "hidden", "important"), t.style.setProperty("display", "block", "important")
}

function va(t, n) {
  for (var e = "DOM blockers debug:\n```", r = 0, a = Object.keys(t); r < a.length; r++) {
    var i = a[r];
    e += `
`.concat(i, ":");
    for (var o = 0, s = t[i]; o < s.length; o++) {
      var l = s[o];
      e += `
  `.concat(n[l] ? "🚫" : "➡️", " ").concat(l)
    }
  }
  console.log("".concat(e, "\n```"))
}

function ba() {
  for (var t = 0, n = ["rec2020", "p3", "srgb"]; t < n.length; t++) {
    var e = n[t];
    if (matchMedia("(color-gamut: ".concat(e, ")")).matches) return e
  }
}

function Ea() {
  if (Ft("inverted")) return !0;
  if (Ft("none")) return !1
}

function Ft(t) {
  return matchMedia("(inverted-colors: ".concat(t, ")")).matches
}

function Ta() {
  if (Bt("active")) return !0;
  if (Bt("none")) return !1
}

function Bt(t) {
  return matchMedia("(forced-colors: ".concat(t, ")")).matches
}
var Oa = 100;

function Sa() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (var t = 0; t <= Oa; ++t)
      if (matchMedia("(max-monochrome: ".concat(t, ")")).matches) return t;
    throw new Error("Too high value")
  }
}

function Ia() {
  if (he("no-preference")) return 0;
  if (he("high") || he("more")) return 1;
  if (he("low") || he("less")) return -1;
  if (he("forced")) return 10
}

function he(t) {
  return matchMedia("(prefers-contrast: ".concat(t, ")")).matches
}

function Aa() {
  if (zt("reduce")) return !0;
  if (zt("no-preference")) return !1
}

function zt(t) {
  return matchMedia("(prefers-reduced-motion: ".concat(t, ")")).matches
}

function ka() {
  if (Vt("reduce")) return !0;
  if (Vt("no-preference")) return !1
}

function Vt(t) {
  return matchMedia("(prefers-reduced-transparency: ".concat(t, ")")).matches
}

function Ra() {
  if (Gt("high")) return !0;
  if (Gt("standard")) return !1
}

function Gt(t) {
  return matchMedia("(dynamic-range: ".concat(t, ")")).matches
}
var A = Math,
  W = function() {
    return 0
  };

function Na() {
  var t = A.acos || W,
    n = A.acosh || W,
    e = A.asin || W,
    r = A.asinh || W,
    a = A.atanh || W,
    i = A.atan || W,
    o = A.sin || W,
    s = A.sinh || W,
    l = A.cos || W,
    u = A.cosh || W,
    _ = A.tan || W,
    d = A.tanh || W,
    p = A.exp || W,
    g = A.expm1 || W,
    b = A.log1p || W,
    w = function(v) {
      return A.pow(A.PI, v)
    },
    E = function(v) {
      return A.log(v + A.sqrt(v * v - 1))
    },
    S = function(v) {
      return A.log(v + A.sqrt(v * v + 1))
    },
    N = function(v) {
      return A.log((1 + v) / (1 - v)) / 2
    },
    j = function(v) {
      return A.exp(v) - 1 / A.exp(v) / 2
    },
    C = function(v) {
      return (A.exp(v) + 1 / A.exp(v)) / 2
    },
    H = function(v) {
      return A.exp(v) - 1
    },
    y = function(v) {
      return (A.exp(2 * v) - 1) / (A.exp(2 * v) + 1)
    },
    O = function(v) {
      return A.log(1 + v)
    };
  return {
    acos: t(.12312423423423424),
    acosh: n(1e308),
    acoshPf: E(1e154),
    asin: e(.12312423423423424),
    asinh: r(1),
    asinhPf: S(1),
    atanh: a(.5),
    atanhPf: N(.5),
    atan: i(.5),
    sin: o(-1e300),
    sinh: s(1),
    sinhPf: j(1),
    cos: l(10.000000000123),
    cosh: u(1),
    coshPf: C(1),
    tan: _(-1e300),
    tanh: d(1),
    tanhPf: y(1),
    exp: p(1),
    expm1: g(1),
    expm1Pf: H(1),
    log1p: b(10),
    log1pPf: O(10),
    powPI: w(-100)
  }
}
var xa = "mmMwWLliI0fiflO&1",
  _t = {
    default: [],
    apple: [{
      font: "-apple-system-body"
    }],
    serif: [{
      fontFamily: "serif"
    }],
    sans: [{
      fontFamily: "sans-serif"
    }],
    mono: [{
      fontFamily: "monospace"
    }],
    min: [{
      fontSize: "1px"
    }],
    system: [{
      fontFamily: "system-ui"
    }]
  };

function Da() {
  return La(function(t, n) {
    for (var e = {}, r = {}, a = 0, i = Object.keys(_t); a < i.length; a++) {
      var o = i[a],
        s = _t[o],
        l = s[0],
        u = l === void 0 ? {} : l,
        _ = s[1],
        d = _ === void 0 ? xa : _,
        p = t.createElement("span");
      p.textContent = d, p.style.whiteSpace = "nowrap";
      for (var g = 0, b = Object.keys(u); g < b.length; g++) {
        var w = b[g],
          E = u[w];
        E !== void 0 && (p.style[w] = E)
      }
      e[o] = p, n.append(t.createElement("br"), p)
    }
    for (var S = 0, N = Object.keys(_t); S < N.length; S++) {
      var o = N[S];
      r[o] = e[o].getBoundingClientRect().width
    }
    return r
  })
}

function La(t, n) {
  return n === void 0 && (n = 4e3), yn(function(e, r) {
    var a = r.document,
      i = a.body,
      o = i.style;
    o.width = "".concat(n, "px"), o.webkitTextSizeAdjust = o.textSizeAdjust = "none", Ze() ? i.style.zoom = "".concat(1 / r.devicePixelRatio) : X() && (i.style.zoom = "reset");
    var s = a.createElement("div");
    return s.textContent = fn([], Array(n / 20 << 0), !0).map(function() {
      return "word"
    }).join(" "), i.appendChild(s), t(a, i)
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
}

function Ma() {
  return navigator.pdfViewerEnabled
}

function Pa() {
  var t = new Float32Array(1),
    n = new Uint8Array(t.buffer);
  return t[0] = 1 / 0, t[0] = t[0] - t[0], n[3]
}

function Ua() {
  var t = window.ApplePaySession;
  if (typeof(t == null ? void 0 : t.canMakePayments) != "function") return -1;
  if (ja()) return -3;
  try {
    return t.canMakePayments() ? 1 : 0
  } catch (n) {
    return Ca(n)
  }
}
var ja = Dr;

function Ca(t) {
  if (t instanceof Error && t.name === "InvalidAccessError" && /\bfrom\b.*\binsecure\b/i.test(t.message)) return -2;
  throw t
}

function Fa() {
  var t, n = document.createElement("a"),
    e = (t = n.attributionSourceId) !== null && t !== void 0 ? t : n.attributionsourceid;
  return e === void 0 ? void 0 : String(e)
}
var vn = -1,
  bn = -2,
  Ba = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
  za = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  Va = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
  Ga = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
  En = "WEBGL_debug_renderer_info",
  Wa = "WEBGL_polygon_mode";

function qa(t) {
  var n, e, r, a, i, o, s = t.cache,
    l = Tn(s);
  if (!l) return vn;
  if (!Sn(l)) return bn;
  var u = On() ? null : l.getExtension(En);
  return {
    version: ((n = l.getParameter(l.VERSION)) === null || n === void 0 ? void 0 : n.toString()) || "",
    vendor: ((e = l.getParameter(l.VENDOR)) === null || e === void 0 ? void 0 : e.toString()) || "",
    vendorUnmasked: u ? (r = l.getParameter(u.UNMASKED_VENDOR_WEBGL)) === null || r === void 0 ? void 0 : r.toString() : "",
    renderer: ((a = l.getParameter(l.RENDERER)) === null || a === void 0 ? void 0 : a.toString()) || "",
    rendererUnmasked: u ? (i = l.getParameter(u.UNMASKED_RENDERER_WEBGL)) === null || i === void 0 ? void 0 : i.toString() : "",
    shadingLanguageVersion: ((o = l.getParameter(l.SHADING_LANGUAGE_VERSION)) === null || o === void 0 ? void 0 : o.toString()) || ""
  }
}

function Ka(t) {
  var n = t.cache,
    e = Tn(n);
  if (!e) return vn;
  if (!Sn(e)) return bn;
  var r = e.getSupportedExtensions(),
    a = e.getContextAttributes(),
    i = [],
    o = [],
    s = [],
    l = [],
    u = [];
  if (a)
    for (var _ = 0, d = Object.keys(a); _ < d.length; _++) {
      var p = d[_];
      o.push("".concat(p, "=").concat(a[p]))
    }
  for (var g = Wt(e), b = 0, w = g; b < w.length; b++) {
    var E = w[b],
      S = e[E];
    s.push("".concat(E, "=").concat(S).concat(Ba.has(S) ? "=".concat(e.getParameter(S)) : ""))
  }
  if (r)
    for (var N = 0, j = r; N < j.length; N++) {
      var C = j[N];
      if (!(C === En && On() || C === Wa && Za())) {
        var H = e.getExtension(C);
        if (!H) {
          i.push(C);
          continue
        }
        for (var y = 0, O = Wt(H); y < O.length; y++) {
          var E = O[y],
            S = H[E];
          l.push("".concat(E, "=").concat(S).concat(za.has(S) ? "=".concat(e.getParameter(S)) : ""))
        }
      }
    }
  for (var v = 0, $ = Va; v < $.length; v++)
    for (var G = $[v], V = 0, te = Ga; V < te.length; V++) {
      var fe = te[V],
        ut = Ha(e, G, fe);
      u.push("".concat(G, ".").concat(fe, "=").concat(ut.join(",")))
    }
  return l.sort(), s.sort(), {
    contextAttributes: o,
    parameters: s,
    shaderPrecisions: u,
    extensions: r,
    extensionParameters: l,
    unsupportedExtensions: i
  }
}

function Tn(t) {
  if (t.webgl) return t.webgl.context;
  var n = document.createElement("canvas"),
    e;
  n.addEventListener("webglCreateContextError", function() {
    return e = void 0
  });
  for (var r = 0, a = ["webgl", "experimental-webgl"]; r < a.length; r++) {
    var i = a[r];
    try {
      e = n.getContext(i)
    } catch {}
    if (e) break
  }
  return t.webgl = {
    context: e
  }, e
}

function Ha(t, n, e) {
  var r = t.getShaderPrecisionFormat(t[n], t[e]);
  return r ? [r.rangeMin, r.rangeMax, r.precision] : []
}

function Wt(t) {
  var n = Object.keys(t.__proto__);
  return n.filter(Ya)
}

function Ya(t) {
  return typeof t == "string" && !t.match(/[^A-Z0-9_x]/)
}

function On() {
  return wn()
}

function Za() {
  return Ze() || X()
}

function Sn(t) {
  return typeof t.getParameter == "function"
}

function $a() {
  var t = Et() || X();
  if (!t) return -2;
  if (!window.AudioContext) return -1;
  var n = new AudioContext().baseLatency;
  return n == null ? -1 : isFinite(n) ? n : -3
}

function Ja() {
  if (!window.Intl) return -1;
  var t = window.Intl.DateTimeFormat;
  if (!t) return -2;
  var n = t().resolvedOptions().locale;
  return !n && n !== "" ? -3 : n
}
var Xa = {
  fonts: Pr,
  domBlockers: ga,
  fontPreferences: Da,
  audio: Or,
  screenFrame: ra,
  canvas: jr,
  osCpu: Hr,
  languages: Yr,
  colorDepth: Zr,
  deviceMemory: $r,
  screenResolution: Jr,
  hardwareConcurrency: aa,
  timezone: ia,
  sessionStorage: sa,
  localStorage: ca,
  indexedDB: ua,
  openDatabase: la,
  cpuClass: da,
  platform: _a,
  plugins: Ur,
  touchSupport: Kr,
  vendor: fa,
  vendorFlavors: ma,
  cookiesEnabled: pa,
  colorGamut: ba,
  invertedColors: Ea,
  forcedColors: Ta,
  monochrome: Sa,
  contrast: Ia,
  reducedMotion: Aa,
  reducedTransparency: ka,
  hdr: Ra,
  math: Na,
  pdfViewerEnabled: Ma,
  architecture: Pa,
  applePay: Ua,
  privateClickMeasurement: Fa,
  audioBaseLatency: $a,
  dateTimeLocale: Ja,
  webGlBasics: qa,
  webGlExtensions: Ka
};

function Qa(t) {
  return pr(Xa, t, [])
}
var ei = "$ if upgrade to Pro: https://fpjs.dev/pro";

function ti(t) {
  var n = ni(t),
    e = ri(n);
  return {
    score: n,
    comment: ei.replace(/\$/g, "".concat(e))
  }
}

function ni(t) {
  if (Et()) return .4;
  if (X()) return bt() && !(Je() && $e()) ? .5 : .3;
  var n = "value" in t.platform ? t.platform.value : "";
  return /^Win/.test(n) ? .6 : /^Mac/.test(n) ? .5 : .7
}

function ri(t) {
  return hn(.99 + .01 * t, 1e-4)
}

function ai(t) {
  for (var n = "", e = 0, r = Object.keys(t).sort(); e < r.length; e++) {
    var a = r[e],
      i = t[a],
      o = "error" in i ? "error" : JSON.stringify(i.value);
    n += "".concat(n ? "|" : "").concat(a.replace(/([:|\\])/g, "\\$1"), ":").concat(o)
  }
  return n
}

function In(t) {
  return JSON.stringify(t, function(n, e) {
    return e instanceof Error ? dr(e) : e
  }, 2)
}

function An(t) {
  return lr(ai(t))
}

function ii(t) {
  var n, e = ti(t);
  return {
    get visitorId() {
      return n === void 0 && (n = An(this.components)), n
    },
    set visitorId(r) {
      n = r
    },
    confidence: e,
    components: t,
    version: mn
  }
}

function oi(t) {
  return t === void 0 && (t = 50), tr(t, t * 2)
}

function si(t, n) {
  var e = Date.now();
  return {
    get: function(r) {
      return Q(this, void 0, void 0, function() {
        var a, i, o;
        return ee(this, function(s) {
          switch (s.label) {
            case 0:
              return a = Date.now(), [4, t()];
            case 1:
              return i = s.sent(), o = ii(i), (n || r != null && r.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(o.version, `
userAgent: `).concat(navigator.userAgent, `
timeBetweenLoadAndGet: `).concat(a - e, `
visitorId: `).concat(o.visitorId, `
components: `).concat(In(i), "\n```")), [2, o]
          }
        })
      })
    }
  }
}

function ci() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    var t = new XMLHttpRequest;
    t.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(mn, "/npm-monitoring"), !0), t.send()
  } catch (n) {
    console.error(n)
  }
}

function ui(t) {
  var n;
  return t === void 0 && (t = {}), Q(this, void 0, void 0, function() {
    var e, r, a;
    return ee(this, function(i) {
      switch (i.label) {
        case 0:
          return (!((n = t.monitoring) !== null && n !== void 0) || n) && ci(), e = t.delayFallback, r = t.debug, [4, oi(e)];
        case 1:
          return i.sent(), a = Qa({
            cache: {},
            debug: r
          }), [2, si(a, r)]
      }
    })
  })
}
var kn = {
  load: ui,
  hashComponents: An,
  componentsToDebugString: In
};
let ft = null,
  at;
async function li() {
  return ft || (ft = kn.load()), ft
}
async function it() {
  return at || di().then(t => t.visitorId)
}
async function di() {
  const n = await (await li()).get(),
    {
      languages: e,
      fontPreferences: r,
      dateTimeLocale: a,
      canvas: i,
      ...o
    } = n.components,
    s = navigator.userAgent,
    l = navigator.deviceMemory || 0,
    u = navigator.userAgent.toLowerCase(),
    _ = u.includes("chrome"),
    d = u.includes("iphone"),
    p = u.includes("macintosh"),
    g = d || p;
  return at = kn.hashComponents({
    ..._ ? {
      canvas: i,
      dateTimeLocale: a,
      languages: e
    } : {},
    ...g ? {
      canvas: i,
      languages: e,
      fontPreferences: r,
      dateTimeLocale: a
    } : {},
    languages: {
      value: [s, l],
      duration: 0
    },
    ...o
  }), {
    visitorId: at,
    components: o
  }
}
const _i = () => "Your account has been suspended for breaking the rules",
  fi = () => "Sua conta foi suspensa por quebrar as regras",
  mi = () => "您的账号因违反规则已被暂停",
  pi = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  hi = () => "Tu cuenta ha sido suspendida por infringir las regras",
  gi = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  wi = () => "Il tuo account è stato sospeso per aver infranto le regole",
  yi = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  vi = () => "Twoje konto zostało zawieszone za łamanie zasad",
  bi = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Ei = () => "Ваш обліковий запис було призупинено за порушення правил",
  Ti = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  Oi = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? _i() : e === "pt" ? fi() : e === "ch" ? mi() : e === "de" ? pi() : e === "es" ? hi() : e === "fr" ? gi() : e === "it" ? wi() : e === "jp" ? yi() : e === "pl" ? vi() : e === "ru" ? bi() : e === "uk" ? Ei() : Ti()
  },
  Si = () => "Alliance name already taken",
  Ii = () => "Já possui uma aliança com esse nome",
  Ai = () => "该联盟名称已被占用",
  ki = () => "Der Allianzname ist bereits vergeben",
  Ri = () => "Ese nombre de alianza ya está en uso",
  Ni = () => "Ce nom d’alliance est déjà pris",
  xi = () => "Esiste già un'alleanza con questo nome",
  Di = () => "このアライアンス名は既に使用されています。",
  Li = () => "Nazwa sojuszu jest już zajęta",
  Mi = () => "Такое название альянса уже используется",
  Pi = () => "Назва альянсу вже зайнята",
  Ui = () => "Tên liên minh đã được sử dụng",
  ji = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Si() : e === "pt" ? Ii() : e === "ch" ? Ai() : e === "de" ? ki() : e === "es" ? Ri() : e === "fr" ? Ni() : e === "it" ? xi() : e === "jp" ? Di() : e === "pl" ? Li() : e === "ru" ? Mi() : e === "uk" ? Pi() : Ui()
  },
  Ci = () => "Alliance name exceeded the maximum number of characters",
  Fi = () => "O nome da aliança excedeu o número máximo de caracteres",
  Bi = () => "联盟名称超过最大字符数限制",
  zi = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  Vi = () => "El nombre de la alianza superó el número máximo de caracteres",
  Gi = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  Wi = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  qi = () => "アライアンス名が最大文字数を超えています。",
  Ki = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  Hi = () => "Название альянса превышает максимальную длину",
  Yi = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  Zi = () => "Tên liên minh vượt quá số ký tự cho phép",
  $i = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Ci() : e === "pt" ? Fi() : e === "ch" ? Bi() : e === "de" ? zi() : e === "es" ? Vi() : e === "fr" ? Gi() : e === "it" ? Wi() : e === "jp" ? qi() : e === "pl" ? Ki() : e === "ru" ? Hi() : e === "uk" ? Yi() : Zi()
  },
  Ji = () => "Alliance with empty name",
  Xi = () => "Aliança com nome vazio",
  Qi = () => "名称为空的联盟",
  eo = () => "Allianz mit leerem Namen",
  to = () => "Alianza con nombre vacío",
  no = () => "Alliance avec nom vide",
  ro = () => "Alleanza con nome vuoto",
  ao = () => "名前が空のアライアンスです。",
  io = () => "Sojusz z pustą nazwą",
  oo = () => "Альянс с пустым названием",
  so = () => "Альянс із порожньою назвою",
  co = () => "Liên minh không có tên",
  uo = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Ji() : e === "pt" ? Xi() : e === "ch" ? Qi() : e === "de" ? eo() : e === "es" ? to() : e === "fr" ? no() : e === "it" ? ro() : e === "jp" ? ao() : e === "pl" ? io() : e === "ru" ? oo() : e === "uk" ? so() : co()
  },
  lo = () => "Botting",
  _o = () => "Uso de bots",
  fo = () => "脚本",
  mo = () => "Bot-Nutzung",
  po = () => "Botting",
  ho = () => "Bots",
  go = () => "Uso di bot",
  wo = () => "ボット使用",
  yo = () => "Botting",
  vo = () => "Боттинг",
  bo = () => "Боти",
  Eo = () => "Botting",
  To = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? lo() : e === "pt" ? _o() : e === "ch" ? fo() : e === "de" ? mo() : e === "es" ? po() : e === "fr" ? ho() : e === "it" ? go() : e === "jp" ? wo() : e === "pl" ? yo() : e === "ru" ? vo() : e === "uk" ? bo() : Eo()
  },
  Oo = () => "Use of software to completely automate painting",
  So = () => "Uso de software para pintar de forma completamente automatizada ",
  Io = () => "使用软件完全自动化绘制",
  Ao = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  ko = () => "Uso de software para automatizar completamente la pintura",
  Ro = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  No = () => "Uso di software per dipingere in modo completamente automatizzato",
  xo = () => "ペイントを完全に自動化するソフトウェアの使用",
  Do = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  Lo = () => "Использование программ для полной автоматизации рисования",
  Mo = () => "Використання програм, які повністю автоматизують малювання",
  Po = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  Uo = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Oo() : e === "pt" ? So() : e === "ch" ? Io() : e === "de" ? Ao() : e === "es" ? ko() : e === "fr" ? Ro() : e === "it" ? No() : e === "jp" ? xo() : e === "pl" ? Do() : e === "ru" ? Lo() : e === "uk" ? Mo() : Po()
  },
  jo = () => "Breaking the rules",
  Co = () => "Quebrar as regras",
  Fo = () => "违反规则",
  Bo = () => "Regeln brechen",
  zo = () => "Romper las reglas",
  Vo = () => "Violation des règles",
  Go = () => "Violazione delle regole",
  Wo = () => "ルール違反",
  qo = () => "Łamanie zasad",
  Ko = () => "Нарушение правил",
  Ho = () => "Порушення правил",
  Yo = () => "Vi phạm luật",
  Zo = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? jo() : e === "pt" ? Co() : e === "ch" ? Fo() : e === "de" ? Bo() : e === "es" ? zo() : e === "fr" ? Vo() : e === "it" ? Go() : e === "jp" ? Wo() : e === "pl" ? qo() : e === "ru" ? Ko() : e === "uk" ? Ho() : Yo()
  },
  $o = () => "You have broken one of Wplace's rules",
  Jo = () => "Você quebrou uma das regras do Wplace",
  Xo = () => "你违反了 Wplace 的一项规则",
  Qo = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  es = () => "Has infringido una de las reglas de Wplace",
  ts = () => "Vous avez enfreint l’une des règles de Wplace",
  ns = () => "Hai infranto una delle regole di Wplace",
  rs = () => "Wplaceのルールのいずれかに違反しました。",
  as = () => "Złamałeś jedną z zasad Wplace",
  is = () => "Вы нарушили одно из правил Wplace",
  os = () => "Ви порушили одне з правил Wplace",
  ss = () => "Bạn đã vi phạm một trong các luật của Wplace",
  cs = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? $o() : e === "pt" ? Jo() : e === "ch" ? Xo() : e === "de" ? Qo() : e === "es" ? es() : e === "fr" ? ts() : e === "it" ? ns() : e === "jp" ? rs() : e === "pl" ? as() : e === "ru" ? is() : e === "uk" ? os() : ss()
  },
  us = () => "You cannot paint over event pixels",
  ls = () => "Você não pode pintar sobre pixels de eventos",
  ds = () => "你不能覆盖活动像素",
  _s = () => "Du kannst nicht über Event-Pixel malen",
  fs = () => "No puedes pintar sobre píxeles de evento",
  ms = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  ps = () => "Non puoi dipingere sopra i pixel dell'evento",
  hs = () => "イベント用のピクセルの上には塗れません。",
  gs = () => "Nie możesz malować po pikselach wydarzenia",
  ws = () => "Вы не можете рисовать по пикселям события",
  ys = () => "Ви не можете малювати поверх пікселів події",
  vs = () => "Bạn không thể tô lên pixel sự kiện",
  qt = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? us() : e === "pt" ? ls() : e === "ch" ? ds() : e === "de" ? _s() : e === "es" ? fs() : e === "fr" ? ms() : e === "it" ? ps() : e === "jp" ? hs() : e === "pl" ? gs() : e === "ru" ? ws() : e === "uk" ? ys() : vs()
  },
  bs = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Es = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Ts = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  Os = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  Ss = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  Is = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  As = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  ks = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Rs = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Ns = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  xs = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Ds = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Ls = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? bs() : e === "pt" ? Es() : e === "ch" ? Ts() : e === "de" ? Os() : e === "es" ? Ss() : e === "fr" ? Is() : e === "it" ? As() : e === "jp" ? ks() : e === "pl" ? Rs() : e === "ru" ? Ns() : e === "uk" ? xs() : Ds()
  },
  Ms = () => "Challenge verification not completed",
  Ps = () => "Verificação do desafio não concluída",
  Us = () => "挑战验证未完成",
  js = () => "Herausforderungsverifizierung nicht abgeschlossen",
  Cs = () => "Verificación del desafío no completada",
  Fs = () => "Vérification du défi non terminée",
  Bs = () => "Verifica della sfida non completata",
  zs = () => "チャレンジ検証が完了していません",
  Vs = () => "Weryfikacja wyzwania niezakończona",
  Gs = () => "Верификация вызова не завершена",
  Ws = () => "Перевірку виклику не завершено",
  qs = () => "Xác minh thử thách chưa hoàn thành",
  Kt = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Ms() : e === "pt" ? Ps() : e === "ch" ? Us() : e === "de" ? js() : e === "es" ? Cs() : e === "fr" ? Fs() : e === "it" ? Bs() : e === "jp" ? zs() : e === "pl" ? Vs() : e === "ru" ? Gs() : e === "uk" ? Ws() : qs()
  },
  Ks = () => "Couldn't complete the purchase. This item does not exist.",
  Hs = () => "Não foi possível concluir a compra. Este item não existe.",
  Ys = () => "无法完成购买。该物品不存在。",
  Zs = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  $s = () => "No se pudo completar la compra. Este ítem no existe.",
  Js = () => "Achat impossible. Cet objet n’existe pas.",
  Xs = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  Qs = () => "購入を完了できませんでした。このアイテムは存在しません。",
  ec = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  tc = () => "Не удалось завершить покупку. Этот предмет не существует.",
  nc = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  rc = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  Ht = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Ks() : e === "pt" ? Hs() : e === "ch" ? Ys() : e === "de" ? Zs() : e === "es" ? $s() : e === "fr" ? Js() : e === "it" ? Xs() : e === "jp" ? Qs() : e === "pl" ? ec() : e === "ru" ? tc() : e === "uk" ? nc() : rc()
  },
  ac = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  ic = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  oc = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  sc = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  cc = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  uc = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  lc = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  dc = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  _c = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  fc = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  mc = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  pc = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  Yt = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? ac() : e === "pt" ? ic() : e === "ch" ? oc() : e === "de" ? sc() : e === "es" ? cc() : e === "fr" ? uc() : e === "it" ? lc() : e === "jp" ? dc() : e === "pl" ? _c() : e === "ru" ? fc() : e === "uk" ? mc() : pc()
  },
  hc = () => "Doxxing",
  gc = () => "Doxxing",
  wc = () => "人肉搜索",
  yc = () => "Doxxing",
  vc = () => "Doxxing",
  bc = () => "Doxxing",
  Ec = () => "Doxxing",
  Tc = () => "ドックス（Doxxing）",
  Oc = () => "Doxxing",
  Sc = () => "Докcинг",
  Ic = () => "Докcинг",
  Ac = () => "Doxxing",
  kc = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? hc() : e === "pt" ? gc() : e === "ch" ? wc() : e === "de" ? yc() : e === "es" ? vc() : e === "fr" ? bc() : e === "it" ? Ec() : e === "jp" ? Tc() : e === "pl" ? Oc() : e === "ru" ? Sc() : e === "uk" ? Ic() : Ac()
  },
  Rc = () => "Released other's personal information without their consent",
  Nc = () => "Vazar informações pessoais de terceiros sem consentimento",
  xc = () => "在未获同意的情况下公开他人个人信息",
  Dc = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  Lc = () => "Divulgó información personal de otra persona sin su consentimiento",
  Mc = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  Pc = () => "Diffusione di informazioni personali di terzi senza consenso",
  Uc = () => "他人の個人情報を同意なく公開した。",
  jc = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  Cc = () => "Публикация личной информации других людей без их согласия",
  Fc = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  Bc = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  zc = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Rc() : e === "pt" ? Nc() : e === "ch" ? xc() : e === "de" ? Dc() : e === "es" ? Lc() : e === "fr" ? Mc() : e === "it" ? Pc() : e === "jp" ? Uc() : e === "pl" ? jc() : e === "ru" ? Cc() : e === "uk" ? Fc() : Bc()
  },
  Vc = () => "This email is already in use.",
  Gc = () => "Este e-mail já está em uso.",
  Wc = () => "This email is already in use.",
  qc = () => "This email is already in use.",
  Kc = () => "Este correo electrónico ya está en uso.",
  Hc = () => "This email is already in use.",
  Yc = () => "Questa email è già in uso.",
  Zc = () => "This email is already in use.",
  $c = () => "This email is already in use.",
  Jc = () => "This email is already in use.",
  Xc = () => "This email is already in use.",
  Qc = () => "This email is already in use.",
  eu = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Vc() : e === "pt" ? Gc() : e === "ch" ? Wc() : e === "de" ? qc() : e === "es" ? Kc() : e === "fr" ? Hc() : e === "it" ? Yc() : e === "jp" ? Zc() : e === "pl" ? $c() : e === "ru" ? Jc() : e === "uk" ? Xc() : Qc()
  },
  tu = t => `This email is already in use by user #${t.userId}.`,
  nu = t => `Este e-mail já está em uso pelo usuário #${t.userId}.`,
  ru = t => `This email is already in use by user #${t.userId}.`,
  au = t => `This email is already in use by user #${t.userId}.`,
  iu = t => `Este correo electrónico ya está en uso por el usuario #${t.userId}.`,
  ou = t => `This email is already in use by user #${t.userId}.`,
  su = t => `Questa email è già in uso dall'utente #${t.userId}.`,
  cu = t => `This email is already in use by user #${t.userId}.`,
  uu = t => `This email is already in use by user #${t.userId}.`,
  lu = t => `This email is already in use by user #${t.userId}.`,
  du = t => `This email is already in use by user #${t.userId}.`,
  _u = t => `This email is already in use by user #${t.userId}.`,
  fu = (t, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? tu(t) : e === "pt" ? nu(t) : e === "ch" ? ru(t) : e === "de" ? au(t) : e === "es" ? iu(t) : e === "fr" ? ou(t) : e === "it" ? su(t) : e === "jp" ? cu(t) : e === "pl" ? uu(t) : e === "ru" ? lu(t) : e === "uk" ? du(t) : _u(t)
  },
  mu = () => "Enter a valid email address.",
  pu = () => "Informe um endereço de e-mail válido.",
  hu = () => "Enter a valid email address.",
  gu = () => "Enter a valid email address.",
  wu = () => "Introduce una dirección de correo electrónico válida.",
  yu = () => "Enter a valid email address.",
  vu = () => "Inserisci un indirizzo email valido.",
  bu = () => "Enter a valid email address.",
  Eu = () => "Enter a valid email address.",
  Tu = () => "Enter a valid email address.",
  Ou = () => "Enter a valid email address.",
  Su = () => "Enter a valid email address.",
  Iu = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? mu() : e === "pt" ? pu() : e === "ch" ? hu() : e === "de" ? gu() : e === "es" ? wu() : e === "fr" ? yu() : e === "it" ? vu() : e === "jp" ? bu() : e === "pl" ? Eu() : e === "ru" ? Tu() : e === "uk" ? Ou() : Su()
  },
  Au = t => `Error while painting: ${t.err}`,
  ku = t => `Erro enquanto pinta: ${t.err}`,
  Ru = t => `绘制时出错：${t.err}`,
  Nu = t => `Fehler beim Malen: ${t.err}`,
  xu = t => `Error al pintar: ${t.err}`,
  Du = t => `Erreur lors de la peinture : ${t.err}`,
  Lu = t => `Errore durante la pittura: ${t.err}`,
  Mu = t => `ペイント中にエラーが発生しました: ${t.err}`,
  Pu = t => `Błąd podczas malowania: ${t.err}`,
  Uu = t => `Ошибка при рисовании: ${t.err}`,
  ju = t => `Помилка під час малювання: ${t.err}`,
  Cu = t => `Lỗi khi tô: ${t.err}`,
  Fu = (t, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Au(t) : e === "pt" ? ku(t) : e === "ch" ? Ru(t) : e === "de" ? Nu(t) : e === "es" ? xu(t) : e === "fr" ? Du(t) : e === "it" ? Lu(t) : e === "jp" ? Mu(t) : e === "pl" ? Pu(t) : e === "ru" ? Uu(t) : e === "uk" ? ju(t) : Cu(t)
  },
  Bu = () => "Exceeded maximum number of characters",
  zu = () => "Excedeu o número máximo de caracteres permitidos",
  Vu = () => "超出最大字符数",
  Gu = () => "Maximale Zeichenanzahl überschritten",
  Wu = () => "Se excedió el número máximo de caracteres",
  qu = () => "Nombre maximal de caractères dépassé",
  Ku = () => "Numero massimo di caratteri superato",
  Hu = () => "最大文字数を超過しました",
  Yu = () => "Przekroczono maksymalną liczbę znaków",
  Zu = () => "Превышено максимальное количество символов",
  $u = () => "Перевищено максимальну кількість символів",
  Ju = () => "Đã vượt quá số ký tự tối đa",
  Xu = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Bu() : e === "pt" ? zu() : e === "ch" ? Vu() : e === "de" ? Gu() : e === "es" ? Wu() : e === "fr" ? qu() : e === "it" ? Ku() : e === "jp" ? Hu() : e === "pl" ? Yu() : e === "ru" ? Zu() : e === "uk" ? $u() : Ju()
  },
  Qu = () => "Verification code expired. Please request a new one.",
  el = () => "Código de verificação expirado. Por favor, solicite um novo.",
  tl = () => "验证码已过期，请重新获取。",
  nl = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  rl = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  al = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  il = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  ol = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  sl = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  cl = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  ul = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  ll = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  dl = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Qu() : e === "pt" ? el() : e === "ch" ? tl() : e === "de" ? nl() : e === "es" ? rl() : e === "fr" ? al() : e === "it" ? il() : e === "jp" ? ol() : e === "pl" ? sl() : e === "ru" ? cl() : e === "uk" ? ul() : ll()
  },
  _l = () => "Griefing",
  fl = () => "Griefing",
  ml = () => "破坏行为",
  pl = () => "Griefing",
  hl = () => "Griefing",
  gl = () => "Griefing",
  wl = () => "Griefing",
  yl = () => "グリーフィング",
  vl = () => "Griefing",
  bl = () => "Гриферство",
  El = () => "Гріфінг",
  Tl = () => "Griefing",
  Ol = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? _l() : e === "pt" ? fl() : e === "ch" ? ml() : e === "de" ? pl() : e === "es" ? hl() : e === "fr" ? gl() : e === "it" ? wl() : e === "jp" ? yl() : e === "pl" ? vl() : e === "ru" ? bl() : e === "uk" ? El() : Tl()
  },
  Sl = () => "Messed up with other's artworks",
  Il = () => "Estragou os desenhos dos outros",
  Al = () => "破坏了他人的作品",
  kl = () => "Kunstwerke anderer beschädigt",
  Rl = () => "Arruinó las obras de arte de otros",
  Nl = () => "A abîmé les œuvres des autres",
  xl = () => "Ha rovinato i disegni degli altri",
  Dl = () => "他人の作品を荒らした",
  Ll = () => "Zniszczył prace innych",
  Ml = () => "Испортил чужие рисунки",
  Pl = () => "Зіпсував роботи інших",
  Ul = () => "Phá hỏng tranh của người khác",
  jl = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Sl() : e === "pt" ? Il() : e === "ch" ? Al() : e === "de" ? kl() : e === "es" ? Rl() : e === "fr" ? Nl() : e === "it" ? xl() : e === "jp" ? Dl() : e === "pl" ? Ll() : e === "ru" ? Ml() : e === "uk" ? Pl() : Ul()
  },
  Cl = () => "Hate speech",
  Fl = () => "Discurso de Ódio",
  Bl = () => "仇恨言论",
  zl = () => "Hassrede",
  Vl = () => "Discurso de odio",
  Gl = () => "Discours haineux",
  Wl = () => "Discorso d'odio",
  ql = () => "ヘイトスピーチ",
  Kl = () => "Mowa nienawiści",
  Hl = () => "Речь ненависти",
  Yl = () => "Мова ворожнечі",
  Zl = () => "Ngôn từ thù hằn",
  $l = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Cl() : e === "pt" ? Fl() : e === "ch" ? Bl() : e === "de" ? zl() : e === "es" ? Vl() : e === "fr" ? Gl() : e === "it" ? Wl() : e === "jp" ? ql() : e === "pl" ? Kl() : e === "ru" ? Hl() : e === "uk" ? Yl() : Zl()
  },
  Jl = () => "Racism, homophobia, hate groups, ...",
  Xl = () => "Racismo, homofobia, grupos de ódio, ...",
  Ql = () => "种族主义、恐同、仇恨团体等",
  ed = () => "Rassismus, Homophobie, Hassgruppen, ...",
  td = () => "Racismo, homofobia, grupos de odio, ...",
  nd = () => "Racisme, homophobie, groupes haineux, ...",
  rd = () => "Razzismo, omofobia, gruppi d'odio, ...",
  ad = () => "人種差別、同性愛差別、ヘイト団体など。",
  id = () => "Rasizm, homofobia, grupy nienawiści, ...",
  od = () => "Расизм, гомофобия, группы ненависти и т.п.",
  sd = () => "Расизм, гомофобія, групи ненависті, ...",
  cd = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  ud = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Jl() : e === "pt" ? Xl() : e === "ch" ? Ql() : e === "de" ? ed() : e === "es" ? td() : e === "fr" ? nd() : e === "it" ? rd() : e === "jp" ? ad() : e === "pl" ? id() : e === "ru" ? od() : e === "uk" ? sd() : cd()
  },
  ld = () => "Inappropriate content",
  dd = () => "Conteúdo inapropriado",
  _d = () => "不当内容",
  fd = () => "Unangemessene Inhalte",
  md = () => "Contenido inapropiado",
  pd = () => "Contenu inapproprié",
  hd = () => "Contenuto inappropriato",
  gd = () => "不適切なコンテンツ",
  wd = () => "Nieodpowiednie treści",
  yd = () => "Неприемлемый контент",
  vd = () => "Неприйнятний вміст",
  bd = () => "Nội dung không phù hợp",
  Ed = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? ld() : e === "pt" ? dd() : e === "ch" ? _d() : e === "de" ? fd() : e === "es" ? md() : e === "fr" ? pd() : e === "it" ? hd() : e === "jp" ? gd() : e === "pl" ? wd() : e === "ru" ? yd() : e === "uk" ? vd() : bd()
  },
  Td = () => "+18, inappropriate link, highly suggestive content, ...",
  Od = () => "+18, links inapropriados, conteúdo altamente sugestivo, ...",
  Sd = () => "+18、违规链接、高度暗示性内容等",
  Id = () => "+18, unangemessene Links, stark anzügliche Inhalte, ...",
  Ad = () => "+18, enlace inapropiado, contenido muy sugerente, ...",
  kd = () => "+18, lien inapproprié, contenu très suggestif, ...",
  Rd = () => "+18, link inappropriati, contenuto altamente esplicito, ...",
  Nd = () => "18禁コンテンツ、不適切なリンク、過度に性的な内容など。",
  xd = () => "+18, nieodpowiedni link, mocno sugestywne treści, ...",
  Dd = () => "+18, неприемлемые ссылки, крайне откровенный контент и т.п.",
  Ld = () => "+18, неприйнятні посилання, дуже відвертий контент, ...",
  Md = () => "+18, liên kết không phù hợp, nội dung khiêu gợi mạnh, ...",
  Pd = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Td() : e === "pt" ? Od() : e === "ch" ? Sd() : e === "de" ? Id() : e === "es" ? Ad() : e === "fr" ? kd() : e === "it" ? Rd() : e === "jp" ? Nd() : e === "pl" ? xd() : e === "ru" ? Dd() : e === "uk" ? Ld() : Md()
  },
  Ud = () => "Invalid captcha",
  jd = () => "Captcha inválido",
  Cd = () => "验证码无效",
  Fd = () => "Ungültiges Captcha",
  Bd = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  zd = () => "Captcha invalide",
  Vd = () => "Captcha non valido. Riprova.",
  Gd = () => "キャプチャが無効です。",
  Wd = () => "Nieprawidłowy captcha",
  qd = () => "Неверная капча",
  Kd = () => "Неправильна капча",
  Hd = () => "Captcha không hợp lệ",
  Yd = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Ud() : e === "pt" ? jd() : e === "ch" ? Cd() : e === "de" ? Fd() : e === "es" ? Bd() : e === "fr" ? zd() : e === "it" ? Vd() : e === "jp" ? Gd() : e === "pl" ? Wd() : e === "ru" ? qd() : e === "uk" ? Kd() : Hd()
  },
  Zd = () => "Invalid challenge response",
  $d = () => "Resposta de desafio inválida",
  Jd = () => "质询响应无效",
  Xd = () => "Ungültige Challenge-Antwort",
  Qd = () => "Respuesta de desafío inválida",
  e_ = () => "Réponse au défi invalide",
  t_ = () => "Risposta alla sfida non valida",
  n_ = () => "無効なチャレンジ応答",
  r_ = () => "Nieprawidłowa odpowiedź na wyzwanie",
  a_ = () => "Неверный ответ на вызов",
  i_ = () => "Недійсна відповідь на виклик",
  o_ = () => "Phản hồi thử thách không hợp lệ",
  s_ = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Zd() : e === "pt" ? $d() : e === "ch" ? Jd() : e === "de" ? Xd() : e === "es" ? Qd() : e === "fr" ? e_() : e === "it" ? t_() : e === "jp" ? n_() : e === "pl" ? r_() : e === "ru" ? a_() : e === "uk" ? i_() : o_()
  },
  c_ = () => "Invalid code",
  u_ = () => "Código inválido",
  l_ = () => "验证码无效",
  d_ = () => "Ungültiger Code",
  __ = () => "Código inválido",
  f_ = () => "Code invalide",
  m_ = () => "Codice non valido",
  p_ = () => "無効なコードです。",
  h_ = () => "Nieprawidłowy kod",
  g_ = () => "Неверный код",
  w_ = () => "Невірний код",
  y_ = () => "Mã không hợp lệ",
  v_ = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? c_() : e === "pt" ? u_() : e === "ch" ? l_() : e === "de" ? d_() : e === "es" ? __() : e === "fr" ? f_() : e === "it" ? m_() : e === "jp" ? p_() : e === "pl" ? h_() : e === "ru" ? g_() : e === "uk" ? w_() : y_()
  },
  b_ = () => "Invalid discord.",
  E_ = () => "Discord inválido.",
  T_ = () => "无效的 Discord。",
  O_ = () => "Ungültiger Discord.",
  S_ = () => "Discord inválido.",
  I_ = () => "Discord invalide.",
  A_ = () => "Discord non valido.",
  k_ = () => "無効なDiscordアカウントです。",
  R_ = () => "Nieprawidłowy Discord.",
  N_ = () => "Неверный Discord.",
  x_ = () => "Некоректний Discord.",
  D_ = () => "Discord không hợp lệ.",
  L_ = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? b_() : e === "pt" ? E_() : e === "ch" ? T_() : e === "de" ? O_() : e === "es" ? S_() : e === "fr" ? I_() : e === "it" ? A_() : e === "jp" ? k_() : e === "pl" ? R_() : e === "ru" ? N_() : e === "uk" ? x_() : D_()
  },
  M_ = () => "The name contains disallowed characters or words. Please choose a different name.",
  P_ = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  U_ = () => "名称包含禁止的字符或词语，请选择其他名称。",
  j_ = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  C_ = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  F_ = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  B_ = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  z_ = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  V_ = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  G_ = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  W_ = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  q_ = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  Zt = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? M_() : e === "pt" ? P_() : e === "ch" ? U_() : e === "de" ? j_() : e === "es" ? C_() : e === "fr" ? F_() : e === "it" ? B_() : e === "jp" ? z_() : e === "pl" ? V_() : e === "ru" ? G_() : e === "uk" ? W_() : q_()
  },
  K_ = () => "Invalid phone number",
  H_ = () => "Número de telefone inválido",
  Y_ = () => "无效的电话号码",
  Z_ = () => "Ungültige Telefonnummer",
  $_ = () => "Número de teléfono inválido",
  J_ = () => "Numéro de téléphone invalide",
  X_ = () => "Numero di telefono non valido",
  Q_ = () => "無効な電話番号です。",
  ef = () => "Nieprawidłowy numer telefonu",
  tf = () => "Неверный номер телефона",
  nf = () => "Некоректний номер телефону",
  rf = () => "Số điện thoại không hợp lệ",
  af = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? K_() : e === "pt" ? H_() : e === "ch" ? Y_() : e === "de" ? Z_() : e === "es" ? $_() : e === "fr" ? J_() : e === "it" ? X_() : e === "jp" ? Q_() : e === "pl" ? ef() : e === "ru" ? tf() : e === "uk" ? nf() : rf()
  },
  of = () => "This phone number appears to be a landline. Please use a mobile number that can receive SMS.",
  sf = () => "Este número de telefone parece ser fixo. Por favor, use um número de celular que possa receber SMS.",
  cf = () => "此电话号码似乎是固定电话。请使用可以接收短信的手机号码。",
  uf = () => "Diese Telefonnummer scheint ein Festnetzanschluss zu sein. Bitte verwende eine Mobilnummer, die SMS empfangen kann.",
  lf = () => "Este número de teléfono parece ser fijo. Por favor, usa un número de celular que pueda recibir SMS.",
  df = () => "Ce numéro de téléphone semble être un fixe. Veuillez utiliser un numéro de mobile pouvant recevoir des SMS.",
  _f = () => "Questo numero di telefono sembra essere un fisso. Utilizza un numero di cellulare che possa ricevere SMS.",
  ff = () => "この電話番号は固定電話のようです。SMSを受信できる携帯電話番号をご使用ください。",
  mf = () => "Ten numer telefonu wydaje się być stacjonarny. Użyj numeru komórkowego, który może odbierać SMS-y.",
  pf = () => "Этот номер телефона является стационарным. Пожалуйста, используйте мобильный номер, который может принимать SMS.",
  hf = () => "Цей номер телефону є стаціонарним. Будь ласка, використовуйте мобільний номер, який може отримувати SMS.",
  gf = () => "Số điện thoại này có vẻ là số cố định. Vui lòng sử dụng số di động có thể nhận SMS.",
  wf = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? of() : e === "pt" ? sf() : e === "ch" ? cf() : e === "de" ? uf() : e === "es" ? lf() : e === "fr" ? df() : e === "it" ? _f() : e === "jp" ? ff() : e === "pl" ? mf() : e === "ru" ? pf() : e === "uk" ? hf() : gf()
  },
  yf = () => "The new leader must be a member of the alliance",
  vf = () => "O novo líder deve ser um membro da aliança",
  bf = () => "新盟主必须是联盟成员",
  Ef = () => "Der neue Anführer muss Mitglied der Allianz sein",
  Tf = () => "El nuevo líder debe ser miembro de la alianza",
  Of = () => "Le nouveau chef doit être membre de l’alliance",
  Sf = () => "Il nuovo leader deve essere un membro dell'alleanza",
  If = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  Af = () => "Nowy lider musi być członkiem sojuszu",
  kf = () => "Новый лидер должен быть участником альянса",
  Rf = () => "Новий лідер має бути учасником альянсу",
  Nf = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  xf = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? yf() : e === "pt" ? vf() : e === "ch" ? bf() : e === "de" ? Ef() : e === "es" ? Tf() : e === "fr" ? Of() : e === "it" ? Sf() : e === "jp" ? If() : e === "pl" ? Af() : e === "ru" ? kf() : e === "uk" ? Rf() : Nf()
  },
  Df = () => "Leaderboard is temporarily disabled",
  Lf = () => "O ranking está temporariamente desativado",
  Mf = () => "排行榜已暂时停用",
  Pf = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Uf = () => "La clasificación está deshabilitada temporalmente",
  jf = () => "Le classement est temporairement désactivé",
  Cf = () => "La classifica è temporaneamente disattivata",
  Ff = () => "ランキングは一時的に無効になっています。",
  Bf = () => "Ranking jest tymczasowo wyłączony",
  zf = () => "Таблица лидеров временно отключена",
  Vf = () => "Таблиця лідерів тимчасово вимкнена",
  Gf = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  se = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Df() : e === "pt" ? Lf() : e === "ch" ? Mf() : e === "de" ? Pf() : e === "es" ? Uf() : e === "fr" ? jf() : e === "it" ? Cf() : e === "jp" ? Ff() : e === "pl" ? Bf() : e === "ru" ? zf() : e === "uk" ? Vf() : Gf()
  },
  Wf = () => "Location name is too big (max. 128 characters)",
  qf = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Kf = () => "位置名称过长（最大 128 个字符）",
  Hf = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Yf = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Zf = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  $f = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Jf = () => "場所の名前が長すぎます（最大128文字）。",
  Xf = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  Qf = () => "Название локации слишком длинное (макс. 128 символов)",
  em = () => "Назва локації надто довга (макс. 128 символів)",
  tm = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  nm = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Wf() : e === "pt" ? qf() : e === "ch" ? Kf() : e === "de" ? Hf() : e === "es" ? Yf() : e === "fr" ? Zf() : e === "it" ? $f() : e === "jp" ? Jf() : e === "pl" ? Xf() : e === "ru" ? Qf() : e === "uk" ? em() : tm()
  },
  rm = () => "Multi-accounting",
  am = () => "Múltiplas contas",
  im = () => "多账号",
  om = () => "Multi-Accounting",
  sm = () => "Multi-cuentas",
  cm = () => "Multi-comptes",
  um = () => "Multi-account",
  lm = () => "複数アカウント使用",
  dm = () => "Multi-konta",
  _m = () => "Мультиаккаунт",
  fm = () => "Мультиакаунтинг",
  mm = () => "Nhiều tài khoản",
  pm = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? rm() : e === "pt" ? am() : e === "ch" ? im() : e === "de" ? om() : e === "es" ? sm() : e === "fr" ? cm() : e === "it" ? um() : e === "jp" ? lm() : e === "pl" ? dm() : e === "ru" ? _m() : e === "uk" ? fm() : mm()
  },
  hm = () => "Use more than one account to paint pixels",
  gm = () => "Usar mais de uma conta para pintar",
  wm = () => "使用多个账号绘制像素",
  ym = () => "Mehr als ein Konto zum Malen verwenden",
  vm = () => "Uso de más de una cuenta para pintar píxeles",
  bm = () => "Utiliser plus d’un compte pour peindre",
  Em = () => "Usare più di un account per dipingere",
  Tm = () => "複数のアカウントを使ってピクセルを塗った。",
  Om = () => "Używanie więcej niż jednego konta do malowania pikseli",
  Sm = () => "Использование более одного аккаунта для рисования",
  Im = () => "Використання більше ніж одного акаунта для малювання",
  Am = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  km = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? hm() : e === "pt" ? gm() : e === "ch" ? wm() : e === "de" ? ym() : e === "es" ? vm() : e === "fr" ? bm() : e === "it" ? Em() : e === "jp" ? Tm() : e === "pl" ? Om() : e === "ru" ? Sm() : e === "uk" ? Im() : Am()
  },
  Rm = t => `You can change your name again in ${t.days} days`,
  Nm = t => `Você pode alterar seu nome novamente em ${t.days} dias.`,
  xm = t => `你可以在 ${t.days} 天后再次修改名称`,
  Dm = t => `Du kannst deinen Namen in ${t.days} Tagen erneut ändern`,
  Lm = t => `Podrás cambiar tu nombre de nuevo en ${t.days} días`,
  Mm = t => `Vous pourrez changer votre nom à nouveau dans ${t.days} jours`,
  Pm = t => `Potrai cambiare di nuovo il tuo nome tra ${t.days} giorni.`,
  Um = t => `${t.days}日後に再び名前を変更できます。`,
  jm = t => `Następną zmianę nazwy możesz wykonać za ${t.days} dni`,
  Cm = t => `Вы сможете изменить имя снова через ${t.days} дн.`,
  Fm = t => `Ви зможете змінити імʼя знову через ${t.days} днів`,
  Bm = t => `Bạn có thể đổi tên lại sau ${t.days} ngày`,
  zm = (t, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Rm(t) : e === "pt" ? Nm(t) : e === "ch" ? xm(t) : e === "de" ? Dm(t) : e === "es" ? Lm(t) : e === "fr" ? Mm(t) : e === "it" ? Pm(t) : e === "jp" ? Um(t) : e === "pl" ? jm(t) : e === "ru" ? Cm(t) : e === "uk" ? Fm(t) : Bm(t)
  },
  Vm = () => "No internet access or the servers are offline. Try again later.",
  Gm = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Wm = () => "没有网络连接或服务器已离线。请稍后重试。",
  qm = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Km = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Hm = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Ym = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Zm = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  $m = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Jm = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Xm = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  Qm = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  ep = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Vm() : e === "pt" ? Gm() : e === "ch" ? Wm() : e === "de" ? qm() : e === "es" ? Km() : e === "fr" ? Hm() : e === "it" ? Ym() : e === "jp" ? Zm() : e === "pl" ? $m() : e === "ru" ? Jm() : e === "uk" ? Xm() : Qm()
  },
  tp = () => "You are not allowed to verify a phone number. Try refreshing the page",
  np = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  rp = () => "您无权验证电话号码。请尝试刷新页面。",
  ap = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  ip = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  op = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  sp = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  cp = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  up = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  lp = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  dp = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  _p = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  fp = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? tp() : e === "pt" ? np() : e === "ch" ? rp() : e === "de" ? ap() : e === "es" ? ip() : e === "fr" ? op() : e === "it" ? sp() : e === "jp" ? cp() : e === "pl" ? up() : e === "ru" ? lp() : e === "uk" ? dp() : _p()
  },
  mp = () => "Operation not allowed. Maybe you have too many favorite locations.",
  pp = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  hp = () => "操作不被允许。你的收藏位置可能过多。",
  gp = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  wp = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  yp = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  vp = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  bp = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  Ep = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  Tp = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  Op = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  Sp = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  Ip = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? mp() : e === "pt" ? pp() : e === "ch" ? hp() : e === "de" ? gp() : e === "es" ? wp() : e === "fr" ? yp() : e === "it" ? vp() : e === "jp" ? bp() : e === "pl" ? Ep() : e === "ru" ? Tp() : e === "uk" ? Op() : Sp()
  },
  Ap = () => "You are trying to paint with a color you do not own",
  kp = () => "Você está tentando pintar com uma cor que não possui",
  Rp = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  Np = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  xp = () => "Estás intentando pintar con un color que no posees",
  Dp = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  Lp = () => "Stai cercando di dipingere con un colore che non possiedi",
  Mp = () => "所持していない色で塗ろうとしています。",
  Pp = () => "Próbujesz malować kolorem, którego nie posiadasz",
  Up = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  jp = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  Cp = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  $t = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Ap() : e === "pt" ? kp() : e === "ch" ? Rp() : e === "de" ? Np() : e === "es" ? xp() : e === "fr" ? Dp() : e === "it" ? Lp() : e === "jp" ? Mp() : e === "pl" ? Pp() : e === "ru" ? Up() : e === "uk" ? jp() : Cp()
  },
  Fp = () => "Phone already used",
  Bp = () => "Telefone já usado",
  zp = () => "电话号码已被使用",
  Vp = () => "Telefonnummer bereits verwendet",
  Gp = () => "Teléfono ya utilizado",
  Wp = () => "Téléphone déjà utilisé",
  qp = () => "Telefono già utilizzato",
  Kp = () => "この電話番号は既に使用されています。",
  Hp = () => "Numer telefonu jest już używany",
  Yp = () => "Телефон уже используется",
  Zp = () => "Номер телефону вже використовується",
  $p = () => "Số điện thoại đã được sử dụng",
  Jp = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Fp() : e === "pt" ? Bp() : e === "ch" ? zp() : e === "de" ? Vp() : e === "es" ? Gp() : e === "fr" ? Wp() : e === "it" ? qp() : e === "jp" ? Kp() : e === "pl" ? Hp() : e === "ru" ? Yp() : e === "uk" ? Zp() : $p()
  },
  Xp = () => "This phone number's region is not supported",
  Qp = () => "A região deste número de telefone não é suportada",
  eh = () => "此电话号码的地区不受支持",
  th = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  nh = () => "La región de este número de teléfono no es compatible",
  rh = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  ah = () => "La regione di questo numero di telefono non è supportata",
  ih = () => "この電話番号の地域はサポートされていません",
  oh = () => "Region tego numeru telefonu nie jest obsługiwany",
  sh = () => "Регион этого номера телефона не поддерживается",
  ch = () => "Регіон цього номера телефону не підтримується",
  uh = () => "Vùng của số điện thoại này không được hỗ trợ",
  lh = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Xp() : e === "pt" ? Qp() : e === "ch" ? eh() : e === "de" ? th() : e === "es" ? nh() : e === "fr" ? rh() : e === "it" ? ah() : e === "jp" ? ih() : e === "pl" ? oh() : e === "ru" ? sh() : e === "uk" ? ch() : uh()
  },
  dh = () => "Refresh your page to get the latest update",
  _h = () => "Recarregue sua página para obter as últimas atualizações",
  fh = () => "刷新页面以获取最新更新",
  mh = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  ph = () => "Actualiza la página para obtener la última versión",
  hh = () => "Actualisez la page pour obtenir les dernières mises à jour",
  gh = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  wh = () => "最新の状態にするにはページを再読み込みしてください。",
  yh = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  vh = () => "Обновите страницу, чтобы получить последние изменения",
  bh = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Eh = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  Jt = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? dh() : e === "pt" ? _h() : e === "ch" ? fh() : e === "de" ? mh() : e === "es" ? ph() : e === "fr" ? hh() : e === "it" ? gh() : e === "jp" ? wh() : e === "pl" ? yh() : e === "ru" ? vh() : e === "uk" ? bh() : Eh()
  },
  Th = () => "The request timed out. Please try again.",
  Oh = () => "A solicitação expirou. Por favor, tente novamente.",
  Sh = () => "请求超时。请重试。",
  Ih = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  Ah = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  kh = () => "La requête a expiré. Veuillez réessayer.",
  Rh = () => "La richiesta è scaduta. Riprova.",
  Nh = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  xh = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  Dh = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  Lh = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  Mh = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  Ph = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Th() : e === "pt" ? Oh() : e === "ch" ? Sh() : e === "de" ? Ih() : e === "es" ? Ah() : e === "fr" ? kh() : e === "it" ? Rh() : e === "jp" ? Nh() : e === "pl" ? xh() : e === "ru" ? Dh() : e === "uk" ? Lh() : Mh()
  },
  Uh = () => "The service is currently unavailable. Please try again later.",
  jh = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  Ch = () => "服务当前不可用。请稍后再试。",
  Fh = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  Bh = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  zh = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  Vh = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  Gh = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  Wh = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  qh = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  Kh = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  Hh = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  Yh = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Uh() : e === "pt" ? jh() : e === "ch" ? Ch() : e === "de" ? Fh() : e === "es" ? Bh() : e === "fr" ? zh() : e === "it" ? Vh() : e === "jp" ? Gh() : e === "pl" ? Wh() : e === "ru" ? qh() : e === "uk" ? Kh() : Hh()
  },
  Zh = () => "Too many attempts. Please try again later",
  $h = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  Jh = () => "尝试次数过多，请稍后再试",
  Xh = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  Qh = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  eg = () => "Trop de tentatives. Veuillez réessayer plus tard",
  tg = () => "Troppi tentativi. Riprova più tardi.",
  ng = () => "試行回数が多すぎます。後で再度お試しください。",
  rg = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  ag = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  ig = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  og = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  Xt = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Zh() : e === "pt" ? $h() : e === "ch" ? Jh() : e === "de" ? Xh() : e === "es" ? Qh() : e === "fr" ? eg() : e === "it" ? tg() : e === "jp" ? ng() : e === "pl" ? rg() : e === "ru" ? ag() : e === "uk" ? ig() : og()
  },
  sg = () => "The typed username does not match your current username.",
  cg = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  ug = () => "输入的用户名与当前用户名不匹配。",
  lg = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  dg = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  _g = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  fg = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  mg = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  pg = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  hg = () => "Введённое имя пользователя не совпадает с текущим.",
  gg = () => "Введене імʼя користувача не збігається з поточним.",
  wg = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  yg = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? sg() : e === "pt" ? cg() : e === "ch" ? ug() : e === "de" ? lg() : e === "es" ? dg() : e === "fr" ? _g() : e === "it" ? fg() : e === "jp" ? mg() : e === "pl" ? pg() : e === "ru" ? hg() : e === "uk" ? gg() : wg()
  },
  vg = () => "Unexpected server error. Try again later.",
  bg = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  Eg = () => "服务器出现意外错误。请稍后再试。",
  Tg = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  Og = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Sg = () => "Erreur serveur inattendue. Réessayez plus tard.",
  Ig = () => "Errore imprevisto del server. Riprova più tardi.",
  Ag = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  kg = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  Rg = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  Ng = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  xg = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  f = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? vg() : e === "pt" ? bg() : e === "ch" ? Eg() : e === "de" ? Tg() : e === "es" ? Og() : e === "fr" ? Sg() : e === "it" ? Ig() : e === "jp" ? Ag() : e === "pl" ? kg() : e === "ru" ? Rg() : e === "uk" ? Ng() : xg()
  },
  Dg = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  Lg = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  Mg = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  Pg = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  Ug = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  jg = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  Cg = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  Fg = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  Bg = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  zg = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  Vg = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  Gg = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  Wg = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Dg() : e === "pt" ? Lg() : e === "ch" ? Mg() : e === "de" ? Pg() : e === "es" ? Ug() : e === "fr" ? jg() : e === "it" ? Cg() : e === "jp" ? Fg() : e === "pl" ? Bg() : e === "ru" ? zg() : e === "uk" ? Vg() : Gg()
  },
  qg = () => "Failed to load WebAssembly module. Try to use another browser.",
  Kg = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  Hg = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  Yg = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  Zg = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  $g = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  Jg = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  Xg = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  Qg = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  ew = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  tw = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  nw = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  rw = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? qg() : e === "pt" ? Kg() : e === "ch" ? Hg() : e === "de" ? Yg() : e === "es" ? Zg() : e === "fr" ? $g() : e === "it" ? Jg() : e === "jp" ? Xg() : e === "pl" ? Qg() : e === "ru" ? ew() : e === "uk" ? tw() : nw()
  },
  aw = () => "You already have this item. Please refresh the page.",
  iw = () => "Você já possui este item. Atualize a página.",
  ow = () => "你已经拥有此物品。请刷新页面。",
  sw = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  cw = () => "Ya tienes este ítem. Actualiza la página.",
  uw = () => "Vous possédez déjà cet objet. Actualisez la page.",
  lw = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  dw = () => "このアイテムはすでに所持しています。ページを更新してください。",
  _w = () => "Masz już ten przedmiot. Odśwież stronę.",
  fw = () => "У вас уже есть этот предмет. Обновите страницу.",
  mw = () => "У вас уже є цей предмет. Оновіть сторінку.",
  pw = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  Qt = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? aw() : e === "pt" ? iw() : e === "ch" ? ow() : e === "de" ? sw() : e === "es" ? cw() : e === "fr" ? uw() : e === "it" ? lw() : e === "jp" ? dw() : e === "pl" ? _w() : e === "ru" ? fw() : e === "uk" ? mw() : pw()
  },
  hw = () => "You are already in an alliance",
  gw = () => "Você já está em uma aliança",
  ww = () => "你已经在一个联盟中",
  yw = () => "Du bist bereits in einer Allianz",
  vw = () => "Ya estás en una alianza",
  bw = () => "Vous êtes déjà dans une alliance",
  Ew = () => "Sei già in un'alleanza",
  Tw = () => "すでにアライアンスに所属しています。",
  Ow = () => "Jesteś już w sojuszu",
  Sw = () => "Вы уже состоите в альянсе",
  Iw = () => "Ви вже перебуваєте в альянсі",
  Aw = () => "Bạn đã ở trong một liên minh",
  kw = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? hw() : e === "pt" ? gw() : e === "ch" ? ww() : e === "de" ? yw() : e === "es" ? vw() : e === "fr" ? bw() : e === "it" ? Ew() : e === "jp" ? Tw() : e === "pl" ? Ow() : e === "ru" ? Sw() : e === "uk" ? Iw() : Aw()
  },
  Rw = () => "You are not allowed to do this",
  Nw = () => "Você não tem permissão para fazer isso",
  xw = () => "你无权执行此操作",
  Dw = () => "Du bist dazu nicht berechtigt",
  Lw = () => "No tienes permiso para hacer esto",
  Mw = () => "Vous n’êtes pas autorisé à faire cela",
  Pw = () => "Non hai il permesso di farlo",
  Uw = () => "この操作を行う権限がありません。",
  jw = () => "Nie masz uprawnień, aby to zrobić",
  Cw = () => "У вас нет прав для этого действия",
  Fw = () => "Ви не маєте права це робити",
  Bw = () => "Bạn không có quyền làm việc này",
  ce = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Rw() : e === "pt" ? Nw() : e === "ch" ? xw() : e === "de" ? Dw() : e === "es" ? Lw() : e === "fr" ? Mw() : e === "it" ? Pw() : e === "jp" ? Uw() : e === "pl" ? jw() : e === "ru" ? Cw() : e === "uk" ? Fw() : Bw()
  },
  zw = () => "You do not have enough Droplets to buy this item.",
  Vw = () => "Você não tem gotas suficientes para comprar este item.",
  Gw = () => "你的水滴不足，无法购买此物品。",
  Ww = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  qw = () => "No tienes suficientes gotas para comprar este ítem.",
  Kw = () => "Vous n’avez pas assez de droplets pour acheter cet objet.",
  Hw = () => "Non hai abbastanza gocce per acquistare questo oggetto.",
  Yw = () => "このアイテムを購入するのに十分なドロップレットがありません。",
  Zw = () => "Nie masz wystarczającej liczby kropli, aby kupić ten przedmiot.",
  $w = () => "У вас недостаточно droplets для покупки этого предмета.",
  Jw = () => "У вас недостатньо дроплетів, щоб купити цей предмет.",
  Xw = () => "Bạn không có đủ droplets để mua vật phẩm này.",
  en = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? zw() : e === "pt" ? Vw() : e === "ch" ? Gw() : e === "de" ? Ww() : e === "es" ? qw() : e === "fr" ? Kw() : e === "it" ? Hw() : e === "jp" ? Yw() : e === "pl" ? Zw() : e === "ru" ? $w() : e === "uk" ? Jw() : Xw()
  },
  Qw = () => "You need to be logged in to paint",
  ey = () => "Você precisa estar conectado para pintar",
  ty = () => "你需要登录才能进行绘制",
  ny = () => "Du musst eingeloggt sein, um zu malen",
  ry = () => "Debes iniciar sesión para pintar",
  ay = () => "Vous devez être connecté pour peindre",
  iy = () => "Devi avere effettuato l'accesso per dipingere",
  oy = () => "ペイントするにはログインが必要です。",
  sy = () => "Musisz być zalogowany, aby malować",
  cy = () => "Чтобы рисовать, нужно войти в аккаунт",
  uy = () => "Щоб малювати, необхідно увійти в акаунт",
  ly = () => "Bạn cần đăng nhập để tô",
  tn = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Qw() : e === "pt" ? ey() : e === "ch" ? ty() : e === "de" ? ny() : e === "es" ? ry() : e === "fr" ? ay() : e === "it" ? iy() : e === "jp" ? oy() : e === "pl" ? sy() : e === "ru" ? cy() : e === "uk" ? uy() : ly()
  },
  dy = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  _y = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  fy = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  my = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  py = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  hy = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  gy = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  wy = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  yy = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  vy = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  by = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  Ey = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  Ty = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? dy() : e === "pt" ? _y() : e === "ch" ? fy() : e === "de" ? my() : e === "es" ? py() : e === "fr" ? hy() : e === "it" ? gy() : e === "jp" ? wy() : e === "pl" ? yy() : e === "ru" ? vy() : e === "uk" ? by() : Ey()
  },
  Oy = t => `Your account has been suspended out until ${t.until}`,
  Sy = t => `A sua conta está suspensa até ${t.until}`,
  Iy = t => `你的账号已被暂停至 ${t.until}`,
  Ay = t => `Dein Konto ist gesperrt bis ${t.until}`,
  ky = t => `Tu cuenta ha sido suspendida hasta ${t.until}`,
  Ry = t => `Votre compte est suspendu jusqu’au ${t.until}`,
  Ny = t => `Il tuo account è sospeso fino al ${t.until}`,
  xy = t => `あなたのアカウントは${t.until}まで一時停止されています。`,
  Dy = t => `Twoje konto zostało zawieszone do ${t.until}`,
  Ly = t => `Ваш аккаунт заблокирован до ${t.until}`,
  My = t => `Ваш акаунт призупинено до ${t.until}`,
  Py = t => `Tài khoản của bạn đã bị đình chỉ đến ${t.until}`,
  nn = (t, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Oy(t) : e === "pt" ? Sy(t) : e === "ch" ? Iy(t) : e === "de" ? Ay(t) : e === "es" ? ky(t) : e === "fr" ? Ry(t) : e === "it" ? Ny(t) : e === "jp" ? xy(t) : e === "pl" ? Dy(t) : e === "ru" ? Ly(t) : e === "uk" ? My(t) : Py(t)
  };
let R;
const ae = new Array(128).fill(void 0);
ae.push(void 0, null, !0, !1);

function I(t) {
  return ae[t]
}
const Rn = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && Rn.decode();
let ye = null;

function Ee() {
  return (ye === null || ye.byteLength === 0) && (ye = new Uint8Array(R.memory.buffer)), ye
}

function ve(t, n) {
  return t = t >>> 0, Rn.decode(Ee().subarray(t, t + n))
}
let Te = ae.length;

function x(t) {
  Te === ae.length && ae.push(ae.length + 1);
  const n = Te;
  return Te = ae[n], ae[n] = t, n
}

function ne(t, n) {
  try {
    return t.apply(this, n)
  } catch (e) {
    R.__wbindgen_export_0(x(e))
  }
}

function ue(t) {
  return t == null
}

function Uy(t) {
  t < 132 || (ae[t] = Te, Te = t)
}

function rn(t) {
  const n = I(t);
  return Uy(t), n
}
const an = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(t => {
  R.__wbindgen_export_1.get(t.dtor)(t.a, t.b)
});

function jy(t, n, e, r) {
  const a = {
      a: t,
      b: n,
      cnt: 1,
      dtor: e
    },
    i = (...o) => {
      a.cnt++;
      const s = a.a;
      a.a = 0;
      try {
        return r(s, a.b, ...o)
      } finally {
        --a.cnt === 0 ? (R.__wbindgen_export_1.get(a.dtor)(s, a.b), an.unregister(a)) : a.a = s
      }
    };
  return i.original = a, an.register(i, a, a), i
}
let le = null;

function ot() {
  return (le === null || le.buffer.detached === !0 || le.buffer.detached === void 0 && le.buffer !== R.memory.buffer) && (le = new DataView(R.memory.buffer)), le
}
let de = 0;
const tt = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  Cy = typeof tt.encodeInto == "function" ? function(t, n) {
    return tt.encodeInto(t, n)
  } : function(t, n) {
    const e = tt.encode(t);
    return n.set(e), {
      read: t.length,
      written: e.length
    }
  };

function Tt(t, n, e) {
  if (e === void 0) {
    const s = tt.encode(t),
      l = n(s.length, 1) >>> 0;
    return Ee().subarray(l, l + s.length).set(s), de = s.length, l
  }
  let r = t.length,
    a = n(r, 1) >>> 0;
  const i = Ee();
  let o = 0;
  for (; o < r; o++) {
    const s = t.charCodeAt(o);
    if (s > 127) break;
    i[a + o] = s
  }
  if (o !== r) {
    o !== 0 && (t = t.slice(o)), a = e(a, r, r = o + t.length * 3, 1) >>> 0;
    const s = Ee().subarray(a + o, a + r),
      l = Cy(t, s);
    o += l.written, a = e(a, r, o, 1) >>> 0
  }
  return de = o, a
}

function Fy(t) {
  const n = Tt(t, R.__wbindgen_export_2, R.__wbindgen_export_3),
    e = de;
  R.set_fingerprint(n, e)
}

function By(t, n) {
  const e = n(t.length * 1, 1) >>> 0;
  return Ee().set(t, e / 1), de = t.length, e
}

function zy(t) {
  const n = By(t, R.__wbindgen_export_2),
    e = de;
  R.set_telemetry(n, e)
}

function Ot(t) {
  R.set_user_id(t)
}

function Vy(t) {
  R.set_automated_browser(t)
}

function Gy(t) {
  let n, e;
  try {
    const i = R.__wbindgen_add_to_stack_pointer(-16),
      o = Tt(t, R.__wbindgen_export_2, R.__wbindgen_export_3),
      s = de;
    R.get_pawtected_endpoint_payload(i, o, s);
    var r = ot().getInt32(i + 0, !0),
      a = ot().getInt32(i + 4, !0);
    return n = r, e = a, ve(r, a)
  } finally {
    R.__wbindgen_add_to_stack_pointer(16), R.__wbindgen_export_4(n, e, 1)
  }
}

function Wy(t) {
  const n = Tt(t, R.__wbindgen_export_2, R.__wbindgen_export_3),
    e = de;
  R.request_url(n, e)
}

function qy(t) {
  R.set_automated_clicks(t)
}

function Ky() {
  R.init_listeners()
}

function Hy(t, n, e) {
  R.__wbindgen_export_5(t, n, x(e))
}
async function Yy(t, n) {
  if (typeof Response == "function" && t instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(t, n)
    } catch (r) {
      if (t.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r
    }
    const e = await t.arrayBuffer();
    return await WebAssembly.instantiate(e, n)
  } else {
    const e = await WebAssembly.instantiate(t, n);
    return e instanceof WebAssembly.Instance ? {
      instance: e,
      module: t
    } : e
  }
}

function Zy() {
  const t = {};
  return t.wbg = {}, t.wbg.__wbg_addEventListener_90e553fdce254421 = function() {
    return ne(function(n, e, r, a) {
      I(n).addEventListener(ve(e, r), I(a))
    }, arguments)
  }, t.wbg.__wbg_buffer_609cc3eee51ed158 = function(n) {
    const e = I(n).buffer;
    return x(e)
  }, t.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return ne(function(n, e) {
      const r = I(n).call(I(e));
      return x(r)
    }, arguments)
  }, t.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return ne(function(n, e, r) {
      const a = I(n).call(I(e), I(r));
      return x(a)
    }, arguments)
  }, t.wbg.__wbg_clientX_5eb380a5f1fec6fd = function(n) {
    return I(n).clientX
  }, t.wbg.__wbg_clientY_d8b9c7f0c4e2e677 = function(n) {
    return I(n).clientY
  }, t.wbg.__wbg_crypto_574e78ad8b13b65f = function(n) {
    const e = I(n).crypto;
    return x(e)
  }, t.wbg.__wbg_document_d249400bd7bd996d = function(n) {
    const e = I(n).document;
    return ue(e) ? 0 : x(e)
  }, t.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return ne(function(n, e) {
      I(n).getRandomValues(I(e))
    }, arguments)
  }, t.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return ne(function(n, e) {
      const r = Reflect.get(I(n), I(e));
      return x(r)
    }, arguments)
  }, t.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return ne(function(n) {
      return I(n).hasFocus()
    }, arguments)
  }, t.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return ne(function(n) {
      const e = I(n).innerWidth;
      return x(e)
    }, arguments)
  }, t.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(n) {
    let e;
    try {
      e = I(n) instanceof Window
    } catch {
      e = !1
    }
    return e
  }, t.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(n) {
    const e = I(n).msCrypto;
    return x(e)
  }, t.wbg.__wbg_navigator_1577371c070c8947 = function(n) {
    const e = I(n).navigator;
    return x(e)
  }, t.wbg.__wbg_new_a12002a7f91c75be = function(n) {
    const e = new Uint8Array(I(n));
    return x(e)
  }, t.wbg.__wbg_newnoargs_105ed471475aaf50 = function(n, e) {
    const r = new Function(ve(n, e));
    return x(r)
  }, t.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(n, e, r) {
    const a = new Uint8Array(I(n), e >>> 0, r >>> 0);
    return x(a)
  }, t.wbg.__wbg_newwithlength_a381634e90c276d4 = function(n) {
    const e = new Uint8Array(n >>> 0);
    return x(e)
  }, t.wbg.__wbg_node_905d3e251edff8a2 = function(n) {
    const e = I(n).node;
    return x(e)
  }, t.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, t.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(n) {
    const e = I(n).process;
    return x(e)
  }, t.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return ne(function(n, e) {
      I(n).randomFillSync(rn(e))
    }, arguments)
  }, t.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return ne(function() {
      const n = module.require;
      return x(n)
    }, arguments)
  }, t.wbg.__wbg_set_65595bdd868b3009 = function(n, e, r) {
    I(n).set(I(e), r >>> 0)
  }, t.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const n = typeof global > "u" ? null : global;
    return ue(n) ? 0 : x(n)
  }, t.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const n = typeof globalThis > "u" ? null : globalThis;
    return ue(n) ? 0 : x(n)
  }, t.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const n = typeof self > "u" ? null : self;
    return ue(n) ? 0 : x(n)
  }, t.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const n = typeof window > "u" ? null : window;
    return ue(n) ? 0 : x(n)
  }, t.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(n, e, r) {
    const a = I(n).subarray(e >>> 0, r >>> 0);
    return x(a)
  }, t.wbg.__wbg_versions_c01dfd4722a88165 = function(n) {
    const e = I(n).versions;
    return x(e)
  }, t.wbg.__wbindgen_boolean_get = function(n) {
    const e = I(n);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, t.wbg.__wbindgen_closure_wrapper58 = function(n, e, r) {
    const a = jy(n, e, 3, Hy);
    return x(a)
  }, t.wbg.__wbindgen_is_function = function(n) {
    return typeof I(n) == "function"
  }, t.wbg.__wbindgen_is_object = function(n) {
    const e = I(n);
    return typeof e == "object" && e !== null
  }, t.wbg.__wbindgen_is_string = function(n) {
    return typeof I(n) == "string"
  }, t.wbg.__wbindgen_is_undefined = function(n) {
    return I(n) === void 0
  }, t.wbg.__wbindgen_memory = function() {
    const n = R.memory;
    return x(n)
  }, t.wbg.__wbindgen_number_get = function(n, e) {
    const r = I(e),
      a = typeof r == "number" ? r : void 0;
    ot().setFloat64(n + 8, ue(a) ? 0 : a, !0), ot().setInt32(n + 0, !ue(a), !0)
  }, t.wbg.__wbindgen_object_clone_ref = function(n) {
    const e = I(n);
    return x(e)
  }, t.wbg.__wbindgen_object_drop_ref = function(n) {
    rn(n)
  }, t.wbg.__wbindgen_string_new = function(n, e) {
    const r = ve(n, e);
    return x(r)
  }, t.wbg.__wbindgen_throw = function(n, e) {
    throw new Error(ve(n, e))
  }, t
}

function $y(t, n) {
  return R = t.exports, Nn.__wbindgen_wasm_module = n, le = null, ye = null, R
}
async function Nn(t) {
  if (R !== void 0) return R;
  typeof t < "u" && (Object.getPrototypeOf(t) === Object.prototype ? {
    module_or_path: t
  } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t > "u" && (t = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const n = Zy();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
  const {
    instance: e,
    module: r
  } = await Yy(await t, n);
  return $y(e, r)
}
const Jy = 60,
  Xy = 100,
  Qy = 50,
  ev = 2e3;
class xn {
  constructor(n) {
    F(this, "items", []);
    F(this, "writeIdx", 0);
    this.capacity = n
  }
  push(n) {
    this.items[this.writeIdx % this.capacity] = n, this.writeIdx++
  }
  drain() {
    const n = this.items.slice(0, Math.min(this.writeIdx, this.capacity));
    return this.items = [], this.writeIdx = 0, n
  }
}

function tv() {
  return {
    idleStartMs: 0,
    totalIdleMs: 0,
    focusStartMs: 0,
    totalFocusMs: 0,
    lastMouseSampleMs: 0,
    lastClickX: 0,
    lastClickY: 0,
    windowStartMs: 0
  }
}
const Dn = new xn(Xy),
  Ln = new xn(Qy);
let P = tv(),
  st = null,
  on = !1,
  k = null,
  St = !1,
  Mn = 0;

function nb() {
  on || typeof window > "u" || (on = !0, P.focusStartMs = performance.now(), P.windowStartMs = Date.now(), document.readyState === "complete" ? k = cn() : window.addEventListener("load", () => {
    k = cn()
  }, {
    once: !0
  }), window.addEventListener("pointermove", t => {
    const n = performance.now();
    n - P.lastMouseSampleMs < Jy || (P.lastMouseSampleMs = n, Dn.push({
      x: t.clientX,
      y: t.clientY,
      t: n
    }))
  }, {
    passive: !0
  }), window.addEventListener("pointerdown", t => {
    Ln.push(performance.now()), P.lastClickX = t.clientX, P.lastClickY = t.clientY
  }, {
    passive: !0
  }), window.addEventListener("click", t => {
    t.isTrusted || (St = !0)
  }, {
    passive: !0
  }), window.addEventListener("blur", () => {
    P.totalFocusMs += performance.now() - P.focusStartMs, P.idleStartMs = performance.now()
  }, {
    passive: !0
  }), window.addEventListener("focus", () => {
    P.idleStartMs > 0 && (P.totalIdleMs += performance.now() - P.idleStartMs, P.idleStartMs = 0), P.focusStartMs = performance.now()
  }, {
    passive: !0
  }), dv())
}

function nv() {
  st = rv();
  try {
    const t = st,
      n = new Uint8Array(40),
      e = new DataView(n.buffer);
    e.setUint8(0, 1);
    let r = 0;
    t.isLinearMovement && (r |= 1), t.isConstantInterval && (r |= 2), t.hasZeroJitter && (r |= 4), k != null && k.hts && (r |= 8), navigator.webdriver && (r |= 16), St && (r |= 32), k != null && k.cdp && (r |= 64), k != null && k.odz && (r |= 128), e.setUint8(1, r), e.setUint8(2, Math.min(255, t.clickCount)), e.setUint16(3, Math.min(65535, Math.round(t.mouseSpeedAvg * 100))), e.setUint8(5, Math.min(255, t.microMovementCount)), e.setUint8(6, Math.min(255, Math.round(t.mouseSpeedStddev * 100))), e.setUint8(7, Math.min(255, t.movementSegments)), e.setUint8(8, Math.min(255, Math.round(t.avgSegmentCurvature * 255))), e.setUint16(9, Math.min(65535, Math.max(0, P.lastClickX))), e.setUint16(11, Math.min(65535, Math.max(0, P.lastClickY))), e.setUint8(13, Math.min(255, k ? k.lc : 0)), e.setUint8(14, Math.min(255, k ? k.pc : 0)), e.setUint8(15, Math.min(255, k ? k.mtp : 0)), e.setUint16(16, Math.min(65535, Math.round(t.idleMs))), e.setUint16(18, Math.min(65535, Math.round(t.focusMs))), e.setUint16(20, Math.min(65535, Math.round(t.mouseAccelAvg * 100))), e.setUint16(22, Math.min(65535, Math.round(t.mouseAccelStddev * 100))), e.setUint16(24, Math.min(65535, Math.round(t.angularVelocityStddev * 1e4))), e.setInt16(26, Math.max(-32768, Math.min(32767, Math.round(t.velocityProfileSkew * 1e3)))), e.setUint16(28, Math.min(65535, Math.round(t.preClickPauseAvg))), e.setUint16(30, Math.min(65535, k ? k.sw : 0)), e.setUint16(32, Math.min(65535, k ? k.sh : 0)), e.setUint8(34, k ? k.fb & 255 : 0), e.setUint8(35, Math.min(255, k ? k.ptc : 0)), e.setUint8(36, k ? k.adf & 255 : 0);
    let a = 0;
    return k != null && k.cdr && (a |= 1), e.setUint8(37, a), e.setUint16(38, Math.min(65535, Math.round(Mn * 100))), btoa(String.fromCharCode(...n))
  } catch {
    return ""
  }
}

function rv() {
  const t = Date.now(),
    n = P.windowStartMs,
    e = performance.now(),
    r = Dn.drain(),
    a = Ln.drain(),
    i = uv(P, e);
  P.totalIdleMs = 0, P.totalFocusMs = 0, P.focusStartMs = e, P.windowStartMs = t;
  const o = iv(r),
    s = ov(a),
    l = cv(a, r),
    u = o.straightnessAvg > .95 && r.length > 10,
    _ = o.jitterAvg < .01 && r.length > 10,
    d = s.stddev / Math.max(1, s.avg) < .05 && a.length >= 5;
  return st = {
    windowStart: n,
    windowEnd: t,
    mouseSpeedAvg: oe(o.speedAvg),
    mouseSpeedStddev: oe(o.speedStddev),
    mouseAccelAvg: oe(o.accelAvg),
    mouseAccelStddev: oe(o.accelStddev),
    microMovementCount: o.microMovementCount,
    movementSegments: o.movementSegments,
    avgSegmentCurvature: oe(o.avgSegmentCurvature),
    velocityProfileSkew: oe(o.velocityProfileSkew),
    angularVelocityStddev: oe(o.angularVelocityStddev),
    clickCount: a.length,
    preClickPauseAvg: oe(l),
    idleMs: i.idleMs,
    focusMs: i.focusMs,
    isLinearMovement: u,
    isConstantInterval: d,
    hasZeroJitter: _
  }, st
}
const av = {
  speedAvg: 0,
  speedStddev: 0,
  jitterAvg: 0,
  straightnessAvg: 0,
  accelAvg: 0,
  accelStddev: 0,
  microMovementCount: 0,
  movementSegments: 0,
  avgSegmentCurvature: 0,
  velocityProfileSkew: 0,
  angularVelocityStddev: 0,
  speeds: []
};

function iv(t) {
  if (t.length < 3) return av;
  const n = [],
    e = [],
    r = [];
  let a = 0,
    i = 0,
    o = 0;
  const s = [];
  for (let y = 1; y < t.length; y++) {
    const O = t[y].x - t[y - 1].x,
      v = t[y].y - t[y - 1].y,
      $ = Math.max(1, t[y].t - t[y - 1].t),
      G = Math.sqrt(O * O + v * v),
      V = G / $;
    if (n.push(V), G < 3 && G > 0 && a++, $ > ev) {
      if (y - i > 2) {
        o++;
        const te = sn(t.slice(i, y));
        te >= 0 && s.push(te)
      }
      i = y
    }
    if (y >= 2) {
      const te = t[y - 1].x - t[y - 2].x,
        fe = t[y - 1].y - t[y - 2].y,
        ut = O * te + v * fe,
        At = Math.sqrt(O * O + v * v),
        kt = Math.sqrt(te * te + fe * fe);
      At > 0 && kt > 0 && e.push(1 - Math.abs(ut / (At * kt)));
      const Vn = n[n.length - 2] || 0;
      r.push(Math.abs(V - Vn))
    }
  }
  if (t.length - i > 2) {
    o++;
    const y = sn(t.slice(i));
    y >= 0 && s.push(y)
  }
  const l = n.reduce((y, O) => y + O, 0) / n.length,
    u = e.length > 0 ? e.reduce((y, O) => y + O, 0) / e.length : 0,
    _ = n.reduce((y, O) => y + Math.pow(O - l, 2), 0) / n.length,
    d = Math.sqrt(_);
  let p = 0,
    g = 0;
  if (r.length > 0) {
    p = r.reduce((O, v) => O + v, 0) / r.length;
    const y = r.reduce((O, v) => O + Math.pow(v - p, 2), 0) / r.length;
    g = Math.sqrt(y)
  }
  const b = t[0],
    w = t[t.length - 1],
    E = Math.sqrt(Math.pow(w.x - b.x, 2) + Math.pow(w.y - b.y, 2));
  let S = 0;
  for (let y = 1; y < t.length; y++) {
    const O = t[y].x - t[y - 1].x,
      v = t[y].y - t[y - 1].y;
    S += Math.sqrt(O * O + v * v)
  }
  const N = S > 0 ? E / S : 0,
    j = s.length > 0 ? s.reduce((y, O) => y + O, 0) / s.length : 0;
  let C = 0;
  n.length >= 5 && d > .001 && (C = n.reduce((O, v) => O + Math.pow(v - l, 3), 0) / n.length / Math.pow(d, 3));
  let H = 0;
  if (t.length >= 4) {
    const y = [];
    for (let O = 1; O < t.length; O++) {
      const v = t[O].x - t[O - 1].x,
        $ = t[O].y - t[O - 1].y;
      Math.sqrt(v * v + $ * $) > .5 && y.push(Math.atan2($, v))
    }
    if (y.length >= 3) {
      const O = [];
      for (let G = 1; G < y.length; G++) {
        let V = y[G] - y[G - 1];
        for (; V > Math.PI;) V -= 2 * Math.PI;
        for (; V < -Math.PI;) V += 2 * Math.PI;
        O.push(V)
      }
      const v = O.reduce((G, V) => G + V, 0) / O.length,
        $ = O.reduce((G, V) => G + Math.pow(V - v, 2), 0) / O.length;
      H = Math.sqrt($)
    }
  }
  return {
    speedAvg: l,
    speedStddev: d,
    jitterAvg: u,
    straightnessAvg: N,
    accelAvg: p,
    accelStddev: g,
    microMovementCount: a,
    movementSegments: o,
    avgSegmentCurvature: j,
    velocityProfileSkew: C,
    angularVelocityStddev: H,
    speeds: n
  }
}

function ov(t) {
  if (t.length < 2) return {
    avg: 0,
    stddev: 0
  };
  const n = [];
  for (let a = 1; a < t.length; a++) n.push(t[a] - t[a - 1]);
  const e = n.reduce((a, i) => a + i, 0) / n.length,
    r = n.reduce((a, i) => a + Math.pow(i - e, 2), 0) / n.length;
  return {
    avg: e,
    stddev: Math.sqrt(r)
  }
}

function sv(t, n) {
  let e = 0,
    r = t.length - 1,
    a = -1;
  for (; e <= r;) {
    const i = e + r >>> 1;
    t[i].t <= n ? (a = i, e = i + 1) : r = i - 1
  }
  return a
}

function cv(t, n) {
  if (t.length === 0 || n.length < 2) return 0;
  let e = 0,
    r = 0;
  for (const a of t) {
    const i = sv(n, a);
    i >= 0 && (e += a - n[i].t, r++)
  }
  return r > 0 ? e / r : 0
}

function uv(t, n) {
  const e = Math.round(t.totalIdleMs + (t.idleStartMs > 0 ? n - t.idleStartMs : 0)),
    r = Math.round(t.totalFocusMs + (t.idleStartMs === 0 ? n - t.focusStartMs : 0));
  return {
    idleMs: e,
    focusMs: r
  }
}

function sn(t) {
  if (t.length < 3) return -1;
  const n = t[0],
    e = t[t.length - 1];
  if (Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2)) < 5) return -1;
  let a = 0,
    i = 0;
  for (let o = 1; o < t.length; o++) {
    const s = t[o].x - t[o - 1].x,
      l = t[o].y - t[o - 1].y;
    if (a += Math.sqrt(s * s + l * l), o >= 2) {
      const u = t[o - 1].x - t[o - 2].x,
        _ = t[o - 1].y - t[o - 2].y,
        d = u * l - _ * s,
        p = u * s + _ * l;
      i += Math.abs(Math.atan2(d, p))
    }
  }
  return a > 0 ? i / a : 0
}

function lv() {
  var r;
  let t = 0;
  const n = navigator,
    e = ["hardwareConcurrency", "deviceMemory", "platform", "vendor", "maxTouchPoints", "languages", "plugins", "userAgent"];
  try {
    for (const a of e)
      if (Object.getOwnPropertyDescriptor(navigator, a) !== void 0) {
        t |= 1;
        break
      }
  } catch {}
  try {
    const a = document.createElement("iframe");
    a.style.display = "none", document.body.appendChild(a);
    const i = a.contentWindow;
    if (i) {
      const o = i.Function.prototype.toString,
        s = ["hardwareConcurrency", "platform", "languages"];
      for (const l of s) {
        const u = Object.getOwnPropertyDescriptor(Navigator.prototype, l);
        if (u && typeof u.get == "function") {
          const _ = Function.prototype.toString.call(u.get),
            d = o.call(u.get);
          if (_ !== d) {
            t |= 2;
            break
          }
          if (!d.includes("native code")) {
            t |= 2;
            break
          }
        }
      }
    }
    a.remove()
  } catch {}
  try {
    const a = navigator.userAgent,
      i = navigator.platform;
    if (a && i) {
      const o = /Windows/.test(a),
        s = /Macintosh|Mac OS X/.test(a),
        l = /Linux/.test(a) && !/Android/.test(a),
        u = /Android/.test(a),
        _ = /iPhone|iPad|iPod/.test(a),
        d = /^Win/.test(i),
        p = /^Mac/.test(i),
        g = /^Linux/.test(i),
        b = /^(iPhone|iPad|iPod)/.test(i);
      if ((o && !d || s && !p || l && !g || u && !g || _ && !b) && (t |= 4), n.userAgentData && n.userAgentData.platform) {
        const w = n.userAgentData.platform;
        (o && w !== "Windows" || s && w !== "macOS" || l && w !== "Linux" || u && w !== "Android") && (t |= 4)
      }
    }
  } catch {}
  try {
    const i = document.createElement("canvas").getContext("webgl");
    if (i) {
      const o = i.getExtension("WEBGL_debug_renderer_info");
      if (o) {
        const s = (i.getParameter(o.UNMASKED_RENDERER_WEBGL) || "").toLowerCase(),
          l = (i.getParameter(o.UNMASKED_VENDOR_WEBGL) || "").toLowerCase(),
          u = navigator.userAgent,
          _ = /Windows/.test(u),
          d = /Macintosh|Mac OS X/.test(u);
        (s.includes("apple") || l.includes("apple")) && _ && (t |= 8), s.includes("angle") && d && !s.includes("metal") && (t |= 8), (s.includes("d3d11") || s.includes("direct3d")) && d && (t |= 8)
      }(r = i.getExtension("WEBGL_lose_context")) == null || r.loseContext()
    }
  } catch {}
  try {
    (screen.availWidth > screen.width || screen.availHeight > screen.height) && (t |= 16), screen.pixelDepth !== screen.colorDepth && (t |= 16)
  } catch {}
  try {
    const a = navigator.userAgent;
    if (/Chrome\//.test(a) && !/Edg\//.test(a)) {
      const i = window.chrome;
      i && typeof i.csi != "function" && (t |= 64)
    }
  } catch {}
  try {
    const a = ["hardwareConcurrency", "platform", "maxTouchPoints", "deviceMemory"];
    for (const i of a) {
      const o = Object.getOwnPropertyDescriptor(navigator, i);
      if (o && "value" in o) {
        t |= 128;
        break
      }
    }
  } catch {}
  return t
}

function cn() {
  const t = navigator,
    n = t.plugins ? t.plugins.length : 0,
    e = "ontouchstart" in window || t.maxTouchPoints > 0,
    r = t.maxTouchPoints || 0;
  let a = 0;
  typeof SharedArrayBuffer < "u" && (a |= 1), typeof Intl.Segmenter < "u" && (a |= 2), typeof CSS.highlights < "u" && (a |= 4), t.userAgentData && (a |= 8), window.chrome && (a |= 16), typeof window.InstallTrigger < "u" && (a |= 32), typeof window.WebKitMutationObserver < "u" && (a |= 64), typeof window.MSStream < "u" && (a |= 128);
  let i = 0;
  const o = ["webdriver", "languages", "plugins", "hardwareConcurrency", "platform", "userAgent", "vendor", "maxTouchPoints", "deviceMemory", "cookieEnabled", "pdfViewerEnabled", "connection"],
    s = ["width", "height", "colorDepth", "pixelDepth", "availWidth", "availHeight"],
    l = Function.prototype.toString;
  for (const w of o) try {
    const E = Object.getOwnPropertyDescriptor(Navigator.prototype, w);
    E && typeof E.get == "function" && l.call(E.get).includes("native code") === !1 && i++
  } catch {}
  for (const w of s) try {
    const E = Object.getOwnPropertyDescriptor(Screen.prototype, w);
    E && typeof E.get == "function" && l.call(E.get).includes("native code") === !1 && i++
  } catch {}
  let u = "",
    _ = !0;
  try {
    const w = document.createElement("canvas");
    w.width = 64, w.height = 16;
    const E = w.getContext("2d");
    if (E) {
      E.textBaseline = "top", E.font = "14px Arial", E.fillText("wplace🐾", 2, 2);
      const S = w.toDataURL();
      let N = 0;
      for (let C = 0; C < S.length; C++) N = (N << 5) - N + S.charCodeAt(C) | 0;
      u = (N >>> 0).toString(16).padStart(8, "0"), E.clearRect(0, 0, 64, 16), E.fillText("wplace🐾", 2, 2);
      const j = w.toDataURL();
      _ = S === j
    }
  } catch {}
  let d = !1;
  try {
    const w = new Error;
    Object.defineProperty(w, "stack", {
      get() {
        return d = !0, ""
      }
    }), console.debug(w)
  } catch {}
  const p = t.languages ? t.languages.length : 0,
    g = window.outerWidth === 0 || window.outerHeight === 0,
    b = lv();
  return {
    pc: n,
    sw: screen.width,
    sh: screen.height,
    hts: e,
    mtp: r,
    fb: a,
    ptc: i,
    ch: u,
    cdp: d,
    lc: p,
    odz: g,
    cdr: _,
    adf: b
  }
}

function dv() {
  const t = [];

  function e(r) {
    if (t.push(r), t.length < 30) requestAnimationFrame(e);
    else {
      const a = [];
      for (let o = 1; o < t.length; o++) {
        const s = t[o] - t[o - 1];
        s < 100 && a.push(s)
      }
      if (a.length < 5) return;
      a.sort((o, s) => o - s);
      const i = a[Math.floor(a.length / 2)];
      Mn = a.reduce((o, s) => o + Math.abs(s - i), 0) / a.length
    }
  }
  requestAnimationFrame(e)
}

function oe(t) {
  return Math.round(t * 1e3) / 1e3
}
const _v = `
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
async function fv() {
  try {
    const t = await fetch(`${yt}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!t.ok) return null;
    const n = await t.json(),
      e = await mv(n.prefix, n.difficulty);
    return e ? {
      ...n,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function mv(t, n) {
  return new Promise(e => {
    const r = new Blob([_v], {
        type: "application/javascript"
      }),
      a = URL.createObjectURL(r),
      i = new Worker(a),
      o = setTimeout(() => {
        i.terminate(), URL.revokeObjectURL(a), e(null)
      }, 12e4);
    i.onmessage = s => {
      clearTimeout(o), i.terminate(), URL.revokeObjectURL(a), s.data.error ? e(null) : e(s.data.nonce)
    }, i.onerror = () => {
      clearTimeout(o), i.terminate(), URL.revokeObjectURL(a), e(null)
    }, i.postMessage({
      prefix: t,
      difficulty: n
    })
  })
}
const It = 3;
var Me, Pe;
class pv {
  constructor() {
    D(this, Me, B(null));
    D(this, Pe, B(0))
  }
  get current() {
    return M(T(this, Me))
  }
  set current(n) {
    U(T(this, Me), n, !0)
  }
  get errorCount() {
    return M(T(this, Pe))
  }
  set errorCount(n) {
    U(T(this, Pe), n, !0)
  }
}
Me = new WeakMap, Pe = new WeakMap;
const z = new pv;
async function un(t) {
  return t === 1 ? hv() : t === 2 || t === 3 ? wv(t) : t === 4 ? gv() : !1
}
async function hv() {
  for (let t = 0; t < It; t++) try {
    const n = await fv();
    if (!n) continue;
    return await ge.verifyChallenge({
      type: "pow",
      challengeId: n.challengeId,
      nonce: n.nonce
    }), !0
  } catch {}
  return !1
}

function gv() {
  return new Promise(t => {
    z.errorCount = 0, z.current = {
      tier: 4,
      resolve: t
    }
  })
}

function wv(t) {
  return new Promise(n => {
    z.errorCount = 0, z.current = {
      tier: t,
      resolve: n
    }
  })
}

function rb(t) {
  const n = z.current;
  if (!n) return;
  const e = n.tier === 2 ? "turnstile" : "hcaptcha";
  return ge.postCaptchaSession({
    provider: e,
    token: t
  }).then(r => ge.verifyChallenge({
    type: "captcha",
    sessionId: r.sessionId
  })).then(() => {
    n.resolve(!0), z.current = null
  }).catch(() => {
    z.errorCount += 1, z.errorCount >= It && (n.resolve(!1), z.current = null)
  })
}

function ab() {
  const t = z.current;
  t && (z.errorCount += 1, z.errorCount >= It && (t.resolve(!1), z.current = null))
}

function ib() {
  const t = z.current;
  !t || t.tier !== 4 || (t.resolve(!0), z.current = null)
}

function ob() {
  z.current && (z.current.resolve(!1), z.current = null)
}
var c = (t => (t[t.CONTINUE = 100] = "CONTINUE", t[t.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", t[t.PROCESSING = 102] = "PROCESSING", t[t.EARLY_HINTS = 103] = "EARLY_HINTS", t[t.OK = 200] = "OK", t[t.CREATED = 201] = "CREATED", t[t.ACCEPTED = 202] = "ACCEPTED", t[t.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", t[t.NO_CONTENT = 204] = "NO_CONTENT", t[t.RESET_CONTENT = 205] = "RESET_CONTENT", t[t.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", t[t.MULTI_STATUS = 207] = "MULTI_STATUS", t[t.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", t[t.IM_USED = 226] = "IM_USED", t[t.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", t[t.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", t[t.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", t[t.FOUND = 302] = "FOUND", t[t.SEE_OTHER = 303] = "SEE_OTHER", t[t.NOT_MODIFIED = 304] = "NOT_MODIFIED", t[t.USE_PROXY = 305] = "USE_PROXY", t[t.SWITCH_PROXY = 306] = "SWITCH_PROXY", t[t.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", t[t.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", t[t.BAD_REQUEST = 400] = "BAD_REQUEST", t[t.UNAUTHORIZED = 401] = "UNAUTHORIZED", t[t.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", t[t.FORBIDDEN = 403] = "FORBIDDEN", t[t.NOT_FOUND = 404] = "NOT_FOUND", t[t.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", t[t.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", t[t.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", t[t.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", t[t.CONFLICT = 409] = "CONFLICT", t[t.GONE = 410] = "GONE", t[t.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", t[t.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", t[t.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", t[t.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", t[t.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", t[t.URI_TOO_LONG = 414] = "URI_TOO_LONG", t[t.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", t[t.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", t[t.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", t[t.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", t[t.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", t[t.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", t[t.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", t[t.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", t[t.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", t[t.LOCKED = 423] = "LOCKED", t[t.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", t[t.TOO_EARLY = 425] = "TOO_EARLY", t[t.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", t[t.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", t[t.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", t[t.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", t[t.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", t[t.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", t[t.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", t[t.BAD_GATEWAY = 502] = "BAD_GATEWAY", t[t.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", t[t.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", t[t.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", t[t.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", t[t.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", t[t.LOOP_DETECTED = 508] = "LOOP_DETECTED", t[t.NOT_EXTENDED = 510] = "NOT_EXTENDED", t[t.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", t[t.AWS_ELB_000 = 0] = "AWS_ELB_000", t[t.THIS_IS_FINE = 218] = "THIS_IS_FINE", t[t.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", t[t.METHOD_FAILURE = 420] = "METHOD_FAILURE", t[t.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", t[t.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", t[t.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", t[t.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", t[t.NO_RESPONSE = 444] = "NO_RESPONSE", t[t.RETRY_WITH = 449] = "RETRY_WITH", t[t.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", t[t.REDIRECT_IIS = 451] = "REDIRECT_IIS", t[t.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", t[t.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", t[t.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", t[t.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", t[t.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", t[t.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", t[t.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", t[t.INVALID_TOKEN = 498] = "INVALID_TOKEN", t[t.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", t[t.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", t[t.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", t[t.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", t[t.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", t[t.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", t[t.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", t[t.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", t[t.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", t[t.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", t[t.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", t[t.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", t[t.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", t[t.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", t[t.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", t[t.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", t[t.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", t[t.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", t[t.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", t[t.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", t[t.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", t[t.REQUEST_DENIED = 999] = "REQUEST_DENIED", t))(c || {});
const sb = {
    griefing: Ol(),
    "multi-accounting": pm(),
    "hate-speech": $l(),
    bot: To(),
    doxxing: kc(),
    "inappropriate-content": Ed(),
    other: Zo()
  },
  cb = {
    doxxing: zc(),
    "hate-speech": ud(),
    griefing: jl(),
    "multi-accounting": km(),
    bot: Uo(),
    "inappropriate-content": Pd(),
    other: cs()
  },
  ub = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  ln = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  lb = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  yv = 365 * 24 * 60 * 60 * 1e3;

function Pn(t) {
  if (!t) return null;
  const e = (t instanceof Date ? t : new Date(t)).getTime();
  return Number.isFinite(e) ? e : null
}

function db(t, n = Date.now()) {
  const e = Pn(t);
  return e === null ? !1 : e - n >= yv
}

function _b(t, n = Date.now()) {
  const e = Pn(t);
  if (e === null || e <= n) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const r = Math.max(0, Math.ceil((e - n) / 6e4)),
    a = Math.floor(r / 1440),
    i = Math.floor(r % 1440 / 60),
    o = r % 60;
  return {
    days: a,
    hours: i,
    minutes: o
  }
}
const vv = [{
    tileSize: 1e3,
    zoom: 11
  }],
  bv = 4,
  Ev = 6e3,
  Tv = [{
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
  Ov = {
    needsPhoneVerification: "needs_phone_verification"
  },
  Sv = {
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
  Iv = {
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
  Av = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  kv = {
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
          incrementDroplets: "staff.dashboard.summary.users.increment_droplets"
        }
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
        personalInformation: "staff.dashboard.users.personal_information",
        editEmail: "staff.dashboard.users.edit_email",
        disconnect: "staff.dashboard.users.disconnect",
        setDroplets: "staff.dashboard.users.set_droplets"
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
      banWaves: {
        see: "staff.dashboard.ban_waves.see",
        execute: "staff.dashboard.ban_waves.execute"
      },
      banAppeals: {
        see: "staff.dashboard.ban_appeals.see"
      },
      kpi: {
        tickets: "staff.dashboard.kpi.tickets"
      },
      storeManager: {
        frames: "staff.dashboard.store_manager.frames",
        fonts: "staff.dashboard.store_manager.fonts",
        styles: "staff.dashboard.store_manager.styles",
        badges: "staff.dashboard.store_manager.badges"
      }
    },
    tickets: {
      assign: "staff.tickets.assign",
      closedToday: "staff.tickets.closed_today",
      openCount: "staff.tickets.open_count",
      translate: "staff.tickets.translate",
      setStatus: "staff.tickets.set_status",
      ignoreAll: "staff.tickets.ignore_all"
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
        reverse: "staff.tools.select_area.reverse"
      },
      selectPixel: {
        timeout: "staff.tools.select_pixel.timeout",
        ban: "staff.tools.select_pixel.ban",
        seeRole: "staff.tools.select_pixel.see_role",
        seePunishment: "staff.tools.select_pixel.see_punishment"
      },
      autoPainter: "staff.tools.auto_painter.paint",
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
  Rv = {
    tools: {
      wayback: {
        limit: 500
      }
    }
  },
  _e = {
    seasons: vv,
    regionSize: bv,
    refreshIntervalMs: Ev,
    colors: Tv,
    errors: Ov,
    items: Sv,
    products: Iv,
    countries: Av,
    permissions: kv,
    settings: Rv
  },
  wt = _e,
  Nv = _e.seasons,
  Un = _e.seasons.length - 1,
  fb = _e.seasons[Un].zoom,
  mb = _e.seasons[Un].tileSize,
  pb = _e.permissions,
  xv = _e.settings;

function hb(t) {
  return wt.countries[t - 1]
}
class m extends Error {
  constructor(n, e) {
    super(n), this.message = n, this.status = e
  }
}

function dn(t, n) {
  const e = {};
  for (const r of t) {
    const a = n(r);
    let i = e[a];
    i ? i.push(r) : e[a] = [r]
  }
  return e
}

function gb(t, n) {
  const e = {};
  for (const r of t) {
    const a = n(r);
    e[a] = r
  }
  return e
}
var Ue, je;
class Dv {
  constructor(n) {
    D(this, Ue, B(!0));
    D(this, je, B(null));
    this.url = n
  }
  get online() {
    return M(T(this, Ue))
  }
  set online(n) {
    U(T(this, Ue), n, !0)
  }
  get serverTimeOffsetMs() {
    return M(T(this, je))
  }
  set serverTimeOffsetMs(n) {
    U(T(this, je), n, !0)
  }
  hasServerTimeEstimate() {
    return this.serverTimeOffsetMs !== null
  }
  getEstimatedServerNowMs() {
    const n = Date.now();
    return this.serverTimeOffsetMs === null ? n - 6e4 : n + this.serverTimeOffsetMs
  }
  clampWaybackTimestamp(n) {
    if (!Number.isFinite(n)) return 0;
    const e = Math.trunc(n);
    if (e <= 0) return 0;
    const r = Math.trunc(this.getEstimatedServerNowMs());
    return e > r ? r : e
  }
  updateServerTimeEstimate(n) {
    const e = n.headers.get("date");
    if (!e) return;
    const r = new Date(e).getTime();
    Number.isFinite(r) && (this.serverTimeOffsetMs = r - Date.now())
  }
  async paint(n) {
    const e = dn(n, s => `t=(${s.tile[0]},${s.tile[1]}),s=${s.season}`),
      r = {
        season: n[0].season,
        tiles: Object.values(e).map(s => ({
          x: s[0].tile[0],
          y: s[0].tile[1],
          pixels: {
            x: s.map(l => l.pixel[0]),
            y: s.map(l => l.pixel[1]),
            colors: s.map(l => l.colorIdx)
          }
        }))
      },
      a = JSON.stringify(r),
      i = await mt(a),
      o = await this.request("/paint", {
        method: "POST",
        body: a,
        headers: i,
        credentials: "include"
      });
    if (o.status !== c.OK) {
      if (o.status === c.UNAUTHORIZED) throw new Error(tn());
      if (o.status === c.FORBIDDEN) {
        if (o.headers.get("cf-mitigated") === "challenge") throw new Error(Yt());
        const s = await o.json();
        if ((s == null ? void 0 : s.error) === "timeout") {
          const l = new Date(Date.now() + ((s == null ? void 0 : s.durationMs) ?? 0));
          throw new Error(nn({
            until: l.toLocaleString()
          }))
        }
        if ((s == null ? void 0 : s.error) === "refresh") throw new Error(Jt());
        if ((s == null ? void 0 : s.error) === "color-not-owned") throw new Error($t());
        if ((s == null ? void 0 : s.error) === "event-pixel-present") throw new Error(qt());
        if ((s == null ? void 0 : s.error) === "challenge-required")
          if (s.tier) {
            if (await un(s.tier)) return this.paint(n);
            throw new Error(Kt())
          } else console.error("Challenge required but no tier provided", s);
        Se.refresh()
      } else throw new Error(f())
    }
  }
  async selectAreaClear(n, e) {
    return this.sendPaintRequests(n, (r, a, i) => `/staff/tools/select-area/clear/s${r}/pixel/${a}/${i}`, e)
  }
  async createReverseSession(n) {
    const e = await this.request("/staff/tools/select-area/reverse/session", {
      method: "POST",
      body: n.buffer,
      headers: {
        "Content-Type": "application/octet-stream"
      },
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status);
    return e.json()
  }
  async getReverseTimestamps(n, e = {}) {
    const {
      mode: r = "depth",
      beforeDepth: a,
      beforeTimestamp: i
    } = e, o = await this.request("/staff/tools/select-area/reverse/timestamps", {
      method: "POST",
      body: JSON.stringify({
        sessionId: n,
        mode: r,
        beforeDepth: a,
        beforeTimestamp: i
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (o.status !== c.OK) throw new m(f(), o.status);
    return o.json()
  }
  async getReversePreview(n, e) {
    const {
      mode: r = "depth",
      snapshotDepth: a,
      timestamp: i
    } = e, o = await this.request("/staff/tools/select-area/reverse/preview", {
      method: "POST",
      body: JSON.stringify({
        sessionId: n,
        mode: r,
        snapshotDepth: a,
        timestamp: i
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (o.status !== c.OK) throw new m(f(), o.status);
    return o.json()
  }
  async applyReverse(n, e) {
    const {
      mode: r = "depth",
      snapshotDepth: a,
      timestamp: i
    } = e, o = await this.request("/staff/tools/select-area/reverse/apply", {
      method: "POST",
      body: JSON.stringify({
        sessionId: n,
        mode: r,
        snapshotDepth: a,
        timestamp: i
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (o.status !== c.OK) throw new m(f(), o.status);
    return o.json()
  }
  async sendPaintRequests(n, e, r, a) {
    const i = dn(n, l => `t=(${l.tile[0]},${l.tile[1]}),s=${l.season}`),
      s = (await Promise.all(Object.values(i).map(async l => {
        const [u, _] = l[0].tile, d = l[0].season, p = {
          colors: l.map(E => E.colorIdx),
          coords: l.flatMap(E => E.pixel),
          csid: r
        }, g = JSON.stringify(p), b = e(d, u, _), w = await mt(g);
        return this.request(b, {
          method: "POST",
          body: g,
          headers: w,
          credentials: "include"
        })
      }))).filter(l => l.status !== c.OK);
    if (s.length) {
      const l = s[0];
      if (l.status === c.UNAUTHORIZED) throw new Error(tn());
      if (l.status === c.FORBIDDEN) {
        if (l.headers.get("cf-mitigated") === "challenge") throw new Error(Yt());
        const u = await l.json();
        if ((u == null ? void 0 : u.error) === "timeout") {
          const _ = new Date(Date.now() + ((u == null ? void 0 : u.durationMs) ?? 0));
          throw new Error(nn({
            until: _.toLocaleString()
          }))
        }
        if ((u == null ? void 0 : u.error) === "refresh") throw new Error(Jt());
        if ((u == null ? void 0 : u.error) === "color-not-owned") throw new Error($t());
        if ((u == null ? void 0 : u.error) === "event-pixel-present") throw new Error(qt());
        Se.refresh()
      } else throw new Error(f())
    }
  }
  async adminAutoPainterPaint(n, e, r) {
    const a = Lv(n),
      i = await Mv(a),
      o = new FormData;
    o.append("fingerprint", e), o.append("season", a.season.toString()), o.append("px0", a.offsetX.toString()), o.append("py0", a.offsetY.toString()), o.append("width", a.width.toString()), o.append("height", a.height.toString()), o.append("pixels", n.length.toString()), o.append("bitmap", i, "auto-painter.png"), o.append("userId", r.toString());
    const s = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: o,
      credentials: "include"
    });
    if (s.status === c.FORBIDDEN) throw new Error("Auto painter is restricted to administrators.");
    if (s.status !== c.OK) throw new Error(f());
    return s.json()
  }
  async getPixelInfo({
    season: n,
    tile: [e, r],
    pixel: [a, i]
  }) {
    const o = new URLSearchParams;
    o.set("x", String(a)), o.set("y", String(i));
    const s = await this.request(`/s${n}/pixel/${e}/${r}?${o.toString()}`, {
      credentials: "include"
    });
    if (s.status !== c.OK) {
      const l = await s.text();
      throw new Error(Fu({
        err: l
      }))
    }
    return s.json()
  }
  async getPixelAreaInfo({
    season: n,
    tile: [e, r],
    p0: [a, i],
    p1: [o, s]
  }) {
    const l = await this.request(`/staff/tools/select-area/s${n}/${e}/${r}?x0=${a}&y0=${i}&x1=${o}&y1=${s}`, {
      credentials: "include"
    });
    if (l.status !== c.OK) {
      const b = await l.text();
      throw console.error("Error while fetching pixel area info", b), new Error(f())
    }
    const u = await l.arrayBuffer(),
      _ = new DataView(u),
      d = Math.floor(u.byteLength / 5),
      p = new Uint32Array(d),
      g = new Uint8Array(d);
    for (let b = 0; b < d; b++) {
      const w = b * 5;
      p[b] = _.getUint32(w, !0), g[b] = _.getUint8(w + 4)
    }
    return {
      paintedBy: p,
      colors: g
    }
  }
  async me() {
    const n = await this.request("/me", {
      credentials: "include"
    });
    if (n.status === c.OK) return await n.json()
  }
  async logout() {
    const n = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new Error(await n.text());
    return await n.json()
  }
  async refreshPaymentSession(n) {
    return (await this.request(`/payment/refresh-session/${encodeURIComponent(n)}`, {
      method: "POST",
      credentials: "include"
    })).status === c.OK
  }
  async getOtpCooldown() {
    const n = await this.request("/anticheat/otp/cooldown", {
      credentials: "include"
    });
    if (n.status !== c.OK) throw new Error(f());
    return await n.json()
  }
  async sendOtp(n) {
    const e = await this.request("/anticheat/otp/send", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        phone: n
      }),
      throwOnStatus: !1
    });
    if (e.status === c.BAD_REQUEST) throw new Error(af());
    if (e.status === c.CONFLICT) throw new Error(Jp());
    if (e.status === c.FORBIDDEN) throw new Error(fp());
    if (e.status === c.TOO_MANY_REQUESTS) throw new Error(Xt());
    if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(lh());
    if (e.status === c.LOCKED) throw new Error(Wg());
    if (e.status === c.UNPROCESSABLE_ENTITY) throw new Error(wf());
    if (e.status !== c.OK) throw new Error(f());
    return await e.json()
  }
  async verifyChallenge(n) {
    let e;
    switch (n.type) {
      case "pow":
        e = {
          code: n.challengeId,
          nonce: n.nonce
        };
        break;
      case "captcha":
        e = {
          code: n.sessionId
        };
        break;
      case "otp":
        e = {
          code: n.code
        }
    }
    const r = await this.request("/anticheat/challenge/verify", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(e),
      headers: {
        "x-fp": await it()
      }
    });
    if (n.type === "otp") {
      if (r.status === c.GONE) throw new Error(dl());
      if (r.status === c.BAD_REQUEST) throw new Error(v_());
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(Xt());
      if (r.status !== c.OK) throw new Error(f())
    } else {
      if (r.status === c.BAD_REQUEST) throw new Error(s_());
      if (r.status !== c.OK) throw new Error(f())
    }
  }
  async updateMe(n) {
    const e = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(n)
    });
    if (e.status === c.BAD_REQUEST) {
      const r = await e.json(),
        a = (r == null ? void 0 : r.error) ?? "";
      if (a === "invalid_name") throw new Error(Zt());
      if (a === "invalid_discord") throw new Error(L_());
      if (typeof a == "string" && a.startsWith("name_change_cooldown:")) {
        const i = parseInt(a.split(":")[1] ?? "0", 10);
        throw new Error(zm({
          days: i
        }))
      }
      throw new Error(r == null ? void 0 : r.error)
    } else if (e.status !== c.OK) throw new Error(f())
  }
  async deleteMe(n) {
    const e = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: n
      })
    });
    if (e.status === c.BAD_REQUEST) throw new Error(yg());
    if (e.status !== c.OK) throw new Error(f())
  }
  async favoriteLocation(n) {
    const e = await this.request("/favorite-location", {
      method: "POST",
      body: JSON.stringify({
        latitude: n[0],
        longitude: n[1]
      }),
      credentials: "include"
    });
    if (e.status === c.FORBIDDEN) throw new Error(Ip());
    if (e.status !== c.OK) throw new Error(f())
  }
  async deleteFavoriteLocation(n) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: n
        }),
        credentials: "include"
      })).status !== c.OK) throw new Error(f())
  }
  async updateFavoriteLocation(n, e) {
    const r = await this.request("/favorite-location/update", {
      method: "POST",
      body: JSON.stringify({
        id: n,
        name: e
      }),
      credentials: "include"
    });
    if (r.status === c.BAD_REQUEST) throw new Error(nm());
    if (r.status !== c.OK) throw new Error(f())
  }
  async leaderboardPlayers(n) {
    const e = await this.request(`/leaderboard/player/${n}`);
    if (e.status !== c.OK) throw new Error(se());
    return e.json()
  }
  async leaderboardAlliances(n) {
    const e = await this.request(`/leaderboard/alliance/${n}`);
    if (e.status !== c.OK) throw new Error(se());
    return e.json()
  }
  async leaderboardRegions(n, e = 0) {
    const r = await this.request(`/leaderboard/region/${n}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(se())
  }
  async leaderboardRegionPlayers(n, e) {
    const r = await this.request(`/leaderboard/region/players/${n}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(se())
  }
  async leaderboardRegionAlliances(n, e) {
    const r = await this.request(`/leaderboard/region/alliances/${n}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(se())
  }
  async leaderboardCountries(n) {
    const e = await this.request(`/leaderboard/country/${n}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw new Error(se())
  }
  async getMapHotspots() {
    const n = await this.request("/map/hotspots", {
      credentials: "include"
    });
    return n.status !== 200 ? [] : n.json()
  }
  async getRandomTile(n) {
    const e = await this.request(`/s${n}/tile/random`);
    if (e.status !== c.OK) throw new Error(f());
    return e.json()
  }
  async purchase(n) {
    const e = await this.request("/purchase", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        product: n
      })
    });
    if (e.status !== c.OK) throw e.status === c.NOT_FOUND ? new Error(Ht()) : e.status === c.FORBIDDEN ? new Error(en()) : e.status === c.CONFLICT ? new Error(Qt()) : new Error(f())
  }
  async getAlliance() {
    const n = await this.request("/alliance", {
      credentials: "include"
    });
    if (n.status === c.OK) return n.json();
    if (n.status === c.NOT_FOUND) return;
    throw new Error(f())
  }
  async createAlliance(n) {
    const e = await this.request("/alliance", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: n
      })
    });
    if (e.status === c.OK) return e.json();
    if (e.status === c.BAD_REQUEST) {
      const r = await e.json();
      throw r.error === "max_characters" ? new Error($i()) : r.error === "name_taken" ? new Error(ji()) : r.error == "empty_name" ? new Error(uo()) : new Error(f())
    } else throw e.status === c.FORBIDDEN ? new Error(kw()) : new Error(f())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== c.OK) throw new Error(f())
  }
  async updateAllianceDescription(n) {
    const e = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: n
      })
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(ce()) : e.status === c.BAD_REQUEST ? new Error(Xu()) : new Error(f())
  }
  async updateAllianceHeadquarters(n, e) {
    const r = await this.request("/alliance/update-headquarters", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        latitude: n,
        longitude: e
      })
    });
    if (r.status !== c.OK) throw r.status === c.FORBIDDEN ? new Error(ce()) : new Error(f())
  }
  async allianceLeaderboard(n) {
    const e = await this.request(`/alliance/leaderboard/${n}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw e.status === c.FORBIDDEN ? new Error(ce()) : new Error(se())
  }
  async getAllianceInvites() {
    const n = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (n.status === c.OK) return n.json();
    throw n.status === c.FORBIDDEN ? new Error(ce()) : new Error(f())
  }
  async joinAlliance(n) {
    switch ((await this.request(`/alliance/join/${n}`, {
        credentials: "include"
      })).status) {
      case c.OK:
        return "success";
      case c.ALREADY_REPORTED:
        return "in-another-alliance";
      case c.UNAUTHORIZED:
        return "not-logged-in";
      case c.FORBIDDEN:
        return "banned";
      case c.BAD_REQUEST:
      case c.NOT_FOUND:
        return "invalid-invite";
      default:
        return "error"
    }
  }
  async getAllianceMembers(n) {
    const e = await this.request(`/alliance/members/${n}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw new Error(f())
  }
  async getAllianceBannedMembers(n) {
    const e = await this.request(`/alliance/members/banned/${n}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw new Error(f())
  }
  async getAllianceById(n) {
    const e = await this.request(`/staff/dashboard/alliances/${n}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === c.NOT_FOUND) return;
    if (e.status !== c.OK) throw new m(f(), e.status);
    const r = await e.json();
    return {
      id: Number(r.id),
      name: String(r.name),
      pixelsPainted: Number((r == null ? void 0 : r.pixels_painted) ?? 0)
    }
  }
  async searchAlliance(n) {
    const e = new URLSearchParams({
        q: n
      }),
      r = await this.request(`/staff/dashboard/alliances/search?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== c.OK) throw new m(f(), r.status);
    const a = await r.json();
    return (Array.isArray(a) ? a : []).map(i => ({
      id: Number(i.id),
      name: String(i.name ?? ""),
      pixelsPainted: Number((i == null ? void 0 : i.pixels_painted) ?? 0)
    }))
  }
  async searchAlliances(n) {
    return this.searchAlliance(n)
  }
  async getAllianceFull(n) {
    const e = await this.request(`/staff/dashboard/alliances/${n}/full`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === c.NOT_FOUND) return null;
    if (e.status !== c.OK) throw new m(f(), e.status);
    const r = await e.json(),
      a = Array.isArray(r == null ? void 0 : r.members) ? r.members : [];
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
      membersCount: Number((r == null ? void 0 : r.membersCount) ?? a.length),
      members: a.map(i => ({
        id: Number(i == null ? void 0 : i.id),
        name: String((i == null ? void 0 : i.name) ?? `#${i==null?void 0:i.id}`),
        picture: (i == null ? void 0 : i.picture) ?? null,
        pixelsPainted: Number((i == null ? void 0 : i.pixelsPainted) ?? (i == null ? void 0 : i.pixels_painted) ?? 0),
        lastPixelLatitude: (i == null ? void 0 : i.lastPixelLatitude) ?? null,
        lastPixelLongitude: (i == null ? void 0 : i.lastPixelLongitude) ?? null,
        role: (i == null ? void 0 : i.alliance_role) === "admin" || (i == null ? void 0 : i.role) === "admin" ? "admin" : "member"
      }))
    }
  }
  async getAdminAllianceMembers(n, e) {
    const r = new URLSearchParams({
        page: String(e.page),
        pageSize: String(e.pageSize)
      }),
      a = await this.request(`/staff/dashboard/alliances/${n}/members?${r.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (a.status === c.NOT_FOUND) return {
      members: [],
      total: 0
    };
    if (a.status !== c.OK) throw new m(f(), a.status);
    const i = await a.json(),
      o = Array.isArray(i == null ? void 0 : i.members) ? i.members : [];
    return {
      members: o.map(s => ({
        id: Number(s == null ? void 0 : s.id),
        name: String((s == null ? void 0 : s.name) ?? `#${s==null?void 0:s.id}`),
        picture: (s == null ? void 0 : s.picture) ?? null,
        pixelsPainted: Number((s == null ? void 0 : s.pixelsPainted) ?? (s == null ? void 0 : s.pixels_painted) ?? 0),
        lastPixelLatitude: (s == null ? void 0 : s.lastPixelLatitude) ?? null,
        lastPixelLongitude: (s == null ? void 0 : s.lastPixelLongitude) ?? null,
        role: (s == null ? void 0 : s.alliance_role) === "admin" || (s == null ? void 0 : s.role) === "admin" ? "admin" : "member"
      })),
      total: Number((i == null ? void 0 : i.total) ?? o.length)
    }
  }
  async renameAlliance(n, e) {
    const r = await this.request(`/staff/dashboard/alliances/${n}/rename`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: e
      })
    });
    if (r.status === c.BAD_REQUEST) {
      const a = await r.json().catch(() => ({}));
      throw new Error((a == null ? void 0 : a.error) ?? f())
    } else if (r.status !== c.OK) throw new m(f(), r.status)
  }
  async changeAllianceLeader(n, e) {
    const r = await this.request(`/staff/dashboard/alliances/${n}/leader`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        newLeaderUserId: e
      })
    });
    if (r.status === c.BAD_REQUEST) {
      const a = await r.json();
      throw (a == null ? void 0 : a.error) === "user_not_in_alliance" ? new Error(xf()) : new Error(f())
    } else if (r.status !== c.OK) throw new m(f(), r.status)
  }
  async banAllAllianceMembers(n, e, r) {
    const a = await this.request(`/staff/dashboard/alliances/${n}/ban-all`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        reason: e,
        notes: r
      })
    });
    if (a.status !== c.OK) throw new m(f(), a.status)
  }
  async setAllianceMemberRole(n, e, r) {
    const a = await this.request(`/staff/dashboard/alliances/${n}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: r
      })
    });
    if (a.status !== c.OK) throw new m(f(), a.status)
  }
  async removeAllianceMember(n, e) {
    const r = await this.request(`/staff/dashboard/alliances/${n}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new m(f(), r.status)
  }
  async giveAllianceAdmin(n) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: n
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(ce()) : new Error(f())
  }
  async banAllianceUser(n) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: n
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(ce()) : new Error(f())
  }
  async equipFlag(n) {
    if ((await this.request(`/flag/equip/${n}`, {
        method: "POST",
        credentials: "include"
      })).status !== c.OK) throw new Error(f())
  }
  async getMyProfilePictures() {
    const n = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (n.status !== c.OK) throw new Error(f());
    return n.json()
  }
  async changeProfilePicture(n) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: n
        })
      })).status !== c.OK) throw new Error(f())
  }
  async unbanAllianceUser(n) {
    const e = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: n
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(ce()) : new Error(f())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async generatePixQrCode(n) {
    const e = await this.request(`/payment/abacatepay/create/pix/${n}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === c.BAD_REQUEST) {
      const a = await e.json();
      throw new Error(a == null ? void 0 : a.error)
    } else {
      if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(Oi());
      if (e.status !== c.OK) throw new Error(f())
    }
    return await e.json()
  }
  async refreshPixPayment(n) {
    const e = await this.request(`/payment/abacatepay/refresh/pix/${n}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === c.BAD_REQUEST) {
      const r = await e.json();
      throw new Error(r == null ? void 0 : r.error)
    } else if (e.status !== c.OK) throw new Error("Unexpected error on the server. Try again later");
    return e.json()
  }
  async getPixStatus(n) {
    const e = await this.request(`/payment/abacatepay/status/pix/${n}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new Error("Erro inesperado. Tente atualizar a página.");
    return e.json()
  }
  async getModeratorTickets() {
    const n = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    const e = await n.json();
    for (const r of e.tickets) r.reports.sort((a, i) => ln[a.reason] - ln[i.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const n = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    return n.json()
  }
  async getNonPaidUserOpenTicketsCount() {
    const n = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    const {
      tickets: e
    } = await n.json();
    return e
  }
  async assignNewTickets() {
    const n = await this.request("/staff/tickets/assign", {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    return n.json()
  }
  async setTicketStatus(n, e, r, a) {
    const i = await this.request("/staff/tickets/set-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: n,
        status: e,
        selectedReportId: r,
        assignedReason: a
      })
    });
    if (i.status !== c.OK && i.status !== c.BAD_REQUEST) throw new m(f(), i.status)
  }
  async request(n, e) {
    let r;
    try {
      r = await fetch(`${this.url}${n}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    } catch (i) {
      throw console.error("Fetch error:", i), this.online = !1, new Error(Ls(), {
        cause: i
      })
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(Ty());
      if (r.status === c.REQUEST_TIMEOUT) throw new Error(Ph());
      if (r.status === c.SERVICE_UNAVAILABLE) throw new Error(Yh())
    }
    return r
  }
  async getOpenTicketsSummary() {
    const n = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    return n.json()
  }
  async getOpenReportsSummary() {
    const n = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    return n.json()
  }
  async getBanAppealStats(n, e) {
    const r = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(n)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new m(f(), r.status);
    const a = await r.json();
    return {
      items: a.items ?? [],
      globals: a.globals
    }
  }
  async getClosedTicketsByMod(n, e) {
    const r = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(n)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new m(f(), r.status);
    return (await r.json()).items.map(i => ({
      ...i,
      suspensionRate: (i.ban + i.timeout) / i.total
    }))
  }
  async getClosedReportsByMod(n, e) {
    const r = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(n)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new m(f(), r.status);
    return (await r.json()).items.map(i => ({
      ...i,
      suspensionRate: (i.ban + i.timeout) / i.total
    }))
  }
  async getMultipleUsersInfoById(n) {
    const e = await this.request("/staff/tools/select-area/users", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: n
      })
    });
    if (e.status !== c.OK) throw new m(f(), e.status);
    return e.json()
  }
  async getUserInfoFull(n) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(n)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.NOT_FOUND) {
      if (e.status !== c.OK) throw new m(f(), e.status);
      return e.json()
    }
  }
  async getUserInfoByEmail(n) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(n)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.NOT_FOUND) {
      if (e.status !== c.OK) throw new m(f(), e.status);
      return e.json()
    }
  }
  async removePunishment(n, e) {
    const r = e ? "/staff/dashboard/users/remove-ban" : "/staff/dashboard/users/remove-timeout",
      a = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: n
        })
      });
    if (a.status !== c.OK) throw new m(f(), a.status)
  }
  async getUserNotes(n, e) {
    const r = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(n)}` : `/staff/appeals/notes?userId=${encodeURIComponent(n)}`,
      a = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (a.status !== c.OK) throw new m(f(), a.status);
    return a.json()
  }
  async addUserNote(n, e, r) {
    const a = r == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(n)}` : `/staff/appeals/notes?userId=${encodeURIComponent(n)}`,
      i = await this.request(a, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: n,
          note: e
        })
      });
    if (i.status !== c.OK) throw new m(f(), i.status)
  }
  async getUserPermissions(n) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(n)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status);
    return e.json()
  }
  async setUserPermissions(n, e) {
    const r = await this.request("/staff/dashboard/permissions/set", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: n,
        permissions: Array.from(e)
      })
    });
    if (r.status !== c.OK) throw new m(f(), r.status);
    const a = await r.json();
    return Array.isArray(a == null ? void 0 : a.permissions) ? a.permissions : []
  }
  async getUserPurchases(n) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(n)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status);
    const r = await e.json();
    return (Array.isArray(r == null ? void 0 : r.purchases) ? r.purchases : []).map(i => {
      const o = i.is_dollar ?? i.isDollar ?? i.currency ?? i.Currency ?? 0;
      let s;
      if (typeof o == "string") {
        const d = o.toLowerCase();
        s = d === "usd" || d === "dollar" || d === "true"
      } else typeof o == "number" ? s = o !== 0 : s = !!o;
      const l = typeof i.createdAt == "string" ? i.createdAt : i.CreatedAt ? new Date(i.CreatedAt).toISOString() : "",
        u = i.product_variant ?? i.productVariant,
        _ = u == null || u === "" ? null : Number(u);
      return {
        product_name: String(i.productName ?? i.product_name ?? ""),
        amount: Number(i.amount ?? 0),
        price: Number(i.price ?? 0),
        is_dollar: s,
        created_at: l,
        product_variant: Number.isInteger(_) ? _ : null
      }
    })
  }
  async postSetUserDroplets(n, e) {
    const r = await this.request("/staff/dashboard/users/set-user-droplets", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: n,
        droplets: e
      })
    });
    if (r.status !== c.OK) throw new m(f(), r.status)
  }
  async postAdminRenameUser(n, e, r) {
    const a = await this.request("/staff/dashboard/users/rename", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: n,
        newName: e,
        oldName: r
      })
    });
    if (a.status === c.BAD_REQUEST) {
      const i = await a.json(),
        o = (i == null ? void 0 : i.error) ?? "";
      throw o === "invalid_name" ? new m(Zt(), c.BAD_REQUEST) : new m(typeof o == "string" && o ? o : f(), c.BAD_REQUEST)
    }
    if (a.status !== c.OK) throw new m(f(), a.status)
  }
  async postAdminChangeUserEmail(n, e) {
    const r = await this.request("/staff/dashboard/users/email", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: n,
        email: e
      })
    });
    if (r.status === c.BAD_REQUEST) {
      const a = await r.json(),
        i = (a == null ? void 0 : a.error) ?? "";
      throw i === "email_required" || i === "invalid_email" ? new m(Iu(), c.BAD_REQUEST) : new m(typeof i == "string" && i ? i : f(), c.BAD_REQUEST)
    }
    if (r.status === c.CONFLICT) {
      const a = await r.json();
      if (((a == null ? void 0 : a.error) ?? "") === "email_already_in_use") {
        const o = new m(typeof(a == null ? void 0 : a.userId) == "number" ? fu({
          userId: a.userId
        }) : eu(), c.CONFLICT);
        throw typeof(a == null ? void 0 : a.userId) == "number" && (o.userId = a.userId), o
      }
      throw new m(f(), c.CONFLICT)
    }
    if (r.status === c.NOT_FOUND) throw new m("User not found.", c.NOT_FOUND);
    if (r.status !== c.OK) throw new m(f(), r.status)
  }
  async getUserTickets(n, e) {
    if (e === "appeals" && (n.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
    const r = new URLSearchParams;
    r.set("userId", String(n.userId)), r.set("kind", String(n.kind)), r.set("page", String(n.page ?? 0)), r.set("pageSize", String(n.pageSize ?? 20)), e === "appeals" && r.set("appealId", String(n.appealId));
    const a = e === "appeals" ? `/staff/appeals/tickets?${r.toString()}` : `/staff/dashboard/users/tickets?${r.toString()}`,
      i = await this.request(a, {
        method: "GET",
        credentials: "include"
      });
    if (i.status !== c.OK) throw new m(f(), i.status);
    const o = await i.json(),
      s = Array.isArray(o == null ? void 0 : o.tickets) ? o.tickets : [];
    return s.sort((l, u) => new Date(u.createdAt).getTime() - new Date(l.createdAt).getTime()), s
  }
  async getUserAppeals(n) {
    const e = new URLSearchParams;
    e.set("userId", String(n.userId)), e.set("kind", n.kind), n.page !== void 0 && e.set("page", String(n.page)), n.pageSize !== void 0 && e.set("pageSize", String(n.pageSize));
    const r = await this.request(`/staff/dashboard/users/appeals?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new m(f(), r.status);
    const a = await r.json();
    return Array.isArray(a == null ? void 0 : a.appeals) ? a.appeals : []
  }
  async getModerationTranslate(n, e) {
    const r = e == "tickets" ? "/staff/tickets/translate" : "/staff/appeals/translate",
      a = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          text: n
        })
      });
    if (a.status !== c.OK) throw new m(f(), a.status);
    const i = await a.json();
    return i == null ? void 0 : i.translation
  }
  mapTicketsToReportRows(n, e) {
    var a, i, o, s, l;
    const r = [];
    for (const u of n) {
      const _ = u.status ?? "open";
      if (e === "received") {
        for (const d of u.reports) r.push({
          id: String(d.id),
          ticketId: String(u.id),
          createdAt: d.createdAt ?? u.createdAt,
          byUser: {
            id: Number(d.reportedBy),
            name: String(d.reportedByName ?? d.reportedBy),
            picture: d.reportedByPicture ?? null
          },
          reason: String(d.reason),
          status: _
        });
        continue
      }
      if (e === "sent") {
        for (const d of u.reports) r.push({
          id: String(d.id),
          ticketId: String(u.id),
          createdAt: d.createdAt ?? u.createdAt,
          toUser: {
            id: Number(u.reportedUser.id),
            name: String(u.reportedUser.name),
            picture: u.reportedUser.picture ?? null
          },
          reason: String(d.reason),
          status: _
        });
        continue
      }
      r.push({
        id: String(u.id),
        ticketId: String(u.id),
        createdAt: u.createdAt,
        handledBy: u.status && u.status !== "open" ? {
          id: ((a = u.handledBy) == null ? void 0 : a.id) ?? 0,
          name: ((i = u.handledBy) == null ? void 0 : i.name) ?? "Moderator",
          picture: ((o = u.handledBy) == null ? void 0 : o.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((l = (s = u.reports) == null ? void 0 : s[0]) == null ? void 0 : l.reason) ?? "other"),
        status: _
      })
    }
    return r.sort((u, _) => new Date(_.createdAt).getTime() - new Date(u.createdAt).getTime()), r
  }
  async getModeratorClosedTicketStats(n) {
    const e = new URLSearchParams({
        id: String(n)
      }).toString(),
      r = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== c.OK) throw new m(f(), r.status);
    return r.json()
  }
  async unlinkDiscord() {
    const n = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== c.NO_CONTENT) throw new m(f(), n.status)
  }
  async deleteSessions() {
    const n = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status)
  }
  async deleteAllUserSessions(n) {
    const e = await this.request(`/staff/dashboard/users/${n}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async banUsers(n, e, r) {
    const a = await this.request("/staff/dashboard/summary/users/ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: n,
        reason: e,
        notes: r
      })
    });
    if (a.status !== c.OK) throw new m(f(), a.status)
  }
  async timeoutUsers(n, e, r) {
    const a = await this.request("/staff/dashboard/summary/users/timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: n,
        reason: e,
        notes: r
      })
    });
    if (a.status !== c.OK) throw new m(f(), a.status)
  }
  async incrementUsersDroplets(n, e, r) {
    const a = await this.request("/staff/dashboard/summary/users/increment-droplet", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: n,
        delta: e,
        notes: r
      })
    });
    if (a.status !== c.OK) throw new m(f(), a.status)
  }
  async postUnbanUsers(n, e) {
    const r = await this.request("/staff/dashboard/summary/users/unban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: n,
        notes: e
      })
    });
    if (r.status !== c.OK) throw new m(f(), r.status)
  }
  async getAuditLogs(n) {
    const e = new URLSearchParams;
    n.actorUserId !== void 0 && e.set("actorUserId", String(n.actorUserId)), n.targetUserId !== void 0 && e.set("targetUserId", String(n.targetUserId)), n.action && e.set("action", n.action), n.sortKey && e.set("sortKey", n.sortKey), n.sortDir && e.set("sortDir", n.sortDir), e.set("limit", String(n.limit)), e.set("offset", String(n.offset));
    const r = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new m(f(), r.status);
    return r.json()
  }
  async postUsersSuspend(n, e, r) {
    let a;
    switch (e) {
      case "dashboard":
        a = `/staff/dashboard/users/${r}`;
        break;
      case "select-area":
        a = `/staff/tools/select-area/${r}`;
        break;
      case "select-pixel":
      default:
        a = `/staff/tools/select-pixel/${r}`;
        break
    }
    if ((await this.request(a, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(n)
      })).status !== c.OK) throw new Error(f())
  }
  async postReportUserName(n) {
    const e = await this.request("/report/user/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: n
      })
    });
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async postReportAllianceName(n) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: n
      })
    });
    if (e.status !== c.OK) throw new m(f(), e.status);
    return e.json()
  }
  async submitBanAppeal(n) {
    const e = JSON.stringify({
        message: n
      }),
      r = await mt(e),
      a = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: e,
        headers: r
      });
    if (a.status === c.FORBIDDEN) {
      const i = await a.json();
      if ((i == null ? void 0 : i.error) === "challenge-required" && i.tier) {
        if (await un(i.tier)) return this.submitBanAppeal(n);
        throw new m(Kt(), a.status)
      }
    }
    if (a.status !== c.OK && a.status !== c.ALREADY_REPORTED) throw new m(f(), a.status);
    return a.status
  }
  async getOpenAppeals() {
    const n = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    return n.json()
  }
  async postSolveAppeal(n, e) {
    const r = await this.request(`/staff/appeals/${n}/handle`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        approved: e
      })
    });
    if (r.status !== c.OK) throw new m(f(), r.status);
    return await r.json()
  }
  async getUserLastAppeal() {
    const n = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    const e = await n.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async getMySuspensionDetails() {
    const n = await this.request("/me/suspension", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    const e = await n.json();
    return e != null && e.active ? {
      kind: (e == null ? void 0 : e.kind) === "ban" ? "ban" : "timeout",
      reason: e == null ? void 0 : e.reason,
      reportedLatitude: typeof(e == null ? void 0 : e.reportedLatitude) == "number" ? e.reportedLatitude : void 0,
      reportedLongitude: typeof(e == null ? void 0 : e.reportedLongitude) == "number" ? e.reportedLongitude : void 0,
      zoom: typeof(e == null ? void 0 : e.zoom) == "number" ? e.zoom : void 0,
      appealSubmitted: (e == null ? void 0 : e.appealSubmitted) === !0
    } : null
  }
  async assignAppeals() {
    const n = await this.request("/staff/appeals/assign", {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    return await n.json()
  }
  async getNotificationCount() {
    const n = await this.request("/notification/count", {
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    const {
      count: e
    } = await n.json();
    return e
  }
  async getNotificationPage(n) {
    const r = `/notification/page${n!==void 0?`?cursor=${encodeURIComponent(n)}`:""}`,
      a = await this.request(r, {
        credentials: "include"
      });
    if (a.status !== c.OK) throw new m(f(), a.status);
    return a.json()
  }
  async postNotificationMarkRead(n) {
    const e = await this.request("/notification/mark-read", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        notificationIds: n
      })
    });
    if (e.status !== c.OK) throw new m(f(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const n = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    return n.json()
  }
  async getAdminBanWave() {
    const n = await this.request("/staff/dashboard/ban-waves/see", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    return n.json()
  }
  async postAdminBanWave() {
    const n = await this.request("/staff/dashboard/ban-waves/execute", {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    return n.json()
  }
  async getPendingAppealsCount() {
    const n = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    const e = await n.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async getUserPixelsPaintedToday() {
    const n = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    const e = await n.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const n = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    return n.json()
  }
  async postEquipUserFrame(n) {
    const e = await this.request(`/me/frames/equip/${n}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async getUserBadges() {
    const n = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    return n.json()
  }
  async postEquipUserBadge(n) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(n)
    });
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async postCaptchaSession(n) {
    const e = await it(),
      r = await this.request("/anticheat/captcha/session", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(n),
        headers: {
          "x-fp": e
        }
      });
    if (!r.ok) throw r.status === 500 ? new m(f(), r.status) : new m(Yd(), r.status);
    return r.json()
  }
  validWaybackInput(n) {
    const e = Number.isFinite(n.timestamp) && Number.isInteger(n.timestamp) && n.timestamp >= 0 && n.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(n.season) && Number.isInteger(n.season) && n.season >= 0 && n.season < Nv.length,
      a = Number.isFinite(n.limit) && Number.isInteger(n.limit) && n.limit > 0 && n.limit <= xv.tools.wayback.limit,
      i = Number.isFinite(n.tileX) && Number.isFinite(n.tileY) && Number.isInteger(n.tileX) && Number.isInteger(n.tileY) && n.tileX >= 0 && n.tileY >= 0,
      o = n.cursorTs !== void 0,
      s = n.cursorUserId !== void 0,
      l = n.cursorAllianceId !== void 0,
      u = n.cursorPixelsCount !== void 0,
      _ = o || s || l || u,
      d = o && s && l && u;
    let p = !0;
    return _ && (p = d && Number.isFinite(n.cursorTs) && Number.isInteger(n.cursorTs) && n.cursorTs >= 0 && n.cursorTs <= n.timestamp && Number.isFinite(n.cursorUserId) && Number.isInteger(n.cursorUserId) && n.cursorUserId >= 0 && Number.isFinite(n.cursorAllianceId) && Number.isInteger(n.cursorAllianceId) && n.cursorAllianceId >= 0 && Number.isFinite(n.cursorPixelsCount) && Number.isInteger(n.cursorPixelsCount) && n.cursorPixelsCount >= 0), !(!r || !a || !i || !e || !p)
  }
  getSafeWaybackInput(n) {
    return n.season = Math.trunc(n.season), n.limit = Math.trunc(n.limit), n.timestamp = Math.trunc(n.timestamp), n.tileX = Math.trunc(n.tileX), n.tileY = Math.trunc(n.tileY), n.cursorTs !== void 0 && (n.cursorTs = Math.trunc(n.cursorTs)), n.cursorUserId !== void 0 && (n.cursorUserId = Math.trunc(n.cursorUserId)), n.cursorAllianceId !== void 0 && (n.cursorAllianceId = Math.trunc(n.cursorAllianceId)), n.cursorPixelsCount !== void 0 && (n.cursorPixelsCount = Math.trunc(n.cursorPixelsCount)), n
  }
  async getWaybackEvents(n) {
    if (!this.validWaybackInput(n)) throw new Error("Invalid query params");
    n = this.getSafeWaybackInput(n);
    const e = new URLSearchParams;
    n.cursorTs !== void 0 && e.set("cursorTs", String(n.cursorTs)), n.cursorUserId !== void 0 && e.set("cursorUserId", String(n.cursorUserId)), n.cursorAllianceId !== void 0 && e.set("cursorAllianceId", String(n.cursorAllianceId)), n.cursorPixelsCount !== void 0 && e.set("cursorPixelsCount", String(n.cursorPixelsCount));
    const r = `/staff/tools/wayback/s${n.season}/l${n.limit}/x${n.tileX}/y${n.tileY}/t${n.timestamp}`,
      a = e.toString(),
      i = await this.request(a.length > 0 ? `${r}?${a}` : r, {
        method: "GET",
        credentials: "include"
      });
    if (i.status === c.FORBIDDEN) throw new Error("Access denied");
    if (i.status !== c.OK) throw new Error("Failed to fetch wayback events");
    return i.json()
  }
  async getStoreFrames() {
    const n = await this.request("/store/frames", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    return n.json()
  }
  async postBuyUserFrame(n) {
    const e = await this.request(`/store/frames/buy/${n}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === c.NOT_FOUND) throw new Error(Ht());
    if (e.status === c.FORBIDDEN) throw new Error(en());
    if (e.status === c.CONFLICT) throw new Error(Qt());
    if (e.status !== c.OK) throw new Error(f())
  }
  async postEquipCosmetics(n) {
    const e = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(n)
    });
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async getStoreNameCosmetics() {
    const n = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    return await n.json()
  }
  async postBuyCosmetic(n) {
    const e = await this.request(`/store/name/buy/${n}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async getMyNameCosmetics() {
    const n = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== c.OK) throw new m(f(), n.status);
    return await n.json()
  }
  async getTicketsKpi(n) {
    const e = new URLSearchParams;
    e.set("start", n.startIso), e.set("end", n.endIso), n.compare && e.set("compare", "1"), n.userId != null && e.set("userId", String(n.userId)), n.allianceId != null && e.set("allianceId", String(n.allianceId)), n.reason != null && e.set("reason", n.reason), n.punishment != null && e.set("punishment", n.punishment), n.granularity != null && e.set("granularity", n.granularity);
    const r = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new m(f(), r.status);
    return r.json()
  }
  async postCreateFrame(n) {
    const e = new FormData;
    e.append("name", n.name), e.append("image", n.image), e.append("description", n.description), e.append("value", n.value.toString()), e.append("rarity", n.rarity), e.append("purchasable", n.purchasable.toString());
    const r = await this.request("/staff/store-manager/frames", {
      method: "POST",
      credentials: "include",
      body: e
    });
    if (r.status !== c.OK) throw new m(f(), r.status)
  }
  async postCreateFont(n) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(n)
    });
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async postCreateStyle(n) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(n)
    });
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async getR2Images(n) {
    const e = new URLSearchParams({
        page: String(n.page),
        pageSize: String(n.pageSize)
      }),
      r = await this.request(`/staff/store-manager/images?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== c.OK) throw new m(f(), r.status);
    return r.json()
  }
  async postUploadR2Image(n) {
    const e = new FormData;
    n.name && e.append("name", n.name), e.append("image", n.image);
    const r = await this.request("/staff/store-manager/images", {
      method: "POST",
      credentials: "include",
      body: e
    });
    if (r.status !== c.OK) throw new m(f(), r.status);
    return r.json()
  }
  async deleteR2Image(n) {
    const e = await this.request(`/staff/store-manager/images/${n}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new m(f(), e.status)
  }
  async markRulesAsRead() {
    return (await this.request("/me/rules/read", {
      method: "POST",
      credentials: "include"
    })).status === c.OK
  }
}
Ue = new WeakMap, je = new WeakMap;

function Lv(t) {
  var p, g;
  if (!t.length) throw new Error("Auto painter request does not contain any pixels.");
  const n = t[0].season;
  for (const b of t)
    if (b.season !== n) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (p = wt.seasons) == null ? void 0 : p[n];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const r = e.tileSize;
  let a = Number.POSITIVE_INFINITY,
    i = Number.POSITIVE_INFINITY,
    o = Number.NEGATIVE_INFINITY,
    s = Number.NEGATIVE_INFINITY;
  const l = t.map(b => {
      const w = Math.round(b.tile[0] * r + b.pixel[0]),
        E = Math.round(b.tile[1] * r + b.pixel[1]);
      return w < a && (a = w), E < i && (i = E), w > o && (o = w), E > s && (s = E), {
        x: w,
        y: E,
        colorIdx: b.colorIdx
      }
    }),
    u = o - a + 1,
    _ = s - i + 1;
  if (!Number.isFinite(u) || !Number.isFinite(_) || u <= 0 || _ <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const d = new Uint8ClampedArray(u * _ * 4);
  for (const {
      x: b,
      y: w,
      colorIdx: E
    }
    of l) {
    const S = (g = wt.colors) == null ? void 0 : g[E];
    if (!S) throw new Error(`Unknown palette color index: ${E}`);
    const N = b - a,
      C = ((w - i) * u + N) * 4,
      [H, y, O] = S.rgb;
    d[C] = H, d[C + 1] = y, d[C + 2] = O, d[C + 3] = E === 0 ? 1 : 255
  }
  return {
    data: d,
    width: u,
    height: _,
    offsetX: a,
    offsetY: i,
    season: n
  }
}
async function Mv(t) {
  const n = Pv(t.width, t.height),
    e = n.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const r = e.createImageData(t.width, t.height);
  return r.data.set(t.data), e.putImageData(r, 0, 0), "convertToBlob" in n ? n.convertToBlob({
    type: "image/png"
  }) : new Promise((a, i) => {
    n.toBlob(o => {
      if (!o) {
        i(new Error("Failed to encode auto painter bitmap."));
        return
      }
      a(o)
    }, "image/png")
  })
}

function Pv(t, n) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(t, n);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = t, e.height = n, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let ge = new Dv(yt);
async function mt(t) {
  const n = await it(),
    e = nv();
  return {
    "x-pawtect-token": await Hv(t, e),
    "x-t": e,
    "x-fp": n
  }
}
const wb = t => new URL(t, yt).toString();

function jn(t, n) {
  if (!(t != null && t.length)) return !1;
  for (const e of t)
    if (e === n) return !0;
  return !1
}

function Uv(t, n) {
  for (const e of n)
    if (jn(t, e)) return !0;
  return !1
}

function Cn(t) {
  const n = atob(t),
    e = new Uint8Array(n.length);
  for (let r = 0; r < n.length; r++) e[r] = n.charCodeAt(r);
  return e
}

function jv(t) {
  if (typeof Buffer < "u") return Buffer.from(t).toString("base64");
  let n = "";
  for (let e = 0; e < t.length; e++) n += String.fromCharCode(t[e]);
  return btoa(n)
}
class Cv {
  constructor(n) {
    F(this, "bytes");
    this.bytes = n ?? new Uint8Array
  }
  set(n, e) {
    const r = Math.floor(n / 8),
      a = n % 8;
    if (r >= this.bytes.length) {
      const o = new Uint8Array(r + 1),
        s = o.length - this.bytes.length;
      for (let l = 0; l < this.bytes.length; l++) o[l + s] = this.bytes[l];
      this.bytes = o
    }
    const i = this.bytes.length - 1 - r;
    e ? this.bytes[i] = this.bytes[i] | 1 << a : this.bytes[i] = this.bytes[i] & ~(1 << a)
  }
  get(n) {
    const e = Math.floor(n / 8),
      r = n % 8,
      a = this.bytes.length;
    return e > a ? !1 : (this.bytes[a - 1 - e] & 1 << r) !== 0
  }
}

function yb(t) {
  return new Promise((n, e) => {
    const r = new FileReader;
    r.onload = () => {
      const a = r.result;
      if (!a || typeof a != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      n(a.substring(a.indexOf(",") + 1))
    }, r.readAsDataURL(t)
  })
}

function vb(t) {
  if (typeof FileReader > "u") {
    const n = t.type || "application/octet-stream";
    return t.arrayBuffer().then(e => `data:${n};base64,${jv(new Uint8Array(e))}`)
  }
  return new Promise((n, e) => {
    const r = new FileReader;
    r.onloadend = () => {
      const a = r.result;
      if (typeof a != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      n(a)
    }, r.onerror = e, r.readAsDataURL(t)
  })
}

function bb(t) {
  if (!t.startsWith("data:")) throw new Error("Could not parse data URL");
  const n = t.indexOf(",");
  if (n === -1) throw new Error("Could not parse data URL");
  const e = t.slice(5, n),
    r = t.slice(n + 1),
    a = e.indexOf(";base64"),
    i = (a === -1 ? e : e.slice(0, a)) || "text/plain";
  if (a !== -1) {
    const o = Cn(r),
      s = new Uint8Array(o.byteLength);
    return s.set(o), new Blob([s], {
      type: i
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: i
  })
}

function Eb(...t) {
  return t.filter(Boolean).join(" ")
}
const Fv = typeof document < "u";
let _n = 0;
var Ce, Fe, Be;
class Bv {
  constructor() {
    D(this, Ce, B(nt([])));
    D(this, Fe, B(nt([])));
    D(this, Be, n => {
      const e = this.toasts.findIndex(r => r.id === n);
      return e === -1 ? null : e
    });
    F(this, "addToast", n => {
      Fv && this.toasts.unshift(n)
    });
    F(this, "updateToast", ({
      id: n,
      data: e,
      type: r,
      message: a
    }) => {
      const i = this.toasts.findIndex(s => s.id === n),
        o = this.toasts[i];
      this.toasts[i] = {
        ...o,
        ...e,
        id: n,
        title: a,
        type: r,
        updated: !0
      }
    });
    F(this, "create", n => {
      var s;
      const {
        message: e,
        ...r
      } = n, a = typeof(n == null ? void 0 : n.id) == "number" || n.id && ((s = n.id) == null ? void 0 : s.length) > 0 ? n.id : _n++, i = n.dismissable === void 0 ? !0 : n.dismissable, o = n.type === void 0 ? "default" : n.type;
      return Nt(() => {
        this.toasts.find(u => u.id === a) ? this.updateToast({
          id: a,
          data: n,
          type: o,
          message: e,
          dismissable: i
        }) : this.addToast({
          ...r,
          id: a,
          title: e,
          dismissable: i,
          type: o
        })
      }), a
    });
    F(this, "dismiss", n => (Nt(() => {
      if (n === void 0) {
        this.toasts = this.toasts.map(r => ({
          ...r,
          dismiss: !0
        }));
        return
      }
      const e = this.toasts.findIndex(r => r.id === n);
      this.toasts[e] && (this.toasts[e] = {
        ...this.toasts[e],
        dismiss: !0
      })
    }), n));
    F(this, "remove", n => {
      if (n === void 0) {
        this.toasts = [];
        return
      }
      const e = T(this, Be).call(this, n);
      if (e !== null) return this.toasts.splice(e, 1), n
    });
    F(this, "message", (n, e) => this.create({
      ...e,
      type: "default",
      message: n
    }));
    F(this, "error", (n, e) => this.create({
      ...e,
      type: "error",
      message: n
    }));
    F(this, "success", (n, e) => this.create({
      ...e,
      type: "success",
      message: n
    }));
    F(this, "info", (n, e) => this.create({
      ...e,
      type: "info",
      message: n
    }));
    F(this, "warning", (n, e) => this.create({
      ...e,
      type: "warning",
      message: n
    }));
    F(this, "loading", (n, e) => this.create({
      ...e,
      type: "loading",
      message: n
    }));
    F(this, "promise", (n, e) => {
      if (!e) return;
      let r;
      e.loading !== void 0 && (r = this.create({
        ...e,
        promise: n,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const a = n instanceof Promise ? n : n();
      let i = r !== void 0;
      return a.then(o => {
        if (typeof o == "object" && o && "ok" in o && typeof o.ok == "boolean" && !o.ok) {
          i = !1;
          const s = zv(o);
          this.create({
            id: r,
            type: "error",
            message: s
          })
        } else if (e.success !== void 0) {
          i = !1;
          const s = typeof e.success == "function" ? e.success(o) : e.success;
          this.create({
            id: r,
            type: "success",
            message: s
          })
        }
      }).catch(o => {
        if (e.error !== void 0) {
          i = !1;
          const s = typeof e.error == "function" ? e.error(o) : e.error;
          this.create({
            id: r,
            type: "error",
            message: s
          })
        }
      }).finally(() => {
        var o;
        i && (this.dismiss(r), r = void 0), (o = e.finally) == null || o.call(e)
      }), r
    });
    F(this, "custom", (n, e) => {
      const r = (e == null ? void 0 : e.id) || _n++;
      return this.create({
        component: n,
        id: r,
        ...e
      }), r
    });
    F(this, "removeHeight", n => {
      this.heights = this.heights.filter(e => e.toastId !== n)
    });
    F(this, "setHeight", n => {
      const e = T(this, Be).call(this, n.toastId);
      if (e === null) {
        this.heights.push(n);
        return
      }
      this.heights[e] = n
    });
    F(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return M(T(this, Ce))
  }
  set toasts(n) {
    U(T(this, Ce), n, !0)
  }
  get heights() {
    return M(T(this, Fe))
  }
  set heights(n) {
    U(T(this, Fe), n, !0)
  }
}
Ce = new WeakMap, Fe = new WeakMap, Be = new WeakMap;

function zv(t) {
  return t && typeof t == "object" && "status" in t ? `HTTP error! Status: ${t.status}` : `Error! ${t}`
}
const Z = new Bv;

function Vv(t, n) {
  return Z.create({
    message: t,
    ...n
  })
}
var ct;
class Tb {
  constructor() {
    D(this, ct, we(() => Z.toasts.filter(n => !n.dismiss)))
  }
  get toasts() {
    return M(T(this, ct))
  }
}
ct = new WeakMap;
const Gv = Vv,
  Wv = Object.assign(Gv, {
    success: Z.success,
    info: Z.info,
    warning: Z.warning,
    error: Z.error,
    custom: Z.custom,
    message: Z.message,
    promise: Z.promise,
    dismiss: Z.dismiss,
    loading: Z.loading,
    getActiveToasts: () => Z.toasts.filter(t => !t.dismiss)
  });
var ze, Ve, Ge, We, qe, Ke, He, Ye;
class qv {
  constructor() {
    F(this, "channel", new BroadcastChannel("user-channel"));
    D(this, ze, B());
    D(this, Ve, B(!0));
    D(this, Ge, B());
    D(this, We, B(Date.now()));
    D(this, qe, we(() => {
      if (!this.data) return;
      const n = this.data.charges;
      if (n.count > n.max) return n.count;
      const e = n.count + Math.max(($n.now - this.lastFetch) / n.cooldownMs, 0);
      return Math.min(n.max, e)
    }));
    D(this, Ke, we(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    D(this, He, we(() => {
      var n;
      return new Cv(Cn(((n = this.data) == null ? void 0 : n.flagsBitmap) ?? "AA=="))
    }));
    D(this, Ye, we(() => {
      var e;
      if (!((e = this.data) != null && e.timeoutUntil)) return;
      const n = new Date(this.data.timeoutUntil);
      if (!(n.getTime() < Date.now())) return n
    }));
    this.channel && (this.channel.onmessage = n => {
      const e = JSON.parse(n.data);
      e.type === "refresh" ? (this.data = e.data, this.lastFetch = Date.now()) : e.type === "logout" && (this.data = void 0)
    })
  }
  get data() {
    return M(T(this, ze))
  }
  set data(n) {
    U(T(this, ze), n, !0)
  }
  get loading() {
    return M(T(this, Ve))
  }
  set loading(n) {
    U(T(this, Ve), n, !0)
  }
  get notificationCount() {
    return M(T(this, Ge))
  }
  set notificationCount(n) {
    U(T(this, Ge), n, !0)
  }
  get lastFetch() {
    return M(T(this, We))
  }
  set lastFetch(n) {
    U(T(this, We), n)
  }
  get charges() {
    return M(T(this, qe))
  }
  set charges(n) {
    U(T(this, qe), n)
  }
  get cooldown() {
    return M(T(this, Ke))
  }
  set cooldown(n) {
    U(T(this, Ke), n)
  }
  get flagsBitmap() {
    return M(T(this, He))
  }
  set flagsBitmap(n) {
    U(T(this, He), n)
  }
  get timeoutUntil() {
    return M(T(this, Ye))
  }
  set timeoutUntil(n) {
    U(T(this, Ye), n)
  }
  async refresh() {
    var n, e;
    try {
      return this.loading = !0, this.data = await ge.me(), this.lastFetch = Date.now(), (n = this.channel) == null || n.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && ge.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && (Kn("userId", {
        id: this.data.id
      }), Kv(this.data.id)), !!this.data
    } catch (r) {
      return console.error(r), Wv.warning(ep(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var n;
    await ge.logout(), (n = this.channel) == null || n.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(n) {
    var r;
    return n < 32 ? !0 : ((((r = this.data) == null ? void 0 : r.extraColorsBitmap) ?? 0) & 1 << n - 32) !== 0
  }
  hasPermission(n) {
    var e;
    return jn((e = this.data) == null ? void 0 : e.permissions, n)
  }
  hasAnyPermission(n) {
    var e;
    return Uv((e = this.data) == null ? void 0 : e.permissions, n)
  }
}
ze = new WeakMap, Ve = new WeakMap, Ge = new WeakMap, We = new WeakMap, qe = new WeakMap, Ke = new WeakMap, He = new WeakMap, Ye = new WeakMap;
const Se = new qv;
let Fn, be;
async function Bn() {
  return be || (be = (async () => {
    var t;
    try {
      await Nn(Qn), (t = Se.data) != null && t.id && Ot(Se.data.id), Ky();
      const n = fetch;
      return Object.assign(window, {
        fetch: zn((e, r) => {
          let a = null;
          return e instanceof Request ? a = e.url : a = e, a.startsWith("/") || Wy(a), n.call(window, e, r)
        })
      }), !0
    } catch (n) {
      return console.error("Error loading Pawtect WASM:", n), Fn = n, Hn(n), be = void 0, !1
    }
  })()), be
}
async function Kv(t) {
  await Bn(), Ot(t)
}

function Ob() {
  return be ?? Promise.resolve(!1)
}

function Sb() {
  return Fn
}
async function Hv(t, n) {
  if (!await Bn()) throw new Error(rw());
  const r = navigator.webdriver,
    a = await it();
  Ot(Se.data.id), Fy(a), Vy(r), qy(St);
  const i = Uint8Array.from(atob(n), o => o.charCodeAt(0));
  return zy(i), Gy(t)
}

function zn(t) {
  return t.bind().bind()
}

function Ib(t, n, e) {
  const r = {
    [t.name](...a) {
      return e(...a), n(...a)
    }
  } [t.name];
  return zn(r)
}
export {
  yg as $, Xn as A, zc as B, Un as C, Uo as D, km as E, jl as F, Z as G, Eb as H, Tb as I, ob as J, z as K, ab as L, rb as M, ib as N, Qv as O, yt as P, nb as Q, Bn as R, pb as S, Ib as T, vb as U, bb as V, hb as W, Ob as X, rw as Y, Sb as Z, db as _, ge as a, wb as a0, cb as a1, _b as a2, lb as a3, gb as a4, fb as a5, Xv as a6, Oi as a7, ji as a8, $i as a9, Jp as aA, lh as aB, Jt as aC, Ph as aD, Yh as aE, Xt as aF, Wg as aG, Qt as aH, kw as aI, ce as aJ, en as aK, tn as aL, Ty as aM, nn as aN, uo as aa, Zo as ab, cs as ac, qt as ad, Ls as ae, Ht as af, Yt as ag, eu as ah, fu as ai, Fu as aj, Xu as ak, dl as al, s_ as am, v_ as an, L_ as ao, Zt as ap, af as aq, wf as ar, xf as as, se as at, nm as au, zm as av, ep as aw, fp as ax, Ip as ay, $t as az, sb as b, To as c, kc as d, f as e, wt as f, Ol as g, $l as h, Ed as i, $n as j, mb as k, tb as l, pm as m, Iu as n, it as o, Yd as p, eb as q, mt as r, ub as s, Wv as t, Se as u, un as v, Kt as w, yb as x, Pd as y, ud as z
};