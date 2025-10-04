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
} from "./BWEr1aAe.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "052f352a026d022e3e4fc4fdcb3f4a54614f0cb2"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      c = new e.Error().stack;
    c && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[c] = "cbdb065c-03e1-446e-aa43-8b62e96f6e95", e._sentryDebugIdIdentifier = "sentry-dbid-cbdb065c-03e1-446e-aa43-8b62e96f6e95")
  })()
} catch {}

function A(e, c, l = c) {
  var d = E(),
    r = new WeakSet;
  _(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = b(e) ? h(a) : a, l(a), v !== null && r.add(v), d && a !== (a = c())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(c) == null && e.value) && (l(b(e) ? h(e.value) : e.value), v !== null && r.add(v)), i(() => {
    var s = c();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (r.has(a)) return
    }
    b(e) && s === h(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
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

function L(e, c, l = c) {
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

function b(e) {
  var c = e.type;
  return c === "number" || c === "range"
}

function h(e) {
  return e === "" ? null : +e
}
export {
  L as a, A as b, C as c
};