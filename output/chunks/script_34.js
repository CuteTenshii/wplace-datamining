import {
  g as t
} from "./DawG3Hoa.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "a1c3c518b70a92c25ec2b85baf48e9981ce90ce8"
    };
    var n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "fde52f20-e9b7-4a5a-9d4e-f7e9760c9b21", r._sentryDebugIdIdentifier = "sentry-dbid-fde52f20-e9b7-4a5a-9d4e-f7e9760c9b21")
  } catch {}
})();
const c = () => "Close",
  o = () => "Fechar",
  s = () => "关闭",
  u = () => "Schließen",
  f = () => "Cerrar",
  i = () => "Fermer",
  l = () => "Chiudi",
  d = () => "閉じる",
  a = () => "Zamknij",
  _ = () => "Закрыть",
  b = () => "Закрити",
  p = () => "Đóng",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? c() : e === "pt" ? o() : e === "ch" ? s() : e === "de" ? u() : e === "es" ? f() : e === "fr" ? i() : e === "it" ? l() : e === "jp" ? d() : e === "pl" ? a() : e === "ru" ? _() : e === "uk" ? b() : p()
  };
export {
  y as c
};