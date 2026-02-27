import {
  K as t,
  W as c,
  I as b,
  X as n,
  Y as y
} from "./BGZizgo7.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
    };
    var s = new d.Error().stack;
    s && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[s] = "7143c13a-d615-4230-ac3c-4fcdc926d5b2", d._sentryDebugIdIdentifier = "sentry-dbid-7143c13a-d615-4230-ac3c-4fcdc926d5b2")
  } catch {}
})();

function a(d, s) {
  return d === s || (d == null ? void 0 : d[y]) === s
}

function u(d = {}, s, r, g) {
  return t(() => {
    var i, f;
    return c(() => {
      i = f, f = [], b(() => {
        d !== r(...f) && (s(d, ...f), i && a(r(...i), d) && s(null, ...i))
      })
    }), () => {
      n(() => {
        f && a(r(...f), d) && s(null, ...f)
      })
    }
  }), d
}
export {
  u as b
};