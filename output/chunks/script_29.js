import {
  g as v
} from "./DQw77beb.js";
import "./CSs50NID.js";
import {
  v as i,
  b as l,
  ay as g,
  a as u
} from "./CkE8vTi-.js";
import {
  b as r
} from "./NhG3EMiG.js";
import {
  r as c,
  i as w
} from "./DJN_gXRC.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "224624400a67b064cf33057a07336c317101aecf"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "59573a59-89e2-4bba-ab58-82ec760b86bb", e._sentryDebugIdIdentifier = "sentry-dbid-59573a59-89e2-4bba-ab58-82ec760b86bb")
  })()
} catch {}
const h = () => "Pixels painted",
  T = () => "Pixels pintados",
  B = (e = {}, t = {}) => (t.locale ?? v()) === "en" ? h() : T(),
  b = () => "Description",
  m = () => "Descrição",
  E = (e = {}, t = {}) => (t.locale ?? v()) === "en" ? b() : m(),
  q = e => `Copy alliance ID: #${e.allianceId}`,
  _ = e => `Copiar ID da aliança: #${e.allianceId}`,
  k = (e, t = {}) => (t.locale ?? v()) === "en" ? q(e) : _(e);
var y = i('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function G(e, t) {
  let o = c(t, ["$$slots", "$$events", "$$legacy"]);
  var n = y();
  r(n, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...o
  })), l(e, n)
}
var $ = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  Z = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function P(e, t) {
  let o = c(t, ["$$slots", "$$events", "$$legacy", "filled"]);
  var n = g(),
    p = u(n);
  {
    var d = a => {
        var s = $();
        r(s, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...o
        })), l(a, s)
      },
      f = a => {
        var s = Z();
        r(s, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...o
        })), l(a, s)
      };
    w(p, a => {
      t.filled ? a(d) : a(f, !1)
    })
  }
  l(e, n)
}
var x = i('<svg><path d="M160-120v-80h480v80H160Zm226-194L160-540l84-86 228 226-86 86Zm254-254L414-796l86-84 226 226-86 86Zm184 408L302-682l56-56 522 522-56 56Z"></path></svg>');

function R(e, t) {
  let o = c(t, ["$$slots", "$$events", "$$legacy"]);
  var n = x();
  r(n, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...o
  })), l(e, n)
}
var I = i('<svg><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"></path></svg>');

function S(e, t) {
  let o = c(t, ["$$slots", "$$events", "$$legacy"]);
  var n = I();
  r(n, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...o
  })), l(e, n)
}
export {
  P as C, R as G, G as L, S as T, k as c, E as d, B as p
};