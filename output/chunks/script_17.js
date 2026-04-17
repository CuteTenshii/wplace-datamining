var Wn = Object.defineProperty;
var Nt = t => {
  throw TypeError(t)
};
var qn = (t, n, e) => n in t ? Wn(t, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : t[n] = e;
var F = (t, n, e) => qn(t, typeof n != "symbol" ? n + "" : n, e),
  Kn = (t, n, e) => n.has(t) || Nt("Cannot " + e);
var b = (t, n, e) => (Kn(t, n, "read from private field"), e ? e.call(t) : n.get(t)),
  D = (t, n, e) => n.has(t) ? Nt("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, e);
import {
  g as h
} from "./DADvmwwi.js";
import {
  e as B,
  i as M,
  h as P,
  g as rt,
  x as xt,
  u as we
} from "./CdM0B1iz.js";
import {
  s as Hn,
  c as Yn
} from "./ZOs-mZQf.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
    };
    var n = new t.Error().stack;
    n && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[n] = "8a97800e-2ae4-4759-805d-521d9a759b9d", t._sentryDebugIdIdentifier = "sentry-dbid-8a97800e-2ae4-4759-805d-521d9a759b9d")
  } catch {}
})();
const Qv = "https://maps.wplace.live",
  eb = "8d582454-e5ec-4314-b1c2-89e460ac1d28",
  Zn = "true",
  tb = "0x4AAAAAABpHqZ-6i7uL0nmG",
  nb = "https://backend.wplace.live/files",
  vt = "https://backend.wplace.live",
  Dt = "theme";
var Ie, Ae, ke, Re, Ne, xe, De, Le, Me;
class $n {
  constructor() {
    D(this, Ie, B(!1));
    D(this, Ae, B(!1));
    D(this, ke, B(0));
    D(this, Re, B(!1));
    D(this, Ne, B(rt(Xn())));
    D(this, xe, B(!1));
    D(this, De, B("custom-winter"));
    D(this, Le, B(rt(Date.now())));
    D(this, Me, B(void 0));
    setInterval(() => {
      P(b(this, Le), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(Dt), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return M(b(this, Ie))
  }
  set dropletsDialogOpen(n) {
    P(b(this, Ie), n, !0)
  }
  get storeDialogOpen() {
    return M(b(this, Ae))
  }
  set storeDialogOpen(n) {
    P(b(this, Ae), n, !0)
  }
  get storeTabIndex() {
    return M(b(this, ke))
  }
  set storeTabIndex(n) {
    P(b(this, ke), n, !0)
  }
  get muted() {
    return M(b(this, Re))
  }
  set muted(n) {
    P(b(this, Re), n, !0)
  }
  get language() {
    return M(b(this, Ne))
  }
  set language(n) {
    P(b(this, Ne), n, !0)
  }
  get turnstatileLoaded() {
    return M(b(this, xe))
  }
  set turnstatileLoaded(n) {
    P(b(this, xe), n, !0)
  }
  get theme() {
    return M(b(this, De))
  }
  set theme(n) {
    P(b(this, De), n, !0), localStorage.setItem(Dt, n), document.documentElement.setAttribute("data-theme", n)
  }
  get now() {
    return M(b(this, Le))
  }
  get captcha() {
    return Qn ? M(b(this, Me)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(n) {
    P(b(this, Me), n, !0)
  }
}
Ie = new WeakMap, Ae = new WeakMap, ke = new WeakMap, Re = new WeakMap, Ne = new WeakMap, xe = new WeakMap, De = new WeakMap, Le = new WeakMap, Me = new WeakMap;
const Jn = new $n;

function Xn() {
  if (navigator.languages && navigator.languages.length > 0) {
    const t = navigator.languages.find(n => n.length === 2);
    if (t) return t
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const Qn = Zn.toLowerCase() !== "false",
  er = "" + new URL("../assets/pawtect_wasm_bg.9gmZk8aU.wasm", import.meta.url).href;
var ht = function() {
  return ht = Object.assign || function(n) {
    for (var e, r = 1, a = arguments.length; r < a; r++) {
      e = arguments[r];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i])
    }
    return n
  }, ht.apply(this, arguments)
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

function mn(t, n, e) {
  if (e || arguments.length === 2)
    for (var r = 0, a = n.length, i; r < a; r++)(i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return t.concat(i || Array.prototype.slice.call(n))
}
var pn = "4.6.2";

function at(t, n) {
  return new Promise(function(e) {
    return setTimeout(e, t, n)
  })
}

function tr() {
  return new Promise(function(t) {
    var n = new MessageChannel;
    n.port1.onmessage = function() {
      return t()
    }, n.port2.postMessage(null)
  })
}

function nr(t, n) {
  n === void 0 && (n = 1 / 0);
  var e = window.requestIdleCallback;
  return e ? new Promise(function(r) {
    return e.call(window, function() {
      return r()
    }, {
      timeout: n
    })
  }) : at(Math.min(t, n))
}

function hn(t) {
  return !!t && typeof t.then == "function"
}

function Lt(t, n) {
  try {
    var e = t();
    hn(e) ? e.then(function(r) {
      return n(!0, r)
    }, function(r) {
      return n(!1, r)
    }) : n(!0, e)
  } catch (r) {
    n(!1, r)
  }
}

function Mt(t, n, e) {
  return e === void 0 && (e = 16), Q(this, void 0, void 0, function() {
    var r, a, i, o;
    return ee(this, function(s) {
      switch (s.label) {
        case 0:
          r = Array(t.length), a = Date.now(), i = 0, s.label = 1;
        case 1:
          return i < t.length ? (r[i] = n(t[i], i), o = Date.now(), o >= a + e ? (a = o, [4, tr()]) : [3, 3]) : [3, 4];
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

function rr(t, n) {
  for (var e = 0, r = t.length; e < r; ++e)
    if (t[e] === n) return !0;
  return !1
}

function ar(t, n) {
  return !rr(t, n)
}

function bt(t) {
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

function gn(t, n) {
  if (n === void 0 && (n = 1), Math.abs(n) >= 1) return Math.round(t / n) * n;
  var e = 1 / n;
  return Math.round(t * e) / e
}

function ir(t) {
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

function or(t) {
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
var sr = [4283543511, 3981806797],
  cr = [3301882366, 444984403];

function Pt(t) {
  var n = [0, t[0] >>> 1];
  L(t, n), Y(t, sr), n[1] = t[0] >>> 1, L(t, n), Y(t, cr), n[1] = t[0] >>> 1, L(t, n)
}
var Qe = [2277735313, 289559509],
  et = [1291169091, 658871167],
  Ut = [0, 5],
  ur = [0, 1390208809],
  lr = [0, 944331445];

function dr(t, n) {
  var e = or(t);
  n = n || 0;
  var r = [0, e.length],
    a = r[1] % 16,
    i = r[1] - a,
    o = [0, n],
    s = [0, n],
    l = [0, 0],
    u = [0, 0],
    _;
  for (_ = 0; _ < i; _ = _ + 16) l[0] = e[_ + 4] | e[_ + 5] << 8 | e[_ + 6] << 16 | e[_ + 7] << 24, l[1] = e[_] | e[_ + 1] << 8 | e[_ + 2] << 16 | e[_ + 3] << 24, u[0] = e[_ + 12] | e[_ + 13] << 8 | e[_ + 14] << 16 | e[_ + 15] << 24, u[1] = e[_ + 8] | e[_ + 9] << 8 | e[_ + 10] << 16 | e[_ + 11] << 24, Y(l, Qe), me(l, 31), Y(l, et), L(o, l), me(o, 27), ie(o, s), Y(o, Ut), ie(o, ur), Y(u, et), me(u, 33), Y(u, Qe), L(s, u), me(s, 31), ie(s, o), Y(s, Ut), ie(s, lr);
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
      d[1] = e[_ + 8], L(u, d), Y(u, et), me(u, 33), Y(u, Qe), L(s, u);
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
      d[1] = e[_], L(l, d), Y(l, Qe), me(l, 31), Y(l, et), L(o, l)
  }
  return L(o, r), L(s, r), ie(o, s), ie(s, o), Pt(o), Pt(s), ie(o, s), ie(s, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8)
}

function _r(t) {
  var n;
  return ht({
    name: t.name,
    message: t.message,
    stack: (n = t.stack) === null || n === void 0 ? void 0 : n.split(`
`)
  }, t)
}

function fr(t) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(t))
}

function mr(t) {
  return typeof t != "function"
}

function pr(t, n) {
  var e = Oe(new Promise(function(r) {
    var a = Date.now();
    Lt(t.bind(null, n), function() {
      for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
      var s = Date.now() - a;
      if (!i[0]) return r(function() {
        return {
          error: i[1],
          duration: s
        }
      });
      var l = i[1];
      if (mr(l)) return r(function() {
        return {
          value: l,
          duration: s
        }
      });
      r(function() {
        return new Promise(function(u) {
          var _ = Date.now();
          Lt(l, function() {
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

function hr(t, n, e, r) {
  var a = Object.keys(t).filter(function(o) {
      return ar(e, o)
    }),
    i = Oe(Mt(a, function(o) {
      return pr(t[o], n)
    }, r));
  return function() {
    return Q(this, void 0, void 0, function() {
      var s, l, u, _, d;
      return ee(this, function(p) {
        switch (p.label) {
          case 0:
            return [4, i];
          case 1:
            return s = p.sent(), [4, Mt(s, function(g) {
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

function wn() {
  var t = window,
    n = navigator;
  return q(["MSCSSMatrix" in t, "msSetImmediate" in t, "msIndexedDB" in t, "msMaxTouchPoints" in n, "msPointerEnabled" in n]) >= 4
}

function gr() {
  var t = window,
    n = navigator;
  return q(["msWriteProfilerMark" in t, "MSStream" in t, "msLaunchUri" in n, "msSaveBlob" in n]) >= 3 && !wn()
}

function $e() {
  var t = window,
    n = navigator;
  return q(["webkitPersistentStorage" in n, "webkitTemporaryStorage" in n, (n.vendor || "").indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in t, "BatteryManager" in t, "webkitMediaStream" in t, "webkitSpeechGrammar" in t]) >= 5
}

function X() {
  var t = window,
    n = navigator;
  return q(["ApplePayError" in t, "CSSPrimitiveValue" in t, "Counter" in t, n.vendor.indexOf("Apple") === 0, "RGBColor" in t, "WebKitMediaKeys" in t]) >= 4
}

function Et() {
  var t = window,
    n = t.HTMLElement,
    e = t.Document;
  return q(["safari" in t, !("ongestureend" in t), !("TouchEvent" in t), !("orientation" in t), n && !("autocapitalize" in n.prototype), e && "pointerLockElement" in e.prototype]) >= 4
}

function Je() {
  var t = window;
  return fr(t.print) && String(t.browser) === "[object WebPageNamespace]"
}

function yn() {
  var t, n, e = window;
  return q(["buildID" in navigator, "MozAppearance" in ((n = (t = document.documentElement) === null || t === void 0 ? void 0 : t.style) !== null && n !== void 0 ? n : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4
}

function wr() {
  var t = window;
  return q([!("MediaSettingsRange" in t), "RTCEncodedAudioFrame" in t, "" + t.Intl == "[object Intl]", "" + t.Reflect == "[object Reflect]"]) >= 3
}

function yr() {
  var t = window,
    n = t.URLPattern;
  return q(["union" in Set.prototype, "Iterator" in t, n && "hasRegExpGroups" in n.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3
}

function vr() {
  var t = window;
  return q(["DOMRectList" in t, "RTCPeerConnectionIceEvent" in t, "SVGGeometryElement" in t, "ontransitioncancel" in t]) >= 3
}

function Xe() {
  var t = window,
    n = navigator,
    e = t.CSS,
    r = t.HTMLButtonElement;
  return q([!("getStorageUpdates" in n), r && "popover" in r.prototype, "CSSCounterStyleRule" in t, e.supports("font-size-adjust: ex-height 0.5"), e.supports("text-transform: full-width")]) >= 4
}

function br() {
  if (navigator.platform === "iPad") return !0;
  var t = screen,
    n = t.width / t.height;
  return q(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, n > .65 && n < 1.53]) >= 2
}

function Er() {
  var t = document;
  return t.fullscreenElement || t.msFullscreenElement || t.mozFullScreenElement || t.webkitFullscreenElement || null
}

function Tr() {
  var t = document;
  return (t.exitFullscreen || t.msExitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen).call(t)
}

function Tt() {
  var t = $e(),
    n = yn(),
    e = window,
    r = navigator,
    a = "connection";
  return t ? q([!("SharedWorker" in e), r[a] && "ontypechange" in r[a], !("sinkId" in new Audio)]) >= 2 : n ? q(["onorientationchange" in e, "orientation" in e, /android/i.test(r.appVersion)]) >= 2 : !1
}

function Or() {
  var t = navigator,
    n = window,
    e = Audio.prototype,
    r = n.visualViewport;
  return q(["srLatency" in e, "srChannelCount" in e, "devicePosture" in t, r && "segments" in r, "getTextInformation" in Image.prototype]) >= 3
}

function Sr() {
  return kr() ? -4 : Ir()
}

function Ir() {
  var t = window,
    n = t.OfflineAudioContext || t.webkitOfflineAudioContext;
  if (!n) return -2;
  if (Ar()) return -1;
  var e = 4500,
    r = 5e3,
    a = new n(1, r, 44100),
    i = a.createOscillator();
  i.type = "triangle", i.frequency.value = 1e4;
  var o = a.createDynamicsCompressor();
  o.threshold.value = -50, o.knee.value = 40, o.ratio.value = 12, o.attack.value = 0, o.release.value = .25, i.connect(o), o.connect(a.destination), i.start(0);
  var s = Rr(a),
    l = s[0],
    u = s[1],
    _ = Oe(l.then(function(d) {
      return Nr(d.getChannelData(0).subarray(e))
    }, function(d) {
      if (d.name === "timeout" || d.name === "suspended") return -3;
      throw d
    }));
  return function() {
    return u(), _
  }
}

function Ar() {
  return X() && !Et() && !vr()
}

function kr() {
  return X() && Xe() && Je() || $e() && Or() && yr()
}

function Rr(t) {
  var n = 3,
    e = 500,
    r = 500,
    a = 5e3,
    i = function() {},
    o = new Promise(function(s, l) {
      var u = !1,
        _ = 0,
        d = 0;
      t.oncomplete = function(E) {
        return s(E.renderedBuffer)
      };
      var p = function() {
          setTimeout(function() {
            return l(jt("timeout"))
          }, Math.min(r, d + a - Date.now()))
        },
        g = function() {
          try {
            var E = t.startRendering();
            switch (hn(E) && Oe(E), t.state) {
              case "running":
                d = Date.now(), u && p();
                break;
              case "suspended":
                document.hidden || _++, u && _ >= n ? l(jt("suspended")) : setTimeout(g, e);
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

function Nr(t) {
  for (var n = 0, e = 0; e < t.length; ++e) n += Math.abs(t[e]);
  return n
}

function jt(t) {
  var n = new Error(t);
  return n.name = t, n
}

function vn(t, n, e) {
  var r, a, i;
  return e === void 0 && (e = 50), Q(this, void 0, void 0, function() {
    var o, s;
    return ee(this, function(l) {
      switch (l.label) {
        case 0:
          o = document, l.label = 1;
        case 1:
          return o.body ? [3, 3] : [4, at(e)];
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
              g = function(T) {
                d = !0, _(T)
              };
            s.onload = p, s.onerror = g;
            var E = s.style;
            E.setProperty("display", "block", "important"), E.position = "absolute", E.top = "0", E.left = "0", E.visibility = "hidden", n && "srcdoc" in s ? s.srcdoc = n : s.src = "about:blank", o.body.appendChild(s);
            var w = function() {
              var T, S;
              d || (((S = (T = s.contentWindow) === null || T === void 0 ? void 0 : T.document) === null || S === void 0 ? void 0 : S.readyState) === "complete" ? p() : setTimeout(w, 10))
            };
            w()
          })];
        case 5:
          l.sent(), l.label = 6;
        case 6:
          return !((a = (r = s.contentWindow) === null || r === void 0 ? void 0 : r.document) === null || a === void 0) && a.body ? [3, 8] : [4, at(e)];
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

function xr(t) {
  for (var n = ir(t), e = n[0], r = n[1], a = document.createElement(e ?? "div"), i = 0, o = Object.keys(r); i < o.length; i++) {
    var s = o[i],
      l = r[s].join(" ");
    s === "style" ? Dr(a.style, l) : a.setAttribute(s, l)
  }
  return a
}

function Dr(t, n) {
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

function Lr() {
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
var Mr = "mmMwWLliI0O&1",
  Pr = "48px",
  pe = ["monospace", "sans-serif", "serif"],
  Ct = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function Ur() {
  var t = this;
  return vn(function(n, e) {
    var r = e.document;
    return Q(t, void 0, void 0, function() {
      var a, i, o, s, l, u, _, d, p, g, E, w;
      return ee(this, function(T) {
        for (a = r.body, a.style.fontSize = Pr, i = r.createElement("div"), i.style.setProperty("visibility", "hidden", "important"), o = {}, s = {}, l = function(S) {
            var N = r.createElement("span"),
              j = N.style;
            return j.position = "absolute", j.top = "0", j.left = "0", j.fontFamily = S, N.textContent = Mr, i.appendChild(N), N
          }, u = function(S, N) {
            return l("'".concat(S, "',").concat(N))
          }, _ = function() {
            return pe.map(l)
          }, d = function() {
            for (var S = {}, N = function(y) {
                S[y] = pe.map(function(O) {
                  return u(y, O)
                })
              }, j = 0, C = Ct; j < C.length; j++) {
              var H = C[j];
              N(H)
            }
            return S
          }, p = function(S) {
            return pe.some(function(N, j) {
              return S[j].offsetWidth !== o[N] || S[j].offsetHeight !== s[N]
            })
          }, g = _(), E = d(), a.appendChild(i), w = 0; w < pe.length; w++) o[pe[w]] = g[w].offsetWidth, s[pe[w]] = g[w].offsetHeight;
        return [2, Ct.filter(function(S) {
          return p(E[S])
        })]
      })
    })
  })
}

function jr() {
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

function Cr() {
  return Fr(Kr())
}

function Fr(t) {
  var n, e = !1,
    r, a, i = Br(),
    o = i[0],
    s = i[1];
  return zr(o, s) ? (e = Vr(s), t ? r = a = "skipped" : (n = Gr(o, s), r = n[0], a = n[1])) : r = a = "unsupported", {
    winding: e,
    geometry: r,
    text: a
  }
}

function Br() {
  var t = document.createElement("canvas");
  return t.width = 1, t.height = 1, [t, t.getContext("2d")]
}

function zr(t, n) {
  return !!(n && t.toDataURL)
}

function Vr(t) {
  return t.rect(0, 0, 10, 10), t.rect(2, 2, 6, 6), !t.isPointInPath(5, 5, "evenodd")
}

function Gr(t, n) {
  Wr(t, n);
  var e = dt(t),
    r = dt(t);
  if (e !== r) return ["unstable", "unstable"];
  qr(t, n);
  var a = dt(t);
  return [a, e]
}

function Wr(t, n) {
  t.width = 240, t.height = 60, n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(100, 1, 62, 20), n.fillStyle = "#069", n.font = '11pt "Times New Roman"';
  var e = "Cwm fjordbank gly ".concat("😃");
  n.fillText(e, 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText(e, 4, 45)
}

function qr(t, n) {
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

function dt(t) {
  return t.toDataURL()
}

function Kr() {
  return X() && Xe() && Je()
}

function Hr() {
  var t = navigator,
    n = 0,
    e;
  t.maxTouchPoints !== void 0 ? n = bt(t.maxTouchPoints) : t.msMaxTouchPoints !== void 0 && (n = t.msMaxTouchPoints);
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

function Yr() {
  return navigator.oscpu
}

function Zr() {
  var t = navigator,
    n = [],
    e = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
  if (e !== void 0 && n.push([e]), Array.isArray(t.languages)) $e() && wr() || n.push(t.languages);
  else if (typeof t.languages == "string") {
    var r = t.languages;
    r && n.push(r.split(","))
  }
  return n
}

function $r() {
  return window.screen.colorDepth
}

function Jr() {
  return re(J(navigator.deviceMemory), void 0)
}

function Xr() {
  if (!(X() && Xe() && Je())) return Qr()
}

function Qr() {
  var t = screen,
    n = function(r) {
      return re(bt(r), null)
    },
    e = [n(t.width), n(t.height)];
  return e.sort().reverse(), e
}
var ea = 2500,
  ta = 10,
  tt, _t;

function na() {
  if (_t === void 0) {
    var t = function() {
      var n = gt();
      wt(n) ? _t = setTimeout(t, ea) : (tt = n, _t = void 0)
    };
    t()
  }
}

function ra() {
  var t = this;
  return na(),
    function() {
      return Q(t, void 0, void 0, function() {
        var n;
        return ee(this, function(e) {
          switch (e.label) {
            case 0:
              return n = gt(), wt(n) ? tt ? [2, mn([], tt, !0)] : Er() ? [4, Tr()] : [3, 2] : [3, 2];
            case 1:
              e.sent(), n = gt(), e.label = 2;
            case 2:
              return wt(n) || (tt = n), [2, n]
          }
        })
      })
    }
}

function aa() {
  var t = this;
  if (X() && Xe() && Je()) return function() {
    return Promise.resolve(void 0)
  };
  var n = ra();
  return function() {
    return Q(t, void 0, void 0, function() {
      var e, r;
      return ee(this, function(a) {
        switch (a.label) {
          case 0:
            return [4, n()];
          case 1:
            return e = a.sent(), r = function(i) {
              return i === null ? null : gn(i, ta)
            }, [2, [r(e[0]), r(e[1]), r(e[2]), r(e[3])]]
        }
      })
    })
  }
}

function gt() {
  var t = screen;
  return [re(J(t.availTop), null), re(J(t.width) - J(t.availWidth) - re(J(t.availLeft), 0), null), re(J(t.height) - J(t.availHeight) - re(J(t.availTop), 0), null), re(J(t.availLeft), null)]
}

function wt(t) {
  for (var n = 0; n < 4; ++n)
    if (t[n]) return !1;
  return !0
}

function ia() {
  return re(bt(navigator.hardwareConcurrency), void 0)
}

function oa() {
  var t, n = (t = window.Intl) === null || t === void 0 ? void 0 : t.DateTimeFormat;
  if (n) {
    var e = new n().resolvedOptions().timeZone;
    if (e) return e
  }
  var r = -sa();
  return "UTC".concat(r >= 0 ? "+" : "").concat(r)
}

function sa() {
  var t = new Date().getFullYear();
  return Math.max(J(new Date(t, 0, 1).getTimezoneOffset()), J(new Date(t, 6, 1).getTimezoneOffset()))
}

function ca() {
  try {
    return !!window.sessionStorage
  } catch {
    return !0
  }
}

function ua() {
  try {
    return !!window.localStorage
  } catch {
    return !0
  }
}

function la() {
  if (!(wn() || gr())) try {
    return !!window.indexedDB
  } catch {
    return !0
  }
}

function da() {
  return !!window.openDatabase
}

function _a() {
  return navigator.cpuClass
}

function fa() {
  var t = navigator.platform;
  return t === "MacIntel" && X() && !Et() ? br() ? "iPad" : "iPhone" : t
}

function ma() {
  return navigator.vendor || ""
}

function pa() {
  for (var t = [], n = 0, e = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; n < e.length; n++) {
    var r = e[n],
      a = window[r];
    a && typeof a == "object" && t.push(r)
  }
  return t.sort()
}

function ha() {
  var t = document;
  try {
    t.cookie = "cookietest=1; SameSite=Strict;";
    var n = t.cookie.indexOf("cookietest=") !== -1;
    return t.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", n
  } catch {
    return !1
  }
}

function ga() {
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

function wa(t) {
  var n = t === void 0 ? {} : t,
    e = n.debug;
  return Q(this, void 0, void 0, function() {
    var r, a, i, o, s, l;
    return ee(this, function(u) {
      switch (u.label) {
        case 0:
          return ya() ? (r = ga(), a = Object.keys(r), i = (l = []).concat.apply(l, a.map(function(_) {
            return r[_]
          })), [4, va(i)]) : [2, void 0];
        case 1:
          return o = u.sent(), e && ba(r, o), s = a.filter(function(_) {
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

function ya() {
  return X() || Tt()
}

function va(t) {
  var n;
  return Q(this, void 0, void 0, function() {
    var e, r, a, i, l, o, s, l;
    return ee(this, function(u) {
      switch (u.label) {
        case 0:
          for (e = document, r = e.createElement("div"), a = new Array(t.length), i = {}, Ft(r), l = 0; l < t.length; ++l) o = xr(t[l]), o.tagName === "DIALOG" && o.show(), s = e.createElement("div"), Ft(s), s.appendChild(o), r.appendChild(s), a[l] = o;
          u.label = 1;
        case 1:
          return e.body ? [3, 3] : [4, at(50)];
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

function Ft(t) {
  t.style.setProperty("visibility", "hidden", "important"), t.style.setProperty("display", "block", "important")
}

function ba(t, n) {
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

function Ea() {
  for (var t = 0, n = ["rec2020", "p3", "srgb"]; t < n.length; t++) {
    var e = n[t];
    if (matchMedia("(color-gamut: ".concat(e, ")")).matches) return e
  }
}

function Ta() {
  if (Bt("inverted")) return !0;
  if (Bt("none")) return !1
}

function Bt(t) {
  return matchMedia("(inverted-colors: ".concat(t, ")")).matches
}

function Oa() {
  if (zt("active")) return !0;
  if (zt("none")) return !1
}

function zt(t) {
  return matchMedia("(forced-colors: ".concat(t, ")")).matches
}
var Sa = 100;

function Ia() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (var t = 0; t <= Sa; ++t)
      if (matchMedia("(max-monochrome: ".concat(t, ")")).matches) return t;
    throw new Error("Too high value")
  }
}

function Aa() {
  if (he("no-preference")) return 0;
  if (he("high") || he("more")) return 1;
  if (he("low") || he("less")) return -1;
  if (he("forced")) return 10
}

function he(t) {
  return matchMedia("(prefers-contrast: ".concat(t, ")")).matches
}

function ka() {
  if (Vt("reduce")) return !0;
  if (Vt("no-preference")) return !1
}

function Vt(t) {
  return matchMedia("(prefers-reduced-motion: ".concat(t, ")")).matches
}

function Ra() {
  if (Gt("reduce")) return !0;
  if (Gt("no-preference")) return !1
}

function Gt(t) {
  return matchMedia("(prefers-reduced-transparency: ".concat(t, ")")).matches
}

function Na() {
  if (Wt("high")) return !0;
  if (Wt("standard")) return !1
}

function Wt(t) {
  return matchMedia("(dynamic-range: ".concat(t, ")")).matches
}
var A = Math,
  W = function() {
    return 0
  };

function xa() {
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
    E = A.log1p || W,
    w = function(v) {
      return A.pow(A.PI, v)
    },
    T = function(v) {
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
    acoshPf: T(1e154),
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
    log1p: E(10),
    log1pPf: O(10),
    powPI: w(-100)
  }
}
var Da = "mmMwWLliI0fiflO&1",
  ft = {
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

function La() {
  return Ma(function(t, n) {
    for (var e = {}, r = {}, a = 0, i = Object.keys(ft); a < i.length; a++) {
      var o = i[a],
        s = ft[o],
        l = s[0],
        u = l === void 0 ? {} : l,
        _ = s[1],
        d = _ === void 0 ? Da : _,
        p = t.createElement("span");
      p.textContent = d, p.style.whiteSpace = "nowrap";
      for (var g = 0, E = Object.keys(u); g < E.length; g++) {
        var w = E[g],
          T = u[w];
        T !== void 0 && (p.style[w] = T)
      }
      e[o] = p, n.append(t.createElement("br"), p)
    }
    for (var S = 0, N = Object.keys(ft); S < N.length; S++) {
      var o = N[S];
      r[o] = e[o].getBoundingClientRect().width
    }
    return r
  })
}

function Ma(t, n) {
  return n === void 0 && (n = 4e3), vn(function(e, r) {
    var a = r.document,
      i = a.body,
      o = i.style;
    o.width = "".concat(n, "px"), o.webkitTextSizeAdjust = o.textSizeAdjust = "none", $e() ? i.style.zoom = "".concat(1 / r.devicePixelRatio) : X() && (i.style.zoom = "reset");
    var s = a.createElement("div");
    return s.textContent = mn([], Array(n / 20 << 0), !0).map(function() {
      return "word"
    }).join(" "), i.appendChild(s), t(a, i)
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
}

function Pa() {
  return navigator.pdfViewerEnabled
}

function Ua() {
  var t = new Float32Array(1),
    n = new Uint8Array(t.buffer);
  return t[0] = 1 / 0, t[0] = t[0] - t[0], n[3]
}

function ja() {
  var t = window.ApplePaySession;
  if (typeof(t == null ? void 0 : t.canMakePayments) != "function") return -1;
  if (Ca()) return -3;
  try {
    return t.canMakePayments() ? 1 : 0
  } catch (n) {
    return Fa(n)
  }
}
var Ca = Lr;

function Fa(t) {
  if (t instanceof Error && t.name === "InvalidAccessError" && /\bfrom\b.*\binsecure\b/i.test(t.message)) return -2;
  throw t
}

function Ba() {
  var t, n = document.createElement("a"),
    e = (t = n.attributionSourceId) !== null && t !== void 0 ? t : n.attributionsourceid;
  return e === void 0 ? void 0 : String(e)
}
var bn = -1,
  En = -2,
  za = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
  Va = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  Ga = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
  Wa = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
  Tn = "WEBGL_debug_renderer_info",
  qa = "WEBGL_polygon_mode";

function Ka(t) {
  var n, e, r, a, i, o, s = t.cache,
    l = On(s);
  if (!l) return bn;
  if (!In(l)) return En;
  var u = Sn() ? null : l.getExtension(Tn);
  return {
    version: ((n = l.getParameter(l.VERSION)) === null || n === void 0 ? void 0 : n.toString()) || "",
    vendor: ((e = l.getParameter(l.VENDOR)) === null || e === void 0 ? void 0 : e.toString()) || "",
    vendorUnmasked: u ? (r = l.getParameter(u.UNMASKED_VENDOR_WEBGL)) === null || r === void 0 ? void 0 : r.toString() : "",
    renderer: ((a = l.getParameter(l.RENDERER)) === null || a === void 0 ? void 0 : a.toString()) || "",
    rendererUnmasked: u ? (i = l.getParameter(u.UNMASKED_RENDERER_WEBGL)) === null || i === void 0 ? void 0 : i.toString() : "",
    shadingLanguageVersion: ((o = l.getParameter(l.SHADING_LANGUAGE_VERSION)) === null || o === void 0 ? void 0 : o.toString()) || ""
  }
}

function Ha(t) {
  var n = t.cache,
    e = On(n);
  if (!e) return bn;
  if (!In(e)) return En;
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
  for (var g = qt(e), E = 0, w = g; E < w.length; E++) {
    var T = w[E],
      S = e[T];
    s.push("".concat(T, "=").concat(S).concat(za.has(S) ? "=".concat(e.getParameter(S)) : ""))
  }
  if (r)
    for (var N = 0, j = r; N < j.length; N++) {
      var C = j[N];
      if (!(C === Tn && Sn() || C === qa && $a())) {
        var H = e.getExtension(C);
        if (!H) {
          i.push(C);
          continue
        }
        for (var y = 0, O = qt(H); y < O.length; y++) {
          var T = O[y],
            S = H[T];
          l.push("".concat(T, "=").concat(S).concat(Va.has(S) ? "=".concat(e.getParameter(S)) : ""))
        }
      }
    }
  for (var v = 0, $ = Ga; v < $.length; v++)
    for (var G = $[v], V = 0, te = Wa; V < te.length; V++) {
      var fe = te[V],
        lt = Ya(e, G, fe);
      u.push("".concat(G, ".").concat(fe, "=").concat(lt.join(",")))
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

function On(t) {
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

function Ya(t, n, e) {
  var r = t.getShaderPrecisionFormat(t[n], t[e]);
  return r ? [r.rangeMin, r.rangeMax, r.precision] : []
}

function qt(t) {
  var n = Object.keys(t.__proto__);
  return n.filter(Za)
}

function Za(t) {
  return typeof t == "string" && !t.match(/[^A-Z0-9_x]/)
}

function Sn() {
  return yn()
}

function $a() {
  return $e() || X()
}

function In(t) {
  return typeof t.getParameter == "function"
}

function Ja() {
  var t = Tt() || X();
  if (!t) return -2;
  if (!window.AudioContext) return -1;
  var n = new AudioContext().baseLatency;
  return n == null ? -1 : isFinite(n) ? n : -3
}

function Xa() {
  if (!window.Intl) return -1;
  var t = window.Intl.DateTimeFormat;
  if (!t) return -2;
  var n = t().resolvedOptions().locale;
  return !n && n !== "" ? -3 : n
}
var Qa = {
  fonts: Ur,
  domBlockers: wa,
  fontPreferences: La,
  audio: Sr,
  screenFrame: aa,
  canvas: Cr,
  osCpu: Yr,
  languages: Zr,
  colorDepth: $r,
  deviceMemory: Jr,
  screenResolution: Xr,
  hardwareConcurrency: ia,
  timezone: oa,
  sessionStorage: ca,
  localStorage: ua,
  indexedDB: la,
  openDatabase: da,
  cpuClass: _a,
  platform: fa,
  plugins: jr,
  touchSupport: Hr,
  vendor: ma,
  vendorFlavors: pa,
  cookiesEnabled: ha,
  colorGamut: Ea,
  invertedColors: Ta,
  forcedColors: Oa,
  monochrome: Ia,
  contrast: Aa,
  reducedMotion: ka,
  reducedTransparency: Ra,
  hdr: Na,
  math: xa,
  pdfViewerEnabled: Pa,
  architecture: Ua,
  applePay: ja,
  privateClickMeasurement: Ba,
  audioBaseLatency: Ja,
  dateTimeLocale: Xa,
  webGlBasics: Ka,
  webGlExtensions: Ha
};

function ei(t) {
  return hr(Qa, t, [])
}
var ti = "$ if upgrade to Pro: https://fpjs.dev/pro";

function ni(t) {
  var n = ri(t),
    e = ai(n);
  return {
    score: n,
    comment: ti.replace(/\$/g, "".concat(e))
  }
}

function ri(t) {
  if (Tt()) return .4;
  if (X()) return Et() && !(Xe() && Je()) ? .5 : .3;
  var n = "value" in t.platform ? t.platform.value : "";
  return /^Win/.test(n) ? .6 : /^Mac/.test(n) ? .5 : .7
}

function ai(t) {
  return gn(.99 + .01 * t, 1e-4)
}

function ii(t) {
  for (var n = "", e = 0, r = Object.keys(t).sort(); e < r.length; e++) {
    var a = r[e],
      i = t[a],
      o = "error" in i ? "error" : JSON.stringify(i.value);
    n += "".concat(n ? "|" : "").concat(a.replace(/([:|\\])/g, "\\$1"), ":").concat(o)
  }
  return n
}

function An(t) {
  return JSON.stringify(t, function(n, e) {
    return e instanceof Error ? _r(e) : e
  }, 2)
}

function kn(t) {
  return dr(ii(t))
}

function oi(t) {
  var n, e = ni(t);
  return {
    get visitorId() {
      return n === void 0 && (n = kn(this.components)), n
    },
    set visitorId(r) {
      n = r
    },
    confidence: e,
    components: t,
    version: pn
  }
}

function si(t) {
  return t === void 0 && (t = 50), nr(t, t * 2)
}

function ci(t, n) {
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
              return i = s.sent(), o = oi(i), (n || r != null && r.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(o.version, `
userAgent: `).concat(navigator.userAgent, `
timeBetweenLoadAndGet: `).concat(a - e, `
visitorId: `).concat(o.visitorId, `
components: `).concat(An(i), "\n```")), [2, o]
          }
        })
      })
    }
  }
}

function ui() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    var t = new XMLHttpRequest;
    t.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(pn, "/npm-monitoring"), !0), t.send()
  } catch (n) {
    console.error(n)
  }
}

function li(t) {
  var n;
  return t === void 0 && (t = {}), Q(this, void 0, void 0, function() {
    var e, r, a;
    return ee(this, function(i) {
      switch (i.label) {
        case 0:
          return (!((n = t.monitoring) !== null && n !== void 0) || n) && ui(), e = t.delayFallback, r = t.debug, [4, si(e)];
        case 1:
          return i.sent(), a = ei({
            cache: {},
            debug: r
          }), [2, ci(a, r)]
      }
    })
  })
}
var Rn = {
  load: li,
  hashComponents: kn,
  componentsToDebugString: An
};
let mt = null,
  it;
async function di() {
  return mt || (mt = Rn.load()), mt
}
async function ot() {
  return it || _i().then(t => t.visitorId)
}
async function _i() {
  const n = await (await di()).get(),
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
  return it = Rn.hashComponents({
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
    visitorId: it,
    components: o
  }
}
const fi = () => "Your account has been suspended for breaking the rules",
  mi = () => "Sua conta foi suspensa por quebrar as regras",
  pi = () => "您的账号因违反规则已被暂停",
  hi = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  gi = () => "Tu cuenta ha sido suspendida por infringir las regras",
  wi = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  yi = () => "Il tuo account è stato sospeso per aver infranto le regole",
  vi = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  bi = () => "Twoje konto zostało zawieszone za łamanie zasad",
  Ei = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Ti = () => "Ваш обліковий запис було призупинено за порушення правил",
  Oi = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  Si = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? fi() : e === "pt" ? mi() : e === "ch" ? pi() : e === "de" ? hi() : e === "es" ? gi() : e === "fr" ? wi() : e === "it" ? yi() : e === "jp" ? vi() : e === "pl" ? bi() : e === "ru" ? Ei() : e === "uk" ? Ti() : Oi()
  },
  Ii = () => "Alliance name already taken",
  Ai = () => "Já possui uma aliança com esse nome",
  ki = () => "该联盟名称已被占用",
  Ri = () => "Der Allianzname ist bereits vergeben",
  Ni = () => "Ese nombre de alianza ya está en uso",
  xi = () => "Ce nom d’alliance est déjà pris",
  Di = () => "Esiste già un'alleanza con questo nome",
  Li = () => "このアライアンス名は既に使用されています。",
  Mi = () => "Nazwa sojuszu jest już zajęta",
  Pi = () => "Такое название альянса уже используется",
  Ui = () => "Назва альянсу вже зайнята",
  ji = () => "Tên liên minh đã được sử dụng",
  Ci = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Ii() : e === "pt" ? Ai() : e === "ch" ? ki() : e === "de" ? Ri() : e === "es" ? Ni() : e === "fr" ? xi() : e === "it" ? Di() : e === "jp" ? Li() : e === "pl" ? Mi() : e === "ru" ? Pi() : e === "uk" ? Ui() : ji()
  },
  Fi = () => "Alliance name exceeded the maximum number of characters",
  Bi = () => "O nome da aliança excedeu o número máximo de caracteres",
  zi = () => "联盟名称超过最大字符数限制",
  Vi = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  Gi = () => "El nombre de la alianza superó el número máximo de caracteres",
  Wi = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  qi = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  Ki = () => "アライアンス名が最大文字数を超えています。",
  Hi = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  Yi = () => "Название альянса превышает максимальную длину",
  Zi = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  $i = () => "Tên liên minh vượt quá số ký tự cho phép",
  Ji = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Fi() : e === "pt" ? Bi() : e === "ch" ? zi() : e === "de" ? Vi() : e === "es" ? Gi() : e === "fr" ? Wi() : e === "it" ? qi() : e === "jp" ? Ki() : e === "pl" ? Hi() : e === "ru" ? Yi() : e === "uk" ? Zi() : $i()
  },
  Xi = () => "Alliance with empty name",
  Qi = () => "Aliança com nome vazio",
  eo = () => "名称为空的联盟",
  to = () => "Allianz mit leerem Namen",
  no = () => "Alianza con nombre vacío",
  ro = () => "Alliance avec nom vide",
  ao = () => "Alleanza con nome vuoto",
  io = () => "名前が空のアライアンスです。",
  oo = () => "Sojusz z pustą nazwą",
  so = () => "Альянс с пустым названием",
  co = () => "Альянс із порожньою назвою",
  uo = () => "Liên minh không có tên",
  lo = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Xi() : e === "pt" ? Qi() : e === "ch" ? eo() : e === "de" ? to() : e === "es" ? no() : e === "fr" ? ro() : e === "it" ? ao() : e === "jp" ? io() : e === "pl" ? oo() : e === "ru" ? so() : e === "uk" ? co() : uo()
  },
  _o = () => "Botting",
  fo = () => "Uso de bots",
  mo = () => "脚本",
  po = () => "Bot-Nutzung",
  ho = () => "Botting",
  go = () => "Bots",
  wo = () => "Uso di bot",
  yo = () => "ボット使用",
  vo = () => "Botting",
  bo = () => "Боттинг",
  Eo = () => "Боти",
  To = () => "Botting",
  Oo = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? _o() : e === "pt" ? fo() : e === "ch" ? mo() : e === "de" ? po() : e === "es" ? ho() : e === "fr" ? go() : e === "it" ? wo() : e === "jp" ? yo() : e === "pl" ? vo() : e === "ru" ? bo() : e === "uk" ? Eo() : To()
  },
  So = () => "Use of software to completely automate painting",
  Io = () => "Uso de software para pintar de forma completamente automatizada ",
  Ao = () => "使用软件完全自动化绘制",
  ko = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  Ro = () => "Uso de software para automatizar completamente la pintura",
  No = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  xo = () => "Uso di software per dipingere in modo completamente automatizzato",
  Do = () => "ペイントを完全に自動化するソフトウェアの使用",
  Lo = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  Mo = () => "Использование программ для полной автоматизации рисования",
  Po = () => "Використання програм, які повністю автоматизують малювання",
  Uo = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  jo = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? So() : e === "pt" ? Io() : e === "ch" ? Ao() : e === "de" ? ko() : e === "es" ? Ro() : e === "fr" ? No() : e === "it" ? xo() : e === "jp" ? Do() : e === "pl" ? Lo() : e === "ru" ? Mo() : e === "uk" ? Po() : Uo()
  },
  Co = () => "Breaking the rules",
  Fo = () => "Quebrar as regras",
  Bo = () => "违反规则",
  zo = () => "Regeln brechen",
  Vo = () => "Romper las reglas",
  Go = () => "Violation des règles",
  Wo = () => "Violazione delle regole",
  qo = () => "ルール違反",
  Ko = () => "Łamanie zasad",
  Ho = () => "Нарушение правил",
  Yo = () => "Порушення правил",
  Zo = () => "Vi phạm luật",
  $o = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Co() : e === "pt" ? Fo() : e === "ch" ? Bo() : e === "de" ? zo() : e === "es" ? Vo() : e === "fr" ? Go() : e === "it" ? Wo() : e === "jp" ? qo() : e === "pl" ? Ko() : e === "ru" ? Ho() : e === "uk" ? Yo() : Zo()
  },
  Jo = () => "You have broken one of Wplace's rules",
  Xo = () => "Você quebrou uma das regras do Wplace",
  Qo = () => "你违反了 Wplace 的一项规则",
  es = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  ts = () => "Has infringido una de las reglas de Wplace",
  ns = () => "Vous avez enfreint l’une des règles de Wplace",
  rs = () => "Hai infranto una delle regole di Wplace",
  as = () => "Wplaceのルールのいずれかに違反しました。",
  is = () => "Złamałeś jedną z zasad Wplace",
  os = () => "Вы нарушили одно из правил Wplace",
  ss = () => "Ви порушили одне з правил Wplace",
  cs = () => "Bạn đã vi phạm một trong các luật của Wplace",
  us = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Jo() : e === "pt" ? Xo() : e === "ch" ? Qo() : e === "de" ? es() : e === "es" ? ts() : e === "fr" ? ns() : e === "it" ? rs() : e === "jp" ? as() : e === "pl" ? is() : e === "ru" ? os() : e === "uk" ? ss() : cs()
  },
  ls = () => "You cannot paint over event pixels",
  ds = () => "Você não pode pintar sobre pixels de eventos",
  _s = () => "你不能覆盖活动像素",
  fs = () => "Du kannst nicht über Event-Pixel malen",
  ms = () => "No puedes pintar sobre píxeles de evento",
  ps = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  hs = () => "Non puoi dipingere sopra i pixel dell'evento",
  gs = () => "イベント用のピクセルの上には塗れません。",
  ws = () => "Nie możesz malować po pikselach wydarzenia",
  ys = () => "Вы не можете рисовать по пикселям события",
  vs = () => "Ви не можете малювати поверх пікселів події",
  bs = () => "Bạn không thể tô lên pixel sự kiện",
  Kt = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? ls() : e === "pt" ? ds() : e === "ch" ? _s() : e === "de" ? fs() : e === "es" ? ms() : e === "fr" ? ps() : e === "it" ? hs() : e === "jp" ? gs() : e === "pl" ? ws() : e === "ru" ? ys() : e === "uk" ? vs() : bs()
  },
  Es = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Ts = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Os = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  Ss = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  Is = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  As = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  ks = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Rs = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Ns = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  xs = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  Ds = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Ls = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Ms = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Es() : e === "pt" ? Ts() : e === "ch" ? Os() : e === "de" ? Ss() : e === "es" ? Is() : e === "fr" ? As() : e === "it" ? ks() : e === "jp" ? Rs() : e === "pl" ? Ns() : e === "ru" ? xs() : e === "uk" ? Ds() : Ls()
  },
  Ps = () => "Challenge verification not completed",
  Us = () => "Verificação do desafio não concluída",
  js = () => "挑战验证未完成",
  Cs = () => "Herausforderungsverifizierung nicht abgeschlossen",
  Fs = () => "Verificación del desafío no completada",
  Bs = () => "Vérification du défi non terminée",
  zs = () => "Verifica della sfida non completata",
  Vs = () => "チャレンジ検証が完了していません",
  Gs = () => "Weryfikacja wyzwania niezakończona",
  Ws = () => "Верификация вызова не завершена",
  qs = () => "Перевірку виклику не завершено",
  Ks = () => "Xác minh thử thách chưa hoàn thành",
  Ht = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Ps() : e === "pt" ? Us() : e === "ch" ? js() : e === "de" ? Cs() : e === "es" ? Fs() : e === "fr" ? Bs() : e === "it" ? zs() : e === "jp" ? Vs() : e === "pl" ? Gs() : e === "ru" ? Ws() : e === "uk" ? qs() : Ks()
  },
  Hs = () => "Couldn't complete the purchase. This item does not exist.",
  Ys = () => "Não foi possível concluir a compra. Este item não existe.",
  Zs = () => "无法完成购买。该物品不存在。",
  $s = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  Js = () => "No se pudo completar la compra. Este ítem no existe.",
  Xs = () => "Achat impossible. Cet objet n’existe pas.",
  Qs = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  ec = () => "購入を完了できませんでした。このアイテムは存在しません。",
  tc = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  nc = () => "Не удалось завершить покупку. Этот предмет не существует.",
  rc = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  ac = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  Yt = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Hs() : e === "pt" ? Ys() : e === "ch" ? Zs() : e === "de" ? $s() : e === "es" ? Js() : e === "fr" ? Xs() : e === "it" ? Qs() : e === "jp" ? ec() : e === "pl" ? tc() : e === "ru" ? nc() : e === "uk" ? rc() : ac()
  },
  ic = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  oc = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  sc = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  cc = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  uc = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  lc = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  dc = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  _c = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  fc = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  mc = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  pc = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  hc = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  Zt = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? ic() : e === "pt" ? oc() : e === "ch" ? sc() : e === "de" ? cc() : e === "es" ? uc() : e === "fr" ? lc() : e === "it" ? dc() : e === "jp" ? _c() : e === "pl" ? fc() : e === "ru" ? mc() : e === "uk" ? pc() : hc()
  },
  gc = () => "Doxxing",
  wc = () => "Doxxing",
  yc = () => "人肉搜索",
  vc = () => "Doxxing",
  bc = () => "Doxxing",
  Ec = () => "Doxxing",
  Tc = () => "Doxxing",
  Oc = () => "ドックス（Doxxing）",
  Sc = () => "Doxxing",
  Ic = () => "Докcинг",
  Ac = () => "Докcинг",
  kc = () => "Doxxing",
  Rc = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? gc() : e === "pt" ? wc() : e === "ch" ? yc() : e === "de" ? vc() : e === "es" ? bc() : e === "fr" ? Ec() : e === "it" ? Tc() : e === "jp" ? Oc() : e === "pl" ? Sc() : e === "ru" ? Ic() : e === "uk" ? Ac() : kc()
  },
  Nc = () => "Released other's personal information without their consent",
  xc = () => "Vazar informações pessoais de terceiros sem consentimento",
  Dc = () => "在未获同意的情况下公开他人个人信息",
  Lc = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  Mc = () => "Divulgó información personal de otra persona sin su consentimiento",
  Pc = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  Uc = () => "Diffusione di informazioni personali di terzi senza consenso",
  jc = () => "他人の個人情報を同意なく公開した。",
  Cc = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  Fc = () => "Публикация личной информации других людей без их согласия",
  Bc = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  zc = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  Vc = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Nc() : e === "pt" ? xc() : e === "ch" ? Dc() : e === "de" ? Lc() : e === "es" ? Mc() : e === "fr" ? Pc() : e === "it" ? Uc() : e === "jp" ? jc() : e === "pl" ? Cc() : e === "ru" ? Fc() : e === "uk" ? Bc() : zc()
  },
  Gc = () => "This email is already in use.",
  Wc = () => "Este e-mail já está em uso.",
  qc = () => "This email is already in use.",
  Kc = () => "This email is already in use.",
  Hc = () => "Este correo electrónico ya está en uso.",
  Yc = () => "This email is already in use.",
  Zc = () => "Questa email è già in uso.",
  $c = () => "This email is already in use.",
  Jc = () => "This email is already in use.",
  Xc = () => "This email is already in use.",
  Qc = () => "This email is already in use.",
  eu = () => "This email is already in use.",
  tu = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Gc() : e === "pt" ? Wc() : e === "ch" ? qc() : e === "de" ? Kc() : e === "es" ? Hc() : e === "fr" ? Yc() : e === "it" ? Zc() : e === "jp" ? $c() : e === "pl" ? Jc() : e === "ru" ? Xc() : e === "uk" ? Qc() : eu()
  },
  nu = t => `This email is already in use by user #${t.userId}.`,
  ru = t => `Este e-mail já está em uso pelo usuário #${t.userId}.`,
  au = t => `This email is already in use by user #${t.userId}.`,
  iu = t => `This email is already in use by user #${t.userId}.`,
  ou = t => `Este correo electrónico ya está en uso por el usuario #${t.userId}.`,
  su = t => `This email is already in use by user #${t.userId}.`,
  cu = t => `Questa email è già in uso dall'utente #${t.userId}.`,
  uu = t => `This email is already in use by user #${t.userId}.`,
  lu = t => `This email is already in use by user #${t.userId}.`,
  du = t => `This email is already in use by user #${t.userId}.`,
  _u = t => `This email is already in use by user #${t.userId}.`,
  fu = t => `This email is already in use by user #${t.userId}.`,
  mu = (t, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? nu(t) : e === "pt" ? ru(t) : e === "ch" ? au(t) : e === "de" ? iu(t) : e === "es" ? ou(t) : e === "fr" ? su(t) : e === "it" ? cu(t) : e === "jp" ? uu(t) : e === "pl" ? lu(t) : e === "ru" ? du(t) : e === "uk" ? _u(t) : fu(t)
  },
  pu = () => "Enter a valid email address.",
  hu = () => "Informe um endereço de e-mail válido.",
  gu = () => "Enter a valid email address.",
  wu = () => "Enter a valid email address.",
  yu = () => "Introduce una dirección de correo electrónico válida.",
  vu = () => "Enter a valid email address.",
  bu = () => "Inserisci un indirizzo email valido.",
  Eu = () => "Enter a valid email address.",
  Tu = () => "Enter a valid email address.",
  Ou = () => "Enter a valid email address.",
  Su = () => "Enter a valid email address.",
  Iu = () => "Enter a valid email address.",
  Au = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? pu() : e === "pt" ? hu() : e === "ch" ? gu() : e === "de" ? wu() : e === "es" ? yu() : e === "fr" ? vu() : e === "it" ? bu() : e === "jp" ? Eu() : e === "pl" ? Tu() : e === "ru" ? Ou() : e === "uk" ? Su() : Iu()
  },
  ku = t => `Error while painting: ${t.err}`,
  Ru = t => `Erro enquanto pinta: ${t.err}`,
  Nu = t => `绘制时出错：${t.err}`,
  xu = t => `Fehler beim Malen: ${t.err}`,
  Du = t => `Error al pintar: ${t.err}`,
  Lu = t => `Erreur lors de la peinture : ${t.err}`,
  Mu = t => `Errore durante la pittura: ${t.err}`,
  Pu = t => `ペイント中にエラーが発生しました: ${t.err}`,
  Uu = t => `Błąd podczas malowania: ${t.err}`,
  ju = t => `Ошибка при рисовании: ${t.err}`,
  Cu = t => `Помилка під час малювання: ${t.err}`,
  Fu = t => `Lỗi khi tô: ${t.err}`,
  Bu = (t, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? ku(t) : e === "pt" ? Ru(t) : e === "ch" ? Nu(t) : e === "de" ? xu(t) : e === "es" ? Du(t) : e === "fr" ? Lu(t) : e === "it" ? Mu(t) : e === "jp" ? Pu(t) : e === "pl" ? Uu(t) : e === "ru" ? ju(t) : e === "uk" ? Cu(t) : Fu(t)
  },
  zu = () => "Exceeded maximum number of characters",
  Vu = () => "Excedeu o número máximo de caracteres permitidos",
  Gu = () => "超出最大字符数",
  Wu = () => "Maximale Zeichenanzahl überschritten",
  qu = () => "Se excedió el número máximo de caracteres",
  Ku = () => "Nombre maximal de caractères dépassé",
  Hu = () => "Numero massimo di caratteri superato",
  Yu = () => "最大文字数を超過しました",
  Zu = () => "Przekroczono maksymalną liczbę znaków",
  $u = () => "Превышено максимальное количество символов",
  Ju = () => "Перевищено максимальну кількість символів",
  Xu = () => "Đã vượt quá số ký tự tối đa",
  Qu = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? zu() : e === "pt" ? Vu() : e === "ch" ? Gu() : e === "de" ? Wu() : e === "es" ? qu() : e === "fr" ? Ku() : e === "it" ? Hu() : e === "jp" ? Yu() : e === "pl" ? Zu() : e === "ru" ? $u() : e === "uk" ? Ju() : Xu()
  },
  el = () => "Verification code expired. Please request a new one.",
  tl = () => "Código de verificação expirado. Por favor, solicite um novo.",
  nl = () => "验证码已过期，请重新获取。",
  rl = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  al = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  il = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  ol = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  sl = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  cl = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  ul = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  ll = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  dl = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  _l = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? el() : e === "pt" ? tl() : e === "ch" ? nl() : e === "de" ? rl() : e === "es" ? al() : e === "fr" ? il() : e === "it" ? ol() : e === "jp" ? sl() : e === "pl" ? cl() : e === "ru" ? ul() : e === "uk" ? ll() : dl()
  },
  fl = () => "Griefing",
  ml = () => "Griefing",
  pl = () => "破坏行为",
  hl = () => "Griefing",
  gl = () => "Griefing",
  wl = () => "Griefing",
  yl = () => "Griefing",
  vl = () => "グリーフィング",
  bl = () => "Griefing",
  El = () => "Гриферство",
  Tl = () => "Гріфінг",
  Ol = () => "Griefing",
  Sl = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? fl() : e === "pt" ? ml() : e === "ch" ? pl() : e === "de" ? hl() : e === "es" ? gl() : e === "fr" ? wl() : e === "it" ? yl() : e === "jp" ? vl() : e === "pl" ? bl() : e === "ru" ? El() : e === "uk" ? Tl() : Ol()
  },
  Il = () => "Messed up with other's artworks",
  Al = () => "Estragou os desenhos dos outros",
  kl = () => "破坏了他人的作品",
  Rl = () => "Kunstwerke anderer beschädigt",
  Nl = () => "Arruinó las obras de arte de otros",
  xl = () => "A abîmé les œuvres des autres",
  Dl = () => "Ha rovinato i disegni degli altri",
  Ll = () => "他人の作品を荒らした",
  Ml = () => "Zniszczył prace innych",
  Pl = () => "Испортил чужие рисунки",
  Ul = () => "Зіпсував роботи інших",
  jl = () => "Phá hỏng tranh của người khác",
  Cl = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Il() : e === "pt" ? Al() : e === "ch" ? kl() : e === "de" ? Rl() : e === "es" ? Nl() : e === "fr" ? xl() : e === "it" ? Dl() : e === "jp" ? Ll() : e === "pl" ? Ml() : e === "ru" ? Pl() : e === "uk" ? Ul() : jl()
  },
  Fl = () => "Hate speech",
  Bl = () => "Discurso de Ódio",
  zl = () => "仇恨言论",
  Vl = () => "Hassrede",
  Gl = () => "Discurso de odio",
  Wl = () => "Discours haineux",
  ql = () => "Discorso d'odio",
  Kl = () => "ヘイトスピーチ",
  Hl = () => "Mowa nienawiści",
  Yl = () => "Речь ненависти",
  Zl = () => "Мова ворожнечі",
  $l = () => "Ngôn từ thù hằn",
  Jl = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Fl() : e === "pt" ? Bl() : e === "ch" ? zl() : e === "de" ? Vl() : e === "es" ? Gl() : e === "fr" ? Wl() : e === "it" ? ql() : e === "jp" ? Kl() : e === "pl" ? Hl() : e === "ru" ? Yl() : e === "uk" ? Zl() : $l()
  },
  Xl = () => "Racism, homophobia, hate groups, ...",
  Ql = () => "Racismo, homofobia, grupos de ódio, ...",
  ed = () => "种族主义、恐同、仇恨团体等",
  td = () => "Rassismus, Homophobie, Hassgruppen, ...",
  nd = () => "Racismo, homofobia, grupos de odio, ...",
  rd = () => "Racisme, homophobie, groupes haineux, ...",
  ad = () => "Razzismo, omofobia, gruppi d'odio, ...",
  id = () => "人種差別、同性愛差別、ヘイト団体など。",
  od = () => "Rasizm, homofobia, grupy nienawiści, ...",
  sd = () => "Расизм, гомофобия, группы ненависти и т.п.",
  cd = () => "Расизм, гомофобія, групи ненависті, ...",
  ud = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  ld = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Xl() : e === "pt" ? Ql() : e === "ch" ? ed() : e === "de" ? td() : e === "es" ? nd() : e === "fr" ? rd() : e === "it" ? ad() : e === "jp" ? id() : e === "pl" ? od() : e === "ru" ? sd() : e === "uk" ? cd() : ud()
  },
  dd = () => "Inappropriate content",
  _d = () => "Conteúdo inapropriado",
  fd = () => "不当内容",
  md = () => "Unangemessene Inhalte",
  pd = () => "Contenido inapropiado",
  hd = () => "Contenu inapproprié",
  gd = () => "Contenuto inappropriato",
  wd = () => "不適切なコンテンツ",
  yd = () => "Nieodpowiednie treści",
  vd = () => "Неприемлемый контент",
  bd = () => "Неприйнятний вміст",
  Ed = () => "Nội dung không phù hợp",
  Td = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? dd() : e === "pt" ? _d() : e === "ch" ? fd() : e === "de" ? md() : e === "es" ? pd() : e === "fr" ? hd() : e === "it" ? gd() : e === "jp" ? wd() : e === "pl" ? yd() : e === "ru" ? vd() : e === "uk" ? bd() : Ed()
  },
  Od = () => "+18, inappropriate link, highly suggestive content, ...",
  Sd = () => "+18, links inapropriados, conteúdo altamente sugestivo, ...",
  Id = () => "+18、违规链接、高度暗示性内容等",
  Ad = () => "+18, unangemessene Links, stark anzügliche Inhalte, ...",
  kd = () => "+18, enlace inapropiado, contenido muy sugerente, ...",
  Rd = () => "+18, lien inapproprié, contenu très suggestif, ...",
  Nd = () => "+18, link inappropriati, contenuto altamente esplicito, ...",
  xd = () => "18禁コンテンツ、不適切なリンク、過度に性的な内容など。",
  Dd = () => "+18, nieodpowiedni link, mocno sugestywne treści, ...",
  Ld = () => "+18, неприемлемые ссылки, крайне откровенный контент и т.п.",
  Md = () => "+18, неприйнятні посилання, дуже відвертий контент, ...",
  Pd = () => "+18, liên kết không phù hợp, nội dung khiêu gợi mạnh, ...",
  Ud = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Od() : e === "pt" ? Sd() : e === "ch" ? Id() : e === "de" ? Ad() : e === "es" ? kd() : e === "fr" ? Rd() : e === "it" ? Nd() : e === "jp" ? xd() : e === "pl" ? Dd() : e === "ru" ? Ld() : e === "uk" ? Md() : Pd()
  },
  jd = () => "Invalid captcha",
  Cd = () => "Captcha inválido",
  Fd = () => "验证码无效",
  Bd = () => "Ungültiges Captcha",
  zd = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  Vd = () => "Captcha invalide",
  Gd = () => "Captcha non valido. Riprova.",
  Wd = () => "キャプチャが無効です。",
  qd = () => "Nieprawidłowy captcha",
  Kd = () => "Неверная капча",
  Hd = () => "Неправильна капча",
  Yd = () => "Captcha không hợp lệ",
  Zd = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? jd() : e === "pt" ? Cd() : e === "ch" ? Fd() : e === "de" ? Bd() : e === "es" ? zd() : e === "fr" ? Vd() : e === "it" ? Gd() : e === "jp" ? Wd() : e === "pl" ? qd() : e === "ru" ? Kd() : e === "uk" ? Hd() : Yd()
  },
  $d = () => "Invalid challenge response",
  Jd = () => "Resposta de desafio inválida",
  Xd = () => "质询响应无效",
  Qd = () => "Ungültige Challenge-Antwort",
  e_ = () => "Respuesta de desafío inválida",
  t_ = () => "Réponse au défi invalide",
  n_ = () => "Risposta alla sfida non valida",
  r_ = () => "無効なチャレンジ応答",
  a_ = () => "Nieprawidłowa odpowiedź na wyzwanie",
  i_ = () => "Неверный ответ на вызов",
  o_ = () => "Недійсна відповідь на виклик",
  s_ = () => "Phản hồi thử thách không hợp lệ",
  c_ = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? $d() : e === "pt" ? Jd() : e === "ch" ? Xd() : e === "de" ? Qd() : e === "es" ? e_() : e === "fr" ? t_() : e === "it" ? n_() : e === "jp" ? r_() : e === "pl" ? a_() : e === "ru" ? i_() : e === "uk" ? o_() : s_()
  },
  u_ = () => "Invalid code",
  l_ = () => "Código inválido",
  d_ = () => "验证码无效",
  __ = () => "Ungültiger Code",
  f_ = () => "Código inválido",
  m_ = () => "Code invalide",
  p_ = () => "Codice non valido",
  h_ = () => "無効なコードです。",
  g_ = () => "Nieprawidłowy kod",
  w_ = () => "Неверный код",
  y_ = () => "Невірний код",
  v_ = () => "Mã không hợp lệ",
  b_ = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? u_() : e === "pt" ? l_() : e === "ch" ? d_() : e === "de" ? __() : e === "es" ? f_() : e === "fr" ? m_() : e === "it" ? p_() : e === "jp" ? h_() : e === "pl" ? g_() : e === "ru" ? w_() : e === "uk" ? y_() : v_()
  },
  E_ = () => "Invalid discord.",
  T_ = () => "Discord inválido.",
  O_ = () => "无效的 Discord。",
  S_ = () => "Ungültiger Discord.",
  I_ = () => "Discord inválido.",
  A_ = () => "Discord invalide.",
  k_ = () => "Discord non valido.",
  R_ = () => "無効なDiscordアカウントです。",
  N_ = () => "Nieprawidłowy Discord.",
  x_ = () => "Неверный Discord.",
  D_ = () => "Некоректний Discord.",
  L_ = () => "Discord không hợp lệ.",
  M_ = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? E_() : e === "pt" ? T_() : e === "ch" ? O_() : e === "de" ? S_() : e === "es" ? I_() : e === "fr" ? A_() : e === "it" ? k_() : e === "jp" ? R_() : e === "pl" ? N_() : e === "ru" ? x_() : e === "uk" ? D_() : L_()
  },
  P_ = () => "The name contains disallowed characters or words. Please choose a different name.",
  U_ = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  j_ = () => "名称包含禁止的字符或词语，请选择其他名称。",
  C_ = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  F_ = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  B_ = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  z_ = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  V_ = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  G_ = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  W_ = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  q_ = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  K_ = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  $t = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? P_() : e === "pt" ? U_() : e === "ch" ? j_() : e === "de" ? C_() : e === "es" ? F_() : e === "fr" ? B_() : e === "it" ? z_() : e === "jp" ? V_() : e === "pl" ? G_() : e === "ru" ? W_() : e === "uk" ? q_() : K_()
  },
  H_ = () => "Invalid phone number",
  Y_ = () => "Número de telefone inválido",
  Z_ = () => "无效的电话号码",
  $_ = () => "Ungültige Telefonnummer",
  J_ = () => "Número de teléfono inválido",
  X_ = () => "Numéro de téléphone invalide",
  Q_ = () => "Numero di telefono non valido",
  ef = () => "無効な電話番号です。",
  tf = () => "Nieprawidłowy numer telefonu",
  nf = () => "Неверный номер телефона",
  rf = () => "Некоректний номер телефону",
  af = () => "Số điện thoại không hợp lệ",
  of = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? H_() : e === "pt" ? Y_() : e === "ch" ? Z_() : e === "de" ? $_() : e === "es" ? J_() : e === "fr" ? X_() : e === "it" ? Q_() : e === "jp" ? ef() : e === "pl" ? tf() : e === "ru" ? nf() : e === "uk" ? rf() : af()
  },
  sf = () => "This phone number appears to be a landline. Please use a mobile number that can receive SMS.",
  cf = () => "Este número de telefone parece ser fixo. Por favor, use um número de celular que possa receber SMS.",
  uf = () => "此电话号码似乎是固定电话。请使用可以接收短信的手机号码。",
  lf = () => "Diese Telefonnummer scheint ein Festnetzanschluss zu sein. Bitte verwende eine Mobilnummer, die SMS empfangen kann.",
  df = () => "Este número de teléfono parece ser fijo. Por favor, usa un número de celular que pueda recibir SMS.",
  _f = () => "Ce numéro de téléphone semble être un fixe. Veuillez utiliser un numéro de mobile pouvant recevoir des SMS.",
  ff = () => "Questo numero di telefono sembra essere un fisso. Utilizza un numero di cellulare che possa ricevere SMS.",
  mf = () => "この電話番号は固定電話のようです。SMSを受信できる携帯電話番号をご使用ください。",
  pf = () => "Ten numer telefonu wydaje się być stacjonarny. Użyj numeru komórkowego, który może odbierać SMS-y.",
  hf = () => "Этот номер телефона является стационарным. Пожалуйста, используйте мобильный номер, который может принимать SMS.",
  gf = () => "Цей номер телефону є стаціонарним. Будь ласка, використовуйте мобільний номер, який може отримувати SMS.",
  wf = () => "Số điện thoại này có vẻ là số cố định. Vui lòng sử dụng số di động có thể nhận SMS.",
  yf = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? sf() : e === "pt" ? cf() : e === "ch" ? uf() : e === "de" ? lf() : e === "es" ? df() : e === "fr" ? _f() : e === "it" ? ff() : e === "jp" ? mf() : e === "pl" ? pf() : e === "ru" ? hf() : e === "uk" ? gf() : wf()
  },
  vf = () => "The new leader must be a member of the alliance",
  bf = () => "O novo líder deve ser um membro da aliança",
  Ef = () => "新盟主必须是联盟成员",
  Tf = () => "Der neue Anführer muss Mitglied der Allianz sein",
  Of = () => "El nuevo líder debe ser miembro de la alianza",
  Sf = () => "Le nouveau chef doit être membre de l’alliance",
  If = () => "Il nuovo leader deve essere un membro dell'alleanza",
  Af = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  kf = () => "Nowy lider musi być członkiem sojuszu",
  Rf = () => "Новый лидер должен быть участником альянса",
  Nf = () => "Новий лідер має бути учасником альянсу",
  xf = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Df = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? vf() : e === "pt" ? bf() : e === "ch" ? Ef() : e === "de" ? Tf() : e === "es" ? Of() : e === "fr" ? Sf() : e === "it" ? If() : e === "jp" ? Af() : e === "pl" ? kf() : e === "ru" ? Rf() : e === "uk" ? Nf() : xf()
  },
  Lf = () => "Leaderboard is temporarily disabled",
  Mf = () => "O ranking está temporariamente desativado",
  Pf = () => "排行榜已暂时停用",
  Uf = () => "Die Bestenliste ist vorübergehend deaktiviert",
  jf = () => "La clasificación está deshabilitada temporalmente",
  Cf = () => "Le classement est temporairement désactivé",
  Ff = () => "La classifica è temporaneamente disattivata",
  Bf = () => "ランキングは一時的に無効になっています。",
  zf = () => "Ranking jest tymczasowo wyłączony",
  Vf = () => "Таблица лидеров временно отключена",
  Gf = () => "Таблиця лідерів тимчасово вимкнена",
  Wf = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  se = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Lf() : e === "pt" ? Mf() : e === "ch" ? Pf() : e === "de" ? Uf() : e === "es" ? jf() : e === "fr" ? Cf() : e === "it" ? Ff() : e === "jp" ? Bf() : e === "pl" ? zf() : e === "ru" ? Vf() : e === "uk" ? Gf() : Wf()
  },
  qf = () => "Location name is too big (max. 128 characters)",
  Kf = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Hf = () => "位置名称过长（最大 128 个字符）",
  Yf = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Zf = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  $f = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Jf = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Xf = () => "場所の名前が長すぎます（最大128文字）。",
  Qf = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  em = () => "Название локации слишком длинное (макс. 128 символов)",
  tm = () => "Назва локації надто довга (макс. 128 символів)",
  nm = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  rm = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? qf() : e === "pt" ? Kf() : e === "ch" ? Hf() : e === "de" ? Yf() : e === "es" ? Zf() : e === "fr" ? $f() : e === "it" ? Jf() : e === "jp" ? Xf() : e === "pl" ? Qf() : e === "ru" ? em() : e === "uk" ? tm() : nm()
  },
  am = () => "Multi-accounting",
  im = () => "Múltiplas contas",
  om = () => "多账号",
  sm = () => "Multi-Accounting",
  cm = () => "Multi-cuentas",
  um = () => "Multi-comptes",
  lm = () => "Multi-account",
  dm = () => "複数アカウント使用",
  _m = () => "Multi-konta",
  fm = () => "Мультиаккаунт",
  mm = () => "Мультиакаунтинг",
  pm = () => "Nhiều tài khoản",
  hm = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? am() : e === "pt" ? im() : e === "ch" ? om() : e === "de" ? sm() : e === "es" ? cm() : e === "fr" ? um() : e === "it" ? lm() : e === "jp" ? dm() : e === "pl" ? _m() : e === "ru" ? fm() : e === "uk" ? mm() : pm()
  },
  gm = () => "Use more than one account to paint pixels",
  wm = () => "Usar mais de uma conta para pintar",
  ym = () => "使用多个账号绘制像素",
  vm = () => "Mehr als ein Konto zum Malen verwenden",
  bm = () => "Uso de más de una cuenta para pintar píxeles",
  Em = () => "Utiliser plus d’un compte pour peindre",
  Tm = () => "Usare più di un account per dipingere",
  Om = () => "複数のアカウントを使ってピクセルを塗った。",
  Sm = () => "Używanie więcej niż jednego konta do malowania pikseli",
  Im = () => "Использование более одного аккаунта для рисования",
  Am = () => "Використання більше ніж одного акаунта для малювання",
  km = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  Rm = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? gm() : e === "pt" ? wm() : e === "ch" ? ym() : e === "de" ? vm() : e === "es" ? bm() : e === "fr" ? Em() : e === "it" ? Tm() : e === "jp" ? Om() : e === "pl" ? Sm() : e === "ru" ? Im() : e === "uk" ? Am() : km()
  },
  Nm = t => `You can change your name again in ${t.days} days`,
  xm = t => `Você pode alterar seu nome novamente em ${t.days} dias.`,
  Dm = t => `你可以在 ${t.days} 天后再次修改名称`,
  Lm = t => `Du kannst deinen Namen in ${t.days} Tagen erneut ändern`,
  Mm = t => `Podrás cambiar tu nombre de nuevo en ${t.days} días`,
  Pm = t => `Vous pourrez changer votre nom à nouveau dans ${t.days} jours`,
  Um = t => `Potrai cambiare di nuovo il tuo nome tra ${t.days} giorni.`,
  jm = t => `${t.days}日後に再び名前を変更できます。`,
  Cm = t => `Następną zmianę nazwy możesz wykonać za ${t.days} dni`,
  Fm = t => `Вы сможете изменить имя снова через ${t.days} дн.`,
  Bm = t => `Ви зможете змінити імʼя знову через ${t.days} днів`,
  zm = t => `Bạn có thể đổi tên lại sau ${t.days} ngày`,
  Vm = (t, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Nm(t) : e === "pt" ? xm(t) : e === "ch" ? Dm(t) : e === "de" ? Lm(t) : e === "es" ? Mm(t) : e === "fr" ? Pm(t) : e === "it" ? Um(t) : e === "jp" ? jm(t) : e === "pl" ? Cm(t) : e === "ru" ? Fm(t) : e === "uk" ? Bm(t) : zm(t)
  },
  Gm = () => "No internet access or the servers are offline. Try again later.",
  Wm = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  qm = () => "没有网络连接或服务器已离线。请稍后重试。",
  Km = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Hm = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Ym = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Zm = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  $m = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Jm = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Xm = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Qm = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  ep = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  tp = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Gm() : e === "pt" ? Wm() : e === "ch" ? qm() : e === "de" ? Km() : e === "es" ? Hm() : e === "fr" ? Ym() : e === "it" ? Zm() : e === "jp" ? $m() : e === "pl" ? Jm() : e === "ru" ? Xm() : e === "uk" ? Qm() : ep()
  },
  np = () => "You are not allowed to verify a phone number. Try refreshing the page",
  rp = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  ap = () => "您无权验证电话号码。请尝试刷新页面。",
  ip = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  op = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  sp = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  cp = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  up = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  lp = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  dp = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  _p = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  fp = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  mp = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? np() : e === "pt" ? rp() : e === "ch" ? ap() : e === "de" ? ip() : e === "es" ? op() : e === "fr" ? sp() : e === "it" ? cp() : e === "jp" ? up() : e === "pl" ? lp() : e === "ru" ? dp() : e === "uk" ? _p() : fp()
  },
  pp = () => "Operation not allowed. Maybe you have too many favorite locations.",
  hp = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  gp = () => "操作不被允许。你的收藏位置可能过多。",
  wp = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  yp = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  vp = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  bp = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  Ep = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  Tp = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  Op = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  Sp = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  Ip = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  Ap = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? pp() : e === "pt" ? hp() : e === "ch" ? gp() : e === "de" ? wp() : e === "es" ? yp() : e === "fr" ? vp() : e === "it" ? bp() : e === "jp" ? Ep() : e === "pl" ? Tp() : e === "ru" ? Op() : e === "uk" ? Sp() : Ip()
  },
  kp = () => "You are trying to paint with a color you do not own",
  Rp = () => "Você está tentando pintar com uma cor que não possui",
  Np = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  xp = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  Dp = () => "Estás intentando pintar con un color que no posees",
  Lp = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  Mp = () => "Stai cercando di dipingere con un colore che non possiedi",
  Pp = () => "所持していない色で塗ろうとしています。",
  Up = () => "Próbujesz malować kolorem, którego nie posiadasz",
  jp = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  Cp = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  Fp = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  Jt = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? kp() : e === "pt" ? Rp() : e === "ch" ? Np() : e === "de" ? xp() : e === "es" ? Dp() : e === "fr" ? Lp() : e === "it" ? Mp() : e === "jp" ? Pp() : e === "pl" ? Up() : e === "ru" ? jp() : e === "uk" ? Cp() : Fp()
  },
  Bp = () => "Phone already used",
  zp = () => "Telefone já usado",
  Vp = () => "电话号码已被使用",
  Gp = () => "Telefonnummer bereits verwendet",
  Wp = () => "Teléfono ya utilizado",
  qp = () => "Téléphone déjà utilisé",
  Kp = () => "Telefono già utilizzato",
  Hp = () => "この電話番号は既に使用されています。",
  Yp = () => "Numer telefonu jest już używany",
  Zp = () => "Телефон уже используется",
  $p = () => "Номер телефону вже використовується",
  Jp = () => "Số điện thoại đã được sử dụng",
  Xp = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Bp() : e === "pt" ? zp() : e === "ch" ? Vp() : e === "de" ? Gp() : e === "es" ? Wp() : e === "fr" ? qp() : e === "it" ? Kp() : e === "jp" ? Hp() : e === "pl" ? Yp() : e === "ru" ? Zp() : e === "uk" ? $p() : Jp()
  },
  Qp = () => "This phone number's region is not supported",
  eh = () => "A região deste número de telefone não é suportada",
  th = () => "此电话号码的地区不受支持",
  nh = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  rh = () => "La región de este número de teléfono no es compatible",
  ah = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  ih = () => "La regione di questo numero di telefono non è supportata",
  oh = () => "この電話番号の地域はサポートされていません",
  sh = () => "Region tego numeru telefonu nie jest obsługiwany",
  ch = () => "Регион этого номера телефона не поддерживается",
  uh = () => "Регіон цього номера телефону не підтримується",
  lh = () => "Vùng của số điện thoại này không được hỗ trợ",
  dh = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Qp() : e === "pt" ? eh() : e === "ch" ? th() : e === "de" ? nh() : e === "es" ? rh() : e === "fr" ? ah() : e === "it" ? ih() : e === "jp" ? oh() : e === "pl" ? sh() : e === "ru" ? ch() : e === "uk" ? uh() : lh()
  },
  _h = () => "Refresh your page to get the latest update",
  fh = () => "Recarregue sua página para obter as últimas atualizações",
  mh = () => "刷新页面以获取最新更新",
  ph = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  hh = () => "Actualiza la página para obtener la última versión",
  gh = () => "Actualisez la page pour obtenir les dernières mises à jour",
  wh = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  yh = () => "最新の状態にするにはページを再読み込みしてください。",
  vh = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  bh = () => "Обновите страницу, чтобы получить последние изменения",
  Eh = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Th = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  Xt = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? _h() : e === "pt" ? fh() : e === "ch" ? mh() : e === "de" ? ph() : e === "es" ? hh() : e === "fr" ? gh() : e === "it" ? wh() : e === "jp" ? yh() : e === "pl" ? vh() : e === "ru" ? bh() : e === "uk" ? Eh() : Th()
  },
  Oh = () => "The request timed out. Please try again.",
  Sh = () => "A solicitação expirou. Por favor, tente novamente.",
  Ih = () => "请求超时。请重试。",
  Ah = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  kh = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  Rh = () => "La requête a expiré. Veuillez réessayer.",
  Nh = () => "La richiesta è scaduta. Riprova.",
  xh = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  Dh = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  Lh = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  Mh = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  Ph = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  Uh = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Oh() : e === "pt" ? Sh() : e === "ch" ? Ih() : e === "de" ? Ah() : e === "es" ? kh() : e === "fr" ? Rh() : e === "it" ? Nh() : e === "jp" ? xh() : e === "pl" ? Dh() : e === "ru" ? Lh() : e === "uk" ? Mh() : Ph()
  },
  jh = () => "The service is currently unavailable. Please try again later.",
  Ch = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  Fh = () => "服务当前不可用。请稍后再试。",
  Bh = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  zh = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  Vh = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  Gh = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  Wh = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  qh = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  Kh = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  Hh = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  Yh = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  Zh = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? jh() : e === "pt" ? Ch() : e === "ch" ? Fh() : e === "de" ? Bh() : e === "es" ? zh() : e === "fr" ? Vh() : e === "it" ? Gh() : e === "jp" ? Wh() : e === "pl" ? qh() : e === "ru" ? Kh() : e === "uk" ? Hh() : Yh()
  },
  $h = () => "Too many attempts. Please try again later",
  Jh = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  Xh = () => "尝试次数过多，请稍后再试",
  Qh = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  eg = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  tg = () => "Trop de tentatives. Veuillez réessayer plus tard",
  ng = () => "Troppi tentativi. Riprova più tardi.",
  rg = () => "試行回数が多すぎます。後で再度お試しください。",
  ag = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  ig = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  og = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  sg = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  Qt = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? $h() : e === "pt" ? Jh() : e === "ch" ? Xh() : e === "de" ? Qh() : e === "es" ? eg() : e === "fr" ? tg() : e === "it" ? ng() : e === "jp" ? rg() : e === "pl" ? ag() : e === "ru" ? ig() : e === "uk" ? og() : sg()
  },
  cg = () => "The typed username does not match your current username.",
  ug = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  lg = () => "输入的用户名与当前用户名不匹配。",
  dg = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  _g = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  fg = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  mg = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  pg = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  hg = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  gg = () => "Введённое имя пользователя не совпадает с текущим.",
  wg = () => "Введене імʼя користувача не збігається з поточним.",
  yg = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  vg = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? cg() : e === "pt" ? ug() : e === "ch" ? lg() : e === "de" ? dg() : e === "es" ? _g() : e === "fr" ? fg() : e === "it" ? mg() : e === "jp" ? pg() : e === "pl" ? hg() : e === "ru" ? gg() : e === "uk" ? wg() : yg()
  },
  bg = () => "Unexpected server error. Try again later.",
  Eg = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  Tg = () => "服务器出现意外错误。请稍后再试。",
  Og = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  Sg = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Ig = () => "Erreur serveur inattendue. Réessayez plus tard.",
  Ag = () => "Errore imprevisto del server. Riprova più tardi.",
  kg = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  Rg = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  Ng = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  xg = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  Dg = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  f = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? bg() : e === "pt" ? Eg() : e === "ch" ? Tg() : e === "de" ? Og() : e === "es" ? Sg() : e === "fr" ? Ig() : e === "it" ? Ag() : e === "jp" ? kg() : e === "pl" ? Rg() : e === "ru" ? Ng() : e === "uk" ? xg() : Dg()
  },
  Lg = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  Mg = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  Pg = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  Ug = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  jg = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  Cg = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  Fg = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  Bg = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  zg = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  Vg = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  Gg = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  Wg = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  qg = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Lg() : e === "pt" ? Mg() : e === "ch" ? Pg() : e === "de" ? Ug() : e === "es" ? jg() : e === "fr" ? Cg() : e === "it" ? Fg() : e === "jp" ? Bg() : e === "pl" ? zg() : e === "ru" ? Vg() : e === "uk" ? Gg() : Wg()
  },
  Kg = () => "Failed to load WebAssembly module. Try to use another browser.",
  Hg = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  Yg = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  Zg = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  $g = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  Jg = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  Xg = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  Qg = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  ew = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  tw = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  nw = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  rw = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  aw = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Kg() : e === "pt" ? Hg() : e === "ch" ? Yg() : e === "de" ? Zg() : e === "es" ? $g() : e === "fr" ? Jg() : e === "it" ? Xg() : e === "jp" ? Qg() : e === "pl" ? ew() : e === "ru" ? tw() : e === "uk" ? nw() : rw()
  },
  iw = () => "You already have this item. Please refresh the page.",
  ow = () => "Você já possui este item. Atualize a página.",
  sw = () => "你已经拥有此物品。请刷新页面。",
  cw = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  uw = () => "Ya tienes este ítem. Actualiza la página.",
  lw = () => "Vous possédez déjà cet objet. Actualisez la page.",
  dw = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  _w = () => "このアイテムはすでに所持しています。ページを更新してください。",
  fw = () => "Masz już ten przedmiot. Odśwież stronę.",
  mw = () => "У вас уже есть этот предмет. Обновите страницу.",
  pw = () => "У вас уже є цей предмет. Оновіть сторінку.",
  hw = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  en = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? iw() : e === "pt" ? ow() : e === "ch" ? sw() : e === "de" ? cw() : e === "es" ? uw() : e === "fr" ? lw() : e === "it" ? dw() : e === "jp" ? _w() : e === "pl" ? fw() : e === "ru" ? mw() : e === "uk" ? pw() : hw()
  },
  gw = () => "You are already in an alliance",
  ww = () => "Você já está em uma aliança",
  yw = () => "你已经在一个联盟中",
  vw = () => "Du bist bereits in einer Allianz",
  bw = () => "Ya estás en una alianza",
  Ew = () => "Vous êtes déjà dans une alliance",
  Tw = () => "Sei già in un'alleanza",
  Ow = () => "すでにアライアンスに所属しています。",
  Sw = () => "Jesteś już w sojuszu",
  Iw = () => "Вы уже состоите в альянсе",
  Aw = () => "Ви вже перебуваєте в альянсі",
  kw = () => "Bạn đã ở trong một liên minh",
  Rw = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? gw() : e === "pt" ? ww() : e === "ch" ? yw() : e === "de" ? vw() : e === "es" ? bw() : e === "fr" ? Ew() : e === "it" ? Tw() : e === "jp" ? Ow() : e === "pl" ? Sw() : e === "ru" ? Iw() : e === "uk" ? Aw() : kw()
  },
  Nw = () => "You are not allowed to do this",
  xw = () => "Você não tem permissão para fazer isso",
  Dw = () => "你无权执行此操作",
  Lw = () => "Du bist dazu nicht berechtigt",
  Mw = () => "No tienes permiso para hacer esto",
  Pw = () => "Vous n’êtes pas autorisé à faire cela",
  Uw = () => "Non hai il permesso di farlo",
  jw = () => "この操作を行う権限がありません。",
  Cw = () => "Nie masz uprawnień, aby to zrobić",
  Fw = () => "У вас нет прав для этого действия",
  Bw = () => "Ви не маєте права це робити",
  zw = () => "Bạn không có quyền làm việc này",
  ce = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Nw() : e === "pt" ? xw() : e === "ch" ? Dw() : e === "de" ? Lw() : e === "es" ? Mw() : e === "fr" ? Pw() : e === "it" ? Uw() : e === "jp" ? jw() : e === "pl" ? Cw() : e === "ru" ? Fw() : e === "uk" ? Bw() : zw()
  },
  Vw = () => "You do not have enough Droplets to buy this item.",
  Gw = () => "Você não tem gotas suficientes para comprar este item.",
  Ww = () => "你的水滴不足，无法购买此物品。",
  qw = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  Kw = () => "No tienes suficientes gotas para comprar este ítem.",
  Hw = () => "Vous n’avez pas assez de droplets pour acheter cet objet.",
  Yw = () => "Non hai abbastanza gocce per acquistare questo oggetto.",
  Zw = () => "このアイテムを購入するのに十分なドロップレットがありません。",
  $w = () => "Nie masz wystarczającej liczby kropli, aby kupić ten przedmiot.",
  Jw = () => "У вас недостаточно droplets для покупки этого предмета.",
  Xw = () => "У вас недостатньо дроплетів, щоб купити цей предмет.",
  Qw = () => "Bạn không có đủ droplets để mua vật phẩm này.",
  tn = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Vw() : e === "pt" ? Gw() : e === "ch" ? Ww() : e === "de" ? qw() : e === "es" ? Kw() : e === "fr" ? Hw() : e === "it" ? Yw() : e === "jp" ? Zw() : e === "pl" ? $w() : e === "ru" ? Jw() : e === "uk" ? Xw() : Qw()
  },
  ey = () => "You need to be logged in to paint",
  ty = () => "Você precisa estar conectado para pintar",
  ny = () => "你需要登录才能进行绘制",
  ry = () => "Du musst eingeloggt sein, um zu malen",
  ay = () => "Debes iniciar sesión para pintar",
  iy = () => "Vous devez être connecté pour peindre",
  oy = () => "Devi avere effettuato l'accesso per dipingere",
  sy = () => "ペイントするにはログインが必要です。",
  cy = () => "Musisz być zalogowany, aby malować",
  uy = () => "Чтобы рисовать, нужно войти в аккаунт",
  ly = () => "Щоб малювати, необхідно увійти в акаунт",
  dy = () => "Bạn cần đăng nhập để tô",
  nn = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? ey() : e === "pt" ? ty() : e === "ch" ? ny() : e === "de" ? ry() : e === "es" ? ay() : e === "fr" ? iy() : e === "it" ? oy() : e === "jp" ? sy() : e === "pl" ? cy() : e === "ru" ? uy() : e === "uk" ? ly() : dy()
  },
  _y = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  fy = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  my = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  py = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  hy = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  gy = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  wy = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  yy = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  vy = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  by = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  Ey = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  Ty = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  Oy = (t = {}, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? _y() : e === "pt" ? fy() : e === "ch" ? my() : e === "de" ? py() : e === "es" ? hy() : e === "fr" ? gy() : e === "it" ? wy() : e === "jp" ? yy() : e === "pl" ? vy() : e === "ru" ? by() : e === "uk" ? Ey() : Ty()
  },
  Sy = t => `Your account has been suspended out until ${t.until}`,
  Iy = t => `A sua conta está suspensa até ${t.until}`,
  Ay = t => `你的账号已被暂停至 ${t.until}`,
  ky = t => `Dein Konto ist gesperrt bis ${t.until}`,
  Ry = t => `Tu cuenta ha sido suspendida hasta ${t.until}`,
  Ny = t => `Votre compte est suspendu jusqu’au ${t.until}`,
  xy = t => `Il tuo account è sospeso fino al ${t.until}`,
  Dy = t => `あなたのアカウントは${t.until}まで一時停止されています。`,
  Ly = t => `Twoje konto zostało zawieszone do ${t.until}`,
  My = t => `Ваш аккаунт заблокирован до ${t.until}`,
  Py = t => `Ваш акаунт призупинено до ${t.until}`,
  Uy = t => `Tài khoản của bạn đã bị đình chỉ đến ${t.until}`,
  rn = (t, n = {}) => {
    const e = n.locale ?? h();
    return e === "en" ? Sy(t) : e === "pt" ? Iy(t) : e === "ch" ? Ay(t) : e === "de" ? ky(t) : e === "es" ? Ry(t) : e === "fr" ? Ny(t) : e === "it" ? xy(t) : e === "jp" ? Dy(t) : e === "pl" ? Ly(t) : e === "ru" ? My(t) : e === "uk" ? Py(t) : Uy(t)
  };
let R;
const ae = new Array(128).fill(void 0);
ae.push(void 0, null, !0, !1);

function I(t) {
  return ae[t]
}
const Nn = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && Nn.decode();
let ye = null;

function Ee() {
  return (ye === null || ye.byteLength === 0) && (ye = new Uint8Array(R.memory.buffer)), ye
}

function ve(t, n) {
  return t = t >>> 0, Nn.decode(Ee().subarray(t, t + n))
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

function jy(t) {
  t < 132 || (ae[t] = Te, Te = t)
}

function an(t) {
  const n = I(t);
  return jy(t), n
}
const on = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(t => {
  R.__wbindgen_export_1.get(t.dtor)(t.a, t.b)
});

function Cy(t, n, e, r) {
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
        --a.cnt === 0 ? (R.__wbindgen_export_1.get(a.dtor)(s, a.b), on.unregister(a)) : a.a = s
      }
    };
  return i.original = a, on.register(i, a, a), i
}
let le = null;

function st() {
  return (le === null || le.buffer.detached === !0 || le.buffer.detached === void 0 && le.buffer !== R.memory.buffer) && (le = new DataView(R.memory.buffer)), le
}
let de = 0;
const nt = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  Fy = typeof nt.encodeInto == "function" ? function(t, n) {
    return nt.encodeInto(t, n)
  } : function(t, n) {
    const e = nt.encode(t);
    return n.set(e), {
      read: t.length,
      written: e.length
    }
  };

function Ot(t, n, e) {
  if (e === void 0) {
    const s = nt.encode(t),
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
      l = Fy(t, s);
    o += l.written, a = e(a, r, o, 1) >>> 0
  }
  return de = o, a
}

function By(t) {
  const n = Ot(t, R.__wbindgen_export_2, R.__wbindgen_export_3),
    e = de;
  R.set_fingerprint(n, e)
}

function zy(t, n) {
  const e = n(t.length * 1, 1) >>> 0;
  return Ee().set(t, e / 1), de = t.length, e
}

function Vy(t) {
  const n = zy(t, R.__wbindgen_export_2),
    e = de;
  R.set_telemetry(n, e)
}

function St(t) {
  R.set_user_id(t)
}

function Gy(t) {
  R.set_automated_browser(t)
}

function Wy(t) {
  let n, e;
  try {
    const i = R.__wbindgen_add_to_stack_pointer(-16),
      o = Ot(t, R.__wbindgen_export_2, R.__wbindgen_export_3),
      s = de;
    R.get_pawtected_endpoint_payload(i, o, s);
    var r = st().getInt32(i + 0, !0),
      a = st().getInt32(i + 4, !0);
    return n = r, e = a, ve(r, a)
  } finally {
    R.__wbindgen_add_to_stack_pointer(16), R.__wbindgen_export_4(n, e, 1)
  }
}

function qy(t) {
  const n = Ot(t, R.__wbindgen_export_2, R.__wbindgen_export_3),
    e = de;
  R.request_url(n, e)
}

function Ky(t) {
  R.set_automated_clicks(t)
}

function Hy() {
  R.init_listeners()
}

function Yy(t, n, e) {
  R.__wbindgen_export_5(t, n, x(e))
}
async function Zy(t, n) {
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

function $y() {
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
      I(n).randomFillSync(an(e))
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
    const a = Cy(n, e, 3, Yy);
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
    st().setFloat64(n + 8, ue(a) ? 0 : a, !0), st().setInt32(n + 0, !ue(a), !0)
  }, t.wbg.__wbindgen_object_clone_ref = function(n) {
    const e = I(n);
    return x(e)
  }, t.wbg.__wbindgen_object_drop_ref = function(n) {
    an(n)
  }, t.wbg.__wbindgen_string_new = function(n, e) {
    const r = ve(n, e);
    return x(r)
  }, t.wbg.__wbindgen_throw = function(n, e) {
    throw new Error(ve(n, e))
  }, t
}

function Jy(t, n) {
  return R = t.exports, xn.__wbindgen_wasm_module = n, le = null, ye = null, R
}
async function xn(t) {
  if (R !== void 0) return R;
  typeof t < "u" && (Object.getPrototypeOf(t) === Object.prototype ? {
    module_or_path: t
  } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t > "u" && (t = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const n = $y();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
  const {
    instance: e,
    module: r
  } = await Zy(await t, n);
  return Jy(e, r)
}
const Xy = 60,
  Qy = 100,
  ev = 50,
  tv = 2e3;
class Dn {
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

function nv() {
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
const Ln = new Dn(Qy),
  Mn = new Dn(ev);
let U = nv(),
  ct = null,
  sn = !1,
  k = null,
  It = !1,
  Pn = 0;

function rb() {
  sn || typeof window > "u" || (sn = !0, U.focusStartMs = performance.now(), U.windowStartMs = Date.now(), document.readyState === "complete" ? k = un() : window.addEventListener("load", () => {
    k = un()
  }, {
    once: !0
  }), window.addEventListener("pointermove", t => {
    const n = performance.now();
    n - U.lastMouseSampleMs < Xy || (U.lastMouseSampleMs = n, Ln.push({
      x: t.clientX,
      y: t.clientY,
      t: n
    }))
  }, {
    passive: !0
  }), window.addEventListener("pointerdown", t => {
    Mn.push(performance.now()), U.lastClickX = t.clientX, U.lastClickY = t.clientY
  }, {
    passive: !0
  }), window.addEventListener("click", t => {
    t.isTrusted || (It = !0)
  }, {
    passive: !0
  }), window.addEventListener("blur", () => {
    U.totalFocusMs += performance.now() - U.focusStartMs, U.idleStartMs = performance.now()
  }, {
    passive: !0
  }), window.addEventListener("focus", () => {
    U.idleStartMs > 0 && (U.totalIdleMs += performance.now() - U.idleStartMs, U.idleStartMs = 0), U.focusStartMs = performance.now()
  }, {
    passive: !0
  }), _v())
}

function rv() {
  ct = av();
  try {
    const t = ct,
      n = new Uint8Array(40),
      e = new DataView(n.buffer);
    e.setUint8(0, 1);
    let r = 0;
    t.isLinearMovement && (r |= 1), t.isConstantInterval && (r |= 2), t.hasZeroJitter && (r |= 4), k != null && k.hts && (r |= 8), navigator.webdriver && (r |= 16), It && (r |= 32), k != null && k.cdp && (r |= 64), k != null && k.odz && (r |= 128), e.setUint8(1, r), e.setUint8(2, Math.min(255, t.clickCount)), e.setUint16(3, Math.min(65535, Math.round(t.mouseSpeedAvg * 100))), e.setUint8(5, Math.min(255, t.microMovementCount)), e.setUint8(6, Math.min(255, Math.round(t.mouseSpeedStddev * 100))), e.setUint8(7, Math.min(255, t.movementSegments)), e.setUint8(8, Math.min(255, Math.round(t.avgSegmentCurvature * 255))), e.setUint16(9, Math.min(65535, Math.max(0, U.lastClickX))), e.setUint16(11, Math.min(65535, Math.max(0, U.lastClickY))), e.setUint8(13, Math.min(255, k ? k.lc : 0)), e.setUint8(14, Math.min(255, k ? k.pc : 0)), e.setUint8(15, Math.min(255, k ? k.mtp : 0)), e.setUint16(16, Math.min(65535, Math.round(t.idleMs))), e.setUint16(18, Math.min(65535, Math.round(t.focusMs))), e.setUint16(20, Math.min(65535, Math.round(t.mouseAccelAvg * 100))), e.setUint16(22, Math.min(65535, Math.round(t.mouseAccelStddev * 100))), e.setUint16(24, Math.min(65535, Math.round(t.angularVelocityStddev * 1e4))), e.setInt16(26, Math.max(-32768, Math.min(32767, Math.round(t.velocityProfileSkew * 1e3)))), e.setUint16(28, Math.min(65535, Math.round(t.preClickPauseAvg))), e.setUint16(30, Math.min(65535, k ? k.sw : 0)), e.setUint16(32, Math.min(65535, k ? k.sh : 0)), e.setUint8(34, k ? k.fb & 255 : 0), e.setUint8(35, Math.min(255, k ? k.ptc : 0)), e.setUint8(36, k ? k.adf & 255 : 0);
    let a = 0;
    return k != null && k.cdr && (a |= 1), e.setUint8(37, a), e.setUint16(38, Math.min(65535, Math.round(Pn * 100))), btoa(String.fromCharCode(...n))
  } catch {
    return ""
  }
}

function av() {
  const t = Date.now(),
    n = U.windowStartMs,
    e = performance.now(),
    r = Ln.drain(),
    a = Mn.drain(),
    i = lv(U, e);
  U.totalIdleMs = 0, U.totalFocusMs = 0, U.focusStartMs = e, U.windowStartMs = t;
  const o = ov(r),
    s = sv(a),
    l = uv(a, r),
    u = o.straightnessAvg > .95 && r.length > 10,
    _ = o.jitterAvg < .01 && r.length > 10,
    d = s.stddev / Math.max(1, s.avg) < .05 && a.length >= 5;
  return ct = {
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
  }, ct
}
const iv = {
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

function ov(t) {
  if (t.length < 3) return iv;
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
    if (n.push(V), G < 3 && G > 0 && a++, $ > tv) {
      if (y - i > 2) {
        o++;
        const te = cn(t.slice(i, y));
        te >= 0 && s.push(te)
      }
      i = y
    }
    if (y >= 2) {
      const te = t[y - 1].x - t[y - 2].x,
        fe = t[y - 1].y - t[y - 2].y,
        lt = O * te + v * fe,
        kt = Math.sqrt(O * O + v * v),
        Rt = Math.sqrt(te * te + fe * fe);
      kt > 0 && Rt > 0 && e.push(1 - Math.abs(lt / (kt * Rt)));
      const Gn = n[n.length - 2] || 0;
      r.push(Math.abs(V - Gn))
    }
  }
  if (t.length - i > 2) {
    o++;
    const y = cn(t.slice(i));
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
  const E = t[0],
    w = t[t.length - 1],
    T = Math.sqrt(Math.pow(w.x - E.x, 2) + Math.pow(w.y - E.y, 2));
  let S = 0;
  for (let y = 1; y < t.length; y++) {
    const O = t[y].x - t[y - 1].x,
      v = t[y].y - t[y - 1].y;
    S += Math.sqrt(O * O + v * v)
  }
  const N = S > 0 ? T / S : 0,
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

function sv(t) {
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

function cv(t, n) {
  let e = 0,
    r = t.length - 1,
    a = -1;
  for (; e <= r;) {
    const i = e + r >>> 1;
    t[i].t <= n ? (a = i, e = i + 1) : r = i - 1
  }
  return a
}

function uv(t, n) {
  if (t.length === 0 || n.length < 2) return 0;
  let e = 0,
    r = 0;
  for (const a of t) {
    const i = cv(n, a);
    i >= 0 && (e += a - n[i].t, r++)
  }
  return r > 0 ? e / r : 0
}

function lv(t, n) {
  const e = Math.round(t.totalIdleMs + (t.idleStartMs > 0 ? n - t.idleStartMs : 0)),
    r = Math.round(t.totalFocusMs + (t.idleStartMs === 0 ? n - t.focusStartMs : 0));
  return {
    idleMs: e,
    focusMs: r
  }
}

function cn(t) {
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

function dv() {
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
        E = /^(iPhone|iPad|iPod)/.test(i);
      if ((o && !d || s && !p || l && !g || u && !g || _ && !E) && (t |= 4), n.userAgentData && n.userAgentData.platform) {
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

function un() {
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
    const T = Object.getOwnPropertyDescriptor(Navigator.prototype, w);
    T && typeof T.get == "function" && l.call(T.get).includes("native code") === !1 && i++
  } catch {}
  for (const w of s) try {
    const T = Object.getOwnPropertyDescriptor(Screen.prototype, w);
    T && typeof T.get == "function" && l.call(T.get).includes("native code") === !1 && i++
  } catch {}
  let u = "",
    _ = !0;
  try {
    const w = document.createElement("canvas");
    w.width = 64, w.height = 16;
    const T = w.getContext("2d");
    if (T) {
      T.textBaseline = "top", T.font = "14px Arial", T.fillText("wplace🐾", 2, 2);
      const S = w.toDataURL();
      let N = 0;
      for (let C = 0; C < S.length; C++) N = (N << 5) - N + S.charCodeAt(C) | 0;
      u = (N >>> 0).toString(16).padStart(8, "0"), T.clearRect(0, 0, 64, 16), T.fillText("wplace🐾", 2, 2);
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
    E = dv();
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
    adf: E
  }
}

function _v() {
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
      Pn = a.reduce((o, s) => o + Math.abs(s - i), 0) / a.length
    }
  }
  requestAnimationFrame(e)
}

function oe(t) {
  return Math.round(t * 1e3) / 1e3
}
const fv = `
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
async function mv() {
  try {
    const t = await fetch(`${vt}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!t.ok) return null;
    const n = await t.json(),
      e = await pv(n.prefix, n.difficulty);
    return e ? {
      ...n,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function pv(t, n) {
  return new Promise(e => {
    const r = new Blob([fv], {
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
const At = 3;
var Pe, Ue;
class hv {
  constructor() {
    D(this, Pe, B(null));
    D(this, Ue, B(0))
  }
  get current() {
    return M(b(this, Pe))
  }
  set current(n) {
    P(b(this, Pe), n, !0)
  }
  get errorCount() {
    return M(b(this, Ue))
  }
  set errorCount(n) {
    P(b(this, Ue), n, !0)
  }
}
Pe = new WeakMap, Ue = new WeakMap;
const z = new hv;
async function ln(t) {
  return t === 1 ? gv() : t === 2 || t === 3 ? yv(t) : t === 4 ? wv() : !1
}
async function gv() {
  for (let t = 0; t < At; t++) try {
    const n = await mv();
    if (!n) continue;
    return await ge.verifyChallenge({
      type: "pow",
      challengeId: n.challengeId,
      nonce: n.nonce
    }), !0
  } catch {}
  return !1
}

function wv() {
  return new Promise(t => {
    z.errorCount = 0, z.current = {
      tier: 4,
      resolve: t
    }
  })
}

function yv(t) {
  return new Promise(n => {
    z.errorCount = 0, z.current = {
      tier: t,
      resolve: n
    }
  })
}

function ab(t) {
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
    z.errorCount += 1, z.errorCount >= At && (n.resolve(!1), z.current = null)
  })
}

function ib() {
  const t = z.current;
  t && (z.errorCount += 1, z.errorCount >= At && (t.resolve(!1), z.current = null))
}

function ob() {
  const t = z.current;
  !t || t.tier !== 4 || (t.resolve(!0), z.current = null)
}

function sb() {
  z.current && (z.current.resolve(!1), z.current = null)
}
var c = (t => (t[t.CONTINUE = 100] = "CONTINUE", t[t.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", t[t.PROCESSING = 102] = "PROCESSING", t[t.EARLY_HINTS = 103] = "EARLY_HINTS", t[t.OK = 200] = "OK", t[t.CREATED = 201] = "CREATED", t[t.ACCEPTED = 202] = "ACCEPTED", t[t.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", t[t.NO_CONTENT = 204] = "NO_CONTENT", t[t.RESET_CONTENT = 205] = "RESET_CONTENT", t[t.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", t[t.MULTI_STATUS = 207] = "MULTI_STATUS", t[t.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", t[t.IM_USED = 226] = "IM_USED", t[t.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", t[t.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", t[t.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", t[t.FOUND = 302] = "FOUND", t[t.SEE_OTHER = 303] = "SEE_OTHER", t[t.NOT_MODIFIED = 304] = "NOT_MODIFIED", t[t.USE_PROXY = 305] = "USE_PROXY", t[t.SWITCH_PROXY = 306] = "SWITCH_PROXY", t[t.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", t[t.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", t[t.BAD_REQUEST = 400] = "BAD_REQUEST", t[t.UNAUTHORIZED = 401] = "UNAUTHORIZED", t[t.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", t[t.FORBIDDEN = 403] = "FORBIDDEN", t[t.NOT_FOUND = 404] = "NOT_FOUND", t[t.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", t[t.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", t[t.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", t[t.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", t[t.CONFLICT = 409] = "CONFLICT", t[t.GONE = 410] = "GONE", t[t.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", t[t.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", t[t.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", t[t.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", t[t.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", t[t.URI_TOO_LONG = 414] = "URI_TOO_LONG", t[t.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", t[t.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", t[t.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", t[t.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", t[t.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", t[t.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", t[t.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", t[t.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", t[t.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", t[t.LOCKED = 423] = "LOCKED", t[t.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", t[t.TOO_EARLY = 425] = "TOO_EARLY", t[t.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", t[t.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", t[t.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", t[t.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", t[t.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", t[t.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", t[t.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", t[t.BAD_GATEWAY = 502] = "BAD_GATEWAY", t[t.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", t[t.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", t[t.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", t[t.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", t[t.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", t[t.LOOP_DETECTED = 508] = "LOOP_DETECTED", t[t.NOT_EXTENDED = 510] = "NOT_EXTENDED", t[t.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", t[t.AWS_ELB_000 = 0] = "AWS_ELB_000", t[t.THIS_IS_FINE = 218] = "THIS_IS_FINE", t[t.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", t[t.METHOD_FAILURE = 420] = "METHOD_FAILURE", t[t.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", t[t.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", t[t.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", t[t.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", t[t.NO_RESPONSE = 444] = "NO_RESPONSE", t[t.RETRY_WITH = 449] = "RETRY_WITH", t[t.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", t[t.REDIRECT_IIS = 451] = "REDIRECT_IIS", t[t.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", t[t.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", t[t.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", t[t.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", t[t.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", t[t.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", t[t.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", t[t.INVALID_TOKEN = 498] = "INVALID_TOKEN", t[t.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", t[t.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", t[t.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", t[t.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", t[t.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", t[t.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", t[t.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", t[t.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", t[t.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", t[t.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", t[t.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", t[t.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", t[t.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", t[t.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", t[t.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", t[t.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", t[t.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", t[t.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", t[t.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", t[t.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", t[t.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", t[t.REQUEST_DENIED = 999] = "REQUEST_DENIED", t))(c || {});
const cb = {
    griefing: Sl(),
    "multi-accounting": hm(),
    "hate-speech": Jl(),
    bot: Oo(),
    doxxing: Rc(),
    "inappropriate-content": Td(),
    other: $o()
  },
  ub = {
    doxxing: Vc(),
    "hate-speech": ld(),
    griefing: Cl(),
    "multi-accounting": Rm(),
    bot: jo(),
    "inappropriate-content": Ud(),
    other: us()
  },
  lb = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  dn = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  db = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  vv = 365 * 24 * 60 * 60 * 1e3;

function Un(t) {
  if (!t) return null;
  const e = (t instanceof Date ? t : new Date(t)).getTime();
  return Number.isFinite(e) ? e : null
}

function _b(t, n = Date.now()) {
  const e = Un(t);
  return e === null ? !1 : e - n >= vv
}

function fb(t, n = Date.now()) {
  const e = Un(t);
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
const bv = [{
    tileSize: 1e3,
    zoom: 11
  }],
  Ev = 4,
  Tv = 6e3,
  Ov = [{
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
  Sv = {
    needsPhoneVerification: "needs_phone_verification"
  },
  Iv = {
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
  Av = {
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
  kv = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  Rv = {
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
  Nv = {
    tools: {
      wayback: {
        limit: 500
      }
    }
  },
  _e = {
    seasons: bv,
    regionSize: Ev,
    refreshIntervalMs: Tv,
    colors: Ov,
    errors: Sv,
    items: Iv,
    products: Av,
    countries: kv,
    permissions: Rv,
    settings: Nv
  },
  yt = _e,
  xv = _e.seasons,
  jn = _e.seasons.length - 1,
  mb = _e.seasons[jn].zoom,
  pb = _e.seasons[jn].tileSize,
  hb = _e.permissions,
  Dv = _e.settings;

function gb(t) {
  return yt.countries[t - 1]
}
class m extends Error {
  constructor(n, e) {
    super(n), this.message = n, this.status = e
  }
}

function _n(t, n) {
  const e = {};
  for (const r of t) {
    const a = n(r);
    let i = e[a];
    i ? i.push(r) : e[a] = [r]
  }
  return e
}

function wb(t, n) {
  const e = {};
  for (const r of t) {
    const a = n(r);
    e[a] = r
  }
  return e
}
var je, Ce;
class Lv {
  constructor(n) {
    D(this, je, B(!0));
    D(this, Ce, B(null));
    this.url = n
  }
  get online() {
    return M(b(this, je))
  }
  set online(n) {
    P(b(this, je), n, !0)
  }
  get serverTimeOffsetMs() {
    return M(b(this, Ce))
  }
  set serverTimeOffsetMs(n) {
    P(b(this, Ce), n, !0)
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
    const e = _n(n, s => `t=(${s.tile[0]},${s.tile[1]}),s=${s.season}`),
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
      i = await pt(a),
      o = await this.request("/paint", {
        method: "POST",
        body: a,
        headers: i,
        credentials: "include"
      });
    if (o.status !== c.OK) {
      if (o.status === c.UNAUTHORIZED) throw new Error(nn());
      if (o.status === c.FORBIDDEN) {
        if (o.headers.get("cf-mitigated") === "challenge") throw new Error(Zt());
        const s = await o.json();
        if ((s == null ? void 0 : s.error) === "timeout") {
          const l = new Date(Date.now() + ((s == null ? void 0 : s.durationMs) ?? 0));
          throw new Error(rn({
            until: l.toLocaleString()
          }))
        }
        if ((s == null ? void 0 : s.error) === "refresh") throw new Error(Xt());
        if ((s == null ? void 0 : s.error) === "color-not-owned") throw new Error(Jt());
        if ((s == null ? void 0 : s.error) === "event-pixel-present") throw new Error(Kt());
        if ((s == null ? void 0 : s.error) === "challenge-required")
          if (s.tier) {
            if (await ln(s.tier)) return this.paint(n);
            throw new Error(Ht())
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
    const i = _n(n, l => `t=(${l.tile[0]},${l.tile[1]}),s=${l.season}`),
      s = (await Promise.all(Object.values(i).map(async l => {
        const [u, _] = l[0].tile, d = l[0].season, p = {
          colors: l.map(T => T.colorIdx),
          coords: l.flatMap(T => T.pixel),
          csid: r
        }, g = JSON.stringify(p), E = e(d, u, _), w = await pt(g);
        return this.request(E, {
          method: "POST",
          body: g,
          headers: w,
          credentials: "include"
        })
      }))).filter(l => l.status !== c.OK);
    if (s.length) {
      const l = s[0];
      if (l.status === c.UNAUTHORIZED) throw new Error(nn());
      if (l.status === c.FORBIDDEN) {
        if (l.headers.get("cf-mitigated") === "challenge") throw new Error(Zt());
        const u = await l.json();
        if ((u == null ? void 0 : u.error) === "timeout") {
          const _ = new Date(Date.now() + ((u == null ? void 0 : u.durationMs) ?? 0));
          throw new Error(rn({
            until: _.toLocaleString()
          }))
        }
        if ((u == null ? void 0 : u.error) === "refresh") throw new Error(Xt());
        if ((u == null ? void 0 : u.error) === "color-not-owned") throw new Error(Jt());
        if ((u == null ? void 0 : u.error) === "event-pixel-present") throw new Error(Kt());
        Se.refresh()
      } else throw new Error(f())
    }
  }
  async adminAutoPainterPaint(n, e, r) {
    const a = Mv(n),
      i = await Pv(a),
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
      throw new Error(Bu({
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
      const E = await l.text();
      throw console.error("Error while fetching pixel area info", E), new Error(f())
    }
    const u = await l.arrayBuffer(),
      _ = new DataView(u),
      d = Math.floor(u.byteLength / 5),
      p = new Uint32Array(d),
      g = new Uint8Array(d);
    for (let E = 0; E < d; E++) {
      const w = E * 5;
      p[E] = _.getUint32(w, !0), g[E] = _.getUint8(w + 4)
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
    if (e.status === c.BAD_REQUEST) throw new Error(of());
    if (e.status === c.CONFLICT) throw new Error(Xp());
    if (e.status === c.FORBIDDEN) throw new Error(mp());
    if (e.status === c.TOO_MANY_REQUESTS) throw new Error(Qt());
    if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(dh());
    if (e.status === c.LOCKED) throw new Error(qg());
    if (e.status === c.UNPROCESSABLE_ENTITY) throw new Error(yf());
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
        "x-fp": await ot()
      }
    });
    if (n.type === "otp") {
      if (r.status === c.GONE) throw new Error(_l());
      if (r.status === c.BAD_REQUEST) throw new Error(b_());
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(Qt());
      if (r.status !== c.OK) throw new Error(f())
    } else {
      if (r.status === c.BAD_REQUEST) throw new Error(c_());
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
      if (a === "invalid_name") throw new Error($t());
      if (a === "invalid_discord") throw new Error(M_());
      if (typeof a == "string" && a.startsWith("name_change_cooldown:")) {
        const i = parseInt(a.split(":")[1] ?? "0", 10);
        throw new Error(Vm({
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
    if (e.status === c.BAD_REQUEST) throw new Error(vg());
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
    if (e.status === c.FORBIDDEN) throw new Error(Ap());
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
    if (r.status === c.BAD_REQUEST) throw new Error(rm());
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
    if (e.status !== c.OK) throw e.status === c.NOT_FOUND ? new Error(Yt()) : e.status === c.FORBIDDEN ? new Error(tn()) : e.status === c.CONFLICT ? new Error(en()) : new Error(f())
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
      throw r.error === "max_characters" ? new Error(Ji()) : r.error === "name_taken" ? new Error(Ci()) : r.error == "empty_name" ? new Error(lo()) : new Error(f())
    } else throw e.status === c.FORBIDDEN ? new Error(Rw()) : new Error(f())
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
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(ce()) : e.status === c.BAD_REQUEST ? new Error(Qu()) : new Error(f())
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
      throw (a == null ? void 0 : a.error) === "user_not_in_alliance" ? new Error(Df()) : new Error(f())
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
      if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(Si());
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
    for (const r of e.tickets) r.reports.sort((a, i) => dn[a.reason] - dn[i.reason]);
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
      throw console.error("Fetch error:", i), this.online = !1, new Error(Ms(), {
        cause: i
      })
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(Oy());
      if (r.status === c.REQUEST_TIMEOUT) throw new Error(Uh());
      if (r.status === c.SERVICE_UNAVAILABLE) throw new Error(Zh())
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
      throw o === "invalid_name" ? new m($t(), c.BAD_REQUEST) : new m(typeof o == "string" && o ? o : f(), c.BAD_REQUEST)
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
      throw i === "email_required" || i === "invalid_email" ? new m(Au(), c.BAD_REQUEST) : new m(typeof i == "string" && i ? i : f(), c.BAD_REQUEST)
    }
    if (r.status === c.CONFLICT) {
      const a = await r.json();
      if (((a == null ? void 0 : a.error) ?? "") === "email_already_in_use") {
        const o = new m(typeof(a == null ? void 0 : a.userId) == "number" ? mu({
          userId: a.userId
        }) : tu(), c.CONFLICT);
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
      r = await pt(e),
      a = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: e,
        headers: r
      });
    if (a.status === c.FORBIDDEN) {
      const i = await a.json();
      if ((i == null ? void 0 : i.error) === "challenge-required" && i.tier) {
        if (await ln(i.tier)) return this.submitBanAppeal(n);
        throw new m(Ht(), a.status)
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
    const e = await ot(),
      r = await this.request("/anticheat/captcha/session", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(n),
        headers: {
          "x-fp": e
        }
      });
    if (!r.ok) throw r.status === 500 ? new m(f(), r.status) : new m(Zd(), r.status);
    return r.json()
  }
  validWaybackInput(n) {
    const e = Number.isFinite(n.timestamp) && Number.isInteger(n.timestamp) && n.timestamp >= 0 && n.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(n.season) && Number.isInteger(n.season) && n.season >= 0 && n.season < xv.length,
      a = Number.isFinite(n.limit) && Number.isInteger(n.limit) && n.limit > 0 && n.limit <= Dv.tools.wayback.limit,
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
    if (e.status === c.NOT_FOUND) throw new Error(Yt());
    if (e.status === c.FORBIDDEN) throw new Error(tn());
    if (e.status === c.CONFLICT) throw new Error(en());
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
}
je = new WeakMap, Ce = new WeakMap;

function Mv(t) {
  var p, g;
  if (!t.length) throw new Error("Auto painter request does not contain any pixels.");
  const n = t[0].season;
  for (const E of t)
    if (E.season !== n) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (p = yt.seasons) == null ? void 0 : p[n];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const r = e.tileSize;
  let a = Number.POSITIVE_INFINITY,
    i = Number.POSITIVE_INFINITY,
    o = Number.NEGATIVE_INFINITY,
    s = Number.NEGATIVE_INFINITY;
  const l = t.map(E => {
      const w = Math.round(E.tile[0] * r + E.pixel[0]),
        T = Math.round(E.tile[1] * r + E.pixel[1]);
      return w < a && (a = w), T < i && (i = T), w > o && (o = w), T > s && (s = T), {
        x: w,
        y: T,
        colorIdx: E.colorIdx
      }
    }),
    u = o - a + 1,
    _ = s - i + 1;
  if (!Number.isFinite(u) || !Number.isFinite(_) || u <= 0 || _ <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const d = new Uint8ClampedArray(u * _ * 4);
  for (const {
      x: E,
      y: w,
      colorIdx: T
    }
    of l) {
    const S = (g = yt.colors) == null ? void 0 : g[T];
    if (!S) throw new Error(`Unknown palette color index: ${T}`);
    const N = E - a,
      C = ((w - i) * u + N) * 4,
      [H, y, O] = S.rgb;
    d[C] = H, d[C + 1] = y, d[C + 2] = O, d[C + 3] = T === 0 ? 1 : 255
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
async function Pv(t) {
  const n = Uv(t.width, t.height),
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

function Uv(t, n) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(t, n);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = t, e.height = n, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let ge = new Lv(vt);
async function pt(t) {
  const n = await ot(),
    e = rv();
  return {
    "x-pawtect-token": await Yv(t, e),
    "x-t": e,
    "x-fp": n
  }
}
const yb = t => new URL(t, vt).toString();

function Cn(t, n) {
  if (!(t != null && t.length)) return !1;
  for (const e of t)
    if (e === n) return !0;
  return !1
}

function jv(t, n) {
  for (const e of n)
    if (Cn(t, e)) return !0;
  return !1
}

function Fn(t) {
  const n = atob(t),
    e = new Uint8Array(n.length);
  for (let r = 0; r < n.length; r++) e[r] = n.charCodeAt(r);
  return e
}

function Cv(t) {
  if (typeof Buffer < "u") return Buffer.from(t).toString("base64");
  let n = "";
  for (let e = 0; e < t.length; e++) n += String.fromCharCode(t[e]);
  return btoa(n)
}
class Fv {
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

function vb(t) {
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

function bb(t) {
  if (typeof FileReader > "u") {
    const n = t.type || "application/octet-stream";
    return t.arrayBuffer().then(e => `data:${n};base64,${Cv(new Uint8Array(e))}`)
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

function Eb(t) {
  if (!t.startsWith("data:")) throw new Error("Could not parse data URL");
  const n = t.indexOf(",");
  if (n === -1) throw new Error("Could not parse data URL");
  const e = t.slice(5, n),
    r = t.slice(n + 1),
    a = e.indexOf(";base64"),
    i = (a === -1 ? e : e.slice(0, a)) || "text/plain";
  if (a !== -1) {
    const o = Fn(r),
      s = new Uint8Array(o.byteLength);
    return s.set(o), new Blob([s], {
      type: i
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: i
  })
}

function Tb(...t) {
  return t.filter(Boolean).join(" ")
}
const Bv = typeof document < "u";
let fn = 0;
var Fe, Be, ze;
class zv {
  constructor() {
    D(this, Fe, B(rt([])));
    D(this, Be, B(rt([])));
    D(this, ze, n => {
      const e = this.toasts.findIndex(r => r.id === n);
      return e === -1 ? null : e
    });
    F(this, "addToast", n => {
      Bv && this.toasts.unshift(n)
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
      } = n, a = typeof(n == null ? void 0 : n.id) == "number" || n.id && ((s = n.id) == null ? void 0 : s.length) > 0 ? n.id : fn++, i = n.dismissable === void 0 ? !0 : n.dismissable, o = n.type === void 0 ? "default" : n.type;
      return xt(() => {
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
    F(this, "dismiss", n => (xt(() => {
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
      const e = b(this, ze).call(this, n);
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
          const s = Vv(o);
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
      const r = (e == null ? void 0 : e.id) || fn++;
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
      const e = b(this, ze).call(this, n.toastId);
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
    return M(b(this, Fe))
  }
  set toasts(n) {
    P(b(this, Fe), n, !0)
  }
  get heights() {
    return M(b(this, Be))
  }
  set heights(n) {
    P(b(this, Be), n, !0)
  }
}
Fe = new WeakMap, Be = new WeakMap, ze = new WeakMap;

function Vv(t) {
  return t && typeof t == "object" && "status" in t ? `HTTP error! Status: ${t.status}` : `Error! ${t}`
}
const Z = new zv;

function Gv(t, n) {
  return Z.create({
    message: t,
    ...n
  })
}
var ut;
class Ob {
  constructor() {
    D(this, ut, we(() => Z.toasts.filter(n => !n.dismiss)))
  }
  get toasts() {
    return M(b(this, ut))
  }
}
ut = new WeakMap;
const Wv = Gv,
  qv = Object.assign(Wv, {
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
var Ve, Ge, We, qe, Ke, He, Ye, Ze;
class Kv {
  constructor() {
    F(this, "channel", new BroadcastChannel("user-channel"));
    D(this, Ve, B());
    D(this, Ge, B(!0));
    D(this, We, B());
    D(this, qe, B(Date.now()));
    D(this, Ke, we(() => {
      if (!this.data) return;
      const n = this.data.charges;
      if (n.count > n.max) return n.count;
      const e = n.count + Math.max((Jn.now - this.lastFetch) / n.cooldownMs, 0);
      return Math.min(n.max, e)
    }));
    D(this, He, we(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    D(this, Ye, we(() => {
      var n;
      return new Fv(Fn(((n = this.data) == null ? void 0 : n.flagsBitmap) ?? "AA=="))
    }));
    D(this, Ze, we(() => {
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
    return M(b(this, Ve))
  }
  set data(n) {
    P(b(this, Ve), n, !0)
  }
  get loading() {
    return M(b(this, Ge))
  }
  set loading(n) {
    P(b(this, Ge), n, !0)
  }
  get notificationCount() {
    return M(b(this, We))
  }
  set notificationCount(n) {
    P(b(this, We), n, !0)
  }
  get lastFetch() {
    return M(b(this, qe))
  }
  set lastFetch(n) {
    P(b(this, qe), n)
  }
  get charges() {
    return M(b(this, Ke))
  }
  set charges(n) {
    P(b(this, Ke), n)
  }
  get cooldown() {
    return M(b(this, He))
  }
  set cooldown(n) {
    P(b(this, He), n)
  }
  get flagsBitmap() {
    return M(b(this, Ye))
  }
  set flagsBitmap(n) {
    P(b(this, Ye), n)
  }
  get timeoutUntil() {
    return M(b(this, Ze))
  }
  set timeoutUntil(n) {
    P(b(this, Ze), n)
  }
  async refresh() {
    var n, e;
    try {
      return this.loading = !0, this.data = await ge.me(), this.lastFetch = Date.now(), (n = this.channel) == null || n.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && ge.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && (Hn("userId", {
        id: this.data.id
      }), Hv(this.data.id)), !!this.data
    } catch (r) {
      return console.error(r), qv.warning(tp(), {
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
    return Cn((e = this.data) == null ? void 0 : e.permissions, n)
  }
  hasAnyPermission(n) {
    var e;
    return jv((e = this.data) == null ? void 0 : e.permissions, n)
  }
}
Ve = new WeakMap, Ge = new WeakMap, We = new WeakMap, qe = new WeakMap, Ke = new WeakMap, He = new WeakMap, Ye = new WeakMap, Ze = new WeakMap;
const Se = new Kv;
let Bn, be;
async function zn() {
  return be || (be = (async () => {
    var t;
    try {
      await xn(er), (t = Se.data) != null && t.id && St(Se.data.id), Hy();
      const n = fetch;
      return Object.assign(window, {
        fetch: Vn((e, r) => {
          let a = null;
          return e instanceof Request ? a = e.url : a = e, a.startsWith("/") || qy(a), n.call(window, e, r)
        })
      }), !0
    } catch (n) {
      return console.error("Error loading Pawtect WASM:", n), Bn = n, Yn(n), be = void 0, !1
    }
  })()), be
}
async function Hv(t) {
  await zn(), St(t)
}

function Sb() {
  return be ?? Promise.resolve(!1)
}

function Ib() {
  return Bn
}
async function Yv(t, n) {
  if (!await zn()) throw new Error(aw());
  const r = navigator.webdriver,
    a = await ot();
  St(Se.data.id), By(a), Gy(r), Ky(It);
  const i = Uint8Array.from(atob(n), o => o.charCodeAt(0));
  return Vy(i), Wy(t)
}

function Vn(t) {
  return t.bind().bind()
}

function Ab(t, n, e) {
  const r = {
    [t.name](...a) {
      return e(...a), n(...a)
    }
  } [t.name];
  return Vn(r)
}
export {
  vg as $, Qn as A, Vc as B, jn as C, jo as D, Rm as E, Cl as F, Z as G, Tb as H, Ob as I, sb as J, z as K, ib as L, ab as M, ob as N, eb as O, vt as P, rb as Q, zn as R, hb as S, Ab as T, bb as U, Eb as V, gb as W, Sb as X, aw as Y, Ib as Z, _b as _, ge as a, yb as a0, ub as a1, fb as a2, db as a3, wb as a4, mb as a5, Qv as a6, Si as a7, Ci as a8, Ji as a9, Xp as aA, dh as aB, Xt as aC, Uh as aD, Zh as aE, Qt as aF, qg as aG, en as aH, Rw as aI, ce as aJ, tn as aK, nn as aL, Oy as aM, rn as aN, lo as aa, $o as ab, us as ac, Kt as ad, Ms as ae, Yt as af, Zt as ag, tu as ah, mu as ai, Bu as aj, Qu as ak, _l as al, c_ as am, b_ as an, M_ as ao, $t as ap, of as aq, yf as ar, Df as as, se as at, rm as au, Vm as av, tp as aw, mp as ax, Ap as ay, Jt as az, cb as b, Oo as c, Rc as d, f as e, yt as f, Sl as g, Jl as h, Td as i, Jn as j, pb as k, nb as l, hm as m, Au as n, ot as o, Zd as p, tb as q, pt as r, lb as s, qv as t, Se as u, ln as v, Ht as w, vb as x, Ud as y, ld as z
};