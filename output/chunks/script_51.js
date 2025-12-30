import "./B4ChKoOX.js";
import {
  h as b,
  a as g,
  b as r,
  o as d
} from "./I4j7of_K.js";
import {
  i as p
} from "./DfRO1b1n.js";
import {
  b as a
} from "./BhOu8MeW.js";
import {
  r as h
} from "./GI-gjqpA.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5f26df466977fd01d18eb1a4a8743e0ce83f1b4f"
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
var w = d('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  u = d('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, o) {
  let n = h(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var s = b(),
    i = g(s);
  {
    var l = t => {
        var f = w();
        a(f, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n
        })), r(t, f)
      },
      v = t => {
        var f = u();
        a(f, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n
        })), r(t, f)
      };
    p(i, t => {
      o.filled ? t(l) : t(v, !1)
    })
  }
  r(e, s)
}
export {
  q as C
};