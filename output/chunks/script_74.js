import {
  g as i
} from "./BZGVaLJf.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e0127cf3e7a9cd170d72434c8831b6836f9b0e1e"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2cb492c4-da32-40ef-bd46-c760af43f1f8", e._sentryDebugIdIdentifier = "sentry-dbid-2cb492c4-da32-40ef-bd46-c760af43f1f8")
  } catch {}
})();
const t = () => "Enter a valid user ID",
  d = () => "Informe um ID válido",
  s = () => "请输入有效的用户 ID",
  u = () => "Gib eine gültige Benutzer-ID ein",
  o = () => "Introduce un ID de usuario válido",
  _ = () => "Entrez un ID d’utilisateur valide",
  c = () => "Inserisci un ID valido",
  f = () => "有効なユーザーIDを入力してください。",
  l = () => "Wprowadź prawidłowe ID użytkownika",
  a = () => "Введите корректный ID пользователя",
  p = () => "Введіть коректний ID користувача",
  v = () => "Nhập một ID người dùng hợp lệ",
  z = (e = {}, n = {}) => {
    const r = n.locale ?? i();
    return r === "en" ? t() : r === "pt" ? d() : r === "ch" ? s() : r === "de" ? u() : r === "es" ? o() : r === "fr" ? _() : r === "it" ? c() : r === "jp" ? f() : r === "pl" ? l() : r === "ru" ? a() : r === "uk" ? p() : v()
  },
  I = () => "Reddit",
  m = () => "Reddit",
  b = () => "Reddit",
  D = () => "Reddit",
  g = () => "Reddit",
  R = () => "Reddit",
  y = () => "Reddit",
  h = () => "Reddit",
  w = () => "Reddit",
  k = () => "Reddit",
  E = () => "Reddit",
  j = () => "Reddit",
  L = (e = {}, n = {}) => {
    const r = n.locale ?? i();
    return r === "en" ? I() : r === "pt" ? m() : r === "ch" ? b() : r === "de" ? D() : r === "es" ? g() : r === "fr" ? R() : r === "it" ? y() : r === "jp" ? h() : r === "pl" ? w() : r === "ru" ? k() : r === "uk" ? E() : j()
  };
export {
  z as p, L as r
};