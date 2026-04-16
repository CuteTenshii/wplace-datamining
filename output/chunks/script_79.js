import {
  g as r
} from "./C6AhFN09.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fe83abd1-5077-4cc1-8f46-ccf36b0aea9c", e._sentryDebugIdIdentifier = "sentry-dbid-fe83abd1-5077-4cc1-8f46-ccf36b0aea9c")
  } catch {}
})();
const t = () => "Ban appeal",
  p = () => "Revisão de banimento",
  o = () => "封禁申诉",
  c = () => "Bann-Einspruch",
  u = () => "Apelación de ban",
  s = () => "Recours de bannissement",
  i = () => "Ricorso contro il ban",
  f = () => "BANの異議申立て",
  l = () => "Odwołanie od bana",
  b = () => "Апелляция на бан",
  _ = () => "Апеляція на бан",
  d = () => "Kháng cáo lệnh cấm",
  y = (e = {}, a = {}) => {
    const n = a.locale ?? r();
    return n === "en" ? t() : n === "pt" ? p() : n === "ch" ? o() : n === "de" ? c() : n === "es" ? u() : n === "fr" ? s() : n === "it" ? i() : n === "jp" ? f() : n === "pl" ? l() : n === "ru" ? b() : n === "uk" ? _() : d()
  };
export {
  y as b
};