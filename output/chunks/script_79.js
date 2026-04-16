import {
  g as r
} from "./kxb4d0Jk.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "209576268ed2d55d78b1f313fb4db5f4a92290b5"
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
  b = () => "BANの異議申立て",
  f = () => "Odwołanie od bana",
  l = () => "Апелляция на бан",
  d = () => "Апеляція на бан",
  _ = () => "Kháng cáo lệnh cấm",
  y = (e = {}, a = {}) => {
    const n = a.locale ?? r();
    return n === "en" ? t() : n === "pt" ? p() : n === "ch" ? o() : n === "de" ? c() : n === "es" ? u() : n === "fr" ? s() : n === "it" ? i() : n === "jp" ? b() : n === "pl" ? f() : n === "ru" ? l() : n === "uk" ? d() : _()
  };
export {
  y as b
};