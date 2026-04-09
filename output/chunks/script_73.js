import {
  g as a
} from "./DrzYdI9r.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
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
  d = () => "Recours de bannissement",
  i = () => "Ricorso contro il ban",
  b = () => "BANの異議申立て",
  f = () => "Odwołanie od bana",
  l = () => "Апелляция на бан",
  c = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? t() : e === "pt" ? p() : e === "ch" ? o() : e === "de" ? u() : e === "es" ? s() : e === "fr" ? d() : e === "it" ? i() : e === "jp" ? b() : e === "pl" ? f() : e === "ru" ? l() : e === "uk" ? c() : _()
  };
export {
  y as b
};