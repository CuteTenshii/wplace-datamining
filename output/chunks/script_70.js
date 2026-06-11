import {
  g as t
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  k as $e,
  p as re,
  t as g,
  i,
  l as X,
  a as s,
  b as ne,
  e as ke,
  u as Q,
  h as he,
  d as _,
  s as l,
  c as P,
  r as u,
  q as Z,
  f as T,
  bl as A,
  n as I
} from "./CV6xI6o5.js";
import {
  s as m
} from "./hBdZmm-r.js";
import {
  i as K
} from "./iywslKou.js";
import {
  e as ce,
  i as de
} from "./C7N0act3.js";
import {
  c as De
} from "./67fyKCyB.js";
import {
  s as O,
  a as N,
  c as ge
} from "./g3dAVNmx.js";
import {
  p as H
} from "./BQ880tYw.js";
import {
  h as ie
} from "./C-DdtWEO.js";
import {
  s as ee
} from "./DWZhoQU0.js";
const Pe = () => "Click to reveal",
  Se = () => "Clique para revelar",
  Ge = () => "点击查看",
  Ue = () => "Klicken zum Anzeigen",
  qe = () => "Haz clic para revelar",
  Le = () => "Cliquez pour révéler",
  Ne = () => "Clicca per rivelare",
  Ae = () => "クリックして表示",
  Ie = () => "Kliknij, aby odsłonić",
  Re = () => "Нажмите, чтобы показать",
  Te = () => "Натисніть, щоб показати",
  Me = () => "Nhấn để hiện",
  Be = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Pe() : e === "pt" ? Se() : e === "ch" ? Ge() : e === "de" ? Ue() : e === "es" ? qe() : e === "fr" ? Le() : e === "it" ? Ne() : e === "jp" ? Ae() : e === "pl" ? Ie() : e === "ru" ? Re() : e === "uk" ? Te() : Me()
  },
  Ee = () => "Hide",
  Ke = () => "Ocultar",
  He = () => "隐藏",
  Ze = () => "Ausblenden",
  Ve = () => "Ocultar",
  Oe = () => "Masquer",
  Fe = () => "Nascondi",
  Je = () => "非表示",
  We = () => "Ukryj",
  Xe = () => "Скрыть",
  Qe = () => "Сховати",
  Ye = () => "Ẩn",
  er = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ee() : e === "pt" ? Ke() : e === "ch" ? He() : e === "de" ? Ze() : e === "es" ? Ve() : e === "fr" ? Oe() : e === "it" ? Fe() : e === "jp" ? Je() : e === "pl" ? We() : e === "ru" ? Xe() : e === "uk" ? Qe() : Ye()
  },
  rr = () => "Hide sensitive content",
  nr = () => "Ocultar conteúdo sensível",
  tr = () => "隐藏敏感内容",
  ir = () => "Sensiblen Inhalt ausblenden",
  or = () => "Ocultar contenido sensible",
  sr = () => "Masquer le contenu sensible",
  ur = () => "Nascondi contenuto sensibile",
  ar = () => "センシティブなコンテンツを非表示",
  _r = () => "Ukryj wrażliwą treść",
  lr = () => "Скрыть чувствительный контент",
  cr = () => "Сховати чутливий вміст",
  dr = () => "Ẩn nội dung nhạy cảm",
  gr = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? rr() : e === "pt" ? nr() : e === "ch" ? tr() : e === "de" ? ir() : e === "es" ? or() : e === "fr" ? sr() : e === "it" ? ur() : e === "jp" ? ar() : e === "pl" ? _r() : e === "ru" ? lr() : e === "uk" ? cr() : dr()
  },
  pr = () => "Image carousel",
  fr = () => "Carrossel de imagens",
  mr = () => "图片轮播",
  vr = () => "Bilderkarussell",
  hr = () => "Carrusel de imágenes",
  br = () => "Carrousel d'images",
  xr = () => "Carosello di immagini",
  kr = () => "画像カルーセル",
  wr = () => "Karuzela obrazów",
  zr = () => "Карусель изображений",
  yr = () => "Карусель зображень",
  jr = () => "Băng chuyền hình ảnh",
  Cr = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? pr() : e === "pt" ? fr() : e === "ch" ? mr() : e === "de" ? vr() : e === "es" ? hr() : e === "fr" ? br() : e === "it" ? xr() : e === "jp" ? kr() : e === "pl" ? wr() : e === "ru" ? zr() : e === "uk" ? yr() : jr()
  },
  $r = n => `Image ${n.current} of ${n.total}`,
  Dr = n => `Imagem ${n.current} de ${n.total}`,
  Pr = n => `第 ${n.current} 张，共 ${n.total} 张`,
  Sr = n => `Bild ${n.current} von ${n.total}`,
  Gr = n => `Imagen ${n.current} de ${n.total}`,
  Ur = n => `Image ${n.current} sur ${n.total}`,
  qr = n => `Immagine ${n.current} di ${n.total}`,
  Lr = n => `画像 ${n.current} / ${n.total}`,
  Nr = n => `Obraz ${n.current} z ${n.total}`,
  Ar = n => `Изображение ${n.current} из ${n.total}`,
  Ir = n => `Зображення ${n.current} з ${n.total}`,
  Rr = n => `Hình ${n.current} trên ${n.total}`,
  Tr = (n, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? $r(n) : e === "pt" ? Dr(n) : e === "ch" ? Pr(n) : e === "de" ? Sr(n) : e === "es" ? Gr(n) : e === "fr" ? Ur(n) : e === "it" ? qr(n) : e === "jp" ? Lr(n) : e === "pl" ? Nr(n) : e === "ru" ? Ar(n) : e === "uk" ? Ir(n) : Rr(n)
  },
  Mr = () => "Next",
  Br = () => "Próximo",
  Er = () => "下一张",
  Kr = () => "Weiter",
  Hr = () => "Siguiente",
  Zr = () => "Suivant",
  Vr = () => "Successivo",
  Or = () => "次へ",
  Fr = () => "Następny",
  Jr = () => "Далее",
  Wr = () => "Далі",
  Xr = () => "Tiếp",
  Qr = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Mr() : e === "pt" ? Br() : e === "ch" ? Er() : e === "de" ? Kr() : e === "es" ? Hr() : e === "fr" ? Zr() : e === "it" ? Vr() : e === "jp" ? Or() : e === "pl" ? Fr() : e === "ru" ? Jr() : e === "uk" ? Wr() : Xr()
  },
  Yr = () => "Previous",
  en = () => "Anterior",
  rn = () => "上一张",
  nn = () => "Zurück",
  tn = () => "Anterior",
  on = () => "Précédent",
  sn = () => "Precedente",
  un = () => "前へ",
  an = () => "Poprzedni",
  _n = () => "Назад",
  ln = () => "Назад",
  cn = () => "Trước",
  dn = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Yr() : e === "pt" ? en() : e === "ch" ? rn() : e === "de" ? nn() : e === "es" ? tn() : e === "fr" ? on() : e === "it" ? sn() : e === "jp" ? un() : e === "pl" ? an() : e === "ru" ? _n() : e === "uk" ? ln() : cn()
  },
  gn = () => "Sensitive image",
  pn = () => "Imagem sensível",
  fn = () => "敏感图片",
  mn = () => "Sensibles Bild",
  vn = () => "Imagen sensible",
  hn = () => "Image sensible",
  bn = () => "Immagine sensibile",
  xn = () => "センシティブな画像",
  kn = () => "Wrażliwy obraz",
  wn = () => "Чувствительное изображение",
  zn = () => "Чутливе зображення",
  yn = () => "Hình ảnh nhạy cảm",
  jn = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? gn() : e === "pt" ? pn() : e === "ch" ? fn() : e === "de" ? mn() : e === "es" ? vn() : e === "fr" ? hn() : e === "it" ? bn() : e === "jp" ? xn() : e === "pl" ? kn() : e === "ru" ? wn() : e === "uk" ? zn() : yn()
  },
  Cn = () => "Allowed",
  $n = () => "Permitido",
  Dn = () => "允许",
  Pn = () => "Erlaubt",
  Sn = () => "Permitido",
  Gn = () => "Autorisé",
  Un = () => "Consentito",
  qn = () => "許可",
  Ln = () => "Dozwolone",
  Nn = () => "Разрешено",
  An = () => "Дозволено",
  In = () => "Được phép",
  be = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Cn() : e === "pt" ? $n() : e === "ch" ? Dn() : e === "de" ? Pn() : e === "es" ? Sn() : e === "fr" ? Gn() : e === "it" ? Un() : e === "jp" ? qn() : e === "pl" ? Ln() : e === "ru" ? Nn() : e === "uk" ? An() : In()
  },
  Rn = () => "Artwork removal",
  Tn = () => "Remoção de arte",
  Mn = () => "作品移除",
  Bn = () => "Entfernung des Kunstwerks",
  En = () => "Eliminación de obras",
  Kn = () => "Suppression de l'œuvre",
  Hn = () => "Rimozione dell'opera",
  Zn = () => "作品の削除",
  Vn = () => "Usunięcie grafiki",
  On = () => "Удаление рисунка",
  Fn = () => "Видалення малюнків",
  Jn = () => "Gỡ bỏ tác phẩm",
  Wn = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Rn() : e === "pt" ? Tn() : e === "ch" ? Mn() : e === "de" ? Bn() : e === "es" ? En() : e === "fr" ? Kn() : e === "it" ? Hn() : e === "jp" ? Zn() : e === "pl" ? Vn() : e === "ru" ? On() : e === "uk" ? Fn() : Jn()
  },
  Xn = () => "Community cleanup",
  Qn = () => "Limpeza pela comunidade",
  Yn = () => "社区清理",
  et = () => "Community-Bereinigung",
  rt = () => "Limpieza comunitaria",
  nt = () => "Nettoyage communautaire",
  tt = () => "Pulizia della community",
  it = () => "コミュニティによる清掃",
  ot = () => "Sprzątanie przez społeczność",
  st = () => "Очистка сообществом",
  ut = () => "Очищення спільнотою",
  at = () => "Cộng đồng dọn dẹp",
  _t = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Xn() : e === "pt" ? Qn() : e === "ch" ? Yn() : e === "de" ? et() : e === "es" ? rt() : e === "fr" ? nt() : e === "it" ? tt() : e === "jp" ? it() : e === "pl" ? ot() : e === "ru" ? st() : e === "uk" ? ut() : at()
  },
  lt = () => "Permanent Ban",
  ct = () => "Banimento Permanente",
  dt = () => "永久封禁",
  gt = () => "Permanenter Bann",
  pt = () => "Ban Permanente",
  ft = () => "Bannissement permanent",
  mt = () => "Ban permanente",
  vt = () => "永久BAN",
  ht = () => "Permanentny ban",
  bt = () => "Перманентный бан",
  xt = () => "Перманентний бан",
  kt = () => "Cấm vĩnh viễn",
  wt = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? lt() : e === "pt" ? ct() : e === "ch" ? dt() : e === "de" ? gt() : e === "es" ? pt() : e === "fr" ? ft() : e === "it" ? mt() : e === "jp" ? vt() : e === "pl" ? ht() : e === "ru" ? bt() : e === "uk" ? xt() : kt()
  },
  zt = () => "Timeout",
  yt = () => "Suspensão",
  jt = () => "禁言",
  Ct = () => "Sperre",
  $t = () => "Suspensión",
  Dt = () => "Suspension",
  Pt = () => "Sospensione",
  St = () => "一時停止",
  Gt = () => "Zawieszenie",
  Ut = () => "Тайм-аут",
  qt = () => "Тайм-аут",
  Lt = () => "Tạm khóa",
  Nt = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? zt() : e === "pt" ? yt() : e === "ch" ? jt() : e === "de" ? Ct() : e === "es" ? $t() : e === "fr" ? Dt() : e === "it" ? Pt() : e === "jp" ? St() : e === "pl" ? Gt() : e === "ru" ? Ut() : e === "uk" ? qt() : Lt()
  },
  At = () => "Timeout risk",
  It = () => "Risco de suspensão",
  Rt = () => "禁言风险",
  Tt = () => "Sperrrisiko",
  Mt = () => "Riesgo de suspensión",
  Bt = () => "Risque de suspension",
  Et = () => "Rischio sospensione",
  Kt = () => "一時停止のリスク",
  Ht = () => "Ryzyko zawieszenia",
  Zt = () => "Риск тайм-аута",
  Vt = () => "Ризик тайм-ауту",
  Ot = () => "Nguy cơ tạm khóa",
  Ft = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? At() : e === "pt" ? It() : e === "ch" ? Rt() : e === "de" ? Tt() : e === "es" ? Mt() : e === "fr" ? Bt() : e === "it" ? Et() : e === "jp" ? Kt() : e === "pl" ? Ht() : e === "ru" ? Zt() : e === "uk" ? Vt() : Ot()
  },
  Jt = () => "Drawing a new artwork over a flag",
  Wt = () => "Desenhar uma nova arte por cima de uma bandeira",
  Xt = () => "在旗帜上绘制新作品",
  Qt = () => "Ein neues Kunstwerk über eine Flagge zeichnen",
  Yt = () => "Dibujar una nueva obra sobre una bandera",
  ei = () => "Dessiner une nouvelle œuvre par-dessus un drapeau",
  ri = () => "Disegnare una nuova opera sopra una bandiera",
  ni = () => "旗の上に新しい作品を描く",
  ti = () => "Rysowanie nowej grafiki na fladze",
  ii = () => "Рисование нового рисунка поверх флага",
  oi = () => "Створення нового малюнка поверх прапора",
  si = () => "Vẽ tác phẩm mới đè lên cờ",
  ui = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Jt() : e === "pt" ? Wt() : e === "ch" ? Xt() : e === "de" ? Qt() : e === "es" ? Yt() : e === "fr" ? ei() : e === "it" ? ri() : e === "jp" ? ni() : e === "pl" ? ti() : e === "ru" ? ii() : e === "uk" ? oi() : si()
  },
  ai = () => "Drawing over another drawing",
  _i = () => "Desenhar por cima de outro desenho",
  li = () => "在另一幅画作上绘画",
  ci = () => "Eine Zeichnung über eine andere zeichnen",
  di = () => "Dibujar sobre otro dibujo",
  gi = () => "Dessiner par-dessus un autre dessin",
  pi = () => "Disegnare sopra un altro disegno",
  fi = () => "別の描画の上に描く",
  mi = () => "Zamalowywanie jednego rysunku innym",
  vi = () => "Рисование поверх другого рисунка",
  hi = () => "Малювання поверх іншого малюнка",
  bi = () => "Vẽ đè lên bức vẽ khác",
  xi = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ai() : e === "pt" ? _i() : e === "ch" ? li() : e === "de" ? ci() : e === "es" ? di() : e === "fr" ? gi() : e === "it" ? pi() : e === "jp" ? fi() : e === "pl" ? mi() : e === "ru" ? vi() : e === "uk" ? hi() : bi()
  },
  ki = () => "Drawing over existing artwork with no creative intent",
  wi = () => "Desenhar por cima de artes existentes sem intenção criativa",
  zi = () => "毫无创意目的地覆盖现有作品",
  yi = () => "Übermalen bestehender Kunstwerke ohne kreative Absicht",
  ji = () => "Dibujar sobre obras existentes sin intención creativa",
  Ci = () => "Peindre par-dessus une œuvre existante sans intention créative",
  $i = () => "Disegnare sopra opere esistenti senza intento creativo",
  Di = () => "創造的な意図なく既存の作品の上に描く",
  Pi = () => "Zamalowywanie istniejącej grafiki bez intencji twórczej",
  Si = () => "Рисование поверх существующего рисунка без творческого намерения",
  Gi = () => "Малювання поверх існуючого малюнка без творчого наміру",
  Ui = () => "Tô đè lên tác phẩm hiện có mà không có ý sáng tạo",
  qi = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ki() : e === "pt" ? wi() : e === "ch" ? zi() : e === "de" ? yi() : e === "es" ? ji() : e === "fr" ? Ci() : e === "it" ? $i() : e === "jp" ? Di() : e === "pl" ? Pi() : e === "ru" ? Si() : e === "uk" ? Gi() : Ui()
  },
  Li = () => "Drawing over a repeated pattern",
  Ni = () => "Desenhar por cima de um padrão repetitivo",
  Ai = () => "在重复图案上绘画",
  Ii = () => "Über ein wiederholendes Muster zeichnen",
  Ri = () => "Dibujar sobre un patrón repetido",
  Ti = () => "Dessiner par-dessus un motif répétitif",
  Mi = () => "Disegnare sopra un pattern ripetuto",
  Bi = () => "繰り返しパターンの上に描く",
  Ei = () => "Zamalowywanie powtarzalnego wzoru",
  Ki = () => "Рисование поверх повторяющегося узора",
  Hi = () => "Малювання поверх повторюваного візерунка",
  Zi = () => "Vẽ đè lên mẫu lặp lại",
  Vi = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Li() : e === "pt" ? Ni() : e === "ch" ? Ai() : e === "de" ? Ii() : e === "es" ? Ri() : e === "fr" ? Ti() : e === "it" ? Mi() : e === "jp" ? Bi() : e === "pl" ? Ei() : e === "ru" ? Ki() : e === "uk" ? Hi() : Zi()
  },
  Oi = () => "Drawing a flag over other artworks",
  Fi = () => "Desenhar uma bandeira por cima de outras artes",
  Ji = () => "在其他作品上绘制旗帜",
  Wi = () => "Eine Flagge über andere Kunstwerke zeichnen",
  Xi = () => "Dibujar una bandera sobre las obras de otros",
  Qi = () => "Dessiner un drapeau par-dessus d'autres œuvres",
  Yi = () => "Disegnare una bandiera sopra altre opere",
  eo = () => "他の作品の上に旗を描く",
  ro = () => "Rysowanie flagi na cudzych grafikach",
  no = () => "Рисование флага поверх чужих рисунков",
  to = () => "Малювання прапора поверх чужих малюнків",
  io = () => "Vẽ cờ đè lên tác phẩm của người khác",
  oo = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Oi() : e === "pt" ? Fi() : e === "ch" ? Ji() : e === "de" ? Wi() : e === "es" ? Xi() : e === "fr" ? Qi() : e === "it" ? Yi() : e === "jp" ? eo() : e === "pl" ? ro() : e === "ru" ? no() : e === "uk" ? to() : io()
  },
  so = () => "Highly Suggestive Content",
  uo = () => "Conteúdo Altamente Sugestivo",
  ao = () => "高度暗示性内容",
  _o = () => "Stark anzügliche Inhalte",
  lo = () => "Contenido Altamente Sugerente",
  co = () => "Contenu hautement suggestif",
  go = () => "Contenuto fortemente allusivo",
  po = () => "非常に性的示唆の強いコンテンツ",
  fo = () => "Mocno sugestywne treści",
  mo = () => "Крайне откровенный контент",
  vo = () => "Дуже відвертий контент",
  ho = () => "Nội dung khiêu gợi mạnh",
  bo = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? so() : e === "pt" ? uo() : e === "ch" ? ao() : e === "de" ? _o() : e === "es" ? lo() : e === "fr" ? co() : e === "it" ? go() : e === "jp" ? po() : e === "pl" ? fo() : e === "ru" ? mo() : e === "uk" ? vo() : ho()
  },
  xo = () => "Mild Gore Content",
  ko = () => "Conteúdo de Gore Leve",
  wo = () => "轻度血腥内容",
  zo = () => "Leichte Gore-Inhalte",
  yo = () => "Contenido de Gore Leve",
  jo = () => "Contenu gore modéré",
  Co = () => "Contenuto gore lieve",
  $o = () => "軽度のグロテスクコンテンツ",
  Do = () => "Łagodne treści gore",
  Po = () => "Умеренно жестокий контент",
  So = () => "Помірно жорстокий контент",
  Go = () => "Nội dung bạo lực nhẹ",
  Uo = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? xo() : e === "pt" ? ko() : e === "ch" ? wo() : e === "de" ? zo() : e === "es" ? yo() : e === "fr" ? jo() : e === "it" ? Co() : e === "jp" ? $o() : e === "pl" ? Do() : e === "ru" ? Po() : e === "uk" ? So() : Go()
  },
  qo = () => "Non-explicit suggestive content",
  Lo = () => "Conteúdo sugestivo não explícito",
  No = () => "非露骨暗示性内容",
  Ao = () => "Nicht-explizite anzügliche Inhalte",
  Io = () => "Contenido sugerente no explícito",
  Ro = () => "Contenu suggestif non explicite",
  To = () => "Contenuto allusivo non esplicito",
  Mo = () => "露骨でない性的示唆のあるコンテンツ",
  Bo = () => "Niejednoznaczne treści sugestywne",
  Eo = () => "Неоткровенный пикантный контент",
  Ko = () => "Невідвертий контент з підтекстом",
  Ho = () => "Nội dung khiêu gợi không rõ ràng",
  we = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? qo() : e === "pt" ? Lo() : e === "ch" ? No() : e === "de" ? Ao() : e === "es" ? Io() : e === "fr" ? Ro() : e === "it" ? To() : e === "jp" ? Mo() : e === "pl" ? Bo() : e === "ru" ? Eo() : e === "uk" ? Ko() : Ho()
  },
  Zo = () => "Drawing repeated pattern over other artworks",
  Vo = () => "Desenhar padrão repetitivo por cima de outras artes",
  Oo = () => "在其他作品上绘制重复图案",
  Fo = () => "Wiederholendes Muster über andere Kunstwerke zeichnen",
  Jo = () => "Dibujar un patrón repetido sobre las obras de otros",
  Wo = () => "Dessiner un motif répétitif par-dessus d'autres œuvres",
  Xo = () => "Disegnare un pattern ripetuto sopra altre opere",
  Qo = () => "他の作品の上に繰り返しパターンを描く",
  Yo = () => "Rysowanie powtarzalnego wzoru na cudzych grafikach",
  es = () => "Рисование повторяющегося узора поверх чужих рисунков",
  rs = () => "Малювання повторюваного візерунка поверх чужих малюнків",
  ns = () => "Vẽ mẫu lặp lại đè lên tác phẩm của người khác",
  ts = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Zo() : e === "pt" ? Vo() : e === "ch" ? Oo() : e === "de" ? Fo() : e === "es" ? Jo() : e === "fr" ? Wo() : e === "it" ? Xo() : e === "jp" ? Qo() : e === "pl" ? Yo() : e === "ru" ? es() : e === "uk" ? rs() : ns()
  },
  is = () => "Using transparent pixels over repetitive flags",
  os = () => "Usar pixels transparentes sobre bandeiras repetitivas",
  ss = () => "使用透明像素覆盖重复的旗帜",
  us = () => "Transparente Pixel über sich wiederholende Flaggen verwenden",
  as = () => "Usar píxeles transparentes sobre banderas repetitivas",
  _s = () => "Utilisation de pixels transparents sur les drapeaux répétitifs",
  ls = () => "Usare pixel trasparenti sopra bandiere ripetitive",
  cs = () => "繰り返される旗の上に透明ピクセルを使用",
  ds = () => "Używanie przezroczystych pikseli na powtarzalnych flagach",
  gs = () => "Использование прозрачных пикселей поверх повторяющихся флагов",
  ps = () => "Використання прозорих пікселів поверх повторюваних прапорів",
  fs = () => "Sử dụng pixel trong suốt đè lên cờ lặp lại",
  ms = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? is() : e === "pt" ? os() : e === "ch" ? ss() : e === "de" ? us() : e === "es" ? as() : e === "fr" ? _s() : e === "it" ? ls() : e === "jp" ? cs() : e === "pl" ? ds() : e === "ru" ? gs() : e === "uk" ? ps() : fs()
  },
  vs = () => "Using transparent pixels to remove inappropriate content",
  hs = () => "Usar pixels transparentes para remover conteúdo inapropriado",
  bs = () => "使用透明像素移除不当内容",
  xs = () => "Transparente Pixel zum Entfernen unangemessener Inhalte verwenden",
  ks = () => "Usar píxeles transparentes para eliminar contenido inapropiado",
  ws = () => "Utilisation de pixels transparents pour supprimer le contenu inapproprié",
  zs = () => "Usare pixel trasparenti per rimuovere contenuti inappropriati",
  ys = () => "透明ピクセルを使って不適切なコンテンツを除去",
  js = () => "Używanie przezroczystych pikseli do usuwania nieodpowiednich treści",
  Cs = () => "Использование прозрачных пикселей для удаления неприемлемого контента",
  $s = () => "Використання прозорих пікселів для видалення неприйнятного контенту",
  Ds = () => "Sử dụng pixel trong suốt để xóa nội dung không phù hợp",
  Ps = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? vs() : e === "pt" ? hs() : e === "ch" ? bs() : e === "de" ? xs() : e === "es" ? ks() : e === "fr" ? ws() : e === "it" ? zs() : e === "jp" ? ys() : e === "pl" ? js() : e === "ru" ? Cs() : e === "uk" ? $s() : Ds()
  },
  Ss = () => "Using transparent pixels to remove repetitive patterns",
  Gs = () => "Usar pixels transparentes para remover padrões repetitivos",
  Us = () => "使用透明像素移除重复图案",
  qs = () => "Transparente Pixel zum Entfernen sich wiederholender Muster verwenden",
  Ls = () => "Usar píxeles transparentes para eliminar patrones repetitivos",
  Ns = () => "Utilisation de pixels transparents pour supprimer les motifs répétitifs",
  As = () => "Usare pixel trasparenti per rimuovere pattern ripetitivi",
  Is = () => "透明ピクセルを使って繰り返しパターンを除去",
  Rs = () => "Używanie przezroczystych pikseli do usuwania powtarzalnych wzorów",
  Ts = () => "Использование прозрачных пикселей для удаления повторяющихся узоров",
  Ms = () => "Використання прозорих пікселів для видалення повторюваних візерунків",
  Bs = () => "Sử dụng pixel trong suốt để xóa mẫu lặp lại",
  Es = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ss() : e === "pt" ? Gs() : e === "ch" ? Us() : e === "de" ? qs() : e === "es" ? Ls() : e === "fr" ? Ns() : e === "it" ? As() : e === "jp" ? Is() : e === "pl" ? Rs() : e === "ru" ? Ts() : e === "uk" ? Ms() : Bs()
  },
  Ks = () => "Scribbling over other people's artwork",
  Hs = () => "Rabiscar por cima da arte de outras pessoas",
  Zs = () => "在他人作品上乱涂乱画",
  Vs = () => "Kritzeln über Kunstwerke anderer",
  Os = () => "Garabatear sobre las obras de otros",
  Fs = () => "Gribouiller sur les œuvres des autres",
  Js = () => "Scarabocchiare sopra le opere degli altri",
  Ws = () => "他人の作品への落書き",
  Xs = () => "Bazgranie po cudzych grafikach",
  Qs = () => "Черкание поверх чужих рисунков",
  Ys = () => "Замальовування чужих малюнків",
  eu = () => "Vẽ bậy lên tác phẩm của người khác",
  ru = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ks() : e === "pt" ? Hs() : e === "ch" ? Zs() : e === "de" ? Vs() : e === "es" ? Os() : e === "fr" ? Fs() : e === "it" ? Js() : e === "jp" ? Ws() : e === "pl" ? Xs() : e === "ru" ? Qs() : e === "uk" ? Ys() : eu()
  },
  nu = () => "Suggestive fetishist Content",
  tu = () => "Conteúdo sugestivo fetichista",
  iu = () => "暗示性恋物内容",
  ou = () => "Anzügliche fetischistische Inhalte",
  su = () => "Contenido sugerente fetichista",
  uu = () => "Contenu suggestif fétichiste",
  au = () => "Contenuto allusivo feticista",
  _u = () => "性的示唆のあるフェティッシュコンテンツ",
  lu = () => "Sugestywne treści fetyszystyczne",
  cu = () => "Откровенный фетишистский контент",
  du = () => "Відвертий фетишистський контент",
  gu = () => "Nội dung khiêu gợi theo hướng tôn sùng",
  pu = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? nu() : e === "pt" ? tu() : e === "ch" ? iu() : e === "de" ? ou() : e === "es" ? su() : e === "fr" ? uu() : e === "it" ? au() : e === "jp" ? _u() : e === "pl" ? lu() : e === "ru" ? cu() : e === "uk" ? du() : gu()
  },
  fu = () => "Clear griefing",
  mu = () => "Griefing evidente",
  vu = () => "明确的恶意破坏",
  hu = () => "Eindeutiges Griefing",
  bu = () => "Griefing evidente",
  xu = () => "Griefing manifeste",
  ku = () => "Griefing evidente",
  wu = () => "明確なグリーフィング",
  zu = () => "Oczywisty griefing",
  yu = () => "Явное гриферство",
  ju = () => "Явний грифінг",
  Cu = () => "Griefing rõ ràng",
  $u = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? fu() : e === "pt" ? mu() : e === "ch" ? vu() : e === "de" ? hu() : e === "es" ? bu() : e === "fr" ? xu() : e === "it" ? ku() : e === "jp" ? wu() : e === "pl" ? zu() : e === "ru" ? yu() : e === "uk" ? ju() : Cu()
  },
  Du = () => "Cases of clear griefing (such as scribbling over someone's artwork with no creative intent, or deliberately disrupting it by placing random pixels) are <strong>subject to moderation intervention</strong>.",
  Pu = () => "Casos de griefing evidente (como rabiscar por cima da arte de alguém sem intenção criativa, ou interrompê-la deliberadamente colocando pixels aleatórios) estão <strong>sujeitos a intervenção da moderação</strong>.",
  Su = () => "明确的恶意破坏行为（例如毫无创意目的地在他人作品上乱涂，或故意放置随机像素进行破坏）将<strong>受到管理介入</strong>。",
  Gu = () => "Fälle von eindeutigem Griefing (wie z. B. Kritzeln über Kunstwerke anderer ohne kreative Absicht oder das absichtliche Stören durch Platzieren zufälliger Pixel) <strong>unterliegen moderativen Maßnahmen</strong>.",
  Uu = () => "Los casos de griefing evidente (como garabatear sobre la obra de alguien sin intención creativa, o alterarla deliberadamente colocando píxeles aleatorios) están <strong>sujetos a intervención de moderación</strong>.",
  qu = () => "Les cas de griefing manifeste (comme gribouiller sur l'œuvre de quelqu'un sans intention créative, ou la perturber délibérément en plaçant des pixels aléatoires) sont <strong>soumis à une intervention de la modération</strong>.",
  Lu = () => "I casi di griefing evidente (come scarabocchiare sopra l'opera di qualcuno senza intento creativo, o disturbarla deliberatamente piazzando pixel casuali) sono <strong>soggetti a intervento della moderazione</strong>.",
  Nu = () => "明確なグリーフィング（他人の作品に創造的な意図なく落書きする、ランダムなピクセルを置いて意図的に妨害するなど）は、<strong>モデレーションの介入対象</strong>となります。",
  Au = () => "Przypadki oczywistego griefingu (takie jak bazgranie po cudzej grafice bez intencji twórczej lub celowe zakłócanie jej losowymi pikselami) <strong>podlegają interwencji moderacji</strong>.",
  Iu = () => "Случаи явного гриферства (например, черкание поверх чьего-то рисунка без творческого намерения или намеренное его разрушение случайными пикселями) <strong>подлежат модераторскому вмешательству</strong>.",
  Ru = () => "Випадки явного грифінгу (такі як замальовування чужого малюнка без творчого наміру або навмисне порушення за допомогою випадкових пікселів) <strong>підлягають модераторському втручанню</strong>.",
  Tu = () => "Các trường hợp griefing rõ ràng (như vẽ bậy lên tác phẩm của người khác mà không có ý sáng tạo, hoặc cố tình phá hoại bằng cách đặt pixel ngẫu nhiên) <strong>sẽ bị can thiệp kiểm duyệt</strong>.",
  Mu = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Du() : e === "pt" ? Pu() : e === "ch" ? Su() : e === "de" ? Gu() : e === "es" ? Uu() : e === "fr" ? qu() : e === "it" ? Lu() : e === "jp" ? Nu() : e === "pl" ? Au() : e === "ru" ? Iu() : e === "uk" ? Ru() : Tu()
  },
  Bu = () => "Gray area",
  Eu = () => "Área cinzenta",
  Ku = () => "灰色地带",
  Hu = () => "Grauzone",
  Zu = () => "Zona gris",
  Vu = () => "Zone grise",
  Ou = () => "Zona grigia",
  Fu = () => "グレーゾーン",
  Ju = () => "Szara strefa",
  Wu = () => "Серая зона",
  Xu = () => "Сіра зона",
  Qu = () => "Vùng xám",
  Yu = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Bu() : e === "pt" ? Eu() : e === "ch" ? Ku() : e === "de" ? Hu() : e === "es" ? Zu() : e === "fr" ? Vu() : e === "it" ? Ou() : e === "jp" ? Fu() : e === "pl" ? Ju() : e === "ru" ? Wu() : e === "uk" ? Xu() : Qu()
  },
  ea = () => "Actions that alter or disrupt artwork but may have <strong>multiple valid interpretations</strong>, such as territorial expansion, cleanup, or style changes. <strong>These are not automatically griefing</strong>. However, if the behavior becomes excessive, targeted, or clearly disruptive over time, moderators may intervene.",
  ra = () => "Ações que alteram ou perturbam artes, mas que podem ter <strong>múltiplas interpretações válidas</strong>, como expansão territorial, limpeza ou mudanças de estilo. <strong>Isso não é automaticamente griefing</strong>. No entanto, se o comportamento se tornar excessivo, direcionado ou claramente prejudicial ao longo do tempo, os moderadores poderão intervir.",
  na = () => "改变或干扰作品但可能具有<strong>多种合理解读</strong>的行为，例如领地扩张、清理或风格变更。<strong>这些不会自动被视为恶意破坏</strong>。但如果行为变得过度、有针对性或随着时间推移明显具有破坏性，管理员可能会介入。",
  ta = () => "Aktionen, die Kunstwerke verändern oder stören, aber <strong>mehrere gültige Interpretationen</strong> haben können, wie z. B. Gebietserweiterung, Bereinigung oder Stiländerungen. <strong>Dies ist nicht automatisch Griefing</strong>. Wenn das Verhalten jedoch übermäßig, gezielt oder im Laufe der Zeit eindeutig störend wird, können Moderatoren eingreifen.",
  ia = () => "Acciones que alteran o interrumpen obras pero pueden tener <strong>múltiples interpretaciones válidas</strong>, como expansión territorial, limpieza o cambios de estilo. <strong>Esto no es automáticamente griefing</strong>. Sin embargo, si el comportamiento se vuelve excesivo, dirigido o claramente disruptivo con el tiempo, los moderadores pueden intervenir.",
  oa = () => "Actions qui modifient ou perturbent une œuvre mais peuvent avoir <strong>plusieurs interprétations valides</strong>, comme l'expansion territoriale, le nettoyage ou les changements de style. <strong>Ce n'est pas automatiquement du griefing</strong>. Cependant, si le comportement devient excessif, ciblé ou clairement perturbateur au fil du temps, les modérateurs peuvent intervenir.",
  sa = () => "Azioni che alterano o disturbano un'opera ma possono avere <strong>molteplici interpretazioni valide</strong>, come espansione territoriale, pulizia o cambiamenti di stile. <strong>Queste non sono automaticamente griefing</strong>. Tuttavia, se il comportamento diventa eccessivo, mirato o chiaramente disturbante nel tempo, i moderatori possono intervenire.",
  ua = () => "作品を変更・妨害するが、領土拡大、清掃、スタイル変更など<strong>複数の正当な解釈が可能な</strong>行為。<strong>これらは自動的にグリーフィングとはみなされません</strong>。ただし、行為が過剰になったり、特定の相手を標的にしたり、時間をかけて明らかに妨害的であったりする場合は、モデレーターが介入することがあります。",
  aa = () => "Działania, które zmieniają lub zakłócają grafikę, ale mogą mieć <strong>wiele uzasadnionych interpretacji</strong>, takie jak ekspansja terytorialna, sprzątanie lub zmiana stylu. <strong>Nie są one automatycznie uznawane za griefing</strong>. Jednakże, jeśli zachowanie staje się nadmierne, celowe lub wyraźnie destrukcyjne z czasem, moderatorzy mogą interweniować.",
  _a = () => "Действия, которые изменяют или нарушают рисунок, но могут иметь <strong>несколько допустимых интерпретаций</strong>, такие как территориальное расширение, очистка или смена стиля. <strong>Это автоматически не является гриферством</strong>. Однако если поведение становится чрезмерным, целенаправленным или явно деструктивным со временем, модераторы могут вмешаться.",
  la = () => "Дії, які змінюють або порушують малюнки, але можуть мати <strong>кілька правомірних тлумачень</strong>, такі як розширення території, очищення або зміна стилю. <strong>Це не є автоматичним грифінгом</strong>. Однак, якщо поведінка стає надмірною, цілеспрямованою або явно деструктивною з часом, модератори можуть втрутитися.",
  ca = () => "Các hành động thay đổi hoặc phá vỡ tác phẩm nhưng có thể có <strong>nhiều cách hiểu hợp lý</strong>, chẳng hạn như mở rộng lãnh thổ, dọn dẹp hoặc thay đổi phong cách. <strong>Những hành động này không tự động được coi là griefing</strong>. Tuy nhiên, nếu hành vi trở nên quá mức, nhắm vào mục tiêu cụ thể hoặc rõ ràng gây phá hoại theo thời gian, quản trị viên có thể can thiệp.",
  da = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ea() : e === "pt" ? ra() : e === "ch" ? na() : e === "de" ? ta() : e === "es" ? ia() : e === "fr" ? oa() : e === "it" ? sa() : e === "jp" ? ua() : e === "pl" ? aa() : e === "ru" ? _a() : e === "uk" ? la() : ca()
  },
  ga = () => "Griefing means taking actions on the map <strong>solely to harass or frustrate</strong> other players, with no creative, strategic, or corrective purpose.",
  pa = () => "Griefing significa realizar ações no mapa <strong>unicamente para assediar ou frustrar</strong> outros jogadores, sem nenhum propósito criativo, estratégico ou corretivo.",
  fa = () => "恶意破坏指在地图上<strong>仅以骚扰或激怒</strong>其他玩家为目的的行为，不具有任何创意、战略或纠正目的。",
  ma = () => "Griefing bedeutet, auf der Karte Aktionen durchzuführen, die <strong>ausschließlich dazu dienen, andere Spieler zu belästigen oder zu frustrieren</strong>, ohne kreativen, strategischen oder korrektiven Zweck.",
  va = () => "Griefing significa realizar acciones en el mapa <strong>únicamente para acosar o frustrar</strong> a otros jugadores, sin ningún propósito creativo, estratégico o correctivo.",
  ha = () => "Le griefing consiste à effectuer des actions sur la carte <strong>dans le seul but de harceler ou de frustrer</strong> d'autres joueurs, sans aucun objectif créatif, stratégique ou correctif.",
  ba = () => "Griefing significa compiere azioni sulla mappa <strong>al solo scopo di molestare o frustrare</strong> gli altri giocatori, senza alcun intento creativo, strategico o correttivo.",
  xa = () => "グリーフィングとは、創造的、戦略的、または修正的な目的を持たず、<strong>他のプレイヤーを嫌がらせたり苛立たせたりすることだけを目的として</strong>マップ上で行う行為を指します。",
  ka = () => "Griefing oznacza podejmowanie działań na mapie <strong>wyłącznie w celu nękania lub frustrowania</strong> innych graczy, bez żadnego twórczego, strategicznego ani korekcyjnego celu.",
  wa = () => "Гриферство — это действия на карте, совершаемые <strong>исключительно с целью досадить или разозлить</strong> других игроков, без какого-либо творческого, стратегического или корректирующего намерения.",
  za = () => "Грифінг означає дії на карті, <strong>спрямовані виключно на те, щоб дратувати чи засмучувати</strong> інших гравців, без жодного творчого, стратегічного чи коригувального наміру.",
  ya = () => "Griefing có nghĩa là thực hiện các hành động trên bản đồ <strong>chỉ nhằm quấy rối hoặc gây bực bội</strong> cho người chơi khác, không có mục đích sáng tạo, chiến lược hay chỉnh sửa.",
  ja = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ga() : e === "pt" ? pa() : e === "ch" ? fa() : e === "de" ? ma() : e === "es" ? va() : e === "fr" ? ha() : e === "it" ? ba() : e === "jp" ? xa() : e === "pl" ? ka() : e === "ru" ? wa() : e === "uk" ? za() : ya()
  },
  Ca = () => "Using transparent pixels to remove spam, repetitive patterns, inappropriate or suggestive content is allowed.",
  $a = () => "Usar pixels transparentes para remover spam, padrões repetitivos, conteúdo inapropriado ou sugestivo é permitido.",
  Da = () => "使用透明像素移除垃圾内容、重复图案、不当或暗示性内容是被允许的。",
  Pa = () => "Die Verwendung von transparenten Pixeln zum Entfernen von Spam, sich wiederholenden Mustern, unangemessenen oder anzüglichen Inhalten ist erlaubt.",
  Sa = () => "Usar píxeles transparentes para eliminar spam, patrones repetitivos, contenido inapropiado o sugerente está permitido.",
  Ga = () => "L'utilisation de pixels transparents pour supprimer le spam, les motifs répétitifs, le contenu inapproprié ou suggestif est autorisée.",
  Ua = () => "Utilizzare pixel trasparenti per rimuovere spam, pattern ripetitivi, contenuti inappropriati o allusivi è consentito.",
  qa = () => "透明ピクセルを使って、スパム、繰り返しパターン、不適切または性的示唆の強いコンテンツを除去することは許可されています。",
  La = () => "Używanie przezroczystych pikseli do usuwania spamu, powtarzalnych wzorów, nieodpowiednich lub sugestywnych treści jest dozwolone.",
  Na = () => "Использование прозрачных пикселей для удаления спама, повторяющихся узоров, неприемлемого или откровенного контента разрешено.",
  Aa = () => "Використання прозорих пікселів для видалення спаму, повторюваних візерунків, неприйнятного або відвертого контенту дозволено.",
  Ia = () => "Sử dụng pixel trong suốt để xóa spam, mẫu lặp lại, nội dung không phù hợp hoặc khiêu gợi là được phép.",
  Ra = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ca() : e === "pt" ? $a() : e === "ch" ? Da() : e === "de" ? Pa() : e === "es" ? Sa() : e === "fr" ? Ga() : e === "it" ? Ua() : e === "jp" ? qa() : e === "pl" ? La() : e === "ru" ? Na() : e === "uk" ? Aa() : Ia()
  },
  Ta = () => "Map Cleanup",
  Ma = () => "Limpeza do Mapa",
  Ba = () => "地图清理",
  Ea = () => "Kartenbereinigung",
  Ka = () => "Limpieza del Mapa",
  Ha = () => "Nettoyage de la carte",
  Za = () => "Pulizia della mappa",
  Va = () => "マップの清掃",
  Oa = () => "Sprzątanie mapy",
  Fa = () => "Очистка карты",
  Ja = () => "Очищення карти",
  Wa = () => "Dọn dẹp bản đồ",
  Xa = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ta() : e === "pt" ? Ma() : e === "ch" ? Ba() : e === "de" ? Ea() : e === "es" ? Ka() : e === "fr" ? Ha() : e === "it" ? Za() : e === "jp" ? Va() : e === "pl" ? Oa() : e === "ru" ? Fa() : e === "uk" ? Ja() : Wa()
  },
  Qa = () => "<strong>One account per person.</strong> Using bots, scripts, browser automation, or any exploit to gain an unfair advantage is strictly prohibited.",
  Ya = () => "<strong>Uma conta por pessoa.</strong> Usar bots, scripts, automação de navegador ou qualquer exploit para obter vantagem injusta é estritamente proibido.",
  e_ = () => "<strong>每人只能使用一个账号。</strong>使用机器人、脚本、浏览器自动化或任何漏洞获取不公平优势的行为严格禁止。",
  r_ = () => "<strong>Ein Konto pro Person.</strong> Die Verwendung von Bots, Skripten, Browser-Automatisierung oder sonstigen Exploits, um einen unfairen Vorteil zu erlangen, ist strengstens verboten.",
  n_ = () => "<strong>Una cuenta por persona.</strong> Usar bots, scripts, automatización de navegador o cualquier exploit para obtener una ventaja injusta está estrictamente prohibido.",
  t_ = () => "<strong>Un seul compte par personne.</strong> L'utilisation de bots, de scripts, d'automatisation de navigateur ou de toute exploitation de faille pour obtenir un avantage déloyal est strictement interdite.",
  i_ = () => "<strong>Un account per persona.</strong> L'uso di bot, script, automazione del browser o qualsiasi exploit per ottenere un vantaggio sleale è severamente vietato.",
  o_ = () => "<strong>1人につき1アカウント。</strong>ボット、スクリプト、ブラウザ自動化、またはその他のエクスプロイトを使用して不当な優位を得ることは厳しく禁止されています。",
  s_ = () => "<strong>Jedno konto na osobę.</strong> Używanie botów, skryptów, automatyzacji przeglądarki lub jakichkolwiek exploitów w celu uzyskania nieuczciwej przewagi jest surowo zabronione.",
  u_ = () => "<strong>Один аккаунт на человека.</strong> Использование ботов, скриптов, автоматизации браузера или любых эксплойтов для получения нечестного преимущества строго запрещено.",
  a_ = () => "<strong>Один акаунт на людину.</strong> Використання ботів, скриптів, автоматизації браузера або будь-яких експлойтів для отримання нечесної переваги суворо заборонено.",
  __ = () => "<strong>Mỗi người một tài khoản.</strong> Sử dụng bot, script, tự động hóa trình duyệt hoặc bất kỳ lỗi khai thác nào để có lợi thế không công bằng đều bị nghiêm cấm.",
  l_ = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Qa() : e === "pt" ? Ya() : e === "ch" ? e_() : e === "de" ? r_() : e === "es" ? n_() : e === "fr" ? t_() : e === "it" ? i_() : e === "jp" ? o_() : e === "pl" ? s_() : e === "ru" ? u_() : e === "uk" ? a_() : __()
  },
  c_ = () => "Suggestive Content",
  d_ = () => "Conteúdo Sugestivo",
  g_ = () => "暗示性内容",
  p_ = () => "Anzügliche Inhalte",
  f_ = () => "Contenido Sugerente",
  m_ = () => "Contenu suggestif",
  v_ = () => "Contenuto allusivo",
  h_ = () => "性的示唆のあるコンテンツ",
  b_ = () => "Treści sugestywne",
  x_ = () => "Откровенный контент",
  k_ = () => "Відвертий контент",
  w_ = () => "Nội dung khiêu gợi",
  z_ = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? c_() : e === "pt" ? d_() : e === "ch" ? g_() : e === "de" ? p_() : e === "es" ? f_() : e === "fr" ? m_() : e === "it" ? v_() : e === "jp" ? h_() : e === "pl" ? b_() : e === "ru" ? x_() : e === "uk" ? k_() : w_()
  },
  y_ = () => "Drawing in this category <strong>shouldn't lead to suspensions</strong>. However, <strong>the community is free clean up or paint over these artworks</strong>. Includes drawings with sexual undertones that don't cross into explicit territory (no genitalia, sexual acts, or sexual fluids).",
  j_ = () => "Desenhos nesta categoria <strong>não devem levar a suspensões</strong>. No entanto, <strong>a comunidade é livre para limpar ou pintar por cima dessas artes</strong>. Inclui desenhos com conotações sexuais que não chegam a ser explícitos (sem genitália, atos sexuais ou fluidos sexuais).",
  C_ = () => "此类别中的绘画<strong>不应导致暂停</strong>。但是，<strong>社区可以自由清理或覆盖这些作品</strong>。包括具有性暗示但未达到露骨程度的绘画（无生殖器、性行为或性液体）。",
  $_ = () => "Zeichnungen in dieser Kategorie <strong>sollten nicht zu Sperren führen</strong>. Allerdings <strong>ist es der Community erlaubt, diese Kunstwerke zu entfernen oder zu übermalen</strong>. Dazu gehören Zeichnungen mit sexuellen Untertönen, die nicht in explizites Gebiet vordringen (keine Genitalien, sexuelle Handlungen oder sexuelle Flüssigkeiten).",
  D_ = () => "Dibujar en esta categoría <strong>no debería llevar a suspensiones</strong>. Sin embargo, <strong>la comunidad es libre de limpiar o pintar sobre estas obras</strong>. Incluye dibujos con insinuaciones sexuales que no cruzan al territorio explícito (sin genitales, actos sexuales ni fluidos sexuales).",
  P_ = () => "Les dessins de cette catégorie <strong>ne devraient pas entraîner de suspension</strong>. Cependant, <strong>la communauté est libre de nettoyer ou de peindre par-dessus ces œuvres</strong>. Cela inclut les dessins à connotation sexuelle qui ne franchissent pas la limite du contenu explicite (pas d'organes génitaux, d'actes sexuels ni de fluides sexuels).",
  S_ = () => "I disegni in questa categoria <strong>non dovrebbero portare a sospensioni</strong>. Tuttavia, <strong>la community è libera di ripulire o dipingere sopra queste opere</strong>. Include disegni con sottotoni sessuali che non superano il limite dell'esplicito (nessun genitale, atto sessuale o fluido sessuale).",
  G_ = () => "このカテゴリの描画は<strong>停止処分の対象にはなりません</strong>。ただし、<strong>コミュニティはこれらの作品を自由に消去・上書きできます</strong>。露骨な表現（性器、性行為、体液）には至らないが、性的なニュアンスを含む描画が該当します。",
  U_ = () => "Rysunki z tej kategorii <strong>nie powinny prowadzić do zawieszeń</strong>. Jednakże <strong>społeczność może swobodnie usuwać lub zamalowywać te grafiki</strong>. Obejmuje rysunki o podtekście seksualnym, które nie przekraczają granicy treści jednoznacznych (brak genitaliów, aktów seksualnych czy płynów seksualnych).",
  q_ = () => "Рисунки в этой категории <strong>не должны приводить к блокировке</strong>. Однако <strong>сообщество вправе убирать или закрашивать такие рисунки</strong>. Включает рисунки с сексуальным подтекстом, не переходящие в откровенную территорию (без гениталий, половых актов или половых жидкостей).",
  L_ = () => "Малюнки з цієї категорії <strong>не повинні призводити до блокувань</strong>. Однак <strong>спільнота має повне право очистити чи замалювати такі роботи</strong>. Включає малюнки з сексуальним підтекстом, які не переходять у відверту територію (без геніталій, статевих актів чи статевих рідин).",
  N_ = () => "Vẽ trong danh mục này <strong>không nên dẫn đến đình chỉ</strong>. Tuy nhiên, <strong>cộng đồng được tự do dọn dẹp hoặc tô đè lên các tác phẩm này</strong>. Bao gồm các bức vẽ có ẩn ý tình dục nhưng không vượt qua ranh giới khiêu dâm (không có bộ phận sinh dục, hành vi tình dục hay dịch thể tình dục).",
  A_ = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? y_() : e === "pt" ? j_() : e === "ch" ? C_() : e === "de" ? $_() : e === "es" ? D_() : e === "fr" ? P_() : e === "it" ? S_() : e === "jp" ? G_() : e === "pl" ? U_() : e === "ru" ? q_() : e === "uk" ? L_() : N_()
  },
  I_ = () => "Space is limited. Players and communities will compete for territory, and that's not just allowed, it's what keeps the map alive. Claiming, defending, and reclaiming space is core gameplay.",
  R_ = () => "O espaço é limitado. Jogadores e comunidades vão competir por território, e isso não é apenas permitido, é o que mantém o mapa vivo. Conquistar, defender e retomar espaço faz parte da jogabilidade principal.",
  T_ = () => "空间有限。玩家和社区会争夺领地，这不仅被允许，更是让地图保持活力的关键。占领、防守和夺回空间是核心玩法。",
  M_ = () => "Der Platz ist begrenzt. Spieler und Communities werden um Gebiete konkurrieren, und das ist nicht nur erlaubt, es hält die Karte lebendig. Gebiete beanspruchen, verteidigen und zurückerobern ist Teil des Kernspiels.",
  B_ = () => "El espacio es limitado. Los jugadores y comunidades competirán por territorio, y eso no solo está permitido, es lo que mantiene el mapa vivo. Reclamar, defender y reconquistar espacio es parte esencial del juego.",
  E_ = () => "L'espace est limité. Les joueurs et les communautés se disputeront le territoire, et ce n'est pas seulement autorisé, c'est ce qui fait vivre la carte. Revendiquer, défendre et reconquérir l'espace fait partie du gameplay de base.",
  K_ = () => "Lo spazio è limitato. I giocatori e le community competeranno per il territorio, e questo non è solo consentito, è ciò che mantiene viva la mappa. Conquistare, difendere e riconquistare spazio è il gameplay fondamentale.",
  H_ = () => "スペースには限りがあります。プレイヤーやコミュニティは領土をめぐって競い合います。これは許可されているだけでなく、マップを活気づける要素です。スペースの確保、防衛、奪還はゲームの基本です。",
  Z_ = () => "Przestrzeń jest ograniczona. Gracze i społeczności będą rywalizować o terytorium — i to nie tylko jest dozwolone, to właśnie utrzymuje mapę przy życiu. Zajmowanie, obrona i odzyskiwanie przestrzeni to podstawowa rozgrywka.",
  V_ = () => "Пространство ограничено. Игроки и сообщества будут конкурировать за территорию, и это не просто разрешено — это то, что поддерживает карту живой. Захват, оборона и отвоевание территории — основная механика игры.",
  O_ = () => "Простір обмежений. Гравці та спільноти змагатимуться за територію, і це не лише дозволено — це те, що підтримує карту живою. Захоплення, оборона та відвоювання простору є основою геймплею.",
  F_ = () => "Không gian có hạn. Người chơi và cộng đồng sẽ cạnh tranh lãnh thổ, và điều đó không chỉ được phép — nó là thứ giữ cho bản đồ sống động. Chiếm, bảo vệ và giành lại không gian là cách chơi cốt lõi.",
  J_ = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? I_() : e === "pt" ? R_() : e === "ch" ? T_() : e === "de" ? M_() : e === "es" ? B_() : e === "fr" ? E_() : e === "it" ? K_() : e === "jp" ? H_() : e === "pl" ? Z_() : e === "ru" ? V_() : e === "uk" ? O_() : F_()
  },
  W_ = () => "Territorial Disputes",
  X_ = () => "Disputas Territoriais",
  Q_ = () => "领地争夺",
  Y_ = () => "Gebietskonflikte",
  el = () => "Disputas Territoriales",
  rl = () => "Disputes territoriales",
  nl = () => "Dispute territoriali",
  tl = () => "領土紛争",
  il = () => "Spory terytorialne",
  ol = () => "Территориальные споры",
  sl = () => "Територіальні спори",
  ul = () => "Tranh chấp lãnh thổ",
  al = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? W_() : e === "pt" ? X_() : e === "ch" ? Q_() : e === "de" ? Y_() : e === "es" ? el() : e === "fr" ? rl() : e === "it" ? nl() : e === "jp" ? tl() : e === "pl" ? il() : e === "ru" ? ol() : e === "uk" ? sl() : ul()
  },
  _l = () => "Painting over other players' work is a normal part of the game. If your intent isn't to only harass or deliberately frustrate someone, moderators won't intervene.",
  ll = () => "Pintar por cima do trabalho de outros jogadores é uma parte normal do jogo. Se sua intenção não for apenas assediar ou frustrar alguém deliberadamente, os moderadores não irão intervir.",
  cl = () => "覆盖其他玩家的作品是游戏的正常组成部分。如果你的目的不仅仅是骚扰或故意激怒他人，管理员不会介入。",
  dl = () => "Das Übermalen der Arbeit anderer Spieler ist ein normaler Teil des Spiels. Wenn deine Absicht nicht darin besteht, jemanden nur zu belästigen oder absichtlich zu frustrieren, werden Moderatoren nicht eingreifen.",
  gl = () => "Pintar sobre el trabajo de otros jugadores es una parte normal del juego. Si tu intención no es solo acosar o frustrar deliberadamente a alguien, los moderadores no intervendrán.",
  pl = () => "Peindre par-dessus le travail d'autres joueurs fait partie intégrante du jeu. Si votre intention n'est pas uniquement de harceler ou de frustrer délibérément quelqu'un, les modérateurs n'interviendront pas.",
  fl = () => "Dipingere sopra il lavoro di altri giocatori è una parte normale del gioco. Se il tuo intento non è solo quello di molestare o frustrare deliberatamente qualcuno, i moderatori non interverranno.",
  ml = () => "他のプレイヤーの作品の上にペイントすることは、ゲームの通常の一部です。あなたの意図が単に嫌がらせや故意に苛立たせることでなければ、モデレーターは介入しません。",
  vl = () => "Zamalowywanie prac innych graczy jest normalną częścią gry. Jeśli Twoim celem nie jest wyłącznie nękanie lub celowe frustrowanie kogoś, moderatorzy nie będą interweniować.",
  hl = () => "Рисование поверх работ других игроков — нормальная часть игры. Если ваша цель не состоит исключительно в том, чтобы досадить или намеренно расстроить кого-то, модераторы не вмешаются.",
  bl = () => "Малювання поверх робіт інших гравців є нормальною частиною гри. Якщо ваш намір — не лише дратувати чи навмисно засмучувати когось, модератори не втручатимуться.",
  xl = () => "Tô đè lên tác phẩm của người chơi khác là một phần bình thường của trò chơi. Nếu mục đích của bạn không phải chỉ để quấy rối hay cố tình gây bực bội ai đó, quản trị viên sẽ không can thiệp.",
  kl = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? _l() : e === "pt" ? ll() : e === "ch" ? cl() : e === "de" ? dl() : e === "es" ? gl() : e === "fr" ? pl() : e === "it" ? fl() : e === "jp" ? ml() : e === "pl" ? vl() : e === "ru" ? hl() : e === "uk" ? bl() : xl()
  },
  wl = () => "Zero-tolerance content",
  zl = () => "Conteúdo de tolerância zero",
  yl = () => "零容忍内容",
  jl = () => "Null-Toleranz-Inhalte",
  Cl = () => "Contenido de tolerancia cero",
  $l = () => "Contenu à tolérance zéro",
  Dl = () => "Contenuti a tolleranza zero",
  Pl = () => "ゼロトレランスコンテンツ",
  Sl = () => "Treści objęte zerową tolerancją",
  Gl = () => "Контент с нулевой терпимостью",
  Ul = () => "Контент з нульовою толерантністю",
  ql = () => "Nội dung không khoan nhượng",
  Ll = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? wl() : e === "pt" ? zl() : e === "ch" ? yl() : e === "de" ? jl() : e === "es" ? Cl() : e === "fr" ? $l() : e === "it" ? Dl() : e === "jp" ? Pl() : e === "pl" ? Sl() : e === "ru" ? Gl() : e === "uk" ? Ul() : ql()
  },
  Nl = () => "The following content is subject to moderation intervention and can result in a <strong>permanent ban</strong>:",
  Al = () => "O seguinte conteúdo está sujeito a intervenção da moderação e pode resultar em <strong>banimento permanente</strong>:",
  Il = () => "以下内容将受到管理介入，并可能导致<strong>永久封禁</strong>：",
  Rl = () => "Die folgenden Inhalte unterliegen moderativen Maßnahmen und können zu einem <strong>permanenten Bann</strong> führen:",
  Tl = () => "El siguiente contenido está sujeto a intervención de moderación y puede resultar en un <strong>ban permanente</strong>:",
  Ml = () => "Le contenu suivant est soumis à une intervention de la modération et peut entraîner un <strong>bannissement permanent</strong> :",
  Bl = () => "I seguenti contenuti sono soggetti a intervento della moderazione e possono comportare un <strong>ban permanente</strong>:",
  El = () => "以下のコンテンツはモデレーションの対象となり、<strong>永久BAN</strong>になる場合があります:",
  Kl = () => "Poniższe treści podlegają interwencji moderacji i mogą skutkować <strong>permanentnym banem</strong>:",
  Hl = () => "Следующий контент подлежит модераторскому вмешательству и может привести к <strong>перманентному бану</strong>:",
  Zl = () => "Наступний контент підлягає модераторському втручанню і може призвести до <strong>перманентного бану</strong>:",
  Vl = () => "Các nội dung sau đây sẽ bị can thiệp kiểm duyệt và có thể dẫn đến <strong>cấm vĩnh viễn</strong>:",
  Ol = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Nl() : e === "pt" ? Al() : e === "ch" ? Il() : e === "de" ? Rl() : e === "es" ? Tl() : e === "fr" ? Ml() : e === "it" ? Bl() : e === "jp" ? El() : e === "pl" ? Kl() : e === "ru" ? Hl() : e === "uk" ? Zl() : Vl()
  },
  Fl = () => "Doxxing (sharing anyone's private personal information)",
  Jl = () => "Doxxing (compartilhar informações pessoais privadas de qualquer pessoa)",
  Wl = () => "人肉搜索（分享任何人的私人个人信息）",
  Xl = () => "Doxxing (Veröffentlichung persönlicher Informationen anderer)",
  Ql = () => "Doxxing (compartir información personal privada de cualquier persona)",
  Yl = () => "Doxxing (partage d'informations personnelles privées de quiconque)",
  ec = () => "Doxxing (condivisione di informazioni personali private di chiunque)",
  rc = () => "ドキシング（他人の個人情報の共有）",
  nc = () => "Doxxing (udostępnianie prywatnych danych osobowych innych osób)",
  tc = () => "Доксинг (распространение чьей-либо личной информации)",
  ic = () => "Доксинг (поширення приватної особистої інформації будь-кого)",
  oc = () => "Doxxing (chia sẻ thông tin cá nhân riêng tư của bất kỳ ai)",
  sc = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Fl() : e === "pt" ? Jl() : e === "ch" ? Wl() : e === "de" ? Xl() : e === "es" ? Ql() : e === "fr" ? Yl() : e === "it" ? ec() : e === "jp" ? rc() : e === "pl" ? nc() : e === "ru" ? tc() : e === "uk" ? ic() : oc()
  },
  uc = () => "Explicit sexual content (genitalia, sexual acts, sexual fluids)",
  ac = () => "Conteúdo sexual explícito (genitália, atos sexuais, fluidos sexuais)",
  _c = () => "露骨的色情内容（生殖器、性行为、性液体）",
  lc = () => "Explizit sexuelle Inhalte (Genitalien, sexuelle Handlungen, sexuelle Flüssigkeiten)",
  cc = () => "Contenido sexual explícito (genitales, actos sexuales, fluidos sexuales)",
  dc = () => "Contenu sexuel explicite (organes génitaux, actes sexuels, fluides sexuels)",
  gc = () => "Contenuto sessuale esplicito (genitali, atti sessuali, fluidi sessuali)",
  pc = () => "露骨な性的コンテンツ（性器、性行為、体液）",
  fc = () => "Jednoznaczne treści seksualne (genitalia, akty seksualne, płyny seksualne)",
  mc = () => "Откровенный сексуальный контент (гениталии, половые акты, половые жидкости)",
  vc = () => "Відверто сексуальний контент (геніталії, статеві акти, статеві рідини)",
  hc = () => "Nội dung tình dục rõ ràng (bộ phận sinh dục, hành vi tình dục, dịch thể tình dục)",
  bc = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? uc() : e === "pt" ? ac() : e === "ch" ? _c() : e === "de" ? lc() : e === "es" ? cc() : e === "fr" ? dc() : e === "it" ? gc() : e === "jp" ? pc() : e === "pl" ? fc() : e === "ru" ? mc() : e === "uk" ? vc() : hc()
  },
  xc = () => "Extreme graphic gore or realistic violence",
  kc = () => "Gore gráfico extremo ou violência realista",
  wc = () => "极端血腥或写实暴力内容",
  zc = () => "Extremer grafischer Gore oder realistische Gewalt",
  yc = () => "Gore gráfico extremo o violencia realista",
  jc = () => "Gore graphique extrême ou violence réaliste",
  Cc = () => "Gore grafico estremo o violenza realistica",
  $c = () => "極度にグロテスクな描写やリアルな暴力表現",
  Dc = () => "Ekstremalnie drastyczne treści gore lub realistyczna przemoc",
  Pc = () => "Чрезмерная графическая жестокость или реалистичное насилие",
  Sc = () => "Екстремально жорстокі або реалістичні сцени насильства",
  Gc = () => "Bạo lực đẫm máu cực đoan hoặc bạo lực chân thực",
  Uc = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? xc() : e === "pt" ? kc() : e === "ch" ? wc() : e === "de" ? zc() : e === "es" ? yc() : e === "fr" ? jc() : e === "it" ? Cc() : e === "jp" ? $c() : e === "pl" ? Dc() : e === "ru" ? Pc() : e === "uk" ? Sc() : Gc()
  },
  qc = () => "Extreme hostility or targeted harassment toward others",
  Lc = () => "Hostilidade extrema ou assédio direcionado a outros",
  Nc = () => "对他人的极端敌意或针对性骚扰",
  Ac = () => "Extreme Feindseligkeit oder gezielte Belästigung anderer",
  Ic = () => "Hostilidad extrema o acoso dirigido hacia otros",
  Rc = () => "Hostilité extrême ou harcèlement ciblé envers autrui",
  Tc = () => "Ostilità estrema o molestie mirate verso altri",
  Mc = () => "他者に対する極端な敵意や標的型の嫌がらせ",
  Bc = () => "Skrajna wrogość lub ukierunkowane nękanie innych osób",
  Ec = () => "Крайняя враждебность или целенаправленная травля других",
  Kc = () => "Екстремальна ворожість або цілеспрямоване переслідування інших",
  Hc = () => "Thái độ thù địch cực đoan hoặc quấy rối nhắm vào người khác",
  Zc = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? qc() : e === "pt" ? Lc() : e === "ch" ? Nc() : e === "de" ? Ac() : e === "es" ? Ic() : e === "fr" ? Rc() : e === "it" ? Tc() : e === "jp" ? Mc() : e === "pl" ? Bc() : e === "ru" ? Ec() : e === "uk" ? Kc() : Hc()
  },
  Vc = () => "Clear hate speech, extreme slurs, or symbols of hate (e.g. swastikas)",
  Oc = () => "Discurso de ódio evidente, ofensas extremas ou símbolos de ódio (ex.: suásticas)",
  Fc = () => "明确的仇恨言论、极端侮辱性用语或仇恨符号（如纳粹符号）",
  Jc = () => "Eindeutige Hassrede, extreme Beleidigungen oder Hasssymbole (z. B. Hakenkreuze)",
  Wc = () => "Discurso de odio claro, insultos extremos o símbolos de odio (ej. esvásticas)",
  Xc = () => "Discours de haine manifeste, insultes extrêmes ou symboles haineux (ex. : croix gammées)",
  Qc = () => "Chiaro discorso d'odio, insulti estremi o simboli d'odio (es. svastiche)",
  Yc = () => "明確なヘイトスピーチ、極端な差別用語、またはヘイトシンボル（例: 鉤十字）",
  ed = () => "Wyraźna mowa nienawiści, skrajne obelgi lub symbole nienawiści (np. swastyki)",
  rd = () => "Явная речь ненависти, грубые оскорбления или символы ненависти (например, свастики)",
  nd = () => "Явна мова ненависті, образливі слова або символи ненависті (напр. свастики)",
  td = () => "Ngôn từ thù hằn rõ ràng, từ ngữ xúc phạm nặng hoặc biểu tượng thù hận (ví dụ: chữ vạn)",
  id = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Vc() : e === "pt" ? Oc() : e === "ch" ? Fc() : e === "de" ? Jc() : e === "es" ? Wc() : e === "fr" ? Xc() : e === "it" ? Qc() : e === "jp" ? Yc() : e === "pl" ? ed() : e === "ru" ? rd() : e === "uk" ? nd() : td()
  },
  od = () => "Sexualization of minors or fictitious characters with child-like visual traits, regardless of their fictional age or lore",
  sd = () => "Sexualização de menores ou personagens fictícios com traços visuais infantis, independentemente de sua idade ou história fictícia",
  ud = () => "对未成年人或具有明显儿童外貌特征的虚构角色的性化描绘，无论其虚构年龄或设定如何",
  ad = () => "Sexualisierung von Minderjährigen oder fiktiven Charakteren mit kindlichen visuellen Merkmalen, unabhängig von ihrem fiktiven Alter oder ihrer Geschichte",
  _d = () => "Sexualización de menores o personajes ficticios con rasgos visuales infantiles, independientemente de su edad ficticia o historia",
  ld = () => "Sexualisation de mineurs ou de personnages fictifs présentant des traits visuels enfantins, indépendamment de leur âge ou histoire fictifs",
  cd = () => "Sessualizzazione di minori o personaggi fittizi con tratti visivi infantili, indipendentemente dalla loro età fittizia o storia",
  dd = () => "未成年者、または架空の年齢や設定に関わらず、明らかに幼い外見的特徴を持つ架空のキャラクターの性的表現",
  gd = () => "Seksualizacja nieletnich lub fikcyjnych postaci o dziecięcych cechach wizualnych, niezależnie od ich fikcyjnego wieku czy historii",
  pd = () => "Сексуализация несовершеннолетних или вымышленных персонажей с визуальными детскими чертами, независимо от их вымышленного возраста или истории",
  fd = () => "Сексуалізація неповнолітніх або вигаданих персонажів з візуальними дитячими рисами, незалежно від їхнього вигаданого віку чи історії",
  md = () => "Tình dục hóa trẻ vị thành niên hoặc các nhân vật hư cấu có đặc điểm ngoại hình trẻ em, bất kể tuổi hoặc cốt truyện hư cấu của họ",
  vd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? od() : e === "pt" ? sd() : e === "ch" ? ud() : e === "de" ? ad() : e === "es" ? _d() : e === "fr" ? ld() : e === "it" ? cd() : e === "jp" ? dd() : e === "pl" ? gd() : e === "ru" ? pd() : e === "uk" ? fd() : md()
  },
  hd = () => "Rules",
  bd = () => "Regras",
  xd = () => "规则",
  kd = () => "Regeln",
  wd = () => "Reglas",
  zd = () => "Règles",
  yd = () => "Regole",
  jd = () => "ルール",
  Cd = () => "Zasady",
  $d = () => "Правила",
  Dd = () => "Правила",
  Pd = () => "Luật",
  lv = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? hd() : e === "pt" ? bd() : e === "ch" ? xd() : e === "de" ? kd() : e === "es" ? wd() : e === "fr" ? zd() : e === "it" ? yd() : e === "jp" ? jd() : e === "pl" ? Cd() : e === "ru" ? $d() : e === "uk" ? Dd() : Pd()
  },
  Sd = () => "allowed",
  Gd = () => "permitido",
  Ud = () => "允许",
  qd = () => "erlaubt",
  Ld = () => "permitido",
  Nd = () => "autorisé",
  Ad = () => "consentito",
  Id = () => "許可",
  Rd = () => "dozwolone",
  Td = () => "разрешено",
  Md = () => "дозволено",
  Bd = () => "được phép",
  ze = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Sd() : e === "pt" ? Gd() : e === "ch" ? Ud() : e === "de" ? qd() : e === "es" ? Ld() : e === "fr" ? Nd() : e === "it" ? Ad() : e === "jp" ? Id() : e === "pl" ? Rd() : e === "ru" ? Td() : e === "uk" ? Md() : Bd()
  },
  Ed = () => "permanent ban",
  Kd = () => "banimento permanente",
  Hd = () => "永久封禁",
  Zd = () => "permanenter Bann",
  Vd = () => "ban permanente",
  Od = () => "bannissement permanent",
  Fd = () => "ban permanente",
  Jd = () => "永久BAN",
  Wd = () => "permanentny ban",
  Xd = () => "перманентный бан",
  Qd = () => "перманентний бан",
  Yd = () => "cấm vĩnh viễn",
  ye = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ed() : e === "pt" ? Kd() : e === "ch" ? Hd() : e === "de" ? Zd() : e === "es" ? Vd() : e === "fr" ? Od() : e === "it" ? Fd() : e === "jp" ? Jd() : e === "pl" ? Wd() : e === "ru" ? Xd() : e === "uk" ? Qd() : Yd()
  },
  eg = () => "timeout",
  rg = () => "suspensão",
  ng = () => "禁言",
  tg = () => "Sperre",
  ig = () => "suspensión",
  og = () => "suspension",
  sg = () => "sospensione",
  ug = () => "一時停止",
  ag = () => "zawieszenie",
  _g = () => "тайм-аут",
  lg = () => "тайм-аут",
  cg = () => "tạm khóa",
  dg = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? eg() : e === "pt" ? rg() : e === "ch" ? ng() : e === "de" ? tg() : e === "es" ? ig() : e === "fr" ? og() : e === "it" ? sg() : e === "jp" ? ug() : e === "pl" ? ag() : e === "ru" ? _g() : e === "uk" ? lg() : cg()
  },
  gg = () => "Destroying others' work with no creative intent.",
  pg = () => "Destruir o trabalho dos outros sem intenção criativa.",
  fg = () => "毫无创意目的地破坏他人作品。",
  mg = () => "Zerstörung der Arbeit anderer ohne kreative Absicht.",
  vg = () => "Destruir el trabajo de otros sin intención creativa.",
  hg = () => "Détruire le travail des autres sans intention créative.",
  bg = () => "Distruggere il lavoro degli altri senza intento creativo.",
  xg = () => "創造的な意図なく他人の作品を破壊する行為。",
  kg = () => "Niszczenie cudzych prac bez intencji twórczej.",
  wg = () => "Уничтожение чужих работ без какого-либо творческого намерения.",
  zg = () => "Знищення чужих робіт без творчого наміру.",
  yg = () => "Phá hoại tác phẩm của người khác mà không có ý định sáng tạo.",
  jg = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? gg() : e === "pt" ? pg() : e === "ch" ? fg() : e === "de" ? mg() : e === "es" ? vg() : e === "fr" ? hg() : e === "it" ? bg() : e === "jp" ? xg() : e === "pl" ? kg() : e === "ru" ? wg() : e === "uk" ? zg() : yg()
  },
  Cg = () => "Explicit, hateful, or illegal content is not tolerated.",
  $g = () => "Conteúdo explícito, de ódio ou ilegal não é tolerado.",
  Dg = () => "不容忍色情、仇恨或违法内容。",
  Pg = () => "Explizite, hasserfüllte oder illegale Inhalte werden nicht toleriert.",
  Sg = () => "El contenido explícito, de odio o ilegal no es tolerado.",
  Gg = () => "Le contenu explicite, haineux ou illégal n'est pas toléré.",
  Ug = () => "Contenuti espliciti, di odio o illegali non sono tollerati.",
  qg = () => "露骨、差別的、または違法なコンテンツは容認されません。",
  Lg = () => "Treści jednoznacznie seksualne, nawołujące do nienawiści lub nielegalne nie są tolerowane.",
  Ng = () => "Откровенный, ненавистнический или незаконный контент запрещён.",
  Ag = () => "Відвертий, ненависницький або незаконний контент не допускається.",
  Ig = () => "Nội dung khiêu dâm, thù hằn hoặc bất hợp pháp sẽ không được dung thứ.",
  Rg = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Cg() : e === "pt" ? $g() : e === "ch" ? Dg() : e === "de" ? Pg() : e === "es" ? Sg() : e === "fr" ? Gg() : e === "it" ? Ug() : e === "jp" ? qg() : e === "pl" ? Lg() : e === "ru" ? Ng() : e === "uk" ? Ag() : Ig()
  },
  Tg = () => "Erasing spam, inappropriate or suggestive content with transparent pixels.",
  Mg = () => "Apagar spam, conteúdo inapropriado ou sugestivo com pixels transparentes.",
  Bg = () => "使用透明像素清除垃圾内容、不当或暗示性内容。",
  Eg = () => "Spam, unangemessene oder anzügliche Inhalte mit transparenten Pixeln entfernen.",
  Kg = () => "Borrar spam, contenido inapropiado o sugerente con píxeles transparentes.",
  Hg = () => "Effacer le spam, le contenu inapproprié ou suggestif avec des pixels transparents.",
  Zg = () => "Cancellare spam, contenuti inappropriati o allusivi con pixel trasparenti.",
  Vg = () => "透明ピクセルを使って、スパム、不適切、または性的示唆の強いコンテンツを消去する行為。",
  Og = () => "Usuwanie spamu, nieodpowiednich lub sugestywnych treści za pomocą przezroczystych pikseli.",
  Fg = () => "Удаление спама, неприемлемого или откровенного контента прозрачными пикселями.",
  Jg = () => "Видалення спаму, неприйнятного чи відвертого контенту прозорими пікселями.",
  Wg = () => "Xóa spam, nội dung không phù hợp hoặc khiêu gợi bằng pixel trong suốt.",
  Xg = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Tg() : e === "pt" ? Mg() : e === "ch" ? Bg() : e === "de" ? Eg() : e === "es" ? Kg() : e === "fr" ? Hg() : e === "it" ? Zg() : e === "jp" ? Vg() : e === "pl" ? Og() : e === "ru" ? Fg() : e === "uk" ? Jg() : Wg()
  },
  Qg = () => "One account per person. No automation or exploits.",
  Yg = () => "Uma conta por pessoa. Sem automação ou exploits.",
  ep = () => "每人只能使用一个账号。禁止使用自动化工具或利用漏洞。",
  rp = () => "Ein Konto pro Person. Keine Automatisierung oder Exploits.",
  np = () => "Una cuenta por persona. Sin automatización ni exploits.",
  tp = () => "Un seul compte par personne. Aucune automatisation ni exploitation de failles.",
  ip = () => "Un account per persona. Nessuna automazione o exploit.",
  op = () => "1人につき1アカウントです。自動化やエクスプロイトは禁止です。",
  sp = () => "Jedno konto na osobę. Żadnej automatyzacji ani exploitów.",
  up = () => "Один аккаунт на человека. Никакой автоматизации и эксплойтов.",
  ap = () => "Один акаунт на людину. Без автоматизації чи експлойтів.",
  _p = () => "Mỗi người một tài khoản. Không được tự động hóa hay khai thác lỗi.",
  lp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Qg() : e === "pt" ? Yg() : e === "ch" ? ep() : e === "de" ? rp() : e === "es" ? np() : e === "fr" ? tp() : e === "it" ? ip() : e === "jp" ? op() : e === "pl" ? sp() : e === "ru" ? up() : e === "uk" ? ap() : _p()
  },
  cp = () => "Competing for space is part of the game.",
  dp = () => "Competir por espaço faz parte do jogo.",
  gp = () => "争夺空间是游戏的一部分。",
  pp = () => "Der Wettbewerb um Platz ist Teil des Spiels.",
  fp = () => "Competir por el espacio es parte del juego.",
  mp = () => "La compétition pour l'espace fait partie du jeu.",
  vp = () => "Competere per lo spazio fa parte del gioco.",
  hp = () => "スペースをめぐる競争はゲームの一部です。",
  bp = () => "Rywalizacja o przestrzeń jest częścią gry.",
  xp = () => "Борьба за территорию — часть игры.",
  kp = () => "Боротьба за простір — це частина гри.",
  wp = () => "Cạnh tranh không gian là một phần của trò chơi.",
  zp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? cp() : e === "pt" ? dp() : e === "ch" ? gp() : e === "de" ? pp() : e === "es" ? fp() : e === "fr" ? mp() : e === "it" ? vp() : e === "jp" ? hp() : e === "pl" ? bp() : e === "ru" ? xp() : e === "uk" ? kp() : wp()
  },
  yp = () => "Fair play",
  jp = () => "Jogo justo",
  Cp = () => "公平游戏",
  $p = () => "Fair Play",
  Dp = () => "Juego limpio",
  Pp = () => "Fair play",
  Sp = () => "Fair play",
  Gp = () => "フェアプレー",
  Up = () => "Fair play",
  qp = () => "Честная игра",
  Lp = () => "Чесна гра",
  Np = () => "Chơi công bằng",
  Ap = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? yp() : e === "pt" ? jp() : e === "ch" ? Cp() : e === "de" ? $p() : e === "es" ? Dp() : e === "fr" ? Pp() : e === "it" ? Sp() : e === "jp" ? Gp() : e === "pl" ? Up() : e === "ru" ? qp() : e === "uk" ? Lp() : Np()
  },
  Ip = () => "Prohibited",
  Rp = () => "Proibido",
  Tp = () => "禁止行为",
  Mp = () => "Verboten",
  Bp = () => "Prohibido",
  Ep = () => "Interdit",
  Kp = () => "Vietato",
  Hp = () => "禁止事項",
  Zp = () => "Zabronione",
  Vp = () => "Запрещено",
  Op = () => "Заборонено",
  Fp = () => "Bị cấm",
  Jp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ip() : e === "pt" ? Rp() : e === "ch" ? Tp() : e === "de" ? Mp() : e === "es" ? Bp() : e === "fr" ? Ep() : e === "it" ? Kp() : e === "jp" ? Hp() : e === "pl" ? Zp() : e === "ru" ? Vp() : e === "uk" ? Op() : Fp()
  },
  Wp = () => "Griefing",
  Xp = () => "Griefing",
  Qp = () => "恶意破坏",
  Yp = () => "Griefing",
  ef = () => "Griefing",
  rf = () => "Griefing",
  nf = () => "Griefing",
  tf = () => "グリーフィング",
  of = () => "Griefing",
  sf = () => "Гриферство",
  uf = () => "Грифінг",
  af = () => "Griefing",
  _f = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Wp() : e === "pt" ? Xp() : e === "ch" ? Qp() : e === "de" ? Yp() : e === "es" ? ef() : e === "fr" ? rf() : e === "it" ? nf() : e === "jp" ? tf() : e === "pl" ? of() : e === "ru" ? sf() : e === "uk" ? uf() : af()
  },
  lf = () => "Inappropriate content",
  cf = () => "Conteúdo inapropriado",
  df = () => "不当内容",
  gf = () => "Unangemessene Inhalte",
  pf = () => "Contenido inapropiado",
  ff = () => "Contenu inapproprié",
  mf = () => "Contenuto inappropriato",
  vf = () => "不適切なコンテンツ",
  hf = () => "Nieodpowiednie treści",
  bf = () => "Неприемлемый контент",
  xf = () => "Неприйнятний вміст",
  kf = () => "Nội dung không phù hợp",
  wf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? lf() : e === "pt" ? cf() : e === "ch" ? df() : e === "de" ? gf() : e === "es" ? pf() : e === "fr" ? ff() : e === "it" ? mf() : e === "jp" ? vf() : e === "pl" ? hf() : e === "ru" ? bf() : e === "uk" ? xf() : kf()
  },
  zf = () => "Map cleanup",
  yf = () => "Limpeza do mapa",
  jf = () => "地图清理",
  Cf = () => "Kartenbereinigung",
  $f = () => "Limpieza del mapa",
  Df = () => "Nettoyage de la carte",
  Pf = () => "Pulizia della mappa",
  Sf = () => "マップの清掃",
  Gf = () => "Sprzątanie mapy",
  Uf = () => "Очистка карты",
  qf = () => "Очищення карти",
  Lf = () => "Dọn dẹp bản đồ",
  Nf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? zf() : e === "pt" ? yf() : e === "ch" ? jf() : e === "de" ? Cf() : e === "es" ? $f() : e === "fr" ? Df() : e === "it" ? Pf() : e === "jp" ? Sf() : e === "pl" ? Gf() : e === "ru" ? Uf() : e === "uk" ? qf() : Lf()
  },
  Af = () => "Multi-accounts & bots",
  If = () => "Múltiplas contas e bots",
  Rf = () => "多账号与机器人",
  Tf = () => "Multi-Accounts & Bots",
  Mf = () => "Multi-cuentas y bots",
  Bf = () => "Multi-comptes et bots",
  Ef = () => "Multi-account e bot",
  Kf = () => "複数アカウント＆ボット",
  Hf = () => "Multi-konta i boty",
  Zf = () => "Мультиаккаунты и боты",
  Vf = () => "Мультиакаунти та боти",
  Of = () => "Nhiều tài khoản & bot",
  Ff = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Af() : e === "pt" ? If() : e === "ch" ? Rf() : e === "de" ? Tf() : e === "es" ? Mf() : e === "fr" ? Bf() : e === "it" ? Ef() : e === "jp" ? Kf() : e === "pl" ? Hf() : e === "ru" ? Zf() : e === "uk" ? Vf() : Of()
  },
  Jf = () => "Territorial disputes",
  Wf = () => "Disputas territoriais",
  Xf = () => "领地争夺",
  Qf = () => "Gebietskonflikte",
  Yf = () => "Disputas territoriales",
  em = () => "Disputes territoriales",
  rm = () => "Dispute territoriali",
  nm = () => "領土紛争",
  tm = () => "Spory terytorialne",
  im = () => "Территориальные споры",
  om = () => "Територіальні спори",
  sm = () => "Tranh chấp lãnh thổ",
  um = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Jf() : e === "pt" ? Wf() : e === "ch" ? Xf() : e === "de" ? Qf() : e === "es" ? Yf() : e === "fr" ? em() : e === "it" ? rm() : e === "jp" ? nm() : e === "pl" ? tm() : e === "ru" ? im() : e === "uk" ? om() : sm()
  };
var am = P('<div class="absolute inset-0 z-20 flex items-center justify-center"><div class="flex flex-col items-center gap-2.5"><div class="text-base-content/60 flex h-14 w-14 items-center justify-center rounded-full bg-white/75"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg></div> <span class="text-base-content/85 text-sm font-semibold"> </span> <button class="bg-neutral/75 hover:bg-neutral/90 mt-0.5 flex items-center gap-1.5 rounded-full border-none px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition-all active:scale-[0.96]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> </button></div></div>'),
  _m = P("<button>&#8249;</button>"),
  lm = P('<button class="bg-neutral/55 hover:bg-neutral/80 absolute right-2 bottom-3 z-10 flex items-center gap-1.5 rounded-full border-none px-4 py-2 text-[0.82rem] font-medium text-white backdrop-blur-sm transition-all active:scale-[0.96]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> </button>'),
  cm = P('<div><img class="block h-full w-full object-cover"/></div>'),
  dm = P("<button>&#8250;</button>"),
  gm = P("<button></button>"),
  pm = P('<div class="relative mb-6 flex flex-wrap items-center" role="region" aria-roledescription="carousel" tabindex="0"><div class="relative w-full touch-pan-y overflow-hidden rounded-lg" role="group"><!> <!> <!> <div></div> <!></div> <p aria-live="polite"> </p> <div></div></div>');

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
  var L = pm(),
    j = _(L),
    x = _(j);
  {
    var w = c => {
      var f = am(),
        G = _(f),
        k = l(_(G), 2),
        q = _(k, !0);
      u(k);
      var U = l(k, 2),
        R = l(_(U));
      u(U), u(G), u(f), g((Y, W) => {
        m(q, Y), m(R, ` ${W??""}`)
      }, [() => jn(), () => Be()]), X("click", U, () => {
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
      var f = _m();
      N(f, 1, "absolute top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-none bg-black/45 text-lg leading-none text-white backdrop-blur-sm transition-colors select-none hover:bg-black/70 active:scale-[0.92] disabled:pointer-events-none disabled:opacity-30 md:h-14 md:w-14 md:text-[1.6rem] left-2"), g(G => {
        O(f, "aria-label", G), f.disabled = i(p) === 0
      }, [() => dn()]), X("click", f, () => b(i(p) - 1)), s(c, f)
    };
    K(v, c => {
      i(C) || c(D)
    })
  }
  var z = l(v, 2);
  {
    var $ = c => {
      var f = lm(),
        G = l(_(f));
      u(f), g((k, q) => {
        O(f, "aria-label", k), m(G, ` ${q??""}`)
      }, [() => gr(), () => er()]), X("click", f, () => {
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
    var k = cm(),
      q = _(k);
    u(k), g(() => {
      N(k, 1, `border-base-300 bg-base-100 w-full overflow-hidden rounded-lg border transition-opacity duration-300 [grid-area:1/1] ${G===i(p)?"pointer-events-auto opacity-100":"pointer-events-none opacity-0"}`), O(k, "aria-hidden", G !== i(p)), O(q, "src", i(f).src), O(q, "alt", i(f).alt)
    }), s(c, k)
  }), u(y);
  var a = l(y, 2);
  {
    var d = c => {
      var f = dm();
      N(f, 1, "absolute top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-none bg-black/45 text-lg leading-none text-white backdrop-blur-sm transition-colors select-none hover:bg-black/70 active:scale-[0.92] disabled:pointer-events-none disabled:opacity-30 md:h-14 md:w-14 md:text-[1.6rem] right-2"), g(G => {
        O(f, "aria-label", G), f.disabled = i(p) === r.cards.length - 1
      }, [() => Qr()]), X("click", f, () => b(i(p) + 1)), s(c, f)
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
    var k = gm();
    g(q => {
      N(k, 1, `h-2 w-2 rounded-full border-none p-0 transition-all ${G===i(p)?"bg-base-content/60 scale-125":"bg-base-300 hover:bg-base-content/40"}`), O(k, "aria-label", q)
    }, [() => Tr({
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
  }, [() => Cr()]), X("keydown", L, c => {
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
var je = P("<span> </span>"),
  fm = P("<h3><!> <!> <!></h3>"),
  mm = P("<h4><!> <!> <!></h4>");

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
            var a = je(),
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
        var w = mm(),
          v = _(w);
        {
          var D = o => {
            var a = je(),
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
      e() === 3 ? x(L) : x(j, -1)
    })
  }
  s(n, C)
}
var vm = P('<p class="text-base-content/90 mb-5 text-sm leading-relaxed"><!></p>');

function F(n, r) {
  var e = vm(),
    p = _(e);
  ee(p, () => r.children), u(e), s(n, e)
}
var hm = P("<section><!></section>");

function se(n, r) {
  let e = H(r, "compact", 3, !1),
    p = H(r, "class", 3, "mb-7 pt-2 md:mb-9 md:pt-3");
  var h = hm(),
    S = _(h);
  ee(S, () => r.children), u(h), g(() => N(h, 1, ge(e() ? "" : p()))), s(n, h)
}
const bm = "" + new URL("../assets/griefing1.mrf_QTk2.png", import.meta.url).href,
  xm = "" + new URL("../assets/griefing2.HP5n4LVA.png", import.meta.url).href,
  km = "" + new URL("../assets/pgriefing1.Cxw7Oxbm.png", import.meta.url).href,
  wm = "" + new URL("../assets/pgriefing2.cEou4X11.png", import.meta.url).href;
var zm = P("<span><!></span>");

function V(n, r) {
  const e = {
    error: "badge-error bg-error/20",
    warn: "badge-warning bg-warning/20",
    warning: "badge-warning bg-warning/20",
    success: "badge-success bg-success/20"
  };
  var p = zm(),
    h = _(p);
  ee(h, () => r.children), u(p), g(() => N(p, 1, `badge badge-soft ${e[r.level]??""} badge-sm text-[10px] font-extrabold tracking-wide uppercase`)), s(n, p)
}
var ym = P('<!> <!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1),
  jm = P('<!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1),
  Cm = P("<div><!> <!></div>");

function $m(n, r) {
  re(r, !0);
  let e = H(r, "compact", 3, !1),
    p = Q(() => [{
      src: bm,
      alt: "griefing1",
      caption: ru()
    }, {
      src: xm,
      alt: "griefing2",
      caption: qi()
    }]),
    h = Q(() => [{
      src: km,
      alt: "pgriefing1",
      caption: oo()
    }, {
      src: wm,
      alt: "pgriefing2",
      caption: ts()
    }]);
  var S = Cm(),
    C = _(S);
  se(C, {
    get compact() {
      return e()
    },
    class: "mb-4 md:mb-5",
    children: (L, j) => {
      var x = ym(),
        w = T(x);
      F(w, {
        children: (o, a) => {
          var d = Z(),
            M = T(d);
          ie(M, () => ja()), s(o, d)
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
          g(M => m(d, M), [() => $u()]), s(o, d)
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
          ie(M, () => Mu()), s(o, d)
        }
      });
      var z = l(D, 2),
        $ = _(z);
      V($, {
        level: "error",
        children: (o, a) => {
          I();
          var d = A();
          g(M => m(d, M), [() => Nt()]), s(o, d)
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
      var x = jm(),
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
          g(d => m(a, d), [() => Yu()]), s(y, a)
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
          ie(d, () => da()), s(y, a)
        }
      });
      var D = l(v, 2),
        z = _(D);
      V(z, {
        level: "warning",
        children: (y, o) => {
          I();
          var a = A();
          g(d => m(a, d), [() => Ft()]), s(y, a)
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
const Dm = "" + new URL("../assets/borde1.2HTtxzDt.png", import.meta.url).href,
  Pm = "" + new URL("../assets/borde2.CN89IOz0.png", import.meta.url).href,
  Sm = "" + new URL("../assets/borde4.D9VfQfkE.png", import.meta.url).href,
  Gm = "" + new URL("../assets/borde5.DkmTTj5N.png", import.meta.url).href,
  Um = "" + new URL("../assets/borde6.CtRHeorl.png", import.meta.url).href;
var qm = P('<!> <!> <ul class="marker:text-error mb-5 list-disc pl-5"><li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li></ul> <div class="mb-2 flex gap-1"><!> <!></div>', 1),
  Lm = P('<!> <!> <div class="mb-2 flex gap-1"><!> <!></div> <!>', 1),
  Nm = P("<div><!> <!></div>");

function Am(n, r) {
  re(r, !0);
  let e = H(r, "compact", 3, !1),
    p = Q(() => [{
      src: Dm,
      alt: "borde1",
      caption: bo()
    }, {
      src: Pm,
      alt: "borde2",
      caption: pu()
    }, {
      src: Sm,
      alt: "borde4",
      caption: Uo()
    }, {
      src: Gm,
      alt: "borde5",
      caption: we()
    }, {
      src: Um,
      alt: "borde6",
      caption: we()
    }]);
  var h = Nm(),
    S = _(h);
  se(S, {
    get compact() {
      return e()
    },
    class: "mb-4 pt-2 md:mb-5 md:pt-3",
    children: (b, L) => {
      var j = qm(),
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
          g(R => m(U, R), [() => Ll()]), s(k, U)
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
          ie(R, () => Ol()), s(k, U)
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
          g(R => m(U, R), [() => wt()]), s(k, U)
        }
      });
      var G = l(f, 2);
      V(G, {
        level: "warning",
        children: (k, q) => {
          I();
          var U = A();
          g(R => m(U, R), [() => Wn()]), s(k, U)
        }
      }), u(c), g((k, q, U, R, Y, W) => {
        m(z, k), m(y, q), m(a, U), m(M, R), m(ue, Y), m(B, W)
      }, [() => bc(), () => vd(), () => Uc(), () => id(), () => sc(), () => Zc()]), s(b, j)
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
      var j = Lm(),
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
          g(d => m(a, d), [() => z_()]), s(y, a)
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
          ie(d, () => A_()), s(y, a)
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
          g(d => m(a, d), [() => _t()]), s(y, a)
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
const Im = "" + new URL("../assets/mapclean1.CXzD9GTn.png", import.meta.url).href,
  Rm = "" + new URL("../assets/mapclean2.B1--Lv8s.png", import.meta.url).href,
  Tm = "" + new URL("../assets/mapclean3.zxc4kxhZ.png", import.meta.url).href;
var Mm = P('<!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1);

function Bm(n, r) {
  re(r, !0);
  let e = H(r, "compact", 3, !1),
    p = Q(() => [{
      src: Im,
      alt: "mapclean1",
      caption: Es()
    }, {
      src: Rm,
      alt: "mapclean2",
      caption: Ps()
    }, {
      src: Tm,
      alt: "mapclean3",
      caption: ms()
    }]);
  se(n, {
    get compact() {
      return e()
    },
    children: (h, S) => {
      var C = Mm(),
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
          g($ => m(z, $), [() => Xa()]), s(v, z)
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
          g($ => m(z, $), [() => Ra()]), s(v, z)
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

function Em(n, r) {
  re(r, !0), H(r, "compact", 3, !1), F(n, {
    children: (e, p) => {
      var h = Z(),
        S = T(h);
      ie(S, () => l_()), s(e, h)
    }
  }), ne()
}
const Km = "" + new URL("../assets/ngriefing1.CQEoQ-5k.png", import.meta.url).href,
  Hm = "" + new URL("../assets/ngriefing2.CA1282Nq.png", import.meta.url).href,
  Zm = "" + new URL("../assets/ngriefing3.l-WuAkT6.png", import.meta.url).href;
var Vm = P('<!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1),
  Om = P("<div><!> <!></div>");

function Fm(n, r) {
  re(r, !0);
  let e = H(r, "compact", 3, !1),
    p = Q(() => [{
      src: Zm,
      alt: "ngriefing3",
      caption: xi()
    }, {
      src: Km,
      alt: "ngriefing1",
      caption: ui()
    }, {
      src: Hm,
      alt: "ngriefing2",
      caption: Vi()
    }]);
  var h = Om(),
    S = _(h);
  F(S, {
    children: (b, L) => {
      I();
      var j = A();
      g(x => m(j, x), [() => kl()]), s(b, j)
    }
  });
  var C = l(S, 2);
  se(C, {
    get compact() {
      return e()
    },
    children: (b, L) => {
      var j = Vm(),
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
          g(a => m(o, a), [() => al()]), s($, o)
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
          g(a => m(o, a), [() => J_()]), s($, o)
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
var Jm = P('<details><summary class="collapse-title flex min-h-0! gap-3.5 py-3.5! ps-4! sm:gap-4 sm:ps-5!"><div></div> <div class="min-w-0 flex-1"><div class="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4"><div class="min-w-0"><div class="flex flex-wrap items-center gap-2.5"><span class="text-base-content text-base leading-snug font-bold"> </span> <!></div> <p class="text-base-content/90 mt-1 text-sm leading-relaxed"> </p></div></div></div></summary> <div class="collapse-content p-0!"><div class="border-base-content/5 border-t px-4 py-5 sm:px-5"><!></div></div></details>'),
  Wm = P('<div><div></div> <div class="min-w-0 flex-1"><div class="min-w-0"><div class="flex flex-wrap items-center gap-2.5"><span class="text-base-content text-base leading-snug font-bold"> </span> <!></div> <p class="text-base-content/90 mt-1 text-sm leading-relaxed"> </p></div></div></div>'),
  Xm = P('<div><div><svg class="size-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd"></path></svg> <span> </span></div> <!></div>');

function cv(n, r) {
  re(r, !0);
  let e = H(r, "showExtraInfo", 3, !0),
    p = Q(() => [{
      label: Jp(),
      icon: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
      badgeLevel: "error",
      classes: {
        header: "bg-error/10 text-error",
        button: "border-error/30 bg-error/5 hover:bg-error/10",
        index: "bg-error/12 text-error"
      },
      rules: [{
        title: wf(),
        content: Am,
        description: Rg(),
        badge: {
          label: ye(),
          type: "ban"
        }
      }, {
        title: _f(),
        content: $m,
        description: jg(),
        badge: {
          label: dg(),
          type: "ban"
        }
      }, {
        title: Ff(),
        content: Em,
        description: lp(),
        badge: {
          label: ye(),
          type: "ban"
        }
      }]
    }, {
      label: Ap(),
      icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      badgeLevel: "success",
      classes: {
        header: "bg-success/10 text-success",
        button: "border-success/30 bg-success/5 hover:bg-success/10",
        index: "bg-success/12 text-success"
      },
      rules: [{
        title: um(),
        content: Fm,
        description: zp(),
        badge: {
          label: ze(),
          type: "allowed"
        },
        allowed: !0
      }, {
        title: Nf(),
        content: Bm,
        description: Xg(),
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
    var j = Xm();
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
            var B = Jm(),
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
                  children: (ve, Qm) => {
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
              Ce = _(ae);
            De(Ce, () => i(o).content, (_e, ve) => {
              ve(_e, {
                compact: !0
              })
            }), u(ae), u(me), u(B), g(() => {
              N(B, 1, `collapse-arrow collapse rounded-none border-l-[3px] ${i(b).classes.button??""} ${a>0?"border-base-content/5 border-t":""}`), N(f, 1, `${i(b).classes.index??""} flex size-7 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold`), m(Y, i(o).title), m(fe, i(o).description)
            }), s(E, B)
          },
          ue = E => {
            var B = Wm(),
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
          e() ? E(J) : E(ue, -1)
        })
      }
      s(y, d)
    }), u(j), g(() => {
      N(x, 1, `${i(b).classes.header??""} flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-widest uppercase`), O(v, "d", i(b).icon), m(z, i(b).label)
    }), s(C, j)
  }), s(n, h), ne()
}
export {
  Am as G, cv as R, $m as a, Fm as b, Bm as c, Em as d, lv as r
};