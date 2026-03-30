import "./Dnk7a4UH.js";
import {
  z as g,
  f as p,
  a as f,
  J as i
} from "./DySbC8v5.js";
import {
  i as c
} from "./D4_-L5Wu.js";
import {
  d as v
} from "./CkNqLOaL.js";
import {
  r as b
} from "./Bu8Ds4-B.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b137ab40316e1e3f22728d8060cbbff276df86f5"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "6c27a0c4-7db2-48ee-8c11-837f952b97f3", e._sentryDebugIdIdentifier = "sentry-dbid-6c27a0c4-7db2-48ee-8c11-837f952b97f3")
  } catch {}
})();
var h = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  m = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, r) {
  let s = b(r, ["$$slots", "$$events", "$$legacy", "filled"]);
  var a = g(),
    n = p(a);
  {
    var d = t => {
        var o = h();
        v(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), f(t, o)
      },
      l = t => {
        var o = m();
        v(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), f(t, o)
      };
    c(n, t => {
      r.filled ? t(d) : t(l, !1)
    })
  }
  f(e, a)
}
export {
  q as C
};