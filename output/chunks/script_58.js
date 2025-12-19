import {
  g as t
} from "./Doj4Osb_.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "1fc63189bd875d45532225bb2fa0d0f149510e94"
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
  c = () => "Recours",
  i = () => "Ricorsi",
  l = () => "異議申立て",
  f = () => "Odwołania",
  d = () => "Апелляции",
  b = () => "Апеляції",
  _ = () => "Các kháng cáo",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? p() : e === "es" ? u() : e === "fr" ? c() : e === "it" ? i() : e === "jp" ? l() : e === "pl" ? f() : e === "ru" ? d() : e === "uk" ? b() : _()
  };
export {
  y as a
};