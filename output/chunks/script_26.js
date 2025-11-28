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
} from "./DCrkY18i.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f20ce6c7de81c065c8837dcafe40492e8d59c7f8"
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
  _(e, "input", async f => {
    var o = f ? e.defaultValue : e.value;
    if (o = b(e) ? h(o) : o, l(o), t !== null && r.add(t), await E(), o !== (o = c())) {
      var d = e.selectionStart,
        s = e.selectionEnd,
        v = e.value.length;
      if (e.value = o ?? "", s !== null) {
        var a = e.value.length;
        d === s && s === v && a > v ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = d, e.selectionEnd = Math.min(s, a))
      }
    }
  }), (k && e.defaultValue !== e.value || w(c) == null && e.value) && (l(b(e) ? h(e.value) : e.value), t !== null && r.add(t)), i(() => {
    var f = c();
    if (e === document.activeElement) {
      var o = S ?? t;
      if (r.has(o)) return
    }
    b(e) && f === h(e.value) || e.type === "date" && !f && !e.value || f !== e.value && (e.value = f ?? "")
  })
}
const u = new Set;

function C(e, c, l, r, f = r) {
  var o = l.getAttribute("type") === "checkbox",
    d = e;
  let s = !1;
  if (c !== null)
    for (var v of c) d = d[v] ?? (d[v] = []);
  d.push(l), _(l, "change", () => {
    var a = l.__value;
    o && (a = m(d, a, l.checked)), f(a)
  }, () => f(o ? [] : null)), i(() => {
    var a = r();
    if (k && l.defaultChecked !== l.checked) {
      s = !0;
      return
    }
    o ? (a = a || [], l.checked = a.includes(l.__value)) : l.checked = D(l.__value, a)
  }), I(() => {
    var a = d.indexOf(l);
    a !== -1 && d.splice(a, 1)
  }), u.has(d) || (u.add(d), y(() => {
    d.sort((a, n) => a.compareDocumentPosition(n) === 4 ? -1 : 1), u.delete(d)
  })), y(() => {
    if (s) {
      var a;
      if (o) a = m(d, a, l.checked);
      else {
        var n = d.find(g => g.checked);
        a = n == null ? void 0 : n.__value
      }
      f(a)
    }
  })
}

function q(e, c, l = c) {
  _(e, "change", r => {
    var f = r ? e.defaultChecked : e.checked;
    l(f)
  }), (k && e.defaultChecked !== e.checked || w(c) == null) && l(e.checked), i(() => {
    var r = c();
    e.checked = !!r
  })
}

function m(e, c, l) {
  for (var r = new Set, f = 0; f < e.length; f += 1) e[f].checked && r.add(e[f].__value);
  return l || r.delete(c), Array.from(r)
}

function b(e) {
  var c = e.type;
  return c === "number" || c === "range"
}

function h(e) {
  return e === "" ? null : +e
}
export {
  q as a, A as b, C as c
};