import {
  g as r
} from "./BZGVaLJf.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "e0127cf3e7a9cd170d72434c8831b6836f9b0e1e"
    };
    var a = new n.Error().stack;
    a && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[a] = "fe83abd1-5077-4cc1-8f46-ccf36b0aea9c", n._sentryDebugIdIdentifier = "sentry-dbid-fe83abd1-5077-4cc1-8f46-ccf36b0aea9c")
  } catch {}
})();
const t = () => "Ban appeal",
  c = () => "Revisão de banimento",
  p = () => "封禁申诉",
  o = () => "Bann-Einspruch",
  u = () => "Apelación de ban",
  s = () => "Recours de bannissement",
  i = () => "Ricorso contro il ban",
  b = () => "BANの異議申立て",
  f = () => "Odwołanie od bana",
  l = () => "Апелляция на бан",
  _ = () => "Апеляція на бан",
  d = () => "Kháng cáo lệnh cấm",
  y = (n = {}, a = {}) => {
    const e = a.locale ?? r();
    return e === "en" ? t() : e === "pt" ? c() : e === "ch" ? p() : e === "de" ? o() : e === "es" ? u() : e === "fr" ? s() : e === "it" ? i() : e === "jp" ? b() : e === "pl" ? f() : e === "ru" ? l() : e === "uk" ? _() : d()
  };
export {
  y as b
};