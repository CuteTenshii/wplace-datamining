import "./iF_u2ama.js";
import {
  p as m,
  t as n,
  a as d,
  b as u,
  c as f,
  d as v,
  s as _,
  r as w
} from "./G_TaGb8Z.js";
import {
  i as h
} from "./DKxzbz1e.js";
import {
  d as x,
  a as c,
  s as E
} from "./Dt2tWuyU.js";
import {
  p as y,
  r as S
} from "./CcbhMLbo.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a1c3c518b70a92c25ec2b85baf48e9981ce90ce8"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f52050fc-5447-4bd5-9aee-5662b4bbc81b", e._sentryDebugIdIdentifier = "sentry-dbid-f52050fc-5447-4bd5-9aee-5662b4bbc81b")
  } catch {}
})();
const B = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var L = f("<span>wplace</span>"),
  R = f('<div><img alt="Wplace logo"/> <!></div>');

function D(e, a) {
  m(a, !0);
  let t = y(a, "size", 3, "default"),
    b = S(a, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = R();
  x(s, () => ({
    ...b,
    class: `flex items-center gap-1.5 ${a.class??""}`
  }));
  var l = v(s);
  let o;
  var p = _(l, 2);
  {
    var g = A => {
      var r = L();
      let i;
      n(() => i = c(r, 1, "text-base-content font-pixel", null, i, {
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })), d(A, r)
    };
    h(p, A => {
      a.hasText && A(g)
    })
  }
  w(s), n(() => {
    o = c(l, 1, "pixelated h-auto shrink-0", null, o, {
      "w-4": t() === "small",
      "w-10": t() === "default",
      "w-16": t() === "medium",
      "w-20": t() === "lg"
    }), E(l, "src", B)
  }), d(e, s), u()
}
export {
  D as L
};