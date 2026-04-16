import {
  g as t
} from "./kxb4d0Jk.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "209576268ed2d55d78b1f313fb4db5f4a92290b5"
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
  d = () => "Raison",
  f = () => "Motivo",
  c = () => "理由",
  l = () => "Powód",
  _ = () => "Причина",
  b = () => "Причина",
  p = () => "Lý do",
  y = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? o() : r === "pt" ? s() : r === "ch" ? u() : r === "de" ? i() : r === "es" ? a() : r === "fr" ? d() : r === "it" ? f() : r === "jp" ? c() : r === "pl" ? l() : r === "ru" ? _() : r === "uk" ? b() : p()
  };
export {
  y as r
};