import "./CLdytBYG.js";
import {
  a as o,
  g as r,
  m as t,
  d as s,
  u as a
} from "./BUbqFIFN.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "454dd064a649ff0efc297a38e6aed3cfb6597516"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "fb7e5743-07cb-435a-bde9-b7ccba77661d", e._sentryDebugIdIdentifier = "sentry-dbid-fb7e5743-07cb-435a-bde9-b7ccba77661d")
  } catch {}
})();
const f = {
    user: a(),
    community_leader: "Disc. Mod",
    moderator: "MOD",
    global_moderator: "GM",
    admin: "Admin"
  },
  m = {
    user: a(),
    community_leader: s(),
    moderator: t(),
    global_moderator: r(),
    admin: o()
  };
export {
  m as R, f as a
};