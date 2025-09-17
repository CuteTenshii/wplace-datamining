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
} from "./D6XPBeZs.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ed542c83f3200bdd2dcdd4a1cf4ac45a32651d00"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "c8b57458-724f-46dc-b5b9-791820786de4", e._sentryDebugIdIdentifier = "sentry-dbid-c8b57458-724f-46dc-b5b9-791820786de4")
  })()
} catch {}

function A(e, d, l = d) {
  var f = E(),
    r = new WeakSet;
  _(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = h(e) ? b(a) : a, l(a), v !== null && r.add(v), f && a !== (a = d())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(d) == null && e.value) && (l(h(e) ? b(e.value) : e.value), v !== null && r.add(v)), i(() => {
    var s = d();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (r.has(a)) return
    }
    h(e) && s === b(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const u = new Set;

function C(e, d, l, f, r = f) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (d !== null)
    for (var n of d) a = a[n] ?? (a[n] = []);
  a.push(l), _(l, "change", () => {
    var c = l.__value;
    s && (c = m(a, c, l.checked)), r(c)
  }, () => r(s ? [] : null)), i(() => {
    var c = f();
    if (k && l.defaultChecked !== l.checked) {
      t = !0;
      return
    }
    s ? (c = c || [], l.checked = c.includes(l.__value)) : l.checked = I(l.__value, c)
  }), D(() => {
    var c = a.indexOf(l);
    c !== -1 && a.splice(c, 1)
  }), u.has(a) || (u.add(a), y(() => {
    a.sort((c, o) => c.compareDocumentPosition(o) === 4 ? -1 : 1), u.delete(a)
  })), y(() => {
    if (t) {
      var c;
      if (s) c = m(a, c, l.checked);
      else {
        var o = a.find(w => w.checked);
        c = o == null ? void 0 : o.__value
      }
      r(c)
    }
  })
}

function L(e, d, l = d) {
  _(e, "change", f => {
    var r = f ? e.defaultChecked : e.checked;
    l(r)
  }), (k && e.defaultChecked !== e.checked || g(d) == null) && l(e.checked), i(() => {
    var f = d();
    e.checked = !!f
  })
}

function m(e, d, l) {
  for (var f = new Set, r = 0; r < e.length; r += 1) e[r].checked && f.add(e[r].__value);
  return l || f.delete(d), Array.from(f)
}

function h(e) {
  var d = e.type;
  return d === "number" || d === "range"
}

function b(e) {
  return e === "" ? null : +e
}
export {
  L as a, A as b, C as c
};