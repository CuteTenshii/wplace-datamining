import {
  g as t
} from "./n6S4vljj.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "499b14f045c01e257aa2f9d700904a576cc252cf"
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