import {
  M as E,
  N as _,
  l as v,
  H as g,
  O as i,
  P as S,
  h as k,
  Q as D,
  R as I,
  S as y
} from "./D2NUMUd6.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "19e8b1e1f621a77f893c0ebf0e975e4ec873201a"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "dbb145a6-aa19-4d07-8124-69700568d185", e._sentryDebugIdIdentifier = "sentry-dbid-dbb145a6-aa19-4d07-8124-69700568d185")
  })()
} catch {}

function A(e, r, l = r) {
  var f = E(),
    c = new WeakSet;
  _(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = h(e) ? b(a) : a, l(a), v !== null && c.add(v), f && a !== (a = r())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(r) == null && e.value) && (l(h(e) ? b(e.value) : e.value), v !== null && c.add(v)), i(() => {
    var s = r();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (c.has(a)) return
    }
    h(e) && s === b(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const u = new Set;

function C(e, r, l, f, c = f) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (r !== null)
    for (var n of r) a = a[n] ?? (a[n] = []);
  a.push(l), _(l, "change", () => {
    var d = l.__value;
    s && (d = m(a, d, l.checked)), c(d)
  }, () => c(s ? [] : null)), i(() => {
    var d = f();
    if (k && l.defaultChecked !== l.checked) {
      t = !0;
      return
    }
    s ? (d = d || [], l.checked = d.includes(l.__value)) : l.checked = D(l.__value, d)
  }), I(() => {
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
      c(d)
    }
  })
}

function R(e, r, l = r) {
  _(e, "change", f => {
    var c = f ? e.defaultChecked : e.checked;
    l(c)
  }), (k && e.defaultChecked !== e.checked || g(r) == null) && l(e.checked), i(() => {
    var f = r();
    e.checked = !!f
  })
}

function m(e, r, l) {
  for (var f = new Set, c = 0; c < e.length; c += 1) e[c].checked && f.add(e[c].__value);
  return l || f.delete(r), Array.from(f)
}

function h(e) {
  var r = e.type;
  return r === "number" || r === "range"
}

function b(e) {
  return e === "" ? null : +e
}
export {
  R as a, A as b, C as c
};