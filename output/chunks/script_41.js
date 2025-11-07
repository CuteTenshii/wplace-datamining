import {
  g as v
} from "./B3Pi0DVN.js";
import "./TqSv-OG4.js";
import {
  B as p,
  a as g,
  b as l,
  H as i
} from "./t6Scptgh.js";
import {
  i as b
} from "./BVOGXu18.js";
import {
  d as f
} from "./9lPhjRvA.js";
import {
  r as u
} from "./BfNs_3Yh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "30982d7718bbc4a833ef39834f2cfbbfa1f546ae"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "59d48d80-bc2f-42c4-9d59-7f4fa58b6c9f", e._sentryDebugIdIdentifier = "sentry-dbid-59d48d80-bc2f-42c4-9d59-7f4fa58b6c9f")
  })()
} catch {}
const y = e => `Copy alliance ID: #${e.allianceId}`,
  _ = e => `Copiar ID da aliança: #${e.allianceId}`,
  H = (e, o = {}) => (o.locale ?? v()) === "en" ? y(e) : _(e);
var h = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  m = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function Z(e, o) {
  let n = u(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var r = p(),
    s = g(r);
  {
    var d = a => {
        var t = h();
        f(t, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n
        })), l(a, t)
      },
      c = a => {
        var t = m();
        f(t, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n
        })), l(a, t)
      };
    b(s, a => {
      o.filled ? a(d) : a(c, !1)
    })
  }
  l(e, r)
}
export {
  Z as C, H as c
};