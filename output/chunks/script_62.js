import {
  g as o
} from "./CCwyOsrP.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "845cd245f9645ae957e3eeb4920045ede245aa3a"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "b7850824-069f-4be7-b009-d136f1039271", t._sentryDebugIdIdentifier = "sentry-dbid-b7850824-069f-4be7-b009-d136f1039271")
  })()
} catch {}
const u = () => "Administrator",
  d = () => "Administrador",
  i = () => "管理员",
  s = () => "Administrator",
  a = () => "Administrador",
  c = () => "Administrateur",
  l = () => "Amministratore",
  _ = () => "管理者",
  f = () => "Administrator",
  m = () => "Администратор",
  p = () => "Адміністратор",
  b = () => "Quản trị viên",
  g = (t = {}, e = {}) => {
    const r = e.locale ?? o();
    return r === "en" ? u() : r === "pt" ? d() : r === "ch" ? i() : r === "de" ? s() : r === "es" ? a() : r === "fr" ? c() : r === "it" ? l() : r === "jp" ? _() : r === "pl" ? f() : r === "ru" ? m() : r === "uk" ? p() : b()
  },
  M = () => "Discord Moderator",
  y = () => "Moderador do Discord",
  D = () => "Discord 管理员",
  h = () => "Discord-Moderator",
  k = () => "Moderador de Discord",
  A = () => "Modérateur Discord",
  j = () => "Moderatore Discord",
  w = () => "Discordモデレーター",
  E = () => "Moderator Discord",
  v = () => "Модератор Discord",
  U = () => "Модератор Discord",
  G = () => "Discord Moderator",
  L = (t = {}, e = {}) => {
    const r = e.locale ?? o();
    return r === "en" ? M() : r === "pt" ? y() : r === "ch" ? D() : r === "de" ? h() : r === "es" ? k() : r === "fr" ? A() : r === "it" ? j() : r === "jp" ? w() : r === "pl" ? E() : r === "ru" ? v() : r === "uk" ? U() : G()
  },
  R = () => "Global Moderator",
  T = () => "Moderador Global",
  I = () => "全局版主",
  N = () => "Globaler Moderator",
  O = () => "Moderador global",
  S = () => "Modérateur global",
  x = () => "Moderatore globale",
  z = () => "グローバルモデレーター",
  B = () => "Globalny moderator",
  F = () => "Глобальный модератор",
  H = () => "Глобальний модератор",
  Q = () => "Global Moderator",
  Y = (t = {}, e = {}) => {
    const r = e.locale ?? o();
    return r === "en" ? R() : r === "pt" ? T() : r === "ch" ? I() : r === "de" ? N() : r === "es" ? O() : r === "fr" ? S() : r === "it" ? x() : r === "jp" ? z() : r === "pl" ? B() : r === "ru" ? F() : r === "uk" ? H() : Q()
  },
  q = () => "Moderator",
  C = () => "Moderador",
  J = () => "版主",
  K = () => "Moderator",
  P = () => "Moderador",
  V = () => "Modérateur",
  W = () => "Moderatore",
  X = () => "モデレーター",
  Z = () => "Moderator",
  $ = () => "Модератор",
  rr = () => "Модератор",
  tr = () => "Moderator",
  er = (t = {}, e = {}) => {
    const r = e.locale ?? o();
    return r === "en" ? q() : r === "pt" ? C() : r === "ch" ? J() : r === "de" ? K() : r === "es" ? P() : r === "fr" ? V() : r === "it" ? W() : r === "jp" ? X() : r === "pl" ? Z() : r === "ru" ? $() : r === "uk" ? rr() : tr()
  },
  or = () => "User",
  nr = () => "Usuário",
  ur = () => "用户",
  dr = () => "Benutzer",
  ir = () => "Usuario",
  sr = () => "Utilisateur",
  ar = () => "Utente",
  cr = () => "ユーザー",
  lr = () => "Użytkownik",
  _r = () => "Пользователь",
  fr = () => "Користувач",
  mr = () => "Người dùng",
  n = (t = {}, e = {}) => {
    const r = e.locale ?? o();
    return r === "en" ? or() : r === "pt" ? nr() : r === "ch" ? ur() : r === "de" ? dr() : r === "es" ? ir() : r === "fr" ? sr() : r === "it" ? ar() : r === "jp" ? cr() : r === "pl" ? lr() : r === "ru" ? _r() : r === "uk" ? fr() : mr()
  },
  br = {
    user: n(),
    community_leader: "Disc. Mod",
    moderator: "MOD",
    global_moderator: "GM",
    admin: "Admin"
  },
  gr = {
    user: n(),
    community_leader: L(),
    moderator: er(),
    global_moderator: Y(),
    admin: g()
  };
export {
  gr as R, br as a
};