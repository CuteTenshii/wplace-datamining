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
} from "./t6Scptgh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "30982d7718bbc4a833ef39834f2cfbbfa1f546ae"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      c = new e.Error().stack;
    c && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[c] = "c88c8996-8698-402b-9df8-ecde6141659e", e._sentryDebugIdIdentifier = "sentry-dbid-c88c8996-8698-402b-9df8-ecde6141659e")
  })()
} catch {}

function A(e, c, l = c) {
  var d = E(),
    r = new WeakSet;
  _(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = h(e) ? b(a) : a, l(a), v !== null && r.add(v), d && a !== (a = c())) {
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

function C(e, c, l, d, r = d) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (c !== null)
    for (var n of c) a = a[n] ?? (a[n] = []);
  a.push(l), _(l, "change", () => {
    var f = l.__value;
    s && (f = m(a, f, l.checked)), r(f)
  }, () => r(s ? [] : null)), i(() => {
    var f = d();
    if (k && l.defaultChecked !== l.checked) {
      t = !0;
      return
    }
    s ? (f = f || [], l.checked = f.includes(l.__value)) : l.checked = D(l.__value, f)
  }), T(() => {
    var f = a.indexOf(l);
    f !== -1 && a.splice(f, 1)
  }), u.has(a) || (u.add(a), y(() => {
    a.sort((f, o) => f.compareDocumentPosition(o) === 4 ? -1 : 1), u.delete(a)
  })), y(() => {
    if (t) {
      var f;
      if (s) f = m(a, f, l.checked);
      else {
        var o = a.find(w => w.checked);
        f = o == null ? void 0 : o.__value
      }
      r(f)
    }
  })
}

function R(e, c, l = c) {
  _(e, "change", d => {
    var r = d ? e.defaultChecked : e.checked;
    l(r)
  }), (k && e.defaultChecked !== e.checked || g(c) == null) && l(e.checked), i(() => {
    var d = c();
    e.checked = !!d
  })
}

function m(e, c, l) {
  for (var d = new Set, r = 0; r < e.length; r += 1) e[r].checked && d.add(e[r].__value);
  return l || d.delete(c), Array.from(d)
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