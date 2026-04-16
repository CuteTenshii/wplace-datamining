import {
  ay as b,
  _ as t,
  V as w,
  x as E,
  X as k,
  az as g,
  B as i,
  aA as D,
  aB as I,
  Y as y
} from "./jMNCXwTX.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d92995df349756f69cfad78cc6651ba9aa7c7814"
    };
    var l = new e.Error().stack;
    l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "18711229-8c45-49ff-ae9b-6602895e8769", e._sentryDebugIdIdentifier = "sentry-dbid-18711229-8c45-49ff-ae9b-6602895e8769")
  } catch {}
})();

function B(e, l, c = l) {
  var d = new WeakSet;
  b(e, "input", async r => {
    var s = r ? e.defaultValue : e.value;
    if (s = h(e) ? u(s) : s, c(s), t !== null && d.add(t), await w(), s !== (s = l())) {
      var f = e.selectionStart,
        v = e.selectionEnd,
        o = e.value.length;
      if (e.value = s ?? "", v !== null) {
        var a = e.value.length;
        f === v && v === o && a > o ? (e.selectionStart = a, e.selectionEnd = a) : (e.selectionStart = f, e.selectionEnd = Math.min(v, a))
      }
    }
  }), (i && e.defaultValue !== e.value || E(l) == null && e.value) && (c(h(e) ? u(e.value) : e.value), t !== null && d.add(t)), k(() => {
    var r = l();
    if (e === document.activeElement) {
      var s = g ?? t;
      if (d.has(s)) return
    }
    h(e) && r === u(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "")
  })
}
const _ = new Set;

function C(e, l, c, d, r = d) {
  var s = c.getAttribute("type") === "checkbox",
    f = e;
  let v = !1;
  if (l !== null)
    for (var o of l) f = f[o] ?? (f[o] = []);
  f.push(c), b(c, "change", () => {
    var a = c.__value;
    s && (a = m(f, a, c.checked)), r(a)
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
  }), _.has(f) || (_.add(f), y(() => {
    f.sort((a, n) => a.compareDocumentPosition(n) === 4 ? -1 : 1), _.delete(f)
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

function T(e, l, c = l) {
  b(e, "change", d => {
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

function h(e) {
  var l = e.type;
  return l === "number" || l === "range"
}

function u(e) {
  return e === "" ? null : +e
}
export {
  T as a, B as b, C as c
};