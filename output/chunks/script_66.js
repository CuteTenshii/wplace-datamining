import {
  g as r
} from "./DvwOtY4M.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "7643ba5d2918c38f2d3e1507dfee87cd2c0bfa50"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new n.Error().stack;
    a && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[a] = "dbe4153e-51b8-49ec-99c6-2b9751d8a5e4", n._sentryDebugIdIdentifier = "sentry-dbid-dbe4153e-51b8-49ec-99c6-2b9751d8a5e4")
  })()
} catch {}
const t = () => "Ban appeal",
  o = () => "Revisão de banimento",
  p = () => "封禁申诉",
  i = () => "Bann-Einspruch",
  u = () => "Apelación de ban",
  l = () => "Recours de bannissement",
  d = () => "Ricorso contro il ban",
  s = () => "BANの異議申立て",
  b = () => "Odwołanie od bana",
  c = () => "Апелляция на бан",
  f = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, a = {}) => {
    const e = a.locale ?? r();
    return e === "en" ? t() : e === "pt" ? o() : e === "ch" ? p() : e === "de" ? i() : e === "es" ? u() : e === "fr" ? l() : e === "it" ? d() : e === "jp" ? s() : e === "pl" ? b() : e === "ru" ? c() : e === "uk" ? f() : _()
  };
export {
  y as b
};