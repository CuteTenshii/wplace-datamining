import "./Bd9SjhhN.js";
import {
  p as m,
  t as d,
  a as f,
  b as u,
  c,
  d as v,
  s as _,
  r as w
} from "./CEUoH-Z0.js";
import {
  i as h
} from "./BPHMutr-.js";
import {
  d as x,
  a as n,
  s as E
} from "./UqMcdnk8.js";
import {
  p as y,
  r as S
} from "./b3QwEAUc.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f52050fc-5447-4bd5-9aee-5662b4bbc81b", e._sentryDebugIdIdentifier = "sentry-dbid-f52050fc-5447-4bd5-9aee-5662b4bbc81b")
  } catch {}
})();
const B = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var L = c("<span>wplace</span>"),
  R = c('<div><img alt="Wplace logo"/> <!></div>');

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
      d(() => i = n(r, 1, "text-base-content font-pixel", null, i, {
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })), f(A, r)
    };
    h(p, A => {
      a.hasText && A(g)
    })
  }
  w(s), d(() => {
    o = n(l, 1, "pixelated h-auto shrink-0", null, o, {
      "w-4": t() === "small",
      "w-10": t() === "default",
      "w-16": t() === "medium",
      "w-20": t() === "lg"
    }), E(l, "src", B)
  }), f(e, s), u()
}
export {
  D as L
};