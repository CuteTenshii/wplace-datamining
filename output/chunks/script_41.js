import {
  g as v
} from "./DQLsifzP.js";
import "./0Rmtzvn4.js";
import {
  B as p,
  a as g,
  b as l,
  H as f
} from "./CoAY_RIV.js";
import {
  i as b
} from "./8_0aWUkr.js";
import {
  d as i
} from "./CXrFq78m.js";
import {
  r as u
} from "./B8YA1KFW.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a684b76bda26a353b92d069a016aee15159248aa"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "59d48d80-bc2f-42c4-9d59-7f4fa58b6c9f", e._sentryDebugIdIdentifier = "sentry-dbid-59d48d80-bc2f-42c4-9d59-7f4fa58b6c9f")
  })()
} catch {}
const y = e => `Copy alliance ID: #${e.allianceId}`,
  _ = e => `Copiar ID da aliança: #${e.allianceId}`,
  H = (e, a = {}) => (a.locale ?? v()) === "en" ? y(e) : _(e);
var h = f('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  m = f('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function Z(e, a) {
  let n = u(a, ["$$slots", "$$events", "$$legacy", "filled"]);
  var r = p(),
    d = g(r);
  {
    var s = o => {
        var t = h();
        i(t, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n
        })), l(o, t)
      },
      c = o => {
        var t = m();
        i(t, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n
        })), l(o, t)
      };
    b(d, o => {
      a.filled ? o(s) : o(c, !1)
    })
  }
  l(e, r)
}
export {
  Z as C, H as c
};