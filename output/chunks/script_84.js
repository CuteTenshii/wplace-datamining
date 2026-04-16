import {
  g as t
} from "./CMbhZE-K.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "6f22cff8187de3395cfbf72b619a597cbd559223"
    };
    var n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "1c6dbdf6-dd82-431c-9d28-e752c32322ea", r._sentryDebugIdIdentifier = "sentry-dbid-1c6dbdf6-dd82-431c-9d28-e752c32322ea")
  } catch {}
})();
const s = () => "Appeals",
  a = () => "Apelos",
  p = () => "申诉",
  u = () => "Einsprüche",
  c = () => "Apelaciones",
  o = () => "Recours",
  i = () => "Ricorsi",
  d = () => "異議申立て",
  f = () => "Odwołania",
  l = () => "Апелляции",
  _ = () => "Апеляції",
  b = () => "Các kháng cáo",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? p() : e === "de" ? u() : e === "es" ? c() : e === "fr" ? o() : e === "it" ? i() : e === "jp" ? d() : e === "pl" ? f() : e === "ru" ? l() : e === "uk" ? _() : b()
  };
export {
  y as a
};