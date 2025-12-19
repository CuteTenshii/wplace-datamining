import {
  g as e
} from "./DPMSJe7W.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "ed3bbe4c8b5513729863e5c0724fcbd405ffa555"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      o = new t.Error().stack;
    o && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[o] = "b7850824-069f-4be7-b009-d136f1039271", t._sentryDebugIdIdentifier = "sentry-dbid-b7850824-069f-4be7-b009-d136f1039271")
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
  b = () => "Адміністратор",
  p = () => "Quản trị viên",
  g = (t = {}, o = {}) => {
    const r = o.locale ?? e();
    return r === "en" ? u() : r === "pt" ? d() : r === "ch" ? i() : r === "de" ? s() : r === "es" ? a() : r === "fr" ? c() : r === "it" ? l() : r === "jp" ? _() : r === "pl" ? f() : r === "ru" ? m() : r === "uk" ? b() : p()
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
  L = (t = {}, o = {}) => {
    const r = o.locale ?? e();
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
  Y = (t = {}, o = {}) => {
    const r = o.locale ?? e();
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
  or = (t = {}, o = {}) => {
    const r = o.locale ?? e();
    return r === "en" ? q() : r === "pt" ? C() : r === "ch" ? J() : r === "de" ? K() : r === "es" ? P() : r === "fr" ? V() : r === "it" ? W() : r === "jp" ? X() : r === "pl" ? Z() : r === "ru" ? $() : r === "uk" ? rr() : tr()
  },
  er = () => "User",
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
  n = (t = {}, o = {}) => {
    const r = o.locale ?? e();
    return r === "en" ? er() : r === "pt" ? nr() : r === "ch" ? ur() : r === "de" ? dr() : r === "es" ? ir() : r === "fr" ? sr() : r === "it" ? ar() : r === "jp" ? cr() : r === "pl" ? lr() : r === "ru" ? _r() : r === "uk" ? fr() : mr()
  },
  pr = {
    user: n(),
    community_leader: "Disc. Mod",
    moderator: "MOD",
    global_moderator: "GM",
    admin: "Admin"
  },
  gr = {
    user: n(),
    community_leader: L(),
    moderator: or(),
    global_moderator: Y(),
    admin: g()
  };
export {
  gr as R, pr as a
};