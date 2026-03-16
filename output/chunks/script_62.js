import "./Bd9SjhhN.js";
import {
  z as c,
  f as g,
  a,
  J as d
} from "./CEUoH-Z0.js";
import {
  i as p
} from "./BPHMutr-.js";
import {
  d as v
} from "./UqMcdnk8.js";
import {
  r as b
} from "./b3QwEAUc.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "a6f93bd1-fcc9-45dd-943e-c567f949f58b", e._sentryDebugIdIdentifier = "sentry-dbid-a6f93bd1-fcc9-45dd-943e-c567f949f58b")
  } catch {}
})();
var h = d('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  m = d('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, r) {
  let f = b(r, ["$$slots", "$$events", "$$legacy", "filled"]);
  var s = c(),
    i = g(s);
  {
    var n = t => {
        var o = h();
        v(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...f
        })), a(t, o)
      },
      l = t => {
        var o = m();
        v(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...f
        })), a(t, o)
      };
    p(i, t => {
      r.filled ? t(n) : t(l, !1)
    })
  }
  a(e, s)
}
export {
  q as C
};