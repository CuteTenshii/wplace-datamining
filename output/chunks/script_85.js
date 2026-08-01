var k = r => {
  throw TypeError(r)
};
var j = (r, n, e) => n.has(r) || k("Cannot " + e);
var c = (r, n, e) => (j(r, n, "read from private field"), e ? e.call(r) : n.get(r)),
  p = (r, n, e) => n.has(r) ? k("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(r) : n.set(r, e),
  x = (r, n, e, _) => (j(r, n, "write to private field"), _ ? _.call(r, e) : n.set(r, e), e);
import {
  g as a
} from "./BhCkpOlh.js";
import {
  i as t,
  h as f,
  e as C,
  u as ve,
  t as ke,
  a as P,
  k as A,
  d as je,
  r as xe
} from "./DUZ_qUVk.js";
import {
  w as ze
} from "./BC0G5yvq.js";
import "./Bzak7iHL.js";
import {
  b as T,
  s as Ce
} from "./M4i-R8Gk.js";
import {
  p as Pe,
  r as U
} from "./DXFW01RN.js";
const Ae = () => "Leader",
  Te = () => "Líder",
  Ue = () => "盟主",
  Me = () => "Anführer",
  Re = () => "Líder",
  Se = () => "Chef",
  $e = () => "Leader",
  De = () => "リーダー",
  Le = () => "Lider",
  Fe = () => "Лидер",
  Be = () => "Лідер",
  Ge = () => "Thủ lĩnh",
  Ub = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Ae() : e === "pt" ? Te() : e === "ch" ? Ue() : e === "de" ? Me() : e === "es" ? Re() : e === "fr" ? Se() : e === "it" ? $e() : e === "jp" ? De() : e === "pl" ? Le() : e === "ru" ? Fe() : e === "uk" ? Be() : Ge()
  },
  Ee = () => "Rename alliance",
  Ie = () => "Alterar nome da aliança",
  Ne = () => "重命名联盟",
  Oe = () => "Allianznamen ändern",
  He = () => "Renombrar alianza",
  Ze = () => "Renommer l’alliance",
  Ve = () => "Cambia nome dell'alleanza",
  Ke = () => "アライアンス名を変更",
  We = () => "Zmień nazwę sojuszu",
  Qe = () => "Переименовать альянс",
  Je = () => "Перейменувати альянс",
  Ye = () => "Đổi tên liên minh",
  Mb = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Ee() : e === "pt" ? Ie() : e === "ch" ? Ne() : e === "de" ? Oe() : e === "es" ? He() : e === "fr" ? Ze() : e === "it" ? Ve() : e === "jp" ? Ke() : e === "pl" ? We() : e === "ru" ? Qe() : e === "uk" ? Je() : Ye()
  },
  Xe = () => "HQ",
  er = () => "Sede",
  rr = () => "总部",
  nr = () => "HQ",
  ar = () => "Sede",
  tr = () => "QG",
  _r = () => "QG",
  ir = () => "拠点",
  lr = () => "Siedziba",
  cr = () => "Штаб",
  sr = () => "Штаб",
  ur = () => "Trụ sở",
  Rb = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Xe() : e === "pt" ? er() : e === "ch" ? rr() : e === "de" ? nr() : e === "es" ? ar() : e === "fr" ? tr() : e === "it" ? _r() : e === "jp" ? ir() : e === "pl" ? lr() : e === "ru" ? cr() : e === "uk" ? sr() : ur()
  },
  or = () => "Alliance settings",
  dr = () => "Configurações da aliança",
  mr = () => "联盟设置",
  fr = () => "Allianz-Einstellungen",
  pr = () => "Configuración de la alianza",
  wr = () => "Paramètres de l'alliance",
  br = () => "Impostazioni dell'alleanza",
  gr = () => "アライアンス設定",
  yr = () => "Ustawienia sojuszu",
  hr = () => "Настройки альянса",
  qr = () => "Налаштування альянсу",
  vr = () => "Cài đặt liên minh",
  Sb = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? or() : e === "pt" ? dr() : e === "ch" ? mr() : e === "de" ? fr() : e === "es" ? pr() : e === "fr" ? wr() : e === "it" ? br() : e === "jp" ? gr() : e === "pl" ? yr() : e === "ru" ? hr() : e === "uk" ? qr() : vr()
  },
  kr = () => "Gallery visibility",
  jr = () => "Visibilidade na galeria",
  xr = () => "列表可见性",
  zr = () => "Sichtbarkeit in der Galerie",
  Cr = () => "Visibilidad en la galería",
  Pr = () => "Visibilité dans la galerie",
  Ar = () => "Visibilità nella galleria",
  Tr = () => "ギャラリーでの表示",
  Ur = () => "Widoczność w galerii",
  Mr = () => "Видимость в галерее",
  Rr = () => "Видимість у галереї",
  Sr = () => "Hiển thị trong thư viện",
  $b = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? kr() : e === "pt" ? jr() : e === "ch" ? xr() : e === "de" ? zr() : e === "es" ? Cr() : e === "fr" ? Pr() : e === "it" ? Ar() : e === "jp" ? Tr() : e === "pl" ? Ur() : e === "ru" ? Mr() : e === "uk" ? Rr() : Sr()
  },
  $r = () => "Public",
  Dr = () => "Pública",
  Lr = () => "公开",
  Fr = () => "Öffentlich",
  Br = () => "Pública",
  Gr = () => "Publique",
  Er = () => "Pubblica",
  Ir = () => "公開",
  Nr = () => "Publiczny",
  Or = () => "Публичный",
  Hr = () => "Публічний",
  Zr = () => "Công khai",
  Db = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? $r() : e === "pt" ? Dr() : e === "ch" ? Lr() : e === "de" ? Fr() : e === "es" ? Br() : e === "fr" ? Gr() : e === "it" ? Er() : e === "jp" ? Ir() : e === "pl" ? Nr() : e === "ru" ? Or() : e === "uk" ? Hr() : Zr()
  },
  Vr = () => "Unlisted",
  Kr = () => "Não listada",
  Wr = () => "未公开",
  Qr = () => "Nicht gelistet",
  Jr = () => "No listada",
  Yr = () => "Non répertoriée",
  Xr = () => "Non elencata",
  en = () => "非掲載",
  rn = () => "Niepubliczny",
  nn = () => "Не в галерее",
  an = () => "Прихований",
  tn = () => "Ẩn khỏi danh sách",
  Lb = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Vr() : e === "pt" ? Kr() : e === "ch" ? Wr() : e === "de" ? Qr() : e === "es" ? Jr() : e === "fr" ? Yr() : e === "it" ? Xr() : e === "jp" ? en() : e === "pl" ? rn() : e === "ru" ? nn() : e === "uk" ? an() : tn()
  },
  _n = () => "Join policy",
  ln = () => "Política de entrada",
  cn = () => "加入方式",
  sn = () => "Beitrittsregel",
  un = () => "Política de ingreso",
  on = () => "Politique d'adhésion",
  dn = () => "Politica di ingresso",
  mn = () => "参加ポリシー",
  fn = () => "Zasady dołączania",
  pn = () => "Правила вступления",
  wn = () => "Правила вступу",
  bn = () => "Chính sách tham gia",
  Fb = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? _n() : e === "pt" ? ln() : e === "ch" ? cn() : e === "de" ? sn() : e === "es" ? un() : e === "fr" ? on() : e === "it" ? dn() : e === "jp" ? mn() : e === "pl" ? fn() : e === "ru" ? pn() : e === "uk" ? wn() : bn()
  },
  gn = () => "Open",
  yn = () => "Aberta",
  hn = () => "开放",
  qn = () => "Offen",
  vn = () => "Abierta",
  kn = () => "Ouverte",
  jn = () => "Aperta",
  xn = () => "自由参加",
  zn = () => "Otwarty",
  Cn = () => "Свободный вход",
  Pn = () => "Відкритий",
  An = () => "Mở",
  Bb = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? gn() : e === "pt" ? yn() : e === "ch" ? hn() : e === "de" ? qn() : e === "es" ? vn() : e === "fr" ? kn() : e === "it" ? jn() : e === "jp" ? xn() : e === "pl" ? zn() : e === "ru" ? Cn() : e === "uk" ? Pn() : An()
  },
  Tn = () => "By request",
  Un = () => "Por pedido",
  Mn = () => "需申请",
  Rn = () => "Auf Anfrage",
  Sn = () => "Por solicitud",
  $n = () => "Sur demande",
  Dn = () => "Su richiesta",
  Ln = () => "申請制",
  Fn = () => "Na prośbę",
  Bn = () => "По заявке",
  Gn = () => "За заявкою",
  En = () => "Theo yêu cầu",
  Gb = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Tn() : e === "pt" ? Un() : e === "ch" ? Mn() : e === "de" ? Rn() : e === "es" ? Sn() : e === "fr" ? $n() : e === "it" ? Dn() : e === "jp" ? Ln() : e === "pl" ? Fn() : e === "ru" ? Bn() : e === "uk" ? Gn() : En()
  },
  In = () => "Invite only",
  Nn = () => "Somente convite",
  On = () => "仅限邀请",
  Hn = () => "Nur mit Einladung",
  Zn = () => "Solo por invitación",
  Vn = () => "Sur invitation",
  Kn = () => "Solo su invito",
  Wn = () => "招待制",
  Qn = () => "Tylko z zaproszeniem",
  Jn = () => "Только по приглашению",
  Yn = () => "Лише за запрошенням",
  Xn = () => "Chỉ theo lời mời",
  Eb = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? In() : e === "pt" ? Nn() : e === "ch" ? On() : e === "de" ? Hn() : e === "es" ? Zn() : e === "fr" ? Vn() : e === "it" ? Kn() : e === "jp" ? Wn() : e === "pl" ? Qn() : e === "ru" ? Jn() : e === "uk" ? Yn() : Xn()
  },
  ea = () => "Members",
  ra = () => "Membros",
  na = () => "成员",
  aa = () => "Mitglieder",
  ta = () => "Miembros",
  _a = () => "Membres",
  ia = () => "Membri",
  la = () => "メンバー",
  ca = () => "Członkowie",
  sa = () => "Участники",
  ua = () => "Учасники",
  oa = () => "Thành viên",
  Ib = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? ea() : e === "pt" ? ra() : e === "ch" ? na() : e === "de" ? aa() : e === "es" ? ta() : e === "fr" ? _a() : e === "it" ? ia() : e === "jp" ? la() : e === "pl" ? ca() : e === "ru" ? sa() : e === "uk" ? ua() : oa()
  },
  da = () => "Admins",
  ma = () => "Admins",
  fa = () => "管理员",
  pa = () => "Admins",
  wa = () => "Admins",
  ba = () => "Admins",
  ga = () => "Admin",
  ya = () => "管理者",
  ha = () => "Admini",
  qa = () => "Админы",
  va = () => "Адміни",
  ka = () => "Quản trị viên",
  Nb = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? da() : e === "pt" ? ma() : e === "ch" ? fa() : e === "de" ? pa() : e === "es" ? wa() : e === "fr" ? ba() : e === "it" ? ga() : e === "jp" ? ya() : e === "pl" ? ha() : e === "ru" ? qa() : e === "uk" ? va() : ka()
  },
  ja = () => "Leader only",
  xa = () => "Somente o líder",
  za = () => "仅盟主",
  Ca = () => "Nur der Anführer",
  Pa = () => "Solo el líder",
  Aa = () => "Chef uniquement",
  Ta = () => "Solo il leader",
  Ua = () => "リーダーのみ",
  Ma = () => "Tylko lider",
  Ra = () => "Только лидер",
  Sa = () => "Лише лідер",
  $a = () => "Chỉ thủ lĩnh",
  Ob = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? ja() : e === "pt" ? xa() : e === "ch" ? za() : e === "de" ? Ca() : e === "es" ? Pa() : e === "fr" ? Aa() : e === "it" ? Ta() : e === "jp" ? Ua() : e === "pl" ? Ma() : e === "ru" ? Ra() : e === "uk" ? Sa() : $a()
  },
  Da = () => "Discord server invite",
  La = () => "Convite do servidor do Discord",
  Fa = () => "Discord 服务器邀请",
  Ba = () => "Einladung zum Discord-Server",
  Ga = () => "Invitación al servidor de Discord",
  Ea = () => "Invitation au serveur Discord",
  Ia = () => "Invito al server Discord",
  Na = () => "Discordサーバーの招待",
  Oa = () => "Zaproszenie na serwer Discord",
  Ha = () => "Приглашение на сервер Discord",
  Za = () => "Запрошення на сервер Discord",
  Va = () => "Lời mời máy chủ Discord",
  Hb = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Da() : e === "pt" ? La() : e === "ch" ? Fa() : e === "de" ? Ba() : e === "es" ? Ga() : e === "fr" ? Ea() : e === "it" ? Ia() : e === "jp" ? Na() : e === "pl" ? Oa() : e === "ru" ? Ha() : e === "uk" ? Za() : Va()
  },
  Ka = () => "Profile picture",
  Wa = () => "Foto de perfil",
  Qa = () => "头像",
  Ja = () => "Profilbild",
  Ya = () => "Foto de perfil",
  Xa = () => "Image de profil",
  et = () => "Immagine del profilo",
  rt = () => "プロフィール画像",
  nt = () => "Zdjęcie profilowe",
  at = () => "Изображение профиля",
  tt = () => "Зображення профілю",
  _t = () => "Ảnh đại diện",
  Zb = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Ka() : e === "pt" ? Wa() : e === "ch" ? Qa() : e === "de" ? Ja() : e === "es" ? Ya() : e === "fr" ? Xa() : e === "it" ? et() : e === "jp" ? rt() : e === "pl" ? nt() : e === "ru" ? at() : e === "uk" ? tt() : _t()
  },
  it = () => "Profile banner",
  lt = () => "Banner do perfil",
  ct = () => "横幅",
  st = () => "Profilbanner",
  ut = () => "Banner del perfil",
  ot = () => "Bannière de profil",
  dt = () => "Banner del profilo",
  mt = () => "プロフィールバナー",
  ft = () => "Baner profilu",
  pt = () => "Баннер профиля",
  wt = () => "Банер профілю",
  bt = () => "Ảnh bìa",
  Vb = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? it() : e === "pt" ? lt() : e === "ch" ? ct() : e === "de" ? st() : e === "es" ? ut() : e === "fr" ? ot() : e === "it" ? dt() : e === "jp" ? mt() : e === "pl" ? ft() : e === "ru" ? pt() : e === "uk" ? wt() : bt()
  },
  gt = () => "Awards",
  yt = () => "Prêmios",
  ht = () => "奖项",
  qt = () => "Auszeichnungen",
  vt = () => "Premios",
  kt = () => "Récompenses",
  jt = () => "Premi",
  xt = () => "アワード",
  zt = () => "Nagrody",
  Ct = () => "Награды",
  Pt = () => "Нагороди",
  At = () => "Giải thưởng",
  z = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? gt() : e === "pt" ? yt() : e === "ch" ? ht() : e === "de" ? qt() : e === "es" ? vt() : e === "fr" ? kt() : e === "it" ? jt() : e === "jp" ? xt() : e === "pl" ? zt() : e === "ru" ? Ct() : e === "uk" ? Pt() : At()
  },
  Tt = () => "Locked",
  Ut = () => "Bloqueado",
  Mt = () => "未解锁",
  Rt = () => "Gesperrt",
  St = () => "Bloqueado",
  $t = () => "Verrouillée",
  Dt = () => "Bloccato",
  Lt = () => "ロック中",
  Ft = () => "Zablokowane",
  Bt = () => "Заблокировано",
  Gt = () => "Заблоковано",
  Et = () => "Đã khóa",
  Kb = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Tt() : e === "pt" ? Ut() : e === "ch" ? Mt() : e === "de" ? Rt() : e === "es" ? St() : e === "fr" ? $t() : e === "it" ? Dt() : e === "jp" ? Lt() : e === "pl" ? Ft() : e === "ru" ? Bt() : e === "uk" ? Gt() : Et()
  },
  It = r => `Earned ${r.date}`,
  Nt = r => `Conquistado em ${r.date}`,
  Ot = r => `获得于 ${r.date}`,
  Ht = r => `Erhalten am ${r.date}`,
  Zt = r => `Conseguido el ${r.date}`,
  Vt = r => `Obtenue le ${r.date}`,
  Kt = r => `Ottenuto il ${r.date}`,
  Wt = r => `${r.date} に獲得`,
  Qt = r => `Zdobyto ${r.date}`,
  Jt = r => `Получена ${r.date}`,
  Yt = r => `Отримано ${r.date}`,
  Xt = r => `Đạt được ${r.date}`,
  Wb = (r, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? It(r) : e === "pt" ? Nt(r) : e === "ch" ? Ot(r) : e === "de" ? Ht(r) : e === "es" ? Zt(r) : e === "fr" ? Vt(r) : e === "it" ? Kt(r) : e === "jp" ? Wt(r) : e === "pl" ? Qt(r) : e === "ru" ? Jt(r) : e === "uk" ? Yt(r) : Xt(r)
  },
  e_ = () => "Common",
  r_ = () => "Comum",
  n_ = () => "常见",
  a_ = () => "Gewöhnlich",
  t_ = () => "Común",
  __ = () => "Commun",
  i_ = () => "Comune",
  l_ = () => "コモン",
  c_ = () => "Zwykły",
  s_ = () => "Обычная",
  u_ = () => "Звичайна",
  o_ = () => "Phổ biến",
  d_ = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? e_() : e === "pt" ? r_() : e === "ch" ? n_() : e === "de" ? a_() : e === "es" ? t_() : e === "fr" ? __() : e === "it" ? i_() : e === "jp" ? l_() : e === "pl" ? c_() : e === "ru" ? s_() : e === "uk" ? u_() : o_()
  },
  m_ = () => "Uncommon",
  f_ = () => "Incomum",
  p_ = () => "少见",
  w_ = () => "Ungewöhnlich",
  b_ = () => "Poco común",
  g_ = () => "Peu commun",
  y_ = () => "Non comune",
  h_ = () => "アンコモン",
  q_ = () => "Niezwykły",
  v_ = () => "Необычная",
  k_ = () => "Незвичайна",
  j_ = () => "Ít gặp",
  x_ = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? m_() : e === "pt" ? f_() : e === "ch" ? p_() : e === "de" ? w_() : e === "es" ? b_() : e === "fr" ? g_() : e === "it" ? y_() : e === "jp" ? h_() : e === "pl" ? q_() : e === "ru" ? v_() : e === "uk" ? k_() : j_()
  },
  z_ = () => "Rare",
  C_ = () => "Raro",
  P_ = () => "罕见",
  A_ = () => "Selten",
  T_ = () => "Raro",
  U_ = () => "Rare",
  M_ = () => "Raro",
  R_ = () => "レア",
  S_ = () => "Rzadki",
  $_ = () => "Редкая",
  D_ = () => "Рідкісна",
  L_ = () => "Hiếm",
  F_ = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? z_() : e === "pt" ? C_() : e === "ch" ? P_() : e === "de" ? A_() : e === "es" ? T_() : e === "fr" ? U_() : e === "it" ? M_() : e === "jp" ? R_() : e === "pl" ? S_() : e === "ru" ? $_() : e === "uk" ? D_() : L_()
  },
  B_ = () => "Epic",
  G_ = () => "Épico",
  E_ = () => "史诗",
  I_ = () => "Episch",
  N_ = () => "Épico",
  O_ = () => "Épique",
  H_ = () => "Epico",
  Z_ = () => "エピック",
  V_ = () => "Epicki",
  K_ = () => "Эпическая",
  W_ = () => "Епічна",
  Q_ = () => "Tuyệt vời",
  J_ = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? B_() : e === "pt" ? G_() : e === "ch" ? E_() : e === "de" ? I_() : e === "es" ? N_() : e === "fr" ? O_() : e === "it" ? H_() : e === "jp" ? Z_() : e === "pl" ? V_() : e === "ru" ? K_() : e === "uk" ? W_() : Q_()
  },
  Y_ = () => "Legendary",
  X_ = () => "Lendário",
  ei = () => "传奇",
  ri = () => "Legendär",
  ni = () => "Legendario",
  ai = () => "Légendaire",
  ti = () => "Leggendario",
  _i = () => "レジェンダリー",
  ii = () => "Legendarny",
  li = () => "Легендарная",
  ci = () => "Легендарна",
  si = () => "Huyền thoại",
  ui = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Y_() : e === "pt" ? X_() : e === "ch" ? ei() : e === "de" ? ri() : e === "es" ? ni() : e === "fr" ? ai() : e === "it" ? ti() : e === "jp" ? _i() : e === "pl" ? ii() : e === "ru" ? li() : e === "uk" ? ci() : si()
  },
  oi = () => "Mythic",
  di = () => "Mítico",
  mi = () => "神话",
  fi = () => "Mythisch",
  pi = () => "Mítico",
  wi = () => "Mythique",
  bi = () => "Mitico",
  gi = () => "ミシック",
  yi = () => "Mityczny",
  hi = () => "Мифическая",
  qi = () => "Міфічна",
  vi = () => "Thần thoại",
  ki = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? oi() : e === "pt" ? di() : e === "ch" ? mi() : e === "de" ? fi() : e === "es" ? pi() : e === "fr" ? wi() : e === "it" ? bi() : e === "jp" ? gi() : e === "pl" ? yi() : e === "ru" ? hi() : e === "uk" ? qi() : vi()
  },
  ji = r => `Next: ${r.tier}`,
  xi = r => `Próximo: ${r.tier}`,
  zi = r => `下一级：${r.tier}`,
  Ci = r => `Nächste: ${r.tier}`,
  Pi = r => `Siguiente: ${r.tier}`,
  Ai = r => `Suivant : ${r.tier}`,
  Ti = r => `Prossimo: ${r.tier}`,
  Ui = r => `次: ${r.tier}`,
  Mi = r => `Następny: ${r.tier}`,
  Ri = r => `Далее: ${r.tier}`,
  Si = r => `Далі: ${r.tier}`,
  $i = r => `Tiếp theo: ${r.tier}`,
  Qb = (r, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? ji(r) : e === "pt" ? xi(r) : e === "ch" ? zi(r) : e === "de" ? Ci(r) : e === "es" ? Pi(r) : e === "fr" ? Ai(r) : e === "it" ? Ti(r) : e === "jp" ? Ui(r) : e === "pl" ? Mi(r) : e === "ru" ? Ri(r) : e === "uk" ? Si(r) : $i(r)
  },
  Di = () => "First Gathering",
  Li = () => "Primeiro encontro",
  Fi = () => "初次集结",
  Bi = () => "Erste Zusammenkunft",
  Gi = () => "Primer encuentro",
  Ei = () => "Premier rassemblement",
  Ii = () => "Primo raduno",
  Ni = () => "初めての集い",
  Oi = () => "Pierwsze zgromadzenie",
  Hi = () => "Первый сбор",
  Zi = () => "Перший збір",
  Vi = () => "Cuộc hội ngộ đầu tiên",
  M = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Di() : e === "pt" ? Li() : e === "ch" ? Fi() : e === "de" ? Bi() : e === "es" ? Gi() : e === "fr" ? Ei() : e === "it" ? Ii() : e === "jp" ? Ni() : e === "pl" ? Oi() : e === "ru" ? Hi() : e === "uk" ? Zi() : Vi()
  },
  Ki = () => "Reach 5 eligible members",
  Wi = () => "Alcance 5 membros elegíveis",
  Qi = () => "达到 5 名符合条件的成员",
  Ji = () => "Erreiche 5 berechtigte Mitglieder",
  Yi = () => "Alcanza 5 miembros elegibles",
  Xi = () => "Atteignez 5 membres éligibles",
  el = () => "Raggiungi 5 membri idonei",
  rl = () => "対象メンバー5人に到達する",
  nl = () => "Osiągnij 5 uprawnionych członków",
  al = () => "Наберите 5 подходящих участников",
  tl = () => "Досягніть 5 учасників, які відповідають вимогам",
  _l = () => "Đạt 5 thành viên hợp lệ",
  R = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Ki() : e === "pt" ? Wi() : e === "ch" ? Qi() : e === "de" ? Ji() : e === "es" ? Yi() : e === "fr" ? Xi() : e === "it" ? el() : e === "jp" ? rl() : e === "pl" ? nl() : e === "ru" ? al() : e === "uk" ? tl() : _l()
  },
  il = () => "Growing Community",
  ll = () => "Comunidade em crescimento",
  cl = () => "成长中的社区",
  sl = () => "Wachsende Community",
  ul = () => "Comunidad en crecimiento",
  ol = () => "Communauté grandissante",
  dl = () => "Comunità in crescita",
  ml = () => "成長するコミュニティ",
  fl = () => "Rosnąca społeczność",
  pl = () => "Растущее сообщество",
  wl = () => "Спільнота зростає",
  bl = () => "Cộng đồng lớn mạnh",
  b = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? il() : e === "pt" ? ll() : e === "ch" ? cl() : e === "de" ? sl() : e === "es" ? ul() : e === "fr" ? ol() : e === "it" ? dl() : e === "jp" ? ml() : e === "pl" ? fl() : e === "ru" ? pl() : e === "uk" ? wl() : bl()
  },
  gl = () => "Reach 25 eligible members",
  yl = () => "Alcance 25 membros elegíveis",
  hl = () => "达到 25 名符合条件的成员",
  ql = () => "Erreiche 25 berechtigte Mitglieder",
  vl = () => "Alcanza 25 miembros elegibles",
  kl = () => "Atteignez 25 membres éligibles",
  jl = () => "Raggiungi 25 membri idonei",
  xl = () => "対象メンバー25人に到達する",
  zl = () => "Osiągnij 25 uprawnionych członków",
  Cl = () => "Наберите 25 подходящих участников",
  Pl = () => "Досягніть 25 учасників, які відповідають вимогам",
  Al = () => "Đạt 25 thành viên hợp lệ",
  S = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? gl() : e === "pt" ? yl() : e === "ch" ? hl() : e === "de" ? ql() : e === "es" ? vl() : e === "fr" ? kl() : e === "it" ? jl() : e === "jp" ? xl() : e === "pl" ? zl() : e === "ru" ? Cl() : e === "uk" ? Pl() : Al()
  },
  Tl = () => "United Force",
  Ul = () => "Força unida",
  Ml = () => "团结之力",
  Rl = () => "Vereinte Kraft",
  Sl = () => "Fuerza unida",
  $l = () => "Force unie",
  Dl = () => "Forza unita",
  Ll = () => "団結せし力",
  Fl = () => "Zjednoczona siła",
  Bl = () => "Объединённая сила",
  Gl = () => "Об'єднана сила",
  El = () => "Sức mạnh đoàn kết",
  $ = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Tl() : e === "pt" ? Ul() : e === "ch" ? Ml() : e === "de" ? Rl() : e === "es" ? Sl() : e === "fr" ? $l() : e === "it" ? Dl() : e === "jp" ? Ll() : e === "pl" ? Fl() : e === "ru" ? Bl() : e === "uk" ? Gl() : El()
  },
  Il = () => "Reach 50 eligible members",
  Nl = () => "Alcance 50 membros elegíveis",
  Ol = () => "达到 50 名符合条件的成员",
  Hl = () => "Erreiche 50 berechtigte Mitglieder",
  Zl = () => "Alcanza 50 miembros elegibles",
  Vl = () => "Atteignez 50 membres éligibles",
  Kl = () => "Raggiungi 50 membri idonei",
  Wl = () => "対象メンバー50人に到達する",
  Ql = () => "Osiągnij 50 uprawnionych członków",
  Jl = () => "Наберите 50 подходящих участников",
  Yl = () => "Досягніть 50 учасників, які відповідають вимогам",
  Xl = () => "Đạt 50 thành viên hợp lệ",
  D = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Il() : e === "pt" ? Nl() : e === "ch" ? Ol() : e === "de" ? Hl() : e === "es" ? Zl() : e === "fr" ? Vl() : e === "it" ? Kl() : e === "jp" ? Wl() : e === "pl" ? Ql() : e === "ru" ? Jl() : e === "uk" ? Yl() : Xl()
  },
  ec = () => "Full House",
  rc = () => "Casa cheia",
  nc = () => "座无虚席",
  ac = () => "Volles Haus",
  tc = () => "Casa llena",
  _c = () => "Salle comble",
  ic = () => "Al completo",
  lc = () => "満員御礼",
  cc = () => "Komplet",
  sc = () => "Полный состав",
  uc = () => "Повний склад",
  oc = () => "Kín chỗ",
  L = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? ec() : e === "pt" ? rc() : e === "ch" ? nc() : e === "de" ? ac() : e === "es" ? tc() : e === "fr" ? _c() : e === "it" ? ic() : e === "jp" ? lc() : e === "pl" ? cc() : e === "ru" ? sc() : e === "uk" ? uc() : oc()
  },
  dc = () => "Reach 100 eligible members",
  mc = () => "Alcance 100 membros elegíveis",
  fc = () => "达到 100 名符合条件的成员",
  pc = () => "Erreiche 100 berechtigte Mitglieder",
  wc = () => "Alcanza 100 miembros elegibles",
  bc = () => "Atteignez 100 membres éligibles",
  gc = () => "Raggiungi 100 membri idonei",
  yc = () => "対象メンバー100人に到達する",
  hc = () => "Osiągnij 100 uprawnionych członków",
  qc = () => "Наберите 100 подходящих участников",
  vc = () => "Досягніть 100 учасників, які відповідають вимогам",
  kc = () => "Đạt 100 thành viên hợp lệ",
  F = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? dc() : e === "pt" ? mc() : e === "ch" ? fc() : e === "de" ? pc() : e === "es" ? wc() : e === "fr" ? bc() : e === "it" ? gc() : e === "jp" ? yc() : e === "pl" ? hc() : e === "ru" ? qc() : e === "uk" ? vc() : kc()
  },
  jc = () => "Grand Coalition",
  xc = () => "Grande coalizão",
  zc = () => "宏大同盟",
  Cc = () => "Große Koalition",
  Pc = () => "Gran coalición",
  Ac = () => "Grande coalition",
  Tc = () => "Grande coalizione",
  Uc = () => "大連合",
  Mc = () => "Wielka koalicja",
  Rc = () => "Великая коалиция",
  Sc = () => "Велика коаліція",
  $c = () => "Đại liên minh",
  B = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? jc() : e === "pt" ? xc() : e === "ch" ? zc() : e === "de" ? Cc() : e === "es" ? Pc() : e === "fr" ? Ac() : e === "it" ? Tc() : e === "jp" ? Uc() : e === "pl" ? Mc() : e === "ru" ? Rc() : e === "uk" ? Sc() : $c()
  },
  Dc = () => "Reach 500 eligible members",
  Lc = () => "Alcance 500 membros elegíveis",
  Fc = () => "达到 500 名符合条件的成员",
  Bc = () => "Erreiche 500 berechtigte Mitglieder",
  Gc = () => "Alcanza 500 miembros elegibles",
  Ec = () => "Atteignez 500 membres éligibles",
  Ic = () => "Raggiungi 500 membri idonei",
  Nc = () => "対象メンバー500人に到達する",
  Oc = () => "Osiągnij 500 uprawnionych członków",
  Hc = () => "Наберите 500 подходящих участников",
  Zc = () => "Досягніть 500 учасників, які відповідають вимогам",
  Vc = () => "Đạt 500 thành viên hợp lệ",
  G = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Dc() : e === "pt" ? Lc() : e === "ch" ? Fc() : e === "de" ? Bc() : e === "es" ? Gc() : e === "fr" ? Ec() : e === "it" ? Ic() : e === "jp" ? Nc() : e === "pl" ? Oc() : e === "ru" ? Hc() : e === "uk" ? Zc() : Vc()
  },
  Kc = () => "Thousand Strong",
  Wc = () => "Mil fortes",
  Qc = () => "千人之众",
  Jc = () => "Tausend stark",
  Yc = () => "Mil fuertes",
  Xc = () => "Force de mille",
  es = () => "In mille",
  rs = () => "千人の軍勢",
  ns = () => "Tysiąc w szeregach",
  as = () => "Тысячная армия",
  ts = () => "Тисяча сильних",
  _s = () => "Ngàn người một lòng",
  E = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Kc() : e === "pt" ? Wc() : e === "ch" ? Qc() : e === "de" ? Jc() : e === "es" ? Yc() : e === "fr" ? Xc() : e === "it" ? es() : e === "jp" ? rs() : e === "pl" ? ns() : e === "ru" ? as() : e === "uk" ? ts() : _s()
  },
  is = () => "Reach 1,000 eligible members",
  ls = () => "Alcance 1.000 membros elegíveis",
  cs = () => "达到 1,000 名符合条件的成员",
  ss = () => "Erreiche 1.000 berechtigte Mitglieder",
  us = () => "Alcanza 1.000 miembros elegibles",
  os = () => "Atteignez 1 000 membres éligibles",
  ds = () => "Raggiungi 1.000 membri idonei",
  ms = () => "対象メンバー1,000人に到達する",
  fs = () => "Osiągnij 1000 uprawnionych członków",
  ps = () => "Наберите 1 000 подходящих участников",
  ws = () => "Досягніть 1 000 учасників, які відповідають вимогам",
  bs = () => "Đạt 1.000 thành viên hợp lệ",
  I = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? is() : e === "pt" ? ls() : e === "ch" ? cs() : e === "de" ? ss() : e === "es" ? us() : e === "fr" ? os() : e === "it" ? ds() : e === "jp" ? ms() : e === "pl" ? fs() : e === "ru" ? ps() : e === "uk" ? ws() : bs()
  },
  gs = () => "Small Beginnings",
  ys = () => "Pequenos começos",
  hs = () => "小小开端",
  qs = () => "Kleine Anfänge",
  vs = () => "Pequeños comienzos",
  ks = () => "Petits débuts",
  js = () => "Piccoli inizi",
  xs = () => "小さな一歩",
  zs = () => "Skromne początki",
  Cs = () => "Скромное начало",
  Ps = () => "Скромний початок",
  As = () => "Khởi đầu nhỏ bé",
  N = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? gs() : e === "pt" ? ys() : e === "ch" ? hs() : e === "de" ? qs() : e === "es" ? vs() : e === "fr" ? ks() : e === "it" ? js() : e === "jp" ? xs() : e === "pl" ? zs() : e === "ru" ? Cs() : e === "uk" ? Ps() : As()
  },
  Ts = () => "Place 100 alliance pixels",
  Us = () => "Coloque 100 pixels pela aliança",
  Ms = () => "为联盟放置 100 个像素",
  Rs = () => "Male 100 Pixel für die Allianz",
  Ss = () => "Coloca 100 píxeles para la alianza",
  $s = () => "Placez 100 pixels pour l'alliance",
  Ds = () => "Piazza 100 pixel per l'alleanza",
  Ls = () => "アライアンスとして100ピクセルを塗る",
  Fs = () => "Pomaluj 100 pikseli dla sojuszu",
  Bs = () => "Нарисуйте 100 пикселей за альянс",
  Gs = () => "Поставте 100 пікселів за альянс",
  Es = () => "Đặt 100 pixel cho liên minh",
  O = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Ts() : e === "pt" ? Us() : e === "ch" ? Ms() : e === "de" ? Rs() : e === "es" ? Ss() : e === "fr" ? $s() : e === "it" ? Ds() : e === "jp" ? Ls() : e === "pl" ? Fs() : e === "ru" ? Bs() : e === "uk" ? Gs() : Es()
  },
  Is = () => "Making a Mark",
  Ns = () => "Deixando a marca",
  Os = () => "初露锋芒",
  Hs = () => "Spuren hinterlassen",
  Zs = () => "Dejando huella",
  Vs = () => "Laisser sa marque",
  Ks = () => "Lasciare il segno",
  Ws = () => "爪痕を残す",
  Qs = () => "Widoczny ślad",
  Js = () => "Оставить свой след",
  Ys = () => "Залишити слід",
  Xs = () => "Ghi dấu ấn",
  H = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Is() : e === "pt" ? Ns() : e === "ch" ? Os() : e === "de" ? Hs() : e === "es" ? Zs() : e === "fr" ? Vs() : e === "it" ? Ks() : e === "jp" ? Ws() : e === "pl" ? Qs() : e === "ru" ? Js() : e === "uk" ? Ys() : Xs()
  },
  eu = () => "Place 1,000 alliance pixels",
  ru = () => "Coloque 1.000 pixels pela aliança",
  nu = () => "为联盟放置 1,000 个像素",
  au = () => "Male 1.000 Pixel für die Allianz",
  tu = () => "Coloca 1.000 píxeles para la alianza",
  _u = () => "Placez 1 000 pixels pour l'alliance",
  iu = () => "Piazza 1.000 pixel per l'alleanza",
  lu = () => "アライアンスとして1,000ピクセルを塗る",
  cu = () => "Pomaluj 1000 pikseli dla sojuszu",
  su = () => "Нарисуйте 1 000 пикселей за альянс",
  uu = () => "Поставте 1 000 пікселів за альянс",
  ou = () => "Đặt 1.000 pixel cho liên minh",
  Z = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? eu() : e === "pt" ? ru() : e === "ch" ? nu() : e === "de" ? au() : e === "es" ? tu() : e === "fr" ? _u() : e === "it" ? iu() : e === "jp" ? lu() : e === "pl" ? cu() : e === "ru" ? su() : e === "uk" ? uu() : ou()
  },
  du = () => "Pixel Powerhouse",
  mu = () => "Potência de pixels",
  fu = () => "像素强者",
  pu = () => "Pixel-Kraftwerk",
  wu = () => "Potencia de píxeles",
  bu = () => "Puissance du pixel",
  gu = () => "Potenza di pixel",
  yu = () => "ピクセルの強豪",
  hu = () => "Potęga pikseli",
  qu = () => "Пиксельная мощь",
  vu = () => "Піксельна потуга",
  ku = () => "Cường quốc pixel",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? du() : e === "pt" ? mu() : e === "ch" ? fu() : e === "de" ? pu() : e === "es" ? wu() : e === "fr" ? bu() : e === "it" ? gu() : e === "jp" ? yu() : e === "pl" ? hu() : e === "ru" ? qu() : e === "uk" ? vu() : ku()
  },
  ju = () => "Place 10,000 alliance pixels",
  xu = () => "Coloque 10.000 pixels pela aliança",
  zu = () => "为联盟放置 10,000 个像素",
  Cu = () => "Male 10.000 Pixel für die Allianz",
  Pu = () => "Coloca 10.000 píxeles para la alianza",
  Au = () => "Placez 10 000 pixels pour l'alliance",
  Tu = () => "Piazza 10.000 pixel per l'alleanza",
  Uu = () => "アライアンスとして10,000ピクセルを塗る",
  Mu = () => "Pomaluj 10 000 pikseli dla sojuszu",
  Ru = () => "Нарисуйте 10 000 пикселей за альянс",
  Su = () => "Поставте 10 000 пікселів за альянс",
  $u = () => "Đặt 10.000 pixel cho liên minh",
  V = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? ju() : e === "pt" ? xu() : e === "ch" ? zu() : e === "de" ? Cu() : e === "es" ? Pu() : e === "fr" ? Au() : e === "it" ? Tu() : e === "jp" ? Uu() : e === "pl" ? Mu() : e === "ru" ? Ru() : e === "uk" ? Su() : $u()
  },
  Du = () => "Canvas Giant",
  Lu = () => "Gigante da tela",
  Fu = () => "画布巨人",
  Bu = () => "Canvas-Riese",
  Gu = () => "Gigante del lienzo",
  Eu = () => "Géant du canvas",
  Iu = () => "Gigante della tela",
  Nu = () => "キャンバスの巨人",
  Ou = () => "Gigant płótna",
  Hu = () => "Гигант холста",
  Zu = () => "Гігант полотна",
  Vu = () => "Khổng lồ bảng vẽ",
  K = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Du() : e === "pt" ? Lu() : e === "ch" ? Fu() : e === "de" ? Bu() : e === "es" ? Gu() : e === "fr" ? Eu() : e === "it" ? Iu() : e === "jp" ? Nu() : e === "pl" ? Ou() : e === "ru" ? Hu() : e === "uk" ? Zu() : Vu()
  },
  Ku = () => "Place 100,000 alliance pixels",
  Wu = () => "Coloque 100.000 pixels pela aliança",
  Qu = () => "为联盟放置 100,000 个像素",
  Ju = () => "Male 100.000 Pixel für die Allianz",
  Yu = () => "Coloca 100.000 píxeles para la alianza",
  Xu = () => "Placez 100 000 pixels pour l'alliance",
  eo = () => "Piazza 100.000 pixel per l'alleanza",
  ro = () => "アライアンスとして100,000ピクセルを塗る",
  no = () => "Pomaluj 100 000 pikseli dla sojuszu",
  ao = () => "Нарисуйте 100 000 пикселей за альянс",
  to = () => "Поставте 100 000 пікселів за альянс",
  _o = () => "Đặt 100.000 pixel cho liên minh",
  W = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Ku() : e === "pt" ? Wu() : e === "ch" ? Qu() : e === "de" ? Ju() : e === "es" ? Yu() : e === "fr" ? Xu() : e === "it" ? eo() : e === "jp" ? ro() : e === "pl" ? no() : e === "ru" ? ao() : e === "uk" ? to() : _o()
  },
  io = () => "Canvas Titan",
  lo = () => "Tita da tela",
  co = () => "画布泰坦",
  so = () => "Canvas-Titan",
  uo = () => "Titán del lienzo",
  oo = () => "Titan du canvas",
  mo = () => "Titano della tela",
  fo = () => "キャンバスの巨神",
  po = () => "Tytan płótna",
  wo = () => "Титан холста",
  bo = () => "Титан полотна",
  go = () => "Titan bảng vẽ",
  Q = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? io() : e === "pt" ? lo() : e === "ch" ? co() : e === "de" ? so() : e === "es" ? uo() : e === "fr" ? oo() : e === "it" ? mo() : e === "jp" ? fo() : e === "pl" ? po() : e === "ru" ? wo() : e === "uk" ? bo() : go()
  },
  yo = () => "Place 1,000,000 alliance pixels",
  ho = () => "Coloque 1.000.000 pixels pela aliança",
  qo = () => "为联盟放置 1,000,000 个像素",
  vo = () => "Male 1.000.000 Pixel für die Allianz",
  ko = () => "Coloca 1.000.000 de píxeles para la alianza",
  jo = () => "Placez 1 000 000 pixels pour l'alliance",
  xo = () => "Piazza 1.000.000 pixel per l'alleanza",
  zo = () => "アライアンスとして1,000,000ピクセルを塗る",
  Co = () => "Pomaluj 1 000 000 pikseli dla sojuszu",
  Po = () => "Нарисуйте 1 000 000 пикселей за альянс",
  Ao = () => "Поставте 1 000 000 пікселів за альянс",
  To = () => "Đặt 1.000.000 pixel cho liên minh",
  J = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? yo() : e === "pt" ? ho() : e === "ch" ? qo() : e === "de" ? vo() : e === "es" ? ko() : e === "fr" ? jo() : e === "it" ? xo() : e === "jp" ? zo() : e === "pl" ? Co() : e === "ru" ? Po() : e === "uk" ? Ao() : To()
  },
  Uo = () => "Canvas God",
  Mo = () => "Deus da tela",
  Ro = () => "画布之神",
  So = () => "Canvas-Gott",
  $o = () => "Dios del lienzo",
  Do = () => "Dieu du canvas",
  Lo = () => "Dio della tela",
  Fo = () => "キャンバスの神",
  Bo = () => "Bóg płótna",
  Go = () => "Бог холста",
  Eo = () => "Бог полотна",
  Io = () => "Thần bảng vẽ",
  Y = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Uo() : e === "pt" ? Mo() : e === "ch" ? Ro() : e === "de" ? So() : e === "es" ? $o() : e === "fr" ? Do() : e === "it" ? Lo() : e === "jp" ? Fo() : e === "pl" ? Bo() : e === "ru" ? Go() : e === "uk" ? Eo() : Io()
  },
  No = () => "Place 10,000,000 alliance pixels",
  Oo = () => "Coloque 10.000.000 pixels pela aliança",
  Ho = () => "为联盟放置 10,000,000 个像素",
  Zo = () => "Male 10.000.000 Pixel für die Allianz",
  Vo = () => "Coloca 10.000.000 de píxeles para la alianza",
  Ko = () => "Placez 10 000 000 pixels pour l'alliance",
  Wo = () => "Piazza 10.000.000 pixel per l'alleanza",
  Qo = () => "アライアンスとして10,000,000ピクセルを塗る",
  Jo = () => "Pomaluj 10 000 000 pikseli dla sojuszu",
  Yo = () => "Нарисуйте 10 000 000 пикселей за альянс",
  Xo = () => "Поставте 10 000 000 пікселів за альянс",
  e0 = () => "Đặt 10.000.000 pixel cho liên minh",
  X = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? No() : e === "pt" ? Oo() : e === "ch" ? Ho() : e === "de" ? Zo() : e === "es" ? Vo() : e === "fr" ? Ko() : e === "it" ? Wo() : e === "jp" ? Qo() : e === "pl" ? Jo() : e === "ru" ? Yo() : e === "uk" ? Xo() : e0()
  },
  r0 = () => "Dedicated Artists",
  n0 = () => "Artistas dedicados",
  a0 = () => "专注的画师",
  t0 = () => "Engagierte Künstler",
  _0 = () => "Artistas dedicados",
  i0 = () => "Artistes dévoués",
  l0 = () => "Artisti dedicati",
  c0 = () => "熱心なアーティストたち",
  s0 = () => "Oddani artyści",
  u0 = () => "Преданные художники",
  o0 = () => "Віддані художники",
  d0 = () => "Những nghệ sĩ tận tụy",
  y = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? r0() : e === "pt" ? n0() : e === "ch" ? a0() : e === "de" ? t0() : e === "es" ? _0() : e === "fr" ? i0() : e === "it" ? l0() : e === "jp" ? c0() : e === "pl" ? s0() : e === "ru" ? u0() : e === "uk" ? o0() : d0()
  },
  m0 = () => "Have 10 members each place 10,000 alliance pixels",
  f0 = () => "Tenha 10 membros que coloquem 10.000 pixels pela aliança cada",
  p0 = () => "让 10 名成员各为联盟放置 10,000 个像素",
  w0 = () => "Lass 10 Mitglieder je 10.000 Pixel für die Allianz malen",
  b0 = () => "Consigue que 10 miembros coloquen 10.000 píxeles para la alianza cada uno",
  g0 = () => "Ayez 10 membres qui placent chacun 10 000 pixels pour l'alliance",
  y0 = () => "Fai in modo che 10 membri piazzino 10.000 pixel per l'alleanza ciascuno",
  h0 = () => "10人のメンバーがそれぞれアライアンスとして10,000ピクセルを塗る",
  q0 = () => "Spraw, aby 10 członków pomalowało po 10 000 pikseli dla sojuszu",
  v0 = () => "10 участников должны нарисовать по 10 000 пикселей за альянс",
  k0 = () => "Зберіть 10 учасників, кожен з яких поставить 10 000 пікселів за альянс",
  j0 = () => "Có 10 thành viên, mỗi người đặt 10.000 pixel cho liên minh",
  ee = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? m0() : e === "pt" ? f0() : e === "ch" ? p0() : e === "de" ? w0() : e === "es" ? b0() : e === "fr" ? g0() : e === "it" ? y0() : e === "jp" ? h0() : e === "pl" ? q0() : e === "ru" ? v0() : e === "uk" ? k0() : j0()
  },
  x0 = () => "Veteran Alliance",
  z0 = () => "Aliança veterana",
  C0 = () => "老牌联盟",
  P0 = () => "Veteranen-Allianz",
  A0 = () => "Alianza veterana",
  T0 = () => "Alliance vétérane",
  U0 = () => "Alleanza veterana",
  M0 = () => "ベテランアライアンス",
  R0 = () => "Sojusz weteranów",
  S0 = () => "Альянс-ветеран",
  $0 = () => "Альянс-ветеран",
  D0 = () => "Liên minh kỳ cựu",
  h = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? x0() : e === "pt" ? z0() : e === "ch" ? C0() : e === "de" ? P0() : e === "es" ? A0() : e === "fr" ? T0() : e === "it" ? U0() : e === "jp" ? M0() : e === "pl" ? R0() : e === "ru" ? S0() : e === "uk" ? $0() : D0()
  },
  L0 = () => "Remain active for 30 consecutive days",
  F0 = () => "Permaneça ativa por 30 dias consecutivos",
  B0 = () => "连续 30 天保持活跃",
  G0 = () => "Bleibe 30 Tage in Folge aktiv",
  E0 = () => "Permanece activa durante 30 días consecutivos",
  I0 = () => "Restez active pendant 30 jours consécutifs",
  N0 = () => "Resta attiva per 30 giorni consecutivi",
  O0 = () => "30日連続で活動を続ける",
  H0 = () => "Pozostań aktywny przez 30 kolejnych dni",
  Z0 = () => "Оставайтесь активными 30 дней подряд",
  V0 = () => "Залишайтеся активними 30 днів поспіль",
  K0 = () => "Duy trì hoạt động 30 ngày liên tiếp",
  re = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? L0() : e === "pt" ? F0() : e === "ch" ? B0() : e === "de" ? G0() : e === "es" ? E0() : e === "fr" ? I0() : e === "it" ? N0() : e === "jp" ? O0() : e === "pl" ? H0() : e === "ru" ? Z0() : e === "uk" ? V0() : K0()
  },
  W0 = () => "Seasoned Alliance",
  Q0 = () => "Aliança experiente",
  J0 = () => "资深联盟",
  Y0 = () => "Erfahrene Allianz",
  X0 = () => "Alianza experimentada",
  ed = () => "Alliance aguerrie",
  rd = () => "Alleanza esperta",
  nd = () => "熟練のアライアンス",
  ad = () => "Doświadczony sojusz",
  td = () => "Опытный альянс",
  _d = () => "Досвідчений альянс",
  id = () => "Liên minh dày dạn",
  ne = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? W0() : e === "pt" ? Q0() : e === "ch" ? J0() : e === "de" ? Y0() : e === "es" ? X0() : e === "fr" ? ed() : e === "it" ? rd() : e === "jp" ? nd() : e === "pl" ? ad() : e === "ru" ? td() : e === "uk" ? _d() : id()
  },
  ld = () => "Remain active for 60 consecutive days",
  cd = () => "Permaneça ativa por 60 dias consecutivos",
  sd = () => "连续 60 天保持活跃",
  ud = () => "Bleibe 60 Tage in Folge aktiv",
  od = () => "Permanece activa durante 60 días consecutivos",
  dd = () => "Restez active pendant 60 jours consécutifs",
  md = () => "Resta attiva per 60 giorni consecutivi",
  fd = () => "60日連続で活動を続ける",
  pd = () => "Pozostań aktywny przez 60 kolejnych dni",
  wd = () => "Оставайтесь активными 60 дней подряд",
  bd = () => "Залишайтеся активними 60 днів поспіль",
  gd = () => "Duy trì hoạt động 60 ngày liên tiếp",
  ae = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? ld() : e === "pt" ? cd() : e === "ch" ? sd() : e === "de" ? ud() : e === "es" ? od() : e === "fr" ? dd() : e === "it" ? md() : e === "jp" ? fd() : e === "pl" ? pd() : e === "ru" ? wd() : e === "uk" ? bd() : gd()
  },
  yd = () => "Enduring Alliance",
  hd = () => "Aliança duradoura",
  qd = () => "长青联盟",
  vd = () => "Beständige Allianz",
  kd = () => "Alianza duradera",
  jd = () => "Alliance durable",
  xd = () => "Alleanza duratura",
  zd = () => "不屈のアライアンス",
  Cd = () => "Wytrwały sojusz",
  Pd = () => "Стойкий альянс",
  Ad = () => "Витривалий альянс",
  Td = () => "Liên minh bền bỉ",
  te = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? yd() : e === "pt" ? hd() : e === "ch" ? qd() : e === "de" ? vd() : e === "es" ? kd() : e === "fr" ? jd() : e === "it" ? xd() : e === "jp" ? zd() : e === "pl" ? Cd() : e === "ru" ? Pd() : e === "uk" ? Ad() : Td()
  },
  Ud = () => "Remain active for 90 consecutive days",
  Md = () => "Permaneça ativa por 90 dias consecutivos",
  Rd = () => "连续 90 天保持活跃",
  Sd = () => "Bleibe 90 Tage in Folge aktiv",
  $d = () => "Permanece activa durante 90 días consecutivos",
  Dd = () => "Restez active pendant 90 jours consécutifs",
  Ld = () => "Resta attiva per 90 giorni consecutivi",
  Fd = () => "90日連続で活動を続ける",
  Bd = () => "Pozostań aktywny przez 90 kolejnych dni",
  Gd = () => "Оставайтесь активными 90 дней подряд",
  Ed = () => "Залишайтеся активними 90 днів поспіль",
  Id = () => "Duy trì hoạt động 90 ngày liên tiếp",
  _e = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Ud() : e === "pt" ? Md() : e === "ch" ? Rd() : e === "de" ? Sd() : e === "es" ? $d() : e === "fr" ? Dd() : e === "it" ? Ld() : e === "jp" ? Fd() : e === "pl" ? Bd() : e === "ru" ? Gd() : e === "uk" ? Ed() : Id()
  },
  Nd = () => "Ancient Order",
  Od = () => "Ordem antiga",
  Hd = () => "古老秩序",
  Zd = () => "Alter Orden",
  Vd = () => "Orden antigua",
  Kd = () => "Ordre ancien",
  Wd = () => "Ordine antico",
  Qd = () => "古の結社",
  Jd = () => "Starożytny zakon",
  Yd = () => "Древний орден",
  Xd = () => "Стародавній орден",
  em = () => "Hội cổ xưa",
  ie = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Nd() : e === "pt" ? Od() : e === "ch" ? Hd() : e === "de" ? Zd() : e === "es" ? Vd() : e === "fr" ? Kd() : e === "it" ? Wd() : e === "jp" ? Qd() : e === "pl" ? Jd() : e === "ru" ? Yd() : e === "uk" ? Xd() : em()
  },
  rm = () => "Remain active for 180 consecutive days",
  nm = () => "Permaneça ativa por 180 dias consecutivos",
  am = () => "连续 180 天保持活跃",
  tm = () => "Bleibe 180 Tage in Folge aktiv",
  _m = () => "Permanece activa durante 180 días consecutivos",
  im = () => "Restez active pendant 180 jours consécutifs",
  lm = () => "Resta attiva per 180 giorni consecutivi",
  cm = () => "180日連続で活動を続ける",
  sm = () => "Pozostań aktywny przez 180 kolejnych dni",
  um = () => "Оставайтесь активными 180 дней подряд",
  om = () => "Залишайтеся активними 180 днів поспіль",
  dm = () => "Duy trì hoạt động 180 ngày liên tiếp",
  le = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? rm() : e === "pt" ? nm() : e === "ch" ? am() : e === "de" ? tm() : e === "es" ? _m() : e === "fr" ? im() : e === "it" ? lm() : e === "jp" ? cm() : e === "pl" ? sm() : e === "ru" ? um() : e === "uk" ? om() : dm()
  },
  mm = () => "Primordial",
  fm = () => "Primordial",
  pm = () => "太古",
  wm = () => "Urgestein",
  bm = () => "Primordial",
  gm = () => "Primordiale",
  ym = () => "Primordiale",
  hm = () => "太古の存在",
  qm = () => "Pradawny",
  vm = () => "Первозданный",
  km = () => "Первозданний",
  jm = () => "Nguyên thủy",
  ce = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? mm() : e === "pt" ? fm() : e === "ch" ? pm() : e === "de" ? wm() : e === "es" ? bm() : e === "fr" ? gm() : e === "it" ? ym() : e === "jp" ? hm() : e === "pl" ? qm() : e === "ru" ? vm() : e === "uk" ? km() : jm()
  },
  xm = () => "Remain active for 365 consecutive days",
  zm = () => "Permaneça ativa por 365 dias consecutivos",
  Cm = () => "连续 365 天保持活跃",
  Pm = () => "Bleibe 365 Tage in Folge aktiv",
  Am = () => "Permanece activa durante 365 días consecutivos",
  Tm = () => "Restez active pendant 365 jours consécutifs",
  Um = () => "Resta attiva per 365 giorni consecutivi",
  Mm = () => "365日連続で活動を続ける",
  Rm = () => "Pozostań aktywny przez 365 kolejnych dni",
  Sm = () => "Оставайтесь активными 365 дней подряд",
  $m = () => "Залишайтеся активними 365 днів поспіль",
  Dm = () => "Duy trì hoạt động 365 ngày liên tiếp",
  se = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? xm() : e === "pt" ? zm() : e === "ch" ? Cm() : e === "de" ? Pm() : e === "es" ? Am() : e === "fr" ? Tm() : e === "it" ? Um() : e === "jp" ? Mm() : e === "pl" ? Rm() : e === "ru" ? Sm() : e === "uk" ? $m() : Dm()
  },
  Lm = () => "Active Community",
  Fm = () => "Comunidade ativa",
  Bm = () => "活跃社区",
  Gm = () => "Aktive Community",
  Em = () => "Comunidad activa",
  Im = () => "Communauté active",
  Nm = () => "Comunità attiva",
  Om = () => "活発なコミュニティ",
  Hm = () => "Aktywna społeczność",
  Zm = () => "Активное сообщество",
  Vm = () => "Активна спільнота",
  Km = () => "Cộng đồng năng động",
  q = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Lm() : e === "pt" ? Fm() : e === "ch" ? Bm() : e === "de" ? Gm() : e === "es" ? Em() : e === "fr" ? Im() : e === "it" ? Nm() : e === "jp" ? Om() : e === "pl" ? Hm() : e === "ru" ? Zm() : e === "uk" ? Vm() : Km()
  },
  Wm = () => "Have 10 members paint in one UTC day",
  Qm = () => "Tenha 10 membros pintando em um mesmo dia UTC",
  Jm = () => "在同一个 UTC 日内有 10 名成员绘制",
  Ym = () => "Lass 10 Mitglieder an einem UTC-Tag malen",
  Xm = () => "Consigue que 10 miembros pinten en un mismo día UTC",
  ef = () => "Ayez 10 membres qui peignent le même jour UTC",
  rf = () => "Fai dipingere 10 membri nello stesso giorno UTC",
  nf = () => "同じUTCの1日に10人のメンバーがペイントする",
  af = () => "Spraw, aby 10 członków malowało w ciągu jednego dnia UTC",
  tf = () => "10 участников должны рисовать за один день UTC",
  _f = () => "Зберіть 10 учасників, які малюватимуть за одну добу UTC",
  lf = () => "Có 10 thành viên cùng tô trong một ngày UTC",
  ue = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Wm() : e === "pt" ? Qm() : e === "ch" ? Jm() : e === "de" ? Ym() : e === "es" ? Xm() : e === "fr" ? ef() : e === "it" ? rf() : e === "jp" ? nf() : e === "pl" ? af() : e === "ru" ? tf() : e === "uk" ? _f() : lf()
  },
  cf = () => "All Hands on Deck",
  sf = () => "Todos a postos",
  uf = () => "全员出动",
  of = () => "Alle Mann an Deck",
  df = () => "Todos a sus puestos",
  mf = () => "Tous sur le pont",
  ff = () => "Tutti in azione",
  pf = () => "総動員",
  wf = () => "Wszyscy na pokład",
  bf = () => "Все по местам",
  gf = () => "Усі на палубу",
  yf = () => "Toàn lực ra quân",
  oe = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? cf() : e === "pt" ? sf() : e === "ch" ? uf() : e === "de" ? of() : e === "es" ? df() : e === "fr" ? mf() : e === "it" ? ff() : e === "jp" ? pf() : e === "pl" ? wf() : e === "ru" ? bf() : e === "uk" ? gf() : yf()
  },
  hf = () => "Have 25 members paint in one UTC day",
  qf = () => "Tenha 25 membros pintando em um mesmo dia UTC",
  vf = () => "在同一个 UTC 日内有 25 名成员绘制",
  kf = () => "Lass 25 Mitglieder an einem UTC-Tag malen",
  jf = () => "Consigue que 25 miembros pinten en un mismo día UTC",
  xf = () => "Ayez 25 membres qui peignent le même jour UTC",
  zf = () => "Fai dipingere 25 membri nello stesso giorno UTC",
  Cf = () => "同じUTCの1日に25人のメンバーがペイントする",
  Pf = () => "Spraw, aby 25 członków malowało w ciągu jednego dnia UTC",
  Af = () => "25 участников должны рисовать за один день UTC",
  Tf = () => "Зберіть 25 учасників, які малюватимуть за одну добу UTC",
  Uf = () => "Có 25 thành viên cùng tô trong một ngày UTC",
  de = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? hf() : e === "pt" ? qf() : e === "ch" ? vf() : e === "de" ? kf() : e === "es" ? jf() : e === "fr" ? xf() : e === "it" ? zf() : e === "jp" ? Cf() : e === "pl" ? Pf() : e === "ru" ? Af() : e === "uk" ? Tf() : Uf()
  },
  Mf = () => "Rallying Crowd",
  Rf = () => "Multidão reunida",
  Sf = () => "集结的人潮",
  $f = () => "Versammelte Menge",
  Df = () => "Multitud reunida",
  Lf = () => "Foule ralliée",
  Ff = () => "Folla in adunata",
  Bf = () => "集いし群衆",
  Gf = () => "Zgromadzony tłum",
  Ef = () => "Сплочённая толпа",
  If = () => "Згуртований натовп",
  Nf = () => "Đám đông tụ hội",
  me = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Mf() : e === "pt" ? Rf() : e === "ch" ? Sf() : e === "de" ? $f() : e === "es" ? Df() : e === "fr" ? Lf() : e === "it" ? Ff() : e === "jp" ? Bf() : e === "pl" ? Gf() : e === "ru" ? Ef() : e === "uk" ? If() : Nf()
  },
  Of = () => "Have 50 members paint in one UTC day",
  Hf = () => "Tenha 50 membros pintando em um mesmo dia UTC",
  Zf = () => "在同一个 UTC 日内有 50 名成员绘制",
  Vf = () => "Lass 50 Mitglieder an einem UTC-Tag malen",
  Kf = () => "Consigue que 50 miembros pinten en un mismo día UTC",
  Wf = () => "Ayez 50 membres qui peignent le même jour UTC",
  Qf = () => "Fai dipingere 50 membri nello stesso giorno UTC",
  Jf = () => "同じUTCの1日に50人のメンバーがペイントする",
  Yf = () => "Spraw, aby 50 członków malowało w ciągu jednego dnia UTC",
  Xf = () => "50 участников должны рисовать за один день UTC",
  ep = () => "Зберіть 50 учасників, які малюватимуть за одну добу UTC",
  rp = () => "Có 50 thành viên cùng tô trong một ngày UTC",
  fe = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Of() : e === "pt" ? Hf() : e === "ch" ? Zf() : e === "de" ? Vf() : e === "es" ? Kf() : e === "fr" ? Wf() : e === "it" ? Qf() : e === "jp" ? Jf() : e === "pl" ? Yf() : e === "ru" ? Xf() : e === "uk" ? ep() : rp()
  },
  np = () => "Alliance Mobilized",
  ap = () => "Aliança mobilizada",
  tp = () => "联盟总动员",
  _p = () => "Allianz mobilisiert",
  ip = () => "Alianza movilizada",
  lp = () => "Alliance mobilisée",
  cp = () => "Alleanza mobilitata",
  sp = () => "アライアンス総出撃",
  up = () => "Sojusz zmobilizowany",
  op = () => "Альянс мобилизован",
  dp = () => "Альянс мобілізовано",
  mp = () => "Liên minh tổng động viên",
  pe = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? np() : e === "pt" ? ap() : e === "ch" ? tp() : e === "de" ? _p() : e === "es" ? ip() : e === "fr" ? lp() : e === "it" ? cp() : e === "jp" ? sp() : e === "pl" ? up() : e === "ru" ? op() : e === "uk" ? dp() : mp()
  },
  fp = () => "Have 100 members paint in one UTC day",
  pp = () => "Tenha 100 membros pintando em um mesmo dia UTC",
  wp = () => "在同一个 UTC 日内有 100 名成员绘制",
  bp = () => "Lass 100 Mitglieder an einem UTC-Tag malen",
  gp = () => "Consigue que 100 miembros pinten en un mismo día UTC",
  yp = () => "Ayez 100 membres qui peignent le même jour UTC",
  hp = () => "Fai dipingere 100 membri nello stesso giorno UTC",
  qp = () => "同じUTCの1日に100人のメンバーがペイントする",
  vp = () => "Spraw, aby 100 członków malowało w ciągu jednego dnia UTC",
  kp = () => "100 участников должны рисовать за один день UTC",
  jp = () => "Зберіть 100 учасників, які малюватимуть за одну добу UTC",
  xp = () => "Có 100 thành viên cùng tô trong một ngày UTC",
  we = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? fp() : e === "pt" ? pp() : e === "ch" ? wp() : e === "de" ? bp() : e === "es" ? gp() : e === "fr" ? yp() : e === "it" ? hp() : e === "jp" ? qp() : e === "pl" ? vp() : e === "ru" ? kp() : e === "uk" ? jp() : xp()
  },
  zp = () => "Perfect Attendance",
  Cp = () => "Presença perfeita",
  Pp = () => "全勤",
  Ap = () => "Perfekte Anwesenheit",
  Tp = () => "Asistencia perfecta",
  Up = () => "Présence parfaite",
  Mp = () => "Presenza perfetta",
  Rp = () => "皆勤賞",
  Sp = () => "Pełna frekwencja",
  $p = () => "Идеальная посещаемость",
  Dp = () => "Ідеальна відвідуваність",
  Lp = () => "Chuyên cần tuyệt đối",
  v = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? zp() : e === "pt" ? Cp() : e === "ch" ? Pp() : e === "de" ? Ap() : e === "es" ? Tp() : e === "fr" ? Up() : e === "it" ? Mp() : e === "jp" ? Rp() : e === "pl" ? Sp() : e === "ru" ? $p() : e === "uk" ? Dp() : Lp()
  },
  Fp = () => "Have at least one member paint each day for 7 days",
  Bp = () => "Tenha ao menos um membro pintando todos os dias por 7 dias",
  Gp = () => "连续 7 天每天至少有一名成员绘制",
  Ep = () => "Lass 7 Tage lang täglich mindestens ein Mitglied malen",
  Ip = () => "Consigue que al menos un miembro pinte cada día durante 7 días",
  Np = () => "Ayez au moins un membre qui peint chaque jour pendant 7 jours",
  Op = () => "Fai dipingere almeno un membro ogni giorno per 7 giorni",
  Hp = () => "7日間、毎日1人以上のメンバーがペイントする",
  Zp = () => "Spraw, aby co najmniej jeden członek malował codziennie przez 7 dni",
  Vp = () => "Хотя бы один участник должен рисовать каждый день в течение 7 дней",
  Kp = () => "Забезпечте, щоб хоча б один учасник малював щодня протягом 7 днів",
  Wp = () => "Có ít nhất một thành viên tô mỗi ngày trong 7 ngày",
  be = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Fp() : e === "pt" ? Bp() : e === "ch" ? Gp() : e === "de" ? Ep() : e === "es" ? Ip() : e === "fr" ? Np() : e === "it" ? Op() : e === "jp" ? Hp() : e === "pl" ? Zp() : e === "ru" ? Vp() : e === "uk" ? Kp() : Wp()
  },
  Qp = () => "Profile picture",
  Jp = () => "Foto do perfil",
  Yp = () => "头像",
  Xp = () => "Profilbild",
  ew = () => "Foto de perfil",
  rw = () => "Image de profil",
  nw = () => "Immagine del profilo",
  aw = () => "プロフィール画像",
  tw = () => "Zdjęcie profilowe",
  _w = () => "Изображение профиля",
  iw = () => "Зображення профілю",
  lw = () => "Ảnh đại diện",
  Jb = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Qp() : e === "pt" ? Jp() : e === "ch" ? Yp() : e === "de" ? Xp() : e === "es" ? ew() : e === "fr" ? rw() : e === "it" ? nw() : e === "jp" ? aw() : e === "pl" ? tw() : e === "ru" ? _w() : e === "uk" ? iw() : lw()
  },
  cw = () => "Profile banner",
  sw = () => "Banner do perfil",
  uw = () => "横幅",
  ow = () => "Profilbanner",
  dw = () => "Banner del perfil",
  mw = () => "Bannière de profil",
  fw = () => "Banner del profilo",
  pw = () => "プロフィールバナー",
  ww = () => "Baner profilu",
  bw = () => "Баннер профиля",
  gw = () => "Банер профілю",
  yw = () => "Ảnh bìa",
  Yb = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? cw() : e === "pt" ? sw() : e === "ch" ? uw() : e === "de" ? ow() : e === "es" ? dw() : e === "fr" ? mw() : e === "it" ? fw() : e === "jp" ? pw() : e === "pl" ? ww() : e === "ru" ? bw() : e === "uk" ? gw() : yw()
  },
  hw = () => "Equipped",
  qw = () => "Equipado",
  vw = () => "已装备",
  kw = () => "Ausgerüstet",
  jw = () => "Equipado",
  xw = () => "Équipé",
  zw = () => "Equipaggiato",
  Cw = () => "装備中",
  Pw = () => "Założone",
  Aw = () => "Экипировано",
  Tw = () => "Оснащено",
  Uw = () => "Đã trang bị",
  Xb = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? hw() : e === "pt" ? qw() : e === "ch" ? vw() : e === "de" ? kw() : e === "es" ? jw() : e === "fr" ? xw() : e === "it" ? zw() : e === "jp" ? Cw() : e === "pl" ? Pw() : e === "ru" ? Aw() : e === "uk" ? Tw() : Uw()
  },
  Mw = () => "Public",
  Rw = () => "Pública",
  Sw = () => "公开",
  $w = () => "Öffentlich",
  Dw = () => "Pública",
  Lw = () => "Public",
  Fw = () => "Pubblico",
  Bw = () => "公開",
  Gw = () => "Publiczna",
  Ew = () => "Публичная",
  Iw = () => "Публічна",
  Nw = () => "Công khai",
  eg = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Mw() : e === "pt" ? Rw() : e === "ch" ? Sw() : e === "de" ? $w() : e === "es" ? Dw() : e === "fr" ? Lw() : e === "it" ? Fw() : e === "jp" ? Bw() : e === "pl" ? Gw() : e === "ru" ? Ew() : e === "uk" ? Iw() : Nw()
  },
  Ow = () => "Members only",
  Hw = () => "Somente membros",
  Zw = () => "仅限成员",
  Vw = () => "Nur Mitglieder",
  Kw = () => "Solo miembros",
  Ww = () => "Membres uniquement",
  Qw = () => "Solo membri",
  Jw = () => "メンバーのみ",
  Yw = () => "Tylko dla członków",
  Xw = () => "Только для участников",
  eb = () => "Лише для учасників",
  rb = () => "Chỉ thành viên",
  rg = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? Ow() : e === "pt" ? Hw() : e === "ch" ? Zw() : e === "de" ? Vw() : e === "es" ? Kw() : e === "fr" ? Ww() : e === "it" ? Qw() : e === "jp" ? Jw() : e === "pl" ? Yw() : e === "ru" ? Xw() : e === "uk" ? eb() : rb()
  },
  nb = () => "Headquarters visibility",
  ab = () => "Visibilidade da sede",
  tb = () => "总部可见性",
  _b = () => "Sichtbarkeit des Hauptquartiers",
  ib = () => "Visibilidad del cuartel general",
  lb = () => "Visibilité du quartier général",
  cb = () => "Visibilità del quartier generale",
  sb = () => "拠点の公開範囲",
  ub = () => "Widoczność siedziby",
  ob = () => "Видимость штаб-квартиры",
  db = () => "Видимість штаб-квартири",
  mb = () => "Hiển thị trụ sở",
  ng = (r = {}, n = {}) => {
    const e = n.locale ?? a();
    return e === "en" ? nb() : e === "pt" ? ab() : e === "ch" ? tb() : e === "de" ? _b() : e === "es" ? ib() : e === "fr" ? lb() : e === "it" ? cb() : e === "jp" ? sb() : e === "pl" ? ub() : e === "ru" ? ob() : e === "uk" ? db() : mb()
  };

function fb(r) {
  return typeof r == "function"
}

function pb(r, n) {
  if (fb(r)) {
    const _ = r();
    return _ === void 0 ? n : _
  }
  return r === void 0 ? n : r
}

function wb(r, n) {
  let e = C(null);
  const _ = ve(() => pb(n, 250));

  function i(...l) {
    if (t(e)) t(e).timeout && clearTimeout(t(e).timeout);
    else {
      let s, d;
      const ye = new Promise((he, qe) => {
        s = he, d = qe
      });
      f(e, {
        timeout: null,
        runner: null,
        promise: ye,
        resolve: s,
        reject: d
      }, !0)
    }
    return t(e).runner = async () => {
      if (!t(e)) return;
      const s = t(e);
      f(e, null);
      try {
        s.resolve(await r.apply(this, l))
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

function bb() {}
var o, u;
class ag {
  constructor(n, e = 250) {
    p(this, o, C());
    p(this, u);
    f(c(this, o), n(), !0), this.cancel = this.cancel.bind(this), this.setImmediately = this.setImmediately.bind(this), this.updateImmediately = this.updateImmediately.bind(this), x(this, u, wb(() => {
      f(c(this, o), n(), !0)
    }, e)), ze(n, () => {
      c(this, u).call(this).catch(bb)
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
  setImmediately(n) {
    this.cancel(), f(c(this, o), n, !0)
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
    members_500: B,
    members_1000: E,
    pixels_100: N,
    pixels_1000: H,
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
    members_50: D,
    members_100: F,
    members_500: G,
    members_1000: I,
    pixels_100: O,
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
  gb = {
    members: {
      common: M,
      uncommon: b,
      rare: $,
      epic: L,
      legendary: B,
      mythic: E
    },
    pixels: {
      common: N,
      uncommon: H,
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
  yb = {
    members: {
      common: R,
      uncommon: S,
      rare: D,
      epic: F,
      legendary: G,
      mythic: I
    },
    pixels: {
      common: O,
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
  ge = {
    common: d_,
    uncommon: x_,
    rare: F_,
    epic: J_,
    legendary: ui,
    mythic: ki
  };

function tg(r, n) {
  var e, _, i, l;
  return n ? ((_ = (e = gb[r]) == null ? void 0 : e[n]) == null ? void 0 : _.call(e)) ?? ((i = m[r]) == null ? void 0 : i.call(m)) ?? z() : ((l = m[r]) == null ? void 0 : l.call(m)) ?? z()
}

function _g(r, n) {
  var e, _, i;
  return n ? ((_ = (e = yb[r]) == null ? void 0 : e[n]) == null ? void 0 : _.call(e)) ?? "" : ((i = w[r]) == null ? void 0 : i.call(w)) ?? ""
}

function ig(r) {
  return ge[r]()
}

function lg(r) {
  return r in ge
}

function cg(r) {
  switch (r) {
    case "common":
      return "border-slate-400/35 from-slate-400/15";
    case "uncommon":
      return "border-emerald-400/40 from-emerald-400/15";
    case "rare":
      return "border-sky-400/40 from-sky-400/15";
    case "epic":
      return "border-violet-400/40 from-violet-400/15";
    case "legendary":
      return "border-amber-400/45 from-amber-400/20";
    case "mythic":
      return "border-rose-400/45 from-rose-400/20"
  }
}

function sg(r) {
  switch (r) {
    case "common":
      return "bg-slate-400 text-slate-950";
    case "uncommon":
      return "bg-emerald-400 text-emerald-950";
    case "rare":
      return "bg-sky-400 text-sky-950";
    case "epic":
      return "bg-violet-400 text-violet-950";
    case "legendary":
      return "bg-amber-400 text-amber-950";
    case "mythic":
      return "bg-rose-400 text-rose-950"
  }
}
var hb = new Set(["$$slots", "$$events", "$$legacy", "fill"]),
  qb = A('<svg><path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"></path></svg>');

function ug(r, n) {
  let e = Pe(n, "fill", 3, "#5865F2"),
    _ = U(n, hb);
  var i = qb();
  T(i, () => ({
    viewBox: "0 0 256 199",
    width: "256",
    height: "199",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    ..._
  }));
  var l = je(i);
  xe(i), ke(() => Ce(l, "fill", e())), P(r, i)
}
var vb = new Set(["$$slots", "$$events", "$$legacy"]),
  kb = A('<svg><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"></path></svg>');

function og(r, n) {
  let e = U(n, vb);
  var _ = kb();
  T(_, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), P(r, _)
}
export {
  og as A, Ib as B, Ob as C, ag as D, Nb as E, ng as F, rg as G, eg as H, lg as I, cg as J, Xb as a, Jb as b, Yb as c, Vb as d, Zb as e, ug as f, Hb as g, Sb as h, Rb as i, z as j, Lb as k, ig as l, tg as m, sg as n, Kb as o, Wb as p, Qb as q, Mb as r, _g as s, Ub as t, $b as u, Db as v, Fb as w, Bb as x, Eb as y, Gb as z
};