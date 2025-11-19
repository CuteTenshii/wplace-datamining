import {
  g as v
} from "./CeWu6W50.js";
import "./CRUod-8q.js";
import {
  w as p,
  a as g,
  b as l,
  z as s
} from "./C-9Y3fPa.js";
import {
  i as b
} from "./qwvZIGad.js";
import {
  d as i
} from "./CwSlGFEE.js";
import {
  r as u
} from "./v3ZFA_UY.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fe5b293b0b58eb9d702fd066546411c50747d7aa"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "168ae2d7-a283-447b-9b80-7905fd943a91", e._sentryDebugIdIdentifier = "sentry-dbid-168ae2d7-a283-447b-9b80-7905fd943a91")
  })()
} catch {}
const y = e => `Copy alliance ID: #${e.allianceId}`,
  _ = e => `Copiar ID da aliança: #${e.allianceId}`,
  Z = (e, a = {}) => (a.locale ?? v()) === "en" ? y(e) : _(e);
var h = s('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  w = s('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function x(e, a) {
  let n = u(a, ["$$slots", "$$events", "$$legacy", "filled"]);
  var r = p(),
    d = g(r);
  {
    var f = o => {
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
    b(d, o => {
      a.filled ? o(f) : o(c, !1)
    })
  }
  l(e, r)
}
export {
  x as C, Z as c
};