import {
  g as t
} from "./DwxruM8H.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "c68723346dc53cede4c33166e0b3070fd4fa2ccb"
    };
    var r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "d7259a40-c1c5-461e-be64-30d5de91a088", n._sentryDebugIdIdentifier = "sentry-dbid-d7259a40-c1c5-461e-be64-30d5de91a088")
  } catch {}
})();
const l = () => "Alliances",
  a = () => "Alianças",
  s = () => "联盟",
  c = () => "Allianzen",
  i = () => "Alianzas",
  u = () => "Alliances",
  o = () => "Alleanze",
  d = () => "アライアンス",
  f = () => "Sojusze",
  _ = () => "Альянсы",
  b = () => "Альянси",
  p = () => "Các liên minh",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? l() : e === "pt" ? a() : e === "ch" ? s() : e === "de" ? c() : e === "es" ? i() : e === "fr" ? u() : e === "it" ? o() : e === "jp" ? d() : e === "pl" ? f() : e === "ru" ? _() : e === "uk" ? b() : p()
  };
export {
  y as a
};