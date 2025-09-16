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
} from "./CS1SYnzj.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cbd3f879a261fb0bdaced237db78a13f344d32ba"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "f81897f3-b081-4603-a9af-22df85ebac39", e._sentryDebugIdIdentifier = "sentry-dbid-f81897f3-b081-4603-a9af-22df85ebac39")
  })()
} catch {}

function A(e, f, l = f) {
  var c = E(),
    r = new WeakSet;
  _(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = u(e) ? h(a) : a, l(a), v !== null && r.add(v), c && a !== (a = f())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(f) == null && e.value) && (l(u(e) ? h(e.value) : e.value), v !== null && r.add(v)), i(() => {
    var s = f();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (r.has(a)) return
    }
    u(e) && s === h(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const b = new Set;

function C(e, f, l, c, r = c) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (f !== null)
    for (var n of f) a = a[n] ?? (a[n] = []);
  a.push(l), _(l, "change", () => {
    var d = l.__value;
    s && (d = m(a, d, l.checked)), r(d)
  }, () => r(s ? [] : null)), i(() => {
    var d = c();
    if (k && l.defaultChecked !== l.checked) {
      t = !0;
      return
    }
    s ? (d = d || [], l.checked = d.includes(l.__value)) : l.checked = I(l.__value, d)
  }), D(() => {
    var d = a.indexOf(l);
    d !== -1 && a.splice(d, 1)
  }), b.has(a) || (b.add(a), y(() => {
    a.sort((d, o) => d.compareDocumentPosition(o) === 4 ? -1 : 1), b.delete(a)
  })), y(() => {
    if (t) {
      var d;
      if (s) d = m(a, d, l.checked);
      else {
        var o = a.find(w => w.checked);
        d = o == null ? void 0 : o.__value
      }
      r(d)
    }
  })
}

function L(e, f, l = f) {
  _(e, "change", c => {
    var r = c ? e.defaultChecked : e.checked;
    l(r)
  }), (k && e.defaultChecked !== e.checked || g(f) == null) && l(e.checked), i(() => {
    var c = f();
    e.checked = !!c
  })
}

function m(e, f, l) {
  for (var c = new Set, r = 0; r < e.length; r += 1) e[r].checked && c.add(e[r].__value);
  return l || c.delete(f), Array.from(c)
}

function u(e) {
  var f = e.type;
  return f === "number" || f === "range"
}

function h(e) {
  return e === "" ? null : +e
}
export {
  A as a, L as b, C as c
};