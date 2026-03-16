import {
  g as d
} from "./-EY-P68S.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
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
  b = () => "Reddit",
  g = (e = {}, r = {}) => {
    const t = r.locale ?? d();
    return t === "en" ? n() : t === "pt" ? i() : t === "ch" ? u() : t === "de" ? c() : t === "es" ? f() : t === "fr" ? o() : t === "it" ? s() : t === "jp" ? a() : t === "pl" ? l() : t === "ru" ? _() : t === "uk" ? R() : b()
  };
export {
  g as r
};