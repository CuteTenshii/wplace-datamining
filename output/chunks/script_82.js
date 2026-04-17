import "./MjchAmJs.js";
import {
  a,
  g as r,
  m as t,
  d as s,
  u as o
} from "./C_foeQZv.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e00cf9360a6b375b0d5f70104e81f621ce41927c"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "e06ab63d-9953-4466-be69-0ed1715f9ad7", e._sentryDebugIdIdentifier = "sentry-dbid-e06ab63d-9953-4466-be69-0ed1715f9ad7")
  } catch {}
})();
const b = {
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
  f as R, b as a
};