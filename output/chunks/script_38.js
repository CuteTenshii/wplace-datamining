import {
  ay as b,
  Z as t,
  U as w,
  x as E,
  W as k,
  az as g,
  A as i,
  aA as A,
  aB as D,
  X as y
} from "./DK4l5t5k.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e0127cf3e7a9cd170d72434c8831b6836f9b0e1e"
    };
    var c = new e.Error().stack;
    c && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[c] = "27a65485-e81f-4529-af9a-13caf11e750e", e._sentryDebugIdIdentifier = "sentry-dbid-27a65485-e81f-4529-af9a-13caf11e750e")
  } catch {}
})();

function C(e, c, l = c) {
  var d = new WeakSet;
  b(e, "input", async r => {
    var s = r ? e.defaultValue : e.value;
    if (s = _(e) ? u(s) : s, l(s), t !== null && d.add(t), await w(), s !== (s = c())) {
      var f = e.selectionStart,
        v = e.selectionEnd,
        o = e.value.length;
      if (e.value = s ?? "", v !== null) {
        var a = e.value.length;
        f === v && v === o && a > o ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = f, e.selectionEnd = Math.min(v, a))
      }
    }
  }), (i && e.defaultValue !== e.value || E(c) == null && e.value) && (l(_(e) ? u(e.value) : e.value), t !== null && d.add(t)), k(() => {
    var r = c();
    if (e === document.activeElement) {
      var s = g ?? t;
      if (d.has(s)) return
    }
    _(e) && r === u(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "")
  })
}
const h = new Set;

function T(e, c, l, d, r = d) {
  var s = l.getAttribute("type") === "checkbox",
    f = e;
  let v = !1;
  if (c !== null)
    for (var o of c) f = f[o] ?? (f[o] = []);
  f.push(l), b(l, "change", () => {
    var a = l.__value;
    s && (a = m(f, a, l.checked)), r(a)
  }, () => r(s ? [] : null)), k(() => {
    var a = d();
    if (i && l.defaultChecked !== l.checked) {
      v = !0;
      return
    }
    s ? (a = a || [], l.checked = a.includes(l.__value)) : l.checked = A(l.__value, a)
  }), D(() => {
    var a = f.indexOf(l);
    a !== -1 && f.splice(a, 1)
  }), h.has(f) || (h.add(f), y(() => {
    f.sort((a, n) => a.compareDocumentPosition(n) === 4 ? -1 : 1), h.delete(f)
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

function B(e, c, l = c) {
  b(e, "change", d => {
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

function u(e) {
  return e === "" ? null : +e
}
export {
  B as a, C as b, T as c
};