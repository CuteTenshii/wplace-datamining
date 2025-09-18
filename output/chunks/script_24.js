import {
  F as E,
  G as b,
  l as v,
  z as g,
  H as i,
  I as S,
  h as k,
  J as I,
  K as D,
  L as y
} from "./DUey02Nl.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "3c9334ae758047b148030b2b1b11409cfc37ff31"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      c = new e.Error().stack;
    c && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[c] = "35667580-9c94-46ee-a286-0d660c3745d7", e._sentryDebugIdIdentifier = "sentry-dbid-35667580-9c94-46ee-a286-0d660c3745d7")
  })()
} catch {}

function A(e, c, l = c) {
  var f = E(),
    d = new WeakSet;
  b(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = h(e) ? _(a) : a, l(a), v !== null && d.add(v), f && a !== (a = c())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(c) == null && e.value) && (l(h(e) ? _(e.value) : e.value), v !== null && d.add(v)), i(() => {
    var s = c();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (d.has(a)) return
    }
    h(e) && s === _(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const u = new Set;

function C(e, c, l, f, d = f) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (c !== null)
    for (var n of c) a = a[n] ?? (a[n] = []);
  a.push(l), b(l, "change", () => {
    var r = l.__value;
    s && (r = m(a, r, l.checked)), d(r)
  }, () => d(s ? [] : null)), i(() => {
    var r = f();
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
      d(r)
    }
  })
}

function L(e, c, l = c) {
  b(e, "change", f => {
    var d = f ? e.defaultChecked : e.checked;
    l(d)
  }), (k && e.defaultChecked !== e.checked || g(c) == null) && l(e.checked), i(() => {
    var f = c();
    e.checked = !!f
  })
}

function m(e, c, l) {
  for (var f = new Set, d = 0; d < e.length; d += 1) e[d].checked && f.add(e[d].__value);
  return l || f.delete(c), Array.from(f)
}

function h(e) {
  var c = e.type;
  return c === "number" || c === "range"
}

function _(e) {
  return e === "" ? null : +e
}
export {
  L as a, A as b, C as c
};