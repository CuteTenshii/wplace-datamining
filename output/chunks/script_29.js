import {
  D as E,
  Q as b,
  l as v,
  L as g,
  R as i,
  S,
  h as k,
  T as D,
  V as T,
  W as y
} from "./BiT_a_NB.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "219ea57e7890a3172dffa4aa889d8e60b8db06d9"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "c88c8996-8698-402b-9df8-ecde6141659e", e._sentryDebugIdIdentifier = "sentry-dbid-c88c8996-8698-402b-9df8-ecde6141659e")
  })()
} catch {}

function A(e, d, l = d) {
  var f = E(),
    r = new WeakSet;
  b(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = h(e) ? _(a) : a, l(a), v !== null && r.add(v), f && a !== (a = d())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(d) == null && e.value) && (l(h(e) ? _(e.value) : e.value), v !== null && r.add(v)), i(() => {
    var s = d();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (r.has(a)) return
    }
    h(e) && s === _(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const u = new Set;

function C(e, d, l, f, r = f) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (d !== null)
    for (var n of d) a = a[n] ?? (a[n] = []);
  a.push(l), b(l, "change", () => {
    var c = l.__value;
    s && (c = m(a, c, l.checked)), r(c)
  }, () => r(s ? [] : null)), i(() => {
    var c = f();
    if (k && l.defaultChecked !== l.checked) {
      t = !0;
      return
    }
    s ? (c = c || [], l.checked = c.includes(l.__value)) : l.checked = D(l.__value, c)
  }), T(() => {
    var c = a.indexOf(l);
    c !== -1 && a.splice(c, 1)
  }), u.has(a) || (u.add(a), y(() => {
    a.sort((c, o) => c.compareDocumentPosition(o) === 4 ? -1 : 1), u.delete(a)
  })), y(() => {
    if (t) {
      var c;
      if (s) c = m(a, c, l.checked);
      else {
        var o = a.find(w => w.checked);
        c = o == null ? void 0 : o.__value
      }
      r(c)
    }
  })
}

function R(e, d, l = d) {
  b(e, "change", f => {
    var r = f ? e.defaultChecked : e.checked;
    l(r)
  }), (k && e.defaultChecked !== e.checked || g(d) == null) && l(e.checked), i(() => {
    var f = d();
    e.checked = !!f
  })
}

function m(e, d, l) {
  for (var f = new Set, r = 0; r < e.length; r += 1) e[r].checked && f.add(e[r].__value);
  return l || f.delete(d), Array.from(f)
}

function h(e) {
  var d = e.type;
  return d === "number" || d === "range"
}

function _(e) {
  return e === "" ? null : +e
}
export {
  R as a, A as b, C as c
};