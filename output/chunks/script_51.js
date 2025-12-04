import "./CAirFcp8.js";
import {
  h as b,
  a as g,
  b as a,
  o as i
} from "./BW4WXvX9.js";
import {
  i as p
} from "./C6ZS2tVt.js";
import {
  b as s
} from "./Dx8K2xEf.js";
import {
  r as c
} from "./YRRwmdc-.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ada152f6c93ea91d04a55442a56d263a5f091eaf"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "9781feb0-c949-454b-81d5-bf8b07c21305", e._sentryDebugIdIdentifier = "sentry-dbid-9781feb0-c949-454b-81d5-bf8b07c21305")
  })()
} catch {}
var h = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  w = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, o) {
  let r = c(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var n = b(),
    d = g(n);
  {
    var l = t => {
        var f = h();
        s(f, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...r
        })), a(t, f)
      },
      v = t => {
        var f = w();
        s(f, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...r
        })), a(t, f)
      };
    p(d, t => {
      o.filled ? t(l) : t(v, !1)
    })
  }
  a(e, n)
}
export {
  q as C
};