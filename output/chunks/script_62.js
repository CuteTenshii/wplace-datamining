import {
  g as r
} from "./BWURdrR3.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "57f41670f2805f713b0da8f3636738eb734a70e1"
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
  l = () => "Ricorso contro il ban",
  c = () => "BANの異議申立て",
  s = () => "Odwołanie od bana",
  b = () => "Апелляция на бан",
  d = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (n = {}, a = {}) => {
    const e = a.locale ?? r();
    return e === "en" ? t() : e === "pt" ? o() : e === "ch" ? f() : e === "de" ? p() : e === "es" ? i() : e === "fr" ? u() : e === "it" ? l() : e === "jp" ? c() : e === "pl" ? s() : e === "ru" ? b() : e === "uk" ? d() : _()
  };
export {
  y as b
};