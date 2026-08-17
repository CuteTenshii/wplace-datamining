import {
  g as n
} from "./BhCkpOlh.js";
const a = () => "The whole alliance",
  _ = () => "A aliança inteira",
  i = () => "整个联盟",
  l = () => "Die gesamte Allianz",
  c = () => "Toda la alianza",
  o = () => "Toute l'alliance",
  u = () => "L'intera alleanza",
  s = () => "アライアンス全体",
  f = () => "Cały sojusz",
  p = () => "Весь альянс",
  d = () => "Весь альянс",
  g = () => "Toàn bộ liên minh",
  be = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? a() : r === "pt" ? _() : r === "ch" ? i() : r === "de" ? l() : r === "es" ? c() : r === "fr" ? o() : r === "it" ? u() : r === "jp" ? s() : r === "pl" ? f() : r === "ru" ? p() : r === "uk" ? d() : g()
  },
  h = e => `Draft #${e.id}`,
  b = e => `Rascunho #${e.id}`,
  v = e => `草稿 #${e.id}`,
  m = e => `Entwurf #${e.id}`,
  $ = e => `Borrador #${e.id}`,
  q = e => `Brouillon #${e.id}`,
  j = e => `Bozza #${e.id}`,
  k = e => `下書き #${e.id}`,
  z = e => `Szkic #${e.id}`,
  B = e => `Черновик #${e.id}`,
  w = e => `Чернетка #${e.id}`,
  P = e => `Bản nháp #${e.id}`,
  ve = (e, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? h(e) : r === "pt" ? b(e) : r === "ch" ? v(e) : r === "de" ? m(e) : r === "es" ? $(e) : r === "fr" ? q(e) : r === "it" ? j(e) : r === "jp" ? k(e) : r === "pl" ? z(e) : r === "ru" ? B(e) : r === "uk" ? w(e) : P(e)
  },
  E = e => `Event #${e.id}`,
  V = e => `Evento #${e.id}`,
  C = e => `事件 #${e.id}`,
  L = e => `Event #${e.id}`,
  S = e => `Evento #${e.id}`,
  y = e => `Événement #${e.id}`,
  H = e => `Evento #${e.id}`,
  T = e => `イベント #${e.id}`,
  R = e => `Wydarzenie #${e.id}`,
  A = e => `Событие #${e.id}`,
  D = e => `Подія #${e.id}`,
  F = e => `Sự kiện #${e.id}`,
  me = (e, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? E(e) : r === "pt" ? V(e) : r === "ch" ? C(e) : r === "de" ? L(e) : r === "es" ? S(e) : r === "fr" ? y(e) : r === "it" ? H(e) : r === "jp" ? T(e) : r === "pl" ? R(e) : r === "ru" ? A(e) : r === "uk" ? D(e) : F(e)
  },
  I = e => `Version #${e.id}`,
  W = e => `Versão #${e.id}`,
  x = e => `版本 #${e.id}`,
  U = e => `Version #${e.id}`,
  Z = e => `Versión #${e.id}`,
  G = e => `Version #${e.id}`,
  J = e => `Versione #${e.id}`,
  K = e => `バージョン #${e.id}`,
  M = e => `Wersja #${e.id}`,
  N = e => `Версия #${e.id}`,
  O = e => `Версія #${e.id}`,
  Q = e => `Phiên bản #${e.id}`,
  $e = (e, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? I(e) : r === "pt" ? W(e) : r === "ch" ? x(e) : r === "de" ? U(e) : r === "es" ? Z(e) : r === "fr" ? G(e) : r === "it" ? J(e) : r === "jp" ? K(e) : r === "pl" ? M(e) : r === "ru" ? N(e) : r === "uk" ? O(e) : Q(e)
  },
  X = () => "Profile picture",
  Y = () => "Foto do perfil",
  rr = () => "头像",
  er = () => "Profilbild",
  tr = () => "Foto de perfil",
  nr = () => "Image de profil",
  ar = () => "Immagine del profilo",
  _r = () => "プロフィール画像",
  ir = () => "Zdjęcie profilowe",
  lr = () => "Изображение профиля",
  cr = () => "Зображення профілю",
  or = () => "Ảnh đại diện",
  qe = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? X() : r === "pt" ? Y() : r === "ch" ? rr() : r === "de" ? er() : r === "es" ? tr() : r === "fr" ? nr() : r === "it" ? ar() : r === "jp" ? _r() : r === "pl" ? ir() : r === "ru" ? lr() : r === "uk" ? cr() : or()
  },
  ur = () => "Profile banner",
  sr = () => "Banner do perfil",
  fr = () => "横幅",
  pr = () => "Profilbanner",
  dr = () => "Banner del perfil",
  gr = () => "Bannière de profil",
  hr = () => "Banner del profilo",
  br = () => "プロフィールバナー",
  vr = () => "Baner profilu",
  mr = () => "Баннер профиля",
  $r = () => "Банер профілю",
  qr = () => "Ảnh bìa",
  je = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? ur() : r === "pt" ? sr() : r === "ch" ? fr() : r === "de" ? pr() : r === "es" ? dr() : r === "fr" ? gr() : r === "it" ? hr() : r === "jp" ? br() : r === "pl" ? vr() : r === "ru" ? mr() : r === "uk" ? $r() : qr()
  },
  jr = () => "Picture draft",
  kr = () => "Rascunho da foto",
  zr = () => "头像草稿",
  Br = () => "Bildentwurf",
  wr = () => "Borrador de la foto",
  Pr = () => "Brouillon d'image",
  Er = () => "Bozza dell'immagine",
  Vr = () => "画像の下書き",
  Cr = () => "Szkic zdjęcia",
  Lr = () => "Черновик изображения",
  Sr = () => "Чернетка зображення",
  yr = () => "Bản nháp ảnh đại diện",
  ke = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? jr() : r === "pt" ? kr() : r === "ch" ? zr() : r === "de" ? Br() : r === "es" ? wr() : r === "fr" ? Pr() : r === "it" ? Er() : r === "jp" ? Vr() : r === "pl" ? Cr() : r === "ru" ? Lr() : r === "uk" ? Sr() : yr()
  },
  Hr = () => "Banner draft",
  Tr = () => "Rascunho do banner",
  Rr = () => "横幅草稿",
  Ar = () => "Bannerentwurf",
  Dr = () => "Borrador del banner",
  Fr = () => "Brouillon de bannière",
  Ir = () => "Bozza del banner",
  Wr = () => "バナーの下書き",
  xr = () => "Szkic banera",
  Ur = () => "Черновик баннера",
  Zr = () => "Чернетка банера",
  Gr = () => "Bản nháp ảnh bìa",
  ze = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? Hr() : r === "pt" ? Tr() : r === "ch" ? Rr() : r === "de" ? Ar() : r === "es" ? Dr() : r === "fr" ? Fr() : r === "it" ? Ir() : r === "jp" ? Wr() : r === "pl" ? xr() : r === "ru" ? Ur() : r === "uk" ? Zr() : Gr()
  },
  Jr = () => "Headquarters canvas",
  Kr = () => "Canvas da sede",
  Mr = () => "总部画布",
  Nr = () => "Hauptquartier-Canvas",
  Or = () => "Lienzo del cuartel general",
  Qr = () => "Canvas du quartier général",
  Xr = () => "Canvas del quartier generale",
  Yr = () => "拠点のキャンバス",
  re = () => "Płótno siedziby",
  ee = () => "Холст штаб-квартиры",
  te = () => "Полотно штаб-квартири",
  ne = () => "Bảng vẽ trụ sở",
  Be = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? Jr() : r === "pt" ? Kr() : r === "ch" ? Mr() : r === "de" ? Nr() : r === "es" ? Or() : r === "fr" ? Qr() : r === "it" ? Xr() : r === "jp" ? Yr() : r === "pl" ? re() : r === "ru" ? ee() : r === "uk" ? te() : ne()
  },
  ae = () => "Headquarters location",
  _e = () => "Localização da sede",
  ie = () => "总部位置",
  le = () => "Standort des Hauptquartiers",
  ce = () => "Ubicación del cuartel general",
  oe = () => "Emplacement du quartier général",
  ue = () => "Posizione del quartier generale",
  se = () => "拠点の場所",
  fe = () => "Lokalizacja siedziby",
  pe = () => "Расположение штаб-квартиры",
  de = () => "Розташування штаб-квартири",
  ge = () => "Vị trí trụ sở",
  we = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? ae() : r === "pt" ? _e() : r === "ch" ? ie() : r === "de" ? le() : r === "es" ? ce() : r === "fr" ? oe() : r === "it" ? ue() : r === "jp" ? se() : r === "pl" ? fe() : r === "ru" ? pe() : r === "uk" ? de() : ge()
  };
export {
  be as a, we as b, Be as c, je as d, qe as e, ze as f, ke as g, $e as h, ve as i, me as j
};