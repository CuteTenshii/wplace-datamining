import "./DjfvmHUr.js";
import {
  l as c,
  f as g,
  a,
  z as i
} from "./Nz8BX01A.js";
import {
  i as p
} from "./Ur3q-qHz.js";
import {
  d as f
} from "./yObJGNLL.js";
import {
  r as h
} from "./CMuO2jGN.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cfc28652dbc454b56a914780051d7c5b69184636"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "2b167373-5561-4e85-8c09-3c00e271a1fc", e._sentryDebugIdIdentifier = "sentry-dbid-2b167373-5561-4e85-8c09-3c00e271a1fc")
  } catch {}
})();
var m = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  b = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, r) {
  let s = h(r, ["$$slots", "$$events", "$$legacy", "filled"]);
  var v = c(),
    n = g(v);
  {
    var l = t => {
        var o = m();
        f(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), a(t, o)
      },
      d = t => {
        var o = b();
        f(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), a(t, o)
      };
    p(n, t => {
      r.filled ? t(l) : t(d, !1)
    })
  }
  a(e, v)
}
export {
  q as C
};