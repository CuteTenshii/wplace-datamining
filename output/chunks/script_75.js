import {
  g as t
} from "./DhZUX4Dk.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var e = new n.Error().stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "09e8c7b4-b47a-42dd-9a91-ebaa6a75318f", n._sentryDebugIdIdentifier = "sentry-dbid-09e8c7b4-b47a-42dd-9a91-ebaa6a75318f")
  } catch {}
})();
const o = () => "Confirm",
  f = () => "Confirmar",
  i = () => "确认",
  c = () => "Bestätigen",
  u = () => "Confirmar",
  s = () => "Confirmer",
  a = () => "Conferma",
  d = () => "確認",
  b = () => "Potwierdź",
  m = () => "Подтвердить",
  l = () => "Підтвердити",
  _ = () => "Xác nhận",
  g = (n = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? o() : r === "pt" ? f() : r === "ch" ? i() : r === "de" ? c() : r === "es" ? u() : r === "fr" ? s() : r === "it" ? a() : r === "jp" ? d() : r === "pl" ? b() : r === "ru" ? m() : r === "uk" ? l() : _()
  };
export {
  g as c
};