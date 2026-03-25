import {
  g as d
} from "./Cq_U3JVf.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "e30448959e42fd3ea2fc5cd1f2671639056880b6"
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
  l = () => "Reddit",
  _ = () => "Reddit",
  a = () => "Reddit",
  R = () => "Reddit",
  p = () => "Reddit",
  g = (t = {}, r = {}) => {
    const e = r.locale ?? d();
    return e === "en" ? n() : e === "pt" ? i() : e === "ch" ? u() : e === "de" ? c() : e === "es" ? f() : e === "fr" ? o() : e === "it" ? s() : e === "jp" ? l() : e === "pl" ? _() : e === "ru" ? a() : e === "uk" ? R() : p()
  };
export {
  g as r
};