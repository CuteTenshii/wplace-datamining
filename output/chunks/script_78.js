import "./CCnR8d1l.js";
import {
  a,
  g as r,
  m as t,
  d as s,
  u as o
} from "./Dg8FzyNF.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "6c9b69506cfe19dc0f0d9bebc0491abdbf11db02"
    };
    var e = new d.Error().stack;
    e && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[e] = "f687f230-fa1a-4d22-9e2c-550d4cddf407", d._sentryDebugIdIdentifier = "sentry-dbid-f687f230-fa1a-4d22-9e2c-550d4cddf407")
  } catch {}
})();
const m = {
    user: o(),
    community_leader: "Disc. Mod",
    moderator: "MOD",
    global_moderator: "GM",
    admin: "Admin"
  },
  b = {
    user: o(),
    community_leader: s(),
    moderator: t(),
    global_moderator: r(),
    admin: a()
  };
export {
  b as R, m as a
};