import {
  g as r
} from "./BhCkpOlh.js";
const s = () => "Latest",
  o = () => "Mais recente",
  u = () => "最新",
  c = () => "Neueste",
  a = () => "Último",
  i = () => "Derniers",
  _ = () => "Ultimi",
  l = () => "最新",
  p = () => "Najnowsze",
  f = () => "Последние",
  h = () => "Останні",
  d = () => "Mới nhất",
  I = (n = {}, e = {}) => {
    const t = e.locale ?? r();
    return t === "en" ? s() : t === "pt" ? o() : t === "ch" ? u() : t === "de" ? c() : t === "es" ? a() : t === "fr" ? i() : t === "it" ? _() : t === "jp" ? l() : t === "pl" ? p() : t === "ru" ? f() : t === "uk" ? h() : d()
  },
  j = () => "Patch notes",
  m = () => "Notas de atualização",
  N = () => "更新日志",
  k = () => "Versionshinweise",
  g = () => "Notas de actualización",
  z = () => "Notes de mise à jour",
  v = () => "Note di aggiornamento",
  w = () => "リリースノート",
  L = () => "Informacje o aktualizacji",
  M = () => "Примечания к обновлению",
  x = () => "Нотатки про оновлення",
  D = () => "Ghi chú cập nhật",
  P = (n = {}, e = {}) => {
    const t = e.locale ?? r();
    return t === "en" ? j() : t === "pt" ? m() : t === "ch" ? N() : t === "de" ? k() : t === "es" ? g() : t === "fr" ? z() : t === "it" ? v() : t === "jp" ? w() : t === "pl" ? L() : t === "ru" ? M() : t === "uk" ? x() : D()
  };
export {
  I as l, P as p
};