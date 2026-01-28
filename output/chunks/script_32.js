import {
  g as t
} from "./C_a06lyj.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "a2d67f85c31e3fef075f7f6dde31a8af3e9f3dda"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "c1c6b3e9-9865-4e0a-883d-e5e0561bc924", n._sentryDebugIdIdentifier = "sentry-dbid-c1c6b3e9-9865-4e0a-883d-e5e0561bc924")
  })()
} catch {}
const o = () => "Close",
  s = () => "Fechar",
  c = () => "关闭",
  f = () => "Schließen",
  u = () => "Cerrar",
  i = () => "Fermer",
  l = () => "Chiudi",
  d = () => "閉じる",
  a = () => "Zamknij",
  b = () => "Закрыть",
  p = () => "Закрити",
  _ = () => "Đóng",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? o() : e === "pt" ? s() : e === "ch" ? c() : e === "de" ? f() : e === "es" ? u() : e === "fr" ? i() : e === "it" ? l() : e === "jp" ? d() : e === "pl" ? a() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  y as c
};