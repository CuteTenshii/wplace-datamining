import "./DfSPqPjB.js";
import {
  h as g,
  a as p,
  b as f,
  A as d
} from "./BX08WKHH.js";
import {
  i as b
} from "./WtIPnxxX.js";
import {
  f as s
} from "./D1NSdIK5.js";
import {
  r as c
} from "./BdjyGa6-.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7643ba5d2918c38f2d3e1507dfee87cd2c0bfa50"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "609563da-9e18-427a-bda0-4ef967a4c70b", e._sentryDebugIdIdentifier = "sentry-dbid-609563da-9e18-427a-bda0-4ef967a4c70b")
  })()
} catch {}
var h = d('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  w = d('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, o) {
  let r = c(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var n = g(),
    i = p(n);
  {
    var l = t => {
        var a = h();
        s(a, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...r
        })), f(t, a)
      },
      v = t => {
        var a = w();
        s(a, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...r
        })), f(t, a)
      };
    b(i, t => {
      o.filled ? t(l) : t(v, !1)
    })
  }
  f(e, n)
}
export {
  q as C
};