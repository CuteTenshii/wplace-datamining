import {
  g as o
} from "./CHxYu7UU.js";
import "./CAirFcp8.js";
import {
  o as s,
  b as c
} from "./BW4WXvX9.js";
import {
  b as f
} from "./Dx8K2xEf.js";
import {
  r as i
} from "./YRRwmdc-.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "ada152f6c93ea91d04a55442a56d263a5f091eaf"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new r.Error().stack;
    t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "9d22c1d5-a3fa-4d72-b11e-6c1dea5c0dc4", r._sentryDebugIdIdentifier = "sentry-dbid-9d22c1d5-a3fa-4d72-b11e-6c1dea5c0dc4")
  })()
} catch {}
const l = () => "Close",
  a = () => "Fechar",
  u = () => "关闭",
  d = () => "Schließen",
  p = () => "Cerrar",
  g = () => "Fermer",
  _ = () => "Chiudi",
  b = () => "閉じる",
  y = () => "Zamknij",
  h = () => "Закрыть",
  w = () => "Закрити",
  m = () => "Đóng",
  C = (r = {}, t = {}) => {
    const e = t.locale ?? o();
    return e === "en" ? l() : e === "pt" ? a() : e === "ch" ? u() : e === "de" ? d() : e === "es" ? p() : e === "fr" ? g() : e === "it" ? _() : e === "jp" ? b() : e === "pl" ? y() : e === "ru" ? h() : e === "uk" ? w() : m()
  };
var v = s('<svg><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"></path></svg>');

function D(r, t) {
  let e = i(t, ["$$slots", "$$events", "$$legacy"]);
  var n = v();
  f(n, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), c(r, n)
}
export {
  D as A, C as c
};