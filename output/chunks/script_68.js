import "./0aBKUdfq.js";
import {
  l as g,
  f as p,
  a,
  z as i
} from "./DK4l5t5k.js";
import {
  i as c
} from "./PP1qTMI4.js";
import {
  d as f
} from "./D6rJUPqv.js";
import {
  r as h
} from "./MJZQA7cB.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e0127cf3e7a9cd170d72434c8831b6836f9b0e1e"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "0b604767-a614-474c-971d-6769c020229f", e._sentryDebugIdIdentifier = "sentry-dbid-0b604767-a614-474c-971d-6769c020229f")
  } catch {}
})();
var m = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  b = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, r) {
  let s = h(r, ["$$slots", "$$events", "$$legacy", "filled"]);
  var v = g(),
    n = p(v);
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
    c(n, t => {
      r.filled ? t(l) : t(d, !1)
    })
  }
  a(e, v)
}
export {
  q as C
};