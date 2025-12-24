import {
  g as r
} from "./C1q_NHWL.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "43095d4f05ba46dbb6f54b9ec680b6ad581b5a8e"
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
  a = () => "終了",
  l = () => "Koniec",
  b = () => "Конец",
  p = () => "Кінець",
  _ = () => "Kết thúc",
  g = (n = {}, t = {}) => {
    const e = t.locale ?? r();
    return e === "en" ? d() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? u() : e === "es" ? f() : e === "fr" ? s() : e === "it" ? c() : e === "jp" ? a() : e === "pl" ? l() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as e
};