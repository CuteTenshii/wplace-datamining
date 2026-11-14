import {
  t as e
} from "./LPb4E7Sx.js";
var t = `wplace:visitor-id`,
  n = `wplace:visit-sent`;

function r() {
  if (typeof crypto.randomUUID == `function`) return crypto.randomUUID();
  let e = crypto.getRandomValues(new Uint8Array(16));
  e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
  let t = Array.from(e, e => e.toString(16).padStart(2, `0`)).join(``);
  return `${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`
}
async function i(i, a = new Date) {
  let o, s = `${a.toISOString().slice(0,10)}:${i??0}`;
  try {
    if (o = localStorage.getItem(t), o || (o = r(), localStorage.setItem(t, o)), localStorage.getItem(n) === s) return
  } catch {
    return
  }
  let c = await e.postBrowserVisit(o);
  if (c != null && c.ok) try {
    localStorage.setItem(n, s)
  } catch {}
}
export {
  i as n, r as t
};