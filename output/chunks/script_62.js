import {
  g as r
} from "./lNmZA2C_.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new n.Error().stack;
    a && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[a] = "fe83abd1-5077-4cc1-8f46-ccf36b0aea9c", n._sentryDebugIdIdentifier = "sentry-dbid-fe83abd1-5077-4cc1-8f46-ccf36b0aea9c")
  })()
} catch {}
const t = () => "Ban appeal",
  o = () => "Revisão de banimento",
  f = () => "封禁申诉",
  p = () => "Bann-Einspruch",
  i = () => "Apelación de ban",
  u = () => "Recours de bannissement",
  c = () => "Ricorso contro il ban",
  l = () => "BANの異議申立て",
  s = () => "Odwołanie od bana",
  d = () => "Апелляция на бан",
  b = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, a = {}) => {
    const e = a.locale ?? r();
    return e === "en" ? t() : e === "pt" ? o() : e === "ch" ? f() : e === "de" ? p() : e === "es" ? i() : e === "fr" ? u() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? s() : e === "ru" ? d() : e === "uk" ? b() : _()
  };
export {
  y as b
};