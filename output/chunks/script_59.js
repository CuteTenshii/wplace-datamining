import {
  g as t
} from "./DXljTAZ5.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "af4d0c48dcaddf93c9bc56ee907626a523833bd3"
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
  c = () => "Classement",
  f = () => "Classifica",
  s = () => "ランキング",
  u = () => "Ranking",
  b = () => "Таблица лидеров",
  g = () => "Таблиця лідерів",
  p = () => "Bảng xếp hạng",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? d() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? l() : e === "fr" ? c() : e === "it" ? f() : e === "jp" ? s() : e === "pl" ? u() : e === "ru" ? b() : e === "uk" ? g() : p()
  };
export {
  y as l
};