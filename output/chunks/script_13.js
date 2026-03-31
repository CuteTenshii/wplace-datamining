import {
  M as t,
  Y as n,
  G as b,
  Z as y,
  _ as c
} from "./DjL4expl.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "13a4af59f5d722706755b32f23a5d4b27cdb64ce"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "15f19e7c-39df-4714-a969-824a2584f24d", f._sentryDebugIdIdentifier = "sentry-dbid-15f19e7c-39df-4714-a969-824a2584f24d")
  } catch {}
})();

function a(f, s) {
  return f === s || (f == null ? void 0 : f[c]) === s
}

function u(f = {}, s, i, e) {
  return t(() => {
    var d, r;
    return n(() => {
      d = r, r = [], b(() => {
        f !== i(...r) && (s(f, ...r), d && a(i(...d), f) && s(null, ...d))
      })
    }), () => {
      y(() => {
        r && a(i(...r), f) && s(null, ...r)
      })
    }
  }), f
}
export {
  u as b
};