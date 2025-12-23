import {
  g as t
} from "./CMw04vg4.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "8706a848567fc83422d651908aa77f13fdf383e3"
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
const a = () => "Appeals",
  s = () => "Apelos",
  o = () => "申诉",
  p = () => "Einsprüche",
  u = () => "Apelaciones",
  c = () => "Recours",
  f = () => "Ricorsi",
  i = () => "異議申立て",
  l = () => "Odwołania",
  d = () => "Апелляции",
  _ = () => "Апеляції",
  b = () => "Các kháng cáo",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? a() : e === "pt" ? s() : e === "ch" ? o() : e === "de" ? p() : e === "es" ? u() : e === "fr" ? c() : e === "it" ? f() : e === "jp" ? i() : e === "pl" ? l() : e === "ru" ? d() : e === "uk" ? _() : b()
  };
export {
  y as a
};