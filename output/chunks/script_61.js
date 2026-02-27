import "./D_QYbpqW.js";
import {
  z as g,
  f as p,
  a as s,
  J as d
} from "./C3nPqK5x.js";
import {
  i as b
} from "./ajdkTjia.js";
import {
  f as v
} from "./kg9Z0q_v.js";
import {
  r as c
} from "./CR98XY6P.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "1c0e8d55-b03f-42d1-a6df-be2c04fa317b", e._sentryDebugIdIdentifier = "sentry-dbid-1c0e8d55-b03f-42d1-a6df-be2c04fa317b")
  } catch {}
})();
var h = d('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  m = d('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(e, r) {
  let a = c(r, ["$$slots", "$$events", "$$legacy", "filled"]);
  var f = g(),
    i = p(f);
  {
    var n = t => {
        var o = h();
        v(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...a
        })), s(t, o)
      },
      l = t => {
        var o = m();
        v(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...a
        })), s(t, o)
      };
    b(i, t => {
      r.filled ? t(n) : t(l, !1)
    })
  }
  s(e, f)
}
export {
  q as C
};