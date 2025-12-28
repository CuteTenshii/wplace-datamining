import {
  g as o
} from "./CO85j776.js";
import "./C4ylbf71.js";
import {
  o as s,
  b as c
} from "./C0b57ARY.js";
import {
  b as i
} from "./DuDgfQFI.js";
import {
  r as f
} from "./BBK6kTAl.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "e61b7999f3615b75da925cd12f2c77d312c3e072"
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
  u = () => "Fechar",
  d = () => "关闭",
  a = () => "Schließen",
  p = () => "Cerrar",
  g = () => "Fermer",
  b = () => "Chiudi",
  _ = () => "閉じる",
  y = () => "Zamknij",
  h = () => "Закрыть",
  w = () => "Закрити",
  m = () => "Đóng",
  C = (r = {}, t = {}) => {
    const e = t.locale ?? o();
    return e === "en" ? l() : e === "pt" ? u() : e === "ch" ? d() : e === "de" ? a() : e === "es" ? p() : e === "fr" ? g() : e === "it" ? b() : e === "jp" ? _() : e === "pl" ? y() : e === "ru" ? h() : e === "uk" ? w() : m()
  };
var v = s('<svg><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"></path></svg>');

function D(r, t) {
  let e = f(t, ["$$slots", "$$events", "$$legacy"]);
  var n = v();
  i(n, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), c(r, n)
}
export {
  D as A, C as c
};