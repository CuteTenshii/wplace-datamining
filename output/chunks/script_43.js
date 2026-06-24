import {
  g as e
} from "./BhCkpOlh.js";
const u = () => "Payment succeeded",
  o = () => "Pagamento bem sucedido",
  _ = () => "支付成功",
  s = () => "Zahlung erfolgreich",
  c = () => "Pago realizado correctamente",
  p = () => "Paiement réussi",
  a = () => "Pagamento riuscito",
  i = () => "支払いが完了しました。",
  y = () => "Płatność powiodła się",
  f = () => "Платёж прошёл успешно",
  d = () => "Платіж виконано успішно",
  h = () => "Thanh toán thành công",
  x = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? u() : r === "pt" ? o() : r === "ch" ? _() : r === "de" ? s() : r === "es" ? c() : r === "fr" ? p() : r === "it" ? a() : r === "jp" ? i() : r === "pl" ? y() : r === "ru" ? f() : r === "uk" ? d() : h()
  },
  m = () => "Thank you for your support!",
  k = () => "Obrigado pelo seu apoio!",
  l = () => "感谢你的支持！",
  g = () => "Danke für deine Unterstützung!",
  P = () => "¡Gracias por tu apoyo!",
  j = () => "Merci pour votre soutien !",
  z = () => "Grazie per il tuo supporto!",
  b = () => "ご支援ありがとうございます！",
  v = () => "Dziękujemy za wsparcie!",
  w = () => "Спасибо за вашу поддержку!",
  D = () => "Дякуємо за вашу підтримку!",
  G = () => "Cảm ơn bạn đã ủng hộ!",
  C = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? m() : r === "pt" ? k() : r === "ch" ? l() : r === "de" ? g() : r === "es" ? P() : r === "fr" ? j() : r === "it" ? z() : r === "jp" ? b() : r === "pl" ? v() : r === "ru" ? w() : r === "uk" ? D() : G()
  };
export {
  x as p, C as t
};