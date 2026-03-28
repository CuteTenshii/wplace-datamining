import "./B3yE5ox1.js";
import {
  z as c,
  f as g,
  a,
  J as i
} from "./DAkfeAd4.js";
import {
  i as p
} from "./Dygw0w-s.js";
import {
  d as f
} from "./DqCCRIxQ.js";
import {
  r as b
} from "./C9nu7S8N.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5b6c982e9643479451e4387b2e009c10939a1316"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "6c27a0c4-7db2-48ee-8c11-837f952b97f3", e._sentryDebugIdIdentifier = "sentry-dbid-6c27a0c4-7db2-48ee-8c11-837f952b97f3")
  } catch {}
})();
var h = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  m = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, r) {
  let s = b(r, ["$$slots", "$$events", "$$legacy", "filled"]);
  var v = c(),
    n = g(v);
  {
    var l = t => {
        var o = h();
        f(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), a(t, o)
      },
      d = t => {
        var o = m();
        f(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), a(t, o)
      };
    p(n, t => {
      r.filled ? t(l) : t(d, !1)
    })
  }
  a(e, v)
}
export {
  q as C
};