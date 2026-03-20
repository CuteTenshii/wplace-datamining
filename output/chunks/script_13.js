import {
  M as a,
  Y as e,
  G as n,
  Z as y,
  _ as b
} from "./CA_jRce9.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "8982ef6b1b489154c6458cf227ee17f00e1038fe"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "15f19e7c-39df-4714-a969-824a2584f24d", f._sentryDebugIdIdentifier = "sentry-dbid-15f19e7c-39df-4714-a969-824a2584f24d")
  } catch {}
})();

function t(f, s) {
  return f === s || (f == null ? void 0 : f[b]) === s
}

function u(f = {}, s, i, c) {
  return a(() => {
    var d, r;
    return e(() => {
      d = r, r = [], n(() => {
        f !== i(...r) && (s(f, ...r), d && t(i(...d), f) && s(null, ...d))
      })
    }), () => {
      y(() => {
        r && t(i(...r), f) && s(null, ...r)
      })
    }
  }), f
}
export {
  u as b
};