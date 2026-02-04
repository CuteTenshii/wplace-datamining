import "./DXA8xiqF.js";
import {
  h as b,
  a as g,
  b as n,
  A as d
} from "./BxNCv_Ey.js";
import {
  i as p
} from "./zcVxw4u0.js";
import {
  f as a
} from "./DSU-b6Ke.js";
import {
  r as h
} from "./VIHo17in.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "393d80b8e89856a8eed8a9424bbd25f96eb3752b"
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
var w = d('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  c = d('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, o) {
  let f = h(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var s = b(),
    i = g(s);
  {
    var l = t => {
        var r = w();
        a(r, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...f
        })), n(t, r)
      },
      v = t => {
        var r = c();
        a(r, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...f
        })), n(t, r)
      };
    p(i, t => {
      o.filled ? t(l) : t(v, !1)
    })
  }
  n(e, s)
}
export {
  q as C
};