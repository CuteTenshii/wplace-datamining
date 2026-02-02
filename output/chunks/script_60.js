import "./DPZdjjZd.js";
import {
  h as g,
  a as p,
  b as d,
  A as a
} from "./Pvk3sEWX.js";
import {
  i as b
} from "./Ds-0gO1P.js";
import {
  f as s
} from "./BmR5KTho.js";
import {
  r as h
} from "./mIF7DKfq.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "79d1d83bf3d0a0f1d4fd38112e69555e6d7fe1e9"
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
var w = a('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  c = a('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, o) {
  let r = h(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var n = g(),
    i = p(n);
  {
    var l = t => {
        var f = w();
        s(f, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...r
        })), d(t, f)
      },
      v = t => {
        var f = c();
        s(f, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...r
        })), d(t, f)
      };
    b(i, t => {
      o.filled ? t(l) : t(v, !1)
    })
  }
  d(e, n)
}
export {
  q as C
};