import {
  g as t
} from "./dO1JPExC.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "5caf19ac7c00bf81392f2f2ae2213734555d83f2"
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
  p = () => "Xác nhận",
  g = (n = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? f() : r === "pt" ? o() : r === "ch" ? i() : r === "de" ? c() : r === "es" ? u() : r === "fr" ? s() : r === "it" ? d() : r === "jp" ? a() : r === "pl" ? m() : r === "ru" ? l() : r === "uk" ? _() : p()
  };
export {
  g as c
};