import {
  g as t
} from "./C33D4ipC.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f2a47ca0cf31d67c069828387c1df370b5604651"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6f73ead8-0cc2-4bd8-a02a-414b83a59993", e._sentryDebugIdIdentifier = "sentry-dbid-6f73ead8-0cc2-4bd8-a02a-414b83a59993")
  } catch {}
})();
const a = () => "Leaderboard",
  d = () => "Ranking",
  o = () => "排行榜",
  s = () => "Bestenliste",
  u = () => "Clasificación",
  i = () => "Classement",
  l = () => "Classifica",
  c = () => "ランキング",
  f = () => "Ranking",
  b = () => "Таблица лидеров",
  _ = () => "Таблиця лідерів",
  g = () => "Bảng xếp hạng",
  y = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? a() : r === "pt" ? d() : r === "ch" ? o() : r === "de" ? s() : r === "es" ? u() : r === "fr" ? i() : r === "it" ? l() : r === "jp" ? c() : r === "pl" ? f() : r === "ru" ? b() : r === "uk" ? _() : g()
  };
export {
  y as l
};