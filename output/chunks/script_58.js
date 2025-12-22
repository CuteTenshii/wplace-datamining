import {
  g as t
} from "./g2ZRSQwI.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "f4e63ff6847082fed878819138982e523bd7482d"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "ce125a4d-45c0-48a4-bfc6-e93640e57cc3", n._sentryDebugIdIdentifier = "sentry-dbid-ce125a4d-45c0-48a4-bfc6-e93640e57cc3")
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
  c = () => "Odwołania",
  d = () => "Апелляции",
  _ = () => "Апеляції",
  b = () => "Các kháng cáo",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? p() : e === "es" ? u() : e === "fr" ? f() : e === "it" ? i() : e === "jp" ? l() : e === "pl" ? c() : e === "ru" ? d() : e === "uk" ? _() : b()
  };
export {
  y as a
};