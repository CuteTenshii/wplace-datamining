import "./BYsICFKS.js";
import {
  a,
  g as r,
  m as t,
  d as s,
  u as o
} from "./DdYl9pvQ.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "fcddd0f6e36106ba60797dbbda80e38f1cbe4c75"
    };
    var e = new d.Error().stack;
    e && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[e] = "e06ab63d-9953-4466-be69-0ed1715f9ad7", d._sentryDebugIdIdentifier = "sentry-dbid-e06ab63d-9953-4466-be69-0ed1715f9ad7")
  } catch {}
})();
const m = {
    user: o(),
    community_leader: "Disc. Mod",
    moderator: "MOD",
    global_moderator: "GM",
    admin: "Admin"
  },
  f = {
    user: o(),
    community_leader: s(),
    moderator: t(),
    global_moderator: r(),
    admin: a()
  };
export {
  f as R, m as a
};