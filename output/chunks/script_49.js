import {
  g as n
} from "./CpNXwF3K.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cfa0387f7130e8b16c3d20b0694a74c32ca6dc49"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "5e55f805-801d-468d-93e7-0a6fcf9fa52d", e._sentryDebugIdIdentifier = "sentry-dbid-5e55f805-801d-468d-93e7-0a6fcf9fa52d")
  } catch {}
})();
const s = () => "Latest",
  o = () => "Mais recente",
  u = () => "最新",
  c = () => "Neueste",
  a = () => "Último",
  i = () => "Derniers",
  f = () => "Ultimi",
  l = () => "最新",
  _ = () => "Najnowsze",
  p = () => "Последние",
  d = () => "Останні",
  h = () => "Mới nhất",
  L = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? s() : t === "pt" ? o() : t === "ch" ? u() : t === "de" ? c() : t === "es" ? a() : t === "fr" ? i() : t === "it" ? f() : t === "jp" ? l() : t === "pl" ? _() : t === "ru" ? p() : t === "uk" ? d() : h()
  },
  g = () => "Patch notes",
  b = () => "Notas de atualização",
  y = () => "更新日志",
  j = () => "Versionshinweise",
  m = () => "Notas de actualización",
  w = () => "Notes de mise à jour",
  N = () => "Note di aggiornamento",
  k = () => "リリースノート",
  I = () => "Informacje o aktualizacji",
  D = () => "Примечания к обновлению",
  E = () => "Нотатки про оновлення",
  v = () => "Ghi chú cập nhật",
  T = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? g() : t === "pt" ? b() : t === "ch" ? y() : t === "de" ? j() : t === "es" ? m() : t === "fr" ? w() : t === "it" ? N() : t === "jp" ? k() : t === "pl" ? I() : t === "ru" ? D() : t === "uk" ? E() : v()
  };
export {
  L as l, T as p
};