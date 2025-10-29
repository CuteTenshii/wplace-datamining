import {
  g as v
} from "./Cop95dKZ.js";
import "./B5oLh0nu.js";
import {
  A as p,
  a as g,
  b as l,
  H as f
} from "./BDq-HR17.js";
import {
  i as u,
  r as y
} from "./D2wtnjjb.js";
import {
  d as i
} from "./CLb4R4mm.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0f5526c28af3fe231e905447f161f05590c76727"
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
const _ = e => `Copy alliance ID: #${e.allianceId}`,
  b = e => `Copiar ID da aliança: #${e.allianceId}`,
  D = (e, o = {}) => (o.locale ?? v()) === "en" ? _(e) : b(e);
var h = f('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  w = f('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function H(e, o) {
  let n = y(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var r = p(),
    s = g(r);
  {
    var d = a => {
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
    u(s, a => {
      o.filled ? a(d) : a(c, !1)
    })
  }
  l(e, r)
}
export {
  H as C, D as c
};