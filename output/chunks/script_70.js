import {
  g as t
} from "./DwxruM8H.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "c68723346dc53cede4c33166e0b3070fd4fa2ccb"
    };
    var r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "d5a42a83-c8c6-4d50-85f4-d01435598983", n._sentryDebugIdIdentifier = "sentry-dbid-d5a42a83-c8c6-4d50-85f4-d01435598983")
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
  af = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? i() : e === "pt" ? o() : e === "ch" ? u() : e === "de" ? s() : e === "es" ? a() : e === "fr" ? _() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? g() : e === "ru" ? p() : e === "uk" ? d() : f()
  },
  m = () => "Hide",
  h = () => "Ocultar",
  v = () => "隐藏",
  b = () => "Ausblenden",
  k = () => "Ocultar",
  x = () => "Masquer",
  z = () => "Nascondi",
  w = () => "非表示",
  y = () => "Ukryj",
  j = () => "Скрыть",
  D = () => "Сховати",
  C = () => "Ẩn",
  _f = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? m() : e === "pt" ? h() : e === "ch" ? v() : e === "de" ? b() : e === "es" ? k() : e === "fr" ? x() : e === "it" ? z() : e === "jp" ? w() : e === "pl" ? y() : e === "ru" ? j() : e === "uk" ? D() : C()
  },
  S = () => "Hide sensitive content",
  q = () => "Ocultar conteúdo sensível",
  I = () => "隐藏敏感内容",
  G = () => "Sensiblen Inhalt ausblenden",
  U = () => "Ocultar contenido sensible",
  P = () => "Masquer le contenu sensible",
  N = () => "Nascondi contenuto sensibile",
  E = () => "センシティブなコンテンツを非表示",
  T = () => "Ukryj wrażliwą treść",
  A = () => "Скрыть чувствительный контент",
  B = () => "Сховати чутливий вміст",
  M = () => "Ẩn nội dung nhạy cảm",
  cf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? S() : e === "pt" ? q() : e === "ch" ? I() : e === "de" ? G() : e === "es" ? U() : e === "fr" ? P() : e === "it" ? N() : e === "jp" ? E() : e === "pl" ? T() : e === "ru" ? A() : e === "uk" ? B() : M()
  },
  L = () => "Image carousel",
  R = () => "Carrossel de imagens",
  K = () => "图片轮播",
  $ = () => "Bilderkarussell",
  H = () => "Carrusel de imágenes",
  Z = () => "Carrousel d'images",
  V = () => "Carosello di immagini",
  F = () => "画像カルーセル",
  O = () => "Karuzela obrazów",
  J = () => "Карусель изображений",
  W = () => "Карусель зображень",
  Q = () => "Băng chuyền hình ảnh",
  lf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? L() : e === "pt" ? R() : e === "ch" ? K() : e === "de" ? $() : e === "es" ? H() : e === "fr" ? Z() : e === "it" ? V() : e === "jp" ? F() : e === "pl" ? O() : e === "ru" ? J() : e === "uk" ? W() : Q()
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
  gf = (n, r = {}) => {
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
  xe = () => "Tiếp",
  pf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ce() : e === "pt" ? le() : e === "ch" ? ge() : e === "de" ? pe() : e === "es" ? de() : e === "fr" ? fe() : e === "it" ? me() : e === "jp" ? he() : e === "pl" ? ve() : e === "ru" ? be() : e === "uk" ? ke() : xe()
  },
  ze = () => "Previous",
  we = () => "Anterior",
  ye = () => "上一张",
  je = () => "Zurück",
  De = () => "Anterior",
  Ce = () => "Précédent",
  Se = () => "Precedente",
  qe = () => "前へ",
  Ie = () => "Poprzedni",
  Ge = () => "Назад",
  Ue = () => "Назад",
  Pe = () => "Trước",
  df = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ze() : e === "pt" ? we() : e === "ch" ? ye() : e === "de" ? je() : e === "es" ? De() : e === "fr" ? Ce() : e === "it" ? Se() : e === "jp" ? qe() : e === "pl" ? Ie() : e === "ru" ? Ge() : e === "uk" ? Ue() : Pe()
  },
  Ne = () => "Sensitive image",
  Ee = () => "Imagem sensível",
  Te = () => "敏感图片",
  Ae = () => "Sensibles Bild",
  Be = () => "Imagen sensible",
  Me = () => "Image sensible",
  Le = () => "Immagine sensibile",
  Re = () => "センシティブな画像",
  Ke = () => "Wrażliwy obraz",
  $e = () => "Чувствительное изображение",
  He = () => "Чутливе зображення",
  Ze = () => "Hình ảnh nhạy cảm",
  ff = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ne() : e === "pt" ? Ee() : e === "ch" ? Te() : e === "de" ? Ae() : e === "es" ? Be() : e === "fr" ? Me() : e === "it" ? Le() : e === "jp" ? Re() : e === "pl" ? Ke() : e === "ru" ? $e() : e === "uk" ? He() : Ze()
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
  mf = (n = {}, r = {}) => {
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
  hf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ir() : e === "pt" ? or() : e === "ch" ? ur() : e === "de" ? sr() : e === "es" ? ar() : e === "fr" ? _r() : e === "it" ? cr() : e === "jp" ? lr() : e === "pl" ? gr() : e === "ru" ? pr() : e === "uk" ? dr() : fr()
  },
  mr = () => "Community cleanup",
  hr = () => "Limpeza pela comunidade",
  vr = () => "社区清理",
  br = () => "Community-Bereinigung",
  kr = () => "Limpieza comunitaria",
  xr = () => "Nettoyage communautaire",
  zr = () => "Pulizia della community",
  wr = () => "コミュニティによる清掃",
  yr = () => "Sprzątanie przez społeczność",
  jr = () => "Очистка сообществом",
  Dr = () => "Очищення спільнотою",
  Cr = () => "Cộng đồng dọn dẹp",
  vf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? mr() : e === "pt" ? hr() : e === "ch" ? vr() : e === "de" ? br() : e === "es" ? kr() : e === "fr" ? xr() : e === "it" ? zr() : e === "jp" ? wr() : e === "pl" ? yr() : e === "ru" ? jr() : e === "uk" ? Dr() : Cr()
  },
  Sr = () => "Permanent Ban",
  qr = () => "Banimento Permanente",
  Ir = () => "永久封禁",
  Gr = () => "Permanenter Bann",
  Ur = () => "Ban Permanente",
  Pr = () => "Bannissement permanent",
  Nr = () => "Ban permanente",
  Er = () => "永久BAN",
  Tr = () => "Permanentny ban",
  Ar = () => "Перманентный бан",
  Br = () => "Перманентний бан",
  Mr = () => "Cấm vĩnh viễn",
  bf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Sr() : e === "pt" ? qr() : e === "ch" ? Ir() : e === "de" ? Gr() : e === "es" ? Ur() : e === "fr" ? Pr() : e === "it" ? Nr() : e === "jp" ? Er() : e === "pl" ? Tr() : e === "ru" ? Ar() : e === "uk" ? Br() : Mr()
  },
  Lr = () => "Timeout",
  Rr = () => "Suspensão",
  Kr = () => "禁言",
  $r = () => "Sperre",
  Hr = () => "Suspensión",
  Zr = () => "Suspension",
  Vr = () => "Sospensione",
  Fr = () => "一時停止",
  Or = () => "Zawieszenie",
  Jr = () => "Тайм-аут",
  Wr = () => "Тайм-аут",
  Qr = () => "Tạm khóa",
  kf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Lr() : e === "pt" ? Rr() : e === "ch" ? Kr() : e === "de" ? $r() : e === "es" ? Hr() : e === "fr" ? Zr() : e === "it" ? Vr() : e === "jp" ? Fr() : e === "pl" ? Or() : e === "ru" ? Jr() : e === "uk" ? Wr() : Qr()
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
  xf = (n = {}, r = {}) => {
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
  xn = () => "Створення нового малюнка поверх прапора",
  zn = () => "Vẽ tác phẩm mới đè lên cờ",
  zf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ln() : e === "pt" ? gn() : e === "ch" ? pn() : e === "de" ? dn() : e === "es" ? fn() : e === "fr" ? mn() : e === "it" ? hn() : e === "jp" ? vn() : e === "pl" ? bn() : e === "ru" ? kn() : e === "uk" ? xn() : zn()
  },
  wn = () => "Doxxing - leaking private personal information",
  yn = () => "Doxxing - vazamento de informações pessoais privadas",
  jn = () => "人肉搜索——泄露私人个人信息",
  Dn = () => "Doxxing – Veröffentlichung privater persönlicher Informationen",
  Cn = () => "Doxxing - filtrar información personal privada",
  Sn = () => "Doxxing - divulgation d'informations personnelles privées",
  qn = () => "Doxxing - divulgazione di informazioni personali private",
  In = () => "ドキシング - 個人情報の漏洩",
  Gn = () => "Doxxing — ujawnianie prywatnych danych osobowych",
  Un = () => "Доксинг — утечка личной информации",
  Pn = () => "Доксинг — витік приватної особистої інформації",
  Nn = () => "Doxxing - tiết lộ thông tin cá nhân riêng tư",
  wf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? wn() : e === "pt" ? yn() : e === "ch" ? jn() : e === "de" ? Dn() : e === "es" ? Cn() : e === "fr" ? Sn() : e === "it" ? qn() : e === "jp" ? In() : e === "pl" ? Gn() : e === "ru" ? Un() : e === "uk" ? Pn() : Nn()
  },
  En = () => "Drawing over another drawing",
  Tn = () => "Desenhar por cima de outro desenho",
  An = () => "在另一幅画作上绘画",
  Bn = () => "Eine Zeichnung über eine andere zeichnen",
  Mn = () => "Dibujar sobre otro dibujo",
  Ln = () => "Dessiner par-dessus un autre dessin",
  Rn = () => "Disegnare sopra un altro disegno",
  Kn = () => "別の描画の上に描く",
  $n = () => "Zamalowywanie jednego rysunku innym",
  Hn = () => "Рисование поверх другого рисунка",
  Zn = () => "Малювання поверх іншого малюнка",
  Vn = () => "Vẽ đè lên bức vẽ khác",
  yf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? En() : e === "pt" ? Tn() : e === "ch" ? An() : e === "de" ? Bn() : e === "es" ? Mn() : e === "fr" ? Ln() : e === "it" ? Rn() : e === "jp" ? Kn() : e === "pl" ? $n() : e === "ru" ? Hn() : e === "uk" ? Zn() : Vn()
  },
  Fn = () => "Drawing over existing artwork with no creative intent",
  On = () => "Desenhar por cima de artes existentes sem intenção criativa",
  Jn = () => "毫无创意目的地覆盖现有作品",
  Wn = () => "Übermalen bestehender Kunstwerke ohne kreative Absicht",
  Qn = () => "Dibujar sobre obras existentes sin intención creativa",
  Xn = () => "Peindre par-dessus une œuvre existante sans intention créative",
  Yn = () => "Disegnare sopra opere esistenti senza intento creativo",
  et = () => "創造的な意図なく既存の作品の上に描く",
  rt = () => "Zamalowywanie istniejącej grafiki bez intencji twórczej",
  nt = () => "Рисование поверх существующего рисунка без творческого намерения",
  tt = () => "Малювання поверх існуючого малюнка без творчого наміру",
  it = () => "Tô đè lên tác phẩm hiện có mà không có ý sáng tạo",
  jf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Fn() : e === "pt" ? On() : e === "ch" ? Jn() : e === "de" ? Wn() : e === "es" ? Qn() : e === "fr" ? Xn() : e === "it" ? Yn() : e === "jp" ? et() : e === "pl" ? rt() : e === "ru" ? nt() : e === "uk" ? tt() : it()
  },
  ot = () => "Drawing over a repeated pattern",
  ut = () => "Desenhar por cima de um padrão repetitivo",
  st = () => "在重复图案上绘画",
  at = () => "Über ein wiederholendes Muster zeichnen",
  _t = () => "Dibujar sobre un patrón repetido",
  ct = () => "Dessiner par-dessus un motif répétitif",
  lt = () => "Disegnare sopra un pattern ripetuto",
  gt = () => "繰り返しパターンの上に描く",
  pt = () => "Zamalowywanie powtarzalnego wzoru",
  dt = () => "Рисование поверх повторяющегося узора",
  ft = () => "Малювання поверх повторюваного візерунка",
  mt = () => "Vẽ đè lên mẫu lặp lại",
  Df = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ot() : e === "pt" ? ut() : e === "ch" ? st() : e === "de" ? at() : e === "es" ? _t() : e === "fr" ? ct() : e === "it" ? lt() : e === "jp" ? gt() : e === "pl" ? pt() : e === "ru" ? dt() : e === "uk" ? ft() : mt()
  },
  ht = () => "Drawings featuring explicit sexual content",
  vt = () => "Desenhos com conteúdo sexual explícito",
  bt = () => "包含露骨色情内容的绘画",
  kt = () => "Zeichnungen mit explizit sexuellen Inhalten",
  xt = () => "Dibujos con contenido sexual explícito",
  zt = () => "Dessins comportant du contenu sexuel explicite",
  wt = () => "Disegni con contenuto sessuale esplicito",
  yt = () => "露骨な性的コンテンツを含む描画",
  jt = () => "Rysunki przedstawiające jednoznaczne treści seksualne",
  Dt = () => "Рисунки с откровенным сексуальным содержанием",
  Ct = () => "Малюнки з відверто сексуальним контентом",
  St = () => "Các bức vẽ có nội dung tình dục rõ ràng",
  Cf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ht() : e === "pt" ? vt() : e === "ch" ? bt() : e === "de" ? kt() : e === "es" ? xt() : e === "fr" ? zt() : e === "it" ? wt() : e === "jp" ? yt() : e === "pl" ? jt() : e === "ru" ? Dt() : e === "uk" ? Ct() : St()
  },
  qt = () => "Extreme hostility toward others",
  It = () => "Hostilidade extrema contra outros",
  Gt = () => "对他人的极端敌意",
  Ut = () => "Extreme Feindseligkeit gegenüber anderen",
  Pt = () => "Hostilidad extrema hacia otros",
  Nt = () => "Hostilité extrême envers autrui",
  Et = () => "Ostilità estrema verso gli altri",
  Tt = () => "他者に対する極端な敵意",
  At = () => "Skrajna wrogość wobec innych",
  Bt = () => "Крайняя враждебность по отношению к другим",
  Mt = () => "Екстремальна ворожість щодо інших",
  Lt = () => "Thái độ thù địch cực đoan với người khác",
  Sf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? qt() : e === "pt" ? It() : e === "ch" ? Gt() : e === "de" ? Ut() : e === "es" ? Pt() : e === "fr" ? Nt() : e === "it" ? Et() : e === "jp" ? Tt() : e === "pl" ? At() : e === "ru" ? Bt() : e === "uk" ? Mt() : Lt()
  },
  Rt = () => "Drawing a flag over other artworks",
  Kt = () => "Desenhar uma bandeira por cima de outras artes",
  $t = () => "在其他作品上绘制旗帜",
  Ht = () => "Eine Flagge über andere Kunstwerke zeichnen",
  Zt = () => "Dibujar una bandera sobre las obras de otros",
  Vt = () => "Dessiner un drapeau par-dessus d'autres œuvres",
  Ft = () => "Disegnare una bandiera sopra altre opere",
  Ot = () => "他の作品の上に旗を描く",
  Jt = () => "Rysowanie flagi na cudzych grafikach",
  Wt = () => "Рисование флага поверх чужих рисунков",
  Qt = () => "Малювання прапора поверх чужих малюнків",
  Xt = () => "Vẽ cờ đè lên tác phẩm của người khác",
  qf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Rt() : e === "pt" ? Kt() : e === "ch" ? $t() : e === "de" ? Ht() : e === "es" ? Zt() : e === "fr" ? Vt() : e === "it" ? Ft() : e === "jp" ? Ot() : e === "pl" ? Jt() : e === "ru" ? Wt() : e === "uk" ? Qt() : Xt()
  },
  Yt = () => "Drawings made with the intent to depict graphic gore",
  ei = () => "Desenhos feitos com a intenção de retratar gore gráfico",
  ri = () => "以描绘血腥内容为目的的绘画",
  ni = () => "Zeichnungen mit der Absicht, grafischen Gore darzustellen",
  ti = () => "Dibujos hechos con la intención de representar gore gráfico",
  ii = () => "Dessins réalisés dans le but de représenter du gore graphique",
  oi = () => "Disegni realizzati con l'intento di rappresentare gore grafico",
  ui = () => "グロテスクな表現を目的とした描画",
  si = () => "Rysunki stworzone z zamiarem przedstawienia drastycznego gore",
  ai = () => "Рисунки с намерением изобразить графическую жестокость",
  _i = () => "Малюнки, створені з метою зображення жорстокого насильства",
  ci = () => "Các bức vẽ có mục đích mô tả bạo lực đẫm máu",
  If = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Yt() : e === "pt" ? ei() : e === "ch" ? ri() : e === "de" ? ni() : e === "es" ? ti() : e === "fr" ? ii() : e === "it" ? oi() : e === "jp" ? ui() : e === "pl" ? si() : e === "ru" ? ai() : e === "uk" ? _i() : ci()
  },
  li = () => "Highly Suggestive Content",
  gi = () => "Conteúdo Altamente Sugestivo",
  pi = () => "高度暗示性内容",
  di = () => "Stark anzügliche Inhalte",
  fi = () => "Contenido Altamente Sugerente",
  mi = () => "Contenu hautement suggestif",
  hi = () => "Contenuto fortemente allusivo",
  vi = () => "非常に性的示唆の強いコンテンツ",
  bi = () => "Mocno sugestywne treści",
  ki = () => "Крайне откровенный контент",
  xi = () => "Дуже відвертий контент",
  zi = () => "Nội dung khiêu gợi mạnh",
  Gf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? li() : e === "pt" ? gi() : e === "ch" ? pi() : e === "de" ? di() : e === "es" ? fi() : e === "fr" ? mi() : e === "it" ? hi() : e === "jp" ? vi() : e === "pl" ? bi() : e === "ru" ? ki() : e === "uk" ? xi() : zi()
  },
  wi = () => "Mild Gore Content",
  yi = () => "Conteúdo de Gore Leve",
  ji = () => "轻度血腥内容",
  Di = () => "Leichte Gore-Inhalte",
  Ci = () => "Contenido de Gore Leve",
  Si = () => "Contenu gore modéré",
  qi = () => "Contenuto gore lieve",
  Ii = () => "軽度のグロテスクコンテンツ",
  Gi = () => "Łagodne treści gore",
  Ui = () => "Умеренно жестокий контент",
  Pi = () => "Помірно жорстокий контент",
  Ni = () => "Nội dung bạo lực nhẹ",
  Uf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? wi() : e === "pt" ? yi() : e === "ch" ? ji() : e === "de" ? Di() : e === "es" ? Ci() : e === "fr" ? Si() : e === "it" ? qi() : e === "jp" ? Ii() : e === "pl" ? Gi() : e === "ru" ? Ui() : e === "uk" ? Pi() : Ni()
  },
  Ei = () => "Non-explicit suggestive content",
  Ti = () => "Conteúdo sugestivo não explícito",
  Ai = () => "非露骨暗示性内容",
  Bi = () => "Nicht-explizite anzügliche Inhalte",
  Mi = () => "Contenido sugerente no explícito",
  Li = () => "Contenu suggestif non explicite",
  Ri = () => "Contenuto allusivo non esplicito",
  Ki = () => "露骨でない性的示唆のあるコンテンツ",
  $i = () => "Niejednoznaczne treści sugestywne",
  Hi = () => "Неоткровенный пикантный контент",
  Zi = () => "Невідвертий контент з підтекстом",
  Vi = () => "Nội dung khiêu gợi không rõ ràng",
  Pf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ei() : e === "pt" ? Ti() : e === "ch" ? Ai() : e === "de" ? Bi() : e === "es" ? Mi() : e === "fr" ? Li() : e === "it" ? Ri() : e === "jp" ? Ki() : e === "pl" ? $i() : e === "ru" ? Hi() : e === "uk" ? Zi() : Vi()
  },
  Fi = () => "Drawing repeated pattern over other artworks",
  Oi = () => "Desenhar padrão repetitivo por cima de outras artes",
  Ji = () => "在其他作品上绘制重复图案",
  Wi = () => "Wiederholendes Muster über andere Kunstwerke zeichnen",
  Qi = () => "Dibujar un patrón repetido sobre las obras de otros",
  Xi = () => "Dessiner un motif répétitif par-dessus d'autres œuvres",
  Yi = () => "Disegnare un pattern ripetuto sopra altre opere",
  eo = () => "他の作品の上に繰り返しパターンを描く",
  ro = () => "Rysowanie powtarzalnego wzoru na cudzych grafikach",
  no = () => "Рисование повторяющегося узора поверх чужих рисунков",
  to = () => "Малювання повторюваного візерунка поверх чужих малюнків",
  io = () => "Vẽ mẫu lặp lại đè lên tác phẩm của người khác",
  Nf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Fi() : e === "pt" ? Oi() : e === "ch" ? Ji() : e === "de" ? Wi() : e === "es" ? Qi() : e === "fr" ? Xi() : e === "it" ? Yi() : e === "jp" ? eo() : e === "pl" ? ro() : e === "ru" ? no() : e === "uk" ? to() : io()
  },
  oo = () => "Using transparent pixels over repetitive flags",
  uo = () => "Usar pixels transparentes sobre bandeiras repetitivas",
  so = () => "使用透明像素覆盖重复的旗帜",
  ao = () => "Transparente Pixel über sich wiederholende Flaggen verwenden",
  _o = () => "Usar píxeles transparentes sobre banderas repetitivas",
  co = () => "Utilisation de pixels transparents sur les drapeaux répétitifs",
  lo = () => "Usare pixel trasparenti sopra bandiere ripetitive",
  go = () => "繰り返される旗の上に透明ピクセルを使用",
  po = () => "Używanie przezroczystych pikseli na powtarzalnych flagach",
  fo = () => "Использование прозрачных пикселей поверх повторяющихся флагов",
  mo = () => "Використання прозорих пікселів поверх повторюваних прапорів",
  ho = () => "Sử dụng pixel trong suốt đè lên cờ lặp lại",
  Ef = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? oo() : e === "pt" ? uo() : e === "ch" ? so() : e === "de" ? ao() : e === "es" ? _o() : e === "fr" ? co() : e === "it" ? lo() : e === "jp" ? go() : e === "pl" ? po() : e === "ru" ? fo() : e === "uk" ? mo() : ho()
  },
  vo = () => "Using transparent pixels to remove inappropriate content",
  bo = () => "Usar pixels transparentes para remover conteúdo inapropriado",
  ko = () => "使用透明像素移除不当内容",
  xo = () => "Transparente Pixel zum Entfernen unangemessener Inhalte verwenden",
  zo = () => "Usar píxeles transparentes para eliminar contenido inapropiado",
  wo = () => "Utilisation de pixels transparents pour supprimer le contenu inapproprié",
  yo = () => "Usare pixel trasparenti per rimuovere contenuti inappropriati",
  jo = () => "透明ピクセルを使って不適切なコンテンツを除去",
  Do = () => "Używanie przezroczystych pikseli do usuwania nieodpowiednich treści",
  Co = () => "Использование прозрачных пикселей для удаления неприемлемого контента",
  So = () => "Використання прозорих пікселів для видалення неприйнятного контенту",
  qo = () => "Sử dụng pixel trong suốt để xóa nội dung không phù hợp",
  Tf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? vo() : e === "pt" ? bo() : e === "ch" ? ko() : e === "de" ? xo() : e === "es" ? zo() : e === "fr" ? wo() : e === "it" ? yo() : e === "jp" ? jo() : e === "pl" ? Do() : e === "ru" ? Co() : e === "uk" ? So() : qo()
  },
  Io = () => "Using transparent pixels to remove repetitive patterns",
  Go = () => "Usar pixels transparentes para remover padrões repetitivos",
  Uo = () => "使用透明像素移除重复图案",
  Po = () => "Transparente Pixel zum Entfernen sich wiederholender Muster verwenden",
  No = () => "Usar píxeles transparentes para eliminar patrones repetitivos",
  Eo = () => "Utilisation de pixels transparents pour supprimer les motifs répétitifs",
  To = () => "Usare pixel trasparenti per rimuovere pattern ripetitivi",
  Ao = () => "透明ピクセルを使って繰り返しパターンを除去",
  Bo = () => "Używanie przezroczystych pikseli do usuwania powtarzalnych wzorów",
  Mo = () => "Использование прозрачных пикселей для удаления повторяющихся узоров",
  Lo = () => "Використання прозорих пікселів для видалення повторюваних візерунків",
  Ro = () => "Sử dụng pixel trong suốt để xóa mẫu lặp lại",
  Af = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Io() : e === "pt" ? Go() : e === "ch" ? Uo() : e === "de" ? Po() : e === "es" ? No() : e === "fr" ? Eo() : e === "it" ? To() : e === "jp" ? Ao() : e === "pl" ? Bo() : e === "ru" ? Mo() : e === "uk" ? Lo() : Ro()
  },
  Ko = () => "Scribbling over other people's artwork",
  $o = () => "Rabiscar por cima da arte de outras pessoas",
  Ho = () => "在他人作品上乱涂乱画",
  Zo = () => "Kritzeln über Kunstwerke anderer",
  Vo = () => "Garabatear sobre las obras de otros",
  Fo = () => "Gribouiller sur les œuvres des autres",
  Oo = () => "Scarabocchiare sopra le opere degli altri",
  Jo = () => "他人の作品への落書き",
  Wo = () => "Bazgranie po cudzych grafikach",
  Qo = () => "Черкание поверх чужих рисунков",
  Xo = () => "Замальовування чужих малюнків",
  Yo = () => "Vẽ bậy lên tác phẩm của người khác",
  Bf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ko() : e === "pt" ? $o() : e === "ch" ? Ho() : e === "de" ? Zo() : e === "es" ? Vo() : e === "fr" ? Fo() : e === "it" ? Oo() : e === "jp" ? Jo() : e === "pl" ? Wo() : e === "ru" ? Qo() : e === "uk" ? Xo() : Yo()
  },
  eu = () => "Sexualization of character with clear child-like visual traits",
  ru = () => "Sexualização de personagem com traços visuais claramente infantis",
  nu = () => "对具有明显儿童外观特征的角色的色情化",
  tu = () => "Sexualisierung von Charakteren mit eindeutig kindlichen visuellen Merkmalen",
  iu = () => "Sexualización de personajes con rasgos visuales claramente infantiles",
  ou = () => "Sexualisation de personnages ayant des traits visuels clairement enfantins",
  uu = () => "Sessualizzazione di personaggi con chiari tratti visivi infantili",
  su = () => "明らかに子供のような外見を持つキャラクターの性的描写",
  au = () => "Seksualizacja postaci o wyraźnie dziecięcych cechach wizualnych",
  _u = () => "Сексуализация персонажей с явными детскими чертами",
  cu = () => "Сексуалізація персонажів з явно дитячими візуальними рисами",
  lu = () => "Tình dục hóa nhân vật có đặc điểm ngoại hình trẻ em rõ ràng",
  Mf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? eu() : e === "pt" ? ru() : e === "ch" ? nu() : e === "de" ? tu() : e === "es" ? iu() : e === "fr" ? ou() : e === "it" ? uu() : e === "jp" ? su() : e === "pl" ? au() : e === "ru" ? _u() : e === "uk" ? cu() : lu()
  },
  gu = () => "Sexualized images of characters that appear to be minors",
  pu = () => "Imagens sexualizadas de personagens que aparentam ser menores",
  du = () => "看起来像未成年人的角色的色情化图片",
  fu = () => "Sexualisierte Darstellungen von Charakteren, die minderjährig erscheinen",
  mu = () => "Imágenes sexualizadas de personajes que aparentan ser menores",
  hu = () => "Images sexualisées de personnages qui semblent être mineurs",
  vu = () => "Immagini sessualizzate di personaggi che appaiono minorenni",
  bu = () => "未成年に見えるキャラクターの性的画像",
  ku = () => "Seksualizowane obrazy postaci wyglądających na nieletnich",
  xu = () => "Сексуализированные изображения персонажей, выглядящих как несовершеннолетние",
  zu = () => "Сексуалізовані зображення персонажів, що виглядають як неповнолітні",
  wu = () => "Hình ảnh tình dục hóa các nhân vật có vẻ ngoài trẻ vị thành niên",
  Lf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? gu() : e === "pt" ? pu() : e === "ch" ? du() : e === "de" ? fu() : e === "es" ? mu() : e === "fr" ? hu() : e === "it" ? vu() : e === "jp" ? bu() : e === "pl" ? ku() : e === "ru" ? xu() : e === "uk" ? zu() : wu()
  },
  yu = () => "Suggestive fetishist Content",
  ju = () => "Conteúdo sugestivo fetichista",
  Du = () => "暗示性恋物内容",
  Cu = () => "Anzügliche fetischistische Inhalte",
  Su = () => "Contenido sugerente fetichista",
  qu = () => "Contenu suggestif fétichiste",
  Iu = () => "Contenuto allusivo feticista",
  Gu = () => "性的示唆のあるフェティッシュコンテンツ",
  Uu = () => "Sugestywne treści fetyszystyczne",
  Pu = () => "Откровенный фетишистский контент",
  Nu = () => "Відвертий фетишистський контент",
  Eu = () => "Nội dung khiêu gợi theo hướng tôn sùng",
  Rf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? yu() : e === "pt" ? ju() : e === "ch" ? Du() : e === "de" ? Cu() : e === "es" ? Su() : e === "fr" ? qu() : e === "it" ? Iu() : e === "jp" ? Gu() : e === "pl" ? Uu() : e === "ru" ? Pu() : e === "uk" ? Nu() : Eu()
  },
  Tu = () => "Swastika Drawing",
  Au = () => "Desenho de suástica",
  Bu = () => "纳粹标志绘画",
  Mu = () => "Hakenkreuz-Zeichnung",
  Lu = () => "Dibujo de esvástica",
  Ru = () => "Dessin de croix gammée",
  Ku = () => "Disegno di svastica",
  $u = () => "鉤十字の描画",
  Hu = () => "Rysunek swastyki",
  Zu = () => "Рисунок свастики",
  Vu = () => "Малюнок свастики",
  Fu = () => "Hình vẽ chữ vạn",
  Kf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Tu() : e === "pt" ? Au() : e === "ch" ? Bu() : e === "de" ? Mu() : e === "es" ? Lu() : e === "fr" ? Ru() : e === "it" ? Ku() : e === "jp" ? $u() : e === "pl" ? Hu() : e === "ru" ? Zu() : e === "uk" ? Vu() : Fu()
  },
  Ou = () => "Clear griefing",
  Ju = () => "Griefing evidente",
  Wu = () => "明确的恶意破坏",
  Qu = () => "Eindeutiges Griefing",
  Xu = () => "Griefing evidente",
  Yu = () => "Griefing manifeste",
  es = () => "Griefing evidente",
  rs = () => "明確なグリーフィング",
  ns = () => "Oczywisty griefing",
  ts = () => "Явное гриферство",
  is = () => "Явний грифінг",
  os = () => "Griefing rõ ràng",
  $f = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ou() : e === "pt" ? Ju() : e === "ch" ? Wu() : e === "de" ? Qu() : e === "es" ? Xu() : e === "fr" ? Yu() : e === "it" ? es() : e === "jp" ? rs() : e === "pl" ? ns() : e === "ru" ? ts() : e === "uk" ? is() : os()
  },
  us = () => "Cases of clear griefing (such as scribbling over someone's artwork with no creative intent, or deliberately disrupting it by placing random pixels) are <strong>subject to moderation intervention</strong>.",
  ss = () => "Casos de griefing evidente (como rabiscar por cima da arte de alguém sem intenção criativa, ou interrompê-la deliberadamente colocando pixels aleatórios) estão <strong>sujeitos a intervenção da moderação</strong>.",
  as = () => "明确的恶意破坏行为（例如毫无创意目的地在他人作品上乱涂，或故意放置随机像素进行破坏）将<strong>受到管理介入</strong>。",
  _s = () => "Fälle von eindeutigem Griefing (wie z. B. Kritzeln über Kunstwerke anderer ohne kreative Absicht oder das absichtliche Stören durch Platzieren zufälliger Pixel) <strong>unterliegen moderativen Maßnahmen</strong>.",
  cs = () => "Los casos de griefing evidente (como garabatear sobre la obra de alguien sin intención creativa, o alterarla deliberadamente colocando píxeles aleatorios) están <strong>sujetos a intervención de moderación</strong>.",
  ls = () => "Les cas de griefing manifeste (comme gribouiller sur l'œuvre de quelqu'un sans intention créative, ou la perturber délibérément en plaçant des pixels aléatoires) sont <strong>soumis à une intervention de la modération</strong>.",
  gs = () => "I casi di griefing evidente (come scarabocchiare sopra l'opera di qualcuno senza intento creativo, o disturbarla deliberatamente piazzando pixel casuali) sono <strong>soggetti a intervento della moderazione</strong>.",
  ps = () => "明確なグリーフィング（他人の作品に創造的な意図なく落書きする、ランダムなピクセルを置いて意図的に妨害するなど）は、<strong>モデレーションの介入対象</strong>となります。",
  ds = () => "Przypadki oczywistego griefingu (takie jak bazgranie po cudzej grafice bez intencji twórczej lub celowe zakłócanie jej losowymi pikselami) <strong>podlegają interwencji moderacji</strong>.",
  fs = () => "Случаи явного гриферства (например, черкание поверх чьего-то рисунка без творческого намерения или намеренное его разрушение случайными пикселями) <strong>подлежат модераторскому вмешательству</strong>.",
  ms = () => "Випадки явного грифінгу (такі як замальовування чужого малюнка без творчого наміру або навмисне порушення за допомогою випадкових пікселів) <strong>підлягають модераторському втручанню</strong>.",
  hs = () => "Các trường hợp griefing rõ ràng (như vẽ bậy lên tác phẩm của người khác mà không có ý sáng tạo, hoặc cố tình phá hoại bằng cách đặt pixel ngẫu nhiên) <strong>sẽ bị can thiệp kiểm duyệt</strong>.",
  Hf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? us() : e === "pt" ? ss() : e === "ch" ? as() : e === "de" ? _s() : e === "es" ? cs() : e === "fr" ? ls() : e === "it" ? gs() : e === "jp" ? ps() : e === "pl" ? ds() : e === "ru" ? fs() : e === "uk" ? ms() : hs()
  },
  vs = () => "Gray area",
  bs = () => "Área cinzenta",
  ks = () => "灰色地带",
  xs = () => "Grauzone",
  zs = () => "Zona gris",
  ws = () => "Zone grise",
  ys = () => "Zona grigia",
  js = () => "グレーゾーン",
  Ds = () => "Szara strefa",
  Cs = () => "Серая зона",
  Ss = () => "Сіра зона",
  qs = () => "Vùng xám",
  Zf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? vs() : e === "pt" ? bs() : e === "ch" ? ks() : e === "de" ? xs() : e === "es" ? zs() : e === "fr" ? ws() : e === "it" ? ys() : e === "jp" ? js() : e === "pl" ? Ds() : e === "ru" ? Cs() : e === "uk" ? Ss() : qs()
  },
  Is = () => "Actions that alter or disrupt artwork but may have <strong>multiple valid interpretations</strong>, such as territorial expansion, cleanup, or style changes. <strong>These are not automatically griefing</strong>. However, if the behavior becomes excessive, targeted, or clearly disruptive over time, moderators may intervene.",
  Gs = () => "Ações que alteram ou perturbam artes, mas que podem ter <strong>múltiplas interpretações válidas</strong>, como expansão territorial, limpeza ou mudanças de estilo. <strong>Isso não é automaticamente griefing</strong>. No entanto, se o comportamento se tornar excessivo, direcionado ou claramente prejudicial ao longo do tempo, os moderadores poderão intervir.",
  Us = () => "改变或干扰作品但可能具有<strong>多种合理解读</strong>的行为，例如领地扩张、清理或风格变更。<strong>这些不会自动被视为恶意破坏</strong>。但如果行为变得过度、有针对性或随着时间推移明显具有破坏性，管理员可能会介入。",
  Ps = () => "Aktionen, die Kunstwerke verändern oder stören, aber <strong>mehrere gültige Interpretationen</strong> haben können, wie z. B. Gebietserweiterung, Bereinigung oder Stiländerungen. <strong>Dies ist nicht automatisch Griefing</strong>. Wenn das Verhalten jedoch übermäßig, gezielt oder im Laufe der Zeit eindeutig störend wird, können Moderatoren eingreifen.",
  Ns = () => "Acciones que alteran o interrumpen obras pero pueden tener <strong>múltiples interpretaciones válidas</strong>, como expansión territorial, limpieza o cambios de estilo. <strong>Esto no es automáticamente griefing</strong>. Sin embargo, si el comportamiento se vuelve excesivo, dirigido o claramente disruptivo con el tiempo, los moderadores pueden intervenir.",
  Es = () => "Actions qui modifient ou perturbent une œuvre mais peuvent avoir <strong>plusieurs interprétations valides</strong>, comme l'expansion territoriale, le nettoyage ou les changements de style. <strong>Ce n'est pas automatiquement du griefing</strong>. Cependant, si le comportement devient excessif, ciblé ou clairement perturbateur au fil du temps, les modérateurs peuvent intervenir.",
  Ts = () => "Azioni che alterano o disturbano un'opera ma possono avere <strong>molteplici interpretazioni valide</strong>, come espansione territoriale, pulizia o cambiamenti di stile. <strong>Queste non sono automaticamente griefing</strong>. Tuttavia, se il comportamento diventa eccessivo, mirato o chiaramente disturbante nel tempo, i moderatori possono intervenire.",
  As = () => "作品を変更・妨害するが、領土拡大、清掃、スタイル変更など<strong>複数の正当な解釈が可能な</strong>行為。<strong>これらは自動的にグリーフィングとはみなされません</strong>。ただし、行為が過剰になったり、特定の相手を標的にしたり、時間をかけて明らかに妨害的であったりする場合は、モデレーターが介入することがあります。",
  Bs = () => "Działania, które zmieniają lub zakłócają grafikę, ale mogą mieć <strong>wiele uzasadnionych interpretacji</strong>, takie jak ekspansja terytorialna, sprzątanie lub zmiana stylu. <strong>Nie są one automatycznie uznawane za griefing</strong>. Jednakże, jeśli zachowanie staje się nadmierne, celowe lub wyraźnie destrukcyjne z czasem, moderatorzy mogą interweniować.",
  Ms = () => "Действия, которые изменяют или нарушают рисунок, но могут иметь <strong>несколько допустимых интерпретаций</strong>, такие как территориальное расширение, очистка или смена стиля. <strong>Это автоматически не является гриферством</strong>. Однако если поведение становится чрезмерным, целенаправленным или явно деструктивным со временем, модераторы могут вмешаться.",
  Ls = () => "Дії, які змінюють або порушують малюнки, але можуть мати <strong>кілька правомірних тлумачень</strong>, такі як розширення території, очищення або зміна стилю. <strong>Це не є автоматичним грифінгом</strong>. Однак, якщо поведінка стає надмірною, цілеспрямованою або явно деструктивною з часом, модератори можуть втрутитися.",
  Rs = () => "Các hành động thay đổi hoặc phá vỡ tác phẩm nhưng có thể có <strong>nhiều cách hiểu hợp lý</strong>, chẳng hạn như mở rộng lãnh thổ, dọn dẹp hoặc thay đổi phong cách. <strong>Những hành động này không tự động được coi là griefing</strong>. Tuy nhiên, nếu hành vi trở nên quá mức, nhắm vào mục tiêu cụ thể hoặc rõ ràng gây phá hoại theo thời gian, quản trị viên có thể can thiệp.",
  Vf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Is() : e === "pt" ? Gs() : e === "ch" ? Us() : e === "de" ? Ps() : e === "es" ? Ns() : e === "fr" ? Es() : e === "it" ? Ts() : e === "jp" ? As() : e === "pl" ? Bs() : e === "ru" ? Ms() : e === "uk" ? Ls() : Rs()
  },
  Ks = () => "Griefing means taking actions on the map <strong>solely to harass or frustrate</strong> other players, with no creative, strategic, or corrective purpose.",
  $s = () => "Griefing significa realizar ações no mapa <strong>unicamente para assediar ou frustrar</strong> outros jogadores, sem nenhum propósito criativo, estratégico ou corretivo.",
  Hs = () => "恶意破坏指在地图上<strong>仅以骚扰或激怒</strong>其他玩家为目的的行为，不具有任何创意、战略或纠正目的。",
  Zs = () => "Griefing bedeutet, auf der Karte Aktionen durchzuführen, die <strong>ausschließlich dazu dienen, andere Spieler zu belästigen oder zu frustrieren</strong>, ohne kreativen, strategischen oder korrektiven Zweck.",
  Vs = () => "Griefing significa realizar acciones en el mapa <strong>únicamente para acosar o frustrar</strong> a otros jugadores, sin ningún propósito creativo, estratégico o correctivo.",
  Fs = () => "Le griefing consiste à effectuer des actions sur la carte <strong>dans le seul but de harceler ou de frustrer</strong> d'autres joueurs, sans aucun objectif créatif, stratégique ou correctif.",
  Os = () => "Griefing significa compiere azioni sulla mappa <strong>al solo scopo di molestare o frustrare</strong> gli altri giocatori, senza alcun intento creativo, strategico o correttivo.",
  Js = () => "グリーフィングとは、創造的、戦略的、または修正的な目的を持たず、<strong>他のプレイヤーを嫌がらせたり苛立たせたりすることだけを目的として</strong>マップ上で行う行為を指します。",
  Ws = () => "Griefing oznacza podejmowanie działań na mapie <strong>wyłącznie w celu nękania lub frustrowania</strong> innych graczy, bez żadnego twórczego, strategicznego ani korekcyjnego celu.",
  Qs = () => "Гриферство — это действия на карте, совершаемые <strong>исключительно с целью досадить или разозлить</strong> других игроков, без какого-либо творческого, стратегического или корректирующего намерения.",
  Xs = () => "Грифінг означає дії на карті, <strong>спрямовані виключно на те, щоб дратувати чи засмучувати</strong> інших гравців, без жодного творчого, стратегічного чи коригувального наміру.",
  Ys = () => "Griefing có nghĩa là thực hiện các hành động trên bản đồ <strong>chỉ nhằm quấy rối hoặc gây bực bội</strong> cho người chơi khác, không có mục đích sáng tạo, chiến lược hay chỉnh sửa.",
  Ff = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ks() : e === "pt" ? $s() : e === "ch" ? Hs() : e === "de" ? Zs() : e === "es" ? Vs() : e === "fr" ? Fs() : e === "it" ? Os() : e === "jp" ? Js() : e === "pl" ? Ws() : e === "ru" ? Qs() : e === "uk" ? Xs() : Ys()
  },
  ea = () => "Using transparent pixels to remove spam, repetitive patterns, inappropriate or suggestive content is allowed.",
  ra = () => "Usar pixels transparentes para remover spam, padrões repetitivos, conteúdo inapropriado ou sugestivo é permitido.",
  na = () => "使用透明像素移除垃圾内容、重复图案、不当或暗示性内容是被允许的。",
  ta = () => "Die Verwendung von transparenten Pixeln zum Entfernen von Spam, sich wiederholenden Mustern, unangemessenen oder anzüglichen Inhalten ist erlaubt.",
  ia = () => "Usar píxeles transparentes para eliminar spam, patrones repetitivos, contenido inapropiado o sugerente está permitido.",
  oa = () => "L'utilisation de pixels transparents pour supprimer le spam, les motifs répétitifs, le contenu inapproprié ou suggestif est autorisée.",
  ua = () => "Utilizzare pixel trasparenti per rimuovere spam, pattern ripetitivi, contenuti inappropriati o allusivi è consentito.",
  sa = () => "透明ピクセルを使って、スパム、繰り返しパターン、不適切または性的示唆の強いコンテンツを除去することは許可されています。",
  aa = () => "Używanie przezroczystych pikseli do usuwania spamu, powtarzalnych wzorów, nieodpowiednich lub sugestywnych treści jest dozwolone.",
  _a = () => "Использование прозрачных пикселей для удаления спама, повторяющихся узоров, неприемлемого или откровенного контента разрешено.",
  ca = () => "Використання прозорих пікселів для видалення спаму, повторюваних візерунків, неприйнятного або відвертого контенту дозволено.",
  la = () => "Sử dụng pixel trong suốt để xóa spam, mẫu lặp lại, nội dung không phù hợp hoặc khiêu gợi là được phép.",
  Of = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ea() : e === "pt" ? ra() : e === "ch" ? na() : e === "de" ? ta() : e === "es" ? ia() : e === "fr" ? oa() : e === "it" ? ua() : e === "jp" ? sa() : e === "pl" ? aa() : e === "ru" ? _a() : e === "uk" ? ca() : la()
  },
  ga = () => "Map Cleanup",
  pa = () => "Limpeza do Mapa",
  da = () => "地图清理",
  fa = () => "Kartenbereinigung",
  ma = () => "Limpieza del Mapa",
  ha = () => "Nettoyage de la carte",
  va = () => "Pulizia della mappa",
  ba = () => "マップの清掃",
  ka = () => "Sprzątanie mapy",
  xa = () => "Очистка карты",
  za = () => "Очищення карти",
  wa = () => "Dọn dẹp bản đồ",
  Jf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ga() : e === "pt" ? pa() : e === "ch" ? da() : e === "de" ? fa() : e === "es" ? ma() : e === "fr" ? ha() : e === "it" ? va() : e === "jp" ? ba() : e === "pl" ? ka() : e === "ru" ? xa() : e === "uk" ? za() : wa()
  },
  ya = () => "<strong>One account per person.</strong> Using bots, scripts, browser automation, or any exploit to gain an unfair advantage is strictly prohibited.",
  ja = () => "<strong>Uma conta por pessoa.</strong> Usar bots, scripts, automação de navegador ou qualquer exploit para obter vantagem injusta é estritamente proibido.",
  Da = () => "<strong>每人只能使用一个账号。</strong>使用机器人、脚本、浏览器自动化或任何漏洞获取不公平优势的行为严格禁止。",
  Ca = () => "<strong>Ein Konto pro Person.</strong> Die Verwendung von Bots, Skripten, Browser-Automatisierung oder sonstigen Exploits, um einen unfairen Vorteil zu erlangen, ist strengstens verboten.",
  Sa = () => "<strong>Una cuenta por persona.</strong> Usar bots, scripts, automatización de navegador o cualquier exploit para obtener una ventaja injusta está estrictamente prohibido.",
  qa = () => "<strong>Un seul compte par personne.</strong> L'utilisation de bots, de scripts, d'automatisation de navigateur ou de toute exploitation de faille pour obtenir un avantage déloyal est strictement interdite.",
  Ia = () => "<strong>Un account per persona.</strong> L'uso di bot, script, automazione del browser o qualsiasi exploit per ottenere un vantaggio sleale è severamente vietato.",
  Ga = () => "<strong>1人につき1アカウント。</strong>ボット、スクリプト、ブラウザ自動化、またはその他のエクスプロイトを使用して不当な優位を得ることは厳しく禁止されています。",
  Ua = () => "<strong>Jedno konto na osobę.</strong> Używanie botów, skryptów, automatyzacji przeglądarki lub jakichkolwiek exploitów w celu uzyskania nieuczciwej przewagi jest surowo zabronione.",
  Pa = () => "<strong>Один аккаунт на человека.</strong> Использование ботов, скриптов, автоматизации браузера или любых эксплойтов для получения нечестного преимущества строго запрещено.",
  Na = () => "<strong>Один акаунт на людину.</strong> Використання ботів, скриптів, автоматизації браузера або будь-яких експлойтів для отримання нечесної переваги суворо заборонено.",
  Ea = () => "<strong>Mỗi người một tài khoản.</strong> Sử dụng bot, script, tự động hóa trình duyệt hoặc bất kỳ lỗi khai thác nào để có lợi thế không công bằng đều bị nghiêm cấm.",
  Wf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ya() : e === "pt" ? ja() : e === "ch" ? Da() : e === "de" ? Ca() : e === "es" ? Sa() : e === "fr" ? qa() : e === "it" ? Ia() : e === "jp" ? Ga() : e === "pl" ? Ua() : e === "ru" ? Pa() : e === "uk" ? Na() : Ea()
  },
  Ta = () => "Suggestive Content",
  Aa = () => "Conteúdo Sugestivo",
  Ba = () => "暗示性内容",
  Ma = () => "Anzügliche Inhalte",
  La = () => "Contenido Sugerente",
  Ra = () => "Contenu suggestif",
  Ka = () => "Contenuto allusivo",
  $a = () => "性的示唆のあるコンテンツ",
  Ha = () => "Treści sugestywne",
  Za = () => "Откровенный контент",
  Va = () => "Відвертий контент",
  Fa = () => "Nội dung khiêu gợi",
  Qf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ta() : e === "pt" ? Aa() : e === "ch" ? Ba() : e === "de" ? Ma() : e === "es" ? La() : e === "fr" ? Ra() : e === "it" ? Ka() : e === "jp" ? $a() : e === "pl" ? Ha() : e === "ru" ? Za() : e === "uk" ? Va() : Fa()
  },
  Oa = () => "Drawing in this category <strong>shouldn't lead to suspensions</strong>. However, <strong>the community is free clean up or paint over these artworks</strong>. Includes drawings with sexual undertones that don't cross into explicit territory (no genitalia, sexual acts, or sexual fluids).",
  Ja = () => "Desenhos nesta categoria <strong>não devem levar a suspensões</strong>. No entanto, <strong>a comunidade é livre para limpar ou pintar por cima dessas artes</strong>. Inclui desenhos com conotações sexuais que não chegam a ser explícitos (sem genitália, atos sexuais ou fluidos sexuais).",
  Wa = () => "此类别中的绘画<strong>不应导致暂停</strong>。但是，<strong>社区可以自由清理或覆盖这些作品</strong>。包括具有性暗示但未达到露骨程度的绘画（无生殖器、性行为或性液体）。",
  Qa = () => "Zeichnungen in dieser Kategorie <strong>sollten nicht zu Sperren führen</strong>. Allerdings <strong>ist es der Community erlaubt, diese Kunstwerke zu entfernen oder zu übermalen</strong>. Dazu gehören Zeichnungen mit sexuellen Untertönen, die nicht in explizites Gebiet vordringen (keine Genitalien, sexuelle Handlungen oder sexuelle Flüssigkeiten).",
  Xa = () => "Dibujar en esta categoría <strong>no debería llevar a suspensiones</strong>. Sin embargo, <strong>la comunidad es libre de limpiar o pintar sobre estas obras</strong>. Incluye dibujos con insinuaciones sexuales que no cruzan al territorio explícito (sin genitales, actos sexuales ni fluidos sexuales).",
  Ya = () => "Les dessins de cette catégorie <strong>ne devraient pas entraîner de suspension</strong>. Cependant, <strong>la communauté est libre de nettoyer ou de peindre par-dessus ces œuvres</strong>. Cela inclut les dessins à connotation sexuelle qui ne franchissent pas la limite du contenu explicite (pas d'organes génitaux, d'actes sexuels ni de fluides sexuels).",
  e_ = () => "I disegni in questa categoria <strong>non dovrebbero portare a sospensioni</strong>. Tuttavia, <strong>la community è libera di ripulire o dipingere sopra queste opere</strong>. Include disegni con sottotoni sessuali che non superano il limite dell'esplicito (nessun genitale, atto sessuale o fluido sessuale).",
  r_ = () => "このカテゴリの描画は<strong>停止処分の対象にはなりません</strong>。ただし、<strong>コミュニティはこれらの作品を自由に消去・上書きできます</strong>。露骨な表現（性器、性行為、体液）には至らないが、性的なニュアンスを含む描画が該当します。",
  n_ = () => "Rysunki z tej kategorii <strong>nie powinny prowadzić do zawieszeń</strong>. Jednakże <strong>społeczność może swobodnie usuwać lub zamalowywać te grafiki</strong>. Obejmuje rysunki o podtekście seksualnym, które nie przekraczają granicy treści jednoznacznych (brak genitaliów, aktów seksualnych czy płynów seksualnych).",
  t_ = () => "Рисунки в этой категории <strong>не должны приводить к блокировке</strong>. Однако <strong>сообщество вправе убирать или закрашивать такие рисунки</strong>. Включает рисунки с сексуальным подтекстом, не переходящие в откровенную территорию (без гениталий, половых актов или половых жидкостей).",
  i_ = () => "Малюнки з цієї категорії <strong>не повинні призводити до блокувань</strong>. Однак <strong>спільнота має повне право очистити чи замалювати такі роботи</strong>. Включає малюнки з сексуальним підтекстом, які не переходять у відверту територію (без геніталій, статевих актів чи статевих рідин).",
  o_ = () => "Vẽ trong danh mục này <strong>không nên dẫn đến đình chỉ</strong>. Tuy nhiên, <strong>cộng đồng được tự do dọn dẹp hoặc tô đè lên các tác phẩm này</strong>. Bao gồm các bức vẽ có ẩn ý tình dục nhưng không vượt qua ranh giới khiêu dâm (không có bộ phận sinh dục, hành vi tình dục hay dịch thể tình dục).",
  Xf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Oa() : e === "pt" ? Ja() : e === "ch" ? Wa() : e === "de" ? Qa() : e === "es" ? Xa() : e === "fr" ? Ya() : e === "it" ? e_() : e === "jp" ? r_() : e === "pl" ? n_() : e === "ru" ? t_() : e === "uk" ? i_() : o_()
  },
  u_ = () => "Space is limited. Players and communities will compete for territory, and that's not just allowed, it's what keeps the map alive. Claiming, defending, and reclaiming space is core gameplay.",
  s_ = () => "O espaço é limitado. Jogadores e comunidades vão competir por território, e isso não é apenas permitido, é o que mantém o mapa vivo. Conquistar, defender e retomar espaço faz parte da jogabilidade principal.",
  a_ = () => "空间有限。玩家和社区会争夺领地，这不仅被允许，更是让地图保持活力的关键。占领、防守和夺回空间是核心玩法。",
  __ = () => "Der Platz ist begrenzt. Spieler und Communities werden um Gebiete konkurrieren, und das ist nicht nur erlaubt, es hält die Karte lebendig. Gebiete beanspruchen, verteidigen und zurückerobern ist Teil des Kernspiels.",
  c_ = () => "El espacio es limitado. Los jugadores y comunidades competirán por territorio, y eso no solo está permitido, es lo que mantiene el mapa vivo. Reclamar, defender y reconquistar espacio es parte esencial del juego.",
  l_ = () => "L'espace est limité. Les joueurs et les communautés se disputeront le territoire, et ce n'est pas seulement autorisé, c'est ce qui fait vivre la carte. Revendiquer, défendre et reconquérir l'espace fait partie du gameplay de base.",
  g_ = () => "Lo spazio è limitato. I giocatori e le community competeranno per il territorio, e questo non è solo consentito, è ciò che mantiene viva la mappa. Conquistare, difendere e riconquistare spazio è il gameplay fondamentale.",
  p_ = () => "スペースには限りがあります。プレイヤーやコミュニティは領土をめぐって競い合います。これは許可されているだけでなく、マップを活気づける要素です。スペースの確保、防衛、奪還はゲームの基本です。",
  d_ = () => "Przestrzeń jest ograniczona. Gracze i społeczności będą rywalizować o terytorium — i to nie tylko jest dozwolone, to właśnie utrzymuje mapę przy życiu. Zajmowanie, obrona i odzyskiwanie przestrzeni to podstawowa rozgrywka.",
  f_ = () => "Пространство ограничено. Игроки и сообщества будут конкурировать за территорию, и это не просто разрешено — это то, что поддерживает карту живой. Захват, оборона и отвоевание территории — основная механика игры.",
  m_ = () => "Простір обмежений. Гравці та спільноти змагатимуться за територію, і це не лише дозволено — це те, що підтримує карту живою. Захоплення, оборона та відвоювання простору є основою геймплею.",
  h_ = () => "Không gian có hạn. Người chơi và cộng đồng sẽ cạnh tranh lãnh thổ, và điều đó không chỉ được phép — nó là thứ giữ cho bản đồ sống động. Chiếm, bảo vệ và giành lại không gian là cách chơi cốt lõi.",
  Yf = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? u_() : e === "pt" ? s_() : e === "ch" ? a_() : e === "de" ? __() : e === "es" ? c_() : e === "fr" ? l_() : e === "it" ? g_() : e === "jp" ? p_() : e === "pl" ? d_() : e === "ru" ? f_() : e === "uk" ? m_() : h_()
  },
  v_ = () => "Territorial Disputes",
  b_ = () => "Disputas Territoriais",
  k_ = () => "领地争夺",
  x_ = () => "Gebietskonflikte",
  z_ = () => "Disputas Territoriales",
  w_ = () => "Disputes territoriales",
  y_ = () => "Dispute territoriali",
  j_ = () => "領土紛争",
  D_ = () => "Spory terytorialne",
  C_ = () => "Территориальные споры",
  S_ = () => "Територіальні спори",
  q_ = () => "Tranh chấp lãnh thổ",
  em = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? v_() : e === "pt" ? b_() : e === "ch" ? k_() : e === "de" ? x_() : e === "es" ? z_() : e === "fr" ? w_() : e === "it" ? y_() : e === "jp" ? j_() : e === "pl" ? D_() : e === "ru" ? C_() : e === "uk" ? S_() : q_()
  },
  I_ = () => "Painting over other players' work is a normal part of the game. If your intent isn't to only harass or deliberately frustrate someone, moderators won't intervene.",
  G_ = () => "Pintar por cima do trabalho de outros jogadores é uma parte normal do jogo. Se sua intenção não for apenas assediar ou frustrar alguém deliberadamente, os moderadores não irão intervir.",
  U_ = () => "覆盖其他玩家的作品是游戏的正常组成部分。如果你的目的不仅仅是骚扰或故意激怒他人，管理员不会介入。",
  P_ = () => "Das Übermalen der Arbeit anderer Spieler ist ein normaler Teil des Spiels. Wenn deine Absicht nicht darin besteht, jemanden nur zu belästigen oder absichtlich zu frustrieren, werden Moderatoren nicht eingreifen.",
  N_ = () => "Pintar sobre el trabajo de otros jugadores es una parte normal del juego. Si tu intención no es solo acosar o frustrar deliberadamente a alguien, los moderadores no intervendrán.",
  E_ = () => "Peindre par-dessus le travail d'autres joueurs fait partie intégrante du jeu. Si votre intention n'est pas uniquement de harceler ou de frustrer délibérément quelqu'un, les modérateurs n'interviendront pas.",
  T_ = () => "Dipingere sopra il lavoro di altri giocatori è una parte normale del gioco. Se il tuo intento non è solo quello di molestare o frustrare deliberatamente qualcuno, i moderatori non interverranno.",
  A_ = () => "他のプレイヤーの作品の上にペイントすることは、ゲームの通常の一部です。あなたの意図が単に嫌がらせや故意に苛立たせることでなければ、モデレーターは介入しません。",
  B_ = () => "Zamalowywanie prac innych graczy jest normalną częścią gry. Jeśli Twoim celem nie jest wyłącznie nękanie lub celowe frustrowanie kogoś, moderatorzy nie będą interweniować.",
  M_ = () => "Рисование поверх работ других игроков — нормальная часть игры. Если ваша цель не состоит исключительно в том, чтобы досадить или намеренно расстроить кого-то, модераторы не вмешаются.",
  L_ = () => "Малювання поверх робіт інших гравців є нормальною частиною гри. Якщо ваш намір — не лише дратувати чи навмисно засмучувати когось, модератори не втручатимуться.",
  R_ = () => "Tô đè lên tác phẩm của người chơi khác là một phần bình thường của trò chơi. Nếu mục đích của bạn không phải chỉ để quấy rối hay cố tình gây bực bội ai đó, quản trị viên sẽ không can thiệp.",
  rm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? I_() : e === "pt" ? G_() : e === "ch" ? U_() : e === "de" ? P_() : e === "es" ? N_() : e === "fr" ? E_() : e === "it" ? T_() : e === "jp" ? A_() : e === "pl" ? B_() : e === "ru" ? M_() : e === "uk" ? L_() : R_()
  },
  K_ = () => "Zero-tolerance content",
  $_ = () => "Conteúdo de tolerância zero",
  H_ = () => "零容忍内容",
  Z_ = () => "Null-Toleranz-Inhalte",
  V_ = () => "Contenido de tolerancia cero",
  F_ = () => "Contenu à tolérance zéro",
  O_ = () => "Contenuti a tolleranza zero",
  J_ = () => "ゼロトレランスコンテンツ",
  W_ = () => "Treści objęte zerową tolerancją",
  Q_ = () => "Контент с нулевой терпимостью",
  X_ = () => "Контент з нульовою толерантністю",
  Y_ = () => "Nội dung không khoan nhượng",
  nm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? K_() : e === "pt" ? $_() : e === "ch" ? H_() : e === "de" ? Z_() : e === "es" ? V_() : e === "fr" ? F_() : e === "it" ? O_() : e === "jp" ? J_() : e === "pl" ? W_() : e === "ru" ? Q_() : e === "uk" ? X_() : Y_()
  },
  ec = () => "The following content is subject to moderation intervention and can result in a <strong>permanent ban</strong>:",
  rc = () => "O seguinte conteúdo está sujeito a intervenção da moderação e pode resultar em <strong>banimento permanente</strong>:",
  nc = () => "以下内容将受到管理介入，并可能导致<strong>永久封禁</strong>：",
  tc = () => "Die folgenden Inhalte unterliegen moderativen Maßnahmen und können zu einem <strong>permanenten Bann</strong> führen:",
  ic = () => "El siguiente contenido está sujeto a intervención de moderación y puede resultar en un <strong>ban permanente</strong>:",
  oc = () => "Le contenu suivant est soumis à une intervention de la modération et peut entraîner un <strong>bannissement permanent</strong> :",
  uc = () => "I seguenti contenuti sono soggetti a intervento della moderazione e possono comportare un <strong>ban permanente</strong>:",
  sc = () => "以下のコンテンツはモデレーションの対象となり、<strong>永久BAN</strong>になる場合があります:",
  ac = () => "Poniższe treści podlegają interwencji moderacji i mogą skutkować <strong>permanentnym banem</strong>:",
  _c = () => "Следующий контент подлежит модераторскому вмешательству и может привести к <strong>перманентному бану</strong>:",
  cc = () => "Наступний контент підлягає модераторському втручанню і може призвести до <strong>перманентного бану</strong>:",
  lc = () => "Các nội dung sau đây sẽ bị can thiệp kiểm duyệt và có thể dẫn đến <strong>cấm vĩnh viễn</strong>:",
  tm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ec() : e === "pt" ? rc() : e === "ch" ? nc() : e === "de" ? tc() : e === "es" ? ic() : e === "fr" ? oc() : e === "it" ? uc() : e === "jp" ? sc() : e === "pl" ? ac() : e === "ru" ? _c() : e === "uk" ? cc() : lc()
  },
  gc = () => "Doxxing (sharing anyone's private personal information)",
  pc = () => "Doxxing (compartilhar informações pessoais privadas de qualquer pessoa)",
  dc = () => "人肉搜索（分享任何人的私人个人信息）",
  fc = () => "Doxxing (Veröffentlichung persönlicher Informationen anderer)",
  mc = () => "Doxxing (compartir información personal privada de cualquier persona)",
  hc = () => "Doxxing (partage d'informations personnelles privées de quiconque)",
  vc = () => "Doxxing (condivisione di informazioni personali private di chiunque)",
  bc = () => "ドキシング（他人の個人情報の共有）",
  kc = () => "Doxxing (udostępnianie prywatnych danych osobowych innych osób)",
  xc = () => "Доксинг (распространение чьей-либо личной информации)",
  zc = () => "Доксинг (поширення приватної особистої інформації будь-кого)",
  wc = () => "Doxxing (chia sẻ thông tin cá nhân riêng tư của bất kỳ ai)",
  im = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? gc() : e === "pt" ? pc() : e === "ch" ? dc() : e === "de" ? fc() : e === "es" ? mc() : e === "fr" ? hc() : e === "it" ? vc() : e === "jp" ? bc() : e === "pl" ? kc() : e === "ru" ? xc() : e === "uk" ? zc() : wc()
  },
  yc = () => "Explicit sexual content (genitalia, sexual acts, sexual fluids)",
  jc = () => "Conteúdo sexual explícito (genitália, atos sexuais, fluidos sexuais)",
  Dc = () => "露骨的色情内容（生殖器、性行为、性液体）",
  Cc = () => "Explizit sexuelle Inhalte (Genitalien, sexuelle Handlungen, sexuelle Flüssigkeiten)",
  Sc = () => "Contenido sexual explícito (genitales, actos sexuales, fluidos sexuales)",
  qc = () => "Contenu sexuel explicite (organes génitaux, actes sexuels, fluides sexuels)",
  Ic = () => "Contenuto sessuale esplicito (genitali, atti sessuali, fluidi sessuali)",
  Gc = () => "露骨な性的コンテンツ（性器、性行為、体液）",
  Uc = () => "Jednoznaczne treści seksualne (genitalia, akty seksualne, płyny seksualne)",
  Pc = () => "Откровенный сексуальный контент (гениталии, половые акты, половые жидкости)",
  Nc = () => "Відверто сексуальний контент (геніталії, статеві акти, статеві рідини)",
  Ec = () => "Nội dung tình dục rõ ràng (bộ phận sinh dục, hành vi tình dục, dịch thể tình dục)",
  om = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? yc() : e === "pt" ? jc() : e === "ch" ? Dc() : e === "de" ? Cc() : e === "es" ? Sc() : e === "fr" ? qc() : e === "it" ? Ic() : e === "jp" ? Gc() : e === "pl" ? Uc() : e === "ru" ? Pc() : e === "uk" ? Nc() : Ec()
  },
  Tc = () => "Extreme graphic gore or realistic violence",
  Ac = () => "Gore gráfico extremo ou violência realista",
  Bc = () => "极端血腥或写实暴力内容",
  Mc = () => "Extremer grafischer Gore oder realistische Gewalt",
  Lc = () => "Gore gráfico extremo o violencia realista",
  Rc = () => "Gore graphique extrême ou violence réaliste",
  Kc = () => "Gore grafico estremo o violenza realistica",
  $c = () => "極度にグロテスクな描写やリアルな暴力表現",
  Hc = () => "Ekstremalnie drastyczne treści gore lub realistyczna przemoc",
  Zc = () => "Чрезмерная графическая жестокость или реалистичное насилие",
  Vc = () => "Екстремально жорстокі або реалістичні сцени насильства",
  Fc = () => "Bạo lực đẫm máu cực đoan hoặc bạo lực chân thực",
  um = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Tc() : e === "pt" ? Ac() : e === "ch" ? Bc() : e === "de" ? Mc() : e === "es" ? Lc() : e === "fr" ? Rc() : e === "it" ? Kc() : e === "jp" ? $c() : e === "pl" ? Hc() : e === "ru" ? Zc() : e === "uk" ? Vc() : Fc()
  },
  Oc = () => "Extreme hostility or targeted harassment toward others",
  Jc = () => "Hostilidade extrema ou assédio direcionado a outros",
  Wc = () => "对他人的极端敌意或针对性骚扰",
  Qc = () => "Extreme Feindseligkeit oder gezielte Belästigung anderer",
  Xc = () => "Hostilidad extrema o acoso dirigido hacia otros",
  Yc = () => "Hostilité extrême ou harcèlement ciblé envers autrui",
  el = () => "Ostilità estrema o molestie mirate verso altri",
  rl = () => "他者に対する極端な敵意や標的型の嫌がらせ",
  nl = () => "Skrajna wrogość lub ukierunkowane nękanie innych osób",
  tl = () => "Крайняя враждебность или целенаправленная травля других",
  il = () => "Екстремальна ворожість або цілеспрямоване переслідування інших",
  ol = () => "Thái độ thù địch cực đoan hoặc quấy rối nhắm vào người khác",
  sm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Oc() : e === "pt" ? Jc() : e === "ch" ? Wc() : e === "de" ? Qc() : e === "es" ? Xc() : e === "fr" ? Yc() : e === "it" ? el() : e === "jp" ? rl() : e === "pl" ? nl() : e === "ru" ? tl() : e === "uk" ? il() : ol()
  },
  ul = () => "Clear hate speech, extreme slurs, or symbols of hate (e.g. swastikas)",
  sl = () => "Discurso de ódio evidente, ofensas extremas ou símbolos de ódio (ex.: suásticas)",
  al = () => "明确的仇恨言论、极端侮辱性用语或仇恨符号（如纳粹符号）",
  _l = () => "Eindeutige Hassrede, extreme Beleidigungen oder Hasssymbole (z. B. Hakenkreuze)",
  cl = () => "Discurso de odio claro, insultos extremos o símbolos de odio (ej. esvásticas)",
  ll = () => "Discours de haine manifeste, insultes extrêmes ou symboles haineux (ex. : croix gammées)",
  gl = () => "Chiaro discorso d'odio, insulti estremi o simboli d'odio (es. svastiche)",
  pl = () => "明確なヘイトスピーチ、極端な差別用語、またはヘイトシンボル（例: 鉤十字）",
  dl = () => "Wyraźna mowa nienawiści, skrajne obelgi lub symbole nienawiści (np. swastyki)",
  fl = () => "Явная речь ненависти, грубые оскорбления или символы ненависти (например, свастики)",
  ml = () => "Явна мова ненависті, образливі слова або символи ненависті (напр. свастики)",
  hl = () => "Ngôn từ thù hằn rõ ràng, từ ngữ xúc phạm nặng hoặc biểu tượng thù hận (ví dụ: chữ vạn)",
  am = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ul() : e === "pt" ? sl() : e === "ch" ? al() : e === "de" ? _l() : e === "es" ? cl() : e === "fr" ? ll() : e === "it" ? gl() : e === "jp" ? pl() : e === "pl" ? dl() : e === "ru" ? fl() : e === "uk" ? ml() : hl()
  },
  vl = () => "Sexualization of minors or characters with child-like visual traits, regardless of their fictional age or lore",
  bl = () => "Sexualização de menores ou personagens com traços visuais infantis, independentemente de sua idade fictícia ou história",
  kl = () => "对未成年人或具有儿童外观特征的角色的色情化，无论其虚构年龄或设定如何",
  xl = () => "Sexualisierung von Minderjährigen oder Charakteren mit kindlichen visuellen Merkmalen, unabhängig von deren fiktivem Alter oder Hintergrundgeschichte",
  zl = () => "Sexualización de menores o personajes con rasgos visuales infantiles, independientemente de su edad ficticia o historia",
  wl = () => "Sexualisation de mineurs ou de personnages ayant des traits visuels enfantins, indépendamment de leur âge fictif ou de leur lore",
  yl = () => "Sessualizzazione di minori o personaggi con tratti visivi infantili, indipendentemente dalla loro età fittizia o lore",
  jl = () => "未成年者または子供のような外見を持つキャラクターの性的描写（架空の年齢や設定に関係なく）",
  Dl = () => "Seksualizacja nieletnich lub postaci o dziecięcych cechach wizualnych, niezależnie od ich fikcyjnego wieku lub historii",
  Cl = () => "Сексуализация несовершеннолетних или персонажей с детскими чертами, вне зависимости от их вымышленного возраста или лора",
  Sl = () => "Сексуалізація неповнолітніх або персонажів з дитячими візуальними рисами, незалежно від їхнього вигаданого віку чи лору",
  ql = () => "Tình dục hóa trẻ vị thành niên hoặc nhân vật có đặc điểm ngoại hình trẻ em, bất kể tuổi hư cấu hay cốt truyện",
  _m = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? vl() : e === "pt" ? bl() : e === "ch" ? kl() : e === "de" ? xl() : e === "es" ? zl() : e === "fr" ? wl() : e === "it" ? yl() : e === "jp" ? jl() : e === "pl" ? Dl() : e === "ru" ? Cl() : e === "uk" ? Sl() : ql()
  },
  Il = () => "Rules",
  Gl = () => "Regras",
  Ul = () => "规则",
  Pl = () => "Regeln",
  Nl = () => "Reglas",
  El = () => "Règles",
  Tl = () => "Regole",
  Al = () => "ルール",
  Bl = () => "Zasady",
  Ml = () => "Правила",
  Ll = () => "Правила",
  Rl = () => "Luật",
  cm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Il() : e === "pt" ? Gl() : e === "ch" ? Ul() : e === "de" ? Pl() : e === "es" ? Nl() : e === "fr" ? El() : e === "it" ? Tl() : e === "jp" ? Al() : e === "pl" ? Bl() : e === "ru" ? Ml() : e === "uk" ? Ll() : Rl()
  },
  Kl = () => "allowed",
  $l = () => "permitido",
  Hl = () => "允许",
  Zl = () => "erlaubt",
  Vl = () => "permitido",
  Fl = () => "autorisé",
  Ol = () => "consentito",
  Jl = () => "許可",
  Wl = () => "dozwolone",
  Ql = () => "разрешено",
  Xl = () => "дозволено",
  Yl = () => "được phép",
  lm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Kl() : e === "pt" ? $l() : e === "ch" ? Hl() : e === "de" ? Zl() : e === "es" ? Vl() : e === "fr" ? Fl() : e === "it" ? Ol() : e === "jp" ? Jl() : e === "pl" ? Wl() : e === "ru" ? Ql() : e === "uk" ? Xl() : Yl()
  },
  eg = () => "permanent ban",
  rg = () => "banimento permanente",
  ng = () => "永久封禁",
  tg = () => "permanenter Bann",
  ig = () => "ban permanente",
  og = () => "bannissement permanent",
  ug = () => "ban permanente",
  sg = () => "永久BAN",
  ag = () => "permanentny ban",
  _g = () => "перманентный бан",
  cg = () => "перманентний бан",
  lg = () => "cấm vĩnh viễn",
  gm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? eg() : e === "pt" ? rg() : e === "ch" ? ng() : e === "de" ? tg() : e === "es" ? ig() : e === "fr" ? og() : e === "it" ? ug() : e === "jp" ? sg() : e === "pl" ? ag() : e === "ru" ? _g() : e === "uk" ? cg() : lg()
  },
  gg = () => "timeout",
  pg = () => "suspensão",
  dg = () => "禁言",
  fg = () => "Sperre",
  mg = () => "suspensión",
  hg = () => "suspension",
  vg = () => "sospensione",
  bg = () => "一時停止",
  kg = () => "zawieszenie",
  xg = () => "тайм-аут",
  zg = () => "тайм-аут",
  wg = () => "tạm khóa",
  pm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? gg() : e === "pt" ? pg() : e === "ch" ? dg() : e === "de" ? fg() : e === "es" ? mg() : e === "fr" ? hg() : e === "it" ? vg() : e === "jp" ? bg() : e === "pl" ? kg() : e === "ru" ? xg() : e === "uk" ? zg() : wg()
  },
  yg = () => "Destroying others' work with no creative intent.",
  jg = () => "Destruir o trabalho dos outros sem intenção criativa.",
  Dg = () => "毫无创意目的地破坏他人作品。",
  Cg = () => "Zerstörung der Arbeit anderer ohne kreative Absicht.",
  Sg = () => "Destruir el trabajo de otros sin intención creativa.",
  qg = () => "Détruire le travail des autres sans intention créative.",
  Ig = () => "Distruggere il lavoro degli altri senza intento creativo.",
  Gg = () => "創造的な意図なく他人の作品を破壊する行為。",
  Ug = () => "Niszczenie cudzych prac bez intencji twórczej.",
  Pg = () => "Уничтожение чужих работ без какого-либо творческого намерения.",
  Ng = () => "Знищення чужих робіт без творчого наміру.",
  Eg = () => "Phá hoại tác phẩm của người khác mà không có ý định sáng tạo.",
  dm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? yg() : e === "pt" ? jg() : e === "ch" ? Dg() : e === "de" ? Cg() : e === "es" ? Sg() : e === "fr" ? qg() : e === "it" ? Ig() : e === "jp" ? Gg() : e === "pl" ? Ug() : e === "ru" ? Pg() : e === "uk" ? Ng() : Eg()
  },
  Tg = () => "Explicit, hateful, or illegal content is not tolerated.",
  Ag = () => "Conteúdo explícito, de ódio ou ilegal não é tolerado.",
  Bg = () => "不容忍色情、仇恨或违法内容。",
  Mg = () => "Explizite, hasserfüllte oder illegale Inhalte werden nicht toleriert.",
  Lg = () => "El contenido explícito, de odio o ilegal no es tolerado.",
  Rg = () => "Le contenu explicite, haineux ou illégal n'est pas toléré.",
  Kg = () => "Contenuti espliciti, di odio o illegali non sono tollerati.",
  $g = () => "露骨、差別的、または違法なコンテンツは容認されません。",
  Hg = () => "Treści jednoznacznie seksualne, nawołujące do nienawiści lub nielegalne nie są tolerowane.",
  Zg = () => "Откровенный, ненавистнический или незаконный контент запрещён.",
  Vg = () => "Відвертий, ненависницький або незаконний контент не допускається.",
  Fg = () => "Nội dung khiêu dâm, thù hằn hoặc bất hợp pháp sẽ không được dung thứ.",
  fm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Tg() : e === "pt" ? Ag() : e === "ch" ? Bg() : e === "de" ? Mg() : e === "es" ? Lg() : e === "fr" ? Rg() : e === "it" ? Kg() : e === "jp" ? $g() : e === "pl" ? Hg() : e === "ru" ? Zg() : e === "uk" ? Vg() : Fg()
  },
  Og = () => "Erasing spam, inappropriate or suggestive content with transparent pixels.",
  Jg = () => "Apagar spam, conteúdo inapropriado ou sugestivo com pixels transparentes.",
  Wg = () => "使用透明像素清除垃圾内容、不当或暗示性内容。",
  Qg = () => "Spam, unangemessene oder anzügliche Inhalte mit transparenten Pixeln entfernen.",
  Xg = () => "Borrar spam, contenido inapropiado o sugerente con píxeles transparentes.",
  Yg = () => "Effacer le spam, le contenu inapproprié ou suggestif avec des pixels transparents.",
  ep = () => "Cancellare spam, contenuti inappropriati o allusivi con pixel trasparenti.",
  rp = () => "透明ピクセルを使って、スパム、不適切、または性的示唆の強いコンテンツを消去する行為。",
  np = () => "Usuwanie spamu, nieodpowiednich lub sugestywnych treści za pomocą przezroczystych pikseli.",
  tp = () => "Удаление спама, неприемлемого или откровенного контента прозрачными пикселями.",
  ip = () => "Видалення спаму, неприйнятного чи відвертого контенту прозорими пікселями.",
  op = () => "Xóa spam, nội dung không phù hợp hoặc khiêu gợi bằng pixel trong suốt.",
  mm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Og() : e === "pt" ? Jg() : e === "ch" ? Wg() : e === "de" ? Qg() : e === "es" ? Xg() : e === "fr" ? Yg() : e === "it" ? ep() : e === "jp" ? rp() : e === "pl" ? np() : e === "ru" ? tp() : e === "uk" ? ip() : op()
  },
  up = () => "One account per person. No automation or exploits.",
  sp = () => "Uma conta por pessoa. Sem automação ou exploits.",
  ap = () => "每人只能使用一个账号。禁止使用自动化工具或利用漏洞。",
  _p = () => "Ein Konto pro Person. Keine Automatisierung oder Exploits.",
  cp = () => "Una cuenta por persona. Sin automatización ni exploits.",
  lp = () => "Un seul compte par personne. Aucune automatisation ni exploitation de failles.",
  gp = () => "Un account per persona. Nessuna automazione o exploit.",
  pp = () => "1人につき1アカウントです。自動化やエクスプロイトは禁止です。",
  dp = () => "Jedno konto na osobę. Żadnej automatyzacji ani exploitów.",
  fp = () => "Один аккаунт на человека. Никакой автоматизации и эксплойтов.",
  mp = () => "Один акаунт на людину. Без автоматизації чи експлойтів.",
  hp = () => "Mỗi người một tài khoản. Không được tự động hóa hay khai thác lỗi.",
  hm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? up() : e === "pt" ? sp() : e === "ch" ? ap() : e === "de" ? _p() : e === "es" ? cp() : e === "fr" ? lp() : e === "it" ? gp() : e === "jp" ? pp() : e === "pl" ? dp() : e === "ru" ? fp() : e === "uk" ? mp() : hp()
  },
  vp = () => "Competing for space is part of the game.",
  bp = () => "Competir por espaço faz parte do jogo.",
  kp = () => "争夺空间是游戏的一部分。",
  xp = () => "Der Wettbewerb um Platz ist Teil des Spiels.",
  zp = () => "Competir por el espacio es parte del juego.",
  wp = () => "La compétition pour l'espace fait partie du jeu.",
  yp = () => "Competere per lo spazio fa parte del gioco.",
  jp = () => "スペースをめぐる競争はゲームの一部です。",
  Dp = () => "Rywalizacja o przestrzeń jest częścią gry.",
  Cp = () => "Борьба за территорию — часть игры.",
  Sp = () => "Боротьба за простір — це частина гри.",
  qp = () => "Cạnh tranh không gian là một phần của trò chơi.",
  vm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? vp() : e === "pt" ? bp() : e === "ch" ? kp() : e === "de" ? xp() : e === "es" ? zp() : e === "fr" ? wp() : e === "it" ? yp() : e === "jp" ? jp() : e === "pl" ? Dp() : e === "ru" ? Cp() : e === "uk" ? Sp() : qp()
  },
  Ip = () => "Fair play",
  Gp = () => "Jogo justo",
  Up = () => "公平游戏",
  Pp = () => "Fair Play",
  Np = () => "Juego limpio",
  Ep = () => "Fair play",
  Tp = () => "Fair play",
  Ap = () => "フェアプレー",
  Bp = () => "Fair play",
  Mp = () => "Честная игра",
  Lp = () => "Чесна гра",
  Rp = () => "Chơi công bằng",
  bm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Ip() : e === "pt" ? Gp() : e === "ch" ? Up() : e === "de" ? Pp() : e === "es" ? Np() : e === "fr" ? Ep() : e === "it" ? Tp() : e === "jp" ? Ap() : e === "pl" ? Bp() : e === "ru" ? Mp() : e === "uk" ? Lp() : Rp()
  },
  Kp = () => "Prohibited",
  $p = () => "Proibido",
  Hp = () => "禁止行为",
  Zp = () => "Verboten",
  Vp = () => "Prohibido",
  Fp = () => "Interdit",
  Op = () => "Vietato",
  Jp = () => "禁止事項",
  Wp = () => "Zabronione",
  Qp = () => "Запрещено",
  Xp = () => "Заборонено",
  Yp = () => "Bị cấm",
  km = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Kp() : e === "pt" ? $p() : e === "ch" ? Hp() : e === "de" ? Zp() : e === "es" ? Vp() : e === "fr" ? Fp() : e === "it" ? Op() : e === "jp" ? Jp() : e === "pl" ? Wp() : e === "ru" ? Qp() : e === "uk" ? Xp() : Yp()
  },
  ed = () => "Griefing",
  rd = () => "Griefing",
  nd = () => "恶意破坏",
  td = () => "Griefing",
  id = () => "Griefing",
  od = () => "Griefing",
  ud = () => "Griefing",
  sd = () => "グリーフィング",
  ad = () => "Griefing",
  _d = () => "Гриферство",
  cd = () => "Грифінг",
  ld = () => "Griefing",
  xm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? ed() : e === "pt" ? rd() : e === "ch" ? nd() : e === "de" ? td() : e === "es" ? id() : e === "fr" ? od() : e === "it" ? ud() : e === "jp" ? sd() : e === "pl" ? ad() : e === "ru" ? _d() : e === "uk" ? cd() : ld()
  },
  gd = () => "Inappropriate content",
  pd = () => "Conteúdo inapropriado",
  dd = () => "不当内容",
  fd = () => "Unangemessene Inhalte",
  md = () => "Contenido inapropiado",
  hd = () => "Contenu inapproprié",
  vd = () => "Contenuto inappropriato",
  bd = () => "不適切なコンテンツ",
  kd = () => "Nieodpowiednie treści",
  xd = () => "Неприемлемый контент",
  zd = () => "Неприйнятний вміст",
  wd = () => "Nội dung không phù hợp",
  zm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? gd() : e === "pt" ? pd() : e === "ch" ? dd() : e === "de" ? fd() : e === "es" ? md() : e === "fr" ? hd() : e === "it" ? vd() : e === "jp" ? bd() : e === "pl" ? kd() : e === "ru" ? xd() : e === "uk" ? zd() : wd()
  },
  yd = () => "Map cleanup",
  jd = () => "Limpeza do mapa",
  Dd = () => "地图清理",
  Cd = () => "Kartenbereinigung",
  Sd = () => "Limpieza del mapa",
  qd = () => "Nettoyage de la carte",
  Id = () => "Pulizia della mappa",
  Gd = () => "マップの清掃",
  Ud = () => "Sprzątanie mapy",
  Pd = () => "Очистка карты",
  Nd = () => "Очищення карти",
  Ed = () => "Dọn dẹp bản đồ",
  wm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? yd() : e === "pt" ? jd() : e === "ch" ? Dd() : e === "de" ? Cd() : e === "es" ? Sd() : e === "fr" ? qd() : e === "it" ? Id() : e === "jp" ? Gd() : e === "pl" ? Ud() : e === "ru" ? Pd() : e === "uk" ? Nd() : Ed()
  },
  Td = () => "Multi-accounts & bots",
  Ad = () => "Múltiplas contas e bots",
  Bd = () => "多账号与机器人",
  Md = () => "Multi-Accounts & Bots",
  Ld = () => "Multi-cuentas y bots",
  Rd = () => "Multi-comptes et bots",
  Kd = () => "Multi-account e bot",
  $d = () => "複数アカウント＆ボット",
  Hd = () => "Multi-konta i boty",
  Zd = () => "Мультиаккаунты и боты",
  Vd = () => "Мультиакаунти та боти",
  Fd = () => "Nhiều tài khoản & bot",
  ym = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Td() : e === "pt" ? Ad() : e === "ch" ? Bd() : e === "de" ? Md() : e === "es" ? Ld() : e === "fr" ? Rd() : e === "it" ? Kd() : e === "jp" ? $d() : e === "pl" ? Hd() : e === "ru" ? Zd() : e === "uk" ? Vd() : Fd()
  },
  Od = () => "Territorial disputes",
  Jd = () => "Disputas territoriais",
  Wd = () => "领地争夺",
  Qd = () => "Gebietskonflikte",
  Xd = () => "Disputas territoriales",
  Yd = () => "Disputes territoriales",
  ef = () => "Dispute territoriali",
  rf = () => "領土紛争",
  nf = () => "Spory terytorialne",
  tf = () => "Территориальные споры",
  of = () => "Територіальні спори",
  uf = () => "Tranh chấp lãnh thổ",
  jm = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? Od() : e === "pt" ? Jd() : e === "ch" ? Wd() : e === "de" ? Qd() : e === "es" ? Xd() : e === "fr" ? Yd() : e === "it" ? ef() : e === "jp" ? rf() : e === "pl" ? nf() : e === "ru" ? tf() : e === "uk" ? of() : uf()
  };
export {
  zf as $, um as A, am as B, im as C, sm as D, Qf as E, Xf as F, mf as G, vf as H, Cf as I, Mf as J, If as K, Kf as L, wf as M, Sf as N, Gf as O, Rf as P, Lf as Q, Uf as R, Pf as S, Jf as T, Af as U, Tf as V, Ef as W, Of as X, Wf as Y, em as Z, yf as _, ff as a, Df as a0, rm as a1, Yf as a2, gm as a3, fm as a4, zm as a5, pm as a6, dm as a7, xm as a8, hm as a9, ym as aa, km as ab, lm as ac, vm as ad, jm as ae, mm as af, wm as ag, bm as ah, af as b, lf as c, df as d, cf as e, _f as f, pf as g, gf as h, $f as i, Zf as j, Bf as k, jf as l, qf as m, Nf as n, Ff as o, Hf as p, kf as q, cm as r, Vf as s, xf as t, nm as u, tm as v, bf as w, hf as x, om as y, _m as z
};