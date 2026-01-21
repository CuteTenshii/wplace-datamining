import {
  g as l
} from "./lNmZA2C_.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1677ff03-7575-4335-a6a6-27f7c97b9b33", e._sentryDebugIdIdentifier = "sentry-dbid-1677ff03-7575-4335-a6a6-27f7c97b9b33")
  })()
} catch {}
const i = e => `Copy alliance ID: #${e.allianceId}`,
  r = e => `Copiar ID da aliança: #${e.allianceId}`,
  c = e => `复制联盟 ID：#${e.allianceId}`,
  o = e => `Allianz-ID kopieren: #${e.allianceId}`,
  d = e => `Copiar ID de la alianza: #${e.allianceId}`,
  t = e => `Copier l’ID de l’alliance : #${e.allianceId}`,
  f = e => `Copia ID dell'alleanza: #${e.allianceId}`,
  _ = e => `アライアンスIDをコピー: #${e.allianceId}`,
  u = e => `Kopiuj ID sojuszu: #${e.allianceId}`,
  y = e => `Скопировать ID альянса: #${e.allianceId}`,
  I = e => `Скопіювати ID альянсу: #${e.allianceId}`,
  p = e => `Sao chép ID liên minh: #${e.allianceId}`,
  b = (e, n = {}) => {
    const a = n.locale ?? l();
    return a === "en" ? i(e) : a === "pt" ? r(e) : a === "ch" ? c(e) : a === "de" ? o(e) : a === "es" ? d(e) : a === "fr" ? t(e) : a === "it" ? f(e) : a === "jp" ? _(e) : a === "pl" ? u(e) : a === "ru" ? y(e) : a === "uk" ? I(e) : p(e)
  };
export {
  b as c
};