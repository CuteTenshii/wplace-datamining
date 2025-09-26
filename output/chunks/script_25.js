import {
  F as E,
  G as b,
  l as v,
  z as g,
  H as i,
  I as S,
  h as k,
  J as I,
  K as D,
  L as y
} from "./BS43lSzs.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f081a31e50addc038845f96ddcdcac2e385f6a91"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "6fc49d13-f7d8-42d1-9723-e4fb7b109694", e._sentryDebugIdIdentifier = "sentry-dbid-6fc49d13-f7d8-42d1-9723-e4fb7b109694")
  })()
} catch {}

function A(e, d, l = d) {
  var r = E(),
    c = new WeakSet;
  b(e, "input", s => {
    var a = s ? e.defaultValue : e.value;
    if (a = h(e) ? _(a) : a, l(a), v !== null && c.add(v), r && a !== (a = d())) {
      var t = e.selectionStart,
        n = e.selectionEnd;
      e.value = a ?? "", n !== null && (e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length))
    }
  }), (k && e.defaultValue !== e.value || g(d) == null && e.value) && (l(h(e) ? _(e.value) : e.value), v !== null && c.add(v)), i(() => {
    var s = d();
    if (e === document.activeElement) {
      var a = S ?? v;
      if (c.has(a)) return
    }
    h(e) && s === _(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
  })
}
const u = new Set;

function C(e, d, l, r, c = r) {
  var s = l.getAttribute("type") === "checkbox",
    a = e;
  let t = !1;
  if (d !== null)
    for (var n of d) a = a[n] ?? (a[n] = []);
  a.push(l), b(l, "change", () => {
    var f = l.__value;
    s && (f = m(a, f, l.checked)), c(f)
  }, () => c(s ? [] : null)), i(() => {
    var f = r();
    if (k && l.defaultChecked !== l.checked) {
      t = !0;
      return
    }
    s ? (f = f || [], l.checked = f.includes(l.__value)) : l.checked = I(l.__value, f)
  }), D(() => {
    var f = a.indexOf(l);
    f !== -1 && a.splice(f, 1)
  }), u.has(a) || (u.add(a), y(() => {
    a.sort((f, o) => f.compareDocumentPosition(o) === 4 ? -1 : 1), u.delete(a)
  })), y(() => {
    if (t) {
      var f;
      if (s) f = m(a, f, l.checked);
      else {
        var o = a.find(w => w.checked);
        f = o == null ? void 0 : o.__value
      }
      c(f)
    }
  })
}

function L(e, d, l = d) {
  b(e, "change", r => {
    var c = r ? e.defaultChecked : e.checked;
    l(c)
  }), (k && e.defaultChecked !== e.checked || g(d) == null) && l(e.checked), i(() => {
    var r = d();
    e.checked = !!r
  })
}

function m(e, d, l) {
  for (var r = new Set, c = 0; c < e.length; c += 1) e[c].checked && r.add(e[c].__value);
  return l || r.delete(d), Array.from(r)
}

function h(e) {
  var d = e.type;
  return d === "number" || d === "range"
}

function _(e) {
  return e === "" ? null : +e
}
export {
  L as a, A as b, C as c
};