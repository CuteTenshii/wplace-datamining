import {
  g as t
} from "./DCTOo5lo.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "98e9f0a798d14aeefb12d06ee236fbfeb3f778fb"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "484aa75f-fcab-41a2-9e77-87c3b236cbd0", e._sentryDebugIdIdentifier = "sentry-dbid-484aa75f-fcab-41a2-9e77-87c3b236cbd0")
  })()
} catch {}
const f = () => "Confirm",
  o = () => "Confirmar",
  i = () => "确认",
  c = () => "Bestätigen",
  u = () => "Confirmar",
  s = () => "Confirmer",
  d = () => "Conferma",
  a = () => "確認",
  l = () => "Potwierdź",
  b = () => "Подтвердить",
  m = () => "Підтвердити",
  p = () => "Xác nhận",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? f() : n === "pt" ? o() : n === "ch" ? i() : n === "de" ? c() : n === "es" ? u() : n === "fr" ? s() : n === "it" ? d() : n === "jp" ? a() : n === "pl" ? l() : n === "ru" ? b() : n === "uk" ? m() : p()
  };
export {
  g as c
};