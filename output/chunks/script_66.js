import {
  g as t
} from "./B4ScQ8O8.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "1be1930440b8b07ce70b7b458d3e953490a5a011"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "f1be55e0-ef80-4068-94e4-e5552e62f5d0", n._sentryDebugIdIdentifier = "sentry-dbid-f1be55e0-ef80-4068-94e4-e5552e62f5d0")
  })()
} catch {}
const o = () => "Confirm",
  f = () => "Confirmar",
  i = () => "确认",
  u = () => "Bestätigen",
  c = () => "Confirmar",
  s = () => "Confirmer",
  d = () => "Conferma",
  l = () => "確認",
  a = () => "Potwierdź",
  b = () => "Подтвердить",
  m = () => "Підтвердити",
  p = () => "Xác nhận",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? o() : e === "pt" ? f() : e === "ch" ? i() : e === "de" ? u() : e === "es" ? c() : e === "fr" ? s() : e === "it" ? d() : e === "jp" ? l() : e === "pl" ? a() : e === "ru" ? b() : e === "uk" ? m() : p()
  };
export {
  g as c
};