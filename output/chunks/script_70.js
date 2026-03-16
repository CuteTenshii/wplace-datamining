import {
  g as a
} from "./DawG3Hoa.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "a1c3c518b70a92c25ec2b85baf48e9981ce90ce8"
    };
    var r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "ffe8b5ce-112e-4e22-9d99-575b1568dd07", n._sentryDebugIdIdentifier = "sentry-dbid-ffe8b5ce-112e-4e22-9d99-575b1568dd07")
  } catch {}
})();
const t = () => "Ban appeal",
  p = () => "Revisão de banimento",
  o = () => "封禁申诉",
  u = () => "Bann-Einspruch",
  c = () => "Apelación de ban",
  s = () => "Recours de bannissement",
  i = () => "Ricorso contro il ban",
  b = () => "BANの異議申立て",
  l = () => "Odwołanie od bana",
  d = () => "Апелляция на бан",
  f = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? t() : e === "pt" ? p() : e === "ch" ? o() : e === "de" ? u() : e === "es" ? c() : e === "fr" ? s() : e === "it" ? i() : e === "jp" ? b() : e === "pl" ? l() : e === "ru" ? d() : e === "uk" ? f() : _()
  };
export {
  y as b
};