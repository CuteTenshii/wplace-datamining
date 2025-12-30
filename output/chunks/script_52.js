import {
  g as r
} from "./B1vEyi0i.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "f3dcc3e771086c0f63d8ece84cd728044b2a0f0d"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new n.Error().stack;
    t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "1e740868-1235-4a63-95dd-e79e782d3baa", n._sentryDebugIdIdentifier = "sentry-dbid-1e740868-1235-4a63-95dd-e79e782d3baa")
  })()
} catch {}
const d = () => "End",
  o = () => "Fim",
  i = () => "结束",
  u = () => "Ende",
  f = () => "Fin",
  s = () => "Fin",
  c = () => "Fine",
  l = () => "終了",
  a = () => "Koniec",
  p = () => "Конец",
  _ = () => "Кінець",
  b = () => "Kết thúc",
  g = (n = {}, t = {}) => {
    const e = t.locale ?? r();
    return e === "en" ? d() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? u() : e === "es" ? f() : e === "fr" ? s() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? a() : e === "ru" ? p() : e === "uk" ? _() : b()
  };
export {
  g as e
};