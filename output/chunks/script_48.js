import {
  g as t
} from "./C1q_NHWL.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "43095d4f05ba46dbb6f54b9ec680b6ad581b5a8e"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "b2044b2d-905f-4966-99db-24fea64f3262", e._sentryDebugIdIdentifier = "sentry-dbid-b2044b2d-905f-4966-99db-24fea64f3262")
  })()
} catch {}
const u = () => "Unban",
  b = () => "Desbanir",
  f = () => "解封",
  a = () => "Entbannen",
  o = () => "Desbanear",
  i = () => "Débannir",
  d = () => "Unban",
  s = () => "BANを解除",
  c = () => "Odbanuj",
  l = () => "Разбанить",
  p = () => "Розбанити",
  _ = () => "Gỡ cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? u() : n === "pt" ? b() : n === "ch" ? f() : n === "de" ? a() : n === "es" ? o() : n === "fr" ? i() : n === "it" ? d() : n === "jp" ? s() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as u
};