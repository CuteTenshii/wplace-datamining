import {
  g as t
} from "./JcMV53SJ.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "5f26df466977fd01d18eb1a4a8743e0ce83f1b4f"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "760c09b1-ad8e-4500-8f32-80057e903a29", r._sentryDebugIdIdentifier = "sentry-dbid-760c09b1-ad8e-4500-8f32-80057e903a29")
  })()
} catch {}
const d = () => "Leaderboard",
  a = () => "Ranking",
  o = () => "排行榜",
  f = () => "Bestenliste",
  i = () => "Clasificación",
  l = () => "Classement",
  s = () => "Classifica",
  u = () => "ランキング",
  c = () => "Ranking",
  b = () => "Таблица лидеров",
  g = () => "Таблиця лідерів",
  p = () => "Bảng xếp hạng",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? d() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? f() : e === "es" ? i() : e === "fr" ? l() : e === "it" ? s() : e === "jp" ? u() : e === "pl" ? c() : e === "ru" ? b() : e === "uk" ? g() : p()
  };
export {
  y as l
};