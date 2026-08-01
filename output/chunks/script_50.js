var zs = Object.defineProperty;
var As = Object.getPrototypeOf;
var Ts = Reflect.get;
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
var En = (t, r, e) => Ts(As(t), e, r);
import {
  g as P
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  o as Cs,
  a as Es
} from "./CRTPBFbF.js";
import {
  e as G,
  bN as jn,
  al as js,
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
  b as Er,
  a as Tt,
  s as Ee,
  e as Dn,
  r as Pr,
  f as fn,
  h as Bn
} from "./M4i-R8Gk.js";
import {
  g as Xs
} from "./BDIDhHih.js";
import {
  A as Vr
} from "./Cj4ixEgf.js";
import {
  R as Ys
} from "./CBY4swBV.js";
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
  r as jr,
  p as or
} from "./DXFW01RN.js";
import {
  h as Ws
} from "./CftFOTTa.js";
import {
  d as Ut,
  V as bn,
  b as At,
  t as pe,
  u as gr,
  X as Ns,
  f as Rn,
  Y as Gs
} from "./Dz-B39tt.js";
import {
  D as Os
} from "./DG57bZmM.js";
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
} from "./Bl7HlzMW.js";
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
} from "./CgbxILkl.js";
import {
  S as ta
} from "./ID_2zfsl.js";
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
  p as ia,
  n as oa,
  M as la,
  D as ca
} from "./BcIYDXTX.js";
import {
  a as ua
} from "./B0JoJohi.js";
import {
  b as _a
} from "./CtsjoaOH.js";
import {
  c as da
} from "./jEDRT1k8.js";
import {
  c as Yn,
  a as fa
} from "./BORKHbnj.js";
import {
  f as pa,
  r as ha,
  o as va,
  a as ma
} from "./4jZa2FwG.js";
import {
  p as ga
} from "./DoQwV0WM.js";
import {
  p as xa
} from "./WRaI8Fie.js";
import {
  r as ba
} from "./C5ukCcxH.js";
import {
  t as hn
} from "./BJMWNMzA.js";
import {
  P as xr
} from "./DrQSeETC.js";
import {
  R as ya
} from "./TTfhDrzz.js";
import {
  g as Zr,
  a as Wn
} from "./D7BI_U1o.js";
import {
  s as Nn
} from "./BI5KFv7B.js";
import {
  l as vn
} from "./Cp-hTSeP.js";
const wa = () => "Download",
  ka = () => "Download",
  qa = () => "下载",
  Sa = () => "Download",
  Ia = () => "Descargar",
  Ma = () => "Télécharger",
  Pa = () => "Download",
  za = () => "ダウンロード",
  Aa = () => "Pobierz",
  Ta = () => "Скачать",
  Ua = () => "Завантажити",
  Ca = () => "Tải xuống",
  Ea = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? wa() : e === "pt" ? ka() : e === "ch" ? qa() : e === "de" ? Sa() : e === "es" ? Ia() : e === "fr" ? Ma() : e === "it" ? Pa() : e === "jp" ? za() : e === "pl" ? Aa() : e === "ru" ? Ta() : e === "uk" ? Ua() : Ca()
  },
  ja = () => "No alliance",
  Da = () => "Sem aliança",
  Ba = () => "无联盟",
  Ra = () => "Ohne Allianz",
  Fa = () => "Sin alianza",
  Ha = () => "Sans alliance",
  La = () => "Senza alleanza",
  Xa = () => "同盟なし",
  Ya = () => "Bez sojuszu",
  Wa = () => "Без альянса",
  Na = () => "Без альянсу",
  Ga = () => "Không liên minh",
  x0 = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? ja() : e === "pt" ? Da() : e === "ch" ? Ba() : e === "de" ? Ra() : e === "es" ? Fa() : e === "fr" ? Ha() : e === "it" ? La() : e === "jp" ? Xa() : e === "pl" ? Ya() : e === "ru" ? Wa() : e === "uk" ? Na() : Ga()
  },
  Oa = () => "Pixels",
  Va = () => "Pixels",
  Za = () => "像素",
  Ka = () => "Pixel",
  Qa = () => "Píxeles",
  Ja = () => "Pixels",
  $a = () => "Pixel",
  ei = () => "ピクセル",
  ti = () => "Piksele",
  ri = () => "Пиксели",
  ni = () => "Пікселі",
  si = () => "Pixel",
  Gn = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Oa() : e === "pt" ? Va() : e === "ch" ? Za() : e === "de" ? Ka() : e === "es" ? Qa() : e === "fr" ? Ja() : e === "it" ? $a() : e === "jp" ? ei() : e === "pl" ? ti() : e === "ru" ? ri() : e === "uk" ? ni() : si()
  },
  ai = () => "Players",
  ii = () => "Jogadores",
  oi = () => "玩家",
  li = () => "Spieler",
  ci = () => "Jugadores",
  ui = () => "Joueurs",
  _i = () => "Giocatori",
  di = () => "プレイヤー",
  fi = () => "Gracze",
  pi = () => "Игроки",
  hi = () => "Гравці",
  vi = () => "Người chơi",
  mi = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? ai() : e === "pt" ? ii() : e === "ch" ? oi() : e === "de" ? li() : e === "es" ? ci() : e === "fr" ? ui() : e === "it" ? _i() : e === "jp" ? di() : e === "pl" ? fi() : e === "ru" ? pi() : e === "uk" ? hi() : vi()
  },
  gi = () => "Applying will restore the selected pixels to this snapshot.",
  xi = () => "Ao aplicar, os pixels selecionados serão restaurados para este momento.",
  bi = () => "应用后将把选定像素恢复到此快照。",
  yi = () => "Beim Anwenden werden die ausgewählten Pixel auf diesen Zeitpunkt zurückgesetzt.",
  wi = () => "Al aplicar, los píxeles seleccionados se restaurarán a esta instantánea.",
  ki = () => "Appliquer restaurera les pixels sélectionnés vers cet instantané.",
  qi = () => "Applicando verranno ripristinati i pixel selezionati a questa istantanea.",
  Si = () => "適用すると、選択したピクセルがこのスナップショットに復元されます。",
  Ii = () => "Zastosowanie przywróci wybrane piksele do tej migawki.",
  Mi = () => "При применении выбранные пиксели будут восстановлены до этого снимка.",
  Pi = () => "При застосуванні вибрані пікселі будуть відновлені до цього знімка.",
  zi = () => "Áp dụng sẽ khôi phục các pixel đã chọn về ảnh chụp này.",
  Ai = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? gi() : e === "pt" ? xi() : e === "ch" ? bi() : e === "de" ? yi() : e === "es" ? wi() : e === "fr" ? ki() : e === "it" ? qi() : e === "jp" ? Si() : e === "pl" ? Ii() : e === "ru" ? Mi() : e === "uk" ? Pi() : zi()
  },
  Ti = () => "Apply Revert",
  Ui = () => "Aplicar Reversão",
  Ci = () => "应用回退",
  Ei = () => "Wiederherstellung anwenden",
  ji = () => "Aplicar Reversión",
  Di = () => "Appliquer la Restauration",
  Bi = () => "Applica ripristino",
  Ri = () => "復元を適用",
  Fi = () => "Zastosuj cofnięcie",
  Hi = () => "Применить откат",
  Li = () => "Застосувати відкат",
  Xi = () => "Áp dụng hoàn tác",
  Yi = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Ti() : e === "pt" ? Ui() : e === "ch" ? Ci() : e === "de" ? Ei() : e === "es" ? ji() : e === "fr" ? Di() : e === "it" ? Bi() : e === "jp" ? Ri() : e === "pl" ? Fi() : e === "ru" ? Hi() : e === "uk" ? Li() : Xi()
  },
  Wi = t => `Successfully reverted ${t.count} pixels`,
  Ni = t => `${t.count} pixels revertidos com sucesso`,
  Gi = t => `成功回退 ${t.count} 个像素`,
  Oi = t => `${t.count} Pixel erfolgreich zurückgesetzt`,
  Vi = t => `${t.count} píxeles revertidos exitosamente`,
  Zi = t => `${t.count} pixels restaurés avec succès`,
  Ki = t => `${t.count} pixel ripristinati con successo`,
  Qi = t => `${t.count} ピクセルの復元に成功しました`,
  Ji = t => `Pomyślnie cofnięto ${t.count} pikseli`,
  $i = t => `Успешно откачено ${t.count} пикселей`,
  eo = t => `Успішно відкочено ${t.count} пікселів`,
  to = t => `Đã hoàn tác thành công ${t.count} pixel`,
  ro = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Wi(t) : e === "pt" ? Ni(t) : e === "ch" ? Gi(t) : e === "de" ? Oi(t) : e === "es" ? Vi(t) : e === "fr" ? Zi(t) : e === "it" ? Ki(t) : e === "jp" ? Qi(t) : e === "pl" ? Ji(t) : e === "ru" ? $i(t) : e === "uk" ? eo(t) : to(t)
  },
  no = () => "Reverting pixels...",
  so = () => "Revertendo pixels...",
  ao = () => "正在回退像素...",
  io = () => "Pixel werden zurückgesetzt...",
  oo = () => "Revirtiendo píxeles...",
  lo = () => "Restauration des pixels...",
  co = () => "Ripristino pixel in corso...",
  uo = () => "ピクセルを復元中...",
  _o = () => "Cofanie pikseli...",
  fo = () => "Откат пикселей...",
  po = () => "Відкат пікселів...",
  ho = () => "Đang hoàn tác pixel...",
  vo = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? no() : e === "pt" ? so() : e === "ch" ? ao() : e === "de" ? io() : e === "es" ? oo() : e === "fr" ? lo() : e === "it" ? co() : e === "jp" ? uo() : e === "pl" ? _o() : e === "ru" ? fo() : e === "uk" ? po() : ho()
  },
  mo = () => "Events",
  go = () => "Eventos",
  xo = () => "事件",
  bo = () => "Ereignisse",
  yo = () => "Eventos",
  wo = () => "Événements",
  ko = () => "Eventi",
  qo = () => "イベント",
  So = () => "Zdarzenia",
  Io = () => "События",
  Mo = () => "Події",
  Po = () => "Sự kiện",
  zo = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? mo() : e === "pt" ? go() : e === "ch" ? xo() : e === "de" ? bo() : e === "es" ? yo() : e === "fr" ? wo() : e === "it" ? ko() : e === "jp" ? qo() : e === "pl" ? So() : e === "ru" ? Io() : e === "uk" ? Mo() : Po()
  },
  Ao = () => "Pixels",
  To = () => "Pixels",
  Uo = () => "像素",
  Co = () => "Pixel",
  Eo = () => "Píxeles",
  jo = () => "Pixels",
  Do = () => "Pixel",
  Bo = () => "ピクセル",
  Ro = () => "Piksele",
  Fo = () => "Пиксели",
  Ho = () => "Пікселі",
  Lo = () => "Pixel",
  On = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Ao() : e === "pt" ? To() : e === "ch" ? Uo() : e === "de" ? Co() : e === "es" ? Eo() : e === "fr" ? jo() : e === "it" ? Do() : e === "jp" ? Bo() : e === "pl" ? Ro() : e === "ru" ? Fo() : e === "uk" ? Ho() : Lo()
  },
  Xo = () => "Choose the moment you want to restore.",
  Yo = () => "Escolha o momento que você quer restaurar.",
  Wo = () => "选择你想恢复的时刻。",
  No = () => "Wähle den Zeitpunkt, den du wiederherstellen willst.",
  Go = () => "Elige el momento que quieres restaurar.",
  Oo = () => "Choisissez le moment que vous voulez restaurer.",
  Vo = () => "Scegli il momento che vuoi ripristinare.",
  Zo = () => "復元したい時点を選択してください。",
  Ko = () => "Wybierz moment, który chcesz przywrócić.",
  Qo = () => "Выберите момент, который хотите восстановить.",
  Jo = () => "Оберіть момент, який хочете відновити.",
  $o = () => "Chọn thời điểm bạn muốn khôi phục.",
  mn = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Xo() : e === "pt" ? Yo() : e === "ch" ? Wo() : e === "de" ? No() : e === "es" ? Go() : e === "fr" ? Oo() : e === "it" ? Vo() : e === "jp" ? Zo() : e === "pl" ? Ko() : e === "ru" ? Qo() : e === "uk" ? Jo() : $o()
  },
  el = () => "Use arrow keys to move through snapshots.",
  tl = () => "Use as setas do teclado para navegar pelos momentos.",
  rl = () => "使用方向键浏览快照。",
  nl = () => "Verwende die Pfeiltasten, um zwischen den Zeitpunkten zu wechseln.",
  sl = () => "Usa las flechas para moverte entre las instantáneas.",
  al = () => "Utilisez les flèches pour parcourir les instantanés.",
  il = () => "Usa le frecce per passare tra le istantanee.",
  ol = () => "矢印キーでスナップショット間を移動できます。",
  ll = () => "Użyj strzałek, aby przechodzić między migawkami.",
  cl = () => "Используйте стрелки для перемещения между снимками.",
  ul = () => "Використовуйте стрілки для переміщення між знімками.",
  _l = () => "Dùng phím mũi tên để di chuyển giữa các ảnh chụp.",
  dl = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? el() : e === "pt" ? tl() : e === "ch" ? rl() : e === "de" ? nl() : e === "es" ? sl() : e === "fr" ? al() : e === "it" ? il() : e === "jp" ? ol() : e === "pl" ? ll() : e === "ru" ? cl() : e === "uk" ? ul() : _l()
  },
  fl = () => "Loading modification history...",
  pl = () => "Carregando histórico de modificações...",
  hl = () => "正在加载修改历史...",
  vl = () => "Änderungsverlauf wird geladen...",
  ml = () => "Cargando historial de modificaciones...",
  gl = () => "Chargement de l'historique des modifications...",
  xl = () => "Caricamento cronologia modifiche...",
  bl = () => "変更履歴を読み込み中...",
  yl = () => "Ładowanie historii modyfikacji...",
  wl = () => "Загрузка истории изменений...",
  kl = () => "Завантаження історії змін...",
  ql = () => "Đang tải lịch sử thay đổi...",
  Sl = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? fl() : e === "pt" ? pl() : e === "ch" ? hl() : e === "de" ? vl() : e === "es" ? ml() : e === "fr" ? gl() : e === "it" ? xl() : e === "jp" ? bl() : e === "pl" ? yl() : e === "ru" ? wl() : e === "uk" ? kl() : ql()
  },
  Il = () => "Depth",
  Ml = () => "Depth",
  Pl = () => "Depth",
  zl = () => "Depth",
  Al = () => "Profundidad",
  Tl = () => "Depth",
  Ul = () => "Profondità",
  Cl = () => "Depth",
  El = () => "Depth",
  jl = () => "Depth",
  Dl = () => "Depth",
  Bl = () => "Depth",
  Rl = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Il() : e === "pt" ? Ml() : e === "ch" ? Pl() : e === "de" ? zl() : e === "es" ? Al() : e === "fr" ? Tl() : e === "it" ? Ul() : e === "jp" ? Cl() : e === "pl" ? El() : e === "ru" ? jl() : e === "uk" ? Dl() : Bl()
  },
  Fl = () => "Compare the selected pixels by how many edits back each one goes.",
  Hl = () => "Compare the selected pixels by how many edits back each one goes.",
  Ll = () => "Compare the selected pixels by how many edits back each one goes.",
  Xl = () => "Compare the selected pixels by how many edits back each one goes.",
  Yl = () => "Compara los píxeles seleccionados según cuántas ediciones atrás llega cada uno.",
  Wl = () => "Compare the selected pixels by how many edits back each one goes.",
  Nl = () => "Confronta i pixel selezionati in base al numero di modifiche precedenti di ciascuno.",
  Gl = () => "Compare the selected pixels by how many edits back each one goes.",
  Ol = () => "Compare the selected pixels by how many edits back each one goes.",
  Vl = () => "Compare the selected pixels by how many edits back each one goes.",
  Zl = () => "Compare the selected pixels by how many edits back each one goes.",
  Kl = () => "Compare the selected pixels by how many edits back each one goes.",
  Vn = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Fl() : e === "pt" ? Hl() : e === "ch" ? Ll() : e === "de" ? Xl() : e === "es" ? Yl() : e === "fr" ? Wl() : e === "it" ? Nl() : e === "jp" ? Gl() : e === "pl" ? Ol() : e === "ru" ? Vl() : e === "uk" ? Zl() : Kl()
  },
  Ql = () => "Historical",
  Jl = () => "Historical",
  $l = () => "Historical",
  ec = () => "Historical",
  tc = () => "Histórico",
  rc = () => "Historical",
  nc = () => "Storico",
  sc = () => "Historical",
  ac = () => "Historical",
  ic = () => "Historical",
  oc = () => "Historical",
  lc = () => "Historical",
  cc = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Ql() : e === "pt" ? Jl() : e === "ch" ? $l() : e === "de" ? ec() : e === "es" ? tc() : e === "fr" ? rc() : e === "it" ? nc() : e === "jp" ? sc() : e === "pl" ? ac() : e === "ru" ? ic() : e === "uk" ? oc() : lc()
  },
  uc = () => "Browse real paint moments and restore the exact historical state.",
  _c = () => "Browse real paint moments and restore the exact historical state.",
  dc = () => "Browse real paint moments and restore the exact historical state.",
  fc = () => "Browse real paint moments and restore the exact historical state.",
  pc = () => "Navega por momentos reales de pintura y restaura el estado histórico exacto.",
  hc = () => "Browse real paint moments and restore the exact historical state.",
  vc = () => "Esplora i momenti reali di pittura e ripristina lo stato storico esatto.",
  mc = () => "Browse real paint moments and restore the exact historical state.",
  gc = () => "Browse real paint moments and restore the exact historical state.",
  xc = () => "Browse real paint moments and restore the exact historical state.",
  bc = () => "Browse real paint moments and restore the exact historical state.",
  yc = () => "Browse real paint moments and restore the exact historical state.",
  Zn = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? uc() : e === "pt" ? _c() : e === "ch" ? dc() : e === "de" ? fc() : e === "es" ? pc() : e === "fr" ? hc() : e === "it" ? vc() : e === "jp" ? mc() : e === "pl" ? gc() : e === "ru" ? xc() : e === "uk" ? bc() : yc()
  },
  wc = () => "Method",
  kc = () => "Method",
  qc = () => "Method",
  Sc = () => "Method",
  Ic = () => "Método",
  Mc = () => "Method",
  Pc = () => "Metodo",
  zc = () => "Method",
  Ac = () => "Method",
  Tc = () => "Method",
  Uc = () => "Method",
  Cc = () => "Method",
  Ec = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? wc() : e === "pt" ? kc() : e === "ch" ? qc() : e === "de" ? Sc() : e === "es" ? Ic() : e === "fr" ? Mc() : e === "it" ? Pc() : e === "jp" ? zc() : e === "pl" ? Ac() : e === "ru" ? Tc() : e === "uk" ? Uc() : Cc()
  },
  jc = () => "Reverse Pixels",
  Dc = () => "Reverter Pixels",
  Bc = () => "回退像素",
  Rc = () => "Pixel zurücksetzen",
  Fc = () => "Revertir Píxeles",
  Hc = () => "Inverser les Pixels",
  Lc = () => "Ripristina pixel",
  Xc = () => "ピクセルを元に戻す",
  Yc = () => "Cofnij piksele",
  Wc = () => "Откатить пиксели",
  Nc = () => "Відкотити пікселі",
  Gc = () => "Hoàn tác pixel",
  os = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? jc() : e === "pt" ? Dc() : e === "ch" ? Bc() : e === "de" ? Rc() : e === "es" ? Fc() : e === "fr" ? Hc() : e === "it" ? Lc() : e === "jp" ? Xc() : e === "pl" ? Yc() : e === "ru" ? Wc() : e === "uk" ? Nc() : Gc()
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
  xu = t => `Snapshot ${t.current} of ${t.total}`,
  bu = t => `Momento ${t.current} de ${t.total}`,
  yu = t => `快照 ${t.current} / ${t.total}`,
  wu = t => `Zeitpunkt ${t.current} von ${t.total}`,
  ku = t => `Instantánea ${t.current} de ${t.total}`,
  qu = t => `Instantané ${t.current} sur ${t.total}`,
  Su = t => `Istantanea ${t.current} di ${t.total}`,
  Iu = t => `スナップショット ${t.current} / ${t.total}`,
  Mu = t => `Migawka ${t.current} z ${t.total}`,
  Pu = t => `Снимок ${t.current} из ${t.total}`,
  zu = t => `Знімок ${t.current} з ${t.total}`,
  Au = t => `Ảnh chụp ${t.current} / ${t.total}`,
  Tu = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? xu(t) : e === "pt" ? bu(t) : e === "ch" ? yu(t) : e === "de" ? wu(t) : e === "es" ? ku(t) : e === "fr" ? qu(t) : e === "it" ? Su(t) : e === "jp" ? Iu(t) : e === "pl" ? Mu(t) : e === "ru" ? Pu(t) : e === "uk" ? zu(t) : Au(t)
  },
  Uu = () => "Snapshots",
  Cu = () => "Momentos",
  Eu = () => "快照",
  ju = () => "Zeitpunkte",
  Du = () => "Instantáneas",
  Bu = () => "Instantanés",
  Ru = () => "Istantanee",
  Fu = () => "スナップショット",
  Hu = () => "Migawki",
  Lu = () => "Снимки",
  Xu = () => "Знімки",
  Yu = () => "Ảnh chụp",
  Wu = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Uu() : e === "pt" ? Cu() : e === "ch" ? Eu() : e === "de" ? ju() : e === "es" ? Du() : e === "fr" ? Bu() : e === "it" ? Ru() : e === "jp" ? Fu() : e === "pl" ? Hu() : e === "ru" ? Lu() : e === "uk" ? Xu() : Yu()
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
  b0 = (t = {}, r = {}) => {
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
  x_ = () => "This browser cannot export timelapse videos.",
  b_ = () => "This browser cannot export timelapse videos.",
  y_ = () => "Questo browser non può esportare video timelapse.",
  w_ = () => "This browser cannot export timelapse videos.",
  k_ = () => "This browser cannot export timelapse videos.",
  q_ = () => "This browser cannot export timelapse videos.",
  S_ = () => "This browser cannot export timelapse videos.",
  I_ = () => "This browser cannot export timelapse videos.",
  at = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? h_() : e === "pt" ? v_() : e === "ch" ? m_() : e === "de" ? g_() : e === "es" ? x_() : e === "fr" ? b_() : e === "it" ? y_() : e === "jp" ? w_() : e === "pl" ? k_() : e === "ru" ? q_() : e === "uk" ? S_() : I_()
  },
  M_ = () => "Select at least one player.",
  P_ = () => "Selecione pelo menos um jogador.",
  z_ = () => "请至少选择一名玩家。",
  A_ = () => "Wähle mindestens einen Spieler aus.",
  T_ = () => "Selecciona al menos un jugador.",
  U_ = () => "Sélectionnez au moins un joueur.",
  C_ = () => "Seleziona almeno un giocatore.",
  E_ = () => "プレイヤーを1人以上選択してください。",
  j_ = () => "Wybierz co najmniej jednego gracza.",
  D_ = () => "Выберите хотя бы одного игрока.",
  B_ = () => "Виберіть щонайменше одного гравця.",
  R_ = () => "Hãy chọn ít nhất một người chơi.",
  gn = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? M_() : e === "pt" ? P_() : e === "ch" ? z_() : e === "de" ? A_() : e === "es" ? T_() : e === "fr" ? U_() : e === "it" ? C_() : e === "jp" ? E_() : e === "pl" ? j_() : e === "ru" ? D_() : e === "uk" ? B_() : R_()
  },
  F_ = t => `Phone verification required for ${t.count} players`,
  H_ = t => `Verificação por telefone exigida para ${t.count} jogadores`,
  L_ = t => `有 ${t.count} 名玩家需要完成手机验证`,
  X_ = t => `Telefonverifizierung für ${t.count} Spieler erforderlich`,
  Y_ = t => `Verificación por teléfono requerida para ${t.count} jugadores`,
  W_ = t => `Vérification par téléphone requise pour ${t.count} joueurs`,
  N_ = t => `Verifica telefonica richiesta per ${t.count} giocatori`,
  G_ = t => `${t.count} 人のプレイヤーには電話認証が必要です`,
  O_ = t => `Wymagana weryfikacja telefonu dla ${t.count} graczy`,
  V_ = t => `Для ${t.count} игроков требуется подтверждение по телефону`,
  Z_ = t => `Для ${t.count} гравців потрібна перевірка телефону`,
  K_ = t => `Cần xác minh điện thoại cho ${t.count} người chơi`,
  Q_ = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? F_(t) : e === "pt" ? H_(t) : e === "ch" ? L_(t) : e === "de" ? X_(t) : e === "es" ? Y_(t) : e === "fr" ? W_(t) : e === "it" ? N_(t) : e === "jp" ? G_(t) : e === "pl" ? O_(t) : e === "ru" ? V_(t) : e === "uk" ? Z_(t) : K_(t)
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
  xd = () => "Zapisano wybrany obszar siedziby",
  bd = () => "Выбранная область штаб-квартиры сохранена",
  yd = () => "Вибрану область штаб-квартири збережено",
  wd = () => "Đã lưu vùng trụ sở đã chọn",
  kd = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? _d() : e === "pt" ? dd() : e === "ch" ? fd() : e === "de" ? pd() : e === "es" ? hd() : e === "fr" ? vd() : e === "it" ? md() : e === "jp" ? gd() : e === "pl" ? xd() : e === "ru" ? bd() : e === "uk" ? yd() : wd()
  },
  qd = () => "Selected player IDs copied",
  Sd = () => "IDs dos jogadores selecionados copiados",
  Id = () => "已复制所选玩家 ID",
  Md = () => "IDs der ausgewählten Spieler kopiert",
  Pd = () => "IDs de los jugadores seleccionados copiados",
  zd = () => "IDs des joueurs sélectionnés copiés",
  Ad = () => "ID dei giocatori selezionati copiati",
  Td = () => "選択したプレイヤーIDをコピーしました",
  Ud = () => "Skopiowano ID wybranych graczy",
  Cd = () => "ID выбранных игроков скопированы",
  Ed = () => "ID вибраних гравців скопійовано",
  jd = () => "Đã sao chép ID của những người chơi đã chọn",
  Dd = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? qd() : e === "pt" ? Sd() : e === "ch" ? Id() : e === "de" ? Md() : e === "es" ? Pd() : e === "fr" ? zd() : e === "it" ? Ad() : e === "jp" ? Td() : e === "pl" ? Ud() : e === "ru" ? Cd() : e === "uk" ? Ed() : jd()
  },
  Bd = () => "Select a player from a pixel",
  Rd = () => "Selecionar jogador por um pixel",
  Fd = () => "通过像素选择玩家",
  Hd = () => "Spieler über einen Pixel auswählen",
  Ld = () => "Seleccionar un jugador desde un píxel",
  Xd = () => "Sélectionner un joueur à partir d'un pixel",
  Yd = () => "Seleziona un giocatore da un pixel",
  Wd = () => "ピクセルからプレイヤーを選択",
  Nd = () => "Wybierz gracza z piksela",
  Gd = () => "Выбрать игрока по пикселю",
  Od = () => "Вибрати гравця за пікселем",
  Vd = () => "Chọn người chơi từ một pixel",
  Zd = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Bd() : e === "pt" ? Rd() : e === "ch" ? Fd() : e === "de" ? Hd() : e === "es" ? Ld() : e === "fr" ? Xd() : e === "it" ? Yd() : e === "jp" ? Wd() : e === "pl" ? Nd() : e === "ru" ? Gd() : e === "uk" ? Od() : Vd()
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
  xf = () => "Снять выбор с отфильтрованных",
  bf = () => "Очистити відфільтрованих",
  yf = () => "Bỏ chọn mục đã lọc",
  wf = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? uf() : e === "pt" ? _f() : e === "ch" ? df() : e === "de" ? ff() : e === "es" ? pf() : e === "fr" ? hf() : e === "it" ? vf() : e === "jp" ? mf() : e === "pl" ? gf() : e === "ru" ? xf() : e === "uk" ? bf() : yf()
  },
  kf = () => "All roles",
  qf = () => "Todos os cargos",
  Sf = () => "所有角色",
  If = () => "Alle Rollen",
  Mf = () => "Todos los cargos",
  Pf = () => "Tous les rôles",
  zf = () => "Tutti i ruoli",
  Af = () => "すべてのロール",
  Tf = () => "Wszystkie role",
  Uf = () => "Все роли",
  Cf = () => "Усі ролі",
  Ef = () => "Tất cả vai trò",
  jf = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? kf() : e === "pt" ? qf() : e === "ch" ? Sf() : e === "de" ? If() : e === "es" ? Mf() : e === "fr" ? Pf() : e === "it" ? zf() : e === "jp" ? Af() : e === "pl" ? Tf() : e === "ru" ? Uf() : e === "uk" ? Cf() : Ef()
  },
  Df = () => "Not painted",
  Bf = () => "Não pintado",
  Rf = () => "未绘制",
  Ff = () => "Nicht bemalt",
  Hf = () => "Sin pintar",
  Lf = () => "Non peint",
  Xf = () => "Non dipinto",
  Yf = () => "未ペイント",
  Wf = () => "Niepomalowany",
  Nf = () => "Не нарисовано",
  Gf = () => "Не намальовано",
  Of = () => "Chưa tô",
  en = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Df() : e === "pt" ? Bf() : e === "ch" ? Rf() : e === "de" ? Ff() : e === "es" ? Hf() : e === "fr" ? Lf() : e === "it" ? Xf() : e === "jp" ? Yf() : e === "pl" ? Wf() : e === "ru" ? Nf() : e === "uk" ? Gf() : Of()
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
  xp = () => "Name or ID",
  bp = () => "Nome ou ID",
  yp = () => "名称或 ID",
  wp = () => "Name oder ID",
  kp = () => "Nombre o ID",
  qp = () => "Nom ou ID",
  Sp = () => "Nome o ID",
  Ip = () => "名前またはID",
  Mp = () => "Nazwa lub ID",
  Pp = () => "Имя или ID",
  zp = () => "Ім'я або ID",
  Ap = () => "Tên hoặc ID",
  Tp = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? xp() : e === "pt" ? bp() : e === "ch" ? yp() : e === "de" ? wp() : e === "es" ? kp() : e === "fr" ? qp() : e === "it" ? Sp() : e === "jp" ? Ip() : e === "pl" ? Mp() : e === "ru" ? Pp() : e === "uk" ? zp() : Ap()
  },
  Up = () => "User ID From",
  Cp = () => "ID de usuário inicial",
  Ep = () => "起始用户 ID",
  jp = () => "Nutzer-ID von",
  Dp = () => "ID de usuario desde",
  Bp = () => "ID utilisateur de",
  Rp = () => "ID utente da",
  Fp = () => "ユーザーID（開始）",
  Hp = () => "ID użytkownika od",
  Lp = () => "ID пользователя от",
  Xp = () => "ID користувача від",
  Yp = () => "ID người dùng từ",
  Wp = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Up() : e === "pt" ? Cp() : e === "ch" ? Ep() : e === "de" ? jp() : e === "es" ? Dp() : e === "fr" ? Bp() : e === "it" ? Rp() : e === "jp" ? Fp() : e === "pl" ? Hp() : e === "ru" ? Lp() : e === "uk" ? Xp() : Yp()
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
  xh = () => "最大",
  bh = () => "Max",
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
    return e === "en" ? mh() : e === "pt" ? gh() : e === "ch" ? xh() : e === "de" ? bh() : e === "es" ? yh() : e === "fr" ? wh() : e === "it" ? kh() : e === "jp" ? qh() : e === "pl" ? Sh() : e === "ru" ? Ih() : e === "uk" ? Mh() : Ph()
  },
  Ah = t => `Circle brush (Alt + scroll to resize) - Size: ${t.size}`,
  Th = t => `Pincel circular (Alt + rolagem para redimensionar) - Tamanho: ${t.size}`,
  Uh = t => `圆形画笔（Alt + 滚轮调整大小）- 大小：${t.size}`,
  Ch = t => `Runder Pinsel (Alt + Scrollen zum Ändern der Größe) - Größe: ${t.size}`,
  Eh = t => `Pincel circular (Alt + rueda para redimensionar) - Tamaño: ${t.size}`,
  jh = t => `Pinceau circulaire (Alt + molette pour redimensionner) - Taille : ${t.size}`,
  Dh = t => `Pennello circolare (Alt + scorrimento per ridimensionare) - Dimensione: ${t.size}`,
  Bh = t => `円形ブラシ（Alt + スクロールでサイズ変更） - サイズ: ${t.size}`,
  Rh = t => `Pędzel okrągły (Alt + przewijanie zmienia rozmiar) - Rozmiar: ${t.size}`,
  Fh = t => `Круглая кисть (Alt + прокрутка для изменения размера) - Размер: ${t.size}`,
  Hh = t => `Кругла кисть (Alt + прокрутка для зміни розміру) - Розмір: ${t.size}`,
  Lh = t => `Cọ tròn (Alt + cuộn để đổi cỡ) - Cỡ: ${t.size}`,
  Xh = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Ah(t) : e === "pt" ? Th(t) : e === "ch" ? Uh(t) : e === "de" ? Ch(t) : e === "es" ? Eh(t) : e === "fr" ? jh(t) : e === "it" ? Dh(t) : e === "jp" ? Bh(t) : e === "pl" ? Rh(t) : e === "ru" ? Fh(t) : e === "uk" ? Hh(t) : Lh(t)
  },
  Yh = t => `Square brush (Alt + scroll to resize) - Size: ${t.size}`,
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
    return e === "en" ? Yh(t) : e === "pt" ? Wh(t) : e === "ch" ? Nh(t) : e === "de" ? Gh(t) : e === "es" ? Oh(t) : e === "fr" ? Vh(t) : e === "it" ? Zh(t) : e === "jp" ? Kh(t) : e === "pl" ? Qh(t) : e === "ru" ? Jh(t) : e === "uk" ? $h(t) : ev(t)
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
  xv = t => `${t.name} deseleccionado`,
  bv = t => `${t.name} désélectionné`,
  yv = t => `${t.name} deselezionato`,
  wv = t => `${t.name} の選択を解除しました`,
  kv = t => `Odznaczono ${t.name}`,
  qv = t => `${t.name} снят с выбора`,
  Sv = t => `${t.name} знято з вибору`,
  Iv = t => `Đã bỏ chọn ${t.name}`,
  Mv = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? hv(t) : e === "pt" ? vv(t) : e === "ch" ? mv(t) : e === "de" ? gv(t) : e === "es" ? xv(t) : e === "fr" ? bv(t) : e === "it" ? yv(t) : e === "jp" ? wv(t) : e === "pl" ? kv(t) : e === "ru" ? qv(t) : e === "uk" ? Sv(t) : Iv(t)
  };
var Mt, Pt, Ht, sn, St, zr, tn;
const zn = class zn extends Map {
  constructor(e) {
    super();
    qt(this, St);
    qt(this, Mt, new Map);
    qt(this, Pt, G(0));
    qt(this, Ht, G(0));
    qt(this, sn, jn || -1);
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
    var M;
    var a = U(this, Mt),
      o = a.get(e),
      u = super.get(e),
      d = super.set(e, s),
      f = U(this, Pt);
    if (o === void 0) o = Gt(this, St, zr).call(this, 0), a.set(e, o), m(U(this, Ht), super.size), Mr(f);
    else if (u !== s) {
      Mr(o);
      var h = f.reactions === null ? null : new Set(f.reactions),
        z = h === null || !((M = o.reactions) != null && M.every(D => h.has(D)));
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
  return jn === U(this, sn) ? G(e) : js(e)
}, tn = function() {
  n(U(this, Pt));
  var e = U(this, Mt);
  if (U(this, Ht).v !== e.size) {
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
  zv = Cr('<svg><path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Z"></path></svg>');

function Av(t, r) {
  let e = jr(r, Pv);
  var s = zv();
  Er(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), k(t, s)
}
var xn = R('<div class="py-8 text-center"><p class="text-base-content/60"> </p></div>'),
  Qn = R('<div class="flex flex-col items-center justify-center gap-3 py-8"><span class="loading loading-spinner loading-lg"></span> <p class="text-base-content/70 text-sm"> </p></div>'),
  Tv = R('<div class="reverse-selection-pill svelte-o0qsvj"> </div>'),
  Uv = R('<div class="bg-base-300/40 absolute inset-0 z-10 flex items-center justify-center"><span class="loading loading-spinner loading-lg"></span></div>'),
  Cv = R('<span class="loading loading-spinner loading-xs mt-1 shrink-0"></span>'),
  Ev = R('<button type="button"><div class="reverse-gallery-item-head svelte-o0qsvj"><div class="reverse-gallery-item-copy svelte-o0qsvj"><div class="reverse-gallery-item-label flex justify-between svelte-o0qsvj"> <div class="badge badge-sm badge-outline"> </div></div> <div class="reverse-gallery-item-subtitle svelte-o0qsvj"> </div></div></div> <div class="mt-2 flex flex-wrap justify-between gap-2"><div class="badge badge-sm badge-outline"> </div> <!></div></button>'),
  jv = R('<span class="loading loading-spinner loading-xs"></span>'),
  Dv = R('<button type="button" class="btn btn-sm btn-outline w-full"><!> </button>'),
  Bv = R('<div class="reverse-workspace svelte-o0qsvj"><div class="reverse-panel svelte-o0qsvj"><div class="reverse-panel-header svelte-o0qsvj"><div><div class="reverse-section-title svelte-o0qsvj"> </div> <p class="reverse-section-copy svelte-o0qsvj"> </p></div> <!></div> <div class="reverse-preview-toolbar svelte-o0qsvj"><div class="reverse-meta-chip svelte-o0qsvj"><!> </div> <div class="reverse-meta-chip svelte-o0qsvj"><!> </div> <div class="flex items-center gap-1"><button type="button" class="btn btn-sm btn-ghost btn-circle" aria-label="Previous preview"><!></button> <button type="button" class="btn btn-sm btn-ghost btn-circle" aria-label="Next preview"><!></button></div></div> <div class="reverse-preview-stage svelte-o0qsvj"><!> <canvas style="max-width: 100%; height: auto;"></canvas></div> <div class="reverse-preview-footer svelte-o0qsvj"><div class="flex flex-wrap items-center gap-2 text-xs sm:text-sm"><div class="badge badge-outline"> </div> <div class="badge badge-outline"> </div></div> <div class="reverse-callout svelte-o0qsvj"><!> <span> </span></div></div></div> <div class="reverse-panel h-full svelte-o0qsvj"><div class="reverse-panel-header svelte-o0qsvj"><div><div class="reverse-section-title svelte-o0qsvj"> </div> <p class="reverse-section-copy svelte-o0qsvj"> </p></div> <div class="reverse-history-count svelte-o0qsvj"> </div></div> <div class="reverse-keyboard-hint svelte-o0qsvj"> </div> <div class="reverse-gallery-list h-full p-2 svelte-o0qsvj"></div> <!></div></div> <div class="reverse-action-bar svelte-o0qsvj"><div class="flex flex-wrap items-center justify-end gap-2"><button type="button" class="btn btn-sm btn-outline"> </button> <button type="button" class="btn btn-sm btn-warning"><!> </button></div></div>', 1),
  Rv = R('<div><div class="min-w-0"><h3 class="flex items-center gap-2 text-lg font-bold"><!> </h3> <p class="text-base-content/70 mt-1 text-sm"> </p></div></div> <div class="mt-4"><div class="reverse-mode-bar svelte-o0qsvj"><div><div class="reverse-section-title svelte-o0qsvj"> </div> <p class="reverse-section-copy svelte-o0qsvj"> </p></div> <div class="tabs tabs-boxed reverse-mode-tabs svelte-o0qsvj"><button type="button"> </button> <button type="button"> </button></div></div> <!></div>', 1);

function Fv(t, r) {
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
    Te;
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
    it += 1, Te == null || Te.abort(), Te = void 0, m(Le, !1)
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
    e() || (Re += 1, Xe += 1, cr(), m(d, "idle"), m(F, null), m(h, [], !0), m(D, null), m(K, []), m(He, !1), ue = void 0, Ze = null, m(z, !1), m(M, !1), m(f, null))
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
  async function Et(i) {
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
    }), m(d, "loading"), m(f, i, !0), m(h, [], !0), m(z, !1), m(M, !1), m(D, null), m(K, []), m(He, !1), m(F, null), Ge += 1;
    try {
      if (r.dataSource) m(F, "custom"), await Zt("custom", i, {
        sessionMs: 0,
        loadStart: _,
        payloadBytes: 0,
        selectedPixels: r.selectedPixelCount
      });
      else {
        const b = ie(),
          A = await At.createReverseSession(s()),
          T = Q(b);
        if (x !== Re) return;
        m(F, A.sessionId, !0), await Zt(A.sessionId, i, {
          sessionMs: T,
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
    Xe += 1, m(d, "loading"), m(h, [], !0), m(z, !1), m(M, !1), m(D, null), m(K, []), m(He, !1);
    const b = ie(),
      A = r.dataSource ? await r.dataSource.getTimeline({
        mode: _
      }) : await At.getReverseTimestamps(i, {
        mode: _
      }),
      T = Q(b);
    I !== Ge || i !== n(F) || (m(h, A.timestamps, !0), m(z, A.hasMore, !0), m(d, "gallery"), re("loadTimestamps:resolved", {
      season: r.season,
      mode: _,
      selectedPixels: (x == null ? void 0 : x.selectedPixels) ?? r.selectedPixelCount,
      payloadBytes: (x == null ? void 0 : x.payloadBytes) ?? ((V = s()) == null ? void 0 : V.length) ?? 0,
      sessionId: i,
      snapshots: n(h).length,
      hasMore: A.hasMore,
      sessionMs: x == null ? void 0 : x.sessionMs,
      timestampsMs: T,
      durationMs: x != null && x.loadStart ? Q(x.loadStart) : T
    }), n(h).length > 0 && await Yt(i, Ke(n(h)[0], _), _))
  }
  async function _r() {
    if (!n(F) || n(M) || !n(z) || n(h).length === 0) return;
    const i = Ge,
      _ = n(h)[n(h).length - 1],
      x = n(f);
    if (!_ || x === null) return;
    const I = Ke(_, x);
    if (!I) return;
    m(M, !0);
    const b = ie();
    re("loadMoreTimestamps:start", {
      season: r.season,
      mode: n(f),
      sessionId: n(F),
      beforeEntryValue: I,
      loadedSnapshots: n(h).length
    });
    try {
      const A = x === "historical" ? {
          mode: x,
          beforeTimestamp: I
        } : {
          mode: x,
          beforeDepth: I
        },
        T = r.dataSource ? await r.dataSource.getTimeline(A) : await At.getReverseTimestamps(n(F), A);
      if (i !== Ge) return;
      m(h, [...n(h), ...T.timestamps], !0), m(z, T.hasMore, !0), re("loadMoreTimestamps:resolved", {
        season: r.season,
        mode: x,
        sessionId: n(F),
        beforeEntryValue: I,
        appendedSnapshots: T.timestamps.length,
        loadedSnapshots: n(h).length,
        hasMore: T.hasMore,
        durationMs: Q(b)
      })
    } catch (A) {
      if (i !== Ge) return;
      re("loadMoreTimestamps:error", {
        season: r.season,
        mode: x,
        sessionId: n(F),
        beforeEntryValue: I,
        durationMs: Q(b),
        message: A.message
      }), pe.error(A.message)
    } finally {
      i === Ge && m(M, !1)
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
      const A = ie(),
        T = ur(x, _),
        V = r.dataSource ? await r.dataSource.getPreview(T) : await At.getReversePreview(i, T),
        oe = Q(A);
      if (b !== Xe || (m(K, V.pixels), await new Promise(Z => requestAnimationFrame(() => Z())), b !== Xe)) return;
      const Ue = ie();
      E();
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
    } catch (A) {
      if (b !== Xe) return;
      re("loadPreview:error", {
        season: r.season,
        mode: x,
        sessionId: i,
        entryValue: _,
        requestNonce: b,
        durationMs: Q(I),
        message: A.message
      }), pe.error(A.message)
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
          j = Z.tileY * n(u) + Z.pixelY;
        we < i && (i = we), j < _ && (_ = j), we > x && (x = we), j > I && (I = j)
      }
    }
    if (!Number.isFinite(i) || !Number.isFinite(_) || !Number.isFinite(x) || !Number.isFinite(I)) return null;
    const b = x - i + 1,
      A = I - _ + 1;
    if (b <= 0 || A <= 0) return null;
    const T = 520,
      V = Math.max(1, Math.ceil(Math.max(b / T, A / T))),
      oe = Math.max(1, Math.ceil(b / V)),
      Ue = Math.max(1, Math.ceil(A / V)),
      _e = Math.max(1, Math.min(Math.floor(T / oe), Math.floor(T / Ue)));
    return {
      minGX: i,
      minGY: _,
      width: b,
      height: A,
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
    Te == null || Te.abort();
    const I = new AbortController;
    Te = I, m(Le, !0), re("loadPreviewBackground:start", {
      season: r.season,
      requestNonce: x,
      width: i.width,
      height: i.height,
      sampledWidth: i.sampledWidth,
      sampledHeight: i.sampledHeight
    });
    try {
      const b = ie(),
        A = document.createElement("canvas");
      A.width = i.sampledWidth, A.height = i.sampledHeight;
      const T = A.getContext("2d");
      if (!T) throw new Error("Unable to create preview background.");
      T.imageSmoothingEnabled = !1;
      const V = i.minGX + i.width,
        oe = i.minGY + i.height,
        Ue = Math.floor(i.minGX / n(u)),
        _e = Math.floor((V - 1) / n(u)),
        Z = Math.floor(i.minGY / n(u)),
        we = Math.floor((oe - 1) / n(u));
      for (let j = Z; j <= we; j += 1)
        for (let B = Ue; B <= _e; B += 1) {
          if (x !== it || I.signal.aborted) return;
          const le = B * n(u),
            me = j * n(u),
            de = Math.max(i.minGX, le),
            Me = Math.max(i.minGY, me),
            Oe = Math.min(V, le + n(u)),
            We = Math.min(oe, me + n(u));
          if (Oe <= de || We <= Me) continue;
          const jt = await fetch(`${Ws}/s${r.season}/tiles/${B}/${j}.png`, {
            signal: I.signal
          });
          if (!jt.ok) continue;
          const $e = await br(await jt.blob());
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
          T.drawImage($e, de - le, Me - me, Oe - de, We - Me, ut, Dt, _t, Qt), fr($e)
        }
      if (x !== it || I.signal.aborted) return;
      ue = A, Ze = _, re("loadPreviewBackground:resolved", {
        season: r.season,
        requestNonce: x,
        width: i.width,
        height: i.height,
        sampledWidth: i.sampledWidth,
        sampledHeight: i.sampledHeight,
        durationMs: Q(b)
      }), E()
    } catch (b) {
      if (b instanceof DOMException && b.name === "AbortError" || x !== it) return;
      ue = void 0, Ze = null, re("loadPreviewBackground:error", {
        season: r.season,
        requestNonce: x,
        message: b.message
      })
    } finally {
      x === it && (Te = void 0, m(Le, !1))
    }
  }

  function E() {
    const i = ie();
    if (!n($)) return;
    const _ = dr();
    if (!_) {
      n($).width = 1, n($).height = 1;
      const T = n($).getContext("2d");
      T == null || T.clearRect(0, 0, 1, 1), re("renderPreviewCanvas:empty", {
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
      const T = x.createImageData(_.sampledWidth, _.sampledHeight),
        V = T.data;
      for (let oe = 0; oe < _.sampledHeight; oe += 1) {
        const Ue = oe * _.sampledWidth;
        for (let _e = 0; _e < _.sampledWidth; _e += 1) {
          const Z = (Ue + _e) * 4;
          (_e + oe) % 2 === 0 ? (V[Z] = 22, V[Z + 1] = 33, V[Z + 2] = 62) : (V[Z] = 26, V[Z + 1] = 26, V[Z + 2] = 46), V[Z + 3] = 255
        }
      }
      x.putImageData(T, 0, 0)
    }
    const b = x.getImageData(0, 0, _.sampledWidth, _.sampledHeight),
      A = b.data;
    for (const T of n(K)) {
      const V = T.tileX * n(u) + T.pixelX - _.minGX,
        oe = T.tileY * n(u) + T.pixelY - _.minGY;
      if (V < 0 || oe < 0 || V >= _.width || oe >= _.height) continue;
      const Ue = Math.floor(V / _.downsample),
        _e = Math.floor(oe / _.downsample);
      if (Ue < 0 || _e < 0 || Ue >= _.sampledWidth || _e >= _.sampledHeight) continue;
      const Z = Ut.colors[Math.min(T.color, Ut.colors.length - 1)],
        we = (_e * _.sampledWidth + Ue) * 4;
      A[we] = Z.rgb[0], A[we + 1] = Z.rgb[1], A[we + 2] = Z.rgb[2], A[we + 3] = T.color === 0 ? 0 : 255
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
      }), pe.success(ro({
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
      var x = Rv(),
        I = ir(x),
        b = c(I),
        A = c(b),
        T = c(A);
      yn(T, {
        class: "size-5"
      });
      var V = v(T);
      l(A);
      var oe = v(A, 2),
        Ue = c(oe, !0);
      l(oe), l(b), l(I);
      var _e = v(I, 2),
        Z = c(_e),
        we = c(Z),
        j = c(we),
        B = c(j, !0);
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
            var ee = xn(),
              ce = c(ee),
              Pe = c(ce, !0);
            l(ce), l(ee), Y(Ce => y(Pe, Ce), [() => mn()]), k(ae, ee)
          },
          Dt = ae => {
            var ee = Qn(),
              ce = v(c(ee), 2),
              Pe = c(ce, !0);
            l(ce), l(ee), Y(Ce => y(Pe, Ce), [() => Sl()]), k(ae, ee)
          },
          gt = ae => {
            var ee = Qn(),
              ce = v(c(ee), 2),
              Pe = c(ce, !0);
            l(ce), l(ee), Y(Ce => y(Pe, Ce), [() => vo()]), k(ae, ee)
          },
          Kt = ae => {
            var ee = xn(),
              ce = c(ee),
              Pe = c(ce, !0);
            l(ce), l(ee), Y(Ce => y(Pe, Ce), [() => bn()]), k(ae, ee)
          },
          _t = ae => {
            var ee = Bv(),
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
                var qe = Tv(),
                  Nt = c(qe, !0);
                l(qe), Y(pt => y(Nt, pt), [() => Tu({
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
              Ae = c(fe);
            Av(Ae, {
              class: "size-3.5"
            });
            var C = v(Ae);
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
                var qe = Uv();
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
              var pt = Ev();
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
                    var dn = Cv();
                    k(Ir, dn)
                  },
                  ks = N(() => n(mt) && n(D) === Ke(n(qe), n(f)));
                J(ys, Ir => {
                  n(ks) && Ir(ws)
                })
              }
              l(Or), l(pt), Y((Ir, dn, qs, Ss, Is, Ms, Ps) => {
                Ee(pt, "id", Ir), vr = Tt(pt, 1, "reverse-gallery-item svelte-o0qsvj", null, vr, dn), y(Wr, `${qs??""} `), y(un, `#${n(Nt)+1}`), y(_n, `${Ss??""} · ${Is??""}`), y(bs, `${Ms??""}
										${Ps??""}`)
              }, [() => q(n(f), Ke(n(qe), n(f))), () => ({
                "reverse-gallery-item-active": n(D) === Ke(n(qe), n(f))
              }), () => Ie(n(qe).ts), () => Qe(n(qe).ts), () => Je(n(qe).ts), () => n(qe).pixelCount.toLocaleString(), () => On()]), he("click", pt, () => n(F) && Yt(n(F), Ke(n(qe), n(f)))), k(Be, pt)
            }), l(Ft);
            var Hr = v(Ft, 2);
            {
              var nr = Be => {
                var qe = Dv(),
                  Nt = c(qe);
                {
                  var pt = kt => {
                    var mr = jv();
                    k(kt, mr)
                  };
                  J(Nt, kt => {
                    n(M) && kt(pt)
                  })
                }
                var vr = v(Nt);
                l(qe), Y(kt => {
                  qe.disabled = n(M), y(vr, ` ${kt??""}`)
                }, [() => Zs()]), he("click", qe, _r), k(Be, qe)
              };
              J(Hr, Be => {
                n(z) && Be(nr)
              })
            }
            l(Rr), l(ce);
            var Lr = v(ce, 2),
              An = c(Lr),
              Xr = c(An),
              gs = c(Xr, !0);
            l(Xr);
            var Yr = v(Xr, 2),
              Tn = c(Yr);
            yn(Tn, {
              class: "size-4"
            });
            var xs = v(Tn);
            l(Yr), l(An), l(Lr), Y((Be, qe, Nt, pt, vr, kt, mr, qr, Wr, Nr, un, Gr, _n, Or, Sr) => {
              y(Jt, Be), y(er, qe), y(ze, ` ${Nt??""}`), y(C, ` ${pt??""}`), xt.disabled = !n(ct) || n(mt), rt.disabled = !n(Vt) || n(mt), Tt(yt, 1, `reverse-preview-canvas pixelated ${n(mt)?"opacity-40":""}`, "svelte-o0qsvj"), y(be, `${vr??""}
								${kt??""}`), y(tt, `${mr??""}
								${qr??""}`), y(Br, Wr), y(cn, Nr), y(ve, un), y(wt, `${Gr??""}${n(z)?"+":""}`), y(hr, _n), y(gs, Or), Yr.disabled = n(mt) || n(D) === null || !n(F), y(xs, ` ${Sr??""}`)
            }, [() => gu(), () => n(Se) ? `${O(n(Se).ts)} - ${Je(n(Se).ts)}` : "", () => n(Se) ? Je(n(Se).ts) : "", () => p(n(Ot)), () => n(Se) ? n(Se).eventCount.toLocaleString() : "0", () => zo(), () => n(Se) ? n(Se).pixelCount.toLocaleString() : "0", () => On(), () => Ai(), () => Wu(), () => n(f) === "historical" ? Zn() : Vn(), () => n(h).length.toLocaleString(), () => dl(), () => as(), () => Yi()]), he("click", xt, H), he("click", rt, L), he("click", Xr, () => e(!1)), he("click", Yr, se), k(ae, ee)
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
        y(V, ` ${ae??""}`), y(Ue, ee), y(B, ce), y(me, Pe), Tt(Me, 1, `tab transition-all ${n(f)==="depth"?"tab-active bg-primary! text-primary-content! border-primary/60! btn btn-primary btn-sm scale-[1.02] border! shadow-md!":"hover:brightness-105"}`, "svelte-o0qsvj"), Me.disabled = n(d) === "loading" || n(d) === "applying", y(Oe, Ce), Tt(We, 1, `tab transition-all ${n(f)==="historical"?"tab-active bg-primary! text-primary-content! border-primary/60! btn btn-primary btn-sm scale-[1.02] border! shadow-md!":"hover:brightness-105"}`, "svelte-o0qsvj"), We.disabled = n(d) === "loading" || n(d) === "applying", y(jt, dt)
      }, [() => os(), () => au({
        count: r.selectedPixelCount.toString()
      }), () => Ec(), () => n(f) === "historical" ? Zn() : n(f) === "depth" ? Vn() : mn(), () => Rl(), () => cc()]), he("click", Me, () => ne("depth")), he("click", We, () => ne("historical")), k(i, x)
    },
    $$slots: {
      default: !0
    }
  }), ln()
}
In(["click"]);
var Hv = new Set(["$$slots", "$$events", "$$legacy"]),
  Lv = Cr('<svg><path d="M200-80q-50 0-85-35t-35-85q0-39 22.5-69.5T160-313v-334q-35-13-57.5-43.5T80-760q0-50 35-85t85-35q39 0 69.5 22.5T313-800h334q12-35 42.5-57.5T760-880q50 0 85 35t35 85q0 40-22.5 70.5T800-647v334q35 13 57.5 43.5T880-200q0 50-35 85t-85 35q-39 0-69.5-22.5T647-160H313q-13 35-43.5 57.5T200-80Zm0-640q17 0 28.5-11.5T240-760q0-17-11.5-28.5T200-800q-17 0-28.5 11.5T160-760q0 17 11.5 28.5T200-720Zm560 0q17 0 28.5-11.5T800-760q0-17-11.5-28.5T760-800q-17 0-28.5 11.5T720-760q0 17 11.5 28.5T760-720ZM313-240h334q9-26 28-45t45-28v-334q-26-9-45-28t-28-45H313q-9 26-28 45t-45 28v334q26 9 45 28t28 45Zm447 80q17 0 28.5-11.5T800-200q0-17-11.5-28.5T760-240q-17 0-28.5 11.5T720-200q0 17 11.5 28.5T760-160Zm-560 0q17 0 28.5-11.5T240-200q0-17-11.5-28.5T200-240q-17 0-28.5 11.5T160-200q0 17 11.5 28.5T200-160Zm0-600Zm560 0Zm0 560Zm-560 0Z"></path></svg>');

function Xv(t, r) {
  let e = jr(r, Hv);
  var s = Lv();
  Er(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), k(t, s)
}
var Yv = new Set(["$$slots", "$$events", "$$legacy"]),
  Wv = Cr('<svg><path fill="currentColor" d="M9 14c1.381 0 2.631-.56 3.536-1.465C13.44 11.631 14 10.381 14 9s-.56-2.631-1.464-3.535C11.631 4.56 10.381 4 9 4s-2.631.56-3.536 1.465C4.56 6.369 4 7.619 4 9s.56 2.631 1.464 3.535A5 5 0 0 0 9 14m0 7c3.518 0 6-1 6-2c0-2-2.354-4-6-4c-3.75 0-6 2-6 4c0 1 2.25 2 6 2m12-9h-2v-2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2"></path></svg>');

function Nv(t, r) {
  let e = jr(r, Yv);
  var s = Wv();
  Er(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...e
  })), k(t, s)
}
var Gv = new Set(["$$slots", "$$events", "$$legacy"]),
  Ov = Cr('<svg><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"></circle><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>');

function Vv(t, r) {
  let e = jr(r, Gv);
  var s = Ov();
  Er(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...e
  })), k(t, s)
}
var Zv = new Set(["$$slots", "$$events", "$$legacy"]),
  Kv = Cr('<svg><rect x="6" y="6" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" rx="2"></rect><rect x="10" y="10" width="4" height="4" fill="currentColor" rx="1"></rect></svg>');

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

  function D(S, E, O) {
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
      x: D(n(d).x, S.left - O, S.right - O - E.width),
      y: D(n(d).y, S.top - Ie, S.bottom - Ie - E.height)
    }, !0)
  }

  function He() {
    var S, E, O, Ie;
    f && ((E = (S = f.handle).hasPointerCapture) != null && E.call(S, f.pointerId) && ((Ie = (O = f.handle).releasePointerCapture) == null || Ie.call(O, f.pointerId)), f = void 0, document.body.style.userSelect = h ?? "", h = void 0, K())
  }

  function Le(S) {
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
          x: D(f.startPosX + O.clientX - f.startX, f.bounds.left - f.baseLeft, f.bounds.right - f.baseLeft - f.panelWidth),
          y: D(f.startPosY + O.clientY - f.startY, f.bounds.top - f.baseTop, f.bounds.bottom - f.baseTop - f.panelHeight)
        }, !0)
      },
      E = O => {
        (f == null ? void 0 : f.pointerId) === O.pointerId && He()
      };
    return window.addEventListener("pointermove", S), window.addEventListener("pointerup", E), window.addEventListener("pointercancel", E), window.addEventListener("resize", K), () => {
      window.removeEventListener("pointermove", S), window.removeEventListener("pointerup", E), window.removeEventListener("pointercancel", E), window.removeEventListener("resize", K), He()
    }
  });
  var $ = mm();
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
  Xv(it, {
    class: "size-4"
  }), l(Xe);
  var Ze = v(Xe, 2),
    Te = c(Ze, !0);
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
  Vv(cr, {
    class: "size-4"
  }), l(Ye);
  var Se = v(Ye, 2);
  let Ot;
  var vt = c(Se);
  Qv(vt, {
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
        Nv(S, {
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
  ra(Zt, {
    class: "size-4"
  }), l(Et), l(ie), l(Re);
  var _r = v(Re, 2),
    Yt = c(_r);
  {
    var dr = S => {
        var E = Jv();
        k(S, E)
      },
      br = S => {
        var E = Jn(),
          O = c(E),
          Ie = c(O, !0);
        l(O), l(E), Y(() => y(Ie, r.emptyLabel)), k(S, E)
      },
      fr = S => {
        var E = vm(),
          O = ir(E),
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
          var se = j => {
              var B = $v(),
                le = c(B, !0);
              l(B), Y(() => y(le, r.activeFilterCount)), k(j, B)
            },
            i = j => {
              var B = em(),
                le = c(B, !0);
              l(B), Y(me => y(le, me), [() => va()]), k(j, B)
            };
          J(W, j => {
            r.hasActiveFilters ? j(se) : j(i, -1)
          })
        }
        l(q);
        var _ = v(q, 2),
          x = c(_);
        l(_), l(p), l(Je);
        var I = v(Je, 2),
          b = c(I),
          A = c(b, !0);
        l(b);
        var T = v(b, 2),
          V = c(T, !0);
        l(T), l(I), l(Qe);
        var oe = v(Qe, 2);
        {
          var Ue = j => {
            var B = rm(),
              le = c(B),
              me = c(le);
            {
              var de = xe => {
                  var rt = tm(),
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
                      y(Ve, ya[te]), tt !== (tt = te) && (be.value = (be.__value = te) ?? "")
                    }), k(Fe, be)
                  }), l(Ne), l(rt), Y((Fe, te) => {
                    y(et, Fe), y(yt, te)
                  }, [() => ba(), () => jf()]), fn(Ne, () => e().role, Fe => e().role = Fe), k(xe, rt)
                },
                Me = N(() => gr.hasPermission(xr.tools.selectPixel.seeRole));
              J(me, xe => {
                n(Me) && xe(de)
              })
            }
            var Oe = v(me, 2),
              We = c(Oe),
              jt = c(We, !0);
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
            var Ae = v(ze, 2),
              C = c(Ae),
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
            }), l(Ae), l(g), l(le), l(B), Y((xe, rt, bt, et, Ne, nt, yt, ot, Fe, te, be, Ve, tt) => {
              y(jt, xe), y(Dt, rt), y(Kt, bt), y(Qt, et), y(ee, Ne), y(Ce, nt), Ee(dt, "placeholder", yt), y($t, ot), Ee(er, "placeholder", Fe), y(Wt, te), Ee(X, "placeholder", be), y(fe, Ve), y(ge, tt)
            }, [() => ia(), () => Kn(), () => oa(), () => hn(), () => Xn(), () => ua(), () => Tp(), () => Wp(), () => vh(), () => nh(), () => zh(), () => Yn(), () => Kn()]), fn($e, () => e().punishment, xe => e().punishment = xe), pn(dt, () => e().alliance, xe => e().alliance = xe), pn(er, () => e().minUserId, xe => e().minUserId = xe), pn(X, () => e().maxUserId, xe => e().maxUserId = xe), fn(Ae, () => e().colorIdx, xe => e().colorIdx = xe), Ln(3, B, () => Nn, () => ({
              duration: 100
            })), k(j, B)
          };
          J(oe, j => {
            n(o) && j(Ue)
          })
        }
        l(Ie), l(O);
        var _e = v(O, 2);
        {
          var Z = j => {
              var B = Jn(),
                le = c(B),
                me = c(le, !0);
              l(le), l(B), Y(de => y(me, de), [() => Ks()]), k(j, B)
            },
            we = j => {
              var B = hm(),
                le = c(B),
                me = c(le),
                de = c(me),
                Me = c(de),
                Oe = c(Me);
              Pr(Oe), l(Me);
              var We = v(Me),
                jt = c(We),
                $e = v(jt),
                ut = c($e);
              na(ut, {
                class: "size-3"
              }), l($e);
              var Dt = v($e, 2);
              {
                var gt = X => {
                    var g = nm(),
                      ze = c(g);
                    wn(ze, {
                      class: "size-4"
                    }), l(g), Y(fe => {
                      Ee(g, "data-tip", fe), g.disabled = a().timeout
                    }, [() => hn()]), he("click", g, function(...fe) {
                      var Ae;
                      (Ae = r.ontimeout) == null || Ae.apply(this, fe)
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
                    var g = sm(),
                      ze = c(g);
                    Hn(ze, {
                      class: "size-4"
                    }), l(g), Y(fe => {
                      Ee(g, "data-tip", fe), g.disabled = a().ban
                    }, [() => _a()]), he("click", g, function(...fe) {
                      var Ae;
                      (Ae = r.onban) == null || Ae.apply(this, fe)
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
                    var g = am(),
                      ze = c(g);
                    {
                      var fe = C => {
                          var ge = Kr();
                          k(C, ge)
                        },
                        Ae = C => {
                          la(C, {
                            class: "size-4"
                          })
                        };
                      J(ze, C => {
                        a().phone ? C(fe) : C(Ae, -1)
                      })
                    }
                    l(g), Y(C => {
                      Ee(g, "data-tip", C), g.disabled = a().phone || !r.hasSelection
                    }, [() => ga()]), he("click", g, function(...C) {
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
                    var g = im(),
                      ze = c(g);
                    {
                      var fe = C => {
                          var ge = Kr();
                          k(C, ge)
                        },
                        Ae = C => {
                          sa(C, {
                            class: "size-4"
                          })
                        };
                      J(ze, C => {
                        a().clear ? C(fe) : C(Ae, -1)
                      })
                    }
                    l(g), Y(C => {
                      Ee(g, "data-tip", C), g.disabled = a().clear || !r.hasSelection
                    }, [() => da()]), he("click", g, function(...C) {
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
                    var g = om(),
                      ze = c(g);
                    {
                      var fe = C => {
                          var ge = Kr();
                          k(C, ge)
                        },
                        Ae = C => {
                          yn(C, {
                            class: "size-4"
                          })
                        };
                      J(ze, C => {
                        a().reverse ? C(fe) : C(Ae, -1)
                      })
                    }
                    l(g), Y(C => {
                      Ee(g, "data-tip", C), g.disabled = a().reverse || !r.hasSelection
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
                var fe = pm();
                let Ae;
                var C = c(fe),
                  ge = c(C);
                Pr(ge), l(C);
                var xt = v(C),
                  xe = c(xt);
                {
                  var rt = te => {
                      var be = lm(),
                        Ve = v(ir(be), 2),
                        tt = c(Ve, !0);
                      l(Ve), Y(Rt => y(tt, Rt), [() => en()]), k(te, be)
                    },
                    bt = te => {
                      var be = _m(),
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
                            var hr = cm(),
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
                          var ke = um(),
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
                            }), l(ke), Y(ft => Ee(ke, "data-tip", ft), [() => Xn()]), k(ve, ke)
                          },
                          Fr = ve => {
                            var ke = es(),
                              wt = c(ke);
                            wn(wt, {
                              class: "text-error size-4"
                            }), l(ke), Y(ft => Ee(ke, "data-tip", ft), [() => hn()]), k(ve, ke)
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
                    var be = dm(),
                      Ve = c(be);
                    l(be), Y((tt, Rt) => y(Ve, `${tt??""}
														${Rt??""}`), [() => ma(), () => n(g).totalPixelCount.toLocaleString(navigator.language)]), k(te, be)
                  };
                  J(nt, te => {
                    n(g).filteredPixelCount !== n(g).totalPixelCount && te(yt)
                  })
                }
                var ot = v(nt, 2);
                {
                  var Fe = te => {
                    var be = fm(),
                      Ve = c(be);
                    l(be), Y(tt => y(Ve, `(${tt??""})`), [() => n(g).selectedFilteredCount.toLocaleString(navigator.language)]), k(te, be)
                  };
                  J(ot, te => {
                    n(g).selectedFilteredCount > 0 && !n(ze) && te(Fe)
                  })
                }
                l(et), l(fe), Y(te => {
                  Ae = Tt(fe, 1, "hover:bg-base-300 cursor-pointer", null, Ae, {
                    "bg-base-200": n(g).selectedFilteredCount > 0
                  }), Bn(ge, n(ze)), ge.indeterminate = !n(ze) && n(g).selectedFilteredCount > 0, y(Ne, `${te??""} `)
                }, [() => n(g).filteredPixelCount.toLocaleString(navigator.language)]), he("click", fe, () => r.ontogglerow(n(g).id)), k(X, fe)
              }), l(Wt), l(le), l(B), Y((X, g, ze) => {
                Bn(Oe, r.filteredSelectionState !== "none"), Oe.indeterminate = r.filteredSelectionState === "some", y(jt, `${X??""} `), Ee($e, "data-tip", g), y(rr, ` ${ze??""}`)
              }, [() => $r(), () => fa(), () => xa()]), he("click", Oe, function(...X) {
                var g;
                (g = r.ontogglefiltered) == null || g.apply(this, X)
              }), he("click", $e, function(...X) {
                var g;
                (g = r.oncopy) == null || g.apply(this, X)
              }), k(j, B)
            };
          J(_e, j => {
            r.rows.length === 0 ? j(Z) : j(we, -1)
          })
        }
        Y((j, B, le, me, de, Me, Oe) => {
          Tt(H, 1, `text-base-content/60 mt-0.5 text-xs transition-transform duration-200 ${n(o)?"rotate-180":""}`), y(ne, j), y(x, `${B??""}
											${le??""} -
											${me??""}
											${de??""}`), b.disabled = r.rows.length === 0, y(A, Me), T.disabled = !r.hasActiveFilters, y(V, Oe)
        }, [() => pa(), () => r.rows.length.toLocaleString(navigator.language), () => mi(), () => r.filteredPixelCount.toLocaleString(navigator.language), () => Gn(), () => r.filteredSelectionState === "all" ? wf() : cf(), () => ha()]), he("click", Je, () => m(o, !n(o))), he("click", b, function(...j) {
          var B;
          (B = r.ontogglefiltered) == null || B.apply(this, j)
        }), he("click", T, function(...j) {
          var B;
          (B = r.onresetfilters) == null || B.apply(this, j)
        }), k(S, E)
      };
    J(Yt, S => {
      r.loading ? S(dr) : r.totalRowCount === 0 ? S(br, 1) : S(fr, -1)
    })
  }
  l(_r), l(F), l(ue), l($), ss($, S => m(u, S), () => n(u)), Y((S, E, O, Ie, Qe, Je, p) => {
    ye = Dn($, "", ye, {
      transform: `translate3d(${n(d).x}px, ${n(d).y}px, 0)`,
      "will-change": "transform"
    }), y(Te, S), y(De, `(${E??""}: ${O??""})`), re = Tt(Ye, 1, "btn btn-xs tooltip tooltip-bottom", null, re, {
      "btn-soft": r.activeTool !== "brush-circle",
      "btn-primary": r.activeTool === "brush-circle"
    }), Ee(Ye, "data-tip", Ie), Ee(Ye, "aria-pressed", r.activeTool === "brush-circle"), Ot = Tt(Se, 1, "btn btn-xs tooltip tooltip-bottom", null, Ot, {
      "btn-soft": r.activeTool !== "brush-square",
      "btn-primary": r.activeTool === "brush-square"
    }), Ee(Se, "data-tip", Qe), Ee(Se, "aria-pressed", r.activeTool === "brush-square"), Vt = Tt(ct, 1, "btn btn-xs tooltip tooltip-bottom", null, Vt, {
      "btn-soft": r.activeTool !== "user-picker",
      "btn-primary": r.activeTool === "user-picker"
    }), Ee(ct, "data-tip", Je), Ee(ct, "aria-pressed", r.activeTool === "user-picker"), Ee(Et, "aria-label", p)
  }, [() => ip(), () => Gn(), () => r.totalSelectedPixels.toLocaleString(navigator.language), () => Xh({
    size: r.brushDiameter
  }), () => tv({
    size: r.brushDiameter
  }), () => Zd(), () => as()]), he("pointerdown", Re, Le), he("click", Ye, () => r.ontoolchange("brush-circle")), he("click", Se, () => r.ontoolchange("brush-square")), he("click", ct, () => r.ontoolchange("user-picker")), he("click", Et, function(...S) {
    var E;
    (E = r.onclose) == null || E.apply(this, S)
  }), Ln(3, ue, () => Nn, () => ({
    duration: 100
  })), k(t, $), ln()
}
In(["pointerdown", "click"]);

function xm() {
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

function Ar(t) {
  return t.tileXs.length
}

function lr(t, r = Ut.colors.length) {
  const e = qn(t.colorIdx);
  if (!(e === void 0 || e < 0 || e >= r)) return e
}

function bm(t, r) {
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
  return a !== void 0 && t.id > a ? !1 : bm(t, r)
}

function wm(t, r, e = lr(r)) {
  return ym(t, r) ? e === void 0 ? Ar(t.painted) : t.painted.colorCounts[e] ?? 0 : 0
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
var Lt, zt;
class Im {
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
const Mm = 1e4;

function Sn(t, r) {
  return `${t}:${r}`
}
var Tr, Ur, Xt;
class Pm {
  constructor(r, e) {
    sr(this, "selectedUsers", new kn);
    sr(this, "selection", new Im);
    qt(this, Tr, G(on(xm())));
    sr(this, "pixels", new Map);
    sr(this, "pixelsByTile", new Map);
    qt(this, Ur, G([]));
    qt(this, Xt, G(0));
    this.tileSize = r, this.renderer = e
  }
  get filters() {
    return n(U(this, Tr))
  }
  set filters(r) {
    m(U(this, Tr), r, !0)
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
    for (const e of this.selectedUsers.values()) r += Ar(e.painted);
    return r
  }
  get filteredPixelCountByUser() {
    n(U(this, Xt));
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
      totalPixelCount: Ar(e.painted),
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
    return this.pixels.size > 0 && Ar(r.painted) === this.pixels.size
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
      this.selection.countForUser(s) - a + a >= Ar(o.painted) && (this.selectEntireUser(o, !0), e = !0)
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
        const D = this.pixelsByTile.get(`${M}:${z}`);
        if (D)
          for (const K of D) Sm(K.x, K.y, r, e, s, a) && h.push(K)
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
Tr = new WeakMap, Ur = new WeakMap, Xt = new WeakMap;

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
const Am = 3e4,
  Tm = 1e6;

function Um(t, r, e, s, a) {
  var He;
  const o = ((He = t[0]) == null ? void 0 : He.durationUs) ?? Math.max(1, Math.round(83333.33333333333)),
    u = Jm(t),
    d = Qm(t),
    f = Cm();
  let h = ts(t, e, s, o, u, a, 0);
  const M = f.byteLength + h.byteLength + 8;
  h = ts(t, e, s, o, u, a, M);
  const D = Km("mdat", d),
    K = [f, h, D];
  for (const Le of t) K.push(Le.data);
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
  return Ct("trak", [Dm(r, e, a), Bm(t, r, e, s, a, o, u)])
}

function Dm(t, r, e) {
  return lt("tkhd", 0, 7, [w(0), w(0), w(1), w(0), w(e), w(0), w(0), je(0), je(0), je(0), je(0), ls(), w(t << 16), w(r << 16)])
}

function Bm(t, r, e, s, a, o, u) {
  return Ct("mdia", [Rm(a), Fm(), Hm(t, r, e, s, o, u)])
}

function Rm(t) {
  return lt("mdhd", 0, 0, [w(0), w(0), w(1e6), w(t), je(0), je(0)])
}

function Fm() {
  return lt("hdlr", 0, 0, [w(0), ar("vide"), w(0), w(0), w(0), ar("VideoHandler\0")])
}

function Hm(t, r, e, s, a, o) {
  return Ct("minf", [lt("vmhd", 0, 1, [je(0), je(0), je(0), je(0)]), Lm(), Xm(t, r, e, s, a, o)])
}

function Lm() {
  const t = lt("url ", 0, 1, []),
    r = lt("dref", 0, 0, [w(1), t]);
  return Ct("dinf", [r])
}

function Xm(t, r, e, s, a, o) {
  return Ct("stbl", [Ym(r, e, a), Nm(t.length, s), Gm(t.length), Om(t), Vm(o), Zm(t)])
}

function Ym(t, r, e) {
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
  return ht([21, 73, 169, 102], [...st([42, 215, 177], Tm), ...ag([68, 137], e), ...nn([77, 128], "wplace"), ...nn([87, 65], "wplace")])
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
    (e < 0 || o - e > Am) && (s.length > 0 && r.push(...ht([31, 67, 182, 117], s)), e = o, s = st([231], e)), s.push(...sg(a, e))
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
      Te = e.getUint8(F + 12);
    F += 13;
    const It = Ge * o + it - M,
      De = Xe * o + Ze - D;
    if (It < 0 || De < 0 || It >= h || De >= z) continue;
    const ie = Math.floor(It / K),
      Q = Math.floor(De / K);
    if (ie < 0 || Q < 0 || ie >= d || Q >= f) continue;
    ie < Le && (Le = ie), Q < $ && ($ = Q), ie > ye && (ye = ie), Q > ue && (ue = Q);
    const Ye = (Q * d + ie) * 4;
    if (Te === 0) {
      pg(u, Ye, ie, Q, a);
      continue
    }
    const re = Ut.colors[Math.min(Te, He - 1)];
    u[Ye] = re.rgb[0], u[Ye + 1] = re.rgb[1], u[Ye + 2] = re.rgb[2], u[Ye + 3] = 255
  }
  if (!(ye < Le || ue < $)) return {
    minX: Le,
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
    D = s.outputHeight - h - M;
  e.fillStyle = "rgba(15, 23, 42, 0.78)", e.fillRect(M, D, z, h), e.fillStyle = "#f8fafc", e.fillText(o, M + d, s.outputHeight - M)
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
async function A0(t, r) {
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

function xg(t, r, e, s, a = 64) {
  return t.map(o => {
    const u = gg(r.get(vs(o)) ?? [], e),
      d = (u == null ? void 0 : u.userId) ?? 0;
    return ms(o, (u == null ? void 0 : u.newColor) ?? 0, d, s(d), a)
  })
}

function bg(t, r, e, s = 64) {
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

function T0(t, r) {
  an(r, !0);
  const e = p => {
      var q = wg(),
        H = c(q);
      {
        var L = W => {
            var se = yg();
            k(W, se)
          },
          ne = W => {
            ca(W, {
              class: "size-4"
            })
          };
        J(H, W => {
          n(z) ? W(L) : W(ne, -1)
        })
      }
      l(q), Y(W => {
        Ee(q, "data-tip", W), q.disabled = n(z) || n(a)
      }, [() => Ea()]), he("click", q, Ot), k(p, q)
    },
    s = new Pm(64, {
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
    M = G(!1),
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
    Te = N(() => (s.changeToken, s.selectedUserIds())),
    It = N(() => ({
      minGlobalX: r.area.minX,
      minGlobalY: r.area.minY,
      maxGlobalX: r.area.maxX,
      maxGlobalY: r.area.maxY
    }));
  Qr(() => {
    const p = `${r.allianceId}:${r.area.minX}:${r.area.minY}:${r.area.maxX}:${r.area.maxY}`;
    p !== d && (d = p, De(Ls(() => r.eventHwm)))
  }), Es(() => {
    f += 1, s.clear()
  });
  async function De(p = r.eventHwm) {
    var H;
    const q = ++f;
    m(a, !0), s.clear();
    try {
      const L = await At.getAdminAllianceHqSelectArea(r.allianceId, r.area, p);
      if (q !== f) return;
      const ne = new Map,
        W = [];
      let se = 0;
      for (const b of L.chunks) {
        const A = b.bounds.maxX - b.bounds.minX + 1,
          T = b.bounds.maxY - b.bounds.minY + 1;
        for (let V = 0; V < T; V += 1)
          for (let oe = 0; oe < A; oe += 1) {
            const Ue = V * A + oe,
              _e = b.bounds.minX + oe,
              Z = b.bounds.minY + V,
              we = b.paintedBy[Ue],
              j = b.colors[Ue],
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
            if (ne.has(we) || ne.set(we, de), de.tileXs.push(le), de.tileYs.push(me), de.pixelXs.push(_e - le * 64), de.pixelYs.push(Z - me * 64), de.colorIdxs.push(j), de.colorCounts[j] += 1, (H = de.eventIds) == null || H.push(B), W.push({
                key: Sn(_e, Z),
                userId: we,
                x: _e,
                y: Z,
                tile: [le, me],
                pixel: [_e - le * 64, Z - me * 64],
                colorIdx: j,
                eventId: B || void 0
              }), se += 1, se % 5e4 === 0 && (await new Promise(Me => setTimeout(Me, 0)), q !== f)) return
          }
      }
      const i = [...ne.keys()].filter(b => b > 0),
        _ = i.length > 0 ? (await At.getMultipleUsersInfoById(i)).users : [];
      if (q !== f) return;
      const x = new Map(_.map(b => [b.id, b])),
        I = [...ne.entries()].map(([b, A]) => ({
          ...x.get(b) ?? {
            id: b,
            name: b === 0 ? en() : $r(),
            role: "user",
            deleted: b !== 0
          },
          painted: A
        }));
      I.sort((b, A) => b.id === 0 ? 1 : A.id === 0 ? -1 : A.painted.tileXs.length - b.painted.tileXs.length), s.load(I, W), m(o, L.eventHwm, !0), m(u, L.anchor, !0)
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
    (H ? s.deselectUser(L.userId) : s.selectUser(L.userId)) && (Vr.plop.play(), pe.success(H ? Mv({
      name: (ne == null ? void 0 : ne.name) ?? $r()
    }) : pv({
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
    return n(Te).map(p => n(Xe).get(p)).filter(p => !!p).map(p => ({
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
    m(K, q, !0), m(D, p, !0), m(He, Se(), !0), m(M, !0)
  }
  async function ct() {
    if (n(Te).length === 0) {
      pe.info(gn());
      return
    }
    m(h, !0);
    try {
      const p = await At.postSelectAreaPhoneVerification(n(Te));
      pe.success(Q_({
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
      const q = await At.reverseAdminAllianceHqPixels(r.allianceId, p.map(H => ({
        x: H.x,
        y: H.y,
        eventId: H.eventId
      })), "HQ Select Area clear", !0);
      pe.success(ud({
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
      const W = await At.getAllianceHqWaybackEvents(r.allianceId, {
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

  function Et(p) {
    return xg(n(ue), ye, p, ur)
  }

  function Zt(p) {
    return bg(n(it), Et(p), ur)
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
      ne = new Map(Et(L).map(i => [`${i.tileX*64+i.pixelX}:${i.tileY*64+i.pixelY}`, i.color])),
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
    const se = await At.reverseAdminAllianceHqPixels(r.allianceId, W.map(({
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
    if (n(Te).length === 0) {
      pe.info(gn());
      return
    }
    navigator.clipboard.writeText(n(Te).join(", ")), pe.success(Dd())
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
      H = N(() => n(Ze).length > 0);
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
  var O = v(E, 2);
  {
    var Ie = p => {
      Fv(p, {
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
            return n(M)
          },
          set open(H) {
            m(M, H, !0)
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
  is(s, () => r.children ?? ns), l(e), Y(() => Tt(e, 1, `bg-base-100/60 border-base-content/20 pointer-events-none absolute -top-15 left-1/2 line-clamp-1 flex w-max -translate-x-1/2 items-center gap-1 rounded-full border-2 px-3 py-1.5 select-none ${r.class??""}`)), k(t, e), ln()
}
export {
  Xv as A, U0 as I, Fv as R, kn as S, b0 as a, T0 as b, w0 as c, Ea as d, mi as e, Pm as f, Ar as g, vg as h, I0 as i, Mv as j, pv as k, k0 as l, Sn as m, x0 as n, gm as o, Gn as p, en as q, at as r, y0 as s, S0 as t, P0 as u, M0 as v, q0 as w, z0 as x, A0 as y, mg as z
};