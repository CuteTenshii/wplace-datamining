import {
  g as t
} from "./BfjUzAZv.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "2286b3af-f8a0-4989-8e2f-205215de8c3c", n._sentryDebugIdIdentifier = "sentry-dbid-2286b3af-f8a0-4989-8e2f-205215de8c3c")
  })()
} catch {}
const a = () => "Appeals",
  s = () => "Apelos",
  o = () => "申诉",
  p = () => "Einsprüche",
  f = () => "Apelaciones",
  u = () => "Recours",
  i = () => "Ricorsi",
  l = () => "異議申立て",
  c = () => "Odwołania",
  d = () => "Апелляции",
  _ = () => "Апеляції",
  b = () => "Các kháng cáo",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? a() : e === "pt" ? s() : e === "ch" ? o() : e === "de" ? p() : e === "es" ? f() : e === "fr" ? u() : e === "it" ? i() : e === "jp" ? l() : e === "pl" ? c() : e === "ru" ? d() : e === "uk" ? _() : b()
  };
export {
  y as a
};