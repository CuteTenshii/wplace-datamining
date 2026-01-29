import {
  g as o
} from "./DolGb-m3.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "ee10936229c2fb895ed8cbcf3dab6bc48981481b"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "e4283113-9287-420a-8c1e-1504be53b96a", t._sentryDebugIdIdentifier = "sentry-dbid-e4283113-9287-420a-8c1e-1504be53b96a")
  })()
} catch {}
const n = () => "Administrator",
  u = () => "Administrador",
  d = () => "管理员",
  i = () => "Administrator",
  s = () => "Administrador",
  a = () => "Administrateur",
  c = () => "Amministratore",
  l = () => "管理者",
  f = () => "Administrator",
  _ = () => "Администратор",
  m = () => "Адміністратор",
  p = () => "Quản trị viên",
  lr = (t = {}, e = {}) => {
    const r = e.locale ?? o();
    return r === "en" ? n() : r === "pt" ? u() : r === "ch" ? d() : r === "de" ? i() : r === "es" ? s() : r === "fr" ? a() : r === "it" ? c() : r === "jp" ? l() : r === "pl" ? f() : r === "ru" ? _() : r === "uk" ? m() : p()
  },
  b = () => "Discord Moderator",
  g = () => "Moderador do Discord",
  M = () => "Discord 管理员",
  y = () => "Discord-Moderator",
  h = () => "Moderador de Discord",
  D = () => "Modérateur Discord",
  k = () => "Moderatore Discord",
  j = () => "Discordモデレーター",
  w = () => "Moderator Discord",
  v = () => "Модератор Discord",
  A = () => "Модератор Discord",
  U = () => "Discord Moderator",
  fr = (t = {}, e = {}) => {
    const r = e.locale ?? o();
    return r === "en" ? b() : r === "pt" ? g() : r === "ch" ? M() : r === "de" ? y() : r === "es" ? h() : r === "fr" ? D() : r === "it" ? k() : r === "jp" ? j() : r === "pl" ? w() : r === "ru" ? v() : r === "uk" ? A() : U()
  },
  E = () => "Global Moderator",
  G = () => "Moderador Global",
  I = () => "全局版主",
  T = () => "Globaler Moderator",
  L = () => "Moderador global",
  N = () => "Modérateur global",
  R = () => "Moderatore globale",
  S = () => "グローバルモデレーター",
  x = () => "Globalny moderator",
  z = () => "Глобальный модератор",
  B = () => "Глобальний модератор",
  Q = () => "Global Moderator",
  _r = (t = {}, e = {}) => {
    const r = e.locale ?? o();
    return r === "en" ? E() : r === "pt" ? G() : r === "ch" ? I() : r === "de" ? T() : r === "es" ? L() : r === "fr" ? N() : r === "it" ? R() : r === "jp" ? S() : r === "pl" ? x() : r === "ru" ? z() : r === "uk" ? B() : Q()
  },
  Y = () => "Moderator",
  q = () => "Moderador",
  C = () => "版主",
  F = () => "Moderator",
  H = () => "Moderador",
  J = () => "Modérateur",
  K = () => "Moderatore",
  O = () => "モデレーター",
  P = () => "Moderator",
  V = () => "Модератор",
  W = () => "Модератор",
  X = () => "Moderator",
  mr = (t = {}, e = {}) => {
    const r = e.locale ?? o();
    return r === "en" ? Y() : r === "pt" ? q() : r === "ch" ? C() : r === "de" ? F() : r === "es" ? H() : r === "fr" ? J() : r === "it" ? K() : r === "jp" ? O() : r === "pl" ? P() : r === "ru" ? V() : r === "uk" ? W() : X()
  },
  Z = () => "User",
  $ = () => "Usuário",
  rr = () => "用户",
  tr = () => "Benutzer",
  er = () => "Usuario",
  or = () => "Utilisateur",
  nr = () => "Utente",
  ur = () => "ユーザー",
  dr = () => "Użytkownik",
  ir = () => "Пользователь",
  sr = () => "Користувач",
  ar = () => "Người dùng",
  pr = (t = {}, e = {}) => {
    const r = e.locale ?? o();
    return r === "en" ? Z() : r === "pt" ? $() : r === "ch" ? rr() : r === "de" ? tr() : r === "es" ? er() : r === "fr" ? or() : r === "it" ? nr() : r === "jp" ? ur() : r === "pl" ? dr() : r === "ru" ? ir() : r === "uk" ? sr() : ar()
  };
export {
  lr as a, fr as d, _r as g, mr as m, pr as u
};