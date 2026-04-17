import {
  g as t
} from "./BZGVaLJf.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e0127cf3e7a9cd170d72434c8831b6836f9b0e1e"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "69d9428a-ccc2-4782-9b8d-56e43e6f6563", e._sentryDebugIdIdentifier = "sentry-dbid-69d9428a-ccc2-4782-9b8d-56e43e6f6563")
  } catch {}
})();
const o = () => "Reason",
  s = () => "Motivo",
  u = () => "原因",
  i = () => "Grund",
  c = () => "Motivo",
  a = () => "Raison",
  f = () => "Motivo",
  d = () => "理由",
  l = () => "Powód",
  _ = () => "Причина",
  b = () => "Причина",
  p = () => "Lý do",
  y = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? o() : r === "pt" ? s() : r === "ch" ? u() : r === "de" ? i() : r === "es" ? c() : r === "fr" ? a() : r === "it" ? f() : r === "jp" ? d() : r === "pl" ? l() : r === "ru" ? _() : r === "uk" ? b() : p()
  };
export {
  y as r
};