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
} from "./DjeFwfzX.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "209576268ed2d55d78b1f313fb4db5f4a92290b5"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "18711229-8c45-49ff-ae9b-6602895e8769", e._sentryDebugIdIdentifier = "sentry-dbid-18711229-8c45-49ff-ae9b-6602895e8769")
  } catch {}
})();

function B(e, r, l = r) {
  var d = new WeakSet;
  u(e, "input", async c => {
    var s = c ? e.defaultValue : e.value;
    if (s = _(e) ? h(s) : s, l(s), b !== null && d.add(b), await w(), s !== (s = r())) {
      var f = e.selectionStart,
        v = e.selectionEnd,
        o = e.value.length;
      if (e.value = s ?? "", v !== null) {
        var a = e.value.length;
        f === v && v === o && a > o ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = f, e.selectionEnd = Math.min(v, a))
      }
    }
  }), (i && e.defaultValue !== e.value || E(r) == null && e.value) && (l(_(e) ? h(e.value) : e.value), b !== null && d.add(b)), k(() => {
    var c = r();
    if (e === document.activeElement) {
      var s = g ?? b;
      if (d.has(s)) return
    }
    _(e) && c === h(e.value) || e.type === "date" && !c && !e.value || c !== e.value && (e.value = c ?? "")
  })
}
const t = new Set;

function C(e, r, l, d, c = d) {
  var s = l.getAttribute("type") === "checkbox",
    f = e;
  let v = !1;
  if (r !== null)
    for (var o of r) f = f[o] ?? (f[o] = []);
  f.push(l), u(l, "change", () => {
    var a = l.__value;
    s && (a = m(f, a, l.checked)), c(a)
  }, () => c(s ? [] : null)), k(() => {
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
      c(a)
    }
  })
}

function T(e, r, l = r) {
  u(e, "change", d => {
    var c = d ? e.defaultChecked : e.checked;
    l(c)
  }), (i && e.defaultChecked !== e.checked || E(r) == null) && l(e.checked), k(() => {
    var d = r();
    e.checked = !!d
  })
}

function m(e, r, l) {
  for (var d = new Set, c = 0; c < e.length; c += 1) e[c].checked && d.add(e[c].__value);
  return l || d.delete(r), Array.from(d)
}

function _(e) {
  var r = e.type;
  return r === "number" || r === "range"
}

function h(e) {
  return e === "" ? null : +e
}
export {
  T as a, B as b, C as c
};