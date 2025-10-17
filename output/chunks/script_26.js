import {
  M as E,
  N as _,
  l as v,
  H as g,
  O as i,
  P as S,
  h as k,
  Q as D,
  R as I,
  S as y
} from "./CuEZ6s8g.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "987f325885ec99eb8c0fc190246a664bf2e822ff"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "dbb145a6-aa19-4d07-8124-69700568d185", e._sentryDebugIdIdentifier = "sentry-dbid-dbb145a6-aa19-4d07-8124-69700568d185")
  })()
} catch {}

function A(e, r, l = r) {
  var c = E(),
    f = new WeakSet;
  _(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = h(e) ? b(a) : a, l(a), v !== null && f.add(v), c && a !== (a = r())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(r) == null && e.value) && (l(h(e) ? b(e.value) : e.value), v !== null && f.add(v)), i(() => {
    var s = r();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (f.has(a)) return
    }
    h(e) && s === b(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const u = new Set;

function C(e, r, l, c, f = c) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (r !== null)
    for (var n of r) a = a[n] ?? (a[n] = []);
  a.push(l), _(l, "change", () => {
    var d = l.__value;
    s && (d = m(a, d, l.checked)), f(d)
  }, () => f(s ? [] : null)), i(() => {
    var d = c();
    if (k && l.defaultChecked !== l.checked) {
      t = !0;
      return
    }
    s ? (d = d || [], l.checked = d.includes(l.__value)) : l.checked = D(l.__value, d)
  }), I(() => {
    var d = a.indexOf(l);
    d !== -1 && a.splice(d, 1)
  }), u.has(a) || (u.add(a), y(() => {
    a.sort((d, o) => d.compareDocumentPosition(o) === 4 ? -1 : 1), u.delete(a)
  })), y(() => {
    if (t) {
      var d;
      if (s) d = m(a, d, l.checked);
      else {
        var o = a.find(w => w.checked);
        d = o == null ? void 0 : o.__value
      }
      f(d)
    }
  })
}

function R(e, r, l = r) {
  _(e, "change", c => {
    var f = c ? e.defaultChecked : e.checked;
    l(f)
  }), (k && e.defaultChecked !== e.checked || g(r) == null) && l(e.checked), i(() => {
    var c = r();
    e.checked = !!c
  })
}

function m(e, r, l) {
  for (var c = new Set, f = 0; f < e.length; f += 1) e[f].checked && c.add(e[f].__value);
  return l || c.delete(r), Array.from(c)
}

function h(e) {
  var r = e.type;
  return r === "number" || r === "range"
}

function b(e) {
  return e === "" ? null : +e
}
export {
  R as a, A as b, C as c
};