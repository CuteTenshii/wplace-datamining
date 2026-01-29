import {
  g as t
} from "./DolGb-m3.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "ee10936229c2fb895ed8cbcf3dab6bc48981481b"
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
  u = () => "Apelaciones",
  f = () => "Recours",
  i = () => "Ricorsi",
  l = () => "異議申立て",
  c = () => "Odwołania",
  d = () => "Апелляции",
  b = () => "Апеляції",
  _ = () => "Các kháng cáo",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? s() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? p() : e === "es" ? u() : e === "fr" ? f() : e === "it" ? i() : e === "jp" ? l() : e === "pl" ? c() : e === "ru" ? d() : e === "uk" ? b() : _()
  };
export {
  y as a
};