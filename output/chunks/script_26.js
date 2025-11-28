import {
  q as _,
  v as b,
  w as E,
  x as w,
  y as i,
  z as S,
  k,
  A as D,
  C as I,
  D as y
} from "./CfzALrzp.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "bb5d5d7c8d5938b4a51a8b309833405bb5c12631"
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
  var f = new WeakSet;
  _(e, "input", async d => {
    var o = d ? e.defaultValue : e.value;
    if (o = u(e) ? h(o) : o, l(o), b !== null && f.add(b), await E(), o !== (o = c())) {
      var r = e.selectionStart,
        s = e.selectionEnd,
        v = e.value.length;
      if (e.value = o ?? "", s !== null) {
        var a = e.value.length;
        r === s && s === v && a > v ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = r, e.selectionEnd = Math.min(s, a))
      }
    }
  }), (k && e.defaultValue !== e.value || w(c) == null && e.value) && (l(u(e) ? h(e.value) : e.value), b !== null && f.add(b)), i(() => {
    var d = c();
    if (e === document.activeElement) {
      var o = S ?? b;
      if (f.has(o)) return
    }
    u(e) && d === h(e.value) || e.type === "date" && !d && !e.value || d !== e.value && (e.value = d ?? "")
  })
}
const t = new Set;

function C(e, c, l, f, d = f) {
  var o = l.getAttribute("type") === "checkbox",
    r = e;
  let s = !1;
  if (c !== null)
    for (var v of c) r = r[v] ?? (r[v] = []);
  r.push(l), _(l, "change", () => {
    var a = l.__value;
    o && (a = m(r, a, l.checked)), d(a)
  }, () => d(o ? [] : null)), i(() => {
    var a = f();
    if (k && l.defaultChecked !== l.checked) {
      s = !0;
      return
    }
    o ? (a = a || [], l.checked = a.includes(l.__value)) : l.checked = D(l.__value, a)
  }), I(() => {
    var a = r.indexOf(l);
    a !== -1 && r.splice(a, 1)
  }), t.has(r) || (t.add(r), y(() => {
    r.sort((a, n) => a.compareDocumentPosition(n) === 4 ? -1 : 1), t.delete(r)
  })), y(() => {
    if (s) {
      var a;
      if (o) a = m(r, a, l.checked);
      else {
        var n = r.find(g => g.checked);
        a = n == null ? void 0 : n.__value
      }
      d(a)
    }
  })
}

function q(e, c, l = c) {
  _(e, "change", f => {
    var d = f ? e.defaultChecked : e.checked;
    l(d)
  }), (k && e.defaultChecked !== e.checked || w(c) == null) && l(e.checked), i(() => {
    var f = c();
    e.checked = !!f
  })
}

function m(e, c, l) {
  for (var f = new Set, d = 0; d < e.length; d += 1) e[d].checked && f.add(e[d].__value);
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
  q as a, A as b, C as c
};