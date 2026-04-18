import {
  g as r
} from "./BKKpqwch.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e6c43a335491af110c902083fb644fb71e659308"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fe83abd1-5077-4cc1-8f46-ccf36b0aea9c", e._sentryDebugIdIdentifier = "sentry-dbid-fe83abd1-5077-4cc1-8f46-ccf36b0aea9c")
  } catch {}
})();
const t = () => "Ban appeal",
  p = () => "Revisão de banimento",
  c = () => "封禁申诉",
  o = () => "Bann-Einspruch",
  u = () => "Apelación de ban",
  s = () => "Recours de bannissement",
  i = () => "Ricorso contro il ban",
  f = () => "BANの異議申立て",
  b = () => "Odwołanie od bana",
  l = () => "Апелляция на бан",
  _ = () => "Апеляція на бан",
  d = () => "Kháng cáo lệnh cấm",
  y = (e = {}, a = {}) => {
    const n = a.locale ?? r();
    return n === "en" ? t() : n === "pt" ? p() : n === "ch" ? c() : n === "de" ? o() : n === "es" ? u() : n === "fr" ? s() : n === "it" ? i() : n === "jp" ? f() : n === "pl" ? b() : n === "ru" ? l() : n === "uk" ? _() : d()
  };
export {
  y as b
};