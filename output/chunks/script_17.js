const tr = "https://maps.wplace.live",
  rr = "8d582454-e5ec-4314-b1c2-89e460ac1d28",
  ar = "pk_live_51RMHjBAtY4KIdFGnnJ9ZHjvgP68opqg7wlT7fA1HG3p91vfhVQyn6je810y5Cz3ggTycnJtFRkwHsYy1qJEyKRFW00x1i0iWMl",
  ir = "true",
  or = "0x4AAAAAABpHqZ-6i7uL0nmG",
  cr = "https://backend.wplace.live/files",
  ur = "https://backend.wplace.live",
  Ne = /; wv\)|FBAN|FBAV|Instagram|BytedanceWebview|musical_ly|Line\/|Snapchat|Twitter|MicroMessenger/i;

function sr() {
  return je() ? !1 : Ne.test(navigator.userAgent)
}

function je() {
  return !!(window != null && window.ReactNativeWebView)
}

function He(e = void 0) {
  const n = (e == null ? void 0 : e.userAgent) ?? navigator.userAgent,
    t = (e == null ? void 0 : e.vendor) ?? navigator.vendor;
  return "brave" in navigator ? "Brave" : /\bEdg(?:e|A|iOS)?\//.test(n) ? "Edge" : /\bOPR\/|\bOpera\//.test(n) ? "Opera" : /\bVivaldi\//.test(n) ? "Vivaldi" : /\bYaBrowser\//.test(n) ? "Yandex" : /\bSamsungBrowser\//.test(n) ? "Samsung Internet" : /\bUCBrowser\/|\bUCWEB\//.test(n) ? "UC Browser" : /\bDuckDuckGo\/|\bDdg\//.test(n) ? "DuckDuckGo" : getComputedStyle(document.documentElement).getPropertyValue("--arc-palette-title") ? "Arc" : /Firefox\/|FxiOS\//.test(n) ? "Firefox" : /Chrome\/|CriOS\//.test(n) && /google/i.test(t) ? "Chrome" : /Safari\//.test(n) && /apple/i.test(t) ? "Safari" : "Unknown"
}
var ee = function() {
  return ee = Object.assign || function(n) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a])
    }
    return n
  }, ee.apply(this, arguments)
};

function P(e, n, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a)
    })
  }
  return new(t || (t = Promise))(function(a, o) {
    function s(f) {
      try {
        l(r.next(f))
      } catch (c) {
        o(c)
      }
    }

    function u(f) {
      try {
        l(r.throw(f))
      } catch (c) {
        o(c)
      }
    }

    function l(f) {
      f.done ? a(f.value) : i(f.value).then(s, u)
    }
    l((r = r.apply(e, n || [])).next())
  })
}

function R(e, n) {
  var t = {
      label: 0,
      sent: function() {
        if (a[0] & 1) throw a[1];
        return a[1]
      },
      trys: [],
      ops: []
    },
    r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this
  }), o;

  function s(l) {
    return function(f) {
      return u([l, f])
    }
  }

  function u(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, l[0] && (t = 0)), t;) try {
      if (r = 1, i && (a = l[0] & 2 ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, l[1])).done) return a;
      switch (i = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
        case 0:
        case 1:
          a = l;
          break;
        case 4:
          return t.label++, {
            value: l[1],
            done: !1
          };
        case 5:
          t.label++, i = l[1], l = [0];
          continue;
        case 7:
          l = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            t = 0;
            continue
          }
          if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
            t.label = l[1];
            break
          }
          if (l[0] === 6 && t.label < a[1]) {
            t.label = a[1], a = l;
            break
          }
          if (a && t.label < a[2]) {
            t.label = a[2], t.ops.push(l);
            break
          }
          a[2] && t.ops.pop(), t.trys.pop();
          continue
      }
      l = n.call(e, t)
    } catch (f) {
      l = [6, f], i = 0
    } finally {
      r = a = 0
    }
    if (l[0] & 5) throw l[1];
    return {
      value: l[0] ? l[1] : void 0,
      done: !0
    }
  }
}

function ke(e, n, t) {
  if (t || arguments.length === 2)
    for (var r = 0, i = n.length, a; r < i; r++)(a || !(r in n)) && (a || (a = Array.prototype.slice.call(n, 0, r)), a[r] = n[r]);
  return e.concat(a || Array.prototype.slice.call(n))
}
var xe = "4.6.2";

function z(e, n) {
  return new Promise(function(t) {
    return setTimeout(t, e, n)
  })
}

function Xe() {
  return new Promise(function(e) {
    var n = new MessageChannel;
    n.port1.onmessage = function() {
      return e()
    }, n.port2.postMessage(null)
  })
}

function De(e, n) {
  n === void 0 && (n = 1 / 0);
  var t = window.requestIdleCallback;
  return t ? new Promise(function(r) {
    return t.call(window, function() {
      return r()
    }, {
      timeout: n
    })
  }) : z(Math.min(e, n))
}

function Ce(e) {
  return !!e && typeof e.then == "function"
}

function le(e, n) {
  try {
    var t = e();
    Ce(t) ? t.then(function(r) {
      return n(!0, r)
    }, function(r) {
      return n(!1, r)
    }) : n(!0, t)
  } catch (r) {
    n(!1, r)
  }
}

function fe(e, n, t) {
  return t === void 0 && (t = 16), P(this, void 0, void 0, function() {
    var r, i, a, o;
    return R(this, function(s) {
      switch (s.label) {
        case 0:
          r = Array(e.length), i = Date.now(), a = 0, s.label = 1;
        case 1:
          return a < e.length ? (r[a] = n(e[a], a), o = Date.now(), o >= i + t ? (i = o, [4, Xe()]) : [3, 3]) : [3, 4];
        case 2:
          s.sent(), s.label = 3;
        case 3:
          return ++a, [3, 1];
        case 4:
          return [2, r]
      }
    })
  })
}

function N(e) {
  return e.then(void 0, function() {}), e
}

function Oe(e, n) {
  for (var t = 0, r = e.length; t < r; ++t)
    if (e[t] === n) return !0;
  return !1
}

function Je(e, n) {
  return !Oe(e, n)
}

function re(e) {
  return parseInt(e)
}

function F(e) {
  return parseFloat(e)
}

function W(e, n) {
  return typeof e == "number" && isNaN(e) ? n : e
}

function x(e) {
  return e.reduce(function(n, t) {
    return n + (t ? 1 : 0)
  }, 0)
}

function Ve(e, n) {
  if (n === void 0 && (n = 1), Math.abs(n) >= 1) return Math.round(e / n) * n;
  var t = 1 / n;
  return Math.round(e * t) / t
}

function ze(e) {
  for (var n, t, r = "Unexpected syntax '".concat(e, "'"), i = /^\s*([a-z-]*)(.*)$/i.exec(e), a = i[1] || void 0, o = {}, s = /([.:#][\w-]+|\[.+?\])/gi, u = function(d, v) {
      o[d] = o[d] || [], o[d].push(v)
    };;) {
    var l = s.exec(i[2]);
    if (!l) break;
    var f = l[0];
    switch (f[0]) {
      case ".":
        u("class", f.slice(1));
        break;
      case "#":
        u("id", f.slice(1));
        break;
      case "[": {
        var c = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(f);
        if (c) u(c[1], (t = (n = c[4]) !== null && n !== void 0 ? n : c[5]) !== null && t !== void 0 ? t : "");
        else throw new Error(r);
        break
      }
      default:
        throw new Error(r)
    }
  }
  return [a, o]
}

function Ue(e) {
  for (var n = new Uint8Array(e.length), t = 0; t < e.length; t++) {
    var r = e.charCodeAt(t);
    if (r > 127) return new TextEncoder().encode(e);
    n[t] = r
  }
  return n
}

function E(e, n) {
  var t = e[0] >>> 16,
    r = e[0] & 65535,
    i = e[1] >>> 16,
    a = e[1] & 65535,
    o = n[0] >>> 16,
    s = n[0] & 65535,
    u = n[1] >>> 16,
    l = n[1] & 65535,
    f = 0,
    c = 0,
    d = 0,
    v = 0;
  v += a + l, d += v >>> 16, v &= 65535, d += i + u, c += d >>> 16, d &= 65535, c += r + s, f += c >>> 16, c &= 65535, f += t + o, f &= 65535, e[0] = f << 16 | c, e[1] = d << 16 | v
}

function V(e, n) {
  var t = e[0] >>> 16,
    r = e[0] & 65535,
    i = e[1] >>> 16,
    a = e[1] & 65535,
    o = n[0] >>> 16,
    s = n[0] & 65535,
    u = n[1] >>> 16,
    l = n[1] & 65535,
    f = 0,
    c = 0,
    d = 0,
    v = 0;
  v += a * l, d += v >>> 16, v &= 65535, d += i * l, c += d >>> 16, d &= 65535, d += a * u, c += d >>> 16, d &= 65535, c += r * l, f += c >>> 16, c &= 65535, c += i * u, f += c >>> 16, c &= 65535, c += a * s, f += c >>> 16, c &= 65535, f += t * l + r * u + i * s + a * o, f &= 65535, e[0] = f << 16 | c, e[1] = d << 16 | v
}

function T(e, n) {
  var t = e[0];
  n %= 64, n === 32 ? (e[0] = e[1], e[1] = t) : n < 32 ? (e[0] = t << n | e[1] >>> 32 - n, e[1] = e[1] << n | t >>> 32 - n) : (n -= 32, e[0] = e[1] << n | t >>> 32 - n, e[1] = t << n | e[1] >>> 32 - n)
}

function C(e, n) {
  n %= 64, n !== 0 && (n < 32 ? (e[0] = e[1] >>> 32 - n, e[1] = e[1] << n) : (e[0] = e[1] << n - 32, e[1] = 0))
}

function g(e, n) {
  e[0] ^= n[0], e[1] ^= n[1]
}
var _e = [4283543511, 3981806797],
  Ke = [3301882366, 444984403];

function de(e) {
  var n = [0, e[0] >>> 1];
  g(e, n), V(e, _e), n[1] = e[0] >>> 1, g(e, n), V(e, Ke), n[1] = e[0] >>> 1, g(e, n)
}
var D = [2277735313, 289559509],
  O = [1291169091, 658871167],
  ve = [0, 5],
  Qe = [0, 1390208809],
  qe = [0, 944331445];

function $e(e, n) {
  var t = Ue(e);
  n = n || 0;
  var r = [0, t.length],
    i = r[1] % 16,
    a = r[1] - i,
    o = [0, n],
    s = [0, n],
    u = [0, 0],
    l = [0, 0],
    f;
  for (f = 0; f < a; f = f + 16) u[0] = t[f + 4] | t[f + 5] << 8 | t[f + 6] << 16 | t[f + 7] << 24, u[1] = t[f] | t[f + 1] << 8 | t[f + 2] << 16 | t[f + 3] << 24, l[0] = t[f + 12] | t[f + 13] << 8 | t[f + 14] << 16 | t[f + 15] << 24, l[1] = t[f + 8] | t[f + 9] << 8 | t[f + 10] << 16 | t[f + 11] << 24, V(u, D), T(u, 31), V(u, O), g(o, u), T(o, 27), E(o, s), V(o, ve), E(o, Qe), V(l, O), T(l, 33), V(l, D), g(s, l), T(s, 31), E(s, o), V(s, ve), E(s, qe);
  u[0] = 0, u[1] = 0, l[0] = 0, l[1] = 0;
  var c = [0, 0];
  switch (i) {
    case 15:
      c[1] = t[f + 14], C(c, 48), g(l, c);
    case 14:
      c[1] = t[f + 13], C(c, 40), g(l, c);
    case 13:
      c[1] = t[f + 12], C(c, 32), g(l, c);
    case 12:
      c[1] = t[f + 11], C(c, 24), g(l, c);
    case 11:
      c[1] = t[f + 10], C(c, 16), g(l, c);
    case 10:
      c[1] = t[f + 9], C(c, 8), g(l, c);
    case 9:
      c[1] = t[f + 8], g(l, c), V(l, O), T(l, 33), V(l, D), g(s, l);
    case 8:
      c[1] = t[f + 7], C(c, 56), g(u, c);
    case 7:
      c[1] = t[f + 6], C(c, 48), g(u, c);
    case 6:
      c[1] = t[f + 5], C(c, 40), g(u, c);
    case 5:
      c[1] = t[f + 4], C(c, 32), g(u, c);
    case 4:
      c[1] = t[f + 3], C(c, 24), g(u, c);
    case 3:
      c[1] = t[f + 2], C(c, 16), g(u, c);
    case 2:
      c[1] = t[f + 1], C(c, 8), g(u, c);
    case 1:
      c[1] = t[f], g(u, c), V(u, D), T(u, 31), V(u, O), g(o, u)
  }
  return g(o, r), g(s, r), E(o, s), E(s, o), de(o), de(s), E(o, s), E(s, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8)
}

function en(e) {
  var n;
  return ee({
    name: e.name,
    message: e.message,
    stack: (n = e.stack) === null || n === void 0 ? void 0 : n.split(`
`)
  }, e)
}

function nn(e) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e))
}

function tn(e) {
  return typeof e != "function"
}

function rn(e, n) {
  var t = N(new Promise(function(r) {
    var i = Date.now();
    le(e.bind(null, n), function() {
      for (var a = [], o = 0; o < arguments.length; o++) a[o] = arguments[o];
      var s = Date.now() - i;
      if (!a[0]) return r(function() {
        return {
          error: a[1],
          duration: s
        }
      });
      var u = a[1];
      if (tn(u)) return r(function() {
        return {
          value: u,
          duration: s
        }
      });
      r(function() {
        return new Promise(function(l) {
          var f = Date.now();
          le(u, function() {
            for (var c = [], d = 0; d < arguments.length; d++) c[d] = arguments[d];
            var v = s + Date.now() - f;
            if (!c[0]) return l({
              error: c[1],
              duration: v
            });
            l({
              value: c[1],
              duration: v
            })
          })
        })
      })
    })
  }));
  return function() {
    return t.then(function(i) {
      return i()
    })
  }
}

function an(e, n, t, r) {
  var i = Object.keys(e).filter(function(o) {
      return Je(t, o)
    }),
    a = N(fe(i, function(o) {
      return rn(e[o], n)
    }, r));
  return function() {
    return P(this, void 0, void 0, function() {
      var s, u, l, f, c;
      return R(this, function(d) {
        switch (d.label) {
          case 0:
            return [4, a];
          case 1:
            return s = d.sent(), [4, fe(s, function(v) {
              return N(v())
            }, r)];
          case 2:
            return u = d.sent(), [4, Promise.all(u)];
          case 3:
            for (l = d.sent(), f = {}, c = 0; c < i.length; ++c) f[i[c]] = l[c];
            return [2, f]
        }
      })
    })
  }
}

function Fe() {
  var e = window,
    n = navigator;
  return x(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in n, "msPointerEnabled" in n]) >= 4
}

function on() {
  var e = window,
    n = navigator;
  return x(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in n, "msSaveBlob" in n]) >= 3 && !Fe()
}

function j() {
  var e = window,
    n = navigator;
  return x(["webkitPersistentStorage" in n, "webkitTemporaryStorage" in n, (n.vendor || "").indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
}

function I() {
  var e = window,
    n = navigator;
  return x(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, n.vendor.indexOf("Apple") === 0, "RGBColor" in e, "WebKitMediaKeys" in e]) >= 4
}

function ae() {
  var e = window,
    n = e.HTMLElement,
    t = e.Document;
  return x(["safari" in e, !("ongestureend" in e), !("TouchEvent" in e), !("orientation" in e), n && !("autocapitalize" in n.prototype), t && "pointerLockElement" in t.prototype]) >= 4
}

function H() {
  var e = window;
  return nn(e.print) && String(e.browser) === "[object WebPageNamespace]"
}

function Ie() {
  var e, n, t = window;
  return x(["buildID" in navigator, "MozAppearance" in ((n = (e = document.documentElement) === null || e === void 0 ? void 0 : e.style) !== null && n !== void 0 ? n : {}), "onmozfullscreenchange" in t, "mozInnerScreenX" in t, "CSSMozDocumentRule" in t, "CanvasCaptureMediaStream" in t]) >= 4
}

function cn() {
  var e = window;
  return x([!("MediaSettingsRange" in e), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3
}

function un() {
  var e = window,
    n = e.URLPattern;
  return x(["union" in Set.prototype, "Iterator" in e, n && "hasRegExpGroups" in n.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3
}

function sn() {
  var e = window;
  return x(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
}

function X() {
  var e = window,
    n = navigator,
    t = e.CSS,
    r = e.HTMLButtonElement;
  return x([!("getStorageUpdates" in n), r && "popover" in r.prototype, "CSSCounterStyleRule" in e, t.supports("font-size-adjust: ex-height 0.5"), t.supports("text-transform: full-width")]) >= 4
}

function ln() {
  if (navigator.platform === "iPad") return !0;
  var e = screen,
    n = e.width / e.height;
  return x(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, n > .65 && n < 1.53]) >= 2
}

function fn() {
  var e = document;
  return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
}

function dn() {
  var e = document;
  return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e)
}

function ie() {
  var e = j(),
    n = Ie(),
    t = window,
    r = navigator,
    i = "connection";
  return e ? x([!("SharedWorker" in t), r[i] && "ontypechange" in r[i], !("sinkId" in new Audio)]) >= 2 : n ? x(["onorientationchange" in t, "orientation" in t, /android/i.test(r.appVersion)]) >= 2 : !1
}

function vn() {
  var e = navigator,
    n = window,
    t = Audio.prototype,
    r = n.visualViewport;
  return x(["srLatency" in t, "srChannelCount" in t, "devicePosture" in e, r && "segments" in r, "getTextInformation" in Image.prototype]) >= 3
}

function mn() {
  return gn() ? -4 : hn()
}

function hn() {
  var e = window,
    n = e.OfflineAudioContext || e.webkitOfflineAudioContext;
  if (!n) return -2;
  if (pn()) return -1;
  var t = 4500,
    r = 5e3,
    i = new n(1, r, 44100),
    a = i.createOscillator();
  a.type = "triangle", a.frequency.value = 1e4;
  var o = i.createDynamicsCompressor();
  o.threshold.value = -50, o.knee.value = 40, o.ratio.value = 12, o.attack.value = 0, o.release.value = .25, a.connect(o), o.connect(i.destination), a.start(0);
  var s = bn(i),
    u = s[0],
    l = s[1],
    f = N(u.then(function(c) {
      return yn(c.getChannelData(0).subarray(t))
    }, function(c) {
      if (c.name === "timeout" || c.name === "suspended") return -3;
      throw c
    }));
  return function() {
    return l(), f
  }
}

function pn() {
  return I() && !ae() && !sn()
}

function gn() {
  return I() && X() && H() || j() && vn() && un()
}

function bn(e) {
  var n = 3,
    t = 500,
    r = 500,
    i = 5e3,
    a = function() {},
    o = new Promise(function(s, u) {
      var l = !1,
        f = 0,
        c = 0;
      e.oncomplete = function(b) {
        return s(b.renderedBuffer)
      };
      var d = function() {
          setTimeout(function() {
            return u(me("timeout"))
          }, Math.min(r, c + i - Date.now()))
        },
        v = function() {
          try {
            var b = e.startRendering();
            switch (Ce(b) && N(b), e.state) {
              case "running":
                c = Date.now(), l && d();
                break;
              case "suspended":
                document.hidden || f++, l && f >= n ? u(me("suspended")) : setTimeout(v, t);
                break
            }
          } catch (w) {
            u(w)
          }
        };
      v(), a = function() {
        l || (l = !0, c > 0 && d())
      }
    });
  return [o, a]
}

function yn(e) {
  for (var n = 0, t = 0; t < e.length; ++t) n += Math.abs(e[t]);
  return n
}

function me(e) {
  var n = new Error(e);
  return n.name = e, n
}

function Pe(e, n, t) {
  var r, i, a;
  return t === void 0 && (t = 50), P(this, void 0, void 0, function() {
    var o, s;
    return R(this, function(u) {
      switch (u.label) {
        case 0:
          o = document, u.label = 1;
        case 1:
          return o.body ? [3, 3] : [4, z(t)];
        case 2:
          return u.sent(), [3, 1];
        case 3:
          s = o.createElement("iframe"), u.label = 4;
        case 4:
          return u.trys.push([4, , 10, 11]), [4, new Promise(function(l, f) {
            var c = !1,
              d = function() {
                c = !0, l()
              },
              v = function(S) {
                c = !0, f(S)
              };
            s.onload = d, s.onerror = v;
            var b = s.style;
            b.setProperty("display", "block", "important"), b.position = "absolute", b.top = "0", b.left = "0", b.visibility = "hidden", n && "srcdoc" in s ? s.srcdoc = n : s.src = "about:blank", o.body.appendChild(s);
            var w = function() {
              var S, m;
              c || (((m = (S = s.contentWindow) === null || S === void 0 ? void 0 : S.document) === null || m === void 0 ? void 0 : m.readyState) === "complete" ? d() : setTimeout(w, 10))
            };
            w()
          })];
        case 5:
          u.sent(), u.label = 6;
        case 6:
          return !((i = (r = s.contentWindow) === null || r === void 0 ? void 0 : r.document) === null || i === void 0) && i.body ? [3, 8] : [4, z(t)];
        case 7:
          return u.sent(), [3, 6];
        case 8:
          return [4, e(s, s.contentWindow)];
        case 9:
          return [2, u.sent()];
        case 10:
          return (a = s.parentNode) === null || a === void 0 || a.removeChild(s), [7];
        case 11:
          return [2]
      }
    })
  })
}

function wn(e) {
  for (var n = ze(e), t = n[0], r = n[1], i = document.createElement(t ?? "div"), a = 0, o = Object.keys(r); a < o.length; a++) {
    var s = o[a],
      u = r[s].join(" ");
    s === "style" ? Sn(i.style, u) : i.setAttribute(s, u)
  }
  return i
}

function Sn(e, n) {
  for (var t = 0, r = n.split(";"); t < r.length; t++) {
    var i = r[t],
      a = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(i);
    if (a) {
      var o = a[1],
        s = a[2],
        u = a[4];
      e.setProperty(o, s, u || "")
    }
  }
}

function Ln() {
  for (var e = window;;) {
    var n = e.parent;
    if (!n || n === e) return !1;
    try {
      if (n.location.origin !== e.location.origin) return !0
    } catch (t) {
      if (t instanceof Error && t.name === "SecurityError") return !0;
      throw t
    }
    e = n
  }
}
var kn = "mmMwWLliI0O&1",
  xn = "48px",
  Y = ["monospace", "sans-serif", "serif"],
  he = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function Cn() {
  var e = this;
  return Pe(function(n, t) {
    var r = t.document;
    return P(e, void 0, void 0, function() {
      var i, a, o, s, u, l, f, c, d, v, b, w;
      return R(this, function(S) {
        for (i = r.body, i.style.fontSize = xn, a = r.createElement("div"), a.style.setProperty("visibility", "hidden", "important"), o = {}, s = {}, u = function(m) {
            var y = r.createElement("span"),
              L = y.style;
            return L.position = "absolute", L.top = "0", L.left = "0", L.fontFamily = m, y.textContent = kn, a.appendChild(y), y
          }, l = function(m, y) {
            return u("'".concat(m, "',").concat(y))
          }, f = function() {
            return Y.map(u)
          }, c = function() {
            for (var m = {}, y = function(M) {
                m[M] = Y.map(function(G) {
                  return l(M, G)
                })
              }, L = 0, A = he; L < A.length; L++) {
              var Z = A[L];
              y(Z)
            }
            return m
          }, d = function(m) {
            return Y.some(function(y, L) {
              return m[L].offsetWidth !== o[y] || m[L].offsetHeight !== s[y]
            })
          }, v = f(), b = c(), i.appendChild(a), w = 0; w < Y.length; w++) o[Y[w]] = v[w].offsetWidth, s[Y[w]] = v[w].offsetHeight;
        return [2, he.filter(function(m) {
          return d(b[m])
        })]
      })
    })
  })
}

function Vn() {
  var e = navigator.plugins;
  if (e) {
    for (var n = [], t = 0; t < e.length; ++t) {
      var r = e[t];
      if (r) {
        for (var i = [], a = 0; a < r.length; ++a) {
          var o = r[a];
          i.push({
            type: o.type,
            suffixes: o.suffixes
          })
        }
        n.push({
          name: r.name,
          description: r.description,
          mimeTypes: i
        })
      }
    }
    return n
  }
}

function Fn() {
  return In(Zn())
}

function In(e) {
  var n, t = !1,
    r, i, a = Pn(),
    o = a[0],
    s = a[1];
  return Rn(o, s) ? (t = An(s), e ? r = i = "skipped" : (n = Wn(o, s), r = n[0], i = n[1])) : r = i = "unsupported", {
    winding: t,
    geometry: r,
    text: i
  }
}

function Pn() {
  var e = document.createElement("canvas");
  return e.width = 1, e.height = 1, [e, e.getContext("2d")]
}

function Rn(e, n) {
  return !!(n && e.toDataURL)
}

function An(e) {
  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd")
}

function Wn(e, n) {
  Mn(e, n);
  var t = K(e),
    r = K(e);
  if (t !== r) return ["unstable", "unstable"];
  En(e, n);
  var i = K(e);
  return [i, t]
}

function Mn(e, n) {
  e.width = 240, e.height = 60, n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(100, 1, 62, 20), n.fillStyle = "#069", n.font = '11pt "Times New Roman"';
  var t = "Cwm fjordbank gly ".concat("😃");
  n.fillText(t, 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText(t, 4, 45)
}

function En(e, n) {
  e.width = 122, e.height = 110, n.globalCompositeOperation = "multiply";
  for (var t = 0, r = [
      ["#f2f", 40, 40],
      ["#2ff", 80, 40],
      ["#ff2", 60, 80]
    ]; t < r.length; t++) {
    var i = r[t],
      a = i[0],
      o = i[1],
      s = i[2];
    n.fillStyle = a, n.beginPath(), n.arc(o, s, 40, 0, Math.PI * 2, !0), n.closePath(), n.fill()
  }
  n.fillStyle = "#f9c", n.arc(60, 60, 60, 0, Math.PI * 2, !0), n.arc(60, 60, 20, 0, Math.PI * 2, !0), n.fill("evenodd")
}

function K(e) {
  return e.toDataURL()
}

function Zn() {
  return I() && X() && H()
}

function Gn() {
  var e = navigator,
    n = 0,
    t;
  e.maxTouchPoints !== void 0 ? n = re(e.maxTouchPoints) : e.msMaxTouchPoints !== void 0 && (n = e.msMaxTouchPoints);
  try {
    document.createEvent("TouchEvent"), t = !0
  } catch {
    t = !1
  }
  var r = "ontouchstart" in window;
  return {
    maxTouchPoints: n,
    touchEvent: t,
    touchStart: r
  }
}

function Tn() {
  return navigator.oscpu
}

function Yn() {
  var e = navigator,
    n = [],
    t = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
  if (t !== void 0 && n.push([t]), Array.isArray(e.languages)) j() && cn() || n.push(e.languages);
  else if (typeof e.languages == "string") {
    var r = e.languages;
    r && n.push(r.split(","))
  }
  return n
}

function Bn() {
  return window.screen.colorDepth
}

function Nn() {
  return W(F(navigator.deviceMemory), void 0)
}

function jn() {
  if (!(I() && X() && H())) return Hn()
}

function Hn() {
  var e = screen,
    n = function(r) {
      return W(re(r), null)
    },
    t = [n(e.width), n(e.height)];
  return t.sort().reverse(), t
}
var Xn = 2500,
  Dn = 10,
  J, Q;

function On() {
  if (Q === void 0) {
    var e = function() {
      var n = ne();
      te(n) ? Q = setTimeout(e, Xn) : (J = n, Q = void 0)
    };
    e()
  }
}

function Jn() {
  var e = this;
  return On(),
    function() {
      return P(e, void 0, void 0, function() {
        var n;
        return R(this, function(t) {
          switch (t.label) {
            case 0:
              return n = ne(), te(n) ? J ? [2, ke([], J, !0)] : fn() ? [4, dn()] : [3, 2] : [3, 2];
            case 1:
              t.sent(), n = ne(), t.label = 2;
            case 2:
              return te(n) || (J = n), [2, n]
          }
        })
      })
    }
}

function zn() {
  var e = this;
  if (I() && X() && H()) return function() {
    return Promise.resolve(void 0)
  };
  var n = Jn();
  return function() {
    return P(e, void 0, void 0, function() {
      var t, r;
      return R(this, function(i) {
        switch (i.label) {
          case 0:
            return [4, n()];
          case 1:
            return t = i.sent(), r = function(a) {
              return a === null ? null : Ve(a, Dn)
            }, [2, [r(t[0]), r(t[1]), r(t[2]), r(t[3])]]
        }
      })
    })
  }
}

function ne() {
  var e = screen;
  return [W(F(e.availTop), null), W(F(e.width) - F(e.availWidth) - W(F(e.availLeft), 0), null), W(F(e.height) - F(e.availHeight) - W(F(e.availTop), 0), null), W(F(e.availLeft), null)]
}

function te(e) {
  for (var n = 0; n < 4; ++n)
    if (e[n]) return !1;
  return !0
}

function Un() {
  return W(re(navigator.hardwareConcurrency), void 0)
}

function _n() {
  var e, n = (e = window.Intl) === null || e === void 0 ? void 0 : e.DateTimeFormat;
  if (n) {
    var t = new n().resolvedOptions().timeZone;
    if (t) return t
  }
  var r = -Kn();
  return "UTC".concat(r >= 0 ? "+" : "").concat(r)
}

function Kn() {
  var e = new Date().getFullYear();
  return Math.max(F(new Date(e, 0, 1).getTimezoneOffset()), F(new Date(e, 6, 1).getTimezoneOffset()))
}

function Qn() {
  try {
    return !!window.sessionStorage
  } catch {
    return !0
  }
}

function qn() {
  try {
    return !!window.localStorage
  } catch {
    return !0
  }
}

function $n() {
  if (!(Fe() || on())) try {
    return !!window.indexedDB
  } catch {
    return !0
  }
}

function et() {
  return !!window.openDatabase
}

function nt() {
  return navigator.cpuClass
}

function tt() {
  var e = navigator.platform;
  return e === "MacIntel" && I() && !ae() ? ln() ? "iPad" : "iPhone" : e
}

function rt() {
  return navigator.vendor || ""
}

function at() {
  for (var e = [], n = 0, t = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; n < t.length; n++) {
    var r = t[n],
      i = window[r];
    i && typeof i == "object" && e.push(r)
  }
  return e.sort()
}

function it() {
  var e = document;
  try {
    e.cookie = "cookietest=1; SameSite=Strict;";
    var n = e.cookie.indexOf("cookietest=") !== -1;
    return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", n
  } catch {
    return !1
  }
}

function ot() {
  var e = atob;
  return {
    abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', e("I0JveC1CYW5uZXItYWRz")],
    abpvn: [".quangcao", "#mobileCatfish", e("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
    adBlockFinland: [".mainostila", e("LnNwb25zb3JpdA=="), ".ylamainos", e("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
    adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", e("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
    adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", e("LmhlYWRlci1ibG9ja2VkLWFk"), e("I2FkX2Jsb2NrZXI=")],
    adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
    adGuardBase: [".BetterJsPopOverlay", e("I2FkXzMwMFgyNTA="), e("I2Jhbm5lcmZsb2F0MjI="), e("I2NhbXBhaWduLWJhbm5lcg=="), e("I0FkLUNvbnRlbnQ=")],
    adGuardChinese: [e("LlppX2FkX2FfSA=="), e("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", e("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), e("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
    adGuardFrench: ["#pavePub", e("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", e("LmFkc19iYW4=")],
    adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
    adGuardJapanese: ["#kauli_yad_1", e("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), e("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), e("LmFkZ29vZ2xl"), e("Ll9faXNib29zdFJldHVybkFk")],
    adGuardMobile: [e("YW1wLWF1dG8tYWRz"), e("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", e("I2FkX2ludmlld19hcmVh")],
    adGuardRussian: [e("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), e("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', e("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
    adGuardSocial: [e("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), e("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
    adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
    adGuardTrackingProtection: ["#qoo-counter", e("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), e("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), e("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
    adGuardTurkish: ["#backkapat", e("I3Jla2xhbWk="), e("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), e("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), e("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
    bulgarian: [e("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
    easyList: [".yb-floorad", e("LndpZGdldF9wb19hZHNfd2lkZ2V0"), e("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", e("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
    easyListChina: [e("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), e("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
    easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", e("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
    easyListCzechSlovak: ["#onlajny-stickers", e("I3Jla2xhbW5pLWJveA=="), e("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", e("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
    easyListDutch: [e("I2FkdmVydGVudGll"), e("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", e("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
    easyListGermany: ["#SSpotIMPopSlider", e("LnNwb25zb3JsaW5rZ3J1ZW4="), e("I3dlcmJ1bmdza3k="), e("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), e("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
    easyListItaly: [e("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", e("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
    easyListLithuania: [e("LnJla2xhbW9zX3RhcnBhcw=="), e("LnJla2xhbW9zX251b3JvZG9z"), e("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), e("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), e("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
    estonian: [e("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
    fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
    fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
    fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
    fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
    frellwitSwedish: [e("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), e("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", e("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
    greekAdBlock: [e("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), e("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), e("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
    hungarian: ["#cemp_doboz", ".optimonk-iframe-container", e("LmFkX19tYWlu"), e("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
    iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
    icelandicAbp: [e("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
    latvian: [e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
    listKr: [e("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), e("I2xpdmVyZUFkV3JhcHBlcg=="), e("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), e("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
    listeAr: [e("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", e("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), e("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), e("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
    listeFr: [e("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), e("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), e("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
    officialPolish: ["#ceneo-placeholder-ceneo-12", e("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), e("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), e("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), e("ZGl2I3NrYXBpZWNfYWQ=")],
    ro: [e("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), e("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), e("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
    ruAd: [e("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), e("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), e("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
    thaiAds: ["a[href*=macau-uta-popup]", e("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), e("LmFkczMwMHM="), ".bumq", ".img-kosana"],
    webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", e("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
  }
}

function ct(e) {
  var n = e === void 0 ? {} : e,
    t = n.debug;
  return P(this, void 0, void 0, function() {
    var r, i, a, o, s, u;
    return R(this, function(l) {
      switch (l.label) {
        case 0:
          return ut() ? (r = ot(), i = Object.keys(r), a = (u = []).concat.apply(u, i.map(function(f) {
            return r[f]
          })), [4, st(a)]) : [2, void 0];
        case 1:
          return o = l.sent(), t && lt(r, o), s = i.filter(function(f) {
            var c = r[f],
              d = x(c.map(function(v) {
                return o[v]
              }));
            return d > c.length * .6
          }), s.sort(), [2, s]
      }
    })
  })
}

function ut() {
  return I() || ie()
}

function st(e) {
  var n;
  return P(this, void 0, void 0, function() {
    var t, r, i, a, u, o, s, u;
    return R(this, function(l) {
      switch (l.label) {
        case 0:
          for (t = document, r = t.createElement("div"), i = new Array(e.length), a = {}, pe(r), u = 0; u < e.length; ++u) o = wn(e[u]), o.tagName === "DIALOG" && o.show(), s = t.createElement("div"), pe(s), s.appendChild(o), r.appendChild(s), i[u] = o;
          l.label = 1;
        case 1:
          return t.body ? [3, 3] : [4, z(50)];
        case 2:
          return l.sent(), [3, 1];
        case 3:
          t.body.appendChild(r);
          try {
            for (u = 0; u < e.length; ++u) i[u].offsetParent || (a[e[u]] = !0)
          } finally {
            (n = r.parentNode) === null || n === void 0 || n.removeChild(r)
          }
          return [2, a]
      }
    })
  })
}

function pe(e) {
  e.style.setProperty("visibility", "hidden", "important"), e.style.setProperty("display", "block", "important")
}

function lt(e, n) {
  for (var t = "DOM blockers debug:\n```", r = 0, i = Object.keys(e); r < i.length; r++) {
    var a = i[r];
    t += `
`.concat(a, ":");
    for (var o = 0, s = e[a]; o < s.length; o++) {
      var u = s[o];
      t += `
  `.concat(n[u] ? "🚫" : "➡️", " ").concat(u)
    }
  }
  console.log("".concat(t, "\n```"))
}

function ft() {
  for (var e = 0, n = ["rec2020", "p3", "srgb"]; e < n.length; e++) {
    var t = n[e];
    if (matchMedia("(color-gamut: ".concat(t, ")")).matches) return t
  }
}

function dt() {
  if (ge("inverted")) return !0;
  if (ge("none")) return !1
}

function ge(e) {
  return matchMedia("(inverted-colors: ".concat(e, ")")).matches
}

function vt() {
  if (be("active")) return !0;
  if (be("none")) return !1
}

function be(e) {
  return matchMedia("(forced-colors: ".concat(e, ")")).matches
}
var mt = 100;

function ht() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (var e = 0; e <= mt; ++e)
      if (matchMedia("(max-monochrome: ".concat(e, ")")).matches) return e;
    throw new Error("Too high value")
  }
}

function pt() {
  if (B("no-preference")) return 0;
  if (B("high") || B("more")) return 1;
  if (B("low") || B("less")) return -1;
  if (B("forced")) return 10
}

function B(e) {
  return matchMedia("(prefers-contrast: ".concat(e, ")")).matches
}

function gt() {
  if (ye("reduce")) return !0;
  if (ye("no-preference")) return !1
}

function ye(e) {
  return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches
}

function bt() {
  if (we("reduce")) return !0;
  if (we("no-preference")) return !1
}

function we(e) {
  return matchMedia("(prefers-reduced-transparency: ".concat(e, ")")).matches
}

function yt() {
  if (Se("high")) return !0;
  if (Se("standard")) return !1
}

function Se(e) {
  return matchMedia("(dynamic-range: ".concat(e, ")")).matches
}
var h = Math,
  k = function() {
    return 0
  };

function wt() {
  var e = h.acos || k,
    n = h.acosh || k,
    t = h.asin || k,
    r = h.asinh || k,
    i = h.atanh || k,
    a = h.atan || k,
    o = h.sin || k,
    s = h.sinh || k,
    u = h.cos || k,
    l = h.cosh || k,
    f = h.tan || k,
    c = h.tanh || k,
    d = h.exp || k,
    v = h.expm1 || k,
    b = h.log1p || k,
    w = function(p) {
      return h.pow(h.PI, p)
    },
    S = function(p) {
      return h.log(p + h.sqrt(p * p - 1))
    },
    m = function(p) {
      return h.log(p + h.sqrt(p * p + 1))
    },
    y = function(p) {
      return h.log((1 + p) / (1 - p)) / 2
    },
    L = function(p) {
      return h.exp(p) - 1 / h.exp(p) / 2
    },
    A = function(p) {
      return (h.exp(p) + 1 / h.exp(p)) / 2
    },
    Z = function(p) {
      return h.exp(p) - 1
    },
    M = function(p) {
      return (h.exp(2 * p) - 1) / (h.exp(2 * p) + 1)
    },
    G = function(p) {
      return h.log(1 + p)
    };
  return {
    acos: e(.12312423423423424),
    acosh: n(1e308),
    acoshPf: S(1e154),
    asin: t(.12312423423423424),
    asinh: r(1),
    asinhPf: m(1),
    atanh: i(.5),
    atanhPf: y(.5),
    atan: a(.5),
    sin: o(-1e300),
    sinh: s(1),
    sinhPf: L(1),
    cos: u(10.000000000123),
    cosh: l(1),
    coshPf: A(1),
    tan: f(-1e300),
    tanh: c(1),
    tanhPf: M(1),
    exp: d(1),
    expm1: v(1),
    expm1Pf: Z(1),
    log1p: b(10),
    log1pPf: G(10),
    powPI: w(-100)
  }
}
var St = "mmMwWLliI0fiflO&1",
  q = {
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

function Lt() {
  return kt(function(e, n) {
    for (var t = {}, r = {}, i = 0, a = Object.keys(q); i < a.length; i++) {
      var o = a[i],
        s = q[o],
        u = s[0],
        l = u === void 0 ? {} : u,
        f = s[1],
        c = f === void 0 ? St : f,
        d = e.createElement("span");
      d.textContent = c, d.style.whiteSpace = "nowrap";
      for (var v = 0, b = Object.keys(l); v < b.length; v++) {
        var w = b[v],
          S = l[w];
        S !== void 0 && (d.style[w] = S)
      }
      t[o] = d, n.append(e.createElement("br"), d)
    }
    for (var m = 0, y = Object.keys(q); m < y.length; m++) {
      var o = y[m];
      r[o] = t[o].getBoundingClientRect().width
    }
    return r
  })
}

function kt(e, n) {
  return n === void 0 && (n = 4e3), Pe(function(t, r) {
    var i = r.document,
      a = i.body,
      o = a.style;
    o.width = "".concat(n, "px"), o.webkitTextSizeAdjust = o.textSizeAdjust = "none", j() ? a.style.zoom = "".concat(1 / r.devicePixelRatio) : I() && (a.style.zoom = "reset");
    var s = i.createElement("div");
    return s.textContent = ke([], Array(n / 20 << 0), !0).map(function() {
      return "word"
    }).join(" "), a.appendChild(s), e(i, a)
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
}

function xt() {
  return navigator.pdfViewerEnabled
}

function Ct() {
  var e = new Float32Array(1),
    n = new Uint8Array(e.buffer);
  return e[0] = 1 / 0, e[0] = e[0] - e[0], n[3]
}

function Vt() {
  var e = window.ApplePaySession;
  if (typeof(e == null ? void 0 : e.canMakePayments) != "function") return -1;
  if (Ft()) return -3;
  try {
    return e.canMakePayments() ? 1 : 0
  } catch (n) {
    return It(n)
  }
}
var Ft = Ln;

function It(e) {
  if (e instanceof Error && e.name === "InvalidAccessError" && /\bfrom\b.*\binsecure\b/i.test(e.message)) return -2;
  throw e
}

function Pt() {
  var e, n = document.createElement("a"),
    t = (e = n.attributionSourceId) !== null && e !== void 0 ? e : n.attributionsourceid;
  return t === void 0 ? void 0 : String(t)
}
var Re = -1,
  Ae = -2,
  Rt = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
  At = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  Wt = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
  Mt = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
  We = "WEBGL_debug_renderer_info",
  Et = "WEBGL_polygon_mode";

function Zt(e) {
  var n, t, r, i, a, o, s = e.cache,
    u = Me(s);
  if (!u) return Re;
  if (!Ze(u)) return Ae;
  var l = Ee() ? null : u.getExtension(We);
  return {
    version: ((n = u.getParameter(u.VERSION)) === null || n === void 0 ? void 0 : n.toString()) || "",
    vendor: ((t = u.getParameter(u.VENDOR)) === null || t === void 0 ? void 0 : t.toString()) || "",
    vendorUnmasked: l ? (r = u.getParameter(l.UNMASKED_VENDOR_WEBGL)) === null || r === void 0 ? void 0 : r.toString() : "",
    renderer: ((i = u.getParameter(u.RENDERER)) === null || i === void 0 ? void 0 : i.toString()) || "",
    rendererUnmasked: l ? (a = u.getParameter(l.UNMASKED_RENDERER_WEBGL)) === null || a === void 0 ? void 0 : a.toString() : "",
    shadingLanguageVersion: ((o = u.getParameter(u.SHADING_LANGUAGE_VERSION)) === null || o === void 0 ? void 0 : o.toString()) || ""
  }
}

function Gt(e) {
  var n = e.cache,
    t = Me(n);
  if (!t) return Re;
  if (!Ze(t)) return Ae;
  var r = t.getSupportedExtensions(),
    i = t.getContextAttributes(),
    a = [],
    o = [],
    s = [],
    u = [],
    l = [];
  if (i)
    for (var f = 0, c = Object.keys(i); f < c.length; f++) {
      var d = c[f];
      o.push("".concat(d, "=").concat(i[d]))
    }
  for (var v = Le(t), b = 0, w = v; b < w.length; b++) {
    var S = w[b],
      m = t[S];
    s.push("".concat(S, "=").concat(m).concat(Rt.has(m) ? "=".concat(t.getParameter(m)) : ""))
  }
  if (r)
    for (var y = 0, L = r; y < L.length; y++) {
      var A = L[y];
      if (!(A === We && Ee() || A === Et && Bt())) {
        var Z = t.getExtension(A);
        if (!Z) {
          a.push(A);
          continue
        }
        for (var M = 0, G = Le(Z); M < G.length; M++) {
          var S = G[M],
            m = Z[S];
          u.push("".concat(S, "=").concat(m).concat(At.has(m) ? "=".concat(t.getParameter(m)) : ""))
        }
      }
    }
  for (var p = 0, oe = Wt; p < oe.length; p++)
    for (var ce = oe[p], _ = 0, ue = Mt; _ < ue.length; _++) {
      var se = ue[_],
        Be = Tt(t, ce, se);
      l.push("".concat(ce, ".").concat(se, "=").concat(Be.join(",")))
    }
  return u.sort(), s.sort(), {
    contextAttributes: o,
    parameters: s,
    shaderPrecisions: l,
    extensions: r,
    extensionParameters: u,
    unsupportedExtensions: a
  }
}

function Me(e) {
  if (e.webgl) return e.webgl.context;
  var n = document.createElement("canvas"),
    t;
  n.addEventListener("webglCreateContextError", function() {
    return t = void 0
  });
  for (var r = 0, i = ["webgl", "experimental-webgl"]; r < i.length; r++) {
    var a = i[r];
    try {
      t = n.getContext(a)
    } catch {}
    if (t) break
  }
  return e.webgl = {
    context: t
  }, t
}

function Tt(e, n, t) {
  var r = e.getShaderPrecisionFormat(e[n], e[t]);
  return r ? [r.rangeMin, r.rangeMax, r.precision] : []
}

function Le(e) {
  var n = Object.keys(e.__proto__);
  return n.filter(Yt)
}

function Yt(e) {
  return typeof e == "string" && !e.match(/[^A-Z0-9_x]/)
}

function Ee() {
  return Ie()
}

function Bt() {
  return j() || I()
}

function Ze(e) {
  return typeof e.getParameter == "function"
}

function Nt() {
  var e = ie() || I();
  if (!e) return -2;
  if (!window.AudioContext) return -1;
  var n = new AudioContext().baseLatency;
  return n == null ? -1 : isFinite(n) ? n : -3
}

function jt() {
  if (!window.Intl) return -1;
  var e = window.Intl.DateTimeFormat;
  if (!e) return -2;
  var n = e().resolvedOptions().locale;
  return !n && n !== "" ? -3 : n
}
var Ht = {
  fonts: Cn,
  domBlockers: ct,
  fontPreferences: Lt,
  audio: mn,
  screenFrame: zn,
  canvas: Fn,
  osCpu: Tn,
  languages: Yn,
  colorDepth: Bn,
  deviceMemory: Nn,
  screenResolution: jn,
  hardwareConcurrency: Un,
  timezone: _n,
  sessionStorage: Qn,
  localStorage: qn,
  indexedDB: $n,
  openDatabase: et,
  cpuClass: nt,
  platform: tt,
  plugins: Vn,
  touchSupport: Gn,
  vendor: rt,
  vendorFlavors: at,
  cookiesEnabled: it,
  colorGamut: ft,
  invertedColors: dt,
  forcedColors: vt,
  monochrome: ht,
  contrast: pt,
  reducedMotion: gt,
  reducedTransparency: bt,
  hdr: yt,
  math: wt,
  pdfViewerEnabled: xt,
  architecture: Ct,
  applePay: Vt,
  privateClickMeasurement: Pt,
  audioBaseLatency: Nt,
  dateTimeLocale: jt,
  webGlBasics: Zt,
  webGlExtensions: Gt
};

function Xt(e) {
  return an(Ht, e, [])
}
var Dt = "$ if upgrade to Pro: https://fpjs.dev/pro";

function Ot(e) {
  var n = Jt(e),
    t = zt(n);
  return {
    score: n,
    comment: Dt.replace(/\$/g, "".concat(t))
  }
}

function Jt(e) {
  if (ie()) return .4;
  if (I()) return ae() && !(X() && H()) ? .5 : .3;
  var n = "value" in e.platform ? e.platform.value : "";
  return /^Win/.test(n) ? .6 : /^Mac/.test(n) ? .5 : .7
}

function zt(e) {
  return Ve(.99 + .01 * e, 1e-4)
}

function Ut(e) {
  for (var n = "", t = 0, r = Object.keys(e).sort(); t < r.length; t++) {
    var i = r[t],
      a = e[i],
      o = "error" in a ? "error" : JSON.stringify(a.value);
    n += "".concat(n ? "|" : "").concat(i.replace(/([:|\\])/g, "\\$1"), ":").concat(o)
  }
  return n
}

function Ge(e) {
  return JSON.stringify(e, function(n, t) {
    return t instanceof Error ? en(t) : t
  }, 2)
}

function Te(e) {
  return $e(Ut(e))
}

function _t(e) {
  var n, t = Ot(e);
  return {
    get visitorId() {
      return n === void 0 && (n = Te(this.components)), n
    },
    set visitorId(r) {
      n = r
    },
    confidence: t,
    components: e,
    version: xe
  }
}

function Kt(e) {
  return e === void 0 && (e = 50), De(e, e * 2)
}

function Qt(e, n) {
  var t = Date.now();
  return {
    get: function(r) {
      return P(this, void 0, void 0, function() {
        var i, a, o;
        return R(this, function(s) {
          switch (s.label) {
            case 0:
              return i = Date.now(), [4, e()];
            case 1:
              return a = s.sent(), o = _t(a), (n || r != null && r.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(o.version, `
userAgent: `).concat(navigator.userAgent, `
timeBetweenLoadAndGet: `).concat(i - t, `
visitorId: `).concat(o.visitorId, `
components: `).concat(Ge(a), "\n```")), [2, o]
          }
        })
      })
    }
  }
}

function qt() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    var e = new XMLHttpRequest;
    e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(xe, "/npm-monitoring"), !0), e.send()
  } catch (n) {
    console.error(n)
  }
}

function $t(e) {
  var n;
  return e === void 0 && (e = {}), P(this, void 0, void 0, function() {
    var t, r, i;
    return R(this, function(a) {
      switch (a.label) {
        case 0:
          return (!((n = e.monitoring) !== null && n !== void 0) || n) && qt(), t = e.delayFallback, r = e.debug, [4, Kt(t)];
        case 1:
          return a.sent(), i = Xt({
            cache: {},
            debug: r
          }), [2, Qt(i, r)]
      }
    })
  })
}
var Ye = {
  load: $t,
  hashComponents: Te,
  componentsToDebugString: Ge
};
let $ = null,
  U;
async function er() {
  return $ || ($ = Ye.load()), $
}
async function lr() {
  return U || nr().then(e => e.visitorId)
}
async function nr() {
  var u;
  const n = await (await er()).get();
  let t = n.components;
  const r = He(),
    i = navigator.userAgent.toLowerCase(),
    a = i.includes("iphone"),
    o = i.includes("macintosh");
  if (a || o) t = n.components;
  else if (r === "Chrome") {
    const {
      languages: l,
      fontPreferences: f,
      ...c
    } = n.components;
    t = c
  } else if (r === "Firefox") {
    const {
      fonts: l,
      languages: f,
      dateTimeLocale: c,
      ...d
    } = n.components;
    t = d
  } else if (r === "Brave") {
    const {
      fonts: l,
      audio: f,
      canvas: c,
      hardwareConcurrency: d,
      plugins: v,
      deviceMemory: b,
      languages: w,
      dateTimeLocale: S,
      fontPreferences: m,
      ...y
    } = n.components;
    t = {
      ...y,
      plugins: ((u = v == null ? void 0 : v.value) == null ? void 0 : u.filter(L => L.description.includes(" "))) ?? []
    }
  } else {
    const {
      languages: l,
      fontPreferences: f,
      ...c
    } = n.components;
    t = c
  }
  return U = Ye.hashComponents(t), {
    visitorId: U,
    components: t
  }
}
export {
  ur as P, sr as a, ar as b, or as c, rr as d, cr as e, He as f, lr as g, nr as h, je as i, ir as j, tr as k
};