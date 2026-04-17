import {
  g as n
} from "./BQlqcz55.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "dc0186d26e0c2d626ef1b4331d86a985eea98c24"
    };
    var r = new t.Error().stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "993d5df6-6e47-4522-a281-4a70aec8b474", t._sentryDebugIdIdentifier = "sentry-dbid-993d5df6-6e47-4522-a281-4a70aec8b474")
  } catch {}
})();
const o = () => "Eraser",
  u = () => "Borracha",
  s = () => "橡皮擦",
  i = () => "Radierer",
  _ = () => "Borrador",
  p = () => "Gomme",
  l = () => "Gomma",
  c = () => "消しゴム",
  d = () => "Gumka",
  a = () => "Ластик",
  f = () => "Гумка",
  g = () => "Cục tẩy",
  ce = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? o() : e === "pt" ? u() : e === "ch" ? s() : e === "de" ? i() : e === "es" ? _() : e === "fr" ? p() : e === "it" ? l() : e === "jp" ? c() : e === "pl" ? d() : e === "ru" ? a() : e === "uk" ? f() : g()
  },
  y = () => "Not enough Droplets",
  h = () => "Droplets insuficientes",
  m = () => "水滴数量不足",
  x = () => "Nicht genug Droplets",
  b = () => "No tienes suficientes gotas",
  k = () => "Pas assez de droplets",
  q = () => "Gocce insufficienti",
  v = () => "ドロップレットが足りません。",
  z = () => "Za mało kropli",
  j = () => "Недостаточно droplets",
  D = () => "Недостатньо дроплетів",
  P = () => "Không đủ droplets",
  de = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? y() : e === "pt" ? h() : e === "ch" ? m() : e === "de" ? x() : e === "es" ? b() : e === "fr" ? k() : e === "it" ? q() : e === "jp" ? v() : e === "pl" ? z() : e === "ru" ? j() : e === "uk" ? D() : P()
  },
  w = () => "Refund Policy",
  R = () => "Política de Reembolso",
  E = () => "退款政策",
  G = () => "Rückerstattungsrichtlinie",
  I = () => "Política de reembolso",
  N = () => "Politique de remboursement",
  B = () => "Politica di rimborso",
  L = () => "返金ポリシー",
  T = () => "Polityka zwrotów",
  A = () => "Политика возврата средств",
  C = () => "Політика повернення коштів",
  F = () => "Chính sách hoàn tiền",
  ae = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? w() : e === "pt" ? R() : e === "ch" ? E() : e === "de" ? G() : e === "es" ? I() : e === "fr" ? N() : e === "it" ? B() : e === "jp" ? L() : e === "pl" ? T() : e === "ru" ? A() : e === "uk" ? C() : F()
  },
  S = () => "For refund requests and processing details, please see our",
  V = () => "Para pedidos de reembolso, consulte nossa",
  Y = () => "有关退款请求和处理详情，请参阅我们的",
  K = () => "Für Rückerstattungen und Details siehe unsere",
  O = () => "Para solicitudes de reembolso y más detalles, consulta nuestra",
  Z = () => "Pour les demandes de remboursement et les détails de traitement, consultez notre",
  H = () => "Per richieste di rimborso, consulta la nostra",
  J = () => "返金の申請方法と詳細については、こちらをご覧ください:",
  M = () => "Aby uzyskać informacje o zwrotach, zobacz naszą",
  Q = () => "Для запросов на возврат средств и деталей обработки см. нашу",
  U = () => "Для запитів на повернення та деталей обробки дивіться нашу",
  W = () => "Để yêu cầu hoàn tiền và chi tiết xử lý, hãy xem",
  fe = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? S() : e === "pt" ? V() : e === "ch" ? Y() : e === "de" ? K() : e === "es" ? O() : e === "fr" ? Z() : e === "it" ? H() : e === "jp" ? J() : e === "pl" ? M() : e === "ru" ? Q() : e === "uk" ? U() : W()
  },
  X = () => "You gain 1 droplet per pixel painted and 500 Droplets per level",
  $ = () => "Você ganha 1 droplet por pixel pintado e 500 droplets por level",
  ee = () => "你每绘制 1 个像素可获得 1 个水滴，每升 1 级可获得 500 个水滴",
  re = () => "Du erhältst 1 Droplet pro gemaltem Pixel und 500 Droplets pro Level",
  te = () => "Ganas 1 gota por píxel pintado y 500 gotas por nivel",
  ne = () => "Vous gagnez 1 droplet par pixel peint et 500 droplets par niveau",
  oe = () => "Guadagni 1 goccia per ogni pixel dipinto e 500 gocce per livello",
  ue = () => "ピクセルを1つ塗るごとにドロップレットを1つ、レベルごとに500ドロップレットを獲得します。",
  se = () => "Otrzymujesz 1 kroplę za każdy pomalowany piksel i 500 kropli za każdy poziom",
  ie = () => "Вы получаете 1 droplet за каждый нарисованный пиксель и 500 droplets за уровень",
  _e = () => "Ви отримуєте 1 дроплет за кожен намальований піксель і 500 дроплетів за рівень",
  pe = () => "Bạn nhận 1 droplet cho mỗi pixel tô và 500 droplets mỗi cấp độ",
  ge = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? X() : e === "pt" ? $() : e === "ch" ? ee() : e === "de" ? re() : e === "es" ? te() : e === "fr" ? ne() : e === "it" ? oe() : e === "jp" ? ue() : e === "pl" ? se() : e === "ru" ? ie() : e === "uk" ? _e() : pe()
  };
export {
  ae as a, ce as e, de as n, fe as r, ge as y
};