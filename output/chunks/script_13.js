import {
  M as a,
  Y as n,
  G as b,
  Z as c,
  _ as e
} from "./CqOPxJme.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "405d9b08e89656e997bc9e3c862de93d5b969d8c"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "15f19e7c-39df-4714-a969-824a2584f24d", f._sentryDebugIdIdentifier = "sentry-dbid-15f19e7c-39df-4714-a969-824a2584f24d")
  } catch {}
})();

function t(f, s) {
  return f === s || (f == null ? void 0 : f[e]) === s
}

function u(f = {}, s, i, y) {
  return a(() => {
    var d, r;
    return n(() => {
      d = r, r = [], b(() => {
        f !== i(...r) && (s(f, ...r), d && t(i(...d), f) && s(null, ...d))
      })
    }), () => {
      c(() => {
        r && t(i(...r), f) && s(null, ...r)
      })
    }
  }), f
}
export {
  u as b
};