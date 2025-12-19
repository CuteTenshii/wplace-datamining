import "./Cn2X8y8Q.js";
import {
  h as g,
  a as p,
  b as f,
  o as i
} from "./D6bzUFXP.js";
import {
  i as b
} from "./CM6KRNHN.js";
import {
  b as s
} from "./BJjihu5v.js";
import {
  r as c
} from "./B4WPk0h9.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c74d55667ae34a0f1e0fb08ba8f2c36320dfa773"
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
var h = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  w = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, o) {
  let r = c(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var n = g(),
    l = p(n);
  {
    var d = a => {
        var t = h();
        s(t, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...r
        })), f(a, t)
      },
      v = a => {
        var t = w();
        s(t, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...r
        })), f(a, t)
      };
    b(l, a => {
      o.filled ? a(d) : a(v, !1)
    })
  }
  f(e, n)
}
export {
  q as C
};