import {
  g as o
} from "./DNe0cQT0.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "29ae9b21d49bd1827c9d9708d11ce0563a962117"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "971da68e-5d87-43de-87f3-65a92b1b8572", e._sentryDebugIdIdentifier = "sentry-dbid-971da68e-5d87-43de-87f3-65a92b1b8572")
  })()
} catch {}
const t = () => "Select the report reason",
  d = () => "Selecione o motivo da denúncia",
  s = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? t() : d();
export {
  s
};