import {
  g as r
} from "./C-uTzaOB.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "bd6ed46249e1ed5fe7432cfb3a9b80dcfb887d57"
    };
    var a = new n.Error().stack;
    a && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[a] = "fe83abd1-5077-4cc1-8f46-ccf36b0aea9c", n._sentryDebugIdIdentifier = "sentry-dbid-fe83abd1-5077-4cc1-8f46-ccf36b0aea9c")
  } catch {}
})();
const t = () => "Ban appeal",
  p = () => "Revisão de banimento",
  c = () => "封禁申诉",
  o = () => "Bann-Einspruch",
  u = () => "Apelación de ban",
  s = () => "Recours de bannissement",
  i = () => "Ricorso contro il ban",
  b = () => "BANの異議申立て",
  f = () => "Odwołanie od bana",
  l = () => "Апелляция на бан",
  d = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, a = {}) => {
    const e = a.locale ?? r();
    return e === "en" ? t() : e === "pt" ? p() : e === "ch" ? c() : e === "de" ? o() : e === "es" ? u() : e === "fr" ? s() : e === "it" ? i() : e === "jp" ? b() : e === "pl" ? f() : e === "ru" ? l() : e === "uk" ? d() : _()
  };
export {
  y as b
};