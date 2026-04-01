import {
  g as a
} from "./BT9k_vYz.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "be8234278ededc2527fbc3b765caee2baaf18120"
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
  c = () => "BANの異議申立て",
  l = () => "Odwołanie od bana",
  d = () => "Апелляция на бан",
  f = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? t() : e === "pt" ? p() : e === "ch" ? o() : e === "de" ? u() : e === "es" ? s() : e === "fr" ? i() : e === "it" ? b() : e === "jp" ? c() : e === "pl" ? l() : e === "ru" ? d() : e === "uk" ? f() : _()
  };
export {
  y as b
};