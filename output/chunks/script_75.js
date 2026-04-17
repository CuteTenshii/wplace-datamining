import {
  g as t
} from "./DADvmwwi.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
    };
    var r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "d7259a40-c1c5-461e-be64-30d5de91a088", n._sentryDebugIdIdentifier = "sentry-dbid-d7259a40-c1c5-461e-be64-30d5de91a088")
  } catch {}
})();
const a = () => "Alliances",
  l = () => "Alianças",
  s = () => "联盟",
  i = () => "Allianzen",
  c = () => "Alianzas",
  u = () => "Alliances",
  o = () => "Alleanze",
  d = () => "アライアンス",
  f = () => "Sojusze",
  _ = () => "Альянсы",
  p = () => "Альянси",
  b = () => "Các liên minh",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? a() : e === "pt" ? l() : e === "ch" ? s() : e === "de" ? i() : e === "es" ? c() : e === "fr" ? u() : e === "it" ? o() : e === "jp" ? d() : e === "pl" ? f() : e === "ru" ? _() : e === "uk" ? p() : b()
  };
export {
  y as a
};