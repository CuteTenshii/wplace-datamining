import {
  g as t
} from "./CxGAPZJ7.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "aa4c5126665948c178117465fb480b1b818fb90b"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "c521f84a-2107-4ec8-8d09-ba09cdbc69c2", r._sentryDebugIdIdentifier = "sentry-dbid-c521f84a-2107-4ec8-8d09-ba09cdbc69c2")
  })()
} catch {}
const d = () => "Leaderboard",
  a = () => "Ranking",
  o = () => "排行榜",
  i = () => "Bestenliste",
  l = () => "Clasificación",
  f = () => "Classement",
  s = () => "Classifica",
  u = () => "ランキング",
  c = () => "Ranking",
  b = () => "Таблица лидеров",
  g = () => "Таблиця лідерів",
  p = () => "Bảng xếp hạng",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? d() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? l() : e === "fr" ? f() : e === "it" ? s() : e === "jp" ? u() : e === "pl" ? c() : e === "ru" ? b() : e === "uk" ? g() : p()
  };
export {
  y as l
};