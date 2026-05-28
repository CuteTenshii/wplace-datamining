import {
  g as t
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  p as re,
  t as g,
  i,
  a as s,
  b as ne,
  e as ke,
  u as Q,
  h as he,
  d as _,
  s as l,
  c as P,
  r as u,
  m as Z,
  f as T,
  bj as A,
  n as I
} from "./5zj5-rPA.js";
import {
  s as m
} from "./DDRNvPA5.js";
import {
  i as K
} from "./D-uzaoLl.js";
import {
  e as ce,
  i as de
} from "./DtTXMYQV.js";
import {
  c as Ce
} from "./yb-uQbOV.js";
import {
  s as O,
  a as N,
  c as ge
} from "./B13kG5TI.js";
import {
  p as H
} from "./C4sT4bjp.js";
import {
  h as ie
} from "./Cp1SQHyC.js";
import {
  d as $e,
  a as X
} from "./CRfpTDDG.js";
import {
  s as ee
} from "./C2ATkZL9.js";
const De = () => "Click to reveal",
  Pe = () => "Clique para revelar",
  Se = () => "点击查看",
  Ge = () => "Klicken zum Anzeigen",
  Ue = () => "Haz clic para revelar",
  qe = () => "Cliquez pour révéler",
  Le = () => "Clicca per rivelare",
  Ne = () => "クリックして表示",
  Ae = () => "Kliknij, aby odsłonić",
  Ie = () => "Нажмите, чтобы показать",
  Re = () => "Натисніть, щоб показати",
  Te = () => "Nhấn để hiện",
  Me = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? De() : e === "pt" ? Pe() : e === "ch" ? Se() : e === "de" ? Ge() : e === "es" ? Ue() : e === "fr" ? qe() : e === "it" ? Le() : e === "jp" ? Ne() : e === "pl" ? Ae() : e === "ru" ? Ie() : e === "uk" ? Re() : Te()
  },
  Be = () => "Hide",
  Ee = () => "Ocultar",
  Ke = () => "隐藏",
  He = () => "Ausblenden",
  Ze = () => "Ocultar",
  Ve = () => "Masquer",
  Oe = () => "Nascondi",
  Fe = () => "非表示",
  Je = () => "Ukryj",
  We = () => "Скрыть",
  Xe = () => "Сховати",
  Qe = () => "Ẩn",
  Ye = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Be() : e === "pt" ? Ee() : e === "ch" ? Ke() : e === "de" ? He() : e === "es" ? Ze() : e === "fr" ? Ve() : e === "it" ? Oe() : e === "jp" ? Fe() : e === "pl" ? Je() : e === "ru" ? We() : e === "uk" ? Xe() : Qe()
  },
  er = () => "Hide sensitive content",
  rr = () => "Ocultar conteúdo sensível",
  nr = () => "隐藏敏感内容",
  tr = () => "Sensiblen Inhalt ausblenden",
  ir = () => "Ocultar contenido sensible",
  or = () => "Masquer le contenu sensible",
  sr = () => "Nascondi contenuto sensibile",
  ur = () => "センシティブなコンテンツを非表示",
  ar = () => "Ukryj wrażliwą treść",
  _r = () => "Скрыть чувствительный контент",
  lr = () => "Сховати чутливий вміст",
  cr = () => "Ẩn nội dung nhạy cảm",
  dr = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? er() : e === "pt" ? rr() : e === "ch" ? nr() : e === "de" ? tr() : e === "es" ? ir() : e === "fr" ? or() : e === "it" ? sr() : e === "jp" ? ur() : e === "pl" ? ar() : e === "ru" ? _r() : e === "uk" ? lr() : cr()
  },
  gr = () => "Image carousel",
  pr = () => "Carrossel de imagens",
  fr = () => "图片轮播",
  mr = () => "Bilderkarussell",
  vr = () => "Carrusel de imágenes",
  hr = () => "Carrousel d'images",
  br = () => "Carosello di immagini",
  xr = () => "画像カルーセル",
  kr = () => "Karuzela obrazów",
  wr = () => "Карусель изображений",
  zr = () => "Карусель зображень",
  yr = () => "Băng chuyền hình ảnh",
  jr = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? gr() : e === "pt" ? pr() : e === "ch" ? fr() : e === "de" ? mr() : e === "es" ? vr() : e === "fr" ? hr() : e === "it" ? br() : e === "jp" ? xr() : e === "pl" ? kr() : e === "ru" ? wr() : e === "uk" ? zr() : yr()
  },
  Cr = n => `Image ${n.current} of ${n.total}`,
  $r = n => `Imagem ${n.current} de ${n.total}`,
  Dr = n => `第 ${n.current} 张，共 ${n.total} 张`,
  Pr = n => `Bild ${n.current} von ${n.total}`,
  Sr = n => `Imagen ${n.current} de ${n.total}`,
  Gr = n => `Image ${n.current} sur ${n.total}`,
  Ur = n => `Immagine ${n.current} di ${n.total}`,
  qr = n => `画像 ${n.current} / ${n.total}`,
  Lr = n => `Obraz ${n.current} z ${n.total}`,
  Nr = n => `Изображение ${n.current} из ${n.total}`,
  Ar = n => `Зображення ${n.current} з ${n.total}`,
  Ir = n => `Hình ${n.current} trên ${n.total}`,
  Rr = (n, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Cr(n) : e === "pt" ? $r(n) : e === "ch" ? Dr(n) : e === "de" ? Pr(n) : e === "es" ? Sr(n) : e === "fr" ? Gr(n) : e === "it" ? Ur(n) : e === "jp" ? qr(n) : e === "pl" ? Lr(n) : e === "ru" ? Nr(n) : e === "uk" ? Ar(n) : Ir(n)
  },
  Tr = () => "Next",
  Mr = () => "Próximo",
  Br = () => "下一张",
  Er = () => "Weiter",
  Kr = () => "Siguiente",
  Hr = () => "Suivant",
  Zr = () => "Successivo",
  Vr = () => "次へ",
  Or = () => "Następny",
  Fr = () => "Далее",
  Jr = () => "Далі",
  Wr = () => "Tiếp",
  Xr = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Tr() : e === "pt" ? Mr() : e === "ch" ? Br() : e === "de" ? Er() : e === "es" ? Kr() : e === "fr" ? Hr() : e === "it" ? Zr() : e === "jp" ? Vr() : e === "pl" ? Or() : e === "ru" ? Fr() : e === "uk" ? Jr() : Wr()
  },
  Qr = () => "Previous",
  Yr = () => "Anterior",
  en = () => "上一张",
  rn = () => "Zurück",
  nn = () => "Anterior",
  tn = () => "Précédent",
  on = () => "Precedente",
  sn = () => "前へ",
  un = () => "Poprzedni",
  an = () => "Назад",
  _n = () => "Назад",
  ln = () => "Trước",
  cn = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Qr() : e === "pt" ? Yr() : e === "ch" ? en() : e === "de" ? rn() : e === "es" ? nn() : e === "fr" ? tn() : e === "it" ? on() : e === "jp" ? sn() : e === "pl" ? un() : e === "ru" ? an() : e === "uk" ? _n() : ln()
  },
  dn = () => "Sensitive image",
  gn = () => "Imagem sensível",
  pn = () => "敏感图片",
  fn = () => "Sensibles Bild",
  mn = () => "Imagen sensible",
  vn = () => "Image sensible",
  hn = () => "Immagine sensibile",
  bn = () => "センシティブな画像",
  xn = () => "Wrażliwy obraz",
  kn = () => "Чувствительное изображение",
  wn = () => "Чутливе зображення",
  zn = () => "Hình ảnh nhạy cảm",
  yn = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? dn() : e === "pt" ? gn() : e === "ch" ? pn() : e === "de" ? fn() : e === "es" ? mn() : e === "fr" ? vn() : e === "it" ? hn() : e === "jp" ? bn() : e === "pl" ? xn() : e === "ru" ? kn() : e === "uk" ? wn() : zn()
  },
  jn = () => "Allowed",
  Cn = () => "Permitido",
  $n = () => "允许",
  Dn = () => "Erlaubt",
  Pn = () => "Permitido",
  Sn = () => "Autorisé",
  Gn = () => "Consentito",
  Un = () => "許可",
  qn = () => "Dozwolone",
  Ln = () => "Разрешено",
  Nn = () => "Дозволено",
  An = () => "Được phép",
  be = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? jn() : e === "pt" ? Cn() : e === "ch" ? $n() : e === "de" ? Dn() : e === "es" ? Pn() : e === "fr" ? Sn() : e === "it" ? Gn() : e === "jp" ? Un() : e === "pl" ? qn() : e === "ru" ? Ln() : e === "uk" ? Nn() : An()
  },
  In = () => "Artwork removal",
  Rn = () => "Remoção de arte",
  Tn = () => "作品移除",
  Mn = () => "Entfernung des Kunstwerks",
  Bn = () => "Eliminación de obras",
  En = () => "Suppression de l'œuvre",
  Kn = () => "Rimozione dell'opera",
  Hn = () => "作品の削除",
  Zn = () => "Usunięcie grafiki",
  Vn = () => "Удаление рисунка",
  On = () => "Видалення малюнків",
  Fn = () => "Gỡ bỏ tác phẩm",
  Jn = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? In() : e === "pt" ? Rn() : e === "ch" ? Tn() : e === "de" ? Mn() : e === "es" ? Bn() : e === "fr" ? En() : e === "it" ? Kn() : e === "jp" ? Hn() : e === "pl" ? Zn() : e === "ru" ? Vn() : e === "uk" ? On() : Fn()
  },
  Wn = () => "Community cleanup",
  Xn = () => "Limpeza pela comunidade",
  Qn = () => "社区清理",
  Yn = () => "Community-Bereinigung",
  et = () => "Limpieza comunitaria",
  rt = () => "Nettoyage communautaire",
  nt = () => "Pulizia della community",
  tt = () => "コミュニティによる清掃",
  it = () => "Sprzątanie przez społeczność",
  ot = () => "Очистка сообществом",
  st = () => "Очищення спільнотою",
  ut = () => "Cộng đồng dọn dẹp",
  at = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Wn() : e === "pt" ? Xn() : e === "ch" ? Qn() : e === "de" ? Yn() : e === "es" ? et() : e === "fr" ? rt() : e === "it" ? nt() : e === "jp" ? tt() : e === "pl" ? it() : e === "ru" ? ot() : e === "uk" ? st() : ut()
  },
  _t = () => "Permanent Ban",
  lt = () => "Banimento Permanente",
  ct = () => "永久封禁",
  dt = () => "Permanenter Bann",
  gt = () => "Ban Permanente",
  pt = () => "Bannissement permanent",
  ft = () => "Ban permanente",
  mt = () => "永久BAN",
  vt = () => "Permanentny ban",
  ht = () => "Перманентный бан",
  bt = () => "Перманентний бан",
  xt = () => "Cấm vĩnh viễn",
  kt = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? _t() : e === "pt" ? lt() : e === "ch" ? ct() : e === "de" ? dt() : e === "es" ? gt() : e === "fr" ? pt() : e === "it" ? ft() : e === "jp" ? mt() : e === "pl" ? vt() : e === "ru" ? ht() : e === "uk" ? bt() : xt()
  },
  wt = () => "Timeout",
  zt = () => "Suspensão",
  yt = () => "禁言",
  jt = () => "Sperre",
  Ct = () => "Suspensión",
  $t = () => "Suspension",
  Dt = () => "Sospensione",
  Pt = () => "一時停止",
  St = () => "Zawieszenie",
  Gt = () => "Тайм-аут",
  Ut = () => "Тайм-аут",
  qt = () => "Tạm khóa",
  Lt = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? wt() : e === "pt" ? zt() : e === "ch" ? yt() : e === "de" ? jt() : e === "es" ? Ct() : e === "fr" ? $t() : e === "it" ? Dt() : e === "jp" ? Pt() : e === "pl" ? St() : e === "ru" ? Gt() : e === "uk" ? Ut() : qt()
  },
  Nt = () => "Timeout risk",
  At = () => "Risco de suspensão",
  It = () => "禁言风险",
  Rt = () => "Sperrrisiko",
  Tt = () => "Riesgo de suspensión",
  Mt = () => "Risque de suspension",
  Bt = () => "Rischio sospensione",
  Et = () => "一時停止のリスク",
  Kt = () => "Ryzyko zawieszenia",
  Ht = () => "Риск тайм-аута",
  Zt = () => "Ризик тайм-ауту",
  Vt = () => "Nguy cơ tạm khóa",
  Ot = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Nt() : e === "pt" ? At() : e === "ch" ? It() : e === "de" ? Rt() : e === "es" ? Tt() : e === "fr" ? Mt() : e === "it" ? Bt() : e === "jp" ? Et() : e === "pl" ? Kt() : e === "ru" ? Ht() : e === "uk" ? Zt() : Vt()
  },
  Ft = () => "Drawing a new artwork over a flag",
  Jt = () => "Desenhar uma nova arte por cima de uma bandeira",
  Wt = () => "在旗帜上绘制新作品",
  Xt = () => "Ein neues Kunstwerk über eine Flagge zeichnen",
  Qt = () => "Dibujar una nueva obra sobre una bandera",
  Yt = () => "Dessiner une nouvelle œuvre par-dessus un drapeau",
  ei = () => "Disegnare una nuova opera sopra una bandiera",
  ri = () => "旗の上に新しい作品を描く",
  ni = () => "Rysowanie nowej grafiki na fladze",
  ti = () => "Рисование нового рисунка поверх флага",
  ii = () => "Створення нового малюнка поверх прапора",
  oi = () => "Vẽ tác phẩm mới đè lên cờ",
  si = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ft() : e === "pt" ? Jt() : e === "ch" ? Wt() : e === "de" ? Xt() : e === "es" ? Qt() : e === "fr" ? Yt() : e === "it" ? ei() : e === "jp" ? ri() : e === "pl" ? ni() : e === "ru" ? ti() : e === "uk" ? ii() : oi()
  },
  ui = () => "Drawing over another drawing",
  ai = () => "Desenhar por cima de outro desenho",
  _i = () => "在另一幅画作上绘画",
  li = () => "Eine Zeichnung über eine andere zeichnen",
  ci = () => "Dibujar sobre otro dibujo",
  di = () => "Dessiner par-dessus un autre dessin",
  gi = () => "Disegnare sopra un altro disegno",
  pi = () => "別の描画の上に描く",
  fi = () => "Zamalowywanie jednego rysunku innym",
  mi = () => "Рисование поверх другого рисунка",
  vi = () => "Малювання поверх іншого малюнка",
  hi = () => "Vẽ đè lên bức vẽ khác",
  bi = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ui() : e === "pt" ? ai() : e === "ch" ? _i() : e === "de" ? li() : e === "es" ? ci() : e === "fr" ? di() : e === "it" ? gi() : e === "jp" ? pi() : e === "pl" ? fi() : e === "ru" ? mi() : e === "uk" ? vi() : hi()
  },
  xi = () => "Drawing over existing artwork with no creative intent",
  ki = () => "Desenhar por cima de artes existentes sem intenção criativa",
  wi = () => "毫无创意目的地覆盖现有作品",
  zi = () => "Übermalen bestehender Kunstwerke ohne kreative Absicht",
  yi = () => "Dibujar sobre obras existentes sin intención creativa",
  ji = () => "Peindre par-dessus une œuvre existante sans intention créative",
  Ci = () => "Disegnare sopra opere esistenti senza intento creativo",
  $i = () => "創造的な意図なく既存の作品の上に描く",
  Di = () => "Zamalowywanie istniejącej grafiki bez intencji twórczej",
  Pi = () => "Рисование поверх существующего рисунка без творческого намерения",
  Si = () => "Малювання поверх існуючого малюнка без творчого наміру",
  Gi = () => "Tô đè lên tác phẩm hiện có mà không có ý sáng tạo",
  Ui = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? xi() : e === "pt" ? ki() : e === "ch" ? wi() : e === "de" ? zi() : e === "es" ? yi() : e === "fr" ? ji() : e === "it" ? Ci() : e === "jp" ? $i() : e === "pl" ? Di() : e === "ru" ? Pi() : e === "uk" ? Si() : Gi()
  },
  qi = () => "Drawing over a repeated pattern",
  Li = () => "Desenhar por cima de um padrão repetitivo",
  Ni = () => "在重复图案上绘画",
  Ai = () => "Über ein wiederholendes Muster zeichnen",
  Ii = () => "Dibujar sobre un patrón repetido",
  Ri = () => "Dessiner par-dessus un motif répétitif",
  Ti = () => "Disegnare sopra un pattern ripetuto",
  Mi = () => "繰り返しパターンの上に描く",
  Bi = () => "Zamalowywanie powtarzalnego wzoru",
  Ei = () => "Рисование поверх повторяющегося узора",
  Ki = () => "Малювання поверх повторюваного візерунка",
  Hi = () => "Vẽ đè lên mẫu lặp lại",
  Zi = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? qi() : e === "pt" ? Li() : e === "ch" ? Ni() : e === "de" ? Ai() : e === "es" ? Ii() : e === "fr" ? Ri() : e === "it" ? Ti() : e === "jp" ? Mi() : e === "pl" ? Bi() : e === "ru" ? Ei() : e === "uk" ? Ki() : Hi()
  },
  Vi = () => "Drawing a flag over other artworks",
  Oi = () => "Desenhar uma bandeira por cima de outras artes",
  Fi = () => "在其他作品上绘制旗帜",
  Ji = () => "Eine Flagge über andere Kunstwerke zeichnen",
  Wi = () => "Dibujar una bandera sobre las obras de otros",
  Xi = () => "Dessiner un drapeau par-dessus d'autres œuvres",
  Qi = () => "Disegnare una bandiera sopra altre opere",
  Yi = () => "他の作品の上に旗を描く",
  eo = () => "Rysowanie flagi na cudzych grafikach",
  ro = () => "Рисование флага поверх чужих рисунков",
  no = () => "Малювання прапора поверх чужих малюнків",
  to = () => "Vẽ cờ đè lên tác phẩm của người khác",
  io = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Vi() : e === "pt" ? Oi() : e === "ch" ? Fi() : e === "de" ? Ji() : e === "es" ? Wi() : e === "fr" ? Xi() : e === "it" ? Qi() : e === "jp" ? Yi() : e === "pl" ? eo() : e === "ru" ? ro() : e === "uk" ? no() : to()
  },
  oo = () => "Highly Suggestive Content",
  so = () => "Conteúdo Altamente Sugestivo",
  uo = () => "高度暗示性内容",
  ao = () => "Stark anzügliche Inhalte",
  _o = () => "Contenido Altamente Sugerente",
  lo = () => "Contenu hautement suggestif",
  co = () => "Contenuto fortemente allusivo",
  go = () => "非常に性的示唆の強いコンテンツ",
  po = () => "Mocno sugestywne treści",
  fo = () => "Крайне откровенный контент",
  mo = () => "Дуже відвертий контент",
  vo = () => "Nội dung khiêu gợi mạnh",
  ho = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? oo() : e === "pt" ? so() : e === "ch" ? uo() : e === "de" ? ao() : e === "es" ? _o() : e === "fr" ? lo() : e === "it" ? co() : e === "jp" ? go() : e === "pl" ? po() : e === "ru" ? fo() : e === "uk" ? mo() : vo()
  },
  bo = () => "Mild Gore Content",
  xo = () => "Conteúdo de Gore Leve",
  ko = () => "轻度血腥内容",
  wo = () => "Leichte Gore-Inhalte",
  zo = () => "Contenido de Gore Leve",
  yo = () => "Contenu gore modéré",
  jo = () => "Contenuto gore lieve",
  Co = () => "軽度のグロテスクコンテンツ",
  $o = () => "Łagodne treści gore",
  Do = () => "Умеренно жестокий контент",
  Po = () => "Помірно жорстокий контент",
  So = () => "Nội dung bạo lực nhẹ",
  Go = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? bo() : e === "pt" ? xo() : e === "ch" ? ko() : e === "de" ? wo() : e === "es" ? zo() : e === "fr" ? yo() : e === "it" ? jo() : e === "jp" ? Co() : e === "pl" ? $o() : e === "ru" ? Do() : e === "uk" ? Po() : So()
  },
  Uo = () => "Non-explicit suggestive content",
  qo = () => "Conteúdo sugestivo não explícito",
  Lo = () => "非露骨暗示性内容",
  No = () => "Nicht-explizite anzügliche Inhalte",
  Ao = () => "Contenido sugerente no explícito",
  Io = () => "Contenu suggestif non explicite",
  Ro = () => "Contenuto allusivo non esplicito",
  To = () => "露骨でない性的示唆のあるコンテンツ",
  Mo = () => "Niejednoznaczne treści sugestywne",
  Bo = () => "Неоткровенный пикантный контент",
  Eo = () => "Невідвертий контент з підтекстом",
  Ko = () => "Nội dung khiêu gợi không rõ ràng",
  we = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Uo() : e === "pt" ? qo() : e === "ch" ? Lo() : e === "de" ? No() : e === "es" ? Ao() : e === "fr" ? Io() : e === "it" ? Ro() : e === "jp" ? To() : e === "pl" ? Mo() : e === "ru" ? Bo() : e === "uk" ? Eo() : Ko()
  },
  Ho = () => "Drawing repeated pattern over other artworks",
  Zo = () => "Desenhar padrão repetitivo por cima de outras artes",
  Vo = () => "在其他作品上绘制重复图案",
  Oo = () => "Wiederholendes Muster über andere Kunstwerke zeichnen",
  Fo = () => "Dibujar un patrón repetido sobre las obras de otros",
  Jo = () => "Dessiner un motif répétitif par-dessus d'autres œuvres",
  Wo = () => "Disegnare un pattern ripetuto sopra altre opere",
  Xo = () => "他の作品の上に繰り返しパターンを描く",
  Qo = () => "Rysowanie powtarzalnego wzoru na cudzych grafikach",
  Yo = () => "Рисование повторяющегося узора поверх чужих рисунков",
  es = () => "Малювання повторюваного візерунка поверх чужих малюнків",
  rs = () => "Vẽ mẫu lặp lại đè lên tác phẩm của người khác",
  ns = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ho() : e === "pt" ? Zo() : e === "ch" ? Vo() : e === "de" ? Oo() : e === "es" ? Fo() : e === "fr" ? Jo() : e === "it" ? Wo() : e === "jp" ? Xo() : e === "pl" ? Qo() : e === "ru" ? Yo() : e === "uk" ? es() : rs()
  },
  ts = () => "Using transparent pixels over repetitive flags",
  is = () => "Usar pixels transparentes sobre bandeiras repetitivas",
  os = () => "使用透明像素覆盖重复的旗帜",
  ss = () => "Transparente Pixel über sich wiederholende Flaggen verwenden",
  us = () => "Usar píxeles transparentes sobre banderas repetitivas",
  as = () => "Utilisation de pixels transparents sur les drapeaux répétitifs",
  _s = () => "Usare pixel trasparenti sopra bandiere ripetitive",
  ls = () => "繰り返される旗の上に透明ピクセルを使用",
  cs = () => "Używanie przezroczystych pikseli na powtarzalnych flagach",
  ds = () => "Использование прозрачных пикселей поверх повторяющихся флагов",
  gs = () => "Використання прозорих пікселів поверх повторюваних прапорів",
  ps = () => "Sử dụng pixel trong suốt đè lên cờ lặp lại",
  fs = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ts() : e === "pt" ? is() : e === "ch" ? os() : e === "de" ? ss() : e === "es" ? us() : e === "fr" ? as() : e === "it" ? _s() : e === "jp" ? ls() : e === "pl" ? cs() : e === "ru" ? ds() : e === "uk" ? gs() : ps()
  },
  ms = () => "Using transparent pixels to remove inappropriate content",
  vs = () => "Usar pixels transparentes para remover conteúdo inapropriado",
  hs = () => "使用透明像素移除不当内容",
  bs = () => "Transparente Pixel zum Entfernen unangemessener Inhalte verwenden",
  xs = () => "Usar píxeles transparentes para eliminar contenido inapropiado",
  ks = () => "Utilisation de pixels transparents pour supprimer le contenu inapproprié",
  ws = () => "Usare pixel trasparenti per rimuovere contenuti inappropriati",
  zs = () => "透明ピクセルを使って不適切なコンテンツを除去",
  ys = () => "Używanie przezroczystych pikseli do usuwania nieodpowiednich treści",
  js = () => "Использование прозрачных пикселей для удаления неприемлемого контента",
  Cs = () => "Використання прозорих пікселів для видалення неприйнятного контенту",
  $s = () => "Sử dụng pixel trong suốt để xóa nội dung không phù hợp",
  Ds = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ms() : e === "pt" ? vs() : e === "ch" ? hs() : e === "de" ? bs() : e === "es" ? xs() : e === "fr" ? ks() : e === "it" ? ws() : e === "jp" ? zs() : e === "pl" ? ys() : e === "ru" ? js() : e === "uk" ? Cs() : $s()
  },
  Ps = () => "Using transparent pixels to remove repetitive patterns",
  Ss = () => "Usar pixels transparentes para remover padrões repetitivos",
  Gs = () => "使用透明像素移除重复图案",
  Us = () => "Transparente Pixel zum Entfernen sich wiederholender Muster verwenden",
  qs = () => "Usar píxeles transparentes para eliminar patrones repetitivos",
  Ls = () => "Utilisation de pixels transparents pour supprimer les motifs répétitifs",
  Ns = () => "Usare pixel trasparenti per rimuovere pattern ripetitivi",
  As = () => "透明ピクセルを使って繰り返しパターンを除去",
  Is = () => "Używanie przezroczystych pikseli do usuwania powtarzalnych wzorów",
  Rs = () => "Использование прозрачных пикселей для удаления повторяющихся узоров",
  Ts = () => "Використання прозорих пікселів для видалення повторюваних візерунків",
  Ms = () => "Sử dụng pixel trong suốt để xóa mẫu lặp lại",
  Bs = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ps() : e === "pt" ? Ss() : e === "ch" ? Gs() : e === "de" ? Us() : e === "es" ? qs() : e === "fr" ? Ls() : e === "it" ? Ns() : e === "jp" ? As() : e === "pl" ? Is() : e === "ru" ? Rs() : e === "uk" ? Ts() : Ms()
  },
  Es = () => "Scribbling over other people's artwork",
  Ks = () => "Rabiscar por cima da arte de outras pessoas",
  Hs = () => "在他人作品上乱涂乱画",
  Zs = () => "Kritzeln über Kunstwerke anderer",
  Vs = () => "Garabatear sobre las obras de otros",
  Os = () => "Gribouiller sur les œuvres des autres",
  Fs = () => "Scarabocchiare sopra le opere degli altri",
  Js = () => "他人の作品への落書き",
  Ws = () => "Bazgranie po cudzych grafikach",
  Xs = () => "Черкание поверх чужих рисунков",
  Qs = () => "Замальовування чужих малюнків",
  Ys = () => "Vẽ bậy lên tác phẩm của người khác",
  eu = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Es() : e === "pt" ? Ks() : e === "ch" ? Hs() : e === "de" ? Zs() : e === "es" ? Vs() : e === "fr" ? Os() : e === "it" ? Fs() : e === "jp" ? Js() : e === "pl" ? Ws() : e === "ru" ? Xs() : e === "uk" ? Qs() : Ys()
  },
  ru = () => "Suggestive fetishist Content",
  nu = () => "Conteúdo sugestivo fetichista",
  tu = () => "暗示性恋物内容",
  iu = () => "Anzügliche fetischistische Inhalte",
  ou = () => "Contenido sugerente fetichista",
  su = () => "Contenu suggestif fétichiste",
  uu = () => "Contenuto allusivo feticista",
  au = () => "性的示唆のあるフェティッシュコンテンツ",
  _u = () => "Sugestywne treści fetyszystyczne",
  lu = () => "Откровенный фетишистский контент",
  cu = () => "Відвертий фетишистський контент",
  du = () => "Nội dung khiêu gợi theo hướng tôn sùng",
  gu = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ru() : e === "pt" ? nu() : e === "ch" ? tu() : e === "de" ? iu() : e === "es" ? ou() : e === "fr" ? su() : e === "it" ? uu() : e === "jp" ? au() : e === "pl" ? _u() : e === "ru" ? lu() : e === "uk" ? cu() : du()
  },
  pu = () => "Clear griefing",
  fu = () => "Griefing evidente",
  mu = () => "明确的恶意破坏",
  vu = () => "Eindeutiges Griefing",
  hu = () => "Griefing evidente",
  bu = () => "Griefing manifeste",
  xu = () => "Griefing evidente",
  ku = () => "明確なグリーフィング",
  wu = () => "Oczywisty griefing",
  zu = () => "Явное гриферство",
  yu = () => "Явний грифінг",
  ju = () => "Griefing rõ ràng",
  Cu = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? pu() : e === "pt" ? fu() : e === "ch" ? mu() : e === "de" ? vu() : e === "es" ? hu() : e === "fr" ? bu() : e === "it" ? xu() : e === "jp" ? ku() : e === "pl" ? wu() : e === "ru" ? zu() : e === "uk" ? yu() : ju()
  },
  $u = () => "Cases of clear griefing (such as scribbling over someone's artwork with no creative intent, or deliberately disrupting it by placing random pixels) are <strong>subject to moderation intervention</strong>.",
  Du = () => "Casos de griefing evidente (como rabiscar por cima da arte de alguém sem intenção criativa, ou interrompê-la deliberadamente colocando pixels aleatórios) estão <strong>sujeitos a intervenção da moderação</strong>.",
  Pu = () => "明确的恶意破坏行为（例如毫无创意目的地在他人作品上乱涂，或故意放置随机像素进行破坏）将<strong>受到管理介入</strong>。",
  Su = () => "Fälle von eindeutigem Griefing (wie z. B. Kritzeln über Kunstwerke anderer ohne kreative Absicht oder das absichtliche Stören durch Platzieren zufälliger Pixel) <strong>unterliegen moderativen Maßnahmen</strong>.",
  Gu = () => "Los casos de griefing evidente (como garabatear sobre la obra de alguien sin intención creativa, o alterarla deliberadamente colocando píxeles aleatorios) están <strong>sujetos a intervención de moderación</strong>.",
  Uu = () => "Les cas de griefing manifeste (comme gribouiller sur l'œuvre de quelqu'un sans intention créative, ou la perturber délibérément en plaçant des pixels aléatoires) sont <strong>soumis à une intervention de la modération</strong>.",
  qu = () => "I casi di griefing evidente (come scarabocchiare sopra l'opera di qualcuno senza intento creativo, o disturbarla deliberatamente piazzando pixel casuali) sono <strong>soggetti a intervento della moderazione</strong>.",
  Lu = () => "明確なグリーフィング（他人の作品に創造的な意図なく落書きする、ランダムなピクセルを置いて意図的に妨害するなど）は、<strong>モデレーションの介入対象</strong>となります。",
  Nu = () => "Przypadki oczywistego griefingu (takie jak bazgranie po cudzej grafice bez intencji twórczej lub celowe zakłócanie jej losowymi pikselami) <strong>podlegają interwencji moderacji</strong>.",
  Au = () => "Случаи явного гриферства (например, черкание поверх чьего-то рисунка без творческого намерения или намеренное его разрушение случайными пикселями) <strong>подлежат модераторскому вмешательству</strong>.",
  Iu = () => "Випадки явного грифінгу (такі як замальовування чужого малюнка без творчого наміру або навмисне порушення за допомогою випадкових пікселів) <strong>підлягають модераторському втручанню</strong>.",
  Ru = () => "Các trường hợp griefing rõ ràng (như vẽ bậy lên tác phẩm của người khác mà không có ý sáng tạo, hoặc cố tình phá hoại bằng cách đặt pixel ngẫu nhiên) <strong>sẽ bị can thiệp kiểm duyệt</strong>.",
  Tu = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? $u() : e === "pt" ? Du() : e === "ch" ? Pu() : e === "de" ? Su() : e === "es" ? Gu() : e === "fr" ? Uu() : e === "it" ? qu() : e === "jp" ? Lu() : e === "pl" ? Nu() : e === "ru" ? Au() : e === "uk" ? Iu() : Ru()
  },
  Mu = () => "Gray area",
  Bu = () => "Área cinzenta",
  Eu = () => "灰色地带",
  Ku = () => "Grauzone",
  Hu = () => "Zona gris",
  Zu = () => "Zone grise",
  Vu = () => "Zona grigia",
  Ou = () => "グレーゾーン",
  Fu = () => "Szara strefa",
  Ju = () => "Серая зона",
  Wu = () => "Сіра зона",
  Xu = () => "Vùng xám",
  Qu = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Mu() : e === "pt" ? Bu() : e === "ch" ? Eu() : e === "de" ? Ku() : e === "es" ? Hu() : e === "fr" ? Zu() : e === "it" ? Vu() : e === "jp" ? Ou() : e === "pl" ? Fu() : e === "ru" ? Ju() : e === "uk" ? Wu() : Xu()
  },
  Yu = () => "Actions that alter or disrupt artwork but may have <strong>multiple valid interpretations</strong>, such as territorial expansion, cleanup, or style changes. <strong>These are not automatically griefing</strong>. However, if the behavior becomes excessive, targeted, or clearly disruptive over time, moderators may intervene.",
  ea = () => "Ações que alteram ou perturbam artes, mas que podem ter <strong>múltiplas interpretações válidas</strong>, como expansão territorial, limpeza ou mudanças de estilo. <strong>Isso não é automaticamente griefing</strong>. No entanto, se o comportamento se tornar excessivo, direcionado ou claramente prejudicial ao longo do tempo, os moderadores poderão intervir.",
  ra = () => "改变或干扰作品但可能具有<strong>多种合理解读</strong>的行为，例如领地扩张、清理或风格变更。<strong>这些不会自动被视为恶意破坏</strong>。但如果行为变得过度、有针对性或随着时间推移明显具有破坏性，管理员可能会介入。",
  na = () => "Aktionen, die Kunstwerke verändern oder stören, aber <strong>mehrere gültige Interpretationen</strong> haben können, wie z. B. Gebietserweiterung, Bereinigung oder Stiländerungen. <strong>Dies ist nicht automatisch Griefing</strong>. Wenn das Verhalten jedoch übermäßig, gezielt oder im Laufe der Zeit eindeutig störend wird, können Moderatoren eingreifen.",
  ta = () => "Acciones que alteran o interrumpen obras pero pueden tener <strong>múltiples interpretaciones válidas</strong>, como expansión territorial, limpieza o cambios de estilo. <strong>Esto no es automáticamente griefing</strong>. Sin embargo, si el comportamiento se vuelve excesivo, dirigido o claramente disruptivo con el tiempo, los moderadores pueden intervenir.",
  ia = () => "Actions qui modifient ou perturbent une œuvre mais peuvent avoir <strong>plusieurs interprétations valides</strong>, comme l'expansion territoriale, le nettoyage ou les changements de style. <strong>Ce n'est pas automatiquement du griefing</strong>. Cependant, si le comportement devient excessif, ciblé ou clairement perturbateur au fil du temps, les modérateurs peuvent intervenir.",
  oa = () => "Azioni che alterano o disturbano un'opera ma possono avere <strong>molteplici interpretazioni valide</strong>, come espansione territoriale, pulizia o cambiamenti di stile. <strong>Queste non sono automaticamente griefing</strong>. Tuttavia, se il comportamento diventa eccessivo, mirato o chiaramente disturbante nel tempo, i moderatori possono intervenire.",
  sa = () => "作品を変更・妨害するが、領土拡大、清掃、スタイル変更など<strong>複数の正当な解釈が可能な</strong>行為。<strong>これらは自動的にグリーフィングとはみなされません</strong>。ただし、行為が過剰になったり、特定の相手を標的にしたり、時間をかけて明らかに妨害的であったりする場合は、モデレーターが介入することがあります。",
  ua = () => "Działania, które zmieniają lub zakłócają grafikę, ale mogą mieć <strong>wiele uzasadnionych interpretacji</strong>, takie jak ekspansja terytorialna, sprzątanie lub zmiana stylu. <strong>Nie są one automatycznie uznawane za griefing</strong>. Jednakże, jeśli zachowanie staje się nadmierne, celowe lub wyraźnie destrukcyjne z czasem, moderatorzy mogą interweniować.",
  aa = () => "Действия, которые изменяют или нарушают рисунок, но могут иметь <strong>несколько допустимых интерпретаций</strong>, такие как территориальное расширение, очистка или смена стиля. <strong>Это автоматически не является гриферством</strong>. Однако если поведение становится чрезмерным, целенаправленным или явно деструктивным со временем, модераторы могут вмешаться.",
  _a = () => "Дії, які змінюють або порушують малюнки, але можуть мати <strong>кілька правомірних тлумачень</strong>, такі як розширення території, очищення або зміна стилю. <strong>Це не є автоматичним грифінгом</strong>. Однак, якщо поведінка стає надмірною, цілеспрямованою або явно деструктивною з часом, модератори можуть втрутитися.",
  la = () => "Các hành động thay đổi hoặc phá vỡ tác phẩm nhưng có thể có <strong>nhiều cách hiểu hợp lý</strong>, chẳng hạn như mở rộng lãnh thổ, dọn dẹp hoặc thay đổi phong cách. <strong>Những hành động này không tự động được coi là griefing</strong>. Tuy nhiên, nếu hành vi trở nên quá mức, nhắm vào mục tiêu cụ thể hoặc rõ ràng gây phá hoại theo thời gian, quản trị viên có thể can thiệp.",
  ca = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Yu() : e === "pt" ? ea() : e === "ch" ? ra() : e === "de" ? na() : e === "es" ? ta() : e === "fr" ? ia() : e === "it" ? oa() : e === "jp" ? sa() : e === "pl" ? ua() : e === "ru" ? aa() : e === "uk" ? _a() : la()
  },
  da = () => "Griefing means taking actions on the map <strong>solely to harass or frustrate</strong> other players, with no creative, strategic, or corrective purpose.",
  ga = () => "Griefing significa realizar ações no mapa <strong>unicamente para assediar ou frustrar</strong> outros jogadores, sem nenhum propósito criativo, estratégico ou corretivo.",
  pa = () => "恶意破坏指在地图上<strong>仅以骚扰或激怒</strong>其他玩家为目的的行为，不具有任何创意、战略或纠正目的。",
  fa = () => "Griefing bedeutet, auf der Karte Aktionen durchzuführen, die <strong>ausschließlich dazu dienen, andere Spieler zu belästigen oder zu frustrieren</strong>, ohne kreativen, strategischen oder korrektiven Zweck.",
  ma = () => "Griefing significa realizar acciones en el mapa <strong>únicamente para acosar o frustrar</strong> a otros jugadores, sin ningún propósito creativo, estratégico o correctivo.",
  va = () => "Le griefing consiste à effectuer des actions sur la carte <strong>dans le seul but de harceler ou de frustrer</strong> d'autres joueurs, sans aucun objectif créatif, stratégique ou correctif.",
  ha = () => "Griefing significa compiere azioni sulla mappa <strong>al solo scopo di molestare o frustrare</strong> gli altri giocatori, senza alcun intento creativo, strategico o correttivo.",
  ba = () => "グリーフィングとは、創造的、戦略的、または修正的な目的を持たず、<strong>他のプレイヤーを嫌がらせたり苛立たせたりすることだけを目的として</strong>マップ上で行う行為を指します。",
  xa = () => "Griefing oznacza podejmowanie działań na mapie <strong>wyłącznie w celu nękania lub frustrowania</strong> innych graczy, bez żadnego twórczego, strategicznego ani korekcyjnego celu.",
  ka = () => "Гриферство — это действия на карте, совершаемые <strong>исключительно с целью досадить или разозлить</strong> других игроков, без какого-либо творческого, стратегического или корректирующего намерения.",
  wa = () => "Грифінг означає дії на карті, <strong>спрямовані виключно на те, щоб дратувати чи засмучувати</strong> інших гравців, без жодного творчого, стратегічного чи коригувального наміру.",
  za = () => "Griefing có nghĩa là thực hiện các hành động trên bản đồ <strong>chỉ nhằm quấy rối hoặc gây bực bội</strong> cho người chơi khác, không có mục đích sáng tạo, chiến lược hay chỉnh sửa.",
  ya = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? da() : e === "pt" ? ga() : e === "ch" ? pa() : e === "de" ? fa() : e === "es" ? ma() : e === "fr" ? va() : e === "it" ? ha() : e === "jp" ? ba() : e === "pl" ? xa() : e === "ru" ? ka() : e === "uk" ? wa() : za()
  },
  ja = () => "Using transparent pixels to remove spam, repetitive patterns, inappropriate or suggestive content is allowed.",
  Ca = () => "Usar pixels transparentes para remover spam, padrões repetitivos, conteúdo inapropriado ou sugestivo é permitido.",
  $a = () => "使用透明像素移除垃圾内容、重复图案、不当或暗示性内容是被允许的。",
  Da = () => "Die Verwendung von transparenten Pixeln zum Entfernen von Spam, sich wiederholenden Mustern, unangemessenen oder anzüglichen Inhalten ist erlaubt.",
  Pa = () => "Usar píxeles transparentes para eliminar spam, patrones repetitivos, contenido inapropiado o sugerente está permitido.",
  Sa = () => "L'utilisation de pixels transparents pour supprimer le spam, les motifs répétitifs, le contenu inapproprié ou suggestif est autorisée.",
  Ga = () => "Utilizzare pixel trasparenti per rimuovere spam, pattern ripetitivi, contenuti inappropriati o allusivi è consentito.",
  Ua = () => "透明ピクセルを使って、スパム、繰り返しパターン、不適切または性的示唆の強いコンテンツを除去することは許可されています。",
  qa = () => "Używanie przezroczystych pikseli do usuwania spamu, powtarzalnych wzorów, nieodpowiednich lub sugestywnych treści jest dozwolone.",
  La = () => "Использование прозрачных пикселей для удаления спама, повторяющихся узоров, неприемлемого или откровенного контента разрешено.",
  Na = () => "Використання прозорих пікселів для видалення спаму, повторюваних візерунків, неприйнятного або відвертого контенту дозволено.",
  Aa = () => "Sử dụng pixel trong suốt để xóa spam, mẫu lặp lại, nội dung không phù hợp hoặc khiêu gợi là được phép.",
  Ia = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ja() : e === "pt" ? Ca() : e === "ch" ? $a() : e === "de" ? Da() : e === "es" ? Pa() : e === "fr" ? Sa() : e === "it" ? Ga() : e === "jp" ? Ua() : e === "pl" ? qa() : e === "ru" ? La() : e === "uk" ? Na() : Aa()
  },
  Ra = () => "Map Cleanup",
  Ta = () => "Limpeza do Mapa",
  Ma = () => "地图清理",
  Ba = () => "Kartenbereinigung",
  Ea = () => "Limpieza del Mapa",
  Ka = () => "Nettoyage de la carte",
  Ha = () => "Pulizia della mappa",
  Za = () => "マップの清掃",
  Va = () => "Sprzątanie mapy",
  Oa = () => "Очистка карты",
  Fa = () => "Очищення карти",
  Ja = () => "Dọn dẹp bản đồ",
  Wa = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ra() : e === "pt" ? Ta() : e === "ch" ? Ma() : e === "de" ? Ba() : e === "es" ? Ea() : e === "fr" ? Ka() : e === "it" ? Ha() : e === "jp" ? Za() : e === "pl" ? Va() : e === "ru" ? Oa() : e === "uk" ? Fa() : Ja()
  },
  Xa = () => "<strong>One account per person.</strong> Using bots, scripts, browser automation, or any exploit to gain an unfair advantage is strictly prohibited.",
  Qa = () => "<strong>Uma conta por pessoa.</strong> Usar bots, scripts, automação de navegador ou qualquer exploit para obter vantagem injusta é estritamente proibido.",
  Ya = () => "<strong>每人只能使用一个账号。</strong>使用机器人、脚本、浏览器自动化或任何漏洞获取不公平优势的行为严格禁止。",
  e_ = () => "<strong>Ein Konto pro Person.</strong> Die Verwendung von Bots, Skripten, Browser-Automatisierung oder sonstigen Exploits, um einen unfairen Vorteil zu erlangen, ist strengstens verboten.",
  r_ = () => "<strong>Una cuenta por persona.</strong> Usar bots, scripts, automatización de navegador o cualquier exploit para obtener una ventaja injusta está estrictamente prohibido.",
  n_ = () => "<strong>Un seul compte par personne.</strong> L'utilisation de bots, de scripts, d'automatisation de navigateur ou de toute exploitation de faille pour obtenir un avantage déloyal est strictement interdite.",
  t_ = () => "<strong>Un account per persona.</strong> L'uso di bot, script, automazione del browser o qualsiasi exploit per ottenere un vantaggio sleale è severamente vietato.",
  i_ = () => "<strong>1人につき1アカウント。</strong>ボット、スクリプト、ブラウザ自動化、またはその他のエクスプロイトを使用して不当な優位を得ることは厳しく禁止されています。",
  o_ = () => "<strong>Jedno konto na osobę.</strong> Używanie botów, skryptów, automatyzacji przeglądarki lub jakichkolwiek exploitów w celu uzyskania nieuczciwej przewagi jest surowo zabronione.",
  s_ = () => "<strong>Один аккаунт на человека.</strong> Использование ботов, скриптов, автоматизации браузера или любых эксплойтов для получения нечестного преимущества строго запрещено.",
  u_ = () => "<strong>Один акаунт на людину.</strong> Використання ботів, скриптів, автоматизації браузера або будь-яких експлойтів для отримання нечесної переваги суворо заборонено.",
  a_ = () => "<strong>Mỗi người một tài khoản.</strong> Sử dụng bot, script, tự động hóa trình duyệt hoặc bất kỳ lỗi khai thác nào để có lợi thế không công bằng đều bị nghiêm cấm.",
  __ = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Xa() : e === "pt" ? Qa() : e === "ch" ? Ya() : e === "de" ? e_() : e === "es" ? r_() : e === "fr" ? n_() : e === "it" ? t_() : e === "jp" ? i_() : e === "pl" ? o_() : e === "ru" ? s_() : e === "uk" ? u_() : a_()
  },
  l_ = () => "Suggestive Content",
  c_ = () => "Conteúdo Sugestivo",
  d_ = () => "暗示性内容",
  g_ = () => "Anzügliche Inhalte",
  p_ = () => "Contenido Sugerente",
  f_ = () => "Contenu suggestif",
  m_ = () => "Contenuto allusivo",
  v_ = () => "性的示唆のあるコンテンツ",
  h_ = () => "Treści sugestywne",
  b_ = () => "Откровенный контент",
  x_ = () => "Відвертий контент",
  k_ = () => "Nội dung khiêu gợi",
  w_ = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? l_() : e === "pt" ? c_() : e === "ch" ? d_() : e === "de" ? g_() : e === "es" ? p_() : e === "fr" ? f_() : e === "it" ? m_() : e === "jp" ? v_() : e === "pl" ? h_() : e === "ru" ? b_() : e === "uk" ? x_() : k_()
  },
  z_ = () => "Drawing in this category <strong>shouldn't lead to suspensions</strong>. However, <strong>the community is free clean up or paint over these artworks</strong>. Includes drawings with sexual undertones that don't cross into explicit territory (no genitalia, sexual acts, or sexual fluids).",
  y_ = () => "Desenhos nesta categoria <strong>não devem levar a suspensões</strong>. No entanto, <strong>a comunidade é livre para limpar ou pintar por cima dessas artes</strong>. Inclui desenhos com conotações sexuais que não chegam a ser explícitos (sem genitália, atos sexuais ou fluidos sexuais).",
  j_ = () => "此类别中的绘画<strong>不应导致暂停</strong>。但是，<strong>社区可以自由清理或覆盖这些作品</strong>。包括具有性暗示但未达到露骨程度的绘画（无生殖器、性行为或性液体）。",
  C_ = () => "Zeichnungen in dieser Kategorie <strong>sollten nicht zu Sperren führen</strong>. Allerdings <strong>ist es der Community erlaubt, diese Kunstwerke zu entfernen oder zu übermalen</strong>. Dazu gehören Zeichnungen mit sexuellen Untertönen, die nicht in explizites Gebiet vordringen (keine Genitalien, sexuelle Handlungen oder sexuelle Flüssigkeiten).",
  $_ = () => "Dibujar en esta categoría <strong>no debería llevar a suspensiones</strong>. Sin embargo, <strong>la comunidad es libre de limpiar o pintar sobre estas obras</strong>. Incluye dibujos con insinuaciones sexuales que no cruzan al territorio explícito (sin genitales, actos sexuales ni fluidos sexuales).",
  D_ = () => "Les dessins de cette catégorie <strong>ne devraient pas entraîner de suspension</strong>. Cependant, <strong>la communauté est libre de nettoyer ou de peindre par-dessus ces œuvres</strong>. Cela inclut les dessins à connotation sexuelle qui ne franchissent pas la limite du contenu explicite (pas d'organes génitaux, d'actes sexuels ni de fluides sexuels).",
  P_ = () => "I disegni in questa categoria <strong>non dovrebbero portare a sospensioni</strong>. Tuttavia, <strong>la community è libera di ripulire o dipingere sopra queste opere</strong>. Include disegni con sottotoni sessuali che non superano il limite dell'esplicito (nessun genitale, atto sessuale o fluido sessuale).",
  S_ = () => "このカテゴリの描画は<strong>停止処分の対象にはなりません</strong>。ただし、<strong>コミュニティはこれらの作品を自由に消去・上書きできます</strong>。露骨な表現（性器、性行為、体液）には至らないが、性的なニュアンスを含む描画が該当します。",
  G_ = () => "Rysunki z tej kategorii <strong>nie powinny prowadzić do zawieszeń</strong>. Jednakże <strong>społeczność może swobodnie usuwać lub zamalowywać te grafiki</strong>. Obejmuje rysunki o podtekście seksualnym, które nie przekraczają granicy treści jednoznacznych (brak genitaliów, aktów seksualnych czy płynów seksualnych).",
  U_ = () => "Рисунки в этой категории <strong>не должны приводить к блокировке</strong>. Однако <strong>сообщество вправе убирать или закрашивать такие рисунки</strong>. Включает рисунки с сексуальным подтекстом, не переходящие в откровенную территорию (без гениталий, половых актов или половых жидкостей).",
  q_ = () => "Малюнки з цієї категорії <strong>не повинні призводити до блокувань</strong>. Однак <strong>спільнота має повне право очистити чи замалювати такі роботи</strong>. Включає малюнки з сексуальним підтекстом, які не переходять у відверту територію (без геніталій, статевих актів чи статевих рідин).",
  L_ = () => "Vẽ trong danh mục này <strong>không nên dẫn đến đình chỉ</strong>. Tuy nhiên, <strong>cộng đồng được tự do dọn dẹp hoặc tô đè lên các tác phẩm này</strong>. Bao gồm các bức vẽ có ẩn ý tình dục nhưng không vượt qua ranh giới khiêu dâm (không có bộ phận sinh dục, hành vi tình dục hay dịch thể tình dục).",
  N_ = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? z_() : e === "pt" ? y_() : e === "ch" ? j_() : e === "de" ? C_() : e === "es" ? $_() : e === "fr" ? D_() : e === "it" ? P_() : e === "jp" ? S_() : e === "pl" ? G_() : e === "ru" ? U_() : e === "uk" ? q_() : L_()
  },
  A_ = () => "Space is limited. Players and communities will compete for territory, and that's not just allowed, it's what keeps the map alive. Claiming, defending, and reclaiming space is core gameplay.",
  I_ = () => "O espaço é limitado. Jogadores e comunidades vão competir por território, e isso não é apenas permitido, é o que mantém o mapa vivo. Conquistar, defender e retomar espaço faz parte da jogabilidade principal.",
  R_ = () => "空间有限。玩家和社区会争夺领地，这不仅被允许，更是让地图保持活力的关键。占领、防守和夺回空间是核心玩法。",
  T_ = () => "Der Platz ist begrenzt. Spieler und Communities werden um Gebiete konkurrieren, und das ist nicht nur erlaubt, es hält die Karte lebendig. Gebiete beanspruchen, verteidigen und zurückerobern ist Teil des Kernspiels.",
  M_ = () => "El espacio es limitado. Los jugadores y comunidades competirán por territorio, y eso no solo está permitido, es lo que mantiene el mapa vivo. Reclamar, defender y reconquistar espacio es parte esencial del juego.",
  B_ = () => "L'espace est limité. Les joueurs et les communautés se disputeront le territoire, et ce n'est pas seulement autorisé, c'est ce qui fait vivre la carte. Revendiquer, défendre et reconquérir l'espace fait partie du gameplay de base.",
  E_ = () => "Lo spazio è limitato. I giocatori e le community competeranno per il territorio, e questo non è solo consentito, è ciò che mantiene viva la mappa. Conquistare, difendere e riconquistare spazio è il gameplay fondamentale.",
  K_ = () => "スペースには限りがあります。プレイヤーやコミュニティは領土をめぐって競い合います。これは許可されているだけでなく、マップを活気づける要素です。スペースの確保、防衛、奪還はゲームの基本です。",
  H_ = () => "Przestrzeń jest ograniczona. Gracze i społeczności będą rywalizować o terytorium — i to nie tylko jest dozwolone, to właśnie utrzymuje mapę przy życiu. Zajmowanie, obrona i odzyskiwanie przestrzeni to podstawowa rozgrywka.",
  Z_ = () => "Пространство ограничено. Игроки и сообщества будут конкурировать за территорию, и это не просто разрешено — это то, что поддерживает карту живой. Захват, оборона и отвоевание территории — основная механика игры.",
  V_ = () => "Простір обмежений. Гравці та спільноти змагатимуться за територію, і це не лише дозволено — це те, що підтримує карту живою. Захоплення, оборона та відвоювання простору є основою геймплею.",
  O_ = () => "Không gian có hạn. Người chơi và cộng đồng sẽ cạnh tranh lãnh thổ, và điều đó không chỉ được phép — nó là thứ giữ cho bản đồ sống động. Chiếm, bảo vệ và giành lại không gian là cách chơi cốt lõi.",
  F_ = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? A_() : e === "pt" ? I_() : e === "ch" ? R_() : e === "de" ? T_() : e === "es" ? M_() : e === "fr" ? B_() : e === "it" ? E_() : e === "jp" ? K_() : e === "pl" ? H_() : e === "ru" ? Z_() : e === "uk" ? V_() : O_()
  },
  J_ = () => "Territorial Disputes",
  W_ = () => "Disputas Territoriais",
  X_ = () => "领地争夺",
  Q_ = () => "Gebietskonflikte",
  Y_ = () => "Disputas Territoriales",
  el = () => "Disputes territoriales",
  rl = () => "Dispute territoriali",
  nl = () => "領土紛争",
  tl = () => "Spory terytorialne",
  il = () => "Территориальные споры",
  ol = () => "Територіальні спори",
  sl = () => "Tranh chấp lãnh thổ",
  ul = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? J_() : e === "pt" ? W_() : e === "ch" ? X_() : e === "de" ? Q_() : e === "es" ? Y_() : e === "fr" ? el() : e === "it" ? rl() : e === "jp" ? nl() : e === "pl" ? tl() : e === "ru" ? il() : e === "uk" ? ol() : sl()
  },
  al = () => "Painting over other players' work is a normal part of the game. If your intent isn't to only harass or deliberately frustrate someone, moderators won't intervene.",
  _l = () => "Pintar por cima do trabalho de outros jogadores é uma parte normal do jogo. Se sua intenção não for apenas assediar ou frustrar alguém deliberadamente, os moderadores não irão intervir.",
  ll = () => "覆盖其他玩家的作品是游戏的正常组成部分。如果你的目的不仅仅是骚扰或故意激怒他人，管理员不会介入。",
  cl = () => "Das Übermalen der Arbeit anderer Spieler ist ein normaler Teil des Spiels. Wenn deine Absicht nicht darin besteht, jemanden nur zu belästigen oder absichtlich zu frustrieren, werden Moderatoren nicht eingreifen.",
  dl = () => "Pintar sobre el trabajo de otros jugadores es una parte normal del juego. Si tu intención no es solo acosar o frustrar deliberadamente a alguien, los moderadores no intervendrán.",
  gl = () => "Peindre par-dessus le travail d'autres joueurs fait partie intégrante du jeu. Si votre intention n'est pas uniquement de harceler ou de frustrer délibérément quelqu'un, les modérateurs n'interviendront pas.",
  pl = () => "Dipingere sopra il lavoro di altri giocatori è una parte normale del gioco. Se il tuo intento non è solo quello di molestare o frustrare deliberatamente qualcuno, i moderatori non interverranno.",
  fl = () => "他のプレイヤーの作品の上にペイントすることは、ゲームの通常の一部です。あなたの意図が単に嫌がらせや故意に苛立たせることでなければ、モデレーターは介入しません。",
  ml = () => "Zamalowywanie prac innych graczy jest normalną częścią gry. Jeśli Twoim celem nie jest wyłącznie nękanie lub celowe frustrowanie kogoś, moderatorzy nie będą interweniować.",
  vl = () => "Рисование поверх работ других игроков — нормальная часть игры. Если ваша цель не состоит исключительно в том, чтобы досадить или намеренно расстроить кого-то, модераторы не вмешаются.",
  hl = () => "Малювання поверх робіт інших гравців є нормальною частиною гри. Якщо ваш намір — не лише дратувати чи навмисно засмучувати когось, модератори не втручатимуться.",
  bl = () => "Tô đè lên tác phẩm của người chơi khác là một phần bình thường của trò chơi. Nếu mục đích của bạn không phải chỉ để quấy rối hay cố tình gây bực bội ai đó, quản trị viên sẽ không can thiệp.",
  xl = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? al() : e === "pt" ? _l() : e === "ch" ? ll() : e === "de" ? cl() : e === "es" ? dl() : e === "fr" ? gl() : e === "it" ? pl() : e === "jp" ? fl() : e === "pl" ? ml() : e === "ru" ? vl() : e === "uk" ? hl() : bl()
  },
  kl = () => "Zero-tolerance content",
  wl = () => "Conteúdo de tolerância zero",
  zl = () => "零容忍内容",
  yl = () => "Null-Toleranz-Inhalte",
  jl = () => "Contenido de tolerancia cero",
  Cl = () => "Contenu à tolérance zéro",
  $l = () => "Contenuti a tolleranza zero",
  Dl = () => "ゼロトレランスコンテンツ",
  Pl = () => "Treści objęte zerową tolerancją",
  Sl = () => "Контент с нулевой терпимостью",
  Gl = () => "Контент з нульовою толерантністю",
  Ul = () => "Nội dung không khoan nhượng",
  ql = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? kl() : e === "pt" ? wl() : e === "ch" ? zl() : e === "de" ? yl() : e === "es" ? jl() : e === "fr" ? Cl() : e === "it" ? $l() : e === "jp" ? Dl() : e === "pl" ? Pl() : e === "ru" ? Sl() : e === "uk" ? Gl() : Ul()
  },
  Ll = () => "The following content is subject to moderation intervention and can result in a <strong>permanent ban</strong>:",
  Nl = () => "O seguinte conteúdo está sujeito a intervenção da moderação e pode resultar em <strong>banimento permanente</strong>:",
  Al = () => "以下内容将受到管理介入，并可能导致<strong>永久封禁</strong>：",
  Il = () => "Die folgenden Inhalte unterliegen moderativen Maßnahmen und können zu einem <strong>permanenten Bann</strong> führen:",
  Rl = () => "El siguiente contenido está sujeto a intervención de moderación y puede resultar en un <strong>ban permanente</strong>:",
  Tl = () => "Le contenu suivant est soumis à une intervention de la modération et peut entraîner un <strong>bannissement permanent</strong> :",
  Ml = () => "I seguenti contenuti sono soggetti a intervento della moderazione e possono comportare un <strong>ban permanente</strong>:",
  Bl = () => "以下のコンテンツはモデレーションの対象となり、<strong>永久BAN</strong>になる場合があります:",
  El = () => "Poniższe treści podlegają interwencji moderacji i mogą skutkować <strong>permanentnym banem</strong>:",
  Kl = () => "Следующий контент подлежит модераторскому вмешательству и может привести к <strong>перманентному бану</strong>:",
  Hl = () => "Наступний контент підлягає модераторському втручанню і може призвести до <strong>перманентного бану</strong>:",
  Zl = () => "Các nội dung sau đây sẽ bị can thiệp kiểm duyệt và có thể dẫn đến <strong>cấm vĩnh viễn</strong>:",
  Vl = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ll() : e === "pt" ? Nl() : e === "ch" ? Al() : e === "de" ? Il() : e === "es" ? Rl() : e === "fr" ? Tl() : e === "it" ? Ml() : e === "jp" ? Bl() : e === "pl" ? El() : e === "ru" ? Kl() : e === "uk" ? Hl() : Zl()
  },
  Ol = () => "Doxxing (sharing anyone's private personal information)",
  Fl = () => "Doxxing (compartilhar informações pessoais privadas de qualquer pessoa)",
  Jl = () => "人肉搜索（分享任何人的私人个人信息）",
  Wl = () => "Doxxing (Veröffentlichung persönlicher Informationen anderer)",
  Xl = () => "Doxxing (compartir información personal privada de cualquier persona)",
  Ql = () => "Doxxing (partage d'informations personnelles privées de quiconque)",
  Yl = () => "Doxxing (condivisione di informazioni personali private di chiunque)",
  ec = () => "ドキシング（他人の個人情報の共有）",
  rc = () => "Doxxing (udostępnianie prywatnych danych osobowych innych osób)",
  nc = () => "Доксинг (распространение чьей-либо личной информации)",
  tc = () => "Доксинг (поширення приватної особистої інформації будь-кого)",
  ic = () => "Doxxing (chia sẻ thông tin cá nhân riêng tư của bất kỳ ai)",
  oc = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ol() : e === "pt" ? Fl() : e === "ch" ? Jl() : e === "de" ? Wl() : e === "es" ? Xl() : e === "fr" ? Ql() : e === "it" ? Yl() : e === "jp" ? ec() : e === "pl" ? rc() : e === "ru" ? nc() : e === "uk" ? tc() : ic()
  },
  sc = () => "Explicit sexual content (genitalia, sexual acts, sexual fluids)",
  uc = () => "Conteúdo sexual explícito (genitália, atos sexuais, fluidos sexuais)",
  ac = () => "露骨的色情内容（生殖器、性行为、性液体）",
  _c = () => "Explizit sexuelle Inhalte (Genitalien, sexuelle Handlungen, sexuelle Flüssigkeiten)",
  lc = () => "Contenido sexual explícito (genitales, actos sexuales, fluidos sexuales)",
  cc = () => "Contenu sexuel explicite (organes génitaux, actes sexuels, fluides sexuels)",
  dc = () => "Contenuto sessuale esplicito (genitali, atti sessuali, fluidi sessuali)",
  gc = () => "露骨な性的コンテンツ（性器、性行為、体液）",
  pc = () => "Jednoznaczne treści seksualne (genitalia, akty seksualne, płyny seksualne)",
  fc = () => "Откровенный сексуальный контент (гениталии, половые акты, половые жидкости)",
  mc = () => "Відверто сексуальний контент (геніталії, статеві акти, статеві рідини)",
  vc = () => "Nội dung tình dục rõ ràng (bộ phận sinh dục, hành vi tình dục, dịch thể tình dục)",
  hc = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? sc() : e === "pt" ? uc() : e === "ch" ? ac() : e === "de" ? _c() : e === "es" ? lc() : e === "fr" ? cc() : e === "it" ? dc() : e === "jp" ? gc() : e === "pl" ? pc() : e === "ru" ? fc() : e === "uk" ? mc() : vc()
  },
  bc = () => "Extreme graphic gore or realistic violence",
  xc = () => "Gore gráfico extremo ou violência realista",
  kc = () => "极端血腥或写实暴力内容",
  wc = () => "Extremer grafischer Gore oder realistische Gewalt",
  zc = () => "Gore gráfico extremo o violencia realista",
  yc = () => "Gore graphique extrême ou violence réaliste",
  jc = () => "Gore grafico estremo o violenza realistica",
  Cc = () => "極度にグロテスクな描写やリアルな暴力表現",
  $c = () => "Ekstremalnie drastyczne treści gore lub realistyczna przemoc",
  Dc = () => "Чрезмерная графическая жестокость или реалистичное насилие",
  Pc = () => "Екстремально жорстокі або реалістичні сцени насильства",
  Sc = () => "Bạo lực đẫm máu cực đoan hoặc bạo lực chân thực",
  Gc = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? bc() : e === "pt" ? xc() : e === "ch" ? kc() : e === "de" ? wc() : e === "es" ? zc() : e === "fr" ? yc() : e === "it" ? jc() : e === "jp" ? Cc() : e === "pl" ? $c() : e === "ru" ? Dc() : e === "uk" ? Pc() : Sc()
  },
  Uc = () => "Extreme hostility or targeted harassment toward others",
  qc = () => "Hostilidade extrema ou assédio direcionado a outros",
  Lc = () => "对他人的极端敌意或针对性骚扰",
  Nc = () => "Extreme Feindseligkeit oder gezielte Belästigung anderer",
  Ac = () => "Hostilidad extrema o acoso dirigido hacia otros",
  Ic = () => "Hostilité extrême ou harcèlement ciblé envers autrui",
  Rc = () => "Ostilità estrema o molestie mirate verso altri",
  Tc = () => "他者に対する極端な敵意や標的型の嫌がらせ",
  Mc = () => "Skrajna wrogość lub ukierunkowane nękanie innych osób",
  Bc = () => "Крайняя враждебность или целенаправленная травля других",
  Ec = () => "Екстремальна ворожість або цілеспрямоване переслідування інших",
  Kc = () => "Thái độ thù địch cực đoan hoặc quấy rối nhắm vào người khác",
  Hc = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Uc() : e === "pt" ? qc() : e === "ch" ? Lc() : e === "de" ? Nc() : e === "es" ? Ac() : e === "fr" ? Ic() : e === "it" ? Rc() : e === "jp" ? Tc() : e === "pl" ? Mc() : e === "ru" ? Bc() : e === "uk" ? Ec() : Kc()
  },
  Zc = () => "Clear hate speech, extreme slurs, or symbols of hate (e.g. swastikas)",
  Vc = () => "Discurso de ódio evidente, ofensas extremas ou símbolos de ódio (ex.: suásticas)",
  Oc = () => "明确的仇恨言论、极端侮辱性用语或仇恨符号（如纳粹符号）",
  Fc = () => "Eindeutige Hassrede, extreme Beleidigungen oder Hasssymbole (z. B. Hakenkreuze)",
  Jc = () => "Discurso de odio claro, insultos extremos o símbolos de odio (ej. esvásticas)",
  Wc = () => "Discours de haine manifeste, insultes extrêmes ou symboles haineux (ex. : croix gammées)",
  Xc = () => "Chiaro discorso d'odio, insulti estremi o simboli d'odio (es. svastiche)",
  Qc = () => "明確なヘイトスピーチ、極端な差別用語、またはヘイトシンボル（例: 鉤十字）",
  Yc = () => "Wyraźna mowa nienawiści, skrajne obelgi lub symbole nienawiści (np. swastyki)",
  ed = () => "Явная речь ненависти, грубые оскорбления или символы ненависти (например, свастики)",
  rd = () => "Явна мова ненависті, образливі слова або символи ненависті (напр. свастики)",
  nd = () => "Ngôn từ thù hằn rõ ràng, từ ngữ xúc phạm nặng hoặc biểu tượng thù hận (ví dụ: chữ vạn)",
  td = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Zc() : e === "pt" ? Vc() : e === "ch" ? Oc() : e === "de" ? Fc() : e === "es" ? Jc() : e === "fr" ? Wc() : e === "it" ? Xc() : e === "jp" ? Qc() : e === "pl" ? Yc() : e === "ru" ? ed() : e === "uk" ? rd() : nd()
  },
  id = () => "Sexualization of minors or fictitious characters with child-like visual traits, regardless of their fictional age or lore",
  od = () => "Sexualização de menores ou personagens fictícios com traços visuais infantis, independentemente de sua idade ou história fictícia",
  sd = () => "对未成年人或具有明显儿童外貌特征的虚构角色的性化描绘，无论其虚构年龄或设定如何",
  ud = () => "Sexualisierung von Minderjährigen oder fiktiven Charakteren mit kindlichen visuellen Merkmalen, unabhängig von ihrem fiktiven Alter oder ihrer Geschichte",
  ad = () => "Sexualización de menores o personajes ficticios con rasgos visuales infantiles, independientemente de su edad ficticia o historia",
  _d = () => "Sexualisation de mineurs ou de personnages fictifs présentant des traits visuels enfantins, indépendamment de leur âge ou histoire fictifs",
  ld = () => "Sessualizzazione di minori o personaggi fittizi con tratti visivi infantili, indipendentemente dalla loro età fittizia o storia",
  cd = () => "未成年者、または架空の年齢や設定に関わらず、明らかに幼い外見的特徴を持つ架空のキャラクターの性的表現",
  dd = () => "Seksualizacja nieletnich lub fikcyjnych postaci o dziecięcych cechach wizualnych, niezależnie od ich fikcyjnego wieku czy historii",
  gd = () => "Сексуализация несовершеннолетних или вымышленных персонажей с визуальными детскими чертами, независимо от их вымышленного возраста или истории",
  pd = () => "Сексуалізація неповнолітніх або вигаданих персонажів з візуальними дитячими рисами, незалежно від їхнього вигаданого віку чи історії",
  fd = () => "Tình dục hóa trẻ vị thành niên hoặc các nhân vật hư cấu có đặc điểm ngoại hình trẻ em, bất kể tuổi hoặc cốt truyện hư cấu của họ",
  md = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? id() : e === "pt" ? od() : e === "ch" ? sd() : e === "de" ? ud() : e === "es" ? ad() : e === "fr" ? _d() : e === "it" ? ld() : e === "jp" ? cd() : e === "pl" ? dd() : e === "ru" ? gd() : e === "uk" ? pd() : fd()
  },
  vd = () => "Rules",
  hd = () => "Regras",
  bd = () => "规则",
  xd = () => "Regeln",
  kd = () => "Reglas",
  wd = () => "Règles",
  zd = () => "Regole",
  yd = () => "ルール",
  jd = () => "Zasady",
  Cd = () => "Правила",
  $d = () => "Правила",
  Dd = () => "Luật",
  dv = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? vd() : e === "pt" ? hd() : e === "ch" ? bd() : e === "de" ? xd() : e === "es" ? kd() : e === "fr" ? wd() : e === "it" ? zd() : e === "jp" ? yd() : e === "pl" ? jd() : e === "ru" ? Cd() : e === "uk" ? $d() : Dd()
  },
  Pd = () => "allowed",
  Sd = () => "permitido",
  Gd = () => "允许",
  Ud = () => "erlaubt",
  qd = () => "permitido",
  Ld = () => "autorisé",
  Nd = () => "consentito",
  Ad = () => "許可",
  Id = () => "dozwolone",
  Rd = () => "разрешено",
  Td = () => "дозволено",
  Md = () => "được phép",
  ze = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Pd() : e === "pt" ? Sd() : e === "ch" ? Gd() : e === "de" ? Ud() : e === "es" ? qd() : e === "fr" ? Ld() : e === "it" ? Nd() : e === "jp" ? Ad() : e === "pl" ? Id() : e === "ru" ? Rd() : e === "uk" ? Td() : Md()
  },
  Bd = () => "permanent ban",
  Ed = () => "banimento permanente",
  Kd = () => "永久封禁",
  Hd = () => "permanenter Bann",
  Zd = () => "ban permanente",
  Vd = () => "bannissement permanent",
  Od = () => "ban permanente",
  Fd = () => "永久BAN",
  Jd = () => "permanentny ban",
  Wd = () => "перманентный бан",
  Xd = () => "перманентний бан",
  Qd = () => "cấm vĩnh viễn",
  ye = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Bd() : e === "pt" ? Ed() : e === "ch" ? Kd() : e === "de" ? Hd() : e === "es" ? Zd() : e === "fr" ? Vd() : e === "it" ? Od() : e === "jp" ? Fd() : e === "pl" ? Jd() : e === "ru" ? Wd() : e === "uk" ? Xd() : Qd()
  },
  Yd = () => "timeout",
  eg = () => "suspensão",
  rg = () => "禁言",
  ng = () => "Sperre",
  tg = () => "suspensión",
  ig = () => "suspension",
  og = () => "sospensione",
  sg = () => "一時停止",
  ug = () => "zawieszenie",
  ag = () => "тайм-аут",
  _g = () => "тайм-аут",
  lg = () => "tạm khóa",
  cg = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Yd() : e === "pt" ? eg() : e === "ch" ? rg() : e === "de" ? ng() : e === "es" ? tg() : e === "fr" ? ig() : e === "it" ? og() : e === "jp" ? sg() : e === "pl" ? ug() : e === "ru" ? ag() : e === "uk" ? _g() : lg()
  },
  dg = () => "Destroying others' work with no creative intent.",
  gg = () => "Destruir o trabalho dos outros sem intenção criativa.",
  pg = () => "毫无创意目的地破坏他人作品。",
  fg = () => "Zerstörung der Arbeit anderer ohne kreative Absicht.",
  mg = () => "Destruir el trabajo de otros sin intención creativa.",
  vg = () => "Détruire le travail des autres sans intention créative.",
  hg = () => "Distruggere il lavoro degli altri senza intento creativo.",
  bg = () => "創造的な意図なく他人の作品を破壊する行為。",
  xg = () => "Niszczenie cudzych prac bez intencji twórczej.",
  kg = () => "Уничтожение чужих работ без какого-либо творческого намерения.",
  wg = () => "Знищення чужих робіт без творчого наміру.",
  zg = () => "Phá hoại tác phẩm của người khác mà không có ý định sáng tạo.",
  yg = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? dg() : e === "pt" ? gg() : e === "ch" ? pg() : e === "de" ? fg() : e === "es" ? mg() : e === "fr" ? vg() : e === "it" ? hg() : e === "jp" ? bg() : e === "pl" ? xg() : e === "ru" ? kg() : e === "uk" ? wg() : zg()
  },
  jg = () => "Explicit, hateful, or illegal content is not tolerated.",
  Cg = () => "Conteúdo explícito, de ódio ou ilegal não é tolerado.",
  $g = () => "不容忍色情、仇恨或违法内容。",
  Dg = () => "Explizite, hasserfüllte oder illegale Inhalte werden nicht toleriert.",
  Pg = () => "El contenido explícito, de odio o ilegal no es tolerado.",
  Sg = () => "Le contenu explicite, haineux ou illégal n'est pas toléré.",
  Gg = () => "Contenuti espliciti, di odio o illegali non sono tollerati.",
  Ug = () => "露骨、差別的、または違法なコンテンツは容認されません。",
  qg = () => "Treści jednoznacznie seksualne, nawołujące do nienawiści lub nielegalne nie są tolerowane.",
  Lg = () => "Откровенный, ненавистнический или незаконный контент запрещён.",
  Ng = () => "Відвертий, ненависницький або незаконний контент не допускається.",
  Ag = () => "Nội dung khiêu dâm, thù hằn hoặc bất hợp pháp sẽ không được dung thứ.",
  Ig = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? jg() : e === "pt" ? Cg() : e === "ch" ? $g() : e === "de" ? Dg() : e === "es" ? Pg() : e === "fr" ? Sg() : e === "it" ? Gg() : e === "jp" ? Ug() : e === "pl" ? qg() : e === "ru" ? Lg() : e === "uk" ? Ng() : Ag()
  },
  Rg = () => "Erasing spam, inappropriate or suggestive content with transparent pixels.",
  Tg = () => "Apagar spam, conteúdo inapropriado ou sugestivo com pixels transparentes.",
  Mg = () => "使用透明像素清除垃圾内容、不当或暗示性内容。",
  Bg = () => "Spam, unangemessene oder anzügliche Inhalte mit transparenten Pixeln entfernen.",
  Eg = () => "Borrar spam, contenido inapropiado o sugerente con píxeles transparentes.",
  Kg = () => "Effacer le spam, le contenu inapproprié ou suggestif avec des pixels transparents.",
  Hg = () => "Cancellare spam, contenuti inappropriati o allusivi con pixel trasparenti.",
  Zg = () => "透明ピクセルを使って、スパム、不適切、または性的示唆の強いコンテンツを消去する行為。",
  Vg = () => "Usuwanie spamu, nieodpowiednich lub sugestywnych treści za pomocą przezroczystych pikseli.",
  Og = () => "Удаление спама, неприемлемого или откровенного контента прозрачными пикселями.",
  Fg = () => "Видалення спаму, неприйнятного чи відвертого контенту прозорими пікселями.",
  Jg = () => "Xóa spam, nội dung không phù hợp hoặc khiêu gợi bằng pixel trong suốt.",
  Wg = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Rg() : e === "pt" ? Tg() : e === "ch" ? Mg() : e === "de" ? Bg() : e === "es" ? Eg() : e === "fr" ? Kg() : e === "it" ? Hg() : e === "jp" ? Zg() : e === "pl" ? Vg() : e === "ru" ? Og() : e === "uk" ? Fg() : Jg()
  },
  Xg = () => "One account per person. No automation or exploits.",
  Qg = () => "Uma conta por pessoa. Sem automação ou exploits.",
  Yg = () => "每人只能使用一个账号。禁止使用自动化工具或利用漏洞。",
  ep = () => "Ein Konto pro Person. Keine Automatisierung oder Exploits.",
  rp = () => "Una cuenta por persona. Sin automatización ni exploits.",
  np = () => "Un seul compte par personne. Aucune automatisation ni exploitation de failles.",
  tp = () => "Un account per persona. Nessuna automazione o exploit.",
  ip = () => "1人につき1アカウントです。自動化やエクスプロイトは禁止です。",
  op = () => "Jedno konto na osobę. Żadnej automatyzacji ani exploitów.",
  sp = () => "Один аккаунт на человека. Никакой автоматизации и эксплойтов.",
  up = () => "Один акаунт на людину. Без автоматизації чи експлойтів.",
  ap = () => "Mỗi người một tài khoản. Không được tự động hóa hay khai thác lỗi.",
  _p = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Xg() : e === "pt" ? Qg() : e === "ch" ? Yg() : e === "de" ? ep() : e === "es" ? rp() : e === "fr" ? np() : e === "it" ? tp() : e === "jp" ? ip() : e === "pl" ? op() : e === "ru" ? sp() : e === "uk" ? up() : ap()
  },
  lp = () => "Competing for space is part of the game.",
  cp = () => "Competir por espaço faz parte do jogo.",
  dp = () => "争夺空间是游戏的一部分。",
  gp = () => "Der Wettbewerb um Platz ist Teil des Spiels.",
  pp = () => "Competir por el espacio es parte del juego.",
  fp = () => "La compétition pour l'espace fait partie du jeu.",
  mp = () => "Competere per lo spazio fa parte del gioco.",
  vp = () => "スペースをめぐる競争はゲームの一部です。",
  hp = () => "Rywalizacja o przestrzeń jest częścią gry.",
  bp = () => "Борьба за территорию — часть игры.",
  xp = () => "Боротьба за простір — це частина гри.",
  kp = () => "Cạnh tranh không gian là một phần của trò chơi.",
  wp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? lp() : e === "pt" ? cp() : e === "ch" ? dp() : e === "de" ? gp() : e === "es" ? pp() : e === "fr" ? fp() : e === "it" ? mp() : e === "jp" ? vp() : e === "pl" ? hp() : e === "ru" ? bp() : e === "uk" ? xp() : kp()
  },
  zp = () => "Fair play",
  yp = () => "Jogo justo",
  jp = () => "公平游戏",
  Cp = () => "Fair Play",
  $p = () => "Juego limpio",
  Dp = () => "Fair play",
  Pp = () => "Fair play",
  Sp = () => "フェアプレー",
  Gp = () => "Fair play",
  Up = () => "Честная игра",
  qp = () => "Чесна гра",
  Lp = () => "Chơi công bằng",
  Np = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? zp() : e === "pt" ? yp() : e === "ch" ? jp() : e === "de" ? Cp() : e === "es" ? $p() : e === "fr" ? Dp() : e === "it" ? Pp() : e === "jp" ? Sp() : e === "pl" ? Gp() : e === "ru" ? Up() : e === "uk" ? qp() : Lp()
  },
  Ap = () => "Prohibited",
  Ip = () => "Proibido",
  Rp = () => "禁止行为",
  Tp = () => "Verboten",
  Mp = () => "Prohibido",
  Bp = () => "Interdit",
  Ep = () => "Vietato",
  Kp = () => "禁止事項",
  Hp = () => "Zabronione",
  Zp = () => "Запрещено",
  Vp = () => "Заборонено",
  Op = () => "Bị cấm",
  Fp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ap() : e === "pt" ? Ip() : e === "ch" ? Rp() : e === "de" ? Tp() : e === "es" ? Mp() : e === "fr" ? Bp() : e === "it" ? Ep() : e === "jp" ? Kp() : e === "pl" ? Hp() : e === "ru" ? Zp() : e === "uk" ? Vp() : Op()
  },
  Jp = () => "Griefing",
  Wp = () => "Griefing",
  Xp = () => "恶意破坏",
  Qp = () => "Griefing",
  Yp = () => "Griefing",
  ef = () => "Griefing",
  rf = () => "Griefing",
  nf = () => "グリーフィング",
  tf = () => "Griefing",
  of = () => "Гриферство",
  sf = () => "Грифінг",
  uf = () => "Griefing",
  af = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Jp() : e === "pt" ? Wp() : e === "ch" ? Xp() : e === "de" ? Qp() : e === "es" ? Yp() : e === "fr" ? ef() : e === "it" ? rf() : e === "jp" ? nf() : e === "pl" ? tf() : e === "ru" ? of() : e === "uk" ? sf() : uf()
  },
  _f = () => "Inappropriate content",
  lf = () => "Conteúdo inapropriado",
  cf = () => "不当内容",
  df = () => "Unangemessene Inhalte",
  gf = () => "Contenido inapropiado",
  pf = () => "Contenu inapproprié",
  ff = () => "Contenuto inappropriato",
  mf = () => "不適切なコンテンツ",
  vf = () => "Nieodpowiednie treści",
  hf = () => "Неприемлемый контент",
  bf = () => "Неприйнятний вміст",
  xf = () => "Nội dung không phù hợp",
  kf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? _f() : e === "pt" ? lf() : e === "ch" ? cf() : e === "de" ? df() : e === "es" ? gf() : e === "fr" ? pf() : e === "it" ? ff() : e === "jp" ? mf() : e === "pl" ? vf() : e === "ru" ? hf() : e === "uk" ? bf() : xf()
  },
  wf = () => "Map cleanup",
  zf = () => "Limpeza do mapa",
  yf = () => "地图清理",
  jf = () => "Kartenbereinigung",
  Cf = () => "Limpieza del mapa",
  $f = () => "Nettoyage de la carte",
  Df = () => "Pulizia della mappa",
  Pf = () => "マップの清掃",
  Sf = () => "Sprzątanie mapy",
  Gf = () => "Очистка карты",
  Uf = () => "Очищення карти",
  qf = () => "Dọn dẹp bản đồ",
  Lf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? wf() : e === "pt" ? zf() : e === "ch" ? yf() : e === "de" ? jf() : e === "es" ? Cf() : e === "fr" ? $f() : e === "it" ? Df() : e === "jp" ? Pf() : e === "pl" ? Sf() : e === "ru" ? Gf() : e === "uk" ? Uf() : qf()
  },
  Nf = () => "Multi-accounts & bots",
  Af = () => "Múltiplas contas e bots",
  If = () => "多账号与机器人",
  Rf = () => "Multi-Accounts & Bots",
  Tf = () => "Multi-cuentas y bots",
  Mf = () => "Multi-comptes et bots",
  Bf = () => "Multi-account e bot",
  Ef = () => "複数アカウント＆ボット",
  Kf = () => "Multi-konta i boty",
  Hf = () => "Мультиаккаунты и боты",
  Zf = () => "Мультиакаунти та боти",
  Vf = () => "Nhiều tài khoản & bot",
  Of = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Nf() : e === "pt" ? Af() : e === "ch" ? If() : e === "de" ? Rf() : e === "es" ? Tf() : e === "fr" ? Mf() : e === "it" ? Bf() : e === "jp" ? Ef() : e === "pl" ? Kf() : e === "ru" ? Hf() : e === "uk" ? Zf() : Vf()
  },
  Ff = () => "Territorial disputes",
  Jf = () => "Disputas territoriais",
  Wf = () => "领地争夺",
  Xf = () => "Gebietskonflikte",
  Qf = () => "Disputas territoriales",
  Yf = () => "Disputes territoriales",
  em = () => "Dispute territoriali",
  rm = () => "領土紛争",
  nm = () => "Spory terytorialne",
  tm = () => "Территориальные споры",
  im = () => "Територіальні спори",
  om = () => "Tranh chấp lãnh thổ",
  sm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ff() : e === "pt" ? Jf() : e === "ch" ? Wf() : e === "de" ? Xf() : e === "es" ? Qf() : e === "fr" ? Yf() : e === "it" ? em() : e === "jp" ? rm() : e === "pl" ? nm() : e === "ru" ? tm() : e === "uk" ? im() : om()
  };
var um = P('<div class="absolute inset-0 z-20 flex items-center justify-center"><div class="flex flex-col items-center gap-2.5"><div class="text-base-content/60 flex h-14 w-14 items-center justify-center rounded-full bg-white/75"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg></div> <span class="text-base-content/85 text-sm font-semibold"> </span> <button class="bg-neutral/75 hover:bg-neutral/90 mt-0.5 flex items-center gap-1.5 rounded-full border-none px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition-all active:scale-[0.96]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> </button></div></div>'),
  am = P("<button>&#8249;</button>"),
  _m = P('<button class="bg-neutral/55 hover:bg-neutral/80 absolute right-2 bottom-3 z-10 flex items-center gap-1.5 rounded-full border-none px-4 py-2 text-[0.82rem] font-medium text-white backdrop-blur-sm transition-all active:scale-[0.96]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> </button>'),
  lm = P('<div><img class="block h-full w-full object-cover"/></div>'),
  cm = P("<button>&#8250;</button>"),
  dm = P("<button></button>"),
  gm = P('<div class="relative mb-6 flex flex-wrap items-center" role="region" aria-roledescription="carousel" tabindex="0"><div class="relative w-full touch-pan-y overflow-hidden rounded-lg" role="group"><!> <!> <!> <div></div> <!></div> <p aria-live="polite"> </p> <div></div></div>');

function le(n, r) {
  re(r, !0);
  let e = H(r, "sensitive", 3, !1),
    p = ke(0),
    h = ke(!1),
    S = 0,
    C = Q(() => e() && !i(h));

  function b(c) {
    c === i(p) || c < 0 || c >= r.cards.length || he(p, c, !0)
  }
  var L = gm(),
    j = _(L),
    x = _(j);
  {
    var w = c => {
      var f = um(),
        G = _(f),
        k = l(_(G), 2),
        q = _(k, !0);
      u(k);
      var U = l(k, 2),
        R = l(_(U));
      u(U), u(G), u(f), g((Y, W) => {
        m(q, Y), m(R, ` ${W??""}`)
      }, [() => yn(), () => Me()]), X("click", U, () => {
        he(h, !0)
      }), s(c, f)
    };
    K(x, c => {
      i(C) && c(w)
    })
  }
  var v = l(x, 2);
  {
    var D = c => {
      var f = am();
      N(f, 1, "absolute top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-none bg-black/45 text-lg leading-none text-white backdrop-blur-sm transition-colors select-none hover:bg-black/70 active:scale-[0.92] disabled:pointer-events-none disabled:opacity-30 md:h-14 md:w-14 md:text-[1.6rem] left-2"), g(G => {
        O(f, "aria-label", G), f.disabled = i(p) === 0
      }, [() => cn()]), X("click", f, () => b(i(p) - 1)), s(c, f)
    };
    K(v, c => {
      i(C) || c(D)
    })
  }
  var z = l(v, 2);
  {
    var $ = c => {
      var f = _m(),
        G = l(_(f));
      u(f), g((k, q) => {
        O(f, "aria-label", k), m(G, ` ${q??""}`)
      }, [() => dr(), () => Ye()]), X("click", f, () => {
        he(h, !1)
      }), s(c, f)
    };
    K(z, c => {
      e() && !i(C) && c($)
    })
  }
  var y = l(z, 2);
  let o;
  ce(y, 21, () => r.cards, de, (c, f, G) => {
    var k = lm(),
      q = _(k);
    u(k), g(() => {
      N(k, 1, `border-base-300 bg-base-100 w-full overflow-hidden rounded-lg border transition-opacity duration-300 [grid-area:1/1] ${G===i(p)?"pointer-events-auto opacity-100":"pointer-events-none opacity-0"}`), O(k, "aria-hidden", G !== i(p)), O(q, "src", i(f).src), O(q, "alt", i(f).alt)
    }), s(c, k)
  }), u(y);
  var a = l(y, 2);
  {
    var d = c => {
      var f = cm();
      N(f, 1, "absolute top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-none bg-black/45 text-lg leading-none text-white backdrop-blur-sm transition-colors select-none hover:bg-black/70 active:scale-[0.92] disabled:pointer-events-none disabled:opacity-30 md:h-14 md:w-14 md:text-[1.6rem] right-2"), g(G => {
        O(f, "aria-label", G), f.disabled = i(p) === r.cards.length - 1
      }, [() => Xr()]), X("click", f, () => b(i(p) + 1)), s(c, f)
    };
    K(a, c => {
      i(C) || c(d)
    })
  }
  u(j);
  var M = l(j, 2);
  let J;
  var ue = _(M, !0);
  u(M);
  var E = l(M, 2);
  let B;
  ce(E, 21, () => r.cards, de, (c, f, G) => {
    var k = dm();
    g(q => {
      N(k, 1, `h-2 w-2 rounded-full border-none p-0 transition-all ${G===i(p)?"bg-base-content/60 scale-125":"bg-base-300 hover:bg-base-content/40"}`), O(k, "aria-label", q)
    }, [() => Rr({
      current: G + 1,
      total: r.cards.length
    })]), X("click", k, () => b(G)), s(c, k)
  }), u(E), u(L), g(c => {
    O(L, "aria-label", c), o = N(y, 1, "grid w-full overflow-hidden py-1", null, o, {
      "blur-[75px]": i(C),
      "saturate-[1.1]": i(C),
      "scale-[1.08]": i(C),
      "pointer-events-none": i(C),
      "select-none": i(C)
    }), J = N(M, 1, "text-base-content/80 mt-2.5 min-h-6 w-full text-center text-sm leading-normal font-bold", null, J, {
      "opacity-0": i(C)
    }), m(ue, r.cards[i(p)].caption), B = N(E, 1, "mt-3 flex w-full justify-center gap-2 pb-1", null, B, {
      "opacity-0": i(C)
    })
  }, [() => jr()]), X("keydown", L, c => {
    i(C) || (c.key === "ArrowLeft" ? (c.preventDefault(), b(i(p) - 1)) : c.key === "ArrowRight" && (c.preventDefault(), b(i(p) + 1)))
  }), X("pointerdown", j, c => {
    i(C) || c.pointerType === "touch" && (S = c.clientX)
  }), X("pointerup", j, c => {
    if (!i(C) && c.pointerType === "touch") {
      const f = c.clientX - S;
      f > 50 ? b(i(p) - 1) : f < -50 && b(i(p) + 1)
    }
  }), s(n, L), ne()
}
$e(["keydown", "pointerdown", "pointerup", "click"]);
var pm = P("<span> </span>"),
  fm = P("<h3><!> <!> <!></h3>"),
  mm = P("<span> </span>"),
  vm = P("<h4><!> <!> <!></h4>");

function oe(n, r) {
  let e = H(r, "level", 3, 3),
    p = H(r, "compact", 3, !1),
    h = H(r, "class", 3, "");
  const S = Q(() => r.showNumber ?? !p());
  var C = Z(),
    b = T(C);
  {
    var L = x => {
        var w = fm(),
          v = _(w);
        {
          var D = o => {
            var a = pm(),
              d = _(a, !0);
            u(a), g(() => m(d, r.number)), s(o, a)
          };
          K(v, o => {
            i(S) && o(D)
          })
        }
        var z = l(v, 2);
        ee(z, () => r.children);
        var $ = l(z, 2);
        {
          var y = o => {
            var a = Z(),
              d = T(a);
            ee(d, () => r.badges), s(o, a)
          };
          K($, o => {
            r.badges && o(y)
          })
        }
        u(w), g(() => N(w, 1, `text-base-content/90 mb-2 flex items-baseline gap-2 leading-snug font-semibold ${p()?"text-lg":"text-2xl"} ${h()??""}`)), s(x, w)
      },
      j = x => {
        var w = vm(),
          v = _(w);
        {
          var D = o => {
            var a = mm(),
              d = _(a, !0);
            u(a), g(() => m(d, r.number)), s(o, a)
          };
          K(v, o => {
            i(S) && o(D)
          })
        }
        var z = l(v, 2);
        ee(z, () => r.children);
        var $ = l(z, 2);
        {
          var y = o => {
            var a = Z(),
              d = T(a);
            ee(d, () => r.badges), s(o, a)
          };
          K($, o => {
            r.badges && o(y)
          })
        }
        u(w), g(() => N(w, 1, `text-base-content/85 mt-7 mb-2 flex items-baseline gap-2 leading-snug font-semibold ${p()?"text-base":"text-lg"} ${h()??""}`)), s(x, w)
      };
    K(b, x => {
      e() === 3 ? x(L) : x(j, !1)
    })
  }
  s(n, C)
}
var hm = P('<p class="text-base-content/90 mb-5 text-sm leading-relaxed"><!></p>');

function F(n, r) {
  var e = hm(),
    p = _(e);
  ee(p, () => r.children), u(e), s(n, e)
}
var bm = P("<section><!></section>");

function se(n, r) {
  let e = H(r, "compact", 3, !1),
    p = H(r, "class", 3, "mb-7 pt-2 md:mb-9 md:pt-3");
  var h = bm(),
    S = _(h);
  ee(S, () => r.children), u(h), g(() => N(h, 1, ge(e() ? "" : p()))), s(n, h)
}
const xm = "" + new URL("../assets/griefing1.mrf_QTk2.png", import.meta.url).href,
  km = "" + new URL("../assets/griefing2.HP5n4LVA.png", import.meta.url).href,
  wm = "" + new URL("../assets/pgriefing1.Cxw7Oxbm.png", import.meta.url).href,
  zm = "" + new URL("../assets/pgriefing2.cEou4X11.png", import.meta.url).href;
var ym = P("<span><!></span>");

function V(n, r) {
  const e = {
    error: "badge-error bg-error/20",
    warn: "badge-warning bg-warning/20",
    warning: "badge-warning bg-warning/20",
    success: "badge-success bg-success/20"
  };
  var p = ym(),
    h = _(p);
  ee(h, () => r.children), u(p), g(() => N(p, 1, `badge badge-soft ${e[r.level]??""} badge-sm text-[10px] font-extrabold tracking-wide uppercase`)), s(n, p)
}
var jm = P('<!> <!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1),
  Cm = P('<!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1),
  $m = P("<div><!> <!></div>");

function Dm(n, r) {
  re(r, !0);
  let e = H(r, "compact", 3, !1),
    p = Q(() => [{
      src: xm,
      alt: "griefing1",
      caption: eu()
    }, {
      src: km,
      alt: "griefing2",
      caption: Ui()
    }]),
    h = Q(() => [{
      src: wm,
      alt: "pgriefing1",
      caption: io()
    }, {
      src: zm,
      alt: "pgriefing2",
      caption: ns()
    }]);
  var S = $m(),
    C = _(S);
  se(C, {
    get compact() {
      return e()
    },
    class: "mb-4 md:mb-5",
    children: (L, j) => {
      var x = jm(),
        w = T(x);
      F(w, {
        children: (o, a) => {
          var d = Z(),
            M = T(d);
          ie(M, () => ya()), s(o, d)
        }
      });
      var v = l(w, 2);
      oe(v, {
        level: 3,
        number: "2.1",
        get compact() {
          return e()
        },
        showNumber: !0,
        class: "mt-9",
        children: (o, a) => {
          I();
          var d = A();
          g(M => m(d, M), [() => Cu()]), s(o, d)
        },
        $$slots: {
          default: !0
        }
      });
      var D = l(v, 2);
      F(D, {
        children: (o, a) => {
          var d = Z(),
            M = T(d);
          ie(M, () => Tu()), s(o, d)
        }
      });
      var z = l(D, 2),
        $ = _(z);
      V($, {
        level: "error",
        children: (o, a) => {
          I();
          var d = A();
          g(M => m(d, M), [() => Lt()]), s(o, d)
        }
      }), u(z);
      var y = l(z, 2);
      le(y, {
        get cards() {
          return i(p)
        }
      }), s(L, x)
    },
    $$slots: {
      default: !0
    }
  });
  var b = l(C, 2);
  se(b, {
    get compact() {
      return e()
    },
    children: (L, j) => {
      var x = Cm(),
        w = T(x);
      oe(w, {
        level: 3,
        number: "2.2",
        get compact() {
          return e()
        },
        showNumber: !0,
        children: (y, o) => {
          I();
          var a = A();
          g(d => m(a, d), [() => Qu()]), s(y, a)
        },
        $$slots: {
          default: !0
        }
      });
      var v = l(w, 2);
      F(v, {
        children: (y, o) => {
          var a = Z(),
            d = T(a);
          ie(d, () => ca()), s(y, a)
        }
      });
      var D = l(v, 2),
        z = _(D);
      V(z, {
        level: "warning",
        children: (y, o) => {
          I();
          var a = A();
          g(d => m(a, d), [() => Ot()]), s(y, a)
        }
      }), u(D);
      var $ = l(D, 2);
      le($, {
        get cards() {
          return i(h)
        }
      }), s(L, x)
    },
    $$slots: {
      default: !0
    }
  }), u(S), g(() => N(S, 1, ge(e() ? "space-y-4" : ""))), s(n, S), ne()
}
const Pm = "" + new URL("../assets/borde1.2HTtxzDt.png", import.meta.url).href,
  Sm = "" + new URL("../assets/borde2.CN89IOz0.png", import.meta.url).href,
  Gm = "" + new URL("../assets/borde4.D9VfQfkE.png", import.meta.url).href,
  Um = "" + new URL("../assets/borde5.DkmTTj5N.png", import.meta.url).href,
  qm = "" + new URL("../assets/borde6.CtRHeorl.png", import.meta.url).href;
var Lm = P('<!> <!> <ul class="marker:text-error mb-5 list-disc pl-5"><li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li></ul> <div class="mb-2 flex gap-1"><!> <!></div>', 1),
  Nm = P('<!> <!> <div class="mb-2 flex gap-1"><!> <!></div> <!>', 1),
  Am = P("<div><!> <!></div>");

function Im(n, r) {
  re(r, !0);
  let e = H(r, "compact", 3, !1),
    p = Q(() => [{
      src: Pm,
      alt: "borde1",
      caption: ho()
    }, {
      src: Sm,
      alt: "borde2",
      caption: gu()
    }, {
      src: Gm,
      alt: "borde4",
      caption: Go()
    }, {
      src: Um,
      alt: "borde5",
      caption: we()
    }, {
      src: qm,
      alt: "borde6",
      caption: we()
    }]);
  var h = Am(),
    S = _(h);
  se(S, {
    get compact() {
      return e()
    },
    class: "mb-4 pt-2 md:mb-5 md:pt-3",
    children: (b, L) => {
      var j = Lm(),
        x = T(j);
      oe(x, {
        level: 3,
        number: "1.1",
        get compact() {
          return e()
        },
        showNumber: !0,
        children: (k, q) => {
          I();
          var U = A();
          g(R => m(U, R), [() => ql()]), s(k, U)
        },
        $$slots: {
          default: !0
        }
      });
      var w = l(x, 2);
      F(w, {
        children: (k, q) => {
          var U = Z(),
            R = T(U);
          ie(R, () => Vl()), s(k, U)
        }
      });
      var v = l(w, 2),
        D = _(v),
        z = _(D, !0);
      u(D);
      var $ = l(D, 2),
        y = _($, !0);
      u($);
      var o = l($, 2),
        a = _(o, !0);
      u(o);
      var d = l(o, 2),
        M = _(d, !0);
      u(d);
      var J = l(d, 2),
        ue = _(J, !0);
      u(J);
      var E = l(J, 2),
        B = _(E, !0);
      u(E), u(v);
      var c = l(v, 2),
        f = _(c);
      V(f, {
        level: "error",
        children: (k, q) => {
          I();
          var U = A();
          g(R => m(U, R), [() => kt()]), s(k, U)
        }
      });
      var G = l(f, 2);
      V(G, {
        level: "warning",
        children: (k, q) => {
          I();
          var U = A();
          g(R => m(U, R), [() => Jn()]), s(k, U)
        }
      }), u(c), g((k, q, U, R, Y, W) => {
        m(z, k), m(y, q), m(a, U), m(M, R), m(ue, Y), m(B, W)
      }, [() => hc(), () => md(), () => Gc(), () => td(), () => oc(), () => Hc()]), s(b, j)
    },
    $$slots: {
      default: !0
    }
  });
  var C = l(S, 2);
  se(C, {
    get compact() {
      return e()
    },
    children: (b, L) => {
      var j = Nm(),
        x = T(j);
      oe(x, {
        level: 3,
        number: "1.2",
        get compact() {
          return e()
        },
        showNumber: !0,
        children: (y, o) => {
          I();
          var a = A();
          g(d => m(a, d), [() => w_()]), s(y, a)
        },
        $$slots: {
          default: !0
        }
      });
      var w = l(x, 2);
      F(w, {
        children: (y, o) => {
          var a = Z(),
            d = T(a);
          ie(d, () => N_()), s(y, a)
        }
      });
      var v = l(w, 2),
        D = _(v);
      V(D, {
        level: "success",
        children: (y, o) => {
          I();
          var a = A();
          g(d => m(a, d), [() => be()]), s(y, a)
        }
      });
      var z = l(D, 2);
      V(z, {
        level: "warning",
        children: (y, o) => {
          I();
          var a = A();
          g(d => m(a, d), [() => at()]), s(y, a)
        }
      }), u(v);
      var $ = l(v, 2);
      le($, {
        get cards() {
          return i(p)
        }
      }), s(b, j)
    },
    $$slots: {
      default: !0
    }
  }), u(h), g(() => N(h, 1, ge(e() ? "space-y-4" : ""))), s(n, h), ne()
}
const Rm = "" + new URL("../assets/mapclean1.CXzD9GTn.png", import.meta.url).href,
  Tm = "" + new URL("../assets/mapclean2.B1--Lv8s.png", import.meta.url).href,
  Mm = "" + new URL("../assets/mapclean3.zxc4kxhZ.png", import.meta.url).href;
var Bm = P('<!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1);

function Em(n, r) {
  re(r, !0);
  let e = H(r, "compact", 3, !1),
    p = Q(() => [{
      src: Rm,
      alt: "mapclean1",
      caption: Bs()
    }, {
      src: Tm,
      alt: "mapclean2",
      caption: Ds()
    }, {
      src: Mm,
      alt: "mapclean3",
      caption: fs()
    }]);
  se(n, {
    get compact() {
      return e()
    },
    children: (h, S) => {
      var C = Bm(),
        b = T(C);
      oe(b, {
        level: 4,
        number: "2.3.2.",
        get compact() {
          return e()
        },
        children: (v, D) => {
          I();
          var z = A();
          g($ => m(z, $), [() => Wa()]), s(v, z)
        },
        $$slots: {
          default: !0
        }
      });
      var L = l(b, 2);
      F(L, {
        children: (v, D) => {
          I();
          var z = A();
          g($ => m(z, $), [() => Ia()]), s(v, z)
        }
      });
      var j = l(L, 2),
        x = _(j);
      V(x, {
        level: "success",
        children: (v, D) => {
          I();
          var z = A();
          g($ => m(z, $), [() => be()]), s(v, z)
        }
      }), u(j);
      var w = l(j, 2);
      le(w, {
        get cards() {
          return i(p)
        }
      }), s(h, C)
    },
    $$slots: {
      default: !0
    }
  }), ne()
}

function Km(n, r) {
  re(r, !0), H(r, "compact", 3, !1), F(n, {
    children: (e, p) => {
      var h = Z(),
        S = T(h);
      ie(S, () => __()), s(e, h)
    }
  }), ne()
}
const Hm = "" + new URL("../assets/ngriefing1.CQEoQ-5k.png", import.meta.url).href,
  Zm = "" + new URL("../assets/ngriefing2.CA1282Nq.png", import.meta.url).href,
  Vm = "" + new URL("../assets/ngriefing3.l-WuAkT6.png", import.meta.url).href;
var Om = P('<!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1),
  Fm = P("<div><!> <!></div>");

function Jm(n, r) {
  re(r, !0);
  let e = H(r, "compact", 3, !1),
    p = Q(() => [{
      src: Vm,
      alt: "ngriefing3",
      caption: bi()
    }, {
      src: Hm,
      alt: "ngriefing1",
      caption: si()
    }, {
      src: Zm,
      alt: "ngriefing2",
      caption: Zi()
    }]);
  var h = Fm(),
    S = _(h);
  F(S, {
    children: (b, L) => {
      I();
      var j = A();
      g(x => m(j, x), [() => xl()]), s(b, j)
    }
  });
  var C = l(S, 2);
  se(C, {
    get compact() {
      return e()
    },
    children: (b, L) => {
      var j = Om(),
        x = T(j);
      oe(x, {
        level: 4,
        number: "2.3.1.",
        get compact() {
          return e()
        },
        children: ($, y) => {
          I();
          var o = A();
          g(a => m(o, a), [() => ul()]), s($, o)
        },
        $$slots: {
          default: !0
        }
      });
      var w = l(x, 2);
      F(w, {
        children: ($, y) => {
          I();
          var o = A();
          g(a => m(o, a), [() => F_()]), s($, o)
        }
      });
      var v = l(w, 2),
        D = _(v);
      V(D, {
        level: "success",
        children: ($, y) => {
          I();
          var o = A();
          g(a => m(o, a), [() => be()]), s($, o)
        }
      }), u(v);
      var z = l(v, 2);
      le(z, {
        get cards() {
          return i(p)
        }
      }), s(b, j)
    },
    $$slots: {
      default: !0
    }
  }), u(h), g(() => N(h, 1, ge(e() ? "space-y-4" : ""))), s(n, h), ne()
}
var Wm = P('<details><summary class="collapse-title flex min-h-0! gap-3.5 py-3.5! ps-4! sm:gap-4 sm:ps-5!"><div></div> <div class="min-w-0 flex-1"><div class="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4"><div class="min-w-0"><div class="flex flex-wrap items-center gap-2.5"><span class="text-base-content text-base leading-snug font-bold"> </span> <!></div> <p class="text-base-content/90 mt-1 text-sm leading-relaxed"> </p></div></div></div></summary> <div class="collapse-content p-0!"><div class="border-base-content/5 border-t px-4 py-5 sm:px-5"><!></div></div></details>'),
  Xm = P('<div><div></div> <div class="min-w-0 flex-1"><div class="min-w-0"><div class="flex flex-wrap items-center gap-2.5"><span class="text-base-content text-base leading-snug font-bold"> </span> <!></div> <p class="text-base-content/90 mt-1 text-sm leading-relaxed"> </p></div></div></div>'),
  Qm = P('<div><div><svg class="size-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd"></path></svg> <span> </span></div> <!></div>');

function gv(n, r) {
  re(r, !0);
  let e = H(r, "showExtraInfo", 3, !0),
    p = Q(() => [{
      label: Fp(),
      icon: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
      badgeLevel: "error",
      classes: {
        header: "bg-error/10 text-error",
        button: "border-error/30 bg-error/5 hover:bg-error/10",
        index: "bg-error/12 text-error"
      },
      rules: [{
        title: kf(),
        content: Im,
        description: Ig(),
        badge: {
          label: ye(),
          type: "ban"
        }
      }, {
        title: af(),
        content: Dm,
        description: yg(),
        badge: {
          label: cg(),
          type: "ban"
        }
      }, {
        title: Of(),
        content: Km,
        description: _p(),
        badge: {
          label: ye(),
          type: "ban"
        }
      }]
    }, {
      label: Np(),
      icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      badgeLevel: "success",
      classes: {
        header: "bg-success/10 text-success",
        button: "border-success/30 bg-success/5 hover:bg-success/10",
        index: "bg-success/12 text-success"
      },
      rules: [{
        title: sm(),
        content: Jm,
        description: wp(),
        badge: {
          label: ze(),
          type: "allowed"
        },
        allowed: !0
      }, {
        title: Lf(),
        content: Em,
        description: Wg(),
        badge: {
          label: ze(),
          type: "allowed"
        },
        allowed: !0
      }]
    }]);
  var h = Z(),
    S = T(h);
  ce(S, 17, () => i(p), de, (C, b, L) => {
    var j = Qm();
    N(j, 1, "overflow-hidden rounded-xl", null, {}, {
      "mt-3": L > 0
    });
    var x = _(j),
      w = _(x),
      v = _(w);
    u(w);
    var D = l(w, 2),
      z = _(D, !0);
    u(D), u(x);
    var $ = l(x, 2);
    ce($, 17, () => i(b).rules, de, (y, o, a) => {
      var d = Z(),
        M = T(d);
      {
        var J = E => {
            var B = Wm(),
              c = _(B),
              f = _(c);
            f.textContent = a + 1;
            var G = l(f, 2),
              k = _(G),
              q = _(k),
              U = _(q),
              R = _(U),
              Y = _(R, !0);
            u(R);
            var W = l(R, 2);
            {
              var pe = _e => {
                V(_e, {
                  get level() {
                    return i(b).badgeLevel
                  },
                  children: (ve, Ym) => {
                    I();
                    var xe = A();
                    g(() => m(xe, i(o).badge.label)), s(ve, xe)
                  }
                })
              };
              K(W, _e => {
                i(o).badge && _e(pe)
              })
            }
            u(U);
            var te = l(U, 2),
              fe = _(te, !0);
            u(te), u(q), u(k), u(G), u(c);
            var me = l(c, 2),
              ae = _(me),
              je = _(ae);
            Ce(je, () => i(o).content, (_e, ve) => {
              ve(_e, {
                compact: !0
              })
            }), u(ae), u(me), u(B), g(() => {
              N(B, 1, `collapse-arrow collapse rounded-none border-l-[3px] ${i(b).classes.button??""} ${a>0?"border-base-content/5 border-t":""}`), N(f, 1, `${i(b).classes.index??""} flex size-7 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold`), m(Y, i(o).title), m(fe, i(o).description)
            }), s(E, B)
          },
          ue = E => {
            var B = Xm(),
              c = _(B);
            c.textContent = a + 1;
            var f = l(c, 2),
              G = _(f),
              k = _(G),
              q = _(k),
              U = _(q, !0);
            u(q);
            var R = l(q, 2);
            {
              var Y = te => {
                V(te, {
                  get level() {
                    return i(b).badgeLevel
                  },
                  children: (fe, me) => {
                    I();
                    var ae = A();
                    g(() => m(ae, i(o).badge.label)), s(fe, ae)
                  }
                })
              };
              K(R, te => {
                i(o).badge && te(Y)
              })
            }
            u(k);
            var W = l(k, 2),
              pe = _(W, !0);
            u(W), u(G), u(f), u(B), g(() => {
              N(B, 1, `${i(b).classes.button??""} flex w-full cursor-auto gap-3.5 border-l-[3px] px-4 py-3.5 text-left sm:gap-4 sm:px-5 ${a>0?"border-base-content/5 border-t":""}`), N(c, 1, `${i(b).classes.index??""} flex size-7 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold`), m(U, i(o).title), m(pe, i(o).description)
            }), s(E, B)
          };
        K(M, E => {
          e() ? E(J) : E(ue, !1)
        })
      }
      s(y, d)
    }), u(j), g(() => {
      N(x, 1, `${i(b).classes.header??""} flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-widest uppercase`), O(v, "d", i(b).icon), m(z, i(b).label)
    }), s(C, j)
  }), s(n, h), ne()
}
export {
  Im as G, gv as R, Dm as a, Jm as b, Em as c, Km as d, dv as r
};