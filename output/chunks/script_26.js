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
} from "./BdthSYuV.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "98e9f0a798d14aeefb12d06ee236fbfeb3f778fb"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "09ab78d4-037c-4f3e-ae68-bfec06621b3a", e._sentryDebugIdIdentifier = "sentry-dbid-09ab78d4-037c-4f3e-ae68-bfec06621b3a")
  })()
} catch {}

function A(e, f, l = f) {
  var d = new WeakSet;
  _(e, "input", async c => {
    var o = c ? e.defaultValue : e.value;
    if (o = u(e) ? h(o) : o, l(o), b !== null && d.add(b), await E(), o !== (o = f())) {
      var r = e.selectionStart,
        s = e.selectionEnd,
        v = e.value.length;
      if (e.value = o ?? "", s !== null) {
        var a = e.value.length;
        r === s && s === v && a > v ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = r, e.selectionEnd = Math.min(s, a))
      }
    }
  }), (k && e.defaultValue !== e.value || w(f) == null && e.value) && (l(u(e) ? h(e.value) : e.value), b !== null && d.add(b)), i(() => {
    var c = f();
    if (e === document.activeElement) {
      var o = S ?? b;
      if (d.has(o)) return
    }
    u(e) && c === h(e.value) || e.type === "date" && !c && !e.value || c !== e.value && (e.value = c ?? "")
  })
}
const t = new Set;

function C(e, f, l, d, c = d) {
  var o = l.getAttribute("type") === "checkbox",
    r = e;
  let s = !1;
  if (f !== null)
    for (var v of f) r = r[v] ?? (r[v] = []);
  r.push(l), _(l, "change", () => {
    var a = l.__value;
    o && (a = m(r, a, l.checked)), c(a)
  }, () => c(o ? [] : null)), i(() => {
    var a = d();
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
      c(a)
    }
  })
}

function q(e, f, l = f) {
  _(e, "change", d => {
    var c = d ? e.defaultChecked : e.checked;
    l(c)
  }), (k && e.defaultChecked !== e.checked || w(f) == null) && l(e.checked), i(() => {
    var d = f();
    e.checked = !!d
  })
}

function m(e, f, l) {
  for (var d = new Set, c = 0; c < e.length; c += 1) e[c].checked && d.add(e[c].__value);
  return l || d.delete(f), Array.from(d)
}

function u(e) {
  var f = e.type;
  return f === "number" || f === "range"
}

function h(e) {
  return e === "" ? null : +e
}
export {
  q as a, A as b, C as c
};