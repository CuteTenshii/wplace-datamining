import {
  g as t
} from "./BWURdrR3.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "57f41670f2805f713b0da8f3636738eb734a70e1"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "1c6dbdf6-dd82-431c-9d28-e752c32322ea", n._sentryDebugIdIdentifier = "sentry-dbid-1c6dbdf6-dd82-431c-9d28-e752c32322ea")
  })()
} catch {}
const s = () => "Appeals",
  a = () => "Apelos",
  o = () => "申诉",
  p = () => "Einsprüche",
  u = () => "Apelaciones",
  f = () => "Recours",
  i = () => "Ricorsi",
  l = () => "異議申立て",
  d = () => "Odwołania",
  c = () => "Апелляции",
  b = () => "Апеляції",
  _ = () => "Các kháng cáo",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? p() : e === "es" ? u() : e === "fr" ? f() : e === "it" ? i() : e === "jp" ? l() : e === "pl" ? d() : e === "ru" ? c() : e === "uk" ? b() : _()
  };
export {
  y as a
};