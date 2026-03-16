import "./BlzsQxXy.js";
import {
  z as c,
  f as g,
  a as f,
  J as v
} from "./BpkiS5AT.js";
import {
  i as p
} from "./C7ij7NCq.js";
import {
  d
} from "./YwLJDD6g.js";
import {
  r as b
} from "./CmUbnRpp.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8b4ab28972d63cbdad1764e9fac2da360f24ece0"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "a6f93bd1-fcc9-45dd-943e-c567f949f58b", e._sentryDebugIdIdentifier = "sentry-dbid-a6f93bd1-fcc9-45dd-943e-c567f949f58b")
  } catch {}
})();
var h = v('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  m = v('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, r) {
  let a = b(r, ["$$slots", "$$events", "$$legacy", "filled"]);
  var s = c(),
    i = g(s);
  {
    var n = t => {
        var o = h();
        d(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...a
        })), f(t, o)
      },
      l = t => {
        var o = m();
        d(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...a
        })), f(t, o)
      };
    p(i, t => {
      r.filled ? t(n) : t(l, !1)
    })
  }
  f(e, s)
}
export {
  q as C
};