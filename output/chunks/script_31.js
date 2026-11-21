import {
  r as e,
  t
} from "./DI0-dq1F.js";
import {
  t as n
} from "./BVLD6FI9.js";
var r = `wplace:visit-sent`,
  i = `wplace:touch-sent`;

function a() {
  if (typeof crypto.randomUUID == `function`) return crypto.randomUUID();
  let e = crypto.getRandomValues(new Uint8Array(16));
  e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
  let t = Array.from(e, e => e.toString(16).padStart(2, `0`)).join(``);
  return `${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`
}

function o() {
  try {
    let e = localStorage.getItem(t);
    return e || (e = a(), localStorage.setItem(t, e)), e
  } catch {
    return null
  }
}

function s({
  first: e,
  last: t
}) {
  let n = [];
  return e.unknown || n.push({
    kind: `first`,
    ...e
  }), t && n.push({
    kind: `last`,
    ...t
  }), n
}
async function c(t, a, c = new Date) {
  var l;
  let u = o();
  if (!u) return;
  let d = `${c.toISOString().slice(0,10)}:${t??0}`,
    f = e(t, c),
    p = f ? s(f) : [],
    m = f && p.length ? `${t??0}:${f.first.at}:${((l=f.last)==null?void 0:l.at)??``}` : null,
    h;
  try {
    if (h = !!m && localStorage.getItem(i) !== m, localStorage.getItem(r) === d && !h) return
  } catch {
    return
  }
  let g = await n.postBrowserVisit(u, a, h ? p : void 0);
  if (g != null && g.ok) try {
    localStorage.setItem(r, d), h && m && localStorage.setItem(i, m)
  } catch {}
}
export {
  a as n, c as r, o as t
};