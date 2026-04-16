import {
  L as t,
  X as c,
  x as b,
  Y as n,
  Z as y
} from "./BZHD_3xD.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "804fae10c9a96a4658fed8df64d864b17b400aa1"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "f132c13a-1ce5-4d16-954b-79c3d16d7433", f._sentryDebugIdIdentifier = "sentry-dbid-f132c13a-1ce5-4d16-954b-79c3d16d7433")
  } catch {}
})();

function a(f, s) {
  return f === s || (f == null ? void 0 : f[y]) === s
}

function u(f = {}, s, d, e) {
  return t(() => {
    var i, r;
    return c(() => {
      i = r, r = [], b(() => {
        f !== d(...r) && (s(f, ...r), i && a(d(...i), f) && s(null, ...i))
      })
    }), () => {
      n(() => {
        r && a(d(...r), f) && s(null, ...r)
      })
    }
  }), f
}
export {
  u as b
};