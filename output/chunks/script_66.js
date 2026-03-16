import {
  g as n
} from "./DawG3Hoa.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a1c3c518b70a92c25ec2b85baf48e9981ce90ce8"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "e8766c05-867d-4e65-ae94-0e09d1aad9d4", e._sentryDebugIdIdentifier = "sentry-dbid-e8766c05-867d-4e65-ae94-0e09d1aad9d4")
  } catch {}
})();
const s = () => "Patch notes",
  o = () => "Notas de atualização",
  u = () => "更新日志",
  c = () => "Versionshinweise",
  a = () => "Notas de actualización",
  i = () => "Notes de mise à jour",
  l = () => "Note di aggiornamento",
  _ = () => "リリースノート",
  f = () => "Informacje o aktualizacji",
  p = () => "Примечания к обновлению",
  d = () => "Нотатки про оновлення",
  h = () => "Ghi chú cập nhật",
  L = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? s() : t === "pt" ? o() : t === "ch" ? u() : t === "de" ? c() : t === "es" ? a() : t === "fr" ? i() : t === "it" ? l() : t === "jp" ? _() : t === "pl" ? f() : t === "ru" ? p() : t === "uk" ? d() : h()
  },
  b = () => "Latest",
  g = () => "Mais recente",
  y = () => "最新",
  j = () => "Neueste",
  m = () => "Último",
  w = () => "Derniers",
  N = () => "Ultimi",
  k = () => "最新",
  I = () => "Najnowsze",
  D = () => "Последние",
  E = () => "Останні",
  v = () => "Mới nhất",
  T = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? b() : t === "pt" ? g() : t === "ch" ? y() : t === "de" ? j() : t === "es" ? m() : t === "fr" ? w() : t === "it" ? N() : t === "jp" ? k() : t === "pl" ? I() : t === "ru" ? D() : t === "uk" ? E() : v()
  };
export {
  T as l, L as p
};