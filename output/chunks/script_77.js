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
  f as M,
  bl as N,
  n as I
} from "./CNUayq5u.js";
import {
  s as m
} from "./Dnqs5_45.js";
import {
  i as K
} from "./BZdRChsB.js";
import {
  e as ce,
  i as de
} from "./C6lnlUtx.js";
import {
  c as De
} from "./CHeKawcz.js";
import {
  s as O,
  a as A,
  c as ge
} from "./U9FR6gvg.js";
import {
  p as H
} from "./CxJ_bcWF.js";
import {
  h as ie
} from "./DYFy2FmB.js";
import {
  c as Pe,
  a as Se
} from "./BbM-gkrm.js";
import {
  s as ee
} from "./DIzQwxY1.js";
const Ge = () => "Click to reveal",
  qe = () => "Clique para revelar",
  Ue = () => "点击查看",
  Le = () => "Klicken zum Anzeigen",
  Ae = () => "Haz clic para revelar",
  Ne = () => "Cliquez pour révéler",
  Ie = () => "Clicca per rivelare",
  Re = () => "クリックして表示",
  Me = () => "Kliknij, aby odsłonić",
  Te = () => "Нажмите, чтобы показать",
  Be = () => "Натисніть, щоб показати",
  Ee = () => "Nhấn để hiện",
  Ke = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ge() : e === "pt" ? qe() : e === "ch" ? Ue() : e === "de" ? Le() : e === "es" ? Ae() : e === "fr" ? Ne() : e === "it" ? Ie() : e === "jp" ? Re() : e === "pl" ? Me() : e === "ru" ? Te() : e === "uk" ? Be() : Ee()
  },
  He = () => "Hide",
  Ze = () => "Ocultar",
  Ve = () => "隐藏",
  Oe = () => "Ausblenden",
  Fe = () => "Ocultar",
  We = () => "Masquer",
  Je = () => "Nascondi",
  Xe = () => "非表示",
  Qe = () => "Ukryj",
  Ye = () => "Скрыть",
  er = () => "Сховати",
  rr = () => "Ẩn",
  nr = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? He() : e === "pt" ? Ze() : e === "ch" ? Ve() : e === "de" ? Oe() : e === "es" ? Fe() : e === "fr" ? We() : e === "it" ? Je() : e === "jp" ? Xe() : e === "pl" ? Qe() : e === "ru" ? Ye() : e === "uk" ? er() : rr()
  },
  tr = () => "Hide sensitive content",
  ir = () => "Ocultar conteúdo sensível",
  or = () => "隐藏敏感内容",
  sr = () => "Sensiblen Inhalt ausblenden",
  ur = () => "Ocultar contenido sensible",
  ar = () => "Masquer le contenu sensible",
  _r = () => "Nascondi contenuto sensibile",
  lr = () => "センシティブなコンテンツを非表示",
  cr = () => "Ukryj wrażliwą treść",
  dr = () => "Скрыть чувствительный контент",
  gr = () => "Сховати чутливий вміст",
  pr = () => "Ẩn nội dung nhạy cảm",
  fr = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? tr() : e === "pt" ? ir() : e === "ch" ? or() : e === "de" ? sr() : e === "es" ? ur() : e === "fr" ? ar() : e === "it" ? _r() : e === "jp" ? lr() : e === "pl" ? cr() : e === "ru" ? dr() : e === "uk" ? gr() : pr()
  },
  mr = () => "Image carousel",
  vr = () => "Carrossel de imagens",
  hr = () => "图片轮播",
  br = () => "Bilderkarussell",
  xr = () => "Carrusel de imágenes",
  kr = () => "Carrousel d'images",
  wr = () => "Carosello di immagini",
  zr = () => "画像カルーセル",
  yr = () => "Karuzela obrazów",
  jr = () => "Карусель изображений",
  Cr = () => "Карусель зображень",
  $r = () => "Băng chuyền hình ảnh",
  Dr = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? mr() : e === "pt" ? vr() : e === "ch" ? hr() : e === "de" ? br() : e === "es" ? xr() : e === "fr" ? kr() : e === "it" ? wr() : e === "jp" ? zr() : e === "pl" ? yr() : e === "ru" ? jr() : e === "uk" ? Cr() : $r()
  },
  Pr = n => `Image ${n.current} of ${n.total}`,
  Sr = n => `Imagem ${n.current} de ${n.total}`,
  Gr = n => `第 ${n.current} 张，共 ${n.total} 张`,
  qr = n => `Bild ${n.current} von ${n.total}`,
  Ur = n => `Imagen ${n.current} de ${n.total}`,
  Lr = n => `Image ${n.current} sur ${n.total}`,
  Ar = n => `Immagine ${n.current} di ${n.total}`,
  Nr = n => `画像 ${n.current} / ${n.total}`,
  Ir = n => `Obraz ${n.current} z ${n.total}`,
  Rr = n => `Изображение ${n.current} из ${n.total}`,
  Mr = n => `Зображення ${n.current} з ${n.total}`,
  Tr = n => `Hình ${n.current} trên ${n.total}`,
  Br = (n, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Pr(n) : e === "pt" ? Sr(n) : e === "ch" ? Gr(n) : e === "de" ? qr(n) : e === "es" ? Ur(n) : e === "fr" ? Lr(n) : e === "it" ? Ar(n) : e === "jp" ? Nr(n) : e === "pl" ? Ir(n) : e === "ru" ? Rr(n) : e === "uk" ? Mr(n) : Tr(n)
  },
  Er = () => "Sensitive image",
  Kr = () => "Imagem sensível",
  Hr = () => "敏感图片",
  Zr = () => "Sensibles Bild",
  Vr = () => "Imagen sensible",
  Or = () => "Image sensible",
  Fr = () => "Immagine sensibile",
  Wr = () => "センシティブな画像",
  Jr = () => "Wrażliwy obraz",
  Xr = () => "Чувствительное изображение",
  Qr = () => "Чутливе зображення",
  Yr = () => "Hình ảnh nhạy cảm",
  en = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Er() : e === "pt" ? Kr() : e === "ch" ? Hr() : e === "de" ? Zr() : e === "es" ? Vr() : e === "fr" ? Or() : e === "it" ? Fr() : e === "jp" ? Wr() : e === "pl" ? Jr() : e === "ru" ? Xr() : e === "uk" ? Qr() : Yr()
  },
  rn = () => "Allowed",
  nn = () => "Permitido",
  tn = () => "允许",
  on = () => "Erlaubt",
  sn = () => "Permitido",
  un = () => "Autorisé",
  an = () => "Consentito",
  _n = () => "許可",
  ln = () => "Dozwolone",
  cn = () => "Разрешено",
  dn = () => "Дозволено",
  gn = () => "Được phép",
  be = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? rn() : e === "pt" ? nn() : e === "ch" ? tn() : e === "de" ? on() : e === "es" ? sn() : e === "fr" ? un() : e === "it" ? an() : e === "jp" ? _n() : e === "pl" ? ln() : e === "ru" ? cn() : e === "uk" ? dn() : gn()
  },
  pn = () => "Artwork removal",
  fn = () => "Remoção de arte",
  mn = () => "作品移除",
  vn = () => "Entfernung des Kunstwerks",
  hn = () => "Eliminación de obras",
  bn = () => "Suppression de l'œuvre",
  xn = () => "Rimozione dell'opera",
  kn = () => "作品の削除",
  wn = () => "Usunięcie grafiki",
  zn = () => "Удаление рисунка",
  yn = () => "Видалення малюнків",
  jn = () => "Gỡ bỏ tác phẩm",
  Cn = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? pn() : e === "pt" ? fn() : e === "ch" ? mn() : e === "de" ? vn() : e === "es" ? hn() : e === "fr" ? bn() : e === "it" ? xn() : e === "jp" ? kn() : e === "pl" ? wn() : e === "ru" ? zn() : e === "uk" ? yn() : jn()
  },
  $n = () => "Community cleanup",
  Dn = () => "Limpeza pela comunidade",
  Pn = () => "社区清理",
  Sn = () => "Community-Bereinigung",
  Gn = () => "Limpieza comunitaria",
  qn = () => "Nettoyage communautaire",
  Un = () => "Pulizia della community",
  Ln = () => "コミュニティによる清掃",
  An = () => "Sprzątanie przez społeczność",
  Nn = () => "Очистка сообществом",
  In = () => "Очищення спільнотою",
  Rn = () => "Cộng đồng dọn dẹp",
  Mn = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? $n() : e === "pt" ? Dn() : e === "ch" ? Pn() : e === "de" ? Sn() : e === "es" ? Gn() : e === "fr" ? qn() : e === "it" ? Un() : e === "jp" ? Ln() : e === "pl" ? An() : e === "ru" ? Nn() : e === "uk" ? In() : Rn()
  },
  Tn = () => "Permanent Ban",
  Bn = () => "Banimento Permanente",
  En = () => "永久封禁",
  Kn = () => "Permanenter Bann",
  Hn = () => "Ban Permanente",
  Zn = () => "Bannissement permanent",
  Vn = () => "Ban permanente",
  On = () => "永久BAN",
  Fn = () => "Permanentny ban",
  Wn = () => "Перманентный бан",
  Jn = () => "Перманентний бан",
  Xn = () => "Cấm vĩnh viễn",
  Qn = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Tn() : e === "pt" ? Bn() : e === "ch" ? En() : e === "de" ? Kn() : e === "es" ? Hn() : e === "fr" ? Zn() : e === "it" ? Vn() : e === "jp" ? On() : e === "pl" ? Fn() : e === "ru" ? Wn() : e === "uk" ? Jn() : Xn()
  },
  Yn = () => "Timeout",
  et = () => "Suspensão",
  rt = () => "禁言",
  nt = () => "Sperre",
  tt = () => "Suspensión",
  it = () => "Suspension",
  ot = () => "Sospensione",
  st = () => "一時停止",
  ut = () => "Zawieszenie",
  at = () => "Тайм-аут",
  _t = () => "Тайм-аут",
  lt = () => "Tạm khóa",
  ct = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Yn() : e === "pt" ? et() : e === "ch" ? rt() : e === "de" ? nt() : e === "es" ? tt() : e === "fr" ? it() : e === "it" ? ot() : e === "jp" ? st() : e === "pl" ? ut() : e === "ru" ? at() : e === "uk" ? _t() : lt()
  },
  dt = () => "Timeout risk",
  gt = () => "Risco de suspensão",
  pt = () => "禁言风险",
  ft = () => "Sperrrisiko",
  mt = () => "Riesgo de suspensión",
  vt = () => "Risque de suspension",
  ht = () => "Rischio sospensione",
  bt = () => "一時停止のリスク",
  xt = () => "Ryzyko zawieszenia",
  kt = () => "Риск тайм-аута",
  wt = () => "Ризик тайм-ауту",
  zt = () => "Nguy cơ tạm khóa",
  yt = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? dt() : e === "pt" ? gt() : e === "ch" ? pt() : e === "de" ? ft() : e === "es" ? mt() : e === "fr" ? vt() : e === "it" ? ht() : e === "jp" ? bt() : e === "pl" ? xt() : e === "ru" ? kt() : e === "uk" ? wt() : zt()
  },
  jt = () => "Drawing a new artwork over a flag",
  Ct = () => "Desenhar uma nova arte por cima de uma bandeira",
  $t = () => "在旗帜上绘制新作品",
  Dt = () => "Ein neues Kunstwerk über eine Flagge zeichnen",
  Pt = () => "Dibujar una nueva obra sobre una bandera",
  St = () => "Dessiner une nouvelle œuvre par-dessus un drapeau",
  Gt = () => "Disegnare una nuova opera sopra una bandiera",
  qt = () => "旗の上に新しい作品を描く",
  Ut = () => "Rysowanie nowej grafiki na fladze",
  Lt = () => "Рисование нового рисунка поверх флага",
  At = () => "Створення нового малюнка поверх прапора",
  Nt = () => "Vẽ tác phẩm mới đè lên cờ",
  It = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? jt() : e === "pt" ? Ct() : e === "ch" ? $t() : e === "de" ? Dt() : e === "es" ? Pt() : e === "fr" ? St() : e === "it" ? Gt() : e === "jp" ? qt() : e === "pl" ? Ut() : e === "ru" ? Lt() : e === "uk" ? At() : Nt()
  },
  Rt = () => "Drawing over another drawing",
  Mt = () => "Desenhar por cima de outro desenho",
  Tt = () => "在另一幅画作上绘画",
  Bt = () => "Eine Zeichnung über eine andere zeichnen",
  Et = () => "Dibujar sobre otro dibujo",
  Kt = () => "Dessiner par-dessus un autre dessin",
  Ht = () => "Disegnare sopra un altro disegno",
  Zt = () => "別の描画の上に描く",
  Vt = () => "Zamalowywanie jednego rysunku innym",
  Ot = () => "Рисование поверх другого рисунка",
  Ft = () => "Малювання поверх іншого малюнка",
  Wt = () => "Vẽ đè lên bức vẽ khác",
  Jt = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Rt() : e === "pt" ? Mt() : e === "ch" ? Tt() : e === "de" ? Bt() : e === "es" ? Et() : e === "fr" ? Kt() : e === "it" ? Ht() : e === "jp" ? Zt() : e === "pl" ? Vt() : e === "ru" ? Ot() : e === "uk" ? Ft() : Wt()
  },
  Xt = () => "Drawing over existing artwork with no creative intent",
  Qt = () => "Desenhar por cima de artes existentes sem intenção criativa",
  Yt = () => "毫无创意目的地覆盖现有作品",
  ei = () => "Übermalen bestehender Kunstwerke ohne kreative Absicht",
  ri = () => "Dibujar sobre obras existentes sin intención creativa",
  ni = () => "Peindre par-dessus une œuvre existante sans intention créative",
  ti = () => "Disegnare sopra opere esistenti senza intento creativo",
  ii = () => "創造的な意図なく既存の作品の上に描く",
  oi = () => "Zamalowywanie istniejącej grafiki bez intencji twórczej",
  si = () => "Рисование поверх существующего рисунка без творческого намерения",
  ui = () => "Малювання поверх існуючого малюнка без творчого наміру",
  ai = () => "Tô đè lên tác phẩm hiện có mà không có ý sáng tạo",
  _i = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Xt() : e === "pt" ? Qt() : e === "ch" ? Yt() : e === "de" ? ei() : e === "es" ? ri() : e === "fr" ? ni() : e === "it" ? ti() : e === "jp" ? ii() : e === "pl" ? oi() : e === "ru" ? si() : e === "uk" ? ui() : ai()
  },
  li = () => "Drawing over a repeated pattern",
  ci = () => "Desenhar por cima de um padrão repetitivo",
  di = () => "在重复图案上绘画",
  gi = () => "Über ein wiederholendes Muster zeichnen",
  pi = () => "Dibujar sobre un patrón repetido",
  fi = () => "Dessiner par-dessus un motif répétitif",
  mi = () => "Disegnare sopra un pattern ripetuto",
  vi = () => "繰り返しパターンの上に描く",
  hi = () => "Zamalowywanie powtarzalnego wzoru",
  bi = () => "Рисование поверх повторяющегося узора",
  xi = () => "Малювання поверх повторюваного візерунка",
  ki = () => "Vẽ đè lên mẫu lặp lại",
  wi = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? li() : e === "pt" ? ci() : e === "ch" ? di() : e === "de" ? gi() : e === "es" ? pi() : e === "fr" ? fi() : e === "it" ? mi() : e === "jp" ? vi() : e === "pl" ? hi() : e === "ru" ? bi() : e === "uk" ? xi() : ki()
  },
  zi = () => "Drawing a flag over other artworks",
  yi = () => "Desenhar uma bandeira por cima de outras artes",
  ji = () => "在其他作品上绘制旗帜",
  Ci = () => "Eine Flagge über andere Kunstwerke zeichnen",
  $i = () => "Dibujar una bandera sobre las obras de otros",
  Di = () => "Dessiner un drapeau par-dessus d'autres œuvres",
  Pi = () => "Disegnare una bandiera sopra altre opere",
  Si = () => "他の作品の上に旗を描く",
  Gi = () => "Rysowanie flagi na cudzych grafikach",
  qi = () => "Рисование флага поверх чужих рисунков",
  Ui = () => "Малювання прапора поверх чужих малюнків",
  Li = () => "Vẽ cờ đè lên tác phẩm của người khác",
  Ai = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? zi() : e === "pt" ? yi() : e === "ch" ? ji() : e === "de" ? Ci() : e === "es" ? $i() : e === "fr" ? Di() : e === "it" ? Pi() : e === "jp" ? Si() : e === "pl" ? Gi() : e === "ru" ? qi() : e === "uk" ? Ui() : Li()
  },
  Ni = () => "Highly Suggestive Content",
  Ii = () => "Conteúdo Altamente Sugestivo",
  Ri = () => "高度暗示性内容",
  Mi = () => "Stark anzügliche Inhalte",
  Ti = () => "Contenido Altamente Sugerente",
  Bi = () => "Contenu hautement suggestif",
  Ei = () => "Contenuto fortemente allusivo",
  Ki = () => "非常に性的示唆の強いコンテンツ",
  Hi = () => "Mocno sugestywne treści",
  Zi = () => "Крайне откровенный контент",
  Vi = () => "Дуже відвертий контент",
  Oi = () => "Nội dung khiêu gợi mạnh",
  Fi = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ni() : e === "pt" ? Ii() : e === "ch" ? Ri() : e === "de" ? Mi() : e === "es" ? Ti() : e === "fr" ? Bi() : e === "it" ? Ei() : e === "jp" ? Ki() : e === "pl" ? Hi() : e === "ru" ? Zi() : e === "uk" ? Vi() : Oi()
  },
  Wi = () => "Mild Gore Content",
  Ji = () => "Conteúdo de Gore Leve",
  Xi = () => "轻度血腥内容",
  Qi = () => "Leichte Gore-Inhalte",
  Yi = () => "Contenido de Gore Leve",
  eo = () => "Contenu gore modéré",
  ro = () => "Contenuto gore lieve",
  no = () => "軽度のグロテスクコンテンツ",
  to = () => "Łagodne treści gore",
  io = () => "Умеренно жестокий контент",
  oo = () => "Помірно жорстокий контент",
  so = () => "Nội dung bạo lực nhẹ",
  uo = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Wi() : e === "pt" ? Ji() : e === "ch" ? Xi() : e === "de" ? Qi() : e === "es" ? Yi() : e === "fr" ? eo() : e === "it" ? ro() : e === "jp" ? no() : e === "pl" ? to() : e === "ru" ? io() : e === "uk" ? oo() : so()
  },
  ao = () => "Non-explicit suggestive content",
  _o = () => "Conteúdo sugestivo não explícito",
  lo = () => "非露骨暗示性内容",
  co = () => "Nicht-explizite anzügliche Inhalte",
  go = () => "Contenido sugerente no explícito",
  po = () => "Contenu suggestif non explicite",
  fo = () => "Contenuto allusivo non esplicito",
  mo = () => "露骨でない性的示唆のあるコンテンツ",
  vo = () => "Niejednoznaczne treści sugestywne",
  ho = () => "Неоткровенный пикантный контент",
  bo = () => "Невідвертий контент з підтекстом",
  xo = () => "Nội dung khiêu gợi không rõ ràng",
  we = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ao() : e === "pt" ? _o() : e === "ch" ? lo() : e === "de" ? co() : e === "es" ? go() : e === "fr" ? po() : e === "it" ? fo() : e === "jp" ? mo() : e === "pl" ? vo() : e === "ru" ? ho() : e === "uk" ? bo() : xo()
  },
  ko = () => "Drawing repeated pattern over other artworks",
  wo = () => "Desenhar padrão repetitivo por cima de outras artes",
  zo = () => "在其他作品上绘制重复图案",
  yo = () => "Wiederholendes Muster über andere Kunstwerke zeichnen",
  jo = () => "Dibujar un patrón repetido sobre las obras de otros",
  Co = () => "Dessiner un motif répétitif par-dessus d'autres œuvres",
  $o = () => "Disegnare un pattern ripetuto sopra altre opere",
  Do = () => "他の作品の上に繰り返しパターンを描く",
  Po = () => "Rysowanie powtarzalnego wzoru na cudzych grafikach",
  So = () => "Рисование повторяющегося узора поверх чужих рисунков",
  Go = () => "Малювання повторюваного візерунка поверх чужих малюнків",
  qo = () => "Vẽ mẫu lặp lại đè lên tác phẩm của người khác",
  Uo = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ko() : e === "pt" ? wo() : e === "ch" ? zo() : e === "de" ? yo() : e === "es" ? jo() : e === "fr" ? Co() : e === "it" ? $o() : e === "jp" ? Do() : e === "pl" ? Po() : e === "ru" ? So() : e === "uk" ? Go() : qo()
  },
  Lo = () => "Using transparent pixels over repetitive flags",
  Ao = () => "Usar pixels transparentes sobre bandeiras repetitivas",
  No = () => "使用透明像素覆盖重复的旗帜",
  Io = () => "Transparente Pixel über sich wiederholende Flaggen verwenden",
  Ro = () => "Usar píxeles transparentes sobre banderas repetitivas",
  Mo = () => "Utilisation de pixels transparents sur les drapeaux répétitifs",
  To = () => "Usare pixel trasparenti sopra bandiere ripetitive",
  Bo = () => "繰り返される旗の上に透明ピクセルを使用",
  Eo = () => "Używanie przezroczystych pikseli na powtarzalnych flagach",
  Ko = () => "Использование прозрачных пикселей поверх повторяющихся флагов",
  Ho = () => "Використання прозорих пікселів поверх повторюваних прапорів",
  Zo = () => "Sử dụng pixel trong suốt đè lên cờ lặp lại",
  Vo = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Lo() : e === "pt" ? Ao() : e === "ch" ? No() : e === "de" ? Io() : e === "es" ? Ro() : e === "fr" ? Mo() : e === "it" ? To() : e === "jp" ? Bo() : e === "pl" ? Eo() : e === "ru" ? Ko() : e === "uk" ? Ho() : Zo()
  },
  Oo = () => "Using transparent pixels to remove inappropriate content",
  Fo = () => "Usar pixels transparentes para remover conteúdo inapropriado",
  Wo = () => "使用透明像素移除不当内容",
  Jo = () => "Transparente Pixel zum Entfernen unangemessener Inhalte verwenden",
  Xo = () => "Usar píxeles transparentes para eliminar contenido inapropiado",
  Qo = () => "Utilisation de pixels transparents pour supprimer le contenu inapproprié",
  Yo = () => "Usare pixel trasparenti per rimuovere contenuti inappropriati",
  es = () => "透明ピクセルを使って不適切なコンテンツを除去",
  rs = () => "Używanie przezroczystych pikseli do usuwania nieodpowiednich treści",
  ns = () => "Использование прозрачных пикселей для удаления неприемлемого контента",
  ts = () => "Використання прозорих пікселів для видалення неприйнятного контенту",
  is = () => "Sử dụng pixel trong suốt để xóa nội dung không phù hợp",
  os = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Oo() : e === "pt" ? Fo() : e === "ch" ? Wo() : e === "de" ? Jo() : e === "es" ? Xo() : e === "fr" ? Qo() : e === "it" ? Yo() : e === "jp" ? es() : e === "pl" ? rs() : e === "ru" ? ns() : e === "uk" ? ts() : is()
  },
  ss = () => "Using transparent pixels to remove repetitive patterns",
  us = () => "Usar pixels transparentes para remover padrões repetitivos",
  as = () => "使用透明像素移除重复图案",
  _s = () => "Transparente Pixel zum Entfernen sich wiederholender Muster verwenden",
  ls = () => "Usar píxeles transparentes para eliminar patrones repetitivos",
  cs = () => "Utilisation de pixels transparents pour supprimer les motifs répétitifs",
  ds = () => "Usare pixel trasparenti per rimuovere pattern ripetitivi",
  gs = () => "透明ピクセルを使って繰り返しパターンを除去",
  ps = () => "Używanie przezroczystych pikseli do usuwania powtarzalnych wzorów",
  fs = () => "Использование прозрачных пикселей для удаления повторяющихся узоров",
  ms = () => "Використання прозорих пікселів для видалення повторюваних візерунків",
  vs = () => "Sử dụng pixel trong suốt để xóa mẫu lặp lại",
  hs = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ss() : e === "pt" ? us() : e === "ch" ? as() : e === "de" ? _s() : e === "es" ? ls() : e === "fr" ? cs() : e === "it" ? ds() : e === "jp" ? gs() : e === "pl" ? ps() : e === "ru" ? fs() : e === "uk" ? ms() : vs()
  },
  bs = () => "Scribbling over other people's artwork",
  xs = () => "Rabiscar por cima da arte de outras pessoas",
  ks = () => "在他人作品上乱涂乱画",
  ws = () => "Kritzeln über Kunstwerke anderer",
  zs = () => "Garabatear sobre las obras de otros",
  ys = () => "Gribouiller sur les œuvres des autres",
  js = () => "Scarabocchiare sopra le opere degli altri",
  Cs = () => "他人の作品への落書き",
  $s = () => "Bazgranie po cudzych grafikach",
  Ds = () => "Черкание поверх чужих рисунков",
  Ps = () => "Замальовування чужих малюнків",
  Ss = () => "Vẽ bậy lên tác phẩm của người khác",
  Gs = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? bs() : e === "pt" ? xs() : e === "ch" ? ks() : e === "de" ? ws() : e === "es" ? zs() : e === "fr" ? ys() : e === "it" ? js() : e === "jp" ? Cs() : e === "pl" ? $s() : e === "ru" ? Ds() : e === "uk" ? Ps() : Ss()
  },
  qs = () => "Suggestive fetishist Content",
  Us = () => "Conteúdo sugestivo fetichista",
  Ls = () => "暗示性恋物内容",
  As = () => "Anzügliche fetischistische Inhalte",
  Ns = () => "Contenido sugerente fetichista",
  Is = () => "Contenu suggestif fétichiste",
  Rs = () => "Contenuto allusivo feticista",
  Ms = () => "性的示唆のあるフェティッシュコンテンツ",
  Ts = () => "Sugestywne treści fetyszystyczne",
  Bs = () => "Откровенный фетишистский контент",
  Es = () => "Відвертий фетишистський контент",
  Ks = () => "Nội dung khiêu gợi theo hướng tôn sùng",
  Hs = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? qs() : e === "pt" ? Us() : e === "ch" ? Ls() : e === "de" ? As() : e === "es" ? Ns() : e === "fr" ? Is() : e === "it" ? Rs() : e === "jp" ? Ms() : e === "pl" ? Ts() : e === "ru" ? Bs() : e === "uk" ? Es() : Ks()
  },
  Zs = () => "Clear griefing",
  Vs = () => "Griefing evidente",
  Os = () => "明确的恶意破坏",
  Fs = () => "Eindeutiges Griefing",
  Ws = () => "Griefing evidente",
  Js = () => "Griefing manifeste",
  Xs = () => "Griefing evidente",
  Qs = () => "明確なグリーフィング",
  Ys = () => "Oczywisty griefing",
  eu = () => "Явное гриферство",
  ru = () => "Явний грифінг",
  nu = () => "Griefing rõ ràng",
  tu = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Zs() : e === "pt" ? Vs() : e === "ch" ? Os() : e === "de" ? Fs() : e === "es" ? Ws() : e === "fr" ? Js() : e === "it" ? Xs() : e === "jp" ? Qs() : e === "pl" ? Ys() : e === "ru" ? eu() : e === "uk" ? ru() : nu()
  },
  iu = () => "Cases of clear griefing (such as scribbling over someone's artwork with no creative intent, or deliberately disrupting it by placing random pixels) are <strong>subject to moderation intervention</strong>.",
  ou = () => "Casos de griefing evidente (como rabiscar por cima da arte de alguém sem intenção criativa, ou interrompê-la deliberadamente colocando pixels aleatórios) estão <strong>sujeitos a intervenção da moderação</strong>.",
  su = () => "明确的恶意破坏行为（例如毫无创意目的地在他人作品上乱涂，或故意放置随机像素进行破坏）将<strong>受到管理介入</strong>。",
  uu = () => "Fälle von eindeutigem Griefing (wie z. B. Kritzeln über Kunstwerke anderer ohne kreative Absicht oder das absichtliche Stören durch Platzieren zufälliger Pixel) <strong>unterliegen moderativen Maßnahmen</strong>.",
  au = () => "Los casos de griefing evidente (como garabatear sobre la obra de alguien sin intención creativa, o alterarla deliberadamente colocando píxeles aleatorios) están <strong>sujetos a intervención de moderación</strong>.",
  _u = () => "Les cas de griefing manifeste (comme gribouiller sur l'œuvre de quelqu'un sans intention créative, ou la perturber délibérément en plaçant des pixels aléatoires) sont <strong>soumis à une intervention de la modération</strong>.",
  lu = () => "I casi di griefing evidente (come scarabocchiare sopra l'opera di qualcuno senza intento creativo, o disturbarla deliberatamente piazzando pixel casuali) sono <strong>soggetti a intervento della moderazione</strong>.",
  cu = () => "明確なグリーフィング（他人の作品に創造的な意図なく落書きする、ランダムなピクセルを置いて意図的に妨害するなど）は、<strong>モデレーションの介入対象</strong>となります。",
  du = () => "Przypadki oczywistego griefingu (takie jak bazgranie po cudzej grafice bez intencji twórczej lub celowe zakłócanie jej losowymi pikselami) <strong>podlegają interwencji moderacji</strong>.",
  gu = () => "Случаи явного гриферства (например, черкание поверх чьего-то рисунка без творческого намерения или намеренное его разрушение случайными пикселями) <strong>подлежат модераторскому вмешательству</strong>.",
  pu = () => "Випадки явного грифінгу (такі як замальовування чужого малюнка без творчого наміру або навмисне порушення за допомогою випадкових пікселів) <strong>підлягають модераторському втручанню</strong>.",
  fu = () => "Các trường hợp griefing rõ ràng (như vẽ bậy lên tác phẩm của người khác mà không có ý sáng tạo, hoặc cố tình phá hoại bằng cách đặt pixel ngẫu nhiên) <strong>sẽ bị can thiệp kiểm duyệt</strong>.",
  mu = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? iu() : e === "pt" ? ou() : e === "ch" ? su() : e === "de" ? uu() : e === "es" ? au() : e === "fr" ? _u() : e === "it" ? lu() : e === "jp" ? cu() : e === "pl" ? du() : e === "ru" ? gu() : e === "uk" ? pu() : fu()
  },
  vu = () => "Gray area",
  hu = () => "Área cinzenta",
  bu = () => "灰色地带",
  xu = () => "Grauzone",
  ku = () => "Zona gris",
  wu = () => "Zone grise",
  zu = () => "Zona grigia",
  yu = () => "グレーゾーン",
  ju = () => "Szara strefa",
  Cu = () => "Серая зона",
  $u = () => "Сіра зона",
  Du = () => "Vùng xám",
  Pu = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? vu() : e === "pt" ? hu() : e === "ch" ? bu() : e === "de" ? xu() : e === "es" ? ku() : e === "fr" ? wu() : e === "it" ? zu() : e === "jp" ? yu() : e === "pl" ? ju() : e === "ru" ? Cu() : e === "uk" ? $u() : Du()
  },
  Su = () => "Actions that alter or disrupt artwork but may have <strong>multiple valid interpretations</strong>, such as territorial expansion, cleanup, or style changes. <strong>These are not automatically griefing</strong>. However, if the behavior becomes excessive, targeted, or clearly disruptive over time, moderators may intervene.",
  Gu = () => "Ações que alteram ou perturbam artes, mas que podem ter <strong>múltiplas interpretações válidas</strong>, como expansão territorial, limpeza ou mudanças de estilo. <strong>Isso não é automaticamente griefing</strong>. No entanto, se o comportamento se tornar excessivo, direcionado ou claramente prejudicial ao longo do tempo, os moderadores poderão intervir.",
  qu = () => "改变或干扰作品但可能具有<strong>多种合理解读</strong>的行为，例如领地扩张、清理或风格变更。<strong>这些不会自动被视为恶意破坏</strong>。但如果行为变得过度、有针对性或随着时间推移明显具有破坏性，管理员可能会介入。",
  Uu = () => "Aktionen, die Kunstwerke verändern oder stören, aber <strong>mehrere gültige Interpretationen</strong> haben können, wie z. B. Gebietserweiterung, Bereinigung oder Stiländerungen. <strong>Dies ist nicht automatisch Griefing</strong>. Wenn das Verhalten jedoch übermäßig, gezielt oder im Laufe der Zeit eindeutig störend wird, können Moderatoren eingreifen.",
  Lu = () => "Acciones que alteran o interrumpen obras pero pueden tener <strong>múltiples interpretaciones válidas</strong>, como expansión territorial, limpieza o cambios de estilo. <strong>Esto no es automáticamente griefing</strong>. Sin embargo, si el comportamiento se vuelve excesivo, dirigido o claramente disruptivo con el tiempo, los moderadores pueden intervenir.",
  Au = () => "Actions qui modifient ou perturbent une œuvre mais peuvent avoir <strong>plusieurs interprétations valides</strong>, comme l'expansion territoriale, le nettoyage ou les changements de style. <strong>Ce n'est pas automatiquement du griefing</strong>. Cependant, si le comportement devient excessif, ciblé ou clairement perturbateur au fil du temps, les modérateurs peuvent intervenir.",
  Nu = () => "Azioni che alterano o disturbano un'opera ma possono avere <strong>molteplici interpretazioni valide</strong>, come espansione territoriale, pulizia o cambiamenti di stile. <strong>Queste non sono automaticamente griefing</strong>. Tuttavia, se il comportamento diventa eccessivo, mirato o chiaramente disturbante nel tempo, i moderatori possono intervenire.",
  Iu = () => "作品を変更・妨害するが、領土拡大、清掃、スタイル変更など<strong>複数の正当な解釈が可能な</strong>行為。<strong>これらは自動的にグリーフィングとはみなされません</strong>。ただし、行為が過剰になったり、特定の相手を標的にしたり、時間をかけて明らかに妨害的であったりする場合は、モデレーターが介入することがあります。",
  Ru = () => "Działania, które zmieniają lub zakłócają grafikę, ale mogą mieć <strong>wiele uzasadnionych interpretacji</strong>, takie jak ekspansja terytorialna, sprzątanie lub zmiana stylu. <strong>Nie są one automatycznie uznawane za griefing</strong>. Jednakże, jeśli zachowanie staje się nadmierne, celowe lub wyraźnie destrukcyjne z czasem, moderatorzy mogą interweniować.",
  Mu = () => "Действия, которые изменяют или нарушают рисунок, но могут иметь <strong>несколько допустимых интерпретаций</strong>, такие как территориальное расширение, очистка или смена стиля. <strong>Это автоматически не является гриферством</strong>. Однако если поведение становится чрезмерным, целенаправленным или явно деструктивным со временем, модераторы могут вмешаться.",
  Tu = () => "Дії, які змінюють або порушують малюнки, але можуть мати <strong>кілька правомірних тлумачень</strong>, такі як розширення території, очищення або зміна стилю. <strong>Це не є автоматичним грифінгом</strong>. Однак, якщо поведінка стає надмірною, цілеспрямованою або явно деструктивною з часом, модератори можуть втрутитися.",
  Bu = () => "Các hành động thay đổi hoặc phá vỡ tác phẩm nhưng có thể có <strong>nhiều cách hiểu hợp lý</strong>, chẳng hạn như mở rộng lãnh thổ, dọn dẹp hoặc thay đổi phong cách. <strong>Những hành động này không tự động được coi là griefing</strong>. Tuy nhiên, nếu hành vi trở nên quá mức, nhắm vào mục tiêu cụ thể hoặc rõ ràng gây phá hoại theo thời gian, quản trị viên có thể can thiệp.",
  Eu = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Su() : e === "pt" ? Gu() : e === "ch" ? qu() : e === "de" ? Uu() : e === "es" ? Lu() : e === "fr" ? Au() : e === "it" ? Nu() : e === "jp" ? Iu() : e === "pl" ? Ru() : e === "ru" ? Mu() : e === "uk" ? Tu() : Bu()
  },
  Ku = () => "Griefing means taking actions on the map <strong>solely to harass or frustrate</strong> other players, with no creative, strategic, or corrective purpose.",
  Hu = () => "Griefing significa realizar ações no mapa <strong>unicamente para assediar ou frustrar</strong> outros jogadores, sem nenhum propósito criativo, estratégico ou corretivo.",
  Zu = () => "恶意破坏指在地图上<strong>仅以骚扰或激怒</strong>其他玩家为目的的行为，不具有任何创意、战略或纠正目的。",
  Vu = () => "Griefing bedeutet, auf der Karte Aktionen durchzuführen, die <strong>ausschließlich dazu dienen, andere Spieler zu belästigen oder zu frustrieren</strong>, ohne kreativen, strategischen oder korrektiven Zweck.",
  Ou = () => "Griefing significa realizar acciones en el mapa <strong>únicamente para acosar o frustrar</strong> a otros jugadores, sin ningún propósito creativo, estratégico o correctivo.",
  Fu = () => "Le griefing consiste à effectuer des actions sur la carte <strong>dans le seul but de harceler ou de frustrer</strong> d'autres joueurs, sans aucun objectif créatif, stratégique ou correctif.",
  Wu = () => "Griefing significa compiere azioni sulla mappa <strong>al solo scopo di molestare o frustrare</strong> gli altri giocatori, senza alcun intento creativo, strategico o correttivo.",
  Ju = () => "グリーフィングとは、創造的、戦略的、または修正的な目的を持たず、<strong>他のプレイヤーを嫌がらせたり苛立たせたりすることだけを目的として</strong>マップ上で行う行為を指します。",
  Xu = () => "Griefing oznacza podejmowanie działań na mapie <strong>wyłącznie w celu nękania lub frustrowania</strong> innych graczy, bez żadnego twórczego, strategicznego ani korekcyjnego celu.",
  Qu = () => "Гриферство — это действия на карте, совершаемые <strong>исключительно с целью досадить или разозлить</strong> других игроков, без какого-либо творческого, стратегического или корректирующего намерения.",
  Yu = () => "Грифінг означає дії на карті, <strong>спрямовані виключно на те, щоб дратувати чи засмучувати</strong> інших гравців, без жодного творчого, стратегічного чи коригувального наміру.",
  ea = () => "Griefing có nghĩa là thực hiện các hành động trên bản đồ <strong>chỉ nhằm quấy rối hoặc gây bực bội</strong> cho người chơi khác, không có mục đích sáng tạo, chiến lược hay chỉnh sửa.",
  ra = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ku() : e === "pt" ? Hu() : e === "ch" ? Zu() : e === "de" ? Vu() : e === "es" ? Ou() : e === "fr" ? Fu() : e === "it" ? Wu() : e === "jp" ? Ju() : e === "pl" ? Xu() : e === "ru" ? Qu() : e === "uk" ? Yu() : ea()
  },
  na = () => "Using transparent pixels to remove spam, repetitive patterns, inappropriate or suggestive content is allowed.",
  ta = () => "Usar pixels transparentes para remover spam, padrões repetitivos, conteúdo inapropriado ou sugestivo é permitido.",
  ia = () => "使用透明像素移除垃圾内容、重复图案、不当或暗示性内容是被允许的。",
  oa = () => "Die Verwendung von transparenten Pixeln zum Entfernen von Spam, sich wiederholenden Mustern, unangemessenen oder anzüglichen Inhalten ist erlaubt.",
  sa = () => "Usar píxeles transparentes para eliminar spam, patrones repetitivos, contenido inapropiado o sugerente está permitido.",
  ua = () => "L'utilisation de pixels transparents pour supprimer le spam, les motifs répétitifs, le contenu inapproprié ou suggestif est autorisée.",
  aa = () => "Utilizzare pixel trasparenti per rimuovere spam, pattern ripetitivi, contenuti inappropriati o allusivi è consentito.",
  _a = () => "透明ピクセルを使って、スパム、繰り返しパターン、不適切または性的示唆の強いコンテンツを除去することは許可されています。",
  la = () => "Używanie przezroczystych pikseli do usuwania spamu, powtarzalnych wzorów, nieodpowiednich lub sugestywnych treści jest dozwolone.",
  ca = () => "Использование прозрачных пикселей для удаления спама, повторяющихся узоров, неприемлемого или откровенного контента разрешено.",
  da = () => "Використання прозорих пікселів для видалення спаму, повторюваних візерунків, неприйнятного або відвертого контенту дозволено.",
  ga = () => "Sử dụng pixel trong suốt để xóa spam, mẫu lặp lại, nội dung không phù hợp hoặc khiêu gợi là được phép.",
  pa = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? na() : e === "pt" ? ta() : e === "ch" ? ia() : e === "de" ? oa() : e === "es" ? sa() : e === "fr" ? ua() : e === "it" ? aa() : e === "jp" ? _a() : e === "pl" ? la() : e === "ru" ? ca() : e === "uk" ? da() : ga()
  },
  fa = () => "Map Cleanup",
  ma = () => "Limpeza do Mapa",
  va = () => "地图清理",
  ha = () => "Kartenbereinigung",
  ba = () => "Limpieza del Mapa",
  xa = () => "Nettoyage de la carte",
  ka = () => "Pulizia della mappa",
  wa = () => "マップの清掃",
  za = () => "Sprzątanie mapy",
  ya = () => "Очистка карты",
  ja = () => "Очищення карти",
  Ca = () => "Dọn dẹp bản đồ",
  $a = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? fa() : e === "pt" ? ma() : e === "ch" ? va() : e === "de" ? ha() : e === "es" ? ba() : e === "fr" ? xa() : e === "it" ? ka() : e === "jp" ? wa() : e === "pl" ? za() : e === "ru" ? ya() : e === "uk" ? ja() : Ca()
  },
  Da = () => "<strong>One account per person.</strong> Using bots, scripts, browser automation, or any exploit to gain an unfair advantage is strictly prohibited.<br><strong>Warning:</strong> sharing a device with family or other people can cause accounts to be flagged as multi-accounting and result in suspension.",
  Pa = () => "<strong>Uma conta por pessoa.</strong> Usar bots, scripts, automação de navegador ou qualquer exploit para obter vantagem injusta é estritamente proibido.<br><strong>Aviso:</strong> compartilhar um dispositivo com familiares ou outras pessoas pode fazer com que contas sejam sinalizadas como multi-contas e resultar em suspensão.",
  Sa = () => "<strong>每人只能使用一个账号。</strong>使用机器人、脚本、浏览器自动化或任何漏洞获取不公平优势的行为严格禁止。<br><strong>警告：</strong>与家人或他人共用设备可能导致账号被标记为多账号并被封禁。",
  Ga = () => "<strong>Ein Konto pro Person.</strong> Die Verwendung von Bots, Skripten, Browser-Automatisierung oder sonstigen Exploits, um einen unfairen Vorteil zu erlangen, ist strengstens verboten.<br><strong>Warnung:</strong> Wenn du ein Gerät mit Familienmitgliedern oder anderen Personen teilst, können Konten als Multi-Accounting markiert und gesperrt werden.",
  qa = () => "<strong>Una cuenta por persona.</strong> Usar bots, scripts, automatización de navegador o cualquier exploit para obtener una ventaja injusta está estrictamente prohibido.<br><strong>Advertencia:</strong> compartir un dispositivo con familiares u otras personas puede hacer que las cuentas sean marcadas como multicuenta y resulten en suspensión.",
  Ua = () => "<strong>Un seul compte par personne.</strong> L'utilisation de bots, de scripts, d'automatisation de navigateur ou de toute exploitation de faille pour obtenir un avantage déloyal est strictement interdite.<br><strong>Avertissement :</strong> partager un appareil avec sa famille ou d'autres personnes peut entraîner le signalement des comptes comme multi-comptes et leur suspension.",
  La = () => "<strong>Un account per persona.</strong> L'uso di bot, script, automazione del browser o qualsiasi exploit per ottenere un vantaggio sleale è severamente vietato.<br><strong>Attenzione:</strong> condividere un dispositivo con familiari o altre persone può far sì che gli account vengano segnalati come multi-account e portare a una sospensione.",
  Aa = () => "<strong>1人につき1アカウント。</strong>ボット、スクリプト、ブラウザ自動化、またはその他のエクスプロイトを使用して不当な優位を得ることは厳しく禁止されています。<br><strong>警告：</strong>家族や他の人とデバイスを共有すると、アカウントがマルチアカウントとして検出され、利用停止になる可能性があります。",
  Na = () => "<strong>Jedno konto na osobę.</strong> Używanie botów, skryptów, automatyzacji przeglądarki lub jakichkolwiek exploitów w celu uzyskania nieuczciwej przewagi jest surowo zabronione.<br><strong>Ostrzeżenie:</strong> dzielenie urządzenia z rodziną lub innymi osobami może spowodować oznaczenie kont jako multi-konta i ich zawieszenie.",
  Ia = () => "<strong>Один аккаунт на человека.</strong> Использование ботов, скриптов, автоматизации браузера или любых эксплойтов для получения нечестного преимущества строго запрещено.<br><strong>Предупреждение:</strong> совместное использование устройства с членами семьи или другими людьми может привести к тому, что аккаунты будут помечены как мультиаккаунты и заблокированы.",
  Ra = () => "<strong>Один акаунт на людину.</strong> Використання ботів, скриптів, автоматизації браузера або будь-яких експлойтів для отримання нечесної переваги суворо заборонено.<br><strong>Попередження:</strong> спільне використання пристрою з родиною або іншими людьми може призвести до того, що акаунти будуть позначені як мультиакаунти та заблоковані.",
  Ma = () => "<strong>Mỗi người một tài khoản.</strong> Sử dụng bot, script, tự động hóa trình duyệt hoặc bất kỳ lỗi khai thác nào để có lợi thế không công bằng đều bị nghiêm cấm.<br><strong>Cảnh báo:</strong> chia sẻ thiết bị với gia đình hoặc người khác có thể khiến tài khoản bị gắn cờ là đa tài khoản và dẫn đến đình chỉ.",
  Ta = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Da() : e === "pt" ? Pa() : e === "ch" ? Sa() : e === "de" ? Ga() : e === "es" ? qa() : e === "fr" ? Ua() : e === "it" ? La() : e === "jp" ? Aa() : e === "pl" ? Na() : e === "ru" ? Ia() : e === "uk" ? Ra() : Ma()
  },
  Ba = () => "Suggestive Content",
  Ea = () => "Conteúdo Sugestivo",
  Ka = () => "暗示性内容",
  Ha = () => "Anzügliche Inhalte",
  Za = () => "Contenido Sugerente",
  Va = () => "Contenu suggestif",
  Oa = () => "Contenuto allusivo",
  Fa = () => "性的示唆のあるコンテンツ",
  Wa = () => "Treści sugestywne",
  Ja = () => "Откровенный контент",
  Xa = () => "Відвертий контент",
  Qa = () => "Nội dung khiêu gợi",
  Ya = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ba() : e === "pt" ? Ea() : e === "ch" ? Ka() : e === "de" ? Ha() : e === "es" ? Za() : e === "fr" ? Va() : e === "it" ? Oa() : e === "jp" ? Fa() : e === "pl" ? Wa() : e === "ru" ? Ja() : e === "uk" ? Xa() : Qa()
  },
  e_ = () => "Drawing in this category <strong>shouldn't lead to suspensions</strong>. However, <strong>the community is free clean up or paint over these artworks</strong>. Includes drawings with sexual undertones that don't cross into explicit territory (no genitalia, sexual acts, or sexual fluids).",
  r_ = () => "Desenhos nesta categoria <strong>não devem levar a suspensões</strong>. No entanto, <strong>a comunidade é livre para limpar ou pintar por cima dessas artes</strong>. Inclui desenhos com conotações sexuais que não chegam a ser explícitos (sem genitália, atos sexuais ou fluidos sexuais).",
  n_ = () => "此类别中的绘画<strong>不应导致暂停</strong>。但是，<strong>社区可以自由清理或覆盖这些作品</strong>。包括具有性暗示但未达到露骨程度的绘画（无生殖器、性行为或性液体）。",
  t_ = () => "Zeichnungen in dieser Kategorie <strong>sollten nicht zu Sperren führen</strong>. Allerdings <strong>ist es der Community erlaubt, diese Kunstwerke zu entfernen oder zu übermalen</strong>. Dazu gehören Zeichnungen mit sexuellen Untertönen, die nicht in explizites Gebiet vordringen (keine Genitalien, sexuelle Handlungen oder sexuelle Flüssigkeiten).",
  i_ = () => "Dibujar en esta categoría <strong>no debería llevar a suspensiones</strong>. Sin embargo, <strong>la comunidad es libre de limpiar o pintar sobre estas obras</strong>. Incluye dibujos con insinuaciones sexuales que no cruzan al territorio explícito (sin genitales, actos sexuales ni fluidos sexuales).",
  o_ = () => "Les dessins de cette catégorie <strong>ne devraient pas entraîner de suspension</strong>. Cependant, <strong>la communauté est libre de nettoyer ou de peindre par-dessus ces œuvres</strong>. Cela inclut les dessins à connotation sexuelle qui ne franchissent pas la limite du contenu explicite (pas d'organes génitaux, d'actes sexuels ni de fluides sexuels).",
  s_ = () => "I disegni in questa categoria <strong>non dovrebbero portare a sospensioni</strong>. Tuttavia, <strong>la community è libera di ripulire o dipingere sopra queste opere</strong>. Include disegni con sottotoni sessuali che non superano il limite dell'esplicito (nessun genitale, atto sessuale o fluido sessuale).",
  u_ = () => "このカテゴリの描画は<strong>停止処分の対象にはなりません</strong>。ただし、<strong>コミュニティはこれらの作品を自由に消去・上書きできます</strong>。露骨な表現（性器、性行為、体液）には至らないが、性的なニュアンスを含む描画が該当します。",
  a_ = () => "Rysunki z tej kategorii <strong>nie powinny prowadzić do zawieszeń</strong>. Jednakże <strong>społeczność może swobodnie usuwać lub zamalowywać te grafiki</strong>. Obejmuje rysunki o podtekście seksualnym, które nie przekraczają granicy treści jednoznacznych (brak genitaliów, aktów seksualnych czy płynów seksualnych).",
  __ = () => "Рисунки в этой категории <strong>не должны приводить к блокировке</strong>. Однако <strong>сообщество вправе убирать или закрашивать такие рисунки</strong>. Включает рисунки с сексуальным подтекстом, не переходящие в откровенную территорию (без гениталий, половых актов или половых жидкостей).",
  l_ = () => "Малюнки з цієї категорії <strong>не повинні призводити до блокувань</strong>. Однак <strong>спільнота має повне право очистити чи замалювати такі роботи</strong>. Включає малюнки з сексуальним підтекстом, які не переходять у відверту територію (без геніталій, статевих актів чи статевих рідин).",
  c_ = () => "Vẽ trong danh mục này <strong>không nên dẫn đến đình chỉ</strong>. Tuy nhiên, <strong>cộng đồng được tự do dọn dẹp hoặc tô đè lên các tác phẩm này</strong>. Bao gồm các bức vẽ có ẩn ý tình dục nhưng không vượt qua ranh giới khiêu dâm (không có bộ phận sinh dục, hành vi tình dục hay dịch thể tình dục).",
  d_ = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? e_() : e === "pt" ? r_() : e === "ch" ? n_() : e === "de" ? t_() : e === "es" ? i_() : e === "fr" ? o_() : e === "it" ? s_() : e === "jp" ? u_() : e === "pl" ? a_() : e === "ru" ? __() : e === "uk" ? l_() : c_()
  },
  g_ = () => "Space is limited. Players and communities will compete for territory, and that's not just allowed, it's what keeps the map alive. Claiming, defending, and reclaiming space is core gameplay.",
  p_ = () => "O espaço é limitado. Jogadores e comunidades vão competir por território, e isso não é apenas permitido, é o que mantém o mapa vivo. Conquistar, defender e retomar espaço faz parte da jogabilidade principal.",
  f_ = () => "空间有限。玩家和社区会争夺领地，这不仅被允许，更是让地图保持活力的关键。占领、防守和夺回空间是核心玩法。",
  m_ = () => "Der Platz ist begrenzt. Spieler und Communities werden um Gebiete konkurrieren, und das ist nicht nur erlaubt, es hält die Karte lebendig. Gebiete beanspruchen, verteidigen und zurückerobern ist Teil des Kernspiels.",
  v_ = () => "El espacio es limitado. Los jugadores y comunidades competirán por territorio, y eso no solo está permitido, es lo que mantiene el mapa vivo. Reclamar, defender y reconquistar espacio es parte esencial del juego.",
  h_ = () => "L'espace est limité. Les joueurs et les communautés se disputeront le territoire, et ce n'est pas seulement autorisé, c'est ce qui fait vivre la carte. Revendiquer, défendre et reconquérir l'espace fait partie du gameplay de base.",
  b_ = () => "Lo spazio è limitato. I giocatori e le community competeranno per il territorio, e questo non è solo consentito, è ciò che mantiene viva la mappa. Conquistare, difendere e riconquistare spazio è il gameplay fondamentale.",
  x_ = () => "スペースには限りがあります。プレイヤーやコミュニティは領土をめぐって競い合います。これは許可されているだけでなく、マップを活気づける要素です。スペースの確保、防衛、奪還はゲームの基本です。",
  k_ = () => "Przestrzeń jest ograniczona. Gracze i społeczności będą rywalizować o terytorium — i to nie tylko jest dozwolone, to właśnie utrzymuje mapę przy życiu. Zajmowanie, obrona i odzyskiwanie przestrzeni to podstawowa rozgrywka.",
  w_ = () => "Пространство ограничено. Игроки и сообщества будут конкурировать за территорию, и это не просто разрешено — это то, что поддерживает карту живой. Захват, оборона и отвоевание территории — основная механика игры.",
  z_ = () => "Простір обмежений. Гравці та спільноти змагатимуться за територію, і це не лише дозволено — це те, що підтримує карту живою. Захоплення, оборона та відвоювання простору є основою геймплею.",
  y_ = () => "Không gian có hạn. Người chơi và cộng đồng sẽ cạnh tranh lãnh thổ, và điều đó không chỉ được phép — nó là thứ giữ cho bản đồ sống động. Chiếm, bảo vệ và giành lại không gian là cách chơi cốt lõi.",
  j_ = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? g_() : e === "pt" ? p_() : e === "ch" ? f_() : e === "de" ? m_() : e === "es" ? v_() : e === "fr" ? h_() : e === "it" ? b_() : e === "jp" ? x_() : e === "pl" ? k_() : e === "ru" ? w_() : e === "uk" ? z_() : y_()
  },
  C_ = () => "Territorial Disputes",
  $_ = () => "Disputas Territoriais",
  D_ = () => "领地争夺",
  P_ = () => "Gebietskonflikte",
  S_ = () => "Disputas Territoriales",
  G_ = () => "Disputes territoriales",
  q_ = () => "Dispute territoriali",
  U_ = () => "領土紛争",
  L_ = () => "Spory terytorialne",
  A_ = () => "Территориальные споры",
  N_ = () => "Територіальні спори",
  I_ = () => "Tranh chấp lãnh thổ",
  R_ = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? C_() : e === "pt" ? $_() : e === "ch" ? D_() : e === "de" ? P_() : e === "es" ? S_() : e === "fr" ? G_() : e === "it" ? q_() : e === "jp" ? U_() : e === "pl" ? L_() : e === "ru" ? A_() : e === "uk" ? N_() : I_()
  },
  M_ = () => "Painting over other players' work is a normal part of the game. If your intent isn't to only harass or deliberately frustrate someone, moderators won't intervene.",
  T_ = () => "Pintar por cima do trabalho de outros jogadores é uma parte normal do jogo. Se sua intenção não for apenas assediar ou frustrar alguém deliberadamente, os moderadores não irão intervir.",
  B_ = () => "覆盖其他玩家的作品是游戏的正常组成部分。如果你的目的不仅仅是骚扰或故意激怒他人，管理员不会介入。",
  E_ = () => "Das Übermalen der Arbeit anderer Spieler ist ein normaler Teil des Spiels. Wenn deine Absicht nicht darin besteht, jemanden nur zu belästigen oder absichtlich zu frustrieren, werden Moderatoren nicht eingreifen.",
  K_ = () => "Pintar sobre el trabajo de otros jugadores es una parte normal del juego. Si tu intención no es solo acosar o frustrar deliberadamente a alguien, los moderadores no intervendrán.",
  H_ = () => "Peindre par-dessus le travail d'autres joueurs fait partie intégrante du jeu. Si votre intention n'est pas uniquement de harceler ou de frustrer délibérément quelqu'un, les modérateurs n'interviendront pas.",
  Z_ = () => "Dipingere sopra il lavoro di altri giocatori è una parte normale del gioco. Se il tuo intento non è solo quello di molestare o frustrare deliberatamente qualcuno, i moderatori non interverranno.",
  V_ = () => "他のプレイヤーの作品の上にペイントすることは、ゲームの通常の一部です。あなたの意図が単に嫌がらせや故意に苛立たせることでなければ、モデレーターは介入しません。",
  O_ = () => "Zamalowywanie prac innych graczy jest normalną częścią gry. Jeśli Twoim celem nie jest wyłącznie nękanie lub celowe frustrowanie kogoś, moderatorzy nie będą interweniować.",
  F_ = () => "Рисование поверх работ других игроков — нормальная часть игры. Если ваша цель не состоит исключительно в том, чтобы досадить или намеренно расстроить кого-то, модераторы не вмешаются.",
  W_ = () => "Малювання поверх робіт інших гравців є нормальною частиною гри. Якщо ваш намір — не лише дратувати чи навмисно засмучувати когось, модератори не втручатимуться.",
  J_ = () => "Tô đè lên tác phẩm của người chơi khác là một phần bình thường của trò chơi. Nếu mục đích của bạn không phải chỉ để quấy rối hay cố tình gây bực bội ai đó, quản trị viên sẽ không can thiệp.",
  X_ = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? M_() : e === "pt" ? T_() : e === "ch" ? B_() : e === "de" ? E_() : e === "es" ? K_() : e === "fr" ? H_() : e === "it" ? Z_() : e === "jp" ? V_() : e === "pl" ? O_() : e === "ru" ? F_() : e === "uk" ? W_() : J_()
  },
  Q_ = () => "Zero-tolerance content",
  Y_ = () => "Conteúdo de tolerância zero",
  el = () => "零容忍内容",
  rl = () => "Null-Toleranz-Inhalte",
  nl = () => "Contenido de tolerancia cero",
  tl = () => "Contenu à tolérance zéro",
  il = () => "Contenuti a tolleranza zero",
  ol = () => "ゼロトレランスコンテンツ",
  sl = () => "Treści objęte zerową tolerancją",
  ul = () => "Контент с нулевой терпимостью",
  al = () => "Контент з нульовою толерантністю",
  _l = () => "Nội dung không khoan nhượng",
  ll = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Q_() : e === "pt" ? Y_() : e === "ch" ? el() : e === "de" ? rl() : e === "es" ? nl() : e === "fr" ? tl() : e === "it" ? il() : e === "jp" ? ol() : e === "pl" ? sl() : e === "ru" ? ul() : e === "uk" ? al() : _l()
  },
  cl = () => "The following content is subject to moderation intervention and can result in a <strong>permanent ban</strong>:",
  dl = () => "O seguinte conteúdo está sujeito a intervenção da moderação e pode resultar em <strong>banimento permanente</strong>:",
  gl = () => "以下内容将受到管理介入，并可能导致<strong>永久封禁</strong>：",
  pl = () => "Die folgenden Inhalte unterliegen moderativen Maßnahmen und können zu einem <strong>permanenten Bann</strong> führen:",
  fl = () => "El siguiente contenido está sujeto a intervención de moderación y puede resultar en un <strong>ban permanente</strong>:",
  ml = () => "Le contenu suivant est soumis à une intervention de la modération et peut entraîner un <strong>bannissement permanent</strong> :",
  vl = () => "I seguenti contenuti sono soggetti a intervento della moderazione e possono comportare un <strong>ban permanente</strong>:",
  hl = () => "以下のコンテンツはモデレーションの対象となり、<strong>永久BAN</strong>になる場合があります:",
  bl = () => "Poniższe treści podlegają interwencji moderacji i mogą skutkować <strong>permanentnym banem</strong>:",
  xl = () => "Следующий контент подлежит модераторскому вмешательству и может привести к <strong>перманентному бану</strong>:",
  kl = () => "Наступний контент підлягає модераторському втручанню і може призвести до <strong>перманентного бану</strong>:",
  wl = () => "Các nội dung sau đây sẽ bị can thiệp kiểm duyệt và có thể dẫn đến <strong>cấm vĩnh viễn</strong>:",
  zl = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? cl() : e === "pt" ? dl() : e === "ch" ? gl() : e === "de" ? pl() : e === "es" ? fl() : e === "fr" ? ml() : e === "it" ? vl() : e === "jp" ? hl() : e === "pl" ? bl() : e === "ru" ? xl() : e === "uk" ? kl() : wl()
  },
  yl = () => "Doxxing (sharing anyone's private personal information)",
  jl = () => "Doxxing (compartilhar informações pessoais privadas de qualquer pessoa)",
  Cl = () => "人肉搜索（分享任何人的私人个人信息）",
  $l = () => "Doxxing (Veröffentlichung persönlicher Informationen anderer)",
  Dl = () => "Doxxing (compartir información personal privada de cualquier persona)",
  Pl = () => "Doxxing (partage d'informations personnelles privées de quiconque)",
  Sl = () => "Doxxing (condivisione di informazioni personali private di chiunque)",
  Gl = () => "ドキシング（他人の個人情報の共有）",
  ql = () => "Doxxing (udostępnianie prywatnych danych osobowych innych osób)",
  Ul = () => "Доксинг (распространение чьей-либо личной информации)",
  Ll = () => "Доксинг (поширення приватної особистої інформації будь-кого)",
  Al = () => "Doxxing (chia sẻ thông tin cá nhân riêng tư của bất kỳ ai)",
  Nl = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? yl() : e === "pt" ? jl() : e === "ch" ? Cl() : e === "de" ? $l() : e === "es" ? Dl() : e === "fr" ? Pl() : e === "it" ? Sl() : e === "jp" ? Gl() : e === "pl" ? ql() : e === "ru" ? Ul() : e === "uk" ? Ll() : Al()
  },
  Il = () => "Explicit sexual content (genitalia, sexual acts, sexual fluids)",
  Rl = () => "Conteúdo sexual explícito (genitália, atos sexuais, fluidos sexuais)",
  Ml = () => "露骨的色情内容（生殖器、性行为、性液体）",
  Tl = () => "Explizit sexuelle Inhalte (Genitalien, sexuelle Handlungen, sexuelle Flüssigkeiten)",
  Bl = () => "Contenido sexual explícito (genitales, actos sexuales, fluidos sexuales)",
  El = () => "Contenu sexuel explicite (organes génitaux, actes sexuels, fluides sexuels)",
  Kl = () => "Contenuto sessuale esplicito (genitali, atti sessuali, fluidi sessuali)",
  Hl = () => "露骨な性的コンテンツ（性器、性行為、体液）",
  Zl = () => "Jednoznaczne treści seksualne (genitalia, akty seksualne, płyny seksualne)",
  Vl = () => "Откровенный сексуальный контент (гениталии, половые акты, половые жидкости)",
  Ol = () => "Відверто сексуальний контент (геніталії, статеві акти, статеві рідини)",
  Fl = () => "Nội dung tình dục rõ ràng (bộ phận sinh dục, hành vi tình dục, dịch thể tình dục)",
  Wl = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Il() : e === "pt" ? Rl() : e === "ch" ? Ml() : e === "de" ? Tl() : e === "es" ? Bl() : e === "fr" ? El() : e === "it" ? Kl() : e === "jp" ? Hl() : e === "pl" ? Zl() : e === "ru" ? Vl() : e === "uk" ? Ol() : Fl()
  },
  Jl = () => "Extreme graphic gore or realistic violence",
  Xl = () => "Gore gráfico extremo ou violência realista",
  Ql = () => "极端血腥或写实暴力内容",
  Yl = () => "Extremer grafischer Gore oder realistische Gewalt",
  ec = () => "Gore gráfico extremo o violencia realista",
  rc = () => "Gore graphique extrême ou violence réaliste",
  nc = () => "Gore grafico estremo o violenza realistica",
  tc = () => "極度にグロテスクな描写やリアルな暴力表現",
  ic = () => "Ekstremalnie drastyczne treści gore lub realistyczna przemoc",
  oc = () => "Чрезмерная графическая жестокость или реалистичное насилие",
  sc = () => "Екстремально жорстокі або реалістичні сцени насильства",
  uc = () => "Bạo lực đẫm máu cực đoan hoặc bạo lực chân thực",
  ac = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Jl() : e === "pt" ? Xl() : e === "ch" ? Ql() : e === "de" ? Yl() : e === "es" ? ec() : e === "fr" ? rc() : e === "it" ? nc() : e === "jp" ? tc() : e === "pl" ? ic() : e === "ru" ? oc() : e === "uk" ? sc() : uc()
  },
  _c = () => "Extreme hostility or targeted harassment toward others",
  lc = () => "Hostilidade extrema ou assédio direcionado a outros",
  cc = () => "对他人的极端敌意或针对性骚扰",
  dc = () => "Extreme Feindseligkeit oder gezielte Belästigung anderer",
  gc = () => "Hostilidad extrema o acoso dirigido hacia otros",
  pc = () => "Hostilité extrême ou harcèlement ciblé envers autrui",
  fc = () => "Ostilità estrema o molestie mirate verso altri",
  mc = () => "他者に対する極端な敵意や標的型の嫌がらせ",
  vc = () => "Skrajna wrogość lub ukierunkowane nękanie innych osób",
  hc = () => "Крайняя враждебность или целенаправленная травля других",
  bc = () => "Екстремальна ворожість або цілеспрямоване переслідування інших",
  xc = () => "Thái độ thù địch cực đoan hoặc quấy rối nhắm vào người khác",
  kc = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? _c() : e === "pt" ? lc() : e === "ch" ? cc() : e === "de" ? dc() : e === "es" ? gc() : e === "fr" ? pc() : e === "it" ? fc() : e === "jp" ? mc() : e === "pl" ? vc() : e === "ru" ? hc() : e === "uk" ? bc() : xc()
  },
  wc = () => "Clear hate speech, extreme slurs, or symbols of hate (e.g. swastikas)",
  zc = () => "Discurso de ódio evidente, ofensas extremas ou símbolos de ódio (ex.: suásticas)",
  yc = () => "明确的仇恨言论、极端侮辱性用语或仇恨符号（如纳粹符号）",
  jc = () => "Eindeutige Hassrede, extreme Beleidigungen oder Hasssymbole (z. B. Hakenkreuze)",
  Cc = () => "Discurso de odio claro, insultos extremos o símbolos de odio (ej. esvásticas)",
  $c = () => "Discours de haine manifeste, insultes extrêmes ou symboles haineux (ex. : croix gammées)",
  Dc = () => "Chiaro discorso d'odio, insulti estremi o simboli d'odio (es. svastiche)",
  Pc = () => "明確なヘイトスピーチ、極端な差別用語、またはヘイトシンボル（例: 鉤十字）",
  Sc = () => "Wyraźna mowa nienawiści, skrajne obelgi lub symbole nienawiści (np. swastyki)",
  Gc = () => "Явная речь ненависти, грубые оскорбления или символы ненависти (например, свастики)",
  qc = () => "Явна мова ненависті, образливі слова або символи ненависті (напр. свастики)",
  Uc = () => "Ngôn từ thù hằn rõ ràng, từ ngữ xúc phạm nặng hoặc biểu tượng thù hận (ví dụ: chữ vạn)",
  Lc = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? wc() : e === "pt" ? zc() : e === "ch" ? yc() : e === "de" ? jc() : e === "es" ? Cc() : e === "fr" ? $c() : e === "it" ? Dc() : e === "jp" ? Pc() : e === "pl" ? Sc() : e === "ru" ? Gc() : e === "uk" ? qc() : Uc()
  },
  Ac = () => "Sexualization of minors or fictitious characters with child-like visual traits, regardless of their fictional age or lore",
  Nc = () => "Sexualização de menores ou personagens fictícios com traços visuais infantis, independentemente de sua idade ou história fictícia",
  Ic = () => "对未成年人或具有明显儿童外貌特征的虚构角色的性化描绘，无论其虚构年龄或设定如何",
  Rc = () => "Sexualisierung von Minderjährigen oder fiktiven Charakteren mit kindlichen visuellen Merkmalen, unabhängig von ihrem fiktiven Alter oder ihrer Geschichte",
  Mc = () => "Sexualización de menores o personajes ficticios con rasgos visuales infantiles, independientemente de su edad ficticia o historia",
  Tc = () => "Sexualisation de mineurs ou de personnages fictifs présentant des traits visuels enfantins, indépendamment de leur âge ou histoire fictifs",
  Bc = () => "Sessualizzazione di minori o personaggi fittizi con tratti visivi infantili, indipendentemente dalla loro età fittizia o storia",
  Ec = () => "未成年者、または架空の年齢や設定に関わらず、明らかに幼い外見的特徴を持つ架空のキャラクターの性的表現",
  Kc = () => "Seksualizacja nieletnich lub fikcyjnych postaci o dziecięcych cechach wizualnych, niezależnie od ich fikcyjnego wieku czy historii",
  Hc = () => "Сексуализация несовершеннолетних или вымышленных персонажей с визуальными детскими чертами, независимо от их вымышленного возраста или истории",
  Zc = () => "Сексуалізація неповнолітніх або вигаданих персонажів з візуальними дитячими рисами, незалежно від їхнього вигаданого віку чи історії",
  Vc = () => "Tình dục hóa trẻ vị thành niên hoặc các nhân vật hư cấu có đặc điểm ngoại hình trẻ em, bất kể tuổi hoặc cốt truyện hư cấu của họ",
  Oc = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ac() : e === "pt" ? Nc() : e === "ch" ? Ic() : e === "de" ? Rc() : e === "es" ? Mc() : e === "fr" ? Tc() : e === "it" ? Bc() : e === "jp" ? Ec() : e === "pl" ? Kc() : e === "ru" ? Hc() : e === "uk" ? Zc() : Vc()
  },
  Fc = () => "Rules",
  Wc = () => "Regras",
  Jc = () => "规则",
  Xc = () => "Regeln",
  Qc = () => "Reglas",
  Yc = () => "Règles",
  ed = () => "Regole",
  rd = () => "ルール",
  nd = () => "Zasady",
  td = () => "Правила",
  id = () => "Правила",
  od = () => "Luật",
  Bm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Fc() : e === "pt" ? Wc() : e === "ch" ? Jc() : e === "de" ? Xc() : e === "es" ? Qc() : e === "fr" ? Yc() : e === "it" ? ed() : e === "jp" ? rd() : e === "pl" ? nd() : e === "ru" ? td() : e === "uk" ? id() : od()
  },
  sd = () => "allowed",
  ud = () => "permitido",
  ad = () => "允许",
  _d = () => "erlaubt",
  ld = () => "permitido",
  cd = () => "autorisé",
  dd = () => "consentito",
  gd = () => "許可",
  pd = () => "dozwolone",
  fd = () => "разрешено",
  md = () => "дозволено",
  vd = () => "được phép",
  ze = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? sd() : e === "pt" ? ud() : e === "ch" ? ad() : e === "de" ? _d() : e === "es" ? ld() : e === "fr" ? cd() : e === "it" ? dd() : e === "jp" ? gd() : e === "pl" ? pd() : e === "ru" ? fd() : e === "uk" ? md() : vd()
  },
  hd = () => "permanent ban",
  bd = () => "banimento permanente",
  xd = () => "永久封禁",
  kd = () => "permanenter Bann",
  wd = () => "ban permanente",
  zd = () => "bannissement permanent",
  yd = () => "ban permanente",
  jd = () => "永久BAN",
  Cd = () => "permanentny ban",
  $d = () => "перманентный бан",
  Dd = () => "перманентний бан",
  Pd = () => "cấm vĩnh viễn",
  ye = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? hd() : e === "pt" ? bd() : e === "ch" ? xd() : e === "de" ? kd() : e === "es" ? wd() : e === "fr" ? zd() : e === "it" ? yd() : e === "jp" ? jd() : e === "pl" ? Cd() : e === "ru" ? $d() : e === "uk" ? Dd() : Pd()
  },
  Sd = () => "timeout",
  Gd = () => "suspensão",
  qd = () => "禁言",
  Ud = () => "Sperre",
  Ld = () => "suspensión",
  Ad = () => "suspension",
  Nd = () => "sospensione",
  Id = () => "一時停止",
  Rd = () => "zawieszenie",
  Md = () => "тайм-аут",
  Td = () => "тайм-аут",
  Bd = () => "tạm khóa",
  Ed = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Sd() : e === "pt" ? Gd() : e === "ch" ? qd() : e === "de" ? Ud() : e === "es" ? Ld() : e === "fr" ? Ad() : e === "it" ? Nd() : e === "jp" ? Id() : e === "pl" ? Rd() : e === "ru" ? Md() : e === "uk" ? Td() : Bd()
  },
  Kd = () => "Destroying others' work with no creative intent.",
  Hd = () => "Destruir o trabalho dos outros sem intenção criativa.",
  Zd = () => "毫无创意目的地破坏他人作品。",
  Vd = () => "Zerstörung der Arbeit anderer ohne kreative Absicht.",
  Od = () => "Destruir el trabajo de otros sin intención creativa.",
  Fd = () => "Détruire le travail des autres sans intention créative.",
  Wd = () => "Distruggere il lavoro degli altri senza intento creativo.",
  Jd = () => "創造的な意図なく他人の作品を破壊する行為。",
  Xd = () => "Niszczenie cudzych prac bez intencji twórczej.",
  Qd = () => "Уничтожение чужих работ без какого-либо творческого намерения.",
  Yd = () => "Знищення чужих робіт без творчого наміру.",
  eg = () => "Phá hoại tác phẩm của người khác mà không có ý định sáng tạo.",
  rg = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Kd() : e === "pt" ? Hd() : e === "ch" ? Zd() : e === "de" ? Vd() : e === "es" ? Od() : e === "fr" ? Fd() : e === "it" ? Wd() : e === "jp" ? Jd() : e === "pl" ? Xd() : e === "ru" ? Qd() : e === "uk" ? Yd() : eg()
  },
  ng = () => "Explicit, hateful, or illegal content is not tolerated.",
  tg = () => "Conteúdo explícito, de ódio ou ilegal não é tolerado.",
  ig = () => "不容忍色情、仇恨或违法内容。",
  og = () => "Explizite, hasserfüllte oder illegale Inhalte werden nicht toleriert.",
  sg = () => "El contenido explícito, de odio o ilegal no es tolerado.",
  ug = () => "Le contenu explicite, haineux ou illégal n'est pas toléré.",
  ag = () => "Contenuti espliciti, di odio o illegali non sono tollerati.",
  _g = () => "露骨、差別的、または違法なコンテンツは容認されません。",
  lg = () => "Treści jednoznacznie seksualne, nawołujące do nienawiści lub nielegalne nie są tolerowane.",
  cg = () => "Откровенный, ненавистнический или незаконный контент запрещён.",
  dg = () => "Відвертий, ненависницький або незаконний контент не допускається.",
  gg = () => "Nội dung khiêu dâm, thù hằn hoặc bất hợp pháp sẽ không được dung thứ.",
  pg = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ng() : e === "pt" ? tg() : e === "ch" ? ig() : e === "de" ? og() : e === "es" ? sg() : e === "fr" ? ug() : e === "it" ? ag() : e === "jp" ? _g() : e === "pl" ? lg() : e === "ru" ? cg() : e === "uk" ? dg() : gg()
  },
  fg = () => "Erasing spam, inappropriate or suggestive content with transparent pixels.",
  mg = () => "Apagar spam, conteúdo inapropriado ou sugestivo com pixels transparentes.",
  vg = () => "使用透明像素清除垃圾内容、不当或暗示性内容。",
  hg = () => "Spam, unangemessene oder anzügliche Inhalte mit transparenten Pixeln entfernen.",
  bg = () => "Borrar spam, contenido inapropiado o sugerente con píxeles transparentes.",
  xg = () => "Effacer le spam, le contenu inapproprié ou suggestif avec des pixels transparents.",
  kg = () => "Cancellare spam, contenuti inappropriati o allusivi con pixel trasparenti.",
  wg = () => "透明ピクセルを使って、スパム、不適切、または性的示唆の強いコンテンツを消去する行為。",
  zg = () => "Usuwanie spamu, nieodpowiednich lub sugestywnych treści za pomocą przezroczystych pikseli.",
  yg = () => "Удаление спама, неприемлемого или откровенного контента прозрачными пикселями.",
  jg = () => "Видалення спаму, неприйнятного чи відвертого контенту прозорими пікселями.",
  Cg = () => "Xóa spam, nội dung không phù hợp hoặc khiêu gợi bằng pixel trong suốt.",
  $g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? fg() : e === "pt" ? mg() : e === "ch" ? vg() : e === "de" ? hg() : e === "es" ? bg() : e === "fr" ? xg() : e === "it" ? kg() : e === "jp" ? wg() : e === "pl" ? zg() : e === "ru" ? yg() : e === "uk" ? jg() : Cg()
  },
  Dg = () => "One account per person. No automation or exploits.",
  Pg = () => "Uma conta por pessoa. Sem automação ou exploits.",
  Sg = () => "每人只能使用一个账号。禁止使用自动化工具或利用漏洞。",
  Gg = () => "Ein Konto pro Person. Keine Automatisierung oder Exploits.",
  qg = () => "Una cuenta por persona. Sin automatización ni exploits.",
  Ug = () => "Un seul compte par personne. Aucune automatisation ni exploitation de failles.",
  Lg = () => "Un account per persona. Nessuna automazione o exploit.",
  Ag = () => "1人につき1アカウントです。自動化やエクスプロイトは禁止です。",
  Ng = () => "Jedno konto na osobę. Żadnej automatyzacji ani exploitów.",
  Ig = () => "Один аккаунт на человека. Никакой автоматизации и эксплойтов.",
  Rg = () => "Один акаунт на людину. Без автоматизації чи експлойтів.",
  Mg = () => "Mỗi người một tài khoản. Không được tự động hóa hay khai thác lỗi.",
  Tg = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Dg() : e === "pt" ? Pg() : e === "ch" ? Sg() : e === "de" ? Gg() : e === "es" ? qg() : e === "fr" ? Ug() : e === "it" ? Lg() : e === "jp" ? Ag() : e === "pl" ? Ng() : e === "ru" ? Ig() : e === "uk" ? Rg() : Mg()
  },
  Bg = () => "Competing for space is part of the game.",
  Eg = () => "Competir por espaço faz parte do jogo.",
  Kg = () => "争夺空间是游戏的一部分。",
  Hg = () => "Der Wettbewerb um Platz ist Teil des Spiels.",
  Zg = () => "Competir por el espacio es parte del juego.",
  Vg = () => "La compétition pour l'espace fait partie du jeu.",
  Og = () => "Competere per lo spazio fa parte del gioco.",
  Fg = () => "スペースをめぐる競争はゲームの一部です。",
  Wg = () => "Rywalizacja o przestrzeń jest częścią gry.",
  Jg = () => "Борьба за территорию — часть игры.",
  Xg = () => "Боротьба за простір — це частина гри.",
  Qg = () => "Cạnh tranh không gian là một phần của trò chơi.",
  Yg = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Bg() : e === "pt" ? Eg() : e === "ch" ? Kg() : e === "de" ? Hg() : e === "es" ? Zg() : e === "fr" ? Vg() : e === "it" ? Og() : e === "jp" ? Fg() : e === "pl" ? Wg() : e === "ru" ? Jg() : e === "uk" ? Xg() : Qg()
  },
  ep = () => "Fair play",
  rp = () => "Jogo justo",
  np = () => "公平游戏",
  tp = () => "Fair Play",
  ip = () => "Juego limpio",
  op = () => "Fair play",
  sp = () => "Fair play",
  up = () => "フェアプレー",
  ap = () => "Fair play",
  _p = () => "Честная игра",
  lp = () => "Чесна гра",
  cp = () => "Chơi công bằng",
  dp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ep() : e === "pt" ? rp() : e === "ch" ? np() : e === "de" ? tp() : e === "es" ? ip() : e === "fr" ? op() : e === "it" ? sp() : e === "jp" ? up() : e === "pl" ? ap() : e === "ru" ? _p() : e === "uk" ? lp() : cp()
  },
  gp = () => "Prohibited",
  pp = () => "Proibido",
  fp = () => "禁止行为",
  mp = () => "Verboten",
  vp = () => "Prohibido",
  hp = () => "Interdit",
  bp = () => "Vietato",
  xp = () => "禁止事項",
  kp = () => "Zabronione",
  wp = () => "Запрещено",
  zp = () => "Заборонено",
  yp = () => "Bị cấm",
  jp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? gp() : e === "pt" ? pp() : e === "ch" ? fp() : e === "de" ? mp() : e === "es" ? vp() : e === "fr" ? hp() : e === "it" ? bp() : e === "jp" ? xp() : e === "pl" ? kp() : e === "ru" ? wp() : e === "uk" ? zp() : yp()
  },
  Cp = () => "Griefing",
  $p = () => "Griefing",
  Dp = () => "恶意破坏",
  Pp = () => "Griefing",
  Sp = () => "Griefing",
  Gp = () => "Griefing",
  qp = () => "Griefing",
  Up = () => "グリーフィング",
  Lp = () => "Griefing",
  Ap = () => "Гриферство",
  Np = () => "Грифінг",
  Ip = () => "Griefing",
  Rp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Cp() : e === "pt" ? $p() : e === "ch" ? Dp() : e === "de" ? Pp() : e === "es" ? Sp() : e === "fr" ? Gp() : e === "it" ? qp() : e === "jp" ? Up() : e === "pl" ? Lp() : e === "ru" ? Ap() : e === "uk" ? Np() : Ip()
  },
  Mp = () => "Inappropriate content",
  Tp = () => "Conteúdo inapropriado",
  Bp = () => "不当内容",
  Ep = () => "Unangemessene Inhalte",
  Kp = () => "Contenido inapropiado",
  Hp = () => "Contenu inapproprié",
  Zp = () => "Contenuto inappropriato",
  Vp = () => "不適切なコンテンツ",
  Op = () => "Nieodpowiednie treści",
  Fp = () => "Неприемлемый контент",
  Wp = () => "Неприйнятний вміст",
  Jp = () => "Nội dung không phù hợp",
  Xp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Mp() : e === "pt" ? Tp() : e === "ch" ? Bp() : e === "de" ? Ep() : e === "es" ? Kp() : e === "fr" ? Hp() : e === "it" ? Zp() : e === "jp" ? Vp() : e === "pl" ? Op() : e === "ru" ? Fp() : e === "uk" ? Wp() : Jp()
  },
  Qp = () => "Map cleanup",
  Yp = () => "Limpeza do mapa",
  ef = () => "地图清理",
  rf = () => "Kartenbereinigung",
  nf = () => "Limpieza del mapa",
  tf = () => "Nettoyage de la carte",
  of = () => "Pulizia della mappa",
  sf = () => "マップの清掃",
  uf = () => "Sprzątanie mapy",
  af = () => "Очистка карты",
  _f = () => "Очищення карти",
  lf = () => "Dọn dẹp bản đồ",
  cf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Qp() : e === "pt" ? Yp() : e === "ch" ? ef() : e === "de" ? rf() : e === "es" ? nf() : e === "fr" ? tf() : e === "it" ? of() : e === "jp" ? sf() : e === "pl" ? uf() : e === "ru" ? af() : e === "uk" ? _f() : lf()
  },
  df = () => "Multi-accounts & bots",
  gf = () => "Múltiplas contas e bots",
  pf = () => "多账号与机器人",
  ff = () => "Multi-Accounts & Bots",
  mf = () => "Multi-cuentas y bots",
  vf = () => "Multi-comptes et bots",
  hf = () => "Multi-account e bot",
  bf = () => "複数アカウント＆ボット",
  xf = () => "Multi-konta i boty",
  kf = () => "Мультиаккаунты и боты",
  wf = () => "Мультиакаунти та боти",
  zf = () => "Nhiều tài khoản & bot",
  yf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? df() : e === "pt" ? gf() : e === "ch" ? pf() : e === "de" ? ff() : e === "es" ? mf() : e === "fr" ? vf() : e === "it" ? hf() : e === "jp" ? bf() : e === "pl" ? xf() : e === "ru" ? kf() : e === "uk" ? wf() : zf()
  },
  jf = () => "Territorial disputes",
  Cf = () => "Disputas territoriais",
  $f = () => "领地争夺",
  Df = () => "Gebietskonflikte",
  Pf = () => "Disputas territoriales",
  Sf = () => "Disputes territoriales",
  Gf = () => "Dispute territoriali",
  qf = () => "領土紛争",
  Uf = () => "Spory terytorialne",
  Lf = () => "Территориальные споры",
  Af = () => "Територіальні спори",
  Nf = () => "Tranh chấp lãnh thổ",
  If = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? jf() : e === "pt" ? Cf() : e === "ch" ? $f() : e === "de" ? Df() : e === "es" ? Pf() : e === "fr" ? Sf() : e === "it" ? Gf() : e === "jp" ? qf() : e === "pl" ? Uf() : e === "ru" ? Lf() : e === "uk" ? Af() : Nf()
  };
var Rf = P('<div class="absolute inset-0 z-20 flex items-center justify-center"><div class="flex flex-col items-center gap-2.5"><div class="text-base-content/60 flex h-14 w-14 items-center justify-center rounded-full bg-white/75"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg></div> <span class="text-base-content/85 text-sm font-semibold"> </span> <button class="bg-neutral/75 hover:bg-neutral/90 mt-0.5 flex items-center gap-1.5 rounded-full border-none px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition-all active:scale-[0.96]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> </button></div></div>'),
  Mf = P("<button>&#8249;</button>"),
  Tf = P('<button class="bg-neutral/55 hover:bg-neutral/80 absolute right-2 bottom-3 z-10 flex items-center gap-1.5 rounded-full border-none px-4 py-2 text-[0.82rem] font-medium text-white backdrop-blur-sm transition-all active:scale-[0.96]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> </button>'),
  Bf = P('<div><img class="block h-full w-full object-cover"/></div>'),
  Ef = P("<button>&#8250;</button>"),
  Kf = P("<button></button>"),
  Hf = P('<div class="relative mb-6 flex flex-wrap items-center" role="region" aria-roledescription="carousel" tabindex="0"><div class="relative w-full touch-pan-y overflow-hidden rounded-lg" role="group"><!> <!> <!> <div></div> <!></div> <p aria-live="polite"> </p> <div></div></div>');

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
  var L = Hf(),
    j = _(L),
    x = _(j);
  {
    var w = c => {
      var f = Rf(),
        G = _(f),
        k = l(_(G), 2),
        U = _(k, !0);
      u(k);
      var q = l(k, 2),
        R = l(_(q));
      u(q), u(G), u(f), g((Y, J) => {
        m(U, Y), m(R, ` ${J??""}`)
      }, [() => en(), () => Ke()]), X("click", q, () => {
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
      var f = Mf();
      A(f, 1, "absolute top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-none bg-black/45 text-lg leading-none text-white backdrop-blur-sm transition-colors select-none hover:bg-black/70 active:scale-[0.92] disabled:pointer-events-none disabled:opacity-30 md:h-14 md:w-14 md:text-[1.6rem] left-2"), g(G => {
        O(f, "aria-label", G), f.disabled = i(p) === 0
      }, [() => Pe()]), X("click", f, () => b(i(p) - 1)), s(c, f)
    };
    K(v, c => {
      i(C) || c(D)
    })
  }
  var z = l(v, 2);
  {
    var $ = c => {
      var f = Tf(),
        G = l(_(f));
      u(f), g((k, U) => {
        O(f, "aria-label", k), m(G, ` ${U??""}`)
      }, [() => fr(), () => nr()]), X("click", f, () => {
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
    var k = Bf(),
      U = _(k);
    u(k), g(() => {
      A(k, 1, `border-base-300 bg-base-100 w-full overflow-hidden rounded-lg border transition-opacity duration-300 [grid-area:1/1] ${G===i(p)?"pointer-events-auto opacity-100":"pointer-events-none opacity-0"}`), O(k, "aria-hidden", G !== i(p)), O(U, "src", i(f).src), O(U, "alt", i(f).alt)
    }), s(c, k)
  }), u(y);
  var a = l(y, 2);
  {
    var d = c => {
      var f = Ef();
      A(f, 1, "absolute top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-none bg-black/45 text-lg leading-none text-white backdrop-blur-sm transition-colors select-none hover:bg-black/70 active:scale-[0.92] disabled:pointer-events-none disabled:opacity-30 md:h-14 md:w-14 md:text-[1.6rem] right-2"), g(G => {
        O(f, "aria-label", G), f.disabled = i(p) === r.cards.length - 1
      }, [() => Se()]), X("click", f, () => b(i(p) + 1)), s(c, f)
    };
    K(a, c => {
      i(C) || c(d)
    })
  }
  u(j);
  var T = l(j, 2);
  let W;
  var ue = _(T, !0);
  u(T);
  var E = l(T, 2);
  let B;
  ce(E, 21, () => r.cards, de, (c, f, G) => {
    var k = Kf();
    g(U => {
      A(k, 1, `h-2 w-2 rounded-full border-none p-0 transition-all ${G===i(p)?"bg-base-content/60 scale-125":"bg-base-300 hover:bg-base-content/40"}`), O(k, "aria-label", U)
    }, [() => Br({
      current: G + 1,
      total: r.cards.length
    })]), X("click", k, () => b(G)), s(c, k)
  }), u(E), u(L), g(c => {
    O(L, "aria-label", c), o = A(y, 1, "grid w-full overflow-hidden py-1", null, o, {
      "blur-[75px]": i(C),
      "saturate-[1.1]": i(C),
      "scale-[1.08]": i(C),
      "pointer-events-none": i(C),
      "select-none": i(C)
    }), W = A(T, 1, "text-base-content/80 mt-2.5 min-h-6 w-full text-center text-sm leading-normal font-bold", null, W, {
      "opacity-0": i(C)
    }), m(ue, r.cards[i(p)].caption), B = A(E, 1, "mt-3 flex w-full justify-center gap-2 pb-1", null, B, {
      "opacity-0": i(C)
    })
  }, [() => Dr()]), X("keydown", L, c => {
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
  Zf = P("<h3><!> <!> <!></h3>"),
  Vf = P("<h4><!> <!> <!></h4>");

function oe(n, r) {
  let e = H(r, "level", 3, 3),
    p = H(r, "compact", 3, !1),
    h = H(r, "class", 3, "");
  const S = Q(() => r.showNumber ?? !p());
  var C = Z(),
    b = M(C);
  {
    var L = x => {
        var w = Zf(),
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
              d = M(a);
            ee(d, () => r.badges), s(o, a)
          };
          K($, o => {
            r.badges && o(y)
          })
        }
        u(w), g(() => A(w, 1, `text-base-content/90 mb-2 flex items-baseline gap-2 leading-snug font-semibold ${p()?"text-lg":"text-2xl"} ${h()??""}`)), s(x, w)
      },
      j = x => {
        var w = Vf(),
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
              d = M(a);
            ee(d, () => r.badges), s(o, a)
          };
          K($, o => {
            r.badges && o(y)
          })
        }
        u(w), g(() => A(w, 1, `text-base-content/85 mt-7 mb-2 flex items-baseline gap-2 leading-snug font-semibold ${p()?"text-base":"text-lg"} ${h()??""}`)), s(x, w)
      };
    K(b, x => {
      e() === 3 ? x(L) : x(j, -1)
    })
  }
  s(n, C)
}
var Of = P('<p class="text-base-content/90 mb-5 text-sm leading-relaxed"><!></p>');

function F(n, r) {
  var e = Of(),
    p = _(e);
  ee(p, () => r.children), u(e), s(n, e)
}
var Ff = P("<section><!></section>");

function se(n, r) {
  let e = H(r, "compact", 3, !1),
    p = H(r, "class", 3, "mb-7 pt-2 md:mb-9 md:pt-3");
  var h = Ff(),
    S = _(h);
  ee(S, () => r.children), u(h), g(() => A(h, 1, ge(e() ? "" : p()))), s(n, h)
}
const Wf = "" + new URL("../assets/griefing1.mrf_QTk2.png", import.meta.url).href,
  Jf = "" + new URL("../assets/griefing2.HP5n4LVA.png", import.meta.url).href,
  Xf = "" + new URL("../assets/pgriefing1.Cxw7Oxbm.png", import.meta.url).href,
  Qf = "" + new URL("../assets/pgriefing2.cEou4X11.png", import.meta.url).href;
var Yf = P("<span><!></span>");

function V(n, r) {
  const e = {
    error: "badge-error bg-error/20",
    warn: "badge-warning bg-warning/20",
    warning: "badge-warning bg-warning/20",
    success: "badge-success bg-success/20"
  };
  var p = Yf(),
    h = _(p);
  ee(h, () => r.children), u(p), g(() => A(p, 1, `badge badge-soft ${e[r.level]??""} badge-sm text-[10px] font-extrabold tracking-wide uppercase`)), s(n, p)
}
var em = P('<!> <!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1),
  rm = P('<!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1),
  nm = P("<div><!> <!></div>");

function tm(n, r) {
  re(r, !0);
  let e = H(r, "compact", 3, !1),
    p = Q(() => [{
      src: Wf,
      alt: "griefing1",
      caption: Gs()
    }, {
      src: Jf,
      alt: "griefing2",
      caption: _i()
    }]),
    h = Q(() => [{
      src: Xf,
      alt: "pgriefing1",
      caption: Ai()
    }, {
      src: Qf,
      alt: "pgriefing2",
      caption: Uo()
    }]);
  var S = nm(),
    C = _(S);
  se(C, {
    get compact() {
      return e()
    },
    class: "mb-4 md:mb-5",
    children: (L, j) => {
      var x = em(),
        w = M(x);
      F(w, {
        children: (o, a) => {
          var d = Z(),
            T = M(d);
          ie(T, () => ra()), s(o, d)
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
          var d = N();
          g(T => m(d, T), [() => tu()]), s(o, d)
        },
        $$slots: {
          default: !0
        }
      });
      var D = l(v, 2);
      F(D, {
        children: (o, a) => {
          var d = Z(),
            T = M(d);
          ie(T, () => mu()), s(o, d)
        }
      });
      var z = l(D, 2),
        $ = _(z);
      V($, {
        level: "error",
        children: (o, a) => {
          I();
          var d = N();
          g(T => m(d, T), [() => ct()]), s(o, d)
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
      var x = rm(),
        w = M(x);
      oe(w, {
        level: 3,
        number: "2.2",
        get compact() {
          return e()
        },
        showNumber: !0,
        children: (y, o) => {
          I();
          var a = N();
          g(d => m(a, d), [() => Pu()]), s(y, a)
        },
        $$slots: {
          default: !0
        }
      });
      var v = l(w, 2);
      F(v, {
        children: (y, o) => {
          var a = Z(),
            d = M(a);
          ie(d, () => Eu()), s(y, a)
        }
      });
      var D = l(v, 2),
        z = _(D);
      V(z, {
        level: "warning",
        children: (y, o) => {
          I();
          var a = N();
          g(d => m(a, d), [() => yt()]), s(y, a)
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
  }), u(S), g(() => A(S, 1, ge(e() ? "space-y-4" : ""))), s(n, S), ne()
}
const im = "" + new URL("../assets/borde1.2HTtxzDt.png", import.meta.url).href,
  om = "" + new URL("../assets/borde2.CN89IOz0.png", import.meta.url).href,
  sm = "" + new URL("../assets/borde4.D9VfQfkE.png", import.meta.url).href,
  um = "" + new URL("../assets/borde5.DkmTTj5N.png", import.meta.url).href,
  am = "" + new URL("../assets/borde6.CtRHeorl.png", import.meta.url).href;
var _m = P('<!> <!> <ul class="marker:text-error mb-5 list-disc pl-5"><li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li></ul> <div class="mb-2 flex gap-1"><!> <!></div>', 1),
  lm = P('<!> <!> <div class="mb-2 flex gap-1"><!> <!></div> <!>', 1),
  cm = P("<div><!> <!></div>");

function dm(n, r) {
  re(r, !0);
  let e = H(r, "compact", 3, !1),
    p = Q(() => [{
      src: im,
      alt: "borde1",
      caption: Fi()
    }, {
      src: om,
      alt: "borde2",
      caption: Hs()
    }, {
      src: sm,
      alt: "borde4",
      caption: uo()
    }, {
      src: um,
      alt: "borde5",
      caption: we()
    }, {
      src: am,
      alt: "borde6",
      caption: we()
    }]);
  var h = cm(),
    S = _(h);
  se(S, {
    get compact() {
      return e()
    },
    class: "mb-4 pt-2 md:mb-5 md:pt-3",
    children: (b, L) => {
      var j = _m(),
        x = M(j);
      oe(x, {
        level: 3,
        number: "1.1",
        get compact() {
          return e()
        },
        showNumber: !0,
        children: (k, U) => {
          I();
          var q = N();
          g(R => m(q, R), [() => ll()]), s(k, q)
        },
        $$slots: {
          default: !0
        }
      });
      var w = l(x, 2);
      F(w, {
        children: (k, U) => {
          var q = Z(),
            R = M(q);
          ie(R, () => zl()), s(k, q)
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
        T = _(d, !0);
      u(d);
      var W = l(d, 2),
        ue = _(W, !0);
      u(W);
      var E = l(W, 2),
        B = _(E, !0);
      u(E), u(v);
      var c = l(v, 2),
        f = _(c);
      V(f, {
        level: "error",
        children: (k, U) => {
          I();
          var q = N();
          g(R => m(q, R), [() => Qn()]), s(k, q)
        }
      });
      var G = l(f, 2);
      V(G, {
        level: "warning",
        children: (k, U) => {
          I();
          var q = N();
          g(R => m(q, R), [() => Cn()]), s(k, q)
        }
      }), u(c), g((k, U, q, R, Y, J) => {
        m(z, k), m(y, U), m(a, q), m(T, R), m(ue, Y), m(B, J)
      }, [() => Wl(), () => Oc(), () => ac(), () => Lc(), () => Nl(), () => kc()]), s(b, j)
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
      var j = lm(),
        x = M(j);
      oe(x, {
        level: 3,
        number: "1.2",
        get compact() {
          return e()
        },
        showNumber: !0,
        children: (y, o) => {
          I();
          var a = N();
          g(d => m(a, d), [() => Ya()]), s(y, a)
        },
        $$slots: {
          default: !0
        }
      });
      var w = l(x, 2);
      F(w, {
        children: (y, o) => {
          var a = Z(),
            d = M(a);
          ie(d, () => d_()), s(y, a)
        }
      });
      var v = l(w, 2),
        D = _(v);
      V(D, {
        level: "success",
        children: (y, o) => {
          I();
          var a = N();
          g(d => m(a, d), [() => be()]), s(y, a)
        }
      });
      var z = l(D, 2);
      V(z, {
        level: "warning",
        children: (y, o) => {
          I();
          var a = N();
          g(d => m(a, d), [() => Mn()]), s(y, a)
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
  }), u(h), g(() => A(h, 1, ge(e() ? "space-y-4" : ""))), s(n, h), ne()
}
const gm = "" + new URL("../assets/mapclean1.CXzD9GTn.png", import.meta.url).href,
  pm = "" + new URL("../assets/mapclean2.B1--Lv8s.png", import.meta.url).href,
  fm = "" + new URL("../assets/mapclean3.zxc4kxhZ.png", import.meta.url).href;
var mm = P('<!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1);

function vm(n, r) {
  re(r, !0);
  let e = H(r, "compact", 3, !1),
    p = Q(() => [{
      src: gm,
      alt: "mapclean1",
      caption: hs()
    }, {
      src: pm,
      alt: "mapclean2",
      caption: os()
    }, {
      src: fm,
      alt: "mapclean3",
      caption: Vo()
    }]);
  se(n, {
    get compact() {
      return e()
    },
    children: (h, S) => {
      var C = mm(),
        b = M(C);
      oe(b, {
        level: 4,
        number: "2.3.2.",
        get compact() {
          return e()
        },
        children: (v, D) => {
          I();
          var z = N();
          g($ => m(z, $), [() => $a()]), s(v, z)
        },
        $$slots: {
          default: !0
        }
      });
      var L = l(b, 2);
      F(L, {
        children: (v, D) => {
          I();
          var z = N();
          g($ => m(z, $), [() => pa()]), s(v, z)
        }
      });
      var j = l(L, 2),
        x = _(j);
      V(x, {
        level: "success",
        children: (v, D) => {
          I();
          var z = N();
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

function hm(n, r) {
  re(r, !0), H(r, "compact", 3, !1), F(n, {
    children: (e, p) => {
      var h = Z(),
        S = M(h);
      ie(S, () => Ta()), s(e, h)
    }
  }), ne()
}
const bm = "" + new URL("../assets/ngriefing1.CQEoQ-5k.png", import.meta.url).href,
  xm = "" + new URL("../assets/ngriefing2.CA1282Nq.png", import.meta.url).href,
  km = "" + new URL("../assets/ngriefing3.l-WuAkT6.png", import.meta.url).href;
var wm = P('<!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1),
  zm = P("<div><!> <!></div>");

function ym(n, r) {
  re(r, !0);
  let e = H(r, "compact", 3, !1),
    p = Q(() => [{
      src: km,
      alt: "ngriefing3",
      caption: Jt()
    }, {
      src: bm,
      alt: "ngriefing1",
      caption: It()
    }, {
      src: xm,
      alt: "ngriefing2",
      caption: wi()
    }]);
  var h = zm(),
    S = _(h);
  F(S, {
    children: (b, L) => {
      I();
      var j = N();
      g(x => m(j, x), [() => X_()]), s(b, j)
    }
  });
  var C = l(S, 2);
  se(C, {
    get compact() {
      return e()
    },
    children: (b, L) => {
      var j = wm(),
        x = M(j);
      oe(x, {
        level: 4,
        number: "2.3.1.",
        get compact() {
          return e()
        },
        children: ($, y) => {
          I();
          var o = N();
          g(a => m(o, a), [() => R_()]), s($, o)
        },
        $$slots: {
          default: !0
        }
      });
      var w = l(x, 2);
      F(w, {
        children: ($, y) => {
          I();
          var o = N();
          g(a => m(o, a), [() => j_()]), s($, o)
        }
      });
      var v = l(w, 2),
        D = _(v);
      V(D, {
        level: "success",
        children: ($, y) => {
          I();
          var o = N();
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
  }), u(h), g(() => A(h, 1, ge(e() ? "space-y-4" : ""))), s(n, h), ne()
}
var jm = P('<details><summary class="collapse-title flex min-h-0! gap-3.5 py-3.5! ps-4! sm:gap-4 sm:ps-5!"><div></div> <div class="min-w-0 flex-1"><div class="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4"><div class="min-w-0"><div class="flex flex-wrap items-center gap-2.5"><span class="text-base-content text-base leading-snug font-bold"> </span> <!></div> <p class="text-base-content/90 mt-1 text-sm leading-relaxed"> </p></div></div></div></summary> <div class="collapse-content p-0!"><div class="border-base-content/5 border-t px-4 py-5 sm:px-5"><!></div></div></details>'),
  Cm = P('<div><div></div> <div class="min-w-0 flex-1"><div class="min-w-0"><div class="flex flex-wrap items-center gap-2.5"><span class="text-base-content text-base leading-snug font-bold"> </span> <!></div> <p class="text-base-content/90 mt-1 text-sm leading-relaxed"> </p></div></div></div>'),
  $m = P('<div><div><svg class="size-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd"></path></svg> <span> </span></div> <!></div>');

function Em(n, r) {
  re(r, !0);
  let e = H(r, "showExtraInfo", 3, !0),
    p = Q(() => [{
      label: jp(),
      icon: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
      badgeLevel: "error",
      classes: {
        header: "bg-error/10 text-error",
        button: "border-error/30 bg-error/5 hover:bg-error/10",
        index: "bg-error/12 text-error"
      },
      rules: [{
        title: Xp(),
        content: dm,
        description: pg(),
        badge: {
          label: ye(),
          type: "ban"
        }
      }, {
        title: Rp(),
        content: tm,
        description: rg(),
        badge: {
          label: Ed(),
          type: "ban"
        }
      }, {
        title: yf(),
        content: hm,
        description: Tg(),
        badge: {
          label: ye(),
          type: "ban"
        }
      }]
    }, {
      label: dp(),
      icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      badgeLevel: "success",
      classes: {
        header: "bg-success/10 text-success",
        button: "border-success/30 bg-success/5 hover:bg-success/10",
        index: "bg-success/12 text-success"
      },
      rules: [{
        title: If(),
        content: ym,
        description: Yg(),
        badge: {
          label: ze(),
          type: "allowed"
        },
        allowed: !0
      }, {
        title: cf(),
        content: vm,
        description: $g(),
        badge: {
          label: ze(),
          type: "allowed"
        },
        allowed: !0
      }]
    }]);
  var h = Z(),
    S = M(h);
  ce(S, 17, () => i(p), de, (C, b, L) => {
    var j = $m();
    A(j, 1, "overflow-hidden rounded-xl", null, {}, {
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
        T = M(d);
      {
        var W = E => {
            var B = jm(),
              c = _(B),
              f = _(c);
            f.textContent = a + 1;
            var G = l(f, 2),
              k = _(G),
              U = _(k),
              q = _(U),
              R = _(q),
              Y = _(R, !0);
            u(R);
            var J = l(R, 2);
            {
              var pe = _e => {
                V(_e, {
                  get level() {
                    return i(b).badgeLevel
                  },
                  children: (ve, Dm) => {
                    I();
                    var xe = N();
                    g(() => m(xe, i(o).badge.label)), s(ve, xe)
                  }
                })
              };
              K(J, _e => {
                i(o).badge && _e(pe)
              })
            }
            u(q);
            var te = l(q, 2),
              fe = _(te, !0);
            u(te), u(U), u(k), u(G), u(c);
            var me = l(c, 2),
              ae = _(me),
              Ce = _(ae);
            De(Ce, () => i(o).content, (_e, ve) => {
              ve(_e, {
                compact: !0
              })
            }), u(ae), u(me), u(B), g(() => {
              A(B, 1, `collapse-arrow collapse rounded-none border-l-[3px] ${i(b).classes.button??""} ${a>0?"border-base-content/5 border-t":""}`), A(f, 1, `${i(b).classes.index??""} flex size-7 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold`), m(Y, i(o).title), m(fe, i(o).description)
            }), s(E, B)
          },
          ue = E => {
            var B = Cm(),
              c = _(B);
            c.textContent = a + 1;
            var f = l(c, 2),
              G = _(f),
              k = _(G),
              U = _(k),
              q = _(U, !0);
            u(U);
            var R = l(U, 2);
            {
              var Y = te => {
                V(te, {
                  get level() {
                    return i(b).badgeLevel
                  },
                  children: (fe, me) => {
                    I();
                    var ae = N();
                    g(() => m(ae, i(o).badge.label)), s(fe, ae)
                  }
                })
              };
              K(R, te => {
                i(o).badge && te(Y)
              })
            }
            u(k);
            var J = l(k, 2),
              pe = _(J, !0);
            u(J), u(G), u(f), u(B), g(() => {
              A(B, 1, `${i(b).classes.button??""} flex w-full cursor-auto gap-3.5 border-l-[3px] px-4 py-3.5 text-left sm:gap-4 sm:px-5 ${a>0?"border-base-content/5 border-t":""}`), A(c, 1, `${i(b).classes.index??""} flex size-7 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold`), m(q, i(o).title), m(pe, i(o).description)
            }), s(E, B)
          };
        K(T, E => {
          e() ? E(W) : E(ue, -1)
        })
      }
      s(y, d)
    }), u(j), g(() => {
      A(x, 1, `${i(b).classes.header??""} flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-widest uppercase`), O(v, "d", i(b).icon), m(z, i(b).label)
    }), s(C, j)
  }), s(n, h), ne()
}
export {
  dm as G, Em as R, tm as a, ym as b, vm as c, hm as d, Bm as r
};