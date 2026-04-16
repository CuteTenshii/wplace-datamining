import {
  g as t
} from "./C6AhFN09.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
    };
    var n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "1c6dbdf6-dd82-431c-9d28-e752c32322ea", r._sentryDebugIdIdentifier = "sentry-dbid-1c6dbdf6-dd82-431c-9d28-e752c32322ea")
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
  d = () => "Odwołania",
  f = () => "Апелляции",
  _ = () => "Апеляції",
  b = () => "Các kháng cáo",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? p() : e === "de" ? u() : e === "es" ? o() : e === "fr" ? c() : e === "it" ? i() : e === "jp" ? l() : e === "pl" ? d() : e === "ru" ? f() : e === "uk" ? _() : b()
  };
export {
  y as a
};