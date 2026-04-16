import {
  g as t
} from "./CMbhZE-K.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "6f22cff8187de3395cfbf72b619a597cbd559223"
    };
    var r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "d7259a40-c1c5-461e-be64-30d5de91a088", n._sentryDebugIdIdentifier = "sentry-dbid-d7259a40-c1c5-461e-be64-30d5de91a088")
  } catch {}
})();
const l = () => "Alliances",
  a = () => "Alianças",
  s = () => "联盟",
  i = () => "Allianzen",
  c = () => "Alianzas",
  u = () => "Alliances",
  o = () => "Alleanze",
  f = () => "アライアンス",
  d = () => "Sojusze",
  _ = () => "Альянсы",
  b = () => "Альянси",
  p = () => "Các liên minh",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? l() : e === "pt" ? a() : e === "ch" ? s() : e === "de" ? i() : e === "es" ? c() : e === "fr" ? u() : e === "it" ? o() : e === "jp" ? f() : e === "pl" ? d() : e === "ru" ? _() : e === "uk" ? b() : p()
  };
export {
  y as a
};