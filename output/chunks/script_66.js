import {
  g as d
} from "./BTC2qzU8.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "65a3db4a500394d84da74f59d1f734aa6c59383c"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "bf585c41-8158-4483-ac0f-660c137c9fc1", e._sentryDebugIdIdentifier = "sentry-dbid-bf585c41-8158-4483-ac0f-660c137c9fc1")
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
  R = () => "Reddit",
  p = () => "Reddit",
  g = (e = {}, r = {}) => {
    const t = r.locale ?? d();
    return t === "en" ? n() : t === "pt" ? i() : t === "ch" ? u() : t === "de" ? c() : t === "es" ? f() : t === "fr" ? o() : t === "it" ? s() : t === "jp" ? a() : t === "pl" ? l() : t === "ru" ? _() : t === "uk" ? R() : p()
  };
export {
  g as r
};