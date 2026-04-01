import {
  g as t
} from "./BT9k_vYz.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "be8234278ededc2527fbc3b765caee2baaf18120"
    };
    var n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "1e93dc64-ec27-4951-9b91-00817e081e2b", r._sentryDebugIdIdentifier = "sentry-dbid-1e93dc64-ec27-4951-9b91-00817e081e2b")
  } catch {}
})();
const d = () => "Leaderboard",
  a = () => "Ranking",
  o = () => "排行榜",
  s = () => "Bestenliste",
  u = () => "Clasificación",
  i = () => "Classement",
  l = () => "Classifica",
  c = () => "ランキング",
  b = () => "Ranking",
  f = () => "Таблица лидеров",
  _ = () => "Таблиця лідерів",
  g = () => "Bảng xếp hạng",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? d() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? s() : e === "es" ? u() : e === "fr" ? i() : e === "it" ? l() : e === "jp" ? c() : e === "pl" ? b() : e === "ru" ? f() : e === "uk" ? _() : g()
  };
export {
  y as l
};