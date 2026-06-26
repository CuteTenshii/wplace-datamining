import {
  g as _
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  a as s,
  w as p,
  q as f,
  f as m
} from "./DmPVOt2G.js";
import {
  d as l
} from "./C9hRcinp.js";
import {
  r as i
} from "./D4ILXblz.js";
import {
  i as g
} from "./CPZ_RRGr.js";
const h = () => "Ban appeal",
  b = () => "Revisão de banimento",
  w = () => "封禁申诉",
  d = () => "Bann-Einspruch",
  q = () => "Apelación de ban",
  $ = () => "Recours de bannissement",
  x = () => "Ricorso contro il ban",
  T = () => "BANの異議申立て",
  Z = () => "Odwołanie od bana",
  B = () => "Апелляция на бан",
  H = () => "Апеляція на бан",
  C = () => "Kháng cáo lệnh cấm",
  L = (o = {}, t = {}) => {
    const r = t.locale ?? _();
    return r === "en" ? h() : r === "pt" ? b() : r === "ch" ? w() : r === "de" ? d() : r === "es" ? q() : r === "fr" ? $() : r === "it" ? x() : r === "jp" ? T() : r === "pl" ? Z() : r === "ru" ? B() : r === "uk" ? H() : C()
  };
var k = new Set(["$$slots", "$$events", "$$legacy"]),
  M = p('<svg><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');

function N(o, t) {
  let r = i(t, k);
  var a = M();
  l(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...r
  })), s(o, a)
}
var R = new Set(["$$slots", "$$events", "$$legacy", "filled"]),
  j = p('<svg><path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Z"></path></svg>'),
  y = p('<svg><path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Zm300-440Zm86 160h134v-240H510l-16-80H280v240h290l16 80Z"></path></svg>');

function O(o, t) {
  let r = i(t, R);
  var a = f(),
    c = m(a);
  {
    var v = e => {
        var n = j();
        l(n, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...r
        })), s(e, n)
      },
      u = e => {
        var n = y();
        l(n, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...r
        })), s(e, n)
      };
    g(c, e => {
      t.filled ? e(v) : e(u, -1)
    })
  }
  s(o, a)
}
export {
  N as C, O as F, L as b
};