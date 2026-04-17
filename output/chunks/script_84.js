import {
  g as t
} from "./MjchAmJs.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "e00cf9360a6b375b0d5f70104e81f621ce41927c"
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
  l = () => "異議申立て",
  d = () => "Odwołania",
  f = () => "Апелляции",
  _ = () => "Апеляції",
  b = () => "Các kháng cáo",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? p() : e === "de" ? u() : e === "es" ? c() : e === "fr" ? o() : e === "it" ? i() : e === "jp" ? l() : e === "pl" ? d() : e === "ru" ? f() : e === "uk" ? _() : b()
  };
export {
  y as a
};