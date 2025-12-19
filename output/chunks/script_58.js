import {
  g as t
} from "./DPMSJe7W.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "ed3bbe4c8b5513729863e5c0724fcbd405ffa555"
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
  c = () => "Apelaciones",
  u = () => "Recours",
  i = () => "Ricorsi",
  l = () => "異議申立て",
  f = () => "Odwołania",
  d = () => "Апелляции",
  b = () => "Апеляції",
  _ = () => "Các kháng cáo",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? p() : e === "es" ? c() : e === "fr" ? u() : e === "it" ? i() : e === "jp" ? l() : e === "pl" ? f() : e === "ru" ? d() : e === "uk" ? b() : _()
  };
export {
  y as a
};