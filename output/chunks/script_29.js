import {
  g as i
} from "./BhCkpOlh.js";
import {
  e as o,
  g as c,
  y as f,
  i as u,
  h as t
} from "./B20EPEO9.js";
const a = () => "Phone verification",
  s = () => "Verificação de telefone",
  _ = () => "电话验证",
  p = () => "Telefon-Verifizierung",
  h = () => "Verificación de teléfono",
  l = () => "Vérification du téléphone",
  v = () => "Verifica del telefono",
  m = () => "電話番号の確認",
  d = () => "Weryfikacja telefonu",
  g = () => "Подтверждение телефона",
  k = () => "Підтвердження телефону",
  V = () => "Xác minh số điện thoại",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? i();
    return e === "en" ? a() : e === "pt" ? s() : e === "ch" ? _() : e === "de" ? p() : e === "es" ? h() : e === "fr" ? l() : e === "it" ? v() : e === "jp" ? m() : e === "pl" ? d() : e === "ru" ? g() : e === "uk" ? k() : V()
  },
  M = 300;

function A(n) {
  let r = o(c(n()));
  return f(() => {
    if (n()) {
      t(r, !0);
      return
    }
    const e = setTimeout(() => t(r, !1), M);
    return () => clearTimeout(e)
  }), {
    get current() {
      return u(r)
    }
  }
}
export {
  A as k, y as p
};