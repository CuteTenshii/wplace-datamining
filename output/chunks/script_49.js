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
var jn = (t, r, e) => Ts(As(t), e, r);
import {
  g as P
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  o as Cs,
  a as js
} from "./BRhudbFj.js";
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
  bJ as Bs,
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
} from "./sZguypfn.js";
import {
  i as J
} from "./DKaXnpGW.js";
import {
  b as jr,
  a as Tt,
  s as je,
  e as Dn,
  r as Pr,
  f as fn,
  h as Bn
} from "./Cy1wQjPv.js";
import {
  g as Xs
} from "./BK3fh9dN.js";
import {
  A as Vr
} from "./DGS4hEgV.js";
import {
  R as Ys
} from "./Dy3XNLEP.js";
import {
  s as y
} from "./jdzncLHG.js";
import {
  e as Jr
} from "./CMCZ5wMT.js";
import {
  b as ss
} from "./BNiVyqu1.js";
import {
  r as Er,
  p as or
} from "./BwfjFjwf.js";
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
} from "./DTIeP7CF.js";
import {
  D as Os
} from "./CH2ZU_CU.js";
import {
  A as Fn
} from "./BoNx5zGa.js";
import {
  R as yn
} from "./BtEsezY3.js";
import {
  T as wn,
  G as Hn
} from "./BrRlyYbt.js";
import {
  W as Vs
} from "./BZEA_qAg.js";
import {
  c as as
} from "./BKBS1EOp.js";
import {
  l as Zs,
  p as $r,
  a as Ks
} from "./DPn4RM89.js";
import {
  s as is
} from "./854hxgvD.js";
import {
  t as Ln
} from "./CTjK_qnz.js";
import {
  b as pn
} from "./BtsRBOoI.js";
import {
  P as Qs
} from "./C_bJK8gT.js";
import {
  R as Js
} from "./UbNeLCvz.js";
import {
  b as Xn,
  S as $s
} from "./5oP6vbY4.js";
import {
  S as ea
} from "./DCVuIglg.js";
import {
  C as ta
} from "./DCtiuCwZ.js";
import {
  C as ra
} from "./BEcJUggl.js";
import {
  I as na
} from "./CDeYuNKl.js";
import {
  c as sa,
  p as aa,
  n as ia,
  M as oa,
  D as la
} from "./Q1O3AxbT.js";
import {
  a as ca
} from "./B0JoJohi.js";
import {
  b as ua
} from "./CtsjoaOH.js";
import {
  c as _a
} from "./jEDRT1k8.js";
import {
  c as Yn,
  a as da
} from "./BORKHbnj.js";
import {
  f as fa,
  r as pa,
  o as ha,
  a as va
} from "./4jZa2FwG.js";
import {
  p as ma
} from "./AoJtTHWG.js";
import {
  p as ga
} from "./WRaI8Fie.js";
import {
  r as xa
} from "./C5ukCcxH.js";
import {
  t as hn
} from "./BJMWNMzA.js";
import {
  P as xr
} from "./DwATQdoq.js";
import {
  R as ba
} from "./TTfhDrzz.js";
import {
  g as Zr,
  a as Wn
} from "./Dwd6JCtZ.js";
import {
  s as Nn
} from "./BI5KFv7B.js";
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
  Aa = () => "Скачать",
  Ta = () => "Завантажити",
  Ua = () => "Tải xuống",
  Ca = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? ya() : e === "pt" ? wa() : e === "ch" ? ka() : e === "de" ? qa() : e === "es" ? Sa() : e === "fr" ? Ia() : e === "it" ? Ma() : e === "jp" ? Pa() : e === "pl" ? za() : e === "ru" ? Aa() : e === "uk" ? Ta() : Ua()
  },
  ja = () => "No alliance",
  Ea = () => "Sem aliança",
  Da = () => "无联盟",
  Ba = () => "Ohne Allianz",
  Ra = () => "Sin alianza",
  Fa = () => "Sans alliance",
  Ha = () => "Senza alleanza",
  La = () => "同盟なし",
  Xa = () => "Bez sojuszu",
  Ya = () => "Без альянса",
  Wa = () => "Без альянсу",
  Na = () => "Không liên minh",
  T0 = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? ja() : e === "pt" ? Ea() : e === "ch" ? Da() : e === "de" ? Ba() : e === "es" ? Ra() : e === "fr" ? Fa() : e === "it" ? Ha() : e === "jp" ? La() : e === "pl" ? Xa() : e === "ru" ? Ya() : e === "uk" ? Wa() : Na()
  },
  Ga = () => "Pixels",
  Oa = () => "Pixels",
  Va = () => "像素",
  Za = () => "Pixel",
  Ka = () => "Píxeles",
  Qa = () => "Pixels",
  Ja = () => "Pixel",
  $a = () => "ピクセル",
  ei = () => "Piksele",
  ti = () => "Пиксели",
  ri = () => "Пікселі",
  ni = () => "Pixel",
  Gn = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Ga() : e === "pt" ? Oa() : e === "ch" ? Va() : e === "de" ? Za() : e === "es" ? Ka() : e === "fr" ? Qa() : e === "it" ? Ja() : e === "jp" ? $a() : e === "pl" ? ei() : e === "ru" ? ti() : e === "uk" ? ri() : ni()
  },
  si = () => "Players",
  ai = () => "Jogadores",
  ii = () => "玩家",
  oi = () => "Spieler",
  li = () => "Jugadores",
  ci = () => "Joueurs",
  ui = () => "Giocatori",
  _i = () => "プレイヤー",
  di = () => "Gracze",
  fi = () => "Игроки",
  pi = () => "Гравці",
  hi = () => "Người chơi",
  vi = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? si() : e === "pt" ? ai() : e === "ch" ? ii() : e === "de" ? oi() : e === "es" ? li() : e === "fr" ? ci() : e === "it" ? ui() : e === "jp" ? _i() : e === "pl" ? di() : e === "ru" ? fi() : e === "uk" ? pi() : hi()
  },
  mi = () => "Applying will restore the selected pixels to this snapshot.",
  gi = () => "Ao aplicar, os pixels selecionados serão restaurados para este momento.",
  xi = () => "应用后将把选定像素恢复到此快照。",
  bi = () => "Beim Anwenden werden die ausgewählten Pixel auf diesen Zeitpunkt zurückgesetzt.",
  yi = () => "Al aplicar, los píxeles seleccionados se restaurarán a esta instantánea.",
  wi = () => "Appliquer restaurera les pixels sélectionnés vers cet instantané.",
  ki = () => "Applicando verranno ripristinati i pixel selezionati a questa istantanea.",
  qi = () => "適用すると、選択したピクセルがこのスナップショットに復元されます。",
  Si = () => "Zastosowanie przywróci wybrane piksele do tej migawki.",
  Ii = () => "При применении выбранные пиксели будут восстановлены до этого снимка.",
  Mi = () => "При застосуванні вибрані пікселі будуть відновлені до цього знімка.",
  Pi = () => "Áp dụng sẽ khôi phục các pixel đã chọn về ảnh chụp này.",
  zi = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? mi() : e === "pt" ? gi() : e === "ch" ? xi() : e === "de" ? bi() : e === "es" ? yi() : e === "fr" ? wi() : e === "it" ? ki() : e === "jp" ? qi() : e === "pl" ? Si() : e === "ru" ? Ii() : e === "uk" ? Mi() : Pi()
  },
  Ai = () => "Apply Revert",
  Ti = () => "Aplicar Reversão",
  Ui = () => "应用回退",
  Ci = () => "Wiederherstellung anwenden",
  ji = () => "Aplicar Reversión",
  Ei = () => "Appliquer la Restauration",
  Di = () => "Applica ripristino",
  Bi = () => "復元を適用",
  Ri = () => "Zastosuj cofnięcie",
  Fi = () => "Применить откат",
  Hi = () => "Застосувати відкат",
  Li = () => "Áp dụng hoàn tác",
  Xi = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Ai() : e === "pt" ? Ti() : e === "ch" ? Ui() : e === "de" ? Ci() : e === "es" ? ji() : e === "fr" ? Ei() : e === "it" ? Di() : e === "jp" ? Bi() : e === "pl" ? Ri() : e === "ru" ? Fi() : e === "uk" ? Hi() : Li()
  },
  Yi = t => `Successfully reverted ${t.count} pixels`,
  Wi = t => `${t.count} pixels revertidos com sucesso`,
  Ni = t => `成功回退 ${t.count} 个像素`,
  Gi = t => `${t.count} Pixel erfolgreich zurückgesetzt`,
  Oi = t => `${t.count} píxeles revertidos exitosamente`,
  Vi = t => `${t.count} pixels restaurés avec succès`,
  Zi = t => `${t.count} pixel ripristinati con successo`,
  Ki = t => `${t.count} ピクセルの復元に成功しました`,
  Qi = t => `Pomyślnie cofnięto ${t.count} pikseli`,
  Ji = t => `Успешно откачено ${t.count} пикселей`,
  $i = t => `Успішно відкочено ${t.count} пікселів`,
  eo = t => `Đã hoàn tác thành công ${t.count} pixel`,
  to = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Yi(t) : e === "pt" ? Wi(t) : e === "ch" ? Ni(t) : e === "de" ? Gi(t) : e === "es" ? Oi(t) : e === "fr" ? Vi(t) : e === "it" ? Zi(t) : e === "jp" ? Ki(t) : e === "pl" ? Qi(t) : e === "ru" ? Ji(t) : e === "uk" ? $i(t) : eo(t)
  },
  ro = () => "Reverting pixels...",
  no = () => "Revertendo pixels...",
  so = () => "正在回退像素...",
  ao = () => "Pixel werden zurückgesetzt...",
  io = () => "Revirtiendo píxeles...",
  oo = () => "Restauration des pixels...",
  lo = () => "Ripristino pixel in corso...",
  co = () => "ピクセルを復元中...",
  uo = () => "Cofanie pikseli...",
  _o = () => "Откат пикселей...",
  fo = () => "Відкат пікселів...",
  po = () => "Đang hoàn tác pixel...",
  ho = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? ro() : e === "pt" ? no() : e === "ch" ? so() : e === "de" ? ao() : e === "es" ? io() : e === "fr" ? oo() : e === "it" ? lo() : e === "jp" ? co() : e === "pl" ? uo() : e === "ru" ? _o() : e === "uk" ? fo() : po()
  },
  vo = () => "Events",
  mo = () => "Eventos",
  go = () => "事件",
  xo = () => "Ereignisse",
  bo = () => "Eventos",
  yo = () => "Événements",
  wo = () => "Eventi",
  ko = () => "イベント",
  qo = () => "Zdarzenia",
  So = () => "События",
  Io = () => "Події",
  Mo = () => "Sự kiện",
  Po = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? vo() : e === "pt" ? mo() : e === "ch" ? go() : e === "de" ? xo() : e === "es" ? bo() : e === "fr" ? yo() : e === "it" ? wo() : e === "jp" ? ko() : e === "pl" ? qo() : e === "ru" ? So() : e === "uk" ? Io() : Mo()
  },
  zo = () => "Pixels",
  Ao = () => "Pixels",
  To = () => "像素",
  Uo = () => "Pixel",
  Co = () => "Píxeles",
  jo = () => "Pixels",
  Eo = () => "Pixel",
  Do = () => "ピクセル",
  Bo = () => "Piksele",
  Ro = () => "Пиксели",
  Fo = () => "Пікселі",
  Ho = () => "Pixel",
  On = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? zo() : e === "pt" ? Ao() : e === "ch" ? To() : e === "de" ? Uo() : e === "es" ? Co() : e === "fr" ? jo() : e === "it" ? Eo() : e === "jp" ? Do() : e === "pl" ? Bo() : e === "ru" ? Ro() : e === "uk" ? Fo() : Ho()
  },
  Lo = () => "Choose the moment you want to restore.",
  Xo = () => "Escolha o momento que você quer restaurar.",
  Yo = () => "选择你想恢复的时刻。",
  Wo = () => "Wähle den Zeitpunkt, den du wiederherstellen willst.",
  No = () => "Elige el momento que quieres restaurar.",
  Go = () => "Choisissez le moment que vous voulez restaurer.",
  Oo = () => "Scegli il momento che vuoi ripristinare.",
  Vo = () => "復元したい時点を選択してください。",
  Zo = () => "Wybierz moment, który chcesz przywrócić.",
  Ko = () => "Выберите момент, который хотите восстановить.",
  Qo = () => "Оберіть момент, який хочете відновити.",
  Jo = () => "Chọn thời điểm bạn muốn khôi phục.",
  mn = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Lo() : e === "pt" ? Xo() : e === "ch" ? Yo() : e === "de" ? Wo() : e === "es" ? No() : e === "fr" ? Go() : e === "it" ? Oo() : e === "jp" ? Vo() : e === "pl" ? Zo() : e === "ru" ? Ko() : e === "uk" ? Qo() : Jo()
  },
  $o = () => "Use arrow keys to move through snapshots.",
  el = () => "Use as setas do teclado para navegar pelos momentos.",
  tl = () => "使用方向键浏览快照。",
  rl = () => "Verwende die Pfeiltasten, um zwischen den Zeitpunkten zu wechseln.",
  nl = () => "Usa las flechas para moverte entre las instantáneas.",
  sl = () => "Utilisez les flèches pour parcourir les instantanés.",
  al = () => "Usa le frecce per passare tra le istantanee.",
  il = () => "矢印キーでスナップショット間を移動できます。",
  ol = () => "Użyj strzałek, aby przechodzić między migawkami.",
  ll = () => "Используйте стрелки для перемещения между снимками.",
  cl = () => "Використовуйте стрілки для переміщення між знімками.",
  ul = () => "Dùng phím mũi tên để di chuyển giữa các ảnh chụp.",
  _l = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? $o() : e === "pt" ? el() : e === "ch" ? tl() : e === "de" ? rl() : e === "es" ? nl() : e === "fr" ? sl() : e === "it" ? al() : e === "jp" ? il() : e === "pl" ? ol() : e === "ru" ? ll() : e === "uk" ? cl() : ul()
  },
  dl = () => "Loading modification history...",
  fl = () => "Carregando histórico de modificações...",
  pl = () => "正在加载修改历史...",
  hl = () => "Änderungsverlauf wird geladen...",
  vl = () => "Cargando historial de modificaciones...",
  ml = () => "Chargement de l'historique des modifications...",
  gl = () => "Caricamento cronologia modifiche...",
  xl = () => "変更履歴を読み込み中...",
  bl = () => "Ładowanie historii modyfikacji...",
  yl = () => "Загрузка истории изменений...",
  wl = () => "Завантаження історії змін...",
  kl = () => "Đang tải lịch sử thay đổi...",
  ql = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? dl() : e === "pt" ? fl() : e === "ch" ? pl() : e === "de" ? hl() : e === "es" ? vl() : e === "fr" ? ml() : e === "it" ? gl() : e === "jp" ? xl() : e === "pl" ? bl() : e === "ru" ? yl() : e === "uk" ? wl() : kl()
  },
  Sl = () => "Depth",
  Il = () => "Depth",
  Ml = () => "Depth",
  Pl = () => "Depth",
  zl = () => "Profundidad",
  Al = () => "Depth",
  Tl = () => "Profondità",
  Ul = () => "Depth",
  Cl = () => "Depth",
  jl = () => "Depth",
  El = () => "Depth",
  Dl = () => "Depth",
  Bl = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Sl() : e === "pt" ? Il() : e === "ch" ? Ml() : e === "de" ? Pl() : e === "es" ? zl() : e === "fr" ? Al() : e === "it" ? Tl() : e === "jp" ? Ul() : e === "pl" ? Cl() : e === "ru" ? jl() : e === "uk" ? El() : Dl()
  },
  Rl = () => "Compare the selected pixels by how many edits back each one goes.",
  Fl = () => "Compare the selected pixels by how many edits back each one goes.",
  Hl = () => "Compare the selected pixels by how many edits back each one goes.",
  Ll = () => "Compare the selected pixels by how many edits back each one goes.",
  Xl = () => "Compara los píxeles seleccionados según cuántas ediciones atrás llega cada uno.",
  Yl = () => "Compare the selected pixels by how many edits back each one goes.",
  Wl = () => "Confronta i pixel selezionati in base al numero di modifiche precedenti di ciascuno.",
  Nl = () => "Compare the selected pixels by how many edits back each one goes.",
  Gl = () => "Compare the selected pixels by how many edits back each one goes.",
  Ol = () => "Compare the selected pixels by how many edits back each one goes.",
  Vl = () => "Compare the selected pixels by how many edits back each one goes.",
  Zl = () => "Compare the selected pixels by how many edits back each one goes.",
  Vn = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Rl() : e === "pt" ? Fl() : e === "ch" ? Hl() : e === "de" ? Ll() : e === "es" ? Xl() : e === "fr" ? Yl() : e === "it" ? Wl() : e === "jp" ? Nl() : e === "pl" ? Gl() : e === "ru" ? Ol() : e === "uk" ? Vl() : Zl()
  },
  Kl = () => "Historical",
  Ql = () => "Historical",
  Jl = () => "Historical",
  $l = () => "Historical",
  ec = () => "Histórico",
  tc = () => "Historical",
  rc = () => "Storico",
  nc = () => "Historical",
  sc = () => "Historical",
  ac = () => "Historical",
  ic = () => "Historical",
  oc = () => "Historical",
  lc = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Kl() : e === "pt" ? Ql() : e === "ch" ? Jl() : e === "de" ? $l() : e === "es" ? ec() : e === "fr" ? tc() : e === "it" ? rc() : e === "jp" ? nc() : e === "pl" ? sc() : e === "ru" ? ac() : e === "uk" ? ic() : oc()
  },
  cc = () => "Browse real paint moments and restore the exact historical state.",
  uc = () => "Browse real paint moments and restore the exact historical state.",
  _c = () => "Browse real paint moments and restore the exact historical state.",
  dc = () => "Browse real paint moments and restore the exact historical state.",
  fc = () => "Navega por momentos reales de pintura y restaura el estado histórico exacto.",
  pc = () => "Browse real paint moments and restore the exact historical state.",
  hc = () => "Esplora i momenti reali di pittura e ripristina lo stato storico esatto.",
  vc = () => "Browse real paint moments and restore the exact historical state.",
  mc = () => "Browse real paint moments and restore the exact historical state.",
  gc = () => "Browse real paint moments and restore the exact historical state.",
  xc = () => "Browse real paint moments and restore the exact historical state.",
  bc = () => "Browse real paint moments and restore the exact historical state.",
  Zn = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? cc() : e === "pt" ? uc() : e === "ch" ? _c() : e === "de" ? dc() : e === "es" ? fc() : e === "fr" ? pc() : e === "it" ? hc() : e === "jp" ? vc() : e === "pl" ? mc() : e === "ru" ? gc() : e === "uk" ? xc() : bc()
  },
  yc = () => "Method",
  wc = () => "Method",
  kc = () => "Method",
  qc = () => "Method",
  Sc = () => "Método",
  Ic = () => "Method",
  Mc = () => "Metodo",
  Pc = () => "Method",
  zc = () => "Method",
  Ac = () => "Method",
  Tc = () => "Method",
  Uc = () => "Method",
  Cc = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? yc() : e === "pt" ? wc() : e === "ch" ? kc() : e === "de" ? qc() : e === "es" ? Sc() : e === "fr" ? Ic() : e === "it" ? Mc() : e === "jp" ? Pc() : e === "pl" ? zc() : e === "ru" ? Ac() : e === "uk" ? Tc() : Uc()
  },
  jc = () => "Reverse Pixels",
  Ec = () => "Reverter Pixels",
  Dc = () => "回退像素",
  Bc = () => "Pixel zurücksetzen",
  Rc = () => "Revertir Píxeles",
  Fc = () => "Inverser les Pixels",
  Hc = () => "Ripristina pixel",
  Lc = () => "ピクセルを元に戻す",
  Xc = () => "Cofnij piksele",
  Yc = () => "Откатить пиксели",
  Wc = () => "Відкотити пікселі",
  Nc = () => "Hoàn tác pixel",
  os = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? jc() : e === "pt" ? Ec() : e === "ch" ? Dc() : e === "de" ? Bc() : e === "es" ? Rc() : e === "fr" ? Fc() : e === "it" ? Hc() : e === "jp" ? Lc() : e === "pl" ? Xc() : e === "ru" ? Yc() : e === "uk" ? Wc() : Nc()
  },
  Gc = t => `Revert ${t.count} selected pixels to a previous state`,
  Oc = t => `Reverter ${t.count} pixels selecionados para um estado anterior`,
  Vc = t => `将 ${t.count} 个选定像素恢复到之前的状态`,
  Zc = t => `${t.count} ausgewählte Pixel auf einen früheren Zustand zurücksetzen`,
  Kc = t => `Revertir ${t.count} píxeles seleccionados a un estado anterior`,
  Qc = t => `Restaurer ${t.count} pixels sélectionnés à un état précédent`,
  Jc = t => `Ripristina ${t.count} pixel selezionati a uno stato precedente`,
  $c = t => `選択した ${t.count} ピクセルを以前の状態に戻す`,
  eu = t => `Przywróć ${t.count} wybranych pikseli do poprzedniego stanu`,
  tu = t => `Вернуть ${t.count} выбранных пикселей к предыдущему состоянию`,
  ru = t => `Повернути ${t.count} вибраних пікселів до попереднього стану`,
  nu = t => `Khôi phục ${t.count} pixel đã chọn về trạng thái trước đó`,
  su = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Gc(t) : e === "pt" ? Oc(t) : e === "ch" ? Vc(t) : e === "de" ? Zc(t) : e === "es" ? Kc(t) : e === "fr" ? Qc(t) : e === "it" ? Jc(t) : e === "jp" ? $c(t) : e === "pl" ? eu(t) : e === "ru" ? tu(t) : e === "uk" ? ru(t) : nu(t)
  },
  au = () => "Preview",
  iu = () => "Prévia",
  ou = () => "预览",
  lu = () => "Vorschau",
  cu = () => "Vista previa",
  uu = () => "Aperçu",
  _u = () => "Anteprima",
  du = () => "プレビュー",
  fu = () => "Podgląd",
  pu = () => "Предпросмотр",
  hu = () => "Попередній перегляд",
  vu = () => "Xem trước",
  mu = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? au() : e === "pt" ? iu() : e === "ch" ? ou() : e === "de" ? lu() : e === "es" ? cu() : e === "fr" ? uu() : e === "it" ? _u() : e === "jp" ? du() : e === "pl" ? fu() : e === "ru" ? pu() : e === "uk" ? hu() : vu()
  },
  gu = t => `Snapshot ${t.current} of ${t.total}`,
  xu = t => `Momento ${t.current} de ${t.total}`,
  bu = t => `快照 ${t.current} / ${t.total}`,
  yu = t => `Zeitpunkt ${t.current} von ${t.total}`,
  wu = t => `Instantánea ${t.current} de ${t.total}`,
  ku = t => `Instantané ${t.current} sur ${t.total}`,
  qu = t => `Istantanea ${t.current} di ${t.total}`,
  Su = t => `スナップショット ${t.current} / ${t.total}`,
  Iu = t => `Migawka ${t.current} z ${t.total}`,
  Mu = t => `Снимок ${t.current} из ${t.total}`,
  Pu = t => `Знімок ${t.current} з ${t.total}`,
  zu = t => `Ảnh chụp ${t.current} / ${t.total}`,
  Au = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? gu(t) : e === "pt" ? xu(t) : e === "ch" ? bu(t) : e === "de" ? yu(t) : e === "es" ? wu(t) : e === "fr" ? ku(t) : e === "it" ? qu(t) : e === "jp" ? Su(t) : e === "pl" ? Iu(t) : e === "ru" ? Mu(t) : e === "uk" ? Pu(t) : zu(t)
  },
  Tu = () => "Snapshots",
  Uu = () => "Momentos",
  Cu = () => "快照",
  ju = () => "Zeitpunkte",
  Eu = () => "Instantáneas",
  Du = () => "Instantanés",
  Bu = () => "Istantanee",
  Ru = () => "スナップショット",
  Fu = () => "Migawki",
  Hu = () => "Снимки",
  Lu = () => "Знімки",
  Xu = () => "Ảnh chụp",
  Yu = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Tu() : e === "pt" ? Uu() : e === "ch" ? Cu() : e === "de" ? ju() : e === "es" ? Eu() : e === "fr" ? Du() : e === "it" ? Bu() : e === "jp" ? Ru() : e === "pl" ? Fu() : e === "ru" ? Hu() : e === "uk" ? Lu() : Xu()
  },
  Wu = () => "Select the area's first corner",
  Nu = () => "Selecione o primeiro canto da área",
  Gu = () => "选择区域的第一个角",
  Ou = () => "Erste Ecke des Bereichs auswählen",
  Vu = () => "Selecciona la primera esquina del área",
  Zu = () => "Sélectionnez le premier coin de la zone",
  Ku = () => "Seleziona il primo angolo dell'area",
  Qu = () => "領域の最初の角を選択",
  Ju = () => "Wybierz pierwszy narożnik obszaru",
  $u = () => "Выберите первый угол области",
  e_ = () => "Виберіть перший кут області",
  t_ = () => "Chọn góc đầu tiên của vùng",
  U0 = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Wu() : e === "pt" ? Nu() : e === "ch" ? Gu() : e === "de" ? Ou() : e === "es" ? Vu() : e === "fr" ? Zu() : e === "it" ? Ku() : e === "jp" ? Qu() : e === "pl" ? Ju() : e === "ru" ? $u() : e === "uk" ? e_() : t_()
  },
  r_ = () => "Select the area's opposite corner",
  n_ = () => "Selecione o canto oposto da área",
  s_ = () => "选择区域的对角",
  a_ = () => "Gegenüberliegende Ecke des Bereichs auswählen",
  i_ = () => "Selecciona la esquina opuesta del área",
  o_ = () => "Sélectionnez le coin opposé de la zone",
  l_ = () => "Seleziona l'angolo opposto dell'area",
  c_ = () => "領域の反対側の角を選択",
  u_ = () => "Wybierz przeciwległy narożnik obszaru",
  __ = () => "Выберите противоположный угол области",
  d_ = () => "Виберіть протилежний кут області",
  f_ = () => "Chọn góc đối diện của vùng",
  C0 = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? r_() : e === "pt" ? n_() : e === "ch" ? s_() : e === "de" ? a_() : e === "es" ? i_() : e === "fr" ? o_() : e === "it" ? l_() : e === "jp" ? c_() : e === "pl" ? u_() : e === "ru" ? __() : e === "uk" ? d_() : f_()
  },
  p_ = () => "This browser cannot export timelapse videos.",
  h_ = () => "Este navegador não consegue exportar vídeos de timelapse.",
  v_ = () => "This browser cannot export timelapse videos.",
  m_ = () => "This browser cannot export timelapse videos.",
  g_ = () => "This browser cannot export timelapse videos.",
  x_ = () => "This browser cannot export timelapse videos.",
  b_ = () => "Questo browser non può esportare video timelapse.",
  y_ = () => "This browser cannot export timelapse videos.",
  w_ = () => "This browser cannot export timelapse videos.",
  k_ = () => "This browser cannot export timelapse videos.",
  q_ = () => "This browser cannot export timelapse videos.",
  S_ = () => "This browser cannot export timelapse videos.",
  at = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? p_() : e === "pt" ? h_() : e === "ch" ? v_() : e === "de" ? m_() : e === "es" ? g_() : e === "fr" ? x_() : e === "it" ? b_() : e === "jp" ? y_() : e === "pl" ? w_() : e === "ru" ? k_() : e === "uk" ? q_() : S_()
  },
  I_ = () => "Select at least one player.",
  M_ = () => "Selecione pelo menos um jogador.",
  P_ = () => "请至少选择一名玩家。",
  z_ = () => "Wähle mindestens einen Spieler aus.",
  A_ = () => "Selecciona al menos un jugador.",
  T_ = () => "Sélectionnez au moins un joueur.",
  U_ = () => "Seleziona almeno un giocatore.",
  C_ = () => "プレイヤーを1人以上選択してください。",
  j_ = () => "Wybierz co najmniej jednego gracza.",
  E_ = () => "Выберите хотя бы одного игрока.",
  D_ = () => "Виберіть щонайменше одного гравця.",
  B_ = () => "Hãy chọn ít nhất một người chơi.",
  gn = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? I_() : e === "pt" ? M_() : e === "ch" ? P_() : e === "de" ? z_() : e === "es" ? A_() : e === "fr" ? T_() : e === "it" ? U_() : e === "jp" ? C_() : e === "pl" ? j_() : e === "ru" ? E_() : e === "uk" ? D_() : B_()
  },
  R_ = t => `Phone verification required for ${t.count} players`,
  F_ = t => `Verificacao por telefone exigida para ${t.count} jogadores`,
  H_ = t => `有 ${t.count} 名玩家需要完成手机验证`,
  L_ = t => `Telefonverifizierung für ${t.count} Spieler erforderlich`,
  X_ = t => `Verificación por teléfono requerida para ${t.count} jugadores`,
  Y_ = t => `Vérification par téléphone requise pour ${t.count} joueurs`,
  W_ = t => `Verifica telefonica richiesta per ${t.count} giocatori`,
  N_ = t => `${t.count} 人のプレイヤーには電話認証が必要です`,
  G_ = t => `Wymagana weryfikacja telefonu dla ${t.count} graczy`,
  O_ = t => `Для ${t.count} игроков требуется подтверждение по телефону`,
  V_ = t => `Для ${t.count} гравців потрібна перевірка телефону`,
  Z_ = t => `Cần xác minh điện thoại cho ${t.count} người chơi`,
  K_ = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? R_(t) : e === "pt" ? F_(t) : e === "ch" ? H_(t) : e === "de" ? L_(t) : e === "es" ? X_(t) : e === "fr" ? Y_(t) : e === "it" ? W_(t) : e === "jp" ? N_(t) : e === "pl" ? G_(t) : e === "ru" ? O_(t) : e === "uk" ? V_(t) : Z_(t)
  },
  Q_ = t => `Cleared ${t.count} headquarters paint events`,
  J_ = t => `${t.count} eventos de pintura do quartel general limpos`,
  $_ = t => `已清除 ${t.count} 条总部绘制记录`,
  ed = t => `${t.count} Malereignisse des Hauptquartiers gelöscht`,
  td = t => `${t.count} eventos de pintura del cuartel general eliminados`,
  rd = t => `${t.count} événements de peinture du quartier général effacés`,
  nd = t => `${t.count} eventi di pittura del quartier generale cancellati`,
  sd = t => `拠点のペイントイベントを ${t.count} 件消去しました`,
  ad = t => `Wyczyszczono ${t.count} zdarzeń malowania w siedzibie`,
  id = t => `Очищено событий рисования в штаб-квартире: ${t.count}`,
  od = t => `Очищено ${t.count} подій малювання у штаб-квартирі`,
  ld = t => `Đã xóa ${t.count} sự kiện tô của trụ sở`,
  cd = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Q_(t) : e === "pt" ? J_(t) : e === "ch" ? $_(t) : e === "de" ? ed(t) : e === "es" ? td(t) : e === "fr" ? rd(t) : e === "it" ? nd(t) : e === "jp" ? sd(t) : e === "pl" ? ad(t) : e === "ru" ? id(t) : e === "uk" ? od(t) : ld(t)
  },
  ud = () => "Selected headquarters area saved",
  _d = () => "Area selecionada do quartel general salva",
  dd = () => "所选总部区域已保存",
  fd = () => "Ausgewählter Hauptquartier-Bereich gespeichert",
  pd = () => "Área seleccionada del cuartel general guardada",
  hd = () => "Zone sélectionnée du quartier général enregistrée",
  vd = () => "Area selezionata del quartier generale salvata",
  md = () => "選択した拠点のエリアを保存しました",
  gd = () => "Zapisano wybrany obszar siedziby",
  xd = () => "Выбранная область штаб-квартиры сохранена",
  bd = () => "Вибрану область штаб-квартири збережено",
  yd = () => "Đã lưu vùng trụ sở đã chọn",
  wd = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? ud() : e === "pt" ? _d() : e === "ch" ? dd() : e === "de" ? fd() : e === "es" ? pd() : e === "fr" ? hd() : e === "it" ? vd() : e === "jp" ? md() : e === "pl" ? gd() : e === "ru" ? xd() : e === "uk" ? bd() : yd()
  },
  kd = () => "Selected player IDs copied",
  qd = () => "IDs dos jogadores selecionados copiados",
  Sd = () => "已复制所选玩家 ID",
  Id = () => "IDs der ausgewählten Spieler kopiert",
  Md = () => "IDs de los jugadores seleccionados copiados",
  Pd = () => "IDs des joueurs sélectionnés copiés",
  zd = () => "ID dei giocatori selezionati copiati",
  Ad = () => "選択したプレイヤーIDをコピーしました",
  Td = () => "Skopiowano ID wybranych graczy",
  Ud = () => "ID выбранных игроков скопированы",
  Cd = () => "ID вибраних гравців скопійовано",
  jd = () => "Đã sao chép ID của những người chơi đã chọn",
  Ed = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? kd() : e === "pt" ? qd() : e === "ch" ? Sd() : e === "de" ? Id() : e === "es" ? Md() : e === "fr" ? Pd() : e === "it" ? zd() : e === "jp" ? Ad() : e === "pl" ? Td() : e === "ru" ? Ud() : e === "uk" ? Cd() : jd()
  },
  Dd = () => "Select a player from a pixel",
  Bd = () => "Selecionar jogador por um pixel",
  Rd = () => "通过像素选择玩家",
  Fd = () => "Spieler über einen Pixel auswählen",
  Hd = () => "Seleccionar un jugador desde un píxel",
  Ld = () => "Sélectionner un joueur à partir d'un pixel",
  Xd = () => "Seleziona un giocatore da un pixel",
  Yd = () => "ピクセルからプレイヤーを選択",
  Wd = () => "Wybierz gracza z piksela",
  Nd = () => "Выбрать игрока по пикселю",
  Gd = () => "Вибрати гравця за пікселем",
  Od = () => "Chọn người chơi từ một pixel",
  Vd = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Dd() : e === "pt" ? Bd() : e === "ch" ? Rd() : e === "de" ? Fd() : e === "es" ? Hd() : e === "fr" ? Ld() : e === "it" ? Xd() : e === "jp" ? Yd() : e === "pl" ? Wd() : e === "ru" ? Nd() : e === "uk" ? Gd() : Od()
  },
  Zd = () => "Select filtered",
  Kd = () => "Selecionar filtrados",
  Qd = () => "选择筛选结果",
  Jd = () => "Gefilterte auswählen",
  $d = () => "Seleccionar filtrados",
  ef = () => "Sélectionner les filtrés",
  tf = () => "Seleziona filtrati",
  rf = () => "絞り込み結果を選択",
  nf = () => "Zaznacz filtrowane",
  sf = () => "Выбрать отфильтрованных",
  af = () => "Вибрати відфільтрованих",
  of = () => "Chọn mục đã lọc",
  lf = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Zd() : e === "pt" ? Kd() : e === "ch" ? Qd() : e === "de" ? Jd() : e === "es" ? $d() : e === "fr" ? ef() : e === "it" ? tf() : e === "jp" ? rf() : e === "pl" ? nf() : e === "ru" ? sf() : e === "uk" ? af() : of()
  },
  cf = () => "Clear filtered",
  uf = () => "Limpar filtrados",
  _f = () => "清除筛选结果",
  df = () => "Gefilterte abwählen",
  ff = () => "Deseleccionar filtrados",
  pf = () => "Désélectionner les filtrés",
  hf = () => "Deseleziona filtrati",
  vf = () => "絞り込み結果の選択を解除",
  mf = () => "Odznacz filtrowane",
  gf = () => "Снять выбор с отфильтрованных",
  xf = () => "Очистити відфільтрованих",
  bf = () => "Bỏ chọn mục đã lọc",
  yf = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? cf() : e === "pt" ? uf() : e === "ch" ? _f() : e === "de" ? df() : e === "es" ? ff() : e === "fr" ? pf() : e === "it" ? hf() : e === "jp" ? vf() : e === "pl" ? mf() : e === "ru" ? gf() : e === "uk" ? xf() : bf()
  },
  wf = () => "All roles",
  kf = () => "Todos os cargos",
  qf = () => "所有角色",
  Sf = () => "Alle Rollen",
  If = () => "Todos los cargos",
  Mf = () => "Tous les rôles",
  Pf = () => "Tutti i ruoli",
  zf = () => "すべてのロール",
  Af = () => "Wszystkie role",
  Tf = () => "Все роли",
  Uf = () => "Усі ролі",
  Cf = () => "Tất cả vai trò",
  jf = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? wf() : e === "pt" ? kf() : e === "ch" ? qf() : e === "de" ? Sf() : e === "es" ? If() : e === "fr" ? Mf() : e === "it" ? Pf() : e === "jp" ? zf() : e === "pl" ? Af() : e === "ru" ? Tf() : e === "uk" ? Uf() : Cf()
  },
  Ef = () => "Not painted",
  Df = () => "Nao pintado",
  Bf = () => "未绘制",
  Rf = () => "Nicht bemalt",
  Ff = () => "Sin pintar",
  Hf = () => "Non peint",
  Lf = () => "Non dipinto",
  Xf = () => "未ペイント",
  Yf = () => "Niepomalowany",
  Wf = () => "Не нарисовано",
  Nf = () => "Не намальовано",
  Gf = () => "Chưa tô",
  en = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Ef() : e === "pt" ? Df() : e === "ch" ? Bf() : e === "de" ? Rf() : e === "es" ? Ff() : e === "fr" ? Hf() : e === "it" ? Lf() : e === "jp" ? Xf() : e === "pl" ? Yf() : e === "ru" ? Wf() : e === "uk" ? Nf() : Gf()
  },
  Of = () => "Selected area",
  Vf = () => "Area selecionada",
  Zf = () => "已选区域",
  Kf = () => "Ausgewählter Bereich",
  Qf = () => "Área seleccionada",
  Jf = () => "Zone sélectionnée",
  $f = () => "Area selezionata",
  ep = () => "選択したエリア",
  tp = () => "Wybrany obszar",
  rp = () => "Выбранная область",
  np = () => "Вибрана область",
  sp = () => "Khu vực đã chọn",
  ap = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Of() : e === "pt" ? Vf() : e === "ch" ? Zf() : e === "de" ? Kf() : e === "es" ? Qf() : e === "fr" ? Jf() : e === "it" ? $f() : e === "jp" ? ep() : e === "pl" ? tp() : e === "ru" ? rp() : e === "uk" ? np() : sp()
  },
  ip = () => "Any",
  op = () => "Qualquer",
  lp = () => "任意",
  cp = () => "Beliebig",
  up = () => "Cualquiera",
  _p = () => "Tous",
  dp = () => "Qualsiasi",
  fp = () => "指定なし",
  pp = () => "Dowolny",
  hp = () => "Любой",
  vp = () => "Будь-який",
  mp = () => "Bất kỳ",
  Kn = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? ip() : e === "pt" ? op() : e === "ch" ? lp() : e === "de" ? cp() : e === "es" ? up() : e === "fr" ? _p() : e === "it" ? dp() : e === "jp" ? fp() : e === "pl" ? pp() : e === "ru" ? hp() : e === "uk" ? vp() : mp()
  },
  gp = () => "Name or ID",
  xp = () => "Nome ou ID",
  bp = () => "名称或 ID",
  yp = () => "Name oder ID",
  wp = () => "Nombre o ID",
  kp = () => "Nom ou ID",
  qp = () => "Nome o ID",
  Sp = () => "名前またはID",
  Ip = () => "Nazwa lub ID",
  Mp = () => "Имя или ID",
  Pp = () => "Ім'я або ID",
  zp = () => "Tên hoặc ID",
  Ap = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? gp() : e === "pt" ? xp() : e === "ch" ? bp() : e === "de" ? yp() : e === "es" ? wp() : e === "fr" ? kp() : e === "it" ? qp() : e === "jp" ? Sp() : e === "pl" ? Ip() : e === "ru" ? Mp() : e === "uk" ? Pp() : zp()
  },
  Tp = () => "User ID From",
  Up = () => "ID de usuario inicial",
  Cp = () => "起始用户 ID",
  jp = () => "Nutzer-ID von",
  Ep = () => "ID de usuario desde",
  Dp = () => "ID utilisateur de",
  Bp = () => "ID utente da",
  Rp = () => "ユーザーID（開始）",
  Fp = () => "ID użytkownika od",
  Hp = () => "ID пользователя от",
  Lp = () => "ID користувача від",
  Xp = () => "ID người dùng từ",
  Yp = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Tp() : e === "pt" ? Up() : e === "ch" ? Cp() : e === "de" ? jp() : e === "es" ? Ep() : e === "fr" ? Dp() : e === "it" ? Bp() : e === "jp" ? Rp() : e === "pl" ? Fp() : e === "ru" ? Hp() : e === "uk" ? Lp() : Xp()
  },
  Wp = () => "User ID To",
  Np = () => "ID de usuario final",
  Gp = () => "结束用户 ID",
  Op = () => "Nutzer-ID bis",
  Vp = () => "ID de usuario hasta",
  Zp = () => "ID utilisateur à",
  Kp = () => "ID utente a",
  Qp = () => "ユーザーID（終了）",
  Jp = () => "ID użytkownika do",
  $p = () => "ID пользователя до",
  eh = () => "ID користувача до",
  th = () => "ID người dùng đến",
  rh = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Wp() : e === "pt" ? Np() : e === "ch" ? Gp() : e === "de" ? Op() : e === "es" ? Vp() : e === "fr" ? Zp() : e === "it" ? Kp() : e === "jp" ? Qp() : e === "pl" ? Jp() : e === "ru" ? $p() : e === "uk" ? eh() : th()
  },
  nh = () => "Min",
  sh = () => "Minimo",
  ah = () => "最小",
  ih = () => "Min",
  oh = () => "Mín",
  lh = () => "Min",
  ch = () => "Min",
  uh = () => "最小",
  _h = () => "Min",
  dh = () => "Мин.",
  fh = () => "Мін.",
  ph = () => "Tối thiểu",
  hh = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? nh() : e === "pt" ? sh() : e === "ch" ? ah() : e === "de" ? ih() : e === "es" ? oh() : e === "fr" ? lh() : e === "it" ? ch() : e === "jp" ? uh() : e === "pl" ? _h() : e === "ru" ? dh() : e === "uk" ? fh() : ph()
  },
  vh = () => "Max",
  mh = () => "Maximo",
  gh = () => "最大",
  xh = () => "Max",
  bh = () => "Máx",
  yh = () => "Max",
  wh = () => "Max",
  kh = () => "最大",
  qh = () => "Maks",
  Sh = () => "Макс.",
  Ih = () => "Макс.",
  Mh = () => "Tối đa",
  Ph = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? vh() : e === "pt" ? mh() : e === "ch" ? gh() : e === "de" ? xh() : e === "es" ? bh() : e === "fr" ? yh() : e === "it" ? wh() : e === "jp" ? kh() : e === "pl" ? qh() : e === "ru" ? Sh() : e === "uk" ? Ih() : Mh()
  },
  zh = t => `Circle brush (Alt + scroll to resize) - Size: ${t.size}`,
  Ah = t => `Pincel circular (Alt + rolagem para redimensionar) - Tamanho: ${t.size}`,
  Th = t => `圆形画笔（Alt + 滚轮调整大小）- 大小：${t.size}`,
  Uh = t => `Runder Pinsel (Alt + Scrollen zum Ändern der Größe) - Größe: ${t.size}`,
  Ch = t => `Pincel circular (Alt + rueda para redimensionar) - Tamaño: ${t.size}`,
  jh = t => `Pinceau circulaire (Alt + molette pour redimensionner) - Taille : ${t.size}`,
  Eh = t => `Pennello circolare (Alt + scorrimento per ridimensionare) - Dimensione: ${t.size}`,
  Dh = t => `円形ブラシ（Alt + スクロールでサイズ変更） - サイズ: ${t.size}`,
  Bh = t => `Pędzel okrągły (Alt + przewijanie zmienia rozmiar) - Rozmiar: ${t.size}`,
  Rh = t => `Круглая кисть (Alt + прокрутка для изменения размера) - Размер: ${t.size}`,
  Fh = t => `Кругла кисть (Alt + прокрутка для зміни розміру) - Розмір: ${t.size}`,
  Hh = t => `Cọ tròn (Alt + cuộn để đổi cỡ) - Cỡ: ${t.size}`,
  Lh = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? zh(t) : e === "pt" ? Ah(t) : e === "ch" ? Th(t) : e === "de" ? Uh(t) : e === "es" ? Ch(t) : e === "fr" ? jh(t) : e === "it" ? Eh(t) : e === "jp" ? Dh(t) : e === "pl" ? Bh(t) : e === "ru" ? Rh(t) : e === "uk" ? Fh(t) : Hh(t)
  },
  Xh = t => `Square brush (Alt + scroll to resize) - Size: ${t.size}`,
  Yh = t => `Pincel quadrado (Alt + rolagem para redimensionar) - Tamanho: ${t.size}`,
  Wh = t => `方形画笔（Alt + 滚轮调整大小）- 大小：${t.size}`,
  Nh = t => `Eckiger Pinsel (Alt + Scrollen zum Ändern der Größe) - Größe: ${t.size}`,
  Gh = t => `Pincel cuadrado (Alt + rueda para redimensionar) - Tamaño: ${t.size}`,
  Oh = t => `Pinceau carré (Alt + molette pour redimensionner) - Taille : ${t.size}`,
  Vh = t => `Pennello quadrato (Alt + scorrimento per ridimensionare) - Dimensione: ${t.size}`,
  Zh = t => `四角ブラシ（Alt + スクロールでサイズ変更） - サイズ: ${t.size}`,
  Kh = t => `Pędzel kwadratowy (Alt + przewijanie zmienia rozmiar) - Rozmiar: ${t.size}`,
  Qh = t => `Квадратная кисть (Alt + прокрутка для изменения размера) - Размер: ${t.size}`,
  Jh = t => `Квадратна кисть (Alt + прокрутка для зміни розміру) - Розмір: ${t.size}`,
  $h = t => `Cọ vuông (Alt + cuộn để đổi cỡ) - Cỡ: ${t.size}`,
  ev = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Xh(t) : e === "pt" ? Yh(t) : e === "ch" ? Wh(t) : e === "de" ? Nh(t) : e === "es" ? Gh(t) : e === "fr" ? Oh(t) : e === "it" ? Vh(t) : e === "jp" ? Zh(t) : e === "pl" ? Kh(t) : e === "ru" ? Qh(t) : e === "uk" ? Jh(t) : $h(t)
  },
  tv = () => "No players match the current filters.",
  rv = () => "Nenhum jogador corresponde aos filtros atuais.",
  nv = () => "没有玩家符合当前筛选条件。",
  sv = () => "Keine Spieler entsprechen den aktuellen Filtern.",
  av = () => "Ningún jugador coincide con los filtros actuales.",
  iv = () => "Aucun joueur ne correspond aux filtres actuels.",
  ov = () => "Nessun giocatore corrisponde ai filtri attuali.",
  lv = () => "現在のフィルターに一致するプレイヤーはいません。",
  cv = () => "Żaden gracz nie pasuje do aktualnych filtrów.",
  uv = () => "Нет игроков, соответствующих текущим фильтрам.",
  _v = () => "Жоден гравець не відповідає поточним фільтрам.",
  dv = () => "Không có người chơi nào khớp với bộ lọc hiện tại.",
  fv = (t = {}, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? tv() : e === "pt" ? rv() : e === "ch" ? nv() : e === "de" ? sv() : e === "es" ? av() : e === "fr" ? iv() : e === "it" ? ov() : e === "jp" ? lv() : e === "pl" ? cv() : e === "ru" ? uv() : e === "uk" ? _v() : dv()
  },
  pv = t => `${t.name} selected`,
  hv = t => `${t.name} selecionado`,
  vv = t => `已选择 ${t.name}`,
  mv = t => `${t.name} ausgewählt`,
  gv = t => `${t.name} seleccionado`,
  xv = t => `${t.name} sélectionné`,
  bv = t => `${t.name} selezionato`,
  yv = t => `${t.name} を選択しました`,
  wv = t => `Zaznaczono ${t.name}`,
  kv = t => `${t.name} выбран`,
  qv = t => `${t.name} вибрано`,
  Sv = t => `Đã chọn ${t.name}`,
  Iv = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? pv(t) : e === "pt" ? hv(t) : e === "ch" ? vv(t) : e === "de" ? mv(t) : e === "es" ? gv(t) : e === "fr" ? xv(t) : e === "it" ? bv(t) : e === "jp" ? yv(t) : e === "pl" ? wv(t) : e === "ru" ? kv(t) : e === "uk" ? qv(t) : Sv(t)
  },
  Mv = t => `${t.name} deselected`,
  Pv = t => `${t.name} desmarcado`,
  zv = t => `已取消选择 ${t.name}`,
  Av = t => `${t.name} abgewählt`,
  Tv = t => `${t.name} deseleccionado`,
  Uv = t => `${t.name} désélectionné`,
  Cv = t => `${t.name} deselezionato`,
  jv = t => `${t.name} の選択を解除しました`,
  Ev = t => `Odznaczono ${t.name}`,
  Dv = t => `${t.name} снят с выбора`,
  Bv = t => `${t.name} знято з вибору`,
  Rv = t => `Đã bỏ chọn ${t.name}`,
  Fv = (t, r = {}) => {
    const e = r.locale ?? P();
    return e === "en" ? Mv(t) : e === "pt" ? Pv(t) : e === "ch" ? zv(t) : e === "de" ? Av(t) : e === "es" ? Tv(t) : e === "fr" ? Uv(t) : e === "it" ? Cv(t) : e === "jp" ? jv(t) : e === "pl" ? Ev(t) : e === "ru" ? Dv(t) : e === "uk" ? Bv(t) : Rv(t)
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
const j0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAAXNSR0IArs4c6QAAACVJREFUeNpj+A8FDEAAZwMRBAIBmIYLIgHcgkQDIs3E6SRsjgcABYFLtfTgakEAAAAASUVORK5CYII=";
var Hv = new Set(["$$slots", "$$events", "$$legacy"]),
  Lv = Cr('<svg><path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Z"></path></svg>');

function Xv(t, r) {
  let e = Er(r, Hv);
  var s = Lv();
  jr(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), k(t, s)
}
var xn = R('<div class="py-8 text-center"><p class="text-base-content/60"> </p></div>'),
  Qn = R('<div class="flex flex-col items-center justify-center gap-3 py-8"><span class="loading loading-spinner loading-lg"></span> <p class="text-base-content/70 text-sm"> </p></div>'),
  Yv = R('<div class="reverse-selection-pill svelte-o0qsvj"> </div>'),
  Wv = R('<div class="bg-base-300/40 absolute inset-0 z-10 flex items-center justify-center"><span class="loading loading-spinner loading-lg"></span></div>'),
  Nv = R('<span class="loading loading-spinner loading-xs mt-1 shrink-0"></span>'),
  Gv = R('<button type="button"><div class="reverse-gallery-item-head svelte-o0qsvj"><div class="reverse-gallery-item-copy svelte-o0qsvj"><div class="reverse-gallery-item-label flex justify-between svelte-o0qsvj"> <div class="badge badge-sm badge-outline"> </div></div> <div class="reverse-gallery-item-subtitle svelte-o0qsvj"> </div></div></div> <div class="mt-2 flex flex-wrap justify-between gap-2"><div class="badge badge-sm badge-outline"> </div> <!></div></button>'),
  Ov = R('<span class="loading loading-spinner loading-xs"></span>'),
  Vv = R('<button type="button" class="btn btn-sm btn-outline w-full"><!> </button>'),
  Zv = R('<div class="reverse-workspace svelte-o0qsvj"><div class="reverse-panel svelte-o0qsvj"><div class="reverse-panel-header svelte-o0qsvj"><div><div class="reverse-section-title svelte-o0qsvj"> </div> <p class="reverse-section-copy svelte-o0qsvj"> </p></div> <!></div> <div class="reverse-preview-toolbar svelte-o0qsvj"><div class="reverse-meta-chip svelte-o0qsvj"><!> </div> <div class="reverse-meta-chip svelte-o0qsvj"><!> </div> <div class="flex items-center gap-1"><button type="button" class="btn btn-sm btn-ghost btn-circle" aria-label="Previous preview"><!></button> <button type="button" class="btn btn-sm btn-ghost btn-circle" aria-label="Next preview"><!></button></div></div> <div class="reverse-preview-stage svelte-o0qsvj"><!> <canvas style="max-width: 100%; height: auto;"></canvas></div> <div class="reverse-preview-footer svelte-o0qsvj"><div class="flex flex-wrap items-center gap-2 text-xs sm:text-sm"><div class="badge badge-outline"> </div> <div class="badge badge-outline"> </div></div> <div class="reverse-callout svelte-o0qsvj"><!> <span> </span></div></div></div> <div class="reverse-panel h-full svelte-o0qsvj"><div class="reverse-panel-header svelte-o0qsvj"><div><div class="reverse-section-title svelte-o0qsvj"> </div> <p class="reverse-section-copy svelte-o0qsvj"> </p></div> <div class="reverse-history-count svelte-o0qsvj"> </div></div> <div class="reverse-keyboard-hint svelte-o0qsvj"> </div> <div class="reverse-gallery-list h-full p-2 svelte-o0qsvj"></div> <!></div></div> <div class="reverse-action-bar svelte-o0qsvj"><div class="flex flex-wrap items-center justify-end gap-2"><button type="button" class="btn btn-sm btn-outline"> </button> <button type="button" class="btn btn-sm btn-warning"><!> </button></div></div>', 1),
  Kv = R('<div><div class="min-w-0"><h3 class="flex items-center gap-2 text-lg font-bold"><!> </h3> <p class="text-base-content/70 mt-1 text-sm"> </p></div></div> <div class="mt-4"><div class="reverse-mode-bar svelte-o0qsvj"><div><div class="reverse-section-title svelte-o0qsvj"> </div> <p class="reverse-section-copy svelte-o0qsvj"> </p></div> <div class="tabs tabs-boxed reverse-mode-tabs svelte-o0qsvj"><button type="button"> </button> <button type="button"> </button></div></div> <!></div>', 1);

function Qv(t, r) {
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
          E = Z.tileY * n(u) + Z.pixelY;
        we < i && (i = we), E < _ && (_ = E), we > x && (x = we), E > I && (I = E)
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
      }), j()
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

  function j() {
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
      }), pe.success(to({
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
      var x = Kv(),
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
            l(ce), l(ee), Y(Ce => y(Pe, Ce), [() => ql()]), k(ae, ee)
          },
          gt = ae => {
            var ee = Qn(),
              ce = v(c(ee), 2),
              Pe = c(ce, !0);
            l(ce), l(ee), Y(Ce => y(Pe, Ce), [() => ho()]), k(ae, ee)
          },
          Kt = ae => {
            var ee = xn(),
              ce = c(ee),
              Pe = c(ce, !0);
            l(ce), l(ee), Y(Ce => y(Pe, Ce), [() => bn()]), k(ae, ee)
          },
          _t = ae => {
            var ee = Zv(),
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
                var qe = Yv(),
                  Nt = c(qe, !0);
                l(qe), Y(pt => y(Nt, pt), [() => Au({
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
            Xv(Ae, {
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
                var qe = Wv();
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
              var pt = Gv();
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
                    var dn = Nv();
                    k(Ir, dn)
                  },
                  ks = N(() => n(mt) && n(D) === Ke(n(qe), n(f)));
                J(ys, Ir => {
                  n(ks) && Ir(ws)
                })
              }
              l(Or), l(pt), Y((Ir, dn, qs, Ss, Is, Ms, Ps) => {
                je(pt, "id", Ir), vr = Tt(pt, 1, "reverse-gallery-item svelte-o0qsvj", null, vr, dn), y(Wr, `${qs??""} `), y(un, `#${n(Nt)+1}`), y(_n, `${Ss??""} · ${Is??""}`), y(bs, `${Ms??""}
										${Ps??""}`)
              }, [() => q(n(f), Ke(n(qe), n(f))), () => ({
                "reverse-gallery-item-active": n(D) === Ke(n(qe), n(f))
              }), () => Ie(n(qe).ts), () => Qe(n(qe).ts), () => Je(n(qe).ts), () => n(qe).pixelCount.toLocaleString(), () => On()]), he("click", pt, () => n(F) && Yt(n(F), Ke(n(qe), n(f)))), k(Be, pt)
            }), l(Ft);
            var Hr = v(Ft, 2);
            {
              var nr = Be => {
                var qe = Vv(),
                  Nt = c(qe);
                {
                  var pt = kt => {
                    var mr = Ov();
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
            }, [() => mu(), () => n(Se) ? `${O(n(Se).ts)} - ${Je(n(Se).ts)}` : "", () => n(Se) ? Je(n(Se).ts) : "", () => p(n(Ot)), () => n(Se) ? n(Se).eventCount.toLocaleString() : "0", () => Po(), () => n(Se) ? n(Se).pixelCount.toLocaleString() : "0", () => On(), () => zi(), () => Yu(), () => n(f) === "historical" ? Zn() : Vn(), () => n(h).length.toLocaleString(), () => _l(), () => as(), () => Xi()]), he("click", xt, H), he("click", rt, L), he("click", Xr, () => e(!1)), he("click", Yr, se), k(ae, ee)
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
        y(V, ` ${ae??""}`), y(Ue, ee), y(B, ce), y(me, Pe), Tt(Me, 1, `tab transition-all ${n(f)==="depth"?"tab-active bg-primary! text-primary-content! border-primary/60! btn btn-primary btn-sm scale-[1.02] border! shadow-md!":"hover:brightness-105"}`, "svelte-o0qsvj"), Me.disabled = n(d) === "loading" || n(d) === "applying", y(Oe, Ce), Tt(We, 1, `tab transition-all ${n(f)==="historical"?"tab-active bg-primary! text-primary-content! border-primary/60! btn btn-primary btn-sm scale-[1.02] border! shadow-md!":"hover:brightness-105"}`, "svelte-o0qsvj"), We.disabled = n(d) === "loading" || n(d) === "applying", y(Et, dt)
      }, [() => os(), () => su({
        count: r.selectedPixelCount.toString()
      }), () => Cc(), () => n(f) === "historical" ? Zn() : n(f) === "depth" ? Vn() : mn(), () => Bl(), () => lc()]), he("click", Me, () => ne("depth")), he("click", We, () => ne("historical")), k(i, x)
    },
    $$slots: {
      default: !0
    }
  }), ln()
}
In(["click"]);
var Jv = new Set(["$$slots", "$$events", "$$legacy"]),
  $v = Cr('<svg><path d="M200-80q-50 0-85-35t-35-85q0-39 22.5-69.5T160-313v-334q-35-13-57.5-43.5T80-760q0-50 35-85t85-35q39 0 69.5 22.5T313-800h334q12-35 42.5-57.5T760-880q50 0 85 35t35 85q0 40-22.5 70.5T800-647v334q35 13 57.5 43.5T880-200q0 50-35 85t-85 35q-39 0-69.5-22.5T647-160H313q-13 35-43.5 57.5T200-80Zm0-640q17 0 28.5-11.5T240-760q0-17-11.5-28.5T200-800q-17 0-28.5 11.5T160-760q0 17 11.5 28.5T200-720Zm560 0q17 0 28.5-11.5T800-760q0-17-11.5-28.5T760-800q-17 0-28.5 11.5T720-760q0 17 11.5 28.5T760-720ZM313-240h334q9-26 28-45t45-28v-334q-26-9-45-28t-28-45H313q-9 26-28 45t-45 28v334q26 9 45 28t28 45Zm447 80q17 0 28.5-11.5T800-200q0-17-11.5-28.5T760-240q-17 0-28.5 11.5T720-200q0 17 11.5 28.5T760-160Zm-560 0q17 0 28.5-11.5T240-200q0-17-11.5-28.5T200-240q-17 0-28.5 11.5T160-200q0 17 11.5 28.5T200-160Zm0-600Zm560 0Zm0 560Zm-560 0Z"></path></svg>');

function em(t, r) {
  let e = Er(r, Jv);
  var s = $v();
  jr(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), k(t, s)
}
var tm = new Set(["$$slots", "$$events", "$$legacy"]),
  rm = Cr('<svg><path fill="currentColor" d="M9 14c1.381 0 2.631-.56 3.536-1.465C13.44 11.631 14 10.381 14 9s-.56-2.631-1.464-3.535C11.631 4.56 10.381 4 9 4s-2.631.56-3.536 1.465C4.56 6.369 4 7.619 4 9s.56 2.631 1.464 3.535A5 5 0 0 0 9 14m0 7c3.518 0 6-1 6-2c0-2-2.354-4-6-4c-3.75 0-6 2-6 4c0 1 2.25 2 6 2m12-9h-2v-2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2"></path></svg>');

function nm(t, r) {
  let e = Er(r, tm);
  var s = rm();
  jr(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...e
  })), k(t, s)
}
var sm = new Set(["$$slots", "$$events", "$$legacy"]),
  am = Cr('<svg><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"></circle><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>');

function im(t, r) {
  let e = Er(r, sm);
  var s = am();
  jr(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...e
  })), k(t, s)
}
var om = new Set(["$$slots", "$$events", "$$legacy"]),
  lm = Cr('<svg><rect x="6" y="6" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" rx="2"></rect><rect x="10" y="10" width="4" height="4" fill="currentColor" rx="1"></rect></svg>');

function cm(t, r) {
  let e = Er(r, om);
  var s = lm();
  jr(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...e
  })), k(t, s)
}
var Kr = R('<span class="loading loading-spinner loading-xs"></span>'),
  um = R('<div class="mt-3 flex justify-center"><span class="loading loading-spinner"></span></div>'),
  Jn = R('<div class="mt-3 flex justify-center"><p class="text-base-content/80 text-sm"> </p></div>'),
  _m = R('<span class="badge badge-primary badge-sm"> </span>'),
  dm = R('<span class="badge badge-ghost badge-sm"> </span>'),
  $n = R("<option> </option>"),
  fm = R('<label class="form-control"><span class="label pb-1 text-xs"> </span> <select class="select select-xs select-bordered"><option> </option><!></select></label>'),
  pm = R('<div class="border-base-300/60 border-t px-4 pt-3 pb-4"><div class="grid gap-2 md:grid-cols-2 xl:grid-cols-3"><!> <label class="form-control"><span class="label pb-1 text-xs"> </span> <select class="select select-xs select-bordered"><option> </option><option> </option><option> </option><option> </option></select></label> <label class="form-control"><span class="label pb-1 text-xs"> </span> <input class="input input-xs input-bordered" type="text"/></label> <label class="form-control"><span class="label pb-1 text-xs"> </span> <input class="input input-xs input-bordered" inputmode="numeric" pattern="[0-9]*"/></label> <label class="form-control"><span class="label pb-1 text-xs"> </span> <input class="input input-xs input-bordered" inputmode="numeric" pattern="[0-9]*"/></label> <label class="form-control"><span class="label pb-1 text-xs"> </span> <select class="select select-xs select-bordered"><option> </option><!></select></label></div></div>'),
  hm = R('<button class="btn btn-xs btn-circle btn-soft btn-error tooltip tooltip-bottom"><!></button>'),
  vm = R('<button class="btn btn-xs btn-circle btn-soft btn-error tooltip tooltip-bottom ml-0.5"><!></button>'),
  mm = R('<button class="btn btn-xs btn-circle btn-soft btn-warning tooltip tooltip-bottom ml-0.5"><!></button>'),
  gm = R('<button class="btn btn-xs btn-circle btn-soft btn-primary tooltip tooltip-bottom mr-1"><!></button>'),
  xm = R('<button class="btn btn-xs btn-circle btn-soft btn-warning tooltip tooltip-bottom mr-1"><!></button>'),
  bm = R('<div class="size-5"></div> <div class="text-base-content/80 ml-0.5"> </div>', 1),
  ym = R("<span> </span><span> </span>", 1),
  wm = R('<span class="badge badge-sm badge-error ml-0.5 border-0"> </span>'),
  es = R('<span class="tooltip"><!></span>'),
  km = R('<!> <div class="ml-0.5 flex flex-wrap items-center gap-1"><!> <!> <!> <!> <!></div>', 1),
  qm = R('<span class="text-base-content/60 ml-1 text-xs"> </span>'),
  Sm = R('<span class="text-primary ml-1 text-xs"> </span>'),
  Im = R('<tr><th class="w-1"><input type="checkbox" class="checkbox-sm checkbox pointer-events-none"/></th><td class="flex items-center gap-1"><!></td><td class="text-center"> <!> <!></td></tr>'),
  Mm = R('<div class="max-h-[27vh] overflow-x-hidden overflow-y-auto"><table class="table max-w-full"><thead><tr><th class="w-1"><input type="checkbox" class="checkbox-sm checkbox"/></th><th> <button class="btn btn-xs btn-circle btn-ghost tooltip tooltip-bottom ml-0.5"><!></button> <!> <!> <!></th><th class="text-center"><!> <!> </th></tr></thead><tbody></tbody></table></div>'),
  Pm = R('<div class="mb-3"><div class="bg-base-200/60 border-base-300/60 rounded-xl border"><div class="flex flex-wrap items-start justify-between gap-2 px-4 py-3"><button type="button" class="flex min-w-0 flex-1 items-start justify-between gap-3 text-left"><div class="space-y-1"><div class="flex flex-wrap items-center gap-2"><span>▼</span> <span class="text-sm font-semibold"> </span> <!></div> <p class="text-base-content/70 text-xs"> </p></div></button> <div class="flex flex-wrap gap-1"><button class="btn btn-xs btn-soft"> </button> <button class="btn btn-xs btn-ghost"> </button></div></div> <!></div></div> <!>', 1),
  zm = R('<div class="pointer-events-none w-full select-none"><div class="rounded-t-box bg-base-100 border-base-300 sm:rounded-b-box pointer-events-auto w-full border-t sm:mb-3 sm:shadow-xl"><div class="p-3"><div role="button" tabindex="0" class="flex cursor-grab flex-wrap items-center justify-between gap-1 active:cursor-grabbing"><h2 class="flex items-center gap-1 pl-1 text-lg"><div class="bg-base-content/20 flex size-6 items-center justify-center rounded-full"><!></div> <span class="ml-0.5"> </span> <span class="text-base-content/80 ml-0.5 text-sm"> </span></h2> <div class="flex items-center gap-1"><!> <button><!></button> <button><!></button> <button><!></button> <button class="btn btn-circle btn-sm"><!></button></div></div> <div class="pb-3"><!></div></div></div></div>');

function Am(t, r) {
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

  function D(S, j, O) {
    return O >= j ? Math.min(O, Math.max(j, S)) : j
  }

  function K() {
    var Qe;
    if (!n(u)) return;
    const S = ((Qe = r.getDragBounds) == null ? void 0 : Qe.call(r)) ?? M(),
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
      j = O => {
        (f == null ? void 0 : f.pointerId) === O.pointerId && He()
      };
    return window.addEventListener("pointermove", S), window.addEventListener("pointerup", j), window.addEventListener("pointercancel", j), window.addEventListener("resize", K), () => {
      window.removeEventListener("pointermove", S), window.removeEventListener("pointerup", j), window.removeEventListener("pointercancel", j), window.removeEventListener("resize", K), He()
    }
  });
  var $ = zm();
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
  em(it, {
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
  im(cr, {
    class: "size-4"
  }), l(Ye);
  var Se = v(Ye, 2);
  let Ot;
  var vt = c(Se);
  cm(vt, {
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
        nm(S, {
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
  ta(Zt, {
    class: "size-4"
  }), l(jt), l(ie), l(Re);
  var _r = v(Re, 2),
    Yt = c(_r);
  {
    var dr = S => {
        var j = um();
        k(S, j)
      },
      br = S => {
        var j = Jn(),
          O = c(j),
          Ie = c(O, !0);
        l(O), l(j), Y(() => y(Ie, r.emptyLabel)), k(S, j)
      },
      fr = S => {
        var j = Pm(),
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
              var B = _m(),
                le = c(B, !0);
              l(B), Y(() => y(le, r.activeFilterCount)), k(E, B)
            },
            i = E => {
              var B = dm(),
                le = c(B, !0);
              l(B), Y(me => y(le, me), [() => ha()]), k(E, B)
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
          A = c(b, !0);
        l(b);
        var T = v(b, 2),
          V = c(T, !0);
        l(T), l(I), l(Qe);
        var oe = v(Qe, 2);
        {
          var Ue = E => {
            var B = pm(),
              le = c(B),
              me = c(le);
            {
              var de = xe => {
                  var rt = fm(),
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
                      y(Ve, ba[te]), tt !== (tt = te) && (be.value = (be.__value = te) ?? "")
                    }), k(Fe, be)
                  }), l(Ne), l(rt), Y((Fe, te) => {
                    y(et, Fe), y(yt, te)
                  }, [() => xa(), () => jf()]), fn(Ne, () => e().role, Fe => e().role = Fe), k(xe, rt)
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
                return ((Fe = (ot = sa)[et()]) == null ? void 0 : Fe.call(ot)) ?? `${Yn()} ${et()}`
              }]), k(xe, Ne)
            }), l(Ae), l(g), l(le), l(B), Y((xe, rt, bt, et, Ne, nt, yt, ot, Fe, te, be, Ve, tt) => {
              y(Et, xe), y(Dt, rt), y(Kt, bt), y(Qt, et), y(ee, Ne), y(Ce, nt), je(dt, "placeholder", yt), y($t, ot), je(er, "placeholder", Fe), y(Wt, te), je(X, "placeholder", be), y(fe, Ve), y(ge, tt)
            }, [() => aa(), () => Kn(), () => ia(), () => hn(), () => Xn(), () => ca(), () => Ap(), () => Yp(), () => hh(), () => rh(), () => Ph(), () => Yn(), () => Kn()]), fn($e, () => e().punishment, xe => e().punishment = xe), pn(dt, () => e().alliance, xe => e().alliance = xe), pn(er, () => e().minUserId, xe => e().minUserId = xe), pn(X, () => e().maxUserId, xe => e().maxUserId = xe), fn(Ae, () => e().colorIdx, xe => e().colorIdx = xe), Ln(3, B, () => Nn, () => ({
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
              l(le), l(B), Y(de => y(me, de), [() => fv()]), k(E, B)
            },
            we = E => {
              var B = Mm(),
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
              ra(ut, {
                class: "size-3"
              }), l($e);
              var Dt = v($e, 2);
              {
                var gt = X => {
                    var g = hm(),
                      ze = c(g);
                    wn(ze, {
                      class: "size-4"
                    }), l(g), Y(fe => {
                      je(g, "data-tip", fe), g.disabled = a().timeout
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
                    var g = vm(),
                      ze = c(g);
                    Hn(ze, {
                      class: "size-4"
                    }), l(g), Y(fe => {
                      je(g, "data-tip", fe), g.disabled = a().ban
                    }, [() => ua()]), he("click", g, function(...fe) {
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
                    var g = mm(),
                      ze = c(g);
                    {
                      var fe = C => {
                          var ge = Kr();
                          k(C, ge)
                        },
                        Ae = C => {
                          oa(C, {
                            class: "size-4"
                          })
                        };
                      J(ze, C => {
                        a().phone ? C(fe) : C(Ae, -1)
                      })
                    }
                    l(g), Y(C => {
                      je(g, "data-tip", C), g.disabled = a().phone || !r.hasSelection
                    }, [() => ma()]), he("click", g, function(...C) {
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
                    var g = gm(),
                      ze = c(g);
                    {
                      var fe = C => {
                          var ge = Kr();
                          k(C, ge)
                        },
                        Ae = C => {
                          na(C, {
                            class: "size-4"
                          })
                        };
                      J(ze, C => {
                        a().clear ? C(fe) : C(Ae, -1)
                      })
                    }
                    l(g), Y(C => {
                      je(g, "data-tip", C), g.disabled = a().clear || !r.hasSelection
                    }, [() => _a()]), he("click", g, function(...C) {
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
                    var g = xm(),
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
                var fe = Im();
                let Ae;
                var C = c(fe),
                  ge = c(C);
                Pr(ge), l(C);
                var xt = v(C),
                  xe = c(xt);
                {
                  var rt = te => {
                      var be = bm(),
                        Ve = v(ir(be), 2),
                        tt = c(Ve, !0);
                      l(Ve), Y(Rt => y(tt, Rt), [() => en()]), k(te, be)
                    },
                    bt = te => {
                      var be = km(),
                        Ve = ir(be);
                      {
                        let ve = N(() => n(g).picture ?? void 0),
                          ke = N(() => n(g).avatarSeed ?? void 0);
                        Qs(Ve, {
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
                        ea(Rt, {
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
                            var hr = ym(),
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
                            $s(ve, {
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
                          Js(ve, {
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
                          var ke = wm(),
                            wt = c(ke, !0);
                          l(ke), Y(ft => y(wt, ft), [() => Ks()]), k(ve, ke)
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
                    var be = qm(),
                      Ve = c(be);
                    l(be), Y((tt, Rt) => y(Ve, `${tt??""}
														${Rt??""}`), [() => va(), () => n(g).totalPixelCount.toLocaleString(navigator.language)]), k(te, be)
                  };
                  J(nt, te => {
                    n(g).filteredPixelCount !== n(g).totalPixelCount && te(yt)
                  })
                }
                var ot = v(nt, 2);
                {
                  var Fe = te => {
                    var be = Sm(),
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
                Bn(Oe, r.filteredSelectionState !== "none"), Oe.indeterminate = r.filteredSelectionState === "some", y(Et, `${X??""} `), je($e, "data-tip", g), y(rr, ` ${ze??""}`)
              }, [() => $r(), () => da(), () => ga()]), he("click", Oe, function(...X) {
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
          Tt(H, 1, `text-base-content/60 mt-0.5 text-xs transition-transform duration-200 ${n(o)?"rotate-180":""}`), y(ne, E), y(x, `${B??""}
											${le??""} -
											${me??""}
											${de??""}`), b.disabled = r.rows.length === 0, y(A, Me), T.disabled = !r.hasActiveFilters, y(V, Oe)
        }, [() => fa(), () => r.rows.length.toLocaleString(navigator.language), () => vi(), () => r.filteredPixelCount.toLocaleString(navigator.language), () => Gn(), () => r.filteredSelectionState === "all" ? yf() : lf(), () => pa()]), he("click", Je, () => m(o, !n(o))), he("click", b, function(...E) {
          var B;
          (B = r.ontogglefiltered) == null || B.apply(this, E)
        }), he("click", T, function(...E) {
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
    }), y(Te, S), y(De, `(${j??""}: ${O??""})`), re = Tt(Ye, 1, "btn btn-xs tooltip tooltip-bottom", null, re, {
      "btn-soft": r.activeTool !== "brush-circle",
      "btn-primary": r.activeTool === "brush-circle"
    }), je(Ye, "data-tip", Ie), je(Ye, "aria-pressed", r.activeTool === "brush-circle"), Ot = Tt(Se, 1, "btn btn-xs tooltip tooltip-bottom", null, Ot, {
      "btn-soft": r.activeTool !== "brush-square",
      "btn-primary": r.activeTool === "brush-square"
    }), je(Se, "data-tip", Qe), je(Se, "aria-pressed", r.activeTool === "brush-square"), Vt = Tt(ct, 1, "btn btn-xs tooltip tooltip-bottom", null, Vt, {
      "btn-soft": r.activeTool !== "user-picker",
      "btn-primary": r.activeTool === "user-picker"
    }), je(ct, "data-tip", Je), je(ct, "aria-pressed", r.activeTool === "user-picker"), je(jt, "aria-label", p)
  }, [() => ap(), () => Gn(), () => r.totalSelectedPixels.toLocaleString(navigator.language), () => Lh({
    size: r.brushDiameter
  }), () => ev({
    size: r.brushDiameter
  }), () => Vd(), () => as()]), he("pointerdown", Re, Le), he("click", Ye, () => r.ontoolchange("brush-circle")), he("click", Se, () => r.ontoolchange("brush-square")), he("click", ct, () => r.ontoolchange("user-picker")), he("click", jt, function(...S) {
    var j;
    (j = r.onclose) == null || j.apply(this, S)
  }), Ln(3, ue, () => Nn, () => ({
    duration: 100
  })), k(t, $), ln()
}
In(["pointerdown", "click"]);

function Tm() {
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

function Um(t, r) {
  return r.punishment === "" ? !0 : r.punishment === "ban" ? t.banned === !0 : r.punishment === "timeout" ? t.timedOut === !0 && t.banned !== !0 : t.banned !== !0 && t.timedOut !== !0
}

function Cm(t, r) {
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
  return a !== void 0 && t.id > a ? !1 : Um(t, r)
}

function jm(t, r, e = lr(r)) {
  return Cm(t, r) ? e === void 0 ? Ar(t.painted) : t.painted.colorCounts[e] ?? 0 : 0
}

function Em(t, r = Ut.colors.length) {
  return t.role !== "" || Mn(t.alliance) !== "" || t.minUserId.trim() !== "" || t.maxUserId.trim() !== "" || lr(t, r) !== void 0 || t.punishment !== ""
}

function Dm(t, r = Ut.colors.length) {
  let e = 0;
  return t.role !== "" && (e += 1), Mn(t.alliance) !== "" && (e += 1), t.minUserId.trim() !== "" && (e += 1), t.maxUserId.trim() !== "" && (e += 1), lr(t, r) !== void 0 && (e += 1), t.punishment !== "" && (e += 1), e
}

function E0(t) {
  return t + .5
}

function Bm(t, r, e, s, a, o) {
  const u = t + .5 - e,
    d = r + .5 - s;
  return o === "circle" ? u * u + d * d <= a * a : Math.abs(u) <= a && Math.abs(d) <= a
}
var Lt, zt;
class Rm {
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
const Fm = 1e4;

function Sn(t, r) {
  return `${t}:${r}`
}
var Tr, Ur, Xt;
class Hm {
  constructor(r, e) {
    sr(this, "selectedUsers", new kn);
    sr(this, "selection", new Rm);
    qt(this, Tr, G(on(Tm())));
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
      const a = jm(s, this.filters, r);
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
    return Em(this.filters)
  }
  get activeFilterCount() {
    return Dm(this.filters)
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
          for (const K of D) Bm(K.x, K.y, r, e, s, a) && h.push(K)
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
      if (r.length < Fm) {
        this.renderer.addPixels(r);
        return
      }
      this.renderer.addRectangles(Lm(r))
    }
  }
}
Tr = new WeakMap, Ur = new WeakMap, Xt = new WeakMap;

function Lm(t) {
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
const Xm = 3e4,
  Ym = 1e6;

function Wm(t, r, e, s, a) {
  var He;
  const o = ((He = t[0]) == null ? void 0 : He.durationUs) ?? Math.max(1, Math.round(83333.33333333333)),
    u = ug(t),
    d = cg(t),
    f = Nm();
  let h = ts(t, e, s, o, u, a, 0);
  const M = f.byteLength + h.byteLength + 8;
  h = ts(t, e, s, o, u, a, M);
  const D = lg("mdat", d),
    K = [f, h, D];
  for (const Le of t) K.push(Le.data);
  return new Blob(K, {
    type: r.mimeType
  })
}

function Nm() {
  return Ct("ftyp", [ar("isom"), w(512), ar("isom"), ar("iso2"), ar("avc1"), ar("mp41")])
}

function ts(t, r, e, s, a, o, u) {
  return Ct("moov", [Gm(a), Om(t, r, e, s, a, o, u)])
}

function Gm(t) {
  return lt("mvhd", 0, 0, [w(0), w(0), w(1e6), w(t), w(65536), Ee(256), Ee(0), w(0), w(0), ls(), w(0), w(0), w(0), w(0), w(0), w(0), w(2)])
}

function Om(t, r, e, s, a, o, u) {
  return Ct("trak", [Vm(r, e, a), Zm(t, r, e, s, a, o, u)])
}

function Vm(t, r, e) {
  return lt("tkhd", 0, 7, [w(0), w(0), w(1), w(0), w(e), w(0), w(0), Ee(0), Ee(0), Ee(0), Ee(0), ls(), w(t << 16), w(r << 16)])
}

function Zm(t, r, e, s, a, o, u) {
  return Ct("mdia", [Km(a), Qm(), Jm(t, r, e, s, o, u)])
}

function Km(t) {
  return lt("mdhd", 0, 0, [w(0), w(0), w(1e6), w(t), Ee(0), Ee(0)])
}

function Qm() {
  return lt("hdlr", 0, 0, [w(0), ar("vide"), w(0), w(0), w(0), ar("VideoHandler\0")])
}

function Jm(t, r, e, s, a, o) {
  return Ct("minf", [lt("vmhd", 0, 1, [Ee(0), Ee(0), Ee(0), Ee(0)]), $m(), eg(t, r, e, s, a, o)])
}

function $m() {
  const t = lt("url ", 0, 1, []),
    r = lt("dref", 0, 0, [w(1), t]);
  return Ct("dinf", [r])
}

function eg(t, r, e, s, a, o) {
  return Ct("stbl", [tg(r, e, a), ng(t.length, s), sg(t.length), ag(t), ig(o), og(t)])
}

function tg(t, r, e) {
  return lt("stsd", 0, 0, [w(1), rg(t, r, e)])
}

function rg(t, r, e) {
  const s = new Uint8Array(32);
  return Ct("avc1", [new Uint8Array(6), Ee(1), Ee(0), Ee(0), w(0), w(0), w(0), Ee(t), Ee(r), w(4718592), w(4718592), w(0), Ee(1), s, Ee(24), Ee(65535), Ct("avcC", [e])])
}

function ng(t, r) {
  return lt("stts", 0, 0, [w(1), w(t), w(r)])
}

function sg(t) {
  return lt("stsc", 0, 0, [w(1), w(1), w(t), w(1)])
}

function ag(t) {
  const r = new Array(t.length);
  for (let e = 0; e < t.length; e += 1) r[e] = w(t[e].data.byteLength);
  return lt("stsz", 0, 0, [w(0), w(t.length), ...r])
}

function ig(t) {
  if (t > 4294967295) throw new Error(at());
  return lt("stco", 0, 0, [w(1), w(t)])
}

function og(t) {
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

function lg(t, r) {
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

function cg(t) {
  let r = 0;
  for (const e of t) r += e.data.byteLength;
  return r
}

function ug(t) {
  const r = t[t.length - 1];
  return r ? r.timestampUs + r.durationUs : 0
}

function _g(t) {
  const r = ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t),
    e = new Uint8Array(r.byteLength);
  return e.set(r), e
}

function dg(t, r, e, s, a) {
  const o = r.webmCodecId;
  if (!o) throw new Error(at());
  const u = ht([26, 69, 223, 163], [...st([66, 134], 1), ...st([66, 247], 1), ...st([66, 242], 4), ...st([66, 243], 8), ...nn([66, 130], "webm"), ...st([66, 135], 4), ...st([66, 133], 2)]),
    d = [...fg(t), ...pg(o, e, s, a), ...hg(t)],
    f = ht([24, 83, 128, 103], d),
    h = [];
  for (const z of u) h.push(z);
  for (const z of f) h.push(z);
  return new Blob(h, {
    type: r.mimeType
  })
}

function fg(t) {
  const r = t[t.length - 1],
    e = r ? (r.timestampUs + r.durationUs) / 1e3 : 0;
  return ht([21, 73, 169, 102], [...st([42, 215, 177], Ym), ...mg([68, 137], e), ...nn([77, 128], "wplace"), ...nn([87, 65], "wplace")])
}

function pg(t, r, e, s) {
  const a = ht([174], [...st([215], 1), ...st([115, 197], 1), ...st([131], 1), ...nn([134], t), ...st([35, 227, 131], Math.round(1e9 / s)), ...ht([224], [...st([176], r), ...st([186], e)])]);
  return ht([22, 84, 174, 107], a)
}

function hg(t) {
  const r = [];
  let e = -1,
    s = [];
  for (const a of t) {
    const o = Math.round(a.timestampUs / 1e3);
    (e < 0 || o - e > Xm) && (s.length > 0 && r.push(...ht([31, 67, 182, 117], s)), e = o, s = st([231], e)), s.push(...vg(a, e))
  }
  return s.length > 0 && r.push(...ht([31, 67, 182, 117], s)), r
}

function vg(t, r) {
  const s = Math.round(t.timestampUs / 1e3) - r;
  if (s < -32768 || s > 32767) throw new Error(at());
  const a = new Uint8Array(4);
  return a[0] = 129, a[1] = s >> 8 & 255, a[2] = s & 255, a[3] = t.keyFrame ? 128 : 0, ht([163], [a, t.data])
}

function ht(t, r) {
  const e = cs(r);
  return [new Uint8Array(t), xg(e), ...r]
}

function st(t, r) {
  return ht(t, [gg(r)])
}

function mg(t, r) {
  const e = new Uint8Array(8);
  return new DataView(e.buffer).setFloat64(0, r, !1), ht(t, [e])
}

function nn(t, r) {
  return ht(t, [new TextEncoder().encode(r)])
}

function gg(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error(at());
  let r = 1;
  for (; r < 8 && t >= 2 ** (r * 8);) r += 1;
  const e = new Uint8Array(r);
  let s = t;
  for (let a = r - 1; a >= 0; a -= 1) e[a] = s & 255, s = Math.floor(s / 256);
  return e
}

function xg(t) {
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
const bg = 4096,
  yg = .15,
  wg = 5e5,
  kg = 25e6,
  qg = 8,
  Sg = /^#[0-9a-fA-F]{6}$/;

function D0(t) {
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
      Ig(u, Ye, ie, Q, a);
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

function Ig(t, r, e, s, a) {
  if (a) {
    const o = (e + s) % 2 === 0 ? 232 : 218;
    t[r] = o, t[r + 1] = o, t[r + 2] = o, t[r + 3] = 255;
    return
  }
  t[r] = 0, t[r + 1] = 0, t[r + 2] = 0, t[r + 3] = 0
}

function Mg(t, r, e) {
  for (let s = 0; s < e; s += 1) {
    const a = s * r;
    for (let o = 0; o < r; o += 1) {
      const u = (a + o) * 4,
        d = (o + s) % 2 === 0 ? 232 : 218;
      t[u] = d, t[u + 1] = d, t[u + 2] = d, t[u + 3] = 255
    }
  }
}

function B0(t) {
  const r = t.maxGlobalX - t.minGlobalX + 1,
    e = t.maxGlobalY - t.minGlobalY + 1;
  if (r <= 0 || e <= 0) return;
  const s = bg,
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
  const s = Math.round(t * r * e * yg);
  return Pg(s, wg, kg)
}

function Pg(t, r, e) {
  return Number.isFinite(t) ? Math.min(e, Math.max(r, t)) : r
}

function R0(t) {
  if (typeof t != "string") return null;
  const r = t.trim();
  return Sg.test(r) ? r.toUpperCase() : null
}

function F0() {
  if (typeof MediaRecorder > "u") return;
  const t = ["video/webm;codecs=vp8", "video/webm;codecs=vp9", "video/webm"];
  for (const r of t)
    if (MediaRecorder.isTypeSupported(r)) return r
}
async function H0(t, r, e) {
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
  o ? Mg(r.data, e.sampledWidth, e.sampledHeight) : r.data.fill(0);
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
async function L0(t, r) {
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
        !o && M && (o = _g(M));
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
        }), z.close(); d.encodeQueueSize > qg;)
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
      blob: Wm(a, r, t.renderFrame.outputWidth, t.renderFrame.outputHeight, o),
      fileExtension: "mp4"
    }
  }
  if (!r.webmCodecId) throw new Error(at());
  return {
    blob: dg(a, r, t.renderFrame.outputWidth, t.renderFrame.outputHeight, t.options.fps),
    fileExtension: "webm"
  }
}
async function X0(t, r) {
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

function zg(t, r) {
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

function Ag(t, r) {
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

function Tg(t, r, e, s, a = 64) {
  return t.map(o => {
    const u = Ag(r.get(vs(o)) ?? [], e),
      d = (u == null ? void 0 : u.userId) ?? 0;
    return ms(o, (u == null ? void 0 : u.newColor) ?? 0, d, s(d), a)
  })
}

function Ug(t, r, e, s = 64) {
  const a = new Map(r.map(o => [`${o.tileX*s+o.pixelX}:${o.tileY*s+o.pixelY}`, o]));
  return t.map(o => {
    const u = a.get(vs(o));
    if (u) return u;
    const d = o.userId ?? 0;
    return ms(o, o.color, d, e(d), s)
  })
}
var Cg = R('<span class="loading loading-spinner loading-xs"></span>'),
  jg = R('<button class="btn btn-xs tooltip tooltip-bottom btn-soft"><!></button>'),
  Eg = R("<!> <!> <!>", 1);

function Y0(t, r) {
  an(r, !0);
  const e = p => {
      var q = jg(),
        H = c(q);
      {
        var L = W => {
            var se = Cg();
            k(W, se)
          },
          ne = W => {
            la(W, {
              class: "size-4"
            })
          };
        J(H, W => {
          n(z) ? W(L) : W(ne, -1)
        })
      }
      l(q), Y(W => {
        je(q, "data-tip", W), q.disabled = n(z) || n(a)
      }, [() => Ca()]), he("click", q, Ot), k(p, q)
    },
    s = new Hm(64, {
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
  }), js(() => {
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
    (H ? s.deselectUser(L.userId) : s.selectUser(L.userId)) && (Vr.plop.play(), pe.success(H ? Fv({
      name: (ne == null ? void 0 : ne.name) ?? $r()
    }) : Iv({
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
        zg(p, `selected-area-${r.area.maxX-r.area.minX+1}x${r.area.maxY-r.area.minY+1}.png`), pe.success(wd())
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
      pe.success(K_({
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
      pe.success(cd({
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

  function jt(p) {
    return Tg(n(ue), ye, p, ur)
  }

  function Zt(p) {
    return Ug(n(it), jt(p), ur)
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
    navigator.clipboard.writeText(n(Te).join(", ")), pe.success(Ed())
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
    S = Eg(),
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
    Am(j, {
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
      Qv(p, {
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
var Dg = R("<div><!></div>");

function W0(t, r) {
  an(r, !0);
  var e = Dg(),
    s = c(e);
  is(s, () => r.children ?? ns), l(e), Y(() => Tt(e, 1, `bg-base-100/60 border-base-content/20 pointer-events-none absolute -top-15 left-1/2 line-clamp-1 flex w-max -translate-x-1/2 items-center gap-1 rounded-full border-2 px-3 py-1.5 select-none ${r.class??""}`)), k(t, e), ln()
}
export {
  em as A, W0 as I, Qv as R, kn as S, U0 as a, Y0 as b, j0 as c, Ca as d, vi as e, Hm as f, Ar as g, Pg as h, R0 as i, Fv as j, Iv as k, E0 as l, Sn as m, T0 as n, Am as o, Gn as p, en as q, at as r, C0 as s, B0 as t, H0 as u, F0 as v, D0 as w, L0 as x, X0 as y, zg as z
};