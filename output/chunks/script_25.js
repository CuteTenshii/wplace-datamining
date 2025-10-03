import {
  F as E,
  G as _,
  l as v,
  z as g,
  H as i,
  I as S,
  h as k,
  J as I,
  K as D,
  L as y
} from "./ByX6hzNF.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "271525ca33b9062741a3aa9359d1b5202c5b5a4b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "6fc49d13-f7d8-42d1-9723-e4fb7b109694", e._sentryDebugIdIdentifier = "sentry-dbid-6fc49d13-f7d8-42d1-9723-e4fb7b109694")
  })()
} catch {}

function A(e, d, l = d) {
  var c = E(),
    f = new WeakSet;
  _(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = b(e) ? h(a) : a, l(a), v !== null && f.add(v), c && a !== (a = d())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(d) == null && e.value) && (l(b(e) ? h(e.value) : e.value), v !== null && f.add(v)), i(() => {
    var s = d();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (f.has(a)) return
    }
    b(e) && s === h(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const u = new Set;

function C(e, d, l, c, f = c) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (d !== null)
    for (var n of d) a = a[n] ?? (a[n] = []);
  a.push(l), _(l, "change", () => {
    var r = l.__value;
    s && (r = m(a, r, l.checked)), f(r)
  }, () => f(s ? [] : null)), i(() => {
    var r = c();
    if (k && l.defaultChecked !== l.checked) {
      t = !0;
      return
    }
    s ? (r = r || [], l.checked = r.includes(l.__value)) : l.checked = I(l.__value, r)
  }), D(() => {
    var r = a.indexOf(l);
    r !== -1 && a.splice(r, 1)
  }), u.has(a) || (u.add(a), y(() => {
    a.sort((r, o) => r.compareDocumentPosition(o) === 4 ? -1 : 1), u.delete(a)
  })), y(() => {
    if (t) {
      var r;
      if (s) r = m(a, r, l.checked);
      else {
        var o = a.find(w => w.checked);
        r = o == null ? void 0 : o.__value
      }
      f(r)
    }
  })
}

function L(e, d, l = d) {
  _(e, "change", c => {
    var f = c ? e.defaultChecked : e.checked;
    l(f)
  }), (k && e.defaultChecked !== e.checked || g(d) == null) && l(e.checked), i(() => {
    var c = d();
    e.checked = !!c
  })
}

function m(e, d, l) {
  for (var c = new Set, f = 0; f < e.length; f += 1) e[f].checked && c.add(e[f].__value);
  return l || c.delete(d), Array.from(c)
}

function b(e) {
  var d = e.type;
  return d === "number" || d === "range"
}

function h(e) {
  return e === "" ? null : +e
}
export {
  L as a, A as b, C as c
};