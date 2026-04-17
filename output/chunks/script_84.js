import {
  g as t
} from "./BYsICFKS.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "fcddd0f6e36106ba60797dbbda80e38f1cbe4c75"
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
  d = () => "Ricorsi",
  i = () => "異議申立て",
  l = () => "Odwołania",
  f = () => "Апелляции",
  _ = () => "Апеляції",
  b = () => "Các kháng cáo",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? p() : e === "de" ? u() : e === "es" ? c() : e === "fr" ? o() : e === "it" ? d() : e === "jp" ? i() : e === "pl" ? l() : e === "ru" ? f() : e === "uk" ? _() : b()
  };
export {
  y as a
};