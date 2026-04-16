import {
  g as r
} from "./CMbhZE-K.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6f22cff8187de3395cfbf72b619a597cbd559223"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fe83abd1-5077-4cc1-8f46-ccf36b0aea9c", e._sentryDebugIdIdentifier = "sentry-dbid-fe83abd1-5077-4cc1-8f46-ccf36b0aea9c")
  } catch {}
})();
const t = () => "Ban appeal",
  c = () => "Revisão de banimento",
  p = () => "封禁申诉",
  o = () => "Bann-Einspruch",
  u = () => "Apelación de ban",
  s = () => "Recours de bannissement",
  f = () => "Ricorso contro il ban",
  i = () => "BANの異議申立て",
  b = () => "Odwołanie od bana",
  l = () => "Апелляция на бан",
  _ = () => "Апеляція на бан",
  d = () => "Kháng cáo lệnh cấm",
  y = (e = {}, a = {}) => {
    const n = a.locale ?? r();
    return n === "en" ? t() : n === "pt" ? c() : n === "ch" ? p() : n === "de" ? o() : n === "es" ? u() : n === "fr" ? s() : n === "it" ? f() : n === "jp" ? i() : n === "pl" ? b() : n === "ru" ? l() : n === "uk" ? _() : d()
  };
export {
  y as b
};