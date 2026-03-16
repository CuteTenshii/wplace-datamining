import {
  g as t
} from "./CCnR8d1l.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "6c9b69506cfe19dc0f0d9bebc0491abdbf11db02"
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
  c = () => "Recours",
  f = () => "Ricorsi",
  i = () => "異議申立て",
  l = () => "Odwołania",
  d = () => "Апелляции",
  b = () => "Апеляції",
  _ = () => "Các kháng cáo",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? p() : e === "de" ? u() : e === "es" ? o() : e === "fr" ? c() : e === "it" ? f() : e === "jp" ? i() : e === "pl" ? l() : e === "ru" ? d() : e === "uk" ? b() : _()
  };
export {
  y as a
};