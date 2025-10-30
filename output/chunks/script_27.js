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
} from "./CBd9NCKG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "251f3ef5bc14649f46f335286261e6c964681eae"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "89aede92-78db-41bd-a36b-1cb482466b07", e._sentryDebugIdIdentifier = "sentry-dbid-89aede92-78db-41bd-a36b-1cb482466b07")
  })()
} catch {}

function A(e, r, l = r) {
  var f = E(),
    c = new WeakSet;
  _(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = u(e) ? h(a) : a, l(a), v !== null && c.add(v), f && a !== (a = r())) {
      var b = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = b, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(r) == null && e.value) && (l(u(e) ? h(e.value) : e.value), v !== null && c.add(v)), i(() => {
    var s = r();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (c.has(a)) return
    }
    u(e) && s === h(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const t = new Set;

function C(e, r, l, f, c = f) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let b = !1;
  if (r !== null)
    for (var n of r) a = a[n] ?? (a[n] = []);
  a.push(l), _(l, "change", () => {
    var d = l.__value;
    s && (d = m(a, d, l.checked)), c(d)
  }, () => c(s ? [] : null)), i(() => {
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

function u(e) {
  var r = e.type;
  return r === "number" || r === "range"
}

function h(e) {
  return e === "" ? null : +e
}
export {
  R as a, A as b, C as c
};