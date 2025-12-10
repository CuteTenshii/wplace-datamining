import {
  g as t
} from "./DqmGa208.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "4a4894320a12997d7c10bab38a71bb767b99274e"
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
const a = () => "Leaderboard",
  d = () => "Ranking",
  o = () => "排行榜",
  i = () => "Bestenliste",
  l = () => "Clasificación",
  s = () => "Classement",
  u = () => "Classifica",
  f = () => "ランキング",
  b = () => "Ranking",
  c = () => "Таблица лидеров",
  g = () => "Таблиця лідерів",
  p = () => "Bảng xếp hạng",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? a() : e === "pt" ? d() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? l() : e === "fr" ? s() : e === "it" ? u() : e === "jp" ? f() : e === "pl" ? b() : e === "ru" ? c() : e === "uk" ? g() : p()
  };
export {
  y as l
};