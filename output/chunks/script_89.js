import {
  g as o
} from "./BhCkpOlh.js";
import {
  u as n
} from "./DKkygPh8.js";
const d = () => "Administrator",
  i = () => "Administrador",
  s = () => "管理员",
  a = () => "Administrator",
  u = () => "Administrador",
  c = () => "Administrateur",
  _ = () => "Amministratore",
  l = () => "管理者",
  m = () => "Administrator",
  f = () => "Администратор",
  p = () => "Адміністратор",
  M = () => "Quản trị viên",
  D = (e = {}, t = {}) => {
    const r = t.locale ?? o();
    return r === "en" ? d() : r === "pt" ? i() : r === "ch" ? s() : r === "de" ? a() : r === "es" ? u() : r === "fr" ? c() : r === "it" ? _() : r === "jp" ? l() : r === "pl" ? m() : r === "ru" ? f() : r === "uk" ? p() : M()
  },
  b = () => "Discord Leaders",
  g = () => "Líderes do Discord",
  L = () => "Discord 负责人",
  h = () => "Discord-Leiter",
  j = () => "Líderes de Discord",
  k = () => "Leaders Discord",
  A = () => "Leader Discord",
  v = () => "Discordリーダー",
  G = () => "Liderzy Discorda",
  y = () => "Лидеры Discord",
  E = () => "Лідери Discord",
  O = () => "Trưởng nhóm Discord",
  R = (e = {}, t = {}) => {
    const r = t.locale ?? o();
    return r === "en" ? b() : r === "pt" ? g() : r === "ch" ? L() : r === "de" ? h() : r === "es" ? j() : r === "fr" ? k() : r === "it" ? A() : r === "jp" ? v() : r === "pl" ? G() : r === "ru" ? y() : r === "uk" ? E() : O()
  },
  N = () => "Discord Moderator",
  T = () => "Moderador do Discord",
  x = () => "Discord 管理员",
  z = () => "Discord-Moderator",
  F = () => "Moderador de Discord",
  H = () => "Modérateur Discord",
  Q = () => "Moderatore Discord",
  S = () => "Discordモデレーター",
  U = () => "Moderator Discord",
  q = () => "Модератор Discord",
  w = () => "Модератор Discord",
  B = () => "Discord Moderator",
  C = (e = {}, t = {}) => {
    const r = t.locale ?? o();
    return r === "en" ? N() : r === "pt" ? T() : r === "ch" ? x() : r === "de" ? z() : r === "es" ? F() : r === "fr" ? H() : r === "it" ? Q() : r === "jp" ? S() : r === "pl" ? U() : r === "ru" ? q() : r === "uk" ? w() : B()
  },
  I = () => "Global Moderator",
  J = () => "Moderador Global",
  K = () => "全局版主",
  P = () => "Globaler Moderator",
  V = () => "Moderador global",
  W = () => "Modérateur global",
  X = () => "Moderatore globale",
  Y = () => "グローバルモデレーター",
  Z = () => "Globalny moderator",
  $ = () => "Глобальный модератор",
  rr = () => "Глобальний модератор",
  tr = () => "Global Moderator",
  or = (e = {}, t = {}) => {
    const r = t.locale ?? o();
    return r === "en" ? I() : r === "pt" ? J() : r === "ch" ? K() : r === "de" ? P() : r === "es" ? V() : r === "fr" ? W() : r === "it" ? X() : r === "jp" ? Y() : r === "pl" ? Z() : r === "ru" ? $() : r === "uk" ? rr() : tr()
  },
  er = () => "Moderator",
  nr = () => "Moderador",
  dr = () => "版主",
  ir = () => "Moderator",
  sr = () => "Moderador",
  ar = () => "Modérateur",
  ur = () => "Moderatore",
  cr = () => "モデレーター",
  _r = () => "Moderator",
  lr = () => "Модератор",
  mr = () => "Модератор",
  fr = () => "Moderator",
  pr = (e = {}, t = {}) => {
    const r = t.locale ?? o();
    return r === "en" ? er() : r === "pt" ? nr() : r === "ch" ? dr() : r === "de" ? ir() : r === "es" ? sr() : r === "fr" ? ar() : r === "it" ? ur() : r === "jp" ? cr() : r === "pl" ? _r() : r === "ru" ? lr() : r === "uk" ? mr() : fr()
  },
  br = {
    user: n(),
    community_leader: "Disc. Mod",
    discord_leader: "Disc. Lead",
    moderator: "MOD",
    global_moderator: "GM",
    admin: "Admin"
  },
  gr = {
    user: n(),
    community_leader: C(),
    discord_leader: R(),
    moderator: pr(),
    global_moderator: or(),
    admin: D()
  };
export {
  gr as R, br as a
};