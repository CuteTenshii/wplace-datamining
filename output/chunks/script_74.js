import {
  g as t
} from "./DNNhrQmR.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "ceaf71126b6ebfffce341bb7a3def1f2574f660c"
    };
    var n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "996525c0-034f-472b-9f89-f66661d27508", r._sentryDebugIdIdentifier = "sentry-dbid-996525c0-034f-472b-9f89-f66661d27508")
  } catch {}
})();
const s = () => "Appeals",
  a = () => "Apelos",
  p = () => "申诉",
  f = () => "Einsprüche",
  u = () => "Apelaciones",
  o = () => "Recours",
  c = () => "Ricorsi",
  i = () => "異議申立て",
  l = () => "Odwołania",
  d = () => "Апелляции",
  _ = () => "Апеляції",
  b = () => "Các kháng cáo",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? p() : e === "de" ? f() : e === "es" ? u() : e === "fr" ? o() : e === "it" ? c() : e === "jp" ? i() : e === "pl" ? l() : e === "ru" ? d() : e === "uk" ? _() : b()
  };
export {
  y as a
};