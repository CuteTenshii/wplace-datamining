import {
  g as v
} from "./DfH2tYJe.js";
import "./0VszxAbJ.js";
import {
  A as p,
  a as g,
  b as l,
  H as s
} from "./DzYLfSyw.js";
import {
  i as b,
  r as u
} from "./CPVuH84v.js";
import {
  d as i
} from "./BGJOQ217.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "274e4e697c621b0b0021d13ee96b23137b8f2a87"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "4e7435db-0f25-49ba-9e95-202f56063d7c", e._sentryDebugIdIdentifier = "sentry-dbid-4e7435db-0f25-49ba-9e95-202f56063d7c")
  })()
} catch {}
const y = e => `Copy alliance ID: #${e.allianceId}`,
  _ = e => `Copiar ID da aliança: #${e.allianceId}`,
  D = (e, o = {}) => (o.locale ?? v()) === "en" ? y(e) : _(e);
var h = s('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  w = s('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function H(e, o) {
  let n = u(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var r = p(),
    d = g(r);
  {
    var f = a => {
        var t = h();
        i(t, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n
        })), l(a, t)
      },
      c = a => {
        var t = w();
        i(t, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n
        })), l(a, t)
      };
    b(d, a => {
      o.filled ? a(f) : a(c, !1)
    })
  }
  l(e, r)
}
export {
  H as C, D as c
};