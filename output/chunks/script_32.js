import {
  i as e,
  r as t,
  t as n
} from "./DJf9i38S.js";
import {
  t as r
} from "./Mko_jewC.js";
var i = `wplace:visit-sent`,
  a = `wplace:touch-sent`;

function o() {
  try {
    let e = localStorage.getItem(n);
    return e || (e = t(), localStorage.setItem(n, e)), e
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
async function c(t, n, c = new Date) {
  var l;
  let u = o();
  if (!u) return;
  let d = `${c.toISOString().slice(0,10)}:${t??0}`,
    f = e(t, c),
    p = f ? s(f) : [],
    m = f && p.length ? `${t??0}:${f.first.at}:${((l=f.last)==null?void 0:l.at)??``}` : null,
    h;
  try {
    if (h = !!m && localStorage.getItem(a) !== m, localStorage.getItem(i) === d && !h) return
  } catch {
    return
  }
  let g = await r.postBrowserVisit(u, n, h ? p : void 0);
  if (g != null && g.ok) try {
    localStorage.setItem(i, d), h && m && localStorage.setItem(a, m)
  } catch {}
}
export {
  c as n, o as t
};