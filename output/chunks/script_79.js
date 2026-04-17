import {
  g as r
} from "./DhZUX4Dk.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fe83abd1-5077-4cc1-8f46-ccf36b0aea9c", e._sentryDebugIdIdentifier = "sentry-dbid-fe83abd1-5077-4cc1-8f46-ccf36b0aea9c")
  } catch {}
})();
const t = () => "Ban appeal",
  c = () => "Revisão de banimento",
  p = () => "封禁申诉",
  o = () => "Bann-Einspruch",
  b = () => "Apelación de ban",
  u = () => "Recours de bannissement",
  s = () => "Ricorso contro il ban",
  i = () => "BANの異議申立て",
  f = () => "Odwołanie od bana",
  l = () => "Апелляция на бан",
  _ = () => "Апеляція на бан",
  d = () => "Kháng cáo lệnh cấm",
  y = (e = {}, a = {}) => {
    const n = a.locale ?? r();
    return n === "en" ? t() : n === "pt" ? c() : n === "ch" ? p() : n === "de" ? o() : n === "es" ? b() : n === "fr" ? u() : n === "it" ? s() : n === "jp" ? i() : n === "pl" ? f() : n === "ru" ? l() : n === "uk" ? _() : d()
  };
export {
  y as b
};