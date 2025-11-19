import {
  g as v
} from "./CqypAnHz.js";
import "./C7kAH1Hq.js";
import {
  w as p,
  a as b,
  b as l,
  z as f
} from "./DKMpf0HC.js";
import {
  i as g
} from "./CTJ5H8vK.js";
import {
  d as i
} from "./D_6RnY6R.js";
import {
  r as u
} from "./BtFnqC_r.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "399bc8c4e783d71b221f731ebe74f832c15927f3"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "d95de391-efbe-4f55-a3b4-be4b32cbd64c", e._sentryDebugIdIdentifier = "sentry-dbid-d95de391-efbe-4f55-a3b4-be4b32cbd64c")
  })()
} catch {}
const y = e => `Copy alliance ID: #${e.allianceId}`,
  _ = e => `Copiar ID da aliança: #${e.allianceId}`,
  Z = (e, o = {}) => (o.locale ?? v()) === "en" ? y(e) : _(e);
var h = f('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  w = f('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function x(e, o) {
  let n = u(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var r = p(),
    s = b(r);
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
    g(s, a => {
      o.filled ? a(d) : a(c, !1)
    })
  }
  l(e, r)
}
export {
  x as C, Z as c
};