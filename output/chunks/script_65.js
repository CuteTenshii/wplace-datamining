import {
  g as r
} from "./VsNXmfsE.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "1ff68788c5989e2fec5a9c9b2aaa5ef268601fd5"
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
  f = () => "Ricorso contro il ban",
  s = () => "BANの異議申立て",
  c = () => "Odwołanie od bana",
  d = () => "Апелляция на бан",
  b = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, a = {}) => {
    const e = a.locale ?? r();
    return e === "en" ? t() : e === "pt" ? o() : e === "ch" ? p() : e === "de" ? i() : e === "es" ? u() : e === "fr" ? l() : e === "it" ? f() : e === "jp" ? s() : e === "pl" ? c() : e === "ru" ? d() : e === "uk" ? b() : _()
  };
export {
  y as b
};