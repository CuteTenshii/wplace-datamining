import {
  g as t
} from "./C1q_NHWL.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "43095d4f05ba46dbb6f54b9ec680b6ad581b5a8e"
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
const d = () => "Leaderboard",
  a = () => "Ranking",
  o = () => "排行榜",
  i = () => "Bestenliste",
  l = () => "Clasificación",
  f = () => "Classement",
  s = () => "Classifica",
  u = () => "ランキング",
  b = () => "Ranking",
  c = () => "Таблица лидеров",
  g = () => "Таблиця лідерів",
  p = () => "Bảng xếp hạng",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? d() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? l() : e === "fr" ? f() : e === "it" ? s() : e === "jp" ? u() : e === "pl" ? b() : e === "ru" ? c() : e === "uk" ? g() : p()
  };
export {
  y as l
};