import {
  g as l
} from "./CxGAPZJ7.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "aa4c5126665948c178117465fb480b1b818fb90b"
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
const c = e => `Copy alliance ID: #${e.allianceId}`,
  i = e => `Copiar ID da aliança: #${e.allianceId}`,
  r = e => `复制联盟 ID：#${e.allianceId}`,
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
    return a === "en" ? c(e) : a === "pt" ? i(e) : a === "ch" ? r(e) : a === "de" ? o(e) : a === "es" ? d(e) : a === "fr" ? t(e) : a === "it" ? f(e) : a === "jp" ? _(e) : a === "pl" ? u(e) : a === "ru" ? y(e) : a === "uk" ? I(e) : p(e)
  };
export {
  b as c
};