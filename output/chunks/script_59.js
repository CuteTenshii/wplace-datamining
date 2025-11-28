import {
  g as o
} from "./C6pXxMzr.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "55a4772558e3c5a852121d5e5bd7314ba7efe155"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "084ba51a-1f7e-4a12-9cf3-39daa0e44295", t._sentryDebugIdIdentifier = "sentry-dbid-084ba51a-1f7e-4a12-9cf3-39daa0e44295")
  })()
} catch {}
const d = () => "Administrator",
  i = () => "Administrador",
  s = () => "管理员",
  a = () => "Administrator",
  c = () => "Administrador",
  l = () => "Administrateur",
  _ = () => "Amministratore",
  f = () => "管理者",
  m = () => "Administrator",
  p = () => "Администратор",
  b = () => "Адміністратор",
  g = () => "Quản trị viên",
  M = (t = {}, e = {}) => {
    const r = e.locale ?? o();
    return r === "en" ? d() : r === "pt" ? i() : r === "ch" ? s() : r === "de" ? a() : r === "es" ? c() : r === "fr" ? l() : r === "it" ? _() : r === "jp" ? f() : r === "pl" ? m() : r === "ru" ? p() : r === "uk" ? b() : g()
  },
  n = () => "Discord Moderator",
  y = () => "Moderador do Discord",
  D = () => "Discord-Moderator",
  h = () => "Moderador de Discord",
  k = () => "Modérateur Discord",
  A = () => "Moderatore Discord",
  j = () => "Discordモデレーター",
  w = () => "Moderator Discord",
  E = () => "Модератор Discord",
  v = () => "Модератор Discord",
  U = () => "Discord Moderator",
  G = n,
  L = (t = {}, e = {}) => {
    const r = e.locale ?? o();
    return r === "en" ? n() : r === "pt" ? y() : r === "ch" ? G() : r === "de" ? D() : r === "es" ? h() : r === "fr" ? k() : r === "it" ? A() : r === "jp" ? j() : r === "pl" ? w() : r === "ru" ? E() : r === "uk" ? v() : U()
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
  u = (t = {}, e = {}) => {
    const r = e.locale ?? o();
    return r === "en" ? or() : r === "pt" ? nr() : r === "ch" ? ur() : r === "de" ? dr() : r === "es" ? ir() : r === "fr" ? sr() : r === "it" ? ar() : r === "jp" ? cr() : r === "pl" ? lr() : r === "ru" ? _r() : r === "uk" ? fr() : mr()
  },
  br = {
    user: u(),
    community_leader: "Disc. Mod",
    moderator: "MOD",
    global_moderator: "GM",
    admin: "Admin"
  },
  gr = {
    user: u(),
    community_leader: L(),
    moderator: er(),
    global_moderator: Y(),
    admin: M()
  };
export {
  gr as R, br as a
};