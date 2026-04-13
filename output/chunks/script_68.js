import {
  g as d
} from "./obv90mRu.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1e0e8686272f8ab69a6b4937a8dffbb2f245b796"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "bf585c41-8158-4483-ac0f-660c137c9fc1", e._sentryDebugIdIdentifier = "sentry-dbid-bf585c41-8158-4483-ac0f-660c137c9fc1")
  } catch {}
})();
const n = () => "Reddit",
  i = () => "Reddit",
  u = () => "Reddit",
  f = () => "Reddit",
  c = () => "Reddit",
  o = () => "Reddit",
  s = () => "Reddit",
  a = () => "Reddit",
  l = () => "Reddit",
  _ = () => "Reddit",
  b = () => "Reddit",
  R = () => "Reddit",
  g = (e = {}, r = {}) => {
    const t = r.locale ?? d();
    return t === "en" ? n() : t === "pt" ? i() : t === "ch" ? u() : t === "de" ? f() : t === "es" ? c() : t === "fr" ? o() : t === "it" ? s() : t === "jp" ? a() : t === "pl" ? l() : t === "ru" ? _() : t === "uk" ? b() : R()
  };
export {
  g as r
};