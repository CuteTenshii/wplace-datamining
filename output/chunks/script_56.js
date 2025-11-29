import {
  g as t
} from "./Blx2cLJH.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "c162605020db3f70298b20f062b9da755abfa489"
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
  u = () => "Apelaciones",
  d = () => "Recours",
  i = () => "Ricorsi",
  l = () => "異議申立て",
  f = () => "Odwołania",
  c = () => "Апелляции",
  b = () => "Апеляції",
  _ = () => "Các kháng cáo",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? a() : e === "pt" ? s() : e === "ch" ? o() : e === "de" ? p() : e === "es" ? u() : e === "fr" ? d() : e === "it" ? i() : e === "jp" ? l() : e === "pl" ? f() : e === "ru" ? c() : e === "uk" ? b() : _()
  };
export {
  y as a
};