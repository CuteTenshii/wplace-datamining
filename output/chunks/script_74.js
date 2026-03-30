import {
  g as t
} from "./56ZBUmtO.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "b137ab40316e1e3f22728d8060cbbff276df86f5"
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
  l = () => "異議申立て",
  c = () => "Odwołania",
  d = () => "Апелляции",
  _ = () => "Апеляції",
  b = () => "Các kháng cáo",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? p() : e === "de" ? u() : e === "es" ? o() : e === "fr" ? f() : e === "it" ? i() : e === "jp" ? l() : e === "pl" ? c() : e === "ru" ? d() : e === "uk" ? _() : b()
  };
export {
  y as a
};