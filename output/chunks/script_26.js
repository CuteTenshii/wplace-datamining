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
} from "./W5rmRnnG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ff343a05e6db78c3f87c013111bf250a2c453aa7"
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
    f = new WeakSet;
  _(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = b(e) ? h(a) : a, l(a), v !== null && f.add(v), d && a !== (a = c())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(c) == null && e.value) && (l(b(e) ? h(e.value) : e.value), v !== null && f.add(v)), i(() => {
    var s = c();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (f.has(a)) return
    }
    b(e) && s === h(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const u = new Set;

function C(e, c, l, d, f = d) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (c !== null)
    for (var n of c) a = a[n] ?? (a[n] = []);
  a.push(l), _(l, "change", () => {
    var r = l.__value;
    s && (r = m(a, r, l.checked)), f(r)
  }, () => f(s ? [] : null)), i(() => {
    var r = d();
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

function L(e, c, l = c) {
  _(e, "change", d => {
    var f = d ? e.defaultChecked : e.checked;
    l(f)
  }), (k && e.defaultChecked !== e.checked || g(c) == null) && l(e.checked), i(() => {
    var d = c();
    e.checked = !!d
  })
}

function m(e, c, l) {
  for (var d = new Set, f = 0; f < e.length; f += 1) e[f].checked && d.add(e[f].__value);
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