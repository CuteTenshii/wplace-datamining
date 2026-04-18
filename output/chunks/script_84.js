import {
  g as t
} from "./C33D4ipC.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "f2a47ca0cf31d67c069828387c1df370b5604651"
    };
    var n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "1c6dbdf6-dd82-431c-9d28-e752c32322ea", r._sentryDebugIdIdentifier = "sentry-dbid-1c6dbdf6-dd82-431c-9d28-e752c32322ea")
  } catch {}
})();
const s = () => "Appeals",
  a = () => "Apelos",
  p = () => "申诉",
  c = () => "Einsprüche",
  u = () => "Apelaciones",
  o = () => "Recours",
  i = () => "Ricorsi",
  d = () => "異議申立て",
  l = () => "Odwołania",
  f = () => "Апелляции",
  _ = () => "Апеляції",
  b = () => "Các kháng cáo",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? p() : e === "de" ? c() : e === "es" ? u() : e === "fr" ? o() : e === "it" ? i() : e === "jp" ? d() : e === "pl" ? l() : e === "ru" ? f() : e === "uk" ? _() : b()
  };
export {
  y as a
};