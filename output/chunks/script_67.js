import "./D-b60vN2.js";
import {
  l as g,
  f as p,
  a as s,
  z as i
} from "./BZHD_3xD.js";
import {
  i as c
} from "./BT_y7f_x.js";
import {
  d as v
} from "./Dxf3E7m-.js";
import {
  r as h
} from "./Blpb5ptH.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "804fae10c9a96a4658fed8df64d864b17b400aa1"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "2b167373-5561-4e85-8c09-3c00e271a1fc", e._sentryDebugIdIdentifier = "sentry-dbid-2b167373-5561-4e85-8c09-3c00e271a1fc")
  } catch {}
})();
var m = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  b = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, r) {
  let a = h(r, ["$$slots", "$$events", "$$legacy", "filled"]);
  var f = g(),
    n = p(f);
  {
    var l = t => {
        var o = m();
        v(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...a
        })), s(t, o)
      },
      d = t => {
        var o = b();
        v(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...a
        })), s(t, o)
      };
    c(n, t => {
      r.filled ? t(l) : t(d, !1)
    })
  }
  s(e, f)
}
export {
  q as C
};