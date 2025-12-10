import {
  g as o
} from "./DqmGa208.js";
import "./CmoIL2IL.js";
import {
  o as s,
  b as c
} from "./D97WGl3O.js";
import {
  b as i
} from "./BgiljoBh.js";
import {
  r as l
} from "./CeGBFfcL.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "4a4894320a12997d7c10bab38a71bb767b99274e"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new r.Error().stack;
    t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "43e5631b-30a0-4551-b06e-cc41fd780c1d", r._sentryDebugIdIdentifier = "sentry-dbid-43e5631b-30a0-4551-b06e-cc41fd780c1d")
  })()
} catch {}
const f = () => "Close",
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
    return e === "en" ? f() : e === "pt" ? u() : e === "ch" ? a() : e === "de" ? d() : e === "es" ? p() : e === "fr" ? b() : e === "it" ? g() : e === "jp" ? _() : e === "pl" ? y() : e === "ru" ? h() : e === "uk" ? w() : m()
  };
var v = s('<svg><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"></path></svg>');

function D(r, t) {
  let e = l(t, ["$$slots", "$$events", "$$legacy"]);
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