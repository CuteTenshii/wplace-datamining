import "./BU-NCdSO.js";
import {
  l as c,
  f as g,
  a,
  z as i
} from "./Cp19uF2I.js";
import {
  i as p
} from "./BcjibeS2.js";
import {
  d as v
} from "./DWqOdrIT.js";
import {
  r as h
} from "./f9FzqMmi.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "f2a47ca0cf31d67c069828387c1df370b5604651"
    };
    var o = new t.Error().stack;
    o && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[o] = "0b604767-a614-474c-971d-6769c020229f", t._sentryDebugIdIdentifier = "sentry-dbid-0b604767-a614-474c-971d-6769c020229f")
  } catch {}
})();
var m = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  w = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(t, o) {
  let s = h(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var f = c(),
    n = g(f);
  {
    var l = r => {
        var e = m();
        v(e, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), a(r, e)
      },
      d = r => {
        var e = w();
        v(e, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), a(r, e)
      };
    p(n, r => {
      o.filled ? r(l) : r(d, !1)
    })
  }
  a(t, f)
}
export {
  q as C
};