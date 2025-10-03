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
} from "./BONTOiKC.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "485fa57ad20bf45d61bdea250be0ef78a269ac0b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "cbdb065c-03e1-446e-aa43-8b62e96f6e95", e._sentryDebugIdIdentifier = "sentry-dbid-cbdb065c-03e1-446e-aa43-8b62e96f6e95")
  })()
} catch {}

function A(e, r, l = r) {
  var f = E(),
    d = new WeakSet;
  _(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = u(e) ? h(a) : a, l(a), v !== null && d.add(v), f && a !== (a = r())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(r) == null && e.value) && (l(u(e) ? h(e.value) : e.value), v !== null && d.add(v)), i(() => {
    var s = r();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (d.has(a)) return
    }
    u(e) && s === h(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const b = new Set;

function C(e, r, l, f, d = f) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (r !== null)
    for (var n of r) a = a[n] ?? (a[n] = []);
  a.push(l), _(l, "change", () => {
    var c = l.__value;
    s && (c = m(a, c, l.checked)), d(c)
  }, () => d(s ? [] : null)), i(() => {
    var c = f();
    if (k && l.defaultChecked !== l.checked) {
      t = !0;
      return
    }
    s ? (c = c || [], l.checked = c.includes(l.__value)) : l.checked = I(l.__value, c)
  }), D(() => {
    var c = a.indexOf(l);
    c !== -1 && a.splice(c, 1)
  }), b.has(a) || (b.add(a), y(() => {
    a.sort((c, o) => c.compareDocumentPosition(o) === 4 ? -1 : 1), b.delete(a)
  })), y(() => {
    if (t) {
      var c;
      if (s) c = m(a, c, l.checked);
      else {
        var o = a.find(w => w.checked);
        c = o == null ? void 0 : o.__value
      }
      d(c)
    }
  })
}

function L(e, r, l = r) {
  _(e, "change", f => {
    var d = f ? e.defaultChecked : e.checked;
    l(d)
  }), (k && e.defaultChecked !== e.checked || g(r) == null) && l(e.checked), i(() => {
    var f = r();
    e.checked = !!f
  })
}

function m(e, r, l) {
  for (var f = new Set, d = 0; d < e.length; d += 1) e[d].checked && f.add(e[d].__value);
  return l || f.delete(r), Array.from(f)
}

function u(e) {
  var r = e.type;
  return r === "number" || r === "range"
}

function h(e) {
  return e === "" ? null : +e
}
export {
  L as a, A as b, C as c
};