import {
  g as t
} from "./Bm48RCXV.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "38850961237e3d7e0cabf73306ceed2d401b42cd"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "484aa75f-fcab-41a2-9e77-87c3b236cbd0", r._sentryDebugIdIdentifier = "sentry-dbid-484aa75f-fcab-41a2-9e77-87c3b236cbd0")
  })()
} catch {}
const o = () => "Confirm",
  f = () => "Confirmar",
  i = () => "确认",
  c = () => "Bestätigen",
  u = () => "Confirmar",
  d = () => "Confirmer",
  s = () => "Conferma",
  a = () => "確認",
  l = () => "Potwierdź",
  b = () => "Подтвердить",
  m = () => "Підтвердити",
  p = () => "Xác nhận",
  g = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? o() : n === "pt" ? f() : n === "ch" ? i() : n === "de" ? c() : n === "es" ? u() : n === "fr" ? d() : n === "it" ? s() : n === "jp" ? a() : n === "pl" ? l() : n === "ru" ? b() : n === "uk" ? m() : p()
  };
export {
  g as c
};