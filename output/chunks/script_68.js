import {
  g as d
} from "./DNNhrQmR.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "ceaf71126b6ebfffce341bb7a3def1f2574f660c"
    };
    var r = new t.Error().stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "bf585c41-8158-4483-ac0f-660c137c9fc1", t._sentryDebugIdIdentifier = "sentry-dbid-bf585c41-8158-4483-ac0f-660c137c9fc1")
  } catch {}
})();
const n = () => "Reddit",
  i = () => "Reddit",
  f = () => "Reddit",
  u = () => "Reddit",
  c = () => "Reddit",
  o = () => "Reddit",
  s = () => "Reddit",
  a = () => "Reddit",
  l = () => "Reddit",
  _ = () => "Reddit",
  b = () => "Reddit",
  R = () => "Reddit",
  g = (t = {}, r = {}) => {
    const e = r.locale ?? d();
    return e === "en" ? n() : e === "pt" ? i() : e === "ch" ? f() : e === "de" ? u() : e === "es" ? c() : e === "fr" ? o() : e === "it" ? s() : e === "jp" ? a() : e === "pl" ? l() : e === "ru" ? _() : e === "uk" ? b() : R()
  };
export {
  g as r
};