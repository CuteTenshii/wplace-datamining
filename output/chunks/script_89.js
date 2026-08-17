var j = n => {
  throw TypeError(n)
};
var k = (n, r, e) => r.has(n) || j("Cannot " + e);
var c = (n, r, e) => (k(n, r, "read from private field"), e ? e.call(n) : r.get(n)),
  p = (n, r, e) => r.has(n) ? j("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(n) : r.set(n, e),
  x = (n, r, e, _) => (k(n, r, "write to private field"), _ ? _.call(n, e) : r.set(n, e), e);
import {
  g as a
} from "./BhCkpOlh.js";
import {
  i as t,
  h as f,
  e as C,
  u as qe,
  t as ve,
  a as P,
  k as A,
  d as je,
  r as ke
} from "./m4hpPlb8.js";
import {
  w as xe
} from "./BL0vj2vA.js";
import {
  i as ze
} from "./BG3xfXao.js";
import "./Bzak7iHL.js";
import {
  b as T,
  s as Ce
} from "./BbR4hYuM.js";
import {
  p as Pe,
  r as U
} from "./RFHi9kKd.js";
const Ae = () => "Leader",
  Te = () => "Líder",
  Ue = () => "盟主",
  Me = () => "Anführer",
  Re = () => "Líder",
  Se = () => "Chef",
  $e = () => "Leader",
  Fe = () => "リーダー",
  Le = () => "Lider",
  De = () => "Лидер",
  Ee = () => "Лідер",
  Be = () => "Thủ lĩnh",
  Ob = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Ae() : e === "pt" ? Te() : e === "ch" ? Ue() : e === "de" ? Me() : e === "es" ? Re() : e === "fr" ? Se() : e === "it" ? $e() : e === "jp" ? Fe() : e === "pl" ? Le() : e === "ru" ? De() : e === "uk" ? Ee() : Be()
  },
  Ge = () => "Rename alliance",
  Ne = () => "Alterar nome da aliança",
  He = () => "重命名联盟",
  Ie = () => "Allianznamen ändern",
  Oe = () => "Renombrar alianza",
  Ze = () => "Renommer l’alliance",
  Ve = () => "Cambia nome dell'alleanza",
  Ke = () => "アライアンス名を変更",
  We = () => "Zmień nazwę sojuszu",
  Qe = () => "Переименовать альянс",
  Je = () => "Перейменувати альянс",
  Ye = () => "Đổi tên liên minh",
  Zb = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Ge() : e === "pt" ? Ne() : e === "ch" ? He() : e === "de" ? Ie() : e === "es" ? Oe() : e === "fr" ? Ze() : e === "it" ? Ve() : e === "jp" ? Ke() : e === "pl" ? We() : e === "ru" ? Qe() : e === "uk" ? Je() : Ye()
  },
  Xe = () => "Showing",
  er = () => "Mostrando",
  rr = () => "显示",
  nr = () => "Anzeigen",
  ar = () => "Mostrando",
  tr = () => "Affichage de",
  _r = () => "Mostrando",
  ir = () => "表示",
  lr = () => "Wyświetlanie",
  cr = () => "Отображается",
  sr = () => "Показуючи",
  ur = () => "Hiển thị",
  Vb = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Xe() : e === "pt" ? er() : e === "ch" ? rr() : e === "de" ? nr() : e === "es" ? ar() : e === "fr" ? tr() : e === "it" ? _r() : e === "jp" ? ir() : e === "pl" ? lr() : e === "ru" ? cr() : e === "uk" ? sr() : ur()
  },
  or = () => "HQ",
  dr = () => "Sede",
  mr = () => "总部",
  fr = () => "HQ",
  pr = () => "Sede",
  wr = () => "QG",
  br = () => "QG",
  gr = () => "拠点",
  yr = () => "Siedziba",
  hr = () => "Штаб",
  qr = () => "Штаб",
  vr = () => "Trụ sở",
  Kb = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? or() : e === "pt" ? dr() : e === "ch" ? mr() : e === "de" ? fr() : e === "es" ? pr() : e === "fr" ? wr() : e === "it" ? br() : e === "jp" ? gr() : e === "pl" ? yr() : e === "ru" ? hr() : e === "uk" ? qr() : vr()
  },
  jr = () => "Alliance settings",
  kr = () => "Configurações da aliança",
  xr = () => "联盟设置",
  zr = () => "Allianz-Einstellungen",
  Cr = () => "Configuración de la alianza",
  Pr = () => "Paramètres de l'alliance",
  Ar = () => "Impostazioni dell'alleanza",
  Tr = () => "アライアンス設定",
  Ur = () => "Ustawienia sojuszu",
  Mr = () => "Настройки альянса",
  Rr = () => "Налаштування альянсу",
  Sr = () => "Cài đặt liên minh",
  Wb = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? jr() : e === "pt" ? kr() : e === "ch" ? xr() : e === "de" ? zr() : e === "es" ? Cr() : e === "fr" ? Pr() : e === "it" ? Ar() : e === "jp" ? Tr() : e === "pl" ? Ur() : e === "ru" ? Mr() : e === "uk" ? Rr() : Sr()
  },
  $r = () => "Gallery visibility",
  Fr = () => "Visibilidade na galeria",
  Lr = () => "列表可见性",
  Dr = () => "Sichtbarkeit in der Galerie",
  Er = () => "Visibilidad en la galería",
  Br = () => "Visibilité dans la galerie",
  Gr = () => "Visibilità nella galleria",
  Nr = () => "ギャラリーでの表示",
  Hr = () => "Widoczność w galerii",
  Ir = () => "Видимость в галерее",
  Or = () => "Видимість у галереї",
  Zr = () => "Hiển thị trong thư viện",
  Qb = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? $r() : e === "pt" ? Fr() : e === "ch" ? Lr() : e === "de" ? Dr() : e === "es" ? Er() : e === "fr" ? Br() : e === "it" ? Gr() : e === "jp" ? Nr() : e === "pl" ? Hr() : e === "ru" ? Ir() : e === "uk" ? Or() : Zr()
  },
  Vr = () => "Public",
  Kr = () => "Pública",
  Wr = () => "公开",
  Qr = () => "Öffentlich",
  Jr = () => "Pública",
  Yr = () => "Publique",
  Xr = () => "Pubblica",
  en = () => "公開",
  rn = () => "Publiczny",
  nn = () => "Публичный",
  an = () => "Публічний",
  tn = () => "Công khai",
  Jb = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Vr() : e === "pt" ? Kr() : e === "ch" ? Wr() : e === "de" ? Qr() : e === "es" ? Jr() : e === "fr" ? Yr() : e === "it" ? Xr() : e === "jp" ? en() : e === "pl" ? rn() : e === "ru" ? nn() : e === "uk" ? an() : tn()
  },
  _n = () => "Unlisted",
  ln = () => "Não listada",
  cn = () => "未公开",
  sn = () => "Nicht gelistet",
  un = () => "No listada",
  on = () => "Non répertoriée",
  dn = () => "Non elencata",
  mn = () => "非掲載",
  fn = () => "Niepubliczny",
  pn = () => "Не в галерее",
  wn = () => "Прихований",
  bn = () => "Ẩn khỏi danh sách",
  Yb = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? _n() : e === "pt" ? ln() : e === "ch" ? cn() : e === "de" ? sn() : e === "es" ? un() : e === "fr" ? on() : e === "it" ? dn() : e === "jp" ? mn() : e === "pl" ? fn() : e === "ru" ? pn() : e === "uk" ? wn() : bn()
  },
  gn = () => "Join policy",
  yn = () => "Política de entrada",
  hn = () => "加入方式",
  qn = () => "Beitrittsregel",
  vn = () => "Política de ingreso",
  jn = () => "Politique d'adhésion",
  kn = () => "Politica di ingresso",
  xn = () => "参加ポリシー",
  zn = () => "Zasady dołączania",
  Cn = () => "Правила вступления",
  Pn = () => "Правила вступу",
  An = () => "Chính sách tham gia",
  Xb = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? gn() : e === "pt" ? yn() : e === "ch" ? hn() : e === "de" ? qn() : e === "es" ? vn() : e === "fr" ? jn() : e === "it" ? kn() : e === "jp" ? xn() : e === "pl" ? zn() : e === "ru" ? Cn() : e === "uk" ? Pn() : An()
  },
  Tn = () => "Open",
  Un = () => "Aberta",
  Mn = () => "开放",
  Rn = () => "Offen",
  Sn = () => "Abierta",
  $n = () => "Ouverte",
  Fn = () => "Aperta",
  Ln = () => "自由参加",
  Dn = () => "Otwarty",
  En = () => "Свободный вход",
  Bn = () => "Відкритий",
  Gn = () => "Mở",
  eg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Tn() : e === "pt" ? Un() : e === "ch" ? Mn() : e === "de" ? Rn() : e === "es" ? Sn() : e === "fr" ? $n() : e === "it" ? Fn() : e === "jp" ? Ln() : e === "pl" ? Dn() : e === "ru" ? En() : e === "uk" ? Bn() : Gn()
  },
  Nn = () => "By request",
  Hn = () => "Por pedido",
  In = () => "需申请",
  On = () => "Auf Anfrage",
  Zn = () => "Por solicitud",
  Vn = () => "Sur demande",
  Kn = () => "Su richiesta",
  Wn = () => "申請制",
  Qn = () => "Na prośbę",
  Jn = () => "По заявке",
  Yn = () => "За заявкою",
  Xn = () => "Theo yêu cầu",
  rg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Nn() : e === "pt" ? Hn() : e === "ch" ? In() : e === "de" ? On() : e === "es" ? Zn() : e === "fr" ? Vn() : e === "it" ? Kn() : e === "jp" ? Wn() : e === "pl" ? Qn() : e === "ru" ? Jn() : e === "uk" ? Yn() : Xn()
  },
  ea = () => "Invite only",
  ra = () => "Somente convite",
  na = () => "仅限邀请",
  aa = () => "Nur mit Einladung",
  ta = () => "Solo por invitación",
  _a = () => "Sur invitation",
  ia = () => "Solo su invito",
  la = () => "招待制",
  ca = () => "Tylko z zaproszeniem",
  sa = () => "Только по приглашению",
  ua = () => "Лише за запрошенням",
  oa = () => "Chỉ theo lời mời",
  ng = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? ea() : e === "pt" ? ra() : e === "ch" ? na() : e === "de" ? aa() : e === "es" ? ta() : e === "fr" ? _a() : e === "it" ? ia() : e === "jp" ? la() : e === "pl" ? ca() : e === "ru" ? sa() : e === "uk" ? ua() : oa()
  },
  da = () => "Members",
  ma = () => "Membros",
  fa = () => "成员",
  pa = () => "Mitglieder",
  wa = () => "Miembros",
  ba = () => "Membres",
  ga = () => "Membri",
  ya = () => "メンバー",
  ha = () => "Członkowie",
  qa = () => "Участники",
  va = () => "Учасники",
  ja = () => "Thành viên",
  ag = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? da() : e === "pt" ? ma() : e === "ch" ? fa() : e === "de" ? pa() : e === "es" ? wa() : e === "fr" ? ba() : e === "it" ? ga() : e === "jp" ? ya() : e === "pl" ? ha() : e === "ru" ? qa() : e === "uk" ? va() : ja()
  },
  ka = () => "Admins",
  xa = () => "Admins",
  za = () => "管理员",
  Ca = () => "Admins",
  Pa = () => "Admins",
  Aa = () => "Admins",
  Ta = () => "Admin",
  Ua = () => "管理者",
  Ma = () => "Admini",
  Ra = () => "Админы",
  Sa = () => "Адміни",
  $a = () => "Quản trị viên",
  tg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? ka() : e === "pt" ? xa() : e === "ch" ? za() : e === "de" ? Ca() : e === "es" ? Pa() : e === "fr" ? Aa() : e === "it" ? Ta() : e === "jp" ? Ua() : e === "pl" ? Ma() : e === "ru" ? Ra() : e === "uk" ? Sa() : $a()
  },
  Fa = () => "Leader only",
  La = () => "Somente o líder",
  Da = () => "仅盟主",
  Ea = () => "Nur der Anführer",
  Ba = () => "Solo el líder",
  Ga = () => "Chef uniquement",
  Na = () => "Solo il leader",
  Ha = () => "リーダーのみ",
  Ia = () => "Tylko lider",
  Oa = () => "Только лидер",
  Za = () => "Лише лідер",
  Va = () => "Chỉ thủ lĩnh",
  _g = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Fa() : e === "pt" ? La() : e === "ch" ? Da() : e === "de" ? Ea() : e === "es" ? Ba() : e === "fr" ? Ga() : e === "it" ? Na() : e === "jp" ? Ha() : e === "pl" ? Ia() : e === "ru" ? Oa() : e === "uk" ? Za() : Va()
  },
  Ka = () => "Discord server invite",
  Wa = () => "Convite do servidor do Discord",
  Qa = () => "Discord 服务器邀请",
  Ja = () => "Einladung zum Discord-Server",
  Ya = () => "Invitación al servidor de Discord",
  Xa = () => "Invitation au serveur Discord",
  et = () => "Invito al server Discord",
  rt = () => "Discordサーバーの招待",
  nt = () => "Zaproszenie na serwer Discord",
  at = () => "Приглашение на сервер Discord",
  tt = () => "Запрошення на сервер Discord",
  _t = () => "Lời mời máy chủ Discord",
  ig = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Ka() : e === "pt" ? Wa() : e === "ch" ? Qa() : e === "de" ? Ja() : e === "es" ? Ya() : e === "fr" ? Xa() : e === "it" ? et() : e === "jp" ? rt() : e === "pl" ? nt() : e === "ru" ? at() : e === "uk" ? tt() : _t()
  },
  it = () => "Profile picture",
  lt = () => "Foto de perfil",
  ct = () => "头像",
  st = () => "Profilbild",
  ut = () => "Foto de perfil",
  ot = () => "Image de profil",
  dt = () => "Immagine del profilo",
  mt = () => "プロフィール画像",
  ft = () => "Zdjęcie profilowe",
  pt = () => "Изображение профиля",
  wt = () => "Зображення профілю",
  bt = () => "Ảnh đại diện",
  lg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? it() : e === "pt" ? lt() : e === "ch" ? ct() : e === "de" ? st() : e === "es" ? ut() : e === "fr" ? ot() : e === "it" ? dt() : e === "jp" ? mt() : e === "pl" ? ft() : e === "ru" ? pt() : e === "uk" ? wt() : bt()
  },
  gt = () => "Profile banner",
  yt = () => "Banner do perfil",
  ht = () => "横幅",
  qt = () => "Profilbanner",
  vt = () => "Banner del perfil",
  jt = () => "Bannière de profil",
  kt = () => "Banner del profilo",
  xt = () => "プロフィールバナー",
  zt = () => "Baner profilu",
  Ct = () => "Баннер профиля",
  Pt = () => "Банер профілю",
  At = () => "Ảnh bìa",
  cg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? gt() : e === "pt" ? yt() : e === "ch" ? ht() : e === "de" ? qt() : e === "es" ? vt() : e === "fr" ? jt() : e === "it" ? kt() : e === "jp" ? xt() : e === "pl" ? zt() : e === "ru" ? Ct() : e === "uk" ? Pt() : At()
  },
  Tt = () => "Awards",
  Ut = () => "Prêmios",
  Mt = () => "奖项",
  Rt = () => "Auszeichnungen",
  St = () => "Premios",
  $t = () => "Récompenses",
  Ft = () => "Premi",
  Lt = () => "アワード",
  Dt = () => "Nagrody",
  Et = () => "Награды",
  Bt = () => "Нагороди",
  Gt = () => "Giải thưởng",
  z = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Tt() : e === "pt" ? Ut() : e === "ch" ? Mt() : e === "de" ? Rt() : e === "es" ? St() : e === "fr" ? $t() : e === "it" ? Ft() : e === "jp" ? Lt() : e === "pl" ? Dt() : e === "ru" ? Et() : e === "uk" ? Bt() : Gt()
  },
  Nt = () => "Locked",
  Ht = () => "Bloqueado",
  It = () => "未解锁",
  Ot = () => "Gesperrt",
  Zt = () => "Bloqueado",
  Vt = () => "Verrouillée",
  Kt = () => "Bloccato",
  Wt = () => "ロック中",
  Qt = () => "Zablokowane",
  Jt = () => "Заблокировано",
  Yt = () => "Заблоковано",
  Xt = () => "Đã khóa",
  sg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Nt() : e === "pt" ? Ht() : e === "ch" ? It() : e === "de" ? Ot() : e === "es" ? Zt() : e === "fr" ? Vt() : e === "it" ? Kt() : e === "jp" ? Wt() : e === "pl" ? Qt() : e === "ru" ? Jt() : e === "uk" ? Yt() : Xt()
  },
  e_ = n => `Earned ${n.date}`,
  r_ = n => `Conquistado em ${n.date}`,
  n_ = n => `获得于 ${n.date}`,
  a_ = n => `Erhalten am ${n.date}`,
  t_ = n => `Conseguido el ${n.date}`,
  __ = n => `Obtenue le ${n.date}`,
  i_ = n => `Ottenuto il ${n.date}`,
  l_ = n => `${n.date} に獲得`,
  c_ = n => `Zdobyto ${n.date}`,
  s_ = n => `Получена ${n.date}`,
  u_ = n => `Отримано ${n.date}`,
  o_ = n => `Đạt được ${n.date}`,
  ug = (n, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? e_(n) : e === "pt" ? r_(n) : e === "ch" ? n_(n) : e === "de" ? a_(n) : e === "es" ? t_(n) : e === "fr" ? __(n) : e === "it" ? i_(n) : e === "jp" ? l_(n) : e === "pl" ? c_(n) : e === "ru" ? s_(n) : e === "uk" ? u_(n) : o_(n)
  },
  d_ = () => "Common",
  m_ = () => "Comum",
  f_ = () => "常见",
  p_ = () => "Gewöhnlich",
  w_ = () => "Común",
  b_ = () => "Commun",
  g_ = () => "Comune",
  y_ = () => "コモン",
  h_ = () => "Zwykły",
  q_ = () => "Обычная",
  v_ = () => "Звичайна",
  j_ = () => "Phổ biến",
  k_ = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? d_() : e === "pt" ? m_() : e === "ch" ? f_() : e === "de" ? p_() : e === "es" ? w_() : e === "fr" ? b_() : e === "it" ? g_() : e === "jp" ? y_() : e === "pl" ? h_() : e === "ru" ? q_() : e === "uk" ? v_() : j_()
  },
  x_ = () => "Uncommon",
  z_ = () => "Incomum",
  C_ = () => "少见",
  P_ = () => "Ungewöhnlich",
  A_ = () => "Poco común",
  T_ = () => "Peu commun",
  U_ = () => "Non comune",
  M_ = () => "アンコモン",
  R_ = () => "Niezwykły",
  S_ = () => "Необычная",
  $_ = () => "Незвичайна",
  F_ = () => "Ít gặp",
  L_ = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? x_() : e === "pt" ? z_() : e === "ch" ? C_() : e === "de" ? P_() : e === "es" ? A_() : e === "fr" ? T_() : e === "it" ? U_() : e === "jp" ? M_() : e === "pl" ? R_() : e === "ru" ? S_() : e === "uk" ? $_() : F_()
  },
  D_ = () => "Rare",
  E_ = () => "Raro",
  B_ = () => "罕见",
  G_ = () => "Selten",
  N_ = () => "Raro",
  H_ = () => "Rare",
  I_ = () => "Raro",
  O_ = () => "レア",
  Z_ = () => "Rzadki",
  V_ = () => "Редкая",
  K_ = () => "Рідкісна",
  W_ = () => "Hiếm",
  Q_ = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? D_() : e === "pt" ? E_() : e === "ch" ? B_() : e === "de" ? G_() : e === "es" ? N_() : e === "fr" ? H_() : e === "it" ? I_() : e === "jp" ? O_() : e === "pl" ? Z_() : e === "ru" ? V_() : e === "uk" ? K_() : W_()
  },
  J_ = () => "Epic",
  Y_ = () => "Épico",
  X_ = () => "史诗",
  ei = () => "Episch",
  ri = () => "Épico",
  ni = () => "Épique",
  ai = () => "Epico",
  ti = () => "エピック",
  _i = () => "Epicki",
  ii = () => "Эпическая",
  li = () => "Епічна",
  ci = () => "Tuyệt vời",
  si = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? J_() : e === "pt" ? Y_() : e === "ch" ? X_() : e === "de" ? ei() : e === "es" ? ri() : e === "fr" ? ni() : e === "it" ? ai() : e === "jp" ? ti() : e === "pl" ? _i() : e === "ru" ? ii() : e === "uk" ? li() : ci()
  },
  ui = () => "Legendary",
  oi = () => "Lendário",
  di = () => "传奇",
  mi = () => "Legendär",
  fi = () => "Legendario",
  pi = () => "Légendaire",
  wi = () => "Leggendario",
  bi = () => "レジェンダリー",
  gi = () => "Legendarny",
  yi = () => "Легендарная",
  hi = () => "Легендарна",
  qi = () => "Huyền thoại",
  vi = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? ui() : e === "pt" ? oi() : e === "ch" ? di() : e === "de" ? mi() : e === "es" ? fi() : e === "fr" ? pi() : e === "it" ? wi() : e === "jp" ? bi() : e === "pl" ? gi() : e === "ru" ? yi() : e === "uk" ? hi() : qi()
  },
  ji = () => "Mythic",
  ki = () => "Mítico",
  xi = () => "神话",
  zi = () => "Mythisch",
  Ci = () => "Mítico",
  Pi = () => "Mythique",
  Ai = () => "Mitico",
  Ti = () => "ミシック",
  Ui = () => "Mityczny",
  Mi = () => "Мифическая",
  Ri = () => "Міфічна",
  Si = () => "Thần thoại",
  $i = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? ji() : e === "pt" ? ki() : e === "ch" ? xi() : e === "de" ? zi() : e === "es" ? Ci() : e === "fr" ? Pi() : e === "it" ? Ai() : e === "jp" ? Ti() : e === "pl" ? Ui() : e === "ru" ? Mi() : e === "uk" ? Ri() : Si()
  },
  Fi = n => `Next: ${n.tier}`,
  Li = n => `Próximo: ${n.tier}`,
  Di = n => `下一级：${n.tier}`,
  Ei = n => `Nächste: ${n.tier}`,
  Bi = n => `Siguiente: ${n.tier}`,
  Gi = n => `Suivant : ${n.tier}`,
  Ni = n => `Prossimo: ${n.tier}`,
  Hi = n => `次: ${n.tier}`,
  Ii = n => `Następny: ${n.tier}`,
  Oi = n => `Далее: ${n.tier}`,
  Zi = n => `Далі: ${n.tier}`,
  Vi = n => `Tiếp theo: ${n.tier}`,
  og = (n, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Fi(n) : e === "pt" ? Li(n) : e === "ch" ? Di(n) : e === "de" ? Ei(n) : e === "es" ? Bi(n) : e === "fr" ? Gi(n) : e === "it" ? Ni(n) : e === "jp" ? Hi(n) : e === "pl" ? Ii(n) : e === "ru" ? Oi(n) : e === "uk" ? Zi(n) : Vi(n)
  },
  Ki = () => "First Gathering",
  Wi = () => "Primeiro encontro",
  Qi = () => "初次集结",
  Ji = () => "Erste Zusammenkunft",
  Yi = () => "Primer encuentro",
  Xi = () => "Premier rassemblement",
  el = () => "Primo raduno",
  rl = () => "初めての集い",
  nl = () => "Pierwsze zgromadzenie",
  al = () => "Первый сбор",
  tl = () => "Перший збір",
  _l = () => "Cuộc hội ngộ đầu tiên",
  M = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Ki() : e === "pt" ? Wi() : e === "ch" ? Qi() : e === "de" ? Ji() : e === "es" ? Yi() : e === "fr" ? Xi() : e === "it" ? el() : e === "jp" ? rl() : e === "pl" ? nl() : e === "ru" ? al() : e === "uk" ? tl() : _l()
  },
  il = () => "Reach 5 eligible members",
  ll = () => "Alcance 5 membros elegíveis",
  cl = () => "达到 5 名符合条件的成员",
  sl = () => "Erreiche 5 berechtigte Mitglieder",
  ul = () => "Alcanza 5 miembros elegibles",
  ol = () => "Atteignez 5 membres éligibles",
  dl = () => "Raggiungi 5 membri idonei",
  ml = () => "対象メンバー5人に到達する",
  fl = () => "Osiągnij 5 uprawnionych członków",
  pl = () => "Наберите 5 подходящих участников",
  wl = () => "Досягніть 5 учасників, які відповідають вимогам",
  bl = () => "Đạt 5 thành viên hợp lệ",
  R = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? il() : e === "pt" ? ll() : e === "ch" ? cl() : e === "de" ? sl() : e === "es" ? ul() : e === "fr" ? ol() : e === "it" ? dl() : e === "jp" ? ml() : e === "pl" ? fl() : e === "ru" ? pl() : e === "uk" ? wl() : bl()
  },
  gl = () => "Growing Community",
  yl = () => "Comunidade em crescimento",
  hl = () => "成长中的社区",
  ql = () => "Wachsende Community",
  vl = () => "Comunidad en crecimiento",
  jl = () => "Communauté grandissante",
  kl = () => "Comunità in crescita",
  xl = () => "成長するコミュニティ",
  zl = () => "Rosnąca społeczność",
  Cl = () => "Растущее сообщество",
  Pl = () => "Спільнота зростає",
  Al = () => "Cộng đồng lớn mạnh",
  b = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? gl() : e === "pt" ? yl() : e === "ch" ? hl() : e === "de" ? ql() : e === "es" ? vl() : e === "fr" ? jl() : e === "it" ? kl() : e === "jp" ? xl() : e === "pl" ? zl() : e === "ru" ? Cl() : e === "uk" ? Pl() : Al()
  },
  Tl = () => "Reach 25 eligible members",
  Ul = () => "Alcance 25 membros elegíveis",
  Ml = () => "达到 25 名符合条件的成员",
  Rl = () => "Erreiche 25 berechtigte Mitglieder",
  Sl = () => "Alcanza 25 miembros elegibles",
  $l = () => "Atteignez 25 membres éligibles",
  Fl = () => "Raggiungi 25 membri idonei",
  Ll = () => "対象メンバー25人に到達する",
  Dl = () => "Osiągnij 25 uprawnionych członków",
  El = () => "Наберите 25 подходящих участников",
  Bl = () => "Досягніть 25 учасників, які відповідають вимогам",
  Gl = () => "Đạt 25 thành viên hợp lệ",
  S = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Tl() : e === "pt" ? Ul() : e === "ch" ? Ml() : e === "de" ? Rl() : e === "es" ? Sl() : e === "fr" ? $l() : e === "it" ? Fl() : e === "jp" ? Ll() : e === "pl" ? Dl() : e === "ru" ? El() : e === "uk" ? Bl() : Gl()
  },
  Nl = () => "United Force",
  Hl = () => "Força unida",
  Il = () => "团结之力",
  Ol = () => "Vereinte Kraft",
  Zl = () => "Fuerza unida",
  Vl = () => "Force unie",
  Kl = () => "Forza unita",
  Wl = () => "団結せし力",
  Ql = () => "Zjednoczona siła",
  Jl = () => "Объединённая сила",
  Yl = () => "Об'єднана сила",
  Xl = () => "Sức mạnh đoàn kết",
  $ = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Nl() : e === "pt" ? Hl() : e === "ch" ? Il() : e === "de" ? Ol() : e === "es" ? Zl() : e === "fr" ? Vl() : e === "it" ? Kl() : e === "jp" ? Wl() : e === "pl" ? Ql() : e === "ru" ? Jl() : e === "uk" ? Yl() : Xl()
  },
  ec = () => "Reach 50 eligible members",
  rc = () => "Alcance 50 membros elegíveis",
  nc = () => "达到 50 名符合条件的成员",
  ac = () => "Erreiche 50 berechtigte Mitglieder",
  tc = () => "Alcanza 50 miembros elegibles",
  _c = () => "Atteignez 50 membres éligibles",
  ic = () => "Raggiungi 50 membri idonei",
  lc = () => "対象メンバー50人に到達する",
  cc = () => "Osiągnij 50 uprawnionych członków",
  sc = () => "Наберите 50 подходящих участников",
  uc = () => "Досягніть 50 учасників, які відповідають вимогам",
  oc = () => "Đạt 50 thành viên hợp lệ",
  F = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? ec() : e === "pt" ? rc() : e === "ch" ? nc() : e === "de" ? ac() : e === "es" ? tc() : e === "fr" ? _c() : e === "it" ? ic() : e === "jp" ? lc() : e === "pl" ? cc() : e === "ru" ? sc() : e === "uk" ? uc() : oc()
  },
  dc = () => "Full House",
  mc = () => "Casa cheia",
  fc = () => "座无虚席",
  pc = () => "Volles Haus",
  wc = () => "Casa llena",
  bc = () => "Salle comble",
  gc = () => "Al completo",
  yc = () => "満員御礼",
  hc = () => "Komplet",
  qc = () => "Полный состав",
  vc = () => "Повний склад",
  jc = () => "Kín chỗ",
  L = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? dc() : e === "pt" ? mc() : e === "ch" ? fc() : e === "de" ? pc() : e === "es" ? wc() : e === "fr" ? bc() : e === "it" ? gc() : e === "jp" ? yc() : e === "pl" ? hc() : e === "ru" ? qc() : e === "uk" ? vc() : jc()
  },
  kc = () => "Reach 100 eligible members",
  xc = () => "Alcance 100 membros elegíveis",
  zc = () => "达到 100 名符合条件的成员",
  Cc = () => "Erreiche 100 berechtigte Mitglieder",
  Pc = () => "Alcanza 100 miembros elegibles",
  Ac = () => "Atteignez 100 membres éligibles",
  Tc = () => "Raggiungi 100 membri idonei",
  Uc = () => "対象メンバー100人に到達する",
  Mc = () => "Osiągnij 100 uprawnionych członków",
  Rc = () => "Наберите 100 подходящих участников",
  Sc = () => "Досягніть 100 учасників, які відповідають вимогам",
  $c = () => "Đạt 100 thành viên hợp lệ",
  D = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? kc() : e === "pt" ? xc() : e === "ch" ? zc() : e === "de" ? Cc() : e === "es" ? Pc() : e === "fr" ? Ac() : e === "it" ? Tc() : e === "jp" ? Uc() : e === "pl" ? Mc() : e === "ru" ? Rc() : e === "uk" ? Sc() : $c()
  },
  Fc = () => "Grand Coalition",
  Lc = () => "Grande coalizão",
  Dc = () => "宏大同盟",
  Ec = () => "Große Koalition",
  Bc = () => "Gran coalición",
  Gc = () => "Grande coalition",
  Nc = () => "Grande coalizione",
  Hc = () => "大連合",
  Ic = () => "Wielka koalicja",
  Oc = () => "Великая коалиция",
  Zc = () => "Велика коаліція",
  Vc = () => "Đại liên minh",
  E = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Fc() : e === "pt" ? Lc() : e === "ch" ? Dc() : e === "de" ? Ec() : e === "es" ? Bc() : e === "fr" ? Gc() : e === "it" ? Nc() : e === "jp" ? Hc() : e === "pl" ? Ic() : e === "ru" ? Oc() : e === "uk" ? Zc() : Vc()
  },
  Kc = () => "Reach 500 eligible members",
  Wc = () => "Alcance 500 membros elegíveis",
  Qc = () => "达到 500 名符合条件的成员",
  Jc = () => "Erreiche 500 berechtigte Mitglieder",
  Yc = () => "Alcanza 500 miembros elegibles",
  Xc = () => "Atteignez 500 membres éligibles",
  es = () => "Raggiungi 500 membri idonei",
  rs = () => "対象メンバー500人に到達する",
  ns = () => "Osiągnij 500 uprawnionych członków",
  as = () => "Наберите 500 подходящих участников",
  ts = () => "Досягніть 500 учасників, які відповідають вимогам",
  _s = () => "Đạt 500 thành viên hợp lệ",
  B = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Kc() : e === "pt" ? Wc() : e === "ch" ? Qc() : e === "de" ? Jc() : e === "es" ? Yc() : e === "fr" ? Xc() : e === "it" ? es() : e === "jp" ? rs() : e === "pl" ? ns() : e === "ru" ? as() : e === "uk" ? ts() : _s()
  },
  is = () => "Thousand Strong",
  ls = () => "Mil fortes",
  cs = () => "千人之众",
  ss = () => "Tausend stark",
  us = () => "Mil fuertes",
  os = () => "Force de mille",
  ds = () => "In mille",
  ms = () => "千人の軍勢",
  fs = () => "Tysiąc w szeregach",
  ps = () => "Тысячная армия",
  ws = () => "Тисяча сильних",
  bs = () => "Ngàn người một lòng",
  G = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? is() : e === "pt" ? ls() : e === "ch" ? cs() : e === "de" ? ss() : e === "es" ? us() : e === "fr" ? os() : e === "it" ? ds() : e === "jp" ? ms() : e === "pl" ? fs() : e === "ru" ? ps() : e === "uk" ? ws() : bs()
  },
  gs = () => "Reach 1,000 eligible members",
  ys = () => "Alcance 1.000 membros elegíveis",
  hs = () => "达到 1,000 名符合条件的成员",
  qs = () => "Erreiche 1.000 berechtigte Mitglieder",
  vs = () => "Alcanza 1.000 miembros elegibles",
  js = () => "Atteignez 1 000 membres éligibles",
  ks = () => "Raggiungi 1.000 membri idonei",
  xs = () => "対象メンバー1,000人に到達する",
  zs = () => "Osiągnij 1000 uprawnionych członków",
  Cs = () => "Наберите 1 000 подходящих участников",
  Ps = () => "Досягніть 1 000 учасників, які відповідають вимогам",
  As = () => "Đạt 1.000 thành viên hợp lệ",
  N = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? gs() : e === "pt" ? ys() : e === "ch" ? hs() : e === "de" ? qs() : e === "es" ? vs() : e === "fr" ? js() : e === "it" ? ks() : e === "jp" ? xs() : e === "pl" ? zs() : e === "ru" ? Cs() : e === "uk" ? Ps() : As()
  },
  Ts = () => "Small Beginnings",
  Us = () => "Pequenos começos",
  Ms = () => "小小开端",
  Rs = () => "Kleine Anfänge",
  Ss = () => "Pequeños comienzos",
  $s = () => "Petits débuts",
  Fs = () => "Piccoli inizi",
  Ls = () => "小さな一歩",
  Ds = () => "Skromne początki",
  Es = () => "Скромное начало",
  Bs = () => "Скромний початок",
  Gs = () => "Khởi đầu nhỏ bé",
  H = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Ts() : e === "pt" ? Us() : e === "ch" ? Ms() : e === "de" ? Rs() : e === "es" ? Ss() : e === "fr" ? $s() : e === "it" ? Fs() : e === "jp" ? Ls() : e === "pl" ? Ds() : e === "ru" ? Es() : e === "uk" ? Bs() : Gs()
  },
  Ns = () => "Place 100 alliance pixels",
  Hs = () => "Coloque 100 pixels pela aliança",
  Is = () => "为联盟放置 100 个像素",
  Os = () => "Male 100 Pixel für die Allianz",
  Zs = () => "Coloca 100 píxeles para la alianza",
  Vs = () => "Placez 100 pixels pour l'alliance",
  Ks = () => "Piazza 100 pixel per l'alleanza",
  Ws = () => "アライアンスとして100ピクセルを塗る",
  Qs = () => "Pomaluj 100 pikseli dla sojuszu",
  Js = () => "Нарисуйте 100 пикселей за альянс",
  Ys = () => "Поставте 100 пікселів за альянс",
  Xs = () => "Đặt 100 pixel cho liên minh",
  I = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Ns() : e === "pt" ? Hs() : e === "ch" ? Is() : e === "de" ? Os() : e === "es" ? Zs() : e === "fr" ? Vs() : e === "it" ? Ks() : e === "jp" ? Ws() : e === "pl" ? Qs() : e === "ru" ? Js() : e === "uk" ? Ys() : Xs()
  },
  eu = () => "Making a Mark",
  ru = () => "Deixando a marca",
  nu = () => "初露锋芒",
  au = () => "Spuren hinterlassen",
  tu = () => "Dejando huella",
  _u = () => "Laisser sa marque",
  iu = () => "Lasciare il segno",
  lu = () => "爪痕を残す",
  cu = () => "Widoczny ślad",
  su = () => "Оставить свой след",
  uu = () => "Залишити слід",
  ou = () => "Ghi dấu ấn",
  O = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? eu() : e === "pt" ? ru() : e === "ch" ? nu() : e === "de" ? au() : e === "es" ? tu() : e === "fr" ? _u() : e === "it" ? iu() : e === "jp" ? lu() : e === "pl" ? cu() : e === "ru" ? su() : e === "uk" ? uu() : ou()
  },
  du = () => "Place 1,000 alliance pixels",
  mu = () => "Coloque 1.000 pixels pela aliança",
  fu = () => "为联盟放置 1,000 个像素",
  pu = () => "Male 1.000 Pixel für die Allianz",
  wu = () => "Coloca 1.000 píxeles para la alianza",
  bu = () => "Placez 1 000 pixels pour l'alliance",
  gu = () => "Piazza 1.000 pixel per l'alleanza",
  yu = () => "アライアンスとして1,000ピクセルを塗る",
  hu = () => "Pomaluj 1000 pikseli dla sojuszu",
  qu = () => "Нарисуйте 1 000 пикселей за альянс",
  vu = () => "Поставте 1 000 пікселів за альянс",
  ju = () => "Đặt 1.000 pixel cho liên minh",
  Z = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? du() : e === "pt" ? mu() : e === "ch" ? fu() : e === "de" ? pu() : e === "es" ? wu() : e === "fr" ? bu() : e === "it" ? gu() : e === "jp" ? yu() : e === "pl" ? hu() : e === "ru" ? qu() : e === "uk" ? vu() : ju()
  },
  ku = () => "Pixel Powerhouse",
  xu = () => "Potência de pixels",
  zu = () => "像素强者",
  Cu = () => "Pixel-Kraftwerk",
  Pu = () => "Potencia de píxeles",
  Au = () => "Puissance du pixel",
  Tu = () => "Potenza di pixel",
  Uu = () => "ピクセルの強豪",
  Mu = () => "Potęga pikseli",
  Ru = () => "Пиксельная мощь",
  Su = () => "Піксельна потуга",
  $u = () => "Cường quốc pixel",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? ku() : e === "pt" ? xu() : e === "ch" ? zu() : e === "de" ? Cu() : e === "es" ? Pu() : e === "fr" ? Au() : e === "it" ? Tu() : e === "jp" ? Uu() : e === "pl" ? Mu() : e === "ru" ? Ru() : e === "uk" ? Su() : $u()
  },
  Fu = () => "Place 10,000 alliance pixels",
  Lu = () => "Coloque 10.000 pixels pela aliança",
  Du = () => "为联盟放置 10,000 个像素",
  Eu = () => "Male 10.000 Pixel für die Allianz",
  Bu = () => "Coloca 10.000 píxeles para la alianza",
  Gu = () => "Placez 10 000 pixels pour l'alliance",
  Nu = () => "Piazza 10.000 pixel per l'alleanza",
  Hu = () => "アライアンスとして10,000ピクセルを塗る",
  Iu = () => "Pomaluj 10 000 pikseli dla sojuszu",
  Ou = () => "Нарисуйте 10 000 пикселей за альянс",
  Zu = () => "Поставте 10 000 пікселів за альянс",
  Vu = () => "Đặt 10.000 pixel cho liên minh",
  V = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Fu() : e === "pt" ? Lu() : e === "ch" ? Du() : e === "de" ? Eu() : e === "es" ? Bu() : e === "fr" ? Gu() : e === "it" ? Nu() : e === "jp" ? Hu() : e === "pl" ? Iu() : e === "ru" ? Ou() : e === "uk" ? Zu() : Vu()
  },
  Ku = () => "Canvas Giant",
  Wu = () => "Gigante da tela",
  Qu = () => "画布巨人",
  Ju = () => "Canvas-Riese",
  Yu = () => "Gigante del lienzo",
  Xu = () => "Géant du canvas",
  eo = () => "Gigante della tela",
  ro = () => "キャンバスの巨人",
  no = () => "Gigant płótna",
  ao = () => "Гигант холста",
  to = () => "Гігант полотна",
  _o = () => "Khổng lồ bảng vẽ",
  K = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Ku() : e === "pt" ? Wu() : e === "ch" ? Qu() : e === "de" ? Ju() : e === "es" ? Yu() : e === "fr" ? Xu() : e === "it" ? eo() : e === "jp" ? ro() : e === "pl" ? no() : e === "ru" ? ao() : e === "uk" ? to() : _o()
  },
  io = () => "Place 100,000 alliance pixels",
  lo = () => "Coloque 100.000 pixels pela aliança",
  co = () => "为联盟放置 100,000 个像素",
  so = () => "Male 100.000 Pixel für die Allianz",
  uo = () => "Coloca 100.000 píxeles para la alianza",
  oo = () => "Placez 100 000 pixels pour l'alliance",
  mo = () => "Piazza 100.000 pixel per l'alleanza",
  fo = () => "アライアンスとして100,000ピクセルを塗る",
  po = () => "Pomaluj 100 000 pikseli dla sojuszu",
  wo = () => "Нарисуйте 100 000 пикселей за альянс",
  bo = () => "Поставте 100 000 пікселів за альянс",
  go = () => "Đặt 100.000 pixel cho liên minh",
  W = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? io() : e === "pt" ? lo() : e === "ch" ? co() : e === "de" ? so() : e === "es" ? uo() : e === "fr" ? oo() : e === "it" ? mo() : e === "jp" ? fo() : e === "pl" ? po() : e === "ru" ? wo() : e === "uk" ? bo() : go()
  },
  yo = () => "Canvas Titan",
  ho = () => "Tita da tela",
  qo = () => "画布泰坦",
  vo = () => "Canvas-Titan",
  jo = () => "Titán del lienzo",
  ko = () => "Titan du canvas",
  xo = () => "Titano della tela",
  zo = () => "キャンバスの巨神",
  Co = () => "Tytan płótna",
  Po = () => "Титан холста",
  Ao = () => "Титан полотна",
  To = () => "Titan bảng vẽ",
  Q = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? yo() : e === "pt" ? ho() : e === "ch" ? qo() : e === "de" ? vo() : e === "es" ? jo() : e === "fr" ? ko() : e === "it" ? xo() : e === "jp" ? zo() : e === "pl" ? Co() : e === "ru" ? Po() : e === "uk" ? Ao() : To()
  },
  Uo = () => "Place 1,000,000 alliance pixels",
  Mo = () => "Coloque 1.000.000 pixels pela aliança",
  Ro = () => "为联盟放置 1,000,000 个像素",
  So = () => "Male 1.000.000 Pixel für die Allianz",
  $o = () => "Coloca 1.000.000 de píxeles para la alianza",
  Fo = () => "Placez 1 000 000 pixels pour l'alliance",
  Lo = () => "Piazza 1.000.000 pixel per l'alleanza",
  Do = () => "アライアンスとして1,000,000ピクセルを塗る",
  Eo = () => "Pomaluj 1 000 000 pikseli dla sojuszu",
  Bo = () => "Нарисуйте 1 000 000 пикселей за альянс",
  Go = () => "Поставте 1 000 000 пікселів за альянс",
  No = () => "Đặt 1.000.000 pixel cho liên minh",
  J = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Uo() : e === "pt" ? Mo() : e === "ch" ? Ro() : e === "de" ? So() : e === "es" ? $o() : e === "fr" ? Fo() : e === "it" ? Lo() : e === "jp" ? Do() : e === "pl" ? Eo() : e === "ru" ? Bo() : e === "uk" ? Go() : No()
  },
  Ho = () => "Canvas God",
  Io = () => "Deus da tela",
  Oo = () => "画布之神",
  Zo = () => "Canvas-Gott",
  Vo = () => "Dios del lienzo",
  Ko = () => "Dieu du canvas",
  Wo = () => "Dio della tela",
  Qo = () => "キャンバスの神",
  Jo = () => "Bóg płótna",
  Yo = () => "Бог холста",
  Xo = () => "Бог полотна",
  e0 = () => "Thần bảng vẽ",
  Y = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Ho() : e === "pt" ? Io() : e === "ch" ? Oo() : e === "de" ? Zo() : e === "es" ? Vo() : e === "fr" ? Ko() : e === "it" ? Wo() : e === "jp" ? Qo() : e === "pl" ? Jo() : e === "ru" ? Yo() : e === "uk" ? Xo() : e0()
  },
  r0 = () => "Place 10,000,000 alliance pixels",
  n0 = () => "Coloque 10.000.000 pixels pela aliança",
  a0 = () => "为联盟放置 10,000,000 个像素",
  t0 = () => "Male 10.000.000 Pixel für die Allianz",
  _0 = () => "Coloca 10.000.000 de píxeles para la alianza",
  i0 = () => "Placez 10 000 000 pixels pour l'alliance",
  l0 = () => "Piazza 10.000.000 pixel per l'alleanza",
  c0 = () => "アライアンスとして10,000,000ピクセルを塗る",
  s0 = () => "Pomaluj 10 000 000 pikseli dla sojuszu",
  u0 = () => "Нарисуйте 10 000 000 пикселей за альянс",
  o0 = () => "Поставте 10 000 000 пікселів за альянс",
  d0 = () => "Đặt 10.000.000 pixel cho liên minh",
  X = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? r0() : e === "pt" ? n0() : e === "ch" ? a0() : e === "de" ? t0() : e === "es" ? _0() : e === "fr" ? i0() : e === "it" ? l0() : e === "jp" ? c0() : e === "pl" ? s0() : e === "ru" ? u0() : e === "uk" ? o0() : d0()
  },
  m0 = () => "Dedicated Artists",
  f0 = () => "Artistas dedicados",
  p0 = () => "专注的画师",
  w0 = () => "Engagierte Künstler",
  b0 = () => "Artistas dedicados",
  g0 = () => "Artistes dévoués",
  y0 = () => "Artisti dedicati",
  h0 = () => "熱心なアーティストたち",
  q0 = () => "Oddani artyści",
  v0 = () => "Преданные художники",
  j0 = () => "Віддані художники",
  k0 = () => "Những nghệ sĩ tận tụy",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? m0() : e === "pt" ? f0() : e === "ch" ? p0() : e === "de" ? w0() : e === "es" ? b0() : e === "fr" ? g0() : e === "it" ? y0() : e === "jp" ? h0() : e === "pl" ? q0() : e === "ru" ? v0() : e === "uk" ? j0() : k0()
  },
  x0 = () => "Have 10 members each place 10,000 alliance pixels",
  z0 = () => "Tenha 10 membros que coloquem 10.000 pixels pela aliança cada",
  C0 = () => "让 10 名成员各为联盟放置 10,000 个像素",
  P0 = () => "Lass 10 Mitglieder je 10.000 Pixel für die Allianz malen",
  A0 = () => "Consigue que 10 miembros coloquen 10.000 píxeles para la alianza cada uno",
  T0 = () => "Ayez 10 membres qui placent chacun 10 000 pixels pour l'alliance",
  U0 = () => "Fai in modo che 10 membri piazzino 10.000 pixel per l'alleanza ciascuno",
  M0 = () => "10人のメンバーがそれぞれアライアンスとして10,000ピクセルを塗る",
  R0 = () => "Spraw, aby 10 członków pomalowało po 10 000 pikseli dla sojuszu",
  S0 = () => "10 участников должны нарисовать по 10 000 пикселей за альянс",
  $0 = () => "Зберіть 10 учасників, кожен з яких поставить 10 000 пікселів за альянс",
  F0 = () => "Có 10 thành viên, mỗi người đặt 10.000 pixel cho liên minh",
  ee = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? x0() : e === "pt" ? z0() : e === "ch" ? C0() : e === "de" ? P0() : e === "es" ? A0() : e === "fr" ? T0() : e === "it" ? U0() : e === "jp" ? M0() : e === "pl" ? R0() : e === "ru" ? S0() : e === "uk" ? $0() : F0()
  },
  L0 = () => "Veteran Alliance",
  D0 = () => "Aliança veterana",
  E0 = () => "老牌联盟",
  B0 = () => "Veteranen-Allianz",
  G0 = () => "Alianza veterana",
  N0 = () => "Alliance vétérane",
  H0 = () => "Alleanza veterana",
  I0 = () => "ベテランアライアンス",
  O0 = () => "Sojusz weteranów",
  Z0 = () => "Альянс-ветеран",
  V0 = () => "Альянс-ветеран",
  K0 = () => "Liên minh kỳ cựu",
  h = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? L0() : e === "pt" ? D0() : e === "ch" ? E0() : e === "de" ? B0() : e === "es" ? G0() : e === "fr" ? N0() : e === "it" ? H0() : e === "jp" ? I0() : e === "pl" ? O0() : e === "ru" ? Z0() : e === "uk" ? V0() : K0()
  },
  W0 = () => "Remain active for 30 consecutive days",
  Q0 = () => "Permaneça ativa por 30 dias consecutivos",
  J0 = () => "连续 30 天保持活跃",
  Y0 = () => "Bleibe 30 Tage in Folge aktiv",
  X0 = () => "Permanece activa durante 30 días consecutivos",
  ed = () => "Restez active pendant 30 jours consécutifs",
  rd = () => "Resta attiva per 30 giorni consecutivi",
  nd = () => "30日連続で活動を続ける",
  ad = () => "Pozostań aktywny przez 30 kolejnych dni",
  td = () => "Оставайтесь активными 30 дней подряд",
  _d = () => "Залишайтеся активними 30 днів поспіль",
  id = () => "Duy trì hoạt động 30 ngày liên tiếp",
  re = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? W0() : e === "pt" ? Q0() : e === "ch" ? J0() : e === "de" ? Y0() : e === "es" ? X0() : e === "fr" ? ed() : e === "it" ? rd() : e === "jp" ? nd() : e === "pl" ? ad() : e === "ru" ? td() : e === "uk" ? _d() : id()
  },
  ld = () => "Seasoned Alliance",
  cd = () => "Aliança experiente",
  sd = () => "资深联盟",
  ud = () => "Erfahrene Allianz",
  od = () => "Alianza experimentada",
  dd = () => "Alliance aguerrie",
  md = () => "Alleanza esperta",
  fd = () => "熟練のアライアンス",
  pd = () => "Doświadczony sojusz",
  wd = () => "Опытный альянс",
  bd = () => "Досвідчений альянс",
  gd = () => "Liên minh dày dạn",
  ne = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? ld() : e === "pt" ? cd() : e === "ch" ? sd() : e === "de" ? ud() : e === "es" ? od() : e === "fr" ? dd() : e === "it" ? md() : e === "jp" ? fd() : e === "pl" ? pd() : e === "ru" ? wd() : e === "uk" ? bd() : gd()
  },
  yd = () => "Remain active for 60 consecutive days",
  hd = () => "Permaneça ativa por 60 dias consecutivos",
  qd = () => "连续 60 天保持活跃",
  vd = () => "Bleibe 60 Tage in Folge aktiv",
  jd = () => "Permanece activa durante 60 días consecutivos",
  kd = () => "Restez active pendant 60 jours consécutifs",
  xd = () => "Resta attiva per 60 giorni consecutivi",
  zd = () => "60日連続で活動を続ける",
  Cd = () => "Pozostań aktywny przez 60 kolejnych dni",
  Pd = () => "Оставайтесь активными 60 дней подряд",
  Ad = () => "Залишайтеся активними 60 днів поспіль",
  Td = () => "Duy trì hoạt động 60 ngày liên tiếp",
  ae = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? yd() : e === "pt" ? hd() : e === "ch" ? qd() : e === "de" ? vd() : e === "es" ? jd() : e === "fr" ? kd() : e === "it" ? xd() : e === "jp" ? zd() : e === "pl" ? Cd() : e === "ru" ? Pd() : e === "uk" ? Ad() : Td()
  },
  Ud = () => "Enduring Alliance",
  Md = () => "Aliança duradoura",
  Rd = () => "长青联盟",
  Sd = () => "Beständige Allianz",
  $d = () => "Alianza duradera",
  Fd = () => "Alliance durable",
  Ld = () => "Alleanza duratura",
  Dd = () => "不屈のアライアンス",
  Ed = () => "Wytrwały sojusz",
  Bd = () => "Стойкий альянс",
  Gd = () => "Витривалий альянс",
  Nd = () => "Liên minh bền bỉ",
  te = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Ud() : e === "pt" ? Md() : e === "ch" ? Rd() : e === "de" ? Sd() : e === "es" ? $d() : e === "fr" ? Fd() : e === "it" ? Ld() : e === "jp" ? Dd() : e === "pl" ? Ed() : e === "ru" ? Bd() : e === "uk" ? Gd() : Nd()
  },
  Hd = () => "Remain active for 90 consecutive days",
  Id = () => "Permaneça ativa por 90 dias consecutivos",
  Od = () => "连续 90 天保持活跃",
  Zd = () => "Bleibe 90 Tage in Folge aktiv",
  Vd = () => "Permanece activa durante 90 días consecutivos",
  Kd = () => "Restez active pendant 90 jours consécutifs",
  Wd = () => "Resta attiva per 90 giorni consecutivi",
  Qd = () => "90日連続で活動を続ける",
  Jd = () => "Pozostań aktywny przez 90 kolejnych dni",
  Yd = () => "Оставайтесь активными 90 дней подряд",
  Xd = () => "Залишайтеся активними 90 днів поспіль",
  em = () => "Duy trì hoạt động 90 ngày liên tiếp",
  _e = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Hd() : e === "pt" ? Id() : e === "ch" ? Od() : e === "de" ? Zd() : e === "es" ? Vd() : e === "fr" ? Kd() : e === "it" ? Wd() : e === "jp" ? Qd() : e === "pl" ? Jd() : e === "ru" ? Yd() : e === "uk" ? Xd() : em()
  },
  rm = () => "Ancient Order",
  nm = () => "Ordem antiga",
  am = () => "古老秩序",
  tm = () => "Alter Orden",
  _m = () => "Orden antigua",
  im = () => "Ordre ancien",
  lm = () => "Ordine antico",
  cm = () => "古の結社",
  sm = () => "Starożytny zakon",
  um = () => "Древний орден",
  om = () => "Стародавній орден",
  dm = () => "Hội cổ xưa",
  ie = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? rm() : e === "pt" ? nm() : e === "ch" ? am() : e === "de" ? tm() : e === "es" ? _m() : e === "fr" ? im() : e === "it" ? lm() : e === "jp" ? cm() : e === "pl" ? sm() : e === "ru" ? um() : e === "uk" ? om() : dm()
  },
  mm = () => "Remain active for 180 consecutive days",
  fm = () => "Permaneça ativa por 180 dias consecutivos",
  pm = () => "连续 180 天保持活跃",
  wm = () => "Bleibe 180 Tage in Folge aktiv",
  bm = () => "Permanece activa durante 180 días consecutivos",
  gm = () => "Restez active pendant 180 jours consécutifs",
  ym = () => "Resta attiva per 180 giorni consecutivi",
  hm = () => "180日連続で活動を続ける",
  qm = () => "Pozostań aktywny przez 180 kolejnych dni",
  vm = () => "Оставайтесь активными 180 дней подряд",
  jm = () => "Залишайтеся активними 180 днів поспіль",
  km = () => "Duy trì hoạt động 180 ngày liên tiếp",
  le = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? mm() : e === "pt" ? fm() : e === "ch" ? pm() : e === "de" ? wm() : e === "es" ? bm() : e === "fr" ? gm() : e === "it" ? ym() : e === "jp" ? hm() : e === "pl" ? qm() : e === "ru" ? vm() : e === "uk" ? jm() : km()
  },
  xm = () => "Primordial",
  zm = () => "Primordial",
  Cm = () => "太古",
  Pm = () => "Urgestein",
  Am = () => "Primordial",
  Tm = () => "Primordiale",
  Um = () => "Primordiale",
  Mm = () => "太古の存在",
  Rm = () => "Pradawny",
  Sm = () => "Первозданный",
  $m = () => "Первозданний",
  Fm = () => "Nguyên thủy",
  ce = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? xm() : e === "pt" ? zm() : e === "ch" ? Cm() : e === "de" ? Pm() : e === "es" ? Am() : e === "fr" ? Tm() : e === "it" ? Um() : e === "jp" ? Mm() : e === "pl" ? Rm() : e === "ru" ? Sm() : e === "uk" ? $m() : Fm()
  },
  Lm = () => "Remain active for 365 consecutive days",
  Dm = () => "Permaneça ativa por 365 dias consecutivos",
  Em = () => "连续 365 天保持活跃",
  Bm = () => "Bleibe 365 Tage in Folge aktiv",
  Gm = () => "Permanece activa durante 365 días consecutivos",
  Nm = () => "Restez active pendant 365 jours consécutifs",
  Hm = () => "Resta attiva per 365 giorni consecutivi",
  Im = () => "365日連続で活動を続ける",
  Om = () => "Pozostań aktywny przez 365 kolejnych dni",
  Zm = () => "Оставайтесь активными 365 дней подряд",
  Vm = () => "Залишайтеся активними 365 днів поспіль",
  Km = () => "Duy trì hoạt động 365 ngày liên tiếp",
  se = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Lm() : e === "pt" ? Dm() : e === "ch" ? Em() : e === "de" ? Bm() : e === "es" ? Gm() : e === "fr" ? Nm() : e === "it" ? Hm() : e === "jp" ? Im() : e === "pl" ? Om() : e === "ru" ? Zm() : e === "uk" ? Vm() : Km()
  },
  Wm = () => "Active Community",
  Qm = () => "Comunidade ativa",
  Jm = () => "活跃社区",
  Ym = () => "Aktive Community",
  Xm = () => "Comunidad activa",
  ef = () => "Communauté active",
  rf = () => "Comunità attiva",
  nf = () => "活発なコミュニティ",
  af = () => "Aktywna społeczność",
  tf = () => "Активное сообщество",
  _f = () => "Активна спільнота",
  lf = () => "Cộng đồng năng động",
  q = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Wm() : e === "pt" ? Qm() : e === "ch" ? Jm() : e === "de" ? Ym() : e === "es" ? Xm() : e === "fr" ? ef() : e === "it" ? rf() : e === "jp" ? nf() : e === "pl" ? af() : e === "ru" ? tf() : e === "uk" ? _f() : lf()
  },
  cf = () => "Have 10 members paint in one UTC day",
  sf = () => "Tenha 10 membros pintando em um mesmo dia UTC",
  uf = () => "在同一个 UTC 日内有 10 名成员绘制",
  of = () => "Lass 10 Mitglieder an einem UTC-Tag malen",
  df = () => "Consigue que 10 miembros pinten en un mismo día UTC",
  mf = () => "Ayez 10 membres qui peignent le même jour UTC",
  ff = () => "Fai dipingere 10 membri nello stesso giorno UTC",
  pf = () => "同じUTCの1日に10人のメンバーがペイントする",
  wf = () => "Spraw, aby 10 członków malowało w ciągu jednego dnia UTC",
  bf = () => "10 участников должны рисовать за один день UTC",
  gf = () => "Зберіть 10 учасників, які малюватимуть за одну добу UTC",
  yf = () => "Có 10 thành viên cùng tô trong một ngày UTC",
  ue = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? cf() : e === "pt" ? sf() : e === "ch" ? uf() : e === "de" ? of() : e === "es" ? df() : e === "fr" ? mf() : e === "it" ? ff() : e === "jp" ? pf() : e === "pl" ? wf() : e === "ru" ? bf() : e === "uk" ? gf() : yf()
  },
  hf = () => "All Hands on Deck",
  qf = () => "Todos a postos",
  vf = () => "全员出动",
  jf = () => "Alle Mann an Deck",
  kf = () => "Todos a sus puestos",
  xf = () => "Tous sur le pont",
  zf = () => "Tutti in azione",
  Cf = () => "総動員",
  Pf = () => "Wszyscy na pokład",
  Af = () => "Все по местам",
  Tf = () => "Усі на палубу",
  Uf = () => "Toàn lực ra quân",
  oe = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? hf() : e === "pt" ? qf() : e === "ch" ? vf() : e === "de" ? jf() : e === "es" ? kf() : e === "fr" ? xf() : e === "it" ? zf() : e === "jp" ? Cf() : e === "pl" ? Pf() : e === "ru" ? Af() : e === "uk" ? Tf() : Uf()
  },
  Mf = () => "Have 25 members paint in one UTC day",
  Rf = () => "Tenha 25 membros pintando em um mesmo dia UTC",
  Sf = () => "在同一个 UTC 日内有 25 名成员绘制",
  $f = () => "Lass 25 Mitglieder an einem UTC-Tag malen",
  Ff = () => "Consigue que 25 miembros pinten en un mismo día UTC",
  Lf = () => "Ayez 25 membres qui peignent le même jour UTC",
  Df = () => "Fai dipingere 25 membri nello stesso giorno UTC",
  Ef = () => "同じUTCの1日に25人のメンバーがペイントする",
  Bf = () => "Spraw, aby 25 członków malowało w ciągu jednego dnia UTC",
  Gf = () => "25 участников должны рисовать за один день UTC",
  Nf = () => "Зберіть 25 учасників, які малюватимуть за одну добу UTC",
  Hf = () => "Có 25 thành viên cùng tô trong một ngày UTC",
  de = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Mf() : e === "pt" ? Rf() : e === "ch" ? Sf() : e === "de" ? $f() : e === "es" ? Ff() : e === "fr" ? Lf() : e === "it" ? Df() : e === "jp" ? Ef() : e === "pl" ? Bf() : e === "ru" ? Gf() : e === "uk" ? Nf() : Hf()
  },
  If = () => "Rallying Crowd",
  Of = () => "Multidão reunida",
  Zf = () => "集结的人潮",
  Vf = () => "Versammelte Menge",
  Kf = () => "Multitud reunida",
  Wf = () => "Foule ralliée",
  Qf = () => "Folla in adunata",
  Jf = () => "集いし群衆",
  Yf = () => "Zgromadzony tłum",
  Xf = () => "Сплочённая толпа",
  ep = () => "Згуртований натовп",
  rp = () => "Đám đông tụ hội",
  me = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? If() : e === "pt" ? Of() : e === "ch" ? Zf() : e === "de" ? Vf() : e === "es" ? Kf() : e === "fr" ? Wf() : e === "it" ? Qf() : e === "jp" ? Jf() : e === "pl" ? Yf() : e === "ru" ? Xf() : e === "uk" ? ep() : rp()
  },
  np = () => "Have 50 members paint in one UTC day",
  ap = () => "Tenha 50 membros pintando em um mesmo dia UTC",
  tp = () => "在同一个 UTC 日内有 50 名成员绘制",
  _p = () => "Lass 50 Mitglieder an einem UTC-Tag malen",
  ip = () => "Consigue que 50 miembros pinten en un mismo día UTC",
  lp = () => "Ayez 50 membres qui peignent le même jour UTC",
  cp = () => "Fai dipingere 50 membri nello stesso giorno UTC",
  sp = () => "同じUTCの1日に50人のメンバーがペイントする",
  up = () => "Spraw, aby 50 członków malowało w ciągu jednego dnia UTC",
  op = () => "50 участников должны рисовать за один день UTC",
  dp = () => "Зберіть 50 учасників, які малюватимуть за одну добу UTC",
  mp = () => "Có 50 thành viên cùng tô trong một ngày UTC",
  fe = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? np() : e === "pt" ? ap() : e === "ch" ? tp() : e === "de" ? _p() : e === "es" ? ip() : e === "fr" ? lp() : e === "it" ? cp() : e === "jp" ? sp() : e === "pl" ? up() : e === "ru" ? op() : e === "uk" ? dp() : mp()
  },
  fp = () => "Alliance Mobilized",
  pp = () => "Aliança mobilizada",
  wp = () => "联盟总动员",
  bp = () => "Allianz mobilisiert",
  gp = () => "Alianza movilizada",
  yp = () => "Alliance mobilisée",
  hp = () => "Alleanza mobilitata",
  qp = () => "アライアンス総出撃",
  vp = () => "Sojusz zmobilizowany",
  jp = () => "Альянс мобилизован",
  kp = () => "Альянс мобілізовано",
  xp = () => "Liên minh tổng động viên",
  pe = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? fp() : e === "pt" ? pp() : e === "ch" ? wp() : e === "de" ? bp() : e === "es" ? gp() : e === "fr" ? yp() : e === "it" ? hp() : e === "jp" ? qp() : e === "pl" ? vp() : e === "ru" ? jp() : e === "uk" ? kp() : xp()
  },
  zp = () => "Have 100 members paint in one UTC day",
  Cp = () => "Tenha 100 membros pintando em um mesmo dia UTC",
  Pp = () => "在同一个 UTC 日内有 100 名成员绘制",
  Ap = () => "Lass 100 Mitglieder an einem UTC-Tag malen",
  Tp = () => "Consigue que 100 miembros pinten en un mismo día UTC",
  Up = () => "Ayez 100 membres qui peignent le même jour UTC",
  Mp = () => "Fai dipingere 100 membri nello stesso giorno UTC",
  Rp = () => "同じUTCの1日に100人のメンバーがペイントする",
  Sp = () => "Spraw, aby 100 członków malowało w ciągu jednego dnia UTC",
  $p = () => "100 участников должны рисовать за один день UTC",
  Fp = () => "Зберіть 100 учасників, які малюватимуть за одну добу UTC",
  Lp = () => "Có 100 thành viên cùng tô trong một ngày UTC",
  we = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? zp() : e === "pt" ? Cp() : e === "ch" ? Pp() : e === "de" ? Ap() : e === "es" ? Tp() : e === "fr" ? Up() : e === "it" ? Mp() : e === "jp" ? Rp() : e === "pl" ? Sp() : e === "ru" ? $p() : e === "uk" ? Fp() : Lp()
  },
  Dp = () => "Perfect Attendance",
  Ep = () => "Presença perfeita",
  Bp = () => "全勤",
  Gp = () => "Perfekte Anwesenheit",
  Np = () => "Asistencia perfecta",
  Hp = () => "Présence parfaite",
  Ip = () => "Presenza perfetta",
  Op = () => "皆勤賞",
  Zp = () => "Pełna frekwencja",
  Vp = () => "Идеальная посещаемость",
  Kp = () => "Ідеальна відвідуваність",
  Wp = () => "Chuyên cần tuyệt đối",
  v = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Dp() : e === "pt" ? Ep() : e === "ch" ? Bp() : e === "de" ? Gp() : e === "es" ? Np() : e === "fr" ? Hp() : e === "it" ? Ip() : e === "jp" ? Op() : e === "pl" ? Zp() : e === "ru" ? Vp() : e === "uk" ? Kp() : Wp()
  },
  Qp = () => "Have at least one member paint each day for 7 days",
  Jp = () => "Tenha ao menos um membro pintando todos os dias por 7 dias",
  Yp = () => "连续 7 天每天至少有一名成员绘制",
  Xp = () => "Lass 7 Tage lang täglich mindestens ein Mitglied malen",
  ew = () => "Consigue que al menos un miembro pinte cada día durante 7 días",
  rw = () => "Ayez au moins un membre qui peint chaque jour pendant 7 jours",
  nw = () => "Fai dipingere almeno un membro ogni giorno per 7 giorni",
  aw = () => "7日間、毎日1人以上のメンバーがペイントする",
  tw = () => "Spraw, aby co najmniej jeden członek malował codziennie przez 7 dni",
  _w = () => "Хотя бы один участник должен рисовать каждый день в течение 7 дней",
  iw = () => "Забезпечте, щоб хоча б один учасник малював щодня протягом 7 днів",
  lw = () => "Có ít nhất một thành viên tô mỗi ngày trong 7 ngày",
  be = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Qp() : e === "pt" ? Jp() : e === "ch" ? Yp() : e === "de" ? Xp() : e === "es" ? ew() : e === "fr" ? rw() : e === "it" ? nw() : e === "jp" ? aw() : e === "pl" ? tw() : e === "ru" ? _w() : e === "uk" ? iw() : lw()
  },
  cw = () => "Profile picture",
  sw = () => "Foto do perfil",
  uw = () => "头像",
  ow = () => "Profilbild",
  dw = () => "Foto de perfil",
  mw = () => "Image de profil",
  fw = () => "Immagine del profilo",
  pw = () => "プロフィール画像",
  ww = () => "Zdjęcie profilowe",
  bw = () => "Изображение профиля",
  gw = () => "Зображення профілю",
  yw = () => "Ảnh đại diện",
  dg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? cw() : e === "pt" ? sw() : e === "ch" ? uw() : e === "de" ? ow() : e === "es" ? dw() : e === "fr" ? mw() : e === "it" ? fw() : e === "jp" ? pw() : e === "pl" ? ww() : e === "ru" ? bw() : e === "uk" ? gw() : yw()
  },
  hw = () => "Profile banner",
  qw = () => "Banner do perfil",
  vw = () => "横幅",
  jw = () => "Profilbanner",
  kw = () => "Banner del perfil",
  xw = () => "Bannière de profil",
  zw = () => "Banner del profilo",
  Cw = () => "プロフィールバナー",
  Pw = () => "Baner profilu",
  Aw = () => "Баннер профиля",
  Tw = () => "Банер профілю",
  Uw = () => "Ảnh bìa",
  mg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? hw() : e === "pt" ? qw() : e === "ch" ? vw() : e === "de" ? jw() : e === "es" ? kw() : e === "fr" ? xw() : e === "it" ? zw() : e === "jp" ? Cw() : e === "pl" ? Pw() : e === "ru" ? Aw() : e === "uk" ? Tw() : Uw()
  },
  Mw = () => "Equipped",
  Rw = () => "Equipado",
  Sw = () => "已装备",
  $w = () => "Ausgerüstet",
  Fw = () => "Equipado",
  Lw = () => "Équipé",
  Dw = () => "Equipaggiato",
  Ew = () => "装備中",
  Bw = () => "Założone",
  Gw = () => "Экипировано",
  Nw = () => "Оснащено",
  Hw = () => "Đã trang bị",
  fg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Mw() : e === "pt" ? Rw() : e === "ch" ? Sw() : e === "de" ? $w() : e === "es" ? Fw() : e === "fr" ? Lw() : e === "it" ? Dw() : e === "jp" ? Ew() : e === "pl" ? Bw() : e === "ru" ? Gw() : e === "uk" ? Nw() : Hw()
  },
  Iw = () => "Public",
  Ow = () => "Pública",
  Zw = () => "公开",
  Vw = () => "Öffentlich",
  Kw = () => "Pública",
  Ww = () => "Public",
  Qw = () => "Pubblico",
  Jw = () => "公開",
  Yw = () => "Publiczna",
  Xw = () => "Публичная",
  eb = () => "Публічна",
  rb = () => "Công khai",
  pg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Iw() : e === "pt" ? Ow() : e === "ch" ? Zw() : e === "de" ? Vw() : e === "es" ? Kw() : e === "fr" ? Ww() : e === "it" ? Qw() : e === "jp" ? Jw() : e === "pl" ? Yw() : e === "ru" ? Xw() : e === "uk" ? eb() : rb()
  },
  nb = () => "Members only",
  ab = () => "Somente membros",
  tb = () => "仅限成员",
  _b = () => "Nur Mitglieder",
  ib = () => "Solo miembros",
  lb = () => "Membres uniquement",
  cb = () => "Solo membri",
  sb = () => "メンバーのみ",
  ub = () => "Tylko dla członków",
  ob = () => "Только для участников",
  db = () => "Лише для учасників",
  mb = () => "Chỉ thành viên",
  wg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? nb() : e === "pt" ? ab() : e === "ch" ? tb() : e === "de" ? _b() : e === "es" ? ib() : e === "fr" ? lb() : e === "it" ? cb() : e === "jp" ? sb() : e === "pl" ? ub() : e === "ru" ? ob() : e === "uk" ? db() : mb()
  },
  fb = () => "Headquarters visibility",
  pb = () => "Visibilidade da sede",
  wb = () => "总部可见性",
  bb = () => "Sichtbarkeit des Hauptquartiers",
  gb = () => "Visibilidad del cuartel general",
  yb = () => "Visibilité du quartier général",
  hb = () => "Visibilità del quartier generale",
  qb = () => "拠点の公開範囲",
  vb = () => "Widoczność siedziby",
  jb = () => "Видимость штаб-квартиры",
  kb = () => "Видимість штаб-квартири",
  xb = () => "Hiển thị trụ sở",
  bg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? fb() : e === "pt" ? pb() : e === "ch" ? wb() : e === "de" ? bb() : e === "es" ? gb() : e === "fr" ? yb() : e === "it" ? hb() : e === "jp" ? qb() : e === "pl" ? vb() : e === "ru" ? jb() : e === "uk" ? kb() : xb()
  };

function zb(n) {
  return typeof n == "function"
}

function Cb(n, r) {
  if (zb(n)) {
    const _ = n();
    return _ === void 0 ? r : _
  }
  return n === void 0 ? r : n
}

function Pb(n, r) {
  let e = C(null);
  const _ = qe(() => Cb(r, 250));

  function i(...l) {
    if (t(e)) t(e).timeout && clearTimeout(t(e).timeout);
    else {
      let s, d;
      const ge = new Promise((ye, he) => {
        s = ye, d = he
      });
      f(e, {
        timeout: null,
        runner: null,
        promise: ge,
        resolve: s,
        reject: d
      }, !0)
    }
    return t(e).runner = async () => {
      if (!t(e)) return;
      const s = t(e);
      f(e, null);
      try {
        s.resolve(await n.apply(this, l))
      } catch (d) {
        s.reject(d)
      }
    }, t(e).timeout = setTimeout(t(e).runner, t(_)), t(e).promise
  }
  return i.cancel = async () => {
    (!t(e) || t(e).timeout === null) && (await new Promise(l => setTimeout(l, 0)), !t(e) || t(e).timeout === null) || (clearTimeout(t(e).timeout), t(e).reject("Cancelled"), f(e, null))
  }, i.runScheduledNow = async () => {
    var l, s;
    (!t(e) || !t(e).timeout) && (await new Promise(d => setTimeout(d, 0)), !t(e) || !t(e).timeout) || (clearTimeout(t(e).timeout), t(e).timeout = null, await ((s = (l = t(e)).runner) == null ? void 0 : s.call(l)))
  }, Object.defineProperty(i, "pending", {
    enumerable: !0,
    get() {
      var l;
      return !!((l = t(e)) != null && l.timeout)
    }
  }), i
}

function Ab() {}
var o, u;
class gg {
  constructor(r, e = 250) {
    p(this, o, C());
    p(this, u);
    f(c(this, o), r(), !0), this.cancel = this.cancel.bind(this), this.setImmediately = this.setImmediately.bind(this), this.updateImmediately = this.updateImmediately.bind(this), x(this, u, Pb(() => {
      f(c(this, o), r(), !0)
    }, e)), xe(r, () => {
      c(this, u).call(this).catch(Ab)
    })
  }
  get current() {
    return t(c(this, o))
  }
  get pending() {
    return c(this, u).pending
  }
  cancel() {
    c(this, u).cancel()
  }
  updateImmediately() {
    return c(this, u).runScheduledNow()
  }
  setImmediately(r) {
    this.cancel(), f(c(this, o), r, !0)
  }
}
o = new WeakMap, u = new WeakMap;
const m = {
    members: b,
    pixels: g,
    dedicated_artists: y,
    age: h,
    daily_members: q,
    active_days: v,
    members_5: M,
    members_25: b,
    members_50: $,
    members_100: L,
    members_500: E,
    members_1000: G,
    pixels_100: H,
    pixels_1000: O,
    pixels_10000: g,
    pixels_100000: K,
    pixels_1000000: Q,
    pixels_10000000: Y,
    dedicated_artists_10: y,
    age_30_days: h,
    age_60_days: ne,
    age_90_days: te,
    age_180_days: ie,
    age_365_days: ce,
    daily_members_10: q,
    daily_members_25: oe,
    daily_members_50: me,
    daily_members_100: pe,
    active_7_days: v
  },
  w = {
    members_5: R,
    members_25: S,
    members_50: F,
    members_100: D,
    members_500: B,
    members_1000: N,
    pixels_100: I,
    pixels_1000: Z,
    pixels_10000: V,
    pixels_100000: W,
    pixels_1000000: J,
    pixels_10000000: X,
    dedicated_artists_10: ee,
    age_30_days: re,
    age_60_days: ae,
    age_90_days: _e,
    age_180_days: le,
    age_365_days: se,
    daily_members_10: ue,
    daily_members_25: de,
    daily_members_50: fe,
    daily_members_100: we,
    active_7_days: be
  },
  Tb = {
    members: {
      common: M,
      uncommon: b,
      rare: $,
      epic: L,
      legendary: E,
      mythic: G
    },
    pixels: {
      common: H,
      uncommon: O,
      rare: g,
      epic: K,
      legendary: Q,
      mythic: Y
    },
    dedicated_artists: {
      common: y
    },
    age: {
      common: h,
      uncommon: ne,
      rare: te,
      epic: ie,
      legendary: ce
    },
    daily_members: {
      common: q,
      uncommon: oe,
      rare: me,
      epic: pe
    },
    active_days: {
      common: v
    }
  },
  Ub = {
    members: {
      common: R,
      uncommon: S,
      rare: F,
      epic: D,
      legendary: B,
      mythic: N
    },
    pixels: {
      common: I,
      uncommon: Z,
      rare: V,
      epic: W,
      legendary: J,
      mythic: X
    },
    dedicated_artists: {
      common: ee
    },
    age: {
      common: re,
      uncommon: ae,
      rare: _e,
      epic: le,
      legendary: se
    },
    daily_members: {
      common: ue,
      uncommon: de,
      rare: fe,
      epic: we
    },
    active_days: {
      common: be
    }
  },
  Mb = {
    common: k_,
    uncommon: L_,
    rare: Q_,
    epic: si,
    legendary: vi,
    mythic: $i
  };

function yg(n, r) {
  var e, _, i, l;
  return r ? ((_ = (e = Tb[n]) == null ? void 0 : e[r]) == null ? void 0 : _.call(e)) ?? ((i = m[n]) == null ? void 0 : i.call(m)) ?? z() : ((l = m[n]) == null ? void 0 : l.call(m)) ?? z()
}

function hg(n, r) {
  var e, _, i;
  return r ? ((_ = (e = Ub[n]) == null ? void 0 : e[r]) == null ? void 0 : _.call(e)) ?? "" : ((i = w[n]) == null ? void 0 : i.call(w)) ?? ""
}

function qg(n) {
  return Mb[n]()
}

function vg(n) {
  return ze(n)
}

function jg(n) {
  return n.replace(new RegExp("(\\P{M})(\\p{M}+)", "gu"), (r, e, _) => {
    if (/[\uFE0E\uFE0F\u20E3]/.test(_)) return r;
    const i = e.normalize("NFKC");
    return i === e || !new RegExp("^\\p{L}$", "u").test(i) ? r : (i + _).normalize("NFC")
  })
}
var Rb = new Set(["$$slots", "$$events", "$$legacy", "fill"]),
  Sb = A('<svg><path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"></path></svg>');

function kg(n, r) {
  let e = Pe(r, "fill", 3, "#5865F2"),
    _ = U(r, Rb);
  var i = Sb();
  T(i, () => ({
    viewBox: "0 0 256 199",
    width: "256",
    height: "199",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    ..._
  }));
  var l = je(i);
  ke(i), ve(() => Ce(l, "fill", e())), P(n, i)
}
var $b = new Set(["$$slots", "$$events", "$$legacy"]),
  Fb = A('<svg><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"></path></svg>');

function xg(n, r) {
  let e = U(r, $b);
  var _ = Fb();
  T(_, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), P(n, _)
}
export {
  xg as A, rg as B, ag as C, gg as D, _g as E, tg as F, bg as G, wg as H, pg as I, vg as J, fg as a, dg as b, mg as c, cg as d, lg as e, kg as f, ig as g, Wb as h, Kb as i, z as j, Yb as k, jg as l, qg as m, yg as n, sg as o, ug as p, og as q, Zb as r, hg as s, Ob as t, Vb as u, Qb as v, Jb as w, Xb as x, eg as y, ng as z
};