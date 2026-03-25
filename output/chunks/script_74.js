import {
  g as t
} from "./Cq_U3JVf.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "e30448959e42fd3ea2fc5cd1f2671639056880b6"
    };
    var n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "996525c0-034f-472b-9f89-f66661d27508", r._sentryDebugIdIdentifier = "sentry-dbid-996525c0-034f-472b-9f89-f66661d27508")
  } catch {}
})();
const s = () => "Appeals",
  a = () => "Apelos",
  p = () => "申诉",
  u = () => "Einsprüche",
  o = () => "Apelaciones",
  f = () => "Recours",
  i = () => "Ricorsi",
  c = () => "異議申立て",
  l = () => "Odwołania",
  d = () => "Апелляции",
  _ = () => "Апеляції",
  b = () => "Các kháng cáo",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? p() : e === "de" ? u() : e === "es" ? o() : e === "fr" ? f() : e === "it" ? i() : e === "jp" ? c() : e === "pl" ? l() : e === "ru" ? d() : e === "uk" ? _() : b()
  };
export {
  y as a
};