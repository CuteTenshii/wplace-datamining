import {
  M as t,
  Y as c,
  G as n,
  Z as b,
  _ as e
} from "./G_TaGb8Z.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "a1c3c518b70a92c25ec2b85baf48e9981ce90ce8"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "15f19e7c-39df-4714-a969-824a2584f24d", f._sentryDebugIdIdentifier = "sentry-dbid-15f19e7c-39df-4714-a969-824a2584f24d")
  } catch {}
})();

function d(f, s) {
  return f === s || (f == null ? void 0 : f[e]) === s
}

function u(f = {}, s, i, y) {
  return t(() => {
    var a, r;
    return c(() => {
      a = r, r = [], n(() => {
        f !== i(...r) && (s(f, ...r), a && d(i(...a), f) && s(null, ...a))
      })
    }), () => {
      b(() => {
        r && d(i(...r), f) && s(null, ...r)
      })
    }
  }), f
}
export {
  u as b
};