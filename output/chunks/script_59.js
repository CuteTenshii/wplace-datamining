import {
  g as t
} from "./VsNXmfsE.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "1ff68788c5989e2fec5a9c9b2aaa5ef268601fd5"
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