import {
  g as o
} from "./BT9k_vYz.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "be8234278ededc2527fbc3b765caee2baaf18120"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "06a4257e-48de-44e6-9e5a-c48f500f2c23", e._sentryDebugIdIdentifier = "sentry-dbid-06a4257e-48de-44e6-9e5a-c48f500f2c23")
  } catch {}
})();
const n = () => "Administrator",
  u = () => "Administrador",
  s = () => "管理员",
  d = () => "Administrator",
  i = () => "Administrador",
  a = () => "Administrateur",
  c = () => "Amministratore",
  _ = () => "管理者",
  f = () => "Administrator",
  l = () => "Администратор",
  m = () => "Адміністратор",
  p = () => "Quản trị viên",
  _r = (e = {}, t = {}) => {
    const r = t.locale ?? o();
    return r === "en" ? n() : r === "pt" ? u() : r === "ch" ? s() : r === "de" ? d() : r === "es" ? i() : r === "fr" ? a() : r === "it" ? c() : r === "jp" ? _() : r === "pl" ? f() : r === "ru" ? l() : r === "uk" ? m() : p()
  },
  b = () => "Discord Moderator",
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
  fr = (e = {}, t = {}) => {
    const r = t.locale ?? o();
    return r === "en" ? b() : r === "pt" ? g() : r === "ch" ? M() : r === "de" ? D() : r === "es" ? h() : r === "fr" ? k() : r === "it" ? y() : r === "jp" ? j() : r === "pl" ? v() : r === "ru" ? A() : r === "uk" ? w() : U()
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
  lr = (e = {}, t = {}) => {
    const r = t.locale ?? o();
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
  mr = (e = {}, t = {}) => {
    const r = t.locale ?? o();
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
  sr = () => "Użytkownik",
  dr = () => "Пользователь",
  ir = () => "Користувач",
  ar = () => "Người dùng",
  pr = (e = {}, t = {}) => {
    const r = t.locale ?? o();
    return r === "en" ? Z() : r === "pt" ? $() : r === "ch" ? rr() : r === "de" ? tr() : r === "es" ? er() : r === "fr" ? or() : r === "it" ? nr() : r === "jp" ? ur() : r === "pl" ? sr() : r === "ru" ? dr() : r === "uk" ? ir() : ar()
  };
export {
  _r as a, fr as d, lr as g, mr as m, pr as u
};