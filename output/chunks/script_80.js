import {
  g as r
} from "./DADvmwwi.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
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
  l = () => "BANの異議申立て",
  f = () => "Odwołanie od bana",
  b = () => "Апелляция на бан",
  _ = () => "Апеляція на бан",
  d = () => "Kháng cáo lệnh cấm",
  y = (e = {}, a = {}) => {
    const n = a.locale ?? r();
    return n === "en" ? t() : n === "pt" ? p() : n === "ch" ? c() : n === "de" ? o() : n === "es" ? u() : n === "fr" ? s() : n === "it" ? i() : n === "jp" ? l() : n === "pl" ? f() : n === "ru" ? b() : n === "uk" ? _() : d()
  };
export {
  y as b
};