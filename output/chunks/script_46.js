import {
  g as v
} from "./ByzlWgKr.js";
import "./CMSI2xec.js";
import {
  w as p,
  a as g,
  b as l,
  z as s
} from "./Dff7lKDG.js";
import {
  i as u
} from "./C4Sx64Nr.js";
import {
  d as i
} from "./CxMyuyR3.js";
import {
  r as y
} from "./FaLwwzG2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5e7c9fd5f328559866810f75338456562566478c"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "168ae2d7-a283-447b-9b80-7905fd943a91", e._sentryDebugIdIdentifier = "sentry-dbid-168ae2d7-a283-447b-9b80-7905fd943a91")
  })()
} catch {}
const _ = e => `Copy alliance ID: #${e.allianceId}`,
  b = e => `Copiar ID da aliança: #${e.allianceId}`,
  Z = (e, o = {}) => (o.locale ?? v()) === "en" ? _(e) : b(e);
var h = s('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  w = s('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function x(e, o) {
  let n = y(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var r = p(),
    f = g(r);
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
    u(f, a => {
      o.filled ? a(d) : a(c, !1)
    })
  }
  l(e, r)
}
export {
  x as C, Z as c
};