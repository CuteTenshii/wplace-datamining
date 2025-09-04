import {
  g as c
} from "./C5GsJ62f.js";
import "./Bzak7iHL.js";
import {
  v,
  b as a,
  aK as q,
  a as h
} from "./apxRKl0u.js";
import {
  b as n
} from "./DRcRj3o9.js";
import {
  r as i,
  i as f
} from "./DBMZVJyA.js";
const T = () => "Pixels painted",
  w = () => "Pixels pintados",
  D = (t = {}, o = {}) => (o.locale ?? c()) === "en" ? T() : w(),
  d = () => "Description",
  $ = () => "Descrição",
  G = (t = {}, o = {}) => (o.locale ?? c()) === "en" ? d() : $(),
  u = t => `Copy alliance ID: #${t.allianceId}`,
  _ = t => `Copiar ID da aliança: #${t.allianceId}`,
  P = (t, o = {}) => (o.locale ?? c()) === "en" ? u(t) : _(t);
var Z = v('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function k(t, o) {
  let e = i(o, ["$$slots", "$$events", "$$legacy"]);
  var r = Z();
  n(r, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), a(t, r)
}
var x = v('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>'),
  C = v('<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>');

function K(t, o) {
  let e = i(o, ["$$slots", "$$events", "$$legacy", "filled"]);
  var r = q(),
    p = h(r);
  {
    var g = s => {
        var l = x();
        n(l, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...e
        })), a(s, l)
      },
      m = s => {
        var l = C();
        n(l, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...e
        })), a(s, l)
      };
    f(p, s => {
      o.filled ? s(g) : s(m, !1)
    })
  }
  a(t, r)
}
var y = v('<svg><path d="M160-120v-80h480v80H160Zm226-194L160-540l84-86 228 226-86 86Zm254-254L414-796l86-84 226 226-86 86Zm184 408L302-682l56-56 522 522-56 56Z"></path></svg>');

function O(t, o) {
  let e = i(o, ["$$slots", "$$events", "$$legacy"]);
  var r = y();
  n(r, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), a(t, r)
}
var I = v('<svg><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"></path></svg>');

function Q(t, o) {
  let e = i(o, ["$$slots", "$$events", "$$legacy"]);
  var r = I();
  n(r, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), a(t, r)
}
export {
  K as C, O as G, k as L, Q as T, P as c, G as d, D as p
};