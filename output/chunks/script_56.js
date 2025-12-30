import {
  g as r
} from "./B1vEyi0i.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "f3dcc3e771086c0f63d8ece84cd728044b2a0f0d"
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
  c = () => "Recours de bannissement",
  l = () => "Ricorso contro il ban",
  d = () => "BANの異議申立て",
  f = () => "Odwołanie od bana",
  s = () => "Апелляция на бан",
  b = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, a = {}) => {
    const e = a.locale ?? r();
    return e === "en" ? t() : e === "pt" ? o() : e === "ch" ? p() : e === "de" ? i() : e === "es" ? u() : e === "fr" ? c() : e === "it" ? l() : e === "jp" ? d() : e === "pl" ? f() : e === "ru" ? s() : e === "uk" ? b() : _()
  };
export {
  y as b
};