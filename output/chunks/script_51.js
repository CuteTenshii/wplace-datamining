import "./C4ylbf71.js";
import {
  h as b,
  a as g,
  b as n,
  o as a
} from "./C0b57ARY.js";
import {
  i as p
} from "./iWEMl2TA.js";
import {
  b as d
} from "./DuDgfQFI.js";
import {
  r as h
} from "./BBK6kTAl.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e61b7999f3615b75da925cd12f2c77d312c3e072"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "58177779-b761-4e53-bb03-bd3885f52d06", e._sentryDebugIdIdentifier = "sentry-dbid-58177779-b761-4e53-bb03-bd3885f52d06")
  })()
} catch {}
var c = a('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  w = a('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, o) {
  let f = h(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var s = b(),
    i = g(s);
  {
    var l = t => {
        var r = c();
        d(r, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...f
        })), n(t, r)
      },
      v = t => {
        var r = w();
        d(r, () => ({
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