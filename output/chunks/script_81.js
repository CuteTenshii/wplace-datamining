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
  h as ve,
  d as l,
  s as _,
  c as P,
  r as u,
  q as H,
  f as R,
  bm as N,
  n as M
} from "./DmPVOt2G.js";
import {
  s as m
} from "./DhqkUb9U.js";
import {
  i as K
} from "./CPZ_RRGr.js";
import {
  e as ce,
  i as de
} from "./BVZolyyS.js";
import {
  c as De
} from "./Dq1RO3AA.js";
import {
  s as Z,
  a as A,
  c as ge
} from "./tuZNrlvy.js";
import {
  p as W
} from "./D4ILXblz.js";
import {
  h as ie
} from "./Bpj4fnyy.js";
import {
  c as Pe,
  a as Se
} from "./BbM-gkrm.js";
import {
  s as ee
} from "./BAb2Drqf.js";
const qe = () => "Click to reveal",
  Ge = () => "Clique para revelar",
  Ue = () => "点击查看",
  Le = () => "Klicken zum Anzeigen",
  Ae = () => "Haz clic para revelar",
  Ne = () => "Cliquez pour révéler",
  Me = () => "Clicca per rivelare",
  Ie = () => "クリックして表示",
  Re = () => "Kliknij, aby odsłonić",
  Be = () => "Нажмите, чтобы показать",
  Te = () => "Натисніть, щоб показати",
  Ee = () => "Nhấn để hiện",
  Ke = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? qe() : e === "pt" ? Ge() : e === "ch" ? Ue() : e === "de" ? Le() : e === "es" ? Ae() : e === "fr" ? Ne() : e === "it" ? Me() : e === "jp" ? Ie() : e === "pl" ? Re() : e === "ru" ? Be() : e === "uk" ? Te() : Ee()
  },
  We = () => "Hide",
  He = () => "Ocultar",
  Ve = () => "隐藏",
  Ze = () => "Ausblenden",
  Oe = () => "Ocultar",
  Fe = () => "Masquer",
  Je = () => "Nascondi",
  Xe = () => "非表示",
  Qe = () => "Ukryj",
  Ye = () => "Скрыть",
  er = () => "Сховати",
  rr = () => "Ẩn",
  nr = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? We() : e === "pt" ? He() : e === "ch" ? Ve() : e === "de" ? Ze() : e === "es" ? Oe() : e === "fr" ? Fe() : e === "it" ? Je() : e === "jp" ? Xe() : e === "pl" ? Qe() : e === "ru" ? Ye() : e === "uk" ? er() : rr()
  },
  tr = () => "Hide sensitive content",
  ir = () => "Ocultar conteúdo sensível",
  or = () => "隐藏敏感内容",
  sr = () => "Sensiblen Inhalt ausblenden",
  ur = () => "Ocultar contenido sensible",
  ar = () => "Masquer le contenu sensible",
  lr = () => "Nascondi contenuto sensibile",
  _r = () => "センシティブなコンテンツを非表示",
  cr = () => "Ukryj wrażliwą treść",
  dr = () => "Скрыть чувствительный контент",
  gr = () => "Сховати чутливий вміст",
  pr = () => "Ẩn nội dung nhạy cảm",
  fr = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? tr() : e === "pt" ? ir() : e === "ch" ? or() : e === "de" ? sr() : e === "es" ? ur() : e === "fr" ? ar() : e === "it" ? lr() : e === "jp" ? _r() : e === "pl" ? cr() : e === "ru" ? dr() : e === "uk" ? gr() : pr()
  },
  mr = () => "Image carousel",
  hr = () => "Carrossel de imagens",
  vr = () => "图片轮播",
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
    return e === "en" ? mr() : e === "pt" ? hr() : e === "ch" ? vr() : e === "de" ? br() : e === "es" ? xr() : e === "fr" ? kr() : e === "it" ? wr() : e === "jp" ? zr() : e === "pl" ? yr() : e === "ru" ? jr() : e === "uk" ? Cr() : $r()
  },
  Pr = n => `Image ${n.current} of ${n.total}`,
  Sr = n => `Imagem ${n.current} de ${n.total}`,
  qr = n => `第 ${n.current} 张，共 ${n.total} 张`,
  Gr = n => `Bild ${n.current} von ${n.total}`,
  Ur = n => `Imagen ${n.current} de ${n.total}`,
  Lr = n => `Image ${n.current} sur ${n.total}`,
  Ar = n => `Immagine ${n.current} di ${n.total}`,
  Nr = n => `画像 ${n.current} / ${n.total}`,
  Mr = n => `Obraz ${n.current} z ${n.total}`,
  Ir = n => `Изображение ${n.current} из ${n.total}`,
  Rr = n => `Зображення ${n.current} з ${n.total}`,
  Br = n => `Hình ${n.current} trên ${n.total}`,
  Tr = (n, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Pr(n) : e === "pt" ? Sr(n) : e === "ch" ? qr(n) : e === "de" ? Gr(n) : e === "es" ? Ur(n) : e === "fr" ? Lr(n) : e === "it" ? Ar(n) : e === "jp" ? Nr(n) : e === "pl" ? Mr(n) : e === "ru" ? Ir(n) : e === "uk" ? Rr(n) : Br(n)
  },
  Er = () => "Sensitive image",
  Kr = () => "Imagem sensível",
  Wr = () => "敏感图片",
  Hr = () => "Sensibles Bild",
  Vr = () => "Imagen sensible",
  Zr = () => "Image sensible",
  Or = () => "Immagine sensibile",
  Fr = () => "センシティブな画像",
  Jr = () => "Wrażliwy obraz",
  Xr = () => "Чувствительное изображение",
  Qr = () => "Чутливе зображення",
  Yr = () => "Hình ảnh nhạy cảm",
  en = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Er() : e === "pt" ? Kr() : e === "ch" ? Wr() : e === "de" ? Hr() : e === "es" ? Vr() : e === "fr" ? Zr() : e === "it" ? Or() : e === "jp" ? Fr() : e === "pl" ? Jr() : e === "ru" ? Xr() : e === "uk" ? Qr() : Yr()
  },
  rn = () => "Allowed",
  nn = () => "Permitido",
  tn = () => "允许",
  on = () => "Erlaubt",
  sn = () => "Permitido",
  un = () => "Autorisé",
  an = () => "Consentito",
  ln = () => "許可",
  _n = () => "Dozwolone",
  cn = () => "Разрешено",
  dn = () => "Дозволено",
  gn = () => "Được phép",
  be = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? rn() : e === "pt" ? nn() : e === "ch" ? tn() : e === "de" ? on() : e === "es" ? sn() : e === "fr" ? un() : e === "it" ? an() : e === "jp" ? ln() : e === "pl" ? _n() : e === "ru" ? cn() : e === "uk" ? dn() : gn()
  },
  pn = () => "Artwork removal",
  fn = () => "Remoção de arte",
  mn = () => "作品移除",
  hn = () => "Entfernung des Kunstwerks",
  vn = () => "Eliminación de obras",
  bn = () => "Suppression de l'œuvre",
  xn = () => "Rimozione dell'opera",
  kn = () => "作品の削除",
  wn = () => "Usunięcie grafiki",
  zn = () => "Удаление рисунка",
  yn = () => "Видалення малюнків",
  jn = () => "Gỡ bỏ tác phẩm",
  Cn = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? pn() : e === "pt" ? fn() : e === "ch" ? mn() : e === "de" ? hn() : e === "es" ? vn() : e === "fr" ? bn() : e === "it" ? xn() : e === "jp" ? kn() : e === "pl" ? wn() : e === "ru" ? zn() : e === "uk" ? yn() : jn()
  },
  $n = () => "Community cleanup",
  Dn = () => "Limpeza pela comunidade",
  Pn = () => "社区清理",
  Sn = () => "Community-Bereinigung",
  qn = () => "Limpieza comunitaria",
  Gn = () => "Nettoyage communautaire",
  Un = () => "Pulizia della community",
  Ln = () => "コミュニティによる清掃",
  An = () => "Sprzątanie przez społeczność",
  Nn = () => "Очистка сообществом",
  Mn = () => "Очищення спільнотою",
  In = () => "Cộng đồng dọn dẹp",
  Rn = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? $n() : e === "pt" ? Dn() : e === "ch" ? Pn() : e === "de" ? Sn() : e === "es" ? qn() : e === "fr" ? Gn() : e === "it" ? Un() : e === "jp" ? Ln() : e === "pl" ? An() : e === "ru" ? Nn() : e === "uk" ? Mn() : In()
  },
  Bn = () => "Permanent Ban",
  Tn = () => "Banimento Permanente",
  En = () => "永久封禁",
  Kn = () => "Permanenter Bann",
  Wn = () => "Ban Permanente",
  Hn = () => "Bannissement permanent",
  Vn = () => "Ban permanente",
  Zn = () => "永久BAN",
  On = () => "Permanentny ban",
  Fn = () => "Перманентный бан",
  Jn = () => "Перманентний бан",
  Xn = () => "Cấm vĩnh viễn",
  Qn = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Bn() : e === "pt" ? Tn() : e === "ch" ? En() : e === "de" ? Kn() : e === "es" ? Wn() : e === "fr" ? Hn() : e === "it" ? Vn() : e === "jp" ? Zn() : e === "pl" ? On() : e === "ru" ? Fn() : e === "uk" ? Jn() : Xn()
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
  lt = () => "Тайм-аут",
  _t = () => "Tạm khóa",
  ct = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Yn() : e === "pt" ? et() : e === "ch" ? rt() : e === "de" ? nt() : e === "es" ? tt() : e === "fr" ? it() : e === "it" ? ot() : e === "jp" ? st() : e === "pl" ? ut() : e === "ru" ? at() : e === "uk" ? lt() : _t()
  },
  dt = () => "Timeout risk",
  gt = () => "Risco de suspensão",
  pt = () => "禁言风险",
  ft = () => "Sperrrisiko",
  mt = () => "Riesgo de suspensión",
  ht = () => "Risque de suspension",
  vt = () => "Rischio sospensione",
  bt = () => "一時停止のリスク",
  xt = () => "Ryzyko zawieszenia",
  kt = () => "Риск тайм-аута",
  wt = () => "Ризик тайм-ауту",
  zt = () => "Nguy cơ tạm khóa",
  yt = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? dt() : e === "pt" ? gt() : e === "ch" ? pt() : e === "de" ? ft() : e === "es" ? mt() : e === "fr" ? ht() : e === "it" ? vt() : e === "jp" ? bt() : e === "pl" ? xt() : e === "ru" ? kt() : e === "uk" ? wt() : zt()
  },
  jt = () => "Drawing a new artwork over a flag",
  Ct = () => "Desenhar uma nova arte por cima de uma bandeira",
  $t = () => "在旗帜上绘制新作品",
  Dt = () => "Ein neues Kunstwerk über eine Flagge zeichnen",
  Pt = () => "Dibujar una nueva obra sobre una bandera",
  St = () => "Dessiner une nouvelle œuvre par-dessus un drapeau",
  qt = () => "Disegnare una nuova opera sopra una bandiera",
  Gt = () => "旗の上に新しい作品を描く",
  Ut = () => "Rysowanie nowej grafiki na fladze",
  Lt = () => "Рисование нового рисунка поверх флага",
  At = () => "Створення нового малюнка поверх прапора",
  Nt = () => "Vẽ tác phẩm mới đè lên cờ",
  Mt = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? jt() : e === "pt" ? Ct() : e === "ch" ? $t() : e === "de" ? Dt() : e === "es" ? Pt() : e === "fr" ? St() : e === "it" ? qt() : e === "jp" ? Gt() : e === "pl" ? Ut() : e === "ru" ? Lt() : e === "uk" ? At() : Nt()
  },
  It = () => "Drawing over another drawing",
  Rt = () => "Desenhar por cima de outro desenho",
  Bt = () => "在另一幅画作上绘画",
  Tt = () => "Eine Zeichnung über eine andere zeichnen",
  Et = () => "Dibujar sobre otro dibujo",
  Kt = () => "Dessiner par-dessus un autre dessin",
  Wt = () => "Disegnare sopra un altro disegno",
  Ht = () => "別の描画の上に描く",
  Vt = () => "Zamalowywanie jednego rysunku innym",
  Zt = () => "Рисование поверх другого рисунка",
  Ot = () => "Малювання поверх іншого малюнка",
  Ft = () => "Vẽ đè lên bức vẽ khác",
  Jt = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? It() : e === "pt" ? Rt() : e === "ch" ? Bt() : e === "de" ? Tt() : e === "es" ? Et() : e === "fr" ? Kt() : e === "it" ? Wt() : e === "jp" ? Ht() : e === "pl" ? Vt() : e === "ru" ? Zt() : e === "uk" ? Ot() : Ft()
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
  li = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Xt() : e === "pt" ? Qt() : e === "ch" ? Yt() : e === "de" ? ei() : e === "es" ? ri() : e === "fr" ? ni() : e === "it" ? ti() : e === "jp" ? ii() : e === "pl" ? oi() : e === "ru" ? si() : e === "uk" ? ui() : ai()
  },
  _i = () => "Drawing over a repeated pattern",
  ci = () => "Desenhar por cima de um padrão repetitivo",
  di = () => "在重复图案上绘画",
  gi = () => "Über ein wiederholendes Muster zeichnen",
  pi = () => "Dibujar sobre un patrón repetido",
  fi = () => "Dessiner par-dessus un motif répétitif",
  mi = () => "Disegnare sopra un pattern ripetuto",
  hi = () => "繰り返しパターンの上に描く",
  vi = () => "Zamalowywanie powtarzalnego wzoru",
  bi = () => "Рисование поверх повторяющегося узора",
  xi = () => "Малювання поверх повторюваного візерунка",
  ki = () => "Vẽ đè lên mẫu lặp lại",
  wi = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? _i() : e === "pt" ? ci() : e === "ch" ? di() : e === "de" ? gi() : e === "es" ? pi() : e === "fr" ? fi() : e === "it" ? mi() : e === "jp" ? hi() : e === "pl" ? vi() : e === "ru" ? bi() : e === "uk" ? xi() : ki()
  },
  zi = () => "Drawing a flag over other artworks",
  yi = () => "Desenhar uma bandeira por cima de outras artes",
  ji = () => "在其他作品上绘制旗帜",
  Ci = () => "Eine Flagge über andere Kunstwerke zeichnen",
  $i = () => "Dibujar una bandera sobre las obras de otros",
  Di = () => "Dessiner un drapeau par-dessus d'autres œuvres",
  Pi = () => "Disegnare una bandiera sopra altre opere",
  Si = () => "他の作品の上に旗を描く",
  qi = () => "Rysowanie flagi na cudzych grafikach",
  Gi = () => "Рисование флага поверх чужих рисунков",
  Ui = () => "Малювання прапора поверх чужих малюнків",
  Li = () => "Vẽ cờ đè lên tác phẩm của người khác",
  Ai = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? zi() : e === "pt" ? yi() : e === "ch" ? ji() : e === "de" ? Ci() : e === "es" ? $i() : e === "fr" ? Di() : e === "it" ? Pi() : e === "jp" ? Si() : e === "pl" ? qi() : e === "ru" ? Gi() : e === "uk" ? Ui() : Li()
  },
  Ni = () => "Highly Suggestive Content",
  Mi = () => "Conteúdo Altamente Sugestivo",
  Ii = () => "高度暗示性内容",
  Ri = () => "Stark anzügliche Inhalte",
  Bi = () => "Contenido Altamente Sugerente",
  Ti = () => "Contenu hautement suggestif",
  Ei = () => "Contenuto fortemente allusivo",
  Ki = () => "非常に性的示唆の強いコンテンツ",
  Wi = () => "Mocno sugestywne treści",
  Hi = () => "Крайне откровенный контент",
  Vi = () => "Дуже відвертий контент",
  Zi = () => "Nội dung khiêu gợi mạnh",
  Oi = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ni() : e === "pt" ? Mi() : e === "ch" ? Ii() : e === "de" ? Ri() : e === "es" ? Bi() : e === "fr" ? Ti() : e === "it" ? Ei() : e === "jp" ? Ki() : e === "pl" ? Wi() : e === "ru" ? Hi() : e === "uk" ? Vi() : Zi()
  },
  Fi = () => "Mild Gore Content",
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
    return e === "en" ? Fi() : e === "pt" ? Ji() : e === "ch" ? Xi() : e === "de" ? Qi() : e === "es" ? Yi() : e === "fr" ? eo() : e === "it" ? ro() : e === "jp" ? no() : e === "pl" ? to() : e === "ru" ? io() : e === "uk" ? oo() : so()
  },
  ao = () => "Non-explicit suggestive content",
  lo = () => "Conteúdo sugestivo não explícito",
  _o = () => "非露骨暗示性内容",
  co = () => "Nicht-explizite anzügliche Inhalte",
  go = () => "Contenido sugerente no explícito",
  po = () => "Contenu suggestif non explicite",
  fo = () => "Contenuto allusivo non esplicito",
  mo = () => "露骨でない性的示唆のあるコンテンツ",
  ho = () => "Niejednoznaczne treści sugestywne",
  vo = () => "Неоткровенный пикантный контент",
  bo = () => "Невідвертий контент з підтекстом",
  xo = () => "Nội dung khiêu gợi không rõ ràng",
  we = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ao() : e === "pt" ? lo() : e === "ch" ? _o() : e === "de" ? co() : e === "es" ? go() : e === "fr" ? po() : e === "it" ? fo() : e === "jp" ? mo() : e === "pl" ? ho() : e === "ru" ? vo() : e === "uk" ? bo() : xo()
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
  qo = () => "Малювання повторюваного візерунка поверх чужих малюнків",
  Go = () => "Vẽ mẫu lặp lại đè lên tác phẩm của người khác",
  Uo = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ko() : e === "pt" ? wo() : e === "ch" ? zo() : e === "de" ? yo() : e === "es" ? jo() : e === "fr" ? Co() : e === "it" ? $o() : e === "jp" ? Do() : e === "pl" ? Po() : e === "ru" ? So() : e === "uk" ? qo() : Go()
  },
  Lo = () => "Using transparent pixels over repetitive flags",
  Ao = () => "Usar pixels transparentes sobre bandeiras repetitivas",
  No = () => "使用透明像素覆盖重复的旗帜",
  Mo = () => "Transparente Pixel über sich wiederholende Flaggen verwenden",
  Io = () => "Usar píxeles transparentes sobre banderas repetitivas",
  Ro = () => "Utilisation de pixels transparents sur les drapeaux répétitifs",
  Bo = () => "Usare pixel trasparenti sopra bandiere ripetitive",
  To = () => "繰り返される旗の上に透明ピクセルを使用",
  Eo = () => "Używanie przezroczystych pikseli na powtarzalnych flagach",
  Ko = () => "Использование прозрачных пикселей поверх повторяющихся флагов",
  Wo = () => "Використання прозорих пікселів поверх повторюваних прапорів",
  Ho = () => "Sử dụng pixel trong suốt đè lên cờ lặp lại",
  Vo = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Lo() : e === "pt" ? Ao() : e === "ch" ? No() : e === "de" ? Mo() : e === "es" ? Io() : e === "fr" ? Ro() : e === "it" ? Bo() : e === "jp" ? To() : e === "pl" ? Eo() : e === "ru" ? Ko() : e === "uk" ? Wo() : Ho()
  },
  Zo = () => "Using transparent pixels to remove inappropriate content",
  Oo = () => "Usar pixels transparentes para remover conteúdo inapropriado",
  Fo = () => "使用透明像素移除不当内容",
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
    return e === "en" ? Zo() : e === "pt" ? Oo() : e === "ch" ? Fo() : e === "de" ? Jo() : e === "es" ? Xo() : e === "fr" ? Qo() : e === "it" ? Yo() : e === "jp" ? es() : e === "pl" ? rs() : e === "ru" ? ns() : e === "uk" ? ts() : is()
  },
  ss = () => "Using transparent pixels to remove repetitive patterns",
  us = () => "Usar pixels transparentes para remover padrões repetitivos",
  as = () => "使用透明像素移除重复图案",
  ls = () => "Transparente Pixel zum Entfernen sich wiederholender Muster verwenden",
  _s = () => "Usar píxeles transparentes para eliminar patrones repetitivos",
  cs = () => "Utilisation de pixels transparents pour supprimer les motifs répétitifs",
  ds = () => "Usare pixel trasparenti per rimuovere pattern ripetitivi",
  gs = () => "透明ピクセルを使って繰り返しパターンを除去",
  ps = () => "Używanie przezroczystych pikseli do usuwania powtarzalnych wzorów",
  fs = () => "Использование прозрачных пикселей для удаления повторяющихся узоров",
  ms = () => "Використання прозорих пікселів для видалення повторюваних візерунків",
  hs = () => "Sử dụng pixel trong suốt để xóa mẫu lặp lại",
  vs = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ss() : e === "pt" ? us() : e === "ch" ? as() : e === "de" ? ls() : e === "es" ? _s() : e === "fr" ? cs() : e === "it" ? ds() : e === "jp" ? gs() : e === "pl" ? ps() : e === "ru" ? fs() : e === "uk" ? ms() : hs()
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
  qs = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? bs() : e === "pt" ? xs() : e === "ch" ? ks() : e === "de" ? ws() : e === "es" ? zs() : e === "fr" ? ys() : e === "it" ? js() : e === "jp" ? Cs() : e === "pl" ? $s() : e === "ru" ? Ds() : e === "uk" ? Ps() : Ss()
  },
  Gs = () => "Suggestive fetishist Content",
  Us = () => "Conteúdo sugestivo fetichista",
  Ls = () => "暗示性恋物内容",
  As = () => "Anzügliche fetischistische Inhalte",
  Ns = () => "Contenido sugerente fetichista",
  Ms = () => "Contenu suggestif fétichiste",
  Is = () => "Contenuto allusivo feticista",
  Rs = () => "性的示唆のあるフェティッシュコンテンツ",
  Bs = () => "Sugestywne treści fetyszystyczne",
  Ts = () => "Откровенный фетишистский контент",
  Es = () => "Відвертий фетишистський контент",
  Ks = () => "Nội dung khiêu gợi theo hướng tôn sùng",
  Ws = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Gs() : e === "pt" ? Us() : e === "ch" ? Ls() : e === "de" ? As() : e === "es" ? Ns() : e === "fr" ? Ms() : e === "it" ? Is() : e === "jp" ? Rs() : e === "pl" ? Bs() : e === "ru" ? Ts() : e === "uk" ? Es() : Ks()
  },
  Hs = () => "Clear griefing",
  Vs = () => "Griefing evidente",
  Zs = () => "明确的恶意破坏",
  Os = () => "Eindeutiges Griefing",
  Fs = () => "Griefing evidente",
  Js = () => "Griefing manifeste",
  Xs = () => "Griefing evidente",
  Qs = () => "明確なグリーフィング",
  Ys = () => "Oczywisty griefing",
  eu = () => "Явное гриферство",
  ru = () => "Явний грифінг",
  nu = () => "Griefing rõ ràng",
  tu = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Hs() : e === "pt" ? Vs() : e === "ch" ? Zs() : e === "de" ? Os() : e === "es" ? Fs() : e === "fr" ? Js() : e === "it" ? Xs() : e === "jp" ? Qs() : e === "pl" ? Ys() : e === "ru" ? eu() : e === "uk" ? ru() : nu()
  },
  iu = () => "Cases of clear griefing (such as scribbling over someone's artwork with no creative intent, or deliberately disrupting it by placing random pixels) are <strong>subject to moderation intervention</strong>.",
  ou = () => "Casos de griefing evidente (como rabiscar por cima da arte de alguém sem intenção criativa, ou interrompê-la deliberadamente colocando pixels aleatórios) estão <strong>sujeitos a intervenção da moderação</strong>.",
  su = () => "明确的恶意破坏行为（例如毫无创意目的地在他人作品上乱涂，或故意放置随机像素进行破坏）将<strong>受到管理介入</strong>。",
  uu = () => "Fälle von eindeutigem Griefing (wie z. B. Kritzeln über Kunstwerke anderer ohne kreative Absicht oder das absichtliche Stören durch Platzieren zufälliger Pixel) <strong>unterliegen moderativen Maßnahmen</strong>.",
  au = () => "Los casos de griefing evidente (como garabatear sobre la obra de alguien sin intención creativa, o alterarla deliberadamente colocando píxeles aleatorios) están <strong>sujetos a intervención de moderación</strong>.",
  lu = () => "Les cas de griefing manifeste (comme gribouiller sur l'œuvre de quelqu'un sans intention créative, ou la perturber délibérément en plaçant des pixels aléatoires) sont <strong>soumis à une intervention de la modération</strong>.",
  _u = () => "I casi di griefing evidente (come scarabocchiare sopra l'opera di qualcuno senza intento creativo, o disturbarla deliberatamente piazzando pixel casuali) sono <strong>soggetti a intervento della moderazione</strong>.",
  cu = () => "明確なグリーフィング（他人の作品に創造的な意図なく落書きする、ランダムなピクセルを置いて意図的に妨害するなど）は、<strong>モデレーションの介入対象</strong>となります。",
  du = () => "Przypadki oczywistego griefingu (takie jak bazgranie po cudzej grafice bez intencji twórczej lub celowe zakłócanie jej losowymi pikselami) <strong>podlegają interwencji moderacji</strong>.",
  gu = () => "Случаи явного гриферства (например, черкание поверх чьего-то рисунка без творческого намерения или намеренное его разрушение случайными пикселями) <strong>подлежат модераторскому вмешательству</strong>.",
  pu = () => "Випадки явного грифінгу (такі як замальовування чужого малюнка без творчого наміру або навмисне порушення за допомогою випадкових пікселів) <strong>підлягають модераторському втручанню</strong>.",
  fu = () => "Các trường hợp griefing rõ ràng (như vẽ bậy lên tác phẩm của người khác mà không có ý sáng tạo, hoặc cố tình phá hoại bằng cách đặt pixel ngẫu nhiên) <strong>sẽ bị can thiệp kiểm duyệt</strong>.",
  mu = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? iu() : e === "pt" ? ou() : e === "ch" ? su() : e === "de" ? uu() : e === "es" ? au() : e === "fr" ? lu() : e === "it" ? _u() : e === "jp" ? cu() : e === "pl" ? du() : e === "ru" ? gu() : e === "uk" ? pu() : fu()
  },
  hu = () => "Gray area",
  vu = () => "Área cinzenta",
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
    return e === "en" ? hu() : e === "pt" ? vu() : e === "ch" ? bu() : e === "de" ? xu() : e === "es" ? ku() : e === "fr" ? wu() : e === "it" ? zu() : e === "jp" ? yu() : e === "pl" ? ju() : e === "ru" ? Cu() : e === "uk" ? $u() : Du()
  },
  Su = () => "Actions that alter or disrupt artwork but may have <strong>multiple valid interpretations</strong>, such as territorial expansion, cleanup, or style changes. <strong>These are not automatically griefing</strong>. However, if the behavior becomes excessive, targeted, or clearly disruptive over time, moderators may intervene.",
  qu = () => "Ações que alteram ou perturbam artes, mas que podem ter <strong>múltiplas interpretações válidas</strong>, como expansão territorial, limpeza ou mudanças de estilo. <strong>Isso não é automaticamente griefing</strong>. No entanto, se o comportamento se tornar excessivo, direcionado ou claramente prejudicial ao longo do tempo, os moderadores poderão intervir.",
  Gu = () => "改变或干扰作品但可能具有<strong>多种合理解读</strong>的行为，例如领地扩张、清理或风格变更。<strong>这些不会自动被视为恶意破坏</strong>。但如果行为变得过度、有针对性或随着时间推移明显具有破坏性，管理员可能会介入。",
  Uu = () => "Aktionen, die Kunstwerke verändern oder stören, aber <strong>mehrere gültige Interpretationen</strong> haben können, wie z. B. Gebietserweiterung, Bereinigung oder Stiländerungen. <strong>Dies ist nicht automatisch Griefing</strong>. Wenn das Verhalten jedoch übermäßig, gezielt oder im Laufe der Zeit eindeutig störend wird, können Moderatoren eingreifen.",
  Lu = () => "Acciones que alteran o interrumpen obras pero pueden tener <strong>múltiples interpretaciones válidas</strong>, como expansión territorial, limpieza o cambios de estilo. <strong>Esto no es automáticamente griefing</strong>. Sin embargo, si el comportamiento se vuelve excesivo, dirigido o claramente disruptivo con el tiempo, los moderadores pueden intervenir.",
  Au = () => "Actions qui modifient ou perturbent une œuvre mais peuvent avoir <strong>plusieurs interprétations valides</strong>, comme l'expansion territoriale, le nettoyage ou les changements de style. <strong>Ce n'est pas automatiquement du griefing</strong>. Cependant, si le comportement devient excessif, ciblé ou clairement perturbateur au fil du temps, les modérateurs peuvent intervenir.",
  Nu = () => "Azioni che alterano o disturbano un'opera ma possono avere <strong>molteplici interpretazioni valide</strong>, come espansione territoriale, pulizia o cambiamenti di stile. <strong>Queste non sono automaticamente griefing</strong>. Tuttavia, se il comportamento diventa eccessivo, mirato o chiaramente disturbante nel tempo, i moderatori possono intervenire.",
  Mu = () => "作品を変更・妨害するが、領土拡大、清掃、スタイル変更など<strong>複数の正当な解釈が可能な</strong>行為。<strong>これらは自動的にグリーフィングとはみなされません</strong>。ただし、行為が過剰になったり、特定の相手を標的にしたり、時間をかけて明らかに妨害的であったりする場合は、モデレーターが介入することがあります。",
  Iu = () => "Działania, które zmieniają lub zakłócają grafikę, ale mogą mieć <strong>wiele uzasadnionych interpretacji</strong>, takie jak ekspansja terytorialna, sprzątanie lub zmiana stylu. <strong>Nie są one automatycznie uznawane za griefing</strong>. Jednakże, jeśli zachowanie staje się nadmierne, celowe lub wyraźnie destrukcyjne z czasem, moderatorzy mogą interweniować.",
  Ru = () => "Действия, которые изменяют или нарушают рисунок, но могут иметь <strong>несколько допустимых интерпретаций</strong>, такие как территориальное расширение, очистка или смена стиля. <strong>Это автоматически не является гриферством</strong>. Однако если поведение становится чрезмерным, целенаправленным или явно деструктивным со временем, модераторы могут вмешаться.",
  Bu = () => "Дії, які змінюють або порушують малюнки, але можуть мати <strong>кілька правомірних тлумачень</strong>, такі як розширення території, очищення або зміна стилю. <strong>Це не є автоматичним грифінгом</strong>. Однак, якщо поведінка стає надмірною, цілеспрямованою або явно деструктивною з часом, модератори можуть втрутитися.",
  Tu = () => "Các hành động thay đổi hoặc phá vỡ tác phẩm nhưng có thể có <strong>nhiều cách hiểu hợp lý</strong>, chẳng hạn như mở rộng lãnh thổ, dọn dẹp hoặc thay đổi phong cách. <strong>Những hành động này không tự động được coi là griefing</strong>. Tuy nhiên, nếu hành vi trở nên quá mức, nhắm vào mục tiêu cụ thể hoặc rõ ràng gây phá hoại theo thời gian, quản trị viên có thể can thiệp.",
  Eu = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Su() : e === "pt" ? qu() : e === "ch" ? Gu() : e === "de" ? Uu() : e === "es" ? Lu() : e === "fr" ? Au() : e === "it" ? Nu() : e === "jp" ? Mu() : e === "pl" ? Iu() : e === "ru" ? Ru() : e === "uk" ? Bu() : Tu()
  },
  Ku = () => "Griefing means taking actions on the map <strong>solely to harass or frustrate</strong> other players, with no creative, strategic, or corrective purpose.",
  Wu = () => "Griefing significa realizar ações no mapa <strong>unicamente para assediar ou frustrar</strong> outros jogadores, sem nenhum propósito criativo, estratégico ou corretivo.",
  Hu = () => "恶意破坏指在地图上<strong>仅以骚扰或激怒</strong>其他玩家为目的的行为，不具有任何创意、战略或纠正目的。",
  Vu = () => "Griefing bedeutet, auf der Karte Aktionen durchzuführen, die <strong>ausschließlich dazu dienen, andere Spieler zu belästigen oder zu frustrieren</strong>, ohne kreativen, strategischen oder korrektiven Zweck.",
  Zu = () => "Griefing significa realizar acciones en el mapa <strong>únicamente para acosar o frustrar</strong> a otros jugadores, sin ningún propósito creativo, estratégico o correctivo.",
  Ou = () => "Le griefing consiste à effectuer des actions sur la carte <strong>dans le seul but de harceler ou de frustrer</strong> d'autres joueurs, sans aucun objectif créatif, stratégique ou correctif.",
  Fu = () => "Griefing significa compiere azioni sulla mappa <strong>al solo scopo di molestare o frustrare</strong> gli altri giocatori, senza alcun intento creativo, strategico o correttivo.",
  Ju = () => "グリーフィングとは、創造的、戦略的、または修正的な目的を持たず、<strong>他のプレイヤーを嫌がらせたり苛立たせたりすることだけを目的として</strong>マップ上で行う行為を指します。",
  Xu = () => "Griefing oznacza podejmowanie działań na mapie <strong>wyłącznie w celu nękania lub frustrowania</strong> innych graczy, bez żadnego twórczego, strategicznego ani korekcyjnego celu.",
  Qu = () => "Гриферство — это действия на карте, совершаемые <strong>исключительно с целью досадить или разозлить</strong> других игроков, без какого-либо творческого, стратегического или корректирующего намерения.",
  Yu = () => "Грифінг означає дії на карті, <strong>спрямовані виключно на те, щоб дратувати чи засмучувати</strong> інших гравців, без жодного творчого, стратегічного чи коригувального наміру.",
  ea = () => "Griefing có nghĩa là thực hiện các hành động trên bản đồ <strong>chỉ nhằm quấy rối hoặc gây bực bội</strong> cho người chơi khác, không có mục đích sáng tạo, chiến lược hay chỉnh sửa.",
  ra = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ku() : e === "pt" ? Wu() : e === "ch" ? Hu() : e === "de" ? Vu() : e === "es" ? Zu() : e === "fr" ? Ou() : e === "it" ? Fu() : e === "jp" ? Ju() : e === "pl" ? Xu() : e === "ru" ? Qu() : e === "uk" ? Yu() : ea()
  },
  na = () => "Using transparent pixels to remove spam, repetitive patterns, inappropriate or suggestive content is allowed.",
  ta = () => "Usar pixels transparentes para remover spam, padrões repetitivos, conteúdo inapropriado ou sugestivo é permitido.",
  ia = () => "使用透明像素移除垃圾内容、重复图案、不当或暗示性内容是被允许的。",
  oa = () => "Die Verwendung von transparenten Pixeln zum Entfernen von Spam, sich wiederholenden Mustern, unangemessenen oder anzüglichen Inhalten ist erlaubt.",
  sa = () => "Usar píxeles transparentes para eliminar spam, patrones repetitivos, contenido inapropiado o sugerente está permitido.",
  ua = () => "L'utilisation de pixels transparents pour supprimer le spam, les motifs répétitifs, le contenu inapproprié ou suggestif est autorisée.",
  aa = () => "Utilizzare pixel trasparenti per rimuovere spam, pattern ripetitivi, contenuti inappropriati o allusivi è consentito.",
  la = () => "透明ピクセルを使って、スパム、繰り返しパターン、不適切または性的示唆の強いコンテンツを除去することは許可されています。",
  _a = () => "Używanie przezroczystych pikseli do usuwania spamu, powtarzalnych wzorów, nieodpowiednich lub sugestywnych treści jest dozwolone.",
  ca = () => "Использование прозрачных пикселей для удаления спама, повторяющихся узоров, неприемлемого или откровенного контента разрешено.",
  da = () => "Використання прозорих пікселів для видалення спаму, повторюваних візерунків, неприйнятного або відвертого контенту дозволено.",
  ga = () => "Sử dụng pixel trong suốt để xóa spam, mẫu lặp lại, nội dung không phù hợp hoặc khiêu gợi là được phép.",
  pa = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? na() : e === "pt" ? ta() : e === "ch" ? ia() : e === "de" ? oa() : e === "es" ? sa() : e === "fr" ? ua() : e === "it" ? aa() : e === "jp" ? la() : e === "pl" ? _a() : e === "ru" ? ca() : e === "uk" ? da() : ga()
  },
  fa = () => "Map Cleanup",
  ma = () => "Limpeza do Mapa",
  ha = () => "地图清理",
  va = () => "Kartenbereinigung",
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
    return e === "en" ? fa() : e === "pt" ? ma() : e === "ch" ? ha() : e === "de" ? va() : e === "es" ? ba() : e === "fr" ? xa() : e === "it" ? ka() : e === "jp" ? wa() : e === "pl" ? za() : e === "ru" ? ya() : e === "uk" ? ja() : Ca()
  },
  Da = () => "<strong>One account per person.</strong> Using bots, scripts, browser automation, or any exploit to gain an unfair advantage is strictly prohibited.<br>Painting in Wplace through <strong>virtual machines, residential proxies, multi-accounting browsers, or any automation tool</strong> is also strictly prohibited and may lead to <strong>permanent bans</strong>.<br><strong>Warning:</strong> sharing a device with family or other people can cause accounts to be flagged as multi-accounting and result in suspension.",
  Pa = () => "<strong>Uma conta por pessoa.</strong> Usar bots, scripts, automação de navegador ou qualquer exploit para obter vantagem injusta é estritamente proibido.<br>Pintar no Wplace por meio de <strong>máquinas virtuais, proxies residenciais, navegadores multi-conta ou qualquer ferramenta de automação</strong> também é estritamente proibido e pode levar a <strong>banimentos permanentes</strong>.<br><strong>Aviso:</strong> compartilhar um dispositivo com familiares ou outras pessoas pode fazer com que contas sejam sinalizadas como multi-contas e resultar em suspensão.",
  Sa = () => "<strong>每人只能使用一个账号。</strong>使用机器人、脚本、浏览器自动化或任何漏洞获取不公平优势的行为严格禁止。<br>通过<strong>虚拟机、住宅代理、多账号浏览器或任何自动化工具</strong>在 Wplace 上绘画同样严格禁止，并可能导致<strong>永久封禁</strong>。<br><strong>警告：</strong>与家人或他人共用设备可能导致账号被标记为多账号并被封禁。",
  qa = () => "<strong>Ein Konto pro Person.</strong> Die Verwendung von Bots, Skripten, Browser-Automatisierung oder sonstigen Exploits, um einen unfairen Vorteil zu erlangen, ist strengstens verboten.<br>Das Malen in Wplace über <strong>virtuelle Maschinen, Residential-Proxys, Multi-Accounting-Browser oder andere Automatisierungstools</strong> ist ebenfalls strengstens verboten und kann zu <strong>permanenten Sperren</strong> führen.<br><strong>Warnung:</strong> Wenn du ein Gerät mit Familienmitgliedern oder anderen Personen teilst, können Konten als Multi-Accounting markiert und gesperrt werden.",
  Ga = () => "<strong>Una cuenta por persona.</strong> Usar bots, scripts, automatización de navegador o cualquier exploit para obtener una ventaja injusta está estrictamente prohibido.<br>Pintar en Wplace mediante <strong>máquinas virtuales, proxies residenciales, navegadores multicuenta o cualquier herramienta de automatización</strong> también está estrictamente prohibido y puede conllevar <strong>baneos permanentes</strong>.<br><strong>Advertencia:</strong> compartir un dispositivo con familiares u otras personas puede hacer que las cuentas sean marcadas como multicuenta y resulten en suspensión.",
  Ua = () => "<strong>Un seul compte par personne.</strong> L'utilisation de bots, de scripts, d'automatisation de navigateur ou de toute exploitation de faille pour obtenir un avantage déloyal est strictement interdite.<br>Peindre sur Wplace via <strong>des machines virtuelles, des proxys résidentiels, des navigateurs multi-comptes ou tout outil d'automatisation</strong> est également strictement interdit et peut entraîner des <strong>bannissements permanents</strong>.<br><strong>Avertissement :</strong> partager un appareil avec sa famille ou d'autres personnes peut entraîner le signalement des comptes comme multi-comptes et leur suspension.",
  La = () => "<strong>Un account per persona.</strong> L'uso di bot, script, automazione del browser o qualsiasi exploit per ottenere un vantaggio sleale è severamente vietato.<br>Dipingere su Wplace tramite <strong>macchine virtuali, proxy residenziali, browser multi-account o qualsiasi strumento di automazione</strong> è altresì severamente vietato e può portare a <strong>ban permanenti</strong>.<br><strong>Attenzione:</strong> condividere un dispositivo con familiari o altre persone può far sì che gli account vengano segnalati come multi-account e portare a una sospensione.",
  Aa = () => "<strong>1人につき1アカウント。</strong>ボット、スクリプト、ブラウザ自動化、またはその他のエクスプロイトを使用して不当な優位を得ることは厳しく禁止されています。<br><strong>仮想マシン、住宅プロキシ、マルチアカウントブラウザ、その他の自動化ツール</strong>を使って Wplace で描画することも厳しく禁止されており、<strong>永久BAN</strong>につながる可能性があります。<br><strong>警告：</strong>家族や他の人とデバイスを共有すると、アカウントがマルチアカウントとして検出され、利用停止になる可能性があります。",
  Na = () => "<strong>Jedno konto na osobę.</strong> Używanie botów, skryptów, automatyzacji przeglądarki lub jakichkolwiek exploitów w celu uzyskania nieuczciwej przewagi jest surowo zabronione.<br>Malowanie w Wplace przy użyciu <strong>maszyn wirtualnych, proxy residential, przeglądarek multi-kontowych lub jakichkolwiek narzędzi automatyzacji</strong> jest również surowo zabronione i może prowadzić do <strong>permanentnych banów</strong>.<br><strong>Ostrzeżenie:</strong> dzielenie urządzenia z rodziną lub innymi osobami może spowodować oznaczenie kont jako multi-konta i ich zawieszenie.",
  Ma = () => "<strong>Один аккаунт на человека.</strong> Использование ботов, скриптов, автоматизации браузера или любых эксплойтов для получения нечестного преимущества строго запрещено.<br>Рисование в Wplace через <strong>виртуальные машины, резидентные прокси, мультиаккаунт-браузеры или любые инструменты автоматизации</strong> также строго запрещено и может привести к <strong>перманентной блокировке</strong>.<br><strong>Предупреждение:</strong> совместное использование устройства с членами семьи или другими людьми может привести к тому, что аккаунты будут помечены как мультиаккаунты и заблокированы.",
  Ia = () => "<strong>Один акаунт на людину.</strong> Використання ботів, скриптів, автоматизації браузера або будь-яких експлойтів для отримання нечесної переваги суворо заборонено.<br>Малювання у Wplace через <strong>віртуальні машини, резидентні проксі, мультиакаунт-браузери або будь-які інструменти автоматизації</strong> також суворо заборонено і може призвести до <strong>перманентного блокування</strong>.<br><strong>Попередження:</strong> спільне використання пристрою з родиною або іншими людьми може призвести до того, що акаунти будуть позначені як мультиакаунти та заблоковані.",
  Ra = () => "<strong>Mỗi người một tài khoản.</strong> Sử dụng bot, script, tự động hóa trình duyệt hoặc bất kỳ lỗi khai thác nào để có lợi thế không công bằng đều bị nghiêm cấm.<br>Vẽ trên Wplace thông qua <strong>máy ảo, proxy dân cư, trình duyệt đa tài khoản hoặc bất kỳ công cụ tự động hóa nào</strong> cũng bị nghiêm cấm và có thể dẫn đến <strong>cấm vĩnh viễn</strong>.<br><strong>Cảnh báo:</strong> chia sẻ thiết bị với gia đình hoặc người khác có thể khiến tài khoản bị gắn cờ là đa tài khoản và dẫn đến đình chỉ.",
  Ba = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Da() : e === "pt" ? Pa() : e === "ch" ? Sa() : e === "de" ? qa() : e === "es" ? Ga() : e === "fr" ? Ua() : e === "it" ? La() : e === "jp" ? Aa() : e === "pl" ? Na() : e === "ru" ? Ma() : e === "uk" ? Ia() : Ra()
  },
  Ta = () => "Suggestive Content",
  Ea = () => "Conteúdo Sugestivo",
  Ka = () => "暗示性内容",
  Wa = () => "Anzügliche Inhalte",
  Ha = () => "Contenido Sugerente",
  Va = () => "Contenu suggestif",
  Za = () => "Contenuto allusivo",
  Oa = () => "性的示唆のあるコンテンツ",
  Fa = () => "Treści sugestywne",
  Ja = () => "Откровенный контент",
  Xa = () => "Відвертий контент",
  Qa = () => "Nội dung khiêu gợi",
  Ya = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ta() : e === "pt" ? Ea() : e === "ch" ? Ka() : e === "de" ? Wa() : e === "es" ? Ha() : e === "fr" ? Va() : e === "it" ? Za() : e === "jp" ? Oa() : e === "pl" ? Fa() : e === "ru" ? Ja() : e === "uk" ? Xa() : Qa()
  },
  el = () => "Drawing in this category <strong>shouldn't lead to suspensions</strong>. However, <strong>the community is free clean up or paint over these artworks</strong>. Includes drawings with sexual undertones that don't cross into explicit territory (no genitalia, sexual acts, or sexual fluids).",
  rl = () => "Desenhos nesta categoria <strong>não devem levar a suspensões</strong>. No entanto, <strong>a comunidade é livre para limpar ou pintar por cima dessas artes</strong>. Inclui desenhos com conotações sexuais que não chegam a ser explícitos (sem genitália, atos sexuais ou fluidos sexuais).",
  nl = () => "此类别中的绘画<strong>不应导致暂停</strong>。但是，<strong>社区可以自由清理或覆盖这些作品</strong>。包括具有性暗示但未达到露骨程度的绘画（无生殖器、性行为或性液体）。",
  tl = () => "Zeichnungen in dieser Kategorie <strong>sollten nicht zu Sperren führen</strong>. Allerdings <strong>ist es der Community erlaubt, diese Kunstwerke zu entfernen oder zu übermalen</strong>. Dazu gehören Zeichnungen mit sexuellen Untertönen, die nicht in explizites Gebiet vordringen (keine Genitalien, sexuelle Handlungen oder sexuelle Flüssigkeiten).",
  il = () => "Dibujar en esta categoría <strong>no debería llevar a suspensiones</strong>. Sin embargo, <strong>la comunidad es libre de limpiar o pintar sobre estas obras</strong>. Incluye dibujos con insinuaciones sexuales que no cruzan al territorio explícito (sin genitales, actos sexuales ni fluidos sexuales).",
  ol = () => "Les dessins de cette catégorie <strong>ne devraient pas entraîner de suspension</strong>. Cependant, <strong>la communauté est libre de nettoyer ou de peindre par-dessus ces œuvres</strong>. Cela inclut les dessins à connotation sexuelle qui ne franchissent pas la limite du contenu explicite (pas d'organes génitaux, d'actes sexuels ni de fluides sexuels).",
  sl = () => "I disegni in questa categoria <strong>non dovrebbero portare a sospensioni</strong>. Tuttavia, <strong>la community è libera di ripulire o dipingere sopra queste opere</strong>. Include disegni con sottotoni sessuali che non superano il limite dell'esplicito (nessun genitale, atto sessuale o fluido sessuale).",
  ul = () => "このカテゴリの描画は<strong>停止処分の対象にはなりません</strong>。ただし、<strong>コミュニティはこれらの作品を自由に消去・上書きできます</strong>。露骨な表現（性器、性行為、体液）には至らないが、性的なニュアンスを含む描画が該当します。",
  al = () => "Rysunki z tej kategorii <strong>nie powinny prowadzić do zawieszeń</strong>. Jednakże <strong>społeczność może swobodnie usuwać lub zamalowywać te grafiki</strong>. Obejmuje rysunki o podtekście seksualnym, które nie przekraczają granicy treści jednoznacznych (brak genitaliów, aktów seksualnych czy płynów seksualnych).",
  ll = () => "Рисунки в этой категории <strong>не должны приводить к блокировке</strong>. Однако <strong>сообщество вправе убирать или закрашивать такие рисунки</strong>. Включает рисунки с сексуальным подтекстом, не переходящие в откровенную территорию (без гениталий, половых актов или половых жидкостей).",
  _l = () => "Малюнки з цієї категорії <strong>не повинні призводити до блокувань</strong>. Однак <strong>спільнота має повне право очистити чи замалювати такі роботи</strong>. Включає малюнки з сексуальним підтекстом, які не переходять у відверту територію (без геніталій, статевих актів чи статевих рідин).",
  cl = () => "Vẽ trong danh mục này <strong>không nên dẫn đến đình chỉ</strong>. Tuy nhiên, <strong>cộng đồng được tự do dọn dẹp hoặc tô đè lên các tác phẩm này</strong>. Bao gồm các bức vẽ có ẩn ý tình dục nhưng không vượt qua ranh giới khiêu dâm (không có bộ phận sinh dục, hành vi tình dục hay dịch thể tình dục).",
  dl = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? el() : e === "pt" ? rl() : e === "ch" ? nl() : e === "de" ? tl() : e === "es" ? il() : e === "fr" ? ol() : e === "it" ? sl() : e === "jp" ? ul() : e === "pl" ? al() : e === "ru" ? ll() : e === "uk" ? _l() : cl()
  },
  gl = () => "Space is limited. Players and communities will compete for territory, and that's not just allowed, it's what keeps the map alive. Claiming, defending, and reclaiming space is core gameplay.",
  pl = () => "O espaço é limitado. Jogadores e comunidades vão competir por território, e isso não é apenas permitido, é o que mantém o mapa vivo. Conquistar, defender e retomar espaço faz parte da jogabilidade principal.",
  fl = () => "空间有限。玩家和社区会争夺领地，这不仅被允许，更是让地图保持活力的关键。占领、防守和夺回空间是核心玩法。",
  ml = () => "Der Platz ist begrenzt. Spieler und Communities werden um Gebiete konkurrieren, und das ist nicht nur erlaubt, es hält die Karte lebendig. Gebiete beanspruchen, verteidigen und zurückerobern ist Teil des Kernspiels.",
  hl = () => "El espacio es limitado. Los jugadores y comunidades competirán por territorio, y eso no solo está permitido, es lo que mantiene el mapa vivo. Reclamar, defender y reconquistar espacio es parte esencial del juego.",
  vl = () => "L'espace est limité. Les joueurs et les communautés se disputeront le territoire, et ce n'est pas seulement autorisé, c'est ce qui fait vivre la carte. Revendiquer, défendre et reconquérir l'espace fait partie du gameplay de base.",
  bl = () => "Lo spazio è limitato. I giocatori e le community competeranno per il territorio, e questo non è solo consentito, è ciò che mantiene viva la mappa. Conquistare, difendere e riconquistare spazio è il gameplay fondamentale.",
  xl = () => "スペースには限りがあります。プレイヤーやコミュニティは領土をめぐって競い合います。これは許可されているだけでなく、マップを活気づける要素です。スペースの確保、防衛、奪還はゲームの基本です。",
  kl = () => "Przestrzeń jest ograniczona. Gracze i społeczności będą rywalizować o terytorium — i to nie tylko jest dozwolone, to właśnie utrzymuje mapę przy życiu. Zajmowanie, obrona i odzyskiwanie przestrzeni to podstawowa rozgrywka.",
  wl = () => "Пространство ограничено. Игроки и сообщества будут конкурировать за территорию, и это не просто разрешено — это то, что поддерживает карту живой. Захват, оборона и отвоевание территории — основная механика игры.",
  zl = () => "Простір обмежений. Гравці та спільноти змагатимуться за територію, і це не лише дозволено — це те, що підтримує карту живою. Захоплення, оборона та відвоювання простору є основою геймплею.",
  yl = () => "Không gian có hạn. Người chơi và cộng đồng sẽ cạnh tranh lãnh thổ, và điều đó không chỉ được phép — nó là thứ giữ cho bản đồ sống động. Chiếm, bảo vệ và giành lại không gian là cách chơi cốt lõi.",
  jl = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? gl() : e === "pt" ? pl() : e === "ch" ? fl() : e === "de" ? ml() : e === "es" ? hl() : e === "fr" ? vl() : e === "it" ? bl() : e === "jp" ? xl() : e === "pl" ? kl() : e === "ru" ? wl() : e === "uk" ? zl() : yl()
  },
  Cl = () => "Territorial Disputes",
  $l = () => "Disputas Territoriais",
  Dl = () => "领地争夺",
  Pl = () => "Gebietskonflikte",
  Sl = () => "Disputas Territoriales",
  ql = () => "Disputes territoriales",
  Gl = () => "Dispute territoriali",
  Ul = () => "領土紛争",
  Ll = () => "Spory terytorialne",
  Al = () => "Территориальные споры",
  Nl = () => "Територіальні спори",
  Ml = () => "Tranh chấp lãnh thổ",
  Il = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Cl() : e === "pt" ? $l() : e === "ch" ? Dl() : e === "de" ? Pl() : e === "es" ? Sl() : e === "fr" ? ql() : e === "it" ? Gl() : e === "jp" ? Ul() : e === "pl" ? Ll() : e === "ru" ? Al() : e === "uk" ? Nl() : Ml()
  },
  Rl = () => "Painting over other players' work is a normal part of the game. If your intent isn't to only harass or deliberately frustrate someone, moderators won't intervene.",
  Bl = () => "Pintar por cima do trabalho de outros jogadores é uma parte normal do jogo. Se sua intenção não for apenas assediar ou frustrar alguém deliberadamente, os moderadores não irão intervir.",
  Tl = () => "覆盖其他玩家的作品是游戏的正常组成部分。如果你的目的不仅仅是骚扰或故意激怒他人，管理员不会介入。",
  El = () => "Das Übermalen der Arbeit anderer Spieler ist ein normaler Teil des Spiels. Wenn deine Absicht nicht darin besteht, jemanden nur zu belästigen oder absichtlich zu frustrieren, werden Moderatoren nicht eingreifen.",
  Kl = () => "Pintar sobre el trabajo de otros jugadores es una parte normal del juego. Si tu intención no es solo acosar o frustrar deliberadamente a alguien, los moderadores no intervendrán.",
  Wl = () => "Peindre par-dessus le travail d'autres joueurs fait partie intégrante du jeu. Si votre intention n'est pas uniquement de harceler ou de frustrer délibérément quelqu'un, les modérateurs n'interviendront pas.",
  Hl = () => "Dipingere sopra il lavoro di altri giocatori è una parte normale del gioco. Se il tuo intento non è solo quello di molestare o frustrare deliberatamente qualcuno, i moderatori non interverranno.",
  Vl = () => "他のプレイヤーの作品の上にペイントすることは、ゲームの通常の一部です。あなたの意図が単に嫌がらせや故意に苛立たせることでなければ、モデレーターは介入しません。",
  Zl = () => "Zamalowywanie prac innych graczy jest normalną częścią gry. Jeśli Twoim celem nie jest wyłącznie nękanie lub celowe frustrowanie kogoś, moderatorzy nie będą interweniować.",
  Ol = () => "Рисование поверх работ других игроков — нормальная часть игры. Если ваша цель не состоит исключительно в том, чтобы досадить или намеренно расстроить кого-то, модераторы не вмешаются.",
  Fl = () => "Малювання поверх робіт інших гравців є нормальною частиною гри. Якщо ваш намір — не лише дратувати чи навмисно засмучувати когось, модератори не втручатимуться.",
  Jl = () => "Tô đè lên tác phẩm của người chơi khác là một phần bình thường của trò chơi. Nếu mục đích của bạn không phải chỉ để quấy rối hay cố tình gây bực bội ai đó, quản trị viên sẽ không can thiệp.",
  Xl = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Rl() : e === "pt" ? Bl() : e === "ch" ? Tl() : e === "de" ? El() : e === "es" ? Kl() : e === "fr" ? Wl() : e === "it" ? Hl() : e === "jp" ? Vl() : e === "pl" ? Zl() : e === "ru" ? Ol() : e === "uk" ? Fl() : Jl()
  },
  Ql = () => "Zero-tolerance content",
  Yl = () => "Conteúdo de tolerância zero",
  e_ = () => "零容忍内容",
  r_ = () => "Null-Toleranz-Inhalte",
  n_ = () => "Contenido de tolerancia cero",
  t_ = () => "Contenu à tolérance zéro",
  i_ = () => "Contenuti a tolleranza zero",
  o_ = () => "ゼロトレランスコンテンツ",
  s_ = () => "Treści objęte zerową tolerancją",
  u_ = () => "Контент с нулевой терпимостью",
  a_ = () => "Контент з нульовою толерантністю",
  l_ = () => "Nội dung không khoan nhượng",
  __ = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ql() : e === "pt" ? Yl() : e === "ch" ? e_() : e === "de" ? r_() : e === "es" ? n_() : e === "fr" ? t_() : e === "it" ? i_() : e === "jp" ? o_() : e === "pl" ? s_() : e === "ru" ? u_() : e === "uk" ? a_() : l_()
  },
  c_ = () => "The following content is subject to moderation intervention and can result in a <strong>permanent ban</strong>:",
  d_ = () => "O seguinte conteúdo está sujeito a intervenção da moderação e pode resultar em <strong>banimento permanente</strong>:",
  g_ = () => "以下内容将受到管理介入，并可能导致<strong>永久封禁</strong>：",
  p_ = () => "Die folgenden Inhalte unterliegen moderativen Maßnahmen und können zu einem <strong>permanenten Bann</strong> führen:",
  f_ = () => "El siguiente contenido está sujeto a intervención de moderación y puede resultar en un <strong>ban permanente</strong>:",
  m_ = () => "Le contenu suivant est soumis à une intervention de la modération et peut entraîner un <strong>bannissement permanent</strong> :",
  h_ = () => "I seguenti contenuti sono soggetti a intervento della moderazione e possono comportare un <strong>ban permanente</strong>:",
  v_ = () => "以下のコンテンツはモデレーションの対象となり、<strong>永久BAN</strong>になる場合があります:",
  b_ = () => "Poniższe treści podlegają interwencji moderacji i mogą skutkować <strong>permanentnym banem</strong>:",
  x_ = () => "Следующий контент подлежит модераторскому вмешательству и может привести к <strong>перманентному бану</strong>:",
  k_ = () => "Наступний контент підлягає модераторському втручанню і може призвести до <strong>перманентного бану</strong>:",
  w_ = () => "Các nội dung sau đây sẽ bị can thiệp kiểm duyệt và có thể dẫn đến <strong>cấm vĩnh viễn</strong>:",
  z_ = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? c_() : e === "pt" ? d_() : e === "ch" ? g_() : e === "de" ? p_() : e === "es" ? f_() : e === "fr" ? m_() : e === "it" ? h_() : e === "jp" ? v_() : e === "pl" ? b_() : e === "ru" ? x_() : e === "uk" ? k_() : w_()
  },
  y_ = () => "Doxxing (sharing anyone's private personal information)",
  j_ = () => "Doxxing (compartilhar informações pessoais privadas de qualquer pessoa)",
  C_ = () => "人肉搜索（分享任何人的私人个人信息）",
  $_ = () => "Doxxing (Veröffentlichung persönlicher Informationen anderer)",
  D_ = () => "Doxxing (compartir información personal privada de cualquier persona)",
  P_ = () => "Doxxing (partage d'informations personnelles privées de quiconque)",
  S_ = () => "Doxxing (condivisione di informazioni personali private di chiunque)",
  q_ = () => "ドキシング（他人の個人情報の共有）",
  G_ = () => "Doxxing (udostępnianie prywatnych danych osobowych innych osób)",
  U_ = () => "Доксинг (распространение чьей-либо личной информации)",
  L_ = () => "Доксинг (поширення приватної особистої інформації будь-кого)",
  A_ = () => "Doxxing (chia sẻ thông tin cá nhân riêng tư của bất kỳ ai)",
  N_ = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? y_() : e === "pt" ? j_() : e === "ch" ? C_() : e === "de" ? $_() : e === "es" ? D_() : e === "fr" ? P_() : e === "it" ? S_() : e === "jp" ? q_() : e === "pl" ? G_() : e === "ru" ? U_() : e === "uk" ? L_() : A_()
  },
  M_ = () => "Explicit sexual content (genitalia, sexual acts, sexual fluids)",
  I_ = () => "Conteúdo sexual explícito (genitália, atos sexuais, fluidos sexuais)",
  R_ = () => "露骨的色情内容（生殖器、性行为、性液体）",
  B_ = () => "Explizit sexuelle Inhalte (Genitalien, sexuelle Handlungen, sexuelle Flüssigkeiten)",
  T_ = () => "Contenido sexual explícito (genitales, actos sexuales, fluidos sexuales)",
  E_ = () => "Contenu sexuel explicite (organes génitaux, actes sexuels, fluides sexuels)",
  K_ = () => "Contenuto sessuale esplicito (genitali, atti sessuali, fluidi sessuali)",
  W_ = () => "露骨な性的コンテンツ（性器、性行為、体液）",
  H_ = () => "Jednoznaczne treści seksualne (genitalia, akty seksualne, płyny seksualne)",
  V_ = () => "Откровенный сексуальный контент (гениталии, половые акты, половые жидкости)",
  Z_ = () => "Відверто сексуальний контент (геніталії, статеві акти, статеві рідини)",
  O_ = () => "Nội dung tình dục rõ ràng (bộ phận sinh dục, hành vi tình dục, dịch thể tình dục)",
  F_ = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? M_() : e === "pt" ? I_() : e === "ch" ? R_() : e === "de" ? B_() : e === "es" ? T_() : e === "fr" ? E_() : e === "it" ? K_() : e === "jp" ? W_() : e === "pl" ? H_() : e === "ru" ? V_() : e === "uk" ? Z_() : O_()
  },
  J_ = () => "Extreme graphic gore or realistic violence",
  X_ = () => "Gore gráfico extremo ou violência realista",
  Q_ = () => "极端血腥或写实暴力内容",
  Y_ = () => "Extremer grafischer Gore oder realistische Gewalt",
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
    return e === "en" ? J_() : e === "pt" ? X_() : e === "ch" ? Q_() : e === "de" ? Y_() : e === "es" ? ec() : e === "fr" ? rc() : e === "it" ? nc() : e === "jp" ? tc() : e === "pl" ? ic() : e === "ru" ? oc() : e === "uk" ? sc() : uc()
  },
  lc = () => "Extreme hostility or targeted harassment toward others",
  _c = () => "Hostilidade extrema ou assédio direcionado a outros",
  cc = () => "对他人的极端敌意或针对性骚扰",
  dc = () => "Extreme Feindseligkeit oder gezielte Belästigung anderer",
  gc = () => "Hostilidad extrema o acoso dirigido hacia otros",
  pc = () => "Hostilité extrême ou harcèlement ciblé envers autrui",
  fc = () => "Ostilità estrema o molestie mirate verso altri",
  mc = () => "他者に対する極端な敵意や標的型の嫌がらせ",
  hc = () => "Skrajna wrogość lub ukierunkowane nękanie innych osób",
  vc = () => "Крайняя враждебность или целенаправленная травля других",
  bc = () => "Екстремальна ворожість або цілеспрямоване переслідування інших",
  xc = () => "Thái độ thù địch cực đoan hoặc quấy rối nhắm vào người khác",
  kc = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? lc() : e === "pt" ? _c() : e === "ch" ? cc() : e === "de" ? dc() : e === "es" ? gc() : e === "fr" ? pc() : e === "it" ? fc() : e === "jp" ? mc() : e === "pl" ? hc() : e === "ru" ? vc() : e === "uk" ? bc() : xc()
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
  qc = () => "Явная речь ненависти, грубые оскорбления или символы ненависти (например, свастики)",
  Gc = () => "Явна мова ненависті, образливі слова або символи ненависті (напр. свастики)",
  Uc = () => "Ngôn từ thù hằn rõ ràng, từ ngữ xúc phạm nặng hoặc biểu tượng thù hận (ví dụ: chữ vạn)",
  Lc = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? wc() : e === "pt" ? zc() : e === "ch" ? yc() : e === "de" ? jc() : e === "es" ? Cc() : e === "fr" ? $c() : e === "it" ? Dc() : e === "jp" ? Pc() : e === "pl" ? Sc() : e === "ru" ? qc() : e === "uk" ? Gc() : Uc()
  },
  Ac = () => "Sexualization of minors or fictitious characters with child-like visual traits, regardless of their fictional age or lore",
  Nc = () => "Sexualização de menores ou personagens fictícios com traços visuais infantis, independentemente de sua idade ou história fictícia",
  Mc = () => "对未成年人或具有明显儿童外貌特征的虚构角色的性化描绘，无论其虚构年龄或设定如何",
  Ic = () => "Sexualisierung von Minderjährigen oder fiktiven Charakteren mit kindlichen visuellen Merkmalen, unabhängig von ihrem fiktiven Alter oder ihrer Geschichte",
  Rc = () => "Sexualización de menores o personajes ficticios con rasgos visuales infantiles, independientemente de su edad ficticia o historia",
  Bc = () => "Sexualisation de mineurs ou de personnages fictifs présentant des traits visuels enfantins, indépendamment de leur âge ou histoire fictifs",
  Tc = () => "Sessualizzazione di minori o personaggi fittizi con tratti visivi infantili, indipendentemente dalla loro età fittizia o storia",
  Ec = () => "未成年者、または架空の年齢や設定に関わらず、明らかに幼い外見的特徴を持つ架空のキャラクターの性的表現",
  Kc = () => "Seksualizacja nieletnich lub fikcyjnych postaci o dziecięcych cechach wizualnych, niezależnie od ich fikcyjnego wieku czy historii",
  Wc = () => "Сексуализация несовершеннолетних или вымышленных персонажей с визуальными детскими чертами, независимо от их вымышленного возраста или истории",
  Hc = () => "Сексуалізація неповнолітніх або вигаданих персонажів з візуальними дитячими рисами, незалежно від їхнього вигаданого віку чи історії",
  Vc = () => "Tình dục hóa trẻ vị thành niên hoặc các nhân vật hư cấu có đặc điểm ngoại hình trẻ em, bất kể tuổi hoặc cốt truyện hư cấu của họ",
  Zc = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ac() : e === "pt" ? Nc() : e === "ch" ? Mc() : e === "de" ? Ic() : e === "es" ? Rc() : e === "fr" ? Bc() : e === "it" ? Tc() : e === "jp" ? Ec() : e === "pl" ? Kc() : e === "ru" ? Wc() : e === "uk" ? Hc() : Vc()
  },
  Oc = () => "Rules",
  Fc = () => "Regras",
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
  Tm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Oc() : e === "pt" ? Fc() : e === "ch" ? Jc() : e === "de" ? Xc() : e === "es" ? Qc() : e === "fr" ? Yc() : e === "it" ? ed() : e === "jp" ? rd() : e === "pl" ? nd() : e === "ru" ? td() : e === "uk" ? id() : od()
  },
  sd = () => "allowed",
  ud = () => "permitido",
  ad = () => "允许",
  ld = () => "erlaubt",
  _d = () => "permitido",
  cd = () => "autorisé",
  dd = () => "consentito",
  gd = () => "許可",
  pd = () => "dozwolone",
  fd = () => "разрешено",
  md = () => "дозволено",
  hd = () => "được phép",
  ze = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? sd() : e === "pt" ? ud() : e === "ch" ? ad() : e === "de" ? ld() : e === "es" ? _d() : e === "fr" ? cd() : e === "it" ? dd() : e === "jp" ? gd() : e === "pl" ? pd() : e === "ru" ? fd() : e === "uk" ? md() : hd()
  },
  vd = () => "permanent ban",
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
    return e === "en" ? vd() : e === "pt" ? bd() : e === "ch" ? xd() : e === "de" ? kd() : e === "es" ? wd() : e === "fr" ? zd() : e === "it" ? yd() : e === "jp" ? jd() : e === "pl" ? Cd() : e === "ru" ? $d() : e === "uk" ? Dd() : Pd()
  },
  Sd = () => "timeout",
  qd = () => "suspensão",
  Gd = () => "禁言",
  Ud = () => "Sperre",
  Ld = () => "suspensión",
  Ad = () => "suspension",
  Nd = () => "sospensione",
  Md = () => "一時停止",
  Id = () => "zawieszenie",
  Rd = () => "тайм-аут",
  Bd = () => "тайм-аут",
  Td = () => "tạm khóa",
  Ed = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Sd() : e === "pt" ? qd() : e === "ch" ? Gd() : e === "de" ? Ud() : e === "es" ? Ld() : e === "fr" ? Ad() : e === "it" ? Nd() : e === "jp" ? Md() : e === "pl" ? Id() : e === "ru" ? Rd() : e === "uk" ? Bd() : Td()
  },
  Kd = () => "Destroying others' work with no creative intent.",
  Wd = () => "Destruir o trabalho dos outros sem intenção criativa.",
  Hd = () => "毫无创意目的地破坏他人作品。",
  Vd = () => "Zerstörung der Arbeit anderer ohne kreative Absicht.",
  Zd = () => "Destruir el trabajo de otros sin intención creativa.",
  Od = () => "Détruire le travail des autres sans intention créative.",
  Fd = () => "Distruggere il lavoro degli altri senza intento creativo.",
  Jd = () => "創造的な意図なく他人の作品を破壊する行為。",
  Xd = () => "Niszczenie cudzych prac bez intencji twórczej.",
  Qd = () => "Уничтожение чужих работ без какого-либо творческого намерения.",
  Yd = () => "Знищення чужих робіт без творчого наміру.",
  eg = () => "Phá hoại tác phẩm của người khác mà không có ý định sáng tạo.",
  rg = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Kd() : e === "pt" ? Wd() : e === "ch" ? Hd() : e === "de" ? Vd() : e === "es" ? Zd() : e === "fr" ? Od() : e === "it" ? Fd() : e === "jp" ? Jd() : e === "pl" ? Xd() : e === "ru" ? Qd() : e === "uk" ? Yd() : eg()
  },
  ng = () => "Explicit, hateful, or illegal content is not tolerated.",
  tg = () => "Conteúdo explícito, de ódio ou ilegal não é tolerado.",
  ig = () => "不容忍色情、仇恨或违法内容。",
  og = () => "Explizite, hasserfüllte oder illegale Inhalte werden nicht toleriert.",
  sg = () => "El contenido explícito, de odio o ilegal no es tolerado.",
  ug = () => "Le contenu explicite, haineux ou illégal n'est pas toléré.",
  ag = () => "Contenuti espliciti, di odio o illegali non sono tollerati.",
  lg = () => "露骨、差別的、または違法なコンテンツは容認されません。",
  _g = () => "Treści jednoznacznie seksualne, nawołujące do nienawiści lub nielegalne nie są tolerowane.",
  cg = () => "Откровенный, ненавистнический или незаконный контент запрещён.",
  dg = () => "Відвертий, ненависницький або незаконний контент не допускається.",
  gg = () => "Nội dung khiêu dâm, thù hằn hoặc bất hợp pháp sẽ không được dung thứ.",
  pg = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ng() : e === "pt" ? tg() : e === "ch" ? ig() : e === "de" ? og() : e === "es" ? sg() : e === "fr" ? ug() : e === "it" ? ag() : e === "jp" ? lg() : e === "pl" ? _g() : e === "ru" ? cg() : e === "uk" ? dg() : gg()
  },
  fg = () => "Erasing spam, inappropriate or suggestive content with transparent pixels.",
  mg = () => "Apagar spam, conteúdo inapropriado ou sugestivo com pixels transparentes.",
  hg = () => "使用透明像素清除垃圾内容、不当或暗示性内容。",
  vg = () => "Spam, unangemessene oder anzügliche Inhalte mit transparenten Pixeln entfernen.",
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
    return e === "en" ? fg() : e === "pt" ? mg() : e === "ch" ? hg() : e === "de" ? vg() : e === "es" ? bg() : e === "fr" ? xg() : e === "it" ? kg() : e === "jp" ? wg() : e === "pl" ? zg() : e === "ru" ? yg() : e === "uk" ? jg() : Cg()
  },
  Dg = () => "One account per person. No automation or exploits.",
  Pg = () => "Uma conta por pessoa. Sem automação ou exploits.",
  Sg = () => "每人只能使用一个账号。禁止使用自动化工具或利用漏洞。",
  qg = () => "Ein Konto pro Person. Keine Automatisierung oder Exploits.",
  Gg = () => "Una cuenta por persona. Sin automatización ni exploits.",
  Ug = () => "Un seul compte par personne. Aucune automatisation ni exploitation de failles.",
  Lg = () => "Un account per persona. Nessuna automazione o exploit.",
  Ag = () => "1人につき1アカウントです。自動化やエクスプロイトは禁止です。",
  Ng = () => "Jedno konto na osobę. Żadnej automatyzacji ani exploitów.",
  Mg = () => "Один аккаунт на человека. Никакой автоматизации и эксплойтов.",
  Ig = () => "Один акаунт на людину. Без автоматизації чи експлойтів.",
  Rg = () => "Mỗi người một tài khoản. Không được tự động hóa hay khai thác lỗi.",
  Bg = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Dg() : e === "pt" ? Pg() : e === "ch" ? Sg() : e === "de" ? qg() : e === "es" ? Gg() : e === "fr" ? Ug() : e === "it" ? Lg() : e === "jp" ? Ag() : e === "pl" ? Ng() : e === "ru" ? Mg() : e === "uk" ? Ig() : Rg()
  },
  Tg = () => "Competing for space is part of the game.",
  Eg = () => "Competir por espaço faz parte do jogo.",
  Kg = () => "争夺空间是游戏的一部分。",
  Wg = () => "Der Wettbewerb um Platz ist Teil des Spiels.",
  Hg = () => "Competir por el espacio es parte del juego.",
  Vg = () => "La compétition pour l'espace fait partie du jeu.",
  Zg = () => "Competere per lo spazio fa parte del gioco.",
  Og = () => "スペースをめぐる競争はゲームの一部です。",
  Fg = () => "Rywalizacja o przestrzeń jest częścią gry.",
  Jg = () => "Борьба за территорию — часть игры.",
  Xg = () => "Боротьба за простір — це частина гри.",
  Qg = () => "Cạnh tranh không gian là một phần của trò chơi.",
  Yg = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Tg() : e === "pt" ? Eg() : e === "ch" ? Kg() : e === "de" ? Wg() : e === "es" ? Hg() : e === "fr" ? Vg() : e === "it" ? Zg() : e === "jp" ? Og() : e === "pl" ? Fg() : e === "ru" ? Jg() : e === "uk" ? Xg() : Qg()
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
  lp = () => "Честная игра",
  _p = () => "Чесна гра",
  cp = () => "Chơi công bằng",
  dp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ep() : e === "pt" ? rp() : e === "ch" ? np() : e === "de" ? tp() : e === "es" ? ip() : e === "fr" ? op() : e === "it" ? sp() : e === "jp" ? up() : e === "pl" ? ap() : e === "ru" ? lp() : e === "uk" ? _p() : cp()
  },
  gp = () => "Prohibited",
  pp = () => "Proibido",
  fp = () => "禁止行为",
  mp = () => "Verboten",
  hp = () => "Prohibido",
  vp = () => "Interdit",
  bp = () => "Vietato",
  xp = () => "禁止事項",
  kp = () => "Zabronione",
  wp = () => "Запрещено",
  zp = () => "Заборонено",
  yp = () => "Bị cấm",
  jp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? gp() : e === "pt" ? pp() : e === "ch" ? fp() : e === "de" ? mp() : e === "es" ? hp() : e === "fr" ? vp() : e === "it" ? bp() : e === "jp" ? xp() : e === "pl" ? kp() : e === "ru" ? wp() : e === "uk" ? zp() : yp()
  },
  Cp = () => "Griefing",
  $p = () => "Griefing",
  Dp = () => "恶意破坏",
  Pp = () => "Griefing",
  Sp = () => "Griefing",
  qp = () => "Griefing",
  Gp = () => "Griefing",
  Up = () => "グリーフィング",
  Lp = () => "Griefing",
  Ap = () => "Гриферство",
  Np = () => "Грифінг",
  Mp = () => "Griefing",
  Ip = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Cp() : e === "pt" ? $p() : e === "ch" ? Dp() : e === "de" ? Pp() : e === "es" ? Sp() : e === "fr" ? qp() : e === "it" ? Gp() : e === "jp" ? Up() : e === "pl" ? Lp() : e === "ru" ? Ap() : e === "uk" ? Np() : Mp()
  },
  Rp = () => "Inappropriate content",
  Bp = () => "Conteúdo inapropriado",
  Tp = () => "不当内容",
  Ep = () => "Unangemessene Inhalte",
  Kp = () => "Contenido inapropiado",
  Wp = () => "Contenu inapproprié",
  Hp = () => "Contenuto inappropriato",
  Vp = () => "不適切なコンテンツ",
  Zp = () => "Nieodpowiednie treści",
  Op = () => "Неприемлемый контент",
  Fp = () => "Неприйнятний вміст",
  Jp = () => "Nội dung không phù hợp",
  Xp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Rp() : e === "pt" ? Bp() : e === "ch" ? Tp() : e === "de" ? Ep() : e === "es" ? Kp() : e === "fr" ? Wp() : e === "it" ? Hp() : e === "jp" ? Vp() : e === "pl" ? Zp() : e === "ru" ? Op() : e === "uk" ? Fp() : Jp()
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
  lf = () => "Очищення карти",
  _f = () => "Dọn dẹp bản đồ",
  cf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Qp() : e === "pt" ? Yp() : e === "ch" ? ef() : e === "de" ? rf() : e === "es" ? nf() : e === "fr" ? tf() : e === "it" ? of() : e === "jp" ? sf() : e === "pl" ? uf() : e === "ru" ? af() : e === "uk" ? lf() : _f()
  },
  df = () => "Multi-accounts & bots",
  gf = () => "Múltiplas contas e bots",
  pf = () => "多账号与机器人",
  ff = () => "Multi-Accounts & Bots",
  mf = () => "Multi-cuentas y bots",
  hf = () => "Multi-comptes et bots",
  vf = () => "Multi-account e bot",
  bf = () => "複数アカウント＆ボット",
  xf = () => "Multi-konta i boty",
  kf = () => "Мультиаккаунты и боты",
  wf = () => "Мультиакаунти та боти",
  zf = () => "Nhiều tài khoản & bot",
  yf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? df() : e === "pt" ? gf() : e === "ch" ? pf() : e === "de" ? ff() : e === "es" ? mf() : e === "fr" ? hf() : e === "it" ? vf() : e === "jp" ? bf() : e === "pl" ? xf() : e === "ru" ? kf() : e === "uk" ? wf() : zf()
  },
  jf = () => "Territorial disputes",
  Cf = () => "Disputas territoriais",
  $f = () => "领地争夺",
  Df = () => "Gebietskonflikte",
  Pf = () => "Disputas territoriales",
  Sf = () => "Disputes territoriales",
  qf = () => "Dispute territoriali",
  Gf = () => "領土紛争",
  Uf = () => "Spory terytorialne",
  Lf = () => "Территориальные споры",
  Af = () => "Територіальні спори",
  Nf = () => "Tranh chấp lãnh thổ",
  Mf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? jf() : e === "pt" ? Cf() : e === "ch" ? $f() : e === "de" ? Df() : e === "es" ? Pf() : e === "fr" ? Sf() : e === "it" ? qf() : e === "jp" ? Gf() : e === "pl" ? Uf() : e === "ru" ? Lf() : e === "uk" ? Af() : Nf()
  };
var If = P('<div class="absolute inset-0 z-20 flex items-center justify-center"><div class="flex flex-col items-center gap-2.5"><div class="text-base-content/60 flex h-14 w-14 items-center justify-center rounded-full bg-white/75"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg></div> <span class="text-base-content/85 text-sm font-semibold"> </span> <button class="bg-neutral/75 hover:bg-neutral/90 mt-0.5 flex items-center gap-1.5 rounded-full border-none px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition-all active:scale-[0.96]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> </button></div></div>'),
  Rf = P("<button>&#8249;</button>"),
  Bf = P('<button class="bg-neutral/55 hover:bg-neutral/80 absolute right-2 bottom-3 z-10 flex items-center gap-1.5 rounded-full border-none px-4 py-2 text-[0.82rem] font-medium text-white backdrop-blur-sm transition-all active:scale-[0.96]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> </button>'),
  Tf = P('<div><img class="block h-full w-full object-cover"/></div>'),
  Ef = P("<button>&#8250;</button>"),
  Kf = P("<button></button>"),
  Wf = P('<div class="relative mb-6 flex flex-wrap items-center" role="region" aria-roledescription="carousel" tabindex="0"><div class="relative w-full touch-pan-y overflow-hidden rounded-lg" role="group"><!> <!> <!> <div></div> <!></div> <p aria-live="polite"> </p> <div></div></div>');

function _e(n, r) {
  re(r, !0);
  let e = W(r, "sensitive", 3, !1),
    p = ke(0),
    v = ke(!1),
    S = 0,
    C = Q(() => e() && !i(v));

  function b(c) {
    c === i(p) || c < 0 || c >= r.cards.length || ve(p, c, !0)
  }
  var L = Wf(),
    j = l(L),
    x = l(j);
  {
    var w = c => {
      var f = If(),
        q = l(f),
        k = _(l(q), 2),
        U = l(k, !0);
      u(k);
      var G = _(k, 2),
        I = _(l(G));
      u(G), u(q), u(f), g((Y, J) => {
        m(U, Y), m(I, ` ${J??""}`)
      }, [() => en(), () => Ke()]), X("click", G, () => {
        ve(v, !0)
      }), s(c, f)
    };
    K(x, c => {
      i(C) && c(w)
    })
  }
  var h = _(x, 2);
  {
    var D = c => {
      var f = Rf();
      A(f, 1, "absolute top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-none bg-black/45 text-lg leading-none text-white backdrop-blur-sm transition-colors select-none hover:bg-black/70 active:scale-[0.92] disabled:pointer-events-none disabled:opacity-30 md:h-14 md:w-14 md:text-[1.6rem] left-2"), g(q => {
        Z(f, "aria-label", q), f.disabled = i(p) === 0
      }, [() => Pe()]), X("click", f, () => b(i(p) - 1)), s(c, f)
    };
    K(h, c => {
      i(C) || c(D)
    })
  }
  var z = _(h, 2);
  {
    var $ = c => {
      var f = Bf(),
        q = _(l(f));
      u(f), g((k, U) => {
        Z(f, "aria-label", k), m(q, ` ${U??""}`)
      }, [() => fr(), () => nr()]), X("click", f, () => {
        ve(v, !1)
      }), s(c, f)
    };
    K(z, c => {
      e() && !i(C) && c($)
    })
  }
  var y = _(z, 2);
  let o;
  ce(y, 21, () => r.cards, de, (c, f, q) => {
    var k = Tf(),
      U = l(k);
    u(k), g(() => {
      A(k, 1, `border-base-300 bg-base-100 w-full overflow-hidden rounded-lg border transition-opacity duration-300 [grid-area:1/1] ${q===i(p)?"pointer-events-auto opacity-100":"pointer-events-none opacity-0"}`), Z(k, "aria-hidden", q !== i(p)), Z(U, "src", i(f).src), Z(U, "alt", i(f).alt)
    }), s(c, k)
  }), u(y);
  var a = _(y, 2);
  {
    var d = c => {
      var f = Ef();
      A(f, 1, "absolute top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-none bg-black/45 text-lg leading-none text-white backdrop-blur-sm transition-colors select-none hover:bg-black/70 active:scale-[0.92] disabled:pointer-events-none disabled:opacity-30 md:h-14 md:w-14 md:text-[1.6rem] right-2"), g(q => {
        Z(f, "aria-label", q), f.disabled = i(p) === r.cards.length - 1
      }, [() => Se()]), X("click", f, () => b(i(p) + 1)), s(c, f)
    };
    K(a, c => {
      i(C) || c(d)
    })
  }
  u(j);
  var B = _(j, 2);
  let F;
  var ue = l(B, !0);
  u(B);
  var E = _(B, 2);
  let T;
  ce(E, 21, () => r.cards, de, (c, f, q) => {
    var k = Kf();
    g(U => {
      A(k, 1, `h-2 w-2 rounded-full border-none p-0 transition-all ${q===i(p)?"bg-base-content/60 scale-125":"bg-base-300 hover:bg-base-content/40"}`), Z(k, "aria-label", U)
    }, [() => Tr({
      current: q + 1,
      total: r.cards.length
    })]), X("click", k, () => b(q)), s(c, k)
  }), u(E), u(L), g(c => {
    Z(L, "aria-label", c), o = A(y, 1, "grid w-full overflow-hidden py-1", null, o, {
      "blur-[75px]": i(C),
      "saturate-[1.1]": i(C),
      "scale-[1.08]": i(C),
      "pointer-events-none": i(C),
      "select-none": i(C)
    }), F = A(B, 1, "text-base-content/80 mt-2.5 min-h-6 w-full text-center text-sm leading-normal font-bold", null, F, {
      "opacity-0": i(C)
    }), m(ue, r.cards[i(p)].caption), T = A(E, 1, "mt-3 flex w-full justify-center gap-2 pb-1", null, T, {
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
  Hf = P("<h3><!> <!> <!></h3>"),
  Vf = P("<h4><!> <!> <!></h4>");

function oe(n, r) {
  let e = W(r, "level", 3, 3),
    p = W(r, "compact", 3, !1),
    v = W(r, "class", 3, "");
  const S = Q(() => r.showNumber ?? !p());
  var C = H(),
    b = R(C);
  {
    var L = x => {
        var w = Hf(),
          h = l(w);
        {
          var D = o => {
            var a = je(),
              d = l(a, !0);
            u(a), g(() => m(d, r.number)), s(o, a)
          };
          K(h, o => {
            i(S) && o(D)
          })
        }
        var z = _(h, 2);
        ee(z, () => r.children);
        var $ = _(z, 2);
        {
          var y = o => {
            var a = H(),
              d = R(a);
            ee(d, () => r.badges), s(o, a)
          };
          K($, o => {
            r.badges && o(y)
          })
        }
        u(w), g(() => A(w, 1, `text-base-content/90 mb-2 flex items-baseline gap-2 leading-snug font-semibold ${p()?"text-lg":"text-2xl"} ${v()??""}`)), s(x, w)
      },
      j = x => {
        var w = Vf(),
          h = l(w);
        {
          var D = o => {
            var a = je(),
              d = l(a, !0);
            u(a), g(() => m(d, r.number)), s(o, a)
          };
          K(h, o => {
            i(S) && o(D)
          })
        }
        var z = _(h, 2);
        ee(z, () => r.children);
        var $ = _(z, 2);
        {
          var y = o => {
            var a = H(),
              d = R(a);
            ee(d, () => r.badges), s(o, a)
          };
          K($, o => {
            r.badges && o(y)
          })
        }
        u(w), g(() => A(w, 1, `text-base-content/85 mt-7 mb-2 flex items-baseline gap-2 leading-snug font-semibold ${p()?"text-base":"text-lg"} ${v()??""}`)), s(x, w)
      };
    K(b, x => {
      e() === 3 ? x(L) : x(j, -1)
    })
  }
  s(n, C)
}
var Zf = P('<p class="text-base-content/90 mb-5 text-sm leading-relaxed"><!></p>');

function O(n, r) {
  var e = Zf(),
    p = l(e);
  ee(p, () => r.children), u(e), s(n, e)
}
var Of = P("<section><!></section>");

function se(n, r) {
  let e = W(r, "compact", 3, !1),
    p = W(r, "class", 3, "mb-7 pt-2 md:mb-9 md:pt-3");
  var v = Of(),
    S = l(v);
  ee(S, () => r.children), u(v), g(() => A(v, 1, ge(e() ? "" : p()))), s(n, v)
}
const Ff = "" + new URL("../assets/griefing1.mrf_QTk2.png", import.meta.url).href,
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
    v = l(p);
  ee(v, () => r.children), u(p), g(() => A(p, 1, `badge badge-soft ${e[r.level]??""} badge-sm text-[10px] font-extrabold tracking-wide uppercase`)), s(n, p)
}
var em = P('<!> <!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1),
  rm = P('<!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1),
  nm = P("<div><!> <!></div>");

function tm(n, r) {
  re(r, !0);
  let e = W(r, "compact", 3, !1),
    p = Q(() => [{
      src: Ff,
      alt: "griefing1",
      caption: qs()
    }, {
      src: Jf,
      alt: "griefing2",
      caption: li()
    }]),
    v = Q(() => [{
      src: Xf,
      alt: "pgriefing1",
      caption: Ai()
    }, {
      src: Qf,
      alt: "pgriefing2",
      caption: Uo()
    }]);
  var S = nm(),
    C = l(S);
  se(C, {
    get compact() {
      return e()
    },
    class: "mb-4 md:mb-5",
    children: (L, j) => {
      var x = em(),
        w = R(x);
      O(w, {
        children: (o, a) => {
          var d = H(),
            B = R(d);
          ie(B, () => ra()), s(o, d)
        }
      });
      var h = _(w, 2);
      oe(h, {
        level: 3,
        number: "2.1",
        get compact() {
          return e()
        },
        showNumber: !0,
        class: "mt-9",
        children: (o, a) => {
          M();
          var d = N();
          g(B => m(d, B), [() => tu()]), s(o, d)
        },
        $$slots: {
          default: !0
        }
      });
      var D = _(h, 2);
      O(D, {
        children: (o, a) => {
          var d = H(),
            B = R(d);
          ie(B, () => mu()), s(o, d)
        }
      });
      var z = _(D, 2),
        $ = l(z);
      V($, {
        level: "error",
        children: (o, a) => {
          M();
          var d = N();
          g(B => m(d, B), [() => ct()]), s(o, d)
        }
      }), u(z);
      var y = _(z, 2);
      _e(y, {
        get cards() {
          return i(p)
        }
      }), s(L, x)
    },
    $$slots: {
      default: !0
    }
  });
  var b = _(C, 2);
  se(b, {
    get compact() {
      return e()
    },
    children: (L, j) => {
      var x = rm(),
        w = R(x);
      oe(w, {
        level: 3,
        number: "2.2",
        get compact() {
          return e()
        },
        showNumber: !0,
        children: (y, o) => {
          M();
          var a = N();
          g(d => m(a, d), [() => Pu()]), s(y, a)
        },
        $$slots: {
          default: !0
        }
      });
      var h = _(w, 2);
      O(h, {
        children: (y, o) => {
          var a = H(),
            d = R(a);
          ie(d, () => Eu()), s(y, a)
        }
      });
      var D = _(h, 2),
        z = l(D);
      V(z, {
        level: "warning",
        children: (y, o) => {
          M();
          var a = N();
          g(d => m(a, d), [() => yt()]), s(y, a)
        }
      }), u(D);
      var $ = _(D, 2);
      _e($, {
        get cards() {
          return i(v)
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
var lm = P('<!> <!> <ul class="marker:text-error mb-5 list-disc pl-5"><li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li> <li class="text-base-content/90 py-1 text-sm leading-relaxed"> </li></ul> <div class="mb-2 flex gap-1"><!> <!></div>', 1),
  _m = P('<!> <!> <div class="mb-2 flex gap-1"><!> <!></div> <!>', 1),
  cm = P("<div><!> <!></div>");

function dm(n, r) {
  re(r, !0);
  let e = W(r, "compact", 3, !1),
    p = Q(() => [{
      src: im,
      alt: "borde1",
      caption: Oi()
    }, {
      src: om,
      alt: "borde2",
      caption: Ws()
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
  var v = cm(),
    S = l(v);
  se(S, {
    get compact() {
      return e()
    },
    class: "mb-4 pt-2 md:mb-5 md:pt-3",
    children: (b, L) => {
      var j = lm(),
        x = R(j);
      oe(x, {
        level: 3,
        number: "1.1",
        get compact() {
          return e()
        },
        showNumber: !0,
        children: (k, U) => {
          M();
          var G = N();
          g(I => m(G, I), [() => __()]), s(k, G)
        },
        $$slots: {
          default: !0
        }
      });
      var w = _(x, 2);
      O(w, {
        children: (k, U) => {
          var G = H(),
            I = R(G);
          ie(I, () => z_()), s(k, G)
        }
      });
      var h = _(w, 2),
        D = l(h),
        z = l(D, !0);
      u(D);
      var $ = _(D, 2),
        y = l($, !0);
      u($);
      var o = _($, 2),
        a = l(o, !0);
      u(o);
      var d = _(o, 2),
        B = l(d, !0);
      u(d);
      var F = _(d, 2),
        ue = l(F, !0);
      u(F);
      var E = _(F, 2),
        T = l(E, !0);
      u(E), u(h);
      var c = _(h, 2),
        f = l(c);
      V(f, {
        level: "error",
        children: (k, U) => {
          M();
          var G = N();
          g(I => m(G, I), [() => Qn()]), s(k, G)
        }
      });
      var q = _(f, 2);
      V(q, {
        level: "warning",
        children: (k, U) => {
          M();
          var G = N();
          g(I => m(G, I), [() => Cn()]), s(k, G)
        }
      }), u(c), g((k, U, G, I, Y, J) => {
        m(z, k), m(y, U), m(a, G), m(B, I), m(ue, Y), m(T, J)
      }, [() => F_(), () => Zc(), () => ac(), () => Lc(), () => N_(), () => kc()]), s(b, j)
    },
    $$slots: {
      default: !0
    }
  });
  var C = _(S, 2);
  se(C, {
    get compact() {
      return e()
    },
    children: (b, L) => {
      var j = _m(),
        x = R(j);
      oe(x, {
        level: 3,
        number: "1.2",
        get compact() {
          return e()
        },
        showNumber: !0,
        children: (y, o) => {
          M();
          var a = N();
          g(d => m(a, d), [() => Ya()]), s(y, a)
        },
        $$slots: {
          default: !0
        }
      });
      var w = _(x, 2);
      O(w, {
        children: (y, o) => {
          var a = H(),
            d = R(a);
          ie(d, () => dl()), s(y, a)
        }
      });
      var h = _(w, 2),
        D = l(h);
      V(D, {
        level: "success",
        children: (y, o) => {
          M();
          var a = N();
          g(d => m(a, d), [() => be()]), s(y, a)
        }
      });
      var z = _(D, 2);
      V(z, {
        level: "warning",
        children: (y, o) => {
          M();
          var a = N();
          g(d => m(a, d), [() => Rn()]), s(y, a)
        }
      }), u(h);
      var $ = _(h, 2);
      _e($, {
        get cards() {
          return i(p)
        }
      }), s(b, j)
    },
    $$slots: {
      default: !0
    }
  }), u(v), g(() => A(v, 1, ge(e() ? "space-y-4" : ""))), s(n, v), ne()
}
const gm = "" + new URL("../assets/mapclean1.CXzD9GTn.png", import.meta.url).href,
  pm = "" + new URL("../assets/mapclean2.B1--Lv8s.png", import.meta.url).href,
  fm = "" + new URL("../assets/mapclean3.zxc4kxhZ.png", import.meta.url).href;
var mm = P('<!> <!> <div class="mb-2 flex gap-1"><!></div> <!>', 1);

function hm(n, r) {
  re(r, !0);
  let e = W(r, "compact", 3, !1),
    p = Q(() => [{
      src: gm,
      alt: "mapclean1",
      caption: vs()
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
    children: (v, S) => {
      var C = mm(),
        b = R(C);
      oe(b, {
        level: 4,
        number: "2.3.2.",
        get compact() {
          return e()
        },
        children: (h, D) => {
          M();
          var z = N();
          g($ => m(z, $), [() => $a()]), s(h, z)
        },
        $$slots: {
          default: !0
        }
      });
      var L = _(b, 2);
      O(L, {
        children: (h, D) => {
          M();
          var z = N();
          g($ => m(z, $), [() => pa()]), s(h, z)
        }
      });
      var j = _(L, 2),
        x = l(j);
      V(x, {
        level: "success",
        children: (h, D) => {
          M();
          var z = N();
          g($ => m(z, $), [() => be()]), s(h, z)
        }
      }), u(j);
      var w = _(j, 2);
      _e(w, {
        get cards() {
          return i(p)
        }
      }), s(v, C)
    },
    $$slots: {
      default: !0
    }
  }), ne()
}

function vm(n, r) {
  re(r, !0), W(r, "compact", 3, !1), O(n, {
    children: (e, p) => {
      var v = H(),
        S = R(v);
      ie(S, () => Ba()), s(e, v)
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
  let e = W(r, "compact", 3, !1),
    p = Q(() => [{
      src: km,
      alt: "ngriefing3",
      caption: Jt()
    }, {
      src: bm,
      alt: "ngriefing1",
      caption: Mt()
    }, {
      src: xm,
      alt: "ngriefing2",
      caption: wi()
    }]);
  var v = zm(),
    S = l(v);
  O(S, {
    children: (b, L) => {
      M();
      var j = N();
      g(x => m(j, x), [() => Xl()]), s(b, j)
    }
  });
  var C = _(S, 2);
  se(C, {
    get compact() {
      return e()
    },
    children: (b, L) => {
      var j = wm(),
        x = R(j);
      oe(x, {
        level: 4,
        number: "2.3.1.",
        get compact() {
          return e()
        },
        children: ($, y) => {
          M();
          var o = N();
          g(a => m(o, a), [() => Il()]), s($, o)
        },
        $$slots: {
          default: !0
        }
      });
      var w = _(x, 2);
      O(w, {
        children: ($, y) => {
          M();
          var o = N();
          g(a => m(o, a), [() => jl()]), s($, o)
        }
      });
      var h = _(w, 2),
        D = l(h);
      V(D, {
        level: "success",
        children: ($, y) => {
          M();
          var o = N();
          g(a => m(o, a), [() => be()]), s($, o)
        }
      }), u(h);
      var z = _(h, 2);
      _e(z, {
        get cards() {
          return i(p)
        }
      }), s(b, j)
    },
    $$slots: {
      default: !0
    }
  }), u(v), g(() => A(v, 1, ge(e() ? "space-y-4" : ""))), s(n, v), ne()
}
var jm = P('<details><summary class="collapse-title flex min-h-0! gap-3.5 py-3.5! ps-4! sm:gap-4 sm:ps-5!"><div></div> <div class="min-w-0 flex-1"><div class="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4"><div class="min-w-0"><div class="flex flex-wrap items-center gap-2.5"><span class="text-base-content text-base leading-snug font-bold"> </span> <!></div> <p class="text-base-content/90 mt-1 text-sm leading-relaxed"> </p></div></div></div></summary> <div class="collapse-content p-0!"><div class="border-base-content/5 border-t px-4 py-5 sm:px-5"><!></div></div></details>'),
  Cm = P('<div><div></div> <div class="min-w-0 flex-1"><div class="min-w-0"><div class="flex flex-wrap items-center gap-2.5"><span class="text-base-content text-base leading-snug font-bold"> </span> <!></div> <p class="text-base-content/90 mt-1 text-sm leading-relaxed"> </p></div></div></div>'),
  $m = P('<div><div><svg class="size-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd"></path></svg> <span> </span></div> <!></div>');

function Em(n, r) {
  re(r, !0);
  let e = W(r, "showExtraInfo", 3, !0),
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
        title: Ip(),
        content: tm,
        description: rg(),
        badge: {
          label: Ed(),
          type: "ban"
        }
      }, {
        title: yf(),
        content: vm,
        description: Bg(),
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
        title: Mf(),
        content: ym,
        description: Yg(),
        badge: {
          label: ze(),
          type: "allowed"
        },
        allowed: !0
      }, {
        title: cf(),
        content: hm,
        description: $g(),
        badge: {
          label: ze(),
          type: "allowed"
        },
        allowed: !0
      }]
    }]);
  var v = H(),
    S = R(v);
  ce(S, 17, () => i(p), de, (C, b, L) => {
    var j = $m();
    A(j, 1, "overflow-hidden rounded-xl", null, {}, {
      "mt-3": L > 0
    });
    var x = l(j),
      w = l(x),
      h = l(w);
    u(w);
    var D = _(w, 2),
      z = l(D, !0);
    u(D), u(x);
    var $ = _(x, 2);
    ce($, 17, () => i(b).rules, de, (y, o, a) => {
      var d = H(),
        B = R(d);
      {
        var F = E => {
            var T = jm(),
              c = l(T),
              f = l(c);
            f.textContent = a + 1;
            var q = _(f, 2),
              k = l(q),
              U = l(k),
              G = l(U),
              I = l(G),
              Y = l(I, !0);
            u(I);
            var J = _(I, 2);
            {
              var pe = le => {
                V(le, {
                  get level() {
                    return i(b).badgeLevel
                  },
                  children: (he, Dm) => {
                    M();
                    var xe = N();
                    g(() => m(xe, i(o).badge.label)), s(he, xe)
                  }
                })
              };
              K(J, le => {
                i(o).badge && le(pe)
              })
            }
            u(G);
            var te = _(G, 2),
              fe = l(te, !0);
            u(te), u(U), u(k), u(q), u(c);
            var me = _(c, 2),
              ae = l(me),
              Ce = l(ae);
            De(Ce, () => i(o).content, (le, he) => {
              he(le, {
                compact: !0
              })
            }), u(ae), u(me), u(T), g(() => {
              A(T, 1, `collapse-arrow collapse rounded-none border-l-[3px] ${i(b).classes.button??""} ${a>0?"border-base-content/5 border-t":""}`), A(f, 1, `${i(b).classes.index??""} flex size-7 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold`), m(Y, i(o).title), m(fe, i(o).description)
            }), s(E, T)
          },
          ue = E => {
            var T = Cm(),
              c = l(T);
            c.textContent = a + 1;
            var f = _(c, 2),
              q = l(f),
              k = l(q),
              U = l(k),
              G = l(U, !0);
            u(U);
            var I = _(U, 2);
            {
              var Y = te => {
                V(te, {
                  get level() {
                    return i(b).badgeLevel
                  },
                  children: (fe, me) => {
                    M();
                    var ae = N();
                    g(() => m(ae, i(o).badge.label)), s(fe, ae)
                  }
                })
              };
              K(I, te => {
                i(o).badge && te(Y)
              })
            }
            u(k);
            var J = _(k, 2),
              pe = l(J, !0);
            u(J), u(q), u(f), u(T), g(() => {
              A(T, 1, `${i(b).classes.button??""} flex w-full cursor-auto gap-3.5 border-l-[3px] px-4 py-3.5 text-left sm:gap-4 sm:px-5 ${a>0?"border-base-content/5 border-t":""}`), A(c, 1, `${i(b).classes.index??""} flex size-7 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold`), m(G, i(o).title), m(pe, i(o).description)
            }), s(E, T)
          };
        K(B, E => {
          e() ? E(F) : E(ue, -1)
        })
      }
      s(y, d)
    }), u(j), g(() => {
      A(x, 1, `${i(b).classes.header??""} flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-widest uppercase`), Z(h, "d", i(b).icon), m(z, i(b).label)
    }), s(C, j)
  }), s(n, v), ne()
}
export {
  dm as G, Em as R, tm as a, ym as b, hm as c, vm as d, Tm as r
};