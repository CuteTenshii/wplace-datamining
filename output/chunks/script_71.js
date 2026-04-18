import {
  g as t
} from "./BKKpqwch.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "e6c43a335491af110c902083fb644fb71e659308"
    };
    var r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "d7c2ced6-9f2f-4521-87da-8b3d755c3a91", n._sentryDebugIdIdentifier = "sentry-dbid-d7c2ced6-9f2f-4521-87da-8b3d755c3a91")
  } catch {}
})();
const i = () => "Click to reveal",
  o = () => "Clique para revelar",
  u = () => "点击查看",
  s = () => "Klicken zum Anzeigen",
  a = () => "Haz clic para revelar",
  _ = () => "Cliquez pour révéler",
  c = () => "Clicca per rivelare",
  l = () => "クリックして表示",
  g = () => "Kliknij, aby odsłonić",
  p = () => "Нажмите, чтобы показать",
  d = () => "Натисніть, щоб показати",
  f = () => "Nhấn để hiện",
  Ip = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? i() : e === "pt" ? o() : e === "ch" ? u() : e === "de" ? s() : e === "es" ? a() : e === "fr" ? _() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? g() : e === "ru" ? p() : e === "uk" ? d() : f()
  },
  m = () => "Hide",
  h = () => "Ocultar",
  v = () => "隐藏",
  b = () => "Ausblenden",
  k = () => "Ocultar",
  z = () => "Masquer",
  w = () => "Nascondi",
  y = () => "非表示",
  x = () => "Ukryj",
  j = () => "Скрыть",
  C = () => "Сховати",
  D = () => "Ẩn",
  Up = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? m() : e === "pt" ? h() : e === "ch" ? v() : e === "de" ? b() : e === "es" ? k() : e === "fr" ? z() : e === "it" ? w() : e === "jp" ? y() : e === "pl" ? x() : e === "ru" ? j() : e === "uk" ? C() : D()
  },
  S = () => "Hide sensitive content",
  q = () => "Ocultar conteúdo sensível",
  G = () => "隐藏敏感内容",
  I = () => "Sensiblen Inhalt ausblenden",
  U = () => "Ocultar contenido sensible",
  P = () => "Masquer le contenu sensible",
  N = () => "Nascondi contenuto sensibile",
  A = () => "センシティブなコンテンツを非表示",
  E = () => "Ukryj wrażliwą treść",
  T = () => "Скрыть чувствительный контент",
  B = () => "Сховати чутливий вміст",
  L = () => "Ẩn nội dung nhạy cảm",
  Pp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? S() : e === "pt" ? q() : e === "ch" ? G() : e === "de" ? I() : e === "es" ? U() : e === "fr" ? P() : e === "it" ? N() : e === "jp" ? A() : e === "pl" ? E() : e === "ru" ? T() : e === "uk" ? B() : L()
  },
  M = () => "Image carousel",
  K = () => "Carrossel de imagens",
  $ = () => "图片轮播",
  R = () => "Bilderkarussell",
  Z = () => "Carrusel de imágenes",
  H = () => "Carrousel d'images",
  V = () => "Carosello di immagini",
  F = () => "画像カルーセル",
  O = () => "Karuzela obrazów",
  J = () => "Карусель изображений",
  W = () => "Карусель зображень",
  Q = () => "Băng chuyền hình ảnh",
  Np = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? M() : e === "pt" ? K() : e === "ch" ? $() : e === "de" ? R() : e === "es" ? Z() : e === "fr" ? H() : e === "it" ? V() : e === "jp" ? F() : e === "pl" ? O() : e === "ru" ? J() : e === "uk" ? W() : Q()
  },
  X = n => `Image ${n.current} of ${n.total}`,
  Y = n => `Imagem ${n.current} de ${n.total}`,
  ee = n => `第 ${n.current} 张，共 ${n.total} 张`,
  re = n => `Bild ${n.current} von ${n.total}`,
  ne = n => `Imagen ${n.current} de ${n.total}`,
  te = n => `Image ${n.current} sur ${n.total}`,
  ie = n => `Immagine ${n.current} di ${n.total}`,
  oe = n => `画像 ${n.current} / ${n.total}`,
  ue = n => `Obraz ${n.current} z ${n.total}`,
  se = n => `Изображение ${n.current} из ${n.total}`,
  ae = n => `Зображення ${n.current} з ${n.total}`,
  _e = n => `Hình ${n.current} trên ${n.total}`,
  Ap = (n, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? X(n) : e === "pt" ? Y(n) : e === "ch" ? ee(n) : e === "de" ? re(n) : e === "es" ? ne(n) : e === "fr" ? te(n) : e === "it" ? ie(n) : e === "jp" ? oe(n) : e === "pl" ? ue(n) : e === "ru" ? se(n) : e === "uk" ? ae(n) : _e(n)
  },
  ce = () => "Next",
  le = () => "Próximo",
  ge = () => "下一张",
  pe = () => "Weiter",
  de = () => "Siguiente",
  fe = () => "Suivant",
  me = () => "Successivo",
  he = () => "次へ",
  ve = () => "Następny",
  be = () => "Далее",
  ke = () => "Далі",
  ze = () => "Tiếp",
  Ep = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ce() : e === "pt" ? le() : e === "ch" ? ge() : e === "de" ? pe() : e === "es" ? de() : e === "fr" ? fe() : e === "it" ? me() : e === "jp" ? he() : e === "pl" ? ve() : e === "ru" ? be() : e === "uk" ? ke() : ze()
  },
  we = () => "Previous",
  ye = () => "Anterior",
  xe = () => "上一张",
  je = () => "Zurück",
  Ce = () => "Anterior",
  De = () => "Précédent",
  Se = () => "Precedente",
  qe = () => "前へ",
  Ge = () => "Poprzedni",
  Ie = () => "Назад",
  Ue = () => "Назад",
  Pe = () => "Trước",
  Tp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? we() : e === "pt" ? ye() : e === "ch" ? xe() : e === "de" ? je() : e === "es" ? Ce() : e === "fr" ? De() : e === "it" ? Se() : e === "jp" ? qe() : e === "pl" ? Ge() : e === "ru" ? Ie() : e === "uk" ? Ue() : Pe()
  },
  Ne = () => "Sensitive image",
  Ae = () => "Imagem sensível",
  Ee = () => "敏感图片",
  Te = () => "Sensibles Bild",
  Be = () => "Imagen sensible",
  Le = () => "Image sensible",
  Me = () => "Immagine sensibile",
  Ke = () => "センシティブな画像",
  $e = () => "Wrażliwy obraz",
  Re = () => "Чувствительное изображение",
  Ze = () => "Чутливе зображення",
  He = () => "Hình ảnh nhạy cảm",
  Bp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ne() : e === "pt" ? Ae() : e === "ch" ? Ee() : e === "de" ? Te() : e === "es" ? Be() : e === "fr" ? Le() : e === "it" ? Me() : e === "jp" ? Ke() : e === "pl" ? $e() : e === "ru" ? Re() : e === "uk" ? Ze() : He()
  },
  Ve = () => "Allowed",
  Fe = () => "Permitido",
  Oe = () => "允许",
  Je = () => "Erlaubt",
  We = () => "Permitido",
  Qe = () => "Autorisé",
  Xe = () => "Consentito",
  Ye = () => "許可",
  er = () => "Dozwolone",
  rr = () => "Разрешено",
  nr = () => "Дозволено",
  tr = () => "Được phép",
  Lp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ve() : e === "pt" ? Fe() : e === "ch" ? Oe() : e === "de" ? Je() : e === "es" ? We() : e === "fr" ? Qe() : e === "it" ? Xe() : e === "jp" ? Ye() : e === "pl" ? er() : e === "ru" ? rr() : e === "uk" ? nr() : tr()
  },
  ir = () => "Artwork removal",
  or = () => "Remoção de arte",
  ur = () => "作品移除",
  sr = () => "Entfernung des Kunstwerks",
  ar = () => "Eliminación de obras",
  _r = () => "Suppression de l'œuvre",
  cr = () => "Rimozione dell'opera",
  lr = () => "作品の削除",
  gr = () => "Usunięcie grafiki",
  pr = () => "Удаление рисунка",
  dr = () => "Видалення малюнків",
  fr = () => "Gỡ bỏ tác phẩm",
  Mp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ir() : e === "pt" ? or() : e === "ch" ? ur() : e === "de" ? sr() : e === "es" ? ar() : e === "fr" ? _r() : e === "it" ? cr() : e === "jp" ? lr() : e === "pl" ? gr() : e === "ru" ? pr() : e === "uk" ? dr() : fr()
  },
  mr = () => "Community cleanup",
  hr = () => "Limpeza pela comunidade",
  vr = () => "社区清理",
  br = () => "Community-Bereinigung",
  kr = () => "Limpieza comunitaria",
  zr = () => "Nettoyage communautaire",
  wr = () => "Pulizia della community",
  yr = () => "コミュニティによる清掃",
  xr = () => "Sprzątanie przez społeczność",
  jr = () => "Очистка сообществом",
  Cr = () => "Очищення спільнотою",
  Dr = () => "Cộng đồng dọn dẹp",
  Kp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? mr() : e === "pt" ? hr() : e === "ch" ? vr() : e === "de" ? br() : e === "es" ? kr() : e === "fr" ? zr() : e === "it" ? wr() : e === "jp" ? yr() : e === "pl" ? xr() : e === "ru" ? jr() : e === "uk" ? Cr() : Dr()
  },
  Sr = () => "Permanent Ban",
  qr = () => "Banimento Permanente",
  Gr = () => "永久封禁",
  Ir = () => "Permanenter Bann",
  Ur = () => "Ban Permanente",
  Pr = () => "Bannissement permanent",
  Nr = () => "Ban permanente",
  Ar = () => "永久BAN",
  Er = () => "Permanentny ban",
  Tr = () => "Перманентный бан",
  Br = () => "Перманентний бан",
  Lr = () => "Cấm vĩnh viễn",
  $p = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Sr() : e === "pt" ? qr() : e === "ch" ? Gr() : e === "de" ? Ir() : e === "es" ? Ur() : e === "fr" ? Pr() : e === "it" ? Nr() : e === "jp" ? Ar() : e === "pl" ? Er() : e === "ru" ? Tr() : e === "uk" ? Br() : Lr()
  },
  Mr = () => "Timeout",
  Kr = () => "Suspensão",
  $r = () => "禁言",
  Rr = () => "Sperre",
  Zr = () => "Suspensión",
  Hr = () => "Suspension",
  Vr = () => "Sospensione",
  Fr = () => "一時停止",
  Or = () => "Zawieszenie",
  Jr = () => "Тайм-аут",
  Wr = () => "Тайм-аут",
  Qr = () => "Tạm khóa",
  Rp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Mr() : e === "pt" ? Kr() : e === "ch" ? $r() : e === "de" ? Rr() : e === "es" ? Zr() : e === "fr" ? Hr() : e === "it" ? Vr() : e === "jp" ? Fr() : e === "pl" ? Or() : e === "ru" ? Jr() : e === "uk" ? Wr() : Qr()
  },
  Xr = () => "Timeout risk",
  Yr = () => "Risco de suspensão",
  en = () => "禁言风险",
  rn = () => "Sperrrisiko",
  nn = () => "Riesgo de suspensión",
  tn = () => "Risque de suspension",
  on = () => "Rischio sospensione",
  un = () => "一時停止のリスク",
  sn = () => "Ryzyko zawieszenia",
  an = () => "Риск тайм-аута",
  _n = () => "Ризик тайм-ауту",
  cn = () => "Nguy cơ tạm khóa",
  Zp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Xr() : e === "pt" ? Yr() : e === "ch" ? en() : e === "de" ? rn() : e === "es" ? nn() : e === "fr" ? tn() : e === "it" ? on() : e === "jp" ? un() : e === "pl" ? sn() : e === "ru" ? an() : e === "uk" ? _n() : cn()
  },
  ln = () => "Drawing a new artwork over a flag",
  gn = () => "Desenhar uma nova arte por cima de uma bandeira",
  pn = () => "在旗帜上绘制新作品",
  dn = () => "Ein neues Kunstwerk über eine Flagge zeichnen",
  fn = () => "Dibujar una nueva obra sobre una bandera",
  mn = () => "Dessiner une nouvelle œuvre par-dessus un drapeau",
  hn = () => "Disegnare una nuova opera sopra una bandiera",
  vn = () => "旗の上に新しい作品を描く",
  bn = () => "Rysowanie nowej grafiki na fladze",
  kn = () => "Рисование нового рисунка поверх флага",
  zn = () => "Створення нового малюнка поверх прапора",
  wn = () => "Vẽ tác phẩm mới đè lên cờ",
  Hp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ln() : e === "pt" ? gn() : e === "ch" ? pn() : e === "de" ? dn() : e === "es" ? fn() : e === "fr" ? mn() : e === "it" ? hn() : e === "jp" ? vn() : e === "pl" ? bn() : e === "ru" ? kn() : e === "uk" ? zn() : wn()
  },
  yn = () => "Drawing over another drawing",
  xn = () => "Desenhar por cima de outro desenho",
  jn = () => "在另一幅画作上绘画",
  Cn = () => "Eine Zeichnung über eine andere zeichnen",
  Dn = () => "Dibujar sobre otro dibujo",
  Sn = () => "Dessiner par-dessus un autre dessin",
  qn = () => "Disegnare sopra un altro disegno",
  Gn = () => "別の描画の上に描く",
  In = () => "Zamalowywanie jednego rysunku innym",
  Un = () => "Рисование поверх другого рисунка",
  Pn = () => "Малювання поверх іншого малюнка",
  Nn = () => "Vẽ đè lên bức vẽ khác",
  Vp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? yn() : e === "pt" ? xn() : e === "ch" ? jn() : e === "de" ? Cn() : e === "es" ? Dn() : e === "fr" ? Sn() : e === "it" ? qn() : e === "jp" ? Gn() : e === "pl" ? In() : e === "ru" ? Un() : e === "uk" ? Pn() : Nn()
  },
  An = () => "Drawing over existing artwork with no creative intent",
  En = () => "Desenhar por cima de artes existentes sem intenção criativa",
  Tn = () => "毫无创意目的地覆盖现有作品",
  Bn = () => "Übermalen bestehender Kunstwerke ohne kreative Absicht",
  Ln = () => "Dibujar sobre obras existentes sin intención creativa",
  Mn = () => "Peindre par-dessus une œuvre existante sans intention créative",
  Kn = () => "Disegnare sopra opere esistenti senza intento creativo",
  $n = () => "創造的な意図なく既存の作品の上に描く",
  Rn = () => "Zamalowywanie istniejącej grafiki bez intencji twórczej",
  Zn = () => "Рисование поверх существующего рисунка без творческого намерения",
  Hn = () => "Малювання поверх існуючого малюнка без творчого наміру",
  Vn = () => "Tô đè lên tác phẩm hiện có mà không có ý sáng tạo",
  Fp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? An() : e === "pt" ? En() : e === "ch" ? Tn() : e === "de" ? Bn() : e === "es" ? Ln() : e === "fr" ? Mn() : e === "it" ? Kn() : e === "jp" ? $n() : e === "pl" ? Rn() : e === "ru" ? Zn() : e === "uk" ? Hn() : Vn()
  },
  Fn = () => "Drawing over a repeated pattern",
  On = () => "Desenhar por cima de um padrão repetitivo",
  Jn = () => "在重复图案上绘画",
  Wn = () => "Über ein wiederholendes Muster zeichnen",
  Qn = () => "Dibujar sobre un patrón repetido",
  Xn = () => "Dessiner par-dessus un motif répétitif",
  Yn = () => "Disegnare sopra un pattern ripetuto",
  et = () => "繰り返しパターンの上に描く",
  rt = () => "Zamalowywanie powtarzalnego wzoru",
  nt = () => "Рисование поверх повторяющегося узора",
  tt = () => "Малювання поверх повторюваного візерунка",
  it = () => "Vẽ đè lên mẫu lặp lại",
  Op = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Fn() : e === "pt" ? On() : e === "ch" ? Jn() : e === "de" ? Wn() : e === "es" ? Qn() : e === "fr" ? Xn() : e === "it" ? Yn() : e === "jp" ? et() : e === "pl" ? rt() : e === "ru" ? nt() : e === "uk" ? tt() : it()
  },
  ot = () => "Drawing a flag over other artworks",
  ut = () => "Desenhar uma bandeira por cima de outras artes",
  st = () => "在其他作品上绘制旗帜",
  at = () => "Eine Flagge über andere Kunstwerke zeichnen",
  _t = () => "Dibujar una bandera sobre las obras de otros",
  ct = () => "Dessiner un drapeau par-dessus d'autres œuvres",
  lt = () => "Disegnare una bandiera sopra altre opere",
  gt = () => "他の作品の上に旗を描く",
  pt = () => "Rysowanie flagi na cudzych grafikach",
  dt = () => "Рисование флага поверх чужих рисунков",
  ft = () => "Малювання прапора поверх чужих малюнків",
  mt = () => "Vẽ cờ đè lên tác phẩm của người khác",
  Jp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ot() : e === "pt" ? ut() : e === "ch" ? st() : e === "de" ? at() : e === "es" ? _t() : e === "fr" ? ct() : e === "it" ? lt() : e === "jp" ? gt() : e === "pl" ? pt() : e === "ru" ? dt() : e === "uk" ? ft() : mt()
  },
  ht = () => "Highly Suggestive Content",
  vt = () => "Conteúdo Altamente Sugestivo",
  bt = () => "高度暗示性内容",
  kt = () => "Stark anzügliche Inhalte",
  zt = () => "Contenido Altamente Sugerente",
  wt = () => "Contenu hautement suggestif",
  yt = () => "Contenuto fortemente allusivo",
  xt = () => "非常に性的示唆の強いコンテンツ",
  jt = () => "Mocno sugestywne treści",
  Ct = () => "Крайне откровенный контент",
  Dt = () => "Дуже відвертий контент",
  St = () => "Nội dung khiêu gợi mạnh",
  Wp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ht() : e === "pt" ? vt() : e === "ch" ? bt() : e === "de" ? kt() : e === "es" ? zt() : e === "fr" ? wt() : e === "it" ? yt() : e === "jp" ? xt() : e === "pl" ? jt() : e === "ru" ? Ct() : e === "uk" ? Dt() : St()
  },
  qt = () => "Mild Gore Content",
  Gt = () => "Conteúdo de Gore Leve",
  It = () => "轻度血腥内容",
  Ut = () => "Leichte Gore-Inhalte",
  Pt = () => "Contenido de Gore Leve",
  Nt = () => "Contenu gore modéré",
  At = () => "Contenuto gore lieve",
  Et = () => "軽度のグロテスクコンテンツ",
  Tt = () => "Łagodne treści gore",
  Bt = () => "Умеренно жестокий контент",
  Lt = () => "Помірно жорстокий контент",
  Mt = () => "Nội dung bạo lực nhẹ",
  Qp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? qt() : e === "pt" ? Gt() : e === "ch" ? It() : e === "de" ? Ut() : e === "es" ? Pt() : e === "fr" ? Nt() : e === "it" ? At() : e === "jp" ? Et() : e === "pl" ? Tt() : e === "ru" ? Bt() : e === "uk" ? Lt() : Mt()
  },
  Kt = () => "Non-explicit suggestive content",
  $t = () => "Conteúdo sugestivo não explícito",
  Rt = () => "非露骨暗示性内容",
  Zt = () => "Nicht-explizite anzügliche Inhalte",
  Ht = () => "Contenido sugerente no explícito",
  Vt = () => "Contenu suggestif non explicite",
  Ft = () => "Contenuto allusivo non esplicito",
  Ot = () => "露骨でない性的示唆のあるコンテンツ",
  Jt = () => "Niejednoznaczne treści sugestywne",
  Wt = () => "Неоткровенный пикантный контент",
  Qt = () => "Невідвертий контент з підтекстом",
  Xt = () => "Nội dung khiêu gợi không rõ ràng",
  Xp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Kt() : e === "pt" ? $t() : e === "ch" ? Rt() : e === "de" ? Zt() : e === "es" ? Ht() : e === "fr" ? Vt() : e === "it" ? Ft() : e === "jp" ? Ot() : e === "pl" ? Jt() : e === "ru" ? Wt() : e === "uk" ? Qt() : Xt()
  },
  Yt = () => "Drawing repeated pattern over other artworks",
  ei = () => "Desenhar padrão repetitivo por cima de outras artes",
  ri = () => "在其他作品上绘制重复图案",
  ni = () => "Wiederholendes Muster über andere Kunstwerke zeichnen",
  ti = () => "Dibujar un patrón repetido sobre las obras de otros",
  ii = () => "Dessiner un motif répétitif par-dessus d'autres œuvres",
  oi = () => "Disegnare un pattern ripetuto sopra altre opere",
  ui = () => "他の作品の上に繰り返しパターンを描く",
  si = () => "Rysowanie powtarzalnego wzoru na cudzych grafikach",
  ai = () => "Рисование повторяющегося узора поверх чужих рисунков",
  _i = () => "Малювання повторюваного візерунка поверх чужих малюнків",
  ci = () => "Vẽ mẫu lặp lại đè lên tác phẩm của người khác",
  Yp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Yt() : e === "pt" ? ei() : e === "ch" ? ri() : e === "de" ? ni() : e === "es" ? ti() : e === "fr" ? ii() : e === "it" ? oi() : e === "jp" ? ui() : e === "pl" ? si() : e === "ru" ? ai() : e === "uk" ? _i() : ci()
  },
  li = () => "Using transparent pixels over repetitive flags",
  gi = () => "Usar pixels transparentes sobre bandeiras repetitivas",
  pi = () => "使用透明像素覆盖重复的旗帜",
  di = () => "Transparente Pixel über sich wiederholende Flaggen verwenden",
  fi = () => "Usar píxeles transparentes sobre banderas repetitivas",
  mi = () => "Utilisation de pixels transparents sur les drapeaux répétitifs",
  hi = () => "Usare pixel trasparenti sopra bandiere ripetitive",
  vi = () => "繰り返される旗の上に透明ピクセルを使用",
  bi = () => "Używanie przezroczystych pikseli na powtarzalnych flagach",
  ki = () => "Использование прозрачных пикселей поверх повторяющихся флагов",
  zi = () => "Використання прозорих пікселів поверх повторюваних прапорів",
  wi = () => "Sử dụng pixel trong suốt đè lên cờ lặp lại",
  ed = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? li() : e === "pt" ? gi() : e === "ch" ? pi() : e === "de" ? di() : e === "es" ? fi() : e === "fr" ? mi() : e === "it" ? hi() : e === "jp" ? vi() : e === "pl" ? bi() : e === "ru" ? ki() : e === "uk" ? zi() : wi()
  },
  yi = () => "Using transparent pixels to remove inappropriate content",
  xi = () => "Usar pixels transparentes para remover conteúdo inapropriado",
  ji = () => "使用透明像素移除不当内容",
  Ci = () => "Transparente Pixel zum Entfernen unangemessener Inhalte verwenden",
  Di = () => "Usar píxeles transparentes para eliminar contenido inapropiado",
  Si = () => "Utilisation de pixels transparents pour supprimer le contenu inapproprié",
  qi = () => "Usare pixel trasparenti per rimuovere contenuti inappropriati",
  Gi = () => "透明ピクセルを使って不適切なコンテンツを除去",
  Ii = () => "Używanie przezroczystych pikseli do usuwania nieodpowiednich treści",
  Ui = () => "Использование прозрачных пикселей для удаления неприемлемого контента",
  Pi = () => "Використання прозорих пікселів для видалення неприйнятного контенту",
  Ni = () => "Sử dụng pixel trong suốt để xóa nội dung không phù hợp",
  rd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? yi() : e === "pt" ? xi() : e === "ch" ? ji() : e === "de" ? Ci() : e === "es" ? Di() : e === "fr" ? Si() : e === "it" ? qi() : e === "jp" ? Gi() : e === "pl" ? Ii() : e === "ru" ? Ui() : e === "uk" ? Pi() : Ni()
  },
  Ai = () => "Using transparent pixels to remove repetitive patterns",
  Ei = () => "Usar pixels transparentes para remover padrões repetitivos",
  Ti = () => "使用透明像素移除重复图案",
  Bi = () => "Transparente Pixel zum Entfernen sich wiederholender Muster verwenden",
  Li = () => "Usar píxeles transparentes para eliminar patrones repetitivos",
  Mi = () => "Utilisation de pixels transparents pour supprimer les motifs répétitifs",
  Ki = () => "Usare pixel trasparenti per rimuovere pattern ripetitivi",
  $i = () => "透明ピクセルを使って繰り返しパターンを除去",
  Ri = () => "Używanie przezroczystych pikseli do usuwania powtarzalnych wzorów",
  Zi = () => "Использование прозрачных пикселей для удаления повторяющихся узоров",
  Hi = () => "Використання прозорих пікселів для видалення повторюваних візерунків",
  Vi = () => "Sử dụng pixel trong suốt để xóa mẫu lặp lại",
  nd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ai() : e === "pt" ? Ei() : e === "ch" ? Ti() : e === "de" ? Bi() : e === "es" ? Li() : e === "fr" ? Mi() : e === "it" ? Ki() : e === "jp" ? $i() : e === "pl" ? Ri() : e === "ru" ? Zi() : e === "uk" ? Hi() : Vi()
  },
  Fi = () => "Scribbling over other people's artwork",
  Oi = () => "Rabiscar por cima da arte de outras pessoas",
  Ji = () => "在他人作品上乱涂乱画",
  Wi = () => "Kritzeln über Kunstwerke anderer",
  Qi = () => "Garabatear sobre las obras de otros",
  Xi = () => "Gribouiller sur les œuvres des autres",
  Yi = () => "Scarabocchiare sopra le opere degli altri",
  eo = () => "他人の作品への落書き",
  ro = () => "Bazgranie po cudzych grafikach",
  no = () => "Черкание поверх чужих рисунков",
  to = () => "Замальовування чужих малюнків",
  io = () => "Vẽ bậy lên tác phẩm của người khác",
  td = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Fi() : e === "pt" ? Oi() : e === "ch" ? Ji() : e === "de" ? Wi() : e === "es" ? Qi() : e === "fr" ? Xi() : e === "it" ? Yi() : e === "jp" ? eo() : e === "pl" ? ro() : e === "ru" ? no() : e === "uk" ? to() : io()
  },
  oo = () => "Suggestive fetishist Content",
  uo = () => "Conteúdo sugestivo fetichista",
  so = () => "暗示性恋物内容",
  ao = () => "Anzügliche fetischistische Inhalte",
  _o = () => "Contenido sugerente fetichista",
  co = () => "Contenu suggestif fétichiste",
  lo = () => "Contenuto allusivo feticista",
  go = () => "性的示唆のあるフェティッシュコンテンツ",
  po = () => "Sugestywne treści fetyszystyczne",
  fo = () => "Откровенный фетишистский контент",
  mo = () => "Відвертий фетишистський контент",
  ho = () => "Nội dung khiêu gợi theo hướng tôn sùng",
  id = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? oo() : e === "pt" ? uo() : e === "ch" ? so() : e === "de" ? ao() : e === "es" ? _o() : e === "fr" ? co() : e === "it" ? lo() : e === "jp" ? go() : e === "pl" ? po() : e === "ru" ? fo() : e === "uk" ? mo() : ho()
  },
  vo = () => "Clear griefing",
  bo = () => "Griefing evidente",
  ko = () => "明确的恶意破坏",
  zo = () => "Eindeutiges Griefing",
  wo = () => "Griefing evidente",
  yo = () => "Griefing manifeste",
  xo = () => "Griefing evidente",
  jo = () => "明確なグリーフィング",
  Co = () => "Oczywisty griefing",
  Do = () => "Явное гриферство",
  So = () => "Явний грифінг",
  qo = () => "Griefing rõ ràng",
  od = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? vo() : e === "pt" ? bo() : e === "ch" ? ko() : e === "de" ? zo() : e === "es" ? wo() : e === "fr" ? yo() : e === "it" ? xo() : e === "jp" ? jo() : e === "pl" ? Co() : e === "ru" ? Do() : e === "uk" ? So() : qo()
  },
  Go = () => "Cases of clear griefing (such as scribbling over someone's artwork with no creative intent, or deliberately disrupting it by placing random pixels) are <strong>subject to moderation intervention</strong>.",
  Io = () => "Casos de griefing evidente (como rabiscar por cima da arte de alguém sem intenção criativa, ou interrompê-la deliberadamente colocando pixels aleatórios) estão <strong>sujeitos a intervenção da moderação</strong>.",
  Uo = () => "明确的恶意破坏行为（例如毫无创意目的地在他人作品上乱涂，或故意放置随机像素进行破坏）将<strong>受到管理介入</strong>。",
  Po = () => "Fälle von eindeutigem Griefing (wie z. B. Kritzeln über Kunstwerke anderer ohne kreative Absicht oder das absichtliche Stören durch Platzieren zufälliger Pixel) <strong>unterliegen moderativen Maßnahmen</strong>.",
  No = () => "Los casos de griefing evidente (como garabatear sobre la obra de alguien sin intención creativa, o alterarla deliberadamente colocando píxeles aleatorios) están <strong>sujetos a intervención de moderación</strong>.",
  Ao = () => "Les cas de griefing manifeste (comme gribouiller sur l'œuvre de quelqu'un sans intention créative, ou la perturber délibérément en plaçant des pixels aléatoires) sont <strong>soumis à une intervention de la modération</strong>.",
  Eo = () => "I casi di griefing evidente (come scarabocchiare sopra l'opera di qualcuno senza intento creativo, o disturbarla deliberatamente piazzando pixel casuali) sono <strong>soggetti a intervento della moderazione</strong>.",
  To = () => "明確なグリーフィング（他人の作品に創造的な意図なく落書きする、ランダムなピクセルを置いて意図的に妨害するなど）は、<strong>モデレーションの介入対象</strong>となります。",
  Bo = () => "Przypadki oczywistego griefingu (takie jak bazgranie po cudzej grafice bez intencji twórczej lub celowe zakłócanie jej losowymi pikselami) <strong>podlegają interwencji moderacji</strong>.",
  Lo = () => "Случаи явного гриферства (например, черкание поверх чьего-то рисунка без творческого намерения или намеренное его разрушение случайными пикселями) <strong>подлежат модераторскому вмешательству</strong>.",
  Mo = () => "Випадки явного грифінгу (такі як замальовування чужого малюнка без творчого наміру або навмисне порушення за допомогою випадкових пікселів) <strong>підлягають модераторському втручанню</strong>.",
  Ko = () => "Các trường hợp griefing rõ ràng (như vẽ bậy lên tác phẩm của người khác mà không có ý sáng tạo, hoặc cố tình phá hoại bằng cách đặt pixel ngẫu nhiên) <strong>sẽ bị can thiệp kiểm duyệt</strong>.",
  ud = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Go() : e === "pt" ? Io() : e === "ch" ? Uo() : e === "de" ? Po() : e === "es" ? No() : e === "fr" ? Ao() : e === "it" ? Eo() : e === "jp" ? To() : e === "pl" ? Bo() : e === "ru" ? Lo() : e === "uk" ? Mo() : Ko()
  },
  $o = () => "Gray area",
  Ro = () => "Área cinzenta",
  Zo = () => "灰色地带",
  Ho = () => "Grauzone",
  Vo = () => "Zona gris",
  Fo = () => "Zone grise",
  Oo = () => "Zona grigia",
  Jo = () => "グレーゾーン",
  Wo = () => "Szara strefa",
  Qo = () => "Серая зона",
  Xo = () => "Сіра зона",
  Yo = () => "Vùng xám",
  sd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? $o() : e === "pt" ? Ro() : e === "ch" ? Zo() : e === "de" ? Ho() : e === "es" ? Vo() : e === "fr" ? Fo() : e === "it" ? Oo() : e === "jp" ? Jo() : e === "pl" ? Wo() : e === "ru" ? Qo() : e === "uk" ? Xo() : Yo()
  },
  eu = () => "Actions that alter or disrupt artwork but may have <strong>multiple valid interpretations</strong>, such as territorial expansion, cleanup, or style changes. <strong>These are not automatically griefing</strong>. However, if the behavior becomes excessive, targeted, or clearly disruptive over time, moderators may intervene.",
  ru = () => "Ações que alteram ou perturbam artes, mas que podem ter <strong>múltiplas interpretações válidas</strong>, como expansão territorial, limpeza ou mudanças de estilo. <strong>Isso não é automaticamente griefing</strong>. No entanto, se o comportamento se tornar excessivo, direcionado ou claramente prejudicial ao longo do tempo, os moderadores poderão intervir.",
  nu = () => "改变或干扰作品但可能具有<strong>多种合理解读</strong>的行为，例如领地扩张、清理或风格变更。<strong>这些不会自动被视为恶意破坏</strong>。但如果行为变得过度、有针对性或随着时间推移明显具有破坏性，管理员可能会介入。",
  tu = () => "Aktionen, die Kunstwerke verändern oder stören, aber <strong>mehrere gültige Interpretationen</strong> haben können, wie z. B. Gebietserweiterung, Bereinigung oder Stiländerungen. <strong>Dies ist nicht automatisch Griefing</strong>. Wenn das Verhalten jedoch übermäßig, gezielt oder im Laufe der Zeit eindeutig störend wird, können Moderatoren eingreifen.",
  iu = () => "Acciones que alteran o interrumpen obras pero pueden tener <strong>múltiples interpretaciones válidas</strong>, como expansión territorial, limpieza o cambios de estilo. <strong>Esto no es automáticamente griefing</strong>. Sin embargo, si el comportamiento se vuelve excesivo, dirigido o claramente disruptivo con el tiempo, los moderadores pueden intervenir.",
  ou = () => "Actions qui modifient ou perturbent une œuvre mais peuvent avoir <strong>plusieurs interprétations valides</strong>, comme l'expansion territoriale, le nettoyage ou les changements de style. <strong>Ce n'est pas automatiquement du griefing</strong>. Cependant, si le comportement devient excessif, ciblé ou clairement perturbateur au fil du temps, les modérateurs peuvent intervenir.",
  uu = () => "Azioni che alterano o disturbano un'opera ma possono avere <strong>molteplici interpretazioni valide</strong>, come espansione territoriale, pulizia o cambiamenti di stile. <strong>Queste non sono automaticamente griefing</strong>. Tuttavia, se il comportamento diventa eccessivo, mirato o chiaramente disturbante nel tempo, i moderatori possono intervenire.",
  su = () => "作品を変更・妨害するが、領土拡大、清掃、スタイル変更など<strong>複数の正当な解釈が可能な</strong>行為。<strong>これらは自動的にグリーフィングとはみなされません</strong>。ただし、行為が過剰になったり、特定の相手を標的にしたり、時間をかけて明らかに妨害的であったりする場合は、モデレーターが介入することがあります。",
  au = () => "Działania, które zmieniają lub zakłócają grafikę, ale mogą mieć <strong>wiele uzasadnionych interpretacji</strong>, takie jak ekspansja terytorialna, sprzątanie lub zmiana stylu. <strong>Nie są one automatycznie uznawane za griefing</strong>. Jednakże, jeśli zachowanie staje się nadmierne, celowe lub wyraźnie destrukcyjne z czasem, moderatorzy mogą interweniować.",
  _u = () => "Действия, которые изменяют или нарушают рисунок, но могут иметь <strong>несколько допустимых интерпретаций</strong>, такие как территориальное расширение, очистка или смена стиля. <strong>Это автоматически не является гриферством</strong>. Однако если поведение становится чрезмерным, целенаправленным или явно деструктивным со временем, модераторы могут вмешаться.",
  cu = () => "Дії, які змінюють або порушують малюнки, але можуть мати <strong>кілька правомірних тлумачень</strong>, такі як розширення території, очищення або зміна стилю. <strong>Це не є автоматичним грифінгом</strong>. Однак, якщо поведінка стає надмірною, цілеспрямованою або явно деструктивною з часом, модератори можуть втрутитися.",
  lu = () => "Các hành động thay đổi hoặc phá vỡ tác phẩm nhưng có thể có <strong>nhiều cách hiểu hợp lý</strong>, chẳng hạn như mở rộng lãnh thổ, dọn dẹp hoặc thay đổi phong cách. <strong>Những hành động này không tự động được coi là griefing</strong>. Tuy nhiên, nếu hành vi trở nên quá mức, nhắm vào mục tiêu cụ thể hoặc rõ ràng gây phá hoại theo thời gian, quản trị viên có thể can thiệp.",
  ad = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? eu() : e === "pt" ? ru() : e === "ch" ? nu() : e === "de" ? tu() : e === "es" ? iu() : e === "fr" ? ou() : e === "it" ? uu() : e === "jp" ? su() : e === "pl" ? au() : e === "ru" ? _u() : e === "uk" ? cu() : lu()
  },
  gu = () => "Griefing means taking actions on the map <strong>solely to harass or frustrate</strong> other players, with no creative, strategic, or corrective purpose.",
  pu = () => "Griefing significa realizar ações no mapa <strong>unicamente para assediar ou frustrar</strong> outros jogadores, sem nenhum propósito criativo, estratégico ou corretivo.",
  du = () => "恶意破坏指在地图上<strong>仅以骚扰或激怒</strong>其他玩家为目的的行为，不具有任何创意、战略或纠正目的。",
  fu = () => "Griefing bedeutet, auf der Karte Aktionen durchzuführen, die <strong>ausschließlich dazu dienen, andere Spieler zu belästigen oder zu frustrieren</strong>, ohne kreativen, strategischen oder korrektiven Zweck.",
  mu = () => "Griefing significa realizar acciones en el mapa <strong>únicamente para acosar o frustrar</strong> a otros jugadores, sin ningún propósito creativo, estratégico o correctivo.",
  hu = () => "Le griefing consiste à effectuer des actions sur la carte <strong>dans le seul but de harceler ou de frustrer</strong> d'autres joueurs, sans aucun objectif créatif, stratégique ou correctif.",
  vu = () => "Griefing significa compiere azioni sulla mappa <strong>al solo scopo di molestare o frustrare</strong> gli altri giocatori, senza alcun intento creativo, strategico o correttivo.",
  bu = () => "グリーフィングとは、創造的、戦略的、または修正的な目的を持たず、<strong>他のプレイヤーを嫌がらせたり苛立たせたりすることだけを目的として</strong>マップ上で行う行為を指します。",
  ku = () => "Griefing oznacza podejmowanie działań na mapie <strong>wyłącznie w celu nękania lub frustrowania</strong> innych graczy, bez żadnego twórczego, strategicznego ani korekcyjnego celu.",
  zu = () => "Гриферство — это действия на карте, совершаемые <strong>исключительно с целью досадить или разозлить</strong> других игроков, без какого-либо творческого, стратегического или корректирующего намерения.",
  wu = () => "Грифінг означає дії на карті, <strong>спрямовані виключно на те, щоб дратувати чи засмучувати</strong> інших гравців, без жодного творчого, стратегічного чи коригувального наміру.",
  yu = () => "Griefing có nghĩa là thực hiện các hành động trên bản đồ <strong>chỉ nhằm quấy rối hoặc gây bực bội</strong> cho người chơi khác, không có mục đích sáng tạo, chiến lược hay chỉnh sửa.",
  _d = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? gu() : e === "pt" ? pu() : e === "ch" ? du() : e === "de" ? fu() : e === "es" ? mu() : e === "fr" ? hu() : e === "it" ? vu() : e === "jp" ? bu() : e === "pl" ? ku() : e === "ru" ? zu() : e === "uk" ? wu() : yu()
  },
  xu = () => "Using transparent pixels to remove spam, repetitive patterns, inappropriate or suggestive content is allowed.",
  ju = () => "Usar pixels transparentes para remover spam, padrões repetitivos, conteúdo inapropriado ou sugestivo é permitido.",
  Cu = () => "使用透明像素移除垃圾内容、重复图案、不当或暗示性内容是被允许的。",
  Du = () => "Die Verwendung von transparenten Pixeln zum Entfernen von Spam, sich wiederholenden Mustern, unangemessenen oder anzüglichen Inhalten ist erlaubt.",
  Su = () => "Usar píxeles transparentes para eliminar spam, patrones repetitivos, contenido inapropiado o sugerente está permitido.",
  qu = () => "L'utilisation de pixels transparents pour supprimer le spam, les motifs répétitifs, le contenu inapproprié ou suggestif est autorisée.",
  Gu = () => "Utilizzare pixel trasparenti per rimuovere spam, pattern ripetitivi, contenuti inappropriati o allusivi è consentito.",
  Iu = () => "透明ピクセルを使って、スパム、繰り返しパターン、不適切または性的示唆の強いコンテンツを除去することは許可されています。",
  Uu = () => "Używanie przezroczystych pikseli do usuwania spamu, powtarzalnych wzorów, nieodpowiednich lub sugestywnych treści jest dozwolone.",
  Pu = () => "Использование прозрачных пикселей для удаления спама, повторяющихся узоров, неприемлемого или откровенного контента разрешено.",
  Nu = () => "Використання прозорих пікселів для видалення спаму, повторюваних візерунків, неприйнятного або відвертого контенту дозволено.",
  Au = () => "Sử dụng pixel trong suốt để xóa spam, mẫu lặp lại, nội dung không phù hợp hoặc khiêu gợi là được phép.",
  cd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? xu() : e === "pt" ? ju() : e === "ch" ? Cu() : e === "de" ? Du() : e === "es" ? Su() : e === "fr" ? qu() : e === "it" ? Gu() : e === "jp" ? Iu() : e === "pl" ? Uu() : e === "ru" ? Pu() : e === "uk" ? Nu() : Au()
  },
  Eu = () => "Map Cleanup",
  Tu = () => "Limpeza do Mapa",
  Bu = () => "地图清理",
  Lu = () => "Kartenbereinigung",
  Mu = () => "Limpieza del Mapa",
  Ku = () => "Nettoyage de la carte",
  $u = () => "Pulizia della mappa",
  Ru = () => "マップの清掃",
  Zu = () => "Sprzątanie mapy",
  Hu = () => "Очистка карты",
  Vu = () => "Очищення карти",
  Fu = () => "Dọn dẹp bản đồ",
  ld = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Eu() : e === "pt" ? Tu() : e === "ch" ? Bu() : e === "de" ? Lu() : e === "es" ? Mu() : e === "fr" ? Ku() : e === "it" ? $u() : e === "jp" ? Ru() : e === "pl" ? Zu() : e === "ru" ? Hu() : e === "uk" ? Vu() : Fu()
  },
  Ou = () => "<strong>One account per person.</strong> Using bots, scripts, browser automation, or any exploit to gain an unfair advantage is strictly prohibited.",
  Ju = () => "<strong>Uma conta por pessoa.</strong> Usar bots, scripts, automação de navegador ou qualquer exploit para obter vantagem injusta é estritamente proibido.",
  Wu = () => "<strong>每人只能使用一个账号。</strong>使用机器人、脚本、浏览器自动化或任何漏洞获取不公平优势的行为严格禁止。",
  Qu = () => "<strong>Ein Konto pro Person.</strong> Die Verwendung von Bots, Skripten, Browser-Automatisierung oder sonstigen Exploits, um einen unfairen Vorteil zu erlangen, ist strengstens verboten.",
  Xu = () => "<strong>Una cuenta por persona.</strong> Usar bots, scripts, automatización de navegador o cualquier exploit para obtener una ventaja injusta está estrictamente prohibido.",
  Yu = () => "<strong>Un seul compte par personne.</strong> L'utilisation de bots, de scripts, d'automatisation de navigateur ou de toute exploitation de faille pour obtenir un avantage déloyal est strictement interdite.",
  es = () => "<strong>Un account per persona.</strong> L'uso di bot, script, automazione del browser o qualsiasi exploit per ottenere un vantaggio sleale è severamente vietato.",
  rs = () => "<strong>1人につき1アカウント。</strong>ボット、スクリプト、ブラウザ自動化、またはその他のエクスプロイトを使用して不当な優位を得ることは厳しく禁止されています。",
  ns = () => "<strong>Jedno konto na osobę.</strong> Używanie botów, skryptów, automatyzacji przeglądarki lub jakichkolwiek exploitów w celu uzyskania nieuczciwej przewagi jest surowo zabronione.",
  ts = () => "<strong>Один аккаунт на человека.</strong> Использование ботов, скриптов, автоматизации браузера или любых эксплойтов для получения нечестного преимущества строго запрещено.",
  is = () => "<strong>Один акаунт на людину.</strong> Використання ботів, скриптів, автоматизації браузера або будь-яких експлойтів для отримання нечесної переваги суворо заборонено.",
  os = () => "<strong>Mỗi người một tài khoản.</strong> Sử dụng bot, script, tự động hóa trình duyệt hoặc bất kỳ lỗi khai thác nào để có lợi thế không công bằng đều bị nghiêm cấm.",
  gd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ou() : e === "pt" ? Ju() : e === "ch" ? Wu() : e === "de" ? Qu() : e === "es" ? Xu() : e === "fr" ? Yu() : e === "it" ? es() : e === "jp" ? rs() : e === "pl" ? ns() : e === "ru" ? ts() : e === "uk" ? is() : os()
  },
  us = () => "Suggestive Content",
  ss = () => "Conteúdo Sugestivo",
  as = () => "暗示性内容",
  _s = () => "Anzügliche Inhalte",
  cs = () => "Contenido Sugerente",
  ls = () => "Contenu suggestif",
  gs = () => "Contenuto allusivo",
  ps = () => "性的示唆のあるコンテンツ",
  ds = () => "Treści sugestywne",
  fs = () => "Откровенный контент",
  ms = () => "Відвертий контент",
  hs = () => "Nội dung khiêu gợi",
  pd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? us() : e === "pt" ? ss() : e === "ch" ? as() : e === "de" ? _s() : e === "es" ? cs() : e === "fr" ? ls() : e === "it" ? gs() : e === "jp" ? ps() : e === "pl" ? ds() : e === "ru" ? fs() : e === "uk" ? ms() : hs()
  },
  vs = () => "Drawing in this category <strong>shouldn't lead to suspensions</strong>. However, <strong>the community is free clean up or paint over these artworks</strong>. Includes drawings with sexual undertones that don't cross into explicit territory (no genitalia, sexual acts, or sexual fluids).",
  bs = () => "Desenhos nesta categoria <strong>não devem levar a suspensões</strong>. No entanto, <strong>a comunidade é livre para limpar ou pintar por cima dessas artes</strong>. Inclui desenhos com conotações sexuais que não chegam a ser explícitos (sem genitália, atos sexuais ou fluidos sexuais).",
  ks = () => "此类别中的绘画<strong>不应导致暂停</strong>。但是，<strong>社区可以自由清理或覆盖这些作品</strong>。包括具有性暗示但未达到露骨程度的绘画（无生殖器、性行为或性液体）。",
  zs = () => "Zeichnungen in dieser Kategorie <strong>sollten nicht zu Sperren führen</strong>. Allerdings <strong>ist es der Community erlaubt, diese Kunstwerke zu entfernen oder zu übermalen</strong>. Dazu gehören Zeichnungen mit sexuellen Untertönen, die nicht in explizites Gebiet vordringen (keine Genitalien, sexuelle Handlungen oder sexuelle Flüssigkeiten).",
  ws = () => "Dibujar en esta categoría <strong>no debería llevar a suspensiones</strong>. Sin embargo, <strong>la comunidad es libre de limpiar o pintar sobre estas obras</strong>. Incluye dibujos con insinuaciones sexuales que no cruzan al territorio explícito (sin genitales, actos sexuales ni fluidos sexuales).",
  ys = () => "Les dessins de cette catégorie <strong>ne devraient pas entraîner de suspension</strong>. Cependant, <strong>la communauté est libre de nettoyer ou de peindre par-dessus ces œuvres</strong>. Cela inclut les dessins à connotation sexuelle qui ne franchissent pas la limite du contenu explicite (pas d'organes génitaux, d'actes sexuels ni de fluides sexuels).",
  xs = () => "I disegni in questa categoria <strong>non dovrebbero portare a sospensioni</strong>. Tuttavia, <strong>la community è libera di ripulire o dipingere sopra queste opere</strong>. Include disegni con sottotoni sessuali che non superano il limite dell'esplicito (nessun genitale, atto sessuale o fluido sessuale).",
  js = () => "このカテゴリの描画は<strong>停止処分の対象にはなりません</strong>。ただし、<strong>コミュニティはこれらの作品を自由に消去・上書きできます</strong>。露骨な表現（性器、性行為、体液）には至らないが、性的なニュアンスを含む描画が該当します。",
  Cs = () => "Rysunki z tej kategorii <strong>nie powinny prowadzić do zawieszeń</strong>. Jednakże <strong>społeczność może swobodnie usuwać lub zamalowywać te grafiki</strong>. Obejmuje rysunki o podtekście seksualnym, które nie przekraczają granicy treści jednoznacznych (brak genitaliów, aktów seksualnych czy płynów seksualnych).",
  Ds = () => "Рисунки в этой категории <strong>не должны приводить к блокировке</strong>. Однако <strong>сообщество вправе убирать или закрашивать такие рисунки</strong>. Включает рисунки с сексуальным подтекстом, не переходящие в откровенную территорию (без гениталий, половых актов или половых жидкостей).",
  Ss = () => "Малюнки з цієї категорії <strong>не повинні призводити до блокувань</strong>. Однак <strong>спільнота має повне право очистити чи замалювати такі роботи</strong>. Включає малюнки з сексуальним підтекстом, які не переходять у відверту територію (без геніталій, статевих актів чи статевих рідин).",
  qs = () => "Vẽ trong danh mục này <strong>không nên dẫn đến đình chỉ</strong>. Tuy nhiên, <strong>cộng đồng được tự do dọn dẹp hoặc tô đè lên các tác phẩm này</strong>. Bao gồm các bức vẽ có ẩn ý tình dục nhưng không vượt qua ranh giới khiêu dâm (không có bộ phận sinh dục, hành vi tình dục hay dịch thể tình dục).",
  dd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? vs() : e === "pt" ? bs() : e === "ch" ? ks() : e === "de" ? zs() : e === "es" ? ws() : e === "fr" ? ys() : e === "it" ? xs() : e === "jp" ? js() : e === "pl" ? Cs() : e === "ru" ? Ds() : e === "uk" ? Ss() : qs()
  },
  Gs = () => "Space is limited. Players and communities will compete for territory, and that's not just allowed, it's what keeps the map alive. Claiming, defending, and reclaiming space is core gameplay.",
  Is = () => "O espaço é limitado. Jogadores e comunidades vão competir por território, e isso não é apenas permitido, é o que mantém o mapa vivo. Conquistar, defender e retomar espaço faz parte da jogabilidade principal.",
  Us = () => "空间有限。玩家和社区会争夺领地，这不仅被允许，更是让地图保持活力的关键。占领、防守和夺回空间是核心玩法。",
  Ps = () => "Der Platz ist begrenzt. Spieler und Communities werden um Gebiete konkurrieren, und das ist nicht nur erlaubt, es hält die Karte lebendig. Gebiete beanspruchen, verteidigen und zurückerobern ist Teil des Kernspiels.",
  Ns = () => "El espacio es limitado. Los jugadores y comunidades competirán por territorio, y eso no solo está permitido, es lo que mantiene el mapa vivo. Reclamar, defender y reconquistar espacio es parte esencial del juego.",
  As = () => "L'espace est limité. Les joueurs et les communautés se disputeront le territoire, et ce n'est pas seulement autorisé, c'est ce qui fait vivre la carte. Revendiquer, défendre et reconquérir l'espace fait partie du gameplay de base.",
  Es = () => "Lo spazio è limitato. I giocatori e le community competeranno per il territorio, e questo non è solo consentito, è ciò che mantiene viva la mappa. Conquistare, difendere e riconquistare spazio è il gameplay fondamentale.",
  Ts = () => "スペースには限りがあります。プレイヤーやコミュニティは領土をめぐって競い合います。これは許可されているだけでなく、マップを活気づける要素です。スペースの確保、防衛、奪還はゲームの基本です。",
  Bs = () => "Przestrzeń jest ograniczona. Gracze i społeczności będą rywalizować o terytorium — i to nie tylko jest dozwolone, to właśnie utrzymuje mapę przy życiu. Zajmowanie, obrona i odzyskiwanie przestrzeni to podstawowa rozgrywka.",
  Ls = () => "Пространство ограничено. Игроки и сообщества будут конкурировать за территорию, и это не просто разрешено — это то, что поддерживает карту живой. Захват, оборона и отвоевание территории — основная механика игры.",
  Ms = () => "Простір обмежений. Гравці та спільноти змагатимуться за територію, і це не лише дозволено — це те, що підтримує карту живою. Захоплення, оборона та відвоювання простору є основою геймплею.",
  Ks = () => "Không gian có hạn. Người chơi và cộng đồng sẽ cạnh tranh lãnh thổ, và điều đó không chỉ được phép — nó là thứ giữ cho bản đồ sống động. Chiếm, bảo vệ và giành lại không gian là cách chơi cốt lõi.",
  fd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Gs() : e === "pt" ? Is() : e === "ch" ? Us() : e === "de" ? Ps() : e === "es" ? Ns() : e === "fr" ? As() : e === "it" ? Es() : e === "jp" ? Ts() : e === "pl" ? Bs() : e === "ru" ? Ls() : e === "uk" ? Ms() : Ks()
  },
  $s = () => "Territorial Disputes",
  Rs = () => "Disputas Territoriais",
  Zs = () => "领地争夺",
  Hs = () => "Gebietskonflikte",
  Vs = () => "Disputas Territoriales",
  Fs = () => "Disputes territoriales",
  Os = () => "Dispute territoriali",
  Js = () => "領土紛争",
  Ws = () => "Spory terytorialne",
  Qs = () => "Территориальные споры",
  Xs = () => "Територіальні спори",
  Ys = () => "Tranh chấp lãnh thổ",
  md = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? $s() : e === "pt" ? Rs() : e === "ch" ? Zs() : e === "de" ? Hs() : e === "es" ? Vs() : e === "fr" ? Fs() : e === "it" ? Os() : e === "jp" ? Js() : e === "pl" ? Ws() : e === "ru" ? Qs() : e === "uk" ? Xs() : Ys()
  },
  ea = () => "Painting over other players' work is a normal part of the game. If your intent isn't to only harass or deliberately frustrate someone, moderators won't intervene.",
  ra = () => "Pintar por cima do trabalho de outros jogadores é uma parte normal do jogo. Se sua intenção não for apenas assediar ou frustrar alguém deliberadamente, os moderadores não irão intervir.",
  na = () => "覆盖其他玩家的作品是游戏的正常组成部分。如果你的目的不仅仅是骚扰或故意激怒他人，管理员不会介入。",
  ta = () => "Das Übermalen der Arbeit anderer Spieler ist ein normaler Teil des Spiels. Wenn deine Absicht nicht darin besteht, jemanden nur zu belästigen oder absichtlich zu frustrieren, werden Moderatoren nicht eingreifen.",
  ia = () => "Pintar sobre el trabajo de otros jugadores es una parte normal del juego. Si tu intención no es solo acosar o frustrar deliberadamente a alguien, los moderadores no intervendrán.",
  oa = () => "Peindre par-dessus le travail d'autres joueurs fait partie intégrante du jeu. Si votre intention n'est pas uniquement de harceler ou de frustrer délibérément quelqu'un, les modérateurs n'interviendront pas.",
  ua = () => "Dipingere sopra il lavoro di altri giocatori è una parte normale del gioco. Se il tuo intento non è solo quello di molestare o frustrare deliberatamente qualcuno, i moderatori non interverranno.",
  sa = () => "他のプレイヤーの作品の上にペイントすることは、ゲームの通常の一部です。あなたの意図が単に嫌がらせや故意に苛立たせることでなければ、モデレーターは介入しません。",
  aa = () => "Zamalowywanie prac innych graczy jest normalną częścią gry. Jeśli Twoim celem nie jest wyłącznie nękanie lub celowe frustrowanie kogoś, moderatorzy nie będą interweniować.",
  _a = () => "Рисование поверх работ других игроков — нормальная часть игры. Если ваша цель не состоит исключительно в том, чтобы досадить или намеренно расстроить кого-то, модераторы не вмешаются.",
  ca = () => "Малювання поверх робіт інших гравців є нормальною частиною гри. Якщо ваш намір — не лише дратувати чи навмисно засмучувати когось, модератори не втручатимуться.",
  la = () => "Tô đè lên tác phẩm của người chơi khác là một phần bình thường của trò chơi. Nếu mục đích của bạn không phải chỉ để quấy rối hay cố tình gây bực bội ai đó, quản trị viên sẽ không can thiệp.",
  hd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ea() : e === "pt" ? ra() : e === "ch" ? na() : e === "de" ? ta() : e === "es" ? ia() : e === "fr" ? oa() : e === "it" ? ua() : e === "jp" ? sa() : e === "pl" ? aa() : e === "ru" ? _a() : e === "uk" ? ca() : la()
  },
  ga = () => "Zero-tolerance content",
  pa = () => "Conteúdo de tolerância zero",
  da = () => "零容忍内容",
  fa = () => "Null-Toleranz-Inhalte",
  ma = () => "Contenido de tolerancia cero",
  ha = () => "Contenu à tolérance zéro",
  va = () => "Contenuti a tolleranza zero",
  ba = () => "ゼロトレランスコンテンツ",
  ka = () => "Treści objęte zerową tolerancją",
  za = () => "Контент с нулевой терпимостью",
  wa = () => "Контент з нульовою толерантністю",
  ya = () => "Nội dung không khoan nhượng",
  vd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ga() : e === "pt" ? pa() : e === "ch" ? da() : e === "de" ? fa() : e === "es" ? ma() : e === "fr" ? ha() : e === "it" ? va() : e === "jp" ? ba() : e === "pl" ? ka() : e === "ru" ? za() : e === "uk" ? wa() : ya()
  },
  xa = () => "The following content is subject to moderation intervention and can result in a <strong>permanent ban</strong>:",
  ja = () => "O seguinte conteúdo está sujeito a intervenção da moderação e pode resultar em <strong>banimento permanente</strong>:",
  Ca = () => "以下内容将受到管理介入，并可能导致<strong>永久封禁</strong>：",
  Da = () => "Die folgenden Inhalte unterliegen moderativen Maßnahmen und können zu einem <strong>permanenten Bann</strong> führen:",
  Sa = () => "El siguiente contenido está sujeto a intervención de moderación y puede resultar en un <strong>ban permanente</strong>:",
  qa = () => "Le contenu suivant est soumis à une intervention de la modération et peut entraîner un <strong>bannissement permanent</strong> :",
  Ga = () => "I seguenti contenuti sono soggetti a intervento della moderazione e possono comportare un <strong>ban permanente</strong>:",
  Ia = () => "以下のコンテンツはモデレーションの対象となり、<strong>永久BAN</strong>になる場合があります:",
  Ua = () => "Poniższe treści podlegają interwencji moderacji i mogą skutkować <strong>permanentnym banem</strong>:",
  Pa = () => "Следующий контент подлежит модераторскому вмешательству и может привести к <strong>перманентному бану</strong>:",
  Na = () => "Наступний контент підлягає модераторському втручанню і може призвести до <strong>перманентного бану</strong>:",
  Aa = () => "Các nội dung sau đây sẽ bị can thiệp kiểm duyệt và có thể dẫn đến <strong>cấm vĩnh viễn</strong>:",
  bd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? xa() : e === "pt" ? ja() : e === "ch" ? Ca() : e === "de" ? Da() : e === "es" ? Sa() : e === "fr" ? qa() : e === "it" ? Ga() : e === "jp" ? Ia() : e === "pl" ? Ua() : e === "ru" ? Pa() : e === "uk" ? Na() : Aa()
  },
  Ea = () => "Doxxing (sharing anyone's private personal information)",
  Ta = () => "Doxxing (compartilhar informações pessoais privadas de qualquer pessoa)",
  Ba = () => "人肉搜索（分享任何人的私人个人信息）",
  La = () => "Doxxing (Veröffentlichung persönlicher Informationen anderer)",
  Ma = () => "Doxxing (compartir información personal privada de cualquier persona)",
  Ka = () => "Doxxing (partage d'informations personnelles privées de quiconque)",
  $a = () => "Doxxing (condivisione di informazioni personali private di chiunque)",
  Ra = () => "ドキシング（他人の個人情報の共有）",
  Za = () => "Doxxing (udostępnianie prywatnych danych osobowych innych osób)",
  Ha = () => "Доксинг (распространение чьей-либо личной информации)",
  Va = () => "Доксинг (поширення приватної особистої інформації будь-кого)",
  Fa = () => "Doxxing (chia sẻ thông tin cá nhân riêng tư của bất kỳ ai)",
  kd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ea() : e === "pt" ? Ta() : e === "ch" ? Ba() : e === "de" ? La() : e === "es" ? Ma() : e === "fr" ? Ka() : e === "it" ? $a() : e === "jp" ? Ra() : e === "pl" ? Za() : e === "ru" ? Ha() : e === "uk" ? Va() : Fa()
  },
  Oa = () => "Explicit sexual content (genitalia, sexual acts, sexual fluids)",
  Ja = () => "Conteúdo sexual explícito (genitália, atos sexuais, fluidos sexuais)",
  Wa = () => "露骨的色情内容（生殖器、性行为、性液体）",
  Qa = () => "Explizit sexuelle Inhalte (Genitalien, sexuelle Handlungen, sexuelle Flüssigkeiten)",
  Xa = () => "Contenido sexual explícito (genitales, actos sexuales, fluidos sexuales)",
  Ya = () => "Contenu sexuel explicite (organes génitaux, actes sexuels, fluides sexuels)",
  e_ = () => "Contenuto sessuale esplicito (genitali, atti sessuali, fluidi sessuali)",
  r_ = () => "露骨な性的コンテンツ（性器、性行為、体液）",
  n_ = () => "Jednoznaczne treści seksualne (genitalia, akty seksualne, płyny seksualne)",
  t_ = () => "Откровенный сексуальный контент (гениталии, половые акты, половые жидкости)",
  i_ = () => "Відверто сексуальний контент (геніталії, статеві акти, статеві рідини)",
  o_ = () => "Nội dung tình dục rõ ràng (bộ phận sinh dục, hành vi tình dục, dịch thể tình dục)",
  zd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Oa() : e === "pt" ? Ja() : e === "ch" ? Wa() : e === "de" ? Qa() : e === "es" ? Xa() : e === "fr" ? Ya() : e === "it" ? e_() : e === "jp" ? r_() : e === "pl" ? n_() : e === "ru" ? t_() : e === "uk" ? i_() : o_()
  },
  u_ = () => "Extreme graphic gore or realistic violence",
  s_ = () => "Gore gráfico extremo ou violência realista",
  a_ = () => "极端血腥或写实暴力内容",
  __ = () => "Extremer grafischer Gore oder realistische Gewalt",
  c_ = () => "Gore gráfico extremo o violencia realista",
  l_ = () => "Gore graphique extrême ou violence réaliste",
  g_ = () => "Gore grafico estremo o violenza realistica",
  p_ = () => "極度にグロテスクな描写やリアルな暴力表現",
  d_ = () => "Ekstremalnie drastyczne treści gore lub realistyczna przemoc",
  f_ = () => "Чрезмерная графическая жестокость или реалистичное насилие",
  m_ = () => "Екстремально жорстокі або реалістичні сцени насильства",
  h_ = () => "Bạo lực đẫm máu cực đoan hoặc bạo lực chân thực",
  wd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? u_() : e === "pt" ? s_() : e === "ch" ? a_() : e === "de" ? __() : e === "es" ? c_() : e === "fr" ? l_() : e === "it" ? g_() : e === "jp" ? p_() : e === "pl" ? d_() : e === "ru" ? f_() : e === "uk" ? m_() : h_()
  },
  v_ = () => "Extreme hostility or targeted harassment toward others",
  b_ = () => "Hostilidade extrema ou assédio direcionado a outros",
  k_ = () => "对他人的极端敌意或针对性骚扰",
  z_ = () => "Extreme Feindseligkeit oder gezielte Belästigung anderer",
  w_ = () => "Hostilidad extrema o acoso dirigido hacia otros",
  y_ = () => "Hostilité extrême ou harcèlement ciblé envers autrui",
  x_ = () => "Ostilità estrema o molestie mirate verso altri",
  j_ = () => "他者に対する極端な敵意や標的型の嫌がらせ",
  C_ = () => "Skrajna wrogość lub ukierunkowane nękanie innych osób",
  D_ = () => "Крайняя враждебность или целенаправленная травля других",
  S_ = () => "Екстремальна ворожість або цілеспрямоване переслідування інших",
  q_ = () => "Thái độ thù địch cực đoan hoặc quấy rối nhắm vào người khác",
  yd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? v_() : e === "pt" ? b_() : e === "ch" ? k_() : e === "de" ? z_() : e === "es" ? w_() : e === "fr" ? y_() : e === "it" ? x_() : e === "jp" ? j_() : e === "pl" ? C_() : e === "ru" ? D_() : e === "uk" ? S_() : q_()
  },
  G_ = () => "Clear hate speech, extreme slurs, or symbols of hate (e.g. swastikas)",
  I_ = () => "Discurso de ódio evidente, ofensas extremas ou símbolos de ódio (ex.: suásticas)",
  U_ = () => "明确的仇恨言论、极端侮辱性用语或仇恨符号（如纳粹符号）",
  P_ = () => "Eindeutige Hassrede, extreme Beleidigungen oder Hasssymbole (z. B. Hakenkreuze)",
  N_ = () => "Discurso de odio claro, insultos extremos o símbolos de odio (ej. esvásticas)",
  A_ = () => "Discours de haine manifeste, insultes extrêmes ou symboles haineux (ex. : croix gammées)",
  E_ = () => "Chiaro discorso d'odio, insulti estremi o simboli d'odio (es. svastiche)",
  T_ = () => "明確なヘイトスピーチ、極端な差別用語、またはヘイトシンボル（例: 鉤十字）",
  B_ = () => "Wyraźna mowa nienawiści, skrajne obelgi lub symbole nienawiści (np. swastyki)",
  L_ = () => "Явная речь ненависти, грубые оскорбления или символы ненависти (например, свастики)",
  M_ = () => "Явна мова ненависті, образливі слова або символи ненависті (напр. свастики)",
  K_ = () => "Ngôn từ thù hằn rõ ràng, từ ngữ xúc phạm nặng hoặc biểu tượng thù hận (ví dụ: chữ vạn)",
  xd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? G_() : e === "pt" ? I_() : e === "ch" ? U_() : e === "de" ? P_() : e === "es" ? N_() : e === "fr" ? A_() : e === "it" ? E_() : e === "jp" ? T_() : e === "pl" ? B_() : e === "ru" ? L_() : e === "uk" ? M_() : K_()
  },
  $_ = () => "Sexualization of minors or fictitious characters with child-like visual traits, regardless of their fictional age or lore",
  R_ = () => "Sexualização de menores ou personagens fictícios com traços visuais infantis, independentemente de sua idade ou história fictícia",
  Z_ = () => "对未成年人或具有明显儿童外貌特征的虚构角色的性化描绘，无论其虚构年龄或设定如何",
  H_ = () => "Sexualisierung von Minderjährigen oder fiktiven Charakteren mit kindlichen visuellen Merkmalen, unabhängig von ihrem fiktiven Alter oder ihrer Geschichte",
  V_ = () => "Sexualización de menores o personajes ficticios con rasgos visuales infantiles, independientemente de su edad ficticia o historia",
  F_ = () => "Sexualisation de mineurs ou de personnages fictifs présentant des traits visuels enfantins, indépendamment de leur âge ou histoire fictifs",
  O_ = () => "Sessualizzazione di minori o personaggi fittizi con tratti visivi infantili, indipendentemente dalla loro età fittizia o storia",
  J_ = () => "未成年者、または架空の年齢や設定に関わらず、明らかに幼い外見的特徴を持つ架空のキャラクターの性的表現",
  W_ = () => "Seksualizacja nieletnich lub fikcyjnych postaci o dziecięcych cechach wizualnych, niezależnie od ich fikcyjnego wieku czy historii",
  Q_ = () => "Сексуализация несовершеннолетних или вымышленных персонажей с визуальными детскими чертами, независимо от их вымышленного возраста или истории",
  X_ = () => "Сексуалізація неповнолітніх або вигаданих персонажів з візуальними дитячими рисами, незалежно від їхнього вигаданого віку чи історії",
  Y_ = () => "Tình dục hóa trẻ vị thành niên hoặc các nhân vật hư cấu có đặc điểm ngoại hình trẻ em, bất kể tuổi hoặc cốt truyện hư cấu của họ",
  jd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? $_() : e === "pt" ? R_() : e === "ch" ? Z_() : e === "de" ? H_() : e === "es" ? V_() : e === "fr" ? F_() : e === "it" ? O_() : e === "jp" ? J_() : e === "pl" ? W_() : e === "ru" ? Q_() : e === "uk" ? X_() : Y_()
  },
  ec = () => "Rules",
  rc = () => "Regras",
  nc = () => "规则",
  tc = () => "Regeln",
  ic = () => "Reglas",
  oc = () => "Règles",
  uc = () => "Regole",
  sc = () => "ルール",
  ac = () => "Zasady",
  _c = () => "Правила",
  cc = () => "Правила",
  lc = () => "Luật",
  Cd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ec() : e === "pt" ? rc() : e === "ch" ? nc() : e === "de" ? tc() : e === "es" ? ic() : e === "fr" ? oc() : e === "it" ? uc() : e === "jp" ? sc() : e === "pl" ? ac() : e === "ru" ? _c() : e === "uk" ? cc() : lc()
  },
  gc = () => "allowed",
  pc = () => "permitido",
  dc = () => "允许",
  fc = () => "erlaubt",
  mc = () => "permitido",
  hc = () => "autorisé",
  vc = () => "consentito",
  bc = () => "許可",
  kc = () => "dozwolone",
  zc = () => "разрешено",
  wc = () => "дозволено",
  yc = () => "được phép",
  Dd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? gc() : e === "pt" ? pc() : e === "ch" ? dc() : e === "de" ? fc() : e === "es" ? mc() : e === "fr" ? hc() : e === "it" ? vc() : e === "jp" ? bc() : e === "pl" ? kc() : e === "ru" ? zc() : e === "uk" ? wc() : yc()
  },
  xc = () => "permanent ban",
  jc = () => "banimento permanente",
  Cc = () => "永久封禁",
  Dc = () => "permanenter Bann",
  Sc = () => "ban permanente",
  qc = () => "bannissement permanent",
  Gc = () => "ban permanente",
  Ic = () => "永久BAN",
  Uc = () => "permanentny ban",
  Pc = () => "перманентный бан",
  Nc = () => "перманентний бан",
  Ac = () => "cấm vĩnh viễn",
  Sd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? xc() : e === "pt" ? jc() : e === "ch" ? Cc() : e === "de" ? Dc() : e === "es" ? Sc() : e === "fr" ? qc() : e === "it" ? Gc() : e === "jp" ? Ic() : e === "pl" ? Uc() : e === "ru" ? Pc() : e === "uk" ? Nc() : Ac()
  },
  Ec = () => "timeout",
  Tc = () => "suspensão",
  Bc = () => "禁言",
  Lc = () => "Sperre",
  Mc = () => "suspensión",
  Kc = () => "suspension",
  $c = () => "sospensione",
  Rc = () => "一時停止",
  Zc = () => "zawieszenie",
  Hc = () => "тайм-аут",
  Vc = () => "тайм-аут",
  Fc = () => "tạm khóa",
  qd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ec() : e === "pt" ? Tc() : e === "ch" ? Bc() : e === "de" ? Lc() : e === "es" ? Mc() : e === "fr" ? Kc() : e === "it" ? $c() : e === "jp" ? Rc() : e === "pl" ? Zc() : e === "ru" ? Hc() : e === "uk" ? Vc() : Fc()
  },
  Oc = () => "Destroying others' work with no creative intent.",
  Jc = () => "Destruir o trabalho dos outros sem intenção criativa.",
  Wc = () => "毫无创意目的地破坏他人作品。",
  Qc = () => "Zerstörung der Arbeit anderer ohne kreative Absicht.",
  Xc = () => "Destruir el trabajo de otros sin intención creativa.",
  Yc = () => "Détruire le travail des autres sans intention créative.",
  el = () => "Distruggere il lavoro degli altri senza intento creativo.",
  rl = () => "創造的な意図なく他人の作品を破壊する行為。",
  nl = () => "Niszczenie cudzych prac bez intencji twórczej.",
  tl = () => "Уничтожение чужих работ без какого-либо творческого намерения.",
  il = () => "Знищення чужих робіт без творчого наміру.",
  ol = () => "Phá hoại tác phẩm của người khác mà không có ý định sáng tạo.",
  Gd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Oc() : e === "pt" ? Jc() : e === "ch" ? Wc() : e === "de" ? Qc() : e === "es" ? Xc() : e === "fr" ? Yc() : e === "it" ? el() : e === "jp" ? rl() : e === "pl" ? nl() : e === "ru" ? tl() : e === "uk" ? il() : ol()
  },
  ul = () => "Explicit, hateful, or illegal content is not tolerated.",
  sl = () => "Conteúdo explícito, de ódio ou ilegal não é tolerado.",
  al = () => "不容忍色情、仇恨或违法内容。",
  _l = () => "Explizite, hasserfüllte oder illegale Inhalte werden nicht toleriert.",
  cl = () => "El contenido explícito, de odio o ilegal no es tolerado.",
  ll = () => "Le contenu explicite, haineux ou illégal n'est pas toléré.",
  gl = () => "Contenuti espliciti, di odio o illegali non sono tollerati.",
  pl = () => "露骨、差別的、または違法なコンテンツは容認されません。",
  dl = () => "Treści jednoznacznie seksualne, nawołujące do nienawiści lub nielegalne nie są tolerowane.",
  fl = () => "Откровенный, ненавистнический или незаконный контент запрещён.",
  ml = () => "Відвертий, ненависницький або незаконний контент не допускається.",
  hl = () => "Nội dung khiêu dâm, thù hằn hoặc bất hợp pháp sẽ không được dung thứ.",
  Id = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ul() : e === "pt" ? sl() : e === "ch" ? al() : e === "de" ? _l() : e === "es" ? cl() : e === "fr" ? ll() : e === "it" ? gl() : e === "jp" ? pl() : e === "pl" ? dl() : e === "ru" ? fl() : e === "uk" ? ml() : hl()
  },
  vl = () => "Erasing spam, inappropriate or suggestive content with transparent pixels.",
  bl = () => "Apagar spam, conteúdo inapropriado ou sugestivo com pixels transparentes.",
  kl = () => "使用透明像素清除垃圾内容、不当或暗示性内容。",
  zl = () => "Spam, unangemessene oder anzügliche Inhalte mit transparenten Pixeln entfernen.",
  wl = () => "Borrar spam, contenido inapropiado o sugerente con píxeles transparentes.",
  yl = () => "Effacer le spam, le contenu inapproprié ou suggestif avec des pixels transparents.",
  xl = () => "Cancellare spam, contenuti inappropriati o allusivi con pixel trasparenti.",
  jl = () => "透明ピクセルを使って、スパム、不適切、または性的示唆の強いコンテンツを消去する行為。",
  Cl = () => "Usuwanie spamu, nieodpowiednich lub sugestywnych treści za pomocą przezroczystych pikseli.",
  Dl = () => "Удаление спама, неприемлемого или откровенного контента прозрачными пикселями.",
  Sl = () => "Видалення спаму, неприйнятного чи відвертого контенту прозорими пікселями.",
  ql = () => "Xóa spam, nội dung không phù hợp hoặc khiêu gợi bằng pixel trong suốt.",
  Ud = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? vl() : e === "pt" ? bl() : e === "ch" ? kl() : e === "de" ? zl() : e === "es" ? wl() : e === "fr" ? yl() : e === "it" ? xl() : e === "jp" ? jl() : e === "pl" ? Cl() : e === "ru" ? Dl() : e === "uk" ? Sl() : ql()
  },
  Gl = () => "One account per person. No automation or exploits.",
  Il = () => "Uma conta por pessoa. Sem automação ou exploits.",
  Ul = () => "每人只能使用一个账号。禁止使用自动化工具或利用漏洞。",
  Pl = () => "Ein Konto pro Person. Keine Automatisierung oder Exploits.",
  Nl = () => "Una cuenta por persona. Sin automatización ni exploits.",
  Al = () => "Un seul compte par personne. Aucune automatisation ni exploitation de failles.",
  El = () => "Un account per persona. Nessuna automazione o exploit.",
  Tl = () => "1人につき1アカウントです。自動化やエクスプロイトは禁止です。",
  Bl = () => "Jedno konto na osobę. Żadnej automatyzacji ani exploitów.",
  Ll = () => "Один аккаунт на человека. Никакой автоматизации и эксплойтов.",
  Ml = () => "Один акаунт на людину. Без автоматизації чи експлойтів.",
  Kl = () => "Mỗi người một tài khoản. Không được tự động hóa hay khai thác lỗi.",
  Pd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Gl() : e === "pt" ? Il() : e === "ch" ? Ul() : e === "de" ? Pl() : e === "es" ? Nl() : e === "fr" ? Al() : e === "it" ? El() : e === "jp" ? Tl() : e === "pl" ? Bl() : e === "ru" ? Ll() : e === "uk" ? Ml() : Kl()
  },
  $l = () => "Competing for space is part of the game.",
  Rl = () => "Competir por espaço faz parte do jogo.",
  Zl = () => "争夺空间是游戏的一部分。",
  Hl = () => "Der Wettbewerb um Platz ist Teil des Spiels.",
  Vl = () => "Competir por el espacio es parte del juego.",
  Fl = () => "La compétition pour l'espace fait partie du jeu.",
  Ol = () => "Competere per lo spazio fa parte del gioco.",
  Jl = () => "スペースをめぐる競争はゲームの一部です。",
  Wl = () => "Rywalizacja o przestrzeń jest częścią gry.",
  Ql = () => "Борьба за территорию — часть игры.",
  Xl = () => "Боротьба за простір — це частина гри.",
  Yl = () => "Cạnh tranh không gian là một phần của trò chơi.",
  Nd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? $l() : e === "pt" ? Rl() : e === "ch" ? Zl() : e === "de" ? Hl() : e === "es" ? Vl() : e === "fr" ? Fl() : e === "it" ? Ol() : e === "jp" ? Jl() : e === "pl" ? Wl() : e === "ru" ? Ql() : e === "uk" ? Xl() : Yl()
  },
  eg = () => "Fair play",
  rg = () => "Jogo justo",
  ng = () => "公平游戏",
  tg = () => "Fair Play",
  ig = () => "Juego limpio",
  og = () => "Fair play",
  ug = () => "Fair play",
  sg = () => "フェアプレー",
  ag = () => "Fair play",
  _g = () => "Честная игра",
  cg = () => "Чесна гра",
  lg = () => "Chơi công bằng",
  Ad = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? eg() : e === "pt" ? rg() : e === "ch" ? ng() : e === "de" ? tg() : e === "es" ? ig() : e === "fr" ? og() : e === "it" ? ug() : e === "jp" ? sg() : e === "pl" ? ag() : e === "ru" ? _g() : e === "uk" ? cg() : lg()
  },
  gg = () => "Prohibited",
  pg = () => "Proibido",
  dg = () => "禁止行为",
  fg = () => "Verboten",
  mg = () => "Prohibido",
  hg = () => "Interdit",
  vg = () => "Vietato",
  bg = () => "禁止事項",
  kg = () => "Zabronione",
  zg = () => "Запрещено",
  wg = () => "Заборонено",
  yg = () => "Bị cấm",
  Ed = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? gg() : e === "pt" ? pg() : e === "ch" ? dg() : e === "de" ? fg() : e === "es" ? mg() : e === "fr" ? hg() : e === "it" ? vg() : e === "jp" ? bg() : e === "pl" ? kg() : e === "ru" ? zg() : e === "uk" ? wg() : yg()
  },
  xg = () => "Griefing",
  jg = () => "Griefing",
  Cg = () => "恶意破坏",
  Dg = () => "Griefing",
  Sg = () => "Griefing",
  qg = () => "Griefing",
  Gg = () => "Griefing",
  Ig = () => "グリーフィング",
  Ug = () => "Griefing",
  Pg = () => "Гриферство",
  Ng = () => "Грифінг",
  Ag = () => "Griefing",
  Td = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? xg() : e === "pt" ? jg() : e === "ch" ? Cg() : e === "de" ? Dg() : e === "es" ? Sg() : e === "fr" ? qg() : e === "it" ? Gg() : e === "jp" ? Ig() : e === "pl" ? Ug() : e === "ru" ? Pg() : e === "uk" ? Ng() : Ag()
  },
  Eg = () => "Inappropriate content",
  Tg = () => "Conteúdo inapropriado",
  Bg = () => "不当内容",
  Lg = () => "Unangemessene Inhalte",
  Mg = () => "Contenido inapropiado",
  Kg = () => "Contenu inapproprié",
  $g = () => "Contenuto inappropriato",
  Rg = () => "不適切なコンテンツ",
  Zg = () => "Nieodpowiednie treści",
  Hg = () => "Неприемлемый контент",
  Vg = () => "Неприйнятний вміст",
  Fg = () => "Nội dung không phù hợp",
  Bd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Eg() : e === "pt" ? Tg() : e === "ch" ? Bg() : e === "de" ? Lg() : e === "es" ? Mg() : e === "fr" ? Kg() : e === "it" ? $g() : e === "jp" ? Rg() : e === "pl" ? Zg() : e === "ru" ? Hg() : e === "uk" ? Vg() : Fg()
  },
  Og = () => "Map cleanup",
  Jg = () => "Limpeza do mapa",
  Wg = () => "地图清理",
  Qg = () => "Kartenbereinigung",
  Xg = () => "Limpieza del mapa",
  Yg = () => "Nettoyage de la carte",
  ep = () => "Pulizia della mappa",
  rp = () => "マップの清掃",
  np = () => "Sprzątanie mapy",
  tp = () => "Очистка карты",
  ip = () => "Очищення карти",
  op = () => "Dọn dẹp bản đồ",
  Ld = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Og() : e === "pt" ? Jg() : e === "ch" ? Wg() : e === "de" ? Qg() : e === "es" ? Xg() : e === "fr" ? Yg() : e === "it" ? ep() : e === "jp" ? rp() : e === "pl" ? np() : e === "ru" ? tp() : e === "uk" ? ip() : op()
  },
  up = () => "Multi-accounts & bots",
  sp = () => "Múltiplas contas e bots",
  ap = () => "多账号与机器人",
  _p = () => "Multi-Accounts & Bots",
  cp = () => "Multi-cuentas y bots",
  lp = () => "Multi-comptes et bots",
  gp = () => "Multi-account e bot",
  pp = () => "複数アカウント＆ボット",
  dp = () => "Multi-konta i boty",
  fp = () => "Мультиаккаунты и боты",
  mp = () => "Мультиакаунти та боти",
  hp = () => "Nhiều tài khoản & bot",
  Md = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? up() : e === "pt" ? sp() : e === "ch" ? ap() : e === "de" ? _p() : e === "es" ? cp() : e === "fr" ? lp() : e === "it" ? gp() : e === "jp" ? pp() : e === "pl" ? dp() : e === "ru" ? fp() : e === "uk" ? mp() : hp()
  },
  vp = () => "Territorial disputes",
  bp = () => "Disputas territoriais",
  kp = () => "领地争夺",
  zp = () => "Gebietskonflikte",
  wp = () => "Disputas territoriales",
  yp = () => "Disputes territoriales",
  xp = () => "Dispute territoriali",
  jp = () => "領土紛争",
  Cp = () => "Spory terytorialne",
  Dp = () => "Территориальные споры",
  Sp = () => "Територіальні спори",
  qp = () => "Tranh chấp lãnh thổ",
  Kd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? vp() : e === "pt" ? bp() : e === "ch" ? kp() : e === "de" ? zp() : e === "es" ? wp() : e === "fr" ? yp() : e === "it" ? xp() : e === "jp" ? jp() : e === "pl" ? Cp() : e === "ru" ? Dp() : e === "uk" ? Sp() : qp()
  };
export {
  qd as $, wd as A, xd as B, kd as C, yd as D, pd as E, dd as F, Lp as G, Kp as H, Wp as I, id as J, Qp as K, Xp as L, ld as M, nd as N, rd as O, ed as P, cd as Q, gd as R, md as S, Vp as T, Hp as U, Op as V, hd as W, fd as X, Sd as Y, Id as Z, Bd as _, Bp as a, Gd as a0, Td as a1, Pd as a2, Md as a3, Ed as a4, Dd as a5, Nd as a6, Kd as a7, Ud as a8, Ld as a9, Ad as aa, Ip as b, Np as c, Tp as d, Pp as e, Up as f, Ep as g, Ap as h, od as i, sd as j, td as k, Fp as l, Jp as m, Yp as n, _d as o, ud as p, Rp as q, Cd as r, ad as s, Zp as t, vd as u, bd as v, $p as w, Mp as x, zd as y, jd as z
};