import {
  g as n
} from "./BhCkpOlh.js";
const a = () => "View on map",
  _ = () => "Ver no mapa",
  i = () => "在地图上查看",
  c = () => "Auf der Karte anzeigen",
  l = () => "Ver en el mapa",
  o = () => "Voir sur la carte",
  u = () => "Visualizza sulla mappa",
  s = () => "地図で表示",
  f = () => "Zobacz na mapie",
  p = () => "Посмотреть на карте",
  d = () => "Переглянути на карті",
  g = () => "Xem trên bản đồ",
  Ee = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? a() : r === "pt" ? _() : r === "ch" ? i() : r === "de" ? c() : r === "es" ? l() : r === "fr" ? o() : r === "it" ? u() : r === "jp" ? s() : r === "pl" ? f() : r === "ru" ? p() : r === "uk" ? d() : g()
  },
  h = () => "The whole alliance",
  v = () => "A aliança inteira",
  m = () => "整个联盟",
  b = () => "Die gesamte Allianz",
  $ = () => "Toda la alianza",
  q = () => "Toute l'alliance",
  w = () => "L'intera alleanza",
  j = () => "アライアンス全体",
  k = () => "Cały sojusz",
  z = () => "Весь альянс",
  B = () => "Весь альянс",
  V = () => "Toàn bộ liên minh",
  Ce = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? h() : r === "pt" ? v() : r === "ch" ? m() : r === "de" ? b() : r === "es" ? $() : r === "fr" ? q() : r === "it" ? w() : r === "jp" ? j() : r === "pl" ? k() : r === "ru" ? z() : r === "uk" ? B() : V()
  },
  P = e => `Draft #${e.id}`,
  E = e => `Rascunho #${e.id}`,
  C = e => `草稿 #${e.id}`,
  L = e => `Entwurf #${e.id}`,
  S = e => `Borrador #${e.id}`,
  y = e => `Brouillon #${e.id}`,
  H = e => `Bozza #${e.id}`,
  T = e => `下書き #${e.id}`,
  A = e => `Szkic #${e.id}`,
  R = e => `Черновик #${e.id}`,
  D = e => `Чернетка #${e.id}`,
  F = e => `Bản nháp #${e.id}`,
  Le = (e, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? P(e) : r === "pt" ? E(e) : r === "ch" ? C(e) : r === "de" ? L(e) : r === "es" ? S(e) : r === "fr" ? y(e) : r === "it" ? H(e) : r === "jp" ? T(e) : r === "pl" ? A(e) : r === "ru" ? R(e) : r === "uk" ? D(e) : F(e)
  },
  I = e => `Event #${e.id}`,
  W = e => `Evento #${e.id}`,
  Z = e => `事件 #${e.id}`,
  x = e => `Event #${e.id}`,
  K = e => `Evento #${e.id}`,
  U = e => `Événement #${e.id}`,
  X = e => `Evento #${e.id}`,
  G = e => `イベント #${e.id}`,
  J = e => `Wydarzenie #${e.id}`,
  M = e => `Событие #${e.id}`,
  N = e => `Подія #${e.id}`,
  O = e => `Sự kiện #${e.id}`,
  Se = (e, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? I(e) : r === "pt" ? W(e) : r === "ch" ? Z(e) : r === "de" ? x(e) : r === "es" ? K(e) : r === "fr" ? U(e) : r === "it" ? X(e) : r === "jp" ? G(e) : r === "pl" ? J(e) : r === "ru" ? M(e) : r === "uk" ? N(e) : O(e)
  },
  Q = e => `Version #${e.id}`,
  Y = e => `Versao #${e.id}`,
  rr = e => `版本 #${e.id}`,
  er = e => `Version #${e.id}`,
  tr = e => `Versión #${e.id}`,
  nr = e => `Version #${e.id}`,
  ar = e => `Versione #${e.id}`,
  _r = e => `バージョン #${e.id}`,
  ir = e => `Wersja #${e.id}`,
  cr = e => `Версия #${e.id}`,
  lr = e => `Версія #${e.id}`,
  or = e => `Phiên bản #${e.id}`,
  ye = (e, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? Q(e) : r === "pt" ? Y(e) : r === "ch" ? rr(e) : r === "de" ? er(e) : r === "es" ? tr(e) : r === "fr" ? nr(e) : r === "it" ? ar(e) : r === "jp" ? _r(e) : r === "pl" ? ir(e) : r === "ru" ? cr(e) : r === "uk" ? lr(e) : or(e)
  },
  ur = () => "Profile picture",
  sr = () => "Foto do perfil",
  fr = () => "头像",
  pr = () => "Profilbild",
  dr = () => "Foto de perfil",
  gr = () => "Image de profil",
  hr = () => "Immagine del profilo",
  vr = () => "プロフィール画像",
  mr = () => "Zdjęcie profilowe",
  br = () => "Изображение профиля",
  $r = () => "Зображення профілю",
  qr = () => "Ảnh đại diện",
  He = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? ur() : r === "pt" ? sr() : r === "ch" ? fr() : r === "de" ? pr() : r === "es" ? dr() : r === "fr" ? gr() : r === "it" ? hr() : r === "jp" ? vr() : r === "pl" ? mr() : r === "ru" ? br() : r === "uk" ? $r() : qr()
  },
  wr = () => "Profile banner",
  jr = () => "Banner do perfil",
  kr = () => "横幅",
  zr = () => "Profilbanner",
  Br = () => "Banner del perfil",
  Vr = () => "Bannière de profil",
  Pr = () => "Banner del profilo",
  Er = () => "プロフィールバナー",
  Cr = () => "Baner profilu",
  Lr = () => "Баннер профиля",
  Sr = () => "Банер профілю",
  yr = () => "Ảnh bìa",
  Te = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? wr() : r === "pt" ? jr() : r === "ch" ? kr() : r === "de" ? zr() : r === "es" ? Br() : r === "fr" ? Vr() : r === "it" ? Pr() : r === "jp" ? Er() : r === "pl" ? Cr() : r === "ru" ? Lr() : r === "uk" ? Sr() : yr()
  },
  Hr = () => "Picture draft",
  Tr = () => "Rascunho da foto",
  Ar = () => "头像草稿",
  Rr = () => "Bildentwurf",
  Dr = () => "Borrador de la foto",
  Fr = () => "Brouillon d'image",
  Ir = () => "Bozza dell'immagine",
  Wr = () => "画像の下書き",
  Zr = () => "Szkic zdjęcia",
  xr = () => "Черновик изображения",
  Kr = () => "Чернетка зображення",
  Ur = () => "Bản nháp ảnh đại diện",
  Ae = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? Hr() : r === "pt" ? Tr() : r === "ch" ? Ar() : r === "de" ? Rr() : r === "es" ? Dr() : r === "fr" ? Fr() : r === "it" ? Ir() : r === "jp" ? Wr() : r === "pl" ? Zr() : r === "ru" ? xr() : r === "uk" ? Kr() : Ur()
  },
  Xr = () => "Banner draft",
  Gr = () => "Rascunho do banner",
  Jr = () => "横幅草稿",
  Mr = () => "Bannerentwurf",
  Nr = () => "Borrador del banner",
  Or = () => "Brouillon de bannière",
  Qr = () => "Bozza del banner",
  Yr = () => "バナーの下書き",
  re = () => "Szkic banera",
  ee = () => "Черновик баннера",
  te = () => "Чернетка банера",
  ne = () => "Bản nháp ảnh bìa",
  Re = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? Xr() : r === "pt" ? Gr() : r === "ch" ? Jr() : r === "de" ? Mr() : r === "es" ? Nr() : r === "fr" ? Or() : r === "it" ? Qr() : r === "jp" ? Yr() : r === "pl" ? re() : r === "ru" ? ee() : r === "uk" ? te() : ne()
  },
  ae = () => "Headquarters canvas",
  _e = () => "Canvas da sede",
  ie = () => "总部画布",
  ce = () => "Hauptquartier-Canvas",
  le = () => "Lienzo del cuartel general",
  oe = () => "Canvas du quartier général",
  ue = () => "Canvas del quartier generale",
  se = () => "拠点のキャンバス",
  fe = () => "Płótno siedziby",
  pe = () => "Холст штаб-квартиры",
  de = () => "Полотно штаб-квартири",
  ge = () => "Bảng vẽ trụ sở",
  De = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? ae() : r === "pt" ? _e() : r === "ch" ? ie() : r === "de" ? ce() : r === "es" ? le() : r === "fr" ? oe() : r === "it" ? ue() : r === "jp" ? se() : r === "pl" ? fe() : r === "ru" ? pe() : r === "uk" ? de() : ge()
  },
  he = () => "Headquarters location",
  ve = () => "Localizacao da sede",
  me = () => "总部位置",
  be = () => "Standort des Hauptquartiers",
  $e = () => "Ubicación del cuartel general",
  qe = () => "Emplacement du quartier général",
  we = () => "Posizione del quartier generale",
  je = () => "拠点の場所",
  ke = () => "Lokalizacja siedziby",
  ze = () => "Расположение штаб-квартиры",
  Be = () => "Розташування штаб-квартири",
  Ve = () => "Vị trí trụ sở",
  Fe = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? he() : r === "pt" ? ve() : r === "ch" ? me() : r === "de" ? be() : r === "es" ? $e() : r === "fr" ? qe() : r === "it" ? we() : r === "jp" ? je() : r === "pl" ? ke() : r === "ru" ? ze() : r === "uk" ? Be() : Ve()
  };
export {
  Ce as a, Fe as b, De as c, Te as d, He as e, Re as f, Ae as g, ye as h, Le as i, Se as j, Ee as v
};