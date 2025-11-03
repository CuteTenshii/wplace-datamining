import {
  D as E,
  Q as _,
  o as v,
  L as g,
  R as i,
  S,
  i as k,
  T as D,
  V as T,
  W as y
} from "./KRt5sQSh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fccd346089ef1c0c20bf6dbcc60efaf285af3b07"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      c = new e.Error().stack;
    c && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[c] = "89aede92-78db-41bd-a36b-1cb482466b07", e._sentryDebugIdIdentifier = "sentry-dbid-89aede92-78db-41bd-a36b-1cb482466b07")
  })()
} catch {}

function A(e, c, l = c) {
  var f = E(),
    r = new WeakSet;
  _(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = u(e) ? h(a) : a, l(a), v !== null && r.add(v), f && a !== (a = c())) {
      var b = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = b, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(c) == null && e.value) && (l(u(e) ? h(e.value) : e.value), v !== null && r.add(v)), i(() => {
    var s = c();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (r.has(a)) return
    }
    u(e) && s === h(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const t = new Set;

function C(e, c, l, f, r = f) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let b = !1;
  if (c !== null)
    for (var n of c) a = a[n] ?? (a[n] = []);
  a.push(l), _(l, "change", () => {
    var d = l.__value;
    s && (d = m(a, d, l.checked)), r(d)
  }, () => r(s ? [] : null)), i(() => {
    var d = f();
    if (k && l.defaultChecked !== l.checked) {
      b = !0;
      return
    }
    s ? (d = d || [], l.checked = d.includes(l.__value)) : l.checked = D(l.__value, d)
  }), T(() => {
    var d = a.indexOf(l);
    d !== -1 && a.splice(d, 1)
  }), t.has(a) || (t.add(a), y(() => {
    a.sort((d, o) => d.compareDocumentPosition(o) === 4 ? -1 : 1), t.delete(a)
  })), y(() => {
    if (b) {
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

function u(e) {
  var c = e.type;
  return c === "number" || c === "range"
}

function h(e) {
  return e === "" ? null : +e
}
export {
  R as a, A as b, C as c
};