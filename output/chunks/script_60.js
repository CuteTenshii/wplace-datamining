import "./BmPxkmIj.js";
import {
  h as g,
  a as p,
  b as r,
  A as s
} from "./BBaHVBJx.js";
import {
  i as b
} from "./Bo9Xoflg.js";
import {
  f as n
} from "./YgU2As_C.js";
import {
  r as h
} from "./DntCU8c7.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a2d67f85c31e3fef075f7f6dde31a8af3e9f3dda"
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
var c = s('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  w = s('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, o) {
  let a = h(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var d = g(),
    i = p(d);
  {
    var l = t => {
        var f = c();
        n(f, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...a
        })), r(t, f)
      },
      v = t => {
        var f = w();
        n(f, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...a
        })), r(t, f)
      };
    b(i, t => {
      o.filled ? t(l) : t(v, !1)
    })
  }
  r(e, d)
}
export {
  q as C
};