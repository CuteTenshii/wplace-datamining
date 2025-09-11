import {
  F as E,
  G as _,
  l as v,
  z as g,
  H as i,
  I as S,
  h as k,
  J as I,
  K as D,
  L as y
} from "./CU1IDgoR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "db50de114564c1615b532cc812ac881318d7283e"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "f81897f3-b081-4603-a9af-22df85ebac39", e._sentryDebugIdIdentifier = "sentry-dbid-f81897f3-b081-4603-a9af-22df85ebac39")
  })()
} catch {}

function A(e, f, l = f) {
  var d = E(),
    r = new WeakSet;
  _(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = h(e) ? b(a) : a, l(a), v !== null && r.add(v), d && a !== (a = f())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(f) == null && e.value) && (l(h(e) ? b(e.value) : e.value), v !== null && r.add(v)), i(() => {
    var s = f();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (r.has(a)) return
    }
    h(e) && s === b(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const u = new Set;

function C(e, f, l, d, r = d) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (f !== null)
    for (var n of f) a = a[n] ?? (a[n] = []);
  a.push(l), _(l, "change", () => {
    var c = l.__value;
    s && (c = m(a, c, l.checked)), r(c)
  }, () => r(s ? [] : null)), i(() => {
    var c = d();
    if (k && l.defaultChecked !== l.checked) {
      t = !0;
      return
    }
    s ? (c = c || [], l.checked = c.includes(l.__value)) : l.checked = I(l.__value, c)
  }), D(() => {
    var c = a.indexOf(l);
    c !== -1 && a.splice(c, 1)
  }), u.has(a) || (u.add(a), y(() => {
    a.sort((c, o) => c.compareDocumentPosition(o) === 4 ? -1 : 1), u.delete(a)
  })), y(() => {
    if (t) {
      var c;
      if (s) c = m(a, c, l.checked);
      else {
        var o = a.find(w => w.checked);
        c = o == null ? void 0 : o.__value
      }
      r(c)
    }
  })
}

function L(e, f, l = f) {
  _(e, "change", d => {
    var r = d ? e.defaultChecked : e.checked;
    l(r)
  }), (k && e.defaultChecked !== e.checked || g(f) == null) && l(e.checked), i(() => {
    var d = f();
    e.checked = !!d
  })
}

function m(e, f, l) {
  for (var d = new Set, r = 0; r < e.length; r += 1) e[r].checked && d.add(e[r].__value);
  return l || d.delete(f), Array.from(d)
}

function h(e) {
  var f = e.type;
  return f === "number" || f === "range"
}

function b(e) {
  return e === "" ? null : +e
}
export {
  A as a, L as b, C as c
};