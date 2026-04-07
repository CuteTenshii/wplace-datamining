import {
  M as t,
  Y as n,
  G as y,
  Z as b,
  _ as e
} from "./DEEyd5H-.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "1ae31973f4926d133f10795b35e7941f19bd2842"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "15f19e7c-39df-4714-a969-824a2584f24d", f._sentryDebugIdIdentifier = "sentry-dbid-15f19e7c-39df-4714-a969-824a2584f24d")
  } catch {}
})();

function a(f, s) {
  return f === s || (f == null ? void 0 : f[e]) === s
}

function u(f = {}, s, i, c) {
  return t(() => {
    var d, r;
    return n(() => {
      d = r, r = [], y(() => {
        f !== i(...r) && (s(f, ...r), d && a(i(...d), f) && s(null, ...d))
      })
    }), () => {
      b(() => {
        r && a(i(...r), f) && s(null, ...r)
      })
    }
  }), f
}
export {
  u as b
};