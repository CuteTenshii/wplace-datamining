import {
  g as a
} from "./56ZBUmtO.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "b137ab40316e1e3f22728d8060cbbff276df86f5"
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
  b = () => "Ricorso contro il ban",
  f = () => "BANの異議申立て",
  l = () => "Odwołanie od bana",
  c = () => "Апелляция на бан",
  d = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? t() : e === "pt" ? p() : e === "ch" ? o() : e === "de" ? u() : e === "es" ? s() : e === "fr" ? i() : e === "it" ? b() : e === "jp" ? f() : e === "pl" ? l() : e === "ru" ? c() : e === "uk" ? d() : _()
  };
export {
  y as b
};