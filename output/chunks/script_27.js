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
} from "./C6P_s34q.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5eef7edadf0463417f66f3780a2aa73c26362de2"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "89aede92-78db-41bd-a36b-1cb482466b07", e._sentryDebugIdIdentifier = "sentry-dbid-89aede92-78db-41bd-a36b-1cb482466b07")
  })()
} catch {}

function A(e, d, l = d) {
  var f = E(),
    c = new WeakSet;
  _(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = u(e) ? h(a) : a, l(a), v !== null && c.add(v), f && a !== (a = d())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(d) == null && e.value) && (l(u(e) ? h(e.value) : e.value), v !== null && c.add(v)), i(() => {
    var s = d();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (c.has(a)) return
    }
    u(e) && s === h(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const b = new Set;

function C(e, d, l, f, c = f) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (d !== null)
    for (var n of d) a = a[n] ?? (a[n] = []);
  a.push(l), _(l, "change", () => {
    var r = l.__value;
    s && (r = m(a, r, l.checked)), c(r)
  }, () => c(s ? [] : null)), i(() => {
    var r = f();
    if (k && l.defaultChecked !== l.checked) {
      t = !0;
      return
    }
    s ? (r = r || [], l.checked = r.includes(l.__value)) : l.checked = D(l.__value, r)
  }), T(() => {
    var r = a.indexOf(l);
    r !== -1 && a.splice(r, 1)
  }), b.has(a) || (b.add(a), y(() => {
    a.sort((r, o) => r.compareDocumentPosition(o) === 4 ? -1 : 1), b.delete(a)
  })), y(() => {
    if (t) {
      var r;
      if (s) r = m(a, r, l.checked);
      else {
        var o = a.find(w => w.checked);
        r = o == null ? void 0 : o.__value
      }
      c(r)
    }
  })
}

function R(e, d, l = d) {
  _(e, "change", f => {
    var c = f ? e.defaultChecked : e.checked;
    l(c)
  }), (k && e.defaultChecked !== e.checked || g(d) == null) && l(e.checked), i(() => {
    var f = d();
    e.checked = !!f
  })
}

function m(e, d, l) {
  for (var f = new Set, c = 0; c < e.length; c += 1) e[c].checked && f.add(e[c].__value);
  return l || f.delete(d), Array.from(f)
}

function u(e) {
  var d = e.type;
  return d === "number" || d === "range"
}

function h(e) {
  return e === "" ? null : +e
}
export {
  R as a, A as b, C as c
};