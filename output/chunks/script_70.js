import {
  g as t
} from "./obv90mRu.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "1e0e8686272f8ab69a6b4937a8dffbb2f245b796"
    };
    var e = new n.Error().stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "555d803c-dfac-4d48-b1e9-55a3f0927340", n._sentryDebugIdIdentifier = "sentry-dbid-555d803c-dfac-4d48-b1e9-55a3f0927340")
  } catch {}
})();
const f = () => "Confirm",
  o = () => "Confirmar",
  i = () => "确认",
  c = () => "Bestätigen",
  u = () => "Confirmar",
  s = () => "Confirmer",
  d = () => "Conferma",
  a = () => "確認",
  m = () => "Potwierdź",
  l = () => "Подтвердить",
  _ = () => "Підтвердити",
  b = () => "Xác nhận",
  g = (n = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? f() : r === "pt" ? o() : r === "ch" ? i() : r === "de" ? c() : r === "es" ? u() : r === "fr" ? s() : r === "it" ? d() : r === "jp" ? a() : r === "pl" ? m() : r === "ru" ? l() : r === "uk" ? _() : b()
  };
export {
  g as c
};