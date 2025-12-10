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
} from "./HtHXdD60.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "3555dcfd10153d679a83fc3bd1544987e233c7a6"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      c = new e.Error().stack;
    c && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[c] = "09ab78d4-037c-4f3e-ae68-bfec06621b3a", e._sentryDebugIdIdentifier = "sentry-dbid-09ab78d4-037c-4f3e-ae68-bfec06621b3a")
  })()
} catch {}

function A(e, c, l = c) {
  var d = new WeakSet;
  _(e, "input", async f => {
    var o = f ? e.defaultValue : e.value;
    if (o = u(e) ? h(o) : o, l(o), t !== null && d.add(t), await E(), o !== (o = c())) {
      var r = e.selectionStart,
        s = e.selectionEnd,
        v = e.value.length;
      if (e.value = o ?? "", s !== null) {
        var a = e.value.length;
        r === s && s === v && a > v ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = r, e.selectionEnd = Math.min(s, a))
      }
    }
  }), (k && e.defaultValue !== e.value || w(c) == null && e.value) && (l(u(e) ? h(e.value) : e.value), t !== null && d.add(t)), i(() => {
    var f = c();
    if (e === document.activeElement) {
      var o = S ?? t;
      if (d.has(o)) return
    }
    u(e) && f === h(e.value) || e.type === "date" && !f && !e.value || f !== e.value && (e.value = f ?? "")
  })
}
const b = new Set;

function C(e, c, l, d, f = d) {
  var o = l.getAttribute("type") === "checkbox",
    r = e;
  let s = !1;
  if (c !== null)
    for (var v of c) r = r[v] ?? (r[v] = []);
  r.push(l), _(l, "change", () => {
    var a = l.__value;
    o && (a = m(r, a, l.checked)), f(a)
  }, () => f(o ? [] : null)), i(() => {
    var a = d();
    if (k && l.defaultChecked !== l.checked) {
      s = !0;
      return
    }
    o ? (a = a || [], l.checked = a.includes(l.__value)) : l.checked = D(l.__value, a)
  }), I(() => {
    var a = r.indexOf(l);
    a !== -1 && r.splice(a, 1)
  }), b.has(r) || (b.add(r), y(() => {
    r.sort((a, n) => a.compareDocumentPosition(n) === 4 ? -1 : 1), b.delete(r)
  })), y(() => {
    if (s) {
      var a;
      if (o) a = m(r, a, l.checked);
      else {
        var n = r.find(g => g.checked);
        a = n == null ? void 0 : n.__value
      }
      f(a)
    }
  })
}

function q(e, c, l = c) {
  _(e, "change", d => {
    var f = d ? e.defaultChecked : e.checked;
    l(f)
  }), (k && e.defaultChecked !== e.checked || w(c) == null) && l(e.checked), i(() => {
    var d = c();
    e.checked = !!d
  })
}

function m(e, c, l) {
  for (var d = new Set, f = 0; f < e.length; f += 1) e[f].checked && d.add(e[f].__value);
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