import {
  g as t
} from "./DADvmwwi.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "69d9428a-ccc2-4782-9b8d-56e43e6f6563", e._sentryDebugIdIdentifier = "sentry-dbid-69d9428a-ccc2-4782-9b8d-56e43e6f6563")
  } catch {}
})();
const o = () => "Reason",
  s = () => "Motivo",
  u = () => "原因",
  a = () => "Grund",
  i = () => "Motivo",
  c = () => "Raison",
  d = () => "Motivo",
  f = () => "理由",
  l = () => "Powód",
  _ = () => "Причина",
  p = () => "Причина",
  b = () => "Lý do",
  y = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? o() : r === "pt" ? s() : r === "ch" ? u() : r === "de" ? a() : r === "es" ? i() : r === "fr" ? c() : r === "it" ? d() : r === "jp" ? f() : r === "pl" ? l() : r === "ru" ? _() : r === "uk" ? p() : b()
  };
export {
  y as r
};