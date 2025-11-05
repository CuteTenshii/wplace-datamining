import {
  D as E,
  Q as _,
  l as v,
  L as g,
  R as i,
  S,
  h as k,
  T as D,
  V as T,
  W as y
} from "./CxAzxtpI.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "98d1dff4f9f651349c3d8e3f73a4b0b872bc384a"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      c = new e.Error().stack;
    c && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[c] = "c88c8996-8698-402b-9df8-ecde6141659e", e._sentryDebugIdIdentifier = "sentry-dbid-c88c8996-8698-402b-9df8-ecde6141659e")
  })()
} catch {}

function A(e, c, l = c) {
  var r = E(),
    f = new WeakSet;
  _(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = h(e) ? b(a) : a, l(a), v !== null && f.add(v), r && a !== (a = c())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(c) == null && e.value) && (l(h(e) ? b(e.value) : e.value), v !== null && f.add(v)), i(() => {
    var s = c();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (f.has(a)) return
    }
    h(e) && s === b(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const u = new Set;

function C(e, c, l, r, f = r) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (c !== null)
    for (var n of c) a = a[n] ?? (a[n] = []);
  a.push(l), _(l, "change", () => {
    var d = l.__value;
    s && (d = m(a, d, l.checked)), f(d)
  }, () => f(s ? [] : null)), i(() => {
    var d = r();
    if (k && l.defaultChecked !== l.checked) {
      t = !0;
      return
    }
    s ? (d = d || [], l.checked = d.includes(l.__value)) : l.checked = D(l.__value, d)
  }), T(() => {
    var d = a.indexOf(l);
    d !== -1 && a.splice(d, 1)
  }), u.has(a) || (u.add(a), y(() => {
    a.sort((d, o) => d.compareDocumentPosition(o) === 4 ? -1 : 1), u.delete(a)
  })), y(() => {
    if (t) {
      var d;
      if (s) d = m(a, d, l.checked);
      else {
        var o = a.find(w => w.checked);
        d = o == null ? void 0 : o.__value
      }
      f(d)
    }
  })
}

function R(e, c, l = c) {
  _(e, "change", r => {
    var f = r ? e.defaultChecked : e.checked;
    l(f)
  }), (k && e.defaultChecked !== e.checked || g(c) == null) && l(e.checked), i(() => {
    var r = c();
    e.checked = !!r
  })
}

function m(e, c, l) {
  for (var r = new Set, f = 0; f < e.length; f += 1) e[f].checked && r.add(e[f].__value);
  return l || r.delete(c), Array.from(r)
}

function h(e) {
  var c = e.type;
  return c === "number" || c === "range"
}

function b(e) {
  return e === "" ? null : +e
}
export {
  R as a, A as b, C as c
};