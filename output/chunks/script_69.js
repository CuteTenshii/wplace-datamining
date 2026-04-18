import "./BPn1sVO4.js";
import {
  p as m,
  t as d,
  a as c,
  b as u,
  c as f,
  d as v,
  s as _,
  r as w
} from "./BldsY2Le.js";
import {
  i as h
} from "./BMBxSkEr.js";
import {
  d as x,
  a as n,
  s as E
} from "./BkJfUC8t.js";
import {
  p as y,
  r as S
} from "./DU6s87IP.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "adbd784807892a96485bba09dcce4d69b0904804"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b40d2afc-7115-4cc4-800c-ca2be506e323", e._sentryDebugIdIdentifier = "sentry-dbid-b40d2afc-7115-4cc4-800c-ca2be506e323")
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
      d(() => i = n(r, 1, "text-base-content font-pixel", null, i, {
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })), c(A, r)
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
  }), c(e, s), u()
}
export {
  D as L, B as l
};