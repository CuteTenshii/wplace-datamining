import {
  g as p
} from "./Y6XeJOU-.js";
import "./Bbo7sPqH.js";
import {
  A as g,
  a as h,
  b as r,
  C as i
} from "./CuEZ6s8g.js";
import {
  i as w,
  r as v
} from "./DG2VKRMA.js";
import {
  d as s
} from "./Y9SFqxxU.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "987f325885ec99eb8c0fc190246a664bf2e822ff"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "243b5120-c14f-4fcb-97d0-141d32c32d04", e._sentryDebugIdIdentifier = "sentry-dbid-243b5120-c14f-4fcb-97d0-141d32c32d04")
  })()
} catch {}
const m = e => `Copy alliance ID: #${e.allianceId}`,
  u = e => `Copiar ID da aliança: #${e.allianceId}`,
  x = (e, o = {}) => (o.locale ?? p()) === "en" ? m(e) : u(e);
var y = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  T = i('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function H(e, o) {
  let l = v(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var t = g(),
    f = h(t);
  {
    var c = a => {
        var n = y();
        s(n, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...l
        })), r(a, n)
      },
      d = a => {
        var n = T();
        s(n, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...l
        })), r(a, n)
      };
    w(f, a => {
      o.filled ? a(c) : a(d, !1)
    })
  }
  r(e, t)
}
var b = i('<svg><path d="M160-120v-80h480v80H160Zm226-194L160-540l84-86 228 226-86 86Zm254-254L414-796l86-84 226 226-86 86Zm184 408L302-682l56-56 522 522-56 56Z"></path></svg>');

function D(e, o) {
  let l = v(o, ["$$slots", "$$events", "$$legacy"]);
  var t = b();
  s(t, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...l
  })), r(e, t)
}
var q = i('<svg><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"></path></svg>');

function M(e, o) {
  let l = v(o, ["$$slots", "$$events", "$$legacy"]);
  var t = q();
  s(t, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...l
  })), r(e, t)
}
export {
  H as C, D as G, M as T, x as c
};