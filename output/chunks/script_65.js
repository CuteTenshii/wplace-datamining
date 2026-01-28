import {
  g as r
} from "./C_a06lyj.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "a2d67f85c31e3fef075f7f6dde31a8af3e9f3dda"
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
  d = () => "Recours de bannissement",
  f = () => "Ricorso contro il ban",
  l = () => "BANの異議申立て",
  s = () => "Odwołanie od bana",
  b = () => "Апелляция на бан",
  c = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, a = {}) => {
    const e = a.locale ?? r();
    return e === "en" ? t() : e === "pt" ? o() : e === "ch" ? p() : e === "de" ? i() : e === "es" ? u() : e === "fr" ? d() : e === "it" ? f() : e === "jp" ? l() : e === "pl" ? s() : e === "ru" ? b() : e === "uk" ? c() : _()
  };
export {
  y as b
};