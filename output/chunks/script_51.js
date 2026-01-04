import "./BogmcaYM.js";
import {
  h as b,
  a as g,
  b as n,
  o as d
} from "./7dqXbHhh.js";
import {
  i as p
} from "./CvjZfGTK.js";
import {
  b as f
} from "./Bl5Caycm.js";
import {
  r as h
} from "./BH7Vj6ya.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "845cd245f9645ae957e3eeb4920045ede245aa3a"
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
  let s = h(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var a = b(),
    i = g(a);
  {
    var l = t => {
        var r = w();
        f(r, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), n(t, r)
      },
      v = t => {
        var r = u();
        f(r, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), n(t, r)
      };
    p(i, t => {
      o.filled ? t(l) : t(v, !1)
    })
  }
  n(e, a)
}
export {
  q as C
};