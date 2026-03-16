import {
  g as t
} from "./DIegaxO1.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "d07d8848ea889a09465db794dc92b79d5c096c7e"
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
  i = () => "Ricorsi",
  l = () => "異議申立て",
  f = () => "Odwołania",
  d = () => "Апелляции",
  _ = () => "Апеляції",
  b = () => "Các kháng cáo",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? p() : e === "de" ? u() : e === "es" ? o() : e === "fr" ? c() : e === "it" ? i() : e === "jp" ? l() : e === "pl" ? f() : e === "ru" ? d() : e === "uk" ? _() : b()
  };
export {
  y as a
};