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
} from "./BlTsffte.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cf70b86b5c91cdc18d318e8e942fc55d8b1d0f41"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      c = new e.Error().stack;
    c && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[c] = "ac703877-8080-43d0-b822-d7e8e6ca53c3", e._sentryDebugIdIdentifier = "sentry-dbid-ac703877-8080-43d0-b822-d7e8e6ca53c3")
  })()
} catch {}

function A(e, c, l = c) {
  var f = E(),
    r = new WeakSet;
  _(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = h(e) ? b(a) : a, l(a), v !== null && r.add(v), f && a !== (a = c())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(c) == null && e.value) && (l(h(e) ? b(e.value) : e.value), v !== null && r.add(v)), i(() => {
    var s = c();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (r.has(a)) return
    }
    h(e) && s === b(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const u = new Set;

function C(e, c, l, f, r = f) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (c !== null)
    for (var n of c) a = a[n] ?? (a[n] = []);
  a.push(l), _(l, "change", () => {
    var d = l.__value;
    s && (d = m(a, d, l.checked)), r(d)
  }, () => r(s ? [] : null)), i(() => {
    var d = f();
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
      r(d)
    }
  })
}

function R(e, c, l = c) {
  _(e, "change", f => {
    var r = f ? e.defaultChecked : e.checked;
    l(r)
  }), (k && e.defaultChecked !== e.checked || g(c) == null) && l(e.checked), i(() => {
    var f = c();
    e.checked = !!f
  })
}

function m(e, c, l) {
  for (var f = new Set, r = 0; r < e.length; r += 1) e[r].checked && f.add(e[r].__value);
  return l || f.delete(c), Array.from(f)
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