import {
  g as t
} from "./BHEqZqXQ.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "c82b8b5d8deacdc21b4154b9417a43b8fc75f478"
    };
    var r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "ac7dfc75-1aba-47ec-922b-4d7ea391b8fd", n._sentryDebugIdIdentifier = "sentry-dbid-ac7dfc75-1aba-47ec-922b-4d7ea391b8fd")
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
  Rp = (n = {}, r = {}) => {
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
  x = () => "非表示",
  y = () => "Ukryj",
  j = () => "Скрыть",
  C = () => "Сховати",
  D = () => "Ẩn",
  Zp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? m() : e === "pt" ? h() : e === "ch" ? v() : e === "de" ? b() : e === "es" ? k() : e === "fr" ? z() : e === "it" ? w() : e === "jp" ? x() : e === "pl" ? y() : e === "ru" ? j() : e === "uk" ? C() : D()
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
  Hp = (n = {}, r = {}) => {
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
  Vp = (n = {}, r = {}) => {
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
  Fp = (n, r = {}) => {
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
  Op = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ce() : e === "pt" ? le() : e === "ch" ? ge() : e === "de" ? pe() : e === "es" ? de() : e === "fr" ? fe() : e === "it" ? me() : e === "jp" ? he() : e === "pl" ? ve() : e === "ru" ? be() : e === "uk" ? ke() : ze()
  },
  we = () => "Previous",
  xe = () => "Anterior",
  ye = () => "上一张",
  je = () => "Zurück",
  Ce = () => "Anterior",
  De = () => "Précédent",
  Se = () => "Precedente",
  qe = () => "前へ",
  Ge = () => "Poprzedni",
  Ie = () => "Назад",
  Ue = () => "Назад",
  Pe = () => "Trước",
  Jp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? we() : e === "pt" ? xe() : e === "ch" ? ye() : e === "de" ? je() : e === "es" ? Ce() : e === "fr" ? De() : e === "it" ? Se() : e === "jp" ? qe() : e === "pl" ? Ge() : e === "ru" ? Ie() : e === "uk" ? Ue() : Pe()
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
  Wp = (n = {}, r = {}) => {
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
  Qp = (n = {}, r = {}) => {
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
  Xp = (n = {}, r = {}) => {
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
  xr = () => "コミュニティによる清掃",
  yr = () => "Sprzątanie przez społeczność",
  jr = () => "Очистка сообществом",
  Cr = () => "Очищення спільнотою",
  Dr = () => "Cộng đồng dọn dẹp",
  Yp = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? mr() : e === "pt" ? hr() : e === "ch" ? vr() : e === "de" ? br() : e === "es" ? kr() : e === "fr" ? zr() : e === "it" ? wr() : e === "jp" ? xr() : e === "pl" ? yr() : e === "ru" ? jr() : e === "uk" ? Cr() : Dr()
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
  ed = (n = {}, r = {}) => {
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
  rd = (n = {}, r = {}) => {
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
  nd = (n = {}, r = {}) => {
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
  td = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ln() : e === "pt" ? gn() : e === "ch" ? pn() : e === "de" ? dn() : e === "es" ? fn() : e === "fr" ? mn() : e === "it" ? hn() : e === "jp" ? vn() : e === "pl" ? bn() : e === "ru" ? kn() : e === "uk" ? zn() : wn()
  },
  xn = () => "Drawing over another drawing",
  yn = () => "Desenhar por cima de outro desenho",
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
  id = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? xn() : e === "pt" ? yn() : e === "ch" ? jn() : e === "de" ? Cn() : e === "es" ? Dn() : e === "fr" ? Sn() : e === "it" ? qn() : e === "jp" ? Gn() : e === "pl" ? In() : e === "ru" ? Un() : e === "uk" ? Pn() : Nn()
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
  od = (n = {}, r = {}) => {
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
  ud = (n = {}, r = {}) => {
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
  sd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ot() : e === "pt" ? ut() : e === "ch" ? st() : e === "de" ? at() : e === "es" ? _t() : e === "fr" ? ct() : e === "it" ? lt() : e === "jp" ? gt() : e === "pl" ? pt() : e === "ru" ? dt() : e === "uk" ? ft() : mt()
  },
  ht = () => "Highly Suggestive Content",
  vt = () => "Conteúdo Altamente Sugestivo",
  bt = () => "高度暗示性内容",
  kt = () => "Stark anzügliche Inhalte",
  zt = () => "Contenido Altamente Sugerente",
  wt = () => "Contenu hautement suggestif",
  xt = () => "Contenuto fortemente allusivo",
  yt = () => "非常に性的示唆の強いコンテンツ",
  jt = () => "Mocno sugestywne treści",
  Ct = () => "Крайне откровенный контент",
  Dt = () => "Дуже відвертий контент",
  St = () => "Nội dung khiêu gợi mạnh",
  ad = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ht() : e === "pt" ? vt() : e === "ch" ? bt() : e === "de" ? kt() : e === "es" ? zt() : e === "fr" ? wt() : e === "it" ? xt() : e === "jp" ? yt() : e === "pl" ? jt() : e === "ru" ? Ct() : e === "uk" ? Dt() : St()
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
  _d = (n = {}, r = {}) => {
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
  cd = (n = {}, r = {}) => {
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
  ld = (n = {}, r = {}) => {
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
  gd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? li() : e === "pt" ? gi() : e === "ch" ? pi() : e === "de" ? di() : e === "es" ? fi() : e === "fr" ? mi() : e === "it" ? hi() : e === "jp" ? vi() : e === "pl" ? bi() : e === "ru" ? ki() : e === "uk" ? zi() : wi()
  },
  xi = () => "Using transparent pixels to remove inappropriate content",
  yi = () => "Usar pixels transparentes para remover conteúdo inapropriado",
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
  pd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? xi() : e === "pt" ? yi() : e === "ch" ? ji() : e === "de" ? Ci() : e === "es" ? Di() : e === "fr" ? Si() : e === "it" ? qi() : e === "jp" ? Gi() : e === "pl" ? Ii() : e === "ru" ? Ui() : e === "uk" ? Pi() : Ni()
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
  dd = (n = {}, r = {}) => {
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
  fd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Fi() : e === "pt" ? Oi() : e === "ch" ? Ji() : e === "de" ? Wi() : e === "es" ? Qi() : e === "fr" ? Xi() : e === "it" ? Yi() : e === "jp" ? eo() : e === "pl" ? ro() : e === "ru" ? no() : e === "uk" ? to() : io()
  },
  oo = () => "Sexualized images of characters that appear to be minors",
  uo = () => "Imagens sexualizadas de personagens que aparentam ser menores",
  so = () => "看起来像未成年人的角色的色情化图片",
  ao = () => "Sexualisierte Darstellungen von Charakteren, die minderjährig erscheinen",
  _o = () => "Imágenes sexualizadas de personajes que aparentan ser menores",
  co = () => "Images sexualisées de personnages qui semblent être mineurs",
  lo = () => "Immagini sessualizzate di personaggi che appaiono minorenni",
  go = () => "未成年に見えるキャラクターの性的画像",
  po = () => "Seksualizowane obrazy postaci wyglądających na nieletnich",
  fo = () => "Сексуализированные изображения персонажей, выглядящих как несовершеннолетние",
  mo = () => "Сексуалізовані зображення персонажів, що виглядають як неповнолітні",
  ho = () => "Hình ảnh tình dục hóa các nhân vật có vẻ ngoài trẻ vị thành niên",
  md = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? oo() : e === "pt" ? uo() : e === "ch" ? so() : e === "de" ? ao() : e === "es" ? _o() : e === "fr" ? co() : e === "it" ? lo() : e === "jp" ? go() : e === "pl" ? po() : e === "ru" ? fo() : e === "uk" ? mo() : ho()
  },
  vo = () => "Suggestive fetishist Content",
  bo = () => "Conteúdo sugestivo fetichista",
  ko = () => "暗示性恋物内容",
  zo = () => "Anzügliche fetischistische Inhalte",
  wo = () => "Contenido sugerente fetichista",
  xo = () => "Contenu suggestif fétichiste",
  yo = () => "Contenuto allusivo feticista",
  jo = () => "性的示唆のあるフェティッシュコンテンツ",
  Co = () => "Sugestywne treści fetyszystyczne",
  Do = () => "Откровенный фетишистский контент",
  So = () => "Відвертий фетишистський контент",
  qo = () => "Nội dung khiêu gợi theo hướng tôn sùng",
  hd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? vo() : e === "pt" ? bo() : e === "ch" ? ko() : e === "de" ? zo() : e === "es" ? wo() : e === "fr" ? xo() : e === "it" ? yo() : e === "jp" ? jo() : e === "pl" ? Co() : e === "ru" ? Do() : e === "uk" ? So() : qo()
  },
  Go = () => "Clear griefing",
  Io = () => "Griefing evidente",
  Uo = () => "明确的恶意破坏",
  Po = () => "Eindeutiges Griefing",
  No = () => "Griefing evidente",
  Ao = () => "Griefing manifeste",
  Eo = () => "Griefing evidente",
  To = () => "明確なグリーフィング",
  Bo = () => "Oczywisty griefing",
  Lo = () => "Явное гриферство",
  Mo = () => "Явний грифінг",
  Ko = () => "Griefing rõ ràng",
  vd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Go() : e === "pt" ? Io() : e === "ch" ? Uo() : e === "de" ? Po() : e === "es" ? No() : e === "fr" ? Ao() : e === "it" ? Eo() : e === "jp" ? To() : e === "pl" ? Bo() : e === "ru" ? Lo() : e === "uk" ? Mo() : Ko()
  },
  $o = () => "Cases of clear griefing (such as scribbling over someone's artwork with no creative intent, or deliberately disrupting it by placing random pixels) are <strong>subject to moderation intervention</strong>.",
  Ro = () => "Casos de griefing evidente (como rabiscar por cima da arte de alguém sem intenção criativa, ou interrompê-la deliberadamente colocando pixels aleatórios) estão <strong>sujeitos a intervenção da moderação</strong>.",
  Zo = () => "明确的恶意破坏行为（例如毫无创意目的地在他人作品上乱涂，或故意放置随机像素进行破坏）将<strong>受到管理介入</strong>。",
  Ho = () => "Fälle von eindeutigem Griefing (wie z. B. Kritzeln über Kunstwerke anderer ohne kreative Absicht oder das absichtliche Stören durch Platzieren zufälliger Pixel) <strong>unterliegen moderativen Maßnahmen</strong>.",
  Vo = () => "Los casos de griefing evidente (como garabatear sobre la obra de alguien sin intención creativa, o alterarla deliberadamente colocando píxeles aleatorios) están <strong>sujetos a intervención de moderación</strong>.",
  Fo = () => "Les cas de griefing manifeste (comme gribouiller sur l'œuvre de quelqu'un sans intention créative, ou la perturber délibérément en plaçant des pixels aléatoires) sont <strong>soumis à une intervention de la modération</strong>.",
  Oo = () => "I casi di griefing evidente (come scarabocchiare sopra l'opera di qualcuno senza intento creativo, o disturbarla deliberatamente piazzando pixel casuali) sono <strong>soggetti a intervento della moderazione</strong>.",
  Jo = () => "明確なグリーフィング（他人の作品に創造的な意図なく落書きする、ランダムなピクセルを置いて意図的に妨害するなど）は、<strong>モデレーションの介入対象</strong>となります。",
  Wo = () => "Przypadki oczywistego griefingu (takie jak bazgranie po cudzej grafice bez intencji twórczej lub celowe zakłócanie jej losowymi pikselami) <strong>podlegają interwencji moderacji</strong>.",
  Qo = () => "Случаи явного гриферства (например, черкание поверх чьего-то рисунка без творческого намерения или намеренное его разрушение случайными пикселями) <strong>подлежат модераторскому вмешательству</strong>.",
  Xo = () => "Випадки явного грифінгу (такі як замальовування чужого малюнка без творчого наміру або навмисне порушення за допомогою випадкових пікселів) <strong>підлягають модераторському втручанню</strong>.",
  Yo = () => "Các trường hợp griefing rõ ràng (như vẽ bậy lên tác phẩm của người khác mà không có ý sáng tạo, hoặc cố tình phá hoại bằng cách đặt pixel ngẫu nhiên) <strong>sẽ bị can thiệp kiểm duyệt</strong>.",
  bd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? $o() : e === "pt" ? Ro() : e === "ch" ? Zo() : e === "de" ? Ho() : e === "es" ? Vo() : e === "fr" ? Fo() : e === "it" ? Oo() : e === "jp" ? Jo() : e === "pl" ? Wo() : e === "ru" ? Qo() : e === "uk" ? Xo() : Yo()
  },
  eu = () => "Gray area",
  ru = () => "Área cinzenta",
  nu = () => "灰色地带",
  tu = () => "Grauzone",
  iu = () => "Zona gris",
  ou = () => "Zone grise",
  uu = () => "Zona grigia",
  su = () => "グレーゾーン",
  au = () => "Szara strefa",
  _u = () => "Серая зона",
  cu = () => "Сіра зона",
  lu = () => "Vùng xám",
  kd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? eu() : e === "pt" ? ru() : e === "ch" ? nu() : e === "de" ? tu() : e === "es" ? iu() : e === "fr" ? ou() : e === "it" ? uu() : e === "jp" ? su() : e === "pl" ? au() : e === "ru" ? _u() : e === "uk" ? cu() : lu()
  },
  gu = () => "Actions that alter or disrupt artwork but may have <strong>multiple valid interpretations</strong>, such as territorial expansion, cleanup, or style changes. <strong>These are not automatically griefing</strong>. However, if the behavior becomes excessive, targeted, or clearly disruptive over time, moderators may intervene.",
  pu = () => "Ações que alteram ou perturbam artes, mas que podem ter <strong>múltiplas interpretações válidas</strong>, como expansão territorial, limpeza ou mudanças de estilo. <strong>Isso não é automaticamente griefing</strong>. No entanto, se o comportamento se tornar excessivo, direcionado ou claramente prejudicial ao longo do tempo, os moderadores poderão intervir.",
  du = () => "改变或干扰作品但可能具有<strong>多种合理解读</strong>的行为，例如领地扩张、清理或风格变更。<strong>这些不会自动被视为恶意破坏</strong>。但如果行为变得过度、有针对性或随着时间推移明显具有破坏性，管理员可能会介入。",
  fu = () => "Aktionen, die Kunstwerke verändern oder stören, aber <strong>mehrere gültige Interpretationen</strong> haben können, wie z. B. Gebietserweiterung, Bereinigung oder Stiländerungen. <strong>Dies ist nicht automatisch Griefing</strong>. Wenn das Verhalten jedoch übermäßig, gezielt oder im Laufe der Zeit eindeutig störend wird, können Moderatoren eingreifen.",
  mu = () => "Acciones que alteran o interrumpen obras pero pueden tener <strong>múltiples interpretaciones válidas</strong>, como expansión territorial, limpieza o cambios de estilo. <strong>Esto no es automáticamente griefing</strong>. Sin embargo, si el comportamiento se vuelve excesivo, dirigido o claramente disruptivo con el tiempo, los moderadores pueden intervenir.",
  hu = () => "Actions qui modifient ou perturbent une œuvre mais peuvent avoir <strong>plusieurs interprétations valides</strong>, comme l'expansion territoriale, le nettoyage ou les changements de style. <strong>Ce n'est pas automatiquement du griefing</strong>. Cependant, si le comportement devient excessif, ciblé ou clairement perturbateur au fil du temps, les modérateurs peuvent intervenir.",
  vu = () => "Azioni che alterano o disturbano un'opera ma possono avere <strong>molteplici interpretazioni valide</strong>, come espansione territoriale, pulizia o cambiamenti di stile. <strong>Queste non sono automaticamente griefing</strong>. Tuttavia, se il comportamento diventa eccessivo, mirato o chiaramente disturbante nel tempo, i moderatori possono intervenire.",
  bu = () => "作品を変更・妨害するが、領土拡大、清掃、スタイル変更など<strong>複数の正当な解釈が可能な</strong>行為。<strong>これらは自動的にグリーフィングとはみなされません</strong>。ただし、行為が過剰になったり、特定の相手を標的にしたり、時間をかけて明らかに妨害的であったりする場合は、モデレーターが介入することがあります。",
  ku = () => "Działania, które zmieniają lub zakłócają grafikę, ale mogą mieć <strong>wiele uzasadnionych interpretacji</strong>, takie jak ekspansja terytorialna, sprzątanie lub zmiana stylu. <strong>Nie są one automatycznie uznawane za griefing</strong>. Jednakże, jeśli zachowanie staje się nadmierne, celowe lub wyraźnie destrukcyjne z czasem, moderatorzy mogą interweniować.",
  zu = () => "Действия, которые изменяют или нарушают рисунок, но могут иметь <strong>несколько допустимых интерпретаций</strong>, такие как территориальное расширение, очистка или смена стиля. <strong>Это автоматически не является гриферством</strong>. Однако если поведение становится чрезмерным, целенаправленным или явно деструктивным со временем, модераторы могут вмешаться.",
  wu = () => "Дії, які змінюють або порушують малюнки, але можуть мати <strong>кілька правомірних тлумачень</strong>, такі як розширення території, очищення або зміна стилю. <strong>Це не є автоматичним грифінгом</strong>. Однак, якщо поведінка стає надмірною, цілеспрямованою або явно деструктивною з часом, модератори можуть втрутитися.",
  xu = () => "Các hành động thay đổi hoặc phá vỡ tác phẩm nhưng có thể có <strong>nhiều cách hiểu hợp lý</strong>, chẳng hạn như mở rộng lãnh thổ, dọn dẹp hoặc thay đổi phong cách. <strong>Những hành động này không tự động được coi là griefing</strong>. Tuy nhiên, nếu hành vi trở nên quá mức, nhắm vào mục tiêu cụ thể hoặc rõ ràng gây phá hoại theo thời gian, quản trị viên có thể can thiệp.",
  zd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? gu() : e === "pt" ? pu() : e === "ch" ? du() : e === "de" ? fu() : e === "es" ? mu() : e === "fr" ? hu() : e === "it" ? vu() : e === "jp" ? bu() : e === "pl" ? ku() : e === "ru" ? zu() : e === "uk" ? wu() : xu()
  },
  yu = () => "Griefing means taking actions on the map <strong>solely to harass or frustrate</strong> other players, with no creative, strategic, or corrective purpose.",
  ju = () => "Griefing significa realizar ações no mapa <strong>unicamente para assediar ou frustrar</strong> outros jogadores, sem nenhum propósito criativo, estratégico ou corretivo.",
  Cu = () => "恶意破坏指在地图上<strong>仅以骚扰或激怒</strong>其他玩家为目的的行为，不具有任何创意、战略或纠正目的。",
  Du = () => "Griefing bedeutet, auf der Karte Aktionen durchzuführen, die <strong>ausschließlich dazu dienen, andere Spieler zu belästigen oder zu frustrieren</strong>, ohne kreativen, strategischen oder korrektiven Zweck.",
  Su = () => "Griefing significa realizar acciones en el mapa <strong>únicamente para acosar o frustrar</strong> a otros jugadores, sin ningún propósito creativo, estratégico o correctivo.",
  qu = () => "Le griefing consiste à effectuer des actions sur la carte <strong>dans le seul but de harceler ou de frustrer</strong> d'autres joueurs, sans aucun objectif créatif, stratégique ou correctif.",
  Gu = () => "Griefing significa compiere azioni sulla mappa <strong>al solo scopo di molestare o frustrare</strong> gli altri giocatori, senza alcun intento creativo, strategico o correttivo.",
  Iu = () => "グリーフィングとは、創造的、戦略的、または修正的な目的を持たず、<strong>他のプレイヤーを嫌がらせたり苛立たせたりすることだけを目的として</strong>マップ上で行う行為を指します。",
  Uu = () => "Griefing oznacza podejmowanie działań na mapie <strong>wyłącznie w celu nękania lub frustrowania</strong> innych graczy, bez żadnego twórczego, strategicznego ani korekcyjnego celu.",
  Pu = () => "Гриферство — это действия на карте, совершаемые <strong>исключительно с целью досадить или разозлить</strong> других игроков, без какого-либо творческого, стратегического или корректирующего намерения.",
  Nu = () => "Грифінг означає дії на карті, <strong>спрямовані виключно на те, щоб дратувати чи засмучувати</strong> інших гравців, без жодного творчого, стратегічного чи коригувального наміру.",
  Au = () => "Griefing có nghĩa là thực hiện các hành động trên bản đồ <strong>chỉ nhằm quấy rối hoặc gây bực bội</strong> cho người chơi khác, không có mục đích sáng tạo, chiến lược hay chỉnh sửa.",
  wd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? yu() : e === "pt" ? ju() : e === "ch" ? Cu() : e === "de" ? Du() : e === "es" ? Su() : e === "fr" ? qu() : e === "it" ? Gu() : e === "jp" ? Iu() : e === "pl" ? Uu() : e === "ru" ? Pu() : e === "uk" ? Nu() : Au()
  },
  Eu = () => "Using transparent pixels to remove spam, repetitive patterns, inappropriate or suggestive content is allowed.",
  Tu = () => "Usar pixels transparentes para remover spam, padrões repetitivos, conteúdo inapropriado ou sugestivo é permitido.",
  Bu = () => "使用透明像素移除垃圾内容、重复图案、不当或暗示性内容是被允许的。",
  Lu = () => "Die Verwendung von transparenten Pixeln zum Entfernen von Spam, sich wiederholenden Mustern, unangemessenen oder anzüglichen Inhalten ist erlaubt.",
  Mu = () => "Usar píxeles transparentes para eliminar spam, patrones repetitivos, contenido inapropiado o sugerente está permitido.",
  Ku = () => "L'utilisation de pixels transparents pour supprimer le spam, les motifs répétitifs, le contenu inapproprié ou suggestif est autorisée.",
  $u = () => "Utilizzare pixel trasparenti per rimuovere spam, pattern ripetitivi, contenuti inappropriati o allusivi è consentito.",
  Ru = () => "透明ピクセルを使って、スパム、繰り返しパターン、不適切または性的示唆の強いコンテンツを除去することは許可されています。",
  Zu = () => "Używanie przezroczystych pikseli do usuwania spamu, powtarzalnych wzorów, nieodpowiednich lub sugestywnych treści jest dozwolone.",
  Hu = () => "Использование прозрачных пикселей для удаления спама, повторяющихся узоров, неприемлемого или откровенного контента разрешено.",
  Vu = () => "Використання прозорих пікселів для видалення спаму, повторюваних візерунків, неприйнятного або відвертого контенту дозволено.",
  Fu = () => "Sử dụng pixel trong suốt để xóa spam, mẫu lặp lại, nội dung không phù hợp hoặc khiêu gợi là được phép.",
  xd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Eu() : e === "pt" ? Tu() : e === "ch" ? Bu() : e === "de" ? Lu() : e === "es" ? Mu() : e === "fr" ? Ku() : e === "it" ? $u() : e === "jp" ? Ru() : e === "pl" ? Zu() : e === "ru" ? Hu() : e === "uk" ? Vu() : Fu()
  },
  Ou = () => "Map Cleanup",
  Ju = () => "Limpeza do Mapa",
  Wu = () => "地图清理",
  Qu = () => "Kartenbereinigung",
  Xu = () => "Limpieza del Mapa",
  Yu = () => "Nettoyage de la carte",
  es = () => "Pulizia della mappa",
  rs = () => "マップの清掃",
  ns = () => "Sprzątanie mapy",
  ts = () => "Очистка карты",
  is = () => "Очищення карти",
  os = () => "Dọn dẹp bản đồ",
  yd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ou() : e === "pt" ? Ju() : e === "ch" ? Wu() : e === "de" ? Qu() : e === "es" ? Xu() : e === "fr" ? Yu() : e === "it" ? es() : e === "jp" ? rs() : e === "pl" ? ns() : e === "ru" ? ts() : e === "uk" ? is() : os()
  },
  us = () => "<strong>One account per person.</strong> Using bots, scripts, browser automation, or any exploit to gain an unfair advantage is strictly prohibited.",
  ss = () => "<strong>Uma conta por pessoa.</strong> Usar bots, scripts, automação de navegador ou qualquer exploit para obter vantagem injusta é estritamente proibido.",
  as = () => "<strong>每人只能使用一个账号。</strong>使用机器人、脚本、浏览器自动化或任何漏洞获取不公平优势的行为严格禁止。",
  _s = () => "<strong>Ein Konto pro Person.</strong> Die Verwendung von Bots, Skripten, Browser-Automatisierung oder sonstigen Exploits, um einen unfairen Vorteil zu erlangen, ist strengstens verboten.",
  cs = () => "<strong>Una cuenta por persona.</strong> Usar bots, scripts, automatización de navegador o cualquier exploit para obtener una ventaja injusta está estrictamente prohibido.",
  ls = () => "<strong>Un seul compte par personne.</strong> L'utilisation de bots, de scripts, d'automatisation de navigateur ou de toute exploitation de faille pour obtenir un avantage déloyal est strictement interdite.",
  gs = () => "<strong>Un account per persona.</strong> L'uso di bot, script, automazione del browser o qualsiasi exploit per ottenere un vantaggio sleale è severamente vietato.",
  ps = () => "<strong>1人につき1アカウント。</strong>ボット、スクリプト、ブラウザ自動化、またはその他のエクスプロイトを使用して不当な優位を得ることは厳しく禁止されています。",
  ds = () => "<strong>Jedno konto na osobę.</strong> Używanie botów, skryptów, automatyzacji przeglądarki lub jakichkolwiek exploitów w celu uzyskania nieuczciwej przewagi jest surowo zabronione.",
  fs = () => "<strong>Один аккаунт на человека.</strong> Использование ботов, скриптов, автоматизации браузера или любых эксплойтов для получения нечестного преимущества строго запрещено.",
  ms = () => "<strong>Один акаунт на людину.</strong> Використання ботів, скриптів, автоматизації браузера або будь-яких експлойтів для отримання нечесної переваги суворо заборонено.",
  hs = () => "<strong>Mỗi người một tài khoản.</strong> Sử dụng bot, script, tự động hóa trình duyệt hoặc bất kỳ lỗi khai thác nào để có lợi thế không công bằng đều bị nghiêm cấm.",
  jd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? us() : e === "pt" ? ss() : e === "ch" ? as() : e === "de" ? _s() : e === "es" ? cs() : e === "fr" ? ls() : e === "it" ? gs() : e === "jp" ? ps() : e === "pl" ? ds() : e === "ru" ? fs() : e === "uk" ? ms() : hs()
  },
  vs = () => "Suggestive Content",
  bs = () => "Conteúdo Sugestivo",
  ks = () => "暗示性内容",
  zs = () => "Anzügliche Inhalte",
  ws = () => "Contenido Sugerente",
  xs = () => "Contenu suggestif",
  ys = () => "Contenuto allusivo",
  js = () => "性的示唆のあるコンテンツ",
  Cs = () => "Treści sugestywne",
  Ds = () => "Откровенный контент",
  Ss = () => "Відвертий контент",
  qs = () => "Nội dung khiêu gợi",
  Cd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? vs() : e === "pt" ? bs() : e === "ch" ? ks() : e === "de" ? zs() : e === "es" ? ws() : e === "fr" ? xs() : e === "it" ? ys() : e === "jp" ? js() : e === "pl" ? Cs() : e === "ru" ? Ds() : e === "uk" ? Ss() : qs()
  },
  Gs = () => "Drawing in this category <strong>shouldn't lead to suspensions</strong>. However, <strong>the community is free clean up or paint over these artworks</strong>. Includes drawings with sexual undertones that don't cross into explicit territory (no genitalia, sexual acts, or sexual fluids).",
  Is = () => "Desenhos nesta categoria <strong>não devem levar a suspensões</strong>. No entanto, <strong>a comunidade é livre para limpar ou pintar por cima dessas artes</strong>. Inclui desenhos com conotações sexuais que não chegam a ser explícitos (sem genitália, atos sexuais ou fluidos sexuais).",
  Us = () => "此类别中的绘画<strong>不应导致暂停</strong>。但是，<strong>社区可以自由清理或覆盖这些作品</strong>。包括具有性暗示但未达到露骨程度的绘画（无生殖器、性行为或性液体）。",
  Ps = () => "Zeichnungen in dieser Kategorie <strong>sollten nicht zu Sperren führen</strong>. Allerdings <strong>ist es der Community erlaubt, diese Kunstwerke zu entfernen oder zu übermalen</strong>. Dazu gehören Zeichnungen mit sexuellen Untertönen, die nicht in explizites Gebiet vordringen (keine Genitalien, sexuelle Handlungen oder sexuelle Flüssigkeiten).",
  Ns = () => "Dibujar en esta categoría <strong>no debería llevar a suspensiones</strong>. Sin embargo, <strong>la comunidad es libre de limpiar o pintar sobre estas obras</strong>. Incluye dibujos con insinuaciones sexuales que no cruzan al territorio explícito (sin genitales, actos sexuales ni fluidos sexuales).",
  As = () => "Les dessins de cette catégorie <strong>ne devraient pas entraîner de suspension</strong>. Cependant, <strong>la communauté est libre de nettoyer ou de peindre par-dessus ces œuvres</strong>. Cela inclut les dessins à connotation sexuelle qui ne franchissent pas la limite du contenu explicite (pas d'organes génitaux, d'actes sexuels ni de fluides sexuels).",
  Es = () => "I disegni in questa categoria <strong>non dovrebbero portare a sospensioni</strong>. Tuttavia, <strong>la community è libera di ripulire o dipingere sopra queste opere</strong>. Include disegni con sottotoni sessuali che non superano il limite dell'esplicito (nessun genitale, atto sessuale o fluido sessuale).",
  Ts = () => "このカテゴリの描画は<strong>停止処分の対象にはなりません</strong>。ただし、<strong>コミュニティはこれらの作品を自由に消去・上書きできます</strong>。露骨な表現（性器、性行為、体液）には至らないが、性的なニュアンスを含む描画が該当します。",
  Bs = () => "Rysunki z tej kategorii <strong>nie powinny prowadzić do zawieszeń</strong>. Jednakże <strong>społeczność może swobodnie usuwać lub zamalowywać te grafiki</strong>. Obejmuje rysunki o podtekście seksualnym, które nie przekraczają granicy treści jednoznacznych (brak genitaliów, aktów seksualnych czy płynów seksualnych).",
  Ls = () => "Рисунки в этой категории <strong>не должны приводить к блокировке</strong>. Однако <strong>сообщество вправе убирать или закрашивать такие рисунки</strong>. Включает рисунки с сексуальным подтекстом, не переходящие в откровенную территорию (без гениталий, половых актов или половых жидкостей).",
  Ms = () => "Малюнки з цієї категорії <strong>не повинні призводити до блокувань</strong>. Однак <strong>спільнота має повне право очистити чи замалювати такі роботи</strong>. Включає малюнки з сексуальним підтекстом, які не переходять у відверту територію (без геніталій, статевих актів чи статевих рідин).",
  Ks = () => "Vẽ trong danh mục này <strong>không nên dẫn đến đình chỉ</strong>. Tuy nhiên, <strong>cộng đồng được tự do dọn dẹp hoặc tô đè lên các tác phẩm này</strong>. Bao gồm các bức vẽ có ẩn ý tình dục nhưng không vượt qua ranh giới khiêu dâm (không có bộ phận sinh dục, hành vi tình dục hay dịch thể tình dục).",
  Dd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Gs() : e === "pt" ? Is() : e === "ch" ? Us() : e === "de" ? Ps() : e === "es" ? Ns() : e === "fr" ? As() : e === "it" ? Es() : e === "jp" ? Ts() : e === "pl" ? Bs() : e === "ru" ? Ls() : e === "uk" ? Ms() : Ks()
  },
  $s = () => "Space is limited. Players and communities will compete for territory, and that's not just allowed, it's what keeps the map alive. Claiming, defending, and reclaiming space is core gameplay.",
  Rs = () => "O espaço é limitado. Jogadores e comunidades vão competir por território, e isso não é apenas permitido, é o que mantém o mapa vivo. Conquistar, defender e retomar espaço faz parte da jogabilidade principal.",
  Zs = () => "空间有限。玩家和社区会争夺领地，这不仅被允许，更是让地图保持活力的关键。占领、防守和夺回空间是核心玩法。",
  Hs = () => "Der Platz ist begrenzt. Spieler und Communities werden um Gebiete konkurrieren, und das ist nicht nur erlaubt, es hält die Karte lebendig. Gebiete beanspruchen, verteidigen und zurückerobern ist Teil des Kernspiels.",
  Vs = () => "El espacio es limitado. Los jugadores y comunidades competirán por territorio, y eso no solo está permitido, es lo que mantiene el mapa vivo. Reclamar, defender y reconquistar espacio es parte esencial del juego.",
  Fs = () => "L'espace est limité. Les joueurs et les communautés se disputeront le territoire, et ce n'est pas seulement autorisé, c'est ce qui fait vivre la carte. Revendiquer, défendre et reconquérir l'espace fait partie du gameplay de base.",
  Os = () => "Lo spazio è limitato. I giocatori e le community competeranno per il territorio, e questo non è solo consentito, è ciò che mantiene viva la mappa. Conquistare, difendere e riconquistare spazio è il gameplay fondamentale.",
  Js = () => "スペースには限りがあります。プレイヤーやコミュニティは領土をめぐって競い合います。これは許可されているだけでなく、マップを活気づける要素です。スペースの確保、防衛、奪還はゲームの基本です。",
  Ws = () => "Przestrzeń jest ograniczona. Gracze i społeczności będą rywalizować o terytorium — i to nie tylko jest dozwolone, to właśnie utrzymuje mapę przy życiu. Zajmowanie, obrona i odzyskiwanie przestrzeni to podstawowa rozgrywka.",
  Qs = () => "Пространство ограничено. Игроки и сообщества будут конкурировать за территорию, и это не просто разрешено — это то, что поддерживает карту живой. Захват, оборона и отвоевание территории — основная механика игры.",
  Xs = () => "Простір обмежений. Гравці та спільноти змагатимуться за територію, і це не лише дозволено — це те, що підтримує карту живою. Захоплення, оборона та відвоювання простору є основою геймплею.",
  Ys = () => "Không gian có hạn. Người chơi và cộng đồng sẽ cạnh tranh lãnh thổ, và điều đó không chỉ được phép — nó là thứ giữ cho bản đồ sống động. Chiếm, bảo vệ và giành lại không gian là cách chơi cốt lõi.",
  Sd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? $s() : e === "pt" ? Rs() : e === "ch" ? Zs() : e === "de" ? Hs() : e === "es" ? Vs() : e === "fr" ? Fs() : e === "it" ? Os() : e === "jp" ? Js() : e === "pl" ? Ws() : e === "ru" ? Qs() : e === "uk" ? Xs() : Ys()
  },
  ea = () => "Territorial Disputes",
  ra = () => "Disputas Territoriais",
  na = () => "领地争夺",
  ta = () => "Gebietskonflikte",
  ia = () => "Disputas Territoriales",
  oa = () => "Disputes territoriales",
  ua = () => "Dispute territoriali",
  sa = () => "領土紛争",
  aa = () => "Spory terytorialne",
  _a = () => "Территориальные споры",
  ca = () => "Територіальні спори",
  la = () => "Tranh chấp lãnh thổ",
  qd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ea() : e === "pt" ? ra() : e === "ch" ? na() : e === "de" ? ta() : e === "es" ? ia() : e === "fr" ? oa() : e === "it" ? ua() : e === "jp" ? sa() : e === "pl" ? aa() : e === "ru" ? _a() : e === "uk" ? ca() : la()
  },
  ga = () => "Painting over other players' work is a normal part of the game. If your intent isn't to only harass or deliberately frustrate someone, moderators won't intervene.",
  pa = () => "Pintar por cima do trabalho de outros jogadores é uma parte normal do jogo. Se sua intenção não for apenas assediar ou frustrar alguém deliberadamente, os moderadores não irão intervir.",
  da = () => "覆盖其他玩家的作品是游戏的正常组成部分。如果你的目的不仅仅是骚扰或故意激怒他人，管理员不会介入。",
  fa = () => "Das Übermalen der Arbeit anderer Spieler ist ein normaler Teil des Spiels. Wenn deine Absicht nicht darin besteht, jemanden nur zu belästigen oder absichtlich zu frustrieren, werden Moderatoren nicht eingreifen.",
  ma = () => "Pintar sobre el trabajo de otros jugadores es una parte normal del juego. Si tu intención no es solo acosar o frustrar deliberadamente a alguien, los moderadores no intervendrán.",
  ha = () => "Peindre par-dessus le travail d'autres joueurs fait partie intégrante du jeu. Si votre intention n'est pas uniquement de harceler ou de frustrer délibérément quelqu'un, les modérateurs n'interviendront pas.",
  va = () => "Dipingere sopra il lavoro di altri giocatori è una parte normale del gioco. Se il tuo intento non è solo quello di molestare o frustrare deliberatamente qualcuno, i moderatori non interverranno.",
  ba = () => "他のプレイヤーの作品の上にペイントすることは、ゲームの通常の一部です。あなたの意図が単に嫌がらせや故意に苛立たせることでなければ、モデレーターは介入しません。",
  ka = () => "Zamalowywanie prac innych graczy jest normalną częścią gry. Jeśli Twoim celem nie jest wyłącznie nękanie lub celowe frustrowanie kogoś, moderatorzy nie będą interweniować.",
  za = () => "Рисование поверх работ других игроков — нормальная часть игры. Если ваша цель не состоит исключительно в том, чтобы досадить или намеренно расстроить кого-то, модераторы не вмешаются.",
  wa = () => "Малювання поверх робіт інших гравців є нормальною частиною гри. Якщо ваш намір — не лише дратувати чи навмисно засмучувати когось, модератори не втручатимуться.",
  xa = () => "Tô đè lên tác phẩm của người chơi khác là một phần bình thường của trò chơi. Nếu mục đích của bạn không phải chỉ để quấy rối hay cố tình gây bực bội ai đó, quản trị viên sẽ không can thiệp.",
  Gd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ga() : e === "pt" ? pa() : e === "ch" ? da() : e === "de" ? fa() : e === "es" ? ma() : e === "fr" ? ha() : e === "it" ? va() : e === "jp" ? ba() : e === "pl" ? ka() : e === "ru" ? za() : e === "uk" ? wa() : xa()
  },
  ya = () => "Zero-tolerance content",
  ja = () => "Conteúdo de tolerância zero",
  Ca = () => "零容忍内容",
  Da = () => "Null-Toleranz-Inhalte",
  Sa = () => "Contenido de tolerancia cero",
  qa = () => "Contenu à tolérance zéro",
  Ga = () => "Contenuti a tolleranza zero",
  Ia = () => "ゼロトレランスコンテンツ",
  Ua = () => "Treści objęte zerową tolerancją",
  Pa = () => "Контент с нулевой терпимостью",
  Na = () => "Контент з нульовою толерантністю",
  Aa = () => "Nội dung không khoan nhượng",
  Id = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ya() : e === "pt" ? ja() : e === "ch" ? Ca() : e === "de" ? Da() : e === "es" ? Sa() : e === "fr" ? qa() : e === "it" ? Ga() : e === "jp" ? Ia() : e === "pl" ? Ua() : e === "ru" ? Pa() : e === "uk" ? Na() : Aa()
  },
  Ea = () => "The following content is subject to moderation intervention and can result in a <strong>permanent ban</strong>:",
  Ta = () => "O seguinte conteúdo está sujeito a intervenção da moderação e pode resultar em <strong>banimento permanente</strong>:",
  Ba = () => "以下内容将受到管理介入，并可能导致<strong>永久封禁</strong>：",
  La = () => "Die folgenden Inhalte unterliegen moderativen Maßnahmen und können zu einem <strong>permanenten Bann</strong> führen:",
  Ma = () => "El siguiente contenido está sujeto a intervención de moderación y puede resultar en un <strong>ban permanente</strong>:",
  Ka = () => "Le contenu suivant est soumis à une intervention de la modération et peut entraîner un <strong>bannissement permanent</strong> :",
  $a = () => "I seguenti contenuti sono soggetti a intervento della moderazione e possono comportare un <strong>ban permanente</strong>:",
  Ra = () => "以下のコンテンツはモデレーションの対象となり、<strong>永久BAN</strong>になる場合があります:",
  Za = () => "Poniższe treści podlegają interwencji moderacji i mogą skutkować <strong>permanentnym banem</strong>:",
  Ha = () => "Следующий контент подлежит модераторскому вмешательству и может привести к <strong>перманентному бану</strong>:",
  Va = () => "Наступний контент підлягає модераторському втручанню і може призвести до <strong>перманентного бану</strong>:",
  Fa = () => "Các nội dung sau đây sẽ bị can thiệp kiểm duyệt và có thể dẫn đến <strong>cấm vĩnh viễn</strong>:",
  Ud = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ea() : e === "pt" ? Ta() : e === "ch" ? Ba() : e === "de" ? La() : e === "es" ? Ma() : e === "fr" ? Ka() : e === "it" ? $a() : e === "jp" ? Ra() : e === "pl" ? Za() : e === "ru" ? Ha() : e === "uk" ? Va() : Fa()
  },
  Oa = () => "Doxxing (sharing anyone's private personal information)",
  Ja = () => "Doxxing (compartilhar informações pessoais privadas de qualquer pessoa)",
  Wa = () => "人肉搜索（分享任何人的私人个人信息）",
  Qa = () => "Doxxing (Veröffentlichung persönlicher Informationen anderer)",
  Xa = () => "Doxxing (compartir información personal privada de cualquier persona)",
  Ya = () => "Doxxing (partage d'informations personnelles privées de quiconque)",
  e_ = () => "Doxxing (condivisione di informazioni personali private di chiunque)",
  r_ = () => "ドキシング（他人の個人情報の共有）",
  n_ = () => "Doxxing (udostępnianie prywatnych danych osobowych innych osób)",
  t_ = () => "Доксинг (распространение чьей-либо личной информации)",
  i_ = () => "Доксинг (поширення приватної особистої інформації будь-кого)",
  o_ = () => "Doxxing (chia sẻ thông tin cá nhân riêng tư của bất kỳ ai)",
  Pd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Oa() : e === "pt" ? Ja() : e === "ch" ? Wa() : e === "de" ? Qa() : e === "es" ? Xa() : e === "fr" ? Ya() : e === "it" ? e_() : e === "jp" ? r_() : e === "pl" ? n_() : e === "ru" ? t_() : e === "uk" ? i_() : o_()
  },
  u_ = () => "Explicit sexual content (genitalia, sexual acts, sexual fluids)",
  s_ = () => "Conteúdo sexual explícito (genitália, atos sexuais, fluidos sexuais)",
  a_ = () => "露骨的色情内容（生殖器、性行为、性液体）",
  __ = () => "Explizit sexuelle Inhalte (Genitalien, sexuelle Handlungen, sexuelle Flüssigkeiten)",
  c_ = () => "Contenido sexual explícito (genitales, actos sexuales, fluidos sexuales)",
  l_ = () => "Contenu sexuel explicite (organes génitaux, actes sexuels, fluides sexuels)",
  g_ = () => "Contenuto sessuale esplicito (genitali, atti sessuali, fluidi sessuali)",
  p_ = () => "露骨な性的コンテンツ（性器、性行為、体液）",
  d_ = () => "Jednoznaczne treści seksualne (genitalia, akty seksualne, płyny seksualne)",
  f_ = () => "Откровенный сексуальный контент (гениталии, половые акты, половые жидкости)",
  m_ = () => "Відверто сексуальний контент (геніталії, статеві акти, статеві рідини)",
  h_ = () => "Nội dung tình dục rõ ràng (bộ phận sinh dục, hành vi tình dục, dịch thể tình dục)",
  Nd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? u_() : e === "pt" ? s_() : e === "ch" ? a_() : e === "de" ? __() : e === "es" ? c_() : e === "fr" ? l_() : e === "it" ? g_() : e === "jp" ? p_() : e === "pl" ? d_() : e === "ru" ? f_() : e === "uk" ? m_() : h_()
  },
  v_ = () => "Extreme graphic gore or realistic violence",
  b_ = () => "Gore gráfico extremo ou violência realista",
  k_ = () => "极端血腥或写实暴力内容",
  z_ = () => "Extremer grafischer Gore oder realistische Gewalt",
  w_ = () => "Gore gráfico extremo o violencia realista",
  x_ = () => "Gore graphique extrême ou violence réaliste",
  y_ = () => "Gore grafico estremo o violenza realistica",
  j_ = () => "極度にグロテスクな描写やリアルな暴力表現",
  C_ = () => "Ekstremalnie drastyczne treści gore lub realistyczna przemoc",
  D_ = () => "Чрезмерная графическая жестокость или реалистичное насилие",
  S_ = () => "Екстремально жорстокі або реалістичні сцени насильства",
  q_ = () => "Bạo lực đẫm máu cực đoan hoặc bạo lực chân thực",
  Ad = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? v_() : e === "pt" ? b_() : e === "ch" ? k_() : e === "de" ? z_() : e === "es" ? w_() : e === "fr" ? x_() : e === "it" ? y_() : e === "jp" ? j_() : e === "pl" ? C_() : e === "ru" ? D_() : e === "uk" ? S_() : q_()
  },
  G_ = () => "Extreme hostility or targeted harassment toward others",
  I_ = () => "Hostilidade extrema ou assédio direcionado a outros",
  U_ = () => "对他人的极端敌意或针对性骚扰",
  P_ = () => "Extreme Feindseligkeit oder gezielte Belästigung anderer",
  N_ = () => "Hostilidad extrema o acoso dirigido hacia otros",
  A_ = () => "Hostilité extrême ou harcèlement ciblé envers autrui",
  E_ = () => "Ostilità estrema o molestie mirate verso altri",
  T_ = () => "他者に対する極端な敵意や標的型の嫌がらせ",
  B_ = () => "Skrajna wrogość lub ukierunkowane nękanie innych osób",
  L_ = () => "Крайняя враждебность или целенаправленная травля других",
  M_ = () => "Екстремальна ворожість або цілеспрямоване переслідування інших",
  K_ = () => "Thái độ thù địch cực đoan hoặc quấy rối nhắm vào người khác",
  Ed = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? G_() : e === "pt" ? I_() : e === "ch" ? U_() : e === "de" ? P_() : e === "es" ? N_() : e === "fr" ? A_() : e === "it" ? E_() : e === "jp" ? T_() : e === "pl" ? B_() : e === "ru" ? L_() : e === "uk" ? M_() : K_()
  },
  $_ = () => "Clear hate speech, extreme slurs, or symbols of hate (e.g. swastikas)",
  R_ = () => "Discurso de ódio evidente, ofensas extremas ou símbolos de ódio (ex.: suásticas)",
  Z_ = () => "明确的仇恨言论、极端侮辱性用语或仇恨符号（如纳粹符号）",
  H_ = () => "Eindeutige Hassrede, extreme Beleidigungen oder Hasssymbole (z. B. Hakenkreuze)",
  V_ = () => "Discurso de odio claro, insultos extremos o símbolos de odio (ej. esvásticas)",
  F_ = () => "Discours de haine manifeste, insultes extrêmes ou symboles haineux (ex. : croix gammées)",
  O_ = () => "Chiaro discorso d'odio, insulti estremi o simboli d'odio (es. svastiche)",
  J_ = () => "明確なヘイトスピーチ、極端な差別用語、またはヘイトシンボル（例: 鉤十字）",
  W_ = () => "Wyraźna mowa nienawiści, skrajne obelgi lub symbole nienawiści (np. swastyki)",
  Q_ = () => "Явная речь ненависти, грубые оскорбления или символы ненависти (например, свастики)",
  X_ = () => "Явна мова ненависті, образливі слова або символи ненависті (напр. свастики)",
  Y_ = () => "Ngôn từ thù hằn rõ ràng, từ ngữ xúc phạm nặng hoặc biểu tượng thù hận (ví dụ: chữ vạn)",
  Td = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? $_() : e === "pt" ? R_() : e === "ch" ? Z_() : e === "de" ? H_() : e === "es" ? V_() : e === "fr" ? F_() : e === "it" ? O_() : e === "jp" ? J_() : e === "pl" ? W_() : e === "ru" ? Q_() : e === "uk" ? X_() : Y_()
  },
  ec = () => "Sexualization of minors or characters with child-like visual traits, regardless of their fictional age or lore",
  rc = () => "Sexualização de menores ou personagens com traços visuais infantis, independentemente de sua idade fictícia ou história",
  nc = () => "对未成年人或具有儿童外观特征的角色的色情化，无论其虚构年龄或设定如何",
  tc = () => "Sexualisierung von Minderjährigen oder Charakteren mit kindlichen visuellen Merkmalen, unabhängig von deren fiktivem Alter oder Hintergrundgeschichte",
  ic = () => "Sexualización de menores o personajes con rasgos visuales infantiles, independientemente de su edad ficticia o historia",
  oc = () => "Sexualisation de mineurs ou de personnages ayant des traits visuels enfantins, indépendamment de leur âge fictif ou de leur lore",
  uc = () => "Sessualizzazione di minori o personaggi con tratti visivi infantili, indipendentemente dalla loro età fittizia o lore",
  sc = () => "未成年者または子供のような外見を持つキャラクターの性的描写（架空の年齢や設定に関係なく）",
  ac = () => "Seksualizacja nieletnich lub postaci o dziecięcych cechach wizualnych, niezależnie od ich fikcyjnego wieku lub historii",
  _c = () => "Сексуализация несовершеннолетних или персонажей с детскими чертами, вне зависимости от их вымышленного возраста или лора",
  cc = () => "Сексуалізація неповнолітніх або персонажів з дитячими візуальними рисами, незалежно від їхнього вигаданого віку чи лору",
  lc = () => "Tình dục hóa trẻ vị thành niên hoặc nhân vật có đặc điểm ngoại hình trẻ em, bất kể tuổi hư cấu hay cốt truyện",
  Bd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ec() : e === "pt" ? rc() : e === "ch" ? nc() : e === "de" ? tc() : e === "es" ? ic() : e === "fr" ? oc() : e === "it" ? uc() : e === "jp" ? sc() : e === "pl" ? ac() : e === "ru" ? _c() : e === "uk" ? cc() : lc()
  },
  gc = () => "Rules",
  pc = () => "Regras",
  dc = () => "规则",
  fc = () => "Regeln",
  mc = () => "Reglas",
  hc = () => "Règles",
  vc = () => "Regole",
  bc = () => "ルール",
  kc = () => "Zasady",
  zc = () => "Правила",
  wc = () => "Правила",
  xc = () => "Luật",
  Ld = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? gc() : e === "pt" ? pc() : e === "ch" ? dc() : e === "de" ? fc() : e === "es" ? mc() : e === "fr" ? hc() : e === "it" ? vc() : e === "jp" ? bc() : e === "pl" ? kc() : e === "ru" ? zc() : e === "uk" ? wc() : xc()
  },
  yc = () => "allowed",
  jc = () => "permitido",
  Cc = () => "允许",
  Dc = () => "erlaubt",
  Sc = () => "permitido",
  qc = () => "autorisé",
  Gc = () => "consentito",
  Ic = () => "許可",
  Uc = () => "dozwolone",
  Pc = () => "разрешено",
  Nc = () => "дозволено",
  Ac = () => "được phép",
  Md = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? yc() : e === "pt" ? jc() : e === "ch" ? Cc() : e === "de" ? Dc() : e === "es" ? Sc() : e === "fr" ? qc() : e === "it" ? Gc() : e === "jp" ? Ic() : e === "pl" ? Uc() : e === "ru" ? Pc() : e === "uk" ? Nc() : Ac()
  },
  Ec = () => "permanent ban",
  Tc = () => "banimento permanente",
  Bc = () => "永久封禁",
  Lc = () => "permanenter Bann",
  Mc = () => "ban permanente",
  Kc = () => "bannissement permanent",
  $c = () => "ban permanente",
  Rc = () => "永久BAN",
  Zc = () => "permanentny ban",
  Hc = () => "перманентный бан",
  Vc = () => "перманентний бан",
  Fc = () => "cấm vĩnh viễn",
  Kd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ec() : e === "pt" ? Tc() : e === "ch" ? Bc() : e === "de" ? Lc() : e === "es" ? Mc() : e === "fr" ? Kc() : e === "it" ? $c() : e === "jp" ? Rc() : e === "pl" ? Zc() : e === "ru" ? Hc() : e === "uk" ? Vc() : Fc()
  },
  Oc = () => "timeout",
  Jc = () => "suspensão",
  Wc = () => "禁言",
  Qc = () => "Sperre",
  Xc = () => "suspensión",
  Yc = () => "suspension",
  el = () => "sospensione",
  rl = () => "一時停止",
  nl = () => "zawieszenie",
  tl = () => "тайм-аут",
  il = () => "тайм-аут",
  ol = () => "tạm khóa",
  $d = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Oc() : e === "pt" ? Jc() : e === "ch" ? Wc() : e === "de" ? Qc() : e === "es" ? Xc() : e === "fr" ? Yc() : e === "it" ? el() : e === "jp" ? rl() : e === "pl" ? nl() : e === "ru" ? tl() : e === "uk" ? il() : ol()
  },
  ul = () => "Destroying others' work with no creative intent.",
  sl = () => "Destruir o trabalho dos outros sem intenção criativa.",
  al = () => "毫无创意目的地破坏他人作品。",
  _l = () => "Zerstörung der Arbeit anderer ohne kreative Absicht.",
  cl = () => "Destruir el trabajo de otros sin intención creativa.",
  ll = () => "Détruire le travail des autres sans intention créative.",
  gl = () => "Distruggere il lavoro degli altri senza intento creativo.",
  pl = () => "創造的な意図なく他人の作品を破壊する行為。",
  dl = () => "Niszczenie cudzych prac bez intencji twórczej.",
  fl = () => "Уничтожение чужих работ без какого-либо творческого намерения.",
  ml = () => "Знищення чужих робіт без творчого наміру.",
  hl = () => "Phá hoại tác phẩm của người khác mà không có ý định sáng tạo.",
  Rd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ul() : e === "pt" ? sl() : e === "ch" ? al() : e === "de" ? _l() : e === "es" ? cl() : e === "fr" ? ll() : e === "it" ? gl() : e === "jp" ? pl() : e === "pl" ? dl() : e === "ru" ? fl() : e === "uk" ? ml() : hl()
  },
  vl = () => "Explicit, hateful, or illegal content is not tolerated.",
  bl = () => "Conteúdo explícito, de ódio ou ilegal não é tolerado.",
  kl = () => "不容忍色情、仇恨或违法内容。",
  zl = () => "Explizite, hasserfüllte oder illegale Inhalte werden nicht toleriert.",
  wl = () => "El contenido explícito, de odio o ilegal no es tolerado.",
  xl = () => "Le contenu explicite, haineux ou illégal n'est pas toléré.",
  yl = () => "Contenuti espliciti, di odio o illegali non sono tollerati.",
  jl = () => "露骨、差別的、または違法なコンテンツは容認されません。",
  Cl = () => "Treści jednoznacznie seksualne, nawołujące do nienawiści lub nielegalne nie są tolerowane.",
  Dl = () => "Откровенный, ненавистнический или незаконный контент запрещён.",
  Sl = () => "Відвертий, ненависницький або незаконний контент не допускається.",
  ql = () => "Nội dung khiêu dâm, thù hằn hoặc bất hợp pháp sẽ không được dung thứ.",
  Zd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? vl() : e === "pt" ? bl() : e === "ch" ? kl() : e === "de" ? zl() : e === "es" ? wl() : e === "fr" ? xl() : e === "it" ? yl() : e === "jp" ? jl() : e === "pl" ? Cl() : e === "ru" ? Dl() : e === "uk" ? Sl() : ql()
  },
  Gl = () => "Erasing spam, inappropriate or suggestive content with transparent pixels.",
  Il = () => "Apagar spam, conteúdo inapropriado ou sugestivo com pixels transparentes.",
  Ul = () => "使用透明像素清除垃圾内容、不当或暗示性内容。",
  Pl = () => "Spam, unangemessene oder anzügliche Inhalte mit transparenten Pixeln entfernen.",
  Nl = () => "Borrar spam, contenido inapropiado o sugerente con píxeles transparentes.",
  Al = () => "Effacer le spam, le contenu inapproprié ou suggestif avec des pixels transparents.",
  El = () => "Cancellare spam, contenuti inappropriati o allusivi con pixel trasparenti.",
  Tl = () => "透明ピクセルを使って、スパム、不適切、または性的示唆の強いコンテンツを消去する行為。",
  Bl = () => "Usuwanie spamu, nieodpowiednich lub sugestywnych treści za pomocą przezroczystych pikseli.",
  Ll = () => "Удаление спама, неприемлемого или откровенного контента прозрачными пикселями.",
  Ml = () => "Видалення спаму, неприйнятного чи відвертого контенту прозорими пікселями.",
  Kl = () => "Xóa spam, nội dung không phù hợp hoặc khiêu gợi bằng pixel trong suốt.",
  Hd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Gl() : e === "pt" ? Il() : e === "ch" ? Ul() : e === "de" ? Pl() : e === "es" ? Nl() : e === "fr" ? Al() : e === "it" ? El() : e === "jp" ? Tl() : e === "pl" ? Bl() : e === "ru" ? Ll() : e === "uk" ? Ml() : Kl()
  },
  $l = () => "One account per person. No automation or exploits.",
  Rl = () => "Uma conta por pessoa. Sem automação ou exploits.",
  Zl = () => "每人只能使用一个账号。禁止使用自动化工具或利用漏洞。",
  Hl = () => "Ein Konto pro Person. Keine Automatisierung oder Exploits.",
  Vl = () => "Una cuenta por persona. Sin automatización ni exploits.",
  Fl = () => "Un seul compte par personne. Aucune automatisation ni exploitation de failles.",
  Ol = () => "Un account per persona. Nessuna automazione o exploit.",
  Jl = () => "1人につき1アカウントです。自動化やエクスプロイトは禁止です。",
  Wl = () => "Jedno konto na osobę. Żadnej automatyzacji ani exploitów.",
  Ql = () => "Один аккаунт на человека. Никакой автоматизации и эксплойтов.",
  Xl = () => "Один акаунт на людину. Без автоматизації чи експлойтів.",
  Yl = () => "Mỗi người một tài khoản. Không được tự động hóa hay khai thác lỗi.",
  Vd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? $l() : e === "pt" ? Rl() : e === "ch" ? Zl() : e === "de" ? Hl() : e === "es" ? Vl() : e === "fr" ? Fl() : e === "it" ? Ol() : e === "jp" ? Jl() : e === "pl" ? Wl() : e === "ru" ? Ql() : e === "uk" ? Xl() : Yl()
  },
  eg = () => "Competing for space is part of the game.",
  rg = () => "Competir por espaço faz parte do jogo.",
  ng = () => "争夺空间是游戏的一部分。",
  tg = () => "Der Wettbewerb um Platz ist Teil des Spiels.",
  ig = () => "Competir por el espacio es parte del juego.",
  og = () => "La compétition pour l'espace fait partie du jeu.",
  ug = () => "Competere per lo spazio fa parte del gioco.",
  sg = () => "スペースをめぐる競争はゲームの一部です。",
  ag = () => "Rywalizacja o przestrzeń jest częścią gry.",
  _g = () => "Борьба за территорию — часть игры.",
  cg = () => "Боротьба за простір — це частина гри.",
  lg = () => "Cạnh tranh không gian là một phần của trò chơi.",
  Fd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? eg() : e === "pt" ? rg() : e === "ch" ? ng() : e === "de" ? tg() : e === "es" ? ig() : e === "fr" ? og() : e === "it" ? ug() : e === "jp" ? sg() : e === "pl" ? ag() : e === "ru" ? _g() : e === "uk" ? cg() : lg()
  },
  gg = () => "Fair play",
  pg = () => "Jogo justo",
  dg = () => "公平游戏",
  fg = () => "Fair Play",
  mg = () => "Juego limpio",
  hg = () => "Fair play",
  vg = () => "Fair play",
  bg = () => "フェアプレー",
  kg = () => "Fair play",
  zg = () => "Честная игра",
  wg = () => "Чесна гра",
  xg = () => "Chơi công bằng",
  Od = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? gg() : e === "pt" ? pg() : e === "ch" ? dg() : e === "de" ? fg() : e === "es" ? mg() : e === "fr" ? hg() : e === "it" ? vg() : e === "jp" ? bg() : e === "pl" ? kg() : e === "ru" ? zg() : e === "uk" ? wg() : xg()
  },
  yg = () => "Prohibited",
  jg = () => "Proibido",
  Cg = () => "禁止行为",
  Dg = () => "Verboten",
  Sg = () => "Prohibido",
  qg = () => "Interdit",
  Gg = () => "Vietato",
  Ig = () => "禁止事項",
  Ug = () => "Zabronione",
  Pg = () => "Запрещено",
  Ng = () => "Заборонено",
  Ag = () => "Bị cấm",
  Jd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? yg() : e === "pt" ? jg() : e === "ch" ? Cg() : e === "de" ? Dg() : e === "es" ? Sg() : e === "fr" ? qg() : e === "it" ? Gg() : e === "jp" ? Ig() : e === "pl" ? Ug() : e === "ru" ? Pg() : e === "uk" ? Ng() : Ag()
  },
  Eg = () => "Griefing",
  Tg = () => "Griefing",
  Bg = () => "恶意破坏",
  Lg = () => "Griefing",
  Mg = () => "Griefing",
  Kg = () => "Griefing",
  $g = () => "Griefing",
  Rg = () => "グリーフィング",
  Zg = () => "Griefing",
  Hg = () => "Гриферство",
  Vg = () => "Грифінг",
  Fg = () => "Griefing",
  Wd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Eg() : e === "pt" ? Tg() : e === "ch" ? Bg() : e === "de" ? Lg() : e === "es" ? Mg() : e === "fr" ? Kg() : e === "it" ? $g() : e === "jp" ? Rg() : e === "pl" ? Zg() : e === "ru" ? Hg() : e === "uk" ? Vg() : Fg()
  },
  Og = () => "Inappropriate content",
  Jg = () => "Conteúdo inapropriado",
  Wg = () => "不当内容",
  Qg = () => "Unangemessene Inhalte",
  Xg = () => "Contenido inapropiado",
  Yg = () => "Contenu inapproprié",
  ep = () => "Contenuto inappropriato",
  rp = () => "不適切なコンテンツ",
  np = () => "Nieodpowiednie treści",
  tp = () => "Неприемлемый контент",
  ip = () => "Неприйнятний вміст",
  op = () => "Nội dung không phù hợp",
  Qd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Og() : e === "pt" ? Jg() : e === "ch" ? Wg() : e === "de" ? Qg() : e === "es" ? Xg() : e === "fr" ? Yg() : e === "it" ? ep() : e === "jp" ? rp() : e === "pl" ? np() : e === "ru" ? tp() : e === "uk" ? ip() : op()
  },
  up = () => "Map cleanup",
  sp = () => "Limpeza do mapa",
  ap = () => "地图清理",
  _p = () => "Kartenbereinigung",
  cp = () => "Limpieza del mapa",
  lp = () => "Nettoyage de la carte",
  gp = () => "Pulizia della mappa",
  pp = () => "マップの清掃",
  dp = () => "Sprzątanie mapy",
  fp = () => "Очистка карты",
  mp = () => "Очищення карти",
  hp = () => "Dọn dẹp bản đồ",
  Xd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? up() : e === "pt" ? sp() : e === "ch" ? ap() : e === "de" ? _p() : e === "es" ? cp() : e === "fr" ? lp() : e === "it" ? gp() : e === "jp" ? pp() : e === "pl" ? dp() : e === "ru" ? fp() : e === "uk" ? mp() : hp()
  },
  vp = () => "Multi-accounts & bots",
  bp = () => "Múltiplas contas e bots",
  kp = () => "多账号与机器人",
  zp = () => "Multi-Accounts & Bots",
  wp = () => "Multi-cuentas y bots",
  xp = () => "Multi-comptes et bots",
  yp = () => "Multi-account e bot",
  jp = () => "複数アカウント＆ボット",
  Cp = () => "Multi-konta i boty",
  Dp = () => "Мультиаккаунты и боты",
  Sp = () => "Мультиакаунти та боти",
  qp = () => "Nhiều tài khoản & bot",
  Yd = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? vp() : e === "pt" ? bp() : e === "ch" ? kp() : e === "de" ? zp() : e === "es" ? wp() : e === "fr" ? xp() : e === "it" ? yp() : e === "jp" ? jp() : e === "pl" ? Cp() : e === "ru" ? Dp() : e === "uk" ? Sp() : qp()
  },
  Gp = () => "Territorial disputes",
  Ip = () => "Disputas territoriais",
  Up = () => "领地争夺",
  Pp = () => "Gebietskonflikte",
  Np = () => "Disputas territoriales",
  Ap = () => "Disputes territoriales",
  Ep = () => "Dispute territoriali",
  Tp = () => "領土紛争",
  Bp = () => "Spory terytorialne",
  Lp = () => "Территориальные споры",
  Mp = () => "Територіальні спори",
  Kp = () => "Tranh chấp lãnh thổ",
  ef = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Gp() : e === "pt" ? Ip() : e === "ch" ? Up() : e === "de" ? Pp() : e === "es" ? Np() : e === "fr" ? Ap() : e === "it" ? Ep() : e === "jp" ? Tp() : e === "pl" ? Bp() : e === "ru" ? Lp() : e === "uk" ? Mp() : Kp()
  };
export {
  Qd as $, Ad as A, Td as B, Pd as C, Ed as D, Cd as E, Dd as F, Qp as G, Yp as H, ad as I, hd as J, md as K, _d as L, cd as M, yd as N, dd as O, pd as P, gd as Q, xd as R, jd as S, qd as T, id as U, td as V, ud as W, Gd as X, Sd as Y, Kd as Z, Zd as _, Wp as a, $d as a0, Rd as a1, Wd as a2, Vd as a3, Yd as a4, Jd as a5, Md as a6, Fd as a7, ef as a8, Hd as a9, Xd as aa, Od as ab, Rp as b, Vp as c, Jp as d, Hp as e, Zp as f, Op as g, Fp as h, vd as i, kd as j, fd as k, od as l, sd as m, ld as n, wd as o, bd as p, rd as q, Ld as r, zd as s, nd as t, Id as u, Ud as v, ed as w, Xp as x, Nd as y, Bd as z
};