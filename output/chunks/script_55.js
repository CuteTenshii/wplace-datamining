import {
  g as a
} from "./BfjUzAZv.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "0d37c3d9-ec60-4f81-8244-71c5305fe21f", n._sentryDebugIdIdentifier = "sentry-dbid-0d37c3d9-ec60-4f81-8244-71c5305fe21f")
  })()
} catch {}
const t = () => "Ban appeal",
  o = () => "Revisão de banimento",
  p = () => "封禁申诉",
  i = () => "Bann-Einspruch",
  f = () => "Apelación de ban",
  u = () => "Recours de bannissement",
  l = () => "Ricorso contro il ban",
  d = () => "BANの異議申立て",
  s = () => "Odwołanie od bana",
  c = () => "Апелляция на бан",
  b = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? t() : e === "pt" ? o() : e === "ch" ? p() : e === "de" ? i() : e === "es" ? f() : e === "fr" ? u() : e === "it" ? l() : e === "jp" ? d() : e === "pl" ? s() : e === "ru" ? c() : e === "uk" ? b() : _()
  };
export {
  y as b
};