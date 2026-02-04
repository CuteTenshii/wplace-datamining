import {
  al as _,
  C as t,
  am as E,
  y as w,
  R as i,
  an as S,
  k,
  ao as D,
  ap as I,
  S as y
} from "./BxNCv_Ey.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "393d80b8e89856a8eed8a9424bbd25f96eb3752b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "94553f5b-fd95-4d63-9f33-a82f501406df", e._sentryDebugIdIdentifier = "sentry-dbid-94553f5b-fd95-4d63-9f33-a82f501406df")
  })()
} catch {}

function C(e, f, l = f) {
  var c = new WeakSet;
  _(e, "input", async d => {
    var o = d ? e.defaultValue : e.value;
    if (o = u(e) ? h(o) : o, l(o), t !== null && c.add(t), await E(), o !== (o = f())) {
      var r = e.selectionStart,
        s = e.selectionEnd,
        v = e.value.length;
      if (e.value = o ?? "", s !== null) {
        var a = e.value.length;
        r === s && s === v && a > v ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = r, e.selectionEnd = Math.min(s, a))
      }
    }
  }), (k && e.defaultValue !== e.value || w(f) == null && e.value) && (l(u(e) ? h(e.value) : e.value), t !== null && c.add(t)), i(() => {
    var d = f();
    if (e === document.activeElement) {
      var o = S ?? t;
      if (c.has(o)) return
    }
    u(e) && d === h(e.value) || e.type === "date" && !d && !e.value || d !== e.value && (e.value = d ?? "")
  })
}
const b = new Set;

function A(e, f, l, c, d = c) {
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
  }), b.has(r) || (b.add(r), y(() => {
    r.sort((a, n) => a.compareDocumentPosition(n) === 4 ? -1 : 1), b.delete(r)
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
  R as a, C as b, A as c
};