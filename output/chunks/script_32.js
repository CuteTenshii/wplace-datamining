import {
  g as n
} from "./lNmZA2C_.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new t.Error().stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "c1d216f3-3c9b-4544-8d07-2f1431cbde45", t._sentryDebugIdIdentifier = "sentry-dbid-c1d216f3-3c9b-4544-8d07-2f1431cbde45")
  })()
} catch {}
const o = () => "Add profile picture",
  i = () => "Adicionar imagem de perfil",
  u = () => "添加头像",
  p = () => "Profilbild hinzufügen",
  s = () => "Añadir imagen de perfil",
  _ = () => "Ajouter une image de profil",
  c = () => "Aggiungi immagine del profilo",
  d = () => "プロフィール画像を追加",
  l = () => "Dodaj zdjęcie profilowe",
  f = () => "Добавить изображение профиля",
  a = () => "Додати зображення профілю",
  y = () => "Thêm ảnh đại diện",
  xe = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? o() : e === "pt" ? i() : e === "ch" ? u() : e === "de" ? p() : e === "es" ? s() : e === "fr" ? _() : e === "it" ? c() : e === "jp" ? d() : e === "pl" ? l() : e === "ru" ? f() : e === "uk" ? a() : y()
  },
  g = () => "Eraser",
  h = () => "Borracha",
  m = () => "橡皮擦",
  v = () => "Radierer",
  b = () => "Borrador",
  w = () => "Gomme",
  k = () => "Gomma",
  x = () => "消しゴム",
  j = () => "Gumka",
  q = () => "Ластик",
  z = () => "Гумка",
  P = () => "Cục tẩy",
  je = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? g() : e === "pt" ? h() : e === "ch" ? m() : e === "de" ? v() : e === "es" ? b() : e === "fr" ? w() : e === "it" ? k() : e === "jp" ? x() : e === "pl" ? j() : e === "ru" ? q() : e === "uk" ? z() : P()
  },
  D = () => "Preview",
  A = () => "Prévia",
  R = () => "预览",
  E = () => "Vorschau",
  T = () => "Vista previa",
  G = () => "Aperçu",
  I = () => "Anteprima",
  V = () => "プレビュー",
  B = () => "Podgląd",
  L = () => "Предпросмотр",
  C = () => "Попередній перегляд",
  F = () => "Xem trước",
  qe = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? D() : e === "pt" ? A() : e === "ch" ? R() : e === "de" ? E() : e === "es" ? T() : e === "fr" ? G() : e === "it" ? I() : e === "jp" ? V() : e === "pl" ? B() : e === "ru" ? L() : e === "uk" ? C() : F()
  },
  S = () => "Refund Policy",
  Y = () => "Política de Reembolso",
  N = () => "退款政策",
  O = () => "Rückerstattungsrichtlinie",
  X = () => "Política de reembolso",
  H = () => "Politique de remboursement",
  J = () => "Politica di rimborso",
  K = () => "返金ポリシー",
  M = () => "Polityka zwrotów",
  Q = () => "Политика возврата средств",
  U = () => "Політика повернення коштів",
  W = () => "Chính sách hoàn tiền",
  ze = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? S() : e === "pt" ? Y() : e === "ch" ? N() : e === "de" ? O() : e === "es" ? X() : e === "fr" ? H() : e === "it" ? J() : e === "jp" ? K() : e === "pl" ? M() : e === "ru" ? Q() : e === "uk" ? U() : W()
  },
  Z = () => "For refund requests and processing details, please see our",
  $ = () => "Para pedidos de reembolso, consulte nossa",
  ee = () => "有关退款请求和处理详情，请参阅我们的",
  re = () => "Für Rückerstattungen und Details siehe unsere",
  te = () => "Para solicitudes de reembolso y más detalles, consulta nuestra",
  ne = () => "Pour les demandes de remboursement et les détails de traitement, consultez notre",
  oe = () => "Per richieste di rimborso, consulta la nostra",
  ie = () => "返金の申請方法と詳細については、こちらをご覧ください:",
  ue = () => "Aby uzyskać informacje o zwrotach, zobacz naszą",
  pe = () => "Для запросов на возврат средств и деталей обработки см. нашу",
  se = () => "Для запитів на повернення та деталей обробки дивіться нашу",
  _e = () => "Để yêu cầu hoàn tiền và chi tiết xử lý, hãy xem",
  Pe = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? Z() : e === "pt" ? $() : e === "ch" ? ee() : e === "de" ? re() : e === "es" ? te() : e === "fr" ? ne() : e === "it" ? oe() : e === "jp" ? ie() : e === "pl" ? ue() : e === "ru" ? pe() : e === "uk" ? se() : _e()
  },
  ce = () => "You gain 1 droplet per pixel painted and 500 Droplets per niveau",
  de = () => "Você ganha 1 droplet por pixel pintado e 500 droplets por level",
  le = () => "你每绘制 1 个像素可获得 1 个水滴，每升 1 级可获得 500 个水滴",
  fe = () => "Du erhältst 1 Droplet pro gemaltem Pixel und 500 Droplets pro Level",
  ae = () => "Ganas 1 gota por píxel pintado y 500 gotas por nivel",
  ye = () => "Vous gagnez 1 droplet par pixel peint et 500 droplets par niveau",
  ge = () => "Guadagni 1 goccia per ogni pixel dipinto e 500 gocce per livello",
  he = () => "ピクセルを1つ塗るごとにドロップレットを1つ、レベルごとに500ドロップレットを獲得します。",
  me = () => "Otrzymujesz 1 kroplę za każdy pomalowany piksel i 500 kropli za każdy poziom",
  ve = () => "Вы получаете 1 droplet за каждый нарисованный пиксель и 500 droplets за уровень",
  be = () => "Ви отримуєте 1 дроплет за кожен намальований піксель і 500 дроплетів за рівень",
  we = () => "Bạn nhận 1 droplet cho mỗi pixel tô và 500 droplets mỗi cấp độ",
  De = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? ce() : e === "pt" ? de() : e === "ch" ? le() : e === "de" ? fe() : e === "es" ? ae() : e === "fr" ? ye() : e === "it" ? ge() : e === "jp" ? he() : e === "pl" ? me() : e === "ru" ? ve() : e === "uk" ? be() : we()
  };
export {
  xe as a, ze as b, je as e, qe as p, Pe as r, De as y
};