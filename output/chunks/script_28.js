import {
  K as _,
  L as t,
  M as E,
  F as w,
  N as i,
  O as S,
  h as k,
  P as D,
  Q as I,
  R as y
} from "./Cj4a6Kf2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "05e3477bd6a9a14e4165d1dc469ad2945d0197f4"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "8b856484-ca94-4eff-bdc2-dd6a265020d9", e._sentryDebugIdIdentifier = "sentry-dbid-8b856484-ca94-4eff-bdc2-dd6a265020d9")
  })()
} catch {}

function A(e, d, l = d) {
  var r = new WeakSet;
  _(e, "input", async c => {
    var o = c ? e.defaultValue : e.value;
    if (o = h(e) ? u(o) : o, l(o), t !== null && r.add(t), await E(), o !== (o = d())) {
      var f = e.selectionStart,
        s = e.selectionEnd,
        v = e.value.length;
      if (e.value = o ?? "", s !== null) {
        var a = e.value.length;
        f === s && s === v && a > v ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = f, e.selectionEnd = Math.min(s, a))
      }
    }
  }), (k && e.defaultValue !== e.value || w(d) == null && e.value) && (l(h(e) ? u(e.value) : e.value), t !== null && r.add(t)), i(() => {
    var c = d();
    if (e === document.activeElement) {
      var o = S ?? t;
      if (r.has(o)) return
    }
    h(e) && c === u(e.value) || e.type === "date" && !c && !e.value || c !== e.value && (e.value = c ?? "")
  })
}
const b = new Set;

function C(e, d, l, r, c = r) {
  var o = l.getAttribute("type") === "checkbox",
    f = e;
  let s = !1;
  if (d !== null)
    for (var v of d) f = f[v] ?? (f[v] = []);
  f.push(l), _(l, "change", () => {
    var a = l.__value;
    o && (a = m(f, a, l.checked)), c(a)
  }, () => c(o ? [] : null)), i(() => {
    var a = r();
    if (k && l.defaultChecked !== l.checked) {
      s = !0;
      return
    }
    o ? (a = a || [], l.checked = a.includes(l.__value)) : l.checked = D(l.__value, a)
  }), I(() => {
    var a = f.indexOf(l);
    a !== -1 && f.splice(a, 1)
  }), b.has(f) || (b.add(f), y(() => {
    f.sort((a, n) => a.compareDocumentPosition(n) === 4 ? -1 : 1), b.delete(f)
  })), y(() => {
    if (s) {
      var a;
      if (o) a = m(f, a, l.checked);
      else {
        var n = f.find(g => g.checked);
        a = n == null ? void 0 : n.__value
      }
      c(a)
    }
  })
}

function R(e, d, l = d) {
  _(e, "change", r => {
    var c = r ? e.defaultChecked : e.checked;
    l(c)
  }), (k && e.defaultChecked !== e.checked || w(d) == null) && l(e.checked), i(() => {
    var r = d();
    e.checked = !!r
  })
}

function m(e, d, l) {
  for (var r = new Set, c = 0; c < e.length; c += 1) e[c].checked && r.add(e[c].__value);
  return l || r.delete(d), Array.from(r)
}

function h(e) {
  var d = e.type;
  return d === "number" || d === "range"
}

function u(e) {
  return e === "" ? null : +e
}
export {
  R as a, A as b, C as c
};