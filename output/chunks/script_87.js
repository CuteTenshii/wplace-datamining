import {
  g as t
} from "./BQlqcz55.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dc0186d26e0c2d626ef1b4331d86a985eea98c24"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "69d9428a-ccc2-4782-9b8d-56e43e6f6563", e._sentryDebugIdIdentifier = "sentry-dbid-69d9428a-ccc2-4782-9b8d-56e43e6f6563")
  } catch {}
})();
const o = () => "Reason",
  s = () => "Motivo",
  u = () => "原因",
  i = () => "Grund",
  a = () => "Motivo",
  c = () => "Raison",
  d = () => "Motivo",
  f = () => "理由",
  l = () => "Powód",
  _ = () => "Причина",
  p = () => "Причина",
  b = () => "Lý do",
  y = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? o() : r === "pt" ? s() : r === "ch" ? u() : r === "de" ? i() : r === "es" ? a() : r === "fr" ? c() : r === "it" ? d() : r === "jp" ? f() : r === "pl" ? l() : r === "ru" ? _() : r === "uk" ? p() : b()
  };
export {
  y as r
};