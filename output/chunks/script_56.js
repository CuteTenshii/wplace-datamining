import {
  g as t
} from "./D5qrl5-_.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "1064b7515953fcf97fd0dd3f98c3a1e27dfd80a9"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "ddfd23e0-658a-42b8-8756-eb9861ada9cd", n._sentryDebugIdIdentifier = "sentry-dbid-ddfd23e0-658a-42b8-8756-eb9861ada9cd")
  })()
} catch {}
const a = () => "Appeals",
  s = () => "Apelos",
  o = () => "申诉",
  p = () => "Einsprüche",
  d = () => "Apelaciones",
  f = () => "Recours",
  u = () => "Ricorsi",
  i = () => "異議申立て",
  l = () => "Odwołania",
  c = () => "Апелляции",
  b = () => "Апеляції",
  _ = () => "Các kháng cáo",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? a() : e === "pt" ? s() : e === "ch" ? o() : e === "de" ? p() : e === "es" ? d() : e === "fr" ? f() : e === "it" ? u() : e === "jp" ? i() : e === "pl" ? l() : e === "ru" ? c() : e === "uk" ? b() : _()
  };
export {
  y as a
};