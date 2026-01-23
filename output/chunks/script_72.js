import {
  g as l
} from "./BWURdrR3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "57f41670f2805f713b0da8f3636738eb734a70e1"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1677ff03-7575-4335-a6a6-27f7c97b9b33", e._sentryDebugIdIdentifier = "sentry-dbid-1677ff03-7575-4335-a6a6-27f7c97b9b33")
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
  b = (e, a = {}) => {
    const n = a.locale ?? l();
    return n === "en" ? i(e) : n === "pt" ? r(e) : n === "ch" ? c(e) : n === "de" ? o(e) : n === "es" ? d(e) : n === "fr" ? t(e) : n === "it" ? f(e) : n === "jp" ? _(e) : n === "pl" ? u(e) : n === "ru" ? y(e) : n === "uk" ? I(e) : p(e)
  };
export {
  b as c
};