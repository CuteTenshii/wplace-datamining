import {
  g as s
} from "./B6AUkjz0.js";
import "./ZyxtncWx.js";
import {
  z as r,
  b as i
} from "./DXiHgRqS.js";
import {
  d
} from "./DDrHLuzM.js";
import {
  r as c
} from "./CgrfesPE.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2df914dd371fba2112b2cd92c4cdc7ac8c5482fe"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6b264775-f36c-4983-978f-3c1c6db16f84", e._sentryDebugIdIdentifier = "sentry-dbid-6b264775-f36c-4983-978f-3c1c6db16f84")
  })()
} catch {}
const l = () => "Pixels painted",
  a = () => "Pixels pintados",
  T = (e = {}, t = {}) => (t.locale ?? s()) === "en" ? l() : a(),
  f = () => "Description",
  p = () => "Descrição",
  m = (e = {}, t = {}) => (t.locale ?? s()) === "en" ? f() : p();
var u = r('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function v(e, t) {
  let n = c(t, ["$$slots", "$$events", "$$legacy"]);
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