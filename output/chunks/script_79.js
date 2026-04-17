import {
  g as r
} from "./BQlqcz55.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "dc0186d26e0c2d626ef1b4331d86a985eea98c24"
    };
    var a = new n.Error().stack;
    a && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[a] = "fe83abd1-5077-4cc1-8f46-ccf36b0aea9c", n._sentryDebugIdIdentifier = "sentry-dbid-fe83abd1-5077-4cc1-8f46-ccf36b0aea9c")
  } catch {}
})();
const t = () => "Ban appeal",
  c = () => "Revisão de banimento",
  p = () => "封禁申诉",
  o = () => "Bann-Einspruch",
  u = () => "Apelación de ban",
  s = () => "Recours de bannissement",
  i = () => "Ricorso contro il ban",
  l = () => "BANの異議申立て",
  b = () => "Odwołanie od bana",
  f = () => "Апелляция на бан",
  d = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, a = {}) => {
    const e = a.locale ?? r();
    return e === "en" ? t() : e === "pt" ? c() : e === "ch" ? p() : e === "de" ? o() : e === "es" ? u() : e === "fr" ? s() : e === "it" ? i() : e === "jp" ? l() : e === "pl" ? b() : e === "ru" ? f() : e === "uk" ? d() : _()
  };
export {
  y as b
};