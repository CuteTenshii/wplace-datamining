import {
  g as t
} from "./DMLR2ssG.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "c25d240cfeb94229297bfd517188330be66c0dac"
    };
    var e = new n.Error().stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "555d803c-dfac-4d48-b1e9-55a3f0927340", n._sentryDebugIdIdentifier = "sentry-dbid-555d803c-dfac-4d48-b1e9-55a3f0927340")
  } catch {}
})();
const o = () => "Confirm",
  f = () => "Confirmar",
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
    return r === "en" ? o() : r === "pt" ? f() : r === "ch" ? i() : r === "de" ? c() : r === "es" ? u() : r === "fr" ? s() : r === "it" ? d() : r === "jp" ? a() : r === "pl" ? m() : r === "ru" ? l() : r === "uk" ? _() : b()
  };
export {
  g as c
};