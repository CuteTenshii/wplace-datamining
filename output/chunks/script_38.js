import {
  ay as u,
  _ as b,
  V as w,
  x as E,
  X as k,
  az as g,
  B as i,
  aA as D,
  aB as I,
  Y as y
} from "./CJNfechn.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "bd6ed46249e1ed5fe7432cfb3a9b80dcfb887d57"
    };
    var c = new e.Error().stack;
    c && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[c] = "18711229-8c45-49ff-ae9b-6602895e8769", e._sentryDebugIdIdentifier = "sentry-dbid-18711229-8c45-49ff-ae9b-6602895e8769")
  } catch {}
})();

function B(e, c, l = c) {
  var d = new WeakSet;
  u(e, "input", async r => {
    var s = r ? e.defaultValue : e.value;
    if (s = _(e) ? h(s) : s, l(s), b !== null && d.add(b), await w(), s !== (s = c())) {
      var f = e.selectionStart,
        v = e.selectionEnd,
        o = e.value.length;
      if (e.value = s ?? "", v !== null) {
        var a = e.value.length;
        f === v && v === o && a > o ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = f, e.selectionEnd = Math.min(v, a))
      }
    }
  }), (i && e.defaultValue !== e.value || E(c) == null && e.value) && (l(_(e) ? h(e.value) : e.value), b !== null && d.add(b)), k(() => {
    var r = c();
    if (e === document.activeElement) {
      var s = g ?? b;
      if (d.has(s)) return
    }
    _(e) && r === h(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "")
  })
}
const t = new Set;

function C(e, c, l, d, r = d) {
  var s = l.getAttribute("type") === "checkbox",
    f = e;
  let v = !1;
  if (c !== null)
    for (var o of c) f = f[o] ?? (f[o] = []);
  f.push(l), u(l, "change", () => {
    var a = l.__value;
    s && (a = m(f, a, l.checked)), r(a)
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
  }), t.has(f) || (t.add(f), y(() => {
    f.sort((a, n) => a.compareDocumentPosition(n) === 4 ? -1 : 1), t.delete(f)
  })), y(() => {
    if (v) {
      var a;
      if (s) a = m(f, a, l.checked);
      else {
        var n = f.find(S => S.checked);
        a = n == null ? void 0 : n.__value
      }
      r(a)
    }
  })
}

function T(e, c, l = c) {
  u(e, "change", d => {
    var r = d ? e.defaultChecked : e.checked;
    l(r)
  }), (i && e.defaultChecked !== e.checked || E(c) == null) && l(e.checked), k(() => {
    var d = c();
    e.checked = !!d
  })
}

function m(e, c, l) {
  for (var d = new Set, r = 0; r < e.length; r += 1) e[r].checked && d.add(e[r].__value);
  return l || d.delete(c), Array.from(d)
}

function _(e) {
  var c = e.type;
  return c === "number" || c === "range"
}

function h(e) {
  return e === "" ? null : +e
}
export {
  T as a, B as b, C as c
};