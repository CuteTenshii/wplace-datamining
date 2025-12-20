import "./CH7bPVZ-.js";
import {
  h as b,
  a as c,
  b as f,
  o as i
} from "./lghyzkeh.js";
import {
  i as g
} from "./Cwiyy_tF.js";
import {
  b as s
} from "./B41b44vU.js";
import {
  r as p
} from "./9N34mgL9.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "50c680b400b1bbcc8448fbf904e79ce0ac9a7ba9"
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
  let r = p(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var n = b(),
    l = c(n);
  {
    var d = t => {
        var a = h();
        s(a, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...r
        })), f(t, a)
      },
      v = t => {
        var a = w();
        s(a, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...r
        })), f(t, a)
      };
    g(l, t => {
      o.filled ? t(d) : t(v, !1)
    })
  }
  f(e, n)
}
export {
  q as C
};