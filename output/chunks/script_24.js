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
} from "./CGRAleE5.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4e903134a8e52eb1a8da35c90648b14dbd2e6388"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "35667580-9c94-46ee-a286-0d660c3745d7", e._sentryDebugIdIdentifier = "sentry-dbid-35667580-9c94-46ee-a286-0d660c3745d7")
  })()
} catch {}

function A(e, d, l = d) {
  var f = E(),
    c = new WeakSet;
  b(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = h(e) ? _(a) : a, l(a), v !== null && c.add(v), f && a !== (a = d())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(d) == null && e.value) && (l(h(e) ? _(e.value) : e.value), v !== null && c.add(v)), i(() => {
    var s = d();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (c.has(a)) return
    }
    h(e) && s === _(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const u = new Set;

function C(e, d, l, f, c = f) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (d !== null)
    for (var n of d) a = a[n] ?? (a[n] = []);
  a.push(l), b(l, "change", () => {
    var r = l.__value;
    s && (r = m(a, r, l.checked)), c(r)
  }, () => c(s ? [] : null)), i(() => {
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
      c(r)
    }
  })
}

function L(e, d, l = d) {
  b(e, "change", f => {
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

function h(e) {
  var d = e.type;
  return d === "number" || d === "range"
}

function _(e) {
  return e === "" ? null : +e
}
export {
  L as a, A as b, C as c
};