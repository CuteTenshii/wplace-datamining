import {
  g as s
} from "./CGnAXBz7.js";
import "./BOyEd4Tb.js";
import {
  H as r,
  b as i
} from "./IkYrrgcA.js";
import {
  d
} from "./CewNjJx9.js";
import {
  r as l
} from "./DKFEIBmk.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4871fd2f83b0bcd7abd0ecfe3a61b3d6255622d1"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "45f9c507-8783-4c0b-8043-799c45d52e36", e._sentryDebugIdIdentifier = "sentry-dbid-45f9c507-8783-4c0b-8043-799c45d52e36")
  })()
} catch {}
const a = () => "Pixels painted",
  c = () => "Pixels pintados",
  T = (e = {}, t = {}) => (t.locale ?? s()) === "en" ? a() : c(),
  p = () => "Description",
  f = () => "Descrição",
  m = (e = {}, t = {}) => (t.locale ?? s()) === "en" ? p() : f();
var u = r('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function v(e, t) {
  let n = l(t, ["$$slots", "$$events", "$$legacy"]);
  var o = u();
  d(o, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...n
  })), i(e, o)
}
export {
  v as L, m as d, T as p
};