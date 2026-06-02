import {
  g as r
} from "./BhCkpOlh.js";
const i = () => "Phone verification",
  t = () => "Verificação de telefone",
  o = () => "电话验证",
  c = () => "Telefon-Verifizierung",
  f = () => "Verificación de teléfono",
  u = () => "Vérification du téléphone",
  a = () => "Verifica del telefono",
  _ = () => "電話番号の確認",
  p = () => "Weryfikacja telefonu",
  s = () => "Подтверждение телефона",
  h = () => "Підтвердження телефону",
  v = () => "Xác minh số điện thoại",
  V = (l = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? i() : e === "pt" ? t() : e === "ch" ? o() : e === "de" ? c() : e === "es" ? f() : e === "fr" ? u() : e === "it" ? a() : e === "jp" ? _() : e === "pl" ? p() : e === "ru" ? s() : e === "uk" ? h() : v()
  };
export {
  V as p
};