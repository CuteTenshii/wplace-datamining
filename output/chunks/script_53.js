import {
  g as t
} from "./FJFkb2i2.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "dfb4bddd9fb2b4748eaf19466331b7b547c362b7"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "0e8a60a4-8fd6-4de6-b91d-370359835fa2", n._sentryDebugIdIdentifier = "sentry-dbid-0e8a60a4-8fd6-4de6-b91d-370359835fa2")
  })()
} catch {}
const l = () => "Alliances",
  a = () => "Alianças",
  i = () => "联盟",
  s = () => "Allianzen",
  f = () => "Alianzas",
  o = () => "Alliances",
  u = () => "Alleanze",
  c = () => "アライアンス",
  d = () => "Sojusze",
  b = () => "Альянсы",
  p = () => "Альянси",
  _ = () => "Các liên minh",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? l() : e === "pt" ? a() : e === "ch" ? i() : e === "de" ? s() : e === "es" ? f() : e === "fr" ? o() : e === "it" ? u() : e === "jp" ? c() : e === "pl" ? d() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as a
};