import {
  g as e
} from "./C-uTzaOB.js";
(function() {
  try {
    var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    o.SENTRY_RELEASE = {
      id: "bd6ed46249e1ed5fe7432cfb3a9b80dcfb887d57"
    };
    var t = new o.Error().stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "e4094958-ebc0-4b25-a7ab-07f2b9d21697", o._sentryDebugIdIdentifier = "sentry-dbid-e4094958-ebc0-4b25-a7ab-07f2b9d21697")
  } catch {}
})();
const n = () => "Administrator",
  u = () => "Administrador",
  d = () => "管理员",
  s = () => "Administrator",
  i = () => "Administrador",
  a = () => "Administrateur",
  c = () => "Amministratore",
  _ = () => "管理者",
  l = () => "Administrator",
  f = () => "Администратор",
  m = () => "Адміністратор",
  b = () => "Quản trị viên",
  _r = (o = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? n() : r === "pt" ? u() : r === "ch" ? d() : r === "de" ? s() : r === "es" ? i() : r === "fr" ? a() : r === "it" ? c() : r === "jp" ? _() : r === "pl" ? l() : r === "ru" ? f() : r === "uk" ? m() : b()
  },
  p = () => "Discord Moderator",
  g = () => "Moderador do Discord",
  M = () => "Discord 管理员",
  D = () => "Discord-Moderator",
  h = () => "Moderador de Discord",
  k = () => "Modérateur Discord",
  y = () => "Moderatore Discord",
  j = () => "Discordモデレーター",
  v = () => "Moderator Discord",
  A = () => "Модератор Discord",
  w = () => "Модератор Discord",
  U = () => "Discord Moderator",
  lr = (o = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? p() : r === "pt" ? g() : r === "ch" ? M() : r === "de" ? D() : r === "es" ? h() : r === "fr" ? k() : r === "it" ? y() : r === "jp" ? j() : r === "pl" ? v() : r === "ru" ? A() : r === "uk" ? w() : U()
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
  fr = (o = {}, t = {}) => {
    const r = t.locale ?? e();
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
  mr = (o = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? Y() : r === "pt" ? q() : r === "ch" ? C() : r === "de" ? F() : r === "es" ? H() : r === "fr" ? J() : r === "it" ? K() : r === "jp" ? O() : r === "pl" ? P() : r === "ru" ? V() : r === "uk" ? W() : X()
  },
  Z = () => "User",
  $ = () => "Usuário",
  rr = () => "用户",
  tr = () => "Benutzer",
  or = () => "Usuario",
  er = () => "Utilisateur",
  nr = () => "Utente",
  ur = () => "ユーザー",
  dr = () => "Użytkownik",
  sr = () => "Пользователь",
  ir = () => "Користувач",
  ar = () => "Người dùng",
  br = (o = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? Z() : r === "pt" ? $() : r === "ch" ? rr() : r === "de" ? tr() : r === "es" ? or() : r === "fr" ? er() : r === "it" ? nr() : r === "jp" ? ur() : r === "pl" ? dr() : r === "ru" ? sr() : r === "uk" ? ir() : ar()
  };
export {
  _r as a, lr as d, fr as g, mr as m, br as u
};