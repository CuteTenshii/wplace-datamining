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
var jn = (t, r, e) => As(Ts(t), e, r);
import {
  g as M
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  o as Cs,
  a as js
} from "./CRTPBFbF.js";
import {
  e as G,
  bN as En,
  al as Es,
  i as n,
  h as m,
  aW as Mr,
  a as k,
  k as Cr,
  l as In,
  p as an,
  g as on,
  y as Qr,
  q as Ds,
  bK as Bs,
  f as ir,
  d as c,
  s as v,
  r as l,
  t as Y,
  m as he,
  u as N,
  b as ln,
  c as R,
  n as ns,
  aK as Rs,
  o as Fs,
  v as Hs,
  B as Ls
} from "./DUZ_qUVk.js";
import {
  i as J
} from "./BLc2SwOK.js";
import {
  b as jr,
  a as At,
  s as je,
  e as Dn,
  r as Pr,
  f as fn,
  h as Bn
} from "./M4i-R8Gk.js";
import {
  g as Xs
} from "./CLj2NZ6c.js";
import {
  A as Vr
} from "./Bbhm4apx.js";
import {
  R as Ys
} from "./CdKy4612.js";
import {
  s as y
} from "./DtUyTUmd.js";
import {
  e as Jr
} from "./BuccT-Wn.js";
import {
  b as ss
} from "./DhSIbJcI.js";
import {
  r as Er,
  p as or
} from "./DXFW01RN.js";
import {
  h as Ws
} from "./CftFOTTa.js";
import {
  d as Ut,
  Y as bn,
  b as Tt,
  t as pe,
  u as gr,
  X as Ns,
  f as Rn,
  V as Gs
} from "./CDHy_UvF.js";
import {
  D as Os
} from "./DBc7Cl6B.js";
import {
  A as Fn
} from "./DgQkzLoR.js";
import {
  R as yn
} from "./BpgiP3if.js";
import {
  T as wn,
  G as Hn
} from "./3X6dcjdJ.js";
import {
  W as Vs
} from "./BPSCM4fA.js";
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
  s as is
} from "./b7oAWk-Y.js";
import {
  t as Ln
} from "./C_6QMx1t.js";
import {
  b as pn
} from "./DmTBOJkY.js";
import {
  P as Js
} from "./Dcjf6cED.js";
import {
  R as $s
} from "./B6eyp74k.js";
import {
  b as Xn,
  S as ea
} from "./DxNn08H9.js";
import {
  S as ta
} from "./DrmmBvRB.js";
import {
  C as ra
} from "./B_8gPEyS.js";
import {
  C as na
} from "./B7q_FtGj.js";
import {
  I as sa
} from "./BHYvYl6L.js";
import {
  c as aa,
  a as Yn,
  p as ia,
  n as oa,
  b as la,
  M as ca,
  D as ua
} from "./DDDr3CCa.js";
import {
  a as _a
} from "./B0JoJohi.js";
import {
  b as da
} from "./CtsjoaOH.js";
import {
  c as fa
} from "./jEDRT1k8.js";
import {
  p as pa
} from "./DoQwV0WM.js";
import {
  p as ha
} from "./WRaI8Fie.js";
import {
  r as va
} from "./C5ukCcxH.js";
import {
  t as hn
} from "./BJMWNMzA.js";
import {
  P as xr
} from "./SbojshD3.js";
import {
  R as ma
} from "./TTfhDrzz.js";
import {
  g as Zr,
  a as Wn
} from "./CJvVCush.js";
import {
  s as Nn
} from "./CiB29Aqe.js";
import {
  l as vn
} from "./Cp-hTSeP.js";
const ga = () => "Download",
  xa = () => "Download",
  ba = () => "下载",
  ya = () => "Download",
  wa = () => "Descargar",
  ka = () => "Télécharger",
  qa = () => "Download",
  Sa = () => "ダウンロード",
  Ia = () => "Pobierz",
  Ma = () => "Скачать",
  Pa = () => "Завантажити",
  za = () => "Tải xuống",
  Ta = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? ga() : e === "pt" ? xa() : e === "ch" ? ba() : e === "de" ? ya() : e === "es" ? wa() : e === "fr" ? ka() : e === "it" ? qa() : e === "jp" ? Sa() : e === "pl" ? Ia() : e === "ru" ? Ma() : e === "uk" ? Pa() : za()
  },
  Aa = () => "Filter",
  Ua = () => "Filtro",
  Ca = () => "筛选",
  ja = () => "Filter",
  Ea = () => "Filtro",
  Da = () => "Filtre",
  Ba = () => "Filtro",
  Ra = () => "フィルター",
  Fa = () => "Filtr",
  Ha = () => "Фильтр",
  La = () => "Фільтр",
  Xa = () => "Bộ lọc",
  Ya = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Aa() : e === "pt" ? Ua() : e === "ch" ? Ca() : e === "de" ? ja() : e === "es" ? Ea() : e === "fr" ? Da() : e === "it" ? Ba() : e === "jp" ? Ra() : e === "pl" ? Fa() : e === "ru" ? Ha() : e === "uk" ? La() : Xa()
  },
  Wa = () => "No alliance",
  Na = () => "Sem aliança",
  Ga = () => "无联盟",
  Oa = () => "Ohne Allianz",
  Va = () => "Sin alianza",
  Za = () => "Sans alliance",
  Ka = () => "Senza alleanza",
  Qa = () => "同盟なし",
  Ja = () => "Bez sojuszu",
  $a = () => "Без альянса",
  ei = () => "Без альянсу",
  ti = () => "Không liên minh",
  _x = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Wa() : e === "pt" ? Na() : e === "ch" ? Ga() : e === "de" ? Oa() : e === "es" ? Va() : e === "fr" ? Za() : e === "it" ? Ka() : e === "jp" ? Qa() : e === "pl" ? Ja() : e === "ru" ? $a() : e === "uk" ? ei() : ti()
  },
  ri = () => "of",
  ni = () => "de",
  si = () => "的",
  ai = () => "von",
  ii = () => "de",
  oi = () => "de",
  li = () => "di",
  ci = () => "の",
  ui = () => "z",
  _i = () => "из",
  di = () => "з",
  fi = () => "của",
  pi = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? ri() : e === "pt" ? ni() : e === "ch" ? si() : e === "de" ? ai() : e === "es" ? ii() : e === "fr" ? oi() : e === "it" ? li() : e === "jp" ? ci() : e === "pl" ? ui() : e === "ru" ? _i() : e === "uk" ? di() : fi()
  },
  hi = () => "Optional",
  vi = () => "Opcional",
  mi = () => "可选",
  gi = () => "Optional",
  xi = () => "Opcional",
  bi = () => "Facultatif",
  yi = () => "Opzionale",
  wi = () => "オプション",
  ki = () => "Opcjonalny",
  qi = () => "Необязательно",
  Si = () => "Необов'язково",
  Ii = () => "Tùy chọn",
  Mi = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? hi() : e === "pt" ? vi() : e === "ch" ? mi() : e === "de" ? gi() : e === "es" ? xi() : e === "fr" ? bi() : e === "it" ? yi() : e === "jp" ? wi() : e === "pl" ? ki() : e === "ru" ? qi() : e === "uk" ? Si() : Ii()
  },
  Pi = () => "Pixels",
  zi = () => "Pixels",
  Ti = () => "像素",
  Ai = () => "Pixel",
  Ui = () => "Píxeles",
  Ci = () => "Pixels",
  ji = () => "Pixel",
  Ei = () => "ピクセル",
  Di = () => "Piksele",
  Bi = () => "Пиксели",
  Ri = () => "Пікселі",
  Fi = () => "Pixel",
  Gn = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Pi() : e === "pt" ? zi() : e === "ch" ? Ti() : e === "de" ? Ai() : e === "es" ? Ui() : e === "fr" ? Ci() : e === "it" ? ji() : e === "jp" ? Ei() : e === "pl" ? Di() : e === "ru" ? Bi() : e === "uk" ? Ri() : Fi()
  },
  Hi = () => "Players",
  Li = () => "Jogadores",
  Xi = () => "玩家",
  Yi = () => "Spieler",
  Wi = () => "Jugadores",
  Ni = () => "Joueurs",
  Gi = () => "Giocatori",
  Oi = () => "プレイヤー",
  Vi = () => "Gracze",
  Zi = () => "Игроки",
  Ki = () => "Гравці",
  Qi = () => "Người chơi",
  Ji = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Hi() : e === "pt" ? Li() : e === "ch" ? Xi() : e === "de" ? Yi() : e === "es" ? Wi() : e === "fr" ? Ni() : e === "it" ? Gi() : e === "jp" ? Oi() : e === "pl" ? Vi() : e === "ru" ? Zi() : e === "uk" ? Ki() : Qi()
  },
  $i = () => "Reset",
  eo = () => "Redefinir",
  to = () => "重置",
  ro = () => "Zurücksetzen",
  no = () => "Restablecer",
  so = () => "Réinitialiser",
  ao = () => "Reimposta",
  io = () => "リセット",
  oo = () => "Zresetuj",
  lo = () => "Сбросить",
  co = () => "Скинути",
  uo = () => "Đặt lại",
  _o = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? $i() : e === "pt" ? eo() : e === "ch" ? to() : e === "de" ? ro() : e === "es" ? no() : e === "fr" ? so() : e === "it" ? ao() : e === "jp" ? io() : e === "pl" ? oo() : e === "ru" ? lo() : e === "uk" ? co() : uo()
  },
  fo = () => "Applying will restore the selected pixels to this snapshot.",
  po = () => "Ao aplicar, os pixels selecionados serão restaurados para este momento.",
  ho = () => "应用后将把选定像素恢复到此快照。",
  vo = () => "Beim Anwenden werden die ausgewählten Pixel auf diesen Zeitpunkt zurückgesetzt.",
  mo = () => "Al aplicar, los píxeles seleccionados se restaurarán a esta instantánea.",
  go = () => "Appliquer restaurera les pixels sélectionnés vers cet instantané.",
  xo = () => "Applicando verranno ripristinati i pixel selezionati a questa istantanea.",
  bo = () => "適用すると、選択したピクセルがこのスナップショットに復元されます。",
  yo = () => "Zastosowanie przywróci wybrane piksele do tej migawki.",
  wo = () => "При применении выбранные пиксели будут восстановлены до этого снимка.",
  ko = () => "При застосуванні вибрані пікселі будуть відновлені до цього знімка.",
  qo = () => "Áp dụng sẽ khôi phục các pixel đã chọn về ảnh chụp này.",
  So = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? fo() : e === "pt" ? po() : e === "ch" ? ho() : e === "de" ? vo() : e === "es" ? mo() : e === "fr" ? go() : e === "it" ? xo() : e === "jp" ? bo() : e === "pl" ? yo() : e === "ru" ? wo() : e === "uk" ? ko() : qo()
  },
  Io = () => "Apply Revert",
  Mo = () => "Aplicar Reversão",
  Po = () => "应用回退",
  zo = () => "Wiederherstellung anwenden",
  To = () => "Aplicar Reversión",
  Ao = () => "Appliquer la Restauration",
  Uo = () => "Applica ripristino",
  Co = () => "復元を適用",
  jo = () => "Zastosuj cofnięcie",
  Eo = () => "Применить откат",
  Do = () => "Застосувати відкат",
  Bo = () => "Áp dụng hoàn tác",
  Ro = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Io() : e === "pt" ? Mo() : e === "ch" ? Po() : e === "de" ? zo() : e === "es" ? To() : e === "fr" ? Ao() : e === "it" ? Uo() : e === "jp" ? Co() : e === "pl" ? jo() : e === "ru" ? Eo() : e === "uk" ? Do() : Bo()
  },
  Fo = t => `Successfully reverted ${t.count} pixels`,
  Ho = t => `${t.count} pixels revertidos com sucesso`,
  Lo = t => `成功回退 ${t.count} 个像素`,
  Xo = t => `${t.count} Pixel erfolgreich zurückgesetzt`,
  Yo = t => `${t.count} píxeles revertidos exitosamente`,
  Wo = t => `${t.count} pixels restaurés avec succès`,
  No = t => `${t.count} pixel ripristinati con successo`,
  Go = t => `${t.count} ピクセルの復元に成功しました`,
  Oo = t => `Pomyślnie cofnięto ${t.count} pikseli`,
  Vo = t => `Успешно откачено ${t.count} пикселей`,
  Zo = t => `Успішно відкочено ${t.count} пікселів`,
  Ko = t => `Đã hoàn tác thành công ${t.count} pixel`,
  Qo = (t, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Fo(t) : e === "pt" ? Ho(t) : e === "ch" ? Lo(t) : e === "de" ? Xo(t) : e === "es" ? Yo(t) : e === "fr" ? Wo(t) : e === "it" ? No(t) : e === "jp" ? Go(t) : e === "pl" ? Oo(t) : e === "ru" ? Vo(t) : e === "uk" ? Zo(t) : Ko(t)
  },
  Jo = () => "Reverting pixels...",
  $o = () => "Revertendo pixels...",
  el = () => "正在回退像素...",
  tl = () => "Pixel werden zurückgesetzt...",
  rl = () => "Revirtiendo píxeles...",
  nl = () => "Restauration des pixels...",
  sl = () => "Ripristino pixel in corso...",
  al = () => "ピクセルを復元中...",
  il = () => "Cofanie pikseli...",
  ol = () => "Откат пикселей...",
  ll = () => "Відкат пікселів...",
  cl = () => "Đang hoàn tác pixel...",
  ul = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Jo() : e === "pt" ? $o() : e === "ch" ? el() : e === "de" ? tl() : e === "es" ? rl() : e === "fr" ? nl() : e === "it" ? sl() : e === "jp" ? al() : e === "pl" ? il() : e === "ru" ? ol() : e === "uk" ? ll() : cl()
  },
  _l = () => "Events",
  dl = () => "Eventos",
  fl = () => "事件",
  pl = () => "Ereignisse",
  hl = () => "Eventos",
  vl = () => "Événements",
  ml = () => "Eventi",
  gl = () => "イベント",
  xl = () => "Zdarzenia",
  bl = () => "События",
  yl = () => "Події",
  wl = () => "Sự kiện",
  kl = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? _l() : e === "pt" ? dl() : e === "ch" ? fl() : e === "de" ? pl() : e === "es" ? hl() : e === "fr" ? vl() : e === "it" ? ml() : e === "jp" ? gl() : e === "pl" ? xl() : e === "ru" ? bl() : e === "uk" ? yl() : wl()
  },
  ql = () => "Pixels",
  Sl = () => "Pixels",
  Il = () => "像素",
  Ml = () => "Pixel",
  Pl = () => "Píxeles",
  zl = () => "Pixels",
  Tl = () => "Pixel",
  Al = () => "ピクセル",
  Ul = () => "Piksele",
  Cl = () => "Пиксели",
  jl = () => "Пікселі",
  El = () => "Pixel",
  On = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? ql() : e === "pt" ? Sl() : e === "ch" ? Il() : e === "de" ? Ml() : e === "es" ? Pl() : e === "fr" ? zl() : e === "it" ? Tl() : e === "jp" ? Al() : e === "pl" ? Ul() : e === "ru" ? Cl() : e === "uk" ? jl() : El()
  },
  Dl = () => "Choose the moment you want to restore.",
  Bl = () => "Escolha o momento que você quer restaurar.",
  Rl = () => "选择你想恢复的时刻。",
  Fl = () => "Wähle den Zeitpunkt, den du wiederherstellen willst.",
  Hl = () => "Elige el momento que quieres restaurar.",
  Ll = () => "Choisissez le moment que vous voulez restaurer.",
  Xl = () => "Scegli il momento che vuoi ripristinare.",
  Yl = () => "復元したい時点を選択してください。",
  Wl = () => "Wybierz moment, który chcesz przywrócić.",
  Nl = () => "Выберите момент, который хотите восстановить.",
  Gl = () => "Оберіть момент, який хочете відновити.",
  Ol = () => "Chọn thời điểm bạn muốn khôi phục.",
  mn = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Dl() : e === "pt" ? Bl() : e === "ch" ? Rl() : e === "de" ? Fl() : e === "es" ? Hl() : e === "fr" ? Ll() : e === "it" ? Xl() : e === "jp" ? Yl() : e === "pl" ? Wl() : e === "ru" ? Nl() : e === "uk" ? Gl() : Ol()
  },
  Vl = () => "Use arrow keys to move through snapshots.",
  Zl = () => "Use as setas do teclado para navegar pelos momentos.",
  Kl = () => "使用方向键浏览快照。",
  Ql = () => "Verwende die Pfeiltasten, um zwischen den Zeitpunkten zu wechseln.",
  Jl = () => "Usa las flechas para moverte entre las instantáneas.",
  $l = () => "Utilisez les flèches pour parcourir les instantanés.",
  ec = () => "Usa le frecce per passare tra le istantanee.",
  tc = () => "矢印キーでスナップショット間を移動できます。",
  rc = () => "Użyj strzałek, aby przechodzić między migawkami.",
  nc = () => "Используйте стрелки для перемещения между снимками.",
  sc = () => "Використовуйте стрілки для переміщення між знімками.",
  ac = () => "Dùng phím mũi tên để di chuyển giữa các ảnh chụp.",
  ic = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Vl() : e === "pt" ? Zl() : e === "ch" ? Kl() : e === "de" ? Ql() : e === "es" ? Jl() : e === "fr" ? $l() : e === "it" ? ec() : e === "jp" ? tc() : e === "pl" ? rc() : e === "ru" ? nc() : e === "uk" ? sc() : ac()
  },
  oc = () => "Loading modification history...",
  lc = () => "Carregando histórico de modificações...",
  cc = () => "正在加载修改历史...",
  uc = () => "Änderungsverlauf wird geladen...",
  _c = () => "Cargando historial de modificaciones...",
  dc = () => "Chargement de l'historique des modifications...",
  fc = () => "Caricamento cronologia modifiche...",
  pc = () => "変更履歴を読み込み中...",
  hc = () => "Ładowanie historii modyfikacji...",
  vc = () => "Загрузка истории изменений...",
  mc = () => "Завантаження історії змін...",
  gc = () => "Đang tải lịch sử thay đổi...",
  xc = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? oc() : e === "pt" ? lc() : e === "ch" ? cc() : e === "de" ? uc() : e === "es" ? _c() : e === "fr" ? dc() : e === "it" ? fc() : e === "jp" ? pc() : e === "pl" ? hc() : e === "ru" ? vc() : e === "uk" ? mc() : gc()
  },
  bc = () => "Depth",
  yc = () => "Depth",
  wc = () => "Depth",
  kc = () => "Depth",
  qc = () => "Profundidad",
  Sc = () => "Depth",
  Ic = () => "Profondità",
  Mc = () => "Depth",
  Pc = () => "Depth",
  zc = () => "Depth",
  Tc = () => "Depth",
  Ac = () => "Depth",
  Uc = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? bc() : e === "pt" ? yc() : e === "ch" ? wc() : e === "de" ? kc() : e === "es" ? qc() : e === "fr" ? Sc() : e === "it" ? Ic() : e === "jp" ? Mc() : e === "pl" ? Pc() : e === "ru" ? zc() : e === "uk" ? Tc() : Ac()
  },
  Cc = () => "Compare the selected pixels by how many edits back each one goes.",
  jc = () => "Compare the selected pixels by how many edits back each one goes.",
  Ec = () => "Compare the selected pixels by how many edits back each one goes.",
  Dc = () => "Compare the selected pixels by how many edits back each one goes.",
  Bc = () => "Compara los píxeles seleccionados según cuántas ediciones atrás llega cada uno.",
  Rc = () => "Compare the selected pixels by how many edits back each one goes.",
  Fc = () => "Confronta i pixel selezionati in base al numero di modifiche precedenti di ciascuno.",
  Hc = () => "Compare the selected pixels by how many edits back each one goes.",
  Lc = () => "Compare the selected pixels by how many edits back each one goes.",
  Xc = () => "Compare the selected pixels by how many edits back each one goes.",
  Yc = () => "Compare the selected pixels by how many edits back each one goes.",
  Wc = () => "Compare the selected pixels by how many edits back each one goes.",
  Vn = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Cc() : e === "pt" ? jc() : e === "ch" ? Ec() : e === "de" ? Dc() : e === "es" ? Bc() : e === "fr" ? Rc() : e === "it" ? Fc() : e === "jp" ? Hc() : e === "pl" ? Lc() : e === "ru" ? Xc() : e === "uk" ? Yc() : Wc()
  },
  Nc = () => "Historical",
  Gc = () => "Historical",
  Oc = () => "Historical",
  Vc = () => "Historical",
  Zc = () => "Histórico",
  Kc = () => "Historical",
  Qc = () => "Storico",
  Jc = () => "Historical",
  $c = () => "Historical",
  eu = () => "Historical",
  tu = () => "Historical",
  ru = () => "Historical",
  nu = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Nc() : e === "pt" ? Gc() : e === "ch" ? Oc() : e === "de" ? Vc() : e === "es" ? Zc() : e === "fr" ? Kc() : e === "it" ? Qc() : e === "jp" ? Jc() : e === "pl" ? $c() : e === "ru" ? eu() : e === "uk" ? tu() : ru()
  },
  su = () => "Browse real paint moments and restore the exact historical state.",
  au = () => "Browse real paint moments and restore the exact historical state.",
  iu = () => "Browse real paint moments and restore the exact historical state.",
  ou = () => "Browse real paint moments and restore the exact historical state.",
  lu = () => "Navega por momentos reales de pintura y restaura el estado histórico exacto.",
  cu = () => "Browse real paint moments and restore the exact historical state.",
  uu = () => "Esplora i momenti reali di pittura e ripristina lo stato storico esatto.",
  _u = () => "Browse real paint moments and restore the exact historical state.",
  du = () => "Browse real paint moments and restore the exact historical state.",
  fu = () => "Browse real paint moments and restore the exact historical state.",
  pu = () => "Browse real paint moments and restore the exact historical state.",
  hu = () => "Browse real paint moments and restore the exact historical state.",
  Zn = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? su() : e === "pt" ? au() : e === "ch" ? iu() : e === "de" ? ou() : e === "es" ? lu() : e === "fr" ? cu() : e === "it" ? uu() : e === "jp" ? _u() : e === "pl" ? du() : e === "ru" ? fu() : e === "uk" ? pu() : hu()
  },
  vu = () => "Method",
  mu = () => "Method",
  gu = () => "Method",
  xu = () => "Method",
  bu = () => "Método",
  yu = () => "Method",
  wu = () => "Metodo",
  ku = () => "Method",
  qu = () => "Method",
  Su = () => "Method",
  Iu = () => "Method",
  Mu = () => "Method",
  Pu = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? vu() : e === "pt" ? mu() : e === "ch" ? gu() : e === "de" ? xu() : e === "es" ? bu() : e === "fr" ? yu() : e === "it" ? wu() : e === "jp" ? ku() : e === "pl" ? qu() : e === "ru" ? Su() : e === "uk" ? Iu() : Mu()
  },
  zu = () => "Reverse Pixels",
  Tu = () => "Reverter Pixels",
  Au = () => "回退像素",
  Uu = () => "Pixel zurücksetzen",
  Cu = () => "Revertir Píxeles",
  ju = () => "Inverser les Pixels",
  Eu = () => "Ripristina pixel",
  Du = () => "ピクセルを元に戻す",
  Bu = () => "Cofnij piksele",
  Ru = () => "Откатить пиксели",
  Fu = () => "Відкотити пікселі",
  Hu = () => "Hoàn tác pixel",
  os = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? zu() : e === "pt" ? Tu() : e === "ch" ? Au() : e === "de" ? Uu() : e === "es" ? Cu() : e === "fr" ? ju() : e === "it" ? Eu() : e === "jp" ? Du() : e === "pl" ? Bu() : e === "ru" ? Ru() : e === "uk" ? Fu() : Hu()
  },
  Lu = t => `Revert ${t.count} selected pixels to a previous state`,
  Xu = t => `Reverter ${t.count} pixels selecionados para um estado anterior`,
  Yu = t => `将 ${t.count} 个选定像素恢复到之前的状态`,
  Wu = t => `${t.count} ausgewählte Pixel auf einen früheren Zustand zurücksetzen`,
  Nu = t => `Revertir ${t.count} píxeles seleccionados a un estado anterior`,
  Gu = t => `Restaurer ${t.count} pixels sélectionnés à un état précédent`,
  Ou = t => `Ripristina ${t.count} pixel selezionati a uno stato precedente`,
  Vu = t => `選択した ${t.count} ピクセルを以前の状態に戻す`,
  Zu = t => `Przywróć ${t.count} wybranych pikseli do poprzedniego stanu`,
  Ku = t => `Вернуть ${t.count} выбранных пикселей к предыдущему состоянию`,
  Qu = t => `Повернути ${t.count} вибраних пікселів до попереднього стану`,
  Ju = t => `Khôi phục ${t.count} pixel đã chọn về trạng thái trước đó`,
  $u = (t, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Lu(t) : e === "pt" ? Xu(t) : e === "ch" ? Yu(t) : e === "de" ? Wu(t) : e === "es" ? Nu(t) : e === "fr" ? Gu(t) : e === "it" ? Ou(t) : e === "jp" ? Vu(t) : e === "pl" ? Zu(t) : e === "ru" ? Ku(t) : e === "uk" ? Qu(t) : Ju(t)
  },
  e_ = () => "Preview",
  t_ = () => "Prévia",
  r_ = () => "预览",
  n_ = () => "Vorschau",
  s_ = () => "Vista previa",
  a_ = () => "Aperçu",
  i_ = () => "Anteprima",
  o_ = () => "プレビュー",
  l_ = () => "Podgląd",
  c_ = () => "Предпросмотр",
  u_ = () => "Попередній перегляд",
  __ = () => "Xem trước",
  d_ = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? e_() : e === "pt" ? t_() : e === "ch" ? r_() : e === "de" ? n_() : e === "es" ? s_() : e === "fr" ? a_() : e === "it" ? i_() : e === "jp" ? o_() : e === "pl" ? l_() : e === "ru" ? c_() : e === "uk" ? u_() : __()
  },
  f_ = t => `Snapshot ${t.current} of ${t.total}`,
  p_ = t => `Momento ${t.current} de ${t.total}`,
  h_ = t => `快照 ${t.current} / ${t.total}`,
  v_ = t => `Zeitpunkt ${t.current} von ${t.total}`,
  m_ = t => `Instantánea ${t.current} de ${t.total}`,
  g_ = t => `Instantané ${t.current} sur ${t.total}`,
  x_ = t => `Istantanea ${t.current} di ${t.total}`,
  b_ = t => `スナップショット ${t.current} / ${t.total}`,
  y_ = t => `Migawka ${t.current} z ${t.total}`,
  w_ = t => `Снимок ${t.current} из ${t.total}`,
  k_ = t => `Знімок ${t.current} з ${t.total}`,
  q_ = t => `Ảnh chụp ${t.current} / ${t.total}`,
  S_ = (t, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? f_(t) : e === "pt" ? p_(t) : e === "ch" ? h_(t) : e === "de" ? v_(t) : e === "es" ? m_(t) : e === "fr" ? g_(t) : e === "it" ? x_(t) : e === "jp" ? b_(t) : e === "pl" ? y_(t) : e === "ru" ? w_(t) : e === "uk" ? k_(t) : q_(t)
  },
  I_ = () => "Snapshots",
  M_ = () => "Momentos",
  P_ = () => "快照",
  z_ = () => "Zeitpunkte",
  T_ = () => "Instantáneas",
  A_ = () => "Instantanés",
  U_ = () => "Istantanee",
  C_ = () => "スナップショット",
  j_ = () => "Migawki",
  E_ = () => "Снимки",
  D_ = () => "Знімки",
  B_ = () => "Ảnh chụp",
  R_ = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? I_() : e === "pt" ? M_() : e === "ch" ? P_() : e === "de" ? z_() : e === "es" ? T_() : e === "fr" ? A_() : e === "it" ? U_() : e === "jp" ? C_() : e === "pl" ? j_() : e === "ru" ? E_() : e === "uk" ? D_() : B_()
  },
  F_ = () => "Select the area's first corner",
  H_ = () => "Selecione o primeiro canto da área",
  L_ = () => "选择区域的第一个角",
  X_ = () => "Erste Ecke des Bereichs auswählen",
  Y_ = () => "Selecciona la primera esquina del área",
  W_ = () => "Sélectionnez le premier coin de la zone",
  N_ = () => "Seleziona il primo angolo dell'area",
  G_ = () => "領域の最初の角を選択",
  O_ = () => "Wybierz pierwszy narożnik obszaru",
  V_ = () => "Выберите первый угол области",
  Z_ = () => "Виберіть перший кут області",
  K_ = () => "Chọn góc đầu tiên của vùng",
  dx = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? F_() : e === "pt" ? H_() : e === "ch" ? L_() : e === "de" ? X_() : e === "es" ? Y_() : e === "fr" ? W_() : e === "it" ? N_() : e === "jp" ? G_() : e === "pl" ? O_() : e === "ru" ? V_() : e === "uk" ? Z_() : K_()
  },
  Q_ = () => "Select the area's opposite corner",
  J_ = () => "Selecione o canto oposto da área",
  $_ = () => "选择区域的对角",
  ed = () => "Gegenüberliegende Ecke des Bereichs auswählen",
  td = () => "Selecciona la esquina opuesta del área",
  rd = () => "Sélectionnez le coin opposé de la zone",
  nd = () => "Seleziona l'angolo opposto dell'area",
  sd = () => "領域の反対側の角を選択",
  ad = () => "Wybierz przeciwległy narożnik obszaru",
  id = () => "Выберите противоположный угол области",
  od = () => "Виберіть протилежний кут області",
  ld = () => "Chọn góc đối diện của vùng",
  fx = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Q_() : e === "pt" ? J_() : e === "ch" ? $_() : e === "de" ? ed() : e === "es" ? td() : e === "fr" ? rd() : e === "it" ? nd() : e === "jp" ? sd() : e === "pl" ? ad() : e === "ru" ? id() : e === "uk" ? od() : ld()
  },
  cd = () => "This browser cannot export timelapse videos.",
  ud = () => "Este navegador não consegue exportar vídeos de timelapse.",
  _d = () => "This browser cannot export timelapse videos.",
  dd = () => "This browser cannot export timelapse videos.",
  fd = () => "This browser cannot export timelapse videos.",
  pd = () => "This browser cannot export timelapse videos.",
  hd = () => "Questo browser non può esportare video timelapse.",
  vd = () => "This browser cannot export timelapse videos.",
  md = () => "This browser cannot export timelapse videos.",
  gd = () => "This browser cannot export timelapse videos.",
  xd = () => "This browser cannot export timelapse videos.",
  bd = () => "This browser cannot export timelapse videos.",
  at = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? cd() : e === "pt" ? ud() : e === "ch" ? _d() : e === "de" ? dd() : e === "es" ? fd() : e === "fr" ? pd() : e === "it" ? hd() : e === "jp" ? vd() : e === "pl" ? md() : e === "ru" ? gd() : e === "uk" ? xd() : bd()
  },
  yd = () => "Select at least one player.",
  wd = () => "Selecione pelo menos um jogador.",
  kd = () => "请至少选择一名玩家。",
  qd = () => "Wähle mindestens einen Spieler aus.",
  Sd = () => "Selecciona al menos un jugador.",
  Id = () => "Sélectionnez au moins un joueur.",
  Md = () => "Seleziona almeno un giocatore.",
  Pd = () => "プレイヤーを1人以上選択してください。",
  zd = () => "Wybierz co najmniej jednego gracza.",
  Td = () => "Выберите хотя бы одного игрока.",
  Ad = () => "Виберіть щонайменше одного гравця.",
  Ud = () => "Hãy chọn ít nhất một người chơi.",
  gn = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? yd() : e === "pt" ? wd() : e === "ch" ? kd() : e === "de" ? qd() : e === "es" ? Sd() : e === "fr" ? Id() : e === "it" ? Md() : e === "jp" ? Pd() : e === "pl" ? zd() : e === "ru" ? Td() : e === "uk" ? Ad() : Ud()
  },
  Cd = t => `Phone verification required for ${t.count} players`,
  jd = t => `Verificação por telefone exigida para ${t.count} jogadores`,
  Ed = t => `有 ${t.count} 名玩家需要完成手机验证`,
  Dd = t => `Telefonverifizierung für ${t.count} Spieler erforderlich`,
  Bd = t => `Verificación por teléfono requerida para ${t.count} jugadores`,
  Rd = t => `Vérification par téléphone requise pour ${t.count} joueurs`,
  Fd = t => `Verifica telefonica richiesta per ${t.count} giocatori`,
  Hd = t => `${t.count} 人のプレイヤーには電話認証が必要です`,
  Ld = t => `Wymagana weryfikacja telefonu dla ${t.count} graczy`,
  Xd = t => `Для ${t.count} игроков требуется подтверждение по телефону`,
  Yd = t => `Для ${t.count} гравців потрібна перевірка телефону`,
  Wd = t => `Cần xác minh điện thoại cho ${t.count} người chơi`,
  Nd = (t, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Cd(t) : e === "pt" ? jd(t) : e === "ch" ? Ed(t) : e === "de" ? Dd(t) : e === "es" ? Bd(t) : e === "fr" ? Rd(t) : e === "it" ? Fd(t) : e === "jp" ? Hd(t) : e === "pl" ? Ld(t) : e === "ru" ? Xd(t) : e === "uk" ? Yd(t) : Wd(t)
  },
  Gd = t => `Cleared ${t.count} headquarters paint events`,
  Od = t => `${t.count} eventos de pintura do quartel general limpos`,
  Vd = t => `已清除 ${t.count} 条总部绘制记录`,
  Zd = t => `${t.count} Malereignisse des Hauptquartiers gelöscht`,
  Kd = t => `${t.count} eventos de pintura del cuartel general eliminados`,
  Qd = t => `${t.count} événements de peinture du quartier général effacés`,
  Jd = t => `${t.count} eventi di pittura del quartier generale cancellati`,
  $d = t => `拠点のペイントイベントを ${t.count} 件消去しました`,
  ef = t => `Wyczyszczono ${t.count} zdarzeń malowania w siedzibie`,
  tf = t => `Очищено событий рисования в штаб-квартире: ${t.count}`,
  rf = t => `Очищено ${t.count} подій малювання у штаб-квартирі`,
  nf = t => `Đã xóa ${t.count} sự kiện tô của trụ sở`,
  sf = (t, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Gd(t) : e === "pt" ? Od(t) : e === "ch" ? Vd(t) : e === "de" ? Zd(t) : e === "es" ? Kd(t) : e === "fr" ? Qd(t) : e === "it" ? Jd(t) : e === "jp" ? $d(t) : e === "pl" ? ef(t) : e === "ru" ? tf(t) : e === "uk" ? rf(t) : nf(t)
  },
  af = () => "Selected headquarters area saved",
  of = () => "Area selecionada do quartel general salva",
  lf = () => "所选总部区域已保存",
  cf = () => "Ausgewählter Hauptquartier-Bereich gespeichert",
  uf = () => "Área seleccionada del cuartel general guardada",
  _f = () => "Zone sélectionnée du quartier général enregistrée",
  df = () => "Area selezionata del quartier generale salvata",
  ff = () => "選択した拠点のエリアを保存しました",
  pf = () => "Zapisano wybrany obszar siedziby",
  hf = () => "Выбранная область штаб-квартиры сохранена",
  vf = () => "Вибрану область штаб-квартири збережено",
  mf = () => "Đã lưu vùng trụ sở đã chọn",
  gf = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? af() : e === "pt" ? of() : e === "ch" ? lf() : e === "de" ? cf() : e === "es" ? uf() : e === "fr" ? _f() : e === "it" ? df() : e === "jp" ? ff() : e === "pl" ? pf() : e === "ru" ? hf() : e === "uk" ? vf() : mf()
  },
  xf = () => "Selected player IDs copied",
  bf = () => "IDs dos jogadores selecionados copiados",
  yf = () => "已复制所选玩家 ID",
  wf = () => "IDs der ausgewählten Spieler kopiert",
  kf = () => "IDs de los jugadores seleccionados copiados",
  qf = () => "IDs des joueurs sélectionnés copiés",
  Sf = () => "ID dei giocatori selezionati copiati",
  If = () => "選択したプレイヤーIDをコピーしました",
  Mf = () => "Skopiowano ID wybranych graczy",
  Pf = () => "ID выбранных игроков скопированы",
  zf = () => "ID вибраних гравців скопійовано",
  Tf = () => "Đã sao chép ID của những người chơi đã chọn",
  Af = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? xf() : e === "pt" ? bf() : e === "ch" ? yf() : e === "de" ? wf() : e === "es" ? kf() : e === "fr" ? qf() : e === "it" ? Sf() : e === "jp" ? If() : e === "pl" ? Mf() : e === "ru" ? Pf() : e === "uk" ? zf() : Tf()
  },
  Uf = () => "Select a player from a pixel",
  Cf = () => "Selecionar jogador por um pixel",
  jf = () => "通过像素选择玩家",
  Ef = () => "Spieler über einen Pixel auswählen",
  Df = () => "Seleccionar un jugador desde un píxel",
  Bf = () => "Sélectionner un joueur à partir d'un pixel",
  Rf = () => "Seleziona un giocatore da un pixel",
  Ff = () => "ピクセルからプレイヤーを選択",
  Hf = () => "Wybierz gracza z piksela",
  Lf = () => "Выбрать игрока по пикселю",
  Xf = () => "Вибрати гравця за пікселем",
  Yf = () => "Chọn người chơi từ một pixel",
  Wf = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Uf() : e === "pt" ? Cf() : e === "ch" ? jf() : e === "de" ? Ef() : e === "es" ? Df() : e === "fr" ? Bf() : e === "it" ? Rf() : e === "jp" ? Ff() : e === "pl" ? Hf() : e === "ru" ? Lf() : e === "uk" ? Xf() : Yf()
  },
  Nf = () => "Select filtered",
  Gf = () => "Selecionar filtrados",
  Of = () => "选择筛选结果",
  Vf = () => "Gefilterte auswählen",
  Zf = () => "Seleccionar filtrados",
  Kf = () => "Sélectionner les filtrés",
  Qf = () => "Seleziona filtrati",
  Jf = () => "絞り込み結果を選択",
  $f = () => "Zaznacz filtrowane",
  ep = () => "Выбрать отфильтрованных",
  tp = () => "Вибрати відфільтрованих",
  rp = () => "Chọn mục đã lọc",
  np = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Nf() : e === "pt" ? Gf() : e === "ch" ? Of() : e === "de" ? Vf() : e === "es" ? Zf() : e === "fr" ? Kf() : e === "it" ? Qf() : e === "jp" ? Jf() : e === "pl" ? $f() : e === "ru" ? ep() : e === "uk" ? tp() : rp()
  },
  sp = () => "Clear filtered",
  ap = () => "Limpar filtrados",
  ip = () => "清除筛选结果",
  op = () => "Gefilterte abwählen",
  lp = () => "Deseleccionar filtrados",
  cp = () => "Désélectionner les filtrés",
  up = () => "Deseleziona filtrati",
  _p = () => "絞り込み結果の選択を解除",
  dp = () => "Odznacz filtrowane",
  fp = () => "Снять выбор с отфильтрованных",
  pp = () => "Очистити відфільтрованих",
  hp = () => "Bỏ chọn mục đã lọc",
  vp = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? sp() : e === "pt" ? ap() : e === "ch" ? ip() : e === "de" ? op() : e === "es" ? lp() : e === "fr" ? cp() : e === "it" ? up() : e === "jp" ? _p() : e === "pl" ? dp() : e === "ru" ? fp() : e === "uk" ? pp() : hp()
  },
  mp = () => "All roles",
  gp = () => "Todos os cargos",
  xp = () => "所有角色",
  bp = () => "Alle Rollen",
  yp = () => "Todos los cargos",
  wp = () => "Tous les rôles",
  kp = () => "Tutti i ruoli",
  qp = () => "すべてのロール",
  Sp = () => "Wszystkie role",
  Ip = () => "Все роли",
  Mp = () => "Усі ролі",
  Pp = () => "Tất cả vai trò",
  zp = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? mp() : e === "pt" ? gp() : e === "ch" ? xp() : e === "de" ? bp() : e === "es" ? yp() : e === "fr" ? wp() : e === "it" ? kp() : e === "jp" ? qp() : e === "pl" ? Sp() : e === "ru" ? Ip() : e === "uk" ? Mp() : Pp()
  },
  Tp = () => "Not painted",
  Ap = () => "Não pintado",
  Up = () => "未绘制",
  Cp = () => "Nicht bemalt",
  jp = () => "Sin pintar",
  Ep = () => "Non peint",
  Dp = () => "Non dipinto",
  Bp = () => "未ペイント",
  Rp = () => "Niepomalowany",
  Fp = () => "Не нарисовано",
  Hp = () => "Не намальовано",
  Lp = () => "Chưa tô",
  en = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Tp() : e === "pt" ? Ap() : e === "ch" ? Up() : e === "de" ? Cp() : e === "es" ? jp() : e === "fr" ? Ep() : e === "it" ? Dp() : e === "jp" ? Bp() : e === "pl" ? Rp() : e === "ru" ? Fp() : e === "uk" ? Hp() : Lp()
  },
  Xp = () => "Selected area",
  Yp = () => "Area selecionada",
  Wp = () => "已选区域",
  Np = () => "Ausgewählter Bereich",
  Gp = () => "Área seleccionada",
  Op = () => "Zone sélectionnée",
  Vp = () => "Area selezionata",
  Zp = () => "選択したエリア",
  Kp = () => "Wybrany obszar",
  Qp = () => "Выбранная область",
  Jp = () => "Вибрана область",
  $p = () => "Khu vực đã chọn",
  eh = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Xp() : e === "pt" ? Yp() : e === "ch" ? Wp() : e === "de" ? Np() : e === "es" ? Gp() : e === "fr" ? Op() : e === "it" ? Vp() : e === "jp" ? Zp() : e === "pl" ? Kp() : e === "ru" ? Qp() : e === "uk" ? Jp() : $p()
  },
  th = () => "Any",
  rh = () => "Qualquer",
  nh = () => "任意",
  sh = () => "Beliebig",
  ah = () => "Cualquiera",
  ih = () => "Tous",
  oh = () => "Qualsiasi",
  lh = () => "指定なし",
  ch = () => "Dowolny",
  uh = () => "Любой",
  _h = () => "Будь-який",
  dh = () => "Bất kỳ",
  Kn = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? th() : e === "pt" ? rh() : e === "ch" ? nh() : e === "de" ? sh() : e === "es" ? ah() : e === "fr" ? ih() : e === "it" ? oh() : e === "jp" ? lh() : e === "pl" ? ch() : e === "ru" ? uh() : e === "uk" ? _h() : dh()
  },
  fh = () => "Name or ID",
  ph = () => "Nome ou ID",
  hh = () => "名称或 ID",
  vh = () => "Name oder ID",
  mh = () => "Nombre o ID",
  gh = () => "Nom ou ID",
  xh = () => "Nome o ID",
  bh = () => "名前またはID",
  yh = () => "Nazwa lub ID",
  wh = () => "Имя или ID",
  kh = () => "Ім'я або ID",
  qh = () => "Tên hoặc ID",
  Sh = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? fh() : e === "pt" ? ph() : e === "ch" ? hh() : e === "de" ? vh() : e === "es" ? mh() : e === "fr" ? gh() : e === "it" ? xh() : e === "jp" ? bh() : e === "pl" ? yh() : e === "ru" ? wh() : e === "uk" ? kh() : qh()
  },
  Ih = () => "User ID From",
  Mh = () => "ID de usuário inicial",
  Ph = () => "起始用户 ID",
  zh = () => "Nutzer-ID von",
  Th = () => "ID de usuario desde",
  Ah = () => "ID utilisateur de",
  Uh = () => "ID utente da",
  Ch = () => "ユーザーID（開始）",
  jh = () => "ID użytkownika od",
  Eh = () => "ID пользователя от",
  Dh = () => "ID користувача від",
  Bh = () => "ID người dùng từ",
  Rh = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Ih() : e === "pt" ? Mh() : e === "ch" ? Ph() : e === "de" ? zh() : e === "es" ? Th() : e === "fr" ? Ah() : e === "it" ? Uh() : e === "jp" ? Ch() : e === "pl" ? jh() : e === "ru" ? Eh() : e === "uk" ? Dh() : Bh()
  },
  Fh = () => "User ID To",
  Hh = () => "ID de usuário final",
  Lh = () => "结束用户 ID",
  Xh = () => "Nutzer-ID bis",
  Yh = () => "ID de usuario hasta",
  Wh = () => "ID utilisateur à",
  Nh = () => "ID utente a",
  Gh = () => "ユーザーID（終了）",
  Oh = () => "ID użytkownika do",
  Vh = () => "ID пользователя до",
  Zh = () => "ID користувача до",
  Kh = () => "ID người dùng đến",
  Qh = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Fh() : e === "pt" ? Hh() : e === "ch" ? Lh() : e === "de" ? Xh() : e === "es" ? Yh() : e === "fr" ? Wh() : e === "it" ? Nh() : e === "jp" ? Gh() : e === "pl" ? Oh() : e === "ru" ? Vh() : e === "uk" ? Zh() : Kh()
  },
  Jh = () => "Min",
  $h = () => "Mínimo",
  ev = () => "最小",
  tv = () => "Min",
  rv = () => "Mín",
  nv = () => "Min",
  sv = () => "Min",
  av = () => "最小",
  iv = () => "Min",
  ov = () => "Мин.",
  lv = () => "Мін.",
  cv = () => "Tối thiểu",
  uv = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Jh() : e === "pt" ? $h() : e === "ch" ? ev() : e === "de" ? tv() : e === "es" ? rv() : e === "fr" ? nv() : e === "it" ? sv() : e === "jp" ? av() : e === "pl" ? iv() : e === "ru" ? ov() : e === "uk" ? lv() : cv()
  },
  _v = () => "Max",
  dv = () => "Máximo",
  fv = () => "最大",
  pv = () => "Max",
  hv = () => "Máx",
  vv = () => "Max",
  mv = () => "Max",
  gv = () => "最大",
  xv = () => "Maks",
  bv = () => "Макс.",
  yv = () => "Макс.",
  wv = () => "Tối đa",
  kv = (t = {}, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? _v() : e === "pt" ? dv() : e === "ch" ? fv() : e === "de" ? pv() : e === "es" ? hv() : e === "fr" ? vv() : e === "it" ? mv() : e === "jp" ? gv() : e === "pl" ? xv() : e === "ru" ? bv() : e === "uk" ? yv() : wv()
  },
  qv = t => `Circle brush (Alt + scroll to resize) - Size: ${t.size}`,
  Sv = t => `Pincel circular (Alt + rolagem para redimensionar) - Tamanho: ${t.size}`,
  Iv = t => `圆形画笔（Alt + 滚轮调整大小）- 大小：${t.size}`,
  Mv = t => `Runder Pinsel (Alt + Scrollen zum Ändern der Größe) - Größe: ${t.size}`,
  Pv = t => `Pincel circular (Alt + rueda para redimensionar) - Tamaño: ${t.size}`,
  zv = t => `Pinceau circulaire (Alt + molette pour redimensionner) - Taille : ${t.size}`,
  Tv = t => `Pennello circolare (Alt + scorrimento per ridimensionare) - Dimensione: ${t.size}`,
  Av = t => `円形ブラシ（Alt + スクロールでサイズ変更） - サイズ: ${t.size}`,
  Uv = t => `Pędzel okrągły (Alt + przewijanie zmienia rozmiar) - Rozmiar: ${t.size}`,
  Cv = t => `Круглая кисть (Alt + прокрутка для изменения размера) - Размер: ${t.size}`,
  jv = t => `Кругла кисть (Alt + прокрутка для зміни розміру) - Розмір: ${t.size}`,
  Ev = t => `Cọ tròn (Alt + cuộn để đổi cỡ) - Cỡ: ${t.size}`,
  Dv = (t, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? qv(t) : e === "pt" ? Sv(t) : e === "ch" ? Iv(t) : e === "de" ? Mv(t) : e === "es" ? Pv(t) : e === "fr" ? zv(t) : e === "it" ? Tv(t) : e === "jp" ? Av(t) : e === "pl" ? Uv(t) : e === "ru" ? Cv(t) : e === "uk" ? jv(t) : Ev(t)
  },
  Bv = t => `Square brush (Alt + scroll to resize) - Size: ${t.size}`,
  Rv = t => `Pincel quadrado (Alt + rolagem para redimensionar) - Tamanho: ${t.size}`,
  Fv = t => `方形画笔（Alt + 滚轮调整大小）- 大小：${t.size}`,
  Hv = t => `Eckiger Pinsel (Alt + Scrollen zum Ändern der Größe) - Größe: ${t.size}`,
  Lv = t => `Pincel cuadrado (Alt + rueda para redimensionar) - Tamaño: ${t.size}`,
  Xv = t => `Pinceau carré (Alt + molette pour redimensionner) - Taille : ${t.size}`,
  Yv = t => `Pennello quadrato (Alt + scorrimento per ridimensionare) - Dimensione: ${t.size}`,
  Wv = t => `四角ブラシ（Alt + スクロールでサイズ変更） - サイズ: ${t.size}`,
  Nv = t => `Pędzel kwadratowy (Alt + przewijanie zmienia rozmiar) - Rozmiar: ${t.size}`,
  Gv = t => `Квадратная кисть (Alt + прокрутка для изменения размера) - Размер: ${t.size}`,
  Ov = t => `Квадратна кисть (Alt + прокрутка для зміни розміру) - Розмір: ${t.size}`,
  Vv = t => `Cọ vuông (Alt + cuộn để đổi cỡ) - Cỡ: ${t.size}`,
  Zv = (t, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Bv(t) : e === "pt" ? Rv(t) : e === "ch" ? Fv(t) : e === "de" ? Hv(t) : e === "es" ? Lv(t) : e === "fr" ? Xv(t) : e === "it" ? Yv(t) : e === "jp" ? Wv(t) : e === "pl" ? Nv(t) : e === "ru" ? Gv(t) : e === "uk" ? Ov(t) : Vv(t)
  },
  Kv = t => `${t.name} selected`,
  Qv = t => `${t.name} selecionado`,
  Jv = t => `已选择 ${t.name}`,
  $v = t => `${t.name} ausgewählt`,
  em = t => `${t.name} seleccionado`,
  tm = t => `${t.name} sélectionné`,
  rm = t => `${t.name} selezionato`,
  nm = t => `${t.name} を選択しました`,
  sm = t => `Zaznaczono ${t.name}`,
  am = t => `${t.name} выбран`,
  im = t => `${t.name} вибрано`,
  om = t => `Đã chọn ${t.name}`,
  lm = (t, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? Kv(t) : e === "pt" ? Qv(t) : e === "ch" ? Jv(t) : e === "de" ? $v(t) : e === "es" ? em(t) : e === "fr" ? tm(t) : e === "it" ? rm(t) : e === "jp" ? nm(t) : e === "pl" ? sm(t) : e === "ru" ? am(t) : e === "uk" ? im(t) : om(t)
  },
  cm = t => `${t.name} deselected`,
  um = t => `${t.name} desmarcado`,
  _m = t => `已取消选择 ${t.name}`,
  dm = t => `${t.name} abgewählt`,
  fm = t => `${t.name} deseleccionado`,
  pm = t => `${t.name} désélectionné`,
  hm = t => `${t.name} deselezionato`,
  vm = t => `${t.name} の選択を解除しました`,
  mm = t => `Odznaczono ${t.name}`,
  gm = t => `${t.name} снят с выбора`,
  xm = t => `${t.name} знято з вибору`,
  bm = t => `Đã bỏ chọn ${t.name}`,
  ym = (t, r = {}) => {
    const e = r.locale ?? M();
    return e === "en" ? cm(t) : e === "pt" ? um(t) : e === "ch" ? _m(t) : e === "de" ? dm(t) : e === "es" ? fm(t) : e === "fr" ? pm(t) : e === "it" ? hm(t) : e === "jp" ? vm(t) : e === "pl" ? mm(t) : e === "ru" ? gm(t) : e === "uk" ? xm(t) : bm(t)
  };
var Mt, Pt, Ht, sn, St, zr, tn;
const zn = class zn extends Map {
  constructor(e) {
    super();
    qt(this, St);
    qt(this, Mt, new Map);
    qt(this, Pt, G(0));
    qt(this, Ht, G(0));
    qt(this, sn, En || -1);
    if (e) {
      for (var [s, a] of e) super.set(s, a);
      U(this, Ht).v = super.size
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
    var P;
    var a = U(this, Mt),
      o = a.get(e),
      u = super.get(e),
      d = super.set(e, s),
      f = U(this, Pt);
    if (o === void 0) o = Gt(this, St, zr).call(this, 0), a.set(e, o), m(U(this, Ht), super.size), Mr(f);
    else if (u !== s) {
      Mr(o);
      var h = f.reactions === null ? null : new Set(f.reactions),
        z = h === null || !((P = o.reactions) != null && P.every(D => h.has(D)));
      z && Mr(f)
    }
    return d
  }
  delete(e) {
    var s = U(this, Mt),
      a = s.get(e),
      o = super.delete(e);
    return a !== void 0 && (s.delete(e), m(a, -1)), o && (m(U(this, Ht), super.size), Mr(U(this, Pt))), o
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = U(this, Mt);
      m(U(this, Ht), 0);
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
    return n(U(this, Ht)), super.size
  }
};
Mt = new WeakMap, Pt = new WeakMap, Ht = new WeakMap, sn = new WeakMap, St = new WeakSet, zr = function(e) {
  return En === U(this, sn) ? G(e) : Es(e)
}, tn = function() {
  n(U(this, Pt));
  var e = U(this, Mt);
  if (U(this, Ht).v !== e.size) {
    for (var s of jn(zn.prototype, this, "keys").call(this))
      if (!e.has(s)) {
        var a = Gt(this, St, zr).call(this, 0);
        e.set(s, a)
      }
  }
  for ([, a] of U(this, Mt)) n(a)
};
let kn = zn;
const px = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAAXNSR0IArs4c6QAAACVJREFUeNpj+A8FDEAAZwMRBAIBmIYLIgHcgkQDIs3E6SRsjgcABYFLtfTgakEAAAAASUVORK5CYII=";
var wm = new Set(["$$slots", "$$events", "$$legacy"]),
  km = Cr('<svg><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"></circle><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>');

function qm(t, r) {
  let e = Er(r, wm);
  var s = km();
  jr(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...e
  })), k(t, s)
}
var Sm = new Set(["$$slots", "$$events", "$$legacy"]),
  Im = Cr('<svg><rect x="6" y="6" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" rx="2"></rect><rect x="10" y="10" width="4" height="4" fill="currentColor" rx="1"></rect></svg>');

function Mm(t, r) {
  let e = Er(r, Sm);
  var s = Im();
  jr(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...e
  })), k(t, s)
}
var Pm = new Set(["$$slots", "$$events", "$$legacy"]),
  zm = Cr('<svg><path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Z"></path></svg>');

function Tm(t, r) {
  let e = Er(r, Pm);
  var s = zm();
  jr(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), k(t, s)
}
var xn = R('<div class="py-8 text-center"><p class="text-base-content/60"> </p></div>'),
  Qn = R('<div class="flex flex-col items-center justify-center gap-3 py-8"><span class="loading loading-spinner loading-lg"></span> <p class="text-base-content/70 text-sm"> </p></div>'),
  Am = R('<div class="reverse-selection-pill svelte-o0qsvj"> </div>'),
  Um = R('<div class="bg-base-300/40 absolute inset-0 z-10 flex items-center justify-center"><span class="loading loading-spinner loading-lg"></span></div>'),
  Cm = R('<span class="loading loading-spinner loading-xs mt-1 shrink-0"></span>'),
  jm = R('<button type="button"><div class="reverse-gallery-item-head svelte-o0qsvj"><div class="reverse-gallery-item-copy svelte-o0qsvj"><div class="reverse-gallery-item-label flex justify-between svelte-o0qsvj"> <div class="badge badge-sm badge-outline"> </div></div> <div class="reverse-gallery-item-subtitle svelte-o0qsvj"> </div></div></div> <div class="mt-2 flex flex-wrap justify-between gap-2"><div class="badge badge-sm badge-outline"> </div> <!></div></button>'),
  Em = R('<span class="loading loading-spinner loading-xs"></span>'),
  Dm = R('<button type="button" class="btn btn-sm btn-outline w-full"><!> </button>'),
  Bm = R('<div class="reverse-workspace svelte-o0qsvj"><div class="reverse-panel svelte-o0qsvj"><div class="reverse-panel-header svelte-o0qsvj"><div><div class="reverse-section-title svelte-o0qsvj"> </div> <p class="reverse-section-copy svelte-o0qsvj"> </p></div> <!></div> <div class="reverse-preview-toolbar svelte-o0qsvj"><div class="reverse-meta-chip svelte-o0qsvj"><!> </div> <div class="reverse-meta-chip svelte-o0qsvj"><!> </div> <div class="flex items-center gap-1"><button type="button" class="btn btn-sm btn-ghost btn-circle" aria-label="Previous preview"><!></button> <button type="button" class="btn btn-sm btn-ghost btn-circle" aria-label="Next preview"><!></button></div></div> <div class="reverse-preview-stage svelte-o0qsvj"><!> <canvas style="max-width: 100%; height: auto;"></canvas></div> <div class="reverse-preview-footer svelte-o0qsvj"><div class="flex flex-wrap items-center gap-2 text-xs sm:text-sm"><div class="badge badge-outline"> </div> <div class="badge badge-outline"> </div></div> <div class="reverse-callout svelte-o0qsvj"><!> <span> </span></div></div></div> <div class="reverse-panel h-full svelte-o0qsvj"><div class="reverse-panel-header svelte-o0qsvj"><div><div class="reverse-section-title svelte-o0qsvj"> </div> <p class="reverse-section-copy svelte-o0qsvj"> </p></div> <div class="reverse-history-count svelte-o0qsvj"> </div></div> <div class="reverse-keyboard-hint svelte-o0qsvj"> </div> <div class="reverse-gallery-list h-full p-2 svelte-o0qsvj"></div> <!></div></div> <div class="reverse-action-bar svelte-o0qsvj"><div class="flex flex-wrap items-center justify-end gap-2"><button type="button" class="btn btn-sm btn-outline"> </button> <button type="button" class="btn btn-sm btn-warning"><!> </button></div></div>', 1),
  Rm = R('<div><div class="min-w-0"><h3 class="flex items-center gap-2 text-lg font-bold"><!> </h3> <p class="text-base-content/70 mt-1 text-sm"> </p></div></div> <div class="mt-4"><div class="reverse-mode-bar svelte-o0qsvj"><div><div class="reverse-section-title svelte-o0qsvj"> </div> <p class="reverse-section-copy svelte-o0qsvj"> </p></div> <div class="tabs tabs-boxed reverse-mode-tabs svelte-o0qsvj"><button type="button"> </button> <button type="button"> </button></div></div> <!></div>', 1);

function Fm(t, r) {
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
    P = G(!1),
    D = G(null),
    K = G([]),
    He = G(!1),
    Le = G(!1),
    $ = G(void 0),
    ye, ue, F = G(null),
    Re = 0,
    Ge = 0,
    Xe = 0,
    it = 0,
    Ze = null,
    Ae;
  const It = "wplace:reverse-debug",
    De = new Intl.RelativeTimeFormat(void 0, {
      numeric: "auto"
    });

  function ie() {
    return typeof performance < "u" ? performance.now() : Date.now()
  }

  function Q(i) {
    return Math.round((ie() - i) * 100) / 100
  }

  function Ye() {
    if (globalThis.__WPLACE_REVERSE_DEBUG__) return !0;
    try {
      const _ = globalThis.localStorage.getItem(It);
      return _ === "1" || _ === "true"
    } catch {
      return !1
    }
  }

  function re(i, _ = {}) {
    Ye() && console.info(`[ReversePixelsDialog] ${i}`, _)
  }

  function cr() {
    it += 1, Ae == null || Ae.abort(), Ae = void 0, m(Le, !1)
  }
  const Se = N(() => (() => {
      const i = n(f);
      return n(D) === null || i === null ? null : n(h).find(_ => Ke(_, i) === n(D)) ?? null
    })()),
    Ot = N(dr),
    vt = N(() => (() => {
      const i = n(f);
      return n(D) === null || i === null ? -1 : n(h).findIndex(_ => Ke(_, i) === n(D))
    })()),
    ct = N(() => n(vt) > 0),
    Vt = N(() => n(vt) >= 0 && n(vt) < n(h).length - 1),
    mt = N(() => n(He) || n(Le));
  Qr(() => {
    e() || (Re += 1, Xe += 1, cr(), m(d, "idle"), m(F, null), m(h, [], !0), m(D, null), m(K, []), m(He, !1), ue = void 0, Ze = null, m(z, !1), m(P, !1), m(f, null))
  }), Qr(() => {
    if (!e() || n(f) === null) return;
    const i = n(Ot);
    if (!o() || !i || !a()) {
      cr(), ue = void 0, Ze = null;
      return
    }
    S(i)
  }), Qr(() => {
    const i = n(D),
      _ = n(f);
    !e() || n(d) !== "gallery" || _ === null || i === null || requestAnimationFrame(() => {
      var x;
      (x = document.getElementById(q(_, i))) == null || x.scrollIntoView({
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
  async function jt(i) {
    var I;
    if (!r.dataSource && (!s() || s().length === 0)) {
      e(!1);
      return
    }
    const _ = ie(),
      x = ++Re;
    Xe += 1, re("loadTimestamps:start", {
      season: r.season,
      selectedPixels: r.selectedPixelCount,
      payloadBytes: ((I = s()) == null ? void 0 : I.length) ?? 0
    }), m(d, "loading"), m(f, i, !0), m(h, [], !0), m(z, !1), m(P, !1), m(D, null), m(K, []), m(He, !1), m(F, null), Ge += 1;
    try {
      if (r.dataSource) m(F, "custom"), await Zt("custom", i, {
        sessionMs: 0,
        loadStart: _,
        payloadBytes: 0,
        selectedPixels: r.selectedPixelCount
      });
      else {
        const b = ie(),
          T = await Tt.createReverseSession(s()),
          A = Q(b);
        if (x !== Re) return;
        m(F, T.sessionId, !0), await Zt(T.sessionId, i, {
          sessionMs: A,
          loadStart: _,
          payloadBytes: s().length,
          selectedPixels: r.selectedPixelCount
        })
      }
    } catch (b) {
      if (x !== Re) return;
      re("loadTimestamps:error", {
        season: r.season,
        selectedPixels: r.selectedPixelCount,
        durationMs: Q(_),
        message: b.message
      }), pe.error(b.message), e(!1)
    }
  }
  async function Zt(i, _, x) {
    var V;
    const I = ++Ge;
    Xe += 1, m(d, "loading"), m(h, [], !0), m(z, !1), m(P, !1), m(D, null), m(K, []), m(He, !1);
    const b = ie(),
      T = r.dataSource ? await r.dataSource.getTimeline({
        mode: _
      }) : await Tt.getReverseTimestamps(i, {
        mode: _
      }),
      A = Q(b);
    I !== Ge || i !== n(F) || (m(h, T.timestamps, !0), m(z, T.hasMore, !0), m(d, "gallery"), re("loadTimestamps:resolved", {
      season: r.season,
      mode: _,
      selectedPixels: (x == null ? void 0 : x.selectedPixels) ?? r.selectedPixelCount,
      payloadBytes: (x == null ? void 0 : x.payloadBytes) ?? ((V = s()) == null ? void 0 : V.length) ?? 0,
      sessionId: i,
      snapshots: n(h).length,
      hasMore: T.hasMore,
      sessionMs: x == null ? void 0 : x.sessionMs,
      timestampsMs: A,
      durationMs: x != null && x.loadStart ? Q(x.loadStart) : A
    }), n(h).length > 0 && await Yt(i, Ke(n(h)[0], _), _))
  }
  async function _r() {
    if (!n(F) || n(P) || !n(z) || n(h).length === 0) return;
    const i = Ge,
      _ = n(h)[n(h).length - 1],
      x = n(f);
    if (!_ || x === null) return;
    const I = Ke(_, x);
    if (!I) return;
    m(P, !0);
    const b = ie();
    re("loadMoreTimestamps:start", {
      season: r.season,
      mode: n(f),
      sessionId: n(F),
      beforeEntryValue: I,
      loadedSnapshots: n(h).length
    });
    try {
      const T = x === "historical" ? {
          mode: x,
          beforeTimestamp: I
        } : {
          mode: x,
          beforeDepth: I
        },
        A = r.dataSource ? await r.dataSource.getTimeline(T) : await Tt.getReverseTimestamps(n(F), T);
      if (i !== Ge) return;
      m(h, [...n(h), ...A.timestamps], !0), m(z, A.hasMore, !0), re("loadMoreTimestamps:resolved", {
        season: r.season,
        mode: x,
        sessionId: n(F),
        beforeEntryValue: I,
        appendedSnapshots: A.timestamps.length,
        loadedSnapshots: n(h).length,
        hasMore: A.hasMore,
        durationMs: Q(b)
      })
    } catch (T) {
      if (i !== Ge) return;
      re("loadMoreTimestamps:error", {
        season: r.season,
        mode: x,
        sessionId: n(F),
        beforeEntryValue: I,
        durationMs: Q(b),
        message: T.message
      }), pe.error(T.message)
    } finally {
      i === Ge && m(P, !1)
    }
  }
  async function Yt(i, _, x = n(f)) {
    if (x === null) return;
    const I = ie();
    m(D, _, !0), m(He, !0);
    const b = ++Xe;
    re("loadPreview:start", {
      season: r.season,
      mode: x,
      sessionId: i,
      entryValue: _,
      requestNonce: b
    });
    try {
      const T = ie(),
        A = ur(x, _),
        V = r.dataSource ? await r.dataSource.getPreview(A) : await Tt.getReversePreview(i, A),
        oe = Q(T);
      if (b !== Xe || (m(K, V.pixels), await new Promise(Z => requestAnimationFrame(() => Z())), b !== Xe)) return;
      const Ue = ie();
      j();
      const _e = Q(Ue);
      re("loadPreview:resolved", {
        season: r.season,
        mode: x,
        sessionId: i,
        entryValue: _,
        requestNonce: b,
        previewPixels: V.pixels.length,
        apiMs: oe,
        renderMs: _e,
        durationMs: Q(I)
      })
    } catch (T) {
      if (b !== Xe) return;
      re("loadPreview:error", {
        season: r.season,
        mode: x,
        sessionId: i,
        entryValue: _,
        requestNonce: b,
        durationMs: Q(I),
        message: T.message
      }), pe.error(T.message)
    } finally {
      b === Xe && m(He, !1)
    }
  }

  function dr() {
    let i = 1 / 0,
      _ = 1 / 0,
      x = -1 / 0,
      I = -1 / 0;
    if (a()) i = a().minGlobalX, _ = a().minGlobalY, x = a().maxGlobalX, I = a().maxGlobalY;
    else {
      if (n(K).length === 0) return null;
      for (const Z of n(K)) {
        const we = Z.tileX * n(u) + Z.pixelX,
          E = Z.tileY * n(u) + Z.pixelY;
        we < i && (i = we), E < _ && (_ = E), we > x && (x = we), E > I && (I = E)
      }
    }
    if (!Number.isFinite(i) || !Number.isFinite(_) || !Number.isFinite(x) || !Number.isFinite(I)) return null;
    const b = x - i + 1,
      T = I - _ + 1;
    if (b <= 0 || T <= 0) return null;
    const A = 520,
      V = Math.max(1, Math.ceil(Math.max(b / A, T / A))),
      oe = Math.max(1, Math.ceil(b / V)),
      Ue = Math.max(1, Math.ceil(T / V)),
      _e = Math.max(1, Math.min(Math.floor(A / oe), Math.floor(A / Ue)));
    return {
      minGX: i,
      minGY: _,
      width: b,
      height: T,
      downsample: V,
      sampledWidth: oe,
      sampledHeight: Ue,
      scale: _e
    }
  }
  async function br(i) {
    if ("createImageBitmap" in globalThis) return createImageBitmap(i);
    const _ = URL.createObjectURL(i);
    try {
      return await new Promise((x, I) => {
        const b = new Image;
        b.crossOrigin = "anonymous", b.onload = () => x(b), b.onerror = () => I(new Error("Failed to decode preview tile.")), b.src = _
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
    const x = ++it;
    Ae == null || Ae.abort();
    const I = new AbortController;
    Ae = I, m(Le, !0), re("loadPreviewBackground:start", {
      season: r.season,
      requestNonce: x,
      width: i.width,
      height: i.height,
      sampledWidth: i.sampledWidth,
      sampledHeight: i.sampledHeight
    });
    try {
      const b = ie(),
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
      for (let E = Z; E <= we; E += 1)
        for (let B = Ue; B <= _e; B += 1) {
          if (x !== it || I.signal.aborted) return;
          const le = B * n(u),
            me = E * n(u),
            de = Math.max(i.minGX, le),
            Me = Math.max(i.minGY, me),
            Oe = Math.min(V, le + n(u)),
            We = Math.min(oe, me + n(u));
          if (Oe <= de || We <= Me) continue;
          const Et = await fetch(`${Ws}/s${r.season}/tiles/${B}/${E}.png`, {
            signal: I.signal
          });
          if (!Et.ok) continue;
          const $e = await br(await Et.blob());
          if (x !== it || I.signal.aborted) {
            fr($e);
            return
          }
          const ut = Math.floor((de - i.minGX) / i.downsample),
            Dt = Math.floor((Me - i.minGY) / i.downsample),
            gt = Math.ceil((Oe - i.minGX) / i.downsample),
            Kt = Math.ceil((We - i.minGY) / i.downsample),
            _t = Math.max(1, gt - ut),
            Qt = Math.max(1, Kt - Dt);
          A.drawImage($e, de - le, Me - me, Oe - de, We - Me, ut, Dt, _t, Qt), fr($e)
        }
      if (x !== it || I.signal.aborted) return;
      ue = T, Ze = _, re("loadPreviewBackground:resolved", {
        season: r.season,
        requestNonce: x,
        width: i.width,
        height: i.height,
        sampledWidth: i.sampledWidth,
        sampledHeight: i.sampledHeight,
        durationMs: Q(b)
      }), j()
    } catch (b) {
      if (b instanceof DOMException && b.name === "AbortError" || x !== it) return;
      ue = void 0, Ze = null, re("loadPreviewBackground:error", {
        season: r.season,
        requestNonce: x,
        message: b.message
      })
    } finally {
      x === it && (Ae = void 0, m(Le, !1))
    }
  }

  function j() {
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
    const x = ye.getContext("2d"),
      I = n($).getContext("2d");
    if (!x || !I) return;
    if (ue && ue.width === _.sampledWidth && ue.height === _.sampledHeight) x.clearRect(0, 0, _.sampledWidth, _.sampledHeight), x.drawImage(ue, 0, 0);
    else {
      const A = x.createImageData(_.sampledWidth, _.sampledHeight),
        V = A.data;
      for (let oe = 0; oe < _.sampledHeight; oe += 1) {
        const Ue = oe * _.sampledWidth;
        for (let _e = 0; _e < _.sampledWidth; _e += 1) {
          const Z = (Ue + _e) * 4;
          (_e + oe) % 2 === 0 ? (V[Z] = 22, V[Z + 1] = 33, V[Z + 2] = 62) : (V[Z] = 26, V[Z + 1] = 26, V[Z + 2] = 46), V[Z + 3] = 255
        }
      }
      x.putImageData(A, 0, 0)
    }
    const b = x.getImageData(0, 0, _.sampledWidth, _.sampledHeight),
      T = b.data;
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
    x.putImageData(b, 0, 0), I.imageSmoothingEnabled = !1, I.clearRect(0, 0, n($).width, n($).height), I.drawImage(ye, 0, 0, _.sampledWidth, _.sampledHeight, 0, 0, n($).width, n($).height), re("renderPreviewCanvas:resolved", {
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
      x = Math.abs(_);
    return x < 45e3 ? De.format(Math.round(_ / 1e3), "second") : x < 45 * 6e4 ? De.format(Math.round(_ / 6e4), "minute") : x < 22 * 36e5 ? De.format(Math.round(_ / 36e5), "hour") : x < 26 * 864e5 ? De.format(Math.round(_ / 864e5), "day") : x < 320 * 864e5 ? De.format(Math.round(_ / 2592e6), "month") : De.format(Math.round(_ / 31536e6), "year")
  }

  function p(i) {
    return i ? `${i.width.toLocaleString()} x ${i.height.toLocaleString()}` : "0 x 0"
  }

  function q(i, _) {
    return `reverse-history-${i}-${_}`
  }

  function H() {
    const i = n(f);
    !n(ct) || !n(F) || i === null || Yt(n(F), Ke(n(h)[n(vt) - 1], i))
  }

  function L() {
    const i = n(f);
    !n(Vt) || !n(F) || i === null || Yt(n(F), Ke(n(h)[n(vt) + 1], i))
  }
  async function ne(i) {
    if (n(f) !== i && e()) {
      if (!n(F)) {
        await jt(i);
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
        i.preventDefault(), H();
        return
      }(i.key === "ArrowRight" || i.key === "ArrowDown") && (i.preventDefault(), L())
    }
  }
  async function se() {
    const i = n(f);
    if (!n(F) || n(D) === null || i === null) return;
    const _ = ie();
    re("applyReverse:start", {
      season: r.season,
      mode: i,
      sessionId: n(F),
      entryValue: n(D),
      selectedPixels: r.selectedPixelCount
    }), m(d, "applying");
    try {
      const x = ie(),
        I = await r.onApply(n(F), i, n(D)),
        b = Q(x);
      re("applyReverse:resolved", {
        season: r.season,
        mode: i,
        sessionId: n(F),
        entryValue: n(D),
        painted: I.painted,
        onApplyMs: b,
        durationMs: Q(_)
      }), pe.success(Qo({
        count: I.painted.toString()
      })), e(!1)
    } catch (x) {
      re("applyReverse:error", {
        season: r.season,
        mode: i,
        sessionId: n(F),
        entryValue: n(D),
        durationMs: Q(_),
        message: x.message
      }), pe.error(x.message), m(d, "gallery")
    }
  }
  Ds("keydown", Bs, W), Os(t, {
    useModalLayer: !0,
    modalBoxClass: "w-11/12 max-w-7xl max-h-[92vh] overflow-y-auto",
    get open() {
      return e()
    },
    set open(i) {
      e(i)
    },
    children: (i, _) => {
      var x = Rm(),
        I = ir(x),
        b = c(I),
        T = c(b),
        A = c(T);
      yn(A, {
        class: "size-5"
      });
      var V = v(A);
      l(T);
      var oe = v(T, 2),
        Ue = c(oe, !0);
      l(oe), l(b), l(I);
      var _e = v(I, 2),
        Z = c(_e),
        we = c(Z),
        E = c(we),
        B = c(E, !0);
      l(E);
      var le = v(E, 2),
        me = c(le, !0);
      l(le), l(we);
      var de = v(we, 2),
        Me = c(de),
        Oe = c(Me, !0);
      l(Me);
      var We = v(Me, 2),
        Et = c(We, !0);
      l(We), l(de), l(Z);
      var $e = v(Z, 2);
      {
        var ut = ae => {
            var ee = xn(),
              ce = c(ee),
              Pe = c(ce, !0);
            l(ce), l(ee), Y(Ce => y(Pe, Ce), [() => mn()]), k(ae, ee)
          },
          Dt = ae => {
            var ee = Qn(),
              ce = v(c(ee), 2),
              Pe = c(ce, !0);
            l(ce), l(ee), Y(Ce => y(Pe, Ce), [() => xc()]), k(ae, ee)
          },
          gt = ae => {
            var ee = Qn(),
              ce = v(c(ee), 2),
              Pe = c(ce, !0);
            l(ce), l(ee), Y(Ce => y(Pe, Ce), [() => ul()]), k(ae, ee)
          },
          Kt = ae => {
            var ee = xn(),
              ce = c(ee),
              Pe = c(ce, !0);
            l(ce), l(ee), Y(Ce => y(Pe, Ce), [() => bn()]), k(ae, ee)
          },
          _t = ae => {
            var ee = Bm(),
              ce = ir(ee),
              Pe = c(ce),
              Ce = c(Pe),
              dt = c(Ce),
              Bt = c(dt),
              Jt = c(Bt, !0);
            l(Bt);
            var $t = v(Bt, 2),
              er = c($t, !0);
            l($t), l(dt);
            var tr = v(dt, 2);
            {
              var rr = Be => {
                var qe = Am(),
                  Nt = c(qe, !0);
                l(qe), Y(pt => y(Nt, pt), [() => S_({
                  current: (n(vt) + 1).toString(),
                  total: n(h).length.toString()
                })]), k(Be, qe)
              };
              J(tr, Be => {
                n(Se) && Be(rr)
              })
            }
            l(Ce);
            var Wt = v(Ce, 2),
              X = c(Wt),
              g = c(X);
            wn(g, {
              class: "size-3.5"
            });
            var ze = v(g);
            l(X);
            var fe = v(X, 2),
              Te = c(fe);
            Tm(Te, {
              class: "size-3.5"
            });
            var C = v(Te);
            l(fe);
            var ge = v(fe, 2),
              xt = c(ge),
              xe = c(xt);
            Fn(xe, {
              class: "size-4"
            }), l(xt);
            var rt = v(xt, 2),
              bt = c(rt);
            Fn(bt, {
              class: "size-4 rotate-180"
            }), l(rt), l(ge), l(Wt);
            var et = v(Wt, 2),
              Ne = c(et);
            {
              var nt = Be => {
                var qe = Um();
                k(Be, qe)
              };
              J(Ne, Be => {
                n(mt) && Be(nt)
              })
            }
            var yt = v(Ne, 2);
            ss(yt, Be => m($, Be), () => n($)), l(et);
            var ot = v(et, 2),
              Fe = c(ot),
              te = c(Fe),
              be = c(te);
            l(te);
            var Ve = v(te, 2),
              tt = c(Ve);
            l(Ve), l(Fe);
            var Rt = v(Fe, 2),
              yr = c(Rt);
            Vs(yr, {
              class: "size-4 shrink-0"
            });
            var Dr = v(yr, 2),
              Br = c(Dr, !0);
            l(Dr), l(Rt), l(ot), l(Pe);
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
            Jr(Ft, 23, () => n(h), Be => Ke(Be, n(f)), (Be, qe, Nt) => {
              var pt = jm();
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
                bs = c(Sr);
              l(Sr);
              var ys = v(Sr, 2);
              {
                var ws = Ir => {
                    var dn = Cm();
                    k(Ir, dn)
                  },
                  ks = N(() => n(mt) && n(D) === Ke(n(qe), n(f)));
                J(ys, Ir => {
                  n(ks) && Ir(ws)
                })
              }
              l(Or), l(pt), Y((Ir, dn, qs, Ss, Is, Ms, Ps) => {
                je(pt, "id", Ir), vr = At(pt, 1, "reverse-gallery-item svelte-o0qsvj", null, vr, dn), y(Wr, `${qs??""} `), y(un, `#${n(Nt)+1}`), y(_n, `${Ss??""} · ${Is??""}`), y(bs, `${Ms??""}
										${Ps??""}`)
              }, [() => q(n(f), Ke(n(qe), n(f))), () => ({
                "reverse-gallery-item-active": n(D) === Ke(n(qe), n(f))
              }), () => Ie(n(qe).ts), () => Qe(n(qe).ts), () => Je(n(qe).ts), () => n(qe).pixelCount.toLocaleString(), () => On()]), he("click", pt, () => n(F) && Yt(n(F), Ke(n(qe), n(f)))), k(Be, pt)
            }), l(Ft);
            var Hr = v(Ft, 2);
            {
              var nr = Be => {
                var qe = Dm(),
                  Nt = c(qe);
                {
                  var pt = kt => {
                    var mr = Em();
                    k(kt, mr)
                  };
                  J(Nt, kt => {
                    n(P) && kt(pt)
                  })
                }
                var vr = v(Nt);
                l(qe), Y(kt => {
                  qe.disabled = n(P), y(vr, ` ${kt??""}`)
                }, [() => Zs()]), he("click", qe, _r), k(Be, qe)
              };
              J(Hr, Be => {
                n(z) && Be(nr)
              })
            }
            l(Rr), l(ce);
            var Lr = v(ce, 2),
              Tn = c(Lr),
              Xr = c(Tn),
              gs = c(Xr, !0);
            l(Xr);
            var Yr = v(Xr, 2),
              An = c(Yr);
            yn(An, {
              class: "size-4"
            });
            var xs = v(An);
            l(Yr), l(Tn), l(Lr), Y((Be, qe, Nt, pt, vr, kt, mr, qr, Wr, Nr, un, Gr, _n, Or, Sr) => {
              y(Jt, Be), y(er, qe), y(ze, ` ${Nt??""}`), y(C, ` ${pt??""}`), xt.disabled = !n(ct) || n(mt), rt.disabled = !n(Vt) || n(mt), At(yt, 1, `reverse-preview-canvas pixelated ${n(mt)?"opacity-40":""}`, "svelte-o0qsvj"), y(be, `${vr??""}
								${kt??""}`), y(tt, `${mr??""}
								${qr??""}`), y(Br, Wr), y(cn, Nr), y(ve, un), y(wt, `${Gr??""}${n(z)?"+":""}`), y(hr, _n), y(gs, Or), Yr.disabled = n(mt) || n(D) === null || !n(F), y(xs, ` ${Sr??""}`)
            }, [() => d_(), () => n(Se) ? `${O(n(Se).ts)} - ${Je(n(Se).ts)}` : "", () => n(Se) ? Je(n(Se).ts) : "", () => p(n(Ot)), () => n(Se) ? n(Se).eventCount.toLocaleString() : "0", () => kl(), () => n(Se) ? n(Se).pixelCount.toLocaleString() : "0", () => On(), () => So(), () => R_(), () => n(f) === "historical" ? Zn() : Vn(), () => n(h).length.toLocaleString(), () => ic(), () => as(), () => Ro()]), he("click", xt, H), he("click", rt, L), he("click", Xr, () => e(!1)), he("click", Yr, se), k(ae, ee)
          },
          Qt = ae => {
            var ee = xn(),
              ce = c(ee),
              Pe = c(ce, !0);
            l(ce), l(ee), Y(Ce => y(Pe, Ce), [() => mn()]), k(ae, ee)
          };
        J($e, ae => {
          n(d) === "idle" ? ae(ut) : n(d) === "loading" ? ae(Dt, 1) : n(d) === "applying" ? ae(gt, 2) : n(h).length === 0 ? ae(Kt, 3) : n(f) !== null ? ae(_t, 4) : ae(Qt, -1)
        })
      }
      l(_e), Y((ae, ee, ce, Pe, Ce, dt) => {
        y(V, ` ${ae??""}`), y(Ue, ee), y(B, ce), y(me, Pe), At(Me, 1, `tab transition-all ${n(f)==="depth"?"tab-active bg-primary! text-primary-content! border-primary/60! btn btn-primary btn-sm scale-[1.02] border! shadow-md!":"hover:brightness-105"}`, "svelte-o0qsvj"), Me.disabled = n(d) === "loading" || n(d) === "applying", y(Oe, Ce), At(We, 1, `tab transition-all ${n(f)==="historical"?"tab-active bg-primary! text-primary-content! border-primary/60! btn btn-primary btn-sm scale-[1.02] border! shadow-md!":"hover:brightness-105"}`, "svelte-o0qsvj"), We.disabled = n(d) === "loading" || n(d) === "applying", y(Et, dt)
      }, [() => os(), () => $u({
        count: r.selectedPixelCount.toString()
      }), () => Pu(), () => n(f) === "historical" ? Zn() : n(f) === "depth" ? Vn() : mn(), () => Uc(), () => nu()]), he("click", Me, () => ne("depth")), he("click", We, () => ne("historical")), k(i, x)
    },
    $$slots: {
      default: !0
    }
  }), ln()
}
In(["click"]);
var Hm = new Set(["$$slots", "$$events", "$$legacy"]),
  Lm = Cr('<svg><path d="M200-80q-50 0-85-35t-35-85q0-39 22.5-69.5T160-313v-334q-35-13-57.5-43.5T80-760q0-50 35-85t85-35q39 0 69.5 22.5T313-800h334q12-35 42.5-57.5T760-880q50 0 85 35t35 85q0 40-22.5 70.5T800-647v334q35 13 57.5 43.5T880-200q0 50-35 85t-85 35q-39 0-69.5-22.5T647-160H313q-13 35-43.5 57.5T200-80Zm0-640q17 0 28.5-11.5T240-760q0-17-11.5-28.5T200-800q-17 0-28.5 11.5T160-760q0 17 11.5 28.5T200-720Zm560 0q17 0 28.5-11.5T800-760q0-17-11.5-28.5T760-800q-17 0-28.5 11.5T720-760q0 17 11.5 28.5T760-720ZM313-240h334q9-26 28-45t45-28v-334q-26-9-45-28t-28-45H313q-9 26-28 45t-45 28v334q26 9 45 28t28 45Zm447 80q17 0 28.5-11.5T800-200q0-17-11.5-28.5T760-240q-17 0-28.5 11.5T720-200q0 17 11.5 28.5T760-160Zm-560 0q17 0 28.5-11.5T240-200q0-17-11.5-28.5T200-240q-17 0-28.5 11.5T160-200q0 17 11.5 28.5T200-160Zm0-600Zm560 0Zm0 560Zm-560 0Z"></path></svg>');

function Xm(t, r) {
  let e = Er(r, Hm);
  var s = Lm();
  jr(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), k(t, s)
}
var Ym = new Set(["$$slots", "$$events", "$$legacy"]),
  Wm = Cr('<svg><path fill="currentColor" d="M9 14c1.381 0 2.631-.56 3.536-1.465C13.44 11.631 14 10.381 14 9s-.56-2.631-1.464-3.535C11.631 4.56 10.381 4 9 4s-2.631.56-3.536 1.465C4.56 6.369 4 7.619 4 9s.56 2.631 1.464 3.535A5 5 0 0 0 9 14m0 7c3.518 0 6-1 6-2c0-2-2.354-4-6-4c-3.75 0-6 2-6 4c0 1 2.25 2 6 2m12-9h-2v-2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2"></path></svg>');

function Nm(t, r) {
  let e = Er(r, Ym);
  var s = Wm();
  jr(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...e
  })), k(t, s)
}
var Kr = R('<span class="loading loading-spinner loading-xs"></span>'),
  Gm = R('<div class="mt-3 flex justify-center"><span class="loading loading-spinner"></span></div>'),
  Jn = R('<div class="mt-3 flex justify-center"><p class="text-base-content/80 text-sm"> </p></div>'),
  Om = R('<span class="badge badge-primary badge-sm"> </span>'),
  Vm = R('<span class="badge badge-ghost badge-sm"> </span>'),
  $n = R("<option> </option>"),
  Zm = R('<label class="form-control"><span class="label pb-1 text-xs"> </span> <select class="select select-xs select-bordered"><option> </option><!></select></label>'),
  Km = R('<div class="border-base-300/60 border-t px-4 pt-3 pb-4"><div class="grid gap-2 md:grid-cols-2 xl:grid-cols-3"><!> <label class="form-control"><span class="label pb-1 text-xs"> </span> <select class="select select-xs select-bordered"><option> </option><option> </option><option> </option><option> </option></select></label> <label class="form-control"><span class="label pb-1 text-xs"> </span> <input class="input input-xs input-bordered" type="text"/></label> <label class="form-control"><span class="label pb-1 text-xs"> </span> <input class="input input-xs input-bordered" inputmode="numeric" pattern="[0-9]*"/></label> <label class="form-control"><span class="label pb-1 text-xs"> </span> <input class="input input-xs input-bordered" inputmode="numeric" pattern="[0-9]*"/></label> <label class="form-control"><span class="label pb-1 text-xs"> </span> <select class="select select-xs select-bordered"><option> </option><!></select></label></div></div>'),
  Qm = R('<button class="btn btn-xs btn-circle btn-soft btn-error tooltip tooltip-bottom"><!></button>'),
  Jm = R('<button class="btn btn-xs btn-circle btn-soft btn-error tooltip tooltip-bottom ml-0.5"><!></button>'),
  $m = R('<button class="btn btn-xs btn-circle btn-soft btn-warning tooltip tooltip-bottom ml-0.5"><!></button>'),
  eg = R('<button class="btn btn-xs btn-circle btn-soft btn-primary tooltip tooltip-bottom mr-1"><!></button>'),
  tg = R('<button class="btn btn-xs btn-circle btn-soft btn-warning tooltip tooltip-bottom mr-1"><!></button>'),
  rg = R('<div class="size-5"></div> <div class="text-base-content/80 ml-0.5"> </div>', 1),
  ng = R("<span> </span><span> </span>", 1),
  sg = R('<span class="badge badge-sm badge-error ml-0.5 border-0"> </span>'),
  es = R('<span class="tooltip"><!></span>'),
  ag = R('<!> <div class="ml-0.5 flex flex-wrap items-center gap-1"><!> <!> <!> <!> <!></div>', 1),
  ig = R('<span class="text-base-content/60 ml-1 text-xs"> </span>'),
  og = R('<span class="text-primary ml-1 text-xs"> </span>'),
  lg = R('<tr><th class="w-1"><input type="checkbox" class="checkbox-sm checkbox pointer-events-none"/></th><td class="flex items-center gap-1"><!></td><td class="text-center"> <!> <!></td></tr>'),
  cg = R('<div class="max-h-[27vh] overflow-x-hidden overflow-y-auto"><table class="table max-w-full"><thead><tr><th class="w-1"><input type="checkbox" class="checkbox-sm checkbox"/></th><th> <button class="btn btn-xs btn-circle btn-ghost tooltip tooltip-bottom ml-0.5"><!></button> <!> <!> <!></th><th class="text-center"><!> <!> </th></tr></thead><tbody></tbody></table></div>'),
  ug = R('<div class="mb-3"><div class="bg-base-200/60 border-base-300/60 rounded-xl border"><div class="flex flex-wrap items-start justify-between gap-2 px-4 py-3"><button type="button" class="flex min-w-0 flex-1 items-start justify-between gap-3 text-left"><div class="space-y-1"><div class="flex flex-wrap items-center gap-2"><span>▼</span> <span class="text-sm font-semibold"> </span> <!></div> <p class="text-base-content/70 text-xs"> </p></div></button> <div class="flex flex-wrap gap-1"><button class="btn btn-xs btn-soft"> </button> <button class="btn btn-xs btn-ghost"> </button></div></div> <!></div></div> <!>', 1),
  _g = R('<div class="pointer-events-none w-full select-none"><div class="rounded-t-box bg-base-100 border-base-300 sm:rounded-b-box pointer-events-auto w-full border-t sm:mb-3 sm:shadow-xl"><div class="p-3"><div role="button" tabindex="0" class="flex cursor-grab flex-wrap items-center justify-between gap-1 active:cursor-grabbing"><h2 class="flex items-center gap-1 pl-1 text-lg"><div class="bg-base-content/20 flex size-6 items-center justify-center rounded-full"><!></div> <span class="ml-0.5"> </span> <span class="text-base-content/80 ml-0.5 text-sm"> </span></h2> <div class="flex items-center gap-1"><!> <button><!></button> <button><!></button> <button><!></button> <button class="btn btn-circle btn-sm"><!></button></div></div> <div class="pb-3"><!></div></div></div></div>');

function dg(t, r) {
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

  function P() {
    return new DOMRect(0, 0, window.innerWidth, window.innerHeight)
  }

  function D(S, j, O) {
    return O >= j ? Math.min(O, Math.max(j, S)) : j
  }

  function K() {
    var Qe;
    if (!n(u)) return;
    const S = ((Qe = r.getDragBounds) == null ? void 0 : Qe.call(r)) ?? P(),
      j = n(u).getBoundingClientRect(),
      O = j.left - n(d).x,
      Ie = j.top - n(d).y;
    m(d, {
      x: D(n(d).x, S.left - O, S.right - O - j.width),
      y: D(n(d).y, S.top - Ie, S.bottom - Ie - j.height)
    }, !0)
  }

  function He() {
    var S, j, O, Ie;
    f && ((j = (S = f.handle).hasPointerCapture) != null && j.call(S, f.pointerId) && ((Ie = (O = f.handle).releasePointerCapture) == null || Ie.call(O, f.pointerId)), f = void 0, document.body.style.userSelect = h ?? "", h = void 0, K())
  }

  function Le(S) {
    var Qe, Je;
    if (f || S.pointerType === "mouse" && S.button !== 0) return;
    const j = S.target;
    if (j != null && j.closest("button, input, textarea, select, a") || !n(u)) return;
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
      bounds: ((Qe = r.getDragBounds) == null ? void 0 : Qe.call(r)) ?? P(),
      panelWidth: Ie.width,
      panelHeight: Ie.height
    }, h = document.body.style.userSelect, document.body.style.userSelect = "none", (Je = O.setPointerCapture) == null || Je.call(O, S.pointerId), S.preventDefault(), S.stopPropagation()
  }
  Cs(() => {
    const S = O => {
        !f || O.pointerId !== f.pointerId || m(d, {
          x: D(f.startPosX + O.clientX - f.startX, f.bounds.left - f.baseLeft, f.bounds.right - f.baseLeft - f.panelWidth),
          y: D(f.startPosY + O.clientY - f.startY, f.bounds.top - f.baseTop, f.bounds.bottom - f.baseTop - f.panelHeight)
        }, !0)
      },
      j = O => {
        (f == null ? void 0 : f.pointerId) === O.pointerId && He()
      };
    return window.addEventListener("pointermove", S), window.addEventListener("pointerup", j), window.addEventListener("pointercancel", j), window.addEventListener("resize", K), () => {
      window.removeEventListener("pointermove", S), window.removeEventListener("pointerup", j), window.removeEventListener("pointercancel", j), window.removeEventListener("resize", K), He()
    }
  });
  var $ = _g();
  let ye;
  var ue = c($),
    F = c(ue),
    Re = c(F);
  Dn(Re, "", {}, {
    "touch-action": "none"
  });
  var Ge = c(Re),
    Xe = c(Ge),
    it = c(Xe);
  Xm(it, {
    class: "size-4"
  }), l(Xe);
  var Ze = v(Xe, 2),
    Ae = c(Ze, !0);
  l(Ze);
  var It = v(Ze, 2),
    De = c(It);
  l(It), l(Ge);
  var ie = v(Ge, 2),
    Q = c(ie);
  is(Q, () => r.headerActions ?? ns);
  var Ye = v(Q, 2);
  let re;
  var cr = c(Ye);
  qm(cr, {
    class: "size-4"
  }), l(Ye);
  var Se = v(Ye, 2);
  let Ot;
  var vt = c(Se);
  Mm(vt, {
    class: "size-4"
  }), l(Se);
  var ct = v(Se, 2);
  let Vt;
  var mt = c(ct);
  {
    var Ke = S => {
        var j = Kr();
        k(S, j)
      },
      ur = S => {
        Nm(S, {
          class: "size-4"
        })
      };
    J(mt, S => {
      s() ? S(Ke) : S(ur, -1)
    })
  }
  l(ct);
  var jt = v(ct, 2),
    Zt = c(jt);
  ra(Zt, {
    class: "size-4"
  }), l(jt), l(ie), l(Re);
  var _r = v(Re, 2),
    Yt = c(_r);
  {
    var dr = S => {
        var j = Gm();
        k(S, j)
      },
      br = S => {
        var j = Jn(),
          O = c(j),
          Ie = c(O, !0);
        l(O), l(j), Y(() => y(Ie, r.emptyLabel)), k(S, j)
      },
      fr = S => {
        var j = ug(),
          O = ir(j),
          Ie = c(O),
          Qe = c(Ie),
          Je = c(Qe),
          p = c(Je),
          q = c(p),
          H = c(q),
          L = v(H, 2),
          ne = c(L, !0);
        l(L);
        var W = v(L, 2);
        {
          var se = E => {
              var B = Om(),
                le = c(B, !0);
              l(B), Y(() => y(le, r.activeFilterCount)), k(E, B)
            },
            i = E => {
              var B = Vm(),
                le = c(B, !0);
              l(B), Y(me => y(le, me), [() => Mi()]), k(E, B)
            };
          J(W, E => {
            r.hasActiveFilters ? E(se) : E(i, -1)
          })
        }
        l(q);
        var _ = v(q, 2),
          x = c(_);
        l(_), l(p), l(Je);
        var I = v(Je, 2),
          b = c(I),
          T = c(b, !0);
        l(b);
        var A = v(b, 2),
          V = c(A, !0);
        l(A), l(I), l(Qe);
        var oe = v(Qe, 2);
        {
          var Ue = E => {
            var B = Km(),
              le = c(B),
              me = c(le);
            {
              var de = xe => {
                  var rt = Zm(),
                    bt = c(rt),
                    et = c(bt, !0);
                  l(bt);
                  var Ne = v(bt, 2),
                    nt = c(Ne),
                    yt = c(nt, !0);
                  l(nt), nt.value = nt.__value = "";
                  var ot = v(nt);
                  Jr(ot, 16, () => z, Fe => Fe, (Fe, te) => {
                    var be = $n(),
                      Ve = c(be, !0);
                    l(be);
                    var tt = {};
                    Y(() => {
                      y(Ve, ma[te]), tt !== (tt = te) && (be.value = (be.__value = te) ?? "")
                    }), k(Fe, be)
                  }), l(Ne), l(rt), Y((Fe, te) => {
                    y(et, Fe), y(yt, te)
                  }, [() => va(), () => zp()]), fn(Ne, () => e().role, Fe => e().role = Fe), k(xe, rt)
                },
                Me = N(() => gr.hasPermission(xr.tools.selectPixel.seeRole));
              J(me, xe => {
                n(Me) && xe(de)
              })
            }
            var Oe = v(me, 2),
              We = c(Oe),
              Et = c(We, !0);
            l(We);
            var $e = v(We, 2),
              ut = c($e),
              Dt = c(ut, !0);
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
            var Bt = v(ce, 2),
              Jt = c(Bt),
              $t = c(Jt, !0);
            l(Jt);
            var er = v(Jt, 2);
            Pr(er), l(Bt);
            var tr = v(Bt, 2),
              rr = c(tr),
              Wt = c(rr, !0);
            l(rr);
            var X = v(rr, 2);
            Pr(X), l(tr);
            var g = v(tr, 2),
              ze = c(g),
              fe = c(ze, !0);
            l(ze);
            var Te = v(ze, 2),
              C = c(Te),
              ge = c(C, !0);
            l(C), C.value = C.__value = "";
            var xt = v(C);
            Jr(xt, 17, () => Ut.colors.entries(), ([xe]) => xe, (xe, rt) => {
              var bt = N(() => Rs(n(rt), 1));
              let et = () => n(bt)[0];
              var Ne = $n(),
                nt = c(Ne, !0);
              l(Ne);
              var yt = {};
              Y(ot => {
                y(nt, ot), yt !== (yt = et()) && (Ne.value = (Ne.__value = et()) ?? "")
              }, [() => {
                var ot, Fe;
                return ((Fe = (ot = aa)[et()]) == null ? void 0 : Fe.call(ot)) ?? `${Yn()} ${et()}`
              }]), k(xe, Ne)
            }), l(Te), l(g), l(le), l(B), Y((xe, rt, bt, et, Ne, nt, yt, ot, Fe, te, be, Ve, tt) => {
              y(Et, xe), y(Dt, rt), y(Kt, bt), y(Qt, et), y(ee, Ne), y(Ce, nt), je(dt, "placeholder", yt), y($t, ot), je(er, "placeholder", Fe), y(Wt, te), je(X, "placeholder", be), y(fe, Ve), y(ge, tt)
            }, [() => ia(), () => Kn(), () => oa(), () => hn(), () => Xn(), () => _a(), () => Sh(), () => Rh(), () => uv(), () => Qh(), () => kv(), () => Yn(), () => Kn()]), fn($e, () => e().punishment, xe => e().punishment = xe), pn(dt, () => e().alliance, xe => e().alliance = xe), pn(er, () => e().minUserId, xe => e().minUserId = xe), pn(X, () => e().maxUserId, xe => e().maxUserId = xe), fn(Te, () => e().colorIdx, xe => e().colorIdx = xe), Ln(3, B, () => Nn, () => ({
              duration: 100
            })), k(E, B)
          };
          J(oe, E => {
            n(o) && E(Ue)
          })
        }
        l(Ie), l(O);
        var _e = v(O, 2);
        {
          var Z = E => {
              var B = Jn(),
                le = c(B),
                me = c(le, !0);
              l(le), l(B), Y(de => y(me, de), [() => Ks()]), k(E, B)
            },
            we = E => {
              var B = cg(),
                le = c(B),
                me = c(le),
                de = c(me),
                Me = c(de),
                Oe = c(Me);
              Pr(Oe), l(Me);
              var We = v(Me),
                Et = c(We),
                $e = v(Et),
                ut = c($e);
              na(ut, {
                class: "size-3"
              }), l($e);
              var Dt = v($e, 2);
              {
                var gt = X => {
                    var g = Qm(),
                      ze = c(g);
                    wn(ze, {
                      class: "size-4"
                    }), l(g), Y(fe => {
                      je(g, "data-tip", fe), g.disabled = a().timeout
                    }, [() => hn()]), he("click", g, function(...fe) {
                      var Te;
                      (Te = r.ontimeout) == null || Te.apply(this, fe)
                    }), k(X, g)
                  },
                  Kt = N(() => gr.hasPermission(xr.tools.selectArea.timeout));
                J(Dt, X => {
                  n(Kt) && X(gt)
                })
              }
              var _t = v(Dt, 2);
              {
                var Qt = X => {
                    var g = Jm(),
                      ze = c(g);
                    Hn(ze, {
                      class: "size-4"
                    }), l(g), Y(fe => {
                      je(g, "data-tip", fe), g.disabled = a().ban
                    }, [() => da()]), he("click", g, function(...fe) {
                      var Te;
                      (Te = r.onban) == null || Te.apply(this, fe)
                    }), k(X, g)
                  },
                  ae = N(() => gr.hasPermission(xr.tools.selectArea.ban));
                J(_t, X => {
                  n(ae) && X(Qt)
                })
              }
              var ee = v(_t, 2);
              {
                var ce = X => {
                    var g = $m(),
                      ze = c(g);
                    {
                      var fe = C => {
                          var ge = Kr();
                          k(C, ge)
                        },
                        Te = C => {
                          ca(C, {
                            class: "size-4"
                          })
                        };
                      J(ze, C => {
                        a().phone ? C(fe) : C(Te, -1)
                      })
                    }
                    l(g), Y(C => {
                      je(g, "data-tip", C), g.disabled = a().phone || !r.hasSelection
                    }, [() => pa()]), he("click", g, function(...C) {
                      var ge;
                      (ge = r.onphone) == null || ge.apply(this, C)
                    }), k(X, g)
                  },
                  Pe = N(() => gr.hasPermission(xr.tools.selectArea.phoneVerification));
                J(ee, X => {
                  n(Pe) && X(ce)
                })
              }
              l(We);
              var Ce = v(We),
                dt = c(Ce);
              {
                var Bt = X => {
                    var g = eg(),
                      ze = c(g);
                    {
                      var fe = C => {
                          var ge = Kr();
                          k(C, ge)
                        },
                        Te = C => {
                          sa(C, {
                            class: "size-4"
                          })
                        };
                      J(ze, C => {
                        a().clear ? C(fe) : C(Te, -1)
                      })
                    }
                    l(g), Y(C => {
                      je(g, "data-tip", C), g.disabled = a().clear || !r.hasSelection
                    }, [() => fa()]), he("click", g, function(...C) {
                      var ge;
                      (ge = r.onclear) == null || ge.apply(this, C)
                    }), k(X, g)
                  },
                  Jt = N(() => gr.hasPermission(xr.tools.selectArea.clear));
                J(dt, X => {
                  n(Jt) && X(Bt)
                })
              }
              var $t = v(dt, 2);
              {
                var er = X => {
                    var g = tg(),
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
                    l(g), Y(C => {
                      je(g, "data-tip", C), g.disabled = a().reverse || !r.hasSelection
                    }, [() => os()]), he("click", g, function(...C) {
                      var ge;
                      (ge = r.onreverse) == null || ge.apply(this, C)
                    }), k(X, g)
                  },
                  tr = N(() => gr.hasPermission(xr.tools.selectArea.reverse));
                J($t, X => {
                  n(tr) && X(er)
                })
              }
              var rr = v($t);
              l(Ce), l(de), l(me);
              var Wt = v(me);
              Jr(Wt, 21, () => r.rows, X => X.id, (X, g) => {
                const ze = N(() => n(g).filteredPixelCount > 0 && n(g).selectedFilteredCount >= n(g).filteredPixelCount);
                var fe = lg();
                let Te;
                var C = c(fe),
                  ge = c(C);
                Pr(ge), l(C);
                var xt = v(C),
                  xe = c(xt);
                {
                  var rt = te => {
                      var be = rg(),
                        Ve = v(ir(be), 2),
                        tt = c(Ve, !0);
                      l(Ve), Y(Rt => y(tt, Rt), [() => en()]), k(te, be)
                    },
                    bt = te => {
                      var be = ag(),
                        Ve = ir(be);
                      {
                        let ve = N(() => n(g).picture ?? void 0),
                          ke = N(() => n(g).avatarSeed ?? void 0);
                        Js(Ve, {
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
                        ta(Rt, {
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
                            var hr = ng(),
                              Ft = ir(hr),
                              Hr = c(Ft, !0);
                            l(Ft);
                            var nr = v(Ft),
                              Lr = c(nr);
                            l(nr), Y(() => {
                              y(Hr, n(g).name), y(Lr, `#${n(g).id??""}`)
                            }), k(wt, hr)
                          },
                          $$slots: {
                            default: !0
                          }
                        })
                      }
                      var yr = v(Rt, 2);
                      {
                        var Dr = ve => {
                          {
                            let ke = N(() => Wn(n(g).allianceId)),
                              wt = N(() => Zr(n(g).allianceId)),
                              ft = N(() => Wn(n(g).allianceId)),
                              hr = N(() => Zr(n(g).allianceId));
                            ea(ve, {
                              get allianceId() {
                                return n(g).allianceId
                              },
                              get linkClass() {
                                return `badge badge-sm ml-0.5 border-0 ${n(ke)??""} ${n(wt)??""}`
                              },
                              get textClass() {
                                return `badge badge-sm ml-0.5 border-0 ${n(ft)??""} ${n(hr)??""}`
                              },
                              children: (Ft, Hr) => {
                                Fs();
                                var nr = Hs();
                                Y(() => y(nr, n(g).allianceName)), k(Ft, nr)
                              },
                              $$slots: {
                                default: !0
                              }
                            })
                          }
                        };
                        J(yr, ve => {
                          n(g).allianceId && ve(Dr)
                        })
                      }
                      var Br = v(yr, 2);
                      {
                        var Rr = ve => {
                          $s(ve, {
                            get role() {
                              return n(g).role
                            },
                            big: !1
                          })
                        };
                        J(Br, ve => {
                          n(g).role && n(g).role !== "user" && ve(Rr)
                        })
                      }
                      var pr = v(Br, 2);
                      {
                        var wr = ve => {
                          var ke = sg(),
                            wt = c(ke, !0);
                          l(ke), Y(ft => y(wt, ft), [() => Qs()]), k(ve, ke)
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
                            Hn(wt, {
                              class: "text-error size-4"
                            }), l(ke), Y(ft => je(ke, "data-tip", ft), [() => Xn()]), k(ve, ke)
                          },
                          Fr = ve => {
                            var ke = es(),
                              wt = c(ke);
                            wn(wt, {
                              class: "text-error size-4"
                            }), l(ke), Y(ft => je(ke, "data-tip", ft), [() => hn()]), k(ve, ke)
                          };
                        J(kr, ve => {
                          n(g).banned ? ve(cn) : n(g).timedOut && ve(Fr, 1)
                        })
                      }
                      l(tt), k(te, be)
                    };
                  J(xe, te => {
                    n(g).id === 0 ? te(rt) : te(bt, -1)
                  })
                }
                l(xt);
                var et = v(xt),
                  Ne = c(et),
                  nt = v(Ne);
                {
                  var yt = te => {
                    var be = ig(),
                      Ve = c(be);
                    l(be), Y((tt, Rt) => y(Ve, `${tt??""}
														${Rt??""}`), [() => pi(), () => n(g).totalPixelCount.toLocaleString(navigator.language)]), k(te, be)
                  };
                  J(nt, te => {
                    n(g).filteredPixelCount !== n(g).totalPixelCount && te(yt)
                  })
                }
                var ot = v(nt, 2);
                {
                  var Fe = te => {
                    var be = og(),
                      Ve = c(be);
                    l(be), Y(tt => y(Ve, `(${tt??""})`), [() => n(g).selectedFilteredCount.toLocaleString(navigator.language)]), k(te, be)
                  };
                  J(ot, te => {
                    n(g).selectedFilteredCount > 0 && !n(ze) && te(Fe)
                  })
                }
                l(et), l(fe), Y(te => {
                  Te = At(fe, 1, "hover:bg-base-300 cursor-pointer", null, Te, {
                    "bg-base-200": n(g).selectedFilteredCount > 0
                  }), Bn(ge, n(ze)), ge.indeterminate = !n(ze) && n(g).selectedFilteredCount > 0, y(Ne, `${te??""} `)
                }, [() => n(g).filteredPixelCount.toLocaleString(navigator.language)]), he("click", fe, () => r.ontogglerow(n(g).id)), k(X, fe)
              }), l(Wt), l(le), l(B), Y((X, g, ze) => {
                Bn(Oe, r.filteredSelectionState !== "none"), Oe.indeterminate = r.filteredSelectionState === "some", y(Et, `${X??""} `), je($e, "data-tip", g), y(rr, ` ${ze??""}`)
              }, [() => $r(), () => la(), () => ha()]), he("click", Oe, function(...X) {
                var g;
                (g = r.ontogglefiltered) == null || g.apply(this, X)
              }), he("click", $e, function(...X) {
                var g;
                (g = r.oncopy) == null || g.apply(this, X)
              }), k(E, B)
            };
          J(_e, E => {
            r.rows.length === 0 ? E(Z) : E(we, -1)
          })
        }
        Y((E, B, le, me, de, Me, Oe) => {
          At(H, 1, `text-base-content/60 mt-0.5 text-xs transition-transform duration-200 ${n(o)?"rotate-180":""}`), y(ne, E), y(x, `${B??""}
											${le??""} -
											${me??""}
											${de??""}`), b.disabled = r.rows.length === 0, y(T, Me), A.disabled = !r.hasActiveFilters, y(V, Oe)
        }, [() => Ya(), () => r.rows.length.toLocaleString(navigator.language), () => Ji(), () => r.filteredPixelCount.toLocaleString(navigator.language), () => Gn(), () => r.filteredSelectionState === "all" ? vp() : np(), () => _o()]), he("click", Je, () => m(o, !n(o))), he("click", b, function(...E) {
          var B;
          (B = r.ontogglefiltered) == null || B.apply(this, E)
        }), he("click", A, function(...E) {
          var B;
          (B = r.onresetfilters) == null || B.apply(this, E)
        }), k(S, j)
      };
    J(Yt, S => {
      r.loading ? S(dr) : r.totalRowCount === 0 ? S(br, 1) : S(fr, -1)
    })
  }
  l(_r), l(F), l(ue), l($), ss($, S => m(u, S), () => n(u)), Y((S, j, O, Ie, Qe, Je, p) => {
    ye = Dn($, "", ye, {
      transform: `translate3d(${n(d).x}px, ${n(d).y}px, 0)`,
      "will-change": "transform"
    }), y(Ae, S), y(De, `(${j??""}: ${O??""})`), re = At(Ye, 1, "btn btn-xs tooltip tooltip-bottom", null, re, {
      "btn-soft": r.activeTool !== "brush-circle",
      "btn-primary": r.activeTool === "brush-circle"
    }), je(Ye, "data-tip", Ie), je(Ye, "aria-pressed", r.activeTool === "brush-circle"), Ot = At(Se, 1, "btn btn-xs tooltip tooltip-bottom", null, Ot, {
      "btn-soft": r.activeTool !== "brush-square",
      "btn-primary": r.activeTool === "brush-square"
    }), je(Se, "data-tip", Qe), je(Se, "aria-pressed", r.activeTool === "brush-square"), Vt = At(ct, 1, "btn btn-xs tooltip tooltip-bottom", null, Vt, {
      "btn-soft": r.activeTool !== "user-picker",
      "btn-primary": r.activeTool === "user-picker"
    }), je(ct, "data-tip", Je), je(ct, "aria-pressed", r.activeTool === "user-picker"), je(jt, "aria-label", p)
  }, [() => eh(), () => Gn(), () => r.totalSelectedPixels.toLocaleString(navigator.language), () => Dv({
    size: r.brushDiameter
  }), () => Zv({
    size: r.brushDiameter
  }), () => Wf(), () => as()]), he("pointerdown", Re, Le), he("click", Ye, () => r.ontoolchange("brush-circle")), he("click", Se, () => r.ontoolchange("brush-square")), he("click", ct, () => r.ontoolchange("user-picker")), he("click", jt, function(...S) {
    var j;
    (j = r.onclose) == null || j.apply(this, S)
  }), Ln(3, ue, () => Nn, () => ({
    duration: 100
  })), k(t, $), ln()
}
In(["pointerdown", "click"]);

function fg() {
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

function pg(t, r) {
  return r.punishment === "" ? !0 : r.punishment === "ban" ? t.banned === !0 : r.punishment === "timeout" ? t.timedOut === !0 && t.banned !== !0 : t.banned !== !0 && t.timedOut !== !0
}

function hg(t, r) {
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
  return a !== void 0 && t.id > a ? !1 : pg(t, r)
}

function vg(t, r, e = lr(r)) {
  return hg(t, r) ? e === void 0 ? Tr(t.painted) : t.painted.colorCounts[e] ?? 0 : 0
}

function mg(t, r = Ut.colors.length) {
  return t.role !== "" || Mn(t.alliance) !== "" || t.minUserId.trim() !== "" || t.maxUserId.trim() !== "" || lr(t, r) !== void 0 || t.punishment !== ""
}

function gg(t, r = Ut.colors.length) {
  let e = 0;
  return t.role !== "" && (e += 1), Mn(t.alliance) !== "" && (e += 1), t.minUserId.trim() !== "" && (e += 1), t.maxUserId.trim() !== "" && (e += 1), lr(t, r) !== void 0 && (e += 1), t.punishment !== "" && (e += 1), e
}

function hx(t) {
  return t + .5
}

function xg(t, r, e, s, a, o) {
  const u = t + .5 - e,
    d = r + .5 - s;
  return o === "circle" ? u * u + d * d <= a * a : Math.abs(u) <= a && Math.abs(d) <= a
}
var Lt, zt;
class bg {
  constructor() {
    sr(this, "pixels", new Map);
    sr(this, "countByUser", new Map);
    qt(this, Lt, G(0));
    qt(this, zt, G(0))
  }
  get size() {
    return n(U(this, Lt))
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
    return this.pixels.has(r.key) ? !1 : (this.pixels.set(r.key, r), m(U(this, Lt), n(U(this, Lt)) + 1), this.countByUser.set(r.userId, (this.countByUser.get(r.userId) ?? 0) + 1), m(U(this, zt), n(U(this, zt)) + 1), !0)
  }
  removePixel(r) {
    const e = this.pixels.get(r);
    if (!e) return;
    this.pixels.delete(r), m(U(this, Lt), n(U(this, Lt)) - 1);
    const s = this.countByUser.get(e.userId) ?? 0;
    return s <= 1 ? this.countByUser.delete(e.userId) : this.countByUser.set(e.userId, s - 1), m(U(this, zt), n(U(this, zt)) + 1), e
  }
  clear() {
    this.pixels.clear(), this.countByUser.clear(), m(U(this, Lt), 0), m(U(this, zt), n(U(this, zt)) + 1)
  }
}
Lt = new WeakMap, zt = new WeakMap;
const yg = 1e4;

function Sn(t, r) {
  return `${t}:${r}`
}
var Ar, Ur, Xt;
class wg {
  constructor(r, e) {
    sr(this, "selectedUsers", new kn);
    sr(this, "selection", new bg);
    qt(this, Ar, G(on(fg())));
    sr(this, "pixels", new Map);
    sr(this, "pixelsByTile", new Map);
    qt(this, Ur, G([]));
    qt(this, Xt, G(0));
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
    return n(U(this, Xt)) + this.selection.changeToken
  }
  get totalSelectedPixels() {
    this.selection.changeToken;
    let r = this.selection.size;
    for (const e of this.selectedUsers.values()) r += Tr(e.painted);
    return r
  }
  get filteredPixelCountByUser() {
    n(U(this, Xt));
    const r = lr(this.filters),
      e = new Map;
    for (const s of this.users) {
      const a = vg(s, this.filters, r);
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
    return mg(this.filters)
  }
  get activeFilterCount() {
    return gg(this.filters)
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
    m(U(this, Xt), n(U(this, Xt)) + 1)
  }
  clear() {
    this.clearSelection(), this.users = [], this.pixels.clear(), this.pixelsByTile.clear(), this.resetFilters(), m(U(this, Xt), n(U(this, Xt)) + 1)
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
      for (const P of u) this.selectedUsers.has(P.userId) || this.selection.has(P.key) || this.selection.addPixel(P) && (d.push(P), f.set(P.userId, (f.get(P.userId) ?? 0) + 1));
    else
      for (const P of u) this.selectedUsers.has(P.userId) && this.expandSelectedUser(P.userId), this.selection.removePixel(P.key) && d.push(P);
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
      for (let P = o; P <= u; P += 1) {
        const D = this.pixelsByTile.get(`${P}:${z}`);
        if (D)
          for (const K of D) xg(K.x, K.y, r, e, s, a) && h.push(K)
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
      if (r.length < yg) {
        this.renderer.addPixels(r);
        return
      }
      this.renderer.addRectangles(kg(r))
    }
  }
}
Ar = new WeakMap, Ur = new WeakMap, Xt = new WeakMap;

function kg(t) {
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
const qg = 3e4,
  Sg = 1e6;

function Ig(t, r, e, s, a) {
  var He;
  const o = ((He = t[0]) == null ? void 0 : He.durationUs) ?? Math.max(1, Math.round(83333.33333333333)),
    u = Gg(t),
    d = Ng(t),
    f = Mg();
  let h = ts(t, e, s, o, u, a, 0);
  const P = f.byteLength + h.byteLength + 8;
  h = ts(t, e, s, o, u, a, P);
  const D = Wg("mdat", d),
    K = [f, h, D];
  for (const Le of t) K.push(Le.data);
  return new Blob(K, {
    type: r.mimeType
  })
}

function Mg() {
  return Ct("ftyp", [ar("isom"), w(512), ar("isom"), ar("iso2"), ar("avc1"), ar("mp41")])
}

function ts(t, r, e, s, a, o, u) {
  return Ct("moov", [Pg(a), zg(t, r, e, s, a, o, u)])
}

function Pg(t) {
  return lt("mvhd", 0, 0, [w(0), w(0), w(1e6), w(t), w(65536), Ee(256), Ee(0), w(0), w(0), ls(), w(0), w(0), w(0), w(0), w(0), w(0), w(2)])
}

function zg(t, r, e, s, a, o, u) {
  return Ct("trak", [Tg(r, e, a), Ag(t, r, e, s, a, o, u)])
}

function Tg(t, r, e) {
  return lt("tkhd", 0, 7, [w(0), w(0), w(1), w(0), w(e), w(0), w(0), Ee(0), Ee(0), Ee(0), Ee(0), ls(), w(t << 16), w(r << 16)])
}

function Ag(t, r, e, s, a, o, u) {
  return Ct("mdia", [Ug(a), Cg(), jg(t, r, e, s, o, u)])
}

function Ug(t) {
  return lt("mdhd", 0, 0, [w(0), w(0), w(1e6), w(t), Ee(0), Ee(0)])
}

function Cg() {
  return lt("hdlr", 0, 0, [w(0), ar("vide"), w(0), w(0), w(0), ar("VideoHandler\0")])
}

function jg(t, r, e, s, a, o) {
  return Ct("minf", [lt("vmhd", 0, 1, [Ee(0), Ee(0), Ee(0), Ee(0)]), Eg(), Dg(t, r, e, s, a, o)])
}

function Eg() {
  const t = lt("url ", 0, 1, []),
    r = lt("dref", 0, 0, [w(1), t]);
  return Ct("dinf", [r])
}

function Dg(t, r, e, s, a, o) {
  return Ct("stbl", [Bg(r, e, a), Fg(t.length, s), Hg(t.length), Lg(t), Xg(o), Yg(t)])
}

function Bg(t, r, e) {
  return lt("stsd", 0, 0, [w(1), Rg(t, r, e)])
}

function Rg(t, r, e) {
  const s = new Uint8Array(32);
  return Ct("avc1", [new Uint8Array(6), Ee(1), Ee(0), Ee(0), w(0), w(0), w(0), Ee(t), Ee(r), w(4718592), w(4718592), w(0), Ee(1), s, Ee(24), Ee(65535), Ct("avcC", [e])])
}

function Fg(t, r) {
  return lt("stts", 0, 0, [w(1), w(t), w(r)])
}

function Hg(t) {
  return lt("stsc", 0, 0, [w(1), w(1), w(t), w(1)])
}

function Lg(t) {
  const r = new Array(t.length);
  for (let e = 0; e < t.length; e += 1) r[e] = w(t[e].data.byteLength);
  return lt("stsz", 0, 0, [w(0), w(t.length), ...r])
}

function Xg(t) {
  if (t > 4294967295) throw new Error(at());
  return lt("stco", 0, 0, [w(1), w(t)])
}

function Yg(t) {
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

function Wg(t, r) {
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

function Ee(t) {
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

function Ng(t) {
  let r = 0;
  for (const e of t) r += e.data.byteLength;
  return r
}

function Gg(t) {
  const r = t[t.length - 1];
  return r ? r.timestampUs + r.durationUs : 0
}

function Og(t) {
  const r = ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t),
    e = new Uint8Array(r.byteLength);
  return e.set(r), e
}

function Vg(t, r, e, s, a) {
  const o = r.webmCodecId;
  if (!o) throw new Error(at());
  const u = ht([26, 69, 223, 163], [...st([66, 134], 1), ...st([66, 247], 1), ...st([66, 242], 4), ...st([66, 243], 8), ...nn([66, 130], "webm"), ...st([66, 135], 4), ...st([66, 133], 2)]),
    d = [...Zg(t), ...Kg(o, e, s, a), ...Qg(t)],
    f = ht([24, 83, 128, 103], d),
    h = [];
  for (const z of u) h.push(z);
  for (const z of f) h.push(z);
  return new Blob(h, {
    type: r.mimeType
  })
}

function Zg(t) {
  const r = t[t.length - 1],
    e = r ? (r.timestampUs + r.durationUs) / 1e3 : 0;
  return ht([21, 73, 169, 102], [...st([42, 215, 177], Sg), ...$g([68, 137], e), ...nn([77, 128], "wplace"), ...nn([87, 65], "wplace")])
}

function Kg(t, r, e, s) {
  const a = ht([174], [...st([215], 1), ...st([115, 197], 1), ...st([131], 1), ...nn([134], t), ...st([35, 227, 131], Math.round(1e9 / s)), ...ht([224], [...st([176], r), ...st([186], e)])]);
  return ht([22, 84, 174, 107], a)
}

function Qg(t) {
  const r = [];
  let e = -1,
    s = [];
  for (const a of t) {
    const o = Math.round(a.timestampUs / 1e3);
    (e < 0 || o - e > qg) && (s.length > 0 && r.push(...ht([31, 67, 182, 117], s)), e = o, s = st([231], e)), s.push(...Jg(a, e))
  }
  return s.length > 0 && r.push(...ht([31, 67, 182, 117], s)), r
}

function Jg(t, r) {
  const s = Math.round(t.timestampUs / 1e3) - r;
  if (s < -32768 || s > 32767) throw new Error(at());
  const a = new Uint8Array(4);
  return a[0] = 129, a[1] = s >> 8 & 255, a[2] = s & 255, a[3] = t.keyFrame ? 128 : 0, ht([163], [a, t.data])
}

function ht(t, r) {
  const e = cs(r);
  return [new Uint8Array(t), t0(e), ...r]
}

function st(t, r) {
  return ht(t, [e0(r)])
}

function $g(t, r) {
  const e = new Uint8Array(8);
  return new DataView(e.buffer).setFloat64(0, r, !1), ht(t, [e])
}

function nn(t, r) {
  return ht(t, [new TextEncoder().encode(r)])
}

function e0(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error(at());
  let r = 1;
  for (; r < 8 && t >= 2 ** (r * 8);) r += 1;
  const e = new Uint8Array(r);
  let s = t;
  for (let a = r - 1; a >= 0; a -= 1) e[a] = s & 255, s = Math.floor(s / 256);
  return e
}

function t0(t) {
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
const r0 = 4096,
  n0 = .15,
  s0 = 5e5,
  a0 = 25e6,
  i0 = 8,
  o0 = /^#[0-9a-fA-F]{6}$/;

function vx(t) {
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
    minGlobalX: P,
    minGlobalY: D,
    downsample: K
  } = r, He = Ut.colors.length;
  let Le = d,
    $ = f,
    ye = -1,
    ue = -1,
    F = s.dataOffset;
  for (let Re = 0; Re < s.changeCount; Re += 1) {
    const Ge = e.getInt32(F, !0),
      Xe = e.getInt32(F + 4, !0),
      it = e.getUint16(F + 8, !0),
      Ze = e.getUint16(F + 10, !0),
      Ae = e.getUint8(F + 12);
    F += 13;
    const It = Ge * o + it - P,
      De = Xe * o + Ze - D;
    if (It < 0 || De < 0 || It >= h || De >= z) continue;
    const ie = Math.floor(It / K),
      Q = Math.floor(De / K);
    if (ie < 0 || Q < 0 || ie >= d || Q >= f) continue;
    ie < Le && (Le = ie), Q < $ && ($ = Q), ie > ye && (ye = ie), Q > ue && (ue = Q);
    const Ye = (Q * d + ie) * 4;
    if (Ae === 0) {
      l0(u, Ye, ie, Q, a);
      continue
    }
    const re = Ut.colors[Math.min(Ae, He - 1)];
    u[Ye] = re.rgb[0], u[Ye + 1] = re.rgb[1], u[Ye + 2] = re.rgb[2], u[Ye + 3] = 255
  }
  if (!(ye < Le || ue < $)) return {
    minX: Le,
    minY: $,
    maxX: ye,
    maxY: ue
  }
}

function l0(t, r, e, s, a) {
  if (a) {
    const o = (e + s) % 2 === 0 ? 232 : 218;
    t[r] = o, t[r + 1] = o, t[r + 2] = o, t[r + 3] = 255;
    return
  }
  t[r] = 0, t[r + 1] = 0, t[r + 2] = 0, t[r + 3] = 0
}

function c0(t, r, e) {
  for (let s = 0; s < e; s += 1) {
    const a = s * r;
    for (let o = 0; o < r; o += 1) {
      const u = (a + o) * 4,
        d = (o + s) % 2 === 0 ? 232 : 218;
      t[u] = d, t[u + 1] = d, t[u + 2] = d, t[u + 3] = 255
    }
  }
}

function mx(t) {
  const r = t.maxGlobalX - t.minGlobalX + 1,
    e = t.maxGlobalY - t.minGlobalY + 1;
  if (r <= 0 || e <= 0) return;
  const s = r0,
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
  const s = Math.round(t * r * e * n0);
  return u0(s, s0, a0)
}

function u0(t, r, e) {
  return Number.isFinite(t) ? Math.min(e, Math.max(r, t)) : r
}

function gx(t) {
  if (typeof t != "string") return null;
  const r = t.trim();
  return o0.test(r) ? r.toUpperCase() : null
}

function xx() {
  if (typeof MediaRecorder > "u") return;
  const t = ["video/webm;codecs=vp8", "video/webm;codecs=vp9", "video/webm"];
  for (const r of t)
    if (MediaRecorder.isTypeSupported(r)) return r
}
async function bx(t, r, e) {
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
  o ? c0(r.data, e.sampledWidth, e.sampledHeight) : r.data.fill(0);
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
    P = Math.max(4, Math.round(d * .4)),
    D = s.outputHeight - h - P;
  e.fillStyle = "rgba(15, 23, 42, 0.78)", e.fillRect(P, D, z, h), e.fillStyle = "#f8fafc", e.fillText(o, P + d, s.outputHeight - P)
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
async function yx(t, r) {
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
        const P = (K = z == null ? void 0 : z.decoderConfig) == null ? void 0 : K.description;
        !o && P && (o = Og(P));
        const D = new Uint8Array(h.byteLength);
        h.copyTo(D), a.push({
          data: D,
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
        }), z.close(); d.encodeQueueSize > i0;)
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
      blob: Ig(a, r, t.renderFrame.outputWidth, t.renderFrame.outputHeight, o),
      fileExtension: "mp4"
    }
  }
  if (!r.webmCodecId) throw new Error(at());
  return {
    blob: Vg(a, r, t.renderFrame.outputWidth, t.renderFrame.outputHeight, t.options.fps),
    fileExtension: "webm"
  }
}
async function wx(t, r) {
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
      }), o.ondataavailable = P => {
        P.data.size > 0 && f.push(P.data)
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

function _0(t, r) {
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

function d0(t, r) {
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

function f0(t, r, e, s, a = 64) {
  return t.map(o => {
    const u = d0(r.get(vs(o)) ?? [], e),
      d = (u == null ? void 0 : u.userId) ?? 0;
    return ms(o, (u == null ? void 0 : u.newColor) ?? 0, d, s(d), a)
  })
}

function p0(t, r, e, s = 64) {
  const a = new Map(r.map(o => [`${o.tileX*s+o.pixelX}:${o.tileY*s+o.pixelY}`, o]));
  return t.map(o => {
    const u = a.get(vs(o));
    if (u) return u;
    const d = o.userId ?? 0;
    return ms(o, o.color, d, e(d), s)
  })
}
var h0 = R('<span class="loading loading-spinner loading-xs"></span>'),
  v0 = R('<button class="btn btn-xs tooltip tooltip-bottom btn-soft"><!></button>'),
  m0 = R("<!> <!> <!>", 1);

function kx(t, r) {
  an(r, !0);
  const e = p => {
      var q = v0(),
        H = c(q);
      {
        var L = W => {
            var se = h0();
            k(W, se)
          },
          ne = W => {
            ua(W, {
              class: "size-4"
            })
          };
        J(H, W => {
          n(z) ? W(L) : W(ne, -1)
        })
      }
      l(q), Y(W => {
        je(q, "data-tip", W), q.disabled = n(z) || n(a)
      }, [() => Ta()]), he("click", q, Ot), k(p, q)
    },
    s = new wg(64, {
      clear: () => r.selectionRenderer.clear(),
      addPixels: p => r.selectionRenderer.addPixels(p),
      removePixels: p => r.selectionRenderer.removePixels(p),
      addRectangles: p => r.selectionRenderer.addRectangles(p),
      addPaintedCoordinates: (p, q) => {
        var H, L;
        return (L = (H = r.selectionRenderer).addPaintedCoordinates) == null ? void 0 : L.call(H, p, q)
      }
    });
  let a = G(!0),
    o = G(0),
    u = G(void 0),
    d = "",
    f = 0,
    h = G(!1),
    z = G(!1),
    P = G(!1),
    D = G("timeout"),
    K = G(on([])),
    He = G(void 0),
    Le = G(!1),
    $ = G(void 0),
    ye = new Map,
    ue = G([]);
  const F = N(() => r.brushRadius * 2 + 1),
    Re = N(() => r.anchor ?? n(u)),
    Ge = p => `${p.x}:${p.y}`,
    Xe = N(() => new Map(s.users.map(p => [p.id, p]))),
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
    p !== d && (d = p, De(Ls(() => r.eventHwm)))
  }), js(() => {
    f += 1, s.clear()
  });
  async function De(p = r.eventHwm) {
    var H;
    const q = ++f;
    m(a, !0), s.clear();
    try {
      const L = await Tt.getAdminAllianceHqSelectArea(r.allianceId, r.area, p);
      if (q !== f) return;
      const ne = new Map,
        W = [];
      let se = 0;
      for (const b of L.chunks) {
        const T = b.bounds.maxX - b.bounds.minX + 1,
          A = b.bounds.maxY - b.bounds.minY + 1;
        for (let V = 0; V < A; V += 1)
          for (let oe = 0; oe < T; oe += 1) {
            const Ue = V * T + oe,
              _e = b.bounds.minX + oe,
              Z = b.bounds.minY + V,
              we = b.paintedBy[Ue],
              E = b.colors[Ue],
              B = Number(b.eventIds[Ue]),
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
            if (ne.has(we) || ne.set(we, de), de.tileXs.push(le), de.tileYs.push(me), de.pixelXs.push(_e - le * 64), de.pixelYs.push(Z - me * 64), de.colorIdxs.push(E), de.colorCounts[E] += 1, (H = de.eventIds) == null || H.push(B), W.push({
                key: Sn(_e, Z),
                userId: we,
                x: _e,
                y: Z,
                tile: [le, me],
                pixel: [_e - le * 64, Z - me * 64],
                colorIdx: E,
                eventId: B || void 0
              }), se += 1, se % 5e4 === 0 && (await new Promise(Me => setTimeout(Me, 0)), q !== f)) return
          }
      }
      const i = [...ne.keys()].filter(b => b > 0),
        _ = i.length > 0 ? (await Tt.getMultipleUsersInfoById(i)).users : [];
      if (q !== f) return;
      const x = new Map(_.map(b => [b.id, b])),
        I = [...ne.entries()].map(([b, T]) => ({
          ...x.get(b) ?? {
            id: b,
            name: b === 0 ? en() : $r(),
            role: "user",
            deleted: b !== 0
          },
          painted: T
        }));
      I.sort((b, T) => b.id === 0 ? 1 : T.id === 0 ? -1 : T.painted.tileXs.length - b.painted.tileXs.length), s.load(I, W), m(o, L.eventHwm, !0), m(u, L.anchor, !0)
    } catch (L) {
      q === f && pe.error(L.message)
    } finally {
      q === f && m(a, !1)
    }
  }

  function ie(p, q, H) {
    if (n(a)) {
      pe.info(vn());
      return
    }
    const L = s.pixelAt(p, q);
    if (!(L != null && L.userId)) {
      pe.info(en());
      return
    }
    const ne = s.findUser(L.userId);
    (H ? s.deselectUser(L.userId) : s.selectUser(L.userId)) && (Vr.plop.play(), pe.success(H ? ym({
      name: (ne == null ? void 0 : ne.name) ?? $r()
    }) : lm({
      name: (ne == null ? void 0 : ne.name) ?? $r()
    })))
  }

  function Q(p, q, H, L, ne) {
    if (n(a)) {
      pe.info(vn());
      return
    }
    s.applyBrush(p + .5, q + .5, H, L + .5, ne ? "remove" : "add") && Vr.plop.play()
  }

  function Ye() {
    return De()
  }

  function re() {
    return n(Ae).map(p => n(Xe).get(p)).filter(p => !!p).map(p => ({
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
    return Xs(`/staff/dashboard/alliances/${r.allianceId}/headquarters/wayback?${p.toString()}`)
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
        _0(p, `selected-area-${r.area.maxX-r.area.minX+1}x${r.area.maxY-r.area.minY+1}.png`), pe.success(gf())
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
    m(K, q, !0), m(D, p, !0), m(He, Se(), !0), m(P, !0)
  }
  async function ct() {
    if (n(Ae).length === 0) {
      pe.info(gn());
      return
    }
    m(h, !0);
    try {
      const p = await Tt.postSelectAreaPhoneVerification(n(Ae));
      pe.success(Nd({
        count: p.affected
      })), await De()
    } catch (p) {
      pe.error(p.message)
    } finally {
      m(h, !1)
    }
  }
  async function Vt() {
    const p = n(Ze).filter(q => q.eventId && q.color !== 0);
    if (p.length === 0) {
      pe.info(bn());
      return
    }
    m(h, !0);
    try {
      const q = await Tt.reverseAdminAllianceHqPixels(r.allianceId, p.map(H => ({
        x: H.x,
        y: H.y,
        eventId: H.eventId
      })), "HQ Select Area clear", !0);
      pe.success(sf({
        count: q.reversed
      })), s.clearSelected(), await r.onchanged(), await De()
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
    let H, L = !0;
    for (; L;) {
      const W = await Tt.getAllianceHqWaybackEvents(r.allianceId, {
        limit: Gs.tools.wayback.hqLimit,
        before: H,
        area: r.area
      });
      if (q.push(...W.events.filter(se => se.id <= n(o) && p.has(`${se.x}:${se.y}`))), L = W.hasNext, H = (ne = W.events.at(-1)) == null ? void 0 : ne.id, L && !H) throw new Error(Rn())
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
        const x = [...ye.values()].filter(I => I.length >= _);
        x.length !== 0 && i.push({
          depth: _,
          ts: Math.max(...x.map(I => I[I.length - _].ts)),
          eventCount: x.length,
          pixelCount: x.length
        })
      }
      return {
        timestamps: i,
        hasMore: se + i.length <= W
      }
    }
    const H = new Map;
    for (const [W, se] of ye)
      for (const i of se) {
        if (p.beforeTimestamp && i.ts >= p.beforeTimestamp) continue;
        const _ = H.get(i.ts) ?? new Set;
        _.add(W), H.set(i.ts, _)
      }
    const L = [...H.entries()].sort((W, se) => se[0] - W[0]);
    return {
      timestamps: L.slice(0, 100).map(([W, se], i) => ({
        depth: i + 1,
        ts: W,
        eventCount: se.size,
        pixelCount: se.size
      })),
      hasMore: L.length > 100
    }
  }

  function ur(p) {
    var q;
    return ((q = n(Xe).get(p)) == null ? void 0 : q.allianceId) ?? 0
  }

  function jt(p) {
    return f0(n(ue), ye, p, ur)
  }

  function Zt(p) {
    return p0(n(it), jt(p), ur)
  }
  async function _r() {
    if (m(ue, n(Ze).filter(p => !!p.eventId)), n(ue).length === 0) {
      pe.info(bn());
      return
    }
    m(h, !0);
    try {
      await mt(), m($, {
        getTimeline: async p => Ke(p),
        getPreview: async p => ({
          pixels: Zt(p)
        })
      }, !0), m(Le, !0)
    } catch (p) {
      pe.error(p.message)
    } finally {
      m(h, !1)
    }
  }
  async function Yt(p, q, H) {
    const L = q === "historical" ? {
        mode: q,
        timestamp: H
      } : {
        mode: q,
        snapshotDepth: H
      },
      ne = new Map(jt(L).map(i => [`${i.tileX*64+i.pixelX}:${i.tileY*64+i.pixelY}`, i.color])),
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
    return s.clearSelected(), await r.onchanged(), await De(), {
      painted: se.reversed
    }
  }

  function dr() {
    if (n(Ae).length === 0) {
      pe.info(gn());
      return
    }
    navigator.clipboard.writeText(n(Ae).join(", ")), pe.success(Af())
  }

  function br(p) {
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
      reload: Ye
    },
    S = m0(),
    j = ir(S);
  {
    let p = N(() => en()),
      q = N(() => ({
        timeout: n(h),
        ban: n(h),
        phone: n(h),
        clear: n(h),
        reverse: n(h)
      })),
      H = N(() => n(Ze).length > 0);
    dg(j, {
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
        return n(H)
      },
      get headerActions() {
        return e
      },
      ontoolchange: br,
      ontogglefiltered: () => {
        s.toggleAllFiltered() && Vr.plop.play()
      },
      onresetfilters: () => s.resetFilters(),
      ontogglerow: L => {
        s.toggleFilteredUser(L) && Vr.plop.play()
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
  var O = v(j, 2);
  {
    var Ie = p => {
      Fm(p, {
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
        onApply: Yt,
        get open() {
          return n(Le)
        },
        set open(q) {
          m(Le, q, !0)
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
        Ys(p, {
          get image() {
            return n(He)
          },
          get targets() {
            return n(K)
          },
          get latLon() {
            return n(q)
          },
          zoom: 0,
          get action() {
            return n(D)
          },
          origin: "select-area",
          onsuccess: () => void De(),
          get open() {
            return n(P)
          },
          set open(H) {
            m(P, H, !0)
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
var g0 = R("<div><!></div>");

function qx(t, r) {
  an(r, !0);
  var e = g0(),
    s = c(e);
  is(s, () => r.children ?? ns), l(e), Y(() => At(e, 1, `bg-base-100/60 border-base-content/20 pointer-events-none absolute -top-15 left-1/2 line-clamp-1 flex w-max -translate-x-1/2 items-center gap-1 rounded-full border-2 px-3 py-1.5 select-none ${r.class??""}`)), k(t, e), ln()
}
export {
  Xm as A, wx as B, qm as C, _0 as D, qx as I, Fm as R, kn as S, dx as a, kx as b, px as c, Mm as d, Ta as e, Ji as f, wg as g, Tr as h, u0 as i, gx as j, ym as k, lm as l, hx as m, _x as n, Sn as o, Gn as p, dg as q, _o as r, fx as s, en as t, at as u, mx as v, bx as w, xx as x, vx as y, yx as z
};