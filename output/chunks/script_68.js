import "./D5Mk_1eX.js";
import {
  l as g,
  f as p,
  a,
  z as i
} from "./BYTf-X4W.js";
import {
  i as c
} from "./BQVJ6ha0.js";
import {
  d as v
} from "./BvWEorH0.js";
import {
  r as h
} from "./DxS_2ZxM.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "e6c43a335491af110c902083fb644fb71e659308"
    };
    var r = new t.Error().stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "0b604767-a614-474c-971d-6769c020229f", t._sentryDebugIdIdentifier = "sentry-dbid-0b604767-a614-474c-971d-6769c020229f")
  } catch {}
})();
var m = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  b = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function q(t, r) {
  let s = h(r, ["$$slots", "$$events", "$$legacy", "filled"]);
  var f = g(),
    n = p(f);
  {
    var l = e => {
        var o = m();
        v(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), a(e, o)
      },
      d = e => {
        var o = b();
        v(o, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), a(e, o)
      };
    c(n, e => {
      r.filled ? e(l) : e(d, !1)
    })
  }
  a(t, f)
}
export {
  q as C
};