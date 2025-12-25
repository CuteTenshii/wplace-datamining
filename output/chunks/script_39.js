import {
  g as c
} from "./E8BzAKy9.js";
import "./4LXgBC_f.js";
import {
  o as r,
  b as o
} from "./Asu1Vc5j.js";
import {
  b as t
} from "./DHEGICqL.js";
import {
  r as i
} from "./DlbOGcoQ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ee860fc816b3b13288b485f763a0872cd79cba7b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8bd67b5c-6705-4582-b4ed-f99d823f5b1f", e._sentryDebugIdIdentifier = "sentry-dbid-8bd67b5c-6705-4582-b4ed-f99d823f5b1f")
  })()
} catch {}
const d = e => `Copy alliance ID: #${e.allianceId}`,
  f = e => `Copiar ID da aliança: #${e.allianceId}`,
  s = e => `复制联盟 ID：#${e.allianceId}`,
  _ = e => `Allianz-ID kopieren: #${e.allianceId}`,
  p = e => `Copiar ID de la alianza: #${e.allianceId}`,
  u = e => `Copier l’ID de l’alliance : #${e.allianceId}`,
  y = e => `Copia ID dell'alleanza: #${e.allianceId}`,
  I = e => `アライアンスIDをコピー: #${e.allianceId}`,
  b = e => `Kopiuj ID sojuszu: #${e.allianceId}`,
  g = e => `Скопировать ID альянса: #${e.allianceId}`,
  v = e => `Скопіювати ID альянсу: #${e.allianceId}`,
  $ = e => `Sao chép ID liên minh: #${e.allianceId}`,
  C = (e, a = {}) => {
    const l = a.locale ?? c();
    return l === "en" ? d(e) : l === "pt" ? f(e) : l === "ch" ? s(e) : l === "de" ? _(e) : l === "es" ? p(e) : l === "fr" ? u(e) : l === "it" ? y(e) : l === "jp" ? I(e) : l === "pl" ? b(e) : l === "ru" ? g(e) : l === "uk" ? v(e) : $(e)
  };
var m = r('<svg><path d="M160-120v-80h480v80H160Zm226-194L160-540l84-86 228 226-86 86Zm254-254L414-796l86-84 226 226-86 86Zm184 408L302-682l56-56 522 522-56 56Z"></path></svg>');

function x(e, a) {
  let l = i(a, ["$$slots", "$$events", "$$legacy"]);
  var n = m();
  t(n, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...l
  })), o(e, n)
}
var h = r('<svg><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"></path></svg>');

function E(e, a) {
  let l = i(a, ["$$slots", "$$events", "$$legacy"]);
  var n = h();
  t(n, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...l
  })), o(e, n)
}
export {
  x as G, E as T, C as c
};