import {
  g as d
} from "./D6nvKN2h.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "712356e502b473ac28f78925f6e5ee7bbba0c9dd"
    };
    var r = new t.Error().stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "bf585c41-8158-4483-ac0f-660c137c9fc1", t._sentryDebugIdIdentifier = "sentry-dbid-bf585c41-8158-4483-ac0f-660c137c9fc1")
  } catch {}
})();
const n = () => "Reddit",
  i = () => "Reddit",
  u = () => "Reddit",
  c = () => "Reddit",
  f = () => "Reddit",
  o = () => "Reddit",
  s = () => "Reddit",
  a = () => "Reddit",
  l = () => "Reddit",
  _ = () => "Reddit",
  b = () => "Reddit",
  R = () => "Reddit",
  g = (t = {}, r = {}) => {
    const e = r.locale ?? d();
    return e === "en" ? n() : e === "pt" ? i() : e === "ch" ? u() : e === "de" ? c() : e === "es" ? f() : e === "fr" ? o() : e === "it" ? s() : e === "jp" ? a() : e === "pl" ? l() : e === "ru" ? _() : e === "uk" ? b() : R()
  };
export {
  g as r
};