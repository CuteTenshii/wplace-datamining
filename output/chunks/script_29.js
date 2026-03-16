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
} from "./BpkiS5AT.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8b4ab28972d63cbdad1764e9fac2da360f24ece0"
    };
    var l = new e.Error().stack;
    l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "bab34e6e-3a5d-441b-8c56-7b8c2ff82afb", e._sentryDebugIdIdentifier = "sentry-dbid-bab34e6e-3a5d-441b-8c56-7b8c2ff82afb")
  } catch {}
})();

function C(e, l, c = l) {
  var d = new WeakSet;
  u(e, "input", async r => {
    var s = r ? e.defaultValue : e.value;
    if (s = h(e) ? _(s) : s, c(s), n !== null && d.add(n), await w(), s !== (s = l())) {
      var f = e.selectionStart,
        v = e.selectionEnd,
        o = e.value.length;
      if (e.value = s ?? "", v !== null) {
        var a = e.value.length;
        f === v && v === o && a > o ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = f, e.selectionEnd = Math.min(v, a))
      }
    }
  }), (i && e.defaultValue !== e.value || E(l) == null && e.value) && (c(h(e) ? _(e.value) : e.value), n !== null && d.add(n)), k(() => {
    var r = l();
    if (e === document.activeElement) {
      var s = g ?? n;
      if (d.has(s)) return
    }
    h(e) && r === _(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "")
  })
}
const t = new Set;

function T(e, l, c, d, r = d) {
  var s = c.getAttribute("type") === "checkbox",
    f = e;
  let v = !1;
  if (l !== null)
    for (var o of l) f = f[o] ?? (f[o] = []);
  f.push(c), u(c, "change", () => {
    var a = c.__value;
    s && (a = y(f, a, c.checked)), r(a)
  }, () => r(s ? [] : null)), k(() => {
    var a = d();
    if (i && c.defaultChecked !== c.checked) {
      v = !0;
      return
    }
    s ? (a = a || [], c.checked = a.includes(c.__value)) : c.checked = D(c.__value, a)
  }), I(() => {
    var a = f.indexOf(c);
    a !== -1 && f.splice(a, 1)
  }), t.has(f) || (t.add(f), m(() => {
    f.sort((a, b) => a.compareDocumentPosition(b) === 4 ? -1 : 1), t.delete(f)
  })), m(() => {
    if (v) {
      var a;
      if (s) a = y(f, a, c.checked);
      else {
        var b = f.find(S => S.checked);
        a = b == null ? void 0 : b.__value
      }
      r(a)
    }
  })
}

function B(e, l, c = l) {
  u(e, "change", d => {
    var r = d ? e.defaultChecked : e.checked;
    c(r)
  }), (i && e.defaultChecked !== e.checked || E(l) == null) && c(e.checked), k(() => {
    var d = l();
    e.checked = !!d
  })
}

function y(e, l, c) {
  for (var d = new Set, r = 0; r < e.length; r += 1) e[r].checked && d.add(e[r].__value);
  return c || d.delete(l), Array.from(d)
}

function h(e) {
  var l = e.type;
  return l === "number" || l === "range"
}

function _(e) {
  return e === "" ? null : +e
}
export {
  B as a, C as b, T as c
};