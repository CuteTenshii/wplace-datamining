import {
  L as t,
  X as c,
  x as n,
  Y as b,
  Z as y
} from "./jMNCXwTX.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "d92995df349756f69cfad78cc6651ba9aa7c7814"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "f132c13a-1ce5-4d16-954b-79c3d16d7433", f._sentryDebugIdIdentifier = "sentry-dbid-f132c13a-1ce5-4d16-954b-79c3d16d7433")
  } catch {}
})();

function a(f, s) {
  return f === s || (f == null ? void 0 : f[y]) === s
}

function u(f = {}, s, d, g) {
  return t(() => {
    var i, r;
    return c(() => {
      i = r, r = [], n(() => {
        f !== d(...r) && (s(f, ...r), i && a(d(...i), f) && s(null, ...i))
      })
    }), () => {
      b(() => {
        r && a(d(...r), f) && s(null, ...r)
      })
    }
  }), f
}
export {
  u as b
};