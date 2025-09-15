import {
  F as E,
  G as _,
  l as v,
  z as g,
  H as i,
  I as S,
  h as k,
  J as I,
  K as D,
  L as y
} from "./Cvl6ittZ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b5b27c83ae3760cb72717576498367b1362fdc48"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "f81897f3-b081-4603-a9af-22df85ebac39", e._sentryDebugIdIdentifier = "sentry-dbid-f81897f3-b081-4603-a9af-22df85ebac39")
  })()
} catch {}

function A(e, f, l = f) {
  var d = E(),
    c = new WeakSet;
  _(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = b(e) ? h(a) : a, l(a), v !== null && c.add(v), d && a !== (a = f())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(f) == null && e.value) && (l(b(e) ? h(e.value) : e.value), v !== null && c.add(v)), i(() => {
    var s = f();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (c.has(a)) return
    }
    b(e) && s === h(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const u = new Set;

function C(e, f, l, d, c = d) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (f !== null)
    for (var n of f) a = a[n] ?? (a[n] = []);
  a.push(l), _(l, "change", () => {
    var r = l.__value;
    s && (r = m(a, r, l.checked)), c(r)
  }, () => c(s ? [] : null)), i(() => {
    var r = d();
    if (k && l.defaultChecked !== l.checked) {
      t = !0;
      return
    }
    s ? (r = r || [], l.checked = r.includes(l.__value)) : l.checked = I(l.__value, r)
  }), D(() => {
    var r = a.indexOf(l);
    r !== -1 && a.splice(r, 1)
  }), u.has(a) || (u.add(a), y(() => {
    a.sort((r, o) => r.compareDocumentPosition(o) === 4 ? -1 : 1), u.delete(a)
  })), y(() => {
    if (t) {
      var r;
      if (s) r = m(a, r, l.checked);
      else {
        var o = a.find(w => w.checked);
        r = o == null ? void 0 : o.__value
      }
      c(r)
    }
  })
}

function L(e, f, l = f) {
  _(e, "change", d => {
    var c = d ? e.defaultChecked : e.checked;
    l(c)
  }), (k && e.defaultChecked !== e.checked || g(f) == null) && l(e.checked), i(() => {
    var d = f();
    e.checked = !!d
  })
}

function m(e, f, l) {
  for (var d = new Set, c = 0; c < e.length; c += 1) e[c].checked && d.add(e[c].__value);
  return l || d.delete(f), Array.from(d)
}

function b(e) {
  var f = e.type;
  return f === "number" || f === "range"
}

function h(e) {
  return e === "" ? null : +e
}
export {
  A as a, L as b, C as c
};