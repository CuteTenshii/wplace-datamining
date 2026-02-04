import {
  g as t
} from "./VsNXmfsE.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "1ff68788c5989e2fec5a9c9b2aaa5ef268601fd5"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "bebb4e96-3c86-49f3-92f8-00c1c85e4e63", n._sentryDebugIdIdentifier = "sentry-dbid-bebb4e96-3c86-49f3-92f8-00c1c85e4e63")
  })()
} catch {}
const s = () => "Appeals",
  a = () => "Apelos",
  o = () => "申诉",
  p = () => "Einsprüche",
  f = () => "Apelaciones",
  u = () => "Recours",
  i = () => "Ricorsi",
  l = () => "異議申立て",
  c = () => "Odwołania",
  d = () => "Апелляции",
  b = () => "Апеляції",
  _ = () => "Các kháng cáo",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? p() : e === "es" ? f() : e === "fr" ? u() : e === "it" ? i() : e === "jp" ? l() : e === "pl" ? c() : e === "ru" ? d() : e === "uk" ? b() : _()
  };
export {
  y as a
};