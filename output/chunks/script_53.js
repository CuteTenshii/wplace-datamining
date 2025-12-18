import {
  g as r
} from "./Bu_K0cwi.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "22a546fbb215f27eb1e048884138171ecb9ba2c5"
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
  l = () => "Recours de bannissement",
  s = () => "Ricorso contro il ban",
  c = () => "BANの異議申立て",
  f = () => "Odwołanie od bana",
  b = () => "Апелляция на бан",
  d = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, a = {}) => {
    const e = a.locale ?? r();
    return e === "en" ? t() : e === "pt" ? o() : e === "ch" ? p() : e === "de" ? i() : e === "es" ? u() : e === "fr" ? l() : e === "it" ? s() : e === "jp" ? c() : e === "pl" ? f() : e === "ru" ? b() : e === "uk" ? d() : _()
  };
export {
  y as b
};