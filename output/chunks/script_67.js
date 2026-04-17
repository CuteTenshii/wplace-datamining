import {
  g as t
} from "./BZGVaLJf.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "e0127cf3e7a9cd170d72434c8831b6836f9b0e1e"
    };
    var n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "6f73ead8-0cc2-4bd8-a02a-414b83a59993", r._sentryDebugIdIdentifier = "sentry-dbid-6f73ead8-0cc2-4bd8-a02a-414b83a59993")
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