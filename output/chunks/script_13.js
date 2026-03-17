import {
  M as t,
  Y as n,
  G as e,
  Z as y,
  _ as b
} from "./EAWgJkB6.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "066116d2a0b0fea465998abdea5fdee468dc0d44"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "15f19e7c-39df-4714-a969-824a2584f24d", f._sentryDebugIdIdentifier = "sentry-dbid-15f19e7c-39df-4714-a969-824a2584f24d")
  } catch {}
})();

function a(f, s) {
  return f === s || (f == null ? void 0 : f[b]) === s
}

function u(f = {}, s, d, c) {
  return t(() => {
    var i, r;
    return n(() => {
      i = r, r = [], e(() => {
        f !== d(...r) && (s(f, ...r), i && a(d(...i), f) && s(null, ...i))
      })
    }), () => {
      y(() => {
        r && a(d(...r), f) && s(null, ...r)
      })
    }
  }), f
}
export {
  u as b
};