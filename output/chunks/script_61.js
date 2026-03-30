import {
  g as t
} from "./dO1JPExC.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "5caf19ac7c00bf81392f2f2ae2213734555d83f2"
    };
    var n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "1e93dc64-ec27-4951-9b91-00817e081e2b", r._sentryDebugIdIdentifier = "sentry-dbid-1e93dc64-ec27-4951-9b91-00817e081e2b")
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
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? a() : e === "pt" ? d() : e === "ch" ? o() : e === "de" ? s() : e === "es" ? u() : e === "fr" ? i() : e === "it" ? l() : e === "jp" ? c() : e === "pl" ? f() : e === "ru" ? b() : e === "uk" ? _() : g()
  };
export {
  y as l
};