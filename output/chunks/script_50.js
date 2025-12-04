import {
  g as t
} from "./cZ5Ywt-D.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "55c2e0b318410e9d206d43885c4f592c4c06606c"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "d2b667be-8c5f-43c5-998b-f2ad92193f52", r._sentryDebugIdIdentifier = "sentry-dbid-d2b667be-8c5f-43c5-998b-f2ad92193f52")
  })()
} catch {}
const d = () => "Leaderboard",
  o = () => "Ranking",
  a = () => "排行榜",
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
    return e === "en" ? d() : e === "pt" ? o() : e === "ch" ? a() : e === "de" ? f() : e === "es" ? i() : e === "fr" ? l() : e === "it" ? s() : e === "jp" ? u() : e === "pl" ? c() : e === "ru" ? b() : e === "uk" ? g() : p()
  };
export {
  y as l
};