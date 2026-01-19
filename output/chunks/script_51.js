import "./Dzr0zEgr.js";
import {
  h as g,
  a as p,
  b as a,
  o as f
} from "./DcuED2r1.js";
import {
  i as h
} from "./C11X_6e6.js";
import {
  b as s
} from "./DqnGd6Ri.js";
import {
  r as b
} from "./CVvyswV1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "d244b7d0-5a41-44dd-ae31-8e1c16197414", e._sentryDebugIdIdentifier = "sentry-dbid-d244b7d0-5a41-44dd-ae31-8e1c16197414")
  })()
} catch {}
var c = f('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  w = f('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, o) {
  let d = b(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var n = g(),
    i = p(n);
  {
    var l = t => {
        var r = c();
        s(r, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...d
        })), a(t, r)
      },
      v = t => {
        var r = w();
        s(r, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...d
        })), a(t, r)
      };
    h(i, t => {
      o.filled ? t(l) : t(v, !1)
    })
  }
  a(e, n)
}
export {
  q as C
};