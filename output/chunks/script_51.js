import "./wBKHTQRC.js";
import {
  h as b,
  a as c,
  b as r,
  o as i
} from "./8QS50H2t.js";
import {
  i as g
} from "./CufMTi36.js";
import {
  b as a
} from "./DD9VIMod.js";
import {
  r as p
} from "./DsPKcVJM.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e56bf90e2bb69bf6dd1cbc6ce0cb1afca52af8e3"
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
  let n = p(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var s = b(),
    l = c(s);
  {
    var d = t => {
        var f = h();
        a(f, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n
        })), r(t, f)
      },
      v = t => {
        var f = w();
        a(f, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n
        })), r(t, f)
      };
    g(l, t => {
      o.filled ? t(d) : t(v, !1)
    })
  }
  r(e, s)
}
export {
  q as C
};