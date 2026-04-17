import {
  g as t
} from "./CLdytBYG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "454dd064a649ff0efc297a38e6aed3cfb6597516"
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
  f = () => "Raison",
  c = () => "Motivo",
  d = () => "理由",
  l = () => "Powód",
  _ = () => "Причина",
  p = () => "Причина",
  b = () => "Lý do",
  y = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? o() : r === "pt" ? s() : r === "ch" ? u() : r === "de" ? a() : r === "es" ? i() : r === "fr" ? f() : r === "it" ? c() : r === "jp" ? d() : r === "pl" ? l() : r === "ru" ? _() : r === "uk" ? p() : b()
  };
export {
  y as r
};