import {
  g as r
} from "./CQ_gfREe.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "e6efb14bb5e52798ae71a524d6603a123d144219"
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
  s = () => "Ricorso contro il ban",
  b = () => "BANの異議申立て",
  d = () => "Odwołanie od bana",
  f = () => "Апелляция на бан",
  c = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, a = {}) => {
    const e = a.locale ?? r();
    return e === "en" ? t() : e === "pt" ? o() : e === "ch" ? p() : e === "de" ? i() : e === "es" ? u() : e === "fr" ? l() : e === "it" ? s() : e === "jp" ? b() : e === "pl" ? d() : e === "ru" ? f() : e === "uk" ? c() : _()
  };
export {
  y as b
};