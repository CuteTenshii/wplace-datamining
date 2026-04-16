import {
  g as t
} from "./CMbhZE-K.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6f22cff8187de3395cfbf72b619a597cbd559223"
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
  f = () => "Classifica",
  l = () => "ランキング",
  c = () => "Ranking",
  b = () => "Таблица лидеров",
  _ = () => "Таблиця лідерів",
  g = () => "Bảng xếp hạng",
  y = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? a() : r === "pt" ? d() : r === "ch" ? o() : r === "de" ? s() : r === "es" ? u() : r === "fr" ? i() : r === "it" ? f() : r === "jp" ? l() : r === "pl" ? c() : r === "ru" ? b() : r === "uk" ? _() : g()
  };
export {
  y as l
};