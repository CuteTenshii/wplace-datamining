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
} from "./DeRLOp5b.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "9e594f39530defa0eea34168198e146d1118d931"
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
    d = new WeakSet;
  b(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = h(e) ? _(a) : a, l(a), v !== null && d.add(v), c && a !== (a = f())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(f) == null && e.value) && (l(h(e) ? _(e.value) : e.value), v !== null && d.add(v)), i(() => {
    var s = f();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (d.has(a)) return
    }
    h(e) && s === _(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const u = new Set;

function C(e, f, l, c, d = c) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (f !== null)
    for (var n of f) a = a[n] ?? (a[n] = []);
  a.push(l), b(l, "change", () => {
    var r = l.__value;
    s && (r = m(a, r, l.checked)), d(r)
  }, () => d(s ? [] : null)), i(() => {
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
      d(r)
    }
  })
}

function L(e, f, l = f) {
  b(e, "change", c => {
    var d = c ? e.defaultChecked : e.checked;
    l(d)
  }), (k && e.defaultChecked !== e.checked || g(f) == null) && l(e.checked), i(() => {
    var c = f();
    e.checked = !!c
  })
}

function m(e, f, l) {
  for (var c = new Set, d = 0; d < e.length; d += 1) e[d].checked && c.add(e[d].__value);
  return l || c.delete(f), Array.from(c)
}

function h(e) {
  var f = e.type;
  return f === "number" || f === "range"
}

function _(e) {
  return e === "" ? null : +e
}
export {
  A as a, L as b, C as c
};