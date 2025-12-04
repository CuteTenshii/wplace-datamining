import {
  q as _,
  v as t,
  w as E,
  x as w,
  y as i,
  z as S,
  k,
  A as D,
  C as I,
  D as y
} from "./CZoruRVW.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "333b60866c7f52d6a6d78eeaca70d7067d67d0c1"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      c = new e.Error().stack;
    c && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[c] = "391fab94-757d-4c9e-8d63-261e1bfea172", e._sentryDebugIdIdentifier = "sentry-dbid-391fab94-757d-4c9e-8d63-261e1bfea172")
  })()
} catch {}

function A(e, c, l = c) {
  var r = new WeakSet;
  _(e, "input", async d => {
    var o = d ? e.defaultValue : e.value;
    if (o = u(e) ? h(o) : o, l(o), t !== null && r.add(t), await E(), o !== (o = c())) {
      var f = e.selectionStart,
        s = e.selectionEnd,
        v = e.value.length;
      if (e.value = o ?? "", s !== null) {
        var a = e.value.length;
        f === s && s === v && a > v ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = f, e.selectionEnd = Math.min(s, a))
      }
    }
  }), (k && e.defaultValue !== e.value || w(c) == null && e.value) && (l(u(e) ? h(e.value) : e.value), t !== null && r.add(t)), i(() => {
    var d = c();
    if (e === document.activeElement) {
      var o = S ?? t;
      if (r.has(o)) return
    }
    u(e) && d === h(e.value) || e.type === "date" && !d && !e.value || d !== e.value && (e.value = d ?? "")
  })
}
const b = new Set;

function C(e, c, l, r, d = r) {
  var o = l.getAttribute("type") === "checkbox",
    f = e;
  let s = !1;
  if (c !== null)
    for (var v of c) f = f[v] ?? (f[v] = []);
  f.push(l), _(l, "change", () => {
    var a = l.__value;
    o && (a = m(f, a, l.checked)), d(a)
  }, () => d(o ? [] : null)), i(() => {
    var a = r();
    if (k && l.defaultChecked !== l.checked) {
      s = !0;
      return
    }
    o ? (a = a || [], l.checked = a.includes(l.__value)) : l.checked = D(l.__value, a)
  }), I(() => {
    var a = f.indexOf(l);
    a !== -1 && f.splice(a, 1)
  }), b.has(f) || (b.add(f), y(() => {
    f.sort((a, n) => a.compareDocumentPosition(n) === 4 ? -1 : 1), b.delete(f)
  })), y(() => {
    if (s) {
      var a;
      if (o) a = m(f, a, l.checked);
      else {
        var n = f.find(g => g.checked);
        a = n == null ? void 0 : n.__value
      }
      d(a)
    }
  })
}

function q(e, c, l = c) {
  _(e, "change", r => {
    var d = r ? e.defaultChecked : e.checked;
    l(d)
  }), (k && e.defaultChecked !== e.checked || w(c) == null) && l(e.checked), i(() => {
    var r = c();
    e.checked = !!r
  })
}

function m(e, c, l) {
  for (var r = new Set, d = 0; d < e.length; d += 1) e[d].checked && r.add(e[d].__value);
  return l || r.delete(c), Array.from(r)
}

function u(e) {
  var c = e.type;
  return c === "number" || c === "range"
}

function h(e) {
  return e === "" ? null : +e
}
export {
  q as a, A as b, C as c
};