import {
  g as l
} from "./CQ_gfREe.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e6efb14bb5e52798ae71a524d6603a123d144219"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "324233cd-ca74-4b7f-9e3a-affcd97c4ef0", e._sentryDebugIdIdentifier = "sentry-dbid-324233cd-ca74-4b7f-9e3a-affcd97c4ef0")
  })()
} catch {}
const i = e => `Copy alliance ID: #${e.allianceId}`,
  c = e => `Copiar ID da aliança: #${e.allianceId}`,
  r = e => `复制联盟 ID：#${e.allianceId}`,
  d = e => `Allianz-ID kopieren: #${e.allianceId}`,
  o = e => `Copiar ID de la alianza: #${e.allianceId}`,
  t = e => `Copier l’ID de l’alliance : #${e.allianceId}`,
  f = e => `Copia ID dell'alleanza: #${e.allianceId}`,
  _ = e => `アライアンスIDをコピー: #${e.allianceId}`,
  u = e => `Kopiuj ID sojuszu: #${e.allianceId}`,
  y = e => `Скопировать ID альянса: #${e.allianceId}`,
  I = e => `Скопіювати ID альянсу: #${e.allianceId}`,
  p = e => `Sao chép ID liên minh: #${e.allianceId}`,
  b = (e, n = {}) => {
    const a = n.locale ?? l();
    return a === "en" ? i(e) : a === "pt" ? c(e) : a === "ch" ? r(e) : a === "de" ? d(e) : a === "es" ? o(e) : a === "fr" ? t(e) : a === "it" ? f(e) : a === "jp" ? _(e) : a === "pl" ? u(e) : a === "ru" ? y(e) : a === "uk" ? I(e) : p(e)
  };
export {
  b as c
};