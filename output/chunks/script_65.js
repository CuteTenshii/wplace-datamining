import {
  g as t
} from "./lNmZA2C_.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
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
  d = () => "Apelaciones",
  u = () => "Recours",
  f = () => "Ricorsi",
  i = () => "異議申立て",
  l = () => "Odwołania",
  c = () => "Апелляции",
  _ = () => "Апеляції",
  b = () => "Các kháng cáo",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? p() : e === "es" ? d() : e === "fr" ? u() : e === "it" ? f() : e === "jp" ? i() : e === "pl" ? l() : e === "ru" ? c() : e === "uk" ? _() : b()
  };
export {
  y as a
};