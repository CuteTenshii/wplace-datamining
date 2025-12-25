import {
  g as r
} from "./E8BzAKy9.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "ee860fc816b3b13288b485f763a0872cd79cba7b"
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
  b = () => "Конец",
  p = () => "Кінець",
  _ = () => "Kết thúc",
  g = (n = {}, t = {}) => {
    const e = t.locale ?? r();
    return e === "en" ? d() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? u() : e === "es" ? f() : e === "fr" ? s() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? a() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as e
};