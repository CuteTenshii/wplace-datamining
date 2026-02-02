import {
  g as n
} from "./DSNL03G2.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "29e4431f574f09d587efe1de5f4cdc3c0249ff76"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new r.Error().stack;
    t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "7369df92-6e89-435b-a5d9-06fbf184343d", r._sentryDebugIdIdentifier = "sentry-dbid-7369df92-6e89-435b-a5d9-06fbf184343d")
  })()
} catch {}
const o = () => "Add profile picture",
  u = () => "Adicionar imagem de perfil",
  i = () => "添加头像",
  _ = () => "Profilbild hinzufügen",
  s = () => "Añadir imagen de perfil",
  p = () => "Ajouter une image de profil",
  d = () => "Aggiungi immagine del profilo",
  l = () => "プロフィール画像を追加",
  f = () => "Dodaj zdjęcie profilowe",
  c = () => "Добавить изображение профиля",
  a = () => "Додати зображення профілю",
  y = () => "Thêm ảnh đại diện",
  le = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? o() : e === "pt" ? u() : e === "ch" ? i() : e === "de" ? _() : e === "es" ? s() : e === "fr" ? p() : e === "it" ? d() : e === "jp" ? l() : e === "pl" ? f() : e === "ru" ? c() : e === "uk" ? a() : y()
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
  w = () => "Гумка",
  P = () => "Cục tẩy",
  fe = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? g() : e === "pt" ? m() : e === "ch" ? h() : e === "de" ? b() : e === "es" ? x() : e === "fr" ? k() : e === "it" ? j() : e === "jp" ? q() : e === "pl" ? v() : e === "ru" ? z() : e === "uk" ? w() : P()
  },
  D = () => "Refund Policy",
  A = () => "Política de Reembolso",
  R = () => "退款政策",
  E = () => "Rückerstattungsrichtlinie",
  T = () => "Política de reembolso",
  G = () => "Politique de remboursement",
  I = () => "Politica di rimborso",
  B = () => "返金ポリシー",
  L = () => "Polityka zwrotów",
  C = () => "Политика возврата средств",
  F = () => "Політика повернення коштів",
  S = () => "Chính sách hoàn tiền",
  ce = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? D() : e === "pt" ? A() : e === "ch" ? R() : e === "de" ? E() : e === "es" ? T() : e === "fr" ? G() : e === "it" ? I() : e === "jp" ? B() : e === "pl" ? L() : e === "ru" ? C() : e === "uk" ? F() : S()
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
  ae = (r = {}, t = {}) => {
    const e = t.locale ?? n();
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
  ye = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? Z() : e === "pt" ? $() : e === "ch" ? ee() : e === "de" ? re() : e === "es" ? te() : e === "fr" ? ne() : e === "it" ? oe() : e === "jp" ? ue() : e === "pl" ? ie() : e === "ru" ? _e() : e === "uk" ? se() : pe()
  };
export {
  le as a, ce as b, fe as e, ae as r, ye as y
};