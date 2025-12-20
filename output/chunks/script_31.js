import {
  g as o
} from "./CQePO0m_.js";
import "./CH7bPVZ-.js";
import {
  o as s,
  b as f
} from "./lghyzkeh.js";
import {
  b as c
} from "./B41b44vU.js";
import {
  r as i
} from "./9N34mgL9.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "50c680b400b1bbcc8448fbf904e79ce0ac9a7ba9"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new r.Error().stack;
    t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "017a4676-09ec-4a45-bff7-7159157dfff5", r._sentryDebugIdIdentifier = "sentry-dbid-017a4676-09ec-4a45-bff7-7159157dfff5")
  })()
} catch {}
const l = () => "Close",
  u = () => "Fechar",
  a = () => "关闭",
  d = () => "Schließen",
  p = () => "Cerrar",
  b = () => "Fermer",
  g = () => "Chiudi",
  _ = () => "閉じる",
  y = () => "Zamknij",
  h = () => "Закрыть",
  w = () => "Закрити",
  m = () => "Đóng",
  C = (r = {}, t = {}) => {
    const e = t.locale ?? o();
    return e === "en" ? l() : e === "pt" ? u() : e === "ch" ? a() : e === "de" ? d() : e === "es" ? p() : e === "fr" ? b() : e === "it" ? g() : e === "jp" ? _() : e === "pl" ? y() : e === "ru" ? h() : e === "uk" ? w() : m()
  };
var v = s('<svg><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"></path></svg>');

function D(r, t) {
  let e = i(t, ["$$slots", "$$events", "$$legacy"]);
  var n = v();
  c(n, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), f(r, n)
}
export {
  D as A, C as c
};