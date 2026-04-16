import {
  L as a,
  X as c,
  x as b,
  Y as n,
  Z as y
} from "./aONqeBJ4.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "c82b8b5d8deacdc21b4154b9417a43b8fc75f478"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "f132c13a-1ce5-4d16-954b-79c3d16d7433", f._sentryDebugIdIdentifier = "sentry-dbid-f132c13a-1ce5-4d16-954b-79c3d16d7433")
  } catch {}
})();

function t(f, s) {
  return f === s || (f == null ? void 0 : f[y]) === s
}

function u(f = {}, s, d, e) {
  return a(() => {
    var i, r;
    return c(() => {
      i = r, r = [], b(() => {
        f !== d(...r) && (s(f, ...r), i && t(d(...i), f) && s(null, ...i))
      })
    }), () => {
      n(() => {
        r && t(d(...r), f) && s(null, ...r)
      })
    }
  }), f
}
export {
  u as b
};