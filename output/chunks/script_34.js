import {
  g as n
} from "./sPnE0boO.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var r = new t.Error().stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "5576130b-988d-42a2-9cbd-5c7b98b42922", t._sentryDebugIdIdentifier = "sentry-dbid-5576130b-988d-42a2-9cbd-5c7b98b42922")
  } catch {}
})();
const o = () => "Add profile picture",
  u = () => "Adicionar imagem de perfil",
  i = () => "添加头像",
  _ = () => "Profilbild hinzufügen",
  s = () => "Añadir imagen de perfil",
  p = () => "Ajouter une image de profil",
  d = () => "Aggiungi immagine del profilo",
  l = () => "プロフィール画像を追加",
  c = () => "Dodaj zdjęcie profilowe",
  a = () => "Добавить изображение профиля",
  f = () => "Додати зображення профілю",
  y = () => "Thêm ảnh đại diện",
  le = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? o() : e === "pt" ? u() : e === "ch" ? i() : e === "de" ? _() : e === "es" ? s() : e === "fr" ? p() : e === "it" ? d() : e === "jp" ? l() : e === "pl" ? c() : e === "ru" ? a() : e === "uk" ? f() : y()
  },
  g = () => "Eraser",
  m = () => "Borracha",
  h = () => "橡皮擦",
  b = () => "Radierer",
  x = () => "Borrador",
  k = () => "Gomme",
  j = () => "Gomma",
  q = () => "消しゴム",
  v = () => "Gumka",
  z = () => "Ластик",
  P = () => "Гумка",
  w = () => "Cục tẩy",
  ce = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? g() : e === "pt" ? m() : e === "ch" ? h() : e === "de" ? b() : e === "es" ? x() : e === "fr" ? k() : e === "it" ? j() : e === "jp" ? q() : e === "pl" ? v() : e === "ru" ? z() : e === "uk" ? P() : w()
  },
  D = () => "Refund Policy",
  A = () => "Política de Reembolso",
  R = () => "退款政策",
  E = () => "Rückerstattungsrichtlinie",
  G = () => "Política de reembolso",
  I = () => "Politique de remboursement",
  T = () => "Politica di rimborso",
  B = () => "返金ポリシー",
  L = () => "Polityka zwrotów",
  C = () => "Политика возврата средств",
  F = () => "Політика повернення коштів",
  S = () => "Chính sách hoàn tiền",
  ae = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? D() : e === "pt" ? A() : e === "ch" ? R() : e === "de" ? E() : e === "es" ? G() : e === "fr" ? I() : e === "it" ? T() : e === "jp" ? B() : e === "pl" ? L() : e === "ru" ? C() : e === "uk" ? F() : S()
  },
  V = () => "For refund requests and processing details, please see our",
  Y = () => "Para pedidos de reembolso, consulte nossa",
  N = () => "有关退款请求和处理详情，请参阅我们的",
  O = () => "Für Rückerstattungen und Details siehe unsere",
  H = () => "Para solicitudes de reembolso y más detalles, consulta nuestra",
  J = () => "Pour les demandes de remboursement et les détails de traitement, consultez notre",
  K = () => "Per richieste di rimborso, consulta la nostra",
  M = () => "返金の申請方法と詳細については、こちらをご覧ください:",
  Q = () => "Aby uzyskać informacje o zwrotach, zobacz naszą",
  U = () => "Для запросов на возврат средств и деталей обработки см. нашу",
  W = () => "Для запитів на повернення та деталей обробки дивіться нашу",
  X = () => "Để yêu cầu hoàn tiền và chi tiết xử lý, hãy xem",
  fe = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? V() : e === "pt" ? Y() : e === "ch" ? N() : e === "de" ? O() : e === "es" ? H() : e === "fr" ? J() : e === "it" ? K() : e === "jp" ? M() : e === "pl" ? Q() : e === "ru" ? U() : e === "uk" ? W() : X()
  },
  Z = () => "You gain 1 droplet per pixel painted and 500 Droplets per niveau",
  $ = () => "Você ganha 1 droplet por pixel pintado e 500 droplets por level",
  ee = () => "你每绘制 1 个像素可获得 1 个水滴，每升 1 级可获得 500 个水滴",
  re = () => "Du erhältst 1 Droplet pro gemaltem Pixel und 500 Droplets pro Level",
  te = () => "Ganas 1 gota por píxel pintado y 500 gotas por nivel",
  ne = () => "Vous gagnez 1 droplet par pixel peint et 500 droplets par niveau",
  oe = () => "Guadagni 1 goccia per ogni pixel dipinto e 500 gocce per livello",
  ue = () => "ピクセルを1つ塗るごとにドロップレットを1つ、レベルごとに500ドロップレットを獲得します。",
  ie = () => "Otrzymujesz 1 kroplę za każdy pomalowany piksel i 500 kropli za każdy poziom",
  _e = () => "Вы получаете 1 droplet за каждый нарисованный пиксель и 500 droplets за уровень",
  se = () => "Ви отримуєте 1 дроплет за кожен намальований піксель і 500 дроплетів за рівень",
  pe = () => "Bạn nhận 1 droplet cho mỗi pixel tô và 500 droplets mỗi cấp độ",
  ye = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? Z() : e === "pt" ? $() : e === "ch" ? ee() : e === "de" ? re() : e === "es" ? te() : e === "fr" ? ne() : e === "it" ? oe() : e === "jp" ? ue() : e === "pl" ? ie() : e === "ru" ? _e() : e === "uk" ? se() : pe()
  };
export {
  le as a, ae as b, ce as e, fe as r, ye as y
};