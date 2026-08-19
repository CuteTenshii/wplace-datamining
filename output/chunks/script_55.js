var zs = Object.defineProperty;
var Ts = Object.getPrototypeOf;
var As = Reflect.get;
var Un = t => {
  throw TypeError(t)
};
var Us = (t, r, e) => r in t ? zs(t, r, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : t[r] = e;
var sr = (t, r, e) => Us(t, typeof r != "symbol" ? r + "" : r, e),
  Cn = (t, r, e) => r.has(t) || Un("Cannot " + e);
var U = (t, r, e) => (Cn(t, r, "read from private field"), e ? e.call(t) : r.get(t)),
  qt = (t, r, e) => r.has(t) ? Un("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, e);
var Gt = (t, r, e) => (Cn(t, r, "access private method"), e);
var En = (t, r, e) => As(Ts(t), e, r);
import {
  g as P
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  o as Cs,
  a as Es
} from "./DDLxTm8y.js";
import {
  e as G,
  bO as jn,
  al as js,
  i as n,
  h as m,
  aX as Mr,
  a as k,
  k as Cr,
  l as In,
  p as an,
  g as on,
  y as Qr,
  q as Bs,
  bL as Ds,
  f as ir,
  d as c,
  s as v,
  r as l,
  t as H,
  m as he,
  u as N,
  b as ln,
  c as R,
  n as ns,
  aK as Rs,
  o as Fs,
  v as Ls,
  B as Xs
} from "./m4hpPlb8.js";
import {
  i as J
} from "./DqioGq2r.js";
import {
  b as Er,
  a as At,
  s as Ee,
  e as Bn,
  r as Pr,
  f as fn,
  i as Dn
} from "./BbR4hYuM.js";
import {
  g as Ys
} from "./Dgns1pBC.js";
import {
  A as Vr
} from "./DckcK6h8.js";
import {
  R as Hs
} from "./BLss1UMW.js";
import {
  s as y
} from "./riRxs-wl.js";
import {
  e as Jr
} from "./B3Jy6IkG.js";
import {
  b as ss
} from "./D4UFk1VW.js";
import {
  r as jr,
  p as or
} from "./RFHi9kKd.js";
import {
  h as Ws
} from "./CftFOTTa.js";
import {
  d as Ut,
  _ as xn,
  b as Tt,
  t as pe,
  u as gr,
  Z as Ns,
  e as Rn,
  Y as Gs
} from "./wXDXmxUO.js";
import {
  D as Os
} from "./BU_3OnEG.js";
import {
  A as Fn
} from "./CO162fqK.js";
import {
  R as yn
} from "./RpvfP-Pj.js";
import {
  T as wn,
  G as Ln
} from "./BYZQF2WO.js";
import {
  W as Vs
} from "./D-6wOMY7.js";
import {
  c as as
} from "./BKBS1EOp.js";
import {
  l as Zs,
  s as Ks,
  p as $r,
  a as Qs
} from "./Cf6t9BtS.js";
import {
  r as Js,
  a as $s,
  b as ea,
  p as Xn
} from "./DDsMuBn2.js";
import {
  s as is
} from "./CBbF8MzG.js";
import {
  t as Yn
} from "./nSsDwHT5.js";
import {
  b as pn
} from "./RXlOjj6I.js";
import {
  P as ta
} from "./D58CECtz.js";
import {
  R as ra
} from "./Cw1mWjVD.js";
import {
  b as Hn,
  S as na
} from "./CIkWP9Zo.js";
import {
  S as sa
} from "./DeUuXDWL.js";
import {
  C as aa
} from "./C--N7zEg.js";
import {
  C as ia
} from "./BNwByahr.js";
import {
  I as oa
} from "./BMXpLKhX.js";
import {
  c as la,
  a as Wn,
  p as ca,
  b as ua,
  M as _a,
  D as da
} from "./PybYFVwB.js";
import {
  a as fa
} from "./B0JoJohi.js";
import {
  b as pa
} from "./CtsjoaOH.js";
import {
  c as ha
} from "./jEDRT1k8.js";
import {
  n as va
} from "./TtjPt2fT.js";
import {
  p as ma
} from "./Bn4xbbpo.js";
import {
  p as ga
} from "./WRaI8Fie.js";
import {
  r as ba
} from "./C5ukCcxH.js";
import {
  t as hn
} from "./BJMWNMzA.js";
import {
  P as br
} from "./qRhS7Pqi.js";
import {
  R as xa
} from "./TTfhDrzz.js";
import {
  g as Zr,
  a as Nn
} from "./DqE1PXXj.js";
import {
  s as Gn
} from "./CiB29Aqe.js";
import {
  l as vn
} from "./Cp-hTSeP.js";
const ya = () => "Download",
  wa = () => "Download",
  ka = () => "下载",
  qa = () => "Download",
  Sa = () => "Descargar",
  Ia = () => "Télécharger",
  Ma = () => "Download",
  Pa = () => "ダウンロード",
  za = () => "Pobierz",
  Ta = () => "Скачать",
  Aa = () => "Завантажити",
  Ua = () => "Tải xuống",
  Ca = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? ya() : e === "pt" ? wa() : e === "ch" ? ka() : e === "de" ? qa() : e === "es" ? Sa() : e === "fr" ? Ia() : e === "it" ? Ma() : e === "jp" ? Pa() : e === "pl" ? za() : e === "ru" ? Ta() : e === "uk" ? Aa() : Ua()
  },
  Ea = () => "Filter",
  ja = () => "Filtro",
  Ba = () => "筛选",
  Da = () => "Filter",
  Ra = () => "Filtro",
  Fa = () => "Filtre",
  La = () => "Filtro",
  Xa = () => "フィルター",
  Ya = () => "Filtr",
  Ha = () => "Фильтр",
  Wa = () => "Фільтр",
  Na = () => "Bộ lọc",
  Ga = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Ea() : e === "pt" ? ja() : e === "ch" ? Ba() : e === "de" ? Da() : e === "es" ? Ra() : e === "fr" ? Fa() : e === "it" ? La() : e === "jp" ? Xa() : e === "pl" ? Ya() : e === "ru" ? Ha() : e === "uk" ? Wa() : Na()
  },
  Oa = () => "No alliance",
  Va = () => "Sem aliança",
  Za = () => "无联盟",
  Ka = () => "Ohne Allianz",
  Qa = () => "Sin alianza",
  Ja = () => "Sans alliance",
  $a = () => "Senza alleanza",
  ei = () => "同盟なし",
  ti = () => "Bez sojuszu",
  ri = () => "Без альянса",
  ni = () => "Без альянсу",
  si = () => "Không liên minh",
  b0 = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Oa() : e === "pt" ? Va() : e === "ch" ? Za() : e === "de" ? Ka() : e === "es" ? Qa() : e === "fr" ? Ja() : e === "it" ? $a() : e === "jp" ? ei() : e === "pl" ? ti() : e === "ru" ? ri() : e === "uk" ? ni() : si()
  },
  ai = () => "of",
  ii = () => "de",
  oi = () => "的",
  li = () => "von",
  ci = () => "de",
  ui = () => "de",
  _i = () => "di",
  di = () => "の",
  fi = () => "z",
  pi = () => "из",
  hi = () => "з",
  vi = () => "của",
  mi = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? ai() : e === "pt" ? ii() : e === "ch" ? oi() : e === "de" ? li() : e === "es" ? ci() : e === "fr" ? ui() : e === "it" ? _i() : e === "jp" ? di() : e === "pl" ? fi() : e === "ru" ? pi() : e === "uk" ? hi() : vi()
  },
  gi = () => "Optional",
  bi = () => "Opcional",
  xi = () => "可选",
  yi = () => "Optional",
  wi = () => "Opcional",
  ki = () => "Facultatif",
  qi = () => "Opzionale",
  Si = () => "オプション",
  Ii = () => "Opcjonalny",
  Mi = () => "Необязательно",
  Pi = () => "Необов'язково",
  zi = () => "Tùy chọn",
  Ti = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? gi() : e === "pt" ? bi() : e === "ch" ? xi() : e === "de" ? yi() : e === "es" ? wi() : e === "fr" ? ki() : e === "it" ? qi() : e === "jp" ? Si() : e === "pl" ? Ii() : e === "ru" ? Mi() : e === "uk" ? Pi() : zi()
  },
  Ai = () => "Players",
  Ui = () => "Jogadores",
  Ci = () => "玩家",
  Ei = () => "Spieler",
  ji = () => "Jugadores",
  Bi = () => "Joueurs",
  Di = () => "Giocatori",
  Ri = () => "プレイヤー",
  Fi = () => "Gracze",
  Li = () => "Игроки",
  Xi = () => "Гравці",
  Yi = () => "Người chơi",
  Hi = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Ai() : e === "pt" ? Ui() : e === "ch" ? Ci() : e === "de" ? Ei() : e === "es" ? ji() : e === "fr" ? Bi() : e === "it" ? Di() : e === "jp" ? Ri() : e === "pl" ? Fi() : e === "ru" ? Li() : e === "uk" ? Xi() : Yi()
  },
  Wi = () => "Reset",
  Ni = () => "Redefinir",
  Gi = () => "重置",
  Oi = () => "Zurücksetzen",
  Vi = () => "Restablecer",
  Zi = () => "Réinitialiser",
  Ki = () => "Reimposta",
  Qi = () => "リセット",
  Ji = () => "Zresetuj",
  $i = () => "Сбросить",
  eo = () => "Скинути",
  to = () => "Đặt lại",
  ro = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Wi() : e === "pt" ? Ni() : e === "ch" ? Gi() : e === "de" ? Oi() : e === "es" ? Vi() : e === "fr" ? Zi() : e === "it" ? Ki() : e === "jp" ? Qi() : e === "pl" ? Ji() : e === "ru" ? $i() : e === "uk" ? eo() : to()
  },
  no = () => "Applying will restore the selected pixels to this snapshot.",
  so = () => "Ao aplicar, os pixels selecionados serão restaurados para este momento.",
  ao = () => "应用后将把选定像素恢复到此快照。",
  io = () => "Beim Anwenden werden die ausgewählten Pixel auf diesen Zeitpunkt zurückgesetzt.",
  oo = () => "Al aplicar, los píxeles seleccionados se restaurarán a esta instantánea.",
  lo = () => "Appliquer restaurera les pixels sélectionnés vers cet instantané.",
  co = () => "Applicando verranno ripristinati i pixel selezionati a questa istantanea.",
  uo = () => "適用すると、選択したピクセルがこのスナップショットに復元されます。",
  _o = () => "Zastosowanie przywróci wybrane piksele do tej migawki.",
  fo = () => "При применении выбранные пиксели будут восстановлены до этого снимка.",
  po = () => "При застосуванні вибрані пікселі будуть відновлені до цього знімка.",
  ho = () => "Áp dụng sẽ khôi phục các pixel đã chọn về ảnh chụp này.",
  vo = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? no() : e === "pt" ? so() : e === "ch" ? ao() : e === "de" ? io() : e === "es" ? oo() : e === "fr" ? lo() : e === "it" ? co() : e === "jp" ? uo() : e === "pl" ? _o() : e === "ru" ? fo() : e === "uk" ? po() : ho()
  },
  mo = () => "Apply Revert",
  go = () => "Aplicar Reversão",
  bo = () => "应用回退",
  xo = () => "Wiederherstellung anwenden",
  yo = () => "Aplicar Reversión",
  wo = () => "Appliquer la Restauration",
  ko = () => "Applica ripristino",
  qo = () => "復元を適用",
  So = () => "Zastosuj cofnięcie",
  Io = () => "Применить откат",
  Mo = () => "Застосувати відкат",
  Po = () => "Áp dụng hoàn tác",
  zo = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? mo() : e === "pt" ? go() : e === "ch" ? bo() : e === "de" ? xo() : e === "es" ? yo() : e === "fr" ? wo() : e === "it" ? ko() : e === "jp" ? qo() : e === "pl" ? So() : e === "ru" ? Io() : e === "uk" ? Mo() : Po()
  },
  To = t => `Successfully reverted ${t.count} pixels`,
  Ao = t => `${t.count} pixels revertidos com sucesso`,
  Uo = t => `成功回退 ${t.count} 个像素`,
  Co = t => `${t.count} Pixel erfolgreich zurückgesetzt`,
  Eo = t => `${t.count} píxeles revertidos exitosamente`,
  jo = t => `${t.count} pixels restaurés avec succès`,
  Bo = t => `${t.count} pixel ripristinati con successo`,
  Do = t => `${t.count} ピクセルの復元に成功しました`,
  Ro = t => `Pomyślnie cofnięto ${t.count} pikseli`,
  Fo = t => `Успешно откачено ${t.count} пикселей`,
  Lo = t => `Успішно відкочено ${t.count} пікселів`,
  Xo = t => `Đã hoàn tác thành công ${t.count} pixel`,
  Yo = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? To(t) : e === "pt" ? Ao(t) : e === "ch" ? Uo(t) : e === "de" ? Co(t) : e === "es" ? Eo(t) : e === "fr" ? jo(t) : e === "it" ? Bo(t) : e === "jp" ? Do(t) : e === "pl" ? Ro(t) : e === "ru" ? Fo(t) : e === "uk" ? Lo(t) : Xo(t)
  },
  Ho = () => "Reverting pixels...",
  Wo = () => "Revertendo pixels...",
  No = () => "正在回退像素...",
  Go = () => "Pixel werden zurückgesetzt...",
  Oo = () => "Revirtiendo píxeles...",
  Vo = () => "Restauration des pixels...",
  Zo = () => "Ripristino pixel in corso...",
  Ko = () => "ピクセルを復元中...",
  Qo = () => "Cofanie pikseli...",
  Jo = () => "Откат пикселей...",
  $o = () => "Відкат пікселів...",
  el = () => "Đang hoàn tác pixel...",
  tl = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Ho() : e === "pt" ? Wo() : e === "ch" ? No() : e === "de" ? Go() : e === "es" ? Oo() : e === "fr" ? Vo() : e === "it" ? Zo() : e === "jp" ? Ko() : e === "pl" ? Qo() : e === "ru" ? Jo() : e === "uk" ? $o() : el()
  },
  rl = () => "Events",
  nl = () => "Eventos",
  sl = () => "事件",
  al = () => "Ereignisse",
  il = () => "Eventos",
  ol = () => "Événements",
  ll = () => "Eventi",
  cl = () => "イベント",
  ul = () => "Zdarzenia",
  _l = () => "События",
  dl = () => "Події",
  fl = () => "Sự kiện",
  pl = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? rl() : e === "pt" ? nl() : e === "ch" ? sl() : e === "de" ? al() : e === "es" ? il() : e === "fr" ? ol() : e === "it" ? ll() : e === "jp" ? cl() : e === "pl" ? ul() : e === "ru" ? _l() : e === "uk" ? dl() : fl()
  },
  hl = () => "Pixels",
  vl = () => "Pixels",
  ml = () => "像素",
  gl = () => "Pixel",
  bl = () => "Píxeles",
  xl = () => "Pixels",
  yl = () => "Pixel",
  wl = () => "ピクセル",
  kl = () => "Piksele",
  ql = () => "Пиксели",
  Sl = () => "Пікселі",
  Il = () => "Pixel",
  On = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? hl() : e === "pt" ? vl() : e === "ch" ? ml() : e === "de" ? gl() : e === "es" ? bl() : e === "fr" ? xl() : e === "it" ? yl() : e === "jp" ? wl() : e === "pl" ? kl() : e === "ru" ? ql() : e === "uk" ? Sl() : Il()
  },
  Ml = () => "Choose the moment you want to restore.",
  Pl = () => "Escolha o momento que você quer restaurar.",
  zl = () => "选择你想恢复的时刻。",
  Tl = () => "Wähle den Zeitpunkt, den du wiederherstellen willst.",
  Al = () => "Elige el momento que quieres restaurar.",
  Ul = () => "Choisissez le moment que vous voulez restaurer.",
  Cl = () => "Scegli il momento che vuoi ripristinare.",
  El = () => "復元したい時点を選択してください。",
  jl = () => "Wybierz moment, który chcesz przywrócić.",
  Bl = () => "Выберите момент, который хотите восстановить.",
  Dl = () => "Оберіть момент, який хочете відновити.",
  Rl = () => "Chọn thời điểm bạn muốn khôi phục.",
  mn = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Ml() : e === "pt" ? Pl() : e === "ch" ? zl() : e === "de" ? Tl() : e === "es" ? Al() : e === "fr" ? Ul() : e === "it" ? Cl() : e === "jp" ? El() : e === "pl" ? jl() : e === "ru" ? Bl() : e === "uk" ? Dl() : Rl()
  },
  Fl = () => "Use arrow keys to move through snapshots.",
  Ll = () => "Use as setas do teclado para navegar pelos momentos.",
  Xl = () => "使用方向键浏览快照。",
  Yl = () => "Verwende die Pfeiltasten, um zwischen den Zeitpunkten zu wechseln.",
  Hl = () => "Usa las flechas para moverte entre las instantáneas.",
  Wl = () => "Utilisez les flèches pour parcourir les instantanés.",
  Nl = () => "Usa le frecce per passare tra le istantanee.",
  Gl = () => "矢印キーでスナップショット間を移動できます。",
  Ol = () => "Użyj strzałek, aby przechodzić między migawkami.",
  Vl = () => "Используйте стрелки для перемещения между снимками.",
  Zl = () => "Використовуйте стрілки для переміщення між знімками.",
  Kl = () => "Dùng phím mũi tên để di chuyển giữa các ảnh chụp.",
  Ql = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Fl() : e === "pt" ? Ll() : e === "ch" ? Xl() : e === "de" ? Yl() : e === "es" ? Hl() : e === "fr" ? Wl() : e === "it" ? Nl() : e === "jp" ? Gl() : e === "pl" ? Ol() : e === "ru" ? Vl() : e === "uk" ? Zl() : Kl()
  },
  Jl = () => "Loading modification history...",
  $l = () => "Carregando histórico de modificações...",
  ec = () => "正在加载修改历史...",
  tc = () => "Änderungsverlauf wird geladen...",
  rc = () => "Cargando historial de modificaciones...",
  nc = () => "Chargement de l'historique des modifications...",
  sc = () => "Caricamento cronologia modifiche...",
  ac = () => "変更履歴を読み込み中...",
  ic = () => "Ładowanie historii modyfikacji...",
  oc = () => "Загрузка истории изменений...",
  lc = () => "Завантаження історії змін...",
  cc = () => "Đang tải lịch sử thay đổi...",
  uc = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Jl() : e === "pt" ? $l() : e === "ch" ? ec() : e === "de" ? tc() : e === "es" ? rc() : e === "fr" ? nc() : e === "it" ? sc() : e === "jp" ? ac() : e === "pl" ? ic() : e === "ru" ? oc() : e === "uk" ? lc() : cc()
  },
  _c = () => "Compare the selected pixels by how many edits back each one goes.",
  dc = () => "Compare the selected pixels by how many edits back each one goes.",
  fc = () => "Compare the selected pixels by how many edits back each one goes.",
  pc = () => "Compare the selected pixels by how many edits back each one goes.",
  hc = () => "Compara los píxeles seleccionados según cuántas ediciones atrás llega cada uno.",
  vc = () => "Compare the selected pixels by how many edits back each one goes.",
  mc = () => "Confronta i pixel selezionati in base al numero di modifiche precedenti di ciascuno.",
  gc = () => "Compare the selected pixels by how many edits back each one goes.",
  bc = () => "Compare the selected pixels by how many edits back each one goes.",
  xc = () => "Compare the selected pixels by how many edits back each one goes.",
  yc = () => "Compare the selected pixels by how many edits back each one goes.",
  wc = () => "Compare the selected pixels by how many edits back each one goes.",
  Vn = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? _c() : e === "pt" ? dc() : e === "ch" ? fc() : e === "de" ? pc() : e === "es" ? hc() : e === "fr" ? vc() : e === "it" ? mc() : e === "jp" ? gc() : e === "pl" ? bc() : e === "ru" ? xc() : e === "uk" ? yc() : wc()
  },
  kc = () => "Browse real paint moments and restore the exact historical state.",
  qc = () => "Browse real paint moments and restore the exact historical state.",
  Sc = () => "Browse real paint moments and restore the exact historical state.",
  Ic = () => "Browse real paint moments and restore the exact historical state.",
  Mc = () => "Navega por momentos reales de pintura y restaura el estado histórico exacto.",
  Pc = () => "Browse real paint moments and restore the exact historical state.",
  zc = () => "Esplora i momenti reali di pittura e ripristina lo stato storico esatto.",
  Tc = () => "Browse real paint moments and restore the exact historical state.",
  Ac = () => "Browse real paint moments and restore the exact historical state.",
  Uc = () => "Browse real paint moments and restore the exact historical state.",
  Cc = () => "Browse real paint moments and restore the exact historical state.",
  Ec = () => "Browse real paint moments and restore the exact historical state.",
  Zn = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? kc() : e === "pt" ? qc() : e === "ch" ? Sc() : e === "de" ? Ic() : e === "es" ? Mc() : e === "fr" ? Pc() : e === "it" ? zc() : e === "jp" ? Tc() : e === "pl" ? Ac() : e === "ru" ? Uc() : e === "uk" ? Cc() : Ec()
  },
  jc = () => "Reverse Pixels",
  Bc = () => "Reverter Pixels",
  Dc = () => "回退像素",
  Rc = () => "Pixel zurücksetzen",
  Fc = () => "Revertir Píxeles",
  Lc = () => "Inverser les Pixels",
  Xc = () => "Ripristina pixel",
  Yc = () => "ピクセルを元に戻す",
  Hc = () => "Cofnij piksele",
  Wc = () => "Откатить пиксели",
  Nc = () => "Відкотити пікселі",
  Gc = () => "Hoàn tác pixel",
  os = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? jc() : e === "pt" ? Bc() : e === "ch" ? Dc() : e === "de" ? Rc() : e === "es" ? Fc() : e === "fr" ? Lc() : e === "it" ? Xc() : e === "jp" ? Yc() : e === "pl" ? Hc() : e === "ru" ? Wc() : e === "uk" ? Nc() : Gc()
  },
  Oc = t => `Revert ${t.count} selected pixels to a previous state`,
  Vc = t => `Reverter ${t.count} pixels selecionados para um estado anterior`,
  Zc = t => `将 ${t.count} 个选定像素恢复到之前的状态`,
  Kc = t => `${t.count} ausgewählte Pixel auf einen früheren Zustand zurücksetzen`,
  Qc = t => `Revertir ${t.count} píxeles seleccionados a un estado anterior`,
  Jc = t => `Restaurer ${t.count} pixels sélectionnés à un état précédent`,
  $c = t => `Ripristina ${t.count} pixel selezionati a uno stato precedente`,
  eu = t => `選択した ${t.count} ピクセルを以前の状態に戻す`,
  tu = t => `Przywróć ${t.count} wybranych pikseli do poprzedniego stanu`,
  ru = t => `Вернуть ${t.count} выбранных пикселей к предыдущему состоянию`,
  nu = t => `Повернути ${t.count} вибраних пікселів до попереднього стану`,
  su = t => `Khôi phục ${t.count} pixel đã chọn về trạng thái trước đó`,
  au = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Oc(t) : e === "pt" ? Vc(t) : e === "ch" ? Zc(t) : e === "de" ? Kc(t) : e === "es" ? Qc(t) : e === "fr" ? Jc(t) : e === "it" ? $c(t) : e === "jp" ? eu(t) : e === "pl" ? tu(t) : e === "ru" ? ru(t) : e === "uk" ? nu(t) : su(t)
  },
  iu = () => "Preview",
  ou = () => "Prévia",
  lu = () => "预览",
  cu = () => "Vorschau",
  uu = () => "Vista previa",
  _u = () => "Aperçu",
  du = () => "Anteprima",
  fu = () => "プレビュー",
  pu = () => "Podgląd",
  hu = () => "Предпросмотр",
  vu = () => "Попередній перегляд",
  mu = () => "Xem trước",
  gu = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? iu() : e === "pt" ? ou() : e === "ch" ? lu() : e === "de" ? cu() : e === "es" ? uu() : e === "fr" ? _u() : e === "it" ? du() : e === "jp" ? fu() : e === "pl" ? pu() : e === "ru" ? hu() : e === "uk" ? vu() : mu()
  },
  bu = t => `Snapshot ${t.current} of ${t.total}`,
  xu = t => `Momento ${t.current} de ${t.total}`,
  yu = t => `快照 ${t.current} / ${t.total}`,
  wu = t => `Zeitpunkt ${t.current} von ${t.total}`,
  ku = t => `Instantánea ${t.current} de ${t.total}`,
  qu = t => `Instantané ${t.current} sur ${t.total}`,
  Su = t => `Istantanea ${t.current} di ${t.total}`,
  Iu = t => `スナップショット ${t.current} / ${t.total}`,
  Mu = t => `Migawka ${t.current} z ${t.total}`,
  Pu = t => `Снимок ${t.current} из ${t.total}`,
  zu = t => `Знімок ${t.current} з ${t.total}`,
  Tu = t => `Ảnh chụp ${t.current} / ${t.total}`,
  Au = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? bu(t) : e === "pt" ? xu(t) : e === "ch" ? yu(t) : e === "de" ? wu(t) : e === "es" ? ku(t) : e === "fr" ? qu(t) : e === "it" ? Su(t) : e === "jp" ? Iu(t) : e === "pl" ? Mu(t) : e === "ru" ? Pu(t) : e === "uk" ? zu(t) : Tu(t)
  },
  Uu = () => "Snapshots",
  Cu = () => "Momentos",
  Eu = () => "快照",
  ju = () => "Zeitpunkte",
  Bu = () => "Instantáneas",
  Du = () => "Instantanés",
  Ru = () => "Istantanee",
  Fu = () => "スナップショット",
  Lu = () => "Migawki",
  Xu = () => "Снимки",
  Yu = () => "Знімки",
  Hu = () => "Ảnh chụp",
  Wu = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Uu() : e === "pt" ? Cu() : e === "ch" ? Eu() : e === "de" ? ju() : e === "es" ? Bu() : e === "fr" ? Du() : e === "it" ? Ru() : e === "jp" ? Fu() : e === "pl" ? Lu() : e === "ru" ? Xu() : e === "uk" ? Yu() : Hu()
  },
  Nu = () => "Select the area's first corner",
  Gu = () => "Selecione o primeiro canto da área",
  Ou = () => "选择区域的第一个角",
  Vu = () => "Erste Ecke des Bereichs auswählen",
  Zu = () => "Selecciona la primera esquina del área",
  Ku = () => "Sélectionnez le premier coin de la zone",
  Qu = () => "Seleziona il primo angolo dell'area",
  Ju = () => "領域の最初の角を選択",
  $u = () => "Wybierz pierwszy narożnik obszaru",
  e_ = () => "Выберите первый угол области",
  t_ = () => "Виберіть перший кут області",
  r_ = () => "Chọn góc đầu tiên của vùng",
  x0 = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Nu() : e === "pt" ? Gu() : e === "ch" ? Ou() : e === "de" ? Vu() : e === "es" ? Zu() : e === "fr" ? Ku() : e === "it" ? Qu() : e === "jp" ? Ju() : e === "pl" ? $u() : e === "ru" ? e_() : e === "uk" ? t_() : r_()
  },
  n_ = () => "Select the area's opposite corner",
  s_ = () => "Selecione o canto oposto da área",
  a_ = () => "选择区域的对角",
  i_ = () => "Gegenüberliegende Ecke des Bereichs auswählen",
  o_ = () => "Selecciona la esquina opuesta del área",
  l_ = () => "Sélectionnez le coin opposé de la zone",
  c_ = () => "Seleziona l'angolo opposto dell'area",
  u_ = () => "領域の反対側の角を選択",
  __ = () => "Wybierz przeciwległy narożnik obszaru",
  d_ = () => "Выберите противоположный угол области",
  f_ = () => "Виберіть протилежний кут області",
  p_ = () => "Chọn góc đối diện của vùng",
  y0 = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? n_() : e === "pt" ? s_() : e === "ch" ? a_() : e === "de" ? i_() : e === "es" ? o_() : e === "fr" ? l_() : e === "it" ? c_() : e === "jp" ? u_() : e === "pl" ? __() : e === "ru" ? d_() : e === "uk" ? f_() : p_()
  },
  h_ = () => "This browser cannot export timelapse videos.",
  v_ = () => "Este navegador não consegue exportar vídeos de timelapse.",
  m_ = () => "This browser cannot export timelapse videos.",
  g_ = () => "This browser cannot export timelapse videos.",
  b_ = () => "This browser cannot export timelapse videos.",
  x_ = () => "This browser cannot export timelapse videos.",
  y_ = () => "Questo browser non può esportare video timelapse.",
  w_ = () => "This browser cannot export timelapse videos.",
  k_ = () => "This browser cannot export timelapse videos.",
  q_ = () => "This browser cannot export timelapse videos.",
  S_ = () => "This browser cannot export timelapse videos.",
  I_ = () => "This browser cannot export timelapse videos.",
  at = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? h_() : e === "pt" ? v_() : e === "ch" ? m_() : e === "de" ? g_() : e === "es" ? b_() : e === "fr" ? x_() : e === "it" ? y_() : e === "jp" ? w_() : e === "pl" ? k_() : e === "ru" ? q_() : e === "uk" ? S_() : I_()
  },
  M_ = () => "Select at least one player.",
  P_ = () => "Selecione pelo menos um jogador.",
  z_ = () => "请至少选择一名玩家。",
  T_ = () => "Wähle mindestens einen Spieler aus.",
  A_ = () => "Selecciona al menos un jugador.",
  U_ = () => "Sélectionnez au moins un joueur.",
  C_ = () => "Seleziona almeno un giocatore.",
  E_ = () => "プレイヤーを1人以上選択してください。",
  j_ = () => "Wybierz co najmniej jednego gracza.",
  B_ = () => "Выберите хотя бы одного игрока.",
  D_ = () => "Виберіть щонайменше одного гравця.",
  R_ = () => "Hãy chọn ít nhất một người chơi.",
  gn = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? M_() : e === "pt" ? P_() : e === "ch" ? z_() : e === "de" ? T_() : e === "es" ? A_() : e === "fr" ? U_() : e === "it" ? C_() : e === "jp" ? E_() : e === "pl" ? j_() : e === "ru" ? B_() : e === "uk" ? D_() : R_()
  },
  F_ = t => `Phone verification required for ${t.count} players`,
  L_ = t => `Verificação por telefone exigida para ${t.count} jogadores`,
  X_ = t => `有 ${t.count} 名玩家需要完成手机验证`,
  Y_ = t => `Telefonverifizierung für ${t.count} Spieler erforderlich`,
  H_ = t => `Verificación por teléfono requerida para ${t.count} jugadores`,
  W_ = t => `Vérification par téléphone requise pour ${t.count} joueurs`,
  N_ = t => `Verifica telefonica richiesta per ${t.count} giocatori`,
  G_ = t => `${t.count} 人のプレイヤーには電話認証が必要です`,
  O_ = t => `Wymagana weryfikacja telefonu dla ${t.count} graczy`,
  V_ = t => `Для ${t.count} игроков требуется подтверждение по телефону`,
  Z_ = t => `Для ${t.count} гравців потрібна перевірка телефону`,
  K_ = t => `Cần xác minh điện thoại cho ${t.count} người chơi`,
  Q_ = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? F_(t) : e === "pt" ? L_(t) : e === "ch" ? X_(t) : e === "de" ? Y_(t) : e === "es" ? H_(t) : e === "fr" ? W_(t) : e === "it" ? N_(t) : e === "jp" ? G_(t) : e === "pl" ? O_(t) : e === "ru" ? V_(t) : e === "uk" ? Z_(t) : K_(t)
  },
  J_ = t => `Cleared ${t.count} headquarters paint events`,
  $_ = t => `${t.count} eventos de pintura do quartel general limpos`,
  ed = t => `已清除 ${t.count} 条总部绘制记录`,
  td = t => `${t.count} Malereignisse des Hauptquartiers gelöscht`,
  rd = t => `${t.count} eventos de pintura del cuartel general eliminados`,
  nd = t => `${t.count} événements de peinture du quartier général effacés`,
  sd = t => `${t.count} eventi di pittura del quartier generale cancellati`,
  ad = t => `拠点のペイントイベントを ${t.count} 件消去しました`,
  id = t => `Wyczyszczono ${t.count} zdarzeń malowania w siedzibie`,
  od = t => `Очищено событий рисования в штаб-квартире: ${t.count}`,
  ld = t => `Очищено ${t.count} подій малювання у штаб-квартирі`,
  cd = t => `Đã xóa ${t.count} sự kiện tô của trụ sở`,
  ud = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? J_(t) : e === "pt" ? $_(t) : e === "ch" ? ed(t) : e === "de" ? td(t) : e === "es" ? rd(t) : e === "fr" ? nd(t) : e === "it" ? sd(t) : e === "jp" ? ad(t) : e === "pl" ? id(t) : e === "ru" ? od(t) : e === "uk" ? ld(t) : cd(t)
  },
  _d = () => "Selected headquarters area saved",
  dd = () => "Area selecionada do quartel general salva",
  fd = () => "所选总部区域已保存",
  pd = () => "Ausgewählter Hauptquartier-Bereich gespeichert",
  hd = () => "Área seleccionada del cuartel general guardada",
  vd = () => "Zone sélectionnée du quartier général enregistrée",
  md = () => "Area selezionata del quartier generale salvata",
  gd = () => "選択した拠点のエリアを保存しました",
  bd = () => "Zapisano wybrany obszar siedziby",
  xd = () => "Выбранная область штаб-квартиры сохранена",
  yd = () => "Вибрану область штаб-квартири збережено",
  wd = () => "Đã lưu vùng trụ sở đã chọn",
  kd = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? _d() : e === "pt" ? dd() : e === "ch" ? fd() : e === "de" ? pd() : e === "es" ? hd() : e === "fr" ? vd() : e === "it" ? md() : e === "jp" ? gd() : e === "pl" ? bd() : e === "ru" ? xd() : e === "uk" ? yd() : wd()
  },
  qd = () => "Selected player IDs copied",
  Sd = () => "IDs dos jogadores selecionados copiados",
  Id = () => "已复制所选玩家 ID",
  Md = () => "IDs der ausgewählten Spieler kopiert",
  Pd = () => "IDs de los jugadores seleccionados copiados",
  zd = () => "IDs des joueurs sélectionnés copiés",
  Td = () => "ID dei giocatori selezionati copiati",
  Ad = () => "選択したプレイヤーIDをコピーしました",
  Ud = () => "Skopiowano ID wybranych graczy",
  Cd = () => "ID выбранных игроков скопированы",
  Ed = () => "ID вибраних гравців скопійовано",
  jd = () => "Đã sao chép ID của những người chơi đã chọn",
  Bd = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? qd() : e === "pt" ? Sd() : e === "ch" ? Id() : e === "de" ? Md() : e === "es" ? Pd() : e === "fr" ? zd() : e === "it" ? Td() : e === "jp" ? Ad() : e === "pl" ? Ud() : e === "ru" ? Cd() : e === "uk" ? Ed() : jd()
  },
  Dd = () => "Select a player from a pixel",
  Rd = () => "Selecionar jogador por um pixel",
  Fd = () => "通过像素选择玩家",
  Ld = () => "Spieler über einen Pixel auswählen",
  Xd = () => "Seleccionar un jugador desde un píxel",
  Yd = () => "Sélectionner un joueur à partir d'un pixel",
  Hd = () => "Seleziona un giocatore da un pixel",
  Wd = () => "ピクセルからプレイヤーを選択",
  Nd = () => "Wybierz gracza z piksela",
  Gd = () => "Выбрать игрока по пикселю",
  Od = () => "Вибрати гравця за пікселем",
  Vd = () => "Chọn người chơi từ một pixel",
  Zd = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Dd() : e === "pt" ? Rd() : e === "ch" ? Fd() : e === "de" ? Ld() : e === "es" ? Xd() : e === "fr" ? Yd() : e === "it" ? Hd() : e === "jp" ? Wd() : e === "pl" ? Nd() : e === "ru" ? Gd() : e === "uk" ? Od() : Vd()
  },
  Kd = () => "Select filtered",
  Qd = () => "Selecionar filtrados",
  Jd = () => "选择筛选结果",
  $d = () => "Gefilterte auswählen",
  ef = () => "Seleccionar filtrados",
  tf = () => "Sélectionner les filtrés",
  rf = () => "Seleziona filtrati",
  nf = () => "絞り込み結果を選択",
  sf = () => "Zaznacz filtrowane",
  af = () => "Выбрать отфильтрованных",
  of = () => "Вибрати відфільтрованих",
  lf = () => "Chọn mục đã lọc",
  cf = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Kd() : e === "pt" ? Qd() : e === "ch" ? Jd() : e === "de" ? $d() : e === "es" ? ef() : e === "fr" ? tf() : e === "it" ? rf() : e === "jp" ? nf() : e === "pl" ? sf() : e === "ru" ? af() : e === "uk" ? of() : lf()
  },
  uf = () => "Clear filtered",
  _f = () => "Limpar filtrados",
  df = () => "清除筛选结果",
  ff = () => "Gefilterte abwählen",
  pf = () => "Deseleccionar filtrados",
  hf = () => "Désélectionner les filtrés",
  vf = () => "Deseleziona filtrati",
  mf = () => "絞り込み結果の選択を解除",
  gf = () => "Odznacz filtrowane",
  bf = () => "Снять выбор с отфильтрованных",
  xf = () => "Очистити відфільтрованих",
  yf = () => "Bỏ chọn mục đã lọc",
  wf = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? uf() : e === "pt" ? _f() : e === "ch" ? df() : e === "de" ? ff() : e === "es" ? pf() : e === "fr" ? hf() : e === "it" ? vf() : e === "jp" ? mf() : e === "pl" ? gf() : e === "ru" ? bf() : e === "uk" ? xf() : yf()
  },
  kf = () => "All roles",
  qf = () => "Todos os cargos",
  Sf = () => "所有角色",
  If = () => "Alle Rollen",
  Mf = () => "Todos los cargos",
  Pf = () => "Tous les rôles",
  zf = () => "Tutti i ruoli",
  Tf = () => "すべてのロール",
  Af = () => "Wszystkie role",
  Uf = () => "Все роли",
  Cf = () => "Усі ролі",
  Ef = () => "Tất cả vai trò",
  jf = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? kf() : e === "pt" ? qf() : e === "ch" ? Sf() : e === "de" ? If() : e === "es" ? Mf() : e === "fr" ? Pf() : e === "it" ? zf() : e === "jp" ? Tf() : e === "pl" ? Af() : e === "ru" ? Uf() : e === "uk" ? Cf() : Ef()
  },
  Bf = () => "Not painted",
  Df = () => "Não pintado",
  Rf = () => "未绘制",
  Ff = () => "Nicht bemalt",
  Lf = () => "Sin pintar",
  Xf = () => "Non peint",
  Yf = () => "Non dipinto",
  Hf = () => "未ペイント",
  Wf = () => "Niepomalowany",
  Nf = () => "Не нарисовано",
  Gf = () => "Не намальовано",
  Of = () => "Chưa tô",
  en = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Bf() : e === "pt" ? Df() : e === "ch" ? Rf() : e === "de" ? Ff() : e === "es" ? Lf() : e === "fr" ? Xf() : e === "it" ? Yf() : e === "jp" ? Hf() : e === "pl" ? Wf() : e === "ru" ? Nf() : e === "uk" ? Gf() : Of()
  },
  Vf = () => "Selected area",
  Zf = () => "Area selecionada",
  Kf = () => "已选区域",
  Qf = () => "Ausgewählter Bereich",
  Jf = () => "Área seleccionada",
  $f = () => "Zone sélectionnée",
  ep = () => "Area selezionata",
  tp = () => "選択したエリア",
  rp = () => "Wybrany obszar",
  np = () => "Выбранная область",
  sp = () => "Вибрана область",
  ap = () => "Khu vực đã chọn",
  ip = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Vf() : e === "pt" ? Zf() : e === "ch" ? Kf() : e === "de" ? Qf() : e === "es" ? Jf() : e === "fr" ? $f() : e === "it" ? ep() : e === "jp" ? tp() : e === "pl" ? rp() : e === "ru" ? np() : e === "uk" ? sp() : ap()
  },
  op = () => "Any",
  lp = () => "Qualquer",
  cp = () => "任意",
  up = () => "Beliebig",
  _p = () => "Cualquiera",
  dp = () => "Tous",
  fp = () => "Qualsiasi",
  pp = () => "指定なし",
  hp = () => "Dowolny",
  vp = () => "Любой",
  mp = () => "Будь-який",
  gp = () => "Bất kỳ",
  Kn = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? op() : e === "pt" ? lp() : e === "ch" ? cp() : e === "de" ? up() : e === "es" ? _p() : e === "fr" ? dp() : e === "it" ? fp() : e === "jp" ? pp() : e === "pl" ? hp() : e === "ru" ? vp() : e === "uk" ? mp() : gp()
  },
  bp = () => "Name or ID",
  xp = () => "Nome ou ID",
  yp = () => "名称或 ID",
  wp = () => "Name oder ID",
  kp = () => "Nombre o ID",
  qp = () => "Nom ou ID",
  Sp = () => "Nome o ID",
  Ip = () => "名前またはID",
  Mp = () => "Nazwa lub ID",
  Pp = () => "Имя или ID",
  zp = () => "Ім'я або ID",
  Tp = () => "Tên hoặc ID",
  Ap = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? bp() : e === "pt" ? xp() : e === "ch" ? yp() : e === "de" ? wp() : e === "es" ? kp() : e === "fr" ? qp() : e === "it" ? Sp() : e === "jp" ? Ip() : e === "pl" ? Mp() : e === "ru" ? Pp() : e === "uk" ? zp() : Tp()
  },
  Up = () => "User ID From",
  Cp = () => "ID de usuário inicial",
  Ep = () => "起始用户 ID",
  jp = () => "Nutzer-ID von",
  Bp = () => "ID de usuario desde",
  Dp = () => "ID utilisateur de",
  Rp = () => "ID utente da",
  Fp = () => "ユーザーID（開始）",
  Lp = () => "ID użytkownika od",
  Xp = () => "ID пользователя от",
  Yp = () => "ID користувача від",
  Hp = () => "ID người dùng từ",
  Wp = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Up() : e === "pt" ? Cp() : e === "ch" ? Ep() : e === "de" ? jp() : e === "es" ? Bp() : e === "fr" ? Dp() : e === "it" ? Rp() : e === "jp" ? Fp() : e === "pl" ? Lp() : e === "ru" ? Xp() : e === "uk" ? Yp() : Hp()
  },
  Np = () => "User ID To",
  Gp = () => "ID de usuário final",
  Op = () => "结束用户 ID",
  Vp = () => "Nutzer-ID bis",
  Zp = () => "ID de usuario hasta",
  Kp = () => "ID utilisateur à",
  Qp = () => "ID utente a",
  Jp = () => "ユーザーID（終了）",
  $p = () => "ID użytkownika do",
  eh = () => "ID пользователя до",
  th = () => "ID користувача до",
  rh = () => "ID người dùng đến",
  nh = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Np() : e === "pt" ? Gp() : e === "ch" ? Op() : e === "de" ? Vp() : e === "es" ? Zp() : e === "fr" ? Kp() : e === "it" ? Qp() : e === "jp" ? Jp() : e === "pl" ? $p() : e === "ru" ? eh() : e === "uk" ? th() : rh()
  },
  sh = () => "Min",
  ah = () => "Mínimo",
  ih = () => "最小",
  oh = () => "Min",
  lh = () => "Mín",
  ch = () => "Min",
  uh = () => "Min",
  _h = () => "最小",
  dh = () => "Min",
  fh = () => "Мин.",
  ph = () => "Мін.",
  hh = () => "Tối thiểu",
  vh = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? sh() : e === "pt" ? ah() : e === "ch" ? ih() : e === "de" ? oh() : e === "es" ? lh() : e === "fr" ? ch() : e === "it" ? uh() : e === "jp" ? _h() : e === "pl" ? dh() : e === "ru" ? fh() : e === "uk" ? ph() : hh()
  },
  mh = () => "Max",
  gh = () => "Máximo",
  bh = () => "最大",
  xh = () => "Max",
  yh = () => "Máx",
  wh = () => "Max",
  kh = () => "Max",
  qh = () => "最大",
  Sh = () => "Maks",
  Ih = () => "Макс.",
  Mh = () => "Макс.",
  Ph = () => "Tối đa",
  zh = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? mh() : e === "pt" ? gh() : e === "ch" ? bh() : e === "de" ? xh() : e === "es" ? yh() : e === "fr" ? wh() : e === "it" ? kh() : e === "jp" ? qh() : e === "pl" ? Sh() : e === "ru" ? Ih() : e === "uk" ? Mh() : Ph()
  },
  Th = t => `Circle brush (Alt + scroll to resize) - Size: ${t.size}`,
  Ah = t => `Pincel circular (Alt + rolagem para redimensionar) - Tamanho: ${t.size}`,
  Uh = t => `圆形画笔（Alt + 滚轮调整大小）- 大小：${t.size}`,
  Ch = t => `Runder Pinsel (Alt + Scrollen zum Ändern der Größe) - Größe: ${t.size}`,
  Eh = t => `Pincel circular (Alt + rueda para redimensionar) - Tamaño: ${t.size}`,
  jh = t => `Pinceau circulaire (Alt + molette pour redimensionner) - Taille : ${t.size}`,
  Bh = t => `Pennello circolare (Alt + scorrimento per ridimensionare) - Dimensione: ${t.size}`,
  Dh = t => `円形ブラシ（Alt + スクロールでサイズ変更） - サイズ: ${t.size}`,
  Rh = t => `Pędzel okrągły (Alt + przewijanie zmienia rozmiar) - Rozmiar: ${t.size}`,
  Fh = t => `Круглая кисть (Alt + прокрутка для изменения размера) - Размер: ${t.size}`,
  Lh = t => `Кругла кисть (Alt + прокрутка для зміни розміру) - Розмір: ${t.size}`,
  Xh = t => `Cọ tròn (Alt + cuộn để đổi cỡ) - Cỡ: ${t.size}`,
  Yh = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Th(t) : e === "pt" ? Ah(t) : e === "ch" ? Uh(t) : e === "de" ? Ch(t) : e === "es" ? Eh(t) : e === "fr" ? jh(t) : e === "it" ? Bh(t) : e === "jp" ? Dh(t) : e === "pl" ? Rh(t) : e === "ru" ? Fh(t) : e === "uk" ? Lh(t) : Xh(t)
  },
  Hh = t => `Square brush (Alt + scroll to resize) - Size: ${t.size}`,
  Wh = t => `Pincel quadrado (Alt + rolagem para redimensionar) - Tamanho: ${t.size}`,
  Nh = t => `方形画笔（Alt + 滚轮调整大小）- 大小：${t.size}`,
  Gh = t => `Eckiger Pinsel (Alt + Scrollen zum Ändern der Größe) - Größe: ${t.size}`,
  Oh = t => `Pincel cuadrado (Alt + rueda para redimensionar) - Tamaño: ${t.size}`,
  Vh = t => `Pinceau carré (Alt + molette pour redimensionner) - Taille : ${t.size}`,
  Zh = t => `Pennello quadrato (Alt + scorrimento per ridimensionare) - Dimensione: ${t.size}`,
  Kh = t => `四角ブラシ（Alt + スクロールでサイズ変更） - サイズ: ${t.size}`,
  Qh = t => `Pędzel kwadratowy (Alt + przewijanie zmienia rozmiar) - Rozmiar: ${t.size}`,
  Jh = t => `Квадратная кисть (Alt + прокрутка для изменения размера) - Размер: ${t.size}`,
  $h = t => `Квадратна кисть (Alt + прокрутка для зміни розміру) - Розмір: ${t.size}`,
  ev = t => `Cọ vuông (Alt + cuộn để đổi cỡ) - Cỡ: ${t.size}`,
  tv = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Hh(t) : e === "pt" ? Wh(t) : e === "ch" ? Nh(t) : e === "de" ? Gh(t) : e === "es" ? Oh(t) : e === "fr" ? Vh(t) : e === "it" ? Zh(t) : e === "jp" ? Kh(t) : e === "pl" ? Qh(t) : e === "ru" ? Jh(t) : e === "uk" ? $h(t) : ev(t)
  },
  rv = t => `${t.name} selected`,
  nv = t => `${t.name} selecionado`,
  sv = t => `已选择 ${t.name}`,
  av = t => `${t.name} ausgewählt`,
  iv = t => `${t.name} seleccionado`,
  ov = t => `${t.name} sélectionné`,
  lv = t => `${t.name} selezionato`,
  cv = t => `${t.name} を選択しました`,
  uv = t => `Zaznaczono ${t.name}`,
  _v = t => `${t.name} выбран`,
  dv = t => `${t.name} вибрано`,
  fv = t => `Đã chọn ${t.name}`,
  pv = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? rv(t) : e === "pt" ? nv(t) : e === "ch" ? sv(t) : e === "de" ? av(t) : e === "es" ? iv(t) : e === "fr" ? ov(t) : e === "it" ? lv(t) : e === "jp" ? cv(t) : e === "pl" ? uv(t) : e === "ru" ? _v(t) : e === "uk" ? dv(t) : fv(t)
  },
  hv = t => `${t.name} deselected`,
  vv = t => `${t.name} desmarcado`,
  mv = t => `已取消选择 ${t.name}`,
  gv = t => `${t.name} abgewählt`,
  bv = t => `${t.name} deseleccionado`,
  xv = t => `${t.name} désélectionné`,
  yv = t => `${t.name} deselezionato`,
  wv = t => `${t.name} の選択を解除しました`,
  kv = t => `Odznaczono ${t.name}`,
  qv = t => `${t.name} снят с выбора`,
  Sv = t => `${t.name} знято з вибору`,
  Iv = t => `Đã bỏ chọn ${t.name}`,
  Mv = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? hv(t) : e === "pt" ? vv(t) : e === "ch" ? mv(t) : e === "de" ? gv(t) : e === "es" ? bv(t) : e === "fr" ? xv(t) : e === "it" ? yv(t) : e === "jp" ? wv(t) : e === "pl" ? kv(t) : e === "ru" ? qv(t) : e === "uk" ? Sv(t) : Iv(t)
  };
var Mt, Pt, Lt, sn, St, zr, tn;
const zn = class zn extends Map {
  constructor(e) {
    super();
    qt(this, St);
    qt(this, Mt, new Map);
    qt(this, Pt, G(0));
    qt(this, Lt, G(0));
    qt(this, sn, jn || -1);
    if (e) {
      for (var [s, a] of e) super.set(s, a);
      U(this, Lt).v = super.size
    }
  }
  has(e) {
    var s = U(this, Mt),
      a = s.get(e);
    if (a === void 0)
      if (super.has(e)) a = Gt(this, St, zr).call(this, 0), s.set(e, a);
      else return n(U(this, Pt)), !1;
    return n(a), !0
  }
  forEach(e, s) {
    Gt(this, St, tn).call(this), super.forEach(e, s)
  }
  get(e) {
    var s = U(this, Mt),
      a = s.get(e);
    if (a === void 0)
      if (super.has(e)) a = Gt(this, St, zr).call(this, 0), s.set(e, a);
      else {
        n(U(this, Pt));
        return
      } return n(a), super.get(e)
  }
  set(e, s) {
    var M;
    var a = U(this, Mt),
      o = a.get(e),
      u = super.get(e),
      d = super.set(e, s),
      f = U(this, Pt);
    if (o === void 0) o = Gt(this, St, zr).call(this, 0), a.set(e, o), m(U(this, Lt), super.size), Mr(f);
    else if (u !== s) {
      Mr(o);
      var h = f.reactions === null ? null : new Set(f.reactions),
        z = h === null || !((M = o.reactions) != null && M.every(B => h.has(B)));
      z && Mr(f)
    }
    return d
  }
  delete(e) {
    var s = U(this, Mt),
      a = s.get(e),
      o = super.delete(e);
    return a !== void 0 && (s.delete(e), m(a, -1)), o && (m(U(this, Lt), super.size), Mr(U(this, Pt))), o
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = U(this, Mt);
      m(U(this, Lt), 0);
      for (var s of e.values()) m(s, -1);
      Mr(U(this, Pt)), e.clear()
    }
  }
  keys() {
    return n(U(this, Pt)), super.keys()
  }
  values() {
    return Gt(this, St, tn).call(this), super.values()
  }
  entries() {
    return Gt(this, St, tn).call(this), super.entries()
  } [Symbol.iterator]() {
    return this.entries()
  }
  get size() {
    return n(U(this, Lt)), super.size
  }
};
Mt = new WeakMap, Pt = new WeakMap, Lt = new WeakMap, sn = new WeakMap, St = new WeakSet, zr = function(e) {
  return jn === U(this, sn) ? G(e) : js(e)
}, tn = function() {
  n(U(this, Pt));
  var e = U(this, Mt);
  if (U(this, Lt).v !== e.size) {
    for (var s of En(zn.prototype, this, "keys").call(this))
      if (!e.has(s)) {
        var a = Gt(this, St, zr).call(this, 0);
        e.set(s, a)
      }
  }
  for ([, a] of U(this, Mt)) n(a)
};
let kn = zn;
const w0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAAXNSR0IArs4c6QAAACVJREFUeNpj+A8FDEAAZwMRBAIBmIYLIgHcgkQDIs3E6SRsjgcABYFLtfTgakEAAAAASUVORK5CYII=";
var Pv = new Set(["$$slots", "$$events", "$$legacy"]),
  zv = Cr('<svg><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"></circle><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>');

function Tv(t, r) {
  let e = jr(r, Pv);
  var s = zv();
  Er(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...e
  })), k(t, s)
}
var Av = new Set(["$$slots", "$$events", "$$legacy"]),
  Uv = Cr('<svg><rect x="6" y="6" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" rx="2"></rect><rect x="10" y="10" width="4" height="4" fill="currentColor" rx="1"></rect></svg>');

function Cv(t, r) {
  let e = jr(r, Av);
  var s = Uv();
  Er(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...e
  })), k(t, s)
}
var Ev = new Set(["$$slots", "$$events", "$$legacy"]),
  jv = Cr('<svg><path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Z"></path></svg>');

function Bv(t, r) {
  let e = jr(r, Ev);
  var s = jv();
  Er(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), k(t, s)
}
var bn = R('<div class="py-8 text-center"><p class="text-base-content/60"> </p></div>'),
  Qn = R('<div class="flex flex-col items-center justify-center gap-3 py-8"><span class="loading loading-spinner loading-lg"></span> <p class="text-base-content/70 text-sm"> </p></div>'),
  Dv = R('<div class="reverse-selection-pill svelte-o0qsvj"> </div>'),
  Rv = R('<div class="bg-base-300/40 absolute inset-0 z-10 flex items-center justify-center"><span class="loading loading-spinner loading-lg"></span></div>'),
  Fv = R('<span class="loading loading-spinner loading-xs mt-1 shrink-0"></span>'),
  Lv = R('<button type="button"><div class="reverse-gallery-item-head svelte-o0qsvj"><div class="reverse-gallery-item-copy svelte-o0qsvj"><div class="reverse-gallery-item-label flex justify-between svelte-o0qsvj"> <div class="badge badge-sm badge-outline"> </div></div> <div class="reverse-gallery-item-subtitle svelte-o0qsvj"> </div></div></div> <div class="mt-2 flex flex-wrap justify-between gap-2"><div class="badge badge-sm badge-outline"> </div> <!></div></button>'),
  Xv = R('<span class="loading loading-spinner loading-xs"></span>'),
  Yv = R('<button type="button" class="btn btn-sm btn-outline w-full"><!> </button>'),
  Hv = R('<div class="reverse-workspace svelte-o0qsvj"><div class="reverse-panel svelte-o0qsvj"><div class="reverse-panel-header svelte-o0qsvj"><div><div class="reverse-section-title svelte-o0qsvj"> </div> <p class="reverse-section-copy svelte-o0qsvj"> </p></div> <!></div> <div class="reverse-preview-toolbar svelte-o0qsvj"><div class="reverse-meta-chip svelte-o0qsvj"><!> </div> <div class="reverse-meta-chip svelte-o0qsvj"><!> </div> <div class="flex items-center gap-1"><button type="button" class="btn btn-sm btn-ghost btn-circle" aria-label="Previous preview"><!></button> <button type="button" class="btn btn-sm btn-ghost btn-circle" aria-label="Next preview"><!></button></div></div> <div class="reverse-preview-stage svelte-o0qsvj"><!> <canvas style="max-width: 100%; height: auto;"></canvas></div> <div class="reverse-preview-footer svelte-o0qsvj"><div class="flex flex-wrap items-center gap-2 text-xs sm:text-sm"><div class="badge badge-outline"> </div> <div class="badge badge-outline"> </div></div> <div class="reverse-callout svelte-o0qsvj"><!> <span> </span></div></div></div> <div class="reverse-panel h-full svelte-o0qsvj"><div class="reverse-panel-header svelte-o0qsvj"><div><div class="reverse-section-title svelte-o0qsvj"> </div> <p class="reverse-section-copy svelte-o0qsvj"> </p></div> <div class="reverse-history-count svelte-o0qsvj"> </div></div> <div class="reverse-keyboard-hint svelte-o0qsvj"> </div> <div class="reverse-gallery-list h-full p-2 svelte-o0qsvj"></div> <!></div></div> <div class="reverse-action-bar svelte-o0qsvj"><div class="flex flex-wrap items-center justify-end gap-2"><button type="button" class="btn btn-sm btn-outline"> </button> <button type="button" class="btn btn-sm btn-warning"><!> </button></div></div>', 1),
  Wv = R('<div><div class="min-w-0"><h3 class="flex items-center gap-2 text-lg font-bold"><!> </h3> <p class="text-base-content/70 mt-1 text-sm"> </p></div></div> <div class="mt-4"><div class="reverse-mode-bar svelte-o0qsvj"><div><div class="reverse-section-title svelte-o0qsvj"> </div> <p class="reverse-section-copy svelte-o0qsvj"> </p></div> <div class="tabs tabs-boxed reverse-mode-tabs svelte-o0qsvj"><button type="button"> </button> <button type="button"> </button></div></div> <!></div>', 1);

function Nv(t, r) {
  an(r, !0);
  let e = or(r, "open", 15),
    s = or(r, "sessionPayload", 3, void 0),
    a = or(r, "previewBounds", 3, void 0),
    o = or(r, "showMapBackground", 3, !0);
  const u = N(() => r.tileSize ?? Ut.seasons[r.season].tileSize);
  let d = G("idle"),
    f = G(null),
    h = G(on([])),
    z = G(!1),
    M = G(!1),
    B = G(null),
    K = G([]),
    Le = G(!1),
    Xe = G(!1),
    $ = G(void 0),
    ye, ue, F = G(null),
    Re = 0,
    Ge = 0,
    Ye = 0,
    it = 0,
    Ze = null,
    Ae;
  const It = "wplace:reverse-debug",
    Be = new Intl.RelativeTimeFormat(void 0, {
      numeric: "auto"
    });

  function ie() {
    return typeof performance < "u" ? performance.now() : Date.now()
  }

  function Q(i) {
    return Math.round((ie() - i) * 100) / 100
  }

  function He() {
    if (globalThis.__WPLACE_REVERSE_DEBUG__) return !0;
    try {
      const _ = globalThis.localStorage.getItem(It);
      return _ === "1" || _ === "true"
    } catch {
      return !1
    }
  }

  function re(i, _ = {}) {
    He() && console.info(`[ReversePixelsDialog] ${i}`, _)
  }

  function cr() {
    it += 1, Ae == null || Ae.abort(), Ae = void 0, m(Xe, !1)
  }
  const Se = N(() => (() => {
      const i = n(f);
      return n(B) === null || i === null ? null : n(h).find(_ => Ke(_, i) === n(B)) ?? null
    })()),
    Ot = N(dr),
    vt = N(() => (() => {
      const i = n(f);
      return n(B) === null || i === null ? -1 : n(h).findIndex(_ => Ke(_, i) === n(B))
    })()),
    ct = N(() => n(vt) > 0),
    Vt = N(() => n(vt) >= 0 && n(vt) < n(h).length - 1),
    mt = N(() => n(Le) || n(Xe));
  Qr(() => {
    e() || (Re += 1, Ye += 1, cr(), m(d, "idle"), m(F, null), m(h, [], !0), m(B, null), m(K, []), m(Le, !1), ue = void 0, Ze = null, m(z, !1), m(M, !1), m(f, null))
  }), Qr(() => {
    if (!e() || n(f) === null) return;
    const i = n(Ot);
    if (!o() || !i || !a()) {
      cr(), ue = void 0, Ze = null;
      return
    }
    S(i)
  }), Qr(() => {
    const i = n(B),
      _ = n(f);
    !e() || n(d) !== "gallery" || _ === null || i === null || requestAnimationFrame(() => {
      var b;
      (b = document.getElementById(q(_, i))) == null || b.scrollIntoView({
        block: "nearest",
        behavior: "smooth"
      })
    })
  });

  function Ke(i, _) {
    return _ === "historical" ? i.ts : i.depth
  }

  function ur(i, _) {
    return i === "historical" ? {
      mode: i,
      timestamp: _
    } : {
      mode: i,
      snapshotDepth: _
    }
  }
  async function Et(i) {
    var I;
    if (!r.dataSource && (!s() || s().length === 0)) {
      e(!1);
      return
    }
    const _ = ie(),
      b = ++Re;
    Ye += 1, re("loadTimestamps:start", {
      season: r.season,
      selectedPixels: r.selectedPixelCount,
      payloadBytes: ((I = s()) == null ? void 0 : I.length) ?? 0
    }), m(d, "loading"), m(f, i, !0), m(h, [], !0), m(z, !1), m(M, !1), m(B, null), m(K, []), m(Le, !1), m(F, null), Ge += 1;
    try {
      if (r.dataSource) m(F, "custom"), await Zt("custom", i, {
        sessionMs: 0,
        loadStart: _,
        payloadBytes: 0,
        selectedPixels: r.selectedPixelCount
      });
      else {
        const x = ie(),
          T = await Tt.createReverseSession(s()),
          A = Q(x);
        if (b !== Re) return;
        m(F, T.sessionId, !0), await Zt(T.sessionId, i, {
          sessionMs: A,
          loadStart: _,
          payloadBytes: s().length,
          selectedPixels: r.selectedPixelCount
        })
      }
    } catch (x) {
      if (b !== Re) return;
      re("loadTimestamps:error", {
        season: r.season,
        selectedPixels: r.selectedPixelCount,
        durationMs: Q(_),
        message: x.message
      }), pe.error(x.message), e(!1)
    }
  }
  async function Zt(i, _, b) {
    var V;
    const I = ++Ge;
    Ye += 1, m(d, "loading"), m(h, [], !0), m(z, !1), m(M, !1), m(B, null), m(K, []), m(Le, !1);
    const x = ie(),
      T = r.dataSource ? await r.dataSource.getTimeline({
        mode: _
      }) : await Tt.getReverseTimestamps(i, {
        mode: _
      }),
      A = Q(x);
    I !== Ge || i !== n(F) || (m(h, T.timestamps, !0), m(z, T.hasMore, !0), m(d, "gallery"), re("loadTimestamps:resolved", {
      season: r.season,
      mode: _,
      selectedPixels: (b == null ? void 0 : b.selectedPixels) ?? r.selectedPixelCount,
      payloadBytes: (b == null ? void 0 : b.payloadBytes) ?? ((V = s()) == null ? void 0 : V.length) ?? 0,
      sessionId: i,
      snapshots: n(h).length,
      hasMore: T.hasMore,
      sessionMs: b == null ? void 0 : b.sessionMs,
      timestampsMs: A,
      durationMs: b != null && b.loadStart ? Q(b.loadStart) : A
    }), n(h).length > 0 && await Ht(i, Ke(n(h)[0], _), _))
  }
  async function _r() {
    if (!n(F) || n(M) || !n(z) || n(h).length === 0) return;
    const i = Ge,
      _ = n(h)[n(h).length - 1],
      b = n(f);
    if (!_ || b === null) return;
    const I = Ke(_, b);
    if (!I) return;
    m(M, !0);
    const x = ie();
    re("loadMoreTimestamps:start", {
      season: r.season,
      mode: n(f),
      sessionId: n(F),
      beforeEntryValue: I,
      loadedSnapshots: n(h).length
    });
    try {
      const T = b === "historical" ? {
          mode: b,
          beforeTimestamp: I
        } : {
          mode: b,
          beforeDepth: I
        },
        A = r.dataSource ? await r.dataSource.getTimeline(T) : await Tt.getReverseTimestamps(n(F), T);
      if (i !== Ge) return;
      m(h, [...n(h), ...A.timestamps], !0), m(z, A.hasMore, !0), re("loadMoreTimestamps:resolved", {
        season: r.season,
        mode: b,
        sessionId: n(F),
        beforeEntryValue: I,
        appendedSnapshots: A.timestamps.length,
        loadedSnapshots: n(h).length,
        hasMore: A.hasMore,
        durationMs: Q(x)
      })
    } catch (T) {
      if (i !== Ge) return;
      re("loadMoreTimestamps:error", {
        season: r.season,
        mode: b,
        sessionId: n(F),
        beforeEntryValue: I,
        durationMs: Q(x),
        message: T.message
      }), pe.error(T.message)
    } finally {
      i === Ge && m(M, !1)
    }
  }
  async function Ht(i, _, b = n(f)) {
    if (b === null) return;
    const I = ie();
    m(B, _, !0), m(Le, !0);
    const x = ++Ye;
    re("loadPreview:start", {
      season: r.season,
      mode: b,
      sessionId: i,
      entryValue: _,
      requestNonce: x
    });
    try {
      const T = ie(),
        A = ur(b, _),
        V = r.dataSource ? await r.dataSource.getPreview(A) : await Tt.getReversePreview(i, A),
        oe = Q(T);
      if (x !== Ye || (m(K, V.pixels), await new Promise(Z => requestAnimationFrame(() => Z())), x !== Ye)) return;
      const Ue = ie();
      E();
      const _e = Q(Ue);
      re("loadPreview:resolved", {
        season: r.season,
        mode: b,
        sessionId: i,
        entryValue: _,
        requestNonce: x,
        previewPixels: V.pixels.length,
        apiMs: oe,
        renderMs: _e,
        durationMs: Q(I)
      })
    } catch (T) {
      if (x !== Ye) return;
      re("loadPreview:error", {
        season: r.season,
        mode: b,
        sessionId: i,
        entryValue: _,
        requestNonce: x,
        durationMs: Q(I),
        message: T.message
      }), pe.error(T.message)
    } finally {
      x === Ye && m(Le, !1)
    }
  }

  function dr() {
    let i = 1 / 0,
      _ = 1 / 0,
      b = -1 / 0,
      I = -1 / 0;
    if (a()) i = a().minGlobalX, _ = a().minGlobalY, b = a().maxGlobalX, I = a().maxGlobalY;
    else {
      if (n(K).length === 0) return null;
      for (const Z of n(K)) {
        const we = Z.tileX * n(u) + Z.pixelX,
          j = Z.tileY * n(u) + Z.pixelY;
        we < i && (i = we), j < _ && (_ = j), we > b && (b = we), j > I && (I = j)
      }
    }
    if (!Number.isFinite(i) || !Number.isFinite(_) || !Number.isFinite(b) || !Number.isFinite(I)) return null;
    const x = b - i + 1,
      T = I - _ + 1;
    if (x <= 0 || T <= 0) return null;
    const A = 520,
      V = Math.max(1, Math.ceil(Math.max(x / A, T / A))),
      oe = Math.max(1, Math.ceil(x / V)),
      Ue = Math.max(1, Math.ceil(T / V)),
      _e = Math.max(1, Math.min(Math.floor(A / oe), Math.floor(A / Ue)));
    return {
      minGX: i,
      minGY: _,
      width: x,
      height: T,
      downsample: V,
      sampledWidth: oe,
      sampledHeight: Ue,
      scale: _e
    }
  }
  async function xr(i) {
    if ("createImageBitmap" in globalThis) return createImageBitmap(i);
    const _ = URL.createObjectURL(i);
    try {
      return await new Promise((b, I) => {
        const x = new Image;
        x.crossOrigin = "anonymous", x.onload = () => b(x), x.onerror = () => I(new Error("Failed to decode preview tile.")), x.src = _
      })
    } finally {
      URL.revokeObjectURL(_)
    }
  }

  function fr(i) {
    "close" in i && i.close()
  }
  async function S(i) {
    if (!a()) return;
    const _ = [r.season, i.minGX, i.minGY, i.width, i.height, i.downsample, i.sampledWidth, i.sampledHeight].join(":");
    if (Ze === _ && ue) return;
    const b = ++it;
    Ae == null || Ae.abort();
    const I = new AbortController;
    Ae = I, m(Xe, !0), re("loadPreviewBackground:start", {
      season: r.season,
      requestNonce: b,
      width: i.width,
      height: i.height,
      sampledWidth: i.sampledWidth,
      sampledHeight: i.sampledHeight
    });
    try {
      const x = ie(),
        T = document.createElement("canvas");
      T.width = i.sampledWidth, T.height = i.sampledHeight;
      const A = T.getContext("2d");
      if (!A) throw new Error("Unable to create preview background.");
      A.imageSmoothingEnabled = !1;
      const V = i.minGX + i.width,
        oe = i.minGY + i.height,
        Ue = Math.floor(i.minGX / n(u)),
        _e = Math.floor((V - 1) / n(u)),
        Z = Math.floor(i.minGY / n(u)),
        we = Math.floor((oe - 1) / n(u));
      for (let j = Z; j <= we; j += 1)
        for (let D = Ue; D <= _e; D += 1) {
          if (b !== it || I.signal.aborted) return;
          const le = D * n(u),
            me = j * n(u),
            de = Math.max(i.minGX, le),
            Me = Math.max(i.minGY, me),
            Oe = Math.min(V, le + n(u)),
            We = Math.min(oe, me + n(u));
          if (Oe <= de || We <= Me) continue;
          const jt = await fetch(`${Ws}/s${r.season}/tiles/${D}/${j}.png`, {
            signal: I.signal
          });
          if (!jt.ok) continue;
          const $e = await xr(await jt.blob());
          if (b !== it || I.signal.aborted) {
            fr($e);
            return
          }
          const ut = Math.floor((de - i.minGX) / i.downsample),
            Bt = Math.floor((Me - i.minGY) / i.downsample),
            gt = Math.ceil((Oe - i.minGX) / i.downsample),
            Kt = Math.ceil((We - i.minGY) / i.downsample),
            _t = Math.max(1, gt - ut),
            Qt = Math.max(1, Kt - Bt);
          A.drawImage($e, de - le, Me - me, Oe - de, We - Me, ut, Bt, _t, Qt), fr($e)
        }
      if (b !== it || I.signal.aborted) return;
      ue = T, Ze = _, re("loadPreviewBackground:resolved", {
        season: r.season,
        requestNonce: b,
        width: i.width,
        height: i.height,
        sampledWidth: i.sampledWidth,
        sampledHeight: i.sampledHeight,
        durationMs: Q(x)
      }), E()
    } catch (x) {
      if (x instanceof DOMException && x.name === "AbortError" || b !== it) return;
      ue = void 0, Ze = null, re("loadPreviewBackground:error", {
        season: r.season,
        requestNonce: b,
        message: x.message
      })
    } finally {
      b === it && (Ae = void 0, m(Xe, !1))
    }
  }

  function E() {
    const i = ie();
    if (!n($)) return;
    const _ = dr();
    if (!_) {
      n($).width = 1, n($).height = 1;
      const A = n($).getContext("2d");
      A == null || A.clearRect(0, 0, 1, 1), re("renderPreviewCanvas:empty", {
        season: r.season,
        previewPixels: n(K).length,
        durationMs: Q(i)
      });
      return
    }
    n($).width = _.sampledWidth * _.scale, n($).height = _.sampledHeight * _.scale, ye || (ye = document.createElement("canvas")), ye.width = _.sampledWidth, ye.height = _.sampledHeight;
    const b = ye.getContext("2d"),
      I = n($).getContext("2d");
    if (!b || !I) return;
    if (ue && ue.width === _.sampledWidth && ue.height === _.sampledHeight) b.clearRect(0, 0, _.sampledWidth, _.sampledHeight), b.drawImage(ue, 0, 0);
    else {
      const A = b.createImageData(_.sampledWidth, _.sampledHeight),
        V = A.data;
      for (let oe = 0; oe < _.sampledHeight; oe += 1) {
        const Ue = oe * _.sampledWidth;
        for (let _e = 0; _e < _.sampledWidth; _e += 1) {
          const Z = (Ue + _e) * 4;
          (_e + oe) % 2 === 0 ? (V[Z] = 22, V[Z + 1] = 33, V[Z + 2] = 62) : (V[Z] = 26, V[Z + 1] = 26, V[Z + 2] = 46), V[Z + 3] = 255
        }
      }
      b.putImageData(A, 0, 0)
    }
    const x = b.getImageData(0, 0, _.sampledWidth, _.sampledHeight),
      T = x.data;
    for (const A of n(K)) {
      const V = A.tileX * n(u) + A.pixelX - _.minGX,
        oe = A.tileY * n(u) + A.pixelY - _.minGY;
      if (V < 0 || oe < 0 || V >= _.width || oe >= _.height) continue;
      const Ue = Math.floor(V / _.downsample),
        _e = Math.floor(oe / _.downsample);
      if (Ue < 0 || _e < 0 || Ue >= _.sampledWidth || _e >= _.sampledHeight) continue;
      const Z = Ut.colors[Math.min(A.color, Ut.colors.length - 1)],
        we = (_e * _.sampledWidth + Ue) * 4;
      T[we] = Z.rgb[0], T[we + 1] = Z.rgb[1], T[we + 2] = Z.rgb[2], T[we + 3] = A.color === 0 ? 0 : 255
    }
    b.putImageData(x, 0, 0), I.imageSmoothingEnabled = !1, I.clearRect(0, 0, n($).width, n($).height), I.drawImage(ye, 0, 0, _.sampledWidth, _.sampledHeight, 0, 0, n($).width, n($).height), re("renderPreviewCanvas:resolved", {
      season: r.season,
      previewPixels: n(K).length,
      width: _.width,
      height: _.height,
      sampledWidth: _.sampledWidth,
      sampledHeight: _.sampledHeight,
      scale: _.scale,
      downsample: _.downsample,
      durationMs: Q(i)
    })
  }

  function O(i) {
    return new Date(i).toLocaleString(void 0, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    })
  }

  function Ie(i) {
    return new Date(i).toLocaleDateString(void 0, {
      year: "numeric",
      month: "short",
      day: "numeric"
    })
  }

  function Qe(i) {
    return new Date(i).toLocaleTimeString(void 0, {
      hour: "2-digit",
      minute: "2-digit"
    })
  }

  function Je(i) {
    const _ = i - Date.now(),
      b = Math.abs(_);
    return b < 45e3 ? Be.format(Math.round(_ / 1e3), "second") : b < 45 * 6e4 ? Be.format(Math.round(_ / 6e4), "minute") : b < 22 * 36e5 ? Be.format(Math.round(_ / 36e5), "hour") : b < 26 * 864e5 ? Be.format(Math.round(_ / 864e5), "day") : b < 320 * 864e5 ? Be.format(Math.round(_ / 2592e6), "month") : Be.format(Math.round(_ / 31536e6), "year")
  }

  function p(i) {
    return i ? `${i.width.toLocaleString()} x ${i.height.toLocaleString()}` : "0 x 0"
  }

  function q(i, _) {
    return `reverse-history-${i}-${_}`
  }

  function L() {
    const i = n(f);
    !n(ct) || !n(F) || i === null || Ht(n(F), Ke(n(h)[n(vt) - 1], i))
  }

  function X() {
    const i = n(f);
    !n(Vt) || !n(F) || i === null || Ht(n(F), Ke(n(h)[n(vt) + 1], i))
  }
  async function ne(i) {
    if (n(f) !== i && e()) {
      if (!n(F)) {
        await Et(i);
        return
      }
      m(f, i, !0);
      try {
        await Zt(n(F), i)
      } catch (_) {
        re("loadTimestamps:error", {
          season: r.season,
          mode: i,
          sessionId: n(F),
          durationMs: 0,
          message: _.message
        }), pe.error(_.message), m(d, "gallery")
      }
    }
  }

  function W(i) {
    if (!(!e() || n(d) !== "gallery" || n(mt))) {
      if (i.key === "ArrowLeft" || i.key === "ArrowUp") {
        i.preventDefault(), L();
        return
      }(i.key === "ArrowRight" || i.key === "ArrowDown") && (i.preventDefault(), X())
    }
  }
  async function se() {
    const i = n(f);
    if (!n(F) || n(B) === null || i === null) return;
    const _ = ie();
    re("applyReverse:start", {
      season: r.season,
      mode: i,
      sessionId: n(F),
      entryValue: n(B),
      selectedPixels: r.selectedPixelCount
    }), m(d, "applying");
    try {
      const b = ie(),
        I = await r.onApply(n(F), i, n(B)),
        x = Q(b);
      re("applyReverse:resolved", {
        season: r.season,
        mode: i,
        sessionId: n(F),
        entryValue: n(B),
        painted: I.painted,
        onApplyMs: x,
        durationMs: Q(_)
      }), pe.success(Yo({
        count: I.painted.toString()
      })), e(!1)
    } catch (b) {
      re("applyReverse:error", {
        season: r.season,
        mode: i,
        sessionId: n(F),
        entryValue: n(B),
        durationMs: Q(_),
        message: b.message
      }), pe.error(b.message), m(d, "gallery")
    }
  }
  Bs("keydown", Ds, W), Os(t, {
    useModalLayer: !0,
    modalBoxClass: "w-11/12 max-w-7xl max-h-[92vh] overflow-y-auto",
    get open() {
      return e()
    },
    set open(i) {
      e(i)
    },
    children: (i, _) => {
      var b = Wv(),
        I = ir(b),
        x = c(I),
        T = c(x),
        A = c(T);
      yn(A, {
        class: "size-5"
      });
      var V = v(A);
      l(T);
      var oe = v(T, 2),
        Ue = c(oe, !0);
      l(oe), l(x), l(I);
      var _e = v(I, 2),
        Z = c(_e),
        we = c(Z),
        j = c(we),
        D = c(j, !0);
      l(j);
      var le = v(j, 2),
        me = c(le, !0);
      l(le), l(we);
      var de = v(we, 2),
        Me = c(de),
        Oe = c(Me, !0);
      l(Me);
      var We = v(Me, 2),
        jt = c(We, !0);
      l(We), l(de), l(Z);
      var $e = v(Z, 2);
      {
        var ut = ae => {
            var ee = bn(),
              ce = c(ee),
              Pe = c(ce, !0);
            l(ce), l(ee), H(Ce => y(Pe, Ce), [() => mn()]), k(ae, ee)
          },
          Bt = ae => {
            var ee = Qn(),
              ce = v(c(ee), 2),
              Pe = c(ce, !0);
            l(ce), l(ee), H(Ce => y(Pe, Ce), [() => uc()]), k(ae, ee)
          },
          gt = ae => {
            var ee = Qn(),
              ce = v(c(ee), 2),
              Pe = c(ce, !0);
            l(ce), l(ee), H(Ce => y(Pe, Ce), [() => tl()]), k(ae, ee)
          },
          Kt = ae => {
            var ee = bn(),
              ce = c(ee),
              Pe = c(ce, !0);
            l(ce), l(ee), H(Ce => y(Pe, Ce), [() => xn()]), k(ae, ee)
          },
          _t = ae => {
            var ee = Hv(),
              ce = ir(ee),
              Pe = c(ce),
              Ce = c(Pe),
              dt = c(Ce),
              Dt = c(dt),
              Jt = c(Dt, !0);
            l(Dt);
            var $t = v(Dt, 2),
              er = c($t, !0);
            l($t), l(dt);
            var tr = v(dt, 2);
            {
              var rr = De => {
                var qe = Dv(),
                  Nt = c(qe, !0);
                l(qe), H(pt => y(Nt, pt), [() => Au({
                  current: (n(vt) + 1).toString(),
                  total: n(h).length.toString()
                })]), k(De, qe)
              };
              J(tr, De => {
                n(Se) && De(rr)
              })
            }
            l(Ce);
            var Wt = v(Ce, 2),
              Y = c(Wt),
              g = c(Y);
            wn(g, {
              class: "size-3.5"
            });
            var ze = v(g);
            l(Y);
            var fe = v(Y, 2),
              Te = c(fe);
            Bv(Te, {
              class: "size-3.5"
            });
            var C = v(Te);
            l(fe);
            var ge = v(fe, 2),
              bt = c(ge),
              be = c(bt);
            Fn(be, {
              class: "size-4"
            }), l(bt);
            var rt = v(bt, 2),
              xt = c(rt);
            Fn(xt, {
              class: "size-4 rotate-180"
            }), l(rt), l(ge), l(Wt);
            var et = v(Wt, 2),
              Ne = c(et);
            {
              var nt = De => {
                var qe = Rv();
                k(De, qe)
              };
              J(Ne, De => {
                n(mt) && De(nt)
              })
            }
            var yt = v(Ne, 2);
            ss(yt, De => m($, De), () => n($)), l(et);
            var ot = v(et, 2),
              Fe = c(ot),
              te = c(Fe),
              xe = c(te);
            l(te);
            var Ve = v(te, 2),
              tt = c(Ve);
            l(Ve), l(Fe);
            var Rt = v(Fe, 2),
              yr = c(Rt);
            Vs(yr, {
              class: "size-4 shrink-0"
            });
            var Br = v(yr, 2),
              Dr = c(Br, !0);
            l(Br), l(Rt), l(ot), l(Pe);
            var Rr = v(Pe, 2),
              pr = c(Rr),
              wr = c(pr),
              kr = c(wr),
              cn = c(kr, !0);
            l(kr);
            var Fr = v(kr, 2),
              ve = c(Fr, !0);
            l(Fr), l(wr);
            var ke = v(wr, 2),
              wt = c(ke);
            l(ke), l(pr);
            var ft = v(pr, 2),
              hr = c(ft, !0);
            l(ft);
            var Ft = v(ft, 2);
            Jr(Ft, 23, () => n(h), De => Ke(De, n(f)), (De, qe, Nt) => {
              var pt = Lv();
              let vr;
              var kt = c(pt),
                mr = c(kt),
                qr = c(mr),
                Wr = c(qr),
                Nr = v(Wr),
                un = c(Nr);
              l(Nr), l(qr);
              var Gr = v(qr, 2),
                _n = c(Gr);
              l(Gr), l(mr), l(kt);
              var Or = v(kt, 2),
                Sr = c(Or),
                xs = c(Sr);
              l(Sr);
              var ys = v(Sr, 2);
              {
                var ws = Ir => {
                    var dn = Fv();
                    k(Ir, dn)
                  },
                  ks = N(() => n(mt) && n(B) === Ke(n(qe), n(f)));
                J(ys, Ir => {
                  n(ks) && Ir(ws)
                })
              }
              l(Or), l(pt), H((Ir, dn, qs, Ss, Is, Ms, Ps) => {
                Ee(pt, "id", Ir), vr = At(pt, 1, "reverse-gallery-item svelte-o0qsvj", null, vr, dn), y(Wr, `${qs??""} `), y(un, `#${n(Nt)+1}`), y(_n, `${Ss??""} · ${Is??""}`), y(xs, `${Ms??""}
										${Ps??""}`)
              }, [() => q(n(f), Ke(n(qe), n(f))), () => ({
                "reverse-gallery-item-active": n(B) === Ke(n(qe), n(f))
              }), () => Ie(n(qe).ts), () => Qe(n(qe).ts), () => Je(n(qe).ts), () => n(qe).pixelCount.toLocaleString(), () => On()]), he("click", pt, () => n(F) && Ht(n(F), Ke(n(qe), n(f)))), k(De, pt)
            }), l(Ft);
            var Lr = v(Ft, 2);
            {
              var nr = De => {
                var qe = Yv(),
                  Nt = c(qe);
                {
                  var pt = kt => {
                    var mr = Xv();
                    k(kt, mr)
                  };
                  J(Nt, kt => {
                    n(M) && kt(pt)
                  })
                }
                var vr = v(Nt);
                l(qe), H(kt => {
                  qe.disabled = n(M), y(vr, ` ${kt??""}`)
                }, [() => Zs()]), he("click", qe, _r), k(De, qe)
              };
              J(Lr, De => {
                n(z) && De(nr)
              })
            }
            l(Rr), l(ce);
            var Xr = v(ce, 2),
              Tn = c(Xr),
              Yr = c(Tn),
              gs = c(Yr, !0);
            l(Yr);
            var Hr = v(Yr, 2),
              An = c(Hr);
            yn(An, {
              class: "size-4"
            });
            var bs = v(An);
            l(Hr), l(Tn), l(Xr), H((De, qe, Nt, pt, vr, kt, mr, qr, Wr, Nr, un, Gr, _n, Or, Sr) => {
              y(Jt, De), y(er, qe), y(ze, ` ${Nt??""}`), y(C, ` ${pt??""}`), bt.disabled = !n(ct) || n(mt), rt.disabled = !n(Vt) || n(mt), At(yt, 1, `reverse-preview-canvas pixelated ${n(mt)?"opacity-40":""}`, "svelte-o0qsvj"), y(xe, `${vr??""}
								${kt??""}`), y(tt, `${mr??""}
								${qr??""}`), y(Dr, Wr), y(cn, Nr), y(ve, un), y(wt, `${Gr??""}${n(z)?"+":""}`), y(hr, _n), y(gs, Or), Hr.disabled = n(mt) || n(B) === null || !n(F), y(bs, ` ${Sr??""}`)
            }, [() => gu(), () => n(Se) ? `${O(n(Se).ts)} - ${Je(n(Se).ts)}` : "", () => n(Se) ? Je(n(Se).ts) : "", () => p(n(Ot)), () => n(Se) ? n(Se).eventCount.toLocaleString() : "0", () => pl(), () => n(Se) ? n(Se).pixelCount.toLocaleString() : "0", () => On(), () => vo(), () => Wu(), () => n(f) === "historical" ? Zn() : Vn(), () => n(h).length.toLocaleString(), () => Ql(), () => as(), () => zo()]), he("click", bt, L), he("click", rt, X), he("click", Yr, () => e(!1)), he("click", Hr, se), k(ae, ee)
          },
          Qt = ae => {
            var ee = bn(),
              ce = c(ee),
              Pe = c(ce, !0);
            l(ce), l(ee), H(Ce => y(Pe, Ce), [() => mn()]), k(ae, ee)
          };
        J($e, ae => {
          n(d) === "idle" ? ae(ut) : n(d) === "loading" ? ae(Bt, 1) : n(d) === "applying" ? ae(gt, 2) : n(h).length === 0 ? ae(Kt, 3) : n(f) !== null ? ae(_t, 4) : ae(Qt, -1)
        })
      }
      l(_e), H((ae, ee, ce, Pe, Ce, dt) => {
        y(V, ` ${ae??""}`), y(Ue, ee), y(D, ce), y(me, Pe), At(Me, 1, `tab transition-all ${n(f)==="depth"?"tab-active bg-primary! text-primary-content! border-primary/60! btn btn-primary btn-sm scale-[1.02] border! shadow-md!":"hover:brightness-105"}`, "svelte-o0qsvj"), Me.disabled = n(d) === "loading" || n(d) === "applying", y(Oe, Ce), At(We, 1, `tab transition-all ${n(f)==="historical"?"tab-active bg-primary! text-primary-content! border-primary/60! btn btn-primary btn-sm scale-[1.02] border! shadow-md!":"hover:brightness-105"}`, "svelte-o0qsvj"), We.disabled = n(d) === "loading" || n(d) === "applying", y(jt, dt)
      }, [() => os(), () => au({
        count: r.selectedPixelCount.toString()
      }), () => Js(), () => n(f) === "historical" ? Zn() : n(f) === "depth" ? Vn() : mn(), () => $s(), () => ea()]), he("click", Me, () => ne("depth")), he("click", We, () => ne("historical")), k(i, b)
    },
    $$slots: {
      default: !0
    }
  }), ln()
}
In(["click"]);
var Gv = new Set(["$$slots", "$$events", "$$legacy"]),
  Ov = Cr('<svg><path d="M200-80q-50 0-85-35t-35-85q0-39 22.5-69.5T160-313v-334q-35-13-57.5-43.5T80-760q0-50 35-85t85-35q39 0 69.5 22.5T313-800h334q12-35 42.5-57.5T760-880q50 0 85 35t35 85q0 40-22.5 70.5T800-647v334q35 13 57.5 43.5T880-200q0 50-35 85t-85 35q-39 0-69.5-22.5T647-160H313q-13 35-43.5 57.5T200-80Zm0-640q17 0 28.5-11.5T240-760q0-17-11.5-28.5T200-800q-17 0-28.5 11.5T160-760q0 17 11.5 28.5T200-720Zm560 0q17 0 28.5-11.5T800-760q0-17-11.5-28.5T760-800q-17 0-28.5 11.5T720-760q0 17 11.5 28.5T760-720ZM313-240h334q9-26 28-45t45-28v-334q-26-9-45-28t-28-45H313q-9 26-28 45t-45 28v334q26 9 45 28t28 45Zm447 80q17 0 28.5-11.5T800-200q0-17-11.5-28.5T760-240q-17 0-28.5 11.5T720-200q0 17 11.5 28.5T760-160Zm-560 0q17 0 28.5-11.5T240-200q0-17-11.5-28.5T200-240q-17 0-28.5 11.5T160-200q0 17 11.5 28.5T200-160Zm0-600Zm560 0Zm0 560Zm-560 0Z"></path></svg>');

function Vv(t, r) {
  let e = jr(r, Gv);
  var s = Ov();
  Er(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), k(t, s)
}
var Zv = new Set(["$$slots", "$$events", "$$legacy"]),
  Kv = Cr('<svg><path fill="currentColor" d="M9 14c1.381 0 2.631-.56 3.536-1.465C13.44 11.631 14 10.381 14 9s-.56-2.631-1.464-3.535C11.631 4.56 10.381 4 9 4s-2.631.56-3.536 1.465C4.56 6.369 4 7.619 4 9s.56 2.631 1.464 3.535A5 5 0 0 0 9 14m0 7c3.518 0 6-1 6-2c0-2-2.354-4-6-4c-3.75 0-6 2-6 4c0 1 2.25 2 6 2m12-9h-2v-2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2"></path></svg>');

function Qv(t, r) {
  let e = jr(r, Zv);
  var s = Kv();
  Er(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...e
  })), k(t, s)
}
var Kr = R('<span class="loading loading-spinner loading-xs"></span>'),
  Jv = R('<div class="mt-3 flex justify-center"><span class="loading loading-spinner"></span></div>'),
  Jn = R('<div class="mt-3 flex justify-center"><p class="text-base-content/80 text-sm"> </p></div>'),
  $v = R('<span class="badge badge-primary badge-sm"> </span>'),
  em = R('<span class="badge badge-ghost badge-sm"> </span>'),
  $n = R("<option> </option>"),
  tm = R('<label class="form-control"><span class="label pb-1 text-xs"> </span> <select class="select select-xs select-bordered"><option> </option><!></select></label>'),
  rm = R('<div class="border-base-300/60 border-t px-4 pt-3 pb-4"><div class="grid gap-2 md:grid-cols-2 xl:grid-cols-3"><!> <label class="form-control"><span class="label pb-1 text-xs"> </span> <select class="select select-xs select-bordered"><option> </option><option> </option><option> </option><option> </option></select></label> <label class="form-control"><span class="label pb-1 text-xs"> </span> <input class="input input-xs input-bordered" type="text"/></label> <label class="form-control"><span class="label pb-1 text-xs"> </span> <input class="input input-xs input-bordered" inputmode="numeric" pattern="[0-9]*"/></label> <label class="form-control"><span class="label pb-1 text-xs"> </span> <input class="input input-xs input-bordered" inputmode="numeric" pattern="[0-9]*"/></label> <label class="form-control"><span class="label pb-1 text-xs"> </span> <select class="select select-xs select-bordered"><option> </option><!></select></label></div></div>'),
  nm = R('<button class="btn btn-xs btn-circle btn-soft btn-error tooltip tooltip-bottom"><!></button>'),
  sm = R('<button class="btn btn-xs btn-circle btn-soft btn-error tooltip tooltip-bottom ml-0.5"><!></button>'),
  am = R('<button class="btn btn-xs btn-circle btn-soft btn-warning tooltip tooltip-bottom ml-0.5"><!></button>'),
  im = R('<button class="btn btn-xs btn-circle btn-soft btn-primary tooltip tooltip-bottom mr-1"><!></button>'),
  om = R('<button class="btn btn-xs btn-circle btn-soft btn-warning tooltip tooltip-bottom mr-1"><!></button>'),
  lm = R('<div class="size-5"></div> <div class="text-base-content/80 ml-0.5"> </div>', 1),
  cm = R("<span> </span><span> </span>", 1),
  um = R('<span class="badge badge-sm badge-error ml-0.5 border-0"> </span>'),
  es = R('<span class="tooltip"><!></span>'),
  _m = R('<!> <div class="ml-0.5 flex flex-wrap items-center gap-1"><!> <!> <!> <!> <!></div>', 1),
  dm = R('<span class="text-base-content/60 ml-1 text-xs"> </span>'),
  fm = R('<span class="text-primary ml-1 text-xs"> </span>'),
  pm = R('<tr><th class="w-1"><input type="checkbox" class="checkbox-sm checkbox pointer-events-none"/></th><td class="flex items-center gap-1"><!></td><td class="text-center"> <!> <!></td></tr>'),
  hm = R('<div class="max-h-[27vh] overflow-x-hidden overflow-y-auto"><table class="table max-w-full"><thead><tr><th class="w-1"><input type="checkbox" class="checkbox-sm checkbox"/></th><th> <button class="btn btn-xs btn-circle btn-ghost tooltip tooltip-bottom ml-0.5"><!></button> <!> <!> <!></th><th class="text-center"><!> <!> </th></tr></thead><tbody></tbody></table></div>'),
  vm = R('<div class="mb-3"><div class="bg-base-200/60 border-base-300/60 rounded-xl border"><div class="flex flex-wrap items-start justify-between gap-2 px-4 py-3"><button type="button" class="flex min-w-0 flex-1 items-start justify-between gap-3 text-left"><div class="space-y-1"><div class="flex flex-wrap items-center gap-2"><span>▼</span> <span class="text-sm font-semibold"> </span> <!></div> <p class="text-base-content/70 text-xs"> </p></div></button> <div class="flex flex-wrap gap-1"><button class="btn btn-xs btn-soft"> </button> <button class="btn btn-xs btn-ghost"> </button></div></div> <!></div></div> <!>', 1),
  mm = R('<div class="pointer-events-none w-full select-none"><div class="rounded-t-box bg-base-100 border-base-300 sm:rounded-b-box pointer-events-auto w-full border-t sm:mb-3 sm:shadow-xl"><div class="p-3"><div role="button" tabindex="0" class="flex cursor-grab flex-wrap items-center justify-between gap-1 active:cursor-grabbing"><h2 class="flex items-center gap-1 pl-1 text-lg"><div class="bg-base-content/20 flex size-6 items-center justify-center rounded-full"><!></div> <span class="ml-0.5"> </span> <span class="text-base-content/80 ml-0.5 text-sm"> </span></h2> <div class="flex items-center gap-1"><!> <button><!></button> <button><!></button> <button><!></button> <button class="btn btn-circle btn-sm"><!></button></div></div> <div class="pb-3"><!></div></div></div></div>');

function gm(t, r) {
  an(r, !0);
  let e = or(r, "filters", 7),
    s = or(r, "userPickerLoading", 3, !1),
    a = or(r, "busy", 19, () => ({})),
    o = G(!1),
    u = G(void 0),
    d = G(on({
      x: 0,
      y: 0
    })),
    f, h;
  const z = ["user", "discord_mod", "discord_leader", "sac", "game_master", "game_master_leader", "dev", "admin"];

  function M() {
    return new DOMRect(0, 0, window.innerWidth, window.innerHeight)
  }

  function B(S, E, O) {
    return O >= E ? Math.min(O, Math.max(E, S)) : E
  }

  function K() {
    var Qe;
    if (!n(u)) return;
    const S = ((Qe = r.getDragBounds) == null ? void 0 : Qe.call(r)) ?? M(),
      E = n(u).getBoundingClientRect(),
      O = E.left - n(d).x,
      Ie = E.top - n(d).y;
    m(d, {
      x: B(n(d).x, S.left - O, S.right - O - E.width),
      y: B(n(d).y, S.top - Ie, S.bottom - Ie - E.height)
    }, !0)
  }

  function Le() {
    var S, E, O, Ie;
    f && ((E = (S = f.handle).hasPointerCapture) != null && E.call(S, f.pointerId) && ((Ie = (O = f.handle).releasePointerCapture) == null || Ie.call(O, f.pointerId)), f = void 0, document.body.style.userSelect = h ?? "", h = void 0, K())
  }

  function Xe(S) {
    var Qe, Je;
    if (f || S.pointerType === "mouse" && S.button !== 0) return;
    const E = S.target;
    if (E != null && E.closest("button, input, textarea, select, a") || !n(u)) return;
    const O = S.currentTarget,
      Ie = n(u).getBoundingClientRect();
    f = {
      pointerId: S.pointerId,
      handle: O,
      startX: S.clientX,
      startY: S.clientY,
      startPosX: n(d).x,
      startPosY: n(d).y,
      baseLeft: Ie.left - n(d).x,
      baseTop: Ie.top - n(d).y,
      bounds: ((Qe = r.getDragBounds) == null ? void 0 : Qe.call(r)) ?? M(),
      panelWidth: Ie.width,
      panelHeight: Ie.height
    }, h = document.body.style.userSelect, document.body.style.userSelect = "none", (Je = O.setPointerCapture) == null || Je.call(O, S.pointerId), S.preventDefault(), S.stopPropagation()
  }
  Cs(() => {
    const S = O => {
        !f || O.pointerId !== f.pointerId || m(d, {
          x: B(f.startPosX + O.clientX - f.startX, f.bounds.left - f.baseLeft, f.bounds.right - f.baseLeft - f.panelWidth),
          y: B(f.startPosY + O.clientY - f.startY, f.bounds.top - f.baseTop, f.bounds.bottom - f.baseTop - f.panelHeight)
        }, !0)
      },
      E = O => {
        (f == null ? void 0 : f.pointerId) === O.pointerId && Le()
      };
    return window.addEventListener("pointermove", S), window.addEventListener("pointerup", E), window.addEventListener("pointercancel", E), window.addEventListener("resize", K), () => {
      window.removeEventListener("pointermove", S), window.removeEventListener("pointerup", E), window.removeEventListener("pointercancel", E), window.removeEventListener("resize", K), Le()
    }
  });
  var $ = mm();
  let ye;
  var ue = c($),
    F = c(ue),
    Re = c(F);
  Bn(Re, "", {}, {
    "touch-action": "none"
  });
  var Ge = c(Re),
    Ye = c(Ge),
    it = c(Ye);
  Vv(it, {
    class: "size-4"
  }), l(Ye);
  var Ze = v(Ye, 2),
    Ae = c(Ze, !0);
  l(Ze);
  var It = v(Ze, 2),
    Be = c(It);
  l(It), l(Ge);
  var ie = v(Ge, 2),
    Q = c(ie);
  is(Q, () => r.headerActions ?? ns);
  var He = v(Q, 2);
  let re;
  var cr = c(He);
  Tv(cr, {
    class: "size-4"
  }), l(He);
  var Se = v(He, 2);
  let Ot;
  var vt = c(Se);
  Cv(vt, {
    class: "size-4"
  }), l(Se);
  var ct = v(Se, 2);
  let Vt;
  var mt = c(ct);
  {
    var Ke = S => {
        var E = Kr();
        k(S, E)
      },
      ur = S => {
        Qv(S, {
          class: "size-4"
        })
      };
    J(mt, S => {
      s() ? S(Ke) : S(ur, -1)
    })
  }
  l(ct);
  var Et = v(ct, 2),
    Zt = c(Et);
  aa(Zt, {
    class: "size-4"
  }), l(Et), l(ie), l(Re);
  var _r = v(Re, 2),
    Ht = c(_r);
  {
    var dr = S => {
        var E = Jv();
        k(S, E)
      },
      xr = S => {
        var E = Jn(),
          O = c(E),
          Ie = c(O, !0);
        l(O), l(E), H(() => y(Ie, r.emptyLabel)), k(S, E)
      },
      fr = S => {
        var E = vm(),
          O = ir(E),
          Ie = c(O),
          Qe = c(Ie),
          Je = c(Qe),
          p = c(Je),
          q = c(p),
          L = c(q),
          X = v(L, 2),
          ne = c(X, !0);
        l(X);
        var W = v(X, 2);
        {
          var se = j => {
              var D = $v(),
                le = c(D, !0);
              l(D), H(() => y(le, r.activeFilterCount)), k(j, D)
            },
            i = j => {
              var D = em(),
                le = c(D, !0);
              l(D), H(me => y(le, me), [() => Ti()]), k(j, D)
            };
          J(W, j => {
            r.hasActiveFilters ? j(se) : j(i, -1)
          })
        }
        l(q);
        var _ = v(q, 2),
          b = c(_);
        l(_), l(p), l(Je);
        var I = v(Je, 2),
          x = c(I),
          T = c(x, !0);
        l(x);
        var A = v(x, 2),
          V = c(A, !0);
        l(A), l(I), l(Qe);
        var oe = v(Qe, 2);
        {
          var Ue = j => {
            var D = rm(),
              le = c(D),
              me = c(le);
            {
              var de = be => {
                  var rt = tm(),
                    xt = c(rt),
                    et = c(xt, !0);
                  l(xt);
                  var Ne = v(xt, 2),
                    nt = c(Ne),
                    yt = c(nt, !0);
                  l(nt), nt.value = nt.__value = "";
                  var ot = v(nt);
                  Jr(ot, 16, () => z, Fe => Fe, (Fe, te) => {
                    var xe = $n(),
                      Ve = c(xe, !0);
                    l(xe);
                    var tt = {};
                    H(() => {
                      y(Ve, xa[te]), tt !== (tt = te) && (xe.value = (xe.__value = te) ?? "")
                    }), k(Fe, xe)
                  }), l(Ne), l(rt), H((Fe, te) => {
                    y(et, Fe), y(yt, te)
                  }, [() => ba(), () => jf()]), fn(Ne, () => e().role, Fe => e().role = Fe), k(be, rt)
                },
                Me = N(() => gr.hasPermission(br.tools.selectPixel.seeRole));
              J(me, be => {
                n(Me) && be(de)
              })
            }
            var Oe = v(me, 2),
              We = c(Oe),
              jt = c(We, !0);
            l(We);
            var $e = v(We, 2),
              ut = c($e),
              Bt = c(ut, !0);
            l(ut), ut.value = ut.__value = "";
            var gt = v(ut),
              Kt = c(gt, !0);
            l(gt), gt.value = gt.__value = "none";
            var _t = v(gt),
              Qt = c(_t, !0);
            l(_t), _t.value = _t.__value = "timeout";
            var ae = v(_t),
              ee = c(ae, !0);
            l(ae), ae.value = ae.__value = "ban", l($e), l(Oe);
            var ce = v(Oe, 2),
              Pe = c(ce),
              Ce = c(Pe, !0);
            l(Pe);
            var dt = v(Pe, 2);
            Pr(dt), l(ce);
            var Dt = v(ce, 2),
              Jt = c(Dt),
              $t = c(Jt, !0);
            l(Jt);
            var er = v(Jt, 2);
            Pr(er), l(Dt);
            var tr = v(Dt, 2),
              rr = c(tr),
              Wt = c(rr, !0);
            l(rr);
            var Y = v(rr, 2);
            Pr(Y), l(tr);
            var g = v(tr, 2),
              ze = c(g),
              fe = c(ze, !0);
            l(ze);
            var Te = v(ze, 2),
              C = c(Te),
              ge = c(C, !0);
            l(C), C.value = C.__value = "";
            var bt = v(C);
            Jr(bt, 17, () => Ut.colors.entries(), ([be]) => be, (be, rt) => {
              var xt = N(() => Rs(n(rt), 1));
              let et = () => n(xt)[0];
              var Ne = $n(),
                nt = c(Ne, !0);
              l(Ne);
              var yt = {};
              H(ot => {
                y(nt, ot), yt !== (yt = et()) && (Ne.value = (Ne.__value = et()) ?? "")
              }, [() => {
                var ot, Fe;
                return ((Fe = (ot = la)[et()]) == null ? void 0 : Fe.call(ot)) ?? `${Wn()} ${et()}`
              }]), k(be, Ne)
            }), l(Te), l(g), l(le), l(D), H((be, rt, xt, et, Ne, nt, yt, ot, Fe, te, xe, Ve, tt) => {
              y(jt, be), y(Bt, rt), y(Kt, xt), y(Qt, et), y(ee, Ne), y(Ce, nt), Ee(dt, "placeholder", yt), y($t, ot), Ee(er, "placeholder", Fe), y(Wt, te), Ee(Y, "placeholder", xe), y(fe, Ve), y(ge, tt)
            }, [() => ca(), () => Kn(), () => va(), () => hn(), () => Hn(), () => fa(), () => Ap(), () => Wp(), () => vh(), () => nh(), () => zh(), () => Wn(), () => Kn()]), fn($e, () => e().punishment, be => e().punishment = be), pn(dt, () => e().alliance, be => e().alliance = be), pn(er, () => e().minUserId, be => e().minUserId = be), pn(Y, () => e().maxUserId, be => e().maxUserId = be), fn(Te, () => e().colorIdx, be => e().colorIdx = be), Yn(3, D, () => Gn, () => ({
              duration: 100
            })), k(j, D)
          };
          J(oe, j => {
            n(o) && j(Ue)
          })
        }
        l(Ie), l(O);
        var _e = v(O, 2);
        {
          var Z = j => {
              var D = Jn(),
                le = c(D),
                me = c(le, !0);
              l(le), l(D), H(de => y(me, de), [() => Ks()]), k(j, D)
            },
            we = j => {
              var D = hm(),
                le = c(D),
                me = c(le),
                de = c(me),
                Me = c(de),
                Oe = c(Me);
              Pr(Oe), l(Me);
              var We = v(Me),
                jt = c(We),
                $e = v(jt),
                ut = c($e);
              ia(ut, {
                class: "size-3"
              }), l($e);
              var Bt = v($e, 2);
              {
                var gt = Y => {
                    var g = nm(),
                      ze = c(g);
                    wn(ze, {
                      class: "size-4"
                    }), l(g), H(fe => {
                      Ee(g, "data-tip", fe), g.disabled = a().timeout
                    }, [() => hn()]), he("click", g, function(...fe) {
                      var Te;
                      (Te = r.ontimeout) == null || Te.apply(this, fe)
                    }), k(Y, g)
                  },
                  Kt = N(() => gr.hasPermission(br.tools.selectArea.timeout));
                J(Bt, Y => {
                  n(Kt) && Y(gt)
                })
              }
              var _t = v(Bt, 2);
              {
                var Qt = Y => {
                    var g = sm(),
                      ze = c(g);
                    Ln(ze, {
                      class: "size-4"
                    }), l(g), H(fe => {
                      Ee(g, "data-tip", fe), g.disabled = a().ban
                    }, [() => pa()]), he("click", g, function(...fe) {
                      var Te;
                      (Te = r.onban) == null || Te.apply(this, fe)
                    }), k(Y, g)
                  },
                  ae = N(() => gr.hasPermission(br.tools.selectArea.ban));
                J(_t, Y => {
                  n(ae) && Y(Qt)
                })
              }
              var ee = v(_t, 2);
              {
                var ce = Y => {
                    var g = am(),
                      ze = c(g);
                    {
                      var fe = C => {
                          var ge = Kr();
                          k(C, ge)
                        },
                        Te = C => {
                          _a(C, {
                            class: "size-4"
                          })
                        };
                      J(ze, C => {
                        a().phone ? C(fe) : C(Te, -1)
                      })
                    }
                    l(g), H(C => {
                      Ee(g, "data-tip", C), g.disabled = a().phone || !r.hasSelection
                    }, [() => ma()]), he("click", g, function(...C) {
                      var ge;
                      (ge = r.onphone) == null || ge.apply(this, C)
                    }), k(Y, g)
                  },
                  Pe = N(() => gr.hasPermission(br.tools.selectArea.phoneVerification));
                J(ee, Y => {
                  n(Pe) && Y(ce)
                })
              }
              l(We);
              var Ce = v(We),
                dt = c(Ce);
              {
                var Dt = Y => {
                    var g = im(),
                      ze = c(g);
                    {
                      var fe = C => {
                          var ge = Kr();
                          k(C, ge)
                        },
                        Te = C => {
                          oa(C, {
                            class: "size-4"
                          })
                        };
                      J(ze, C => {
                        a().clear ? C(fe) : C(Te, -1)
                      })
                    }
                    l(g), H(C => {
                      Ee(g, "data-tip", C), g.disabled = a().clear || !r.hasSelection
                    }, [() => ha()]), he("click", g, function(...C) {
                      var ge;
                      (ge = r.onclear) == null || ge.apply(this, C)
                    }), k(Y, g)
                  },
                  Jt = N(() => gr.hasPermission(br.tools.selectArea.clear));
                J(dt, Y => {
                  n(Jt) && Y(Dt)
                })
              }
              var $t = v(dt, 2);
              {
                var er = Y => {
                    var g = om(),
                      ze = c(g);
                    {
                      var fe = C => {
                          var ge = Kr();
                          k(C, ge)
                        },
                        Te = C => {
                          yn(C, {
                            class: "size-4"
                          })
                        };
                      J(ze, C => {
                        a().reverse ? C(fe) : C(Te, -1)
                      })
                    }
                    l(g), H(C => {
                      Ee(g, "data-tip", C), g.disabled = a().reverse || !r.hasSelection
                    }, [() => os()]), he("click", g, function(...C) {
                      var ge;
                      (ge = r.onreverse) == null || ge.apply(this, C)
                    }), k(Y, g)
                  },
                  tr = N(() => gr.hasPermission(br.tools.selectArea.reverse));
                J($t, Y => {
                  n(tr) && Y(er)
                })
              }
              var rr = v($t);
              l(Ce), l(de), l(me);
              var Wt = v(me);
              Jr(Wt, 21, () => r.rows, Y => Y.id, (Y, g) => {
                const ze = N(() => n(g).filteredPixelCount > 0 && n(g).selectedFilteredCount >= n(g).filteredPixelCount);
                var fe = pm();
                let Te;
                var C = c(fe),
                  ge = c(C);
                Pr(ge), l(C);
                var bt = v(C),
                  be = c(bt);
                {
                  var rt = te => {
                      var xe = lm(),
                        Ve = v(ir(xe), 2),
                        tt = c(Ve, !0);
                      l(Ve), H(Rt => y(tt, Rt), [() => en()]), k(te, xe)
                    },
                    xt = te => {
                      var xe = _m(),
                        Ve = ir(xe);
                      {
                        let ve = N(() => n(g).picture ?? void 0),
                          ke = N(() => n(g).avatarSeed ?? void 0);
                        ta(Ve, {
                          class: "size-5",
                          get userId() {
                            return n(g).id
                          },
                          get pictureUrl() {
                            return n(ve)
                          },
                          get avatarSeed() {
                            return n(ke)
                          }
                        })
                      }
                      var tt = v(Ve, 2),
                        Rt = c(tt);
                      {
                        let ve = N(() => Zr(n(g).id)),
                          ke = N(() => Zr(n(g).id));
                        sa(Rt, {
                          get userId() {
                            return n(g).id
                          },
                          get linkClass() {
                            return `font-medium ${n(ve)??""} flex gap-1.5`
                          },
                          get textClass() {
                            return `font-medium ${n(ke)??""} flex gap-1.5`
                          },
                          children: (wt, ft) => {
                            var hr = cm(),
                              Ft = ir(hr),
                              Lr = c(Ft, !0);
                            l(Ft);
                            var nr = v(Ft),
                              Xr = c(nr);
                            l(nr), H(() => {
                              y(Lr, n(g).name), y(Xr, `#${n(g).id??""}`)
                            }), k(wt, hr)
                          },
                          $$slots: {
                            default: !0
                          }
                        })
                      }
                      var yr = v(Rt, 2);
                      {
                        var Br = ve => {
                          {
                            let ke = N(() => Nn(n(g).allianceId)),
                              wt = N(() => Zr(n(g).allianceId)),
                              ft = N(() => Nn(n(g).allianceId)),
                              hr = N(() => Zr(n(g).allianceId));
                            na(ve, {
                              get allianceId() {
                                return n(g).allianceId
                              },
                              get linkClass() {
                                return `badge badge-sm ml-0.5 border-0 ${n(ke)??""} ${n(wt)??""}`
                              },
                              get textClass() {
                                return `badge badge-sm ml-0.5 border-0 ${n(ft)??""} ${n(hr)??""}`
                              },
                              children: (Ft, Lr) => {
                                Fs();
                                var nr = Ls();
                                H(() => y(nr, n(g).allianceName)), k(Ft, nr)
                              },
                              $$slots: {
                                default: !0
                              }
                            })
                          }
                        };
                        J(yr, ve => {
                          n(g).allianceId && ve(Br)
                        })
                      }
                      var Dr = v(yr, 2);
                      {
                        var Rr = ve => {
                          ra(ve, {
                            get role() {
                              return n(g).role
                            },
                            big: !1
                          })
                        };
                        J(Dr, ve => {
                          n(g).role && n(g).role !== "user" && ve(Rr)
                        })
                      }
                      var pr = v(Dr, 2);
                      {
                        var wr = ve => {
                          var ke = um(),
                            wt = c(ke, !0);
                          l(ke), H(ft => y(wt, ft), [() => Qs()]), k(ve, ke)
                        };
                        J(pr, ve => {
                          n(g).deleted && ve(wr)
                        })
                      }
                      var kr = v(pr, 2);
                      {
                        var cn = ve => {
                            var ke = es(),
                              wt = c(ke);
                            Ln(wt, {
                              class: "text-error size-4"
                            }), l(ke), H(ft => Ee(ke, "data-tip", ft), [() => Hn()]), k(ve, ke)
                          },
                          Fr = ve => {
                            var ke = es(),
                              wt = c(ke);
                            wn(wt, {
                              class: "text-error size-4"
                            }), l(ke), H(ft => Ee(ke, "data-tip", ft), [() => hn()]), k(ve, ke)
                          };
                        J(kr, ve => {
                          n(g).banned ? ve(cn) : n(g).timedOut && ve(Fr, 1)
                        })
                      }
                      l(tt), k(te, xe)
                    };
                  J(be, te => {
                    n(g).id === 0 ? te(rt) : te(xt, -1)
                  })
                }
                l(bt);
                var et = v(bt),
                  Ne = c(et),
                  nt = v(Ne);
                {
                  var yt = te => {
                    var xe = dm(),
                      Ve = c(xe);
                    l(xe), H((tt, Rt) => y(Ve, `${tt??""}
														${Rt??""}`), [() => mi(), () => n(g).totalPixelCount.toLocaleString(navigator.language)]), k(te, xe)
                  };
                  J(nt, te => {
                    n(g).filteredPixelCount !== n(g).totalPixelCount && te(yt)
                  })
                }
                var ot = v(nt, 2);
                {
                  var Fe = te => {
                    var xe = fm(),
                      Ve = c(xe);
                    l(xe), H(tt => y(Ve, `(${tt??""})`), [() => n(g).selectedFilteredCount.toLocaleString(navigator.language)]), k(te, xe)
                  };
                  J(ot, te => {
                    n(g).selectedFilteredCount > 0 && !n(ze) && te(Fe)
                  })
                }
                l(et), l(fe), H(te => {
                  Te = At(fe, 1, "hover:bg-base-300 cursor-pointer", null, Te, {
                    "bg-base-200": n(g).selectedFilteredCount > 0
                  }), Dn(ge, n(ze)), ge.indeterminate = !n(ze) && n(g).selectedFilteredCount > 0, y(Ne, `${te??""} `)
                }, [() => n(g).filteredPixelCount.toLocaleString(navigator.language)]), he("click", fe, () => r.ontogglerow(n(g).id)), k(Y, fe)
              }), l(Wt), l(le), l(D), H((Y, g, ze) => {
                Dn(Oe, r.filteredSelectionState !== "none"), Oe.indeterminate = r.filteredSelectionState === "some", y(jt, `${Y??""} `), Ee($e, "data-tip", g), y(rr, ` ${ze??""}`)
              }, [() => $r(), () => ua(), () => ga()]), he("click", Oe, function(...Y) {
                var g;
                (g = r.ontogglefiltered) == null || g.apply(this, Y)
              }), he("click", $e, function(...Y) {
                var g;
                (g = r.oncopy) == null || g.apply(this, Y)
              }), k(j, D)
            };
          J(_e, j => {
            r.rows.length === 0 ? j(Z) : j(we, -1)
          })
        }
        H((j, D, le, me, de, Me, Oe) => {
          At(L, 1, `text-base-content/60 mt-0.5 text-xs transition-transform duration-200 ${n(o)?"rotate-180":""}`), y(ne, j), y(b, `${D??""}
											${le??""} -
											${me??""}
											${de??""}`), x.disabled = r.rows.length === 0, y(T, Me), A.disabled = !r.hasActiveFilters, y(V, Oe)
        }, [() => Ga(), () => r.rows.length.toLocaleString(navigator.language), () => Hi(), () => r.filteredPixelCount.toLocaleString(navigator.language), () => Xn(), () => r.filteredSelectionState === "all" ? wf() : cf(), () => ro()]), he("click", Je, () => m(o, !n(o))), he("click", x, function(...j) {
          var D;
          (D = r.ontogglefiltered) == null || D.apply(this, j)
        }), he("click", A, function(...j) {
          var D;
          (D = r.onresetfilters) == null || D.apply(this, j)
        }), k(S, E)
      };
    J(Ht, S => {
      r.loading ? S(dr) : r.totalRowCount === 0 ? S(xr, 1) : S(fr, -1)
    })
  }
  l(_r), l(F), l(ue), l($), ss($, S => m(u, S), () => n(u)), H((S, E, O, Ie, Qe, Je, p) => {
    ye = Bn($, "", ye, {
      transform: `translate3d(${n(d).x}px, ${n(d).y}px, 0)`,
      "will-change": "transform"
    }), y(Ae, S), y(Be, `(${E??""}: ${O??""})`), re = At(He, 1, "btn btn-xs tooltip tooltip-bottom", null, re, {
      "btn-soft": r.activeTool !== "brush-circle",
      "btn-primary": r.activeTool === "brush-circle"
    }), Ee(He, "data-tip", Ie), Ee(He, "aria-pressed", r.activeTool === "brush-circle"), Ot = At(Se, 1, "btn btn-xs tooltip tooltip-bottom", null, Ot, {
      "btn-soft": r.activeTool !== "brush-square",
      "btn-primary": r.activeTool === "brush-square"
    }), Ee(Se, "data-tip", Qe), Ee(Se, "aria-pressed", r.activeTool === "brush-square"), Vt = At(ct, 1, "btn btn-xs tooltip tooltip-bottom", null, Vt, {
      "btn-soft": r.activeTool !== "user-picker",
      "btn-primary": r.activeTool === "user-picker"
    }), Ee(ct, "data-tip", Je), Ee(ct, "aria-pressed", r.activeTool === "user-picker"), Ee(Et, "aria-label", p)
  }, [() => ip(), () => Xn(), () => r.totalSelectedPixels.toLocaleString(navigator.language), () => Yh({
    size: r.brushDiameter
  }), () => tv({
    size: r.brushDiameter
  }), () => Zd(), () => as()]), he("pointerdown", Re, Xe), he("click", He, () => r.ontoolchange("brush-circle")), he("click", Se, () => r.ontoolchange("brush-square")), he("click", ct, () => r.ontoolchange("user-picker")), he("click", Et, function(...S) {
    var E;
    (E = r.onclose) == null || E.apply(this, S)
  }), Yn(3, ue, () => Gn, () => ({
    duration: 100
  })), k(t, $), ln()
}
In(["pointerdown", "click"]);

function bm() {
  return {
    role: "",
    alliance: "",
    minUserId: "",
    maxUserId: "",
    colorIdx: "",
    punishment: ""
  }
}

function qn(t) {
  if (typeof t == "number") return Number.isInteger(t) ? t : void 0;
  const r = t.trim();
  if (r === "") return;
  const e = Number(r);
  return Number.isInteger(e) ? e : void 0
}

function Mn(t) {
  return t.trim().toLowerCase()
}

function Tr(t) {
  return t.tileXs.length
}

function lr(t, r = Ut.colors.length) {
  const e = qn(t.colorIdx);
  if (!(e === void 0 || e < 0 || e >= r)) return e
}

function xm(t, r) {
  return r.punishment === "" ? !0 : r.punishment === "ban" ? t.banned === !0 : r.punishment === "timeout" ? t.timedOut === !0 && t.banned !== !0 : t.banned !== !0 && t.timedOut !== !0
}

function ym(t, r) {
  var o, u;
  if (r.role !== "" && t.role !== r.role) return !1;
  const e = Mn(r.alliance);
  if (e !== "") {
    const d = ((o = t.allianceId) == null ? void 0 : o.toString()) ?? "",
      f = ((u = t.allianceName) == null ? void 0 : u.toLowerCase()) ?? "";
    if (!d.includes(e) && !f.includes(e)) return !1
  }
  const s = qn(r.minUserId);
  if (s !== void 0 && t.id < s) return !1;
  const a = qn(r.maxUserId);
  return a !== void 0 && t.id > a ? !1 : xm(t, r)
}

function wm(t, r, e = lr(r)) {
  return ym(t, r) ? e === void 0 ? Tr(t.painted) : t.painted.colorCounts[e] ?? 0 : 0
}

function km(t, r = Ut.colors.length) {
  return t.role !== "" || Mn(t.alliance) !== "" || t.minUserId.trim() !== "" || t.maxUserId.trim() !== "" || lr(t, r) !== void 0 || t.punishment !== ""
}

function qm(t, r = Ut.colors.length) {
  let e = 0;
  return t.role !== "" && (e += 1), Mn(t.alliance) !== "" && (e += 1), t.minUserId.trim() !== "" && (e += 1), t.maxUserId.trim() !== "" && (e += 1), lr(t, r) !== void 0 && (e += 1), t.punishment !== "" && (e += 1), e
}

function k0(t) {
  return t + .5
}

function Sm(t, r, e, s, a, o) {
  const u = t + .5 - e,
    d = r + .5 - s;
  return o === "circle" ? u * u + d * d <= a * a : Math.abs(u) <= a && Math.abs(d) <= a
}
var Xt, zt;
class Im {
  constructor() {
    sr(this, "pixels", new Map);
    sr(this, "countByUser", new Map);
    qt(this, Xt, G(0));
    qt(this, zt, G(0))
  }
  get size() {
    return n(U(this, Xt))
  }
  get changeToken() {
    return n(U(this, zt))
  }
  has(r) {
    return this.pixels.has(r)
  }
  countForUser(r) {
    return this.countByUser.get(r) ?? 0
  }
  addPixel(r) {
    return this.pixels.has(r.key) ? !1 : (this.pixels.set(r.key, r), m(U(this, Xt), n(U(this, Xt)) + 1), this.countByUser.set(r.userId, (this.countByUser.get(r.userId) ?? 0) + 1), m(U(this, zt), n(U(this, zt)) + 1), !0)
  }
  removePixel(r) {
    const e = this.pixels.get(r);
    if (!e) return;
    this.pixels.delete(r), m(U(this, Xt), n(U(this, Xt)) - 1);
    const s = this.countByUser.get(e.userId) ?? 0;
    return s <= 1 ? this.countByUser.delete(e.userId) : this.countByUser.set(e.userId, s - 1), m(U(this, zt), n(U(this, zt)) + 1), e
  }
  clear() {
    this.pixels.clear(), this.countByUser.clear(), m(U(this, Xt), 0), m(U(this, zt), n(U(this, zt)) + 1)
  }
}
Xt = new WeakMap, zt = new WeakMap;
const Mm = 1e4;

function Sn(t, r) {
  return `${t}:${r}`
}
var Ar, Ur, Yt;
class Pm {
  constructor(r, e) {
    sr(this, "selectedUsers", new kn);
    sr(this, "selection", new Im);
    qt(this, Ar, G(on(bm())));
    sr(this, "pixels", new Map);
    sr(this, "pixelsByTile", new Map);
    qt(this, Ur, G([]));
    qt(this, Yt, G(0));
    this.tileSize = r, this.renderer = e
  }
  get filters() {
    return n(U(this, Ar))
  }
  set filters(r) {
    m(U(this, Ar), r, !0)
  }
  get users() {
    return n(U(this, Ur))
  }
  set users(r) {
    m(U(this, Ur), r)
  }
  get changeToken() {
    return n(U(this, Yt)) + this.selection.changeToken
  }
  get totalSelectedPixels() {
    this.selection.changeToken;
    let r = this.selection.size;
    for (const e of this.selectedUsers.values()) r += Tr(e.painted);
    return r
  }
  get filteredPixelCountByUser() {
    n(U(this, Yt));
    const r = lr(this.filters),
      e = new Map;
    for (const s of this.users) {
      const a = wm(s, this.filters, r);
      a > 0 && e.set(s.id, a)
    }
    return e
  }
  get filteredUsers() {
    const r = this.filteredPixelCountByUser;
    return this.users.filter(e => r.has(e.id))
  }
  get filteredPixelsTotal() {
    let r = 0;
    for (const e of this.filteredPixelCountByUser.values()) r += e;
    return r
  }
  get hasActiveFilters() {
    return km(this.filters)
  }
  get activeFilterCount() {
    return qm(this.filters)
  }
  get filteredSelectionState() {
    const r = this.filteredUsers;
    if (r.length === 0) return "none";
    let e = !1,
      s = !0;
    for (const a of r) {
      const o = this.filteredPixelCountByUser.get(a.id) ?? 0,
        u = this.getSelectedFilteredPixelCount(a.id);
      u > 0 && (e = !0), u < o && (s = !1)
    }
    return e ? s ? "all" : "some" : "none"
  }
  get panelRows() {
    const r = this.filteredPixelCountByUser;
    return this.filteredUsers.map(e => ({
      id: e.id,
      name: e.name,
      picture: e.picture,
      avatarSeed: e.avatarSeed,
      allianceId: e.allianceId,
      allianceName: e.allianceName,
      role: e.role,
      deleted: e.deleted,
      banned: e.banned,
      timedOut: e.timedOut,
      filteredPixelCount: r.get(e.id) ?? 0,
      totalPixelCount: Tr(e.painted),
      selectedFilteredCount: this.getSelectedFilteredPixelCount(e.id)
    }))
  }
  load(r, e) {
    this.clearSelection(), this.users = r, this.pixels.clear(), this.pixelsByTile.clear();
    for (const s of e) {
      this.pixels.set(s.key, s);
      const a = `${Math.floor(s.x/this.tileSize)}:${Math.floor(s.y/this.tileSize)}`,
        o = this.pixelsByTile.get(a) ?? [];
      o.push(s), this.pixelsByTile.set(a, o)
    }
    m(U(this, Yt), n(U(this, Yt)) + 1)
  }
  clear() {
    this.clearSelection(), this.users = [], this.pixels.clear(), this.pixelsByTile.clear(), this.resetFilters(), m(U(this, Yt), n(U(this, Yt)) + 1)
  }
  clearSelected() {
    this.clearSelection()
  }
  restoreSelection(r, e) {
    this.clearSelection();
    for (const s of r) {
      const a = this.findUser(s);
      a && this.selectedUsers.set(s, a)
    }
    for (const s of e) {
      const a = this.pixels.get(s);
      a && !this.selectedUsers.has(a.userId) && this.selection.addPixel(a)
    }
    this.rebuildRenderer()
  }
  resetFilters() {
    this.filters.role = "", this.filters.alliance = "", this.filters.minUserId = "", this.filters.maxUserId = "", this.filters.colorIdx = "", this.filters.punishment = ""
  }
  findUser(r) {
    return this.users.find(e => e.id === r)
  }
  pixelAt(r, e) {
    return this.pixels.get(Sn(r, e))
  }
  getSelectedFilteredPixelCount(r) {
    const e = this.filteredPixelCountByUser.get(r) ?? 0;
    if (e === 0) return 0;
    if (this.selectedUsers.has(r)) return e;
    const s = lr(this.filters);
    if (s === void 0) return this.selection.countForUser(r);
    let a = 0;
    for (const o of this.selection.pixels.values()) o.userId === r && o.colorIdx === s && (a += 1);
    return a
  }
  toggleFilteredUser(r) {
    const e = this.findUser(r);
    if (!e) return !1;
    const s = this.filteredPixelCountByUser.get(r) ?? 0;
    return s === 0 ? !1 : this.getSelectedFilteredPixelCount(r) >= s ? this.removeFilteredPixels(e) : this.addFilteredPixels(e)
  }
  toggleAllFiltered() {
    const r = this.filteredUsers;
    if (r.length === 0) return !1;
    const e = this.filteredSelectionState !== "all";
    let s = !1;
    for (const a of r) s = (e ? this.addFilteredPixels(a, !0) : this.removeFilteredPixels(a, !0)) || s;
    return s && this.rebuildRenderer(), s
  }
  selectUser(r) {
    const e = this.findUser(r);
    return !e || e.id === 0 ? !1 : this.selectEntireUser(e)
  }
  deselectUser(r) {
    if (!this.findUser(r)) return !1;
    const s = this.selectedUsers.delete(r),
      a = this.clearSelectedPixelsForUser(r, !0);
    return (s || a) && this.rebuildRenderer(), s || a
  }
  applyBrush(r, e, s, a, o) {
    var h, z;
    const u = this.collectPixelsWithinBrush(r, e, a, s);
    if (u.length === 0) return !1;
    const d = [],
      f = new Map;
    if (o === "add")
      for (const M of u) this.selectedUsers.has(M.userId) || this.selection.has(M.key) || this.selection.addPixel(M) && (d.push(M), f.set(M.userId, (f.get(M.userId) ?? 0) + 1));
    else
      for (const M of u) this.selectedUsers.has(M.userId) && this.expandSelectedUser(M.userId), this.selection.removePixel(M.key) && d.push(M);
    return d.length === 0 ? !1 : (o === "add" ? ((h = this.renderer) == null || h.addPixels(d), this.promoteUsersForFullCoverage(f)) : (z = this.renderer) == null || z.removePixels(d), !0)
  }
  selectedPixels() {
    const r = [],
      e = new Set;
    for (const s of this.selectedUsers.values()) this.forEachUserPixel(s, a => {
      e.has(a.key) || (e.add(a.key), r.push(a))
    });
    for (const s of this.selection.pixels.values()) e.has(s.key) || r.push(s);
    return r
  }
  selectedUserIds() {
    return [...new Set(this.selectedPixels().map(e => e.userId).filter(e => e > 0))]
  }
  clearSelection() {
    var r;
    this.selectedUsers.clear(), this.selection.clear(), (r = this.renderer) == null || r.clear()
  }
  userCoversEntireArea(r) {
    return this.pixels.size > 0 && Tr(r.painted) === this.pixels.size
  }
  forEachUserPixel(r, e) {
    var a;
    const s = r.painted;
    for (let o = 0; o < s.tileXs.length; o += 1) {
      const u = s.tileXs[o] * this.tileSize + s.pixelXs[o],
        d = s.tileYs[o] * this.tileSize + s.pixelYs[o],
        f = Sn(u, d),
        h = this.pixels.get(f) ?? {
          key: f,
          userId: r.id,
          x: u,
          y: d,
          tile: [Math.floor(u / this.tileSize), Math.floor(d / this.tileSize)],
          pixel: [u - Math.floor(u / this.tileSize) * this.tileSize, d - Math.floor(d / this.tileSize) * this.tileSize],
          colorIdx: s.colorIdxs[o],
          eventId: (a = s.eventIds) == null ? void 0 : a[o]
        };
      e(h, o)
    }
  }
  selectEntireUser(r, e = !1) {
    if (this.userCoversEntireArea(r)) return this.selectedUsers.size === 1 && this.selectedUsers.has(r.id) && this.selection.size === 0 ? !1 : (this.selectedUsers.clear(), this.selectedUsers.set(r.id, r), this.selection.clear(), e || this.rebuildRenderer(), !0);
    let s = this.clearSelectedPixelsForUser(r.id, !0);
    return this.selectedUsers.has(r.id) || (this.selectedUsers.set(r.id, r), s = !0), s && !e && this.rebuildRenderer(), s
  }
  expandSelectedUser(r) {
    const e = this.selectedUsers.get(r);
    e && (this.selectedUsers.delete(r), this.forEachUserPixel(e, s => this.selection.addPixel(s)))
  }
  clearSelectedPixelsForUser(r, e = !1) {
    var a;
    const s = [];
    for (const o of this.selection.pixels.values()) o.userId === r && this.selection.removePixel(o.key) && s.push(o);
    return s.length > 0 && !e && ((a = this.renderer) == null || a.removePixels(s)), s.length > 0
  }
  addFilteredPixels(r, e = !1) {
    var o;
    const s = lr(this.filters);
    if (s === void 0) return this.selectEntireUser(r, e);
    const a = [];
    return this.forEachUserPixel(r, u => {
      u.colorIdx === s && !this.selectedUsers.has(u.userId) && this.selection.addPixel(u) && a.push(u)
    }), a.length > 0 && !e && ((o = this.renderer) == null || o.addPixels(a)), a.length > 0
  }
  removeFilteredPixels(r, e = !1) {
    var o;
    const s = lr(this.filters);
    if (s === void 0) {
      const u = this.selectedUsers.delete(r.id),
        d = this.clearSelectedPixelsForUser(r.id, !0);
      return (u || d) && !e && this.rebuildRenderer(), u || d
    }
    this.selectedUsers.has(r.id) && this.expandSelectedUser(r.id);
    const a = [];
    return this.forEachUserPixel(r, u => {
      u.colorIdx === s && this.selection.removePixel(u.key) && a.push(u)
    }), a.length > 0 && !e && ((o = this.renderer) == null || o.removePixels(a)), a.length > 0
  }
  promoteUsersForFullCoverage(r) {
    let e = !1;
    for (const [s, a] of r) {
      if (this.selectedUsers.has(s)) continue;
      const o = this.findUser(s);
      if (!o) continue;
      this.selection.countForUser(s) - a + a >= Tr(o.painted) && (this.selectEntireUser(o, !0), e = !0)
    }
    e && this.rebuildRenderer()
  }
  collectPixelsWithinBrush(r, e, s, a) {
    const o = Math.floor((r - s) / this.tileSize),
      u = Math.floor((r + s) / this.tileSize),
      d = Math.floor((e - s) / this.tileSize),
      f = Math.floor((e + s) / this.tileSize),
      h = [];
    for (let z = d; z <= f; z += 1)
      for (let M = o; M <= u; M += 1) {
        const B = this.pixelsByTile.get(`${M}:${z}`);
        if (B)
          for (const K of B) Sm(K.x, K.y, r, e, s, a) && h.push(K)
      }
    return h
  }
  rebuildRenderer() {
    if (!this.renderer) return;
    this.renderer.clear();
    for (const e of this.selectedUsers.values()) {
      if (this.renderer.addPaintedCoordinates) {
        this.renderer.addPaintedCoordinates(e.painted, this.tileSize);
        continue
      }
      const s = [];
      this.forEachUserPixel(e, a => s.push(a)), this.renderer.addPixels(s)
    }
    const r = [...this.selection.pixels.values()].filter(e => !this.selectedUsers.has(e.userId));
    if (r.length !== 0) {
      if (r.length < Mm) {
        this.renderer.addPixels(r);
        return
      }
      this.renderer.addRectangles(zm(r))
    }
  }
}
Ar = new WeakMap, Ur = new WeakMap, Yt = new WeakMap;

function zm(t) {
  const r = [...t].sort((a, o) => a.y - o.y || a.x - o.x),
    e = [];
  let s;
  for (const a of r) {
    if (s && s.minY === a.y && s.maxX + 1 === a.x) {
      s.maxX = a.x;
      continue
    }
    s = {
      minX: a.x,
      minY: a.y,
      maxX: a.x,
      maxY: a.y
    }, e.push(s)
  }
  return e
}
const Tm = 3e4,
  Am = 1e6;

function Um(t, r, e, s, a) {
  var Le;
  const o = ((Le = t[0]) == null ? void 0 : Le.durationUs) ?? Math.max(1, Math.round(83333.33333333333)),
    u = Jm(t),
    d = Qm(t),
    f = Cm();
  let h = ts(t, e, s, o, u, a, 0);
  const M = f.byteLength + h.byteLength + 8;
  h = ts(t, e, s, o, u, a, M);
  const B = Km("mdat", d),
    K = [f, h, B];
  for (const Xe of t) K.push(Xe.data);
  return new Blob(K, {
    type: r.mimeType
  })
}

function Cm() {
  return Ct("ftyp", [ar("isom"), w(512), ar("isom"), ar("iso2"), ar("avc1"), ar("mp41")])
}

function ts(t, r, e, s, a, o, u) {
  return Ct("moov", [Em(a), jm(t, r, e, s, a, o, u)])
}

function Em(t) {
  return lt("mvhd", 0, 0, [w(0), w(0), w(1e6), w(t), w(65536), je(256), je(0), w(0), w(0), ls(), w(0), w(0), w(0), w(0), w(0), w(0), w(2)])
}

function jm(t, r, e, s, a, o, u) {
  return Ct("trak", [Bm(r, e, a), Dm(t, r, e, s, a, o, u)])
}

function Bm(t, r, e) {
  return lt("tkhd", 0, 7, [w(0), w(0), w(1), w(0), w(e), w(0), w(0), je(0), je(0), je(0), je(0), ls(), w(t << 16), w(r << 16)])
}

function Dm(t, r, e, s, a, o, u) {
  return Ct("mdia", [Rm(a), Fm(), Lm(t, r, e, s, o, u)])
}

function Rm(t) {
  return lt("mdhd", 0, 0, [w(0), w(0), w(1e6), w(t), je(0), je(0)])
}

function Fm() {
  return lt("hdlr", 0, 0, [w(0), ar("vide"), w(0), w(0), w(0), ar("VideoHandler\0")])
}

function Lm(t, r, e, s, a, o) {
  return Ct("minf", [lt("vmhd", 0, 1, [je(0), je(0), je(0), je(0)]), Xm(), Ym(t, r, e, s, a, o)])
}

function Xm() {
  const t = lt("url ", 0, 1, []),
    r = lt("dref", 0, 0, [w(1), t]);
  return Ct("dinf", [r])
}

function Ym(t, r, e, s, a, o) {
  return Ct("stbl", [Hm(r, e, a), Nm(t.length, s), Gm(t.length), Om(t), Vm(o), Zm(t)])
}

function Hm(t, r, e) {
  return lt("stsd", 0, 0, [w(1), Wm(t, r, e)])
}

function Wm(t, r, e) {
  const s = new Uint8Array(32);
  return Ct("avc1", [new Uint8Array(6), je(1), je(0), je(0), w(0), w(0), w(0), je(t), je(r), w(4718592), w(4718592), w(0), je(1), s, je(24), je(65535), Ct("avcC", [e])])
}

function Nm(t, r) {
  return lt("stts", 0, 0, [w(1), w(t), w(r)])
}

function Gm(t) {
  return lt("stsc", 0, 0, [w(1), w(1), w(t), w(1)])
}

function Om(t) {
  const r = new Array(t.length);
  for (let e = 0; e < t.length; e += 1) r[e] = w(t[e].data.byteLength);
  return lt("stsz", 0, 0, [w(0), w(t.length), ...r])
}

function Vm(t) {
  if (t > 4294967295) throw new Error(at());
  return lt("stco", 0, 0, [w(1), w(t)])
}

function Zm(t) {
  let r = 0;
  for (const a of t) a.keyFrame && (r += 1);
  const e = new Array(r);
  let s = 0;
  for (let a = 0; a < t.length; a += 1) t[a].keyFrame && (e[s] = w(a + 1), s += 1);
  return lt("stss", 0, 0, [w(r), ...e])
}

function Ct(t, r) {
  const e = cs(r),
    s = new Uint8Array(8 + e);
  new DataView(s.buffer).setUint32(0, s.byteLength, !1), Pn(s, 4, t);
  let o = 8;
  for (const u of r) s.set(u, o), o += u.byteLength;
  return s
}

function lt(t, r, e, s) {
  const a = new Uint8Array(4);
  return a[0] = r & 255, a[1] = e >> 16 & 255, a[2] = e >> 8 & 255, a[3] = e & 255, Ct(t, [a, ...s])
}

function Km(t, r) {
  if (!Number.isSafeInteger(r) || r < 0 || r > 4294967287) throw new Error(at());
  const e = new Uint8Array(8);
  return new DataView(e.buffer).setUint32(0, r + 8, !1), Pn(e, 4, t), e
}

function ls() {
  const t = new Uint8Array(36),
    r = new DataView(t.buffer);
  return r.setUint32(0, 65536, !1), r.setUint32(16, 65536, !1), r.setUint32(32, 1073741824, !1), t
}

function ar(t) {
  const r = new Uint8Array(t.length);
  return Pn(r, 0, t), r
}

function je(t) {
  const r = new Uint8Array(2);
  return new DataView(r.buffer).setUint16(0, t, !1), r
}

function w(t) {
  if (!Number.isSafeInteger(t) || t < 0 || t > 4294967295) throw new Error(at());
  const r = new Uint8Array(4);
  return new DataView(r.buffer).setUint32(0, t, !1), r
}

function Pn(t, r, e) {
  for (let s = 0; s < e.length; s += 1) t[r + s] = e.charCodeAt(s) & 255
}

function Qm(t) {
  let r = 0;
  for (const e of t) r += e.data.byteLength;
  return r
}

function Jm(t) {
  const r = t[t.length - 1];
  return r ? r.timestampUs + r.durationUs : 0
}

function $m(t) {
  const r = ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t),
    e = new Uint8Array(r.byteLength);
  return e.set(r), e
}

function eg(t, r, e, s, a) {
  const o = r.webmCodecId;
  if (!o) throw new Error(at());
  const u = ht([26, 69, 223, 163], [...st([66, 134], 1), ...st([66, 247], 1), ...st([66, 242], 4), ...st([66, 243], 8), ...nn([66, 130], "webm"), ...st([66, 135], 4), ...st([66, 133], 2)]),
    d = [...tg(t), ...rg(o, e, s, a), ...ng(t)],
    f = ht([24, 83, 128, 103], d),
    h = [];
  for (const z of u) h.push(z);
  for (const z of f) h.push(z);
  return new Blob(h, {
    type: r.mimeType
  })
}

function tg(t) {
  const r = t[t.length - 1],
    e = r ? (r.timestampUs + r.durationUs) / 1e3 : 0;
  return ht([21, 73, 169, 102], [...st([42, 215, 177], Am), ...ag([68, 137], e), ...nn([77, 128], "wplace"), ...nn([87, 65], "wplace")])
}

function rg(t, r, e, s) {
  const a = ht([174], [...st([215], 1), ...st([115, 197], 1), ...st([131], 1), ...nn([134], t), ...st([35, 227, 131], Math.round(1e9 / s)), ...ht([224], [...st([176], r), ...st([186], e)])]);
  return ht([22, 84, 174, 107], a)
}

function ng(t) {
  const r = [];
  let e = -1,
    s = [];
  for (const a of t) {
    const o = Math.round(a.timestampUs / 1e3);
    (e < 0 || o - e > Tm) && (s.length > 0 && r.push(...ht([31, 67, 182, 117], s)), e = o, s = st([231], e)), s.push(...sg(a, e))
  }
  return s.length > 0 && r.push(...ht([31, 67, 182, 117], s)), r
}

function sg(t, r) {
  const s = Math.round(t.timestampUs / 1e3) - r;
  if (s < -32768 || s > 32767) throw new Error(at());
  const a = new Uint8Array(4);
  return a[0] = 129, a[1] = s >> 8 & 255, a[2] = s & 255, a[3] = t.keyFrame ? 128 : 0, ht([163], [a, t.data])
}

function ht(t, r) {
  const e = cs(r);
  return [new Uint8Array(t), og(e), ...r]
}

function st(t, r) {
  return ht(t, [ig(r)])
}

function ag(t, r) {
  const e = new Uint8Array(8);
  return new DataView(e.buffer).setFloat64(0, r, !1), ht(t, [e])
}

function nn(t, r) {
  return ht(t, [new TextEncoder().encode(r)])
}

function ig(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error(at());
  let r = 1;
  for (; r < 8 && t >= 2 ** (r * 8);) r += 1;
  const e = new Uint8Array(r);
  let s = t;
  for (let a = r - 1; a >= 0; a -= 1) e[a] = s & 255, s = Math.floor(s / 256);
  return e
}

function og(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error(at());
  for (let r = 1; r <= 8; r += 1) {
    const e = 2 ** (7 * r) - 2;
    if (t <= e) {
      const s = new Uint8Array(r);
      let a = t;
      for (let o = r - 1; o >= 0; o -= 1) s[o] = a & 255, a = Math.floor(a / 256);
      return s[0] |= 1 << 8 - r, s
    }
  }
  throw new Error(at())
}

function cs(t) {
  let r = 0;
  for (const e of t) r += e.byteLength;
  return r
}
const lg = 4096,
  cg = .15,
  ug = 5e5,
  _g = 25e6,
  dg = 8,
  fg = /^#[0-9a-fA-F]{6}$/;

function q0(t) {
  const r = new DataView(t);
  if (t.byteLength < 5) return {
    view: r,
    frames: []
  };
  const e = r.getUint8(0);
  if (e !== 1) throw new Error(`unsupported timelapse binary version: ${e}`);
  const s = r.getUint32(1, !0);
  let a = 5;
  const o = new Array(s);
  for (let u = 0; u < s; u += 1) {
    const d = r.getUint32(a, !0),
      h = r.getInt32(a + 4, !0) * 4294967296 + d;
    a += 8;
    const z = r.getUint32(a, !0);
    a += 4, o[u] = {
      timestamp: h,
      changeCount: z,
      dataOffset: a
    }, a += z * 13
  }
  return {
    view: r,
    frames: o
  }
}

function us(t, r, e, s, a, o) {
  const {
    data: u
  } = t, {
    sampledWidth: d,
    sampledHeight: f,
    width: h,
    height: z,
    minGlobalX: M,
    minGlobalY: B,
    downsample: K
  } = r, Le = Ut.colors.length;
  let Xe = d,
    $ = f,
    ye = -1,
    ue = -1,
    F = s.dataOffset;
  for (let Re = 0; Re < s.changeCount; Re += 1) {
    const Ge = e.getInt32(F, !0),
      Ye = e.getInt32(F + 4, !0),
      it = e.getUint16(F + 8, !0),
      Ze = e.getUint16(F + 10, !0),
      Ae = e.getUint8(F + 12);
    F += 13;
    const It = Ge * o + it - M,
      Be = Ye * o + Ze - B;
    if (It < 0 || Be < 0 || It >= h || Be >= z) continue;
    const ie = Math.floor(It / K),
      Q = Math.floor(Be / K);
    if (ie < 0 || Q < 0 || ie >= d || Q >= f) continue;
    ie < Xe && (Xe = ie), Q < $ && ($ = Q), ie > ye && (ye = ie), Q > ue && (ue = Q);
    const He = (Q * d + ie) * 4;
    if (Ae === 0) {
      pg(u, He, ie, Q, a);
      continue
    }
    const re = Ut.colors[Math.min(Ae, Le - 1)];
    u[He] = re.rgb[0], u[He + 1] = re.rgb[1], u[He + 2] = re.rgb[2], u[He + 3] = 255
  }
  if (!(ye < Xe || ue < $)) return {
    minX: Xe,
    minY: $,
    maxX: ye,
    maxY: ue
  }
}

function pg(t, r, e, s, a) {
  if (a) {
    const o = (e + s) % 2 === 0 ? 232 : 218;
    t[r] = o, t[r + 1] = o, t[r + 2] = o, t[r + 3] = 255;
    return
  }
  t[r] = 0, t[r + 1] = 0, t[r + 2] = 0, t[r + 3] = 0
}

function hg(t, r, e) {
  for (let s = 0; s < e; s += 1) {
    const a = s * r;
    for (let o = 0; o < r; o += 1) {
      const u = (a + o) * 4,
        d = (o + s) % 2 === 0 ? 232 : 218;
      t[u] = d, t[u + 1] = d, t[u + 2] = d, t[u + 3] = 255
    }
  }
}

function S0(t) {
  const r = t.maxGlobalX - t.minGlobalX + 1,
    e = t.maxGlobalY - t.minGlobalY + 1;
  if (r <= 0 || e <= 0) return;
  const s = lg,
    a = Math.max(1, Math.ceil(Math.max(r / s, e / s))),
    o = Math.max(1, Math.ceil(r / a)),
    u = Math.max(1, Math.ceil(e / a)),
    d = Math.max(o, u),
    f = s / d;
  return {
    minGlobalX: t.minGlobalX,
    minGlobalY: t.minGlobalY,
    width: r,
    height: e,
    downsample: a,
    sampledWidth: o,
    sampledHeight: u,
    outputWidth: rs(o * f),
    outputHeight: rs(u * f)
  }
}

function rs(t) {
  const r = Math.max(2, Math.round(t));
  return r % 2 === 0 ? r : r + 1
}

function _s(t, r, e) {
  const s = Math.round(t * r * e * cg);
  return vg(s, ug, _g)
}

function vg(t, r, e) {
  return Number.isFinite(t) ? Math.min(e, Math.max(r, t)) : r
}

function I0(t) {
  if (typeof t != "string") return null;
  const r = t.trim();
  return fg.test(r) ? r.toUpperCase() : null
}

function M0() {
  if (typeof MediaRecorder > "u") return;
  const t = ["video/webm;codecs=vp8", "video/webm;codecs=vp9", "video/webm"];
  for (const r of t)
    if (MediaRecorder.isTypeSupported(r)) return r
}
async function P0(t, r, e) {
  if (typeof VideoEncoder > "u" || typeof VideoFrame > "u") return;
  const s = [{
      codec: "avc1.64003C",
      container: "mp4",
      webmCodecId: void 0,
      mimeType: "video/mp4;codecs=avc1.64003C",
      fileExtension: "mp4"
    }, {
      codec: "avc1.640034",
      container: "mp4",
      webmCodecId: void 0,
      mimeType: "video/mp4;codecs=avc1.640034",
      fileExtension: "mp4"
    }, {
      codec: "avc1.640033",
      container: "mp4",
      webmCodecId: void 0,
      mimeType: "video/mp4;codecs=avc1.640033",
      fileExtension: "mp4"
    }, {
      codec: "vp8",
      container: "webm",
      webmCodecId: "V_VP8",
      mimeType: "video/webm;codecs=vp8",
      fileExtension: "webm"
    }, {
      codec: "vp09.00.10.08",
      container: "webm",
      webmCodecId: "V_VP9",
      mimeType: "video/webm;codecs=vp9",
      fileExtension: "webm"
    }],
    a = ["prefer-hardware", "no-preference", "prefer-software"];
  for (const o of a)
    for (const u of s) {
      if (e && u.container !== e) continue;
      const d = {
        codec: u.codec,
        width: t.outputWidth,
        height: t.outputHeight,
        bitrate: _s(t.outputWidth, t.outputHeight, r.fps),
        bitrateMode: "variable",
        framerate: r.fps,
        latencyMode: "quality",
        hardwareAcceleration: o
      };
      u.container === "mp4" && (d.avc = {
        format: "avc"
      });
      try {
        const f = await VideoEncoder.isConfigSupported(d);
        if (f.supported) return {
          ...u,
          encoderConfig: f.config ?? d,
          requestedHardwareAcceleration: o
        }
      } catch {}
    }
}

function ds(t) {
  const {
    imageData: r,
    renderFrame: e,
    renderContext: s,
    frameIndex: a,
    drawTransparentPattern: o,
    tileSize: u
  } = t;
  o ? hg(r.data, e.sampledWidth, e.sampledHeight) : r.data.fill(0);
  const d = a.frames[0];
  us(r, e, a.view, d, o, u), s.putImageData(r, 0, 0), fs(t), ps(t, d.timestamp)
}

function fs(t) {
  const {
    outputContext: r,
    renderCanvas: e,
    renderFrame: s,
    mapBackgroundCanvas: a,
    options: o
  } = t;
  r.imageSmoothingEnabled = !1, o.backgroundColor ? (r.fillStyle = o.backgroundColor, r.fillRect(0, 0, s.outputWidth, s.outputHeight)) : a ? r.drawImage(a, 0, 0, s.outputWidth, s.outputHeight) : (r.fillStyle = "#e2e8f0", r.fillRect(0, 0, s.outputWidth, s.outputHeight)), r.drawImage(e, 0, 0, s.outputWidth, s.outputHeight)
}

function ps(t, r) {
  if (!t.options.showDate) return;
  const {
    outputContext: e,
    renderFrame: s,
    timestampFormatter: a
  } = t, o = (a ?? new Intl.DateTimeFormat).format(r), u = Math.max(12, Math.round(Math.min(s.outputWidth, s.outputHeight) * .045)), d = Math.max(8, Math.round(u * .65));
  e.font = `600 ${u}px ui-monospace, SFMono-Regular, Menlo, monospace`, e.textBaseline = "bottom";
  const f = e.measureText(o).width,
    h = u + d,
    z = f + d * 2,
    M = Math.max(4, Math.round(d * .4)),
    B = s.outputHeight - h - M;
  e.fillStyle = "rgba(15, 23, 42, 0.78)", e.fillRect(M, B, z, h), e.fillStyle = "#f8fafc", e.fillText(o, M + d, s.outputHeight - M)
}

function hs(t, r) {
  const {
    imageData: e,
    renderFrame: s,
    renderContext: a,
    frameIndex: o,
    drawTransparentPattern: u,
    tileSize: d
  } = t;
  if (r.changeCount > 0) {
    const f = us(e, s, o.view, r, u, d);
    f && a.putImageData(e, 0, 0, f.minX, f.minY, f.maxX - f.minX + 1, f.maxY - f.minY + 1)
  }
  fs(t), ps(t, r.timestamp)
}
async function z0(t, r) {
  console.info("Timelapse export is using WebCodecs video renderer.", {
    container: r.container,
    codec: r.codec,
    requestedHardwareAcceleration: r.requestedHardwareAcceleration ?? "not-requested",
    hardwareAcceleration: r.encoderConfig.hardwareAcceleration ?? "not-returned",
    latencyMode: r.encoderConfig.latencyMode ?? "not-returned",
    width: t.renderFrame.outputWidth,
    height: t.renderFrame.outputHeight,
    fps: t.options.fps,
    bitrate: r.encoderConfig.bitrate
  });
  const e = Math.max(1, Math.round(1e6 / t.options.fps)),
    s = Math.max(1, Math.round(t.options.fps * 5)),
    a = [];
  let o, u, d;
  try {
    d = new VideoEncoder({
      output: (h, z) => {
        var K;
        const M = (K = z == null ? void 0 : z.decoderConfig) == null ? void 0 : K.description;
        !o && M && (o = $m(M));
        const B = new Uint8Array(h.byteLength);
        h.copyTo(B), a.push({
          data: B,
          timestampUs: h.timestamp,
          durationUs: h.duration ?? e,
          keyFrame: h.type === "key"
        })
      },
      error: h => {
        u = h
      }
    }), d.configure(r.encoderConfig), ds(t);
    const f = async h => {
      if (!d) throw new Error(at());
      const z = new VideoFrame(t.outputCanvas, {
        timestamp: h * e,
        duration: e
      });
      for (d.encode(z, {
          keyFrame: h === 0 || h % s === 0
        }), z.close(); d.encodeQueueSize > dg;)
        if (await rn(0), u) throw u
    };
    await f(0);
    for (let h = 1; h < t.frameIndex.frames.length; h += 1)
      if (hs(t, t.frameIndex.frames[h]), await f(h), u) throw u;
    if (await d.flush(), u) throw u
  } finally {
    d && d.state !== "closed" && d.close()
  }
  if (a.length === 0) throw new Error(at());
  if (a.sort((f, h) => f.timestampUs - h.timestampUs), r.container === "mp4") {
    if (!o) throw new Error(at());
    return {
      blob: Um(a, r, t.renderFrame.outputWidth, t.renderFrame.outputHeight, o),
      fileExtension: "mp4"
    }
  }
  if (!r.webmCodecId) throw new Error(at());
  return {
    blob: eg(a, r, t.renderFrame.outputWidth, t.renderFrame.outputHeight, t.options.fps),
    fileExtension: "webm"
  }
}
async function T0(t, r) {
  const e = _s(t.renderFrame.outputWidth, t.renderFrame.outputHeight, t.options.fps);
  console.info("Timelapse export is using MediaRecorder video renderer.", {
    mimeType: r,
    width: t.renderFrame.outputWidth,
    height: t.renderFrame.outputHeight,
    fps: t.options.fps,
    bitrate: e
  }), ds(t);
  const s = Math.max(1, Math.round(1e3 / t.options.fps));
  let a, o, u;
  try {
    a = t.outputCanvas.captureStream(0);
    const d = a.getVideoTracks()[0];
    if (!d) throw new Error(at());
    const f = [];
    u = new Promise((h, z) => {
      o = new MediaRecorder(a, {
        mimeType: r,
        videoBitsPerSecond: e
      }), o.ondataavailable = M => {
        M.data.size > 0 && f.push(M.data)
      }, o.onerror = () => {
        z(new Error(at()))
      }, o.onstop = () => {
        h(new Blob(f, {
          type: r
        }))
      }, o.start()
    }), d.requestFrame(), await rn(s);
    for (let h = 1; h < t.frameIndex.frames.length; h += 1) hs(t, t.frameIndex.frames[h]), d.requestFrame(), await rn(s);
    return await rn(s * 2), o == null || o.stop(), {
      blob: await u,
      fileExtension: "webm"
    }
  } catch (d) {
    throw o && o.state !== "inactive" && o.stop(), u && await u.catch(() => {}), d
  } finally {
    a == null || a.getTracks().forEach(d => d.stop())
  }
}

function mg(t, r) {
  const e = URL.createObjectURL(t),
    s = document.createElement("a");
  s.href = e, s.download = r, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(e)
}

function rn(t) {
  return new Promise(r => {
    window.setTimeout(r, t)
  })
}
const vs = t => `${t.x}:${t.y}`;

function gg(t, r) {
  if (r.mode === "depth") return t[t.length - 1 - r.snapshotDepth];
  for (let e = t.length - 1; e >= 0; e -= 1)
    if (t[e].ts < r.timestamp) return t[e]
}

function ms(t, r, e, s, a) {
  const o = Math.floor(t.x / a),
    u = Math.floor(t.y / a);
  return {
    tileX: o,
    tileY: u,
    pixelX: t.x - o * a,
    pixelY: t.y - u * a,
    color: r,
    userId: e,
    allianceId: s
  }
}

function bg(t, r, e, s, a = 64) {
  return t.map(o => {
    const u = gg(r.get(vs(o)) ?? [], e),
      d = (u == null ? void 0 : u.userId) ?? 0;
    return ms(o, (u == null ? void 0 : u.newColor) ?? 0, d, s(d), a)
  })
}

function xg(t, r, e, s = 64) {
  const a = new Map(r.map(o => [`${o.tileX*s+o.pixelX}:${o.tileY*s+o.pixelY}`, o]));
  return t.map(o => {
    const u = a.get(vs(o));
    if (u) return u;
    const d = o.userId ?? 0;
    return ms(o, o.color, d, e(d), s)
  })
}
var yg = R('<span class="loading loading-spinner loading-xs"></span>'),
  wg = R('<button class="btn btn-xs tooltip tooltip-bottom btn-soft"><!></button>'),
  kg = R("<!> <!> <!>", 1);

function A0(t, r) {
  an(r, !0);
  const e = p => {
      var q = wg(),
        L = c(q);
      {
        var X = W => {
            var se = yg();
            k(W, se)
          },
          ne = W => {
            da(W, {
              class: "size-4"
            })
          };
        J(L, W => {
          n(z) ? W(X) : W(ne, -1)
        })
      }
      l(q), H(W => {
        Ee(q, "data-tip", W), q.disabled = n(z) || n(a)
      }, [() => Ca()]), he("click", q, Ot), k(p, q)
    },
    s = new Pm(64, {
      clear: () => r.selectionRenderer.clear(),
      addPixels: p => r.selectionRenderer.addPixels(p),
      removePixels: p => r.selectionRenderer.removePixels(p),
      addRectangles: p => r.selectionRenderer.addRectangles(p),
      addPaintedCoordinates: (p, q) => {
        var L, X;
        return (X = (L = r.selectionRenderer).addPaintedCoordinates) == null ? void 0 : X.call(L, p, q)
      }
    });
  let a = G(!0),
    o = G(0),
    u = G(void 0),
    d = "",
    f = 0,
    h = G(!1),
    z = G(!1),
    M = G(!1),
    B = G("timeout"),
    K = G(on([])),
    Le = G(void 0),
    Xe = G(!1),
    $ = G(void 0),
    ye = new Map,
    ue = G([]);
  const F = N(() => r.brushRadius * 2 + 1),
    Re = N(() => r.anchor ?? n(u)),
    Ge = p => `${p.x}:${p.y}`,
    Ye = N(() => new Map(s.users.map(p => [p.id, p]))),
    it = N(() => (s.changeToken, [...s.pixels.values()].map(p => ({
      x: p.x,
      y: p.y,
      color: p.colorIdx,
      eventId: p.eventId,
      userId: p.userId
    })))),
    Ze = N(() => (s.changeToken, s.selectedPixels().map(p => ({
      x: p.x,
      y: p.y,
      color: p.colorIdx,
      eventId: p.eventId,
      userId: p.userId
    })))),
    Ae = N(() => (s.changeToken, s.selectedUserIds())),
    It = N(() => ({
      minGlobalX: r.area.minX,
      minGlobalY: r.area.minY,
      maxGlobalX: r.area.maxX,
      maxGlobalY: r.area.maxY
    }));
  Qr(() => {
    const p = `${r.allianceId}:${r.area.minX}:${r.area.minY}:${r.area.maxX}:${r.area.maxY}`;
    p !== d && (d = p, Be(Xs(() => r.eventHwm)))
  }), Es(() => {
    f += 1, s.clear()
  });
  async function Be(p = r.eventHwm) {
    var L;
    const q = ++f;
    m(a, !0), s.clear();
    try {
      const X = await Tt.getAdminAllianceHqSelectArea(r.allianceId, r.area, p);
      if (q !== f) return;
      const ne = new Map,
        W = [];
      let se = 0;
      for (const x of X.chunks) {
        const T = x.bounds.maxX - x.bounds.minX + 1,
          A = x.bounds.maxY - x.bounds.minY + 1;
        for (let V = 0; V < A; V += 1)
          for (let oe = 0; oe < T; oe += 1) {
            const Ue = V * T + oe,
              _e = x.bounds.minX + oe,
              Z = x.bounds.minY + V,
              we = x.paintedBy[Ue],
              j = x.colors[Ue],
              D = Number(x.eventIds[Ue]),
              le = Math.floor(_e / 64),
              me = Math.floor(Z / 64),
              de = ne.get(we) ?? {
                tileXs: [],
                tileYs: [],
                pixelXs: [],
                pixelYs: [],
                colorIdxs: [],
                colorCounts: new Uint32Array(Ut.colors.length),
                eventIds: []
              };
            if (ne.has(we) || ne.set(we, de), de.tileXs.push(le), de.tileYs.push(me), de.pixelXs.push(_e - le * 64), de.pixelYs.push(Z - me * 64), de.colorIdxs.push(j), de.colorCounts[j] += 1, (L = de.eventIds) == null || L.push(D), W.push({
                key: Sn(_e, Z),
                userId: we,
                x: _e,
                y: Z,
                tile: [le, me],
                pixel: [_e - le * 64, Z - me * 64],
                colorIdx: j,
                eventId: D || void 0
              }), se += 1, se % 5e4 === 0 && (await new Promise(Me => setTimeout(Me, 0)), q !== f)) return
          }
      }
      const i = [...ne.keys()].filter(x => x > 0),
        _ = i.length > 0 ? (await Tt.getMultipleUsersInfoById(i)).users : [];
      if (q !== f) return;
      const b = new Map(_.map(x => [x.id, x])),
        I = [...ne.entries()].map(([x, T]) => ({
          ...b.get(x) ?? {
            id: x,
            name: x === 0 ? en() : $r(),
            role: "user",
            deleted: x !== 0
          },
          painted: T
        }));
      I.sort((x, T) => x.id === 0 ? 1 : T.id === 0 ? -1 : T.painted.tileXs.length - x.painted.tileXs.length), s.load(I, W), m(o, X.eventHwm, !0), m(u, X.anchor, !0)
    } catch (X) {
      q === f && pe.error(X.message)
    } finally {
      q === f && m(a, !1)
    }
  }

  function ie(p, q, L) {
    if (n(a)) {
      pe.info(vn());
      return
    }
    const X = s.pixelAt(p, q);
    if (!(X != null && X.userId)) {
      pe.info(en());
      return
    }
    const ne = s.findUser(X.userId);
    (L ? s.deselectUser(X.userId) : s.selectUser(X.userId)) && (Vr.plop.play(), pe.success(L ? Mv({
      name: (ne == null ? void 0 : ne.name) ?? $r()
    }) : pv({
      name: (ne == null ? void 0 : ne.name) ?? $r()
    })))
  }

  function Q(p, q, L, X, ne) {
    if (n(a)) {
      pe.info(vn());
      return
    }
    s.applyBrush(p + .5, q + .5, L, X + .5, ne ? "remove" : "add") && Vr.plop.play()
  }

  function He() {
    return Be()
  }

  function re() {
    return n(Ae).map(p => n(Ye).get(p)).filter(p => !!p).map(p => ({
      id: p.id,
      name: p.name,
      picture: p.picture,
      avatarSeed: p.avatarSeed,
      allianceId: p.allianceId,
      allianceName: p.allianceName,
      timedOut: p.timedOut,
      banned: p.banned
    }))
  }

  function cr() {
    const p = new URLSearchParams({
      minX: String(r.area.minX),
      minY: String(r.area.minY),
      maxX: String(r.area.maxX),
      maxY: String(r.area.maxY)
    });
    return Ys(`/staff/dashboard/alliances/${r.allianceId}/headquarters/wayback?${p.toString()}`)
  }
  async function Se() {
    const p = await fetch(cr(), {
      credentials: "include"
    });
    if (!p.ok) throw new Error(Rn());
    return p.blob()
  }
  async function Ot() {
    if (!(n(z) || n(a))) {
      m(z, !0);
      try {
        const p = await Se();
        mg(p, `selected-area-${r.area.maxX-r.area.minX+1}x${r.area.maxY-r.area.minY+1}.png`), pe.success(kd())
      } catch (p) {
        pe.error(p.message)
      } finally {
        m(z, !1)
      }
    }
  }

  function vt(p) {
    const q = re();
    if (q.length === 0 || !n(Re)) {
      pe.info(gn());
      return
    }
    m(K, q, !0), m(B, p, !0), m(Le, Se(), !0), m(M, !0)
  }
  async function ct() {
    if (n(Ae).length === 0) {
      pe.info(gn());
      return
    }
    m(h, !0);
    try {
      const p = await Tt.postSelectAreaPhoneVerification(n(Ae));
      pe.success(Q_({
        count: p.affected
      })), await Be()
    } catch (p) {
      pe.error(p.message)
    } finally {
      m(h, !1)
    }
  }
  async function Vt() {
    const p = n(Ze).filter(q => q.eventId && q.color !== 0);
    if (p.length === 0) {
      pe.info(xn());
      return
    }
    m(h, !0);
    try {
      const q = await Tt.reverseAdminAllianceHqPixels(r.allianceId, p.map(L => ({
        x: L.x,
        y: L.y,
        eventId: L.eventId
      })), "HQ Select Area clear", !0);
      pe.success(ud({
        count: q.reversed
      })), s.clearSelected(), await r.onchanged(), await Be()
    } catch (q) {
      pe.error(q.message), await r.onchanged()
    } finally {
      m(h, !1)
    }
  }
  async function mt() {
    var ne;
    const p = new Set(n(ue).map(Ge)),
      q = [];
    let L, X = !0;
    for (; X;) {
      const W = await Tt.getAllianceHqWaybackEvents(r.allianceId, {
        limit: Gs.tools.wayback.hqLimit,
        before: L,
        area: r.area
      });
      if (q.push(...W.events.filter(se => se.id <= n(o) && p.has(`${se.x}:${se.y}`))), X = W.hasNext, L = (ne = W.events.at(-1)) == null ? void 0 : ne.id, X && !L) throw new Error(Rn())
    }
    ye = new Map;
    for (const W of q.reverse()) {
      const se = `${W.x}:${W.y}`,
        i = ye.get(se) ?? [];
      i.push(W), ye.set(se, i)
    }
  }

  function Ke(p) {
    if (p.mode === "depth") {
      const W = Math.max(0, ...[...ye.values()].map(_ => _.length)),
        se = Math.max(1, (p.beforeDepth ?? 0) + 1),
        i = [];
      for (let _ = se; _ <= W && i.length < 100; _ += 1) {
        const b = [...ye.values()].filter(I => I.length >= _);
        b.length !== 0 && i.push({
          depth: _,
          ts: Math.max(...b.map(I => I[I.length - _].ts)),
          eventCount: b.length,
          pixelCount: b.length
        })
      }
      return {
        timestamps: i,
        hasMore: se + i.length <= W
      }
    }
    const L = new Map;
    for (const [W, se] of ye)
      for (const i of se) {
        if (p.beforeTimestamp && i.ts >= p.beforeTimestamp) continue;
        const _ = L.get(i.ts) ?? new Set;
        _.add(W), L.set(i.ts, _)
      }
    const X = [...L.entries()].sort((W, se) => se[0] - W[0]);
    return {
      timestamps: X.slice(0, 100).map(([W, se], i) => ({
        depth: i + 1,
        ts: W,
        eventCount: se.size,
        pixelCount: se.size
      })),
      hasMore: X.length > 100
    }
  }

  function ur(p) {
    var q;
    return ((q = n(Ye).get(p)) == null ? void 0 : q.allianceId) ?? 0
  }

  function Et(p) {
    return bg(n(ue), ye, p, ur)
  }

  function Zt(p) {
    return xg(n(it), Et(p), ur)
  }
  async function _r() {
    if (m(ue, n(Ze).filter(p => !!p.eventId)), n(ue).length === 0) {
      pe.info(xn());
      return
    }
    m(h, !0);
    try {
      await mt(), m($, {
        getTimeline: async p => Ke(p),
        getPreview: async p => ({
          pixels: Zt(p)
        })
      }, !0), m(Xe, !0)
    } catch (p) {
      pe.error(p.message)
    } finally {
      m(h, !1)
    }
  }
  async function Ht(p, q, L) {
    const X = q === "historical" ? {
        mode: q,
        timestamp: L
      } : {
        mode: q,
        snapshotDepth: L
      },
      ne = new Map(Et(X).map(i => [`${i.tileX*64+i.pixelX}:${i.tileY*64+i.pixelY}`, i.color])),
      W = n(ue).map(i => ({
        pixel: i,
        color: ne.get(Ge(i)) ?? 0
      })).filter(({
        pixel: i,
        color: _
      }) => i.color !== _);
    if (W.length === 0) return {
      painted: 0
    };
    const se = await Tt.reverseAdminAllianceHqPixels(r.allianceId, W.map(({
      pixel: i,
      color: _
    }) => ({
      x: i.x,
      y: i.y,
      eventId: i.eventId,
      color: _
    })), "HQ Select Area history reversal");
    return s.clearSelected(), await r.onchanged(), await Be(), {
      painted: se.reversed
    }
  }

  function dr() {
    if (n(Ae).length === 0) {
      pe.info(gn());
      return
    }
    navigator.clipboard.writeText(n(Ae).join(", ")), pe.success(Bd())
  }

  function xr(p) {
    if (r.activeTool === p) {
      r.ontoolchange("area-select");
      return
    }
    if (n(a)) {
      pe.info(vn());
      return
    }
    r.ontoolchange(p)
  }
  var fr = {
      pickUser: ie,
      brush: Q,
      reload: He
    },
    S = kg(),
    E = ir(S);
  {
    let p = N(() => en()),
      q = N(() => ({
        timeout: n(h),
        ban: n(h),
        phone: n(h),
        clear: n(h),
        reverse: n(h)
      })),
      L = N(() => n(Ze).length > 0);
    gm(E, {
      get totalSelectedPixels() {
        return s.totalSelectedPixels
      },
      get rows() {
        return s.panelRows
      },
      get totalRowCount() {
        return s.users.length
      },
      get filteredPixelCount() {
        return s.filteredPixelsTotal
      },
      get filters() {
        return s.filters
      },
      get activeFilterCount() {
        return s.activeFilterCount
      },
      get hasActiveFilters() {
        return s.hasActiveFilters
      },
      get filteredSelectionState() {
        return s.filteredSelectionState
      },
      get loading() {
        return n(a)
      },
      get emptyLabel() {
        return n(p)
      },
      get activeTool() {
        return r.activeTool
      },
      get brushDiameter() {
        return n(F)
      },
      get busy() {
        return n(q)
      },
      get hasSelection() {
        return n(L)
      },
      get headerActions() {
        return e
      },
      ontoolchange: xr,
      ontogglefiltered: () => {
        s.toggleAllFiltered() && Vr.plop.play()
      },
      onresetfilters: () => s.resetFilters(),
      ontogglerow: X => {
        s.toggleFilteredUser(X) && Vr.plop.play()
      },
      oncopy: dr,
      ontimeout: () => vt("timeout"),
      onban: () => vt("ban"),
      onphone: ct,
      onclear: Vt,
      onreverse: _r,
      get onclose() {
        return r.onclose
      }
    })
  }
  var O = v(E, 2);
  {
    var Ie = p => {
      Nv(p, {
        get season() {
          return Ns
        },
        tileSize: 64,
        showMapBackground: !1,
        get selectedPixelCount() {
          return n(ue).length
        },
        get previewBounds() {
          return n(It)
        },
        get dataSource() {
          return n($)
        },
        onApply: Ht,
        get open() {
          return n(Xe)
        },
        set open(q) {
          m(Xe, q, !0)
        }
      })
    };
    J(O, p => {
      n($) && p(Ie)
    })
  }
  var Qe = v(O, 2);
  {
    var Je = p => {
      {
        let q = N(() => [n(Re).latitude, n(Re).longitude]);
        Hs(p, {
          get image() {
            return n(Le)
          },
          get targets() {
            return n(K)
          },
          get latLon() {
            return n(q)
          },
          zoom: 0,
          get action() {
            return n(B)
          },
          origin: "select-area",
          onsuccess: () => void Be(),
          get open() {
            return n(M)
          },
          set open(L) {
            m(M, L, !0)
          }
        })
      }
    };
    J(Qe, p => {
      n(K).length > 0 && n(Re) && p(Je)
    })
  }
  return k(t, S), ln(fr)
}
In(["click"]);
var qg = R("<div><!></div>");

function U0(t, r) {
  an(r, !0);
  var e = qg(),
    s = c(e);
  is(s, () => r.children ?? ns), l(e), H(() => At(e, 1, `bg-base-100/60 border-base-content/20 pointer-events-none absolute -top-15 left-1/2 line-clamp-1 flex w-max -translate-x-1/2 items-center gap-1 rounded-full border-2 px-3 py-1.5 select-none ${r.class??""}`)), k(t, e), ln()
}
export {
  Vv as A, mg as B, Tv as C, U0 as I, Nv as R, kn as S, x0 as a, A0 as b, w0 as c, Cv as d, Ca as e, Pm as f, Tr as g, vg as h, I0 as i, Mv as j, pv as k, k0 as l, Sn as m, b0 as n, gm as o, Hi as p, en as q, ro as r, y0 as s, at as t, S0 as u, P0 as v, M0 as w, q0 as x, z0 as y, T0 as z
};