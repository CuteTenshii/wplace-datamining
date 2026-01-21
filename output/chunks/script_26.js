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
} from "./8X9bXL-a.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
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
  var r = new WeakSet;
  _(e, "input", async d => {
    var o = d ? e.defaultValue : e.value;
    if (o = u(e) ? h(o) : o, l(o), b !== null && r.add(b), await E(), o !== (o = f())) {
      var c = e.selectionStart,
        s = e.selectionEnd,
        v = e.value.length;
      if (e.value = o ?? "", s !== null) {
        var a = e.value.length;
        c === s && s === v && a > v ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = c, e.selectionEnd = Math.min(s, a))
      }
    }
  }), (k && e.defaultValue !== e.value || w(f) == null && e.value) && (l(u(e) ? h(e.value) : e.value), b !== null && r.add(b)), i(() => {
    var d = f();
    if (e === document.activeElement) {
      var o = S ?? b;
      if (r.has(o)) return
    }
    u(e) && d === h(e.value) || e.type === "date" && !d && !e.value || d !== e.value && (e.value = d ?? "")
  })
}
const t = new Set;

function C(e, f, l, r, d = r) {
  var o = l.getAttribute("type") === "checkbox",
    c = e;
  let s = !1;
  if (f !== null)
    for (var v of f) c = c[v] ?? (c[v] = []);
  c.push(l), _(l, "change", () => {
    var a = l.__value;
    o && (a = m(c, a, l.checked)), d(a)
  }, () => d(o ? [] : null)), i(() => {
    var a = r();
    if (k && l.defaultChecked !== l.checked) {
      s = !0;
      return
    }
    o ? (a = a || [], l.checked = a.includes(l.__value)) : l.checked = D(l.__value, a)
  }), I(() => {
    var a = c.indexOf(l);
    a !== -1 && c.splice(a, 1)
  }), t.has(c) || (t.add(c), y(() => {
    c.sort((a, n) => a.compareDocumentPosition(n) === 4 ? -1 : 1), t.delete(c)
  })), y(() => {
    if (s) {
      var a;
      if (o) a = m(c, a, l.checked);
      else {
        var n = c.find(g => g.checked);
        a = n == null ? void 0 : n.__value
      }
      d(a)
    }
  })
}

function R(e, f, l = f) {
  _(e, "change", r => {
    var d = r ? e.defaultChecked : e.checked;
    l(d)
  }), (k && e.defaultChecked !== e.checked || w(f) == null) && l(e.checked), i(() => {
    var r = f();
    e.checked = !!r
  })
}

function m(e, f, l) {
  for (var r = new Set, d = 0; d < e.length; d += 1) e[d].checked && r.add(e[d].__value);
  return l || r.delete(f), Array.from(r)
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