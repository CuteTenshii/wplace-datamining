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
} from "./DwvisW99.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "62927027eb35380145df236b415c7021973de3ee"
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
    r = new WeakSet;
  _(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = h(e) ? b(a) : a, l(a), v !== null && r.add(v), c && a !== (a = d())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(d) == null && e.value) && (l(h(e) ? b(e.value) : e.value), v !== null && r.add(v)), i(() => {
    var s = d();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (r.has(a)) return
    }
    h(e) && s === b(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const u = new Set;

function C(e, d, l, c, r = c) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (d !== null)
    for (var n of d) a = a[n] ?? (a[n] = []);
  a.push(l), _(l, "change", () => {
    var f = l.__value;
    s && (f = m(a, f, l.checked)), r(f)
  }, () => r(s ? [] : null)), i(() => {
    var f = c();
    if (k && l.defaultChecked !== l.checked) {
      t = !0;
      return
    }
    s ? (f = f || [], l.checked = f.includes(l.__value)) : l.checked = I(l.__value, f)
  }), D(() => {
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

function L(e, d, l = d) {
  _(e, "change", c => {
    var r = c ? e.defaultChecked : e.checked;
    l(r)
  }), (k && e.defaultChecked !== e.checked || g(d) == null) && l(e.checked), i(() => {
    var c = d();
    e.checked = !!c
  })
}

function m(e, d, l) {
  for (var c = new Set, r = 0; r < e.length; r += 1) e[r].checked && c.add(e[r].__value);
  return l || c.delete(d), Array.from(c)
}

function h(e) {
  var d = e.type;
  return d === "number" || d === "range"
}

function b(e) {
  return e === "" ? null : +e
}
export {
  L as a, A as b, C as c
};