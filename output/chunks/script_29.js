import {
  az as u,
  a0 as n,
  W as w,
  G as E,
  Y as k,
  aA as g,
  k as i,
  aB as D,
  aC as I,
  Z as m
} from "./DySbC8v5.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b137ab40316e1e3f22728d8060cbbff276df86f5"
    };
    var c = new e.Error().stack;
    c && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[c] = "bab34e6e-3a5d-441b-8c56-7b8c2ff82afb", e._sentryDebugIdIdentifier = "sentry-dbid-bab34e6e-3a5d-441b-8c56-7b8c2ff82afb")
  } catch {}
})();

function C(e, c, l = c) {
  var d = new WeakSet;
  u(e, "input", async r => {
    var s = r ? e.defaultValue : e.value;
    if (s = h(e) ? _(s) : s, l(s), n !== null && d.add(n), await w(), s !== (s = c())) {
      var f = e.selectionStart,
        v = e.selectionEnd,
        o = e.value.length;
      if (e.value = s ?? "", v !== null) {
        var a = e.value.length;
        f === v && v === o && a > o ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = f, e.selectionEnd = Math.min(v, a))
      }
    }
  }), (i && e.defaultValue !== e.value || E(c) == null && e.value) && (l(h(e) ? _(e.value) : e.value), n !== null && d.add(n)), k(() => {
    var r = c();
    if (e === document.activeElement) {
      var s = g ?? n;
      if (d.has(s)) return
    }
    h(e) && r === _(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "")
  })
}
const t = new Set;

function T(e, c, l, d, r = d) {
  var s = l.getAttribute("type") === "checkbox",
    f = e;
  let v = !1;
  if (c !== null)
    for (var o of c) f = f[o] ?? (f[o] = []);
  f.push(l), u(l, "change", () => {
    var a = l.__value;
    s && (a = y(f, a, l.checked)), r(a)
  }, () => r(s ? [] : null)), k(() => {
    var a = d();
    if (i && l.defaultChecked !== l.checked) {
      v = !0;
      return
    }
    s ? (a = a || [], l.checked = a.includes(l.__value)) : l.checked = D(l.__value, a)
  }), I(() => {
    var a = f.indexOf(l);
    a !== -1 && f.splice(a, 1)
  }), t.has(f) || (t.add(f), m(() => {
    f.sort((a, b) => a.compareDocumentPosition(b) === 4 ? -1 : 1), t.delete(f)
  })), m(() => {
    if (v) {
      var a;
      if (s) a = y(f, a, l.checked);
      else {
        var b = f.find(S => S.checked);
        a = b == null ? void 0 : b.__value
      }
      r(a)
    }
  })
}

function B(e, c, l = c) {
  u(e, "change", d => {
    var r = d ? e.defaultChecked : e.checked;
    l(r)
  }), (i && e.defaultChecked !== e.checked || E(c) == null) && l(e.checked), k(() => {
    var d = c();
    e.checked = !!d
  })
}

function y(e, c, l) {
  for (var d = new Set, r = 0; r < e.length; r += 1) e[r].checked && d.add(e[r].__value);
  return l || d.delete(c), Array.from(d)
}

function h(e) {
  var c = e.type;
  return c === "number" || c === "range"
}

function _(e) {
  return e === "" ? null : +e
}
export {
  B as a, C as b, T as c
};