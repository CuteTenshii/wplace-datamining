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
} from "./CJKTONAG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "aa4c5126665948c178117465fb480b1b818fb90b"
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
  var d = new WeakSet;
  _(e, "input", async c => {
    var o = c ? e.defaultValue : e.value;
    if (o = u(e) ? h(o) : o, l(o), t !== null && d.add(t), await E(), o !== (o = f())) {
      var r = e.selectionStart,
        s = e.selectionEnd,
        v = e.value.length;
      if (e.value = o ?? "", s !== null) {
        var a = e.value.length;
        r === s && s === v && a > v ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = r, e.selectionEnd = Math.min(s, a))
      }
    }
  }), (k && e.defaultValue !== e.value || w(f) == null && e.value) && (l(u(e) ? h(e.value) : e.value), t !== null && d.add(t)), i(() => {
    var c = f();
    if (e === document.activeElement) {
      var o = S ?? t;
      if (d.has(o)) return
    }
    u(e) && c === h(e.value) || e.type === "date" && !c && !e.value || c !== e.value && (e.value = c ?? "")
  })
}
const b = new Set;

function A(e, f, l, d, c = d) {
  var o = l.getAttribute("type") === "checkbox",
    r = e;
  let s = !1;
  if (f !== null)
    for (var v of f) r = r[v] ?? (r[v] = []);
  r.push(l), _(l, "change", () => {
    var a = l.__value;
    o && (a = m(r, a, l.checked)), c(a)
  }, () => c(o ? [] : null)), i(() => {
    var a = d();
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
      c(a)
    }
  })
}

function R(e, f, l = f) {
  _(e, "change", d => {
    var c = d ? e.defaultChecked : e.checked;
    l(c)
  }), (k && e.defaultChecked !== e.checked || w(f) == null) && l(e.checked), i(() => {
    var d = f();
    e.checked = !!d
  })
}

function m(e, f, l) {
  for (var d = new Set, c = 0; c < e.length; c += 1) e[c].checked && d.add(e[c].__value);
  return l || d.delete(f), Array.from(d)
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