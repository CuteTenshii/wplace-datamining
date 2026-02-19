import "./kZfU15Ra.js";
import {
  h as g,
  a as p,
  b as n,
  A as d
} from "./Bl5qixfQ.js";
import {
  i as b
} from "./x9vpwYqi.js";
import {
  f as a
} from "./CPfmVeRK.js";
import {
  r as h
} from "./CbYkHxcu.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5813ae56f58e7333550e54b13dee572a566ecd62"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "8bc293d0-1d07-4db8-b3a5-5ef198626ee0", e._sentryDebugIdIdentifier = "sentry-dbid-8bc293d0-1d07-4db8-b3a5-5ef198626ee0")
  })()
} catch {}
var c = d('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  w = d('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, o) {
  let f = h(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var s = g(),
    i = p(s);
  {
    var l = t => {
        var r = c();
        a(r, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...f
        })), n(t, r)
      },
      v = t => {
        var r = w();
        a(r, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...f
        })), n(t, r)
      };
    b(i, t => {
      o.filled ? t(l) : t(v, !1)
    })
  }
  n(e, s)
}
export {
  q as C
};