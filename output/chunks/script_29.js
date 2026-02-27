import {
  M as p,
  ar as g,
  C as d,
  I as _,
  as as y,
  at as l,
  i as c,
  G as h,
  au as v
} from "./C3nPqK5x.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "114e6a28-baab-4e1b-bb45-d1343b127cd4", e._sentryDebugIdIdentifier = "sentry-dbid-114e6a28-baab-4e1b-bb45-d1343b127cd4")
  } catch {}
})();

function m(e = !1) {
  const n = p,
    t = n.l.u;
  if (!t) return;
  let o = () => h(n.s);
  if (e) {
    let a = 0,
      s = {};
    const u = v(() => {
      let i = !1;
      const r = n.s;
      for (const f in r) r[f] !== s[f] && (s[f] = r[f], i = !0);
      return i && a++, a
    });
    o = () => c(u)
  }
  t.b.length && g(() => {
    b(n, o), l(t.b)
  }), d(() => {
    const a = _(() => t.m.map(y));
    return () => {
      for (const s of a) typeof s == "function" && s()
    }
  }), t.a.length && d(() => {
    b(n, o), l(t.a)
  })
}

function b(e, n) {
  if (e.l.s)
    for (const t of e.l.s) c(t);
  n()
}
export {
  m as i
};