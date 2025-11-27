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
} from "./DkqsQ_no.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a3ac030b39e1c69cc580b4434d12301a02e465ee"
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
  var d = new WeakSet;
  _(e, "input", async r => {
    var o = r ? e.defaultValue : e.value;
    if (o = u(e) ? h(o) : o, l(o), t !== null && d.add(t), await E(), o !== (o = c())) {
      var f = e.selectionStart,
        s = e.selectionEnd,
        v = e.value.length;
      if (e.value = o ?? "", s !== null) {
        var a = e.value.length;
        f === s && s === v && a > v ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = f, e.selectionEnd = Math.min(s, a))
      }
    }
  }), (k && e.defaultValue !== e.value || w(c) == null && e.value) && (l(u(e) ? h(e.value) : e.value), t !== null && d.add(t)), i(() => {
    var r = c();
    if (e === document.activeElement) {
      var o = S ?? t;
      if (d.has(o)) return
    }
    u(e) && r === h(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "")
  })
}
const b = new Set;

function C(e, c, l, d, r = d) {
  var o = l.getAttribute("type") === "checkbox",
    f = e;
  let s = !1;
  if (c !== null)
    for (var v of c) f = f[v] ?? (f[v] = []);
  f.push(l), _(l, "change", () => {
    var a = l.__value;
    o && (a = m(f, a, l.checked)), r(a)
  }, () => r(o ? [] : null)), i(() => {
    var a = d();
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
      r(a)
    }
  })
}

function q(e, c, l = c) {
  _(e, "change", d => {
    var r = d ? e.defaultChecked : e.checked;
    l(r)
  }), (k && e.defaultChecked !== e.checked || w(c) == null) && l(e.checked), i(() => {
    var d = c();
    e.checked = !!d
  })
}

function m(e, c, l) {
  for (var d = new Set, r = 0; r < e.length; r += 1) e[r].checked && d.add(e[r].__value);
  return l || d.delete(c), Array.from(d)
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