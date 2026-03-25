import {
  g as a
} from "./Cq_U3JVf.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "e30448959e42fd3ea2fc5cd1f2671639056880b6"
    };
    var r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "ffe8b5ce-112e-4e22-9d99-575b1568dd07", n._sentryDebugIdIdentifier = "sentry-dbid-ffe8b5ce-112e-4e22-9d99-575b1568dd07")
  } catch {}
})();
const t = () => "Ban appeal",
  p = () => "Revisão de banimento",
  o = () => "封禁申诉",
  u = () => "Bann-Einspruch",
  s = () => "Apelación de ban",
  i = () => "Recours de bannissement",
  c = () => "Ricorso contro il ban",
  l = () => "BANの異議申立て",
  b = () => "Odwołanie od bana",
  d = () => "Апелляция на бан",
  f = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? t() : e === "pt" ? p() : e === "ch" ? o() : e === "de" ? u() : e === "es" ? s() : e === "fr" ? i() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? b() : e === "ru" ? d() : e === "uk" ? f() : _()
  };
export {
  y as b
};