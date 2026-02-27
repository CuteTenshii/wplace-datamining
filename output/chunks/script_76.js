import "./BIwJezZo.js";
import {
  a as r,
  g as a,
  m as t,
  d as s,
  u as o
} from "./BrI_-UPT.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "bb24ee29-1e07-4729-b200-0e8942ffe90f", e._sentryDebugIdIdentifier = "sentry-dbid-bb24ee29-1e07-4729-b200-0e8942ffe90f")
  } catch {}
})();
const f = {
    user: o(),
    community_leader: "Disc. Mod",
    moderator: "MOD",
    global_moderator: "GM",
    admin: "Admin"
  },
  m = {
    user: o(),
    community_leader: s(),
    moderator: t(),
    global_moderator: a(),
    admin: r()
  };
export {
  m as R, f as a
};