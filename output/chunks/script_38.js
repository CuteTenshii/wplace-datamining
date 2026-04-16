import {
  ay as u,
  _ as t,
  V as w,
  x as E,
  X as k,
  az as g,
  B as i,
  aA as D,
  aB as I,
  Y as y
} from "./BZHD_3xD.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "804fae10c9a96a4658fed8df64d864b17b400aa1"
    };
    var c = new e.Error().stack;
    c && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[c] = "18711229-8c45-49ff-ae9b-6602895e8769", e._sentryDebugIdIdentifier = "sentry-dbid-18711229-8c45-49ff-ae9b-6602895e8769")
  } catch {}
})();

function B(e, c, l = c) {
  var d = new WeakSet;
  u(e, "input", async r => {
    var s = r ? e.defaultValue : e.value;
    if (s = h(e) ? b(s) : s, l(s), t !== null && d.add(t), await w(), s !== (s = c())) {
      var f = e.selectionStart,
        v = e.selectionEnd,
        o = e.value.length;
      if (e.value = s ?? "", v !== null) {
        var a = e.value.length;
        f === v && v === o && a > o ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = f, e.selectionEnd = Math.min(v, a))
      }
    }
  }), (i && e.defaultValue !== e.value || E(c) == null && e.value) && (l(h(e) ? b(e.value) : e.value), t !== null && d.add(t)), k(() => {
    var r = c();
    if (e === document.activeElement) {
      var s = g ?? t;
      if (d.has(s)) return
    }
    h(e) && r === b(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "")
  })
}
const _ = new Set;

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
  }), _.has(f) || (_.add(f), y(() => {
    f.sort((a, n) => a.compareDocumentPosition(n) === 4 ? -1 : 1), _.delete(f)
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

function h(e) {
  var c = e.type;
  return c === "number" || c === "range"
}

function b(e) {
  return e === "" ? null : +e
}
export {
  T as a, B as b, C as c
};