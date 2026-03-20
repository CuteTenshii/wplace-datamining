import "./B6L2Wv0c.js";
import {
  z as c,
  f as g,
  a,
  J as d
} from "./CqOPxJme.js";
import {
  i as p
} from "./Drv-8na6.js";
import {
  d as f
} from "./BxG0geMD.js";
import {
  r as b
} from "./DZyy70sN.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "405d9b08e89656e997bc9e3c862de93d5b969d8c"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "6c27a0c4-7db2-48ee-8c11-837f952b97f3", e._sentryDebugIdIdentifier = "sentry-dbid-6c27a0c4-7db2-48ee-8c11-837f952b97f3")
  } catch {}
})();
var h = d('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  m = d('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, r) {
  let s = b(r, ["$$slots", "$$events", "$$legacy", "filled"]);
  var v = c(),
    i = g(v);
  {
    var n = t => {
        var o = h();
        f(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), a(t, o)
      },
      l = t => {
        var o = m();
        f(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), a(t, o)
      };
    p(i, t => {
      r.filled ? t(n) : t(l, !1)
    })
  }
  a(e, v)
}
export {
  q as C
};