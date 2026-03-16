import {
  g as a
} from "./CCnR8d1l.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "6c9b69506cfe19dc0f0d9bebc0491abdbf11db02"
    };
    var r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "ffe8b5ce-112e-4e22-9d99-575b1568dd07", n._sentryDebugIdIdentifier = "sentry-dbid-ffe8b5ce-112e-4e22-9d99-575b1568dd07")
  } catch {}
})();
const t = () => "Ban appeal",
  p = () => "Revisão de banimento",
  o = () => "封禁申诉",
  u = () => "Bann-Einspruch",
  b = () => "Apelación de ban",
  s = () => "Recours de bannissement",
  i = () => "Ricorso contro il ban",
  c = () => "BANの異議申立て",
  d = () => "Odwołanie od bana",
  l = () => "Апелляция на бан",
  f = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? t() : e === "pt" ? p() : e === "ch" ? o() : e === "de" ? u() : e === "es" ? b() : e === "fr" ? s() : e === "it" ? i() : e === "jp" ? c() : e === "pl" ? d() : e === "ru" ? l() : e === "uk" ? f() : _()
  };
export {
  y as b
};