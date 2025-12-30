import {
  g as r
} from "./JcMV53SJ.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "5f26df466977fd01d18eb1a4a8743e0ce83f1b4f"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new n.Error().stack;
    a && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[a] = "ac2bd81a-caea-402f-892c-71119d430310", n._sentryDebugIdIdentifier = "sentry-dbid-ac2bd81a-caea-402f-892c-71119d430310")
  })()
} catch {}
const t = () => "Ban appeal",
  o = () => "Revisão de banimento",
  p = () => "封禁申诉",
  i = () => "Bann-Einspruch",
  u = () => "Apelación de ban",
  f = () => "Recours de bannissement",
  l = () => "Ricorso contro il ban",
  d = () => "BANの異議申立て",
  s = () => "Odwołanie od bana",
  c = () => "Апелляция на бан",
  b = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, a = {}) => {
    const e = a.locale ?? r();
    return e === "en" ? t() : e === "pt" ? o() : e === "ch" ? p() : e === "de" ? i() : e === "es" ? u() : e === "fr" ? f() : e === "it" ? l() : e === "jp" ? d() : e === "pl" ? s() : e === "ru" ? c() : e === "uk" ? b() : _()
  };
export {
  y as b
};