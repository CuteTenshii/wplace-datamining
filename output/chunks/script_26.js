import {
  al as _,
  a3 as b,
  am as E,
  x as w,
  Q as i,
  an as S,
  k,
  ao as D,
  ap as I,
  R as y
} from "./CYj7RoHR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "57f41670f2805f713b0da8f3636738eb734a70e1"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "e1bd88d1-bbfe-4741-ad96-3197f744bb91", e._sentryDebugIdIdentifier = "sentry-dbid-e1bd88d1-bbfe-4741-ad96-3197f744bb91")
  })()
} catch {}

function A(e, f, l = f) {
  var c = new WeakSet;
  _(e, "input", async d => {
    var o = d ? e.defaultValue : e.value;
    if (o = u(e) ? h(o) : o, l(o), b !== null && c.add(b), await E(), o !== (o = f())) {
      var r = e.selectionStart,
        s = e.selectionEnd,
        v = e.value.length;
      if (e.value = o ?? "", s !== null) {
        var a = e.value.length;
        r === s && s === v && a > v ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = r, e.selectionEnd = Math.min(s, a))
      }
    }
  }), (k && e.defaultValue !== e.value || w(f) == null && e.value) && (l(u(e) ? h(e.value) : e.value), b !== null && c.add(b)), i(() => {
    var d = f();
    if (e === document.activeElement) {
      var o = S ?? b;
      if (c.has(o)) return
    }
    u(e) && d === h(e.value) || e.type === "date" && !d && !e.value || d !== e.value && (e.value = d ?? "")
  })
}
const t = new Set;

function C(e, f, l, c, d = c) {
  var o = l.getAttribute("type") === "checkbox",
    r = e;
  let s = !1;
  if (f !== null)
    for (var v of f) r = r[v] ?? (r[v] = []);
  r.push(l), _(l, "change", () => {
    var a = l.__value;
    o && (a = m(r, a, l.checked)), d(a)
  }, () => d(o ? [] : null)), i(() => {
    var a = c();
    if (k && l.defaultChecked !== l.checked) {
      s = !0;
      return
    }
    o ? (a = a || [], l.checked = a.includes(l.__value)) : l.checked = D(l.__value, a)
  }), I(() => {
    var a = r.indexOf(l);
    a !== -1 && r.splice(a, 1)
  }), t.has(r) || (t.add(r), y(() => {
    r.sort((a, n) => a.compareDocumentPosition(n) === 4 ? -1 : 1), t.delete(r)
  })), y(() => {
    if (s) {
      var a;
      if (o) a = m(r, a, l.checked);
      else {
        var n = r.find(g => g.checked);
        a = n == null ? void 0 : n.__value
      }
      d(a)
    }
  })
}

function R(e, f, l = f) {
  _(e, "change", c => {
    var d = c ? e.defaultChecked : e.checked;
    l(d)
  }), (k && e.defaultChecked !== e.checked || w(f) == null) && l(e.checked), i(() => {
    var c = f();
    e.checked = !!c
  })
}

function m(e, f, l) {
  for (var c = new Set, d = 0; d < e.length; d += 1) e[d].checked && c.add(e[d].__value);
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
  R as a, A as b, C as c
};