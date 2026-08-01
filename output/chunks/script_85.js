var k = n => {
  throw TypeError(n)
};
var j = (n, r, e) => r.has(n) || k("Cannot " + e);
var c = (n, r, e) => (j(n, r, "read from private field"), e ? e.call(n) : r.get(n)),
  p = (n, r, e) => r.has(n) ? k("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(n) : r.set(n, e),
  x = (n, r, e, i) => (j(n, r, "write to private field"), i ? i.call(n, e) : r.set(n, e), e);
import {
  g as a
} from "./BhCkpOlh.js";
import {
  i as t,
  h as f,
  e as C,
  u as ve,
  t as ke,
  a as A,
  k as P,
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
  p as Ae,
  r as M
} from "./DXFW01RN.js";
const Pe = () => "Leader",
  Te = () => "Líder",
  Me = () => "盟主",
  Ue = () => "Anführer",
  Re = () => "Líder",
  Se = () => "Chef",
  Le = () => "Leader",
  $e = () => "リーダー",
  De = () => "Lider",
  Fe = () => "Лидер",
  Be = () => "Лідер",
  Ee = () => "Thủ lĩnh",
  xg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Pe() : e === "pt" ? Te() : e === "ch" ? Me() : e === "de" ? Ue() : e === "es" ? Re() : e === "fr" ? Se() : e === "it" ? Le() : e === "jp" ? $e() : e === "pl" ? De() : e === "ru" ? Fe() : e === "uk" ? Be() : Ee()
  },
  Ge = () => "Rename alliance",
  Ne = () => "Alterar nome da aliança",
  Ie = () => "重命名联盟",
  Oe = () => "Allianznamen ändern",
  He = () => "Renombrar alianza",
  Ze = () => "Renommer l’alliance",
  Ve = () => "Cambia nome dell'alleanza",
  Ke = () => "アライアンス名を変更",
  Qe = () => "Zmień nazwę sojuszu",
  We = () => "Переименовать альянс",
  Je = () => "Перейменувати альянс",
  Ye = () => "Đổi tên liên minh",
  zg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Ge() : e === "pt" ? Ne() : e === "ch" ? Ie() : e === "de" ? Oe() : e === "es" ? He() : e === "fr" ? Ze() : e === "it" ? Ve() : e === "jp" ? Ke() : e === "pl" ? Qe() : e === "ru" ? We() : e === "uk" ? Je() : Ye()
  },
  Xe = () => "HQ",
  er = () => "Sede",
  rr = () => "总部",
  nr = () => "HQ",
  ar = () => "Sede",
  tr = () => "QG",
  ir = () => "QG",
  _r = () => "拠点",
  lr = () => "Siedziba",
  cr = () => "Штаб",
  sr = () => "Штаб",
  ur = () => "Trụ sở",
  Cg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Xe() : e === "pt" ? er() : e === "ch" ? rr() : e === "de" ? nr() : e === "es" ? ar() : e === "fr" ? tr() : e === "it" ? ir() : e === "jp" ? _r() : e === "pl" ? lr() : e === "ru" ? cr() : e === "uk" ? sr() : ur()
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
  Ag = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? or() : e === "pt" ? dr() : e === "ch" ? mr() : e === "de" ? fr() : e === "es" ? pr() : e === "fr" ? wr() : e === "it" ? br() : e === "jp" ? gr() : e === "pl" ? yr() : e === "ru" ? hr() : e === "uk" ? qr() : vr()
  },
  kr = () => "Gallery visibility",
  jr = () => "Visibilidade na galeria",
  xr = () => "列表可见性",
  zr = () => "Sichtbarkeit in der Galerie",
  Cr = () => "Visibilidad en la galería",
  Ar = () => "Visibilité dans la galerie",
  Pr = () => "Visibilità nella galleria",
  Tr = () => "ギャラリーでの表示",
  Mr = () => "Widoczność w galerii",
  Ur = () => "Видимость в галерее",
  Rr = () => "Видимість у галереї",
  Sr = () => "Hiển thị trong thư viện",
  Pg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? kr() : e === "pt" ? jr() : e === "ch" ? xr() : e === "de" ? zr() : e === "es" ? Cr() : e === "fr" ? Ar() : e === "it" ? Pr() : e === "jp" ? Tr() : e === "pl" ? Mr() : e === "ru" ? Ur() : e === "uk" ? Rr() : Sr()
  },
  Lr = () => "Public",
  $r = () => "Pública",
  Dr = () => "公开",
  Fr = () => "Öffentlich",
  Br = () => "Pública",
  Er = () => "Publique",
  Gr = () => "Pubblica",
  Nr = () => "公開",
  Ir = () => "Publiczny",
  Or = () => "Публичный",
  Hr = () => "Публічний",
  Zr = () => "Công khai",
  Tg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Lr() : e === "pt" ? $r() : e === "ch" ? Dr() : e === "de" ? Fr() : e === "es" ? Br() : e === "fr" ? Er() : e === "it" ? Gr() : e === "jp" ? Nr() : e === "pl" ? Ir() : e === "ru" ? Or() : e === "uk" ? Hr() : Zr()
  },
  Vr = () => "Unlisted",
  Kr = () => "Não listada",
  Qr = () => "未公开",
  Wr = () => "Nicht gelistet",
  Jr = () => "No listada",
  Yr = () => "Non répertoriée",
  Xr = () => "Non elencata",
  en = () => "非掲載",
  rn = () => "Niepubliczny",
  nn = () => "Не в галерее",
  an = () => "Прихований",
  tn = () => "Ẩn khỏi danh sách",
  Mg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Vr() : e === "pt" ? Kr() : e === "ch" ? Qr() : e === "de" ? Wr() : e === "es" ? Jr() : e === "fr" ? Yr() : e === "it" ? Xr() : e === "jp" ? en() : e === "pl" ? rn() : e === "ru" ? nn() : e === "uk" ? an() : tn()
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
  Ug = (n = {}, r = {}) => {
    const e = r.locale ?? a();
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
  An = () => "Відкритий",
  Pn = () => "Mở",
  Rg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? gn() : e === "pt" ? yn() : e === "ch" ? hn() : e === "de" ? qn() : e === "es" ? vn() : e === "fr" ? kn() : e === "it" ? jn() : e === "jp" ? xn() : e === "pl" ? zn() : e === "ru" ? Cn() : e === "uk" ? An() : Pn()
  },
  Tn = () => "By request",
  Mn = () => "Por pedido",
  Un = () => "需申请",
  Rn = () => "Auf Anfrage",
  Sn = () => "Por solicitud",
  Ln = () => "Sur demande",
  $n = () => "Su richiesta",
  Dn = () => "申請制",
  Fn = () => "Na prośbę",
  Bn = () => "По заявке",
  En = () => "За заявкою",
  Gn = () => "Theo yêu cầu",
  Sg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Tn() : e === "pt" ? Mn() : e === "ch" ? Un() : e === "de" ? Rn() : e === "es" ? Sn() : e === "fr" ? Ln() : e === "it" ? $n() : e === "jp" ? Dn() : e === "pl" ? Fn() : e === "ru" ? Bn() : e === "uk" ? En() : Gn()
  },
  Nn = () => "Invite only",
  In = () => "Somente convite",
  On = () => "仅限邀请",
  Hn = () => "Nur mit Einladung",
  Zn = () => "Solo por invitación",
  Vn = () => "Sur invitation",
  Kn = () => "Solo su invito",
  Qn = () => "招待制",
  Wn = () => "Tylko z zaproszeniem",
  Jn = () => "Только по приглашению",
  Yn = () => "Лише за запрошенням",
  Xn = () => "Chỉ theo lời mời",
  Lg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Nn() : e === "pt" ? In() : e === "ch" ? On() : e === "de" ? Hn() : e === "es" ? Zn() : e === "fr" ? Vn() : e === "it" ? Kn() : e === "jp" ? Qn() : e === "pl" ? Wn() : e === "ru" ? Jn() : e === "uk" ? Yn() : Xn()
  },
  ea = () => "Who can create invites",
  ra = () => "Quem pode criar convites",
  na = () => "谁可以创建邀请",
  aa = () => "Wer Einladungen erstellen darf",
  ta = () => "Quién puede crear invitaciones",
  ia = () => "Qui peut créer des invitations",
  _a = () => "Chi può creare inviti",
  la = () => "招待を作成できるロール",
  ca = () => "Kto może tworzyć zaproszenia",
  sa = () => "Кто может создавать приглашения",
  ua = () => "Хто може створювати запрошення",
  oa = () => "Ai được tạo lời mời",
  $g = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? ea() : e === "pt" ? ra() : e === "ch" ? na() : e === "de" ? aa() : e === "es" ? ta() : e === "fr" ? ia() : e === "it" ? _a() : e === "jp" ? la() : e === "pl" ? ca() : e === "ru" ? sa() : e === "uk" ? ua() : oa()
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
  ka = () => "Thành viên",
  Dg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? da() : e === "pt" ? ma() : e === "ch" ? fa() : e === "de" ? pa() : e === "es" ? wa() : e === "fr" ? ba() : e === "it" ? ga() : e === "jp" ? ya() : e === "pl" ? ha() : e === "ru" ? qa() : e === "uk" ? va() : ka()
  },
  ja = () => "Admins",
  xa = () => "Admins",
  za = () => "管理员",
  Ca = () => "Admins",
  Aa = () => "Admins",
  Pa = () => "Admins",
  Ta = () => "Admin",
  Ma = () => "管理者",
  Ua = () => "Admini",
  Ra = () => "Админы",
  Sa = () => "Адміни",
  La = () => "Quản trị viên",
  Fg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? ja() : e === "pt" ? xa() : e === "ch" ? za() : e === "de" ? Ca() : e === "es" ? Aa() : e === "fr" ? Pa() : e === "it" ? Ta() : e === "jp" ? Ma() : e === "pl" ? Ua() : e === "ru" ? Ra() : e === "uk" ? Sa() : La()
  },
  $a = () => "Leader only",
  Da = () => "Somente o líder",
  Fa = () => "仅盟主",
  Ba = () => "Nur der Anführer",
  Ea = () => "Solo el líder",
  Ga = () => "Chef uniquement",
  Na = () => "Solo il leader",
  Ia = () => "リーダーのみ",
  Oa = () => "Tylko lider",
  Ha = () => "Только лидер",
  Za = () => "Лише лідер",
  Va = () => "Chỉ thủ lĩnh",
  Bg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? $a() : e === "pt" ? Da() : e === "ch" ? Fa() : e === "de" ? Ba() : e === "es" ? Ea() : e === "fr" ? Ga() : e === "it" ? Na() : e === "jp" ? Ia() : e === "pl" ? Oa() : e === "ru" ? Ha() : e === "uk" ? Za() : Va()
  },
  Ka = () => "Discord server invite",
  Qa = () => "Convite do servidor do Discord",
  Wa = () => "Discord 服务器邀请",
  Ja = () => "Einladung zum Discord-Server",
  Ya = () => "Invitación al servidor de Discord",
  Xa = () => "Invitation au serveur Discord",
  et = () => "Invito al server Discord",
  rt = () => "Discordサーバーの招待",
  nt = () => "Zaproszenie na serwer Discord",
  at = () => "Приглашение на сервер Discord",
  tt = () => "Запрошення на сервер Discord",
  it = () => "Lời mời máy chủ Discord",
  Eg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Ka() : e === "pt" ? Qa() : e === "ch" ? Wa() : e === "de" ? Ja() : e === "es" ? Ya() : e === "fr" ? Xa() : e === "it" ? et() : e === "jp" ? rt() : e === "pl" ? nt() : e === "ru" ? at() : e === "uk" ? tt() : it()
  },
  _t = () => "Leader",
  lt = () => "Líder",
  ct = () => "盟主",
  st = () => "Anführer",
  ut = () => "Líder",
  ot = () => "Chef",
  dt = () => "Leader",
  mt = () => "リーダー",
  ft = () => "Lider",
  pt = () => "Лидер",
  wt = () => "Лідер",
  bt = () => "Thủ lĩnh",
  Gg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? _t() : e === "pt" ? lt() : e === "ch" ? ct() : e === "de" ? st() : e === "es" ? ut() : e === "fr" ? ot() : e === "it" ? dt() : e === "jp" ? mt() : e === "pl" ? ft() : e === "ru" ? pt() : e === "uk" ? wt() : bt()
  },
  gt = () => "Admin",
  yt = () => "Admin",
  ht = () => "管理员",
  qt = () => "Admin",
  vt = () => "Admin",
  kt = () => "Admin",
  jt = () => "Admin",
  xt = () => "管理者",
  zt = () => "Admin",
  Ct = () => "Админ",
  At = () => "Адмін",
  Pt = () => "Quản trị viên",
  Ng = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? gt() : e === "pt" ? yt() : e === "ch" ? ht() : e === "de" ? qt() : e === "es" ? vt() : e === "fr" ? kt() : e === "it" ? jt() : e === "jp" ? xt() : e === "pl" ? zt() : e === "ru" ? Ct() : e === "uk" ? At() : Pt()
  },
  Tt = () => "Member",
  Mt = () => "Membro",
  Ut = () => "成员",
  Rt = () => "Mitglied",
  St = () => "Miembro",
  Lt = () => "Membre",
  $t = () => "Membro",
  Dt = () => "メンバー",
  Ft = () => "Członek",
  Bt = () => "Участник",
  Et = () => "Учасник",
  Gt = () => "Thành viên",
  Ig = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Tt() : e === "pt" ? Mt() : e === "ch" ? Ut() : e === "de" ? Rt() : e === "es" ? St() : e === "fr" ? Lt() : e === "it" ? $t() : e === "jp" ? Dt() : e === "pl" ? Ft() : e === "ru" ? Bt() : e === "uk" ? Et() : Gt()
  },
  Nt = () => "Profile picture",
  It = () => "Foto de perfil",
  Ot = () => "头像",
  Ht = () => "Profilbild",
  Zt = () => "Foto de perfil",
  Vt = () => "Image de profil",
  Kt = () => "Immagine del profilo",
  Qt = () => "プロフィール画像",
  Wt = () => "Zdjęcie profilowe",
  Jt = () => "Изображение профиля",
  Yt = () => "Зображення профілю",
  Xt = () => "Ảnh đại diện",
  Og = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Nt() : e === "pt" ? It() : e === "ch" ? Ot() : e === "de" ? Ht() : e === "es" ? Zt() : e === "fr" ? Vt() : e === "it" ? Kt() : e === "jp" ? Qt() : e === "pl" ? Wt() : e === "ru" ? Jt() : e === "uk" ? Yt() : Xt()
  },
  ei = () => "Profile banner",
  ri = () => "Banner do perfil",
  ni = () => "横幅",
  ai = () => "Profilbanner",
  ti = () => "Banner del perfil",
  ii = () => "Bannière de profil",
  _i = () => "Banner del profilo",
  li = () => "プロフィールバナー",
  ci = () => "Baner profilu",
  si = () => "Баннер профиля",
  ui = () => "Банер профілю",
  oi = () => "Ảnh bìa",
  Hg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? ei() : e === "pt" ? ri() : e === "ch" ? ni() : e === "de" ? ai() : e === "es" ? ti() : e === "fr" ? ii() : e === "it" ? _i() : e === "jp" ? li() : e === "pl" ? ci() : e === "ru" ? si() : e === "uk" ? ui() : oi()
  },
  di = () => "Awards",
  mi = () => "Prêmios",
  fi = () => "奖项",
  pi = () => "Auszeichnungen",
  wi = () => "Premios",
  bi = () => "Récompenses",
  gi = () => "Premi",
  yi = () => "アワード",
  hi = () => "Nagrody",
  qi = () => "Награды",
  vi = () => "Нагороди",
  ki = () => "Giải thưởng",
  z = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? di() : e === "pt" ? mi() : e === "ch" ? fi() : e === "de" ? pi() : e === "es" ? wi() : e === "fr" ? bi() : e === "it" ? gi() : e === "jp" ? yi() : e === "pl" ? hi() : e === "ru" ? qi() : e === "uk" ? vi() : ki()
  },
  ji = () => "Locked",
  xi = () => "Bloqueado",
  zi = () => "未解锁",
  Ci = () => "Gesperrt",
  Ai = () => "Bloqueado",
  Pi = () => "Verrouillée",
  Ti = () => "Bloccato",
  Mi = () => "ロック中",
  Ui = () => "Zablokowane",
  Ri = () => "Заблокировано",
  Si = () => "Заблоковано",
  Li = () => "Đã khóa",
  Zg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? ji() : e === "pt" ? xi() : e === "ch" ? zi() : e === "de" ? Ci() : e === "es" ? Ai() : e === "fr" ? Pi() : e === "it" ? Ti() : e === "jp" ? Mi() : e === "pl" ? Ui() : e === "ru" ? Ri() : e === "uk" ? Si() : Li()
  },
  $i = n => `Earned ${n.date}`,
  Di = n => `Conquistado em ${n.date}`,
  Fi = n => `获得于 ${n.date}`,
  Bi = n => `Erhalten am ${n.date}`,
  Ei = n => `Conseguido el ${n.date}`,
  Gi = n => `Obtenue le ${n.date}`,
  Ni = n => `Ottenuto il ${n.date}`,
  Ii = n => `${n.date} に獲得`,
  Oi = n => `Zdobyto ${n.date}`,
  Hi = n => `Получена ${n.date}`,
  Zi = n => `Отримано ${n.date}`,
  Vi = n => `Đạt được ${n.date}`,
  Vg = (n, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? $i(n) : e === "pt" ? Di(n) : e === "ch" ? Fi(n) : e === "de" ? Bi(n) : e === "es" ? Ei(n) : e === "fr" ? Gi(n) : e === "it" ? Ni(n) : e === "jp" ? Ii(n) : e === "pl" ? Oi(n) : e === "ru" ? Hi(n) : e === "uk" ? Zi(n) : Vi(n)
  },
  Ki = () => "Common",
  Qi = () => "Comum",
  Wi = () => "常见",
  Ji = () => "Gewöhnlich",
  Yi = () => "Común",
  Xi = () => "Commun",
  e_ = () => "Comune",
  r_ = () => "コモン",
  n_ = () => "Zwykły",
  a_ = () => "Обычная",
  t_ = () => "Звичайна",
  i_ = () => "Phổ biến",
  __ = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Ki() : e === "pt" ? Qi() : e === "ch" ? Wi() : e === "de" ? Ji() : e === "es" ? Yi() : e === "fr" ? Xi() : e === "it" ? e_() : e === "jp" ? r_() : e === "pl" ? n_() : e === "ru" ? a_() : e === "uk" ? t_() : i_()
  },
  l_ = () => "Uncommon",
  c_ = () => "Incomum",
  s_ = () => "少见",
  u_ = () => "Ungewöhnlich",
  o_ = () => "Poco común",
  d_ = () => "Peu commun",
  m_ = () => "Non comune",
  f_ = () => "アンコモン",
  p_ = () => "Niezwykły",
  w_ = () => "Необычная",
  b_ = () => "Незвичайна",
  g_ = () => "Ít gặp",
  y_ = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? l_() : e === "pt" ? c_() : e === "ch" ? s_() : e === "de" ? u_() : e === "es" ? o_() : e === "fr" ? d_() : e === "it" ? m_() : e === "jp" ? f_() : e === "pl" ? p_() : e === "ru" ? w_() : e === "uk" ? b_() : g_()
  },
  h_ = () => "Rare",
  q_ = () => "Raro",
  v_ = () => "罕见",
  k_ = () => "Selten",
  j_ = () => "Raro",
  x_ = () => "Rare",
  z_ = () => "Raro",
  C_ = () => "レア",
  A_ = () => "Rzadki",
  P_ = () => "Редкая",
  T_ = () => "Рідкісна",
  M_ = () => "Hiếm",
  U_ = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? h_() : e === "pt" ? q_() : e === "ch" ? v_() : e === "de" ? k_() : e === "es" ? j_() : e === "fr" ? x_() : e === "it" ? z_() : e === "jp" ? C_() : e === "pl" ? A_() : e === "ru" ? P_() : e === "uk" ? T_() : M_()
  },
  R_ = () => "Epic",
  S_ = () => "Épico",
  L_ = () => "史诗",
  $_ = () => "Episch",
  D_ = () => "Épico",
  F_ = () => "Épique",
  B_ = () => "Epico",
  E_ = () => "エピック",
  G_ = () => "Epicki",
  N_ = () => "Эпическая",
  I_ = () => "Епічна",
  O_ = () => "Tuyệt vời",
  H_ = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? R_() : e === "pt" ? S_() : e === "ch" ? L_() : e === "de" ? $_() : e === "es" ? D_() : e === "fr" ? F_() : e === "it" ? B_() : e === "jp" ? E_() : e === "pl" ? G_() : e === "ru" ? N_() : e === "uk" ? I_() : O_()
  },
  Z_ = () => "Legendary",
  V_ = () => "Lendário",
  K_ = () => "传奇",
  Q_ = () => "Legendär",
  W_ = () => "Legendario",
  J_ = () => "Légendaire",
  Y_ = () => "Leggendario",
  X_ = () => "レジェンダリー",
  el = () => "Legendarny",
  rl = () => "Легендарная",
  nl = () => "Легендарна",
  al = () => "Huyền thoại",
  tl = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Z_() : e === "pt" ? V_() : e === "ch" ? K_() : e === "de" ? Q_() : e === "es" ? W_() : e === "fr" ? J_() : e === "it" ? Y_() : e === "jp" ? X_() : e === "pl" ? el() : e === "ru" ? rl() : e === "uk" ? nl() : al()
  },
  il = () => "Mythic",
  _l = () => "Mítico",
  ll = () => "神话",
  cl = () => "Mythisch",
  sl = () => "Mítico",
  ul = () => "Mythique",
  ol = () => "Mitico",
  dl = () => "ミシック",
  ml = () => "Mityczny",
  fl = () => "Мифическая",
  pl = () => "Міфічна",
  wl = () => "Thần thoại",
  bl = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? il() : e === "pt" ? _l() : e === "ch" ? ll() : e === "de" ? cl() : e === "es" ? sl() : e === "fr" ? ul() : e === "it" ? ol() : e === "jp" ? dl() : e === "pl" ? ml() : e === "ru" ? fl() : e === "uk" ? pl() : wl()
  },
  gl = n => `Next: ${n.tier}`,
  yl = n => `Próximo: ${n.tier}`,
  hl = n => `下一级：${n.tier}`,
  ql = n => `Nächste: ${n.tier}`,
  vl = n => `Siguiente: ${n.tier}`,
  kl = n => `Suivant : ${n.tier}`,
  jl = n => `Prossimo: ${n.tier}`,
  xl = n => `次: ${n.tier}`,
  zl = n => `Następny: ${n.tier}`,
  Cl = n => `Далее: ${n.tier}`,
  Al = n => `Далі: ${n.tier}`,
  Pl = n => `Tiếp theo: ${n.tier}`,
  Kg = (n, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? gl(n) : e === "pt" ? yl(n) : e === "ch" ? hl(n) : e === "de" ? ql(n) : e === "es" ? vl(n) : e === "fr" ? kl(n) : e === "it" ? jl(n) : e === "jp" ? xl(n) : e === "pl" ? zl(n) : e === "ru" ? Cl(n) : e === "uk" ? Al(n) : Pl(n)
  },
  Tl = () => "First Gathering",
  Ml = () => "Primeiro encontro",
  Ul = () => "初次集结",
  Rl = () => "Erste Zusammenkunft",
  Sl = () => "Primer encuentro",
  Ll = () => "Premier rassemblement",
  $l = () => "Primo raduno",
  Dl = () => "初めての集い",
  Fl = () => "Pierwsze zgromadzenie",
  Bl = () => "Первый сбор",
  El = () => "Перший збір",
  Gl = () => "Cuộc hội ngộ đầu tiên",
  U = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Tl() : e === "pt" ? Ml() : e === "ch" ? Ul() : e === "de" ? Rl() : e === "es" ? Sl() : e === "fr" ? Ll() : e === "it" ? $l() : e === "jp" ? Dl() : e === "pl" ? Fl() : e === "ru" ? Bl() : e === "uk" ? El() : Gl()
  },
  Nl = () => "Reach 5 eligible members",
  Il = () => "Alcance 5 membros elegíveis",
  Ol = () => "达到 5 名符合条件的成员",
  Hl = () => "Erreiche 5 berechtigte Mitglieder",
  Zl = () => "Alcanza 5 miembros elegibles",
  Vl = () => "Atteignez 5 membres éligibles",
  Kl = () => "Raggiungi 5 membri idonei",
  Ql = () => "対象メンバー5人に到達する",
  Wl = () => "Osiągnij 5 uprawnionych członków",
  Jl = () => "Наберите 5 подходящих участников",
  Yl = () => "Досягніть 5 учасників, які відповідають вимогам",
  Xl = () => "Đạt 5 thành viên hợp lệ",
  R = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Nl() : e === "pt" ? Il() : e === "ch" ? Ol() : e === "de" ? Hl() : e === "es" ? Zl() : e === "fr" ? Vl() : e === "it" ? Kl() : e === "jp" ? Ql() : e === "pl" ? Wl() : e === "ru" ? Jl() : e === "uk" ? Yl() : Xl()
  },
  ec = () => "Growing Community",
  rc = () => "Comunidade em crescimento",
  nc = () => "成长中的社区",
  ac = () => "Wachsende Community",
  tc = () => "Comunidad en crecimiento",
  ic = () => "Communauté grandissante",
  _c = () => "Comunità in crescita",
  lc = () => "成長するコミュニティ",
  cc = () => "Rosnąca społeczność",
  sc = () => "Растущее сообщество",
  uc = () => "Спільнота зростає",
  oc = () => "Cộng đồng lớn mạnh",
  b = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? ec() : e === "pt" ? rc() : e === "ch" ? nc() : e === "de" ? ac() : e === "es" ? tc() : e === "fr" ? ic() : e === "it" ? _c() : e === "jp" ? lc() : e === "pl" ? cc() : e === "ru" ? sc() : e === "uk" ? uc() : oc()
  },
  dc = () => "Reach 25 eligible members",
  mc = () => "Alcance 25 membros elegíveis",
  fc = () => "达到 25 名符合条件的成员",
  pc = () => "Erreiche 25 berechtigte Mitglieder",
  wc = () => "Alcanza 25 miembros elegibles",
  bc = () => "Atteignez 25 membres éligibles",
  gc = () => "Raggiungi 25 membri idonei",
  yc = () => "対象メンバー25人に到達する",
  hc = () => "Osiągnij 25 uprawnionych członków",
  qc = () => "Наберите 25 подходящих участников",
  vc = () => "Досягніть 25 учасників, які відповідають вимогам",
  kc = () => "Đạt 25 thành viên hợp lệ",
  S = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? dc() : e === "pt" ? mc() : e === "ch" ? fc() : e === "de" ? pc() : e === "es" ? wc() : e === "fr" ? bc() : e === "it" ? gc() : e === "jp" ? yc() : e === "pl" ? hc() : e === "ru" ? qc() : e === "uk" ? vc() : kc()
  },
  jc = () => "United Force",
  xc = () => "Força unida",
  zc = () => "团结之力",
  Cc = () => "Vereinte Kraft",
  Ac = () => "Fuerza unida",
  Pc = () => "Force unie",
  Tc = () => "Forza unita",
  Mc = () => "団結せし力",
  Uc = () => "Zjednoczona siła",
  Rc = () => "Объединённая сила",
  Sc = () => "Об'єднана сила",
  Lc = () => "Sức mạnh đoàn kết",
  L = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? jc() : e === "pt" ? xc() : e === "ch" ? zc() : e === "de" ? Cc() : e === "es" ? Ac() : e === "fr" ? Pc() : e === "it" ? Tc() : e === "jp" ? Mc() : e === "pl" ? Uc() : e === "ru" ? Rc() : e === "uk" ? Sc() : Lc()
  },
  $c = () => "Reach 50 eligible members",
  Dc = () => "Alcance 50 membros elegíveis",
  Fc = () => "达到 50 名符合条件的成员",
  Bc = () => "Erreiche 50 berechtigte Mitglieder",
  Ec = () => "Alcanza 50 miembros elegibles",
  Gc = () => "Atteignez 50 membres éligibles",
  Nc = () => "Raggiungi 50 membri idonei",
  Ic = () => "対象メンバー50人に到達する",
  Oc = () => "Osiągnij 50 uprawnionych członków",
  Hc = () => "Наберите 50 подходящих участников",
  Zc = () => "Досягніть 50 учасників, які відповідають вимогам",
  Vc = () => "Đạt 50 thành viên hợp lệ",
  $ = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? $c() : e === "pt" ? Dc() : e === "ch" ? Fc() : e === "de" ? Bc() : e === "es" ? Ec() : e === "fr" ? Gc() : e === "it" ? Nc() : e === "jp" ? Ic() : e === "pl" ? Oc() : e === "ru" ? Hc() : e === "uk" ? Zc() : Vc()
  },
  Kc = () => "Full House",
  Qc = () => "Casa cheia",
  Wc = () => "座无虚席",
  Jc = () => "Volles Haus",
  Yc = () => "Casa llena",
  Xc = () => "Salle comble",
  es = () => "Al completo",
  rs = () => "満員御礼",
  ns = () => "Komplet",
  as = () => "Полный состав",
  ts = () => "Повний склад",
  is = () => "Kín chỗ",
  D = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Kc() : e === "pt" ? Qc() : e === "ch" ? Wc() : e === "de" ? Jc() : e === "es" ? Yc() : e === "fr" ? Xc() : e === "it" ? es() : e === "jp" ? rs() : e === "pl" ? ns() : e === "ru" ? as() : e === "uk" ? ts() : is()
  },
  _s = () => "Reach 100 eligible members",
  ls = () => "Alcance 100 membros elegíveis",
  cs = () => "达到 100 名符合条件的成员",
  ss = () => "Erreiche 100 berechtigte Mitglieder",
  us = () => "Alcanza 100 miembros elegibles",
  os = () => "Atteignez 100 membres éligibles",
  ds = () => "Raggiungi 100 membri idonei",
  ms = () => "対象メンバー100人に到達する",
  fs = () => "Osiągnij 100 uprawnionych członków",
  ps = () => "Наберите 100 подходящих участников",
  ws = () => "Досягніть 100 учасників, які відповідають вимогам",
  bs = () => "Đạt 100 thành viên hợp lệ",
  F = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? _s() : e === "pt" ? ls() : e === "ch" ? cs() : e === "de" ? ss() : e === "es" ? us() : e === "fr" ? os() : e === "it" ? ds() : e === "jp" ? ms() : e === "pl" ? fs() : e === "ru" ? ps() : e === "uk" ? ws() : bs()
  },
  gs = () => "Grand Coalition",
  ys = () => "Grande coalizão",
  hs = () => "宏大同盟",
  qs = () => "Große Koalition",
  vs = () => "Gran coalición",
  ks = () => "Grande coalition",
  js = () => "Grande coalizione",
  xs = () => "大連合",
  zs = () => "Wielka koalicja",
  Cs = () => "Великая коалиция",
  As = () => "Велика коаліція",
  Ps = () => "Đại liên minh",
  B = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? gs() : e === "pt" ? ys() : e === "ch" ? hs() : e === "de" ? qs() : e === "es" ? vs() : e === "fr" ? ks() : e === "it" ? js() : e === "jp" ? xs() : e === "pl" ? zs() : e === "ru" ? Cs() : e === "uk" ? As() : Ps()
  },
  Ts = () => "Reach 500 eligible members",
  Ms = () => "Alcance 500 membros elegíveis",
  Us = () => "达到 500 名符合条件的成员",
  Rs = () => "Erreiche 500 berechtigte Mitglieder",
  Ss = () => "Alcanza 500 miembros elegibles",
  Ls = () => "Atteignez 500 membres éligibles",
  $s = () => "Raggiungi 500 membri idonei",
  Ds = () => "対象メンバー500人に到達する",
  Fs = () => "Osiągnij 500 uprawnionych członków",
  Bs = () => "Наберите 500 подходящих участников",
  Es = () => "Досягніть 500 учасників, які відповідають вимогам",
  Gs = () => "Đạt 500 thành viên hợp lệ",
  E = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Ts() : e === "pt" ? Ms() : e === "ch" ? Us() : e === "de" ? Rs() : e === "es" ? Ss() : e === "fr" ? Ls() : e === "it" ? $s() : e === "jp" ? Ds() : e === "pl" ? Fs() : e === "ru" ? Bs() : e === "uk" ? Es() : Gs()
  },
  Ns = () => "Thousand Strong",
  Is = () => "Mil fortes",
  Os = () => "千人之众",
  Hs = () => "Tausend stark",
  Zs = () => "Mil fuertes",
  Vs = () => "Force de mille",
  Ks = () => "In mille",
  Qs = () => "千人の軍勢",
  Ws = () => "Tysiąc w szeregach",
  Js = () => "Тысячная армия",
  Ys = () => "Тисяча сильних",
  Xs = () => "Ngàn người một lòng",
  G = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Ns() : e === "pt" ? Is() : e === "ch" ? Os() : e === "de" ? Hs() : e === "es" ? Zs() : e === "fr" ? Vs() : e === "it" ? Ks() : e === "jp" ? Qs() : e === "pl" ? Ws() : e === "ru" ? Js() : e === "uk" ? Ys() : Xs()
  },
  eu = () => "Reach 1,000 eligible members",
  ru = () => "Alcance 1.000 membros elegíveis",
  nu = () => "达到 1,000 名符合条件的成员",
  au = () => "Erreiche 1.000 berechtigte Mitglieder",
  tu = () => "Alcanza 1.000 miembros elegibles",
  iu = () => "Atteignez 1 000 membres éligibles",
  _u = () => "Raggiungi 1.000 membri idonei",
  lu = () => "対象メンバー1,000人に到達する",
  cu = () => "Osiągnij 1000 uprawnionych członków",
  su = () => "Наберите 1 000 подходящих участников",
  uu = () => "Досягніть 1 000 учасників, які відповідають вимогам",
  ou = () => "Đạt 1.000 thành viên hợp lệ",
  N = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? eu() : e === "pt" ? ru() : e === "ch" ? nu() : e === "de" ? au() : e === "es" ? tu() : e === "fr" ? iu() : e === "it" ? _u() : e === "jp" ? lu() : e === "pl" ? cu() : e === "ru" ? su() : e === "uk" ? uu() : ou()
  },
  du = () => "Small Beginnings",
  mu = () => "Pequenos começos",
  fu = () => "小小开端",
  pu = () => "Kleine Anfänge",
  wu = () => "Pequeños comienzos",
  bu = () => "Petits débuts",
  gu = () => "Piccoli inizi",
  yu = () => "小さな一歩",
  hu = () => "Skromne początki",
  qu = () => "Скромное начало",
  vu = () => "Скромний початок",
  ku = () => "Khởi đầu nhỏ bé",
  I = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? du() : e === "pt" ? mu() : e === "ch" ? fu() : e === "de" ? pu() : e === "es" ? wu() : e === "fr" ? bu() : e === "it" ? gu() : e === "jp" ? yu() : e === "pl" ? hu() : e === "ru" ? qu() : e === "uk" ? vu() : ku()
  },
  ju = () => "Place 100 alliance pixels",
  xu = () => "Coloque 100 pixels pela aliança",
  zu = () => "为联盟放置 100 个像素",
  Cu = () => "Male 100 Pixel für die Allianz",
  Au = () => "Coloca 100 píxeles para la alianza",
  Pu = () => "Placez 100 pixels pour l'alliance",
  Tu = () => "Piazza 100 pixel per l'alleanza",
  Mu = () => "アライアンスとして100ピクセルを塗る",
  Uu = () => "Pomaluj 100 pikseli dla sojuszu",
  Ru = () => "Нарисуйте 100 пикселей за альянс",
  Su = () => "Поставте 100 пікселів за альянс",
  Lu = () => "Đặt 100 pixel cho liên minh",
  O = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? ju() : e === "pt" ? xu() : e === "ch" ? zu() : e === "de" ? Cu() : e === "es" ? Au() : e === "fr" ? Pu() : e === "it" ? Tu() : e === "jp" ? Mu() : e === "pl" ? Uu() : e === "ru" ? Ru() : e === "uk" ? Su() : Lu()
  },
  $u = () => "Making a Mark",
  Du = () => "Deixando a marca",
  Fu = () => "初露锋芒",
  Bu = () => "Spuren hinterlassen",
  Eu = () => "Dejando huella",
  Gu = () => "Laisser sa marque",
  Nu = () => "Lasciare il segno",
  Iu = () => "爪痕を残す",
  Ou = () => "Widoczny ślad",
  Hu = () => "Оставить свой след",
  Zu = () => "Залишити слід",
  Vu = () => "Ghi dấu ấn",
  H = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? $u() : e === "pt" ? Du() : e === "ch" ? Fu() : e === "de" ? Bu() : e === "es" ? Eu() : e === "fr" ? Gu() : e === "it" ? Nu() : e === "jp" ? Iu() : e === "pl" ? Ou() : e === "ru" ? Hu() : e === "uk" ? Zu() : Vu()
  },
  Ku = () => "Place 1,000 alliance pixels",
  Qu = () => "Coloque 1.000 pixels pela aliança",
  Wu = () => "为联盟放置 1,000 个像素",
  Ju = () => "Male 1.000 Pixel für die Allianz",
  Yu = () => "Coloca 1.000 píxeles para la alianza",
  Xu = () => "Placez 1 000 pixels pour l'alliance",
  eo = () => "Piazza 1.000 pixel per l'alleanza",
  ro = () => "アライアンスとして1,000ピクセルを塗る",
  no = () => "Pomaluj 1000 pikseli dla sojuszu",
  ao = () => "Нарисуйте 1 000 пикселей за альянс",
  to = () => "Поставте 1 000 пікселів за альянс",
  io = () => "Đặt 1.000 pixel cho liên minh",
  Z = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Ku() : e === "pt" ? Qu() : e === "ch" ? Wu() : e === "de" ? Ju() : e === "es" ? Yu() : e === "fr" ? Xu() : e === "it" ? eo() : e === "jp" ? ro() : e === "pl" ? no() : e === "ru" ? ao() : e === "uk" ? to() : io()
  },
  _o = () => "Pixel Powerhouse",
  lo = () => "Potência de pixels",
  co = () => "像素强者",
  so = () => "Pixel-Kraftwerk",
  uo = () => "Potencia de píxeles",
  oo = () => "Puissance du pixel",
  mo = () => "Potenza di pixel",
  fo = () => "ピクセルの強豪",
  po = () => "Potęga pikseli",
  wo = () => "Пиксельная мощь",
  bo = () => "Піксельна потуга",
  go = () => "Cường quốc pixel",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? _o() : e === "pt" ? lo() : e === "ch" ? co() : e === "de" ? so() : e === "es" ? uo() : e === "fr" ? oo() : e === "it" ? mo() : e === "jp" ? fo() : e === "pl" ? po() : e === "ru" ? wo() : e === "uk" ? bo() : go()
  },
  yo = () => "Place 10,000 alliance pixels",
  ho = () => "Coloque 10.000 pixels pela aliança",
  qo = () => "为联盟放置 10,000 个像素",
  vo = () => "Male 10.000 Pixel für die Allianz",
  ko = () => "Coloca 10.000 píxeles para la alianza",
  jo = () => "Placez 10 000 pixels pour l'alliance",
  xo = () => "Piazza 10.000 pixel per l'alleanza",
  zo = () => "アライアンスとして10,000ピクセルを塗る",
  Co = () => "Pomaluj 10 000 pikseli dla sojuszu",
  Ao = () => "Нарисуйте 10 000 пикселей за альянс",
  Po = () => "Поставте 10 000 пікселів за альянс",
  To = () => "Đặt 10.000 pixel cho liên minh",
  V = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? yo() : e === "pt" ? ho() : e === "ch" ? qo() : e === "de" ? vo() : e === "es" ? ko() : e === "fr" ? jo() : e === "it" ? xo() : e === "jp" ? zo() : e === "pl" ? Co() : e === "ru" ? Ao() : e === "uk" ? Po() : To()
  },
  Mo = () => "Canvas Giant",
  Uo = () => "Gigante da tela",
  Ro = () => "画布巨人",
  So = () => "Canvas-Riese",
  Lo = () => "Gigante del lienzo",
  $o = () => "Géant du canvas",
  Do = () => "Gigante della tela",
  Fo = () => "キャンバスの巨人",
  Bo = () => "Gigant płótna",
  Eo = () => "Гигант холста",
  Go = () => "Гігант полотна",
  No = () => "Khổng lồ bảng vẽ",
  K = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Mo() : e === "pt" ? Uo() : e === "ch" ? Ro() : e === "de" ? So() : e === "es" ? Lo() : e === "fr" ? $o() : e === "it" ? Do() : e === "jp" ? Fo() : e === "pl" ? Bo() : e === "ru" ? Eo() : e === "uk" ? Go() : No()
  },
  Io = () => "Place 100,000 alliance pixels",
  Oo = () => "Coloque 100.000 pixels pela aliança",
  Ho = () => "为联盟放置 100,000 个像素",
  Zo = () => "Male 100.000 Pixel für die Allianz",
  Vo = () => "Coloca 100.000 píxeles para la alianza",
  Ko = () => "Placez 100 000 pixels pour l'alliance",
  Qo = () => "Piazza 100.000 pixel per l'alleanza",
  Wo = () => "アライアンスとして100,000ピクセルを塗る",
  Jo = () => "Pomaluj 100 000 pikseli dla sojuszu",
  Yo = () => "Нарисуйте 100 000 пикселей за альянс",
  Xo = () => "Поставте 100 000 пікселів за альянс",
  e0 = () => "Đặt 100.000 pixel cho liên minh",
  Q = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Io() : e === "pt" ? Oo() : e === "ch" ? Ho() : e === "de" ? Zo() : e === "es" ? Vo() : e === "fr" ? Ko() : e === "it" ? Qo() : e === "jp" ? Wo() : e === "pl" ? Jo() : e === "ru" ? Yo() : e === "uk" ? Xo() : e0()
  },
  r0 = () => "Canvas Titan",
  n0 = () => "Tita da tela",
  a0 = () => "画布泰坦",
  t0 = () => "Canvas-Titan",
  i0 = () => "Titán del lienzo",
  _0 = () => "Titan du canvas",
  l0 = () => "Titano della tela",
  c0 = () => "キャンバスの巨神",
  s0 = () => "Tytan płótna",
  u0 = () => "Титан холста",
  o0 = () => "Титан полотна",
  d0 = () => "Titan bảng vẽ",
  W = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? r0() : e === "pt" ? n0() : e === "ch" ? a0() : e === "de" ? t0() : e === "es" ? i0() : e === "fr" ? _0() : e === "it" ? l0() : e === "jp" ? c0() : e === "pl" ? s0() : e === "ru" ? u0() : e === "uk" ? o0() : d0()
  },
  m0 = () => "Place 1,000,000 alliance pixels",
  f0 = () => "Coloque 1.000.000 pixels pela aliança",
  p0 = () => "为联盟放置 1,000,000 个像素",
  w0 = () => "Male 1.000.000 Pixel für die Allianz",
  b0 = () => "Coloca 1.000.000 de píxeles para la alianza",
  g0 = () => "Placez 1 000 000 pixels pour l'alliance",
  y0 = () => "Piazza 1.000.000 pixel per l'alleanza",
  h0 = () => "アライアンスとして1,000,000ピクセルを塗る",
  q0 = () => "Pomaluj 1 000 000 pikseli dla sojuszu",
  v0 = () => "Нарисуйте 1 000 000 пикселей за альянс",
  k0 = () => "Поставте 1 000 000 пікселів за альянс",
  j0 = () => "Đặt 1.000.000 pixel cho liên minh",
  J = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? m0() : e === "pt" ? f0() : e === "ch" ? p0() : e === "de" ? w0() : e === "es" ? b0() : e === "fr" ? g0() : e === "it" ? y0() : e === "jp" ? h0() : e === "pl" ? q0() : e === "ru" ? v0() : e === "uk" ? k0() : j0()
  },
  x0 = () => "Canvas God",
  z0 = () => "Deus da tela",
  C0 = () => "画布之神",
  A0 = () => "Canvas-Gott",
  P0 = () => "Dios del lienzo",
  T0 = () => "Dieu du canvas",
  M0 = () => "Dio della tela",
  U0 = () => "キャンバスの神",
  R0 = () => "Bóg płótna",
  S0 = () => "Бог холста",
  L0 = () => "Бог полотна",
  $0 = () => "Thần bảng vẽ",
  Y = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? x0() : e === "pt" ? z0() : e === "ch" ? C0() : e === "de" ? A0() : e === "es" ? P0() : e === "fr" ? T0() : e === "it" ? M0() : e === "jp" ? U0() : e === "pl" ? R0() : e === "ru" ? S0() : e === "uk" ? L0() : $0()
  },
  D0 = () => "Place 10,000,000 alliance pixels",
  F0 = () => "Coloque 10.000.000 pixels pela aliança",
  B0 = () => "为联盟放置 10,000,000 个像素",
  E0 = () => "Male 10.000.000 Pixel für die Allianz",
  G0 = () => "Coloca 10.000.000 de píxeles para la alianza",
  N0 = () => "Placez 10 000 000 pixels pour l'alliance",
  I0 = () => "Piazza 10.000.000 pixel per l'alleanza",
  O0 = () => "アライアンスとして10,000,000ピクセルを塗る",
  H0 = () => "Pomaluj 10 000 000 pikseli dla sojuszu",
  Z0 = () => "Нарисуйте 10 000 000 пикселей за альянс",
  V0 = () => "Поставте 10 000 000 пікселів за альянс",
  K0 = () => "Đặt 10.000.000 pixel cho liên minh",
  X = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? D0() : e === "pt" ? F0() : e === "ch" ? B0() : e === "de" ? E0() : e === "es" ? G0() : e === "fr" ? N0() : e === "it" ? I0() : e === "jp" ? O0() : e === "pl" ? H0() : e === "ru" ? Z0() : e === "uk" ? V0() : K0()
  },
  Q0 = () => "Dedicated Artists",
  W0 = () => "Artistas dedicados",
  J0 = () => "专注的画师",
  Y0 = () => "Engagierte Künstler",
  X0 = () => "Artistas dedicados",
  ed = () => "Artistes dévoués",
  rd = () => "Artisti dedicati",
  nd = () => "熱心なアーティストたち",
  ad = () => "Oddani artyści",
  td = () => "Преданные художники",
  id = () => "Віддані художники",
  _d = () => "Những nghệ sĩ tận tụy",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Q0() : e === "pt" ? W0() : e === "ch" ? J0() : e === "de" ? Y0() : e === "es" ? X0() : e === "fr" ? ed() : e === "it" ? rd() : e === "jp" ? nd() : e === "pl" ? ad() : e === "ru" ? td() : e === "uk" ? id() : _d()
  },
  ld = () => "Have 10 members each place 10,000 alliance pixels",
  cd = () => "Tenha 10 membros que coloquem 10.000 pixels pela aliança cada",
  sd = () => "让 10 名成员各为联盟放置 10,000 个像素",
  ud = () => "Lass 10 Mitglieder je 10.000 Pixel für die Allianz malen",
  od = () => "Consigue que 10 miembros coloquen 10.000 píxeles para la alianza cada uno",
  dd = () => "Ayez 10 membres qui placent chacun 10 000 pixels pour l'alliance",
  md = () => "Fai in modo che 10 membri piazzino 10.000 pixel per l'alleanza ciascuno",
  fd = () => "10人のメンバーがそれぞれアライアンスとして10,000ピクセルを塗る",
  pd = () => "Spraw, aby 10 członków pomalowało po 10 000 pikseli dla sojuszu",
  wd = () => "10 участников должны нарисовать по 10 000 пикселей за альянс",
  bd = () => "Зберіть 10 учасників, кожен з яких поставить 10 000 пікселів за альянс",
  gd = () => "Có 10 thành viên, mỗi người đặt 10.000 pixel cho liên minh",
  ee = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? ld() : e === "pt" ? cd() : e === "ch" ? sd() : e === "de" ? ud() : e === "es" ? od() : e === "fr" ? dd() : e === "it" ? md() : e === "jp" ? fd() : e === "pl" ? pd() : e === "ru" ? wd() : e === "uk" ? bd() : gd()
  },
  yd = () => "Veteran Alliance",
  hd = () => "Aliança veterana",
  qd = () => "老牌联盟",
  vd = () => "Veteranen-Allianz",
  kd = () => "Alianza veterana",
  jd = () => "Alliance vétérane",
  xd = () => "Alleanza veterana",
  zd = () => "ベテランアライアンス",
  Cd = () => "Sojusz weteranów",
  Ad = () => "Альянс-ветеран",
  Pd = () => "Альянс-ветеран",
  Td = () => "Liên minh kỳ cựu",
  h = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? yd() : e === "pt" ? hd() : e === "ch" ? qd() : e === "de" ? vd() : e === "es" ? kd() : e === "fr" ? jd() : e === "it" ? xd() : e === "jp" ? zd() : e === "pl" ? Cd() : e === "ru" ? Ad() : e === "uk" ? Pd() : Td()
  },
  Md = () => "Remain active for 30 consecutive days",
  Ud = () => "Permaneça ativa por 30 dias consecutivos",
  Rd = () => "连续 30 天保持活跃",
  Sd = () => "Bleibe 30 Tage in Folge aktiv",
  Ld = () => "Permanece activa durante 30 días consecutivos",
  $d = () => "Restez active pendant 30 jours consécutifs",
  Dd = () => "Resta attiva per 30 giorni consecutivi",
  Fd = () => "30日連続で活動を続ける",
  Bd = () => "Pozostań aktywny przez 30 kolejnych dni",
  Ed = () => "Оставайтесь активными 30 дней подряд",
  Gd = () => "Залишайтеся активними 30 днів поспіль",
  Nd = () => "Duy trì hoạt động 30 ngày liên tiếp",
  re = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Md() : e === "pt" ? Ud() : e === "ch" ? Rd() : e === "de" ? Sd() : e === "es" ? Ld() : e === "fr" ? $d() : e === "it" ? Dd() : e === "jp" ? Fd() : e === "pl" ? Bd() : e === "ru" ? Ed() : e === "uk" ? Gd() : Nd()
  },
  Id = () => "Seasoned Alliance",
  Od = () => "Aliança experiente",
  Hd = () => "资深联盟",
  Zd = () => "Erfahrene Allianz",
  Vd = () => "Alianza experimentada",
  Kd = () => "Alliance aguerrie",
  Qd = () => "Alleanza esperta",
  Wd = () => "熟練のアライアンス",
  Jd = () => "Doświadczony sojusz",
  Yd = () => "Опытный альянс",
  Xd = () => "Досвідчений альянс",
  em = () => "Liên minh dày dạn",
  ne = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Id() : e === "pt" ? Od() : e === "ch" ? Hd() : e === "de" ? Zd() : e === "es" ? Vd() : e === "fr" ? Kd() : e === "it" ? Qd() : e === "jp" ? Wd() : e === "pl" ? Jd() : e === "ru" ? Yd() : e === "uk" ? Xd() : em()
  },
  rm = () => "Remain active for 60 consecutive days",
  nm = () => "Permaneça ativa por 60 dias consecutivos",
  am = () => "连续 60 天保持活跃",
  tm = () => "Bleibe 60 Tage in Folge aktiv",
  im = () => "Permanece activa durante 60 días consecutivos",
  _m = () => "Restez active pendant 60 jours consécutifs",
  lm = () => "Resta attiva per 60 giorni consecutivi",
  cm = () => "60日連続で活動を続ける",
  sm = () => "Pozostań aktywny przez 60 kolejnych dni",
  um = () => "Оставайтесь активными 60 дней подряд",
  om = () => "Залишайтеся активними 60 днів поспіль",
  dm = () => "Duy trì hoạt động 60 ngày liên tiếp",
  ae = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? rm() : e === "pt" ? nm() : e === "ch" ? am() : e === "de" ? tm() : e === "es" ? im() : e === "fr" ? _m() : e === "it" ? lm() : e === "jp" ? cm() : e === "pl" ? sm() : e === "ru" ? um() : e === "uk" ? om() : dm()
  },
  mm = () => "Enduring Alliance",
  fm = () => "Aliança duradoura",
  pm = () => "长青联盟",
  wm = () => "Beständige Allianz",
  bm = () => "Alianza duradera",
  gm = () => "Alliance durable",
  ym = () => "Alleanza duratura",
  hm = () => "不屈のアライアンス",
  qm = () => "Wytrwały sojusz",
  vm = () => "Стойкий альянс",
  km = () => "Витривалий альянс",
  jm = () => "Liên minh bền bỉ",
  te = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? mm() : e === "pt" ? fm() : e === "ch" ? pm() : e === "de" ? wm() : e === "es" ? bm() : e === "fr" ? gm() : e === "it" ? ym() : e === "jp" ? hm() : e === "pl" ? qm() : e === "ru" ? vm() : e === "uk" ? km() : jm()
  },
  xm = () => "Remain active for 90 consecutive days",
  zm = () => "Permaneça ativa por 90 dias consecutivos",
  Cm = () => "连续 90 天保持活跃",
  Am = () => "Bleibe 90 Tage in Folge aktiv",
  Pm = () => "Permanece activa durante 90 días consecutivos",
  Tm = () => "Restez active pendant 90 jours consécutifs",
  Mm = () => "Resta attiva per 90 giorni consecutivi",
  Um = () => "90日連続で活動を続ける",
  Rm = () => "Pozostań aktywny przez 90 kolejnych dni",
  Sm = () => "Оставайтесь активными 90 дней подряд",
  Lm = () => "Залишайтеся активними 90 днів поспіль",
  $m = () => "Duy trì hoạt động 90 ngày liên tiếp",
  ie = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? xm() : e === "pt" ? zm() : e === "ch" ? Cm() : e === "de" ? Am() : e === "es" ? Pm() : e === "fr" ? Tm() : e === "it" ? Mm() : e === "jp" ? Um() : e === "pl" ? Rm() : e === "ru" ? Sm() : e === "uk" ? Lm() : $m()
  },
  Dm = () => "Ancient Order",
  Fm = () => "Ordem antiga",
  Bm = () => "古老秩序",
  Em = () => "Alter Orden",
  Gm = () => "Orden antigua",
  Nm = () => "Ordre ancien",
  Im = () => "Ordine antico",
  Om = () => "古の結社",
  Hm = () => "Starożytny zakon",
  Zm = () => "Древний орден",
  Vm = () => "Стародавній орден",
  Km = () => "Hội cổ xưa",
  _e = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Dm() : e === "pt" ? Fm() : e === "ch" ? Bm() : e === "de" ? Em() : e === "es" ? Gm() : e === "fr" ? Nm() : e === "it" ? Im() : e === "jp" ? Om() : e === "pl" ? Hm() : e === "ru" ? Zm() : e === "uk" ? Vm() : Km()
  },
  Qm = () => "Remain active for 180 consecutive days",
  Wm = () => "Permaneça ativa por 180 dias consecutivos",
  Jm = () => "连续 180 天保持活跃",
  Ym = () => "Bleibe 180 Tage in Folge aktiv",
  Xm = () => "Permanece activa durante 180 días consecutivos",
  ef = () => "Restez active pendant 180 jours consécutifs",
  rf = () => "Resta attiva per 180 giorni consecutivi",
  nf = () => "180日連続で活動を続ける",
  af = () => "Pozostań aktywny przez 180 kolejnych dni",
  tf = () => "Оставайтесь активными 180 дней подряд",
  _f = () => "Залишайтеся активними 180 днів поспіль",
  lf = () => "Duy trì hoạt động 180 ngày liên tiếp",
  le = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Qm() : e === "pt" ? Wm() : e === "ch" ? Jm() : e === "de" ? Ym() : e === "es" ? Xm() : e === "fr" ? ef() : e === "it" ? rf() : e === "jp" ? nf() : e === "pl" ? af() : e === "ru" ? tf() : e === "uk" ? _f() : lf()
  },
  cf = () => "Primordial",
  sf = () => "Primordial",
  uf = () => "太古",
  of = () => "Urgestein",
  df = () => "Primordial",
  mf = () => "Primordiale",
  ff = () => "Primordiale",
  pf = () => "太古の存在",
  wf = () => "Pradawny",
  bf = () => "Первозданный",
  gf = () => "Первозданний",
  yf = () => "Nguyên thủy",
  ce = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? cf() : e === "pt" ? sf() : e === "ch" ? uf() : e === "de" ? of() : e === "es" ? df() : e === "fr" ? mf() : e === "it" ? ff() : e === "jp" ? pf() : e === "pl" ? wf() : e === "ru" ? bf() : e === "uk" ? gf() : yf()
  },
  hf = () => "Remain active for 365 consecutive days",
  qf = () => "Permaneça ativa por 365 dias consecutivos",
  vf = () => "连续 365 天保持活跃",
  kf = () => "Bleibe 365 Tage in Folge aktiv",
  jf = () => "Permanece activa durante 365 días consecutivos",
  xf = () => "Restez active pendant 365 jours consécutifs",
  zf = () => "Resta attiva per 365 giorni consecutivi",
  Cf = () => "365日連続で活動を続ける",
  Af = () => "Pozostań aktywny przez 365 kolejnych dni",
  Pf = () => "Оставайтесь активными 365 дней подряд",
  Tf = () => "Залишайтеся активними 365 днів поспіль",
  Mf = () => "Duy trì hoạt động 365 ngày liên tiếp",
  se = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? hf() : e === "pt" ? qf() : e === "ch" ? vf() : e === "de" ? kf() : e === "es" ? jf() : e === "fr" ? xf() : e === "it" ? zf() : e === "jp" ? Cf() : e === "pl" ? Af() : e === "ru" ? Pf() : e === "uk" ? Tf() : Mf()
  },
  Uf = () => "Active Community",
  Rf = () => "Comunidade ativa",
  Sf = () => "活跃社区",
  Lf = () => "Aktive Community",
  $f = () => "Comunidad activa",
  Df = () => "Communauté active",
  Ff = () => "Comunità attiva",
  Bf = () => "活発なコミュニティ",
  Ef = () => "Aktywna społeczność",
  Gf = () => "Активное сообщество",
  Nf = () => "Активна спільнота",
  If = () => "Cộng đồng năng động",
  q = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Uf() : e === "pt" ? Rf() : e === "ch" ? Sf() : e === "de" ? Lf() : e === "es" ? $f() : e === "fr" ? Df() : e === "it" ? Ff() : e === "jp" ? Bf() : e === "pl" ? Ef() : e === "ru" ? Gf() : e === "uk" ? Nf() : If()
  },
  Of = () => "Have 10 members paint in one UTC day",
  Hf = () => "Tenha 10 membros pintando em um mesmo dia UTC",
  Zf = () => "在同一个 UTC 日内有 10 名成员绘制",
  Vf = () => "Lass 10 Mitglieder an einem UTC-Tag malen",
  Kf = () => "Consigue que 10 miembros pinten en un mismo día UTC",
  Qf = () => "Ayez 10 membres qui peignent le même jour UTC",
  Wf = () => "Fai dipingere 10 membri nello stesso giorno UTC",
  Jf = () => "同じUTCの1日に10人のメンバーがペイントする",
  Yf = () => "Spraw, aby 10 członków malowało w ciągu jednego dnia UTC",
  Xf = () => "10 участников должны рисовать за один день UTC",
  ep = () => "Зберіть 10 учасників, які малюватимуть за одну добу UTC",
  rp = () => "Có 10 thành viên cùng tô trong một ngày UTC",
  ue = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Of() : e === "pt" ? Hf() : e === "ch" ? Zf() : e === "de" ? Vf() : e === "es" ? Kf() : e === "fr" ? Qf() : e === "it" ? Wf() : e === "jp" ? Jf() : e === "pl" ? Yf() : e === "ru" ? Xf() : e === "uk" ? ep() : rp()
  },
  np = () => "All Hands on Deck",
  ap = () => "Todos a postos",
  tp = () => "全员出动",
  ip = () => "Alle Mann an Deck",
  _p = () => "Todos a sus puestos",
  lp = () => "Tous sur le pont",
  cp = () => "Tutti in azione",
  sp = () => "総動員",
  up = () => "Wszyscy na pokład",
  op = () => "Все по местам",
  dp = () => "Усі на палубу",
  mp = () => "Toàn lực ra quân",
  oe = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? np() : e === "pt" ? ap() : e === "ch" ? tp() : e === "de" ? ip() : e === "es" ? _p() : e === "fr" ? lp() : e === "it" ? cp() : e === "jp" ? sp() : e === "pl" ? up() : e === "ru" ? op() : e === "uk" ? dp() : mp()
  },
  fp = () => "Have 25 members paint in one UTC day",
  pp = () => "Tenha 25 membros pintando em um mesmo dia UTC",
  wp = () => "在同一个 UTC 日内有 25 名成员绘制",
  bp = () => "Lass 25 Mitglieder an einem UTC-Tag malen",
  gp = () => "Consigue que 25 miembros pinten en un mismo día UTC",
  yp = () => "Ayez 25 membres qui peignent le même jour UTC",
  hp = () => "Fai dipingere 25 membri nello stesso giorno UTC",
  qp = () => "同じUTCの1日に25人のメンバーがペイントする",
  vp = () => "Spraw, aby 25 członków malowało w ciągu jednego dnia UTC",
  kp = () => "25 участников должны рисовать за один день UTC",
  jp = () => "Зберіть 25 учасників, які малюватимуть за одну добу UTC",
  xp = () => "Có 25 thành viên cùng tô trong một ngày UTC",
  de = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? fp() : e === "pt" ? pp() : e === "ch" ? wp() : e === "de" ? bp() : e === "es" ? gp() : e === "fr" ? yp() : e === "it" ? hp() : e === "jp" ? qp() : e === "pl" ? vp() : e === "ru" ? kp() : e === "uk" ? jp() : xp()
  },
  zp = () => "Rallying Crowd",
  Cp = () => "Multidão reunida",
  Ap = () => "集结的人潮",
  Pp = () => "Versammelte Menge",
  Tp = () => "Multitud reunida",
  Mp = () => "Foule ralliée",
  Up = () => "Folla in adunata",
  Rp = () => "集いし群衆",
  Sp = () => "Zgromadzony tłum",
  Lp = () => "Сплочённая толпа",
  $p = () => "Згуртований натовп",
  Dp = () => "Đám đông tụ hội",
  me = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? zp() : e === "pt" ? Cp() : e === "ch" ? Ap() : e === "de" ? Pp() : e === "es" ? Tp() : e === "fr" ? Mp() : e === "it" ? Up() : e === "jp" ? Rp() : e === "pl" ? Sp() : e === "ru" ? Lp() : e === "uk" ? $p() : Dp()
  },
  Fp = () => "Have 50 members paint in one UTC day",
  Bp = () => "Tenha 50 membros pintando em um mesmo dia UTC",
  Ep = () => "在同一个 UTC 日内有 50 名成员绘制",
  Gp = () => "Lass 50 Mitglieder an einem UTC-Tag malen",
  Np = () => "Consigue que 50 miembros pinten en un mismo día UTC",
  Ip = () => "Ayez 50 membres qui peignent le même jour UTC",
  Op = () => "Fai dipingere 50 membri nello stesso giorno UTC",
  Hp = () => "同じUTCの1日に50人のメンバーがペイントする",
  Zp = () => "Spraw, aby 50 członków malowało w ciągu jednego dnia UTC",
  Vp = () => "50 участников должны рисовать за один день UTC",
  Kp = () => "Зберіть 50 учасників, які малюватимуть за одну добу UTC",
  Qp = () => "Có 50 thành viên cùng tô trong một ngày UTC",
  fe = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Fp() : e === "pt" ? Bp() : e === "ch" ? Ep() : e === "de" ? Gp() : e === "es" ? Np() : e === "fr" ? Ip() : e === "it" ? Op() : e === "jp" ? Hp() : e === "pl" ? Zp() : e === "ru" ? Vp() : e === "uk" ? Kp() : Qp()
  },
  Wp = () => "Alliance Mobilized",
  Jp = () => "Aliança mobilizada",
  Yp = () => "联盟总动员",
  Xp = () => "Allianz mobilisiert",
  ew = () => "Alianza movilizada",
  rw = () => "Alliance mobilisée",
  nw = () => "Alleanza mobilitata",
  aw = () => "アライアンス総出撃",
  tw = () => "Sojusz zmobilizowany",
  iw = () => "Альянс мобилизован",
  _w = () => "Альянс мобілізовано",
  lw = () => "Liên minh tổng động viên",
  pe = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Wp() : e === "pt" ? Jp() : e === "ch" ? Yp() : e === "de" ? Xp() : e === "es" ? ew() : e === "fr" ? rw() : e === "it" ? nw() : e === "jp" ? aw() : e === "pl" ? tw() : e === "ru" ? iw() : e === "uk" ? _w() : lw()
  },
  cw = () => "Have 100 members paint in one UTC day",
  sw = () => "Tenha 100 membros pintando em um mesmo dia UTC",
  uw = () => "在同一个 UTC 日内有 100 名成员绘制",
  ow = () => "Lass 100 Mitglieder an einem UTC-Tag malen",
  dw = () => "Consigue que 100 miembros pinten en un mismo día UTC",
  mw = () => "Ayez 100 membres qui peignent le même jour UTC",
  fw = () => "Fai dipingere 100 membri nello stesso giorno UTC",
  pw = () => "同じUTCの1日に100人のメンバーがペイントする",
  ww = () => "Spraw, aby 100 członków malowało w ciągu jednego dnia UTC",
  bw = () => "100 участников должны рисовать за один день UTC",
  gw = () => "Зберіть 100 учасників, які малюватимуть за одну добу UTC",
  yw = () => "Có 100 thành viên cùng tô trong một ngày UTC",
  we = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? cw() : e === "pt" ? sw() : e === "ch" ? uw() : e === "de" ? ow() : e === "es" ? dw() : e === "fr" ? mw() : e === "it" ? fw() : e === "jp" ? pw() : e === "pl" ? ww() : e === "ru" ? bw() : e === "uk" ? gw() : yw()
  },
  hw = () => "Perfect Attendance",
  qw = () => "Presença perfeita",
  vw = () => "全勤",
  kw = () => "Perfekte Anwesenheit",
  jw = () => "Asistencia perfecta",
  xw = () => "Présence parfaite",
  zw = () => "Presenza perfetta",
  Cw = () => "皆勤賞",
  Aw = () => "Pełna frekwencja",
  Pw = () => "Идеальная посещаемость",
  Tw = () => "Ідеальна відвідуваність",
  Mw = () => "Chuyên cần tuyệt đối",
  v = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? hw() : e === "pt" ? qw() : e === "ch" ? vw() : e === "de" ? kw() : e === "es" ? jw() : e === "fr" ? xw() : e === "it" ? zw() : e === "jp" ? Cw() : e === "pl" ? Aw() : e === "ru" ? Pw() : e === "uk" ? Tw() : Mw()
  },
  Uw = () => "Have at least one member paint each day for 7 days",
  Rw = () => "Tenha ao menos um membro pintando todos os dias por 7 dias",
  Sw = () => "连续 7 天每天至少有一名成员绘制",
  Lw = () => "Lass 7 Tage lang täglich mindestens ein Mitglied malen",
  $w = () => "Consigue que al menos un miembro pinte cada día durante 7 días",
  Dw = () => "Ayez au moins un membre qui peint chaque jour pendant 7 jours",
  Fw = () => "Fai dipingere almeno un membro ogni giorno per 7 giorni",
  Bw = () => "7日間、毎日1人以上のメンバーがペイントする",
  Ew = () => "Spraw, aby co najmniej jeden członek malował codziennie przez 7 dni",
  Gw = () => "Хотя бы один участник должен рисовать каждый день в течение 7 дней",
  Nw = () => "Забезпечте, щоб хоча б один учасник малював щодня протягом 7 днів",
  Iw = () => "Có ít nhất một thành viên tô mỗi ngày trong 7 ngày",
  be = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Uw() : e === "pt" ? Rw() : e === "ch" ? Sw() : e === "de" ? Lw() : e === "es" ? $w() : e === "fr" ? Dw() : e === "it" ? Fw() : e === "jp" ? Bw() : e === "pl" ? Ew() : e === "ru" ? Gw() : e === "uk" ? Nw() : Iw()
  },
  Ow = () => "Profile picture",
  Hw = () => "Foto do perfil",
  Zw = () => "头像",
  Vw = () => "Profilbild",
  Kw = () => "Foto de perfil",
  Qw = () => "Image de profil",
  Ww = () => "Immagine del profilo",
  Jw = () => "プロフィール画像",
  Yw = () => "Zdjęcie profilowe",
  Xw = () => "Изображение профиля",
  eb = () => "Зображення профілю",
  rb = () => "Ảnh đại diện",
  Qg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Ow() : e === "pt" ? Hw() : e === "ch" ? Zw() : e === "de" ? Vw() : e === "es" ? Kw() : e === "fr" ? Qw() : e === "it" ? Ww() : e === "jp" ? Jw() : e === "pl" ? Yw() : e === "ru" ? Xw() : e === "uk" ? eb() : rb()
  },
  nb = () => "Profile banner",
  ab = () => "Banner do perfil",
  tb = () => "横幅",
  ib = () => "Profilbanner",
  _b = () => "Banner del perfil",
  lb = () => "Bannière de profil",
  cb = () => "Banner del profilo",
  sb = () => "プロフィールバナー",
  ub = () => "Baner profilu",
  ob = () => "Баннер профиля",
  db = () => "Банер профілю",
  mb = () => "Ảnh bìa",
  Wg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? nb() : e === "pt" ? ab() : e === "ch" ? tb() : e === "de" ? ib() : e === "es" ? _b() : e === "fr" ? lb() : e === "it" ? cb() : e === "jp" ? sb() : e === "pl" ? ub() : e === "ru" ? ob() : e === "uk" ? db() : mb()
  },
  fb = () => "Equipped",
  pb = () => "Equipado",
  wb = () => "已装备",
  bb = () => "Ausgerüstet",
  gb = () => "Equipado",
  yb = () => "Équipé",
  hb = () => "Equipaggiato",
  qb = () => "装備中",
  vb = () => "Założone",
  kb = () => "Экипировано",
  jb = () => "Оснащено",
  xb = () => "Đã trang bị",
  Jg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? fb() : e === "pt" ? pb() : e === "ch" ? wb() : e === "de" ? bb() : e === "es" ? gb() : e === "fr" ? yb() : e === "it" ? hb() : e === "jp" ? qb() : e === "pl" ? vb() : e === "ru" ? kb() : e === "uk" ? jb() : xb()
  },
  zb = () => "Public",
  Cb = () => "Pública",
  Ab = () => "公开",
  Pb = () => "Öffentlich",
  Tb = () => "Pública",
  Mb = () => "Public",
  Ub = () => "Pubblico",
  Rb = () => "公開",
  Sb = () => "Publiczna",
  Lb = () => "Публичная",
  $b = () => "Публічна",
  Db = () => "Công khai",
  Yg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? zb() : e === "pt" ? Cb() : e === "ch" ? Ab() : e === "de" ? Pb() : e === "es" ? Tb() : e === "fr" ? Mb() : e === "it" ? Ub() : e === "jp" ? Rb() : e === "pl" ? Sb() : e === "ru" ? Lb() : e === "uk" ? $b() : Db()
  },
  Fb = () => "Members only",
  Bb = () => "Somente membros",
  Eb = () => "仅限成员",
  Gb = () => "Nur Mitglieder",
  Nb = () => "Solo miembros",
  Ib = () => "Membres uniquement",
  Ob = () => "Solo membri",
  Hb = () => "メンバーのみ",
  Zb = () => "Tylko dla członków",
  Vb = () => "Только для участников",
  Kb = () => "Лише для учасників",
  Qb = () => "Chỉ thành viên",
  Xg = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Fb() : e === "pt" ? Bb() : e === "ch" ? Eb() : e === "de" ? Gb() : e === "es" ? Nb() : e === "fr" ? Ib() : e === "it" ? Ob() : e === "jp" ? Hb() : e === "pl" ? Zb() : e === "ru" ? Vb() : e === "uk" ? Kb() : Qb()
  },
  Wb = () => "Headquarters visibility",
  Jb = () => "Visibilidade da sede",
  Yb = () => "总部可见性",
  Xb = () => "Sichtbarkeit des Hauptquartiers",
  eg = () => "Visibilidad del cuartel general",
  rg = () => "Visibilité du quartier général",
  ng = () => "Visibilità del quartier generale",
  ag = () => "拠点の公開範囲",
  tg = () => "Widoczność siedziby",
  ig = () => "Видимость штаб-квартиры",
  _g = () => "Видимість штаб-квартири",
  lg = () => "Hiển thị trụ sở",
  ey = (n = {}, r = {}) => {
    const e = r.locale ?? a();
    return e === "en" ? Wb() : e === "pt" ? Jb() : e === "ch" ? Yb() : e === "de" ? Xb() : e === "es" ? eg() : e === "fr" ? rg() : e === "it" ? ng() : e === "jp" ? ag() : e === "pl" ? tg() : e === "ru" ? ig() : e === "uk" ? _g() : lg()
  };

function cg(n) {
  return typeof n == "function"
}

function sg(n, r) {
  if (cg(n)) {
    const i = n();
    return i === void 0 ? r : i
  }
  return n === void 0 ? r : n
}

function ug(n, r) {
  let e = C(null);
  const i = ve(() => sg(r, 250));

  function _(...l) {
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
        s.resolve(await n.apply(this, l))
      } catch (d) {
        s.reject(d)
      }
    }, t(e).timeout = setTimeout(t(e).runner, t(i)), t(e).promise
  }
  return _.cancel = async () => {
    (!t(e) || t(e).timeout === null) && (await new Promise(l => setTimeout(l, 0)), !t(e) || t(e).timeout === null) || (clearTimeout(t(e).timeout), t(e).reject("Cancelled"), f(e, null))
  }, _.runScheduledNow = async () => {
    var l, s;
    (!t(e) || !t(e).timeout) && (await new Promise(d => setTimeout(d, 0)), !t(e) || !t(e).timeout) || (clearTimeout(t(e).timeout), t(e).timeout = null, await ((s = (l = t(e)).runner) == null ? void 0 : s.call(l)))
  }, Object.defineProperty(_, "pending", {
    enumerable: !0,
    get() {
      var l;
      return !!((l = t(e)) != null && l.timeout)
    }
  }), _
}

function og() {}
var o, u;
class ry {
  constructor(r, e = 250) {
    p(this, o, C());
    p(this, u);
    f(c(this, o), r(), !0), this.cancel = this.cancel.bind(this), this.setImmediately = this.setImmediately.bind(this), this.updateImmediately = this.updateImmediately.bind(this), x(this, u, ug(() => {
      f(c(this, o), r(), !0)
    }, e)), ze(r, () => {
      c(this, u).call(this).catch(og)
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
    members_5: U,
    members_25: b,
    members_50: L,
    members_100: D,
    members_500: B,
    members_1000: G,
    pixels_100: I,
    pixels_1000: H,
    pixels_10000: g,
    pixels_100000: K,
    pixels_1000000: W,
    pixels_10000000: Y,
    dedicated_artists_10: y,
    age_30_days: h,
    age_60_days: ne,
    age_90_days: te,
    age_180_days: _e,
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
    members_50: $,
    members_100: F,
    members_500: E,
    members_1000: N,
    pixels_100: O,
    pixels_1000: Z,
    pixels_10000: V,
    pixels_100000: Q,
    pixels_1000000: J,
    pixels_10000000: X,
    dedicated_artists_10: ee,
    age_30_days: re,
    age_60_days: ae,
    age_90_days: ie,
    age_180_days: le,
    age_365_days: se,
    daily_members_10: ue,
    daily_members_25: de,
    daily_members_50: fe,
    daily_members_100: we,
    active_7_days: be
  },
  dg = {
    members: {
      common: U,
      uncommon: b,
      rare: L,
      epic: D,
      legendary: B,
      mythic: G
    },
    pixels: {
      common: I,
      uncommon: H,
      rare: g,
      epic: K,
      legendary: W,
      mythic: Y
    },
    dedicated_artists: {
      common: y
    },
    age: {
      common: h,
      uncommon: ne,
      rare: te,
      epic: _e,
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
  mg = {
    members: {
      common: R,
      uncommon: S,
      rare: $,
      epic: F,
      legendary: E,
      mythic: N
    },
    pixels: {
      common: O,
      uncommon: Z,
      rare: V,
      epic: Q,
      legendary: J,
      mythic: X
    },
    dedicated_artists: {
      common: ee
    },
    age: {
      common: re,
      uncommon: ae,
      rare: ie,
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
    common: __,
    uncommon: y_,
    rare: U_,
    epic: H_,
    legendary: tl,
    mythic: bl
  };

function ny(n, r) {
  var e, i, _, l;
  return r ? ((i = (e = dg[n]) == null ? void 0 : e[r]) == null ? void 0 : i.call(e)) ?? ((_ = m[n]) == null ? void 0 : _.call(m)) ?? z() : ((l = m[n]) == null ? void 0 : l.call(m)) ?? z()
}

function ay(n, r) {
  var e, i, _;
  return r ? ((i = (e = mg[n]) == null ? void 0 : e[r]) == null ? void 0 : i.call(e)) ?? "" : ((_ = w[n]) == null ? void 0 : _.call(w)) ?? ""
}

function ty(n) {
  return ge[n]()
}

function iy(n) {
  return n in ge
}

function _y(n) {
  switch (n) {
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

function ly(n) {
  switch (n) {
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
var fg = new Set(["$$slots", "$$events", "$$legacy", "fill"]),
  pg = P('<svg><path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"></path></svg>');

function cy(n, r) {
  let e = Ae(r, "fill", 3, "#5865F2"),
    i = M(r, fg);
  var _ = pg();
  T(_, () => ({
    viewBox: "0 0 256 199",
    width: "256",
    height: "199",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    ...i
  }));
  var l = je(_);
  xe(_), ke(() => Ce(l, "fill", e())), A(n, _)
}
var wg = new Set(["$$slots", "$$events", "$$legacy"]),
  bg = P('<svg><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"></path></svg>');

function sy(n, r) {
  let e = M(r, wg);
  var i = bg();
  T(i, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), A(n, i)
}
export {
  sy as A, Rg as B, Lg as C, ry as D, Sg as E, $g as F, Dg as G, Bg as H, Fg as I, ey as J, Xg as K, Yg as L, iy as M, _y as N, Jg as a, Qg as b, Wg as c, Hg as d, Og as e, cy as f, Eg as g, Ag as h, Cg as i, z as j, Mg as k, ty as l, ny as m, ly as n, Zg as o, Vg as p, Kg as q, zg as r, ay as s, xg as t, Gg as u, Ng as v, Ig as w, Pg as x, Tg as y, Ug as z
};