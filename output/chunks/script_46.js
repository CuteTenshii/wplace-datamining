import {
  g as v
} from "./Dc6DF1Sc.js";
import "./nL0VRVfA.js";
import {
  w as p,
  a as g,
  b as l,
  z as f
} from "./BAiyaAMH.js";
import {
  i as b
} from "./Cyn8dEpB.js";
import {
  d as i
} from "./2yNgY6tU.js";
import {
  r as u
} from "./PxFakNOO.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ac7618a676a9d262ff8724cf2a3a13f62011007a"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d95de391-efbe-4f55-a3b4-be4b32cbd64c", e._sentryDebugIdIdentifier = "sentry-dbid-d95de391-efbe-4f55-a3b4-be4b32cbd64c")
  })()
} catch {}
const y = e => `Copy alliance ID: #${e.allianceId}`,
  _ = e => `Copiar ID da aliança: #${e.allianceId}`,
  Z = (e, a = {}) => (a.locale ?? v()) === "en" ? y(e) : _(e);
var h = f('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  w = f('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function x(e, a) {
  let n = u(a, ["$$slots", "$$events", "$$legacy", "filled"]);
  var r = p(),
    s = g(r);
  {
    var d = o => {
        var t = h();
        i(t, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n
        })), l(o, t)
      },
      c = o => {
        var t = w();
        i(t, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n
        })), l(o, t)
      };
    b(s, o => {
      a.filled ? o(d) : o(c, !1)
    })
  }
  l(e, r)
}
export {
  x as C, Z as c
};