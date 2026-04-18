import {
  ay as u,
  Z as t,
  U as w,
  x as E,
  W as k,
  az as g,
  A as i,
  aA as A,
  aB as D,
  X as y
} from "./Bpkf4F49.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8cde383e539e83c9bf370a8bc3de0b358fbc04c8"
    };
    var l = new e.Error().stack;
    l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "27a65485-e81f-4529-af9a-13caf11e750e", e._sentryDebugIdIdentifier = "sentry-dbid-27a65485-e81f-4529-af9a-13caf11e750e")
  } catch {}
})();

function C(e, l, c = l) {
  var d = new WeakSet;
  u(e, "input", async r => {
    var s = r ? e.defaultValue : e.value;
    if (s = _(e) ? b(s) : s, c(s), t !== null && d.add(t), await w(), s !== (s = l())) {
      var f = e.selectionStart,
        v = e.selectionEnd,
        o = e.value.length;
      if (e.value = s ?? "", v !== null) {
        var a = e.value.length;
        f === v && v === o && a > o ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = f, e.selectionEnd = Math.min(v, a))
      }
    }
  }), (i && e.defaultValue !== e.value || E(l) == null && e.value) && (c(_(e) ? b(e.value) : e.value), t !== null && d.add(t)), k(() => {
    var r = l();
    if (e === document.activeElement) {
      var s = g ?? t;
      if (d.has(s)) return
    }
    _(e) && r === b(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "")
  })
}
const h = new Set;

function T(e, l, c, d, r = d) {
  var s = c.getAttribute("type") === "checkbox",
    f = e;
  let v = !1;
  if (l !== null)
    for (var o of l) f = f[o] ?? (f[o] = []);
  f.push(c), u(c, "change", () => {
    var a = c.__value;
    s && (a = m(f, a, c.checked)), r(a)
  }, () => r(s ? [] : null)), k(() => {
    var a = d();
    if (i && c.defaultChecked !== c.checked) {
      v = !0;
      return
    }
    s ? (a = a || [], c.checked = a.includes(c.__value)) : c.checked = A(c.__value, a)
  }), D(() => {
    var a = f.indexOf(c);
    a !== -1 && f.splice(a, 1)
  }), h.has(f) || (h.add(f), y(() => {
    f.sort((a, n) => a.compareDocumentPosition(n) === 4 ? -1 : 1), h.delete(f)
  })), y(() => {
    if (v) {
      var a;
      if (s) a = m(f, a, c.checked);
      else {
        var n = f.find(S => S.checked);
        a = n == null ? void 0 : n.__value
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

function m(e, l, c) {
  for (var d = new Set, r = 0; r < e.length; r += 1) e[r].checked && d.add(e[r].__value);
  return c || d.delete(l), Array.from(d)
}

function _(e) {
  var l = e.type;
  return l === "number" || l === "range"
}

function b(e) {
  return e === "" ? null : +e
}
export {
  B as a, C as b, T as c
};