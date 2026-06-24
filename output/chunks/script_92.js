import {
  g as n
} from "./BhCkpOlh.js";
import {
  u as s
} from "./DKkygPh8.js";
const a = () => "Administrator",
  o = () => "Administrador",
  d = () => "管理员",
  i = () => "Administrator",
  u = () => "Administrador",
  c = () => "Administrateur",
  _ = () => "Amministratore",
  m = () => "管理者",
  f = () => "Administrator",
  l = () => "Администратор",
  p = () => "Адміністратор",
  D = () => "Quản trị viên",
  v = (t = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? a() : r === "pt" ? o() : r === "ch" ? d() : r === "de" ? i() : r === "es" ? u() : r === "fr" ? c() : r === "it" ? _() : r === "jp" ? m() : r === "pl" ? f() : r === "ru" ? l() : r === "uk" ? p() : D()
  },
  M = () => "Discord Leaders",
  g = () => "Líderes do Discord",
  G = () => "Discord 负责人",
  L = () => "Discord-Leiter",
  A = () => "Líderes de Discord",
  h = () => "Leaders Discord",
  S = () => "Leader Discord",
  j = () => "Discordリーダー",
  k = () => "Liderzy Discorda",
  C = () => "Лидеры Discord",
  R = () => "Лідери Discord",
  E = () => "Trưởng nhóm Discord",
  O = (t = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? M() : r === "pt" ? g() : r === "ch" ? G() : r === "de" ? L() : r === "es" ? A() : r === "fr" ? h() : r === "it" ? S() : r === "jp" ? j() : r === "pl" ? k() : r === "ru" ? C() : r === "uk" ? R() : E()
  },
  N = () => "Discord Moderator",
  T = () => "Moderador do Discord",
  x = () => "Discord 管理员",
  y = () => "Discord-Moderator",
  z = () => "Moderador de Discord",
  F = () => "Modérateur Discord",
  H = () => "Moderatore Discord",
  Q = () => "Discordモデレーター",
  U = () => "Moderator Discord",
  b = () => "Модератор Discord",
  q = () => "Модератор Discord",
  w = () => "Discord Moderator",
  B = (t = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? N() : r === "pt" ? T() : r === "ch" ? x() : r === "de" ? y() : r === "es" ? z() : r === "fr" ? F() : r === "it" ? H() : r === "jp" ? Q() : r === "pl" ? U() : r === "ru" ? b() : r === "uk" ? q() : w()
  },
  I = () => "Game Master",
  J = () => "Game Master",
  K = () => "Game Master",
  P = () => "Game Master",
  V = () => "Game Master",
  W = () => "Game Master",
  X = () => "Game Master",
  Y = () => "Game Master",
  Z = () => "Game Master",
  $ = () => "Game Master",
  rr = () => "Game Master",
  er = () => "Game Master",
  tr = (t = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? I() : r === "pt" ? J() : r === "ch" ? K() : r === "de" ? P() : r === "es" ? V() : r === "fr" ? W() : r === "it" ? X() : r === "jp" ? Y() : r === "pl" ? Z() : r === "ru" ? $() : r === "uk" ? rr() : er()
  },
  nr = () => "Game Master Leader",
  sr = () => "Game Master Leader",
  ar = () => "Game Master Leader",
  or = () => "Game Master Leader",
  dr = () => "Game Master Leader",
  ir = () => "Game Master Leader",
  ur = () => "Game Master Leader",
  cr = () => "Game Master Leader",
  _r = () => "Game Master Leader",
  mr = () => "Game Master Leader",
  fr = () => "Game Master Leader",
  lr = () => "Game Master Leader",
  pr = (t = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? nr() : r === "pt" ? sr() : r === "ch" ? ar() : r === "de" ? or() : r === "es" ? dr() : r === "fr" ? ir() : r === "it" ? ur() : r === "jp" ? cr() : r === "pl" ? _r() : r === "ru" ? mr() : r === "uk" ? fr() : lr()
  },
  Dr = () => "SAC",
  vr = () => "SAC",
  Mr = () => "SAC",
  gr = () => "SAC",
  Gr = () => "SAC",
  Lr = () => "SAC",
  Ar = () => "SAC",
  hr = () => "SAC",
  Sr = () => "SAC",
  jr = () => "SAC",
  kr = () => "SAC",
  Cr = () => "SAC",
  Rr = (t = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? Dr() : r === "pt" ? vr() : r === "ch" ? Mr() : r === "de" ? gr() : r === "es" ? Gr() : r === "fr" ? Lr() : r === "it" ? Ar() : r === "jp" ? hr() : r === "pl" ? Sr() : r === "ru" ? jr() : r === "uk" ? kr() : Cr()
  },
  Er = () => "Developer",
  Or = () => "Developer",
  Nr = () => "Developer",
  Tr = () => "Developer",
  xr = () => "Developer",
  yr = () => "Developer",
  zr = () => "Developer",
  Fr = () => "Developer",
  Hr = () => "Developer",
  Qr = () => "Developer",
  Ur = () => "Developer",
  br = () => "Developer",
  qr = (t = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? Er() : r === "pt" ? Or() : r === "ch" ? Nr() : r === "de" ? Tr() : r === "es" ? xr() : r === "fr" ? yr() : r === "it" ? zr() : r === "jp" ? Fr() : r === "pl" ? Hr() : r === "ru" ? Qr() : r === "uk" ? Ur() : br()
  };

function wr(t, e) {
  return e.includes(t)
}

function Jr(t) {
  return wr(t, ["sac", "game_master", "game_master_leader", "dev", "admin"])
}
const Kr = {
    user: s(),
    discord_mod: "Disc. Mod",
    discord_leader: "Disc. Lead",
    sac: "SAC",
    game_master: "GM",
    game_master_leader: "GM Lead",
    dev: "Dev",
    admin: "Admin"
  },
  Pr = {
    user: s(),
    discord_mod: B(),
    discord_leader: O(),
    sac: Rr(),
    game_master: tr(),
    game_master_leader: pr(),
    dev: qr(),
    admin: v()
  };
export {
  Pr as R, Kr as a, tr as g, Jr as i
};