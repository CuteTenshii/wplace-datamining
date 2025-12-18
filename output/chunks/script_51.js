import "./DQR1M6Or.js";
import {
  h as b,
  a as g,
  b as a,
  o as i
} from "./BdthSYuV.js";
import {
  i as p
} from "./CqpwyTww.js";
import {
  b as s
} from "./nqTt6Pp1.js";
import {
  r as h
} from "./DJaRQTNf.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "98e9f0a798d14aeefb12d06ee236fbfeb3f778fb"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "39a5ca0f-be76-43ff-98c1-529ea3fdaba5", e._sentryDebugIdIdentifier = "sentry-dbid-39a5ca0f-be76-43ff-98c1-529ea3fdaba5")
  })()
} catch {}
var c = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  w = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, o) {
  let r = h(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var n = b(),
    l = g(n);
  {
    var d = f => {
        var t = c();
        s(t, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...r
        })), a(f, t)
      },
      v = f => {
        var t = w();
        s(t, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...r
        })), a(f, t)
      };
    p(l, f => {
      o.filled ? f(d) : f(v, !1)
    })
  }
  a(e, n)
}
export {
  q as C
};