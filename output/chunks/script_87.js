import {
  g as t
} from "./C6AhFN09.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "69d9428a-ccc2-4782-9b8d-56e43e6f6563", e._sentryDebugIdIdentifier = "sentry-dbid-69d9428a-ccc2-4782-9b8d-56e43e6f6563")
  } catch {}
})();
const o = () => "Reason",
  s = () => "Motivo",
  u = () => "原因",
  i = () => "Grund",
  f = () => "Motivo",
  a = () => "Raison",
  c = () => "Motivo",
  d = () => "理由",
  l = () => "Powód",
  _ = () => "Причина",
  p = () => "Причина",
  b = () => "Lý do",
  y = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? o() : r === "pt" ? s() : r === "ch" ? u() : r === "de" ? i() : r === "es" ? f() : r === "fr" ? a() : r === "it" ? c() : r === "jp" ? d() : r === "pl" ? l() : r === "ru" ? _() : r === "uk" ? p() : b()
  };
export {
  y as r
};