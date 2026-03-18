import {
  M as t,
  Y as n,
  G as y,
  Z as c,
  _ as e
} from "./CCHDI9er.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "5075ea86ba38314c7942ca2e67d3e2ff3d377749"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "15f19e7c-39df-4714-a969-824a2584f24d", f._sentryDebugIdIdentifier = "sentry-dbid-15f19e7c-39df-4714-a969-824a2584f24d")
  } catch {}
})();

function a(f, s) {
  return f === s || (f == null ? void 0 : f[e]) === s
}

function u(f = {}, s, i, b) {
  return t(() => {
    var d, r;
    return n(() => {
      d = r, r = [], y(() => {
        f !== i(...r) && (s(f, ...r), d && a(i(...d), f) && s(null, ...d))
      })
    }), () => {
      c(() => {
        r && a(i(...r), f) && s(null, ...r)
      })
    }
  }), f
}
export {
  u as b
};