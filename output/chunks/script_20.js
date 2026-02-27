import "./BLuq94kG.js";
import {
  p as u,
  t as d,
  a as n,
  b,
  c,
  d as v,
  s as _,
  r as w
} from "./BGZizgo7.js";
import {
  i as h
} from "./DclWce1c.js";
import {
  f as x,
  a as f,
  s as E
} from "./Bhr_YgHq.js";
import {
  p as y,
  r as S
} from "./B9brejRs.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "af11b4e2-e417-45de-97d7-26e805a1777c", e._sentryDebugIdIdentifier = "sentry-dbid-af11b4e2-e417-45de-97d7-26e805a1777c")
  } catch {}
})();
const B = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var L = c("<span>wplace</span>"),
  R = c('<div><img alt="Wplace logo"/> <!></div>');

function D(e, a) {
  u(a, !0);
  let t = y(a, "size", 3, "default"),
    p = S(a, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = R();
  x(s, () => ({
    ...p,
    class: `flex items-center gap-1.5 ${a.class??""}`
  }));
  var l = v(s);
  let o;
  var g = _(l, 2);
  {
    var m = A => {
      var r = L();
      let i;
      d(() => i = f(r, 1, "text-base-content font-pixel", null, i, {
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })), n(A, r)
    };
    h(g, A => {
      a.hasText && A(m)
    })
  }
  w(s), d(() => {
    o = f(l, 1, "pixelated h-auto shrink-0", null, o, {
      "w-4": t() === "small",
      "w-10": t() === "default",
      "w-16": t() === "medium",
      "w-20": t() === "lg"
    }), E(l, "src", B)
  }), n(e, s), b()
}
export {
  D as L
};