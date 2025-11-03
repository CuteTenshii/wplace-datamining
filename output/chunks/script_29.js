import {
  g as s
} from "./BhWn7wLv.js";
import "./UlMc9DV9.js";
import {
  H as r,
  b as i
} from "./WvGh61NJ.js";
import {
  d
} from "./DygNb3Rd.js";
import {
  r as a
} from "./D7cVwFZd.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dd4f8190f88bd342b0302e9b73d1fd999bcdb862"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "71ccaef6-234b-49d6-ac3d-1e3aea9fd440", e._sentryDebugIdIdentifier = "sentry-dbid-71ccaef6-234b-49d6-ac3d-1e3aea9fd440")
  })()
} catch {}
const l = () => "Pixels painted",
  f = () => "Pixels pintados",
  T = (e = {}, t = {}) => (t.locale ?? s()) === "en" ? l() : f(),
  c = () => "Description",
  p = () => "Descrição",
  m = (e = {}, t = {}) => (t.locale ?? s()) === "en" ? c() : p();
var u = r('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function v(e, t) {
  let n = a(t, ["$$slots", "$$events", "$$legacy"]);
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