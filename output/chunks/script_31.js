import {
  g as o
} from "./B1vEyi0i.js";
import "./Cu0Q6Hwn.js";
import {
  o as s,
  b as c
} from "./Cp11ShwH.js";
import {
  b as f
} from "./Cq1WQH95.js";
import {
  r as i
} from "./BaHfsert.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "f3dcc3e771086c0f63d8ece84cd728044b2a0f0d"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new r.Error().stack;
    t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "0cc5ed0f-e12d-48d4-8a4e-b34d33d42427", r._sentryDebugIdIdentifier = "sentry-dbid-0cc5ed0f-e12d-48d4-8a4e-b34d33d42427")
  })()
} catch {}
const l = () => "Close",
  d = () => "Fechar",
  u = () => "关闭",
  a = () => "Schließen",
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
    return e === "en" ? l() : e === "pt" ? d() : e === "ch" ? u() : e === "de" ? a() : e === "es" ? p() : e === "fr" ? g() : e === "it" ? _() : e === "jp" ? b() : e === "pl" ? y() : e === "ru" ? h() : e === "uk" ? w() : m()
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