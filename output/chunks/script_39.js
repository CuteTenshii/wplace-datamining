import {
  g as v
} from "./BgLPZDo-.js";
import "./BrPgsScq.js";
import {
  A as p,
  a as g,
  b as l,
  H as i
} from "./CX26CINy.js";
import {
  i as b,
  r as u
} from "./aRmAw-LJ.js";
import {
  d
} from "./CkEeWs_R.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "55773afae0bc9cd8753b3f88c13d41d45dcd2072"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fd20ccfb-9584-4f4b-ab78-ae4badd6a9aa", e._sentryDebugIdIdentifier = "sentry-dbid-fd20ccfb-9584-4f4b-ab78-ae4badd6a9aa")
  })()
} catch {}
const y = e => `Copy alliance ID: #${e.allianceId}`,
  _ = e => `Copiar ID da aliança: #${e.allianceId}`,
  D = (e, a = {}) => (a.locale ?? v()) === "en" ? y(e) : _(e);
var h = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  w = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function H(e, a) {
  let n = u(a, ["$$slots", "$$events", "$$legacy", "filled"]);
  var r = p(),
    f = g(r);
  {
    var s = o => {
        var t = h();
        d(t, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n
        })), l(o, t)
      },
      c = o => {
        var t = w();
        d(t, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n
        })), l(o, t)
      };
    b(f, o => {
      a.filled ? o(s) : o(c, !1)
    })
  }
  l(e, r)
}
export {
  H as C, D as c
};